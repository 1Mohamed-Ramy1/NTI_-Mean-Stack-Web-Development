document.getElementById('runBtn').addEventListener('click', function () {
  const hotel = prompt('Hotel name:') || '';
  const nights = prompt('Number of nights:') || '';
  const confirmed = confirm('Is the booking confirmed?');
  const message = `Hotel: ${hotel}, Nights: ${nights}, Confirmed: ${confirmed}`;

  alert(message);
  console.log(message);
  document.getElementById('result').innerText = message;
});