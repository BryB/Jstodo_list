import {initHeader} from './header.js';
import {tabManager} from './tabs.js';
import {initOptions, initTaskHandler} from './listOptions.js';
import {initFooter} from './footer.js';
import {renderContainer} from './listContainer.js';
import {initForm} from './initForm.js';
import {initTabs} from './initTabs.js';

/*TODO: gotta create a factory function to hold the lists and
 tasks.

refactor remId with regex

function task() {
  let
}
*/
const taskManager = (() => {
  let id = 0;
  let li = 0;
  let ids = [];
  let lists = [[]];
  const getId = () => `id${id}`;
  const getLi = () => `L${li}`;
  const incId = () => ++id;
  const incLi = () => ++li;
  const getIds = () => ids;
  const getLists = () => lists;
  const storeId = (list) => {
    lists[list].push(getId());
    ids.push(getId());
  };
  const remId = (list,id) => {
    id = id.split('');
    let index = id.slice(2).join('');
    lists = lists[list].splice(parseInt(index, 10), 0);
  };
  const verifyId = (ele) => {
    for(let i = 0; i < ids.length; ++i)
      if(ids[i] === ele)
        return true
    return false;
  };
  return {
    getId,
    getli,
    incId,
    incLi,
    getIds,
    getLists,
    storeId,
    verifyId,
    remId,
  };
})();

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
export{taskManager};
