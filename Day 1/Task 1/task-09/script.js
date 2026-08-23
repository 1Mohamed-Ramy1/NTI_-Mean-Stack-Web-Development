document.getElementById('runBtn').addEventListener('click', function () {
  const score = 20;
  const textScore = '20';

  // == checks after coercion, === checks value and type.
  console.log(score == textScore);
  console.log(score === textScore);
});