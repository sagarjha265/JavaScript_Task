function remove_first_occurrence(str, searchString) {
    const index = str.toLowerCase().indexOf(searchString.toLowerCase());
    if (index === -1) return str; // Not found
    return str.slice(0, index) + str.slice(index + searchString.length);
}

// Test Data
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the')); // "The quick brown fox jumps over lazy dog"
