/*
1. Create a function named `checkNumberType` that takes a number as a parameter.

2. Use `if` to check if the number is greater than 0.
   Use `else if` to check if the number is less than 0.
   Use `else` to handle the case when the number is not greater than 0 or less than 0 
   (i.e., when it is zero).

3. Return the corresponding string value for each case.

4. Declare and initialize the variable

5. Call the function and print the result

*/

const { type } = require("os");

let number = 0;
checkNumberType(number);

function checkNumberType(number) {
    if (number>0) {
        console.log(number +' is greater than zero');
    }
    else if(number<0)
    {
        console.log(number +' is less than zero');
    }
    else
    console.log(number +' is zero');

}

/*
1. Create a function named `calculateGrade` that takes a student's score as a parameter.

2. Use `switch` statement inside the function - 
   - Use a `switch` statement with the condition `true`.
   - Use `case` statements to check different score ranges and return the corresponding grade.

3. Declare and initialize the variable

4. Call the function and print the result


*/

calculateGrade(89);
function calculateGrade(score) {
    
switch (true) {
    case (score >=90):
        console.log('Excellent');
        break;
    case (score <90 && score >=80):
        console.log('Very good');
        break;
    case (score <80 && score >=70):
        console.log('Good');
        break; 
    case (score <70 && score >=60):
        console.log('Average');
        break;     
    case (score <60 && score >=50):
        console.log('Just Pass');
        break;     
    default:
        console.log('Fail');
        break;
}
    
}


/*
1. Create a function named `checkOddOrEven` that takes a number as a parameter  

2. Use an `if` statement to check if the number is divisible by 2 
    Hint: if the remainder when divided by 2 is 0, then the num is even

3. Declare and initialize the variable  

4. Call the function and print the result

*/

function checkOddOrEven(number) {
    
}

