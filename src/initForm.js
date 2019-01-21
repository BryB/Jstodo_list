import {renderElement} from './helpers.js';

function initFormContent() {
  let inputFields = `<form method="GET">
                      <input id="title" class="textField" name="title" type="text"
                        placeholder="Title" required><br>
                      <br>
                      <label>Priority</label>
                      <div class="column">
                        <input id="priority" type="radio" name="priority" value="Low">Low
                        <input id="priority" type="radio" name="priority" value="Medium">Medium
                        <input id="priority" type="radio" name="priority" value="High">High
                      </div>
                      <input id="time" class="textField" name="time" type='datetime-local' required><br>
                      <br>
                      <textarea id="desc" class="textField" rows="10" name="description"
                        placeholder="Description" required></textarea>
                    </form>`;
  renderElement(".form-body", inputFields);
}

function initContentBody() {
    let header = `<div class="form-header">
                <span class="close">&times;</span>
                <h1>Create Task</h1>
                </div>`;
  let body = `<div class="form-body"></div>`;
  let footer = `<div class="form-footer">
                  <button id="f_button" class="btn" type="submit">
                   <h1>Submit</h1>
                  </button>
                </div>`;
  let content = header + body + footer;
  renderElement('.form-content', content);
  initFormContent();
}

function initForm() {
  let container = `<div id="form" class="form"><div class="form-content"></div></div>`;
  renderElement('#body', container);
  initContentBody();
}

export {initForm};
