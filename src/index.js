import {initHeader} from './header.js';
import {tabManager} from './tabs.js';
import {initOptions, initTaskHandler} from './listoptions.js';
import {initFooter} from './footer.js';
import {renderContainer} from './listContainer.js';
import {initForm} from './initForm.js';
import {initTabs} from './initTabs.js';

function toDoList() {
  initHeader();
  initTabs();
  initOptions();
  renderContainer();
  initFooter();
  initForm();
  initTaskHandler();
  tabManager();
}


toDoList();
