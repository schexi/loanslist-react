
// Konstanter för att sätta fasta permanenta värden för APIets azure-url samt dess API-nyckel
const BASE_URL = "loans-api-bye8b4fgaufucma9.norwayeast-01.azurewebsites.net";
const API_KEY = "key1234";


// Funktion med async som görs tillgänglig för andra filer genom export
export async function getLoans() {    // Hämtar alla lån inför att visa dem i lånelistan, använder fetch för att göra HTTP-anrop i JS
  const response = await fetch(`${BASE_URL}/loans`, {
    headers: {
      "API-Key": API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error("Kunde inte hämta lån, vänligen försök igen.");
  }

  return response.json(); // Returnerar det hämtade svaret i JSON-format
}

/* Hämtar ett specifikt lån via ID
export async function getLoanById(id) {
  const response = await fetch(`${BASE_URL}/loans/${id}`, {
    headers: {
      "API-Key": API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error("Kunde inte hämta lånet");
  }

  return response.json();
}
*/