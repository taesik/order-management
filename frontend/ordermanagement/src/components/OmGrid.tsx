import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {AgGridReact} from "ag-grid-react";
import {useMemo, useState} from "react";
import {Customer} from "../graphql/generated/schema";

export default function OmGrid() {
    const [columnDefs, setColumnDefs] = useState([
        {
            field: 'id',
            width: 50,
            suppressSizeFit:true,
        },
        {
            field: 'customer',
            cellRenderer:function (params:any) {
                const customer = params.value as Customer;
                return customer.firstName + ' ' + customer.lastName;
            }
        },
        {
            field: 'orderDate',
        },
        {
            field: 'status'
        }
    ]);

    const defaultColDef = useMemo(()=>({
        sortable:true,
        filter:true,
        resizable:true
    }),[]);
    
    
    return (
        <div className={'h-full w-96 ag-theme-alpine'}>
            <AgGridReact
                columnDefs={[]}
                // defaultColDef={[]}
                rowData={[]}
            />
        </div>
    );
}