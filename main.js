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

    //wipe current content
    const content = document.getElementById("content");
    content.innerHTML = '';


    const title = document.createElement('h2');
    title.textContent = "ABOUT";
    content.appendChild(title);

    const mainDiv = document.createElement('div');
    mainDiv.id = 'about-main'

    //left side paragraph
    const leftPara = document.createElement('div');
    leftPara.id = "leftPara";
    const leftP1 = document.createElement('p');
    const leftP2 = document.createElement('p');
    leftP1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula orci justo. Maecenas mi sapien, lacinia sit amet mattis vitae, dapibus non purus. Duis tincidunt vehicula dictum. Proin luctus, purus id varius rhoncus, ex ipsum maximus lectus, scelerisque pretium metus arcu eu dui. Praesent dignissim pharetra ligula pulvinar gravida. Duis in volutpat mi. Suspendisse vel risus vitae arcu tempus feugiat. Aliquam tincidunt feugiat tellus non sollicitudin.";
    leftP2.textContent = "Duis fermentum dapibus sapien quis dignissim. Integer ac lectus ac arcu luctus molestie ac eget odio. Ut porttitor massa sapien, malesuada posuere odio viverra non. Nam a auctor odio. Suspendisse rutrum lobortis libero, vel tempus ex maximus vitae. Donec dapibus pretium metus eu vehicula. In hac habitasse platea dictumst. Praesent dignissim posuere aliquet. Nunc eget libero ac turpis facilisis scelerisque. Duis viverra rhoncus arcu, sed mollis tellus aliquet vel. Etiam ante ex, placerat sit amet lacinia auctor, placerat nec lacus. Integer sed dapibus ante.";
    leftPara.appendChild(leftP1);
    leftPara.appendChild(leftP2);
    mainDiv.appendChild(leftPara);

    //right side paragraph 
    const rightPara = document.createElement('div');
    rightPara.id = "rightPara";
    const rightP1 = document.createElement ('p');
    const rightImg = new Image();
    rightImg.src = "../src/cup.jpg";
    rightImg.id = "about-page-image";
    rightP1.textContent = "Phasellus nec sodales erat. Fusce in nulla at libero tincidunt sagittis. In ut magna nec tellus laoreet gravida. Nunc consequat neque ac velit malesuada, ac fringilla libero ullamcorper. Duis finibus urna quis arcu sodales accumsan. Sed eleifend augue ut justo sodales, at congue augue molestie. Morbi sodales ante quis mattis elementum. Donec elementum bibendum leo, et dapibus justo dictum in. Quisque ac purus cursus, consectetur purus nec, facilisis nunc. Aenean dictum consequat risus, ac ornare mauris porta eu. Fusce ultrices neque id fringilla vulputate. Integer tincidunt enim vitae bibendum aliquet. Morbi pharetra eros quis tortor commodo, eu facilisis purus vulputate. Sed venenatis mi est, sit amet luctus lacus posuere et. Quisque tempor nec elit id vulputate.";
    rightPara.appendChild(rightImg);
    rightPara.appendChild(rightP1);
    mainDiv.appendChild(rightPara);

    
    content.appendChild(mainDiv);
    
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

    const content = document.getElementById("content");
    content.innerHTML = '';

    //title
    const title = document.createElement('h2');
    title.textContent = "MENU";
    content.appendChild(title);

    //breakfast section
    const brk = document.createElement('div');
    brk.classList = "menu-item";
    const brkHead = document.createElement('h3');
    brkHead.textContent = "BREAKFAST";

    //first item
    const brk1 = document.createElement('div');
    const brk1Head = document.createElement('h4');
    const brk1Body = document.createElement('p');
    brk1Head.textContent = "French Toast Breakfast Sandwich";
    brk1Body.textContent = "A sweet and filling treat that combines light, fluffy cream cheese and sweet blueberries and strawberries with pan-fried french toast.";
    brk1.appendChild(brk1Head);
    brk1.appendChild(brk1Body);

    //second item
    const brk2 = document.createElement('div');
    const brk2Head = document.createElement('h4');
    const brk2Body = document.createElement('p');
    brk2Head.textContent = "The Works";
    brk2Body.textContent = "Your standard breakfast-diner fare: eggs (done how you like them) and breakfast sausages with hashbrowns and your choice of toast on the side.";
    brk2.appendChild(brk2Head);
    brk2.appendChild(brk2Body);

    brk.appendChild(brkHead);
    brk.appendChild(brk1);
    brk.appendChild(brk2);



    //lunch section
    const lun = document.createElement('div');
    lun.classList = "menu-item";
    const lunHead = document.createElement ('h3');
    lunHead.textContent = "LUNCH";

    //first item 
    const lun1 = document.createElement('div');
    const lun1Head = document.createElement('h4');
    const lun1Body = document.createElement('p');
    lun1Head.textContent = "Chicken Noodle Soup Special";
    lun1Body.textContent = "Our famous, deliciously savoury chicken noodle soup, with a classy, down-to-earth charm.";
    lun1.appendChild(lun1Head);
    lun1.appendChild(lun1Body);

    //second item 
    const lun2 = document.createElement('div');
    const lun2Head = document.createElement('h4');
    const lun2Body = document.createElement('p');
    lun2Head.textContent = "Cucumber Sandwich";
    lun2Body.textContent = "A smaller snack, but not passing up on flavor, as this sandwich comes stacked with sliced cucumber, tomato, red onion, and lettuce, with the option to include extra mayonnaise. ";
    lun2.appendChild(lun2Head);
    lun2.appendChild(lun2Body); 

    lun.appendChild(lunHead);
    lun.appendChild(lun1);
    lun.appendChild(lun2);


    // dinner section 
    const din = document.createElement('div');
    din.classList = "menu-item";
    const dinHead= document.createElement('h3');
    dinHead.textContent = "DINNER";
    
    //first item
    const din1 = document.createElement('div');
    const din1Head = document.createElement('h4');
    const din1Body = document.createElement('p');
    din1Head.textContent = "Pizza & Wings Combo";
    din1Body.textContent = "The ultimate in comfort food! Try our fresh, wood-stove cooked pies today!";
    din1.appendChild(din1Head);
    din1.appendChild(din1Body);

    //second item 
    const din2 = document.createElement('div');
    const din2Head = document.createElement('h4');
    const din2Body = document.createElement('p');
    din2Head.textContent = "Beef Stew";
    din2Body.textContent = "Our beef stew is slow-cooked from the start of each morning to bring you the ultimate in savory goodness. Served with fresh buns for dipping.";
    din2.appendChild(din2Head);
    din2.appendChild(din2Body);

    din.appendChild(dinHead);
    din.appendChild(din1);
    din.appendChild(din2);    


    content.appendChild(brk);
    content.appendChild(lun);
    content.appendChild(din);
    

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
/* harmony import */ var _load_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-menu.js */ "./src/load-menu.js");
// module to populate website page with homepage content




