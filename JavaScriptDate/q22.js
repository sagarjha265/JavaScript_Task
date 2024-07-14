function union(array1, array2) {
    return Array.from(new Set([...array1, ...array2]));
}

// Example usage
console.log(union([1, 2, 3], [100, 2, 1, 10])); // [1, 2, 3, 100, 10]
