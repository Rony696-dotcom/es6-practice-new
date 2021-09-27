// function doubleIt(num){
//     return (num * 2);
// }
// const result = doubleIt(5);
// console.log(result);



// const doubleIt = function myFun(num){
//     return num * 2;
// }
// const result = doubleIt(10);
// console.log(result);


// const doubleIt = num => num * 2;   // using the Arrow 
// const result = doubleIt(20);
// console.log(result);


// const add = (x, y) => x + y; // Multi Peramitur Arrow
// const sum = add(25,25);
// console.log(sum);


// const give5 = () => 5 ; // only return 5
// const result3 = give5();
// console.log(result3);



const doMath = (x,y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result4 = doMath(7,5);
console.log(result4);