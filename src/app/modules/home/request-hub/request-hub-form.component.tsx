import { Form, FormField, FormPassword } from 'atomic/obj.form'
import { Button } from 'atomic/atm.button/button.component'
import { useForm } from 'react-hook-form'
import { Separator } from '@atomic/atm.separator'

export const RequestHubForm = () => {
  const { register, errors } = useForm()

  return (
    <Form>
      <FormField label={'Nome'} name={'name'} error={errors.name} register={register({ required: true })} />
      <FormField label={'Telefone'} name={'phone'} error={errors.phone} register={register({ required: true })} />
      <FormField label={'Email'} name={'email'} error={errors.email} register={register({ required: true })} />
      <FormField label={'Endereço'} name={'address'} error={errors.address} register={register({ required: true })} />
      <FormField label={'O que você é?'} name={'who'} error={errors.who} register={register({ required: true })} />
      <Button expanded={true} type={'submit'}>
        Pedir Hub
      </Button>
    </Form>
  )
}
