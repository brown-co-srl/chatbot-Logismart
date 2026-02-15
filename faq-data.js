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
    {
        keywords: ["tifi"],
        answer: "Torino",
        quickReply: null,
        priority: 1
    },
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
        answer: "Il nostro servizio di assistenza è disponibile dal lunedì al venerdì, dalle 9:00 alle 18:00. Per emergenze fuori orario, utilizza il sistema di ticket visitando la sezione Supporto.",
        quickReply: "Orari Assistenza",
        priority: 7
    },
    {
        keywords: ["contatt", "email", "telefono", "chiama", "scriv", "parlare", "numero", "assistenza", "supporto"],
        answer: "Puoi contattare il nostro supporto:\nEmail: logismart@brown-co.it\nTelefono: 01119700354\nIndirizzo: Via S.Quintino,4 10121 Torino",
        quickReply: "Contatti",
        priority: 8
    },
    {
        keywords: ["veicol", "auto", "camion", "macchina", "mezz", "flotta", "cerca", "ricerca", "trovare"],
        answer: "Per cercare un veicolo nella piattaforma:\n1. Clicca su 'Cerca un veicolo' nel menu in alto\n2. Inserisci targa, telaio o altri filtri\n3. Visualizza la posizione e lo storico\n\nHai bisogno di aiuto con la ricerca?",
        quickReply: null,
        priority: 9
    },
    {
        keywords: ["trasferim", "spostam", "moviment", "sposta", "prenota", "prenotaz"],
        answer: "Per prenotare un trasferimento:\n1. Vai su 'Prenota Trasferimento' nel menu\n2. Seleziona veicolo di origine e destinazione\n3. Scegli data e fornitore\n4. Conferma la prenotazione\n\nVuoi che ti guidi passo-passo?",
        quickReply: null,
        priority: 9
    },
    {
        keywords: ["piazzal", "mappa", "ubicaz", "posizion", "dove", "localizzaz"],
        answer: "Puoi visualizzare i piazzali e le posizioni dei veicoli nella sezione 'Mappatura Piazzali'. La mappa mostra in tempo reale dove si trovano tutti i mezzi.",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["report", "statistic", "dati", "analisi", "graf", "esporta"],
        answer: "Abbiamo diversi report disponibili:\nReport Trasferimenti\nReport Costi\nReport Conversione\nReport Veicoli\n\nQuale report ti interessa?",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["rfid", "tag", "lettore", "transponder", "chip"],
        answer: "Il sistema RFID permette di tracciare automaticamente i veicoli. Trovi i report RFID nella sezione 'Report' → 'Abbinamenti RFID' e 'Discordanze RFID'.",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["dann", "danneggiat", "incidente", "sinistro", "riparaz", "carrozzeria"],
        answer: "Per gestire i veicoli danneggiati:\n1. Vai su 'Veicoli Danneggiati'\n2. Registra il danno con foto\n3. Avvia il workflow di riparazione\n4. Monitora lo stato nella sezione 'Workflow Danni'",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["preconsegn", "controllo", "verifica", "check", "ispezione"],
        answer: "Le preconsegne permettono di verificare lo stato dei veicoli prima della consegna. Configura i controlli nella sezione 'Anagrafica Preconsegne'.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["utent", "permess", "ruol", "accesso", "login", "password", "credenzial"],
        answer: "Per gestire utenti e permessi:\n1. Vai su 'Utenti' nel menu\n2. Aggiungi/modifica utente\n3. Assegna ruoli e permessi\n\nSolo gli amministratori possono modificare i ruoli.",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["fornitor", "corriere", "trasportator", "autista", "bisarca"],
        answer: "Gestisci i fornitori nella sezione 'Anagrafica Fornitori'. Puoi:\n- Aggiungere nuovi fornitori\n- Configurare tariffari\n- Visualizzare report prestazioni\n- Assegnare autisti",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["costi", "prezzo", "prezz", "tariff", "fattur", "spesa", "budget"],
        answer: "I report costi sono disponibili in:\nReport Costi (generale)\nReport Costi Viaggi\nReport Costi Targa Prova\nReport Costi Workflow\n\nPuoi esportare tutti i dati in Excel.",
        quickReply: null,
        priority: 8
    },
    {
        keywords: ["notifica", "alert", "avviso", "email", "sms", "comunicaz"],
        answer: "Le notifiche vengono inviate automaticamente per:\n- Trasferimenti completati\n- Veicoli danneggiati\n- Scadenze workflow\n- Anomalie RFID\n\nConfigura le preferenze in 'Opzioni' → 'Notifiche'.",
        quickReply: null,
        priority: 6
    },
    {
        keywords: ["esporta", "excel", "csv", "pdf", "download", "scarica"],
        answer: "Puoi esportare i dati in Excel o PDF da qualsiasi tabella. Cerca il pulsante 'Esporta' in alto a destra nelle schermate dei report.",
        quickReply: null,
        priority: 5
    },
    {
        keywords: ["batteria", "carica", "elettric", "autonomia"],
        answer: "Per i veicoli elettrici, gestisci lo stato batteria in:\n- Workflow Batteria\n- Workflow Batteria Calendario\n- Anagrafica Processi Batteria\n\nMonitora livello carica e pianifica le ricariche.",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["calendario", "pianifica", "agenda", "programma", "scadenz"],
        answer: "Hai diversi calendari disponibili:\nCalendario Bisarche\nCalendario Targa Prova\nWorkflow Calendario\nWorkflow Batteria Calendario\n\nQuale calendario ti serve?",
        quickReply: null,
        priority: 7
    },
    {
        keywords: ["help", "aiuto", "non capisco", "come", "tutorial", "guida", "spiegaz"],
        answer: "Ti serve aiuto? Dimmi cosa vuoi fare e ti guiderò passo-passo. Oppure scegli un argomento dai pulsanti qui sotto.",
        quickReply: null,
        priority: 5
    },
    {
        keywords: ["problema", "errore", "bug", "non funziona", "non va", "bloccat"],
        answer: "Mi dispiace che tu stia riscontrando problemi. Per un supporto tecnico immediato:\n1. Fai uno screenshot dell'errore\n2. Invialo a logismart@brown-co.it\n3. Specifica cosa stavi facendo\n\nTi risponderemo entro 1 ora.",
        quickReply: null,
        priority: 10
    },
    {
        keywords: ["funziona", "funzionalit", "caratteristic", "cosa fa", "a cosa serve"],
        answer: "LogiSmart è una piattaforma completa per la gestione della flotta veicoli. Permette di:\nTracciare veicoli in tempo reale\nGestire trasferimenti\nWorkflow danni e manutenzioni\nReport e analisi\nControllo costi.",
        quickReply: null,
        priority: 6
    }
];

// Messaggio di default quando il bot non capisce
const defaultMessage = "Mi dispiace, non ho capito la tua domanda.\n\nProva a chiedere informazioni su:\n- Veicoli e trasferimenti\n- Report e statistiche\n- Danni e workflow\n- Utenti e permessi\n- Supporto tecnico\n\nOppure contatta il supporto: support@logismart.com";

// Messaggi di benvenuto (ne viene scelto uno a caso)
const welcomeMessages = [
    "Ciao! Come posso aiutarti oggi?",
    "Benvenuto! Hai domande? Sono qui per aiutarti!",
    "Ciao! Chiedimi qualsiasi cosa, sarò felice di aiutarti!"
];
