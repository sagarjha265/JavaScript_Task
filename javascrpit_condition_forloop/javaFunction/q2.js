function reverseNum(num) {
    let word = num.toString(); // Convert input to string
    let reversedWord = word.split('').reverse().join('');

    if (reversedWord === word) {
        return 1; // Return 1 if palindrome
    } else {
        return 0; // Return 0 if not palindrome
    }
}

let input = "madam"; // Example input
let result = reverseNum(input);

if (result === 1) {
    console.log(`${input} is a palindrome.`);
} else {
    console.log(`${input} is not a palindrome.`);
}
