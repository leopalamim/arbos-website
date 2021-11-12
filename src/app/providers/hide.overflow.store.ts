import { useCallback, useState } from 'react'

export interface HideOverflowStoreReturn {
  overflow: { isHidden: boolean }
  showOverflow: () => void
  hideOverflow: () => void
}

export const useHideOverflowStore = (): HideOverflowStoreReturn => {
  const [overflow, setOverflow] = useState({ isHidden: false })

  const showOverflow = useCallback(() => setOverflow({ isHidden: false }), [])

  const hideOverflow = useCallback(() => setOverflow({ isHidden: true }), [])

  return { overflow, showOverflow, hideOverflow }
}
