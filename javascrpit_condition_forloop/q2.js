function findProductSign(num1, num2, num3) {
    let product = num1 * num2 * num3;
    let sign = (product > 0) ? '+' : (product < 0) ? '-' : '0';
    alert("The sign is: " + sign);
}

// Example usage:
findProductSign(3, -7, 2); // Alert: The sign is: -
