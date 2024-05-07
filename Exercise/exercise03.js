// EXERCISE SLIDE 03
// 01. Multiplication Table

let num = 9;

console.log("01. ");
for(let i = 1; i <= 10; i++){
    console.log(num + " x " + i);
}

// 02. Palindrome

// 03. Centimeter to Kilometer

num = 100000;

console.log("03. " + (num/100000) + " km");

// 04. Number to Currency (IDR)

// 05. Remove First Occurence of Substring

// 06. Capitalize First Letter of a Word

// 08. Reverse a String

// 09. Swap Case of a String

// 10. Largest of Two Given Integer
let num1 = 42; 
let num2 = 27;

if(num1 >= num2){
    console.log("10. " + num1);
} else {
    console.log("10. " + num2);
}

// 11. Sort Three Numbers
let num3 = 18;

let a = b = c = 0;

if(num1 <= num2 && num1 <= num3){
    a = num1;
    if(num2 <= num3){
        b = num2;
        c = num3;
    } else {
        b = num3;
        c = num2;
    }
} else if(num2 <= num1 && num2 <= num3){
    a = num2;
    if(num1 <= num3){
        b = num1;
        c = num3;
    } else {
        b = num3;
        c = num1;
    }
} else {
    a = num3;
    if(num1 <= num2){
        b = num1;
        c = num2;
    } else {
        b = num2;
        c = num1;
    }
}

console.log("11. " + a + ", " + b + ", " + c);

// 12. Replace Letter a to *