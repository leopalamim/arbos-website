import { Input } from './form.component.style'
import { FormInputWrapper, FormWrapperTypes } from './wrappers/form-field-wrapper.component'
import { Ref } from 'react'
import { FormModel } from '@app/model/form.model'

interface FormSelectProps extends FormModel {
  register: Ref<HTMLInputElement>
  defaultChecked?: boolean
  variant?: FormSelectFieldTypes
}

export enum FormSelectFieldTypes {
  checkbox = 'checkbox',
  radio = 'radio'
}

export const FormSelect: React.FC<FormSelectProps> = ({
  id,
  label,
  name,
  value,
  error,
  register,
  defaultChecked,
  variant
}) => {
  return (
    <FormInputWrapper name={name} label={label} error={error} type={FormWrapperTypes.select} id={id}>
      <Input
        type={variant ?? FormSelectFieldTypes.radio}
        id={id}
        name={name}
        ref={register}
        value={value}
        defaultChecked={defaultChecked}
      />
    </FormInputWrapper>
  )
}
