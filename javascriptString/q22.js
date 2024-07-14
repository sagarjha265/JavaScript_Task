function subStrAfterChars(str, char, secondChar) {
    const index = str.indexOf(char);
    if (index === -1) return str; // Character not found

    const substring = str.slice(index + 1);
    const secondIndex = substring.indexOf(secondChar);
    
    return secondIndex === -1 ? substring : substring.slice(secondIndex + 1);
}

// Test Data
console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':', 'a')); // "w3resource"
console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E', 'b')); // "xercises"
