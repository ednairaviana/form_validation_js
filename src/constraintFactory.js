import { createCountryConstraint, listCountries } from "./countryObject";


// BRZ
createCountryConstraint(
  "Brazil",
  "brz",
  "14",
  /^(\(?[0-9]{2}\)?)? ?([0-9]{4,5})-?([0-9]{4})$/gm,
  "(12) 1234-1234",
  "9",
  /^\d{5}-?\d{3}$/,
  "12345-123",
  (value, input) => {
    if (value.length > 2) {
      input.value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}`;
    }
    if (value.length > 6) {
      input.value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(
        6,
        10
      )}`;
    }
  },
  (value, input) => {
    if (value.length > 5) {
      input.value = `${value.slice(0, 5)}-${value.slice(5, 8)}`;
    }
  }
);

// USA
createCountryConstraint(
  "United States",
  "usa",
  "14",
  /^(1\s?\(\d{3}\)\s?|1\s\d{3}[\s-]?|\(\d{3}\)\s?|\d{3}[\s-]?)\d{3}[\s-]?\d{4}$/,
  "(123) 123-1234",
  "11",
  /^\d{5}(?:[-\s]\d{4})?$/,
  "12345-1234",
  (value, input) => {
    if (value.length > 3) {
      input.value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}`;
    }
    if (value.length > 6) {
      input.value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(
        6,
        10
      )}`;
    }
  },
  (value, input) => {
    if (value.length > 5) {
      input.value = `${value.slice(0, 5)}-${value.slice(5, 9)}`;
    }
  }
);

function exportListCountry() {
    return listCountries
}

export { exportListCountry };
