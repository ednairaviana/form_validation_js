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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOc0Q7QUFDd0I7QUFDOUU7QUFDQSxtRUFBZTtBQUNmLDJGQUFzQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvcm1fdmFsaWRhdGlvbl9wcm9qZWN0Ly4vc3JjL2NvbnN0cmFpbnRGYWN0b3J5LmpzIiwid2VicGFjazovL2Zvcm1fdmFsaWRhdGlvbl9wcm9qZWN0Ly4vc3JjL2NvdW50cnlPYmplY3QuanMiLCJ3ZWJwYWNrOi8vZm9ybV92YWxpZGF0aW9uX3Byb2plY3QvLi9zcmMvZm9ybV9jb21wb25lbnRzL2NvbnRhY3RJbmZvcm1hdGlvbi5qcyIsIndlYnBhY2s6Ly9mb3JtX3ZhbGlkYXRpb25fcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mb3JtX3ZhbGlkYXRpb25fcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZm9ybV92YWxpZGF0aW9uX3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mb3JtX3ZhbGlkYXRpb25fcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Zvcm1fdmFsaWRhdGlvbl9wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvdW50cnlDb25zdHJhaW50LCBsaXN0Q291bnRyaWVzIH0gZnJvbSBcIi4vY291bnRyeU9iamVjdFwiO1xyXG5cclxuXHJcblxyXG4vLyBCUlpcclxuY3JlYXRlQ291bnRyeUNvbnN0cmFpbnQoXHJcbiAgXCJCcmF6aWxcIixcclxuICBcImJyelwiLFxyXG4gIFwiMTRcIixcclxuICAvXihcXCg/WzAtOV17Mn1cXCk/KT8gPyhbMC05XXs0LDV9KS0/KFswLTldezR9KSQvZ20sXHJcbiAgXCIoMTIpIDEyMzQtMTIzNFwiLFxyXG4gIFwiOVwiLFxyXG4gIC9eXFxkezV9LT9cXGR7M30kLyxcclxuICBcIjEyMzQ1LTEyM1wiLFxyXG4gICh2YWx1ZSwgaW5wdXQpID0+IHtcclxuICAgIGlmICh2YWx1ZS5sZW5ndGggPiAyKSB7XHJcbiAgICAgIGlucHV0LnZhbHVlID0gYCgke3ZhbHVlLnNsaWNlKDAsIDIpfSkgJHt2YWx1ZS5zbGljZSgyLCA2KX1gO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlLmxlbmd0aCA+IDYpIHtcclxuICAgICAgaW5wdXQudmFsdWUgPSBgKCR7dmFsdWUuc2xpY2UoMCwgMil9KSAke3ZhbHVlLnNsaWNlKDIsIDYpfS0ke3ZhbHVlLnNsaWNlKFxyXG4gICAgICAgIDYsXHJcbiAgICAgICAgMTBcclxuICAgICAgKX1gO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgKHZhbHVlLCBpbnB1dCkgPT4ge1xyXG4gICAgaWYgKHZhbHVlLmxlbmd0aCA+IDUpIHtcclxuICAgICAgaW5wdXQudmFsdWUgPSBgJHt2YWx1ZS5zbGljZSgwLCA1KX0tJHt2YWx1ZS5zbGljZSg1LCA4KX1gO1xyXG4gICAgfVxyXG4gIH1cclxuKTtcclxuXHJcbi8vIFVTQVxyXG5jcmVhdGVDb3VudHJ5Q29uc3RyYWludChcclxuICBcIlVuaXRlZCBTdGF0ZXNcIixcclxuICBcInVzYVwiLFxyXG4gIFwiMTRcIixcclxuICAvXigxXFxzP1xcKFxcZHszfVxcKVxccz98MVxcc1xcZHszfVtcXHMtXT98XFwoXFxkezN9XFwpXFxzP3xcXGR7M31bXFxzLV0/KVxcZHszfVtcXHMtXT9cXGR7NH0kLyxcclxuICBcIigxMjMpIDEyMy0xMjM0XCIsXHJcbiAgXCIxMVwiLFxyXG4gIC9eXFxkezV9KD86Wy1cXHNdXFxkezR9KT8kLyxcclxuICBcIjEyMzQ1LTEyMzRcIixcclxuICAodmFsdWUsIGlucHV0KSA9PiB7XHJcbiAgICBpZiAodmFsdWUubGVuZ3RoID4gMykge1xyXG4gICAgICBpbnB1dC52YWx1ZSA9IGAoJHt2YWx1ZS5zbGljZSgwLCAzKX0pICR7dmFsdWUuc2xpY2UoMywgNil9YDtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZS5sZW5ndGggPiA2KSB7XHJcbiAgICAgIGlucHV0LnZhbHVlID0gYCgke3ZhbHVlLnNsaWNlKDAsIDMpfSkgJHt2YWx1ZS5zbGljZSgzLCA2KX0tJHt2YWx1ZS5zbGljZShcclxuICAgICAgICA2LFxyXG4gICAgICAgIDEwXHJcbiAgICAgICl9YDtcclxuICAgIH1cclxuICB9LFxyXG4gICh2YWx1ZSwgaW5wdXQpID0+IHtcclxuICAgIGlmICh2YWx1ZS5sZW5ndGggPiA1KSB7XHJcbiAgICAgIGlucHV0LnZhbHVlID0gYCR7dmFsdWUuc2xpY2UoMCwgNSl9LSR7dmFsdWUuc2xpY2UoNSwgOSl9YDtcclxuICAgIH1cclxuICB9XHJcbik7XHJcblxyXG5mdW5jdGlvbiB0ZXN0ZUNvbnN0cmFpbnQoKSB7XHJcbiAgbGlzdENvdW50cmllcy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZWwpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgeyB0ZXN0ZUNvbnN0cmFpbnQgfTtcclxuIiwiY29uc3QgbGlzdENvdW50cmllcyA9IFtdO1xyXG5cclxuY2xhc3MgQ291bnRyeUNvbnN0cmFpbnRzIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIG5hbWUsXHJcbiAgICB2YWx1ZSxcclxuICAgIHBob25lTGVuZ3RoLFxyXG4gICAgcGhvbmVQYXR0ZXJuLFxyXG4gICAgcGhvbmVQbGFjZWhvbGRlcixcclxuICAgIHppcExlbmd0aCxcclxuICAgIHppcFBhdHRlcm4sXHJcbiAgICB6aXBQbGFjZWhvbGRlclxyXG4gICkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuXHJcbiAgICB0aGlzLnBob25lTGVuZ3RoID0gcGhvbmVMZW5ndGg7XHJcbiAgICB0aGlzLnBob25lUGF0dGVybiA9IHBob25lUGF0dGVybjtcclxuICAgIHRoaXMucGhvbmVQbGFjZWhvbGRlciA9IHBob25lUGxhY2Vob2xkZXI7XHJcbiAgICB0aGlzLnBob25lVmFsaWRhdGlvbjtcclxuXHJcbiAgICB0aGlzLnppcExlbmd0aCA9IHppcExlbmd0aDtcclxuICAgIHRoaXMuemlwUGF0dGVybiA9IHppcFBhdHRlcm47XHJcbiAgICB0aGlzLnppcFBsYWNlaG9sZGVyID0gemlwUGxhY2Vob2xkZXI7XHJcbiAgICB0aGlzLnppcFZhbGlkYXRpb247XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb3VudHJ5Q29uc3RyYWludChcclxuICBuYW1lLFxyXG4gIHZhbHVlLFxyXG4gIHBob25lTGVuZ3RoLFxyXG4gIHBob25lUGF0dGVybixcclxuICBwaG9uZVBsYWNlaG9sZGVyLFxyXG4gIHppcExlbmd0aCxcclxuICB6aXBQYXR0ZXJuLFxyXG4gIHppcFBsYWNlaG9sZGVyLFxyXG5cdHBob25lLFxyXG5cdHppcFxyXG4pIHtcclxuICBjb25zdCBuZXdDb3VudHJ5ID0gbmV3IENvdW50cnlDb25zdHJhaW50cyhcclxuICAgIG5hbWUsXHJcbiAgICB2YWx1ZSxcclxuICAgIHBob25lTGVuZ3RoLFxyXG4gICAgcGhvbmVQYXR0ZXJuLFxyXG4gICAgcGhvbmVQbGFjZWhvbGRlcixcclxuICAgIHppcExlbmd0aCxcclxuICAgIHppcFBhdHRlcm4sXHJcbiAgICB6aXBQbGFjZWhvbGRlcixcclxuICApO1xyXG4gIG5ld0NvdW50cnkucGhvbmVWYWxpZGF0aW9uID0gcGhvbmU7XHJcbiAgbmV3Q291bnRyeS56aXBWYWxpZGF0aW9uID0gemlwO1xyXG5cclxuICBsaXN0Q291bnRyaWVzLnB1c2gobmV3Q291bnRyeSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUNvdW50cnlDb25zdHJhaW50LCBsaXN0Q291bnRyaWVzIH07XHJcbiIsImltcG9ydCB7IGxpc3RDb3VudHJpZXMgfSBmcm9tIFwiLi4vY291bnRyeU9iamVjdFwiO1xyXG5cclxuLy8gRE9NIENPTlNUU1xyXG5jb25zdCBjb3VudHJ5U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3VudHJ5XCIpO1xyXG5jb25zdCBwaG9uZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwaG9uZVwiKTtcclxuY29uc3QgemlwSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ppcF9jb2RlXCIpO1xyXG5cclxuLy8gTUFJTiBGVU5DVElPTlxyXG5mdW5jdGlvbiBzZXRDb250YWN0SW5mb3JtYXRpb25zKCkge1xyXG4gIGluc2VydE9wdGlvbigpO1xyXG4gIGNvdW50cnlTZWxlY3RPbklucHV0KCk7XHJcbiAgc2V0UGhvbmVDb25zdHJhaW50KCk7XHJcbiAgc2V0WmlwQ29uc3RyYWludCgpO1xyXG59XHJcblxyXG4vLyBDT01QT05FTlRTIEZVTkNUSU9OU1xyXG5cclxubGV0IGNvdW50cnk7XHJcbmZ1bmN0aW9uIGNvdW50cnlTZWxlY3RPbklucHV0KCkge1xyXG4gIGNvdW50cnlTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgIHBob25lSW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgemlwSW5wdXQudmFsdWUgPSBcIlwiO1xyXG5cclxuICAgIGxpc3RDb3VudHJpZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICBpZiAoY291bnRyeVNlbGVjdC52YWx1ZSAhPT0gZWxlbWVudC52YWx1ZSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb3VudHJ5ID0gZWxlbWVudDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB6aXBJbnB1dC5wbGFjZWhvbGRlciA9IGNvdW50cnkuemlwUGxhY2Vob2xkZXI7XHJcbiAgICBwaG9uZUlucHV0LnBsYWNlaG9sZGVyID0gY291bnRyeS5waG9uZVBsYWNlaG9sZGVyO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRaaXBDb25zdHJhaW50KCkge1xyXG4gIHppcElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChrKSA9PiB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGs7XHJcbiAgICBjb25zdCBrZXljb2RlID0gay5rZXlDb2RlO1xyXG4gICAgb25seU51bWJlcnNLZXlkb3duKGtleWNvZGUsIGlucHV0KTtcclxuICB9KTtcclxuXHJcbiAgemlwSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgIGNvbnN0IHppcFZhbHVlID0gaW5pdElucHV0KHppcElucHV0KTtcclxuICAgIGNvdW50cnkuemlwVmFsaWRhdGlvbih6aXBWYWx1ZSwgemlwSW5wdXQpO1xyXG5cclxuICAgIHZhbGlkYXRlUmVnZXgoY291bnRyeS56aXBQYXR0ZXJuLCB6aXBJbnB1dCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFBob25lQ29uc3RyYWludCgpIHtcclxuICBwaG9uZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChrKSA9PiB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGs7XHJcbiAgICBjb25zdCBrZXljb2RlID0gay5rZXlDb2RlO1xyXG4gICAgb25seU51bWJlcnNLZXlkb3duKGtleWNvZGUsIGlucHV0KTtcclxuICB9KTtcclxuXHJcbiAgcGhvbmVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgY29uc3QgcGhvbmVWYWx1ZSA9IGluaXRJbnB1dChwaG9uZUlucHV0KTtcclxuICAgIGNvdW50cnkucGhvbmVWYWxpZGF0aW9uKHBob25lVmFsdWUsIHBob25lSW5wdXQpO1xyXG5cclxuICAgIHZhbGlkYXRlUmVnZXgoY291bnRyeS5waG9uZVBhdHRlcm4sIHBob25lSW5wdXQpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZVJlZ2V4KHBhdHRlcm4sIGlucHV0KSB7XHJcbiAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKHBhdHRlcm4pO1xyXG4gIGlmICghcmVnZXgudGVzdChpbnB1dC52YWx1ZSkpIHtcclxuICAgIGlucHV0LnNldEN1c3RvbVZhbGlkaXR5KFwiSW52YWxpZFwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgaW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnRPcHRpb24oKSB7XHJcbiAgbGlzdENvdW50cmllcy5mb3JFYWNoKChjb3VudHJ5KSA9PiB7XHJcbiAgICBjb25zdCBjb3VudHJ5T3B0aW9uID0gbmV3IE9wdGlvbihjb3VudHJ5Lm5hbWUsIGNvdW50cnkudmFsdWUpO1xyXG4gICAgY291bnRyeVNlbGVjdC5hZGQoY291bnRyeU9wdGlvbik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRJbnB1dChpbnB1dCkge1xyXG4gIGxldCBzdHJpbmcgPSBpbnB1dC52YWx1ZTtcclxuICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvWygpLVxcc10vZywgXCJcIik7XHJcblxyXG4gIGlucHV0LnZhbHVlID0gc3RyaW5nO1xyXG4gIHJldHVybiBzdHJpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9ubHlOdW1iZXJzS2V5ZG93bihrZXljb2RlLCBpbnB1dCkge1xyXG4gIGxldCBkaWdpdHMgPSBbOCwgMywgMzksIDQ4LCA0OSwgNTAsIDUxLCA1MiwgNTMsIDU0LCA1NSwgNTYsIDU3XTtcclxuXHJcbiAgbGV0IGRpZ2l0O1xyXG4gIGRpZ2l0cy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgaWYgKGtleWNvZGUgPT09IGVsKSB7XHJcbiAgICAgIGRpZ2l0ID0ga2V5Y29kZTtcclxuICAgIH1cclxuICB9KTtcclxuICBpZiAoa2V5Y29kZSAhPT0gZGlnaXQgfHwgaW5wdXQuc2hpZnRLZXkpIHtcclxuICAgIGlucHV0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBzZXRDb250YWN0SW5mb3JtYXRpb25zIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgdGVzdGVDb25zdHJhaW50IH0gZnJvbSBcIi4vY29uc3RyYWludEZhY3RvcnlcIjtcclxuaW1wb3J0IHsgc2V0Q29udGFjdEluZm9ybWF0aW9ucyB9IGZyb20gXCIuL2Zvcm1fY29tcG9uZW50cy9jb250YWN0SW5mb3JtYXRpb25cIjtcclxuXHJcbnRlc3RlQ29uc3RyYWludCgpO1xyXG5zZXRDb250YWN0SW5mb3JtYXRpb25zKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==