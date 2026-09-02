document.getElementById('runBtn').addEventListener('click', function () {
  var a = 40;
  var b = 50;
  var c = '60';
  var d = 30;
  var e = 30;

  // The string turns the chain into text concatenation.
  console.log(a + b + c + d + e);
  console.log(a + b + Number(c) + d + e);
});