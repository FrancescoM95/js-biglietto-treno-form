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

});