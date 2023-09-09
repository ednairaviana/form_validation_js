import { listCountries } from "../countryObject";
import { createCustomSelect } from "../dom_components/customSelect";

// DOM CONSTS
const countrySelect = document.querySelector("#country");
const phoneInput = document.querySelector("#phone");
const zipInput = document.querySelector("#zip_code");

// MAIN FUNCTION
function setContactInformations() {
  initContactInformations();
  createCustomSelect();
  countrySelectOnInput();
  setPhoneConstraint();
  setZipConstraint();
}

// SECOND FUNCTIONS

let country;
function countrySelectOnInput() {
  countrySelect.addEventListener("input", () => {
    ableInputs();
    phoneInput.value = "";
    zipInput.value = "";

    listCountries.forEach((element) => {
      if (countrySelect.value !== element.value) {
        return;
      } else {
        country = element;
      }
    });
    zipInput.placeholder = country.zipPlaceholder;
    phoneInput.placeholder = country.phonePlaceholder;
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

function initContactInformations() {
    countrySelect.value = "";
    phoneInput.value = "";
    zipInput.value = "";

    phoneInput.placeholder = "Select a country!";
    zipInput.placeholder = "Select a country!";

    disableInputs();
    insertOption();
}

// COMPONENT FUNCTIONS

function disableInputs() {
    phoneInput.disabled = true;
    zipInput.disabled = true;
}

function ableInputs() {
    phoneInput.disabled = false;
    zipInput.disabled = false;
}

function validateRegex(pattern, input) {
  const regex = new RegExp(pattern);
  if (!regex.test(input.value)) {
    input.setCustomValidity("Invalid");
    return;
  } else {
    input.setCustomValidity("");
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
