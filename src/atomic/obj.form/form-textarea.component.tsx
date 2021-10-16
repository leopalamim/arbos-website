import { Textarea } from './form.component.style'
import { Ref } from 'react'
import { FormInputWrapper, FormWrapperTypes } from './wrappers/form-field-wrapper.component'
import { FormModel } from '@app/model/form.model'

interface FormTextAreaProps extends FormModel {
  register: Ref<HTMLTextAreaElement>
  largeField?: boolean
  maxLength?: number
}

export const FormTextArea: React.FC<FormTextAreaProps> = ({
  label,
  name,
  placeholder,
  caption,
  value,
  error,
  register,
  largeField,
  maxLength
}) => (
  <FormInputWrapper name={name} label={label} caption={caption} error={error} type={FormWrapperTypes.text}>
    <Textarea
      name={name}
      ref={register}
      placeholder={placeholder}
      id={name}
      value={value}
      largeField={largeField}
      maxLength={maxLength}
    />
  </FormInputWrapper>
)
