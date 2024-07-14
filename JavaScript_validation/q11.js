function isTimeString(value) {
    const regex = /^(0[0-9]|1[0-2]|[0-9]):[0-5][0-9]( ?[APap][mM])?$/;
    return regex.test(value);
}

// Test
console.log(isTimeString("12:30 PM")); // true
