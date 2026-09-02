// Task 10: var can be re-declared, let cannot

var name = "Ahmed";
var name = "Sara";
console.log(name); // Sara

let city = "Cairo";
try {
    let city = "Alex";
} catch (error) {
    console.log(error.message);
}
