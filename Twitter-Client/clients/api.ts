import { GraphQLClient } from 'graphql-request';

const isClient = typeof window !== "undefined"

export const graphqlClient = new GraphQLClient(
  "https://d3mr0lia58fh7q.cloudfront.net/graphql",
  {
    headers: () => ({
      Authorization: isClient
        ? `Bearer ${window.localStorage.getItem("__twitter_token")}`
        : "",
    }),
  }
);
