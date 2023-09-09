import { listCountries } from "../countryObject";
import {
  createCustomSelect,
  dropContent,
} from "../dom_components/customSelect";
import { insertPopUp, okMessage } from "../dom_components/createPopup";

// DOM CONSTS
const countrySelect = document.querySelector("#country");
const phoneInput = document.querySelector("#phone");
const zipInput = document.querySelector("#zip_code");

// MAIN FUNCTION
function setContactInformations() {
  initContactInformations();
  createCustomSelect();
  selectCountry();
  setPhoneConstraint();
  setZipConstraint();
}

// SECOND FUNCTIONS
let country;

function selectCountry() {
  const optionNodes = dropContent.childNodes;

  optionNodes.forEach((option) => {
    option.addEventListener("click", () => {
      const optionValue = option.dataset.value;
      ableInputs();

      listCountries.forEach((element) => {
        if (optionValue !== element.value) {
          return;
        } else {
          country = element;
        }
      });

      countrySelect.value = optionValue;
      zipInput.placeholder = country.zipPlaceholder;
      phoneInput.placeholder = country.phonePlaceholder;
    });
  });
}

function setZipConstraint() {
  zipInput.addEventListener("keydown", (k) => {
    const input = k;
    const keycode = k.keyCode;
    onlyNumbersKeydown(keycode, input);
  });

  zipInput.addEventListener("input", () => {
    const zipValue = initInput(zipInput);
    country.zipValidation(zipValue, zipInput);

    validateRegex(country.zipPattern, zipInput);
  });
}

function setPhoneConstraint() {
  phoneInput.addEventListener("keydown", (k) => {
    const input = k;
    const keycode = k.keyCode;
    onlyNumbersKeydown(keycode, input);
  });

  phoneInput.addEventListener("input", () => {
    const phoneValue = initInput(phoneInput);
    country.phoneValidation(phoneValue, phoneInput);

    validateRegex(country.phonePattern, phoneInput);
  });
}

// COMPONENT FUNCTIONS

function initContactInformations() {
  countrySelect.value = "";
  phoneInput.value = "";
  zipInput.value = "";

  phoneInput.placeholder = "Select a country!";
  zipInput.placeholder = "Select a country!";

  disableInputs();
  insertOption();
}


function disableInputs() {
  phoneInput.disabled = true;
  zipInput.disabled = true;
}

function ableInputs() {
  phoneInput.disabled = false;
  zipInput.disabled = false;
  phoneInput.value = "";
  zipInput.value = "";
}

function validateRegex(pattern, input) {
  const regex = new RegExp(pattern);
  if (!regex.test(input.value)) {
    input.setCustomValidity("Invalid!");
    insertPopUp(input, "Invalid format!", false);
    return;
  } else {
    input.setCustomValidity("");
    okMessage(input);
  }
}

//

function insertOption() {
  listCountries.forEach((country) => {
    const countryOption = new Option(country.name, country.value);
    countrySelect.add(countryOption);
  });
}

function initInput(input) {
  let string = input.value;
  string = string.replace(/[()-\s]/g, "");

  input.value = string;
  return string;
}

function onlyNumbersKeydown(keycode, input) {
  let digits = [8, 3, 39, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57];

  if (!digits.includes(keycode) || input.shiftKey) {
    input.preventDefault();
  }
}

export { setContactInformations };
