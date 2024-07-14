function string_endsWith(str, suffix) {
    return str.endsWith(suffix);
}

// Test Data
console.log(string_endsWith('JS PHP PYTHON', 'PYTHON')); // true
console.log(string_endsWith('JS PHP PYTHON', ''));      // false
