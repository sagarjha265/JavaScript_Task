function isFirstCharacterUppercase(str) {
    return str.length > 0 && str.charAt(0) === str.charAt(0).toUpperCase();
}

// Test
console.log(isFirstCharacterUppercase("Hello")); // true
console.log(isFirstCharacterUppercase("hello")); // false
