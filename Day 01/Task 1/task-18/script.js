document.getElementById('runBtn').addEventListener('click', function () {
  const mixedBag = ['text', 10, true, null, undefined, { a: 1 }, [1, 2]];

  // null shows "object" because of an old JavaScript quirk.
  console.log(typeof mixedBag[0]);
  console.log(typeof mixedBag[1]);
  console.log(typeof mixedBag[2]);
  console.log(typeof mixedBag[3]);
  console.log(typeof mixedBag[4]);
  console.log(typeof mixedBag[5]);
  console.log(typeof mixedBag[6]);
});