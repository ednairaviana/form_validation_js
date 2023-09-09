function createPopUp(input, text, validity) {
  const popUp = document.createElement("div");
  popUp.classList.add("popup");
  popUp.innerText = text;
  input.classList.add("_pop-on");

  if(validity) {
    popUp.classList.add("popup-ok")
  }

  return popUp;
}

function insertPopUp(input, text, validity) {
  const parent = input.parentElement;
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

export { insertPopUp, removePopUp };
