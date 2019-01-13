import {renderElement} from './helpers.js';

function initHeader () {
  let header = `<header><h1>Todo<h1></header>`;
  renderElement('#body', header);

}
export {initHeader};
