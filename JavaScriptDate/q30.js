function mergeArrays(array1, array2) {
    return Array.from(new Set([...array1, ...array2]));
}

// Example usage
var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
console.log(mergeArrays(array1, array2)); // [1, 2, 3, 30]
