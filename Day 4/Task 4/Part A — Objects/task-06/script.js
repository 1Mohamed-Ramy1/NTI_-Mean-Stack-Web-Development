var book = { title: "JavaScript Basics", author: { firstName: "Ahmed", lastName: "Ali" } };
var result = book.author.lastName;
console.log(result);
document.getElementById("output").textContent = result;
