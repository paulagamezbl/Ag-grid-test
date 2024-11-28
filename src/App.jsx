import { useState } from "react";
import Table from "./Components/Tables/Table";
import Chart from "./Components/Tables/Chart";
import SecondTable from "./Components/Tables/Table2";
import "./App.css";

function App() {
    const [selectedTab, setSelectedTab] = useState(1);

    return (
        <div>
            <div className="header">
                <h1 className="title">Welcome to Tables</h1>
                <div className="button-container">
                    <button
                        className={selectedTab === 1 ? "selected" : ""}
                        onClick={() => setSelectedTab(1)}
                    >
                        Table
                    </button>
                    <button
                        className={selectedTab === 2 ? "selected" : ""}
                        onClick={() => setSelectedTab(2)}
                    >
                        Table 2
                    </button>
                    <button
                        className={selectedTab === 3 ? "selected" : ""}
                        onClick={() => setSelectedTab(3)}
                    >
                        Chart
                    </button>
                   
                </div>
            </div>

            <div className="table-container">
                {selectedTab === 1 && <Table />}
                {selectedTab === 2 && <SecondTable />}
                {selectedTab === 3 && <Chart />}
               
            </div>
        </div>
    );
}

export default App;
