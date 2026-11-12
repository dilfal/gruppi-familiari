/* Percorso in 12 tappe e strumenti per chi sta accanto.
   Fonte principale: Carretta, Gaj, Porcelli, «Il sostegno ai famigliari delle persone con organizzazione borderline di
   personalità», cap. 5 di Visintini (a cura di), Il modello GET per la personalità borderline.
   Dal libro vengono la forma dell'incontro (condivisione, ripresa dei compiti, psicoeducazione), i quattro obiettivi e i
   contenuti. La divisione in dodici tappe, le domande e i compiti sono una proposta dell'app: la pagina lo dichiara.
   I testi sono riformulati, mai copiati. Nessun dato personale. */
(function () {
  var GET5 = "Carretta, Gaj, Porcelli, in Visintini (a cura di), Il modello GET, cap. 5 ";

  window.PERCORSO_INTRO = {
    lead: "Dodici tappe che seguono la forma e gli obiettivi dei gruppi per i familiari del metodo GET: capire il disturbo, comunicare, lavorare sulle proprie emozioni, non restare soli.",
    p: [
      "Nel metodo GET il sostegno ai familiari è un gruppo: cinque o sei famiglie che si incontrano per novanta minuti, una volta al mese, per circa un anno. Ogni incontro ha tre momenti: un giro in cui ciascuno racconta come sta, la ripresa dei compiti dati la volta prima, una parte di spiegazione.",
      "Ogni tappa riprende quei tre momenti e si chiude con un compito da portare nella vita di tutti i giorni. Secondo gli autori le spiegazioni sono il motivo per cui ci si riunisce; ciò che cambia la relazione è il lavoro, fatto strada facendo, su quello che prova chi sta accanto."
    ],
    ritmo: "Tutte le tappe sono aperte e puoi farle nell'ordine che vuoi. Il ritmo consigliato è una tappa ogni una o due settimane, non più di una alla settimana: i compiti hanno bisogno di giorni veri. Nel gruppo, fra un incontro e l'altro passa un mese.",
    nota: [
      "**Dal libro** vengono la forma dell'incontro, i quattro obiettivi e i contenuti di ogni tappa, con la fonte indicata in fondo alla pagina.",
      "**Dall'app** vengono la divisione in dodici tappe, le domande e i compiti: il libro descrive il gruppo, non dà un programma incontro per incontro. Le tappe sono ripartite così: due sul disturbo, tre sulla comunicazione, cinque sulle proprie emozioni, due sul sostegno fra pari.",
      "**Un'app non è un gruppo.** Non c'è chi conduce e non ci sono altre famiglie con cui confrontarsi. Se vicino a te esiste un gruppo per familiari guidato da professionisti, è la strada migliore: queste tappe possono prepararla o accompagnarla."
    ],
    fonte: GET5 + "§1 (il compito esplicito e quello latente), §4.2 (modalità e tecniche di conduzione) e §4.3 (gli obiettivi del gruppo)."
  };

  window.PERCORSO_TEMI = [
    { id: "disturbo", titolo: "Capire il disturbo", obiettivo: "Come si riconosce, da dove viene, che cosa dipende dalla volontà e che cosa no." },
    { id: "comunicazione", titolo: "Comunicare", obiettivo: "Parole che descrivono invece di giudicare, e risposte che non alzano il tono." },
    { id: "emozioni", titolo: "Le tue emozioni", obiettivo: "Accorgerti di ciò che provi, per scegliere tempi e modi invece di reagire." },
    { id: "pari", titolo: "Non da soli", obiettivo: "Parlare con chi vive la stessa situazione, e validare senza annullarsi." }
  ];

  window.PERCORSO = [
    {
      n: 1, tema: "disturbo",
      titolo: "Dare un nome a ciò che accade",
      sommario: "I comportamenti del disturbo, da dove viene, che cosa vuol dire «recupero».",
      apertura: [
        "Nei gruppi per i familiari i primi incontri servono a descrivere il disturbo: i comportamenti che lo caratterizzano e l'idea, oggi condivisa, che nasca dall'incontro fra una vulnerabilità emotiva molto alta e un ambiente che non è riuscito a riconoscere quelle emozioni.",
        "Gli autori scrivono che una diagnosi non chiara è come un buco nero che attira a sé le energie di chi sta male e di chi gli sta accanto. Darle un nome e dei contorni è il primo modo per riprendersene una parte."
      ],
      condivisione: [
        "Come stai tu, in questo periodo? Prova a rispondere senza raccontare come sta la persona che ti è cara.",
        "Che cosa ti ha portato a cominciare proprio adesso?",
        "Che cosa ti aspetti da queste tappe, e che cosa temi?"
      ],
      idee: [
        "Il disturbo ha comportamenti riconoscibili. Conoscerli aiuta a non leggerli come attacchi personali.",
        "All'origine non c'è una causa sola né un colpevole: c'è una sensibilità emotiva molto alta che ha incontrato risposte non adatte a lei.",
        "L'attesa di veder sparire i sintomi lascia posto, col tempo, a un'idea di recupero più ampia: costruire modi propri di stare bene, e una vita che regge."
      ],
      leggi: ["disturbo", "emozioni", "vaso"],
      compito: {
        t: "Fotografare il punto di partenza",
        p: "Chi arriva a un gruppo porta già molti pesi: quelli che si possono contare, come il tempo, le spese e il lavoro, e quelli che non si vedono, come il dolore, il rimpianto e la paura del futuro. Compila «I pesi che porto» e salva la fotografia di oggi: la riprenderai all'ultima tappa.",
        link: [["#/strumenti/pesi", "Apri «I pesi che porto»"]]
      },
      fonte: GET5 + "§4.3.1 (la comprensione della personalità borderline), §3 (il modello di recovery) e §4.2 (pesi oggettivi e soggettivi)."
    },
    {
      n: 2, tema: "disturbo",
      titolo: "Disturbo, carattere, colpa",
      sommario: "Che cosa non è intenzionale, perché la famiglia non è la causa, la colpa che non si vuole lasciare.",
      apertura: [
        "Due domande tornano in ogni gruppo: «Che cosa dipende dal disturbo e che cosa dal suo carattere?» ed «È colpa mia?». Sulla prima il libro è prudente: descrivere i comportamenti tipici del disturbo aiuta a distinguere ciò che non è intenzionale da ciò che appartiene alla persona, ma lo si impara caso per caso, e spesso si oscilla.",
        "Sulla seconda è netto. Le dinamiche faticose di una famiglia (il coinvolgimento totale, i messaggi fatti passare da un terzo, le accuse reciproche) sono risposte comuni a uno stress che non si riesce a capire, non la causa del disturbo. Possono però pesare su quanto è grave e su come va nel tempo.",
        "C'è poi una colpa a cui è difficile rinunciare, perché contiene una speranza: «se l'ho causato io, posso farlo passare io». Lasciarla vuol dire accettare due cose insieme: non ne sei l'origine e non puoi esserne la cura. Puoi migliorare la relazione, e non è poco."
      ],
      condivisione: [
        "Come stai tu, oggi? Parti da te.",
        "Quando ripensi a come tutto è cominciato, che cosa ti rimproveri?",
        "C'è un comportamento che non sai se attribuire al disturbo o al carattere? Descrivilo con i soli fatti, senza aggettivi."
      ],
      ripresa: "Riguarda «I pesi che porto». Quale peso ti ha sorpreso vedere scritto? Ce n'è uno di cui non avevi mai parlato con nessuno?",
      idee: [
        "Sapere che un comportamento fa parte del disturbo non lo rende meno faticoso, ma rende possibile l'empatia per la lotta che c'è dietro.",
        "Dopo anni di convivenza con il disturbo tutti, in famiglia, soffrono e si influenzano a vicenda: non esiste un solo punto in cui tutto comincia.",
        "Imparando a conoscere il disturbo, capita di riconoscere in sé alcune delle stesse fatiche con le emozioni. È un'informazione utile, non una colpa."
      ],
      leggi: ["cause", "familiari", "intenzione"],
      compito: {
        t: "I ruoli che ti ritrovi addosso",
        p: "Chi si sente responsabile della malattia finisce spesso per sentirsi responsabile anche della cura, e si ritrova a fare l'avvocato, l'agente di cura, il coach, perfino il carceriere. Compila «I ruoli che ricopro» e nota quale ti pesa di più.",
        link: [["#/strumenti/ruoli", "Apri «I ruoli che ricopro»"]]
      },
      fonte: GET5 + "§4.3.1, §4.4 (il ruolo del conduttore: colpa e biasimo) e §2 (i ruoli richiesti ai famigliari)."
    },
    {
      n: 3, tema: "comunicazione",
      titolo: "Le parole che usiamo",
      sommario: "Dal vocabolario che giudica a quello che descrive: «crisi» invece di «scenate».",
      apertura: [
        "Il secondo tema del gruppo è la comunicazione, e comincia dal vocabolario. Dire che una persona «fa le scenate» e dire che «è in uno stato di crisi» parla dello stesso momento, ma la seconda frase lo nomina in modo neutro e porta con sé rispetto per la sofferenza. Cambiare le parole non è una gentilezza di facciata: è uno dei modi per interrompere il circolo in cui ci si invalida a vicenda.",
        "C'è anche un vantaggio pratico. Usare le parole di chi cura (crisi, pianificazione, attivazione emotiva, comportamenti autolesivi) permette a casa e curanti di parlare la stessa lingua, senza bisogno di sapere che cosa viene detto nei gruppi."
      ],
      condivisione: [
        "Come stai tu, oggi?",
        "Quali parole usi, anche solo dentro di te, per descrivere i momenti difficili? Scrivile come vengono.",
        "Quali parole usa la persona cara per descrivere te, e che effetto ti fanno?"
      ],
      ripresa: "Riguarda «I ruoli che ricopro». Quale ruolo ti costa di più? Hai pensato a chi potrebbe prenderne una parte?",
      idee: [
        "Le parole che giudicano («scenate», «capricci», «lo fa apposta») chiudono la conversazione; quelle che descrivono la tengono aperta.",
        "Conoscere la cornice del percorso di cura non vuol dire entrare nei suoi contenuti: ciò che si dice nei gruppi resta di chi li frequenta.",
        "Parole nuove non cancellano ciò che provi: servono a dirlo in un modo che l'altra persona possa ascoltare."
      ],
      leggi: ["validazione", "get", "gruppocrisi"],
      compito: {
        t: "Tre frasi da riformulare",
        p: "Nei prossimi giorni, quando ti accorgi di aver detto o pensato una frase che giudica, scrivila nel «Riformulatore di frasi» e cerca la versione che descrive. Tre frasi bastano.",
        link: [["#/strumenti/riformula", "Apri il «Riformulatore di frasi»"]]
      },
      fonte: GET5 + "§4.3.2 (la comunicazione)."
    },
    {
      n: 4, tema: "comunicazione",
      titolo: "Rispondere all'emozione, non all'accusa",
      sommario: "«Non ci sei mai per me»: che cosa dice la frase e che cosa prova chi la dice.",
      apertura: [
        "«Non ci sei mai per me!». Detta a una madre, a un compagno, a una sorella, una frase così chiama subito una difesa: «Ci sono sempre stato!». La risposta è giusta sul contenuto e manca il bersaglio, perché l'accusa parla quasi sempre di un sentimento, la paura di essere lasciati, più che di una convinzione sui fatti.",
        "Il libro propone di resistere alla protesta e alla tentazione di interpretare o giudicare, e di rispondere al sentimento, con calma: «Ci sarò sempre per te, faccio quello che posso, mi dispiace che non sia abbastanza»."
      ],
      condivisione: [
        "Come stai tu, oggi?",
        "Qual è l'accusa che ti ferisce di più? Che cosa ti viene da rispondere?",
        "Quando ti difendi, che cosa stai proteggendo di te?"
      ],
      ripresa: "Riguarda le frasi riformulate. Quale ti è costata più fatica? Ne hai detta una ad alta voce?",
      idee: [
        "Un'accusa ha due livelli: ciò che dice e ciò che prova chi la dice. Si risponde al secondo.",
        "Difendersi sui fatti è legittimo, ma nel momento di tensione alza il tono: può aspettare un momento più calmo.",
        "Rassicurare non è dare ragione. «Mi dispiace che non basti» non significa «hai ragione, non ci sono mai»."
      ],
      leggi: ["comunicare", "curiosi"],
      compito: {
        t: "Una risposta pronta",
        p: "Prendi l'accusa che ti arriva più spesso e prepara, a freddo, una risposta che parli al sentimento. Puoi costruirla con «Costruire una frase validante» e poi metterti alla prova nello scenario «Sei una persona orribile».",
        link: [["#/esercizi/frase", "Costruire una frase validante"], ["#/scenari/accusa", "Scenario: «Sei una persona orribile»"]]
      },
      fonte: GET5 + "§4.3.2 (la comunicazione: rispondere all'accusa)."
    },
    {
      n: 5, tema: "comunicazione",
      titolo: "Quando le parole feriscono",
      sommario: "Né reagire né subire: sottrarsi agli insulti dicendo che si torna.",
      apertura: [
        "Capire il sentimento che sta sotto un insulto non obbliga a restare lì a riceverlo. Il libro indica due cose: a un linguaggio offensivo non si risponde con lo stesso tono; e, se continua, si può imparare a sottrarsi a insulti e minacce, invece di reagire o di subire in silenzio.",
        "Sottrarsi non è punire e non è abbandonare. È dire che cosa fai, per quanto tempo, e che torni."
      ],
      box: { tipo: "attenzione", testo: "Se ci sono aggressioni fisiche o minacce, o se temi per la tua incolumità, la sicurezza viene prima di ogni tecnica: allontanati e chiama il 112. Vedi {{#/emergenze|Emergenze}}." },
      condivisione: [
        "Come stai tu, oggi?",
        "Quando arrivano parole offensive, di solito reagisci o subisci? Che cosa ti succede dopo?",
        "C'è qualcosa, di questi momenti, che non hai mai raccontato a nessuno?"
      ],
      ripresa: "Riguarda la risposta preparata. L'hai usata? Che cosa è successo, in te prima che nell'altra persona?",
      idee: [
        "Fra reagire e subire c'è una terza via: interrompere e tornare.",
        "La frase di uscita si prepara prima e si dice breve: che cosa faccio, quando torno.",
        "Sottrarsi agli insulti non è rifiutare la persona; restare a riceverli non la aiuta."
      ],
      leggi: ["nonpace", "limiti"],
      compito: {
        t: "La frase per interrompere",
        p: "Scrivi, in un momento calmo, la frase con cui ti allontanerai la prossima volta e quella con cui tornerai. Se puoi, dilla prima alla persona cara: «Quando i toni salgono così, esco dalla stanza per dieci minuti e poi torno». Preparala con «Preparare un momento difficile» e tieni a portata di mano «STOP prima di rispondere».",
        link: [["#/esercizi/anticipa", "Preparare un momento difficile"], ["#/esercizi/stop", "STOP prima di rispondere"]]
      },
      fonte: GET5 + "§4.3.2 (affrontare l'abuso verbale) e §4.3.4 (mantenere la calma e i confini, senza rifiutare)."
    },
    {
      n: 6, tema: "emozioni",
      titolo: "Accorgersi della propria attivazione",
      sommario: "Il contagio emotivo, e perché regole e limiti non si mettono a caldo.",
      apertura: [
        "Da qui il percorso si sposta su di te. Per gli autori è questo, più delle spiegazioni, il vero oggetto del gruppo: le informazioni sul disturbo sono il motivo per cui ci si riunisce, il lavoro sulle proprie emozioni è ciò a cui si arriva.",
        "Il punto di partenza è il contagio. Quando una persona è molto attivata, chi le sta accanto si attiva a sua volta, e lo scambio diventa più conflittuale di quanto fosse all'inizio. Accorgersi della propria attivazione, e di quella degli altri in casa, permette di scegliere tempi e modi. Ne viene una regola pratica: aspettative e limiti si spiegano in un tempo di calma, non si lanciano come ultimatum a metà di una discussione."
      ],
      condivisione: [
        "Come stai tu, oggi? Dai un numero da 0 a 10 alla tensione che senti in questo momento.",
        "Da che cosa ti accorgi che stai per perdere la calma? Corpo, voce, pensieri.",
        "Qual è l'ultima cosa che hai detto a caldo e che avresti voluto dire in un altro momento?"
      ],
      ripresa: "Riguarda la frase per interrompere. Ti è servita? Se non l'hai usata, che cosa te l'ha impedito?",
      idee: [
        "Le emozioni si contagiano in tutte e due le direzioni: la tua calma pesa quanto la tua agitazione.",
        "Una critica può essere presa come una sfida. Non rispondere con lo stesso tono è ciò che evita di rendere più forti sentimenti già intensi.",
        "Un ultimatum detto a metà lite non è un limite. Lo diventa se lo spieghi con calma, prima."
      ],
      leggi: ["tueemozioni", "vaso"],
      compito: {
        t: "Il termometro",
        p: "Per una settimana, una volta al giorno e ogni volta che la tensione sale, fai «Che cosa provo io, adesso»: un numero, un punto del corpo, una parola. Poi mettiti alla prova nello scenario «La regola detta a caldo».",
        link: [["#/esercizi/provo", "Che cosa provo io, adesso"], ["#/scenari/caldo", "Scenario: «La regola detta a caldo»"]]
      },
      fonte: GET5 + "§1 (l'elaborazione delle emozioni come compito latente del gruppo) e §4.3.3 (il lavoro sulle proprie emozioni)."
    },
    {
      n: 7, tema: "emozioni",
      titolo: "L'emozione che viene prima",
      sommario: "Emozione primaria e reazioni automatiche; i fatti, le interpretazioni, le parole per dirlo.",
      apertura: [
        "Nei gruppi dei familiari si lavora con lo stesso metodo dei gruppi di chi è in cura: riconoscere l'emozione primaria e distinguerla dalle reazioni automatiche che la seguono; ricostruire quali fatti, e quali letture dei fatti, l'hanno fatta nascere; trovare parole precise per dirla.",
        "Ciò che si vede da fuori (la voce che si alza, la critica, il silenzio) di solito è una seconda mossa. Un attimo prima c'era altro: paura, impotenza, tristezza. È di quello che vale la pena parlare."
      ],
      condivisione: [
        "Come stai tu, oggi? Prova a usare una parola più precisa di «bene» o «male».",
        "Qual è l'emozione che gli altri vedono più spesso in te? E quella che non mostri quasi mai?",
        "Che cosa pensi che succederebbe, se mostrassi la seconda?"
      ],
      ripresa: "Riguarda il termometro. In quali momenti il numero è salito di più? Che cosa hai notato nel corpo?",
      idee: [
        "L'emozione primaria è la prima risposta a ciò che accade. Poi arrivano le reazioni automatiche, che spesso la coprono.",
        "Fra il fatto e l'emozione c'è quasi sempre un'interpretazione. Vederla è il primo passo per poterla mettere in dubbio.",
        "Un vocabolario emotivo più ricco serve a spiegare con precisione che cosa provi, a te prima che agli altri."
      ],
      leggi: ["tueemozioni", "emozioni", "gruppiemozionicorpo"],
      compito: {
        t: "Due episodi alla moviola",
        p: "Scegli due momenti della settimana in cui hai reagito in un modo che non ti è piaciuto e ripassali con «L'emozione che viene prima»: il fatto, il pensiero, ciò che si è visto, ciò che c'era sotto.",
        link: [["#/strumenti/emozioni", "Apri «L'emozione che viene prima»"]]
      },
      fonte: GET5 + "§4.3.3 (il lavoro sulle proprie emozioni: emozione primaria, eventi e interpretazioni, vocabolario emotivo)."
    },
    {
      n: 8, tema: "emozioni",
      titolo: "«Lo fa apposta?»",
      sommario: "Tenere d'occhio i propri schemi di pensiero, a cominciare dall'intenzione attribuita.",
      apertura: [
        "Come a chi è in cura si chiede di osservare le emozioni e i pensieri che si ripetono, lo stesso lavoro tocca a chi sta accanto. Il libro prende a esempio lo schema più frequente: l'idea che i comportamenti della persona cara siano voluti e diretti contro di te. «Ogni volta che vado via combina qualcosa: lo fa apposta, per farmi tornare».",
        "Questa lettura porta con sé una risposta ostile. L'alternativa proposta non è giustificare: è spostare lo sguardo. «Ogni volta che vado via combina qualcosa: forse, quando resta da sola, prova qualcosa di molto doloroso». I fatti sono gli stessi; cambiano la relazione e ciò a cui si presta attenzione, cioè i segnali emotivi che vengono prima del comportamento."
      ],
      condivisione: [
        "Come stai tu, oggi?",
        "In quale situazione ti capita più spesso di pensare «lo fa apposta»?",
        "Che cosa provi quando lo pensi? E che cosa ti viene da fare?"
      ],
      ripresa: "Riguarda i due episodi alla moviola. Qual era l'emozione che veniva prima? Si ripete?",
      idee: [
        "Leggere un comportamento come effetto di un funzionamento diverso dal tuo rende la relazione meno ostile e meno centrata su di te.",
        "La seconda lettura è un'ipotesi, non una certezza: si verifica con una domanda, non con una spiegazione.",
        "Capire non è accettare tutto. Il limite resta possibile, ed è il tema della prossima tappa."
      ],
      leggi: ["intenzione", "ipermentalizzazione", "abbandono"],
      compito: {
        t: "La seconda lettura",
        p: "La prossima volta che pensi «lo fa apposta», fermati e fai «Rileggere l'intenzione»: il fatto senza aggettivi, la tua prima lettura, che cosa può aver provato un attimo prima. Poi mettiti alla prova nello scenario «Ogni volta che esco…».",
        link: [["#/esercizi/rileggi", "Rileggere l'intenzione"], ["#/scenari/esco", "Scenario: «Ogni volta che esco…»"]]
      },
      fonte: GET5 + "§4.3.3 (monitorare i propri schemi di pensiero: la presunta intenzionalità)."
    },
    {
      n: 9, tema: "emozioni",
      titolo: "Sostenere non è dire sempre sì",
      sommario: "La paura del «no», le aspettative dette con chiarezza, un limite per volta.",
      apertura: [
        "Stabilire limiti e dire in modo chiaro e onesto che cosa ci si aspetta è più difficile di quanto sembri. Molti familiari finiscono per cedere a ogni richiesta, per paura che la frustrazione di un «no» abbia conseguenze spaventose e pesanti da gestire. Nel gruppo si impara a distinguere l'essere di sostegno dalla tentazione di autorizzare tutto, anche a proprio danno.",
        "Il metodo viene dalle tappe precedenti: accorgerti della tua attivazione, capire di che cosa hai paura, e parlare delle aspettative in un tempo di calma."
      ],
      box: { tipo: "nota", testo: "Se a un tuo «no» seguono minacce di farsi del male, non tenere questa paura per te: parlane con chi cura la persona cara e leggi {{#/guida/sicurezza|Autolesionismo e pensieri suicidari}}." },
      condivisione: [
        "Come stai tu, oggi?",
        "A che cosa hai detto sì, ultimamente, mentre avresti voluto dire no?",
        "Di che cosa hai paura, esattamente, quando pensi di dire no?"
      ],
      ripresa: "Riguarda la seconda lettura. Ha cambiato la prima frase che ti è venuta da dire?",
      idee: [
        "Sostenere non vuol dire accontentare. Si può riconoscere un sentimento e non cedere a una richiesta.",
        "Un limite si prepara a freddo e si dice in poche parole, senza difendersi a lungo.",
        "I problemi che sembrano insormontabili si affrontano a piccoli passi: un limite per volta, il più importante."
      ],
      leggi: ["limiti", "nonpace", "comportamento"],
      compito: {
        t: "Un limite, detto a freddo",
        p: "Scegli una sola richiesta a cui non vuoi più dire sì. Prepara le parole con «Preparare una richiesta (DEAR MAN)» e dille in un momento tranquillo. Prima, mettiti alla prova nello scenario «La richiesta di denaro».",
        link: [["#/esercizi/dear", "Preparare una richiesta (DEAR MAN)"], ["#/scenari/denaro", "Scenario: «La richiesta di denaro»"]]
      },
      fonte: GET5 + "§4.3.3 (stabilire i limiti; essere supportivi senza autorizzare ogni richiesta)."
    },
    {
      n: 10, tema: "emozioni",
      titolo: "Ottimisti e realisti",
      sommario: "Fra «adesso cambia tutto» e «non cambierà mai»: vedere i piccoli cambiamenti.",
      apertura: [
        "Anche chi sta accanto oscilla fra due estremi: idealizzare il cambiamento e non credere più nel futuro. In tutti e due i casi sfuggono i piccoli miglioramenti che intanto avvengono. Restare ottimisti e realisti insieme, scrivono gli autori, è un compito che richiede determinazione.",
        "Nel gruppo si impara a osservare i cambiamenti anche piccoli, nei comportamenti e nella relazione, e a validarli, cioè a riconoscerli a voce. È un modo per misurare i progressi quando sono lenti e altalenanti, come quasi sempre accade."
      ],
      condivisione: [
        "Come stai tu, oggi?",
        "In questo periodo sei più dalla parte di «adesso cambia tutto» o di «non cambierà mai niente»?",
        "Qual è un cambiamento piccolo, tuo o della persona cara, che hai visto negli ultimi mesi e non hai detto a nessuno?"
      ],
      ripresa: "Riguarda il limite detto a freddo. Com'è andata? Che cosa hai provato tu, mentre lo dicevi e dopo?",
      idee: [
        "I progressi sono lenti e altalenanti: si vedono guardando i mesi, non i giorni.",
        "Un passo indietro non cancella i passi fatti.",
        "Notare un cambiamento e dirlo è una forma di validazione. Vale anche per i tuoi."
      ],
      leggi: ["recupero", "curadise"],
      compito: {
        t: "Una riga al giorno",
        p: "Per due settimane scrivi nel «Quaderno dei piccoli cambiamenti» una cosa al giorno che hai notato: nella persona cara, in te, o fra voi. Quando puoi, dilla anche a voce. Poi mettiti alla prova nello scenario «Il passo indietro».",
        link: [["#/strumenti/quaderno", "Apri il «Quaderno dei piccoli cambiamenti»"], ["#/scenari/passoindietro", "Scenario: «Il passo indietro»"]]
      },
      fonte: GET5 + "§4.3.1 (osservare e validare i cambiamenti, anche piccoli) e §4.3.3 (restare ottimisti e realisti)."
    },
    {
      n: 11, tema: "pari",
      titolo: "Parlare di ciò di cui non si parla",
      sommario: "Uno spazio sicuro per i temi che si tacciono, e come cercarlo.",
      apertura: [
        "L'ultimo obiettivo del gruppo è il sostegno fra pari: uno spazio sicuro dove parlare di ciò che altrove si tace (i gesti autolesivi, i pensieri di suicidio, la rabbia, il rifiuto, la tristezza) in un modo che tenga insieme il rispetto di sé e il legame con l'altro. Chi partecipa racconta il conforto di scoprire che difficoltà credute soltanto proprie sono anche di altre famiglie.",
        "Un'app non è un gruppo e questo non può dartelo. Può aiutarti a preparare il passo: scegliere a chi parlare e che cosa dire per primo."
      ],
      condivisione: [
        "Come stai tu, oggi?",
        "Qual è la cosa di cui non parli con nessuno?",
        "Chi, fra le persone che conosci, potrebbe ascoltarla senza giudicare e senza darti subito una soluzione?"
      ],
      ripresa: "Riguarda il quaderno. Che cosa hai notato? Ne hai detta almeno una a voce alla persona cara?",
      idee: [
        "Condividere non sempre alleggerisce subito: ascoltando la sofferenza degli altri, il senso di impotenza può anche crescere. Imparare a starci, senza pretendere di risolverlo, fa parte del lavoro.",
        "I gruppi in cui si impara qualcosa insieme sono vissuti come più di sostegno di quelli in cui ci si sfoga soltanto.",
        "Avere un luogo proprio per dubbi e domande evita di portarli nello spazio di cura della persona cara."
      ],
      leggi: ["familiari", "perchegruppo", "sicurezza"],
      compito: {
        t: "Un passo fuori",
        p: "Fai una di queste due cose. Chiedi al Centro di salute mentale, al medico di base o a chi segue la persona cara se nella tua zona esiste un gruppo per familiari. Oppure scegli una persona di fiducia e raccontale una cosa che non hai mai detto. Prima, guarda come stai con «Il mio livello di sovraccarico».",
        link: [["#/esercizi/checkin", "Il mio livello di sovraccarico"]]
      },
      fonte: GET5 + "§4.3.4 (il supporto tra pari), §4.1 (perché i gruppi) e §4.3.1 (un luogo per dubbi e domande)."
    },
    {
      n: 12, tema: "pari",
      titolo: "Validare senza cedere, e guardare la strada fatta",
      sommario: "Validare non è pacificare; calma e confini; che cosa è cambiato da quando hai cominciato.",
      apertura: [
        "Nel gruppo la validazione si impara prima di tutto fra pari: ascoltare e riconoscere il punto di vista di un altro familiare, senza per questo dargli ragione. È più facile che con il proprio caro, ed è lì che si vede la differenza fra validare e pacificare. Validare per evitare il conflitto porta in fretta all'esaurimento; validare davvero vuol dire reggere le differenze di sguardo e di sentimento, accettando le percezioni dell'altro e anche le proprie.",
        "Mantenere la calma, tenere i confini, non respingere: è una combinazione che si impara, e che tende a rinforzarsi da sola perché di solito calma la tempesta."
      ],
      condivisione: [
        "Come stai tu, oggi? Rileggi che cosa avevi scritto alla prima tappa.",
        "Che cosa è cambiato in te, più che nella persona cara, da quando hai cominciato?",
        "Che cosa vuoi continuare a fare, e con chi?"
      ],
      ripresa: "Riguarda il passo fuori. L'hai fatto? Com'è stato parlarne?",
      idee: [
        "Riconoscere un sentimento senza mettersi sulla difensiva, e non cedere alle richieste difficili che non si possono negoziare: sono due compiti, e si tengono insieme.",
        "Chi valida l'altro invalidando sé stesso non sta validando: sta evitando il conflitto.",
        "Imparare, condividere e far conoscere il disturbo aiuta la propria famiglia e anche le altre."
      ],
      leggi: ["nonpace", "validazione"],
      compito: {
        t: "Rifare la fotografia",
        p: "Compila di nuovo «I pesi che porto»: lo strumento mette la fotografia di oggi accanto alla prima. Poi apri «I miei appunti», rileggi la strada fatta e, se vuoi conservarla, salvala in un file o stampala. Il gruppo descritto nel libro dura circa un anno e poi finisce; queste tappe restano aperte, e puoi rifarle.",
        link: [["#/strumenti/pesi", "Apri «I pesi che porto»"], ["#/appunti", "Apri «I miei appunti»"]]
      },
      fonte: GET5 + "§4.3.4 (il supporto tra pari: validazione, calma e confini) e §4.2."
    }
  ];

  /* ---------- strumenti ---------- */
  window.STRUMENTI = [
    {
      id: "riformula", tipo: "riformula",
      titolo: "Riformulatore di frasi",
      scopo: "Passare da una frase che giudica a una che descrive, senza rinunciare a dire ciò che provi.",
      durata: "3 minuti",
      intro: [
        "Scrivi la frase così come ti viene. Lo strumento non capisce le frasi: riconosce soltanto alcune parole che di solito giudicano e ti propone un modo più neutro di dire la stessa cosa. La frase nuova la scrivi tu, con le tue parole."
      ],
      domande: [
        "**Il fatto.** Che cosa è successo, come lo riprenderebbe una telecamera? Oggi, non «sempre».",
        "**Il suo stato.** Che cosa può provare la persona cara in quel momento? È un'ipotesi, non una certezza.",
        "**Il tuo.** Che cosa provi tu, e di che cosa hai bisogno? Dillo con «io», non con «tu sei»."
      ],
      // [espressione regolare sul testo senza accenti, parola che giudica, alternativa che descrive, nota, dal libro?]
      coppie: [
        ["scenat", "«fa le scenate»", "«è in uno stato di crisi»", "Nomina il momento in modo neutro e riconosce che c'è sofferenza.", true],
        ["apposta", "«lo fa apposta»", "«forse in quel momento prova qualcosa di molto doloroso»", "Sposta l'attenzione dall'intenzione ai segnali che vengono prima.", true],
        ["manipol", "«mi manipola»", "«sta chiedendo qualcosa nel solo modo che in questo momento le riesce»", "Descrive un bisogno espresso male, non un piano contro di te. Il limite resta possibile.", false],
        ["ricatt", "«mi ricatta»", "«mi sta dicendo quanto ha paura, in un modo che mi spaventa»", "Se parla di farsi del male prendila sempre sul serio: vedi la pagina Emergenze.", false],
        ["esager|dramm|tragedi", "«esagera», «fa un dramma»", "«per lei, in questo momento, è davvero così intenso»", "L'intensità non è scelta: è il modo in cui l'emozione arriva.", false],
        ["capricc|viziat", "«fa i capricci»", "«in questo momento non riesce a reggere un no»", "Descrive una difficoltà, non un difetto.", false],
        ["attenzion", "«vuole attirare l'attenzione»", "«ha bisogno di essere vista e non trova un altro modo per dirlo»", "Il bisogno è vero anche quando il modo è faticoso.", false],
        ["pigr|svogliat|voglia di (fare|far) (niente|nulla)|fannullon", "«è pigra», «non ha voglia»", "«in questo momento non ce la fa», «sta evitando qualcosa che la spaventa»", "Spesso dietro c'è l'evitamento, non la mancanza di volontà.", false],
        ["egois|pensa solo a se", "«è egoista»", "«in questo momento il dolore le prende tutto lo spazio»", "Descrive lo stato di ora, non la persona.", false],
        ["pazz|matt[ao]\\b|fuori di testa|isteric", "«è fuori di testa»", "«è molto attivata», «è fuori dalla sua finestra di tolleranza»", "Usa le parole di chi cura: parlano di uno stato che passa.", false],
        ["\\b(sempre|mai|ogni volta|tutte le volte|di continuo)\\b", "«sempre», «mai», «ogni volta»", "il fatto di oggi: che cosa, quando", "Le generalizzazioni si contestano; un fatto preciso si può ascoltare.", false]
      ],
      fonte: GET5 + "§4.3.2 (l'esempio «stato di crisi» al posto di «scenate») e §4.3.3 («lo fa apposta»). Le altre coppie applicano lo stesso principio e sono una proposta dell'app; sul descrivere senza giudicare: Linehan, DBT Skills Training Handouts and Worksheets, Mindfulness Handout 5."
    },
    {
      id: "emozioni", tipo: "emozioni",
      titolo: "L'emozione che viene prima",
      scopo: "Ricostruire un episodio: il fatto, il pensiero, ciò che si è visto di te e ciò che c'era sotto.",
      durata: "5 minuti",
      intro: [
        "Scegli un momento in cui hai reagito in un modo che non ti è piaciuto. Ripercorrilo con calma, a distanza: non serve farlo mentre la tensione è alta."
      ],
      mostrate: ["rabbia", "critica", "voce alta", "freddezza", "sarcasmo", "silenzio", "controllo", "fretta di risolvere", "pianto", "andarsene"],
      primarie: ["paura", "impotenza", "tristezza", "vergogna", "senso di colpa", "solitudine", "stanchezza", "delusione", "umiliazione", "preoccupazione"],
      fonte: GET5 + "§4.3.3 (riconoscere l'emozione primaria e distinguerla dalle reazioni automatiche; eventi e interpretazioni; vocabolario emotivo). Gli elenchi di parole sono una proposta dell'app."
    },
    {
      id: "pesi", tipo: "pesi",
      titolo: "I pesi che porto",
      scopo: "Guardare, uno per uno, i pesi che si possono contare e quelli che non si vedono.",
      durata: "5 minuti",
      intro: [
        "Il libro distingue due tipi di peso. Quelli **oggettivi** si possono contare: tempo, soldi, lavoro. Quelli **soggettivi** non si vedono da fuori: dolore, rimpianto, paura. Per ogni voce segna quanto pesa oggi. Non c'è un punteggio e non è un test: è una fotografia, da confrontare con la prossima."
      ],
      scala: ["Per niente", "Un po'", "Molto", "Moltissimo"],
      gruppi: [
        { id: "ogg", titolo: "Pesi oggettivi", voci: [
          ["tempo", "Il tempo e le energie spesi nei rapporti con i servizi e con chi cura"],
          ["spese", "Le spese"],
          ["ricerca", "La ricerca di altre cure o di altre strade"],
          ["altri", "Il tempo e le attenzioni tolti agli altri membri della famiglia"],
          ["casa", "La vita di casa stravolta, i conflitti che coinvolgono tutti"],
          ["progetti", "I miei progetti personali, fermi"],
          ["lavoro", "Il lavoro ridotto o lasciato"],
          ["sociale", "Meno vita sociale; rapporti con gli altri diradati o rovinati"]
        ] },
        { id: "sogg", titolo: "Pesi soggettivi", voci: [
          ["dolore", "Il dolore di vedere quanto soffre"],
          ["attese", "Le aspettative deluse sul suo percorso di vita"],
          ["rimpianto", "Il rimpianto per ciò che avrebbe potuto essere"],
          ["futuro", "La preoccupazione per il futuro"],
          ["stigma", "Lo stigma: il giudizio degli altri sulla persona cara, su di me, sulla famiglia"],
          ["sfiducia", "La sfiducia dopo cure che non hanno funzionato, allontanamenti o rifiuti"],
          ["alternative", "Il timore che non ci siano altre possibilità di cura"]
        ] }
      ],
      fonte: GET5 + "§4.2 (i «pesi oggettivi» e il «peso soggettivo» con cui i famigliari arrivano al gruppo). La scala a quattro livelli e il confronto nel tempo sono una proposta dell'app, non uno strumento validato."
    },
    {
      id: "ruoli", tipo: "ruoli",
      titolo: "I ruoli che ricopro",
      scopo: "Vedere quali ruoli ti ritrovi addosso, quanto spesso, e quale potresti posare o dividere.",
      durata: "4 minuti",
      intro: [
        "Ai familiari viene spesso chiesto, o capita di prendersi, ruoli che non sono quelli di un genitore, di un partner, di un fratello o di un amico. Il libro ne nomina quattro e osserva che lo stress di reggerli a lungo riduce proprio la capacità di essere d'aiuto, a spese della salute e della vita di ogni giorno."
      ],
      scala: ["Mai", "A volte", "Spesso", "Quasi sempre"],
      voci: [
        ["avvocato", "L'avvocato", "Ti occupi delle questioni legali che possono nascere, e spesso anche di spiegare, trattare e rimediare con gli altri."],
        ["cura", "L'agente di cura", "Fai in modo che la terapia con i farmaci sia seguita nel modo giusto: dosi, orari, appuntamenti."],
        ["coach", "Il coach", "Motivi e incoraggi nei momenti di sconforto o di difficoltà."],
        ["carceriere", "Il carceriere", "Presidi lo spazio in cui vive: controlli, sorvegli, tieni d'occhio."]
      ],
      nota: "Non si tratta di smettere da un giorno all'altro. Alcuni compiti, come seguire i farmaci o vigilare in un periodo di rischio, vanno discussi con chi cura: chi fa che cosa, e fino a quando.",
      fonte: GET5 + "§2 (i ruoli richiesti ai famigliari: avvocato, agente di cura, coach, carceriere) e §4.4 (i famigliari non possono costituire la cura). Le domande sono una proposta dell'app."
    },
    {
      id: "quaderno", tipo: "quaderno",
      titolo: "Quaderno dei piccoli cambiamenti",
      scopo: "Annotare i cambiamenti piccoli, nella persona cara, in te e fra voi, per vederli e per dirli.",
      durata: "1 minuto al giorno",
      intro: [
        "Quando si oscilla fra l'attesa di un cambiamento rapido e la convinzione che non cambierà nulla, i miglioramenti piccoli sfuggono. Scrivine uno alla volta, con i soli fatti: «Stasera ha detto che era arrabbiata, invece di uscire sbattendo la porta». «Ho aspettato dieci minuti prima di rispondere».",
        "Notarli è metà del lavoro. L'altra metà è validarli, cioè dirli a voce: per questo ogni riga ha una casella «Detto a voce»."
      ],
      chi: [["suo", "Nella persona cara"], ["mio", "In me"], ["noi", "Fra noi"]],
      fonte: GET5 + "§4.3.1 (osservare le modifiche nei comportamenti e nelle relazioni, anche piccole, e validarle) e §4.3.3 (i piccoli miglioramenti che non si colgono). La forma del quaderno è una proposta dell'app."
    }
  ];
})();
