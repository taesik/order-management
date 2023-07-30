import {Order, useGetOrdersQuery} from "../graphql/generated/schema";
import OrderList from "./OrderList";

export default function OrderDshbrd() {
    const {data:ordersData
        ,loading
        , error}
        = useGetOrdersQuery();
    
    
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