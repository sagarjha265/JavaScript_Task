function longestPalindrome(s) {
    let longest = '';

    for (let i = 0; i < s.length; i++) {
        // Check for odd-length palindromes
        let oddPalindrome = expandAroundCenter(s, i, i);
        if (oddPalindrome.length > longest.length) {
            longest = oddPalindrome;
        }

        // Check for even-length palindromes
        let evenPalindrome = expandAroundCenter(s, i, i + 1);
        if (evenPalindrome.length > longest.length) {
            longest = evenPalindrome;
        }
    }

    return longest;
}

function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return s.substring(left + 1, right);
}

// Example usage:
const inputString = 'bananas';
const longestPalin = longestPalindrome(inputString);

console.log(longestPalin); // Output: 'anana'
