function truncate(str, wordCount) {
    const words = str.split(' ');
    return words.slice(0, wordCount).join(' ');
}

// Test Data
console.log(truncate('The quick brown fox jumps over the lazy dog', 4)); // "The quick brown fox"
