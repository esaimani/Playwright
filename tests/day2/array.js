let pets = ['dog', 'cat', 'parrot', 'rabbit'];
console.log(pets);

console.log(pets.length);

console.log(pets.push('Ken'));

console.log(pets);

pets.pop();

console.log(pets);

let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8];

let mixedArray = odd.concat(even);

console.log(mixedArray);

let unsortedArray = [9, 4, 7, 2, 8, 1, 3, 5];
let sortedArray = unsortedArray.sort();

for (let index = 0; index < sortedArray.length; index++) {
    console.log(sortedArray[index]);

}

console.log('Advanced ForEach');
sortedArray.forEach(element => {
    console.log(element);
});


