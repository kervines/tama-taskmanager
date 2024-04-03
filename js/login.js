const inputEmail = document.querySelector('#email-login');
const inputPassword = document.querySelector('#password-login');
const loginBtn = document.querySelector('#login-btn');
const formLogin = document.querySelector('#form-login');

console.log(inputEmail, inputPassword, loginBtn);

formLogin.addEventListener('submit', (e) => {
  e.preventDefault();

  const user = {
    email: inputEmail.value,
    password: inputPassword.value,
  };

  console.log(user);
});
