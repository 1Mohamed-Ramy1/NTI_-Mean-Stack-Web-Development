document.getElementById('runBtn').addEventListener('click', function () {
  // 2 + 8 = 10, then 10 + "0" becomes "100".
  console.log(2 + 8 + '0');
  // "2" + 8 becomes "28", then + 0 stays "280".
  console.log('2' + 8 + 0);
  // 2 + "8" becomes "28", then + 0 stays "280".
  console.log(2 + '8' + 0);
});