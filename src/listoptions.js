import * as helper from './helpers.js';
import {manager, projectList, project, task} from './taskManager.js';

function initOptions() {
  let options = `<div class="topnav">
    <button id="n_task">New</button>
    </div>`;
  helper.renderElement('#body', options);
}

function addFunctionality() {
  let buttons = document.querySelectorAll('.del');
  let id = 0;
  for(let i = 0; i < buttons.length; ++i)
  {
    buttons[i].addEventListener('click', e => {
      let currentProject = projectList.getProject(manager.viewLi());
      let id = parseInt(buttons[i].id);
      currentProject.deleteTask(currentProject.tasks[id]);
      buttons[i].parentNode.remove();
    });
  }
}

function rendertask(id, title, priority, date, desc)
{
  let body = `<div id="${id}" class="tasks">`;
  let delButton = `<button id="${id} "class="del">X</button><br>`;
  let task_title = `<h1>${title}</h1>`;
  let task_priority = `<h1>Priority: ${priority}</h1>`;
  let task_time = `<h4>Due: ${date}</h4>`;
  let description = `<p>${desc}</p>`;
  body += delButton + task_title + task_priority + task_time + description + '</div>';
  helper.renderElement('#wrapper', body);
}

function createtask(title, priority, time, desc) {

  if(!title || !priority || !time || !desc
    || projectList.getAllProjects().length <= 0)
    return;
  const newTask = new task(manager.getId(), title, priority, time, desc);
  let currentProject = projectList.getProject(manager.viewLi());
  currentProject.addTask(newTask);
  manager.incId();
  rendertask(newTask.id, title, priority, time, desc);
  addFunctionality();
}

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
  let time = document.getElementById('time').value = '';
  for(let i = 0; i < priority.length; ++i)
    priority[i].checked = false;
}

function formManager() {
  let form = document.getElementById('form');
  let btn = document.getElementById("n_task");
  let span = document.querySelector(".close");
  let submitButton = document.getElementById('f_button');

  btn.onclick = function() { helper.openForm(form); }
  span.onclick = function() { helper.closeForm(form); }

  submitButton.addEventListener('click', e => {
    collectInfo();
    resetForm();
    helper.closeForm(form);
});
  window.onclick = function(event) {
    if (event.target == form)
      helper.closeForm(form);
  }
}

function initTaskHandler() {
  let newTask = document.getElementById('n_task');
  newTask.onclick = function() { formManager(); }
}

export {initOptions, initTaskHandler, rendertask};
