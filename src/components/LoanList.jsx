import { useState, useEffect } from "react";
import { getLoans } from "./LoanService";
import LoanCard from "./LoanCard";

// LoanList ansvarar för att hämta och visa alla lån
// useEffect gör att lån hämtas automatiskt när komponenten laddas
function LoanList({ refreshKey }) {
    const [loans, setLoans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Körs varje gång refreshKey ändras — dvs när användaren klickar Uppdatera
    useEffect(() => {
        setLoading(true);
        setError("");
        getLoans()
            .then(data => {
                setLoans(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, [refreshKey]);

    if (loading) return <p className="status-text">Laddar lån...</p>;
    if (error) return <p className="status-text error">{error}</p>;
    if (loans.length === 0) return <p className="status-text">Inga lån hittades.</p>;

    return (
        <div className="loan-list">
            {loans.map(loan => (
                <LoanCard key={loan.id} loan={loan} />
            ))}
        </div>
    );
}

export default LoanList;