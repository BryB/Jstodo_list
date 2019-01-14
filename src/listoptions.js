import {renderElement} from './helpers.js';

// TODO: must clean-up css file and rename classes/id's.

function initOptions() {
  let options = `<div class="topnav">
    <button id="n_task">New</button>
    </div>`;
  renderElement('#body', options);
}

function createtask(title, priority, desc) {
  if(!title || !priority || !desc)
    return;
  let delButton = `<button id="del">X</button><br>`;
  let task = `<div id="tasks">`;
  let task_title = `<h1>${title}</h1>`;
  let task_priority = `<h1>${priority}</h1>`;
  let description = `<p>${desc}</p>`;
  task += delButton + task_title + task_priority + description + '</div>';
  renderElement('#wrapper', task);
  initDeleteButton();
}

function collectInfo() {
  let title = document.getElementById('title').value;
  let desc = document.getElementById('desc').value;
  let priority = document.querySelectorAll('#priority');
  let p_val = '';
  for(let i = 0; i < priority.length; ++i)
    if(priority[i].checked)
      p_val = priority[i].value;

  createtask(title, p_val, desc);
}

function resetForm () {
  let title = document.getElementById('title').value = '';
  let desc = document.getElementById('desc').value = '';
  let priority = document.querySelectorAll('#priority');

  for(let i = 0; i < priority.length; ++i)
    priority[i].checked = false;
}

function closeForm(modal) {
  if(!modal)
    return;
  modal.style.display = "none";
}
function openForm (modal) {
  if(!modal)
    return;
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
  let button = document.getElementById('del');

  button.onclick = function() {
    button.parentNode.remove();
  }
}

function initTaskHandler() {
  let newTask = document.getElementById('n_task');
  newTask.onclick = function() { formManager(); }
}

export {initOptions, initTaskHandler};
