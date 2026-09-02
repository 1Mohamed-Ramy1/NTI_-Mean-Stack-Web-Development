// Task 13: var/let/const declarations

var a;
let b;

console.log(a); // undefined
console.log(b); // undefined

try {
    const c;
} catch (error) {
    console.log(error.message);
}
