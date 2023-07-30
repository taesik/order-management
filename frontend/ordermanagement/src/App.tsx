import React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./page/HomePage";
import './index.css';
import OrderDshbrd from "./page/OrderDshbrd";
import CustomerDshbrd from "./page/CustomerDshbrd";
import {CustomerPage} from "./page/CustomerPage";
import OrderPage from "./page/OrderPage";

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
                    <Route path={'/customers/:customerId'} element={<CustomerPage/>}/>
                    <Route path={'/orders'} element={<OrderDshbrd/>}/>
                    <Route path={'/orders/:orderId'} element={<OrderPage/>}/>
            </Routes>
        </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
