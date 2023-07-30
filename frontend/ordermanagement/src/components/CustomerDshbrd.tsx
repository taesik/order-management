import {Customer, useGetCustomersQuery} from "../graphql/generated/schema";
import {useEffect} from "react";

const CustomerDshbrd = () => {
    const {data
        ,loading
        , error} 
        = useGetCustomersQuery();
    
    useEffect(() => {
        console.log('error',error);
        return () => {
        };
    }, [error]);
    
    useEffect(() => {
        console.log('data',data);
        return () => {
        };
    }, [data]);
    
    
    const customers = data?.customers as Customer[];
    return (
        <div>
            <div>
                <div className={' '}>
                    Customers
                </div>
                <ul className={'flex w-screen '}>
                    <li>First Name</li>
                    <li>Last Name</li>
                    <li>Contract Number</li>
                    <li>Email</li>
                    <li>Address</li>
                </ul>
                <div className={''}>
                    {
                        data?.customers.map(customer => (
                            <div key={customer.id} className={'flex gap-12'} >
                                <div >{customer.firstName}</div>
                                <div >{customer.lastName}</div>
                                <div >{customer.contactNumber}</div>
                                <div >{customer.email}</div>
                                <div className={'flex'}>
                                    <div >{customer.address?.addressLine1}</div>
                                    <div >{customer.address?.addressLine2}</div>
                                </div>
                                {/*<div >{customer.orders?.map(el=>{*/}
                                {/*    return <div className={''}>*/}
                                {/*        <div>{el.id}</div>*/}
                                {/*        <div>{el.depositAmount}</div>*/}
                                {/*        <div>{el.description}</div>*/}
                                {/*        <div>{el.status}</div>*/}
                                {/*        <div>{el.orderDate}</div>*/}
                                {/*        <div>{el.otherNotes}</div>*/}
                                {/*        <div>{el.totalAmount}</div>*/}
                                {/*    </div>*/}
                                {/*})}*/}
                                {/*</div>*/}
                            </div>
                        ))
                    }
                </div>
                {/*<div className={'ag-theme'}>*/}
                {/*    <CustomerList customers={customers}/>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};
 export default CustomerDshbrd;