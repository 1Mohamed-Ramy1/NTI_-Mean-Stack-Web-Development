document.getElementById('runBtn').addEventListener('click', function () {
  var a = 40;
  var b = 50;
  var c = Number('60');
  var d = 30;
  var e = 30;

  const total = a + b + c + d + e;
  console.log('Total =', total);

  if (total >= 20) {
    for (let i = 1; i <= total; i++) {
      console.log(i);
    }
  } else {
    console.log('Too big');
  }
});