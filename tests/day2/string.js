let testcasecount = 510;
console.log(`Total Testcases executed ${testcasecount}`);

console.log(`Hello
Esaimani
How are you`);

let username ='Esaimani';
let reverse='';
for (let index = username.length; index >= 0; index--) {
    reverse=reverse+username.charAt(index);
    // console.log(username.charAt(index));
    
}

console.log(reverse);

let firstName = 'Esaimani';
let lastName = 'Navamani';

console.log(firstName.concat(lastName));


console.log(firstName.toLowerCase());
console.log(lastName.toUpperCase());

console.log(lastName.includes('mani'));
console.log(lastName.includes('esai'));

console.log(lastName.slice(0,7));

console.log(lastName.substring(3));
