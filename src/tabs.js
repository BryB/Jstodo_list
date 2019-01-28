import {renderElement, closeForm, openForm} from './helpers.js';

function createNewTab(name)
{
  renderElement('.tabs', `<button class="tab">${name}</button>`);
}

function col_Info() {
  let title = document.getElementById('tab_title').value;
  createNewTab(title);
}

function resetInfo () {
  let title = document.getElementById('tab_title').value = '';
}

function tabManager () {
  let form = document.getElementById('tab_form');
  let btn = document.getElementById("add_tab");
  let submitButton = document.getElementById('tab_submit');

  btn.onclick = function() { openForm(form); }

  submitButton.addEventListener('click', e => {
    col_Info();
    resetInfo();
    closeForm(form);
  });
  window.onclick = function(event) {
    if (event.target == form)
      closeForm(form);
  }
}

function initTabManager()
{
  let header = `<div class="tab-header">
                <h1>New List</h1>
                </div>`;
  let body = `<div class="tab-body">
                <form method="GET">
                  <input id="tab_title" class="textField" name="title" type="text"
                  placeholder="Title" required><br>
                </form>
              </div>`;
  let footer = `<div class="tab-footer">
                <button id="tab_submit" class="tab-btn" type="submit">
                <h1>Submit</h1>
                </button>
                </div>`;
  let content = header + body + footer;
  renderElement(".tab-content", content);
}

function initTabForm() {
  let container = `<div id="tab_form" class="tab-form">
                    <div class="tab-content">
                    </div>
                  </div>`;
  renderElement('#body', container);
  initTabManager();
}


function initTabs() {
  let tablist = `<div class="tabs">`;
  let addTab = `<div style="padding-left: 1rem;">
    <button id="add_tab" class="tab">+</button>
  </div>`;
  let defaultTab = `<button class="tab">List</button>`;
  tablist += addTab + defaultTab + `</div>`;
  initTabForm();
  renderElement('#body', tablist);
}

export {initTabs, tabManager};
