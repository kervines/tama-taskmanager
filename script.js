const form = document.querySelector('.form');
const activity = document.querySelector('.activity');
const taksList = document.querySelector('.task-list');

function criaItem() {
  const li = document.createElement('li');
  li.classList.add('task-item');
  taksList.appendChild(li);

  const p = criaParagrafo();
  li.appendChild(p);
  const containerBtn = criaContainerBotoes();
  li.appendChild(containerBtn);
}
criaItem();

function criaParagrafo() {
  const p = document.createElement('p');
  p.classList.add('action');
  // p.innerText = activity.value;
  p.innerText = 'EXEMPLO JS';
  return p;
}

function criaContainerBotoes() {
  const containerBtn = document.createElement('div');
  containerBtn.classList.add('button-list');

  const btnDone = criaBotaoDone();
  const btnDel = criaBotaoDel();
  const btnEdit = criaBotaoEdit();
  containerBtn.appendChild(btnDone);
  containerBtn.appendChild(btnDel);
  containerBtn.appendChild(btnEdit);

  return containerBtn;
}

function criaBotaoDone() {
  const btn = document.createElement('button');
  btn.classList.add('done');
  btn.innerText = 'Feito';
  return btn;
}
function criaBotaoDel() {
  const btn = document.createElement('button');
  btn.classList.add('del');
  btn.innerText = 'Delete';
  return btn;
}
function criaBotaoEdit() {
  const btn = document.createElement('button');
  btn.classList.add('edit');
  btn.innerText = 'Edite';
  return btn;
}

function adicionarTarefa() {}

// function toDo() {
//   const activityList = [];
//   let i = 0;

//   function addActivity(event) {
//     event.preventDefault();
//   }

//   function deleteList() {}

//   form.addEventListener('submit', addActivity);
//   btnDeleteAll.addEventListener('click', deleteList);
// }

// toDo();
