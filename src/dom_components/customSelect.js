const customSelect = document.querySelector(".custom-select");
const dropBtn = document.querySelector(".drop-btn");
const dropContent = document.createElement("div");
dropContent.classList.add("drop-content");
customSelect.insertAdjacentElement("beforeend", dropContent);

let isOpen = false;

// MAIN FUNCTION
function createCustomSelect() {
  insertOption();
  dropBtnOnClick();
}

// COMPONENTS FUNCTIONS
function dropBtnOnClick() {
  dropBtn.addEventListener("click", () => {
    clickDropdown();
  });
}

function insertOption() {
  const nodeOptions = document.querySelectorAll("option");
  nodeOptions.forEach((option) => {
    createOption(option.innerText, option.value);
  });
}

function createOption(text, value) {
  const dropOption = document.createElement("div");
  dropOption.classList.add("drop-option");
  dropOption.innerText = text;
  dropOption.setAttribute("data-value", value);

  optionOnClick();

  dropContent.insertAdjacentElement("beforeend", dropOption);

  function optionOnClick() {
    dropOption.addEventListener("click", () => {
      dropBtn.innerText = dropOption.innerText;
      console.log(dropOption.dataset.value)
      clickDropdown();
    });
  }
}

function clickDropdown() {
  if (isOpen === false) {
    dropBtn.classList.add("_active");
    dropContent.style.display = "block";
    isOpen = true;
  } else {
    dropBtn.classList.remove("_active");
    dropContent.style.display = "none";
    isOpen = false;
  }
}

export { createCustomSelect };
