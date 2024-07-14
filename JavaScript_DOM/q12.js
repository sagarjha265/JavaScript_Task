function isValidUSZipCode(zip) {
    const regex = /^\d{5}(-\d{4})?$/;
    return regex.test(zip);
}

// Test
console.log(isValidUSZipCode("12345-6789")); // true
