/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constraintFactory.js":
/*!**********************************!*\
  !*** ./src/constraintFactory.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   exportListCountry: () => (/* binding */ exportListCountry)
/* harmony export */ });
/* harmony import */ var _countryObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countryObject */ "./src/countryObject.js");



// BRZ
(0,_countryObject__WEBPACK_IMPORTED_MODULE_0__.createCountryConstraint)(
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
(0,_countryObject__WEBPACK_IMPORTED_MODULE_0__.createCountryConstraint)(
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
    return _countryObject__WEBPACK_IMPORTED_MODULE_0__.listCountries
}




/***/ }),

/***/ "./src/countryObject.js":
/*!******************************!*\
  !*** ./src/countryObject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCountryConstraint: () => (/* binding */ createCountryConstraint),
/* harmony export */   listCountries: () => (/* binding */ listCountries)
/* harmony export */ });
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
  zipPlaceholder,
	phone,
	zip
) {
  const newCountry = new CountryConstraints(
    name,
    value,
    phoneLength,
    phonePattern,
    phonePlaceholder,
    zipLength,
    zipPattern,
    zipPlaceholder,
  );
  newCountry.phoneValidation = phone;
  newCountry.zipValidation = zip;

  listCountries.push(newCountry);
}




/***/ }),

/***/ "./src/form_components/contactInformation.js":
/*!***************************************************!*\
  !*** ./src/form_components/contactInformation.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setContactInformations: () => (/* binding */ setContactInformations)
/* harmony export */ });
/* harmony import */ var _countryObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../countryObject */ "./src/countryObject.js");


// DOM CONSTS
const countrySelect = document.querySelector("#country");
const phoneInput = document.querySelector("#phone");
const zipInput = document.querySelector("#zip_code");

