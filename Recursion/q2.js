function gcd(a, b) {
    // Base case: if b is 0, gcd is a
    if (b === 0) {
        return a;
    }
    // Recursive case: gcd(a, b) = gcd(b, a % b)
    return gcd(b, a % b);
}

// Example usage:
console.log(gcd(48, 18)); // Output: 6
console.log(gcd(56, 98)); // Output: 14
