let number =1;
console.log('Finding Odd Number while Loop');
while(number<10)
{
    if(number%2==1)
    {
    console.log(number);    
    }
    number++;
}
console.log('Finding Odd Number Using Do While Loop');
let value =1;
do {
    if(value%2==1)
    {
    console.log(value);    
    }
    value++;
} while (value<10);

console.log('Finding Odd Number Using For Loop');
for(let num =1;num<10;num++){
    if (num%2==1) {
        console.log(num);
    }
}