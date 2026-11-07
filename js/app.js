/* Accanto a te – app a pagina singola, senza server, senza account, senza tracciamento.
   Router a hash (#/percorso): funziona su qualsiasi hosting statico, su Android e iPhone. */
(function () {
  "use strict";

  var G = window.GUIDA, GL = window.GLOSSARIO, FR = window.FRASI, SC = window.SCENARI,
      EX = window.ESERCIZI, EM = window.EMERGENZE;
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
  function findChap(id) { for (var i = 0; i < G.length; i++) if (G[i].id === id) return i; return -1; }

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
    ["#/frasi", "Frasi", "frasi"],
    ["#/esercizi", "Esercizi", "esercizi"],
    ["#/scenari", "Scenari", "scenari"],
    ["#/emergenze", "Emergenze", "emergenze"],
    ["#/glossario", "Glossario", "glossario"],
    ["#/fonti", "Fonti", "fonti"]
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
    var map = { frasi: "pratica", esercizi: "pratica", scenari: "pratica", glossario: "altro", fonti: "altro", cerca: "altro" };
    var tabSec = map[sec] || sec;
    [].forEach.call(document.querySelectorAll("#tabbar a"), function (a) {
      if (a.dataset.sec === tabSec) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
    [].forEach.call(document.querySelectorAll("#navDesktop a"), function (a) {
      if (a.dataset.sec === sec) a.setAttribute("aria-current", "page");
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
      '<div class="grid two">' +
      tile("#/guida", "Guida", "Che cos\'è il disturbo, come cambiano le relazioni, cure, limiti, sicurezza.", G.length + " capitoli") +
      tile("#/frasi", "Frasi validanti", "Cosa dire e cosa evitare nelle situazioni difficili, con il perché.", FR.length + " situazioni") +
      tile("#/esercizi", "Esercizi", "Respirazione, ancoraggio al presente, STOP, preparare una richiesta.", EX.length + " esercizi") +
      tile("#/scenari", "Scenari", "Situazioni a scelta con feedback, per fare pratica.", SC.length + " scenari") +
      "</div>" +
      installCard() +
      '<section class="card"><h2>Come usare questa guida</h2><ul>' +
      "<li>Non serve leggere tutto: parti dal punto che ti serve adesso.</li>" +
      "<li>Le informazioni sono riformulate da testi clinici e per familiari, elencati in <a href=\"#/fonti\">Fonti</a>.</li>" +
      "<li>Niente account, niente dati personali, niente tracciamento: ciò che scrivi non viene inviato a nessun server.</li>" +
      "<li>La guida non fa diagnosi e non sostituisce un professionista.</li></ul></section>";
    return { title: NOME, html: h, after: refreshInstall };
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
    var h = "<h1>Guida</h1><p class=\"lead\">" + G.length + " capitoli brevi, da leggere nell'ordine che preferisci.</p>" + searchBox("") + '<div class="grid">';
    G.forEach(function (c, i) {
      h += tile("#/guida/" + c.id, (i + 1) + ". " + c.titolo, c.sommario, c.minuti + " min di lettura");
    });
    h += "</div>";
    return { title: "Guida · " + NOME, html: h };
  }
  function pageCapitolo(id, qs) {
    var i = findChap(id);
    if (i < 0) return page404();
    var c = G[i];
    var h = '<p class="crumbs"><a href="#/guida">Guida</a> › Capitolo ' + (i + 1) + "</p><article class=\"chap\"><h1>" + esc(c.titolo) + '</h1><p><span class="badge">' + c.minuti + " min di lettura</span></p>";
    if (c.sezioni.length > 2) {
      h += '<nav class="toc-cap" aria-label="In questo capitolo"><strong>In questo capitolo</strong><ol>' +
        c.sezioni.map(function (s, k) { return '<li><a href="#/guida/' + c.id + '" data-sez="' + k + '">' + esc(s.t) + "</a></li>"; }).join("") + "</ol></nav>";
    }
    c.sezioni.forEach(function (s, k) {
      h += '<h2 id="sez-' + k + '" tabindex="-1">' + esc(s.t) + "</h2>";
      (s.p || []).forEach(function (p) { h += "<p>" + fmt(p) + "</p>"; });
      if (s.l) h += "<ul>" + s.l.map(function (x) { return "<li>" + fmt(x) + "</li>"; }).join("") + "</ul>";
      if (s.box) h += '<div class="callout ' + (s.box.tipo === "attenzione" ? "attenzione" : "") + '"><p>' + fmt(s.box.testo) + "</p></div>";
    });
    h += '</article><div class="pager">' +
      (i > 0 ? '<a class="btn secondary" href="#/guida/' + G[i - 1].id + '">← Precedente</a>' : "<span></span>") +
      (i < G.length - 1 ? '<a class="btn" href="#/guida/' + G[i + 1].id + '">Successivo →</a>' : '<a class="btn" href="#/pratica">Passa alla pratica →</a>') + "</div>";
    function vaiA(k) {
      var el = document.getElementById("sez-" + k);
      if (el) { el.scrollIntoView(); el.focus({ preventScroll: true }); }
    }
    return { title: c.titolo + " · " + NOME, html: h,
      after: function () {
        var t = main.querySelector(".toc-cap");
        if (t) t.addEventListener("click", function (e) {
          var a = e.target.closest("a[data-sez]"); if (!a) return;
          e.preventDefault(); vaiA(a.dataset.sez);
        });
      },
      afterScroll: function () { var k = param(qs, "s"); if (/^\d+$/.test(k)) vaiA(k); } };
  }

  function pagePratica() {
    return { title: "Pratica · " + NOME, html: "<h1>Pratica</h1><p class=\"lead\">Capire non basta: qui si prova.</p><div class=\"grid\">" +
      tile("#/frasi", "Frasi validanti", "Cosa dire e cosa evitare, con spiegazione.", FR.length + " situazioni") +
      tile("#/esercizi", "Esercizi guidati", "Per calmare il corpo, ritrovare il presente e preparare le parole.", EX.length + " esercizi") +
      tile("#/scenari", "Scenari interattivi", "Scegli cosa rispondere e leggi il commento.", SC.length + " scenari") + "</div>" };
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
    return FR.filter(function (f) { return fraseFiltro === "tutte" || f.tag === fraseFiltro; }).map(function (f) {
      return '<article class="card frase"><div class="sit">' + esc(f.situazione) + "</div>" +
        '<div class="row no"><span class="lab">Meglio evitare</span>' + esc(f.evita) + "</div>" +
        '<div class="row si"><span class="lab">Puoi provare</span>' + esc(f.prova) + "</div>" +
        '<div class="row why"><strong>Perché:</strong> ' + esc(f.perche) + ' <span class="badge">' + esc(f.livello) + "</span></div></article>";
    }).join("");
  }

  /* Scenari */
  var scState = {};
  function pageScenari() {
    var h = "<h1>Scenari</h1><p class=\"lead\">Scegli la risposta che ti sembra più utile, poi leggi il commento. Non esistono risposte perfette: l'obiettivo è allenare lo sguardo.</p><div class=\"grid\">";
    SC.forEach(function (s) {
      var st = scState[s.id];
      h += tile("#/scenari/" + s.id, s.titolo, s.contesto.slice(0, 90) + "…", st && st.scelto !== undefined ? "Completato" : "Inizia");
    });
    return { title: "Scenari · " + NOME, html: h + "</div>" };
  }
  function pageScenario(id) {
    var idx = -1; SC.forEach(function (s, i) { if (s.id === id) idx = i; });
    if (idx < 0) return page404();
    var s = SC[idx];
    var h = '<p class="crumbs"><a href="#/scenari">Scenari</a> › ' + (idx + 1) + " di " + SC.length + "</p>" +
      '<div class="progress" aria-hidden="true"><i style="width:' + (((idx + 1) / SC.length) * 100) + '%"></i></div>' +
      "<h1>" + esc(s.titolo) + "</h1><p>" + esc(s.contesto) + "</p><h2>Cosa fai?</h2><div id=\"opts\">" +
      s.opzioni.map(function (o, i) {
        return '<button class="option" type="button" data-i="' + i + '">' + esc(o.testo) + "</button>";
      }).join("") + '</div><div id="esito" class="callout" tabindex="-1" hidden></div>' +
      '<div class="pager" id="pagerSc">' + (idx > 0 ? '<a class="btn secondary" href="#/scenari/' + SC[idx - 1].id + '">← Precedente</a>' : "<span></span>") +
      (idx < SC.length - 1 ? '<a class="btn" href="#/scenari/' + SC[idx + 1].id + '">Prossimo →</a>' : '<a class="btn" href="#/scenari">Tutti gli scenari</a>') + "</div>";
    return { title: s.titolo + " · " + NOME, html: h, after: function () {
      document.getElementById("opts").addEventListener("click", function (e) {
        var b = e.target.closest(".option"); if (!b || scState[id]) return;
        var i = +b.dataset.i;
        scState[id] = { scelto: i, ok: s.opzioni[i].ok };
        var etichette = ["Da evitare", "Accettabile, ma migliorabile", "Molto efficace"];
        [].forEach.call(this.querySelectorAll(".option"), function (x, k) {
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
        box.innerHTML = testo; box.hidden = false; box.focus();
      });
    } };
  }

  /* Esercizi */
  function pageEsercizi() {
    var h = "<h1>Esercizi</h1><p class=\"lead\">Brevi pratiche guidate. Nulla di ciò che scrivi viene salvato.</p><div class=\"grid\">";
    EX.forEach(function (e) { h += tile("#/esercizi/" + e.id, e.titolo, e.scopo, e.durata); });
    return { title: "Esercizi · " + NOME, html: h + "</div>" };
  }
  var breathTimer = null;
  function stopBreath() { if (breathTimer) { clearTimeout(breathTimer); breathTimer = null; } }

  function pageEsercizio(id) {
    var ex = null; EX.forEach(function (e) { if (e.id === id) ex = e; });
    if (!ex) return page404();
    var h = '<p class="crumbs"><a href="#/esercizi">Esercizi</a> › ' + esc(ex.titolo) + "</p><h1>" + esc(ex.titolo) + '</h1><p><span class="badge">' + esc(ex.durata) + "</span></p><p class=\"lead\">" + esc(ex.scopo) + "</p>";
    var after = null;
    if (ex.avviso) h += '<div class="callout attenzione"><p><strong>Prima di iniziare.</strong> ' + esc(ex.avviso) + "</p></div>";
    if (ex.tipo === "respiro") { h += respiroHtml(ex); after = function () { respiroInit(ex); }; }
    else if (ex.tipo === "passi") { h += passiHtml(ex); after = function () { passiInit(ex); }; }
    else if (ex.tipo === "frase") { h += fraseBuilderHtml(); after = fraseBuilderInit; }
    else if (ex.tipo === "dear") { h += dearHtml(); after = dearInit; }
    else if (ex.tipo === "checkin") { h += checkinHtml(); after = checkinInit; }
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

  /* Glossario, fonti, altro */
  function pageGlossario() {
    var h = '<h1>Glossario</h1><p class="lead">Parole usate nella guida.</p><dl class="gloss">';
    GL.forEach(function (g) { h += "<dt>" + esc(g[0]) + "</dt><dd>" + esc(g[1]) + "</dd>"; });
    return { title: "Glossario · " + NOME, html: h + "</dl>" };
  }
  function pageFonti() {
    var h = "<h1>Fonti e note</h1><p class=\"lead\">I contenuti sono una rielaborazione originale di concetti presenti nei testi seguenti. Non contengono passaggi copiati e non sostituiscono la lettura delle opere, che consigliamo per approfondire.</p>";
    window.FONTI.forEach(function (g) {
      h += "<h2>" + esc(g.gruppo) + "</h2><div class=\"card\"><ul>" + g.voci.map(function (v) { return "<li>" + esc(v) + "</li>"; }).join("") + "</ul></div>";
    });
    h += "<h2>Note</h2><div class=\"card\"><ul>" +
      "<li><strong>Nessuna diagnosi:</strong> la guida descrive il disturbo in termini generali; la diagnosi spetta a un professionista.</li>" +
      "<li><strong>Privacy:</strong> l'app non usa account, cookie di tracciamento né analitiche. Ciò che scrivi negli esercizi resta sul tuo dispositivo e viene cancellato quando chiudi la pagina; il piano di sicurezza resta nella memoria della scheda finché non la chiudi o non premi «Cancella tutto».</li>" +
      "<li><strong>Linguaggio:</strong> i testi usano l'espressione «persona cara» o forme neutre, perché il disturbo riguarda persone di ogni genere ed età.</li>" +
      "<li><strong>Aggiornamento:</strong> le conoscenze cliniche evolvono; verifica sempre con i professionisti che seguono la tua situazione.</li></ul></div>";
    return { title: "Fonti · " + NOME, html: h };
  }
  function pageAltro() {
    return { title: "Altro · " + NOME, html: "<h1>Altro</h1><div class=\"grid\">" +
      tile("#/glossario", "Glossario", "Le parole della guida, spiegate.", GL.length + " voci") +
      tile("#/fonti", "Fonti e note", "Da dove vengono i contenuti, privacy, limiti.", "Informazioni") +
      tile("#/cerca", "Cerca", "Trova un argomento in tutta la guida.", "Ricerca") + "</div>" + installCard(), after: refreshInstall };
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
        aggiungi("#/guida/" + c.id + "?s=" + k, s.t, "Guida · " + c.titolo, c.titolo + " " + s.t, corpo);
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
  function route() {
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
      location.hash = "#/cerca?q=" + encodeURIComponent(v);
    });
    // Il titolo della pagina dà il nome al contenuto principale: lo legge lo screen reader quando prende il focus.
    var h1 = main.querySelector("h1");
    if (h1) { h1.id = "titolo-pagina"; main.setAttribute("aria-labelledby", "titolo-pagina"); }
    else main.removeAttribute("aria-labelledby");
    if (p.after) p.after();
    window.scrollTo(0, 0);
    main.focus({ preventScroll: true });
    if (p.afterScroll) p.afterScroll();
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
  window.addEventListener("hashchange", route);
  route();
  registraSW();
})();
