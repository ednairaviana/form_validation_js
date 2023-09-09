import {
  insertPopUp,
  removePopUp,
  okMessage,
} from "../dom_components/createPopup";

const fsNameInput = document.querySelector("#f_name");
const lsNameInput = document.querySelector("#l_name");
const birthInput = document.querySelector("#birth");

function setPersonalInformations() {
  checkName(fsNameInput);
  checkName(lsNameInput);
  checkBirth();
}

function checkName(input) {
  input.addEventListener("input", () => {
    const valueArray = input.value.split("");

    if (valueArray.includes(" ")) {
      console.log("a");
      insertPopUp(input, "No spaces", false);
      input.setCustomValidity("Invalid");
    } else if (valueArray.length < 2) {
      insertPopUp(input, "Min 2 characteres", false);
      input.setCustomValidity("Invalid");
    } else if (input.validity.patternMismatch) {
      insertPopUp(input, "Invalid characteres", false);
      input.setCustomValidity("Invalid");
    } else {
      okMessage(input);
      input.setCustomValidity("");
    }
  });
}

function checkBirth() {
  birthInput.addEventListener("input", () => {
    const birthday = new Date(birthInput.value);
    const diff = new Date().getTime() - birthday.getTime();
    const year = Math.floor(diff / 31556952000);

    if (year < 0) {
      birthInput.setCustomValidity("Invalid!");
      insertPopUp(birthInput, "Did you come from the future?", false);
    } else if (year > 100) {
      birthInput.setCustomValidity("Invalid!");
      insertPopUp(birthInput, "You are not that old!", false);
    } else if (year < 15) {
      birthInput.setCustomValidity("Invalid!");
      insertPopUp(birthInput, "Min age is 15 years!", false);
    } else {
      birthInput.setCustomValidity("");
      okMessage(birthInput);
    }
  });
}

export { setPersonalInformations, fsNameInput, lsNameInput, birthInput };
