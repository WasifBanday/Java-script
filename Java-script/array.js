// Two ways to declare array
let fruits = ["apple", "cherry", "banana"];
let intFruits = ["kiwi", "avacado", "dragon fruit"];

console.log(fruits);
console.log(intFruits);

// lets print the first item of array ..
console.log(fruits[0]);
// lets  view the length of array
console.log(fruits.length);


// Changing name/value  of 1st fruit in array through indexing ...
fruits[0]="blueberry"
console.log(fruits[0]);

// Adding new item in array at end of array..
fruits.push("Mango")
console.log(fruits);

// Adding new item in array but at starting of array..
fruits.unshift("Orange")
console.log(fruits);

// Erasing the last item in array ..
fruits.pop();
console.log(fruits);
