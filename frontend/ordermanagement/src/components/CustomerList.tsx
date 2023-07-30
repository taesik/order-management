import {useMemo, useState} from "react";
import {Address, Customer} from "../graphql/generated/schema";
import {AgGridReact} from "ag-grid-react";
import OmGrid from "./OmGrid";

interface Props {
    customers:Customer[];
} 
export default function CustomerList({customers}:Props) {
    const [columnDefs, setColumnDefs] = useState([
        {
            field: 'firstName',
            width: 120,
            suppressSizeFit:true,
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
            cellRenderer:function (params:any) {
                const address = params.value as Address;
                return `${address.addressLine2}, ${address.addressLine1}, ${address.city}, ${address.state}, ${address.country}`;
            }
        },
    ]);

    const defaultColDef = useMemo(()=>({
        sortable:true,
        filter:true,
        resizable:true
    }),[]);

    return (
        <OmGrid rowData={customers} columnDefs={columnDefs}/>
    );
}