import { Input } from './form.component.style'
import { FormInputWrapper } from './wrappers/form-field-wrapper.component'
import { FormWrapperTypes } from './wrappers/form-field-wrapper.component'
import { Ref } from 'react'
import { FormModel } from '@app/model/form.model'

interface FormFieldProps extends FormModel {
  register: Ref<HTMLInputElement>
  variant?: FormFieldTypes
  defaultValue?: string | number
  maxLength?: number
  question?: boolean
  openModal?: () => void
  disabled?: boolean
}

export enum FormFieldTypes {
  text = 'text',
  date = 'date',
  number = 'number'
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  placeholder,
  caption,
  value,
  error,
  register,
  variant,
  defaultValue,
  maxLength,
  question,
  openModal,
  disabled
}) => (
  <FormInputWrapper
    name={name}
    label={label}
    caption={caption}
    error={error}
    type={FormWrapperTypes.text}
    question={question}
    openModal={openModal}
  >
    <Input
      type={variant ?? FormFieldTypes.text}
      name={name}
      placeholder={placeholder}
      ref={register}
      id={name}
      value={value}
      defaultValue={defaultValue}
      maxLength={maxLength}
      disabled={disabled}
    />
  </FormInputWrapper>
)
