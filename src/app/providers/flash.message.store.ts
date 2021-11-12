import * as React from 'react'
import { FlashMessageType } from 'atomic/mol.flash-message/flash-message.component'

export enum FlashMessageTargetName {
  APP = 'app'
}

export interface FlashMessageStoreContent {
  type?: FlashMessageType
  hidden: boolean
  content?: string
  dismissible?: string
  autoClose?: string
}

export interface FlashMessageStoreState {
  [key: string]: FlashMessageStoreContent
}

export interface FlashStoreProps {
  flash: FlashMessageStoreState
  showMessage: (key: string, type: FlashMessageType, content: string, dismissible?: string, autoClose?: string) => void
  hideMessage: (key: string) => void
}

export const useFlashStore = (): FlashStoreProps => {
  const [flash, setFlash] = React.useState({})

  const showMessage = (
    key: string,
    type: FlashMessageType,
    content: string,
    dismissible: string,
    autoClose: string
  ) => {
    const newFlash = { ...flash }
    newFlash[key] = { type, content, hidden: false, dismissible, autoClose }
    setFlash(newFlash)
  }

  const hideMessage = (key: string) => {
    const newFlash = { ...flash }
    newFlash[key] = { hidden: true }
    setFlash(newFlash)
  }

  return { flash, showMessage, hideMessage }
}
