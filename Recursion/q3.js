function range(x, y) {
    const result = [];
    
    // Ensure x is less than y
    if (x >= y) {
        return result; // Return empty array if range is invalid
    }
    
    for (let i = x + 1; i < y; i++) {
        result.push(i);
    }
    
    return result;
}

// Example usage:
console.log(range(2, 9)); // Output: [3, 4, 5, 6, 7, 8]
