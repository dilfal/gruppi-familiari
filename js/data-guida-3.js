/* Dieci capitoli tratti da «Il modello GET»: la parte «Come funziona dentro» (cap. 1: Visintini, Baldin, Vai)
   e i gruppi del percorso (cap. 2, 3 e 4), che entrano nella parte «Il percorso di cura».
   Testi riformulati, mai copiati. Nessun dato personale. Stesso formato di data-guida.js, con un campo in più:

     approf: { t: "Titolo", p: ["…"], l: ["…"], rif: "dove sta nel libro" }

   È il secondo livello di lettura: un riquadro apribile con il termine tecnico, il meccanismo e il riferimento.
   In fondo al file: l'ordine dei capitoli e la loro divisione in parti (window.GUIDA_PARTI). */
(function () {
  var NUOVI = [
  {
    id: "vaso",
    titolo: "Il vaso sempre colmo: la disregolazione emotiva",
    sommario: "Soglia bassa, reazione intensa, ritorno lento: perché una goccia basta.",
    minuti: 9,
    fonte: "Visintini, Baldin, Vai, in Visintini (a cura di), Il modello GET, cap. 1 §3 (regolazione emotiva e correlati neurali), §5 (la disregolazione emotiva) e §6 (impulsività e ipersensibilità).",
    sezioni: [
      {
        t: "Che cosa vuol dire «disregolazione»",
        p: [
          "Regolare un'emozione non significa non provarla. Significa riuscire a fare tre cose, quasi sempre senza accorgersene: riconoscere che cosa si sta provando; ridurre il contatto con ciò che la alimenta; frenare le risposte che le vanno dietro, cioè i pensieri, le immagini, i giudizi e i gesti che la fanno crescere.",
          "Si parla di **disregolazione emotiva** quando queste tre operazioni non riescono. L'attivazione del corpo e della mente sale oltre il punto in cui la persona può governarla, e ciò che lei sente è di essere «fuori controllo». È uno stato di sofferenza intensa, da cui si cerca di uscire in fretta e con i mezzi che si hanno: da qui i pensieri e i comportamenti impulsivi.",
          "Gli autori del metodo GET preferiscono parlare di disregolazione emotiva, o di «organizzazione borderline di personalità», invece che di «disturbo»: sono parole che descrivono un modo di funzionare, non un'etichetta."
        ]
      },
      {
        t: "Tre caratteristiche della vulnerabilità emotiva",
        p: ["Alla base c'è una vulnerabilità emotiva che si può descrivere con tre caratteristiche. Compaiono insieme, e ognuna rende più pesanti le altre."],
        l: [
          "**Soglia bassa.** Basta uno stimolo piccolo, che la maggior parte delle persone noterebbe appena, per accendere un'emozione forte.",
          "**Reazione intensa.** Una volta accesa, l'emozione arriva a un'intensità molto alta.",
          "**Ritorno lento.** Di solito un'emozione sale, raggiunge il picco e scende in un tempo che va da pochi secondi a pochi minuti. Qui resta alta molto più a lungo, tanto da dare l'impressione che non finirà. E finché non è scesa, basta poco per riaccenderla."
        ],
        approf: {
          t: "Che cosa accade nel cervello",
          p: [
            "La regolazione delle emozioni dipende da un insieme di aree che lavorano in rete, il **circuito cortico-limbico**. Le **amigdale** (due piccole strutture nella parte anteriore dei lobi temporali) rispondono agli stimoli emotivamente rilevanti, soprattutto alle minacce, e lo fanno in modo rapidissimo, anche prima che lo stimolo sia percepito in modo cosciente. L'**insula** integra i segnali che arrivano dall'interno del corpo (battito, respiro, tensione dei visceri) con ciò che si pensa e si prova. Le **cortecce prefrontali** hanno soprattutto un compito di regolazione: valutano lo stimolo, lo collocano nel contesto e modulano la risposta delle amigdale.",
            "Secondo il modello della «doppia via» di LeDoux, l'informazione su uno stimolo minaccioso raggiunge le amigdale per due strade. La **via alta** passa dalla corteccia: è più lenta, ma porta i dettagli e il contesto. La **via bassa** arriva direttamente dal talamo, aggirando la corteccia: è veloce e produce subito una risposta di attacco o fuga, senza il tempo di valutare la situazione.",
            "Negli studi sulle persone con diagnosi di disturbo borderline si osserva, in media, una risposta più forte di amigdala e insula, un'attivazione minore delle aree prefrontali e un controllo «dall'alto» meno efficace delle seconde sulle prime. Si osserva anche una ridotta **abituazione**: di norma, davanti a uno stimolo negativo che si ripete, la risposta dell'amigdala cala; qui tende invece a crescere. È la traduzione neurobiologica di ciò che si vede nella vita di ogni giorno: le esperienze dolorose ripetute non «temprano», ma rendono più sensibili.",
            "Sono correlati misurati su gruppi di persone, non la prova di un «guasto» né un esame con cui si fa una diagnosi. Descrivono un modo di funzionare che, come si vedrà nei capitoli successivi, la terapia può modificare."
          ],
          rif: "Il modello GET, cap. 1 §3 e §5, «Approfondimento sui correlati neurali della disregolazione emotiva»."
        }
      },
      {
        t: "La finestra di tolleranza",
        p: [
          "Nell'arco di una giornata l'attivazione di ciascuno di noi sale e scende: più in alto davanti a ciò che agita, più in basso davanti a ciò che calma. Finché queste oscillazioni restano dentro un certo intervallo, si riesce a pensare, a scegliere e a stare in relazione. Daniel Siegel ha chiamato questo intervallo **finestra di tolleranza**.",
          "Quando l'attivazione esce dalla finestra verso l'alto si entra nell'**iperattivazione**: agitazione, ansia, allarme, sensazione di non potersi fermare. Quando esce verso il basso si entra nell'**ipoattivazione**: ci si sente spenti, svuotati, lontani. In tutti e due i casi il malessere è profondo e la persona cerca di rientrare.",
          "Chi ha una disregolazione emotiva ha una finestra stretta: gli eventi comuni della vita di relazione bastano a portarlo fuori. Per questo tende a evitare ciò che potrebbe attivarlo e vive in uno stato di allerta quasi continuo, con il timore che arrivi di nuovo quell'umore opprimente che sente come parte di sé e di cui non riesce a liberarsi."
        ]
      },
      {
        t: "Perché una goccia basta",
        p: [
          "Gli autori usano un'immagine semplice: il vaso che trabocca per una goccia. Nelle persone con questo funzionamento il vaso è **sempre colmo**. Il sistema di allarme è acceso da tempo, forse da sempre, e si è specializzato nel restare vigile e nel rispondere in fretta.",
          "Vista da fuori, la reazione sembra sproporzionata, perché chi guarda vede soltanto la goccia: una frase, un ritardo, uno sguardo. Vista da dentro è l'ultimo carico su un sistema già al limite. È difficile immaginare che il vaso sia sempre pieno, ed è per questo che il comportamento appare incomprensibile."
        ],
        approf: {
          t: "Stress, cortisolo e l'ipotesi dell'adattamento",
          p: [
            "Uno stato di allerta cronico comporta un rilascio di adrenalina e cortisolo più alto e più prolungato del normale. Gli studi citati dagli autori collegano le esperienze stressanti dell'infanzia e dell'adolescenza a una regolazione alterata dell'asse ipotalamo-ipofisi-surrene (il sistema che governa la risposta allo stress) e a una connessione meno efficace fra amigdala e aree prefrontali. Le aree più esposte sono proprio quelle che servono a regolare le emozioni, perché maturano a lungo, in parte fino all'adolescenza, e sono ricche di recettori per il cortisolo.",
            "Alcuni ricercatori (Teicher e colleghi) propongono di non leggere queste differenze soltanto come un danno. Potrebbero essere un adattamento: un cervello cresciuto in un ambiente sentito come minaccioso impara a riconoscere il pericolo il più presto possibile. Nell'immediato questo protegge. Il costo arriva dopo, quando la vita di relazione si fa più varia e complessa e quel sistema continua a segnalare pericolo dove non c'è."
          ],
          rif: "Il modello GET, cap. 1 §6, «Approfondimenti sui correlati neurali»."
        }
      },
      {
        t: "Impulsività: una reazione, non un difetto di carattere",
        p: [
          "Per impulsività si intende la tendenza ad agire senza controllo e senza pianificazione, con esiti che non giovano a chi agisce. Le persone con organizzazione borderline vengono spesso descritte così. Gli autori invitano però a guardare **quando** l'impulsività compare: è la risposta a un'emozione diventata intollerabile, un tentativo di uscire dalla sofferenza.",
          "Usata da sola, la parola «impulsiva» diventa un'etichetta che svaluta. Persone che dall'esterno sembrano aggressive o pericolose sono spesso insicure, timide e spaventate. Sotto il comportamento ci sono sentimenti cronici e diffusi: paura, insicurezza, senso di non valere, precarietà."
        ]
      },
      {
        t: "Che cosa cambia per te",
        l: [
          "Quando una reazione ti sembra esagerata, prova a chiederti quanto era pieno il vaso, non quanto era grande la goccia.",
          "Nel pieno dell'attivazione le spiegazioni e i ragionamenti arrivano poco: è il momento di abbassare i toni e di rimandare il discorso. Vedi {{#/guida/comunicare|Comunicare quando la tensione sale}}.",
          "Dopo il picco serve tempo. Se riprendi subito l'argomento, è facile che l'emozione si riaccenda.",
          "Riconoscere l'emozione prima di parlare del comportamento aiuta a rientrare nella finestra. Vedi {{#/guida/validazione|La validazione}}."
        ],
        box: { tipo: "nota", testo: "Capire il meccanismo non vuol dire accettare qualunque comportamento. Limiti e richieste restano legittimi: vanno detti a freddo. Vedi {{#/guida/limiti|Limiti, responsabilità e sostegno}}." }
      }
    ]
  },
  {
    id: "abbandono",
    titolo: "La paura dell'abbandono e l'effetto interruttore",
    sommario: "Perché una distanza anche breve può accendere tutto in un istante.",
    minuti: 9,
    fonte: "Visintini, Baldin, Vai, in Visintini (a cura di), Il modello GET, cap. 1 §2 (le possibili cause) e §4 (la personalità e il suo sviluppo, figure 3 e 4).",
    sezioni: [
      {
        t: "Avere l'altro «dentro» anche quando non c'è",
        p: [
          "Nei primi anni di vita, in una relazione sentita come affidabile, il bambino costruisce poco alla volta una certezza: la persona che si prende cura di lui continua a esistere e tornerà, anche quando non la vede. La psicoanalisi chiama questa certezza **costanza dell'oggetto**. È ciò che permette di sopportare la lontananza, di sentire che il legame resta intero anche a distanza e, su questa base, di diventare una persona separata e autonoma.",
          "Quando questa rappresentazione interna non si consolida, il legame viene sentito come instabile. Ogni distanza, anche di poche ore, può essere vissuta come la ripetizione di un dolore antico e come la prova che si sta per essere lasciati o disprezzati.",
          "Secondo gli autori, il cuore dei tratti borderline sta qui: attaccamento insicuro, mancanza di costanza dell'oggetto, paura dell'abbandono. Sono questi elementi ad accendere la disregolazione emotiva, le crisi e l'evitamento."
        ],
        approf: {
          t: "Attaccamento, separazione-individuazione, scissione",
          p: [
            "**Attaccamento sicuro** (Bowlby): la figura di riferimento è sentita come protettiva, affidabile e raggiungibile. Negli studi sulle persone con funzionamento borderline prevalgono invece stili di attaccamento insicuro e disorganizzato.",
            "**Separazione-individuazione** (Mahler): il processo con cui il bambino esce dalla fusione iniziale con chi lo accudisce e costruisce un'identità propria, sentita come una e continua nel tempo. Richiede un attaccamento sicuro; quando questo manca, il processo si interrompe o procede a strappi.",
            "**Scissione** (Klein): nelle prime fasi il bambino vive chi lo accudisce come diviso in una parte «buona», che soddisfa, e una «cattiva», che frustra. Crescendo impara a tenerle insieme nella stessa persona. Se questo passaggio resta incompiuto, da adulti l'altro continua a essere sentito ora come del tutto buono (idealizzazione, ricerca di fusione), ora come del tutto cattivo (svalutazione, distacco).",
            "Gli autori scrivono che l'ambiente può essere stato carente **oppure essere stato percepito come tale**: un bambino molto sensibile chiede molto, e una famiglia normalmente attenta può riuscire a rispondere solo in parte. Lo scarto fra il bisogno e la risposta non è una colpa di qualcuno. Per questo chiedono ai clinici di non cercare colpevoli: la ricerca di un responsabile non aiuta a costruire modi nuovi di stare in relazione. Vedi {{#/guida/cause|Cause e colpa}}."
          ],
          rif: "Il modello GET, cap. 1 §2 e §4."
        }
      },
      {
        t: "Vicinanza cercata e temuta",
        p: [
          "Ne nasce una posizione dolorosa. Da un lato c'è una solitudine intollerabile e il bisogno di un legame totale, quasi di fusione, che dovrebbe garantire dall'esterno la stabilità che manca all'interno. Dall'altro c'è il terrore dell'intensità di quel legame, perché la persona non riesce a regolarla, e perché chi è amato è anche chi può abbandonare.",
          "Gli autori riassumono così il problema che la persona cerca di risolvere in ogni relazione importante: come tenere a bada l'angoscia di essere lasciata e, insieme, controllare la persona amata, che teme proprio perché potrebbe lasciarla. La distanza viene allora regolata in modo caotico: avvicinamenti intensi, allontanamenti bruschi, idealizzazione che si rovescia in svalutazione. Lo stesso accade nella relazione con i curanti."
        ]
      },
      {
        t: "Il fattore scatenante",
        p: [
          "L'evento che dà il via (in inglese *trigger*) è qualcosa che risveglia l'angoscia di abbandono. Può essere un abbandono o un rifiuto reale. Molto più spesso è un fatto vissuto come tale: una telefonata o un messaggio attesi che non arrivano, una discussione in famiglia, un imprevisto che impedisce di vedere la persona amata.",
          "L'angoscia quasi mai è consapevole. L'attivazione è così rapida che la persona non fa in tempo a collegarla alla paura di essere lasciata: sente soltanto di stare malissimo. Gli autori parlano di **effetto interruttore**, acceso o spento, senza gradi intermedi. Fra l'evento e la reazione mancano lo spazio e il tempo per pensare a ciò che sta accadendo. Costruire quello spazio e quel tempo è uno degli scopi della terapia."
        ],
        approf: {
          t: "Che cosa mostrano gli studi sul cervello",
          p: [
            "In alcune ricerche di neuroimmagine il ricordo di episodi di abbandono, o un gioco al computer in cui si viene esclusi dagli altri giocatori (il paradigma *Cyberball*), produce nelle persone con diagnosi borderline un'attivazione più ampia delle aree legate al dolore emotivo e alla lettura delle intenzioni altrui.",
            "In altri studi, immagini di separazione, minaccia o lutto attivano l'amigdala sia nei pazienti sia nelle persone di confronto con un attaccamento irrisolto. La differenza sta in ciò che accade subito dopo: soltanto nel gruppo di confronto si attivano anche le aree di controllo (corteccia prefrontale dorsolaterale e cingolata anteriore). Nei pazienti il freno «dall'alto» interviene meno.",
            "È il corrispettivo biologico dell'effetto interruttore: la risposta parte per la via rapida, sotto la corteccia, e la regolazione arriva tardi o non arriva."
          ],
          rif: "Il modello GET, cap. 1 §4."
        }
      },
      {
        t: "Il circolo dell'indegnità",
        p: [
          "L'angoscia di abbandono mette in moto due piani che si alimentano a vicenda. Sul piano del comportamento, l'emozione non regolata porta alla crisi e al gesto. Sul piano dei sentimenti si accende una convinzione: «Se vengo lasciata, vuol dire che non sono degna di essere amata».",
          "Poi i due piani si confermano. Dopo il gesto arrivano la vergogna e il pensiero «Più mi comporto male, meno merito affetto e considerazione». Chi sta intorno, non capendo, giudica la reazione eccessiva o manipolatoria, la critica, si allontana: e conferma a sua volta quel sentimento. La persona esce dall'episodio più convinta di non valere e quindi più esposta al prossimo."
        ],
        box: { tipo: "nota", testo: "È uno dei punti in cui chi sta accanto può fare la differenza: non serve approvare il gesto, basta non confermare la conclusione «non valgo niente»." }
      },
      {
        t: "Ciò che si vede non è l'essenza",
        p: [
          "Crisi, gesti impulsivi, relazioni turbolente sono la parte visibile. Per gli autori non sono l'essenza del problema ma il suo effetto: l'esito di uno sviluppo della personalità che non ha potuto completarsi.",
          "Per questo l'obiettivo ultimo della terapia non è soltanto aiutare a gestire emozioni e comportamenti, ma rimettere in moto quel percorso di maturazione. La prima parte della cura si occupa dei comportamenti, perché sono urgenti e pesano sulla vita di tutti, e costruisce le competenze per regolare le emozioni. Solo dopo diventa possibile il lavoro più profondo sulle relazioni e sull'immagine di sé."
        ]
      },
      {
        t: "Che cosa cambia per te",
        l: [
          "La prevedibilità aiuta: dire quando torni, quando potrai rispondere, che cosa succederà dopo. Non elimina l'angoscia, ma toglie una parte dell'incertezza che la accende.",
          "Un ritardo o un silenzio possono pesare molto più di quanto immagini. Vedi lo scenario {{#/scenari/ritardo|Il messaggio senza risposta}}.",
          "Quando arriva la svalutazione («non ti importa niente di me»), prova a sentirla come l'espressione di una paura più che come un giudizio definitivo su di te.",
          "Dopo una crisi, tieni separati la persona e il comportamento: si può dire che un gesto ti ha spaventato o ferito senza dire che lei è sbagliata. Vedi l'esercizio {{#/esercizi/dopocrisi|Dopo una crisi: riparare}}."
        ]
      }
    ]
  },
  {
    id: "ipermentalizzazione",
    titolo: "Leggere troppo nella mente dell'altro",
    sommario: "Mentalizzazione, ipermentalizzazione e la doppia invalidazione.",
    minuti: 8,
    fonte: "Visintini, Baldin, Vai, in Visintini (a cura di), Il modello GET, cap. 1 §7 (mentalizzazione e ipermentalizzazione) e §10; Introduzione di Visintini (l'immagine della persona albina).",
    sezioni: [
      {
        t: "Che cos'è la mentalizzazione",
        p: [
          "**Mentalizzare** vuol dire leggere i comportamenti, i propri e quelli degli altri, come espressione di ciò che accade nella mente: desideri, convinzioni, aspettative, bisogni, scopi, sentimenti. È un'attività di immaginazione, perché la mente dell'altro non si vede: la si ricostruisce da ciò che dice e fa. Il concetto è stato sviluppato da Peter Fonagy e Anthony Bateman, che ne collocano le radici nelle prime relazioni di attaccamento.",
          "Una buona capacità di mentalizzare permette di capire le reazioni degli altri, di regolare le proprie emozioni, di controllare gli impulsi e di osservarsi mentre si agisce."
        ]
      },
      {
        t: "Un radar molto sensibile, tarato sul pericolo",
        p: [
          "Ci si aspetterebbe che le persone con funzionamento borderline leggano male le emozioni altrui. Gli studi danno un quadro più sfumato. In molti compiti, per esempio riconoscere un'emozione da un volto, sono **più rapide e più precise** della media. Nello stesso tempo tendono a leggere come negativi i segnali neutri o ambigui.",
          "È stato chiamato il paradosso dell'**empatia borderline**: una sensibilità ai segnali sociali superiore alla media, che diventa uno svantaggio quando non è accompagnata da una pari capacità di regolare l'attenzione e le emozioni. Le informazioni raccolte vengono amplificate, piegate verso il negativo e riferite a sé."
        ],
        approf: {
          t: "Ipermentalizzazione e teoria della mente",
          p: [
            "La **teoria della mente** (Premack e Woodruff) è un concetto vicino alla mentalizzazione e più usato nella ricerca sperimentale: indica la capacità di capire e prevedere un comportamento a partire dagli stati mentali propri e altrui. Nel disturbo borderline alcuni studi la trovano compromessa, altri conservata, altri superiore alla media.",
            "Gli autori spiegano la discordanza così: prevale una mentalizzazione **automatica e guidata dall'emozione**, poco integrata con quella riflessiva. Nei compiti semplici e veloci dà risultati ottimi; nei compiti complessi e nella vita reale, dove bisogna tenere insieme emozione e ragionamento, porta fuori strada.",
            "Si parla di **ipermentalizzazione** quando si attribuiscono agli altri intenzioni e stati d'animo che i fatti non sostengono. Una buona mentalizzazione richiede di muoversi con elasticità fra quattro coppie di poli: lettura automatica e lettura controllata, pensiero ed emozione, sé e altro, ciò che si vede fuori e ciò che si suppone dentro. Sotto attivazione emotiva questa elasticità si perde.",
            "Per questo esistono terapie costruite proprio sulla mentalizzazione (MBT), e per questo molti trattamenti, fra cui GET e DBT, usano la mindfulness, che allena la stessa capacità."
          ],
          rif: "Il modello GET, cap. 1 §7."
        }
      },
      {
        t: "Un esempio",
        p: [
          "Un'amica ha l'aria triste. Chi ipermentalizza non si ferma a «è triste»: conclude subito «è arrabbiata con me» oppure «non le piace stare con me». La conclusione viene sentita come un fatto, non come un'ipotesi, e la reazione che segue (chiudersi, accusare, andarsene) risponde a quel fatto.",
          "Succede soprattutto quando l'emozione è già alta. A mente più calma la stessa persona può riconoscere che le spiegazioni possibili erano molte."
        ]
      },
      {
        t: "L'immagine della persona albina",
        p: [
          "Per far capire questo modo di leggere la realtà, gli autori usano un'immagine. Una persona albina ha imparato fin da piccola che il tepore del sole è pericoloso, perché la sua pelle, priva di melanina, si scotta. Quel ricordo è vero ed è utile, ma vale soltanto per lei. Agli altri il sole dà piacere, e faticano a capire perché lei lo eviti.",
          "Allo stesso modo, chi fin da piccolo ha sentito le emozioni come troppo intense e le relazioni come possibile fonte di dolore si è costruito una memoria e un modo di interpretare i fatti diversi da quelli della maggioranza. Crescendo incontra persone che non condividono quella esperienza, e il rischio è duplice: sentirsi continuamente smentito e reagire in modi che agli altri sembrano fuori luogo."
        ]
      },
      {
        t: "La doppia invalidazione",
        p: [
          "Dal punto di vista della persona, l'ipersensibilità porta più occasioni di dolore, quindi più allerta, quindi una lettura più pessimistica di ciò che accade. Dal punto di vista di chi le sta intorno, le sue reazioni sono «troppo»: la sensibilità non viene vista come una qualità, ma come un'esagerazione.",
          "Così la persona viene invalidata due volte. Dall'esterno, quando le si dice in molti modi che sente in modo sbagliato. Dall'interno, quando comincia a dirselo da sé. I due processi si rinforzano e costruiscono quel sentimento di non valere che finisce al centro dell'immagine di sé e ostacola la crescita dell'autostima. Ne derivano spesso il timore delle relazioni e l'impressione di «non essere capace di vivere»."
        ]
      },
      {
        t: "Che cosa cambia per te",
        l: [
          "Rendi esplicito ciò che ti passa per la testa, soprattutto quando il tuo viso o il tuo tono possono essere fraintesi: «Sono stanco per il lavoro, non ce l'ho con te».",
          "Evita «stai esagerando» e «non è successo niente»: confermano l'invalidazione. Puoi riconoscere che per lei quella sensazione è reale, anche se tu hai visto la scena in un altro modo. Vedi {{#/guida/nonpace|Validare non è fare pace a ogni costo}}.",
          "Ricorda che anche tu interpreti con i tuoi modelli. Una domanda aperta vale più di una spiegazione. Vedi {{#/guida/curiosi|Restare curiosi}}.",
          "Sul dubbio che un comportamento sia intenzionale, vedi {{#/guida/intenzione|«Lo fa apposta?»}}."
        ]
      }
    ]
  },
  {
    id: "cascata",
    titolo: "Rimuginio e cascata emotiva: a che cosa serve un gesto",
    sommario: "Il circolo che porta alla crisi e la funzione dei gesti che la spengono.",
    minuti: 10,
    fonte: "Visintini, Baldin, Vai, in Visintini (a cura di), Il modello GET, cap. 1 §8 (rimuginazioni, giudizio, comportamenti autolesivi) e §9 (il contributo della Teoria Polivagale).",
    sezioni: [
      {
        t: "Il giudizio come sorveglianza continua",
        p: [
          "Giudicare è una funzione normale: serve a distinguere ciò che fa per noi da ciò che non fa per noi, e quindi a scegliere. Nella persona con organizzazione borderline il giudizio lavora senza sosta e con un altro scopo: controllare se ciò che fa, pensa e sente è «nella norma», cioè se può essere accettata dagli altri.",
          "Ma la sua storia le ha dato molte smentite, e le emozioni non regolate continuano a darne. Il giudizio smette di essere uno strumento per scegliere e diventa una fonte di svalutazione di sé, da cui nascono vergogna e senso di non valere."
        ]
      },
      {
        t: "Il rimuginio",
        p: [
          "Il **rimuginio** è il pensare e ripensare alle cause, ai particolari e alle conseguenze di un'esperienza dolorosa. Molte persone rimuginano convinte che serva a capire e a trovare una soluzione. Chi ha questo funzionamento lo vive in tutt'altro modo: come un pensiero che si impone, opprimente e angoscioso, che non riesce a fermare. Una paziente citata dagli autori lo ha chiamato «un volano inarrestabile».",
          "Il punto essenziale è che il rimuginio non calma: allunga la durata delle emozioni negative e ne aumenta l'intensità. E più l'emozione cresce, più attira attenzione su di sé."
        ],
        approf: {
          t: "Rimuginio, depressione e pensieri ossessivi",
          p: [
            "Negli studi citati dagli autori le persone con diagnosi borderline rimuginano più di quelle con depressione maggiore. Il contenuto del rimuginio aiuta i clinici a distinguere le due condizioni, che spesso si presentano insieme.",
            "Nel funzionamento borderline il rimuginio nasce da ciò che accade nelle relazioni (un rifiuto, un fallimento, una critica), è pessimistico, torna sui fallimenti della propria vita ed è presente fin dall'adolescenza. I sintomi depressivi che ne derivano sono una conseguenza di questa sofferenza. Nella depressione maggiore, invece, l'umore si abbassa senza un legame necessario con i fatti esterni e si accompagna a rallentamento, perdita di piacere e di energia, sensazione che la vita non abbia senso, in periodi che si alternano ad altri di umore normale.",
            "Il rimuginio può anche essere confuso con un disturbo ossessivo-compulsivo: i pensieri sono intrusivi e ripetitivi, ma mancano i rituali.",
            "Sono distinzioni che spettano ai clinici. Per chi sta accanto è utile saperle perché spiegano come mai la persona possa apparire «depressa» e reagire, però, in modo molto vivo a ciò che accade nelle relazioni."
          ],
          rif: "Il modello GET, cap. 1 §8."
        }
      },
      {
        t: "La cascata emotiva",
        p: [
          "Il modello della **cascata emotiva** (Selby e Joiner) mette in fila i passaggi. Un evento accende un'emozione negativa. La persona comincia a rimuginare. Il rimuginio rende l'emozione più intensa. L'emozione più intensa alimenta altro rimuginio. Ogni giro del circolo alza il livello: in termini tecnici è un circuito a **retroazione positiva**, che si amplifica da solo.",
          "Questo circolo può durare alcune ore o diversi giorni, in modo automatico e fuori dalla volontà della persona. Spiega due cose che sorprendono chi sta accanto: che anche un evento piccolo può portare a uno stato intollerabile, e che la crisi può arrivare molto dopo l'evento che l'ha avviata, quando nessuno lo collega più a quello."
        ]
      },
      {
        t: "Il gesto che spegne",
        p: [
          "Quando l'intensità supera una certa soglia, la persona mette in atto un comportamento che **interrompe il circolo** e riporta l'attivazione a un livello sopportabile. Gli autori riprendono qui l'immagine dell'interruttore: l'evento lo accende, il gesto lo spegne. Hanno questa funzione i gesti autolesivi, le abbuffate e le condotte di eliminazione, l'abuso di alcol o di sostanze.",
          "Le persone che compiono gesti autolesivi senza intenzione di morire (circa sette su dieci fra chi ha questa diagnosi, secondo uno studio citato) attribuiscono al gesto effetti precisi: allevia il dolore emotivo, riduce l'ansia e la disperazione, sostituisce un dolore confuso con uno concreto, fa uscire dalla sensazione di distacco da sé, punisce; a volte comunica agli altri quanto si sta male.",
          "Per questo gli autori evitano di chiamare questi comportamenti «disfunzionali». Una funzione ce l'hanno, ed è seria: sono il modo, rapido ed efficace sul momento, che la persona ha trovato per sopravvivere a un'emozione intollerabile. Restano dannosi e dolorosi. La terapia non li condanna: lavora perché la persona abbia a disposizione altri modi."
        ],
        box: { tipo: "attenzione", testo: "Capire a che cosa serve un gesto non significa considerarlo senza pericolo. L'autolesionismo va sempre preso sul serio ed è un fattore di rischio. Che cosa fare e che cosa evitare è spiegato in {{#/guida/sicurezza|Autolesionismo e pensieri suicidari}}; nell'urgenza vai a {{#/emergenze|Emergenze}}." },
        approf: {
          t: "Il corpo che frena: sistema nervoso autonomo e teoria polivagale",
          p: [
            "Il **sistema nervoso autonomo** regola, fuori dal controllo volontario, cuore, respiro, digestione e vasi sanguigni. Ha due rami principali. Il **simpatico** prepara all'azione davanti a una minaccia percepita, reale o no: il battito e la pressione salgono, i bronchi e le pupille si dilatano, la digestione rallenta. Il **parasimpatico** fa l'opposto: rallenta, calma, riporta l'organismo all'equilibrio.",
            "La **teoria polivagale** di Stephen Porges descrive non due ma tre livelli di risposta, ordinati in una gerarchia. Il primo è il ramo **ventrale del nervo vago**: in condizioni di sicurezza calma il simpatico e sostiene il contatto con gli altri (si parla, si sorride, si ascolta). Il secondo è il **simpatico**: davanti al pericolo predispone all'attacco o alla fuga. Il terzo è il ramo **dorsale del vago**: quando il pericolo è sentito come soverchiante produce immobilità, fino al collasso o a sintomi di distacco dalla realtà.",
            "L'ipotesi degli autori, fondata sulla loro esperienza clinica e su ciò che riferiscono i pazienti, è questa: nelle persone con organizzazione borderline il simpatico è attivo quasi di continuo e il freno ventrovagale non basta a calmarlo, soprattutto nelle situazioni di relazione. Durante la crisi l'attivazione sale fino a diventare intollerabile. I gesti compiuti sul corpo stimolerebbero il nervo vago e quindi il parasimpatico: per questo spengono la crisi.",
            "La stessa via viene usata, senza danno, dalle tecniche che la terapia insegna per le fasi acute, riassunte nella sigla TIP: temperatura (acqua molto fredda sul viso), esercizio fisico intenso, rilassamento progressivo. La cura consiste nel prevenire le crisi e nel sostituire il mezzo, non nel negare il bisogno biologico a cui il gesto risponde."
          ],
          rif: "Il modello GET, cap. 1 §9. Si tratta di un'ipotesi clinica degli autori."
        }
      },
      {
        t: "Si può cambiare",
        p: [
          "Il modello indica anche la strada: ricostruire, un anello alla volta, la catena che va dall'evento scatenante al gesto. Quando la persona impara a riconoscere che cosa accende il circolo e a che punto si trova, può fermarlo prima della soglia. È il lavoro del gruppo sulla crisi, che nel metodo GET è il primo a cominciare.",
          "Gli autori dichiarano lo scopo comune a tutti i gruppi: costruire consapevolezza del proprio stato emotivo e degli eventi che lo determinano, per ridurre l'iperattivazione, diminuire la reattività agli eventi scatenanti e abbassare la probabilità di entrare nella risposta di attacco o fuga."
        ],
        approf: {
          t: "La psicoterapia modifica il funzionamento del cervello",
          p: [
            "Gli studi di risonanza magnetica condotti prima e dopo un trattamento specifico per il disturbo borderline mostrano, dopo alcune settimane o mesi, una risposta meno intensa di amigdala e insula agli stimoli negativi e una connessione più forte fra amigdala e aree prefrontali, cioè un controllo più efficace delle aree che regolano su quelle che reagiscono. È stato osservato anche un aumento di volume della sostanza grigia in aree prefrontali.",
            "I risultati riguardano trattamenti di orientamento diverso, sia cognitivo-comportamentale (DBT) sia psicodinamico. In uno studio il miglioramento dell'instabilità emotiva andava di pari passo con la diminuzione del segnale nell'amigdala.",
            "Per gli autori questi dati indicano che le aree coinvolte possono davvero cambiare modo di funzionare, e che una guarigione stabile nel tempo è possibile. Vedi {{#/guida/recupero|Prospettive di recupero}}."
          ],
          rif: "Il modello GET, cap. 1 §8, «In termini neurobiologici»."
        }
      },
      {
        t: "Che cosa cambia per te",
        l: [
          "A caldo, «Perché l'hai fatto?» suona come un'accusa e non ha risposta: nel momento del gesto la persona cercava soltanto di far smettere il dolore. Se ne può parlare dopo, con calma.",
          "Ore o giorni di silenzio teso possono essere il segno che il circolo sta girando. Una presenza tranquilla e poco invadente aiuta più di molte domande.",
          "Una crisi fermata in tempo è un risultato, anche se da fuori sembra che «non sia successo niente». Dirlo a voce alta conta.",
          "Il freddo sul viso e il respiro lento servono anche a te, quando sei tu a essere in allarme. Vedi gli esercizi {{#/esercizi/raffreddare|Raffreddare il corpo}} e {{#/esercizi/respiro|Respirazione con espirazione lunga}}."
        ]
      }
    ]
  },
  {
    id: "evitamento",
    titolo: "Paura delle emozioni ed evitamento",
    sommario: "Perché si ritira, e perché «non sto male» non vuol dire «sto bene».",
    minuti: 7,
    fonte: "Visintini, Baldin, Vai, in Visintini (a cura di), Il modello GET, cap. 1 §10 (la paura delle emozioni e l'evitamento).",
    sezioni: [
      {
        t: "Avere paura di ciò che si prova",
        p: [
          "Chi ha sperimentato molte volte emozioni troppo intense per essere regolate impara a temere **l'emozione in sé**, qualunque essa sia, anche quelle piacevoli. Teme di perdere il controllo e teme la reazione del corpo che la accompagna. Non è una paura immotivata: si fonda su una lunga serie di esperienze finite male.",
          "Questa paura ha due conseguenze. La prima: la persona cerca di bloccare ciò che sente, e così non impara a riconoscerlo, a dargli un nome e a collegarlo a ciò che l'ha provocato. La seconda: evita le situazioni che potrebbero farle provare qualcosa."
        ],
        approf: {
          t: "Un circolo che si chiude su sé stesso",
          p: [
            "Il costrutto di **paura delle emozioni** (Williams, Chambless e Ahrens) indica il timore dell'esperienza emotiva e delle sue conseguenze fisiche, sostenuto da un'interpretazione catastrofica di ciò che l'emozione potrebbe provocare.",
            "Il meccanismo è circolare: la vulnerabilità emotiva rende le emozioni molto intense; l'intensità genera paura; la paura porta a bloccare o a evitare l'esperienza; senza esperienza non si impara a conoscere e a regolare le emozioni; la vulnerabilità resta intatta, insieme a una confusione di fondo su ciò che si prova.",
            "La ricerca indica il contrario come via d'uscita: entrare in contatto con le emozioni ed esprimerle riduce gli stati negativi e migliora la capacità di rispondere agli eventi. È ciò che i gruppi sull'attivazione emotiva e corporea allenano in modo graduale e protetto."
          ],
          rif: "Il modello GET, cap. 1 §10."
        }
      },
      {
        t: "L'evitamento",
        p: [
          "Evitare è una strategia che usiamo tutti: ci si allontana da ciò che si prevede di non riuscire ad affrontare. Dipende da quanto ci sentiamo capaci. Meno ci sentiamo all'altezza, più lo scenario che immaginiamo è spaventoso, e più evitiamo.",
          "In chi ha un'autostima fragile e una forte paura delle emozioni l'evitamento può diventare la regola. Prende molte forme: ritirarsi dai contatti con gli altri, lasciare le attività sportive o ricreative, rimandare o abbandonare compiti e impegni, non andare più a scuola o al lavoro, fino all'isolamento e all'apatia.",
          "E si rinforza da solo: più si evita, meno ci si sente capaci; meno ci si sente capaci, più si evita."
        ]
      },
      {
        t: "Chiusa in camera",
        p: [
          "È facile provare irritazione per una figlia, un figlio o un partner che passa le giornate chiuso in una stanza, non esce, ha lasciato la scuola, il lavoro o lo sport. Ed è facile passare dall'irritazione al giudizio («è pigro», «non ha voglia di fare niente») e dal giudizio al conflitto.",
          "Gli autori chiedono di leggere la scena in un altro modo: in quel momento la persona sta cercando di proteggersi da situazioni che le provocherebbero emozioni intollerabili. La critica aggiunge la prova che cercava di evitare: non essere all'altezza."
        ]
      },
      {
        t: "«Non sto male» non vuol dire «sto bene»",
        p: [
          "Per capire lo stato interno di queste persone bisogna immaginare un'esperienza a due sole posizioni: **sto male** e **non sto male**. Il benessere vero e proprio, quello che la maggior parte di noi dà per scontato, molte di loro non l'hanno mai provato. Per loro «non stare male» è già il traguardo: vuol dire che per quel giorno le emozioni sono rimaste sotto controllo e la crisi non c'è stata.",
          "Da qui nasce un equivoco frequente. La persona dice «oggi sono stata bene», oppure in famiglia si dice «ultimamente sta bene» perché da un po' non ci sono crisi. Ma sotto quel «bene» l'allerta, l'ansia e la sofferenza di fondo ci sono ancora. Chi sta accanto abbassa la guardia o alza le aspettative; lei si sente, ancora una volta, non capita."
        ]
      },
      {
        t: "Le stesse parole, significati diversi",
        p: [
          "Fra il modo comune di descrivere ciò che si prova e quello di chi ha questo funzionamento c'è una zona di incomprensione. Le parole sono le stesse, l'esperienza a cui rimandano no.",
          "Molti pazienti raccontano dei curanti precedenti: «Non capiva quello che dicevo e come mi sentivo». Gli autori ne traggono una regola che vale per i clinici e anche per i familiari: fare molta attenzione alle parole che la persona usa, usarle a propria volta, e restare il più possibile vicini a ciò che descrive, senza sostituirlo con la propria interpretazione."
        ]
      },
      {
        t: "Che cosa cambia per te",
        l: [
          "Quando senti «sto bene», puoi chiedere che cosa vuol dire oggi: «Bene nel senso che è stata una giornata tranquilla, o nel senso che è stata meno pesante?».",
          "Un periodo senza crisi è un progresso reale, ma non è il momento di aggiungere richieste tutte insieme.",
          "Davanti al ritiro, proposte piccole e concrete funzionano meglio dei rimproveri e dei grandi progetti. Vedi {{#/guida/comportamento|Come cambia un comportamento}}.",
          "Nel percorso GET c'è un gruppo dedicato proprio all'evitamento, quello di Pianificazione. Vedi {{#/guida/get|Il percorso GET spiegato a chi sta accanto}}."
        ]
      }
    ]
  },

  /* ---------- I gruppi del percorso GET (cap. 2, 3 e 4 del libro) ---------- */
  {
    id: "perchegruppo",
    titolo: "Perché in gruppo, e perché sul presente",
    sommario: "Le scelte di fondo del metodo: gruppo di pari, esperienza, équipe.",
    minuti: 8,
    fonte: "Segrini, in Visintini (a cura di), Il modello GET, cap. 2 §2 (il costrutto teorico: gruppo omogeneo, esperienza presente e sincronicità, lavoro d'équipe).",
    sezioni: [
      {
        t: "Un gruppo di persone simili",
        p: [
          "Chi arriva alla terapia ha quasi sempre alle spalle anni in cui si è sentito «diverso e sbagliato»: in famiglia, a scuola, fra i coetanei. Il gruppo GET è **omogeneo**, cioè formato da persone con lo stesso tipo di difficoltà. Per la prima volta la persona si trova fra simili, in un luogo in cui può essere capita senza doversi spiegare e senza essere giudicata.",
          "Per gli autori questa esperienza è già di per sé una cura: sentirsi parte di qualcosa e riconosciuti anche nelle proprie particolarità è ciò che finora è mancato. Nel gruppo ciascuno vede parti di sé riflesse negli altri, e questo rende avvicinabili emozioni che da soli si eviterebbero."
        ],
        approf: {
          t: "Risonanza, interdipendenza e il rischio della fusione",
          p: [
            "**Risonanza** (Foulkes): la capacità di cogliere ciò che prova un altro riconoscendovi qualcosa di proprio. In un gruppo omogeneo è massima.",
            "**Interdipendenza** (Lewin): i membri di un gruppo sono legati dal compito che svolgono insieme e da una sorte comune. Per questo ciò che il gruppo elabora viene fatto proprio più facilmente di ciò che viene insegnato dall'esterno.",
            "Il rispecchiamento ha anche un costo: sentire nell'altro il proprio dolore può attivare, e la persona può reagire evitando il gruppo o entrando in crisi. Facilitatore e tutor la aiutano ad attraversare questi momenti.",
            "Un gruppo molto unito può inoltre favorire legami di **fusione**. Gli autori li considerano un passaggio naturale e utile, a patto di non restarvi a lungo: il metodo li tiene sotto controllo attraverso il ruolo del facilitatore e del tutor e con la durata limitata di ogni fase."
          ],
          rif: "Il modello GET, cap. 2 §2.1."
        }
      },
      {
        t: "Una terapia «di» gruppo, non «in» gruppo",
        p: [
          "In altri trattamenti il gruppo è una classe: un conduttore insegna alcune abilità e i partecipanti le imparano, ciascuno per sé. Gli autori lo chiamano trattamento **in** gruppo. Il GET si definisce invece un trattamento **di** gruppo: lo strumento di cura è l'interazione fra i partecipanti. Le conoscenze non vengono trasmesse da un esperto, ma costruite insieme a partire da ciò che ciascuno vive.",
          "Per questo i gruppi sono «facilitati» più che condotti: il **facilitatore** interviene il meno possibile e aiuta il gruppo a lavorare. L'idea è che il gruppo diventi uno spazio «non saturo», libero dal giudizio, in cui la persona possa trovare la propria identità e disegnare i propri confini.",
          "C'è anche un motivo legato alla relazione a due. Fra terapeuta e paziente esiste una differenza di ruolo e spesso di età che richiama facilmente il rapporto, conflittuale, con le figure dei genitori. Fra pari questo accade meno."
        ]
      },
      {
        t: "Compagni più avanti e compagni appena arrivati",
        p: [
          "Uno degli ostacoli maggiori alla cura è il pessimismo: la convinzione che niente possa cambiare. I gruppi GET sono perciò **aperti**: nello stesso gruppo c'è chi ha appena cominciato una fase, chi è a metà e chi sta per concluderla.",
          "Chi entra vede con i propri occhi dove sono arrivati i compagni più avanti, e chi è più avanti misura la strada fatta guardando chi comincia. È un sostegno alla fiducia che nessuna rassicurazione a parole potrebbe dare."
        ]
      },
      {
        t: "Più gruppi nella stessa settimana",
        p: [
          "In ogni fase la persona frequenta tutti i gruppi previsti nella stessa settimana (due nella Fase 0, quattro nelle Fasi 1 e 2), più la seduta individuale. Gli autori chiamano questa caratteristica **sincronicità**: si lavora nello stesso periodo su più fronti (la crisi, la pianificazione, le emozioni, il corpo) e si collega ciò che emerge in un gruppo con ciò che emerge negli altri.",
          "Il collegamento è il compito principale della seduta individuale con il **tutor**. Il tutor non interpreta, non giudica e non insegna: aiuta la persona a raccontare ciò che ha vissuto nei gruppi, a confrontare le esperienze e a metterle insieme, perché non restino pezzi separati. Dover rendere comprensibile a un altro ciò che si è provato è già un modo di ordinarlo: ciò che si riesce a comunicare fa meno paura."
        ]
      },
      {
        t: "Perché all'inizio non si parla del passato",
        p: [
          "Molte psicoterapie spiegano il presente risalendo all'infanzia. Nelle prime fasi del GET questo viene evitato di proposito. Per chi ha una disregolazione emotiva il passato è quasi soltanto una fonte di dolore: riaprirlo quando non si hanno ancora gli strumenti per regolare le emozioni rischia di rafforzare l'idea che nulla potrà cambiare. Inoltre le interpretazioni («ti comporti così perché…») vengono facilmente sentite come un'accusa e come un giudizio sui propri comportamenti.",
          "La Fase 0 e la Fase 1 lavorano quindi sul **qui e ora**: su ciò che accade nel gruppo e nella settimana. Il passato entra nel lavoro solo nella Fase 2, quando la persona è in grado di tenerlo distinto dal presente."
        ],
        approf: {
          t: "L'approccio esperienziale",
          p: [
            "Il GET si colloca nella tradizione delle terapie esperienziali (Gestalt, approccio centrato sulla persona di Rogers, terapia focalizzata sulle emozioni) e dei gruppi di formazione nati nel dopoguerra (T-Group, Istituto Tavistock). Ne riprende tre idee.",
            "La prima: l'esperienza vissuta in prima persona è la base del pensiero, delle emozioni e delle azioni, e quindi anche del cambiamento. La seconda: le persone sono capaci di scegliere e di determinarsi; il trattamento punta a far sentire la persona attiva, non più in balia delle emozioni. La terza: una persona è un insieme complesso e non coincide con la sua diagnosi.",
            "Secondo gli autori, lavorare su più gruppi nello stesso periodo sollecita inoltre il lavoro di associazione e di integrazione, che dipende dalle aree prefrontali."
          ],
          rif: "Il modello GET, cap. 2 §2.2."
        }
      },
      {
        t: "L'équipe",
        p: [
          "La persona è in carico a un gruppo di professionisti (facilitatori, coordinatore, tutor, psicoterapeuta, psichiatra) e non a un singolo curante. L'équipe si riunisce con regolarità, decide insieme i passaggi di fase e condivide anche il peso emotivo del lavoro, perché nessun operatore diventi l'unico punto di riferimento."
        ]
      },
      {
        t: "Che cosa cambia per te",
        l: [
          "I legami con i compagni di gruppo possono diventare molto importanti. Fanno parte della cura: non sono una fuga dalla famiglia.",
          "Nei primi tempi evita di cercare tu le cause nel passato («è cominciato tutto quando…»): è lo stesso motivo per cui l'équipe non lo fa.",
          "Ciò che vale per i terapeuti vale anche a casa: nessuno può essere l'unico punto di riferimento. Vedi {{#/guida/tueemozioni|Le tue emozioni nella relazione}}.",
          "La struttura complessiva del percorso è in {{#/guida/get|Il percorso GET spiegato a chi sta accanto}}."
        ]
      }
    ]
  },
  {
    id: "gruppocrisi",
    titolo: "Il gruppo Crisi: rivedere alla moviola",
    sommario: "Come si ricostruisce una crisi, passo per passo, e a che cosa serve.",
    minuti: 8,
    fonte: "Ramazzi e Gaj, in Visintini (a cura di), Il modello GET, cap. 3.1 §1 (introduzione e fondamenti teorici) e §2 (le finalità dell'attività).",
    sezioni: [
      {
        t: "Da dove si parte",
        p: [
          "Chi ha una forte disregolazione emotiva ha l'impressione di arrivare al gesto **all'improvviso**, senza averlo deciso. Si accorge di ciò che è successo dopo, quando ne vede le conseguenze, e questa presa di coscienza è dolorosa. Fra ciò che ha fatto e ciò che intendeva fare c'è una zona opaca.",
          "Il gruppo Crisi serve a illuminare quella zona: far emergere gli eventi, i pensieri e le emozioni che hanno preceduto il gesto. Lo scopo è che la persona si senta meno in balia di ciò che le accade dentro e diventi, poco alla volta, protagonista della propria storia."
        ]
      },
      {
        t: "La moviola",
        p: [
          "Il gruppo ricostruisce, **a posteriori**, un momento di crisi vissuto da uno dei partecipanti. Gli autori usano l'immagine della moviola: un processo durato «un batter di ciglia» viene rallentato e scomposto nei suoi passaggi, così da poterlo osservare.",
          "L'analisi si muove fra due domande. La prima: **in quale situazione** la persona si è comportata così? La seconda: **a che cosa è servito** quel comportamento, in quel momento? Gli elementi che si ricostruiscono sono:"
        ],
        l: [
          "i **fattori di vulnerabilità**: ciò che, prima ancora dell'evento, rendeva la persona più esposta (stanchezza, una giornata vuota, una tensione già presente);",
          "l'**evento scatenante**;",
          "l'**interpretazione** che la persona ne ha dato, e il rimuginio che ne è seguito;",
          "il **comportamento** messo in atto;",
          "le **conseguenze**: il sollievo immediato e ciò che è venuto dopo."
        ],
        approf: {
          t: "Da dove viene il metodo",
          p: [
            "Il riferimento è la terapia cognitivo-comportamentale. Lo schema **ABC** di Albert Ellis distingue gli antecedenti (*Antecedents*), cioè gli eventi che precedono l'attivazione; le credenze (*Beliefs*), cioè i pensieri che hanno per oggetto quegli eventi; le conseguenze (*Consequences*), emotive e di comportamento. Gli elementi usati nella ricostruzione sono in parte quelli dell'**analisi della catena** della DBT di Marsha Linehan.",
            "Dal cosiddetto **funzionalismo contestuale** il gruppo riprende un principio: un comportamento si capisce guardando alla funzione che svolge in un certo contesto, non alla sua forma. È la stessa idea della cascata emotiva: il gesto regola un'emozione. Vedi {{#/guida/cascata|Rimuginio e cascata emotiva}}.",
            "La differenza rispetto a questi modelli sta nel modo: il lavoro si fa in gruppo e non è una lezione. Quando servono informazioni (a che cosa servono le emozioni, che cos'è un rinforzo, come un pensiero interpreta un fatto), il facilitatore le fa emergere con domande, invece di spiegarle dalla cattedra."
          ],
          rif: "Il modello GET, cap. 3.1 §1.1."
        }
      },
      {
        t: "Un evento vale per ciò che significa",
        p: [
          "Nel gruppo non si stabilisce se l'evento scatenante fosse «oggettivamente» grave. Gli autori lo dicono con chiarezza: una valutazione oggettiva non ha senso, perché ogni evento pesa per il significato che ha per chi lo vive. Molti fatti che ad altri sembrano di poco conto vengono vissuti in modo doloroso, e la reazione che appare abnorme serve a far fronte alla cascata di emozioni che l'evento ha messo in moto.",
          "Mettere in luce questa funzione ha anche un effetto sullo stigma: toglie a quei comportamenti l'etichetta di gesti insensati e il giudizio pesante che di solito li accompagna.",
          "Il costo, però, viene nominato con la stessa chiarezza. Quei modi di regolarsi danno sollievo subito e lasciano poi conseguenze, concrete ed emotive, che possono fare più male dello stato di partenza: vergogna, colpa, senso di non valere."
        ]
      },
      {
        t: "Che cosa si impara, nel tempo",
        l: [
          "**Subito:** mettere ordine in episodi ricordati in modo confuso; riconoscere ciò che rende più vulnerabili; collegare pensieri ed emozioni e dare loro un nome; sentire la differenza fra il «là e allora» della crisi e il «qui e ora» in cui la si racconta.",
          "**Più avanti:** dirigere l'attenzione senza farsela trascinare via dall'emozione; sentirsi più capaci di intervenire su ciò che accade dentro; dare un senso a gesti che parevano non averne e, capito il bisogno a cui rispondono, cercare altri modi di soddisfarlo.",
          "**Alla lunga:** prevenire le situazioni a rischio, leggere il proprio mondo interno attraverso i comportamenti, affrontare gli eventi emotivi della vita di ogni giorno."
        ]
      },
      {
        t: "Generalizzare e giudicare",
        p: [
          "Due modi di pensare tornano in quasi tutte le ricostruzioni. La **generalizzazione**: estendere a ogni situazione nuova ciò che è stato vero in alcune esperienze dolorose («se è andata così allora, andrà sempre così»). Il **pensiero giudicante**: valutare di continuo sé stessi, ciò che si prova e ciò che si fa come giusto o sbagliato.",
          "Il gruppo non chiede di smettere di giudicare: sarebbe un'attesa irrealistica. Chiede di accorgersi del momento in cui il giudizio entra in gioco e dell'effetto che ha sulle emozioni. Tutti e due i meccanismi restringono lo sguardo e fanno salire l'emozione sulla base di interpretazioni, lontano dai fatti."
        ]
      },
      {
        t: "Perché è un lavoro faticoso",
        p: [
          "Raccontare una crisi davanti ad altri, o ascoltare quella di un compagno, vuol dire esporsi proprio a ciò che di solito si evita. All'inizio molti ne hanno paura e tendono a restare in silenzio. È previsto: l'esposizione graduale, in un luogo protetto, è il modo in cui l'evitamento diminuisce e gli episodi di crisi diventano qualcosa su cui si può lavorare.",
          "Il gruppo Crisi comincia nella Fase 0 e prosegue nella Fase 1, insieme al gruppo di Pianificazione. Ciò che emerge qui (per esempio un fattore di vulnerabilità) viene spesso ripreso negli altri gruppi."
        ]
      },
      {
        t: "Che cosa cambia per te",
        l: [
          "Evita di discutere se l'evento «meritava» quella reazione: per lei pesava così. Puoi riconoscerlo senza essere d'accordo sulla lettura dei fatti.",
          "Non rifare la moviola a casa. Ricostruire una crisi chiede un metodo e un luogo protetto; un interrogatorio in famiglia riaccende la vergogna.",
          "Dopo il gruppo può essere stanca, silenziosa o scossa. Vedi lo scenario {{#/scenari/rientro|Il rientro dal gruppo}}.",
          "Se ti parla di una crisi che è riuscita a fermare, è una notizia importante: è il risultato a cui il gruppo lavora."
        ]
      }
    ]
  },
  {
    id: "gruppopianificazione",
    titolo: "Il gruppo Pianificazione: prepararsi prima",
    sommario: "Anticipare le situazioni difficili, riempire le giornate, ritrovare autonomia.",
    minuti: 7,
    fonte: "Bruzzese e Carretta, in Visintini (a cura di), Il modello GET, cap. 3.2 §1 (introduzione, regolazione cognitiva dell'emozione) e §2 (finalità dell'attività).",
    sezioni: [
      {
        t: "Il problema non è l'intelligenza",
        p: [
          "Pianificare vuol dire analizzare una situazione, immaginare più risposte possibili, prevederne le conseguenze, sceglierne una e poi verificare com'è andata. Nelle persone con disregolazione emotiva questa capacità appare spesso ridotta, soprattutto nel prevedere le conseguenze e nel valutare i risultati.",
          "Gli autori precisano però un punto: a parità di capacità intellettive, la difficoltà dipende soprattutto dalle **emozioni spiacevoli** che compaiono mentre si prova a pensare, e dall'effetto che hanno sul ragionamento. Non è che la persona «non ci arriva» o «non ci pensa»: quando l'emozione sale, pensare diventa difficile."
        ]
      },
      {
        t: "Intervenire prima che l'emozione salga",
        p: [
          "Si può agire su un'emozione in due momenti: **prima** che sia del tutto accesa, oppure **dopo**, quando la risposta è già partita. Il gruppo di Pianificazione lavora soprattutto sul primo momento: scegliere se e come esporsi a una situazione, prepararla, rivedere il peso che le si dà. Del secondo si occupa solo in parte, per limitare i danni.",
          "A differenza di altri metodi orientati alla soluzione dei problemi, qui non si parte dalla soluzione. Prima si aiuta la persona a **capire** la propria situazione, analizzando i pensieri e le emozioni che la accompagnano; le strategie vengono dopo."
        ],
        approf: {
          t: "La regolazione cognitiva delle emozioni",
          p: [
            "Il riferimento è il modello di James Gross. Un'emozione nasce da una situazione rilevante, esterna (un pericolo) o interna (per esempio il timore di non combinare mai nulla), e dalla **valutazione** che ne diamo, cioè dal significato che ha rispetto ai nostri scopi. Le strategie *centrate sugli antecedenti* agiscono prima che la risposta emotiva sia completa: scegliere la situazione, modificarla, spostare l'attenzione, rivedere la valutazione. Le strategie *centrate sulla risposta* agiscono a emozione già presente, modulandone l'espressione.",
            "I passaggi del processo di soluzione di un problema, a cui il gruppo allena, sono: percepire il problema, accettarlo, descriverlo, generare alternative, prevederne le conseguenze, valutare i risultati, mettere in pratica la decisione."
          ],
          rif: "Il modello GET, cap. 3.2 §1.1 e §5."
        }
      },
      {
        t: "Gli obiettivi, dal più vicino al più lontano",
        l: [
          "**A breve termine.** Riconoscere in anticipo le situazioni che possono attivare (una discussione prevista, una serata in un posto a rischio, una giornata senza programmi che lascia spazio al vuoto) e preparare che cosa fare. Se l'attivazione è già in corso, lo scopo diventa un altro: sventare la crisi.",
          "**A medio termine.** Dare una struttura alle giornate con attività piacevoli e con piccoli compiti di responsabilità (la spesa, una commissione, un interesse da coltivare), per uscire dall'inattività prodotta dall'evitamento, stare meno a contatto con il senso di vuoto e sentirsi più capaci. E imparare il metodo, in modo da applicarlo a situazioni nuove.",
          "**A lungo termine.** I progetti che danno autonomia e chiedono costanza, con una soddisfazione che arriva tardi: riprendere gli studi, scegliere un lavoro, gestire il denaro, fare le cose da soli sentendosi indipendenti e non abbandonati."
        ]
      },
      {
        t: "Perché comincia subito",
        p: [
          "Insieme al gruppo Crisi, è il primo gruppo del percorso. Chi arriva in terapia è spesso sopraffatto da un senso di impotenza: non crede di poter cambiare ciò che vive e ciò che sente. Il gruppo offre fin dai primi giorni strumenti semplici e verificabili, applicati a fatti concreti, compresi quelli che ostacolano la terapia stessa (per esempio non riuscire ad alzarsi per andare ai gruppi).",
          "Nella Fase 0 si lavora quasi soltanto sugli obiettivi vicini, e il facilitatore dà più informazioni. Nella Fase 1 sono sempre più i partecipanti a portare esperienza e suggerimenti ai compagni, e lo sguardo si allunga."
        ]
      },
      {
        t: "Un esempio",
        p: [
          "Una persona ha già deciso di andare a una festa in cui ci sarà alcol, che per lei è un fattore di rischio. Il gruppo lavora prima di tutto su come non usarlo d'impulso quella sera. In un secondo tempo la aiuta a capire che cosa le ha reso impossibile dire di no all'invito: spesso il timore del giudizio degli altri, o la paura di sentirsi esclusa."
        ]
      },
      {
        t: "Che cosa cambia per te",
        l: [
          "Resisti alla tentazione di pianificare al posto suo. Lo scopo è che impari il metodo, non che la giornata vada liscia. Vedi lo scenario {{#/scenari/aggiusto|Faccio io}}.",
          "Un'attività piccola portata a termine vale più di un grande progetto annunciato. Nota i passi piccoli. Vedi {{#/guida/comportamento|Come cambia un comportamento}}.",
          "Se sai che si avvicina un momento difficile per tutti e due, prepararlo serve anche a te. Vedi l'esercizio {{#/esercizi/anticipa|Preparare un momento difficile}}.",
          "Sul ritiro e sulle giornate vuote, vedi {{#/guida/evitamento|Paura delle emozioni ed evitamento}}."
        ]
      }
    ]
  },
  {
    id: "gruppiemozionicorpo",
    titolo: "Attivazione Emotiva e Attivazione Corporea",
    sommario: "Dare un nome alle emozioni e sentirle nel corpo, senza giudicarle.",
    minuti: 8,
    fonte: "Bruzzese, Di Biase, Ramazzi, in Visintini (a cura di), Il modello GET, cap. 3.3 §1-2 (Attivazione Emotiva) e cap. 4.1; Ragno e Segrini, cap. 3.4 §2-3 (Attivazione Corporea).",
    sezioni: [
      {
        t: "Perché due gruppi sulle emozioni",
        p: [
          "La paura delle emozioni porta a bloccarle. Chi le blocca non impara a riconoscerle, fatica a collegarle a ciò che le ha provocate, le evita, e sa sempre meno come esprimerle e regolarle. Vedi {{#/guida/evitamento|Paura delle emozioni ed evitamento}}.",
          "Dalla Fase 1 due gruppi lavorano su questo da due lati: l'**Attivazione Emotiva** parte dall'osservazione, l'**Attivazione Corporea** dal corpo. Hanno in comune l'allenamento a tenere l'attenzione sul momento presente e a descrivere senza giudicare, cioè le abilità che vanno sotto il nome di mindfulness."
        ]
      },
      {
        t: "Attivazione Emotiva: osservare prima di interpretare",
        p: [
          "Il gruppo guarda insieme alcune scene di un film e poi ne parla. L'esercizio è descrivere ciò che si è visto in un personaggio senza aggiungere interpretazioni, e riconoscere che cosa la scena ha fatto provare a sé.",
          "Gli autori danno un esempio della differenza. Una descrizione: «Ho visto rabbia nel personaggio, dal tono della voce e dalle sopracciglia aggrottate». Un'interpretazione: «È naturale che sia arrabbiato per quello che gli è successo, al suo posto lo sarei anch'io». La seconda frase parla di chi guarda, non di ciò che si vede.",
          "È un allenamento che tocca un punto preciso. Quando non riesce a capire che cosa prova l'altro, la persona tende a colmare il vuoto con una lettura propria, quasi sempre negativa e legata alle proprie esperienze dolorose. Imparare a ricavare lo stato d'animo altrui dai segnali osservabili (viso, postura, tono) riduce questo effetto. Vedi {{#/guida/ipermentalizzazione|Leggere troppo nella mente dell'altro}}."
        ]
      },
      {
        t: "L'alfabetizzazione emotiva",
        p: [
          "L'obiettivo a medio termine ha un nome: **alfabetizzazione emotiva**. Vuol dire capire che cosa sono le emozioni, come si riconoscono in sé e negli altri, a che cosa servono, come si esprimono e come si possono regolare.",
          "Confrontando ciò che ciascuno ha riconosciuto, il gruppo costruisce un proprio **dizionario emotivo**: per ogni emozione, le sensazioni, le espressioni, i comportamenti e i pensieri che la accompagnano. Emozioni prima giudicate soltanto negative, e quindi da eliminare, diventano riconoscibili; e ciò che si riconosce si può cominciare a regolare, senza ricorrere a un gesto impulsivo.",
          "Anche qui il giudizio non viene vietato. Si impara ad accorgersi di quando entra in gioco e di come cambia ciò che si prova."
        ],
        approf: {
          t: "Le tre condizioni per regolare un'emozione",
          p: [
            "Gli autori richiamano tre condizioni: riconoscere con precisione le singole emozioni di base; saper limitare l'intensità degli stimoli che le accendono o le riaccendono; poter contare sui meccanismi cerebrali di inibizione che frenano le risposte emotive non utili.",
            "Il gruppo lavora direttamente sulla prima e, attraverso l'allenamento dell'attenzione, sulla seconda. Dirigere l'attenzione dove si vuole, senza che l'emozione la trascini via, è un'abilità che torna in quasi tutti i gruppi del percorso: gli stimoli emotivi tendono a «catturare» l'attenzione, e finché questo accade è difficile rivolgerla a qualcosa di neutro o di piacevole."
          ],
          rif: "Il modello GET, cap. 3.3 §1-2 e cap. 3.4 §2."
        }
      },
      {
        t: "Attivazione Corporea: le emozioni nel corpo",
        p: [
          "Questo gruppo si concentra sugli aspetti fisici dell'esperienza emotiva. Lo scopo è collegare ciò che si prova con ciò che si sente nel corpo, e riconoscere le emozioni anche dai loro segni fisici. Arrivare a un'emozione attraverso il corpo aiuta a identificarla, a darle un nome e quindi a regolarla.",
          "È un collegamento che in queste persone si è spesso interrotto: la paura delle emozioni porta a staccarsi anche dalle sensazioni che le accompagnano. A differenza degli altri, questo gruppo si svolge «in» gruppo più che «di» gruppo: si è insieme nella stessa stanza, ma a ciascuno è chiesto soprattutto di stare in contatto con la propria esperienza. Ogni incontro ha tre parti:"
        ],
        l: [
          "esercizi di **attivazione fisica**;",
          "uno o più esercizi per regolare le emozioni passando dal corpo: percezione del corpo, respirazione, rilassamento, visualizzazione;",
          "un momento di **condivisione**, in cui ciascuno mette in parole ciò che ha provato."
        ],
        box: { tipo: "nota", testo: "Riconoscere le emozioni nel corpo non serve ad azzerare quelle spiacevoli: serve a governare qualcosa che fa parte della vita di chiunque. Il gruppo allena anche a notare e a dare valore alle sensazioni piacevoli." }
      },
      {
        t: "Che cosa cambia nella Fase 2",
        p: [
          "I due gruppi proseguono nella Fase 2. Nell'Attivazione Emotiva, oltre a riconoscere le emozioni, si dà spazio ai **rimandi**: i ricordi, i pensieri e i desideri che la scena ha risvegliato. È possibile perché la persona è ora più capace di regolare ciò che prova.",
          "Diventa anche un esercizio di relazione. In gruppo bisogna tenere conto di sei o otto menti, non di una o due come nella terapia individuale: ascoltare le ragioni degli altri e riflettere sulle proprie fa capire attraverso quali «lenti» ciascuno guarda il mondo."
        ]
      },
      {
        t: "Che cosa cambia per te",
        l: [
          "Descrivere prima di interpretare funziona anche a casa: «Ti vedo con le spalle chiuse e la voce bassa» apre più di «Sei di nuovo arrabbiata».",
          "Se usa parole nuove per ciò che prova, riprendile: il vocabolario comune è parte del lavoro. Vedi il {{#/glossario|Glossario}}.",
          "Lo stesso lavoro serve a chi sta accanto. Vedi l'esercizio {{#/esercizi/provo|Che cosa provo io, adesso}}.",
          "Dopo l'Attivazione Corporea può avere bisogno di quiete: lavorare sul corpo stanca più di quanto sembri."
        ]
      }
    ]
  },
  {
    id: "fase2",
    titolo: "La Fase 2: dalle emozioni alle relazioni",
    sommario: "Quando si passa, che cosa cambia, e come si conclude il percorso.",
    minuti: 9,
    fonte: "Visintini, in Visintini (a cura di), Il modello GET, cap. 4, «Introduzione alla Fase 2»; Di Biase e Ramazzi, cap. 4.3 §1-2 (Metodi Attivi); Visintini e Ragno, cap. 4.4 §1, §2 e §4 (Dinamiche, il saluto di fine terapia).",
    sezioni: [
      {
        t: "Quando si passa alla Fase 2",
        p: ["Non c'è una data fissata. L'équipe propone il passaggio quando osserva alcuni cambiamenti, nei gruppi e nei questionari ripetuti nel tempo:"],
        l: [
          "la persona comincia a regolare l'intensità delle emozioni e a mentalizzare;",
          "i gesti autolesivi si riducono, fino a cessare;",
          "usa strategie nuove per regolare emozioni e impulsi;",
          "il rimuginio non è più l'unico modo di pensare a sé e al mondo;",
          "si giudica meno, e quindi teme meno il giudizio degli altri;",
          "evita meno ed è più aperta e curiosa verso l'esterno;",
          "la sofferenza c'è ancora, ma è meno profonda, meno costante e meno devastante."
        ],
        box: { tipo: "nota", testo: "Il percorso non è lineare. Anche nella Fase 2 possono esserci timori di ricaduta, momenti di crisi o pensieri suicidari. Non vuol dire che si è tornati al punto di partenza. Vedi {{#/guida/sicurezza|Autolesionismo e pensieri suicidari}}." }
      },
      {
        t: "Dall'essere simili all'essere sé stessi",
        p: [
          "Gli autori descrivono il percorso come un'evoluzione in tre tempi. Si parte dall'**isolamento** e dal sentirsi diversi. Con le Fasi 0 e 1 si arriva a ciò che chiamano processo «accomunativo»: riconoscersi negli altri, mettere in comune le esperienze, sentire di appartenere. La Fase 2 apre il terzo tempo, l'**individuazione**: dentro esperienze simili, scoprire che cosa è proprio e unico di sé.",
          "Chi ha questo funzionamento vive a lungo nella convinzione che la verità sia nelle mani degli altri, e cerca senza riuscirci di adeguarsi a ciò che crede ci si aspetti da lui. Con la terapia comincia a dare credito ai propri pensieri, desideri ed emozioni. L'obiettivo dichiarato è alto: che la persona non abbia più un'organizzazione borderline, e che riprenda il processo di separazione e individuazione rimasto interrotto, fino a una personalità matura, integrata e stabile."
        ]
      },
      {
        t: "Una specie di adolescenza",
        p: [
          "In questo passaggio può comparire qualcosa che sorprende chi sta accanto: atteggiamenti egocentrici, poca attenzione agli altri, un modo di fare che viene da definire narcisistico. Gli autori chiedono, ai terapeuti e alle famiglie, di **non leggerli come un nuovo problema**.",
          "Qualunque sia l'età della persona, il suo sé sta riprendendo un cammino di crescita che deve passare da una fase simile all'adolescenza, e un adolescente si comporta da adolescente. Pretendere altro significa chiedere ciò che non è ancora possibile e rimettere in moto il giudizio.",
          "È una fase delicata. Rispetto alla disistima totale di partenza, la persona sperimenta una condizione nuova e ancora fragile: spesso riprende a studiare o a lavorare, stringe nuove relazioni. Può sentirsi «a posto» e voler lasciare la terapia. Un atteggiamento accogliente, e non critico, è ciò che permette all'autostima di consolidarsi in modo realistico."
        ]
      },
      {
        t: "Il gruppo di Metodi Attivi",
        p: [
          "Qui al centro c'è **l'azione**, non la parola. Si usano tecniche che coinvolgono tutta la persona: attività con mezzi artistici, giochi di ruolo e tecniche riprese dallo psicodramma, esercizi che rendono visibili le relazioni all'interno del gruppo. Un'esperienza non viene soltanto raccontata: viene rivissuta nel presente, in forma protetta e simbolica, per poterla guardare da un'altra prospettiva.",
          "Gli scopi: sperimentare ruoli diversi da quelli abituali; ritrovare spontaneità e creatività, rimaste a lungo soffocate dalla sofferenza; provare risposte nuove al posto di quelle automatiche; mettersi nei panni di un altro. Gli autori osservano che la stessa ipersensibilità che prima alimentava la reattività può, a questo punto, essere messa al servizio della creatività.",
          "Queste tecniche toccano corde profonde. Per questo entrano solo nella Fase 2, e ogni attività viene scelta in base a ciò che il gruppo e i singoli possono reggere in quel momento."
        ]
      },
      {
        t: "Il gruppo di Dinamiche",
        p: [
          "È il gruppo meno strutturato. La seduta non ha un tema né una scaletta: comincia da ciò che viene in mente a uno dei partecipanti e prosegue per associazioni. Chi arriva dalle fasi precedenti tende all'inizio a parlare di fatti concreti; poco alla volta si comincia a «pensare ai pensieri» e a «pensare alle emozioni».",
          "Gli autori lo definiscono un **laboratorio sulle relazioni**, non una vera psicoterapia di gruppo: un luogo sicuro in cui portare sé stessi così come si è, senza doversi adeguare alle attese di qualcuno. Vi si impara ad ascoltare anche ciò che non si vorrebbe affrontare, a prendersi spazio, a usare parole nuove per sé e per gli altri, a stare nel disaccordo e nel conflitto scoprendo che si possono riparare, a tollerare il silenzio.",
          "Il punto forse più importante riguarda l'autostima. Sentire che il gruppo ascolta, accoglie e usa ciò che si porta produce un'esperienza nuova: «Sono significativo, vengo riconosciuto, dunque ho valore». Gli autori parlano di una funzione di tipo genitoriale, svolta dal gruppo."
        ],
        approf: {
          t: "Rete, matrice e difese del gruppo",
          p: [
            "Il riferimento teorico è la psicoterapia di gruppo a orientamento psicodinamico. Per S.H. Foulkes ogni persona proviene da **reti** di appartenenza (la famiglia, gli amici, i colleghi) che formano la **matrice** della sua esistenza, cioè l'insieme di significati, consapevoli e no, attraverso cui legge ciò che accade. Un gruppo nuovo genera una rete e una matrice nuove. Esservi immersi, quando sono diverse da quelle in cui la sofferenza è nata, può essere di per sé trasformativo.",
            "W. Bion ha descritto alcune fantasie collettive con cui un gruppo si difende dalle emozioni troppo intense (gli «assunti di base»: dipendenza, attacco e fuga, accoppiamento). Nel GET chi conduce il gruppo le tiene presenti per capire i momenti di stallo o di conflitto, ma non le interpreta ad alta voce: difficilmente verrebbero capite.",
            "Nelle Fasi 0 e 1, e negli altri gruppi della Fase 2, la struttura più definita e il compito preciso tengono il lavoro su un piano più legato all'esperienza che all'inconscio."
          ],
          rif: "Il modello GET, cap. 4.4 §1."
        }
      },
      {
        t: "La fine del percorso",
        p: [
          "La conclusione viene decisa dall'équipe, con l'accordo di tutti i facilitatori, e comunicata dal tutor, con cui la persona ne ha già parlato a lungo. Sarà poi lei a dirlo al gruppo, quando lo riterrà.",
          "Le reazioni sono varie e spesso mescolate: paura e angoscia di separazione; gioia; oppure una felicità iniziale seguita, a ridosso della data, da una tristezza che sembra inspiegabile e dalla tentazione di rimandare. Gli autori la leggono come l'ambivalenza di un sé nuovo, che si è formato ma deve ancora consolidarsi. Non esiste il momento perfetto per finire: esiste una spinta sana a concludere.",
          "L'ultima seduta è nel gruppo di Dinamiche. Alla fine entrano anche il tutor e i facilitatori che hanno accompagnato la persona, ci si siede in cerchio e ciascuno dice qualcosa su di lei e sul percorso fatto. Per chi resta, il saluto dà speranza e insieme mette davanti alla separazione: un piccolo lutto, che il gruppo elabora."
        ]
      },
      {
        t: "Che cosa cambia per te",
        l: [
          "Se la vedi più centrata su di sé, più decisa nel dire ciò che vuole, meno attenta a te, prova a leggerlo come crescita e non come ingratitudine. I tuoi limiti restano validi. Vedi {{#/guida/limiti|Limiti, responsabilità e sostegno}}.",
          "Può avere opinioni e desideri diversi dai tuoi e difenderli: è ciò a cui la terapia lavora.",
          "Verso la fine del percorso l'ambivalenza è normale. Non serve spingerla a concludere né trattenerla.",
          "Anche per te la fine della terapia può fare paura. È un buon argomento da portare nel tuo spazio. Vedi {{#/guida/recupero|Prospettive di recupero}}."
        ]
      }
    ]
  }
  ];

  var G = window.GUIDA;
  [].push.apply(G, NUOVI);

  /* Ordine dei capitoli e divisione in parti. Un capitolo non elencato finisce in coda all'ultima parte. */
  var PARTI = [
    ["Capire il disturbo", ["disturbo", "emozioni", "cause"]],
    ["Come funziona dentro", ["vaso", "abbandono", "ipermentalizzazione", "cascata", "evitamento"]],
    ["Il percorso di cura", ["cura", "get", "perchegruppo", "gruppocrisi", "gruppopianificazione", "gruppiemozionicorpo", "fase2"]],
    ["Stare accanto", ["familiari", "validazione", "comunicare", "limiti", "sicurezza", "tueemozioni", "intenzione", "nonpace", "comportamento", "curiosi", "partner", "curadise"]],
    ["Guardare avanti", ["recupero"]]
  ];
  var perId = {}, ordinati = [], parti = [];
  G.forEach(function (c) { perId[c.id] = c; });
  PARTI.forEach(function (p) {
    var ids = p[1].filter(function (id) { return perId[id]; });
    ids.forEach(function (id) { ordinati.push(perId[id]); delete perId[id]; });
    parti.push({ titolo: p[0], ids: ids });
  });
  G.forEach(function (c) { if (perId[c.id]) { ordinati.push(c); parti[parti.length - 1].ids.push(c.id); } });
  G.length = 0;
  [].push.apply(G, ordinati);
  window.GUIDA_PARTI = parti;

  [].push.apply(window.GLOSSARIO, [
    ["Abituazione", "Il calare della risposta a uno stimolo che si ripete. Negli studi sul disturbo borderline la risposta dell'amigdala agli stimoli negativi ripetuti tende invece a crescere."],
    ["Alfabetizzazione emotiva", "Imparare che cosa sono le emozioni, come si riconoscono in sé e negli altri, a che cosa servono, come si esprimono e come si regolano. È un obiettivo del gruppo di Attivazione Emotiva."],
    ["Facilitatore", "Il professionista che guida un gruppo GET intervenendo il meno possibile: non insegna, aiuta il gruppo a costruire da sé ciò che impara."],
    ["Gruppo omogeneo", "Gruppo formato da persone con lo stesso tipo di difficoltà. Nel metodo GET è la condizione che permette di sentirsi capiti e non giudicati."],
    ["Individuazione", "Il processo con cui una persona scopre e costruisce ciò che è proprio e unico di sé. È il lavoro della Fase 2 del percorso GET."],
    ["Risonanza", "Cogliere ciò che prova un altro riconoscendovi qualcosa di proprio. È uno dei meccanismi con cui un gruppo cura (Foulkes)."],
    ["Amigdala","Struttura del cervello, presente nei due lobi temporali, che risponde in modo molto rapido agli stimoli emotivamente rilevanti, soprattutto alle minacce."],
    ["Cascata emotiva", "Circolo in cui il rimuginio aumenta l'intensità di un'emozione negativa e l'emozione più intensa alimenta altro rimuginio, fino a una soglia oltre la quale compare un gesto che lo interrompe (modello di Selby e Joiner)."],
    ["Circuito cortico-limbico", "Rete di aree del cervello (amigdala, insula, cortecce prefrontali e altre) che, lavorando insieme, regola lo stato emotivo."],
    ["Costanza dell'oggetto", "La certezza interna che la persona amata continua a esistere e che il legame resta intero anche quando è lontana. Si costruisce nei primi anni di vita."],
    ["Evitamento", "Tenersi lontani dalle situazioni che si prevede di non riuscire ad affrontare. Dà sollievo subito e, a lungo andare, riduce la fiducia nelle proprie capacità."],
    ["Fattore scatenante (trigger)", "L'evento, reale o vissuto come tale, che risveglia l'angoscia di abbandono e avvia la crisi: per esempio un messaggio che non arriva."],
    ["Ipermentalizzazione", "Attribuire agli altri intenzioni e stati d'animo che i fatti non sostengono, di solito in senso negativo e riferito a sé."],
    ["Iperattivazione e ipoattivazione", "I due modi di uscire dalla finestra di tolleranza: verso l'alto (agitazione, allarme) o verso il basso (spegnimento, distacco)."],
    ["Organizzazione borderline di personalità (OBP)", "Espressione di Otto Kernberg, preferita dagli autori del metodo GET a «disturbo borderline»: indica un modo di funzionare della personalità più che una categoria diagnostica."],
    ["Paura delle emozioni", "Timore dell'esperienza emotiva in sé, anche piacevole, per la paura di perdere il controllo e della reazione del corpo."],
    ["Teoria polivagale", "Teoria di Stephen Porges: le risposte di difesa seguono una gerarchia a tre livelli (contatto sociale, attacco o fuga, immobilità), regolati da due rami del nervo vago e dal sistema simpatico."],
    ["TIP", "Sigla di tre tecniche per le fasi acute della crisi: temperatura (freddo intenso), esercizio fisico intenso, rilassamento progressivo."]
  ]);
  window.GLOSSARIO.sort(function (a, b) { return a[0].localeCompare(b[0], "it"); });
})();
