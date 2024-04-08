const form = document.querySelector('#input-container');
const input = document.querySelector('#input-task');
const taskContainer = document.querySelector('#task-container');
const userName = document.querySelector('.user-name');
const exit = document.querySelector('.link-cadastro');

const initLoginSystem = () => {
  const userLogado = JSON.parse(localStorage.getItem('user'));
  if (!userLogado) {
    window.location.href = './login.html';
  }

  userName.innerHTML = `<button><i class="fa-solid fa-user"></i> ${userLogado.name}</button>`;
  userName.href = '';
  exit.innerText = 'Sair';

  exit.addEventListener('click', () => {
    localStorage.removeItem('user');
    exit.href = './login.html';
  });
};
initLoginSystem();

const arrLocalStorage = JSON.parse(localStorage.getItem('task')) || [];
const saveStorage = (element) => {
  arrLocalStorage.push(element);
  localStorage.setItem('task', JSON.stringify(arrLocalStorage));
  return arrLocalStorage;
};

const deleteElement = (element) => {
  arrLocalStorage.filter((item, index) => {
    if (arrLocalStorage[index] === element.dataset.del) {
      arrLocalStorage.splice(index, 1);
    }
  });
  localStorage.setItem('task', JSON.stringify(arrLocalStorage));
  element.parentNode.parentNode.remove();
};

const updateElement = (element) => {
  let newText;
  const input = document.createElement('input');
  const target = element.parentNode.previousElementSibling.firstElementChild;
  input.value = target.innerText;
  target.replaceWith(input);
  input.focus();

  input.addEventListener('change', () => {
    const p = document.createElement('p');
    newText = input.value;
    input.replaceWith(p);
    p.innerText = newText;

    arrLocalStorage.filter((item, index) => {
      if (arrLocalStorage[index] === element.dataset.update) {
        arrLocalStorage[index] = newText;
      }
    });
    localStorage.setItem('task', JSON.stringify(arrLocalStorage));
  });
};

const checkElement = (element) => {
  const target = element.parentNode.previousElementSibling.firstElementChild;
  target.classList.toggle('checkToggle');
};

const createTask = (task) => {
  taskContainer.innerHTML += `<div class="task">
  <div class='text-task'>
  <p>${task}</p>
  </div>
  <div class='buttons'>
  <button onclick=checkElement(this) data-update='${task}' class='fa-solid fa-check btn'></button>
  <button onclick=updateElement(this) data-update='${task}' class='fa-solid fa-pen btn'></button>
  <button onclick=deleteElement(this) data-del='${task}' class='fa-solid fa-trash-can btn'></button>
  </div>
  </div>`;
  input.value = '';
};

const formValidation = () => {
  if (!!input.value === false) {
    return alert('Insira uma tarefa');
  }
  saveStorage(input.value);
  createTask(input.value);
};

const onLoadStorage = () => {
  arrLocalStorage.forEach((item) => {
    createTask(item);
  });
};

onLoadStorage();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  formValidation();
});
