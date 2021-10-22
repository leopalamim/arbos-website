import { Form, FormField, FormSelect } from "atomic/obj.form";
import { Button } from "atomic/atm.button/button.component";
import { useForm } from "react-hook-form";
import { useRequest } from "@app/core/graphql/request.hook";
import { CreateRequestMutation } from "@app/data/graphql/mutations/create-request.mutation";
import { Label } from "@atomic/atm.typography";
import { Separator } from '@atomic/atm.separator'

export const RequestHubForm = () => {
  const { register, errors, handleSubmit } = useForm();

  const { loading, request } = useRequest(CreateRequestMutation, {
    onSuccess: () => location.reload(),
    onError: () => alert('Não foi possível enviar a solicitação. Por favor, tente novamente.'),
  });

  const handleRequest = (data) => {
    request({
      input: {
        data: {
          name: data.name,
          phone: data.phone,
          email: data.email,
          address: data.address,
          person: data.person,
        },
      },
    });
  };

  return (
    <Form onSubmit={handleSubmit(handleRequest)}>
      <FormField label={"Nome"} name={"name"} error={errors.name} register={register({ required: true })} />
      <FormField label={"Telefone"} name={"phone"} error={errors.phone} register={register({ required: true })} />
      <FormField label={"Email"} name={"email"} error={errors.email} register={register({ required: true })} />
      <FormField label={"Endereço do condomínio"} name={"address"} error={errors.address} register={register({ required: true })} />
      <Label>O que você é?</Label>
      <Separator type={'line'} />
      <FormSelect label={'Morador'} name={'person'} value={'morador'} register={register({ required: true })} />
      <FormSelect label={'Síndico'} name={'person'} value={'sindico'} register={register({ required: true })} />
      <FormSelect label={'Síndico profissional'} name={'person'} value={'sindico_profissional'} register={register({ required: true })} />
      <Separator type={'line'} />
      <Button expanded={true}>Pedir Hub</Button>
    </Form>
  );
};
