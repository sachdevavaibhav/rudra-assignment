import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

function createApolloClient() {
  const httpLink = createHttpLink({
    uri: 'https://fun-gobbler-22.hasura.app/v1/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    const token = "wTF4eH50ifYMT1H6NAiFnlEZ5ZxoBSzKVE5lJXdW1XvZH6eQraN5rvyC5wG1uLOB";
    return {
      headers: {
        ...headers,
        "x-hasura-admin-secret": token,
      }
    }
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
}

const apolloClient = createApolloClient();

export default apolloClient;