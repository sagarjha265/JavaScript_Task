function last(arr, n = 1) {
    if (n <= 0) return [];
    return arr.slice(-n);
}

// Test Data
console.log(last([7, 9, 0, -2])); // Output: -2
console.log(last([7, 9, 0, -2], 3)); // Output: [9, 0, -2]
console.log(last([7, 9, 0, -2], 6)); // Output: [7, 9, 0, -2]
