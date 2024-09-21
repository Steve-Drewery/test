import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_HASURA_PROJECT_ENDPOINT, // Use NEXT_PUBLIC for client-side access
    headers: {
      "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET || "", // If you're using an admin secret
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
