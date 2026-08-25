var sentence = "I love coding";
var result = sentence.split(" ").join("-");
console.log(result);
document.getElementById("output").textContent = result;
