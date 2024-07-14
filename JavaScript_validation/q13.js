function isValidUKPostCode(postcode) {
    const regex = /^([A-Z]{1,2}[0-9][A-Z]?\s?[0-9][A-Z]{2}|GIR\s?0AA)$/i;
    return regex.test(postcode);
}

// Test
console.log(isValidUKPostCode("EC1A 1BB")); // true
