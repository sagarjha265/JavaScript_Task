function date_diff_indays(date1, date2) {
    const dt1 = new Date(date1);
    const dt2 = new Date(date2);
    const differenceInTime = dt2 - dt1; // difference in milliseconds
    return Math.floor(differenceInTime / (1000 * 3600 * 24)); // convert to days
}

// Test
console.log(date_diff_indays('04/02/2014', '11/04/2014')); // 216
console.log(date_diff_indays('12/02/2014', '11/04/2014')); // -28
