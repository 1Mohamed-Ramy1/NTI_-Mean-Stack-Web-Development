// Task 24: Spread with objects

const user = { name: "Sara", age: 22 };
const contact = { email: "sara@nti.com", age: 23 };

const merged1 = { ...user, ...contact };
const merged2 = { ...contact, ...user };

console.log("Merged 1:", merged1);
console.log("Merged 2:", merged2);
