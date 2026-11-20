/**
 * LOGISMART - ASSISTENTE (motore di ricerca intelligente)
 *
 * AAA - assistente (20/11/2026)
 * Capisce domande scritte in modi diversi senza modelli di intelligenza artificiale, WebAssembly o file binari:
 * e' solo JavaScript leggibile, cosi' nessun antivirus ha niente da segnalare e funziona su qualsiasi PC,
 * anche senza internet. Le risposte restano quelle scritte e verificate in faq-data.js (non inventa nulla).
 *
 * Come capisce:
 *   - sinonimi del mondo LogiSmart (macchina/vettura/auto = veicolo, camion/mezzo = bisarca, etichetta = tag...)
 *   - radici delle parole (sposto, spostare, spostato -> spost)
 *   - errori di battitura (prenotazinoe -> prenotazione)
 *   - peso delle parole: le parole rare e specifiche contano piu' di quelle comuni (BM25)
 *   - campo facoltativo 'domande' delle schede: frasi come le scrivono gli utenti
 *   - se due schede sono vicine propone "Forse intendevi"
 * Si carica da GitHub (aggiornamenti per tutti i clienti con internet) o dalla copia locale in js/chatbot/.
 */
(function () {
    'use strict';

    var AI = window.LogiSmartAI || {};
    window.LogiSmartAI = AI;

    AI.versione = '2.0.0';
    AI.stato = 'spento'; // spento | pronto | non_disponibile
    AI.motivo = '';

    // Soglie (calibrate sulle domande di prova): sotto 'minimo' la domanda non e' capita;
    // se la seconda scheda ha almeno 'dubbio' del punteggio della prima si propone "Forse intendevi".
    AI.soglie = { minimo: 2.2, sicura: 6, copertura: 0.34, dubbio: 0.85, alternative: 3 };

    // ---------------------------------------------------------------------------------------------
    // Lingua
    // ---------------------------------------------------------------------------------------------
    var PAROLE_VUOTE = ('a ad al allo ai agli all alla alle anche ancora avere avete abbiamo ha hai ho hanno c ce che chi ci col come con ' +
        'cosa cose cui da dal dallo dai dagli dall dalla dalle de del dello dei degli dell della delle devo deve devi dobbiamo dovrei ' +
        'di e ed era essere fa fare faccio gli ha i il in io la le lei li lo loro lui ma me mi mia mie mio miei ne nei negli nel nello ' +
        'nell nella nelle no noi non o od per perche piu po poi posso puo puoi qua qual quale quali quando quanto quel quella quelle ' +
        'quelli quello questa queste questi questo qui se sei si sia siamo sono sta stai sto su sua sue sui sul sullo sull sulla ' +
        'sulle suo suoi ti tra tu tua tue tuo tuoi tutta tutte tutti tutto un una uno vi voglio vorrei vuole vuoi ok salve grazie ' +
        'qualcosa qualcuno ogni gia sempre mai stato stata stati state viene vengono serve servono bisogna allora cioe dove ecco').split(' ');
    var VUOTE = {};
    PAROLE_VUOTE.forEach(function (p) { VUOTE[p] = true; });
    // 'non' e 'dove' contano per capire i problemi e le domande di posizione: non vanno tolte
    delete VUOTE['non']; delete VUOTE['dove'];

    // Sinonimi: ogni parola (gia' senza accenti) diventa il concetto di riferimento
    var SINONIMI = {
        veicolo: 'macchina macchine auto automobile automobili vettura vetture veicoli mezzo_cliente furgone furgoni moto',
        bisarca: 'camion camionista bisarche autotreno autotreni tir mezzo mezzi trasportatore_mezzo carrellone',
        tag: 'etichetta etichette tags rfid transponder adesivo badge',
        targa: 'targhe',
        telaio: 'vin telai',
        piazzale: 'piazzali deposito_auto parcheggi parcheggio parcheggiata parcheggiato parcheggiare',
        posto: 'posti stallo stalli',
        viaggio: 'viaggi trasporto trasporti spedizione spedizioni spedire giro corsa',
        trasferimento: 'trasferimenti trasferire spostamento_veicolo',
        prenotare: 'prenoto prenota prenotazione prenotazioni prenotato prenotata prenotati riservare',
        annullare: 'annullo annulla annullato annullata annullamento cancellare cancello cancella cancellato cancellata togliere tolgo togli tolto tolta rimuovere rimuovo eliminare elimino elimina',
        spostare: 'sposto sposta spostato spostata spostamento anticipare anticipo posticipare posticipo rimandare tirare portare porto',
        data: 'giorno giorni date domani ieri oggi venerdi lunedi martedi mercoledi giovedi sabato',
        domenica: 'domeniche festivo festivi festa feste ferie',
        utente: 'utenti collega colleghi operatore operatori account',
        password: 'psw pwd parola_chiave credenziali',
        accedere: 'entrare entro login loggare accesso accedo collegarmi',
        email: 'mail email posta e_mail',
        stampare: 'stampa stampo stampo pdf documento documenti',
        costo: 'costi spesa spese speso prezzo prezzi tariffa tariffe soldi euro',
        rotto: 'rotta guasto guasta guasti panne fermo',
        danno: 'danni graffio graffi ammaccatura bozza bozzo avaria avarie danneggiata danneggiato carrozzeria',
        chiave: 'chiavi chiavetta',
        uscito: 'uscita usciti uscite venduto venduta vendute venduti consegnato consegnata',
        errore: 'errori problema problemi bug blocca bloccato non_funziona',
        menu: 'voce voci pulsante tasto',
        sede: 'sedi ubicazione ubicazioni filiale concessionaria',
        report: 'reportistica estrazione estrazioni elenco lista statistiche',
        app: 'telefono cellulare smartphone tablet applicazione',
        assistenza: 'supporto helpdesk aiuto',
        creare: 'creo crea creato creata aggiungere aggiungo aggiungi aggiunto aggiunta inserire inserisco inserisci inserito inserimento registrare registro',
        cronologia: 'storico storia movimenti spostamenti_veicolo',
        vedere: 'vedo vedi visualizzare visualizzo trovare trovo cercare cerco',
        modificare: 'modifico modifica cambiare cambio cambia correggere correggo',
        infinity: 'gestionale dms',
        priorita: 'precedenza urgente urgenza urgenti prima_degli',
        orario: 'ora orari quando_arriva',
        tappa: 'tappe fermata fermate sosta',
        abbinare: 'abbina abbino abbinato abbinata abbinamento associare associo',
        disabbinare: 'disabbina disabbino disabbinato disabbinata disabbinamento staccato staccata',
        sbagliato: 'sbagliata sbagliati sbagliate errato errata per_errore per_sbaglio sbaglio'
    };
    var MAPPA = {};
    Object.keys(SINONIMI).forEach(function (c) {
        MAPPA[c] = c;
        SINONIMI[c].split(' ').forEach(function (s) { if (s) MAPPA[s.replace(/_/g, ' ')] = c; });
    });

    function normalizza(t) {
        return String(t || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
            .replace(/<[^>]+>/g, ' ').replace(/[^a-z0-9]+/g, ' ').trim();
    }

    // Radice semplice per l'italiano: toglie le desinenze piu' comuni lasciando almeno 4 lettere
    var DESINENZE = ['amente', 'azione', 'azioni', 'izione', 'izioni', 'mento', 'menti', 'abile', 'ibile', 'ando', 'endo',
        'ato', 'ata', 'ati', 'ate', 'uto', 'uta', 'uti', 'ute', 'ito', 'ita', 'iti', 'ite', 'are', 'ere', 'ire', 'ano', 'ono',
        'iamo', 'ate', 'ete', 'ite', 'ere', 'a', 'e', 'i', 'o'];
    function radice1(p) {
        for (var i = 0; i < DESINENZE.length; i++) {
            var d = DESINENZE[i];
            if (p.length - d.length >= 4 && p.slice(-d.length) === d) return p.slice(0, -d.length);
        }
        return p;
    }
    // due passaggi: abbinamento -> abbina -> abbin, come abbinare -> abbin
    function radice(p) {
        if (p.length <= 4 || /^[0-9]+$/.test(p)) return p;
        return radice1(radice1(p));
    }

    // Testo -> elenco di radici (sinonimi applicati, parole vuote tolte)
    function termini(testo) {
        var parole = normalizza(testo).split(' ');
        var out = [];
        for (var i = 0; i < parole.length; i++) {
            var p = parole[i];
            if (!p) continue;
            // sinonimi di due parole (es. "non funziona")
            var due = i + 1 < parole.length ? p + ' ' + parole[i + 1] : '';
            if (due && MAPPA[due]) { out.push(MAPPA[due]); i++; continue; }
            if (VUOTE[p]) continue;
            if (p.length < 2) continue;
            out.push(MAPPA[p] || radice(p));
        }
        return out;
    }

    function levenshtein(a, b, max) {
        if (Math.abs(a.length - b.length) > max) return max + 1;
        var prec = [], j;
        for (j = 0; j <= b.length; j++) prec[j] = j;
        for (var i = 1; i <= a.length; i++) {
            var cor = [i], minRiga = i;
            for (j = 1; j <= b.length; j++) {
                cor[j] = Math.min(prec[j] + 1, cor[j - 1] + 1, prec[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
                if (cor[j] < minRiga) minRiga = cor[j];
            }
            if (minRiga > max) return max + 1;
            prec = cor;
        }
        return prec[b.length];
    }

    // ---------------------------------------------------------------------------------------------
    // Indice delle schede
    // ---------------------------------------------------------------------------------------------
    // Campi e pesi: le parole chiave e le domande scritte come gli utenti valgono piu' del testo della risposta
    var CAMPI = [{ nome: 'k', peso: 2.2 }, { nome: 'd', peso: 2.2 }, { nome: 'a', peso: 0.7 }];
    var K1 = 1.2, B = 0.6;
    var schede = [];       // per scheda: { k: {termine: freq}, d: {...}, a: {...}, len: {k, d, a}, frasi: [...] }
    var df = {};           // in quante schede compare ogni termine
    var lunghezzaMedia = { k: 1, d: 1, a: 1 };
    var vocabolario = [];  // termini conosciuti (per correggere gli errori di battitura)

    function conta(lista) { var c = {}; lista.forEach(function (t) { c[t] = (c[t] || 0) + 1; }); return c; }

    AI.indicizza = function (faqData) {
        schede = []; df = {};
        var tot = { k: 0, d: 0, a: 0 };
        faqData.forEach(function (faq) {
            var k = [], frasi = [];
            (faq.keywords || []).forEach(function (kw) { var t = termini(kw); k = k.concat(t); if (t.length > 1) frasi.push(t.join(' ')); });
            var d = [], frasiD = [];
            (faq.domande || []).forEach(function (q) { var t = termini(q); d = d.concat(t); if (t.length >= 3) frasiD.push(t); });
            var a = termini(faq.answer);
            var s = { k: conta(k), d: conta(d), a: conta(a), len: { k: k.length, d: d.length, a: a.length }, frasi: frasi, frasiD: frasiD };
            schede.push(s);
            tot.k += k.length; tot.d += d.length; tot.a += a.length;
            var visti = {};
            k.concat(d, a).forEach(function (t) { if (!visti[t]) { visti[t] = true; df[t] = (df[t] || 0) + 1; } });
        });
        var n = Math.max(1, faqData.length);
        lunghezzaMedia = { k: Math.max(1, tot.k / n), d: Math.max(1, tot.d / n), a: Math.max(1, tot.a / n) };
        vocabolario = Object.keys(df);
    };

    function idf(t) { var n = schede.length, f = df[t] || 0; return Math.log(1 + (n - f + 0.5) / (f + 0.5)); }

    // Parola sconosciuta (errore di battitura): si usa quella conosciuta piu' vicina
    function correggi(t) {
        if (df[t] || t.length < 5) return t;
        var max = t.length >= 8 ? 2 : 1, migliore = t, dist = max + 1;
        for (var i = 0; i < vocabolario.length; i++) {
            var v = vocabolario[i];
            if (Math.abs(v.length - t.length) > max || v[0] !== t[0]) continue;
            var x = levenshtein(t, v, max);
            if (x < dist) { dist = x; migliore = v; }
        }
        return migliore;
    }

    AI.avvia = function (faqData) {
        try {
            if (!faqData || !faqData.length) throw new Error('FAQ non caricate');
            AI.indicizza(faqData);
            AI.stato = 'pronto';
        } catch (e) {
            AI.stato = 'non_disponibile';
            AI.motivo = (e && e.message) ? e.message : String(e);
        }
        return Promise.resolve(AI.stato === 'pronto');
    };

    /**
     * Cerca la scheda migliore.
     * Restituisce { risultati: [{indice, punteggio}], capito: bool, sicuro: bool } oppure null se non pronto.
     */
    AI.cerca = function (domanda, faqData) {
        if (AI.stato !== 'pronto') return Promise.resolve(null);
        var q = termini(domanda).map(correggi);
        var unici = q.filter(function (t, i) { return q.indexOf(t) === i; });
        if (!unici.length) return Promise.resolve({ risultati: [], capito: false, sicuro: false });
        var frase = unici.join(' ');
        var risultati = schede.map(function (s, i) {
            var p = 0, trovati = 0;
            unici.forEach(function (t) {
                var w = idf(t), presente = false;
                CAMPI.forEach(function (c) {
                    var f = s[c.nome][t];
                    if (!f) return;
                    presente = true;
                    var norm = f * (K1 + 1) / (f + K1 * (1 - B + B * s.len[c.nome] / lunghezzaMedia[c.nome]));
                    p += c.peso * w * norm;
                });
                if (presente) trovati++;
            });
            // parole chiave di piu' parole presenti per intero nella domanda: segnale forte
            s.frasi.forEach(function (f) { if ((' ' + frase + ' ').indexOf(' ' + f + ' ') >= 0) p += 1.5; });
            // messaggio della piattaforma incollato: una 'domanda' della scheda contenuta per intero nella domanda
            var tutta = ' ' + q.join(' ') + ' ';
            s.frasiD.forEach(function (f) { if (tutta.indexOf(' ' + f.join(' ') + ' ') >= 0) p += Math.min(8, 1.2 * f.length); });
            p += ((faqData[i].priority || 5) - 5) * 0.05;
            return { indice: i, punteggio: p, copertura: trovati / unici.length };
        }).sort(function (a, b) { return b.punteggio - a.punteggio; });
        var primo = risultati[0], secondo = risultati[1] || { punteggio: 0 };
        // capita se il punteggio e' alto, oppure discreto e con buona parte delle parole della domanda trovate
        var capito = !!primo && (primo.punteggio >= AI.soglie.sicura || (primo.punteggio >= AI.soglie.minimo && primo.copertura >= AI.soglie.copertura));
        var alternative = risultati.slice(1, 1 + AI.soglie.alternative)
            .filter(function (r) { return r.punteggio >= AI.soglie.minimo && r.punteggio >= primo.punteggio * 0.6; })
            .map(function (r) { return r.indice; });
        return Promise.resolve({
            risultati: risultati.slice(0, 5),
            alternative: alternative,
            capito: capito,
            sicuro: capito && secondo.punteggio < primo.punteggio * AI.soglie.dubbio
        });
    };

    // Titolo breve di una scheda per i pulsanti "Forse intendevi"
    AI.titolo = function (faq) {
        if (faq.titolo) return faq.titolo;
        if (faq.quickReply) return faq.quickReply;
        var k = (faq.keywords || [])[0] || '';
        return k ? k.charAt(0).toUpperCase() + k.slice(1) : normalizza(faq.answer).substring(0, 40);
    };

    AI.supportato = function () { return true; };
    AI._test = { termini: termini, radice: radice, correggi: correggi };
})();
