function truncate_string(str, num) {
    return str.substring(0, str.length - num);
}

// Test Data
console.log(truncate_string("Robin Singh", 4)); // "Robin S"
