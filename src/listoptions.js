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
  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.getElementById("n_task");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

function deleteTask() {

}

function addTask() {
  document.getElementById('n_task').addEventListener('click', e =>
  { collectInfo(); });
  document.getElementById('d_task').addEventListener('click', e =>
  { console.log('deleted'); });
}

export {initOptions, addTask};
