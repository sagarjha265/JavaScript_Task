function countLetterOccurrences(str, letter) {
    let count = 0;
    
    for (let char of str) {
        if (char === letter) {
            count++;
        }
    }
    
    return count;
}

// Example usage:
const sampleString = 'w3resource.com';
const letterToCount = 'o';
const occurrences = countLetterOccurrences(sampleString, letterToCount);

console.log(occurrences); // Output: 2
