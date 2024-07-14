function hex_to_ascii(hex) {
    return hex.match(/.{1,2}/g).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
}

// Test Data
console.log(hex_to_ascii('3132'));   // "12"
console.log(hex_to_ascii('313030')); // "100"
