const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
let failedAttempts = 0;

// Stored credentials
const storedUsername = 'admin';
const storedPassword = 'password';

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const enteredUsername = usernameInput.value;
  const enteredPassword = passwordInput.value;

  if (
    enteredUsername === storedUsername &&
    enteredPassword === storedPassword
  ) {
    // Redirect to home page
    window.location.href = 'home.html';
  } else {
    failedAttempts++;

    if (failedAttempts >= 3) {
      // Show lock account dialog
      alert('Your account is locked. Please contact support.');
      // Reset failed attempts
      failedAttempts = 0;
      // Clear stored credentials
      usernameInput.value = '';
      passwordInput.value = '';
    } else {
      // Show error message
      alert('Invalid username or password.');
    }
  }
});

function convert() {
  const conversion = document.getElementById('conversion').value;
  const temperature = document.getElementById('temperature').value;
  let result;

  switch (conversion) {
    case 'c2r':
      result = (4 / 5) * temperature;
      break;
    case 'c2f':
      result = (9 / 5) * temperature + 32;
      break;
    case 'c2k':
      result = temperature + 273.15;
      break;
    case 'r2c':
      result = (5 / 4) * temperature;
      break;
    case 'r2f':
      result = (9 / 4) * temperature + 32;
      break;
    case 'r2k':
      result = (5 / 4) * temperature + 273.15;
      break;
    default:
      result = 'Invalid conversion';
  }

  document.getElementById('result').innerText = `Result: ${result}`;
}
