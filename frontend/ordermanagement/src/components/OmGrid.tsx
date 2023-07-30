import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {AgGridReact} from "ag-grid-react";

export default function OmGrid() {
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