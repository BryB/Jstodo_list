import {initHeader} from './header.js';
import {initTabs} from './tabs.js';
import {initOptions, initTaskHandlers} from './listOptions.js';
import {initFooter} from './footer.js';
import {renderContainer} from './listContainer.js';

function toDoList() {
  initHeader();
  initTabs();
  initOptions();
  renderContainer();
  initFooter();
  initTaskHandlers();
}

toDoList();
