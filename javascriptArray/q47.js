function diff_weeks(dt1, dt2) {
    // Calculate the difference in milliseconds
    var diff_ms = dt2 - dt1;

    // Convert milliseconds to weeks
    var diff_weeks = Math.floor(diff_ms / (1000 * 60 * 60 * 24 * 7));

    return diff_weeks;
}

// Test Data
var dt1 = new Date("June 13, 2014 08:11:00");
var dt2 = new Date("October 19, 2014 11:13:00");
console.log(diff_weeks(dt1, dt2)); // Output: 18
