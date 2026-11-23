/**
 * DATABASE FAQ - CHATBOT AI
 * 
 * Personalizza qui tutte le domande e risposte del tuo chatbot
 * Ogni elemento ha:
 * - keywords: array di parole chiave che attivano questa risposta
 * - answer: la risposta che verrà mostrata all'utente
 * - quickReply: testo del pulsante di risposta rapida (opzionale)
 * - priority: livello di priorità (1-10, più alto = più importante)
 *
 * - titolo: nome breve della scheda (pulsanti "Forse intendevi") - facoltativo
 * - domande: frasi come le scrivono gli utenti, anche i messaggi di errore - facoltativo
 *   (le usa il motore di chatbot-ai.js; il motore di prima le ignora)
 *
 * AAA - FAQ aggiornate a tutte le funzioni della piattaforma (05/11/2026)
 * AAA - assistente (20/11/2026): titolo e domande in ogni scheda, schede sui problemi e sugli errori
 * Contenuti allineati al Manuale LogiSmart. Le keyword sono confrontate
 * anche come parte di parola: evitare keyword corte o generiche.
 */

const faqData = [

    // ─────────────────────────────────────────
    // SALUTI E INFORMAZIONI GENERALI
    // ─────────────────────────────────────────
    {
        keywords: ["ciao", "salve", "buongiorno", "buonasera", "hello", "saluti"],
        titolo: "Saluti",
        domande: ["buongiorno a tutti", "ciao assistente", "c'è qualcuno?"],
        answer: "Ciao! Benvenuto nel supporto LogiSmart. Come posso aiutarti oggi?",
        quickReply: null,
        priority: 5
    },
    {
        keywords: ["grazie", "thanks", "ringrazio", "perfetto", "ottimo"],
        titolo: "Ringraziamenti",
        domande: ["grazie mille", "perfetto grazie", "ok ho capito grazie"],
        answer: "Prego! Se hai altre domande, sono qui.",
        quickReply: null,
        priority: 3
    },
    {
        keywords: ["orari", "orario", "apertura", "aperti", "disponibili", "quando posso chiamare", "orari assistenza"],
        titolo: "Orari dell'assistenza",
        domande: ["a che ora rispondete", "quando è aperto il supporto", "siete aperti il sabato?", "fino a che ora posso chiamare"],
        answer: "Il nostro supporto è disponibile dal lunedì al venerdì, dalle 9:00 alle 18:00. Fuori orario apri una richiesta dal portale di assistenza (menu Aiuto, voce «Portale di assistenza» nelle versioni nuove).",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["contatt", "email assistenza", "telefono", "chiamare", "scrivere", "parlare con", "numero", "assistenza", "supporto", "ticket", "freshdesk", "portale"],
        titolo: "Contattare l'assistenza",
        domande: ["come vi contatto", "a chi scrivo per un problema", "numero di telefono dell'assistenza", "mail del supporto", "voglio parlare con una persona"],
        answer: "Puoi contattare il supporto LogiSmart:\n- Email: logismart@brown-co.it\n- Telefono: 01119700354\n- Indirizzo: Via S.Quintino, 4 – 10121 Torino\n- Portale di assistenza (menu Aiuto, voce «Portale di assistenza» nelle versioni nuove): https://brownco.freshdesk.com/support/home",
        quickReply: "Contatti",
        priority: 8
    },
    {
        keywords: ["cosa fa", "a cosa serve", "funzionalit", "caratteristic", "piattaforma", "logismart", "moduli"],
        titolo: "Cosa fa LogiSmart",
        domande: ["a cosa serve questa piattaforma", "cosa posso fare con logismart", "quali funzioni ha il programma"],
        answer: "LogiSmart segue un veicolo dal momento in cui serve spostarlo fino alla consegna. È divisa in moduli (ogni azienda attiva solo quelli acquistati):\n- Logistica: cerca veicolo, carrello, viaggi con i mezzi di trasporto, calendari, targa prova e carro attrezzi, costi, fornitori, trasportatori e rotte\n- Localizzazione: piazzali, zone e posti auto, etichette RFID, inventario, dispositivi GPS e mappe, funzioni di piazzale dell'app\n- Chiavi: armadietti chiavi e chiavi abbinate (dove si trova ogni chiave)\n- Workflow: lavorazioni del veicolo divise in fasi (preparazione, danni, batteria)\nSempre presenti: Dashboard, Cerca veicolo (solo ricerca senza Logistica), Ubicazioni, Veicoli personalizzati/agenzia, Veicoli danneggiati, Amministrazione, Allegati, Report e Aiuto.",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["help", "aiuto", "non capisco", "tutorial", "guida", "spiegami", "manuale", "argomenti"],
        titolo: "Come usare l'assistente",
        domande: ["non so da dove iniziare", "mi aiuti?", "come funziona questa chat", "cosa posso chiederti"],
        answer: "Dimmi cosa vuoi fare e ti guido passo passo. Alcuni argomenti:\n- Prenotare un trasferimento\n- Carrello veicoli\n- Calendario viaggi\n- Piazzali e posti auto\n- Posizione veicoli (RFID)\n- Workflow e fasi\n- Report\n- Utenti e ruoli\nIl manuale completo è nel KIT (Manuale LogiSmart) e la voce Aiuto del menu apre il portale di assistenza.",
        quickReply: null,
        priority: 5
    },
    {
        keywords: ["problema", "errore", "bug", "non funziona", "non va", "bloccat", "si blocca"],
        titolo: "Segnalare un problema",
        domande: ["qualcosa non va", "la pagina non funziona", "ho trovato un errore", "il programma si blocca", "c'è un malfunzionamento"],
        answer: "Mi dispiace per il problema. Per aiutarti velocemente:\n1. Fai uno screenshot dell'errore\n2. Annota cosa stavi facendo (pagina, pulsante, veicolo)\n3. Invia tutto a logismart@brown-co.it oppure apri una richiesta dal portale (voce Aiuto)\n\nSe il messaggio è tra quelli noti (es. «giorno vietato», «nessun viaggio disponibile»), scrivimelo e ti dico subito cosa fare.",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["non vedo", "manca una voce", "voce di menu", "menu mancante", "non compare", "non trovo la voce", "non ho il permesso", "permesso negato"],
        titolo: "Voce di menu o pulsante mancante",
        domande: ["non trovo una funzione nel menu", "a un collega manca una voce", "non vedo il pulsante", "dice che il mio ruolo non ha il permesso per aprire questa pagina", "perché non vedo la sezione", "il menu è diverso da quello del collega", "il tuo ruolo non ha il permesso per aprire questa pagina", "per averlo rivolgiti all'amministratore", "non hai il permesso per questa sezione"],
        answer: "Se non vedi una voce di menu o un pulsante:\n- il modulo non è attivo per la tua azienda, oppure\n- la funzione non è abilitata per la vostra installazione (per attivarla contatta l'assistenza), oppure\n- il tuo ruolo non ha il permesso.\nSe apri una pagina e compare «Il tuo ruolo non ha il permesso per aprire questa pagina», manca il permesso di quella cartella.\nChiedi all'amministratore di controllare Amministrazione › Ruoli. Dopo la modifica esci e rientra: i nuovi permessi valgono dal prossimo accesso.",
        quickReply: null,
        priority: 8
    },

    // ─────────────────────────────────────────
    // ACCESSO E USO DELLE PAGINE
    // ─────────────────────────────────────────
    {
        keywords: ["accedere", "login", "entrare", "accesso piattaforma", "indirizzo piattaforma", "scegli societa", "username"],
        titolo: "Accedere alla piattaforma",
        domande: ["come entro in logismart", "qual è l'indirizzo della piattaforma", "come faccio il login", "dove inserisco utente e password", "quale società scelgo all'accesso"],
        answer: "Per accedere apri nel browser l'indirizzo della piattaforma che ti ha dato l'amministratore (alcune installazioni sono raggiungibili solo dalla rete aziendale o con VPN).\n1. Se compare, scegli la Società su cui lavorare\n2. Inserisci Username e Password (l'icona a occhio mostra quello che scrivi)\n3. Premi Accedi\nSe l'azienda ha pubblicato un avviso, lo vedi subito dopo l'accesso.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["cambio la password", "cambiare la password", "cambia password", "cambio password", "modificare la password", "nuova password"],
        titolo: "Cambiare la password",
        domande: ["voglio una password nuova", "dove si modifica la password", "come aggiorno la mia password"],
        answer: "Per cambiare la password: clicca sull'icona utente in alto a destra e scegli «Cambia password».\nL'amministratore può anche impostarne una nuova dalla tua scheda in Amministrazione › Utenti.",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["dimenticat", "password dimenticata", "dimenticato la password", "non ricordo la password", "reset password", "recupera password", "password provvisoria"],
        titolo: "Password dimenticata",
        domande: ["ho perso la password", "non mi ricordo la password", "come recupero la password", "reimpostare la password", "invia password non arriva"],
        answer: "Hai dimenticato la password? Chiedi all'amministratore: dalla tua scheda in Amministrazione › Utenti può impostarne una nuova oppure inviartene una provvisoria via email. Poi cambiala da icona utente › Cambia password.",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["esco", "come esco", "logout", "uscire", "esci", "disconnett"],
        titolo: "Uscire dalla piattaforma",
        domande: ["come faccio logout", "dove si esce", "come mi disconnetto"],
        answer: "Per uscire clicca sull'icona utente in alto a destra e scegli Logout. È più sicuro che chiudere solo la finestra, soprattutto su un PC condiviso.",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["sessione scaduta", "mi ha scollegato", "mi scollega", "torna al login", "torna alla pagina di accesso", "accedi di nuovo", "password errata", "non riesco ad accedere"],
        titolo: "Sessione scaduta o accesso non riuscito",
        domande: ["mi riporta alla pagina di accesso", "mi ha buttato fuori", "dice sessione scaduta", "nome utente password o società non corretti", "non riesco più ad entrare", "server non raggiungibile", "ho perso il lavoro dopo la sessione scaduta?", "la sessione di lavoro è scaduta o è stata chiusa", "nome utente password o società non corretti oppure l'utente non è attivo", "il mio utente non è attivo"],
        answer: "Mentre la piattaforma è aperta la sessione resta attiva. Se compare «Sessione scaduta» (per esempio dopo un riavvio del server) premi «Accedi di nuovo»: i dati già salvati non si perdono.\n- Se la pagina di accesso dice che i dati non sono corretti, controlla nome utente, password e società\n- Se dice che la licenza è scaduta, contatta l'assistenza\n- Se compare «Server non raggiungibile», controlla la connessione (o la VPN) e riprova",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["cerca veicolo senza logistica", "licenza senza logistica", "modulo logistica non incluso", "non trovo il carrello", "cerca veicolo licenza"],
        titolo: "Licenza senza modulo Logistica",
        domande: ["non ho il carrello nel menu", "la mia licenza non ha la logistica", "perché vedo solo cerca veicolo"],
        answer: "Cerca veicolo c'è con qualsiasi licenza. Se la licenza non comprende il modulo Logistica, «Cerca veicolo» compare direttamente nel menu e serve solo a trovare i veicoli: i tasti «Aggiungi al carrello», «Vai al carrello» e di prenotazione non ci sono. Per carrello e viaggi serve il modulo Logistica: contatta l'assistenza (logismart@brown-co.it).",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["tag attivi non mostrati", "tag non mostrati", "veicolo non compare in posizione veicoli", "da verificare", "posto auto eliminato", "badge tag"],
        titolo: "Tag non mostrati in Posizione veicoli",
        domande: ["la macchina ha il tag ma non compare in posizione veicoli", "avviso tag non mostrati", "parcheggi da verificare"],
        answer: "In Localizzazione RFID → Posizione veicoli:\n- l'avviso giallo «N tag attivi non mostrati» indica tag attivi il cui veicolo non compare: con «Mostra / nascondi elenco» vedi il motivo (veicolo non trovato su Infinity, stato non scelto in Opzioni, società non configurata) e, con il permesso, puoi disabbinarli\n- «da verificare» accanto al piazzale: posto auto, zona o piazzale eliminati o non attivi (motivo passando col mouse)\n- il badge «N tag» indica un veicolo con più tag attivi\n- «Ultimo utente sul tag» è chi ha mosso il tag per ultimo; il report scaricato ha la colonna Note\nPer l'elenco completo dei problemi usa il report «Discordanze posizione / ubicazione».",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["licenza", "verificare la licenza", "non e stato possibile verificare"],
        titolo: "Verifica della licenza",
        domande: ["non è stato possibile verificare la licenza", "avviso licenza", "la licenza è scaduta cosa faccio", "la licenza di logismart è scaduta o non è presente", "licenza dealer scaduta"],
        answer: "Se compare l'avviso «Non è stato possibile verificare la licenza», la piattaforma continua a funzionare con l'ultima licenza verificata. Se il messaggio si ripete per più giorni contatta l'assistenza: logismart@brown-co.it.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["nuovo elemento", "matita", "cestino", "righe per pagina", "ordinare colonna", "pannello laterale", "come si modifica", "come si elimina", "modificare una riga", "eliminare una riga"],
        titolo: "Usare le tabelle",
        domande: ["come aggiungo una riga", "come modifico un elemento con la matita", "come elimino con il cestino", "mostrare più righe per pagina"],
        answer: "Quasi tutte le pagine di Configurazione, Amministrazione e Piazzali funzionano allo stesso modo:\n- tasto verde «Nuovo…»: apre il pannello laterale per creare un elemento\n- Cerca: filtra l'elenco mentre scrivi\n- clic sull'intestazione di una colonna: ordina (di nuovo per invertire)\n- matita blu: modifica; cestino rosso: elimina dopo conferma\n- Salva registra, Chiudi esce senza salvare\nColori: verde = crea/salva, blu = apri/modifica, rosso = elimina, grigio = chiudi/annulla.",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["barra di scorrimento", "scorrere a destra", "scorrere la tabella", "colonne bloccate", "tabella larga", "colonne ferme", "intestazione ferma", "intestazioni visibili", "titoli colonne"],
        titolo: "Tabelle larghe",
        domande: ["la tabella non si vede tutta", "come scorro le colonne a destra", "le colonne escono dallo schermo"],
        answer: "Nelle tabelle con molte colonne (Carrello, Cerca veicolo, Posizione veicoli…):\n- la casella di selezione e i pulsanti restano fermi a sinistra mentre scorri\n- la tabella è alta quanto lo schermo\n- se il fondo della tabella non si vede, una barra di scorrimento resta sempre visibile in fondo allo schermo\nPuoi anche tenere premuto Shift e usare la rotellina del mouse sopra la tabella.\nNelle tabelle lunghe l'intestazione resta ferma in alto quando scorri la pagina: un clic su una colonna la ordina come sempre.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["asterisco", "campo obbligatorio", "campi obbligatori", "evidenziati in rosso", "compilare i campi"],
        titolo: "Campi obbligatori",
        domande: ["campi in rosso non mi fa salvare", "cosa significa l'asterisco", "compilare i campi obbligatori evidenziati in rosso", "non mi fa salvare", "il salvataggio non va", "manca un campo obbligatorio", "data non valida gg/mm/aaaa", "indirizzo non valido deve iniziare con http"],
        answer: "I campi con l'asterisco rosso * sono obbligatori. Se compare «Compilare i campi obbligatori evidenziati in rosso», nel pannello c'è almeno un campo con asterisco vuoto o non valido: compilalo e premi di nuovo Salva.",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["potrebbe essere stato eliminato", "non trovato", "aggiorna l elenco"],
        titolo: "Elemento non trovato",
        domande: ["dice non trovato aggiorna l'elenco", "potrebbe essere stato eliminato", "la riga è sparita", "un collega ha cancellato la voce", "autista non trovato aggiorna l'elenco", "fornitore non trovato", "deposito non trovato", "tariffa non trovata", "regola non trovata", "voce non trovata aggiorna l'elenco", "ricarica la pagina e riprova"],
        answer: "Il messaggio «… non trovato: potrebbe essere stato eliminato» significa che un altro utente ha eliminato l'elemento mentre lo stavi guardando. Ricarica la pagina.",
        quickReply: null,
        priority: 7
    },

    // ─────────────────────────────────────────
    // DASHBOARD
    // ─────────────────────────────────────────
    {
        keywords: ["notifiche pagina principale", "segna come letto", "notifiche lette", "notifiche non spariscono", "cancellare notifiche", "elenco notifiche"],
        titolo: "Notifiche della pagina principale",
        domande: ["come tolgo le notifiche", "segnare le notifiche come lette", "le notifiche non spariscono", "scaricare le notifiche in csv"],
        answer: "Notifiche (pagina che si apre all'accesso): compaiono solo le notifiche da leggere.\n- «Segna come letto»: la notifica sparisce dalla pagina\n- una notifica non letta resta visibile per 7 giorni, poi non compare più\nNon si perde niente: le notifiche lette e quelle più vecchie restano nel file di «Scarica CSV».",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["dashboard", "cruscotto", "pannello principale", "home page", "homepage", "notifiche iniziali"],
        titolo: "Dashboard",
        domande: ["cosa c'è nella dashboard", "a cosa servono i grafici della home", "pannello con le analisi"],
        answer: "Menu › Dashboard raccoglie le analisi di sintesi dei moduli della licenza. Ogni analisi si calcola premendo «Cerca» nel suo riquadro (dopo aver scelto il periodo, dove richiesto):\n- Saturazione mezzi di trasporto (bisarche)\n- Analisi Km mezzi di trasporto\n- Analisi Costi Viaggi\n- Analisi Motivi Trasporto\n- Analisi Viaggi Standard\n- Saturazione Piazzali\n- Ubicazioni e Sedi Contratto\nAll'accesso si aprono le Notifiche; il logo in alto a sinistra riporta sempre lì.",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["saturazione bisarche", "saturazione mezzi", "analisi saturazione", "occupazione bisarca", "riempimento", "posti occupati", "posti liberi"],
        titolo: "Saturazione dei mezzi",
        domande: ["quanto sono pieni i camion", "riempimento delle bisarche", "percentuale di carico dei mezzi"],
        answer: "Saturazione bisarche (Dashboard): per ogni itinerario, tratta per tratta, i posti occupati rispetto ai posti reali dei mezzi di trasporto dei viaggi del periodo (una 4+4 vale 8 posti anche con l'aumento di capacità); ogni veicolo conta il suo impegno. I posti segnalati nel Calendario viaggi contano: gli inutilizzabili si tolgono dai disponibili, il carico esterno si somma agli occupati (fino al 100%). Quello che entra grazie all'aumento porta la tratta oltre il 100% (es. 7 da 1 + 1 da 1,5 = 8,5 su 8). Contano anche i viaggi partiti vuoti.\nColori dei posti occupati:\n- verde: dall'80% (mezzi ben riempiti)\n- giallo: dal 50% all'80%\n- arancione: sotto il 50%\n- verde scuro: oltre il 100% (grazie all'aumento di capacità)\nIn grigio i posti liberi; la linea tratteggiata è la media.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["analisi km", "chilometri", "km mezzi", "km percorsi", "km bisarche"],
        titolo: "Analisi chilometri",
        domande: ["quanti km fanno i mezzi", "chilometri percorsi dai camion", "km per mezzo di trasporto"],
        answer: "Analisi Km mezzi di trasporto (Dashboard): per mezzo di trasporto e itinerario, i viaggi con veicoli, i km per viaggio e i km totali (somma delle distanze delle tappe dell'itinerario). I viaggi rapidi e creati dal carrello non hanno km e sono contati a parte.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["analisi costi", "costi viaggi dashboard", "costo per fornitore", "percentuali costi"],
        titolo: "Analisi costi",
        domande: ["grafico dei costi dei viaggi", "spesa per trasportatore", "quanto costano i trasporti per fornitore"],
        answer: "Analisi Costi Viaggi (Dashboard): per fornitore, solo i viaggi confermati: auto trasportate e costo per ogni società, costo totale e percentuali. Il costo del veicolo è quello diviso alla conferma del viaggio.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["analisi motivi", "motivi trasporto", "statistica motivi"],
        titolo: "Analisi motivi di trasporto",
        domande: ["perché trasportiamo le auto", "statistica dei motivi di trasferimento"],
        answer: "Analisi Motivi Trasporto (Dashboard): tutti i trasferimenti non annullati dei viaggi del periodo, per motivo e per tipo di veicolo (N, U, O, P, A), con la percentuale sul totale.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["viaggi standard", "itinerari standard", "costo medio ad auto"],
        titolo: "Viaggi standard",
        domande: ["costo medio per auto dei viaggi standard", "analisi degli itinerari standard"],
        answer: "Analisi Viaggi Standard (Dashboard): solo gli itinerari con la casella «Standard». Per società e itinerario: viaggi (e quanti confermati), auto trasportate, costo dei viaggi confermati e costo medio ad auto.\nLa casella Standard si imposta in Configurazione › Itinerari.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["saturazione piazzali", "piazzale pieno", "capienza piazzale", "occupazione piazzale"],
        titolo: "Saturazione piazzali",
        domande: ["quanto è pieno il piazzale", "posti liberi nel piazzale", "capienza dei piazzali"],
        answer: "Saturazione Piazzali (Dashboard): veicoli presenti adesso in ogni piazzale (tag attivi), per tipo N/U/O/P/A, posti liberi e saturazione = veicoli / capienza.\nColori: verde fino al 75%, giallo fino al 95%, arancione oltre (piazzale quasi pieno).\nServe la capienza reale in Piazzali › Anagrafica piazzali (vuota, 0 o 9999 = non calcolata). Clic sul piazzale: dettaglio per zona e società.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["sedi contratto", "ubicazioni e sedi", "sede contratto dashboard"],
        titolo: "Sedi contratto",
        domande: ["analisi per sede contratto", "auto per sede"],
        answer: "Ubicazioni e Sedi Contratto (Dashboard): veicoli con tag attivo per ubicazione e sede contratto, con i totali. Cliccando un numero vedi l'elenco dei veicoli (società, tipo, targa, telaio, marca, modello).",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["errore imprevisto", "si e verificato un errore", "riprova piu tardi"],
        titolo: "Errore imprevisto",
        domande: ["è comparso un errore", "riprova più tardi", "si è verificato un errore", "pagina con errore", "errore durante l'eliminazione", "errore durante il salvataggio", "non è stato possibile calcolare questa analisi", "la pagina resta bianca"],
        answer: "Se nella Dashboard compare «Si è verificato un errore imprevisto», riprova; se si ripete, fai uno screenshot e invialo a logismart@brown-co.it indicando quale analisi e quale periodo avevi scelto.",
        quickReply: null,
        priority: 6
    },

    // ─────────────────────────────────────────
    // AMMINISTRAZIONE
    // ─────────────────────────────────────────
    {
        keywords: ["ruolo", "ruoli", "permessi", "gestione ruoli", "macroaree", "abilitare un utente"],
        titolo: "Ruoli e permessi",
        domande: ["come abilito una funzione a un utente", "dare i permessi", "cosa è un ruolo", "cambiare i permessi di un ruolo", "un utente non può fare una cosa"],
        answer: "Amministrazione › Ruoli: un ruolo è un insieme di permessi (es. Gestore logistica, Venditore, Preparatore, Fornitore). Nella scheda del ruolo spunti le caselle raggruppate per area:\n- Menu e cartelle (Configurazione, Mezzi di trasporto, Ubicazioni…)\n- Ricerca veicoli, Carrello, Prenotazioni\n- Calendario viaggi (spostare trasferimenti, confermare/riaprire, cambiare mezzo e data, mail, CMR)\n- Report (un permesso per ciascun report)\n- Piazzali, Localizzazione RFID, Localizzazione GPS, Chiavi\n- Workflow, Workflow danni, Workflow batteria (ognuno con le sue cartelle), Allegati, App mobile\nLe caselle sono nello stesso ordine del menu e ogni pagina si apre solo con il suo permesso.\nSe nella scheda manca un permesso, quella funzione non è abilitata per la vostra installazione: per attivarla contatta l'assistenza.\nLe modifiche valgono dal prossimo accesso: chiedi agli utenti di uscire e rientrare.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["utente", "utenti", "nuovo utente", "creare un utente", "gestione utenti", "disattivare utente"],
        titolo: "Utenti",
        domande: ["creare un account nuovo", "aggiungere un collega", "disattivare un utente", "non posso eliminare il mio utente", "non puoi disattivare il tuo utente", "non puoi eliminare il tuo utente", "non puoi disattivare il tuo utente", "campo obbligatorio serve per invia password"],
        answer: "Amministrazione › Utenti: per ogni utente indichi Username, Nome, Email e Ruolo (obbligatori) e la casella Attivo (senza spunta l'utente non entra più, ma il suo storico resta).\nCon più società, per un utente nuovo scegli anche la Società: puoi creare utenti di qualunque società, da qualunque società sei entrato (per un utente esistente la società non si cambia).\nCon «Riceve email…» scegli quali avvisi riceve; i filtri Ubicazione, Punto vendita, Marca e Venditore limitano le email a ciò che lo riguarda.\nI tasti «Importa da Infinity» creano gli utenti partendo dal gestionale.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["importa da infinity", "importare utenti", "utenti dal gestionale"],
        titolo: "Importare utenti da Infinity",
        domande: ["prendere gli utenti dal gestionale", "importa utenti da infinity"],
        answer: "In Amministrazione › Utenti i tasti «Importa da Infinity» e «Importa da Infinity (tutte le società)» creano gli utenti partendo dal gestionale, così non devi inserirli a mano. Poi assegna a ciascuno il ruolo giusto.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["notifiche", "email automatiche", "riceve email", "avvisi email", "quali email"],
        titolo: "Notifiche email",
        domande: ["chi riceve le mail", "come attivo le email automatiche", "abilitare un utente a ricevere le mail"],
        answer: "Le email automatiche si attivano nella scheda utente (Amministrazione › Utenti) con le caselle «Riceve email…»: carrello, trasferimento, veicoli danneggiati, veicoli RFID venduti o non venduti. I filtri Ubicazione, Punto vendita, Marca e Venditore limitano gli avvisi.\nAltre email: pianificazione/eliminazione dei viaggi, annullamento per giorni vietati, mail al trasportatore e al deposito dal Calendario viaggi.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["mail carrello", "email carrello", "chi riceve la mail", "riceve email carrello", "mail veicolo aggiunto", "mail veicolo pronto", "mail trasmesso"],
        titolo: "Mail del carrello",
        domande: ["a chi arriva la mail del carrello", "mail quando aggiungo al carrello", "chi riceve le mail delle richieste"],
        answer: "Tutte le mail del carrello (veicolo aggiunto, pronto, trasmesso, richiesta annullata, veicolo rimosso, anche dal Carrello storico, e gli avvisi dell'azienda di trasporto esterna) arrivano a:\n- l'utente che fa l'operazione\n- gli amministratori (ruolo con «Accesso al menù Amministrazione»)\n- il richiedente della riga (colonna «Richiedente» di Aggiungi al carrello)\nsempre solo se hanno la spunta «Riceve email carrello» in Amministrazione › Utenti (utente attivo, con email).",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["non ricevo", "non arrivano le email", "mail non arriva", "email non arrivano", "spam", "posta indesiderata"],
        titolo: "Email che non arrivano",
        domande: ["le mail non mi arrivano", "non ricevo nessuna email", "le email finiscono nello spam", "la mail di invia password non arriva"],
        answer: "Non ricevi le email della piattaforma?\n1. Nella tua scheda utente controlla che sia spuntata la casella «Riceve email…» giusta e che l'indirizzo sia corretto\n2. Guarda nella posta indesiderata\n3. Per le mail del carrello: arrivano solo a chi fa l'operazione, agli amministratori e al venditore della riga\nSe nessuno riceve email, il problema è nella configurazione del server di posta: avvisa l'assistenza.",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["filtro carrello fornitore", "utente fornitore", "fornitore esterno carrello"],
        titolo: "Utente di un fornitore esterno",
        domande: ["utente del trasportatore che vede solo le sue richieste", "filtro fornitore nella scheda utente"],
        answer: "Nella scheda utente il campo «Fornitore (filtro carrello)» serve per gli utenti di un fornitore esterno: nel carrello vedono solo le richieste destinate a quel fornitore.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["opzioni", "impostazioni generali", "giorni storicizzazione", "giorni di attesa", "caparra", "presa in carico importo", "importo presa in carico"],
        titolo: "Opzioni generali",
        domande: ["dove sono le impostazioni", "giorni di attesa del viaggio multiplo", "giorni di storicizzazione del carrello", "importo caparra", "dove si impostano le opzioni della piattaforma"],
        answer: "Amministrazione › Opzioni (dopo una modifica premi «Salva modifiche»; Reset annulla le modifiche non salvate):\n- Giorni per storicizzazione carrello: dopo quanti giorni una richiesta conclusa passa al Carrello storico\n- Giorni di attesa viaggio multiplo: giorni minimi tra il primo e il secondo viaggio di un viaggio multiplo (0 = anche lo stesso giorno)\n- Importo minimo caparra contabilizzata (serve anche per la priorità del carrello)\n- Importo presa in carico veicolo (report «Costi presa in carico veicoli»)\n- Status Veicoli da considerare nelle ricerche\n- Colonne extra del report «Veicoli in partenza e arrivo»\n- Etichette QR dei piazzali\n- Parcheggio legato all'ubicazione\n- Attività automatiche (pulizia parcheggi, veicoli usciti, esportazione su Infinity, report giornaliero)",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["limitazioni orarie", "limitazioni giornaliere", "orario limite", "termine di prenotazione", "termine prenotazione scaduto", "prenotabilita"],
        titolo: "Limiti orari di prenotazione",
        domande: ["dopo una certa ora non posso più prenotare", "orario limite per prenotare", "termine di prenotazione scaduto", "mi blocca la prenotazione per oggi", "impossibile procedere termine di prenotazione scaduto per il"],
        answer: "Il messaggio «Impossibile procedere: termine di prenotazione scaduto per il …» significa che il tuo ruolo ha le limitazioni giornaliere di prenotabilità e per quella data è passato l'orario limite. Scegli una data successiva o chiedi a chi gestisce la logistica.\nLe limitazioni si impostano nella scheda del ruolo (Amministrazione › Ruoli, gruppo Prenotazioni).",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["status veicoli", "stato veicolo", "da ordinare", "assegnato", "stock", "venduto", "uscito", "stornato"],
        titolo: "Status dei veicoli",
        domande: ["quali stati vengono cercati", "status veicolo da ordinare assegnato", "perché un veicolo venduto non compare"],
        answer: "Status veicoli (dal gestionale): R = A richiesta, D = Da ordinare, O = Ordinato, C = Virtuale, T = Assegnato, S = Stornato, A = Stock, V = Venduto, U = Uscito.\nQuali status considerare nelle ricerche si decide in Amministrazione › Opzioni › Status Veicoli; in Cerca veicolo c'è il filtro «Status Veicoli».",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["server posta", "smtp", "server email", "configurazione email", "testmail"],
        titolo: "Server di posta",
        domande: ["configurare smtp", "errore smtp", "le mail della piattaforma non partono", "impostare il server email", "errore smtp senza dettaglio", "problema di certificato ssl tls verso il server di posta"],
        answer: "Il server di posta si configura nel file application-config.ini della cartella di installazione (parametri EmailUseSMTP, EmailSMTP, EmailUsername, EmailPassword, EmailFrom, EmailFromName, EmailPort, EmailSecProtocol).\nPer una prova apri http://[indirizzo piattaforma]/TestMail/Send. Se non sei sicuro, fatti aiutare dall'assistenza.",
        quickReply: null,
        priority: 6
    },

    // ─────────────────────────────────────────
    // CONFIGURAZIONE
    // ─────────────────────────────────────────
    {
        keywords: ["configurazione", "impostare la piattaforma", "da dove cominciare", "primi passi", "ordine configurazione"],
        titolo: "Prima configurazione",
        domande: ["da dove comincio a configurare", "primi passi per impostare la piattaforma", "cosa devo configurare prima"],
        answer: "Per preparare la piattaforma ai viaggi segui quest'ordine (Configurazione):\n1. Ubicazioni\n2. Fornitori, depositi e autisti\n3. Mezzi di trasporto\n4. Itinerari\n5. Tariffario fornitori\n6. Impegno veicoli\n7. Regole: giorni vietati, motivi trasferimento, priorità carrello\n8. Ruoli e utenti (Amministrazione)\nCosì non ti troverai mai a cercare in un elenco un valore non ancora creato.",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["ubicazione", "ubicazioni", "nuova ubicazione", "sede", "sedi", "deposito email", "indirizzo email pdi", "sede commerciale", "collegamento a infinity", "codice infinity", "deposito officina"],
        titolo: "Ubicazioni (sedi)",
        domande: ["inserire una sede nuova", "creare un'ubicazione", "collegare una sede a infinity", "nuova filiale"],
        answer: "Configurazione › Ubicazioni: ogni sede fisica dove può trovarsi un veicolo. Campi principali: Codice ubicazione e Ubicazione (obbligatori), indirizzo, telefono, capacità (posti e mq).\n- Email per notifiche: chi riceve gli avvisi di questa sede\n- Indirizzi email PDI / Deposito: destinatari della mail al deposito dal Calendario viaggi (scrivi un indirizzo e premi Invio)\n- Collegamento a Infinity, per ogni società: Ubicazione (dove sono i veicoli nuovi/usati), Sede commerciale (sede del contratto) e Deposito officina. Ogni codice di ubicazione e di deposito va su una sola ubicazione; la stessa sede commerciale può stare su più ubicazioni (es. showroom e piazzale della stessa sede)\n- Attivo: togli la spunta per nascondere una sede chiusa senza perderne lo storico",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["fornitor", "anagrafica fornitori", "depositi", "anagrafica depositi", "ragione sociale", "id fornitore"],
        titolo: "Fornitori e depositi",
        domande: ["aggiungere un fornitore", "anagrafica depositi", "inserire un deposito"],
        answer: "Configurazione › Anagrafica fornitori / depositi: ragione sociale, indirizzo, telefono, cellulare e indirizzi email (scrivi un indirizzo e premi Invio: diventa un'etichetta con la × per toglierlo).\nI campi «ID Fornitore Società 1…5» (o ID Deposito Società) collegano la stessa ditta al codice che ha nel gestionale di ciascuna società: compilali se lavori con più società.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["autista", "autisti", "anagrafica autisti"],
        titolo: "Autisti",
        domande: ["inserire un autista", "anagrafica autisti", "nuovo autista"],
        answer: "Configurazione › Anagrafica autisti: codice, nome, cellulare ed email dell'autista. Gli autisti completano le informazioni di targa prova, email e documenti di viaggio.",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["trasportatori", "trasportatore esterno", "api trasportatore", "rotte", "rotte trasportatori", "url trasmetti"],
        titolo: "Trasportatori esterni",
        domande: ["trasportatore con api", "rotte del trasportatore", "trasmettere al trasportatore esterno"],
        answer: "Configurazione › Trasportatori: i trasportatori esterni collegati via internet. Quando nel carrello premi «Veicolo Trasmesso», la richiesta parte automaticamente verso il loro sistema.\nI dati tecnici (Tipo API, URL Trasmetti, URL Annulla, URL Info, API Key, Username, Password/Token) li fornisce il trasportatore.\nIn Rotte trasportatori associ a ogni trasportatore le tratte che copre (Ubicazione Partenza e Arrivo).",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["mezzo di trasporto", "mezzi di trasporto", "bisarca", "bisarche", "nuova bisarca", "capacita", "piano 1", "piano 2", "tipologia calendario"],
        titolo: "Mezzi di trasporto",
        domande: ["inserire una bisarca", "aggiungere un camion", "capacità del mezzo", "quanti posti ha la bisarca"],
        answer: "Configurazione › Mezzi di trasporto: per ogni mezzo nome, Capacità p. 1 e Capacità p. 2 (il totale si calcola da solo), Fornitore e Tipologia calendario:\n- Bisarche: nel Calendario viaggi, per trasporti di più veicoli\n- Targa Prova: nel Calendario targa prova (un autista guida il veicolo)\n- Carro Attrezzi: nel Calendario carro attrezzi (un veicolo alla volta, es. non marciante)",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["aumento capacita", "mezzo posto", "0,5 posti", "capacita aumentata", "non entra"],
        titolo: "Aumento capacità bisarca",
        domande: ["mezzo posto in più per piano", "caricare più auto sulla bisarca", "aumento capacità"],
        answer: "Con la casella «Aumento capacità bisarca» (Configurazione › Mezzi di trasporto) ogni piano esistente vale 0,5 posti in più: una 4+4 diventa 4,5+4,5 (9 posti), una 6+0 diventa 6,5+0. L'aumento serve solo a far entrare i veicoli: nella Dashboard vale la capacità reale (4+4 = 8): ogni veicolo conta il suo impegno, quindi quello che entra grazie all'aumento porta la tratta oltre il 100%. I costi non cambiano.\nLa piattaforma distribuisce i veicoli sui piani da sola e, se un veicolo non entra, prova a ridistribuire quelli già caricati.\nTogliendo la spunta, se ci sono viaggi futuri che non entrerebbero più, il salvataggio viene bloccato con l'elenco dei viaggi da spostare prima con «Cambia mezzo di trasporto».\nSe compare «Al momento questa impostazione non può essere salvata» il database va aggiornato: contatta l'assistenza.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["itinerario", "itinerari", "tappe", "tratta", "tratte", "percorso", "crea itinerario", "carico scarico"],
        titolo: "Itinerari",
        domande: ["creare un itinerario", "tappe del viaggio", "percorso fisso del camion"],
        answer: "Configurazione › Itinerari: il percorso di un viaggio come sequenza di tappe. Per ogni tappa: Ubicazione, orari di Arrivo e Partenza, Distanza (Km) dalla tappa precedente e se è un punto di Carico/Scarico.\nUbicazione 1 (partenza) e Ubicazione 2 sono obbligatorie.\nLa casella «Standard» segnala gli itinerari ricorrenti analizzati nella Dashboard (Viaggi standard).\nL'elenco mostra una riga per itinerario (stato Attivo/Disattivo, percorso, orari e km totali): clicca sulla riga per vedere le tappe. Con «Mostra» scegli Attivi, Disattivi o Tutti.\nLa tappa «Solo scarico» chiude il viaggio: ha solo l'ora di arrivo.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["eliminare itinerario", "elimina itinerario", "cancellare itinerario", "itinerario non si elimina", "disattivare itinerario", "disattiva itinerario", "itinerario disattivo", "modificare itinerario"],
        titolo: "Eliminare un itinerario",
        domande: ["non riesco a cancellare un itinerario", "impossibile eliminare l'itinerario", "disattivare un itinerario", "non è stato possibile disattivare l'itinerario"],
        answer: "Un itinerario si può eliminare solo se nessun viaggio lo usa, compresi i viaggi conclusi: ogni viaggio conserva il riferimento all'itinerario da cui è nato. Se è usato, la finestra di eliminazione dice quanti viaggi lo usano e in che periodo, e offre il pulsante «Disattiva».\nUn itinerario disattivato resta nell'elenco come «Disattivo» e non compare più in Pianificazione viaggi; i viaggi già creati non cambiano.\nPuoi modificare un itinerario in qualunque momento: le modifiche valgono per i nuovi viaggi, perché ogni viaggio conserva le proprie tappe e i propri orari.",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["casella standard", "standard itinerario", "cosa vuol dire standard"],
        titolo: "Itinerario standard",
        domande: ["cosa significa la casella standard", "itinerario standard a cosa serve"],
        answer: "Nell'itinerario la casella «Standard» segnala i viaggi ricorrenti: sono quelli analizzati nel grafico «Analisi Viaggi Standard» della Dashboard. Non cambia nient'altro.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["prezzo per posto", "imposto il prezzo", "prezzo", "tariffario", "tariffa", "tariffe", "prezzo trasporto", "per posto auto", "mezzo intero", "vale anche al ritorno", "modo di pagamento"],
        titolo: "Tariffario fornitori",
        domande: ["inserire i prezzi del trasportatore", "costo per posto auto", "listino del fornitore", "prezzo per tratta", "il mezzo di trasporto non è di questo fornitore", "il tariffario non è ancora disponibile va aggiornato il database"],
        answer: "Configurazione › Tariffario fornitori: ogni tariffa vale per un fornitore su un percorso (Da → A), con Modo di pagamento e Prezzo:\n- Per posto auto: il prezzo si moltiplica per i posti occupati da ogni veicolo (Impegno veicoli)\n- Per mezzo di trasporto intero: un prezzo per tutto il mezzo su quel percorso\nOpzioni: «Vale anche al ritorno»; Mezzo di trasporto facoltativo (se indicato vale solo per quel mezzo e prevale sulla tariffa generale).\nCon «Nuova tariffa › Da itinerario» inserisci il costo totale o per tratta di un itinerario come nel vecchio tariffario.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["tariffa mancante", "mancante", "tariffe mancanti", "costo incompleto", "incompleto", "costo previsto"],
        titolo: "Tariffa mancante",
        domande: ["il costo del viaggio non è completo", "tariffa mancante", "manca il prezzo"],
        answer: "«Costo previsto» è il costo calcolato dal Tariffario fornitori per un viaggio non ancora confermato. Se compare «(incompleto)» o «Tariffa mancante», per qualche percorso del viaggio non c'è una tariffa: passa il mouse per vedere quale e aggiungila in Configurazione › Tariffario fornitori.\nSe il prezzo cambia, il nuovo vale per i viaggi non ancora confermati: quelli confermati tengono il loro costo.",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["impegno veicoli", "impegno", "spazio occupato", "quanti posti occupa", "dimensione veicoli", "impegno per tutti", "impegno marca", "codice non trovato in infinity"],
        titolo: "Impegno veicoli",
        domande: ["un veicolo occupa più di un posto", "quanti posti prende un furgone", "spazio occupato sulla bisarca", "regole di impegno per marca e modello"],
        answer: "Configurazione › Impegno veicoli: quanti posti occupa un veicolo sul mezzo di trasporto, per tipo (N/U/O o «Tutti i tipi»), Marca e Modello (es. citycar 1, furgone 2). Quando un veicolo viene caricato su un viaggio, la piattaforma somma gli impegni e li confronta con la capacità del mezzo.\nMarca e Modello si scelgono dagli elenchi di Infinity (si possono anche scrivere a mano). Marca vuota = tutte le marche, Modello vuoto = tutti i modelli della marca. Se più regole valgono per un veicolo vale la più precisa (modello, poi marca, poi tipo); senza regole il veicolo occupa 1 posto. Un codice segnalato in rosso «Codice non trovato in Infinity» non si applica a nessun veicolo: correggilo scegliendolo dall'elenco.\nLa voce «Dimensione veicoli» è predisposta ma in questa versione non contiene ancora funzioni.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["giorni vietati", "giorno vietato", "festivita", "chiusura", "blocco circolazione", "tra i giorni vietati"],
        titolo: "Giorni vietati",
        domande: ["giorno festivo senza viaggi", "inserire una chiusura", "il giorno selezionato è tra i giorni vietati", "non si viaggia nei festivi", "blocco della circolazione"],
        answer: "Configurazione › Giorni vietati: le date in cui non si possono programmare viaggi (festività, chiusure, blocchi alla circolazione). Premi «Nuovo giorno vietato» e scrivi la data (gg/mm/aaaa).\nAttenzione: inserendo un giorno vietato i viaggi già programmati in quella data vengono annullati. Controlla prima il Calendario viaggi.\nIl messaggio «Impossibile procedere: il giorno selezionato è tra i giorni vietati» indica che devi scegliere un altro giorno.",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["motivi trasferimento", "motivo trasferimento", "causali", "colore motivo", "limita i motivi"],
        titolo: "Motivi di trasferimento",
        domande: ["aggiungere un motivo di trasporto", "causale del trasferimento", "colore del motivo", "colore non valido formato rrggbb"],
        answer: "Configurazione › Motivi trasferimento: le causali tra cui sceglie chi chiede uno spostamento (es. Consegna cliente, Preparazione, Rientro in sede). A ogni motivo puoi dare un Colore, che lo rende riconoscibile nei calendari. I motivi non più usati si disattivano togliendo «Attivo».\nNella scheda del ruolo puoi limitare i motivi utilizzabili («Limita i motivi trasferimento a»).",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["priorita", "priorita carrello", "livello priorita", "urgente", "ordine richieste"],
        titolo: "Priorità del carrello",
        domande: ["richiesta urgente", "ordine delle richieste nel carrello", "regole di priorità"],
        answer: "Configurazione › Priorità carrello: stabilisce in che ordine lavorare le richieste. Ogni regola ha un Livello priorità e condizioni sul veicolo: Nuovo, Usato, Immatricolato da più di 7 giorni, Caparra, Finanziamento, Venduto. Se indichi un Utente, vale solo per le sue richieste.\nEsempio: livello 1 venduti con caparra, livello 2 venduti senza caparra, livello 3 il resto. Nel carrello la colonna «Priorità» (1 = la più urgente) ti dice da dove partire.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["colonne ricerca", "configura colonne", "colonne cerca veicolo", "mostrare colonne", "scegli colonne", "colonne carrello", "nascondere colonne", "nascondere una colonna"],
        titolo: "Colonne di Cerca veicolo",
        domande: ["aggiungere colonne alla ricerca", "scegliere le colonne", "mostrare altri dati nella ricerca"],
        answer: "In Cerca veicolo, Carrello veicoli e Carrello storico premi «Scegli colonne» sopra la tabella:\n- togli la spunta alle colonne che non vuoi vedere e premi «Salva» («Annulla» chiude senza cambiare nulla)\n- «Seleziona tutte» e «Deseleziona tutte» spuntano o tolgono tutte le caselle in un colpo\n- di partenza tutte le colonne sono visibili; la scelta vale per il tuo utente, su qualunque PC\n- il Carrello ha una sola scelta per Carrello veicoli e Carrello storico\n- quella di Cerca veicolo vale anche per Workflow, Preconsegne e Galleria immagini",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["veicoli personalizzati", "veicolo personalizzato", "veicolo non presente", "aggiungere un veicolo", "veicolo che non arriva dal gestionale"],
        titolo: "Veicoli personalizzati",
        domande: ["il veicolo non è su infinity", "inserire un veicolo a mano", "targa già presente", "aggiungere un veicolo che non c'è", "non hai il permesso di gestire i veicoli personalizzati", "non hai il permesso di gestire questo tipo di veicolo"],
        answer: "Configurazione › Veicoli personalizzati/agenzia: i veicoli che non arrivano dal gestionale ma che devi comunque spostare. Sono obbligatori solo il telaio e l'impegno sul mezzo di trasporto: marca, modello e ubicazione puoi lasciarli vuoti se il veicolo non è ben definito. Nelle ricerche hanno il codice P.\n- Telaio / Identificativo: il telaio oppure, se non c'è, un nome di comodo (es. BLOCCAPOSTO1), al massimo 17 caratteri, con lettere, cifre, spazi e trattini, senza doppioni\n- Impegno: sul viaggio il veicolo occupa i posti indicati (es. 2 o 1,5)\n- Nella stessa pagina ci sono anche i veicoli di agenzia (casella «Veicolo Agenzia»)",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["veicoli agenzia", "veicolo agenzia", "agenzia"],
        titolo: "Veicoli agenzia",
        domande: ["veicoli dell'agenzia", "telaio già presente", "inserire un'auto dell'agenzia", "non hai il permesso di eliminare i veicoli dell'agenzia"],
        answer: "I veicoli di agenzia si gestiscono in Configurazione › Veicoli personalizzati/agenzia, con la casella «Veicolo Agenzia» (codice A nelle ricerche): la voce separata «Veicoli agenzia» non c'è più.\n- Con i permessi per entrambi i tipi vedi la colonna «Agenzia» e il filtro Tutti / Personalizzati / Agenzia\n- Per eliminarli serve il permesso «Consenti di eliminare i veicoli di agenzia»",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["veicoli danneggiati", "avaria", "avarie", "danno", "danni veicolo", "grado avaria"],
        titolo: "Veicoli danneggiati",
        domande: ["segnalare un'avaria", "auto con un danno", "elenco delle avarie", "non hai il permesso di accedere a veicoli danneggiati"],
        answer: "Configurazione › Veicoli danneggiati: elenco dei veicoli con un'avaria registrata (anche dall'app con Gestione Avarie), con grado e descrizione del danno: tutti i tipi di veicolo (nuovi, usati, officina, personalizzati, agenzia) e tutte le società, con le colonne Tipo e Società. Si possono consultare, cercare ed eliminare, non modificare. Serve il permesso «Accesso alla cartella Veicoli danneggiati».\nPer gestire perizia e riparazione usa il Workflow danni; l'elenco completo si scarica col report «Veicoli Danneggiati».",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["dati aggiuntivi", "informazioni extra", "numero chiavi", "kit gonfiaggio", "triangolo"],
        titolo: "Dati aggiuntivi del veicolo",
        domande: ["numero di chiavi", "kit gonfiaggio", "campi in più sul veicolo", "è già compilato su dei veicoli eliminazione bloccata puoi disattivarlo"],
        answer: "Configurazione › Anagrafica dati aggiuntivi veicolo: informazioni extra da raccogliere sui veicoli, per esempio dall'app (numero chiavi, triangolo, kit di gonfiaggio). Per ogni dato: nome, descrizione, Obbligatorio e Attivo. La colonna «Veicoli» indica quanti veicoli l'hanno già compilato.",
        quickReply: null,
        priority: 6
    },

    // ─────────────────────────────────────────
    // CERCA VEICOLO E TRASFERIMENTI
    // ─────────────────────────────────────────
    {
        keywords: ["prenotare un trasferimento", "trasferimento", "trasferire", "spostare un veicolo", "come si prenota", "procedura", "prenotazione"],
        titolo: "Trasferire un veicolo",
        domande: ["portare un'auto in un'altra sede", "spedire una vettura", "come si fa un trasferimento", "mandare una macchina in un'altra concessionaria"],
        answer: "Il percorso di un trasferimento:\n1. Viaggi › Cerca veicolo: trova il veicolo e spuntalo\n2. «Aggiungi al carrello»: partenza, arrivo, motivo, data e annotazioni\n3. Carrello veicoli: la richiesta compare con la sua priorità\n4. Chi gestisce la logistica preme «Effettua una prenotazione» (o «Prenota selezionati») e sceglie un viaggio disponibile, oppure ne crea uno nuovo\n5. Calendario viaggi: mail a trasportatore e deposito, PDF, conferma del viaggio\n6. Dopo i giorni impostati in Opzioni la richiesta passa al Carrello storico",
        quickReply: "Prenotare un trasferimento",
        priority: 9
    },
    {
        keywords: ["cerca veicolo", "cercare un veicolo", "trovare un veicolo", "ricerca veicoli", "filtri", "targa", "telaio", "piu telai", "strumenti ricerca veicolo", "seleziona filtri", "filtri da visualizzare"],
        titolo: "Cerca veicolo",
        domande: ["come cerco un'auto", "ricerca per targa o telaio", "trovare una vettura in stock"],
        answer: "Viaggi › Cerca veicolo, riquadro «Strumenti ricerca veicolo»:\n- un campo vuoto mostra «Tutto» e vale per tutti i veicoli; i campi con la freccia ▾ sono elenchi; nelle date «Annulla» riporta a «Tutto»\n- «Seleziona filtri da visualizzare» sceglie quali filtri vedere (salvato per il tuo utente; all'inizio N/U/O/P, Targa, Telaio, ID veicolo, Status veicoli, Ubicazione, Cerca in tutte le società). Un filtro nascosto non filtra\n- caselle: Solo veicoli in contratto, Solo veicoli prenotati su Infinity, Ubicazione diversa dalla sede del contratto, Con workflow in corso, Con consegna nel calendario consegne di Infinity, Cerca in tutte le società (serve il permesso)\n- Avvia ricerca esegue; Azzera filtri riporta tutto a «Tutto»\nPer cercare più telai insieme separali con il punto e virgola (TELAIO1;TELAIO2).\nSulla riga: dettagli, Prenota un viaggio, Prenota targa prova, Prenota carro attrezzi e, se localizzato, Apri in Google Maps.",
        quickReply: null,
        priority: 9
    },
    {
        keywords: ["non trovo il veicolo", "veicolo non trovato", "non esce", "non compare il veicolo", "nessun risultato", "tutti i tipi", "nessun veicolo trovato", "mostrati 1 a 0"],
        titolo: "Veicolo non trovato nella ricerca",
        domande: ["la ricerca non trova l'auto", "nessun veicolo trovato", "la macchina non compare in cerca veicolo", "cerco la targa ma non esce niente"],
        answer: "Se in Cerca veicolo non trovi un veicolo:\n- premi «Azzera filtri» (i filtri tornano a «Tutto») e togli le caselle\n- spunta «Cerca in tutte le società» (serve il permesso)\n- controlla lo Status Veicoli e le opzioni in Amministrazione › Opzioni › Status Veicoli\n- cerca per targa o telaio con N/U/O/P = «Tutti i tipi (con targa o telaio)», in fondo all'elenco: cerca anche tra officina, personalizzati e agenzia\n- se il veicolo non è nel gestionale, crealo in Configurazione › Veicoli personalizzati",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["dettaglio veicolo", "scheda veicolo", "dati veicolo", "informazioni veicolo"],
        titolo: "Dettaglio del veicolo",
        domande: ["vedere i dati di un'auto", "scheda della vettura", "informazioni sul veicolo"],
        answer: "Per vedere tutti i dati di un veicolo usa il tasto «i» (Dettagli) sulla riga in Cerca veicolo, nel Carrello o nel Calendario viaggi. I dati arrivano dal gestionale del dealer (Infinity).",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["aggiungere al carrello", "aggiungi al carrello", "mettere nel carrello", "richiesta trasferimento", "compila tutti", "consulente", "richiedente"],
        titolo: "Aggiungere al carrello",
        domande: ["mettere un'auto nel carrello", "richiedere un trasferimento", "come faccio una richiesta di trasporto"],
        answer: "Per aggiungere al carrello:\n1. In Cerca veicolo spunta uno o più veicoli\n2. Premi «Aggiungi al carrello»\n3. Indica per ogni riga Partenza, Arrivo, Motivazione e Data richiesta (obbligatori), Richiedente (chi chiede il trasferimento: nel carrello è «Richiesto da») ed eventuali Annotazioni\n4. Con più veicoli usa «Compila tutti i veicoli contemporaneamente» e correggi poi le singole righe\nIl richiedente è sempre l'utente con cui hai fatto l'accesso. Per ogni veicolo parte la mail carrello (a te, agli amministratori e al venditore, se hanno la spunta).",
        quickReply: null,
        priority: 9
    },
    {
        keywords: ["carrello", "carrello veicoli", "richieste in attesa", "lista di lavoro"],
        titolo: "Carrello veicoli",
        domande: ["cosa c'è nel carrello", "richieste in attesa di trasporto", "auto da spedire", "elenco delle richieste"],
        answer: "Viaggi › Carrello veicoli: le richieste di trasferimento in attesa, ordinate per priorità.\n- Tasti generali: Prenota selezionati, Rimuovi selezionati, Svuota carrello, Scarica report, Carrello storico, Carrello grafici\n- Filtri: data richiesta, partenza, arrivo, cliente, status, date di trasmissione ed evasione\n- Sulla riga: «Effettua una prenotazione», dettagli, «Modifica Veicolo» (partenza, arrivo, data, note), «Rimuovi dal carrello»\n- Stato: Waiting Area, Veicolo Pronto, Veicolo Trasmesso, Annulla Richiesta\n- Celle colorate (tenui): Partenza sabbia = su Infinity il veicolo è in un'altra ubicazione; Arrivo azzurro = sede del contratto diversa da quella dell'arrivo; Status rosa = veicolo uscito (motivo passando col mouse)",
        quickReply: "Carrello veicoli",
        priority: 9
    },
    {
        keywords: ["prenota selezionati", "effettua una prenotazione", "prenotare dal carrello", "prenotare il viaggio"],
        titolo: "Prenotare dal carrello",
        domande: ["prenotare le auto del carrello", "mettere sul viaggio le richieste", "prenota selezionati"],
        answer: "Nel Carrello veicoli premi «Effettua una prenotazione» sulla riga, oppure seleziona più righe e premi «Prenota selezionati»: la piattaforma propone i viaggi disponibili per quella tratta e data. Se lo stesso veicolo ha più richieste nel carrello, viene prenotata solo quella scelta: le altre restano nel carrello. Se non ce ne sono, puoi crearne uno subito scegliendo mezzo di trasporto e itinerario, oppure un itinerario rapido con sola partenza e arrivo.",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["nessun viaggio disponibile", "creare nuovo viaggio", "viaggio rapido", "itinerario rapido"],
        titolo: "Nessun viaggio disponibile",
        domande: ["non ci sono viaggi", "creare un viaggio al volo", "viaggio rapido"],
        answer: "«Nessun viaggio disponibile al momento, creare nuovo viaggio»: per quella tratta e data non ci sono viaggi con posto libero. Puoi creare il viaggio dalla stessa finestra (mezzo di trasporto + itinerario, oppure viaggio rapido con solo partenza e arrivo) o da Viaggi › Pianificazione viaggi.",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["non abilitato alla pianificazione", "utente non abilitato", "prenotazione dal carrello"],
        titolo: "Non abilitato a prenotare dal carrello",
        domande: ["utente non abilitato alla pianificazione viaggio da carrello", "non posso prenotare dal carrello", "mi dice che non sono abilitato"],
        answer: "«Impossibile procedere: utente non abilitato alla pianificazione viaggio da carrello»: manca il permesso «Consenti la prenotazione dei veicoli dal carrello». Lascia la richiesta nel carrello: la prenoterà chi ha il permesso.",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["waiting area", "veicolo pronto", "veicolo trasmesso", "annulla richiesta", "annullare una richiesta", "area di attesa"],
        titolo: "Stati della richiesta nel carrello",
        domande: ["annullare una richiesta del carrello", "cosa vuol dire veicolo pronto", "veicolo trasmesso", "il tasto annulla richiesta non mi è consentito"],
        answer: "Gli stati della richiesta nel carrello:\n- Waiting Area: il veicolo è nell'area di attesa\n- Veicolo Pronto: pronto al ritiro (registra la data)\n- Veicolo Trasmesso: invia la richiesta al trasportatore esterno\n- Annulla Richiesta: ritira la richiesta\nVerde = attivo, grigio = non attivo. Ogni operazione invia la mail carrello a chi ha la spunta.",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["trasmissione non riuscita", "trasmissione accettata", "stato esterno", "programmato", "evaso", "fallito"],
        titolo: "Trasmissione al trasportatore esterno",
        domande: ["trasmissione non riuscita", "stato della trasmissione", "richiesta accettata dal trasportatore", "data richiesta trasferimento assente impossibile trasmettere", "dati indirizzo obbligatori mancanti", "trasmissione non riuscita riprova"],
        answer: "Dopo «Veicolo Trasmesso» compare «Trasmissione accettata dal trasportatore» oppure «Trasmissione non riuscita. Riprova.». Le colonne del trasportatore mostrano lo stato restituito: richiesto, programmato, evaso o fallito.\nSe l'errore si ripete, verifica URL e credenziali in Configurazione › Trasportatori o contatta l'assistenza.",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["carrello storico", "storico carrello", "richieste concluse", "carrello grafici", "storicizzazione"],
        titolo: "Carrello storico",
        domande: ["richieste concluse", "storico del carrello", "grafici del carrello"],
        answer: "Carrello storico: le richieste concluse, con gli stessi filtri del carrello e «Scarica report». Ci arrivano dopo i giorni impostati in Amministrazione › Opzioni (Giorni per storicizzazione carrello).\nCarrello grafici: riassume le richieste per data, origine, destinazione e cliente.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["prenota un viaggio", "prenotare direttamente", "senza carrello", "cerca un viaggio disponibile"],
        titolo: "Prenotare un viaggio da Cerca veicolo",
        domande: ["prenotare senza carrello", "prenotazione diretta", "cercare un viaggio disponibile per l'auto"],
        answer: "Da Cerca veicolo, con il permesso «prenotare direttamente senza passare dal carrello», il tasto «Prenota un viaggio» sulla riga apre la finestra: Ubicazione di partenza, Ubicazione di arrivo, Data viaggio, Motivo di trasferimento, Utente e Venditore (tutti obbligatori). La piattaforma cerca i viaggi compatibili, diretti o con fermata intermedia.",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["colonna workflow", "veicoli con workflow", "con workflow in corso", "workflow in corso", "vedere il workflow in cerca veicolo"],
        titolo: "Veicoli con workflow in corso",
        domande: ["colonna workflow nel carrello", "auto con lavorazioni aperte"],
        answer: "In Cerca veicolo puoi vedere se un veicolo ha un workflow in corso:\n1. In Cerca veicolo premi «Scegli colonne», spunta «Workflow in corso» e salva\n2. Nella colonna compare un'etichetta per ogni workflow aperto, con fase e avanzamento (es. «Workflow · Lavaggio (2 di 5)», «Danni · Perizia (0 di 3)»)\nIl filtro rapido «Con workflow in corso» mostra solo i veicoli con almeno un workflow aperto.",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["filtri calendario", "filtri calendario viaggi", "filtro mezzo di trasporto", "filtro ubicazione calendario", "filtro itinerario", "utente prenotazione"],
        titolo: "Filtri del Calendario viaggi",
        domande: ["filtrare il calendario per mezzo", "filtro per ubicazione nel calendario"],
        answer: "Calendario viaggi, riquadro Strumenti (come in Cerca veicolo):\n- la Data viaggio è sempre visibile e obbligatoria; «Azzera filtri» riporta il resto a «Tutto»\n- Mezzo di trasporto, Ubicazione (una qualsiasi tappa), Utente prenotazione e Itinerario sono elenchi: puoi sceglierne più di uno\n- «Seleziona filtri da visualizzare» sceglie quali filtri vedere (all'inizio Targa, Telaio, Mezzo di trasporto, Ubicazione). Un filtro nascosto non filtra\n- i viaggi rapidi e quelli dal carrello non hanno itinerario",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["filtri workflow", "filtri danni", "filtri batteria", "filtri workflow danni", "filtri workflow batteria", "seleziona filtri workflow"],
        titolo: "Filtri dei workflow",
        domande: ["filtrare l'elenco dei workflow", "filtri danni e batteria"],
        answer: "Workflow, Danni e Batteria (come in Cerca veicolo):\n- un campo vuoto mostra «Tutto»; «Azzera filtri» riporta i campi ai valori di partenza (Stato fase torna a «Fase in corso»)\n- «Seleziona filtri da visualizzare» sceglie quali filtri vedere, insieme per le tre pagine. All'inizio: N/U/O/P/A, Targa, Telaio, Ubicazione e Workflow in corso nella ricerca dei veicoli; Targa/Telaio, Status, Fase, Processo e Stato fase nell'elenco\n- Marca, Modello, Colore, Piazzale, Data richiesta e Società (solo Workflow) si aggiungono dalla finestra. Un filtro nascosto non filtra\n- «Righe per pagina» e «Ordina» restano sempre visibili",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["filtri posizione veicoli", "filtri localizzazione", "pulisci filtri", "filtri rfid", "filtri allegati", "filtri galleria"],
        titolo: "Filtri di Posizione veicoli",
        domande: ["filtrare le posizioni", "pulire i filtri della localizzazione"],
        answer: "Posizione veicoli (Localizzazione RFID) e Allegati (Galleria immagini), come in Cerca veicolo:\n- un campo vuoto mostra «Tutto»; «Azzera filtri» (prima «Pulisci filtri») riporta tutto a «Tutto»\n- «Seleziona filtri da visualizzare» sceglie quali filtri vedere, separatamente per le due pagine. Un filtro nascosto non filtra\n- Posizione veicoli: all'inizio N/U/O/P, Targa, Telaio, Ubicazione, Piazzale e Tag veicolo; «Cerca in tutte le società» resta sempre visibile\n- Allegati: all'inizio N/U/O/P/A, Targa, Telaio, Ubicazione, «Solo veicoli con allegati» e Sezione",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["filtri workflow calendario", "filtri danni calendario", "filtri batteria calendario", "strumenti calendario", "filtri calendario workflow"],
        titolo: "Filtri dei calendari workflow",
        domande: ["filtri del calendario dei workflow"],
        answer: "Workflow calendario, Danni calendario e Batteria calendario (come in Cerca veicolo):\n- un campo vuoto mostra «Tutto»; «Azzera filtri» riporta i campi a «Tutto»\n- «Seleziona filtri da visualizzare» sceglie quali filtri vedere, insieme per i tre calendari. All'inizio: N/U/O/P, Targa, Telaio e Ubicazione nella ricerca dei veicoli; Targa, Telaio, Fase e Processo in «Strumenti calendario». Un filtro nascosto non filtra\n- l'Ubicazione del calendario è sempre visibile; «Azzera filtri» la riporta alla tua ubicazione\n- il calendario si aggiorna da solo quando cambi un filtro",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["blocca tratta", "sblocca tratta", "blocca ubicazione", "tratta bloccata", "lucchetto tappa"],
        titolo: "Bloccare una tratta",
        domande: ["chiudere un tratto del viaggio", "la tratta è stata bloccata", "lucchetto sotto la tappa", "non caricare in una tappa"],
        answer: "Calendario viaggi, «Blocca tratta» (lucchetto sotto una tappa):\n- blocca il tratto da quella tappa alla successiva: lì il mezzo non porta veicoli\n- non si prenotano veicoli che caricano in quella tappa o che attraversano il tratto\n- restano prenotabili quelli che scendono in quella tappa e quelli che salgono dalla successiva\n- tappa dove non si carica/scarica: carico/scarico dell'itinerario; posti occupati: posti segnalati",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["note carrello", "annotazioni carrello", "nota viaggio", "note perse", "nota non salvata", "note rimozione dal viaggio"],
        titolo: "Note del carrello",
        domande: ["scrivere una nota sulla richiesta", "le note si sono perse", "annotazioni del carrello", "le note vecchie compaiono sul nuovo viaggio", "azzerare le note quando tolgo un veicolo dal viaggio"],
        answer: "Note del carrello e dei viaggi:\n- le Annotazioni del carrello passano al viaggio quando prenoti\n- togliendo il veicolo dal viaggio e rimettendolo nel carrello tornano nel carrello le sue note (nessuna nota si perde); la nota di annullamento resta in Veicoli annullati\n- togliendo il veicolo dal viaggio SENZA rimetterlo nel carrello, alla prenotazione successiva le note ripartono pulite (si usa solo la nota scritta da chi prenota o quella di una richiesta aperta nel carrello); le note vecchie restano in Veicoli annullati\n- prenotando più veicoli insieme ognuno porta la sua nota\n- oltre 255 caratteri si accorcia la parte più vecchia, mai l'ultima nota\n- la nota del viaggio (foglietto nel Calendario viaggi) si può anche cancellare",  // AAA - assistente (20/11/2026): risposta aggiornata
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["colonne posizione veicoli", "scegli colonne posizione veicoli", "nascondere colonne localizzazione", "pulsante disabbina non si vede", "colonne rfid"],
        titolo: "Colonne di Posizione veicoli",
        domande: ["scegliere le colonne della localizzazione", "nascondere colonne"],
        answer: "Posizione veicoli (Localizzazione RFID), pulsante «Scegli colonne» nell'intestazione «Veicoli»:\n- togli la spunta alle colonne che non vuoi vedere e premi Salva; la scelta vale per il tuo utente\n- Tag, Telaio, Piazzale, Zona, Posto auto e Localizza (Posizione e Cronologia) sono sempre visibili\n- il pulsante rosso «Disabbina» all'inizio è nascosto: chi ha il permesso lo fa comparire dalla finestra\n- «Scarica report» resta completo, con tutte le colonne",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["filtri report", "azzera filtri report", "tutto report", "filtri pianificazione viaggi", "filtri tariffario"],
        titolo: "Filtri dei report",
        domande: ["azzerare i filtri del report", "filtri di pianificazione viaggi"],
        answer: "Report, Pianificazione viaggi e Tariffario fornitori:\n- negli elenchi «(tutte)» e «(tutti)» si chiamano ora «Tutto»\n- nei report e in Pianificazione viaggi «Azzera filtri» riporta gli elenchi a «Tutto»; il periodo resta com'è\n- qui non c'è «Seleziona filtri da visualizzare»: i filtri sono pochi e si vedono sempre",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["filtri carrello", "filtri del carrello", "carrello storico filtri", "solo senza data", "solo null", "azzera filtri"],
        titolo: "Filtri del carrello",
        domande: ["filtrare le richieste", "solo le richieste senza data"],
        answer: "Carrello veicoli e Carrello storico, riquadro Filtri (come in Cerca veicolo):\n- un campo vuoto mostra «Tutto»; i campi con la freccia ▾ sono elenchi; «Azzera filtri» riporta tutto a «Tutto»\n- «Seleziona filtri da visualizzare» sceglie quali filtri vedere (salvato per il tuo utente, vale per i due carrelli; all'inizio Ubicazione partenza, Ubicazione arrivo, Status, Cliente, Data richiesta). Un filtro nascosto non filtra\n- nelle date del trasporto esterno «Solo senza data» mostra le richieste senza quella data",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["viaggi in sequenza", "sequenza", "più viaggi", "viaggio successivo", "cambio data sequenza", "veicolo su due viaggi", "proseguimento"],
        titolo: "Viaggi in sequenza",
        domande: ["l'auto fa più viaggi di fila", "viaggio successivo dello stesso veicolo", "non sarebbero più in sequenza"],
        answer: "Se un veicolo è su più viaggi uno dopo l'altro (es. ROMA → BRESCIA e poi BRESCIA → Belluno), devono restare in sequenza: ogni viaggio parte dove arriva il precedente, dopo il suo arrivo.\n- Cambia data: se la sequenza si rompe compare l'elenco dei veicoli; puoi annullare o spostare il viaggio, e il veicolo viene tolto dai viaggi indicati e torna nel carrello.\n- Annulla ed eliminazione di viaggi: se un viaggio successivo resta senza il viaggio che porta il veicolo alla partenza compare un avviso; decidi tu se togliere anche quello.",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["già nel carrello", "gia nel carrello", "due volte nel carrello", "doppia richiesta", "già su un viaggio", "gia su un viaggio", "già prenotato", "due viaggi", "veicolo già prenotato", "non posso aggiungere al carrello", "proseguire il viaggio", "targa prova già prenotata", "carro attrezzi", "prenotazione bloccata", "permesso proseguimento", "richiesta nel carrello"],
        titolo: "Veicolo già nel carrello o su un viaggio",
        domande: ["il veicolo ha già una richiesta nel carrello", "la stessa auto due volte", "il veicolo è già prenotato sul viaggio", "impossibile procedere il veicolo è già nel carrello", "il tuo ruolo non consente altre prenotazioni per questo veicolo", "non me la fa prenotare perché è già su un viaggio"],
        answer: "Un veicolo non può avere due richieste aperte nel carrello: se c'è già, si modifica quella con «Modifica Veicolo».\nSe il veicolo ha una richiesta nel carrello, la prenotazione diretta da Cerca veicolo è ammessa solo con lo stesso percorso (la richiesta viene chiusa); Targa Prova e Carro Attrezzi no: prenotalo dal Carrello o annulla la richiesta.\nUn veicolo già su un viaggio non ancora fatto (anche Targa Prova o Carro Attrezzi) può andare su un altro viaggio, o di nuovo nel carrello, solo se ne prosegue il percorso: partenza dalla tappa dove arriva e, per i viaggi, dopo il suo arrivo (con i giorni di attesa delle Opzioni). Per cambiare viaggio usa «Cambia» sul veicolo nel Calendario viaggi.\nPermessi dei ruoli: «veicolo che ha già una richiesta nel carrello» (Viaggi › Carrello veicoli) e «veicolo già presente su un viaggio» (Viaggi › Prenotazione) partono spenti (veicolo bloccato); «proseguimento di un viaggio già prenotato» parte acceso. Chi ha «Consenti di ignorare i controlli…» può sempre procedere.",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["prenotazione limitata", "ubicazione limitata", "ubicazioni limitate", "lucchetto grigio", "lucchetto rosso", "lucchetto rosso ubicazioni", "non posso aggiungere a un viaggio", "solo dagli utenti abilitati", "bloccare la prenotazione"],
        titolo: "Prenotazione limitata per ubicazione",
        domande: ["lucchetto grigio al posto del pulsante", "possono essere aggiunti a un viaggio solo dagli utenti abilitati", "non posso mettere sul viaggio le auto di una sede"],
        answer: "Ubicazioni con prenotazione su viaggio limitata: in Configurazione › Ubicazioni la casella «Prenotazione su viaggio limitata» fa sì che i veicoli che si trovano in quell'ubicazione possano essere aggiunti a un viaggio (anche targa prova e carro attrezzi) solo da chi ha il permesso «Consenti di aggiungere a un viaggio i veicoli delle ubicazioni con prenotazione limitata».\nSenza permesso, in Cerca veicolo e nel Carrello compare un lucchetto grigio al posto dei pulsanti di prenotazione e il messaggio «Impossibile procedere: i veicoli che si trovano a … possono essere aggiunti a un viaggio solo dagli utenti abilitati». L'inserimento nel carrello resta libero.\nNell'elenco Configurazione › Ubicazioni le ubicazioni limitate hanno un lucchetto rosso accanto al nome.",
        quickReply: null,
        priority: 8
    },

    // ─────────────────────────────────────────
    // CALENDARIO VIAGGI
    // ─────────────────────────────────────────
    {
        keywords: ["calendario viaggi", "calendario bisarche", "viaggi del giorno", "foglio viaggio", "calendario"],
        titolo: "Calendario viaggi",
        domande: ["vedere i viaggi del giorno", "dove sono i viaggi programmati", "foglio di viaggio", "calendario delle bisarche"],
        answer: "Viaggi › Calendario viaggi: giorno per giorno i viaggi di ogni mezzo di trasporto, con tappe e veicoli caricati.\n- Strumenti: data (all'apertura da oggi a domenica), mezzo di trasporto, targa, telaio, ID veicolo, utente che ha prenotato, ubicazione di una tappa e Cerca; i filtri si sommano\n- Tappe: verde = partenza, giallo = fermata, rosso = arrivo; 5 / 8 = 5 posti occupati su 8\n- Tasti del viaggio: mail TRASPORTATORE e DEPOSITO/PDI, PDF viaggio, Conferma/Riapri viaggio, Cambia mezzo di trasporto o data, Nota (ogni tasto compare solo con il permesso)\n- Clic sulla targa: dettaglio del trasferimento",
        quickReply: "Calendario viaggi",
        priority: 9
    },
    {
        keywords: ["filtra elenco", "filtrare i viaggi", "cerca nel calendario"],
        titolo: "Cercare nel calendario",
        domande: ["trovare un viaggio nel calendario", "filtrare l'elenco dei viaggi"],
        answer: "Nel Calendario viaggi il campo «Filtra elenco» restringe all'istante i viaggi già mostrati (anche per targa, ubicazione o mezzo di trasporto). Non cerca nel database: per altre date o altri veicoli usa i filtri in alto e il pulsante Cerca.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["veicoli annullati", "trasferimenti annullati", "chi ha annullato"],
        titolo: "Trasferimenti annullati",
        domande: ["chi ha cancellato il trasporto", "vedere le prenotazioni annullate", "storico degli annullamenti"],
        answer: "Nel Calendario viaggi il tasto «Veicoli Annullati» elenca i trasferimenti annullati, con chi li ha annullati, quando e la nota scritta togliendo il veicolo dal viaggio (colonna «Nota annullamento»).",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["nota annullamento", "nota di annullamento", "tolto dal viaggio", "togliere dal viaggio", "rimosso dal viaggio", "rimettere nel carrello", "rimettere il veicolo nel carrello", "rimesso nel carrello", "reinserire nel carrello", "dove trovo la nota"],
        titolo: "Nota di annullamento",
        domande: ["perché è stato tolto dal viaggio", "motivo dell'annullamento", "nota quando tolgo un veicolo"],
        answer: "Quando togli un veicolo da un viaggio (Calendario viaggi) puoi scrivere una nota. La nota:\n- va nella mail di annullamento\n- resta sul trasferimento annullato: la vedi in «Veicoli Annullati» e nel report «Trasferimenti» (colonna Nota annullamento)\nSe rispondi Sì a «rimettere nel carrello», nella nuova riga del carrello tornano solo le note del veicolo, senza la nota di annullamento.",  // AAA - assistente (20/11/2026): risposta aggiornata
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["annotazioni", "a cosa servono le annotazioni", "note del carrello", "note trasferimento", "note per il viaggio"],
        titolo: "Annotazioni",
        domande: ["a cosa servono le note", "annotazioni del trasferimento"],
        answer: "Le Annotazioni sono le indicazioni del richiedente per chi organizza il viaggio (per esempio «ricordarsi i tappetini»). Si scrivono in «Aggiungi al carrello» e si correggono con «Modifica Veicolo»; si vedono nel carrello e nella mail. Alla prenotazione diventano le note del trasferimento (colonna Annotazioni del PDF del viaggio) e vengono conservate: se il veicolo viene tolto dal viaggio e torna nel carrello, le annotazioni tornano con lui, precedute dalla nota di annullamento.",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["mail al trasportatore", "mando la mail", "mail trasportatore", "email trasportatore", "avvisare il trasportatore", "invia mail"],
        titolo: "Mail al trasportatore",
        domande: ["inviare il viaggio al trasportatore", "la mail al fornitore non parte", "nessuna email impostata in anagrafica fornitori", "non ho i permessi per inviare la mail al trasportatore", "ubicazione non specificata", "nessun veicolo caricato in questa ubicazione per questo viaggio"],
        answer: "«Invia mail TRASPORTATORE» (Calendario viaggi): il trasportatore riceve l'elenco dei veicoli da caricare. Il tasto cambia aspetto quando la mail è già stata inviata.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["mail deposito", "mail pdi", "email deposito", "inviata solo in parte", "avvisare il deposito"],
        titolo: "Mail deposito e PDI",
        domande: ["mandare la mail al deposito", "mail pdi", "mail inviata solo in parte", "nessuna mail inviata", "non hai i permessi per inviare la mail al deposito", "non hai i permessi per inviare la mail pdi", "nessun veicolo con ubicazione di partenza in questo viaggio"],
        answer: "«Invia mail DEPOSITO / PDI» avvisa il deposito usando gli indirizzi «Email PDI / Deposito» delle ubicazioni del viaggio. Se compare «inviata solo in parte», qualche ubicazione non ha l'indirizzo: compilalo in Configurazione › Ubicazioni e invia di nuovo.",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["pdf viaggio", "scarica pdf", "stampare il viaggio", "cmr", "lettera di vettura", "scheda viaggio"],
        titolo: "PDF del viaggio e CMR",
        domande: ["stampare il viaggio", "scaricare il pdf", "documento di trasporto", "lettera di vettura"],
        answer: "Nel Calendario viaggi «Scarica PDF viaggio» crea la scheda da stampare con tappe e veicoli (comprese le annotazioni). Con il permesso puoi scaricare anche il CMR (lettera di vettura per il trasporto su strada).",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["conferma viaggio", "confermo", "confermare", "blocca viaggio", "bloccare", "bloccato", "lucchetto", "riapri viaggio", "riapro", "riaprire", "sblocca", "costo consuntivo", "fattura"],
        titolo: "Confermare o riaprire un viaggio",
        domande: ["chiudere il viaggio", "il viaggio è già confermato", "sbloccare un viaggio confermato", "non hai il permesso di confermare i viaggi", "non hai il permesso di riaprire i viaggi", "inserire il costo finale del viaggio"],
        answer: "«Conferma viaggio» (prima «Blocca viaggio», lucchetto aperto) chiude il viaggio: finché non viene riaperto non si può più modificare (prenotazioni, spostamenti e annullamenti di veicoli, cambio di data o mezzo, posti segnalati, blocco delle ubicazioni, eliminazione; vale anche per un multiplo con uno solo dei due viaggi confermato) e il costo diventa definitivo. Restano note, mail, PDF e carico/scarico dall'app. Di norma è abilitato solo al gestore della logistica.\nNella finestra la piattaforma propone il costo previsto dal Tariffario: scegli il modo di pagamento (per posto auto o mezzo intero) e il costo totale oppure per tratta (correggi solo se la fattura è diversa; puoi usare virgola o punto). Alla conferma il costo viene diviso fra i veicoli.\n«Riapri viaggio» (lucchetto chiuso) rende di nuovo modificabile e prenotabile il viaggio e annulla il costo confermato. Si può bloccare anche una singola tappa («Blocca ubicazione»).",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["cambio bisarca", "cambio il mezzo", "cambio mezzo", "cambia mezzo", "cambia bisarca", "cambiare mezzo di trasporto", "cambiare bisarca", "targa prova carro attrezzi"],
        titolo: "Cambiare mezzo di trasporto",
        domande: ["sostituire la bisarca del viaggio", "il mezzo si è guastato", "usare un altro camion", "utente non abilitato al cambio bisarca", "già impegnata in questo giorno", "impossibile procedere selezionare una bisarca"],
        answer: "«Cambia mezzo di trasporto» (Calendario viaggi) sposta il viaggio su un altro mezzo: vengono proposti i mezzi attivi (prima le bisarche, poi targhe prova e carri attrezzi, indicati tra parentesi) in cui entrano tutti i veicoli già caricati, compreso l'eventuale aumento di capacità. Quelli già impegnati nello stesso giorno sono segnalati.",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["posto inutilizzabile", "posti inutilizzabili", "posto rotto", "carico esterno", "mezzo pieno", "segnala posto", "segnalare un posto", "bisarca piena", "posti segnalati"],
        titolo: "Posti del mezzo inutilizzabili o occupati",
        domande: ["un posto della bisarca non funziona", "segnare il mezzo pieno", "posto occupato da altro carico", "utente non abilitato alla segnalazione dei posti"],
        answer: "Nel Calendario viaggi, sul disegno del mezzo, clicca un posto vuoto e scegli:\n- Inutilizzabile: il posto non conta (si toglie dai posti disponibili)\n- Occupato da un carico esterno: conta come pieno\nVale per la tratta cliccata, o anche per le successive se spunti la casella. Il pulsante «Posti del mezzo» (griglia) segna il mezzo pieno sulle tratte scelte o toglie tutte le segnalazioni. I posti segnalati non si prenotano; un clic sul posto segnalato lo rende di nuovo disponibile. Cambia mezzo di trasporto toglie le segnalazioni.\nServe il permesso «Consenti la segnalazione dei posti del mezzo di trasporto» (Ruoli), che parte spento: l'amministratore lo accende ai ruoli che devono usarlo.",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["viaggio multiplo", "viaggi multipli", "multiplo", "due viaggi", "tappa di cambio", "cambio mezzo", "veicolo su due viaggi"],
        titolo: "Viaggio multiplo",
        domande: ["cambio di bisarca a metà strada", "la vettura viaggia su due mezzi", "coincidenza tra due viaggi", "veicoli su viaggi multipli non sarebbero più coerenti", "servono giorni di attesa tra i due viaggi"],
        answer: "Un viaggio multiplo porta il veicolo alla tappa di cambio con un primo viaggio e da lì alla destinazione con un secondo, anche in un giorno successivo.\n- Le date della ricerca valgono per il primo viaggio; il secondo può cadere dopo, rispettando i «Giorni di attesa viaggio multiplo» (Opzioni) ed entro 5 giorni lavorativi. Nello stesso giorno deve partire dopo l'arrivo del primo.\n- Su entrambi i viaggi valgono i limiti giornalieri di prenotabilità; se uno dei due è confermato il multiplo non si può scegliere.\n- Annullando il veicolo viene tolto da entrambi i viaggi; se lo rimetti nel carrello rientra con il percorso completo, da riprenotare.\n- «Cambia» sposta il veicolo: la prenotazione vecchia si annulla solo se la nuova va a buon fine.\n- Cambiando data o eliminando un viaggio, la piattaforma elenca prima i veicoli in multiplo coinvolti.",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["cambia data", "cambiare la data", "spostare il viaggio", "data passata", "ddt"],
        titolo: "Cambiare la data del viaggio",
        domande: ["anticipare il viaggio", "rimandare il trasporto a un altro giorno", "spostare il viaggio a ieri", "utente non abilitato a spostare un viaggio in una data passata", "la nuova data è anteriore alla prenotazione", "non mi lascia cambiare il giorno"],
        answer: "«Cambia data» (Calendario viaggi) sposta il viaggio su un altro giorno, anche nel passato (solo per gli utenti abilitati). Prima del salvataggio un avviso ricorda che:\n- il viaggio non sarà più nella vista predefinita (da oggi ai 7 giorni successivi): allarga l'intervallo di date per rivederlo\n- se il DDT è già stato emesso su Infinity, la data del documento va corretta lì\nI giorni vietati non sono selezionabili. Ogni spostamento resta registrato nel log.\nSe a bordo ci sono veicoli su viaggi multipli che con la nuova data non sarebbero più coerenti, compare il loro elenco: puoi spostare il viaggio rimettendoli nel carrello (da riprenotare) oppure annullare.",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["nota viaggio", "check viaggio", "viaggio verificato", "appunto"],
        titolo: "Nota e verifica del viaggio",
        domande: ["segnare il viaggio come controllato", "spunta di verifica", "appunto sul viaggio"],
        answer: "Nel Calendario viaggi:\n- Nota viaggio: un appunto visibile a tutti sul viaggio\n- Check viaggio: spunta di controllo per segnare i viaggi già verificati",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["annullare un trasferimento", "togliere un veicolo dal viaggio", "spostare un veicolo su un altro viaggio", "cambia viaggio"],
        titolo: "Annullare o spostare un veicolo",
        domande: ["togliere un'auto dal camion", "cancellare la prenotazione di un veicolo", "mettere il veicolo su un altro viaggio", "ho prenotato sul viaggio sbagliato", "cambia viaggio del veicolo"],
        answer: "Nel Calendario viaggi clicca la targa del veicolo per aprire il dettaglio del trasferimento: da lì, con il permesso (spostare i propri trasferimenti o quelli degli altri), puoi annullarlo o spostarlo su un altro viaggio.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["pianificazione viaggi", "pianificare", "nuovo viaggio", "viaggio ripetitivo", "viaggi ripetitivi", "ogni martedi", "elimina selezionati"],
        titolo: "Pianificazione viaggi",
        domande: ["creare un nuovo viaggio", "programmare viaggi ripetuti", "viaggio ogni settimana"],
        answer: "Viaggi › Pianificazione viaggi: crei i viaggi in anticipo, così chi prenota trova già le date.\n- Nuovo viaggio: Mezzo di trasporto, Itinerario (o itinerario rapido) e Data\n- Nuovo viaggio ripetitivo: Data inizio, Data fine e giorni della settimana (es. ogni martedì e giovedì da novembre a gennaio); i giorni vietati vengono saltati\n- Per cancellarne più insieme: Seleziona tutto ed Elimina selezionati\nOgni pianificazione o eliminazione viene notificata via email a chi l'ha fatta.",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["targa prova", "prenota targa prova", "test drive", "autista con targa"],
        titolo: "Targa prova",
        domande: ["prenotare una targa prova", "test drive", "prova su strada con autista"],
        answer: "Targa prova (T.P.): un autista guida il veicolo con la targa prova.\nSi prenota da Cerca veicolo con «Prenota targa prova» sulla riga (permesso «Consenti la prenotazione di Targa Prova o Carro Attrezzi»): fornitore, data e ora richiesta (obbligatoria), partenza, arrivo, destinatario, note.\nLa richiesta compare in Viaggi › Calendario T.P. / C.A., dove si registrano conferma e completamento (autista, fascia oraria, mezzo, costo). I costi finiscono nel report «Costi Targa Prova».",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["carro attrezzi", "non marciante", "soccorso", "prenota carro attrezzi"],
        titolo: "Carro attrezzi",
        domande: ["auto che non parte", "veicolo in panne", "serve il soccorso", "prenotare il carro attrezzi"],
        answer: "Carro attrezzi (C.A.): il veicolo viene caricato su un carro attrezzi, per esempio perché non marciante. Si prenota da Cerca veicolo con «Prenota carro attrezzi» (stesso permesso della targa prova) indicando data e ora richiesta; puoi usare anche partenze e arrivi fuori dalle ubicazioni.\nLe richieste si seguono in Viaggi › Calendario T.P. / C.A.",
        quickReply: null,
        priority: 8
    },

    // ─────────────────────────────────────────
    // PIAZZALI
    // ─────────────────────────────────────────
    {
        keywords: ["piazzali", "piazzale", "struttura piazzale", "posti auto", "parcheggio"],
        titolo: "Piazzali",
        domande: ["come sono organizzati i parcheggi", "struttura del piazzale", "dove si parcheggiano le auto"],
        answer: "I piazzali dicono dove sono parcheggiati i veicoli: Ubicazione › Piazzale › Zona › Posto auto › Veicolo.\nVoci del menu Piazzali:\n- Anagrafica piazzali\n- Anagrafica zone piazzali (con etichette QR)\n- Mappatura piazzali (posti auto)\nGli armadietti chiavi sono nel menu Chiavi.\nL'app legge le etichette e aggiorna le posizioni.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["anagrafica piazzali", "nuovo piazzale", "alias piazzale", "capienza", "posti auto mappati"],
        titolo: "Anagrafica piazzali",
        domande: ["creare un piazzale", "nuovo parcheggio", "alias del piazzale", "capienza del piazzale"],
        answer: "Piazzali › Anagrafica piazzali: nome, Alias (il codice usato su Infinity), Capienza, indirizzo, Ubicazione a cui appartiene e, facoltativi, i 4 angoli del perimetro.\nLa colonna «Posti auto mappati / Capienza totale» confronta i posti mappati con la capienza; quanto è pieno il piazzale si vede in Dashboard › Saturazione piazzali.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["4 angoli", "quattro angoli", "coordinate angoli", "perimetro", "latitudine", "longitudine", "verifica su mappa"],
        titolo: "4 angoli del piazzale",
        domande: ["coordinate del piazzale", "perimetro gps del parcheggio"],
        answer: "I 4 angoli del piazzale (latitudine e longitudine 1–4) disegnano il perimetro. Sono facoltativi (tutti o nessuno) e vanno inseriti in ordine lungo il bordo, per esempio in senso orario: se i lati si incrociano il salvataggio lo segnala.\nServono a riconoscere il piazzale dei veicoli posizionati col GPS e a disegnare il perimetro blu sulla mappa di Posizione veicoli.\n«Verifica su mappa», accanto a ogni angolo, apre quel punto su Google Maps per controllare di non aver invertito latitudine e longitudine.\nSotto le coordinate il riquadro «Anteprima area» disegna subito il piazzale sulla mappa (satellitare o stradale): angoli numerati 1–4, area verde se è corretta, rossa se il perimetro si incrocia.",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["anteprima area", "vedere il piazzale sulla mappa", "figura del piazzale", "disegno del piazzale", "mappa del piazzale", "area del piazzale"],
        titolo: "Anteprima dell'area",
        domande: ["vedere il piazzale sulla mappa", "disegno del piazzale"],
        answer: "Nella scheda del piazzale (Piazzali › Anagrafica piazzali), sotto le 4 coordinate, il riquadro «Anteprima area» mostra il piazzale sulla mappa:\n- angoli numerati da 1 a 4 e area colorata\n- verde se è corretta, rossa se il perimetro si incrocia (angoli non in ordine lungo il bordo)\n- con il pulsante in alto a destra passi dalla mappa satellitare a quella stradale\nSi aggiorna mentre scrivi; sopra la mappa indica «Area completa», quanti angoli mancano o le coordinate fuori scala.",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["filtri", "filtro tutte", "(tutte)", "togliere tutte", "togliere tutte dal filtro", "scelta multipla", "piu valori nel filtro", "filtro vuoto"],
        titolo: "Filtro (tutte)",
        domande: ["togliere tutte dal filtro", "filtro con tutte selezionato"],
        answer: "Nei filtri a scelta multipla (marca, ubicazione, venditore, status…) il campo parte vuoto con «Tutto» (o «(tutte)», «(tutti)») in grigio: scegli uno o più valori senza dover togliere nulla. Se lasci il campo vuoto vale per tutti. È così in tutta la piattaforma.",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["posizionato col gps", "gps piazzale", "piazzale automatico", "logismart maps", "piazzale di appartenenza"],
        titolo: "Piazzale calcolato dal GPS",
        domande: ["posizionamento con il gps", "piazzale automatico dal telefono"],
        answer: "Quando l'app posiziona un veicolo col GPS (senza posto auto né zona), la piattaforma calcola da sola il piazzale: se le coordinate sono dentro i 4 angoli, o a meno di 10 metri dal bordo, il veicolo risulta in quel piazzale (es. «Roma Nord - GPS») nell'app, in Posizione veicoli, nei report e su Infinity, dove il parcheggio diventa «alias del piazzale|L.Maps». Fuori da ogni piazzale resta «Logismart Maps». Se due perimetri si sovrappongono vince il piazzale più piccolo.\nLo stesso piazzale compare anche in Cerca veicolo (colonna e filtro Piazzale).",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["zone", "zona", "anagrafica zone", "etichette qr", "stampa qr", "qr code", "codice qr", "stampare le etichette", "stampo le etichette"],
        titolo: "Zone ed etichette QR",
        domande: ["creare una zona", "stampare i qr delle zone", "etichette delle zone"],
        answer: "Piazzali › Anagrafica zone piazzali: le zone dividono un piazzale in aree (es. Fila A, Coperto, Pronta consegna). Per ogni zona: nome, piazzale e alias Infinity; «Veicoli presenti» conta i veicoli parcheggiati.\nCon «Stampa QR del piazzale» generi le etichette QR delle zone da stampare o scaricare come immagine: l'operatore con l'app inquadra il QR per dire dove sta parcheggiando.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["piazzale non attivo", "zona non attiva", "disattivare piazzale", "disattivare zona", "attivo piazzale", "posto inattivo", "spegnere piazzale"],
        titolo: "Piazzale o zona non attivi",
        domande: ["disattivare un parcheggio", "zona non più usata", "piazzale chiuso", "il piazzale dell'inventario non è attivo", "il piazzale non è attivo", "non posso scegliere il piazzale per parcheggiare"],
        answer: "Piazzali e zone hanno la casella «Attivo» (Anagrafica piazzali e Anagrafica zone piazzali, colonna Attivo negli elenchi).\n- Non attivo: il piazzale (con le sue zone e i suoi posti) o la zona non si possono più scegliere per parcheggiare: app, Mappatura, Zone, Inventario\n- I veicoli già parcheggiati restano dove sono; se ce ne sono, prima di spegnere compare la conferma con il loro numero\n- Nei filtri e nei report restano, con «(non attivo)»\n- Negli elenchi di Anagrafica piazzali e Anagrafica zone piazzali il filtro «Attivo» mostra solo gli attivi o solo i non attivi\nUn singolo posto auto si spegne impostandolo «Inattivo» in Mappatura piazzali: l'app non lo accetta e resta Inattivo anche quando si libera.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["mappatura", "mappatura piazzali", "nuovo posto auto", "posto auto", "posto libero", "posto occupato"],
        titolo: "Mappatura dei posti auto",
        domande: ["creare i posti del piazzale", "numerare i posti", "codice già presente in questo piazzale", "posto auto non trovato"],
        answer: "Piazzali › Mappatura piazzali: l'elenco dei posti auto con piazzale, zona, codice posto, coordinate GPS e stato (libero/occupato); «Veicolo presente» mostra chi lo occupa. Si creano a mano con «Nuovo posto auto» oppure dall'app con Mappatura Piazzali camminando nel piazzale. L'icona mappa apre il punto su Google Maps.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["piazzali su infinity", "aggiorno i piazzali", "aggiorna piazzali su infinity", "aggiornare infinity", "posto auto su infinity", "seleziona almeno un piazzale con alias", "non hai il permesso per aggiornare"],
        titolo: "Aggiornare i parcheggi su Infinity",
        domande: ["mandare i parcheggi a infinity", "infinity non ha il parcheggio aggiornato", "non hai il permesso per aggiornare i parcheggi su infinity"],
        answer: "«Aggiorna piazzali su Infinity» (Mappatura piazzali) invia la mappatura al gestionale. Servono:\n- il permesso «Consenti di aggiornare il posto auto su infinity» (altrimenti «Non hai il permesso per aggiornare i piazzali su Infinity»)\n- l'Alias compilato sul piazzale (altrimenti «Seleziona almeno un piazzale con alias»)",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["errore piazzale", "errore mappatura", "accesso piazzale", "permesso piazzale", "menu piazzali"],
        titolo: "Errori su piazzali e mappatura",
        domande: ["errore nella mappatura", "permesso del piazzale"],
        answer: "Se ricevi errori nelle pagine Piazzali, probabilmente al tuo ruolo manca qualche permesso: in Amministrazione › Ruoli apri il ruolo con la matita blu, cerca «Accesso al menù Piazzali» e controlla che siano spuntate le voci che servono (Anagrafica piazzali, Zone, Mappatura, Armadietti, aggiornamento posto auto su Infinity). Poi esci e rientra.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["attivita automatiche", "attività automatiche", "permesso attivita", "sola lettura attivita", "non posso attivare", "esegui ora", "report giornaliero permesso"],
        titolo: "Permessi delle attività automatiche",
        domande: ["non posso modificare le attività automatiche", "attività in sola lettura"],
        answer: "In Amministrazione › Opzioni › Attività automatiche ogni attività ha il suo permesso in Ruoli (sezione Generale): «Attività automatiche: gestisci …». Senza permesso la vedi in sola lettura (con il lucchetto): niente Attiva, ora, Prova ed Esegui ora; il Registro resta. Le attività dei parcheggi richiedono il modulo Localizzazione, il report giornaliero il modulo Logistica.",
        quickReply: "Opzioni",
        priority: 7
    },
    {
        keywords: ["non trovo il veicolo", "veicolo non trovato", "veicolo uscito", "uscito", "non lavorabile", "status uscito", "veicolo sparito"],
        titolo: "Veicolo uscito o non trovato",
        domande: ["l'auto venduta è ancora nel piazzale", "veicolo uscito ancora in posizione", "status u su infinity"],
        answer: "Un veicolo che non compare ha probabilmente uno status escluso in Amministrazione › Opzioni (per esempio Uscito). Cercalo in Cerca veicolo per targa o telaio: compare in una riga grigia con l'etichetta «Uscito – non lavorabile». Puoi aprirne il dettaglio ma non metterlo nel carrello né prenotarlo.",
        quickReply: "Cerca veicolo",
        priority: 7
    },
    {
        keywords: ["armadiett", "chiavi", "armadietto chiavi", "dove sono le chiavi", "chiavi abbinate", "chiave", "disabbina chiave", "dove si trova la chiave"],
        titolo: "Chiavi e armadietti",
        domande: ["dove sono le chiavi", "armadietto delle chiavi", "spostare le chiavi", "disabbinare una chiave dal sito", "chiave non trovata forse è già stata disabbinata", "non hai il permesso di spostare le chiavi dal sito", "non hai il permesso di disabbinare le chiavi dal sito", "la cronologia delle chiavi non è ancora attiva"],
        answer: "Menu Chiavi:\n- Armadietti chiavi: gli armadietti in cui si custodiscono le chiavi. Crei l'armadietto con un nome; «Chiavi assegnate» mostra quante chiavi contiene.\n- Chiavi abbinate: ogni chiave abbinata con l'app, con armadietto, posizione e veicolo. Filtri, «Scarica elenco» per Excel e colonna «Da verificare» (chiave senza veicolo, tag disabbinato, veicolo o armadietto non trovato). «Cronologia» mostra tutte le operazioni della chiave (data, utente, app o sito; dalla versione 3.2.2). Con il permesso «Consenti di spostare le chiavi anche dal sito» il pulsante «Sposta» cambia armadietto e posizione; con «Consenti di disabbinare le chiavi anche dal sito» il pulsante rosso disabbina la chiave.\nUn armadietto che contiene chiavi si elimina con «Elimina tutto» (permesso nella sezione Piazzali dei Ruoli, o nella sezione Chiavi senza la Localizzazione): le chiavi restano abbinate al veicolo.\nLe chiavi si abbinano, si posizionano e si disabbinano con l'app.",
        quickReply: null,
        priority: 6
    },

    // ─────────────────────────────────────────
    // LOCALIZZAZIONE GPS
    // ─────────────────────────────────────────
    {
        keywords: ["dispositivi", "dispositivo gps", "localizzatore", "traccar", "imei", "sim", "associazione dispositivi"],
        titolo: "Dispositivi GPS",
        domande: ["localizzatore gps", "aggiungere un dispositivo", "traccar", "dispositivo non trovato crealo prima in dispositivi"],
        answer: "Localizzazione GPS › Anagrafica dispositivi: registri ogni localizzatore (ID Dispositivo, ID Traccar, Numero SIM, ICCID, IMEI, Tipo Dispositivo, Statico o Dinamico).\nAssociazione dispositivi: colleghi un dispositivo a un veicolo indicando società, tipo (N/U/P) e ID veicolo. Quando il veicolo non va più seguito elimina l'associazione e il dispositivo torna libero.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["localizzazione gps statica", "mappa percorsi", "percorso del veicolo", "tragitto", "batteria dispositivo"],
        titolo: "Percorsi GPS",
        domande: ["vedere il tragitto dell'auto", "mappa dei percorsi", "dove è andato il veicolo"],
        answer: "Localizzazione GPS statica: i veicoli associati con lo stato della batteria del dispositivo; il tasto Posizione mostra l'ultima posizione su mappa. Controlla la colonna Batteria: un dispositivo scarico smette di inviare la posizione.\nMappa percorsi: scegli il veicolo e il periodo e premi «Mappa percorso» per vedere il tragitto compiuto.",
        quickReply: null,
        priority: 7
    },

    // ─────────────────────────────────────────
    // RFID E POSIZIONE VEICOLI
    // ─────────────────────────────────────────
    {
        keywords: ["rfid", "etichetta rfid", "lettore", "transponder", "cosa sono i tag"],
        titolo: "Etichette RFID",
        domande: ["come funziona il tag rfid", "lettore rfid", "l'etichetta non si legge"],
        answer: "Ogni veicolo riceve un'etichetta (tag) RFID abbinata dall'app: da quel momento la piattaforma sa in che piazzale, zona e posto si trova, e dove sono le sue chiavi.\nMenu Localizzazione RFID:\n- Posizione veicoli\n- Inventario\nReport utili: Elenco veicoli con tag, Veicoli per piazzale, Discordanze posizione / ubicazione, Cronologia posizione veicoli.",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["posizione veicoli", "dove si trova", "dove e il veicolo", "dove e parcheggiato", "localizzazione veicolo", "cronologia letture"],
        titolo: "Posizione veicoli",
        domande: ["dove si trova la macchina", "in che posto è parcheggiata", "trovare l'auto nel piazzale", "posizione della vettura"],
        answer: "Localizzazione RFID › Posizione veicoli: cerca per targa, telaio, marca, modello, ubicazione, piazzale, tag dell'etichetta o della chiave. Per ogni veicolo vedi piazzale, zona, posto auto, ID e posizione della chiave.\n- Posizione: la cronologia delle letture (data e ora, utente, zona/posto, coordinate) e la mappa, con il perimetro del piazzale in blu\n- Scarica report: esporta l'elenco filtrato; Pulisci filtri riparte da zero\nUn veicolo posizionato col GPS risulta nel piazzale che contiene le sue coordinate (es. «Roma Nord - GPS»).",
        quickReply: "Posizione veicoli",
        priority: 9
    },
    {
        keywords: ["disabbina", "disabbinare", "disabbina veicoli usciti", "liberare etichetta", "rimuovi tag", "togli tag", "veicoli usciti"],
        titolo: "Disabbinare i tag",
        domande: ["togliere il tag a un'auto", "liberare l'etichetta", "disabbinare i veicoli usciti", "rimuovere il tag da una vettura venduta"],
        answer: "Per liberare le etichette RFID dei veicoli usciti o venduti:\n- «Disabbina veicoli usciti» (Posizione veicoli) le disabbina tutte in un colpo; serve il permesso «Consenti di disabbinare i veicoli usciti»\n- in automatico ogni notte: attività «Veicoli usciti: libera il parcheggio e disabbina il tag» (Amministrazione › Opzioni › Attività automatiche)\n- un singolo tag si disabbina dall'app (Disabbina) o con il permesso «disabbinare un'etichetta»\nAttenzione: un tag disabbinato non si può più usare. Se il veicolo rientra (per esempio come usato) serve un tag nuovo e va riposizionato.",  // AAA - assistente (20/11/2026): risposta aggiornata
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["inventario", "inventario rfid", "veicoli mancanti", "fuori posto", "lettura tag"],
        titolo: "Inventario RFID",
        domande: ["fare l'inventario", "contare le auto nel piazzale", "auto mancanti nel piazzale", "veicoli fuori posto", "confronto non disponibile per gli inventari precedenti", "veicolo non trovato nel gestionale della società"],
        answer: "Localizzazione RFID › Inventario: l'inventario si fa con l'app passando tra i veicoli di un piazzale (il lettore registra tutti i tag che incontra). Qui trovi l'esito di ogni inventario (piazzale, utente, data e ora, tag letti) e i veicoli mancanti o fuori posto.\nCon il permesso puoi aggiornare l'ubicazione su Infinity partendo dall'inventario. Le differenze col gestionale sono nel report «Discordanze posizione / ubicazione».\nCon «Aggiorna posizione LogiSmart» puoi anche mettere nella zona del piazzale i veicoli letti (inventario per zona).",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["inventario per zona", "inventario zona", "aggiorna posizione logismart", "posizione da inventario", "zona da inventario", "togli dalla zona", "non letti"],
        titolo: "Inventario per zona",
        domande: ["aggiornare le posizioni dall'inventario", "inventario di una zona"],
        answer: "Inventario per zona (Localizzazione RFID › Inventario): fai con l'app un inventario per ogni zona del piazzale, poi sulla riga dell'inventario premi «Aggiorna posizione LogiSmart» (segnaposto) e scegli la zona (obbligatoria).\nNell'anteprima vedi:\n- i veicoli da spostare nella zona\n- quelli già nella zona o su un posto auto della zona (restano come sono)\n- quelli su un posto auto di un'altra zona: vanno nella zona e il posto si libera; togli la spunta per lasciarli dove sono\n- i registrati nella zona ma non letti: con «Togli dalla zona i veicoli non letti» (spenta di partenza) perdono la posizione e il posto si libera; prima di toglierli viene chiesta conferma con il numero dei veicoli. Se nell'inventario non c'è nessun veicolo letto (inventario vuoto o scelto per sbaglio) la casella non compare e i veicoli della zona restano dove sono\nLe operazioni sono quelle dell'app: il parcheggio su Infinity si aggiorna solo se il ruolo ha il permesso dell'app «Parcheggio su Infinity». Con «Parcheggio legato all'ubicazione» attivo, i veicoli che su Infinity sono in un'altra ubicazione (l'app li rifiuta) qui si parcheggiano comunque; con il permesso di aggiornare l'ubicazione su Infinity dall'inventario puoi correggere anche l'ubicazione, altrimenti il parcheggio resta «non valido». Ogni spostamento è nel report «Cronologia posizione veicoli» con la nota (es. «Inventario n. 15 - letto in Zona A»).\nPermesso: Ruoli › «Consenti di aggiornare la posizione LogiSmart (zona) dall'inventario», attivo di default per tutti i ruoli (si toglie ai ruoli che non devono usarlo).",
        quickReply: null,
        priority: 8
    },

    // ─────────────────────────────────────────
    // WORKFLOW
    // ─────────────────────────────────────────
    {
        keywords: ["cos'è un workflow", "cosa è un workflow", "come funziona il workflow", "workflow", "preconsegna", "preconsegne", "preparazione", "lavorazioni", "fasi e processi"],
        titolo: "Cos'è un workflow",
        domande: ["come funzionano i workflow", "a cosa serve il workflow", "lavorazioni sul veicolo"],
        answer: "Un workflow è la lista delle lavorazioni da fare su un veicolo, in ordine. Tre famiglie con lo stesso funzionamento: Workflow (preparazione/preconsegna), Danni e Batteria.\n- Fase: una singola lavorazione (Lavaggio, Controllo livelli…), con responsabile, costo, prezzo; può essere obbligatoria\n- Processo: sequenza ordinata di fasi con le regole sui veicoli a cui si applica\n- Workflow: un processo avviato su un veicolo; si chiude quando tutte le fasi sono completate o saltate\nOrdine: Gestione fasi › Gestione processi › Avvia workflow › Completa/salta le fasi.",
        quickReply: "Cos'è un workflow",
        priority: 8
    },
    {
        keywords: ["gestione fasi", "nuova fase", "creare una fase", "fase obbligatoria", "responsabile fase"],
        titolo: "Gestione fasi",
        domande: ["creare una fase", "fase obbligatoria", "aggiungere un passaggio al workflow"],
        answer: "Workflow › (Workflow, Danni o Batteria) › Gestione fasi: crea le fasi con «Nuova fase». Campi: Titolo e Descrizione (obbligatori), Prezzo (quanto si fattura), Costo (quanto costa farla), Responsabile, Email per notifiche, Obbligatorio e Attiva.\nUna fase obbligatoria non si può saltare, a meno che l'utente non abbia il permesso «Consenti di saltare fasi obbligatorie del workflow».",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["gestione processi", "nuovo processo", "processo", "processi", "predefinito", "copia processo", "criteri processo"],
        titolo: "Gestione processi",
        domande: ["creare un processo", "insieme di fasi", "nuovo processo di preparazione"],
        answer: "Workflow › Gestione processi:\n1. «Nuovo processo»: Titolo (max 150 caratteri, non ripetuto) e Descrizione\n2. Aggiungi le fasi nell'ordine in cui vanno svolte\n3. Imposta i criteri: Società, Nuovo/Usato, In contratto; per i nuovi Marca, Segmento, Canale di vendita, Linea; per gli usati Destinazione e Provenienza\n4. Spunta Attivo; con Predefinito il processo viene proposto per primo\nPer crearne uno simile usa la copia del processo. La colonna «Veicoli» dice su quanti veicoli è stato avviato.",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["fasi attive", "non ha fasi attive", "nessuna fase attiva", "processo senza fasi"],
        titolo: "Processo senza fasi attive",
        domande: ["il processo scelto non ha fasi attive", "il workflow non è stato creato"],
        answer: "«Il processo scelto non ha fasi attive»: apri il processo in Workflow › Gestione processi e aggiungi almeno una fase attiva (le fasi si attivano in Gestione fasi).",
        quickReply: null,
        priority: 9
    },
    {
        keywords: ["avvia workflow", "avviare un workflow", "completa fase", "completare una fase", "salta fase", "saltare una fase", "motivazione del salto", "pdf workflow"],
        titolo: "Avviare e completare un workflow",
        domande: ["iniziare un workflow", "segnare una fase come completata", "chiudere una fase"],
        answer: "Workflow › Workflow (o Danni / Batteria):\n1. Cerca il veicolo (targa o telaio, processo, fase, stato fase, ordine); «Escludi i veicoli con un workflow in corso» mostra solo quelli da avviare\n2. Tasto verde «Avvia workflow»: scegli il processo tra quelli compatibili\n3. Sulla fase in corso: «Completa fase» (✔, registra chi l'ha fatta con eventuali note) o «Salta fase» (», va indicata la «Motivazione del salto»)\n4. «Scarica PDF Workflow»: riepilogo stampabile di fasi, chi le ha svolte e quando\nLe fasi si completano anche dall'app mobile.",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["workflow gia attivo", "gia attivo sul veicolo", "due workflow"],
        titolo: "Workflow già attivo",
        domande: ["workflow già attivo sul veicolo selezionato", "non posso avviare un secondo workflow"],
        answer: "«Attenzione: Workflow già attivo sul veicolo selezionato»: sul veicolo c'è un processo non concluso. Completa o salta le fasi rimaste, poi avvia il nuovo workflow.",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["ordine libero", "fasi in qualsiasi ordine", "saltare fasi obbligatorie", "saltare una fase obbligatoria", "salto una fase obbligatoria", "salto fase obbligatoria"],
        titolo: "Saltare le fasi",
        domande: ["saltare una fase obbligatoria", "fare le fasi in ordine diverso", "ordine libero delle fasi"],
        answer: "Di norma le fasi si svolgono nell'ordine del processo. Con il permesso «Consenti di completare o saltare le fasi del workflow in ordine libero» (solo da web) le lavori in qualsiasi ordine. Per saltare una fase obbligatoria serve «Consenti di saltare fasi obbligatorie del workflow» (web e app).",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["colori fasi", "icone workflow", "mostra fasi", "stato delle fasi"],
        titolo: "Colori e icone delle fasi",
        domande: ["cosa significano i colori delle fasi", "icone del workflow"],
        answer: "Nell'elenco del workflow lo stato delle fasi si vede con l'icona «Mostra fasi» sulla riga del veicolo: per ogni fase è indicato se è completata (con chi e quando), saltata (con la motivazione), in corso o da fare.",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["prenoto un workflow", "prenotare un workflow", "workflow calendario", "prenota workflow", "programmare lavorazioni", "danni calendario", "batteria calendario", "appuntamento workflow"],
        titolo: "Prenotare un workflow",
        domande: ["mettere un workflow in calendario", "appuntamento per la lavorazione"],
        answer: "Workflow › Workflow calendario (anche Danni e Batteria calendario): programma le lavorazioni nel tempo. Cerca il veicolo, premi «Prenota workflow» e scegli Processi, Fasi, Utente e Data prenotazione (obbligatori) più eventuali note: compare un evento nel calendario.\nDall'evento puoi avviare il workflow, aprire i dettagli del veicolo o eliminare l'evento.\n- Data e ora: Giorno dal calendario, poi Ora (07-20) e Minuti (ogni 5)\n- In Settimana gli appuntamenti sono uno sotto l'altro, in ordine di ora\n- Il simbolo arancione a destra indica una nota: passa il mouse per leggerla",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["stampa pdf", "stampo il pdf", "stampare il pdf", "pdf del workflow", "pdf workflow calendario", "workflow calendario pdf", "stampare le lavorazioni", "programma del giorno", "consegnare all operatore", "foglio di lavoro"],
        titolo: "PDF del workflow",
        domande: ["stampare il workflow", "pdf delle fasi"],
        answer: "Nel Workflow calendario il tasto rosa «Stampa PDF», accanto a «Oggi», crea il programma da consegnare a chi esegue le lavorazioni:\n1. Imposta i filtri (es. Fase = Asciugatura) e premi Avvia ricerca\n2. Premi Stampa PDF e scegli il giorno (o un periodo fino a 31 giorni)\n3. Premi Crea PDF: si apre in una nuova scheda\nIl PDF usa gli stessi filtri dell'ultima ricerca e contiene, per ogni appuntamento: ora, tipo (Nuovo, Usato, Officina…), targa, telaio, veicolo, processo, fase, chi l'ha prenotato, stato e la casella «Fatto»; in fondo lo spazio per nome e firma.",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["workflow danni", "perizia", "riparazione", "preventivo danni"],
        titolo: "Workflow danni",
        domande: ["gestire una riparazione", "perizia del danno", "preventivo del danno"],
        answer: "Workflow danni: per i veicoli con un'avaria. In elenco vedi anche grado e descrizione del danno. Usa processi pensati per perizia, preventivo e riparazione; fasi e processi si creano nelle voci Gestione fasi e Gestione processi del menu Danni.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["batteria", "workflow batteria", "test batteria", "elettric", "ricarica", "promemoria batteria"],
        titolo: "Workflow batteria",
        domande: ["controllo della batteria", "test batteria auto elettrica", "batteria dell'ibrida"],
        answer: "Workflow batteria: per i controlli periodici della batteria dei veicoli fermi in piazzale. Alla fine di un test scegli tra quanti giorni eseguire il prossimo oppure «Termina» per chiudere il workflow. Il report «Workflow Batteria» riassume i controlli eseguiti, con data e codice del promemoria.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["calendario per ubicazione", "ubicazione di appartenenza", "calendario della mia ubicazione", "altre ubicazioni", "tutte le ubicazioni", "senza ubicazione", "operazione non consentita", "calendario di un'altra sede"],
        titolo: "Calendario per ubicazione",
        domande: ["vedere solo gli appuntamenti della mia sede", "puoi lavorare solo sugli appuntamenti della tua ubicazione", "operazione non consentita puoi lavorare solo sugli appuntamenti della tua ubicazione"],
        answer: "Calendario workflow per ubicazione (Workflow, Danni, Batteria): ogni appuntamento appartiene a un'ubicazione e ogni utente può avere un'«Ubicazione di appartenenza» (Amministrazione › Utenti).\n- In «Strumenti calendario», accanto agli altri filtri di ricerca, il filtro «Ubicazione» parte dalla tua ubicazione\n- Con il permesso «Calendario workflow: consenti di vedere e lavorare su tutte le ubicazioni» scegli un'altra sede, «Senza ubicazione» o «Tutte le ubicazioni»\n- Senza permesso il filtro è bloccato sulla tua ubicazione: «Operazione non consentita» se provi a spostare o eliminare appuntamenti di altre sedi\n- Senza permesso e con ubicazione di appartenenza «Tutte» (campo vuoto) il filtro è bloccato su «Tutte le ubicazioni» e lavori su tutto\nNella finestra «Prenota workflow» scegli l'«Ubicazione del calendario». Il limite «volte per ora» delle fasi vale per ubicazione; Stampa PDF e report «Workflow Calendario» seguono il filtro.",
        quickReply: null,
        priority: 8
    },

    // ─────────────────────────────────────────
    // ALLEGATI
    // ─────────────────────────────────────────
    {
        keywords: ["allegati", "allegato", "foto", "immagini", "documenti", "caricare file", "carica immagine", "carica documento", "galleria"],
        titolo: "Allegati",
        domande: ["caricare una foto", "allegare un documento", "il file non è un'immagine", "non hai il permesso di eliminare gli allegati", "errore nel caricamento dell'immagine"],
        answer: "Menu › Allegati (permesso «Accesso al menù Allegati»): in alto gli ultimi allegati caricati. Per un veicolo preciso cercalo (N/U/O/P/A, targa, telaio, marca, modello, ubicazione, piazzale) e premi Allegati sulla riga.\n- «Carica Immagine» e «Carica Documento» aggiungono un file; scegli la Sezione (es. Danni, Consegna, Documenti)\n- Ogni file mostra chi l'ha caricato e quando; puoi aprirlo, scaricarlo o eliminarlo\nFoto e documenti si caricano anche dall'app.",
        quickReply: null,
        priority: 7
    },

    // ─────────────────────────────────────────
    // REPORT
    // ─────────────────────────────────────────
    {
        keywords: ["report", "elenco report", "estrazioni", "statistiche", "excel", "csv", "scaricare dati", "esportare"],
        titolo: "Report",
        domande: ["quali report ci sono", "estrarre i dati", "statistiche della piattaforma", "non hai il permesso per questo report", "non hai il permesso per questo report"],
        answer: "Menu › Report (permesso «Accesso al menu Report»; alcuni report hanno un permesso proprio). Si scaricano in CSV, che si apre con Excel; «Veicoli in partenza e arrivo» anche in PDF. In ogni pagina un riquadro spiega contenuto e filtri.\nI report sono divisi in sezioni:\n- Viaggi e trasferimenti: Trasferimenti, Veicoli in partenza e arrivo, Motivi di trasferimento, Tassi di conversione, Attività carrello utenti, Cronologia veicolo\n- Costi: Costi viaggi, Fornitori, Costi presa in carico veicoli, Costi targa prova\n- Piazzali e RFID: Veicoli per piazzale, Posizioni per piazzale, Elenco veicoli con tag, Cronologia posizione veicoli, Discordanze posizione / ubicazione\n- Workflow: Workflow, Workflow calendario, Workflow batteria, Veicoli danneggiati\nVedi solo le sezioni e i report a cui hai accesso.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["report veicoli in partenza", "veicoli in partenza", "partenza e arrivo", "veicoli in arrivo", "in arrivo", "in uscita", "colonne extra"],
        titolo: "Report veicoli in partenza e arrivo",
        domande: ["auto in arrivo domani", "auto in partenza oggi", "elenco partenze e arrivi"],
        answer: "Report «Veicoli in partenza e arrivo»: veicoli in partenza e in arrivo con i viaggi del periodo, raggruppati per giorno e ubicazione: ora, veicolo e le colonne scelte in Amministrazione › Opzioni (targa, telaio, marca, modello, venditore, trasportatore, piazzale, zona, posto auto, note, motivazione). Filtri: periodo, ubicazione (vuota = tutte), marca. In CSV o PDF.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["report motivi", "motivi di trasferimento report", "quanti trasferimenti per motivo"],
        titolo: "Report motivi",
        domande: ["quanti trasferimenti per motivo", "report dei motivi di trasporto"],
        answer: "Report «Motivi di trasferimento»: quanti trasferimenti (non annullati) sono stati fatti per ciascun motivo nei viaggi del periodo. Due colonne: motivo e numero.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["report tassi", "tassi di conversione", "tasso conversione", "conversione"],
        titolo: "Report tassi di conversione",
        domande: ["tasso di conversione", "report conversioni"],
        answer: "Report «Tassi di conversione»: per ogni venditore/agente (separato per società) conta i trasferimenti non annullati dei viaggi del periodo. Gli utenti non collegati a un agente compaiono come «Utente …». Filtro facoltativo: motivo di trasferimento.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["report trasferimenti", "tutti i trasferimenti", "data di prenotazione"],
        titolo: "Report trasferimenti",
        domande: ["elenco di tutti i trasporti", "trasferimenti del mese", "report per data di prenotazione"],
        answer: "Report «Trasferimenti»: tutti i trasferimenti con data di prenotazione nel periodo: società, veicolo (telaio, targa, marca, modello), utente, venditore, ubicazioni di partenza e arrivo, data e ora della prenotazione, note. Comprende anche gli annullati (colonna Annullato) con la nota scritta togliendo il veicolo dal viaggio (colonna Nota annullamento).",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["report costi", "report costi viaggi", "costi viaggi", "costo per vettore", "vettore", "costo del veicolo"],
        titolo: "Report costi viaggi",
        domande: ["quanto spendiamo di trasporto", "costi per vettore", "costo di ogni viaggio"],
        answer: "Report «Costi Viaggi»: costo dei viaggi per vettore, ripartito sui veicoli. Per ogni veicolo: itinerario (o partenza → arrivo), fornitore, mezzo di trasporto, motivazione, posti occupati, tratte percorse e costo. Ci sono i viaggi confermati (costo della conferma) e quelli da confermare (costo previsto dal Tariffario, con le tariffe mancanti nelle note); in fondo stato, modo di pagamento, costo, costo previsto e differenza. Filtri facoltativi: fornitore, società, costi (tutti, solo confermati, solo da confermare).",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["report presa in carico", "presa in carico", "costi presa in carico", "costo abbinamento tag"],
        titolo: "Report presa in carico",
        domande: ["costo di presa in carico", "costo abbinamento tag"],
        answer: "Report «Costi presa in carico veicoli»: i veicoli il cui tag RFID è stato abbinato nel periodo, con società, nuovo/usato, telaio, targa, marca, modello, versione, colore e costo di presa in carico. Filtro facoltativo: società. L'importo si imposta in Amministrazione › Opzioni.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["report costi targa", "costi targa prova", "report targa prova"],
        titolo: "Report costi targa prova",
        domande: ["quanto costano le targhe prova"],
        answer: "Report «Costi Targa Prova»: le richieste di trasferimento con targa prova ai fornitori del periodo: fornitore, ubicazioni, date di richiesta e completamento, veicolo e costo. Filtro facoltativo: fornitore.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["report fornitori", "per fornitore", "trasportatore del viaggio"],
        titolo: "Report fornitori",
        domande: ["viaggi per fornitore", "report per trasportatore"],
        answer: "Report «Fornitori»: come «Veicoli in partenza e arrivo», ma raggruppato anche per fornitore (il trasportatore del mezzo di trasporto del viaggio). Filtri: periodo, ubicazione, fornitore.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["report cronologia", "cronologia veicolo", "storico veicolo", "storico viaggi", "storia del veicolo"],
        titolo: "Cronologia del veicolo",
        domande: ["storico della vettura", "tutti i viaggi di un'auto", "cosa è successo al veicolo"],
        answer: "Report «Cronologia Veicolo»: storico dei trasferimenti dei viaggi con data nel periodo: società, veicolo, utente, telaio, targa, data del viaggio, itinerario (o partenza → arrivo), motivazione e se il trasferimento è stato annullato.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["report attivita", "attivita carrello", "attivita utenti", "chi ha aggiunto al carrello"],
        titolo: "Report attività",
        domande: ["chi ha messo l'auto nel carrello", "attività degli utenti", "chi ha fatto una modifica"],
        answer: "Report «Attività Carrello Utenti»: i veicoli aggiunti al carrello nel periodo (data di aggiunta), con società, veicolo, utente, data, ubicazioni di partenza e arrivo e motivo. Filtro facoltativo: utente.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["report veicoli danneggiati", "elenco avarie"],
        titolo: "Report veicoli danneggiati",
        domande: ["elenco delle auto con danni"],
        answer: "Report «Veicoli Danneggiati»: tutte le avarie registrate sui veicoli nuovi e usati di tutte le società: tipo veicolo, id, telaio, grado e descrizione dell'avaria, società, targa, marca e modello. Non ha filtri.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["report veicoli per piazzale", "veicoli per piazzale", "veicoli presenti nel piazzale", "elenco veicoli piazzale"],
        titolo: "Report veicoli per piazzale",
        domande: ["auto presenti in un piazzale", "elenco veicoli di un parcheggio", "quante auto ci sono nel piazzale"],
        answer: "Report «Veicoli per piazzale»: scelto un piazzale (obbligatorio), l'elenco dei veicoli presenti, cioè con tag attivo in un posto auto del piazzale, in una sua zona o posizionati col GPS dentro i 4 angoli. Colonne: tag, società, N/U/O/P, stato su Infinity (un veicolo «Uscito» o «Venduto» ancora in elenco ha il tag da disattivare), id, telaio, targa, marca, modello, piazzale, zona, posto auto, coordinate e loro fonte, data dell'ultima posizione e utente.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["report posizioni", "posizioni per piazzale", "posti mappati report", "confronto mappa"],
        titolo: "Report posizioni",
        domande: ["posti mappati", "confronto con la mappa"],
        answer: "Report «Posizioni per piazzale»: i posti auto mappati nel piazzale scelto, con coordinate, codice del posto, piazzale e zona. Serve a confrontare la mappatura con altri strumenti di mappe. Non elenca i veicoli: per quelli usa «Veicoli per piazzale».",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["report tag", "elenco veicoli con tag", "veicoli con tag", "tag abbinati", "lista tag"],
        titolo: "Report tag",
        domande: ["auto con il tag", "elenco dei tag abbinati"],
        answer: "Report «Elenco veicoli con tag»: un rigo per ogni tag RFID abbinato (attivo o disabilitato): società, nuovo/usato, id veicolo, telaio, modello, versione, disabilitato (1 = non più attivo), utente, coordinate, data di abbinamento, id del posto auto e della zona. Non ha filtri.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["report discordanze", "discordanze", "discordanza", "posizione diversa", "ubicazione errata", "ubicazione diversa"],
        titolo: "Report discordanze",
        domande: ["posizione diversa da infinity", "l'auto risulta in un'altra sede", "discordanze di posizione"],
        answer: "Report «Discordanze posizione / ubicazione»: per ogni veicolo con tag attivo confronta l'ubicazione del piazzale in cui è posizionato con l'ubicazione su Infinity ed elenca solo quelli diversi. Filtri: società, ubicazione del piazzale, inventario.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["report cronologia posizione", "cronologia posizione", "spostamenti rfid", "storico posizioni"],
        titolo: "Cronologia posizione",
        domande: ["spostamenti nel piazzale", "storico delle posizioni", "chi ha spostato l'auto"],
        answer: "Report «Cronologia Posizione Veicoli»: tutti gli spostamenti RFID registrati con l'app nel periodo: tag, veicolo, utente che ha abbinato il tag e utente dello spostamento, data di abbinamento, data e ora dello spostamento, posizione (es. «Roma Nord - posto A12», «Roma Nord - GPS») e nota (es. «Inventario n. 15 - letto in Zona A» per gli spostamenti fatti dall'Inventario).",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["report workflow", "report costi workflow", "costi workflow", "costo fasi", "prezzo fasi", "contratto workflow"],
        titolo: "Report costi workflow",
        domande: ["costo delle fasi", "quanto costano le lavorazioni"],
        answer: "Report «Workflow» (prima «Costi Workflow»): per ogni fase di workflow (preconsegne) completata nel periodo: veicolo, data e sede del contratto abbinato su Infinity (vuote se non c'è un contratto), fase, utente, data, costo e prezzo. Filtri facoltativi: società e fase.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["report workflow calendario", "fasi prenotate"],
        titolo: "Report workflow calendario",
        domande: ["fasi prenotate"],
        answer: "Report «Workflow Calendario»: le fasi del workflow calendario registrate nel periodo: società, regime IVA, veicolo, fase, processo, utente, data e ora, note. Filtri facoltativi: società, fase, processo.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["report workflow batteria", "controlli batteria"],
        titolo: "Report workflow batteria",
        domande: ["report dei controlli batteria"],
        answer: "Report «Workflow Batteria»: i workflow batteria aperti nel periodo, un rigo per fase: società, veicolo, stato, processo, date del workflow e della fase, telaio, targa, data e codice del promemoria, utente, note. Filtri facoltativi: società, fase, processo.",
        quickReply: null,
        priority: 7
    },

    // ─────────────────────────────────────────
    // APP MOBILE
    // ─────────────────────────────────────────
    {
        keywords: ["app", "applicazione", "smartphone", "telefono app", "app mobile", "funzioni app"],
        titolo: "App mobile",
        domande: ["l'applicazione per telefono", "app di logismart", "scaricare l'app"],
        answer: "L'app LogiSmart (smartphone e lettori RFID) lavora sugli stessi dati della piattaforma web; le funzioni visibili dipendono dal ruolo (sezione App mobile della scheda Ruoli):\n- Abbina, Posiziona (anche inquadrando il QR della zona o col GPS), Cerca, Disabbina\n- Controllo Optionals, Dati Aggiuntivi, Gestione Avarie (con foto)\n- Workflow / Workflow Utente\n- Mappatura Piazzali, Inventario\n- Parcheggio su Infinity / Libera posto",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["primo avvio", "collegare l app", "societa app", "accesso app", "login app"],
        titolo: "Primo avvio dell'app",
        domande: ["collegare l'app alla società", "l'app non trova la mia azienda", "configurare l'app"],
        answer: "Al primo avvio l'app chiede la società a cui collegarsi, poi username e password: sono gli stessi della piattaforma web. Se la società non compare o l'app non si collega, contatta l'assistenza.",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["abbina", "abbinare un tag", "abbinare etichetta", "posiziona", "posizionare un veicolo"],
        titolo: "Abbinare e posizionare dall'app",
        domande: ["abbinare il tag con l'app", "posizionare l'auto con il telefono", "leggere il qr della zona"],
        answer: "Dall'app:\n- Abbina: collega un'etichetta RFID a un veicolo\n- Posiziona: registra in quale piazzale, zona e posto si trova il veicolo, anche inquadrando il QR della zona; se posizioni col GPS il piazzale viene calcolato dai 4 angoli in Anagrafica piazzali",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["registro un danno", "danno dall app", "gestione avarie", "registrare un danno", "foto danno"],
        titolo: "Registrare un danno dall'app",
        domande: ["segnalare un graffio", "fotografare un danno con l'app", "avaria dal telefono"],
        answer: "Con «Gestione Avarie» dell'app registri un danno sul veicolo, con foto. Le avarie si vedono in Configurazione › Veicoli danneggiati e nel report «Veicoli Danneggiati».",
        quickReply: null,
        priority: 7
    },

    // ─────────────────────────────────────────
    // GLOSSARIO
    // ─────────────────────────────────────────
    {
        keywords: ["n/u", "nuovo usato", "nuovo", "usato", "officina", "tipo veicolo", "nuoa"],
        titolo: "Nuovo, usato, officina",
        domande: ["cosa vuol dire n u o", "differenza tra nuovo e usato", "tipo di veicolo"],
        answer: "Tipo di veicolo (N/U/O/P/A): N = Nuovo, U = Usato, O = Officina, P = Personalizzato (creato in Configurazione), A = Agenzia.",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["genere contratto", "aziendale", "trapasso"],
        titolo: "Genere contratto",
        domande: ["auto aziendale", "trapasso"],
        answer: "Genere contratto: N = Normale, A = Aziendale, T = Trapasso, C = Az. cliente finale, S = Sconosciuto.",
        quickReply: null,
        priority: 5
    },
    {
        keywords: ["alias", "infinity", "pdi", "sede contratto", "cosa significa", "significato", "glossario"],
        titolo: "Termini di Infinity",
        domande: ["cosa è l'alias", "sede contratto", "cosa vuol dire pdi"],
        answer: "Alcune parole della piattaforma:\n- Alias: il codice con cui un piazzale o una zona è noto su Infinity\n- Infinity: il gestionale (DMS) di Visual Software da cui LogiSmart legge veicoli, contratti e utenti\n- PDI: Pre-Delivery Inspection, il controllo prima della consegna; la «mail PDI» avvisa il deposito\n- Sede contratto: la sede in cui il veicolo è stato venduto, che può essere diversa da dove si trova (ubicazione)\n- N/U/O/P/A: Nuovo, Usato, Officina, Personalizzato, Agenzia\n- Mezzo di trasporto: bisarca, targa prova o carro attrezzi\n- Impegno: quanti posti occupa un veicolo sul mezzo di trasporto",
        quickReply: null,
        priority: 5
    },

    // ─────────────────────────────────────────
    // PARCHEGGIO LEGATO ALL'UBICAZIONE E ATTIVITÀ AUTOMATICHE (11/11/2026)
    // ─────────────────────────────────────────
    {
        keywords: ["parcheggio legato all'ubicazione", "parcheggio legato", "cambio ubicazione", "ubicazione cambiata", "altra ubicazione", "parcheggio non valido"],
        titolo: "Parcheggio legato all'ubicazione",
        domande: ["l'auto ha cambiato sede", "parcheggio di un'altra ubicazione"],
        answer: "Amministrazione › Opzioni › «Parcheggio legato all'ubicazione» (la sezione c'è solo se la funzione è abilitata per la vostra installazione: per attivarla contatta l'assistenza). Attivo, per tutti gli utenti:\n- dall'app il posto auto o la zona in un piazzale di un'altra ubicazione vengono rifiutati (il motivo è nel log); il GPS non viene mai rifiutato e su Infinity scrive solo «Logismart Maps»\n- il parcheggio non si mostra più se l'ubicazione del veicolo su Infinity è diversa da quella del piazzale o se il veicolo è uscito; il posto auto appare subito libero\n- in Posizione veicoli il parcheggio resta in grigio con «non valido» (il motivo passando col mouse)\nI piazzali senza ubicazione non vengono controllati. Il dato viene liberato dall'attività automatica «Libera parcheggi di veicoli in un'altra ubicazione», che funziona anche con questa casella spenta.",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["attività automatiche", "attivita automatiche", "attività pianificate", "attivita pianificate", "pulizia parcheggi", "pulizia notturna", "esegui ora", "libera parcheggi"],
        titolo: "Attività automatiche",
        domande: ["operazioni notturne automatiche", "attività pianificate", "pulizia automatica dei parcheggi"],
        answer: "Amministrazione › Opzioni › «Attività automatiche» (la sezione c'è solo se la funzione è abilitata per la vostra installazione: per attivarla contatta l'assistenza). Per ogni attività: casella Attiva, ora, Prova (simulazione, non modifica nulla), Esegui ora e Registro:\n- Libera parcheggi di veicoli in un'altra ubicazione (02:00; funziona anche con «Parcheggio legato all'ubicazione» spento, ma in quel caso libera anche i veicoli parcheggiati prima che la loro ubicazione su Infinity fosse aggiornata: Opzioni lo segnala con un avviso)\n- Veicoli usciti: libera il parcheggio (03:00; il tag resta abbinato)\n- Veicoli usciti: libera il parcheggio e disabbina il tag (03:00, dopo la precedente; in alternativa alla precedente: fa le stesse cose e in più disabbina il tag, che non si può più usare)\n- Esporta parcheggi su Infinity (04:00)\n- Report giornaliero via email (16:00)\nOgni attività parte una volta al giorno all'ora scelta; se non riesce riprova l'ora dopo. Il tag resta abbinato, tranne con «Veicoli usciti: libera il parcheggio e disabbina il tag». Di fabbrica sono tutte spente.",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["utilità di pianificazione", "utilita di pianificazione", "schtasks", "attivita_orarie", "passaggio orario", "attività non partono", "attivita non partono"],
        titolo: "Collegamento con Windows",
        domande: ["utilità di pianificazione", "le attività automatiche non partono", "il passaggio orario non arriva", "impossibile creare il file di blocco nella cartella della piattaforma"],
        answer: "Le attività automatiche partono grazie all'Utilità di pianificazione di Windows, che ogni ora chiama la piattaforma. Il comando per crearla è in fondo ad Amministrazione › Opzioni › Attività automatiche: va incollato una volta sola nel cmd aperto come amministratore sul server. Se il passaggio orario manca da più di 2 ore, Opzioni mostra un avviso; l'esito di ogni passaggio è nel file attivita_orarie.log nella cartella della piattaforma.",
        quickReply: null,
        priority: 5
    },
    {
        keywords: ["report giornaliero", "mail di prova", "report automatico", "destinatari report"],
        titolo: "Report giornaliero via email",
        domande: ["mail automatica ogni giorno", "report che arriva per posta", "destinatari del report giornaliero", "nessuna email inviata dal report", "indirizzi email non validi"],
        answer: "Il report giornaliero (Amministrazione › Opzioni › Attività automatiche) manda per email i veicoli da preparare il giorno dopo con il file CSV (il venerdì anche sabato, domenica e lunedì). Scegli i ruoli destinatari (utenti attivi con email) e gli indirizzi in aggiunta; «Invia mail di prova» lo manda solo a te. Usa la posta di application-config.ini.",
        quickReply: null,
        priority: 5
    },
    {
        keywords: ["veicoli usciti parcheggio", "veicolo uscito", "libera parcheggio uscito", "disabbina automatico", "disabbinare veicoli usciti", "tag disabbinato", "posizionare tag disabbinato"],
        titolo: "Veicoli usciti: parcheggio e tag",
        domande: ["liberare i posti delle auto uscite", "disabbinare in automatico le auto vendute", "le auto uscite occupano ancora il posto"],
        answer: "Per i veicoli usciti (status U su Infinity) c'è l'attività automatica «Veicoli usciti: libera il parcheggio» (Amministrazione › Opzioni › Attività automatiche): libera posto auto, zona e GPS e svuota il parcheggio su Infinity, lasciando il tag abbinato. Se invece vuoi disabbinare in automatico i tag dei veicoli usciti c'è «Veicoli usciti: libera il parcheggio e disabbina il tag» (stessa sezione, in alternativa alla precedente: fa le stesse cose e in più disabbina il tag): il tag disabbinato non si può più usare e, se il veicolo rientra, serve un tag nuovo e va riposizionato. A mano c'è «Disabbina veicoli usciti» in Posizione veicoli.",
        quickReply: null,
        priority: 5
    },

    // ─────────────────────────────────────────
    // AAA - assistente (20/11/2026): PROBLEMI ED ERRORI (cosa vuol dire, cosa fare)
    // ─────────────────────────────────────────
    {
        keywords: ["primo giorno", "guida per iniziare", "sono nuovo", "mai usato", "non so usare", "come si usa la piattaforma", "cosa devo fare prima"],
        titolo: "Primo giorno: da dove inizio",
        domande: ["è la prima volta che uso logismart", "ho appena iniziato a lavorare qui", "inizio oggi a usare il programma", "mi spieghi come funziona il programma", "sono un nuovo utente cosa posso fare", "non ho mai usato questa piattaforma"],
        answer: "Benvenuto! In breve:\n1. Il menu a sinistra mostra solo le voci consentite al tuo ruolo\n2. Per spostare un veicolo: Viaggi › Cerca veicolo → Aggiungi al carrello → chi gestisce la logistica lo prenota su un viaggio → lo vedi nel Calendario viaggi\n3. Per sapere dove è parcheggiata un'auto: Piazzali › Posizione veicoli (o Localizzazione RFID)\n4. Per le lavorazioni sul veicolo: Workflow\n5. Il tasto «Aiuto» del menu apre il portale di assistenza\nChiedimi pure cosa devi fare (per esempio «come trasferisco un'auto») e ti spiego i passaggi.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["schermo", "menu a sinistra", "intestazione", "area di lavoro", "icona utente", "logo in alto"],
        titolo: "Com'è fatto lo schermo",
        domande: ["dove trovo le funzioni", "dove è il menu", "come torno alla pagina iniziale", "dove si trova il logout"],
        answer: "Dopo l'accesso trovi sempre:\n- a sinistra il menu principale (solo le voci del tuo ruolo); le voci con la freccia › hanno un sottomenu\n- in alto a destra l'icona utente: nome, email, «Cambia password» e «Logout»\n- al centro l'area di lavoro; all'accesso ci sono le Notifiche\n- il logo in alto a sinistra riporta sempre alla pagina iniziale.",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["passo passo", "procedura trasferimento", "come si sposta un veicolo da una sede all'altra", "percorso di un trasferimento"],
        titolo: "Trasferire un veicolo passo passo",
        domande: ["mi spieghi tutti i passaggi per trasferire un'auto", "come funziona un trasferimento dall'inizio alla fine", "ho venduto un'auto in un'altra sede come la faccio arrivare"],
        answer: "Il percorso di un trasferimento:\n1. Viaggi › Cerca veicolo: cerca per targa o telaio e premi Avvia ricerca\n2. spunta il veicolo e premi «Aggiungi al carrello»: indica partenza, arrivo, motivo, data in cui ti serve e annotazioni\n3. la richiesta va in Carrello veicoli, ordinata per priorità\n4. chi gestisce la logistica preme «Effettua una prenotazione» (o «Prenota selezionati») e sceglie un viaggio; se non ce ne sono può crearne uno nuovo\n5. il veicolo compare nel Calendario viaggi: da lì partono le mail al trasportatore e al deposito e si stampa il PDF\n6. a viaggio concluso la richiesta passa nel Carrello storico.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["differenza tra carrello e calendario", "carrello o calendario", "richiesta e prenotazione"],
        titolo: "Carrello e Calendario: la differenza",
        domande: ["che differenza c'è tra mettere nel carrello e prenotare", "perché l'auto è nel carrello e non sul viaggio", "quando passa dal carrello al viaggio"],
        answer: "- Carrello veicoli: le RICHIESTE di trasferimento in attesa (chi, da dove, a dove, per quando). Chiunque abbia il permesso può aggiungere una richiesta.\n- Calendario viaggi: i VIAGGI programmati con i veicoli già PRENOTATI sopra.\nUna richiesta passa dal carrello al calendario quando chi gestisce la logistica la prenota su un viaggio. Finché resta nel carrello il veicolo non è ancora organizzato.",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["cercare bene", "filtri cerca veicolo", "cerca in tutte le società", "avvia ricerca", "ricerca parziale"],
        titolo: "Come cercare bene un veicolo",
        domande: ["come si usano i filtri della ricerca", "posso cercare più targhe insieme", "devo scrivere la targa intera?", "la ricerca è lenta o non trova niente"],
        answer: "In Viaggi › Cerca veicolo:\n- un campo vuoto vale «Tutto»; nei campi di testo basta una parte della targa o del telaio\n- più targhe o telai si separano con ; (punto e virgola)\n- se non trovi il veicolo spunta «Cerca in tutte le società» e controlla «Status veicoli» e N/U/O/P\n- «Azzera filtri» riporta tutto a «Tutto»\n- «Seleziona filtri da visualizzare» sceglie quali filtri vedere: un filtro nascosto non filtra.",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["veicolo grigio", "riga grigia", "non lavorabile", "veicolo uscito nella ricerca"],
        titolo: "Veicolo in grigio nella ricerca",
        domande: ["perché l'auto è grigia e non posso selezionarla", "il veicolo compare ma non posso metterlo nel carrello"],
        answer: "Cercando per targa o telaio compaiono anche i veicoli usciti (venduti o consegnati): sono in grigio e non lavorabili, perché non sono più in stock. Se il veicolo deve ancora muoversi, controlla lo status su Infinity: se è stato reso di nuovo disponibile (per esempio come usato) cercalo con il tipo giusto (N/U/O/P o «Tutti i tipi»).",
        quickReply: null,
        priority: 5
    },
    {
        keywords: ["pagine con elenco", "pulsante nuovo", "pannello laterale", "ordinare le colonne", "cerca nella tabella"],
        titolo: "Le pagine con elenco",
        domande: ["come creo un nuovo elemento", "come modifico una riga", "come ordino una colonna", "dove scrivo per cercare nell'elenco"],
        answer: "Quasi tutte le pagine di Configurazione, Amministrazione e Piazzali funzionano allo stesso modo:\n- tasto verde «Nuovo…»: apre il pannello laterale per creare\n- matita ✎: modifica la riga; cestino 🗑: elimina\n- «Cerca» filtra l'elenco mentre scrivi; clic sul titolo di una colonna per ordinarla\n- in basso scegli 10, 20 o 50 righe per pagina e sfogli le pagine\n- nel pannello i campi con * sono obbligatori; premi «Salva» (o «Chiudi» per uscire senza salvare).",
        quickReply: null,
        priority: 5
    },
    {
        keywords: ["chiuso senza salvare", "perso le modifiche", "non ha salvato", "dati persi"],
        titolo: "Ho chiuso senza salvare",
        domande: ["ho chiuso la finestra e ho perso quello che avevo scritto", "le modifiche non sono state salvate", "ho ricaricato la pagina e non c'è più niente"],
        answer: "Le modifiche si salvano solo con il tasto «Salva» (o il tasto di conferma della finestra). Se chiudi il pannello o ricarichi la pagina prima, quello che avevi scritto non viene registrato e va inserito di nuovo. Ciò che era già salvato non si perde mai, nemmeno se la sessione scade.",
        quickReply: null,
        priority: 5
    },
    {
        keywords: ["pagina ferma", "non risponde", "pagina bloccata", "rimane a caricare", "lentissima"],
        titolo: "Pagina ferma o che non risponde",
        domande: ["la pagina gira e non carica", "resta bloccato a caricare", "non finisce mai di caricare", "il programma è lento", "il pulsante non fa niente", "non succede niente quando clicco"],
        answer: "Se una pagina non risponde:\n1. aspetta qualche secondo: le ricerche su molti veicoli possono richiedere tempo\n2. ricarica la pagina (F5): i dati salvati non si perdono\n3. riduci i filtri (per esempio un intervallo di date più corto)\n4. se usi la VPN controlla che sia collegata\nSe il problema resta, avvisa l'assistenza indicando pagina, ora e cosa stavi facendo.",
        quickReply: null,
        priority: 5
    },
    {
        keywords: ["formato data", "gg/mm/aaaa", "virgola o punto", "come scrivo la data", "importo non valido"],
        titolo: "Formati di date e importi",
        domande: ["in che formato inserisco la data", "per i decimali uso la virgola?", "mi dice importo non valido", "come scrivo l'ora"],
        answer: "- Date: gg/mm/aaaa (per esempio 05/12/2026), oppure scegli dal calendario\n- Ore: hh:mm (per esempio 08:30)\n- Importi: per esempio 1.250,00 (nei costi del viaggio puoi usare virgola o punto per i decimali)\n- Colori: formato #RRGGBB (per esempio #FF0000)",
        quickReply: null,
        priority: 4
    },
    {
        keywords: ["manuale", "guida", "istruzioni", "documentazione", "aiuto del menu", "apri il manuale", "portale di assistenza"],
        titolo: "Il manuale e l'aiuto",
        domande: ["dove trovo il manuale", "c'è una guida da leggere", "voglio le istruzioni complete", "come apro il manuale"],
        answer: "Il manuale si apre dalla piattaforma: menu «Aiuto» › «Manuale» oppure il link «Manuale» in basso nella pagina (si apre in una nuova scheda ed è quello della versione installata). «Aiuto» › «Portale di assistenza» apre il portale Brown & Co. Se nel menu «Aiuto» non vedi la voce «Manuale», la tua versione è precedente: chiedi il manuale al tuo amministratore o all'assistenza (logismart@brown-co.it). Qui in chat puoi chiedermi qualsiasi cosa: ti rispondo con i passaggi da fare.",  // AAA - manuale in piattaforma (22/11/2026): risposta aggiornata
        quickReply: null,
        priority: 4
    },
    {
        keywords: ["tag disabbinato", "tag disabilitato", "etichetta disabbinata", "riusare un tag", "nessun veicolo con il tag"],
        titolo: "Tag disabbinato: non si può usare",
        domande: ["dall'app non riesco a posizionare l'auto", "l'app dice non è presente nessun veicolo", "posso rimettere un tag già disabbinato?", "il tag non funziona più dopo il disabbinamento", "l'auto è tornata come usato con lo stesso tag"],
        answer: "Un tag disabbinato non si può più usare: l'app non lo trova più su nessun veicolo e non lo lascia né abbinare né posizionare.\nCosa fare:\n1. applica al veicolo un tag nuovo\n2. dall'app fai «Abbina» con il tag nuovo\n3. poi «Posiziona» il veicolo nel suo posto\nSuccede spesso con i veicoli usciti e rientrati (per esempio passati da nuovo a usato): il tag del vecchio record è stato disabbinato.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["viaggio confermato", "il viaggio è già confermato", "viaggio chiuso", "non posso modificare il viaggio"],
        titolo: "Viaggio confermato: non si modifica",
        domande: ["non riesco a togliere un'auto da un viaggio confermato", "il viaggio è bloccato e non posso cambiare la data", "perché non posso prenotare su quel viaggio"],
        answer: "Se il viaggio è confermato (lucchetto chiuso nel Calendario viaggi) non si può più modificare: niente prenotazioni, spostamenti, annullamenti, cambio di data o di mezzo. Vale anche per i viaggi multipli se uno dei due è confermato.\nCosa fare: chi ha il permesso «riaprire i viaggi» preme «Riapri viaggio» (lucchetto chiuso); fai la modifica e poi il viaggio si conferma di nuovo. Se non hai il permesso chiedi al gestore della logistica.",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["viaggio non trovato", "tratta non trovati", "piano non trovato", "il viaggio scelto non esiste più"],
        titolo: "Viaggio o tratta non trovati",
        domande: ["impossibile procedere viaggio o tratta non trovati aggiorna la pagina", "il viaggio è sparito mentre prenotavo"],
        answer: "Il viaggio è stato cambiato o eliminato da un altro utente mentre avevi la pagina aperta. Aggiorna la pagina (o il calendario) e ripeti l'operazione: vedrai la situazione attuale.",
        quickReply: null,
        priority: 5
    },
    {
        keywords: ["data non valida", "selezionare una data", "nuova data anteriore", "anteriore alla prenotazione", "data passata non consentita"],
        titolo: "Data del viaggio non valida",
        domande: ["impossibile procedere la nuova data è anteriore alla prenotazione dei veicoli", "non posso spostare il viaggio nel passato", "utente non abilitato a spostare un viaggio in una data passata"],
        answer: "Nel «Cambia data» del Calendario viaggi:\n- scegli una data dal calendario (formato gg/mm/aaaa); i giorni vietati non si possono scegliere\n- una data passata è consentita solo a chi ha il permesso di spostare i viaggi nel passato: chiedilo all'amministratore (Amministrazione › Ruoli)\n- se la nuova data è prima della prenotazione dei veicoli, la piattaforma chiede una conferma: controlla che sia proprio quella giusta.",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["mezzo già impegnato", "già impegnata in questo giorno", "mezzo non entra", "veicoli non entrano nel mezzo", "selezionare una bisarca"],
        titolo: "Mezzo non adatto o già impegnato",
        domande: ["il nuovo camion è troppo piccolo per le auto caricate", "la bisarca è già occupata quel giorno", "impossibile procedere il mezzo di trasporto selezionato"],
        answer: "Quando cambi mezzo di trasporto la piattaforma propone solo i mezzi attivi in cui entrano tutti i veicoli già caricati (compreso l'aumento di capacità). Se un mezzo è già su un altro viaggio nello stesso giorno compare «ATTENZIONE: già impegnata in questo giorno»: puoi sceglierlo solo se fa davvero due giri.\nSe nessun mezzo va bene, togli prima qualche veicolo dal viaggio oppure segna i posti in modo diverso.",
        quickReply: null,
        priority: 5
    },
    {
        keywords: ["non riesco a prenotare", "non mi fa prenotare", "prenotazione non riuscita", "impossibile procedere"],
        titolo: "Non riesco a prenotare: cosa controllare",
        domande: ["perché il sistema mi blocca la prenotazione", "il pulsante prenota non funziona", "non posso mettere l'auto sul viaggio"],
        answer: "Se una prenotazione viene bloccata, leggi il messaggio che compare: dice sempre il motivo. I casi più comuni:\n- termine di prenotazione scaduto: per quella data è passato l'orario limite del tuo ruolo\n- giorno vietato: scegli un altro giorno\n- lucchetto grigio: l'ubicazione del veicolo ha la prenotazione limitata\n- veicolo già nel carrello o già su un viaggio\n- viaggio confermato o tratta bloccata\n- mezzo pieno sulla tratta\n- ruolo senza il permesso di prenotare\nScrivimi il messaggio che vedi e ti dico cosa fare.",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["mezzo pieno", "non c'è posto", "posti esauriti", "bisarca piena", "nessun posto libero"],
        titolo: "Mezzo pieno sulla tratta",
        domande: ["la bisarca non ha più posti", "non ci sta un'altra macchina sul camion", "come carico un'auto in più"],
        answer: "Se sulla tratta non ci sono posti liberi la prenotazione non passa. Puoi:\n- scegliere un altro viaggio o crearne uno nuovo\n- cambiare il mezzo con uno più grande («Cambia mezzo di trasporto»)\n- controllare i posti segnalati come inutilizzabili o occupati: un clic sul posto lo rende di nuovo disponibile\n- verificare l'impegno dei veicoli (un furgone può occupare più posti: Configurazione › Impegno veicoli)\n- se il mezzo lo prevede, attivare l'aumento di capacità (Mezzi di trasporto).",
        quickReply: null,
        priority: 5
    },
    {
        keywords: ["mail non inviata", "impossibile inviare la mail", "invio non riuscito", "errore smtp", "email non valida"],
        titolo: "Mail non inviata",
        domande: ["errore nell'invio della mail", "l'indirizzo email del fornitore non è valido", "la mail non è partita"],
        answer: "Se una mail non parte:\n- «nessuna email impostata» o «indirizzo non valido»: correggi l'email in Configurazione › Anagrafica fornitori (o nella scheda utente)\n- «non hai i permessi»: chiedi all'amministratore il permesso per quella mail (Amministrazione › Ruoli)\n- «impossibile inviare» o «errore SMTP»: il problema è nel server di posta della piattaforma; avvisa l'assistenza.",
        quickReply: null,
        priority: 5
    },
    {
        keywords: ["file non caricato", "il file non è un'immagine", "errore nel caricamento", "foto non caricata"],
        titolo: "File o foto non caricati",
        domande: ["non riesco a caricare l'allegato", "la foto non si carica", "errore nel caricamento del documento"],
        answer: "Se un allegato non si carica:\n- per le foto usa un file immagine (per esempio jpg o png)\n- controlla che il file non sia troppo grande e riprova\n- per eliminare gli allegati serve il permesso «eliminare gli allegati»\nSe l'errore si ripete con file diversi, avvisa l'assistenza.",
        quickReply: null,
        priority: 4
    },
    {
        keywords: ["ho sbagliato", "errore mio", "tornare indietro", "annullare un'operazione", "ho fatto un errore"],
        titolo: "Ho sbagliato un'operazione: come rimedio",
        domande: ["ho prenotato l'auto sbagliata", "ho messo il veicolo nel posto sbagliato", "ho abbinato il tag sbagliato", "ho aggiunto al carrello per errore", "ho confermato il viaggio per sbaglio", "come annullo quello che ho fatto"],
        answer: "Quasi tutto si può correggere:\n- prenotazione sbagliata: nel Calendario viaggi clicca la targa e annulla o sposta il trasferimento\n- richiesta nel carrello per errore: «Annulla richiesta» nel Carrello\n- viaggio confermato per sbaglio: «Riapri viaggio» (serve il permesso)\n- data del viaggio sbagliata: «Cambia data»\n- posizione sbagliata: riposiziona il veicolo dall'app\n- tag abbinato all'auto sbagliata: disabbinalo e abbina un tag nuovo all'auto giusta (un tag disabbinato non si riusa)\nDimmi cosa hai sbagliato e ti spiego i passaggi.",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["stesso giorno", "giorni di attesa", "almeno 1 giorno di attesa", "riportare a oggi", "tirare indietro"],
        titolo: "Due viaggi collegati nello stesso giorno",
        domande: ["tra i due viaggi servono almeno 1 giorno di attesa", "non posso portare a oggi il secondo viaggio", "il cambio di bisarca deve avvenire oggi", "non mi lascia spostare il viaggio di domani a oggi", "devo fare il cambio mezzo nello stesso giorno"],
        answer: "Nei viaggi multipli (cambio di bisarca a metà strada) il secondo viaggio deve partire dopo i «Giorni di attesa viaggio multiplo» impostati in Amministrazione › Opzioni. Con 1 giorno la vettura arriva alla tappa di cambio e riparte il giorno dopo: per questo il sistema blocca lo spostamento del secondo viaggio allo stesso giorno del primo.\nPer fare il cambio nello stesso giorno:\n1. Opzioni: metti «Numero giorni di attesa viaggio multiplo» a 0 e salva\n2. Calendario viaggi: «Cambia data» sul secondo viaggio (attenzione: si sposta tutto il viaggio, con tutte le vetture)\n3. consigliato: rimetti 1 in Opzioni, per non perdere le coincidenze nelle prossime prenotazioni\nAnche con 0 il secondo viaggio deve partire dopo l'arrivo del primo alla tappa di cambio. Non spostare a ieri un viaggio che si fa oggi: le vetture già arrivate alla tappa di cambio risulterebbero arrivate e ripartite nello stesso giorno.",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["da nuovo a usato", "passata a usato", "ricaricata come usato", "passaggio nuovo usato", "nuovo diventa usato"],
        titolo: "Auto passata da nuovo a usato",
        domande: ["la vettura è stata fatturata e caricata come usato", "il veicolo nuovo è diventato usato e non trovo più la posizione", "posso tenere lo stesso tag quando passa a usato", "l'auto ricaricata come usato non ha il tag"],
        answer: "Quando una vettura viene fatturata come nuovo e ricaricata su Infinity come usato, per LogiSmart sono due veicoli diversi: il tag e la posizione restano sul veicolo nuovo e non passano da soli all'usato.\nCosa fare:\n1. applica un tag nuovo alla vettura\n2. dall'app «Abbina» il tag nuovo al veicolo usato\n3. «Posiziona» il veicolo nel suo posto\nSe è attiva l'attività automatica «Veicoli usciti: libera il parcheggio e disabbina il tag», di notte il tag del vecchio veicolo nuovo uscito viene disabbinato e non si può più usare: serve sempre un tag nuovo.",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["cos'è un'ubicazione", "cosa significa ubicazione", "che cos'è l'ubicazione"],
        titolo: "Cos'è un'ubicazione",
        domande: ["cosa vuol dire ubicazione", "differenza tra ubicazione e piazzale"],
        answer: "L'ubicazione è la sede fisica (deposito, filiale, punto vendita) dove si trova un veicolo. Dentro un'ubicazione ci sono i piazzali, divisi in zone e posti auto. Le ubicazioni si configurano in Configurazione › Ubicazioni.",
        quickReply: null,
        priority: 5
    },
    {
        keywords: ["cos'è un piazzale", "cos'è una zona", "cos'è un posto auto"],
        titolo: "Cos'è un piazzale, una zona, un posto auto",
        domande: ["cosa vuol dire piazzale", "che differenza c'è tra zona e posto auto"],
        answer: "Il piazzale è un'area di parcheggio di un'ubicazione. Si divide in zone (con un'etichetta QR da inquadrare con l'app) e, se serve, in posti auto numerati (Mappatura piazzali). Ordine: Ubicazione › Piazzale › Zona › Posto auto › Veicolo.",
        quickReply: null,
        priority: 5
    },
    {
        keywords: ["cos'è una bisarca", "cos'è un mezzo di trasporto", "cosa vuol dire bisarca"],
        titolo: "Cos'è una bisarca / mezzo di trasporto",
        domande: ["cosa significa mezzo di trasporto", "bisarca piano 1 e piano 2"],
        answer: "Il mezzo di trasporto è ogni mezzo usato per i viaggi: bisarca, targa prova o carro attrezzi. La bisarca è il camion a due piani che trasporta più veicoli: ha una capacità per il piano 1 e una per il piano 2. Si configurano in Configurazione › Mezzi di trasporto.",
        quickReply: null,
        priority: 5
    },
    {
        keywords: ["cos'è un itinerario", "cos'è una tappa", "cos'è una tratta"],
        titolo: "Cos'è un itinerario, una tappa, una tratta",
        domande: ["cosa vuol dire tratta", "differenza tra itinerario e viaggio"],
        answer: "L'itinerario è il percorso di un viaggio: partenza, fermate (tappe) e arrivo, con orari e chilometri. La tratta è il tratto tra una tappa e la successiva. Il viaggio è l'itinerario fatto da un mezzo in un giorno preciso, con i veicoli caricati.",
        quickReply: null,
        priority: 5
    },
    {
        keywords: ["cos'è il carrello", "a cosa serve il carrello", "cosa vuol dire carrello"],
        titolo: "Cos'è il carrello",
        domande: ["perché si chiama carrello", "chi usa il carrello", "chi decide su quale viaggio va la mia auto"],
        answer: "Il Carrello veicoli è l'elenco delle richieste di trasferimento in attesa di essere prenotate su un viaggio. Chi chiede uno spostamento aggiunge la richiesta; chi gestisce la logistica la usa come lista di lavoro, in ordine di priorità.",
        quickReply: null,
        priority: 5
    },
    {
        keywords: ["cos'è un tag", "cos'è rfid", "cosa vuol dire tag", "etichetta elettronica"],
        titolo: "Cos'è un tag RFID",
        domande: ["a cosa serve il tag sulla macchina", "come funziona l'etichetta rfid"],
        answer: "Il tag RFID è un'etichetta elettronica letta a distanza dal lettore dell'app. Identifica un veicolo (o le sue chiavi): con l'app si abbina il tag al veicolo e poi si registra dove viene parcheggiato. Un tag disabbinato non si può più usare.",
        quickReply: null,
        priority: 5
    },
    {
        keywords: ["cos'è una fase", "cos'è un processo", "differenza tra fase e processo"],
        titolo: "Cos'è un workflow, una fase, un processo",
        domande: ["cosa significa workflow", "fase processo workflow differenza", "non capisco cosa sia un workflow"],
        answer: "- Fase: una singola lavorazione (per esempio lavaggio, PDI); si completa o si salta\n- Processo: la sequenza ordinata di fasi, con le regole sui veicoli a cui si applica\n- Workflow: un processo avviato su un veicolo preciso.",
        quickReply: null,
        priority: 5
    },
    {
        keywords: ["cos'è infinity", "cosa vuol dire infinity", "gestionale infinity", "dms"],
        titolo: "Cos'è Infinity",
        domande: ["da dove prende i veicoli logismart", "cosa c'entra infinity"],
        answer: "Infinity è il gestionale (DMS) di Visual Software da cui LogiSmart legge veicoli, contratti e utenti. I dati del veicolo (status, ubicazione, contratto) si correggono in Infinity; LogiSmart li legge e scrive su Infinity solo alcune informazioni, per esempio il parcheggio.",
        quickReply: null,
        priority: 5
    },
    {
        keywords: ["cos'è la targa prova", "cos'è il carro attrezzi", "cosa vuol dire tp", "cosa vuol dire ca"],
        titolo: "Cos'è la targa prova e il carro attrezzi",
        domande: ["cosa significano tp e ca", "quando si usa la targa prova"],
        answer: "- Targa prova (T.P.): targa temporanea che permette a un autista di guidare un veicolo non ancora immatricolato (per esempio un test drive o uno spostamento breve)\n- Carro attrezzi (C.A.): mezzo che trasporta un solo veicolo, di solito non marciante.\nSi prenotano dalla riga del veicolo in Cerca veicolo e si vedono in Viaggi › Calendario T.P. / C.A.",
        quickReply: null,
        priority: 5
    },
    {
        keywords: ["cos'è il cmr", "cos'è la pdi", "cosa vuol dire pdi", "lettera di vettura"],
        titolo: "Cos'è CMR e PDI",
        domande: ["cosa significa cmr", "cosa significa pdi"],
        answer: "- CMR: lettera di vettura per il trasporto su strada; si scarica dal Calendario viaggi con il relativo permesso\n- PDI (Pre-Delivery Inspection): il controllo prima della consegna, di solito presso il deposito; la «mail PDI» avvisa il deposito.",
        quickReply: null,
        priority: 5
    },
    {
        keywords: ["sigle status", "status a v u", "cosa vuol dire status", "lettere dello status"],
        titolo: "Sigle di status e tipo veicolo",
        domande: ["cosa significa status a", "cosa vuol dire la v nello status", "che cosa indica la u"],
        answer: "Status veicolo: R = a richiesta, D = da ordinare, O = ordinato, C = virtuale, T = assegnato, S = stornato, A = stock, V = venduto, U = uscito.\nTipo veicolo: N = nuovo, U = usato, O = officina, P = personalizzato, A = agenzia.\nGenere contratto: N = normale, A = aziendale, T = trapasso, C = az. cliente finale, S = sconosciuto.",
        quickReply: null,
        priority: 5
    },
    {
        keywords: ["numero di priorità", "priorità 1", "cosa vuol dire priorità"],
        titolo: "Cos'è la priorità del carrello",
        domande: ["perché un'auto ha priorità 1", "come viene calcolata la priorità"],
        answer: "Nel carrello la colonna Priorità ordina le richieste: 1 è la più urgente. È calcolata con le regole di Configurazione › Priorità carrello (per esempio venduto con caparra, finanziamento, nuovo o usato). Chi gestisce la logistica prenota per prime le richieste con il numero più basso.",
        quickReply: null,
        priority: 5
    },
    {
        keywords: ["eliminazione bloccata", "è in uso", "non posso eliminare", "impossibile eliminare"],
        titolo: "Eliminazione bloccata: elemento in uso",
        domande: ["non mi fa cancellare l'autista", "non riesco a eliminare il mezzo", "errore durante l'eliminazione"],
        answer: "Un elemento usato altrove (per esempio un autista su un viaggio, un dato aggiuntivo già compilato, un mezzo con viaggi) non si può eliminare, per non perdere lo storico. Al suo posto disattivalo (casella «Attivo» o «Attiva»): non comparirà più nelle scelte ma i dati passati restano.",
        quickReply: null,
        priority: 5
    },
    {
        keywords: ["disattivare", "non più usato", "nascondere dall'elenco", "attivo no"],
        titolo: "Disattivare invece di eliminare",
        domande: ["come tolgo un elemento che non usiamo più", "voglio che non compaia più nelle scelte"],
        answer: "Per gli elementi che non si usano più (mezzi, itinerari, piazzali, zone, utenti, dati aggiuntivi…) è meglio togliere la spunta «Attivo» invece di eliminarli: spariscono dalle scelte ma lo storico resta. Si possono riattivare in ogni momento.",
        quickReply: null,
        priority: 4
    },
    {
        keywords: ["già presente", "codice già presente", "duplicato", "esiste già"],
        titolo: "Codice o targa già presenti",
        domande: ["mi dice che la targa esiste già", "telaio già presente", "codice già usato in questo piazzale"],
        answer: "La piattaforma non accetta due elementi con lo stesso codice (stessa targa o telaio tra i veicoli personalizzati e agenzia, stesso codice di posto nello stesso piazzale). Cerca l'elemento già esistente e modifica quello, oppure usa un codice diverso.",
        quickReply: null,
        priority: 5
    },
    {
        keywords: ["infinity non raggiungibile", "dati del veicolo non disponibili", "collegamento con infinity"],
        titolo: "Infinity non raggiungibile",
        domande: ["mi dice infinity della società non raggiungibile", "non vedo i dati del veicolo"],
        answer: "LogiSmart legge i veicoli da Infinity: se il database di una società non risponde (rete, VPN o server spento), i dati di quei veicoli non sono disponibili. Riprova dopo qualche minuto; se dura, avvisa l'assistenza o il tuo referente IT.",
        quickReply: null,
        priority: 5
    },
    {
        keywords: ["va aggiornato il database", "script del database", "non è ancora attiva", "contatta l'assistenza per lo script"],
        titolo: "Lo script del database va aggiornato",
        domande: ["mi dice che la funzione non è ancora disponibile", "va lanciato lo script del database"],
        answer: "Alcune funzioni nuove hanno bisogno di un aggiornamento del database. Finché non viene fatto la piattaforma lo segnala e la funzione resta spenta, senza danni. Contatta l'assistenza (logismart@brown-co.it): l'aggiornamento lo fanno loro.",
        quickReply: null,
        priority: 4
    },
    {
        keywords: ["annulla richiesta non consentito", "il tuo ruolo non consente di usare il tasto annulla richiesta", "permesso negato annulla"],
        titolo: "Annullare una richiesta: permesso mancante",
        domande: ["non posso annullare la richiesta del carrello", "mi blocca annulla richiesta"],
        answer: "Il tasto «Annulla richiesta» nel carrello si usa solo con il relativo permesso del ruolo. Se non ce l'hai, chiedi a chi gestisce la logistica di annullarla o all'amministratore di darti il permesso (Amministrazione › Ruoli).",
        quickReply: null,
        priority: 5
    },
    {
        keywords: ["più veicoli insieme", "prenota selezionati", "selezione multipla", "compila tutti i veicoli"],
        titolo: "Prenotare più veicoli insieme",
        domande: ["posso mettere tante auto insieme nel carrello", "come prenoto più macchine sullo stesso viaggio", "alcuni veicoli non sono stati prenotati"],
        answer: "- In Cerca veicolo spunta più righe e premi «Aggiungi al carrello»: «Compila tutti i veicoli contemporaneamente» riempie gli stessi dati per tutti\n- nel Carrello spunta più righe e premi «Prenota selezionati»\nAlla fine un riepilogo indica i veicoli prenotati e quelli rimasti fuori (per esempio per ubicazione con prenotazione limitata o veicolo già su un viaggio): quelli restano nel carrello.",
        quickReply: null,
        priority: 5
    },
    {
        keywords: ["viaggio non compare", "non vedo il viaggio", "viaggio sparito", "dove è finito il viaggio"],
        titolo: "Il viaggio non compare nel calendario",
        domande: ["non trovo più un viaggio che avevo creato", "il viaggio della settimana prossima non si vede"],
        answer: "All'apertura il Calendario viaggi mostra i viaggi da oggi a domenica. Per vederne altri scegli un intervallo di date più ampio in «Strumenti». Controlla anche i filtri (mezzo, ubicazione, targa): «Azzera filtri» li toglie. Se il viaggio è stato spostato di data con «Cambia data», cercalo nella nuova data.",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["orari del viaggio", "a che ora parte", "a che ora arriva", "orario di arrivo"],
        titolo: "Orari del viaggio",
        domande: ["quando arriva il camion", "a che ora passa la bisarca dalla sede"],
        answer: "Nel Calendario viaggi, sotto ogni tappa, ci sono gli orari di arrivo e partenza del viaggio (presi dall'itinerario). Gli stessi orari sono nel PDF del viaggio. Gli orari si impostano nell'itinerario (Configurazione › Itinerari).",
        quickReply: null,
        priority: 5
    },
    {
        keywords: ["colori delle tappe", "verde giallo rosso", "5 / 8", "numeri sotto la tappa"],
        titolo: "Colori delle tappe nel calendario",
        domande: ["cosa significano i numeri sulle tappe", "perché la tappa è verde"],
        answer: "Nel Calendario viaggi: verde = partenza, giallo = fermata, rosso = arrivo. Il numero indica il carico rispetto alla capacità (5 / 8 = 5 posti occupati su 8). Sotto ci sono gli orari di arrivo e partenza.",
        quickReply: null,
        priority: 5
    },
    {
        keywords: ["posizione sbagliata", "non è dove dice", "risulta altrove", "riposizionare"],
        titolo: "Il veicolo non è nella posizione giusta",
        domande: ["l'auto non è nel posto indicato", "la posizione nella piattaforma non corrisponde", "ho parcheggiato in un altro posto"],
        answer: "Se un veicolo non è dove risulta:\n1. dall'app fai «Posiziona» nel posto vero (inquadrando il QR della zona o con il GPS)\n2. se il piazzale non si può scegliere, controlla che sia attivo e, se è acceso «Parcheggio legato all'ubicazione», che sia della stessa ubicazione del veicolo\n3. per trovare tutti i casi usa il Report discordanze posizione / ubicazione o fai un Inventario.",
        quickReply: null,
        priority: 5
    },
    {
        keywords: ["app non legge", "lettore non legge", "tag non letto", "lettore rfid non funziona"],
        titolo: "L'app non legge il tag",
        domande: ["il telefono non trova l'etichetta", "l'app non vede il tag", "il lettore non collega"],
        answer: "Se l'app non legge il tag:\n- avvicina il lettore all'etichetta e riprova\n- controlla che il lettore RFID sia acceso, carico e collegato al telefono\n- se il tag è stato disabbinato non si può più usare: serve un tag nuovo\nSe nessun tag viene letto, riavvia l'app e il lettore; se resta, avvisa l'assistenza.",
        quickReply: null,
        priority: 5
    },

    // ─────────────────────────────────────────
    // EASTER EGG (invariati)
    // ─────────────────────────────────────────
    {
        keywords: ["chi ti ha creato"],
        titolo: "Chi ha creato l'assistente",
        domande: ["chi ti ha fatto"],
        answer: "Mio papà è Giovanni Esposito",
        quickReply: null,
        priority: 1
    },
    {
        keywords: ["che squadra tifi"],
        titolo: "Squadra del cuore",
        answer: "Forza Torino",
        quickReply: null,
        priority: 1
    }
];

