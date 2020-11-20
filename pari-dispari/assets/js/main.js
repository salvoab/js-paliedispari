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
console.log(getRondomIntegerMinMax(1,5));