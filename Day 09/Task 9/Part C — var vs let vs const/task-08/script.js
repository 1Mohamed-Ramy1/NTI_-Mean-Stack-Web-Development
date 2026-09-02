// Task 8: var is function-scoped

function demo() {
    if (true) {
        var x = "inside if";
    }
    console.log(x);
}

demo();
