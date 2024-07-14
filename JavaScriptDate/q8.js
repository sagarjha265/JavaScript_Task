function mostFrequent(arr) {
    const frequency = {};
    let maxFreq = 0;
    let mostFrequentItem = null;

    for (const item of arr) {
        frequency[item] = (frequency[item] || 0) + 1;

        if (frequency[item] > maxFreq) {
            maxFreq = frequency[item];
            mostFrequentItem = item;
        }
    }
    return `${mostFrequentItem} (${maxFreq} times)`;
}

// Sample array
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(mostFrequent(arr1)); // Output: "a (5 times)"
