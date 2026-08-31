// Task 11: const object can be changed inside

const student = { name: "Omar", age: 20 };

student.age = 21;
student.city = "Alex";

console.log(student);

try {
    student = { name: "Ali", age: 30 };
} catch (error) {
    console.log(error.message);
}
