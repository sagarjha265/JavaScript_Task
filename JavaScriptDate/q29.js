function numStringRange(start, end, step) {
    const result = [];
    const startCode = start.charCodeAt(0);
    const endCode = end.charCodeAt(0);
    
    for (let code = startCode; code <= endCode; code += step) {
        result.push(String.fromCharCode(code));
    }
    
    return result;
}

// Example usage
console.log(numStringRange('a', 'z', 2)); // ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]
