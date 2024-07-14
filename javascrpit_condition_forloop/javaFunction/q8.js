function countVowels(str){
    let count = 0 ;
    const vowels = 'aeiouAEIOU';
    for(let i=0 ; i<str.length; i++){
        if(vowels.includes(str[i])){
            count++;
        }

    }
    return count;
}

// Example usage:
const exampleString = 'Wb Development Tutorial';
const ans = countVowels(exampleString)
console.log(ans)