document.getElementById('runBtn').addEventListener('click', function () {
  const hasAccount = true;
  const isVerified = false;

  if (hasAccount && isVerified) {
    console.log('Welcome back');
  } else if (hasAccount && !isVerified) {
    console.log('Please verify your account');
  } else {
    console.log('Please sign up');
  }

  console.log('!isVerified =', !isVerified);
  console.log('hasAccount || isVerified =', hasAccount || isVerified);
  console.log('hasAccount && isVerified =', hasAccount && isVerified);
});