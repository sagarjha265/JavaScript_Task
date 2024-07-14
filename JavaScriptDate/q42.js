function rangeBetwee(start, end) {
    const result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}

// Test Data
console.log(rangeBetwee(4, 7)); // [4, 5, 6, 7]
console.log(rangeBetwee(-4, 7)); // [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
