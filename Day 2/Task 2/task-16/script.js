document.getElementById('runBtn').addEventListener('click', function () {
  const day = prompt('Enter a day name:') || '';

  switch (day) {
    case 'Saturday':
    case 'Sunday':
      console.log('Weekend');
      break;
    case 'Monday':
    case 'Friday':
      console.log('Workday');
      break;
    default:
      console.log('Regular day');
  }
});