// Closure
function greeting(name){
    const defaultMessage = "Hello ";

    return function(){
        return defaultMessage + name;
    }
}

const greetingDavid = greeting("David");
console.log(greetingDavid());

// Currying
function multiplier(factor){
    return function(number){
        return factor * number;
    }
}

const mul3 = multiplier(3);
const mul5 = multiplier(5);

console.log(mul3(5));
console.log(mul5(3));

console.log(multiplier(3)(5));

// Recursive
function countDown(fromNumber){
    console.log(fromNumber);

    let nextNumber = fromNumber - 1;
    if(nextNumber > 0){
        countDown(nextNumber);
    }
}

countDown(3);

// Arrow
const square = (number) => number * number;

console.log(square(10));

// Predefined
let number = "123"

console.log(typeof parseInt(number));