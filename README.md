# Accanto a te – guida per i familiari

Web app statica (HTML, CSS, JavaScript, nessuna dipendenza né build) per chi sta vicino a una persona con disturbo borderline di personalità. Pubblica, anonima, senza account né tracciamento. Funziona su Android e iPhone e si può installare come PWA, anche offline.

## Struttura
- `index.html`: pagina unica; il routing usa l'hash (`#/guida/validazione`), quindi funziona su qualsiasi hosting statico.
- `js/data-guida.js`: capitoli e glossario. `js/data-pratica.js`: frasi, scenari, esercizi, emergenze, fonti.
- `js/app.js`: interfaccia ed esercizi. `css/style.css`: stili (chiaro/scuro, aree sicure iPhone, stampa).
- `sw.js`: uso offline. **Dopo ogni modifica ai file del sito lancia `node tools/controlla.mjs --aggiorna`**: riscrive `VERSIONE` in base al contenuto dei file, così i telefoni ricevono la versione nuova (e vedono l'avviso «contenuti aggiornati»).
- `tools/controlla.mjs`: controlla id duplicati, valori degli scenari, link interni, file della cache e `VERSIONE` (lo esegue anche GitHub Actions, `.github/workflows/controlla.yml`). Serve Node 18 o successivo.
- `manifest.webmanifest` e `icons/`: installazione su Android e iPhone (icone PNG, anche maschera Android).

## Prima di ogni commit
```
node tools/controlla.mjs --aggiorna
node tools/controlla.mjs
```

## Provare in locale
Dalla cartella: `python -m http.server 8000`, poi apri `http://localhost:8000`.
Il service worker funziona solo su `https://` o `localhost`.

## Regole sui contenuti
- Nessun dato personale, nessun nome di persone reali o gruppi.
- Testi riformulati dalle fonti (elenco in `FONTI`), mai copiati.
- Le informazioni sulla sicurezza (112, Telefono Amico Italia) vanno ricontrollate periodicamente.
- I contenuti clinici vanno fatti rivedere da un professionista prima della diffusione.
