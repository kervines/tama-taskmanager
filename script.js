function toDo() {
  const form = document.querySelector('.form');
  const orderList = document.querySelector('.order-list');
  const btnDeleteAll = document.querySelector('.btn-reset');
  const btnRemoveIten = document.querySelectorAll('.remove-iten');

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
