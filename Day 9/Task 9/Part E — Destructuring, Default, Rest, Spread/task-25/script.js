// Task 25: Spread array as function arguments

const values = [2, 4, 6, 8];

function total(a, b, c, d) {
  return a + b + c + d;
}

const result = total(...values);

console.log("values:", values);
console.log("total(...values):", result);
