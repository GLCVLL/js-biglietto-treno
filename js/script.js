console.log('JS OK');

// 0. RECUPERO ELEMENTO DAL DOM

const element = document.getElementById('ticket-price');
console.log(element);

//PREZZO PER KM

let kmPrice = 0.21;

// MESSAGGIO PER L'UTENTE

const priceMessage = 'Il costo del tuo biglietto è: €'

// EVENTUALE SCONTO

let discount = null

// CHIEDIAMO KM DA PERCORRERE E ANNI ALL'UTENTE

const userKm = parseInt(prompt('quanti km vuoi percorrere?'));
const userAge = parseInt(prompt('quanti anni hai?'));

console.log(userKm);
console.log(userAge);

// ! VALIDAZIONE

if (isNaN(userKm) || isNaN(userAge) || userAge<=0 || userKm <=0){

}

// CALCOLO PREZZO BIGLIETTO IN BASE AI KM

const price = kmPrice * userKm;
console.log(price);

// INSERISCO IL PREZZO NELL'ELEMENTO

element.innerText = priceMessage + price.toFixed(2);

// CALCOLO SCONTO

if(userAge >= 65) discount = 40;
else if(userAge <= 18) discount = 20;

if (discount){
    const discountElement = document.getElementById('discount-message');

    const discountMessage = `Hai ricevuto uno sconto del <strong>${discount}%</strong>`;

    discountElement.innerHTML = discountMessage;

    price -= (price / 100) * discount;
} 

element.innerText = priceMessage + price.toFixed(2);

