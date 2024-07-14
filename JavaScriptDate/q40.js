function array_range(start, length) {
    return Array.from({ length }, (_, index) => start + index);
}

// Test Data
console.log(array_range(1, 4)); // [1, 2, 3, 4]
console.log(array_range(-6, 4)); // [-6, -5, -4, -3]
