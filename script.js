const form = document.querySelector('.form');

function toDo() {
  const activityList = [];
  let i = 0;

  function addActivity(event) {
    event.preventDefault();
  }

  function deleteList() {}

  form.addEventListener('submit', addActivity);
  btnDeleteAll.addEventListener('click', deleteList);
}

toDo();
