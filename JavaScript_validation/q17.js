function isHexColor(value) {
    const regex = /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
    return regex.test(value);
}

// Test
console.log(isHexColor("#FFFFFF")); // true
console.log(isHexColor("#123abc")); // true
