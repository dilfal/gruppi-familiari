/* Frasi, scenari ed esercizi aggiunti, più l'elenco completo delle fonti.
   Ogni elemento porta il campo «fonte»: da dove viene l'idea (i testi sono riformulati, mai copiati).
   Nessun dato personale. Stesso formato di data-pratica.js. */
(function () {
  /* ---------- filtri nuovi delle frasi ---------- */
  [].push.apply(window.FRASI_TAG, [
    ["dopo", "Dopo una crisi"],
    ["distacco", "Vuoto e distacco"],
    ["cura", "Percorso di cura"]
  ]);

  /* ---------- frasi ---------- */
  [].push.apply(window.FRASI, [
    {
      tag: "abbandono",
      situazione: "Ti dice: «Non ci sei mai per me!».",
      evita: "«Ma se ci sono sempre stato! Ti rendi conto di quello che dici?»",
      prova: "«Ci sono e ci sarò. Faccio quello che posso, e mi dispiace che in questo momento non basti.»",
      perche: "La risposta difensiva è giusta sul contenuto e sbagliata sull'emozione: sotto l'accusa c'è quasi sempre la paura di essere lasciati. Si rassicura senza discutere i fatti.",
      livello: "Comprendere",
      fonte: "Il modello GET, cap. 5 §4.3.2"
    },
    {
      tag: "rabbia",
      situazione: "Gli insulti continuano anche dopo che hai provato a validare.",
      evita: "Rispondere a tono, oppure restare in silenzio a subire.",
      prova: "«Così non riesco ad ascoltarti. Mi allontano un quarto d'ora e poi torno, perché voglio capire.»",
      perche: "Al linguaggio offensivo non si risponde con lo stesso tono, ma non si è nemmeno obbligati a subirlo. Sottrarsi dichiarando il ritorno non è un abbandono.",
      livello: "Limite calmo",
      fonte: "Il modello GET, cap. 5 §4.3.2"
    },
    {
      tag: "confini",
      situazione: "Stai per dettare una regola nel mezzo di una lite.",
      evita: "«Basta! Da oggi in questa casa si fa come dico io!»",
      prova: "«Adesso sono troppo agitato per parlarne bene. Ne riparliamo stasera dopo cena, con calma.»",
      perche: "Un limite detto a caldo diventa un ultimatum. Le aspettative si spiegano quando l'attivazione è bassa, in tutti e due.",
      livello: "Scegliere il momento",
      fonte: "Il modello GET, cap. 5 §4.3.3"
    },
    {
      tag: "cura",
      situazione: "Torna da un gruppo o da una seduta, silenziosa e stanca.",
      evita: "«Allora? Di cosa avete parlato? Che cosa ti hanno detto di me?»",
      prova: "«Bentornata. Se ti va di raccontarmi qualcosa ti ascolto, altrimenti va bene così. Ti preparo qualcosa di caldo?»",
      perche: "Ciò che accade nei gruppi è riservato, e dopo c'è spesso stanchezza. Una porta aperta senza pressione comunica rispetto per il suo spazio di cura.",
      livello: "Prestare attenzione",
      fonte: "Il modello GET, cap. 5 §4.4"
    },
    {
      tag: "cura",
      situazione: "Dopo settimane di terapia c'è un passo indietro e dice: «Non serve a niente».",
      evita: "«Lo vedi? Te l'avevo detto di impegnarti di più.»",
      prova: "«Oggi sembra di essere tornati al punto di partenza, ed è scoraggiante. Io però mi ricordo com'era due mesi fa, e una differenza la vedo.»",
      perche: "Il percorso non è lineare e un passo indietro non cancella quelli fatti. Prima si riconosce lo scoraggiamento, poi si fa da memoria dei progressi.",
      livello: "Rispecchiare, essere la sua memoria",
      fonte: "Porr, cap. 10 («Siate la memoria del vostro caro»); Carbone, Crisi tempestose, «La ricaduta è un ciclone»"
    },
    {
      tag: "progressi",
      situazione: "Ha riconosciuto una crisi in arrivo ed è riuscita a fermarla prima del gesto.",
      evita: "«Brava, sono fiero di te!» oppure non dire nulla perché «è il minimo».",
      prova: "«Te ne sei accorta in tempo e hai fatto un'altra cosa. Non era facile. Che cosa ti ha aiutata?»",
      perche: "Una crisi sventata è un risultato e va nominata. «Sono fiero di te» sposta il valore sulla tua approvazione; descrivere ciò che ha fatto lo lascia a lei.",
      livello: "Riconoscere lo sforzo",
      fonte: "Carbone, Crisi tempestose, «I tre tipi di crisi»; Porr, cap. 5 («Validare non equivale a essere fieri di qualcuno»)"
    },
    {
      tag: "progressi",
      situazione: "Aveva promesso di avvisarti entro un'ora precisa e lo fa in ritardo.",
      evita: "«Avevamo detto alle undici, è mezzanotte! Non rispetti mai i patti.»",
      prova: "«Grazie di avermi scritto, mi fa stare più tranquillo. Buona serata, ci sentiamo domani.»",
      perche: "Se il passo avanti viene accolto con un rimprovero, la prossima volta sarà meno probabile. Si riconosce subito ciò che ha fatto; sull'orario si torna in un altro momento.",
      livello: "Rinforzare subito",
      fonte: "Porr, cap. 3 (rinforzo)"
    },
    {
      tag: "distacco",
      situazione: "Ha lo sguardo assente, sembra lontana, risponde a fatica.",
      evita: "«Ehi! Mi stai ascoltando? Torna qui!» oppure una raffica di domande.",
      prova: "«Sono qui accanto a te. Siamo a casa, è sera. Senti i piedi sul pavimento? Dimmi una cosa che vedi davanti a te.»",
      perche: "Il distacco è un modo in cui la mente si protegge da un'intensità troppo alta. Voce calma, frasi brevi e riferimenti concreti al presente aiutano più delle domande sul perché.",
      livello: "Presenza",
      fonte: "Carbone, Crisi tempestose, «I tre tipi di crisi» (dissociazione) e «Kit di pronto soccorso sensoriale»"
    },
    {
      tag: "distacco",
      situazione: "Dice: «Non sento niente, sono vuota».",
      evita: "«Ma come, con tutto quello che hai! Pensa alle cose belle.»",
      prova: "«Dev'essere pesante sentirsi così spenta. Non devi sentire niente per forza. Resto qui con te.»",
      perche: "Il vuoto non si riempie con gli argomenti. Riconoscerlo e restare presenti toglie almeno la solitudine che lo accompagna.",
      livello: "Rispecchiare",
      fonte: "Porr, cap. 5 (rispecchiare, non reagire in base alla logica)"
    },
    {
      tag: "distacco",
      situazione: "Le chiedi «Che cos'hai?» e risponde: «Non lo so».",
      evita: "«Come fai a non saperlo? Qualcosa avrai!»",
      prova: "«Va bene non saperlo. Ti dico tre parole e mi dici se una ci va vicino: stanca, in allarme, triste?»",
      perche: "Per molte persone dare un nome a ciò che provano è la parte più difficile. Offrire qualche parola fra cui scegliere aiuta più di una domanda aperta.",
      livello: "Leggere la mente, con apertura",
      fonte: "Il modello GET, cap. 2 §3 (alfabetizzazione emotiva) e cap. 5 §4.3.3; Carbone, Come ti senti?, «Le parole che ci mancano»"
    },
    {
      tag: "dopo",
      situazione: "La crisi è passata e chiede scusa, piena di vergogna.",
      evita: "«Eh, lo dici ogni volta» oppure «Non è successo niente».",
      prova: "«Grazie per avermelo detto. È stato difficile per tutti e due. Adesso riposiamo; domani, se te la senti, guardiamo insieme che cosa l'ha fatta partire.»",
      perche: "Minimizzare cancella ciò che è successo, rinfacciare aumenta la vergogna. Si accoglie la scusa e si rimanda l'analisi a quando l'attivazione è scesa.",
      livello: "Autenticità",
      fonte: "Porr, cap. 9 («Assumetevi la responsabilità, chiedete scusa»); Il modello GET, cap. 5 §4.3.3"
    },
    {
      tag: "dopo",
      situazione: "Ti accorgi di aver alzato la voce o detto una cosa che ha ferito.",
      evita: "«Sì, ma sei tu che mi ci hai portato.»",
      prova: "«Prima ho alzato la voce e mi dispiace. Avevo paura e l'ho detta male. Riprovo: quello che volevo dirti è che ci tengo a te.»",
      perche: "Riconoscere il proprio errore, senza «ma», mostra che gli strappi si possono riparare e abbassa la difesa dell'altro.",
      livello: "Umiltà, riparare",
      fonte: "Porr, cap. 9 («Siate umili») e cap. 10 (CHIRP)"
    },
    {
      tag: "abbandono",
      situazione: "Dopo un momento di grande vicinanza diventa fredda o si allontana.",
      evita: "«Prima mi cerchi e poi mi tratti così? Deciditi!»",
      prova: "«Mi sembra che adesso ti serva un po' di spazio. Va bene. Io sono di là: quando vuoi, ci sono.»",
      perche: "Per alcune persone la vicinanza è insieme desiderata e temuta. Non inseguire e non punire il ritiro costruisce, nel tempo, sicurezza.",
      livello: "Comprendere",
      fonte: "Porr, cap. 9 («Attaccamento e mentalizzazione») e cap. 7 («Il senso di lutto nei partner o coniugi»)"
    },
    {
      tag: "abbandono",
      situazione: "Ti accusa di qualcosa che non hai fatto, convinta che sia vero.",
      evita: "Difenderti punto per punto, portando prove.",
      prova: "«Capisco che da dove sei tu sia sembrato proprio così, e quanto fa paura. Per me è andata in un altro modo. Mi dici che cosa ti ha fatto pensare questo?»",
      perche: "Quando un'emozione viene vissuta come un fatto, le prove non convincono. Si riconosce la paura, si dichiara con calma la propria versione e si fa una domanda.",
      livello: "Validare senza dare ragione",
      fonte: "Porr, cap. 7 («Il senso di lutto nei partner o coniugi») e cap. 9 («Fate domande»)"
    }
  ]);

  /* ---------- scenari ---------- */
  [].push.apply(window.SCENARI, [
    {
      id: "rientro",
      titolo: "Il rientro dal gruppo",
      contesto: "Una persona cara rientra dopo un pomeriggio di gruppi di terapia. Posa la borsa, non ti guarda, va verso la sua stanza. Tu sei stato in pensiero tutto il giorno e vorresti sapere com'è andata.",
      fonte: "Il modello GET, cap. 5 §4.3.2 e §4.4",
      opzioni: [
        { testo: "«Allora? Com'è andata? Di cosa avete parlato? Ti hanno detto qualcosa su di noi?»", ok: 0, esito: "L'interesse è sincero, ma la raffica di domande entra in uno spazio che è suo e riservato. È probabile che si chiuda ancora di più." },
        { testo: "«Bentornata. Io sono in cucina: se ti va di parlare ti ascolto, se preferisci riposare va bene lo stesso.»", ok: 2, esito: "Lasci la porta aperta senza spingere. Rispetti la riservatezza dei gruppi e la stanchezza del dopo, e resti raggiungibile." },
        { testo: "Non dire niente e fare finta di non averla vista entrare.", ok: 1, esito: "Eviti di fare pressione, ma il silenzio totale può essere letto come disinteresse. Basta un saluto e una disponibilità dichiarata." }
      ]
    },
    {
      id: "esco",
      titolo: "«Ogni volta che esco…»",
      contesto: "Stai per uscire per una serata con gli amici, programmata da tempo. Negli ultimi mesi, quasi ogni volta che sei uscito è successo qualcosa a casa. Mentre prendi le chiavi, la persona cara diventa cupa e dice: «Vai pure, tanto di me non importa a nessuno».",
      fonte: "Il modello GET, cap. 5 §4.3.3; Porr, cap. 10 («Gestire le contingenze»)",
      opzioni: [
        { testo: "«Ecco, lo sapevo. Lo fai apposta ogni volta per rovinarmi la serata.»", ok: 0, esito: "Leggi il comportamento come intenzionale e contro di te, e rispondi con ostilità. La paura di essere lasciata trova conferma." },
        { testo: "Rinunciare all'uscita senza dire nulla e restare a casa, risentito.", ok: 0, esito: "La crisi di stasera è evitata, ma impari tutti e due che il disagio fa annullare i tuoi impegni, e il risentimento cresce." },
        { testo: "«Mi sembra che restare sola stasera ti pesi molto. Esco e torno per mezzanotte; alle dieci ti scrivo. Che cosa potresti fare nel frattempo che di solito ti aiuta?»", ok: 2, esito: "Riconosci che cosa prova, mantieni l'impegno, dai orari precisi e la aiuti a prepararsi. La prossima volta conviene parlarne il giorno prima, non sulla porta." }
      ]
    },
    {
      id: "caldo",
      titolo: "La regola detta a caldo",
      contesto: "State litigando per una spesa imprevista. Le voci si alzano. Senti salire la rabbia e ti viene da dire che, da questo momento, i soldi li gestirai solo tu.",
      fonte: "Il modello GET, cap. 5 §4.3.3",
      opzioni: [
        { testo: "Dirlo subito, con fermezza: «Da oggi le carte le tengo io, punto».", ok: 0, esito: "Un limite deciso nel pieno della lite arriva come una punizione e una prova di sfiducia. Difficilmente verrà rispettato, e la lite si allarga." },
        { testo: "«Sono troppo arrabbiato per parlarne bene adesso. Mi fermo. Domani mattina ci sediamo e decidiamo insieme come fare con le spese.»", ok: 2, esito: "Ti accorgi della tua attivazione e sposti la decisione a un momento calmo, con un appuntamento preciso. Il limite, se servirà, sarà spiegato e non urlato." },
        { testo: "Lasciar perdere del tutto, per quieto vivere, e non tornarci più.", ok: 1, esito: "Eviti l'ultimatum, ma il problema resta e tornerà. Fermarsi va bene, se si fissa quando riprendere il discorso." }
      ]
    },
    {
      id: "passoindietro",
      titolo: "Il passo indietro",
      contesto: "Da due mesi le cose andavano meglio. Stasera, dopo una settimana pesante, una persona cara ti dice che ha avuto una crisi ed è tornata a un vecchio gesto. Aggiunge: «Sono tornata al punto di partenza. Non cambierò mai».",
      fonte: "Carbone, Crisi tempestose, «La ricaduta è un ciclone ma chi la conosce non ne viene spazzato via»; Porr, cap. 10",
      opzioni: [
        { testo: "«No, di nuovo? Pensavo che l'avessimo superata…»", ok: 0, esito: "La tua delusione si somma alla sua vergogna e conferma l'idea di aver rovinato tutto." },
        { testo: "«Capisco che adesso sembri tutto perso, ed è scoraggiante. Due mesi fa però succedeva quasi ogni settimana: quei mesi restano. Hai bisogno di qualcosa ora? Domani pensiamo se avvisare chi ti segue.»", ok: 2, esito: "Riconosci lo scoraggiamento, fai da memoria dei progressi senza negare ciò che è successo, ti occupi del presente e riporti la rete di cura." },
        { testo: "«Ma no, non è niente, capita. Non pensarci.»", ok: 1, esito: "L'intenzione è consolare, ma minimizzare lascia sola la persona con ciò che sente e chiude il discorso. Meglio riconoscere e poi ricordare la strada fatta." }
      ]
    },
    {
      id: "lontana",
      titolo: "Lo sguardo lontano",
      contesto: "Durante una discussione, una persona cara smette di rispondere. Ha lo sguardo fisso, sembra non sentirti. Quando le parli, dice piano: «Non mi sembra di essere qui».",
      fonte: "Carbone, Crisi tempestose, «I tre tipi di crisi» (dissociazione) e «Kit di pronto soccorso sensoriale»; Porr, cap. 9 (allerta rossa)",
      opzioni: [
        { testo: "Alzare la voce e scuoterla: «Guardami! Non fare così, stavamo parlando!»", ok: 0, esito: "Aumenta l'intensità proprio quando la mente si sta proteggendo da un'intensità troppo alta. Il distacco può durare di più." },
        { testo: "Interrompere la discussione, abbassare la voce e dire: «Lasciamo stare, ne parliamo un'altra volta. Sono qui con te. Senti i piedi a terra? Dimmi tre cose che vedi».", ok: 2, esito: "Metti da parte l'argomento, offri presenza e riferimenti concreti al qui e ora. Quando è tornata, non riprendere subito la discussione." },
        { testo: "Uscire dalla stanza per lasciarla tranquilla.", ok: 1, esito: "Togli pressione, ma la lasci sola in un momento di disorientamento. Meglio restare vicino, in silenzio se serve, e dire che ci sei." }
      ]
    },
    {
      id: "aggiusto",
      titolo: "Faccio io",
      contesto: "Una persona cara deve fare una telefonata che la mette in ansia (un ufficio, un appuntamento da spostare). La rimanda da giorni. Tu potresti farla in due minuti e toglierle il pensiero.",
      fonte: "Porr, cap. 7 («Il senso di lutto nei partner o coniugi») e cap. 10 («Costruite un senso di competenza»); Il modello GET, cap. 5 §2",
      opzioni: [
        { testo: "Telefonare tu, senza dirle nulla, e avvisarla a cose fatte.", ok: 0, esito: "Risolvi il problema di oggi, ma il messaggio che arriva è «non ti ritengo capace». E tu aggiungi un compito alla lista di chi aggiusta tutto." },
        { testo: "«Questa telefonata ti pesa, si vede. Qual è la parte più difficile? Se vuoi resto vicino mentre chiami, oppure prepariamo insieme due righe da leggere.»", ok: 2, esito: "Riconosci la fatica e offri un sostegno che lascia a lei il gesto. Riuscirci, anche con aiuto, costruisce la sensazione di potercela fare." },
        { testo: "«Sono giorni che la rimandi. È una telefonata, falla e basta.»", ok: 0, esito: "Ha l'apparenza di uno sprone, ma ignora l'ansia e aggiunge vergogna. Di solito la telefonata viene rimandata ancora." }
      ]
    }
  ]);

  /* ---------- esercizi ---------- */
  [].push.apply(window.ESERCIZI, [
    {
      id: "provo",
      tipo: "passi",
      titolo: "Che cosa provo io, adesso",
      durata: "2 minuti",
      scopo: "Accorgerti di quanto sei attivato e trovare l'emozione che viene prima di quella che mostri.",
      fonte: "Il modello GET, cap. 5 §4.3.3 (emozione primaria, vocabolario emotivo); Carbone, Come ti senti?, «Le parole che ci mancano»",
      passi: [
        { t: "Fermati un momento", d: "Non serve un posto speciale. Appoggia i piedi a terra e lascia uscire l'aria lentamente." },
        { t: "Quanto è alta?", d: "Dai un numero da 0 a 10 a ciò che senti adesso. Sopra il 7 non è il momento di discutere né di decidere." },
        { t: "Dove la senti?", d: "Petto, stomaco, gola, mascella, mani? Notalo senza cambiarlo." },
        { t: "Che cosa mostro?", d: "Qual è l'emozione che si vede da fuori? Per esempio rabbia, freddezza, fretta, ironia." },
        { t: "Che cosa c'è un attimo prima?", d: "Scegli la parola che ci va più vicino: paura, impotenza, tristezza, vergogna, senso di colpa, solitudine, stanchezza, delusione." },
        { t: "Dilla in una frase", d: "«In questo momento provo… perché…». Basta dirla a te. Se decidi di dirla all'altra persona, comincia da qui e non dall'accusa." }
      ]
    },
    {
      id: "rileggi",
      tipo: "passi",
      titolo: "Rileggere l'intenzione",
      durata: "3 minuti",
      scopo: "Passare da «lo fa apposta» a una lettura che ti permette di rispondere invece di reagire.",
      fonte: "Il modello GET, cap. 5 §4.3.3; Porr, cap. 9 («Prospettive alternative»)",
      passi: [
        { t: "Il fatto, senza aggettivi", d: "Che cosa è successo, come lo riprenderebbe una telecamera? Per esempio: «Sono uscito e dopo un'ora mi ha mandato dieci messaggi»." },
        { t: "La mia prima lettura", d: "Che intenzione le ho attribuito? Per esempio: «Vuole controllarmi», «Lo fa per farmi sentire in colpa»." },
        { t: "Che cosa mi fa provare questa lettura", d: "Di solito rabbia o stanchezza, e la voglia di rispondere a tono." },
        { t: "Che cosa può aver provato un attimo prima", d: "Prova almeno due ipotesi che non riguardano te: paura di restare sola, un pensiero che si è ingrandito, vergogna per qualcosa." },
        { t: "La seconda lettura", d: "Riscrivi la frase: «Quando succede…, forse prova…». Non devi esserne certo: è un'ipotesi da verificare con una domanda." },
        { t: "Che cosa cambia nella risposta", d: "Con la seconda lettura, quale sarebbe la prima frase che diresti? Tienila pronta. Capire non ti obbliga ad accettare tutto: il limite resta possibile." }
      ]
    },
    {
      id: "anticipa",
      tipo: "passi",
      titolo: "Preparare un momento difficile",
      durata: "5 minuti",
      scopo: "Arrivare pronti a un'occasione che di solito va male: una festa, una partenza, una conversazione delicata.",
      fonte: "Linehan, DBT Skills Training Handouts and Worksheets, Emotion Regulation Handout 19 (prepararsi in anticipo); Porr, cap. 10 («Gestire le contingenze»)",
      passi: [
        { t: "Descrivi la situazione", d: "Quale occasione sta arrivando? Quando, dove, con chi. Solo i fatti." },
        { t: "Dove può incepparsi", d: "Qual è il momento più a rischio? Che cosa potrebbe provare lei in quel punto, e che cosa tu?" },
        { t: "Parlatene prima", d: "Se è possibile, qualche giorno prima e in un momento calmo: «Sabato c'è il pranzo. Che cosa ti renderebbe la giornata più facile?»." },
        { t: "Un piano semplice", d: "Decidete orari, una via d'uscita (un segnale, una pausa, la possibilità di andare via prima) e che cosa farai tu se la tensione sale." },
        { t: "Prova nella mente", d: "Immagina la scena nel punto difficile e vediti mentre fai ciò che hai deciso: respiro, frase breve, pausa." },
        { t: "Dopo", d: "Comunque vada, annota una cosa che ha funzionato. Servirà la prossima volta." }
      ]
    },
    {
      id: "lettera",
      tipo: "passi",
      titolo: "Due righe scritte per validare",
      durata: "5 minuti",
      scopo: "Scrivere un biglietto o un messaggio breve quando a voce il tono rischia di rovinare tutto.",
      fonte: "Porr, Superare il disturbo borderline di personalità, cap. 5 («Scrivere una lettera di validazione»)",
      passi: [
        { t: "Un solo episodio, piccolo", d: "Scegli una cosa sola e recente: un'emozione che hai notato, uno sforzo, qualcosa che ha fatto per sé o per te." },
        { t: "Non cominciare con «tu»", d: "«Tu» può suonare come un dito puntato. Meglio: «Dev'essere stato pesante…», «Immagino la fatica di…»." },
        { t: "Parla di lei, non di te", d: "Niente «sono fiero di te» o «mi hai fatto felice»: riportano tutto alla tua approvazione. Descrivi ciò che ha fatto o provato." },
        { t: "Nessun consiglio", d: "Togli ogni «dovresti», ogni soluzione e ogni spiegazione di come avresti fatto tu." },
        { t: "Normalizza, se è vero", d: "Una frase come «Chiunque ci sarebbe rimasto male» o «Anch'io mi sarei sentito così» aiuta, purché breve." },
        { t: "Non aspettarti una risposta", d: "Il biglietto serve a far sapere che hai visto e ascoltato. Rileggilo, accorcialo, poi lascialo dove lo troverà." }
      ]
    },
    {
      id: "dopocrisi",
      tipo: "passi",
      titolo: "Dopo una crisi: riparare",
      durata: "3 minuti (quando la tensione è scesa)",
      scopo: "Riprendere il filo senza processi né silenzi, e imparare qualcosa per la prossima volta.",
      fonte: "Porr, cap. 9 («Assumetevi la responsabilità, chiedete scusa») e cap. 10; Carbone, Crisi tempestose, «Redigere il piano di salvataggio»",
      passi: [
        { t: "Aspetta il momento", d: "Non subito e non di notte. Chiedi: «Ti va di riparlarne dieci minuti?». Se la risposta è no, proponi un altro momento." },
        { t: "Comincia da te", d: "Se c'è qualcosa che hai detto o fatto male, dillo per primo, senza «ma»: «Ieri ho alzato la voce, mi dispiace»." },
        { t: "Riconosci la sua fatica", d: "«Dev'essere stato molto duro. Grazie per esserci tornata sopra con me.»" },
        { t: "Cerca insieme i primi segnali", d: "«Che cosa hai sentito per primo? C'è stato un momento in cui avrei potuto accorgermene?»" },
        { t: "Una cosa sola per la prossima volta", d: "Scegliete un solo accordo, piccolo e concreto: una parola-segnale, una pausa, una persona da chiamare." },
        { t: "Chiudi con qualcosa di normale", d: "Una passeggiata, un tè, un film. La relazione non è fatta solo di crisi." }
      ]
    }
  ]);

  /* ---------- fonti: elenco completo ---------- */
  window.FONTI = [
    { gruppo: "Per i familiari", voci: [
      "Valerie Porr, Superare il disturbo borderline di personalità. Guida pratica per familiari e clinici. Edizione italiana a cura di E. Pizzi e F. Gallini, Erickson (ed. originale Oxford University Press, 2010).",
      "John G. Gunderson e Perry D. Hoffman (a cura di), Disturbo di personalità borderline. Una guida per professionisti e familiari. Edizione italiana a cura di M. Clerici, Springer, 2010.",
      "Ilaria Carretta, Nicolò Gaj e Paola Maria Porcelli, «Il sostegno ai famigliari delle persone con organizzazione borderline di personalità», cap. 5 di Il modello GET per la personalità borderline (vedi sotto).",
      "Eia Asen e Peter Fonagy, Mentalization-Based Treatment with Families, Guilford Press, 2021."
    ]},
    { gruppo: "Trattamenti e abilità", voci: [
      "Raffaele Visintini (a cura di), Il modello GET per la personalità borderline. Il trattamento con i Gruppi Esperienziali Terapeutici, FrancoAngeli.",
      "Marsha M. Linehan, Cognitive-Behavioral Treatment of Borderline Personality Disorder, Guilford Press.",
      "Marsha M. Linehan, DBT Skills Training Manual e DBT Skills Training Handouts and Worksheets, Guilford Press.",
      "Anthony Bateman e Peter Fonagy, Mentalization-Based Treatment for Personality Disorders. A Practical Guide, Oxford University Press."
    ]},
    { gruppo: "Emozioni e crisi", voci: [
      "Federica Carbone, Crisi tempestose.",
      "Federica Carbone, Come ti senti?",
      "Vittorio Lingiardi, I disturbi della personalità."
    ]}
  ];
})();
