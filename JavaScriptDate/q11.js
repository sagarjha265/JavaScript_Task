function sumOfSquares(arr) {
    return arr.reduce((sum, num) => sum + Math.pow(num, 2), 0);
}

// Sample Data
var numbers = [1, 2, 3, 4];
console.log(sumOfSquares(numbers)); // Output: 30 (1^2 + 2^2 + 3^2 + 4^2)
