import { Form, FormField } from "atomic/obj.form";
import { Button } from "atomic/atm.button/button.component";
import { useForm } from "react-hook-form";
import { useMutation } from "@app/core/graphql/graphql-mutation.hook";
import { Separator } from "@atomic/atm.separator";
import { Hbox } from "@atomic/obj.hbox";
import { useRouter } from "next/router";
import { Routes } from "@app/modules/app/routes";

export const RequestForm = () => {
  const { register, errors, handleSubmit } = useForm();
  const router = useRouter();

  const [request, { loading }] = useMutation('CreateRequestMutation', {
    onCompleted: () => router.push(Routes.Thanks),
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
      <Hbox>
        <Hbox.Item>
          <FormField placeholder={"Digite seu email..."} name={"email"} error={errors.email} register={register({ required: true })} />
        </Hbox.Item>
        <Hbox.Separator />
        <Hbox.Item noGrow={true}>
          <Button kind={"callToAction"} expanded={true}>Me notifique!</Button>
        </Hbox.Item>
      </Hbox>
    </Form>
  );
};
