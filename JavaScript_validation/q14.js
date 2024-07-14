function isValidCanadaPostCode(postcode) {
    const regex = /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/;
    return regex.test(postcode);
}

// Test
console.log(isValidCanadaPostCode("K1A 0B1")); // true
