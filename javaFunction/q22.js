function getCombinations(arr, subsetLength) {
    const result = [];

    function generateCombinations(currentCombination, start) {
        if (currentCombination.length === subsetLength) {
            result.push([...currentCombination]);
            return;
        }
        
        for (let i = start; i < arr.length; i++) {
            currentCombination.push(arr[i]);
            generateCombinations(currentCombination, i + 1);
            currentCombination.pop(); // backtrack
        }
    }

    generateCombinations([], 0);
    return result;
}

// Example usage:
const sampleArray = [1, 2, 3];
const subsetLength = 2;
const combinations = getCombinations(sampleArray, subsetLength);

console.log(combinations); 
// Output: [[1, 2], [1, 3], [2, 3]]
