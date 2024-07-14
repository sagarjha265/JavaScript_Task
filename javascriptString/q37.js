function compare_strings(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}

// Test Data
console.log(compare_strings('abcd', 'AbcD')); // true
console.log(compare_strings('ABCD', 'Abce')); // false
