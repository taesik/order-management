import {useMemo, useState} from "react";
import {Address, Customer} from "../graphql/generated/schema";
import {AgGridReact} from "ag-grid-react";

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
            cellRenderer:function (params:any) {
                const address = params.value as Address;
                return address.addressLine1 + ' ' + address.addressLine2;
            }
        },
    ]);

    const defaultColDef = useMemo(()=>({
        sortable:true,
        filter:true,
        resizable:true
    }),[]);

    return (
        <div className={'h-96 w-[700px] ag-theme-alpine'}>
            <AgGridReact
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                rowData={customers}/>
        </div>
    );
}