import { Form, FormField } from "atomic/obj.form";
import { Button } from "atomic/atm.button/button.component";
import { useForm } from "react-hook-form";
import { useMutation } from "@app/core/graphql/graphql-mutation.hook";
import { Separator } from "@atomic/atm.separator";

export const RequestForm = () => {
  const { register, errors, handleSubmit } = useForm();

  const [request, { loading }] = useMutation('CreateRequestMutation', {
    onCompleted: () => location.reload(),
    onError: () => alert("Não foi possível enviar a solicitação. Por favor, tente novamente."),
  });

  const handleRequest = (data) => {
    request({
      input: {
        data: {
          email: data.email,
        },
      },
    });
  };

  return (
    <Form onSubmit={handleSubmit(handleRequest)}>
      <FormField placeholder={"Digite seu email..."} name={"email"} error={errors.email} register={register({ required: true })} />
      <Separator type={"line"} />
      <Button expanded={true}>Quero receber notícias</Button>
    </Form>
  );
};
