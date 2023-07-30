import {useNavigate, useParams} from "react-router-dom";
import {useState} from "react";
import {Customer, useGetCustomerByIdQuery} from "../graphql/generated/schema";
import {Container} from "postcss";
import {CustomerForm} from "../components/CustomerForm";

export function CustomerPage() {
    const params = useParams();
    const customerId= parseInt(params.customerId || '0');
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    
    const {data: customerData, loading:customerLoading, error:customerError} 
        = useGetCustomerByIdQuery({
               variables: {
                   id:customerId,
               } 
             });  
    
    const customer = customerData?.customers[0] as Customer;
    
    
    return (
            <div>
                <div>
                    <div>
                        
                    </div>
                    <div> 
                        <h1>
                            Customer Details
                        </h1>
                    </div>
                    <div>
                        <CustomerForm customer={customer} />
                    </div>
                </div>
            </div>
    );
}