// Get current date and time
let now = new Date();

// Array of days
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday'];

// Get the day of the week
let day = days[now.getDay()];

// Get hours, minutes and seconds
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

// Determine AM or PM suffix
let period = hours >= 12 ? 'PM' : 'AM';

// Convert hours from 24-hour to 12-hour format
hours = hours % 12;
hours = hours ? hours : 12; // the hour '0' should be '12'

// Print formatted time
console.log(`Today is : ${day}.`);
console.log(`Current time is : ${hours} ${period} : ${minutes} : ${seconds}`);
