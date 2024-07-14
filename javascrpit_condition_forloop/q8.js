function isHappy(num) {
    const seen = new Set();
    while (num !== 1 && !seen.has(num)) {
        seen.add(num);
        num = num.toString().split('').reduce((sum, digit) => sum + Math.pow(Number(digit), 2), 0);
    }
    return num === 1;
}

function findHappyNumbers(count) {
    let happyNumbers = [];
    let number = 1;
    
    while (happyNumbers.length < count) {
        if (isHappy(number)) {
            happyNumbers.push(number);
        }
        number++;
    }
    
    console.log("First " + count + " happy numbers: " + happyNumbers.join(', '));
}

// Example usage:
findHappyNumbers(5); // Prints the first 5 happy numbers
