var sentence = "JavaScript is amazing and awesome";
var count = 0;
for (var i = 0; i < sentence.length; i++) {
  if (sentence.charAt(i).toLowerCase() === "a") count++;
}
console.log(count);
document.getElementById("output").textContent = count;
