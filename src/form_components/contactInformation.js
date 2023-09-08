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
        console.log(country.value);
      }
    });
  });
}

function insertOption() {
  listCountries.forEach((country) => {
    const countryOption = new Option(country.name, country.value);
    countrySelect.add(countryOption);
  });
}

export { setContactInformations };
