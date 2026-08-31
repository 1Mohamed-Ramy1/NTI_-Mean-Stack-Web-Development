// Task 22: Rest parameters

const sumAll = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

console.log(sumAll(1, 2, 3));
console.log(sumAll(10, 20, 30, 40));
console.log(sumAll());
