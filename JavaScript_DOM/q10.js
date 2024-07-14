function isAlphanumeric(value) {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(value);
}

// Test
console.log(isAlphanumeric("abc123")); // true
