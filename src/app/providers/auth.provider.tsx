import { useCallback, useContext, useEffect, useState } from 'react'
import { RoleName } from '@app/data/graphql/types/schema'
import { handleCookies } from '@app/utils/handle-cookies'
import { parseCookies } from 'nookies'
import { AuthContext } from './auth.context'
import { useFlashMessage } from '@app/modules/components/flash-message.hook'
import router from 'next/router'
import { Routes } from '@app/modules/app/routes'
import { useMutation } from '@app/core/graphql/graphql-mutation.hook'
import { LoginMutation, LoginMutationVariables, UserQuery, UsersPermissionsLoginInput } from '@app/data/graphql'
import { useLazyQuery } from '@app/core/graphql/graphql-query.hooks'

export const AuthProvider: React.FC = ({ children }) => {
  const [userContext, setUserContext] = useState<AuthContext>({} as AuthContext)
  const { showAlert } = useFlashMessage()

  const [getData, { data: userDetails }] = useLazyQuery<UserQuery>('UserQuery', { id: userContext.id })

  const [request, { loading }] = useMutation<LoginMutation, LoginMutationVariables>('LoginMutation', {
    onCompleted: async (data: LoginMutation) => {
      handleCookies('set', data)

      if (parseCookies()?.role === RoleName.Admin) {
        setUserContext({
          ...userContext,
          isAdmin: true,
          username: data.login.user.username,
          id: data.login.user.id,
          isLogged: true,
          login,
          logout,
          loading
        })
      }

      router.push(Routes.PrivateArea.Main)
    },
    onError: (error) => showAlert(error.message)
  })

  const login = useCallback(
    async (loginForm: UsersPermissionsLoginInput) => {
      await getData()
      await request({
        input: {
          identifier: loginForm.identifier,
          password: loginForm.password
        }
      })
    },
    [request, getData]
  )

  const logout = () => {
    handleCookies('destroy')
    setUserContext({} as AuthContext)
    location.reload()
  }

  useEffect(() => {
    setUserContext({
      username: parseCookies()?.username,
      id: parseCookies()?.id,
      isAdmin: parseCookies()?.role === RoleName.Admin,
      isLogged: !!parseCookies()?.jwt,
      loading,
      login,
      logout
    })
  }, [loading, login, userDetails])

  return <AuthContext.Provider value={userContext}>{children}</AuthContext.Provider>
}

export const useAuthContext = (): AuthContext => {
  const context = useContext(AuthContext)
  return context
}
