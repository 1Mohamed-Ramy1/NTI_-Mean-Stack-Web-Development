// Task 2: Strict Mode Error Handling

function createStrictError() {
    "use strict";

    try {
        undeclaredVar = "This should fail!";
    } catch (error) {
        console.log(error.name + ": " + error.message);
    }
}

createStrictError();
