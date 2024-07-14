function isArmstrong(num) {
    const digits = num.toString().split('');
    const sumOfCubes = digits.reduce((sum, digit) => sum + Math.pow(Number(digit), 3), 0);
    return sumOfCubes === num;
}

function findArmstrongNumbers() {
    let armstrongNumbers = [];
    
    for (let i = 100; i <= 999; i++) {
        if (isArmstrong(i)) {
            armstrongNumbers.push(i);
        }
    }
    
    console.log("Armstrong numbers of three digits: " + armstrongNumbers.join(', '));
}

// Example usage:
findArmstrongNumbers(); // Prints all Armstrong numbers of three digits
