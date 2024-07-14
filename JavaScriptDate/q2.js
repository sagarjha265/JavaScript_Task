function array_Clone(arr) {
    return Array.isArray(arr) ? arr.slice() : [];
}

// Test Data
console.log(array_Clone([1, 2, 4, 0])); // Output: [1, 2, 4, 0]
console.log(array_Clone([1, 2, [4, 0]])); // Output: [1, 2, [4, 0]]
