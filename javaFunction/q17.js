function countLetterOccurrences(str) {
    const letterCount = {};
    
    for (const char of str) {
        if (/[a-zA-Z]/.test(char)) { // Check if the character is a letter
            char = char.toLowerCase(); // Convert to lower case for case insensitivity
            letterCount[char] = (letterCount[char] || 0) + 1;
        }
    }
    
    return letterCount;
}

const exampleString = "thequickbrownfoxjumpsoverthelazydog";
const result = countLetterOccurrences(exampleString);
console.log(result);
