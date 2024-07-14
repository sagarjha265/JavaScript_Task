function diff_years(dt1, dt2) {
    // Get the difference in years
    var years_diff = dt2.getFullYear() - dt1.getFullYear();

    // Check if the current year is not a complete year
    if (
        dt2.getMonth() < dt1.getMonth() ||
        (dt2.getMonth() === dt1.getMonth() && dt2.getDate() < dt1.getDate())
    ) {
        years_diff--;
    }

    return years_diff;
}

// Test Data
var dt1 = new Date("June 13, 2014 08:11:00");
var dt2 = new Date("October 19, 2017 11:13:00");
console.log(diff_years(dt1, dt2)); // Output: 3
