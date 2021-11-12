import { ApolloClient, InMemoryCache, ApolloLink } from '@apollo/client'
import { parseCookies } from 'nookies'
import { createUploadLink } from 'apollo-upload-client'

const uploadLink = createUploadLink({ uri: process.env.NEXT_PUBLIC_GRAPHQL_BASE_URL })

const authLink = new ApolloLink((operation, forward) => {
  const token = parseCookies()?.jwt
  const ctx = operation.getContext()

  if (ctx?.headers?.authorization || token) {
    operation.setContext({
      headers: {
        authorization: ctx?.headers?.authorization ?? `Bearer ${token}` ?? ''
      }
    })
  }
  return forward(operation)
})

export const client = new ApolloClient({
  link: authLink.concat(uploadLink),
  cache: new InMemoryCache()
})
