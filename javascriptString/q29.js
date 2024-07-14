function search_word(str, word) {
    const regex = new RegExp(word, 'gi');
    const matches = str.match(regex);
    const count = matches ? matches.length : 0;
    return `'${word}' was found ${count} times.`;
}

// Test Data
console.log(search_word('The quick brown fox', 'fox')); // "'fox' was found 1 times."
console.log(search_word('aa, bb, cc, dd, aa', 'aa')); // "'aa' was found 2 times."
