function swapcase(str) {
    return str.split('').map(char => {
        return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    }).join('');
}

// Test Data
console.log(swapcase('AaBbc')); // "aAbBC"
