const form = document.querySelector('#input-container');
const input = document.querySelector('#input-task');
const taskContainer = document.querySelector('#task-container');
const userName = document.querySelector('.user-name');
const exit = document.querySelector('.link-cadastro');
const userLogado = JSON.parse(localStorage.getItem('user'));

const initLoginSystem = () => {
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

const localStorageUsers = JSON.parse(localStorage.getItem('users'));
const localTasks = localStorageUsers[userLogado.index].tasks;

const saveStorage = (element) => {
  localTasks.push(element);
  localStorage.setItem('users', JSON.stringify(localStorageUsers));
  return localStorageUsers;
};

const deleteElement = (element) => {
  localTasks.filter((item, index) => {
    if (localTasks[index] === element.dataset.del) {
      localTasks.splice(index, 1);
    }
  });
  localStorage.setItem('users', JSON.stringify(localStorageUsers));
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

    localTasks.filter((item, index) => {
      if (localTasks[index] === element.dataset.update) {
        localTasks[index] = newText;
      }
    });
    localStorage.setItem('task', JSON.stringify(localStorageUsers));
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
  localTasks.forEach((item) => {
    createTask(item);
  });
};

onLoadStorage();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  formValidation();
});
