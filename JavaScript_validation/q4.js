function containsDate(str) {
    const regex = /\b\d{1,2}[/-]\d{1,2}[/-]\d{2,4}\b/;
    return regex.test(str);
}

// Test
console.log(containsDate("Today's date is 12/31/2021.")); // true
