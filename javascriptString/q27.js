function ascii_to_hexa(str) {
    return Array.from(str).map(char => char.charCodeAt(0).toString(16)).join('');
}

// Test Data
console.log(ascii_to_hexa('12'));   // "3132"
console.log(ascii_to_hexa('100'));  // "313030"
