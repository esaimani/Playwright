/*
1. Create a function named `checkOddOrEven` that takes a number as a parameter  

2. Use an `if` statement to check if the number is divisible by 2 
    Hint: if the remainder when divided by 2 is 0, then the num is even

3. Declare and initialize the variable  

4. Call the function and print the result

*/

function checkOddOrEven(number) {
    if (typeof number !== 'number') {
        return 'Input Error: number should be in numeric format';
    }
    else if (number <= 0) {
        return 'Input Error: Please enter the number range starting from 1';
    }
    else if (number % 2 === 0) {
        return number + ' is Even Number';
    }
    else {
        return number + ' is Odd number';
    }

}

let number = 999;

console.log(checkOddOrEven(number));