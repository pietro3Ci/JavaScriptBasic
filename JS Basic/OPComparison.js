/*
    OPEARATORI DI CONFRONTO:
        --VALUTARE LE CONDIZIONI.
*/

//ESISTONO VARI OPERATORI, ALCUNI SIMILI TRA LORO.

/*VERANNO MSTRATI IN UN COSTRUTTO IF*/
var x;
var y;

function Maggiore(x, y) {
    if (x > y) {
        return true;
    } else {
        return false;
    }
}
//OPERATORE '>' MAGGIORE: 
//CONTROLLA SE IL NUMERO DI DESTRA è MAGGIORE DEL NUMERO DI SINISTRA.
//STESSO CONCETTO PER IL '<' MINORE.

function Equal(x, y) {
    if (x == y) {
        return true;
    } else {
        return false;
    }
}
//OPERATORE '==' "EQUIVALE" o "E' UGUALE A". 
//CONFRONTA DUE VALORI (NUMERI, STRINGHE, BOOLEANI) PER VEDERE SE SONO UGUALI.

function DisEqaul(x, y) {
    if (x != y) {
        return true;
    } else {
        return false;
    }
}
//OPERATORE '!=' "DIVERSO" o "NON E' UGUALE A".
//CONFRONTA DUE VALORI (NUMERI, STRINGHE, BOOLEANI) PER VEDERE SE NON SONO UGUALI.

function EqualType(x, y) {
    if (x === y) {
        return true;
    } else {
        return false;
    }
}
//OPERATORE '===' "STRETTAMENTE UGUALE A".
//CONFRONTA DUE VALORI PER VERIFICARE CHE SIANO DELLO STESSO TIPO ED UGUALI.
//ES: '3' === 3 -> return false;
//Es: '3' === '3' -> return true;

function DisEqaulType(x, y) {
    if (x !== y) {
        return true;
    } else {
        return false;
    }
}
//OPERATORE '!==' "NON E' STRETTAMENTE UGUALE A".
//CONFRONTA DUE VALORI PER VERIFICARE CHE NON SIANO DELLO STESSO TIPO E NENCHE UGUALI.
//ES: '3' !== 3 -> return true;
//Es: '3' !== '3' -> return false;

function MaxEqual(x, y) {
    if (x >= y) {
        return true;
    } else {
        return false;
    }
}
//OPERATORE '>=' "MAGGIORE O UGUALE A".
//CONTROLLA SE IL NUMERO DI SINISTRA E' MAGGIORE O UGUALE AD NUMERO DI DESTRA.
/*  
    ES: 4 >= 3 -> return true; 
    ES: 3 >= 4 -> return false;
    ES: 3 >= 3 -> return true;
*/

function MinEqual(x, y) {
    if (x <= y) {
        return true;
    } else {
        return false;
    }
}
//OPERATORE '<=' "MINORE O UGUALE A".
//CONTROLLA SE IL NUMERO DI SINISTRA E' MINORE O UGUALE AD NUMERO DI DESTRA.
/*  
    ES: 4 <= 3 -> return false; 
    ES: 3 <= 4 -> return true;
    ES: 3 <= 3 -> return true;
*/