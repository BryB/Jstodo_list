import * as helper from './helpers.js';
import {manager, project, projectList} from './taskManager.js';
import {rendertask} from './listoptions.js';

function deleteProject(id) {
  let project = projectList.getProject(id);

  if(manager.viewLi() === id)
    document.getElementById('wrapper').innerHTML = '';
  projectList.deleteProject(project);
  document.getElementById(`id${id}`).parentNode.remove();
}

function renderProject(id) {
  let project = projectList.getProject(helper.translateId(id, projectList.getAllProjects()));
  let tasks = project.tasks;
  document.getElementById('wrapper').innerHTML = '';
  manager.setLi(id);
  for(let i = 0; i < tasks.length; ++i)
    rendertask(tasks[i].id, tasks[i].title,
                tasks[i].priority, tasks[i].date, tasks[i].description);
}

function addFunctionality () {
  let del_Buttons = document.querySelectorAll(`.del_list`);
  let buttons = document.querySelectorAll('.list');
  let id = 0;
  for(let i = 0; i < del_Buttons.length; ++i)
  {
    del_Buttons[i].addEventListener('click', e => {
      id = parseInt(buttons[i].id.split('').slice(2).join(''));
      deleteProject(id);
    });
  }
  for(let i = 0; i < buttons.length; ++i)
  {
    buttons[i].addEventListener('click', e => {
      id = parseInt(buttons[i].id.split('').slice(2).join(''));
      renderProject(id)
    });
  }
}

function createNewTab(name)
{
  if (!name)
    return;
  const newProject = new project(name);
  projectList.addProject(newProject);
  manager.incLi();
  manager.setLi(newProject.id);
  let newTab = `<div class="tab"><button id="id${newProject.id}"class="del_list">x</button>
                  <div>
                    <button id="id${newProject.id}" class="list">${newProject.name}</button>
                  </div>
                </div>`;
  helper.renderElement('.tabs', newTab);
  addFunctionality();
}

function collect_Info(info) {
  createNewTab(info.value);
}

function resetInfo (info) {
  info.value = '';
}

function tabManager () {
  let form = document.getElementById('tab_form');
  let btn = document.getElementById('add_tab');
  let submitButton = document.getElementById('tab_submit');
  let title = document.getElementById('tab_title');

  btn.onclick = function() { helper.openForm(form); }

  submitButton.addEventListener('click', e => {
    collect_Info(title);
    resetInfo(title);
    helper.closeForm(form);
  });
  window.onclick = function(event) {
    if (event.target == form)
      helper.closeForm(form);
  }
}

function initTabHandler () {
  let tab = document.getElementById('add_tab');
  tab.onclick = function () { tabManager(); }
}

export {tabManager};
