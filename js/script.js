console.log('JS OK');

// 0. RECUPERO ELEMENTO DAL DOM

const element = document.getElementById('ticket-price');
console.log(element);

let kmPrice = 0.21;

// CHIEDIAMO KM DA PERCORRERE E ANNI ALL'UTENTE

const userKm = parseInt(prompt('quanti km vuoi percorrere?', '500'));
const userAge = parseInt(prompt('quanti anni hai?', '18'));

console.log(userKm);
console.log(userAge);

// CALCOLO PREZZO BIGLIETTO IN BASE AI KM

const ticketKm = kmPrice * userKm + '€';
console.log(ticketKm);