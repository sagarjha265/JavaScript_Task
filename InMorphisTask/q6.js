function isLeapYear(year){

    if((year % 400===0 ) ||(year %4===0 && year % 100 !==0)){
        return true
    }
    else {
        return false
    }
}

let year1 = 2020;
let year2 = 2021;
let year3 = 1900;
let year4 = 2000;

console.log(`&{year1} is leap year ? ${isLeapYear(year1)}`);
console.log(`&{year2} is leap year ? ${isLeapYear(year2)}`);
console.log(`&{year3} is leap year ? ${isLeapYear(year3)}`);
console.log(`&{year4} is leap year ? ${isLeapYear(year4)}`);

