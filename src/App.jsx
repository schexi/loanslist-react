import { useState } from "react";
import LoanList from "./components/LoanList";
import "./App.css";

function App() {

    const [refreshKey, setRefreshKey] = useState(0);

    function handleRefresh() {
    setRefreshKey(prev => prev + 1);

    }

    return (

        <div className="app">

            <header className="app-header">

                <h1>Alla Lån - HV Bibliotek <h3>____________________</h3></h1>

                <button className="refresh-btn" onClick={handleRefresh}>
                    Uppdatera
                </button>

            </header>

            <main>
                <LoanList refreshKey={refreshKey} />
            </main>

        </div>
    );
}

export default App;