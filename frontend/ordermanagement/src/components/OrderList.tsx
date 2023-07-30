import {Customer, Order} from "../graphql/generated/schema";
import {useMemo, useState} from "react";
import {AgGridReact} from "ag-grid-react";

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import OmGrid from "./OmGrid";
interface Props {
    orders:Order[];
}
export default function OrderList({orders}:Props) {
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
    
    
    
    return (
        <OmGrid rowData={orders} columnDefs={columnDefs}/>
    );
}