const populate = function () {
    
    const content = document.getElementById("content");
    content.innerHTML = ''; //wipe any existing content before loading 


    
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
    FCHeader.textContent = "BREAKFAST SANDWICH SPECIAL";
    FCbody.textContent = "Don't miss out on the heavenly goodness of our french toast and berry breakfast sandwiches, now available for a limited time at 90% OFF!";
    firstCardText.id = "FCtext"

    // order button 
    const FCbtn = document.createElement('button');
    FCbtn.id= "FCbtn";
    FCbtn.textContent = "ORDER NOW";

    
    firstCardText.appendChild(FCHeader);
    firstCardText.appendChild(FCbody);
    firstCardText.appendChild(FCbtn);
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

    //second card text content
    const secondCardText = document.createElement('div');
    secondCardText.id = "SCtext";
    const SCHeader = document.createElement('h3');
    const SCBody = document.createElement('p');
    SCHeader.textContent = "LUNCH OPTION HIGHLIGHTS";
    SCBody.textContent = "Gift yourself with a savoury warm treat with our special lunch offers, including our special chicken noodle stew. ";


    // extra menu button 
    const SCbtn = document.createElement('button');
    SCbtn.id= "SCbtn";
    SCbtn.textContent = "VIEW MENU";

    secondCardText.appendChild (SCHeader);
    secondCardText.appendChild (SCBody);
    secondCardText.appendChild (SCbtn);

    secondCard.appendChild(secondCardImage);
    secondCard.appendChild(secondCardText);
    content.appendChild(secondCard);


    // both buttons will load the menu tab
    FCbtn.addEventListener('click', _load_menu_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
    SCbtn.addEventListener('click', _load_menu_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
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