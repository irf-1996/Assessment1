//JavaScript function to get an array and to read the first element of an array. Check whether it is prime or not. 
var x = [5, 8, 9, 10, 11];

function Prime(number) {
    if (number <= 1) return false;
    for (let i = 2; i * i <= number; i++)
        if (number % i === 0) return false;
    return true;
}

function Array(arr) {
    let firstElement = arr[0];
    return Prime(firstElement);
}

const result = Array(x);
console.log(result);
