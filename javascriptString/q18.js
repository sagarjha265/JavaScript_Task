function count(str, substring, caseSensitive = true) {
    const flags = caseSensitive ? 'g' : 'gi';
    const regex = new RegExp(substring, flags);
    const matches = str.match(regex);
    return matches ? matches.length : 0;
}

// Test Data
console.log(count("The quick brown fox jumps over the lazy dog", 'the')); // 2
console.log(count("The quick brown fox jumps over the lazy dog", 'fox', false)); // 1
