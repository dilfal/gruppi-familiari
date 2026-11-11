#!/usr/bin/env node
/* Controlli sul sito e aggiornamento della versione della cache offline.

   node tools/controlla.mjs             controlla i dati, i link e la versione di sw.js (esce con errore se qualcosa non va)
   node tools/controlla.mjs --aggiorna  riscrive VERSIONE in sw.js in base al contenuto dei file

   Da lanciare con --aggiorna dopo ogni modifica ai contenuti, prima del commit. */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join, extname } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const radice = join(dirname(fileURLToPath(import.meta.url)), "..");
const leggi = (f) => readFileSync(join(radice, f), "utf8");
const errori = [];
const errore = (m) => errori.push(m);

/* ---------- sw.js: elenco dei file e versione ---------- */
const sw = leggi("sw.js");
const mFile = /const FILE = \[([\s\S]*?)\];/.exec(sw);
const mVers = /const VERSIONE = "([^"]+)";/.exec(sw);
if (!mFile || !mVers) { console.error("sw.js: non trovo FILE o VERSIONE."); process.exit(1); }
const fileCache = [...mFile[1].matchAll(/"([^"]+)"/g)].map((m) => m[1]).filter((f) => f !== "./");

const TESTO = new Set([".html", ".css", ".js", ".webmanifest", ".svg", ".json"]);
const hash = createHash("sha256");
for (const f of [...fileCache].sort()) {
  if (!existsSync(join(radice, f))) { errore(`sw.js: il file «${f}» non esiste.`); continue; }
  let dati = readFileSync(join(radice, f));
  // I fine riga non devono cambiare l'impronta tra Windows e Linux.
  if (TESTO.has(extname(f))) dati = Buffer.from(dati.toString("utf8").replace(/\r\n/g, "\n"));
  hash.update(f + "\0").update(dati).update("\0");
}
const versioneAttesa = "accanto-a-te-" + hash.digest("hex").slice(0, 10);

if (process.argv.includes("--aggiorna")) {
  if (errori.length) { errori.forEach((e) => console.error("ERRORE: " + e)); process.exit(1); }
  if (mVers[1] === versioneAttesa) console.log(`VERSIONE già aggiornata: ${versioneAttesa}`);
  else {
    writeFileSync(join(radice, "sw.js"), sw.replace(mVers[0], `const VERSIONE = "${versioneAttesa}";`));
    console.log(`VERSIONE: ${mVers[1]} → ${versioneAttesa}`);
  }
  process.exit(0);
}
if (mVers[1] !== versioneAttesa) {
  errore(`sw.js: VERSIONE è «${mVers[1]}» ma i file dicono «${versioneAttesa}». Lancia: node tools/controlla.mjs --aggiorna`);
}

