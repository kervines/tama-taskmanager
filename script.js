const form = document.querySelector('.form');
const activity = document.querySelector('.activity');
const taksList = document.querySelector('.task-list');

function criaItem() {
  const li = document.createElement('li');
  li.classList.add('task-item');
  taksList.appendChild(li);
}
criaItem();

function criaParagrafo() {
  const p = document.createElement('p');
  p.classList.add('action');
  p.innerText = activity.value;
}
criaParagrafo();

function criaBotoes() {}
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
