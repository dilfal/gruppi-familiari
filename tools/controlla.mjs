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
for (const f of ["js/data-guida.js", "js/data-pratica.js", "js/data-guida-2.js", "js/data-pratica-2.js", "js/data-guida-3.js", "js/data-percorso.js", "js/data-ruoli.js"]) {
  try { vm.runInContext(leggi(f), ctx, { filename: f }); } catch (e) { errore(`${f}: ${e.message}`); }
}
const { GUIDA = [], SCENARI = [], ESERCIZI = [], FRASI = [], FRASI_TAG = [], PERCORSO = [], PERCORSO_TEMI = [], STRUMENTI = [], RUOLI = [] } = ctx;

function doppi(nome, lista) {
  const visti = new Set();
  for (const x of lista) {
    if (!x.id) errore(`${nome}: elemento senza id.`);
    else if (visti.has(x.id)) errore(`${nome}: id duplicato «${x.id}».`);
    visti.add(x.id);
  }
}
doppi("GUIDA", GUIDA); doppi("SCENARI", SCENARI); doppi("ESERCIZI", ESERCIZI); doppi("STRUMENTI", STRUMENTI); doppi("RUOLI", RUOLI);

/* Percorso: tappe numerate di seguito, ognuna con un tema esistente, le tre parti dell'incontro e un compito. */
const temi = new Set(PERCORSO_TEMI.map((t) => t.id));
const idGuida = new Set(GUIDA.map((c) => c.id));
for (const [i, t] of PERCORSO.entries()) {
  const dove = `Tappa ${t.n}`;
  if (t.n !== i + 1) errore(`${dove}: le tappe vanno numerate di seguito da 1.`);
  if (!temi.has(t.tema)) errore(`${dove}: tema «${t.tema}» inesistente.`);
  if (!t.titolo || !t.sommario || !Array.isArray(t.apertura) || !t.apertura.length) errore(`${dove}: mancano titolo, sommario o apertura.`);
  if (!Array.isArray(t.condivisione) || t.condivisione.length < 2) errore(`${dove}: servono almeno due domande di condivisione.`);
  if (!Array.isArray(t.idee) || t.idee.length < 2) errore(`${dove}: servono almeno due idee.`);
  if (i > 0 && !t.ripresa) errore(`${dove}: manca la ripresa del compito precedente.`);
  for (const id of t.leggi || []) if (!idGuida.has(id)) errore(`${dove}: il capitolo «${id}» non esiste.`);
  if (!(t.leggi || []).length) errore(`${dove}: nessun capitolo da leggere.`);
  if (!t.compito || !t.compito.t || !t.compito.p || !Array.isArray(t.compito.link) || !t.compito.link.length) errore(`${dove}: compito incompleto.`);
}
/* Ruoli: ogni scheda ha pesi e attenzioni, rimanda a capitoli, scenari e strumenti esistenti e ha un esempio per ogni tappa. */
const idScenari = new Set(SCENARI.map((s) => s.id)), idStrumenti = new Set(STRUMENTI.map((s) => s.id));
if (!ctx.RUOLI_INTRO || !ctx.RUOLI_INTRO.lead || !Array.isArray(ctx.RUOLI_INTRO.nota)) errore("RUOLI_INTRO: mancano lead o nota.");
for (const r of RUOLI) {
  const dove = `Ruolo «${r.id}»`;
  if (!/^[a-z]+$/.test(r.id || "")) errore(`${dove}: l'id deve essere di sole lettere minuscole.`);
  if (!r.titolo || !r.chi || !r.lead) errore(`${dove}: mancano titolo, chi o lead.`);
  if (!Array.isArray(r.pesi) || r.pesi.length < 3 || !Array.isArray(r.attenzione) || r.attenzione.length < 3) errore(`${dove}: servono almeno tre pesi e tre attenzioni.`);
  for (const id of r.leggi || []) if (!idGuida.has(id)) errore(`${dove}: il capitolo «${id}» non esiste.`);
  for (const id of r.scenari || []) if (!idScenari.has(id)) errore(`${dove}: lo scenario «${id}» non esiste.`);
  if ((r.leggi || []).length < 3 || (r.scenari || []).length < 3) errore(`${dove}: servono almeno tre capitoli e tre scenari.`);
  if (new Set(r.leggi).size !== (r.leggi || []).length || new Set(r.scenari).size !== (r.scenari || []).length) errore(`${dove}: capitoli o scenari ripetuti.`);
  if (!r.strumento || !idStrumenti.has(r.strumento.id) || !r.strumento.perche) errore(`${dove}: strumento mancante o inesistente.`);
  for (const t of PERCORSO) if (typeof (r.tappe || {})[t.n] !== "string" || r.tappe[t.n].length < 20) errore(`${dove}: manca l'esempio per la tappa ${t.n}.`);
  for (const k of Object.keys(r.tappe || {})) if (!PERCORSO.some((t) => String(t.n) === k)) errore(`${dove}: esempio per una tappa inesistente (${k}).`);
}

