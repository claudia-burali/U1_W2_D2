/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let x = 3;
let y = 5;
if (x < y) {
  console.log("Il numero più grande è", y);
} else if (x > y) {
  console.log("Il numero più grande è", x);
} else {
  console.log("I numeri sono uguali");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let n = 2
if (n!==5) {console.log('not equal')}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let z = 35

/*if (z===0) {console.log('error')}
else if (z%5===0) {console.log('z è divisibile per 5')} soluzione alternativa*/

if (z!==0 && z%5===0) {console.log('z è divisibile per 5')}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/*let n1 = 4
let n2 = 4
if (n1===8 || n2===8) {console.log("uno dei numeri è 8")}
if 


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 100
const shipping = 10
if (totalShoppingCart >= 50) {console.log('Hai ottenuto la spedizione gratuita! Il totale da pagare è', totalShoppingCart)}
else  {console.log('Il totale da pagare è', totalShoppingCart+shipping )}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
let cart = totalShoppingCart- (totalShoppingCart/5)
if (cart >= 50) {console.log('Hai ottenuto la spedizione gratuita! Il totale da pagare è', cart)}
else  {console.log('Il totale da pagare è', cart+shipping )}


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/*let r = 4
let t = 6
let h = 7
if (r<t && t<h) {console.log('Ecco i numeri in ordine decrescente', h, t, r)}
else if (r>t && t<h) {console.log('Ecco i numeri in ordine decrescente', r, t, h)}
else if (r>t && t>h) {console.log('Ecco i numeri in ordine decrescente', r, h, t)}
else if (r<t && t>h) {console.log('Ecco i numeri in ordine decrescente', r, h, t)}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let box = false
console.log ('box è una variabile di tipo', typeof box)

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let number = 10
if (number!==0 && number%2===0) {console.log(number, 'è pari')} 
else if (number!==0 && number%2!==0) {console.log(number, 'è dispari')} 
else {console.log('error')} 

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7
if (val < 5) {
    console.log("Meno di 5");
  } else if (val < 10) {
    console.log("Meno di 10");
  } else {
    console.log("Uguale a 10 o maggiore");
  }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto"

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop()
console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const numeri = []
numeri.splice(0,0,1,2,3,4,5,6,7,8,9,10)
console.log(numeri)


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

numeri.splice(9,1,100)
console.log(numeri)

