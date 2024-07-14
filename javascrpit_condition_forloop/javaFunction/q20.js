function getElementsLargerThan(arr, number) {
    return arr.filter(element => element > number);
}

// Example usage:
const array = [1, 5, 8, 12, 3, 7, 14];
const threshold = 7;
const result = getElementsLargerThan(array, threshold);

console.log(result); // Output: [8, 12, 14]
