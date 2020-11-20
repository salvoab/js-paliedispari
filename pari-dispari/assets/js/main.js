/************************************************************************************
* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
* Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
* Sommiamo i due numeri
* Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
* Dichiariamo chi ha vinto.
*************************************************************************************/

/**
 * Generates a random integer number between a minimum and a maximum number (both included).
 * 
 * @param {number} min  minimum random number.
 * @param {number} max  maximum random number.
 * @return {number}     random number between min and max
 */
function getRondomIntegerMinMax(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//test
//console.log(getRondomIntegerMinMax(1,5));

/**
 * Check if the number is even or odd.
 * 
 * @param {number} number number to check.
 * @return {boolean}      true if number is even, false otherwise.
 */
function isEven(number){
    return number % 2 === 0;
}

//test
// console.log(isEven(4)); //true
// console.log(isEven(9)); //false

//Controllo sull'input della stringa pari o dispari
var keepAsking = true;
while(keepAsking){
    var pariDispari = prompt("Scegli pari o dispari");
    if(pariDispari != null) {
        pariDispari = pariDispari.toLowerCase();
    }
        
    if(pariDispari != "pari" && pariDispari != "dispari"){
        keepAsking = true;
        alert("ATTENZIONE! Puoi inserire solo pari o dispari");
    } else{
        keepAsking = false;
    }
}
console.log("Hai scelto: " + pariDispari);

//Controllo sull'input del numero fra 1 e 5
keepAsking = true;
while(keepAsking){
    var numeroUtente = prompt("Scegli un numero intero compreso fra 1 e 5 (estremi inclusi)");
    if(numeroUtente != null) {
        numeroUtente = parseInt(numeroUtente);
    }
        
    if(isNaN(numeroUtente) || numeroUtente <1 || numeroUtente > 5 ){
        keepAsking = true;
        alert("ATTENZIONE! Puoi inserire solo un numero intero compreso fra 1 e 5 (estremi inclusi)");
    } else{
        keepAsking = false;
    }
}
console.log("Hai scelto il numero: " + numeroUtente);

var numeroPc = getRondomIntegerMinMax(1,5);
console.log("Il PC ha estratto il numero: " + numeroPc);
var somma = numeroUtente + numeroPc;
console.log("La somma dei due numeri vale: " + somma);
//Indico chi ha vinto
if(isEven(somma)){
    if(pariDispari == "pari"){
        console.log("La somma è un numero pari e tu hai scelto pari quindi: HAI VINTO!");
    } else{
        console.log("La somma è un numero pari e tu hai scelto dispari quindi: HAI PERSO!");
    }
} else {
    if(pariDispari == "dispari"){
        console.log("La somma è un numero dispari e tu hai scelto dispari quindi: HAI VINTO!");
    } else {
        console.log("La somma è un numero dispari e tu hai scelto pari quindi: HAI PERSO!");
    }
}