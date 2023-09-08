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


// USA
(0,_countryObject__WEBPACK_IMPORTED_MODULE_0__.createCountryConstraint)(
  "United States",
  "usa",
  "14",
  /^(1\s?\(\d{3}\)\s?|1\s\d{3}[\s-]?|\(\d{3}\)\s?|\d{3}[\s-]?)\d{3}[\s-]?\d{4}$/,
  "(123) 123-1234",
  "10",
  /^\d{5}(?:[-\s]\d{4})?$/,
  "12345-1234"
);

// BRZ
(0,_countryObject__WEBPACK_IMPORTED_MODULE_0__.createCountryConstraint)(
  "Brazil",
  "brz",
  "14",
  /^(\(?[0-9]{2}\)?)? ?([0-9]{4,5})-?([0-9]{4})$/gm,
  "(12) 1234-1234",
  "9",
  /^\d{5}-?\d{3}$/,
  "12345-123"
);

function testeConstraint() {
  _countryObject__WEBPACK_IMPORTED_MODULE_0__.listCountries.forEach((el) => {
    console.log(el)
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
}

// COMPONENTS FUNCTIONS

function countrySelectOnInput() {
  countrySelect.addEventListener("input", () => {
    _countryObject__WEBPACK_IMPORTED_MODULE_0__.listCountries.forEach((element) => {
      let country = element;
      if (countrySelect.value === country.value) {
        phoneInput.value = "";
        console.log(country.value);
      }
    });
  });
}

function insertOption() {
  _countryObject__WEBPACK_IMPORTED_MODULE_0__.listCountries.forEach((country) => {
    const countryOption = new Option(country.name, country.value);
    countrySelect.add(countryOption);
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBeUU7QUFDekU7QUFDQTtBQUNBLHVFQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxjQUFjLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRTtBQUM5RTtBQUNBO0FBQ0EsT0FBTyxFQUFFLFdBQVcsRUFBRTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxjQUFjLEVBQUUsY0FBYyxJQUFJLFVBQVUsRUFBRTtBQUM5QztBQUNBO0FBQ0EsT0FBTyxFQUFFLEtBQUssRUFBRTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseURBQWE7QUFDZjtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUUseURBQWE7QUFDZjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDa0M7Ozs7Ozs7VUNsQ2xDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnNEO0FBQ3dCO0FBQzlFO0FBQ0EsbUVBQWU7QUFDZiwyRkFBc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JtX3ZhbGlkYXRpb25fcHJvamVjdC8uL3NyYy9jb25zdHJhaW50RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9mb3JtX3ZhbGlkYXRpb25fcHJvamVjdC8uL3NyYy9jb3VudHJ5T2JqZWN0LmpzIiwid2VicGFjazovL2Zvcm1fdmFsaWRhdGlvbl9wcm9qZWN0Ly4vc3JjL2Zvcm1fY29tcG9uZW50cy9jb250YWN0SW5mb3JtYXRpb24uanMiLCJ3ZWJwYWNrOi8vZm9ybV92YWxpZGF0aW9uX3Byb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZm9ybV92YWxpZGF0aW9uX3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Zvcm1fdmFsaWRhdGlvbl9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZm9ybV92YWxpZGF0aW9uX3Byb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mb3JtX3ZhbGlkYXRpb25fcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb3VudHJ5Q29uc3RyYWludCwgbGlzdENvdW50cmllcyB9IGZyb20gXCIuL2NvdW50cnlPYmplY3RcIjtcclxuXHJcbi8vIFVTQVxyXG5jcmVhdGVDb3VudHJ5Q29uc3RyYWludChcclxuICBcIlVuaXRlZCBTdGF0ZXNcIixcclxuICBcInVzYVwiLFxyXG4gIFwiMTRcIixcclxuICAvXigxXFxzP1xcKFxcZHszfVxcKVxccz98MVxcc1xcZHszfVtcXHMtXT98XFwoXFxkezN9XFwpXFxzP3xcXGR7M31bXFxzLV0/KVxcZHszfVtcXHMtXT9cXGR7NH0kLyxcclxuICBcIigxMjMpIDEyMy0xMjM0XCIsXHJcbiAgXCIxMFwiLFxyXG4gIC9eXFxkezV9KD86Wy1cXHNdXFxkezR9KT8kLyxcclxuICBcIjEyMzQ1LTEyMzRcIlxyXG4pO1xyXG5cclxuLy8gQlJaXHJcbmNyZWF0ZUNvdW50cnlDb25zdHJhaW50KFxyXG4gIFwiQnJhemlsXCIsXHJcbiAgXCJicnpcIixcclxuICBcIjE0XCIsXHJcbiAgL14oXFwoP1swLTldezJ9XFwpPyk/ID8oWzAtOV17NCw1fSktPyhbMC05XXs0fSkkL2dtLFxyXG4gIFwiKDEyKSAxMjM0LTEyMzRcIixcclxuICBcIjlcIixcclxuICAvXlxcZHs1fS0/XFxkezN9JC8sXHJcbiAgXCIxMjM0NS0xMjNcIlxyXG4pO1xyXG5cclxuZnVuY3Rpb24gdGVzdGVDb25zdHJhaW50KCkge1xyXG4gIGxpc3RDb3VudHJpZXMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGVsKVxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQge3Rlc3RlQ29uc3RyYWludH0iLCJjb25zdCBsaXN0Q291bnRyaWVzID0gW107XHJcblxyXG5jbGFzcyBDb3VudHJ5Q29uc3RyYWludHMge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgbmFtZSxcclxuICAgIHZhbHVlLFxyXG4gICAgcGhvbmVMZW5ndGgsXHJcbiAgICBwaG9uZVBhdHRlcm4sXHJcbiAgICBwaG9uZVBsYWNlaG9sZGVyLFxyXG4gICAgemlwTGVuZ3RoLFxyXG4gICAgemlwUGF0dGVybixcclxuICAgIHppcFBsYWNlaG9sZGVyXHJcbiAgKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG5cclxuICAgIHRoaXMucGhvbmVMZW5ndGggPSBwaG9uZUxlbmd0aDtcclxuICAgIHRoaXMucGhvbmVQYXR0ZXJuID0gcGhvbmVQYXR0ZXJuO1xyXG4gICAgdGhpcy5waG9uZVBsYWNlaG9sZGVyID0gcGhvbmVQbGFjZWhvbGRlcjtcclxuICAgIHRoaXMucGhvbmVWYWxpZGF0aW9uO1xyXG5cclxuICAgIHRoaXMuemlwTGVuZ3RoID0gemlwTGVuZ3RoO1xyXG4gICAgdGhpcy56aXBQYXR0ZXJuID0gemlwUGF0dGVybjtcclxuICAgIHRoaXMuemlwUGxhY2Vob2xkZXIgPSB6aXBQbGFjZWhvbGRlcjtcclxuICAgIHRoaXMuemlwVmFsaWRhdGlvbjtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvdW50cnlDb25zdHJhaW50KFxyXG4gIG5hbWUsXHJcbiAgdmFsdWUsXHJcbiAgcGhvbmVMZW5ndGgsXHJcbiAgcGhvbmVQYXR0ZXJuLFxyXG4gIHBob25lUGxhY2Vob2xkZXIsXHJcbiAgemlwTGVuZ3RoLFxyXG4gIHppcFBhdHRlcm4sXHJcbiAgemlwUGxhY2Vob2xkZXJcclxuKSB7XHJcbiAgY29uc3QgbmV3Q291bnRyeSA9IG5ldyBDb3VudHJ5Q29uc3RyYWludHMoXHJcbiAgICBuYW1lLFxyXG4gICAgdmFsdWUsXHJcbiAgICBwaG9uZUxlbmd0aCxcclxuICAgIHBob25lUGF0dGVybixcclxuICAgIHBob25lUGxhY2Vob2xkZXIsXHJcbiAgICB6aXBMZW5ndGgsXHJcbiAgICB6aXBQYXR0ZXJuLFxyXG4gICAgemlwUGxhY2Vob2xkZXJcclxuICApO1xyXG4gIGxpc3RDb3VudHJpZXMucHVzaChuZXdDb3VudHJ5KTtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlQ291bnRyeUNvbnN0cmFpbnQsIGxpc3RDb3VudHJpZXMgfTsiLCJpbXBvcnQgeyBsaXN0Q291bnRyaWVzIH0gZnJvbSBcIi4uL2NvdW50cnlPYmplY3RcIjtcclxuXHJcbi8vIERPTSBDT05TVFNcclxuY29uc3QgY291bnRyeVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY291bnRyeVwiKTtcclxuY29uc3QgcGhvbmVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGhvbmVcIik7XHJcbmNvbnN0IHppcElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN6aXBfY29kZVwiKTtcclxuXHJcbi8vIE1BSU4gRlVOQ1RJT05cclxuZnVuY3Rpb24gc2V0Q29udGFjdEluZm9ybWF0aW9ucygpIHtcclxuICBpbnNlcnRPcHRpb24oKTtcclxuICBjb3VudHJ5U2VsZWN0T25JbnB1dCgpO1xyXG59XHJcblxyXG4vLyBDT01QT05FTlRTIEZVTkNUSU9OU1xyXG5cclxuZnVuY3Rpb24gY291bnRyeVNlbGVjdE9uSW5wdXQoKSB7XHJcbiAgY291bnRyeVNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgbGlzdENvdW50cmllcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgIGxldCBjb3VudHJ5ID0gZWxlbWVudDtcclxuICAgICAgaWYgKGNvdW50cnlTZWxlY3QudmFsdWUgPT09IGNvdW50cnkudmFsdWUpIHtcclxuICAgICAgICBwaG9uZUlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgICAgICBjb25zb2xlLmxvZyhjb3VudHJ5LnZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluc2VydE9wdGlvbigpIHtcclxuICBsaXN0Q291bnRyaWVzLmZvckVhY2goKGNvdW50cnkpID0+IHtcclxuICAgIGNvbnN0IGNvdW50cnlPcHRpb24gPSBuZXcgT3B0aW9uKGNvdW50cnkubmFtZSwgY291bnRyeS52YWx1ZSk7XHJcbiAgICBjb3VudHJ5U2VsZWN0LmFkZChjb3VudHJ5T3B0aW9uKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHsgc2V0Q29udGFjdEluZm9ybWF0aW9ucyB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHRlc3RlQ29uc3RyYWludCB9IGZyb20gXCIuL2NvbnN0cmFpbnRGYWN0b3J5XCI7XHJcbmltcG9ydCB7IHNldENvbnRhY3RJbmZvcm1hdGlvbnMgfSBmcm9tIFwiLi9mb3JtX2NvbXBvbmVudHMvY29udGFjdEluZm9ybWF0aW9uXCI7XHJcblxyXG50ZXN0ZUNvbnN0cmFpbnQoKTtcclxuc2V0Q29udGFjdEluZm9ybWF0aW9ucygpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=