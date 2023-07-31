import {Order} from "../graphql/generated/schema";
import {useState} from "react";

interface Props {
    order:Order;
}
export default function OrderForm({order}:Props) {
    const [open, setOpen] = useState(false);

    const [orderState, setOrderState] = useState(()=>order);

    function changeHandler(e:any) {
        setOrderState({
            ...orderState,
            [e.target.name]:e.target.value,
        })
    }
    return (
        <div>
            <form onSubmit={()=>{
                
            }}>
                <input onChange={e=>changeHandler(e)}
                       value={orderState.status}
                       type="text" name="status" id="status"/>

                <input onChange={e=>changeHandler(e)}
                       value={orderState.orderDate}
                       type="date" name="orderDate" id="orderDate"/>

                <input onChange={e=>changeHandler(e)}
                       value={orderState.description ?? 'null'}
                       type="text" name="description" id="description"/>
                <input onChange={e=>changeHandler(e)} 
                       value={orderState.otherNotes?? 'null'} type="text" name="otherNote" id="otherNote"/>
                <input onChange={e=>changeHandler(e)} 
                       value={orderState.totalAmount} type="text" name="totalAmount" id="totalAmount"/>
                <input  onChange={e=>changeHandler(e)} 
                       value={orderState.depositAmount} type="text" name="depositAmount" id="depositAmount"/>
                <button type={'submit'}>Submit</button>
            </form>
            
        </div>
    );
}