function swatch_internet_time(date) {
    const totalSeconds = Math.floor(date.getTime() / 1000);
    const swatchTime = Math.floor((totalSeconds % 86400) / 86.4); // 86,400 seconds in a day
    return String(swatchTime).padStart(3, '0'); // Ensure three digits
}

// Test the function
const dtSwatch = new Date(2021, 0, 1, 12, 0, 0); // Example date
console.log(swatch_internet_time(dtSwatch)); // Output: "500" (for example)