// MAIN FUNCTION
function setContactInformations() {
  initContactInformations();
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

    _countryObject__WEBPACK_IMPORTED_MODULE_0__.listCountries.forEach((element) => {
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

    insertOption();
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
  _countryObject__WEBPACK_IMPORTED_MODULE_0__.listCountries.forEach((country) => {
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




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_components_contactInformation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form_components/contactInformation */ "./src/form_components/contactInformation.js");
/* harmony import */ var _constraintFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constraintFactory */ "./src/constraintFactory.js");



(0,_constraintFactory__WEBPACK_IMPORTED_MODULE_1__.exportListCountry)();
(0,_form_components_contactInformation__WEBPACK_IMPORTED_MODULE_0__.setContactInformations)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOOEU7QUFDdEI7QUFDeEQ7QUFDQSxxRUFBaUI7QUFDakIsMkZBQXNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9ybV92YWxpZGF0aW9uX3Byb2plY3QvLi9zcmMvY29uc3RyYWludEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vZm9ybV92YWxpZGF0aW9uX3Byb2plY3QvLi9zcmMvY291bnRyeU9iamVjdC5qcyIsIndlYnBhY2s6Ly9mb3JtX3ZhbGlkYXRpb25fcHJvamVjdC8uL3NyYy9mb3JtX2NvbXBvbmVudHMvY29udGFjdEluZm9ybWF0aW9uLmpzIiwid2VicGFjazovL2Zvcm1fdmFsaWRhdGlvbl9wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Zvcm1fdmFsaWRhdGlvbl9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mb3JtX3ZhbGlkYXRpb25fcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Zvcm1fdmFsaWRhdGlvbl9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZm9ybV92YWxpZGF0aW9uX3Byb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ291bnRyeUNvbnN0cmFpbnQsIGxpc3RDb3VudHJpZXMgfSBmcm9tIFwiLi9jb3VudHJ5T2JqZWN0XCI7XHJcblxyXG5cclxuLy8gQlJaXHJcbmNyZWF0ZUNvdW50cnlDb25zdHJhaW50KFxyXG4gIFwiQnJhemlsXCIsXHJcbiAgXCJicnpcIixcclxuICBcIjE0XCIsXHJcbiAgL14oXFwoP1swLTldezJ9XFwpPyk/ID8oWzAtOV17NCw1fSktPyhbMC05XXs0fSkkL2dtLFxyXG4gIFwiKDEyKSAxMjM0LTEyMzRcIixcclxuICBcIjlcIixcclxuICAvXlxcZHs1fS0/XFxkezN9JC8sXHJcbiAgXCIxMjM0NS0xMjNcIixcclxuICAodmFsdWUsIGlucHV0KSA9PiB7XHJcbiAgICBpZiAodmFsdWUubGVuZ3RoID4gMikge1xyXG4gICAgICBpbnB1dC52YWx1ZSA9IGAoJHt2YWx1ZS5zbGljZSgwLCAyKX0pICR7dmFsdWUuc2xpY2UoMiwgNil9YDtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZS5sZW5ndGggPiA2KSB7XHJcbiAgICAgIGlucHV0LnZhbHVlID0gYCgke3ZhbHVlLnNsaWNlKDAsIDIpfSkgJHt2YWx1ZS5zbGljZSgyLCA2KX0tJHt2YWx1ZS5zbGljZShcclxuICAgICAgICA2LFxyXG4gICAgICAgIDEwXHJcbiAgICAgICl9YDtcclxuICAgIH1cclxuICB9LFxyXG4gICh2YWx1ZSwgaW5wdXQpID0+IHtcclxuICAgIGlmICh2YWx1ZS5sZW5ndGggPiA1KSB7XHJcbiAgICAgIGlucHV0LnZhbHVlID0gYCR7dmFsdWUuc2xpY2UoMCwgNSl9LSR7dmFsdWUuc2xpY2UoNSwgOCl9YDtcclxuICAgIH1cclxuICB9XHJcbik7XHJcblxyXG4vLyBVU0FcclxuY3JlYXRlQ291bnRyeUNvbnN0cmFpbnQoXHJcbiAgXCJVbml0ZWQgU3RhdGVzXCIsXHJcbiAgXCJ1c2FcIixcclxuICBcIjE0XCIsXHJcbiAgL14oMVxccz9cXChcXGR7M31cXClcXHM/fDFcXHNcXGR7M31bXFxzLV0/fFxcKFxcZHszfVxcKVxccz98XFxkezN9W1xccy1dPylcXGR7M31bXFxzLV0/XFxkezR9JC8sXHJcbiAgXCIoMTIzKSAxMjMtMTIzNFwiLFxyXG4gIFwiMTFcIixcclxuICAvXlxcZHs1fSg/OlstXFxzXVxcZHs0fSk/JC8sXHJcbiAgXCIxMjM0NS0xMjM0XCIsXHJcbiAgKHZhbHVlLCBpbnB1dCkgPT4ge1xyXG4gICAgaWYgKHZhbHVlLmxlbmd0aCA+IDMpIHtcclxuICAgICAgaW5wdXQudmFsdWUgPSBgKCR7dmFsdWUuc2xpY2UoMCwgMyl9KSAke3ZhbHVlLnNsaWNlKDMsIDYpfWA7XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUubGVuZ3RoID4gNikge1xyXG4gICAgICBpbnB1dC52YWx1ZSA9IGAoJHt2YWx1ZS5zbGljZSgwLCAzKX0pICR7dmFsdWUuc2xpY2UoMywgNil9LSR7dmFsdWUuc2xpY2UoXHJcbiAgICAgICAgNixcclxuICAgICAgICAxMFxyXG4gICAgICApfWA7XHJcbiAgICB9XHJcbiAgfSxcclxuICAodmFsdWUsIGlucHV0KSA9PiB7XHJcbiAgICBpZiAodmFsdWUubGVuZ3RoID4gNSkge1xyXG4gICAgICBpbnB1dC52YWx1ZSA9IGAke3ZhbHVlLnNsaWNlKDAsIDUpfS0ke3ZhbHVlLnNsaWNlKDUsIDkpfWA7XHJcbiAgICB9XHJcbiAgfVxyXG4pO1xyXG5cclxuZnVuY3Rpb24gZXhwb3J0TGlzdENvdW50cnkoKSB7XHJcbiAgICByZXR1cm4gbGlzdENvdW50cmllc1xyXG59XHJcblxyXG5leHBvcnQgeyBleHBvcnRMaXN0Q291bnRyeSB9O1xyXG4iLCJjb25zdCBsaXN0Q291bnRyaWVzID0gW107XHJcblxyXG5jbGFzcyBDb3VudHJ5Q29uc3RyYWludHMge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgbmFtZSxcclxuICAgIHZhbHVlLFxyXG4gICAgcGhvbmVMZW5ndGgsXHJcbiAgICBwaG9uZVBhdHRlcm4sXHJcbiAgICBwaG9uZVBsYWNlaG9sZGVyLFxyXG4gICAgemlwTGVuZ3RoLFxyXG4gICAgemlwUGF0dGVybixcclxuICAgIHppcFBsYWNlaG9sZGVyXHJcbiAgKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG5cclxuICAgIHRoaXMucGhvbmVMZW5ndGggPSBwaG9uZUxlbmd0aDtcclxuICAgIHRoaXMucGhvbmVQYXR0ZXJuID0gcGhvbmVQYXR0ZXJuO1xyXG4gICAgdGhpcy5waG9uZVBsYWNlaG9sZGVyID0gcGhvbmVQbGFjZWhvbGRlcjtcclxuICAgIHRoaXMucGhvbmVWYWxpZGF0aW9uO1xyXG5cclxuICAgIHRoaXMuemlwTGVuZ3RoID0gemlwTGVuZ3RoO1xyXG4gICAgdGhpcy56aXBQYXR0ZXJuID0gemlwUGF0dGVybjtcclxuICAgIHRoaXMuemlwUGxhY2Vob2xkZXIgPSB6aXBQbGFjZWhvbGRlcjtcclxuICAgIHRoaXMuemlwVmFsaWRhdGlvbjtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvdW50cnlDb25zdHJhaW50KFxyXG4gIG5hbWUsXHJcbiAgdmFsdWUsXHJcbiAgcGhvbmVMZW5ndGgsXHJcbiAgcGhvbmVQYXR0ZXJuLFxyXG4gIHBob25lUGxhY2Vob2xkZXIsXHJcbiAgemlwTGVuZ3RoLFxyXG4gIHppcFBhdHRlcm4sXHJcbiAgemlwUGxhY2Vob2xkZXIsXHJcblx0cGhvbmUsXHJcblx0emlwXHJcbikge1xyXG4gIGNvbnN0IG5ld0NvdW50cnkgPSBuZXcgQ291bnRyeUNvbnN0cmFpbnRzKFxyXG4gICAgbmFtZSxcclxuICAgIHZhbHVlLFxyXG4gICAgcGhvbmVMZW5ndGgsXHJcbiAgICBwaG9uZVBhdHRlcm4sXHJcbiAgICBwaG9uZVBsYWNlaG9sZGVyLFxyXG4gICAgemlwTGVuZ3RoLFxyXG4gICAgemlwUGF0dGVybixcclxuICAgIHppcFBsYWNlaG9sZGVyLFxyXG4gICk7XHJcbiAgbmV3Q291bnRyeS5waG9uZVZhbGlkYXRpb24gPSBwaG9uZTtcclxuICBuZXdDb3VudHJ5LnppcFZhbGlkYXRpb24gPSB6aXA7XHJcblxyXG4gIGxpc3RDb3VudHJpZXMucHVzaChuZXdDb3VudHJ5KTtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlQ291bnRyeUNvbnN0cmFpbnQsIGxpc3RDb3VudHJpZXMgfTtcclxuIiwiaW1wb3J0IHsgbGlzdENvdW50cmllcyB9IGZyb20gXCIuLi9jb3VudHJ5T2JqZWN0XCI7XHJcblxyXG4vLyBET00gQ09OU1RTXHJcbmNvbnN0IGNvdW50cnlTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvdW50cnlcIik7XHJcbmNvbnN0IHBob25lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bob25lXCIpO1xyXG5jb25zdCB6aXBJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjemlwX2NvZGVcIik7XHJcblxyXG4vLyBNQUlOIEZVTkNUSU9OXHJcbmZ1bmN0aW9uIHNldENvbnRhY3RJbmZvcm1hdGlvbnMoKSB7XHJcbiAgaW5pdENvbnRhY3RJbmZvcm1hdGlvbnMoKTtcclxuICBjb3VudHJ5U2VsZWN0T25JbnB1dCgpO1xyXG4gIHNldFBob25lQ29uc3RyYWludCgpO1xyXG4gIHNldFppcENvbnN0cmFpbnQoKTtcclxufVxyXG5cclxuLy8gQ09NUE9ORU5UUyBGVU5DVElPTlNcclxuXHJcbmxldCBjb3VudHJ5O1xyXG5mdW5jdGlvbiBjb3VudHJ5U2VsZWN0T25JbnB1dCgpIHtcclxuICBjb3VudHJ5U2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICBwaG9uZUlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgIHppcElucHV0LnZhbHVlID0gXCJcIjtcclxuXHJcbiAgICBsaXN0Q291bnRyaWVzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgaWYgKGNvdW50cnlTZWxlY3QudmFsdWUgIT09IGVsZW1lbnQudmFsdWUpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY291bnRyeSA9IGVsZW1lbnQ7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgemlwSW5wdXQucGxhY2Vob2xkZXIgPSBjb3VudHJ5LnppcFBsYWNlaG9sZGVyO1xyXG4gICAgcGhvbmVJbnB1dC5wbGFjZWhvbGRlciA9IGNvdW50cnkucGhvbmVQbGFjZWhvbGRlcjtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0WmlwQ29uc3RyYWludCgpIHtcclxuICB6aXBJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoaykgPT4ge1xyXG4gICAgY29uc3QgaW5wdXQgPSBrO1xyXG4gICAgY29uc3Qga2V5Y29kZSA9IGsua2V5Q29kZTtcclxuICAgIG9ubHlOdW1iZXJzS2V5ZG93bihrZXljb2RlLCBpbnB1dCk7XHJcbiAgfSk7XHJcblxyXG4gIHppcElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICBjb25zdCB6aXBWYWx1ZSA9IGluaXRJbnB1dCh6aXBJbnB1dCk7XHJcbiAgICBjb3VudHJ5LnppcFZhbGlkYXRpb24oemlwVmFsdWUsIHppcElucHV0KTtcclxuXHJcbiAgICB2YWxpZGF0ZVJlZ2V4KGNvdW50cnkuemlwUGF0dGVybiwgemlwSW5wdXQpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRQaG9uZUNvbnN0cmFpbnQoKSB7XHJcbiAgcGhvbmVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoaykgPT4ge1xyXG4gICAgY29uc3QgaW5wdXQgPSBrO1xyXG4gICAgY29uc3Qga2V5Y29kZSA9IGsua2V5Q29kZTtcclxuICAgIG9ubHlOdW1iZXJzS2V5ZG93bihrZXljb2RlLCBpbnB1dCk7XHJcbiAgfSk7XHJcblxyXG4gIHBob25lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgIGNvbnN0IHBob25lVmFsdWUgPSBpbml0SW5wdXQocGhvbmVJbnB1dCk7XHJcbiAgICBjb3VudHJ5LnBob25lVmFsaWRhdGlvbihwaG9uZVZhbHVlLCBwaG9uZUlucHV0KTtcclxuXHJcbiAgICB2YWxpZGF0ZVJlZ2V4KGNvdW50cnkucGhvbmVQYXR0ZXJuLCBwaG9uZUlucHV0KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdENvbnRhY3RJbmZvcm1hdGlvbnMoKSB7XHJcbiAgICBjb3VudHJ5U2VsZWN0LnZhbHVlID0gXCJcIjtcclxuICAgIHBob25lSW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgemlwSW5wdXQudmFsdWUgPSBcIlwiO1xyXG5cclxuICAgIHBob25lSW5wdXQucGxhY2Vob2xkZXIgPSBcIlNlbGVjdCBhIGNvdW50cnkhXCI7XHJcbiAgICB6aXBJbnB1dC5wbGFjZWhvbGRlciA9IFwiU2VsZWN0IGEgY291bnRyeSFcIjtcclxuXHJcbiAgICBpbnNlcnRPcHRpb24oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVSZWdleChwYXR0ZXJuLCBpbnB1dCkge1xyXG4gIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChwYXR0ZXJuKTtcclxuICBpZiAoIXJlZ2V4LnRlc3QoaW5wdXQudmFsdWUpKSB7XHJcbiAgICBpbnB1dC5zZXRDdXN0b21WYWxpZGl0eShcIkludmFsaWRcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGlucHV0LnNldEN1c3RvbVZhbGlkaXR5KFwiXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0T3B0aW9uKCkge1xyXG4gIGxpc3RDb3VudHJpZXMuZm9yRWFjaCgoY291bnRyeSkgPT4ge1xyXG4gICAgY29uc3QgY291bnRyeU9wdGlvbiA9IG5ldyBPcHRpb24oY291bnRyeS5uYW1lLCBjb3VudHJ5LnZhbHVlKTtcclxuICAgIGNvdW50cnlTZWxlY3QuYWRkKGNvdW50cnlPcHRpb24pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0SW5wdXQoaW5wdXQpIHtcclxuICBsZXQgc3RyaW5nID0gaW5wdXQudmFsdWU7XHJcbiAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1soKS1cXHNdL2csIFwiXCIpO1xyXG5cclxuICBpbnB1dC52YWx1ZSA9IHN0cmluZztcclxuICByZXR1cm4gc3RyaW5nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvbmx5TnVtYmVyc0tleWRvd24oa2V5Y29kZSwgaW5wdXQpIHtcclxuICBsZXQgZGlnaXRzID0gWzgsIDMsIDM5LCA0OCwgNDksIDUwLCA1MSwgNTIsIDUzLCA1NCwgNTUsIDU2LCA1N107XHJcblxyXG4gIGxldCBkaWdpdDtcclxuICBkaWdpdHMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgIGlmIChrZXljb2RlID09PSBlbCkge1xyXG4gICAgICBkaWdpdCA9IGtleWNvZGU7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgaWYgKGtleWNvZGUgIT09IGRpZ2l0IHx8IGlucHV0LnNoaWZ0S2V5KSB7XHJcbiAgICBpbnB1dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgc2V0Q29udGFjdEluZm9ybWF0aW9ucyB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHNldENvbnRhY3RJbmZvcm1hdGlvbnMgfSBmcm9tIFwiLi9mb3JtX2NvbXBvbmVudHMvY29udGFjdEluZm9ybWF0aW9uXCI7XHJcbmltcG9ydCB7IGV4cG9ydExpc3RDb3VudHJ5IH0gZnJvbSBcIi4vY29uc3RyYWludEZhY3RvcnlcIjtcclxuXHJcbmV4cG9ydExpc3RDb3VudHJ5KCk7XHJcbnNldENvbnRhY3RJbmZvcm1hdGlvbnMoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9