/* Ogni risorsa locale usata da index.html deve stare nella cache. */
const html = leggi("index.html");
for (const m of html.matchAll(/(?:src|href)="([^"#:]+)"/g)) {
  const f = m[1];
  if (!fileCache.includes(f)) errore(`index.html usa «${f}» ma non è nell'elenco FILE di sw.js.`);
}

/* ---------- dati ---------- */
const ctx = { console };
ctx.window = ctx;
vm.createContext(ctx);
for (const f of ["js/data-guida.js", "js/data-pratica.js", "js/data-guida-2.js", "js/data-pratica-2.js"]) {
  try { vm.runInContext(leggi(f), ctx, { filename: f }); } catch (e) { errore(`${f}: ${e.message}`); }
}
const { GUIDA = [], SCENARI = [], ESERCIZI = [], FRASI = [], FRASI_TAG = [] } = ctx;

function doppi(nome, lista) {
  const visti = new Set();
  for (const x of lista) {
    if (!x.id) errore(`${nome}: elemento senza id.`);
    else if (visti.has(x.id)) errore(`${nome}: id duplicato «${x.id}».`);
    visti.add(x.id);
  }
}
doppi("GUIDA", GUIDA); doppi("SCENARI", SCENARI); doppi("ESERCIZI", ESERCIZI);

for (const s of SCENARI) {
  if (!Array.isArray(s.opzioni) || s.opzioni.length < 2) errore(`Scenario «${s.id}»: servono almeno due opzioni.`);
  for (const [i, o] of (s.opzioni || []).entries()) {
    if (![0, 1, 2].includes(o.ok)) errore(`Scenario «${s.id}», opzione ${i + 1}: «ok» deve essere 0, 1 o 2.`);
    if (!o.testo || !o.esito) errore(`Scenario «${s.id}», opzione ${i + 1}: mancano testo o esito.`);
  }
  if (!(s.opzioni || []).some((o) => o.ok === 2)) errore(`Scenario «${s.id}»: nessuna risposta «molto efficace».`);
}
const tag = new Set(FRASI_TAG.map((t) => t[0]));
for (const f of FRASI) if (f.tag && !tag.has(f.tag)) errore(`Frase «${f.situazione}»: tag «${f.tag}» inesistente.`);
for (const c of GUIDA) if (!c.sezioni || !c.sezioni.length) errore(`Capitolo «${c.id}»: nessuna sezione.`);

/* Ogni contenuto dichiara la sua fonte. */
const senzaFonte = (x) => typeof x.fonte !== "string" || x.fonte.trim().length < 8;
for (const c of GUIDA) if (senzaFonte(c)) errore(`Capitolo «${c.id}»: manca la fonte.`);
for (const s of SCENARI) if (senzaFonte(s)) errore(`Scenario «${s.id}»: manca la fonte.`);
for (const e of ESERCIZI) if (senzaFonte(e)) errore(`Esercizio «${e.id}»: manca la fonte.`);
for (const f of FRASI) if (senzaFonte(f)) errore(`Frase «${f.situazione}»: manca la fonte.`);

/* Nessun profilo personale nel repository: il codice pubblico contiene solo l'importazione generica. */
for (const f of fileCache) if (/profilo|referto/i.test(f)) errore(`sw.js: «${f}» sembra un file personale e non va pubblicato.`);

/* ---------- link interni ---------- */
const ROTTE = new Set(["", "guida", "pratica", "frasi", "scenari", "esercizi", "emergenze", "glossario", "fonti", "altro", "cerca", "misura"]);
const figli = { guida: new Set(GUIDA.map((x) => x.id)), scenari: new Set(SCENARI.map((x) => x.id)), esercizi: new Set(ESERCIZI.map((x) => x.id)) };
function controllaLink(href, dove) {
  const [percorso] = href.replace(/^#\/?/, "").split("?");
  const seg = percorso.split("/").filter(Boolean);
  if (!ROTTE.has(seg[0] || "")) return errore(`${dove}: il link «${href}» non porta a una pagina esistente.`);
  if (seg[1] && !(figli[seg[0]] && figli[seg[0]].has(seg[1]))) errore(`${dove}: il link «${href}» punta a un elemento inesistente.`);
}
(function visita(v, dove) {
  if (typeof v === "string") for (const m of v.matchAll(/\{\{(#\/[^|}]*)\|/g)) controllaLink(m[1], dove);
  else if (Array.isArray(v)) v.forEach((x, i) => visita(x, `${dove}[${i}]`));
  else if (v && typeof v === "object") for (const k of Object.keys(v)) visita(v[k], `${dove}.${k}`);
})({ GUIDA, SCENARI, ESERCIZI, FRASI, GLOSSARIO: ctx.GLOSSARIO, EMERGENZE: ctx.EMERGENZE }, "dati");
for (const m of leggi("js/app.js").matchAll(/href="(#\/[a-z0-9\/_-]*)(?:\?[^"]*)?"/g)) controllaLink(m[1], "app.js");

if (errori.length) {
  errori.forEach((e) => console.error("ERRORE: " + e));
  console.error(`\n${errori.length} problemi.`);
  process.exit(1);
}
console.log(`Tutto in ordine: ${GUIDA.length} capitoli, ${SCENARI.length} scenari, ${ESERCIZI.length} esercizi, ${FRASI.length} frasi. Versione cache: ${versioneAttesa}.`);
