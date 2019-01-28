import {renderElement, closeForm, openForm} from './helpers.js';
import {taskManager} from './index.js';
// TODO: must clean-up css file and rename classes/id's.

function initOptions() {
  let options = `<div class="topnav">
    <button id="n_task">New</button>
    </div>`;
  renderElement('#body', options);
}

function createtask(title, priority, time, desc) {
  let id = taskManager.getId();
  if(!title || !priority || !desc)
    return;
  let delButton = `<button id="${id} "class="del">X</button><br>`;
  let task = `<div id="${id}" class="tasks">`;
  let task_title = `<h1>${title}</h1>`;
  let task_priority = `<h1>Priority: ${priority}</h1>`;
  let task_time = `<h4>Due: ${time}</h4>`;
  let description = `<p>${desc}</p>`;
  task += delButton + task_title + task_priority + task_time + description + '</div>';
  renderElement('#wrapper', task);
  let button = document.getElementById(id);
  initDeleteButton(button);
}
// TODO: use regex for time/date analysis.
function formatTime(time) {
  time = time.split('');
  let formatted = time.slice(5,7).join('') + '/'
  + time.slice(8,10).join('') + '/' + time.slice(0,4).join('');
  let regtime = '';
  let adjtime = parseInt(time.slice(11,13).join(''));
  if(!adjtime)
    regtime += '12' + time.slice(13).join('') + 'AM';
  else if (adjtime > 12)
    regtime += "0" + (adjtime % 12) + time.slice(13).join('') + 'PM';
  else
    regtime += time.slice(11).join('') + ' AM';
  return formatted + " " + regtime;
}

function collectInfo() {
  let title = document.getElementById('title').value;
  let desc = document.getElementById('desc').value;
  let priority = document.querySelectorAll('#priority');
  let time = formatTime(document.getElementById('time').value);
  let p_val = '';
  for(let i = 0; i < priority.length; ++i)
    if(priority[i].checked)
      p_val = priority[i].value;
  createtask(title, p_val, time, desc);
}

function resetForm () {
  let title = document.getElementById('title').value = '';
  let desc = document.getElementById('desc').value = '';
  let priority = document.querySelectorAll('#priority');

  for(let i = 0; i < priority.length; ++i)
    priority[i].checked = false;
}

function formManager() {
  let form = document.getElementById('form');
  var btn = document.getElementById("n_task");
  var span = document.querySelector(".close");
  let submitButton = document.getElementById('f_button');

  btn.onclick = function() { openForm(form); }
  span.onclick = function() { closeForm(form); }

  submitButton.addEventListener('click', e => {
    collectInfo();
    resetForm();
    closeForm(form);
});
  window.onclick = function(event) {
    if (event.target == form)
      closeForm(form);
  }
}

function initDeleteButton(button) {
  taskManager.storeId();
  taskManager.incId();
  let buttons  = document.querySelectorAll('.del');
  for(let i = 0; i < buttons.length; ++i)
  {
    buttons[i].addEventListener('click', e => {
      buttons[i].parentNode.remove();
    });
  }
}

function initTaskHandler() {
  let newTask = document.getElementById('n_task');
  newTask.onclick = function() { formManager(); }
}

export {initOptions, initTaskHandler};
