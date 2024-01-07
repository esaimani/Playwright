const { log } = require("console");

let browser = 'Chrome';

launchBrowser(browser);

function launchBrowser(browserName)
{
if (browserName === 'Chrome') {
    console.log('Chrome Browser');
} else if(browserName === 'Firefox'){
console.log('Firefox Browser');
}
else if(browserName === 'Edge'){
    console.log('Edge Browser');
    }
else {
    console.log('Unsupported Browser');
}
}

let testType ='Smoke';
runTests(testType);
function runTests(testType)
{
switch (testType) {
    case 'Smoke':
        console.log('Smoke Testing');
        break;
    case 'Sanity':
        console.log('Sanity Testing');
        break;
    case 'Regression':
        console.log('Regression Testing');
        break;    
    default:
        console.log('Smoke Testing');
        break;
}
}