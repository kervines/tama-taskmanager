const form = document.querySelector('.form');
const activity = document.querySelector('.activity');
const taksList = document.querySelector('.task-list');
const paragrafoAction = document.querySelectorAll('.action');

const btnAdd = document.querySelector('.btn-add');
const btnDone = document.querySelector('.done');
// const btnDel = document.querySelector('.del');
// const btnEdit = document.querySelector('.edit');

function criaItem() {
  if (!!activity.value) {
    const li = document.createElement('li');
    li.classList.add('task-item');
    taksList.appendChild(li);

    const p = criaParagrafo();
    li.appendChild(p);
    const containerBtn = criaContainerBotoes(p);
    li.appendChild(containerBtn);

    return li;
  } else {
    return;
  }
}

function criaParagrafo() {
  const p = document.createElement('p');
  p.classList.add('action');
  p.innerText = activity.value;
  return p;
}

function criaContainerBotoes(paragrafo) {
  const containerBtn = document.createElement('div');
  containerBtn.classList.add('button-list');

  const btnDone = criaBotaoDone();
  btnDone.addEventListener('click', () => done(paragrafo));

  const btnDel = criaBotaoDel();
  const btnEdit = criaBotaoEdit();
  containerBtn.appendChild(btnDone);
  containerBtn.appendChild(btnDel);
  containerBtn.appendChild(btnEdit);

  return containerBtn;
}

function done(paragrafo) {
  return (paragrafo.style.textDecoration = 'line-through');
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

function adicionaTarefa() {
  function preventForm(event) {
    event.preventDefault();
  }
  btnAdd.addEventListener('click', criaItem);
  form.addEventListener('submit', preventForm);
}
adicionaTarefa();
