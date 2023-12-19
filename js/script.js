console.log('JS OK');


//* INITIAL VARIABLES
// 
const distance = document.getElementById('distance');
let kms;
const userAge = document.getElementById('userAge');
let age;
const button = document.getElementById('button');
const pricePerKm = 0.21;
let discount = null;
const total = document.getElementById('total');
const range = document.getElementById('range');
const wagon = document.getElementById('wagon');
let min = 20
let mid = 11111
let max = 99999
const cpnumber = document.getElementById('cpnumber');



//* MAIN LOGICS

distance.focus();

// PRENDO INFORMAZIONI PRESENTI NEGLI INPUT AL CLICK DEL BOTTONE
button.addEventListener('click', function () {
    kms = parseInt(distance.value);
    age = parseInt(userAge.value);
    console.log('km', kms, 'age', age);

    //! VALIDATION 

    if (isNaN(age) || isNaN(kms) || age <= 0 || kms <= 0) {
        alert('Inserisci un numero maggiore o uguale a 1.')
        location.reload();
    }

    // CALCOLO IL PREZZO BASE
    const basePrice = (kms * pricePerKm).toFixed(2);
    let finalPrice = basePrice;

    // VERIFICO SE È NECESSARIO APPLICARE UNO SCONTO
    if (age < 18) discount = 20;
    else if (age > 65) discount = 40;

    // SE C'È UNO SCONTO LO APPLICO AL PREZZO FINALE
    if (discount) {
        finalPrice -= (finalPrice / 100) * discount;
    }

    // MOSTRO IN PAGINA IL MESSAGGIO CON IL PREZZO FINALE 
    console.log('prezzo base €', basePrice, 'sconto %', discount, 'prezzo finale €', finalPrice.toFixed(2));
    total.innerText = finalPrice.toFixed(2) + '€';
    wagon.innerText = Math.floor(Math.random() * min) + 1;
    cpnumber.innerText = Math.floor(Math.random() * (max + 1 - mid)) + mid;

    distance.value = '';
    userAge.value = '';
    distance.focus();
});