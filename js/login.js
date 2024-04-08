const inputEmail = document.querySelector('#email-login');
const inputPassword = document.querySelector('#password-login');
const loginBtn = document.querySelector('#login-btn');
const formLogin = document.querySelector('#form-login');
const emailContainer = document.querySelector('.email');

const slotsUsers = JSON.parse(localStorage.getItem('users')) || [];

const msgErro = (msg, parentElement) => {
  const p = document.createElement('p');
  p.style.color = 'red';
  p.style.fontSize = '.875rem';
  p.style.marginTop = '.5rem';
  p.innerText = msg;
  parentElement.appendChild(p);

  setTimeout(() => {
    p.remove();
  }, 3000);
};

const userValidation = (user) => {
  slotsUsers.forEach((slot, index) => {
    if (slot.email === user.email && slot.password === user.password) {
      slot.index = index;
      localStorage.setItem('user', JSON.stringify(slot));
      window.location.href = './index.html';
    }
  });

  msgErro('Usuário ou senha inválido', emailContainer);
};

formLogin.addEventListener('submit', (e) => {
  e.preventDefault();

  const user = {
    index: '',
    email: inputEmail.value.toLowerCase(),
    password: inputPassword.value,
  };

  userValidation(user);
});
