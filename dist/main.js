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
/* harmony export */   testeConstraint: () => (/* binding */ testeConstraint)
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

function testeConstraint() {
  _countryObject__WEBPACK_IMPORTED_MODULE_0__.listCountries.forEach((el) => {
    console.log(el);
  });
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
/* harmony import */ var _constraintFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constraintFactory */ "./src/constraintFactory.js");
/* harmony import */ var _form_components_contactInformation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form_components/contactInformation */ "./src/form_components/contactInformation.js");



(0,_constraintFactory__WEBPACK_IMPORTED_MODULE_0__.testeConstraint)();
(0,_form_components_contactInformation__WEBPACK_IMPORTED_MODULE_1__.setContactInformations)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnNEO0FBQ3dCO0FBQzlFO0FBQ0EsbUVBQWU7QUFDZiwyRkFBc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JtX3ZhbGlkYXRpb25fcHJvamVjdC8uL3NyYy9jb25zdHJhaW50RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9mb3JtX3ZhbGlkYXRpb25fcHJvamVjdC8uL3NyYy9jb3VudHJ5T2JqZWN0LmpzIiwid2VicGFjazovL2Zvcm1fdmFsaWRhdGlvbl9wcm9qZWN0Ly4vc3JjL2Zvcm1fY29tcG9uZW50cy9jb250YWN0SW5mb3JtYXRpb24uanMiLCJ3ZWJwYWNrOi8vZm9ybV92YWxpZGF0aW9uX3Byb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZm9ybV92YWxpZGF0aW9uX3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Zvcm1fdmFsaWRhdGlvbl9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZm9ybV92YWxpZGF0aW9uX3Byb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mb3JtX3ZhbGlkYXRpb25fcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb3VudHJ5Q29uc3RyYWludCwgbGlzdENvdW50cmllcyB9IGZyb20gXCIuL2NvdW50cnlPYmplY3RcIjtcclxuXHJcblxyXG5cclxuLy8gQlJaXHJcbmNyZWF0ZUNvdW50cnlDb25zdHJhaW50KFxyXG4gIFwiQnJhemlsXCIsXHJcbiAgXCJicnpcIixcclxuICBcIjE0XCIsXHJcbiAgL14oXFwoP1swLTldezJ9XFwpPyk/ID8oWzAtOV17NCw1fSktPyhbMC05XXs0fSkkL2dtLFxyXG4gIFwiKDEyKSAxMjM0LTEyMzRcIixcclxuICBcIjlcIixcclxuICAvXlxcZHs1fS0/XFxkezN9JC8sXHJcbiAgXCIxMjM0NS0xMjNcIixcclxuICAodmFsdWUsIGlucHV0KSA9PiB7XHJcbiAgICBpZiAodmFsdWUubGVuZ3RoID4gMikge1xyXG4gICAgICBpbnB1dC52YWx1ZSA9IGAoJHt2YWx1ZS5zbGljZSgwLCAyKX0pICR7dmFsdWUuc2xpY2UoMiwgNil9YDtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZS5sZW5ndGggPiA2KSB7XHJcbiAgICAgIGlucHV0LnZhbHVlID0gYCgke3ZhbHVlLnNsaWNlKDAsIDIpfSkgJHt2YWx1ZS5zbGljZSgyLCA2KX0tJHt2YWx1ZS5zbGljZShcclxuICAgICAgICA2LFxyXG4gICAgICAgIDEwXHJcbiAgICAgICl9YDtcclxuICAgIH1cclxuICB9LFxyXG4gICh2YWx1ZSwgaW5wdXQpID0+IHtcclxuICAgIGlmICh2YWx1ZS5sZW5ndGggPiA1KSB7XHJcbiAgICAgIGlucHV0LnZhbHVlID0gYCR7dmFsdWUuc2xpY2UoMCwgNSl9LSR7dmFsdWUuc2xpY2UoNSwgOCl9YDtcclxuICAgIH1cclxuICB9XHJcbik7XHJcblxyXG4vLyBVU0FcclxuY3JlYXRlQ291bnRyeUNvbnN0cmFpbnQoXHJcbiAgXCJVbml0ZWQgU3RhdGVzXCIsXHJcbiAgXCJ1c2FcIixcclxuICBcIjE0XCIsXHJcbiAgL14oMVxccz9cXChcXGR7M31cXClcXHM/fDFcXHNcXGR7M31bXFxzLV0/fFxcKFxcZHszfVxcKVxccz98XFxkezN9W1xccy1dPylcXGR7M31bXFxzLV0/XFxkezR9JC8sXHJcbiAgXCIoMTIzKSAxMjMtMTIzNFwiLFxyXG4gIFwiMTFcIixcclxuICAvXlxcZHs1fSg/OlstXFxzXVxcZHs0fSk/JC8sXHJcbiAgXCIxMjM0NS0xMjM0XCIsXHJcbiAgKHZhbHVlLCBpbnB1dCkgPT4ge1xyXG4gICAgaWYgKHZhbHVlLmxlbmd0aCA+IDMpIHtcclxuICAgICAgaW5wdXQudmFsdWUgPSBgKCR7dmFsdWUuc2xpY2UoMCwgMyl9KSAke3ZhbHVlLnNsaWNlKDMsIDYpfWA7XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUubGVuZ3RoID4gNikge1xyXG4gICAgICBpbnB1dC52YWx1ZSA9IGAoJHt2YWx1ZS5zbGljZSgwLCAzKX0pICR7dmFsdWUuc2xpY2UoMywgNil9LSR7dmFsdWUuc2xpY2UoXHJcbiAgICAgICAgNixcclxuICAgICAgICAxMFxyXG4gICAgICApfWA7XHJcbiAgICB9XHJcbiAgfSxcclxuICAodmFsdWUsIGlucHV0KSA9PiB7XHJcbiAgICBpZiAodmFsdWUubGVuZ3RoID4gNSkge1xyXG4gICAgICBpbnB1dC52YWx1ZSA9IGAke3ZhbHVlLnNsaWNlKDAsIDUpfS0ke3ZhbHVlLnNsaWNlKDUsIDkpfWA7XHJcbiAgICB9XHJcbiAgfVxyXG4pO1xyXG5cclxuZnVuY3Rpb24gdGVzdGVDb25zdHJhaW50KCkge1xyXG4gIGxpc3RDb3VudHJpZXMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGVsKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHsgdGVzdGVDb25zdHJhaW50IH07XHJcbiIsImNvbnN0IGxpc3RDb3VudHJpZXMgPSBbXTtcclxuXHJcbmNsYXNzIENvdW50cnlDb25zdHJhaW50cyB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBuYW1lLFxyXG4gICAgdmFsdWUsXHJcbiAgICBwaG9uZUxlbmd0aCxcclxuICAgIHBob25lUGF0dGVybixcclxuICAgIHBob25lUGxhY2Vob2xkZXIsXHJcbiAgICB6aXBMZW5ndGgsXHJcbiAgICB6aXBQYXR0ZXJuLFxyXG4gICAgemlwUGxhY2Vob2xkZXJcclxuICApIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcblxyXG4gICAgdGhpcy5waG9uZUxlbmd0aCA9IHBob25lTGVuZ3RoO1xyXG4gICAgdGhpcy5waG9uZVBhdHRlcm4gPSBwaG9uZVBhdHRlcm47XHJcbiAgICB0aGlzLnBob25lUGxhY2Vob2xkZXIgPSBwaG9uZVBsYWNlaG9sZGVyO1xyXG4gICAgdGhpcy5waG9uZVZhbGlkYXRpb247XHJcblxyXG4gICAgdGhpcy56aXBMZW5ndGggPSB6aXBMZW5ndGg7XHJcbiAgICB0aGlzLnppcFBhdHRlcm4gPSB6aXBQYXR0ZXJuO1xyXG4gICAgdGhpcy56aXBQbGFjZWhvbGRlciA9IHppcFBsYWNlaG9sZGVyO1xyXG4gICAgdGhpcy56aXBWYWxpZGF0aW9uO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ291bnRyeUNvbnN0cmFpbnQoXHJcbiAgbmFtZSxcclxuICB2YWx1ZSxcclxuICBwaG9uZUxlbmd0aCxcclxuICBwaG9uZVBhdHRlcm4sXHJcbiAgcGhvbmVQbGFjZWhvbGRlcixcclxuICB6aXBMZW5ndGgsXHJcbiAgemlwUGF0dGVybixcclxuICB6aXBQbGFjZWhvbGRlcixcclxuXHRwaG9uZSxcclxuXHR6aXBcclxuKSB7XHJcbiAgY29uc3QgbmV3Q291bnRyeSA9IG5ldyBDb3VudHJ5Q29uc3RyYWludHMoXHJcbiAgICBuYW1lLFxyXG4gICAgdmFsdWUsXHJcbiAgICBwaG9uZUxlbmd0aCxcclxuICAgIHBob25lUGF0dGVybixcclxuICAgIHBob25lUGxhY2Vob2xkZXIsXHJcbiAgICB6aXBMZW5ndGgsXHJcbiAgICB6aXBQYXR0ZXJuLFxyXG4gICAgemlwUGxhY2Vob2xkZXIsXHJcbiAgKTtcclxuICBuZXdDb3VudHJ5LnBob25lVmFsaWRhdGlvbiA9IHBob25lO1xyXG4gIG5ld0NvdW50cnkuemlwVmFsaWRhdGlvbiA9IHppcDtcclxuXHJcbiAgbGlzdENvdW50cmllcy5wdXNoKG5ld0NvdW50cnkpO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVDb3VudHJ5Q29uc3RyYWludCwgbGlzdENvdW50cmllcyB9O1xyXG4iLCJpbXBvcnQgeyBsaXN0Q291bnRyaWVzIH0gZnJvbSBcIi4uL2NvdW50cnlPYmplY3RcIjtcclxuXHJcbi8vIERPTSBDT05TVFNcclxuY29uc3QgY291bnRyeVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY291bnRyeVwiKTtcclxuY29uc3QgcGhvbmVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGhvbmVcIik7XHJcbmNvbnN0IHppcElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN6aXBfY29kZVwiKTtcclxuXHJcbi8vIE1BSU4gRlVOQ1RJT05cclxuZnVuY3Rpb24gc2V0Q29udGFjdEluZm9ybWF0aW9ucygpIHtcclxuICBpbml0Q29udGFjdEluZm9ybWF0aW9ucygpO1xyXG4gIGNvdW50cnlTZWxlY3RPbklucHV0KCk7XHJcbiAgc2V0UGhvbmVDb25zdHJhaW50KCk7XHJcbiAgc2V0WmlwQ29uc3RyYWludCgpO1xyXG59XHJcblxyXG4vLyBDT01QT05FTlRTIEZVTkNUSU9OU1xyXG5cclxubGV0IGNvdW50cnk7XHJcbmZ1bmN0aW9uIGNvdW50cnlTZWxlY3RPbklucHV0KCkge1xyXG4gIGNvdW50cnlTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgIHBob25lSW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgemlwSW5wdXQudmFsdWUgPSBcIlwiO1xyXG5cclxuICAgIGxpc3RDb3VudHJpZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICBpZiAoY291bnRyeVNlbGVjdC52YWx1ZSAhPT0gZWxlbWVudC52YWx1ZSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb3VudHJ5ID0gZWxlbWVudDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB6aXBJbnB1dC5wbGFjZWhvbGRlciA9IGNvdW50cnkuemlwUGxhY2Vob2xkZXI7XHJcbiAgICBwaG9uZUlucHV0LnBsYWNlaG9sZGVyID0gY291bnRyeS5waG9uZVBsYWNlaG9sZGVyO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRaaXBDb25zdHJhaW50KCkge1xyXG4gIHppcElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChrKSA9PiB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGs7XHJcbiAgICBjb25zdCBrZXljb2RlID0gay5rZXlDb2RlO1xyXG4gICAgb25seU51bWJlcnNLZXlkb3duKGtleWNvZGUsIGlucHV0KTtcclxuICB9KTtcclxuXHJcbiAgemlwSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgIGNvbnN0IHppcFZhbHVlID0gaW5pdElucHV0KHppcElucHV0KTtcclxuICAgIGNvdW50cnkuemlwVmFsaWRhdGlvbih6aXBWYWx1ZSwgemlwSW5wdXQpO1xyXG5cclxuICAgIHZhbGlkYXRlUmVnZXgoY291bnRyeS56aXBQYXR0ZXJuLCB6aXBJbnB1dCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFBob25lQ29uc3RyYWludCgpIHtcclxuICBwaG9uZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChrKSA9PiB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGs7XHJcbiAgICBjb25zdCBrZXljb2RlID0gay5rZXlDb2RlO1xyXG4gICAgb25seU51bWJlcnNLZXlkb3duKGtleWNvZGUsIGlucHV0KTtcclxuICB9KTtcclxuXHJcbiAgcGhvbmVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgY29uc3QgcGhvbmVWYWx1ZSA9IGluaXRJbnB1dChwaG9uZUlucHV0KTtcclxuICAgIGNvdW50cnkucGhvbmVWYWxpZGF0aW9uKHBob25lVmFsdWUsIHBob25lSW5wdXQpO1xyXG5cclxuICAgIHZhbGlkYXRlUmVnZXgoY291bnRyeS5waG9uZVBhdHRlcm4sIHBob25lSW5wdXQpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0Q29udGFjdEluZm9ybWF0aW9ucygpIHtcclxuICAgIGNvdW50cnlTZWxlY3QudmFsdWUgPSBcIlwiO1xyXG4gICAgcGhvbmVJbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICB6aXBJbnB1dC52YWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgcGhvbmVJbnB1dC5wbGFjZWhvbGRlciA9IFwiU2VsZWN0IGEgY291bnRyeSFcIjtcclxuICAgIHppcElucHV0LnBsYWNlaG9sZGVyID0gXCJTZWxlY3QgYSBjb3VudHJ5IVwiO1xyXG5cclxuICAgIGluc2VydE9wdGlvbigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZVJlZ2V4KHBhdHRlcm4sIGlucHV0KSB7XHJcbiAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKHBhdHRlcm4pO1xyXG4gIGlmICghcmVnZXgudGVzdChpbnB1dC52YWx1ZSkpIHtcclxuICAgIGlucHV0LnNldEN1c3RvbVZhbGlkaXR5KFwiSW52YWxpZFwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgaW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnRPcHRpb24oKSB7XHJcbiAgbGlzdENvdW50cmllcy5mb3JFYWNoKChjb3VudHJ5KSA9PiB7XHJcbiAgICBjb25zdCBjb3VudHJ5T3B0aW9uID0gbmV3IE9wdGlvbihjb3VudHJ5Lm5hbWUsIGNvdW50cnkudmFsdWUpO1xyXG4gICAgY291bnRyeVNlbGVjdC5hZGQoY291bnRyeU9wdGlvbik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRJbnB1dChpbnB1dCkge1xyXG4gIGxldCBzdHJpbmcgPSBpbnB1dC52YWx1ZTtcclxuICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvWygpLVxcc10vZywgXCJcIik7XHJcblxyXG4gIGlucHV0LnZhbHVlID0gc3RyaW5nO1xyXG4gIHJldHVybiBzdHJpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9ubHlOdW1iZXJzS2V5ZG93bihrZXljb2RlLCBpbnB1dCkge1xyXG4gIGxldCBkaWdpdHMgPSBbOCwgMywgMzksIDQ4LCA0OSwgNTAsIDUxLCA1MiwgNTMsIDU0LCA1NSwgNTYsIDU3XTtcclxuXHJcbiAgbGV0IGRpZ2l0O1xyXG4gIGRpZ2l0cy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgaWYgKGtleWNvZGUgPT09IGVsKSB7XHJcbiAgICAgIGRpZ2l0ID0ga2V5Y29kZTtcclxuICAgIH1cclxuICB9KTtcclxuICBpZiAoa2V5Y29kZSAhPT0gZGlnaXQgfHwgaW5wdXQuc2hpZnRLZXkpIHtcclxuICAgIGlucHV0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBzZXRDb250YWN0SW5mb3JtYXRpb25zIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgdGVzdGVDb25zdHJhaW50IH0gZnJvbSBcIi4vY29uc3RyYWludEZhY3RvcnlcIjtcclxuaW1wb3J0IHsgc2V0Q29udGFjdEluZm9ybWF0aW9ucyB9IGZyb20gXCIuL2Zvcm1fY29tcG9uZW50cy9jb250YWN0SW5mb3JtYXRpb25cIjtcclxuXHJcbnRlc3RlQ29uc3RyYWludCgpO1xyXG5zZXRDb250YWN0SW5mb3JtYXRpb25zKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==