import { Form, FormField, FormPassword } from 'atomic/obj.form'
import { Button } from 'atomic/atm.button/button.component'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { Routes } from 'app/modules/app/routes'
import { Separator } from '@atomic/atm.separator'
import { useAuthContext } from '@app/providers/auth.provider'

export const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm()
  const router = useRouter()

  const { isLogged, login, loading } = useAuthContext()

  if (isLogged) {
    router.push(Routes.PrivateArea.Main)
  }

  const handleAuthenticateUser = (item) => {
    login(item)
  }

  return (
    <Form onSubmit={handleSubmit(handleAuthenticateUser)}>
      <FormField label={'Email'} name={'identifier'} error={errors.email} register={register({ required: true })} />
      <FormPassword label={'Senha'} name={'password'} error={errors.password} register={register({ required: true })} />
      <Separator type={'line'} />
      <Button expanded={true} type={'submit'} onClick={handleSubmit(handleAuthenticateUser)} loading={loading}>
        Login
      </Button>
    </Form>
  )
}
