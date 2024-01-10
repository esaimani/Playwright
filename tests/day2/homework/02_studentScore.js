/*
1. Create a function named `calculateGrade` that takes a student's score as a parameter.

2. Use `switch` statement inside the function - 
   - Use a `switch` statement with the condition `true`.
   - Use `case` statements to check different score ranges and return the corresponding grade.

3. Declare and initialize the variable

4. Call the function and print the result


*/

function calculateGrade(score) {

   if (typeof score !== 'number') {
      return 'Input Error : Student Score should be in numeric format'
   }

   else if (score < 0 || score > 100) {

      return 'Input Error : Student Score range shoube be between 0 and 100'

   }

   else {

      switch (true) {
         case (score >= 90):
            return 'A';

         case (score >= 80):
            return 'B';

         case (score >= 70):
            return 'C';

         case (score >= 60):
            return 'D';

         case (score >= 50):
            return 'E';

         default:
            return 'F'
      }
   }
}

let score = 101;

console.log(calculateGrade(score));