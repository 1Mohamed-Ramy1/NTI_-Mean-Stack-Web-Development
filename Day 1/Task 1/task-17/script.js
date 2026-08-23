document.getElementById('runBtn').addEventListener('click', function () {
  var city1 = 'Alex';
  var city2 = city1;
  city2 = 'Giza';
  // Strings are copied by value.
  console.log(city1, city2);

  var car1 = { brand: 'Toyota' };
  var car2 = car1;
  car2.brand = 'Honda';
  // Objects are copied by reference.
  console.log(car1, car2);

  var car3 = Object.assign({}, car1);
  car3.brand = 'Nissan';
  // Object.assign makes a separate copy.
  console.log(car1, car3);
});