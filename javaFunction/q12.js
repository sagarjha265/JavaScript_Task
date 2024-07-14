function sortted(array){
    const uniqueSorted = Array.from(new Set(array)).sort((a, b) => a - b);

    if (uniqueSorted.length <2){
        return null;
    }

    const secondlowest = uniqueSorted[1];
    const secondlargest = uniqueSorted[uniqueSorted.length -2];
    return [secondlowest , secondlargest];

}
const samepleArray = [1,2,3,4,5];
const ans = sortted(samepleArray);
console.log(ans);