// Task 27: Shallow copy

const original = {
  name: "Mona",
  details: { city: "Cairo" }
};

const copy = { ...original };
copy.name = "Nora";
copy.details.city = "Alexandria";

console.log("Original:", original);
console.log("Copy:", copy);
