import { useMutation as useApolloMutation, OperationVariables, FetchResult } from '@apollo/client'

import { getMutation, MutationName } from 'app/data/graphql/graphql-docs.service'
import { AppError } from 'app/model/error.model'
import { useCallback } from 'react'

import { mapApolloError } from './graphql-error.mapper'

export interface MutationResult<TData> {
  called?: boolean
  loading: boolean
  data: TData | undefined | null
  error: AppError | undefined
}

export interface MutationOptions<TData> {
  onCompleted?: (data: TData) => void
  onError?: (error: AppError) => void
}

export type MutationTuple<TData, TVariables> = [
  (variables?: TVariables) => Promise<FetchResult<TData>>,
  MutationResult<TData>
]

export const useMutation = <TData, TVariables = OperationVariables>(
  document: MutationName,
  options: MutationOptions<TData> = {}
): MutationTuple<TData, TVariables> => {
  const query = getMutation(document)

  const [apolloMutate, res] = useApolloMutation<TData, TVariables>(query, {
    onCompleted: options.onCompleted,
    onError: (error) => options.onError?.(mapApolloError(error))
  })

  const mutate = useCallback(
    (variables: TVariables | undefined) => {
      return apolloMutate({ variables })
    },
    [apolloMutate]
  )

  return [
    mutate,
    {
      called: res.called,
      loading: res.loading,
      data: res.data,
      error: res.error ? mapApolloError(res.error) : undefined
    }
  ]
}
