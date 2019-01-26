import {renderElement} from './helpers.js';


function createnewTab(i)
{

  let newTab = `<button class="tab">${i}</button>`;
  renderElement('.tabs', newTab);
}

function createTab() {
  let createButton = document.getElementById('add');
  createButton.addEventListener('click', e => {
    let i = 0;
    console.log('asdf');
    createnewTab(i++);
  });
}

function initTabs() {
  let tablist = `<div class="tabs">`;
  let addTab = `<div style="padding-left: 1rem;">
    <button id="add" class="tab">+</button>
  </div>`;
  let defaultTab = `<button class="tab">List</button>`;
  tablist += addTab + defaultTab + `</div>`;
  renderElement('#body', tablist);
}

export {initTabs, createTab};
