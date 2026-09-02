var skills = ["HTML", "CSS", "JS", "React"];
var result = "JS index: " + skills.indexOf("JS") + "\nPython exists: " + skills.includes("Python");
console.log(result);
document.getElementById("output").textContent = result;
