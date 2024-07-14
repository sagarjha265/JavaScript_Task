function containsAlphaDashUnderscore(value) {
    const regex = /^[a-zA-Z-_]+$/;
    return regex.test(value);
}

// Test
console.log(containsAlphaDashUnderscore("hello-world")); // true
console.log(containsAlphaDashUnderscore("hello_world")); // true
console.log(containsAlphaDashUnderscore("hello world!")); // false
