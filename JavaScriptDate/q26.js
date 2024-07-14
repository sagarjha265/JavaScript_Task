function findPairWithSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [i, j]; // Return the indices of the pair
            }
        }
    }
    return null; // Return null if no pair found
}

// Example usage
const numbers = [10, 20, 10, 40, 50, 60, 70];
const target = 50;
console.log(findPairWithSum(numbers, target)); // [3, 4]
