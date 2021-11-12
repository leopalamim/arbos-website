/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


// ====================================================
// GraphQL mutation operation: CreateRequestMutation
// ====================================================


export interface CreateRequestMutation_createRequest_request {
  __typename: "Request";
  id: string;
  name: string | null;
  email: string | null;
  phone: string | null;
  address: string | null;
  person: ENUM_REQUEST_PERSON | null;
}

export interface CreateRequestMutation_createRequest {
  __typename: "createRequestPayload";
  request: CreateRequestMutation_createRequest_request | null;
}

export interface CreateRequestMutation {
  createRequest: CreateRequestMutation_createRequest | null;
}

export interface CreateRequestMutationVariables {
  input?: createRequestInput | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


// ====================================================
// GraphQL mutation operation: LoginMutation
// ====================================================


export interface LoginMutation_login_user_role {
  __typename: "UsersPermissionsMeRole";
  name: string;
}

export interface LoginMutation_login_user {
  __typename: "UsersPermissionsMe";
  id: string;
  username: string;
  role: LoginMutation_login_user_role | null;
}

export interface LoginMutation_login {
  __typename: "UsersPermissionsLoginPayload";
  jwt: string | null;
  user: LoginMutation_login_user;
}

export interface LoginMutation {
  login: LoginMutation_login;
}

export interface LoginMutationVariables {
  input: UsersPermissionsLoginInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


// ====================================================
// GraphQL query operation: RequestsQuery
// ====================================================


export interface RequestsQuery_requests {
  __typename: "Request";
  id: string;
  created_at: any;
  name: string | null;
  phone: string | null;
  email: string | null;
  address: string | null;
  person: ENUM_REQUEST_PERSON | null;
}

export interface RequestsQuery {
  requests: (RequestsQuery_requests | null)[] | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


// ====================================================
// GraphQL query operation: UserQuery
// ====================================================


export interface UserQuery_user_role {
  __typename: "UsersPermissionsRole";
  name: string;
}

export interface UserQuery_user {
  __typename: "UsersPermissionsUser";
  username: string;
  email: string;
  role: UserQuery_user_role | null;
}

export interface UserQuery {
  user: UserQuery_user | null;
}

export interface UserQueryVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.


//==============================================================
// START Enums and Input Objects
//==============================================================


export enum ENUM_REQUEST_PERSON {
  morador = "morador",
  sindico = "sindico",
  sindico_profissional = "sindico_profissional",
}

export interface RequestInput {
  name?: string | null;
  phone?: string | null;
  email?: string | null;
  address?: string | null;
  person?: ENUM_REQUEST_PERSON | null;
  published_at?: any | null;
  created_by?: string | null;
  updated_by?: string | null;
}

export interface UsersPermissionsLoginInput {
  identifier: string;
  password: string;
  provider?: string | null;
}

export interface createRequestInput {
  data?: RequestInput | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================

