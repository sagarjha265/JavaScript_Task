function sentenceCase(str) {
    return str.split('. ').map(sentence => {
        return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
    }).join('. ');
}

// Test Data
console.log(sentenceCase('PHP exercises. python exercises.')); // "Php exercises. Python exercises."
