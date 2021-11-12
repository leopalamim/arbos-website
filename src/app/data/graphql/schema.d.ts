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

export interface createRequestInput {
  data?: RequestInput | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================

