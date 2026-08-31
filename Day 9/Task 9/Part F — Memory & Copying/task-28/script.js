// Task 28: Deep copy

const original = {
  name: "Mona",
  details: { city: "Cairo" }
};

const deepCopy = structuredClone(original);
deepCopy.name = "Nora";
deepCopy.details.city = "Alexandria";

console.log("Original:", original);
console.log("Deep copy:", deepCopy);
