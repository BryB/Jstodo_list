import {renderElement} from './helpers.js';

function initFooter() {
  let footer = `<footer><h3>Meticulously made
  and proudly displayed</h3></footer`;

  renderElement('#body', footer);
}

export {initFooter};
