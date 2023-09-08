import { createCountryConstraint, listCountries } from "./countryObject";

// USA
createCountryConstraint(
  "United States",
  "usa",
  "14",
  /^(1\s?\(\d{3}\)\s?|1\s\d{3}[\s-]?|\(\d{3}\)\s?|\d{3}[\s-]?)\d{3}[\s-]?\d{4}$/,
  "(123) 123-1234",
  "10",
  /^\d{5}(?:[-\s]\d{4})?$/,
  "12345-1234",
  "phone validation",
  "zip validation"
);

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
  "phone validation",
  "zip validation"
);

function testeConstraint() {
  listCountries.forEach((el) => {
    console.log(el)
  });
}

export {testeConstraint}