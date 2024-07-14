function diff_days(dt1, dt2) {
    // Calculate the difference in milliseconds
    var diff_ms = dt2 - dt1;

    // Convert milliseconds to days
    var diff_days = Math.floor(diff_ms / (1000 * 60 * 60 * 24));

    return diff_days;
}

// Test Data
var dt1 = new Date("October 13, 2014 08:11:00");
var dt2 = new Date("October 19, 2014 11:13:00");
console.log(diff_days(dt1, dt2)); // Output: 6
