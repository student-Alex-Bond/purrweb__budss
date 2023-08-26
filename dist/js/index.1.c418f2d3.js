/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/component/advantages/advantages.js":
/*!************************************************!*\
  !*** ./src/component/advantages/advantages.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() => {\n  const paragraphs = document.querySelectorAll('.advantages__string');\n  const lastElement = 2;\n  const string = `<span class='advantages__string'>\n             Growth in New <br class='advantages__br'> Customers</span>`;\n  paragraphs[lastElement].insertAdjacentHTML('afterend', string);\n  paragraphs[lastElement].parentNode.removeChild(paragraphs[lastElement]);\n})());\n\n//# sourceURL=webpack://purrweb__budss/./src/component/advantages/advantages.js?");

/***/ }),

/***/ "./src/component/burger/burger.js":
/*!****************************************!*\
  !*** ./src/component/burger/burger.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() => {\n  const iconClose = document.querySelector('.nav__img');\n  const buttonBurger = document.querySelector('.hamburger');\n  const overlay = document.querySelector('.nav__overlay');\n  const showMenu = () => {\n    if (overlay.classList.contains('show-menu')) {\n      document.body.style = '';\n      overlay.classList.remove('show-menu');\n    } else {\n      document.body.style.overflowY = 'hidden';\n      overlay.classList.add('show-menu');\n    }\n  };\n  buttonBurger.addEventListener('click', showMenu);\n  iconClose.addEventListener('click', showMenu);\n})());\n\n//# sourceURL=webpack://purrweb__budss/./src/component/burger/burger.js?");

/***/ }),

/***/ "./src/component/cookie/cookie.js":
/*!****************************************!*\
  !*** ./src/component/cookie/cookie.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() => {\n  const cookie = document.querySelector('.cookie');\n  const childrenButtonsCookie = cookie.querySelectorAll('button');\n  const timerId = setTimeout(() => {\n    cookie.classList.add('view-cookie');\n    clearTimeout(timerId);\n  }, 3000);\n  childrenButtonsCookie.forEach(elem => {\n    elem.addEventListener('click', () => {\n      cookie.classList.remove('view-cookie');\n    });\n  });\n})());\n\n//# sourceURL=webpack://purrweb__budss/./src/component/cookie/cookie.js?");

/***/ }),

/***/ "./src/component/form/form.js":
/*!************************************!*\
  !*** ./src/component/form/form.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() => {\n  const showPopup = document.querySelector('.form__popup');\n  const form = document.querySelector('.form');\n  const closeForm = form.querySelector('.form__btn-close');\n  const inputs = form.querySelectorAll('.required__field');\n  const error = form.querySelector('.form__error-message--bottom');\n  const formBtn = form.querySelector('.form__btn');\n  const modalSuccess = document.querySelector('.success');\n  const inputName = 0;\n  const inputEmail = 1;\n  const inputTel = 2;\n  const showForm = () => {\n    showPopup.classList.toggle('show-form');\n  };\n  inputs[inputTel].classList.add('flag');\n  const validateForm = event => {\n    const isEmptyInputName = Boolean(inputs[inputName].value);\n    const isEmptyInputEmail = Boolean(inputs[inputEmail].value);\n    const isEmptyInputTel = Boolean(inputs[inputTel].value);\n    const element = event.target;\n    const silbingElement = element.nextElementSibling;\n    if (element.value === '') {\n      element.classList.add('form__input--error');\n      silbingElement.style.display = 'block';\n    } else {\n      element.classList.remove('form__input--error');\n      silbingElement.style.display = 'none';\n    }\n    if (isEmptyInputName && isEmptyInputEmail && isEmptyInputTel) {\n      formBtn.classList.remove('btn-disabled');\n      error.style.display = 'none';\n      formBtn.disabled = false;\n    } else {\n      formBtn.disabled = true;\n      error.style.display = 'block';\n      formBtn.classList.add('btn-disabled');\n    }\n  };\n  const prefixNumber = str => {\n    if (str === '7') {\n      return '7 (';\n    }\n    if (str === '8') {\n      return '8 (';\n    }\n    if (str === '9') {\n      return '7 (9';\n    }\n    return '7 (';\n  };\n  const inputNumberMask = () => {\n    const value = inputs[inputTel].value.replace(/\\D+/g, '');\n    const numberLength = 11;\n    let result;\n    if (inputs[inputTel].value.includes('+8') || inputs[inputTel].value[0] === '8') {\n      result = '';\n    } else {\n      result = '+';\n    }\n    for (let i = 0; i < value.length && i < numberLength; i += 1) {\n      switch (i) {\n        case 0:\n          result += prefixNumber(value[i]);\n          continue;\n        case 4:\n          result += ') ';\n          break;\n        case 7:\n          result += '-';\n          break;\n        case 9:\n          result += '-';\n          break;\n        default:\n          break;\n      }\n      result += value[i];\n    }\n    inputs[inputTel].value = result;\n  };\n  const sendForm = event => {\n    event.preventDefault();\n    showForm();\n    modalSuccess.style.animationDuration = '1s';\n    modalSuccess.style.animationName = 'animation-for-modal-success';\n    modalSuccess.classList.add('show-success');\n  };\n  inputs[inputTel].addEventListener('input', inputNumberMask);\n  inputs.forEach(input => {\n    input.addEventListener('keyup', validateForm);\n  });\n  closeForm.addEventListener('click', showForm);\n  form.addEventListener('submit', sendForm);\n  document.body.addEventListener('click', event => {\n    if (event.target.classList.contains('show-form')) {\n      showForm();\n    }\n  });\n})());\n\n//# sourceURL=webpack://purrweb__budss/./src/component/form/form.js?");

/***/ }),

/***/ "./src/component/modal_success/modal_success.js":
/*!******************************************************!*\
  !*** ./src/component/modal_success/modal_success.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst success = document.querySelector('.success');\nconst btns = success.querySelectorAll('button');\nconst showModal = () => {\n  success.style.animation = '';\n  success.classList.toggle('show-success');\n};\nbtns.forEach(btn => {\n  btn.addEventListener('click', showModal);\n});\n\n//# sourceURL=webpack://purrweb__budss/./src/component/modal_success/modal_success.js?");

/***/ }),

/***/ "./src/component/tabs/tabs.js":
/*!************************************!*\
  !*** ./src/component/tabs/tabs.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() => {\n  const btns = document.querySelectorAll('.tabs__button');\n  btns.forEach(it => {\n    it.addEventListener('click', event => {\n      btns.forEach(btn => {\n        btn.classList.remove('tabs__button-active');\n      });\n      event.target.classList.add('tabs__button-active');\n    });\n  });\n})());\n\n//# sourceURL=webpack://purrweb__budss/./src/component/tabs/tabs.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_cookie_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/cookie/cookie */ \"./src/component/cookie/cookie.js\");\n/* harmony import */ var _component_burger_burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/burger/burger */ \"./src/component/burger/burger.js\");\n/* harmony import */ var _component_form_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/form/form */ \"./src/component/form/form.js\");\n/* harmony import */ var _component_modal_success_modal_success__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/modal_success/modal_success */ \"./src/component/modal_success/modal_success.js\");\n/* harmony import */ var _component_advantages_advantages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/advantages/advantages */ \"./src/component/advantages/advantages.js\");\n/* harmony import */ var _component_tabs_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/tabs/tabs */ \"./src/component/tabs/tabs.js\");\n\n\n\n\n\n\n\n//# sourceURL=webpack://purrweb__budss/./src/js/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;