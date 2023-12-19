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
const priceMessage = 'Il totale del tuo biglietto è: €';


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
        finalPrice -= ((finalPrice / 100) * discount).toFixed(2);
    }

    // MOSTRO IN PAGINA IL MESSAGGIO CON IL PREZZO FINALE 
    total.innerText = priceMessage + finalPrice;
    console.log('prezzo base €', basePrice, 'sconto %', discount, 'prezzo finale €', finalPrice);
    distance.value = '';
    userAge.value = '';
});