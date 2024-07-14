function findLongestWord(str) {
    const words = str.split('');

    let  longestWordlen= '';
    for (let i=0 ; i< words.length ; i++){
        if(words[i].length > longestWordlen.length){
            longestWordlen= words[i]
        }
    }
    return longestWordlen

}
const exampleString = 'Web Development Tutorial';
const longestWord = findLongestWord(exampleString);
console.log(longestWord); // Output: 'Development'
