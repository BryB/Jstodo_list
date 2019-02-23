function renderElement(id, element) {
  let content = document.querySelector(id);
  content.innerHTML += element;
}

function translateId(id, projects) {
  for(let i = 0; i < projects.length; ++i)
    if(projects[i].id == id)
      return i;
}

function closeForm(form) {
  if(!form)
    return;
  form.style.display = "none";
}
function openForm(form) {
  if(!form)
    return;
  form.style.display = 'block';
}

export {renderElement, closeForm, openForm, translateId};
