
function FindAreaOfTriangle(a, b , c){
    let s= (a+b+c)/2;

    return Math.sqrt(s*(s-a) * (s-b) *(s-c))
}
let a= 5 ;
let b=  6;
let c= 7;
let area= FindAreaOfTriangle(a , b , c);

console.log("Area :" , area)