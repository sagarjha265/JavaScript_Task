function escape_HTML(html) {
    return html
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// Test Data
console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">')); 
// Output: "&lt;a href=&quot;javascript-string-exercise-17.php&quot; target=&quot;_blank&quot;&gt;"
