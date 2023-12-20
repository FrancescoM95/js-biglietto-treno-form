console.log('JS OK');


//* INITIAL VARIABLES
// FORM ELEMENTS
const nameField = document.getElementById('name');
const kmsField = document.getElementById('kms');
const ageField = document.getElementById('age');

// BUTTONS
const generate = document.getElementById('generate');
const reset = document.getElementById('reset');
const buyButton = document.getElementById('buy-button');

// TICKETS ELEMENTS
const ticketSection = document.getElementById('ticket-section');
const passengerElement = document.getElementById('passenger-name');
const rateElement = document.getElementById('rate');
const wagonElement = document.getElementById('wagon');
const cpnumberElement = document.getElementById('cpnumber');
const totalElement = document.getElementById('total');

// INITIAL VARIABLES
const pricePerKm = 0.21;
let rateName = 'Tariffa Standard';

//* MAIN LOGICS

generate.addEventListener('click', function () {
    // PRENDO INFORMAZIONI PRESENTI NEGLI INPUT AL CLICK DEL BOTTONE
    const nameValue = nameField.value.trim();
    const kmsValue = parseInt(kmsField.value);
    const ageValue = ageField.value;

    console.log('name:', nameValue, 'km:', kmsValue, 'age:', ageValue);

    // CALCOLO IL PREZZO BASE
    let price = pricePerKm * kmsValue;

    // VERIFICO SE È NECESSARIO APPLICARE UNO SCONTO
    if (ageValue === 'under') {
        rateName = 'Tariffa junior';
        price *= 0.8;
    } else if (ageValue === 'over') {
        rateName = 'Tariffa senior';
        price *= 0.6;
    }

    console.log('prezzo:', price.toFixed(2), rateName);

    // RANDOMIZZO CARROZZA
    const wagon = Math.floor(Math.random() * 15) + 1;
    console.log('carrozza:', wagon);

    // RANDOMIZZO CPNUMBER
    const cpn = Math.floor(Math.random() * (100000 - 80000)) + 80000;
    console.log('codice cp:', cpn);

    // MONTO I DATI NEL BIGLIETTO
    passengerElement.innerText = nameValue;
    rateElement.innerText = rateName;
    wagonElement.innerText = wagon
    cpnumberElement.innerText = cpn
    totalElement.innerText = '€' + price.toFixed(2);

    // MOSTRO IL BIGLIETTO

    ticketSection.classList.remove('d-none');
});