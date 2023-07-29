import React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import CustomerDshbrd from "./page/CustomerDshbrd";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./page/HomePage";

const client = new ApolloClient({
    cache: new InMemoryCache({
        typePolicies:{}
    }),
    uri: process.env.API_SCHEMA_URL,
})

function App() {
  return (
    <ApolloProvider client={client}>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'/customers'} element={<CustomerDshbrd/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
        
    </ApolloProvider>
  );
}

export default App;
