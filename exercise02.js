// EXERCISE SLIDE 02
// 01. Celsius to Fahrenheit

let celsius = 60;
let fahrenheit = 0;

fahrenheit = (celsius * 9 / 5) + 32;

console.log("01. " + fahrenheit);

// 02. Odd or Even

let num = 3;

if (num % 2 ==  0) {
    console.log("02. Even");
} else {
    console.log("02. Odd");
}

// 03. Prime or Not

num = 13;
let checkPrime = false;

for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        checkPrime = false;
        break;
    } else {
        checkPrime = true;
    }
}

console.log(checkPrime == true ? "03. Prime" : "03. Not Prime");

// 04. Sum of Numbers

num = 5;
let sum = 0;

for(let i = 1; i <= num; i++) {
    sum += i;
}

console.log("04. " + sum);

// 05. Find Factorial

num = 6;
sum = 1;

for(let i = num; i > 0; i--) {
    sum = sum * i;
}

console.log("05. " + sum);

// 06. Fibonacci

num = 15;
let fibonacciArray = [0, 1, 1];
let value = 0;

for (let i = 3; i <= num; i++) {
    value = fibonacciArray[i-1] + fibonacciArray[i-2];
    fibonacciArray.push(value);
}

console.log("06. " + fibonacciArray[num]);