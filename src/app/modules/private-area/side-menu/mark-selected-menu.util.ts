import { Routes } from '@app/modules/app/routes'

export const markSelectedMenuBasedOnRoute = (route: string): boolean => {
  const { pathname } = location
  const isRouteSmallerThanPath = route.length < pathname.length
  const isPathIncludesRoute = pathname.includes(route)

  if (isRouteSmallerThanPath && isPathIncludesRoute) {
    const isHomeOrMainPrivateAreaRoute = route === Routes.Home || route === Routes.PrivateArea.Main

    return !isHomeOrMainPrivateAreaRoute && isPathIncludesRoute
  }

  return pathname === route
}
