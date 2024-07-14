function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function findLeapYears(startYear, endYear) {
    const leapYears = [];
    for (let year = startYear; year <= endYear; year++) {
        if (isLeapYear(year)) {
            leapYears.push(year);
        }
    }
    return leapYears;
}

// Example usage
console.log(findLeapYears(2000, 2020));
