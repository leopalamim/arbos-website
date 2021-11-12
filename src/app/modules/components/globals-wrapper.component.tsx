import { useStore } from '@app/core/global-store.service'
import { HideOverflowStoreReturn, useHideOverflowStore } from '@app/providers/hide.overflow.store'
import { Color } from '@atomic/obj.constants/constants'
import { GlobalStyle } from '@atomic/obj.globals/global.style'
import NextNProgress from 'nextjs-progressbar'
import { AuthProvider } from '@app/providers/auth.provider'

export const GlobalsWrapper: React.FC = ({ children }) => {
  const { overflow } = useStore<HideOverflowStoreReturn>(useHideOverflowStore)

  return (
    <>
      <GlobalStyle hideOverflow={overflow.isHidden} />
      <NextNProgress color={Color.Primary} startPosition={0.3} stopDelayMs={200} height={5} />
      <AuthProvider>{children}</AuthProvider>
    </>
  )
}
