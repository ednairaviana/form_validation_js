const listCountries = [];

class CountryConstraints {
  constructor(
    name,
    value,
    phoneLength,
    phonePattern,
    phonePlaceholder,
    zipLength,
    zipPattern,
    zipPlaceholder
  ) {
    this.name = name;
    this.value = value;

    this.phoneLength = phoneLength;
    this.phonePattern = phonePattern;
    this.phonePlaceholder = phonePlaceholder;
    this.phoneValidation;

    this.zipLength = zipLength;
    this.zipPattern = zipPattern;
    this.zipPlaceholder = zipPlaceholder;
    this.zipValidation;
  }
}

function createCountryConstraint(
  name,
  value,
  phoneLength,
  phonePattern,
  phonePlaceholder,
  zipLength,
  zipPattern,
  zipPlaceholder
) {
  const newCountry = new CountryConstraints(
    name,
    value,
    phoneLength,
    phonePattern,
    phonePlaceholder,
    zipLength,
    zipPattern,
    zipPlaceholder
  );
  newCountry.phoneValidation = phone;
  listCountries.push(newCountry);
}
