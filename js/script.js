console.log('JS OK');


//* INITIAL VARIABLES

const kms = document.getElementById('kms');
const age = document.getElementById('age');
const button = document.getElementById('button');
const total = document.getElementById('total');
const priceMessage = 'Il totale del tuo biglietto è: €';
const pricePerKm = 0.21;
let discount = null;


//* MAIN LOGICS

button.addEventListener('click', function () {
    const distance = kms.value;
});

