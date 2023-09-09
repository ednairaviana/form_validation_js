function createPopUp(input, text, validity) {
  const popUp = document.createElement("div");
  popUp.classList.add("popup");
  popUp.innerText = text;
  input.classList.add("_pop-on");

  if (validity) {
    popUp.classList.add("popup-ok");
  }

  return popUp;
}

function insertPopUp(input, text, validity) {
  const parent = input.parentElement;
  removePopUp(input);
  parent.appendChild(createPopUp(input, text, validity));
}

function removePopUp(input) {
  const popUp = document.querySelector(".popup");
  const parent = input.parentElement;
  if (parent.contains(popUp)) {
    parent.removeChild(popUp);
    input.classList.remove("_pop-on");
  }
}

function okMessage(input) {
  insertPopUp(input, "It's ok!", true);
  setTimeout(() => {
    removePopUp(input);
  }, 400);
}

export { insertPopUp, removePopUp, okMessage };
