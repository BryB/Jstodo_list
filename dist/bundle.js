/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/*! exports provided: initFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initFooter\", function() { return initFooter; });\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ \"./src/helpers.js\");\n\r\n\r\nfunction initFooter() {\r\n  let footer = `<footer><h3>Meticulously made\r\n  and proudly displayed</h3></footer`;\r\n\r\n  Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"renderElement\"])('#body', footer);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/*! exports provided: initHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initHeader\", function() { return initHeader; });\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ \"./src/helpers.js\");\n\r\n\r\nfunction initHeader () {\r\n  let header = `<header><h1>Todo<h1></header>`;\r\n  Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"renderElement\"])('#body', header);\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/header.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: renderElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderElement\", function() { return renderElement; });\nfunction renderElement(id, element) {\r\n  let content = document.querySelector(id);\r\n  content.innerHTML += element;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: taskManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"taskManager\", function() { return taskManager; });\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n/* harmony import */ var _tabs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.js */ \"./src/tabs.js\");\n/* harmony import */ var _listOptions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listOptions.js */ \"./src/listOptions.js\");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.js */ \"./src/footer.js\");\n/* harmony import */ var _listContainer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listContainer.js */ \"./src/listContainer.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst taskManager = (() => {\r\n  let id = 0;\r\n  let ids = [];\r\n  const getId = () => `id${id}`;\r\n  const incId = () => ++id;\r\n  const storeId = () => {\r\n    ids.push(getId());\r\n  };\r\n  const retrieveId = (ele) => {\r\n    return ids.filter(id => id.indexof(ele) > -1);\r\n  };\r\n  return {\r\n    getId,\r\n    incId,\r\n    storeId,\r\n    retrieveId,\r\n  };\r\n})();\r\n\r\nfunction toDoList() {\r\n  Object(_header_js__WEBPACK_IMPORTED_MODULE_0__[\"initHeader\"])();\r\n  Object(_tabs_js__WEBPACK_IMPORTED_MODULE_1__[\"initTabs\"])();\r\n  Object(_listOptions_js__WEBPACK_IMPORTED_MODULE_2__[\"initOptions\"])();\r\n  Object(_listContainer_js__WEBPACK_IMPORTED_MODULE_4__[\"renderContainer\"])();\r\n  Object(_footer_js__WEBPACK_IMPORTED_MODULE_3__[\"initFooter\"])();\r\n  Object(_listOptions_js__WEBPACK_IMPORTED_MODULE_2__[\"initTaskHandler\"])();\r\n}\r\n\r\n\r\ntoDoList();\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/listContainer.js":
/*!******************************!*\
  !*** ./src/listContainer.js ***!
  \******************************/
/*! exports provided: renderContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderContainer\", function() { return renderContainer; });\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ \"./src/helpers.js\");\n\r\n\r\nfunction renderContainer() {\r\n  let container = `<section id=\"container\">\r\n  <section id=\"wrapper\">\r\n  </section>\r\n  </section>`;\r\n\r\n  Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"renderElement\"])('#body', container);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/listContainer.js?");

/***/ }),

/***/ "./src/listOptions.js":
/*!****************************!*\
  !*** ./src/listOptions.js ***!
  \****************************/
/*! exports provided: initOptions, initTaskHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initOptions\", function() { return initOptions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initTaskHandler\", function() { return initTaskHandler; });\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ \"./src/helpers.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\r\n\r\n// TODO: must clean-up css file and rename classes/id's.\r\n\r\nfunction initOptions() {\r\n  let options = `<div class=\"topnav\">\r\n    <button id=\"n_task\">New</button>\r\n    </div>`;\r\n  Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"renderElement\"])('#body', options);\r\n}\r\n\r\nfunction createtask(title, priority, desc) {\r\n  if(!title || !priority || !desc)\r\n    return;\r\n  let delButton = `<button id=\"${_index_js__WEBPACK_IMPORTED_MODULE_1__[\"taskManager\"].getId()}\"class=\"del\">X</button><br>`;\r\n  let task = `<div class=\"tasks\">`;\r\n  let task_title = `<h1>${title}</h1>`;\r\n  let task_priority = `<h1>Priority: ${priority}</h1>`;\r\n  let description = `<p>${desc}</p>`;\r\n  task += delButton + task_title + task_priority + description + '</div>';\r\n  Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"renderElement\"])('#wrapper', task);\r\n  initDeleteButton();\r\n}\r\n\r\nfunction collectInfo() {\r\n  let title = document.getElementById('title').value;\r\n  let desc = document.getElementById('desc').value;\r\n  let priority = document.querySelectorAll('#priority');\r\n  let p_val = '';\r\n  for(let i = 0; i < priority.length; ++i)\r\n    if(priority[i].checked)\r\n      p_val = priority[i].value;\r\n\r\n  createtask(title, p_val, desc);\r\n}\r\n\r\nfunction resetForm () {\r\n  let title = document.getElementById('title').value = '';\r\n  let desc = document.getElementById('desc').value = '';\r\n  let priority = document.querySelectorAll('#priority');\r\n\r\n  for(let i = 0; i < priority.length; ++i)\r\n    priority[i].checked = false;\r\n}\r\n\r\nfunction closeForm(modal) {\r\n  if(!modal)\r\n    return;\r\n  modal.style.display = \"none\";\r\n}\r\nfunction openForm (modal) {\r\n  if(!modal)\r\n    return;\r\n  modal.style.display = 'block';\r\n}\r\n\r\nfunction formManager() {\r\n  let modal = document.getElementById('myModal');\r\n  var btn = document.getElementById(\"n_task\");\r\n  var span = document.querySelector(\".close\");\r\n  let submitButton = document.getElementById('f_button');\r\n\r\n  btn.onclick = function() { openForm(modal); }\r\n  span.onclick = function() { closeForm(modal); }\r\n\r\n  submitButton.addEventListener('click', e => {\r\n    collectInfo();\r\n    resetForm();\r\n    closeForm(modal);\r\n});\r\n  window.onclick = function(event) {\r\n    if (event.target == modal)\r\n      closeForm(modal);\r\n  }\r\n}\r\n\r\nfunction locateDeleteTask() {\r\n  return;\r\n}\r\n\r\nfunction initDeleteButton() {\r\n  let button = _index_js__WEBPACK_IMPORTED_MODULE_1__[\"taskManager\"].getId();\r\n  _index_js__WEBPACK_IMPORTED_MODULE_1__[\"taskManager\"].storeId();\r\n  _index_js__WEBPACK_IMPORTED_MODULE_1__[\"taskManager\"].incId();\r\n\r\n  document.getElementById(button).onclick = function() {\r\n    if(_index_js__WEBPACK_IMPORTED_MODULE_1__[\"taskManager\"].retrieveId() === button)\r\n      console.log(\"found it\");\r\n    //button.parentNode.remove();\r\n  }\r\n}\r\n\r\nfunction initTaskHandler() {\r\n  let newTask = document.getElementById('n_task');\r\n  newTask.onclick = function() { formManager(); }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/listOptions.js?");

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/*! exports provided: initTabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initTabs\", function() { return initTabs; });\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ \"./src/helpers.js\");\n\r\n\r\nfunction initTabs() {\r\n  let tabs = `<div id=\"tabs\"><button id='tab'>+</button></div>`;\r\n  Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[\"renderElement\"])('#body', tabs);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/tabs.js?");

/***/ })

/******/ });