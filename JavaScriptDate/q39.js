function filter_array_values(arr) {
    return arr.filter(value => value !== false && value !== null && value !== 0 && value !== '');
}

// Test Data
console.log(filter_array_values([58, '', 'abcd', true, null, false, 0])); // [58, "abcd", true]
