import { Form, FormField, FormPassword } from "atomic/obj.form";
import { Button } from "atomic/atm.button/button.component";
import { useForm } from "react-hook-form";
import { useRequest } from "@app/core/graphql/request.hook";
import { CreateRequestMutation } from "@app/data/graphql/mutations/create-request.mutation";

export const RequestHubForm = () => {
  const { register, errors, handleSubmit } = useForm();

  const { loading, request } = useRequest(CreateRequestMutation, {
    onSuccess: () => location.reload(),
    onError: () => console.log('Não foi possível enviar a solicitação. Por favor, tente novamente.'),
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
      <FormField label={"Endereço"} name={"address"} error={errors.address} register={register({ required: true })} />
      <FormField
        label={"O que você é?"}
        name={"person"}
        error={errors.person}
        register={register({ required: true })}
      />
      <Button expanded={true}>Pedir Hub</Button>
    </Form>
  );
};
