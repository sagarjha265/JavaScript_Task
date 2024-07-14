function isHexadecimal(value) {
    const regex = /^[0-9A-Fa-f]+$/;
    return regex.test(value);
}

// Test
console.log(isHexadecimal("1A2b3C")); // true
