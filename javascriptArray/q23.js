function english_ordinal_suffix(date) {
    const day = date.getDate();
    const suffixes = ["th", "st", "nd", "rd"];
    const value = day % 100;
    return day + (suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0]);
}

// Test the function
const dtSuffix = new Date(2015, 10, 1);
console.log(english_ordinal_suffix(dtSuffix)); // Output: "1st"
