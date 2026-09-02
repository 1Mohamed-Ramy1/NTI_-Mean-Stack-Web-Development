// Task 3: Delete in Strict Mode

function deleteExample() {
    "use strict";

    var localVar = "test";
    var person = { name: "Ahmed", city: "Cairo" };
    var errorMessage = "";

    try {
        eval("'use strict'; delete localVar;");
    } catch (error) {
        errorMessage = error.message;
    }

    var deletedProperty = delete person.city;

    var output = document.getElementById("output");
    output.innerHTML = "" +
        "<p>delete localVar: " + errorMessage + "</p>" +
        "<p>delete person.city: " + deletedProperty + "</p>" +
        "<p>person after delete: " + JSON.stringify(person) + "</p>";
}

deleteExample();

// NOTE:
// أنا استخدمت eval وسرشت عليها وسبب استخدامي ليها ان الكود كان في syntax error وانا عايز اعرف ايه السبب وازاي اتعامل معاه.
// وده اللي فهمته 

/*
eval() executes a string as JavaScript code at runtime.

We use eval() here because:
- In Strict Mode, "delete localVar" is a SyntaxError.
- SyntaxErrors happen before execution starts.
- try/catch cannot catch SyntaxErrors written directly in the code.
- Wrapping the statement inside eval() delays execution until runtime.
- Then the error becomes catchable by try/catch.

delete works for object properties:
delete person.city; // true

But deleting variables in Strict Mode is not allowed:
delete localVar; // SyntaxError
*/