import {Customer, useGetCustomersQuery} from "../graphql/generated/schema";
import {useEffect} from "react";
import CustomerList from "../components/CustomerList";
import OmLoading from "../components/OmLoading";
import OmAlert from "../components/OmAlert";

const CustomerDshbrd = () => {
    const {data
        ,loading
        , error} 
        = useGetCustomersQuery();
    
   
    if (loading) {
        return <OmLoading/>;
    }
    if (error || !data) {
        return <OmAlert title={'Error!'} message={'Something went wrong'} 
                        status={'failure'}/>
    }

    const customers = data?.customers as Customer[];
    return (
        <div>
            <div>
                <div className={' '}>
                    Customers
                </div>
                
                {/*<div className={''}>*/}
                {/*    {*/}
                {/*        data?.customers.map(customer => (*/}
                {/*            <div key={customer.id} className={'flex gap-12'} >*/}
                {/*                <div >{customer.firstName}</div>*/}
                {/*                <div >{customer.lastName}</div>*/}
                {/*                <div >{customer.contactNumber}</div>*/}
                {/*                <div >{customer.email}</div>*/}
                {/*                <div className={'flex'}>*/}
                {/*                    <div >{customer.address?.addressLine1}</div>*/}
                {/*                    <div >{customer.address?.addressLine2}</div>*/}
                {/*                </div>*/}
                {/*                /!*<div >{customer.orders?.map(el=>{*!/*/}
                {/*                /!*    return <div className={''}>*!/*/}
                {/*                /!*        <div>{el.id}</div>*!/*/}
                {/*                /!*        <div>{el.depositAmount}</div>*!/*/}
                {/*                /!*        <div>{el.description}</div>*!/*/}
                {/*                /!*        <div>{el.status}</div>*!/*/}
                {/*                /!*        <div>{el.orderDate}</div>*!/*/}
                {/*                /!*        <div>{el.otherNotes}</div>*!/*/}
                {/*                /!*        <div>{el.totalAmount}</div>*!/*/}
                {/*                /!*    </div>*!/*/}
                {/*                /!*})}*!/*/}
                {/*                /!*</div>*!/*/}
                {/*            </div>*/}
                {/*        ))*/}
                {/*    }*/}
                {/*</div>*/}
                <div className={'ag-theme'}>
                    <CustomerList customers={customers}/>
                </div>
            </div>
        </div>
    );
};
 export default CustomerDshbrd;