/* Il riformulatore usa espressioni regolari scritte a mano: devono essere valide. */
for (const s of STRUMENTI) for (const c of s.coppie || []) { try { new RegExp(c[0]); } catch (e) { errore(`Strumento «${s.id}»: espressione non valida «${c[0]}».`); } }

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

/* Approfondimenti: titolo, testo e riferimento al libro. */
for (const c of GUIDA) for (const [k, s] of c.sezioni.entries()) {
  const a = s.approf;
  if (a && !(a.t && Array.isArray(a.p) && a.p.length && typeof a.rif === "string" && a.rif.length >= 8)) {
    errore(`Capitolo «${c.id}», sezione ${k + 1}: l'approfondimento deve avere t, p e rif.`);
  }
}
/* Le parti della guida elencano ogni capitolo una volta sola, nell'ordine di GUIDA. */
if (ctx.GUIDA_PARTI) {
  const inParti = ctx.GUIDA_PARTI.flatMap((p) => p.ids);
  if (inParti.join("|") !== GUIDA.map((c) => c.id).join("|")) errore("GUIDA_PARTI non corrisponde all'ordine dei capitoli di GUIDA.");
}

/* Ogni contenuto dichiara la sua fonte. */
const senzaFonte = (x) => typeof x.fonte !== "string" || x.fonte.trim().length < 8;
for (const c of GUIDA) if (senzaFonte(c)) errore(`Capitolo «${c.id}»: manca la fonte.`);
for (const s of SCENARI) if (senzaFonte(s)) errore(`Scenario «${s.id}»: manca la fonte.`);
for (const e of ESERCIZI) if (senzaFonte(e)) errore(`Esercizio «${e.id}»: manca la fonte.`);
for (const f of FRASI) if (senzaFonte(f)) errore(`Frase «${f.situazione}»: manca la fonte.`);
for (const t of PERCORSO) if (senzaFonte(t)) errore(`Tappa ${t.n}: manca la fonte.`);
for (const s of STRUMENTI) if (senzaFonte(s)) errore(`Strumento «${s.id}»: manca la fonte.`);
for (const r of RUOLI) if (senzaFonte(r)) errore(`Ruolo «${r.id}»: manca la fonte.`);

/* Nessun profilo personale nel repository: il codice pubblico contiene solo l'importazione generica. */
for (const f of fileCache) if (/profilo|referto/i.test(f)) errore(`sw.js: «${f}» sembra un file personale e non va pubblicato.`);

/* ---------- link interni ---------- */
const ROTTE = new Set(["", "guida", "pratica", "frasi", "scenari", "esercizi", "emergenze", "glossario", "fonti", "altro", "cerca", "misura", "percorso", "strumenti", "appunti", "ruolo"]);
const figli = { guida: new Set(GUIDA.map((x) => x.id)), scenari: new Set(SCENARI.map((x) => x.id)), esercizi: new Set(ESERCIZI.map((x) => x.id)),
  percorso: new Set(PERCORSO.map((x) => String(x.n))), strumenti: new Set(STRUMENTI.map((x) => x.id)), ruolo: new Set(RUOLI.map((x) => x.id)) };
function controllaLink(href, dove) {
  const [percorso] = href.replace(/^#\/?/, "").split("?");
  const seg = percorso.split("/").filter(Boolean);
  if (!ROTTE.has(seg[0] || "")) return errore(`${dove}: il link «${href}» non porta a una pagina esistente.`);
  if (seg[1] && !(figli[seg[0]] && figli[seg[0]].has(seg[1]))) errore(`${dove}: il link «${href}» punta a un elemento inesistente.`);
}
(function visita(v, dove) {
  if (typeof v === "string") { for (const m of v.matchAll(/\{\{(#\/[^|}]*)\|/g)) controllaLink(m[1], dove); if (/^#\//.test(v)) controllaLink(v, dove); }
  else if (Array.isArray(v)) v.forEach((x, i) => visita(x, `${dove}[${i}]`));
  else if (v && typeof v === "object") for (const k of Object.keys(v)) visita(v[k], `${dove}.${k}`);
})({ GUIDA, SCENARI, ESERCIZI, FRASI, GLOSSARIO: ctx.GLOSSARIO, EMERGENZE: ctx.EMERGENZE, PERCORSO, PERCORSO_INTRO: ctx.PERCORSO_INTRO, STRUMENTI, RUOLI, RUOLI_INTRO: ctx.RUOLI_INTRO }, "dati");
for (const m of leggi("js/app.js").matchAll(/href="(#\/[a-z0-9\/_-]*)(?:\?[^"]*)?"/g)) controllaLink(m[1], "app.js");

if (errori.length) {
  errori.forEach((e) => console.error("ERRORE: " + e));
  console.error(`\n${errori.length} problemi.`);
  process.exit(1);
}
console.log(`Tutto in ordine: ${GUIDA.length} capitoli, ${PERCORSO.length} tappe, ${RUOLI.length} ruoli, ${STRUMENTI.length} strumenti, ${SCENARI.length} scenari, ${ESERCIZI.length} esercizi, ${FRASI.length} frasi. Versione cache: ${versioneAttesa}.`);
