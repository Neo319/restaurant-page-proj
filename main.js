/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/load-about.js":
/*!***************************!*\
  !*** ./src/load-about.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//module for loading about page

const about = function () {
    console.log("loading about page!");

    //wipe current content
    const content = document.getElementById("content");
    content.innerHTML = '';

    //load about page (temp)
    const temp = document.createElement("div");
    temp.textContent = "Hi! I'm an about page!"
    content.appendChild(temp);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);

/***/ }),

/***/ "./src/load-logo.js":
/*!**************************!*\
  !*** ./src/load-logo.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// module for loading the logo inside the header element.

const loadLogo = function () {
    const header = document.querySelector('header');
    const logoDiv = document.createElement('div');
    logoDiv.id = 'logoDiv';

    const logo = new Image()
    logo.src = "../src/logo.png"
    logo.id = "logo"

    const logoText = document.createElement("span");
    logoText.textContent = "Smilee's Diner";

    logoDiv.appendChild(logo);
    logoDiv.appendChild(logoText);

    header.insertBefore(logoDiv, header.firstChild)
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadLogo);

/***/ }),

/***/ "./src/load-menu.js":
/*!**************************!*\
  !*** ./src/load-menu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//module for loading menu page

const menu = function () {
    console.log("loading menu page");

    const content = document.getElementById("content");
    content.innerHTML = '';

    content.textContent = "Menu page here!"
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

/***/ "./src/populate-content.js":
/*!*********************************!*\
  !*** ./src/populate-content.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// module to populate website page with homepage content


const populate = function () {
    console.log ("I'm here, from populate-content.js!")
    
    const content = document.getElementById("content");
    content.innerHTML = ''; //wipe any existing content before loading 

    //test
    const temp = document.createElement("div");
    temp.textContent = "content...";
    content.appendChild(temp);

    
    //first image
    const firstCard = document.createElement("div");
    firstCard.id= "firstCard"
    const firstCardImage = new Image();
    firstCardImage.src = '../src/food-1.jpg';
    firstCardImage.id = 'food-1';
    firstCardImage.classList = "food-img";
    firstCardImage.alt = "french toast with berries";

    //contents of first card displayed over image
    const firstCardText = document.createElement("div");
    const FCHeader = document.createElement("h3");
    const FCbody = document.createElement("p");
    FCHeader.textContent = "Header";
    FCbody.textContent = "lorem uspum sum doloret ... etc."
    firstCardText.id = "FCtext"
    
    firstCardText.appendChild(FCHeader);
    firstCardText.appendChild(FCbody);
    firstCard.appendChild(firstCardText);


    firstCard.appendChild(firstCardImage);
    content.appendChild(firstCard);


    //second image
    const secondCard = document.createElement("div");
    secondCard.id = "secondCard"
    const secondCardImage = new Image();
    secondCardImage.src = '../src/food-2.jpg';
    secondCardImage.id = 'food-2';
    secondCardImage.classList = "food-img"
    secondCardImage.alt= "chicken noodle soup";

    secondCard.appendChild(secondCardImage);
    content.appendChild(secondCard);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populate);

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
/* harmony import */ var _populate_content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./populate-content.js */ "./src/populate-content.js");
/* harmony import */ var _load_about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-about.js */ "./src/load-about.js");
/* harmony import */ var _load_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./load-menu.js */ "./src/load-menu.js");
/* harmony import */ var _load_logo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./load-logo.js */ "./src/load-logo.js");





console.log("Hi, I am from index.js!");
(0,_load_logo_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_populate_content_js__WEBPACK_IMPORTED_MODULE_0__["default"])();


//next: set event listeners on nav buttons to wipe div#content 
// and run the appropriate tab module.

// nav buttons
const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const aboutBtn = document.getElementById("about");

homeBtn.addEventListener('click', _populate_content_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
menuBtn.addEventListener('click', _load_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])
aboutBtn.addEventListener('click', _load_about_js__WEBPACK_IMPORTED_MODULE_1__["default"]);



})();

/******/ })()
;
//# sourceMappingURL=main.js.map