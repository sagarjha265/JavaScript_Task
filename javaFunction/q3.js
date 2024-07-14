function generateCombinations(str) {
    let result = [];

    // Recursive function to generate combinations
    function generate(prefix, remaining) {
        // Add current prefix to results
        result.push(prefix);

        // Loop through remaining characters
        for (let i = 0; i < remaining.length; i++) {
            // Generate combinations starting from current character
            generate(prefix + remaining[i], remaining.slice(i + 1));
        }
    }

    // Start generating combinations
    generate('', str);

    return result;
}

// Example usage:
let input = 'dog';
let combinations = generateCombinations(input);

console.log(`Input string: ${input}`);
console.log(`Combinations: ${combinations.join(', ')}`);
