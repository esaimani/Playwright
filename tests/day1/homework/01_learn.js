/**
 * 1) Javascript File Name: 01_learn.js
 
    Objective: Learn Primitive Data Types
 
    Create the following variables using var and check their typeOf
 
    a) firstName
    b) companyName
    c) mobileNumber
    d) isAutomation
    e) hasPlaywright (do not assign)
 
    print and confirm the values and data types
 */
var firstName = 'Esaimani';
var companyName = 'EY';
var mobileNumber = 9790002594;
var isAutomation = true;
var hasPlaywright;

console.log('Data Type is - '+typeof firstName +' and the value is - '+firstName);
console.log('Data Type is - '+typeof companyName +' and the value is - '+companyName);
console.log('Data Type is - '+typeof mobileNumber +' and the value is - '+mobileNumber);
console.log('Data Type is - '+typeof isAutomation +' and the value is - '+isAutomation);
console.log('Data Type is - '+typeof hasPlaywright +' and the value is - '+hasPlaywright);

/* 
    Use same Javascript File Name: 01_learn.js
 
    Objective: Learn var vs let vs const and understand variable scoping
 
    Declare a const name as browserName (global)
    Assign value as "Chrome"
    Create a function by name getBrowserVersion
    Create if condition inside function to check if browser is chrome, then
    Declare a local variable -- use var first (browserVersion) and print that variable inside function (outside block)
    Call that function from the javascript
 
    - Use 'var' first as block variable and then convert that as 'let'
    - Confirm how it works
 
    - function how to write and how to call
    - basic if condition and block variable
    - let vs var
    */
const browserName = 'Chrome';
getBrowserVersion();

function getBrowserVersion()
{
    
    if (browserName === 'Chrome') {
        console.log('Chrome Browser');
        var browserVersion = '128.11.67.82';
    }
    else
    {
    console.log('Unsupported Browser');
    }

    console.log(browserVersion);
}
