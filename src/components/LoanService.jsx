
// Konstanter för att sätta fasta permanenta värden för APIets azure-url samt dess API-nyckel
const BASE_URL = "https://loans-api-bye8b4fgaufucma9.norwayeast-01.azurewebsites.net/api";
const API_KEY = "key1234";


// Funktion med async som görs tillgänglig för andra filer genom export
export async function getLoans() {    // Hämtar alla lån inför att visa dem i lånelistan, använder fetch för att göra HTTP-anrop i JS
  const response = await fetch(`${BASE_URL}/loans`, {
    headers: {
      "API-Key": API_KEY,
    },
  });

  if (!response.ok) {
    alert("Kunde inte hämta lån, vänligen försök igen.");
  }

  return response.json(); // Returnerar det hämtade svaret i JSON-format
}

