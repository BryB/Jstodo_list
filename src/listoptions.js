import {renderElement} from './helpers.js';

// TODO: must clean-up css file and rename classes/id's.

function initOptions() {
  let options = `<div class="topnav">
    <button id="n_task">New</button>
    <button id="d_task">Delete</button>
    </div>`;
  renderElement('#body', options);
  addTask();
}

function createtask(title, priority, desc) {
  if(!title || !priority || !desc)
    return;
  let task = `<div id="tasks">`;
  let task_title = `<h1>${title}</h1>`;
  let task_priority = `<h1>${priority}</h1>`;
  let description = `<p>${desc}</p>`;
  task += task_title + task_priority + description + '</div>';
  renderElement('#wrapper', task);
}

function collectInfo() {
  let title = document.getElementById('title').value;
  let priority = document.getElementById('priority').value;
  let desc = document.getElementById('desc').value;

  createtask(title, priority, desc);
}

function resetForm () {
  let title = document.getElementById('title').value = '';
  let priority = document.getElementById('priority').value = '';
  let desc = document.getElementById('desc').value = '';
}

function closeForm(modal) {
  modal.style.display = "none";
}
function openForm (modal) {
  modal.style.display = 'block';
}
function formManager() {
  let modal = document.getElementById('myModal');
  var btn = document.getElementById("n_task");
  var span = document.querySelector(".close");
  let submitButton = document.getElementById('f_button');

  btn.onclick = function() { openForm(modal); }
  span.onclick = function() { closeForm(modal); }

  submitButton.addEventListener('click', e => {
    collectInfo();
    resetForm();
    closeForm(modal);
});
  window.onclick = function(event) {
    if (event.target == modal)
      closeForm(modal);
  }

}

function deleteTask() {

}

function addTask() {
  document.getElementById('n_task').onclick = function() {
    formManager();
  }
  document.getElementById('d_task').onclick = function() {
    console.log('deleted'); };
}

export {initOptions, addTask};
