import { ApolloError } from '@apollo/client'
import { GraphQLError as GraphQLOriginalError } from 'graphql'

import { AppError, ErrorType } from 'app/model/error.model'

interface NetworkError {
  name: string
  response: {
    status: number
  }
  statusCode: number
  bodyText: string
  result: any
}

type GraphQLError = (GraphQLOriginalError & { code: number })[]

export const mapApolloError = (error: ApolloError): AppError => {
  console.warn('[GraphQLError] Error: ', JSON.stringify(error, null, 2))

  if (error.graphQLErrors || error.networkError) {
    return handleApolloError(error)
  } else {
    console.warn('[GraphQlError] Invalid error format.')
    return new AppError(ErrorType.Internal)
  }
}

const handleApolloError = ({
  graphQLErrors,
  networkError: apolloNetwordError,
  message: serverErrorMessage
}: ApolloError): AppError => {
  const networkError = (apolloNetwordError as unknown) as NetworkError

  const graphqlErrorMessage = graphQLErrors[0]?.message

  const graphqlCredendtialsMessage = graphQLErrors[0]?.extensions.exception.data?.data[0].messages[0].message

  if (isTimeoutError(serverErrorMessage)) {
    return new AppError(ErrorType.Timeout)
  }

  if (isConnectionError(serverErrorMessage)) {
    return new AppError(ErrorType.Connection)
  }

  if (isCredentialError(graphqlCredendtialsMessage)) {
    return new AppError(ErrorType.Credentials)
  }

  if (isAuthenticationError(graphqlErrorMessage)) {
    return new AppError(ErrorType.Authorization)
  }

  if (networkError) {
    return handleNetworkError(networkError, serverErrorMessage)
  } else if (graphQLErrors.length > 0) {
    return handleGraphQLError(graphQLErrors as GraphQLError)
  } else {
    return new AppError(ErrorType.Internal, serverErrorMessage)
  }
}

export const handleNetworkError = (networkError: NetworkError, fallbackMessage: string): AppError => {
  let message: string | undefined
  let type: ErrorType = ErrorType.Internal

  if (networkError.result?.errors?.length > 0) {
    const [error] = networkError.result.errors
    message = error.message ?? fallbackMessage
  } else if (networkError.response?.status === 401) {
    type = ErrorType.Authorization
  } else {
    console.warn('[NetworkError] Unexpected network error.')
    const errorMessage = networkError.bodyText ?? fallbackMessage
    message = errorMessage
  }

  return new AppError(type, message)
}

const handleGraphQLError = ([graphQLError]: GraphQLError): AppError => {
  const type = graphQLErrorCodeTypeMap[graphQLError.code]
  return new AppError(type, graphQLError.message)
}

type ErrorCodeTypeMap = { default: ErrorType } & { [code: number]: ErrorType }

const graphQLErrorCodeTypeMap: ErrorCodeTypeMap = {
  401: ErrorType.Authorization,
  403: ErrorType.Forbidden,
  404: ErrorType.NotFound,
  default: ErrorType.Internal
}

const isTimeoutError = (message: string): boolean => {
  const TIMEOUT_ERROR_MESSAGE = 'timeout'
  return message?.includes(TIMEOUT_ERROR_MESSAGE)
}

const isConnectionError = (message: string): boolean => {
  const CONNECTION_ERROR_MESSAGE = 'Network request failed'
  return message?.includes(CONNECTION_ERROR_MESSAGE)
}

const isAuthenticationError = (message: string): boolean => {
  const AUTHENTICATION_ERROR_MESSAGE = 'Bad Request'

  return message?.includes(AUTHENTICATION_ERROR_MESSAGE)
}

const isCredentialError = (message: string): boolean => {
  const CREDENTIALS_ERROR_MESSAGE = 'Email is already taken.'

  return message?.includes(CREDENTIALS_ERROR_MESSAGE)
}
