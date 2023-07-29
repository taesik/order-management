import React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import CustomerDshbrd from "./page/CustomerDshbrd";

const client = new ApolloClient({
    cache: new InMemoryCache({
        typePolicies:{}
    }),
    uri: "http://localhost:5157/graphql",
})

function App() {
  return (
    <ApolloProvider client={client}>
        <CustomerDshbrd/>
    </ApolloProvider>
  );
}

export default App;
