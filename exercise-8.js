function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    /* detail char code javascript bisa dilihat disini: 
    https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes */
    var result = '';
    for (i = 0; i < kalimat.length; i++) {
        if (kalimat.charCodeAt(i) >= 65 && kalimat.charCodeAt(i) <= 90) {
            //65 itu char code untuk huruf a, 90 char code untuk huruf z, jadi 65-90 itu a-z
            result += kalimat.charAt(i).toLowerCase();
        } else {
            result += kalimat.charAt(i).toUpperCase();
        }
    }
    return result;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"