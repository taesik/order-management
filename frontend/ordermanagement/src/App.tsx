import React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./page/HomePage";
import CustomerDshbrd from "./components/CustomerDshbrd";
import './index.css';
import OrderDshbrd from "./components/OrderDshbrd";

const client = new ApolloClient({
    cache: new InMemoryCache({
        typePolicies:{}
    }),
    uri: 'http://localhost:5157/graphql',
    // process.env.API_SCHEMA_URL,
})

function App() {
  return (
    <ApolloProvider client={client}>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                </Route>
                    <Route path={'/customers'} element={<CustomerDshbrd/>}/>
                    <Route path={'/orders'} element={<OrderDshbrd/>}/>
            </Routes>
        </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
