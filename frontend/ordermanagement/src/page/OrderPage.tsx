import {useNavigate, useParams} from "react-router-dom";
import {useState} from "react";
import {Customer, Order, useGetOrderByIdQuery} from "../graphql/generated/schema";
import OmLoading from "../components/OmLoading";
import OrderForm from "../components/OrderForm";

export default function OrderPage() {
    const params = useParams();
    const orderId = parseInt(params.orderId || '0');
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    
    const {data: orderData, loading:orderLoading, error:orderError}= useGetOrderByIdQuery({
        variables: {
            id:orderId,
        }
    });
    
    if (orderLoading) {
        return <OmLoading/>;
    }
    
    const order = orderData?.orders[0] as Order;
    const customer = order?.customer as Customer;
    
    
    
    return (
        <div>
            <div>order detail</div>
            <div>
                {/*<form action="">*/}
                {/*</form>*/}
                <OrderForm order={order}/>
            </div>
        </div>
    );
}