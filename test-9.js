function checkAB(num) {
    // you can only write your code here!
    if (num.split('a').pop().split('b')[0].length == 3 || num.split('b').pop().split('a')[0].length == 3) {
        return true;
    }

    for (var i = 0; i < num.length; i++) {
        if (num[i] == 'b') {
            if (num[i + 4] === 'a') {
                return true;
            }
        }
    }
    return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false