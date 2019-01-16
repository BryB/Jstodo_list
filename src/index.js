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
  const getIds = () => ids;
  const storeId = () => {
    ids.push(getId());
  };
  const verifyId = (ele) => {
    for(let i = 0; i < ids.length; ++i)
      if(ids[i] === ele)
        return true
    return false;
  };
  return {
    getId,
    incId,
    storeId,
    verifyId,
    getIds,
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
