import {
  fsNameInput,
  lsNameInput,
  birthInput,
} from "../form_components/personalInformations";
import { phoneInput, zipInput, countrySelect } from "../form_components/contactInformation";

const firstStep = document.querySelector("#step-1");
const secondStep = document.querySelector("#step-2");
const thirdStep = document.querySelector("#step-3");

const firstBtn = document.querySelector("#btn-1");
const secondBtn = document.querySelector("#btn-2");
const submitBtn = document.querySelector("#btn-3");

function checkValidity() {
  const firstInputs = [fsNameInput, lsNameInput, birthInput];
  const secondInputs = [ countrySelect, phoneInput, zipInput];

  firstBtn.addEventListener("click", () => {
    if (firstInputs.every(checkInputsValidity)) {
        firstStep.style.display = "none";
        secondStep.style.display = "flex";
    }
  });

  secondBtn.addEventListener("click", ()=> {
    if (secondInputs.every(checkInputsValidity)) {
      secondStep.style.display = "none";
      thirdStep.style.display = "flex";
    }
  });

  function checkInputsValidity(input) {
    return input.validity.valid;
  }
}

export { checkValidity };
