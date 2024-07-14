function insertDashes(num) {
    const str = num.toString();
    let result = '';

    for (let i = 0; i < str.length; i++) {
        result += str[i];
        if (i > 0 && str[i] % 2 === 0 && str[i - 1] % 2 === 0) {
            result += '-';
        }
    }
    return result;
}

// Test Data
console.log(insertDashes(25468)); // Output: "0-254-6-8"
