import { listCountries } from "../countryObject";

// DOM CONSTS
const countrySelect = document.querySelector("#country");
const phoneInput = document.querySelector("#phone");
const zipInput = document.querySelector("#zip_code");

// MAIN FUNCTION
function setContactInformations() {
  insertOption();
  countrySelectOnInput();
}

// COMPONENTS FUNCTIONS

function countrySelectOnInput() {
  countrySelect.addEventListener("input", () => {
    listCountries.forEach((element) => {
      let country = element;
      if (countrySelect.value === country.value) {
        phoneInput.value = "";
        setPhoneConstraint(country);
      }
    });
  });

  function setPhoneConstraint(country) {
    phoneInput.placeholder = country.phonePlaceholder;
    phoneInput.addEventListener("keydown", (k) => {
      const input = k;
      const keycode = k.keyCode;
      onlyNumbersKeydown(keycode, input);
    });

    phoneInput.addEventListener("input", () => {
      const phoneValue = initInput(phoneInput);
      country.phoneValidation(phoneValue, phoneInput);

      const phoneRegex = new RegExp(country.phonePattern);
      if (!phoneRegex.test(phoneInput.value)) {
        phoneInput.setCustomValidity("Invalid");
      } else {
        phoneInput.setCustomValidity("");
      }
    });
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
