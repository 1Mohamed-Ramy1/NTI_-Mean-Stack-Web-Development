document.getElementById('runBtn').addEventListener('click', function () {
  const size = Number(prompt('Enter file size:') || 0);

  if (size > 0) {
    for (let progress = 1; progress <= size; progress++) {
      console.log(progress);
    }
  } else {
    console.log('size file Invalid');
  }
});