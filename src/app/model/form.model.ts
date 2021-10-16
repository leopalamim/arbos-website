import { ReactElement } from 'react'
import { FieldError } from 'react-hook-form'

export interface FormModel {
  id?: string
  name: string
  label?: string | ReactElement
  value?: string | number
  error?: FieldError
  placeholder?: string
  caption?: string
}
