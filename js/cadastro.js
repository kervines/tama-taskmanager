const inputName = document.querySelector('#name-register');
const inputEmail = document.querySelector('#email-register');
const inputPassword = document.querySelector('#password-register');
const btnRegister = document.querySelector('#btn-register');
const formRegister = document.querySelector('#form-register');
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
  }, 2000);
};

const usersLocalStorage = (user) => {
  if (slotsUsers.length > 0) {
    slotsUsers.forEach((slot) => {
      if (slot.email === user.email) {
        return msgErro('Email inválido', emailContainer);
      } else {
        return slotsUsers.push(user);
      }
    });
  }

  if (slotsUsers.length === 0) {
    slotsUsers.push(user);
  }
  localStorage.setItem('users', JSON.stringify(slotsUsers));
};

formRegister.addEventListener('submit', (e) => {
  e.preventDefault();

  const user = {
    name: inputName.value,
    email: inputEmail.value.toLowerCase(),
    password: inputPassword.value,
  };

  usersLocalStorage(user);

  inputName.value = '';
  inputEmail.value = '';
  inputPassword.value = '';
});
