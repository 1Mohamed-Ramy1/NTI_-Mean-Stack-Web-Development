// Task 29: localStorage

const userdata = { name: "Ahmed", age: 26, city: "Alex" };
localStorage.setItem("userdata", JSON.stringify(userdata));

const storedData = localStorage.getItem("userdata");
const parsedData = JSON.parse(storedData);

console.log("Stored:", storedData);
console.log("Parsed:", parsedData);

localStorage.removeItem("userdata");
