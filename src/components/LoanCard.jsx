function LoanCard({ loan }) {
    const active = !loan.returnedDate;

    return (

        <div className="loan-card">
            <div className="loan-card-header">
                <span className="loan-id">Lån-ID: {loan.id}</span>
                <span className={`loan-status ${active ? "active" : "returned"}`}>
                    {active ? "Aktiv" : "Återlämnad"}
                </span>
            </div>

            <div className="loan-card-body">

                <p><strong>Låntagare:</strong> {loan.borrowerName}</p>
                <p><strong>E-post:</strong> {loan.borrowerEmail}</p>
                <p><strong>Objekt-ID:</strong> #{loan.itemId}</p>
                <p><strong>Utlånad:</strong> {new Date(loan.borrowedDate).toLocaleDateString("sv-SE")}</p>
                <p><strong>Förfaller:</strong> {new Date(loan.dueDate).toLocaleDateString("sv-SE")}</p>

                {!active && (
                    <p><strong>Återlämnad:</strong> {new Date(loan.returnedDate).toLocaleDateString("sv-SE")}</p>
                )}
            </div>
        </div>
    );
}

export default LoanCard;