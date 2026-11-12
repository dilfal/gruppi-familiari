/* Percorsi per ruolo: genitore, partner, fratello o sorella, amico o convivente.
   Per ogni ruolo: che cosa pesa di solito, a che cosa fare attenzione, da dove partire nella guida, gli scenari più
   vicini, uno strumento e un esempio per ciascuna delle dodici tappe. In fondo, otto scenari nuovi (due per ruolo).
   Fonti: Porr, Superare il disturbo borderline di personalità, cap. 1 («Il DBP e le relazioni familiari») e cap. 7;
   Carretta, Gaj, Porcelli, cap. 5 di Visintini (a cura di), Il modello GET per la personalità borderline.
   Dalle fonti viene la descrizione di ciò che pesa in ogni ruolo. L'ordine di lettura, la scelta degli scenari e dello
   strumento e gli esempi nelle tappe sono una proposta dell'app: la pagina lo dichiara.
   I testi sono riformulati, mai copiati. Nessun dato personale. */
(function () {
  window.RUOLI_INTRO = {
    lead: "Il disturbo tocca in modo diverso un genitore, un partner, un fratello o una sorella, un amico. Se scegli il tuo ruolo, l'app mette in cima ciò che di solito serve prima e aggiunge esempi più vicini a te.",
    p: [
      "Tutti i contenuti restano disponibili per tutti: la scelta cambia soltanto l'ordine proposto, gli scenari messi in evidenza e un esempio in ogni tappa del percorso. Puoi cambiarla o toglierla quando vuoi."
    ],
    nota: [
      "**Dalle fonti** viene la descrizione di ciò che pesa in ogni ruolo: soprattutto il primo capitolo del libro di Valerie Porr, che dedica un paragrafo a genitori, fratelli e sorelle, partner e figli, e il capitolo sui familiari del libro sul metodo GET.",
      "**Dall'app** vengono l'ordine di lettura, la scelta degli scenari e dello strumento e gli esempi nelle tappe. Sono proposte ragionate sulle fonti, non indicazioni cliniche.",
      "**Sugli amici e sui conviventi le fonti dicono poco.** Il libro sul metodo GET li conta fra i «famigliari», ma quasi tutto ciò che è stato scritto riguarda genitori e partner. La scheda lo dice, e rimanda ai contenuti generali.",
      "**Se sei il figlio o la figlia** di una persona con il disturbo, questa guida non ha ancora un percorso per te. Trovi qualche riga nel capitolo {{#/guida/familiari|Il vissuto dei familiari}}. Se sei minorenne, parlane con un adulto di cui ti fidi."
    ],
    fonte: "Porr, Superare il disturbo borderline di personalità, cap. 1 («Il DBP e le relazioni familiari»); Carretta, Gaj, Porcelli, in Visintini (a cura di), Il modello GET, cap. 5 §2 (perché si parla di famigliari)."
  };

  window.RUOLI = [
    {
      id: "genitore",
      titolo: "Genitore",
      chi: "Sono la madre o il padre",
      lead: "Nei gruppi per i familiari descritti nel libro sul metodo GET i partecipanti sono più spesso genitori. Il legame con un figlio non si sceglie e non si scioglie: per questo, più che in ogni altro ruolo, pesano la colpa e la paura per il futuro.",
      pesi: [
        "**La colpa, in qualunque direzione.** Chi ha lavorato pensa che avrebbe dovuto stare a casa, chi è stato a casa pensa di esserci stato troppo; chi è stato permissivo si rimprovera di non aver messo regole, chi è stato severo di non aver lasciato spazio. Che ci si accusi di una cosa e del suo contrario dice che la spiegazione non sta lì.",
        "**«Se l'ho causato, posso farlo andare via».** Sentirsi responsabili della malattia porta a sentirsi responsabili anche della cura. Gli autori del libro sul metodo GET notano che a volte la colpa non si vuole lasciare proprio per questo: dà l'illusione di avere in mano la soluzione.",
        "**Due genitori, due linee.** Capita che uno tenda a risolvere e a evitare i conflitti e l'altro a mettere regole e conseguenze. Ognuno pensa che il suo modo funzionerebbe, se solo l'altro collaborasse. Al figlio arrivano segnali confusi, e la coppia si logora.",
        "**Una vita dedicata per intero al figlio.** Il lavoro ridotto o lasciato, le amicizie diradate, il tempo tolto agli altri figli e alla coppia, fino a non vedere più i propri bisogni.",
        "**Non essere creduti.** «È solo l'adolescenza», «crescendo gli passerà», «stai esagerando»: frasi che portano a dubitare di ciò che si vede, e a restare soli.",
        "**Il pensiero del dopo.** Che cosa succederà quando non potrò più aiutare? È una paura legittima, e fra genitori è una delle meno dette.",
        "**Un lutto senza nome.** Per il figlio che si era immaginato e per la famiglia che si pensava di avere. Vedi «Il lutto non riconosciuto» in {{#/guida/familiari|Il vissuto dei familiari}}."
      ],
      attenzione: [
        "**Decidere con, non per.** Con un figlio adulto, il modo conta più dell'intenzione: una decisione presa per il suo bene, ma senza di lui, può arrivargli come «non ti ritengo capace». Vedi {{#/guida/limiti|Limiti, responsabilità e sostegno}}.",
        "**Una linea sola, concordata lontano da lui.** Se siete in due, le differenze si discutono fra voi, non davanti al figlio e non attraverso di lui.",
        "**Il percorso di cura è suo.** Chi cura un adulto non riferisce ai genitori che cosa viene detto in seduta o nei gruppi, e aspettarselo è un equivoco frequente. Avere un luogo tuo per dubbi e domande evita di cercarle lì. Vedi {{#/guida/get|Il percorso GET spiegato a chi sta accanto}}.",
        "**Gli altri figli.** I fratelli e le sorelle tendono a non chiedere, per non pesare. Hanno bisogno di attenzione proprio perché non la reclamano.",
        "**Non sei la cura, ma puoi migliorare la relazione.** Per gli autori non è cosa da poco: è ciò che un genitore può davvero fare."
      ],
      leggi: ["cause", "familiari", "validazione", "limiti", "comportamento", "tueemozioni", "curadise"],
      scenari: ["duestili", "deciso", "denaro", "aggiusto", "rientro", "passoindietro"],
      strumento: { id: "ruoli", perche: "Avvocato, agente di cura, coach, carceriere: sono i ruoli che un genitore si ritrova più spesso addosso. Vederli è il primo passo per posarne uno." },
      tappe: {
        1: "Fra i pesi, guarda anche quelli che un genitore tende a dare per scontati: il lavoro ridotto o lasciato, il tempo tolto agli altri figli e alla coppia.",
        2: "Per un genitore la colpa prende spesso la forma di un «se avessi»: se avessi lavorato meno, se fossi stato più severo, o meno. Chi è stato permissivo e chi è stato rigido si rimproverano l'opposto.",
        3: "Prova con le frasi da genitore: «Alla sua età dovrebbe…», «Fa i capricci», «È viziato». Dietro c'è quasi sempre una preoccupazione che si può dire in prima persona.",
        4: "L'accusa che arriva più spesso a un genitore: «È colpa vostra se sono così», «Non mi avete mai capito». Rispondere al sentimento non vuol dire firmare un'ammissione sul passato.",
        5: "Con un figlio, anche adulto, sottrarsi agli insulti può sembrare un venir meno al proprio compito. Dire «esco dieci minuti e torno» è un modo di restare genitore senza restare bersaglio.",
        6: "Se in casa siete in due, accorgersi della propria attivazione vale anche fra voi: le regole decise a caldo sono spesso quelle su cui poi i due genitori si dividono.",
        7: "Sotto la rabbia di un genitore c'è spesso la paura: per la sua sicurezza, per il suo futuro. Detta come paura si ascolta meglio che detta come rimprovero.",
        8: "Il pensiero tipico: «Lo fa per farci stare male», «Ci ricatta». La seconda lettura parte da che cosa può aver provato un attimo prima.",
        9: "Il «no» più difficile per un genitore riguarda spesso i soldi, la casa e le cose fatte al suo posto. Scegline uno solo e, se siete in due, concordatelo prima fra voi.",
        10: "Annota anche i cambiamenti tuoi: la volta che non hai risolto al suo posto, la volta che hai chiesto invece di decidere.",
        11: "Nei gruppi descritti nel libro la maggior parte dei partecipanti sono genitori: è probabile che tu ci trovi storie vicine alla tua. Fra i temi che si tacciono c'è spesso questo: che cosa succederà quando non ci saremo più.",
        12: "Per un genitore, validare annullandosi ha una forma precisa: una vita dedicata per intero al figlio. Rifacendo la fotografia, guarda se qualcosa di tuo ha ripreso posto."
      },
      fonte: "Porr, Superare il disturbo borderline di personalità, cap. 1 («I genitori di figli con DBP») e cap. 7 («Il lutto nei genitori», «Senso di colpa»); Carretta, Gaj, Porcelli, in Visintini (a cura di), Il modello GET, cap. 5 §4.2, §4.3.1 e §4.4."
    },
    {
      id: "partner",
      titolo: "Partner",
      chi: "Siamo una coppia",
      lead: "Una coppia vive di reciprocità: fidarsi, mostrarsi vulnerabili, essere ascoltati a propria volta. È ciò che distingue il tuo ruolo da quello di un genitore, ed è ciò che il disturbo mette più alla prova.",
      pesi: [
        "**Dare senza ricevere.** Aspettarsi di essere ricambiati, in una coppia, è legittimo. Quando non accade a lungo, il dolore e lo smarrimento non sono egoismo.",
        "**Da partner a chi aggiusta tutto.** Poco alla volta si prende in mano ogni decisione e ogni problema, finché ci si accorge di essere diventati i responsabili di tutto, e non più un compagno o una compagna.",
        "**Le accuse, e il bisogno di difendersi.** Molti partner consumano energie a dimostrare, punto per punto, di non aver fatto ciò di cui vengono accusati.",
        "**Non riconoscersi più.** Sotto una tensione che dura, anche chi era solido e fiducioso può ritrovarsi a reagire in modi che non gli somigliano.",
        "**Il dubbio se restare.** Chi è in coppia, a differenza di un genitore, può andarsene: questo rende il dubbio più presente e più difficile da dire ad alta voce.",
        "**Un lutto senza nome.** Per la relazione che si era immaginata, per la leggerezza che manca, per i progetti rimandati."
      ],
      attenzione: [
        "**La tua sicurezza viene prima.** Se nella coppia ci sono violenza, minacce o un controllo che ti fa paura, parlane con un professionista e, nell'urgenza, chiama il 112. Vedi {{#/emergenze|Emergenze}}.",
        "**Uno spazio tuo.** Amicizie, interessi e un luogo in cui parlare di te: servono a restare una persona intera, non a togliere qualcosa alla coppia. Vedi {{#/guida/curadise|Prendersi cura di sé}}.",
        "**Non sei la cura.** Puoi migliorare la relazione; il percorso di cura è di chi lo fa.",
        "**Se ci sono figli.** Il legame con il genitore che ha il disturbo resta reale e vitale per loro: anche quando sei in collera, non vanno messi contro di lui o di lei. Hanno bisogno di spiegazioni semplici e di sapere che non è colpa loro.",
        "**Se pensi di chiudere.** È una scelta possibile. Le fonti invitano a farla, quando si decide, con la minor rabbia possibile e con l'aiuto di un professionista: una separazione fatta nella collera tende a diventare lunga e dolorosa per tutti e due."
      ],
      leggi: ["partner", "abbandono", "validazione", "tueemozioni", "limiti", "nonpace", "curadise"],
      scenari: ["sospetto", "reciproco", "esco", "ritardo", "aggiusto", "caldo"],
      strumento: { id: "emozioni", perche: "In coppia le reazioni sono veloci e si alimentano a vicenda. Ricostruire un episodio a freddo aiuta a trovare che cosa c'era sotto la tua." },
      tappe: {
        1: "Fra i pesi, guarda quelli della coppia: i progetti rimandati, le amicizie diradate, la sensazione di dare senza ricevere.",
        2: "Un partner di rado si sente la causa; più spesso si sente quello che deve aggiustare. Fra i ruoli, guarda quanto spesso sei chi risolve e decide, e quanto poco sei soltanto un compagno o una compagna.",
        3: "Frasi da riformulare: «Hai una gelosia assurda», «Ogni volta che esco è una scenata», «Con te non si può parlare».",
        4: "L'accusa che arriva più spesso a un partner: «Tu non mi ami», «Mi nascondi qualcosa». Difendersi punto per punto raramente convince: prima il sentimento, poi, una volta sola, il fatto.",
        5: "In coppia, uscire dalla stanza tocca la paura dell'abbandono più che in ogni altro legame: per questo conta dire quando torni, e tornare davvero.",
        6: "A caldo, in coppia, la frase che scappa è spesso la più grossa: «Allora è finita», «Me ne vado». È un ultimatum, non un limite. Se una decisione così va presa, si prende a freddo.",
        7: "Sotto l'irritazione di un partner c'è spesso la solitudine: il bisogno di essere ascoltati a propria volta. È un bisogno legittimo, non un capriccio.",
        8: "Il pensiero tipico: «Lo fa per tenermi a casa», «Mi sta mettendo alla prova». Può essere paura di perderti, e si verifica con una domanda.",
        9: "I «no» di un partner riguardano spesso il tempo per sé, le uscite, l'essere sempre raggiungibili. Sceglierne uno e dirlo a freddo protegge anche la coppia.",
        10: "Annota anche ciò che riguarda voi due: una sera leggera, una risata, una volta in cui sei stato ascoltato.",
        11: "I gruppi per familiari sono frequentati soprattutto da genitori, e un partner può sentirsi fuori posto. Le fatiche con le proprie emozioni, però, sono le stesse. Fra i temi che si tacciono c'è spesso il dubbio se restare: ha bisogno di un luogo in cui poter essere detto.",
        12: "Per un partner, validare annullandosi vuol dire smettere di chiedere qualcosa per sé. Rifacendo la fotografia, guarda se la reciprocità ha ripreso un po' di spazio."
      },
      fonte: "Porr, Superare il disturbo borderline di personalità, cap. 1 («Partner e coniugi», «Figli di persone con DBP») e cap. 7 («Il senso di lutto nei partner o coniugi»); Carretta, Gaj, Porcelli, in Visintini (a cura di), Il modello GET, cap. 5 §4.4."
    },
    {
      id: "fratello",
      titolo: "Fratello o sorella",
      chi: "Siamo fratelli o sorelle",
      lead: "Delle fatiche dei fratelli e delle sorelle si parla poco, anche fra chi studia il disturbo. Eppure sono coinvolti due volte: nel rapporto con chi sta male e in una famiglia che ruota intorno a lui o a lei.",
      pesi: [
        "**Le attenzioni vanno altrove.** Quando in casa c'è ogni giorno un'emergenza da spegnere, i bisogni degli altri figli passano in secondo piano, anche da adulti, e anche quando portano a casa buoni risultati.",
        "**Dover essere «quello bravo».** Vedere i genitori soffrire porta a non voler pesare: non dare pensieri, fare la cosa giusta, compensare. È una fatica che da fuori non si vede.",
        "**La rabbia.** Verso il fratello o la sorella, per ciò che i genitori passano. A volte esce di traverso, con il sarcasmo o con gesti di ribellione.",
        "**L'imbarazzo.** Soprattutto quando l'età è vicina e amici e compagni sanno ciò che succede.",
        "**La lealtà divisa.** Fra i genitori e un fratello o una sorella a cui si vuole bene, e che magari si è sempre ammirato.",
        "**Il pensiero del dopo.** «Quando i nostri genitori non ci saranno più, toccherà a me?»"
      ],
      attenzione: [
        "**Hai diritto a bisogni tuoi.** Una notizia bella o un problema tuo meritano posto in famiglia. Chiederlo non è togliere qualcosa a chi sta male.",
        "**Non fare da tramite.** Quando i genitori ti chiedono di parlargli tu, o lui ti chiede di stare dalla sua parte contro di loro, puoi voler bene a tutti e non portare messaggi.",
        "**Quanto esserci.** Le fonti raccontano fratelli che scelgono di farsi carico e altri che si allontanano, senza indicare una strada giusta. È una scelta che si può fare con calma e rivedere nel tempo.",
        "**Se sei molto giovane.** Non tocca a te gestire le crisi. Parlane con un adulto di cui ti fidi, e in un'urgenza vai a {{#/emergenze|Emergenze}}.",
        "**Capire aiuta anche la rabbia.** Sapere che cosa viene dal disturbo e che cosa no non ti chiede di giustificare tutto. Vedi {{#/guida/intenzione|«Lo fa apposta?»}}."
      ],
      leggi: ["familiari", "disturbo", "cause", "intenzione", "tueemozioni", "limiti", "curadise"],
      scenari: ["bravo", "inmezzo", "accusa", "successo", "notte"],
      strumento: { id: "pesi", perche: "I pesi di un fratello o di una sorella raramente vengono nominati in famiglia. Qui puoi guardarli uno per uno. Alcune voci riguardano chi ha la responsabilità della casa: se non ti riguardano, lasciale vuote." },
      tappe: {
        1: "Fra i pesi, guarda quelli di cui in famiglia non si parla: le attenzioni andate altrove, i tuoi risultati passati in secondo piano, l'imbarazzo con gli amici.",
        2: "Per un fratello o una sorella, accanto alla colpa c'è spesso una domanda: «perché a lei e non a me?». Non c'è merito né demerito. Fra i ruoli, guarda quanto spesso sei «quello che non deve dare pensieri».",
        3: "Frasi da riformulare: «Rovina sempre tutto», «In questa casa esiste solo lei», «Fa la vittima».",
        4: "L'accusa che arriva più spesso a un fratello: «Tu sei il preferito», «A te va sempre tutto bene». Si può riconoscere quanto pesa sentirsi quello che sbaglia, senza scusarsi di come va la propria vita.",
        5: "Fra fratelli gli insulti possono avere una storia lunga. Vale la stessa regola, e in più una: non sei tenuto a fare da scudo ai tuoi genitori restando tu a riceverli.",
        6: "La tua attivazione può salire anche da spettatore, quando vedi i tuoi genitori sotto attacco. Accorgertene prima di intervenire evita di aggiungere una terza voce alla lite.",
        7: "Sotto la rabbia verso un fratello o una sorella c'è spesso il dolore per i genitori, o la mancanza di un rapporto alla pari. Sono due cose diverse, e chiedono parole diverse.",
        8: "Il pensiero tipico: «Lo fa per stare al centro», «Se ne approfitta di mamma e papà». La seconda lettura non ti chiede di dargli ragione: ti chiede un'altra ipotesi.",
        9: "I «no» di un fratello riguardano spesso il fare da tramite, il coprire, l'esserci a ogni emergenza. Puoi dirne uno anche ai tuoi genitori.",
        10: "Annota anche i momenti da fratelli e basta: una cosa fatta insieme che con il disturbo non c'entrava.",
        11: "Nei gruppi per familiari i fratelli sono pochi. Se non ne trovi, una persona di fiducia fuori dalla famiglia può essere il primo luogo in cui dire la rabbia senza sentirti sleale.",
        12: "Per un fratello, annullarsi vuol dire fare sempre «quello bravo». Rifacendo la fotografia, guarda se hai ripreso spazio per una cosa tua, bella o brutta, da portare in famiglia."
      },
      fonte: "Porr, Superare il disturbo borderline di personalità, cap. 1 («Fratelli e sorelle di persone con DBP»); Carretta, Gaj, Porcelli, in Visintini (a cura di), Il modello GET, cap. 5 §2 e §4.3.1 (le triangolazioni)."
    },
    {
      id: "amico",
      titolo: "Amico o convivente",
      chi: "Siamo amici, o viviamo nella stessa casa",
      lead: "Per il libro sul metodo GET sono «famigliari» tutte le persone che hanno un rapporto abituale con chi ha il disturbo e un posto significativo nella sua vita: anche chi non è parente, chi divide la casa, chi viene chiamato nei momenti di crisi. Ciò che trovi nella guida vale quindi anche per te.",
      pesi: [
        "**Le fonti parlano poco di te.** Quasi tutto ciò che è stato scritto riguarda genitori e partner. Questa scheda è più breve delle altre per questo, non perché il tuo posto conti meno.",
        "**Ogni legame ha attese diverse.** Quanto il disturbo ti tocca dipende da quanto siete vicini e da quanto sostegno puoi dare: non c'è una misura uguale per tutti.",
        "**L'aiuto rifiutato.** Premure e offerte di aiuto possono essere respinte o lette come un tentativo di controllo. Chi le ha fatte si sente ferito e non apprezzato: capita in ogni tipo di legame, amicizia compresa.",
        "**Un piccolo sbaglio che sembra la fine.** Per chi prova una vergogna molto intensa, un errore da poco, come un oggetto rotto o un compleanno dimenticato, può voler dire «non mi vorrà più come amico». Questo spiega certe sparizioni e certe reazioni che paiono sproporzionate.",
        "**Essere la persona che viene chiamata.** Chi è il primo a cui ci si rivolge in una crisi porta un peso reale, anche senza un ruolo riconosciuto."
      ],
      attenzione: [
        "**Puoi decidere fin dove arrivi.** Dire orari e limiti con chiarezza permette di esserci più a lungo. Vedi {{#/guida/limiti|Limiti, responsabilità e sostegno}}.",
        "**Non essere l'unico.** Se ti accorgi di essere la sola persona a cui si rivolge, è un buon motivo per chiedere chi altro può esserci: altri amici, la famiglia, chi la segue.",
        "**Le regole di casa si fanno a freddo.** In una casa condivisa spazi, rumore e spese si discutono in un momento tranquillo, non a metà di una lite.",
        "**Se senti un rischio per la vita, non tenerlo per te.** In quel caso la riservatezza fra amici passa in secondo piano: vedi {{#/guida/sicurezza|Autolesionismo e pensieri suicidari}} ed {{#/emergenze|Emergenze}}.",
        "**I gruppi per familiari.** Quelli descritti nel libro sono aperti anche ai conviventi che non sono parenti: chiedi se vale anche nel servizio della tua zona."
      ],
      leggi: ["disturbo", "abbandono", "validazione", "comunicare", "limiti", "sicurezza", "curadise"],
      scenari: ["unicoamico", "casacomune", "ritardo", "notte", "accusa", "successo"],
      strumento: { id: "riformula", perche: "Fra amici le parole che giudicano escono spesso in forma di battuta. Qui puoi cercare la versione che descrive." },
      tappe: {
        1: "Fra i pesi, guarda quelli di chi non è un parente: il tempo, l'essere chiamato nei momenti peggiori, il non sapere fin dove tocca a te. Le voci che riguardano la famiglia, se non ti riguardano, lasciale vuote.",
        2: "Un amico di rado si chiede se è la causa; più spesso si chiede se sta facendo abbastanza. Fra i ruoli, guarda se sei diventato l'unica persona a cui ci si rivolge.",
        3: "Frasi da riformulare: «È pesante», «Fa sempre una tragedia», «Con lei bisogna stare attenti a tutto».",
        4: "L'accusa che arriva più spesso a un amico: «Anche tu mi hai mollato», «Hai di meglio da fare». Un appuntamento saltato può essere vissuto come la fine dell'amicizia: rispondere a quella paura conta più che giustificare l'impegno.",
        5: "Da amico o da coinquilino hai meno storia e meno obblighi di un familiare, ed è più facile sparire del tutto. La via di mezzo è la stessa: interrompere, dire quando ti rifai vivo, e farlo.",
        6: "In una casa condivisa spazi, rumore e spese sono il terreno tipico della regola detta a caldo. Si decidono in un momento tranquillo.",
        7: "Sotto il fastidio di un amico c'è spesso la stanchezza, o il timore di dire la cosa sbagliata. Nominarli a te stesso è già un modo per non sparire senza spiegazioni.",
        8: "Il pensiero tipico: «Mi cerca solo quando sta male», «Mi usa». Può darsi che nei momenti buoni tema di disturbare: si verifica chiedendo.",
        9: "I «no» di un amico riguardano spesso gli orari, la durata delle telefonate, i prestiti. Dire fin dove arrivi permette di esserci più a lungo.",
        10: "Vedendola meno spesso di chi ci vive, puoi notare cambiamenti che da vicino sfuggono. Se ne noti uno, dillo.",
        11: "I gruppi descritti nel libro sono rivolti anche a chi non è parente ma ha un rapporto significativo o divide la casa. Chiedi se vale anche nel servizio della tua zona.",
        12: "Per un amico, annullarsi vuol dire esserci sempre e a qualunque ora, finché non ce la si fa più e si sparisce. Rifacendo la fotografia, guarda se la tua presenza è diventata più sostenibile."
      },
      fonte: "Carretta, Gaj, Porcelli, in Visintini (a cura di), Il modello GET, cap. 5 §2 (chi sono i «famigliari») e §4.2 (a chi sono rivolti i gruppi); Porr, Superare il disturbo borderline di personalità, cap. 1 («Il DBP e le relazioni familiari») e cap. 2 (la vergogna)."
    }
  ];

  /* Scenari nuovi, due per ruolo. Stesso formato di SCENARI: ok 0 = da evitare, 1 = migliorabile, 2 = molto efficace. */
  [].push.apply(window.SCENARI, [
    {
      id: "duestili",
      fonte: "Porr, cap. 1 («I genitori di figli con DBP»)",
      titolo: "Due genitori, due linee",
      contesto: "Tuo figlio, adulto, chiede di nuovo che gli paghiate un debito. La settimana scorsa avevi detto che non l'avreste più fatto. L'altro genitore, davanti a lui, dice: «Paghiamo e basta, così sta tranquillo». Tuo figlio ti guarda.",
      opzioni: [
        { testo: "Ribattere subito, davanti a lui: «No. Sei tu che lo rovini, così non imparerà mai».", ok: 0, esito: "La lite si sposta fra voi due e al figlio arrivano due messaggi opposti. Ognuno resta convinto che il suo modo funzionerebbe, se l'altro collaborasse: è il punto in cui molte coppie di genitori si logorano." },
        { testo: "«Su questo vogliamo darti una risposta sola. Ne parliamo noi due e te la diciamo stasera.» Poi cercate, lontano da lui, una linea che possiate tenere entrambi.", ok: 2, esito: "Rimanda di poche ore, non evita. Al figlio arriva un messaggio unico, e a voi resta lo spazio per discutere le differenze senza usarlo come arbitro. Una linea imperfetta ma comune regge meglio di due linee giuste." },
        { testo: "Lasciar correre per non litigare, e pagare.", ok: 1, esito: "Evita lo scontro di stasera, ma le linee restano due e il «no» della settimana scorsa perde valore. Se succede, riparlatene fra voi a freddo prima della prossima richiesta." }
      ]
    },
    {
      id: "deciso",
      fonte: "Porr, cap. 1 («I genitori di figli con DBP»)",
      titolo: "Deciso per il suo bene",
      contesto: "Tua figlia è adulta. Ti preoccupa che cosa succederà quando non potrai più aiutarla, e hai già organizzato tutto: come verrà gestito il denaro destinato a lei, e chi lo farà. Lei non ne sa ancora niente.",
      opzioni: [
        { testo: "Dirglielo a cose fatte: «Abbiamo sistemato tutto noi, non devi pensare a niente».", ok: 0, esito: "L'intenzione è proteggerla, ma ciò che le arriva può essere «mi considerano incapace, e lo sarò per sempre». Con il disturbo il modo conta più dell'intenzione: una decisione presa senza di lei può costare il rapporto." },
        { testo: "«Penso spesso a quando non potrò più darti una mano, e mi fa paura. Vorrei che decidessimo insieme come organizzarci. Tu come la vedi?»", ok: 2, esito: "Dice la tua paura in prima persona e le lascia voce in una scelta che riguarda la sua vita. Trovare un accordo sarà più lungo e forse meno ordinato, ma sarà anche suo." },
        { testo: "Lasciar perdere tutto e non toccare più l'argomento.", ok: 1, esito: "Evita lo scontro, ma la tua preoccupazione resta intera e lei resta fuori da un discorso che la riguarda. Meglio aprirlo in un momento calmo, partendo da ciò che temi tu." }
      ]
    },
    {
      id: "sospetto",
      fonte: "Porr, cap. 1 («Partner e coniugi») e cap. 5 («Non reagite in base alla logica»)",
      titolo: "«Dimostrami che non è vero»",
      contesto: "Rientri con quaranta minuti di ritardo: c'era una coda in tangenziale e il telefono era scarico. Appena apri la porta, la persona con cui vivi ti dice: «Con chi eri? Lo so che mi nascondi qualcosa».",
      opzioni: [
        { testo: "Ricostruire il tragitto minuto per minuto, mostrare il telefono, cercare prove.", ok: 0, esito: "Sembra la cosa più onesta, ma trasforma la serata in un processo: ogni prova apre una nuova domanda. Molti partner si consumano così, a difendersi senza convincere, perché rispondono al fatto e non alla paura." },
        { testo: "«Quaranta minuti senza notizie: capisco che ti abbia fatto paura. Ero in coda e avevo il telefono scarico. Adesso sono qui.»", ok: 2, esito: "Riconosce la paura, dice il fatto una volta sola e non entra nel processo. Se l'interrogatorio continua, puoi ripetere la stessa frase, senza aggiungere prove. A freddo potrete accordarvi su come avvisarvi dei ritardi." },
        { testo: "«Non ricominciamo», e andare a preparare la cena.", ok: 1, esito: "Evita la lite, ma lascia la paura da sola, e la paura di solito cresce. Meglio nominarla in una frase prima di passare ad altro." }
      ]
    },
    {
      id: "reciproco",
      fonte: "Porr, cap. 1 («Partner e coniugi»), cap. 7 («Il senso di lutto nei partner o coniugi») e cap. 8 («Chiedere quello che si desidera»)",
      titolo: "«E io?»",
      contesto: "Oggi al lavoro hai ricevuto una brutta notizia e vorresti raccontarla. Da settimane, però, ogni sera si parla soltanto delle difficoltà della persona con cui stai. Anche stasera comincia lei.",
      opzioni: [
        { testo: "Tenertela per te: «Ha già i suoi problemi, non è il momento».", ok: 1, esito: "Protegge la serata, ed è una scelta che ogni tanto ha senso. Se diventa la regola, però, la coppia scivola verso l'assistenza: avere bisogno di essere ascoltati è ciò che distingue un partner da chi accudisce." },
        { testo: "Sbottare: «Si parla sempre e solo di te!».", ok: 0, esito: "Il bisogno è legittimo, ma detto così arriva come un'accusa, e la serata finisce sulla difesa o sulla vergogna. Del tuo problema non si parlerà." },
        { testo: "«Oggi ho avuto una giornata pesante e avrei bisogno che mi ascoltassi dieci minuti. Te la senti adesso, o preferisci dopo cena?»", ok: 2, esito: "Chiede con chiarezza una cosa precisa e lascia scegliere il momento. Non è detto che funzioni ogni volta, ma tiene viva la reciprocità e le dà la possibilità di esserci per te." }
      ]
    },
    {
      id: "bravo",
      fonte: "Porr, cap. 1 («Fratelli e sorelle di persone con DBP»)",
      titolo: "Quello che non dà pensieri",
      contesto: "Hai una notizia importante: hai superato una selezione a cui tenevi molto. A cena, però, i tuoi genitori parlano soltanto dell'ultima crisi di tua sorella. Hanno la faccia stanca.",
      opzioni: [
        { testo: "Non dire niente: «Hanno già abbastanza pensieri».", ok: 1, esito: "È ciò che molti fratelli fanno, per non pesare, ed è un gesto d'affetto. Ripetuto negli anni, però, rende invisibili i tuoi bisogni, e anche le tue gioie." },
        { testo: "«Tanto a voi importa solo di lei», e alzarti da tavola.", ok: 0, esito: "La rabbia è comprensibile, ma così ai tuoi genitori arriva un'accusa in più e la tua notizia resta non detta. Di solito segue il senso di colpa." },
        { testo: "«Vedo che siete molto in pensiero. Ho una cosa mia da raccontarvi, e ci tengo: possiamo parlarne dopo cena, noi tre?»", ok: 2, esito: "Riconosce la loro fatica e chiede uno spazio preciso per te. Non toglie niente a tua sorella: ricorda a tutti che in famiglia ci sei anche tu." }
      ]
    },
    {
      id: "inmezzo",
      fonte: "Porr, cap. 1 («Fratelli e sorelle di persone con DBP»); Il modello GET, cap. 5 §4.3.1 (le triangolazioni)",
      titolo: "In mezzo",
      contesto: "Tuo fratello ti scrive: «Mamma e papà mi trattano come un malato. Almeno tu stai dalla mia parte, vero?». Dieci minuti dopo ti chiama tua madre: «Parlagli tu, a te dà retta».",
      opzioni: [
        { testo: "Dare ragione a lui per messaggio e a lei per telefono, poi riferire a ciascuno che cosa ha detto l'altro.", ok: 0, esito: "Sul momento calma tutti e due, ma ti mette al centro di ogni comunicazione. Quando in famiglia si parla attraverso un terzo, prima o poi le due versioni si incontrano, e il terzo ci rimette." },
        { testo: "A lui: «Sento quanto ti pesa sentirti trattato così. Non sono contro di te, e non sono contro di loro: diglielo tu, e se vuoi ti aiuto a trovare le parole». A lei: «Capisco che tu sia in pensiero. Preferisco non fare da tramite: parlategli voi».", ok: 2, esito: "Riconosce ciò che provano tutti e due senza schierarsi e senza portare messaggi. All'inizio può deludere entrambi; nel tempo ti lascia un rapporto diretto con ciascuno." },
        { testo: "Non rispondere a nessuno dei due per qualche giorno.", ok: 1, esito: "Ti protegge, e a volte serve. Senza una parola di spiegazione, però, a lui può sembrare un abbandono e a lei un rifiuto. Basta una riga: «Adesso non riesco, vi rispondo domani»." }
      ]
    },
    {
      id: "unicoamico",
      fonte: "Il modello GET, cap. 5 §4.2 (a chi sono rivolti i gruppi) e §4.3.3 (essere di sostegno senza dire sì a ogni richiesta)",
      titolo: "«Sei l'unica persona che ho»",
      contesto: "Un'amica ti scrive ogni sera, a lungo. Stasera, alle undici: «Sei l'unica persona che mi capisce. Se non ci fossi tu non so cosa farei». Sei molto stanco e domani ti alzi alle sei.",
      opzioni: [
        { testo: "Restare al telefono fino alle due, come le altre sere.", ok: 1, esito: "C'è affetto, e per stasera lei si sente meno sola. Ma un aiuto senza orario non dura: quando non ce la farai più, il rischio è sparire di colpo. E resta intatta l'idea che esisti soltanto tu." },
        { testo: "Leggere e non rispondere, né stasera né nei prossimi giorni.", ok: 0, esito: "Per chi teme di essere lasciato, il silenzio senza spiegazioni è la risposta più dolorosa, e conferma la paura peggiore. Se hai bisogno di una pausa, dilla." },
        { testo: "«Ci tengo a esserci. Stasera ho mezz'ora, poi devo dormire; domani ti chiamo alle sette di sera. E mi chiedo: oltre a me, chi altro può esserci? Ne hai parlato con chi ti segue?»", ok: 2, esito: "Dice che ci sei, dice fin dove, e dà un appuntamento preciso che poi va mantenuto. La domanda sugli altri non è un modo di liberarsi: una rete regge più di una persona sola. Se nelle sue parole senti un rischio per la vita, vale ciò che trovi nella pagina Emergenze." }
      ]
    },
    {
      id: "casacomune",
      fonte: "Il modello GET, cap. 5 §4.2 (i conviventi non famigliari) e §4.3.3 (i limiti si dicono a freddo); Linehan, Handouts, Interpersonal Effectiveness Handout 5 (DEAR MAN)",
      titolo: "La casa in comune",
      contesto: "Dividi la casa con una persona che ha il disturbo. Ha avuto una settimana difficile: ha saltato i suoi turni e la cucina è piena di piatti da giorni. Sei irritato, e non sai se puoi dirglielo.",
      opzioni: [
        { testo: "Lasciare un biglietto sarcastico sul frigorifero.", ok: 0, esito: "Scarica l'irritazione, ma arriva come un giudizio sulla persona, proprio in una settimana in cui la vergogna è già alta. È probabile una lite, o un silenzio lungo." },
        { testo: "Lavare tutto tu, in silenzio: «Sta male, non posso chiederle niente».", ok: 1, esito: "Per una volta può essere un gesto gentile. Come regola, accumula risentimento in te e tratta lei come una persona a cui non si può chiedere nulla. Stare male non cancella gli accordi di casa: li rende da rivedere insieme." },
        { testo: "Aspettare un momento calmo: «So che è stata una settimana dura. I piatti sono lì da martedì e a me pesa trovare la cucina così. Ti chiedo di sistemarli entro domani sera; se ti aiuta, rivediamo i turni».", ok: 2, esito: "Riconosce la settimana difficile, descrive il fatto senza aggettivi, dice che cosa provi e chiede una cosa precisa, lasciando aperta una soluzione. È una richiesta, non un rimprovero." }
      ]
    }
  ]);
})();
