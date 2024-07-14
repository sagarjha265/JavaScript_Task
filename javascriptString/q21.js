function repeat_string(str, count = 1) {
    if (typeof str !== 'string' || typeof count !== 'number' || count < 1) {
        return "Error in string or count.";
    }
    return str.repeat(count);
}

// Test Data
console.log(repeat_string('a', 4)); // "aaaa"
console.log(repeat_string('a')); // "Error in string or count."
