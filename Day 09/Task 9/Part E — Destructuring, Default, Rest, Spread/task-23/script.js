// Task 23: Spread with arrays

const arr1 = [1, 2];
const arr2 = [3, 4, 5];
const merged = [...arr1, ...arr2];

const original = [10, 20, 30];
const copy = [...original];
copy.push(40);

console.log("Merged:", merged);
console.log("Original:", original);
console.log("Copy:", copy);
