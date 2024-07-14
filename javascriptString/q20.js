function formatted_string(str, length, direction) {
    const strLength = str.length;
    if (strLength >= length) return str;
    
    const padding = '0'.repeat(length - strLength);
    
    return direction === 'l' ? padding + str : str + padding;
}

// Test Data
console.log(formatted_string('0000', 123, 'l')); // "0123"
console.log(formatted_string('00000000', 123, '')); // "12300000"
