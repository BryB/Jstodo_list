import {renderElement} from './helpers.js';

function initTabs() {
  let addTab = `<div id="tabs"><button id='tab'>+</button></div>`;
  let defaultTab = `<div id="tabs"><button id='tab'>List</button></div>`;
  let tabs = addTab + defaultTab
  renderElement('#body', tabs);
}

export {initTabs};
