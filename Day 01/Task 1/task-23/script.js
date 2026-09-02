function saveUsername() {
  const username = document.getElementById('username').value.trim();
  const result = document.getElementById('result');

  if (!username) {
    result.innerText = 'Username is required';
    return;
  }

  result.innerText = 'Saved successfully';
  console.log({ username: username, status: 'saved' });
}

document.getElementById('runBtn').addEventListener('click', saveUsername);