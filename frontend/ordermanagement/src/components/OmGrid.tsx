import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {AgGridReact} from "ag-grid-react";
import {useMemo, useState} from "react";
import {Customer} from "../graphql/generated/schema";

interface Props {
    rowData:any,
    columnDefs:any,
}
export default function OmGrid({rowData,columnDefs}:Props) {
    

    const defaultColDef = useMemo(()=>({
        sortable:true,
        filter:true,
        resizable:true
    }),[]);
    
    
    return (
        <div className={'h-[800px] w-[1000px] ag-theme-alpine'}>
            <AgGridReact
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                rowData={rowData}
            />
        </div>
    );
}