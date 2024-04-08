const inputName = document.querySelector('#name-register');
const inputEmail = document.querySelector('#email-register');
const inputPassword = document.querySelector('#password-register');
const btnRegister = document.querySelector('#btn-register');
const formRegister = document.querySelector('#form-register');
const emailContainer = document.querySelector('.email');
const registerOkEl = document.querySelector('.register-OK');

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

const registerOk = () => {
  registerOkEl.style.opacity = '1';
  registerOkEl.style.top = '50%';
  registerOkEl.style.zIndex = '99';

  setTimeout(() => {
    registerOkEl.style.opacity = '0';
    registerOkEl.style.top = '40%';
    registerOkEl.style.zIndex = '-1';
  }, 2000);
};

const emailValidation = (user) => {
  return slotsUsers.some((slot) => {
    return slot.email === user.email;
  });
};

const resetInputs = () => {
  inputName.value = '';
  inputEmail.value = '';
  inputPassword.value = '';
};

const usersLocalStorage = (user) => {
  if (slotsUsers.length > 0) {
    if (emailValidation(user)) {
      msgErro('Email cadastrado, tente outro email', emailContainer);
    } else {
      slotsUsers.push(user);
      registerOk();
      resetInputs();
    }
  }

  if (slotsUsers.length === 0) {
    slotsUsers.push(user);
    registerOk();
    resetInputs();
  }
  localStorage.setItem('users', JSON.stringify(slotsUsers));
};

formRegister.addEventListener('submit', (e) => {
  e.preventDefault();

  const user = {
    name: inputName.value,
    email: inputEmail.value.toLowerCase(),
    password: inputPassword.value,
    tasks: [],
  };

  usersLocalStorage(user);
});
