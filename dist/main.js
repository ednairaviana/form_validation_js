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


(0,_constraintFactory__WEBPACK_IMPORTED_MODULE_0__.testeConstraint)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBeUU7QUFDekU7QUFDQTtBQUNBLHVFQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxjQUFjLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRTtBQUM5RTtBQUNBO0FBQ0EsT0FBTyxFQUFFLFdBQVcsRUFBRTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxjQUFjLEVBQUUsY0FBYyxJQUFJLFVBQVUsRUFBRTtBQUM5QztBQUNBO0FBQ0EsT0FBTyxFQUFFLEtBQUssRUFBRTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseURBQWE7QUFDZjtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2xEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnNEO0FBQ3REO0FBQ0EsbUVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JtX3ZhbGlkYXRpb25fcHJvamVjdC8uL3NyYy9jb25zdHJhaW50RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9mb3JtX3ZhbGlkYXRpb25fcHJvamVjdC8uL3NyYy9jb3VudHJ5T2JqZWN0LmpzIiwid2VicGFjazovL2Zvcm1fdmFsaWRhdGlvbl9wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Zvcm1fdmFsaWRhdGlvbl9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mb3JtX3ZhbGlkYXRpb25fcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Zvcm1fdmFsaWRhdGlvbl9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZm9ybV92YWxpZGF0aW9uX3Byb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ291bnRyeUNvbnN0cmFpbnQsIGxpc3RDb3VudHJpZXMgfSBmcm9tIFwiLi9jb3VudHJ5T2JqZWN0XCI7XHJcblxyXG4vLyBVU0FcclxuY3JlYXRlQ291bnRyeUNvbnN0cmFpbnQoXHJcbiAgXCJVbml0ZWQgU3RhdGVzXCIsXHJcbiAgXCJ1c2FcIixcclxuICBcIjE0XCIsXHJcbiAgL14oMVxccz9cXChcXGR7M31cXClcXHM/fDFcXHNcXGR7M31bXFxzLV0/fFxcKFxcZHszfVxcKVxccz98XFxkezN9W1xccy1dPylcXGR7M31bXFxzLV0/XFxkezR9JC8sXHJcbiAgXCIoMTIzKSAxMjMtMTIzNFwiLFxyXG4gIFwiMTBcIixcclxuICAvXlxcZHs1fSg/OlstXFxzXVxcZHs0fSk/JC8sXHJcbiAgXCIxMjM0NS0xMjM0XCJcclxuKTtcclxuXHJcbi8vIEJSWlxyXG5jcmVhdGVDb3VudHJ5Q29uc3RyYWludChcclxuICBcIkJyYXppbFwiLFxyXG4gIFwiYnJ6XCIsXHJcbiAgXCIxNFwiLFxyXG4gIC9eKFxcKD9bMC05XXsyfVxcKT8pPyA/KFswLTldezQsNX0pLT8oWzAtOV17NH0pJC9nbSxcclxuICBcIigxMikgMTIzNC0xMjM0XCIsXHJcbiAgXCI5XCIsXHJcbiAgL15cXGR7NX0tP1xcZHszfSQvLFxyXG4gIFwiMTIzNDUtMTIzXCJcclxuKTtcclxuXHJcbmZ1bmN0aW9uIHRlc3RlQ29uc3RyYWludCgpIHtcclxuICBsaXN0Q291bnRyaWVzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlbClcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHt0ZXN0ZUNvbnN0cmFpbnR9IiwiY29uc3QgbGlzdENvdW50cmllcyA9IFtdO1xyXG5cclxuY2xhc3MgQ291bnRyeUNvbnN0cmFpbnRzIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIG5hbWUsXHJcbiAgICB2YWx1ZSxcclxuICAgIHBob25lTGVuZ3RoLFxyXG4gICAgcGhvbmVQYXR0ZXJuLFxyXG4gICAgcGhvbmVQbGFjZWhvbGRlcixcclxuICAgIHppcExlbmd0aCxcclxuICAgIHppcFBhdHRlcm4sXHJcbiAgICB6aXBQbGFjZWhvbGRlclxyXG4gICkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuXHJcbiAgICB0aGlzLnBob25lTGVuZ3RoID0gcGhvbmVMZW5ndGg7XHJcbiAgICB0aGlzLnBob25lUGF0dGVybiA9IHBob25lUGF0dGVybjtcclxuICAgIHRoaXMucGhvbmVQbGFjZWhvbGRlciA9IHBob25lUGxhY2Vob2xkZXI7XHJcbiAgICB0aGlzLnBob25lVmFsaWRhdGlvbjtcclxuXHJcbiAgICB0aGlzLnppcExlbmd0aCA9IHppcExlbmd0aDtcclxuICAgIHRoaXMuemlwUGF0dGVybiA9IHppcFBhdHRlcm47XHJcbiAgICB0aGlzLnppcFBsYWNlaG9sZGVyID0gemlwUGxhY2Vob2xkZXI7XHJcbiAgICB0aGlzLnppcFZhbGlkYXRpb247XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb3VudHJ5Q29uc3RyYWludChcclxuICBuYW1lLFxyXG4gIHZhbHVlLFxyXG4gIHBob25lTGVuZ3RoLFxyXG4gIHBob25lUGF0dGVybixcclxuICBwaG9uZVBsYWNlaG9sZGVyLFxyXG4gIHppcExlbmd0aCxcclxuICB6aXBQYXR0ZXJuLFxyXG4gIHppcFBsYWNlaG9sZGVyXHJcbikge1xyXG4gIGNvbnN0IG5ld0NvdW50cnkgPSBuZXcgQ291bnRyeUNvbnN0cmFpbnRzKFxyXG4gICAgbmFtZSxcclxuICAgIHZhbHVlLFxyXG4gICAgcGhvbmVMZW5ndGgsXHJcbiAgICBwaG9uZVBhdHRlcm4sXHJcbiAgICBwaG9uZVBsYWNlaG9sZGVyLFxyXG4gICAgemlwTGVuZ3RoLFxyXG4gICAgemlwUGF0dGVybixcclxuICAgIHppcFBsYWNlaG9sZGVyXHJcbiAgKTtcclxuICBsaXN0Q291bnRyaWVzLnB1c2gobmV3Q291bnRyeSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUNvdW50cnlDb25zdHJhaW50LCBsaXN0Q291bnRyaWVzIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyB0ZXN0ZUNvbnN0cmFpbnQgfSBmcm9tIFwiLi9jb25zdHJhaW50RmFjdG9yeVwiO1xyXG5cclxudGVzdGVDb25zdHJhaW50KCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==