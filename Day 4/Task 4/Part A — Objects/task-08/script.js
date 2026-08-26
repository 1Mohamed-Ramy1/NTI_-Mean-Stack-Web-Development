var settings = { theme: "dark", lang: "en" };
Object.freeze(settings);
settings.theme = "light";
settings.fontSize = 16;
var result = JSON.stringify(settings, null, 2) + "\nThe object did not change because it is frozen.";
console.log(result);
document.getElementById("output").textContent = result;
