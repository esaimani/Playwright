const { log } = require("console");

for (let index = 0; index < 100; index++) {
    console.log(index);
    
}

let number = 1;
while (number<10) {
    console.log(number);
    number++;
}

while(number<10)
{
    if(number%2==1)
    {
        console.log(number);
    }
    number++;
}