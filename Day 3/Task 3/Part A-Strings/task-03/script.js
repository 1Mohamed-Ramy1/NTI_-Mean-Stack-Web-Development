var email = "student@nti.com";
var result = "Contains @: " + (email.indexOf("@") !== -1);
console.log(result);
document.getElementById("output").textContent = result;
