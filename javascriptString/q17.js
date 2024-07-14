function string_chop(str, chunkSize = 1) {
    const result = [];
    for (let i = 0; i < str.length; i += chunkSize) {
        result.push(str.slice(i, i + chunkSize));
    }
    return result;
}

// Test Data
console.log(string_chop('w3resource'));       // ["w3resource"]
console.log(string_chop('w3resource', 2));    // ["w3", "re", "so", "ur", "ce"]
console.log(string_chop('w3resource', 3));    // ["w3r", "eso", "urc", "e"]
