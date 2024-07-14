function daysUntilNextChristmas() {
    // Get the current date
    let today = new Date();

    // Get the current year
    let currentYear = today.getFullYear();

    // Get the next Christmas date
    let nextChristmas = new Date(currentYear, 11, 25); // December is month 11 in JavaScript

    // If Christmas has passed this year, calculate for next year
    if (today.getMonth() === 11 && today.getDate() > 25) {
        nextChristmas.setFullYear(currentYear + 1);
    }

    // Calculate the difference in days between today and next Christmas
    let diffMilliseconds = nextChristmas.getTime() - today.getTime();
    let daysLeft = Math.ceil(diffMilliseconds / (1000 * 60 * 60 * 24));

    return daysLeft;
}

// Call the function to get the days left until next Christmas
let daysLeft = daysUntilNextChristmas();

// Output the result
console.log(`Days left until next Christmas: ${daysLeft}`);
