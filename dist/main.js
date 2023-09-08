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


const countrySelect = document.querySelector("#country");
function setContactInformations() {
    insertOption();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBeUU7QUFDekU7QUFDQTtBQUNBLHVFQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxjQUFjLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRTtBQUM5RTtBQUNBO0FBQ0EsT0FBTyxFQUFFLFdBQVcsRUFBRTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxjQUFjLEVBQUUsY0FBYyxJQUFJLFVBQVUsRUFBRTtBQUM5QztBQUNBO0FBQ0EsT0FBTyxFQUFFLEtBQUssRUFBRTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseURBQWE7QUFDZjtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFhO0FBQ2pCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUMrQjs7Ozs7OztVQ2QvQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05zRDtBQUN3QjtBQUM5RTtBQUNBLG1FQUFlO0FBQ2YsMkZBQXNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9ybV92YWxpZGF0aW9uX3Byb2plY3QvLi9zcmMvY29uc3RyYWludEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vZm9ybV92YWxpZGF0aW9uX3Byb2plY3QvLi9zcmMvY291bnRyeU9iamVjdC5qcyIsIndlYnBhY2s6Ly9mb3JtX3ZhbGlkYXRpb25fcHJvamVjdC8uL3NyYy9mb3JtX2NvbXBvbmVudHMvY29udGFjdEluZm9ybWF0aW9uLmpzIiwid2VicGFjazovL2Zvcm1fdmFsaWRhdGlvbl9wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Zvcm1fdmFsaWRhdGlvbl9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mb3JtX3ZhbGlkYXRpb25fcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Zvcm1fdmFsaWRhdGlvbl9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZm9ybV92YWxpZGF0aW9uX3Byb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ291bnRyeUNvbnN0cmFpbnQsIGxpc3RDb3VudHJpZXMgfSBmcm9tIFwiLi9jb3VudHJ5T2JqZWN0XCI7XHJcblxyXG4vLyBVU0FcclxuY3JlYXRlQ291bnRyeUNvbnN0cmFpbnQoXHJcbiAgXCJVbml0ZWQgU3RhdGVzXCIsXHJcbiAgXCJ1c2FcIixcclxuICBcIjE0XCIsXHJcbiAgL14oMVxccz9cXChcXGR7M31cXClcXHM/fDFcXHNcXGR7M31bXFxzLV0/fFxcKFxcZHszfVxcKVxccz98XFxkezN9W1xccy1dPylcXGR7M31bXFxzLV0/XFxkezR9JC8sXHJcbiAgXCIoMTIzKSAxMjMtMTIzNFwiLFxyXG4gIFwiMTBcIixcclxuICAvXlxcZHs1fSg/OlstXFxzXVxcZHs0fSk/JC8sXHJcbiAgXCIxMjM0NS0xMjM0XCJcclxuKTtcclxuXHJcbi8vIEJSWlxyXG5jcmVhdGVDb3VudHJ5Q29uc3RyYWludChcclxuICBcIkJyYXppbFwiLFxyXG4gIFwiYnJ6XCIsXHJcbiAgXCIxNFwiLFxyXG4gIC9eKFxcKD9bMC05XXsyfVxcKT8pPyA/KFswLTldezQsNX0pLT8oWzAtOV17NH0pJC9nbSxcclxuICBcIigxMikgMTIzNC0xMjM0XCIsXHJcbiAgXCI5XCIsXHJcbiAgL15cXGR7NX0tP1xcZHszfSQvLFxyXG4gIFwiMTIzNDUtMTIzXCJcclxuKTtcclxuXHJcbmZ1bmN0aW9uIHRlc3RlQ29uc3RyYWludCgpIHtcclxuICBsaXN0Q291bnRyaWVzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlbClcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHt0ZXN0ZUNvbnN0cmFpbnR9IiwiY29uc3QgbGlzdENvdW50cmllcyA9IFtdO1xyXG5cclxuY2xhc3MgQ291bnRyeUNvbnN0cmFpbnRzIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIG5hbWUsXHJcbiAgICB2YWx1ZSxcclxuICAgIHBob25lTGVuZ3RoLFxyXG4gICAgcGhvbmVQYXR0ZXJuLFxyXG4gICAgcGhvbmVQbGFjZWhvbGRlcixcclxuICAgIHppcExlbmd0aCxcclxuICAgIHppcFBhdHRlcm4sXHJcbiAgICB6aXBQbGFjZWhvbGRlclxyXG4gICkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuXHJcbiAgICB0aGlzLnBob25lTGVuZ3RoID0gcGhvbmVMZW5ndGg7XHJcbiAgICB0aGlzLnBob25lUGF0dGVybiA9IHBob25lUGF0dGVybjtcclxuICAgIHRoaXMucGhvbmVQbGFjZWhvbGRlciA9IHBob25lUGxhY2Vob2xkZXI7XHJcbiAgICB0aGlzLnBob25lVmFsaWRhdGlvbjtcclxuXHJcbiAgICB0aGlzLnppcExlbmd0aCA9IHppcExlbmd0aDtcclxuICAgIHRoaXMuemlwUGF0dGVybiA9IHppcFBhdHRlcm47XHJcbiAgICB0aGlzLnppcFBsYWNlaG9sZGVyID0gemlwUGxhY2Vob2xkZXI7XHJcbiAgICB0aGlzLnppcFZhbGlkYXRpb247XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb3VudHJ5Q29uc3RyYWludChcclxuICBuYW1lLFxyXG4gIHZhbHVlLFxyXG4gIHBob25lTGVuZ3RoLFxyXG4gIHBob25lUGF0dGVybixcclxuICBwaG9uZVBsYWNlaG9sZGVyLFxyXG4gIHppcExlbmd0aCxcclxuICB6aXBQYXR0ZXJuLFxyXG4gIHppcFBsYWNlaG9sZGVyXHJcbikge1xyXG4gIGNvbnN0IG5ld0NvdW50cnkgPSBuZXcgQ291bnRyeUNvbnN0cmFpbnRzKFxyXG4gICAgbmFtZSxcclxuICAgIHZhbHVlLFxyXG4gICAgcGhvbmVMZW5ndGgsXHJcbiAgICBwaG9uZVBhdHRlcm4sXHJcbiAgICBwaG9uZVBsYWNlaG9sZGVyLFxyXG4gICAgemlwTGVuZ3RoLFxyXG4gICAgemlwUGF0dGVybixcclxuICAgIHppcFBsYWNlaG9sZGVyXHJcbiAgKTtcclxuICBsaXN0Q291bnRyaWVzLnB1c2gobmV3Q291bnRyeSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUNvdW50cnlDb25zdHJhaW50LCBsaXN0Q291bnRyaWVzIH07IiwiaW1wb3J0IHsgbGlzdENvdW50cmllcyB9IGZyb20gXCIuLi9jb3VudHJ5T2JqZWN0XCI7XHJcblxyXG5jb25zdCBjb3VudHJ5U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb3VudHJ5XCIpO1xyXG5mdW5jdGlvbiBzZXRDb250YWN0SW5mb3JtYXRpb25zKCkge1xyXG4gICAgaW5zZXJ0T3B0aW9uKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluc2VydE9wdGlvbigpIHtcclxuICAgIGxpc3RDb3VudHJpZXMuZm9yRWFjaCgoY291bnRyeSkgPT4ge1xyXG4gICAgICBjb25zdCBjb3VudHJ5T3B0aW9uID0gbmV3IE9wdGlvbihjb3VudHJ5Lm5hbWUsIGNvdW50cnkudmFsdWUpO1xyXG4gICAgICBjb3VudHJ5U2VsZWN0LmFkZChjb3VudHJ5T3B0aW9uKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQge3NldENvbnRhY3RJbmZvcm1hdGlvbnN9XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgdGVzdGVDb25zdHJhaW50IH0gZnJvbSBcIi4vY29uc3RyYWludEZhY3RvcnlcIjtcclxuaW1wb3J0IHsgc2V0Q29udGFjdEluZm9ybWF0aW9ucyB9IGZyb20gXCIuL2Zvcm1fY29tcG9uZW50cy9jb250YWN0SW5mb3JtYXRpb25cIjtcclxuXHJcbnRlc3RlQ29uc3RyYWludCgpO1xyXG5zZXRDb250YWN0SW5mb3JtYXRpb25zKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==