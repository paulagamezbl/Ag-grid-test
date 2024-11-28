import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

import "ag-grid-enterprise";

import { useState, useRef, useEffect, useMemo } from "react";

const Table = () => {
    const gridRef = useRef();
    const enableAdvancedFilter = true;
    const [rowData, setRowData] = useState();
    const [columnDefs, setColumnDefs] = useState([
        { field: "athlete", filter: "agMultiColumnFilter" },
        { field: "age" },
        { field: "country" },
        { field: "year" },
        { field: "date" },
        { field: "sport" },
        { field: "gold" },
        { field: "silver" },
        { field: "bronze" },
        { field: "total" },
    ]);

    const defaultColDef = useMemo(
        () => ({
            sortable: true,
            filter: true,
            enableRowGroup: true,
            width: 160,
        }),
        []
    );

    useEffect(() => {
        fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
            .then((result) => result.json())
            .then((rowData) => setRowData(rowData));
    }, []);

    return (
        <div className="ag-theme-quartz" style={{ height: "100%" }}>
            <AgGridReact
                ref={gridRef}
                rowGroupPanelShow="always"
                rowData={rowData}
                animateRows={true}
                cellSelection={true}
                enableCharts={true}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                
            />
        </div>
    );
};

export default Table;
