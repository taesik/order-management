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
    
    const orders = ordersData?.orders as Order[];
    
    return (
        <div>
            <div>
                <div>Orders List</div>
            </div>
            {/*<div>*/}
            {/*    {*/}
            {/*        orders && orders.map((el)=>{*/}
            {/*            return <div className={'flex gap-10'}>*/}
            {/*                <div className={'w-[15%]'}>{el.customer?.firstName} {el.customer?.lastName}</div>*/}
            {/*                <div className={'w-[15%]'}>{el.orderDate}</div>*/}
            {/*                <div className={'w-[15%]'}>{el.status}</div>*/}
            {/*            </div>*/}
            {/*        })*/}
            {/*    }*/}
            {/*</div>*/}
            <OrderList orders={orders}/>
        </div>
    );
}