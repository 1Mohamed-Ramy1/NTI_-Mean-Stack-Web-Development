document.getElementById('runBtn').addEventListener('click', function () {
  var a = '15';
  var b = 15;
  var c = null;
  var d;
  var e = [15];
  var f = { value: 15 };

  console.table([
    { value: a, type: typeof a, loose: a == 15, strict: a === 15 },
    { value: b, type: typeof b, loose: b == 15, strict: b === 15 },
    { value: c, type: typeof c, loose: c == 15, strict: c === 15 },
    { value: d, type: typeof d, loose: d == 15, strict: d === 15 },
    { value: e, type: typeof e, loose: e == 15, strict: e === 15 },
    { value: f, type: typeof f, loose: f == 15, strict: f === 15 }
  ]);
});