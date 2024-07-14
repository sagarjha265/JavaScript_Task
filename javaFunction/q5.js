function capitalizeFirstLetterOfEachWord(str) {
    return str
        .split(' ') // Split the string into an array of words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
        .join(' '); // Join the words back into a single string
}

// Example usage
const inputString = 'the quick brown fox';
const outputString = capitalizeFirstLetterOfEachWord(inputString);
console.log(outputString); // Output: 'The Quick Brown Fox'
