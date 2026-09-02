// Task 18: Arrow function body

const multiply = (a, b) => a * b;

const addWithLogging = (a, b) => {
  console.log(`Adding ${a} + ${b}`);
  return a + b;
};

console.log("Multiply:", multiply(5, 3));
console.log("Add:", addWithLogging(7, 4));
