/**
 * DATABASE FAQ - CHATBOT AI
 * 
 * Personalizza qui tutte le domande e risposte del tuo chatbot
 * Ogni elemento ha:
 * - keywords: array di parole chiave che attivano questa risposta
 * - answer: la risposta che verrà mostrata all'utente
 * - quickReply: testo del pulsante di risposta rapida (opzionale)
 * - priority: livello di priorità (1-10, più alto = più importante)
 */

const faqData = [

    // ─────────────────────────────────────────
    // SALUTI E GENERALI
    // ─────────────────────────────────────────
    {
        keywords: ["ciao", "salve", "buongiorno", "buonasera", "hey", "hello", "hi", "saluti"],
        answer: "Ciao! Benvenuto nel supporto LogiSmart. Come posso aiutarti oggi?",
        quickReply: null,
        priority: 5
    },
    {
        keywords: ["grazie", "thanks", "ringrazio", "perfetto", "ok", "ottimo"],
        answer: "Prego! Sono felice di averti aiutato. Se hai altre domande, sono qui!",
        quickReply: null,
        priority: 3
    },
    {
        keywords: ["orari", "orario", "apertura", "chiusura", "aperto", "aprite", "chiudete", "quando", "ora", "disponibil"],
        answer: "Il nostro supporto è disponibile dal lunedì al venerdì, dalle 9:00 alle 18:00. Per emergenze fuori orario, utilizza il sistema di ticket → Supporto.",
        quickReply: "Orari Assistenza",
        priority: 7
    },
    {
        keywords: ["contatt", "email", "telefono", "chiama", "scriv", "parlare", "numero", "assistenza", "supporto"],
        answer: "Puoi contattare il nostro supporto:\nEmail: logismart@brown-co.it\nTelefono: 01119700354\nIndirizzo: Via S.Quintino, 4 – 10121 Torino",
        quickReply: "Contatti",
        priority: 8
    },
    {
        keywords: ["funziona", "funzionalit", "caratteristic", "cosa fa", "a cosa serve", "piattaforma"],
        answer: "LogiSmart è una piattaforma completa per la gestione della flotta veicoli. Permette di:\n- Tracciare veicoli in tempo reale\n- Gestire trasferimenti e bisarche\n- Workflow danni e preconsegne\n- Report e analisi\n- Controllo costi\n- Localizzazione RFID",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["help", "aiuto", "non capisco", "come", "tutorial", "guida", "spiegaz"],
        answer: "Ti serve aiuto? Dimmi cosa vuoi fare e ti guiderò passo-passo. Oppure scegli un argomento:\n- Cerca Veicolo\n- Calendario Bisarche\n- Report\n- Piazzali\n- RFID\n- Workflow",
        quickReply: null,
        priority: 5
    },
    {
        keywords: ["problema", "errore", "bug", "non funziona", "non va", "bloccat"],
        answer: "Mi dispiace che tu stia riscontrando problemi. Per un supporto tecnico immediato:\n1. Fai uno screenshot dell'errore\n2. Invialo a logismart@brown-co.it\n3. Specifica cosa stavi facendo\n\nTi risponderemo entro 1 ora.",
        quickReply: null,
        priority: 10
    },

    // ─────────────────────────────────────────
    // HOME PAGE / DASHBOARD
    // ─────────────────────────────────────────
    {
        keywords: ["home", "homepage", "dashboard", "pannello", "principale"],
        answer: "Dalla Home Page puoi accedere a:\n- Veicoli in carrello (agenda trasferimenti per data, destinazione e origine)\n- Dashboard con analisi bisarche, KM, costi e saturazione piazzali\n- Accesso rapido a tutte le sezioni della piattaforma.",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["carrello", "aggiung", "carrello veicol"],
        answer: "Per aggiungere un veicolo al carrello:\n1. Vai su 'Cerca Veicolo'\n2. Inserisci i filtri di ricerca (marca, modello, ecc.)\n3. Metti il flag sul veicolo interessato\n4. Clicca 'Aggiungi Carrello'\n5. Inserisci luogo di arrivo, partenza e data\n\nLe richieste saranno visibili al Gestore logistica per l'approvazione.",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["saturazion", "bisarche", "analisi bisarche", "km bisarche"],
        answer: "Nella Dashboard trovi:\n- Analisi Saturazione Bisarche: grafico del livello di occupazione per periodo e tratta\n- Analisi KM Bisarche: informazioni sui km degli itinerari\n- Analisi Costi Viaggi: filtrabili per periodo\n- Analisi Motivo Trasporti: statistiche sulle motivazioni dei trasporti\n- Analisi Saturazione Piazzali: posizione veicoli taggati e abbinati via scanner.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["analisi", "grafico", "saturazion", "piazzal", "ubicazion", "sede contratto"],
        answer: "La Dashboard offre diverse analisi:\n- Saturazione Bisarche: per periodo e tratta\n- KM Bisarche: informazioni sugli itinerari\n- Costi Viaggi: filtrabili con range di date\n- Motivo Trasporti: statistiche motivazioni\n- Saturazione Piazzali: veicoli taggati e abbinati\n- Ubicazioni e Sedi Contratto: quante auto il concessionario ha in ogni sede.",
        quickReply: null,
        priority: 7
    },

    // ─────────────────────────────────────────
    // CERCA VEICOLO
    // ─────────────────────────────────────────
    {
        keywords: ["veicol", "auto", "camion", "macchina", "mezz", "flotta", "cerca", "ricerca", "trovare", "targa", "telaio"],
        answer: "Per cercare un veicolo:\n1. Vai su 'Viaggi' → 'Cerca Veicolo'\n2. Inserisci filtri (marca, modello, targa, telaio, ecc.)\n3. Per cercare più telai insieme, separali con il punto e virgola (;)\n4. Visualizza dettaglio, prenota viaggio, targa prova, carro attrezzi o aggiungi al carrello\n\nPuoi anche configurare le colonne di visualizzazione.",
        quickReply: null,
        priority: 9
    },
    {
        keywords: ["dettaglio veicolo", "binocolo", "scheda veicolo", "dati veicolo"],
        answer: "Per visualizzare il dettaglio di un veicolo:\n1. Cerca il veicolo nella sezione 'Cerca Veicolo'\n2. Clicca sul pulsante rosso con il 'binocolo'\n3. Accedi a tutti i dati del telaio, comprese le colonne eliminate\n\nQuesta funzione è resa possibile dall'integrazione con il gestionale del Dealer.",
        quickReply: null,
        priority: 7
    },

    // ─────────────────────────────────────────
    // TRASFERIMENTI / PRENOTAZIONI
    // ─────────────────────────────────────────
    {
        keywords: ["trasferim", "spostam", "moviment", "sposta", "prenota", "prenotaz", "viaggio", "viaggi"],
        answer: "Per prenotare un trasferimento:\n1. Vai su 'Cerca Veicolo'\n2. Clicca sul pulsante verde (calendario) accanto al veicolo\n3. Seleziona: ubicazione di arrivo, data del viaggio, motivazione, utente e venditore\n4. Clicca 'Cerca un viaggio disponibile'\n5. Conferma la prenotazione\n\nIl sistema cercherà tutti i viaggi compatibili (diretti o con fermata intermedia).",
        quickReply: null,
        priority: 9
    },
    {
        keywords: ["targa prova", "test drive", "prova"],
        answer: "Per prenotare una targa prova:\n1. Vai su 'Cerca Veicolo'\n2. Clicca sul pulsante blu (auto)\n3. Inserisci: fornitore, data richiesta, partenza, destinatario, arrivo e note\n4. La prenotazione apparirà nel 'Calendario Targa Prova'\n\nLo status è indicato con tre colori:\n- Rosso: solo data di richiesta\n- Giallo: data di conferma presente\n- Verde: completata",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["carro attrezzi", "soccorso stradale"],
        answer: "Per prenotare un carro attrezzi:\n1. Vai su 'Cerca Veicolo'\n2. Clicca sul pulsante giallo\n3. Inserisci: fornitore, data richiesta, partenza, destinatario, arrivo e note\n4. La prenotazione apparirà nel 'Calendario Carro Attrezzi'\n\nNota: non si fa riferimento a un viaggio pianificato, si indica solo data e orario di impegno.",
        quickReply: null,
        priority: 7
    },

    // ─────────────────────────────────────────
    // CALENDARIO BISARCHE
    // ─────────────────────────────────────────
    {
        keywords: ["calendario bisarche", "bisarca", "foglio viaggio", "bisarchista"],
        answer: "Nel Calendario Bisarche puoi:\n- Visualizzare i viaggi per range di date\n- Consultare: data, itinerario, tappe e veicoli prenotati\n- Cliccare sul veicolo per dettaglio o annullare il trasferimento\n- Bloccare un viaggio (impedisce ulteriori carichi)\n- Inserire costo consuntivo (totale o per tratta)\n- Scaricare il PDF del foglio viaggio per il bisarchista\n- Verificare i viaggi con 'Check viaggio' (giallo → verde)\n- Cambiare bisarca o data del viaggio",
        quickReply: null,
        priority: 9
    },
    {
        keywords: ["blocca viaggio", "blocca bisarca", "lucchetto"],
        answer: "Il pulsante 'Blocca' nel Calendario Bisarche consente di bloccare un viaggio, impedendo agli utenti di caricare ulteriori veicoli su quella bisarca.\nSolo il Gestore della logistica può utilizzare questa funzione.\nCliccando sull'icona del lucchetto grigio è anche possibile bloccare/sbloccare singole tratte.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["cambia bisarca", "cambia data", "sposta viaggio", "riassegna"],
        answer: "Nel Calendario Bisarche, nella sezione 'CAMBIO' trovi:\n- Icona 'Seleziona Bisarca': per scegliere la bisarca con più posti disponibili\n- Icona 'Calendario': per cambiare la data del viaggio\n\nCliccando su un veicolo puoi anche:\n- 'Annulla': rimuove il veicolo dal viaggio\n- 'Cambia': riassegna il veicolo a un viaggio diverso",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["scarica pdf", "foglio viaggio", "pdf viaggio", "scheda viaggio"],
        answer: "Per scaricare il foglio di viaggio in PDF:\n1. Vai su 'Calendario Bisarche'\n2. Trova il viaggio desiderato\n3. Clicca su 'Scarica PDF Viaggio'\n\nIl documento contiene tutte le informazioni dettagliate per il bisarchista, incluse le annotazioni inserite durante la prenotazione.",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["calendario targa", "targa prova calendario"],
        answer: "Nel Calendario Targa Prova puoi:\n- Visualizzare tutte le prenotazioni di targa prova\n- Cliccare sul binocolo per consultare i dettagli\n- Cliccare sulla matita per modificare la prenotazione\n\nStatus semaforo:\n- Rosso: solo data di richiesta\n- Giallo: data di conferma\n- Verde: completata",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["calendario carro", "carro attrezzi calendario"],
        answer: "Nel Calendario Carro Attrezzi puoi:\n- Visualizzare tutte le prenotazioni effettuate\n- Cliccare sul binocolo per i dettagli\n- Cliccare sulla matita per modificare la prenotazione\n\nIl carro attrezzi non utilizza viaggi pianificati: si indica solo data e orario di impegno.",
        quickReply: null,
        priority: 7
    },

    // ─────────────────────────────────────────
    // PIAZZALI
    // ─────────────────────────────────────────
    {
        keywords: ["piazzal", "mappa", "ubicaz", "posizion", "dove", "localizzaz", "parcheggio", "posto auto"],
        answer: "Nella sezione Piazzali puoi:\n- Anagrafica Piazzali: creare e gestire i piazzali (ognuno deve avere un'ubicazione associata)\n- Zone Piazzali: inserire e nominare le zone\n- Mappatura Piazzali: creare nuovi posti auto (anche dall'app LogiSmart)\n- Armadietti Chiavi: gestire gli armadietti\n\nNota: più piazzali possono far parte di un'unica ubicazione.",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["armadiett", "chiav", "armadietto chiavi"],
        answer: "Nella sezione 'Anagrafica Armadietti Chiavi' puoi inserire o modificare il nome degli armadietti cliccando sull'icona a forma di matita.",
        quickReply: null,
        priority: 5
    },
    {
        keywords: ["errore piazzale", "errore mappatura", "permesso piazzale", "accesso piazzale"],
        answer: "Se riscontri errori nella sezione Piazzali (dalla versione 1.7.16 in poi):\n1. Vai su 'Amministrazione' → 'Ruoli'\n2. Seleziona il ruolo da modificare (es. Venditore)\n3. Clicca sull'icona matita blu\n4. Vai su 'Accesso al menù Piazzali'\n5. Assicurati che tutte le voci siano spuntate\n\nGli errori riguardano: Anagrafica Piazzale, Zone, Mappatura, Armadietti e aggiornamento posto auto su Infinity.",
        quickReply: null,
        priority: 8
    },

    // ─────────────────────────────────────────
    // RFID / LOCALIZZAZIONE
    // ─────────────────────────────────────────
    {
        keywords: ["rfid", "tag", "lettore", "transponder", "chip", "scanner"],
        answer: "Il sistema RFID permette di tracciare automaticamente i veicoli.\nNella sezione 'Localizzazione RFID' trovi:\n- Posizione Veicoli: veicoli taggati e loro posizione (filtra per telaio, targa)\n- Inventario: elenco veicoli scannerizzati dall'app, con piazzale e data\n\nPuoi anche disabbinare un veicolo da un'etichetta selezionando il telaio e cliccando la 'x' rossa.",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["posizione veicoli", "veicolo taggato", "localizzazione veicolo", "dove si trova"],
        answer: "Per vedere la posizione di un veicolo:\n1. Vai su 'Localizzazione RFID' → 'Posizione Veicoli'\n2. Usa i filtri (telaio, targa) per trovare il veicolo\n3. Se le colonne 'Piazzale' e 'Posto Auto' sono valorizzate, clicca il pulsante viola 'Posizione'\n4. Per cercare su tutte le società, attiva l'opzione 'Cerca in tutte le società'",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["inventario rfid", "inventario scanner", "inventario veicoli"],
        answer: "L'Inventario RFID mostra l'elenco dei veicoli scannerizzati dall'app LOGISMART, con:\n- Piazzale di posizionamento\n- Operatore che ha effettuato la scansione\n- Data della scansione\n\nPuoi scaricare un file Excel con tutti i telai presenti.\nUsa il tasto 'nuvola' (Aggiorna Infinity) per cambiare l'ubicazione del veicolo dal rilevamento effettuato.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["disabbina", "disassociat", "rimuovi tag", "togli tag"],
        answer: "Per disabbinare un veicolo da un'etichetta RFID:\n1. Vai su 'Localizzazione RFID' → 'Posizione Veicoli'\n2. Usa i filtri per trovare il telaio\n3. Clicca sulla 'x' rossa nella riga corrispondente",
        quickReply: null,
        priority: 6
    },

    // ─────────────────────────────────────────
    // WORKFLOW / PRECONSEGNE
    // ─────────────────────────────────────────
    {
        keywords: ["preconsegn", "controllo", "verifica", "check", "ispezione", "workflow"],
        answer: "Il Workflow di LogiSmart permette di gestire le fasi di preparazione dei veicoli:\n- Gestione Processi: crea l'anagrafica dei processi di preconsegna\n- Gestione Fasi: configura le singole fasi (clicca 'Nuova Fase')\n- Gestione Preconsegne: monitora lo stato di ogni fase\n\nColori stato:\n- Verde: fase completata\n- Rosso: fase saltata (non obbligatoria)\n- Blu: fase ancora da completare",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["fase preconsegna", "stato fase", "fasi preparazione"],
        answer: "Per gestire le preconsegne:\n1. Vai su 'Workflow' → 'Gestione Preconsegne'\n2. Visualizza lo stato di ogni fase per telaio\n3. Clicca sul telaio per il dettaglio completo\n4. Usa i tre puntini blu per vedere lo status di ogni singola fase\n\nColori: Verde = completata | Rosso = saltata | Blu = da completare",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["processo predefinito", "processo default", "gestione processi"],
        answer: "Nella sezione 'Workflow' → 'Gestione Processi' puoi creare l'anagrafica dei processi.\nIl processo contrassegnato come 'Predefinito' viene attribuito automaticamente ai veicoli che non corrispondono a nessun altro processo creato in LogiSmart.",
        quickReply: null,
        priority: 6
    },

    // ─────────────────────────────────────────
    // ALLEGATI
    // ─────────────────────────────────────────
    {
        keywords: ["allegat", "immagin", "document", "foto", "upload", "carica file"],
        answer: "Per caricare allegati su un veicolo:\n1. Vai sulla sezione 'Allegati'\n2. Inserisci le informazioni del veicolo e clicca 'Avvia Ricerca'\n3. Per caricare immagini: clicca sull'icona verde\n4. Per caricare documenti: clicca sull'icona gialla",
        quickReply: null,
        priority: 6
    },

    // ─────────────────────────────────────────
    // REPORT
    // ─────────────────────────────────────────
    {
        keywords: ["report", "statistic", "dati", "analisi", "graf", "esporta"],
        answer: "I report disponibili in LogiSmart sono:\n- Veicoli in Partenza e Arrivo (PDF)\n- Motivi di Trasferimento\n- Tassi di Conversione\n- Costi Presa in Carico Veicoli\n- Discordanze Posizione/Ubicazione\n- Costi Workflow\n- Posizioni per Piazzale\n- Elenco Veicoli con Tag\n- Report Fornitori\n- Costi Viaggi\n- Cronologia Veicolo\n- Costi Targa Prova\n\nQuale report ti interessa?",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["report veicoli", "veicoli partenza", "veicoli arrivo", "in arrivo", "in uscita"],
        answer: "Il report 'Veicoli in Partenza e Arrivo':\n- Scarica un file PDF con tutti i veicoli in arrivo e in uscita (entrambe le direzioni)\n- È necessario selezionare un range di date e un'ubicazione\n- Vai su 'Report' → 'Veicoli in Partenza e Arrivo'",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["motivi trasferimento", "report motivi", "motivazione report"],
        answer: "Il report 'Motivi di Trasferimento' permette di scaricare:\n- Elenco dei motivi di trasferimento\n- Numero dei trasferimenti per ogni motivo\n\nÈ un report statistico. Seleziona un range di date per generarlo.",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["tasso conversione", "conversione report", "test drive contratti"],
        answer: "Il report 'Tassi di Conversione' mostra il rapporto tra spostamenti per test drive e contratti chiusi.\nSeleziona un range di date e la motivazione per generarlo.",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["presa in carico", "costo presa in carico", "costi veicoli"],
        answer: "Il report 'Costi Presa in Carico Veicoli':\n- Mostra i costi di presa in carico per ogni veicolo, abbinati alla società\n- Seleziona un range di date per generarlo\n\nPuoi configurare l'importo di presa in carico in 'Amministrazione' → 'Opzioni'.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["discordanz", "posizione errata", "ubicazione errata", "discrepanz"],
        answer: "Il report 'Discordanze Posizione/Ubicazione' mostra tutte le discrepanze tra la posizione reale dei veicoli e l'ubicazione registrata su Infinity.\nVai su 'Report' → 'Discordanze Posizione/Ubicazione'.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["costi workflow", "costo fasi", "report workflow"],
        answer: "Il report 'Costi Workflow' mostra il dettaglio dei costi di tutte le fasi completate.\nSeleziona un range di date per generare il report.",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["posizioni piazzale", "report piazzale", "confronto mappa"],
        answer: "Il report 'Posizioni per Piazzale' consente di generare un report per confrontare le posizioni su altri strumenti di mappe.\nSeleziona piazzale, zona o stato del parcheggio.",
        quickReply: null,
        priority: 5
    },
    {
        keywords: ["elenco veicoli tag", "veicoli taggati", "lista tag"],
        answer: "Nella sezione 'Report' → 'Elenco Veicoli con Tag' puoi scaricare l'elenco completo dei veicoli che hanno un tag RFID associato.",
        quickReply: null,
        priority: 5
    },
    {
        keywords: ["report fornitori", "fornitori report", "dettaglio fornitore"],
        answer: "Il report 'Report Fornitori' contiene:\n- Veicoli in arrivo e in uscita (entrambe le direzioni)\n- Dettagli sul fornitore\n\nVai su 'Report' → 'Report Fornitori'.",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["costi viaggi", "costo viaggio", "vettore", "costo per vettore"],
        answer: "Il report 'Costi Viaggi' permette l'estrazione dei costi dei viaggi per vettore.\nVai su 'Report' → 'Costi Viaggi'.",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["cronologia veicolo", "storico viaggio", "storia veicolo", "storico veicolo"],
        answer: "Il report 'Cronologia Veicolo' permette di verificare lo storico dei viaggi di un veicolo:\n1. Vai su 'Report' → 'Cronologia Veicolo'\n2. Clicca su 'Data Viaggi' e inserisci le date\n3. Clicca 'Applica'\n4. Clicca 'Scarica Report'\n\nIl file CSV contiene: Società, ID Veicolo, Telaio, Targa, Data Viaggio, Itinerario, Motivazione.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["costi targa prova", "report targa prova", "costo targa"],
        answer: "Il report 'Costi Targa Prova' consente di:\n- Cercare i trasferimenti di veicoli targa prova\n- Visualizzare i dettagli sui veicoli coinvolti e i costi associati\n\nFiltri disponibili: 'Data Richiesta Trasferimento' e 'Fornitore'.",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["costi", "prezzo", "prezz", "tariff", "fattur", "spesa", "budget"],
        answer: "I report costi disponibili sono:\n- Report Costi Viaggi (per vettore)\n- Report Costi Targa Prova\n- Report Costi Workflow\n- Report Costi Presa in Carico Veicoli\n\nPuoi esportare tutti i dati in Excel o PDF.",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["esporta", "excel", "csv", "pdf", "download", "scarica"],
        answer: "Puoi esportare i dati in Excel o PDF da qualsiasi tabella. Cerca il pulsante 'Esporta' in alto a destra nelle schermate dei report.\n\nPer il report 'Veicoli in Partenza e Arrivo', le colonne extra sono attivabili solo nel file CSV (nel PDF le colonne principali sono preimpostate).",
        quickReply: null,
        priority: 5
    },

    // ─────────────────────────────────────────
    // AMMINISTRAZIONE
    // ─────────────────────────────────────────
    {
        keywords: ["utent", "permess", "ruol", "accesso", "login", "password", "credenzial", "amministrazion"],
        answer: "Per gestire utenti e ruoli:\n1. Vai su 'Amministrazione' → 'Gestione Utenti' (o 'Gestione Ruoli')\n2. Clicca 'Nuovo' per aggiungere\n3. Assegna ruolo, fornitore e preferenze (posizione, negozio, marca)\n4. Attiva le caselle: Attivo, Ricevi e-mail trasferimento, Ricevi e-mail RFID\n\nRuoli predefiniti: Amministratore, Gestore, Venditore, Logistica, Sola lettura.\nSolo gli amministratori possono modificare i ruoli.",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["gestione ruoli", "permessi utente", "macroaree", "configura permessi"],
        answer: "Nella sezione 'Gestione Ruoli' puoi definire i permessi per ogni ruolo.\nLe macroaree selezionabili sono:\n- Accesso al menu Amministrazione\n- Accesso al menu Configurazione\n- Accesso al menu Report\n- Accesso al menu Geolocalizzazione\n\nPer ogni area puoi specificare le cartelle accessibili.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["opzioni", "limitazioni orari", "prenotazione orari", "caparra", "importo minimo"],
        answer: "Nella sezione 'Amministrazione' → 'Gestione Opzioni' puoi:\n- Impostare limitazioni orarie e giornaliere per le prenotazioni di viaggi\n- Configurare l'importo minimo della caparra contabilizzata (per spostamenti di vetture vendute)\n- Inserire l'importo di presa in carico per ogni veicolo",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["status veicoli", "stato veicolo", "da ordinare", "assegnato", "stock", "venduto"],
        answer: "Nella sezione 'Status Veicoli' (Amministrazione → Opzioni) puoi configurare gli stati dei veicoli da mostrare nella ricerca.\n\nDi default vengono mostrati:\n- Da ordinare\n- Assegnato\n- Stock\n- Venduto\n\nAttiva 'Considera status da opzioni' in Viaggi → Cerca Veicolo per usare stati personalizzati.",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["server posta", "smtp", "email server", "notifiche email", "configurazione email"],
        answer: "Per configurare il server di posta (necessario per ricevere notifiche):\nModifica il file 'application-config.ini' nella cartella d'installazione con i parametri:\n- EmailUseSMTP\n- EmailSMTP (server SMTP)\n- EmailUsername e EmailPassword\n- EmailFrom e EmailFromName\n- EmailPort e EmailSecProtocol (es. ssl, tls)\n\nPer verificare: collegati a http://[nomedominiologistica]/TestMail/Send",
        quickReply: null,
        priority: 6
    },

    // ─────────────────────────────────────────
    // CONFIGURAZIONE
    // ─────────────────────────────────────────
    {
        keywords: ["configurazion", "impostaz", "setup"],
        answer: "Le sezioni di Configurazione in LogiSmart:\n- Veicoli Personalizzati\n- Veicoli Agenzia\n- Motivi Trasferimento\n- Colonne Ricerca Veicoli\n- Ubicazioni\n- Itinerari\n- Bisarche\n- Impegno Veicoli\n- Tariffario Fornitori\n- Pianificazione Viaggi\n- Giorni Vietati\n- Anagrafica Fornitori\n- Anagrafica Autisti\n- Dati Aggiuntivi Veicolo\n\nDi quale vuoi saperne di più?",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["veicoli personalizzati", "veicolo personalizzato", "nuovo veicolo", "aggiung veicolo"],
        answer: "La sezione 'Configurazione' → 'Veicoli Personalizzati' permette di aggiungere veicoli non presenti sul DMS (e quindi non caricabili da Infinity).\nClicca su 'Nuovo Veicolo' in alto a destra. È possibile creare veicoli personalizzati per le diverse aziende.",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["veicoli agenzia", "veicolo agenzia", "agenzia"],
        answer: "Nella sezione 'Configurazione' → 'Veicoli Agenzia' è possibile aggiungere e gestire i veicoli agenzia.",
        quickReply: null,
        priority: 5
    },
    {
        keywords: ["motivi trasferimento", "motivazione trasferimento", "colore trasferimento"],
        answer: "Nella sezione 'Configurazione' → 'Motivi Trasferimento' puoi inserire le motivazioni per cui avviene un trasferimento.\nAd ogni motivo puoi associare un colore, per distinguere facilmente le tipologie di veicoli nel Calendario Bisarche.",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["colonne ricerca", "configura colonne", "visualizzazione colonne"],
        answer: "Nella sezione 'Configurazione' → 'Colonne Ricerca Veicoli' puoi personalizzare le colonne mostrate nei risultati di ricerca.\nNon ci sono limiti al numero di colonne, ma su dispositivi mobili potrebbero non essere tutte visibili.",
        quickReply: null,
        priority: 5
    },
    {
        keywords: ["ubicazion", "crea ubicazione", "nuova ubicazione", "sede"],
        answer: "Nella sezione 'Configurazione' → 'Ubicazioni' puoi creare tutte le ubicazioni.\nOgni ubicazione:\n- Deve avere un ID Ubicazione (codice alfanumerico obbligatorio per Infinity)\n- Va associata alle sedi commerciali della Società\n- Può avere email per notifiche di prenotazione/annullamento viaggi\n- Può essere collegata a più ubicazioni Infinity di database diversi (stessa ubicazione fisica)",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["itinerari", "itinerario", "tratta", "percorso", "crea itinerario"],
        answer: "Nella sezione 'Configurazione' → 'Itinerari' puoi creare percorsi tra le ubicazioni.\nOgni itinerario richiede:\n- Nome (es. TORINO-CATANIA)\n- Selezione delle tratte (da Ubicazioni)\n- Orario di arrivo e partenza\n- Opzioni Carico/Scarico\n\nIl Gestore può inserire fino a 19 tratte per itinerario. Le tappe possono essere opzionali.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["bisarche configuraz", "configura bisarca", "capacità bisarca", "nuova bisarca"],
        answer: "Nella sezione 'Configurazione' → 'Bisarche' puoi configurare le bisarche disponibili.\nDati richiesti:\n- Nome bisarca (targa)\n- Capacità (piano 1 e piano 2)\n- Fornitore\n- Tipologia: carro attrezzi monoposto, bisarca o targa prova",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["impegno veicoli", "spazio bisarca", "occupazione bisarca"],
        answer: "Nella sezione 'Configurazione' → 'Impegno Veicoli' classifchi i veicoli in base allo spazio che occupano su una bisarca.\nPer ogni veicolo inserisci: stato (Nuovo/Usato), marca, modello e impegno (da 0,5 a 4).\nDefault: 1. Per veicoli commerciali a tetto alto: impegno 4.",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["tariffario", "piani tariffari", "costo tratta", "costo totale viaggio"],
        answer: "Nella sezione 'Configurazione' → 'Tariffario Fornitori' puoi inserire piani tariffari abbinabili per Itinerario e Bisarca:\n- Costo totale del viaggio\n- Costo delle singole tratte (il costo sarà la somma delle tratte percorse dal veicolo)",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["pianificazione viaggi", "viaggi ripetitivi", "pianifica viaggio", "crea viaggio"],
        answer: "Nella sezione 'Configurazione' → 'Pianificazione Viaggi' puoi creare nuovi viaggi usando Itinerario e Bisarca già configurati.\nÈ possibile pianificare viaggi ripetitivi selezionando i giorni della settimana e il periodo di validità.\nOgni pianificazione o eliminazione viene notificata via email a chi ha effettuato l'operazione.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["giorni vietati", "festività", "blocca giorno", "giorni bloccati"],
        answer: "Nella sezione 'Configurazione' → 'Giorni Vietati' puoi inserire giorni in cui non è possibile programmare trasferimenti (festività, limitazioni al traffico, ecc.).\nSe esistono già viaggi pianificati in quelle date, verranno automaticamente annullati e gli utenti notificati via email.",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["fornitor", "corriere", "trasportator", "autista", "bisarca", "anagrafica fornitori"],
        answer: "Gestisci i fornitori in 'Configurazione' → 'Anagrafica Fornitori'.\nCampi necessari:\n- Ragione sociale\n- Indirizzo e località\n- Telefono ed email\n- ID fornitore (codice DMS)\n\nPuoi anche configurare autisti in 'Anagrafica Autisti' (Codice, nome, cellulare, email).",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["autisti", "autista", "anagrafica autista"],
        answer: "Nella sezione 'Configurazione' → 'Anagrafica Autisti' puoi aggiungere i dati degli autisti:\n- Codice\n- Nome\n- Cellulare\n- Email",
        quickReply: null,
        priority: 5
    },
    {
        keywords: ["dati aggiuntivi", "informazioni extra veicolo", "campo extra"],
        answer: "Nella sezione 'Configurazione' → 'Anagrafica Dati Aggiuntivi Veicolo' puoi aggiungere informazioni extra specifiche per ogni veicolo.",
        quickReply: null,
        priority: 5
    },

    // ─────────────────────────────────────────
    // NOTIFICHE
    // ─────────────────────────────────────────
    {
        keywords: ["notifica", "alert", "avviso", "sms", "comunicaz"],
        answer: "Le notifiche email vengono inviate automaticamente per:\n- Trasferimenti confermati/annullati (se 'Ricevi e-mail di trasferimento' è attivo)\n- Corrispondenze RFID (se 'Ricevi e-mail corrispondenza RFID' è attivo)\n- Pianificazione/eliminazione di viaggi\n- Annullamento viaggi per giorni vietati\n\nConfigura le preferenze in 'Amministrazione' → 'Gestione Utenti'.",
        quickReply: null,
        priority: 6
    },

    // ─────────────────────────────────────────
    // BATTERIA / ELETTRICI
    // ─────────────────────────────────────────
    {
        keywords: ["batteria", "carica", "elettric", "autonomia"],
        answer: "Per i veicoli elettrici, gestisci lo stato batteria in:\n- Workflow Batteria\n- Workflow Batteria Calendario\n- Anagrafica Processi Batteria\n\nMonitora il livello di carica e pianifica le ricariche.",
        quickReply: null,
        priority: 7
    },

    // ─────────────────────────────────────────
    // CALENDARI
    // ─────────────────────────────────────────
    {
        keywords: ["calendario", "pianifica", "agenda", "programma", "scadenz"],
        answer: "I calendari disponibili in LogiSmart:\n- Calendario Bisarche: prenotazioni e viaggi bisarche\n- Calendario Targa Prova: prenotazioni targa prova\n- Calendario Carro Attrezzi: prenotazioni carro attrezzi\n- Workflow Calendario: scadenze workflow\n- Workflow Batteria Calendario: ricariche veicoli elettrici\n\nQuale calendario ti serve?",
        quickReply: null,
        priority: 7
    },

    // ─────────────────────────────────────────
    // EASTER EGG (invariati)
    // ─────────────────────────────────────────
    {
        keywords: ["chi ti ha creato"],
        answer: "Mio papà è Giovanni Esposito",
        quickReply: null,
        priority: 1
    },
    {
        keywords: ["che squadra tifi"],
        answer: "Forza Torino",
        quickReply: null,
        priority: 1
    },
];

// Messaggio di default quando il bot non capisce
const defaultMessage = "Mi dispiace, non ho capito la tua domanda.\n\nProva a chiedere informazioni su:\n- Cerca Veicolo e Trasferimenti\n- Calendario Bisarche / Targa Prova / Carro Attrezzi\n- Piazzali e Mappatura\n- Localizzazione RFID\n- Report e Statistiche\n- Workflow e Preconsegne\n- Utenti, Ruoli e Configurazione\n\nOppure contatta il supporto: logismart@brown-co.it";

// Messaggi di benvenuto (ne viene scelto uno a caso)
const welcomeMessages = [
    "Ciao! Come posso aiutarti oggi?",
    "Benvenuto! Hai domande? Sono qui per aiutarti!",
    "Ciao! Chiedimi qualsiasi cosa, sarò felice di aiutarti!"
];
