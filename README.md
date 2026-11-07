# Accanto a te – guida per i familiari

Web app statica (HTML, CSS, JavaScript, nessuna dipendenza né build) per chi sta vicino a una persona con disturbo borderline di personalità. Pubblica, anonima, senza account né tracciamento. Funziona su Android e iPhone e si può installare come PWA, anche offline.

## Struttura
- `index.html`: pagina unica; il routing usa l'hash (`#/guida/validazione`), quindi funziona su qualsiasi hosting statico.
- `js/data-guida.js`: capitoli e glossario. `js/data-pratica.js`: frasi, scenari, esercizi, emergenze, fonti.
- `js/app.js`: interfaccia ed esercizi. `css/style.css`: stili (chiaro/scuro, aree sicure iPhone, stampa).
- `sw.js`: uso offline. **Quando cambi i contenuti, aumenta `VERSIONE`** così i telefoni ricevono la versione nuova.
- `manifest.webmanifest` e `icons/`: installazione su Android e iPhone (icone PNG, anche maschera Android).

## Provare in locale
Dalla cartella: `python -m http.server 8000`, poi apri `http://localhost:8000`.
Il service worker funziona solo su `https://` o `localhost`.

## Regole sui contenuti
- Nessun dato personale, nessun nome di persone reali o gruppi.
- Testi riformulati dalle fonti (elenco in `FONTI`), mai copiati.
- Le informazioni sulla sicurezza (112, Telefono Amico Italia) vanno ricontrollate periodicamente.
- I contenuti clinici vanno fatti rivedere da un professionista prima della diffusione.
