/*
    COS'E' UN'OGGETTO E COME COSTRUIRLO.
*/
/*
    RAGGRUTTPANO UN'INSIEME DI VARIABILI E DI FUNZIONI PER CREARE UN MODELLO DI UN'ENTITA' PRESENTE NEL MONDO REALE.
    NEGLI OGGETTI LE VARIABILI VENGONO CHIAMATE PROPRIETA'.
    NEGLI OGGETTI LE FUNZIONI VENGONO CHIAMATE METODI.
*/
//ES:
var hotel = {
    //proprietà
    name: 'hotel',
    rooms: 40,
    booked: 25,
    gym: true,
    swimmingpool: false,
    typeRooms: ['single', 'double'],
    //metodi
    aviableCheck: function() {
        return this.rooms - this.booked;
    }
}

//ES 2:
var auto = {
    productor: ['ford', 'BMW', 'Abarth'],
    maxSpeed: 150,
    fuel: ['diesel', 'benzina'],
    posti: 5,
    capFuel: 20, //liters,
    marce: 5,
    CCMotor: 990,
    radioFR: '',

    GetRadioFR: function() {
        radioFR = '152.2kH';
        return 'Radio freq is: ' + radioFR;
    },

    GetPR: function() {
        var PR;
        if (productor == 'ford') {
            PR = 'Ford';
        } else if (productor == 'BMW') {
            PR = 'BMW';
        } else if (productor == 'Abarth') {
            PR = 'Abarth';
        }
        return 'The PR is: ' + PR;
    }
}