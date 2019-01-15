import {initHeader} from './header.js';
import {initTabs} from './tabs.js';
import {initOptions, initTaskHandler} from './listOptions.js';
import {initFooter} from './footer.js';
import {renderContainer} from './listContainer.js';

const taskManager = (() => {
  let id = 0;
  let ids = [];
  const getId = () => `id${id}`;
  const incId = () => ++id;
  const storeId = () => {
    ids.push(getId());
  };
  const retrieveId = (ele) => {
    return ids.filter(id => id.indexof(ele) > -1);
  };
  return {
    getId,
    incId,
    storeId,
    retrieveId,
  };
})();

function toDoList() {
  initHeader();
  initTabs();
  initOptions();
  renderContainer();
  initFooter();
  initTaskHandler();
}


toDoList();
export{taskManager};
