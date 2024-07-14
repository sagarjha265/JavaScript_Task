function sortArray(arr) {
    return arr.sort((a, b) => a - b).join(',');
}

// Sample array
var arr1 = [3, 8, 7, 6, 5, -4, 3, 2, 1];
console.log(sortArray(arr1)); // Output: "-4,1,2,3,3,5,6,7,8"
