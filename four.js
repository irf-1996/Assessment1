// Write a JavaScript program to find the sum of squares of the elements of an array.
var a = [1, 2, 3, 4, 5, 6, 7, 8];

function Squares(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i] * array[i]; 
    }
    return sum;
}

let result = Squares(a);
console.log("The sum of squares is:", result);
