function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var storeNum = "";
    var tempResult = [];
    for (var i = 1; i <= angka; i++) {
        var angkaBagi = angka / i;
        if (angka % i == 0) {
            storeNum += i;
            storeNum += angkaBagi;
            tempResult.push(storeNum);
            storeNum = '';
        }
    }
    var sortTemp = tempResult.sort(function(a, b) { return a - b });
    var result = sortTemp[0].length;
    return result;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2