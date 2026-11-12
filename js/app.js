/* Accanto a te – app a pagina singola, senza server, senza account, senza tracciamento.
   Router a hash (#/percorso): funziona su qualsiasi hosting statico, su Android e iPhone. */
(function () {
  "use strict";

  var G = window.GUIDA, GL = window.GLOSSARIO, FR = window.FRASI, SC = window.SCENARI,
      EX = window.ESERCIZI, EM = window.EMERGENZE,
      PE = window.PERCORSO, PT = window.PERCORSO_TEMI, PIN = window.PERCORSO_INTRO, ST = window.STRUMENTI,
      RU = window.RUOLI, RIN = window.RUOLI_INTRO;
  var main = document.getElementById("main");
  var live = document.getElementById("live");
  var NOME = "Accanto a te";

  /* ---------- utilità ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  // **grassetto** e {{#/percorso|testo}}
  function fmt(s) {
    return esc(s)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\{\{(#\/[a-z0-9\/_-]*)\|(.+?)\}\}/g, '<a href="$1">$2</a>');
  }
  function norm(s) {
    return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  }
  // Parametro di una query dell'hash (#/percorso?chiave=valore)
  function param(qs, k) {
    var m = new RegExp("(?:^|&)" + k + "=([^&]*)").exec(qs || "");
    if (!m) return "";
    try { return decodeURIComponent(m[1].replace(/\+/g, " ")); } catch (e) { return ""; }
  }
  // Copia negli appunti (con ripiego per i browser senza navigator.clipboard)
  function copia(testo, btn) {
    function ok() {
      var prima = btn.textContent;
      btn.textContent = "Copiato";
      live.textContent = "Testo copiato negli appunti";
      setTimeout(function () { btn.textContent = prima; }, 2000);
    }
    function ripiego() {
      var t = document.createElement("textarea");
      t.value = testo; t.setAttribute("readonly", ""); t.style.position = "fixed"; t.style.opacity = "0";
      document.body.appendChild(t); t.select();
      try { if (document.execCommand("copy")) ok(); } catch (e) {}
      document.body.removeChild(t);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(testo).then(ok, ripiego);
    else ripiego();
  }
  // Riga «Fonte» sotto ogni contenuto: l'elenco completo dei testi è nella pagina Fonti.
  function fonteHtml(f, etichetta) {
    return f ? '<p class="fonte"><strong>' + (etichetta || "Fonte") + ":</strong> " + esc(f) + ' <a href="#/fonti">Tutte le fonti</a></p>' : "";
  }

  /* ---------- contenuti su misura: profilo PRIVATO, importato sul proprio telefono ----------
     Non fa parte del sito: i testi personali non stanno mai nel repository pubblico. Qui c'è solo il codice
     generico che li legge, li ripulisce e li mostra; tutto resta nella memoria di questo dispositivo. */
  var K_PROF = "accanto.profilo", FORMATO = "accanto-profilo-1";
  function txt(v, max) { return typeof v === "string" ? v.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").trim().slice(0, max) : ""; }
  function elencoTesti(a, max, n) { return (Array.isArray(a) ? a : []).slice(0, n).map(function (x) { return txt(x, max); }).filter(Boolean); }
  function mappaTesti(o, max, n) {
    var out = {};
    if (o && typeof o === "object" && !Array.isArray(o)) Object.keys(o).slice(0, n).forEach(function (k) {
      var t = txt(o[k], max);
      if (t && k.length <= 40) out[k] = t;
    });
    return out;
  }
  function elencoPersone(a, n) {
    return (Array.isArray(a) ? a : []).slice(0, n).map(function (c) {
      if (!c || typeof c !== "object") return null;
      var num = txt(c.num, 24);
      return { nome: txt(c.nome, 60), num: /[0-9]/.test(num) ? num : "", nota: txt(c.nota, 160) };
    }).filter(function (c) { return c && c.nome; });
  }
  function profiloSicuro(raw) {
    if (!raw || typeof raw !== "object" || raw.formato !== FORMATO) return null;
    var P = { formato: FORMATO, creato: txt(raw.creato, 20), intro: txt(raw.intro, 900) };
    P.aree = (Array.isArray(raw.aree) ? raw.aree : []).slice(0, 16).map(function (a) {
      if (!a || typeof a !== "object") return null;
      var o = { titolo: txt(a.titolo, 100), vedi: txt(a.vedi, 700), dentro: txt(a.dentro, 700), aiuta: elencoTesti(a.aiuta, 320, 8), evita: elencoTesti(a.evita, 320, 8) };
      return o.titolo && (o.vedi || o.dentro || o.aiuta.length) ? o : null;
    }).filter(Boolean);
    P.risorse = (Array.isArray(raw.risorse) ? raw.risorse : []).slice(0, 10).map(function (r) {
      return r && typeof r === "object" ? { titolo: txt(r.titolo, 80), testo: txt(r.testo, 500) } : null;
    }).filter(function (r) { return r && r.titolo && r.testo; });
    P.accordi = elencoTesti(raw.accordi, 320, 12);
    var no = raw.note && typeof raw.note === "object" ? raw.note : {};
    P.note = { guida: mappaTesti(no.guida, 700, 40), frasi: mappaTesti(no.frasi, 700, 20), scenari: mappaTesti(no.scenari, 700, 40), esercizi: mappaTesti(no.esercizi, 700, 40),
      percorso: mappaTesti(no.percorso, 700, 12), strumenti: mappaTesti(no.strumenti, 700, 10) };
    P.nascondi = elencoTesti(raw.nascondi, 40, 20);
    var sc = raw.sicurezza && typeof raw.sicurezza === "object" ? raw.sicurezza : null;
    P.sicurezza = null;
    if (sc) {
      var S2 = { titolo: txt(sc.titolo, 90) || "Quando la tensione sale", intro: txt(sc.intro, 600), segnali: elencoTesti(sc.segnali, 280, 10), passi: elencoTesti(sc.passi, 320, 10),
        evita: elencoTesti(sc.evita, 280, 10), persone: elencoPersone(sc.persone, 10), servizi: elencoPersone(sc.servizi, 8), chiusura: txt(sc.chiusura, 400) };
      if (S2.intro || S2.segnali.length || S2.passi.length || S2.persone.length || S2.servizi.length) P.sicurezza = S2;
    }
    return P.aree.length || P.risorse.length || P.accordi.length || P.sicurezza ? P : null;
  }
  var PROF = null;
  try { PROF = profiloSicuro(JSON.parse(localStorage.getItem(K_PROF) || "null")); } catch (e) { PROF = null; }
  function notaProf(gruppo, id) { return (PROF && PROF.note[gruppo] && PROF.note[gruppo][id]) || ""; }
  function parHtml(t) { return String(t).split(/\n+/).filter(Boolean).map(function (x) { return "<p>" + esc(x) + "</p>"; }).join(""); }
  function notaHtml(t) { return t ? '<div class="callout misura"><span class="lab">Su misura</span>' + parHtml(t) + "</div>" : ""; }
  function nascosto(id) { return !!PROF && PROF.nascondi.indexOf(id) >= 0; }

  function findChap(id) { for (var i = 0; i < G.length; i++) if (G[i].id === id) return i; return -1; }

  /* ---------- ruolo: genitore, partner, fratello o sorella, amico o convivente ----------
     La scelta resta su questo dispositivo (localStorage) e cambia solo l'ordine proposto e gli esempi mostrati. */
  var K_RUOLO = "accanto.ruolo";
  function ruoloDi(id) { for (var i = 0; i < RU.length; i++) if (RU[i].id === id) return RU[i]; return null; }
  var RUOLO = null;
  try { RUOLO = ruoloDi(localStorage.getItem(K_RUOLO)); } catch (e) { RUOLO = null; }
  function setRuolo(id) {
    RUOLO = ruoloDi(id);
    try { if (RUOLO) localStorage.setItem(K_RUOLO, RUOLO.id); else localStorage.removeItem(K_RUOLO); } catch (e) {}
  }
  function scenarioDi(id) { for (var i = 0; i < SC.length; i++) if (SC[i].id === id) return SC[i]; return null; }
  // Scenari nell'ordine proposto: prima quelli del ruolo scelto, poi tutti gli altri.
  function scVicini() { return RUOLO ? RUOLO.scenari.map(scenarioDi).filter(Boolean) : []; }
  function scOrdine() {
    var v = scVicini();
    return v.concat(SC.filter(function (s) { return v.indexOf(s) < 0; }));
  }
  function ruoloScelta(conNessuno) {
    return '<div class="chips ruoli" role="group" aria-label="Il tuo ruolo">' + RU.map(function (r) {
      return '<button class="chip" type="button" data-ruolo="' + r.id + '" aria-pressed="' + (RUOLO === r) + '">' + esc(r.chi) + "</button>";
    }).join("") + (conNessuno ? '<button class="chip" type="button" data-ruolo="" aria-pressed="' + !RUOLO + '">Nessuna scelta</button>' : "") + "</div>";
  }
  // Dopo la scelta si apre la scheda del ruolo, con il fuoco sul suo titolo.
  function ruoloClick(e) {
    var b = e.target.closest("button[data-ruolo]");
    if (!b) return;
    setRuolo(b.dataset.ruolo);
    if ((location.hash || "#/") === "#/ruolo") route(); else { segnaLink(); location.hash = "#/ruolo"; }
    setTimeout(function () {
      var el = document.getElementById("ruoloT");
      if (el) { el.scrollIntoView(); el.focus({ preventScroll: true }); }
      live.textContent = RUOLO ? "Ruolo scelto: " + RUOLO.titolo : "Nessun ruolo scelto";
    }, 60);
  }

  var ICONE = {
    home: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/></svg>',
    guida: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 21V5"/><path d="M9 8h6"/></svg>',
    pratica: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.5 7.2L4 21l1.8-5.3A8 8 0 1 1 21 12z"/></svg>',
    emergenze: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l9 16H3z"/><path d="M12 10v4"/><path d="M12 17h.01"/></svg>',
    altro: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="5" cy="12" r="1.2"/><circle cx="12" cy="12" r="1.2"/><circle cx="19" cy="12" r="1.2"/></svg>'
  };

  var NAV_TAB = [
    ["#/", "Home", "home", "home"],
    ["#/guida", "Guida", "guida", "guida"],
    ["#/pratica", "Pratica", "pratica", "pratica"],
    ["#/emergenze", "Emergenze", "emergenze", "emergenze"],
    ["#/altro", "Altro", "altro", "altro"]
  ];
  var NAV_DESK = [
    ["#/guida", "Guida", "guida"],
    ["#/percorso", "Percorso", "percorso"],
    ["#/frasi", "Frasi", "frasi"],
    ["#/esercizi", "Esercizi", "esercizi"],
    ["#/strumenti", "Strumenti", "strumenti"],
    ["#/scenari", "Scenari", "scenari"],
    ["#/emergenze", "Emergenze", "emergenze"],
    ["#/altro", "Altro", "altro"]
  ];

  function buildNav() {
    document.getElementById("tabbar").innerHTML = NAV_TAB.map(function (t) {
      return '<a href="' + t[0] + '" data-sec="' + t[3] + '"' + (t[2] === "emergenze" ? ' class="sos"' : "") + ">" + ICONE[t[2]] + "<span>" + t[1] + "</span></a>";
    }).join("");
    document.getElementById("navDesktop").innerHTML = NAV_DESK.map(function (t) {
      return '<a href="' + t[0] + '" data-sec="' + t[2] + '">' + t[1] + "</a>";
    }).join("");
  }
  function setActive(sec) {
    var map = { frasi: "pratica", esercizi: "pratica", scenari: "pratica", percorso: "pratica", strumenti: "pratica", glossario: "altro", fonti: "altro", cerca: "altro", misura: "altro", appunti: "altro", ruolo: "altro" };
    var mapDesk = { glossario: "altro", fonti: "altro", cerca: "altro", misura: "altro", appunti: "altro", ruolo: "altro" };
    var tabSec = map[sec] || sec;
    [].forEach.call(document.querySelectorAll("#tabbar a"), function (a) {
      if (a.dataset.sec === tabSec) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
    [].forEach.call(document.querySelectorAll("#navDesktop a"), function (a) {
      if (a.dataset.sec === (mapDesk[sec] || sec)) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
  }

  /* ---------- installazione (Android e iPhone) ---------- */
  var deferredPrompt = null;
  window.addEventListener("beforeinstallprompt", function (e) {
    e.preventDefault(); deferredPrompt = e; refreshInstall();
  });
  window.addEventListener("appinstalled", function () { deferredPrompt = null; refreshInstall(); });
  function isStandalone() {
    return (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) || window.navigator.standalone === true;
  }
  function isIOS() {
    var ua = navigator.userAgent || "";
    return /iPad|iPhone|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  }
  function installCard() {
    return '<section class="card install" id="installBox" aria-labelledby="inst-t">' +
      '<h2 id="inst-t">Installa l\'app sul telefono</h2>' +
      '<div id="installAndroid" hidden><p>Funziona anche senza connessione, come un\'app.</p><button class="btn" id="btnInstall" type="button">Installa</button></div>' +
      '<div id="installIOS" hidden><p>Su <strong>iPhone e iPad</strong> si installa da Safari:</p>' +
      '<ol><li>Tocca il pulsante <strong>Condividi</strong> (il quadrato con la freccia verso l\'alto).</li>' +
      '<li>Scorri e scegli <strong>Aggiungi alla schermata Home</strong>.</li>' +
      '<li>Tocca <strong>Aggiungi</strong>.</li></ol><p class="hint">Dopo la prima apertura con la connessione, le pagine restano disponibili anche offline.</p></div>' +
      '<div id="installOther" hidden><p>Su <strong>Android</strong>: apri il menu del browser (⋮) e scegli <strong>Installa app</strong> o <strong>Aggiungi a schermata Home</strong>.</p></div>' +
      "</section>";
  }
  function refreshInstall() {
    var box = document.getElementById("installBox");
    if (!box) return;
    if (isStandalone()) { box.classList.remove("show"); return; }
    var a = document.getElementById("installAndroid"), i = document.getElementById("installIOS"), o = document.getElementById("installOther");
    a.hidden = i.hidden = o.hidden = true;
    if (deferredPrompt) a.hidden = false;
    else if (isIOS()) i.hidden = false;
    else if (/Android/i.test(navigator.userAgent)) o.hidden = false;
    else { box.classList.remove("show"); return; }
    box.classList.add("show");
    var b = document.getElementById("btnInstall");
    if (b) b.onclick = function () {
      if (!deferredPrompt) return;
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(function () { deferredPrompt = null; refreshInstall(); });
    };
  }

  /* ---------- pagine ---------- */
  function pageHome() {
    var h = '<h1>Accanto a te</h1>' +
      '<p class="lead">Una guida per chi sta vicino a una persona con disturbo borderline di personalità: capire cosa accade, comunicare meglio, affrontare le crisi e prendersi cura di sé.</p>' +
      searchBox("") +
      '<div class="callout avviso"><p><strong>Se c\'è un pericolo immediato</strong> per la vita o l\'incolumità di qualcuno, chiama il <a href="tel:112"><strong>112</strong></a>. Altre indicazioni nella pagina <a href="#/emergenze">Emergenze</a>.</p></div>' +
      (RUOLO ? "" : '<section class="card" aria-labelledby="ruolo-t"><h2 id="ruolo-t">Chi sei per questa persona?</h2><p>Se vuoi, scegli il tuo ruolo: l\'app mette in cima ciò che di solito serve prima e aggiunge esempi più vicini a te. Tutto il resto rimane disponibile.</p>' +
        ruoloScelta(false) + '<p class="hint">La scelta resta su questo dispositivo. La cambi o la togli in <a href="#/ruolo">Il tuo ruolo</a>.</p></section>') +
      '<div class="grid two">' +
      (RUOLO ? tile("#/ruolo", "Il tuo ruolo: " + RUOLO.titolo.toLowerCase(), "Che cosa pesa di solito, da dove partire, gli scenari più vicini alla tua situazione.", "Apri la scheda") : "") +
      tile("#/guida", "Guida", "Che cos\'è il disturbo, come cambiano le relazioni, cure, limiti, sicurezza.", G.length + " capitoli") +
      tile("#/percorso", "Percorso in " + PE.length + " tappe", "Un passo alla volta, sulla traccia dei gruppi per i familiari: come stai tu, che cosa sapere, un compito.", PE.filter(function (t) { return statoTappa(t.n).fatta; }).length + " di " + PE.length + " fatte") +
      tile("#/frasi", "Frasi validanti", "Cosa dire e cosa evitare nelle situazioni difficili, con il perché.", FR.length + " situazioni") +
      tile("#/esercizi", "Esercizi", "Respirazione, ancoraggio al presente, STOP, preparare una richiesta.", EX.length + " esercizi") +
      tile("#/scenari", "Scenari", "Situazioni a scelta con feedback, per fare pratica.", SC.length + " scenari") +
      tile("#/strumenti", "Strumenti", "Riformulare una frase, trovare l'emozione che viene prima, guardare pesi e ruoli, annotare i piccoli cambiamenti.", ST.length + " strumenti") +
      (PROF ? tile("#/misura", "Su misura", "Le schede e gli accordi del profilo importato su questo dispositivo.", PROF.aree.length + (PROF.aree.length === 1 ? " scheda" : " schede")) : "") +
      "</div>" +
      installCard() +
      '<section class="card"><h2>Come usare questa guida</h2><ul>' +
      "<li>Non serve leggere tutto: parti dal punto che ti serve adesso.</li>" +
      "<li>Le informazioni sono riformulate da testi clinici e per familiari: sotto ogni contenuto trovi la sua fonte, e l'elenco completo è in <a href=\"#/fonti\">Fonti</a>.</li>" +
      "<li>Niente account, niente tracciamento: ciò che scrivi non viene inviato a nessun server. Gli appunti del percorso e degli strumenti restano su questo dispositivo: li rivedi, li esporti e li cancelli in <a href=\"#/appunti\">I miei appunti</a>.</li>" +
      "<li>La guida non fa diagnosi e non sostituisce un professionista.</li></ul></section>";
    return { title: NOME, html: h, after: function () {
      refreshInstall();
      var sc = main.querySelector(".ruoli");
      if (sc) sc.addEventListener("click", ruoloClick);
    } };
  }
  function tile(href, t, d, k) {
    return '<a class="tile" href="' + href + '"><strong>' + esc(t) + "</strong><span>" + esc(d) + '</span><br><span class="k">' + esc(k) + " →</span></a>";
  }
  function searchBox(q) {
    return '<form class="search" role="search" id="searchForm"><label class="live" for="q">Cerca nella guida</label>' +
      '<input id="q" type="search" inputmode="search" enterkeyhint="search" placeholder="Cerca nella guida" value="' + esc(q) + '" autocomplete="off">' +
      '<button class="btn" type="submit">Cerca</button></form>';
  }

  function pageGuida() {
    var h = "<h1>Guida</h1><p class=\"lead\">" + G.length + " capitoli brevi, da leggere nell'ordine che preferisci. Nei capitoli, i riquadri «Approfondimento» si aprono con un tocco: contengono i termini tecnici e i riferimenti al libro.</p>" + searchBox("");
    var parti = window.GUIDA_PARTI || [{ titolo: "", ids: G.map(function (c) { return c.id; }) }];
    if (RUOLO) {
      h += '<h2 class="parte">Per cominciare, nel tuo ruolo: ' + esc(RUOLO.titolo.toLowerCase()) + '</h2><p class="hint">Un ordine di lettura proposto dall\'app. Sotto trovi tutti i capitoli, nell\'ordine di sempre. <a href="#/ruolo">Cambia ruolo</a></p><div class="grid">';
      RUOLO.leggi.forEach(function (id, k) {
        var c = G[findChap(id)];
        if (c) h += tile("#/guida/" + c.id, c.titolo, c.sommario, "Lettura " + (k + 1) + " di " + RUOLO.leggi.length + " · " + c.minuti + " min");
      });
      h += "</div>";
    } else h += '<p class="hint">Vuoi un ordine di lettura più vicino alla tua situazione? <a href="#/ruolo">Scegli il tuo ruolo</a>.</p>';
    parti.forEach(function (p) {
      if (!p.ids.length) return;
      if (p.titolo) h += '<h2 class="parte">' + esc(p.titolo) + "</h2>";
      h += '<div class="grid">';
      p.ids.forEach(function (id) {
        var i = findChap(id), c = G[i];
        h += tile("#/guida/" + c.id, (i + 1) + ". " + c.titolo, c.sommario, c.minuti + " min di lettura");
      });
      h += "</div>";
    });
    return { title: "Guida · " + NOME, html: h };
  }
  // Secondo livello di lettura: riquadro apribile con il termine tecnico, il meccanismo e il riferimento.
  function approfHtml(a) {
    if (!a) return "";
    var h = '<details class="approf"><summary><span class="lab">Approfondimento</span>' + esc(a.t) + "</summary>";
    (a.p || []).forEach(function (p) { h += "<p>" + fmt(p) + "</p>"; });
    if (a.l) h += "<ul>" + a.l.map(function (x) { return "<li>" + fmt(x) + "</li>"; }).join("") + "</ul>";
    if (a.rif) h += '<p class="rif">Riferimento: ' + esc(a.rif) + "</p>";
    return h + "</details>";
  }
  function approfTesto(a) { return a ? " " + a.t + " " + (a.p || []).join(" ") + " " + (a.l || []).join(" ") : ""; }
  function pageCapitolo(id, qs) {
    var i = findChap(id);
    if (i < 0) return page404();
    var c = G[i];
    var h = '<p class="crumbs"><a href="#/guida">Guida</a> › Capitolo ' + (i + 1) + "</p><article class=\"chap\"><h1>" + esc(c.titolo) + '</h1><p><span class="badge">' + c.minuti + " min di lettura</span></p>" + notaHtml(notaProf("guida", c.id));
    if (c.sezioni.length > 2) {
      h += '<nav class="toc-cap" aria-label="In questo capitolo"><strong>In questo capitolo</strong><ol>' +
        c.sezioni.map(function (s, k) { return '<li><a href="#/guida/' + c.id + '" data-sez="' + k + '">' + esc(s.t) + "</a></li>"; }).join("") + "</ol></nav>";
    }
    c.sezioni.forEach(function (s, k) {
      h += '<h2 id="sez-' + k + '" tabindex="-1">' + esc(s.t) + "</h2>";
      (s.p || []).forEach(function (p) { h += "<p>" + fmt(p) + "</p>"; });
      if (s.l) h += "<ul>" + s.l.map(function (x) { return "<li>" + fmt(x) + "</li>"; }).join("") + "</ul>";
      if (s.box) h += '<div class="callout ' + (s.box.tipo === "attenzione" ? "attenzione" : "") + '"><p>' + fmt(s.box.testo) + "</p></div>";
      h += approfHtml(s.approf);
    });
    h += fonteHtml(c.fonte, "Fonti di questo capitolo") + '</article><div class="pager">' +
      (i > 0 ? '<a class="btn secondary" href="#/guida/' + G[i - 1].id + '">← Precedente</a>' : "<span></span>") +
      (i < G.length - 1 ? '<a class="btn" href="#/guida/' + G[i + 1].id + '">Successivo →</a>' : '<a class="btn" href="#/pratica">Passa alla pratica →</a>') + "</div>";
    function vaiA(k) {
      var el = document.getElementById("sez-" + k);
      if (el) { el.scrollIntoView(); el.focus({ preventScroll: true }); }
    }
    // Dalla ricerca: se le parole cercate stanno in un approfondimento, lo si trova già aperto.
    function apriApprof(k) {
      var el = document.getElementById("sez-" + k);
      while (el && (el = el.nextElementSibling) && el.tagName !== "H2") if (el.tagName === "DETAILS") el.open = true;
    }
    return { title: c.titolo + " · " + NOME, html: h,
      after: function () {
        var t = main.querySelector(".toc-cap");
        if (t) t.addEventListener("click", function (e) {
          var a = e.target.closest("a[data-sez]"); if (!a) return;
          e.preventDefault(); vaiA(a.dataset.sez);
        });
      },
      afterScroll: function () { var k = param(qs, "s"); if (/^\d+$/.test(k)) { if (param(qs, "a") === "1") apriApprof(k); vaiA(k); } } };
  }

  function pagePratica() {
    return { title: "Pratica · " + NOME, html: "<h1>Pratica</h1><p class=\"lead\">Capire non basta: qui si prova.</p><div class=\"grid\">" +
      tile("#/frasi", "Frasi validanti", "Cosa dire e cosa evitare, con spiegazione.", FR.length + " situazioni") +
      tile("#/esercizi", "Esercizi guidati", "Per calmare il corpo, ritrovare il presente e preparare le parole.", EX.length + " esercizi") +
      tile("#/scenari", "Scenari interattivi", "Scegli cosa rispondere e leggi il commento.", SC.length + " scenari") +
      tile("#/strumenti", "Strumenti", "Per lavorare su di te: parole, emozioni, pesi, ruoli, piccoli cambiamenti.", ST.length + " strumenti") +
      tile("#/percorso", "Percorso in " + PE.length + " tappe", "Le tappe mettono in fila letture, esercizi e strumenti.", "Un passo alla volta") + "</div>" };
  }

  /* Frasi */
  var fraseFiltro = "tutte";
  function pageFrasi() {
    var h = "<h1>Frasi validanti</h1><p class=\"lead\">Esempi di cosa evitare e cosa provare in situazioni comuni. Sono spunti: adattali al tuo modo di parlare.</p>" +
      '<div class="toc" role="group" aria-label="Filtra per tema">' +
      window.FRASI_TAG.map(function (t) {
        return '<button class="chip" type="button" data-tag="' + t[0] + '" aria-pressed="' + (t[0] === fraseFiltro) + '">' + esc(t[1]) + "</button>";
      }).join("") + "</div><div id=\"frasiList\">" + frasiList() + "</div>" +
      "<h2>Frasi da usare con cautela</h2><div class=\"card\"><ul>" + window.FRASI_EVITA.map(function (x) {
        return "<li><strong>" + esc(x[0]) + "</strong>: " + esc(x[1]) + "</li>";
      }).join("") + "</ul></div>" +
      '<div class="callout"><p>Cerchi come agire in una crisi con rischio di autolesionismo o suicidio? Vai a <a href="#/emergenze">Emergenze</a>.</p></div>';
    return { title: "Frasi validanti · " + NOME, html: h, after: function () {
      main.querySelector(".toc").addEventListener("click", function (e) {
        var b = e.target.closest("button[data-tag]"); if (!b) return;
        fraseFiltro = b.dataset.tag;
        [].forEach.call(main.querySelectorAll(".toc .chip"), function (c) { c.setAttribute("aria-pressed", c.dataset.tag === fraseFiltro); });
        document.getElementById("frasiList").innerHTML = frasiList();
      });
    } };
  }
  function frasiList() {
    return notaHtml(notaProf("frasi", fraseFiltro)) + FR.filter(function (f) { return fraseFiltro === "tutte" || f.tag === fraseFiltro; }).map(function (f) {
      return '<article class="card frase"><div class="sit">' + esc(f.situazione) + "</div>" +
        '<div class="row no"><span class="lab">Meglio evitare</span>' + esc(f.evita) + "</div>" +
        '<div class="row si"><span class="lab">Puoi provare</span>' + esc(f.prova) + "</div>" +
        '<div class="row why"><strong>Perché:</strong> ' + esc(f.perche) + ' <span class="badge">' + esc(f.livello) + "</span>" + fonteHtml(f.fonte) + "</div></article>";
    }).join("");
  }

  /* Scenari */
  var scState = {};
  function pageScenari() {
    var h = "<h1>Scenari</h1><p class=\"lead\">Scegli la risposta che ti sembra più utile, poi leggi il commento. Non esistono risposte perfette: l'obiettivo è allenare lo sguardo.</p>";
    function griglia(a) {
      return '<div class="grid">' + a.map(function (s) {
        var st = scState[s.id];
        return tile("#/scenari/" + s.id, s.titolo, s.contesto.slice(0, 90) + "…", st && st.scelto !== undefined ? "Completato" : "Inizia");
      }).join("") + "</div>";
    }
    var vicini = scVicini();
    if (vicini.length) {
      h += '<h2 class="parte">Più vicini alla tua situazione: ' + esc(RUOLO.titolo.toLowerCase()) + '</h2><p class="hint">Scelti dall\'app per il tuo ruolo. <a href="#/ruolo">Cambia ruolo</a></p>' + griglia(vicini) +
        '<h2 class="parte">Gli altri scenari</h2>' + griglia(scOrdine().slice(vicini.length));
    } else h += griglia(SC) + '<p class="hint">Vuoi vedere per primi gli scenari più vicini alla tua situazione? <a href="#/ruolo">Scegli il tuo ruolo</a>.</p>';
    return { title: "Scenari · " + NOME, html: h };
  }
  function pageScenario(id) {
    var ORD = scOrdine(), idx = -1; ORD.forEach(function (s, i) { if (s.id === id) idx = i; });
    if (idx < 0) return page404();
    var s = ORD[idx];
    var h = '<p class="crumbs"><a href="#/scenari">Scenari</a> › ' + (idx + 1) + " di " + SC.length + "</p>" +
      '<div class="progress" aria-hidden="true"><i style="width:' + (((idx + 1) / SC.length) * 100) + '%"></i></div>' +
      "<h1>" + esc(s.titolo) + "</h1><p>" + esc(s.contesto) + "</p><h2>Cosa fai?</h2><div id=\"opts\">" +
      s.opzioni.map(function (o, i) {
        return '<button class="option" type="button" data-i="' + i + '">' + esc(o.testo) + "</button>";
      }).join("") + '</div><div id="esito" class="callout" tabindex="-1" hidden></div>' +
      '<div class="pager" id="pagerSc">' + (idx > 0 ? '<a class="btn secondary" href="#/scenari/' + ORD[idx - 1].id + '">← Precedente</a>' : "<span></span>") +
      (idx < ORD.length - 1 ? '<a class="btn" href="#/scenari/' + ORD[idx + 1].id + '">Prossimo →</a>' : '<a class="btn" href="#/scenari">Tutti gli scenari</a>') + "</div>" + fonteHtml(s.fonte);
    return { title: s.titolo + " · " + NOME, html: h, after: function () {
      var opts = document.getElementById("opts");
      function mostra(i, fuoco) {
        var etichette = ["Da evitare", "Accettabile, ma migliorabile", "Molto efficace"];
        [].forEach.call(opts.querySelectorAll(".option"), function (x, k) {
          x.setAttribute("aria-disabled", "true");
          x.classList.add("o" + s.opzioni[k].ok);
          if (k !== i) x.classList.add("dim");
          var tag = document.createElement("span");
          tag.className = "esito";
          tag.innerHTML = "<strong>" + etichette[s.opzioni[k].ok] + ".</strong> " + esc(s.opzioni[k].esito);
          x.appendChild(tag);
        });
        // Il commento completo sta fuori dai pulsanti, così viene sempre letto.
        var box = document.getElementById("esito");
        var testo = "<p><strong>" + etichette[s.opzioni[i].ok] + ".</strong> " + esc(s.opzioni[i].esito) + "</p>";
        if (Object.keys(scState).length === SC.length) {
          var buoni = SC.filter(function (x) { return scState[x.id] && scState[x.id].ok === 2; }).length;
          testo += "<p>Hai completato tutti i " + SC.length + " scenari: in " + buoni + " hai scelto la risposta più efficace. Non conta il punteggio, conta aver riflettuto su cosa si prova e su cosa può aiutare.</p>";
        }
        box.innerHTML = testo + notaHtml(notaProf("scenari", id)); box.hidden = false;
        if (fuoco) box.focus();
      }
      opts.addEventListener("click", function (e) {
        var b = e.target.closest(".option"); if (!b || scState[id]) return;
        var i = +b.dataset.i;
        scState[id] = { scelto: i, ok: s.opzioni[i].ok };
        mostra(i, true);
      });
      if (scState[id]) mostra(scState[id].scelto, false);
    } };
  }

  /* Esercizi */
  function pageEsercizi() {
    var h = "<h1>Esercizi</h1><p class=\"lead\">Brevi pratiche guidate. Nulla di ciò che scrivi viene salvato.</p><div class=\"grid\">";
    EX.forEach(function (e) { if (!nascosto(e.id)) h += tile("#/esercizi/" + e.id, e.titolo, e.scopo, e.durata); });
    var tolti = EX.filter(function (e) { return nascosto(e.id); }).length;
    return { title: "Esercizi · " + NOME, html: h + "</div>" + (tolti ? '<p class="hint">' + (tolti === 1 ? "Un esercizio non è in elenco" : tolti + " esercizi non sono in elenco") + ' perché il profilo «Su misura» li sconsiglia in questa situazione. <a href="#/misura">Vedi il profilo</a></p>' : "") };
  }
  var breathTimer = null;
  function stopBreath() { if (breathTimer) { clearTimeout(breathTimer); breathTimer = null; } }

  function pageEsercizio(id) {
    var ex = null; EX.forEach(function (e) { if (e.id === id) ex = e; });
    if (!ex) return page404();
    var h = '<p class="crumbs"><a href="#/esercizi">Esercizi</a> › ' + esc(ex.titolo) + "</p><h1>" + esc(ex.titolo) + '</h1><p><span class="badge">' + esc(ex.durata) + "</span></p><p class=\"lead\">" + esc(ex.scopo) + "</p>" + notaHtml(notaProf("esercizi", ex.id));
    var after = null;
    if (ex.avviso) h += '<div class="callout attenzione"><p><strong>Prima di iniziare.</strong> ' + esc(ex.avviso) + "</p></div>";
    if (ex.tipo === "respiro") { h += respiroHtml(ex); after = function () { respiroInit(ex); }; }
    else if (ex.tipo === "passi") { h += passiHtml(ex); after = function () { passiInit(ex); }; }
    else if (ex.tipo === "frase") { h += fraseBuilderHtml(); after = fraseBuilderInit; }
    else if (ex.tipo === "dear") { h += dearHtml(); after = dearInit; }
    else if (ex.tipo === "checkin") { h += checkinHtml(); after = checkinInit; }
    h += fonteHtml(ex.fonte);
    h += '<div class="callout avviso no-print"><p>Se durante un esercizio ti senti peggio, interrompi e, se ti serve aiuto, vai a <a href="#/emergenze">Emergenze</a>.</p></div>';
    return { title: ex.titolo + " · " + NOME, html: h, after: after, leave: stopBreath };
  }

  function respiroHtml(ex) {
    return '<div class="card"><p>' + esc(ex.intro) + "</p></div>" +
      '<div class="card breath"><div class="ring" id="ring" role="img" aria-label="Cerchio che si espande e si restringe seguendo il respiro"><div><div class="word" id="word">Pronto</div><div class="count" id="count"></div></div></div>' +
      '<p id="cicloTxt" aria-live="polite">' + ex.cicli + " respiri</p>" +
      '<div class="btn-row" style="justify-content:center"><button class="btn" id="bStart" type="button">Inizia</button><button class="btn secondary" id="bStop" type="button" hidden>Ferma</button></div></div>';
  }
  function respiroInit(ex) {
    var ring = document.getElementById("ring"), word = document.getElementById("word"), count = document.getElementById("count"),
        cic = document.getElementById("cicloTxt"), bS = document.getElementById("bStart"), bX = document.getElementById("bStop");
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    function fine(msg) {
      stopBreath(); ring.className = "ring"; ring.style.transitionDuration = ""; word.textContent = msg || "Pronto"; count.textContent = "";
      bS.hidden = false; bX.hidden = true; bS.textContent = "Ricomincia";
    }
    function fase(tipo, sec, n) {
      word.textContent = tipo === "in" ? "Inspira" : "Espira";
      ring.style.transitionDuration = reduce ? "0s" : sec + "s";
      ring.className = "ring " + tipo;
      var rest = sec;
      count.textContent = rest;
      (function tick() {
        breathTimer = setTimeout(function () {
          rest--;
          if (rest > 0) { count.textContent = rest; tick(); }
          else if (tipo === "in") fase("out", ex.espira, n);
          else if (n + 1 >= ex.cicli) { cic.textContent = "Fatto. Come stai adesso?"; fine("Fatto"); }
          else { cic.textContent = "Respiro " + (n + 2) + " di " + ex.cicli; fase("in", ex.inspira, n + 1); }
        }, 1000);
      })();
    }
    bS.onclick = function () { bS.hidden = true; bX.hidden = false; cic.textContent = "Respiro 1 di " + ex.cicli; fase("in", ex.inspira, 0); };
    bX.onclick = function () { cic.textContent = ex.cicli + " respiri"; fine(); };
  }

  function passiHtml(ex) {
    return '<div class="card stepper" id="stp"><p id="sNum" class="badge"></p><div class="big" id="sT"></div><p id="sD"></p>' +
      '<div class="btn-row" style="justify-content:center"><button class="btn secondary" id="sPrev" type="button">Indietro</button><button class="btn" id="sNext" type="button">Avanti</button></div></div>' +
      '<details class="card"><summary>Vedi tutti i passi</summary>' +
      ex.passi.map(function (p, i) { return '<div class="step"><div class="n">' + (i + 1) + "</div><div><h3>" + esc(p.t) + "</h3><p>" + esc(p.d) + "</p></div></div>"; }).join("") + "</details>";
  }
  function passiInit(ex) {
    var i = 0, n = ex.passi.length;
    var sNum = document.getElementById("sNum"), sT = document.getElementById("sT"), sD = document.getElementById("sD"),
        pv = document.getElementById("sPrev"), nx = document.getElementById("sNext");
    function draw() {
      sNum.textContent = "Passo " + (i + 1) + " di " + n; sT.textContent = ex.passi[i].t; sD.textContent = ex.passi[i].d;
      pv.disabled = i === 0; nx.textContent = i === n - 1 ? "Ricomincia" : "Avanti";
      live.textContent = "Passo " + (i + 1) + " di " + n + ": " + ex.passi[i].t;
    }
    pv.onclick = function () { if (i > 0) { i--; draw(); } };
    nx.onclick = function () { i = i === n - 1 ? 0 : i + 1; draw(); };
    draw();
  }

  function fraseBuilderHtml() {
    return '<form class="card" id="fb" autocomplete="off">' +
      field("fb1", "1. Cosa vedo o sento?", "Descrivi senza giudicare. Es.: «Sei rientrato e hai sbattuto la porta».") +
      field("fb2", "2. Che emozione credo che provi?", "Prova a nominarla. Es.: «rabbia», «umiliazione», «paura di essere abbandonato».") +
      field("fb3", "3. Perché ha senso, dal suo punto di vista?", "Es.: «dopo la giornata che hai avuto», «perché ti sei sentito ignorato».") +
      field("fb4", "4. Quale domanda restituisce capacità di agire?", "Es.: «Cosa ti aiuterebbe adesso?»") +
      '<div class="btn-row"><button class="btn" type="submit">Crea la frase</button><button class="btn ghost" type="reset" id="fbReset">Cancella</button><button class="btn secondary" type="button" id="fbCopy" hidden>Copia</button></div>' +
      '<div class="output" id="fbOut" hidden></div></form>';
  }
  function field(id, label, hint) {
    return '<div class="field"><label for="' + id + '">' + esc(label) + ' <span class="hint">' + esc(hint) + '</span></label><input type="text" id="' + id + '" autocomplete="off" autocapitalize="sentences"></div>';
  }
  function fraseBuilderInit() {
    var f = document.getElementById("fb"), out = document.getElementById("fbOut");
    f.onsubmit = function (e) {
      e.preventDefault();
      var a = f.fb1.value.trim(), b = f.fb2.value.trim(), c = f.fb3.value.trim(), d = f.fb4.value.trim();
      var parts = [];
      if (a) parts.push("Vedo che " + lower(a).replace(/[.!?]+$/, "") + ".");
      if (b) parts.push("Immagino che tu senta " + lower(b).replace(/[.!?]+$/, "") + ".");
      if (c) parts.push("Ha senso, " + lower(c).replace(/[.!?]+$/, "") + ".");
      if (d) parts.push(d.replace(/[.!?]*$/, "") + (/[?]$/.test(d) ? "" : "?"));
      out.hidden = false;
      out.textContent = parts.length ? parts.join(" ") : "Compila almeno un campo.";
      document.getElementById("fbCopy").hidden = !parts.length;
    };
    f.onreset = function () { out.hidden = true; out.textContent = ""; document.getElementById("fbCopy").hidden = true; };
    document.getElementById("fbCopy").onclick = function () { copia(out.textContent, this); };
  }
  function lower(s) { return s.charAt(0).toLowerCase() + s.slice(1); }

  function dearHtml() {
    return '<form class="card" id="dear" autocomplete="off">' +
      field("d1", "D – Descrivo i fatti", "Solo ciò che si vede o si sente, senza giudizi.") +
      field("d2", "E – Esprimo come mi sento", "Es.: «Mi sento preoccupato».") +
      field("d3", "A – Chiedo o rifiuto con chiarezza", "Es.: «Ti chiedo di avvisarmi se fai tardi».") +
      field("d4", "R – Rinforzo: cosa si guadagna", "Es.: «Così potrò stare più tranquillo e organizzarmi».") +
      '<p class="hint">M (restare concentrati), A (tono e postura sicuri) e N (essere disponibili a una soluzione intermedia) si praticano mentre parli.</p>' +
      '<div class="btn-row"><button class="btn" type="submit">Crea il testo</button><button class="btn ghost" type="reset">Cancella</button><button class="btn secondary" type="button" id="dCopy" hidden>Copia</button></div>' +
      '<div class="output" id="dOut" hidden></div></form>';
  }
  function dearInit() {
    var f = document.getElementById("dear"), out = document.getElementById("dOut");
    f.onsubmit = function (e) {
      e.preventDefault();
      var v = [f.d1, f.d2, f.d3, f.d4].map(function (x) { return x.value.trim(); }).filter(Boolean);
      out.hidden = false;
      out.textContent = v.length ? v.map(function (x) { return x.replace(/\s+$/, ""); }).join("\n\n") : "Compila almeno un campo.";
      document.getElementById("dCopy").hidden = !v.length;
    };
    f.onreset = function () { out.hidden = true; out.textContent = ""; document.getElementById("dCopy").hidden = true; };
    document.getElementById("dCopy").onclick = function () { copia(out.textContent, this); };
  }

  function checkinHtml() {
    return '<form class="card" id="chk"><p>Pensa all\'ultimo mese. Segna ciò che ti riguarda.</p>' +
      window.CHECKIN.map(function (t, i) { return '<label class="check"><input type="checkbox" value="1"> <span>' + esc(t) + "</span></label>"; }).join("") +
      '<div class="output" id="cOut" aria-live="polite">Segna le voci che senti vere.</div>' +
      '<p class="hint">Non è un test validato e non fa diagnosi: serve solo a fermarti un momento a guardare come stai.</p></form>';
  }
  function checkinInit() {
    var f = document.getElementById("chk"), out = document.getElementById("cOut");
    function upd() {
      var n = f.querySelectorAll("input:checked").length, t;
      if (n === 0) { out.textContent = "Segna le voci che senti vere."; return; }
      if (n <= 2) t = "Sembra che tu stia reggendo, con qualche segnale di fatica. Concediti una pausa e, se puoi, parlane con una persona di fiducia.";
      else if (n <= 5) t = "Ci sono diversi segnali di sovraccarico. Può aiutarti un gruppo per familiari o un colloquio con uno psicologo o con il medico di base. Chiedere sostegno non toglie nulla a chi ami. Se ti serve aiuto subito, trovi i recapiti in {{#/emergenze|Emergenze}}.";
      else t = "Sembra che tu sia molto sotto pressione. Ti consigliamo di parlarne presto con il medico di base o con un professionista. Se hai pensieri di farti del male o ti senti senza speranza, vai a {{#/emergenze|Emergenze}}.";
      out.innerHTML = fmt(t);
    }
    f.addEventListener("change", upd);
  }

  /* Emergenze */
  function pageEmergenze() {
    var h = "<h1>Emergenze</h1>" +
      '<section class="card sos-card"><h2>Pericolo immediato</h2><a class="tel" href="tel:112">112</a><p>' + esc(EM.numeri[0].nota) + "</p>" +
      '<div class="btn-row"><a class="btn danger" href="tel:112">Chiama il 112</a></div></section>' +
      "<h2>Chiama il 112 se</h2><div class=\"card\"><ul>" + EM.quando112.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></div>" +
      "<h2>Mentre aspetti i soccorsi</h2><div class=\"card\"><ul>" + EM.mentreAspetti.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></div>" +
      "<h2>Se non è un pericolo immediato</h2><div class=\"card\"><p>" + esc(EM.ps) + "</p></div>" +
      "<h2>Ascolto e supporto</h2>" +
      '<div class="card num-card"><div><strong>' + esc(EM.numeri[1].nome) + "</strong><br><span class=\"hint\" style=\"color:var(--muted)\">" + esc(EM.numeri[1].nota) + '</span></div>' +
      '<div><a class="tel" href="tel:' + EM.numeri[1].tel + '">' + esc(EM.numeri[1].mostra) + '</a><br><a href="' + EM.numeri[1].url + '" rel="noopener" target="_blank">Sito ufficiale</a></div></div>' +
      '<div class="callout"><p><strong>Hai bisogno di aiuto per te?</strong></p>' + EM.perTe.map(function (x) { return "<p>" + esc(x) + "</p>"; }).join("") + "</div>" +
      "<h2>Se la persona parla di farsi del male</h2><div class=\"card\"><ol>" +
      "<li>Mantieni la calma e resta con lei se è sicuro.</li>" +
      "<li>Chiedi in modo diretto: «Stai pensando di farti del male? Di toglierti la vita?».</li>" +
      "<li>Ascolta senza giudicare né discutere.</li>" +
      "<li>Allontana i mezzi, se puoi farlo in sicurezza.</li>" +
      "<li>Se c'è un piano, dei mezzi o un gesto già compiuto: <a href=\"tel:112\">112</a>.</li>" +
      "<li>Avvisa appena possibile terapeuta o CSM.</li></ol>" +
      '<p><a href="#/guida/sicurezza">Approfondisci nel capitolo dedicato</a></p></div>' +
      "<h2>Piano di sicurezza</h2><p>Modello da compilare con la persona e con i professionisti di riferimento. <strong>Non viene inviato a nessun server.</strong> Resta solo in questa scheda del browser, così non lo perdi se cambi pagina, e sparisce quando la chiudi o premi «Cancella tutto». Stampalo, copialo o fotografalo, e non condividerlo online se contiene recapiti personali. Se il dispositivo è condiviso, cancellalo quando hai finito.</p>" +
      '<form class="card" id="piano">' +
      window.PIANO.map(function (p, i) {
        return '<div class="field"><label for="p' + i + '">' + esc(p[0]) + ' <span class="hint">' + esc(p[1]) + '</span></label><textarea id="p' + i + '"></textarea></div>';
      }).join("") +
      '<div class="btn-row no-print"><button class="btn" type="button" id="stampa">Stampa</button><button class="btn secondary" type="button" id="pCopia">Copia</button><button class="btn ghost" type="reset">Cancella tutto</button></div></form>';
    return { title: "Emergenze · " + NOME, html: h, after: function () {
      var CHIAVE = "accanto-piano-sicurezza";
      var f = document.getElementById("piano"), PI = window.PIANO;
      function campo(i) { return document.getElementById("p" + i); }
      try {
        var salvato = JSON.parse(sessionStorage.getItem(CHIAVE) || "{}");
        PI.forEach(function (p, i) { if (salvato[i]) campo(i).value = salvato[i]; });
      } catch (e) {}
      f.addEventListener("input", function () {
        var o = {}; PI.forEach(function (p, i) { o[i] = campo(i).value; });
        try { sessionStorage.setItem(CHIAVE, JSON.stringify(o)); } catch (e) {}
      });
      f.addEventListener("reset", function () { try { sessionStorage.removeItem(CHIAVE); } catch (e) {} });
      document.getElementById("stampa").onclick = function () { window.print(); };
      document.getElementById("pCopia").onclick = function () {
        copia(PI.map(function (p, i) { return p[0] + "\n" + (campo(i).value.trim() || "—"); }).join("\n\n"), this);
      };
    } };
  }

  /* ---------- appunti: ciò che si scrive nel percorso e negli strumenti ----------
     Restano solo nella memoria di questo dispositivo (localStorage): si rivedono, si esportano e si cancellano
     da «I miei appunti». Niente viene inviato. */
  var K_APP = "accanto.appunti";
  function dataOk(s) { return typeof s === "string" && /^\d{4}-\d{2}-\d{2}$/.test(s) ? s : ""; }
  function oggi() {
    var d = new Date();
    function z(n) { return (n < 10 ? "0" : "") + n; }
    return d.getFullYear() + "-" + z(d.getMonth() + 1) + "-" + z(d.getDate());
  }
  function dataIt(s) { return s ? s.slice(8, 10) + "/" + s.slice(5, 7) + "/" + s.slice(0, 4) : ""; }
  function giorniDa(s) { return s ? Math.round((new Date(oggi()) - new Date(s)) / 86400000) : 9999; }
  function voti(o, n) {
    var out = {};
    if (o && typeof o === "object") Object.keys(o).slice(0, n).forEach(function (k) {
      if (k.length <= 20 && [0, 1, 2, 3].indexOf(o[k]) >= 0) out[k] = o[k];
    });
    return out;
  }
  function appSicuri(raw) {
    var A = { v: 1, tappe: {}, quaderno: [], riformula: [], emozioni: [], pesi: [], ruoli: null };
    if (!raw || typeof raw !== "object") return A;
    var t = raw.tappe && typeof raw.tappe === "object" ? raw.tappe : {};
    PE.forEach(function (x) {
      var o = t[x.n];
      if (!o || typeof o !== "object") return;
      var r = { cond: txt(o.cond, 4000), rip: txt(o.rip, 4000), fatta: dataOk(o.fatta) };
      if (r.cond || r.rip || r.fatta) A.tappe[x.n] = r;
    });
    function lista(a, n, f) {
      return (Array.isArray(a) ? a : []).slice(0, n).map(function (x) { return x && typeof x === "object" ? f(x) : null; }).filter(Boolean);
    }
    A.quaderno = lista(raw.quaderno, 400, function (x) {
      var q = txt(x.t, 600);
      return q ? { d: dataOk(x.d), t: q, chi: ["suo", "mio", "noi"].indexOf(x.chi) >= 0 ? x.chi : "suo", detto: x.detto === true } : null;
    });
    A.riformula = lista(raw.riformula, 100, function (x) {
      var a = txt(x.a, 500);
      return a ? { d: dataOk(x.d), da: txt(x.da, 500), a: a } : null;
    });
    A.emozioni = lista(raw.emozioni, 100, function (x) {
      var e = { d: dataOk(x.d), fatto: txt(x.fatto, 500), pensiero: txt(x.pensiero, 500), mostrata: elencoTesti(x.mostrata, 40, 12),
        primaria: elencoTesti(x.primaria, 40, 12), bisogno: txt(x.bisogno, 500) };
      return e.fatto || e.pensiero || e.mostrata.length || e.primaria.length || e.bisogno ? e : null;
    });
    A.pesi = lista(raw.pesi, 24, function (x) {
      return dataOk(x.d) ? { d: x.d, v: voti(x.v, 30), nota: txt(x.nota, 600), con: txt(x.con, 300) } : null;
    });
    var r = raw.ruoli;
    if (r && typeof r === "object") A.ruoli = { d: dataOk(r.d), v: voti(r.v, 8), pesa: txt(r.pesa, 600), posa: txt(r.posa, 600) };
    return A;
  }
  var APP;
  try { APP = appSicuri(JSON.parse(localStorage.getItem(K_APP) || "null")); } catch (e) { APP = appSicuri(null); }
  // «muto»: mentre si scrive non si annuncia ogni salvataggio a chi usa uno screen reader.
  function salvaApp(muto) {
    try { localStorage.setItem(K_APP, JSON.stringify(APP)); if (!muto) live.textContent = "Salvato su questo dispositivo"; return true; }
    catch (e) { live.textContent = "Non è stato possibile salvare su questo dispositivo"; return false; }
  }
  function notaAppunti() {
    return '<p class="hint no-print">Ciò che scrivi resta solo su questo dispositivo e non viene inviato a nessuno. Lo rivedi, lo esporti e lo cancelli in <a href="#/appunti">I miei appunti</a>. Se il dispositivo è condiviso, valuta che cosa scrivere.</p>';
  }
  function area(id, label, hint, val, max) {
    return '<div class="field"><label for="' + id + '">' + esc(label) + (hint ? ' <span class="hint">' + esc(hint) + "</span>" : "") +
      '</label><textarea id="' + id + '" maxlength="' + (max || 600) + '" autocomplete="off">' + esc(val || "") + "</textarea></div>";
  }
  function parFmt(a) { return (a || []).map(function (p) { return "<p>" + fmt(p) + "</p>"; }).join(""); }
  function liFmt(a) { return (a || []).map(function (x) { return "<li>" + fmt(x) + "</li>"; }).join(""); }

  /* Percorso in 12 tappe */
  function tappaDi(n) { for (var i = 0; i < PE.length; i++) if (String(PE[i].n) === String(n)) return PE[i]; return null; }
  function statoTappa(n) { return APP.tappe[n] || { cond: "", rip: "", fatta: "" }; }
  function temaDi(id) { var r = { titolo: "" }; PT.forEach(function (t) { if (t.id === id) r = t; }); return r; }
  function pagePercorso() {
    var fatte = PE.filter(function (t) { return statoTappa(t.n).fatta; }).length, prossima = null;
    PE.forEach(function (t) { if (!prossima && !statoTappa(t.n).fatta) prossima = t; });
    var h = "<h1>Percorso in " + PE.length + ' tappe</h1><p class="lead">' + esc(PIN.lead) + "</p>" + parFmt(PIN.p) +
      '<div class="progress" role="img" aria-label="' + fatte + " tappe fatte su " + PE.length + '"><i style="width:' + (fatte / PE.length * 100) + '%"></i></div>' +
      '<p class="hint">' + (fatte ? fatte + (fatte === 1 ? " tappa fatta" : " tappe fatte") + " su " + PE.length + "." : "Nessuna tappa fatta, per ora.") + "</p>" +
      (prossima ? '<p><a class="btn" href="#/percorso/' + prossima.n + '">' + (fatte ? "Riprendi dalla tappa " : "Comincia dalla tappa ") + prossima.n + "</a></p>"
        : '<div class="callout"><p>Hai chiuso tutte le tappe. Puoi rileggere la strada fatta in <a href="#/appunti">I miei appunti</a> e rifare le tappe quando vuoi.</p></div>') +
      '<div class="callout avviso"><p><strong>Il ritmo.</strong> ' + esc(PIN.ritmo) + "</p></div>" +
      '<p class="hint">' + (RUOLO ? "In ogni tappa trovi un esempio per il tuo ruolo (" + esc(RUOLO.titolo.toLowerCase()) + '). <a href="#/ruolo">Cambia ruolo</a>'
        : 'Se scegli <a href="#/ruolo">il tuo ruolo</a> (genitore, partner, fratello o sorella, amico), ogni tappa aggiunge un esempio più vicino a te.') + "</p>";
    PT.forEach(function (tm) {
      h += '<h2 class="parte">' + esc(tm.titolo) + '</h2><p class="hint">' + esc(tm.obiettivo) + '</p><div class="grid">';
      PE.forEach(function (t) {
        if (t.tema !== tm.id) return;
        var s = statoTappa(t.n);
        h += tile("#/percorso/" + t.n, t.n + ". " + t.titolo, t.sommario, s.fatta ? "Fatta il " + dataIt(s.fatta) : (s.cond || s.rip ? "Cominciata" : "Da fare"));
      });
      h += "</div>";
    });
    h += '<details class="approf dopo"><summary><span class="lab">Da sapere</span>Che cosa viene dal libro e che cosa no</summary>' + parFmt(PIN.nota) + "</details>" + fonteHtml(PIN.fonte);
    return { title: "Percorso · " + NOME, html: h };
  }
  function pageTappa(n) {
    var t = tappaDi(n);
    if (!t) return page404();
    var s = statoTappa(t.n), prec = tappaDi(t.n - 1), succ = tappaDi(t.n + 1), k = 0;
    function num() { k++; return k + ". "; }
    var h = '<p class="crumbs"><a href="#/percorso">Percorso</a> › Tappa ' + t.n + " di " + PE.length + '</p><article class="chap"><h1>' + esc(t.titolo) +
      '</h1><p><span class="badge">' + esc(temaDi(t.tema).titolo) + "</span></p>" + notaHtml(notaProf("percorso", String(t.n)));
    if (prec && !s.fatta && statoTappa(prec.n).fatta && giorniDa(statoTappa(prec.n).fatta) < 7) {
      h += '<div class="callout avviso"><p>Hai chiuso la tappa precedente il ' + dataIt(statoTappa(prec.n).fatta) +
        ". Il ritmo consigliato è almeno una settimana fra una tappa e l'altra, per dare tempo al compito. Puoi comunque proseguire.</p></div>";
    }
    h += parFmt(t.apertura);
    if (t.box) h += '<div class="callout ' + (t.box.tipo === "attenzione" ? "attenzione" : "") + '"><p>' + fmt(t.box.testo) + "</p></div>";
    if (RUOLO && RUOLO.tappe[t.n]) {
      h += '<div class="callout ruolo"><span class="lab">Nel tuo ruolo: ' + esc(RUOLO.titolo.toLowerCase()) + "</span><p>" + fmt(RUOLO.tappe[t.n]) +
        '</p><p class="hint">Esempio proposto dall\'app, non tratto dal libro. <a href="#/ruolo">Cambia ruolo</a></p></div>';
    }
    h += "<h2>" + num() + 'Come stai tu</h2><p class="hint">Nel gruppo si comincia con un giro in cui ciascuno racconta come sta. Qui puoi rispondere per iscritto, o anche solo a mente.</p><ul>' +
      liFmt(t.condivisione) + "</ul>" + area("tCond", "Le tue risposte", "Facoltativo.", s.cond, 4000);
    if (t.ripresa && prec) {
      h += "<h2>" + num() + "Ripresa del compito</h2><p>" + esc(t.ripresa) + '</p><p class="hint">Il compito era: <a href="#/percorso/' + prec.n + '">' + esc(prec.compito.t) +
        "</a>. Se non l'hai fatto, puoi farlo adesso, oppure chiederti che cosa te l'ha impedito: anche questa è un'informazione.</p>" + area("tRip", "Com'è andata", "Facoltativo.", s.rip, 4000);
    }
    h += "<h2>" + num() + "Da sapere</h2><ul>" + liFmt(t.idee) + "</ul><p><strong>Da leggere nella guida</strong></p><ul>" + t.leggi.map(function (id) {
      var c = G[findChap(id)];
      return c ? '<li><a href="#/guida/' + c.id + '">' + esc(c.titolo) + '</a> <span class="hint">' + c.minuti + " min</span></li>" : "";
    }).join("") + "</ul>";
    h += "<h2>" + num() + 'Il compito fino alla prossima tappa</h2><div class="card"><h3>' + esc(t.compito.t) + "</h3><p>" + esc(t.compito.p) + '</p><div class="btn-row">' +
      t.compito.link.map(function (l) { return '<a class="btn secondary" href="' + l[0] + '">' + esc(l[1]) + "</a>"; }).join("") + "</div></div>" +
      '<label class="check fatta"><input type="checkbox" id="tFatta"' + (s.fatta ? " checked" : "") + '> <span><strong>Tappa fatta</strong> <span class="hint" id="tQuando">' + (s.fatta ? "il " + dataIt(s.fatta) : "") + "</span></span></label>" +
      notaAppunti() + fonteHtml(t.fonte) + '</article><div class="pager">' +
      (prec ? '<a class="btn secondary" href="#/percorso/' + prec.n + '">← Tappa ' + prec.n + "</a>" : '<a class="btn secondary" href="#/percorso">← Tutte le tappe</a>') +
      (succ ? '<a class="btn" href="#/percorso/' + succ.n + '">Tappa ' + succ.n + " →</a>" : '<a class="btn" href="#/appunti">I miei appunti →</a>') + "</div>";
    return { title: "Tappa " + t.n + ": " + t.titolo + " · " + NOME, html: h, after: function () {
      var cond = document.getElementById("tCond"), rip = document.getElementById("tRip"), fatta = document.getElementById("tFatta");
      function salva(muto) {
        var o = { cond: cond.value, rip: rip ? rip.value : statoTappa(t.n).rip, fatta: fatta.checked ? (statoTappa(t.n).fatta || oggi()) : "" };
        if (o.cond.trim() || o.rip.trim() || o.fatta) APP.tappe[t.n] = o; else delete APP.tappe[t.n];
        salvaApp(muto);
        document.getElementById("tQuando").textContent = o.fatta ? "il " + dataIt(o.fatta) : "";
      }
      cond.addEventListener("input", function () { salva(true); });
      if (rip) rip.addEventListener("input", function () { salva(true); });
      fatta.addEventListener("change", function () { salva(false); });
    } };
  }

  /* Strumenti */
  function strumentoDi(id) { for (var i = 0; i < ST.length; i++) if (ST[i].id === id) return ST[i]; return null; }
  function pageStrumenti() {
    var h = '<h1>Strumenti</h1><p class="lead">Cinque strumenti per lavorare su di te, tratti dal capitolo sui gruppi per i familiari. Qui, a differenza degli esercizi, ciò che scrivi viene conservato.</p><div class="grid">';
    ST.forEach(function (s) { h += tile("#/strumenti/" + s.id, s.titolo, s.scopo, s.durata); });
    return { title: "Strumenti · " + NOME, html: h + "</div>" + notaAppunti() };
  }
  function pageStrumento(id) {
    var s = strumentoDi(id);
    if (!s) return page404();
    var h = '<p class="crumbs"><a href="#/strumenti">Strumenti</a> › ' + esc(s.titolo) + "</p><h1>" + esc(s.titolo) + '</h1><p><span class="badge">' + esc(s.durata) + '</span></p><p class="lead">' + esc(s.scopo) + "</p>" +
      notaHtml(notaProf("strumenti", s.id)) + parFmt(s.intro) + '<div id="str"></div>' + notaAppunti() + fonteHtml(s.fonte);
    var init = { riformula: riformulaInit, emozioni: emozioniInit, pesi: pesiInit, ruoli: ruoliInit, quaderno: quadernoInit }[s.tipo];
    return { title: s.titolo + " · " + NOME, html: h, after: function () { init(s, document.getElementById("str")); } };
  }
  // Scala a quattro livelli per ogni voce: [id, etichetta, descrizione facoltativa].
  function scalaHtml(pref, voci, etich, val) {
    return voci.map(function (v) {
      return '<fieldset class="scala"><legend>' + esc(v[1]) + (v[2] ? ' <span class="hint">' + esc(v[2]) + "</span>" : "") + '</legend><div class="scala-opz">' + etich.map(function (e, k) {
        return '<label><input type="radio" name="' + pref + v[0] + '" value="' + k + '"' + (val && val[v[0]] === k ? " checked" : "") + "><span>" + esc(e) + "</span></label>";
      }).join("") + "</div></fieldset>";
    }).join("");
  }
  function scalaLeggi(el, pref, voci) {
    var o = {};
    voci.forEach(function (v) { var r = el.querySelector('input[name="' + pref + v[0] + '"]:checked'); if (r) o[v[0]] = +r.value; });
    return o;
  }
  function chipsHtml(id, titolo, hint, voci) {
    return '<fieldset class="gruppo" id="' + id + '"><legend>' + esc(titolo) + ' <span class="hint">' + esc(hint) + '</span></legend><div class="chips">' +
      voci.map(function (v) { return '<button class="chip" type="button" aria-pressed="false">' + esc(v) + "</button>"; }).join("") + "</div></fieldset>";
  }
  function chipsInit(el) {
    el.addEventListener("click", function (e) {
      var b = e.target.closest(".chip");
      if (b) b.setAttribute("aria-pressed", b.getAttribute("aria-pressed") !== "true");
    });
  }
  function chipsVal(el) { return [].map.call(el.querySelectorAll('.chip[aria-pressed="true"]'), function (b) { return b.textContent; }); }
  // Elenco di voci salvate (la più recente in alto), con «Elimina»: ridisegna solo l'elenco.
  function elencoSalvati(box, chiave, titolo, riga) {
    function disegna() {
      var a = APP[chiave];
      box.innerHTML = a.length ? "<h2>" + esc(titolo) + "</h2>" + a.map(function (x, i) {
        return '<div class="card voce">' + riga(x, i) + '<div class="btn-row no-print"><button class="btn ghost piccolo" type="button" data-del="' + i + '">Elimina</button></div></div>';
      }).join("") : "";
    }
    box.addEventListener("click", function (e) {
      var b = e.target.closest("button[data-del]");
      if (!b) return;
      APP[chiave].splice(+b.dataset.del, 1); salvaApp(); disegna();
    });
    disegna();
    return disegna;
  }

  function riformulaInit(s, box) {
    box.innerHTML = '<form class="card" id="rf" autocomplete="off">' + area("rfDa", "La frase come ti viene", "Detta, o soltanto pensata.", "", 500) +
      '<div class="btn-row"><button class="btn secondary" type="button" id="rfCerca">Cerca le parole che giudicano</button></div><div id="rfEsito" aria-live="polite"></div>' +
      "<h3>Tre domande per riscriverla</h3><ol>" + liFmt(s.domande) + "</ol>" + area("rfA", "La frase riformulata", "Con le tue parole.", "", 500) +
      '<div class="btn-row"><button class="btn" type="submit">Salva negli appunti</button><button class="btn secondary" type="button" id="rfCopia">Copia</button></div><p class="hint" id="rfHint" role="status"></p></form>' +
      '<details class="approf"><summary><span class="lab">Vocabolario</span>Parole che giudicano e parole che descrivono</summary><ul>' + s.coppie.map(function (c) {
        return "<li>" + esc(c[1]) + " → <strong>" + esc(c[2]) + "</strong>. " + esc(c[3]) + (c[4] ? ' <span class="badge">dal libro</span>' : "") + "</li>";
      }).join("") + '</ul></details><div id="rfLista"></div>';
    var f = document.getElementById("rf"), da = document.getElementById("rfDa"), a = document.getElementById("rfA"), hint = document.getElementById("rfHint"), esito = document.getElementById("rfEsito");
    var ridisegna = elencoSalvati(document.getElementById("rfLista"), "riformula", "Frasi salvate", function (x) {
      return (x.da ? '<p class="hint">Prima: ' + esc(x.da) + "</p>" : "") + "<p><strong>" + esc(x.a) + '</strong></p><p class="hint">' + dataIt(x.d) + "</p>";
    });
    document.getElementById("rfCerca").onclick = function () {
      var n = norm(da.value);
      if (!n.trim()) { esito.innerHTML = '<p class="hint">Scrivi prima la frase.</p>'; return; }
      var trovate = s.coppie.filter(function (c) { return new RegExp(c[0]).test(n); });
      esito.innerHTML = '<div class="callout">' + (trovate.length ? "<p><strong>Parole che di solito giudicano</strong></p><ul>" + trovate.map(function (c) {
        return "<li>" + esc(c[1]) + ": prova con <strong>" + esc(c[2]) + "</strong>. " + esc(c[3]) + "</li>";
      }).join("") + "</ul>" : "<p>Nessuna parola dell'elenco. Non vuol dire che la frase vada bene così: prova comunque con le tre domande qui sotto.</p>") + "</div>";
    };
    f.onsubmit = function (e) {
      e.preventDefault();
      var v = a.value.trim();
      if (!v) { hint.textContent = "Scrivi la frase riformulata."; return; }
      APP.riformula.unshift({ d: oggi(), da: da.value.trim(), a: v });
      APP.riformula.length = Math.min(APP.riformula.length, 100);
      if (!salvaApp()) return;
      f.reset(); esito.innerHTML = ""; hint.textContent = "Salvata negli appunti."; ridisegna();
    };
    document.getElementById("rfCopia").onclick = function () { if (a.value.trim()) copia(a.value.trim(), this); };
  }

  function emoTesto(e) {
    var p = [];
    if (e.fatto) p.push("Che cosa è successo: " + e.fatto);
    if (e.pensiero) p.push("Che cosa ho pensato: " + e.pensiero);
    if (e.mostrata.length) p.push("Che cosa si è visto di me: " + e.mostrata.join(", "));
    if (e.primaria.length) p.push("Che cosa c'era un attimo prima: " + e.primaria.join(", "));
    if (e.bisogno) p.push("Di che cosa avevo bisogno: " + e.bisogno);
    return p.join("\n");
  }
  function emozioniInit(s, box) {
    box.innerHTML = '<form class="card" id="ef" autocomplete="off">' +
      area("eFatto", "1. Che cosa è successo", "Il fatto, senza aggettivi.", "", 500) +
      area("ePens", "2. Che cosa ho pensato", "La lettura che ne ho dato sul momento.", "", 500) +
      chipsHtml("eMos", "3. Che cosa si è visto di me", "Anche più di una.", s.mostrate) +
      chipsHtml("ePri", "4. Che cosa c'era un attimo prima", "L'emozione sotto quella che si è vista.", s.primarie) +
      area("eBis", "5. Di che cosa avevo bisogno", "Può essere la prima cosa da dire la prossima volta.", "", 500) +
      '<div class="btn-row"><button class="btn" type="submit">Salva negli appunti</button><button class="btn ghost" type="reset">Cancella</button></div><p class="hint" id="eHint" role="status"></p></form><div id="eLista"></div>';
    var f = document.getElementById("ef"), mos = document.getElementById("eMos"), pri = document.getElementById("ePri"), hint = document.getElementById("eHint");
    chipsInit(mos); chipsInit(pri);
    function spegni() { [].forEach.call(f.querySelectorAll(".chip"), function (b) { b.setAttribute("aria-pressed", "false"); }); }
    var ridisegna = elencoSalvati(document.getElementById("eLista"), "emozioni", "Episodi salvati", function (x) {
      return '<p class="hint">' + dataIt(x.d) + '</p><p class="righe">' + esc(emoTesto(x)) + "</p>";
    });
    f.onreset = function () { spegni(); hint.textContent = ""; };
    f.onsubmit = function (e) {
      e.preventDefault();
      var x = { d: oggi(), fatto: document.getElementById("eFatto").value.trim(), pensiero: document.getElementById("ePens").value.trim(), mostrata: chipsVal(mos), primaria: chipsVal(pri), bisogno: document.getElementById("eBis").value.trim() };
      if (!emoTesto(x)) { hint.textContent = "Compila almeno un punto."; return; }
      APP.emozioni.unshift(x);
      APP.emozioni.length = Math.min(APP.emozioni.length, 100);
      if (!salvaApp()) return;
      f.reset(); hint.textContent = "Salvato negli appunti."; ridisegna();
    };
  }

  function pesiVoci(s) { var a = []; s.gruppi.forEach(function (g) { [].push.apply(a, g.voci); }); return a; }
  function pesiInit(s, box) {
    var tutte = pesiVoci(s);
    function disegna(msg) {
      var a = APP.pesi, ult = a[a.length - 1], prima = a[0];
      var h = '<form class="card" id="pf" autocomplete="off">' + s.gruppi.map(function (g) { return "<h3>" + esc(g.titolo) + "</h3>" + scalaHtml("p_", g.voci, s.scala, null); }).join("") +
        area("pNota", "Un peso che potrei alleggerire o dividere", "Uno solo, il più alla portata.", "", 600) + area("pCon", "Con chi potrei parlarne", "", "", 300) +
        '<div class="btn-row"><button class="btn" type="submit">Salva la fotografia di oggi</button></div><p class="hint" id="pHint" role="status">' + esc(msg || "") + "</p></form>";
      if (ult) {
        var forti = tutte.filter(function (v) { return ult.v[v[0]] >= 2; });
        h += '<h2 id="pFoto" tabindex="-1">La fotografia del ' + dataIt(ult.d) + '</h2><div class="card">' +
          (forti.length ? "<p>I pesi che senti di più:</p><ul>" + forti.map(function (v) { return "<li>" + esc(v[1]) + " – <strong>" + esc(s.scala[ult.v[v[0]]]) + "</strong></li>"; }).join("") + "</ul>"
            : "<p>Nessuna voce segnata come «Molto» o «Moltissimo».</p>") +
          (ult.nota ? "<p><strong>Potrei alleggerire o dividere:</strong> " + esc(ult.nota) + "</p>" : "") + (ult.con ? "<p><strong>Ne parlo con:</strong> " + esc(ult.con) + "</p>" : "") +
          '<p class="hint">Se i pesi segnati sono molti, è un buon motivo per non portarli da soli: parlane con il medico di base, con uno psicologo o con chi segue la persona cara. Se ti serve aiuto adesso, vai a <a href="#/emergenze">Emergenze</a>.</p></div>';
      }
      if (a.length > 1) {
        var camb = tutte.filter(function (v) { return prima.v[v[0]] !== undefined && ult.v[v[0]] !== undefined && prima.v[v[0]] !== ult.v[v[0]]; });
        h += "<h2>Dalla prima fotografia all'ultima</h2><div class=\"card\"><p class=\"hint\">" + dataIt(prima.d) + " → " + dataIt(ult.d) + "</p>" +
          (camb.length ? "<ul>" + camb.map(function (v) { return "<li>" + esc(v[1]) + ": " + esc(s.scala[prima.v[v[0]]]) + " → <strong>" + esc(s.scala[ult.v[v[0]]]) + "</strong></li>"; }).join("") + "</ul>"
            : "<p>Nessuna voce è cambiata.</p>") +
          '<p class="hint">Un peso che cresce non è un fallimento: è un\'informazione da portare a chi può aiutarti.</p></div>';
      }
      if (a.length) h += '<h2>Fotografie salvate</h2><div class="card"><ul class="piatta">' + a.map(function (x, i) {
        return "<li><span>" + dataIt(x.d) + '</span> <button class="btn ghost piccolo no-print" type="button" data-del="' + i + '">Elimina</button></li>';
      }).join("") + "</ul></div>";
      box.innerHTML = h;
    }
    box.addEventListener("submit", function (e) {
      e.preventDefault();
      var v = scalaLeggi(box, "p_", tutte);
      if (!Object.keys(v).length) { document.getElementById("pHint").textContent = "Segna almeno una voce."; return; }
      var x = { d: oggi(), v: v, nota: document.getElementById("pNota").value.trim(), con: document.getElementById("pCon").value.trim() };
      APP.pesi = APP.pesi.filter(function (y) { return y.d !== x.d; });
      APP.pesi.push(x);
      while (APP.pesi.length > 24) APP.pesi.splice(1, 1); // la prima fotografia si tiene sempre
      if (!salvaApp()) return;
      disegna("Fotografia salvata.");
      var foto = document.getElementById("pFoto");
      if (foto) { foto.scrollIntoView(); foto.focus({ preventScroll: true }); }
    });
    box.addEventListener("click", function (e) {
      var b = e.target.closest("button[data-del]");
      if (!b) return;
      APP.pesi.splice(+b.dataset.del, 1); salvaApp(); disegna("");
    });
    disegna("");
  }

  function ruoliSpesso(s, r) { return s.voci.filter(function (v) { return r && r.v[v[0]] >= 2; }).map(function (v) { return v[1]; }); }
  function ruoliInit(s, box) {
    function disegna(msg) {
      var r = APP.ruoli, spesso = ruoliSpesso(s, r);
      box.innerHTML = '<form class="card" id="uf" autocomplete="off"><p><strong>Quanto spesso ti trovi in questo ruolo?</strong></p>' + scalaHtml("r_", s.voci, s.scala, r && r.v) +
        '<div class="callout"><p>' + esc(s.nota) + "</p></div>" +
        area("rPesa", "Il ruolo che mi pesa di più, e che cosa mi costa", "", r && r.pesa, 600) +
        area("rPosa", "Che cosa potrei posare o dividere, e con chi", "Con chi cura, con altri familiari, con la persona cara stessa.", r && r.posa, 600) +
        '<div class="btn-row"><button class="btn" type="submit">Salva negli appunti</button>' + (r ? '<button class="btn ghost" type="button" id="rVia">Cancella</button>' : "") + "</div>" +
        '<p class="hint" id="rHint" role="status">' + esc(msg || "") + "</p>" +
        (r ? '<div class="output" id="rEsito">Salvato il ' + dataIt(r.d) + ". " + (spesso.length ? "Ruoli in cui oggi ti trovi spesso: " + esc(spesso.join(", ")) + "." : "Nessun ruolo segnato come «Spesso» o «Quasi sempre».") + "</div>" : "") + "</form>";
    }
    box.addEventListener("submit", function (e) {
      e.preventDefault();
      var v = scalaLeggi(box, "r_", s.voci);
      if (!Object.keys(v).length) { document.getElementById("rHint").textContent = "Segna almeno un ruolo."; return; }
      APP.ruoli = { d: oggi(), v: v, pesa: document.getElementById("rPesa").value.trim(), posa: document.getElementById("rPosa").value.trim() };
      if (salvaApp()) disegna("Salvato.");
    });
    box.addEventListener("click", function (e) {
      if (!e.target.closest("#rVia")) return;
      APP.ruoli = null; salvaApp(); disegna("Cancellato.");
    });
    disegna("");
  }

  function chiEtichetta(s, id) { var r = ""; s.chi.forEach(function (c) { if (c[0] === id) r = c[1]; }); return r; }
  function quadernoInit(s, box) {
    box.innerHTML = '<form class="card" id="qf" autocomplete="off">' + area("qT", "Che cosa ho notato", "Un fatto, anche piccolo.", "", 600) +
      '<fieldset class="scala"><legend>Dove</legend><div class="scala-opz tre">' + s.chi.map(function (c, i) {
        return '<label><input type="radio" name="qChi" value="' + c[0] + '"' + (i === 0 ? " checked" : "") + "><span>" + esc(c[1]) + "</span></label>";
      }).join("") + "</div></fieldset>" +
      '<label class="check"><input type="checkbox" id="qDetto"> <span>L\'ho già detto a voce</span></label>' +
      '<div class="btn-row"><button class="btn" type="submit">Aggiungi al quaderno</button></div><p class="hint" id="qHint" role="status"></p></form><div id="qLista"></div>';
    var f = document.getElementById("qf"), lista = document.getElementById("qLista"), hint = document.getElementById("qHint");
    var ridisegna = elencoSalvati(lista, "quaderno", "Il quaderno", function (x, i) {
      return '<p class="hint">' + dataIt(x.d) + " · " + esc(chiEtichetta(s, x.chi)) + "</p><p>" + esc(x.t) + "</p>" +
        '<label class="check"><input type="checkbox" data-detto="' + i + '"' + (x.detto ? " checked" : "") + "> <span>Detto a voce</span></label>";
    });
    lista.addEventListener("change", function (e) {
      var c = e.target.closest("input[data-detto]");
      if (!c) return;
      APP.quaderno[+c.dataset.detto].detto = c.checked; salvaApp();
    });
    f.onsubmit = function (e) {
      e.preventDefault();
      var v = document.getElementById("qT").value.trim();
      if (!v) { hint.textContent = "Scrivi che cosa hai notato."; return; }
      APP.quaderno.unshift({ d: oggi(), t: v, chi: f.qChi.value, detto: document.getElementById("qDetto").checked });
      APP.quaderno.length = Math.min(APP.quaderno.length, 400);
      if (!salvaApp()) return;
      f.reset(); hint.textContent = "Aggiunto."; ridisegna();
    };
  }

  /* I miei appunti: rilettura, esportazione, cancellazione */
  function appuntiSezioni() {
    var S = [], r = [];
    PE.forEach(function (t) {
      var s = APP.tappe[t.n];
      if (!s) return;
      r.push("Tappa " + t.n + ". " + t.titolo + (s.fatta ? " (fatta il " + dataIt(s.fatta) + ")" : "") +
        (s.cond.trim() ? "\nCome sto: " + s.cond.trim() : "") + (s.rip.trim() ? "\nRipresa del compito: " + s.rip.trim() : ""));
    });
    if (r.length) S.push({ t: "Percorso", r: r });
    var sq = strumentoDi("quaderno"), sp = strumentoDi("pesi"), sr = strumentoDi("ruoli");
    if (APP.quaderno.length) S.push({ t: "Quaderno dei piccoli cambiamenti", r: APP.quaderno.map(function (x) {
      return dataIt(x.d) + " · " + chiEtichetta(sq, x.chi) + (x.detto ? " · detto a voce" : "") + "\n" + x.t;
    }) });
    if (APP.riformula.length) S.push({ t: "Frasi riformulate", r: APP.riformula.map(function (x) {
      return dataIt(x.d) + (x.da ? "\nPrima: " + x.da : "") + "\nRiformulata: " + x.a;
    }) });
    if (APP.emozioni.length) S.push({ t: "L'emozione che viene prima", r: APP.emozioni.map(function (x) { return dataIt(x.d) + "\n" + emoTesto(x); }) });
    if (APP.pesi.length) S.push({ t: "I pesi che porto", r: APP.pesi.map(function (x) {
      return "Fotografia del " + dataIt(x.d) + "\n" + pesiVoci(sp).filter(function (v) { return x.v[v[0]] !== undefined; }).map(function (v) { return "- " + v[1] + ": " + sp.scala[x.v[v[0]]]; }).join("\n") +
        (x.nota ? "\nPotrei alleggerire o dividere: " + x.nota : "") + (x.con ? "\nNe parlo con: " + x.con : "");
    }) });
    if (APP.ruoli) S.push({ t: "I ruoli che ricopro", r: [dataIt(APP.ruoli.d) + "\n" + sr.voci.filter(function (v) { return APP.ruoli.v[v[0]] !== undefined; }).map(function (v) { return "- " + v[1] + ": " + sr.scala[APP.ruoli.v[v[0]]]; }).join("\n") +
      (APP.ruoli.pesa ? "\nMi pesa di più: " + APP.ruoli.pesa : "") + (APP.ruoli.posa ? "\nPotrei posare o dividere: " + APP.ruoli.posa : "")] });
    return S;
  }
  function appuntiTesto(S) {
    return "Accanto a te – I miei appunti\nEsportati il " + dataIt(oggi()) + "\n\n" + S.map(function (s) { return s.t.toUpperCase() + "\n\n" + s.r.join("\n\n"); }).join("\n\n\n") + "\n";
  }
  function scarica(nome, testo) {
    try {
      var u = URL.createObjectURL(new Blob(["﻿" + testo.replace(/\n/g, "\r\n")], { type: "text/plain;charset=utf-8" })), a = document.createElement("a");
      a.href = u; a.download = nome; a.style.display = "none";
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      setTimeout(function () { URL.revokeObjectURL(u); }, 2000);
      return true;
    } catch (e) { return false; }
  }
  function pageAppunti() {
    var S = appuntiSezioni();
    var h = '<h1>I miei appunti</h1><p class="lead">Tutto ciò che hai scritto nel percorso e negli strumenti.</p>' +
      '<div class="card no-print"><ul><li>Gli appunti stanno solo nella memoria di questo dispositivo e di questo browser: non vengono inviati a nessun server.</li>' +
      "<li>Chi usa questo dispositivo può leggerli. Se è condiviso, salvali altrove e poi cancellali da qui.</li>" +
      "<li>«Esci subito» lascia il sito ma non li cancella: per toglierli usa «Cancella tutti gli appunti».</li>" +
      "<li>Se cancelli i dati del browser o rimuovi l'app, gli appunti vanno persi: per conservarli salvali in un file o stampali.</li>" +
      '<li>Il piano di sicurezza della pagina <a href="#/emergenze">Emergenze</a> non è qui: resta solo finché la scheda è aperta.</li></ul>' +
      (S.length ? '<div class="btn-row"><button class="btn" type="button" id="aFile">Salva in un file</button><button class="btn secondary" type="button" id="aCopia">Copia</button>' +
        '<button class="btn secondary" type="button" id="aStampa">Stampa</button><button class="btn ghost" type="button" id="aVia">Cancella tutti gli appunti</button></div><p class="hint" id="aHint" role="status"></p>' : "") + "</div>";
    if (!S.length) h += '<p>Non hai ancora scritto nulla. Puoi cominciare dal <a href="#/percorso">Percorso</a> o dagli <a href="#/strumenti">Strumenti</a>.</p>';
    S.forEach(function (s) {
      h += "<h2>" + esc(s.t) + "</h2>" + s.r.map(function (x) { return '<div class="card"><p class="righe">' + esc(x) + "</p></div>"; }).join("");
    });
    return { title: "I miei appunti · " + NOME, html: h, after: function () {
      if (!S.length) return;
      var hint = document.getElementById("aHint");
      document.getElementById("aFile").onclick = function () {
        hint.textContent = scarica("accanto-a-te-appunti-" + oggi() + ".txt", appuntiTesto(S)) ? "File creato: lo trovi fra i download." : "Non è stato possibile creare il file: usa «Copia» o «Stampa».";
      };
      document.getElementById("aCopia").onclick = function () { copia(appuntiTesto(S), this); };
      document.getElementById("aStampa").onclick = function () { window.print(); };
      document.getElementById("aVia").onclick = function () {
        if (!window.confirm("Cancellare da questo dispositivo tutti gli appunti del percorso e degli strumenti? Non si possono recuperare.")) return;
        try { localStorage.removeItem(K_APP); } catch (e) {}
        APP = appSicuri(null); route(); live.textContent = "Appunti cancellati.";
      };
    } };
  }

  /* Glossario, fonti, altro */
  function pageGlossario() {
    var h = '<h1>Glossario</h1><p class="lead">Parole usate nella guida.</p><dl class="gloss">';
    GL.forEach(function (g) { h += "<dt>" + esc(g[0]) + "</dt><dd>" + esc(g[1]) + "</dd>"; });
    return { title: "Glossario · " + NOME, html: h + "</dl>" };
  }
  function pageFonti() {
    var h = "<h1>Fonti e note</h1>";
    window.FONTI.forEach(function (g) {
      h += "<h2>" + esc(g.gruppo) + "</h2><div class=\"card\"><ul>" + g.voci.map(function (v) { return "<li>" + esc(v) + "</li>"; }).join("") + "</ul></div>";
    });
    h += "<h2>Note</h2><div class=\"card\"><ul>" +
      "<li><strong>Nessuna diagnosi:</strong> la guida descrive il disturbo in termini generali; la diagnosi spetta a un professionista.</li>" +
      "<li><strong>Privacy:</strong> l'app non usa account, cookie di tracciamento né analitiche. Ciò che scrivi negli esercizi non viene conservato: sparisce quando cambi pagina. Il piano di sicurezza resta nella memoria della scheda finché non la chiudi o non premi «Cancella tutto». Ciò che scrivi nel percorso e negli strumenti resta invece nella memoria di questo dispositivo, finché non lo cancelli da <a href=\"#/appunti\">I miei appunti</a>, dove puoi anche salvarlo in un file o stamparlo; non viene mai inviato. Anche la scelta del ruolo, se la fai, resta su questo dispositivo: la togli in <a href=\"#/ruolo\">Il tuo ruolo</a> con «Nessuna scelta». Solo se importi un profilo «Su misura», quello resta nella memoria di questo dispositivo finché non lo rimuovi; non viene mai inviato.</li>" +
      "<li><strong>Fonti:</strong> sotto ogni capitolo, frase, scenario ed esercizio è indicato il testo da cui viene l'idea. I contenuti sono riformulati, non copiati.</li>" +
      "<li><strong>Linguaggio:</strong> i testi usano l'espressione «persona cara» o forme neutre, perché il disturbo riguarda persone di ogni genere ed età.</li>" +
      "<li><strong>Aggiornamento:</strong> le conoscenze cliniche evolvono; verifica sempre con i professionisti che seguono la tua situazione.</li></ul></div>";
    return { title: "Fonti · " + NOME, html: h };
  }
  /* Su misura: importazione e lettura del profilo privato */
  function listaHtml(a) { return a.length ? "<ul>" + a.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" : ""; }
  function personeHtml(a) {
    return a.map(function (c) {
      var tel = c.num.replace(/[^0-9+]/g, "");
      return '<div class="num-card"><div><strong>' + esc(c.nome) + "</strong>" + (c.nota ? '<br><span class="hint">' + esc(c.nota) + "</span>" : "") + "</div>" +
        (tel ? '<div><a class="tel" href="tel:' + esc(tel) + '">' + esc(c.num) + "</a></div>" : "") + "</div>";
    }).join("");
  }
  function importaHtml() {
    return '<div class="btn-row"><label class="btn secondary" for="profFile">Importa da file</label><input id="profFile" class="live" type="file" accept=".json,.txt,application/json,text/plain">' +
      '<button class="btn secondary" type="button" id="profIncolla">Incolla il testo</button>' +
      (PROF ? '<button class="btn ghost" type="button" id="profRimuovi">Rimuovi il profilo</button>' : "") + "</div>" +
      '<div id="profBox" hidden><div class="field"><label for="profTesto">Testo del profilo</label><textarea id="profTesto" rows="5" autocomplete="off" spellcheck="false"></textarea></div>' +
      '<button class="btn" type="button" id="profConferma">Importa</button></div>' +
      '<p class="hint" id="profHint" role="status" aria-live="polite"></p>';
  }
  function pageMisura() {
    var h = "<h1>Su misura</h1>";
    if (!PROF) {
      h += '<p class="lead">Se chi segue la persona che ti è cara ti ha consegnato un file di profilo, puoi importarlo qui.</p>' +
        '<div class="card"><ul><li>Il profilo viene preparato con il consenso della persona e contiene solo ciò che lei ha scelto di condividere.</li>' +
        "<li>Resta nella memoria di questo dispositivo: non viene inviato a nessun server e non fa parte del sito.</li>" +
        "<li>Si toglie in qualsiasi momento con «Rimuovi il profilo». Se il dispositivo è condiviso, valuta se importarlo.</li></ul>" + importaHtml() + "</div>";
    } else {
      h += '<p class="lead">Queste pagine sono solo tue e restano su questo dispositivo. Descrivono come funzionano le difficoltà e le risorse della persona che ti è cara, e che cosa aiuta.</p>' +
        (PROF.intro ? '<div class="card">' + parHtml(PROF.intro) + "</div>" : "");
      if (PROF.aree.length) {
        h += "<h2>Schede</h2>" + PROF.aree.map(function (a) {
          return '<details class="card scheda"><summary>' + esc(a.titolo) + "</summary>" +
            (a.vedi ? "<h3>Che cosa vedi da fuori</h3>" + parHtml(a.vedi) : "") +
            (a.dentro ? "<h3>Che cosa succede dentro</h3>" + parHtml(a.dentro) : "") +
            (a.aiuta.length ? "<h3>Che cosa aiuta</h3>" + listaHtml(a.aiuta) : "") +
            (a.evita.length ? "<h3>Che cosa è meglio evitare</h3>" + listaHtml(a.evita) : "") + "</details>";
        }).join("");
      }
      if (PROF.risorse.length) h += "<h2>Risorse da notare e nominare</h2><div class=\"card\"><ul>" + PROF.risorse.map(function (r) {
        return "<li><strong>" + esc(r.titolo) + ".</strong> " + esc(r.testo) + "</li>";
      }).join("") + "</ul></div>";
      if (PROF.accordi.length) h += "<h2>Accordi fra voi</h2><div class=\"card\">" + listaHtml(PROF.accordi) + "</div>";
      var S = PROF.sicurezza;
      if (S) {
        h += "<h2>" + esc(S.titolo) + '</h2><div class="card">' + (S.intro ? parHtml(S.intro) : "") +
          (S.segnali.length ? "<h3>Segnali che puoi vedere</h3>" + listaHtml(S.segnali) : "") +
          (S.passi.length ? "<h3>Che cosa fare, in ordine</h3><ol>" + S.passi.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ol>" : "") +
          (S.evita.length ? "<h3>Che cosa evitare</h3>" + listaHtml(S.evita) : "") +
          (S.persone.length ? "<h3>Persone</h3>" + personeHtml(S.persone) : "") +
          (S.servizi.length ? "<h3>Professionisti e servizi</h3>" + personeHtml(S.servizi) : "") +
          (S.chiusura ? parHtml(S.chiusura) : "") +
          '<p>Se c\'è un pericolo immediato: <a href="tel:112"><strong>112</strong></a>. Vedi <a href="#/emergenze">Emergenze</a>.</p></div>';
      }
      h += '<h2>Gestione del profilo</h2><div class="card"><p>Profilo importato' + (PROF.creato ? " (" + esc(PROF.creato) + ")" : "") +
        ". Trovi le note «Su misura» anche dentro alcuni capitoli, frasi, scenari ed esercizi. «Esci subito» lascia il sito ma non cancella il profilo: per toglierlo usa «Rimuovi il profilo».</p>" + importaHtml() + "</div>";
    }
    return { title: "Su misura · " + NOME, html: h, after: function () {
      var hint = document.getElementById("profHint");
      function importa(testo) {
        var raw = null;
        try { raw = JSON.parse(String(testo)); } catch (e) { hint.textContent = "Questo testo non è un profilo di Accanto a te."; return; }
        var P = profiloSicuro(raw);
        if (!P) { hint.textContent = "Questo non sembra un profilo di Accanto a te (formato non riconosciuto)."; return; }
        try { localStorage.setItem(K_PROF, JSON.stringify(P)); } catch (e) { hint.textContent = "Non è stato possibile salvarlo su questo dispositivo."; return; }
        PROF = P; route(); live.textContent = "Profilo importato.";
      }
      document.getElementById("profIncolla").onclick = function () {
        var b = document.getElementById("profBox"); b.hidden = !b.hidden;
        if (!b.hidden) document.getElementById("profTesto").focus();
      };
      document.getElementById("profConferma").onclick = function () { importa(document.getElementById("profTesto").value); };
      document.getElementById("profFile").onchange = function () {
        var file = this.files && this.files[0]; this.value = "";
        if (!file) return;
        if (file.size > 300000) { hint.textContent = "Il file è troppo grande per essere un profilo."; return; }
        var r = new FileReader();
        r.onload = function () { importa(r.result); };
        r.onerror = function () { hint.textContent = "Non è stato possibile leggere il file."; };
        r.readAsText(file);
      };
      var rim = document.getElementById("profRimuovi");
      if (rim) rim.onclick = function () {
        if (!window.confirm("Rimuovere il profilo da questo dispositivo?")) return;
        try { localStorage.removeItem(K_PROF); } catch (e) {}
        PROF = null; route(); live.textContent = "Profilo rimosso.";
      };
    } };
  }

  /* Il tuo ruolo: scelta e scheda */
  function pageRuolo(id) {
    var r = id ? ruoloDi(id) : RUOLO;
    if (id && !r) return page404();
    var h = '<h1>Il tuo ruolo</h1><p class="lead">' + esc(RIN.lead) + "</p>" + parFmt(RIN.p) +
      '<div class="card"><p><strong>Chi sei per questa persona?</strong></p>' + ruoloScelta(true) +
      '<p class="hint">La scelta resta solo su questo dispositivo e non viene inviata a nessuno. «Esci subito» non la cancella: per toglierla scegli «Nessuna scelta».</p></div>';
    if (r) {
      h += '<article class="chap"><h2 id="ruoloT" tabindex="-1">' + esc(r.titolo) + "</h2>" +
        (r !== RUOLO ? '<div class="callout avviso"><p>Stai leggendo la scheda «' + esc(r.titolo) + "»" + (RUOLO ? ", ma il ruolo scelto è «" + esc(RUOLO.titolo) + "»" : ", ma non hai scelto un ruolo") +
          '.</p><div class="btn-row ruoli"><button class="btn secondary" type="button" data-ruolo="' + r.id + '">Scegli questo ruolo</button></div></div>' : "") +
        "<p>" + fmt(r.lead) + "</p><h3>Che cosa pesa di solito</h3><ul>" + liFmt(r.pesi) + "</ul><h3>A che cosa fare attenzione</h3><ul>" + liFmt(r.attenzione) + "</ul>" +
        fonteHtml(r.fonte) + "</article>" +
        '<h2 class="parte">Da dove partire nella guida</h2><p class="hint">Un ordine di lettura proposto dall\'app.</p><ol class="letture">' + r.leggi.map(function (cid) {
          var c = G[findChap(cid)];
          return c ? '<li><a href="#/guida/' + c.id + '">' + esc(c.titolo) + '</a> <span class="hint">' + c.minuti + " min · " + esc(c.sommario) + "</span></li>" : "";
        }).join("") + "</ol>" +
        '<h2 class="parte">Scenari più vicini alla tua situazione</h2><div class="grid">' + r.scenari.map(function (sid) {
          var s = scenarioDi(sid);
          return s ? tile("#/scenari/" + s.id, s.titolo, s.contesto.slice(0, 90) + "…", "Scenario") : "";
        }).join("") + "</div>";
      var st = strumentoDi(r.strumento.id);
      if (st) h += '<h2 class="parte">Uno strumento per cominciare</h2><div class="grid">' + tile("#/strumenti/" + st.id, st.titolo, r.strumento.perche, st.durata) + "</div>";
      h += '<h2 class="parte">Nel percorso</h2><p>In ognuna delle ' + PE.length + ' tappe del <a href="#/percorso">Percorso</a> trovi un esempio pensato per questo ruolo' + (r !== RUOLO ? ", se lo scegli" : "") + ".</p>";
    }
    h += '<details class="approf dopo"><summary><span class="lab">Da sapere</span>Che cosa viene dalle fonti e che cosa no</summary>' + parFmt(RIN.nota) + "</details>" + fonteHtml(RIN.fonte);
    return { title: (r ? r.titolo + " · " : "") + "Il tuo ruolo · " + NOME, html: h, after: function () {
      [].forEach.call(main.querySelectorAll(".ruoli"), function (el) { el.addEventListener("click", ruoloClick); });
    } };
  }

  function pageAltro() {
    return { title: "Altro · " + NOME, html: "<h1>Altro</h1><div class=\"grid\">" +
      tile("#/glossario", "Glossario", "Le parole della guida, spiegate.", GL.length + " voci") +
      tile("#/fonti", "Fonti e note", "Da dove vengono i contenuti, privacy, limiti.", "Informazioni") +
      tile("#/cerca", "Cerca", "Trova un argomento in tutta la guida.", "Ricerca") +
      tile("#/ruolo", "Il tuo ruolo", "Genitore, partner, fratello o sorella, amico: ordine ed esempi più vicini a te.", RUOLO ? RUOLO.titolo : "Nessuna scelta") +
      tile("#/appunti", "I miei appunti", "Rileggi, esporta o cancella ciò che hai scritto nel percorso e negli strumenti.", appuntiSezioni().length ? "Ci sono appunti" : "Nessun appunto") +
      tile("#/misura", "Su misura", "Importa o consulta il profilo ricevuto da chi vi segue.", PROF ? "Profilo importato" : "Nessun profilo") + "</div>" + installCard(), after: refreshInstall };
  }

  /* Ricerca */
  // Toglie la sintassi **grassetto** e {{#/link|testo}} dai brani mostrati nei risultati.
  function piano(t) { return String(t).replace(/\{\{#\/[^|}]*\|(.+?)\}\}/g, "$1").replace(/\*\*/g, ""); }
  // Punteggio e brano di testo per un elemento: null se non contiene tutte le parole.
  function trova(toks, titolo, corpo) {
    var nt = norm(titolo), nb = norm(corpo), tutto = nt + " " + nb;
    for (var k = 0; k < toks.length; k++) if (tutto.indexOf(toks[k]) < 0) return null;
    var punti = 0, pos = -1;
    toks.forEach(function (t) {
      if (nt.indexOf(t) >= 0) punti += 5;
      var i = nb.indexOf(t), n = 0;
      if (i >= 0 && (pos < 0 || i < pos)) pos = i;
      while (i >= 0 && n < 10) { n++; i = nb.indexOf(t, i + t.length); }
      punti += n;
    });
    var brano = "";
    if (pos >= 0 && nb.length === corpo.length) {
      var a = Math.max(0, pos - 50), b = Math.min(corpo.length, pos + 110);
      brano = (a > 0 ? "…" : "") + corpo.slice(a, b).trim() + (b < corpo.length ? "…" : "");
    }
    return { punti: punti, brano: brano };
  }
  function pageCerca(q) {
    var h = "<h1>Cerca</h1>" + searchBox(q);
    var toks = norm(q).split(/\s+/).filter(function (t) { return t.length > 1; });
    if (!toks.length) return { title: "Cerca · " + NOME, html: h + "<p>Scrivi una parola, per esempio «crisi», «limiti» o «vergogna».</p>" };
    var res = [];
    function aggiungi(href, t, s, titoloCerca, corpo) {
      var r = trova(toks, titoloCerca, piano(corpo));
      if (r) res.push({ href: href, t: t, s: s, punti: r.punti, brano: r.brano, ord: res.length });
    }
    G.forEach(function (c) {
      c.sezioni.forEach(function (s, k) {
        var corpo = (s.p || []).join(" ") + " " + (s.l || []).join(" ") + " " + (s.box ? s.box.testo : "");
        aggiungi("#/guida/" + c.id + "?s=" + k + (s.approf ? "&a=1" : ""), s.t, "Guida · " + c.titolo, c.titolo + " " + s.t, corpo + approfTesto(s.approf));
      });
    });
    GL.forEach(function (g) { aggiungi("#/glossario", g[0], "Glossario", g[0], g[1]); });
    FR.forEach(function (f) { aggiungi("#/frasi", f.situazione, "Frasi validanti", f.situazione, f.evita + " " + f.prova + " " + f.perche); });
    SC.forEach(function (s) {
      aggiungi("#/scenari/" + s.id, s.titolo, "Scenari", s.titolo, s.contesto + " " + s.opzioni.map(function (o) { return o.testo; }).join(" "));
    });
    EX.forEach(function (e) {
      aggiungi("#/esercizi/" + e.id, e.titolo, "Esercizi", e.titolo, e.scopo + " " + (e.intro || "") + " " + (e.passi || []).map(function (p) { return p.t + " " + p.d; }).join(" "));
    });
    PE.forEach(function (t) {
      aggiungi("#/percorso/" + t.n, "Tappa " + t.n + ". " + t.titolo, "Percorso", t.titolo, t.sommario + " " + t.apertura.join(" ") + " " + t.idee.join(" ") + " " + t.compito.t + " " + t.compito.p);
    });
    ST.forEach(function (s) { aggiungi("#/strumenti/" + s.id, s.titolo, "Strumenti", s.titolo, s.scopo + " " + s.intro.join(" ") + " " + (s.coppie || []).map(function (c) { return c[1] + " " + c[2]; }).join(" ") + " " + (s.voci || []).map(function (v) { return v[1]; }).join(" ")); });
    RU.forEach(function (r) { aggiungi("#/ruolo/" + r.id, "Se sei: " + r.titolo.toLowerCase(), "Il tuo ruolo", r.titolo + " " + r.chi, r.lead + " " + r.pesi.join(" ") + " " + r.attenzione.join(" ")); });
    res.sort(function (a, b) { return b.punti - a.punti || a.ord - b.ord; });
    h += "<p>" + res.length + (res.length === 1 ? " risultato" : " risultati") + ' per «<mark>' + esc(q) + "</mark>».</p>";
    if (res.length) h += '<div class="grid">' + res.slice(0, 30).map(function (r) {
      return '<a class="tile" href="' + r.href + '"><strong>' + esc(r.t) + "</strong><span>" + esc(r.s) + "</span>" +
        (r.brano ? '<br><span class="hint">' + esc(r.brano) + "</span>" : "") + "</a>";
    }).join("") + "</div>";
    else h += "<p>Prova con una parola più semplice o più breve.</p>";
    return { title: "Cerca · " + NOME, html: h };
  }

  function page404() {
    return { title: "Pagina non trovata · " + NOME, html: '<h1>Pagina non trovata</h1><p><a class="btn" href="#/">Torna alla home</a></p>' };
  }

  /* ---------- router ---------- */
  var currentLeave = null;
  // Posizione di scorrimento per pagina: si ripristina con Indietro/Avanti, non quando si apre un link.
  var posizioni = {}, hashPrec = null, daLink = false;
  try { history.scrollRestoration = "manual"; } catch (e) {}
  function segnaLink() { daLink = true; setTimeout(function () { daLink = false; }, 500); }
  document.addEventListener("click", function (e) { if (e.target.closest && e.target.closest('a[href^="#/"]')) segnaLink(); }, true);

  function route() {
    if (hashPrec !== null) posizioni[hashPrec] = window.scrollY;
    if (currentLeave) { try { currentLeave(); } catch (e) {} currentLeave = null; }
    var raw = (location.hash || "#/").replace(/^#\/?/, "");
    var qs = ""; var qi = raw.indexOf("?");
    if (qi >= 0) { qs = raw.slice(qi + 1); raw = raw.slice(0, qi); }
    var seg = raw.split("/").filter(Boolean);
    var sec = seg[0] || "home";
    var p;
    switch (sec) {
      case "home": p = pageHome(); break;
      case "guida": p = seg[1] ? pageCapitolo(seg[1], qs) : pageGuida(); break;
      case "pratica": p = pagePratica(); break;
      case "frasi": p = pageFrasi(); break;
      case "scenari": p = seg[1] ? pageScenario(seg[1]) : pageScenari(); break;
      case "esercizi": p = seg[1] ? pageEsercizio(seg[1]) : pageEsercizi(); break;
      case "emergenze": p = pageEmergenze(); break;
      case "glossario": p = pageGlossario(); break;
      case "fonti": p = pageFonti(); break;
      case "altro": p = pageAltro(); break;
      case "misura": p = pageMisura(); break;
      case "percorso": p = seg[1] ? pageTappa(seg[1]) : pagePercorso(); break;
      case "strumenti": p = seg[1] ? pageStrumento(seg[1]) : pageStrumenti(); break;
      case "appunti": p = pageAppunti(); break;
      case "ruolo": p = pageRuolo(seg[1]); break;
      case "cerca":
        p = pageCerca(param(qs, "q")); break;
      default: p = page404();
    }
    main.innerHTML = p.html;
    document.title = p.title;
    currentLeave = p.leave || null;
    setActive(sec);
    var sf = document.getElementById("searchForm");
    if (sf) sf.addEventListener("submit", function (e) {
      e.preventDefault();
      var v = document.getElementById("q").value.trim();
      segnaLink();
      location.hash = "#/cerca?q=" + encodeURIComponent(v);
    });
    // Il titolo della pagina dà il nome al contenuto principale: lo legge lo screen reader quando prende il focus.
    var h1 = main.querySelector("h1");
    if (h1) { h1.id = "titolo-pagina"; main.setAttribute("aria-labelledby", "titolo-pagina"); }
    else main.removeAttribute("aria-labelledby");
    if (p.after) p.after();
    var ripristina = !daLink && posizioni[location.hash || "#/"];
    daLink = false;
    window.scrollTo(0, ripristina || 0);
    main.focus({ preventScroll: true });
    if (p.afterScroll && !ripristina) p.afterScroll();
    hashPrec = location.hash || "#/";
  }

  /* ---------- offline (service worker) ---------- */
  function registraSW() {
    if (!("serviceWorker" in navigator)) return;
    if (!(location.protocol === "https:" || location.hostname === "localhost" || location.hostname === "127.0.0.1")) return;
    // Se la pagina era già controllata da un service worker, un cambio di controller significa che sono usciti contenuti nuovi.
    var avevaController = !!navigator.serviceWorker.controller;
    navigator.serviceWorker.addEventListener("controllerchange", function () { if (avevaController) avvisoAggiornamento(); });
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("sw.js").catch(function () {});
    });
  }
  function avvisoAggiornamento() {
    if (document.getElementById("aggiornamento")) return;
    var d = document.createElement("div");
    d.id = "aggiornamento"; d.className = "toast"; d.setAttribute("role", "status");
    d.innerHTML = "<span>Ci sono contenuti aggiornati.</span> ";
    var b = document.createElement("button");
    b.type = "button"; b.className = "btn"; b.textContent = "Ricarica";
    b.onclick = function () { location.reload(); };
    d.appendChild(b);
    document.body.appendChild(d);
  }

  buildNav();
  // «Esci subito»: cancella ciò che è in memoria e lascia il sito (la pagina corrente viene sostituita nella cronologia).
  document.getElementById("esci").addEventListener("click", function () {
    try { sessionStorage.clear(); } catch (e) {}
    location.replace("https://www.google.it/");
  });
  window.addEventListener("hashchange", route);
  route();
  registraSW();
})();
