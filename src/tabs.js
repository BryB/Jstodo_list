import {renderElement} from './helpers.js';

function initTabs() {
  let tabs = `<div id="tabs"><button id='tab'>+</button></div>`;
  renderElement('#body', tabs);
}

export {initTabs};
