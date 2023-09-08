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
  "zip validation"
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
  "zip validation"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBeUU7QUFDekU7QUFDQTtBQUNBLHVFQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxjQUFjLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRTtBQUM5RTtBQUNBO0FBQ0EsT0FBTyxFQUFFLFdBQVcsRUFBRTtBQUN0QjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0JBQWtCLElBQUksa0JBQWtCO0FBQ2hFO0FBQ0E7QUFDQSx3QkFBd0Isa0JBQWtCLElBQUksa0JBQWtCLEdBQUc7QUFDbkU7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxjQUFjLEVBQUUsY0FBYyxJQUFJLFVBQVUsRUFBRTtBQUM5QztBQUNBO0FBQ0EsT0FBTyxFQUFFLEtBQUssRUFBRTtBQUNoQjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0JBQWtCLElBQUksa0JBQWtCO0FBQ2hFO0FBQ0E7QUFDQSx3QkFBd0Isa0JBQWtCLElBQUksa0JBQWtCLEdBQUc7QUFDbkU7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseURBQWE7QUFDZjtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDa0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4REQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUUseURBQWE7QUFDZjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDa0M7Ozs7Ozs7VUNsQ2xDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnNEO0FBQ3dCO0FBQzlFO0FBQ0EsbUVBQWU7QUFDZiwyRkFBc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JtX3ZhbGlkYXRpb25fcHJvamVjdC8uL3NyYy9jb25zdHJhaW50RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9mb3JtX3ZhbGlkYXRpb25fcHJvamVjdC8uL3NyYy9jb3VudHJ5T2JqZWN0LmpzIiwid2VicGFjazovL2Zvcm1fdmFsaWRhdGlvbl9wcm9qZWN0Ly4vc3JjL2Zvcm1fY29tcG9uZW50cy9jb250YWN0SW5mb3JtYXRpb24uanMiLCJ3ZWJwYWNrOi8vZm9ybV92YWxpZGF0aW9uX3Byb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZm9ybV92YWxpZGF0aW9uX3Byb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Zvcm1fdmFsaWRhdGlvbl9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZm9ybV92YWxpZGF0aW9uX3Byb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mb3JtX3ZhbGlkYXRpb25fcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb3VudHJ5Q29uc3RyYWludCwgbGlzdENvdW50cmllcyB9IGZyb20gXCIuL2NvdW50cnlPYmplY3RcIjtcclxuXHJcbi8vIFVTQVxyXG5jcmVhdGVDb3VudHJ5Q29uc3RyYWludChcclxuICBcIlVuaXRlZCBTdGF0ZXNcIixcclxuICBcInVzYVwiLFxyXG4gIFwiMTRcIixcclxuICAvXigxXFxzP1xcKFxcZHszfVxcKVxccz98MVxcc1xcZHszfVtcXHMtXT98XFwoXFxkezN9XFwpXFxzP3xcXGR7M31bXFxzLV0/KVxcZHszfVtcXHMtXT9cXGR7NH0kLyxcclxuICBcIigxMjMpIDEyMy0xMjM0XCIsXHJcbiAgXCIxMFwiLFxyXG4gIC9eXFxkezV9KD86Wy1cXHNdXFxkezR9KT8kLyxcclxuICBcIjEyMzQ1LTEyMzRcIixcclxuICAodmFsdWUsIGlucHV0KSA9PiB7XHJcbiAgICBpZiAodmFsdWUubGVuZ3RoID4gMykge1xyXG4gICAgICBpbnB1dC52YWx1ZSA9IGAoJHt2YWx1ZS5zbGljZSgwLCAzKX0pICR7dmFsdWUuc2xpY2UoMywgNil9YDtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZS5sZW5ndGggPiA2KSB7XHJcbiAgICAgIGlucHV0LnZhbHVlID0gYCgke3ZhbHVlLnNsaWNlKDAsIDMpfSkgJHt2YWx1ZS5zbGljZSgzLCA2KX0tJHt2YWx1ZS5zbGljZShcclxuICAgICAgICA2LFxyXG4gICAgICAgIDEwXHJcbiAgICAgICl9YDtcclxuICAgIH1cclxuICB9LFxyXG4gIFwiemlwIHZhbGlkYXRpb25cIlxyXG4pO1xyXG5cclxuLy8gQlJaXHJcbmNyZWF0ZUNvdW50cnlDb25zdHJhaW50KFxyXG4gIFwiQnJhemlsXCIsXHJcbiAgXCJicnpcIixcclxuICBcIjE0XCIsXHJcbiAgL14oXFwoP1swLTldezJ9XFwpPyk/ID8oWzAtOV17NCw1fSktPyhbMC05XXs0fSkkL2dtLFxyXG4gIFwiKDEyKSAxMjM0LTEyMzRcIixcclxuICBcIjlcIixcclxuICAvXlxcZHs1fS0/XFxkezN9JC8sXHJcbiAgXCIxMjM0NS0xMjNcIixcclxuICAodmFsdWUsIGlucHV0KSA9PiB7XHJcbiAgICBpZiAodmFsdWUubGVuZ3RoID4gMikge1xyXG4gICAgICBpbnB1dC52YWx1ZSA9IGAoJHt2YWx1ZS5zbGljZSgwLCAyKX0pICR7dmFsdWUuc2xpY2UoMiwgNil9YDtcclxuICAgIH1cclxuICAgIGlmICh2YWx1ZS5sZW5ndGggPiA2KSB7XHJcbiAgICAgIGlucHV0LnZhbHVlID0gYCgke3ZhbHVlLnNsaWNlKDAsIDIpfSkgJHt2YWx1ZS5zbGljZSgyLCA2KX0tJHt2YWx1ZS5zbGljZShcclxuICAgICAgICA2LFxyXG4gICAgICAgIDEwXHJcbiAgICAgICl9YDtcclxuICAgIH1cclxuICB9LFxyXG4gIFwiemlwIHZhbGlkYXRpb25cIlxyXG4pO1xyXG5cclxuZnVuY3Rpb24gdGVzdGVDb25zdHJhaW50KCkge1xyXG4gIGxpc3RDb3VudHJpZXMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGVsKVxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQge3Rlc3RlQ29uc3RyYWludH0iLCJjb25zdCBsaXN0Q291bnRyaWVzID0gW107XHJcblxyXG5jbGFzcyBDb3VudHJ5Q29uc3RyYWludHMge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgbmFtZSxcclxuICAgIHZhbHVlLFxyXG4gICAgcGhvbmVMZW5ndGgsXHJcbiAgICBwaG9uZVBhdHRlcm4sXHJcbiAgICBwaG9uZVBsYWNlaG9sZGVyLFxyXG4gICAgemlwTGVuZ3RoLFxyXG4gICAgemlwUGF0dGVybixcclxuICAgIHppcFBsYWNlaG9sZGVyXHJcbiAgKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG5cclxuICAgIHRoaXMucGhvbmVMZW5ndGggPSBwaG9uZUxlbmd0aDtcclxuICAgIHRoaXMucGhvbmVQYXR0ZXJuID0gcGhvbmVQYXR0ZXJuO1xyXG4gICAgdGhpcy5waG9uZVBsYWNlaG9sZGVyID0gcGhvbmVQbGFjZWhvbGRlcjtcclxuICAgIHRoaXMucGhvbmVWYWxpZGF0aW9uO1xyXG5cclxuICAgIHRoaXMuemlwTGVuZ3RoID0gemlwTGVuZ3RoO1xyXG4gICAgdGhpcy56aXBQYXR0ZXJuID0gemlwUGF0dGVybjtcclxuICAgIHRoaXMuemlwUGxhY2Vob2xkZXIgPSB6aXBQbGFjZWhvbGRlcjtcclxuICAgIHRoaXMuemlwVmFsaWRhdGlvbjtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvdW50cnlDb25zdHJhaW50KFxyXG4gIG5hbWUsXHJcbiAgdmFsdWUsXHJcbiAgcGhvbmVMZW5ndGgsXHJcbiAgcGhvbmVQYXR0ZXJuLFxyXG4gIHBob25lUGxhY2Vob2xkZXIsXHJcbiAgemlwTGVuZ3RoLFxyXG4gIHppcFBhdHRlcm4sXHJcbiAgemlwUGxhY2Vob2xkZXIsXHJcblx0cGhvbmUsXHJcblx0emlwXHJcbikge1xyXG4gIGNvbnN0IG5ld0NvdW50cnkgPSBuZXcgQ291bnRyeUNvbnN0cmFpbnRzKFxyXG4gICAgbmFtZSxcclxuICAgIHZhbHVlLFxyXG4gICAgcGhvbmVMZW5ndGgsXHJcbiAgICBwaG9uZVBhdHRlcm4sXHJcbiAgICBwaG9uZVBsYWNlaG9sZGVyLFxyXG4gICAgemlwTGVuZ3RoLFxyXG4gICAgemlwUGF0dGVybixcclxuICAgIHppcFBsYWNlaG9sZGVyLFxyXG4gICk7XHJcbiAgbmV3Q291bnRyeS5waG9uZVZhbGlkYXRpb24gPSBwaG9uZTtcclxuICBuZXdDb3VudHJ5LnppcFZhbGlkYXRpb24gPSB6aXA7XHJcblxyXG4gIGxpc3RDb3VudHJpZXMucHVzaChuZXdDb3VudHJ5KTtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlQ291bnRyeUNvbnN0cmFpbnQsIGxpc3RDb3VudHJpZXMgfTtcclxuIiwiaW1wb3J0IHsgbGlzdENvdW50cmllcyB9IGZyb20gXCIuLi9jb3VudHJ5T2JqZWN0XCI7XHJcblxyXG4vLyBET00gQ09OU1RTXHJcbmNvbnN0IGNvdW50cnlTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvdW50cnlcIik7XHJcbmNvbnN0IHBob25lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bob25lXCIpO1xyXG5jb25zdCB6aXBJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjemlwX2NvZGVcIik7XHJcblxyXG4vLyBNQUlOIEZVTkNUSU9OXHJcbmZ1bmN0aW9uIHNldENvbnRhY3RJbmZvcm1hdGlvbnMoKSB7XHJcbiAgaW5zZXJ0T3B0aW9uKCk7XHJcbiAgY291bnRyeVNlbGVjdE9uSW5wdXQoKTtcclxufVxyXG5cclxuLy8gQ09NUE9ORU5UUyBGVU5DVElPTlNcclxuXHJcbmZ1bmN0aW9uIGNvdW50cnlTZWxlY3RPbklucHV0KCkge1xyXG4gIGNvdW50cnlTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgIGxpc3RDb3VudHJpZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICBsZXQgY291bnRyeSA9IGVsZW1lbnQ7XHJcbiAgICAgIGlmIChjb3VudHJ5U2VsZWN0LnZhbHVlID09PSBjb3VudHJ5LnZhbHVlKSB7XHJcbiAgICAgICAgcGhvbmVJbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgY29uc29sZS5sb2coY291bnRyeS52YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnRPcHRpb24oKSB7XHJcbiAgbGlzdENvdW50cmllcy5mb3JFYWNoKChjb3VudHJ5KSA9PiB7XHJcbiAgICBjb25zdCBjb3VudHJ5T3B0aW9uID0gbmV3IE9wdGlvbihjb3VudHJ5Lm5hbWUsIGNvdW50cnkudmFsdWUpO1xyXG4gICAgY291bnRyeVNlbGVjdC5hZGQoY291bnRyeU9wdGlvbik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHNldENvbnRhY3RJbmZvcm1hdGlvbnMgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyB0ZXN0ZUNvbnN0cmFpbnQgfSBmcm9tIFwiLi9jb25zdHJhaW50RmFjdG9yeVwiO1xyXG5pbXBvcnQgeyBzZXRDb250YWN0SW5mb3JtYXRpb25zIH0gZnJvbSBcIi4vZm9ybV9jb21wb25lbnRzL2NvbnRhY3RJbmZvcm1hdGlvblwiO1xyXG5cclxudGVzdGVDb25zdHJhaW50KCk7XHJcbnNldENvbnRhY3RJbmZvcm1hdGlvbnMoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9