// Messaggio predefinito quando non trova una risposta
// AAA - assistente (20/11/2026): messaggio piu' utile. Testo precedente: "Mi dispiace, non ho capito la tua domanda.\n\nProva a chiedere informazioni su:\n- Cerca veicolo e trasferimenti\n- Carrello veicoli\n- Calendario viaggi / Targa prova / Carro attrezzi\n- Piazzali, posti auto e GPS\n- Localizzazione RFID\n- Report e Dashboard\n- Workflow e Workflow calendario\n- Utenti, ruoli e configurazione\n\nOppure contatta il supporto: logismart@brown-co.it"
const defaultMessage = "Non sono sicuro di aver capito.\n\nProva a scrivere la domanda con altre parole, oppure:\n- copia qui il messaggio di errore o di avviso che vedi\n- dimmi cosa stai cercando di fare (per esempio «trasferire un'auto», «trovare dove è parcheggiata», «annullare una prenotazione»)\n- scrivi «guida per iniziare» per i primi passi\n\nSe non trovi la risposta contatta il supporto: logismart@brown-co.it";

// Messaggi di benvenuto (ne viene scelto uno a caso)
// AAA - assistente (20/11/2026): benvenuto che dice cosa si puo' chiedere. Messaggi precedenti:
// const welcomeMessages = [
//     "Ciao! Come posso aiutarti oggi?",
//     "Benvenuto! Hai domande? Sono qui per aiutarti!",
//     "Ciao! Chiedimi qualsiasi cosa, sarò felice di aiutarti!"
// ];
const welcomeMessages = [
    "Ciao! Chiedimi come fare qualcosa, cosa vuol dire una parola o incollami un messaggio di errore: ti spiego cosa fare.",
    "Ciao! Sono l'assistente di LogiSmart. Scrivimi cosa devi fare o il messaggio che vedi e ti aiuto passo passo."
];
