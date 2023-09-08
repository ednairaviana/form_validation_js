import { listCountries } from "../countryObject";

// DOM CONSTS
const countrySelect = document.querySelector("#country");
const phoneInput = document.querySelector("#phone");
const zipInput = document.querySelector("#zip_code");

// MAIN FUNCTION
function setContactInformations() {
  insertOption();
  countrySelectOnInput();
  setPhoneConstraint();
  setZipConstraint();
}

// COMPONENTS FUNCTIONS

let country;
function countrySelectOnInput() {
  countrySelect.addEventListener("input", () => {
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

function validateRegex(pattern, input) {
  const regex = new RegExp(pattern);
  if (!regex.test(input.value)) {
    input.setCustomValidity("Invalid");
  } else {
    input.setCustomValidity("");
  }
}

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

  let digit;
  digits.forEach((el) => {
    if (keycode === el) {
      digit = keycode;
    }
  });
  if (keycode !== digit || input.shiftKey) {
    input.preventDefault();
  }
}

export { setContactInformations };
