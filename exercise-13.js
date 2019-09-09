function deepSum(arr) {
    // Code disini
    if (arr == '') {
        return `No number`;
    }

    var sum = 0;

    for (var i = 0; i < arr.length; i++) { // iterate array, better to use for loop since it have higher performance
        if (typeof arr[i] == 'object') { // checking array element is an array
            sum += deepSum(arr[i]); // if array then getting sum it's element (recursion)
        } else {
            sum += arr[i]; // else adding the value with sum
        }
    }
    return sum; // returning the result
}

//TEST CASE
console.log(deepSum([
    [
        [4, 5, 6],
        [9, 1, 2, 10],
        [9, 4, 3]
    ],
    [
        [4, 14, 31],
        [9, 10, 18, 12, 20],
        [1, 4, 90]
    ],
    [
        [2, 5, 10],
        [3, 4, 5],
        [2, 4, 5, 10]
    ]
])); // 316

console.log(deepSum([
    [
        [20, 10],
        [15],
        [1, 1]
    ],
    [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        [2],
        [9, 11]
    ],
    [
        [3, 5, 1],
        [1, 5, 3],
        [1]
    ],
    [
        [2]
    ]
])); // 156

console.log(deepSum([])); // No number