// Task 16: Arrow function

function welcome(name) {
  return "Welcome, " + name + "!";
}

const welcomeArrow = (name) => `Welcome, ${name}!`;

console.log("Normal function:", welcome("Ahmed"));
console.log("Arrow function:", welcomeArrow("Ahmed"));
