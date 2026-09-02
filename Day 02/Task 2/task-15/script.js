document.getElementById('runBtn').addEventListener('click', function () {
  const age = Number(prompt('Enter your age:') || 0);
  const label = age >= 18 ? 'Adult' : 'Minor';

  console.log(label);
  alert(label);
});