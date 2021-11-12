import {
  OperationVariables,
  useQuery as useApolloQuery,
  useLazyQuery as useApolloLazyQuery,
  WatchQueryFetchPolicy
} from '@apollo/client'
import { mapApolloError } from '@app/core/graphql/graphql-error.mapper'
import { getQuery, QueryName } from '@app/data/graphql/graphql-docs.service'
import { AppError } from '@app/model/error.model'
import { useCallback } from 'react'

export interface QueryResult<TData> {
  called?: boolean
  loading: boolean
  data: TData | undefined
  error: AppError | undefined
}

export interface QueryOptions<TData> {
  fetchPolicy?: WatchQueryFetchPolicy
  onCompleted?: (data: TData) => void
  onError?: (error: AppError) => void
}

const DEFAULT_CACHE_POLICY: WatchQueryFetchPolicy = 'cache-and-network'

export const useQuery = <TData, TVariables = OperationVariables>(
  document: QueryName,
  variables?: TVariables,
  options: QueryOptions<TData> = {}
): QueryResult<TData> => {
  if (!options.fetchPolicy) {
    options.fetchPolicy = DEFAULT_CACHE_POLICY
  }

  const query = getQuery(document)

  const res = useApolloQuery<TData, TVariables>(query, {
    variables,
    onCompleted: options.onCompleted,
    onError: (error) => options.onError?.(mapApolloError(error)),
    fetchPolicy: options.fetchPolicy
  })

  return {
    called: res.called,
    loading: res.loading,
    data: res.data,
    error: res.error && mapApolloError(res.error)
  }
}

export type QueryTuple<TData, TVariables> = [(variables?: TVariables) => void, QueryResult<TData>]

export const useLazyQuery = <TData, TVariables = OperationVariables>(
  document: QueryName,
  variables?: TVariables,
  options: QueryOptions<TData> = {}
): QueryTuple<TData, TVariables> => {
  const query = getQuery(document)

  const [apolloQuery, res] = useApolloLazyQuery<TData, TVariables>(query, {
    variables,
    onCompleted: options.onCompleted,
    onError: (error) => options.onError?.(mapApolloError(error))
  })

  const performQuery = useCallback(
    (vars: TVariables | undefined) => {
      apolloQuery({ variables: vars })
    },
    [apolloQuery]
  )

  return [
    performQuery,
    {
      called: res.called,
      loading: res.loading,
      data: res.data,
      error: res.error && mapApolloError(res.error)
    }
  ]
}
