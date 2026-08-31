// Task 9: let is block-scoped

function demo() {
    if (true) {
        let x = "inside if";
    }

    try {
        console.log(x);
    } catch (error) {
        console.log(error.message);
    }
}

demo();
