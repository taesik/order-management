import {Order, useGetOrdersQuery} from "../graphql/generated/schema";
import {useEffect} from "react";
import OrderList from "../components/OrderList";

export default function OrderDshbrd() {
    const {data:ordersData
        ,loading
        , error}
        = useGetOrdersQuery();
    
    useEffect(() => {
        console.log('ordersData',ordersData);
        return () => {
        };
    }, [ordersData]);
    
    return (
        <div>
            <div>
                <div>Orders List</div>
            </div>
            <div>
                <OrderList orders={ordersData?.orders as Order[]}/>
            </div>
        </div>
    );
}