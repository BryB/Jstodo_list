import {renderElement} from './helpers.js';

function initTabManager()
{
  let header = `<div class="tab-header">
                <h1>New List</h1>
                </div>`;
  let body = `<div class="tab-body">
                <form method="GET">
                  <input id="tab_title" class="textField" name="title" type="text"
                  placeholder="Title" required><br>
                </form>
              </div>`;
  let footer = `<div class="tab-footer">
                <button id="tab_submit" class="tab-btn" type="submit">
                <h1>Submit</h1>
                </button>
                </div>`;
  let content = header + body + footer;
  renderElement(".tab-content", content);
}

function initTabForm() {
  let container = `<div id="tab_form" class="tab-form">
                    <div class="tab-content">
                    </div>
                  </div>`;
  renderElement('#body', container);
  initTabManager();
}

function initTabs() {
  let addtab = `<div style="padding-left: 1rem;
                            background-color: #e25248;">
                  <button id="add_tab" class="tab">+</button>
                </div>`;
  let tablist = `<div class="tabs">`;
  let defaultTab = `<div class="tab"><button class="del_list">x</button>
                  <div>
                    <button class="list">List</button>
                  </div>
                </div>`;
  tablist += defaultTab + `</div>`;
  initTabForm();
  renderElement('#body', addtab);
  renderElement('#body', tablist);
}

export {initTabs};
