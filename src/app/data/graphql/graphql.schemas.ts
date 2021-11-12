// Queries
import RequestsQuery from "./queries/requests.query.graphql";
import UserQuery from "./queries/user.query.graphql";

//Mutations
import CreateRequestMutation from "./mutations/create-request.mutation.graphql";
import LoginMutation from "./mutations/login.mutation.graphql";

export const Query = {
  RequestsQuery,
  UserQuery,
};

export const Mutation = {
  CreateRequestMutation,
  LoginMutation,
};
