/*******************************************************************
* Chiedere all’utente di inserire una parola
* Creare una funzione per capire se la parola inserita è palindroma
********************************************************************/


function isPalindrome(word){
    var leftIndex = 0, rightIndex = word.length - 1;
    var keepChecking = true;
    word = word.toLowerCase();
    while(leftIndex <= rightIndex && keepChecking){
        if(word[leftIndex] === word[rightIndex]){
            keepChecking = true;
            leftIndex++;
            rightIndex--;
        } else {
            keepChecking = false;
        }
    }

    if( leftIndex > rightIndex ){
        return true;
    }
    return false;
}

//Test
// console.log( isPalindrome("osso") );  //true
// console.log( isPalindrome("oro") );   //true
// console.log( isPalindrome("orso") );  //false
// console.log( isPalindrome("corso") ); //false
// console.log( isPalindrome("kayak") ); //true
// console.log( isPalindrome("e") );     //true Ho scelto che una singola lettera sia da considerare palindroma
// console.log( isPalindrome("KaYak") ); //true Ho scelto che per la funzione non faccia differenza fra caratteri minuscoli e maiuscoli


do{
    var parola = prompt("Inserisci una parola e ti dirò se è palindroma");
} while(parola == null);

if(isPalindrome(parola)){
    console.log("La parola " + parola + " è palindroma");
} else{
    console.log("La parola " + parola + " NON è palindroma");
}