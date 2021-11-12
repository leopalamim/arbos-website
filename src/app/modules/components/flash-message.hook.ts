import { useStore } from 'app/core/global-store.service'
import { FlashMessageStoreContent, useFlashStore, FlashStoreProps } from 'app/providers/flash.message.store'
import { useMemo } from 'react'

type DismissibleProps = 'undismissible' | 'dismissible'
type PermanentProps = 'permanent'

export const useFlashMessage = () => {
  const { flash, showMessage, hideMessage } = useStore<FlashStoreProps>(useFlashStore)

  const data = useMemo<FlashMessageStoreContent>(() => {
    return flash['app'] || { type: 'info', content: '', hidden: true }
  }, [flash])

  const showSuccess = (content: string, dismissible?: DismissibleProps, autoClose?: PermanentProps) => {
    showMessage('app', 'success', content, dismissible, autoClose)
  }

  const showAlert = (content: string, dismissible?: DismissibleProps, autoClose?: PermanentProps) => {
    showMessage('app', 'alert', content, dismissible, autoClose)
  }

  const showInfo = (content: string, dismissible?: DismissibleProps, autoClose?: PermanentProps) => {
    showMessage('app', 'info', content, dismissible, autoClose)
  }

  const showWarning = (content: string, dismissible?: DismissibleProps, autoClose?: PermanentProps) => {
    showMessage('app', 'warning', content, dismissible, autoClose)
  }

  const hide = () => {
    hideMessage('app')
  }

  return { showSuccess, showAlert, showInfo, showWarning, hide, data }
}
