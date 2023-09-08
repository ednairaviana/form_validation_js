import { listCountries } from "../countryObject";

const countrySelect = document.querySelector("#country");
function setContactInformations() {
    insertOption();
}

function insertOption() {
    listCountries.forEach((country) => {
      const countryOption = new Option(country.name, country.value);
      countrySelect.add(countryOption);
    });
}

export {setContactInformations}
