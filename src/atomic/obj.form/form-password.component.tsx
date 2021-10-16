import { Input } from './form.component.style'
import { Ref, useState } from 'react'
import { PasswordWrapper } from './wrappers/form-password-wrapper.component'
import { FormInputWrapper, FormWrapperTypes } from './wrappers/form-field-wrapper.component'
import { FormModel } from '@app/model/form.model'

interface FormPasswordProps extends FormModel {
  register: Ref<HTMLInputElement>
}

export const FormPassword: React.FC<FormPasswordProps> = ({
  label,
  name,
  placeholder,
  caption,
  value,
  error,
  register
}) => {
  const [passwordShown, setPasswordShown] = useState<boolean>(false)

  return (
    <FormInputWrapper name={name} label={label} caption={caption} error={error} type={FormWrapperTypes.text}>
      <PasswordWrapper showPassword={() => setPasswordShown(!passwordShown)}>
        <Input
          type={passwordShown ? 'text' : 'password'}
          name={name}
          placeholder={placeholder}
          ref={register}
          id={name}
          value={value}
        />
      </PasswordWrapper>
    </FormInputWrapper>
  )
}
