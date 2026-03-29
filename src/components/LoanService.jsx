const BASE_URL = "http://localhost:5100/api";
const API_KEY = "key1234";


export async function getLoans() {

    const response = await fetch(`${BASE_URL}/loans`, {
        headers: {

          "API-Key": API_KEY
        }
    });

    if (!response.ok) {
      
        throw new Error("Kunde inte hämta lån, vänligen försök igen.");
    }

    return response.json();
}