// Login handling
const loginForm = document.getElementById('login-form');
const loginPage = document.getElementById('login-page');
const mainPage = document.getElementById('main-page');
const loginError = document.getElementById('login-error');
const passwordOK = "adminjawa";

// Event listener login
loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  if (pass === passwordOK) {
    showMain();
  } else {
    loginError.textContent = "Password salah! Gunakan password: adminjawa";
  }
});

// Show Main Content
function showMain() {
  loginPage.style.display = "none";
  mainPage.style.display = "block";
  loginError.textContent = "";
  document.getElementById('password').value = "";
}

// Menu switching logic
document.getElementById('menu-home').addEventListener('click', function() {
  document.getElementById('section-home').style.display = "block";
  document.getElementById('section-media').style.display = "none";
});
document.getElementById('menu-media').addEventListener('click', function() {
  document.getElementById('section-home').style.display = "none";
  document.getElementById('section-media').style.display = "block";
});
document.getElementById('menu-logout').addEventListener('click', function() {
  mainPage.style.display = "none";
  loginPage.style.display = "flex";
});
