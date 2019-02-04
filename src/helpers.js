function renderElement(id, element) {
  let content = document.querySelector(id);
  content.innerHTML += element;
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

export {renderElement, closeForm, openForm};
