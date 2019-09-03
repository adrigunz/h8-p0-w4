function cariModus(arr) {
    // you can only write your code here!
    var mf = 1; //default maximum frequency
    var count = 0; //counter
    var item; //to store item with maximum frequency
    for (var i = 0; i < arr.length; i++) //select element (current element)
    {
        for (var j = i; j < arr.length; j++) //loop through next elements in array to compare calculate frequency of current element
        {
            if (arr[i] == arr[j]) { //see if element occurs again in the array
                count++; //increment counter if it does
            }

            if (mf < count) //compare current items frequency with maximum frequency
            {
                mf = count; //if m>mf store m in mf for upcoming elements
                item = arr[i]; // store the current element.
            }

            if (mf == 1) { // if all occurence equals, returns -1
                item = -1;
            }

            if (mf == arr.length) { // if all element in array are same number, returns -1
                item = -1;
            }
        }
        count = 0; // make counter 0 for next element.
    }
    return item;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1