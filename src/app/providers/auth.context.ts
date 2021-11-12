import { UsersPermissionsLoginInput } from '@app/data/graphql'
import { createContext } from 'react'

export interface AuthContext {
  login: (data: UsersPermissionsLoginInput) => void
  logout: () => void
  isLogged: boolean
  isAdmin: boolean
  loading: boolean
  isCurator?: boolean
  id: string
  username: string
}

export const AuthContext = createContext<AuthContext>({} as AuthContext)
