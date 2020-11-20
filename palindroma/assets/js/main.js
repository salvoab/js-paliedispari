/*******************************************************************
* Chiedere all’utente di inserire una parola
* Creare una funzione per capire se la parola inserita è palindroma
********************************************************************/


function isPalindrome(word){
    var leftIndex = 0, rightIndex = word.length - 1;
    var keepChecking = true;
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
console.log( isPalindrome("osso") );
console.log( isPalindrome("oro") );
console.log( isPalindrome("orso") );
console.log( isPalindrome("corso") );
console.log( isPalindrome("kayak") );


