HV Bibliotek — Lånelista

En Single Page Application (SPA) byggd med React och Vite som hämtar och visar alla lån från Loans API om jag skapat till att även interagera med våran t4bibliotek app på azure. Applikationen visar låntagare, objekt-ID, datum och status (aktiv/återlämnad) för varje lån i en lista med lånekort. Listan hämtas automatiskt vid start och kan uppdateras manuellt via en knapp.

**Hur man lör applikatoonen:

Du behöver:
- Node.js installerat
- .NET 10 installerat

### Steg 1 — Starta Loans API
Loans API finns i mappen `Loans-API/` i detta repo.
```bash
cd Loans-API
dotnet run --launch-profile http
```
**API:et startar på `http://localhost:5100`

### Steg 2 — Starta React-appen
Öppna en ny terminal i projektets rotmapp.
```bash
npm install
npm run dev
```

**Applikationen öppnas på `http://localhost:5173`

## Projektstruktur
```
src/
├── components/
│   ├── LoanCard.jsx      — visar ett enskilt lånekort
│   ├── LoanList.jsx      — hämtar och listar alla lån
│   └── LoanService.js    — hanterar API-anrop mot Loans API
├── App.jsx               — huvudkomponent med header och uppdatera-knapp
├── App.css               — styling
└── main.jsx              — entry point
Loans-API/                — kopia av Loans API för lokal körning
```

## AI-användning

AI har använts som stöd under utvecklingen av applikationen, men i form av bollplank, pegagogiskt stöd och mallar.

**Vad AI hjälpte med:**
- Grundstruktur för komponenter och filuppdelning
- Förklaring av React-koncept som `useState`, `useEffect`, props och komponenthierarki
- Felsökning av CORS-problem mellan React och Loans API
- Förslag på CSS-styling som senare modifierades

**Hur materialet modifierats:**
- AI-genererad kod har jämförts med StackOverflow och Reacts dokumentation för att förstå och verifiera lösningarna
- Design och layout har anpassats efter egna preferenser
- AI har använts som ett pedagogiskt verktyg för att förstå varför saker fungerar som de gör, så att jag faktiskt förstår valen. Varför de olika delarna behövs, och för att kunna förklara och föstå hur systemet är uppbyggt och interagerar.
