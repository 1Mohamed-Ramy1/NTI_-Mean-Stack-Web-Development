document.getElementById('runBtn').addEventListener('click', function () {
  const fruits = ['apple', 'banana', 'mango'];
  console.log(fruits[1]);
  fruits[1] = 'orange';
  fruits.push('grape');
  console.log(fruits);
});