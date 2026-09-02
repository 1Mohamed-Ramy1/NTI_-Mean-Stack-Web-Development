document.getElementById('runBtn').addEventListener('click', function () {
  const hasAccount = true;
  const isVerified = false;

  console.log(hasAccount && isVerified);
  console.log(hasAccount || isVerified);
  console.log(!isVerified);
});