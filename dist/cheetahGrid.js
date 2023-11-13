/*! Cheetah Grid v1.12.1 | license MIT */
(function(window){
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["cheetahGrid"] = factory();
	else
		root["cheetahGrid"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../src/js/columns/action/internal/InlineInputElement.css":
/*!**************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--5-1!../node_modules/postcss-loader/src??ref--5-2!../src/js/columns/action/internal/InlineInputElement.css ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Module uses module.id */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cheetah-grid__inline-input::-ms-clear{visibility:hidden}.cheetah-grid__inline-input{position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../src/js/columns/action/internal/InlineMenuElement.css":
/*!*************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--5-1!../node_modules/postcss-loader/src??ref--5-2!../src/js/columns/action/internal/InlineMenuElement.css ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Module uses module.id */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cheetah-grid__inline-menu{position:absolute;color:rgba(0,0,0,.87);-webkit-box-sizing:content-box;box-sizing:content-box;margin:-1px auto auto -1px;padding:8px 0;background-color:#fafafa;list-style-type:none;border-radius:2px;max-height:calc(100vh - 40px);overflow-y:auto}.cheetah-grid__inline-menu--hidden{-webkit-transform:scale(.9);transform:scale(.9);-webkit-box-shadow:none;box-shadow:none;opacity:0;pointer-events:none;-webkit-transition:all 50ms ease-out;transition:all 50ms ease-out}.cheetah-grid__inline-menu--hidden *{pointer-events:none}.cheetah-grid__inline-menu--shown{-webkit-transform:translateY(-7px);transform:translateY(-7px);-webkit-box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);opacity:1;-webkit-transition:all .15s ease-out;transition:all .15s ease-out}.cheetah-grid__inline-menu__menu-item{height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;outline:none;cursor:pointer;position:relative;overflow:hidden;padding:0 16px}.cheetah-grid__inline-menu__menu-item--empty{color:rgba(0,0,0,.38)}.cheetah-grid__inline-menu__menu-item:before{content:\"\";position:absolute;top:-50%;left:-50%;width:200%;height:200%;background-color:#000;opacity:0;pointer-events:none;-webkit-transition:opacity 15ms linear;transition:opacity 15ms linear}.cheetah-grid__inline-menu__menu-item:hover:before,.cheetah-grid__inline-menu__menu-item[data-select]:before{opacity:.04}.cheetah-grid__inline-menu__menu-item:focus:before{opacity:.12}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../src/js/columns/action/internal/SmallDialogInputElement.css":
/*!*******************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--5-1!../node_modules/postcss-loader/src??ref--5-2!../src/js/columns/action/internal/SmallDialogInputElement.css ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Module uses module.id */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cheetah-grid__small-dialog-input__input::-ms-clear{visibility:hidden}@-webkit-keyframes cheetah-grid__small-dialog-input--hidden-animation{0%{opacity:1}99%{opacity:1}to{opacity:0}}@keyframes cheetah-grid__small-dialog-input--hidden-animation{0%{opacity:1}99%{opacity:1}to{opacity:0}}.cheetah-grid__small-dialog-input{position:absolute;-webkit-box-sizing:content-box;box-sizing:content-box;margin:-1px auto auto -1px;border-radius:3px;background-color:#fafafa;-webkit-transition:padding .15s ease-out,-webkit-box-shadow .15s ease-out;transition:padding .15s ease-out,-webkit-box-shadow .15s ease-out;transition:padding .15s ease-out,box-shadow .15s ease-out;transition:padding .15s ease-out,box-shadow .15s ease-out,-webkit-box-shadow .15s ease-out}.cheetah-grid__small-dialog-input--hidden{-webkit-box-shadow:none;box-shadow:none;padding:0;pointer-events:none;-webkit-animation:cheetah-grid__small-dialog-input--hidden-animation .15s ease-out;animation:cheetah-grid__small-dialog-input--hidden-animation .15s ease-out;opacity:0}.cheetah-grid__small-dialog-input--shown{-webkit-box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);padding:8px 24px}.cheetah-grid__small-dialog-input__input{width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:3px 2px 0 4px;border:none;border-bottom:1px solid rgba(0,0,0,.87);outline:none;background-color:transparent;-webkit-transition:all .3s ease-out;transition:all .3s ease-out}.cheetah-grid__small-dialog-input__input:focus{border-bottom:1px solid #2196f3;-webkit-box-shadow:0 1px 0 0 #2196f3;box-shadow:0 1px 0 0 #2196f3}.cheetah-grid__small-dialog-input:after{content:\"\";font-family:Roboto;font-size:12px;font-size:.75rem;min-height:1em;line-height:1;display:block;width:100%;padding-top:8px}.cheetah-grid__small-dialog-input.helper-text--right-justified:after{text-align:right}.cheetah-grid__small-dialog-input[data-helper-text]:after{content:attr(data-helper-text);color:rgba(0,0,0,.87)}.cheetah-grid__small-dialog-input[data-error-message] input{border-bottom:1px solid #ff1744;-webkit-box-shadow:0 1px 0 0 #ff1744;box-shadow:0 1px 0 0 #ff1744}.cheetah-grid__small-dialog-input[data-error-message]:after{content:attr(data-error-message);color:#ff1744;text-align:left}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../src/js/columns/message/internal/ErrorMessageElement.css":
/*!****************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--5-1!../node_modules/postcss-loader/src??ref--5-2!../src/js/columns/message/internal/ErrorMessageElement.css ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Module uses module.id */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cheetah-grid__error-message-element{border-top:1px solid #ff1744;color:#ff1744}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../src/js/columns/message/internal/MessageElement.css":
/*!***********************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--5-1!../node_modules/postcss-loader/src??ref--5-2!../src/js/columns/message/internal/MessageElement.css ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Module uses module.id */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cheetah-grid__message-element{position:absolute;margin-top:-2px;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:0 0 3px 3px;background-color:hsla(0,0%,98%,.85);padding:8px 2px;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-top:1px solid rgba(0,0,0,.87);color:rgba(0,0,0,.87)}.cheetah-grid__message-element--hidden{display:none}.cheetah-grid__message-element--shown{display:block}.cheetah-grid__message-element__message{font-family:Roboto;font-size:12px;font-size:.75rem;min-height:1em;line-height:1;display:block;width:100%}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../src/js/columns/message/internal/WarningMessageElement.css":
/*!******************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--5-1!../node_modules/postcss-loader/src??ref--5-2!../src/js/columns/message/internal/WarningMessageElement.css ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Module uses module.id */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cheetah-grid__warning-message-element{border-top:1px solid #dd2c00;color:#dd2c00}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../src/js/internal/style.css":
/*!**********************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--5-1!../node_modules/postcss-loader/src??ref--5-2!../src/js/internal/style.css ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Module uses module.id */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cheetah-grid .grid-scrollable{height:100%;width:100%;position:absolute;overflow:scroll}.cheetah-grid .grid-scroll-end-point{opacity:0;position:relative}.cheetah-grid{position:relative;width:100%;height:100%}.cheetah-grid>canvas{position:absolute;width:0;height:0}.cheetah-grid .grid-focus-control{position:relative!important;width:1px;height:1px;opacity:0;padding:0;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none;max-width:0;max-height:0;float:none!important}.cheetah-grid input.grid-focus-control::-ms-clear{visibility:hidden}.cheetah-grid input.grid-focus-control.composition{opacity:1;max-width:none;max-height:none}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../src/js/tooltip/internal/TooltipElement.css":
/*!***************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--5-1!../node_modules/postcss-loader/src??ref--5-2!../src/js/tooltip/internal/TooltipElement.css ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/*! ModuleConcatenation bailout: Module uses module.id */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@-webkit-keyframes cheetah-grid__tooltip-element--shown-animation{0%{opacity:0;-webkit-transform:scale(.8) translateX(-60%);transform:scale(.8) translateX(-60%)}to{opacity:1;-webkit-transform:scale(1) translateX(-50%);transform:scale(1) translateX(-50%)}}@keyframes cheetah-grid__tooltip-element--shown-animation{0%{opacity:0;-webkit-transform:scale(.8) translateX(-60%);transform:scale(.8) translateX(-60%)}to{opacity:1;-webkit-transform:scale(1) translateX(-50%);transform:scale(1) translateX(-50%)}}.cheetah-grid__tooltip-element{position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:3px;background-color:#232f34;padding:8px;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#fff}.cheetah-grid__tooltip-element--hidden{opacity:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);-webkit-transition:opacity 75ms linear;transition:opacity 75ms linear}.cheetah-grid__tooltip-element--shown{opacity:1;-webkit-transform:translateX(-50%);transform:translateX(-50%);-webkit-animation:cheetah-grid__tooltip-element--shown-animation .15s ease-out;animation:cheetah-grid__tooltip-element--shown-animation .15s ease-out}.cheetah-grid__tooltip-element__content{font-family:Roboto;font-size:12px;font-size:.75rem;min-height:1em;line-height:1;width:100%;display:block;white-space:pre-wrap;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../src/js/columns/action/internal/InlineInputElement.css":
/*!****************************************************************!*\
  !*** ../src/js/columns/action/internal/InlineInputElement.css ***!
  \****************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../../node_modules/postcss-loader/src??ref--5-2!./InlineInputElement.css */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../src/js/columns/action/internal/InlineInputElement.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "../src/js/columns/action/internal/InlineMenuElement.css":
/*!***************************************************************!*\
  !*** ../src/js/columns/action/internal/InlineMenuElement.css ***!
  \***************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../../node_modules/postcss-loader/src??ref--5-2!./InlineMenuElement.css */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../src/js/columns/action/internal/InlineMenuElement.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "../src/js/columns/action/internal/SmallDialogInputElement.css":
/*!*********************************************************************!*\
  !*** ../src/js/columns/action/internal/SmallDialogInputElement.css ***!
  \*********************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../../node_modules/postcss-loader/src??ref--5-2!./SmallDialogInputElement.css */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../src/js/columns/action/internal/SmallDialogInputElement.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "../src/js/columns/message/internal/ErrorMessageElement.css":
/*!******************************************************************!*\
  !*** ../src/js/columns/message/internal/ErrorMessageElement.css ***!
  \******************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../../node_modules/postcss-loader/src??ref--5-2!./ErrorMessageElement.css */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../src/js/columns/message/internal/ErrorMessageElement.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "../src/js/columns/message/internal/MessageElement.css":
/*!*************************************************************!*\
  !*** ../src/js/columns/message/internal/MessageElement.css ***!
  \*************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../../node_modules/postcss-loader/src??ref--5-2!./MessageElement.css */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../src/js/columns/message/internal/MessageElement.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "../src/js/columns/message/internal/WarningMessageElement.css":
/*!********************************************************************!*\
  !*** ../src/js/columns/message/internal/WarningMessageElement.css ***!
  \********************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../../node_modules/postcss-loader/src??ref--5-2!./WarningMessageElement.css */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../src/js/columns/message/internal/WarningMessageElement.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "../src/js/internal/style.css":
/*!************************************!*\
  !*** ../src/js/internal/style.css ***!
  \************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/postcss-loader/src??ref--5-2!./style.css */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../src/js/internal/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "../src/js/tooltip/internal/TooltipElement.css":
/*!*****************************************************!*\
  !*** ../src/js/tooltip/internal/TooltipElement.css ***!
  \*****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../node_modules/postcss-loader/src??ref--5-2!./TooltipElement.css */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../src/js/tooltip/internal/TooltipElement.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./GridCanvasHelper.js":
/*!*****************************!*\
  !*** ./GridCanvasHelper.js ***!
  \*****************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GridCanvasHelper = void 0;

const calc = __importStar(__webpack_require__(/*! ./internal/calc */ "./internal/calc.js"));

const canvashelper = __importStar(__webpack_require__(/*! ./tools/canvashelper */ "./tools/canvashelper.js"));

const fonts = __importStar(__webpack_require__(/*! ./internal/fonts */ "./internal/fonts.js"));

const inlineUtils = __importStar(__webpack_require__(/*! ./element/inlines */ "./element/inlines.js"));

const themes = __importStar(__webpack_require__(/*! ./themes */ "./themes.js"));

const canvases_1 = __webpack_require__(/*! ./internal/canvases */ "./internal/canvases.js");

const utils_1 = __webpack_require__(/*! ./internal/utils */ "./internal/utils.js");

const InlineDrawer_1 = __webpack_require__(/*! ./element/InlineDrawer */ "./element/InlineDrawer.js");

const Rect_1 = __webpack_require__(/*! ./internal/Rect */ "./internal/Rect.js");

const color_1 = __webpack_require__(/*! ./internal/color */ "./internal/color.js");

const {
  toBoxArray
} = utils_1.style;
const INLINE_ELLIPSIS = inlineUtils.of("\u2026");
const TEXT_OFFSET = 2;
const CHECKBOX_OFFSET = TEXT_OFFSET + 1;

function invalidateCell(context, grid) {
  const {
    col,
    row
  } = context;
  grid.invalidateCell(col, row);
}

function getColor(color, col, row, grid, context) {
  return (0, utils_1.getOrApply)(color, {
    col,
    row,
    grid,
    context
  });
}

function getFont(font, col, row, grid, context) {
  if (font == null) {
    return undefined;
  }

  return (0, utils_1.getOrApply)(font, {
    col,
    row,
    grid,
    context
  });
}

function getThemeColor(grid, ...names) {
  const gridThemeColor = (0, utils_1.getChainSafe)(grid.theme, ...names);

  if (gridThemeColor == null) {
    // use default theme
    return (0, utils_1.getChainSafe)(themes.getDefault(), ...names);
  }

  if (typeof gridThemeColor !== "function") {
    return gridThemeColor;
  }

  let defaultThemeColor; // eslint-disable-next-line @typescript-eslint/no-explicit-any

  return args => {
    const color = gridThemeColor(args);

    if (color != null) {
      // use grid theme
      return color;
    } // use default theme


    defaultThemeColor = defaultThemeColor || (0, utils_1.getChainSafe)(themes.getDefault(), ...names);
    return (0, utils_1.getOrApply)(defaultThemeColor, args); // eslint-disable-next-line @typescript-eslint/no-explicit-any
  };
}

function testFontLoad(font, value, context, grid) {
  if (font) {
    if (!fonts.check(font, value)) {
      fonts.load(font, value, () => invalidateCell(context, grid));
      return false;
    }
  }

  return true;
}

function drawInlines(ctx, inlines, rect, offset, offsetTop, offsetBottom, col, row, grid) {
  function drawInline(inline, offsetLeft, offsetRight) {
    if (inline.canDraw()) {
      ctx.save();

      try {
        ctx.fillStyle = getColor(inline.color() || ctx.fillStyle, col, row, grid, ctx);
        ctx.font = inline.font() || ctx.font;
        inline.draw({
          ctx,
          canvashelper,
          rect,
          offset,
          offsetLeft,
          offsetRight,
          offsetTop,
          offsetBottom
        });
      } finally {
        ctx.restore();
      }
    } else {
      inline.onReady(() => grid.invalidateCell(col, row)); //noop
    }
  }

  if (inlines.length === 1) {
    //1件の場合は幅計算が不要なため分岐
    const inline = inlines[0];
    drawInline(inline, 0, 0);
  } else {
    const inlineWidths = inlines.map(inline => (inline.width({
      ctx
    }) || 0) - 0);
    let offsetRight = inlineWidths.reduce((a, b) => a + b);
    let offsetLeft = 0;
    inlines.forEach((inline, index) => {
      const inlineWidth = inlineWidths[index];
      offsetRight -= inlineWidth;
      drawInline(inline, offsetLeft, offsetRight);
      offsetLeft += inlineWidth;
    });
  }
}

function buildInlines(icons, inline) {
  return inlineUtils.buildInlines(icons, inline || "");
}

function inlineToString(inline) {
  return inlineUtils.string(inline);
}

function getOverflowInline(textOverflow) {
  if (!isAllowOverflow(textOverflow) || textOverflow === "ellipsis") {
    return INLINE_ELLIPSIS;
  }

  textOverflow = textOverflow.trim();

  if (textOverflow.length === 1) {
    return inlineUtils.of(textOverflow[0]);
  }

  return INLINE_ELLIPSIS;
}

function isAllowOverflow(textOverflow) {
  return Boolean(textOverflow && textOverflow !== "clip" && typeof textOverflow === "string");
}

function getOverflowInlinesIndex(ctx, inlines, width) {
  const maxWidth = width - 3;
  /*buffer*/

  let lineWidth = 0;

  for (let i = 0; i < inlines.length; i++) {
    const inline = inlines[i];
    const inlineWidth = (inline.width({
      ctx
    }) || 0) - 0;

    if (lineWidth + inlineWidth > maxWidth) {
      return {
        index: i,
        lineWidth,
        remWidth: maxWidth - lineWidth
      };
    }

    lineWidth += inlineWidth;
  }

  return null;
}

function isOverflowInlines(ctx, inlines, width) {
  return !!getOverflowInlinesIndex(ctx, inlines, width);
}

function breakWidthInlines(ctx, inlines, width) {
  const indexData = getOverflowInlinesIndex(ctx, inlines, width);

  if (!indexData) {
    return {
      beforeInlines: inlines,
      overflow: false,
      afterInlines: []
    };
  }

  const {
    index,
    remWidth
  } = indexData;
  const inline = inlines[index];
  const beforeInlines = inlines.slice(0, index);
  const afterInlines = [];

  if (inline.canBreak()) {
    let {
      before,
      after
    } = inline.breakWord(ctx, remWidth);

    if (!before && !beforeInlines.length) {
      ({
        before,
        after
      } = inline.breakAll(ctx, remWidth));
    }

    if (!before && !beforeInlines.length) {
      // Always return one char
      ({
        before,
        after
      } = inline.splitIndex(1));
    }

    if (before) {
      beforeInlines.push(before);
    }

    if (after) {
      afterInlines.push(after);
    }

    afterInlines.push(...inlines.slice(index + 1));
  } else {
    if (!beforeInlines.length) {
      // Always return one char
      beforeInlines.push(inline);
    }

    afterInlines.push(...inlines.slice(beforeInlines.length));
  }

  return {
    beforeInlines,
    overflow: true,
    afterInlines
  };
}

function truncateInlines(ctx, inlines, width, option) {
  const indexData = getOverflowInlinesIndex(ctx, inlines, width);

  if (!indexData) {
    return {
      inlines,
      overflow: false
    };
  }

  const {
    index,
    lineWidth
  } = indexData;
  const inline = inlines[index];
  const overflowInline = getOverflowInline(option);
  const ellipsisWidth = overflowInline.width({
    ctx
  });
  const remWidth = width - lineWidth - ellipsisWidth;
  const result = inlines.slice(0, index);

  if (inline.canBreak()) {
    const {
      before
    } = inline.breakAll(ctx, remWidth);

    if (before) {
      result.push(before);
    }
  }

  result.push(overflowInline);
  return {
    inlines: result,
    overflow: true
  };
}

function _inlineRect(grid, ctx, inline, drawRect, col, row, {
  offset,
  color,
  textAlign,
  textBaseline,
  font,
  textOverflow,
  icons,
  trailingIcon
}) {
  //文字style
  ctx.fillStyle = getColor(color || ctx.fillStyle, col, row, grid, ctx);
  ctx.textAlign = textAlign;
  ctx.textBaseline = textBaseline;
  ctx.font = font || ctx.font;
  let inlines = buildInlines(icons, inline);
  const trailingIconInline = trailingIcon ? inlineUtils.iconOf(trailingIcon) : null;
  let inlineDrawRect = drawRect;
  let {
    width
  } = drawRect;
  let trailingIconWidth = 0;

  if (trailingIconInline) {
    trailingIconWidth = trailingIconInline.width({
      ctx
    });
    width -= trailingIconWidth;
    inlineDrawRect = new Rect_1.Rect(drawRect.left, drawRect.top, width, drawRect.height);
  }

  if (isAllowOverflow(textOverflow) && isOverflowInlines(ctx, inlines, width)) {
    const {
      inlines: truncInlines,
      overflow
    } = truncateInlines(ctx, inlines, width, textOverflow);
    inlines = truncInlines;
    grid.setCellOverflowText(col, row, overflow && inlineToString(inline));
  } else {
    grid.setCellOverflowText(col, row, false);
  }

  drawInlines(ctx, inlines, inlineDrawRect, offset, 0, 0, col, row, grid);

  if (trailingIconInline) {
    // Draw trailing icon
    let sumWidth = 0;
    inlines.forEach(inline => {
      sumWidth += inline.width({
        ctx
      });
    });
    const baseRect = new Rect_1.Rect(drawRect.left, drawRect.top, drawRect.width, drawRect.height);
    const trailingIconRect = baseRect.copy();

    if (width < sumWidth) {
      trailingIconRect.left = trailingIconRect.right - trailingIconWidth - offset;
    } else {
      trailingIconRect.left += sumWidth;
    }

    trailingIconRect.right = baseRect.right;
    drawInlines(ctx, [trailingIconInline], trailingIconRect, offset, 0, 0, col, row, grid);
  }
} // eslint-disable-next-line complexity


function _multiInlineRect(grid, ctx, multiInlines, drawRect, col, row, {
  offset,
  color,
  textAlign,
  textBaseline,
  font,
  lineHeight,
  autoWrapText,
  lineClamp,
  textOverflow,
  icons,
  trailingIcon
}) {
  //文字style
  ctx.fillStyle = getColor(color || ctx.fillStyle, col, row, grid, ctx);
  ctx.textAlign = textAlign;
  ctx.textBaseline = textBaseline;
  ctx.font = font || ctx.font;

  if (lineClamp === "auto") {
    const rectHeight = drawRect.height - offset * 2 - 2;
    /*offset added by Inline#draw*/

    lineClamp = Math.max(Math.floor(rectHeight / lineHeight), 1);
  }

  const trailingIconInline = trailingIcon ? inlineUtils.iconOf(trailingIcon) : null;
  let {
    width
  } = drawRect;
  let trailingIconWidth = 0;

  if (trailingIconInline) {
    trailingIconWidth = trailingIconInline.width({
      ctx
    });
    width -= trailingIconWidth;
  }

  let buildedMultiInlines;

  if (autoWrapText || lineClamp > 0 || isAllowOverflow(textOverflow)) {
    buildedMultiInlines = [];
    const procLineClamp = lineClamp > 0 ? (inlines, hasNext) => {
      if (buildedMultiInlines.length + 1 >= Number(lineClamp)) {
        if (inlines.length === 0 && hasNext) {
          buildedMultiInlines.push([getOverflowInline(textOverflow)]);
          grid.setCellOverflowText(col, row, multiInlines.map(inlineToString).join("\n"));
        } else {
          const {
            inlines: truncInlines,
            overflow
          } = truncateInlines(ctx, inlines, width, textOverflow);
          buildedMultiInlines.push(hasNext && !overflow ? truncInlines.concat([getOverflowInline(textOverflow)]) : truncInlines);

          if (overflow || hasNext) {
            grid.setCellOverflowText(col, row, multiInlines.map(inlineToString).join("\n"));
          }
        }

        return false;
      }

      return true;
    } : () => true;
    const procLine = autoWrapText ? (inlines, hasNext) => {
      if (!procLineClamp(inlines, hasNext)) {
        return false;
      }

      while (inlines.length) {
        if (!procLineClamp(inlines, hasNext)) {
          return false;
        }

        const {
          beforeInlines,
          afterInlines
        } = breakWidthInlines(ctx, inlines, width);
        buildedMultiInlines.push(beforeInlines);
        inlines = afterInlines;
      }

      return true;
    } : isAllowOverflow(textOverflow) ? (inlines, hasNext) => {
      if (!procLineClamp(inlines, hasNext)) {
        return false;
      }

      const {
        inlines: truncInlines,
        overflow
      } = truncateInlines(ctx, inlines, width, textOverflow);
      buildedMultiInlines.push(truncInlines);

      if (overflow) {
        grid.setCellOverflowText(col, row, multiInlines.map(inlineToString).join("\n"));
      }

      return true;
    } : (inlines, hasNext) => {
      if (!procLineClamp(inlines, hasNext)) {
        return false;
      }

      buildedMultiInlines.push(inlines);
      return true;
    };
    grid.setCellOverflowText(col, row, false);

    for (let lineRow = 0; lineRow < multiInlines.length; lineRow++) {
      const inline = multiInlines[lineRow];
      const buildedInline = buildInlines(lineRow === 0 ? icons : undefined, inline);

      if (!procLine(buildedInline, lineRow + 1 < multiInlines.length)) {
        break;
      }
    }
  } else {
    grid.setCellOverflowText(col, row, false);
    buildedMultiInlines = multiInlines.map((inline, lineRow) => buildInlines(lineRow === 0 ? icons : undefined, inline));
  }

  let paddingTop = 0;
  let paddingBottom = lineHeight * (buildedMultiInlines.length - 1);

  if (ctx.textBaseline === "top" || ctx.textBaseline === "hanging") {
    const em = (0, canvases_1.getFontSize)(ctx, ctx.font).height;
    const pad = (lineHeight - em) / 2;
    paddingTop += pad;
    paddingBottom -= pad;
  } else if (ctx.textBaseline === "bottom" || ctx.textBaseline === "alphabetic" || ctx.textBaseline === "ideographic") {
    const em = (0, canvases_1.getFontSize)(ctx, ctx.font).height;
    const pad = (lineHeight - em) / 2;
    paddingTop -= pad;
    paddingBottom += pad;
  }

  buildedMultiInlines.forEach(buildedInline => {
    drawInlines(ctx, buildedInline, drawRect, offset, paddingTop, paddingBottom, col, row, grid);
    paddingTop += lineHeight;
    paddingBottom -= lineHeight;
  });

  if (trailingIconInline) {
    // Draw trailing icon
    let maxWidth = 0;
    buildedMultiInlines.forEach(buildedInline => {
      let sumWidth = 0;
      buildedInline.forEach(inline => {
        sumWidth += inline.width({
          ctx
        });
      });
      maxWidth = Math.max(maxWidth, sumWidth);
    });
    const baseRect = new Rect_1.Rect(drawRect.left, drawRect.top, drawRect.width, drawRect.height);
    const trailingIconRect = baseRect.copy();

    if (width < maxWidth) {
      trailingIconRect.left = trailingIconRect.right - trailingIconWidth - offset;
    } else {
      trailingIconRect.left += maxWidth;
    }

    trailingIconRect.right = baseRect.right;
    drawInlines(ctx, [trailingIconInline], trailingIconRect, offset, 0, 0, col, row, grid);
  }
}

function calcElapsedColor(startColor, endColor, elapsedTime) {
  const startColorRGB = (0, color_1.colorToRGB)(startColor);
  const endColorRGB = (0, color_1.colorToRGB)(endColor);

  const getRGB = colorName => {
    const start = startColorRGB[colorName];
    const end = endColorRGB[colorName];

    if (elapsedTime >= 1) {
      return end;
    }

    if (elapsedTime <= 0) {
      return start;
    }

    const diff = start - end;
    return Math.ceil(start - diff * elapsedTime);
  };

  return `rgb(${getRGB("r")}, ${getRGB("g")}, ${getRGB("b")})`;
}

function drawCheckbox(ctx, rect, col, row, check, helper, {
  animElapsedTime = 1,
  uncheckBgColor = helper.theme.checkbox.uncheckBgColor,
  checkBgColor = helper.theme.checkbox.checkBgColor,
  borderColor = helper.theme.checkbox.borderColor,
  textAlign = "center",
  textBaseline = "middle"
}, positionOpt = {}) {
  const boxWidth = canvashelper.measureCheckbox(ctx).width;
  ctx.textAlign = textAlign;
  ctx.textBaseline = textBaseline;
  const pos = (0, canvases_1.calcStartPosition)(ctx, rect, boxWidth + 1
  /*罫線分+1*/
  , boxWidth + 1
  /*罫線分+1*/
  , positionOpt);
  uncheckBgColor = helper.getColor(uncheckBgColor, col, row, ctx);
  checkBgColor = helper.getColor(checkBgColor, col, row, ctx);
  borderColor = helper.getColor(borderColor, col, row, ctx);

  if (0 < animElapsedTime && animElapsedTime < 1) {
    uncheckBgColor = check ? uncheckBgColor : calcElapsedColor(checkBgColor, uncheckBgColor, animElapsedTime);
    checkBgColor = check ? calcElapsedColor(uncheckBgColor, checkBgColor, animElapsedTime) : checkBgColor;
  }

  canvashelper.drawCheckbox(ctx, pos.x, pos.y, check ? animElapsedTime : false, {
    uncheckBgColor,
    checkBgColor,
    borderColor
  });
}

function drawRadioButton(ctx, rect, col, row, check, helper, {
  animElapsedTime = 1,
  checkColor = helper.theme.radioButton.checkColor,
  uncheckBorderColor = helper.theme.radioButton.uncheckBorderColor,
  checkBorderColor = helper.theme.radioButton.checkBorderColor,
  uncheckBgColor = helper.theme.radioButton.uncheckBgColor,
  checkBgColor = helper.theme.radioButton.checkBgColor,
  textAlign = "center",
  textBaseline = "middle"
}, positionOpt = {}) {
  const boxWidth = canvashelper.measureRadioButton(ctx).width;
  ctx.textAlign = textAlign;
  ctx.textBaseline = textBaseline;
  const pos = (0, canvases_1.calcStartPosition)(ctx, rect, boxWidth + 1
  /*罫線分+1*/
  , boxWidth + 1
  /*罫線分+1*/
  , positionOpt);
  checkColor = helper.getColor(checkColor, col, row, ctx);
  uncheckBorderColor = helper.getColor(uncheckBorderColor, col, row, ctx);
  checkBorderColor = helper.getColor(checkBorderColor, col, row, ctx);
  uncheckBgColor = helper.getColor(uncheckBgColor, col, row, ctx);
  checkBgColor = helper.getColor(checkBgColor, col, row, ctx);
  let borderColor = check ? checkBorderColor : uncheckBorderColor;
  let bgColor = check ? checkBgColor : uncheckBgColor;

  if (0 < animElapsedTime && animElapsedTime < 1) {
    borderColor = check ? calcElapsedColor(uncheckBorderColor, checkBorderColor, animElapsedTime) : calcElapsedColor(checkBorderColor, uncheckBorderColor, animElapsedTime);
    bgColor = check ? calcElapsedColor(uncheckBgColor, checkBgColor, animElapsedTime) : calcElapsedColor(checkBgColor, uncheckBgColor, animElapsedTime);
  }

  canvashelper.drawRadioButton(ctx, pos.x, pos.y, check ? animElapsedTime : 1 - animElapsedTime, {
    checkColor,
    borderColor,
    bgColor
  });
}

class ThemeResolver {
  constructor(grid) {
    this._checkbox = null;
    this._radioButton = null;
    this._button = null;
    this._header = null;
    this._messages = null;
    this._indicators = null;
    this._grid = grid;
  }

  getThemeColor(...name) {
    return getThemeColor(this._grid, ...name);
  }

  get font() {
    return getThemeColor(this._grid, "font");
  }

  get underlayBackgroundColor() {
    return getThemeColor(this._grid, "underlayBackgroundColor");
  } // color


  get color() {
    return getThemeColor(this._grid, "color");
  }

  get frozenRowsColor() {
    return getThemeColor(this._grid, "frozenRowsColor");
  } // background


  get defaultBgColor() {
    return getThemeColor(this._grid, "defaultBgColor");
  }

  get frozenRowsBgColor() {
    return getThemeColor(this._grid, "frozenRowsBgColor");
  }

  get selectionBgColor() {
    return getThemeColor(this._grid, "selectionBgColor");
  }

  get highlightBgColor() {
    return getThemeColor(this._grid, "highlightBgColor");
  } // border


  get borderColor() {
    return getThemeColor(this._grid, "borderColor");
  }

  get frozenRowsBorderColor() {
    return getThemeColor(this._grid, "frozenRowsBorderColor");
  }

  get highlightBorderColor() {
    return getThemeColor(this._grid, "highlightBorderColor");
  }

  get checkbox() {
    const grid = this._grid;
    return this._checkbox || (this._checkbox = {
      get uncheckBgColor() {
        return getCheckboxProp("uncheckBgColor");
      },

      get checkBgColor() {
        return getCheckboxProp("checkBgColor");
      },

      get borderColor() {
        return getCheckboxProp("borderColor");
      }

    });

    function getCheckboxProp(prop) {
      return getThemeColor(grid, "checkbox", prop);
    }
  }

  get radioButton() {
    const grid = this._grid;
    return this._radioButton || (this._radioButton = {
      get checkColor() {
        return getRadioButtonProp("checkColor");
      },

      get uncheckBorderColor() {
        return getRadioButtonProp("uncheckBorderColor");
      },

      get checkBorderColor() {
        return getRadioButtonProp("checkBorderColor");
      },

      get uncheckBgColor() {
        return getRadioButtonProp("uncheckBgColor");
      },

      get checkBgColor() {
        return getRadioButtonProp("checkBgColor");
      }

    });

    function getRadioButtonProp(prop) {
      return getThemeColor(grid, "radioButton", prop);
    }
  }

  get button() {
    const grid = this._grid;
    return this._button || (this._button = {
      get color() {
        return getButtonProp("color");
      },

      get bgColor() {
        return getButtonProp("bgColor");
      }

    });

    function getButtonProp(prop) {
      return getThemeColor(grid, "button", prop);
    }
  }

  get header() {
    const grid = this._grid;
    return this._header || (this._header = {
      get sortArrowColor() {
        return getThemeColor(grid, "header", "sortArrowColor");
      }

    });
  }

  get messages() {
    const grid = this._grid;
    return this._messages || (this._messages = {
      get infoBgColor() {
        return getMessageProp("infoBgColor");
      },

      get errorBgColor() {
        return getMessageProp("errorBgColor");
      },

      get warnBgColor() {
        return getMessageProp("warnBgColor");
      },

      get boxWidth() {
        return getMessageProp("boxWidth");
      },

      get markHeight() {
        return getMessageProp("markHeight");
      }

    });

    function getMessageProp(prop) {
      return getThemeColor(grid, "messages", prop);
    }
  }

  get indicators() {
    const grid = this._grid;
    return this._indicators || (this._indicators = {
      get topLeftColor() {
        return getIndicatorsProp("topLeftColor");
      },

      get topLeftSize() {
        return getIndicatorsProp("topLeftSize");
      },

      get topRightColor() {
        return getIndicatorsProp("topRightColor");
      },

      get topRightSize() {
        return getIndicatorsProp("topRightSize");
      },

      get bottomRightColor() {
        return getIndicatorsProp("bottomRightColor");
      },

      get bottomRightSize() {
        return getIndicatorsProp("bottomRightSize");
      },

      get bottomLeftColor() {
        return getIndicatorsProp("bottomLeftColor");
      },

      get bottomLeftSize() {
        return getIndicatorsProp("bottomLeftSize");
      }

    });

    function getIndicatorsProp(prop) {
      return getThemeColor(grid, "indicators", prop);
    }
  }

}

function strokeRect(ctx, color, left, top, width, height) {
  if (!Array.isArray(color)) {
    if (color) {
      ctx.strokeStyle = color;
      ctx.strokeRect(left, top, width, height);
    }
  } else {
    const borderColors = toBoxArray(color);
    canvashelper.strokeColorsRect(ctx, borderColors, left, top, width, height);
  }
}

class GridCanvasHelper {
  constructor(grid) {
    this._grid = grid;
    this._theme = new ThemeResolver(grid);
  }

  createCalculator(context, font) {
    return {
      calcWidth(width) {
        return calc.toPx(width, {
          get full() {
            const rect = context.getRect();
            return rect.width;
          },

          get em() {
            return (0, canvases_1.getFontSize)(context.getContext(), font).width;
          }

        });
      },

      calcHeight(height) {
        return calc.toPx(height, {
          get full() {
            const rect = context.getRect();
            return rect.height;
          },

          get em() {
            return (0, canvases_1.getFontSize)(context.getContext(), font).height;
          }

        });
      }

    };
  }

  getColor(color, col, row, ctx) {
    return getColor(color, col, row, this._grid, ctx);
  }

  toBoxArray(obj) {
    return toBoxArray(obj);
  }

  toBoxPixelArray(value, context, font) {
    if (typeof value === "string" || Array.isArray(value)) {
      const calculator = this.createCalculator(context, font);
      const box = toBoxArray(value);
      return [calculator.calcHeight(box[0]), calculator.calcWidth(box[1]), calculator.calcHeight(box[2]), calculator.calcWidth(box[3])];
    }

    return toBoxArray(value);
  }

  get theme() {
    return this._theme;
  }

  drawWithClip(context, draw) {
    const drawRect = context.getDrawRect();

    if (!drawRect) {
      return;
    }

    const ctx = context.getContext();
    ctx.save();

    try {
      ctx.beginPath();
      ctx.rect(drawRect.left, drawRect.top, drawRect.width, drawRect.height); //clip

      ctx.clip();
      draw(ctx);
    } finally {
      ctx.restore();
    }
  }

  drawBorderWithClip(context, draw) {
    const drawRect = context.getDrawRect();

    if (!drawRect) {
      return;
    }

    const rect = context.getRect();
    const ctx = context.getContext();
    ctx.save();

    try {
      //罫線用clip
      ctx.beginPath();
      let clipLeft = drawRect.left;
      let clipWidth = drawRect.width;

      if (drawRect.left === rect.left) {
        clipLeft += -1;
        clipWidth += 1;
      }

      let clipTop = drawRect.top;
      let clipHeight = drawRect.height;

      if (drawRect.top === rect.top) {
        clipTop += -1;
        clipHeight += 1;
      }

      ctx.rect(clipLeft, clipTop, clipWidth, clipHeight);
      ctx.clip();
      draw(ctx);
    } finally {
      ctx.restore();
    }
  }

  text(text, context, {
    padding,
    offset = TEXT_OFFSET,
    color,
    textAlign = "left",
    textBaseline = "middle",
    font,
    textOverflow = "clip",
    icons,
    trailingIcon
  } = {}) {
    let rect = context.getRect();
    const {
      col,
      row
    } = context;

    if (!color) {
      ({
        color
      } = this.theme); // header color

      const isFrozenCell = this._grid.isFrozenCell(col, row);

      if (isFrozenCell && isFrozenCell.row) {
        color = this.theme.frozenRowsColor;
      }
    }

    this.drawWithClip(context, ctx => {
      font = getFont(font, context.col, context.row, this._grid, ctx);

      if (padding) {
        const paddingNums = this.toBoxPixelArray(padding, context, font);
        const left = rect.left + paddingNums[3];
        const top = rect.top + paddingNums[0];
        const width = rect.width - paddingNums[1] - paddingNums[3];
        const height = rect.height - paddingNums[0] - paddingNums[2];
        rect = new Rect_1.Rect(left, top, width, height);
      }

      _inlineRect(this._grid, ctx, text, rect, col, row, {
        offset,
        color,
        textAlign,
        textBaseline,
        font,
        textOverflow,
        icons,
        trailingIcon
      });
    });
  }

  multilineText(multilines, context, {
    padding,
    offset = TEXT_OFFSET,
    color,
    textAlign = "left",
    textBaseline = "middle",
    font,
    lineHeight = "1em",
    autoWrapText = false,
    lineClamp = 0,
    textOverflow = "clip",
    icons,
    trailingIcon
  } = {}) {
    let rect = context.getRect();
    const {
      col,
      row
    } = context;

    if (!color) {
      ({
        color
      } = this.theme); // header color

      const isFrozenCell = this._grid.isFrozenCell(col, row);

      if (isFrozenCell && isFrozenCell.row) {
        color = this.theme.frozenRowsColor;
      }
    }

    this.drawWithClip(context, ctx => {
      font = getFont(font, context.col, context.row, this._grid, ctx);

      if (padding) {
        const paddingNums = this.toBoxPixelArray(padding, context, font);
        const left = rect.left + paddingNums[3];
        const top = rect.top + paddingNums[0];
        const width = rect.width - paddingNums[1] - paddingNums[3];
        const height = rect.height - paddingNums[0] - paddingNums[2];
        rect = new Rect_1.Rect(left, top, width, height);
      }

      const calculator = this.createCalculator(context, font);
      lineHeight = calculator.calcHeight(lineHeight);

      _multiInlineRect(this._grid, ctx, multilines, rect, col, row, {
        offset,
        color,
        textAlign,
        textBaseline,
        font,
        lineHeight,
        autoWrapText,
        lineClamp,
        textOverflow,
        icons,
        trailingIcon
      });
    });
  }

  fillText(text, x, y, context, {
    color,
    textAlign = "left",
    textBaseline = "top",
    font
  } = {}) {
    const {
      col,
      row
    } = context;

    if (!color) {
      ({
        color
      } = this.theme); // header color

      const isFrozenCell = this._grid.isFrozenCell(col, row);

      if (isFrozenCell && isFrozenCell.row) {
        color = this.theme.frozenRowsColor;
      }
    }

    const ctx = context.getContext();
    ctx.save();

    try {
      font = getFont(font, context.col, context.row, this._grid, ctx);
      ctx.fillStyle = getColor(color, col, row, this._grid, ctx);
      ctx.textAlign = textAlign;
      ctx.textBaseline = textBaseline;
      ctx.font = font || ctx.font;
      ctx.fillText(text, x, y);
    } finally {
      ctx.restore();
    }
  }

  fillCell(context, {
    fillColor = this.theme.defaultBgColor
  } = {}) {
    const rect = context.getRect();
    this.drawWithClip(context, ctx => {
      const {
        col,
        row
      } = context;
      ctx.fillStyle = getColor(fillColor, col, row, this._grid, ctx);
      ctx.beginPath();
      ctx.rect(rect.left, rect.top, rect.width, rect.height);
      ctx.fill();
    });
  }

  fillCellWithState(context, option = {}) {
    option.fillColor = this.getFillColorState(context, option);
    this.fillCell(context, option);
  }

  fillRect(rect, context, {
    fillColor = this.theme.defaultBgColor
  } = {}) {
    const ctx = context.getContext();
    ctx.save();

    try {
      const {
        col,
        row
      } = context;
      ctx.fillStyle = getColor(fillColor, col, row, this._grid, ctx);
      ctx.beginPath();
      ctx.rect(rect.left, rect.top, rect.width, rect.height);
      ctx.fill();
    } finally {
      ctx.restore();
    }
  }

  fillRectWithState(rect, context, option = {}) {
    option.fillColor = this.getFillColorState(context, option);
    this.fillRect(rect, context, option);
  }

  getFillColorState(context, option = {}) {
    const sel = context.getSelection();
    const {
      col,
      row
    } = context;

    if (!(0, utils_1.cellEquals)(sel.select, context) && (0, utils_1.cellInRange)(sel.range, col, row)) {
      return this.theme.selectionBgColor;
    }

    if (option.fillColor) {
      return option.fillColor;
    }

    if ((0, utils_1.cellEquals)(sel.select, context)) {
      return this.theme.highlightBgColor;
    }

    const isFrozenCell = this._grid.isFrozenCell(col, row);

    if (isFrozenCell && isFrozenCell.row) {
      return this.theme.frozenRowsBgColor;
    }

    return this.theme.defaultBgColor;
  }

  border(context, {
    borderColor = this.theme.borderColor,
    lineWidth = 1
  } = {}) {
    const rect = context.getRect();
    this.drawBorderWithClip(context, ctx => {
      const {
        col,
        row
      } = context;
      const borderColors = getColor(borderColor, col, row, this._grid, ctx);

      if (lineWidth === 1) {
        ctx.lineWidth = 1;
        strokeRect(ctx, borderColors, rect.left - 0.5, rect.top - 0.5, rect.width, rect.height);
      } else if (lineWidth === 2) {
        ctx.lineWidth = 2;
        strokeRect(ctx, borderColors, rect.left, rect.top, rect.width - 1, rect.height - 1);
      } else {
        ctx.lineWidth = lineWidth;
        const startOffset = lineWidth / 2 - 1;
        strokeRect(ctx, borderColors, rect.left + startOffset, rect.top + startOffset, rect.width - lineWidth + 1, rect.height - lineWidth + 1);
      }
    });
  } // Unused in main


  borderWithState(context, option = {}) {
    const rect = context.getRect();
    const sel = context.getSelection();
    const {
      col,
      row
    } = context; //罫線

    if ((0, utils_1.cellEquals)(sel.select, context)) {
      option.borderColor = this.theme.highlightBorderColor;
      option.lineWidth = 2;
      this.border(context, option);
    } else {
      // header color
      const isFrozenCell = this._grid.isFrozenCell(col, row);

      if (isFrozenCell === null || isFrozenCell === void 0 ? void 0 : isFrozenCell.row) {
        option.borderColor = this.theme.frozenRowsBorderColor;
      }

      option.lineWidth = 1;
      this.border(context, option); //追加処理

      const sel = this._grid.selection.select;

      if (sel.col + 1 === col && sel.row === row) {
        //右が選択されている
        this.drawBorderWithClip(context, ctx => {
          const borderColors = toBoxArray(getColor(this.theme.highlightBorderColor, sel.col, sel.row, this._grid, ctx));
          ctx.lineWidth = 1;
          ctx.strokeStyle = borderColors[1] || ctx.strokeStyle;
          ctx.beginPath();
          ctx.moveTo(rect.left - 0.5, rect.top);
          ctx.lineTo(rect.left - 0.5, rect.bottom);
          ctx.stroke();
        });
      } else if (sel.col === col && sel.row + 1 === row) {
        //上が選択されている
        this.drawBorderWithClip(context, ctx => {
          const borderColors = toBoxArray(getColor(this.theme.highlightBorderColor, sel.col, sel.row, this._grid, ctx));
          ctx.lineWidth = 1;
          ctx.strokeStyle = borderColors[0] || ctx.strokeStyle;
          ctx.beginPath();
          ctx.moveTo(rect.left, rect.top - 0.5);
          ctx.lineTo(rect.right, rect.top - 0.5);
          ctx.stroke();
        });
      }
    }
  }

  buildCheckBoxInline(check, context, option = {}) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    const ctx = context.getContext();
    const boxWidth = canvashelper.measureCheckbox(ctx).width;
    return new InlineDrawer_1.InlineDrawer({
      draw,
      width: boxWidth + 3,
      height: boxWidth + 1,
      color: undefined
    });

    function draw({
      ctx,
      rect,
      offset,
      offsetLeft,
      offsetRight,
      offsetTop,
      offsetBottom
    }) {
      const {
        col,
        row
      } = context;
      drawCheckbox(ctx, rect, col, row, check, self, option, {
        offset: offset + (CHECKBOX_OFFSET - TEXT_OFFSET),
        padding: {
          left: offsetLeft + (CHECKBOX_OFFSET - TEXT_OFFSET),
          right: offsetRight,
          top: offsetTop,
          bottom: offsetBottom
        }
      });
    }
  }

  checkbox(check, context, {
    animElapsedTime,
    offset = CHECKBOX_OFFSET,
    uncheckBgColor,
    checkBgColor,
    borderColor,
    textAlign,
    textBaseline
  } = {}) {
    this.drawWithClip(context, ctx => {
      const {
        col,
        row
      } = context;
      drawCheckbox(ctx, context.getRect(), col, row, check, this, {
        animElapsedTime,
        uncheckBgColor,
        checkBgColor,
        borderColor,
        textAlign,
        textBaseline
      }, {
        offset,
        padding: {
          left: CHECKBOX_OFFSET - TEXT_OFFSET
        }
      });
    });
  }

  radioButton(check, context, {
    animElapsedTime,
    offset = CHECKBOX_OFFSET,
    checkColor,
    uncheckBorderColor,
    checkBorderColor,
    uncheckBgColor,
    checkBgColor,
    textAlign,
    textBaseline
  } = {}) {
    this.drawWithClip(context, ctx => {
      const {
        col,
        row
      } = context;
      drawRadioButton(ctx, context.getRect(), col, row, check, this, {
        animElapsedTime,
        checkColor,
        uncheckBorderColor,
        checkBorderColor,
        uncheckBgColor,
        checkBgColor,
        textAlign,
        textBaseline
      }, {
        offset,
        padding: {
          left: CHECKBOX_OFFSET - TEXT_OFFSET
        }
      });
    });
  }

  button(caption, context, {
    bgColor = this.theme.button.bgColor,
    padding,
    offset = TEXT_OFFSET,
    color = this.theme.button.color,
    textAlign = "center",
    textBaseline = "middle",
    shadow,
    font,
    textOverflow = "clip",
    icons
  } = {}) {
    const rect = context.getRect();
    this.drawWithClip(context, ctx => {
      font = getFont(font, context.col, context.row, this._grid, ctx);
      const {
        col,
        row
      } = context;
      const paddingNums = this.toBoxPixelArray(padding || rect.height / 8, context, font);
      const left = rect.left + paddingNums[3];
      const top = rect.top + paddingNums[0];
      const width = rect.width - paddingNums[1] - paddingNums[3];
      const height = rect.height - paddingNums[0] - paddingNums[2];
      bgColor = getColor(bgColor, context.col, context.row, this._grid, ctx);
      canvashelper.drawButton(ctx, left, top, width, height, {
        bgColor,
        radius: rect.height / 8,
        // offset,
        shadow
      });

      _inlineRect(this._grid, ctx, caption, new Rect_1.Rect(left, top, width, height), col, row, {
        offset,
        color,
        textAlign,
        textBaseline,
        font,
        textOverflow,
        icons
      });
    });
  }

  testFontLoad(font, value, context) {
    return testFontLoad(font, value, context, this._grid);
  }

}

exports.GridCanvasHelper = GridCanvasHelper;

/***/ }),

/***/ "./ListGrid.js":
/*!*********************!*\
  !*** ./ListGrid.js ***!
  \*********************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

var _a;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListGrid = void 0;

const icons = __importStar(__webpack_require__(/*! ./internal/icons */ "./internal/icons.js"));

const themes = __importStar(__webpack_require__(/*! ./themes */ "./themes.js"));

const data_1 = __webpack_require__(/*! ./data */ "./data.js");

const layout_map_1 = __webpack_require__(/*! ./list-grid/layout-map */ "./list-grid/layout-map/index.js");

const MessageHandler_1 = __webpack_require__(/*! ./columns/message/MessageHandler */ "./columns/message/MessageHandler.js");

const utils_1 = __webpack_require__(/*! ./internal/utils */ "./internal/utils.js");

const style_1 = __webpack_require__(/*! ./columns/style */ "./columns/style.js");

const DrawGrid_1 = __webpack_require__(/*! ./core/DrawGrid */ "./core/DrawGrid.js");

const GridCanvasHelper_1 = __webpack_require__(/*! ./GridCanvasHelper */ "./GridCanvasHelper.js");

const style_2 = __webpack_require__(/*! ./header/style */ "./header/style.js");

const LG_EVENT_TYPE_1 = __webpack_require__(/*! ./list-grid/LG_EVENT_TYPE */ "./list-grid/LG_EVENT_TYPE.js");

const Rect_1 = __webpack_require__(/*! ./internal/Rect */ "./internal/Rect.js");

const TooltipHandler_1 = __webpack_require__(/*! ./tooltip/TooltipHandler */ "./tooltip/TooltipHandler.js"); //protected symbol


const symbolManager_1 = __webpack_require__(/*! ./internal/symbolManager */ "./internal/symbolManager.js");

const paste_utils_1 = __webpack_require__(/*! ./internal/paste-utils */ "./internal/paste-utils.js");
/** @private */


const _ = (0, symbolManager_1.getProtectedSymbol)(); //private methods

/** @private */


function _getCellRange(grid, col, row) {
  return grid[_].layoutMap.getCellRange(col, row);
}
/** @private */


function _updateRect(grid, col, row, context) {
  context.setRectFilter(rect => {
    let {
      left,
      right,
      top,
      bottom
    } = rect;

    const {
      start: {
        col: startCol,
        row: startRow
      },
      end: {
        col: endCol,
        row: endRow
      }
    } = _getCellRange(grid, col, row);

    for (let c = col - 1; c >= startCol; c--) {
      left -= grid.getColWidth(c);
    }

    for (let c = col + 1; c <= endCol; c++) {
      right += grid.getColWidth(c);
    }

    for (let r = row - 1; r >= startRow; r--) {
      top -= grid.getRowHeight(r);
    }

    for (let r = row + 1; r <= endRow; r++) {
      bottom += grid.getRowHeight(r);
    }

    return Rect_1.Rect.bounds(left, top, right, bottom);
  });
}
/** @private */


function _getCellValue(grid, col, row) {
  if (row < grid[_].layoutMap.headerRowCount) {
    const {
      caption
    } = grid[_].layoutMap.getHeader(col, row);

    return typeof caption === "function" ? caption() : caption;
  } else {
    const {
      field
    } = grid[_].layoutMap.getBody(col, row);

    return _getField(grid, field, row);
  }
}
/** @private */


function _setCellValue(grid, col, row, // eslint-disable-next-line @typescript-eslint/no-explicit-any
value) {
  if (row < grid[_].layoutMap.headerRowCount) {
    // nop
    return false;
  } else {
    const {
      field
    } = grid[_].layoutMap.getBody(col, row);

    if (field == null) {
      return false;
    }

    const index = _getRecordIndexByRow(grid, row);

    return grid[_].dataSource.setField(index, field, value);
  }
}
/** @private */


function _getCellMessage(grid, col, row) {
  if (row < grid[_].layoutMap.headerRowCount) {
    return null;
  } else {
    const {
      message
    } = grid[_].layoutMap.getBody(col, row);

    if (!message) {
      return null;
    }

    if (!Array.isArray(message)) {
      return _getField(grid, message, row);
    }

    const promises = [];

    for (let index = 0; index < message.length; index++) {
      const msg = _getField(grid, message[index], row);

      if ((0, utils_1.isPromise)(msg)) {
        promises.push(msg);
      } else if ((0, MessageHandler_1.hasMessage)(msg)) {
        return msg;
      }
    }

    if (!promises.length) {
      return null;
    }

    return new Promise((resolve, reject) => {
      promises.forEach(p => {
        p.then(msg => {
          if ((0, MessageHandler_1.hasMessage)(msg)) {
            resolve(msg);
          }
        }, reject);
      });
    });
  }
}

function _getCellIcon0(grid, icon, row) {
  if (Array.isArray(icon)) {
    return icon.map(i => _getCellIcon0(grid, i, row));
  }

  if (!utils_1.obj.isObject(icon) || typeof icon === "function") {
    return _getField(grid, icon, row);
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any


  const retIcon = {}; // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const iconOpt = icon;
  icons.iconPropKeys.forEach(k => {
    if (iconOpt[k]) {
      const f = _getField(grid, iconOpt[k], row);

      if (f != null) {
        retIcon[k] = f;
      } else {
        if (!_hasField(grid, iconOpt[k], row)) {
          retIcon[k] = iconOpt[k];
        }
      }
    }
  });
  return retIcon;
}
/** @private */


function _getCellIcon(grid, col, row) {
  if (row < grid[_].layoutMap.headerRowCount) {
    const {
      headerIcon
    } = grid[_].layoutMap.getHeader(col, row);

    if (headerIcon == null) {
      return null;
    }

    return headerIcon;
  } else {
    const {
      icon
    } = grid[_].layoutMap.getBody(col, row);

    if (icon == null) {
      return null;
    }

    return _getCellIcon0(grid, icon, row);
  }
}
/** @private */


function _getField(grid, field, row) {
  if (field == null) {
    return null;
  }

  if (row < grid[_].layoutMap.headerRowCount) {
    return null;
  } else {
    const index = _getRecordIndexByRow(grid, row);

    return grid[_].dataSource.getField(index, field);
  }
}
/** @private */


function _hasField(grid, field, row) {
  if (field == null) {
    return false;
  }

  if (row < grid[_].layoutMap.headerRowCount) {
    return false;
  } else {
    const index = _getRecordIndexByRow(grid, row);

    return grid[_].dataSource.hasField(index, field);
  }
}
/** @private */


function _onDrawValue(grid, cellValue, context, {
  col,
  row
}, style, draw) {
  const helper = grid[_].gridCanvasHelper;

  const drawCellBg = ({
    bgColor
  } = {}) => {
    const fillOpt = {
      fillColor: bgColor
    }; //cell全体を描画

    helper.fillCellWithState(context, fillOpt);
  };

  const drawCellBorder = () => {
    if (context.col === grid.frozenColCount - 1) {
      //固定列罫線
      const rect = context.getRect();
      helper.drawWithClip(context, ctx => {
        const borderColor = context.row >= grid.frozenRowCount ? helper.theme.borderColor : helper.theme.frozenRowsBorderColor;
        const borderColors = helper.toBoxArray(helper.getColor(borderColor, context.col, context.row, ctx));

        if (borderColors[1]) {
          ctx.lineWidth = 1;
          ctx.strokeStyle = borderColors[1];
          ctx.beginPath();
          ctx.moveTo(rect.right - 2.5, rect.top);
          ctx.lineTo(rect.right - 2.5, rect.bottom);
          ctx.stroke();
        }
      });
    }

    _borderWithState(grid, helper, context);
  };

  const drawCellBase = ({
    bgColor
  } = {}) => {
    drawCellBg({
      bgColor
    });
    drawCellBorder();
  };

  const info = {
    getRecord: () => grid.getRowRecord(row),
    getIcon: () => _getCellIcon(grid, col, row),
    getMessage: () => _getCellMessage(grid, col, row),
    messageHandler: grid[_].messageHandler,
    style,
    drawCellBase,
    drawCellBg,
    drawCellBorder
  };
  return draw(cellValue, info, context, grid);
}
/** @private */


function _borderWithState(grid, helper, context) {
  var _b, _c, _d, _e, _f, _g, _h;

  const {
    col,
    row
  } = context;
  const sel = grid.selection.select;
  const {
    layoutMap
  } = grid[_];
  const rect = context.getRect();
  const option = {};
  const selRecordIndex = layoutMap.getRecordIndexByRow(sel.row);
  const selId = layoutMap.getCellId(sel.col, sel.row);

  function isSelectCell(col, row) {
    if (col === sel.col && row === sel.row) {
      return true;
    }

    return selId != null && layoutMap.getCellId(col, row) === selId && layoutMap.getRecordIndexByRow(row) === selRecordIndex;
  } //罫線


  if (isSelectCell(col, row)) {
    option.borderColor = helper.theme.highlightBorderColor;
    option.lineWidth = 2;
    helper.border(context, option);
  } else {
    option.lineWidth = 1; // header color

    const isFrozenCell = grid.isFrozenCell(col, row);

    if (isFrozenCell === null || isFrozenCell === void 0 ? void 0 : isFrozenCell.row) {
      option.borderColor = helper.theme.frozenRowsBorderColor;
    }

    helper.border(context, option);

    if ((_b = layoutMap.getBody(col, row)) === null || _b === void 0 ? void 0 : _b.style) {
      let borderColorCell = "";

      if (typeof ((_c = layoutMap.getBody(col, row)) === null || _c === void 0 ? void 0 : _c.style) == "object") {
        borderColorCell = (_e = (_d = layoutMap.getBody(col, row).style) === null || _d === void 0 ? void 0 : _d.borderColor) !== null && _e !== void 0 ? _e : "";
      }

      if (typeof ((_f = layoutMap.getBody(col, row)) === null || _f === void 0 ? void 0 : _f.style) == "function" && ((_g = grid[_].records) === null || _g === void 0 ? void 0 : _g.length)) {
        borderColorCell = (_h = layoutMap.getBody(col, row).style(grid[_].records[layoutMap.getRecordIndexByRow(row)])) === null || _h === void 0 ? void 0 : _h.borderColor;
      }

      if (borderColorCell) {
        option.borderColor = borderColorCell;
        helper.border(context, option);
      }
    } //追加処理


    if (col > 0 && isSelectCell(col - 1, row)) {
      //右が選択されている
      helper.drawBorderWithClip(context, ctx => {
        const borderColors = helper.toBoxArray(helper.getColor(helper.theme.highlightBorderColor, sel.col, sel.row, ctx));

        if (borderColors[1]) {
          ctx.lineWidth = 1;
          ctx.strokeStyle = borderColors[1];
          ctx.beginPath();
          ctx.moveTo(rect.left - 0.5, rect.top);
          ctx.lineTo(rect.left - 0.5, rect.bottom);
          ctx.stroke();
        }
      });
    } else if (row > 0 && isSelectCell(col, row - 1)) {
      //上が選択されている
      helper.drawBorderWithClip(context, ctx => {
        const borderColors = helper.toBoxArray(helper.getColor(helper.theme.highlightBorderColor, sel.col, sel.row, ctx));

        if (borderColors[0]) {
          ctx.lineWidth = 1;
          ctx.strokeStyle = borderColors[0];
          ctx.beginPath();
          ctx.moveTo(rect.left, rect.top - 0.5);
          ctx.lineTo(rect.right, rect.top - 0.5);
          ctx.stroke();
        }
      });
    }
  }
}
/** @private */


function _refreshHeader(grid) {
  var _b;

  const protectedSpace = grid[_];

  if (protectedSpace.headerEvents) {
    protectedSpace.headerEvents.forEach(id => grid.unlisten(id));
  }

  const headerEvents = grid[_].headerEvents = [];
  headerEvents.forEach(id => grid.unlisten(id));
  let layoutMap;

  if (protectedSpace.layout && (!Array.isArray(protectedSpace.layout) || protectedSpace.layout.length > 0)) {
    layoutMap = protectedSpace.layoutMap = new layout_map_1.MultiLayoutMap(protectedSpace.layout);
  } else {
    layoutMap = protectedSpace.layoutMap = new layout_map_1.SimpleHeaderLayoutMap((_b = protectedSpace.header) !== null && _b !== void 0 ? _b : []);
  }

  layoutMap.headerObjects.forEach(cell => {
    const ids = cell.headerType.bindGridEvent(grid, cell.id);
    headerEvents.push(...ids);

    if (cell.style) {
      if (cell.style instanceof style_2.BaseStyle) {
        const id = cell.style.listen(style_2.BaseStyle.EVENT_TYPE.CHANGE_STYLE, () => {
          grid.invalidate();
        });
        headerEvents.push(id);
      }
    }

    if (cell.action) {
      const ids = cell.action.bindGridEvent(grid, cell.id);
      headerEvents.push(...ids);
    }
  });
  layoutMap.columnObjects.forEach(col => {
    if (col.action) {
      const ids = col.action.bindGridEvent(grid, col.id);
      headerEvents.push(...ids);
    }

    if (col.columnType) {
      const ids = col.columnType.bindGridEvent(grid, col.id);
      headerEvents.push(...ids);
    }

    if (col.style) {
      if (col.style instanceof style_1.BaseStyle) {
        const id = col.style.listen(style_1.BaseStyle.EVENT_TYPE.CHANGE_STYLE, () => {
          grid.invalidate();
        });
        headerEvents.push(id);
      }
    }
  });

  for (let col = 0; col < layoutMap.columnWidths.length; col++) {
    const column = layoutMap.columnWidths[col];
    const {
      width,
      minWidth,
      maxWidth
    } = column;

    if (width && (typeof width === "string" || width > 0)) {
      grid.setColWidth(col, width);
    } else {
      grid.setColWidth(col, null);
    }

    if (minWidth && (typeof minWidth === "string" || minWidth > 0)) {
      grid.setMinColWidth(col, minWidth);
    } else {
      grid.setMinColWidth(col, null);
    }

    if (maxWidth && (typeof maxWidth === "string" || maxWidth > 0)) {
      grid.setMaxColWidth(col, maxWidth);
    } else {
      grid.setMaxColWidth(col, null);
    }
  }

  const {
    headerRowHeight
  } = grid[_];

  for (let row = 0; row < layoutMap.headerRowCount; row++) {
    const height = Array.isArray(headerRowHeight) ? headerRowHeight[row] : headerRowHeight;

    if (height && height > 0) {
      grid.setRowHeight(row, height);
    } else {
      grid.setRowHeight(row, null);
    }
  }

  grid.colCount = layoutMap.colCount;

  _refreshRowCount(grid);

  grid.frozenRowCount = layoutMap.headerRowCount;
}
/** @private */


function _refreshRowCount(grid) {
  const {
    layoutMap
  } = grid[_];
  grid.rowCount = grid[_].dataSource.length * layoutMap.bodyRowCount + layoutMap.headerRowCount;
}
/** @private */


function _tryWithUpdateDataSource(grid, fn) {
  const {
    dataSourceEventIds
  } = grid[_];

  if (dataSourceEventIds) {
    dataSourceEventIds.forEach(id => grid[_].handler.off(id));
  }

  fn(grid);
  grid[_].dataSourceEventIds = [grid[_].handler.on(grid[_].dataSource, data_1.DataSource.EVENT_TYPE.UPDATED_LENGTH, () => {
    _refreshRowCount(grid);

    grid.invalidate();
  }), grid[_].handler.on(grid[_].dataSource, data_1.DataSource.EVENT_TYPE.UPDATED_ORDER, () => {
    grid.invalidate();
  })];
}
/** @private */


function _setRecords(grid, records = []) {
  _tryWithUpdateDataSource(grid, () => {
    grid[_].records = records;
    const newDataSource = grid[_].dataSource = data_1.CachedDataSource.ofArray(records);
    grid.addDisposable(newDataSource);
  });
}
/** @private */


function _setDataSource(grid, dataSource) {
  _tryWithUpdateDataSource(grid, () => {
    if (dataSource) {
      if (dataSource instanceof data_1.DataSource) {
        grid[_].dataSource = dataSource;
      } else {
        const newDataSource = grid[_].dataSource = new data_1.CachedDataSource(dataSource);
        grid.addDisposable(newDataSource);
      }
    } else {
      grid[_].dataSource = data_1.DataSource.EMPTY;
    }

    grid[_].records = null;
  });
}
/** @private */


function _getRecordIndexByRow(grid, row) {
  const {
    layoutMap
  } = grid[_];
  return layoutMap.getRecordIndexByRow(row);
}
/** @private */


function _onRangePaste(text, test = () => true) {
  var _b;

  const {
    layoutMap
  } = this[_];
  const selectionRange = this.selection.range;
  const {
    start
  } = this.getCellRange(selectionRange.start.col, selectionRange.start.row);
  const {
    end
  } = this.getCellRange(selectionRange.end.col, selectionRange.end.row);
  const values = (0, paste_utils_1.parsePasteRangeBoxValues)(text, {
    trimOnPaste: this.trimOnPaste
  });
  const pasteRowCount = Math.min(Math.max(end.row - start.row + 1, values.rowCount), this.rowCount - start.row);
  const pasteColCount = Math.min(Math.max(end.col - start.col + 1, values.colCount), this.colCount - start.col);
  let hasEditable = false;
  const actionColumnsBox = [];

  for (let bodyRow = 0; bodyRow < layoutMap.bodyRowCount; bodyRow++) {
    const actionColumnsRow = [];
    actionColumnsBox.push(actionColumnsRow);

    for (let offsetCol = 0; offsetCol < pasteColCount; offsetCol++) {
      const body = layoutMap.getBody(start.col + offsetCol, bodyRow + layoutMap.headerRowCount);
      actionColumnsRow[offsetCol] = body;

      if (!hasEditable && ((_b = body.action) === null || _b === void 0 ? void 0 : _b.editable)) {
        hasEditable = true;
      }
    }
  }

  if (!hasEditable) {
    return;
  }

  const startRow = layoutMap.getRecordStartRowByRecordIndex(layoutMap.getRecordIndexByRow(start.row));
  const startRowOffset = start.row - startRow;
  let rejectedDetail = [];

  const addRejectedDetail = (cell, record, define, pasteValue) => {
    rejectedDetail.push({
      col: cell.col,
      row: cell.row,
      record,
      define,
      pasteValue
    });
  };

  let timeout = null;

  const processRejected = () => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (rejectedDetail.length > 0) {
        this.fireListeners(LG_EVENT_TYPE_1.LG_EVENT_TYPE.REJECTED_PASTE_VALUES, {
          detail: rejectedDetail
        });
        rejectedDetail = [];
      }
    }, 100);
  };

  let reject = addRejectedDetail;
  let duplicate = {};
  let actionRow = startRowOffset;
  let valuesRow = 0;

  for (let offsetRow = 0; offsetRow < pasteRowCount; offsetRow++) {
    let valuesCol = 0;

    for (let offsetCol = 0; offsetCol < pasteColCount; offsetCol++) {
      const {
        action,
        id,
        define
      } = actionColumnsBox[actionRow][offsetCol];

      if (!duplicate[id] && (action === null || action === void 0 ? void 0 : action.editable)) {
        duplicate[id] = true;
        const col = start.col + offsetCol;
        const row = start.row + offsetRow;
        const cellValue = values.getCellValue(valuesCol, valuesRow);
        (0, utils_1.then)(this.getRowRecord(row), record => {
          (0, utils_1.then)(_getCellValue(this, col, row), oldValue => {
            if (test({
              grid: this,
              record: record,
              col,
              row,
              value: cellValue,
              oldValue
            })) {
              action.onPasteCellRangeBox(this, {
                col,
                row
              }, cellValue, {
                reject() {
                  reject({
                    col,
                    row
                  }, record, define, cellValue);
                }

              });
            }
          });
        });
      }

      valuesCol++;

      if (valuesCol >= values.colCount) {
        valuesCol = 0;
      }
    }

    actionRow++;

    if (actionRow >= layoutMap.bodyRowCount) {
      actionRow = 0;
      duplicate = {};
    }

    valuesRow++;

    if (valuesRow >= values.rowCount) {
      valuesRow = 0;
    }
  }

  const newEnd = {
    col: start.col + pasteColCount - 1,
    row: start.row + pasteRowCount - 1
  };
  this.selection.range = {
    start,
    end: newEnd
  };
  this.invalidateCellRange(this.selection.range);
  processRejected();

  reject = (cell, record, define, pasteValue) => {
    addRejectedDetail(cell, record, define, pasteValue);
    processRejected();
  };
}
/** @private */


function _onRangeDelete() {
  var _b;

  const {
    layoutMap
  } = this[_];
  const selectionRange = this.selection.range;
  const {
    start
  } = this.getCellRange(selectionRange.start.col, selectionRange.start.row);
  const {
    end
  } = this.getCellRange(selectionRange.end.col, selectionRange.end.row);
  const deleteRowCount = Math.min(end.row - start.row + 1, this.rowCount - start.row);
  const deleteColCount = Math.min(end.col - start.col + 1, this.colCount - start.col);
  let hasEditable = false;
  const actionColumnsBox = [];

  for (let bodyRow = 0; bodyRow < layoutMap.bodyRowCount; bodyRow++) {
    const actionColumnsRow = [];
    actionColumnsBox.push(actionColumnsRow);

    for (let offsetCol = 0; offsetCol < deleteColCount; offsetCol++) {
      const body = layoutMap.getBody(start.col + offsetCol, bodyRow + layoutMap.headerRowCount);
      actionColumnsRow[offsetCol] = body;

      if (!hasEditable && ((_b = body.action) === null || _b === void 0 ? void 0 : _b.editable)) {
        hasEditable = true;
      }
    }
  }

  if (!hasEditable) {
    return;
  }

  const startRow = layoutMap.getRecordStartRowByRecordIndex(layoutMap.getRecordIndexByRow(start.row));
  const startRowOffset = start.row - startRow;
  let duplicate = {};
  let actionRow = startRowOffset;

  for (let offsetRow = 0; offsetRow < deleteRowCount; offsetRow++) {
    for (let offsetCol = 0; offsetCol < deleteColCount; offsetCol++) {
      const {
        action,
        id
      } = actionColumnsBox[actionRow][offsetCol];

      if (!duplicate[id] && (action === null || action === void 0 ? void 0 : action.editable)) {
        duplicate[id] = true;
        const col = start.col + offsetCol;
        const row = start.row + offsetRow;
        (0, utils_1.then)(this.getRowRecord(row), _record => {
          (0, utils_1.then)(_getCellValue(this, col, row), _oldValue => {
            action.onDeleteCellRangeBox(this, {
              col,
              row
            });
          });
        });
      }
    }

    actionRow++;

    if (actionRow >= layoutMap.bodyRowCount) {
      actionRow = 0;
      duplicate = {};
    }
  }

  this.invalidateCellRange(selectionRange);
}
/**
 * ListGrid
 * @classdesc cheetahGrid.ListGrid
 * @memberof cheetahGrid
 */


class ListGrid extends DrawGrid_1.DrawGrid {
  static get EVENT_TYPE() {
    return LG_EVENT_TYPE_1.LG_EVENT_TYPE;
  }
  /**
   * constructor
   *
   * @constructor
   * @param options Constructor options
   */


  constructor(options = {}) {
    var _b;

    super((0, utils_1.omit)(options, ["colCount", "rowCount", "frozenRowCount"]));
    this[_a] = this[_];
    this.disabled = false;
    this.readOnly = false;
    const protectedSpace = this[_];
    protectedSpace.header = options.header || [];
    protectedSpace.layout = options.layout || [];
    protectedSpace.headerRowHeight = options.headerRowHeight || [];

    if (options.dataSource) {
      _setDataSource(this, options.dataSource);
    } else {
      _setRecords(this, options.records);
    }

    protectedSpace.allowRangePaste = (_b = options.allowRangePaste) !== null && _b !== void 0 ? _b : false;

    _refreshHeader(this);

    protectedSpace.sortState = {
      col: -1,
      row: -1,
      order: undefined
    };
    protectedSpace.gridCanvasHelper = new GridCanvasHelper_1.GridCanvasHelper(this);
    protectedSpace.theme = themes.of(options.theme);
    protectedSpace.messageHandler = new MessageHandler_1.MessageHandler(this, (col, row) => _getCellMessage(this, col, row));
    protectedSpace.tooltipHandler = new TooltipHandler_1.TooltipHandler(this);
    this.invalidate();
    protectedSpace.handler.on(window, "resize", () => {
      this.updateSize();
      this.updateScroll();
      this.invalidate();
    });
  }
  /**
   * Dispose the grid instance.
   * @returns {void}
   */


  dispose() {
    const protectedSpace = this[_];
    protectedSpace.messageHandler.dispose();
    protectedSpace.tooltipHandler.dispose();
    super.dispose();
  }
  /**
   * Gets the define of the header.
   */


  get header() {
    return this[_].header;
  }
  /**
   * Sets the define of the header with the given data.
   * <pre>
   * column options
   * -----
   * caption: header caption
   * field: field name
   * width: column width
   * minWidth: column min width
   * maxWidth: column max width
   * icon: icon definition
   * message: message key name
   * columnType: column type
   * action: column action
   * style: column style
   * headerType: header type
   * headerStyle: header style
   * headerAction: header action
   * headerField: header field name
   * headerIcon: header icon definition
   * sort: define sort setting
   * -----
   *
   * multiline header
   * -----
   * caption: header caption
   * columns: columns define
   * -----
   * </pre>
   */


  set header(header) {
    this[_].header = header;

    _refreshHeader(this);
  }
  /**
   * Gets the define of the layout.
   */


  get layout() {
    return this[_].layout;
  }
  /**
   * Sets the define of the layout with the given data.
   */


  set layout(layout) {
    this[_].layout = layout;

    _refreshHeader(this);
  }
  /**
   * Get the row count per record
   */


  get recordRowCount() {
    return this[_].layoutMap.bodyRowCount;
  }
  /**
   * Get the records.
   */


  get records() {
    return this[_].records || null;
  }
  /**
   * Set the records from given
   */


  set records(records) {
    if (records == null) {
      return;
    }

    _setRecords(this, records);

    _refreshRowCount(this);

    this.invalidate();
  }
  /**
   * Get the data source.
   */


  get dataSource() {
    return this[_].dataSource;
  }
  /**
   * Set the data source from given
   */


  set dataSource(dataSource) {
    _setDataSource(this, dataSource);

    _refreshRowCount(this);

    this.invalidate();
  }
  /**
   * Get the theme.
   */


  get theme() {
    return this[_].theme;
  }
  /**
   * Set the theme from given
   */


  set theme(theme) {
    this[_].theme = themes.of(theme);
    this.invalidate();
  }
  /**
   * If set to true to allow pasting of ranges.
   */


  get allowRangePaste() {
    return this[_].allowRangePaste;
  }

  set allowRangePaste(allowRangePaste) {
    this[_].allowRangePaste = allowRangePaste;
  }
  /**
   * Get the font definition as a string.
   * @override
   */


  get font() {
    return super.font || this[_].gridCanvasHelper.theme.font;
  }
  /**
   * Set the font definition with the given string.
   * @override
   */


  set font(font) {
    super.font = font;
  }
  /**
   * Get the background color of the underlay.
   * @override
   */


  get underlayBackgroundColor() {
    return super.underlayBackgroundColor || this[_].gridCanvasHelper.theme.underlayBackgroundColor;
  }
  /**
   * Set the background color of the underlay.
   * @override
   */


  set underlayBackgroundColor(underlayBackgroundColor) {
    super.underlayBackgroundColor = underlayBackgroundColor;
  }
  /**
   * Get the sort state.
   */


  get sortState() {
    return this[_].sortState;
  }
  /**
   * Sets the sort state.
   * If `null` to set, the sort state is initialized.
   */


  set sortState(sortState) {
    const oldState = this.sortState;
    let oldField;

    if (oldState.col >= 0 && oldState.row >= 0) {
      oldField = this.getHeaderField(oldState.col, oldState.row);
    }

    const newState = this[_].sortState = sortState != null ? sortState : {
      col: -1,
      row: -1,
      order: undefined
    };
    let newField;

    if (newState.col >= 0 && newState.row >= 0) {
      newField = this.getHeaderField(newState.col, newState.row);
    } // bind header value


    if (oldField != null && oldField !== newField) {
      this.setHeaderValue(oldState.col, oldState.row, undefined);
    }

    if (newField != null) {
      this.setHeaderValue(newState.col, newState.row, newState.order);
    }
  }
  /**
   * Get the header values.
   */


  get headerValues() {
    return this[_].headerValues || (this[_].headerValues = new Map());
  }
  /**
   * Sets the header values.
   */


  set headerValues(headerValues) {
    this[_].headerValues = headerValues || new Map();
  }
  /**
   * Get the field of the given column index.
   * @param  {number} col The column index.
   * @param  {number} row The row index.
   * @return {*} The field object.
   */


  getField(col, row) {
    return this[_].layoutMap.getBody(col, row !== null && row !== void 0 ? row : this[_].layoutMap.headerRowCount).field;
  }
  /**
   * Get the column define of the given column index.
   * @param  {number} col The column index.
   * @param  {number} row The row index.
   * @return {*} The column define object.
   */


  getColumnDefine(col, row) {
    return this[_].layoutMap.getBody(col, row !== null && row !== void 0 ? row : this[_].layoutMap.headerRowCount).define;
  }

  getColumnType(col, row) {
    return this[_].layoutMap.getBody(col, row).columnType;
  }

  getColumnAction(col, row) {
    return this[_].layoutMap.getBody(col, row).action;
  }
  /**
   * Get the header field of the given header cell.
   * @param  {number} col The column index.
   * @param  {number} row The header row index.
   * @return {*} The field object.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any


  getHeaderField(col, row) {
    const hd = this[_].layoutMap.getHeader(col, row);

    return hd.field;
  }
  /**
   * Get the header define of the given header cell.
   * @param  {number} col The column index.
   * @param  {number} row The header row index.
   * @return {*} The header define object.
   */


  getHeaderDefine(col, row) {
    const hd = this[_].layoutMap.getHeader(col, row);

    return hd.define;
  }
  /**
   * Get the record of the given row index.
   * @param  {number} row The row index.
   * @return {object} The record.
   */


  getRowRecord(row) {
    if (row < this[_].layoutMap.headerRowCount) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return undefined;
    } else {
      return this[_].dataSource.get(_getRecordIndexByRow(this, row));
    }
  }
  /**
   * Get the record index of the given row index.
   * @param  {number} row The row index.
   */


  getRecordIndexByRow(row) {
    return _getRecordIndexByRow(this, row);
  }
  /**
   * Gets the row index starting at the given record index.
   * @param  {number} index The record index.
   */


  getRecordStartRowByRecordIndex(index) {
    return this[_].layoutMap.getRecordStartRowByRecordIndex(index);
  }
  /**
   * Get the column index of the given field.
   * @param  {*} field The field.
   * @return {number} The column index.
   * @deprecated use `getCellRangeByField` instead
   */


  getColumnIndexByField(field) {
    var _b;

    const range = this.getCellRangeByField(field, 0);
    return (_b = range === null || range === void 0 ? void 0 : range.start.col) !== null && _b !== void 0 ? _b : null;
  }
  /**
   * Get the column index of the given field.
   * @param  {*} field The field.
   * @param  {number} index The record index
   * @return {number} The column index.
   */


  getCellRangeByField(field, index) {
    const {
      layoutMap
    } = this[_];
    const colObj = layoutMap.columnObjects.find(col => col.field === field);

    if (colObj) {
      const layoutRange = layoutMap.getBodyLayoutRangeById(colObj.id);
      const startRow = layoutMap.getRecordStartRowByRecordIndex(index);
      return {
        start: {
          col: layoutRange.start.col,
          row: startRow + layoutRange.start.row
        },
        end: {
          col: layoutRange.end.col,
          row: startRow + layoutRange.end.row
        }
      };
    }

    return null;
  }
  /**
   * Focus the cell.
   * @param  {*} field The field.
   * @param  {number} index The record index
   * @return {void}
   */


  focusGridCell(field, index) {
    var _b;

    const {
      start: {
        col: startCol,
        row: startRow
      },
      end: {
        col: endCol,
        row: endRow
      }
    } = this.selection.range;
    const newFocus = (_b = this.getCellRangeByField(field, index)) === null || _b === void 0 ? void 0 : _b.start;

    if (newFocus == null) {
      return;
    }

    this.focusCell(newFocus.col, newFocus.row);
    this.selection.select = newFocus;
    this.invalidateGridRect(startCol, startRow, endCol, endRow);
    this.invalidateCell(newFocus.col, newFocus.row);
  }
  /**
   * Scroll to where cell is visible.
   * @param  {*} field The field.
   * @param  {number} index The record index
   * @return {void}
   */


  makeVisibleGridCell(field, index) {
    var _b, _c, _d;

    const cell = (_b = this.getCellRangeByField(field, index)) === null || _b === void 0 ? void 0 : _b.start;
    this.makeVisibleCell((_c = cell === null || cell === void 0 ? void 0 : cell.col) !== null && _c !== void 0 ? _c : 0, (_d = cell === null || cell === void 0 ? void 0 : cell.row) !== null && _d !== void 0 ? _d : this[_].layoutMap.headerRowCount);
  }

  getGridCanvasHelper() {
    return this[_].gridCanvasHelper;
  }
  /**
   * Get cell range information for a given cell.
   * @param {number} col column index of the cell
   * @param {number} row row index of the cell
   * @returns {object} cell range info
   */


  getCellRange(col, row) {
    return _getCellRange(this, col, row);
  }
  /**
   * Get header range information for a given cell.
   * @param {number} col column index of the cell
   * @param {number} row row index of the cell
   * @returns {object} cell range info
   * @deprecated use `getCellRange` instead
   */


  getHeaderCellRange(col, row) {
    return this.getCellRange(col, row);
  }

  getCopyCellValue(col, row, range) {
    const cellRange = _getCellRange(this, col, row);

    const startCol = range ? Math.max(range.start.col, cellRange.start.col) : cellRange.start.col;
    const startRow = range ? Math.max(range.start.row, cellRange.start.row) : cellRange.start.row;

    if (startCol !== col || startRow !== row) {
      return "";
    }

    const value = _getCellValue(this, col, row);

    if (row < this[_].layoutMap.headerRowCount) {
      const headerData = this[_].layoutMap.getHeader(col, row);

      return headerData.headerType.getCopyCellValue(value, this, {
        col,
        row
      });
    }

    const columnData = this[_].layoutMap.getBody(col, row);

    return columnData.columnType.getCopyCellValue(value, this, {
      col,
      row
    });
  }

  onDrawCell(col, row, context) {
    const {
      layoutMap
    } = this[_];
    let draw;
    let style;

    if (row < layoutMap.headerRowCount) {
      const hd = layoutMap.getHeader(col, row);
      draw = hd.headerType.onDrawCell;
      ({
        style
      } = hd);

      _updateRect(this, col, row, context);
    } else {
      const column = layoutMap.getBody(col, row);
      draw = column.columnType.onDrawCell;
      ({
        style
      } = column);

      _updateRect(this, col, row, context);
    }

    const cellValue = _getCellValue(this, col, row);

    if (this.rowCount <= row) {
      // Depending on the FilterDataSource, the rowCount may be reduced.
      return undefined;
    }

    return _onDrawValue(this, cellValue, context, {
      col,
      row
    }, style, draw);
  }

  doGetCellValue(col, row, // eslint-disable-next-line @typescript-eslint/no-explicit-any
  valueCallback) {
    if (row < this[_].layoutMap.headerRowCount) {
      // nop
      return false;
    } else {
      const value = _getCellValue(this, col, row);

      if ((0, utils_1.isPromise)(value)) {
        //遅延中は無視
        return false;
      }

      valueCallback(value);
    }

    return true;
  }

  doChangeValue(col, row, // eslint-disable-next-line @typescript-eslint/no-explicit-any
  changeValueCallback) {
    if (row < this[_].layoutMap.headerRowCount) {
      // nop
      return false;
    } else {
      const record = this.getRowRecord(row);

      if ((0, utils_1.isPromise)(record)) {
        //遅延中は無視
        return false;
      }

      const before = _getCellValue(this, col, row);

      if ((0, utils_1.isPromise)(before)) {
        //遅延中は無視
        return false;
      }

      const after = changeValueCallback(before);

      if (after === undefined) {
        return false;
      }

      const {
        field
      } = this[_].layoutMap.getBody(col, row);

      this.fireListeners(LG_EVENT_TYPE_1.LG_EVENT_TYPE.BEFORE_CHANGE_VALUE, {
        col,
        row,
        record: record,
        field: field,
        value: after,
        oldValue: before
      });
      return (0, utils_1.then)(_setCellValue(this, col, row, after), ret => {
        if (ret) {
          const {
            field
          } = this[_].layoutMap.getBody(col, row);

          this.fireListeners(LG_EVENT_TYPE_1.LG_EVENT_TYPE.CHANGED_VALUE, {
            col,
            row,
            record: record,
            field: field,
            value: after,
            oldValue: before
          });
        }

        return ret;
      });
    }
  }

  doSetPasteValue(text, test) {
    _onRangePaste.call(this, text, test);
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any


  getHeaderValue(col, row) {
    const field = this.getHeaderField(col, row);
    return this.headerValues.get(field);
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any


  setHeaderValue(col, row, newValue) {
    const field = this.getHeaderField(col, row);
    const oldValue = this.headerValues.get(field);
    this.headerValues.set(field, newValue);
    this.fireListeners(LG_EVENT_TYPE_1.LG_EVENT_TYPE.CHANGED_HEADER_VALUE, {
      col,
      row,
      field,
      value: newValue,
      oldValue
    });
  }

  getLayoutCellId(col, row) {
    return this[_].layoutMap.getCellId(col, row);
  }

  bindEventsInternal() {
    const grid = this;
    grid.listen(LG_EVENT_TYPE_1.LG_EVENT_TYPE.SELECTED_CELL, e => {
      const range = _getCellRange(this, e.col, e.row);

      const {
        start: {
          col: startCol,
          row: startRow
        },
        end: {
          col: endCol,
          row: endRow
        }
      } = range;

      if (startCol !== endCol || startRow !== endRow) {
        this.invalidateCellRange(range);
      }
    });
    grid.listen(LG_EVENT_TYPE_1.LG_EVENT_TYPE.PASTE_CELL, e => {
      if (!this[_].allowRangePaste) {
        return;
      }

      const {
        start,
        end
      } = this.selection.range;

      if (!e.multi && (0, utils_1.cellEquals)(start, end)) {
        return;
      }

      const {
        layoutMap
      } = this[_];

      if (start.row < layoutMap.headerRowCount) {
        return;
      }

      utils_1.event.cancel(e.event);

      _onRangePaste.call(this, e.normalizeValue);
    });
    grid.listen(LG_EVENT_TYPE_1.LG_EVENT_TYPE.DELETE_CELL, e => {
      const {
        start
      } = this.selection.range;
      const {
        layoutMap
      } = this[_];

      if (start.row < layoutMap.headerRowCount) {
        return;
      }

      utils_1.event.cancel(e.event);

      _onRangeDelete.call(this);
    });
  }

  getMoveLeftColByKeyDownInternal({
    col,
    row
  }) {
    const {
      start: {
        col: startCol
      }
    } = _getCellRange(this, col, row);

    col = startCol;
    return super.getMoveLeftColByKeyDownInternal({
      col,
      row
    });
  }

  getMoveRightColByKeyDownInternal({
    col,
    row
  }) {
    const {
      end: {
        col: endCol
      }
    } = _getCellRange(this, col, row);

    col = endCol;
    return super.getMoveRightColByKeyDownInternal({
      col,
      row
    });
  }

  getMoveUpRowByKeyDownInternal({
    col,
    row
  }) {
    const {
      start: {
        row: startRow
      }
    } = _getCellRange(this, col, row);

    row = startRow;
    return super.getMoveUpRowByKeyDownInternal({
      col,
      row
    });
  }

  getMoveDownRowByKeyDownInternal({
    col,
    row
  }) {
    const {
      end: {
        row: endRow
      }
    } = _getCellRange(this, col, row);

    row = endRow;
    return super.getMoveDownRowByKeyDownInternal({
      col,
      row
    });
  }

  getOffsetInvalidateCells() {
    return 1;
  }

  getCopyRangeInternal(range) {
    const {
      start
    } = this.getCellRange(range.start.col, range.start.row);
    const {
      end
    } = this.getCellRange(range.end.col, range.end.row);
    return {
      start,
      end
    };
  }

  fireListeners(type, ...event) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return super.fireListeners(type, ...event);
  }

}

exports.ListGrid = ListGrid;
_a = _;

/***/ }),

/***/ "./columns.js":
/*!********************!*\
  !*** ./columns.js ***!
  \********************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.style = exports.type = exports.action = void 0;

const action = __importStar(__webpack_require__(/*! ./columns/action */ "./columns/action.js"));

exports.action = action;

const style = __importStar(__webpack_require__(/*! ./columns/style */ "./columns/style.js"));

exports.style = style;

const type = __importStar(__webpack_require__(/*! ./columns/type */ "./columns/type.js"));

exports.type = type;

/***/ }),

/***/ "./columns/action.js":
/*!***************************!*\
  !*** ./columns/action.js ***!
  \***************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.of = exports.InlineMenuEditor = exports.InlineInputEditor = exports.SmallDialogInputEditor = exports.ButtonAction = exports.RadioEditor = exports.CheckEditor = exports.Action = exports.Editor = exports.BaseAction = exports.ACTIONS = void 0;

const Action_1 = __webpack_require__(/*! ./action/Action */ "./columns/action/Action.js");

Object.defineProperty(exports, "Action", {
  enumerable: true,
  get: function () {
    return Action_1.Action;
  }
});

const BaseAction_1 = __webpack_require__(/*! ./action/BaseAction */ "./columns/action/BaseAction.js");

Object.defineProperty(exports, "BaseAction", {
  enumerable: true,
  get: function () {
    return BaseAction_1.BaseAction;
  }
});

const ButtonAction_1 = __webpack_require__(/*! ./action/ButtonAction */ "./columns/action/ButtonAction.js");

Object.defineProperty(exports, "ButtonAction", {
  enumerable: true,
  get: function () {
    return ButtonAction_1.ButtonAction;
  }
});

const CheckEditor_1 = __webpack_require__(/*! ./action/CheckEditor */ "./columns/action/CheckEditor.js");

Object.defineProperty(exports, "CheckEditor", {
  enumerable: true,
  get: function () {
    return CheckEditor_1.CheckEditor;
  }
});

const Editor_1 = __webpack_require__(/*! ./action/Editor */ "./columns/action/Editor.js");

Object.defineProperty(exports, "Editor", {
  enumerable: true,
  get: function () {
    return Editor_1.Editor;
  }
});

const InlineInputEditor_1 = __webpack_require__(/*! ./action/InlineInputEditor */ "./columns/action/InlineInputEditor.js");

Object.defineProperty(exports, "InlineInputEditor", {
  enumerable: true,
  get: function () {
    return InlineInputEditor_1.InlineInputEditor;
  }
});

const InlineMenuEditor_1 = __webpack_require__(/*! ./action/InlineMenuEditor */ "./columns/action/InlineMenuEditor.js");

Object.defineProperty(exports, "InlineMenuEditor", {
  enumerable: true,
  get: function () {
    return InlineMenuEditor_1.InlineMenuEditor;
  }
});

const RadioEditor_1 = __webpack_require__(/*! ./action/RadioEditor */ "./columns/action/RadioEditor.js");

Object.defineProperty(exports, "RadioEditor", {
  enumerable: true,
  get: function () {
    return RadioEditor_1.RadioEditor;
  }
});

const SmallDialogInputEditor_1 = __webpack_require__(/*! ./action/SmallDialogInputEditor */ "./columns/action/SmallDialogInputEditor.js");

Object.defineProperty(exports, "SmallDialogInputEditor", {
  enumerable: true,
  get: function () {
    return SmallDialogInputEditor_1.SmallDialogInputEditor;
  }
}); // eslint-disable-next-line @typescript-eslint/no-explicit-any

class ImmutableCheckEditor extends CheckEditor_1.CheckEditor {
  get disabled() {
    return this._disabled;
  }

  get readOnly() {
    return this._readOnly;
  }

} // eslint-disable-next-line @typescript-eslint/no-explicit-any


class ImmutableRadioEditor extends RadioEditor_1.RadioEditor {
  get disabled() {
    return this._disabled;
  }

  get readOnly() {
    return this._readOnly;
  }

} // eslint-disable-next-line @typescript-eslint/no-explicit-any


class ImmutableInputEditor extends SmallDialogInputEditor_1.SmallDialogInputEditor {
  get disabled() {
    return this._disabled;
  }

  get readOnly() {
    return this._readOnly;
  }

}

exports.ACTIONS = {
  CHECK: new ImmutableCheckEditor(),
  INPUT: new ImmutableInputEditor(),
  RADIO: new ImmutableRadioEditor()
};

function of(columnAction) {
  if (!columnAction) {
    return undefined;
  } else if (typeof columnAction === "string") {
    const key = columnAction.toUpperCase();
    return exports.ACTIONS[key] || of(null);
  } else {
    return columnAction;
  }
}

exports.of = of;

/***/ }),

/***/ "./columns/action/Action.js":
/*!**********************************!*\
  !*** ./columns/action/Action.js ***!
  \**********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Action = void 0;

const actionBind_1 = __webpack_require__(/*! ./actionBind */ "./columns/action/actionBind.js");

const BaseAction_1 = __webpack_require__(/*! ./BaseAction */ "./columns/action/BaseAction.js");

const utils_1 = __webpack_require__(/*! ../../internal/utils */ "./internal/utils.js");

const action_utils_1 = __webpack_require__(/*! ./action-utils */ "./columns/action/action-utils.js");

class Action extends BaseAction_1.BaseAction {
  constructor(option = {}) {
    super(option);

    this._action = option.action || (() => {});
  }

  get editable() {
    return false;
  }

  get action() {
    return this._action;
  }

  set action(action) {
    this._action = action;
  }

  clone() {
    return new Action(this);
  }

  getState(_grid) {
    return {};
  }

  bindGridEvent(grid, cellId) {
    const state = this.getState(grid);

    const action = cell => {
      if ((0, action_utils_1.isDisabledRecord)(this.disabled, grid, cell.row)) {
        return;
      }

      const record = grid.getRowRecord(cell.row);

      this._action(record, (0, utils_1.extend)(cell, {
        grid
      }));
    };

    return [...(0, actionBind_1.bindCellClickAction)(grid, cellId, {
      action,
      mouseOver: e => {
        if ((0, action_utils_1.isDisabledRecord)(this.disabled, grid, e.row)) {
          return false;
        }

        state.mouseActiveCell = {
          col: e.col,
          row: e.row
        };
        const range = grid.getCellRange(e.col, e.row);
        grid.invalidateCellRange(range);
        return true;
      },
      mouseOut: e => {
        delete state.mouseActiveCell;
        const range = grid.getCellRange(e.col, e.row);
        grid.invalidateCellRange(range);
      }
    }), ...(0, actionBind_1.bindCellKeyAction)(grid, cellId, {
      action
    })];
  }

  onPasteCellRangeBox() {// noop
  }

  onDeleteCellRangeBox() {// noop
  }

}

exports.Action = Action;

/***/ }),

/***/ "./columns/action/BaseAction.js":
/*!**************************************!*\
  !*** ./columns/action/BaseAction.js ***!
  \**************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseAction = void 0;

class BaseAction {
  constructor(option = {}) {
    this._disabled = option.disabled || false;
  }

  get disabled() {
    return this._disabled;
  }

  set disabled(disabled) {
    this._disabled = disabled;
    this.onChangeDisabledInternal();
  }

  onChangeDisabledInternal() {// abstract
  }

}

exports.BaseAction = BaseAction;

/***/ }),

/***/ "./columns/action/BaseInputEditor.js":
/*!*******************************************!*\
  !*** ./columns/action/BaseInputEditor.js ***!
  \*******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseInputEditor = void 0;

const utils_1 = __webpack_require__(/*! ../../internal/utils */ "./internal/utils.js");

const action_utils_1 = __webpack_require__(/*! ./action-utils */ "./columns/action/action-utils.js");

const DG_EVENT_TYPE_1 = __webpack_require__(/*! ../../core/DG_EVENT_TYPE */ "./core/DG_EVENT_TYPE.js");

const Editor_1 = __webpack_require__(/*! ./Editor */ "./columns/action/Editor.js");

const KEY_ENTER = 13;
const KEY_F2 = 113;

class BaseInputEditor extends Editor_1.Editor {
  constructor(option = {}) {
    super(option);
  }

  bindGridEvent(grid, cellId) {
    const open = cell => {
      if ((0, action_utils_1.isReadOnlyRecord)(this.readOnly, grid, cell.row) || (0, action_utils_1.isDisabledRecord)(this.disabled, grid, cell.row)) {
        return false;
      }

      this.onOpenCellInternal(grid, cell);
      return true;
    };

    const input = (cell, value) => {
      if ((0, action_utils_1.isReadOnlyRecord)(this.readOnly, grid, cell.row) || (0, action_utils_1.isDisabledRecord)(this.disabled, grid, cell.row)) {
        return;
      }

      this.onInputCellInternal(grid, cell, value);
    };

    function isTarget(col, row) {
      return grid.getLayoutCellId(col, row) === cellId;
    }

    return [grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.INPUT_CELL, e => {
      if (!isTarget(e.col, e.row)) {
        return;
      }

      input({
        col: e.col,
        row: e.row
      }, e.value);
    }), grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.PASTE_CELL, e => {
      if (e.multi) {
        // ignore multi cell values
        return;
      }

      const selectionRange = grid.selection.range;

      if (!(0, utils_1.cellEquals)(selectionRange.start, selectionRange.end)) {
        // ignore multi paste values
        return;
      }

      if (!isTarget(e.col, e.row)) {
        return;
      }

      utils_1.event.cancel(e.event);
      input({
        col: e.col,
        row: e.row
      }, e.normalizeValue);
    }), grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.DBLCLICK_CELL, cell => {
      if (!isTarget(cell.col, cell.row)) {
        return;
      }

      open({
        col: cell.col,
        row: cell.row
      });
    }), grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.DBLTAP_CELL, e => {
      if (!isTarget(e.col, e.row)) {
        return;
      }

      open({
        col: e.col,
        row: e.row
      });
      utils_1.event.cancel(e.event);
    }), grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.KEYDOWN, e => {
      if (e.keyCode !== KEY_F2 && e.keyCode !== KEY_ENTER) {
        return;
      }

      const sel = grid.selection.select;

      if (!isTarget(sel.col, sel.row)) {
        return;
      }

      if (open({
        col: sel.col,
        row: sel.row
      })) {
        e.stopCellMoving();
      }
    }), grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.SELECTED_CELL, e => {
      this.onChangeSelectCellInternal(grid, {
        col: e.col,
        row: e.row
      }, e.selected);
    }), grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.SCROLL, () => {
      this.onGridScrollInternal(grid);
    }), grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.EDITABLEINPUT_CELL, cell => {
      if (!isTarget(cell.col, cell.row)) {
        return false;
      }

      if ((0, action_utils_1.isReadOnlyRecord)(this.readOnly, grid, cell.row) || (0, action_utils_1.isDisabledRecord)(this.disabled, grid, cell.row)) {
        return false;
      }

      return true;
    }), grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MODIFY_STATUS_EDITABLEINPUT_CELL, cell => {
      if (!isTarget(cell.col, cell.row)) {
        return;
      }

      if ((0, action_utils_1.isReadOnlyRecord)(this.readOnly, grid, cell.row) || (0, action_utils_1.isDisabledRecord)(this.disabled, grid, cell.row)) {
        return;
      }

      const range = grid.getCellRange(cell.col, cell.row);

      if (range.start.col !== range.end.col || range.start.row !== range.end.row) {
        const {
          input
        } = cell;
        const baseRect = grid.getCellRect(cell.col, cell.row);
        const rangeRect = grid.getCellRangeRect(range);
        input.style.top = `${(parseFloat(input.style.top) + (rangeRect.top - baseRect.top)).toFixed()}px`;
        input.style.left = `${(parseFloat(input.style.left) + (rangeRect.left - baseRect.left)).toFixed()}px`;
        input.style.width = `${rangeRect.width.toFixed()}px`;
        input.style.height = `${rangeRect.height.toFixed()}px`;
      }

      this.onSetInputAttrsInternal(grid, {
        col: cell.col,
        row: cell.row
      }, cell.input);
    })];
  }

  onPasteCellRangeBox(grid, cell, value) {
    if ((0, action_utils_1.isReadOnlyRecord)(this.readOnly, grid, cell.row) || (0, action_utils_1.isDisabledRecord)(this.disabled, grid, cell.row)) {
      return;
    }

    grid.doChangeValue(cell.col, cell.row, () => {
      if (this.isSupportMultilineValue()) {
        return value;
      }

      return value.replace(/\r?\n/g, " ");
    });
  }

  onDeleteCellRangeBox(grid, cell) {
    if ((0, action_utils_1.isReadOnlyRecord)(this.readOnly, grid, cell.row) || (0, action_utils_1.isDisabledRecord)(this.disabled, grid, cell.row)) {
      return;
    }

    grid.doChangeValue(cell.col, cell.row, () => "");
  }

  isSupportMultilineValue() {
    return false;
  }

}

exports.BaseInputEditor = BaseInputEditor;

/***/ }),

/***/ "./columns/action/ButtonAction.js":
/*!****************************************!*\
  !*** ./columns/action/ButtonAction.js ***!
  \****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonAction = void 0;

const Action_1 = __webpack_require__(/*! ./Action */ "./columns/action/Action.js");

const symbolManager_1 = __webpack_require__(/*! ../../internal/symbolManager */ "./internal/symbolManager.js");

const utils_1 = __webpack_require__(/*! ../../internal/utils */ "./internal/utils.js");

const BUTTON_COLUMN_STATE_ID = (0, symbolManager_1.getButtonColumnStateId)();

class ButtonAction extends Action_1.Action {
  getState(grid) {
    let state = grid[BUTTON_COLUMN_STATE_ID];

    if (!state) {
      state = {};
      utils_1.obj.setReadonly(grid, BUTTON_COLUMN_STATE_ID, state);
    }

    return state;
  }

}

exports.ButtonAction = ButtonAction;

/***/ }),

/***/ "./columns/action/CheckEditor.js":
/*!***************************************!*\
  !*** ./columns/action/CheckEditor.js ***!
  \***************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckEditor = void 0;

const actionBind_1 = __webpack_require__(/*! ./actionBind */ "./columns/action/actionBind.js");

const utils_1 = __webpack_require__(/*! ../../internal/utils */ "./internal/utils.js");

const action_utils_1 = __webpack_require__(/*! ./action-utils */ "./columns/action/action-utils.js");

const DG_EVENT_TYPE_1 = __webpack_require__(/*! ../../core/DG_EVENT_TYPE */ "./core/DG_EVENT_TYPE.js");

const Editor_1 = __webpack_require__(/*! ./Editor */ "./columns/action/Editor.js");

const animate_1 = __webpack_require__(/*! ../../internal/animate */ "./internal/animate.js");

const symbolManager_1 = __webpack_require__(/*! ../../internal/symbolManager */ "./internal/symbolManager.js");

const CHECK_COLUMN_STATE_ID = (0, symbolManager_1.getCheckColumnStateId)();

class CheckEditor extends Editor_1.Editor {
  clone() {
    return new CheckEditor(this);
  }

  bindGridEvent(grid, cellId) {
    let _state = grid[CHECK_COLUMN_STATE_ID];

    if (!_state) {
      _state = {
        block: {},
        elapsed: {}
      };
      utils_1.obj.setReadonly(grid, CHECK_COLUMN_STATE_ID, _state);
    }

    const state = _state;

    const action = cell => {
      const range = grid.getCellRange(cell.col, cell.row);
      const cellKey = `${range.start.col}:${range.start.row}`;

      if ((0, action_utils_1.isReadOnlyRecord)(this.readOnly, grid, cell.row) || (0, action_utils_1.isDisabledRecord)(this.disabled, grid, cell.row) || state.block[cellKey]) {
        return;
      }

      const ret = grid.doChangeValue(cell.col, cell.row, action_utils_1.toggleValue);

      if (ret) {
        const onChange = () => {
          // checkbox animation
          (0, animate_1.animate)(200, point => {
            if (point === 1) {
              delete state.elapsed[cellKey];
            } else {
              state.elapsed[cellKey] = point;
            }

            grid.invalidateCellRange(range);
          });
        };

        if ((0, utils_1.isPromise)(ret)) {
          state.block[cellKey] = true;
          ret.then(() => {
            delete state.block[cellKey];
            onChange();
          });
        } else {
          onChange();
        }
      }
    };

    function isTarget(col, row) {
      return grid.getLayoutCellId(col, row) === cellId;
    }

    return [...(0, actionBind_1.bindCellClickAction)(grid, cellId, {
      action,
      mouseOver: e => {
        if ((0, action_utils_1.isDisabledRecord)(this.disabled, grid, e.row)) {
          return false;
        }

        state.mouseActiveCell = {
          col: e.col,
          row: e.row
        };
        const range = grid.getCellRange(e.col, e.row);
        grid.invalidateCellRange(range);
        return true;
      },
      mouseOut: e => {
        delete state.mouseActiveCell;
        const range = grid.getCellRange(e.col, e.row);
        grid.invalidateCellRange(range);
      }
    }), ...(0, actionBind_1.bindCellKeyAction)(grid, cellId, {
      action: _e => {
        const selrange = grid.selection.range;
        const {
          col
        } = grid.selection.select;

        for (let {
          row
        } = selrange.start; row <= selrange.end.row; row++) {
          if (!isTarget(col, row)) {
            continue;
          }

          action({
            col,
            row
          });
        }
      }
    }), // paste value
    grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.PASTE_CELL, e => {
      if (e.multi) {
        // ignore multi cell values
        return;
      }

      const selectionRange = grid.selection.range;

      if (!(0, utils_1.cellEquals)(selectionRange.start, selectionRange.end)) {
        // ignore multi paste values
        return;
      }

      if (!isTarget(e.col, e.row)) {
        return;
      }

      utils_1.event.cancel(e.event);
      const pasteValue = e.normalizeValue.trim();
      grid.doGetCellValue(e.col, e.row, value => {
        const newValue = (0, action_utils_1.toggleValue)(value);

        if (`${newValue}`.trim() === pasteValue) {
          action({
            col: e.col,
            row: e.row
          });
        } else if (isRejectValue(value, pasteValue)) {
          const record = grid.getRowRecord(e.row);

          if (!(0, utils_1.isPromise)(record)) {
            grid.fireListeners("rejected_paste_values", {
              detail: [{
                col: e.col,
                row: e.row,
                record,
                define: grid.getColumnDefine(e.col, e.row),
                pasteValue
              }]
            });
          }
        }
      });
    })];
  }

  onPasteCellRangeBox(grid, cell, value, context) {
    if ((0, action_utils_1.isReadOnlyRecord)(this.readOnly, grid, cell.row) || (0, action_utils_1.isDisabledRecord)(this.disabled, grid, cell.row)) {
      return;
    }

    const pasteValue = value.trim();
    grid.doGetCellValue(cell.col, cell.row, value => {
      const newValue = (0, action_utils_1.toggleValue)(value);

      if (`${newValue}`.trim() === pasteValue) {
        grid.doChangeValue(cell.col, cell.row, action_utils_1.toggleValue);
      } else if (isRejectValue(value, pasteValue)) {
        context.reject();
      }
    });
  }

  onDeleteCellRangeBox() {// noop
  }

}

exports.CheckEditor = CheckEditor;

function isRejectValue(oldValue, pasteValue) {
  if ((oldValue != null ? `${oldValue}`.trim() : "") === pasteValue) {
    return false;
  }

  const newValue = (0, action_utils_1.toggleValue)(oldValue);
  return `${newValue}`.trim() !== pasteValue && `${(0, action_utils_1.toggleValue)(newValue)}`.trim() !== pasteValue;
}

/***/ }),

/***/ "./columns/action/Editor.js":
/*!**********************************!*\
  !*** ./columns/action/Editor.js ***!
  \**********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Editor = void 0;

const BaseAction_1 = __webpack_require__(/*! ./BaseAction */ "./columns/action/BaseAction.js");

class Editor extends BaseAction_1.BaseAction {
  constructor(option = {}) {
    super(option);
    this._readOnly = option.readOnly || false;
  }

  get editable() {
    return true;
  }

  get readOnly() {
    return this._readOnly;
  }

  set readOnly(readOnly) {
    this._readOnly = readOnly;
    this.onChangeReadOnlyInternal();
  }

  onChangeReadOnlyInternal() {// abstruct
  }

}

exports.Editor = Editor;

/***/ }),

/***/ "./columns/action/InlineInputEditor.js":
/*!*********************************************!*\
  !*** ./columns/action/InlineInputEditor.js ***!
  \*********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineInputEditor = void 0;

const BaseInputEditor_1 = __webpack_require__(/*! ./BaseInputEditor */ "./columns/action/BaseInputEditor.js");

const InlineInputElement_1 = __webpack_require__(/*! ./internal/InlineInputElement */ "./columns/action/internal/InlineInputElement.js");

const symbolManager_1 = __webpack_require__(/*! ../../internal/symbolManager */ "./internal/symbolManager.js");

const utils_1 = __webpack_require__(/*! ../../internal/utils */ "./internal/utils.js");

const _ = (0, symbolManager_1.getInlineInputEditorStateId)();

function getState(grid) {
  let state = grid[_];

  if (!state) {
    state = {};
    utils_1.obj.setReadonly(grid, _, state);
  }

  return state;
} // eslint-disable-next-line @typescript-eslint/no-explicit-any


let globalElement = null;
let bindGridCount = 0;

function attachInput(grid, cell, editor, value) {
  const state = getState(grid);

  if (!globalElement) {
    globalElement = new InlineInputElement_1.InlineInputElement();
  }

  if (!state.element) {
    state.element = globalElement;
    bindGridCount++;
    grid.addDisposable({
      dispose() {
        bindGridCount--;

        if (!bindGridCount) {
          globalElement === null || globalElement === void 0 ? void 0 : globalElement.dispose();
          globalElement = null;
          state.element = null;
        }
      }

    });
  }

  globalElement.attach(grid, editor, cell.col, cell.row, value);
}

function detachInput(gridFocus) {
  if (globalElement) {
    globalElement.detach(gridFocus);
  }
}

function doChangeValue(_grid) {
  if (globalElement) {
    globalElement.doChangeValue();
  }
}

class InlineInputEditor extends BaseInputEditor_1.BaseInputEditor {
  constructor(option = {}) {
    super(option);
    this._classList = option.classList;
    this._type = option.type;
  }

  get classList() {
    if (!this._classList) {
      return undefined;
    }

    return Array.isArray(this._classList) ? this._classList : [this._classList];
  }

  set classList(classList) {
    this._classList = classList;
  }

  get type() {
    return this._type;
  }

  set type(type) {
    this._type = type;
  }

  clone() {
    return new InlineInputEditor(this);
  }

  onInputCellInternal(grid, cell, inputValue) {
    attachInput(grid, cell, this, inputValue);
  }

  onOpenCellInternal(grid, cell) {
    grid.doGetCellValue(cell.col, cell.row, value => {
      attachInput(grid, cell, this, value);
    });
  }

  onChangeSelectCellInternal(grid, _cell, _selected) {
    doChangeValue(grid);
    detachInput();
  }

  onGridScrollInternal(grid) {
    doChangeValue(grid);
    detachInput(true);
  }

  onChangeDisabledInternal() {
    // cancel input
    detachInput(true);
  }

  onChangeReadOnlyInternal() {
    // cancel input
    detachInput(true);
  }

  onSetInputAttrsInternal(grid, _cell, input) {
    InlineInputElement_1.InlineInputElement.setInputAttrs(this, grid, input);
  }

}

exports.InlineInputEditor = InlineInputEditor;

/***/ }),

/***/ "./columns/action/InlineMenuEditor.js":
/*!********************************************!*\
  !*** ./columns/action/InlineMenuEditor.js ***!
  \********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineMenuEditor = void 0;

const utils_1 = __webpack_require__(/*! ../../internal/utils */ "./internal/utils.js");

const action_utils_1 = __webpack_require__(/*! ./action-utils */ "./columns/action/action-utils.js");

const DG_EVENT_TYPE_1 = __webpack_require__(/*! ../../core/DG_EVENT_TYPE */ "./core/DG_EVENT_TYPE.js");

const Editor_1 = __webpack_require__(/*! ./Editor */ "./columns/action/Editor.js");

const InlineMenuElement_1 = __webpack_require__(/*! ./internal/InlineMenuElement */ "./columns/action/internal/InlineMenuElement.js");

const type_1 = __webpack_require__(/*! ../type */ "./columns/type.js");

const symbolManager_1 = __webpack_require__(/*! ../../internal/symbolManager */ "./internal/symbolManager.js");

const menu_items_1 = __webpack_require__(/*! ../../internal/menu-items */ "./internal/menu-items.js");

const _ = (0, symbolManager_1.getInlineMenuEditorStateId)();

function getState(grid) {
  let state = grid[_];

  if (!state) {
    state = {};
    utils_1.obj.setReadonly(grid, _, state);
  }

  return state;
} // eslint-disable-next-line @typescript-eslint/no-explicit-any


let globalElement = null;
let bindGridCount = 0;

function attachMenu(grid, cell, editor, value, record) {
  const state = getState(grid);

  if (!globalElement) {
    globalElement = new InlineMenuElement_1.InlineMenuElement();
  }

  if (!state.element) {
    state.element = globalElement;
    bindGridCount++;
    grid.addDisposable({
      dispose() {
        bindGridCount--;

        if (!bindGridCount) {
          globalElement === null || globalElement === void 0 ? void 0 : globalElement.dispose();
          globalElement = null;
          state.element = null;
        }
      }

    });
  }

  globalElement.attach(grid, editor, cell.col, cell.row, value, record);
}

function detachMenu(gridFocus) {
  if (globalElement) {
    globalElement.detach(gridFocus);
  }
}

const KEY_ENTER = 13;
const KEY_F2 = 113;

class InlineMenuEditor extends Editor_1.Editor {
  constructor(option = {}) {
    super(option);
    this._classList = option.classList;
    this._options = (0, menu_items_1.normalizeToFn)(option.options);
  }

  dispose() {// noop
  }

  get classList() {
    if (!this._classList) {
      return undefined;
    }

    return Array.isArray(this._classList) ? this._classList : [this._classList];
  }

  set classList(classList) {
    this._classList = classList;
  }

  get options() {
    return this._options;
  }

  set options(options) {
    this._options = (0, menu_items_1.normalizeToFn)(options);
  }

  clone() {
    return new InlineMenuEditor(this);
  }

  onChangeDisabledInternal() {
    // cancel input
    detachMenu(true);
  }

  onChangeReadOnlyInternal() {
    // cancel input
    detachMenu(true);
  }

  bindGridEvent(grid, cellId) {
    const open = cell => {
      if ((0, action_utils_1.isReadOnlyRecord)(this.readOnly, grid, cell.row) || (0, action_utils_1.isDisabledRecord)(this.disabled, grid, cell.row)) {
        return false;
      }

      grid.doGetCellValue(cell.col, cell.row, value => {
        const record = grid.getRowRecord(cell.row);

        if ((0, utils_1.isPromise)(record)) {
          return;
        }

        attachMenu(grid, cell, this, value, record);
      });
      return true;
    };

    function isTarget(col, row) {
      return grid.getLayoutCellId(col, row) === cellId;
    }

    return [grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.CLICK_CELL, cell => {
      if (!isTarget(cell.col, cell.row)) {
        return;
      }

      open({
        col: cell.col,
        row: cell.row
      });
    }), grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.KEYDOWN, e => {
      if (e.keyCode !== KEY_F2 && e.keyCode !== KEY_ENTER) {
        return;
      }

      const sel = grid.selection.select;

      if (!isTarget(sel.col, sel.row)) {
        return;
      }

      if (open({
        col: sel.col,
        row: sel.row
      })) {
        e.stopCellMoving();
      }
    }), grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.SELECTED_CELL, _e => {
      detachMenu();
    }), grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.SCROLL, () => {
      detachMenu(true);
    }), // mouse move
    grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEOVER_CELL, e => {
      if (!isTarget(e.col, e.row)) {
        return;
      }

      if ((0, action_utils_1.isReadOnlyRecord)(this.readOnly, grid, e.row) || (0, action_utils_1.isDisabledRecord)(this.disabled, grid, e.row)) {
        return;
      }

      grid.getElement().style.cursor = "pointer";
    }), grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEMOVE_CELL, e => {
      if (!isTarget(e.col, e.row)) {
        return;
      }

      if ((0, action_utils_1.isReadOnlyRecord)(this.readOnly, grid, e.row) || (0, action_utils_1.isDisabledRecord)(this.disabled, grid, e.row)) {
        return;
      }

      if (!grid.getElement().style.cursor) {
        grid.getElement().style.cursor = "pointer";
      }
    }), grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEOUT_CELL, e => {
      if (!isTarget(e.col, e.row)) {
        return;
      }

      grid.getElement().style.cursor = "";
    }), // paste value
    grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.PASTE_CELL, e => {
      if (e.multi) {
        // ignore multi cell values
        return;
      }

      const selectionRange = grid.selection.range;

      if (!(0, utils_1.cellEquals)(selectionRange.start, selectionRange.end)) {
        // ignore multi paste values
        return;
      }

      if (!isTarget(e.col, e.row)) {
        return;
      }

      if ((0, action_utils_1.isReadOnlyRecord)(this.readOnly, grid, e.row) || (0, action_utils_1.isDisabledRecord)(this.disabled, grid, e.row)) {
        return;
      }

      const record = grid.getRowRecord(e.row);

      if ((0, utils_1.isPromise)(record)) {
        return;
      }

      const pasteOpt = this._pasteDataToOptionValue(e.normalizeValue, grid, e, record);

      if (pasteOpt) {
        utils_1.event.cancel(e.event);
        (0, utils_1.then)(grid.doChangeValue(e.col, e.row, () => pasteOpt.value), () => {
          const range = grid.getCellRange(e.col, e.row);
          grid.invalidateCellRange(range);
        });
      } else {
        grid.fireListeners("rejected_paste_values", {
          detail: [{
            col: e.col,
            row: e.row,
            record,
            define: grid.getColumnDefine(e.col, e.row),
            pasteValue: e.normalizeValue
          }]
        });
      }
    })];
  }

  onPasteCellRangeBox(grid, cell, value, context) {
    if ((0, action_utils_1.isReadOnlyRecord)(this.readOnly, grid, cell.row) || (0, action_utils_1.isDisabledRecord)(this.disabled, grid, cell.row)) {
      return;
    }

    const record = grid.getRowRecord(cell.row);

    if ((0, utils_1.isPromise)(record)) {
      return;
    }

    const pasteOpt = this._pasteDataToOptionValue(value, grid, cell, record);

    if (pasteOpt) {
      grid.doChangeValue(cell.col, cell.row, () => pasteOpt.value);
    } else {
      // unknown
      context.reject();
    }
  }

  onDeleteCellRangeBox(grid, cell) {
    if ((0, action_utils_1.isReadOnlyRecord)(this.readOnly, grid, cell.row) || (0, action_utils_1.isDisabledRecord)(this.disabled, grid, cell.row)) {
      return;
    }

    const record = grid.getRowRecord(cell.row);

    if ((0, utils_1.isPromise)(record)) {
      return;
    }

    const pasteOpt = this._pasteDataToOptionValue("", grid, cell, record);

    if (pasteOpt) {
      grid.doChangeValue(cell.col, cell.row, () => pasteOpt.value);
    }
  }

  _pasteDataToOptionValue(value, grid, cell, record) {
    const options = this._options(record);

    const pasteOpt = _textToOptionValue(value, options);

    if (pasteOpt) {
      return pasteOpt;
    }

    const columnType = grid.getColumnType(cell.col, cell.row);

    if (hasOptions(columnType)) {
      // Find with caption.
      const pasteValue = normalizePasteValueStr(value);
      const captionOpt = utils_1.array.find(columnType.options, opt => normalizePasteValueStr(opt.label) === pasteValue);

      if (captionOpt) {
        return _textToOptionValue(captionOpt.value, options);
      }
    }

    return undefined;
  }

}

exports.InlineMenuEditor = InlineMenuEditor;

function _textToOptionValue(value, options) {
  const pasteValue = normalizePasteValueStr(value);
  const pasteOpt = utils_1.array.find(options, opt => normalizePasteValueStr(opt.value) === pasteValue);

  if (pasteOpt) {
    return pasteOpt;
  }

  return undefined;
} // eslint-disable-next-line @typescript-eslint/no-explicit-any


function normalizePasteValueStr(value) {
  if (value == null) {
    return "";
  }

  return `${value}`.trim();
} // eslint-disable-next-line @typescript-eslint/no-explicit-any


function hasOptions(columnType) {
  if (columnType instanceof type_1.MenuColumn) {
    return true;
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any


  if (Array.isArray(columnType.options)) {
    return true;
  }

  return false;
}

/***/ }),

/***/ "./columns/action/RadioEditor.js":
/*!***************************************!*\
  !*** ./columns/action/RadioEditor.js ***!
  \***************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioEditor = void 0;

const actionBind_1 = __webpack_require__(/*! ./actionBind */ "./columns/action/actionBind.js");

const utils_1 = __webpack_require__(/*! ../../internal/utils */ "./internal/utils.js");

const action_utils_1 = __webpack_require__(/*! ./action-utils */ "./columns/action/action-utils.js");

const DG_EVENT_TYPE_1 = __webpack_require__(/*! ../../core/DG_EVENT_TYPE */ "./core/DG_EVENT_TYPE.js");

const Editor_1 = __webpack_require__(/*! ./Editor */ "./columns/action/Editor.js");

const animate_1 = __webpack_require__(/*! ../../internal/animate */ "./internal/animate.js");

const symbolManager_1 = __webpack_require__(/*! ../../internal/symbolManager */ "./internal/symbolManager.js");

const utils_2 = __webpack_require__(/*! ../utils */ "./columns/utils/index.js");

const RADIO_COLUMN_STATE_ID = (0, symbolManager_1.getRadioColumnStateId)();

class RadioEditor extends Editor_1.Editor {
  constructor(option = {}) {
    super(option);
    this._group = option.group;
    this._checkAction = option.checkAction;
  }

  clone() {
    return new RadioEditor(this);
  }
  /** @deprecated Use checkAction instead. */


  get group() {
    return this._group;
  }
  /** @deprecated Use checkAction instead. */


  set group(group) {
    this._group = group;
  }

  get checkAction() {
    return this._checkAction;
  }

  set checkAction(checkAction) {
    this._checkAction = checkAction;
  }

  bindGridEvent(grid, cellId) {
    let _state = grid[RADIO_COLUMN_STATE_ID];

    if (!_state) {
      _state = {
        block: {},
        elapsed: {}
      };
      utils_1.obj.setReadonly(grid, RADIO_COLUMN_STATE_ID, _state);
    }

    const state = _state;

    const action = cell => {
      this._action(grid, cell);
    };

    function isTarget(col, row) {
      return grid.getLayoutCellId(col, row) === cellId;
    }

    return [...(0, actionBind_1.bindCellClickAction)(grid, cellId, {
      action,
      mouseOver: e => {
        if ((0, action_utils_1.isDisabledRecord)(this.disabled, grid, e.row)) {
          return false;
        }

        state.mouseActiveCell = {
          col: e.col,
          row: e.row
        };
        const range = grid.getCellRange(e.col, e.row);
        grid.invalidateCellRange(range);
        return true;
      },
      mouseOut: e => {
        delete state.mouseActiveCell;
        const range = grid.getCellRange(e.col, e.row);
        grid.invalidateCellRange(range);
      }
    }), ...(0, actionBind_1.bindCellKeyAction)(grid, cellId, {
      action
    }), // paste value
    grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.PASTE_CELL, e => {
      if (e.multi) {
        // ignore multi cell values
        return;
      }

      const selectionRange = grid.selection.range;

      if (!(0, utils_1.cellEquals)(selectionRange.start, selectionRange.end)) {
        // ignore multi paste values
        return;
      }

      if (!isTarget(e.col, e.row)) {
        return;
      }

      utils_1.event.cancel(e.event);
      const pasteValue = e.normalizeValue.trim();

      if (isRejectValue(pasteValue)) {
        // Not a boolean
        const record = grid.getRowRecord(e.row);

        if (!(0, utils_1.isPromise)(record)) {
          grid.fireListeners("rejected_paste_values", {
            detail: [{
              col: e.col,
              row: e.row,
              record,
              define: grid.getColumnDefine(e.col, e.row),
              pasteValue
            }]
          });
        }

        return;
      }

      if (!(0, utils_2.toBoolean)(pasteValue)) {
        return;
      }

      action({
        col: e.col,
        row: e.row
      });
    })];
  }

  onPasteCellRangeBox(grid, cell, value, context) {
    if ((0, action_utils_1.isReadOnlyRecord)(this.readOnly, grid, cell.row) || (0, action_utils_1.isDisabledRecord)(this.disabled, grid, cell.row)) {
      return;
    }

    const pasteValue = value.trim();

    if (isRejectValue(pasteValue)) {
      // Not a boolean
      context.reject();
      return;
    }

    if (!(0, utils_2.toBoolean)(pasteValue)) {
      return;
    }

    this._action(grid, {
      col: cell.col,
      row: cell.row
    });
  }

  onDeleteCellRangeBox() {// noop
  }

  _action(grid, cell) {
    const state = grid[RADIO_COLUMN_STATE_ID];
    const range = grid.getCellRange(cell.col, cell.row);
    const cellKey = `${range.start.col}:${range.start.row}`;

    if ((0, action_utils_1.isReadOnlyRecord)(this.readOnly, grid, cell.row) || (0, action_utils_1.isDisabledRecord)(this.disabled, grid, cell.row) || state.block[cellKey]) {
      return;
    }

    grid.doGetCellValue(cell.col, cell.row, value => {
      if ((0, utils_2.toBoolean)(value)) {
        return;
      }

      if (this._checkAction) {
        // User behavior
        const record = grid.getRowRecord(cell.row);

        this._checkAction(record, (0, utils_1.extend)(cell, {
          grid
        }));

        return;
      }

      if (this._group) {
        // Backward compatibility
        const state = grid[RADIO_COLUMN_STATE_ID];

        const targets = this._group({
          grid,
          col: cell.col,
          row: cell.row
        });

        targets.forEach(({
          col,
          row
        }) => {
          const range = grid.getCellRange(col, row);
          const cellKey = `${range.start.col}:${range.start.row}`;

          if ((0, action_utils_1.isReadOnlyRecord)(this.readOnly, grid, cell.row) || (0, action_utils_1.isDisabledRecord)(this.disabled, grid, cell.row) || state.block[cellKey]) {
            return;
          }

          actionCell(grid, col, row, col === cell.col && row === cell.row);
        });
        return;
      } // default behavior


      const field = grid.getField(cell.col, cell.row);
      const recordStartRow = grid.getRecordStartRowByRecordIndex(grid.getRecordIndexByRow(cell.row));
      /** Original DataSource */

      const {
        dataSource
      } = grid.dataSource;
      const girdRecords = getAllRecordsFromGrid(grid);

      for (let index = 0; index < dataSource.length; index++) {
        const record = dataSource.get(index);
        const showData = girdRecords.find(d => d.record === record);

        if (showData) {
          actionCell(grid, cell.col, showData.row, showData.row === recordStartRow);
        } else {
          // Hidden record
          (0, utils_1.then)(dataSource.getField(index, field), value => {
            if (!(0, utils_2.toBoolean)(value)) {
              return;
            }

            dataSource.setField(index, field, (0, action_utils_1.toggleValue)(value));
          });
        }
      }
    });
  }

}

exports.RadioEditor = RadioEditor;

function getAllRecordsFromGrid(grid) {
  const result = [];
  const {
    rowCount,
    recordRowCount
  } = grid;

  for (let targetRow = grid.frozenRowCount; targetRow < rowCount; targetRow += recordRowCount) {
    const record = grid.getRowRecord(targetRow);
    result.push({
      row: targetRow,
      record
    });
  }

  return result;
}

function actionCell(grid, col, row, flag) {
  grid.doGetCellValue(col, row, value => {
    if ((0, utils_2.toBoolean)(value) === flag) {
      return;
    }

    const state = grid[RADIO_COLUMN_STATE_ID];
    const range = grid.getCellRange(col, row);
    const cellKey = `${range.start.col}:${range.start.row}`;
    const ret = grid.doChangeValue(col, row, action_utils_1.toggleValue);

    if (ret) {
      const onChange = () => {
        // checkbox animation
        (0, animate_1.animate)(200, point => {
          if (point === 1) {
            delete state.elapsed[cellKey];
          } else {
            state.elapsed[cellKey] = point;
          }

          grid.invalidateCellRange(range);
        });
      };

      if ((0, utils_1.isPromise)(ret)) {
        state.block[cellKey] = true;
        ret.then(() => {
          delete state.block[cellKey];
          onChange();
        });
      } else {
        onChange();
      }
    }
  });
}

function isRejectValue(pasteValue) {
  return (0, action_utils_1.toggleValue)((0, action_utils_1.toggleValue)(pasteValue)) !== pasteValue;
}

/***/ }),

/***/ "./columns/action/SmallDialogInputEditor.js":
/*!**************************************************!*\
  !*** ./columns/action/SmallDialogInputEditor.js ***!
  \**************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SmallDialogInputEditor = void 0;

const symbolManager_1 = __webpack_require__(/*! ../../internal/symbolManager */ "./internal/symbolManager.js");

const utils_1 = __webpack_require__(/*! ../../internal/utils */ "./internal/utils.js");

const BaseInputEditor_1 = __webpack_require__(/*! ./BaseInputEditor */ "./columns/action/BaseInputEditor.js");

const action_utils_1 = __webpack_require__(/*! ./action-utils */ "./columns/action/action-utils.js");

const SmallDialogInputElement_1 = __webpack_require__(/*! ./internal/SmallDialogInputElement */ "./columns/action/internal/SmallDialogInputElement.js");

const _ = (0, symbolManager_1.getSmallDialogInputEditorStateId)();

function getState(grid) {
  let state = grid[_];

  if (!state) {
    state = {};
    utils_1.obj.setReadonly(grid, _, state);
  }

  return state;
} // eslint-disable-next-line @typescript-eslint/no-explicit-any


let globalElement = null;
let bindGridCount = 0;

function attachInput(grid, cell, editor, value) {
  const state = getState(grid);

  if (!globalElement) {
    globalElement = new SmallDialogInputElement_1.SmallDialogInputElement();
  }

  if (!state.element) {
    state.element = globalElement;
    bindGridCount++;
    grid.addDisposable({
      dispose() {
        bindGridCount--;

        if (!bindGridCount) {
          globalElement === null || globalElement === void 0 ? void 0 : globalElement.dispose();
          globalElement = null;
          state.element = null;
        }
      }

    });
  }

  globalElement.attach(grid, editor, cell.col, cell.row, value);
}

function detachInput(gridFocus) {
  if (globalElement) {
    globalElement.detach(gridFocus);
  }
}

class SmallDialogInputEditor extends BaseInputEditor_1.BaseInputEditor {
  constructor(option = {}) {
    super(option);
    this._helperText = option.helperText;
    this._inputValidator = option.inputValidator;
    this._validator = option.validator;
    this._classList = option.classList;
    this._type = option.type;
  }

  dispose() {//noop
  }

  get classList() {
    if (!this._classList) {
      return undefined;
    }

    return Array.isArray(this._classList) ? this._classList : [this._classList];
  }

  set classList(classList) {
    this._classList = classList;
  }

  get type() {
    return this._type;
  }

  set type(type) {
    this._type = type;
  }

  get helperText() {
    return this._helperText;
  }

  get inputValidator() {
    return this._inputValidator;
  }

  get validator() {
    return this._validator;
  }

  clone() {
    return new SmallDialogInputEditor(this);
  }

  onInputCellInternal(grid, cell, inputValue) {
    attachInput(grid, cell, this, inputValue);
  }

  onOpenCellInternal(grid, cell) {
    grid.doGetCellValue(cell.col, cell.row, value => {
      attachInput(grid, cell, this, value);
    });
  }

  onChangeSelectCellInternal(_grid, _cell, _selected) {
    // cancel input
    detachInput();
  }

  onGridScrollInternal(_grid) {
    // cancel input
    detachInput(true);
  }

  onChangeDisabledInternal() {
    // cancel input
    detachInput(true);
  }

  onChangeReadOnlyInternal() {
    // cancel input
    detachInput(true);
  }

  onSetInputAttrsInternal(grid, _cell, input) {
    SmallDialogInputElement_1.SmallDialogInputElement.setInputAttrs(this, grid, input);
  }

  bindGridEvent(grid, cellId) {
    const open = cell => {
      if ((0, action_utils_1.isReadOnlyRecord)(this.readOnly, grid, cell.row) || (0, action_utils_1.isDisabledRecord)(this.disabled, grid, cell.row)) {
        return false;
      }

      this.onOpenCellInternal(grid, cell);
      return true;
    };

    function isTarget(col, row) {
      return grid.getLayoutCellId(col, row) === cellId;
    }

    return [...super.bindGridEvent(grid, cellId), grid.listen('click_cell', cell => {
      if (!isTarget(cell.col, cell.row)) {
        return;
      }

      open({
        col: cell.col,
        row: cell.row
      });
    })];
  }

}

exports.SmallDialogInputEditor = SmallDialogInputEditor;

/***/ }),

/***/ "./columns/action/action-utils.js":
/*!****************************************!*\
  !*** ./columns/action/action-utils.js ***!
  \****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleValue = exports.isReadOnlyRecord = exports.isDisabledRecord = void 0;

const utils_1 = __webpack_require__(/*! ../../internal/utils */ "./internal/utils.js");

function isDisabledRecord(option, grid, row) {
  if (grid.disabled) {
    return true;
  }

  return getBooleanOptionOfRecord(option, grid, row);
}

exports.isDisabledRecord = isDisabledRecord;

function isReadOnlyRecord(option, grid, row) {
  if (grid.readOnly) {
    return true;
  }

  return getBooleanOptionOfRecord(option, grid, row);
}

exports.isReadOnlyRecord = isReadOnlyRecord;

function toggleValue(val) {
  if (typeof val === "number") {
    if (val === 0) {
      return 1;
    } else {
      return 0;
    }
  } else if (typeof val === "string") {
    if (val === "false") {
      return "true";
    } else if (val === "off") {
      return "on";
    } else if (/^0+$/.exec(val)) {
      return val.replace(/^(0*)0$/, "$11");
    } else if (val === "true") {
      return "false";
    } else if (val === "on") {
      return "off";
    } else if (/^0*1$/.exec(val)) {
      return val.replace(/^(0*)1$/, "$10");
    }
  }

  return !val;
}

exports.toggleValue = toggleValue;

function getBooleanOptionOfRecord(option, grid, row) {
  if (typeof option === "function") {
    const record = grid.getRowRecord(row);

    if ((0, utils_1.isPromise)(record)) {
      return true;
    }

    return !!option(record);
  }

  return !!option;
}

/***/ }),

/***/ "./columns/action/actionBind.js":
/*!**************************************!*\
  !*** ./columns/action/actionBind.js ***!
  \**************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bindCellKeyAction = exports.bindCellClickAction = void 0;

const utils_1 = __webpack_require__(/*! ../../internal/utils */ "./internal/utils.js");

const DG_EVENT_TYPE_1 = __webpack_require__(/*! ../../core/DG_EVENT_TYPE */ "./core/DG_EVENT_TYPE.js");

const KEY_ENTER = 13;
const KEY_SPACE = 32;

function bindCellClickAction(grid, cellId, {
  action,
  mouseOver,
  mouseOut
}) {
  function isTarget(col, row) {
    return grid.getLayoutCellId(col, row) === cellId;
  }

  return [// click
  grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.CLICK_CELL, e => {
    if (!isTarget(e.col, e.row)) {
      return;
    }

    if ((0, utils_1.isPromise)(grid.getRowRecord(e.row))) {
      return;
    }

    action({
      col: e.col,
      row: e.row
    });
  }), // mouse move
  grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEOVER_CELL, e => {
    if (!isTarget(e.col, e.row)) {
      return;
    }

    if ((0, utils_1.isPromise)(grid.getRowRecord(e.row))) {
      return;
    }

    if (mouseOver) {
      if (!mouseOver({
        col: e.col,
        row: e.row
      })) {
        return;
      }
    }

    grid.getElement().style.cursor = "pointer";
  }), grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEOUT_CELL, e => {
    if (!isTarget(e.col, e.row)) {
      return;
    }

    if (mouseOut) {
      mouseOut({
        col: e.col,
        row: e.row
      });
    }

    grid.getElement().style.cursor = "";
  })];
}

exports.bindCellClickAction = bindCellClickAction;

function bindCellKeyAction(grid, cellId, {
  action,
  acceptKeys = []
}) {
  function isTarget(col, row) {
    return grid.getLayoutCellId(col, row) === cellId;
  }

  acceptKeys = [...acceptKeys, KEY_ENTER, KEY_SPACE];
  return [// enter key down
  grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.KEYDOWN, e => {
    var _a;

    if (acceptKeys.indexOf(e.keyCode) === -1) {
      return;
    }

    if (((_a = grid.keyboardOptions) === null || _a === void 0 ? void 0 : _a.moveCellOnEnter) && e.keyCode === KEY_ENTER) {
      // When moving with the enter key, no action is taken with the enter key.
      return;
    }

    const sel = grid.selection.select;

    if (!isTarget(sel.col, sel.row)) {
      return;
    }

    if ((0, utils_1.isPromise)(grid.getRowRecord(sel.row))) {
      return;
    }

    action({
      col: sel.col,
      row: sel.row
    });
    utils_1.event.cancel(e.event);
  })];
}

exports.bindCellKeyAction = bindCellKeyAction;

/***/ }),

/***/ "./columns/action/internal/InlineInputElement.js":
/*!*******************************************************!*\
  !*** ./columns/action/internal/InlineInputElement.js ***!
  \*******************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineInputElement = void 0;

const EventHandler_1 = __webpack_require__(/*! ../../../internal/EventHandler */ "./internal/EventHandler.js");

const dom_1 = __webpack_require__(/*! ../../../internal/dom */ "./internal/dom.js");

const utils_1 = __webpack_require__(/*! ../../../internal/utils */ "./internal/utils.js");

const input_value_handler_1 = __webpack_require__(/*! ./input-value-handler */ "./columns/action/internal/input-value-handler.js");

const KEY_TAB = 9;
const KEY_ENTER = 13;
const CLASSNAME = "cheetah-grid__inline-input";

function createInputElement() {
  __webpack_require__(/*! @/columns/action/internal/InlineInputElement.css */ "../src/js/columns/action/internal/InlineInputElement.css");

  return (0, dom_1.createElement)("input", {
    classList: CLASSNAME
  });
}

function setInputAttrs(editor, _grid, input) {
  const {
    classList,
    type
  } = editor;

  if (classList) {
    input.classList.add(...classList);
  }

  input.type = type || "";
}

class InlineInputElement {
  static setInputAttrs(editor, grid, input) {
    setInputAttrs(editor, grid, input);
  }

  constructor() {
    this._handler = new EventHandler_1.EventHandler();
    this._input = createInputElement();

    this._bindInputEvents();
  }

  dispose() {
    var _a;

    const input = this._input;
    this.detach();

    this._handler.dispose(); // @ts-expect-error -- ignore


    delete this._input;
    this._beforePropEditor = null;
    (_a = input.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(input);
  }

  attach(grid, editor, col, row, value) {
    const input = this._input;
    const handler = this._handler;

    if (this._beforePropEditor) {
      const {
        classList
      } = this._beforePropEditor;

      if (classList) {
        input.classList.remove(...classList);
      }
    }

    input.style.font = grid.font || "16px sans-serif";
    const {
      element,
      rect
    } = grid.getAttachCellsArea(grid.getCellRange(col, row));
    input.style.top = `${rect.top.toFixed()}px`;
    input.style.left = `${rect.left.toFixed()}px`;
    input.style.width = `${rect.width.toFixed()}px`;
    input.style.height = `${rect.height.toFixed()}px`;
    element.appendChild(input);
    setInputAttrs(editor, grid, input);
    (0, input_value_handler_1.setInputValue)(input, value);
    this._activeData = {
      grid,
      col,
      row,
      editor
    };
    this._beforePropEditor = editor;

    const focus = () => {
      input.focus();
      const end = input.value.length;

      try {
        if (typeof input.selectionStart !== "undefined") {
          input.selectionStart = end;
          input.selectionEnd = end;
          return;
        }
      } catch (e) {//ignore
      } // eslint-disable-next-line @typescript-eslint/no-explicit-any


      if (document.selection) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const range = input.createTextRange();
        range.collapse();
        range.moveEnd("character", end);
        range.moveStart("character", end);
        range.select();
      }
    };

    handler.tryWithOffEvents(input, "blur", () => {
      focus();
    });
    this._attaching = true;
    setTimeout(() => {
      delete this._attaching;
    });
  }

  detach(gridFocus) {
    if (this._isActive()) {
      const {
        grid,
        col,
        row
      } = this._activeData;
      const input = this._input;

      this._handler.tryWithOffEvents(input, "blur", () => {
        var _a;

        (_a = input.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(input);
      });

      const range = grid.getCellRange(col, row);
      grid.invalidateCellRange(range);

      if (gridFocus) {
        grid.focus();
      }
    }

    this._activeData = null;
  }

  doChangeValue() {
    if (!this._isActive()) {
      return;
    }

    const input = this._input;
    const {
      value
    } = input;
    const {
      grid,
      col,
      row
    } = this._activeData;
    grid.doChangeValue(col, row, () => value);
  }

  _isActive() {
    const input = this._input;

    if (!input || !input.parentElement) {
      return false;
    }

    if (!this._activeData) {
      return false;
    }

    return true;
  }

  _bindInputEvents() {
    const handler = this._handler;
    const input = this._input;

    const stopPropagationOnly = e => e.stopPropagation(); // gridにイベントが伝播しないように


    handler.on(input, "click", stopPropagationOnly);
    handler.on(input, "mousedown", stopPropagationOnly);
    handler.on(input, "touchstart", stopPropagationOnly);
    handler.on(input, "dblclick", stopPropagationOnly);
    handler.on(input, "compositionstart", _e => {
      input.classList.add("composition");
    });
    handler.on(input, "compositionend", _e => {
      input.classList.remove("composition");
    });
    handler.on(input, "keydown", e => {
      if (input.classList.contains("composition")) {
        return;
      }

      const keyCode = utils_1.event.getKeyCode(e);

      if (keyCode === KEY_ENTER) {
        this._onKeydownEnter(e);
      } else if (keyCode === KEY_TAB) {
        this._onKeydownTab(e);
      }
    });
    handler.on(input, "blur", _e => {
      this.doChangeValue();
      this.detach();
    });
  }

  _onKeydownEnter(e) {
    var _a;

    if (!this._isActive() || this._attaching) {
      return;
    }

    const {
      grid
    } = this._activeData;
    this.doChangeValue();
    this.detach(true);
    utils_1.event.cancel(e);

    if ((_a = grid.keyboardOptions) === null || _a === void 0 ? void 0 : _a.moveCellOnEnter) {
      grid.onKeyDownMove(e);
    }
  }

  _onKeydownTab(e) {
    var _a;

    if (!this._isActive()) {
      return;
    }

    const {
      grid
    } = this._activeData;

    if (!((_a = grid.keyboardOptions) === null || _a === void 0 ? void 0 : _a.moveCellOnTab)) {
      return;
    }

    this.doChangeValue();
    this.detach(true);
    grid.onKeyDownMove(e);
  }

}

exports.InlineInputElement = InlineInputElement;

/***/ }),

/***/ "./columns/action/internal/InlineMenuElement.js":
/*!******************************************************!*\
  !*** ./columns/action/internal/InlineMenuElement.js ***!
  \******************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineMenuElement = void 0;

const dom_1 = __webpack_require__(/*! ../../../internal/dom */ "./internal/dom.js");

const EventHandler_1 = __webpack_require__(/*! ../../../internal/EventHandler */ "./internal/EventHandler.js");

const utils_1 = __webpack_require__(/*! ../../../internal/utils */ "./internal/utils.js");

const KEY_TAB = 9;
const KEY_ENTER = 13;
const KEY_UP = 38;
const KEY_DOWN = 40;
const KEY_ESC = 27;
const CLASSNAME = "cheetah-grid__inline-menu";
const ITEM_CLASSNAME = `${CLASSNAME}__menu-item`;
const HIDDEN_CLASSNAME = `${CLASSNAME}--hidden`;
const SHOWN_CLASSNAME = `${CLASSNAME}--shown`;
const EMPTY_ITEM_CLASSNAME = `${ITEM_CLASSNAME}--empty`;

function findItemParents(target) {
  let el = target;

  while (el && !el.classList.contains(ITEM_CLASSNAME)) {
    el = el.parentElement;

    if (!el || el.classList.contains(CLASSNAME)) {
      return null;
    }
  }

  return el;
}

function createMenuElement() {
  __webpack_require__(/*! @/columns/action/internal/InlineMenuElement.css */ "../src/js/columns/action/internal/InlineMenuElement.css");

  return (0, dom_1.createElement)("ul", {
    classList: CLASSNAME
  });
}

function attachElement(element, rect, menu) {
  menu.style.top = `${rect.top.toFixed()}px`;
  menu.style.left = `${rect.left.toFixed()}px`;
  menu.style.width = `${rect.width.toFixed()}px`;
  menu.style.lineHeight = `${rect.height.toFixed()}px`;
  element.appendChild(menu);
}

function optionToLi({
  classList,
  label,
  value,
  html
}, index) {
  const item = (0, dom_1.createElement)("li", {
    classList: ITEM_CLASSNAME
  });
  item.tabIndex = 0;
  item.dataset.valueindex = `${index}`;

  if (classList) {
    item.classList.add(...(Array.isArray(classList) ? classList : [classList]));
  }

  if (label) {
    const span = (0, dom_1.createElement)("span", {
      text: label
    });
    item.appendChild(span);
  } else if (html) {
    (0, dom_1.appendHtml)(item, html);
  }

  if (value === "" || value == null) {
    item.classList.add(EMPTY_ITEM_CLASSNAME);
  }

  return item;
}

function openMenu(grid, editor, col, row, value, options, menu) {
  const {
    classList
  } = editor;
  menu.classList.remove(SHOWN_CLASSNAME);
  menu.classList.add(HIDDEN_CLASSNAME);
  (0, dom_1.empty)(menu);
  menu.style.font = grid.font || "16px sans-serif";
  let emptyItemEl = null;
  let valueItemEl = null;
  options.forEach((option, i) => {
    const item = optionToLi(option, i);
    menu.appendChild(item);

    if (option.value === value) {
      valueItemEl = item;
      item.dataset.select = "select";
    }

    if (item.classList.contains(EMPTY_ITEM_CLASSNAME)) {
      emptyItemEl = item;
    }
  });
  const focusEl = valueItemEl || emptyItemEl || menu.children[0];

  if (classList) {
    menu.classList.add(...classList);
  }

  const children = Array.prototype.slice.call(menu.children, 0);
  const focusIndex = children.indexOf(focusEl);
  const {
    element,
    rect
  } = grid.getAttachCellsArea(grid.getCellRange(col, row)); // Cover the right line

  rect.width++; // append for calculation

  attachElement(element, rect, menu); // Make the selection item at the middle

  let offset = 0;
  let allHeight = 0;

  for (let i = 0; i < children.length; i++) {
    const {
      offsetHeight
    } = children[i];

    if (i < focusIndex) {
      offset += offsetHeight;
    }

    allHeight += offsetHeight;
  }

  rect.offsetTop(-offset);
  menu.style.transformOrigin = `center ${offset + Math.ceil(children[focusIndex].offsetHeight / 2)}px 0px`;
  attachElement(element, rect, menu); // Control not to overflow the screen range

  const menuClientRect = menu.getBoundingClientRect();
  const scaleDiff = (allHeight - menuClientRect.height) / 2;
  const orgMenuTop = menuClientRect.top - scaleDiff;
  let menuTop = orgMenuTop;
  const menuBottom = menuTop + allHeight;
  const winBottom = window.innerHeight;
  const winMargin = 20;

  if (menuBottom > winBottom - winMargin) {
    const diff = menuBottom - winBottom + winMargin;
    menuTop -= diff;
  }

  if (menuTop < 0
  /*winTop*/
  + winMargin) {
    menuTop = winMargin;
  }

  if (menuTop !== orgMenuTop) {
    rect.offsetTop(-(orgMenuTop - menuTop)); // re update

    attachElement(element, rect, menu);
  }

  if (focusEl) {
    focusEl.focus();
  }

  menu.classList.remove(HIDDEN_CLASSNAME);
  menu.classList.add(SHOWN_CLASSNAME);
}

function closeMenu(_grid, _col, _row, menu) {
  menu.classList.remove(SHOWN_CLASSNAME);
  menu.classList.add(HIDDEN_CLASSNAME);
  (0, dom_1.disableFocus)(menu);
}

class InlineMenuElement {
  constructor() {
    const handler = this._handler = new EventHandler_1.EventHandler();
    this._menu = createMenuElement();

    this._bindMenuEvents();

    let bodyClickListenerId;

    const deregisterBodyClickListener = this._deregisterBodyClickListener = () => handler.off(bodyClickListenerId);

    this._registerBodyClickListener = () => {
      deregisterBodyClickListener();
      bodyClickListenerId = handler.on(document.body, "click", this._onBodyClick.bind(this), {
        capture: true
      });
    };
  }

  dispose() {
    var _a;

    const menu = this._menu;
    this.detach();

    this._handler.dispose(); // @ts-expect-error -- ignore


    delete this._menu;
    this._beforePropEditor = null;
    (_a = menu.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(menu);
  }

  attach(grid, editor, col, row, value, record) {
    const menu = this._menu;

    if (this._beforePropEditor) {
      const {
        classList
      } = this._beforePropEditor;

      if (classList) {
        menu.classList.remove(...classList);
      }
    }

    const options = editor.options(record);
    openMenu(grid, editor, col, row, value, options, menu);
    this._activeData = {
      grid,
      col,
      row,
      editor,
      options
    };
    this._beforePropEditor = editor;

    this._registerBodyClickListener();
  }

  detach(gridFocus) {
    if (this._isActive()) {
      const {
        grid,
        col,
        row
      } = this._activeData;
      const menu = this._menu;
      closeMenu(grid, col, row, menu);
      const range = grid.getCellRange(col, row);
      grid.invalidateCellRange(range);

      if (gridFocus) {
        grid.focus();
      }
    }

    this._activeData = null;

    this._deregisterBodyClickListener();
  }

  _doChangeValue(valueindex) {
    if (!this._isActive()) {
      return;
    }

    const {
      grid,
      col,
      row,
      options
    } = this._activeData;
    const option = options[Number(valueindex)];

    if (option) {
      const {
        value
      } = option;
      grid.doChangeValue(col, row, () => value);
    }
  }

  _isActive() {
    const menu = this._menu;

    if (!menu || !menu.parentElement) {
      return false;
    }

    if (!this._activeData) {
      return false;
    }

    return true;
  }

  _bindMenuEvents() {
    const handler = this._handler;
    const menu = this._menu;

    const stopPropagationOnly = e => e.stopPropagation(); // gridにイベントが伝播しないように


    handler.on(menu, "mousedown", stopPropagationOnly);
    handler.on(menu, "touchstart", stopPropagationOnly);
    handler.on(menu, "dblclick", stopPropagationOnly);
    handler.on(menu, "click", e => {
      e.stopPropagation();
      const item = findItemParents(e.target);

      if (!item) {
        return;
      }

      const {
        valueindex
      } = item.dataset;

      this._doChangeValue(valueindex || "");

      this.detach(true);
    });
    handler.on(menu, "keydown", e => {
      const item = findItemParents(e.target);

      if (!item) {
        return;
      }

      const keyCode = utils_1.event.getKeyCode(e);

      if (keyCode === KEY_ENTER) {
        this._onKeydownEnter(menu, item, e);
      } else if (keyCode === KEY_ESC) {
        this.detach(true);
        utils_1.event.cancel(e);
      } else if (keyCode === KEY_UP) {
        const n = (0, dom_1.findPrevSiblingFocusable)(item);

        if (n) {
          n.focus();
          utils_1.event.cancel(e);
        }
      } else if (keyCode === KEY_DOWN) {
        const n = (0, dom_1.findNextSiblingFocusable)(item);

        if (n) {
          n.focus();
          utils_1.event.cancel(e);
        }
      } else if (keyCode === KEY_TAB) {
        this._onKeydownTab(menu, item, e);
      }
    });
  }

  _onBodyClick(e) {
    const el = e.target;

    if (!el) {
      return;
    }

    if (this._menu.contains(el)) {
      return;
    }

    if (this._isActive()) {
      const {
        grid
      } = this._activeData;

      if (grid.getElement().contains(el)) {
        return;
      }
    }

    this.detach();
  }

  _onKeydownEnter(_menu, item, e) {
    var _a;

    const grid = this._isActive() ? this._activeData.grid : null;
    const {
      valueindex
    } = item.dataset;

    this._doChangeValue(valueindex || "");

    this.detach(true);
    utils_1.event.cancel(e);

    if (grid) {
      if ((_a = grid.keyboardOptions) === null || _a === void 0 ? void 0 : _a.moveCellOnEnter) {
        grid.onKeyDownMove(e);
      }
    }
  }

  _onKeydownTab(menu, item, e) {
    var _a;

    if (this._isActive()) {
      const {
        grid
      } = this._activeData;

      if ((_a = grid.keyboardOptions) === null || _a === void 0 ? void 0 : _a.moveCellOnTab) {
        const {
          valueindex
        } = item.dataset;

        this._doChangeValue(valueindex || "");

        this.detach(true);
        grid.onKeyDownMove(e);
        return;
      }
    }

    if (!e.shiftKey) {
      if (!(0, dom_1.findNextSiblingFocusable)(item)) {
        let n = menu.querySelector(`.${ITEM_CLASSNAME}`);

        if (!(0, dom_1.isFocusable)(n)) {
          n = (0, dom_1.findNextSiblingFocusable)(n);
        }

        if (n) {
          n.focus();
          utils_1.event.cancel(e);
        }
      }
    } else {
      if (!(0, dom_1.findPrevSiblingFocusable)(item)) {
        const items = menu.querySelectorAll(`.${ITEM_CLASSNAME}`);
        let n = items[items.length - 1];

        if (!(0, dom_1.isFocusable)(n)) {
          n = (0, dom_1.findPrevSiblingFocusable)(n);
        }

        if (n) {
          n.focus();
          utils_1.event.cancel(e);
        }
      }
    }
  }

}

exports.InlineMenuElement = InlineMenuElement;

/***/ }),

/***/ "./columns/action/internal/SmallDialogInputElement.js":
/*!************************************************************!*\
  !*** ./columns/action/internal/SmallDialogInputElement.js ***!
  \************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SmallDialogInputElement = void 0;

const utils_1 = __webpack_require__(/*! ../../../internal/utils */ "./internal/utils.js");

const EventHandler_1 = __webpack_require__(/*! ../../../internal/EventHandler */ "./internal/EventHandler.js");

const dom_1 = __webpack_require__(/*! ../../../internal/dom */ "./internal/dom.js");

const input_value_handler_1 = __webpack_require__(/*! ./input-value-handler */ "./columns/action/internal/input-value-handler.js");

const CLASSNAME = "cheetah-grid__small-dialog-input";
const INPUT_CLASSNAME = `${CLASSNAME}__input`;
const HIDDEN_CLASSNAME = `${CLASSNAME}--hidden`;
const SHOWN_CLASSNAME = `${CLASSNAME}--shown`;
const KEY_ENTER = 13;
const KEY_ESC = 27;

function _focus(input, handler) {
  const focus = () => {
    input.focus();
    const end = input.value.length;

    try {
      if (typeof input.selectionStart !== "undefined") {
        input.selectionStart = end;
        input.selectionEnd = end;
        return;
      }
    } catch (e) {//ignore
    } // eslint-disable-next-line @typescript-eslint/no-explicit-any


    if (document.selection) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const range = input.createTextRange();
      range.collapse();
      range.moveEnd("character", end);
      range.moveStart("character", end);
      range.select();
    }
  };

  handler.tryWithOffEvents(input, "blur", () => {
    focus();
  });
}

function createDialogElement() {
  __webpack_require__(/*! @/columns/action/internal/SmallDialogInputElement.css */ "../src/js/columns/action/internal/SmallDialogInputElement.css");

  const element = (0, dom_1.createElement)("div", {
    classList: [CLASSNAME, HIDDEN_CLASSNAME]
  });
  const input = (0, dom_1.createElement)("input", {
    classList: INPUT_CLASSNAME
  });
  input.readOnly = true;
  input.tabIndex = -1;
  element.appendChild(input);
  return element;
}

function bindProps(grid, dialog, input, editor) {
  const {
    classList,
    helperText
  } = editor;

  if (classList) {
    dialog.classList.add(...classList);
  }

  if (helperText && typeof helperText !== "function") {
    dialog.dataset.helperText = helperText;
  }

  setInputAttrs(editor, grid, input);
}

function unbindProps(_grid, dialog, input, editor) {
  const {
    classList
  } = editor;

  if (classList) {
    dialog.classList.remove(...classList);
  }

  delete dialog.dataset.helperText;
  input.type = "";
}

function setInputAttrs(editor, _grid, input) {
  const {
    type
  } = editor;
  input.type = type || "";
}

class SmallDialogInputElement {
  static setInputAttrs(editor, grid, input) {
    setInputAttrs(editor, grid, input);
  }

  constructor() {
    this._handler = new EventHandler_1.EventHandler();
    this._dialog = createDialogElement();
    this._input = this._dialog.querySelector(`.${INPUT_CLASSNAME}`);

    this._bindDialogEvents();
  }

  dispose() {
    const dialog = this._dialog;
    this.detach();

    this._handler.dispose(); // @ts-expect-error -- ignore


    delete this._dialog; // @ts-expect-error -- ignore

    delete this._input;
    this._beforePropEditor = null;

    if (dialog.parentElement) {
      dialog.parentElement.removeChild(dialog);
    }
  }

  attach(grid, editor, col, row, value) {
    const handler = this._handler;
    const dialog = this._dialog;
    const input = this._input;

    if (this._beforePropEditor) {
      unbindProps(grid, dialog, input, this._beforePropEditor);
    }

    delete dialog.dataset.errorMessage;
    dialog.classList.remove(SHOWN_CLASSNAME);
    dialog.classList.add(HIDDEN_CLASSNAME);
    input.readOnly = true;
    input.tabIndex = 0;
    const {
      element,
      rect
    } = grid.getAttachCellsArea(grid.getCellRange(col, row));
    dialog.style.top = `${rect.top.toFixed()}px`;
    dialog.style.left = `${rect.left.toFixed()}px`;
    dialog.style.width = `${rect.width.toFixed()}px`;
    input.style.height = `${rect.height.toFixed()}px`;
    element.appendChild(dialog);
    (0, input_value_handler_1.setInputValue)(input, value);
    input.style.font = grid.font || "16px sans-serif";
    const activeData = {
      grid,
      col,
      row,
      editor
    };

    this._onInputValue(input, activeData);

    if (!utils_1.browser.IE) {
      _focus(input, handler);
    } else {
      // On the paste-event on IE, since it may not be focused, it will be delayed and focused.
      setTimeout(() => _focus(input, handler));
    }

    dialog.classList.add(SHOWN_CLASSNAME);
    dialog.classList.remove(HIDDEN_CLASSNAME);
    input.readOnly = false;
    bindProps(grid, dialog, input, editor);
    this._activeData = activeData;
    this._beforePropEditor = editor;
    this._attaching = true;
    setTimeout(() => {
      delete this._attaching;
    });
  }

  detach(gridFocus) {
    if (this._isActive()) {
      const dialog = this._dialog;
      const input = this._input;
      dialog.classList.remove(SHOWN_CLASSNAME);
      dialog.classList.add(HIDDEN_CLASSNAME);
      input.readOnly = true;
      input.tabIndex = -1;
      const {
        grid,
        col,
        row
      } = this._activeData;
      const range = grid.getCellRange(col, row);
      grid.invalidateCellRange(range);

      if (gridFocus) {
        grid.focus();
      }
    }

    this._activeData = null;
    this._beforeValue = null;
  }

  _doChangeValue() {
    if (!this._isActive()) {
      return false;
    }

    const input = this._input;
    const {
      value
    } = input;
    return (0, utils_1.then)(this._validate(value), res => {
      if (res && value === input.value) {
        const {
          grid,
          col,
          row
        } = this._activeData;
        grid.doChangeValue(col, row, () => value);
        return true;
      }

      return false;
    });
  }

  _isActive() {
    const dialog = this._dialog;

    if (!dialog || !dialog.parentElement) {
      return false;
    }

    if (!this._activeData) {
      return false;
    }

    return true;
  }

  _bindDialogEvents() {
    const handler = this._handler;
    const dialog = this._dialog;
    const input = this._input;

    const stopPropagationOnly = e => e.stopPropagation(); // gridにイベントが伝播しないように


    handler.on(dialog, "click", stopPropagationOnly);
    handler.on(dialog, "dblclick", stopPropagationOnly);
    handler.on(dialog, "mousedown", stopPropagationOnly);
    handler.on(dialog, "touchstart", stopPropagationOnly);
    handler.on(input, "compositionstart", _e => {
      input.classList.add("composition");
    });
    handler.on(input, "compositionend", _e => {
      input.classList.remove("composition");

      this._onInputValue(input);
    });

    const onKeyupAndPress = _e => {
      if (input.classList.contains("composition")) {
        return;
      }

      this._onInputValue(input);
    };

    handler.on(input, "keyup", onKeyupAndPress);
    handler.on(input, "keypress", onKeyupAndPress);
    handler.on(input, "keydown", e => {
      if (input.classList.contains("composition")) {
        return;
      }

      const keyCode = utils_1.event.getKeyCode(e);

      if (keyCode === KEY_ESC) {
        this.detach(true);
        utils_1.event.cancel(e);
      } else if (keyCode === KEY_ENTER) {
        this._onKeydownEnter(e);
      } else {
        this._onInputValue(input);
      }
    });
  }

  _onKeydownEnter(e) {
    if (this._attaching) {
      return;
    }

    const input = this._input;
    const {
      value
    } = input;
    (0, utils_1.then)(this._doChangeValue(), r => {
      var _a;

      if (r && value === input.value) {
        const grid = this._isActive() ? this._activeData.grid : null;
        this.detach(true);

        if ((_a = grid === null || grid === void 0 ? void 0 : grid.keyboardOptions) === null || _a === void 0 ? void 0 : _a.moveCellOnEnter) {
          grid.onKeyDownMove(e);
        }
      }
    });
    utils_1.event.cancel(e);
  }

  _onInputValue(input, activeData) {
    const before = this._beforeValue;
    const {
      value
    } = input;

    if (before !== value) {
      this._onInputValueChange(value, activeData);
    }

    this._beforeValue = value;
  }

  _onInputValueChange(after, activeData) {
    activeData = activeData || this._activeData;
    const dialog = this._dialog;
    const {
      grid,
      col,
      row,
      editor
    } = activeData;

    if (typeof editor.helperText === "function") {
      const helperText = editor.helperText(after, {
        grid,
        col,
        row
      });

      if (helperText) {
        dialog.dataset.helperText = helperText;
      } else {
        delete dialog.dataset.helperText;
      }
    }

    if ("errorMessage" in dialog.dataset) {
      this._validate(after, true);
    }
  }

  _validate(value, inputOnly) {
    const dialog = this._dialog;
    const input = this._input;
    const {
      grid,
      col,
      row,
      editor
    } = this._activeData;
    let message = "";

    if (editor.inputValidator) {
      message = editor.inputValidator(value, {
        grid,
        col,
        row
      });
    }

    return (0, utils_1.then)(message, message => {
      if (!message && editor.validator && !inputOnly) {
        message = editor.validator(value, {
          grid,
          col,
          row
        });
      }

      return (0, utils_1.then)(message, message => {
        if (message && value === input.value) {
          dialog.dataset.errorMessage = message;
        } else {
          delete dialog.dataset.errorMessage;
        }

        return !message;
      });
    });
  }

}

exports.SmallDialogInputElement = SmallDialogInputElement;

/***/ }),

/***/ "./columns/action/internal/input-value-handler.js":
/*!********************************************************!*\
  !*** ./columns/action/internal/input-value-handler.js ***!
  \********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setInputValue = void 0;

const EventHandler_1 = __webpack_require__(/*! ../../../internal/EventHandler */ "./internal/EventHandler.js");

function setInputValue(input, value) {
  const sign = input.type === "number" && value === "-";

  if (sign) {
    // When `type="number"`, the minus sign is not accepted, so change it to `type="text"` once.
    input.type = "";
    let handler = new EventHandler_1.EventHandler();

    const dispose = () => {
      if (handler) {
        handler.dispose();
        handler = null;
      }
    };

    handler.once(input, "input", _e => {
      input.type = "number";
      dispose();
    });
    handler.once(input, "blur", _e => {
      dispose();
    });
  }

  input.value = value !== null && value !== void 0 ? value : "";
}

exports.setInputValue = setInputValue;

/***/ }),

/***/ "./columns/indicator/handlers.js":
/*!***************************************!*\
  !*** ./columns/indicator/handlers.js ***!
  \***************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDrawIndicator = void 0;

const triangle_1 = __webpack_require__(/*! ./triangle */ "./columns/indicator/triangle.js");

function getDrawIndicator(indicatorStyle) {
  const {
    style
  } = indicatorStyle;

  if (style === "triangle") {
    return triangle_1.drawTriangleIndicator;
  }

  return null;
}

exports.getDrawIndicator = getDrawIndicator;

/***/ }),

/***/ "./columns/indicator/triangle.js":
/*!***************************************!*\
  !*** ./columns/indicator/triangle.js ***!
  \***************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawTriangleIndicator = void 0;
const KIND_PROCESS_MAP = {
  [0
  /* DrawIndicatorKind.topLeft */
  ]: {
    themeColor(helper) {
      return helper.theme.indicators.topLeftColor;
    },

    themeSize(helper) {
      return helper.theme.indicators.topLeftSize;
    },

    drawPath(ctx, rect, size) {
      const baseLeft = rect.left + 1;
      const baseTop = rect.top + 1;
      ctx.moveTo(baseLeft, baseTop);
      ctx.lineTo(baseLeft + size, baseTop);
      ctx.lineTo(baseLeft, baseTop + size);
    }

  },
  [1
  /* DrawIndicatorKind.topRight */
  ]: {
    themeColor(helper) {
      return helper.theme.indicators.topRightColor;
    },

    themeSize(helper) {
      return helper.theme.indicators.topRightSize;
    },

    drawPath(ctx, rect, size) {
      const baseRight = rect.right - 2;
      const baseTop = rect.top + 1;
      ctx.moveTo(baseRight, baseTop);
      ctx.lineTo(baseRight - size, baseTop);
      ctx.lineTo(baseRight, baseTop + size);
    }

  },
  [2
  /* DrawIndicatorKind.bottomRight */
  ]: {
    themeColor(helper) {
      return helper.theme.indicators.bottomRightColor;
    },

    themeSize(helper) {
      return helper.theme.indicators.bottomRightSize;
    },

    drawPath(ctx, rect, size) {
      const baseRight = rect.right - 2;
      const baseBottom = rect.bottom - 2;
      ctx.moveTo(baseRight, baseBottom);
      ctx.lineTo(baseRight - size, baseBottom);
      ctx.lineTo(baseRight, baseBottom - size);
    }

  },
  [3
  /* DrawIndicatorKind.bottomLeft */
  ]: {
    themeColor(helper) {
      return helper.theme.indicators.bottomLeftColor;
    },

    themeSize(helper) {
      return helper.theme.indicators.bottomLeftSize;
    },

    drawPath(ctx, rect, size) {
      const baseLeft = rect.left + 1;
      const baseBottom = rect.bottom - 2;
      ctx.moveTo(baseLeft, baseBottom);
      ctx.lineTo(baseLeft + size, baseBottom);
      ctx.lineTo(baseLeft, baseBottom - size);
    }

  }
};

function drawTriangleIndicator(context, style, kind, helper) {
  const process = KIND_PROCESS_MAP[kind];

  if (!process) {
    return;
  }

  helper.drawBorderWithClip(context, ctx => {
    const rect = context.getRect();
    const color = style.color || helper.getColor(process.themeColor(helper), context.col, context.row, ctx);
    const size = style.size && Number(style.size) || process.themeSize(helper) || rect.height / 6; // draw triangle

    ctx.fillStyle = color;
    ctx.beginPath();
    process.drawPath(ctx, rect, size);
    ctx.closePath();
    ctx.fill();
  });
}

exports.drawTriangleIndicator = drawTriangleIndicator;

/***/ }),

/***/ "./columns/message/BaseMessage.js":
/*!****************************************!*\
  !*** ./columns/message/BaseMessage.js ***!
  \****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseMessage = void 0;

class BaseMessage {
  constructor(grid) {
    this._messageElement = null;
    this._grid = grid;
  }

  dispose() {
    this.detachMessageElement();

    if (this._messageElement) {
      this._messageElement.dispose();
    }

    this._messageElement = null;
  }

  _getMessageElement() {
    return this._messageElement || (this._messageElement = this.createMessageElementInternal());
  }

  attachMessageElement(col, row, message) {
    const messageElement = this._getMessageElement();

    messageElement.attach(this._grid, col, row, message);
  }

  moveMessageElement(col, row) {
    const messageElement = this._getMessageElement();

    messageElement.move(this._grid, col, row);
  }

  detachMessageElement() {
    const messageElement = this._getMessageElement();

    messageElement._detach();
  }

  drawCellMessage(message, context, style, helper, grid, info) {
    this.drawCellMessageInternal(message, context, style, helper, grid, info);
  }

}

exports.BaseMessage = BaseMessage;

/***/ }),

/***/ "./columns/message/ErrorMessage.js":
/*!*****************************************!*\
  !*** ./columns/message/ErrorMessage.js ***!
  \*****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorMessage = void 0;

const messageUtils = __importStar(__webpack_require__(/*! ./messageUtils */ "./columns/message/messageUtils.js"));

const BaseMessage_1 = __webpack_require__(/*! ./BaseMessage */ "./columns/message/BaseMessage.js");

const ErrorMessageElement_1 = __webpack_require__(/*! ./internal/ErrorMessageElement */ "./columns/message/internal/ErrorMessageElement.js");

const utils_1 = __webpack_require__(/*! ../../internal/utils */ "./internal/utils.js");

const RED_A100 = "#ff8a80";

class ErrorMessage extends BaseMessage_1.BaseMessage {
  createMessageElementInternal() {
    return new ErrorMessageElement_1.ErrorMessageElement();
  }

  drawCellMessageInternal(_message, context, style, helper, grid, _info) {
    const {
      bgColor
    } = style;
    const {
      select
    } = context.getSelection();

    if (!(0, utils_1.cellInRange)(grid.getCellRange(context.col, context.row), select.col, select.row) || !grid.hasFocusGrid()) {
      helper.drawBorderWithClip(context, ctx => {
        messageUtils.drawExclamationMarkBox(context, {
          bgColor: helper.getColor(helper.theme.messages.errorBgColor, context.col, context.row, ctx) || RED_A100,
          color: bgColor,
          boxWidth: helper.theme.messages.boxWidth,
          markHeight: helper.theme.messages.markHeight
        }, helper);
      });
    }
  }

}

exports.ErrorMessage = ErrorMessage;

/***/ }),

/***/ "./columns/message/InfoMessage.js":
/*!****************************************!*\
  !*** ./columns/message/InfoMessage.js ***!
  \****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InfoMessage = void 0;

const messageUtils = __importStar(__webpack_require__(/*! ./messageUtils */ "./columns/message/messageUtils.js"));

const BaseMessage_1 = __webpack_require__(/*! ./BaseMessage */ "./columns/message/BaseMessage.js");

const MessageElement_1 = __webpack_require__(/*! ./internal/MessageElement */ "./columns/message/internal/MessageElement.js");

const utils_1 = __webpack_require__(/*! ../../internal/utils */ "./internal/utils.js");

const GREY_L2 = "#e0e0e0";

class InfoMessage extends BaseMessage_1.BaseMessage {
  createMessageElementInternal() {
    return new MessageElement_1.MessageElement();
  }

  drawCellMessageInternal(_message, context, style, helper, grid, _info) {
    const {
      bgColor
    } = style;
    const {
      select
    } = context.getSelection();

    if (!(0, utils_1.cellInRange)(grid.getCellRange(context.col, context.row), select.col, select.row) || !grid.hasFocusGrid()) {
      helper.drawBorderWithClip(context, ctx => {
        messageUtils.drawInformationMarkBox(context, {
          bgColor: helper.getColor(helper.theme.messages.infoBgColor, context.col, context.row, ctx) || GREY_L2,
          color: bgColor,
          boxWidth: helper.theme.messages.boxWidth,
          markHeight: helper.theme.messages.markHeight
        }, helper);
      });
    }
  }

}

exports.InfoMessage = InfoMessage;

/***/ }),

/***/ "./columns/message/MessageHandler.js":
/*!*******************************************!*\
  !*** ./columns/message/MessageHandler.js ***!
  \*******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageHandler = exports.hasMessage = void 0;

const ErrorMessage_1 = __webpack_require__(/*! ./ErrorMessage */ "./columns/message/ErrorMessage.js");

const InfoMessage_1 = __webpack_require__(/*! ./InfoMessage */ "./columns/message/InfoMessage.js");

const LG_EVENT_TYPE_1 = __webpack_require__(/*! ../../list-grid/LG_EVENT_TYPE */ "./list-grid/LG_EVENT_TYPE.js");

const WarningMessage_1 = __webpack_require__(/*! ./WarningMessage */ "./columns/message/WarningMessage.js");

const utils_1 = __webpack_require__(/*! ../../internal/utils */ "./internal/utils.js");

const EMPTY_MESSAGE = {
  type: "error",
  message: null
};
const MESSAGE_INSTANCE_FACTORY = {
  error(grid) {
    return new ErrorMessage_1.ErrorMessage(grid);
  },

  info(grid) {
    return new InfoMessage_1.InfoMessage(grid);
  },

  warning(grid) {
    return new WarningMessage_1.WarningMessage(grid);
  }

};

function normalizeMessage(message) {
  if (!message || (0, utils_1.isPromise)(message)) {
    return EMPTY_MESSAGE;
  }

  if (typeof message === "string") {
    return {
      type: "error",
      message,
      original: message
    };
  }

  const type = message.type || "error";

  if (type && type in MESSAGE_INSTANCE_FACTORY) {
    return {
      type: type.toLowerCase(),
      message: message.message,
      original: message
    };
  }

  return {
    type: "error",
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    message: `${message}`,
    original: message
  };
}

function hasMessage(message) {
  return !!normalizeMessage(message).message;
}

exports.hasMessage = hasMessage;

class MessageHandler {
  constructor(grid, getMessage) {
    this._attachInfo = null;
    this._grid = grid;
    this._messageInstances = {};

    this._bindGridEvent(grid, getMessage);
  }

  dispose() {
    var _a;

    const messageInstances = this._messageInstances;

    for (const k in messageInstances) {
      (_a = messageInstances[k]) === null || _a === void 0 ? void 0 : _a.dispose();
    } // @ts-expect-error -- ignore


    delete this._messageInstances; // @ts-expect-error -- ignore

    delete this._attachInfo;
  }

  drawCellMessage(message, context, style, helper, grid, info) {
    if (!hasMessage(message)) {
      return;
    }

    const instance = this._getMessageInstanceOfMessage(message);

    instance.drawCellMessage(normalizeMessage(message), context, style, helper, grid, info);
  }

  _attach(col, row, message) {
    const info = this._attachInfo;

    const instance = this._getMessageInstanceOfMessage(message);

    if (info && info.instance !== instance) {
      info.instance.detachMessageElement();
    }

    instance.attachMessageElement(col, row, normalizeMessage(message));
    this._attachInfo = {
      col,
      row,
      instance
    };
  }

  _move(col, row) {
    const info = this._attachInfo;

    if (!info || info.col !== col || info.row !== row) {
      return;
    }

    const {
      instance
    } = info;
    instance.moveMessageElement(col, row);
  }

  _detach() {
    const info = this._attachInfo;

    if (!info) {
      return;
    }

    const {
      instance
    } = info;
    instance.detachMessageElement();
    this._attachInfo = null;
  }

  _bindGridEvent(grid, getMessage) {
    const onSelectMessage = sel => {
      const setMessageData = msg => {
        if (!hasMessage(msg)) {
          this._detach();
        } else {
          this._attach(sel.col, sel.row, msg);
        }
      };

      const message = getMessage(sel.col, sel.row);

      if ((0, utils_1.isPromise)(message)) {
        this._detach();

        message.then(msg => {
          const newSel = grid.selection.select;

          if (newSel.col !== sel.col || newSel.row !== sel.row) {
            return;
          }

          setMessageData(msg);
        });
        return;
      }

      setMessageData(message);
    };

    grid.listen(LG_EVENT_TYPE_1.LG_EVENT_TYPE.SELECTED_CELL, e => {
      if (!e.selected) {
        return;
      }

      if (e.before.col === e.col && e.before.row === e.row) {
        return;
      }

      onSelectMessage(e);
    });
    grid.listen(LG_EVENT_TYPE_1.LG_EVENT_TYPE.SCROLL, () => {
      const sel = grid.selection.select;

      this._move(sel.col, sel.row);
    });
    grid.listen(LG_EVENT_TYPE_1.LG_EVENT_TYPE.CHANGED_VALUE, e => {
      if (!grid.hasFocusGrid()) {
        return;
      }

      const sel = grid.selection.select;

      if (sel.col !== e.col || sel.row !== e.row) {
        return;
      }

      onSelectMessage(e);
    });
    grid.listen(LG_EVENT_TYPE_1.LG_EVENT_TYPE.FOCUS_GRID, _e => {
      const sel = grid.selection.select;
      onSelectMessage(sel);
    });
    grid.listen(LG_EVENT_TYPE_1.LG_EVENT_TYPE.BLUR_GRID, _e => {
      this._detach();
    });
  }

  _getMessageInstanceOfMessage(message) {
    const messageInstances = this._messageInstances;
    const {
      type
    } = normalizeMessage(message);
    return messageInstances[type] || (messageInstances[type] = MESSAGE_INSTANCE_FACTORY[type](this._grid));
  }

}

exports.MessageHandler = MessageHandler;

/***/ }),

/***/ "./columns/message/WarningMessage.js":
/*!*******************************************!*\
  !*** ./columns/message/WarningMessage.js ***!
  \*******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WarningMessage = void 0;

const messageUtils = __importStar(__webpack_require__(/*! ./messageUtils */ "./columns/message/messageUtils.js"));

const BaseMessage_1 = __webpack_require__(/*! ./BaseMessage */ "./columns/message/BaseMessage.js");

const WarningMessageElement_1 = __webpack_require__(/*! ./internal/WarningMessageElement */ "./columns/message/internal/WarningMessageElement.js");

const utils_1 = __webpack_require__(/*! ../../internal/utils */ "./internal/utils.js");

const DEEP_ORANGE_A100 = "#ff9e80";

class WarningMessage extends BaseMessage_1.BaseMessage {
  createMessageElementInternal() {
    return new WarningMessageElement_1.WarningMessageElement();
  }

  drawCellMessageInternal(_message, context, style, helper, grid, _info) {
    const {
      bgColor
    } = style;
    const {
      select
    } = context.getSelection();

    if (!(0, utils_1.cellInRange)(grid.getCellRange(context.col, context.row), select.col, select.row) || !grid.hasFocusGrid()) {
      helper.drawBorderWithClip(context, ctx => {
        messageUtils.drawExclamationMarkBox(context, {
          bgColor: helper.getColor(helper.theme.messages.warnBgColor, context.col, context.row, ctx) || DEEP_ORANGE_A100,
          color: bgColor,
          boxWidth: helper.theme.messages.boxWidth,
          markHeight: helper.theme.messages.markHeight
        }, helper);
      });
    }
  }

}

exports.WarningMessage = WarningMessage;

/***/ }),

/***/ "./columns/message/internal/ErrorMessageElement.js":
/*!*********************************************************!*\
  !*** ./columns/message/internal/ErrorMessageElement.js ***!
  \*********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorMessageElement = void 0;

const MessageElement_1 = __webpack_require__(/*! ./MessageElement */ "./columns/message/internal/MessageElement.js");

const CLASSNAME = "cheetah-grid__error-message-element";
const MESSAGE_CLASSNAME = `${CLASSNAME}__message`;

class ErrorMessageElement extends MessageElement_1.MessageElement {
  constructor() {
    super();

    __webpack_require__(/*! @/columns/message/internal/ErrorMessageElement.css */ "../src/js/columns/message/internal/ErrorMessageElement.css");

    this._rootElement.classList.add(CLASSNAME);

    this._messageElement.classList.add(MESSAGE_CLASSNAME);
  }

}

exports.ErrorMessageElement = ErrorMessageElement;

/***/ }),

/***/ "./columns/message/internal/MessageElement.js":
/*!****************************************************!*\
  !*** ./columns/message/internal/MessageElement.js ***!
  \****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageElement = void 0;

const EventHandler_1 = __webpack_require__(/*! ../../../internal/EventHandler */ "./internal/EventHandler.js");

const dom_1 = __webpack_require__(/*! ../../../internal/dom */ "./internal/dom.js");

const CLASSNAME = "cheetah-grid__message-element";
const MESSAGE_CLASSNAME = `${CLASSNAME}__message`;
const HIDDEN_CLASSNAME = `${CLASSNAME}--hidden`;
const SHOWN_CLASSNAME = `${CLASSNAME}--shown`;

function createMessageDomElement() {
  __webpack_require__(/*! @/columns/message/internal/MessageElement.css */ "../src/js/columns/message/internal/MessageElement.css");

  const rootElement = (0, dom_1.createElement)("div", {
    classList: [CLASSNAME, HIDDEN_CLASSNAME]
  });
  const messageElement = (0, dom_1.createElement)("span", {
    classList: [MESSAGE_CLASSNAME]
  });
  rootElement.appendChild(messageElement);
  return rootElement;
}

class MessageElement {
  constructor() {
    this._handler = new EventHandler_1.EventHandler();
    const rootElement = this._rootElement = createMessageDomElement();
    this._messageElement = rootElement.querySelector(`.${MESSAGE_CLASSNAME}`);
  }

  dispose() {
    this.detach();

    this._handler.dispose(); // @ts-expect-error -- ignore


    delete this._rootElement; // @ts-expect-error -- ignore

    delete this._messageElement;
  }

  attach(grid, col, row, message) {
    const rootElement = this._rootElement;
    const messageElement = this._messageElement;
    rootElement.classList.remove(SHOWN_CLASSNAME);
    rootElement.classList.add(HIDDEN_CLASSNAME);

    if (this._attachCell(grid, col, row)) {
      rootElement.classList.add(SHOWN_CLASSNAME);
      rootElement.classList.remove(HIDDEN_CLASSNAME);
      messageElement.textContent = message.message;
    } else {
      this._detach();
    }
  }

  move(grid, col, row) {
    const rootElement = this._rootElement;

    if (this._attachCell(grid, col, row)) {
      rootElement.classList.add(SHOWN_CLASSNAME);
      rootElement.classList.remove(HIDDEN_CLASSNAME);
    } else {
      this._detach();
    }
  }

  detach() {
    this._detach();
  }

  _detach() {
    const rootElement = this._rootElement;

    if (rootElement.parentElement) {
      rootElement.parentElement.removeChild(rootElement);
      rootElement.classList.remove(SHOWN_CLASSNAME);
      rootElement.classList.add(HIDDEN_CLASSNAME);
    }
  }

  _attachCell(grid, col, row) {
    const rootElement = this._rootElement;
    const {
      element,
      rect
    } = grid.getAttachCellsArea(grid.getCellRange(col, row));
    const {
      bottom: top,
      left,
      width
    } = rect;
    const {
      frozenRowCount,
      frozenColCount
    } = grid;

    if (row >= frozenRowCount && frozenRowCount > 0) {
      const {
        rect: frozenRect
      } = grid.getAttachCellsArea(grid.getCellRange(col, frozenRowCount - 1));

      if (top < frozenRect.bottom) {
        return false; //範囲外
      }
    } else {
      if (top < 0) {
        return false; //範囲外
      }
    }

    if (col >= frozenColCount && frozenColCount > 0) {
      const {
        rect: frozenRect
      } = grid.getAttachCellsArea(grid.getCellRange(frozenColCount - 1, row));

      if (left < frozenRect.right) {
        return false; //範囲外
      }
    } else {
      if (left < 0) {
        return false; //範囲外
      }
    }

    const {
      offsetHeight,
      offsetWidth
    } = element;

    if (offsetHeight < top) {
      return false; //範囲外
    }

    if (offsetWidth < left) {
      return false; //範囲外
    }

    rootElement.style.top = `${top.toFixed()}px`;
    rootElement.style.left = `${left.toFixed()}px`;
    rootElement.style.width = `${width.toFixed()}px`;

    if (rootElement.parentElement !== element) {
      element.appendChild(rootElement);
    }

    return true;
  }

}

exports.MessageElement = MessageElement;

/***/ }),

/***/ "./columns/message/internal/WarningMessageElement.js":
/*!***********************************************************!*\
  !*** ./columns/message/internal/WarningMessageElement.js ***!
  \***********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WarningMessageElement = void 0;

const MessageElement_1 = __webpack_require__(/*! ./MessageElement */ "./columns/message/internal/MessageElement.js");

const CLASSNAME = "cheetah-grid__warning-message-element";
const MESSAGE_CLASSNAME = `${CLASSNAME}__message`;

class WarningMessageElement extends MessageElement_1.MessageElement {
  constructor() {
    super();

    __webpack_require__(/*! @/columns/message/internal/WarningMessageElement.css */ "../src/js/columns/message/internal/WarningMessageElement.css");

    this._rootElement.classList.add(CLASSNAME);

    this._messageElement.classList.add(MESSAGE_CLASSNAME);
  }

}

exports.WarningMessageElement = WarningMessageElement;

/***/ }),

/***/ "./columns/message/messageUtils.js":
/*!*****************************************!*\
  !*** ./columns/message/messageUtils.js ***!
  \*****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawInformationMarkBox = exports.drawExclamationMarkBox = void 0;

const Rect_1 = __webpack_require__(/*! ../../internal/Rect */ "./internal/Rect.js");

function drawExclamationMarkBox(context, style, helper) {
  const {
    bgColor,
    color,
    boxWidth,
    markHeight
  } = style;
  const ctx = context.getContext();
  const rect = context.getRect(); // draw box

  ctx.fillStyle = bgColor;
  const boxRect = rect.copy();
  boxRect.left = boxRect.right - (Number(boxWidth) || 24);
  ctx.fillRect(boxRect.left, boxRect.top, boxRect.width, boxRect.height - 1); // draw exclamation mark

  const fillColor = color;
  const height = Number(markHeight) || 20;
  const width = height / 5;
  const left = boxRect.left + (boxRect.width - width) / 2;
  const top = boxRect.top + (boxRect.height - height) / 2;
  helper.fillRectWithState(new Rect_1.Rect(left, top, width, height / 5 * 3), context, {
    fillColor
  });
  helper.fillRectWithState(new Rect_1.Rect(left, top + height / 5 * 4, width, height / 5), context, {
    fillColor
  });
}

exports.drawExclamationMarkBox = drawExclamationMarkBox;

function drawInformationMarkBox(context, style, helper) {
  const {
    bgColor,
    color,
    boxWidth,
    markHeight
  } = style;
  const ctx = context.getContext();
  const rect = context.getRect(); // draw box

  ctx.fillStyle = bgColor;
  const boxRect = rect.copy();
  boxRect.left = boxRect.right - (Number(boxWidth) || 24);
  ctx.fillRect(boxRect.left, boxRect.top, boxRect.width, boxRect.height - 1); // draw i mark

  const fillColor = color;
  const height = Number(markHeight) || 20;
  const width = height / 5;
  const left = boxRect.left + (boxRect.width - width) / 2;
  const top = boxRect.top + (boxRect.height - height) / 2;
  helper.fillRectWithState(new Rect_1.Rect(left, top, width, height / 5), context, {
    fillColor
  });
  helper.fillRectWithState(new Rect_1.Rect(left, top + height / 5 * 2, width, height / 5 * 3), context, {
    fillColor
  });
}

exports.drawInformationMarkBox = drawInformationMarkBox;

/***/ }),

/***/ "./columns/style.js":
/*!**************************!*\
  !*** ./columns/style.js ***!
  \**************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.of = exports.MenuStyle = exports.MultilineTextStyle = exports.PercentCompleteBarStyle = exports.IconStyle = exports.ImageStyle = exports.ButtonStyle = exports.RadioStyle = exports.CheckStyle = exports.NumberStyle = exports.Style = exports.BaseStyle = exports.EVENT_TYPE = void 0;

const BaseStyle_1 = __webpack_require__(/*! ./style/BaseStyle */ "./columns/style/BaseStyle.js");

Object.defineProperty(exports, "BaseStyle", {
  enumerable: true,
  get: function () {
    return BaseStyle_1.BaseStyle;
  }
});

const ButtonStyle_1 = __webpack_require__(/*! ./style/ButtonStyle */ "./columns/style/ButtonStyle.js");

Object.defineProperty(exports, "ButtonStyle", {
  enumerable: true,
  get: function () {
    return ButtonStyle_1.ButtonStyle;
  }
});

const CheckStyle_1 = __webpack_require__(/*! ./style/CheckStyle */ "./columns/style/CheckStyle.js");

Object.defineProperty(exports, "CheckStyle", {
  enumerable: true,
  get: function () {
    return CheckStyle_1.CheckStyle;
  }
});

const IconStyle_1 = __webpack_require__(/*! ./style/IconStyle */ "./columns/style/IconStyle.js");

Object.defineProperty(exports, "IconStyle", {
  enumerable: true,
  get: function () {
    return IconStyle_1.IconStyle;
  }
});

const ImageStyle_1 = __webpack_require__(/*! ./style/ImageStyle */ "./columns/style/ImageStyle.js");

Object.defineProperty(exports, "ImageStyle", {
  enumerable: true,
  get: function () {
    return ImageStyle_1.ImageStyle;
  }
});

const MenuStyle_1 = __webpack_require__(/*! ./style/MenuStyle */ "./columns/style/MenuStyle.js");

Object.defineProperty(exports, "MenuStyle", {
  enumerable: true,
  get: function () {
    return MenuStyle_1.MenuStyle;
  }
});

const MultilineTextStyle_1 = __webpack_require__(/*! ./style/MultilineTextStyle */ "./columns/style/MultilineTextStyle.js");

Object.defineProperty(exports, "MultilineTextStyle", {
  enumerable: true,
  get: function () {
    return MultilineTextStyle_1.MultilineTextStyle;
  }
});

const NumberStyle_1 = __webpack_require__(/*! ./style/NumberStyle */ "./columns/style/NumberStyle.js");

Object.defineProperty(exports, "NumberStyle", {
  enumerable: true,
  get: function () {
    return NumberStyle_1.NumberStyle;
  }
});

const PercentCompleteBarStyle_1 = __webpack_require__(/*! ./style/PercentCompleteBarStyle */ "./columns/style/PercentCompleteBarStyle.js");

Object.defineProperty(exports, "PercentCompleteBarStyle", {
  enumerable: true,
  get: function () {
    return PercentCompleteBarStyle_1.PercentCompleteBarStyle;
  }
});

const RadioStyle_1 = __webpack_require__(/*! ./style/RadioStyle */ "./columns/style/RadioStyle.js");

Object.defineProperty(exports, "RadioStyle", {
  enumerable: true,
  get: function () {
    return RadioStyle_1.RadioStyle;
  }
});

const Style_1 = __webpack_require__(/*! ./style/Style */ "./columns/style/Style.js");

Object.defineProperty(exports, "Style", {
  enumerable: true,
  get: function () {
    return Style_1.Style;
  }
});
const {
  EVENT_TYPE
} = BaseStyle_1.BaseStyle;
exports.EVENT_TYPE = EVENT_TYPE;

function of(columnStyle, // eslint-disable-next-line @typescript-eslint/no-explicit-any
record, StyleClassDef = Style_1.Style) {
  if (columnStyle) {
    if (columnStyle instanceof BaseStyle_1.BaseStyle) {
      return columnStyle;
    } else if (typeof columnStyle === "function") {
      return of(columnStyle(record), record, StyleClassDef);
    } else if (record && columnStyle in record) {
      return of(record[columnStyle], record, StyleClassDef);
    } // eslint-disable-next-line @typescript-eslint/no-explicit-any


    return new StyleClassDef(columnStyle);
  } else {
    return StyleClassDef.DEFAULT;
  }
}

exports.of = of;

/***/ }),

/***/ "./columns/style/BaseStyle.js":
/*!************************************!*\
  !*** ./columns/style/BaseStyle.js ***!
  \************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseStyle = void 0;

const EventTarget_1 = __webpack_require__(/*! ../../core/EventTarget */ "./core/EventTarget.js");

const STYLE_EVENT_TYPE = {
  CHANGE_STYLE: "change_style"
};
let defaultStyle;

class BaseStyle extends EventTarget_1.EventTarget {
  static get EVENT_TYPE() {
    return STYLE_EVENT_TYPE;
  }

  static get DEFAULT() {
    return defaultStyle ? defaultStyle : defaultStyle = new BaseStyle();
  }

  constructor({
    bgColor,
    indicatorTopLeft,
    indicatorTopRight,
    indicatorBottomRight,
    indicatorBottomLeft
  } = {}) {
    super();
    this._bgColor = bgColor;
    this._indicatorTopLeft = normalizeIndicator(indicatorTopLeft);
    this._indicatorTopRight = normalizeIndicator(indicatorTopRight);
    this._indicatorBottomRight = normalizeIndicator(indicatorBottomRight);
    this._indicatorBottomLeft = normalizeIndicator(indicatorBottomLeft);
  }

  get bgColor() {
    return this._bgColor;
  }

  set bgColor(bgColor) {
    this._bgColor = bgColor;
    this.doChangeStyle();
  }

  get indicatorTopLeft() {
    return this._indicatorTopLeft;
  }

  set indicatorTopLeft(indicatorTopLeft) {
    this._indicatorTopLeft = normalizeIndicator(indicatorTopLeft);
    this.doChangeStyle();
  }

  get indicatorTopRight() {
    return this._indicatorTopRight;
  }

  set indicatorTopRight(indicatorTopRight) {
    this._indicatorTopRight = normalizeIndicator(indicatorTopRight);
    this.doChangeStyle();
  }

  get indicatorBottomRight() {
    return this._indicatorBottomRight;
  }

  set indicatorBottomRight(indicatorBottomRight) {
    this._indicatorBottomRight = normalizeIndicator(indicatorBottomRight);
    this.doChangeStyle();
  }

  get indicatorBottomLeft() {
    return this._indicatorBottomLeft;
  }

  set indicatorBottomLeft(indicatorBottomLeft) {
    this._indicatorBottomLeft = normalizeIndicator(indicatorBottomLeft);
    this.doChangeStyle();
  }

  doChangeStyle() {
    this.fireListeners(STYLE_EVENT_TYPE.CHANGE_STYLE);
  }

  clone() {
    return new BaseStyle(this);
  }

}

exports.BaseStyle = BaseStyle;

function normalizeIndicator(indicator) {
  if (typeof indicator === "string") {
    return {
      style: indicator
    };
  }

  return indicator;
}

/***/ }),

/***/ "./columns/style/BranchGraphStyle.js":
/*!*******************************************!*\
  !*** ./columns/style/BranchGraphStyle.js ***!
  \*******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BranchGraphStyle = void 0;

const BaseStyle_1 = __webpack_require__(/*! ./BaseStyle */ "./columns/style/BaseStyle.js");

let defaultStyle;

const DEFAULT_BRANCH_COLORS = (_name, index) => {
  switch (index % 3) {
    case 0:
      return "#979797";

    case 1:
      return "#008fb5";

    case 2:
      return "#f1c109";

    default:
  }

  return "#979797";
};

class BranchGraphStyle extends BaseStyle_1.BaseStyle {
  static get DEFAULT() {
    return defaultStyle ? defaultStyle : defaultStyle = new BranchGraphStyle();
  }

  constructor(style = {}) {
    super(style);
    this._branchColors = style.branchColors || DEFAULT_BRANCH_COLORS;
    this._margin = style.margin || 4;
    this._circleSize = style.circleSize || 16;
    this._branchLineWidth = style.branchLineWidth || 4;
    this._mergeStyle = style.mergeStyle === "straight" ? "straight" : "bezier";
  }

  get branchColors() {
    return this._branchColors;
  }

  set branchColors(branchColors) {
    this._branchColors = branchColors;
    this.doChangeStyle();
  }

  get margin() {
    return this._margin;
  }

  set margin(margin) {
    this._margin = margin;
    this.doChangeStyle();
  }

  get circleSize() {
    return this._circleSize;
  }

  set circleSize(circleSize) {
    this._circleSize = circleSize;
    this.doChangeStyle();
  }

  get branchLineWidth() {
    return this._branchLineWidth;
  }

  set branchLineWidth(branchLineWidth) {
    this._branchLineWidth = branchLineWidth;
    this.doChangeStyle();
  }

  get mergeStyle() {
    return this._mergeStyle;
  }

  set mergeStyle(mergeStyle) {
    this._mergeStyle = mergeStyle;
    this.doChangeStyle();
  }

  clone() {
    return new BranchGraphStyle(this);
  }

}

exports.BranchGraphStyle = BranchGraphStyle;

/***/ }),

/***/ "./columns/style/ButtonStyle.js":
/*!**************************************!*\
  !*** ./columns/style/ButtonStyle.js ***!
  \**************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonStyle = void 0;

const Style_1 = __webpack_require__(/*! ./Style */ "./columns/style/Style.js");

const utils_1 = __webpack_require__(/*! ../../internal/utils */ "./internal/utils.js");

let defaultStyle;

class ButtonStyle extends Style_1.Style {
  static get DEFAULT() {
    return defaultStyle ? defaultStyle : defaultStyle = new ButtonStyle();
  }

  constructor(style = {}) {
    super((0, utils_1.defaults)(style, {
      textAlign: "center"
    }));
    const {
      buttonBgColor
    } = style;
    this._buttonBgColor = buttonBgColor;
  }

  get buttonBgColor() {
    return this._buttonBgColor;
  }

  set buttonBgColor(buttonBgColor) {
    this._buttonBgColor = buttonBgColor;
    this.doChangeStyle();
  }

  clone() {
    return new ButtonStyle(this);
  }

}

exports.ButtonStyle = ButtonStyle;

/***/ }),

/***/ "./columns/style/CheckStyle.js":
/*!*************************************!*\
  !*** ./columns/style/CheckStyle.js ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckStyle = void 0;

const StdBaseStyle_1 = __webpack_require__(/*! ./StdBaseStyle */ "./columns/style/StdBaseStyle.js");

const utils_1 = __webpack_require__(/*! ../../internal/utils */ "./internal/utils.js");

let defaultStyle;

class CheckStyle extends StdBaseStyle_1.StdBaseStyle {
  static get DEFAULT() {
    return defaultStyle ? defaultStyle : defaultStyle = new CheckStyle();
  }

  constructor(style = {}) {
    super((0, utils_1.defaults)(style, {
      textAlign: "center"
    }));
    const {
      uncheckBgColor,
      checkBgColor,
      borderColor
    } = style;
    this._uncheckBgColor = uncheckBgColor;
    this._checkBgColor = checkBgColor;
    this._borderColor = borderColor;
  }

  get uncheckBgColor() {
    return this._uncheckBgColor;
  }

  set uncheckBgColor(uncheckBgColor) {
    this._uncheckBgColor = uncheckBgColor;
    this.doChangeStyle();
  }

  get checkBgColor() {
    return this._checkBgColor;
  }

  set checkBgColor(checkBgColor) {
    this._checkBgColor = checkBgColor;
    this.doChangeStyle();
  }

  get borderColor() {
    return this._borderColor;
  }

  set borderColor(borderColor) {
    this._borderColor = borderColor;
    this.doChangeStyle();
  }

  clone() {
    return new CheckStyle(this);
  }

}

exports.CheckStyle = CheckStyle;

/***/ }),

/***/ "./columns/style/IconStyle.js":
/*!************************************!*\
  !*** ./columns/style/IconStyle.js ***!
  \************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconStyle = void 0;

const Style_1 = __webpack_require__(/*! ./Style */ "./columns/style/Style.js");

const utils_1 = __webpack_require__(/*! ../../internal/utils */ "./internal/utils.js");

let defaultStyle;

class IconStyle extends Style_1.Style {
  static get DEFAULT() {
    return defaultStyle ? defaultStyle : defaultStyle = new IconStyle();
  }

  constructor(style = {}) {
    super((0, utils_1.defaults)(style, {
      textAlign: "center"
    }));
  }

  clone() {
    return new IconStyle(this);
  }

}

exports.IconStyle = IconStyle;

/***/ }),

/***/ "./columns/style/ImageStyle.js":
/*!*************************************!*\
  !*** ./columns/style/ImageStyle.js ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageStyle = void 0;

const StdBaseStyle_1 = __webpack_require__(/*! ./StdBaseStyle */ "./columns/style/StdBaseStyle.js");

const utils_1 = __webpack_require__(/*! ../../internal/utils */ "./internal/utils.js");

let defaultStyle;

class ImageStyle extends StdBaseStyle_1.StdBaseStyle {
  static get DEFAULT() {
    return defaultStyle ? defaultStyle : defaultStyle = new ImageStyle();
  }

  constructor(style = {}) {
    super((0, utils_1.defaults)(style, {
      textAlign: "center"
    }));
    this._imageSizing = style.imageSizing;
    this._margin = style.margin || 4;
  }

  get imageSizing() {
    return this._imageSizing;
  }

  set imageSizing(imageSizing) {
    this._imageSizing = imageSizing;
    this.doChangeStyle();
  }

  get margin() {
    return this._margin;
  }

  set margin(margin) {
    this._margin = margin;
    this.doChangeStyle();
  }

  clone() {
    return new ImageStyle(this);
  }

}

exports.ImageStyle = ImageStyle;

/***/ }),

/***/ "./columns/style/MenuStyle.js":
/*!************************************!*\
  !*** ./columns/style/MenuStyle.js ***!
  \************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuStyle = void 0;

const Style_1 = __webpack_require__(/*! ./Style */ "./columns/style/Style.js");

let defaultStyle;

class MenuStyle extends Style_1.Style {
  static get DEFAULT() {
    return defaultStyle ? defaultStyle : defaultStyle = new MenuStyle();
  }

  constructor(style = {}) {
    super(style);
    const {
      appearance
    } = style;
    this._appearance = appearance;
  }

  get appearance() {
    return this._appearance || "menulist-button";
  }

  set appearance(appearance) {
    this._appearance = appearance;
    this.doChangeStyle();
  }

  clone() {
    return new MenuStyle(this);
  }

}

exports.MenuStyle = MenuStyle;

/***/ }),

/***/ "./columns/style/MultilineTextStyle.js":
/*!*********************************************!*\
  !*** ./columns/style/MultilineTextStyle.js ***!
  \*********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultilineTextStyle = void 0;

const Style_1 = __webpack_require__(/*! ./Style */ "./columns/style/Style.js");

const utils_1 = __webpack_require__(/*! ../../internal/utils */ "./internal/utils.js");

let defaultStyle;

class MultilineTextStyle extends Style_1.Style {
  static get DEFAULT() {
    return defaultStyle ? defaultStyle : defaultStyle = new MultilineTextStyle();
  }

  constructor(style = {}) {
    super((0, utils_1.defaults)(style, {
      textBaseline: "top"
    }));
    this._lineHeight = style.lineHeight || "1em";
    this._autoWrapText = style.autoWrapText || false;
    this._lineClamp = style.lineClamp;
  }

  clone() {
    return new MultilineTextStyle(this);
  }

  get lineHeight() {
    return this._lineHeight;
  }

  set lineHeight(lineHeight) {
    this._lineHeight = lineHeight;
    this.doChangeStyle();
  }

  get lineClamp() {
    return this._lineClamp;
  }

  set lineClamp(lineClamp) {
    this._lineClamp = lineClamp;
    this.doChangeStyle();
  }

  get autoWrapText() {
    return this._autoWrapText;
  }

  set autoWrapText(autoWrapText) {
    this._autoWrapText = autoWrapText;
    this.doChangeStyle();
  }

}

exports.MultilineTextStyle = MultilineTextStyle;

/***/ }),

/***/ "./columns/style/NumberStyle.js":
/*!**************************************!*\
  !*** ./columns/style/NumberStyle.js ***!
  \**************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberStyle = void 0;

const Style_1 = __webpack_require__(/*! ./Style */ "./columns/style/Style.js");

const utils_1 = __webpack_require__(/*! ../../internal/utils */ "./internal/utils.js");

let defaultStyle;

class NumberStyle extends Style_1.Style {
  static get DEFAULT() {
    return defaultStyle ? defaultStyle : defaultStyle = new NumberStyle();
  }

  constructor(style = {}) {
    super((0, utils_1.defaults)(style, {
      textAlign: "right"
    }));
  }

  clone() {
    return new NumberStyle(this);
  }

}

exports.NumberStyle = NumberStyle;

/***/ }),

/***/ "./columns/style/PercentCompleteBarStyle.js":
/*!**************************************************!*\
  !*** ./columns/style/PercentCompleteBarStyle.js ***!
  \**************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PercentCompleteBarStyle = void 0;

const Style_1 = __webpack_require__(/*! ./Style */ "./columns/style/Style.js");

let defaultStyle;

const DEFAULT_BAR_COLOR = num => {
  if (num > 80) {
    return "#20a8d8";
  }

  if (num > 50) {
    return "#4dbd74";
  }

  if (num > 20) {
    return "#ffc107";
  }

  return "#f86c6b";
};

class PercentCompleteBarStyle extends Style_1.Style {
  static get DEFAULT() {
    return defaultStyle ? defaultStyle : defaultStyle = new PercentCompleteBarStyle();
  }

  constructor(style = {}) {
    super(style);
    this._barColor = style.barColor || DEFAULT_BAR_COLOR;
    this._barBgColor = style.barBgColor || "#f0f3f5";
    this._barHeight = style.barHeight || 3;
  }

  get barColor() {
    return this._barColor;
  }

  set barColor(barColor) {
    this._barColor = barColor;
    this.doChangeStyle();
  }

  get barBgColor() {
    return this._barBgColor;
  }

  set barBgColor(barBgColor) {
    this._barBgColor = barBgColor;
    this.doChangeStyle();
  }

  get barHeight() {
    return this._barHeight;
  }

  set barHeight(barHeight) {
    this._barHeight = barHeight;
    this.doChangeStyle();
  }

  clone() {
    return new PercentCompleteBarStyle(this);
  }

}

exports.PercentCompleteBarStyle = PercentCompleteBarStyle;

/***/ }),

/***/ "./columns/style/RadioStyle.js":
/*!*************************************!*\
  !*** ./columns/style/RadioStyle.js ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioStyle = void 0;

const StdBaseStyle_1 = __webpack_require__(/*! ./StdBaseStyle */ "./columns/style/StdBaseStyle.js");

const utils_1 = __webpack_require__(/*! ../../internal/utils */ "./internal/utils.js");

let defaultStyle;

class RadioStyle extends StdBaseStyle_1.StdBaseStyle {
  static get DEFAULT() {
    return defaultStyle ? defaultStyle : defaultStyle = new RadioStyle();
  }

  constructor(style = {}) {
    super((0, utils_1.defaults)(style, {
      textAlign: "center"
    }));
    const {
      checkColor,
      uncheckBorderColor,
      checkBorderColor,
      uncheckBgColor,
      checkBgColor
    } = style;
    this._checkColor = checkColor;
    this._uncheckBorderColor = uncheckBorderColor;
    this._checkBorderColor = checkBorderColor;
    this._uncheckBgColor = uncheckBgColor;
    this._checkBgColor = checkBgColor;
  }

  get checkColor() {
    return this._checkColor;
  }

  set checkColor(checkColor) {
    this._checkColor = checkColor;
    this.doChangeStyle();
  }

  get uncheckBorderColor() {
    return this._uncheckBorderColor;
  }

  set uncheckBorderColor(uncheckBorderColor) {
    this._uncheckBorderColor = uncheckBorderColor;
    this.doChangeStyle();
  }

  get checkBorderColor() {
    return this._checkBorderColor;
  }

  set checkBorderColor(checkBorderColor) {
    this._checkBorderColor = checkBorderColor;
    this.doChangeStyle();
  }

  get uncheckBgColor() {
    return this._uncheckBgColor;
  }

  set uncheckBgColor(uncheckBgColor) {
    this._uncheckBgColor = uncheckBgColor;
    this.doChangeStyle();
  }

  get checkBgColor() {
    return this._checkBgColor;
  }

  set checkBgColor(checkBgColor) {
    this._checkBgColor = checkBgColor;
    this.doChangeStyle();
  }

  clone() {
    return new RadioStyle(this);
  }

}

exports.RadioStyle = RadioStyle;

/***/ }),

/***/ "./columns/style/StdBaseStyle.js":
/*!***************************************!*\
  !*** ./columns/style/StdBaseStyle.js ***!
  \***************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StdBaseStyle = void 0;

const BaseStyle_1 = __webpack_require__(/*! ./BaseStyle */ "./columns/style/BaseStyle.js");

let defaultStyle;

class StdBaseStyle extends BaseStyle_1.BaseStyle {
  static get DEFAULT() {
    return defaultStyle ? defaultStyle : defaultStyle = new StdBaseStyle();
  }

  constructor(style = {}) {
    super(style);
    this._textAlign = style.textAlign || "left";
    this._textBaseline = style.textBaseline || "middle";
  }

  get textAlign() {
    return this._textAlign;
  }

  set textAlign(textAlign) {
    this._textAlign = textAlign;
    this.doChangeStyle();
  }

  get textBaseline() {
    return this._textBaseline;
  }

  set textBaseline(textBaseline) {
    this._textBaseline = textBaseline;
    this.doChangeStyle();
  }

  clone() {
    return new StdBaseStyle(this);
  }

}

exports.StdBaseStyle = StdBaseStyle;

/***/ }),

/***/ "./columns/style/Style.js":
/*!********************************!*\
  !*** ./columns/style/Style.js ***!
  \********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Style = void 0;

const StdBaseStyle_1 = __webpack_require__(/*! ./StdBaseStyle */ "./columns/style/StdBaseStyle.js");

let defaultStyle;

class Style extends StdBaseStyle_1.StdBaseStyle {
  static get DEFAULT() {
    return defaultStyle ? defaultStyle : defaultStyle = new Style();
  }

  constructor(style = {}) {
    super(style);
    this._color = style.color;
    this._font = style.font;
    this._padding = style.padding;
    this._textOverflow = style.textOverflow || "clip";
  }

  get color() {
    return this._color;
  }

  set color(color) {
    this._color = color;
    this.doChangeStyle();
  }

  get font() {
    return this._font;
  }

  set font(font) {
    this._font = font;
    this.doChangeStyle();
  }

  get padding() {
    return this._padding;
  }

  set padding(padding) {
    this._padding = padding;
    this.doChangeStyle();
  }

  get textOverflow() {
    return this._textOverflow;
  }

  set textOverflow(textOverflow) {
    this._textOverflow = textOverflow;
    this.doChangeStyle();
  }

  clone() {
    return new Style(this);
  }

}

exports.Style = Style;

/***/ }),

/***/ "./columns/type.js":
/*!*************************!*\
  !*** ./columns/type.js ***!
  \*************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.of = exports.MultilineTextColumn = exports.MenuColumn = exports.BranchGraphColumn = exports.IconColumn = exports.PercentCompleteBarColumn = exports.ImageColumn = exports.ButtonColumn = exports.RadioColumn = exports.CheckColumn = exports.NumberColumn = exports.Column = void 0;

const BranchGraphColumn_1 = __webpack_require__(/*! ./type/BranchGraphColumn */ "./columns/type/BranchGraphColumn.js");

Object.defineProperty(exports, "BranchGraphColumn", {
  enumerable: true,
  get: function () {
    return BranchGraphColumn_1.BranchGraphColumn;
  }
});

const ButtonColumn_1 = __webpack_require__(/*! ./type/ButtonColumn */ "./columns/type/ButtonColumn.js");

Object.defineProperty(exports, "ButtonColumn", {
  enumerable: true,
  get: function () {
    return ButtonColumn_1.ButtonColumn;
  }
});

const CheckColumn_1 = __webpack_require__(/*! ./type/CheckColumn */ "./columns/type/CheckColumn.js");

Object.defineProperty(exports, "CheckColumn", {
  enumerable: true,
  get: function () {
    return CheckColumn_1.CheckColumn;
  }
});

const Column_1 = __webpack_require__(/*! ./type/Column */ "./columns/type/Column.js");

Object.defineProperty(exports, "Column", {
  enumerable: true,
  get: function () {
    return Column_1.Column;
  }
});

const IconColumn_1 = __webpack_require__(/*! ./type/IconColumn */ "./columns/type/IconColumn.js");

Object.defineProperty(exports, "IconColumn", {
  enumerable: true,
  get: function () {
    return IconColumn_1.IconColumn;
  }
});

const ImageColumn_1 = __webpack_require__(/*! ./type/ImageColumn */ "./columns/type/ImageColumn.js");

Object.defineProperty(exports, "ImageColumn", {
  enumerable: true,
  get: function () {
    return ImageColumn_1.ImageColumn;
  }
});

const MenuColumn_1 = __webpack_require__(/*! ./type/MenuColumn */ "./columns/type/MenuColumn.js");

Object.defineProperty(exports, "MenuColumn", {
  enumerable: true,
  get: function () {
    return MenuColumn_1.MenuColumn;
  }
});

const MultilineTextColumn_1 = __webpack_require__(/*! ./type/MultilineTextColumn */ "./columns/type/MultilineTextColumn.js");

Object.defineProperty(exports, "MultilineTextColumn", {
  enumerable: true,
  get: function () {
    return MultilineTextColumn_1.MultilineTextColumn;
  }
});

const NumberColumn_1 = __webpack_require__(/*! ./type/NumberColumn */ "./columns/type/NumberColumn.js");

Object.defineProperty(exports, "NumberColumn", {
  enumerable: true,
  get: function () {
    return NumberColumn_1.NumberColumn;
  }
});

const PercentCompleteBarColumn_1 = __webpack_require__(/*! ./type/PercentCompleteBarColumn */ "./columns/type/PercentCompleteBarColumn.js");

Object.defineProperty(exports, "PercentCompleteBarColumn", {
  enumerable: true,
  get: function () {
    return PercentCompleteBarColumn_1.PercentCompleteBarColumn;
  }
});

const RadioColumn_1 = __webpack_require__(/*! ./type/RadioColumn */ "./columns/type/RadioColumn.js");

Object.defineProperty(exports, "RadioColumn", {
  enumerable: true,
  get: function () {
    return RadioColumn_1.RadioColumn;
  }
});
const TYPES = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  DEFAULT: new Column_1.Column(),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  NUMBER: new NumberColumn_1.NumberColumn(),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  CHECK: new CheckColumn_1.CheckColumn(),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  RADIO: new RadioColumn_1.RadioColumn(),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  BUTTON: new ButtonColumn_1.ButtonColumn(),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  IMAGE: new ImageColumn_1.ImageColumn(),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  MULTILINETEXT: new MultilineTextColumn_1.MultilineTextColumn()
};

function of(columnType) {
  if (!columnType) {
    return TYPES.DEFAULT;
  } else if (typeof columnType === "string") {
    const key = columnType.toUpperCase();
    return TYPES[key] || of(null);
  } else {
    return columnType;
  }
}

exports.of = of;

/***/ }),

/***/ "./columns/type/BaseColumn.js":
/*!************************************!*\
  !*** ./columns/type/BaseColumn.js ***!
  \************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseColumn = void 0;

const styleContents = __importStar(__webpack_require__(/*! ../style */ "./columns/style.js"));

const utils_1 = __webpack_require__(/*! ../../internal/utils */ "./internal/utils.js");

const BaseStyle_1 = __webpack_require__(/*! ../style/BaseStyle */ "./columns/style/BaseStyle.js");

const animate_1 = __webpack_require__(/*! ../../internal/animate */ "./internal/animate.js");

const symbolManager_1 = __webpack_require__(/*! ../../internal/symbolManager */ "./internal/symbolManager.js");

const handlers_1 = __webpack_require__(/*! ../indicator/handlers */ "./columns/indicator/handlers.js");

const {
  setReadonly
} = utils_1.obj;
const COLUMN_FADEIN_STATE_ID = (0, symbolManager_1.getColumnFadeinStateId)();

function isFadeinWhenCallbackInPromise(column, grid) {
  if (column.fadeinWhenCallbackInPromise != null) {
    return column.fadeinWhenCallbackInPromise;
  }

  return !!grid.configure("fadeinWhenCallbackInPromise");
}

function getFadeinState(grid) {
  let state = grid[COLUMN_FADEIN_STATE_ID];

  if (!state) {
    state = {
      cells: {}
    };
    setReadonly(grid, COLUMN_FADEIN_STATE_ID, state);
  }

  return state;
}

function _generateFadeinPointAction(grid, col, row, context, drawInternal, drawCellBase) {
  return point => {
    const state = getFadeinState(grid);
    const stateKey = `${row}:${col}`;

    if (point === 1) {
      delete state.cells[stateKey];
    } else {
      state.cells[stateKey] = {
        opacity: point
      };
    }

    drawCellBase();
    drawInternal();
    const cellState = state.cells[stateKey];

    if (cellState) {
      //透過するため背景を透過で上書き
      const ctx = context.getContext();
      ctx.globalAlpha = 1 - cellState.opacity;

      try {
        drawCellBase();
      } finally {
        ctx.globalAlpha = 1;
      }
    }
  };
}

const fadeinMgr = {
  animate(grid, col, row, context, drawInternal, drawCellBase) {
    // fadein animation
    const state = getFadeinState(grid);
    const activeFadeins = [_generateFadeinPointAction(grid, col, row, context, drawInternal, drawCellBase)];
    state.activeFadeins = activeFadeins;
    (0, animate_1.animate)(500, point => {
      activeFadeins.forEach(f => f(point));

      if (point === 1) {
        delete state.activeFadeins;
      }
    });
  },

  margeAnimate(grid, col, row, context, drawInternal, drawCellBase) {
    const state = getFadeinState(grid);

    if (state.activeFadeins) {
      state.activeFadeins.push(_generateFadeinPointAction(grid, col, row, context, drawInternal, drawCellBase));
    } else {
      drawInternal();
    }
  }

};

class BaseColumn {
  constructor(option) {
    this.onDrawCell = this.onDrawCell.bind(this); //スコープを固定させる
    //Promiseのcallbackでフェードイン表示する

    this._fadeinWhenCallbackInPromise = option === null || option === void 0 ? void 0 : option.fadeinWhenCallbackInPromise;
  }

  get fadeinWhenCallbackInPromise() {
    return this._fadeinWhenCallbackInPromise;
  }

  get StyleClass() {
    return BaseStyle_1.BaseStyle;
  }

  onDrawCell(cellValue, info, context, grid) {
    var _a;

    const {
      style,
      getRecord,
      drawCellBase
    } = info;
    const helper = grid.getGridCanvasHelper();
    drawCellBase();
    const record = getRecord();
    let promise;

    if ((0, utils_1.isPromise)(record)) {
      promise = record;
    } else if ((0, utils_1.isPromise)(cellValue)) {
      promise = cellValue;
    } else {
      const msg = info.getMessage();

      if ((0, utils_1.isPromise)(msg)) {
        promise = msg;
      }
    } //文字描画


    if (promise) {
      const start = Date.now();
      return Promise.all([record, cellValue, promise.then(() => cellValue).then(() => info.getMessage())]).then(({
        0: record,
        1: val,
        2: message
      }) => {
        const currentContext = context.toCurrentContext();
        const drawRect = currentContext.getDrawRect();

        if (!drawRect) {
          return;
        }

        const time = Date.now() - start;

        const drawInternal = () => {
          const currentContext = context.toCurrentContext();
          const drawRect = currentContext.getDrawRect();

          if (!drawRect) {
            return;
          }

          const actStyle = styleContents.of(style, record, this.StyleClass);
          this.drawInternal(this.convertInternal(val), currentContext, actStyle, helper, grid, info);
          this.drawMessageInternal(message, currentContext, actStyle, helper, grid, info);
          this.drawIndicatorsInternal(currentContext, actStyle, helper, grid, info);
        };

        if (!isFadeinWhenCallbackInPromise(this, grid)) {
          drawInternal(); //単純な描画
        } else {
          const {
            col,
            row
          } = context;

          if (time < 80) {
            //80ms以内のPromiseCallbackは前アニメーションに統合
            fadeinMgr.margeAnimate(grid, col, row, context, drawInternal, drawCellBase);
          } else {
            //アニメーション
            fadeinMgr.animate(grid, col, row, context, drawInternal, drawCellBase);
          }
        }
      });
    } else {
      const actStyle = styleContents.of(style, record, this.StyleClass);
      this.drawInternal(this.convertInternal(cellValue), context, actStyle, helper, grid, info);
      this.drawMessageInternal(info.getMessage(), context, actStyle, helper, grid, info);
      this.drawIndicatorsInternal(context, actStyle, helper, grid, info); //フェードインの場合透過するため背景を透過で上書き

      const {
        col,
        row
      } = context;
      const stateKey = `${col}:${row}`;
      const cellState = (_a = grid[COLUMN_FADEIN_STATE_ID]) === null || _a === void 0 ? void 0 : _a.cells[stateKey];

      if (cellState) {
        const ctx = context.getContext();
        ctx.globalAlpha = 1 - cellState.opacity;

        try {
          drawCellBase();
        } finally {
          ctx.globalAlpha = 1;
        }
      }

      return undefined;
    }
  }

  convertInternal(value) {
    return value != null ? value : "";
  }

  drawMessageInternal(message, context, style, helper, grid, info) {
    info.messageHandler.drawCellMessage(message, context, style, helper, grid, info);
  }

  drawIndicatorsInternal(context, style, helper, grid, info) {
    var _a;

    const {
      indicatorTopLeft,
      indicatorTopRight,
      indicatorBottomRight,
      indicatorBottomLeft
    } = style;

    for (const [indicatorStyle, kind] of [[indicatorTopLeft, 0
    /* DrawIndicatorKind.topLeft */
    ], [indicatorTopRight, 1
    /* DrawIndicatorKind.topRight */
    ], [indicatorBottomRight, 2
    /* DrawIndicatorKind.bottomRight */
    ], [indicatorBottomLeft, 3
    /* DrawIndicatorKind.bottomLeft */
    ]]) {
      if (indicatorStyle) {
        (_a = (0, handlers_1.getDrawIndicator)(indicatorStyle)) === null || _a === void 0 ? void 0 : _a(context, indicatorStyle, kind, helper, grid, info);
      }
    }
  }

  bindGridEvent(_grid, _cellId) {
    return [];
  }

  getCopyCellValue(value, _grid, _cell) {
    return value;
  }

}

exports.BaseColumn = BaseColumn;

/***/ }),

/***/ "./columns/type/BranchGraphColumn.js":
/*!*******************************************!*\
  !*** ./columns/type/BranchGraphColumn.js ***!
  \*******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BranchGraphColumn = void 0;

const utils_1 = __webpack_require__(/*! ../../internal/utils */ "./internal/utils.js");

const BaseColumn_1 = __webpack_require__(/*! ./BaseColumn */ "./columns/type/BaseColumn.js");

const BranchGraphStyle_1 = __webpack_require__(/*! ../style/BranchGraphStyle */ "./columns/style/BranchGraphStyle.js");

const symbolManager_1 = __webpack_require__(/*! ../../internal/symbolManager */ "./internal/symbolManager.js");

const _ = (0, symbolManager_1.getBranchGraphColumnStateId)();

function getAllColumnData(grid, field, callback) {
  const {
    dataSource
  } = grid;
  const allData = [];
  let promise;

  for (let index = 0; index < dataSource.length; index++) {
    const data = dataSource.getField(index, field);

    if ((0, utils_1.isPromise)(data)) {
      const dataIndex = allData.length;
      allData.push(undefined);

      if (!promise) {
        promise = data.then(d => {
          allData[dataIndex] = d;
        });
      } else {
        promise = promise.then(() => data).then(d => {
          allData[dataIndex] = d;
        });
      }
    } else {
      allData.push(data);
    }
  }

  if (promise) {
    promise.then(() => callback(allData));
  } else {
    callback(allData);
  }
}

class BranchLine {
  constructor({
    fromIndex,
    toIndex,
    colorIndex,
    point
  }) {
    this.fromIndex = fromIndex;
    this.toIndex = toIndex;
    this.colorIndex = colorIndex;
    this.point = point;
  }

}

class BranchPoint {
  constructor({
    index,
    commit = false,
    lines = [],
    tag
  }) {
    this.index = index;
    this.commit = commit;
    this.lines = lines;
    this.tag = tag;
  }

  static mergeLines(lines) {
    const result = lines.filter(l => l.fromIndex != null && l.toIndex != null);
    const froms = lines.filter(l => l.fromIndex != null && l.toIndex == null);
    const tos = lines.filter(l => l.fromIndex == null && l.toIndex != null);
    froms.forEach(f => {
      for (let i = 0; i < tos.length; i++) {
        const t = tos[i];

        if (t.point) {
          continue;
        }

        if (f.colorIndex === t.colorIndex) {
          f.toIndex = t.toIndex;
          tos.splice(i, 1);
          break;
        }
      }

      result.push(f);
    });
    return result.concat(tos);
  }

  static merge(a, b) {
    if (!a) {
      return b;
    }

    return new BranchPoint({
      index: a.index,
      commit: a.commit || b.commit,
      lines: BranchPoint.mergeLines(a.lines.concat(b.lines)),
      tag: a.tag || b.tag
    });
  }

}

function joinLine(timeline, branchIndex) {
  const reverse = [...timeline].reverse();

  for (let i = 0; i < reverse.length; i++) {
    const f = reverse[i][branchIndex];

    if (f) {
      f.lines = BranchPoint.mergeLines(f.lines.concat([new BranchLine({
        toIndex: branchIndex,
        colorIndex: branchIndex
      })]));

      for (let j = 0; j < i; j++) {
        const tl = reverse[j];
        tl[branchIndex] = new BranchPoint({
          index: branchIndex,
          lines: [new BranchLine({
            fromIndex: branchIndex,
            toIndex: branchIndex,
            colorIndex: branchIndex
          })]
        });
      }

      return true;
    }
  }

  return false;
}

function branch({
  timeline,
  branches
}, from, to) {
  const fromIndex = from != null ? branches.indexOf(from) : -1;
  let toIndex = branches.indexOf(to);

  if (toIndex < 0) {
    toIndex = branches.length;
    branches.push(to);
  }

  function findBranchRootIndex() {
    for (let index = timeline.length - 1; index >= 0; index--) {
      const tl = timeline[index];
      const from = tl[fromIndex];

      if (from && from.commit) {
        return index;
      }
    }

    return -1;
  }

  if (fromIndex < 0) {
    return new BranchPoint({
      index: toIndex
    });
  } else {
    const fromTargetIndex = findBranchRootIndex();

    if (fromTargetIndex === -1) {
      return null;
    }

    const branchTargetFromIndex = fromTargetIndex + 1;
    const branchPoint = new BranchPoint({
      index: toIndex,
      lines: [new BranchLine({
        fromIndex,
        colorIndex: toIndex
      })]
    });
    let point;
    let result = null;

    if (branchTargetFromIndex < timeline.length) {
      const targetLine = timeline[branchTargetFromIndex];
      point = targetLine[toIndex] = BranchPoint.merge(targetLine[toIndex], branchPoint);
    } else {
      point = branchPoint;
      result = branchPoint;
    }

    const from = timeline[fromTargetIndex][fromIndex];
    from.lines = BranchPoint.mergeLines(from.lines.concat([new BranchLine({
      toIndex,
      colorIndex: toIndex,
      point
    })]));
    return result;
  }
}

function commit({
  timeline,
  branches
}, name) {
  const index = branches.indexOf(name);

  if (index < 0) {
    return null;
  }

  const result = new BranchPoint({
    index,
    commit: true
  });

  if (joinLine(timeline, index)) {
    result.lines = BranchPoint.mergeLines(result.lines.concat([new BranchLine({
      fromIndex: index,
      colorIndex: index
    })]));
  }

  return result;
}

function commitTag({
  branches
}, name, tag) {
  let index = branches.indexOf(name);

  if (index < 0) {
    index = branches.length;
    branches.push(name);
  }

  return new BranchPoint({
    index,
    tag
  });
}

function commitMerge({
  timeline,
  branches
}, from, to) {
  const fromIndex = branches.indexOf(from);
  const toIndex = branches.indexOf(to);

  if (toIndex < 0 || fromIndex < 0) {
    return new BranchPoint({
      index: toIndex,
      commit: true
    });
  }

  const result = new BranchPoint({
    index: toIndex,
    commit: true,
    lines: [new BranchLine({
      fromIndex,
      colorIndex: fromIndex
    }), new BranchLine({
      fromIndex: toIndex,
      colorIndex: toIndex
    })]
  });
  const froms = [...timeline];
  const fromTargetLine = froms.pop();

  if (fromTargetLine) {
    fromTargetLine[fromIndex] = BranchPoint.merge(fromTargetLine[fromIndex], new BranchPoint({
      index: toIndex,
      lines: [new BranchLine({
        toIndex,
        colorIndex: fromIndex
      })]
    }));
  }

  if (joinLine(froms, fromIndex) && fromTargetLine) {
    fromTargetLine[fromIndex].lines = BranchPoint.mergeLines(fromTargetLine[fromIndex].lines.concat([new BranchLine({
      fromIndex,
      colorIndex: fromIndex
    })]));
  }

  joinLine(timeline, toIndex);
  return result;
}

function calcCommand(info, command) {
  const {
    timeline
  } = info;
  const timelineData = []; // const last = timeline.length > 0 ? timeline[timeline.length - 1] : null;

  const commands = Array.isArray(command) ? command : [command];
  commands.forEach(cmd => {
    if (!cmd) {
      return;
    }

    let point;

    if (cmd.command === "branch") {
      const from = utils_1.obj.isObject(cmd.branch) ? cmd.branch.from : null;
      const to = utils_1.obj.isObject(cmd.branch) ? cmd.branch.to : cmd.branch;
      point = branch(info, from, to);
    } else if (cmd.command === "commit") {
      const {
        branch
      } = cmd;
      point = commit(info, branch);
    } else if (cmd.command === "merge") {
      const {
        from,
        to
      } = cmd.branch;
      point = commitMerge(info, from, to);
    } else if (cmd.command === "tag") {
      const {
        branch,
        tag
      } = cmd;
      point = commitTag(info, branch, tag);
    }

    if (point && point.index > -1) {
      timelineData[point.index] = BranchPoint.merge(timelineData[point.index], point);
    }
  });
  timeline.push(timelineData);
}

function calcBranchesInfo(start, grid, field) {
  const result = {
    branches: [],
    timeline: []
  };
  getAllColumnData(grid, field, data => {
    if (start !== "top") {
      data = [...data].reverse();
    }

    data.forEach(command => {
      calcCommand(result, command);
    });
  });
  return result;
}

function calcBranchXPoints(ctx, left, width, radius, branches, timeline) {
  let w = Math.max(width / branches.length + 1, 5);
  timeline.forEach(tl => {
    tl.forEach((p, index) => {
      if (index <= 0) {
        // 計算の意味が無い
        return;
      }

      if (p.tag) {
        const textWidth = ctx.measureText(p.tag).width;

        if (w * index + radius * 2 + 4 + textWidth > width) {
          w = Math.max((width - radius * 2 - 4 - textWidth) / index, 5);
        }
      }
    });
  });
  const result = [];
  let x = left;
  branches.forEach(() => {
    result.push(Math.ceil(x + radius));
    x += w;
  });
  return result;
}

function renderMerge(grid, ctx, x, y, upLineIndex, downLineIndex, colorIndex, {
  branchXPoints,
  // margin,
  branchColors,
  branchLineWidth,
  mergeStyle
}, {
  // width,
  col,
  row,
  branches
}) {
  if (upLineIndex != null || downLineIndex != null) {
    ctx.strokeStyle = (0, utils_1.getOrApply)(branchColors, branches[colorIndex], colorIndex);
    ctx.lineWidth = branchLineWidth;
    ctx.lineCap = "round";
    ctx.beginPath();

    if (upLineIndex != null) {
      const upX = branchXPoints[upLineIndex];
      const upRect = grid.getCellRelativeRect(col, row - 1);
      const upY = upRect.top + upRect.height / 2;
      ctx.moveTo(upX, upY);

      if (mergeStyle === "bezier") {
        ctx.bezierCurveTo(upX, (y + upY) / 2, x, (y + upY) / 2, x, y);
      } else {
        ctx.lineTo(x, y);
      }
    } else {
      ctx.moveTo(x, y);
    }

    if (downLineIndex != null) {
      const downX = branchXPoints[downLineIndex];
      const downRect = grid.getCellRelativeRect(col, row + 1);
      const downY = downRect.top + downRect.height / 2;

      if (mergeStyle === "bezier") {
        ctx.bezierCurveTo(x, (y + downY) / 2, downX, (y + downY) / 2, downX, downY);
      } else {
        ctx.lineTo(downX, downY);
      }
    }

    ctx.stroke();
  }
}
/**
 * BranchGraphColumn
 *
 * Data commands
 * - mastar branch or orphan branch
 *
 * ```js
 * {
 * 	command: 'branch',
 * 	branch: 'branch name A',
 * }
 * ```
 *
 * - commit
 *
 * ```js
 * {
 * 	command: 'commit',
 * 	branch: 'branch name A'
 * }
 * ```
 *
 * - branch
 *
 * ```js
 * {
 * 	command: 'branch',
 * 	branch: {
 * 		from: 'branch name A',
 * 		to: 'branch name B'
 * 	}
 * }
 * ```
 *
 * - merge
 *
 * ```js
 * {
 * 	command: 'merge',
 * 	branch: {
 * 		from: 'branch name B',
 * 		to: 'branch name A'
 * 	}
 * }
 * ```
 *
 * - tag
 *
 * ```js
 * {
 * 	command: 'tag',
 * 	branch: 'branch name A',
 * 	tag: 'tag name'
 * }
 * ```
 *
 * @memberof cheetahGrid.columns.type
 */


class BranchGraphColumn extends BaseColumn_1.BaseColumn {
  constructor(option = {}) {
    super(option);
    this._start = option.start || "bottom";
    this._cache = option.cache != null ? option.cache : false;
  }

  get StyleClass() {
    return BranchGraphStyle_1.BranchGraphStyle;
  }

  clearCache(grid) {
    delete grid[_];
  }

  onDrawCell(cellValue, info, context, grid) {
    if (this._cache) {
      const state = grid[_] || (grid[_] = new Map());
      const {
        col,
        row
      } = context;
      const field = grid.getField(col, row);

      if (!state.has(field)) {
        state.set(field, calcBranchesInfo(this._start, grid, field));
      }
    }

    return super.onDrawCell(cellValue, info, context, grid);
  }

  clone() {
    return new BranchGraphColumn(this);
  }

  drawInternal(_value, context, style, helper, grid, {
    drawCellBase
  }) {
    var _a, _b;

    const {
      col,
      row
    } = context;
    const field = grid.getField(col, row);
    const {
      timeline,
      branches
    } = (_b = this._cache ? (_a = grid[_]) === null || _a === void 0 ? void 0 : _a.get(field) : null) !== null && _b !== void 0 ? _b : calcBranchesInfo(this._start, grid, field);
    const {
      upLineIndexKey,
      downLineIndexKey
    } = this._start !== "top" ? {
      upLineIndexKey: "toIndex",
      downLineIndexKey: "fromIndex"
    } : {
      upLineIndexKey: "fromIndex",
      downLineIndexKey: "toIndex"
    };
    const data = this._start !== "top" ? timeline[timeline.length - (row - grid.frozenRowCount) - 1] : timeline[row - grid.frozenRowCount];
    const {
      branchColors,
      branchLineWidth,
      circleSize,
      mergeStyle,
      margin,
      bgColor
    } = style;

    if (bgColor) {
      drawCellBase({
        bgColor
      });
    }

    const rect = context.getRect();
    const radius = circleSize / 2;
    const width = rect.width - margin * 2;
    helper.drawWithClip(context, ctx => {
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      const branchXPoints = calcBranchXPoints(ctx, rect.left + margin, width, radius, branches, timeline);
      const y = rect.top + rect.height / 2; // draw join lines

      data.map((point, index) => point ? point.lines.map(line => ({
        colorIndex: line.colorIndex,
        upLineIndex: line[upLineIndexKey],
        downLineIndex: line[downLineIndexKey],
        pointIndex: index
      })) : []).reduce((p, c) => p.concat(c), []) // flatMap
      // order of overlap
      .sort((a, b) => b.colorIndex - a.colorIndex).forEach(line => {
        const x = branchXPoints[line.pointIndex];
        renderMerge(grid, ctx, x, y, line.upLineIndex, line.downLineIndex, line.colorIndex, {
          margin,
          branchXPoints,
          branchLineWidth,
          branchColors,
          mergeStyle
        }, {
          width,
          col,
          row,
          branches
        });
      }); // draw commit points

      data.forEach((p, index) => {
        if (p && p.commit) {
          const x = branchXPoints[index];
          ctx.fillStyle = (0, utils_1.getOrApply)(branchColors, branches[index], index);
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2, true);
          ctx.fill();
          ctx.closePath();
        }
      }); // draw tags

      data.forEach((p, index) => {
        if (p && p.tag) {
          ctx.fillStyle = (0, utils_1.getOrApply)(branchColors, branches[index], index);
          ctx.fillText(p.tag, branchXPoints[index] + radius + 4, y);
        }
      });
    });
  }

}

exports.BranchGraphColumn = BranchGraphColumn;

/***/ }),

/***/ "./columns/type/ButtonColumn.js":
/*!**************************************!*\
  !*** ./columns/type/ButtonColumn.js ***!
  \**************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonColumn = void 0;

const utils = __importStar(__webpack_require__(/*! ./columnUtils */ "./columns/type/columnUtils.js"));

const ButtonStyle_1 = __webpack_require__(/*! ../style/ButtonStyle */ "./columns/style/ButtonStyle.js");

const Column_1 = __webpack_require__(/*! ./Column */ "./columns/type/Column.js");

const utils_1 = __webpack_require__(/*! ../../internal/utils */ "./internal/utils.js");

const symbolManager_1 = __webpack_require__(/*! ../../internal/symbolManager */ "./internal/symbolManager.js");

const BUTTON_COLUMN_STATE_ID = (0, symbolManager_1.getButtonColumnStateId)();

class ButtonColumn extends Column_1.Column {
  constructor(option = {}) {
    super(option);
    this._caption = option.caption;
  }

  get StyleClass() {
    return ButtonStyle_1.ButtonStyle;
  }

  get caption() {
    return this._caption;
  }

  withCaption(caption) {
    const c = this.clone();
    c._caption = caption;
    return c;
  }

  clone() {
    return new ButtonColumn(this);
  }

  convertInternal(value) {
    return this._caption || super.convertInternal(value);
  }

  getCopyCellValue(value) {
    return this._caption || value;
  }

  drawInternal(value, context, style, helper, grid, {
    drawCellBase,
    getIcon
  }) {
    const {
      textAlign,
      textBaseline,
      bgColor,
      color,
      buttonBgColor,
      font,
      padding,
      textOverflow
    } = style;

    if (bgColor) {
      drawCellBase({
        bgColor
      });
    }

    const textValue = value != null ? String(value) : "";
    helper.testFontLoad(font, textValue, context);
    const {
      col,
      row
    } = context;
    const range = grid.getCellRange(col, row);
    let active = false;
    const state = grid[BUTTON_COLUMN_STATE_ID];

    if (state) {
      if (state.mouseActiveCell && (0, utils_1.cellInRange)(range, state.mouseActiveCell.col, state.mouseActiveCell.row)) {
        active = true;
      } else {
        const {
          select
        } = context.getSelection();

        if ((0, utils_1.cellInRange)(range, select.col, select.row)) {
          active = true;
        }
      }
    }

    utils.loadIcons(getIcon(), context, helper, (icons, context) => {
      helper.button(textValue, context, {
        textAlign,
        textBaseline,
        bgColor: buttonBgColor,
        color,
        font,
        padding,
        shadow: active ? {
          color: "rgba(0, 0, 0, 0.48)",
          blur: 6,
          offsetY: 3
        } : {},
        textOverflow,
        icons
      });
    });
  }

}

exports.ButtonColumn = ButtonColumn;

/***/ }),

/***/ "./columns/type/CheckColumn.js":
/*!*************************************!*\
  !*** ./columns/type/CheckColumn.js ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckColumn = void 0;

const BaseColumn_1 = __webpack_require__(/*! ./BaseColumn */ "./columns/type/BaseColumn.js");

const CheckStyle_1 = __webpack_require__(/*! ../style/CheckStyle */ "./columns/style/CheckStyle.js");

const symbolManager_1 = __webpack_require__(/*! ../../internal/symbolManager */ "./internal/symbolManager.js");

const utils_1 = __webpack_require__(/*! ../utils */ "./columns/utils/index.js");

const CHECK_COLUMN_STATE_ID = (0, symbolManager_1.getCheckColumnStateId)();

class CheckColumn extends BaseColumn_1.BaseColumn {
  get StyleClass() {
    return CheckStyle_1.CheckStyle;
  }

  clone() {
    return new CheckColumn(this);
  }

  convertInternal(value) {
    return (0, utils_1.toBoolean)(value);
  }

  drawInternal(value, context, style, helper, grid, {
    drawCellBase
  }) {
    var _a;

    const {
      textAlign,
      textBaseline,
      borderColor,
      checkBgColor,
      uncheckBgColor,
      bgColor
    } = style;

    if (bgColor) {
      drawCellBase({
        bgColor
      });
    }

    const {
      col,
      row
    } = context;
    const range = grid.getCellRange(col, row);
    const cellKey = `${range.start.col}:${range.start.row}`;
    const elapsed = (_a = grid[CHECK_COLUMN_STATE_ID]) === null || _a === void 0 ? void 0 : _a.elapsed[cellKey];
    const opt = {
      textAlign,
      textBaseline,
      borderColor,
      checkBgColor,
      uncheckBgColor
    };

    if (elapsed != null) {
      opt.animElapsedTime = elapsed;
    }

    helper.checkbox(value, context, opt);
  }

}

exports.CheckColumn = CheckColumn;

/***/ }),

/***/ "./columns/type/Column.js":
/*!********************************!*\
  !*** ./columns/type/Column.js ***!
  \********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Column = void 0;

const utils = __importStar(__webpack_require__(/*! ./columnUtils */ "./columns/type/columnUtils.js"));

const BaseColumn_1 = __webpack_require__(/*! ./BaseColumn */ "./columns/type/BaseColumn.js");

const Style_1 = __webpack_require__(/*! ../style/Style */ "./columns/style/Style.js");

class Column extends BaseColumn_1.BaseColumn {
  get StyleClass() {
    return Style_1.Style;
  }

  clone() {
    return new Column(this);
  }

  drawInternal(value, context, style, helper, _grid, {
    drawCellBase,
    getIcon
  }) {
    const {
      textAlign,
      textBaseline,
      color,
      font,
      bgColor,
      padding,
      textOverflow
    } = style;

    if (bgColor) {
      drawCellBase({
        bgColor
      });
    }

    const textValue = value != null ? String(value) : "";
    helper.testFontLoad(font, textValue, context);
    utils.loadIcons(getIcon(), context, helper, (icons, context) => {
      helper.text(textValue, context, {
        textAlign,
        textBaseline,
        color,
        font,
        padding,
        textOverflow,
        icons
      });
    });
  }

}

exports.Column = Column;

/***/ }),

/***/ "./columns/type/IconColumn.js":
/*!************************************!*\
  !*** ./columns/type/IconColumn.js ***!
  \************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconColumn = void 0;

const icons = __importStar(__webpack_require__(/*! ../../internal/icons */ "./internal/icons.js"));

const Column_1 = __webpack_require__(/*! ./Column */ "./columns/type/Column.js");

const IconStyle_1 = __webpack_require__(/*! ../style/IconStyle */ "./columns/style/IconStyle.js");

function repeatArray(val, count) {
  if (count === Infinity) {
    count = 0;
  }

  const a = [];

  for (let i = 0; i < count; i++) {
    a.push(val);
  }

  return a;
}

class IconColumn extends Column_1.Column {
  constructor(option = {}) {
    super(option);
    this._tagName = option.tagName || "i";
    this._className = option.className;
    this._content = option.content;
    this._name = option.name;
    this._iconWidth = option.iconWidth;
  }

  get StyleClass() {
    return IconStyle_1.IconStyle;
  }

  clone() {
    return new IconColumn(this);
  }

  drawInternal(value, context, style, helper, grid, info) {
    const num = Number(value);

    if (!isNaN(num)) {
      const icon = {};
      icons.iconPropKeys.forEach(k => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        icon[k] = style[k];
      });
      icon.className = this._className;
      icon.tagName = this._tagName;

      if (this._content) {
        icon.content = this._content;
      }

      icon.name = this._name;

      if (this._iconWidth) {
        icon.width = this._iconWidth;
      }

      info.getIcon = () => repeatArray(icon, num);
    } else {
      info.getIcon = () => null;
    }

    super.drawInternal("", context, style, helper, grid, info);
  }

}

exports.IconColumn = IconColumn;

/***/ }),

/***/ "./columns/type/ImageColumn.js":
/*!*************************************!*\
  !*** ./columns/type/ImageColumn.js ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageColumn = void 0;

const BaseColumn_1 = __webpack_require__(/*! ./BaseColumn */ "./columns/type/BaseColumn.js");

const ImageStyle_1 = __webpack_require__(/*! ../style/ImageStyle */ "./columns/style/ImageStyle.js");

const canvases_1 = __webpack_require__(/*! ../../internal/canvases */ "./internal/canvases.js");

const imgs_1 = __webpack_require__(/*! ../../internal/imgs */ "./internal/imgs.js");

const MAX_LRU_CACHE_SIZE = 50;

function getImage(url) {
  return (0, imgs_1.getCacheOrLoad)("ImageColumn", MAX_LRU_CACHE_SIZE, url);
}

function calcKeepAspectRatioSize(width, height, maxWidth, maxHeight) {
  let newWidth = width;
  let newHeight = height;

  if (newWidth > maxWidth) {
    newWidth = maxWidth;
    newHeight = newWidth * height / width;
  }

  if (newHeight > maxHeight) {
    newHeight = maxHeight;
    newWidth = newHeight * width / height;
  }

  return {
    width: newWidth,
    height: newHeight
  };
}

class ImageColumn extends BaseColumn_1.BaseColumn {
  get StyleClass() {
    return ImageStyle_1.ImageStyle;
  }

  onDrawCell(cellValue, info, context, grid) {
    return super.onDrawCell(getImage(cellValue), info, context, grid);
  }

  clone() {
    return new ImageColumn(this);
  }

  drawInternal(value, context, style, helper, _grid, {
    drawCellBase
  }) {
    if (value) {
      const {
        textAlign,
        textBaseline,
        margin,
        bgColor
      } = style;

      if (bgColor) {
        drawCellBase({
          bgColor
        });
      }

      helper.drawWithClip(context, ctx => {
        ctx.textAlign = textAlign;
        ctx.textBaseline = textBaseline;
        const rect = context.getRect();

        if (style.imageSizing === "keep-aspect-ratio") {
          const {
            width,
            height
          } = calcKeepAspectRatioSize(value.width, value.height, rect.width - margin * 2, rect.height - margin * 2);
          const pos = (0, canvases_1.calcStartPosition)(ctx, rect, width, height, {
            offset: margin
          });
          ctx.drawImage(value, 0, 0, value.width, value.height, pos.x, pos.y, width, height);
        } else {
          ctx.drawImage(value, 0, 0, value.width, value.height, rect.left + margin, rect.top + margin, rect.width - margin * 2, rect.height - margin * 2);
        }
      });
    }
  }

}

exports.ImageColumn = ImageColumn;

/***/ }),

/***/ "./columns/type/MenuColumn.js":
/*!************************************!*\
  !*** ./columns/type/MenuColumn.js ***!
  \************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuColumn = void 0;

const utils = __importStar(__webpack_require__(/*! ./columnUtils */ "./columns/type/columnUtils.js"));

const BaseColumn_1 = __webpack_require__(/*! ./BaseColumn */ "./columns/type/BaseColumn.js");

const MenuStyle_1 = __webpack_require__(/*! ../style/MenuStyle */ "./columns/style/MenuStyle.js");

const menu_items_1 = __webpack_require__(/*! ../../internal/menu-items */ "./internal/menu-items.js");

class MenuColumn extends BaseColumn_1.BaseColumn {
  constructor(option = {}) {
    super(option);
    this._options = (0, menu_items_1.normalize)(option.options);
  }

  get StyleClass() {
    return MenuStyle_1.MenuStyle;
  }

  clone() {
    return new MenuColumn(this);
  }

  get options() {
    return this._options;
  }

  withOptions(options) {
    const c = this.clone();
    c._options = (0, menu_items_1.normalize)(options);
    return c;
  }

  drawInternal(value, context, style, helper, _grid, {
    drawCellBase,
    getIcon
  }) {
    const {
      textAlign,
      textBaseline,
      font,
      bgColor,
      padding,
      textOverflow,
      appearance
    } = style;
    let {
      color
    } = style;

    if (bgColor) {
      drawCellBase({
        bgColor
      });
    }

    const convertedValue = this._convertInternal(value);

    const text = convertedValue != null ? String(convertedValue) : "";
    helper.testFontLoad(font, text, context);
    utils.loadIcons(getIcon(), context, helper, (icons, context) => {
      const basePadding = helper.toBoxPixelArray(padding || 0, context, font);
      const textPadding = basePadding.slice(0);
      textPadding[1] += 26; // icon padding

      const iconPadding = basePadding.slice(0);
      iconPadding[1] += 8;

      if (color == null && (value == null || value === "")) {
        color = "rgba(0, 0, 0, .38)";
      }

      helper.text(text, context, {
        textAlign,
        textBaseline,
        color,
        font,
        padding: textPadding,
        textOverflow,
        icons
      });

      if (appearance === "menulist-button") {
        // draw dropdown arrow icon
        helper.text("", context, {
          textAlign: "right",
          textBaseline,
          color,
          font,
          icons: [{
            path: "M0 2 5 7 10 2z",
            width: 10,
            color: "rgba(0, 0, 0, .54)"
          }],
          padding: iconPadding
        });
      } else if (appearance !== "none") {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        console.warn(`unsupported appearance:${appearance}`);
      }
    });
  }

  convertInternal(value) {
    return value;
  }

  _convertInternal(value) {
    const options = this._options;

    for (let i = 0; i < options.length; i++) {
      const option = options[i];

      if (option.value === value) {
        value = option.label;
        break;
      }
    }

    return super.convertInternal(value);
  }

  getCopyCellValue(value) {
    return this._convertInternal(value);
  }

}

exports.MenuColumn = MenuColumn;

/***/ }),

/***/ "./columns/type/MultilineTextColumn.js":
/*!*********************************************!*\
  !*** ./columns/type/MultilineTextColumn.js ***!
  \*********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultilineTextColumn = void 0;

const utils = __importStar(__webpack_require__(/*! ./columnUtils */ "./columns/type/columnUtils.js"));

const BaseColumn_1 = __webpack_require__(/*! ./BaseColumn */ "./columns/type/BaseColumn.js");

const MultilineTextStyle_1 = __webpack_require__(/*! ../style/MultilineTextStyle */ "./columns/style/MultilineTextStyle.js");

class MultilineTextColumn extends BaseColumn_1.BaseColumn {
  constructor(option = {}) {
    super(option);
  }

  get StyleClass() {
    return MultilineTextStyle_1.MultilineTextStyle;
  }

  clone() {
    return new MultilineTextColumn(this);
  }

  drawInternal(value, context, style, helper, _grid, {
    drawCellBase,
    getIcon
  }) {
    const {
      textAlign,
      textBaseline,
      color,
      font,
      bgColor,
      padding,
      lineHeight,
      autoWrapText,
      lineClamp,
      textOverflow
    } = style;

    if (bgColor) {
      drawCellBase({
        bgColor
      });
    }

    const textValue = value != null ? String(value) : "";
    const multilines = textValue.replace(/\r?\n/g, "\n").replace(/\r/g, "\n").split("\n");
    helper.testFontLoad(font, textValue, context);
    utils.loadIcons(getIcon(), context, helper, (icons, context) => {
      helper.multilineText(multilines, context, {
        textAlign,
        textBaseline,
        color,
        font,
        padding,
        lineHeight,
        autoWrapText,
        lineClamp,
        textOverflow,
        icons
      });
    });
  }

}

exports.MultilineTextColumn = MultilineTextColumn;

/***/ }),

/***/ "./columns/type/NumberColumn.js":
/*!**************************************!*\
  !*** ./columns/type/NumberColumn.js ***!
  \**************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberColumn = void 0;

const Column_1 = __webpack_require__(/*! ./Column */ "./columns/type/Column.js");

const NumberStyle_1 = __webpack_require__(/*! ../style/NumberStyle */ "./columns/style/NumberStyle.js");

let defaultFotmat;

class NumberColumn extends Column_1.Column {
  static get defaultFotmat() {
    return defaultFotmat || (defaultFotmat = new Intl.NumberFormat());
  }

  static set defaultFotmat(fmt) {
    defaultFotmat = fmt;
  }

  constructor(option = {}) {
    super(option);
    this._format = option.format;
  }

  get StyleClass() {
    return NumberStyle_1.NumberStyle;
  }

  clone() {
    return new NumberColumn(this);
  }

  get format() {
    return this._format;
  }

  withFormat(format) {
    const c = this.clone();
    c._format = format;
    return c;
  }

  convertInternal(value) {
    const num = Number(value);

    if (isNaN(num)) {
      const convertedValue = super.convertInternal(value);
      return convertedValue != null ? String(convertedValue) : "";
    }

    const format = this._format || NumberColumn.defaultFotmat;
    return format.format(num);
  }

}

exports.NumberColumn = NumberColumn;

/***/ }),

/***/ "./columns/type/PercentCompleteBarColumn.js":
/*!**************************************************!*\
  !*** ./columns/type/PercentCompleteBarColumn.js ***!
  \**************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PercentCompleteBarColumn = void 0;

const utils_1 = __webpack_require__(/*! ../../internal/utils */ "./internal/utils.js");

const Column_1 = __webpack_require__(/*! ./Column */ "./columns/type/Column.js");

const PercentCompleteBarStyle_1 = __webpack_require__(/*! ../style/PercentCompleteBarStyle */ "./columns/style/PercentCompleteBarStyle.js");

const MARGIN = 2;

class PercentCompleteBarColumn extends Column_1.Column {
  constructor(option = {}) {
    super(option);
    this._min = option.min || 0;
    this._max = option.max || this._min + 100;

    this._formatter = option.formatter || (v => v);
  }

  get StyleClass() {
    return PercentCompleteBarStyle_1.PercentCompleteBarStyle;
  }

  clone() {
    return new PercentCompleteBarColumn(this);
  }

  drawInternal(value, context, style, helper, grid, info) {
    super.drawInternal(this._formatter(value), context, style, helper, grid, info);
    const {
      barColor,
      barBgColor,
      barHeight
    } = style;
    let textValue = value != null ? String(value) : "";

    if (utils_1.str.endsWith(textValue, "%")) {
      textValue = textValue.slice(0, -1);
    }

    const num = Number(textValue);

    if (isNaN(num)) {
      return;
    }

    const rate = num < this._min ? 0 : num > this._max ? 1 : (num - this._min) / (this._max - this._min);
    helper.drawWithClip(context, ctx => {
      const rect = context.getRect();
      const barMaxWidth = rect.width - MARGIN * 2 - 1;
      /*罫線*/

      const barTop = rect.bottom - MARGIN - barHeight - 1;
      /*罫線*/

      const barLeft = rect.left + MARGIN;
      ctx.fillStyle = (0, utils_1.getOrApply)(barBgColor, rate * 100) || "#f0f3f5";
      ctx.beginPath();
      ctx.rect(barLeft, barTop, barMaxWidth, barHeight);
      ctx.fill();
      const barSize = Math.min(barMaxWidth * rate, barMaxWidth);
      ctx.fillStyle = (0, utils_1.getOrApply)(barColor, rate * 100) || "#20a8d8";
      ctx.beginPath();
      ctx.rect(barLeft, barTop, barSize, barHeight);
      ctx.fill();
    });
  }

}

exports.PercentCompleteBarColumn = PercentCompleteBarColumn;

/***/ }),

/***/ "./columns/type/RadioColumn.js":
/*!*************************************!*\
  !*** ./columns/type/RadioColumn.js ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioColumn = void 0;

const BaseColumn_1 = __webpack_require__(/*! ./BaseColumn */ "./columns/type/BaseColumn.js");

const RadioStyle_1 = __webpack_require__(/*! ../style/RadioStyle */ "./columns/style/RadioStyle.js");

const symbolManager_1 = __webpack_require__(/*! ../../internal/symbolManager */ "./internal/symbolManager.js");

const utils_1 = __webpack_require__(/*! ../utils */ "./columns/utils/index.js");

const RADIO_COLUMN_STATE_ID = (0, symbolManager_1.getRadioColumnStateId)();

class RadioColumn extends BaseColumn_1.BaseColumn {
  get StyleClass() {
    return RadioStyle_1.RadioStyle;
  }

  clone() {
    return new RadioColumn(this);
  }

  convertInternal(value) {
    return (0, utils_1.toBoolean)(value);
  }

  drawInternal(value, context, style, helper, grid, {
    drawCellBase
  }) {
    var _a;

    const {
      textAlign,
      textBaseline,
      checkColor,
      uncheckBorderColor,
      checkBorderColor,
      uncheckBgColor,
      checkBgColor,
      bgColor
    } = style;

    if (bgColor) {
      drawCellBase({
        bgColor
      });
    }

    const {
      col,
      row
    } = context;
    const range = grid.getCellRange(col, row);
    const cellKey = `${range.start.col}:${range.start.row}`;
    const elapsed = (_a = grid[RADIO_COLUMN_STATE_ID]) === null || _a === void 0 ? void 0 : _a.elapsed[cellKey];
    const opt = {
      textAlign,
      textBaseline,
      checkColor,
      uncheckBorderColor,
      checkBorderColor,
      uncheckBgColor,
      checkBgColor
    };

    if (elapsed != null) {
      opt.animElapsedTime = elapsed;
    }

    helper.radioButton(value, context, opt);
  }

}

exports.RadioColumn = RadioColumn;

/***/ }),

/***/ "./columns/type/columnUtils.js":
/*!*************************************!*\
  !*** ./columns/type/columnUtils.js ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadIcons = void 0;

const icons = __importStar(__webpack_require__(/*! ../../internal/icons */ "./internal/icons.js"));

const utils_1 = __webpack_require__(/*! ../../internal/utils */ "./internal/utils.js");

function loadIcons(icon, context, helper, callback) {
  let argIcon = undefined;

  if (icon) {
    if ((0, utils_1.isPromise)(icon)) {
      icon.then(i => {
        loadIcons(i, context.toCurrentContext(), helper, callback);
      });
    } else {
      const iconList = icons.toNormalizeArray(icon);
      iconList.forEach(i => {
        if (i.font && i.content) {
          helper.testFontLoad(i.font, i.content, context);
        }
      });
      argIcon = iconList;
    }
  }

  callback(argIcon, context);
}

exports.loadIcons = loadIcons;

/***/ }),

/***/ "./columns/utils/index.js":
/*!********************************!*\
  !*** ./columns/utils/index.js ***!
  \********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toBoolean = void 0;

function toBoolean(val) {
  if (typeof val === "string") {
    if (val === "false") {
      return false;
    } else if (val === "off") {
      return false;
    } else if (/^0+$/.exec(val)) {
      return false;
    }
  }

  return Boolean(val);
}

exports.toBoolean = toBoolean;

/***/ }),

/***/ "./core.js":
/*!*****************!*\
  !*** ./core.js ***!
  \*****************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EVENT_TYPE = exports.DrawGrid = void 0;

const DrawGrid_1 = __webpack_require__(/*! ./core/DrawGrid */ "./core/DrawGrid.js");

Object.defineProperty(exports, "DrawGrid", {
  enumerable: true,
  get: function () {
    return DrawGrid_1.DrawGrid;
  }
});

const DG_EVENT_TYPE_1 = __webpack_require__(/*! ./core/DG_EVENT_TYPE */ "./core/DG_EVENT_TYPE.js");

Object.defineProperty(exports, "EVENT_TYPE", {
  enumerable: true,
  get: function () {
    return DG_EVENT_TYPE_1.DG_EVENT_TYPE;
  }
});

/***/ }),

/***/ "./core/DG_EVENT_TYPE.js":
/*!*******************************!*\
  !*** ./core/DG_EVENT_TYPE.js ***!
  \*******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DG_EVENT_TYPE = void 0;
/**
 * DrawGrid event types
 * @classdesc cheetahGrid.core.EVENT_TYPE
 * @memberof cheetahGrid.core
 */

exports.DG_EVENT_TYPE = {
  CLICK_CELL: "click_cell",
  DBLCLICK_CELL: "dblclick_cell",
  DBLTAP_CELL: "dbltap_cell",
  MOUSEDOWN_CELL: "mousedown_cell",
  MOUSEUP_CELL: "mouseup_cell",
  SELECTED_CELL: "selected_cell",
  KEYDOWN: "keydown",
  MOUSEMOVE_CELL: "mousemove_cell",
  MOUSEENTER_CELL: "mouseenter_cell",
  MOUSELEAVE_CELL: "mouseleave_cell",
  MOUSEOVER_CELL: "mouseover_cell",
  MOUSEOUT_CELL: "mouseout_cell",
  TOUCHSTART_CELL: "touchstart_cell",
  CONTEXTMENU_CELL: "contextmenu_cell",
  INPUT_CELL: "input_cell",
  PASTE_CELL: "paste_cell",
  DELETE_CELL: "delete_cell",
  EDITABLEINPUT_CELL: "editableinput_cell",
  MODIFY_STATUS_EDITABLEINPUT_CELL: "modify_status_editableinput_cell",
  RESIZE_COLUMN: "resize_column",
  SCROLL: "scroll",
  FOCUS_GRID: "focus_grid",
  BLUR_GRID: "blur_grid"
};

/***/ }),

/***/ "./core/DrawGrid.js":
/*!**************************!*\
  !*** ./core/DrawGrid.js ***!
  \**************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DrawGrid = void 0;

const calc = __importStar(__webpack_require__(/*! ../internal/calc */ "./internal/calc.js"));

const hiDPI = __importStar(__webpack_require__(/*! ../internal/hiDPI */ "./internal/hiDPI.js"));

const style = __importStar(__webpack_require__(/*! ../internal/style */ "./internal/style.js"));

const utils_1 = __webpack_require__(/*! ../internal/utils */ "./internal/utils.js");

const paste_utils_1 = __webpack_require__(/*! ../internal/paste-utils */ "./internal/paste-utils.js");

const DG_EVENT_TYPE_1 = __webpack_require__(/*! ./DG_EVENT_TYPE */ "./core/DG_EVENT_TYPE.js");

const EventHandler_1 = __webpack_require__(/*! ../internal/EventHandler */ "./internal/EventHandler.js");

const EventTarget_1 = __webpack_require__(/*! ./EventTarget */ "./core/EventTarget.js");

const NumberMap_1 = __webpack_require__(/*! ../internal/NumberMap */ "./internal/NumberMap.js");

const Rect_1 = __webpack_require__(/*! ../internal/Rect */ "./internal/Rect.js");

const Scrollable_1 = __webpack_require__(/*! ../internal/Scrollable */ "./internal/Scrollable.js");

const canvases_1 = __webpack_require__(/*! ../internal/canvases */ "./internal/canvases.js"); //protected symbol


const symbolManager_1 = __webpack_require__(/*! ../internal/symbolManager */ "./internal/symbolManager.js");

const {
  /** @private */
  isTouchEvent,

  /** @private */
  getMouseButtons,

  /** @private */
  getKeyCode,

  /** @private */
  cancel: cancelEvent
} = utils_1.event;
/** @private */

const _ = (0, symbolManager_1.getProtectedSymbol)();
/** @private */


function createRootElement() {
  const element = document.createElement("div");
  element.classList.add("cheetah-grid");
  return element;
}
/** @private */


const KEY_BS = 8;
/** @private */

const KEY_TAB = 9;
/** @private */

const KEY_ENTER = 13;
/** @private */

const KEY_END = 35;
/** @private */

const KEY_HOME = 36;
/** @private */

const KEY_LEFT = 37;
/** @private */

const KEY_UP = 38;
/** @private */

const KEY_RIGHT = 39;
/** @private */

const KEY_DOWN = 40;
/** @private */

const KEY_DEL = 46;
/** @private */

const KEY_ALPHA_A = 65;
/** @private */

const KEY_ALPHA_C = 67;
/** @private */

const KEY_ALPHA_V = 86; //private methods

/** @private */

function _vibrate(e) {
  if (navigator.vibrate && isTouchEvent(e)) {
    navigator.vibrate(50);
  }
}
/** @private */


function _getTargetRowAt(absoluteY) {
  const internal = this.getTargetRowAtInternal(absoluteY);

  if (internal != null) {
    return internal;
  }

  const findBefore = (startRow, startBottom) => {
    let bottom = startBottom;

    for (let row = startRow; row >= 0; row--) {
      const height = _getRowHeight.call(this, row);

      const top = bottom - height;

      if (top <= absoluteY && absoluteY < bottom) {
        return {
          top,
          row
        };
      }

      bottom = top;
    }

    return null;
  };

  const findAfter = (startRow, startBottom) => {
    let top = startBottom - _getRowHeight.call(this, startRow);

    const {
      rowCount
    } = this[_];

    for (let row = startRow; row < rowCount; row++) {
      const height = _getRowHeight.call(this, row);

      const bottom = top + height;

      if (top <= absoluteY && absoluteY < bottom) {
        return {
          top,
          row
        };
      }

      top = bottom;
    }

    return null;
  };

  const candidateRow = Math.min(Math.ceil(absoluteY / this[_].defaultRowHeight), this.rowCount - 1);

  const bottom = _getRowsHeight.call(this, 0, candidateRow);

  if (absoluteY >= bottom) {
    return findAfter(candidateRow, bottom);
  } else {
    return findBefore(candidateRow, bottom);
  }
}
/** @private */


function _getTargetColAt(grid, absoluteX) {
  let left = 0;
  const {
    colCount
  } = grid[_];

  for (let col = 0; col < colCount; col++) {
    const width = _getColWidth(grid, col);

    const right = left + width;

    if (right > absoluteX) {
      return {
        left,
        col
      };
    }

    left = right;
  }

  return null;
}
/** @private */


function _getTargetFrozenRowAt(grid, absoluteY) {
  if (!grid[_].frozenRowCount) {
    return null;
  }

  let {
    top
  } = grid[_].scroll;
  const rowCount = grid[_].frozenRowCount;

  for (let row = 0; row < rowCount; row++) {
    const height = _getRowHeight.call(grid, row);

    const bottom = top + height;

    if (bottom > absoluteY) {
      return {
        top,
        row
      };
    }

    top = bottom;
  }

  return null;
}
/** @private */


function _getTargetFrozenColAt(grid, absoluteX) {
  if (!grid[_].frozenColCount) {
    return null;
  }

  let {
    left
  } = grid[_].scroll;
  const colCount = grid[_].frozenColCount;

  for (let col = 0; col < colCount; col++) {
    const width = _getColWidth(grid, col);

    const right = left + width;

    if (right > absoluteX) {
      return {
        left,
        col
      };
    }

    left = right;
  }

  return null;
}
/** @private */


function _getFrozenRowsRect(grid) {
  if (!grid[_].frozenRowCount) {
    return null;
  }

  const {
    top
  } = grid[_].scroll;
  let height = 0;
  const rowCount = grid[_].frozenRowCount;

  for (let row = 0; row < rowCount; row++) {
    height += _getRowHeight.call(grid, row);
  }

  return new Rect_1.Rect(grid[_].scroll.left, top, grid[_].canvas.width, height);
}
/** @private */


function _getFrozenColsRect(grid) {
  if (!grid[_].frozenColCount) {
    return null;
  }

  const {
    left
  } = grid[_].scroll;
  let width = 0;
  const colCount = grid[_].frozenColCount;

  for (let col = 0; col < colCount; col++) {
    width += _getColWidth(grid, col);
  }

  return new Rect_1.Rect(left, grid[_].scroll.top, width, grid[_].canvas.height);
}
/** @private */


function _getCellDrawing(grid, col, row) {
  if (!grid[_].drawCells[row]) {
    return null;
  }

  return grid[_].drawCells[row][col];
}
/** @private */


function _putCellDrawing(grid, col, row, context) {
  if (!grid[_].drawCells[row]) {
    grid[_].drawCells[row] = {};
  }

  grid[_].drawCells[row][col] = context;
}
/** @private */


function _removeCellDrawing(grid, col, row) {
  if (!grid[_].drawCells[row]) {
    return;
  }

  delete grid[_].drawCells[row][col];

  if (Object.keys(grid[_].drawCells[row]).length === 0) {
    delete grid[_].drawCells[row];
  }
}
/** @private */


function _drawCell(ctx, col, absoluteLeft, width, row, absoluteTop, height, visibleRect, skipAbsoluteTop, skipAbsoluteLeft, drawLayers) {
  const rect = new Rect_1.Rect(absoluteLeft - visibleRect.left, absoluteTop - visibleRect.top, width, height);
  const drawRect = Rect_1.Rect.bounds(Math.max(absoluteLeft, skipAbsoluteLeft) - visibleRect.left, Math.max(absoluteTop, skipAbsoluteTop) - visibleRect.top, rect.right, rect.bottom);

  if (drawRect.height > 0 && drawRect.width > 0) {
    ctx.save();

    try {
      const cellDrawing = _getCellDrawing(this, col, row);

      if (cellDrawing) {
        cellDrawing.cancel();
      }

      const dcContext = new DrawCellContext(col, row, ctx, rect, drawRect, !!cellDrawing, this[_].selection, drawLayers);
      const p = this.onDrawCell(col, row, dcContext);

      if ((0, utils_1.isPromise)(p)) {
        //遅延描画
        _putCellDrawing(this, col, row, dcContext);

        const pCol = col;

        dcContext._delayMode(this, () => {
          _removeCellDrawing(this, pCol, row);
        });

        p.then(() => {
          dcContext.terminate();
        });
      }
    } finally {
      ctx.restore();
    }
  }
}
/** @private */


function _drawRow(grid, ctx, initFrozenCol, initCol, drawRight, row, absoluteTop, height, visibleRect, skipAbsoluteTop, drawLayers) {
  const {
    colCount
  } = grid[_];

  const drawOuter = (col, absoluteLeft) => {
    //データ範囲外の描画
    if (col >= colCount - 1 && grid[_].canvas.width > absoluteLeft - visibleRect.left) {
      const outerLeft = absoluteLeft - visibleRect.left;
      ctx.save();
      ctx.beginPath();
      ctx.fillStyle = grid.underlayBackgroundColor || "#F6F6F6";
      ctx.rect(outerLeft, absoluteTop - visibleRect.top, grid[_].canvas.width - outerLeft, height);
      ctx.fill();
      ctx.restore();
    }
  };

  let skipAbsoluteLeft = 0;

  if (initFrozenCol) {
    let absoluteLeft = initFrozenCol.left;
    const count = grid[_].frozenColCount;

    for (let {
      col
    } = initFrozenCol; col < count; col++) {
      const width = _getColWidth(grid, col);

      _drawCell.call(grid, ctx, col, absoluteLeft, width, row, absoluteTop, height, visibleRect, skipAbsoluteTop, 0, drawLayers);

      absoluteLeft += width;

      if (drawRight <= absoluteLeft) {
        //描画範囲外（終了）
        drawOuter(col, absoluteLeft);
        return;
      }
    }

    skipAbsoluteLeft = absoluteLeft;
  }

  let absoluteLeft = initCol.left;

  for (let {
    col
  } = initCol; col < colCount; col++) {
    const width = _getColWidth(grid, col);

    _drawCell.call(grid, ctx, col, absoluteLeft, width, row, absoluteTop, height, visibleRect, skipAbsoluteTop, skipAbsoluteLeft, drawLayers);

    absoluteLeft += width;

    if (drawRight <= absoluteLeft) {
      //描画範囲外（終了）
      drawOuter(col, absoluteLeft);
      return;
    }
  }

  drawOuter(colCount - 1, absoluteLeft);
}
/** @private */


function _getInitContext() {
  return this._getInitContext();
}
/** @private */


function _invalidateRect(grid, drawRect) {
  const visibleRect = _getVisibleRect(grid);

  const {
    rowCount
  } = grid[_];

  const ctx = _getInitContext.call(grid);

  const initRow = _getTargetRowAt.call(grid, Math.max(visibleRect.top, drawRect.top)) || {
    top: _getRowsHeight.call(grid, 0, rowCount - 1),
    row: rowCount
  };
  const initCol = _getTargetColAt(grid, Math.max(visibleRect.left, drawRect.left)) || {
    left: _getColsWidth(grid, 0, grid[_].colCount - 1),
    col: grid[_].colCount
  };
  const drawBottom = Math.min(visibleRect.bottom, drawRect.bottom);
  const drawRight = Math.min(visibleRect.right, drawRect.right);

  const initFrozenRow = _getTargetFrozenRowAt(grid, Math.max(visibleRect.top, drawRect.top));

  const initFrozenCol = _getTargetFrozenColAt(grid, Math.max(visibleRect.left, drawRect.left));

  const drawLayers = new DrawLayers();

  const drawOuter = (row, absoluteTop) => {
    //データ範囲外の描画
    if (row >= rowCount - 1 && grid[_].canvas.height > absoluteTop - visibleRect.top) {
      const outerTop = absoluteTop - visibleRect.top;
      ctx.save();
      ctx.beginPath();
      ctx.fillStyle = grid.underlayBackgroundColor || "#F6F6F6";
      ctx.rect(0, outerTop, grid[_].canvas.width, grid[_].canvas.height - outerTop);
      ctx.fill();
      ctx.restore();
    }
  };

  let skipAbsoluteTop = 0;

  if (initFrozenRow) {
    let absoluteTop = initFrozenRow.top;
    const count = grid[_].frozenRowCount;

    for (let {
      row
    } = initFrozenRow; row < count; row++) {
      const height = _getRowHeight.call(grid, row);

      _drawRow(grid, ctx, initFrozenCol, initCol, drawRight, row, absoluteTop, height, visibleRect, 0, drawLayers);

      absoluteTop += height;

      if (drawBottom <= absoluteTop) {
        //描画範囲外（終了）
        drawOuter(row, absoluteTop);
        drawLayers.draw(ctx);
        return;
      }
    }

    skipAbsoluteTop = absoluteTop;
  }

  let absoluteTop = initRow.top;

  for (let {
    row
  } = initRow; row < rowCount; row++) {
    const height = _getRowHeight.call(grid, row); //行の描画


    _drawRow(grid, ctx, initFrozenCol, initCol, drawRight, row, absoluteTop, height, visibleRect, skipAbsoluteTop, drawLayers);

    absoluteTop += height;

    if (drawBottom <= absoluteTop) {
      //描画範囲外（終了）
      drawOuter(row, absoluteTop);
      drawLayers.draw(ctx);
      return;
    }
  }

  drawOuter(rowCount - 1, absoluteTop);
  drawLayers.draw(ctx);
}
/** @private */


function _toPxWidth(grid, width) {
  return Math.round(calc.toPx(width, grid[_].calcWidthContext));
}
/** @private */


function _adjustColWidth(grid, col, orgWidth) {
  const limits = _getColWidthLimits(grid, col);

  return Math.max(_applyColWidthLimits(limits, orgWidth), 0);
}
/** @private */


function _applyColWidthLimits(limits, orgWidth) {
  if (!limits) {
    return orgWidth;
  }

  if (limits.min) {
    if (limits.min > orgWidth) {
      return limits.min;
    }
  }

  if (limits.max) {
    if (limits.max < orgWidth) {
      return limits.max;
    }
  }

  return orgWidth;
}
/**
 * Gets the definition of the column width.
 * @param {DrawGrid} grid grid instance
 * @param {number} col number of column
 * @returns {string|number} width definition
 * @private
 */


function _getColWidthDefine(grid, col) {
  const width = grid[_].colWidthsMap.get(col);

  if (width) {
    return width;
  }

  return grid.defaultColWidth;
}
/**
 * Gets the column width limits.
 * @param {DrawGrid} grid grid instance
 * @param {number} col number of column
 * @returns {object|null} the column width limits
 * @private
 */


function _getColWidthLimits(grid, col) {
  const limit = grid[_].colWidthsLimit[col];

  if (!limit) {
    return null;
  }

  const result = {};

  if (limit.min) {
    result.min = _toPxWidth(grid, limit.min);
    result.minDef = limit.min;
  }

  if (limit.max) {
    result.max = _toPxWidth(grid, limit.max);
    result.maxDef = limit.max;
  }

  return result;
}
/**
 * Checks if the given width definition is `auto`.
 * @param {string|number} width width definition to check
 * @returns {boolean} `true ` if the given width definition is `auto`
 * @private
 */


function isAutoDefine(width) {
  return Boolean(width && typeof width === "string" && width.toLowerCase() === "auto");
}
/**
 * Creates a formula to calculate the auto width.
 * @param {DrawGrid} grid grid instance
 * @returns {string} formula
 * @private
 */


function _calcAutoColWidthExpr(grid, shortCircuit = true) {
  const fullWidth = grid[_].calcWidthContext.full;
  let sumMin = 0;
  const others = [];
  let autoCount = 0;
  const hasLimitsOnAuto = [];

  for (let col = 0; col < grid[_].colCount; col++) {
    const def = _getColWidthDefine(grid, col);

    const limits = _getColWidthLimits(grid, col);

    if (isAutoDefine(def)) {
      if (limits) {
        hasLimitsOnAuto.push(limits);

        if (limits.min) {
          sumMin += limits.min;
        }
      }

      autoCount++;
    } else {
      let expr = def;

      if (limits) {
        const orgWidth = _toPxWidth(grid, expr);

        const newWidth = _applyColWidthLimits(limits, orgWidth);

        if (orgWidth !== newWidth) {
          expr = `${newWidth}px`;
        }

        sumMin += newWidth;
      }

      others.push(expr);
    }

    if (shortCircuit && sumMin > fullWidth) {
      // Returns 0px because it has consumed the full width.
      return "0px";
    }
  }

  if (hasLimitsOnAuto.length && others.length) {
    const autoPx = (fullWidth - _toPxWidth(grid, `calc(${others.map(c => typeof c === "number" ? `${c}px` : c).join(" + ")})`)) / autoCount;
    hasLimitsOnAuto.forEach(limits => {
      if (limits.min && autoPx < limits.min) {
        others.push(limits.minDef);
        autoCount--;
      } else if (limits.max && limits.max < autoPx) {
        others.push(limits.maxDef);
        autoCount--;
      }
    });

    if (shortCircuit && autoCount <= 0) {
      return `${autoPx}px`;
    }
  }

  if (others.length) {
    const strDefs = [];
    let num = 0;
    others.forEach(c => {
      if (typeof c === "number") {
        num += c;
      } else {
        strDefs.push(c);
      }
    });
    strDefs.push(`${num}px`);
    return `calc((100% - (${strDefs.join(" + ")})) / ${autoCount})`;
  } else {
    return `${100 / autoCount}%`;
  }
}
/**
 * Calculate the pixels of width from the definition of width.
 * @param {DrawGrid} grid grid instance
 * @param {string|number} width width definition
 * @returns {number} the pixels of width
 * @private
 */


function _colWidthDefineToPxWidth(grid, width) {
  if (isAutoDefine(width)) {
    return _toPxWidth(grid, _calcAutoColWidthExpr(grid));
  }

  return _toPxWidth(grid, width);
}
/** @private */


function _getColWidth(grid, col) {
  const width = _getColWidthDefine(grid, col);

  return _adjustColWidth(grid, col, _colWidthDefineToPxWidth(grid, width));
}
/** @private */


function _setColWidth(grid, col, width) {
  if (width != null) {
    grid[_].colWidthsMap.put(col, width);
  } else {
    grid[_].colWidthsMap.remove(col);
  }
}
/**
 * Overwrites the definition of a column whose width is set to `auto` with the current auto width formula.
 * @param {DrawGrid} grid grid instance
 * @returns {void}
 * @private
 */


function _storeAutoColWidthExprs(grid) {
  let expr = null;

  for (let col = 0; col < grid[_].colCount; col++) {
    const def = _getColWidthDefine(grid, col);

    if (isAutoDefine(def)) {
      _setColWidth(grid, col, expr || (expr = _calcAutoColWidthExpr(grid, false)));
    }
  }
}
/** @private */


function _getColsWidth(grid, startCol, endCol) {
  const defaultColPxWidth = _colWidthDefineToPxWidth(grid, grid.defaultColWidth);

  const colCount = endCol - startCol + 1;
  let w = defaultColPxWidth * colCount;

  grid[_].colWidthsMap.each(startCol, endCol, (width, col) => {
    w += _adjustColWidth(grid, col, _colWidthDefineToPxWidth(grid, width)) - defaultColPxWidth;
  });

  for (let col = startCol; col <= endCol; col++) {
    if (grid[_].colWidthsMap.has(col)) {
      continue;
    }

    const adj = _adjustColWidth(grid, col, defaultColPxWidth);

    if (adj !== defaultColPxWidth) {
      w += adj - defaultColPxWidth;
    }
  }

  return w;
}
/** @private */


function _getRowHeight(row) {
  const internal = this.getRowHeightInternal(row);

  if (internal != null) {
    return internal;
  }

  const height = this[_].rowHeightsMap.get(row);

  if (height) {
    return height;
  }

  return this[_].defaultRowHeight;
}
/** @private */


function _setRowHeight(grid, row, height) {
  if (height != null) {
    grid[_].rowHeightsMap.put(row, height);
  } else {
    grid[_].rowHeightsMap.remove(row);
  }
}
/** @private */


function _getRowsHeight(startRow, endRow) {
  const internal = this.getRowsHeightInternal(startRow, endRow);

  if (internal != null) {
    return internal;
  }

  const rowCount = endRow - startRow + 1;
  let h = this[_].defaultRowHeight * rowCount;

  this[_].rowHeightsMap.each(startRow, endRow, height => {
    h += height - this[_].defaultRowHeight;
  });

  return h;
}
/** @private */


function _getScrollWidth(grid) {
  return _getColsWidth(grid, 0, grid[_].colCount - 1);
}
/** @private */


function _getScrollHeight(row) {
  const internal = this.getScrollHeightInternal(row);

  if (internal != null) {
    return internal;
  }

  let h = this[_].defaultRowHeight * this[_].rowCount;

  this[_].rowHeightsMap.each(0, this[_].rowCount - 1, height => {
    h += height - this[_].defaultRowHeight;
  });

  return h;
}
/** @private */


function _onScroll(grid, _e) {
  const lastLeft = grid[_].scroll.left;
  const lastTop = grid[_].scroll.top;
  const moveX = grid[_].scrollable.scrollLeft - lastLeft;
  const moveY = grid[_].scrollable.scrollTop - lastTop; //次回計算用情報を保持

  grid[_].scroll = {
    left: grid[_].scrollable.scrollLeft,
    top: grid[_].scrollable.scrollTop
  }; // If the focus is on the header, recalculate and move the focus position.

  const {
    focus
  } = grid[_].selection;
  const isFrozenCell = grid.isFrozenCell(focus.col, focus.row);

  if (isFrozenCell && ((isFrozenCell === null || isFrozenCell === void 0 ? void 0 : isFrozenCell.col) && moveX || (isFrozenCell === null || isFrozenCell === void 0 ? void 0 : isFrozenCell.row) && moveY)) {
    grid.setFocusCursor(focus.col, focus.row);
  }

  const visibleRect = _getVisibleRect(grid);

  if (Math.abs(moveX) >= visibleRect.width || Math.abs(moveY) >= visibleRect.height) {
    //全再描画
    _invalidateRect(grid, visibleRect);
  } else {
    //差分再描画
    grid[_].context.drawImage(grid[_].canvas, -moveX, -moveY);

    if (moveX !== 0) {
      //横移動の再描画範囲を計算
      const redrawRect = visibleRect.copy();

      if (moveX < 0) {
        redrawRect.width = -moveX;

        if (grid[_].frozenColCount > 0) {
          //固定列がある場合固定列分描画
          const frozenRect = _getFrozenColsRect(grid);

          redrawRect.width += frozenRect.width;
        }
      } else if (moveX > 0) {
        redrawRect.left = redrawRect.right - moveX;
      } //再描画


      _invalidateRect(grid, redrawRect);

      if (moveX > 0) {
        if (grid[_].frozenColCount > 0) {
          //固定列がある場合固定列描画
          _invalidateRect(grid, _getFrozenColsRect(grid));
        }
      }
    }

    if (moveY !== 0) {
      //縦移動の再描画範囲を計算
      const redrawRect = visibleRect.copy();

      if (moveY < 0) {
        redrawRect.height = -moveY;

        if (grid[_].frozenRowCount > 0) {
          //固定行がある場合固定行分描画
          const frozenRect = _getFrozenRowsRect(grid);

          redrawRect.height += frozenRect.height;
        }
      } else if (moveY > 0) {
        redrawRect.top = redrawRect.bottom - moveY;
      } //再描画


      _invalidateRect(grid, redrawRect);

      if (moveY > 0) {
        if (grid[_].frozenRowCount > 0) {
          //固定行がある場合固定行描画
          _invalidateRect(grid, _getFrozenRowsRect(grid));
        }
      }
    }
  }
}
/** @private */
// eslint-disable-next-line complexity


function _onKeyDownMove(e) {
  var _a, _b, _c;

  const {
    shiftKey
  } = e;
  const keyCode = getKeyCode(e);
  const focusCell = shiftKey ? this.selection.focus : this.selection.select;

  if (keyCode === KEY_LEFT) {
    if (e.ctrlKey || e.metaKey) {
      move(this, null, "W");
    } else {
      if (!hMove.call(this, "W")) {
        return;
      }
    }

    cancelEvent(e);
  } else if (keyCode === KEY_UP) {
    if (e.ctrlKey || e.metaKey) {
      move(this, "N", null);
    } else {
      if (!vMove.call(this, "N")) {
        return;
      }
    }

    cancelEvent(e);
  } else if (keyCode === KEY_RIGHT) {
    if (e.ctrlKey || e.metaKey) {
      move(this, null, "E");
    } else {
      if (!hMove.call(this, "E")) {
        return;
      }
    }

    cancelEvent(e);
  } else if (keyCode === KEY_DOWN) {
    if (e.ctrlKey || e.metaKey) {
      move(this, "S", null);
    } else {
      if (!vMove.call(this, "S")) {
        return;
      }
    }

    cancelEvent(e);
  } else if (keyCode === KEY_HOME) {
    if (e.ctrlKey || e.metaKey) {
      move(this, "N", "W");
    } else {
      move(this, null, "W");
    }

    cancelEvent(e);
  } else if (keyCode === KEY_END) {
    if (e.ctrlKey || e.metaKey) {
      move(this, "S", "E");
    } else {
      move(this, null, "E");
    }

    cancelEvent(e);
  } else if (((_a = this.keyboardOptions) === null || _a === void 0 ? void 0 : _a.moveCellOnTab) && keyCode === KEY_TAB) {
    let newCell = null;

    if (typeof this.keyboardOptions.moveCellOnTab === "function") {
      newCell = this.keyboardOptions.moveCellOnTab({
        cell: focusCell,
        grid: this,
        event: e
      });
    }

    if (newCell) {
      _moveFocusCell.call(this, newCell.col, newCell.row, false);
    } else if (shiftKey) {
      if (!hMove.call(this, "W", false)) {
        const row = this.getMoveUpRowByKeyDownInternal(focusCell);

        if (0 > row) {
          return;
        }

        _moveFocusCell.call(this, this.colCount - 1, row, false);
      }
    } else {
      if (!hMove.call(this, "E", false)) {
        const row = this.getMoveDownRowByKeyDownInternal(focusCell);

        if (this.rowCount <= row) {
          return;
        }

        _moveFocusCell.call(this, 0, row, false);
      }
    }

    cancelEvent(e);
  } else if (((_b = this.keyboardOptions) === null || _b === void 0 ? void 0 : _b.moveCellOnEnter) && keyCode === KEY_ENTER) {
    let newCell = null;

    if (typeof this.keyboardOptions.moveCellOnEnter === "function") {
      newCell = this.keyboardOptions.moveCellOnEnter({
        cell: focusCell,
        grid: this,
        event: e
      });
    }

    if (newCell) {
      _moveFocusCell.call(this, newCell.col, newCell.row, false);
    } else if (shiftKey) {
      if (!vMove.call(this, "N", false)) {
        const col = this.getMoveLeftColByKeyDownInternal(focusCell);

        if (0 > col) {
          return;
        }

        _moveFocusCell.call(this, col, this.rowCount - 1, false);
      }
    } else {
      if (!vMove.call(this, "S", false)) {
        const col = this.getMoveRightColByKeyDownInternal(focusCell);

        if (this.colCount <= col) {
          return;
        }

        _moveFocusCell.call(this, col, Math.min(this.frozenRowCount, this.rowCount - 1), false);
      }
    }

    cancelEvent(e);
  } else if (((_c = this.keyboardOptions) === null || _c === void 0 ? void 0 : _c.selectAllOnCtrlA) && keyCode === KEY_ALPHA_A && (e.ctrlKey || e.metaKey)) {
    this.selection.range = {
      start: {
        col: 0,
        row: 0
      },
      end: {
        col: this.colCount - 1,
        row: this.rowCount - 1
      }
    };
    this.invalidate();
    cancelEvent(e);
  }

  function move(grid, vDir, hDir) {
    const row = vDir === "S" ? grid.rowCount - 1 : vDir === "N" ? 0 : focusCell.row;
    const col = hDir === "E" ? grid.colCount - 1 : hDir === "W" ? 0 : focusCell.col;

    _moveFocusCell.call(grid, col, row, shiftKey);
  }

  function vMove(vDir, shiftKeyFlg = shiftKey) {
    const {
      col
    } = focusCell;
    let row;

    if (vDir === "S") {
      row = this.getMoveDownRowByKeyDownInternal(focusCell);

      if (this.rowCount <= row) {
        // Avoids the problem of the scroll position breaking due to a delayed scrolling event if user hold down the arrow keys.
        this.makeVisibleCell(col, this.rowCount - 1);
        return false;
      }
    } else {
      row = this.getMoveUpRowByKeyDownInternal(focusCell);

      if (row < 0) {
        // Avoids the problem of the scroll position breaking due to a delayed scrolling event if user hold down the arrow keys.
        this.makeVisibleCell(col, 0);
        return false;
      }
    }

    _moveFocusCell.call(this, col, row, shiftKeyFlg);

    return true;
  }

  function hMove(hDir, shiftKeyFlg = shiftKey) {
    const {
      row
    } = focusCell;
    let col;

    if (hDir === "E") {
      col = this.getMoveRightColByKeyDownInternal(focusCell);

      if (this.colCount <= col) {
        // Avoids the problem of the scroll position breaking due to a delayed scrolling event if user hold down the arrow keys.
        this.makeVisibleCell(this.colCount - 1, row);
        return false;
      }
    } else {
      col = this.getMoveLeftColByKeyDownInternal(focusCell);

      if (col < 0) {
        // Avoids the problem of the scroll position breaking due to a delayed scrolling event if user hold down the arrow keys.
        this.makeVisibleCell(0, row);
        return false;
      }
    }

    _moveFocusCell.call(this, col, row, shiftKeyFlg);

    return true;
  }
}
/** @private */


function _moveFocusCell(col, row, shiftKey) {
  const offset = this.getOffsetInvalidateCells();

  function extendRange(range) {
    if (offset > 0) {
      range.start.col -= offset;
      range.start.row -= offset;
      range.end.col += offset;
      range.end.row += offset;
    }

    return range;
  }

  const beforeRange = extendRange(this.selection.range);
  const beforeRect = this.getCellRangeRect(beforeRange);

  this.selection._setFocusCell(col, row, shiftKey);

  this.makeVisibleCell(col, row);
  this.focusCell(col, row);
  const afterRange = extendRange(this.selection.range);
  const afterRect = this.getCellRangeRect(afterRange);

  if (afterRect.intersection(beforeRect)) {
    const invalidateRect = Rect_1.Rect.max(afterRect, beforeRect);

    _invalidateRect(this, invalidateRect);
  } else {
    _invalidateRect(this, beforeRect);

    _invalidateRect(this, afterRect);
  }
}
/** @private */


function _updatedSelection() {
  const {
    focusControl
  } = this[_];
  const {
    col: selCol,
    row: selRow
  } = this[_].selection.select;
  const results = this.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.EDITABLEINPUT_CELL, {
    col: selCol,
    row: selRow
  });
  const editMode = utils_1.array.findIndex(results, v => !!v) >= 0;
  focusControl.editMode = editMode;

  if (editMode) {
    focusControl.storeInputStatus();
    focusControl.setDefaultInputStatus();
    this.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MODIFY_STATUS_EDITABLEINPUT_CELL, {
      col: selCol,
      row: selRow,
      input: focusControl.input
    });
  }
}
/** @private */


function _getMouseAbstractPoint(grid, evt) {
  let e;

  if (isTouchEvent(evt)) {
    e = evt.changedTouches[0];
  } else {
    e = evt;
  }

  const clientX = e.clientX || e.pageX + window.scrollX;
  const clientY = e.clientY || e.pageY + window.scrollY;

  const rect = grid[_].canvas.getBoundingClientRect();

  if (rect.right <= clientX) {
    return null;
  }

  if (rect.bottom <= clientY) {
    return null;
  }

  const x = clientX - rect.left + grid[_].scroll.left;
  const y = clientY - rect.top + grid[_].scroll.top;
  return {
    x,
    y
  };
}
/** @private */


function _bindEvents() {
  // eslint-disable-next-line consistent-this, @typescript-eslint/no-this-alias
  const grid = this;
  const {
    handler,
    element,
    scrollable
  } = grid[_];

  const getCellEventArgsSet = e => {
    const abstractPos = _getMouseAbstractPoint(grid, e);

    if (!abstractPos) {
      return {};
    }

    const cell = grid.getCellAt(abstractPos.x, abstractPos.y);

    if (cell.col < 0 || cell.row < 0) {
      return {
        abstractPos,
        cell
      };
    }

    const eventArgs = {
      col: cell.col,
      row: cell.row,
      event: e
    };
    return {
      abstractPos,
      cell,
      eventArgs
    };
  };

  const canResizeColumn = col => {
    if (grid[_].disableColumnResize) {
      return false;
    }

    const limit = grid[_].colWidthsLimit[col];

    if (!limit || !limit.min || !limit.max) {
      return true;
    }

    return limit.max !== limit.min;
  };

  handler.on(element, "mousedown", e => {
    const eventArgsSet = getCellEventArgsSet(e);
    const {
      abstractPos,
      eventArgs
    } = eventArgsSet;

    if (!abstractPos) {
      return;
    }

    if (eventArgs) {
      const results = grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEDOWN_CELL, eventArgs);

      if (utils_1.array.findIndex(results, v => !v) >= 0) {
        return;
      }
    }

    if (getMouseButtons(e) !== 1 && // For mobile safari. If we do not post-process here, the keyboard will not start in Mobile Safari.
    e.buttons !== 0) {
      return;
    }

    const resizeCol = _getResizeColAt(grid, abstractPos.x, abstractPos.y);

    if (resizeCol >= 0 && canResizeColumn(resizeCol)) {
      //幅変更
      grid[_].columnResizer.start(resizeCol, e);
    } else {
      //選択
      grid[_].cellSelector.start(e);
    }
  });
  handler.on(element, "mouseup", e => {
    if (!grid.hasListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEUP_CELL)) {
      return;
    }

    const {
      eventArgs
    } = getCellEventArgsSet(e);

    if (eventArgs) {
      grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEUP_CELL, eventArgs);
    }
  });
  let doubleTapBefore = null;
  let longTouchId = null;
  let useTouch = null;

  function useTouchStart() {
    if ((useTouch === null || useTouch === void 0 ? void 0 : useTouch.timeoutId) != null) clearTimeout(useTouch.timeoutId);
    useTouch = {};
  }

  function useTouchEnd() {
    if (useTouch) {
      if (useTouch.timeoutId != null) clearTimeout(useTouch.timeoutId);
      useTouch.timeoutId = setTimeout(() => {
        useTouch = null;
      }, 350);
    }
  }

  handler.on(element, "touchstart", e => {
    // Since it is an environment where touch start can be used, it blocks mousemove that occurs after this.
    useTouchStart();
    const {
      eventArgs
    } = getCellEventArgsSet(e);

    if (eventArgs) {
      grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.TOUCHSTART_CELL, eventArgs);
    }

    if (!doubleTapBefore) {
      doubleTapBefore = eventArgs;
      setTimeout(() => {
        doubleTapBefore = null;
      }, 350);
    } else {
      if (eventArgs && eventArgs.col === doubleTapBefore.col && eventArgs.row === doubleTapBefore.row) {
        grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.DBLTAP_CELL, eventArgs);
      }

      doubleTapBefore = null;

      if (e.defaultPrevented) {
        return;
      }
    }

    if (e.targetTouches.length > 1) {
      // If touchstart with multiple fingers,
      // it is not considered as an operation event.
      return;
    }

    longTouchId = setTimeout(() => {
      //長押しした場合選択モード
      longTouchId = null;

      const abstractPos = _getMouseAbstractPoint(grid, e);

      if (!abstractPos) {
        return;
      }

      const resizeCol = _getResizeColAt(grid, abstractPos.x, abstractPos.y, 15);

      if (resizeCol >= 0 && canResizeColumn(resizeCol)) {
        //幅変更
        grid[_].columnResizer.start(resizeCol, e);
      } else {
        //選択
        grid[_].cellSelector.start(e);
      }
    }, 500);
  });

  function cancel(_e) {
    if (longTouchId) {
      clearTimeout(longTouchId);
      longTouchId = null;
    }
  }

  handler.on(element, "touchcancel", e => {
    cancel(e);
    useTouchEnd();
  });
  handler.on(element, "touchmove", cancel);
  handler.on(element, "touchend", e => {
    useTouchEnd();

    if (longTouchId) {
      clearTimeout(longTouchId);

      grid[_].cellSelector.select(e);

      longTouchId = null;
    }
  });
  let isMouseover = false;
  let mouseEnterCell = null;
  let mouseOverCell = null;

  function onMouseenterCell(cell, related) {
    grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEENTER_CELL, {
      col: cell.col,
      row: cell.row,
      related
    });
    mouseEnterCell = cell;
  }

  function onMouseleaveCell(related) {
    const beforeMouseCell = mouseEnterCell;
    mouseEnterCell = null;

    if (beforeMouseCell) {
      grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSELEAVE_CELL, {
        col: beforeMouseCell.col,
        row: beforeMouseCell.row,
        related
      });
    }

    return beforeMouseCell || undefined;
  }

  function onMouseoverCell(cell, related) {
    grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEOVER_CELL, {
      col: cell.col,
      row: cell.row,
      related
    });
    mouseOverCell = cell;
  }

  function onMouseoutCell(related) {
    const beforeMouseCell = mouseOverCell;
    mouseOverCell = null;

    if (beforeMouseCell) {
      grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEOUT_CELL, {
        col: beforeMouseCell.col,
        row: beforeMouseCell.row,
        related
      });
    }

    return beforeMouseCell || undefined;
  }

  const scrollElement = scrollable.getElement();
  handler.on(scrollElement, "mouseover", _e => {
    isMouseover = true;
  });
  handler.on(scrollElement, "mouseout", _e => {
    isMouseover = false;
    onMouseoutCell();
  });
  handler.on(element, "mouseleave", _e => {
    onMouseleaveCell();
  });
  handler.on(element, "mousemove", e => {
    if (useTouch) {
      // Probably a mousemove event triggered by a touchstart. Therefore, this event is blocked.
      return;
    }

    const eventArgsSet = getCellEventArgsSet(e);
    const {
      abstractPos,
      eventArgs
    } = eventArgsSet;

    if (eventArgs) {
      const beforeMouseCell = mouseEnterCell;

      if (beforeMouseCell) {
        grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEMOVE_CELL, eventArgs);

        if (beforeMouseCell.col !== eventArgs.col || beforeMouseCell.row !== eventArgs.row) {
          const enterCell = {
            col: eventArgs.col,
            row: eventArgs.row
          };
          const outCell = onMouseoutCell(enterCell);
          const leaveCell = onMouseleaveCell(enterCell);
          onMouseenterCell(enterCell, leaveCell);

          if (isMouseover) {
            onMouseoverCell(enterCell, outCell);
          }
        } else if (isMouseover && !mouseOverCell) {
          onMouseoverCell({
            col: eventArgs.col,
            row: eventArgs.row
          });
        }
      } else {
        const enterCell = {
          col: eventArgs.col,
          row: eventArgs.row
        };
        onMouseenterCell(enterCell);

        if (isMouseover) {
          onMouseoverCell(enterCell);
        }

        grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEMOVE_CELL, eventArgs);
      }
    } else {
      onMouseoutCell();
      onMouseleaveCell();
    }

    if (grid[_].columnResizer.moving(e) || grid[_].cellSelector.moving(e)) {
      return;
    }

    const {
      style
    } = element;

    if (!abstractPos) {
      if (style.cursor === "col-resize") {
        style.cursor = "";
      }

      return;
    }

    const resizeCol = _getResizeColAt(grid, abstractPos.x, abstractPos.y);

    if (resizeCol >= 0 && canResizeColumn(resizeCol)) {
      style.cursor = "col-resize";
    } else {
      if (style.cursor === "col-resize") {
        style.cursor = "";
      }
    }
  });
  handler.on(element, "click", e => {
    if (grid[_].columnResizer.lastMoving(e) || grid[_].cellSelector.lastMoving(e)) {
      return;
    }

    if (!grid.hasListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.CLICK_CELL)) {
      return;
    }

    const {
      eventArgs
    } = getCellEventArgsSet(e);

    if (!eventArgs) {
      return;
    }

    grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.CLICK_CELL, eventArgs);
  });
  handler.on(element, "contextmenu", e => {
    if (!grid.hasListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.CONTEXTMENU_CELL)) {
      return;
    }

    const {
      eventArgs
    } = getCellEventArgsSet(e);

    if (!eventArgs) {
      return;
    }

    grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.CONTEXTMENU_CELL, eventArgs);
  });
  handler.on(element, "dblclick", e => {
    if (!grid.hasListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.DBLCLICK_CELL)) {
      return;
    }

    const {
      eventArgs
    } = getCellEventArgsSet(e);

    if (!eventArgs) {
      return;
    }

    grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.DBLCLICK_CELL, eventArgs);
  });

  grid[_].focusControl.onKeyDown(evt => {
    grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.KEYDOWN, evt);
  });

  grid[_].selection.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.SELECTED_CELL, data => {
    grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.SELECTED_CELL, data, data.selected);
  });

  scrollable.onScroll(e => {
    _onScroll(grid, e);

    grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.SCROLL, {
      event: e
    });
  });

  grid[_].focusControl.onKeyDownMove(e => {
    _onKeyDownMove.call(grid, e);
  });

  grid.listen("copydata", range => {
    const copyRange = grid.getCopyRangeInternal(range);
    const copyLines = [];

    for (let {
      row
    } = copyRange.start; row <= copyRange.end.row; row++) {
      let copyLine = "";

      for (let {
        col
      } = copyRange.start; col <= copyRange.end.col; col++) {
        const copyCellValue = grid.getCopyCellValue(col, row, copyRange);
        let strCellValue;

        if (typeof copyCellValue === "string") {
          strCellValue = copyCellValue;
        } else if (copyCellValue == null || // Asynchronous data is treated as empty.
        typeof Promise !== "undefined" && copyCellValue instanceof Promise) {
          strCellValue = "";
        } else {
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          strCellValue = `${copyCellValue}`;

          if (/^\[object .*\]$/.exec(strCellValue)) {
            // Ignore maybe object
            strCellValue = "";
          }
        }

        copyLine += /[\t\n]/.test(strCellValue) ? // Need quote
        `"${strCellValue.replace(/"/g, '""')}"` : strCellValue;

        if (col < copyRange.end.col) {
          copyLine += "\t";
        }
      }

      copyLines.push(copyLine);
    }

    return copyLines.join("\n");
  });

  grid[_].focusControl.onCopy(_e => utils_1.array.find(grid.fireListeners("copydata", grid[_].selection.range), r => r != null));

  grid[_].focusControl.onPaste(({
    value,
    event
  }) => {
    const {
      trimOnPaste
    } = grid;
    const normalizedValue = (0, paste_utils_1.normalizePasteValue)(value);
    const {
      col,
      row
    } = grid[_].selection.select;
    const multi = /[\r\n\u2028\u2029\t]/.test(normalizedValue); // is multi cell values

    let rangeBoxValues = null;
    const pasteCellEvent = {
      col,
      row,
      value,
      normalizeValue: trimOnPaste ? normalizedValue.trim() : normalizedValue,
      multi,

      get rangeBoxValues() {
        return rangeBoxValues !== null && rangeBoxValues !== void 0 ? rangeBoxValues : rangeBoxValues = (0, paste_utils_1.parsePasteRangeBoxValues)(normalizedValue, {
          trimOnPaste
        });
      },

      event
    };
    grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.PASTE_CELL, pasteCellEvent);
  });

  grid[_].focusControl.onInput(value => {
    const {
      col,
      row
    } = grid[_].selection.select;
    grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.INPUT_CELL, {
      col,
      row,
      value
    });
  });

  grid[_].focusControl.onDelete(event => {
    const {
      col,
      row
    } = grid[_].selection.select;
    grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.DELETE_CELL, {
      col,
      row,
      event
    });
  });

  grid[_].focusControl.onFocus(e => {
    grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.FOCUS_GRID, e);
    grid[_].focusedGrid = true;
    const {
      col,
      row
    } = grid[_].selection.select;
    grid.invalidateCell(col, row);
  });

  grid[_].focusControl.onBlur(e => {
    grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.BLUR_GRID, e);
    grid[_].focusedGrid = false;
    const {
      col,
      row
    } = grid[_].selection.select;
    grid.invalidateCell(col, row);
  });
}
/** @private */


function _getResizeColAt(grid, abstractX, abstractY, offset = 5) {
  if (grid[_].frozenRowCount <= 0) {
    return -1;
  }

  const frozenRect = _getFrozenRowsRect(grid);

  if (!frozenRect.inPoint(abstractX, abstractY)) {
    return -1;
  }

  const cell = grid.getCellAt(abstractX, abstractY);
  const cellRect = grid.getCellRect(cell.col, cell.row);

  if (abstractX < cellRect.left + offset) {
    return cell.col - 1;
  }

  if (cellRect.right - offset < abstractX) {
    return cell.col;
  }

  return -1;
}
/** @private */


function _getVisibleRect(grid) {
  const {
    scroll: {
      left,
      top
    },
    canvas: {
      width,
      height
    }
  } = grid[_];
  return new Rect_1.Rect(left, top, width, height);
}
/** @private */


function _getScrollableVisibleRect(grid) {
  let frozenColsWidth = 0;

  if (grid[_].frozenColCount > 0) {
    //固定列がある場合固定列分描画
    const frozenRect = _getFrozenColsRect(grid);

    frozenColsWidth = frozenRect.width;
  }

  let frozenRowsHeight = 0;

  if (grid[_].frozenRowCount > 0) {
    //固定列がある場合固定列分描画
    const frozenRect = _getFrozenRowsRect(grid);

    frozenRowsHeight = frozenRect.height;
  }

  return new Rect_1.Rect(grid[_].scrollable.scrollLeft + frozenColsWidth, grid[_].scrollable.scrollTop + frozenRowsHeight, grid[_].canvas.width - frozenColsWidth, grid[_].canvas.height - frozenRowsHeight);
}
/** @private */


function _toRelativeRect(grid, absoluteRect) {
  const rect = absoluteRect.copy();

  const visibleRect = _getVisibleRect(grid);

  rect.offsetLeft(-visibleRect.left);
  rect.offsetTop(-visibleRect.top);
  return rect;
} //end private methods
//
//
//
//

/**
 * managing mouse down moving
 * @private
 */


class BaseMouseDownMover {
  constructor(grid) {
    this._grid = grid;
    this._handler = new EventHandler_1.EventHandler();
    this._events = {};
    this._started = false;
    this._moved = false;
  }

  moving(_e) {
    return !!this._started;
  }

  lastMoving(e) {
    // mouseup後すぐに、clickイベントを反応しないようにする制御要
    if (this.moving(e)) {
      return true;
    }

    const last = this._mouseEndPoint;

    if (!last) {
      return false;
    }

    const pt = _getMouseAbstractPoint(this._grid, e);

    return pt != null && pt.x === last.x && pt.y === last.y;
  }

  _bindMoveAndUp(e) {
    const events = this._events;
    const handler = this._handler;

    if (!isTouchEvent(e)) {
      events.mousemove = handler.on(document.body, "mousemove", e => this._mouseMove(e));
      events.mouseup = handler.on(document.body, "mouseup", e => this._mouseUp(e));
    } else {
      events.touchmove = handler.on(document.body, "touchmove", e => this._mouseMove(e), {
        passive: false
      });
      events.touchend = handler.on(document.body, "touchend", e => this._mouseUp(e));
      events.touchcancel = handler.on(document.body, "touchcancel", e => this._mouseUp(e));
    }

    this._started = true;
    this._moved = false;
  }

  _mouseMove(e) {
    if (!isTouchEvent(e)) {
      if (getMouseButtons(e) !== 1) {
        this._mouseUp(e);

        return;
      }
    }

    this._moved = this._moveInternal(e) || this._moved
    /*calculation on after*/
    ;
    cancelEvent(e);
  }

  _moveInternal(_e) {
    //protected
    return false;
  }

  _mouseUp(e) {
    const events = this._events;
    const handler = this._handler;
    handler.off(events.mousemove);
    handler.off(events.touchmove);
    handler.off(events.mouseup);
    handler.off(events.touchend); // handler.off(this._events.mouseleave);

    handler.off(events.touchcancel);
    this._started = false;

    this._upInternal(e); // mouseup後すぐに、clickイベントを反応しないようにする制御要


    if (this._moved) {
      //移動が発生していたら
      this._mouseEndPoint = _getMouseAbstractPoint(this._grid, e);
      setTimeout(() => {
        this._mouseEndPoint = null;
      }, 10);
    }
  }

  _upInternal(_e) {//protected
  }

  dispose() {
    this._handler.dispose();
  }

}
/**
 * managing cell selection operation with mouse
 * @private
 */


class CellSelector extends BaseMouseDownMover {
  start(e) {
    const cell = this._getTargetCell(e);

    if (!cell) {
      return;
    }

    _moveFocusCell.call(this._grid, cell.col, cell.row, e.shiftKey);

    this._bindMoveAndUp(e);

    this._cell = cell;
    cancelEvent(e);

    _vibrate(e);
  }

  select(e) {
    const cell = this._getTargetCell(e);

    if (!cell) {
      return;
    }

    _moveFocusCell.call(this._grid, cell.col, cell.row, e.shiftKey);

    this._cell = cell;
  }

  _moveInternal(e) {
    const cell = this._getTargetCell(e);

    if (!cell) {
      return false;
    }

    const {
      col: oldCol,
      row: oldRow
    } = this._cell;
    const {
      col: newCol,
      row: newRow
    } = cell;

    if (oldCol === newCol && oldRow === newRow) {
      return false;
    }

    const grid = this._grid;

    _moveFocusCell.call(grid, newCol, newRow, true); //make visible


    const makeVisibleCol = (() => {
      if (newCol < oldCol && 0 < newCol) {
        // move left
        return newCol - 1;
      } else if (oldCol < newCol && newCol + 1 < grid.colCount) {
        // move right
        return newCol + 1;
      }

      return newCol;
    })();

    const makeVisibleRow = (() => {
      if (newRow < oldRow && 0 < newRow) {
        // move up
        return newRow - 1;
      } else if (oldRow < newRow && newRow + 1 < grid.rowCount) {
        // move down
        return newRow + 1;
      }

      return newRow;
    })();

    if (makeVisibleCol !== newCol || makeVisibleRow !== newRow) {
      grid.makeVisibleCell(makeVisibleCol, makeVisibleRow);
    }

    this._cell = cell;
    return true;
  }

  _getTargetCell(e) {
    const grid = this._grid;

    const abstractPos = _getMouseAbstractPoint(grid, e);

    if (!abstractPos) {
      return null;
    }

    const cell = grid.getCellAt(abstractPos.x, abstractPos.y);

    if (cell.col < 0 || cell.row < 0) {
      return null;
    }

    return cell;
  }

}
/**
 * managing row width changing operation with mouse
 * @private
 */


class ColumnResizer extends BaseMouseDownMover {
  constructor(grid) {
    super(grid);
    this._x = -1;
    this._preX = -1;
    this._invalidateAbsoluteLeft = -1;
    this._targetCol = -1;
  }

  start(col, e) {
    let pageX;

    if (!isTouchEvent(e)) {
      ({
        pageX
      } = e);
    } else {
      ({
        pageX
      } = e.changedTouches[0]);
    }

    this._x = pageX;
    this._preX = 0;

    this._bindMoveAndUp(e);

    this._targetCol = col;
    this._invalidateAbsoluteLeft = _getColsWidth(this._grid, 0, col - 1);
    cancelEvent(e);

    _vibrate(e);
  }

  _moveInternal(e) {
    const pageX = isTouchEvent(e) ? e.changedTouches[0].pageX : e.pageX;
    const x = pageX - this._x;
    const moveX = x - this._preX;
    this._preX = x;

    const pre = this._grid.getColWidth(this._targetCol);

    let afterSize = _adjustColWidth(this._grid, this._targetCol, pre + moveX);

    if (afterSize < 10 && moveX < 0) {
      afterSize = 10;
    }

    _storeAutoColWidthExprs(this._grid);

    _setColWidth(this._grid, this._targetCol, afterSize);

    const rect = _getVisibleRect(this._grid);

    rect.left = this._invalidateAbsoluteLeft;

    _invalidateRect(this._grid, rect);

    this._grid.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.RESIZE_COLUMN, {
      col: this._targetCol
    });

    return true;
  }

  _upInternal(_e) {
    const grid = this._grid;

    if (grid.updateScroll()) {
      grid.invalidate();
    }
  }

}
/** @private */


function setSafeInputValue(input, value) {
  const {
    type
  } = input;
  input.type = "";
  input.value = value;

  if (type) {
    input.type = type;
  }
}

const IGNORE_STORE_ATTRS = ["style", "readonly"];
/**
 * Manage focus
 * @private
 */

class FocusControl extends EventTarget_1.EventTarget {
  constructor(grid, parentElement, scrollable, selection) {
    super();
    this._grid = grid;
    this._scrollable = scrollable;
    const handler = this._handler = new EventHandler_1.EventHandler();
    const input = this._input = document.createElement("input");
    input.classList.add("grid-focus-control");
    input.readOnly = true;
    parentElement.appendChild(input);
    handler.on(input, "compositionstart", _e => {
      input.classList.add("composition");
      input.style.font = grid.font || "16px sans-serif";
      this._isComposition = true;

      if (this._compositionEnd) {
        clearTimeout(this._compositionEnd);
        delete this._compositionEnd;
      }

      grid.focus();
    });
    let lastInputValue;

    const inputClear = storeLastInputValue => {
      lastInputValue = input.value;

      if (this._isComposition) {
        return;
      }

      if (lastInputValue !== "") {
        setSafeInputValue(input, "");
      }

      if (!storeLastInputValue) {
        lastInputValue = "";
      }
    };

    const handleCompositionEnd = () => {
      this._isComposition = false;
      input.classList.remove("composition");
      input.style.font = "";
      const {
        value
      } = input;
      inputClear(false);

      if (!input.readOnly) {
        this.fireListeners("input", value);
      }

      if (this._compositionEnd) {
        clearTimeout(this._compositionEnd);
        delete this._compositionEnd;
      }
    };

    handler.on(input, "compositionend", _e => {
      this._compositionEnd = setTimeout(handleCompositionEnd, 1);
    });
    selection.listen("before_hook", () => {
      if (this._compositionEnd) {
        handleCompositionEnd();
      }
    });
    handler.on(input, "keypress", e => {
      if (this._isComposition) {
        return;
      }

      if (!input.readOnly && e.key && e.key.length === 1) {
        if (e.ctrlKey || e.metaKey) {
          if (e.key === "c") {//copy! for Firefox & Safari
          } else if (e.key === "v") {//paste! for Firefox & Safari
          }
        } else {
          if (e.key === " ") {
            // Since the full-width space cannot be determined, it is processed by "input".
            return;
          }

          this.fireListeners("input", e.key);
          cancelEvent(e);
        }
      }

      inputClear(true);
    });
    handler.on(input, "keydown", e => {
      var _a;

      if (this._isComposition) {
        if (this._compositionEnd) {
          handleCompositionEnd();
          cancelEvent(e);
        }

        return;
      }

      const keyCode = getKeyCode(e);
      let stopCellMove = false;
      const evt = {
        keyCode,
        event: e,

        stopCellMoving() {
          stopCellMove = true;
        }

      };
      this.fireListeners("keydown", evt);

      if (!input.readOnly && lastInputValue) {
        // for Safari
        this.fireListeners("input", lastInputValue);
      }

      if (!stopCellMove) this.fireKeyDownMove(keyCode, e);

      if (((_a = this._grid.keyboardOptions) === null || _a === void 0 ? void 0 : _a.deleteCellValueOnDel) && (keyCode === KEY_DEL || keyCode === KEY_BS)) {
        this.fireListeners("delete", e);
      }

      inputClear(true);
    });
    handler.on(input, "keyup", _e => {
      if (this._isComposition) {
        if (this._compositionEnd) {
          handleCompositionEnd();
        }
      }

      inputClear(true);
    });
    handler.on(input, "input", e => {
      if (e.data === " " || e.data === "　") {
        // Since the full-width space cannot be determined on "keypress", it is processed by "input".
        this.fireListeners("input", e.data);
      }

      inputClear(true);
    });

    if (utils_1.browser.IE) {
      handler.on(document, "keydown", e => {
        if (e.target !== input) {
          return;
        }

        const keyCode = getKeyCode(e);

        if (keyCode === KEY_ALPHA_C && e.ctrlKey) {
          // When text is not selected copy-event is not emit, on IE.
          setSafeInputValue(input, "dummy");
          input.select();
          setTimeout(() => {
            setSafeInputValue(input, "");
          }, 100);
        } else if (keyCode === KEY_ALPHA_V && e.ctrlKey) {
          // When input is read-only paste-event is not emit, on IE.
          if (input.readOnly) {
            input.readOnly = false;
            setTimeout(() => {
              input.readOnly = true;
              setSafeInputValue(input, "");
            }, 10);
          }
        }
      });
    }

    if (utils_1.browser.Edge) {
      handler.once(document, "keydown", e => {
        var _a;

        if (!(0, utils_1.isDescendantElement)(parentElement, e.target)) {
          return;
        } // When the input has focus on the first page opening, the paste-event and copy-event is not emit, on Edge.


        const dummyInput = document.createElement("input");
        grid.getElement().appendChild(dummyInput);
        dummyInput.focus();
        input.focus();
        (_a = dummyInput.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(dummyInput);
      });
    }

    handler.on(document, "paste", e => {
      if (!(0, utils_1.isDescendantElement)(parentElement, e.target)) {
        return;
      }

      let pasteText = undefined;

      if (utils_1.browser.IE) {
        // IE
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        pasteText = window.clipboardData.getData("Text");
      } else {
        const clipboardData = e.clipboardData;

        if (clipboardData.items) {
          // Chrome & Firefox & Edge
          pasteText = clipboardData.getData("text/plain");
        } else {
          // Safari
          if (-1 !== Array.prototype.indexOf.call(clipboardData.types, "text/plain")) {
            pasteText = clipboardData.getData("Text");
          }
        }
      }

      if (pasteText != null && pasteText.length) {
        this.fireListeners("paste", {
          value: pasteText,
          event: e
        });
      }
    });
    handler.on(document, "copy", e => {
      if (this._isComposition) {
        return;
      }

      if (!(0, utils_1.isDescendantElement)(parentElement, e.target)) {
        return;
      }

      setSafeInputValue(input, "");
      const data = utils_1.array.find(this.fireListeners("copy"), r => r != null);

      if (data != null) {
        cancelEvent(e);

        if (utils_1.browser.IE) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          window.clipboardData.setData("Text", data); // IE
        } else {
          e.clipboardData.setData("text/plain", data); // Chrome, Firefox
        }
      }
    });
    handler.on(input, "focus", e => {
      this.fireListeners("focus", e);
    });
    handler.on(input, "blur", e => {
      this.fireListeners("blur", e);
    });
  }

  fireKeyDownMove(keyCode, e) {
    var _a, _b, _c;

    const fn = this._keyDownMoveCallback;

    if (!fn) {
      return;
    }

    if (this._isComposition) {
      return;
    }

    if (keyCode === KEY_LEFT || keyCode === KEY_UP || keyCode === KEY_RIGHT || keyCode === KEY_DOWN || keyCode === KEY_HOME || keyCode === KEY_END) {
      fn(e);
    } else if (((_a = this._grid.keyboardOptions) === null || _a === void 0 ? void 0 : _a.moveCellOnTab) && keyCode === KEY_TAB) {
      fn(e);
    } else if (((_b = this._grid.keyboardOptions) === null || _b === void 0 ? void 0 : _b.moveCellOnEnter) && keyCode === KEY_ENTER) {
      fn(e);
    } else if (((_c = this._grid.keyboardOptions) === null || _c === void 0 ? void 0 : _c.selectAllOnCtrlA) && keyCode === KEY_ALPHA_A && (e.ctrlKey || e.metaKey)) {
      fn(e);
    }
  }

  onKeyDownMove(fn) {
    this._keyDownMoveCallback = fn;
  }

  onKeyDown(fn) {
    return this.listen("keydown", fn);
  }

  onInput(fn) {
    return this.listen("input", fn);
  }

  onDelete(fn) {
    return this.listen("delete", fn);
  }

  onCopy(fn) {
    return this.listen("copy", fn);
  }

  onPaste(fn) {
    return this.listen("paste", fn);
  }

  onFocus(fn) {
    return this.listen("focus", fn);
  }

  onBlur(fn) {
    return this.listen("blur", fn);
  }

  focus() {
    // this._input.value = '';
    this._input.focus();
  }

  setFocusRect(rect) {
    const input = this._input;

    const top = this._scrollable.calcTop(rect.top);

    input.style.top = `${(top - style.getScrollBarSize()).toFixed()}px`; //position:relative だとずれるが、IEは position:relativeじゃないと最大値まで利用できない

    input.style.left = `${rect.left.toFixed()}px`;
    input.style.width = `${rect.width.toFixed()}px`;
    input.style.height = `${rect.height.toFixed()}px`;
  }

  get editMode() {
    return !this._input.readOnly;
  }

  set editMode(editMode) {
    this._input.readOnly = !editMode;
  }

  resetInputStatus() {
    var _a;

    const el = this._input;

    if (!el.classList.contains("grid-focus-control--stored-status")) {
      return;
    }

    const composition = el.classList.contains("composition");
    const attrs = el.attributes;
    const removeNames = [];

    for (let i = 0, n = attrs.length; i < n; i++) {
      const attr = attrs[i];
      if (IGNORE_STORE_ATTRS.indexOf(attr.name) >= 0) continue;

      if (!((_a = this._inputStatus) === null || _a === void 0 ? void 0 : _a.hasOwnProperty(attr.nodeName))) {
        removeNames.push(attr.name);
      }
    }

    removeNames.forEach(removeName => {
      el.removeAttribute(removeName);
    });

    for (const name in this._inputStatus) {
      el.setAttribute(name, this._inputStatus[name]);
    }

    if (composition) {
      el.classList.add("composition");
      el.style.font = this._grid.font || "16px sans-serif";
    } else {
      el.classList.remove("composition");
    }

    el.classList.remove("grid-focus-control--stored-status");
  }

  storeInputStatus() {
    const el = this._input;

    if (el.classList.contains("grid-focus-control--stored-status")) {
      return;
    }

    const inputStatus = this._inputStatus = {};
    const attrs = el.attributes;

    for (let i = 0, n = attrs.length; i < n; i++) {
      const attr = attrs[i];
      if (IGNORE_STORE_ATTRS.indexOf(attr.name) >= 0) continue;
      inputStatus[attr.name] = attr.value;
    }

    el.classList.add("grid-focus-control--stored-status");
  }

  setDefaultInputStatus() {// なぜかスクロールが少しずつずれていくことがあるのでここではセットしない。
    // this._input.style.font = this._grid.font || '16px sans-serif';
  }

  get input() {
    return this._input;
  }

  dispose() {
    super.dispose();

    this._handler.dispose();
  }

}
/**
 * Selected area management
 */


class Selection extends EventTarget_1.EventTarget {
  constructor(grid) {
    super();
    this._grid = grid;
    this._sel = {
      col: 0,
      row: 0
    };
    this._focus = {
      col: 0,
      row: 0
    };
    this._start = {
      col: 0,
      row: 0
    };
    this._end = {
      col: 0,
      row: 0
    };
  }

  get range() {
    const start = this._start;
    const end = this._end;
    const startCol = Math.min(start.col, end.col);
    const startRow = Math.min(start.row, end.row);
    const endCol = Math.max(start.col, end.col);
    const endRow = Math.max(start.row, end.row);
    return {
      start: {
        col: startCol,
        row: startRow
      },
      end: {
        col: endCol,
        row: endRow
      }
    };
  }

  set range(range) {
    this._callBeforeHooks();

    const startCol = Math.min(range.start.col, range.end.col);
    const startRow = Math.min(range.start.row, range.end.row);
    const endCol = Math.max(range.start.col, range.end.col);
    const endRow = Math.max(range.start.row, range.end.row);

    this._wrapFireSelectedEvent(() => {
      this._sel = {
        col: startCol,
        row: startRow
      };
      this._focus = {
        col: startCol,
        row: startRow
      };
      this._start = {
        col: startCol,
        row: startRow
      };
      this._end = {
        col: endCol,
        row: endRow
      };

      _updatedSelection.call(this._grid);
    });
  }

  get focus() {
    const {
      col,
      row
    } = this._focus;
    return {
      col,
      row
    };
  }

  get select() {
    const {
      col,
      row
    } = this._sel;
    return {
      col,
      row
    };
  }

  set select(cell) {
    this._callBeforeHooks();

    this._wrapFireSelectedEvent(() => {
      const {
        col = 0,
        row = 0
      } = cell;

      this._setSelectCell(col, row);

      this._setFocusCell(col, row, true, true);

      _updatedSelection.call(this._grid);
    });
  }

  _setSelectCell(col, row) {
    this._wrapFireSelectedEvent(() => {
      this._sel = {
        col,
        row
      };
      this._start = {
        col,
        row
      };
    });
  }

  _setFocusCell(col, row, keepSelect, ignoreBeforeHook) {
    if (!ignoreBeforeHook) this._callBeforeHooks();

    this._wrapFireSelectedEvent(() => {
      if (!keepSelect) {
        this._setSelectCell(col, row);
      }

      this._focus = {
        col,
        row
      };
      this._end = {
        col,
        row
      };
    });
  }

  _wrapFireSelectedEvent(callback) {
    if (this._isWrapped) {
      callback();
    } else {
      this._isWrapped = true;

      try {
        const before = {
          col: this._sel.col,
          row: this._sel.row,
          selected: false,
          after: null
        };
        callback();
        const after = {
          col: this._sel.col,
          row: this._sel.row,
          selected: true,
          before: {
            col: before.col,
            row: before.row
          }
        };
        before.after = {
          col: after.col,
          row: after.row
        };
        this.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.SELECTED_CELL, before);
        this.fireListeners(DG_EVENT_TYPE_1.DG_EVENT_TYPE.SELECTED_CELL, after);
      } finally {
        this._isWrapped = false;
      }
    }
  }

  _updateGridRange() {
    const {
      rowCount,
      colCount
    } = this._grid;
    const points = [this._sel, this._focus, this._start, this._end];
    let needChange = false;

    for (let i = 0; i < points.length; i++) {
      if (colCount <= points[i].col || rowCount <= points[i].row) {
        needChange = true;
        break;
      }
    }

    if (!needChange) {
      return false;
    }

    this._wrapFireSelectedEvent(() => {
      points.forEach(p => {
        p.col = Math.min(colCount - 1, p.col);
        p.row = Math.min(rowCount - 1, p.row);
      });
    });

    return true;
  }

  _callBeforeHooks() {
    this.fireListeners("before_hook");
  }

}
/**
 * This class manages the drawing process for each layer
 */

/** @private */


class DrawLayers {
  constructor() {
    this._layers = {};
  }

  addDraw(level, fn) {
    const l = this._layers[level] || (this._layers[level] = new DrawLayer(level));
    l.addDraw(fn);
  }

  draw(ctx) {
    const list = [];

    for (const k in this._layers) {
      list.push(this._layers[k]);
    }

    list.sort((a, b) => a.level - b.level);
    list.forEach(l => l.draw(ctx));
  }

}
/** @private */


class DrawLayer {
  constructor(level) {
    this._level = level;
    this._list = [];
  }

  get level() {
    return this._level;
  }

  addDraw(fn) {
    this._list.push(fn);
  }

  draw(ctx) {
    this._list.forEach(fn => {
      ctx.save();

      try {
        fn(ctx);
      } finally {
        ctx.restore();
      }
    });
  }

}
/**
 * Context of cell drawing
 * @private
 */


class DrawCellContext {
  //  private _grid: any;
  //  private _onTerminate: any;

  /**
   * constructor
   * @param {number} col index of column
   * @param {number} row index of row
   * @param {CanvasRenderingContext2D} ctx context
   * @param {Rect} rect rect of cell area
   * @param {Rect} drawRect rect of drawing area
   * @param {boolean} drawing `true` if drawing is in progress
   * @param {object} selection the selection
   * @param {Array} drawLayers array of draw layers
   * @private
   */
  constructor(col, row, ctx, rect, drawRect, drawing, selection, drawLayers) {
    this._rectFilter = null;
    this._col = col;
    this._row = row;
    this._mode = 0;
    this._ctx = ctx;
    this._rect = rect;
    this._drawRect = drawRect;
    this._drawing = drawing;
    this._selection = selection;
    this._drawLayers = drawLayers;
    this._childContexts = [];
  }

  get drawing() {
    if (this._mode === 0) {
      return this._drawing;
    } else {
      return true;
    }
  }

  get row() {
    return this._row;
  }

  get col() {
    return this._col;
  }

  cancel() {
    this._cancel = true;

    this._childContexts.forEach(ctx => {
      ctx.cancel();
    });
  }
  /**
   * select status.
   * @return {object} select status
   */


  getSelection() {
    return {
      select: this._selection.select,
      range: this._selection.range
    };
  }
  /**
   * Canvas context.
   * @return {CanvasRenderingContext2D} Canvas context.
   */


  getContext() {
    if (this._mode === 0) {
      return this._ctx;
    } else {
      return _getInitContext.call(this._grid);
    }
  }
  /**
   * Rectangle of cell.
   * @return {Rect} rect Rectangle of cell.
   */


  getRect() {
    const rectFilter = this._rectFilter;
    return rectFilter ? rectFilter(this._getRectInternal()) : this._getRectInternal();
  }

  setRectFilter(rectFilter) {
    this._rectFilter = rectFilter;
  }
  /**
   * Rectangle of Drawing range.
   * @return {Rect} Rectangle of Drawing range.
   */


  getDrawRect() {
    if (this._cancel) {
      return null;
    }

    if (this._mode === 0) {
      return this._drawRect;
    } else {
      if (this._isOutOfRange()) {
        return null;
      }

      const absoluteRect = this._grid.getCellRect(this._col, this._row);

      return this._toRelativeDrawRect(absoluteRect);
    }
  }

  _isOutOfRange() {
    const {
      colCount,
      rowCount
    } = this._grid;
    return colCount <= this._col || rowCount <= this._row;
  }
  /**
   * get Context of current state
   * @return {DrawCellContext} current DrawCellContext.
   */


  toCurrentContext() {
    if (this._mode === 0) {
      return this;
    } else {
      const absoluteRect = this._grid.getCellRect(this._col, this._row);

      const rect = _toRelativeRect(this._grid, absoluteRect);

      const drawRect = this._isOutOfRange() ? null : this._toRelativeDrawRect(absoluteRect);
      const context = new DrawCellContext(this._col, this._row, this.getContext(), rect, drawRect, this.drawing, this._selection, this._drawLayers); // toCurrentContext は自分の toCurrentContextを呼ばせる

      context.toCurrentContext = this.toCurrentContext.bind(this);

      this._childContexts.push(context);

      if (this._cancel) {
        context.cancel();
      }

      context._rectFilter = this._rectFilter;
      return context;
    }
  }

  addLayerDraw(level, fn) {
    this._drawLayers.addDraw(level, fn);
  }

  _toRelativeDrawRect(absoluteRect) {
    const visibleRect = _getVisibleRect(this._grid);

    let rect = absoluteRect.copy();

    if (!rect.intersection(visibleRect)) {
      return null;
    }

    const grid = this._grid;
    const isFrozenCell = grid.isFrozenCell(this._col, this._row);

    if (grid.frozenColCount >= 0 && (!isFrozenCell || !isFrozenCell.col)) {
      const fRect = grid.getCellRect(grid.frozenColCount - 1, this._row);
      rect = Rect_1.Rect.bounds(Math.max(rect.left, fRect.right), rect.top, rect.right, rect.bottom);
    }

    if (grid.frozenRowCount >= 0 && (!isFrozenCell || !isFrozenCell.row)) {
      const fRect = grid.getCellRect(this._col, grid.frozenRowCount - 1);
      rect = Rect_1.Rect.bounds(rect.left, Math.max(rect.top, fRect.bottom), rect.right, rect.bottom);
    }

    if (!rect.intersection(visibleRect)) {
      return null;
    }

    rect.offsetLeft(-visibleRect.left);
    rect.offsetTop(-visibleRect.top);
    return rect;
  }

  _delayMode(grid, onTerminate) {
    this._mode = 1;
    this._ctx = null;
    this._rect = null;
    this._drawRect = null;
    this._grid = grid;
    this._onTerminate = onTerminate;
  }
  /**
   * terminate
   * @return {void}
   */


  terminate() {
    var _a;

    if (this._mode !== 0) {
      (_a = this._onTerminate) === null || _a === void 0 ? void 0 : _a.call(this);
    }
  }

  _getRectInternal() {
    if (this._mode === 0) {
      return this._rect;
    } else {
      if (this._rect) {
        return this._rect;
      }

      return this._grid.getCellRelativeRect(this._col, this._row);
    }
  }

}
/** @private */


const protectedKey = _;
/**
 * DrawGrid
 * @classdesc cheetahGrid.core.DrawGrid
 * @memberof cheetahGrid.core
 */

class DrawGrid extends EventTarget_1.EventTarget {
  static get EVENT_TYPE() {
    return DG_EVENT_TYPE_1.DG_EVENT_TYPE;
  }

  constructor(options = {}) {
    super();
    const {
      rowCount = 10,
      colCount = 10,
      frozenColCount = 0,
      frozenRowCount = 0,
      defaultRowHeight = 40,
      defaultColWidth = 80,
      font,
      underlayBackgroundColor,
      keyboardOptions,
      parentElement,
      disableColumnResize,
      trimOnPaste
    } = options;
    const protectedSpace = this[_] = {};
    style.initDocument();
    protectedSpace.element = createRootElement();
    protectedSpace.scrollable = new Scrollable_1.Scrollable();
    protectedSpace.handler = new EventHandler_1.EventHandler();
    protectedSpace.selection = new Selection(this);
    protectedSpace.focusControl = new FocusControl(this, protectedSpace.scrollable.getElement(), protectedSpace.scrollable, protectedSpace.selection);
    protectedSpace.canvas = hiDPI.transform(document.createElement("canvas"));
    protectedSpace.context = protectedSpace.canvas.getContext("2d", {
      alpha: false
    });
    protectedSpace.rowCount = rowCount;
    protectedSpace.colCount = colCount;
    protectedSpace.frozenColCount = frozenColCount;
    protectedSpace.frozenRowCount = frozenRowCount;
    protectedSpace.defaultRowHeight = defaultRowHeight;
    protectedSpace.defaultColWidth = defaultColWidth;
    protectedSpace.font = font;
    protectedSpace.underlayBackgroundColor = underlayBackgroundColor;
    protectedSpace.keyboardOptions = keyboardOptions;
    protectedSpace.disableColumnResize = disableColumnResize;
    protectedSpace.trimOnPaste = trimOnPaste !== null && trimOnPaste !== void 0 ? trimOnPaste : false; /////

    protectedSpace.rowHeightsMap = new NumberMap_1.NumberMap();
    protectedSpace.colWidthsMap = new NumberMap_1.NumberMap();
    protectedSpace.colWidthsLimit = {};
    protectedSpace.calcWidthContext = {
      _: protectedSpace,

      get full() {
        return this._.canvas.width;
      },

      get em() {
        return (0, canvases_1.getFontSize)(this._.context, this._.font).width;
      }

    };
    protectedSpace.columnResizer = new ColumnResizer(this);
    protectedSpace.cellSelector = new CellSelector(this);
    protectedSpace.drawCells = {};
    protectedSpace.cellTextOverflows = {};
    protectedSpace.focusedGrid = false;
    protectedSpace.element.appendChild(protectedSpace.canvas);
    protectedSpace.element.appendChild(protectedSpace.scrollable.getElement());
    protectedSpace.scroll = {
      left: 0,
      top: 0
    };
    this.updateScroll();

    if (parentElement) {
      parentElement.appendChild(protectedSpace.element);
      this.updateSize();
    } else {
      this.updateSize();
    }

    _bindEvents.call(this);

    this.bindEventsInternal();
  }
  /**
   * Get root element.
   * @returns {HTMLElement} root element
   */


  getElement() {
    return this[_].element;
  }
  /**
   * Get canvas element.
   */


  get canvas() {
    return this[_].canvas;
  }
  /**
   * Focus the grid.
   * @return {void}
   */


  focus() {
    const {
      col,
      row
    } = this[_].selection.select;
    this.focusCell(col, row);
  }

  hasFocusGrid() {
    return this[_].focusedGrid;
  }
  /**
   * Get the selection instance.
   */


  get selection() {
    return this[_].selection;
  }
  /**
   * Get the number of rows.
   */


  get rowCount() {
    return this[_].rowCount;
  }
  /**
   * Set the number of rows.
   */


  set rowCount(rowCount) {
    this[_].rowCount = rowCount;
    this.updateScroll();

    if (this[_].selection._updateGridRange()) {
      const {
        col,
        row
      } = this[_].selection.focus;
      this.makeVisibleCell(col, row);
      this.setFocusCursor(col, row);
    }
  }
  /**
   * Get the number of columns.
   */


  get colCount() {
    return this[_].colCount;
  }
  /**
   * Set the number of columns.
   */


  set colCount(colCount) {
    this[_].colCount = colCount;
    this.updateScroll();

    if (this[_].selection._updateGridRange()) {
      const {
        col,
        row
      } = this[_].selection.focus;
      this.makeVisibleCell(col, row);
      this.setFocusCursor(col, row);
    }
  }
  /**
   * Get the number of frozen columns.
   */


  get frozenColCount() {
    return this[_].frozenColCount;
  }
  /**
   * Set the number of frozen columns.
   */


  set frozenColCount(frozenColCount) {
    this[_].frozenColCount = frozenColCount;
  }
  /**
   * Get the number of frozen rows.
   */


  get frozenRowCount() {
    return this[_].frozenRowCount;
  }
  /**
   * Set the number of frozen rows.
   */


  set frozenRowCount(frozenRowCount) {
    this[_].frozenRowCount = frozenRowCount;
  }
  /**
   * Get the default row height.
   *
   */


  get defaultRowHeight() {
    return this[_].defaultRowHeight;
  }
  /**
   * Set the default row height.
   */


  set defaultRowHeight(defaultRowHeight) {
    this[_].defaultRowHeight = defaultRowHeight;
  }
  /**
   * Get the default column width.
   */


  get defaultColWidth() {
    return this[_].defaultColWidth;
  }
  /**
   * Set the default column width.
   */


  set defaultColWidth(defaultColWidth) {
    this[_].defaultColWidth = defaultColWidth;
  }
  /**
   * Get the font definition as a string.
   */


  get font() {
    return this[_].font;
  }
  /**
   * Set the font definition with the given string.
   */


  set font(font) {
    this[_].font = font;
  }
  /**
   * Get the background color of the underlay.
   */


  get underlayBackgroundColor() {
    return this[_].underlayBackgroundColor;
  }
  /**
   * Set the background color of the underlay.
   */


  set underlayBackgroundColor(underlayBackgroundColor) {
    this[_].underlayBackgroundColor = underlayBackgroundColor;
  }
  /**
   * If set to true, trim the pasted text on pasting.
   */


  get trimOnPaste() {
    return this[_].trimOnPaste;
  }

  set trimOnPaste(trimOnPaste) {
    this[_].trimOnPaste = trimOnPaste;
  }

  get keyboardOptions() {
    var _a;

    return (_a = this[_].keyboardOptions) !== null && _a !== void 0 ? _a : null;
  }

  set keyboardOptions(keyboardOptions) {
    this[_].keyboardOptions = keyboardOptions !== null && keyboardOptions !== void 0 ? keyboardOptions : undefined;
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any


  configure(name, value) {
    const cfg = this[_].config || (this[_].config = {});

    if (value != null) {
      cfg[name] = value;
    }

    return cfg[name];
  }
  /**
   * Apply the changed size.
   * @return {void}
   */


  updateSize() {
    //スタイルをクリアしてサイズ値を取得
    const {
      canvas
    } = this[_];
    canvas.style.width = "";
    canvas.style.height = "";
    const width = Math.floor(canvas.offsetWidth || canvas.parentElement.offsetWidth - style.getScrollBarSize()
    /*for legacy*/
    );
    const height = Math.floor(canvas.offsetHeight || canvas.parentElement.offsetHeight - style.getScrollBarSize()
    /*for legacy*/
    );
    canvas.width = width;
    canvas.height = height; //整数で一致させるためstyleをセットして返す

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    const {
      focus
    } = this[_].selection;

    this[_].focusControl.setFocusRect(this.getCellRect(focus.col, focus.row));
  }
  /**
   * Apply the changed scroll size.
   * @return {boolean} `true` if there was a change in the scroll size
   */


  updateScroll() {
    const {
      scrollable
    } = this[_];

    const newHeight = _getScrollHeight.call(this);

    const newWidth = _getScrollWidth(this);

    if (newHeight === scrollable.scrollHeight && newWidth === scrollable.scrollWidth) {
      return false;
    }

    scrollable.setScrollSize(newWidth, newHeight);
    this[_].scroll = {
      left: scrollable.scrollLeft,
      top: scrollable.scrollTop
    };
    const {
      focus
    } = this[_].selection;

    this[_].focusControl.setFocusRect(this.getCellRect(focus.col, focus.row));

    return true;
  }
  /**
   * Get the row height of the given the row index.
   * @param  {number} row The row index
   * @return {number} The row height
   */


  getRowHeight(row) {
    return _getRowHeight.call(this, row);
  }
  /**
   * Set the row height of the given the row index.
   * @param  {number} row The row index
   * @param  {number} height The row height
   * @return {void}
   */


  setRowHeight(row, height) {
    _setRowHeight(this, row, height);
  }
  /**
   * Get the column width of the given the column index.
   * @param  {number} col The column index
   * @return {number} The column width
   */


  getColWidth(col) {
    return _getColWidth(this, col);
  }
  /**
   * Set the column width of the given the column index.
   * @param  {number} col The column index
   * @param  {number} width The column width
   * @return {void}
   */


  setColWidth(col, width) {
    _setColWidth(this, col, width);
  }
  /**
   * Get the column max width of the given the column index.
   * @param  {number} col The column index
   * @return {number} The column max width
   */


  getMaxColWidth(col) {
    const obj = this[_].colWidthsLimit[col];
    return obj && obj.max || undefined;
  }
  /**
   * Set the column max width of the given the column index.
   * @param  {number} col The column index
   * @param  {number} maxwidth The column max width
   * @return {void}
   */


  setMaxColWidth(col, maxwidth) {
    const obj = this[_].colWidthsLimit[col] || (this[_].colWidthsLimit[col] = {});

    if (maxwidth != null) {
      obj.max = maxwidth;
    } else {
      delete obj.max;
    }
  }
  /**
   * Get the column min width of the given the column index.
   * @param  {number} col The column index
   * @return {number} The column min width
   */


  getMinColWidth(col) {
    const obj = this[_].colWidthsLimit[col];
    return obj && obj.min || undefined;
  }
  /**
   * Set the column min width of the given the column index.
   * @param  {number} col The column index
   * @param  {number} minwidth The column min width
   * @return {void}
   */


  setMinColWidth(col, minwidth) {
    const obj = this[_].colWidthsLimit[col] || (this[_].colWidthsLimit[col] = {});

    if (minwidth != null) {
      obj.min = minwidth;
    } else {
      delete obj.min;
    }
  }
  /**
   * Get the rect of the cell.
   * @param {number} col index of column, of the cell
   * @param {number} row index of row, of the cell
   * @returns {Rect} the rect of the cell.
   */


  getCellRect(col, row) {
    const isFrozenCell = this.isFrozenCell(col, row);

    let absoluteLeft = _getColsWidth(this, 0, col - 1);

    const width = _getColWidth(this, col);

    if (isFrozenCell && isFrozenCell.col) {
      absoluteLeft += this[_].scroll.left;
    }

    let absoluteTop = _getRowsHeight.call(this, 0, row - 1);

    const height = _getRowHeight.call(this, row);

    if (isFrozenCell && isFrozenCell.row) {
      absoluteTop += this[_].scroll.top;
    }

    return new Rect_1.Rect(absoluteLeft, absoluteTop, width, height);
  }
  /**
   * Get the relative rectangle of the cell.
   * @param {number} col index of column, of the cell
   * @param {number} row index of row, of the cell
   * @returns {Rect} the rect of the cell.
   */


  getCellRelativeRect(col, row) {
    return _toRelativeRect(this, this.getCellRect(col, row));
  }
  /**
   * Get the rectangle of the cells area.
   * @param {number} startCol index of the starting column, of the cell
   * @param {number} startRow index of the starting row, of the cell
   * @param {number} endCol index of the ending column, of the cell
   * @param {number} endRow index of the ending row, of the cell
   * @returns {Rect} the rect of the cells.
   */


  getCellsRect(startCol, startRow, endCol, endRow) {
    const isFrozenStartCell = this.isFrozenCell(startCol, startRow);
    const isFrozenEndCell = this.isFrozenCell(endCol, endRow);

    let absoluteLeft = _getColsWidth(this, 0, startCol - 1);

    let width = _getColsWidth(this, startCol, endCol);

    if (isFrozenStartCell && isFrozenStartCell.col) {
      const scrollLeft = this[_].scroll.left;
      absoluteLeft += scrollLeft;

      if (!isFrozenEndCell || !isFrozenEndCell.col) {
        width -= scrollLeft;
        width = Math.max(width, _getColsWidth(this, startCol, this.frozenColCount - 1));
      }
    }

    let absoluteTop = _getRowsHeight.call(this, 0, startRow - 1);

    let height = _getRowsHeight.call(this, startRow, endRow);

    if (isFrozenStartCell && isFrozenStartCell.row) {
      const scrollTop = this[_].scroll.top;
      absoluteTop += scrollTop;

      if (!isFrozenEndCell || !isFrozenEndCell.row) {
        height -= scrollTop;
        height = Math.max(height, _getColsWidth(this, startRow, this.frozenRowCount - 1));
      }
    }

    return new Rect_1.Rect(absoluteLeft, absoluteTop, width, height);
  }

  getCellRangeRect(range) {
    return this.getCellsRect(range.start.col, range.start.row, range.end.col, range.end.row);
  }

  isFrozenCell(col, row) {
    const {
      frozenRowCount,
      frozenColCount
    } = this[_];
    const isFrozenRow = frozenRowCount > 0 && row < frozenRowCount;
    const isFrozenCol = frozenColCount > 0 && col < frozenColCount;

    if (isFrozenRow || isFrozenCol) {
      return {
        row: isFrozenRow,
        col: isFrozenCol
      };
    } else {
      return null;
    }
  }

  getRowAt(absoluteY) {
    const frozen = _getTargetFrozenRowAt(this, absoluteY);

    if (frozen) {
      return frozen.row;
    }

    const row = _getTargetRowAt.call(this, absoluteY);

    return row ? row.row : -1;
  }

  getColAt(absoluteX) {
    const frozen = _getTargetFrozenColAt(this, absoluteX);

    if (frozen) {
      return frozen.col;
    }

    const col = _getTargetColAt(this, absoluteX);

    return col ? col.col : -1;
  }

  getCellAt(absoluteX, absoluteY) {
    return {
      row: this.getRowAt(absoluteY),
      col: this.getColAt(absoluteX)
    };
  }
  /**
   * Scroll to where cell is visible.
   * @param  {number} col The column index.
   * @param  {number} row The row index
   * @return {void}
   */


  makeVisibleCell(col, row) {
    const isFrozenCell = this.isFrozenCell(col, row);

    if (isFrozenCell && isFrozenCell.col && isFrozenCell.row) {
      return;
    }

    const rect = this.getCellRect(col, row);

    const visibleRect = _getScrollableVisibleRect(this);

    if (visibleRect.contains(rect)) {
      return;
    }

    const {
      scrollable
    } = this[_];

    if (!isFrozenCell || !isFrozenCell.col) {
      if (rect.left < visibleRect.left) {
        scrollable.scrollLeft -= visibleRect.left - rect.left;
      } else if (visibleRect.right < rect.right) {
        scrollable.scrollLeft -= visibleRect.right - rect.right;
      }
    }

    if (!isFrozenCell || !isFrozenCell.row) {
      if (rect.top < visibleRect.top) {
        scrollable.scrollTop -= visibleRect.top - rect.top;
      } else if (visibleRect.bottom < rect.bottom) {
        scrollable.scrollTop -= visibleRect.bottom - rect.bottom;
      }
    }
  }
  /**
   * Moves the focus cursor to the given cell.
   * @param  {number} col The column index.
   * @param  {number} row The row index
   * @return {void}
   */


  setFocusCursor(col, row) {
    const {
      focusControl
    } = this[_];
    const oldEditMode = focusControl.editMode;
    focusControl.setFocusRect(this.getCellRect(col, row));

    _updatedSelection.call(this);

    if (oldEditMode && !focusControl.editMode) {
      focusControl.resetInputStatus();
    }
  }
  /**
   * Focus the cell.
   * @param  {number} col The column index.
   * @param  {number} row The row index
   * @return {void}
   */


  focusCell(col, row) {
    this.setFocusCursor(col, row); // Failure occurs in IE if focus is not last

    this[_].focusControl.focus();
  }
  /**
   * Redraws the range of the given cell.
   * @param  {number} col The column index of cell.
   * @param  {number} row The row index of cell.
   * @return {void}
   */


  invalidateCell(col, row) {
    this.invalidateGridRect(col, row);
  }
  /**
   * Redraws the range of the given cells.
   * @param {number} startCol index of the starting column, of the cell
   * @param {number} startRow index of the starting row, of the cell
   * @param {number} endCol index of the ending column, of the cell
   * @param {number} endRow index of the ending row, of the cell
   * @return {void}
   */


  invalidateGridRect(startCol, startRow, endCol = startCol, endRow = startRow) {
    const offset = this.getOffsetInvalidateCells();

    if (offset > 0) {
      startCol -= offset;
      startRow -= offset;
      endCol += offset;
      endRow += offset;
    }

    const visibleRect = _getVisibleRect(this);

    const cellsRect = this.getCellsRect(startCol, startRow, endCol, endRow);
    const invalidateTarget = visibleRect.intersection(cellsRect);

    if (invalidateTarget) {
      const {
        frozenColCount,
        frozenRowCount
      } = this[_];

      if (frozenColCount > 0 && endCol >= frozenColCount) {
        const frozenRect = _getFrozenColsRect(this);

        if (frozenRect.intersection(invalidateTarget)) {
          invalidateTarget.left = Math.min(frozenRect.right - 1, invalidateTarget.left);
        }
      }

      if (frozenRowCount > 0 && endRow >= frozenRowCount) {
        const frozenRect = _getFrozenRowsRect(this);

        if (frozenRect.intersection(invalidateTarget)) {
          invalidateTarget.top = Math.min(frozenRect.bottom - 1, invalidateTarget.top);
        }
      }

      _invalidateRect(this, invalidateTarget);
    }
  }

  invalidateCellRange(range) {
    this.invalidateGridRect(range.start.col, range.start.row, range.end.col, range.end.row);
  }
  /**
   * Redraws the whole grid.
   * @return {void}
   */


  invalidate() {
    const visibleRect = _getVisibleRect(this);

    _invalidateRect(this, visibleRect);
  }
  /**
   * Get the number of scrollable rows fully visible in the grid. visibleRowCount does not include the frozen rows counted by the frozenRowCount property. It does not include any partially visible rows on the bottom of the grid.
   * @returns {number}
   */


  get visibleRowCount() {
    const {
      frozenRowCount
    } = this;

    const visibleRect = _getVisibleRect(this);

    const visibleTop = frozenRowCount > 0 ? visibleRect.top + _getRowsHeight.call(this, 0, frozenRowCount - 1) : visibleRect.top;

    const initRow = _getTargetRowAt.call(this, visibleTop);

    if (!initRow) {
      return 0;
    }

    const startRow = Math.max(initRow.top >= visibleTop ? initRow.row : initRow.row + 1, frozenRowCount);

    let absoluteTop = _getRowsHeight.call(this, 0, startRow - 1);

    let count = 0;
    const {
      rowCount
    } = this;

    for (let row = startRow; row < rowCount; row++) {
      const height = _getRowHeight.call(this, row);

      const bottom = absoluteTop + height;

      if (visibleRect.bottom < bottom) {
        break;
      }

      count++;
      absoluteTop = bottom;
    }

    return count;
  }
  /**
   * Get the number of scrollable columns fully visible in the grid. visibleColCount does not include the frozen columns counted by the frozenColCount property. It does not include any partially visible columns on the right of the grid.
   * @returns {number}
   */


  get visibleColCount() {
    const {
      frozenColCount
    } = this;

    const visibleRect = _getVisibleRect(this);

    const visibleLeft = frozenColCount > 0 ? visibleRect.left + _getColsWidth(this, 0, frozenColCount - 1) : visibleRect.left;

    const initCol = _getTargetColAt(this, visibleLeft);

    if (!initCol) {
      return 0;
    }

    const startCol = Math.max(initCol.left >= visibleLeft ? initCol.col : initCol.col + 1, frozenColCount);

    let absoluteLeft = _getColsWidth(this, 0, startCol - 1);

    let count = 0;
    const {
      colCount
    } = this;

    for (let col = startCol; col < colCount; col++) {
      const width = _getColWidth(this, col);

      const right = absoluteLeft + width;

      if (visibleRect.right < right) {
        break;
      }

      count++;
      absoluteLeft = right;
    }

    return count;
  }
  /**
   * Get the index of the first row in the scrollable region that is visible.
   * @returns {number}
   */


  get topRow() {
    const {
      frozenRowCount
    } = this;

    const visibleRect = _getVisibleRect(this);

    const visibleTop = frozenRowCount > 0 ? visibleRect.top + _getRowsHeight.call(this, 0, frozenRowCount - 1) : visibleRect.top;

    const initRow = _getTargetRowAt.call(this, visibleTop);

    if (!initRow) {
      return 0;
    }

    return Math.max(initRow.top >= visibleTop ? initRow.row : initRow.row + 1, frozenRowCount);
  }
  /**
   * Get the index of the first column in the scrollable region that is visible.
   * @returns {number}
   */


  get leftCol() {
    const {
      frozenColCount
    } = this;

    const visibleRect = _getVisibleRect(this);

    const visibleLeft = frozenColCount > 0 ? visibleRect.left + _getColsWidth(this, 0, frozenColCount - 1) : visibleRect.left;

    const initCol = _getTargetColAt(this, visibleLeft);

    if (!initCol) {
      return 0;
    }

    return Math.max(initCol.left >= visibleLeft ? initCol.col : initCol.col + 1, frozenColCount);
  }
  /**
   * gets or sets the number of pixels that an element's content is scrolled vertically
   */


  get scrollTop() {
    return this[_].scrollable.scrollTop;
  }

  set scrollTop(scrollTop) {
    this[_].scrollable.scrollTop = scrollTop;
  }
  /**
   * gets or sets the number of pixels that an element's content is scrolled from its left edge
   */


  get scrollLeft() {
    return this[_].scrollable.scrollLeft;
  }

  set scrollLeft(scrollLeft) {
    this[_].scrollable.scrollLeft = scrollLeft;
  }
  /**
   * Get the value of cell with the copy action.
   * <p>
   * Please implement
   * </p>
   *
   * @protected
   * @param col Column index of cell.
   * @param row Row index of cell.
   * @param range Copy range.
   * @return {string} the value of cell
   */


  getCopyCellValue(_col, _row, _range) {
    //Please implement get cell value!!
    return undefined;
  }
  /**
   * Get the overflowed text in the cell rectangle, from the given cell.
   * @param  {number} col The column index.
   * @param  {number} row The row index
   * @return {string | null} The text overflowing the cell rect.
   */


  getCellOverflowText(col, row) {
    const key = `${col}:${row}`;
    return this[_].cellTextOverflows[key] || null;
  }
  /**
   * Set the overflowed text in the cell rectangle, to the given cell.
   * @param  {number} col The column index.
   * @param  {number} row The row index
   * @param  {string} overflowText The overflowed text in the cell rectangle.
   * @return {void}
   */


  setCellOverflowText(col, row, overflowText) {
    const key = `${col}:${row}`;

    if (overflowText) {
      this[_].cellTextOverflows[key] = typeof overflowText === "string" ? overflowText.trim() : overflowText;
    } else {
      delete this[_].cellTextOverflows[key];
    }
  }

  addDisposable(disposable) {
    if (!disposable || !disposable.dispose || typeof disposable.dispose !== "function") {
      throw new Error("not disposable!");
    }

    const disposables = this[_].disposables = this[_].disposables || [];
    disposables.push(disposable);
  }
  /**
   * Dispose the grid instance.
   * @returns {void}
   */


  dispose() {
    super.dispose();
    const protectedSpace = this[_];
    protectedSpace.handler.dispose();
    protectedSpace.scrollable.dispose();
    protectedSpace.focusControl.dispose();
    protectedSpace.columnResizer.dispose();
    protectedSpace.cellSelector.dispose();

    if (protectedSpace.disposables) {
      protectedSpace.disposables.forEach(disposable => disposable.dispose());
      protectedSpace.disposables = null;
    }

    const {
      parentElement
    } = protectedSpace.element;

    if (parentElement) {
      parentElement.removeChild(protectedSpace.element);
    }
  }

  getAttachCellsArea(range) {
    return {
      element: this.getElement(),
      rect: _toRelativeRect(this, this.getCellRangeRect(range))
    };
  }

  onKeyDownMove(evt) {
    _onKeyDownMove.call(this, evt);
  }

  bindEventsInternal() {//nop
  }

  getTargetRowAtInternal(_absoluteY) {//継承用 設定を無視して計算する場合継承して実装
  }

  getRowsHeightInternal(_startRow, _endRow) {//継承用 設定を無視して計算する場合継承して実装
  }

  getRowHeightInternal(_row) {//継承用 設定を無視して計算する場合継承して実装
  }

  getScrollHeightInternal(_row) {//継承用 設定を無視して計算する場合継承して実装
  }

  getMoveLeftColByKeyDownInternal({
    col
  }) {
    return col - 1;
  }

  getMoveRightColByKeyDownInternal({
    col
  }) {
    return col + 1;
  }

  getMoveUpRowByKeyDownInternal({
    row
  }) {
    return row - 1;
  }

  getMoveDownRowByKeyDownInternal({
    row
  }) {
    return row + 1;
  }

  getOffsetInvalidateCells() {
    return 0;
  }

  getCopyRangeInternal(range) {
    return range;
  }

  _getInitContext() {
    const ctx = this[_].context; //初期化

    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.lineWidth = 1;
    ctx.font = this.font || "16px sans-serif";
    return ctx;
  }

  fireListeners(type, ...event) {
    return super.fireListeners(type, ...event);
  }

}

exports.DrawGrid = DrawGrid;

/***/ }),

/***/ "./core/EventTarget.js":
/*!*****************************!*\
  !*** ./core/EventTarget.js ***!
  \*****************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _a;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventTarget = void 0;

const utils_1 = __webpack_require__(/*! ../internal/utils */ "./internal/utils.js");

const symbolManager_1 = __webpack_require__(/*! ../internal/symbolManager */ "./internal/symbolManager.js"); //private symbol

/** @private */


const _ = (0, symbolManager_1.get)();
/** @private */


let nextId = 1;
/**
 * event target.
 */

class EventTarget {
  constructor() {
    this[_a] = {
      listeners: {},
      listenerData: {}
    };
  }
  /**
   * Adds an event listener.
   * @param  {string} type The event type id.
   * @param  {function} listener Callback method.
   * @return {number} unique id for the listener.
   */


  listen(type, listener) {
    const list = this[_].listeners[type] || (this[_].listeners[type] = []);
    list.push(listener);
    const id = nextId++;
    this[_].listenerData[id] = {
      type,
      listener,
      remove: () => {
        delete this[_].listenerData[id];
        const index = list.indexOf(listener);
        list.splice(index, 1);

        if (!this[_].listeners[type].length) {
          delete this[_].listeners[type];
        }
      }
    };
    return id;
  }
  /**
   * Removes an event listener which was added with listen() by the id returned by listen().
   * @param  {number} id the id returned by listen().
   * @return {void}
   */


  unlisten(id) {
    if (!this[_]) {
      return;
    }

    this[_].listenerData[id].remove();
  }

  addEventListener(type, listener) {
    this.listen(type, listener);
  }

  removeEventListener(type, listener) {
    if (!this[_]) {
      return;
    }

    (0, utils_1.each)(this[_].listenerData, (obj, id) => {
      if (obj.type === type && obj.listener === listener) {
        this.unlisten(id);
      }
    });
  }

  hasListeners(type) {
    if (!this[_]) {
      return false;
    }

    return !!this[_].listeners[type];
  }
  /**
   * Fires all registered listeners
   * @param  {string}    type The type of the listeners to fire.
   * @param  {...*} args fire arguments
   * @return {*} the result of the last listener
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any


  fireListeners(type, ...args) {
    if (!this[_]) {
      return [];
    }

    const list = this[_].listeners[type];

    if (!list) {
      return [];
    }

    return list.map(listener => listener.call(this, ...args)).filter(r => r != null);
  }

  dispose() {
    // @ts-expect-error -- ignore
    delete this[_];
  }

}

exports.EventTarget = EventTarget;
_a = _;

/***/ }),

/***/ "./data.js":
/*!*****************!*\
  !*** ./data.js ***!
  \*****************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterDataSource = exports.CachedDataSource = exports.DataSource = void 0;

const DataSource_1 = __webpack_require__(/*! ./data/DataSource */ "./data/DataSource.js");

Object.defineProperty(exports, "DataSource", {
  enumerable: true,
  get: function () {
    return DataSource_1.DataSource;
  }
});

const CachedDataSource_1 = __webpack_require__(/*! ./data/CachedDataSource */ "./data/CachedDataSource.js");

Object.defineProperty(exports, "CachedDataSource", {
  enumerable: true,
  get: function () {
    return CachedDataSource_1.CachedDataSource;
  }
});

const FilterDataSource_1 = __webpack_require__(/*! ./data/FilterDataSource */ "./data/FilterDataSource.js");

Object.defineProperty(exports, "FilterDataSource", {
  enumerable: true,
  get: function () {
    return FilterDataSource_1.FilterDataSource;
  }
});

/***/ }),

/***/ "./data/CachedDataSource.js":
/*!**********************************!*\
  !*** ./data/CachedDataSource.js ***!
  \**********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CachedDataSource = void 0;

const DataSource_1 = __webpack_require__(/*! ./DataSource */ "./data/DataSource.js");
/** @private */


function _setFieldCache( // eslint-disable-next-line @typescript-eslint/no-explicit-any
fCache, index, field, // eslint-disable-next-line @typescript-eslint/no-explicit-any
value) {
  const recCache = fCache[index] || (fCache[index] = new Map());
  recCache.set(field, value);
}
/**
 * grid data source for caching Promise data
 *
 * @classdesc cheetahGrid.data.CachedDataSource
 * @memberof cheetahGrid.data
 */


class CachedDataSource extends DataSource_1.DataSource {
  static get EVENT_TYPE() {
    return DataSource_1.DataSource.EVENT_TYPE;
  }

  static ofArray(array) {
    return new CachedDataSource({
      get: index => array[index],
      length: array.length,
      source: array
    });
  }

  constructor(opt) {
    super(opt);
    this._rCache = {};
    this._fCache = {};
  }

  getOriginal(index) {
    if (this._rCache && this._rCache[index]) {
      return this._rCache[index];
    }

    return super.getOriginal(index);
  }

  getOriginalField(index, field) {
    const rowCache = this._fCache && this._fCache[index];

    if (rowCache) {
      const cache = rowCache.get(field);

      if (cache) {
        return cache;
      }
    }

    return super.getOriginalField(index, field);
  }

  setOriginalField(index, field, // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value) {
    const fCache = this._fCache;

    if (fCache && fCache[index]) {
      delete fCache[index]; // clear row cache
    }

    return super.setOriginalField(index, field, value);
  }

  clearCache() {
    if (this._rCache) {
      this._rCache = {};
    }

    if (this._fCache) {
      this._fCache = {};
    }
  }

  fieldPromiseCallBackInternal(index, field, // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value) {
    _setFieldCache(this._fCache, index, field, value);
  }

  recordPromiseCallBackInternal(index, // eslint-disable-next-line @typescript-eslint/no-explicit-any
  record) {
    this._rCache[index] = record;
  }

  dispose() {
    super.dispose();
  }

}

exports.CachedDataSource = CachedDataSource;

/***/ }),

/***/ "./data/DataSource.js":
/*!****************************!*\
  !*** ./data/DataSource.js ***!
  \****************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataSource = void 0;

const sort = __importStar(__webpack_require__(/*! ../internal/sort */ "./internal/sort.js"));

const utils_1 = __webpack_require__(/*! ../internal/utils */ "./internal/utils.js");

const EventTarget_1 = __webpack_require__(/*! ../core/EventTarget */ "./core/EventTarget.js");
/** @private */


function isFieldAssessor(field) {
  if (utils_1.obj.isObject(field)) {
    if (field.get && field.set) {
      return true;
    }
  }

  return false;
}
/** @private */


const EVENT_TYPE = {
  UPDATE_LENGTH: "update_length",
  UPDATED_LENGTH: "updated_length",
  UPDATED_ORDER: "updated_order"
};
/** @private */

function ascOrderFn(v1, v2) {
  if (v1 === v2) {
    return 0;
  }

  if (v1 == null) {
    return v2 == null ? // If both are nullish, consider a match.
    0 : // Nulls first
    -1;
  }

  if (v2 == null) {
    // Nulls first
    return 1;
  }

  return v1 > v2 ? 1 : -1;
}

function descOrderFn(v1, v2) {
  return ascOrderFn(v1, v2) * -1;
}
/** @private */


function getValue(value, setPromiseBack) {
  const maybePromiseValue = (0, utils_1.getOrApply)(value);

  if ((0, utils_1.isPromise)(maybePromiseValue)) {
    const promiseValue = maybePromiseValue.then(r => {
      setPromiseBack(r);
      return r;
    }); //一時的にキャッシュ

    setPromiseBack(promiseValue);
    return promiseValue;
  } else {
    return maybePromiseValue;
  }
}
/** @private */


function getField(record, field, // eslint-disable-next-line @typescript-eslint/no-explicit-any
setPromiseBack) {
  if (record == null) {
    return undefined;
  }

  if ((0, utils_1.isPromise)(record)) {
    return record.then(r => getField(r, field, setPromiseBack));
  }

  const fieldGet = isFieldAssessor(field) ? field.get : field;

  if (fieldGet in record) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fieldResult = record[fieldGet]; // eslint-disable-next-line @typescript-eslint/no-explicit-any

    return getValue(fieldResult, setPromiseBack);
  }

  if (typeof fieldGet === "function") {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fieldResult = fieldGet(record);
    return getValue(fieldResult, setPromiseBack);
  } // eslint-disable-next-line @typescript-eslint/restrict-template-expressions


  const ss = String(fieldGet).split(".");

  if (ss.length <= 1) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fieldResult = record[fieldGet];
    return getValue(fieldResult, setPromiseBack);
  }

  const fieldResult = (0, utils_1.applyChainSafe)(record, // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (val, name) => getField(val, name, utils_1.emptyFn), ...ss);
  return getValue(fieldResult, setPromiseBack);
}
/** @private */


function setField(record, field, // eslint-disable-next-line @typescript-eslint/no-explicit-any
value) {
  if (record == null) {
    return false;
  }

  const fieldSet = isFieldAssessor(field) ? field.set : field;

  if (fieldSet in record) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    record[fieldSet] = value;
  } else if (typeof fieldSet === "function") {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return fieldSet(record, value);
  } else if (typeof fieldSet === "string") {
    const ss = `${fieldSet}`.split("."); // eslint-disable-next-line @typescript-eslint/no-explicit-any

    let obj = record;
    const {
      length
    } = ss;

    for (let i = 0; i < length; i++) {
      const f = ss[i];

      if (i === length - 1) {
        obj[f] = value;
      } else {
        obj = obj[f] || (obj[f] = {});
      }
    }
  } else {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    record[fieldSet] = value;
  }

  return true;
}
/** @private */


function _getIndex(sortedIndexMap, index) {
  if (!sortedIndexMap) {
    return index;
  }

  const mapIndex = sortedIndexMap[index];
  return mapIndex != null ? mapIndex : index;
}
/**
 * grid data source
 *
 * @classdesc cheetahGrid.data.DataSource
 * @memberof cheetahGrid.data
 */


class DataSource extends EventTarget_1.EventTarget {
  static get EVENT_TYPE() {
    return EVENT_TYPE;
  }

  static ofArray(array) {
    return new DataSource({
      get: index => array[index],
      length: array.length,
      source: array
    });
  }

  constructor(obj) {
    var _a;

    super();
    this._sortedIndexMap = null; // eslint-disable-next-line @typescript-eslint/no-explicit-any

    this._get = (obj === null || obj === void 0 ? void 0 : obj.get.bind(obj)) || undefined;
    this._length = (obj === null || obj === void 0 ? void 0 : obj.length) || 0;
    this._source = (_a = obj === null || obj === void 0 ? void 0 : obj.source) !== null && _a !== void 0 ? _a : obj;
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any


  get source() {
    return this._source;
  }

  get(index) {
    return this.getOriginal(_getIndex(this._sortedIndexMap, index));
  }

  getField(index, field) {
    return this.getOriginalField(_getIndex(this._sortedIndexMap, index), field);
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any


  hasField(index, field) {
    return this.hasOriginalField(_getIndex(this._sortedIndexMap, index), field);
  }

  setField(index, field, // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value) {
    return this.setOriginalField(_getIndex(this._sortedIndexMap, index), field, value);
  }

  sort(field, order) {
    const sortedIndexMap = new Array(this._length);
    const orderFn = order !== "desc" ? ascOrderFn : descOrderFn;
    return sort.sortPromise(index => sortedIndexMap[index] != null ? sortedIndexMap[index] : sortedIndexMap[index] = index, (index, rel) => {
      sortedIndexMap[index] = rel;
    }, this._length, orderFn, index => this.getOriginalField(index, field)).then(() => {
      this._sortedIndexMap = sortedIndexMap;
      this.fireListeners(EVENT_TYPE.UPDATED_ORDER);
    });
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (this._length === length) {
      return;
    }

    const results = this.fireListeners(EVENT_TYPE.UPDATE_LENGTH, length);

    if (utils_1.array.findIndex(results, v => !v) >= 0) {
      return;
    }

    this._length = length;
    this.fireListeners(EVENT_TYPE.UPDATED_LENGTH, this._length);
  }

  get dataSource() {
    return this;
  }

  dispose() {
    super.dispose();
  }

  getOriginal(index) {
    return getValue(this._get(index), val => {
      this.recordPromiseCallBackInternal(index, val);
    });
  }

  getOriginalField(index, field) {
    if (field == null) {
      return undefined;
    }

    const record = this.getOriginal(index);
    return getField(record, field, val => {
      this.fieldPromiseCallBackInternal(index, field, val);
    });
  }

  hasOriginalField(index, field) {
    if (field == null) {
      return false;
    }

    if (typeof field === "function") {
      return true;
    }

    const record = this.getOriginal(index);
    return Boolean(record && field in record);
  }

  setOriginalField(index, field, // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value) {
    if (field == null) {
      return false;
    }

    const record = this.getOriginal(index);

    if ((0, utils_1.isPromise)(record)) {
      return record.then(r => setField(r, field, value));
    }

    return setField(record, field, value);
  }

  fieldPromiseCallBackInternal(_index, _field, // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _value) {//
  }

  recordPromiseCallBackInternal(_index, _record) {//
  }

}

exports.DataSource = DataSource; // eslint-disable-next-line @typescript-eslint/no-explicit-any

DataSource.EMPTY = new DataSource({
  get() {
    /*noop */
  },

  length: 0
});

/***/ }),

/***/ "./data/FilterDataSource.js":
/*!**********************************!*\
  !*** ./data/FilterDataSource.js ***!
  \**********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterDataSource = void 0;

const utils_1 = __webpack_require__(/*! ../internal/utils */ "./internal/utils.js");

const DataSource_1 = __webpack_require__(/*! ./DataSource */ "./data/DataSource.js");

const EventHandler_1 = __webpack_require__(/*! ../internal/EventHandler */ "./internal/EventHandler.js");
/** @private */


class DataSourceIterator {
  constructor(dataSource) {
    this._dataSource = dataSource;
    this._curIndex = -1;
    this._data = [];
  }

  hasNext() {
    const next = this._curIndex + 1;
    return this._dataSource.length > next;
  }

  next() {
    const next = this._curIndex + 1;

    const data = this._getIndexData(next);

    this._curIndex = next;
    return data;
  }

  movePrev() {
    this._curIndex--;
  }

  _getIndexData(index, nest) {
    const dataSource = this._dataSource;
    const data = this._data;

    if (index < data.length) {
      return data[index];
    }

    if (dataSource.length <= index) {
      return undefined;
    }

    const record = this._dataSource.get(index);

    data[index] = record;

    if ((0, utils_1.isPromise)(record)) {
      record.then(val => {
        data[index] = val;
      });

      if (!nest) {
        for (let i = 1; i <= 100; i++) {
          this._getIndexData(index + i, true);
        }
      }
    }

    return record;
  }

}
/** @private */


class FilterData {
  constructor(dc, original, filter) {
    this._cancel = false;
    this._owner = dc;
    this._dataSourceItr = new DataSourceIterator(original);
    this._filter = filter;
    this._filteredList = [];
    this._queues = [];
  }

  get(index) {
    if (this._cancel) {
      return undefined;
    }

    const filteredList = this._filteredList;

    if (index < filteredList.length) {
      return filteredList[index];
    }

    const queues = this._queues;
    const indexQueue = queues[index];

    if (indexQueue) {
      return indexQueue;
    }

    return queues[index] || this._findIndex(index);
  }

  cancel() {
    this._cancel = true;
  }

  _findIndex(index) {
    if (window.Promise) {
      const timeout = Date.now() + 100;
      let count = 0;
      return this._findIndexWithTimeout(index, () => {
        count++;

        if (count >= 100) {
          count = 0;
          return timeout < Date.now();
        }

        return false;
      });
    }

    return this._findIndexWithTimeout(index, () => false);
  }

  _findIndexWithTimeout(index, testTimeout) {
    const filteredList = this._filteredList;
    const filter = this._filter;
    const dataSourceItr = this._dataSourceItr;
    const queues = this._queues;

    while (dataSourceItr.hasNext()) {
      if (this._cancel) {
        return undefined;
      }

      const record = dataSourceItr.next();

      if ((0, utils_1.isPromise)(record)) {
        dataSourceItr.movePrev();
        const queue = record.then(_value => {
          queues[index] = null;
          return this.get(index);
        });
        queues[index] = queue;
        return queue;
      }

      if (filter(record)) {
        filteredList.push(record);

        if (index < filteredList.length) {
          return filteredList[index];
        }
      }

      if (testTimeout()) {
        const promise = new Promise(resolve => {
          setTimeout(() => {
            resolve();
          }, 300);
        });
        const queue = promise.then(() => {
          queues[index] = null;
          return this.get(index);
        });
        queues[index] = queue;
        return queue;
      }
    }

    const dc = this._owner;
    dc.length = filteredList.length;
    return undefined;
  }

}
/**
 * grid data source for filter
 *
 * @classdesc cheetahGrid.data.FilterDataSource
 * @memberof cheetahGrid.data
 */


class FilterDataSource extends DataSource_1.DataSource {
  static get EVENT_TYPE() {
    return DataSource_1.DataSource.EVENT_TYPE;
  }

  constructor(dataSource, filter) {
    super(dataSource);
    this._filterData = null;
    this._dataSource = dataSource;
    this.filter = filter;
    const handler = this._handler = new EventHandler_1.EventHandler();
    handler.on(dataSource, DataSource_1.DataSource.EVENT_TYPE.UPDATED_ORDER, () => {
      // reset
      // eslint-disable-next-line no-self-assign
      this.filter = this.filter;
    });
    (0, utils_1.each)(DataSource_1.DataSource.EVENT_TYPE, type => {
      handler.on(dataSource, type, (...args) => this.fireListeners(type, ...args));
    });
  }

  get filter() {
    var _a;

    return ((_a = this._filterData) === null || _a === void 0 ? void 0 : _a._filter) || null;
  }

  set filter(filter) {
    if (this._filterData) {
      this._filterData.cancel();
    }

    this._filterData = filter ? new FilterData(this, this._dataSource, filter) : null;
    this.length = this._dataSource.length;
  }

  getOriginal(index) {
    if (!this._filterData) {
      return super.getOriginal(index);
    }

    return this._filterData.get(index);
  }

  sort(field, order) {
    return this._dataSource.sort(field, order);
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any


  get source() {
    return this._dataSource.source;
  }

  get dataSource() {
    return this._dataSource;
  }

  dispose() {
    this._handler.dispose();

    super.dispose();
  }

}

exports.FilterDataSource = FilterDataSource;

/***/ }),

/***/ "./element/Inline.js":
/*!***************************!*\
  !*** ./element/Inline.js ***!
  \***************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Inline = void 0;

const utils_1 = __webpack_require__(/*! ../internal/utils */ "./internal/utils.js");

function getWidth(ctx, content) {
  return ctx.measureText(content).width;
}

function breakWidth(ctx, content, itr, candidateIndex, width) {
  const chars = [];
  let ret = itr.next();

  for (let i = 0; i < candidateIndex && ret !== null; i++, ret = itr.next()) {
    chars.push(ret);
  }

  let beforeWidth = getWidth(ctx, chars.join(""));

  if (beforeWidth > width) {
    while (chars.length) {
      const c = chars.pop();
      beforeWidth -= getWidth(ctx, c || "");

      if (beforeWidth <= width) {
        break;
      }
    }
  } else if (beforeWidth < width) {
    while (ret !== null) {
      const charWidth = getWidth(ctx, ret);

      if (beforeWidth + charWidth > width) {
        break;
      }

      chars.push(ret);
      beforeWidth += charWidth;
      ret = itr.next();
    }
  }

  const beforeContent = chars.join("").replace(/\s+$/, "");
  const afterContent = content.slice(beforeContent.length).replace(/^\s+/, "");
  return {
    before: beforeContent ? new Inline(beforeContent) : null,
    after: afterContent ? new Inline(afterContent) : null
  };
}

class Inline {
  constructor(content) {
    this._content = content != null ? content : "";
  }

  width({
    ctx
  }) {
    return getWidth(ctx, this._content);
  }

  font() {
    return null;
  }

  color() {
    return null;
  }

  canDraw() {
    return true;
  } // eslint-disable-next-line @typescript-eslint/no-empty-function


  onReady(_callback) {}

  draw({
    ctx,
    canvashelper,
    rect,
    offset,
    offsetLeft,
    offsetRight,
    offsetTop,
    offsetBottom
  }) {
    canvashelper.fillTextRect(ctx, this._content, rect.left, rect.top, rect.width, rect.height, {
      offset: offset + 1,
      padding: {
        left: offsetLeft,
        right: offsetRight,
        top: offsetTop,
        bottom: offsetBottom
      }
    });
  }

  canBreak() {
    return !!this._content;
  }

  splitIndex(index) {
    const content = this._content;
    const itr = utils_1.str.genChars(content);
    const chars = [];
    let ret = itr.next();

    for (let i = 0; i < index && ret !== null; i++, ret = itr.next()) {
      chars.push(ret);
    }

    const beforeContent = chars.join("");
    const afterContent = content.slice(beforeContent.length);
    return {
      before: beforeContent ? new Inline(beforeContent) : null,
      after: afterContent ? new Inline(afterContent) : null
    };
  }

  breakWord(ctx, width) {
    const content = this._content;
    const allWidth = this.width({
      ctx
    });
    const candidate = Math.floor(this._content.length * width / allWidth);
    const itr = utils_1.str.genWords(content);
    return breakWidth(ctx, content, itr, candidate, width);
  }

  breakAll(ctx, width) {
    const content = this._content;
    const allWidth = this.width({
      ctx
    });
    const candidate = Math.floor(this._content.length * width / allWidth);
    const itr = utils_1.str.genChars(content);
    return breakWidth(ctx, content, itr, candidate, width);
  }

  toString() {
    return this._content;
  }

}

exports.Inline = Inline;

/***/ }),

/***/ "./element/InlineDrawer.js":
/*!*********************************!*\
  !*** ./element/InlineDrawer.js ***!
  \*********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineDrawer = void 0;

const Inline_1 = __webpack_require__(/*! ./Inline */ "./element/Inline.js");

class InlineDrawer extends Inline_1.Inline {
  constructor({
    draw,
    width,
    // height,
    color
  }) {
    super();
    this._draw = draw;
    this._width = width; // this._height = height;

    this._color = color;
  }

  width(_arg) {
    return this._width;
  }

  font() {
    return null;
  }

  color() {
    var _a;

    return (_a = this._color) !== null && _a !== void 0 ? _a : null;
  }

  canDraw() {
    return true;
  } // eslint-disable-next-line @typescript-eslint/no-empty-function


  onReady(_callback) {}

  draw({
    ctx,
    canvashelper,
    rect,
    offset,
    offsetLeft,
    offsetRight,
    offsetTop,
    offsetBottom
  }) {
    this._draw({
      ctx,
      canvashelper,
      rect,
      offset,
      offsetLeft,
      offsetRight,
      offsetTop,
      offsetBottom
    });
  }

  canBreak() {
    return false;
  }

  toString() {
    return "";
  }

}

exports.InlineDrawer = InlineDrawer;

/***/ }),

/***/ "./element/InlineIcon.js":
/*!*******************************!*\
  !*** ./element/InlineIcon.js ***!
  \*******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineIcon = void 0;

const fonts = __importStar(__webpack_require__(/*! ../internal/fonts */ "./internal/fonts.js"));

const Inline_1 = __webpack_require__(/*! ./Inline */ "./element/Inline.js");

class InlineIcon extends Inline_1.Inline {
  constructor(icon) {
    super();
    this._icon = icon || {};
  }

  width({
    ctx
  }) {
    const icon = this._icon;

    if (icon.width) {
      return icon.width;
    }

    if (icon.font && fonts.check(icon.font, icon.content || "")) {
      ctx.save();
      ctx.canvas.style.letterSpacing = "normal";

      try {
        ctx.font = icon.font || ctx.font;
        return ctx.measureText(icon.content || "").width;
      } finally {
        ctx.canvas.style.letterSpacing = "";
        ctx.restore();
      }
    }

    return 0; //unknown
  }

  font() {
    var _a;

    return (_a = this._icon.font) !== null && _a !== void 0 ? _a : null;
  }

  color() {
    var _a;

    return (_a = this._icon.color) !== null && _a !== void 0 ? _a : null;
  }

  canDraw() {
    const icon = this._icon;
    return icon.font ? fonts.check(icon.font, icon.content || "") : true;
  }

  onReady(callback) {
    const icon = this._icon;

    if (icon.font && !fonts.check(icon.font, icon.content || "")) {
      fonts.load(icon.font, icon.content || "", callback);
    }
  }

  draw({
    ctx,
    canvashelper,
    rect,
    offset,
    offsetLeft,
    offsetRight,
    offsetTop,
    offsetBottom
  }) {
    const icon = this._icon;

    if (icon.content) {
      ctx.canvas.style.letterSpacing = "normal";

      try {
        // eslint-disable-next-line no-self-assign
        ctx.font = ctx.font; // To apply letterSpacing, we need to reset it.

        canvashelper.fillTextRect(ctx, icon.content, rect.left, rect.top, rect.width, rect.height, {
          offset: offset + 1,
          padding: {
            left: offsetLeft + (this._icon.offsetLeft || 0),
            right: offsetRight,
            top: offsetTop + (this._icon.offsetTop || 0),
            bottom: offsetBottom
          }
        });
      } finally {
        ctx.canvas.style.letterSpacing = "";
      }
    }
  }

  canBreak() {
    return false;
  }

  toString() {
    return "";
  }

}

exports.InlineIcon = InlineIcon;

/***/ }),

/***/ "./element/InlineImage.js":
/*!********************************!*\
  !*** ./element/InlineImage.js ***!
  \********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineImage = void 0;

const Inline_1 = __webpack_require__(/*! ./Inline */ "./element/Inline.js");

const imgs_1 = __webpack_require__(/*! ../internal/imgs */ "./internal/imgs.js");

const utils_1 = __webpack_require__(/*! ../internal/utils */ "./internal/utils.js");

class InlineImage extends Inline_1.Inline {
  constructor({
    src,
    width,
    height,
    imageLeft,
    imageTop,
    imageWidth,
    imageHeight,
    offsetTop,
    offsetLeft
  }) {
    super();
    this._inlineImgPromise = null;
    this._inlineImg = null;
    this._src = src;
    this._width = width;
    this._height = height;
    this._imageLeft = imageLeft;
    this._imageTop = imageTop;
    this._imageWidth = imageWidth;
    this._imageHeight = imageHeight;
    this._offsetTop = offsetTop;
    this._offsetLeft = offsetLeft;
    this._onloaded = [];

    if ((0, utils_1.isPromise)(src)) {
      src.then(s => {
        this._src = s;

        this._loadImage(s);
      });
    } else {
      this._loadImage(src);
    }
  }

  _loadImage(src) {
    const img = this._inlineImgPromise = (0, imgs_1.getCacheOrLoad)("InlineImage", 50, src);

    if ((0, utils_1.isPromise)(img)) {
      img.then(i => {
        this._inlineImg = i;

        this._onloaded.forEach(fn => fn());
      });
    } else {
      this._inlineImg = img;
    }
  }

  width(_arg) {
    var _a, _b;

    return this._width || ((_b = (_a = this._inlineImg) === null || _a === void 0 ? void 0 : _a.width) !== null && _b !== void 0 ? _b : 0);
  }

  font() {
    return null;
  }

  color() {
    return null;
  }

  canDraw() {
    return !!this._inlineImg;
  }

  onReady(callback) {
    if ((0, utils_1.isPromise)(this._src) || (0, utils_1.isPromise)(this._inlineImgPromise)) {
      this._onloaded.push(() => callback());
    }
  }

  draw({
    ctx,
    canvashelper,
    rect,
    offset,
    offsetLeft,
    offsetRight,
    offsetTop,
    offsetBottom
  }) {
    var _a, _b;

    const img = this._inlineImg;
    canvashelper.drawInlineImageRect(ctx, img, this._imageLeft || 0, this._imageTop || 0, this._imageWidth || img.width, this._imageHeight || img.height, this._width || img.width, this._height || img.height, rect.left, rect.top, rect.width, rect.height, {
      offset: offset + 1,
      padding: {
        left: offsetLeft + ((_a = this._offsetLeft) !== null && _a !== void 0 ? _a : 0),
        right: offsetRight,
        top: offsetTop + ((_b = this._offsetTop) !== null && _b !== void 0 ? _b : 0),
        bottom: offsetBottom
      }
    });
  }

  canBreak() {
    return false;
  }

  toString() {
    return "";
  }

}

exports.InlineImage = InlineImage;

/***/ }),

/***/ "./element/InlinePath2D.js":
/*!*********************************!*\
  !*** ./element/InlinePath2D.js ***!
  \*********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlinePath2D = void 0;

const path2DManager = __importStar(__webpack_require__(/*! ../internal/path2DManager */ "./internal/path2DManager.js"));

const Inline_1 = __webpack_require__(/*! ./Inline */ "./element/Inline.js");

const canvases_1 = __webpack_require__(/*! ../internal/canvases */ "./internal/canvases.js");

class InlinePath2D extends Inline_1.Inline {
  constructor({
    path,
    width,
    height,
    color
  }) {
    super(); // このタイミングでないとIEでPath2Dのpolyfillが反映されない

    const Path2D = path2DManager.getPath2D();
    this._path = new Path2D(path);
    this._width = width;
    this._height = height;
    this._color = color;
  }

  width(_arg) {
    return this._width;
  }

  font() {
    return null;
  }

  color() {
    var _a;

    return (_a = this._color) !== null && _a !== void 0 ? _a : null;
  }

  canDraw() {
    return true;
  } // eslint-disable-next-line @typescript-eslint/no-empty-function


  onReady(_callback) {}

  draw({
    ctx,
    rect,
    offset,
    offsetLeft,
    offsetRight,
    offsetTop,
    offsetBottom
  }) {
    offset++;
    const padding = {
      left: offsetLeft,
      right: offsetRight,
      top: offsetTop,
      bottom: offsetBottom
    };
    ctx.save();

    try {
      ctx.beginPath();
      ctx.rect(rect.left, rect.top, rect.width, rect.height); //clip

      ctx.clip(); //文字描画

      const pos = (0, canvases_1.calcStartPosition)(ctx, rect, this._width, this._height, {
        offset,
        padding
      });
      ctx.translate(pos.x, pos.y);
      ctx.fill(this._path);
    } finally {
      ctx.restore();
    }
  }

  canBreak() {
    return false;
  }

  toString() {
    return "";
  }

}

exports.InlinePath2D = InlinePath2D;

/***/ }),

/***/ "./element/InlineSvg.js":
/*!******************************!*\
  !*** ./element/InlineSvg.js ***!
  \******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineSvg = void 0;

const utils_1 = __webpack_require__(/*! ../internal/utils */ "./internal/utils.js");

const InlineImage_1 = __webpack_require__(/*! ./InlineImage */ "./element/InlineImage.js");

function buildSvgDataUrl(svg) {
  const data = typeof svg === "string" ? svg : new XMLSerializer().serializeToString(svg);
  const url = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(data)}`; //svgデータをbase64に変換

  return url;
}

function getSvgElement(svg) {
  if (typeof svg === "string") {
    const parser = new DOMParser();
    return parser.parseFromString(svg, "image/svg+xml").children[0];
  } else {
    return svg;
  }
}

class InlineSvg extends InlineImage_1.InlineImage {
  constructor({
    svg,
    width,
    height
  }) {
    var _a, _b;

    const svgElem = (0, utils_1.then)(svg, getSvgElement);
    const elmWidth = !(0, utils_1.isPromise)(svgElem) ? (_a = svgElem.getAttribute("width")) !== null && _a !== void 0 ? _a : undefined : undefined;
    const elmHeight = !(0, utils_1.isPromise)(svgElem) ? (_b = svgElem.getAttribute("height")) !== null && _b !== void 0 ? _b : undefined : undefined;
    const numElmWidth = elmWidth != null ? Number(elmWidth) : undefined;
    const numElmHeight = elmHeight != null ? Number(elmHeight) : undefined;
    super({
      src: (0, utils_1.then)(svg, buildSvgDataUrl),
      width: width || numElmWidth,
      height: height || numElmHeight,
      imageWidth: numElmWidth,
      imageHeight: numElmHeight
    });
  }

  canBreak() {
    return false;
  }

  toString() {
    return "";
  }

}

exports.InlineSvg = InlineSvg;

/***/ }),

/***/ "./element/inlines.js":
/*!****************************!*\
  !*** ./element/inlines.js ***!
  \****************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.string = exports.buildInlines = exports.of = exports.iconOf = void 0;

const icons = __importStar(__webpack_require__(/*! ../icons */ "./icons.js"));

const path2DManager = __importStar(__webpack_require__(/*! ../internal/path2DManager */ "./internal/path2DManager.js"));

const Inline_1 = __webpack_require__(/*! ./Inline */ "./element/Inline.js");

const InlineDrawer_1 = __webpack_require__(/*! ./InlineDrawer */ "./element/InlineDrawer.js");

const InlineIcon_1 = __webpack_require__(/*! ./InlineIcon */ "./element/InlineIcon.js");

const InlineImage_1 = __webpack_require__(/*! ./InlineImage */ "./element/InlineImage.js");

const InlinePath2D_1 = __webpack_require__(/*! ./InlinePath2D */ "./element/InlinePath2D.js");

const InlineSvg_1 = __webpack_require__(/*! ./InlineSvg */ "./element/InlineSvg.js");

const canvases_1 = __webpack_require__(/*! ../internal/canvases */ "./internal/canvases.js");

function drawRegisteredIcon(ctx, icon, drawWidth, drawHeight, left, top, width, height, {
  offset = 2,
  padding
} = {}) {
  const rect = {
    left,
    top,
    width,
    height,
    right: left + width,
    bottom: top + height
  };
  ctx.save();

  try {
    ctx.beginPath();
    ctx.rect(rect.left, rect.top, rect.width, rect.height); //clip

    ctx.clip(); //文字描画

    const pos = (0, canvases_1.calcStartPosition)(ctx, rect, drawWidth, drawHeight, {
      offset,
      padding
    });
    path2DManager.fill(icon, ctx, pos.x, pos.y, drawWidth, drawHeight);
  } finally {
    ctx.restore();
  }
}

function isIconConstructorOption(icon) {
  if (icon.font && icon.content) {
    return true;
  }

  return false;
}

function isInlineImageConstructorOption(icon) {
  if (icon.src) {
    return true;
  }

  return false;
}

function isInlineSvgConstructorOption(icon) {
  if (icon.path) {
    return true;
  }

  return false;
}

function iconOf(icon) {
  if (icon instanceof Inline_1.Inline) {
    return icon;
  }

  if (!icon) {
    return null;
  }

  if (isIconConstructorOption(icon)) {
    return new InlineIcon_1.InlineIcon(icon);
  }

  if (isInlineImageConstructorOption(icon)) {
    return new InlineImage_1.InlineImage({
      src: icon.src,
      width: icon.width,
      height: icon.width,
      offsetTop: icon.offsetTop,
      offsetLeft: icon.offsetLeft
    });
  }

  if (icon.svg) {
    return new InlineSvg_1.InlineSvg({
      svg: icon.svg,
      width: icon.width,
      height: icon.width
    });
  }

  if (isInlineSvgConstructorOption(icon)) {
    return new InlinePath2D_1.InlinePath2D({
      path: icon.path,
      width: icon.width,
      height: icon.width,
      color: icon.color
    });
  }

  const registeredIcons = icons.get();

  if (icon.name && registeredIcons[icon.name]) {
    const registeredIcon = registeredIcons[icon.name];
    const width = icon.width || Math.max(registeredIcon.width, registeredIcon.height);
    return new InlineDrawer_1.InlineDrawer({
      draw({
        ctx,
        rect,
        offset,
        offsetLeft,
        offsetRight,
        offsetTop,
        offsetBottom
      }) {
        drawRegisteredIcon(ctx, registeredIcon, width, width, rect.left, rect.top, rect.width, rect.height, {
          offset: offset + 1,
          padding: {
            left: offsetLeft,
            right: offsetRight,
            top: offsetTop,
            bottom: offsetBottom
          }
        });
      },

      width,
      height: width,
      color: icon.color
    });
  }

  return new InlineIcon_1.InlineIcon(icon);
}

exports.iconOf = iconOf;

function of(content) {
  if (content == null) {
    return null;
  }

  if (content instanceof Inline_1.Inline) {
    return content;
  }

  return new Inline_1.Inline(content);
}

exports.of = of;

function buildInlines(icons, inline) {
  const result = [];

  if (icons) {
    result.push(...icons.map(icon => iconOf(icon)).filter(i => i != null));
  }

  if (Array.isArray(inline) // && inline.filter(il => il instanceof Inline).length <- ?
  ) {
      result.push(...inline.map(il => of(il)).filter(i => i != null));
    } else {
    const il = of(inline);

    if (il) {
      result.push(il);
    }
  }

  return result;
}

exports.buildInlines = buildInlines;

function string(inline) {
  return buildInlines(undefined, inline).join("");
}

exports.string = string;

/***/ }),

/***/ "./get-internal.js":
/*!*************************!*\
  !*** ./get-internal.js ***!
  \*************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInternal = void 0;

function getInternal() {
  console.warn("use internal!!");
  return {
    color: __webpack_require__(/*! ./internal/color */ "./internal/color.js"),
    sort: __webpack_require__(/*! ./internal/sort */ "./internal/sort.js"),
    calc: __webpack_require__(/*! ./internal/calc */ "./internal/calc.js"),
    symbolManager: __webpack_require__(/*! ./internal/symbolManager */ "./internal/symbolManager.js"),
    path2DManager: __webpack_require__(/*! ./internal/path2DManager */ "./internal/path2DManager.js"),
    pasteUtils: __webpack_require__(/*! ./internal/paste-utils */ "./internal/paste-utils.js")
  };
}

exports.getInternal = getInternal;

/***/ }),

/***/ "./header/action.js":
/*!**************************!*\
  !*** ./header/action.js ***!
  \**************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ofCell = exports.of = exports.CheckHeaderAction = exports.SortHeaderAction = exports.BaseAction = exports.ACTIONS = void 0;

const BaseAction_1 = __webpack_require__(/*! ./action/BaseAction */ "./header/action/BaseAction.js");

Object.defineProperty(exports, "BaseAction", {
  enumerable: true,
  get: function () {
    return BaseAction_1.BaseAction;
  }
});

const CheckHeaderAction_1 = __webpack_require__(/*! ./action/CheckHeaderAction */ "./header/action/CheckHeaderAction.js");

Object.defineProperty(exports, "CheckHeaderAction", {
  enumerable: true,
  get: function () {
    return CheckHeaderAction_1.CheckHeaderAction;
  }
});

const SortHeaderAction_1 = __webpack_require__(/*! ./action/SortHeaderAction */ "./header/action/SortHeaderAction.js");

Object.defineProperty(exports, "SortHeaderAction", {
  enumerable: true,
  get: function () {
    return SortHeaderAction_1.SortHeaderAction;
  }
});

class ImmutableSortHeaderAction extends SortHeaderAction_1.SortHeaderAction {
  get disabled() {
    return this._disabled;
  }

}

class ImmutableCheckHeaderAction extends CheckHeaderAction_1.CheckHeaderAction {
  get disabled() {
    return this._disabled;
  }

}

exports.ACTIONS = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  SORT: new ImmutableSortHeaderAction(),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  CHECK: new ImmutableCheckHeaderAction()
};

function of(headerAction) {
  if (!headerAction) {
    return undefined;
  } else if (typeof headerAction === "string") {
    const key = headerAction.toUpperCase();
    return exports.ACTIONS[key] || of(null);
  } else {
    return headerAction;
  }
}

exports.of = of;

function ofCell(headerCell) {
  if (headerCell.sort) {
    if (typeof headerCell.sort === "function") {
      const sortMethod = headerCell.sort; // 0.9.0 Backward compatibility

      const sort = ({
        order,
        col,
        grid
      }) => sortMethod.call(headerCell, order, col, grid);

      return new ImmutableSortHeaderAction({
        sort
      });
    }

    if (typeof headerCell.sort === "string") {
      return new ImmutableSortHeaderAction({
        sort: headerCell.sort
      });
    }

    return exports.ACTIONS.SORT;
  }

  return of(headerCell.headerAction);
}

exports.ofCell = ofCell;

/***/ }),

/***/ "./header/action/BaseAction.js":
/*!*************************************!*\
  !*** ./header/action/BaseAction.js ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseAction = void 0;

class BaseAction {
  constructor(option = {}) {
    this._disabled = !!option.disabled || false;
  }

  get disabled() {
    return this._disabled;
  }

  set disabled(disabled) {
    this._disabled = disabled;
    this.onChangeDisabledInternal();
  }

  clone() {
    return new BaseAction(this);
  }

  bindGridEvent(_grid, _cellId) {
    return [];
  }

  onChangeDisabledInternal() {// impl
  }

}

exports.BaseAction = BaseAction;

/***/ }),

/***/ "./header/action/CheckHeaderAction.js":
/*!********************************************!*\
  !*** ./header/action/CheckHeaderAction.js ***!
  \********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckHeaderAction = void 0;

const actionBind_1 = __webpack_require__(/*! ./actionBind */ "./header/action/actionBind.js");

const BaseAction_1 = __webpack_require__(/*! ./BaseAction */ "./header/action/BaseAction.js");

const animate_1 = __webpack_require__(/*! ../../internal/animate */ "./internal/animate.js");

const symbolManager_1 = __webpack_require__(/*! ../../internal/symbolManager */ "./internal/symbolManager.js");

const utils_1 = __webpack_require__(/*! ../../internal/utils */ "./internal/utils.js");

const CHECK_HEADER_STATE_ID = (0, symbolManager_1.getCheckHeaderStateId)();

function getState(grid) {
  let state = grid[CHECK_HEADER_STATE_ID];

  if (!state) {
    state = {
      elapsed: {},
      block: {}
    };
    utils_1.obj.setReadonly(grid, CHECK_HEADER_STATE_ID, state);
  }

  return state;
}

class CheckHeaderAction extends BaseAction_1.BaseAction {
  clone() {
    return new CheckHeaderAction(this);
  }

  bindGridEvent(grid, cellId) {
    const state = getState(grid);

    const action = ({
      col,
      row
    }) => {
      const range = grid.getCellRange(col, row);
      const cellKey = `${range.start.col}:${range.start.row}`;

      if (this.disabled || state.block[cellKey]) {
        return;
      }

      const checked = grid.getHeaderValue(range.start.col, range.start.row);
      grid.setHeaderValue(range.start.col, range.start.row, !checked);

      const onChange = () => {
        // checkbox animation
        (0, animate_1.animate)(200, point => {
          if (point === 1) {
            delete state.elapsed[cellKey];
          } else {
            state.elapsed[cellKey] = point;
          }

          grid.invalidateCellRange(range);
        });
      };

      onChange();
    };

    return [...(0, actionBind_1.bindCellClickAction)(grid, cellId, {
      action,
      mouseOver: e => {
        if (this.disabled) {
          return false;
        }

        state.mouseActiveCell = {
          col: e.col,
          row: e.row
        };
        const range = grid.getCellRange(e.col, e.row);
        grid.invalidateCellRange(range);
        return true;
      },
      mouseOut: e => {
        delete state.mouseActiveCell;
        const range = grid.getCellRange(e.col, e.row);
        grid.invalidateCellRange(range);
      }
    }), ...(0, actionBind_1.bindCellKeyAction)(grid, cellId, {
      action
    })];
  }

}

exports.CheckHeaderAction = CheckHeaderAction;

/***/ }),

/***/ "./header/action/SortHeaderAction.js":
/*!*******************************************!*\
  !*** ./header/action/SortHeaderAction.js ***!
  \*******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SortHeaderAction = void 0;

const BaseAction_1 = __webpack_require__(/*! ./BaseAction */ "./header/action/BaseAction.js");

const actionBind_1 = __webpack_require__(/*! ./actionBind */ "./header/action/actionBind.js");

class SortHeaderAction extends BaseAction_1.BaseAction {
  constructor(option = {}) {
    var _a;

    super(option);
    this._sort = (_a = option.sort) !== null && _a !== void 0 ? _a : true;
  }

  get sort() {
    return this._sort;
  }

  set sort(sort) {
    this._sort = sort;
    this.onChangeDisabledInternal();
  }

  clone() {
    return new SortHeaderAction(this);
  }

  _executeSort(newState, grid) {
    if (typeof this._sort === "function") {
      this._sort({
        order: newState.order || "asc",
        col: newState.col,
        row: newState.row,
        grid
      });
    } else if (typeof this._sort === "string" && ( // v1.6.3 Backward compatibility
    this._sort !== "true" || hasTrueField(grid))) {
      const field = this._sort;
      grid.dataSource.sort(field, newState.order || "asc");
    } else {
      const fieldRow = Math.min(grid.recordRowCount - 1, newState.row) + grid.frozenRowCount;
      const field = grid.getField(newState.col, fieldRow);

      if (field == null) {
        return;
      }

      grid.dataSource.sort(field, newState.order || "asc");
    }
  }

  bindGridEvent(grid, cellId) {
    function isTarget(col, row) {
      return grid.getLayoutCellId(col, row) === cellId;
    }

    const action = cell => {
      if (this.disabled) {
        return;
      }

      const state = grid.sortState;
      let newState;
      const range = grid.getCellRange(cell.col, cell.row);

      if (isTarget(state.col, cell.row)) {
        newState = {
          col: range.start.col,
          row: range.start.row,
          order: state.order === "asc" ? "desc" : "asc"
        };
      } else {
        newState = {
          col: range.start.col,
          row: range.start.row,
          order: "asc"
        };
      }

      grid.sortState = newState;

      this._executeSort(newState, grid);

      grid.invalidateGridRect(0, 0, grid.colCount - 1, grid.rowCount - 1);
    };

    return [...(0, actionBind_1.bindCellClickAction)(grid, cellId, {
      action,
      mouseOver: _e => {
        if (this.disabled) {
          return false;
        }

        return true;
      }
    })];
  }

}

exports.SortHeaderAction = SortHeaderAction;

function hasTrueField(grid) {
  if (grid.dataSource.length > 0) {
    const record = grid.dataSource.get(0);
    return record != null && "true" in record;
  }

  return false;
}

/***/ }),

/***/ "./header/action/actionBind.js":
/*!*************************************!*\
  !*** ./header/action/actionBind.js ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bindCellKeyAction = exports.bindCellClickAction = void 0;

const DG_EVENT_TYPE_1 = __webpack_require__(/*! ../../core/DG_EVENT_TYPE */ "./core/DG_EVENT_TYPE.js");

const utils_1 = __webpack_require__(/*! ../../internal/utils */ "./internal/utils.js");

const KEY_ENTER = 13;
const KEY_SPACE = 32;

function bindCellClickAction(grid, cellId, {
  action,
  mouseOver,
  mouseOut
}) {
  function isTarget(col, row) {
    return grid.getLayoutCellId(col, row) === cellId;
  }

  let inMouse;
  return [// click
  grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.CLICK_CELL, e => {
    if (!isTarget(e.col, e.row)) {
      return;
    }

    action({
      col: e.col,
      row: e.row
    });
  }), // mouse move
  grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEOVER_CELL, e => {
    if (!isTarget(e.col, e.row)) {
      return;
    }

    if (mouseOver) {
      if (!mouseOver({
        col: e.col,
        row: e.row
      })) {
        return;
      }
    }

    grid.getElement().style.cursor = "pointer";
    inMouse = true;
  }), //横からMOUSEENTERした場合、'col-resize'の処理と競合するのでmoveを監視して処理する
  grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEMOVE_CELL, e => {
    if (!isTarget(e.col, e.row)) {
      return;
    }

    if (inMouse && !grid.getElement().style.cursor) {
      grid.getElement().style.cursor = "pointer";
    }
  }), grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.MOUSEOUT_CELL, e => {
    if (!isTarget(e.col, e.row)) {
      return;
    }

    if (mouseOut) {
      mouseOut({
        col: e.col,
        row: e.row
      });
    }

    grid.getElement().style.cursor = "";
    inMouse = false;
  })];
}

exports.bindCellClickAction = bindCellClickAction;

function bindCellKeyAction(grid, cellId, {
  action,
  acceptKeys = []
}) {
  function isTarget(col, row) {
    return grid.getLayoutCellId(col, row) === cellId;
  }

  acceptKeys = [...acceptKeys, KEY_ENTER, KEY_SPACE];
  return [// enter key down
  grid.listen(DG_EVENT_TYPE_1.DG_EVENT_TYPE.KEYDOWN, e => {
    var _a;

    if (acceptKeys.indexOf(e.keyCode) === -1) {
      return;
    }

    if (((_a = grid.keyboardOptions) === null || _a === void 0 ? void 0 : _a.moveCellOnEnter) && e.keyCode === KEY_ENTER) {
      // When moving with the enter key, no action is taken with the enter key.
      return;
    }

    const sel = grid.selection.select;

    if (!isTarget(sel.col, sel.row)) {
      return;
    }

    action({
      col: sel.col,
      row: sel.row
    });
    utils_1.event.cancel(e.event);
  })];
}

exports.bindCellKeyAction = bindCellKeyAction;

/***/ }),

/***/ "./header/style.js":
/*!*************************!*\
  !*** ./header/style.js ***!
  \*************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.of = exports.MultilineTextHeaderStyle = exports.CheckHeaderStyle = exports.SortHeaderStyle = exports.Style = exports.BaseStyle = void 0;

const BaseStyle_1 = __webpack_require__(/*! ./style/BaseStyle */ "./header/style/BaseStyle.js");

Object.defineProperty(exports, "BaseStyle", {
  enumerable: true,
  get: function () {
    return BaseStyle_1.BaseStyle;
  }
});

const CheckHeaderStyle_1 = __webpack_require__(/*! ./style/CheckHeaderStyle */ "./header/style/CheckHeaderStyle.js");

Object.defineProperty(exports, "CheckHeaderStyle", {
  enumerable: true,
  get: function () {
    return CheckHeaderStyle_1.CheckHeaderStyle;
  }
});

const MultilineTextHeaderStyle_1 = __webpack_require__(/*! ./style/MultilineTextHeaderStyle */ "./header/style/MultilineTextHeaderStyle.js");

Object.defineProperty(exports, "MultilineTextHeaderStyle", {
  enumerable: true,
  get: function () {
    return MultilineTextHeaderStyle_1.MultilineTextHeaderStyle;
  }
});

const SortHeaderStyle_1 = __webpack_require__(/*! ./style/SortHeaderStyle */ "./header/style/SortHeaderStyle.js");

Object.defineProperty(exports, "SortHeaderStyle", {
  enumerable: true,
  get: function () {
    return SortHeaderStyle_1.SortHeaderStyle;
  }
});

const Style_1 = __webpack_require__(/*! ./style/Style */ "./header/style/Style.js");

Object.defineProperty(exports, "Style", {
  enumerable: true,
  get: function () {
    return Style_1.Style;
  }
});

function of(headerStyle, StyleClass) {
  if (headerStyle) {
    if (headerStyle instanceof Style_1.Style) {
      return headerStyle;
    } else if (typeof headerStyle === "function") {
      return of(headerStyle(), StyleClass);
    }

    return new StyleClass(headerStyle);
  } else {
    return StyleClass.DEFAULT;
  }
}

exports.of = of;

/***/ }),

/***/ "./header/style/BaseStyle.js":
/*!***********************************!*\
  !*** ./header/style/BaseStyle.js ***!
  \***********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseStyle = void 0;

const EventTarget_1 = __webpack_require__(/*! ../../core/EventTarget */ "./core/EventTarget.js");

const EVENT_TYPE = {
  CHANGE_STYLE: "change_style"
};
let defaultStyle;

class BaseStyle extends EventTarget_1.EventTarget {
  static get EVENT_TYPE() {
    return EVENT_TYPE;
  }

  static get DEFAULT() {
    return defaultStyle ? defaultStyle : defaultStyle = new BaseStyle();
  }

  constructor({
    bgColor
  } = {}) {
    super();
    this._bgColor = bgColor;
  }

  get bgColor() {
    return this._bgColor;
  }

  set bgColor(bgColor) {
    this._bgColor = bgColor;
    this.doChangeStyle();
  }

  doChangeStyle() {
    this.fireListeners(EVENT_TYPE.CHANGE_STYLE);
  }

  clone() {
    return new BaseStyle(this);
  }

}

exports.BaseStyle = BaseStyle;

/***/ }),

/***/ "./header/style/CheckHeaderStyle.js":
/*!******************************************!*\
  !*** ./header/style/CheckHeaderStyle.js ***!
  \******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckHeaderStyle = void 0;

const StdTextBaseStyle_1 = __webpack_require__(/*! ./StdTextBaseStyle */ "./header/style/StdTextBaseStyle.js");

const utils_1 = __webpack_require__(/*! ../../internal/utils */ "./internal/utils.js");

let defaultStyle;

class CheckHeaderStyle extends StdTextBaseStyle_1.StdTextBaseStyle {
  static get DEFAULT() {
    return defaultStyle ? defaultStyle : defaultStyle = new CheckHeaderStyle();
  }

  constructor(style = {}) {
    super((0, utils_1.defaults)(style, {
      textAlign: "center"
    }));
    const {
      uncheckBgColor,
      checkBgColor,
      borderColor
    } = style;
    this._uncheckBgColor = uncheckBgColor;
    this._checkBgColor = checkBgColor;
    this._borderColor = borderColor;
  }

  get uncheckBgColor() {
    return this._uncheckBgColor;
  }

  set uncheckBgColor(uncheckBgColor) {
    this._uncheckBgColor = uncheckBgColor;
    this.doChangeStyle();
  }

  get checkBgColor() {
    return this._checkBgColor;
  }

  set checkBgColor(checkBgColor) {
    this._checkBgColor = checkBgColor;
    this.doChangeStyle();
  }

  get borderColor() {
    return this._borderColor;
  }

  set borderColor(borderColor) {
    this._borderColor = borderColor;
    this.doChangeStyle();
  }

  clone() {
    return new CheckHeaderStyle(this);
  }

}

exports.CheckHeaderStyle = CheckHeaderStyle;

/***/ }),

/***/ "./header/style/MultilineTextHeaderStyle.js":
/*!**************************************************!*\
  !*** ./header/style/MultilineTextHeaderStyle.js ***!
  \**************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultilineTextHeaderStyle = void 0;

const StdMultilineTextBaseStyle_1 = __webpack_require__(/*! ./StdMultilineTextBaseStyle */ "./header/style/StdMultilineTextBaseStyle.js");

let defaultStyle;

class MultilineTextHeaderStyle extends StdMultilineTextBaseStyle_1.StdMultilineTextBaseStyle {
  static get DEFAULT() {
    return defaultStyle ? defaultStyle : defaultStyle = new MultilineTextHeaderStyle();
  }

  constructor(style = {}) {
    super(style);
  }

  clone() {
    return new MultilineTextHeaderStyle(this);
  }

}

exports.MultilineTextHeaderStyle = MultilineTextHeaderStyle;

/***/ }),

/***/ "./header/style/SortHeaderStyle.js":
/*!*****************************************!*\
  !*** ./header/style/SortHeaderStyle.js ***!
  \*****************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SortHeaderStyle = void 0;

const StdMultilineTextBaseStyle_1 = __webpack_require__(/*! ./StdMultilineTextBaseStyle */ "./header/style/StdMultilineTextBaseStyle.js");

let defaultStyle;

class SortHeaderStyle extends StdMultilineTextBaseStyle_1.StdMultilineTextBaseStyle {
  static get DEFAULT() {
    return defaultStyle ? defaultStyle : defaultStyle = new SortHeaderStyle();
  }

  constructor(style = {}) {
    super(style);
    this._sortArrowColor = style.sortArrowColor;
    this._multiline = style.multiline;
  }

  get sortArrowColor() {
    return this._sortArrowColor;
  }

  set sortArrowColor(sortArrowColor) {
    this._sortArrowColor = sortArrowColor;
    this.doChangeStyle();
  }

  get multiline() {
    return !!this._multiline;
  }

  set multiline(multiline) {
    this._multiline = multiline;
    this.doChangeStyle();
  }

  clone() {
    return new SortHeaderStyle(this);
  }

}

exports.SortHeaderStyle = SortHeaderStyle;

/***/ }),

/***/ "./header/style/StdBaseStyle.js":
/*!**************************************!*\
  !*** ./header/style/StdBaseStyle.js ***!
  \**************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StdBaseStyle = void 0;

const BaseStyle_1 = __webpack_require__(/*! ./BaseStyle */ "./header/style/BaseStyle.js");

let defaultStyle;

class StdBaseStyle extends BaseStyle_1.BaseStyle {
  static get DEFAULT() {
    return defaultStyle ? defaultStyle : defaultStyle = new StdBaseStyle();
  }

  constructor(style = {}) {
    super(style);
    this._textAlign = style.textAlign || "left";
    this._textBaseline = style.textBaseline || "middle";
  }

  get textAlign() {
    return this._textAlign;
  }

  set textAlign(textAlign) {
    this._textAlign = textAlign;
    this.doChangeStyle();
  }

  get textBaseline() {
    return this._textBaseline;
  }

  set textBaseline(textBaseline) {
    this._textBaseline = textBaseline;
    this.doChangeStyle();
  }

  clone() {
    return new StdBaseStyle(this);
  }

}

exports.StdBaseStyle = StdBaseStyle;

/***/ }),

/***/ "./header/style/StdMultilineTextBaseStyle.js":
/*!***************************************************!*\
  !*** ./header/style/StdMultilineTextBaseStyle.js ***!
  \***************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StdMultilineTextBaseStyle = void 0;

const StdTextBaseStyle_1 = __webpack_require__(/*! ./StdTextBaseStyle */ "./header/style/StdTextBaseStyle.js");

let defaultStyle;

class StdMultilineTextBaseStyle extends StdTextBaseStyle_1.StdTextBaseStyle {
  static get DEFAULT() {
    return defaultStyle ? defaultStyle : defaultStyle = new StdMultilineTextBaseStyle();
  }

  constructor(style = {}) {
    super(style);
    this._lineHeight = style.lineHeight || "1em";
    this._autoWrapText = style.autoWrapText || false;
    this._lineClamp = style.lineClamp;
  }

  clone() {
    return new StdMultilineTextBaseStyle(this);
  }

  get lineHeight() {
    return this._lineHeight;
  }

  set lineHeight(lineHeight) {
    this._lineHeight = lineHeight;
    this.doChangeStyle();
  }

  get lineClamp() {
    return this._lineClamp;
  }

  set lineClamp(lineClamp) {
    this._lineClamp = lineClamp;
    this.doChangeStyle();
  }

  get autoWrapText() {
    return this._autoWrapText;
  }

  set autoWrapText(autoWrapText) {
    this._autoWrapText = autoWrapText;
    this.doChangeStyle();
  }

}

exports.StdMultilineTextBaseStyle = StdMultilineTextBaseStyle;

/***/ }),

/***/ "./header/style/StdTextBaseStyle.js":
/*!******************************************!*\
  !*** ./header/style/StdTextBaseStyle.js ***!
  \******************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StdTextBaseStyle = void 0;

const StdBaseStyle_1 = __webpack_require__(/*! ./StdBaseStyle */ "./header/style/StdBaseStyle.js");

let defaultStyle;

class StdTextBaseStyle extends StdBaseStyle_1.StdBaseStyle {
  static get DEFAULT() {
    return defaultStyle ? defaultStyle : defaultStyle = new StdTextBaseStyle();
  }

  constructor(style = {}) {
    super(style);
    this._color = style.color;
    this._font = style.font;
    this._padding = style.padding;
    this._textOverflow = style.textOverflow || "ellipsis";
  }

  get color() {
    return this._color;
  }

  set color(color) {
    this._color = color;
    this.doChangeStyle();
  }

  get font() {
    return this._font;
  }

  set font(font) {
    this._font = font;
    this.doChangeStyle();
  }

  get padding() {
    return this._padding;
  }

  set padding(padding) {
    this._padding = padding;
    this.doChangeStyle();
  }

  get textOverflow() {
    return this._textOverflow;
  }

  set textOverflow(textOverflow) {
    this._textOverflow = textOverflow;
    this.doChangeStyle();
  }

  clone() {
    return new StdTextBaseStyle(this);
  }

}

exports.StdTextBaseStyle = StdTextBaseStyle;

/***/ }),

/***/ "./header/style/Style.js":
/*!*******************************!*\
  !*** ./header/style/Style.js ***!
  \*******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Style = void 0;

const StdMultilineTextBaseStyle_1 = __webpack_require__(/*! ./StdMultilineTextBaseStyle */ "./header/style/StdMultilineTextBaseStyle.js");

let defaultStyle;

class Style extends StdMultilineTextBaseStyle_1.StdMultilineTextBaseStyle {
  static get DEFAULT() {
    return defaultStyle ? defaultStyle : defaultStyle = new Style();
  }

  constructor(style = {}) {
    super(style);
    this._multiline = style.multiline;
  }

  get multiline() {
    return !!this._multiline;
  }

  set multiline(multiline) {
    this._multiline = multiline;
    this.doChangeStyle();
  }

  clone() {
    return new Style(this);
  }

}

exports.Style = Style;

/***/ }),

/***/ "./header/type.js":
/*!************************!*\
  !*** ./header/type.js ***!
  \************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ofCell = exports.of = exports.MultilineTextHeader = exports.CheckHeader = exports.SortHeader = exports.Header = exports.BaseHeader = void 0;

const BaseHeader_1 = __webpack_require__(/*! ./type/BaseHeader */ "./header/type/BaseHeader.js");

Object.defineProperty(exports, "BaseHeader", {
  enumerable: true,
  get: function () {
    return BaseHeader_1.BaseHeader;
  }
});

const CheckHeader_1 = __webpack_require__(/*! ./type/CheckHeader */ "./header/type/CheckHeader.js");

Object.defineProperty(exports, "CheckHeader", {
  enumerable: true,
  get: function () {
    return CheckHeader_1.CheckHeader;
  }
});

const Header_1 = __webpack_require__(/*! ./type/Header */ "./header/type/Header.js");

Object.defineProperty(exports, "Header", {
  enumerable: true,
  get: function () {
    return Header_1.Header;
  }
});

const MultilineTextHeader_1 = __webpack_require__(/*! ./type/MultilineTextHeader */ "./header/type/MultilineTextHeader.js");

Object.defineProperty(exports, "MultilineTextHeader", {
  enumerable: true,
  get: function () {
    return MultilineTextHeader_1.MultilineTextHeader;
  }
});

const SortHeader_1 = __webpack_require__(/*! ./type/SortHeader */ "./header/type/SortHeader.js");

Object.defineProperty(exports, "SortHeader", {
  enumerable: true,
  get: function () {
    return SortHeader_1.SortHeader;
  }
});
const TYPES = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  DEFAULT: new Header_1.Header(),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  SORT: new SortHeader_1.SortHeader(),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  CHECK: new CheckHeader_1.CheckHeader(),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  MULTILINETEXT: new MultilineTextHeader_1.MultilineTextHeader()
};

function of(headerType) {
  if (!headerType) {
    return TYPES.DEFAULT;
  } else if (typeof headerType === "string") {
    const key = headerType.toUpperCase();
    return TYPES[key] || of(null);
  } else {
    return headerType;
  }
}

exports.of = of;

function ofCell(headerCell) {
  if (headerCell.sort) {
    return TYPES.SORT;
  }

  return of(headerCell.headerType);
}

exports.ofCell = ofCell;

/***/ }),

/***/ "./header/type/BaseHeader.js":
/*!***********************************!*\
  !*** ./header/type/BaseHeader.js ***!
  \***********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseHeader = void 0;

const styleContents = __importStar(__webpack_require__(/*! ../style */ "./header/style.js"));

const BaseStyle_1 = __webpack_require__(/*! ../style/BaseStyle */ "./header/style/BaseStyle.js");

class BaseHeader {
  constructor(_options = {}) {
    this.onDrawCell = this.onDrawCell.bind(this); //スコープを固定させる
  }

  get StyleClass() {
    return BaseStyle_1.BaseStyle;
  }

  onDrawCell(cellValue, info, context, grid) {
    const {
      style,
      drawCellBase
    } = info;
    const helper = grid.getGridCanvasHelper();
    drawCellBase(); //文字描画

    this.drawInternal(this.convertInternal(cellValue), context, styleContents.of(style, this.StyleClass), helper, grid, info);
  }

  convertInternal(value) {
    if (typeof value === "function") {
      value = value();
    } // eslint-disable-next-line @typescript-eslint/restrict-template-expressions


    return value != null ? `${value}` : "";
  }

  bindGridEvent(_grid, _cellId) {
    return [];
  }

  getCopyCellValue(value, _grid, _cell) {
    if (typeof value === "function") {
      value = value();
    }

    return value != null ? value : "";
  }

}

exports.BaseHeader = BaseHeader;

/***/ }),

/***/ "./header/type/CheckHeader.js":
/*!************************************!*\
  !*** ./header/type/CheckHeader.js ***!
  \************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckHeader = void 0;

const inlineUtils = __importStar(__webpack_require__(/*! ../../element/inlines */ "./element/inlines.js"));

const utils = __importStar(__webpack_require__(/*! ../../columns/type/columnUtils */ "./columns/type/columnUtils.js"));

const BaseHeader_1 = __webpack_require__(/*! ./BaseHeader */ "./header/type/BaseHeader.js");

const CheckHeaderStyle_1 = __webpack_require__(/*! ../style/CheckHeaderStyle */ "./header/style/CheckHeaderStyle.js");

const symbolManager_1 = __webpack_require__(/*! ../../internal/symbolManager */ "./internal/symbolManager.js");

const utils_1 = __webpack_require__(/*! ../../internal/utils */ "./internal/utils.js");

const CHECK_HEADER_STATE_ID = (0, symbolManager_1.getCheckHeaderStateId)(); // eslint-disable-next-line @typescript-eslint/no-explicit-any

function getState(grid) {
  let state = grid[CHECK_HEADER_STATE_ID];

  if (!state) {
    state = {
      elapsed: {},
      block: {}
    };
    utils_1.obj.setReadonly(grid, CHECK_HEADER_STATE_ID, state);
  }

  return state;
}

class CheckHeader extends BaseHeader_1.BaseHeader {
  get StyleClass() {
    return CheckHeaderStyle_1.CheckHeaderStyle;
  }

  clone() {
    return new CheckHeader(this);
  }

  drawInternal(value, context, style, helper, // eslint-disable-next-line @typescript-eslint/no-explicit-any
  grid, {
    drawCellBase,
    getIcon
  }) {
    const {
      textAlign,
      textBaseline,
      borderColor,
      checkBgColor,
      uncheckBgColor,
      bgColor,
      padding,
      color,
      font,
      textOverflow
    } = style;

    if (bgColor) {
      drawCellBase({
        bgColor
      });
    }

    const {
      col,
      row
    } = context;
    const range = grid.getCellRange(col, row);
    const cellKey = `${range.start.col}:${range.start.row}`;
    const {
      elapsed: {
        [cellKey]: elapsed
      }
    } = getState(grid);
    const checked = grid.getHeaderValue(range.start.col, range.start.row);
    const opt = {
      textAlign,
      textBaseline,
      borderColor,
      checkBgColor,
      uncheckBgColor
    };

    if (elapsed != null) {
      opt.animElapsedTime = elapsed;
    }

    const inlineCheck = helper.buildCheckBoxInline(!!checked, context, opt);
    utils.loadIcons(getIcon(), context, helper, (icons, context) => {
      let contents = [inlineCheck];
      contents = contents.concat(inlineUtils.buildInlines(icons, value != null ? String(value) : ""));
      helper.text(contents, context, {
        textAlign,
        textBaseline,
        color,
        font,
        padding,
        textOverflow
      });
    });
  }

}

exports.CheckHeader = CheckHeader;

/***/ }),

/***/ "./header/type/Header.js":
/*!*******************************!*\
  !*** ./header/type/Header.js ***!
  \*******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

const utils = __importStar(__webpack_require__(/*! ../../columns/type/columnUtils */ "./columns/type/columnUtils.js"));

const BaseHeader_1 = __webpack_require__(/*! ./BaseHeader */ "./header/type/BaseHeader.js");

const Style_1 = __webpack_require__(/*! ../style/Style */ "./header/style/Style.js");

class Header extends BaseHeader_1.BaseHeader {
  get StyleClass() {
    return Style_1.Style;
  }

  drawInternal(value, context, style, helper, _grid, {
    drawCellBase,
    getIcon
  }) {
    const {
      textAlign,
      textBaseline,
      color,
      font,
      bgColor,
      padding,
      textOverflow,
      lineHeight,
      autoWrapText,
      lineClamp,
      multiline
    } = style;

    if (bgColor) {
      drawCellBase({
        bgColor
      });
    }

    const textValue = value != null ? String(value) : "";
    utils.loadIcons(getIcon(), context, helper, (icons, context) => {
      if (multiline) {
        const multilines = textValue.replace(/\r?\n/g, "\n").replace(/\r/g, "\n").split("\n");
        helper.multilineText(multilines, context, {
          textAlign,
          textBaseline,
          color,
          font,
          padding,
          lineHeight,
          autoWrapText,
          lineClamp,
          textOverflow,
          icons
        });
      } else {
        helper.text(textValue, context, {
          textAlign,
          textBaseline,
          color,
          font,
          padding,
          textOverflow,
          icons
        });
      }
    });
  }

}

exports.Header = Header;

/***/ }),

/***/ "./header/type/MultilineTextHeader.js":
/*!********************************************!*\
  !*** ./header/type/MultilineTextHeader.js ***!
  \********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultilineTextHeader = void 0;

const utils = __importStar(__webpack_require__(/*! ../../columns/type/columnUtils */ "./columns/type/columnUtils.js"));

const BaseHeader_1 = __webpack_require__(/*! ./BaseHeader */ "./header/type/BaseHeader.js");

const MultilineTextHeaderStyle_1 = __webpack_require__(/*! ../style/MultilineTextHeaderStyle */ "./header/style/MultilineTextHeaderStyle.js");

class MultilineTextHeader extends BaseHeader_1.BaseHeader {
  get StyleClass() {
    return MultilineTextHeaderStyle_1.MultilineTextHeaderStyle;
  }

  clone() {
    return new MultilineTextHeader(this);
  }

  drawInternal(value, context, style, helper, _grid, {
    drawCellBase,
    getIcon
  }) {
    const {
      textAlign,
      textBaseline,
      color,
      font,
      bgColor,
      padding,
      lineHeight,
      autoWrapText,
      lineClamp,
      textOverflow
    } = style;

    if (bgColor) {
      drawCellBase({
        bgColor
      });
    }

    const textValue = value != null ? String(value) : "";
    const multilines = textValue.replace(/\r?\n/g, "\n").replace(/\r/g, "\n").split("\n");
    helper.testFontLoad(font, textValue, context);
    utils.loadIcons(getIcon(), context, helper, (icons, context) => {
      helper.multilineText(multilines, context, {
        textAlign,
        textBaseline,
        color,
        font,
        padding,
        lineHeight,
        autoWrapText,
        lineClamp,
        textOverflow,
        icons
      });
    });
  }

}

exports.MultilineTextHeader = MultilineTextHeader;

/***/ }),

/***/ "./header/type/SortHeader.js":
/*!***********************************!*\
  !*** ./header/type/SortHeader.js ***!
  \***********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SortHeader = void 0;

const utils = __importStar(__webpack_require__(/*! ../../columns/type/columnUtils */ "./columns/type/columnUtils.js"));

const BaseHeader_1 = __webpack_require__(/*! ./BaseHeader */ "./header/type/BaseHeader.js");

const SortHeaderStyle_1 = __webpack_require__(/*! ../style/SortHeaderStyle */ "./header/style/SortHeaderStyle.js");

const utils_1 = __webpack_require__(/*! ../../internal/utils */ "./internal/utils.js");

const canvases_1 = __webpack_require__(/*! ../../internal/canvases */ "./internal/canvases.js");

class SortHeader extends BaseHeader_1.BaseHeader {
  get StyleClass() {
    return SortHeaderStyle_1.SortHeaderStyle;
  }

  drawInternal(value, context, style, helper, grid, {
    drawCellBase,
    getIcon
  }) {
    const {
      textAlign,
      textBaseline = "middle",
      color,
      bgColor,
      font,
      padding,
      textOverflow,
      lineHeight,
      autoWrapText,
      lineClamp,
      sortArrowColor,
      multiline
    } = style;

    if (bgColor) {
      drawCellBase({
        bgColor
      });
    }

    const textValue = value != null ? String(value) : "";
    helper.testFontLoad(font, textValue, context);
    utils.loadIcons(getIcon(), context, helper, (icons, context) => {
      const state = grid.sortState;
      let order = undefined;
      const {
        col,
        row
      } = context;
      const range = grid.getCellRange(col, row);

      if ((0, utils_1.cellInRange)(range, state.col, state.row)) {
        ({
          order
        } = state);
      }

      const ctx = context.getContext();
      const arrowSize = (0, canvases_1.getFontSize)(ctx, font).width * 1.2;
      const trailingIcon = {
        name: order != null ? order === "asc" ? "arrow_downward" : "arrow_upward" : undefined,
        width: arrowSize,
        color: helper.getColor(sortArrowColor || helper.theme.header.sortArrowColor, col, row, ctx) || "rgba(0, 0, 0, 0.38)"
      };

      if (multiline) {
        const multilines = textValue.replace(/\r?\n/g, "\n").replace(/\r/g, "\n").split("\n");
        helper.multilineText(multilines, context, {
          textAlign,
          textBaseline,
          color,
          font,
          padding,
          lineHeight,
          autoWrapText,
          lineClamp,
          textOverflow,
          icons,
          trailingIcon
        });
      } else {
        helper.text(textValue, context, {
          textAlign,
          textBaseline,
          color,
          font,
          padding,
          textOverflow,
          icons,
          trailingIcon
        });
      }
    });
  }

}

exports.SortHeader = SortHeader;

/***/ }),

/***/ "./headers.js":
/*!********************!*\
  !*** ./headers.js ***!
  \********************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.style = exports.type = exports.action = void 0;

const action = __importStar(__webpack_require__(/*! ./header/action */ "./header/action.js"));

exports.action = action;

const style = __importStar(__webpack_require__(/*! ./header/style */ "./header/style.js"));

exports.style = style;

const type = __importStar(__webpack_require__(/*! ./header/type */ "./header/type.js"));

exports.type = type;

/***/ }),

/***/ "./icons.js":
/*!******************!*\
  !*** ./icons.js ***!
  \******************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*eslint-disable camelcase*/

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = void 0;

const utils_1 = __webpack_require__(/*! ./internal/utils */ "./internal/utils.js");

const icons_1 = __webpack_require__(/*! ./plugins/icons */ "./plugins/icons.js");

const builtins = {
  get arrow_upward() {
    // return require("cheetah-grid-icon-svg-loader!material-design-icons/navigation/svg/production/ic_arrow_upward_48px.svg");
    return {
      d: "M8 24l2.83 2.83L22 15.66V40h4V15.66l11.17 11.17L40 24 24 8 8 24z",
      width: 48,
      height: 48
    };
  },

  get arrow_downward() {
    // return require("cheetah-grid-icon-svg-loader!material-design-icons/navigation/svg/production/ic_arrow_downward_48px.svg");
    return {
      d: "M40 24l-2.82-2.82L26 32.34V8h-4v24.34L10.84 21.16 8 24l16 16 16-16z",
      width: 48,
      height: 48
    };
  },

  get edit() {
    // return require("cheetah-grid-icon-svg-loader!material-design-icons/image/svg/production/ic_edit_48px.svg");
    return {
      d: "M6 34.5V42h7.5l22.13-22.13-7.5-7.5L6 34.5zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z",
      width: 48,
      height: 48
    };
  },

  get add() {
    // return require("cheetah-grid-icon-svg-loader!material-design-icons/content/svg/production/ic_add_48px.svg");
    return {
      d: "M38 26H26v12h-4V26H10v-4h12V10h4v12h12v4z",
      width: 48,
      height: 48
    };
  },

  get star() {
    // return require("cheetah-grid-icon-svg-loader!material-design-icons/toggle/svg/production/ic_star_24px.svg");
    return {
      d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
      width: 24,
      height: 24
    };
  },

  get star_border() {
    // return require("cheetah-grid-icon-svg-loader!material-design-icons/toggle/svg/production/ic_star_border_24px.svg");
    return {
      d: "M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z",
      width: 24,
      height: 24
    };
  },

  get star_half() {
    // return require("cheetah-grid-icon-svg-loader!material-design-icons/toggle/svg/production/ic_star_half_24px.svg");
    return {
      d: "M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z",
      width: 24,
      height: 24
    };
  }

};

function get() {
  return (0, utils_1.extend)(builtins, icons_1.icons);
}

exports.get = get;

/***/ }),

/***/ "./internal/EventHandler.js":
/*!**********************************!*\
  !*** ./internal/EventHandler.js ***!
  \**********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventHandler = void 0;

const utils_1 = __webpack_require__(/*! ./utils */ "./internal/utils.js");
/** @private */


let nextId = 1;

class EventHandler {
  constructor() {
    this._listeners = {};
  }

  on(target, type, listener, // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...options) {
    if (target.addEventListener) {
      target.addEventListener(type, listener, ...options);
    }

    const obj = {
      target,
      type,
      listener,
      options
    };
    const id = nextId++;
    this._listeners[id] = obj;
    return id;
  }

  once(target, type, listener, ...options) {
    const id = this.on(target, type, (...args) => {
      this.off(id);
      listener(...args);
    }, ...options);
    return id;
  }

  tryWithOffEvents(target, type, call) {
    const list = [];

    try {
      (0, utils_1.each)(this._listeners, obj => {
        if (obj.target === target && obj.type === type) {
          if (obj.target.removeEventListener) {
            obj.target.removeEventListener(obj.type, obj.listener, ...obj.options);
          }

          list.push(obj);
        }
      });
      call();
    } finally {
      list.forEach(obj => {
        if (obj.target.addEventListener) {
          obj.target.addEventListener(obj.type, obj.listener, ...obj.options);
        }
      });
    }
  }

  off(id) {
    if (id == null) {
      return;
    }

    const obj = this._listeners[id];

    if (!obj) {
      return;
    }

    delete this._listeners[id];

    if (obj.target.removeEventListener) {
      obj.target.removeEventListener(obj.type, obj.listener, ...obj.options);
    }
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any


  fire(target, type, ...args) {
    (0, utils_1.each)(this._listeners, obj => {
      if (obj.target === target && obj.type === type) {
        obj.listener.call(obj.target, ...args);
      }
    });
  }

  hasListener(target, type) {
    let result = false;
    (0, utils_1.each)(this._listeners, obj => {
      if (obj.target === target && obj.type === type) {
        result = true;
      }
    });
    return result;
  }

  clear() {
    (0, utils_1.each)(this._listeners, obj => {
      if (obj.target.removeEventListener) {
        obj.target.removeEventListener(obj.type, obj.listener, ...obj.options);
      }
    });
    this._listeners = {};
  }

  dispose() {
    this.clear(); // eslint-disable-next-line @typescript-eslint/no-explicit-any

    this._listeners = null;
  }

}

exports.EventHandler = EventHandler;

/***/ }),

/***/ "./internal/LRUCache.js":
/*!******************************!*\
  !*** ./internal/LRUCache.js ***!
  \******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LRUCache = void 0;

class LRUCache {
  constructor(cacheSize) {
    this._list = [];
    this._map = {};
    this._cacheSize = cacheSize || 50;
  }

  get(key) {
    const val = this._map[key];

    if (val) {
      const list = this._list;
      const idx = list.indexOf(key);
      list.splice(idx, 1);
      list.push(key);
    }

    return val;
  }

  put(key, value) {
    const list = this._list;
    const map = this._map;

    if (map[key]) {
      const idx = list.indexOf(key);
      list.splice(idx, 1);
    }

    map[key] = value;
    list.push(key);

    if (list.length > this._cacheSize) {
      const remKey = list.shift() || "";
      delete map[remKey];
    }
  }

}

exports.LRUCache = LRUCache;

/***/ }),

/***/ "./internal/NumberMap.js":
/*!*******************************!*\
  !*** ./internal/NumberMap.js ***!
  \*******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberMap = void 0;

const indexFirst = (arr, elm) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const i = Math.floor((low + high) / 2);

    if (arr[i] === elm) {
      return i;
    } else if (arr[i] > elm) {
      high = i - 1;
    } else {
      low = i + 1;
    }
  }

  return high < 0 ? 0 : high;
};

class NumberMap {
  constructor() {
    this._keys = [];
    this._vals = {};
    this._sorted = false;
  }

  put(key, value) {
    if (!(key in this._vals)) {
      this._keys.push(key);

      this._sorted = false;
    }

    this._vals[key] = value;
  }

  remove(key) {
    delete this._vals[key];

    const index = this._keys.indexOf(key);

    if (index < 0) {
      return;
    }

    this._keys.splice(index, 1);

    this._sorted = false;
  }

  get(key) {
    return this._vals[key];
  }

  has(key) {
    return this._vals[key] != null;
  }

  each(keyFrom, keyTo, fn) {
    const {
      _keys: keys
    } = this;
    const {
      length
    } = keys;

    if (!this._sorted) {
      keys.sort((a, b) => {
        if (a < b) {
          return -1;
        }

        if (a > b) {
          return 1;
        }

        return 0;
      });
      this._sorted = true;
    }

    for (let i = indexFirst(keys, keyFrom); i < length; i++) {
      const key = keys[i];

      if (keyFrom <= key && key <= keyTo) {
        fn(this.get(key), key);
      } else if (keyTo < key) {
        return;
      }
    }
  }

}

exports.NumberMap = NumberMap;

/***/ }),

/***/ "./internal/Rect.js":
/*!**************************!*\
  !*** ./internal/Rect.js ***!
  \**************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rect = void 0;

class Rect {
  constructor(left, top, width, height) {
    this._left = left;
    this._top = top;
    this._width = width;
    this._height = height;
  }

  static bounds(left, top, right, bottom) {
    return new Rect(left, top, right - left, bottom - top);
  }

  static max(rect1, rect2) {
    return Rect.bounds(Math.min(rect1.left, rect2.left), Math.min(rect1.top, rect2.top), Math.max(rect1.right, rect2.right), Math.max(rect1.bottom, rect2.bottom));
  }

  get left() {
    return this._left;
  }

  set left(left) {
    const {
      right
    } = this;
    this._left = left;
    this.right = right;
  }

  get top() {
    return this._top;
  }

  set top(top) {
    const {
      bottom
    } = this;
    this._top = top;
    this.bottom = bottom;
  }

  get width() {
    return this._width;
  }

  set width(width) {
    this._width = width;
    this._right = undefined;
  }

  get height() {
    return this._height;
  }

  set height(height) {
    this._height = height;
    this._bottom = undefined;
  }

  get right() {
    return this._right !== undefined ? this._right : this._right = this.left + this.width;
  }

  set right(right) {
    this._right = right;
    this.width = right - this.left;
  }

  get bottom() {
    return this._bottom !== undefined ? this._bottom : this._bottom = this.top + this.height;
  }

  set bottom(bottom) {
    this._bottom = bottom;
    this.height = bottom - this.top;
  }

  offsetLeft(offset) {
    this._left += offset;
    this._right = undefined;
  }

  offsetTop(offset) {
    this._top += offset;
    this._bottom = undefined;
  }

  copy() {
    return new Rect(this.left, this.top, this.width, this.height);
  }

  intersection(rect) {
    const x0 = Math.max(this.left, rect.left);
    const x1 = Math.min(this.left + this.width, rect.left + rect.width);

    if (x0 <= x1) {
      const y0 = Math.max(this.top, rect.top);
      const y1 = Math.min(this.top + this.height, rect.top + rect.height);

      if (y0 <= y1) {
        return Rect.bounds(x0, y0, x1, y1);
      }
    }

    return null;
  }

  contains(another) {
    return this.left <= another.left && this.left + this.width >= another.left + another.width && this.top <= another.top && this.top + this.height >= another.top + another.height;
  }

  inPoint(x, y) {
    return this.left <= x && this.left + this.width >= x && this.top <= y && this.top + this.height >= y;
  }

}

exports.Rect = Rect;

/***/ }),

/***/ "./internal/Scrollable.js":
/*!********************************!*\
  !*** ./internal/Scrollable.js ***!
  \********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scrollable = void 0;

const style = __importStar(__webpack_require__(/*! ./style */ "./internal/style.js"));

const EventHandler_1 = __webpack_require__(/*! ./EventHandler */ "./internal/EventHandler.js");

const utils_1 = __webpack_require__(/*! ./utils */ "./internal/utils.js");

const MAX_SCROLL = utils_1.browser.heightLimit - 1000;

class Scrollable {
  constructor() {
    this._p = 1;
    this._handler = new EventHandler_1.EventHandler();
    this._scrollable = document.createElement("div");

    this._scrollable.classList.add("grid-scrollable");

    this._height = 0;
    this._width = 0;
    this._endPointElement = document.createElement("div");

    this._endPointElement.classList.add("grid-scroll-end-point");

    this._update();

    this._scrollable.appendChild(this._endPointElement); // const mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? 'DOMMouseScroll' : 'mousewheel'; //FF doesn't recognize mousewheel as of FF3.x
    // this._handler.on(this._scrollable, mousewheelevt, (evt) => {
    // const delta = evt.detail ? evt.detail * (-120) : evt.wheelDelta;
    // const point = Math.min(Math.abs(delta) / 12, this.scrollHeight / 5);
    // this.scrollTop += delta < 0 ? point : -point;
    // });

  }

  calcTop(top) {
    const relativeTop = top - this.scrollTop;
    return this._scrollable.scrollTop + relativeTop;
  }

  getElement() {
    return this._scrollable;
  }

  setScrollSize(width, height) {
    this._width = width;
    this._height = height;

    this._update();
  }

  get scrollWidth() {
    return this._width;
  }

  set scrollWidth(width) {
    this._width = width;

    this._update();
  }

  get scrollHeight() {
    return this._height;
  }

  set scrollHeight(height) {
    this._height = height;

    this._update();
  }

  get scrollLeft() {
    return Math.max(Math.ceil(this._scrollable.scrollLeft), 0);
  }

  set scrollLeft(scrollLeft) {
    this._scrollable.scrollLeft = scrollLeft;
  }

  get scrollTop() {
    return Math.max(Math.ceil(this._scrollable.scrollTop / this._p), 0);
  }

  set scrollTop(scrollTop) {
    this._scrollable.scrollTop = scrollTop * this._p;
  }

  onScroll(fn) {
    this._handler.on(this._scrollable, "scroll", fn);
  }

  dispose() {
    this._handler.dispose();
  }

  _update() {
    let domHeight;
    const {
      offsetHeight,
      offsetWidth
    } = this._scrollable;

    if (this._height > MAX_SCROLL) {
      const sbSize = style.getScrollBarSize();
      const vScrollRange = MAX_SCROLL - offsetHeight + sbSize;
      const rScrollRange = this._height - offsetHeight + sbSize;
      this._p = vScrollRange / rScrollRange;
      domHeight = MAX_SCROLL;
    } else {
      this._p = 1;
      domHeight = this._height;
    }

    this._endPointElement.style.top = `${domHeight.toFixed()}px`;
    this._endPointElement.style.left = `${this._width.toFixed()}px`; // Sets the maximum value to the scroll position
    // if the current scroll position exceeds the maximum value.

    if (this.scrollTop > this.scrollHeight - offsetHeight) {
      this.scrollTop = this.scrollHeight - offsetHeight;
    }

    if (this.scrollLeft > this.scrollWidth - offsetWidth) {
      this.scrollLeft = this.scrollWidth - offsetWidth;
    }
  }

}

exports.Scrollable = Scrollable;

/***/ }),

/***/ "./internal/animate.js":
/*!*****************************!*\
  !*** ./internal/animate.js ***!
  \*****************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animate = void 0;

const utils_1 = __webpack_require__(/*! ./utils */ "./internal/utils.js");

function cubicBezier(x2, y2, x3, y3) {
  let step;
  const err = 0.0001;
  x2 *= 3;
  y2 *= 3;
  x3 *= 3;
  y3 *= 3;
  return function (t) {
    let p, a, b, c, d, x, s;

    if (t < 0 || 1 < t) {
      throw new Error(`${t}`);
    }

    p = step || t;

    do {
      a = 1 - p;
      b = a * a;
      c = p * p;
      d = c * p;
      x = x2 * b * p + x3 * a * c + d;
      s = t - x;
      p += s * 0.5;
    } while (err < Math.abs(s));

    step = p;
    return y2 * b * p + y3 * a * c + d;
  };
}

const EASINGS = {
  linear(p) {
    return p;
  },

  easeIn: cubicBezier(0.42, 0.0, 1.0, 1.0),
  easeOut: cubicBezier(0.0, 0.0, 0.58, 1.0),
  easeInOut: cubicBezier(0.42, 0.0, 0.58, 1.0)
};
const raf = utils_1.isNode ? () => {} : window.requestAnimationFrame || ( // eslint-disable-next-line @typescript-eslint/no-explicit-any
fn => setTimeout(fn, 1));

function now() {
  return Date.now();
}
/**
 * <pre>
 * Animates.
 * </pre>
 * @function
 * @param {number} duration animation time.
 * @param {function} step step
 * @param {function|string} easing easing
 * @returns {object} Deferred object.
 */


function animate(duration, step, easing) {
  const startedAt = now();
  const easingFn = easing == null ? EASINGS.easeInOut : typeof easing === "string" ? EASINGS[easing] : easing;
  let canceledFlg = false;

  const createAnim = (resolve, reject) => {
    const anim = () => {
      const point = now() - startedAt;

      if (canceledFlg) {
        //cancel
        if (reject) {
          reject();
        }
      } else if (point >= duration) {
        //end
        step(1);

        if (resolve) {
          resolve();
        }
      } else {
        step(easingFn(point / duration));
        raf(anim);
      }
    };

    return anim;
  };

  const cancel = () => {
    canceledFlg = true;
  };

  if (typeof Promise !== "undefined") {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = new Promise((resolve, reject) => {
      const anim = createAnim(resolve, reject);
      step(0);
      anim();
    });
    result.cancel = cancel;
    return result;
  } else {
    const anim = createAnim(() => {}, () => {});
    step(0);
    anim();
    return {
      cancel
    };
  }
}

exports.animate = animate;

/***/ }),

/***/ "./internal/calc.js":
/*!**************************!*\
  !*** ./internal/calc.js ***!
  \**************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toPx = void 0;

const utils_1 = __webpack_require__(/*! ./utils */ "./internal/utils.js");

const TYPE_PAREN = 0;
const TYPE_UNIT = 1;
const TYPE_OPERATOR = 2;
const TYPE_NUMBER = 3;
const NODE_TYPE_UNIT = 10;
const NODE_TYPE_BINARY_EXPRESSION = 11;
const NODE_TYPE_NUMBER = 12;
const TABULATION = 0x09;
const CARRIAGE_RETURN = 0x0d;
const LINE_FEED = 0x0a;
const FORM_FEED = 0x0c;
const SPACE = 0x20;
const PERCENT = 0x25;
const FULL_STOP = 0x2e;
const DIGIT_0 = 0x30;
const DIGIT_9 = 0x39;
const LATIN_CAPITAL_A = 0x41;
const LATIN_CAPITAL_Z = 0x5a;
const LATIN_SMALL_A = 0x61;
const LATIN_SMALL_Z = 0x7a;

function isUpperLetter(cp) {
  return cp >= LATIN_CAPITAL_A && cp <= LATIN_CAPITAL_Z;
}

function isLowerLetter(cp) {
  return cp >= LATIN_SMALL_A && cp <= LATIN_SMALL_Z;
}

function isLetter(cp) {
  return isLowerLetter(cp) || isUpperLetter(cp);
}

function isWhitespace(cp) {
  return cp === TABULATION || cp === LINE_FEED || cp === FORM_FEED || cp === CARRIAGE_RETURN || cp === SPACE;
}

function isDigit(cp) {
  return cp >= DIGIT_0 && cp <= DIGIT_9;
}

function isDot(cp) {
  return cp === FULL_STOP;
}

function isUnit(cp) {
  return isLetter(cp) || cp === PERCENT;
}

function createError(calc) {
  return new Error(`calc parse error: ${calc}`);
}
/**
 * tokenize
 * @param {string} calc calc expression
 * @returns {Array} tokens
 * @private
 */


function tokenize(calc) {
  const exp = calc.replace(/calc\(/g, "(").trim();
  const tokens = [];
  const len = exp.length;

  for (let index = 0; index < len; index++) {
    const c = exp[index];
    const cp = c.charCodeAt(0);

    if (c === "(" || c === ")") {
      tokens.push({
        value: c,
        type: TYPE_PAREN
      });
    } else if (c === "*" || c === "/") {
      tokens.push({
        value: c,
        type: TYPE_OPERATOR
      });
    } else if (c === "+" || c === "-") {
      index = parseSign(c, index + 1) - 1;
    } else if (isDigit(cp) || isDot(cp)) {
      index = parseNum(c, index + 1) - 1;
    } else if (isWhitespace(cp)) {// skip
    } else {
      throw createError(calc);
    }
  }

  function parseSign(sign, start) {
    if (start < len) {
      const c = exp[start];
      const cp = c.charCodeAt(0);

      if (isDigit(cp) || isDot(cp)) {
        return parseNum(sign + c, start + 1);
      }
    }

    tokens.push({
      value: sign,
      type: TYPE_OPERATOR
    });
    return start;
  }

  function parseNum(num, start) {
    let index = start;

    for (; index < len; index++) {
      const c = exp[index];
      const cp = c.charCodeAt(0);

      if (isDigit(cp)) {
        num += c;
      } else if (c === ".") {
        if (num.indexOf(".") >= 0) {
          throw createError(calc);
        }

        num += c;
      } else if (isUnit(cp)) {
        return parseUnit(num, c, index + 1);
      } else {
        break;
      }
    }

    if (num === ".") {
      throw createError(calc);
    }

    tokens.push({
      value: parseFloat(num),
      type: TYPE_NUMBER
    });
    return index;
  }

  function parseUnit(num, unit, start) {
    let index = start;

    for (; index < len; index++) {
      const c = exp[index];
      const cp = c.charCodeAt(0);

      if (isUnit(cp)) {
        unit += c;
      } else {
        break;
      }
    }

    tokens.push({
      value: parseFloat(num),
      unit,
      type: TYPE_UNIT
    });
    return index;
  }

  return tokens;
}

const PRECEDENCE = {
  "*": 3,
  "/": 3,
  "+": 2,
  "-": 2
};

function lex(tokens, calc) {
  function buildBinaryExpNode(stack) {
    const right = stack.pop();
    const op = stack.pop();
    const left = stack.pop();

    if (!left || !left.nodeType || !op || op.type !== TYPE_OPERATOR || !right || !right.nodeType) {
      throw createError(calc);
    }

    return {
      nodeType: NODE_TYPE_BINARY_EXPRESSION,
      left,
      op,
      right
    };
  }

  const stack = [];

  while (tokens.length) {
    const token = tokens.shift();

    if (token.type === TYPE_PAREN && token.value === "(") {
      let deep = 0;
      const closeIndex = utils_1.array.findIndex(tokens, t => {
        if (t.type === TYPE_PAREN && t.value === "(") {
          deep++;
        } else if (t.type === TYPE_PAREN && t.value === ")") {
          if (!deep) {
            return true;
          }

          deep--;
        }

        return false;
      });

      if (closeIndex === -1) {
        throw createError(calc);
      }

      stack.push(lex(tokens.splice(0, closeIndex), calc));
      tokens.shift();
    } else if (token.type === TYPE_OPERATOR) {
      if (stack.length >= 3) {
        const beforeOp = stack[stack.length - 2].value;

        if (PRECEDENCE[token.value] <= PRECEDENCE[beforeOp]) {
          stack.push(buildBinaryExpNode(stack));
        }
      }

      stack.push(token);
    } else if (token.type === TYPE_UNIT) {
      const {
        value: num,
        unit
      } = token;
      stack.push({
        nodeType: NODE_TYPE_UNIT,
        value: num,
        unit
      });
    } else if (token.type === TYPE_NUMBER) {
      stack.push({
        nodeType: NODE_TYPE_NUMBER,
        value: token.value
      });
    }
  }

  while (stack.length > 1) {
    stack.push(buildBinaryExpNode(stack));
  }

  return stack[0];
}

function parse(calcStr) {
  const tokens = tokenize(calcStr);
  return lex(tokens, calcStr);
}

function calcNode(node, context) {
  if (node.nodeType === NODE_TYPE_BINARY_EXPRESSION) {
    const left = calcNode(node.left, context);
    const right = calcNode(node.right, context);

    switch (node.op.value) {
      case "+":
        return left + right;

      case "-":
        return left - right;

      case "*":
        return left * right;

      case "/":
        return left / right;

      default:
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        throw new Error(`calc error. unknown operator: ${node.op.value}`);
    }
  } else if (node.nodeType === NODE_TYPE_UNIT) {
    switch (node.unit) {
      case "%":
        return node.value * context.full / 100;

      case "em":
        return node.value * context.em;

      case "px":
        return node.value;

      default:
        throw new Error(`calc error. unknown unit: ${node.unit}`);
    }
  } else if (node.nodeType === NODE_TYPE_NUMBER) {
    return node.value;
  }

  throw new Error("calc error.");
}

function toPxInternal(value, context) {
  const ast = parse(value);
  return calcNode(ast, context);
}

function toPx(value, context) {
  if (typeof value === "string") {
    return toPxInternal(value.trim(), context);
  }

  return value - 0;
}

exports.toPx = toPx;

/***/ }),

/***/ "./internal/canvases.js":
/*!******************************!*\
  !*** ./internal/canvases.js ***!
  \******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calcStartPosition = exports.calcBasePosition = exports.getFontSize = void 0;
const fontSizeCache = {};

function getFontSize(ctx, font) {
  const fontName = font || ctx.font;

  if (fontSizeCache[fontName]) {
    return fontSizeCache[fontName];
  }

  const bk = ctx.font;

  try {
    ctx.font = fontName;
    const em = ctx.measureText("あ").width;
    return fontSizeCache[fontName] = {
      width: em,
      height: em
    };
  } finally {
    ctx.font = bk;
  }
}

exports.getFontSize = getFontSize;

function calcBasePosition(ctx, rect, {
  offset = 0,
  padding: {
    left: paddingLeft = 0,
    right: paddingRight = 0,
    top: paddingTop = 0,
    bottom: paddingBottom = 0
  } = {}
} = {}) {
  return calcStartPosition(ctx, rect, 0, 0, {
    offset,
    padding: {
      left: paddingLeft,
      right: paddingRight,
      top: paddingTop,
      bottom: paddingBottom
    }
  });
}

exports.calcBasePosition = calcBasePosition;

function calcStartPosition(ctx, rect, width, height, {
  offset = 0,
  padding: {
    left: paddingLeft = 0,
    right: paddingRight = 0,
    top: paddingTop = 0,
    bottom: paddingBottom = 0
  } = {}
} = {}) {
  const textAlign = ctx.textAlign || "left";
  const textBaseline = ctx.textBaseline || "middle";
  ctx.textAlign = textAlign;
  ctx.textBaseline = textBaseline;
  let x = rect.left + offset + paddingLeft;

  if (textAlign === "right" || textAlign === "end") {
    x = rect.right - width - offset - paddingRight;
  } else if (textAlign === "center") {
    x = rect.left + (rect.width - width + paddingLeft - paddingRight) / 2;
  }

  let y = rect.top + offset + paddingTop;

  if (textBaseline === "bottom" || textBaseline === "alphabetic" || textBaseline === "ideographic") {
    y = rect.bottom - height - offset - paddingBottom;
  } else if (textBaseline === "middle") {
    y = rect.top + (rect.height - height + paddingTop - paddingBottom) / 2;
  }

  return {
    x,
    y
  };
}

exports.calcStartPosition = calcStartPosition;

/***/ }),

/***/ "./internal/color.js":
/*!***************************!*\
  !*** ./internal/color.js ***!
  \***************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colorToRGB = void 0;
const rgbMap = {};

function styleColorToRGB(color) {
  const dummy = document.createElement("div");
  const {
    style
  } = dummy;
  style.color = color;
  style.position = "fixed";
  style.height = "1px";
  style.width = "1px";
  style.opacity = "0";
  document.body.appendChild(dummy);
  const {
    color: styleColor
  } = (document.defaultView || window).getComputedStyle(dummy, "");
  document.body.removeChild(dummy);
  return colorToRGB0(styleColor || "");
}

function hexToNum(hex) {
  return parseInt(hex, 16);
}

function createRGB(r, g, b, a = 1) {
  return {
    r,
    g,
    b,
    a
  };
}

function tripleHexToRGB({
  1: r,
  2: g,
  3: b
}) {
  return createRGB(hexToNum(r + r), hexToNum(g + g), hexToNum(b + b));
}

function sextupleHexToRGB({
  1: r1,
  2: r2,
  3: g1,
  4: g2,
  5: b1,
  6: b2
}) {
  return createRGB(hexToNum(r1 + r2), hexToNum(g1 + g2), hexToNum(b1 + b2));
}

function testRGB({
  r,
  g,
  b,
  a
}) {
  return 0 <= r && r <= 255 && 0 <= g && g <= 255 && 0 <= b && b <= 255 && 0 <= a && a <= 1;
}

function rateToByte(r) {
  return Math.ceil(r * 255 / 100);
}

const numberPattern = /((?:\+|-)?(?:\d+(?:\.\d+)?|\.\d+))/.source;
const percentPattern = `${numberPattern}%`;
const maybePercentPattern = `${numberPattern}(%?)`;

function buildRgbWithCommaRegExp(bytePattern) {
  return new RegExp(`^rgba?\\(\\s*${bytePattern}\\s*,\\s*${bytePattern}\\s*,\\s*${bytePattern}\\s*\\)$`, "i");
}

function buildRgbLv4RegExp(bytePattern) {
  return new RegExp(`^rgba?\\(\\s*${bytePattern}\\s+${bytePattern}\\s+${bytePattern}\\s*\\)$`, "i");
}

function buildRgbaWithCommaRegExp(bytePattern, alphaPattern) {
  return new RegExp(`^rgba?\\(\\s*${bytePattern}\\s*,\\s*${bytePattern}\\s*,\\s*${bytePattern}\\s*,\\s*${alphaPattern}\\s*\\)$`, "i");
}

function buildRgbaLv4RegExp(bytePattern, alphaPattern) {
  return new RegExp(`^rgba?\\(\\s*${bytePattern}\\s+${bytePattern}\\s+${bytePattern}\\s*/\\s*${alphaPattern}\\s*\\)$`, "i");
}

function colorToRGB0(color) {
  if (/^#[0-9a-f]{3}$/i.exec(color)) {
    return tripleHexToRGB(color);
  }

  if (/^#[0-9a-f]{6}$/i.exec(color)) {
    return sextupleHexToRGB(color);
  }

  let ret = buildRgbWithCommaRegExp(numberPattern).exec(color) || buildRgbLv4RegExp(numberPattern).exec(color);

  if (ret) {
    const rgb = createRGB(Number(ret[1]), Number(ret[2]), Number(ret[3]));

    if (testRGB(rgb)) {
      return rgb;
    }
  }

  ret = buildRgbWithCommaRegExp(percentPattern).exec(color) || buildRgbLv4RegExp(percentPattern).exec(color);

  if (ret) {
    const rgb = createRGB(rateToByte(Number(ret[1])), rateToByte(Number(ret[2])), rateToByte(Number(ret[3])));

    if (testRGB(rgb)) {
      return rgb;
    }
  }

  ret = buildRgbaWithCommaRegExp(numberPattern, maybePercentPattern).exec(color) || buildRgbaLv4RegExp(numberPattern, maybePercentPattern).exec(color);

  if (ret) {
    const rgb = createRGB(Number(ret[1]), Number(ret[2]), Number(ret[3]), Number(ret[4]) / (ret[5]
    /* % */
    ? 100 : 1));

    if (testRGB(rgb)) {
      return rgb;
    }
  }

  ret = buildRgbaWithCommaRegExp(percentPattern, maybePercentPattern).exec(color) || buildRgbaLv4RegExp(percentPattern, maybePercentPattern).exec(color);

  if (ret) {
    const rgb = createRGB(rateToByte(Number(ret[1])), rateToByte(Number(ret[2])), rateToByte(Number(ret[3])), Number(ret[4]) / (ret[5]
    /* % */
    ? 100 : 1));

    if (testRGB(rgb)) {
      return rgb;
    }
  }

  return null;
}

function colorToRGB(color) {
  if (typeof color !== "string") {
    return createRGB(0, 0, 0, 0);
  }

  color = color.toLowerCase().trim();

  if (rgbMap[color]) {
    return rgbMap[color];
  }

  return colorToRGB0(color) || (rgbMap[color] = styleColorToRGB(color));
}

exports.colorToRGB = colorToRGB;

/***/ }),

/***/ "./internal/dom.js":
/*!*************************!*\
  !*** ./internal/dom.js ***!
  \*************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findNextSiblingFocusable = exports.findPrevSiblingFocusable = exports.isFocusable = exports.enableFocus = exports.disableFocus = exports.appendHtml = exports.toNodeList = exports.empty = exports.createElement = void 0;

function createElement(tagName, {
  classList,
  text,
  html
} = {}) {
  const element = document.createElement(tagName);

  if (classList) {
    if (Array.isArray(classList)) {
      element.classList.add(...classList);
    } else {
      element.classList.add(classList);
    }
  }

  if (text) {
    element.textContent = text;
  } else if (html) {
    element.innerHTML = html;
  }

  return element;
}

exports.createElement = createElement;

function empty(dom) {
  let c;

  while (c = dom.firstChild) {
    dom.removeChild(c);
  }
}

exports.empty = empty;

function isNode(arg) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return !!(arg.nodeType && arg.nodeName);
}

function toNode(arg) {
  if (isNode(arg)) {
    return arg;
  }

  const dom = createElement("div", {
    html: arg
  });
  return Array.prototype.slice.call(dom.childNodes);
}

function toNodeList(arg) {
  if (Array.isArray(arg)) {
    const result = [];
    arg.forEach(e => {
      result.push(...toNodeList(e));
    });
    return result;
  }

  const node = toNode(arg);
  return Array.isArray(node) ? node : [node];
}

exports.toNodeList = toNodeList;

function appendHtml(dom, inner) {
  toNodeList(inner).forEach(node => {
    dom.appendChild(node);
  });
}

exports.appendHtml = appendHtml;

function disableFocus(el) {
  el.dataset.disableBeforeTabIndex = `${el.tabIndex}`;
  el.tabIndex = -1;
  Array.prototype.slice.call(el.children, 0).forEach(disableFocus);
}

exports.disableFocus = disableFocus;

function enableFocus(el) {
  if ("disableBeforeTabIndex" in el.dataset) {
    el.tabIndex = Number(el.dataset.disableBeforeTabIndex);
  }

  Array.prototype.slice.call(el.children, 0).forEach(enableFocus);
}

exports.enableFocus = enableFocus;

function isFocusable(el) {
  return el.tabIndex != null && el.tabIndex > -1;
}

exports.isFocusable = isFocusable;

function findPrevSiblingFocusable(el) {
  let n = el.previousSibling;

  while (n && !isFocusable(n)) {
    n = n.previousSibling;
  }

  return n;
}

exports.findPrevSiblingFocusable = findPrevSiblingFocusable;

function findNextSiblingFocusable(el) {
  let n = el.nextSibling;

  while (n && !isFocusable(n)) {
    n = n.nextSibling;
  }

  return n;
}

exports.findNextSiblingFocusable = findNextSiblingFocusable;

/***/ }),

/***/ "./internal/fonts.js":
/*!***************************!*\
  !*** ./internal/fonts.js ***!
  \***************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.load = exports.check = void 0;

const utils_1 = __webpack_require__(/*! ./utils */ "./internal/utils.js");

const loads = {};
let load;
exports.load = load;
let check;
exports.check = check;

if (utils_1.isNode) {
  exports.load = load = function (_font, _testStr, callback) {
    callback();
  };

  exports.check = check = function () {
    return false;
  };
} else {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fontFaceSet = document.fonts;
  const legacy = !fontFaceSet;
  exports.load = load = legacy ? function (font, testStr, callback) {
    //for legacy(IE)
    if (loads[`${font} @ ${testStr}`]) {
      callback();
      return;
    } // eslint-disable-next-line @typescript-eslint/no-var-requires


    __webpack_require__(/*! ./legacy/fontwatch/FontWatchRunner */ "./internal/legacy/fontwatch/FontWatchRunner.js").load(font, testStr, () => {
      loads[`${font} @ ${testStr}`] = true;
      callback();
    }, () => {
      loads[`${font} @ ${testStr}`] = true;
      callback();
    });
  } : function (font, _testStr, callback) {
    if (loads.all || loads[font]) {
      callback();
      return;
    }

    fontFaceSet.ready.then(() => {
      loads.all = true;
    });
    fontFaceSet.load(font).then(() => {
      loads[font] = true;
      callback();
    });
  };
  exports.check = check = legacy ? function (font, testStr) {
    //for legacy(IE)
    if (loads[`${font} @ ${testStr}`]) {
      return true;
    }

    load(font, testStr, () => {});
    return false;
  } : function (font, testStr) {
    if (loads.all || loads[font]) {
      return true;
    }

    if (!fontFaceSet.check(font)) {
      load(font, testStr, () => {});
      return false;
    }

    return true;
  };
}

/***/ }),

/***/ "./internal/hiDPI.js":
/*!***************************!*\
  !*** ./internal/hiDPI.js ***!
  \***************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transform = void 0;

const EventHandler_1 = __webpack_require__(/*! ./EventHandler */ "./internal/EventHandler.js");

const utils_1 = __webpack_require__(/*! ./utils */ "./internal/utils.js");

const handler = new EventHandler_1.EventHandler();
let ratio = 1;

function setRatio() {
  if (utils_1.isNode) {
    ratio = 1;
  } else {
    ratio = Math.ceil(window.devicePixelRatio || 1);

    if (ratio > 1 && ratio % 2 !== 0) {
      ratio += 1;
    }
  }
}

setRatio();

if (!utils_1.isNode) {
  handler.on(window, "resize", setRatio);
}

function transform(canvas) {
  const ctx = canvas.getContext("2d");
  const {
    getAttribute,
    setAttribute
  } = canvas;

  canvas.getAttribute = function (name) {
    let result = getAttribute.call(this, name);

    if (name === "width" || name === "height") {
      result = `${Number(result) / ratio}`;
    }

    return result;
  };

  canvas.setAttribute = function (name, val) {
    const wh = name === "width" || name === "height";

    if (wh) {
      val = `${Number(val) * ratio}`;
    }

    const result = setAttribute.call(this, name, val);

    if (wh) {
      ctx.scale(ratio, ratio);
    }

    return result;
  };

  Object.defineProperty(canvas, "width", {
    get() {
      return Number(canvas.getAttribute("width"));
    },

    set: val => {
      canvas.setAttribute("width", `${Math.floor(val)}`);
    },
    configurable: true,
    enumerable: true
  });
  Object.defineProperty(canvas, "height", {
    get() {
      return Number(canvas.getAttribute("height"));
    },

    set: val => {
      canvas.setAttribute("height", `${Math.floor(val)}`);
    },
    configurable: true,
    enumerable: true
  });
  const {
    drawImage
  } = ctx; // eslint-disable-next-line @typescript-eslint/no-explicit-any

  ctx.drawImage = function (img, ...args) {
    if (img !== canvas || ratio === 1) {
      return drawImage.call(this, img, ...args);
    }

    this.save();

    try {
      this.scale(1 / ratio, 1 / ratio);

      if (args.length > 4) {
        args[4] *= ratio;
        args[5] *= ratio;
      } else {
        args[0] *= ratio;
        args[1] *= ratio;
      }

      return drawImage.call(this, img, ...args);
    } finally {
      this.restore();
    }
  };

  return canvas;
}

exports.transform = transform;

/***/ }),

/***/ "./internal/icons.js":
/*!***************************!*\
  !*** ./internal/icons.js ***!
  \***************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iconPropKeys = exports.toNormalizeArray = exports.getIconProps = void 0;
const ICON_PROP_KEYS = ["content", "font", "color", "className", "tagName", "isLiga", "width", "src", "svg", "name", "path", "offsetTop", "offsetLeft"];

function quote(name) {
  const quoted = [];
  const split = name.split(/,\s*/);

  for (let i = 0; i < split.length; i++) {
    const part = split[i].replace(/['"]/g, "");

    if (part.indexOf(" ") === -1 && !/^\d/.test(part)) {
      quoted.push(part);
    } else {
      quoted.push(`'${part}'`);
    }
  }

  return quoted.join(",");
}

const doms = {};
const props = {};

function getIconProps(tagName, className) {
  const tagProps = props[tagName] || (props[tagName] = {});

  if (tagProps[className]) {
    return tagProps[className];
  }

  const dom = doms[tagName] || (doms[tagName] = document.createElement(tagName)); // `classList.add()` cannot be used because it may be separated by spaces.

  dom.className = className;
  dom.classList.add("cheetah-grid-icon");
  document.body.appendChild(dom);

  try {
    const beforeStyle = (document.defaultView || window).getComputedStyle(dom, "::before");
    let content = beforeStyle.getPropertyValue("content");

    if (content.length >= 3 && (content[0] === '"' || content[0] === "'")) {
      if (content[0] === content[content.length - 1]) {
        content = content.slice(1, -1);
      }
    }

    let font = beforeStyle.getPropertyValue("font");

    if (!font) {
      font = `${beforeStyle.getPropertyValue("font-style")} ${beforeStyle.getPropertyValue("font-variant")} ${beforeStyle.getPropertyValue("font-weight")} ${beforeStyle.getPropertyValue("font-size")}/${beforeStyle.getPropertyValue("line-height")} ${quote(beforeStyle.getPropertyValue("font-family"))}`;
    }

    const color = beforeStyle.getPropertyValue("color");
    const width = dom.clientWidth;
    const isLiga = (beforeStyle.getPropertyValue("font-feature-settings") || "").indexOf("liga") > -1;
    return tagProps[className] = {
      content,
      font,
      color,
      width,
      isLiga
    };
  } finally {
    document.body.removeChild(dom);
  }
}

exports.getIconProps = getIconProps;

function toPropArray(prop, count) {
  const result = [];

  if (Array.isArray(prop)) {
    result.push(...prop);

    for (let i = prop.length; i < count; i++) {
      result.push(null);
    }
  } else {
    for (let i = 0; i < count; i++) {
      result.push(prop);
    }
  }

  return result;
}

function toSimpleArray(iconProps) {
  if (!iconProps) {
    return iconProps;
  } else if (Array.isArray(iconProps)) {
    return iconProps;
  }

  const workData = {};
  let count = 0;
  ICON_PROP_KEYS.forEach(k => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const prop = iconProps[k];

    if (prop) {
      if (Array.isArray(prop)) {
        count = Math.max(count, prop.length);
      } else {
        count = Math.max(count, 1);
      }
    }
  });
  ICON_PROP_KEYS.forEach(k => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const arr = toPropArray(iconProps[k], count); // eslint-disable-next-line @typescript-eslint/no-explicit-any

    workData[k] = arr;
  });
  const result = [];

  for (let i = 0; i < count; i++) {
    const data = {};
    ICON_PROP_KEYS.forEach(k => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const val = workData[k][i]; // eslint-disable-next-line @typescript-eslint/no-explicit-any

      data[k] = val;
    });
    result.push(data);
  }

  return result;
}

function normalize(iconProps) {
  const data = {};

  for (const k in iconProps) {
    if (k === "className") {
      continue;
    }

    if (isIconKey(k)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data[k] = iconProps[k];
    }
  }

  if (iconProps.className) {
    const prop = getIconProps(iconProps.tagName || "i", iconProps.className);

    for (const k in prop) {
      if (isIconKey(k)) {
        if (iconProps[k] == null) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          data[k] = prop[k];
        }
      }
    }
  }

  return data;
}

function toNormalizeArray(iconProps) {
  const icons = toSimpleArray(iconProps);

  if (!icons) {
    return icons;
  }

  return icons.map(icon => normalize(icon));
}

exports.toNormalizeArray = toNormalizeArray;
exports.iconPropKeys = ICON_PROP_KEYS;

function isIconKey(k) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return ICON_PROP_KEYS.indexOf(k) >= 0;
}

/***/ }),

/***/ "./internal/imgs.js":
/*!**************************!*\
  !*** ./internal/imgs.js ***!
  \**************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCacheOrLoad = exports.loadImage = void 0;

const LRUCache_1 = __webpack_require__(/*! ./LRUCache */ "./internal/LRUCache.js");

const utils_1 = __webpack_require__(/*! ./utils */ "./internal/utils.js");

const allCache = {};

function loadImage(src) {
  if (typeof Promise === "undefined") {
    console.error("Promise is not loaded. load Promise before this process.");
    return {
      then() {
        return this;
      } // eslint-disable-next-line @typescript-eslint/no-explicit-any


    };
  }

  const img = new Image();
  const result = new Promise(resolve => {
    img.onload = () => {
      resolve(img);
    };
  });

  img.onerror = () => {
    const url = src.length > 200 ? `${src.slice(0, 200)}...` : src;
    console.warn(`cannot load: ${url}`);
    throw new Error(`IMAGE LOAD ERROR: ${url}`);
  };

  img.src = src;
  return result;
}

exports.loadImage = loadImage;

function getCacheOrLoad0(cache, src) {
  return (0, utils_1.then)(src, src => {
    const c = cache.get(src);

    if (c) {
      return c;
    }

    const result = loadImage(src).then(img => {
      cache.put(src, img);
      return img;
    });
    cache.put(src, result);
    return result;
  });
}

function getCacheOrLoad(cacheName, cacheSize, src) {
  const cache = allCache[cacheName] || (allCache[cacheName] = new LRUCache_1.LRUCache(cacheSize));
  return getCacheOrLoad0(cache, src);
}

exports.getCacheOrLoad = getCacheOrLoad;

/***/ }),

/***/ "./internal/legacy/canvas/Path2DShim.js":
/*!**********************************************!*\
  !*** ./internal/legacy/canvas/Path2DShim.js ***!
  \**********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Path2DShim = void 0;

const PathCommandsParser_1 = __webpack_require__(/*! ./PathCommandsParser */ "./internal/legacy/canvas/PathCommandsParser.js");

const parser = new PathCommandsParser_1.PathCommandsParser();

class Path2DShim {
  arc(...args) {
    this._ops.push({
      op: "arc",
      args
    });
  }

  arcTo(...args) {
    this._ops.push({
      op: "arcTo",
      args
    });
  }

  bezierCurveTo(...args) {
    this._ops.push({
      op: "bezierCurveTo",
      args
    });
  }

  closePath(...args) {
    this._ops.push({
      op: "closePath",
      args
    });
  }

  ellipse(...args) {
    this._ops.push({
      op: "ellipse",
      args
    });
  }

  lineTo(...args) {
    this._ops.push({
      op: "lineTo",
      args
    });
  }

  moveTo(...args) {
    this._ops.push({
      op: "moveTo",
      args
    });
  }

  quadraticCurveTo(...args) {
    this._ops.push({
      op: "quadraticCurveTo",
      args
    });
  }

  rect(...args) {
    this._ops.push({
      op: "rect",
      args
    });
  }

  constructor(arg) {
    this._ops = [];

    if (arg === undefined) {
      return;
    }

    if (typeof arg === "string") {
      // try {
      this._ops = parser.parse(arg); // } catch (e) {
      // 	throw e;
      // }
    } else if (arg.hasOwnProperty("_ops")) {
      this._ops = [...arg._ops];
    } else {
      throw new Error(`Error: ${typeof arg} is not a valid argument to Path`);
    }
  }

  roundRect(_x, _y, _w, _h, _radii) {
    throw new Error("Method not implemented.");
  }

}

exports.Path2DShim = Path2DShim;
const {
  CanvasRenderingContext2D
} = window;
const originalFill = CanvasRenderingContext2D.prototype.fill; // eslint-disable-next-line @typescript-eslint/no-explicit-any

CanvasRenderingContext2D.prototype.fill = function (...args) {
  if (args[0] instanceof Path2DShim) {
    const path = args[0];
    this.beginPath();

    path._ops.forEach(op => {
      const fn = this[op.op];
      fn.apply(this, op.args);
    });

    originalFill.apply(this, Array.prototype.slice.call(args, 1));
  } else {
    originalFill.apply(this, args);
  }
};

/***/ }),

/***/ "./internal/legacy/canvas/PathCommands.js":
/*!************************************************!*\
  !*** ./internal/legacy/canvas/PathCommands.js ***!
  \************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PathCommands = void 0;
/*eslint new-cap: "off"*/

function mag(v) {
  return Math.sqrt(Math.pow(v[0], 2) + Math.pow(v[1], 2));
}

function dot(u, v) {
  return u[0] * v[0] + u[1] * v[1];
}

function ratio(u, v) {
  return dot(u, v) / (mag(u) * mag(v));
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function angle(u, v) {
  let sign = 1.0;

  if (u[0] * v[1] - u[1] * v[0] < 0) {
    sign = -1.0;
  }

  return sign * Math.acos(clamp(ratio(u, v), -1, 1));
}

function rotClockwise(v, angle) {
  const cost = Math.cos(angle);
  const sint = Math.sin(angle);
  return [cost * v[0] + sint * v[1], -1 * sint * v[0] + cost * v[1]];
}

function rotCounterClockwise(v, angle) {
  const cost = Math.cos(angle);
  const sint = Math.sin(angle);
  return [cost * v[0] - sint * v[1], sint * v[0] + cost * v[1]];
}

function midPoint(u, v) {
  return [(u[0] - v[0]) / 2.0, (u[1] - v[1]) / 2.0];
}

function meanVec(u, v) {
  return [(u[0] + v[0]) / 2.0, (u[1] + v[1]) / 2.0];
}

function pointMul(u, v) {
  return [u[0] * v[0], u[1] * v[1]];
}

function scale(c, v) {
  return [c * v[0], c * v[1]];
}

function sum(u, v) {
  return [u[0] + v[0], u[1] + v[1]];
} // Convert an SVG elliptical arc to a series of canvas commands.
//
// x1, y1, x2, y2: start and stop coordinates of the ellipse.
// rx, ry: radii of the ellipse.
// phi: rotation of the ellipse.
// fA: large arc flag.
// fS: sweep flag.


function ellipseFromEllipticalArc(ctx, x1, y1, rx, ry, phi, fA, fS, x2, y2) {
  // Convert from endpoint to center parametrization, as detailed in:
  //   http://www.w3.org/TR/SVG/implnote.html#ArcImplementationNotes
  if (rx === 0 || ry === 0) {
    ctx.lineTo(x2, x1);
    return;
  }

  phi *= Math.PI / 180.0;
  rx = Math.abs(rx);
  ry = Math.abs(ry);
  const xPrime = rotClockwise(midPoint([x1, y1], [x2, y2]), phi); // F.6.5.1

  const xPrime2 = pointMul(xPrime, xPrime);
  let rx2 = Math.pow(rx, 2);
  let ry2 = Math.pow(ry, 2);
  const lambda = Math.sqrt(xPrime2[0] / rx2 + xPrime2[1] / ry2);

  if (lambda > 1) {
    rx *= lambda;
    ry *= lambda;
    rx2 = Math.pow(rx, 2);
    ry2 = Math.pow(ry, 2);
  }

  let factor = Math.sqrt(Math.abs(rx2 * ry2 - rx2 * xPrime2[1] - ry2 * xPrime2[0]) / (rx2 * xPrime2[1] + ry2 * xPrime2[0]));

  if (fA === fS) {
    factor *= -1.0;
  }

  const cPrime = scale(factor, [rx * xPrime[1] / ry, -ry * xPrime[0] / rx]); // F.6.5.2

  const c = sum(rotCounterClockwise(cPrime, phi), meanVec([x1, y1], [x2, y2])); // F.6.5.3

  const x1UnitVector = [(xPrime[0] - cPrime[0]) / rx, (xPrime[1] - cPrime[1]) / ry];
  const x2UnitVector = [(-1.0 * xPrime[0] - cPrime[0]) / rx, (-1.0 * xPrime[1] - cPrime[1]) / ry];
  const theta = angle([1, 0], x1UnitVector); // F.6.5.5

  const deltaTheta = angle(x1UnitVector, x2UnitVector); // F.6.5.6

  const start = theta;
  const end = theta + deltaTheta;
  ctx.save();
  ctx.translate(c[0], c[1]);
  ctx.rotate(phi);
  ctx.scale(rx, ry);
  ctx.arc(0, 0, 1, start, end, !fS);
  ctx.restore();
}

class PathCommands {
  constructor(ctx) {
    let lMx;
    let lMy;
    let lx = 0;
    let ly = 0;
    let reflected;
    let lastCommand = "";

    function makeReflected() {
      if ("CcSsQqTt".indexOf(lastCommand) < 0) {
        return {
          x: lx,
          y: ly
        };
      }

      return reflected;
    }

    this.M = (px, py) => {
      ctx.moveTo(px, py);
      lMx = px;
      lMy = py;
      lx = px;
      ly = py;
      lastCommand = "M";
      return this;
    };

    this.m = (px, py) => this.M(px + lx, py + ly);

    this.L = (px, py) => {
      ctx.lineTo(px, py);
      lx = px;
      ly = py;
      lastCommand = "L";
      return this;
    };

    this.l = (px, py) => this.L(px + lx, py + ly);

    this.H = px => this.L(px, ly);

    this.h = px => this.H(px + lx);

    this.V = py => this.L(lx, py);

    this.v = py => this.V(py + ly);

    this.Z = () => {
      ctx.closePath();
      lx = lMx;
      ly = lMy;
      lastCommand = "Z";
      return this;
    };

    this.z = () => this.Z(); //C x1 y1, x2 y2, x y (or c dx1 dy1, dx2 dy2, dx dy)


    this.C = (cp1x, cp1y, cp2x, cp2y, px, py) => {
      ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, px, py);
      lx = px;
      ly = py;
      reflected = {
        x: 2 * px - cp2x,
        y: 2 * py - cp2y
      };
      lastCommand = "C";
      return this;
    };

    this.c = (cp1x, cp1y, cp2x, cp2y, px, py) => this.C(cp1x + lx, cp1y + ly, cp2x + lx, cp2y + ly, px + lx, py + ly); //S x2 y2, x y (or s dx2 dy2, dx dy)


    this.S = (cpx, cpy, px, py) => {
      const {
        x: cp1x,
        y: cp1y
      } = makeReflected();
      return this.C(cp1x, cp1y, cpx, cpy, px, py);
    };

    this.s = (cpx, cpy, px, py) => this.S(cpx + lx, cpy + ly, px + lx, py + ly); //Q x1 y1, x y (or q dx1 dy1, dx dy)


    this.Q = (cpx, cpy, px, py) => {
      ctx.quadraticCurveTo(cpx, cpy, px, py);
      lx = px;
      ly = py;
      reflected = {
        x: 2 * px - cpx,
        y: 2 * py - cpy
      };
      lastCommand = "Q";
      return this;
    };

    this.q = (cpx, cpy, px, py) => this.Q(cpx + lx, cpy + ly, px + lx, py + ly); //T x y (or t dx dy)


    this.T = (px, py) => {
      const {
        x: cpx,
        y: cpy
      } = makeReflected();
      return this.Q(cpx, cpy, px, py);
    };

    this.t = (px, py) => this.T(px + lx, py + ly); //A rx ry x-axis-rotation large-arc-flag sweep-flag x y


    this.A = (rx, ry, xAxisRotation, largeArcFlag, sweepFlag, px, py) => {
      const x1 = lx;
      const y1 = ly;
      ellipseFromEllipticalArc(ctx, x1, y1, rx, ry, xAxisRotation, largeArcFlag, sweepFlag, px, py);
      lx = px;
      ly = py;
      lastCommand = "A";
      return this;
    }; //a rx ry x-axis-rotation large-arc-flag sweep-flag dx dy


    this.a = (rx, ry, xAxisRotation, largeArcFlag, sweepFlag, px, py) => this.A(rx, ry, xAxisRotation, largeArcFlag, sweepFlag, px + lx, py + ly);
  }

}

exports.PathCommands = PathCommands;

/***/ }),

/***/ "./internal/legacy/canvas/PathCommandsParser.js":
/*!******************************************************!*\
  !*** ./internal/legacy/canvas/PathCommandsParser.js ***!
  \******************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PathCommandsParser = void 0;

const PathCommands_1 = __webpack_require__(/*! ./PathCommands */ "./internal/legacy/canvas/PathCommands.js");

function pathTokens(d) {
  let idx = 0;
  return {
    next() {
      let s = "";

      while (d.length > idx) {
        const c = d[idx];
        idx++;

        if (" ,\n\r\t".indexOf(c) > -1) {
          if (s) {
            return s;
          }
        } else {
          const type = ".+-1234567890".indexOf(c) > -1 ? "num" : "str";

          if (type === "str") {
            if (s) {
              idx--;
              return s;
            }

            return c;
          }

          if ("-+".indexOf(c) > -1) {
            if (s) {
              idx--;
              return s;
            }
          }

          if (c === ".") {
            if (s.indexOf(".") > -1) {
              idx--;
              return s;
            }
          }

          s += c;
        }
      }

      return s || null;
    }

  };
}

function command(builder, cmd, argsProvider) {
  if (cmd.toUpperCase() === "M" || cmd.toUpperCase() === "L" || cmd.toUpperCase() === "T") {
    builder.command(cmd, argsProvider.next(), argsProvider.next());
    return cmd === "M" ? "L" : cmd === "m" ? "l" : cmd;
  } else if (cmd.toUpperCase() === "H" || cmd.toUpperCase() === "V") {
    builder.command(cmd, argsProvider.next());
    return cmd;
  } else if (cmd.toUpperCase() === "Z") {
    builder.command(cmd);
    return cmd;
  } else if (cmd.toUpperCase() === "C") {
    builder.command(cmd, argsProvider.next(), argsProvider.next(), argsProvider.next(), argsProvider.next(), argsProvider.next(), argsProvider.next());
    return cmd;
  } else if (cmd.toUpperCase() === "S" || cmd.toUpperCase() === "Q") {
    builder.command(cmd, argsProvider.next(), argsProvider.next(), argsProvider.next(), argsProvider.next());
    return cmd;
  } else if (cmd.toUpperCase() === "A") {
    builder.command(cmd, argsProvider.next(), argsProvider.next(), argsProvider.next(), argsProvider.next(), argsProvider.next(), argsProvider.next(), argsProvider.next());
    return cmd;
  } else {
    // https://developer.mozilla.org/ja/docs/Web/SVG/Tutorial/Paths
    console.warn(`unsupported:${cmd}`);
  }

  return null;
}

class PathCommandsParser {
  constructor() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this._ops = [];
    this._commands = new PathCommands_1.PathCommands(this);

    const buildPush = op => // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (...args) => {
      this._ops.push({
        op,
        args
      });
    };

    this.moveTo = buildPush("moveTo");
    this.lineTo = buildPush("lineTo");
    this.closePath = buildPush("closePath");
    this.bezierCurveTo = buildPush("bezierCurveTo");
    this.quadraticCurveTo = buildPush("quadraticCurveTo");
    this.save = buildPush("save");
    this.translate = buildPush("translate");
    this.rotate = buildPush("rotate");
    this.scale = buildPush("scale");
    this.arc = buildPush("arc");
    this.restore = buildPush("restore");
    this.arcTo = buildPush("arcTo");
    this.ellipse = buildPush("ellipse");
    this.rect = buildPush("rect");
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any


  command(name, ...args) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const numArgs = args || [];

    for (let i = 0; i < args.length; i++) {
      numArgs[i] -= 0;
    }

    const command = this._commands[name]; // eslint-disable-next-line @typescript-eslint/no-explicit-any

    command.apply(this, numArgs);
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any


  parse(d) {
    const ops = this._ops = [];
    const tokens = pathTokens(d);

    try {
      let cmd;
      let subsequentCommand = "Z";

      while (cmd = tokens.next()) {
        if (!isNaN(Number(cmd))) {
          let fst = true;
          const argsProvider = {
            next() {
              if (fst) {
                fst = false;
                return cmd;
              }

              return tokens.next();
            }

          };
          subsequentCommand = command(this, subsequentCommand, argsProvider) || "Z";
        } else {
          subsequentCommand = command(this, cmd, tokens) || "Z";
        }
      }
    } catch (e) {
      console.log(`Error: ${d}`);
      throw e;
    }

    return ops;
  }

}

exports.PathCommandsParser = PathCommandsParser;

/***/ }),

/***/ "./internal/legacy/fontwatch/FontRuler.js":
/*!************************************************!*\
  !*** ./internal/legacy/fontwatch/FontRuler.js ***!
  \************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //see https://github.com/typekit/webfontloader

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FontRuler = void 0;

function computeStyle(font) {
  return [{
    display: "block",
    position: "absolute",
    top: "-9999px",
    left: "-9999px",
    width: "auto",
    height: "auto",
    margin: "0",
    padding: "0",
    "white-space": "nowrap",
    font
  }, {
    "font-variant": "normal",
    "font-size": "300px",
    "font-style": "normal",
    "font-weight": "400",
    "line-height": "normal"
  }];
}

class FontRuler {
  constructor(font, testStr) {
    const e = document.createElement("span");
    e.setAttribute("aria-hidden", "true");
    e.textContent = testStr || "BESbswy";
    computeStyle(font).forEach(style => {
      for (const k in style) {
        const key = k; // eslint-disable-next-line @typescript-eslint/no-explicit-any

        e.style[key] = style[key];
      }
    });
    document.body.appendChild(e);
    this.el_ = e;
  }

  getWidth() {
    return this.el_.offsetWidth;
  }

  remove() {
    document.body.removeChild(this.el_);
  }

}

exports.FontRuler = FontRuler;

/***/ }),

/***/ "./internal/legacy/fontwatch/FontWatchRunner.js":
/*!******************************************************!*\
  !*** ./internal/legacy/fontwatch/FontWatchRunner.js ***!
  \******************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //see https://github.com/typekit/webfontloader
//http://defghi1977.html.xdomain.jp/tech/canvasMemo/canvasMemo.htm

const FontRuler_1 = __webpack_require__(/*! ./FontRuler */ "./internal/legacy/fontwatch/FontRuler.js");

const LastResortFonts = {
  SERIF: "serif",
  SANS_SERIF: "sans-serif"
};
const watchRunners = {};

class FontWatchRunner {
  static load(font, testStr, activeCallback, inactiveCallback) {
    const c = watchRunners[font] || (watchRunners[font] = {});
    testStr += "";
    let runner;

    if (c[testStr]) {
      runner = c[testStr];
    } else {
      runner = c[testStr] = new FontWatchRunner(font, testStr);
    }

    runner.then(activeCallback, inactiveCallback);
  }

  constructor(font, testStr) {
    this.activeCallbacks = [];
    this.inactiveCallbacks = [];
    this.status = null;
    this.lastResortWidths_ = {};
    this.fontRulerA_ = new FontRuler_1.FontRuler(`${font},${LastResortFonts.SERIF}`, testStr);
    this.fontRulerB_ = new FontRuler_1.FontRuler(`${font},${LastResortFonts.SANS_SERIF}`, testStr);
    const lastResortRulerA = new FontRuler_1.FontRuler(`4px ${LastResortFonts.SERIF}`, testStr);
    const lastResortRulerB = new FontRuler_1.FontRuler(`4px ${LastResortFonts.SANS_SERIF}`, testStr); //start

    this.lastResortWidths_[LastResortFonts.SERIF] = lastResortRulerA.getWidth();
    this.lastResortWidths_[LastResortFonts.SANS_SERIF] = lastResortRulerB.getWidth();
    lastResortRulerA.remove();
    lastResortRulerB.remove();
    this.started_ = Date.now();
    this.check_();
  }

  then(activeCallback, inactiveCallback) {
    if (this.status) {
      if (this.status !== "ng") {
        activeCallback();
      } else {
        inactiveCallback();
      }
    } else {
      this.activeCallbacks.push(activeCallback);
      this.inactiveCallbacks.push(inactiveCallback);
    }
  }

  check_() {
    const widthA = this.fontRulerA_.getWidth();
    const widthB = this.fontRulerB_.getWidth();

    if (this.isFallbackFont_(widthA, widthB) || this.isLastResortFont_(widthA, widthB)) {
      if (Date.now() - this.started_ >= 3000) {
        // timeout
        if (this.isLastResortFont_(widthA, widthB)) {
          this.finish_(this.activeCallbacks);
          this.status = "ok";
        } else {
          this.finish_(this.inactiveCallbacks);
          this.status = "ng";
        }
      } else {
        setTimeout(() => {
          this.check_();
        }, 50);
      }
    } else {
      this.finish_(this.activeCallbacks);
      this.status = "ok";
    }
  }

  isFallbackFont_(a, b) {
    return this.widthMatches_(a, LastResortFonts.SERIF) && this.widthMatches_(b, LastResortFonts.SANS_SERIF);
  }

  widthsMatchLastResortWidths_(a, b) {
    for (const font in LastResortFonts) {
      if (LastResortFonts.hasOwnProperty(font)) {
        if (this.widthMatches_(a, LastResortFonts[font]) && this.widthMatches_(b, LastResortFonts[font])) {
          return true;
        }
      }
    }

    return false;
  }

  widthMatches_(width, lastResortFont) {
    return width === this.lastResortWidths_[lastResortFont];
  }

  isLastResortFont_(a, b) {
    return hasWebKitFallbackBug() && this.widthsMatchLastResortWidths_(a, b);
  }

  finish_(callbacks) {
    setTimeout(() => {
      this.fontRulerA_.remove();
      this.fontRulerB_.remove();
      callbacks.forEach(cb => cb());
    }, 0);
  }

}

let HAS_WEBKIT_FALLBACK_BUG = null;

function hasWebKitFallbackBug() {
  if (HAS_WEBKIT_FALLBACK_BUG === null) {
    const match = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
    HAS_WEBKIT_FALLBACK_BUG = !!match && (parseInt(match[1], 10) < 536 || parseInt(match[1], 10) === 536 && parseInt(match[2], 10) <= 11);
  }

  return HAS_WEBKIT_FALLBACK_BUG;
}

module.exports = FontWatchRunner;

/***/ }),

/***/ "./internal/menu-items.js":
/*!********************************!*\
  !*** ./internal/menu-items.js ***!
  \********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizeToFn = exports.normalize = void 0;
/** @private */

function extend(a, b) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const o = {};

  for (const k in a) {
    o[k] = a[k];
  }

  for (const k in b) {
    o[k] = b[k];
  }

  return o;
}
/**
 * Normalize the given menu options.
 * @param {*} options menu options to given
 * @returns {Array} Normalized options
 * @private
 */


function normalize(options) {
  if (!options) {
    return [];
  }

  if (Array.isArray(options)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return options.map( // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e => extend(e, {
      label: e.caption || e.label
    }));
  }

  if (typeof options === "string") {
    return normalize(JSON.parse(options));
  }

  const result = [];

  for (const k in options) {
    result.push({
      value: k,
      label: options[k]
    });
  }

  return result;
}

exports.normalize = normalize;
/**
 * Normalize the given menu options.
 * @param {*} options menu options to given
 * @returns {Array} Normalized options
 * @private
 */

function normalizeToFn(options) {
  if (typeof options === "function") {
    return record => normalize(options(record));
  }

  return () => normalize(options);
}

exports.normalizeToFn = normalizeToFn;

/***/ }),

/***/ "./internal/paste-utils.js":
/*!*********************************!*\
  !*** ./internal/paste-utils.js ***!
  \*********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parsePasteRangeBoxValues = exports.normalizePasteValue = void 0;

function normalizePasteValue(text) {
  return text[text.length - 1] !== "\n" ? text : text[text.length - 2] === "\r" ? text.slice(0, -2) : text.slice(0, -1);
}

exports.normalizePasteValue = normalizePasteValue;

function parsePasteRangeBoxValues(value, option) {
  const normalizedValue = normalizePasteValue(value);
  const {
    values,
    colCount
  } = parseValues(normalizedValue, option);
  return {
    colCount,
    rowCount: values.length,

    getCellValue(offsetCol, offsetRow) {
      var _a, _b;

      return (_b = (_a = values[offsetRow]) === null || _a === void 0 ? void 0 : _a[offsetCol]) !== null && _b !== void 0 ? _b : "";
    }

  };
}

exports.parsePasteRangeBoxValues = parsePasteRangeBoxValues;

function parseValues(text, {
  trimOnPaste
}) {
  const len = text.length;
  const adjustCell = trimOnPaste ? cell => cell.trim() : cell => cell;
  let colCount = 1;
  let line = [];
  const values = [line];
  let cell = "";

  for (let index = 0; index < len; index++) {
    const char = text[index];

    if (char === "\t") {
      line.push(adjustCell(cell));
      cell = "";
      continue;
    }

    if (char === "\n") {
      // End of line
      cell = adjustCell(cell);

      if (cell[cell.length - 1] === "\r") {
        cell = cell.slice(0, -1);
      }

      line.push(cell);
      colCount = Math.max(colCount, line.length);
      line = [];
      values.push(line);
      cell = "";
      continue;
    }

    if (char === '"' && !cell.trim()) {
      const quoted = processQuotedCell(index + 1);

      if (quoted) {
        ({
          cell
        } = quoted);
        index = quoted.next - 1;
        continue;
      }
    }

    cell += char;
  } // End of text


  line.push(adjustCell(cell));
  colCount = Math.max(colCount, line.length);
  return {
    values,
    colCount
  };

  function processQuotedCell(start) {
    let cell = "";
    let index = start;

    while (index < len) {
      const char = text[index];

      if (char !== '"') {
        cell += char;
        index++;
        continue;
      }

      if (text[index + 1] === '"') {
        // Escape
        cell += '"';
        index += 2;
        continue;
      } // Maybe end quote


      let next = index + 1;

      while (next < len) {
        const c = text[next];

        if (c.trim()) {
          // Not quoted. e.g. "A"B
          return null;
        }

        if (c === "\t" || c === "\n") {
          break;
        } // Allow spaces


        next++;
      } // End quote


      return {
        cell,
        next
      };
    }

    return null;
  }
}

/***/ }),

/***/ "./internal/path2DManager.js":
/*!***********************************!*\
  !*** ./internal/path2DManager.js ***!
  \***********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fill = exports.getPath2D = void 0;

const utils_1 = __webpack_require__(/*! ./utils */ "./internal/utils.js");

function getPath2D() {
  if (typeof Path2D !== "undefined" && !utils_1.browser.Edge) {
    return Path2D;
  } // eslint-disable-next-line @typescript-eslint/no-var-requires


  return __webpack_require__(/*! ./legacy/canvas/Path2DShim */ "./internal/legacy/canvas/Path2DShim.js").Path2DShim;
}

exports.getPath2D = getPath2D;

function fill(pathModule, ctx, x, y, w, h) {
  ctx.save();

  try {
    const {
      width,
      height
    } = pathModule;
    const {
      ud: upsideDown,
      x: offsetX = 0,
      y: offsetY = 0
    } = pathModule;
    w = w || width;
    h = h || height;
    const xrate = w / width;
    const yrate = h / (upsideDown ? -height : height);
    x = x || 0;
    y = upsideDown ? (y || 0) + -height * yrate : y || 0;
    ctx.translate(x, y);
    ctx.scale(xrate, yrate);

    if (offsetX !== 0 || offsetY !== 0) {
      ctx.translate(offsetX, offsetY);
    }

    const Path2D = getPath2D();
    const path2d = pathModule.path2d = pathModule.path2d || new Path2D(pathModule.d);
    ctx.fill(path2d);
  } finally {
    ctx.restore();
  }
}

exports.fill = fill;

/***/ }),

/***/ "./internal/sort.js":
/*!**************************!*\
  !*** ./internal/sort.js ***!
  \**************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortPromise = exports.sort = exports.sortArray = void 0;

const utils_1 = __webpack_require__(/*! ./utils */ "./internal/utils.js");

function createArray(get, length) {
  const array = new Array(length);

  for (let i = 0; i < length; i++) {
    array[i] = get(i);
  }

  return array;
}

function createArrayPromise(get, getField, length // eslint-disable-next-line @typescript-eslint/no-explicit-any
) {
  return new Promise(resolve => {
    const plist = [];
    const array = new Array(length);

    for (let i = 0; i < length; i++) {
      const data = get(i);
      const record = {
        v: data,
        f: data
      };
      array[i] = record;

      if ((0, utils_1.isPromise)(data)) {
        plist.push(data.then(v => {
          record.v = v;
          record.f = v;
        }));
      }
    }

    Promise.all(plist).then(() => getField == null ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
    array : // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setArrayField(array, getField)).then(resolve);
  });
}

function setArrayField(array, getField) {
  return new Promise(resolve => {
    const {
      length
    } = array;
    const plist = [];

    for (let i = 0; i < length; i++) {
      const record = array[i];
      const f = getField(record.v);

      if ((0, utils_1.isPromise)(f)) {
        plist.push(f.then(v => {
          record.f = v;
        }));
      } else {
        record.f = f;
      }
    }

    Promise.all(plist).then(() => resolve(array));
  });
}

function sortArray(array, compare) {
  Array.prototype.sort.call(array, compare);
}

exports.sortArray = sortArray;

function sort(get, set, length, compare, getField) {
  const old = createArray(get, length);

  if (getField != null) {
    old.sort((r1, r2) => compare(getField(r1), getField(r2)));
  } else {
    old.sort(compare);
  }

  for (let i = 0; i < length; i++) {
    set(i, old[i]);
  }
}

exports.sort = sort;

function sortPromise(get, set, length, // eslint-disable-next-line @typescript-eslint/no-explicit-any
compare, // eslint-disable-next-line @typescript-eslint/no-explicit-any
getField) {
  if (typeof Promise !== "undefined") {
    return createArrayPromise(get, getField, length).then(array => {
      array.sort((r1, r2) => compare(r1.f, r2.f));

      for (let i = 0; i < length; i++) {
        set(i, array[i].v);
      }
    });
  } else {
    sort(get, set, length, compare, getField);
    const dummyPromise = {
      then(fn) {
        fn();
        return dummyPromise;
      },

      catch() {
        return dummyPromise;
      } // eslint-disable-next-line @typescript-eslint/no-explicit-any


    };
    return dummyPromise;
  }
}

exports.sortPromise = sortPromise;

/***/ }),

/***/ "./internal/style.js":
/*!***************************!*\
  !*** ./internal/style.js ***!
  \***************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScrollBarSize = exports.initDocument = void 0;

function getScrollBarWidth() {
  const wrapper = document.createElement("div");
  const inner = document.createElement("div");
  const {
    style: wrapperStyle
  } = wrapper;
  wrapperStyle.position = "fixed";
  wrapperStyle.height = "50px";
  wrapperStyle.width = "50px";
  wrapperStyle.overflow = "scroll";
  wrapperStyle.opacity = "0";
  wrapperStyle.pointerEvents = "none";
  const {
    style
  } = inner;
  style.height = "100%";
  style.width = "100%";
  inner.textContent = "x";
  wrapper.appendChild(inner);
  document.body.appendChild(wrapper);
  const wrapperWidth = wrapper.getBoundingClientRect().width;
  const innerWidth = inner.getBoundingClientRect().width;
  document.body.removeChild(wrapper);
  return Math.ceil(wrapperWidth - innerWidth);
}

let SCROLLBAR_SIZE;

function initDocumentInternal() {
  __webpack_require__(/*! @/internal/style.css */ "../src/js/internal/style.css");

  SCROLLBAR_SIZE = getScrollBarWidth() || 10;
  const style = document.createElement("style");
  style.setAttribute("type", "text/css");
  style.setAttribute("data-name", "cheetah-grid");
  style.innerHTML = `
.cheetah-grid .grid-scroll-end-point {
	width: ${SCROLLBAR_SIZE}px;
	height: ${SCROLLBAR_SIZE}px;
}
.cheetah-grid > canvas {
	width: -webkit-calc(100% - ${SCROLLBAR_SIZE}px);
	width: calc(100% - ${SCROLLBAR_SIZE}px);
	height: -webkit-calc(100% - ${SCROLLBAR_SIZE}px);
	height: calc(100% - ${SCROLLBAR_SIZE}px);
}
		`;
  document.head.appendChild(style);
}

let initDocumentVar = initDocumentInternal;

function initDocument() {
  initDocumentVar();
  initDocumentVar = Function.prototype;
}

exports.initDocument = initDocument;

function getScrollBarSize() {
  return SCROLLBAR_SIZE;
}

exports.getScrollBarSize = getScrollBarSize;

/***/ }),

/***/ "./internal/symbolManager.js":
/*!***********************************!*\
  !*** ./internal/symbolManager.js ***!
  \***********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCheckHeaderStateId = exports.getInlineMenuEditorStateId = exports.getInlineInputEditorStateId = exports.getSmallDialogInputEditorStateId = exports.getBranchGraphColumnStateId = exports.getColumnFadeinStateId = exports.getButtonColumnStateId = exports.getRadioColumnStateId = exports.getCheckColumnStateId = exports.getProtectedSymbol = exports.get = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */

const utils_1 = __webpack_require__(/*! ./utils */ "./internal/utils.js");

const Symbol = utils_1.isNode ? global.Symbol : window.Symbol ? window.Symbol : (() => {
  function random() {
    const c = "abcdefghijklmnopqrstuvwxyz0123456789";
    const cl = c.length;
    let r = "";

    for (let i = 0; i < 10; i++) {
      r += c[Math.floor(Math.random() * cl)];
    }

    return r;
  }

  return name => {
    if (name) {
      return `#${name}_${random()}`;
    } else {
      return `#_${random()}`;
    }
  };
})();
const mem = {};

function get(name) {
  if (name) {
    return mem[name] ? mem[name] : mem[name] = Symbol(name);
  } else {
    return Symbol();
  }
}

exports.get = get;

function getProtectedSymbol() {
  return get("protected");
}

exports.getProtectedSymbol = getProtectedSymbol;

function getCheckColumnStateId() {
  return get("chkcol.stateID");
}

exports.getCheckColumnStateId = getCheckColumnStateId;

function getRadioColumnStateId() {
  return get("rdcol.stateID");
}

exports.getRadioColumnStateId = getRadioColumnStateId;

function getButtonColumnStateId() {
  return get("btncol.stateID");
}

exports.getButtonColumnStateId = getButtonColumnStateId;

function getColumnFadeinStateId() {
  return get("col.fadein_stateID");
}

exports.getColumnFadeinStateId = getColumnFadeinStateId;

function getBranchGraphColumnStateId() {
  return get("branch_graph_col.stateID");
}

exports.getBranchGraphColumnStateId = getBranchGraphColumnStateId;

function getSmallDialogInputEditorStateId() {
  return get("small_dialog_input_editor.stateID");
}

exports.getSmallDialogInputEditorStateId = getSmallDialogInputEditorStateId;

function getInlineInputEditorStateId() {
  return get("inline_input_editor.stateID");
}

exports.getInlineInputEditorStateId = getInlineInputEditorStateId;

function getInlineMenuEditorStateId() {
  return get("inline_menu_editor.stateID");
}

exports.getInlineMenuEditorStateId = getInlineMenuEditorStateId;

function getCheckHeaderStateId() {
  return get("check_header.stateID");
}

exports.getCheckHeaderStateId = getCheckHeaderStateId;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./internal/utils.js":
/*!***************************!*\
  !*** ./internal/utils.js ***!
  \***************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emptyFn = exports.style = exports.event = exports.str = exports.obj = exports.browser = exports.cellInRange = exports.cellEquals = exports.array = exports.then = exports.getIgnoreCase = exports.getOrApply = exports.applyChainSafe = exports.getChainSafe = exports.isDescendantElement = exports.isNode = exports.isPromise = exports.extend = exports.defaults = exports.omit = exports.each = void 0;
const isNode = typeof window === "undefined" || typeof window.window === "undefined";
exports.isNode = isNode;
let arrayFind;
let arrayFindIndex;
const array = {
  get find() {
    if (arrayFind) {
      return arrayFind;
    }

    if (Array.prototype.find) {
      arrayFind = (arr, predicate) => Array.prototype.find.call(arr, predicate);
    } else {
      arrayFind = (arr, predicate) => {
        const index = array.findIndex(arr, predicate);
        return index >= 0 ? arr[index] : undefined;
      };
    }

    return arrayFind;
  },

  get findIndex() {
    if (arrayFindIndex) {
      return arrayFindIndex;
    }

    if (Array.prototype.findIndex) {
      arrayFindIndex = (arr, predicate) => Array.prototype.findIndex.call(arr, predicate);
    } else {
      arrayFindIndex = (arr, predicate) => {
        const {
          length
        } = arr;

        for (let i = 0; i < length; i++) {
          const value = arr[i];

          if (predicate(value, i, arr)) {
            return i;
          }
        }

        return -1;
      };
    }

    return arrayFindIndex;
  }

};
exports.array = array;

function analyzeUserAgent() {
  if (isNode) {
    return {
      IE: false,
      Edge: false,
      Chrome: false,
      Firefox: false,
      Safari: false
    };
  } else {
    const ua = window.navigator.userAgent.toLowerCase();
    return {
      IE: !!/(msie|trident)/.exec(ua),
      Edge: ua.indexOf("edge") > -1,
      Chrome: ua.indexOf("chrome") > -1 && ua.indexOf("edge") === -1,
      Firefox: ua.indexOf("firefox") > -1,
      Safari: ua.indexOf("safari") > -1 && ua.indexOf("edge") === -1
    };
  }
}

const {
  IE,
  Chrome,
  Firefox,
  Edge,
  Safari
} = analyzeUserAgent();

function setReadonly(obj, name, value) {
  Object.defineProperty(obj, name, {
    enumerable: false,
    configurable: true,
    value
  });
} // eslint-disable-next-line @typescript-eslint/no-explicit-any


function each(obj, fn) {
  for (const key in obj) {
    fn(obj[key], key, obj);
  }
}

exports.each = each; // eslint-disable-next-line @typescript-eslint/no-explicit-any

function isObject(obj) {
  return obj === Object(obj);
}

function omit(source, omits) {
  const result = {};

  for (const key in source) {
    if (omits.indexOf(key) >= 0) {
      continue;
    }

    Object.defineProperty(result, key, {
      get() {
        return source[key];
      },

      set(val) {
        source[key] = val;
      },

      configurable: true,
      enumerable: true
    });
  }

  return result;
}

exports.omit = omit;

function defaults(source, defs) {
  const keys = [];
  const result = {};

  for (const key in source) {
    keys.push(key);
    Object.defineProperty(result, key, {
      get() {
        const val = source[key];
        return val === undefined ? defs[key] : val;
      },

      set(val) {
        source[key] = val;
      },

      configurable: true,
      enumerable: true
    });
  }

  for (const key in defs) {
    if (keys.indexOf(key) >= 0) {
      continue;
    }

    Object.defineProperty(result, key, {
      get() {
        const val = source[key];
        return val === undefined ? defs[key] : val;
      },

      set(val) {
        source[key] = val;
      },

      configurable: true,
      enumerable: true
    });
  }

  return result;
}

exports.defaults = defaults;

function extend(...args) {
  const result = {};
  args.forEach(source => {
    for (const key in source) {
      Object.defineProperty(result, key, {
        get() {
          return source[key];
        },

        set(val) {
          source[key] = val;
        },

        configurable: true,
        enumerable: true
      });
    }
  });
  return result;
}

exports.extend = extend;

function isDescendantElement(root, target) {
  while (target.parentElement) {
    const p = target.parentElement;

    if (root === p) {
      return true;
    }

    target = p;
  }

  return false;
}

exports.isDescendantElement = isDescendantElement;
/* eslint-disable @typescript-eslint/no-explicit-any */

function applyChainSafe(obj, fn, ...names) {
  let value = obj;

  for (let i = 0; i < names.length && value != null; i++) {
    value = fn(value, names[i]);
  }

  return value;
}

exports.applyChainSafe = applyChainSafe;

function getChainSafe(obj, ...names) {
  return applyChainSafe(obj, (val, name) => val[name], ...names);
}

exports.getChainSafe = getChainSafe;

function getOrApply(value, ...args) {
  if (typeof value === "function") {
    return value(...args);
  } else {
    return value;
  }
}

exports.getOrApply = getOrApply;
/* eslint-enable @typescript-eslint/no-explicit-any */

function endsWith(str, searchString, position) {
  const subjectString = str.toString();

  if (typeof position !== "number" || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
    position = subjectString.length;
  }

  position -= searchString.length;
  const lastIndex = subjectString.lastIndexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}

function genChars(s) {
  // Surrogate Code Point
  // [\uD800-\uDBFF]
  // Variation Selectors
  // FVS [\u180B-\u180D]
  // VS1～VS16 [\uFE00-\uFE0F]
  // VS17～VS256 \uDB40[\uDD00-\uDDEF]
  const re = /([\uD800-\uDBFF][\uDC00-\uDFFF]|\r\n|[^\uD800-\uDFFF])([\u180B-\u180D]|[\uFE00-\uFE0F]|\uDB40[\uDD00-\uDDEF])?/g;
  return {
    next() {
      const res = re.exec(s);
      return res !== null ? res[0] : null;
    }

  };
}

function genWords(s) {
  const re = /[!-~]+|[^!-~\s]+|\s+/g;
  return {
    next() {
      const res = re.exec(s);
      return res !== null ? res[0] : null;
    }

  };
}

function isPromise(data) {
  return Boolean(data && typeof data.then === "function");
}

exports.isPromise = isPromise;

function then(result, callback) {
  return isPromise(result) ? result.then(r => callback(r)) : callback(result);
}

exports.then = then;

function getMouseButtons(e) {
  if (e.buttons != null) {
    return e.buttons;
  }
  /*for legacy*/


  if (e.which != null) {
    if (e.which === 3) {
      //right?
      return 4;
    }

    if (e.which === 2) {
      //middle?
      return 4;
    }

    return e.which; //left or no
  }

  if (e.button === 0 || e.button === 1) {
    return 1; //candidate left
  }

  if (e.button === 2) {
    return 2; // right
  }

  return 0; //no or middle?
}

function getKeyCode(e) {
  return e.keyCode || e.which;
}

function isTouchEvent(e) {
  return !!e.changedTouches;
} // eslint-disable-next-line @typescript-eslint/no-explicit-any


function getIgnoreCase(obj, name) {
  if (obj[name]) {
    return obj[name];
  }

  const l = name.toLowerCase();

  if (obj[l]) {
    return obj[l];
  }

  const u = name.toLowerCase();

  if (obj[u]) {
    return obj[u];
  }

  for (const k in obj) {
    if (k.toLowerCase() === l) {
      return obj[k];
    }
  }

  return undefined;
}

exports.getIgnoreCase = getIgnoreCase;

function cancel(e) {
  e.preventDefault();
  e.stopPropagation();
}

function toBoxArray(obj) {
  if (!Array.isArray(obj)) {
    return [obj
    /*top*/
    , obj
    /*right*/
    , obj
    /*bottom*/
    , obj
    /*left*/
    ];
  }

  if (obj.length === 3) {
    return [obj[0]
    /*top*/
    , obj[1]
    /*right*/
    , obj[2]
    /*bottom*/
    , obj[1]
    /*left*/
    ];
  }

  if (obj.length === 2) {
    return [obj[0]
    /*top*/
    , obj[1]
    /*right*/
    , obj[0]
    /*bottom*/
    , obj[1]
    /*left*/
    ];
  }

  if (obj.length === 1) {
    return [obj[0]
    /*top*/
    , obj[0]
    /*right*/
    , obj[0]
    /*bottom*/
    , obj[0]
    /*left*/
    ];
  }

  return obj;
}

function cellEquals(a, b) {
  return a.col === b.col && a.row === b.row;
}

exports.cellEquals = cellEquals;

function cellInRange(range, col, row) {
  return range.start.col <= col && col <= range.end.col && range.start.row <= row && row <= range.end.row;
}

exports.cellInRange = cellInRange;
exports.browser = {
  IE,
  Edge,
  Chrome,
  Firefox,
  Safari,
  // Chrome 16777216 (onl Chrome 33554431)
  // FireFox 17895588
  // IE 10737433
  heightLimit: Chrome ? 16777216 : Firefox ? 17895588 : 10737433 // default IE limit

};
exports.obj = {
  setReadonly,
  isObject
};
exports.str = {
  endsWith,
  genChars,
  genWords
};
exports.event = {
  getMouseButtons,
  getKeyCode,
  isTouchEvent,
  cancel
};
exports.style = {
  toBoxArray
};
exports.emptyFn = Function.prototype;

/***/ }),

/***/ "./list-grid/LG_EVENT_TYPE.js":
/*!************************************!*\
  !*** ./list-grid/LG_EVENT_TYPE.js ***!
  \************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LG_EVENT_TYPE = void 0;

const DG_EVENT_TYPE_1 = __webpack_require__(/*! ../core/DG_EVENT_TYPE */ "./core/DG_EVENT_TYPE.js");

const utils_1 = __webpack_require__(/*! ../internal/utils */ "./internal/utils.js");

exports.LG_EVENT_TYPE = (0, utils_1.extend)(DG_EVENT_TYPE_1.DG_EVENT_TYPE, {
  BEFORE_CHANGE_VALUE: "before_change_value",
  CHANGED_VALUE: "changed_value",
  CHANGED_HEADER_VALUE: "changed_header_value",
  REJECTED_PASTE_VALUES: "rejected_paste_values"
});

/***/ }),

/***/ "./list-grid/layout-map/index.js":
/*!***************************************!*\
  !*** ./list-grid/layout-map/index.js ***!
  \***************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiLayoutMap = exports.SimpleHeaderLayoutMap = void 0;

var simple_header_layout_1 = __webpack_require__(/*! ./internal/simple-header-layout */ "./list-grid/layout-map/internal/simple-header-layout.js");

Object.defineProperty(exports, "SimpleHeaderLayoutMap", {
  enumerable: true,
  get: function () {
    return simple_header_layout_1.SimpleHeaderLayoutMap;
  }
});

var multi_layout_1 = __webpack_require__(/*! ./internal/multi-layout */ "./list-grid/layout-map/internal/multi-layout.js");

Object.defineProperty(exports, "MultiLayoutMap", {
  enumerable: true,
  get: function () {
    return multi_layout_1.MultiLayoutMap;
  }
});

/***/ }),

/***/ "./list-grid/layout-map/internal/multi-layout.js":
/*!*******************************************************!*\
  !*** ./list-grid/layout-map/internal/multi-layout.js ***!
  \*******************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiLayoutMap = void 0;

const columns = __importStar(__webpack_require__(/*! ../../../columns */ "./columns.js"));

const headerAction = __importStar(__webpack_require__(/*! ../../../header/action */ "./header/action.js"));

const headerType = __importStar(__webpack_require__(/*! ../../../header/type */ "./header/type.js"));

const utils_1 = __webpack_require__(/*! ./utils */ "./list-grid/layout-map/internal/utils.js");

function normalizeLayout(layout) {
  if (Array.isArray(layout)) {
    return {
      header: layout,
      body: layout
    };
  }

  return layout;
}

let seqId = 0;

class LayoutObjectGrid {
  constructor(layout, transform) {
    this.objects = [];
    this.objectGrid = [];
    this.objectMap = {};
    this.columnCount = 0;
    this.columnWidths = [];
    layout.forEach((rowLayout, row) => {
      let col = 0;
      rowLayout.forEach(cell => {
        var _a, _b;

        const id = seqId++;
        const obj = transform(cell, id);
        this.objects.push(obj);
        this.objectMap[id] = obj;
        col = this._findStartCell(col, row);
        const rowSpan = Number((_a = cell.rowSpan) !== null && _a !== void 0 ? _a : 1);
        const colSpan = Number((_b = cell.colSpan) !== null && _b !== void 0 ? _b : 1);
        const endRow = row + rowSpan;
        const endCol = col + colSpan;

        for (let rowIndex = row; rowIndex < endRow; rowIndex++) {
          const objectGridRow = this._getObjectGridRow(rowIndex);

          for (let colIndex = col; colIndex < endCol; colIndex++) {
            objectGridRow[colIndex] = obj;
          }
        }

        if (colSpan === 1) {
          this._setWidthDataIfAbsent(col, cell);
        }

        this._useColumnIndex(endCol - 1);

        col = endCol;
      });
    });
  }

  get rowCount() {
    return this.objectGrid.length;
  }

  _findStartCell(col, row) {
    const objectGridRow = this._getObjectGridRow(row);

    for (let index = col; index < objectGridRow.length; index++) {
      if (!objectGridRow[index]) {
        return index;
      }
    }

    return objectGridRow.length;
  }

  _getObjectGridRow(row) {
    return this.objectGrid[row] || (this.objectGrid[row] = []);
  }

  _useColumnIndex(col) {
    if (this.columnCount > col) {
      return;
    }

    this.columnCount = col + 1;
  }

  _setWidthDataIfAbsent(col, cell) {
    if (!this.columnWidths[col]) {
      if (cell.width != null || cell.maxWidth != null || cell.minWidth != null) {
        this.columnWidths[col] = {
          width: cell.width,
          maxWidth: cell.maxWidth,
          minWidth: cell.minWidth
        };
      }
    }
  }

}

class MultiLayoutMap {
  constructor(layout) {
    this._columnWidths = [];
    this._emptyDataCache = new utils_1.EmptyDataCache();
    const hbLayouut = normalizeLayout(layout);
    const header = this._header = new LayoutObjectGrid(hbLayouut.header, (hd, id) => {
      return {
        id,
        caption: hd.caption,
        field: hd.headerField || hd.field,
        headerIcon: hd.headerIcon,
        style: hd.headerStyle,
        headerType: headerType.ofCell(hd),
        action: headerAction.ofCell(hd),
        define: hd
      };
    });
    const body = this._body = new LayoutObjectGrid(hbLayouut.body, (colDef, id) => {
      return {
        id,
        field: colDef.field,
        width: colDef.width,
        minWidth: colDef.minWidth,
        maxWidth: colDef.maxWidth,
        icon: colDef.icon,
        message: colDef.message,
        columnType: columns.type.of(colDef.columnType),
        action: columns.action.of(colDef.action),
        style: colDef.style,
        define: colDef
      };
    });
    const columnCount = this._columnCount = Math.max(header.columnCount, body.columnCount);

    for (let col = 0; col < columnCount; col++) {
      const widthDef = header.columnWidths[col] || body.columnWidths[col] || {};
      this._columnWidths[col] = widthDef;
    }
  }

  get columnWidths() {
    return this._columnWidths;
  }

  get headerRowCount() {
    return this._header.rowCount;
  }

  get bodyRowCount() {
    return this._body.rowCount;
  }

  get colCount() {
    return this._columnCount;
  }

  get headerObjects() {
    return this._header.objects;
  }

  get columnObjects() {
    return this._body.objects;
  }

  getCellId(col, row) {
    var _a, _b, _c, _d;

    if (this.headerRowCount <= row) {
      const bodyRow = row - this.headerRowCount;
      const bodyLayoutRow = bodyRow % this.bodyRowCount;
      return (_b = (_a = this._body.objectGrid[bodyLayoutRow]) === null || _a === void 0 ? void 0 : _a[col]) === null || _b === void 0 ? void 0 : _b.id;
    } //in header


    return (_d = (_c = this._header.objectGrid[row]) === null || _c === void 0 ? void 0 : _c[col]) === null || _d === void 0 ? void 0 : _d.id;
  }

  getHeader(col, row) {
    const id = this.getCellId(col, row);
    return this._header.objectMap[id] || this._emptyDataCache.getHeader(col, row);
  }

  getBody(col, row) {
    const id = this.getCellId(col, row);
    return this._body.objectMap[id] || this._emptyDataCache.getBody(col, row);
  }

  getBodyLayoutRangeById(id) {
    var _a;

    for (let row = 0; row < this.bodyRowCount; row++) {
      const objectGridRow = this._body.objectGrid[row];

      if (!objectGridRow) {
        continue;
      }

      for (let col = 0; col < this.colCount; col++) {
        if (id === ((_a = objectGridRow[col]) === null || _a === void 0 ? void 0 : _a.id)) {
          return this._getCellRange(this._body, col, row, 0);
        }
      }
    }

    throw new Error(`can not found body layout @id=${id}`);
  }

  getCellRange(col, row) {
    if (this.headerRowCount <= row) {
      const recordIndex = this.getRecordIndexByRow(row);
      const startRow = this.getRecordStartRowByRecordIndex(recordIndex);
      const bodyRow = row - this.headerRowCount;
      const bodyLayoutRow = bodyRow % this.bodyRowCount;
      return this._getCellRange(this._body, col, bodyLayoutRow, startRow);
    } //in header


    return this._getCellRange(this._header, col, row, 0);
  }

  getRecordIndexByRow(row) {
    if (row < this.headerRowCount) {
      return -1;
    } else {
      const bodyRow = row - this.headerRowCount;
      return Math.floor(bodyRow / this.bodyRowCount);
    }
  }

  getRecordStartRowByRecordIndex(index) {
    return this.headerRowCount + index * this.bodyRowCount;
  }

  _getCellRange( // eslint-disable-next-line @typescript-eslint/no-explicit-any
  layout, col, layoutRow, offsetRow) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;

    const result = {
      start: {
        col,
        row: layoutRow + offsetRow
      },
      end: {
        col,
        row: layoutRow + offsetRow
      }
    };
    const {
      objectGrid
    } = layout;
    const id = (_b = (_a = objectGrid[layoutRow]) === null || _a === void 0 ? void 0 : _a[col]) === null || _b === void 0 ? void 0 : _b.id;

    if (id == null) {
      return result;
    }

    for (let c = col - 1; c >= 0; c--) {
      if (id !== ((_d = (_c = objectGrid[layoutRow]) === null || _c === void 0 ? void 0 : _c[c]) === null || _d === void 0 ? void 0 : _d.id)) {
        break;
      }

      result.start.col = c;
    }

    for (let c = col + 1; c < layout.columnCount; c++) {
      if (id !== ((_f = (_e = objectGrid[layoutRow]) === null || _e === void 0 ? void 0 : _e[c]) === null || _f === void 0 ? void 0 : _f.id)) {
        break;
      }

      result.end.col = c;
    }

    for (let r = layoutRow - 1; r >= 0; r--) {
      if (id !== ((_h = (_g = objectGrid[r]) === null || _g === void 0 ? void 0 : _g[col]) === null || _h === void 0 ? void 0 : _h.id)) {
        break;
      }

      result.start.row = r + offsetRow;
    }

    for (let r = layoutRow + 1; r < layout.rowCount; r++) {
      if (id !== ((_k = (_j = objectGrid[r]) === null || _j === void 0 ? void 0 : _j[col]) === null || _k === void 0 ? void 0 : _k.id)) {
        break;
      }

      result.end.row = r + offsetRow;
    }

    return result;
  }

}

exports.MultiLayoutMap = MultiLayoutMap;

/***/ }),

/***/ "./list-grid/layout-map/internal/simple-header-layout.js":
/*!***************************************************************!*\
  !*** ./list-grid/layout-map/internal/simple-header-layout.js ***!
  \***************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleHeaderLayoutMap = void 0;

const columns = __importStar(__webpack_require__(/*! ../../../columns */ "./columns.js"));

const headerAction = __importStar(__webpack_require__(/*! ../../../header/action */ "./header/action.js"));

const headerType = __importStar(__webpack_require__(/*! ../../../header/type */ "./header/type.js"));

const utils_1 = __webpack_require__(/*! ./utils */ "./list-grid/layout-map/internal/utils.js");

let seqId = 0;

class SimpleHeaderLayoutMap {
  constructor(header) {
    this.bodyRowCount = 1;
    this._emptyDataCache = new utils_1.EmptyDataCache();
    this._columns = [];
    this._headerCellIds = [];
    this._headerObjects = this._addHeaders(0, header, []);
    this._headerObjectMap = this._headerObjects.reduce((o, e) => {
      o[e.id] = e;
      return o;
    }, {});
  }

  get columnWidths() {
    return this._columns;
  }

  get headerRowCount() {
    return this._headerCellIds.length;
  }

  get colCount() {
    return this._columns.length;
  }

  get headerObjects() {
    return this._headerObjects;
  }

  get columnObjects() {
    return this._columns;
  }

  getCellId(col, row) {
    if (this.headerRowCount <= row) {
      return this._columns[col].id;
    } //in header


    return this._headerCellIds[row][col];
  }

  getHeader(col, row) {
    const id = this.getCellId(col, row);
    return this._headerObjectMap[id] || this._emptyDataCache.getHeader(col, row);
  }

  getBody(col, _row) {
    return this._columns[col] || this._emptyDataCache.getBody(col, 0);
  }

  getBodyLayoutRangeById(id) {
    for (let col = 0; col < this.colCount; col++) {
      if (id === this._columns[col].id) {
        return {
          start: {
            col,
            row: 0
          },
          end: {
            col,
            row: 0
          }
        };
      }
    }

    throw new Error(`can not found body layout @id=${id}`);
  }

  getCellRange(col, row) {
    const result = {
      start: {
        col,
        row
      },
      end: {
        col,
        row
      }
    };

    if (this.headerRowCount <= row) {
      return result;
    } //in header


    const id = this.getCellId(col, row);

    for (let c = col - 1; c >= 0; c--) {
      if (id !== this.getCellId(c, row)) {
        break;
      }

      result.start.col = c;
    }

    for (let c = col + 1; c < this.colCount; c++) {
      if (id !== this.getCellId(c, row)) {
        break;
      }

      result.end.col = c;
    }

    for (let r = row - 1; r >= 0; r--) {
      if (id !== this.getCellId(col, r)) {
        break;
      }

      result.start.row = r;
    }

    for (let r = row + 1; r < this.headerRowCount; r++) {
      if (id !== this.getCellId(col, r)) {
        break;
      }

      result.end.row = r;
    }

    return result;
  }

  getRecordIndexByRow(row) {
    if (row < this.headerRowCount) {
      return -1;
    } else {
      return row - this.headerRowCount;
    }
  }

  getRecordStartRowByRecordIndex(index) {
    return this.headerRowCount + index;
  }

  _addHeaders(row, header, roots) {
    const results = [];

    const rowCells = this._headerCellIds[row] || this._newRow(row);

    header.forEach(hd => {
      const col = this._columns.length;
      const id = seqId++;
      const cell = {
        id,
        caption: hd.caption,
        field: hd.headerField || hd.field,
        headerIcon: hd.headerIcon,
        style: hd.headerStyle,
        headerType: headerType.ofCell(hd),
        action: headerAction.ofCell(hd),
        define: hd
      };
      results[id] = cell;
      rowCells[col] = id;

      for (let r = row - 1; r >= 0; r--) {
        this._headerCellIds[r][col] = roots[r];
      }

      if (hd.columns) {
        this._addHeaders(row + 1, hd.columns, [...roots, id]).forEach(c => results.push(c));
      } else {
        const colDef = hd;

        this._columns.push({
          id: seqId++,
          field: colDef.field,
          width: colDef.width,
          minWidth: colDef.minWidth,
          maxWidth: colDef.maxWidth,
          icon: colDef.icon,
          message: colDef.message,
          columnType: columns.type.of(colDef.columnType),
          action: columns.action.of(colDef.action),
          style: colDef.style,
          define: colDef
        });

        for (let r = row + 1; r < this._headerCellIds.length; r++) {
          this._headerCellIds[r][col] = id;
        }
      }
    });
    return results;
  }

  _newRow(row) {
    const newRow = this._headerCellIds[row] = [];

    if (!this._columns.length) {
      return newRow;
    }

    const prev = this._headerCellIds[row - 1];

    for (let col = 0; col < prev.length; col++) {
      newRow[col] = prev[col];
    }

    return newRow;
  }

}

exports.SimpleHeaderLayoutMap = SimpleHeaderLayoutMap;

/***/ }),

/***/ "./list-grid/layout-map/internal/utils.js":
/*!************************************************!*\
  !*** ./list-grid/layout-map/internal/utils.js ***!
  \************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmptyDataCache = exports.newEmptyColumnData = exports.newEmptyHeaderData = void 0;

const columns = __importStar(__webpack_require__(/*! ../../../columns */ "./columns.js"));

const headerType = __importStar(__webpack_require__(/*! ../../../header/type */ "./header/type.js"));

let seqId = -1; // eslint-disable-next-line @typescript-eslint/no-explicit-any

function newEmptyHeaderData() {
  return {
    id: seqId--,
    define: {},
    headerType: headerType.of(null) // default

  };
}

exports.newEmptyHeaderData = newEmptyHeaderData; // eslint-disable-next-line @typescript-eslint/no-explicit-any

function newEmptyColumnData() {
  return {
    id: seqId--,
    define: {},
    columnType: columns.type.of(null),
    style: null
  };
}

exports.newEmptyColumnData = newEmptyColumnData;

class EmptyDataCache {
  constructor() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.headers = []; // eslint-disable-next-line @typescript-eslint/no-explicit-any

    this.columns = [];
  }

  getHeader(col, row) {
    const rows = this.headers[row] || (this.headers[row] = []);
    return rows[col] || (rows[col] = newEmptyHeaderData());
  }

  getBody(col, row) {
    const rows = this.columns[row] || (this.columns[row] = []);
    return rows[col] || (rows[col] = newEmptyColumnData());
  }

}

exports.EmptyDataCache = EmptyDataCache;

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = exports.getIcons = exports.GridCanvasHelper = exports.data = exports.themes = exports.headers = exports.columns = exports.ListGrid = exports.tools = exports.core = exports._getInternal = void 0;

const columns = __importStar(__webpack_require__(/*! ./columns */ "./columns.js"));

exports.columns = columns;

const core = __importStar(__webpack_require__(/*! ./core */ "./core.js"));

exports.core = core;

const data = __importStar(__webpack_require__(/*! ./data */ "./data.js"));

exports.data = data;

const headers = __importStar(__webpack_require__(/*! ./headers */ "./headers.js"));

exports.headers = headers;

const icons = __importStar(__webpack_require__(/*! ./icons */ "./icons.js"));

const register = __importStar(__webpack_require__(/*! ./register */ "./register.js"));

exports.register = register;

const themes = __importStar(__webpack_require__(/*! ./themes */ "./themes.js"));

exports.themes = themes;

const tools = __importStar(__webpack_require__(/*! ./tools */ "./tools.js"));

exports.tools = tools;

const ListGrid_1 = __webpack_require__(/*! ./ListGrid */ "./ListGrid.js");

Object.defineProperty(exports, "ListGrid", {
  enumerable: true,
  get: function () {
    return ListGrid_1.ListGrid;
  }
});

const GridCanvasHelper_1 = __webpack_require__(/*! ./GridCanvasHelper */ "./GridCanvasHelper.js");

Object.defineProperty(exports, "GridCanvasHelper", {
  enumerable: true,
  get: function () {
    return GridCanvasHelper_1.GridCanvasHelper;
  }
});

var get_internal_1 = __webpack_require__(/*! ./get-internal */ "./get-internal.js");

Object.defineProperty(exports, "_getInternal", {
  enumerable: true,
  get: function () {
    return get_internal_1.getInternal;
  }
});
/** @private */

function getIcons() {
  return icons.get();
}

exports.getIcons = getIcons; // backward compatibility

exports.default = {
  core,
  tools,
  // impl Grids
  ListGrid: ListGrid_1.ListGrid,
  // objects
  columns,
  headers,
  themes,
  data,
  // helper
  GridCanvasHelper: GridCanvasHelper_1.GridCanvasHelper,
  //plugin registers
  register,

  get icons() {
    return getIcons();
  }

}; // eslint-disable-next-line @typescript-eslint/no-explicit-any

Object.defineProperty(themes, "default", {
  enumerable: false,
  configurable: true,

  get() {
    return themes.getDefault();
  },

  set(defaultTheme) {
    themes.setDefault(defaultTheme);
  }

}); // eslint-disable-next-line @typescript-eslint/no-explicit-any

Object.defineProperty(themes, "choices", {
  enumerable: false,
  configurable: true,

  get() {
    return themes.getChoices();
  }

});

/***/ }),

/***/ "./plugins/icons.js":
/*!**************************!*\
  !*** ./plugins/icons.js ***!
  \**************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.icons = void 0;
exports.icons = {};

/***/ }),

/***/ "./plugins/themes.js":
/*!***************************!*\
  !*** ./plugins/themes.js ***!
  \***************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.themes = void 0;
exports.themes = {};

/***/ }),

/***/ "./register.js":
/*!*********************!*\
  !*** ./register.js ***!
  \*********************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.icons = exports.icon = exports.theme = void 0;

const icons_1 = __webpack_require__(/*! ./plugins/icons */ "./plugins/icons.js");

const themes_1 = __webpack_require__(/*! ./plugins/themes */ "./plugins/themes.js");

function register(obj, name, value) {
  const old = obj[name];
  obj[name] = value;
  return old;
}

function registers(obj, values) {
  for (const k in values) {
    obj[k] = values[k];
  }
}

function theme(name, theme) {
  if (theme != null) {
    return register(themes_1.themes, name, theme);
  } else {
    return themes_1.themes[name];
  }
}

exports.theme = theme;

function icon(name, icon) {
  if (icon != null) {
    return register(icons_1.icons, name, icon);
  } else {
    return icons_1.icons[name];
  }
}

exports.icon = icon;

function icons(icons) {
  return registers(icons_1.icons, icons);
}

exports.icons = icons;

/***/ }),

/***/ "./themes.js":
/*!*******************!*\
  !*** ./themes.js ***!
  \*******************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChoices = exports.setDefault = exports.getDefault = exports.of = exports.theme = exports.MATERIAL_DESIGN = exports.BASIC = void 0;

const utils_1 = __webpack_require__(/*! ./internal/utils */ "./internal/utils.js");

const theme_1 = __webpack_require__(/*! ./themes/theme */ "./themes/theme.js");

const BASIC_1 = __importDefault(__webpack_require__(/*! ./themes/BASIC */ "./themes/BASIC.js"));

const MATERIAL_DESIGN_1 = __importDefault(__webpack_require__(/*! ./themes/MATERIAL_DESIGN */ "./themes/MATERIAL_DESIGN.js"));

const themes_1 = __webpack_require__(/*! ./plugins/themes */ "./plugins/themes.js");

exports.BASIC = new theme_1.Theme(BASIC_1.default);
exports.MATERIAL_DESIGN = new theme_1.Theme(MATERIAL_DESIGN_1.default);
const builtin = {
  BASIC: exports.BASIC,
  MATERIAL_DESIGN: exports.MATERIAL_DESIGN
};
let defTheme = exports.MATERIAL_DESIGN;
exports.theme = {
  Theme: theme_1.Theme
};

function of(value) {
  if (!value) {
    return null;
  }

  if (typeof value === "string") {
    const t = (0, utils_1.getIgnoreCase)(getChoices(), value);

    if (t) {
      return t;
    }

    return null;
  }

  if (value instanceof theme_1.Theme) {
    return value;
  }

  return new theme_1.Theme(value);
}

exports.of = of;

function getDefault() {
  return defTheme;
}

exports.getDefault = getDefault;

function setDefault(defaultTheme) {
  defTheme = of(defaultTheme) || defTheme;
}

exports.setDefault = setDefault;

function getChoices() {
  return (0, utils_1.extend)(builtin, themes_1.themes);
}

exports.getChoices = getChoices;

/***/ }),

/***/ "./themes/BASIC.js":
/*!*************************!*\
  !*** ./themes/BASIC.js ***!
  \*************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*eslint no-bitwise:0*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function DEFAULT_BG_COLOR(args) {
  const {
    row,
    grid
  } = args;

  if (row < grid.frozenRowCount) {
    return "#FFF";
  }

  const index = grid.getRecordIndexByRow(row);

  if (!(index & 1)) {
    return "#FFF";
  } else {
    return "#F6F6F6";
  }
}

const cacheLinearGradient = {};

function getLinearGradient(context, left, top, right, bottom, colorStops) {
  let stop;
  const stopsKey = [];

  for (stop in colorStops) {
    stopsKey.push(`${stop}@${colorStops[stop]}`);
  }

  const key = `${left}/${top}/${right}/${bottom}/${stopsKey.join(",")}`;
  const ret = cacheLinearGradient[key];

  if (ret) {
    return ret;
  }

  const grad = context.createLinearGradient(left, top, left, bottom);

  for (stop in colorStops) {
    grad.addColorStop(Number(stop), colorStops[stop]);
  }

  return cacheLinearGradient[key] = grad;
}

function FROZEN_ROWS_BG_COLOR(args) {
  const {
    col,
    grid,
    grid: {
      frozenRowCount
    },
    context
  } = args;
  const {
    left,
    top
  } = grid.getCellRelativeRect(col, 0);
  const {
    bottom
  } = grid.getCellRelativeRect(col, frozenRowCount - 1);
  return getLinearGradient(context, left, top, left, bottom, {
    0: "#FFF",
    1: "#D3D3D3"
  });
}
/**
 * basic theme
 * @name BASIC
 * @memberof cheetahGrid.themes.choices
 */


exports.default = {
  color: "#000",
  // frozenRowsColor: '#000',
  defaultBgColor: DEFAULT_BG_COLOR,
  frozenRowsBgColor: FROZEN_ROWS_BG_COLOR,
  selectionBgColor: "#CCE0FF",
  borderColor: "#000",
  // frozenRowsBorderColor: '#000',
  highlightBorderColor: "#5E9ED6",
  checkbox: {
    uncheckBgColor: "#FFF",
    checkBgColor: "rgb(76, 73, 72)",
    borderColor: "#000"
  },
  radioButton: {
    checkColor: "rgb(76, 73, 72)",
    checkBorderColor: "#000",
    uncheckBorderColor: "#000",
    uncheckBgColor: "#FFF",
    checkBgColor: "#FFF"
  },
  button: {
    color: "#FFF",
    bgColor: "#2196F3"
  },
  header: {
    sortArrowColor: "rgba(0, 0, 0, 0.38)"
  },
  indicators: {
    topLeftColor: "#000"
  },
  underlayBackgroundColor: "#F6F6F6"
};

/***/ }),

/***/ "./themes/MATERIAL_DESIGN.js":
/*!***********************************!*\
  !*** ./themes/MATERIAL_DESIGN.js ***!
  \***********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*eslint no-bitwise:0*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function FROZEN_ROWS_BORDER_COLOR(args) {
  const {
    row,
    grid: {
      frozenRowCount
    }
  } = args;

  if (frozenRowCount - 1 === row) {
    return ["#f2f2f2", "#f2f2f2", "#ccc7c7", "#f2f2f2"];
  } else {
    return ["#f2f2f2"];
  }
}

function BORDER_COLOR(args) {
  const {
    col,
    row,
    grid
  } = args;
  const {
    colCount,
    frozenColCount,
    recordRowCount
  } = grid;
  let top = "#ccc7c7";
  let bottom = "#ccc7c7";

  if (recordRowCount > 1) {
    const startRow = grid.getRecordStartRowByRecordIndex(grid.getRecordIndexByRow(row));
    const endRow = startRow + recordRowCount - 1;

    if (startRow !== row) {
      top = null;
    }

    if (endRow !== row) {
      bottom = null;
    }
  }

  if (frozenColCount - 1 === col) {
    return [top, "#f2f2f2", bottom, null];
  }

  if (colCount - 1 === col) {
    return [top, "#f2f2f2", bottom, null];
  }

  return [top, null, bottom, null];
}
/**
 * material design theme
 * @name MATERIAL_DESIGN
 * @memberof cheetahGrid.themes.choices
 */


exports.default = {
  color: "rgba(0, 0, 0, 0.87)",
  frozenRowsColor: "rgba(0, 0, 0, 0.54)",
  defaultBgColor: "#FFF",
  // frozenRowsBgColor: '#FFF',
  selectionBgColor: "#CCE0FF",
  borderColor: BORDER_COLOR,
  frozenRowsBorderColor: FROZEN_ROWS_BORDER_COLOR,
  highlightBorderColor: "#5E9ED6",
  checkbox: {
    // uncheckBgColor: '#FFF',
    checkBgColor: "rgb(76, 73, 72)",
    borderColor: "rgba(0, 0, 0, 0.26)"
  },
  radioButton: {
    checkColor: "rgb(76, 73, 72)",
    checkBorderColor: "rgb(76, 73, 72)",
    uncheckBorderColor: "rgb(189, 189, 189)" // uncheckBgColor: "#FFF",
    // checkBgColor: "#FFF",

  },
  button: {
    color: "#FFF",
    bgColor: "#2196F3"
  },
  header: {
    sortArrowColor: "rgba(0, 0, 0, 0.38)"
  },
  indicators: {
    topLeftColor: "#ccc7c7"
  },
  underlayBackgroundColor: "#FFF"
};

/***/ }),

/***/ "./themes/theme.js":
/*!*************************!*\
  !*** ./themes/theme.js ***!
  \*************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Theme = void 0;

const utils_1 = __webpack_require__(/*! ../internal/utils */ "./internal/utils.js");

const symbolManager_1 = __webpack_require__(/*! ../internal/symbolManager */ "./internal/symbolManager.js"); //private symbol


const _ = (0, symbolManager_1.get)();

function getProp(obj, superObj, names, defNames, convertForSuper, defaultValue) {
  const value = (0, utils_1.getChainSafe)(obj, ...names) || (0, utils_1.getChainSafe)(superObj, ...names);

  if (value) {
    return value;
  }

  if (!defNames) {
    return value || defaultValue;
  }

  const getChainSafeWithConvert = convertForSuper ? (obj, ...names) => {
    const value = (0, utils_1.getChainSafe)(obj, ...names);

    if (!value) {
      return value;
    }

    return convertForSuper(value);
  } : utils_1.getChainSafe;
  return getChainSafeWithConvert(obj, ...defNames) || getChainSafeWithConvert(superObj, ...defNames) || defaultValue;
}

class Theme {
  constructor(obj, superTheme) {
    this._checkbox = null;
    this._radioButton = null;
    this._button = null;
    this._header = null;
    this._messages = null;
    this._indicators = null;
    this[_] = {
      obj,
      superTheme: superTheme
    };
  }

  get font() {
    const {
      obj,
      superTheme
    } = this[_];
    return getProp(obj, superTheme, ["font"]);
  }

  get underlayBackgroundColor() {
    const {
      obj,
      superTheme
    } = this[_];
    return getProp(obj, superTheme, ["underlayBackgroundColor"]);
  } // color


  get color() {
    const {
      obj,
      superTheme
    } = this[_];
    return getProp(obj, superTheme, ["color"]);
  }

  get frozenRowsColor() {
    const {
      obj,
      superTheme
    } = this[_];
    return getProp(obj, superTheme, ["frozenRowsColor"], ["color"]);
  } // background


  get defaultBgColor() {
    const {
      obj,
      superTheme
    } = this[_];
    return getProp(obj, superTheme, ["defaultBgColor"]);
  }

  get frozenRowsBgColor() {
    const {
      obj,
      superTheme
    } = this[_];
    return getProp(obj, superTheme, ["frozenRowsBgColor"], ["defaultBgColor"]);
  }

  get selectionBgColor() {
    const {
      obj,
      superTheme
    } = this[_];
    return getProp(obj, superTheme, ["selectionBgColor"], ["defaultBgColor"]);
  }

  get highlightBgColor() {
    if (this.hasProperty(["highlightBgColor"])) {
      const {
        obj,
        superTheme
      } = this[_];
      return getProp(obj, superTheme, ["highlightBgColor"]);
    } // eslint-disable-next-line @typescript-eslint/no-explicit-any


    return args => {
      const color = args.row < args.grid.frozenRowCount ? this.frozenRowsBgColor : this.defaultBgColor;

      if (typeof color === "function") {
        return color(args);
      }

      return color;
    };
  } // border


  get borderColor() {
    const {
      obj,
      superTheme
    } = this[_];
    return getProp(obj, superTheme, ["borderColor"]);
  }

  get frozenRowsBorderColor() {
    const {
      obj,
      superTheme
    } = this[_];
    return getProp(obj, superTheme, ["frozenRowsBorderColor"], ["borderColor"]);
  }

  get highlightBorderColor() {
    const {
      obj,
      superTheme
    } = this[_];
    return getProp(obj, superTheme, ["highlightBorderColor"], ["borderColor"]);
  }

  get checkbox() {
    const {
      obj,
      superTheme
    } = this[_];
    return this._checkbox || (this._checkbox = {
      get uncheckBgColor() {
        return getCheckboxProp("uncheckBgColor", ["defaultBgColor"]);
      },

      get checkBgColor() {
        return getCheckboxProp("checkBgColor", ["borderColor"], colorsToColor, "#000");
      },

      get borderColor() {
        return getCheckboxProp("borderColor", ["borderColor"], colorsToColor, "#000");
      }

    });

    function getCheckboxProp(prop, defNames, convertForSuper, defaultValue) {
      return getProp(obj, superTheme, ["checkbox", prop], defNames, convertForSuper, defaultValue);
    }
  }

  get radioButton() {
    const {
      obj,
      superTheme
    } = this[_];
    return this._radioButton || (this._radioButton = {
      get checkColor() {
        return getRadioButtonProp("checkColor", ["color"]);
      },

      get uncheckBorderColor() {
        return getRadioButtonProp("uncheckBorderColor", ["borderColor"], colorsToColor, "#000");
      },

      get checkBorderColor() {
        return getRadioButtonProp("checkBorderColor", ["borderColor"], colorsToColor, "#000");
      },

      get uncheckBgColor() {
        return getRadioButtonProp("uncheckBgColor", ["defaultBgColor"]);
      },

      get checkBgColor() {
        return getRadioButtonProp("checkBgColor", ["defaultBgColor"]);
      }

    });

    function getRadioButtonProp(prop, defNames, convertForSuper, defaultValue) {
      return getProp(obj, superTheme, ["radioButton", prop], defNames, convertForSuper, defaultValue);
    }
  }

  get button() {
    const {
      obj,
      superTheme
    } = this[_];
    return this._button || (this._button = {
      get color() {
        return getButtonProp("color", ["color"]);
      },

      get bgColor() {
        return getButtonProp("bgColor", ["defaultBgColor"]);
      }

    });

    function getButtonProp(prop, defNames) {
      return getProp(obj, superTheme, ["button", prop], defNames);
    }
  }

  get header() {
    const {
      obj,
      superTheme
    } = this[_];
    return this._header || (this._header = {
      get sortArrowColor() {
        return getProp(obj, superTheme, ["header", "sortArrowColor"], ["color"]);
      }

    });
  }

  get messages() {
    const {
      obj,
      superTheme
    } = this[_];
    return this._messages || (this._messages = {
      get infoBgColor() {
        return getMessageProp("infoBgColor");
      },

      get errorBgColor() {
        return getMessageProp("errorBgColor");
      },

      get warnBgColor() {
        return getMessageProp("warnBgColor");
      },

      get boxWidth() {
        return getMessageProp("boxWidth");
      },

      get markHeight() {
        return getMessageProp("markHeight");
      }

    });

    function getMessageProp(prop) {
      return getProp(obj, superTheme, ["messages", prop]);
    }
  }

  get indicators() {
    const {
      obj,
      superTheme
    } = this[_];
    return this._indicators || (this._indicators = {
      get topLeftColor() {
        return getIndicatorsProp("topLeftColor", ["borderColor"], colorsToColor, "#000");
      },

      get topLeftSize() {
        return getIndicatorsProp("topLeftSize");
      },

      get topRightColor() {
        return getIndicatorsProp("topRightColor", ["borderColor"], colorsToColor, "#000");
      },

      get topRightSize() {
        return getIndicatorsProp("topRightSize");
      },

      get bottomRightColor() {
        return getIndicatorsProp("bottomRightColor", ["borderColor"], colorsToColor, "#000");
      },

      get bottomRightSize() {
        return getIndicatorsProp("bottomRightSize");
      },

      get bottomLeftColor() {
        return getIndicatorsProp("bottomLeftColor", ["borderColor"], colorsToColor, "#000");
      },

      get bottomLeftSize() {
        return getIndicatorsProp("bottomLeftSize");
      }

    });

    function getIndicatorsProp(prop, defNames, convertForSuper, defaultValue) {
      return getProp(obj, superTheme, ["indicators", prop], defNames, convertForSuper, defaultValue);
    }
  }

  hasProperty(names) {
    const {
      obj,
      superTheme
    } = this[_];
    return hasThemeProperty(obj, names) || hasThemeProperty(superTheme, names);
  }

  extends(obj) {
    return new Theme(obj, this);
  }

}

exports.Theme = Theme;

function hasThemeProperty(obj, names) {
  if (obj instanceof Theme) {
    return obj.hasProperty(names);
  } else {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let o = obj;

    if (!o) {
      return false;
    }

    for (let index = 0; index < names.length; index++) {
      const name = names[index];
      o = o[name];

      if (!o) {
        return false;
      }
    }

    return !!o;
  }
}

function colorsToColor(colors) {
  if (typeof colors === "function") {
    return arg => {
      const val = colors(arg);
      return val ? colorsArrayToColor(val) : val;
    };
  }

  return colorsArrayToColor(colors);

  function colorsArrayToColor( // eslint-disable-next-line @typescript-eslint/ban-types
  colors) {
    if (!Array.isArray(colors)) {
      return colors;
    }

    return colors.find(Boolean) || undefined;
  }
}

/***/ }),

/***/ "./tools.js":
/*!******************!*\
  !*** ./tools.js ***!
  \******************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);

  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function () {
        return m[k];
      }
    };
  }

  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);

  __setModuleDefault(result, mod);

  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canvashelper = void 0;

const canvashelper = __importStar(__webpack_require__(/*! ./tools/canvashelper */ "./tools/canvashelper.js"));

exports.canvashelper = canvashelper;

/***/ }),

/***/ "./tools/canvashelper.js":
/*!*******************************!*\
  !*** ./tools/canvashelper.js ***!
  \*******************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawButton = exports.drawRadioButton = exports.drawCheckbox = exports.measureRadioButton = exports.measureCheckbox = exports.drawInlineImageRect = exports.fillTextRect = exports.strokeCircle = exports.fillCircle = exports.strokeRoundRect = exports.fillRoundRect = exports.roundRect = exports.strokeColorsRect = void 0;

const canvases_1 = __webpack_require__(/*! ../internal/canvases */ "./internal/canvases.js");

const {
  ceil,
  PI
} = Math;

function strokeColorsRect(ctx, borderColors, left, top, width, height) {
  function strokeRectLines(positions) {
    for (let i = 0; i < borderColors.length; i++) {
      const color = borderColors[i];
      const preColor = borderColors[i - 1];

      if (color) {
        if (preColor !== color) {
          if (preColor) {
            ctx.strokeStyle = preColor;
            ctx.stroke();
          }

          const pos1 = positions[i];
          ctx.beginPath();
          ctx.moveTo(pos1.x, pos1.y);
        }

        const pos2 = positions[i + 1];
        ctx.lineTo(pos2.x, pos2.y);
      } else {
        if (preColor) {
          ctx.strokeStyle = preColor;
          ctx.stroke();
        }
      }
    }

    const preColor = borderColors[borderColors.length - 1];

    if (preColor) {
      ctx.strokeStyle = preColor;
      ctx.stroke();
    }
  }

  if (borderColors[0] === borderColors[1] && borderColors[0] === borderColors[2] && borderColors[0] === borderColors[3]) {
    if (borderColors[0]) {
      ctx.strokeStyle = borderColors[0];
      ctx.strokeRect(left, top, width, height);
    }
  } else {
    strokeRectLines([{
      x: left,
      y: top
    }, {
      x: left + width,
      y: top
    }, {
      x: left + width,
      y: top + height
    }, {
      x: left,
      y: top + height
    }, {
      x: left,
      y: top
    }]);
  }
}

exports.strokeColorsRect = strokeColorsRect;

function roundRect(ctx, left, top, width, height, radius) {
  ctx.beginPath();
  ctx.arc(left + radius, top + radius, radius, -PI, -0.5 * PI, false);
  ctx.arc(left + width - radius, top + radius, radius, -0.5 * PI, 0, false);
  ctx.arc(left + width - radius, top + height - radius, radius, 0, 0.5 * PI, false);
  ctx.arc(left + radius, top + height - radius, radius, 0.5 * PI, PI, false);
  ctx.closePath();
}

exports.roundRect = roundRect;

function fillRoundRect(ctx, left, top, width, height, radius) {
  roundRect(ctx, left, top, width, height, radius);
  ctx.fill();
}

exports.fillRoundRect = fillRoundRect;

function strokeRoundRect(ctx, left, top, width, height, radius) {
  roundRect(ctx, left, top, width, height, radius);
  ctx.stroke();
}

exports.strokeRoundRect = strokeRoundRect;

function fillCircle(ctx, left, top, width, height) {
  const min = Math.min(width, height) / 2;
  ctx.beginPath();
  ctx.arc(left + min, top + min, min, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();
}

exports.fillCircle = fillCircle;

function strokeCircle(ctx, left, top, width, height) {
  const min = Math.min(width, height) / 2;
  ctx.beginPath();
  ctx.arc(left + min, top + min, min, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.stroke();
}

exports.strokeCircle = strokeCircle;

function fillTextRect(ctx, text, left, top, width, height, {
  offset = 2,
  padding
} = {}) {
  const rect = {
    left,
    top,
    width,
    height,
    right: left + width,
    bottom: top + height
  };
  ctx.save();

  try {
    ctx.beginPath();
    ctx.rect(rect.left, rect.top, rect.width, rect.height); //clip

    ctx.clip(); //文字描画

    const pos = (0, canvases_1.calcBasePosition)(ctx, rect, {
      offset,
      padding
    });
    ctx.fillText(text, pos.x, pos.y);
  } finally {
    ctx.restore();
  }
}

exports.fillTextRect = fillTextRect;

function drawInlineImageRect(ctx, image, srcLeft, srcTop, srcWidth, srcHeight, destWidth, destHeight, left, top, width, height, {
  offset = 2,
  padding
} = {}) {
  const rect = {
    left,
    top,
    width,
    height,
    right: left + width,
    bottom: top + height
  };
  ctx.save();

  try {
    ctx.beginPath();
    ctx.rect(rect.left, rect.top, rect.width, rect.height); //clip

    ctx.clip(); //文字描画

    const pos = (0, canvases_1.calcStartPosition)(ctx, rect, destWidth, destHeight, {
      offset,
      padding
    });
    ctx.drawImage(image, srcLeft, srcTop, srcWidth, srcHeight, pos.x, pos.y, destWidth, destHeight);
  } finally {
    ctx.restore();
  }
}

exports.drawInlineImageRect = drawInlineImageRect;
/**
 * Returns an object containing the width of the checkbox.
 * @param  {CanvasRenderingContext2D} ctx canvas context
 * @return {Object} Object containing the width of the checkbox
 * @memberof cheetahGrid.tools.canvashelper
 */

function measureCheckbox(ctx) {
  return {
    width: (0, canvases_1.getFontSize)(ctx, null).width
  };
}

exports.measureCheckbox = measureCheckbox;
/**
 * Returns an object containing the width of the radio button.
 * @param  {CanvasRenderingContext2D} ctx canvas context
 * @return {Object} Object containing the width of the radio button
 * @memberof cheetahGrid.tools.canvashelper
 */

function measureRadioButton(ctx) {
  return {
    width: (0, canvases_1.getFontSize)(ctx, null).width
  };
}

exports.measureRadioButton = measureRadioButton;
/**
 * draw Checkbox
 * @param  {CanvasRenderingContext2D} ctx canvas context
 * @param  {number} x The x coordinate where to start drawing the checkbox (relative to the canvas)
 * @param  {number} y The y coordinate where to start drawing the checkbox (relative to the canvas)
 * @param  {boolean|number} check checkbox check status
 * @param  {object} option option
 * @return {void}
 * @memberof cheetahGrid.tools.canvashelper
 */

function drawCheckbox(ctx, x, y, check, {
  uncheckBgColor = "#FFF",
  checkBgColor = "rgb(76, 73, 72)",
  borderColor = "#000",
  boxSize = measureCheckbox(ctx).width
} = {}) {
  const checkPoint = typeof check === "number" ? check > 1 ? 1 : check : 1;
  ctx.save();

  try {
    ctx.fillStyle = check ? checkBgColor : uncheckBgColor;
    const leftX = ceil(x);
    const topY = ceil(y);
    const size = ceil(boxSize);
    fillRoundRect(ctx, leftX - 1, topY - 1, size + 1, size + 1, boxSize / 5);
    ctx.lineWidth = 1;
    ctx.strokeStyle = borderColor;
    strokeRoundRect(ctx, leftX - 0.5, topY - 0.5, size, size, boxSize / 5);

    if (check) {
      ctx.lineWidth = ceil(boxSize / 10);
      ctx.strokeStyle = uncheckBgColor;
      let leftWidth = boxSize / 4;
      let rightWidth = boxSize / 2 * 0.9;
      const leftLeftPos = x + boxSize * 0.2;
      const leftTopPos = y + boxSize / 2;

      if (checkPoint < 0.5) {
        leftWidth *= checkPoint * 2;
      }

      ctx.beginPath();
      ctx.moveTo(leftLeftPos, leftTopPos);
      ctx.lineTo(leftLeftPos + leftWidth, leftTopPos + leftWidth);

      if (checkPoint > 0.5) {
        if (checkPoint < 1) {
          rightWidth *= (checkPoint - 0.5) * 2;
        }

        ctx.lineTo(leftLeftPos + leftWidth + rightWidth, leftTopPos + leftWidth - rightWidth);
      }

      ctx.stroke();
    }
  } finally {
    ctx.restore();
  }
}

exports.drawCheckbox = drawCheckbox;
/**
 * draw Radio button
 * @param  {CanvasRenderingContext2D} ctx canvas context
 * @param  {number} x The x coordinate where to start drawing the radio button (relative to the canvas)
 * @param  {number} y The y coordinate where to start drawing the radio button (relative to the canvas)
 * @param  {boolean|number} check radio button check status
 * @param  {object} option option
 * @return {void}
 * @memberof cheetahGrid.tools.canvashelper
 */

function drawRadioButton(ctx, x, y, check, {
  checkColor = "rgb(76, 73, 72)",
  borderColor = "#000",
  bgColor = "#FFF",
  boxSize = measureRadioButton(ctx).width
} = {}) {
  const ratio = typeof check === "number" ? check > 1 ? 1 : check : 1;
  ctx.save();

  try {
    ctx.fillStyle = bgColor;
    const leftX = ceil(x);
    const topY = ceil(y);
    const size = ceil(boxSize);
    fillCircle(ctx, leftX - 1, topY - 1, size + 1, size + 1);
    ctx.lineWidth = 1;
    ctx.strokeStyle = borderColor;
    strokeCircle(ctx, leftX - 0.5, topY - 0.5, size, size);

    if (check) {
      const checkSize = size * ratio / 2;
      const padding = (size - checkSize) / 2;
      ctx.fillStyle = checkColor;
      fillCircle(ctx, ceil((leftX - 0.5 + padding) * 100) / 100, ceil((topY - 0.5 + padding) * 100) / 100, ceil(checkSize * 100) / 100, ceil(checkSize * 100) / 100);
    }
  } finally {
    ctx.restore();
  }
}

exports.drawRadioButton = drawRadioButton;
/**
 * draw Button
 */

function drawButton(ctx, left, top, width, height, option = {}) {
  const {
    backgroundColor = "#FFF",
    bgColor = backgroundColor,
    radius = 4,
    shadow = {}
  } = option;
  ctx.save();

  try {
    ctx.fillStyle = bgColor;

    if (shadow) {
      const {
        color = "rgba(0, 0, 0, 0.24)",
        blur = 1,
        offsetX = 0,
        offsetY = 2,
        offset: {
          x: ox = offsetX,
          y: oy = offsetY
        } = {}
      } = shadow;
      ctx.shadowColor = color;
      ctx.shadowBlur = blur; //ぼかし

      ctx.shadowOffsetX = ox;
      ctx.shadowOffsetY = oy;
    }

    fillRoundRect(ctx, ceil(left), ceil(top), ceil(width), ceil(height), radius);
  } finally {
    ctx.restore();
  }
}

exports.drawButton = drawButton;

/***/ }),

/***/ "./tooltip/BaseTooltip.js":
/*!********************************!*\
  !*** ./tooltip/BaseTooltip.js ***!
  \********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseTooltip = void 0;

class BaseTooltip {
  constructor(grid) {
    this._grid = grid;
  }

  dispose() {
    this.detachTooltipElement();

    if (this._tooltipElement) {
      this._tooltipElement.dispose();
    }

    this._tooltipElement = undefined;
  }

  _getTooltipElement() {
    if (this._tooltipElement) {
      return this._tooltipElement;
    }

    return this._tooltipElement = this.createTooltipElementInternal();
  }

  attachTooltipElement(col, row, content) {
    const tooltipElement = this._getTooltipElement();

    tooltipElement.attach(this._grid, col, row, content);
  }

  moveTooltipElement(col, row) {
    const tooltipElement = this._getTooltipElement();

    tooltipElement.move(this._grid, col, row);
  }

  detachTooltipElement() {
    const tooltipElement = this._getTooltipElement();

    tooltipElement._detach();
  }

}

exports.BaseTooltip = BaseTooltip;

/***/ }),

/***/ "./tooltip/Tooltip.js":
/*!****************************!*\
  !*** ./tooltip/Tooltip.js ***!
  \****************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = void 0;

const BaseTooltip_1 = __webpack_require__(/*! ./BaseTooltip */ "./tooltip/BaseTooltip.js");

const TooltipElement_1 = __webpack_require__(/*! ./internal/TooltipElement */ "./tooltip/internal/TooltipElement.js");

class Tooltip extends BaseTooltip_1.BaseTooltip {
  createTooltipElementInternal() {
    return new TooltipElement_1.TooltipElement();
  }

}

exports.Tooltip = Tooltip;

/***/ }),

/***/ "./tooltip/TooltipHandler.js":
/*!***********************************!*\
  !*** ./tooltip/TooltipHandler.js ***!
  \***********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TooltipHandler = void 0;

const LG_EVENT_TYPE_1 = __webpack_require__(/*! ../list-grid/LG_EVENT_TYPE */ "./list-grid/LG_EVENT_TYPE.js");

const Tooltip_1 = __webpack_require__(/*! ./Tooltip */ "./tooltip/Tooltip.js");

const utils_1 = __webpack_require__(/*! ../internal/utils */ "./internal/utils.js");

const TOOLTIP_INSTANCE_FACTORY = {
  "overflow-text"(grid) {
    return new Tooltip_1.Tooltip(grid);
  }

};

function getTooltipInstanceInfo( // eslint-disable-next-line @typescript-eslint/no-explicit-any
grid, col, row) {
  //
  // overflow text tooltip
  const overflowText = grid.getCellOverflowText(col, row);

  if (overflowText) {
    return {
      type: "overflow-text",
      content: overflowText
    };
  }

  return null;
}

class TooltipHandler {
  constructor(grid) {
    this._grid = grid;
    this._tooltipInstances = {};

    this._bindGridEvent(grid);
  }

  dispose() {
    const tooltipInstances = this._tooltipInstances;

    for (const k in tooltipInstances) {
      tooltipInstances[k].dispose();
    } // @ts-expect-error -- ignore


    delete this._tooltipInstances;
    this._attachInfo = null;
  }

  _attach(col, row) {
    const info = this._attachInfo;

    const instanceInfo = this._getTooltipInstanceInfo(col, row);

    if (info && (!instanceInfo || info.instance !== instanceInfo.instance)) {
      info.instance.detachTooltipElement();
      this._attachInfo = null;
    }

    if (!instanceInfo) {
      return;
    }

    const {
      instance
    } = instanceInfo;
    instance.attachTooltipElement(col, row, instanceInfo.content);

    const range = this._grid.getCellRange(col, row);

    this._attachInfo = {
      range,
      instance
    };
  }

  _move(col, row) {
    const info = this._attachInfo;

    if (!info || !(0, utils_1.cellInRange)(info.range, col, row)) {
      return;
    }

    const {
      instance
    } = info;
    instance.moveTooltipElement(col, row);
  }

  _detach() {
    const info = this._attachInfo;

    if (!info) {
      return;
    }

    const {
      instance
    } = info;
    instance.detachTooltipElement();
    this._attachInfo = null;
  }

  _isAttachCell(col, row) {
    const info = this._attachInfo;

    if (!info) {
      return false;
    }

    return (0, utils_1.cellInRange)(info.range, col, row);
  }

  _bindGridEvent(grid) {
    grid.listen(LG_EVENT_TYPE_1.LG_EVENT_TYPE.MOUSEOVER_CELL, e => {
      if (e.related) {
        if (this._isAttachCell(e.col, e.row)) {
          return;
        }
      }

      this._attach(e.col, e.row);
    });
    grid.listen(LG_EVENT_TYPE_1.LG_EVENT_TYPE.MOUSEOUT_CELL, e => {
      if (e.related) {
        if (this._isAttachCell(e.related.col, e.related.row)) {
          return;
        }
      }

      this._detach();
    });
    grid.listen(LG_EVENT_TYPE_1.LG_EVENT_TYPE.SELECTED_CELL, e => {
      if (this._isAttachCell(e.col, e.row)) {
        this._detach();
      }
    });
    grid.listen(LG_EVENT_TYPE_1.LG_EVENT_TYPE.SCROLL, () => {
      const info = this._attachInfo;

      if (!info) {
        return;
      }

      this._move(info.range.start.col, info.range.start.row);
    });
    grid.listen(LG_EVENT_TYPE_1.LG_EVENT_TYPE.CHANGED_VALUE, e => {
      if (this._isAttachCell(e.col, e.row)) {
        this._detach();

        this._attach(e.col, e.row);
      }
    });
  }

  _getTooltipInstanceInfo(col, row) {
    const grid = this._grid;
    const tooltipInstances = this._tooltipInstances;
    const info = getTooltipInstanceInfo(grid, col, row);

    if (!info) {
      return null;
    }

    const {
      type
    } = info;
    const instance = tooltipInstances[type] || (tooltipInstances[type] = TOOLTIP_INSTANCE_FACTORY[type](grid));
    return {
      instance,
      type,
      content: info.content
    };
  }

}

exports.TooltipHandler = TooltipHandler;

/***/ }),

/***/ "./tooltip/internal/TooltipElement.js":
/*!********************************************!*\
  !*** ./tooltip/internal/TooltipElement.js ***!
  \********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TooltipElement = void 0;

const EventHandler_1 = __webpack_require__(/*! ../../internal/EventHandler */ "./internal/EventHandler.js");

const dom_1 = __webpack_require__(/*! ../../internal/dom */ "./internal/dom.js");

const CLASSNAME = "cheetah-grid__tooltip-element";
const CONTENT_CLASSNAME = `${CLASSNAME}__content`;
const HIDDEN_CLASSNAME = `${CLASSNAME}--hidden`;
const SHOWN_CLASSNAME = `${CLASSNAME}--shown`;

function createTooltipDomElement() {
  __webpack_require__(/*! @/tooltip/internal/TooltipElement.css */ "../src/js/tooltip/internal/TooltipElement.css");

  const rootElement = (0, dom_1.createElement)("div", {
    classList: [CLASSNAME, HIDDEN_CLASSNAME]
  });
  const messageElement = (0, dom_1.createElement)("pre", {
    classList: [CONTENT_CLASSNAME]
  });
  rootElement.appendChild(messageElement);
  return rootElement;
}

class TooltipElement {
  constructor() {
    this._handler = new EventHandler_1.EventHandler();
    const rootElement = this._rootElement = createTooltipDomElement();
    this._messageElement = rootElement.querySelector(`.${CONTENT_CLASSNAME}`);
  }

  dispose() {
    this.detach();
    const rootElement = this._rootElement;

    if (rootElement.parentElement) {
      rootElement.parentElement.removeChild(rootElement);
    }

    this._handler.dispose(); // @ts-expect-error -- ignore


    delete this._rootElement; // @ts-expect-error -- ignore

    delete this._messageElement;
  }

  attach(grid, col, row, content) {
    const rootElement = this._rootElement;
    const messageElement = this._messageElement;
    rootElement.classList.remove(SHOWN_CLASSNAME);
    rootElement.classList.add(HIDDEN_CLASSNAME);

    if (this._attachCell(grid, col, row)) {
      rootElement.classList.add(SHOWN_CLASSNAME);
      rootElement.classList.remove(HIDDEN_CLASSNAME);
      messageElement.textContent = content;
    } else {
      this._detach();
    }
  }

  move(grid, col, row) {
    const rootElement = this._rootElement;

    if (this._attachCell(grid, col, row)) {
      rootElement.classList.add(SHOWN_CLASSNAME);
      rootElement.classList.remove(HIDDEN_CLASSNAME);
    } else {
      this._detach();
    }
  }

  detach() {
    this._detach();
  }

  _detach() {
    const rootElement = this._rootElement;

    if (rootElement.parentElement) {
      // rootElement.parentElement.removeChild(rootElement);
      rootElement.classList.remove(SHOWN_CLASSNAME);
      rootElement.classList.add(HIDDEN_CLASSNAME);
    }
  }

  _attachCell(grid, col, row) {
    const rootElement = this._rootElement;
    const {
      element,
      rect
    } = grid.getAttachCellsArea(grid.getCellRange(col, row));
    const {
      bottom: top,
      left,
      width
    } = rect;
    const {
      frozenRowCount,
      frozenColCount
    } = grid;

    if (row >= frozenRowCount && frozenRowCount > 0) {
      const {
        rect: frozenRect
      } = grid.getAttachCellsArea(grid.getCellRange(col, frozenRowCount - 1));

      if (top < frozenRect.bottom) {
        return false; //範囲外
      }
    } else {
      if (top < 0) {
        return false; //範囲外
      }
    }

    if (col >= frozenColCount && frozenColCount > 0) {
      const {
        rect: frozenRect
      } = grid.getAttachCellsArea(grid.getCellRange(frozenColCount - 1, row));

      if (left < frozenRect.right) {
        return false; //範囲外
      }
    } else {
      if (left < 0) {
        return false; //範囲外
      }
    }

    const {
      height: offsetHeight,
      width: offsetWidth,
      left: elementLeft,
      right: elementRight
    } = element.getBoundingClientRect();

    if (offsetHeight < top) {
      return false; //範囲外
    }

    if (offsetWidth < left) {
      return false; //範囲外
    }

    const cellCenter = left + width / 2;
    rootElement.style.top = `${top.toFixed()}px`;
    rootElement.style.left = `${cellCenter.toFixed()}px`;
    rootElement.style.minWidth = `${width.toFixed()}px`;
    const maxWidthForLeft = (elementLeft + cellCenter) * 2;
    const winWidth = window.innerWidth;
    const maxWidthForRight = (offsetWidth - cellCenter + (winWidth - elementRight)) * 2;
    const maxWidth = Math.min(maxWidthForLeft, maxWidthForRight);
    rootElement.style.maxWidth = `${maxWidth.toFixed()}px`;

    if (rootElement.parentElement !== element) {
      element.appendChild(rootElement);
    }

    return true;
  }

}

exports.TooltipElement = TooltipElement;

/***/ })

/******/ });
});
}).call(typeof global !== "undefined" ? global : window, typeof global !== "undefined" ? global : window);
//# sourceMappingURL=cheetahGrid.js.map