var items = ["js", "html", "css", "js", "react", "js"];
var count = 0;
for (var i = 0; i < items.length; i++) {
  if (items[i] === "js") count++;
}
var result = "js appears: " + count + " times";
console.log(result);
document.getElementById("output").textContent = result;
