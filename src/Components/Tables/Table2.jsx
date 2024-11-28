import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { getData } from "../data";

const SecondTable = () => {
    const containerStyle = useMemo(
        () => ({ width: "100%", height: "100%" }),
        []
    );
    const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
    const [rowData, setRowData] = useState(getData());
    const [columnDefs, setColumnDefs] = useState([
        { field: "symbol", maxWidth: 120, filter: true, floatingFilter: true },
        { field: "name", minWidth: 150, filter: true },
        {
            field: "change",
            cellRenderer: "agSparklineCellRenderer",
        },
        {
            field: "volume",
            type: "numericColumn",
            maxWidth: 140,
            filter: true,
            suppressFiltersToolPanel: true,
        },
    ]);
    const defaultColDef = useMemo(() => {
        return {
            flex: 1,
            minWidth: 100,
        };
    }, []);

    return (
        <div style={containerStyle}>
            <div style={gridStyle} className={"ag-theme-quartz"}>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    rowHeight={50}
                    sideBar={"filters"}
                />
            </div>
        </div>
    );
};

export default SecondTable;
