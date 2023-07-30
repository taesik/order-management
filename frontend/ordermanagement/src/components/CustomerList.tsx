import {ReactElement, useState} from "react";
import {Address, Customer} from "../graphql/generated/schema";
import OmGrid from "./OmGrid";

interface Props {
    customers:Customer[];
} 
export default function CustomerList({customers}:Props) {
    const [columnDefs, setColumnDefs] = useState([
        {
            field: 'id',
            width: 50,
            suppressSizeFit:true,
            cellRenderer:  (params:any):ReactElement<HTMLButtonElement>=>(
                <button className={'bg-amber-800 '}  
                        onClick={()=>{
                            window.open(`/customers/${params.value}`, '_black')
                        }}>
                    Launch
                </button>
                    )
    
        },
        {
            field: 'firstName',
            width: 120,
        },
        {
            field: 'lastName',
            width: 120,
        },
        {
          field: 'contactNumber',  
        },
        {
            field: 'email'
        },
        {
            field: 'address',
            width: 300,
            cellRenderer:function (params:any):string {
                const address = params.value as Address;
                return `${address.addressLine2}, ${address.addressLine1}, ${address.city}, ${address.state}, ${address.country}`;
            }
        },
    ]);


    return (
        <OmGrid rowData={customers} columnDefs={columnDefs}/>
    );
}