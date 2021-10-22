interface ErrorProps {
  message: string;
}

export const handleGenericError: React.FC<ErrorProps> = (props: ErrorProps): JSX.Element => {
  if (props.message.includes("403")) {
    console.log("An error occurred:", props.message);
    alert(`Houve um erro: você não possui permissão para executar esta ação.`);
  } else {
    console.log("An error occurred:", props.message);
    alert(`Houve um erro: ${props.message}. Por favor, tente novamente.`);
  }
  location.reload();
  return;
};
