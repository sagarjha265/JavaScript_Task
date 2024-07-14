function sortThreeNumbers(num1, num2, num3) {
    let sorted = [num1, num2, num3].sort((a, b) => b - a);
    alert("Sorted numbers are: " + sorted.join(', '));
}

// Example usage:
sortThreeNumbers(0, -1, 4); // Alert: Sorted numbers are: 4, 0, -1
