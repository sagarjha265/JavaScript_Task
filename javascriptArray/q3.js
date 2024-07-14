function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

// Test Data
console.log(getDaysInMonth(1, 2012)); // 31
console.log(getDaysInMonth(2, 2012)); // 29 (Leap year)
console.log(getDaysInMonth(9, 2012)); // 30
console.log(getDaysInMonth(12, 2012)); // 31
