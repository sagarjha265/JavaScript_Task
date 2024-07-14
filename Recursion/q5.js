function exponent(base, exp) {
    if (exp < 0) {
        return 1 / exponent(base, -exp); // Handle negative exponent
    }
    if (exp === 0) {
        return 1; // Base case: anything to the power of 0 is 1
    }
    return base * exponent(base, exp - 1); // Recursive case
}

// Example usage:
console.log(exponent(8, 2)); // Output: 64
