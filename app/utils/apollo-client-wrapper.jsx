"use client";
import apolloClient from "./apollo-client";
import { ApolloProvider } from "@apollo/client";

function ApolloWrapper({ children }) {
    return (
        <ApolloProvider client={apolloClient}>
            {children}
        </ApolloProvider>
    );

}

export default ApolloWrapper;