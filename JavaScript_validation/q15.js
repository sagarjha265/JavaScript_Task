function isValidSSN(ssn) {
    const regex = /^(?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4}$/;
    return regex.test(ssn);
}

// Test
console.log(isValidSSN("123-45-6789")); // true
