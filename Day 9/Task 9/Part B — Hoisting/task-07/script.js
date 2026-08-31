// Task 7: Hoisting inside function

var n = 1;

function demo() {
    console.log(n); // undefined
    var n = 2;
    console.log(n); // 2
}

demo();
console.log(n); // 1
