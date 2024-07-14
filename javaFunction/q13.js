function computeFactors(n) {
    if (n <= 0) {
        return []; // Return an empty array for non-positive integers
    }

    const factors = [];
    
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            factors.push(i);
        }
    }
    
    return factors;
}

// Example usage:
const number = 12;
const factorsOfNumber = computeFactors(number);
console.log(factorsOfNumber); // Output: [1, 2, 3, 4, 6, 12]
