/*
    PRENDERE LE DECISIONI
    VALU  TARE LE CONDIZIONI: ISTRUZIONI CONDIZIONALI
*/
//ES:
var score;
if (score > 50) {
    document.write('Promosso!');
} else {
    document.write('Riprova...');
}
//SINTASSI IF:
/*
    if(condizione){
        <istruzioni se condizione == true>
    }
    else{
        <sitruzioni se condizione == false>
    }
*/
//POSSIAMO FARE ANCHE DEGLI IF ANNIDATI
var punti;
var tempo;
if (punti > 50) {
    if (tempo < 20) {
        document.write('Ottimo!');
    } else if (tempo >= 20 && tempo < 50) {
        document.write('buono!');
    }
} else {
    if (tempo >= 50) {
        document.write('Discreto!');
    } else {
        document.write('Insufficente!');
    }
}
//COME AVETE NOTATO POSSIAMO CREARE QUESTA STRUTTURA
//CHIAMATA AD IF ANNIDATI

//NEL CODICE VI SONO PRESENTI <riga 27> degli operatori di confronto
//che verranno analizzati nel file apposito OPComparison.js