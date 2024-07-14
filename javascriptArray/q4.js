function month_name(date) {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[date.getMonth()];
}

// Test Data
console.log(month_name(new Date("10/11/2009"))); // "October"
console.log(month_name(new Date("11/13/2014"))); // "November"
