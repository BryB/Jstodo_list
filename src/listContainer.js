import {renderElement} from './helpers.js';

function renderContainer() {
  let container = `<section id="container">
  <section id="wrapper">
  </section>
  </section>`;

  renderElement('#body', container);
}

export {renderContainer};
