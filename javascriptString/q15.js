function humanize_format(num) {
    if (typeof num !== 'number') return '';
    
    const suffixes = ["th", "st", "nd", "rd"];
    const mod100 = num % 100;
    const mod10 = num % 10;
    
    let suffix = suffixes[0];
    if (mod10 === 1 && mod100 !== 11) suffix = suffixes[1];
    else if (mod10 === 2 && mod100 !== 12) suffix = suffixes[2];
    else if (mod10 === 3 && mod100 !== 13) suffix = suffixes[3];
    
    return `${num}${suffix}`;
}

// Test Data
console.log(humanize_format());   // ""
console.log(humanize_format(1));  // "1st"
console.log(humanize_format(8));  // "8th"
console.log(humanize_format(301)); // "301st"
console.log(humanize_format(402)); // "402nd"
