import { useState } from 'react'
import './App.css'

function App() {
  const [loans, setLoans] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchLoans = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("http://localhost:5100/api/loans", {
        headers: {
          "API-Key": "key1234"
        }
      });
      if (!response.ok) {
        throw new Error("Misslyckades att hämta lån");
      }
      const data = await response.json();
      if (data.length === 0) {
        throw new Error("Inga lån hittades");
      }
      setLoans(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section id="center">
        <div>
          <h1>Lånelista</h1>
          <p>Klicka för att visa alla lån</p>
        </div>
        <button className="counter" onClick={fetchLoans}>Hämta lån</button>
        {loading && <p>Laddar...</p>}
        {error && <p>{error}</p>}
        {loans && loans.map((loan) => (
          <div key={loan.id} className="registration-container">
            <p>Lån #{loan.id}</p>
            <p>Objekt: #{loan.itemId}</p>
            <p>Låntagare: {loan.borrowerName}</p>
            <p>Email: {loan.borrowerEmail}</p>
            <p>Utlånad: {new Date(loan.borrowedDate).toLocaleDateString("sv-SE")}</p>
            <p>Förfaller: {new Date(loan.dueDate).toLocaleDateString("sv-SE")}</p>
            <p>Status: {loan.returnedDate ? "Återlämnad" : "Aktiv"}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default App;