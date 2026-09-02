// Task 1: Implicit Global Without Strict Mode

function createImplicitGlobal() {
    implicitVar = "I became global!";
}

createImplicitGlobal();
console.log(implicitVar);
