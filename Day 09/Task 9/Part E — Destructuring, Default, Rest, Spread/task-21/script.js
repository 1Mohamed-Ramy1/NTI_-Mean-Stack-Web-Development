// Task 21: Default values

const greet = (name = "Guest", message = "Hello") => `${message}, ${name}!`;

console.log(greet("Ahmed", "Hi"));
console.log(greet("Sara"));
console.log(greet());
