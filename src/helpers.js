function renderElement(id, element) {
  let content = document.querySelector(id);
  content.innerHTML += element;
}

export {renderElement};
