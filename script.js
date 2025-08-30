// Modal logic
const authModal = document.getElementById('authModal');
const loginTab = document.getElementById('loginTab');
const signupTab = document.getElementById('signupTab');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const otpForm = document.getElementById('otpForm');
const closeBtn = document.querySelector('.close-btn');

function showLogin() {
  loginForm.classList.remove('hidden');
  signupForm.classList.add('hidden');
  otpForm.classList.add('hidden');
  loginTab.classList.add('active');
  signupTab.classList.remove('active');
}

function showSignup() {
  signupForm.classList.remove('hidden');
  loginForm.classList.add('hidden');
  otpForm.classList.add('hidden');
  signupTab.classList.add('active');
  loginTab.classList.remove('active');
}

loginTab.addEventListener('click', showLogin);
signupTab.addEventListener('click', showSignup);
closeBtn.addEventListener('click', () => authModal.style.display = 'none');

// Example open modal (you can add this to your login/signup buttons)
document.querySelectorAll('.open-auth').forEach(btn => {
  btn.addEventListener('click', () => authModal.style.display = 'flex');
});

