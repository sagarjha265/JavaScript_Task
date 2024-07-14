function extractUniqueCharacters(str) {
    const uniqueChars = new Set(str);
    return Array.from(uniqueChars).join('');
}

const exampleString = "thequickbrownfoxjumpsoverthelazydog";
const result = extractUniqueCharacters(exampleString);
console.log(result);  // Output: "thequickbrownfxjmpsvlazydg"
