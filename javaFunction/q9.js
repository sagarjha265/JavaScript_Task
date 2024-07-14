function isPrime(num) {
    // Check if the number is less than 2
    if (num <= 1) return false;
    
    // Check for factors from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // Found a factor, so it's not prime
        }
    }
    
    return true; // No factors found, so it's prime
}

// Example usage:
console.log(isPrime(5)); // true
console.log(isPrime(4));  // false
console.log(isPrime(1));  // false
console.log(isPrime(17)); // true
