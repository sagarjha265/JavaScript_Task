function zeroFill(num, length, sign = '+') {
    let absNum = Math.abs(num).toString().padStart(length, '0');
    return (num >= 0 ? sign : '-') + absNum;
}

// Test Data
console.log(zeroFill(120, 5, '-')); // "-00120"
console.log(zeroFill(29, 4));       // "+0029"
