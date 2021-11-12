import { DocumentNode } from "graphql";

import { Query, Mutation } from "./graphql.schemas";

export type QueryName = keyof typeof Query;
export type MutationName = keyof typeof Mutation;

export const getQuery = (queryName: QueryName): DocumentNode => {
  return Query[queryName];
};

export const getMutation = (mutationName: MutationName): DocumentNode => {
  return Mutation[mutationName];
};
