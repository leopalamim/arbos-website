export enum ErrorType {
  Authorization = 'Authorization',
  Connection = 'Connection',
  Forbidden = 'Forbidden',
  NotFound = 'NotFound',
  Internal = 'Internal',
  Timeout = 'Timeout',
  Credentials = 'CredentialsTaken'
}

export class AppError extends Error {
  type: ErrorType
  message: string

  public messageMapper: { [key in ErrorType]: string } = {
    [ErrorType.Authorization]: 'Houve um erro: credenciais inválidas. Por favor, tente novamente.',
    [ErrorType.Connection]: 'Houve um erro de conexão. Por favor, tente novamente.',
    [ErrorType.Forbidden]: 'Você não possui permissão para fazer isso.',
    [ErrorType.NotFound]: 'Desculpe, não encontramos a página que você procurou.',
    [ErrorType.Timeout]: 'A conexão foi interrompida antes de completarmos a operação. Por favor, tente novamente.',
    [ErrorType.Internal]: 'Encontramos um erro interno de servidor. Por favor tente novamente.',
    [ErrorType.Credentials]:
      'Já possuímos um cadastro com essas credenciais. Por favor, confirme seu email ou aguarde a confirmação do administrador.'
  }

  constructor(type?: ErrorType, message?: string) {
    super(message)
    this.type = type ?? ErrorType.Internal
    this.message = type
      ? this.messageMapper[type]
      : 'Encontramos um erro interno de servidor. Por favor tente novamente.'
  }
}
