const inputName = document.querySelector('#name-register');
const inputEmail = document.querySelector('#email-register');
const inputPassword = document.querySelector('#password-register');
const btnRegister = document.querySelector('#btn-register');
const formRegister = document.querySelector('#form-register');

const slotUsers = JSON.parse(localStorage.getItem('users')) || [];
const usersLocalStorage = (user) => {
  slotUsers.push(user);
  localStorage.setItem('users', JSON.stringify(slotUsers));
};

formRegister.addEventListener('submit', (e) => {
  e.preventDefault();

  const user = {
    name: inputName.value,
    email: inputEmail.value,
    password: inputPassword.value,
  };
  usersLocalStorage(user);

  // slotUsers.forEach((user, index, array) => {
  //   if (index === 0) {
  //     console.log('primeiro cadastro');
  //   }
  //   if (array[index].name === array[index - 1].name) {
  //     console.log('nome cadastrado');
  //     return;
  //   }
  // });

  inputName.value = '';
  inputEmail.value = '';
  inputPassword.value = '';
});
