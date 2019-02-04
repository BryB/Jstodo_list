import {renderElement, closeForm, openForm} from './helpers.js';

function createNewTab(name)
{
  if (!name)
    return;
  renderElement('.tabs', `<div><button class="tab">${name}</button></div>`);
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

  btn.onclick = function() { openForm(form); }

  submitButton.addEventListener('click', e => {
    collect_Info(title);
    resetInfo(title);
    closeForm(form);
  });
  window.onclick = function(event) {
    if (event.target == form)
      closeForm(form);
  }
}

function initTabHandler () {
  let tab = document.getElementById('add_tab');
  tab.onclick = function () { tabManager(); }
}

export {tabManager};
