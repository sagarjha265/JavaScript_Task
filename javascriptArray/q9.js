function lastday(year, month) {
    return new Date(year, month + 1, 0).getDate(); // Get last day of the month
}

// Test
console.log(lastday(2014, 0));  // January -> 31
console.log(lastday(2014, 1));  // February -> 28
console.log(lastday(2014, 11)); // December -> 31
