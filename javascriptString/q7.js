function string_parameterize(str) {
    return str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
}

// Test Data
console.log(string_parameterize("Robin Singh from USA.")); // "robin-singh-from-usa"
