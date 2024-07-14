function countVowels(str) {
    const regex = /[aeiou]/gi;
    const matches = str.match(regex);
    return matches ? matches.length : 0;
}

// Test
console.log(countVowels('United States')); // 4
