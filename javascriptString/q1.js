function is_string(input) {
    return typeof input === 'string';
}

// Test Data
console.log(is_string('w3resource')); // true
console.log(is_string([1, 2, 4, 0])); // false
