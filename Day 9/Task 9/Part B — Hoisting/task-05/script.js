// Task 5: Function Declaration vs Function Expression Hoisting

sayHi();
function sayHi() {
    console.log("Hi");
}

sayBye();
var sayBye = function () {
    console.log("Bye");
};
