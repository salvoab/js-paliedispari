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
    if(pariDispari != null)
    {
        pariDispari = pariDispari.toLocaleLowerCase();
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
var keepAsking = true;
while(keepAsking){
    var numeroUtente = prompt("Scegli un numero intero compreso fra 1 e 5");
    if(numeroUtente != null)
    {
        numeroUtente = parseInt(numeroUtente);
    }
        
    if(isNaN(numeroUtente) || numeroUtente <1 || numeroUtente > 5 ){
        keepAsking = true;
        alert("ATTENZIONE! Puoi inserire solo un numero intero compreso fra 1 e 5");
    } else{
        keepAsking = false;
    }
}
console.log("Hai scelto il numero: " + numeroUtente);
