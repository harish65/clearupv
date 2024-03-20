var tribe = typeof tribe === "object" ? tribe : {}; tribe["tickets"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["YhH6",1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "+9iv":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "+N9A":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "/vq8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1HDl":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1ZqX":
/***/ (function(module, exports) {

module.exports = wp.data;

/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = tribe.modules.reduxSaga;

/***/ }),

/***/ "2TDg":
/***/ (function(module, exports) {

module.exports = lodash.omit;

/***/ }),

/***/ "2TdA":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "45Xz":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4Qn9":
/***/ (function(module, exports) {

module.exports = lodash.isEmpty;

/***/ }),

/***/ "4oMP":
/***/ (function(module, exports) {

module.exports = lodash.isObject;

/***/ }),

/***/ "5f0I":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "68xo":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6OzC":
/***/ (function(module, exports) {

module.exports = lodash.find;

/***/ }),

/***/ "6Ugf":
/***/ (function(module, exports) {

module.exports = tribe.common.elements;

/***/ }),

/***/ "6lOv":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7lmk":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8C5M":
/***/ (function(module, exports) {

module.exports = tribe.common.utils.recurrence;

/***/ }),

/***/ "8tO5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9lL/":
/***/ (function(module, exports) {

module.exports = tribe.common.data.plugins;

/***/ }),

/***/ "9mgW":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "AuWn":
/***/ (function(module, exports) {

module.exports = tribe.modules.reactInputAutosize;

/***/ }),

/***/ "B8vQ":
/***/ (function(module, exports) {

module.exports = tribe.common.utils;

/***/ }),

/***/ "EBah":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "EiNN":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "Etll":
/***/ (function(module, exports) {

module.exports = lodash.includes;

/***/ }),

/***/ "F1wu":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "HAtF":
/***/ (function(module, exports) {

module.exports = lodash.keys;

/***/ }),

/***/ "HSyU":
/***/ (function(module, exports) {

module.exports = wp.blocks;

/***/ }),

/***/ "I+H6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "In0u":
/***/ (function(module, exports) {

module.exports = lodash.noop;

/***/ }),

/***/ "IwAG":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "J/pT":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = tribe.modules.classnames;

/***/ }),

/***/ "L6gL":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "LHhe":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "M1s2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "MJAV":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "MWqi":
/***/ (function(module, exports) {

module.exports = tribe.modules.reselect;

/***/ }),

/***/ "OKIc":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "P9XJ":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "PE+2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "PxfU":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "Q+ho":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "Q9xL":
/***/ (function(module, exports) {

module.exports = tribe.common.hoc;

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = tribe.modules.reduxSaga.effects;

/***/ }),

/***/ "Sf1x":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "U/zc":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "VulL":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "XNR4":
/***/ (function(module, exports) {

module.exports = lodash.some;

/***/ }),

/***/ "XNrZ":
/***/ (function(module, exports) {

module.exports = lodash.trim;

/***/ }),

/***/ "YhH6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "blocks", function() { return /* reexport */ modules_blocks_namespaceObject; });
__webpack_require__.d(__webpack_exports__, "data", function() { return /* reexport */ data_namespaceObject; });
__webpack_require__.d(__webpack_exports__, "elements", function() { return /* reexport */ elements_namespaceObject; });
__webpack_require__.d(__webpack_exports__, "icons", function() { return /* reexport */ icons_namespaceObject; });

// NAMESPACE OBJECT: ./src/modules/data/blocks/rsvp/types.js
var types_namespaceObject = {};
__webpack_require__.r(types_namespaceObject);
__webpack_require__.d(types_namespaceObject, "SET_RSVP_ID", function() { return SET_RSVP_ID; });
__webpack_require__.d(types_namespaceObject, "SET_RSVP_SETTINGS_OPEN", function() { return SET_RSVP_SETTINGS_OPEN; });
__webpack_require__.d(types_namespaceObject, "SET_RSVP_HAS_CHANGES", function() { return SET_RSVP_HAS_CHANGES; });
__webpack_require__.d(types_namespaceObject, "SET_RSVP_IS_LOADING", function() { return SET_RSVP_IS_LOADING; });
__webpack_require__.d(types_namespaceObject, "SET_RSVP_IS_SETTINGS_LOADING", function() { return SET_RSVP_IS_SETTINGS_LOADING; });
__webpack_require__.d(types_namespaceObject, "SET_RSVP_IS_MODAL_OPEN", function() { return SET_RSVP_IS_MODAL_OPEN; });
__webpack_require__.d(types_namespaceObject, "SET_RSVP_GOING_COUNT", function() { return SET_RSVP_GOING_COUNT; });
__webpack_require__.d(types_namespaceObject, "SET_RSVP_NOT_GOING_COUNT", function() { return SET_RSVP_NOT_GOING_COUNT; });
__webpack_require__.d(types_namespaceObject, "SET_RSVP_HAS_ATTENDEE_INFO_FIELDS", function() { return SET_RSVP_HAS_ATTENDEE_INFO_FIELDS; });
__webpack_require__.d(types_namespaceObject, "SET_RSVP_HAS_DURATION_ERROR", function() { return SET_RSVP_HAS_DURATION_ERROR; });
__webpack_require__.d(types_namespaceObject, "SET_RSVP_IS_ADD_EDIT_OPEN", function() { return SET_RSVP_IS_ADD_EDIT_OPEN; });
__webpack_require__.d(types_namespaceObject, "SET_RSVP_DETAILS", function() { return SET_RSVP_DETAILS; });
__webpack_require__.d(types_namespaceObject, "SET_RSVP_TEMP_DETAILS", function() { return SET_RSVP_TEMP_DETAILS; });
__webpack_require__.d(types_namespaceObject, "SET_RSVP_HEADER_IMAGE", function() { return SET_RSVP_HEADER_IMAGE; });
__webpack_require__.d(types_namespaceObject, "SET_RSVP_TITLE", function() { return SET_RSVP_TITLE; });
__webpack_require__.d(types_namespaceObject, "SET_RSVP_DESCRIPTION", function() { return SET_RSVP_DESCRIPTION; });
__webpack_require__.d(types_namespaceObject, "SET_RSVP_CAPACITY", function() { return SET_RSVP_CAPACITY; });
__webpack_require__.d(types_namespaceObject, "SET_RSVP_NOT_GOING_RESPONSES", function() { return SET_RSVP_NOT_GOING_RESPONSES; });
__webpack_require__.d(types_namespaceObject, "SET_RSVP_START_DATE", function() { return SET_RSVP_START_DATE; });
__webpack_require__.d(types_namespaceObject, "SET_RSVP_START_DATE_INPUT", function() { return SET_RSVP_START_DATE_INPUT; });
__webpack_require__.d(types_namespaceObject, "SET_RSVP_START_DATE_MOMENT", function() { return SET_RSVP_START_DATE_MOMENT; });
__webpack_require__.d(types_namespaceObject, "SET_RSVP_END_DATE", function() { return SET_RSVP_END_DATE; });
__webpack_require__.d(types_namespaceObject, "SET_RSVP_END_DATE_INPUT", function() { return SET_RSVP_END_DATE_INPUT; });
__webpack_require__.d(types_namespaceObject, "SET_RSVP_END_DATE_MOMENT", function() { return SET_RSVP_END_DATE_MOMENT; });
__webpack_require__.d(types_namespaceObject, "SET_RSVP_START_TIME", function() { return SET_RSVP_START_TIME; });
__webpack_require__.d(types_namespaceObject, "SET_RSVP_END_TIME", function() { return SET_RSVP_END_TIME; });
__webpack_require__.d(types_namespaceObject, "SET_RSVP_START_TIME_INPUT", function() { return SET_RSVP_START_TIME_INPUT; });
__webpack_require__.d(types_namespaceObject, "SET_RSVP_END_TIME_INPUT", function() { return SET_RSVP_END_TIME_INPUT; });
__webpack_require__.d(types_namespaceObject, "SET_RSVP_TEMP_TITLE", function() { return SET_RSVP_TEMP_TITLE; });
__webpack_require__.d(types_namespaceObject, "SET_RSVP_TEMP_DESCRIPTION", function() { return SET_RSVP_TEMP_DESCRIPTION; });
__webpack_require__.d(types_namespaceObject, "SET_RSVP_TEMP_CAPACITY", function() { return SET_RSVP_TEMP_CAPACITY; });
__webpack_require__.d(types_namespaceObject, "SET_RSVP_TEMP_NOT_GOING_RESPONSES", function() { return SET_RSVP_TEMP_NOT_GOING_RESPONSES; });
__webpack_require__.d(types_namespaceObject, "SET_RSVP_TEMP_START_DATE", function() { return SET_RSVP_TEMP_START_DATE; });
__webpack_require__.d(types_namespaceObject, "SET_RSVP_TEMP_START_DATE_INPUT", function() { return SET_RSVP_TEMP_START_DATE_INPUT; });
__webpack_require__.d(types_namespaceObject, "SET_RSVP_TEMP_START_DATE_MOMENT", function() { return SET_RSVP_TEMP_START_DATE_MOMENT; });
__webpack_require__.d(types_namespaceObject, "SET_RSVP_TEMP_END_DATE", function() { return SET_RSVP_TEMP_END_DATE; });
__webpack_require__.d(types_namespaceObject, "SET_RSVP_TEMP_END_DATE_INPUT", function() { return SET_RSVP_TEMP_END_DATE_INPUT; });
__webpack_require__.d(types_namespaceObject, "SET_RSVP_TEMP_END_DATE_MOMENT", function() { return SET_RSVP_TEMP_END_DATE_MOMENT; });
__webpack_require__.d(types_namespaceObject, "SET_RSVP_TEMP_START_TIME", function() { return SET_RSVP_TEMP_START_TIME; });
__webpack_require__.d(types_namespaceObject, "SET_RSVP_TEMP_END_TIME", function() { return SET_RSVP_TEMP_END_TIME; });
__webpack_require__.d(types_namespaceObject, "SET_RSVP_TEMP_START_TIME_INPUT", function() { return SET_RSVP_TEMP_START_TIME_INPUT; });
__webpack_require__.d(types_namespaceObject, "SET_RSVP_TEMP_END_TIME_INPUT", function() { return SET_RSVP_TEMP_END_TIME_INPUT; });
__webpack_require__.d(types_namespaceObject, "CREATE_RSVP", function() { return CREATE_RSVP; });
__webpack_require__.d(types_namespaceObject, "INITIALIZE_RSVP", function() { return INITIALIZE_RSVP; });
__webpack_require__.d(types_namespaceObject, "DELETE_RSVP", function() { return DELETE_RSVP; });
__webpack_require__.d(types_namespaceObject, "HANDLE_RSVP_START_DATE", function() { return HANDLE_RSVP_START_DATE; });
__webpack_require__.d(types_namespaceObject, "HANDLE_RSVP_END_DATE", function() { return HANDLE_RSVP_END_DATE; });
__webpack_require__.d(types_namespaceObject, "HANDLE_RSVP_START_TIME", function() { return HANDLE_RSVP_START_TIME; });
__webpack_require__.d(types_namespaceObject, "HANDLE_RSVP_END_TIME", function() { return HANDLE_RSVP_END_TIME; });
__webpack_require__.d(types_namespaceObject, "FETCH_RSVP_HEADER_IMAGE", function() { return FETCH_RSVP_HEADER_IMAGE; });
__webpack_require__.d(types_namespaceObject, "UPDATE_RSVP_HEADER_IMAGE", function() { return UPDATE_RSVP_HEADER_IMAGE; });
__webpack_require__.d(types_namespaceObject, "DELETE_RSVP_HEADER_IMAGE", function() { return DELETE_RSVP_HEADER_IMAGE; });

// NAMESPACE OBJECT: ./src/modules/data/blocks/rsvp/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "setRSVPId", function() { return setRSVPId; });
__webpack_require__.d(actions_namespaceObject, "setRSVPSettingsOpen", function() { return setRSVPSettingsOpen; });
__webpack_require__.d(actions_namespaceObject, "setRSVPIsAddEditOpen", function() { return setRSVPIsAddEditOpen; });
__webpack_require__.d(actions_namespaceObject, "setRSVPHasChanges", function() { return setRSVPHasChanges; });
__webpack_require__.d(actions_namespaceObject, "setRSVPIsLoading", function() { return setRSVPIsLoading; });
__webpack_require__.d(actions_namespaceObject, "setRSVPIsSettingsLoading", function() { return setRSVPIsSettingsLoading; });
__webpack_require__.d(actions_namespaceObject, "setRSVPIsModalOpen", function() { return setRSVPIsModalOpen; });
__webpack_require__.d(actions_namespaceObject, "setRSVPGoingCount", function() { return setRSVPGoingCount; });
__webpack_require__.d(actions_namespaceObject, "setRSVPNotGoingCount", function() { return setRSVPNotGoingCount; });
__webpack_require__.d(actions_namespaceObject, "setRSVPHasAttendeeInfoFields", function() { return setRSVPHasAttendeeInfoFields; });
__webpack_require__.d(actions_namespaceObject, "setRSVPHasDurationError", function() { return setRSVPHasDurationError; });
__webpack_require__.d(actions_namespaceObject, "setRSVPDetails", function() { return setRSVPDetails; });
__webpack_require__.d(actions_namespaceObject, "setRSVPTempDetails", function() { return setRSVPTempDetails; });
__webpack_require__.d(actions_namespaceObject, "setRSVPHeaderImage", function() { return setRSVPHeaderImage; });
__webpack_require__.d(actions_namespaceObject, "setRSVPTitle", function() { return setRSVPTitle; });
__webpack_require__.d(actions_namespaceObject, "setRSVPDescription", function() { return setRSVPDescription; });
__webpack_require__.d(actions_namespaceObject, "setRSVPCapacity", function() { return setRSVPCapacity; });
__webpack_require__.d(actions_namespaceObject, "setRSVPNotGoingResponses", function() { return setRSVPNotGoingResponses; });
__webpack_require__.d(actions_namespaceObject, "setRSVPStartDate", function() { return setRSVPStartDate; });
__webpack_require__.d(actions_namespaceObject, "setRSVPStartDateInput", function() { return setRSVPStartDateInput; });
__webpack_require__.d(actions_namespaceObject, "setRSVPStartDateMoment", function() { return setRSVPStartDateMoment; });
__webpack_require__.d(actions_namespaceObject, "setRSVPEndDate", function() { return setRSVPEndDate; });
__webpack_require__.d(actions_namespaceObject, "setRSVPEndDateInput", function() { return setRSVPEndDateInput; });
__webpack_require__.d(actions_namespaceObject, "setRSVPEndDateMoment", function() { return setRSVPEndDateMoment; });
__webpack_require__.d(actions_namespaceObject, "setRSVPStartTime", function() { return setRSVPStartTime; });
__webpack_require__.d(actions_namespaceObject, "setRSVPEndTime", function() { return setRSVPEndTime; });
__webpack_require__.d(actions_namespaceObject, "setRSVPStartTimeInput", function() { return setRSVPStartTimeInput; });
__webpack_require__.d(actions_namespaceObject, "setRSVPEndTimeInput", function() { return setRSVPEndTimeInput; });
__webpack_require__.d(actions_namespaceObject, "setRSVPTempTitle", function() { return setRSVPTempTitle; });
__webpack_require__.d(actions_namespaceObject, "setRSVPTempDescription", function() { return setRSVPTempDescription; });
__webpack_require__.d(actions_namespaceObject, "setRSVPTempCapacity", function() { return setRSVPTempCapacity; });
__webpack_require__.d(actions_namespaceObject, "setRSVPTempNotGoingResponses", function() { return setRSVPTempNotGoingResponses; });
__webpack_require__.d(actions_namespaceObject, "setRSVPTempStartDate", function() { return setRSVPTempStartDate; });
__webpack_require__.d(actions_namespaceObject, "setRSVPTempStartDateInput", function() { return setRSVPTempStartDateInput; });
__webpack_require__.d(actions_namespaceObject, "setRSVPTempStartDateMoment", function() { return setRSVPTempStartDateMoment; });
__webpack_require__.d(actions_namespaceObject, "setRSVPTempEndDate", function() { return setRSVPTempEndDate; });
__webpack_require__.d(actions_namespaceObject, "setRSVPTempEndDateInput", function() { return setRSVPTempEndDateInput; });
__webpack_require__.d(actions_namespaceObject, "setRSVPTempEndDateMoment", function() { return setRSVPTempEndDateMoment; });
__webpack_require__.d(actions_namespaceObject, "setRSVPTempStartTime", function() { return setRSVPTempStartTime; });
__webpack_require__.d(actions_namespaceObject, "setRSVPTempEndTime", function() { return setRSVPTempEndTime; });
__webpack_require__.d(actions_namespaceObject, "setRSVPTempStartTimeInput", function() { return setRSVPTempStartTimeInput; });
__webpack_require__.d(actions_namespaceObject, "setRSVPTempEndTimeInput", function() { return setRSVPTempEndTimeInput; });
__webpack_require__.d(actions_namespaceObject, "createRSVP", function() { return createRSVP; });
__webpack_require__.d(actions_namespaceObject, "initializeRSVP", function() { return actions_initializeRSVP; });
__webpack_require__.d(actions_namespaceObject, "deleteRSVP", function() { return deleteRSVP; });
__webpack_require__.d(actions_namespaceObject, "handleRSVPStartDate", function() { return handleRSVPStartDate; });
__webpack_require__.d(actions_namespaceObject, "handleRSVPEndDate", function() { return handleRSVPEndDate; });
__webpack_require__.d(actions_namespaceObject, "handleRSVPStartTime", function() { return handleRSVPStartTime; });
__webpack_require__.d(actions_namespaceObject, "handleRSVPEndTime", function() { return handleRSVPEndTime; });
__webpack_require__.d(actions_namespaceObject, "fetchRSVPHeaderImage", function() { return fetchRSVPHeaderImage; });
__webpack_require__.d(actions_namespaceObject, "updateRSVPHeaderImage", function() { return updateRSVPHeaderImage; });
__webpack_require__.d(actions_namespaceObject, "deleteRSVPHeaderImage", function() { return deleteRSVPHeaderImage; });

// NAMESPACE OBJECT: ./src/modules/data/blocks/rsvp/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "getRSVPBlock", function() { return getRSVPBlock; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPId", function() { return getRSVPId; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPCreated", function() { return getRSVPCreated; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPSettingsOpen", function() { return getRSVPSettingsOpen; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPIsAddEditOpen", function() { return getRSVPIsAddEditOpen; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPHasChanges", function() { return getRSVPHasChanges; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPIsLoading", function() { return getRSVPIsLoading; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPIsSettingsLoading", function() { return getRSVPIsSettingsLoading; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPIsModalOpen", function() { return getRSVPIsModalOpen; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPGoingCount", function() { return getRSVPGoingCount; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPNotGoingCount", function() { return getRSVPNotGoingCount; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPHasAttendeeInfoFields", function() { return getRSVPHasAttendeeInfoFields; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPHasDurationError", function() { return getRSVPHasDurationError; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPDetails", function() { return getRSVPDetails; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPTitle", function() { return getRSVPTitle; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPDescription", function() { return getRSVPDescription; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPCapacity", function() { return getRSVPCapacity; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPAvailable", function() { return getRSVPAvailable; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPNotGoingResponses", function() { return getRSVPNotGoingResponses; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPStartDate", function() { return getRSVPStartDate; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPStartDateInput", function() { return getRSVPStartDateInput; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPStartDateMoment", function() { return getRSVPStartDateMoment; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPStartTime", function() { return getRSVPStartTime; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPStartTimeNoSeconds", function() { return getRSVPStartTimeNoSeconds; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPEndDate", function() { return getRSVPEndDate; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPEndDateInput", function() { return getRSVPEndDateInput; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPEndDateMoment", function() { return getRSVPEndDateMoment; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPEndTime", function() { return getRSVPEndTime; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPEndTimeNoSeconds", function() { return getRSVPEndTimeNoSeconds; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPStartTimeInput", function() { return getRSVPStartTimeInput; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPEndTimeInput", function() { return getRSVPEndTimeInput; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPTempDetails", function() { return getRSVPTempDetails; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPTempTitle", function() { return getRSVPTempTitle; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPTempDescription", function() { return getRSVPTempDescription; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPTempCapacity", function() { return getRSVPTempCapacity; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPTempNotGoingResponses", function() { return getRSVPTempNotGoingResponses; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPTempStartDate", function() { return getRSVPTempStartDate; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPTempStartDateInput", function() { return getRSVPTempStartDateInput; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPTempStartDateMoment", function() { return getRSVPTempStartDateMoment; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPTempStartTime", function() { return getRSVPTempStartTime; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPTempStartTimeNoSeconds", function() { return getRSVPTempStartTimeNoSeconds; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPTempEndDate", function() { return getRSVPTempEndDate; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPTempEndDateInput", function() { return getRSVPTempEndDateInput; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPTempEndDateMoment", function() { return getRSVPTempEndDateMoment; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPTempEndTime", function() { return getRSVPTempEndTime; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPTempEndTimeNoSeconds", function() { return getRSVPTempEndTimeNoSeconds; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPTempStartTimeInput", function() { return getRSVPTempStartTimeInput; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPTempEndTimeInput", function() { return getRSVPTempEndTimeInput; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPHeaderImage", function() { return getRSVPHeaderImage; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPHeaderImageId", function() { return getRSVPHeaderImageId; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPHeaderImageSrc", function() { return getRSVPHeaderImageSrc; });
__webpack_require__.d(selectors_namespaceObject, "getRSVPHeaderImageAlt", function() { return getRSVPHeaderImageAlt; });

// NAMESPACE OBJECT: ./src/modules/data/blocks/rsvp/thunks.js
var thunks_namespaceObject = {};
__webpack_require__.r(thunks_namespaceObject);
__webpack_require__.d(thunks_namespaceObject, "createRSVP", function() { return thunks_createRSVP; });
__webpack_require__.d(thunks_namespaceObject, "updateRSVP", function() { return updateRSVP; });
__webpack_require__.d(thunks_namespaceObject, "deleteRSVP", function() { return thunks_deleteRSVP; });
__webpack_require__.d(thunks_namespaceObject, "getRSVP", function() { return getRSVP; });

// NAMESPACE OBJECT: ./src/modules/data/blocks/ticket/types.js
var ticket_types_namespaceObject = {};
__webpack_require__.r(ticket_types_namespaceObject);
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKETS_INITIAL_STATE", function() { return SET_TICKETS_INITIAL_STATE; });
__webpack_require__.d(ticket_types_namespaceObject, "RESET_TICKETS_BLOCK", function() { return RESET_TICKETS_BLOCK; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKETS_HEADER_IMAGE", function() { return SET_TICKETS_HEADER_IMAGE; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKETS_IS_SELECTED", function() { return SET_TICKETS_IS_SELECTED; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKETS_IS_SETTINGS_OPEN", function() { return SET_TICKETS_IS_SETTINGS_OPEN; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKETS_IS_SETTINGS_LOADING", function() { return SET_TICKETS_IS_SETTINGS_LOADING; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKETS_PROVIDER", function() { return SET_TICKETS_PROVIDER; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKETS_SHARED_CAPACITY", function() { return SET_TICKETS_SHARED_CAPACITY; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKETS_TEMP_SHARED_CAPACITY", function() { return SET_TICKETS_TEMP_SHARED_CAPACITY; });
__webpack_require__.d(ticket_types_namespaceObject, "FETCH_TICKETS_HEADER_IMAGE", function() { return FETCH_TICKETS_HEADER_IMAGE; });
__webpack_require__.d(ticket_types_namespaceObject, "UPDATE_TICKETS_HEADER_IMAGE", function() { return UPDATE_TICKETS_HEADER_IMAGE; });
__webpack_require__.d(ticket_types_namespaceObject, "DELETE_TICKETS_HEADER_IMAGE", function() { return DELETE_TICKETS_HEADER_IMAGE; });
__webpack_require__.d(ticket_types_namespaceObject, "REGISTER_TICKET_BLOCK", function() { return REGISTER_TICKET_BLOCK; });
__webpack_require__.d(ticket_types_namespaceObject, "REMOVE_TICKET_BLOCK", function() { return REMOVE_TICKET_BLOCK; });
__webpack_require__.d(ticket_types_namespaceObject, "REMOVE_TICKET_BLOCKS", function() { return REMOVE_TICKET_BLOCKS; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_TITLE", function() { return SET_TICKET_TITLE; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_DESCRIPTION", function() { return SET_TICKET_DESCRIPTION; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_PRICE", function() { return SET_TICKET_PRICE; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_SKU", function() { return SET_TICKET_SKU; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_IAC_SETTING", function() { return SET_TICKET_IAC_SETTING; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_START_DATE", function() { return SET_TICKET_START_DATE; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_START_DATE_INPUT", function() { return SET_TICKET_START_DATE_INPUT; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_START_DATE_MOMENT", function() { return SET_TICKET_START_DATE_MOMENT; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_END_DATE", function() { return SET_TICKET_END_DATE; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_END_DATE_INPUT", function() { return SET_TICKET_END_DATE_INPUT; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_END_DATE_MOMENT", function() { return SET_TICKET_END_DATE_MOMENT; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_START_TIME", function() { return SET_TICKET_START_TIME; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_END_TIME", function() { return SET_TICKET_END_TIME; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_START_TIME_INPUT", function() { return SET_TICKET_START_TIME_INPUT; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_END_TIME_INPUT", function() { return SET_TICKET_END_TIME_INPUT; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_CAPACITY_TYPE", function() { return SET_TICKET_CAPACITY_TYPE; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_CAPACITY", function() { return SET_TICKET_CAPACITY; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_TEMP_TITLE", function() { return SET_TICKET_TEMP_TITLE; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_TEMP_DESCRIPTION", function() { return SET_TICKET_TEMP_DESCRIPTION; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_TEMP_PRICE", function() { return SET_TICKET_TEMP_PRICE; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_TEMP_SKU", function() { return SET_TICKET_TEMP_SKU; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_TEMP_IAC_SETTING", function() { return SET_TICKET_TEMP_IAC_SETTING; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_TEMP_START_DATE", function() { return SET_TICKET_TEMP_START_DATE; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_TEMP_START_DATE_INPUT", function() { return SET_TICKET_TEMP_START_DATE_INPUT; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_TEMP_START_DATE_MOMENT", function() { return SET_TICKET_TEMP_START_DATE_MOMENT; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_TEMP_END_DATE", function() { return SET_TICKET_TEMP_END_DATE; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_TEMP_END_DATE_INPUT", function() { return SET_TICKET_TEMP_END_DATE_INPUT; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_TEMP_END_DATE_MOMENT", function() { return SET_TICKET_TEMP_END_DATE_MOMENT; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_TEMP_START_TIME", function() { return SET_TICKET_TEMP_START_TIME; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_TEMP_END_TIME", function() { return SET_TICKET_TEMP_END_TIME; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_TEMP_START_TIME_INPUT", function() { return SET_TICKET_TEMP_START_TIME_INPUT; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_TEMP_END_TIME_INPUT", function() { return SET_TICKET_TEMP_END_TIME_INPUT; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_TEMP_CAPACITY_TYPE", function() { return SET_TICKET_TEMP_CAPACITY_TYPE; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_TEMP_CAPACITY", function() { return SET_TICKET_TEMP_CAPACITY; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_SOLD", function() { return SET_TICKET_SOLD; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_AVAILABLE", function() { return SET_TICKET_AVAILABLE; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_ID", function() { return SET_TICKET_ID; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_CURRENCY_SYMBOL", function() { return SET_TICKET_CURRENCY_SYMBOL; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_CURRENCY_POSITION", function() { return SET_TICKET_CURRENCY_POSITION; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_PROVIDER", function() { return SET_TICKET_PROVIDER; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_HAS_ATTENDEE_INFO_FIELDS", function() { return SET_TICKET_HAS_ATTENDEE_INFO_FIELDS; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_ATTENDEE_INFO_FIELDS", function() { return SET_TICKET_ATTENDEE_INFO_FIELDS; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_IS_LOADING", function() { return SET_TICKET_IS_LOADING; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_IS_MODAL_OPEN", function() { return SET_TICKET_IS_MODAL_OPEN; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_HAS_BEEN_CREATED", function() { return SET_TICKET_HAS_BEEN_CREATED; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_HAS_CHANGES", function() { return SET_TICKET_HAS_CHANGES; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_HAS_DURATION_ERROR", function() { return SET_TICKET_HAS_DURATION_ERROR; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_IS_SELECTED", function() { return SET_TICKET_IS_SELECTED; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_DETAILS", function() { return SET_TICKET_DETAILS; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_TEMP_DETAILS", function() { return SET_TICKET_TEMP_DETAILS; });
__webpack_require__.d(ticket_types_namespaceObject, "HANDLE_TICKET_START_DATE", function() { return HANDLE_TICKET_START_DATE; });
__webpack_require__.d(ticket_types_namespaceObject, "HANDLE_TICKET_END_DATE", function() { return HANDLE_TICKET_END_DATE; });
__webpack_require__.d(ticket_types_namespaceObject, "HANDLE_TICKET_START_TIME", function() { return HANDLE_TICKET_START_TIME; });
__webpack_require__.d(ticket_types_namespaceObject, "HANDLE_TICKET_END_TIME", function() { return HANDLE_TICKET_END_TIME; });
__webpack_require__.d(ticket_types_namespaceObject, "FETCH_TICKET", function() { return FETCH_TICKET; });
__webpack_require__.d(ticket_types_namespaceObject, "CREATE_NEW_TICKET", function() { return CREATE_NEW_TICKET; });
__webpack_require__.d(ticket_types_namespaceObject, "UPDATE_TICKET", function() { return UPDATE_TICKET; });
__webpack_require__.d(ticket_types_namespaceObject, "DELETE_TICKET", function() { return DELETE_TICKET; });
__webpack_require__.d(ticket_types_namespaceObject, "SET_TICKET_INITIAL_STATE", function() { return SET_TICKET_INITIAL_STATE; });

// NAMESPACE OBJECT: ./src/modules/data/blocks/ticket/constants.js
var constants_namespaceObject = {};
__webpack_require__.r(constants_namespaceObject);
__webpack_require__.d(constants_namespaceObject, "TC", function() { return TC; });
__webpack_require__.d(constants_namespaceObject, "EDD", function() { return EDD; });
__webpack_require__.d(constants_namespaceObject, "WOO", function() { return WOO; });
__webpack_require__.d(constants_namespaceObject, "RSVP", function() { return RSVP; });
__webpack_require__.d(constants_namespaceObject, "RSVP_CLASS", function() { return RSVP_CLASS; });
__webpack_require__.d(constants_namespaceObject, "TICKETS_COMMERCE_MODULE_CLASS", function() { return TICKETS_COMMERCE_MODULE_CLASS; });
__webpack_require__.d(constants_namespaceObject, "TC_CLASS", function() { return TC_CLASS; });
__webpack_require__.d(constants_namespaceObject, "EDD_CLASS", function() { return EDD_CLASS; });
__webpack_require__.d(constants_namespaceObject, "WOO_CLASS", function() { return WOO_CLASS; });
__webpack_require__.d(constants_namespaceObject, "PROVIDER_CLASS_TO_PROVIDER_MAPPING", function() { return PROVIDER_CLASS_TO_PROVIDER_MAPPING; });
__webpack_require__.d(constants_namespaceObject, "PROVIDER_TYPES", function() { return PROVIDER_TYPES; });
__webpack_require__.d(constants_namespaceObject, "EDD_ORDERS", function() { return EDD_ORDERS; });
__webpack_require__.d(constants_namespaceObject, "TC_ORDERS", function() { return TC_ORDERS; });
__webpack_require__.d(constants_namespaceObject, "WOO_ORDERS", function() { return WOO_ORDERS; });
__webpack_require__.d(constants_namespaceObject, "TICKETS_COMMERCE_ORDERS", function() { return TICKETS_COMMERCE_ORDERS; });
__webpack_require__.d(constants_namespaceObject, "TICKET_ORDERS_PAGE_SLUG", function() { return TICKET_ORDERS_PAGE_SLUG; });
__webpack_require__.d(constants_namespaceObject, "UNLIMITED", function() { return UNLIMITED; });
__webpack_require__.d(constants_namespaceObject, "SHARED", function() { return SHARED; });
__webpack_require__.d(constants_namespaceObject, "INDEPENDENT", function() { return INDEPENDENT; });
__webpack_require__.d(constants_namespaceObject, "CAPPED", function() { return CAPPED; });
__webpack_require__.d(constants_namespaceObject, "OWN", function() { return OWN; });
__webpack_require__.d(constants_namespaceObject, "TICKET_TYPES_VALUES", function() { return TICKET_TYPES_VALUES; });
__webpack_require__.d(constants_namespaceObject, "TICKET_TYPES", function() { return TICKET_TYPES; });
__webpack_require__.d(constants_namespaceObject, "PREFIX", function() { return PREFIX; });
__webpack_require__.d(constants_namespaceObject, "SUFFIX", function() { return SUFFIX; });
__webpack_require__.d(constants_namespaceObject, "PRICE_POSITIONS", function() { return PRICE_POSITIONS; });

// NAMESPACE OBJECT: ./src/modules/data/blocks/ticket/options.js
var options_namespaceObject = {};
__webpack_require__.r(options_namespaceObject);
__webpack_require__.d(options_namespaceObject, "CAPACITY_TYPE_OPTIONS", function() { return CAPACITY_TYPE_OPTIONS; });

// NAMESPACE OBJECT: ./src/modules/data/blocks/ticket/selectors.js
var ticket_selectors_namespaceObject = {};
__webpack_require__.r(ticket_selectors_namespaceObject);
__webpack_require__.d(ticket_selectors_namespaceObject, "getState", function() { return getState; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getBlock", function() { return getBlock; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketsIsSelected", function() { return getTicketsIsSelected; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketsIsSettingsOpen", function() { return getTicketsIsSettingsOpen; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketsIsSettingsLoading", function() { return getTicketsIsSettingsLoading; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketsProvider", function() { return getTicketsProvider; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketsSharedCapacity", function() { return getTicketsSharedCapacity; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketsSharedCapacityInt", function() { return getTicketsSharedCapacityInt; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketsTempSharedCapacity", function() { return getTicketsTempSharedCapacity; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketsTempSharedCapacityInt", function() { return getTicketsTempSharedCapacityInt; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketsHeaderImage", function() { return getTicketsHeaderImage; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketsHeaderImageId", function() { return getTicketsHeaderImageId; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketsHeaderImageSrc", function() { return getTicketsHeaderImageSrc; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketsHeaderImageAlt", function() { return getTicketsHeaderImageAlt; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTickets", function() { return getTickets; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketsAllClientIds", function() { return getTicketsAllClientIds; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketsByClientId", function() { return getTicketsByClientId; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketsArray", function() { return getTicketsArray; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketsCount", function() { return getTicketsCount; });
__webpack_require__.d(ticket_selectors_namespaceObject, "hasTickets", function() { return hasTickets; });
__webpack_require__.d(ticket_selectors_namespaceObject, "hasCreatedTickets", function() { return selectors_hasCreatedTickets; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getIndependentTickets", function() { return getIndependentTickets; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getSharedTickets", function() { return getSharedTickets; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getSharedTicketsCount", function() { return getSharedTicketsCount; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getUnlimitedTickets", function() { return getUnlimitedTickets; });
__webpack_require__.d(ticket_selectors_namespaceObject, "hasATicketSelected", function() { return selectors_hasATicketSelected; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketsIdsInBlocks", function() { return getTicketsIdsInBlocks; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketClientId", function() { return getTicketClientId; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicket", function() { return getTicket; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketSold", function() { return getTicketSold; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketAvailable", function() { return getTicketAvailable; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketId", function() { return getTicketId; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketCurrencySymbol", function() { return getTicketCurrencySymbol; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketCurrencyPosition", function() { return getTicketCurrencyPosition; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketCurrencyDecimalPoint", function() { return getTicketCurrencyDecimalPoint; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketCurrencyNumberOfDecimals", function() { return getTicketCurrencyNumberOfDecimals; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketCurrencyThousandsSep", function() { return getTicketCurrencyThousandsSep; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketProvider", function() { return getTicketProvider; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketHasAttendeeInfoFields", function() { return getTicketHasAttendeeInfoFields; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketIsLoading", function() { return getTicketIsLoading; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketIsModalOpen", function() { return getTicketIsModalOpen; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketHasBeenCreated", function() { return getTicketHasBeenCreated; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketHasChanges", function() { return getTicketHasChanges; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketHasDurationError", function() { return getTicketHasDurationError; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketIsSelected", function() { return getTicketIsSelected; });
__webpack_require__.d(ticket_selectors_namespaceObject, "isTicketDisabled", function() { return isTicketDisabled; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketDetails", function() { return getTicketDetails; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketTitle", function() { return getTicketTitle; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketDescription", function() { return getTicketDescription; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketPrice", function() { return getTicketPrice; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketSku", function() { return getTicketSku; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketIACSetting", function() { return getTicketIACSetting; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketStartDate", function() { return getTicketStartDate; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketStartDateInput", function() { return getTicketStartDateInput; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketStartDateMoment", function() { return getTicketStartDateMoment; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketEndDate", function() { return getTicketEndDate; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketEndDateInput", function() { return getTicketEndDateInput; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketEndDateMoment", function() { return getTicketEndDateMoment; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketStartTime", function() { return getTicketStartTime; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketStartTimeNoSeconds", function() { return getTicketStartTimeNoSeconds; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketEndTime", function() { return getTicketEndTime; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketEndTimeNoSeconds", function() { return getTicketEndTimeNoSeconds; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketStartTimeInput", function() { return getTicketStartTimeInput; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketEndTimeInput", function() { return getTicketEndTimeInput; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketCapacityType", function() { return getTicketCapacityType; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketCapacity", function() { return getTicketCapacity; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketCapacityInt", function() { return getTicketCapacityInt; });
__webpack_require__.d(ticket_selectors_namespaceObject, "isUnlimitedTicket", function() { return isUnlimitedTicket; });
__webpack_require__.d(ticket_selectors_namespaceObject, "isSharedTicket", function() { return isSharedTicket; });
__webpack_require__.d(ticket_selectors_namespaceObject, "isIndependentTicket", function() { return isIndependentTicket; });
__webpack_require__.d(ticket_selectors_namespaceObject, "isTicketPast", function() { return isTicketPast; });
__webpack_require__.d(ticket_selectors_namespaceObject, "isTicketFuture", function() { return isTicketFuture; });
__webpack_require__.d(ticket_selectors_namespaceObject, "isTicketOnSale", function() { return isTicketOnSale; });
__webpack_require__.d(ticket_selectors_namespaceObject, "hasTicketOnSale", function() { return hasTicketOnSale; });
__webpack_require__.d(ticket_selectors_namespaceObject, "allTicketsPast", function() { return selectors_allTicketsPast; });
__webpack_require__.d(ticket_selectors_namespaceObject, "allTicketsFuture", function() { return selectors_allTicketsFuture; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketAttendeeInfoFields", function() { return getTicketAttendeeInfoFields; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketTempDetails", function() { return getTicketTempDetails; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketTempTitle", function() { return getTicketTempTitle; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketTempDescription", function() { return getTicketTempDescription; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketTempPrice", function() { return getTicketTempPrice; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketTempSku", function() { return getTicketTempSku; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketTempIACSetting", function() { return getTicketTempIACSetting; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketTempStartDate", function() { return getTicketTempStartDate; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketTempStartDateInput", function() { return getTicketTempStartDateInput; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketTempStartDateMoment", function() { return getTicketTempStartDateMoment; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketTempEndDate", function() { return getTicketTempEndDate; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketTempEndDateInput", function() { return getTicketTempEndDateInput; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketTempEndDateMoment", function() { return getTicketTempEndDateMoment; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketTempStartTime", function() { return getTicketTempStartTime; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketTempStartTimeNoSeconds", function() { return getTicketTempStartTimeNoSeconds; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketTempEndTime", function() { return getTicketTempEndTime; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketTempEndTimeNoSeconds", function() { return getTicketTempEndTimeNoSeconds; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketTempStartTimeInput", function() { return getTicketTempStartTimeInput; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketTempEndTimeInput", function() { return getTicketTempEndTimeInput; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketTempCapacityType", function() { return getTicketTempCapacityType; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketTempCapacity", function() { return getTicketTempCapacity; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketTempCapacityInt", function() { return getTicketTempCapacityInt; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketTempCapacityTypeOption", function() { return getTicketTempCapacityTypeOption; });
__webpack_require__.d(ticket_selectors_namespaceObject, "isTempTitleValid", function() { return isTempTitleValid; });
__webpack_require__.d(ticket_selectors_namespaceObject, "isTempCapacityValid", function() { return isTempCapacityValid; });
__webpack_require__.d(ticket_selectors_namespaceObject, "isTempSharedCapacityValid", function() { return isTempSharedCapacityValid; });
__webpack_require__.d(ticket_selectors_namespaceObject, "isZeroPriceValid", function() { return isZeroPriceValid; });
__webpack_require__.d(ticket_selectors_namespaceObject, "isTicketValid", function() { return isTicketValid; });
__webpack_require__.d(ticket_selectors_namespaceObject, "_getTotalCapacity", function() { return _getTotalCapacity; });
__webpack_require__.d(ticket_selectors_namespaceObject, "_getTotalTempCapacity", function() { return _getTotalTempCapacity; });
__webpack_require__.d(ticket_selectors_namespaceObject, "_getTotalSold", function() { return _getTotalSold; });
__webpack_require__.d(ticket_selectors_namespaceObject, "_getTotalAvailable", function() { return _getTotalAvailable; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getIndependentTicketsCapacity", function() { return getIndependentTicketsCapacity; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getIndependentTicketsTempCapacity", function() { return getIndependentTicketsTempCapacity; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getIndependentTicketsSold", function() { return getIndependentTicketsSold; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getIndependentTicketsAvailable", function() { return getIndependentTicketsAvailable; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getSharedTicketsSold", function() { return getSharedTicketsSold; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getSharedTicketsAvailable", function() { return getSharedTicketsAvailable; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getIndependentAndSharedTicketsCapacity", function() { return getIndependentAndSharedTicketsCapacity; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getIndependentAndSharedTicketsTempCapacity", function() { return getIndependentAndSharedTicketsTempCapacity; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getIndependentAndSharedTicketsSold", function() { return getIndependentAndSharedTicketsSold; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getIndependentAndSharedTicketsAvailable", function() { return getIndependentAndSharedTicketsAvailable; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getTicketProviders", function() { return getTicketProviders; });
__webpack_require__.d(ticket_selectors_namespaceObject, "getDefaultTicketProvider", function() { return getDefaultTicketProvider; });
__webpack_require__.d(ticket_selectors_namespaceObject, "hasValidTicketProvider", function() { return hasValidTicketProvider; });
__webpack_require__.d(ticket_selectors_namespaceObject, "hasMultipleTicketProviders", function() { return hasMultipleTicketProviders; });
__webpack_require__.d(ticket_selectors_namespaceObject, "hasTicketProviders", function() { return hasTicketProviders; });
__webpack_require__.d(ticket_selectors_namespaceObject, "canCreateTickets", function() { return selectors_canCreateTickets; });

// NAMESPACE OBJECT: ./src/modules/data/blocks/ticket/actions.js
var ticket_actions_namespaceObject = {};
__webpack_require__.r(ticket_actions_namespaceObject);
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketsInitialState", function() { return actions_setTicketsInitialState; });
__webpack_require__.d(ticket_actions_namespaceObject, "resetTicketsBlock", function() { return actions_resetTicketsBlock; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketsHeaderImage", function() { return setTicketsHeaderImage; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketsIsSelected", function() { return setTicketsIsSelected; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketsIsSettingsOpen", function() { return setTicketsIsSettingsOpen; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketsIsSettingsLoading", function() { return setTicketsIsSettingsLoading; });
__webpack_require__.d(ticket_actions_namespaceObject, "openSettings", function() { return openSettings; });
__webpack_require__.d(ticket_actions_namespaceObject, "closeSettings", function() { return closeSettings; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketsProvider", function() { return setTicketsProvider; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketsSharedCapacity", function() { return setTicketsSharedCapacity; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketsTempSharedCapacity", function() { return setTicketsTempSharedCapacity; });
__webpack_require__.d(ticket_actions_namespaceObject, "fetchTicketsHeaderImage", function() { return actions_fetchTicketsHeaderImage; });
__webpack_require__.d(ticket_actions_namespaceObject, "updateTicketsHeaderImage", function() { return actions_updateTicketsHeaderImage; });
__webpack_require__.d(ticket_actions_namespaceObject, "deleteTicketsHeaderImage", function() { return actions_deleteTicketsHeaderImage; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketTitle", function() { return setTicketTitle; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketDescription", function() { return setTicketDescription; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketPrice", function() { return setTicketPrice; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketSku", function() { return setTicketSku; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketIACSetting", function() { return setTicketIACSetting; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketStartDate", function() { return setTicketStartDate; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketStartDateInput", function() { return setTicketStartDateInput; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketStartDateMoment", function() { return setTicketStartDateMoment; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketEndDate", function() { return setTicketEndDate; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketEndDateInput", function() { return setTicketEndDateInput; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketEndDateMoment", function() { return setTicketEndDateMoment; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketStartTime", function() { return setTicketStartTime; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketEndTime", function() { return setTicketEndTime; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketStartTimeInput", function() { return setTicketStartTimeInput; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketEndTimeInput", function() { return setTicketEndTimeInput; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketCapacityType", function() { return setTicketCapacityType; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketCapacity", function() { return setTicketCapacity; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketTempTitle", function() { return setTicketTempTitle; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketTempDescription", function() { return setTicketTempDescription; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketTempPrice", function() { return setTicketTempPrice; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketTempSku", function() { return setTicketTempSku; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketTempIACSetting", function() { return setTicketTempIACSetting; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketTempStartDate", function() { return setTicketTempStartDate; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketTempStartDateInput", function() { return setTicketTempStartDateInput; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketTempStartDateMoment", function() { return setTicketTempStartDateMoment; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketTempEndDate", function() { return setTicketTempEndDate; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketTempEndDateInput", function() { return setTicketTempEndDateInput; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketTempEndDateMoment", function() { return setTicketTempEndDateMoment; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketTempStartTime", function() { return setTicketTempStartTime; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketTempEndTime", function() { return setTicketTempEndTime; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketTempStartTimeInput", function() { return setTicketTempStartTimeInput; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketTempEndTimeInput", function() { return setTicketTempEndTimeInput; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketTempCapacityType", function() { return setTicketTempCapacityType; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketTempCapacity", function() { return setTicketTempCapacity; });
__webpack_require__.d(ticket_actions_namespaceObject, "registerTicketBlock", function() { return registerTicketBlock; });
__webpack_require__.d(ticket_actions_namespaceObject, "removeTicketBlock", function() { return actions_removeTicketBlock; });
__webpack_require__.d(ticket_actions_namespaceObject, "removeTicketBlocks", function() { return removeTicketBlocks; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketSold", function() { return setTicketSold; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketAvailable", function() { return setTicketAvailable; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketId", function() { return setTicketId; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketCurrencySymbol", function() { return setTicketCurrencySymbol; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketCurrencyPosition", function() { return setTicketCurrencyPosition; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketProvider", function() { return setTicketProvider; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketHasAttendeeInfoFields", function() { return setTicketHasAttendeeInfoFields; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketAttendeeInfoFields", function() { return setTicketAttendeeInfoFields; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketIsLoading", function() { return setTicketIsLoading; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketIsModalOpen", function() { return setTicketIsModalOpen; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketHasBeenCreated", function() { return setTicketHasBeenCreated; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketHasChanges", function() { return setTicketHasChanges; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketHasDurationError", function() { return setTicketHasDurationError; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketIsSelected", function() { return setTicketIsSelected; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketDetails", function() { return actions_setTicketDetails; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketTempDetails", function() { return actions_setTicketTempDetails; });
__webpack_require__.d(ticket_actions_namespaceObject, "handleTicketStartDate", function() { return actions_handleTicketStartDate; });
__webpack_require__.d(ticket_actions_namespaceObject, "handleTicketEndDate", function() { return actions_handleTicketEndDate; });
__webpack_require__.d(ticket_actions_namespaceObject, "handleTicketStartTime", function() { return actions_handleTicketStartTime; });
__webpack_require__.d(ticket_actions_namespaceObject, "handleTicketEndTime", function() { return actions_handleTicketEndTime; });
__webpack_require__.d(ticket_actions_namespaceObject, "fetchTicket", function() { return actions_fetchTicket; });
__webpack_require__.d(ticket_actions_namespaceObject, "createNewTicket", function() { return actions_createNewTicket; });
__webpack_require__.d(ticket_actions_namespaceObject, "updateTicket", function() { return actions_updateTicket; });
__webpack_require__.d(ticket_actions_namespaceObject, "deleteTicket", function() { return actions_deleteTicket; });
__webpack_require__.d(ticket_actions_namespaceObject, "setTicketInitialState", function() { return actions_setTicketInitialState; });

// NAMESPACE OBJECT: ./src/modules/data/index.js
var data_namespaceObject = {};
__webpack_require__.r(data_namespaceObject);
__webpack_require__.d(data_namespaceObject, "initStore", function() { return initStore; });
__webpack_require__.d(data_namespaceObject, "getStore", function() { return getStore; });

// NAMESPACE OBJECT: ./src/modules/icons/index.js
var icons_namespaceObject = {};
__webpack_require__.r(icons_namespaceObject);
__webpack_require__.d(icons_namespaceObject, "ClockActive", function() { return clock; });
__webpack_require__.d(icons_namespaceObject, "ClockInactive", function() { return inactive_clock; });
__webpack_require__.d(icons_namespaceObject, "ARF", function() { return attendee_registration; });
__webpack_require__.d(icons_namespaceObject, "SaleWindow", function() { return sale_window; });
__webpack_require__.d(icons_namespaceObject, "Tickets", function() { return icons_tickets; });
__webpack_require__.d(icons_namespaceObject, "TicketActive", function() { return active_ticket; });
__webpack_require__.d(icons_namespaceObject, "TicketInactive", function() { return inactive_ticket; });
__webpack_require__.d(icons_namespaceObject, "RSVP", function() { return icons_rsvp; });
__webpack_require__.d(icons_namespaceObject, "RSVPActive", function() { return active_rsvp; });
__webpack_require__.d(icons_namespaceObject, "RSVPInactive", function() { return inactive_rsvp; });
__webpack_require__.d(icons_namespaceObject, "AttendeesGravatar", function() { return gravatar; });
__webpack_require__.d(icons_namespaceObject, "Attendees", function() { return icons_attendees; });
__webpack_require__.d(icons_namespaceObject, "Orders", function() { return orders; });
__webpack_require__.d(icons_namespaceObject, "Settings", function() { return icons_settings; });
__webpack_require__.d(icons_namespaceObject, "Close", function() { return icons_close; });

// NAMESPACE OBJECT: ./src/modules/elements/index.js
var elements_namespaceObject = {};
__webpack_require__.r(elements_namespaceObject);
__webpack_require__.d(elements_namespaceObject, "ActionButton", function() { return action_button; });
__webpack_require__.d(elements_namespaceObject, "ActionDashboard", function() { return action_dashboard; });
__webpack_require__.d(elements_namespaceObject, "AttendeesRegistration", function() { return attendees_registration; });
__webpack_require__.d(elements_namespaceObject, "Card", function() { return card; });
__webpack_require__.d(elements_namespaceObject, "SplitContainer", function() { return split_container; });
__webpack_require__.d(elements_namespaceObject, "ContainerPanel", function() { return container_panel; });
__webpack_require__.d(elements_namespaceObject, "DateTimeRangePicker", function() { return date_time_range_picker; });
__webpack_require__.d(elements_namespaceObject, "IconWithTooltip", function() { return icon_with_tooltip; });
__webpack_require__.d(elements_namespaceObject, "LabelWithTooltip", function() { return label_with_tooltip; });
__webpack_require__.d(elements_namespaceObject, "NumericLabel", function() { return numeric_label; });
__webpack_require__.d(elements_namespaceObject, "InactiveBlock", function() { return inactive_block; });
__webpack_require__.d(elements_namespaceObject, "SettingsDashboard", function() { return settings_dashboard; });
__webpack_require__.d(elements_namespaceObject, "WarningButton", function() { return warning_button; });

// NAMESPACE OBJECT: ./src/modules/blocks/index.js
var modules_blocks_namespaceObject = {};
__webpack_require__.r(modules_blocks_namespaceObject);
__webpack_require__.d(modules_blocks_namespaceObject, "default", function() { return modules_blocks; });

// EXTERNAL MODULE: external "wp.blocks"
var external_wp_blocks_ = __webpack_require__("HSyU");

// EXTERNAL MODULE: external "tribe.modules.redux"
var external_tribe_modules_redux_ = __webpack_require__("rKB8");

// CONCATENATED MODULE: ./src/modules/data/utils.js
const PREFIX_TICKETS_STORE = '@@MT/TICKETS';
const RSVP_POST_TYPE = 'tribe_rsvp_tickets';

/**
 * @todo: these are expected to change based on BE changes
 */
const KEY_RSVP_FOR_EVENT = '_tribe_rsvp_for_event';
const KEY_TICKET_SHOW_DESCRIPTION = '_tribe_ticket_show_description';
const KEY_PRICE = '_price';
const KEY_TICKET_CAPACITY = '_tribe_ticket_capacity';
const KEY_TICKET_START_DATE = '_ticket_start_date';
const KEY_TICKET_END_DATE = '_ticket_end_date';
const KEY_TICKET_SHOW_NOT_GOING = '_tribe_ticket_show_not_going';
const KEY_TICKET_HEADER = '_tribe_ticket_header';
const KEY_TICKET_DEFAULT_PROVIDER = '_tribe_default_ticket_provider';
const KEY_TICKETS_LIST = '_tribe_tickets_list';
const KEY_TICKET_GOING_COUNT = '_tribe_ticket_going_count';
const KEY_TICKET_NOT_GOING_COUNT = '_tribe_ticket_not_going_count';
const KEY_TICKET_HAS_ATTENDEE_INFO_FIELDS = '_tribe_ticket_has_attendee_info_fields';
// CONCATENATED MODULE: ./src/modules/data/blocks/rsvp/types.js
/* eslint-disable max-len */
/**
 * Internal dependencies
 */


//
// ─── RSVP TYPES ─────────────────────────────────────────────────────────────────
//

const SET_RSVP_ID = `${PREFIX_TICKETS_STORE}/SET_RSVP_ID`;
const SET_RSVP_SETTINGS_OPEN = `${PREFIX_TICKETS_STORE}/SET_RSVP_SETTINGS_OPEN`;
const SET_RSVP_HAS_CHANGES = `${PREFIX_TICKETS_STORE}/SET_RSVP_HAS_CHANGES`;
const SET_RSVP_IS_LOADING = `${PREFIX_TICKETS_STORE}/SET_RSVP_IS_LOADING`;
const SET_RSVP_IS_SETTINGS_LOADING = `${PREFIX_TICKETS_STORE}/SET_RSVP_IS_SETTINGS_LOADING`;
const SET_RSVP_IS_MODAL_OPEN = `${PREFIX_TICKETS_STORE}/SET_RSVP_IS_MODAL_OPEN`;
const SET_RSVP_GOING_COUNT = `${PREFIX_TICKETS_STORE}/SET_RSVP_GOING_COUNT`;
const SET_RSVP_NOT_GOING_COUNT = `${PREFIX_TICKETS_STORE}/SET_RSVP_NOT_GOING_COUNT`;
const SET_RSVP_HAS_ATTENDEE_INFO_FIELDS = `${PREFIX_TICKETS_STORE}/SET_RSVP_HAS_ATTENDEE_INFO_FIELDS`;
const SET_RSVP_HAS_DURATION_ERROR = `${PREFIX_TICKETS_STORE}/SET_RSVP_HAS_DURATION_ERROR`;
const SET_RSVP_IS_ADD_EDIT_OPEN = `${PREFIX_TICKETS_STORE}/SET_RSVP_IS_ADD_EDIT_OPEN`;
const SET_RSVP_DETAILS = `${PREFIX_TICKETS_STORE}/SET_RSVP_DETAILS`;
const SET_RSVP_TEMP_DETAILS = `${PREFIX_TICKETS_STORE}/SET_RSVP_TEMP_DETAILS`;
const SET_RSVP_HEADER_IMAGE = `${PREFIX_TICKETS_STORE}/SET_RSVP_HEADER_IMAGE`;

//
// ─── RSVP DETAILS TYPES ─────────────────────────────────────────────────────────
//

const SET_RSVP_TITLE = `${PREFIX_TICKETS_STORE}/SET_RSVP_TITLE`;
const SET_RSVP_DESCRIPTION = `${PREFIX_TICKETS_STORE}/SET_RSVP_DESCRIPTION`;
const SET_RSVP_CAPACITY = `${PREFIX_TICKETS_STORE}/SET_RSVP_CAPACITY`;
const SET_RSVP_NOT_GOING_RESPONSES = `${PREFIX_TICKETS_STORE}/SET_RSVP_NOT_GOING_RESPONSES`;
const SET_RSVP_START_DATE = `${PREFIX_TICKETS_STORE}/SET_RSVP_START_DATE`;
const SET_RSVP_START_DATE_INPUT = `${PREFIX_TICKETS_STORE}/SET_RSVP_START_DATE_INPUT`;
const SET_RSVP_START_DATE_MOMENT = `${PREFIX_TICKETS_STORE}/SET_RSVP_START_DATE_MOMENT`;
const SET_RSVP_END_DATE = `${PREFIX_TICKETS_STORE}/SET_RSVP_END_DATE`;
const SET_RSVP_END_DATE_INPUT = `${PREFIX_TICKETS_STORE}/SET_RSVP_END_DATE_INPUT`;
const SET_RSVP_END_DATE_MOMENT = `${PREFIX_TICKETS_STORE}/SET_RSVP_END_DATE_MOMENT`;
const SET_RSVP_START_TIME = `${PREFIX_TICKETS_STORE}/SET_RSVP_START_TIME`;
const SET_RSVP_END_TIME = `${PREFIX_TICKETS_STORE}/SET_RSVP_END_TIME`;
const SET_RSVP_START_TIME_INPUT = `${PREFIX_TICKETS_STORE}/SET_RSVP_START_TIME_INPUT`;
const SET_RSVP_END_TIME_INPUT = `${PREFIX_TICKETS_STORE}/SET_RSVP_END_TIME_INPUT`;

//
// ─── RSVP TEMP DETAILS TYPES ────────────────────────────────────────────────────
//

const SET_RSVP_TEMP_TITLE = `${PREFIX_TICKETS_STORE}/SET_RSVP_TEMP_TITLE`;
const SET_RSVP_TEMP_DESCRIPTION = `${PREFIX_TICKETS_STORE}/SET_RSVP_TEMP_DESCRIPTION`;
const SET_RSVP_TEMP_CAPACITY = `${PREFIX_TICKETS_STORE}/SET_RSVP_TEMP_CAPACITY`;
const SET_RSVP_TEMP_NOT_GOING_RESPONSES = `${PREFIX_TICKETS_STORE}/SET_RSVP_TEMP_NOT_GOING_RESPONSES`;
const SET_RSVP_TEMP_START_DATE = `${PREFIX_TICKETS_STORE}/SET_RSVP_TEMP_START_DATE`;
const SET_RSVP_TEMP_START_DATE_INPUT = `${PREFIX_TICKETS_STORE}/SET_RSVP_TEMP_START_DATE_INPUT`;
const SET_RSVP_TEMP_START_DATE_MOMENT = `${PREFIX_TICKETS_STORE}/SET_RSVP_TEMP_START_DATE_MOMENT`;
const SET_RSVP_TEMP_END_DATE = `${PREFIX_TICKETS_STORE}/SET_RSVP_TEMP_END_DATE`;
const SET_RSVP_TEMP_END_DATE_INPUT = `${PREFIX_TICKETS_STORE}/SET_RSVP_TEMP_END_DATE_INPUT`;
const SET_RSVP_TEMP_END_DATE_MOMENT = `${PREFIX_TICKETS_STORE}/SET_RSVP_TEMP_END_DATE_MOMENT`;
const SET_RSVP_TEMP_START_TIME = `${PREFIX_TICKETS_STORE}/SET_RSVP_TEMP_START_TIME`;
const SET_RSVP_TEMP_END_TIME = `${PREFIX_TICKETS_STORE}/SET_RSVP_TEMP_END_TIME`;
const SET_RSVP_TEMP_START_TIME_INPUT = `${PREFIX_TICKETS_STORE}/SET_RSVP_TEMP_START_TIME_INPUT`;
const SET_RSVP_TEMP_END_TIME_INPUT = `${PREFIX_TICKETS_STORE}/SET_RSVP_TEMP_END_TIME_INPUT`;

//
// ─── RSVP THUNK & SAGA TYPES ────────────────────────────────────────────────────
//

const CREATE_RSVP = `${PREFIX_TICKETS_STORE}/CREATE_RSVP`;
const INITIALIZE_RSVP = `${PREFIX_TICKETS_STORE}/INITIALIZE_RSVP`;
const DELETE_RSVP = `${PREFIX_TICKETS_STORE}/DELETE_RSVP`;
const HANDLE_RSVP_START_DATE = `${PREFIX_TICKETS_STORE}/HANDLE_RSVP_START_DATE`;
const HANDLE_RSVP_END_DATE = `${PREFIX_TICKETS_STORE}/HANDLE_RSVP_END_DATE`;
const HANDLE_RSVP_START_TIME = `${PREFIX_TICKETS_STORE}/HANDLE_RSVP_START_TIME`;
const HANDLE_RSVP_END_TIME = `${PREFIX_TICKETS_STORE}/HANDLE_RSVP_END_TIME`;
const FETCH_RSVP_HEADER_IMAGE = `${PREFIX_TICKETS_STORE}/FETCH_RSVP_HEADER_IMAGE`;
const UPDATE_RSVP_HEADER_IMAGE = `${PREFIX_TICKETS_STORE}/UPDATE_RSVP_HEADER_IMAGE`;
const DELETE_RSVP_HEADER_IMAGE = `${PREFIX_TICKETS_STORE}/DELETE_RSVP_HEADER_IMAGE`;
// CONCATENATED MODULE: ./src/modules/data/blocks/rsvp/actions.js
/**
 * Internal dependencies
 */


//
// ─── RSVP ACTIONS ───────────────────────────────────────────────────────────────
//

const setRSVPId = id => ({
  type: types_namespaceObject.SET_RSVP_ID,
  payload: {
    id
  }
});
const setRSVPSettingsOpen = settingsOpen => ({
  type: types_namespaceObject.SET_RSVP_SETTINGS_OPEN,
  payload: {
    settingsOpen
  }
});
const setRSVPIsAddEditOpen = isAddEditOpen => ({
  type: types_namespaceObject.SET_RSVP_IS_ADD_EDIT_OPEN,
  payload: {
    isAddEditOpen
  }
});
const setRSVPHasChanges = hasChanges => ({
  type: types_namespaceObject.SET_RSVP_HAS_CHANGES,
  payload: {
    hasChanges
  }
});
const setRSVPIsLoading = isLoading => ({
  type: types_namespaceObject.SET_RSVP_IS_LOADING,
  payload: {
    isLoading
  }
});
const setRSVPIsSettingsLoading = isSettingsLoading => ({
  type: types_namespaceObject.SET_RSVP_IS_SETTINGS_LOADING,
  payload: {
    isSettingsLoading
  }
});
const setRSVPIsModalOpen = isModalOpen => ({
  type: types_namespaceObject.SET_RSVP_IS_MODAL_OPEN,
  payload: {
    isModalOpen
  }
});
const setRSVPGoingCount = goingCount => ({
  type: types_namespaceObject.SET_RSVP_GOING_COUNT,
  payload: {
    goingCount
  }
});
const setRSVPNotGoingCount = notGoingCount => ({
  type: types_namespaceObject.SET_RSVP_NOT_GOING_COUNT,
  payload: {
    notGoingCount
  }
});
const setRSVPHasAttendeeInfoFields = hasAttendeeInfoFields => ({
  type: types_namespaceObject.SET_RSVP_HAS_ATTENDEE_INFO_FIELDS,
  payload: {
    hasAttendeeInfoFields
  }
});
const setRSVPHasDurationError = hasDurationError => ({
  type: types_namespaceObject.SET_RSVP_HAS_DURATION_ERROR,
  payload: {
    hasDurationError
  }
});
const setRSVPDetails = payload => ({
  type: types_namespaceObject.SET_RSVP_DETAILS,
  payload
});
const setRSVPTempDetails = payload => ({
  type: types_namespaceObject.SET_RSVP_TEMP_DETAILS,
  payload
});
const setRSVPHeaderImage = payload => ({
  type: types_namespaceObject.SET_RSVP_HEADER_IMAGE,
  payload
});

//
// ─── RSVP DETAILS ACTIONS ───────────────────────────────────────────────────────
//

const setRSVPTitle = title => ({
  type: types_namespaceObject.SET_RSVP_TITLE,
  payload: {
    title
  }
});
const setRSVPDescription = description => ({
  type: types_namespaceObject.SET_RSVP_DESCRIPTION,
  payload: {
    description
  }
});
const setRSVPCapacity = capacity => ({
  type: types_namespaceObject.SET_RSVP_CAPACITY,
  payload: {
    capacity
  }
});
const setRSVPNotGoingResponses = notGoingResponses => ({
  type: types_namespaceObject.SET_RSVP_NOT_GOING_RESPONSES,
  payload: {
    notGoingResponses
  }
});
const setRSVPStartDate = startDate => ({
  type: types_namespaceObject.SET_RSVP_START_DATE,
  payload: {
    startDate
  }
});
const setRSVPStartDateInput = startDateInput => ({
  type: types_namespaceObject.SET_RSVP_START_DATE_INPUT,
  payload: {
    startDateInput
  }
});
const setRSVPStartDateMoment = startDateMoment => ({
  type: types_namespaceObject.SET_RSVP_START_DATE_MOMENT,
  payload: {
    startDateMoment
  }
});
const setRSVPEndDate = endDate => ({
  type: types_namespaceObject.SET_RSVP_END_DATE,
  payload: {
    endDate
  }
});
const setRSVPEndDateInput = endDateInput => ({
  type: types_namespaceObject.SET_RSVP_END_DATE_INPUT,
  payload: {
    endDateInput
  }
});
const setRSVPEndDateMoment = endDateMoment => ({
  type: types_namespaceObject.SET_RSVP_END_DATE_MOMENT,
  payload: {
    endDateMoment
  }
});
const setRSVPStartTime = startTime => ({
  type: types_namespaceObject.SET_RSVP_START_TIME,
  payload: {
    startTime
  }
});
const setRSVPEndTime = endTime => ({
  type: types_namespaceObject.SET_RSVP_END_TIME,
  payload: {
    endTime
  }
});
const setRSVPStartTimeInput = startTimeInput => ({
  type: types_namespaceObject.SET_RSVP_START_TIME_INPUT,
  payload: {
    startTimeInput
  }
});
const setRSVPEndTimeInput = endTimeInput => ({
  type: types_namespaceObject.SET_RSVP_END_TIME_INPUT,
  payload: {
    endTimeInput
  }
});

//
// ─── RSVP TEMP DETAILS ACTIONS ──────────────────────────────────────────────────
//

const setRSVPTempTitle = title => ({
  type: types_namespaceObject.SET_RSVP_TEMP_TITLE,
  payload: {
    title
  }
});
const setRSVPTempDescription = description => ({
  type: types_namespaceObject.SET_RSVP_TEMP_DESCRIPTION,
  payload: {
    description
  }
});
const setRSVPTempCapacity = capacity => ({
  type: types_namespaceObject.SET_RSVP_TEMP_CAPACITY,
  payload: {
    capacity
  }
});
const setRSVPTempNotGoingResponses = notGoingResponses => ({
  type: types_namespaceObject.SET_RSVP_TEMP_NOT_GOING_RESPONSES,
  payload: {
    notGoingResponses
  }
});
const setRSVPTempStartDate = startDate => ({
  type: types_namespaceObject.SET_RSVP_TEMP_START_DATE,
  payload: {
    startDate
  }
});
const setRSVPTempStartDateInput = startDateInput => ({
  type: types_namespaceObject.SET_RSVP_TEMP_START_DATE_INPUT,
  payload: {
    startDateInput
  }
});
const setRSVPTempStartDateMoment = startDateMoment => ({
  type: types_namespaceObject.SET_RSVP_TEMP_START_DATE_MOMENT,
  payload: {
    startDateMoment
  }
});
const setRSVPTempEndDate = endDate => ({
  type: types_namespaceObject.SET_RSVP_TEMP_END_DATE,
  payload: {
    endDate
  }
});
const setRSVPTempEndDateInput = endDateInput => ({
  type: types_namespaceObject.SET_RSVP_TEMP_END_DATE_INPUT,
  payload: {
    endDateInput
  }
});
const setRSVPTempEndDateMoment = endDateMoment => ({
  type: types_namespaceObject.SET_RSVP_TEMP_END_DATE_MOMENT,
  payload: {
    endDateMoment
  }
});
const setRSVPTempStartTime = startTime => ({
  type: types_namespaceObject.SET_RSVP_TEMP_START_TIME,
  payload: {
    startTime
  }
});
const setRSVPTempEndTime = endTime => ({
  type: types_namespaceObject.SET_RSVP_TEMP_END_TIME,
  payload: {
    endTime
  }
});
const setRSVPTempStartTimeInput = startTimeInput => ({
  type: types_namespaceObject.SET_RSVP_TEMP_START_TIME_INPUT,
  payload: {
    startTimeInput
  }
});
const setRSVPTempEndTimeInput = endTimeInput => ({
  type: types_namespaceObject.SET_RSVP_TEMP_END_TIME_INPUT,
  payload: {
    endTimeInput
  }
});

//
// ─── RSVP THUNK & SAGA ACTIONS ──────────────────────────────────────────────────
//

const createRSVP = () => ({
  type: types_namespaceObject.CREATE_RSVP
});
const actions_initializeRSVP = () => ({
  type: types_namespaceObject.INITIALIZE_RSVP
});
const deleteRSVP = () => ({
  type: types_namespaceObject.DELETE_RSVP
});
const handleRSVPStartDate = payload => ({
  type: types_namespaceObject.HANDLE_RSVP_START_DATE,
  payload
});
const handleRSVPEndDate = payload => ({
  type: types_namespaceObject.HANDLE_RSVP_END_DATE,
  payload
});
const handleRSVPStartTime = seconds => ({
  type: types_namespaceObject.HANDLE_RSVP_START_TIME,
  payload: {
    seconds
  }
});
const handleRSVPEndTime = seconds => ({
  type: types_namespaceObject.HANDLE_RSVP_END_TIME,
  payload: {
    seconds
  }
});
const fetchRSVPHeaderImage = id => ({
  type: types_namespaceObject.FETCH_RSVP_HEADER_IMAGE,
  payload: {
    id
  }
});
const updateRSVPHeaderImage = image => ({
  type: types_namespaceObject.UPDATE_RSVP_HEADER_IMAGE,
  payload: {
    image
  }
});
const deleteRSVPHeaderImage = () => ({
  type: types_namespaceObject.DELETE_RSVP_HEADER_IMAGE
});
// EXTERNAL MODULE: external "tribe.modules.reselect"
var external_tribe_modules_reselect_ = __webpack_require__("MWqi");

// CONCATENATED MODULE: ./src/modules/data/blocks/rsvp/selectors.js
/**
 * External dependencies
 */


/**
 * ------------------------------------------------------------
 * RSVP State
 * ------------------------------------------------------------
 */

const getRSVPBlock = state => state.tickets.blocks.rsvp;
const getRSVPId = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPBlock], rsvp => rsvp.id);
const getRSVPCreated = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPBlock], rsvp => rsvp.created);
const getRSVPSettingsOpen = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPBlock], rsvp => rsvp.settingsOpen);
const getRSVPIsAddEditOpen = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPBlock], rsvp => rsvp.isAddEditOpen);
const getRSVPHasChanges = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPBlock], rsvp => rsvp.hasChanges);
const getRSVPIsLoading = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPBlock], rsvp => rsvp.isLoading);
const getRSVPIsSettingsLoading = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPBlock], rsvp => rsvp.isSettingsLoading);
const getRSVPIsModalOpen = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPBlock], rsvp => rsvp.isModalOpen);
const getRSVPGoingCount = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPBlock], rsvp => rsvp.goingCount);
const getRSVPNotGoingCount = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPBlock], rsvp => rsvp.notGoingCount);
const getRSVPHasAttendeeInfoFields = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPBlock], rsvp => rsvp.hasAttendeeInfoFields);
const getRSVPHasDurationError = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPBlock], rsvp => rsvp.hasDurationError);

/**
 * ------------------------------------------------------------
 * RSVP Details
 * ------------------------------------------------------------
 */
const getRSVPDetails = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPBlock], rsvp => rsvp.details);
const getRSVPTitle = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPDetails], details => details.title);
const getRSVPDescription = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPDetails], details => details.description);
const getRSVPCapacity = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPDetails], details => details.capacity);
const getRSVPAvailable = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPCapacity, getRSVPGoingCount], (capacity, goingCount) => {
  if (capacity === '') {
    return -1;
  }
  const total = parseInt(capacity, 10) || 0;
  const going = parseInt(goingCount, 10) || 0;
  /**
   * Prevent to have negative values when subtracting the going amount from total amount, so it takes the max value
   * of the substraction operation or zero if the operation is lower than zero it will return zero insted.
   */
  return Math.max(total - going, 0);
});
const getRSVPNotGoingResponses = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPDetails], details => details.notGoingResponses);
const getRSVPStartDate = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPDetails], details => details.startDate);
const getRSVPStartDateInput = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPDetails], details => details.startDateInput);
const getRSVPStartDateMoment = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPDetails], details => details.startDateMoment);
const getRSVPStartTime = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPDetails], details => details.startTime);
const getRSVPStartTimeNoSeconds = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPStartTime], startTime => startTime.slice(0, -3));
const getRSVPEndDate = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPDetails], details => details.endDate);
const getRSVPEndDateInput = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPDetails], details => details.endDateInput);
const getRSVPEndDateMoment = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPDetails], details => details.endDateMoment);
const getRSVPEndTime = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPDetails], details => details.endTime);
const getRSVPEndTimeNoSeconds = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPEndTime], endTime => endTime.slice(0, -3));
const getRSVPStartTimeInput = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPDetails], details => details.startTimeInput);
const getRSVPEndTimeInput = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPDetails], details => details.endTimeInput);

/**
 * ------------------------------------------------------------
 * RSVP Temp Details
 * ------------------------------------------------------------
 */
const getRSVPTempDetails = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPBlock], rsvp => rsvp.tempDetails);
const getRSVPTempTitle = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPTempDetails], tempDetails => tempDetails.title);
const getRSVPTempDescription = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPTempDetails], tempDetails => tempDetails.description);
const getRSVPTempCapacity = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPTempDetails], tempDetails => tempDetails.capacity);
const getRSVPTempNotGoingResponses = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPTempDetails], tempDetails => tempDetails.notGoingResponses);
const getRSVPTempStartDate = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPTempDetails], tempDetails => tempDetails.startDate);
const getRSVPTempStartDateInput = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPTempDetails], tempDetails => tempDetails.startDateInput);
const getRSVPTempStartDateMoment = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPTempDetails], tempDetails => tempDetails.startDateMoment);
const getRSVPTempStartTime = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPTempDetails], tempDetails => tempDetails.startTime);
const getRSVPTempStartTimeNoSeconds = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPTempStartTime], startTime => startTime.slice(0, -3));
const getRSVPTempEndDate = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPTempDetails], tempDetails => tempDetails.endDate);
const getRSVPTempEndDateInput = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPTempDetails], tempDetails => tempDetails.endDateInput);
const getRSVPTempEndDateMoment = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPTempDetails], tempDetails => tempDetails.endDateMoment);
const getRSVPTempEndTime = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPTempDetails], tempDetails => tempDetails.endTime);
const getRSVPTempEndTimeNoSeconds = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPTempEndTime], endTime => endTime.slice(0, -3));
const getRSVPTempStartTimeInput = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPTempDetails], tempDetails => tempDetails.startTimeInput);
const getRSVPTempEndTimeInput = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPTempDetails], tempDetails => tempDetails.endTimeInput);

/**
 * ------------------------------------------------------------
 * RSVP Header Image
 * ------------------------------------------------------------
 */
const getRSVPHeaderImage = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPBlock], rsvp => rsvp.headerImage);
const getRSVPHeaderImageId = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPHeaderImage], headerImage => headerImage.id);
const getRSVPHeaderImageSrc = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPHeaderImage], headerImage => headerImage.src);
const getRSVPHeaderImageAlt = Object(external_tribe_modules_reselect_["createSelector"])([getRSVPHeaderImage], headerImage => headerImage.alt);
// EXTERNAL MODULE: external "tribe.common.store"
var external_tribe_common_store_ = __webpack_require__("g8L8");

// EXTERNAL MODULE: external "tribe.common.utils"
var external_tribe_common_utils_ = __webpack_require__("B8vQ");

// CONCATENATED MODULE: ./src/modules/data/blocks/rsvp/thunks.js
/**
 * Internal dependencies
 */




const {
  request: {
    actions: wpRequestActions
  }
} = external_tribe_common_store_["middlewares"];

/**
 * @todo: until we can abstract out wpRequest() better, these should remain as a thunk
 */
const METHODS = {
  DELETE: 'DELETE',
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT'
};
const createOrUpdateRSVP = method => payload => dispatch => {
  const {
    title,
    description,
    capacity,
    notGoingResponses,
    startDateMoment,
    startTime,
    endDateMoment,
    endTime
  } = payload;
  const startMoment = startDateMoment.clone().startOf('day').seconds(external_tribe_common_utils_["time"].toSeconds(startTime, external_tribe_common_utils_["time"].TIME_FORMAT_HH_MM_SS));
  const endMoment = endDateMoment.clone().startOf('day').seconds(external_tribe_common_utils_["time"].toSeconds(endTime, external_tribe_common_utils_["time"].TIME_FORMAT_HH_MM_SS));
  let path = `${RSVP_POST_TYPE}`;
  const reqBody = {
    title,
    excerpt: description,
    meta: {
      [KEY_TICKET_CAPACITY]: capacity,
      [KEY_TICKET_START_DATE]: external_tribe_common_utils_["moment"].toDateTime(startMoment),
      [KEY_TICKET_END_DATE]: external_tribe_common_utils_["moment"].toDateTime(endMoment),
      [KEY_TICKET_SHOW_NOT_GOING]: notGoingResponses
    }
  };
  if (method === METHODS.POST) {
    reqBody.status = 'publish';
    reqBody.meta[KEY_RSVP_FOR_EVENT] = `${payload.postId}`;
    /* This is hardcoded value until we can sort out BE */
    reqBody.meta[KEY_TICKET_SHOW_DESCRIPTION] = 'yes';
    /* This is hardcoded value until we can sort out BE */
    reqBody.meta[KEY_PRICE] = '0';
  } else if (method === METHODS.PUT) {
    path += `/${payload.id}`;
  }
  const options = {
    path,
    params: {
      method,
      body: JSON.stringify(reqBody)
    },
    actions: {
      start: () => dispatch(setRSVPIsLoading(true)),
      success: _ref => {
        let {
          body
        } = _ref;
        if (method === METHODS.POST) {
          dispatch(createRSVP());
          dispatch(setRSVPId(body.id));
        }
        dispatch(setRSVPDetails(payload));
        dispatch(setRSVPHasChanges(false));
        dispatch(setRSVPIsLoading(false));
      },
      error: () => dispatch(setRSVPIsLoading(false))
    }
  };
  dispatch(wpRequestActions.wpRequest(options));
};
const thunks_createRSVP = createOrUpdateRSVP(METHODS.POST);
const updateRSVP = createOrUpdateRSVP(METHODS.PUT);
const thunks_deleteRSVP = id => dispatch => {
  const path = `${RSVP_POST_TYPE}/${id}`;
  const options = {
    path,
    params: {
      method: METHODS.DELETE
    }
  };
  dispatch(wpRequestActions.wpRequest(options));
};
const getRSVP = function (postId) {
  let page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return dispatch => {
    const path = `${RSVP_POST_TYPE}?per_page=100&page=${page}&context=edit`;
    const options = {
      path,
      params: {
        method: METHODS.GET
      },
      actions: {
        start: () => dispatch(setRSVPIsLoading(true)),
        success: _ref2 => {
          let {
            body,
            headers
          } = _ref2;
          const filteredRSVPs = body.filter(rsvp => rsvp.meta[KEY_RSVP_FOR_EVENT] == postId // eslint-disable-line eqeqeq
          );

          const totalPages = headers.get('x-wp-totalpages');
          if (filteredRSVPs.length) {
            /* If RSVP for event exists in fetched data */
            /**
             * @todo We are currently only fetching the first RSVP.
             *       If an event has more than 1 RSVP set up from
             *       the classic editor, only one will be displayed.
             *       The strategy to handle this is is being worked on.
             */
            const datePickerFormat = external_tribe_common_utils_["globals"].tecDateSettings().datepickerFormat;
            const rsvp = filteredRSVPs[0];
            const {
              meta = {}
            } = rsvp;
            const startMoment = external_tribe_common_utils_["moment"].toMoment(meta[KEY_TICKET_START_DATE]);
            const endMoment = external_tribe_common_utils_["moment"].toMoment(meta[KEY_TICKET_END_DATE]);
            const startDateInput = datePickerFormat ? startMoment.format(external_tribe_common_utils_["moment"].toFormat(datePickerFormat)) : external_tribe_common_utils_["moment"].toDate(startMoment);
            const endDateInput = datePickerFormat ? endMoment.format(external_tribe_common_utils_["moment"].toFormat(datePickerFormat)) : external_tribe_common_utils_["moment"].toDate(endMoment);
            const capacity = meta[KEY_TICKET_CAPACITY] >= 0 ? meta[KEY_TICKET_CAPACITY] : '';
            const notGoingResponses = meta[KEY_TICKET_SHOW_NOT_GOING];
            dispatch(createRSVP());
            dispatch(setRSVPId(rsvp.id));
            dispatch(setRSVPGoingCount(parseInt(meta[KEY_TICKET_GOING_COUNT], 10) || 0));
            dispatch(setRSVPNotGoingCount(parseInt(meta[KEY_TICKET_NOT_GOING_COUNT], 10) || 0));
            dispatch(setRSVPHasAttendeeInfoFields(meta[KEY_TICKET_HAS_ATTENDEE_INFO_FIELDS]));
            dispatch(setRSVPDetails({
              title: rsvp.title.raw,
              description: rsvp.excerpt.raw,
              capacity,
              notGoingResponses,
              startDate: external_tribe_common_utils_["moment"].toDate(startMoment),
              startDateInput,
              startDateMoment: startMoment.clone().startOf('day'),
              endDate: external_tribe_common_utils_["moment"].toDate(endMoment),
              endDateInput,
              endDateMoment: endMoment.clone().seconds(0),
              startTime: external_tribe_common_utils_["moment"].toDatabaseTime(startMoment),
              endTime: external_tribe_common_utils_["moment"].toDatabaseTime(endMoment),
              startTimeInput: external_tribe_common_utils_["moment"].toTime(startMoment),
              endTimeInput: external_tribe_common_utils_["moment"].toTime(endMoment)
            }));
            dispatch(setRSVPTempDetails({
              tempTitle: rsvp.title.raw,
              tempDescription: rsvp.excerpt.raw,
              tempCapacity: capacity,
              tempNotGoingResponses: notGoingResponses,
              tempStartDate: external_tribe_common_utils_["moment"].toDate(startMoment),
              tempStartDateInput: startDateInput,
              tempStartDateMoment: startMoment.clone().startOf('day'),
              tempEndDate: external_tribe_common_utils_["moment"].toDate(endMoment),
              tempEndDateInput: endDateInput,
              tempEndDateMoment: endMoment.clone().seconds(0),
              tempStartTime: external_tribe_common_utils_["moment"].toDatabaseTime(startMoment),
              tempEndTime: external_tribe_common_utils_["moment"].toDatabaseTime(endMoment),
              tempStartTimeInput: external_tribe_common_utils_["moment"].toTime(startMoment),
              tempEndTimeInput: external_tribe_common_utils_["moment"].toTime(endMoment)
            }));
            dispatch(setRSVPIsLoading(false));
          } else if (page < totalPages) {
            /* If there are more pages */
            dispatch(getRSVP(postId, page + 1));
          } else {
            /* Did not find RSVP */
            dispatch(setRSVPIsLoading(false));
          }
        },
        error: () => dispatch(setRSVPIsLoading(false))
      }
    };
    dispatch(wpRequestActions.wpRequest(options));
  };
};
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("lSNA");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./src/modules/data/blocks/rsvp/reducers/details.js

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


const details_datePickerFormat = external_tribe_common_utils_["globals"].tecDateSettings().datepickerFormat;
const details_currentMoment = external_moment_default()();
const bufferDuration = external_tribe_common_utils_["globals"].tickets().end_sale_buffer_duration ? external_tribe_common_utils_["globals"].tickets().end_sale_buffer_duration : 2;
const bufferYears = external_tribe_common_utils_["globals"].tickets().end_sale_buffer_years ? external_tribe_common_utils_["globals"].tickets().end_sale_buffer_years : 1;
const details_endMoment = details_currentMoment.clone().add(bufferDuration, 'hours').add(bufferYears, 'years');
const details_startDateInput = details_datePickerFormat ? details_currentMoment.format(external_tribe_common_utils_["moment"].toFormat(details_datePickerFormat)) : external_tribe_common_utils_["moment"].toDate(details_currentMoment);
const details_endDateInput = details_datePickerFormat ? details_endMoment.format(external_tribe_common_utils_["moment"].toFormat(details_datePickerFormat)) : external_tribe_common_utils_["moment"].toDate(details_endMoment);
const DEFAULT_STATE = {
  title: '',
  description: '',
  capacity: '',
  notGoingResponses: false,
  startDate: external_tribe_common_utils_["moment"].toDatabaseDate(details_currentMoment),
  startDateInput: details_startDateInput,
  startDateMoment: details_currentMoment,
  endDate: external_tribe_common_utils_["moment"].toDatabaseDate(details_endMoment),
  endDateInput: details_endDateInput,
  endDateMoment: details_endMoment,
  startTime: external_tribe_common_utils_["moment"].toDatabaseTime(details_currentMoment),
  endTime: external_tribe_common_utils_["moment"].toDatabaseTime(details_endMoment),
  startTimeInput: external_tribe_common_utils_["moment"].toTime(details_currentMoment),
  endTimeInput: external_tribe_common_utils_["moment"].toTime(details_endMoment)
};
/* harmony default export */ var reducers_details = (function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
  let action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case types_namespaceObject.SET_RSVP_TITLE:
      return _objectSpread(_objectSpread({}, state), {}, {
        title: action.payload.title
      });
    case types_namespaceObject.SET_RSVP_DESCRIPTION:
      return _objectSpread(_objectSpread({}, state), {}, {
        description: action.payload.description
      });
    case types_namespaceObject.SET_RSVP_CAPACITY:
      return _objectSpread(_objectSpread({}, state), {}, {
        capacity: action.payload.capacity
      });
    case types_namespaceObject.SET_RSVP_NOT_GOING_RESPONSES:
      return _objectSpread(_objectSpread({}, state), {}, {
        notGoingResponses: action.payload.notGoingResponses
      });
    case types_namespaceObject.SET_RSVP_START_DATE:
      return _objectSpread(_objectSpread({}, state), {}, {
        startDate: action.payload.startDate
      });
    case types_namespaceObject.SET_RSVP_START_DATE_INPUT:
      return _objectSpread(_objectSpread({}, state), {}, {
        startDateInput: action.payload.startDateInput
      });
    case types_namespaceObject.SET_RSVP_START_DATE_MOMENT:
      return _objectSpread(_objectSpread({}, state), {}, {
        startDateMoment: action.payload.startDateMoment
      });
    case types_namespaceObject.SET_RSVP_END_DATE:
      return _objectSpread(_objectSpread({}, state), {}, {
        endDate: action.payload.endDate
      });
    case types_namespaceObject.SET_RSVP_END_DATE_INPUT:
      return _objectSpread(_objectSpread({}, state), {}, {
        endDateInput: action.payload.endDateInput
      });
    case types_namespaceObject.SET_RSVP_END_DATE_MOMENT:
      return _objectSpread(_objectSpread({}, state), {}, {
        endDateMoment: action.payload.endDateMoment
      });
    case types_namespaceObject.SET_RSVP_START_TIME:
      return _objectSpread(_objectSpread({}, state), {}, {
        startTime: action.payload.startTime
      });
    case types_namespaceObject.SET_RSVP_END_TIME:
      return _objectSpread(_objectSpread({}, state), {}, {
        endTime: action.payload.endTime
      });
    case types_namespaceObject.SET_RSVP_START_TIME_INPUT:
      return _objectSpread(_objectSpread({}, state), {}, {
        startTimeInput: action.payload.startTimeInput
      });
    case types_namespaceObject.SET_RSVP_END_TIME_INPUT:
      return _objectSpread(_objectSpread({}, state), {}, {
        endTimeInput: action.payload.endTimeInput
      });
    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/modules/data/blocks/rsvp/reducers/temp-details.js

function temp_details_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function temp_details_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? temp_details_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : temp_details_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * Internal dependencies
 */


/* harmony default export */ var temp_details = (function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
  let action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case types_namespaceObject.SET_RSVP_TEMP_TITLE:
      return temp_details_objectSpread(temp_details_objectSpread({}, state), {}, {
        title: action.payload.title
      });
    case types_namespaceObject.SET_RSVP_TEMP_DESCRIPTION:
      return temp_details_objectSpread(temp_details_objectSpread({}, state), {}, {
        description: action.payload.description
      });
    case types_namespaceObject.SET_RSVP_TEMP_CAPACITY:
      return temp_details_objectSpread(temp_details_objectSpread({}, state), {}, {
        capacity: action.payload.capacity
      });
    case types_namespaceObject.SET_RSVP_TEMP_NOT_GOING_RESPONSES:
      return temp_details_objectSpread(temp_details_objectSpread({}, state), {}, {
        notGoingResponses: action.payload.notGoingResponses
      });
    case types_namespaceObject.SET_RSVP_TEMP_START_DATE:
      return temp_details_objectSpread(temp_details_objectSpread({}, state), {}, {
        startDate: action.payload.startDate
      });
    case types_namespaceObject.SET_RSVP_TEMP_START_DATE_INPUT:
      return temp_details_objectSpread(temp_details_objectSpread({}, state), {}, {
        startDateInput: action.payload.startDateInput
      });
    case types_namespaceObject.SET_RSVP_TEMP_START_DATE_MOMENT:
      return temp_details_objectSpread(temp_details_objectSpread({}, state), {}, {
        startDateMoment: action.payload.startDateMoment
      });
    case types_namespaceObject.SET_RSVP_TEMP_END_DATE:
      return temp_details_objectSpread(temp_details_objectSpread({}, state), {}, {
        endDate: action.payload.endDate
      });
    case types_namespaceObject.SET_RSVP_TEMP_END_DATE_INPUT:
      return temp_details_objectSpread(temp_details_objectSpread({}, state), {}, {
        endDateInput: action.payload.endDateInput
      });
    case types_namespaceObject.SET_RSVP_TEMP_END_DATE_MOMENT:
      return temp_details_objectSpread(temp_details_objectSpread({}, state), {}, {
        endDateMoment: action.payload.endDateMoment
      });
    case types_namespaceObject.SET_RSVP_TEMP_START_TIME:
      return temp_details_objectSpread(temp_details_objectSpread({}, state), {}, {
        startTime: action.payload.startTime
      });
    case types_namespaceObject.SET_RSVP_TEMP_END_TIME:
      return temp_details_objectSpread(temp_details_objectSpread({}, state), {}, {
        endTime: action.payload.endTime
      });
    case types_namespaceObject.SET_RSVP_TEMP_START_TIME_INPUT:
      return temp_details_objectSpread(temp_details_objectSpread({}, state), {}, {
        startTimeInput: action.payload.startTimeInput
      });
    case types_namespaceObject.SET_RSVP_TEMP_END_TIME_INPUT:
      return temp_details_objectSpread(temp_details_objectSpread({}, state), {}, {
        endTimeInput: action.payload.endTimeInput
      });
    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/modules/data/blocks/rsvp/reducers/header-image.js
/**
 * Internal dependencies
 */


/**
 * Full payload from gutenberg media upload is not used,
 * only id, alt, and src are used for this specific case.
 */
const header_image_DEFAULT_STATE = {
  id: 0,
  src: '',
  alt: ''
};
/* harmony default export */ var header_image = (function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : header_image_DEFAULT_STATE;
  let action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case types_namespaceObject.SET_RSVP_HEADER_IMAGE:
      return {
        id: action.payload.id,
        src: action.payload.src,
        alt: action.payload.alt
      };
    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/modules/data/blocks/rsvp/reducer.js

function reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? reducer_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * Internal dependencies
 */




const reducer_DEFAULT_STATE = {
  id: 0,
  created: false,
  settingsOpen: false,
  hasChanges: false,
  isAddEditOpen: false,
  isLoading: false,
  isSettingsLoading: false,
  isModalOpen: false,
  goingCount: 0,
  notGoingCount: 0,
  hasAttendeeInfoFields: false,
  details: DEFAULT_STATE,
  tempDetails: DEFAULT_STATE,
  headerImage: header_image_DEFAULT_STATE
};
/* harmony default export */ var reducer = (function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : reducer_DEFAULT_STATE;
  let action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case types_namespaceObject.CREATE_RSVP:
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        created: true
      });
    case types_namespaceObject.DELETE_RSVP:
      return reducer_DEFAULT_STATE;
    case types_namespaceObject.SET_RSVP_ID:
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        id: action.payload.id
      });
    case types_namespaceObject.SET_RSVP_SETTINGS_OPEN:
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        settingsOpen: action.payload.settingsOpen
      });
    case types_namespaceObject.SET_RSVP_IS_ADD_EDIT_OPEN:
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        isAddEditOpen: action.payload.isAddEditOpen
      });
    case types_namespaceObject.SET_RSVP_HAS_CHANGES:
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        hasChanges: action.payload.hasChanges
      });
    case types_namespaceObject.SET_RSVP_IS_LOADING:
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        isLoading: action.payload.isLoading
      });
    case types_namespaceObject.SET_RSVP_IS_SETTINGS_LOADING:
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        isSettingsLoading: action.payload.isSettingsLoading
      });
    case types_namespaceObject.SET_RSVP_IS_MODAL_OPEN:
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        isModalOpen: action.payload.isModalOpen
      });
    case types_namespaceObject.SET_RSVP_GOING_COUNT:
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        goingCount: action.payload.goingCount
      });
    case types_namespaceObject.SET_RSVP_NOT_GOING_COUNT:
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        notGoingCount: action.payload.notGoingCount
      });
    case types_namespaceObject.SET_RSVP_HAS_ATTENDEE_INFO_FIELDS:
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        hasAttendeeInfoFields: action.payload.hasAttendeeInfoFields
      });
    case types_namespaceObject.SET_RSVP_HAS_DURATION_ERROR:
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        hasDurationError: action.payload.hasDurationError
      });
    case types_namespaceObject.SET_RSVP_TITLE:
    case types_namespaceObject.SET_RSVP_DESCRIPTION:
    case types_namespaceObject.SET_RSVP_CAPACITY:
    case types_namespaceObject.SET_RSVP_NOT_GOING_RESPONSES:
    case types_namespaceObject.SET_RSVP_START_DATE:
    case types_namespaceObject.SET_RSVP_START_DATE_INPUT:
    case types_namespaceObject.SET_RSVP_START_DATE_MOMENT:
    case types_namespaceObject.SET_RSVP_END_DATE:
    case types_namespaceObject.SET_RSVP_END_DATE_INPUT:
    case types_namespaceObject.SET_RSVP_END_DATE_MOMENT:
    case types_namespaceObject.SET_RSVP_START_TIME:
    case types_namespaceObject.SET_RSVP_END_TIME:
    case types_namespaceObject.SET_RSVP_START_TIME_INPUT:
    case types_namespaceObject.SET_RSVP_END_TIME_INPUT:
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        details: reducers_details(state.details, action)
      });
    case types_namespaceObject.SET_RSVP_TEMP_TITLE:
    case types_namespaceObject.SET_RSVP_TEMP_DESCRIPTION:
    case types_namespaceObject.SET_RSVP_TEMP_CAPACITY:
    case types_namespaceObject.SET_RSVP_TEMP_NOT_GOING_RESPONSES:
    case types_namespaceObject.SET_RSVP_TEMP_START_DATE:
    case types_namespaceObject.SET_RSVP_TEMP_START_DATE_INPUT:
    case types_namespaceObject.SET_RSVP_TEMP_START_DATE_MOMENT:
    case types_namespaceObject.SET_RSVP_TEMP_END_DATE:
    case types_namespaceObject.SET_RSVP_TEMP_END_DATE_INPUT:
    case types_namespaceObject.SET_RSVP_TEMP_END_DATE_MOMENT:
    case types_namespaceObject.SET_RSVP_TEMP_START_TIME:
    case types_namespaceObject.SET_RSVP_TEMP_END_TIME:
    case types_namespaceObject.SET_RSVP_TEMP_START_TIME_INPUT:
    case types_namespaceObject.SET_RSVP_TEMP_END_TIME_INPUT:
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        tempDetails: temp_details(state.tempDetails, action)
      });
    case types_namespaceObject.SET_RSVP_HEADER_IMAGE:
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        headerImage: header_image(state.headerImage, action)
      });
    default:
      return state;
  }
});
// EXTERNAL MODULE: external "wp.data"
var external_wp_data_ = __webpack_require__("1ZqX");

// EXTERNAL MODULE: external "tribe.modules.reduxSaga.effects"
var external_tribe_modules_reduxSaga_effects_ = __webpack_require__("RmXt");

// EXTERNAL MODULE: external "lodash.omit"
var external_lodash_omit_ = __webpack_require__("2TDg");
var external_lodash_omit_default = /*#__PURE__*/__webpack_require__.n(external_lodash_omit_);

// CONCATENATED MODULE: ./src/modules/data/blocks/ticket/types.js
/* eslint-disable max-len */
/**
 * Internal dependencies
 */


//
// ─── TICKETS TYPES ──────────────────────────────────────────────────────────────
//

const SET_TICKETS_INITIAL_STATE = `${PREFIX_TICKETS_STORE}/SET_TICKETS_INITIAL_STATE`;
const RESET_TICKETS_BLOCK = `${PREFIX_TICKETS_STORE}/RESET_TICKETS_BLOCK`;
const SET_TICKETS_HEADER_IMAGE = `${PREFIX_TICKETS_STORE}/SET_TICKETS_HEADER_IMAGE`;
const SET_TICKETS_IS_SELECTED = `${PREFIX_TICKETS_STORE}/SET_TICKETS_IS_SELECTED`;
const SET_TICKETS_IS_SETTINGS_OPEN = `${PREFIX_TICKETS_STORE}/SET_TICKETS_IS_SETTINGS_OPEN`;
const SET_TICKETS_IS_SETTINGS_LOADING = `${PREFIX_TICKETS_STORE}/SET_TICKETS_IS_SETTINGS_LOADING`;
const SET_TICKETS_PROVIDER = `${PREFIX_TICKETS_STORE}/SET_TICKETS_PROVIDER`;
const SET_TICKETS_SHARED_CAPACITY = `${PREFIX_TICKETS_STORE}/SET_TICKETS_SHARED_CAPACITY`;
const SET_TICKETS_TEMP_SHARED_CAPACITY = `${PREFIX_TICKETS_STORE}/SET_TICKETS_TEMP_SHARED_CAPACITY`;

//
// ─── HEADER IMAGE SAGA TYPES ────────────────────────────────────────────────────
//

const FETCH_TICKETS_HEADER_IMAGE = `${PREFIX_TICKETS_STORE}/FETCH_TICKETS_HEADER_IMAGE`;
const UPDATE_TICKETS_HEADER_IMAGE = `${PREFIX_TICKETS_STORE}/UPDATE_TICKETS_HEADER_IMAGE`;
const DELETE_TICKETS_HEADER_IMAGE = `${PREFIX_TICKETS_STORE}/DELETE_TICKETS_HEADER_IMAGE`;

//
// ─── CHILD TICKET TYPES ─────────────────────────────────────────────────────────
//

const REGISTER_TICKET_BLOCK = `${PREFIX_TICKETS_STORE}/REGISTER_TICKET_BLOCK`;
const REMOVE_TICKET_BLOCK = `${PREFIX_TICKETS_STORE}/REMOVE_TICKET_BLOCK`;
const REMOVE_TICKET_BLOCKS = `${PREFIX_TICKETS_STORE}/REMOVE_TICKET_BLOCKS`;
const SET_TICKET_TITLE = `${PREFIX_TICKETS_STORE}/SET_TICKET_TITLE`;
const SET_TICKET_DESCRIPTION = `${PREFIX_TICKETS_STORE}/SET_TICKET_DESCRIPTION`;
const SET_TICKET_PRICE = `${PREFIX_TICKETS_STORE}/SET_TICKET_PRICE`;
const SET_TICKET_SKU = `${PREFIX_TICKETS_STORE}/SET_TICKET_SKU`;
const SET_TICKET_IAC_SETTING = `${PREFIX_TICKETS_STORE}/SET_TICKET_IAC_SETTING`;
const SET_TICKET_START_DATE = `${PREFIX_TICKETS_STORE}/SET_TICKET_START_DATE`;
const SET_TICKET_START_DATE_INPUT = `${PREFIX_TICKETS_STORE}/SET_TICKET_START_DATE_INPUT`;
const SET_TICKET_START_DATE_MOMENT = `${PREFIX_TICKETS_STORE}/SET_TICKET_START_DATE_MOMENT`;
const SET_TICKET_END_DATE = `${PREFIX_TICKETS_STORE}/SET_TICKET_END_DATE`;
const SET_TICKET_END_DATE_INPUT = `${PREFIX_TICKETS_STORE}/SET_TICKET_END_DATE_INPUT`;
const SET_TICKET_END_DATE_MOMENT = `${PREFIX_TICKETS_STORE}/SET_TICKET_END_DATE_MOMENT`;
const SET_TICKET_START_TIME = `${PREFIX_TICKETS_STORE}/SET_TICKET_START_TIME`;
const SET_TICKET_END_TIME = `${PREFIX_TICKETS_STORE}/SET_TICKET_END_TIME`;
const SET_TICKET_START_TIME_INPUT = `${PREFIX_TICKETS_STORE}/SET_TICKET_START_TIME_INPUT`;
const SET_TICKET_END_TIME_INPUT = `${PREFIX_TICKETS_STORE}/SET_TICKET_END_TIME_INPUT`;
const SET_TICKET_CAPACITY_TYPE = `${PREFIX_TICKETS_STORE}/SET_TICKET_CAPACITY_TYPE`;
const SET_TICKET_CAPACITY = `${PREFIX_TICKETS_STORE}/SET_TICKET_CAPACITY`;
const SET_TICKET_TEMP_TITLE = `${PREFIX_TICKETS_STORE}/SET_TICKET_TEMP_TITLE`;
const SET_TICKET_TEMP_DESCRIPTION = `${PREFIX_TICKETS_STORE}/SET_TICKET_TEMP_DESCRIPTION`;
const SET_TICKET_TEMP_PRICE = `${PREFIX_TICKETS_STORE}/SET_TICKET_TEMP_PRICE`;
const SET_TICKET_TEMP_SKU = `${PREFIX_TICKETS_STORE}/SET_TICKET_TEMP_SKU`;
const SET_TICKET_TEMP_IAC_SETTING = `${PREFIX_TICKETS_STORE}/SET_TICKET_TEMP_IAC_SETTING`;
const SET_TICKET_TEMP_START_DATE = `${PREFIX_TICKETS_STORE}/SET_TICKET_TEMP_START_DATE`;
const SET_TICKET_TEMP_START_DATE_INPUT = `${PREFIX_TICKETS_STORE}/SET_TICKET_TEMP_START_DATE_INPUT`;
const SET_TICKET_TEMP_START_DATE_MOMENT = `${PREFIX_TICKETS_STORE}/SET_TICKET_TEMP_START_DATE_MOMENT`;
const SET_TICKET_TEMP_END_DATE = `${PREFIX_TICKETS_STORE}/SET_TICKET_TEMP_END_DATE`;
const SET_TICKET_TEMP_END_DATE_INPUT = `${PREFIX_TICKETS_STORE}/SET_TICKET_TEMP_END_DATE_INPUT`;
const SET_TICKET_TEMP_END_DATE_MOMENT = `${PREFIX_TICKETS_STORE}/SET_TICKET_TEMP_END_DATE_MOMENT`;
const SET_TICKET_TEMP_START_TIME = `${PREFIX_TICKETS_STORE}/SET_TICKET_TEMP_START_TIME`;
const SET_TICKET_TEMP_END_TIME = `${PREFIX_TICKETS_STORE}/SET_TICKET_TEMP_END_TIME`;
const SET_TICKET_TEMP_START_TIME_INPUT = `${PREFIX_TICKETS_STORE}/SET_TICKET_TEMP_START_TIME_INPUT`;
const SET_TICKET_TEMP_END_TIME_INPUT = `${PREFIX_TICKETS_STORE}/SET_TICKET_TEMP_END_TIME_INPUT`;
const SET_TICKET_TEMP_CAPACITY_TYPE = `${PREFIX_TICKETS_STORE}/SET_TICKET_TEMP_CAPACITY_TYPE`;
const SET_TICKET_TEMP_CAPACITY = `${PREFIX_TICKETS_STORE}/SET_TICKET_TEMP_CAPACITY`;
const SET_TICKET_SOLD = `${PREFIX_TICKETS_STORE}/SET_TICKET_SOLD`;
const SET_TICKET_AVAILABLE = `${PREFIX_TICKETS_STORE}/SET_TICKET_AVAILABLE`;
const SET_TICKET_ID = `${PREFIX_TICKETS_STORE}/SET_TICKET_ID`;
const SET_TICKET_CURRENCY_SYMBOL = `${PREFIX_TICKETS_STORE}/SET_TICKET_CURRENCY_SYMBOL`;
const SET_TICKET_CURRENCY_POSITION = `${PREFIX_TICKETS_STORE}/SET_TICKET_CURRENCY_POSITION`;
const SET_TICKET_PROVIDER = `${PREFIX_TICKETS_STORE}/SET_TICKET_PROVIDER`;
const SET_TICKET_HAS_ATTENDEE_INFO_FIELDS = `${PREFIX_TICKETS_STORE}/SET_TICKET_HAS_ATTENDEE_INFO_FIELDS`;
const SET_TICKET_ATTENDEE_INFO_FIELDS = `${PREFIX_TICKETS_STORE}/SET_TICKET_ATTENDEE_INFO_FIELDS`;
const SET_TICKET_IS_LOADING = `${PREFIX_TICKETS_STORE}/SET_TICKET_IS_LOADING`;
const SET_TICKET_IS_MODAL_OPEN = `${PREFIX_TICKETS_STORE}/SET_TICKET_IS_MODAL_OPEN`;
const SET_TICKET_HAS_BEEN_CREATED = `${PREFIX_TICKETS_STORE}/SET_TICKET_HAS_BEEN_CREATED`;
const SET_TICKET_HAS_CHANGES = `${PREFIX_TICKETS_STORE}/SET_TICKET_HAS_CHANGES`;
const SET_TICKET_HAS_DURATION_ERROR = `${PREFIX_TICKETS_STORE}/SET_TICKET_HAS_DURATION_ERROR`;
const SET_TICKET_IS_SELECTED = `${PREFIX_TICKETS_STORE}/SET_TICKET_IS_SELECTED`;

//
// ─── CHILD TICKET SAGA TYPES ────────────────────────────────────────────────────
//

const SET_TICKET_DETAILS = `${PREFIX_TICKETS_STORE}/SET_TICKET_DETAILS`;
const SET_TICKET_TEMP_DETAILS = `${PREFIX_TICKETS_STORE}/SET_TICKET_TEMP_DETAILS`;
const HANDLE_TICKET_START_DATE = `${PREFIX_TICKETS_STORE}/HANDLE_TICKET_START_DATE`;
const HANDLE_TICKET_END_DATE = `${PREFIX_TICKETS_STORE}/HANDLE_TICKET_END_DATE`;
const HANDLE_TICKET_START_TIME = `${PREFIX_TICKETS_STORE}/HANDLE_TICKET_START_TIME`;
const HANDLE_TICKET_END_TIME = `${PREFIX_TICKETS_STORE}/HANDLE_TICKET_END_TIME`;
const FETCH_TICKET = `${PREFIX_TICKETS_STORE}/FETCH_TICKET`;
const CREATE_NEW_TICKET = `${PREFIX_TICKETS_STORE}/CREATE_NEW_TICKET`;
const UPDATE_TICKET = `${PREFIX_TICKETS_STORE}/UPDATE_TICKET`;
const DELETE_TICKET = `${PREFIX_TICKETS_STORE}/DELETE_TICKET`;
const SET_TICKET_INITIAL_STATE = `${PREFIX_TICKETS_STORE}/SET_TICKET_INITIAL_STATE`;
// EXTERNAL MODULE: external "lodash.trim"
var external_lodash_trim_ = __webpack_require__("XNrZ");
var external_lodash_trim_default = /*#__PURE__*/__webpack_require__.n(external_lodash_trim_);

// EXTERNAL MODULE: external "lodash.find"
var external_lodash_find_ = __webpack_require__("6OzC");
var external_lodash_find_default = /*#__PURE__*/__webpack_require__.n(external_lodash_find_);

// CONCATENATED MODULE: ./src/modules/data/blocks/ticket/constants.js
const TC = 'tribe-commerce';
const EDD = 'edd';
const WOO = 'woo';
const RSVP = 'rsvp';
const RSVP_CLASS = 'Tribe__Tickets__RSVP';
const TICKETS_COMMERCE_MODULE_CLASS = 'TEC\\Tickets\\Commerce\\Module';
const TC_CLASS = 'Tribe__Tickets__Commerce__PayPal__Main';
const EDD_CLASS = 'Tribe__Tickets_Plus__Commerce__EDD__Main';
const WOO_CLASS = 'Tribe__Tickets_Plus__Commerce__WooCommerce__Main';
const PROVIDER_CLASS_TO_PROVIDER_MAPPING = {
  [TC_CLASS]: TC,
  [EDD_CLASS]: EDD,
  [WOO_CLASS]: WOO
};
const PROVIDER_TYPES = [TC, EDD, WOO];
const EDD_ORDERS = 'edd-orders';
const TC_ORDERS = 'tpp-orders';
const WOO_ORDERS = 'tickets-orders';
const TICKETS_COMMERCE_ORDERS = 'tickets-commerce-orders';
const TICKET_ORDERS_PAGE_SLUG = {
  [EDD_CLASS]: EDD_ORDERS,
  [TC_CLASS]: TC_ORDERS,
  [WOO_CLASS]: WOO_ORDERS,
  [TICKETS_COMMERCE_MODULE_CLASS]: TICKETS_COMMERCE_ORDERS
};
const UNLIMITED = 'unlimited';
const SHARED = 'shared';
const INDEPENDENT = 'independent';
const CAPPED = 'capped';
const OWN = 'own';
const TICKET_TYPES_VALUES = [UNLIMITED, CAPPED, OWN];
const TICKET_TYPES = {
  [UNLIMITED]: UNLIMITED,
  [SHARED]: CAPPED,
  [INDEPENDENT]: OWN
};
const PREFIX = 'prefix';
const SUFFIX = 'postfix';
const PRICE_POSITIONS = [PREFIX, SUFFIX];
// EXTERNAL MODULE: external "wp.i18n"
var external_wp_i18n_ = __webpack_require__("l3Sj");

// CONCATENATED MODULE: ./src/modules/data/blocks/ticket/options.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */

const CAPACITY_TYPE_OPTIONS = [{
  label: Object(external_wp_i18n_["__"])('Share capacity with other tickets', 'event-tickets'),
  value: TICKET_TYPES[SHARED]
}, {
  label: Object(external_wp_i18n_["__"])('Set capacity for this ticket only', 'event-tickets'),
  value: TICKET_TYPES[INDEPENDENT]
}, {
  label: Object(external_wp_i18n_["__"])('Unlimited', 'event-tickets'),
  value: TICKET_TYPES[UNLIMITED]
}];
// CONCATENATED MODULE: ./src/modules/data/blocks/ticket/selectors.js


/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



const {
  UNLIMITED: selectors_UNLIMITED,
  INDEPENDENT: selectors_INDEPENDENT,
  SHARED: selectors_SHARED,
  TICKET_TYPES: selectors_TICKET_TYPES
} = constants_namespaceObject;
const {
  tickets: ticketsConfig
} = external_tribe_common_utils_["globals"];
const getState = state => state;
const getBlock = state => state.tickets.blocks.ticket;

//
// ─── BLOCK SELECTORS ────────────────────────────────────────────────────────────
//

const getTicketsIsSelected = Object(external_tribe_modules_reselect_["createSelector"])([getBlock], block => block.isSelected);
const getTicketsIsSettingsOpen = Object(external_tribe_modules_reselect_["createSelector"])([getBlock], block => block.isSettingsOpen);
const getTicketsIsSettingsLoading = Object(external_tribe_modules_reselect_["createSelector"])([getBlock], block => block.isSettingsLoading);
const getTicketsProvider = Object(external_tribe_modules_reselect_["createSelector"])([getBlock], block => block.provider);
const getTicketsSharedCapacity = Object(external_tribe_modules_reselect_["createSelector"])([getBlock], block => block.sharedCapacity);
const getTicketsSharedCapacityInt = Object(external_tribe_modules_reselect_["createSelector"])([getTicketsSharedCapacity], capacity => parseInt(capacity, 10) || 0);
const getTicketsTempSharedCapacity = Object(external_tribe_modules_reselect_["createSelector"])([getBlock], block => block.tempSharedCapacity);
const getTicketsTempSharedCapacityInt = Object(external_tribe_modules_reselect_["createSelector"])([getTicketsTempSharedCapacity], capacity => parseInt(capacity, 10) || 0);

//
// ─── HEADER IMAGE SELECTORS ─────────────────────────────────────────────────────
//

const getTicketsHeaderImage = Object(external_tribe_modules_reselect_["createSelector"])([getBlock], block => block.headerImage);
const getTicketsHeaderImageId = Object(external_tribe_modules_reselect_["createSelector"])([getTicketsHeaderImage], headerImage => headerImage.id);
const getTicketsHeaderImageSrc = Object(external_tribe_modules_reselect_["createSelector"])([getTicketsHeaderImage], headerImage => headerImage.src);
const getTicketsHeaderImageAlt = Object(external_tribe_modules_reselect_["createSelector"])([getTicketsHeaderImage], headerImage => headerImage.alt);

//
// ─── TICKETS SELECTORS ──────────────────────────────────────────────────────────
//

const getTickets = Object(external_tribe_modules_reselect_["createSelector"])([getBlock], block => block.tickets);
const getTicketsAllClientIds = Object(external_tribe_modules_reselect_["createSelector"])([getTickets], tickets => [...new Set(tickets.allClientIds)]);
const getTicketsByClientId = Object(external_tribe_modules_reselect_["createSelector"])([getTickets], tickets => tickets.byClientId);
const getTicketsArray = Object(external_tribe_modules_reselect_["createSelector"])([getTicketsAllClientIds, getTicketsByClientId], (ids, tickets) => ids.map(id => tickets[id]));
const getTicketsCount = Object(external_tribe_modules_reselect_["createSelector"])([getTicketsAllClientIds], allClientIds => allClientIds.length);
const hasTickets = Object(external_tribe_modules_reselect_["createSelector"])([getTicketsCount], count => count > 0);
const selectors_hasCreatedTickets = Object(external_tribe_modules_reselect_["createSelector"])([getTicketsArray], tickets => tickets.reduce((hasCreated, ticket) => hasCreated || ticket.hasBeenCreated, false));
const getIndependentTickets = Object(external_tribe_modules_reselect_["createSelector"])([getTicketsArray], tickets => tickets.filter(ticket => ticket.details.capacityType === selectors_TICKET_TYPES[selectors_INDEPENDENT]));
const getSharedTickets = Object(external_tribe_modules_reselect_["createSelector"])([getTicketsArray], tickets => tickets.filter(ticket => ticket.details.capacityType === selectors_TICKET_TYPES[selectors_SHARED]));
const getSharedTicketsCount = Object(external_tribe_modules_reselect_["createSelector"])([getSharedTickets], tickets => tickets.length);
const getUnlimitedTickets = Object(external_tribe_modules_reselect_["createSelector"])([getTicketsArray], tickets => tickets.filter(ticket => ticket.details.capacityType === selectors_TICKET_TYPES[selectors_UNLIMITED]));
const selectors_hasATicketSelected = Object(external_tribe_modules_reselect_["createSelector"])([getTicketsArray], tickets => tickets.reduce((selected, ticket) => selected || ticket.isSelected, false));
const getTicketsIdsInBlocks = Object(external_tribe_modules_reselect_["createSelector"])([getTicketsArray], tickets => tickets.reduce((accumulator, ticket) => {
  if (ticket.ticketId !== 0) {
    accumulator.push(ticket.ticketId);
  }
  return accumulator;
}, []));

//
// ─── TICKET SELECTORS ───────────────────────────────────────────────────────────
//

const getTicketClientId = (state, ownProps) => ownProps.clientId;
const getTicket = Object(external_tribe_modules_reselect_["createSelector"])([getTicketsByClientId, getTicketClientId], (tickets, clientId) => tickets[clientId] || {});
const getTicketSold = Object(external_tribe_modules_reselect_["createSelector"])([getTicket], ticket => ticket.sold);
const getTicketAvailable = Object(external_tribe_modules_reselect_["createSelector"])([getTicket], ticket => ticket.available);
const getTicketId = Object(external_tribe_modules_reselect_["createSelector"])([getTicket], ticket => ticket.ticketId);
const getTicketCurrencySymbol = Object(external_tribe_modules_reselect_["createSelector"])([getTicket], ticket => ticket.currencySymbol);
const getTicketCurrencyPosition = Object(external_tribe_modules_reselect_["createSelector"])([getTicket], ticket => ticket.currencyPosition);
const getTicketCurrencyDecimalPoint = Object(external_tribe_modules_reselect_["createSelector"])([getTicket], ticket => ticket.currencyDecimalPoint);
const getTicketCurrencyNumberOfDecimals = Object(external_tribe_modules_reselect_["createSelector"])([getTicket], ticket => ticket.currencyNumberOfDecimals);
const getTicketCurrencyThousandsSep = Object(external_tribe_modules_reselect_["createSelector"])([getTicket], ticket => ticket.currencyThousandsSep);
const getTicketProvider = Object(external_tribe_modules_reselect_["createSelector"])([getTicket], ticket => ticket.provider);
const getTicketHasAttendeeInfoFields = Object(external_tribe_modules_reselect_["createSelector"])([getTicket], ticket => ticket.hasAttendeeInfoFields);
const getTicketIsLoading = Object(external_tribe_modules_reselect_["createSelector"])([getTicket], ticket => ticket.isLoading);
const getTicketIsModalOpen = Object(external_tribe_modules_reselect_["createSelector"])([getTicket], ticket => ticket.isModalOpen);
const getTicketHasBeenCreated = Object(external_tribe_modules_reselect_["createSelector"])([getTicket], ticket => ticket.hasBeenCreated);
const getTicketHasChanges = Object(external_tribe_modules_reselect_["createSelector"])([getTicket], ticket => ticket.hasChanges);
const getTicketHasDurationError = Object(external_tribe_modules_reselect_["createSelector"])([getTicket], ticket => ticket.hasDurationError);
const getTicketIsSelected = Object(external_tribe_modules_reselect_["createSelector"])([getTicket], ticket => ticket.isSelected);
const isTicketDisabled = Object(external_tribe_modules_reselect_["createSelector"])([selectors_hasATicketSelected, getTicketIsSelected, getTicketIsLoading, getTicketsIsSettingsOpen], (hasSelected, isSelected, isLoading, isSettingsOpen) => hasSelected && !isSelected || isLoading || isSettingsOpen);

//
// ─── TICKET DETAILS SELECTORS ───────────────────────────────────────────────────
//

const getTicketDetails = Object(external_tribe_modules_reselect_["createSelector"])([getTicket], ticket => ticket.details || {});
const getTicketTitle = Object(external_tribe_modules_reselect_["createSelector"])([getTicketDetails], details => details.title);
const getTicketDescription = Object(external_tribe_modules_reselect_["createSelector"])([getTicketDetails], details => details.description);
const getTicketPrice = Object(external_tribe_modules_reselect_["createSelector"])([getTicketDetails], details => details.price);
const getTicketSku = Object(external_tribe_modules_reselect_["createSelector"])([getTicketDetails], details => details.sku);
const getTicketIACSetting = Object(external_tribe_modules_reselect_["createSelector"])([getTicketDetails], details => details.iac);
const getTicketStartDate = Object(external_tribe_modules_reselect_["createSelector"])([getTicketDetails], details => details.startDate);
const getTicketStartDateInput = Object(external_tribe_modules_reselect_["createSelector"])([getTicketDetails], details => details.startDateInput);
const getTicketStartDateMoment = Object(external_tribe_modules_reselect_["createSelector"])([getTicketDetails], details => details.startDateMoment);
const getTicketEndDate = Object(external_tribe_modules_reselect_["createSelector"])([getTicketDetails], details => details.endDate);
const getTicketEndDateInput = Object(external_tribe_modules_reselect_["createSelector"])([getTicketDetails], details => details.endDateInput);
const getTicketEndDateMoment = Object(external_tribe_modules_reselect_["createSelector"])([getTicketDetails], details => details.endDateMoment);
const getTicketStartTime = Object(external_tribe_modules_reselect_["createSelector"])([getTicketDetails], details => details.startTime || '');
const getTicketStartTimeNoSeconds = Object(external_tribe_modules_reselect_["createSelector"])([getTicketStartTime], startTime => startTime.slice(0, -3));
const getTicketEndTime = Object(external_tribe_modules_reselect_["createSelector"])([getTicketDetails], details => details.endTime || '');
const getTicketEndTimeNoSeconds = Object(external_tribe_modules_reselect_["createSelector"])([getTicketEndTime], endTime => endTime.slice(0, -3));
const getTicketStartTimeInput = Object(external_tribe_modules_reselect_["createSelector"])([getTicketDetails], details => details.startTimeInput);
const getTicketEndTimeInput = Object(external_tribe_modules_reselect_["createSelector"])([getTicketDetails], details => details.endTimeInput);
const getTicketCapacityType = Object(external_tribe_modules_reselect_["createSelector"])([getTicketDetails], details => details.capacityType);
const getTicketCapacity = Object(external_tribe_modules_reselect_["createSelector"])([getTicketDetails], details => details.capacity);
const getTicketCapacityInt = Object(external_tribe_modules_reselect_["createSelector"])([getTicketCapacity], capacity => parseInt(capacity, 10) || 0);
const isUnlimitedTicket = Object(external_tribe_modules_reselect_["createSelector"])([getTicketDetails], details => details.capacityType === selectors_TICKET_TYPES[selectors_UNLIMITED]);
const isSharedTicket = Object(external_tribe_modules_reselect_["createSelector"])([getTicketDetails], details => details.capacityType === selectors_TICKET_TYPES[selectors_SHARED]);
const isIndependentTicket = Object(external_tribe_modules_reselect_["createSelector"])([getTicketDetails], details => details.capacityType === selectors_TICKET_TYPES[selectors_INDEPENDENT]);
const isTicketPast = Object(external_tribe_modules_reselect_["createSelector"])([getTicketEndDateMoment], endDate => external_moment_default()().isAfter(endDate));
const isTicketFuture = Object(external_tribe_modules_reselect_["createSelector"])([getTicketStartDateMoment], startDate => external_moment_default()().isBefore(startDate));
const isTicketOnSale = Object(external_tribe_modules_reselect_["createSelector"])([getTicketHasBeenCreated, isTicketPast, isTicketFuture], (hasBeenCreated, isPast, isFuture) => hasBeenCreated && !isPast && !isFuture);
const hasTicketOnSale = Object(external_tribe_modules_reselect_["createSelector"])([getTicketsAllClientIds, getState], (allClientIds, state) => allClientIds.reduce((onSale, clientId) => onSale || isTicketOnSale(state, {
  clientId
}), false));
const selectors_allTicketsPast = Object(external_tribe_modules_reselect_["createSelector"])([getTicketsAllClientIds, getState], (allClientIds, state) => allClientIds.reduce((isPast, clientId) => {
  const props = {
    clientId
  };
  return getTicketHasBeenCreated(state, props) ? isPast && isTicketPast(state, props) : isPast;
}, true));
const selectors_allTicketsFuture = Object(external_tribe_modules_reselect_["createSelector"])([getTicketsAllClientIds, getState], (allClientIds, state) => allClientIds.reduce((isFuture, clientId) => {
  const props = {
    clientId
  };
  return getTicketHasBeenCreated(state, props) ? isFuture && isTicketFuture(state, props) : isFuture;
}, true));
const getTicketAttendeeInfoFields = Object(external_tribe_modules_reselect_["createSelector"])([getTicketDetails], details => details.attendeeInfoFields || []);

//
// ─── TICKET TEMP DETAILS SELECTORS ──────────────────────────────────────────────
//

const getTicketTempDetails = Object(external_tribe_modules_reselect_["createSelector"])([getTicket], ticket => ticket.tempDetails || {});
const getTicketTempTitle = Object(external_tribe_modules_reselect_["createSelector"])([getTicketTempDetails], tempDetails => tempDetails.title);
const getTicketTempDescription = Object(external_tribe_modules_reselect_["createSelector"])([getTicketTempDetails], tempDetails => tempDetails.description);
const getTicketTempPrice = Object(external_tribe_modules_reselect_["createSelector"])([getTicketTempDetails], tempDetails => tempDetails.price);
const getTicketTempSku = Object(external_tribe_modules_reselect_["createSelector"])([getTicketTempDetails], tempDetails => tempDetails.sku);
const getTicketTempIACSetting = Object(external_tribe_modules_reselect_["createSelector"])([getTicketTempDetails], tempDetails => tempDetails.iac);
const getTicketTempStartDate = Object(external_tribe_modules_reselect_["createSelector"])([getTicketTempDetails], tempDetails => tempDetails.startDate);
const getTicketTempStartDateInput = Object(external_tribe_modules_reselect_["createSelector"])([getTicketTempDetails], tempDetails => tempDetails.startDateInput);
const getTicketTempStartDateMoment = Object(external_tribe_modules_reselect_["createSelector"])([getTicketTempDetails], tempDetails => tempDetails.startDateMoment);
const getTicketTempEndDate = Object(external_tribe_modules_reselect_["createSelector"])([getTicketTempDetails], tempDetails => tempDetails.endDate);
const getTicketTempEndDateInput = Object(external_tribe_modules_reselect_["createSelector"])([getTicketTempDetails], tempDetails => tempDetails.endDateInput);
const getTicketTempEndDateMoment = Object(external_tribe_modules_reselect_["createSelector"])([getTicketTempDetails], tempDetails => tempDetails.endDateMoment);
const getTicketTempStartTime = Object(external_tribe_modules_reselect_["createSelector"])([getTicketTempDetails], tempDetails => tempDetails.startTime || '');
const getTicketTempStartTimeNoSeconds = Object(external_tribe_modules_reselect_["createSelector"])([getTicketTempStartTime], startTime => startTime.slice(0, -3));
const getTicketTempEndTime = Object(external_tribe_modules_reselect_["createSelector"])([getTicketTempDetails], tempDetails => tempDetails.endTime || '');
const getTicketTempEndTimeNoSeconds = Object(external_tribe_modules_reselect_["createSelector"])([getTicketTempEndTime], endTime => endTime.slice(0, -3));
const getTicketTempStartTimeInput = Object(external_tribe_modules_reselect_["createSelector"])([getTicketTempDetails], tempDetails => tempDetails.startTimeInput);
const getTicketTempEndTimeInput = Object(external_tribe_modules_reselect_["createSelector"])([getTicketTempDetails], tempDetails => tempDetails.endTimeInput);
const getTicketTempCapacityType = Object(external_tribe_modules_reselect_["createSelector"])([getTicketTempDetails], tempDetails => tempDetails.capacityType);
const getTicketTempCapacity = Object(external_tribe_modules_reselect_["createSelector"])([getTicketTempDetails], tempDetails => tempDetails.capacity);
const getTicketTempCapacityInt = Object(external_tribe_modules_reselect_["createSelector"])([getTicketTempCapacity], capacity => parseInt(capacity, 10) || 0);
const getTicketTempCapacityTypeOption = Object(external_tribe_modules_reselect_["createSelector"])([getTicketTempCapacityType], capacityType => external_lodash_find_default()(CAPACITY_TYPE_OPTIONS, {
  value: capacityType
}) || {});
const isTempTitleValid = Object(external_tribe_modules_reselect_["createSelector"])([getTicketTempTitle], title => external_lodash_trim_default()(title) !== '');
const isTempCapacityValid = Object(external_tribe_modules_reselect_["createSelector"])([getTicketTempCapacity], capacity => external_lodash_trim_default()(capacity) !== '' && !isNaN(capacity) && capacity > 0);
const isTempSharedCapacityValid = Object(external_tribe_modules_reselect_["createSelector"])([getTicketsTempSharedCapacity], capacity => external_lodash_trim_default()(capacity) !== '' && !isNaN(capacity) && capacity > 0);
const isZeroPriceValid = Object(external_tribe_modules_reselect_["createSelector"])([getTicketTempPrice, getTicketsProvider], (price, provider) => {
  return 0 < parseInt(price, 10) || ![TC_CLASS, TICKETS_COMMERCE_MODULE_CLASS].includes(provider);
});
const isTicketValid = Object(external_tribe_modules_reselect_["createSelector"])([getTicketTempCapacityType, isTempTitleValid, isTempCapacityValid, isTempSharedCapacityValid, isZeroPriceValid], (capacityType, titleValid, capacityValid, sharedCapacityValid, zeroPriceValid) => {
  if (capacityType === selectors_TICKET_TYPES[selectors_UNLIMITED]) {
    return titleValid && zeroPriceValid;
  } else if (capacityType === selectors_TICKET_TYPES[selectors_SHARED]) {
    return titleValid && sharedCapacityValid && zeroPriceValid;
  }
  return titleValid && capacityValid && zeroPriceValid;
});

//
// ─── AMOUNT REDUCERS ────────────────────────────────────────────────────────────
//

const _getTotalCapacity = tickets => tickets.reduce((total, ticket) => {
  const capacity = parseInt(ticket.details.capacity, 10) || 0;
  return total + capacity;
}, 0);
const _getTotalTempCapacity = tickets => tickets.reduce((total, ticket) => {
  const tempCapacity = parseInt(ticket.tempDetails.capacity, 10) || 0;
  return total + tempCapacity;
}, 0);
const _getTotalSold = tickets => tickets.reduce((total, ticket) => {
  const sold = parseInt(ticket.sold, 10) || 0;
  return total + sold;
}, 0);
const _getTotalAvailable = tickets => tickets.reduce((total, ticket) => {
  const available = parseInt(ticket.available, 10) || 0;
  return total + available;
}, 0);
const getIndependentTicketsCapacity = Object(external_tribe_modules_reselect_["createSelector"])(getIndependentTickets, _getTotalCapacity);
const getIndependentTicketsTempCapacity = Object(external_tribe_modules_reselect_["createSelector"])(getIndependentTickets, _getTotalTempCapacity);
const getIndependentTicketsSold = Object(external_tribe_modules_reselect_["createSelector"])(getIndependentTickets, _getTotalSold);
const getIndependentTicketsAvailable = Object(external_tribe_modules_reselect_["createSelector"])(getIndependentTickets, _getTotalAvailable);
const getSharedTicketsSold = Object(external_tribe_modules_reselect_["createSelector"])(getSharedTickets, _getTotalSold);
const getSharedTicketsAvailable = Object(external_tribe_modules_reselect_["createSelector"])([getTicketsSharedCapacityInt, getSharedTicketsSold], (sharedCapacity, sharedSold) => Math.max(sharedCapacity - sharedSold, 0));
const getIndependentAndSharedTicketsCapacity = Object(external_tribe_modules_reselect_["createSelector"])([getIndependentTicketsCapacity, getTicketsSharedCapacityInt], (independentCapacity, sharedCapacity) => independentCapacity + sharedCapacity);
const getIndependentAndSharedTicketsTempCapacity = Object(external_tribe_modules_reselect_["createSelector"])([getIndependentTicketsTempCapacity, getTicketsTempSharedCapacityInt], (independentTempCapacity, tempSharedCapacity) => independentTempCapacity + tempSharedCapacity);
const getIndependentAndSharedTicketsSold = Object(external_tribe_modules_reselect_["createSelector"])([getIndependentTicketsSold, getSharedTicketsSold], (independentSold, sharedSold) => independentSold + sharedSold);
const getIndependentAndSharedTicketsAvailable = Object(external_tribe_modules_reselect_["createSelector"])([getIndependentTicketsAvailable, getSharedTicketsAvailable], (independentAvailable, sharedAvailable) => independentAvailable + sharedAvailable);

//
// ─── MISC SELECTORS ─────────────────────────────────────────────────────────────
//

const getTicketProviders = () => {
  const tickets = ticketsConfig();
  return tickets.providers || [];
};
const getDefaultTicketProvider = () => {
  const tickets = ticketsConfig();
  return tickets.default_provider || '';
};
const hasValidTicketProvider = () => {
  const provider = getDefaultTicketProvider();
  return provider !== '' && provider !== RSVP_CLASS;
};
const hasMultipleTicketProviders = Object(external_tribe_modules_reselect_["createSelector"])([getTicketProviders], providers => providers.length > 1);
const hasTicketProviders = Object(external_tribe_modules_reselect_["createSelector"])([getTicketProviders], providers => providers.length > 0);
const selectors_canCreateTickets = Object(external_tribe_modules_reselect_["createSelector"])([hasTicketProviders, hasValidTicketProvider], (providers, validDefaultProvider) => providers && validDefaultProvider);
// CONCATENATED MODULE: ./src/modules/data/blocks/ticket/utils.js
/**
 * External dependencies
 */

const {
  settings,
  priceSettings,
  tickets: utils_ticketsConfig
} = external_tribe_common_utils_["globals"];
/**
 * Internal dependencies
 */


/**
 * Get currency symbol by provider
 *
 * @param provider The tickets provider class
 */
const getProviderCurrency = provider => {
  const tickets = utils_ticketsConfig();
  const providers = getTicketProviders();

  // if we don't get the provider, return the default one
  if ('' === provider) {
    return tickets.default_currency;
  }
  const [result] = providers.filter(el => el.class === provider);
  return result ? result.currency : tickets.default_currency;
};

/**
 * Get currency decimal point by provider
 *
 * @param provider The tickets provider class
 */
const getProviderCurrencyDecimalPoint = provider => {
  const providers = getTicketProviders();
  const defaultCurrencyDecimalPoint = '.';

  // if we don't get the provider, return the default one
  if ('' === provider) {
    return defaultCurrencyDecimalPoint;
  }
  const [result] = providers.filter(el => el.class === provider);
  return result ? result.currency_decimal_point : defaultCurrencyDecimalPoint;
};

/**
 * Get currency number of decimals by provider
 *
 * @param provider The tickets provider class
 */
const getProviderCurrencyNumberOfDecimals = provider => {
  const providers = getTicketProviders();
  const defaultCurrencyNumberOfDecimals = 2;

  // if we don't get the provider, return the default one
  if ('' === provider) {
    return defaultCurrencyNumberOfDecimals;
  }
  const [result] = providers.filter(el => el.class === provider);
  return result ? result.currency_number_of_decimals : defaultCurrencyNumberOfDecimals;
};

/**
 * Get currency thousands separator by provider
 *
 * @param provider The tickets provider class
 */
const getProviderCurrencyThousandsSep = provider => {
  const providers = getTicketProviders();
  const defaultCurrencyThousandsSep = ',';

  // if we don't get the provider, return the default one
  if ('' === provider) {
    return defaultCurrencyThousandsSep;
  }
  const [result] = providers.filter(el => el.class === provider);
  return result ? result.currency_thousands_sep : defaultCurrencyThousandsSep;
};

/**
 * Get the default provider's currency symbol
 */
const getDefaultProviderCurrency = () => {
  return getProviderCurrency(getDefaultTicketProvider());
};

/**
 * Get the default provider's currency decimal point
 */
const getDefaultProviderCurrencyDecimalPoint = () => {
  return getProviderCurrencyDecimalPoint(getDefaultTicketProvider());
};

/**
 * Get the default provider's currency number of decimals
 */
const getDefaultProviderCurrencyNumberOfDecimals = () => {
  return getProviderCurrencyNumberOfDecimals(getDefaultTicketProvider());
};

/**
 * Get the default provider's currency thousands separator
 */
const getDefaultProviderCurrencyThousandsSep = () => {
  return getProviderCurrencyThousandsSep(getDefaultTicketProvider());
};

/**
 * Get currency position
 */
const getDefaultCurrencyPosition = () => {
  const position = external_tribe_common_utils_["string"].isTruthy(settings() && settings().reverseCurrencyPosition) ? 'suffix' : 'prefix';
  return priceSettings() && priceSettings().defaultCurrencyPosition ? priceSettings().defaultCurrencyPosition : position;
};
// CONCATENATED MODULE: ./src/modules/data/blocks/ticket/reducers/tickets/ticket/details.js

function details_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function details_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? details_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : details_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



const ticket_details_datePickerFormat = external_tribe_common_utils_["globals"].tecDateSettings().datepickerFormat;
const ticket_details_currentMoment = external_moment_default()();
const details_bufferDuration = external_tribe_common_utils_["globals"].tickets().end_sale_buffer_duration ? external_tribe_common_utils_["globals"].tickets().end_sale_buffer_duration : 2;
const details_bufferYears = external_tribe_common_utils_["globals"].tickets().end_sale_buffer_years ? external_tribe_common_utils_["globals"].tickets().end_sale_buffer_years : 1;
const ticket_details_endMoment = ticket_details_currentMoment.clone().add(details_bufferDuration, 'hours').add(details_bufferYears, 'years');
const ticket_details_startDateInput = ticket_details_datePickerFormat ? ticket_details_currentMoment.format(external_tribe_common_utils_["moment"].toFormat(ticket_details_datePickerFormat)) : external_tribe_common_utils_["moment"].toDate(ticket_details_currentMoment);
const ticket_details_endDateInput = ticket_details_datePickerFormat ? ticket_details_endMoment.format(external_tribe_common_utils_["moment"].toFormat(ticket_details_datePickerFormat)) : external_tribe_common_utils_["moment"].toDate(ticket_details_endMoment);
const details_iac = external_tribe_common_utils_["globals"].iacVars().iacDefault ? external_tribe_common_utils_["globals"].iacVars().iacDefault : 'none';
const details_DEFAULT_STATE = {
  attendeeInfoFields: [],
  title: '',
  description: '',
  price: '',
  sku: '',
  iac: details_iac,
  startDate: external_tribe_common_utils_["moment"].toDatabaseDate(ticket_details_currentMoment),
  startDateInput: ticket_details_startDateInput,
  startDateMoment: ticket_details_currentMoment,
  endDate: external_tribe_common_utils_["moment"].toDatabaseDate(ticket_details_endMoment),
  endDateInput: ticket_details_endDateInput,
  endDateMoment: ticket_details_endMoment,
  startTime: external_tribe_common_utils_["moment"].toDatabaseTime(ticket_details_currentMoment),
  endTime: external_tribe_common_utils_["moment"].toDatabaseTime(ticket_details_endMoment),
  startTimeInput: external_tribe_common_utils_["moment"].toTime(ticket_details_currentMoment),
  endTimeInput: external_tribe_common_utils_["moment"].toTime(ticket_details_endMoment),
  capacityType: TICKET_TYPES[UNLIMITED],
  capacity: ''
};
/* harmony default export */ var ticket_details = (function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : details_DEFAULT_STATE;
  let action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case SET_TICKET_TITLE:
      return details_objectSpread(details_objectSpread({}, state), {}, {
        title: action.payload.title
      });
    case SET_TICKET_DESCRIPTION:
      return details_objectSpread(details_objectSpread({}, state), {}, {
        description: action.payload.description
      });
    case SET_TICKET_PRICE:
      return details_objectSpread(details_objectSpread({}, state), {}, {
        price: action.payload.price
      });
    case SET_TICKET_SKU:
      return details_objectSpread(details_objectSpread({}, state), {}, {
        sku: action.payload.sku
      });
    case SET_TICKET_IAC_SETTING:
      return details_objectSpread(details_objectSpread({}, state), {}, {
        iac: action.payload.iac
      });
    case SET_TICKET_START_DATE:
      return details_objectSpread(details_objectSpread({}, state), {}, {
        startDate: action.payload.startDate
      });
    case SET_TICKET_START_DATE_INPUT:
      return details_objectSpread(details_objectSpread({}, state), {}, {
        startDateInput: action.payload.startDateInput
      });
    case SET_TICKET_START_DATE_MOMENT:
      return details_objectSpread(details_objectSpread({}, state), {}, {
        startDateMoment: action.payload.startDateMoment
      });
    case SET_TICKET_END_DATE:
      return details_objectSpread(details_objectSpread({}, state), {}, {
        endDate: action.payload.endDate
      });
    case SET_TICKET_END_DATE_INPUT:
      return details_objectSpread(details_objectSpread({}, state), {}, {
        endDateInput: action.payload.endDateInput
      });
    case SET_TICKET_END_DATE_MOMENT:
      return details_objectSpread(details_objectSpread({}, state), {}, {
        endDateMoment: action.payload.endDateMoment
      });
    case SET_TICKET_START_TIME:
      return details_objectSpread(details_objectSpread({}, state), {}, {
        startTime: action.payload.startTime
      });
    case SET_TICKET_END_TIME:
      return details_objectSpread(details_objectSpread({}, state), {}, {
        endTime: action.payload.endTime
      });
    case SET_TICKET_START_TIME_INPUT:
      return details_objectSpread(details_objectSpread({}, state), {}, {
        startTimeInput: action.payload.startTimeInput
      });
    case SET_TICKET_END_TIME_INPUT:
      return details_objectSpread(details_objectSpread({}, state), {}, {
        endTimeInput: action.payload.endTimeInput
      });
    case SET_TICKET_CAPACITY_TYPE:
      return details_objectSpread(details_objectSpread({}, state), {}, {
        capacityType: action.payload.capacityType
      });
    case SET_TICKET_CAPACITY:
      return details_objectSpread(details_objectSpread({}, state), {}, {
        capacity: action.payload.capacity
      });
    case SET_TICKET_ATTENDEE_INFO_FIELDS:
      return details_objectSpread(details_objectSpread({}, state), {}, {
        attendeeInfoFields: action.payload.attendeeInfoFields
      });
    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/modules/data/blocks/ticket/reducers/tickets/ticket/temp-details.js

function ticket_temp_details_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function ticket_temp_details_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ticket_temp_details_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ticket_temp_details_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



const temp_details_datePickerFormat = external_tribe_common_utils_["globals"].tecDateSettings().datepickerFormat;
const temp_details_currentMoment = external_moment_default()();
const temp_details_bufferDuration = external_tribe_common_utils_["globals"].tickets().end_sale_buffer_duration ? external_tribe_common_utils_["globals"].tickets().end_sale_buffer_duration : 2;
const temp_details_bufferYears = external_tribe_common_utils_["globals"].tickets().end_sale_buffer_years ? external_tribe_common_utils_["globals"].tickets().end_sale_buffer_years : 1;
const temp_details_endMoment = temp_details_currentMoment.clone().add(temp_details_bufferDuration, 'hours').add(temp_details_bufferYears, 'years');
const temp_details_startDateInput = temp_details_datePickerFormat ? temp_details_currentMoment.format(external_tribe_common_utils_["moment"].toFormat(temp_details_datePickerFormat)) : external_tribe_common_utils_["moment"].toDate(temp_details_currentMoment);
const temp_details_endDateInput = temp_details_datePickerFormat ? temp_details_endMoment.format(external_tribe_common_utils_["moment"].toFormat(temp_details_datePickerFormat)) : external_tribe_common_utils_["moment"].toDate(temp_details_endMoment);
const temp_details_iac = external_tribe_common_utils_["globals"].iacVars().iacDefault ? external_tribe_common_utils_["globals"].iacVars().iacDefault : 'none';
const temp_details_DEFAULT_STATE = {
  title: '',
  description: '',
  price: '',
  sku: '',
  iac: temp_details_iac,
  startDate: external_tribe_common_utils_["moment"].toDatabaseDate(temp_details_currentMoment),
  startDateInput: temp_details_startDateInput,
  startDateMoment: temp_details_currentMoment,
  endDate: external_tribe_common_utils_["moment"].toDatabaseDate(temp_details_endMoment),
  endDateInput: temp_details_endDateInput,
  endDateMoment: temp_details_endMoment,
  startTime: external_tribe_common_utils_["moment"].toDatabaseTime(temp_details_currentMoment),
  endTime: external_tribe_common_utils_["moment"].toDatabaseTime(temp_details_endMoment),
  startTimeInput: external_tribe_common_utils_["moment"].toTime(temp_details_currentMoment),
  endTimeInput: external_tribe_common_utils_["moment"].toTime(temp_details_endMoment),
  capacityType: TICKET_TYPES[UNLIMITED],
  capacity: ''
};
/* harmony default export */ var ticket_temp_details = (function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : temp_details_DEFAULT_STATE;
  let action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case SET_TICKET_TEMP_TITLE:
      return ticket_temp_details_objectSpread(ticket_temp_details_objectSpread({}, state), {}, {
        title: action.payload.title
      });
    case SET_TICKET_TEMP_DESCRIPTION:
      return ticket_temp_details_objectSpread(ticket_temp_details_objectSpread({}, state), {}, {
        description: action.payload.description
      });
    case SET_TICKET_TEMP_PRICE:
      return ticket_temp_details_objectSpread(ticket_temp_details_objectSpread({}, state), {}, {
        price: action.payload.price
      });
    case SET_TICKET_TEMP_SKU:
      return ticket_temp_details_objectSpread(ticket_temp_details_objectSpread({}, state), {}, {
        sku: action.payload.sku
      });
    case SET_TICKET_TEMP_IAC_SETTING:
      return ticket_temp_details_objectSpread(ticket_temp_details_objectSpread({}, state), {}, {
        iac: action.payload.iac
      });
    case SET_TICKET_TEMP_START_DATE:
      return ticket_temp_details_objectSpread(ticket_temp_details_objectSpread({}, state), {}, {
        startDate: action.payload.startDate
      });
    case SET_TICKET_TEMP_START_DATE_INPUT:
      return ticket_temp_details_objectSpread(ticket_temp_details_objectSpread({}, state), {}, {
        startDateInput: action.payload.startDateInput
      });
    case SET_TICKET_TEMP_START_DATE_MOMENT:
      return ticket_temp_details_objectSpread(ticket_temp_details_objectSpread({}, state), {}, {
        startDateMoment: action.payload.startDateMoment
      });
    case SET_TICKET_TEMP_END_DATE:
      return ticket_temp_details_objectSpread(ticket_temp_details_objectSpread({}, state), {}, {
        endDate: action.payload.endDate
      });
    case SET_TICKET_TEMP_END_DATE_INPUT:
      return ticket_temp_details_objectSpread(ticket_temp_details_objectSpread({}, state), {}, {
        endDateInput: action.payload.endDateInput
      });
    case SET_TICKET_TEMP_END_DATE_MOMENT:
      return ticket_temp_details_objectSpread(ticket_temp_details_objectSpread({}, state), {}, {
        endDateMoment: action.payload.endDateMoment
      });
    case SET_TICKET_TEMP_START_TIME:
      return ticket_temp_details_objectSpread(ticket_temp_details_objectSpread({}, state), {}, {
        startTime: action.payload.startTime
      });
    case SET_TICKET_TEMP_END_TIME:
      return ticket_temp_details_objectSpread(ticket_temp_details_objectSpread({}, state), {}, {
        endTime: action.payload.endTime
      });
    case SET_TICKET_TEMP_START_TIME_INPUT:
      return ticket_temp_details_objectSpread(ticket_temp_details_objectSpread({}, state), {}, {
        startTimeInput: action.payload.startTimeInput
      });
    case SET_TICKET_TEMP_END_TIME_INPUT:
      return ticket_temp_details_objectSpread(ticket_temp_details_objectSpread({}, state), {}, {
        endTimeInput: action.payload.endTimeInput
      });
    case SET_TICKET_TEMP_CAPACITY_TYPE:
      return ticket_temp_details_objectSpread(ticket_temp_details_objectSpread({}, state), {}, {
        capacityType: action.payload.capacityType
      });
    case SET_TICKET_TEMP_CAPACITY:
      return ticket_temp_details_objectSpread(ticket_temp_details_objectSpread({}, state), {}, {
        capacity: action.payload.capacity
      });
    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/modules/data/blocks/ticket/reducers/tickets/ticket.js

function ticket_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function ticket_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ticket_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ticket_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * Internal dependencies
 */




const ticket_DEFAULT_STATE = {
  details: details_DEFAULT_STATE,
  tempDetails: temp_details_DEFAULT_STATE,
  sold: 0,
  available: 0,
  ticketId: 0,
  currencyDecimalPoint: getDefaultProviderCurrencyDecimalPoint(),
  currencyNumberOfDecimals: getDefaultProviderCurrencyNumberOfDecimals(),
  currencyPosition: getDefaultCurrencyPosition(),
  currencySymbol: getDefaultProviderCurrency(),
  currencyThousandsSep: getDefaultProviderCurrencyThousandsSep(),
  provider: '',
  hasAttendeeInfoFields: false,
  isLoading: false,
  isModalOpen: false,
  hasBeenCreated: false,
  hasChanges: false,
  hasDurationError: false,
  isSelected: false
};
/* harmony default export */ var tickets_ticket = (function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ticket_DEFAULT_STATE;
  let action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case SET_TICKET_ATTENDEE_INFO_FIELDS:
    case SET_TICKET_TITLE:
    case SET_TICKET_DESCRIPTION:
    case SET_TICKET_PRICE:
    case SET_TICKET_SKU:
    case SET_TICKET_IAC_SETTING:
    case SET_TICKET_START_DATE:
    case SET_TICKET_START_DATE_INPUT:
    case SET_TICKET_START_DATE_MOMENT:
    case SET_TICKET_END_DATE:
    case SET_TICKET_END_DATE_INPUT:
    case SET_TICKET_END_DATE_MOMENT:
    case SET_TICKET_START_TIME:
    case SET_TICKET_END_TIME:
    case SET_TICKET_START_TIME_INPUT:
    case SET_TICKET_END_TIME_INPUT:
    case SET_TICKET_CAPACITY_TYPE:
    case SET_TICKET_CAPACITY:
      return ticket_objectSpread(ticket_objectSpread({}, state), {}, {
        details: ticket_details(state.details, action)
      });
    case SET_TICKET_TEMP_TITLE:
    case SET_TICKET_TEMP_DESCRIPTION:
    case SET_TICKET_TEMP_PRICE:
    case SET_TICKET_TEMP_SKU:
    case SET_TICKET_TEMP_IAC_SETTING:
    case SET_TICKET_TEMP_START_DATE:
    case SET_TICKET_TEMP_START_DATE_INPUT:
    case SET_TICKET_TEMP_START_DATE_MOMENT:
    case SET_TICKET_TEMP_END_DATE:
    case SET_TICKET_TEMP_END_DATE_INPUT:
    case SET_TICKET_TEMP_END_DATE_MOMENT:
    case SET_TICKET_TEMP_START_TIME:
    case SET_TICKET_TEMP_END_TIME:
    case SET_TICKET_TEMP_START_TIME_INPUT:
    case SET_TICKET_TEMP_END_TIME_INPUT:
    case SET_TICKET_TEMP_CAPACITY_TYPE:
    case SET_TICKET_TEMP_CAPACITY:
      return ticket_objectSpread(ticket_objectSpread({}, state), {}, {
        tempDetails: ticket_temp_details(state.tempDetails, action)
      });
    case SET_TICKET_SOLD:
      return ticket_objectSpread(ticket_objectSpread({}, state), {}, {
        sold: action.payload.sold
      });
    case SET_TICKET_AVAILABLE:
      return ticket_objectSpread(ticket_objectSpread({}, state), {}, {
        available: action.payload.available
      });
    case SET_TICKET_ID:
      return ticket_objectSpread(ticket_objectSpread({}, state), {}, {
        ticketId: action.payload.ticketId
      });
    case SET_TICKET_CURRENCY_SYMBOL:
      return ticket_objectSpread(ticket_objectSpread({}, state), {}, {
        currencySymbol: action.payload.currencySymbol
      });
    case SET_TICKET_CURRENCY_POSITION:
      return ticket_objectSpread(ticket_objectSpread({}, state), {}, {
        currencyPosition: action.payload.currencyPosition
      });
    case SET_TICKET_PROVIDER:
      return ticket_objectSpread(ticket_objectSpread({}, state), {}, {
        provider: action.payload.provider
      });
    case SET_TICKET_HAS_ATTENDEE_INFO_FIELDS:
      return ticket_objectSpread(ticket_objectSpread({}, state), {}, {
        hasAttendeeInfoFields: action.payload.hasAttendeeInfoFields
      });
    case SET_TICKET_IS_LOADING:
      return ticket_objectSpread(ticket_objectSpread({}, state), {}, {
        isLoading: action.payload.isLoading
      });
    case SET_TICKET_IS_MODAL_OPEN:
      return ticket_objectSpread(ticket_objectSpread({}, state), {}, {
        isModalOpen: action.payload.isModalOpen
      });
    case SET_TICKET_HAS_BEEN_CREATED:
      return ticket_objectSpread(ticket_objectSpread({}, state), {}, {
        hasBeenCreated: action.payload.hasBeenCreated
      });
    case SET_TICKET_HAS_CHANGES:
      return ticket_objectSpread(ticket_objectSpread({}, state), {}, {
        hasChanges: action.payload.hasChanges
      });
    case SET_TICKET_HAS_DURATION_ERROR:
      return ticket_objectSpread(ticket_objectSpread({}, state), {}, {
        hasDurationError: action.payload.hasDurationError
      });
    case SET_TICKET_IS_SELECTED:
      return ticket_objectSpread(ticket_objectSpread({}, state), {}, {
        isSelected: action.payload.isSelected
      });
    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/modules/data/blocks/ticket/reducers/tickets.js

function tickets_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function tickets_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? tickets_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : tickets_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


const byClientId = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case SET_TICKET_TITLE:
    case SET_TICKET_DESCRIPTION:
    case SET_TICKET_PRICE:
    case SET_TICKET_SKU:
    case SET_TICKET_IAC_SETTING:
    case SET_TICKET_START_DATE:
    case SET_TICKET_START_DATE_INPUT:
    case SET_TICKET_START_DATE_MOMENT:
    case SET_TICKET_END_DATE:
    case SET_TICKET_END_DATE_INPUT:
    case SET_TICKET_END_DATE_MOMENT:
    case SET_TICKET_START_TIME:
    case SET_TICKET_END_TIME:
    case SET_TICKET_START_TIME_INPUT:
    case SET_TICKET_END_TIME_INPUT:
    case SET_TICKET_CAPACITY_TYPE:
    case SET_TICKET_CAPACITY:
    case SET_TICKET_TEMP_TITLE:
    case SET_TICKET_TEMP_DESCRIPTION:
    case SET_TICKET_TEMP_PRICE:
    case SET_TICKET_TEMP_SKU:
    case SET_TICKET_TEMP_IAC_SETTING:
    case SET_TICKET_TEMP_START_DATE:
    case SET_TICKET_TEMP_START_DATE_INPUT:
    case SET_TICKET_TEMP_START_DATE_MOMENT:
    case SET_TICKET_TEMP_END_DATE:
    case SET_TICKET_TEMP_END_DATE_INPUT:
    case SET_TICKET_TEMP_END_DATE_MOMENT:
    case SET_TICKET_TEMP_START_TIME:
    case SET_TICKET_TEMP_END_TIME:
    case SET_TICKET_TEMP_START_TIME_INPUT:
    case SET_TICKET_TEMP_END_TIME_INPUT:
    case SET_TICKET_TEMP_CAPACITY_TYPE:
    case SET_TICKET_TEMP_CAPACITY:
    case SET_TICKET_SOLD:
    case SET_TICKET_AVAILABLE:
    case SET_TICKET_ID:
    case SET_TICKET_CURRENCY_SYMBOL:
    case SET_TICKET_CURRENCY_POSITION:
    case SET_TICKET_PROVIDER:
    case SET_TICKET_HAS_ATTENDEE_INFO_FIELDS:
    case SET_TICKET_ATTENDEE_INFO_FIELDS:
    case SET_TICKET_IS_LOADING:
    case SET_TICKET_IS_MODAL_OPEN:
    case SET_TICKET_HAS_BEEN_CREATED:
    case SET_TICKET_HAS_CHANGES:
    case SET_TICKET_HAS_DURATION_ERROR:
    case SET_TICKET_IS_SELECTED:
    case REGISTER_TICKET_BLOCK:
      return tickets_objectSpread(tickets_objectSpread({}, state), {}, {
        [action.payload.clientId]: tickets_ticket(state[action.payload.clientId], action)
      });
    case REMOVE_TICKET_BLOCK:
      return external_lodash_omit_default()(state, [action.payload.clientId]);
    case REMOVE_TICKET_BLOCKS:
      return {};
    default:
      return state;
  }
};
const allClientIds = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case REGISTER_TICKET_BLOCK:
      return [...state, action.payload.clientId];
    case REMOVE_TICKET_BLOCK:
      return state.filter(clientId => action.payload.clientId !== clientId);
    case REMOVE_TICKET_BLOCKS:
      return [];
    default:
      return state;
  }
};
/* harmony default export */ var reducers_tickets = (Object(external_tribe_modules_redux_["combineReducers"])({
  byClientId,
  allClientIds
}));
// CONCATENATED MODULE: ./src/modules/data/blocks/ticket/reducers/header-image.js
/**
 * Internal dependencies
 */


/**
 * Full payload from gutenberg media upload is not used,
 * only id, alt, and src are used for this specific case.
 */
const reducers_header_image_DEFAULT_STATE = {
  id: 0,
  src: '',
  alt: ''
};
/* harmony default export */ var reducers_header_image = (function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : reducers_header_image_DEFAULT_STATE;
  let action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case SET_TICKETS_HEADER_IMAGE:
      return {
        id: action.payload.id,
        src: action.payload.src,
        alt: action.payload.alt
      };
    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/modules/data/blocks/ticket/reducer.js

function ticket_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function ticket_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ticket_reducer_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ticket_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * Internal dependencies
 */



const ticket_reducer_DEFAULT_STATE = {
  headerImage: reducers_header_image_DEFAULT_STATE,
  isSelected: false,
  isSettingsOpen: false,
  isSettingsLoading: false,
  provider: '',
  sharedCapacity: '',
  tempSharedCapacity: '',
  tickets: reducers_tickets(undefined, {})
};
/* harmony default export */ var ticket_reducer = (function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ticket_reducer_DEFAULT_STATE;
  let action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case SET_TICKETS_HEADER_IMAGE:
      return ticket_reducer_objectSpread(ticket_reducer_objectSpread({}, state), {}, {
        headerImage: reducers_header_image(state.headerImage, action)
      });
    case SET_TICKETS_IS_SELECTED:
      return ticket_reducer_objectSpread(ticket_reducer_objectSpread({}, state), {}, {
        isSelected: action.payload.isSelected
      });
    case SET_TICKETS_IS_SETTINGS_OPEN:
      return ticket_reducer_objectSpread(ticket_reducer_objectSpread({}, state), {}, {
        isSettingsOpen: action.payload.isSettingsOpen
      });
    case SET_TICKETS_IS_SETTINGS_LOADING:
      return ticket_reducer_objectSpread(ticket_reducer_objectSpread({}, state), {}, {
        isSettingsLoading: action.payload.isSettingsLoading
      });
    case SET_TICKETS_PROVIDER:
      return ticket_reducer_objectSpread(ticket_reducer_objectSpread({}, state), {}, {
        provider: action.payload.provider
      });
    case SET_TICKETS_SHARED_CAPACITY:
      return ticket_reducer_objectSpread(ticket_reducer_objectSpread({}, state), {}, {
        sharedCapacity: action.payload.sharedCapacity
      });
    case SET_TICKETS_TEMP_SHARED_CAPACITY:
      return ticket_reducer_objectSpread(ticket_reducer_objectSpread({}, state), {}, {
        tempSharedCapacity: action.payload.tempSharedCapacity
      });
    case SET_TICKET_TITLE:
    case SET_TICKET_DESCRIPTION:
    case SET_TICKET_PRICE:
    case SET_TICKET_SKU:
    case SET_TICKET_IAC_SETTING:
    case SET_TICKET_START_DATE:
    case SET_TICKET_START_DATE_INPUT:
    case SET_TICKET_START_DATE_MOMENT:
    case SET_TICKET_END_DATE:
    case SET_TICKET_END_DATE_INPUT:
    case SET_TICKET_END_DATE_MOMENT:
    case SET_TICKET_START_TIME:
    case SET_TICKET_END_TIME:
    case SET_TICKET_START_TIME_INPUT:
    case SET_TICKET_END_TIME_INPUT:
    case SET_TICKET_CAPACITY_TYPE:
    case SET_TICKET_CAPACITY:
    case SET_TICKET_TEMP_TITLE:
    case SET_TICKET_TEMP_DESCRIPTION:
    case SET_TICKET_TEMP_PRICE:
    case SET_TICKET_TEMP_SKU:
    case SET_TICKET_TEMP_IAC_SETTING:
    case SET_TICKET_TEMP_START_DATE:
    case SET_TICKET_TEMP_START_DATE_INPUT:
    case SET_TICKET_TEMP_START_DATE_MOMENT:
    case SET_TICKET_TEMP_END_DATE:
    case SET_TICKET_TEMP_END_DATE_INPUT:
    case SET_TICKET_TEMP_END_DATE_MOMENT:
    case SET_TICKET_TEMP_START_TIME:
    case SET_TICKET_TEMP_END_TIME:
    case SET_TICKET_TEMP_START_TIME_INPUT:
    case SET_TICKET_TEMP_END_TIME_INPUT:
    case SET_TICKET_TEMP_CAPACITY_TYPE:
    case SET_TICKET_TEMP_CAPACITY:
    case SET_TICKET_SOLD:
    case SET_TICKET_AVAILABLE:
    case SET_TICKET_ID:
    case SET_TICKET_CURRENCY_SYMBOL:
    case SET_TICKET_CURRENCY_POSITION:
    case SET_TICKET_PROVIDER:
    case SET_TICKET_HAS_ATTENDEE_INFO_FIELDS:
    case SET_TICKET_ATTENDEE_INFO_FIELDS:
    case SET_TICKET_IS_LOADING:
    case SET_TICKET_IS_MODAL_OPEN:
    case SET_TICKET_HAS_BEEN_CREATED:
    case SET_TICKET_HAS_CHANGES:
    case SET_TICKET_HAS_DURATION_ERROR:
    case SET_TICKET_IS_SELECTED:
    case REGISTER_TICKET_BLOCK:
    case REMOVE_TICKET_BLOCK:
    case REMOVE_TICKET_BLOCKS:
      return ticket_reducer_objectSpread(ticket_reducer_objectSpread({}, state), {}, {
        tickets: reducers_tickets(state.tickets, action)
      });
    default:
      return state;
  }
});
// EXTERNAL MODULE: external "lodash.includes"
var external_lodash_includes_ = __webpack_require__("Etll");
var external_lodash_includes_default = /*#__PURE__*/__webpack_require__.n(external_lodash_includes_);

// EXTERNAL MODULE: external "tribe.common.data"
var external_tribe_common_data_ = __webpack_require__("ZNLL");

// CONCATENATED MODULE: ./src/modules/data/shared/move/types.js
/**
 * Internal dependencies
 */


//
// ─── MODAL DATA ─────────────────────────────────────────────────────────────────
//

const SET_MODAL_DATA = `${PREFIX_TICKETS_STORE}/SET_MODAL_DATA`;
const RESET_MODAL_DATA = `${PREFIX_TICKETS_STORE}/RESET_MODAL_DATA`;
const SUBMIT_MODAL = `${PREFIX_TICKETS_STORE}/SUBMIT_MODAL`;

//
// ─── MODAL UI STATE ─────────────────────────────────────────────────────────────
//

const INITIALIZE_MODAL = `${PREFIX_TICKETS_STORE}/INITIALIZE_MODAL`;
const SHOW_MODAL = `${PREFIX_TICKETS_STORE}/SHOW_MODAL`;
const HIDE_MODAL = `${PREFIX_TICKETS_STORE}/HIDE_MODAL`;

//
// ─── API ───────────────────────────────────────────────────────────────────────-
//

const FETCH_POST_TYPES = `${PREFIX_TICKETS_STORE}/FETCH_POST_TYPES`;
const FETCH_POST_TYPES_SUCCESS = `${PREFIX_TICKETS_STORE}/FETCH_POST_TYPES_SUCCESS`;
const FETCH_POST_TYPES_ERROR = `${PREFIX_TICKETS_STORE}/FETCH_POST_TYPES_ERROR`;
const FETCH_POST_CHOICES = `${PREFIX_TICKETS_STORE}/FETCH_POST_CHOICES`;
const FETCH_POST_CHOICES_SUCCESS = `${PREFIX_TICKETS_STORE}/FETCH_POST_CHOICES_SUCCESS`;
const FETCH_POST_CHOICES_ERROR = `${PREFIX_TICKETS_STORE}/FETCH_POST_CHOICES_ERROR`;
const MOVE_TICKET = `${PREFIX_TICKETS_STORE}/MOVE_TICKET`;
const MOVE_TICKET_SUCCESS = `${PREFIX_TICKETS_STORE}/MOVE_TICKET_SUCCESS`;
const MOVE_TICKET_ERROR = `${PREFIX_TICKETS_STORE}/MOVE_TICKET_ERROR`;
// CONCATENATED MODULE: ./src/modules/data/shared/move/selectors.js

/**
 * External dependencies
 */

const getMove = state => state.tickets.move;
const _getUI = Object(external_tribe_modules_reselect_["createSelector"])(getMove, move => move.ui);
const _getPostTypes = Object(external_tribe_modules_reselect_["createSelector"])(getMove, move => move.postTypes);
const _getPosts = Object(external_tribe_modules_reselect_["createSelector"])(getMove, move => move.posts);
const _getModal = Object(external_tribe_modules_reselect_["createSelector"])(getMove, move => move.modal);
const selectors_isModalShowing = Object(external_tribe_modules_reselect_["createSelector"])(_getUI, ui => ui.showModal);
const isFetchingPostTypes = Object(external_tribe_modules_reselect_["createSelector"])(_getPostTypes, postTypes => postTypes.isFetching);
const isFetchingPosts = Object(external_tribe_modules_reselect_["createSelector"])(_getPosts, posts => posts.isFetching);
const getPostTypes = Object(external_tribe_modules_reselect_["createSelector"])(_getPostTypes, postTypes => postTypes.posts);
const getPosts = Object(external_tribe_modules_reselect_["createSelector"])(_getPosts, posts => posts.posts);
const getPostTypeOptions = Object(external_tribe_modules_reselect_["createSelector"])(getPostTypes, types => Object.keys(types).map(type => ({
  value: type,
  label: types[type]
})));
const getPostOptions = Object(external_tribe_modules_reselect_["createSelector"])(getPosts, posts => Object.keys(posts).map(post => ({
  value: post,
  label: posts[post]
})));
const getModalPostType = Object(external_tribe_modules_reselect_["createSelector"])(_getModal, modal => modal.post_type);
const getModalSearch = Object(external_tribe_modules_reselect_["createSelector"])(_getModal, modal => modal.search_terms);
const getModalTarget = Object(external_tribe_modules_reselect_["createSelector"])(_getModal, modal => modal.target_post_id);
const getModalTicketId = Object(external_tribe_modules_reselect_["createSelector"])(_getModal, modal => modal.ticketId);
const getModalClientId = Object(external_tribe_modules_reselect_["createSelector"])(_getModal, modal => modal.clientId);
const isModalSubmitting = Object(external_tribe_modules_reselect_["createSelector"])(_getModal, modal => modal.isSubmitting);
const getPostTypeOptionValue = Object(external_tribe_modules_reselect_["createSelector"])([getPostTypeOptions, getModalPostType], (postTypeOptions, postType) => external_lodash_find_default()(postTypeOptions, ['value', postType]));
const hasSelectedPost = Object(external_tribe_modules_reselect_["createSelector"])([getPostOptions, getModalTarget], (posts, target) => !!(target && external_lodash_find_default()(posts, ['value', target])));
// EXTERNAL MODULE: external "lodash.some"
var external_lodash_some_ = __webpack_require__("XNR4");
var external_lodash_some_default = /*#__PURE__*/__webpack_require__.n(external_lodash_some_);

// EXTERNAL MODULE: external "tribe.modules.reduxSaga"
var external_tribe_modules_reduxSaga_ = __webpack_require__("1fKG");

// CONCATENATED MODULE: ./src/modules/data/shared/sagas.js

/* eslint-disable max-len */

/**
 * External Dependencies
 */



/**
 * Internal dependencies
 */



/*
 * Determines if current post is a tribe event
 * @export
 * @returns {Boolean} bool
 */
function* isTribeEventPostType() {
  const postType = yield Object(external_tribe_modules_reduxSaga_effects_["call"])([Object(external_wp_data_["select"])('core/editor'), 'getEditedPostAttribute'], 'type');
  return postType === external_tribe_common_data_["editor"].EVENT;
}

/**
 * Creates event channel subscribing to WP editor state when post type is loaded.
 * Used as post type is not available upon load in some cases, so some false negatives
 *
 * @returns {Function} Channel
 */
function hasPostTypeChannel() {
  return Object(external_tribe_modules_reduxSaga_["eventChannel"])(emit => {
    const wpEditor = Object(external_wp_data_["select"])('core/editor');
    const predicates = [() => !!wpEditor.getEditedPostAttribute('type')];

    // Returns unsubscribe function
    return Object(external_wp_data_["subscribe"])(() => {
      // Only emit when truthy
      if (external_lodash_some_default()(predicates, fn => fn())) {
        emit(true); // Emitted value is insignificant here, but cannot be left undefined
      }
    });
  });
}

/**
 * Creates event channel subscribing to WP editor state when saving post
 *
 * @returns {Function} Channel
 */
function createWPEditorSavingChannel() {
  return Object(external_tribe_modules_reduxSaga_["eventChannel"])(emit => {
    const wpEditor = Object(external_wp_data_["select"])('core/editor');
    const predicates = [() => wpEditor.isSavingPost() && !wpEditor.isAutosavingPost()];

    // Returns unsubscribe function
    return Object(external_wp_data_["subscribe"])(() => {
      // Only emit when truthy
      if (external_lodash_some_default()(predicates, fn => fn())) {
        emit(true); // Emitted value is insignificant here, but cannot be left undefined
      }
    });
  });
}

/**
 * Creates event channel subscribing to WP editor state when not saving post
 *
 * @returns {Function} Channel
 */
function createWPEditorNotSavingChannel() {
  return Object(external_tribe_modules_reduxSaga_["eventChannel"])(emit => {
    const wpEditor = Object(external_wp_data_["select"])('core/editor');
    const predicates = [() => !(wpEditor.isSavingPost() && !wpEditor.isAutosavingPost())];

    // Returns unsubscribe function
    return Object(external_wp_data_["subscribe"])(() => {
      // Only emit when truthy
      if (external_lodash_some_default()(predicates, fn => fn())) {
        emit(true); // Emitted value is insignificant here, but cannot be left undefined
      }
    });
  });
}

/**
 * Create date objects used throughout sagas
 *
 * @export
 * @yields
 * @param {string} date datetime string
 * @returns {Object} Object of dates/moments
 */
function* createDates(date) {
  const {
    datepickerFormat
  } = yield Object(external_tribe_modules_reduxSaga_effects_["call"])([external_tribe_common_utils_["globals"], 'tecDateSettings']);
  const moment = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toMoment, date);
  const currentDate = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toDatabaseDate, moment);
  const dateInput = yield datepickerFormat ? Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toDate, moment, datepickerFormat) : Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toDate, moment);
  const time = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toDatabaseTime, moment);
  const timeInput = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toTime, moment);
  return {
    moment,
    date: currentDate,
    dateInput,
    time,
    timeInput
  };
}
// CONCATENATED MODULE: ./src/modules/data/blocks/ticket/sagas.js


function sagas_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function sagas_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? sagas_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : sagas_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * External Dependencies
 */

/**
 * Wordpress dependencies
 */




/**
 * Internal dependencies
 */















const {
  UNLIMITED: sagas_UNLIMITED,
  SHARED: sagas_SHARED,
  TICKET_TYPES: sagas_TICKET_TYPES,
  PROVIDER_CLASS_TO_PROVIDER_MAPPING: sagas_PROVIDER_CLASS_TO_PROVIDER_MAPPING
} = constants_namespaceObject;
const {
  restNonce,
  tecDateSettings
} = external_tribe_common_utils_["globals"];
const {
  wpREST
} = external_tribe_common_utils_["api"];
function* createMissingTicketBlocks(tickets) {
  const {
    insertBlock
  } = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_wp_data_["dispatch"], 'core/editor');
  const {
    getBlockCount,
    getBlocks
  } = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_wp_data_["select"], 'core/editor');
  const ticketsBlocks = yield Object(external_tribe_modules_reduxSaga_effects_["call"])([getBlocks(), 'filter'], block => block.name === 'tribe/tickets');
  ticketsBlocks.forEach(_ref => {
    let {
      clientId
    } = _ref;
    tickets.forEach(ticketId => {
      const attributes = {
        hasBeenCreated: true,
        ticketId
      };
      const nextChildPosition = getBlockCount(clientId);
      const block = Object(external_wp_blocks_["createBlock"])('tribe/tickets-item', attributes);
      insertBlock(block, nextChildPosition, clientId, false);
    });
  });
}
function* setTicketsInitialState(action) {
  const {
    get
  } = action.payload;
  const header = parseInt(get('header', reducers_header_image_DEFAULT_STATE.id), 10);
  const sharedCapacity = get('sharedCapacity');
  const ticketsList = get('tickets', []);
  const ticketsInBlock = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketsIdsInBlocks);
  // Get only the IDs of the tickets that are not in the block list already
  const ticketsDiff = ticketsList.filter(item => !external_lodash_includes_default()(ticketsInBlock, item));
  if (ticketsDiff.length >= 1) {
    yield Object(external_tribe_modules_reduxSaga_effects_["call"])(createMissingTicketBlocks, ticketsDiff);
  }

  // Meta value is '0' however fields use empty string as default
  if (sharedCapacity !== '0') {
    yield Object(external_tribe_modules_reduxSaga_effects_["all"])([Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketsSharedCapacity(sharedCapacity)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketsTempSharedCapacity(sharedCapacity))]);
  }
  if (!isNaN(header) && header !== 0) {
    yield Object(external_tribe_modules_reduxSaga_effects_["put"])(actions_fetchTicketsHeaderImage(header));
  }
  let provider = get('provider', ticket_reducer_DEFAULT_STATE.provider);
  if (provider === RSVP_CLASS || !provider) {
    const defaultProvider = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getDefaultTicketProvider);
    provider = defaultProvider === RSVP_CLASS ? '' : defaultProvider;
  }
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketsProvider(provider));
}
function* resetTicketsBlock() {
  const hasCreatedTickets = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(selectors_hasCreatedTickets);
  yield Object(external_tribe_modules_reduxSaga_effects_["all"])([Object(external_tribe_modules_reduxSaga_effects_["put"])(removeTicketBlocks()), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketsIsSettingsOpen(false))]);
  if (!hasCreatedTickets) {
    const currentMeta = yield Object(external_tribe_modules_reduxSaga_effects_["call"])([Object(external_wp_data_["select"])('core/editor'), 'getCurrentPostAttribute'], 'meta');
    const newMeta = sagas_objectSpread(sagas_objectSpread({}, currentMeta), {}, {
      [KEY_TICKET_CAPACITY]: ''
    });
    yield Object(external_tribe_modules_reduxSaga_effects_["call"])([Object(external_wp_data_["dispatch"])('core/editor'), 'editPost'], {
      meta: newMeta
    });
    yield Object(external_tribe_modules_reduxSaga_effects_["all"])([Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketsSharedCapacity('')), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketsTempSharedCapacity(''))]);
  }
}
function* setTicketInitialState(action) {
  const {
    clientId,
    get
  } = action.payload;
  const ticketId = get('ticketId', ticket_DEFAULT_STATE.ticketId);
  const hasBeenCreated = get('hasBeenCreated', ticket_DEFAULT_STATE.hasBeenCreated);
  const datePickerFormat = tecDateSettings().datepickerFormat;
  const publishDate = yield Object(external_tribe_modules_reduxSaga_effects_["call"])([Object(external_wp_data_["select"])('core/editor'), 'getEditedPostAttribute'], 'date');
  const startMoment = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toMoment, publishDate);
  const startDate = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toDatabaseDate, startMoment);
  const startDateInput = yield datePickerFormat ? Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toDate, startMoment, datePickerFormat) : Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toDate, startMoment);
  const startTime = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toDatabaseTime, startMoment);
  const startTimeInput = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toTime, startMoment);
  yield Object(external_tribe_modules_reduxSaga_effects_["all"])([Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketStartDate(clientId, startDate)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketStartDateInput(clientId, startDateInput)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketStartDateMoment(clientId, startMoment)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketStartTime(clientId, startTime)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketStartTimeInput(clientId, startTimeInput)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTempStartDate(clientId, startDate)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTempStartDateInput(clientId, startDateInput)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTempStartDateMoment(clientId, startMoment)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTempStartTime(clientId, startTime)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTempStartTimeInput(clientId, startTimeInput)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketHasBeenCreated(clientId, hasBeenCreated))]);
  const isEvent = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(isTribeEventPostType);

  // Only run this on events post type.
  if (isEvent && window.tribe.events) {
    // This try-catch may be redundant given the above if statement.
    try {
      // NOTE: This requires TEC to be installed, if not installed, do not set an end date
      // Ticket purchase window should end when event starts
      const eventStart = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(tribe.events.data.blocks.datetime.selectors.getStart);
      const endMoment = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toMoment, eventStart);
      const endDate = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toDatabaseDate, endMoment);
      const endDateInput = yield datePickerFormat ? Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toDate, endMoment, datePickerFormat) : Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toDate, endMoment);
      const endTime = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toDatabaseTime, endMoment);
      const endTimeInput = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toTime, endMoment);
      yield Object(external_tribe_modules_reduxSaga_effects_["all"])([Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketEndDate(clientId, endDate)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketEndDateInput(clientId, endDateInput)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketEndDateMoment(clientId, endMoment)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketEndTime(clientId, endTime)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketEndTimeInput(clientId, endTimeInput)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTempEndDate(clientId, endDate)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTempEndDateInput(clientId, endDateInput)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTempEndDateMoment(clientId, endMoment)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTempEndTime(clientId, endTime)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTempEndTimeInput(clientId, endTimeInput))]);
    } catch (err) {
      console.error(err);
      // ¯\_(ツ)_/¯
    }
  }

  const hasTicketsPlus = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(external_tribe_common_data_["plugins"].selectors.hasPlugin, external_tribe_common_data_["plugins"].constants.TICKETS_PLUS);
  if (hasTicketsPlus) {
    yield Object(external_tribe_modules_reduxSaga_effects_["all"])([Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketCapacityType(clientId, TICKET_TYPES[SHARED])), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTempCapacityType(clientId, TICKET_TYPES[SHARED]))]);
  }
  const sharedCapacity = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketsSharedCapacity);
  if (sharedCapacity) {
    yield Object(external_tribe_modules_reduxSaga_effects_["all"])([Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketCapacity(clientId, sharedCapacity)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTempCapacity(clientId, sharedCapacity))]);
  }
  if (ticketId !== 0) {
    yield Object(external_tribe_modules_reduxSaga_effects_["all"])([Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketId(clientId, ticketId)), Object(external_tribe_modules_reduxSaga_effects_["call"])(fetchTicket, {
      payload: {
        clientId,
        ticketId
      }
    })]);
  }
  yield Object(external_tribe_modules_reduxSaga_effects_["call"])(handleTicketDurationError, clientId);
  yield Object(external_tribe_modules_reduxSaga_effects_["fork"])(saveTicketWithPostSave, clientId);
}
function* setBodyDetails(clientId) {
  const body = new FormData();
  const props = {
    clientId
  };
  const rootClientId = yield Object(external_tribe_modules_reduxSaga_effects_["call"])([Object(external_wp_data_["select"])('core/editor'), 'getBlockRootClientId'], clientId);
  const ticketProvider = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketProvider, props);
  const ticketsProvider = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketsProvider);
  body.append('post_id', yield Object(external_tribe_modules_reduxSaga_effects_["call"])([Object(external_wp_data_["select"])('core/editor'), 'getCurrentPostId']));
  body.append('provider', ticketProvider || ticketsProvider);
  body.append('name', yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempTitle, props));
  body.append('description', yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempDescription, props));
  body.append('price', yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempPrice, props));
  body.append('start_date', yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempStartDate, props));
  body.append('start_time', yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempStartTime, props));
  body.append('end_date', yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempEndDate, props));
  body.append('end_time', yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempEndTime, props));
  body.append('sku', yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempSku, props));
  body.append('iac', yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempIACSetting, props));
  body.append('menu_order', yield Object(external_tribe_modules_reduxSaga_effects_["call"])([Object(external_wp_data_["select"])('core/editor'), 'getBlockIndex'], clientId, rootClientId));
  const capacityType = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempCapacityType, props);
  const capacity = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempCapacity, props);
  const isUnlimited = capacityType === sagas_TICKET_TYPES[sagas_UNLIMITED];
  body.append('ticket[mode]', isUnlimited ? '' : capacityType);
  body.append('ticket[capacity]', isUnlimited ? '' : capacity);
  if (capacityType === sagas_TICKET_TYPES[sagas_SHARED]) {
    body.append('ticket[event_capacity]', yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketsTempSharedCapacity));
  }
  return body;
}
function* removeTicketBlock(clientId) {
  const {
    removeBlock
  } = Object(external_wp_data_["dispatch"])('core/editor');
  yield Object(external_tribe_modules_reduxSaga_effects_["all"])([Object(external_tribe_modules_reduxSaga_effects_["put"])(actions_removeTicketBlock(clientId)), Object(external_tribe_modules_reduxSaga_effects_["call"])(removeBlock, clientId)]);
}
function* fetchTicket(action) {
  const {
    ticketId,
    clientId
  } = action.payload;
  if (ticketId === 0) {
    return;
  }
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketIsLoading(clientId, true));
  try {
    const {
      response,
      data: ticket
    } = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(wpREST, {
      path: `tickets/${ticketId}`,
      namespace: 'tribe/tickets/v1'
    });
    const {
      status = '',
      provider
    } = ticket;
    if (response.status === 404 || status === 'trash' || provider === RSVP) {
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])(removeTicketBlock, clientId);
      return;
    }
    if (response.ok) {
      /* eslint-disable camelcase */

      const {
        totals = {},
        available_from,
        available_until,
        cost_details,
        title,
        description,
        sku,
        iac,
        capacity_type,
        capacity,
        supports_attendee_information,
        attendee_information_fields
      } = ticket;
      /* eslint-enable camelcase */

      const datePickerFormat = tecDateSettings().datepickerFormat;
      const startMoment = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toMoment, available_from);
      const startDate = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toDatabaseDate, startMoment);
      const startDateInput = yield datePickerFormat ? Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toDate, startMoment, datePickerFormat) : Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toDate, startMoment);
      const startTime = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toDatabaseTime, startMoment);
      const startTimeInput = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toTime, startMoment);
      let endMoment = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toMoment, '');
      let endDate = '';
      let endDateInput = '';
      let endTime = '';
      let endTimeInput = '';
      if (available_until) {
        // eslint-disable-line camelcase
        endMoment = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toMoment, available_until);
        endDate = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toDatabaseDate, endMoment);
        endDateInput = yield datePickerFormat ? Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toDate, endMoment, datePickerFormat) : Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toDate, endMoment);
        endTime = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toDatabaseTime, endMoment);
        endTimeInput = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toTime, endMoment);
      }
      const details = {
        attendeeInfoFields: attendee_information_fields,
        title,
        description,
        price: cost_details.values[0],
        sku,
        iac,
        startDate,
        startDateInput,
        startDateMoment: startMoment,
        endDate,
        endDateInput,
        endDateMoment: endMoment,
        startTime,
        endTime,
        startTimeInput,
        endTimeInput,
        capacityType: capacity_type,
        capacity
      };
      yield Object(external_tribe_modules_reduxSaga_effects_["all"])([Object(external_tribe_modules_reduxSaga_effects_["put"])(actions_setTicketDetails(clientId, details)), Object(external_tribe_modules_reduxSaga_effects_["put"])(actions_setTicketTempDetails(clientId, details)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketSold(clientId, totals.sold)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketAvailable(clientId, totals.stock)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketCurrencySymbol(clientId, cost_details.currency_symbol)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketCurrencyPosition(clientId, cost_details.currency_position)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketProvider(clientId, provider)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketHasAttendeeInfoFields(clientId, supports_attendee_information)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketHasBeenCreated(clientId, true))]);
    }
  } catch (e) {
    console.error(e);
    /**
     * @todo handle error scenario
     */
  }

  yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketIsLoading(clientId, false));
}
function* createNewTicket(action) {
  const {
    clientId
  } = action.payload;
  const props = {
    clientId
  };
  const {
    add_ticket_nonce = ''
  } = restNonce(); // eslint-disable-line camelcase
  const body = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(setBodyDetails, clientId);
  body.append('add_ticket_nonce', add_ticket_nonce);
  try {
    yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketIsLoading(clientId, true));
    const {
      response,
      data: ticket
    } = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(wpREST, {
      path: 'tickets/',
      namespace: 'tribe/tickets/v1',
      initParams: {
        method: 'POST',
        body
      }
    });
    if (response.ok) {
      const sharedCapacity = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketsSharedCapacity);
      const tempSharedCapacity = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketsTempSharedCapacity);
      if (sharedCapacity === '' && !isNaN(tempSharedCapacity) && tempSharedCapacity > 0) {
        yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketsSharedCapacity(tempSharedCapacity));
      }
      const available = ticket.capacity_details.available === -1 ? 0 : ticket.capacity_details.available;
      const [title, description, price, sku, iac, startDate, startDateInput, startDateMoment, endDate, endDateInput, endDateMoment, startTime, endTime, startTimeInput, endTimeInput, capacityType, capacity] = yield Object(external_tribe_modules_reduxSaga_effects_["all"])([Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempTitle, props), Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempDescription, props), Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempPrice, props), Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempSku, props), Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempIACSetting, props), Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempStartDate, props), Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempStartDateInput, props), Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempStartDateMoment, props), Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempEndDate, props), Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempEndDateInput, props), Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempEndDateMoment, props), Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempStartTime, props), Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempEndTime, props), Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempStartTimeInput, props), Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempEndTimeInput, props), Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempCapacityType, props), Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempCapacity, props)]);
      yield Object(external_tribe_modules_reduxSaga_effects_["all"])([Object(external_tribe_modules_reduxSaga_effects_["put"])(actions_setTicketDetails(clientId, {
        title,
        description,
        price,
        sku,
        iac,
        startDate,
        startDateInput,
        startDateMoment,
        endDate,
        endDateInput,
        endDateMoment,
        startTime,
        endTime,
        startTimeInput,
        endTimeInput,
        capacityType,
        capacity
      })), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketId(clientId, ticket.id)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketHasBeenCreated(clientId, true)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketAvailable(clientId, available)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketProvider(clientId, sagas_PROVIDER_CLASS_TO_PROVIDER_MAPPING[ticket.provider_class])), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketHasChanges(clientId, false))]);
      yield Object(external_tribe_modules_reduxSaga_effects_["fork"])(saveTicketWithPostSave, clientId);
    }
  } catch (e) {
    console.error(e);
    /**
     * @todo: handle error scenario
     */
  } finally {
    yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketIsLoading(clientId, false));
  }
}
function* updateTicket(action) {
  const {
    clientId
  } = action.payload;
  const props = {
    clientId
  };
  const {
    edit_ticket_nonce = ''
  } = restNonce(); // eslint-disable-line camelcase
  const body = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(setBodyDetails, clientId);
  body.append('edit_ticket_nonce', edit_ticket_nonce);
  const ticketId = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketId, props);
  try {
    const data = [];
    for (const [key, value] of body.entries()) {
      data.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
    }
    yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketIsLoading(clientId, true));
    const {
      response,
      data: ticket
    } = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(wpREST, {
      path: `tickets/${ticketId}`,
      namespace: 'tribe/tickets/v1',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      initParams: {
        method: 'PUT',
        body: data.join('&')
      }
    });
    if (response.ok) {
      const {
        capacity_details
      } = ticket; // eslint-disable-line camelcase
      const available = capacity_details.available === -1 ? 0 : capacity_details.available;
      const [title, description, price, sku, iac, startDate, startDateInput, startDateMoment, endDate, endDateInput, endDateMoment, startTime, endTime, startTimeInput, endTimeInput, capacityType, capacity] = yield Object(external_tribe_modules_reduxSaga_effects_["all"])([Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempTitle, props), Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempDescription, props), Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempPrice, props), Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempSku, props), Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempIACSetting, props), Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempStartDate, props), Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempStartDateInput, props), Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempStartDateMoment, props), Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempEndDate, props), Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempEndDateInput, props), Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempEndDateMoment, props), Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempStartTime, props), Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempEndTime, props), Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempStartTimeInput, props), Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempEndTimeInput, props), Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempCapacityType, props), Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempCapacity, props)]);
      yield Object(external_tribe_modules_reduxSaga_effects_["all"])([Object(external_tribe_modules_reduxSaga_effects_["put"])(actions_setTicketDetails(clientId, {
        title,
        description,
        price,
        sku,
        iac,
        startDate,
        startDateInput,
        startDateMoment,
        endDate,
        endDateInput,
        endDateMoment,
        startTime,
        endTime,
        startTimeInput,
        endTimeInput,
        capacityType,
        capacity
      })), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketSold(clientId, capacity_details.sold)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketAvailable(clientId, available)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketHasChanges(clientId, false))]);
    }
  } catch (e) {
    console.error(e);
    /**
     * @todo: handle error scenario
     */
  } finally {
    yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketIsLoading(clientId, false));
  }
}
function* deleteTicket(action) {
  const {
    clientId
  } = action.payload;
  const props = {
    clientId
  };
  const shouldDelete = yield Object(external_tribe_modules_reduxSaga_effects_["call"])([window, 'confirm'], Object(external_wp_i18n_["__"])('Are you sure you want to delete this ticket? It cannot be undone.', 'event-tickets'));
  if (shouldDelete) {
    const ticketId = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketId, props);
    const hasBeenCreated = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketHasBeenCreated, props);
    yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketIsSelected(clientId, false));
    yield Object(external_tribe_modules_reduxSaga_effects_["put"])(actions_removeTicketBlock(clientId));
    yield Object(external_tribe_modules_reduxSaga_effects_["call"])([Object(external_wp_data_["dispatch"])('core/editor'), 'clearSelectedBlock']);
    yield Object(external_tribe_modules_reduxSaga_effects_["call"])([Object(external_wp_data_["dispatch"])('core/editor'), 'removeBlocks'], [clientId]);
    if (hasBeenCreated) {
      const {
        remove_ticket_nonce = ''
      } = restNonce(); // eslint-disable-line camelcase
      const postId = yield Object(external_tribe_modules_reduxSaga_effects_["call"])([Object(external_wp_data_["select"])('core/editor'), 'getCurrentPostId']);

      /**
       * Encode params to be passed into the DELETE request as PHP doesn’t transform the request body
       * of a DELETE request into a super global.
       */
      const body = [`${encodeURIComponent('post_id')}=${encodeURIComponent(postId)}`, `${encodeURIComponent('remove_ticket_nonce')}=${encodeURIComponent(remove_ticket_nonce)}` // eslint-disable-line max-len
      ];

      try {
        yield Object(external_tribe_modules_reduxSaga_effects_["call"])(wpREST, {
          path: `tickets/${ticketId}`,
          namespace: 'tribe/tickets/v1',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          initParams: {
            method: 'DELETE',
            body: body.join('&')
          }
        });
      } catch (e) {
        /**
         * @todo handle error on removal
         */
      }
    }
  }
}
function* fetchTicketsHeaderImage(action) {
  const {
    id
  } = action.payload;
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketsIsSettingsLoading(true));
  try {
    const {
      response,
      data: media
    } = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(wpREST, {
      path: `media/${id}`
    });
    if (response.ok) {
      const headerImage = {
        id: media.id,
        alt: media.alt_text,
        src: media.media_details.sizes.medium.source_url
      };
      yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketsHeaderImage(headerImage));
    }
  } catch (e) {
    console.error(e);
    /**
     * @todo: handle error scenario
     */
  } finally {
    yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketsIsSettingsLoading(false));
  }
}
function* updateTicketsHeaderImage(action) {
  const {
    image
  } = action.payload;
  const postId = yield Object(external_tribe_modules_reduxSaga_effects_["call"])([Object(external_wp_data_["select"])('core/editor'), 'getCurrentPostId']);
  const body = {
    meta: {
      [KEY_TICKET_HEADER]: `${image.id}`
    }
  };
  try {
    /**
     * @todo: until rsvp and tickets header image can be separated, they need to be linked
     */
    yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketsIsSettingsLoading(true));
    yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPIsSettingsLoading(true));
    const slug = Object(external_wp_data_["select"])('core/editor').getCurrentPostType();
    const postType = Object(external_wp_data_["select"])('core').getPostType(slug);
    const restBase = postType.rest_base;
    const {
      response
    } = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(wpREST, {
      path: `${restBase}/${postId}`,
      headers: {
        'Content-Type': 'application/json'
      },
      initParams: {
        method: 'PUT',
        body: JSON.stringify(body)
      }
    });
    if (response.ok) {
      const headerImage = {
        id: image.id,
        alt: image.alt,
        src: image.sizes.medium.url
      };
      /**
       * @todo: until rsvp and tickets header image can be separated, they need to be linked
       */
      yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketsHeaderImage(headerImage));
      yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPHeaderImage(headerImage));
    }
  } catch (e) {
    /**
     * @todo: handle error scenario
     */
  } finally {
    /**
     * @todo: until rsvp and tickets header image can be separated, they need to be linked
     */
    yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketsIsSettingsLoading(false));
    yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPIsSettingsLoading(false));
  }
}
function* deleteTicketsHeaderImage() {
  const postId = yield Object(external_tribe_modules_reduxSaga_effects_["call"])([Object(external_wp_data_["select"])('core/editor'), 'getCurrentPostId']);
  const body = {
    meta: {
      [KEY_TICKET_HEADER]: null
    }
  };
  try {
    /**
     * @todo: until rsvp and tickets header image can be separated, they need to be linked
     */
    yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketsIsSettingsLoading(true));
    yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPIsSettingsLoading(true));
    const slug = Object(external_wp_data_["select"])('core/editor').getCurrentPostType();
    const postType = Object(external_wp_data_["select"])('core').getPostType(slug);
    const restBase = postType.rest_base;
    const {
      response
    } = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["api"].wpREST, {
      path: `${restBase}/${postId}`,
      headers: {
        'Content-Type': 'application/json'
      },
      initParams: {
        method: 'PUT',
        body: JSON.stringify(body)
      }
    });
    if (response.ok) {
      /**
       * @todo: until rsvp and tickets header image can be separated, they need to be linked
       */
      yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketsHeaderImage(reducers_header_image_DEFAULT_STATE));
      yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPHeaderImage(header_image_DEFAULT_STATE));
    }
  } catch (e) {
    /**
     * @todo: handle error scenario
     */
  } finally {
    /**
     * @todo: until rsvp and tickets header image can be separated, they need to be linked
     */
    yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketsIsSettingsLoading(false));
    yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPIsSettingsLoading(false));
  }
}
function* setTicketDetails(action) {
  const {
    clientId,
    details
  } = action.payload;
  const {
    attendeeInfoFields,
    title,
    description,
    price,
    sku,
    iac,
    startDate,
    startDateInput,
    startDateMoment,
    endDate,
    endDateInput,
    endDateMoment,
    startTime,
    endTime,
    startTimeInput,
    endTimeInput,
    capacityType,
    capacity
  } = details;
  yield Object(external_tribe_modules_reduxSaga_effects_["all"])([Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketAttendeeInfoFields(clientId, attendeeInfoFields)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTitle(clientId, title)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketDescription(clientId, description)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketPrice(clientId, price)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketSku(clientId, sku)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketIACSetting(clientId, iac)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketStartDate(clientId, startDate)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketStartDateInput(clientId, startDateInput)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketStartDateMoment(clientId, startDateMoment)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketEndDate(clientId, endDate)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketEndDateInput(clientId, endDateInput)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketEndDateMoment(clientId, endDateMoment)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketStartTime(clientId, startTime)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketEndTime(clientId, endTime)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketStartTimeInput(clientId, startTimeInput)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketEndTimeInput(clientId, endTimeInput)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketCapacityType(clientId, capacityType)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketCapacity(clientId, capacity))]);
}
function* setTicketTempDetails(action) {
  const {
    clientId,
    tempDetails
  } = action.payload;
  const {
    title,
    description,
    price,
    sku,
    iac,
    startDate,
    startDateInput,
    startDateMoment,
    endDate,
    endDateInput,
    endDateMoment,
    startTime,
    endTime,
    startTimeInput,
    endTimeInput,
    capacityType,
    capacity
  } = tempDetails;
  yield Object(external_tribe_modules_reduxSaga_effects_["all"])([Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTempTitle(clientId, title)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTempDescription(clientId, description)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTempPrice(clientId, price)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTempSku(clientId, sku)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTempIACSetting(clientId, iac)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTempStartDate(clientId, startDate)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTempStartDateInput(clientId, startDateInput)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTempStartDateMoment(clientId, startDateMoment)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTempEndDate(clientId, endDate)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTempEndDateInput(clientId, endDateInput)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTempEndDateMoment(clientId, endDateMoment)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTempStartTime(clientId, startTime)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTempEndTime(clientId, endTime)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTempStartTimeInput(clientId, startTimeInput)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTempEndTimeInput(clientId, endTimeInput)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTempCapacityType(clientId, capacityType)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTempCapacity(clientId, capacity))]);
}

/**
 * Allows the Ticket to be saved at the same time a post is being saved.
 * Avoids the user having to open up the Ticket block, and then click update again there,
 * when changing the event start date.
 *
 * @param {string} clientId Client ID of ticket block
 * @export
 * @yields
 */
function* saveTicketWithPostSave(clientId) {
  let savingChannel, notSavingChannel;
  try {
    // Do nothing when not already created
    if (yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketHasBeenCreated, {
      clientId
    })) {
      // Create channels for use
      savingChannel = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(createWPEditorSavingChannel);
      notSavingChannel = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(createWPEditorNotSavingChannel);
      while (true) {
        // Wait for channel to save
        yield Object(external_tribe_modules_reduxSaga_effects_["take"])(savingChannel);

        // Update when saving
        yield Object(external_tribe_modules_reduxSaga_effects_["call"])(updateTicket, {
          payload: {
            clientId
          }
        });

        // Wait for channel to finish saving
        yield Object(external_tribe_modules_reduxSaga_effects_["take"])(notSavingChannel);
      }
    }
  } catch (error) {
    console.error(error);
  } finally {
    // Close save channel if exists
    if (savingChannel) {
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])([savingChannel, 'close']);
    }
    // Close not saving channel if exists
    if (notSavingChannel) {
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])([notSavingChannel, 'close']);
    }
  }
}

/**
 * Will sync all tickets
 *
 * @param {string} prevStartDate Previous start date before latest set date time changes
 * @export
 * @yields
 */
function* syncTicketsSaleEndWithEventStart(prevStartDate) {
  const ticketIds = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketsAllClientIds);
  for (let index = 0; index < ticketIds.length; index++) {
    const clientId = ticketIds[index];
    yield Object(external_tribe_modules_reduxSaga_effects_["call"])(syncTicketSaleEndWithEventStart, prevStartDate, clientId);
  }
}

/**
 * Will sync Tickets sale end to be the same as event start date and time, if field has not been manually edited
 *
 * @borrows TEC - Functionality requires TEC to be enabled
 * @param {string} prevStartDate Previous start date before latest set date time changes
 * @param {string} clientId Client ID of ticket block
 * @export
 * @yields
 */
function* syncTicketSaleEndWithEventStart(prevStartDate, clientId) {
  try {
    const tempEndMoment = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempEndDateMoment, {
      clientId
    });
    const endMoment = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketEndDateMoment, {
      clientId
    });
    const {
      moment: prevEventStartMoment
    } = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(createDates, prevStartDate);

    // NOTE: Mutation
    // Convert to use local timezone
    yield Object(external_tribe_modules_reduxSaga_effects_["all"])([Object(external_tribe_modules_reduxSaga_effects_["call"])([tempEndMoment, 'local']), Object(external_tribe_modules_reduxSaga_effects_["call"])([endMoment, 'local']), Object(external_tribe_modules_reduxSaga_effects_["call"])([prevEventStartMoment, 'local'])]);

    // If initial end and current end are the same, the RSVP has not been modified
    const isNotManuallyEdited = yield Object(external_tribe_modules_reduxSaga_effects_["call"])([tempEndMoment, 'isSame'], endMoment, 'minute');
    const isSyncedToEventStart = yield Object(external_tribe_modules_reduxSaga_effects_["call"])([tempEndMoment, 'isSame'], prevEventStartMoment, 'minute');
    const isEvent = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(isTribeEventPostType);

    // This if statement may be redundant given the try-catch statement above.
    // Only run this on events post type.
    if (isEvent && window.tribe.events && isNotManuallyEdited && isSyncedToEventStart) {
      const eventStart = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(window.tribe.events.data.blocks.datetime.selectors.getStart);
      const {
        moment: endDateMoment,
        date: endDate,
        dateInput: endDateInput,
        time: endTime,
        timeInput: endTimeInput
      } = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(createDates, eventStart);
      yield Object(external_tribe_modules_reduxSaga_effects_["all"])([Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTempEndDate(clientId, endDate)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTempEndDateInput(clientId, endDateInput)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTempEndDateMoment(clientId, endDateMoment)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTempEndTime(clientId, endTime)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTempEndTimeInput(clientId, endTimeInput)),
      // Sync Ticket end items as well so as not to make state 'manually edited'
      Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketEndDate(clientId, endDate)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketEndDateInput(clientId, endDateInput)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketEndDateMoment(clientId, endDateMoment)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketEndTime(clientId, endTime)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketEndTimeInput(clientId, endTimeInput)),
      // Trigger UI button
      Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketHasChanges(clientId, true)),
      // Handle ticket duration error
      Object(external_tribe_modules_reduxSaga_effects_["call"])(handleTicketDurationError, clientId)]);
    }
  } catch (error) {
    // ¯\_(ツ)_/¯
    console.error(error);
  }
}

/**
 * Listens for event start date and time changes after RSVP block is loaded.
 *
 * @borrows TEC - Functionality requires TEC to be enabled and post type to be event
 * @export
 * @yields
 */
function* handleEventStartDateChanges() {
  try {
    // Ensure we have a postType set before proceeding
    const postTypeChannel = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(hasPostTypeChannel);
    yield Object(external_tribe_modules_reduxSaga_effects_["take"])(postTypeChannel);
    yield Object(external_tribe_modules_reduxSaga_effects_["call"])([postTypeChannel, 'close']);
    const isEvent = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(isTribeEventPostType);
    if (isEvent && window.tribe.events) {
      const {
        SET_START_DATE_TIME,
        SET_START_TIME
      } = window.tribe.events.data.blocks.datetime.types;
      let syncTask;
      while (true) {
        // Cache current event start date for comparison
        const eventStart = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(window.tribe.events.data.blocks.datetime.selectors.getStart);

        // Wait til use changes date or time on TEC datetime block
        yield Object(external_tribe_modules_reduxSaga_effects_["take"])([SET_START_DATE_TIME, SET_START_TIME]);

        // Important to cancel any pre-existing forks to prevent bad data from being sent
        if (syncTask) {
          yield Object(external_tribe_modules_reduxSaga_effects_["cancel"])(syncTask);
        }
        syncTask = yield Object(external_tribe_modules_reduxSaga_effects_["fork"])(syncTicketsSaleEndWithEventStart, eventStart);
      }
    }
  } catch (error) {
    // ¯\_(ツ)_/¯
    console.error(error);
  }
}
function* handleTicketDurationError(clientId) {
  let hasDurationError = false;
  const startDateMoment = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempStartDateMoment, {
    clientId
  });
  const endDateMoment = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempEndDateMoment, {
    clientId
  });
  if (!startDateMoment || !endDateMoment) {
    hasDurationError = true;
  } else {
    const startTime = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempStartTime, {
      clientId
    });
    const endTime = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketTempEndTime, {
      clientId
    });
    const startTimeSeconds = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["time"].toSeconds, startTime, external_tribe_common_utils_["time"].TIME_FORMAT_HH_MM_SS);
    const endTimeSeconds = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["time"].toSeconds, endTime, external_tribe_common_utils_["time"].TIME_FORMAT_HH_MM_SS);
    const startDateTimeMoment = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].setTimeInSeconds, startDateMoment.clone(), startTimeSeconds);
    const endDateTimeMoment = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].setTimeInSeconds, endDateMoment.clone(), endTimeSeconds);
    const durationHasError = yield Object(external_tribe_modules_reduxSaga_effects_["call"])([startDateTimeMoment, 'isSameOrAfter'], endDateTimeMoment);
    if (durationHasError) {
      hasDurationError = true;
    }
  }
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketHasDurationError(clientId, hasDurationError));
}
function* handleTicketStartDate(action) {
  const {
    clientId,
    date,
    dayPickerInput
  } = action.payload;
  const startDateMoment = yield date ? Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toMoment, date) : undefined;
  const startDate = yield date ? Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toDatabaseDate, startDateMoment) : '';
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTempStartDate(clientId, startDate));
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTempStartDateInput(clientId, dayPickerInput.state.value));
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTempStartDateMoment(clientId, startDateMoment));
}
function* handleTicketEndDate(action) {
  const {
    clientId,
    date,
    dayPickerInput
  } = action.payload;
  const endDateMoment = yield date ? Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toMoment, date) : undefined;
  const endDate = yield date ? Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toDatabaseDate, endDateMoment) : '';
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTempEndDate(clientId, endDate));
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTempEndDateInput(clientId, dayPickerInput.state.value));
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTempEndDateMoment(clientId, endDateMoment));
}
function* handleTicketStartTime(action) {
  const {
    clientId,
    seconds
  } = action.payload;
  const startTime = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["time"].fromSeconds, seconds, external_tribe_common_utils_["time"].TIME_FORMAT_HH_MM);
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTempStartTime(clientId, `${startTime}:00`));
}
function* handleTicketStartTimeInput(action) {
  const {
    clientId,
    seconds
  } = action.payload;
  const startTime = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["time"].fromSeconds, seconds, external_tribe_common_utils_["time"].TIME_FORMAT_HH_MM);
  const startTimeMoment = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toMoment, startTime, external_tribe_common_utils_["moment"].TIME_FORMAT, false);
  const startTimeInput = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toTime, startTimeMoment);
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTempStartTimeInput(clientId, startTimeInput));
}
function* handleTicketEndTime(action) {
  const {
    clientId,
    seconds
  } = action.payload;
  const endTime = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["time"].fromSeconds, seconds, external_tribe_common_utils_["time"].TIME_FORMAT_HH_MM);
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTempEndTime(clientId, `${endTime}:00`));
}
function* handleTicketEndTimeInput(action) {
  const {
    clientId,
    seconds
  } = action.payload;
  const endTime = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["time"].fromSeconds, seconds, external_tribe_common_utils_["time"].TIME_FORMAT_HH_MM);
  const endTimeMoment = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toMoment, endTime, external_tribe_common_utils_["moment"].TIME_FORMAT, false);
  const endTimeInput = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toTime, endTimeMoment);
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketTempEndTimeInput(clientId, endTimeInput));
}
function* handleTicketMove() {
  const ticketClientIds = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getTicketsAllClientIds);
  const modalClientId = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getModalClientId);
  if (ticketClientIds.includes(modalClientId)) {
    yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketIsSelected(modalClientId, false));
    yield Object(external_tribe_modules_reduxSaga_effects_["put"])(actions_removeTicketBlock(modalClientId));
    yield Object(external_tribe_modules_reduxSaga_effects_["call"])([Object(external_wp_data_["dispatch"])('core/editor'), 'removeBlocks'], [modalClientId]);
  }
}
function* handler(action) {
  switch (action.type) {
    case SET_TICKETS_INITIAL_STATE:
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])(setTicketsInitialState, action);
      break;
    case RESET_TICKETS_BLOCK:
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])(resetTicketsBlock);
      break;
    case SET_TICKET_INITIAL_STATE:
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])(setTicketInitialState, action);
      break;
    case FETCH_TICKET:
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])(fetchTicket, action);
      break;
    case CREATE_NEW_TICKET:
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])(createNewTicket, action);
      break;
    case UPDATE_TICKET:
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])(updateTicket, action);
      break;
    case DELETE_TICKET:
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])(deleteTicket, action);
      break;
    case FETCH_TICKETS_HEADER_IMAGE:
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])(fetchTicketsHeaderImage, action);
      break;
    case UPDATE_TICKETS_HEADER_IMAGE:
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])(updateTicketsHeaderImage, action);
      break;
    case DELETE_TICKETS_HEADER_IMAGE:
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])(deleteTicketsHeaderImage);
      break;
    case SET_TICKET_DETAILS:
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])(setTicketDetails, action);
      break;
    case SET_TICKET_TEMP_DETAILS:
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])(setTicketTempDetails, action);
      break;
    case HANDLE_TICKET_START_DATE:
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])(handleTicketStartDate, action);
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])(handleTicketDurationError, action.payload.clientId);
      yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketHasChanges(action.payload.clientId, true));
      break;
    case HANDLE_TICKET_END_DATE:
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])(handleTicketEndDate, action);
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])(handleTicketDurationError, action.payload.clientId);
      yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketHasChanges(action.payload.clientId, true));
      break;
    case HANDLE_TICKET_START_TIME:
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])(handleTicketStartTime, action);
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])(handleTicketStartTimeInput, action);
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])(handleTicketDurationError, action.payload.clientId);
      yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketHasChanges(action.payload.clientId, true));
      break;
    case HANDLE_TICKET_END_TIME:
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])(handleTicketEndTime, action);
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])(handleTicketEndTimeInput, action);
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])(handleTicketDurationError, action.payload.clientId);
      yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketHasChanges(action.payload.clientId, true));
      break;
    case MOVE_TICKET_SUCCESS:
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])(handleTicketMove);
      break;
    default:
      break;
  }
}
function* watchers() {
  yield Object(external_tribe_modules_reduxSaga_effects_["takeEvery"])([SET_TICKETS_INITIAL_STATE, RESET_TICKETS_BLOCK, SET_TICKET_INITIAL_STATE, FETCH_TICKET, CREATE_NEW_TICKET, UPDATE_TICKET, DELETE_TICKET, FETCH_TICKETS_HEADER_IMAGE, UPDATE_TICKETS_HEADER_IMAGE, DELETE_TICKETS_HEADER_IMAGE, SET_TICKET_DETAILS, SET_TICKET_TEMP_DETAILS, HANDLE_TICKET_START_DATE, HANDLE_TICKET_END_DATE, HANDLE_TICKET_START_TIME, HANDLE_TICKET_END_TIME, MOVE_TICKET_SUCCESS], handler);
  yield Object(external_tribe_modules_reduxSaga_effects_["fork"])(handleEventStartDateChanges);
}
// CONCATENATED MODULE: ./src/modules/data/blocks/ticket/index.js
/**
 * Internal dependencies
 */








/* harmony default export */ var blocks_ticket = (ticket_reducer);

// CONCATENATED MODULE: ./src/modules/data/blocks/ticket/actions.js
/**
 * Internal dependencies
 */


//
// ─── TICKETS ACTIONS ────────────────────────────────────────────────────────────
//

const actions_setTicketsInitialState = props => ({
  type: ticket_types_namespaceObject.SET_TICKETS_INITIAL_STATE,
  payload: props
});
const actions_resetTicketsBlock = () => ({
  type: ticket_types_namespaceObject.RESET_TICKETS_BLOCK
});
const setTicketsHeaderImage = payload => ({
  type: ticket_types_namespaceObject.SET_TICKETS_HEADER_IMAGE,
  payload
});
const setTicketsIsSelected = isSelected => ({
  type: ticket_types_namespaceObject.SET_TICKETS_IS_SELECTED,
  payload: {
    isSelected
  }
});
const setTicketsIsSettingsOpen = isSettingsOpen => ({
  type: ticket_types_namespaceObject.SET_TICKETS_IS_SETTINGS_OPEN,
  payload: {
    isSettingsOpen
  }
});
const setTicketsIsSettingsLoading = isSettingsLoading => ({
  type: ticket_types_namespaceObject.SET_TICKETS_IS_SETTINGS_LOADING,
  payload: {
    isSettingsLoading
  }
});
const openSettings = () => setTicketsIsSettingsOpen(true);
const closeSettings = () => setTicketsIsSettingsOpen(false);
const setTicketsProvider = provider => ({
  type: ticket_types_namespaceObject.SET_TICKETS_PROVIDER,
  payload: {
    provider
  }
});
const setTicketsSharedCapacity = sharedCapacity => ({
  type: ticket_types_namespaceObject.SET_TICKETS_SHARED_CAPACITY,
  payload: {
    sharedCapacity
  }
});
const setTicketsTempSharedCapacity = tempSharedCapacity => ({
  type: ticket_types_namespaceObject.SET_TICKETS_TEMP_SHARED_CAPACITY,
  payload: {
    tempSharedCapacity
  }
});

//
// ─── HEADER IMAGE SAGA ACTIONS ──────────────────────────────────────────────────
//

const actions_fetchTicketsHeaderImage = id => ({
  type: ticket_types_namespaceObject.FETCH_TICKETS_HEADER_IMAGE,
  payload: {
    id
  }
});
const actions_updateTicketsHeaderImage = image => ({
  type: ticket_types_namespaceObject.UPDATE_TICKETS_HEADER_IMAGE,
  payload: {
    image
  }
});
const actions_deleteTicketsHeaderImage = () => ({
  type: ticket_types_namespaceObject.DELETE_TICKETS_HEADER_IMAGE
});

//
// ─── TICKET DETAILS ACTIONS ─────────────────────────────────────────────────────
//

const setTicketTitle = (clientId, title) => ({
  type: ticket_types_namespaceObject.SET_TICKET_TITLE,
  payload: {
    clientId,
    title
  }
});
const setTicketDescription = (clientId, description) => ({
  type: ticket_types_namespaceObject.SET_TICKET_DESCRIPTION,
  payload: {
    clientId,
    description
  }
});
const setTicketPrice = (clientId, price) => ({
  type: ticket_types_namespaceObject.SET_TICKET_PRICE,
  payload: {
    clientId,
    price
  }
});
const setTicketSku = (clientId, sku) => ({
  type: ticket_types_namespaceObject.SET_TICKET_SKU,
  payload: {
    clientId,
    sku
  }
});
const setTicketIACSetting = (clientId, iac) => ({
  type: ticket_types_namespaceObject.SET_TICKET_IAC_SETTING,
  payload: {
    clientId,
    iac
  }
});
const setTicketStartDate = (clientId, startDate) => ({
  type: ticket_types_namespaceObject.SET_TICKET_START_DATE,
  payload: {
    clientId,
    startDate
  }
});
const setTicketStartDateInput = (clientId, startDateInput) => ({
  type: ticket_types_namespaceObject.SET_TICKET_START_DATE_INPUT,
  payload: {
    clientId,
    startDateInput
  }
});
const setTicketStartDateMoment = (clientId, startDateMoment) => ({
  type: ticket_types_namespaceObject.SET_TICKET_START_DATE_MOMENT,
  payload: {
    clientId,
    startDateMoment
  }
});
const setTicketEndDate = (clientId, endDate) => ({
  type: ticket_types_namespaceObject.SET_TICKET_END_DATE,
  payload: {
    clientId,
    endDate
  }
});
const setTicketEndDateInput = (clientId, endDateInput) => ({
  type: ticket_types_namespaceObject.SET_TICKET_END_DATE_INPUT,
  payload: {
    clientId,
    endDateInput
  }
});
const setTicketEndDateMoment = (clientId, endDateMoment) => ({
  type: ticket_types_namespaceObject.SET_TICKET_END_DATE_MOMENT,
  payload: {
    clientId,
    endDateMoment
  }
});
const setTicketStartTime = (clientId, startTime) => ({
  type: ticket_types_namespaceObject.SET_TICKET_START_TIME,
  payload: {
    clientId,
    startTime
  }
});
const setTicketEndTime = (clientId, endTime) => ({
  type: ticket_types_namespaceObject.SET_TICKET_END_TIME,
  payload: {
    clientId,
    endTime
  }
});
const setTicketStartTimeInput = (clientId, startTimeInput) => ({
  type: ticket_types_namespaceObject.SET_TICKET_START_TIME_INPUT,
  payload: {
    clientId,
    startTimeInput
  }
});
const setTicketEndTimeInput = (clientId, endTimeInput) => ({
  type: ticket_types_namespaceObject.SET_TICKET_END_TIME_INPUT,
  payload: {
    clientId,
    endTimeInput
  }
});
const setTicketCapacityType = (clientId, capacityType) => ({
  type: ticket_types_namespaceObject.SET_TICKET_CAPACITY_TYPE,
  payload: {
    clientId,
    capacityType
  }
});
const setTicketCapacity = (clientId, capacity) => ({
  type: ticket_types_namespaceObject.SET_TICKET_CAPACITY,
  payload: {
    clientId,
    capacity
  }
});

//
// ─── TICKET TEMP DETAILS ACTIONS ────────────────────────────────────────────────
//

const setTicketTempTitle = (clientId, title) => ({
  type: ticket_types_namespaceObject.SET_TICKET_TEMP_TITLE,
  payload: {
    clientId,
    title
  }
});
const setTicketTempDescription = (clientId, description) => ({
  type: ticket_types_namespaceObject.SET_TICKET_TEMP_DESCRIPTION,
  payload: {
    clientId,
    description
  }
});
const setTicketTempPrice = (clientId, price) => ({
  type: ticket_types_namespaceObject.SET_TICKET_TEMP_PRICE,
  payload: {
    clientId,
    price
  }
});
const setTicketTempSku = (clientId, sku) => ({
  type: ticket_types_namespaceObject.SET_TICKET_TEMP_SKU,
  payload: {
    clientId,
    sku
  }
});
const setTicketTempIACSetting = (clientId, iac) => ({
  type: ticket_types_namespaceObject.SET_TICKET_TEMP_IAC_SETTING,
  payload: {
    clientId,
    iac
  }
});
const setTicketTempStartDate = (clientId, startDate) => ({
  type: ticket_types_namespaceObject.SET_TICKET_TEMP_START_DATE,
  payload: {
    clientId,
    startDate
  }
});
const setTicketTempStartDateInput = (clientId, startDateInput) => ({
  type: ticket_types_namespaceObject.SET_TICKET_TEMP_START_DATE_INPUT,
  payload: {
    clientId,
    startDateInput
  }
});
const setTicketTempStartDateMoment = (clientId, startDateMoment) => ({
  type: ticket_types_namespaceObject.SET_TICKET_TEMP_START_DATE_MOMENT,
  payload: {
    clientId,
    startDateMoment
  }
});
const setTicketTempEndDate = (clientId, endDate) => ({
  type: ticket_types_namespaceObject.SET_TICKET_TEMP_END_DATE,
  payload: {
    clientId,
    endDate
  }
});
const setTicketTempEndDateInput = (clientId, endDateInput) => ({
  type: ticket_types_namespaceObject.SET_TICKET_TEMP_END_DATE_INPUT,
  payload: {
    clientId,
    endDateInput
  }
});
const setTicketTempEndDateMoment = (clientId, endDateMoment) => ({
  type: ticket_types_namespaceObject.SET_TICKET_TEMP_END_DATE_MOMENT,
  payload: {
    clientId,
    endDateMoment
  }
});
const setTicketTempStartTime = (clientId, startTime) => ({
  type: ticket_types_namespaceObject.SET_TICKET_TEMP_START_TIME,
  payload: {
    clientId,
    startTime
  }
});
const setTicketTempEndTime = (clientId, endTime) => ({
  type: ticket_types_namespaceObject.SET_TICKET_TEMP_END_TIME,
  payload: {
    clientId,
    endTime
  }
});
const setTicketTempStartTimeInput = (clientId, startTimeInput) => ({
  type: ticket_types_namespaceObject.SET_TICKET_TEMP_START_TIME_INPUT,
  payload: {
    clientId,
    startTimeInput
  }
});
const setTicketTempEndTimeInput = (clientId, endTimeInput) => ({
  type: ticket_types_namespaceObject.SET_TICKET_TEMP_END_TIME_INPUT,
  payload: {
    clientId,
    endTimeInput
  }
});
const setTicketTempCapacityType = (clientId, capacityType) => ({
  type: ticket_types_namespaceObject.SET_TICKET_TEMP_CAPACITY_TYPE,
  payload: {
    clientId,
    capacityType
  }
});
const setTicketTempCapacity = (clientId, capacity) => ({
  type: ticket_types_namespaceObject.SET_TICKET_TEMP_CAPACITY,
  payload: {
    clientId,
    capacity
  }
});

//
// ─── TICKET ACTIONS ─────────────────────────────────────────────────────────────
//

const registerTicketBlock = clientId => ({
  type: ticket_types_namespaceObject.REGISTER_TICKET_BLOCK,
  payload: {
    clientId
  }
});
const actions_removeTicketBlock = clientId => ({
  type: ticket_types_namespaceObject.REMOVE_TICKET_BLOCK,
  payload: {
    clientId
  }
});
const removeTicketBlocks = () => ({
  type: ticket_types_namespaceObject.REMOVE_TICKET_BLOCKS
});
const setTicketSold = (clientId, sold) => ({
  type: ticket_types_namespaceObject.SET_TICKET_SOLD,
  payload: {
    clientId,
    sold
  }
});
const setTicketAvailable = (clientId, available) => ({
  type: ticket_types_namespaceObject.SET_TICKET_AVAILABLE,
  payload: {
    clientId,
    available
  }
});
const setTicketId = (clientId, ticketId) => ({
  type: ticket_types_namespaceObject.SET_TICKET_ID,
  payload: {
    clientId,
    ticketId
  }
});
const setTicketCurrencySymbol = (clientId, currencySymbol) => ({
  type: ticket_types_namespaceObject.SET_TICKET_CURRENCY_SYMBOL,
  payload: {
    clientId,
    currencySymbol
  }
});
const setTicketCurrencyPosition = (clientId, currencyPosition) => ({
  type: ticket_types_namespaceObject.SET_TICKET_CURRENCY_POSITION,
  payload: {
    clientId,
    currencyPosition
  }
});
const setTicketProvider = (clientId, provider) => ({
  type: ticket_types_namespaceObject.SET_TICKET_PROVIDER,
  payload: {
    clientId,
    provider
  }
});
const setTicketHasAttendeeInfoFields = (clientId, hasAttendeeInfoFields) => ({
  type: ticket_types_namespaceObject.SET_TICKET_HAS_ATTENDEE_INFO_FIELDS,
  payload: {
    clientId,
    hasAttendeeInfoFields
  }
});
const setTicketAttendeeInfoFields = (clientId, attendeeInfoFields) => ({
  type: ticket_types_namespaceObject.SET_TICKET_ATTENDEE_INFO_FIELDS,
  payload: {
    clientId,
    attendeeInfoFields
  }
});
const setTicketIsLoading = (clientId, isLoading) => ({
  type: ticket_types_namespaceObject.SET_TICKET_IS_LOADING,
  payload: {
    clientId,
    isLoading
  }
});
const setTicketIsModalOpen = (clientId, isModalOpen) => ({
  type: ticket_types_namespaceObject.SET_TICKET_IS_MODAL_OPEN,
  payload: {
    clientId,
    isModalOpen
  }
});
const setTicketHasBeenCreated = (clientId, hasBeenCreated) => ({
  type: ticket_types_namespaceObject.SET_TICKET_HAS_BEEN_CREATED,
  payload: {
    clientId,
    hasBeenCreated
  }
});
const setTicketHasChanges = (clientId, hasChanges) => ({
  type: ticket_types_namespaceObject.SET_TICKET_HAS_CHANGES,
  payload: {
    clientId,
    hasChanges
  }
});
const setTicketHasDurationError = (clientId, hasDurationError) => ({
  type: ticket_types_namespaceObject.SET_TICKET_HAS_DURATION_ERROR,
  payload: {
    clientId,
    hasDurationError
  }
});
const setTicketIsSelected = (clientId, isSelected) => ({
  type: ticket_types_namespaceObject.SET_TICKET_IS_SELECTED,
  payload: {
    clientId,
    isSelected
  }
});

//
// ─── TICKET SAGA ACTIONS ────────────────────────────────────────────────────────
//

const actions_setTicketDetails = (clientId, details) => ({
  type: ticket_types_namespaceObject.SET_TICKET_DETAILS,
  payload: {
    clientId,
    details
  }
});
const actions_setTicketTempDetails = (clientId, tempDetails) => ({
  type: ticket_types_namespaceObject.SET_TICKET_TEMP_DETAILS,
  payload: {
    clientId,
    tempDetails
  }
});
const actions_handleTicketStartDate = (clientId, date, dayPickerInput) => ({
  type: ticket_types_namespaceObject.HANDLE_TICKET_START_DATE,
  payload: {
    clientId,
    date,
    dayPickerInput
  }
});
const actions_handleTicketEndDate = (clientId, date, dayPickerInput) => ({
  type: ticket_types_namespaceObject.HANDLE_TICKET_END_DATE,
  payload: {
    clientId,
    date,
    dayPickerInput
  }
});
const actions_handleTicketStartTime = (clientId, seconds) => ({
  type: ticket_types_namespaceObject.HANDLE_TICKET_START_TIME,
  payload: {
    clientId,
    seconds
  }
});
const actions_handleTicketEndTime = (clientId, seconds) => ({
  type: ticket_types_namespaceObject.HANDLE_TICKET_END_TIME,
  payload: {
    clientId,
    seconds
  }
});
const actions_fetchTicket = (clientId, ticketId) => ({
  type: ticket_types_namespaceObject.FETCH_TICKET,
  payload: {
    clientId,
    ticketId
  }
});
const actions_createNewTicket = clientId => ({
  type: ticket_types_namespaceObject.CREATE_NEW_TICKET,
  payload: {
    clientId
  }
});
const actions_updateTicket = clientId => ({
  type: ticket_types_namespaceObject.UPDATE_TICKET,
  payload: {
    clientId
  }
});
const actions_deleteTicket = clientId => ({
  type: ticket_types_namespaceObject.DELETE_TICKET,
  payload: {
    clientId
  }
});
const actions_setTicketInitialState = props => ({
  type: ticket_types_namespaceObject.SET_TICKET_INITIAL_STATE,
  payload: props
});
// CONCATENATED MODULE: ./src/modules/data/blocks/rsvp/sagas.js
/* eslint-disable max-len */

/**
 * External Dependencies
 */



/**
 * Internal dependencies
 */













//
// ─── RSVP DETAILS ───────────────────────────────────────────────────────────────
//

/**
 * Set details for current RSVP
 *
 * @export
 * @yields
 * @param {Object} action redux action
 */
function* sagas_setRSVPDetails(action) {
  const {
    title,
    description,
    capacity,
    notGoingResponses,
    startDate,
    startDateInput,
    startDateMoment,
    startTime,
    endDate,
    endDateInput,
    endDateMoment,
    endTime,
    startTimeInput,
    endTimeInput
  } = action.payload;
  yield Object(external_tribe_modules_reduxSaga_effects_["all"])([Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPTitle(title)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPDescription(description)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPCapacity(capacity)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPNotGoingResponses(notGoingResponses)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPStartDate(startDate)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPStartDateInput(startDateInput)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPStartDateMoment(startDateMoment)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPStartTime(startTime)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPEndDate(endDate)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPEndDateInput(endDateInput)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPEndDateMoment(endDateMoment)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPEndTime(endTime)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPStartTimeInput(startTimeInput)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPEndTimeInput(endTimeInput))]);
}

/**
 * Set details for current temp RSVP
 *
 * @export
 * @yields
 * @param {Object} action redux action
 */
function* sagas_setRSVPTempDetails(action) {
  const {
    tempTitle,
    tempDescription,
    tempCapacity,
    tempNotGoingResponses,
    tempStartDate,
    tempStartDateInput,
    tempStartDateMoment,
    tempStartTime,
    tempEndDate,
    tempEndDateInput,
    tempEndDateMoment,
    tempEndTime,
    tempStartTimeInput,
    tempEndTimeInput
  } = action.payload;
  yield Object(external_tribe_modules_reduxSaga_effects_["all"])([Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPTempTitle(tempTitle)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPTempDescription(tempDescription)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPTempCapacity(tempCapacity)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPTempNotGoingResponses(tempNotGoingResponses)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPTempStartDate(tempStartDate)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPTempStartDateInput(tempStartDateInput)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPTempStartDateMoment(tempStartDateMoment)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPTempStartTime(tempStartTime)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPTempEndDate(tempEndDate)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPTempEndDateInput(tempEndDateInput)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPTempEndDateMoment(tempEndDateMoment)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPTempEndTime(tempEndTime)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPTempStartTimeInput(tempStartTimeInput)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPTempEndTimeInput(tempEndTimeInput))]);
}

//
// ─── INITIALIZE ─────────────────────────────────────────────────────────────────
//

/**
 * Initializes RSVP that has not been created
 *
 * @borrows TEC - Optional functionality requires TEC to be enabled and post type to be event
 * @export
 * @yields
 */
function* sagas_initializeRSVP() {
  const publishDate = yield Object(external_tribe_modules_reduxSaga_effects_["call"])([Object(external_wp_data_["select"])('core/editor'), 'getEditedPostAttribute'], 'date');
  const {
    moment: startMoment,
    date: startDate,
    dateInput: startDateInput,
    time: startTime,
    timeInput: startTimeInput
  } = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(createDates, publishDate);
  yield Object(external_tribe_modules_reduxSaga_effects_["all"])([Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPStartDate(startDate)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPStartDateInput(startDateInput)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPStartDateMoment(startMoment)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPStartTime(startTime)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPStartTimeInput(startTimeInput)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPTempStartDate(startDate)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPTempStartDateInput(startDateInput)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPTempStartDateMoment(startMoment)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPTempStartTime(startTime)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPTempStartTimeInput(startTimeInput))]);
  try {
    if (yield Object(external_tribe_modules_reduxSaga_effects_["call"])(isTribeEventPostType)) {
      // NOTE: This requires TEC to be installed, if not installed, do not set an end date
      const eventStart = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(window.tribe.events.data.blocks.datetime.selectors.getStart); // RSVP window should end when event starts... ideally
      const {
        moment: endMoment,
        date: endDate,
        dateInput: endDateInput,
        time: endTime,
        timeInput: endTimeInput
      } = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(createDates, eventStart);
      yield Object(external_tribe_modules_reduxSaga_effects_["all"])([Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPEndDate(endDate)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPEndDateInput(endDateInput)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPEndDateMoment(endMoment)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPEndTime(endTime)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPEndTimeInput(endTimeInput)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPTempEndDate(endDate)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPTempEndDateInput(endDateInput)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPTempEndDateMoment(endMoment)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPTempEndTime(endTime)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPTempEndTimeInput(endTimeInput))]);
    }
  } catch (error) {
    // ¯\_(ツ)_/¯
    console.error(error);
  }
  yield Object(external_tribe_modules_reduxSaga_effects_["call"])(handleRSVPDurationError);
}

/**
 * Will sync RSVP sale end to be the same as event start date and time, if field has not been manually edited
 *
 * @borrows TEC - Functionality requires TEC to be enabled
 * @param {string} prevStartDate Previous start date before latest set date time changes
 * @export
 * @yields
 */
function* syncRSVPSaleEndWithEventStart(prevStartDate) {
  try {
    const tempEndMoment = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getRSVPTempEndDateMoment);
    const endMoment = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getRSVPEndDateMoment);
    const {
      moment: prevEventStartMoment
    } = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(createDates, prevStartDate);

    // NOTE: Mutation
    // Convert to use local timezone
    yield Object(external_tribe_modules_reduxSaga_effects_["all"])([Object(external_tribe_modules_reduxSaga_effects_["call"])([tempEndMoment, 'local']), Object(external_tribe_modules_reduxSaga_effects_["call"])([endMoment, 'local']), Object(external_tribe_modules_reduxSaga_effects_["call"])([prevEventStartMoment, 'local'])]);

    // If initial end and current end are the same, the RSVP has not been modified
    const isNotManuallyEdited = yield Object(external_tribe_modules_reduxSaga_effects_["call"])([tempEndMoment, 'isSame'], endMoment, 'minute');
    const isSyncedToEventStart = yield Object(external_tribe_modules_reduxSaga_effects_["call"])([tempEndMoment, 'isSame'], prevEventStartMoment, 'minute');
    if (isNotManuallyEdited && isSyncedToEventStart) {
      const eventStart = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(window.tribe.events.data.blocks.datetime.selectors.getStart);
      const {
        moment: endDateMoment,
        date: endDate,
        dateInput: endDateInput,
        time: endTime,
        timeInput: endTimeInput
      } = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(createDates, eventStart);
      yield Object(external_tribe_modules_reduxSaga_effects_["all"])([Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPTempEndDate(endDate)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPTempEndDateInput(endDateInput)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPTempEndDateMoment(endDateMoment)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPTempEndTime(endTime)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPTempEndTimeInput(endTimeInput)),
      // Sync RSVP end items as well so as not to make state 'manually edited'
      Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPEndDate(endDate)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPEndDateInput(endDateInput)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPEndDateMoment(endDateMoment)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPEndTime(endTime)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPEndTimeInput(endTimeInput)),
      // Trigger UI button
      Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPHasChanges(true)),
      // Handle RSVP duration error
      Object(external_tribe_modules_reduxSaga_effects_["call"])(handleRSVPDurationError)]);

      // Sub fork which will wait to sync RSVP when post saves
      yield Object(external_tribe_modules_reduxSaga_effects_["fork"])(saveRSVPWithPostSave);
    }
  } catch (error) {
    // ¯\_(ツ)_/¯
    console.error(error);
  }
}

/**
 * Allows the RSVP to be saved at the same time a post is being saved.
 * Avoids the user having to open up the RSVP block, and then click update again there, when changing the event start date.
 *
 * @export
 * @yields
 */
function* saveRSVPWithPostSave() {
  let saveChannel;
  try {
    // Do nothing when not already created
    if (yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getRSVPCreated)) {
      // Create channel for use
      saveChannel = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(createWPEditorSavingChannel);

      // Wait for channel to save
      yield Object(external_tribe_modules_reduxSaga_effects_["take"])(saveChannel);
      const payload = yield Object(external_tribe_modules_reduxSaga_effects_["all"])({
        id: Object(external_tribe_modules_reduxSaga_effects_["select"])(getRSVPId),
        title: Object(external_tribe_modules_reduxSaga_effects_["select"])(getRSVPTempTitle),
        description: Object(external_tribe_modules_reduxSaga_effects_["select"])(getRSVPTempDescription),
        capacity: Object(external_tribe_modules_reduxSaga_effects_["select"])(getRSVPTempCapacity),
        notGoingResponses: Object(external_tribe_modules_reduxSaga_effects_["select"])(getRSVPTempNotGoingResponses),
        startDate: Object(external_tribe_modules_reduxSaga_effects_["select"])(getRSVPTempStartDate),
        startDateInput: Object(external_tribe_modules_reduxSaga_effects_["select"])(getRSVPTempStartDateInput),
        startDateMoment: Object(external_tribe_modules_reduxSaga_effects_["select"])(getRSVPTempStartDateMoment),
        endDate: Object(external_tribe_modules_reduxSaga_effects_["select"])(getRSVPTempEndDate),
        endDateInput: Object(external_tribe_modules_reduxSaga_effects_["select"])(getRSVPTempEndDateInput),
        endDateMoment: Object(external_tribe_modules_reduxSaga_effects_["select"])(getRSVPTempEndDateMoment),
        startTime: Object(external_tribe_modules_reduxSaga_effects_["select"])(getRSVPTempStartTime),
        endTime: Object(external_tribe_modules_reduxSaga_effects_["select"])(getRSVPTempEndTime)
      });

      // Use update thunk to submit
      yield Object(external_tribe_modules_reduxSaga_effects_["put"])(updateRSVP(payload));
    }
  } catch (error) {
    console.error(error);
  } finally {
    // Close channel if exists
    if (saveChannel) {
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])([saveChannel, 'close']);
    }
  }
}

/**
 * Listens for event start date and time changes after RSVP block is loaded.
 *
 * @borrows TEC - Functionality requires TEC to be enabled and post type to be event
 * @export
 * @yields
 */
function* sagas_handleEventStartDateChanges() {
  try {
    // Proceed after creating dummy RSVP or after fetching
    yield Object(external_tribe_modules_reduxSaga_effects_["take"])([INITIALIZE_RSVP, SET_RSVP_DETAILS]);
    const isEvent = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(isTribeEventPostType);
    if (isEvent && window.tribe.events) {
      const {
        SET_START_DATE_TIME,
        SET_START_TIME
      } = window.tribe.events.data.blocks.datetime.types;
      let syncTask;
      while (true) {
        // Cache current event start date for comparison
        const eventStart = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(window.tribe.events.data.blocks.datetime.selectors.getStart);

        // Wait til use changes date or time on TEC datetime block
        yield Object(external_tribe_modules_reduxSaga_effects_["take"])([SET_START_DATE_TIME, SET_START_TIME]);

        // Important to cancel any pre-existing forks to prevent bad data from being sent
        if (syncTask) {
          yield Object(external_tribe_modules_reduxSaga_effects_["cancel"])(syncTask);
        }
        syncTask = yield Object(external_tribe_modules_reduxSaga_effects_["fork"])(syncRSVPSaleEndWithEventStart, eventStart);
      }
    }
  } catch (error) {
    // ¯\_(ツ)_/¯
    console.error(error);
  }
}

//
// ─── DATE & TIME ────────────────────────────────────────────────────────────────
//

function* handleRSVPDurationError() {
  let hasDurationError = false;
  const startDateMoment = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getRSVPTempStartDateMoment);
  const endDateMoment = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getRSVPTempEndDateMoment);
  if (!startDateMoment || !endDateMoment) {
    hasDurationError = true;
  } else {
    const startTime = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getRSVPTempStartTime);
    const endTime = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getRSVPTempEndTime);
    const startTimeSeconds = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["time"].toSeconds, startTime, external_tribe_common_utils_["time"].TIME_FORMAT_HH_MM_SS);
    const endTimeSeconds = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["time"].toSeconds, endTime, external_tribe_common_utils_["time"].TIME_FORMAT_HH_MM_SS);
    const startDateTimeMoment = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].setTimeInSeconds, startDateMoment.clone(), startTimeSeconds);
    const endDateTimeMoment = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].setTimeInSeconds, endDateMoment.clone(), endTimeSeconds);
    const durationHasError = yield Object(external_tribe_modules_reduxSaga_effects_["call"])([startDateTimeMoment, 'isSameOrAfter'], endDateTimeMoment);
    if (durationHasError) {
      hasDurationError = true;
    }
  }
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPHasDurationError(hasDurationError));
}
function* sagas_handleRSVPStartDate(action) {
  const {
    date,
    dayPickerInput
  } = action.payload;
  const startDateMoment = yield date ? Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toMoment, date) : undefined;
  const startDate = yield date ? Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toDatabaseDate, startDateMoment) : '';
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPTempStartDate(startDate));
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPTempStartDateInput(dayPickerInput.state.value));
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPTempStartDateMoment(startDateMoment));
}
function* sagas_handleRSVPEndDate(action) {
  const {
    date,
    dayPickerInput
  } = action.payload;
  const endDateMoment = yield date ? Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toMoment, date) : undefined;
  const endDate = yield date ? Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toDatabaseDate, endDateMoment) : '';
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPTempEndDate(endDate));
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPTempEndDateInput(dayPickerInput.state.value));
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPTempEndDateMoment(endDateMoment));
}
function* sagas_handleRSVPStartTime(action) {
  const startTime = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["time"].fromSeconds, action.payload.seconds, external_tribe_common_utils_["time"].TIME_FORMAT_HH_MM);
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPTempStartTime(`${startTime}:00`));
}
function* handleRSVPStartTimeInput(action) {
  const startTime = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["time"].fromSeconds, action.payload.seconds, external_tribe_common_utils_["time"].TIME_FORMAT_HH_MM);
  const startTimeMoment = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toMoment, startTime, external_tribe_common_utils_["moment"].TIME_FORMAT, false);
  const startTimeInput = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toTime, startTimeMoment);
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPTempStartTimeInput(startTimeInput));
}
function* sagas_handleRSVPEndTime(action) {
  const endTime = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["time"].fromSeconds, action.payload.seconds, external_tribe_common_utils_["time"].TIME_FORMAT_HH_MM);
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPTempEndTime(`${endTime}:00`));
}
function* handleRSVPEndTimeInput(action) {
  const endTime = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["time"].fromSeconds, action.payload.seconds, external_tribe_common_utils_["time"].TIME_FORMAT_HH_MM);
  const endTimeMoment = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toMoment, endTime, external_tribe_common_utils_["moment"].TIME_FORMAT, false);
  const endTimeInput = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["moment"].toTime, endTimeMoment);
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPTempEndTimeInput(endTimeInput));
}

/**
 * Handles proper RSVP deletion and RSVP block removal upon moving RSVP
 *
 * @export
 * @yields
 */
function* handleRSVPMove() {
  const rsvpId = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getRSVPId);
  const modalTicketId = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getModalTicketId);
  if (rsvpId === modalTicketId) {
    const clientId = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getModalClientId);
    yield Object(external_tribe_modules_reduxSaga_effects_["put"])(deleteRSVP());
    yield Object(external_tribe_modules_reduxSaga_effects_["call"])([Object(external_wp_data_["dispatch"])('core/editor'), 'removeBlocks'], [clientId]);
  }
}

//
// ─── HEADER IMAGE ───────────────────────────────────────────────────────────────
//

function* sagas_fetchRSVPHeaderImage(action) {
  const {
    id
  } = action.payload;
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPIsSettingsLoading(true));
  try {
    const {
      response,
      data: media
    } = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["api"].wpREST, {
      path: `media/${id}`
    });
    if (response.ok) {
      const headerImage = {
        id: media.id,
        alt: media.alt_text,
        src: media.media_details.sizes.medium.source_url
      };
      yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPHeaderImage(headerImage));
    }
  } catch (e) {
    console.error(e);
    /**
     * @todo: handle error scenario
     */
  } finally {
    yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPIsSettingsLoading(false));
  }
}
function* sagas_updateRSVPHeaderImage(action) {
  const {
    image
  } = action.payload;
  const postId = yield Object(external_tribe_modules_reduxSaga_effects_["call"])([Object(external_wp_data_["select"])('core/editor'), 'getCurrentPostId']);
  const body = {
    meta: {
      [KEY_TICKET_HEADER]: `${image.id}`
    }
  };
  try {
    /**
     * @todo: until rsvp and tickets header image can be separated, they need to be linked
     */
    yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPIsSettingsLoading(true));
    yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketsIsSettingsLoading(true));
    const slug = Object(external_wp_data_["select"])('core/editor').getCurrentPostType();
    const postType = Object(external_wp_data_["select"])('core').getPostType(slug);
    const restBase = postType.rest_base;
    const {
      response
    } = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["api"].wpREST, {
      path: `${restBase}/${postId}`,
      headers: {
        'Content-Type': 'application/json'
      },
      initParams: {
        method: 'PUT',
        body: JSON.stringify(body)
      }
    });
    if (response.ok) {
      const headerImage = {
        id: image.id,
        alt: image.alt,
        src: image.sizes.medium.url
      };
      /**
       * @todo: until rsvp and tickets header image can be separated, they need to be linked
       */
      yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPHeaderImage(headerImage));
      yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketsHeaderImage(headerImage));
    }
  } catch (e) {
    /**
     * @todo: handle error scenario
     */
  } finally {
    /**
     * @todo: until rsvp and tickets header image can be separated, they need to be linked
     */
    yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPIsSettingsLoading(false));
    yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketsIsSettingsLoading(false));
  }
}
function* sagas_deleteRSVPHeaderImage() {
  const postId = yield Object(external_tribe_modules_reduxSaga_effects_["call"])([Object(external_wp_data_["select"])('core/editor'), 'getCurrentPostId']);
  const body = {
    meta: {
      [KEY_TICKET_HEADER]: null
    }
  };
  try {
    /**
     * @todo: until rsvp and tickets header image can be separated, they need to be linked
     */
    yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPIsSettingsLoading(true));
    yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketsIsSettingsLoading(true));
    const slug = Object(external_wp_data_["select"])('core/editor').getCurrentPostType();
    const postType = Object(external_wp_data_["select"])('core').getPostType(slug);
    const restBase = postType.rest_base;
    const {
      response
    } = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_common_utils_["api"].wpREST, {
      path: `${restBase}/${postId}`,
      headers: {
        'Content-Type': 'application/json'
      },
      initParams: {
        method: 'PUT',
        body: JSON.stringify(body)
      }
    });
    if (response.ok) {
      /**
       * @todo: until rsvp and tickets header image can be separated, they need to be linked
       */
      yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPHeaderImage(header_image_DEFAULT_STATE));
      yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketsHeaderImage(reducers_header_image_DEFAULT_STATE));
    }
  } catch (e) {
    /**
     * @todo: handle error scenario
     */
  } finally {
    /**
     * @todo: until rsvp and tickets header image can be separated, they need to be linked
     */
    yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPIsSettingsLoading(false));
    yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setTicketsIsSettingsLoading(false));
  }
}

//
// ─── HANDLERS ───────────────────────────────────────────────────────────────────
//

function* sagas_handler(action) {
  switch (action.type) {
    case SET_RSVP_DETAILS:
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])(sagas_setRSVPDetails, action);
      break;
    case SET_RSVP_TEMP_DETAILS:
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])(sagas_setRSVPTempDetails, action);
      break;
    case INITIALIZE_RSVP:
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])(sagas_initializeRSVP);
      break;
    case HANDLE_RSVP_START_DATE:
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])(sagas_handleRSVPStartDate, action);
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])(handleRSVPDurationError);
      yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPHasChanges(true));
      break;
    case HANDLE_RSVP_END_DATE:
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])(sagas_handleRSVPEndDate, action);
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])(handleRSVPDurationError);
      yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPHasChanges(true));
      break;
    case HANDLE_RSVP_START_TIME:
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])(sagas_handleRSVPStartTime, action);
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])(handleRSVPStartTimeInput, action);
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])(handleRSVPDurationError);
      yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPHasChanges(true));
      break;
    case HANDLE_RSVP_END_TIME:
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])(sagas_handleRSVPEndTime, action);
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])(handleRSVPEndTimeInput, action);
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])(handleRSVPDurationError);
      yield Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPHasChanges(true));
      break;
    case FETCH_RSVP_HEADER_IMAGE:
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])(sagas_fetchRSVPHeaderImage, action);
      break;
    case UPDATE_RSVP_HEADER_IMAGE:
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])(sagas_updateRSVPHeaderImage, action);
      break;
    case DELETE_RSVP_HEADER_IMAGE:
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])(sagas_deleteRSVPHeaderImage);
      break;
    case MOVE_TICKET_SUCCESS:
      yield Object(external_tribe_modules_reduxSaga_effects_["call"])(handleRSVPMove);
      break;
    default:
      break;
  }
}

/**
 * Temporary bandaid until datepickers allow blank state
 *
 * @export
 * @yields
 */
function* setNonEventPostTypeEndDate() {
  yield Object(external_tribe_modules_reduxSaga_effects_["take"])([INITIALIZE_RSVP]);
  if (yield Object(external_tribe_modules_reduxSaga_effects_["call"])(isTribeEventPostType)) {
    return;
  }
  const tempEndMoment = yield Object(external_tribe_modules_reduxSaga_effects_["select"])(getRSVPTempEndDateMoment);
  const endMoment = yield Object(external_tribe_modules_reduxSaga_effects_["call"])([tempEndMoment, 'clone']);
  const {
    date,
    dateInput,
    moment,
    time
  } = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(createDates, endMoment.toDate());
  yield Object(external_tribe_modules_reduxSaga_effects_["all"])([Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPTempEndDate(date)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPTempEndDateInput(dateInput)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPTempEndDateMoment(moment)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPTempEndTime(time)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPEndDate(date)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPEndDateInput(dateInput)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPEndDateMoment(moment)), Object(external_tribe_modules_reduxSaga_effects_["put"])(setRSVPEndTime(time))]);
}

//
// ─── WATCHERS ───────────────────────────────────────────────────────────────────
//

function* sagas_watchers() {
  yield Object(external_tribe_modules_reduxSaga_effects_["takeEvery"])([SET_RSVP_DETAILS, SET_RSVP_TEMP_DETAILS, INITIALIZE_RSVP, HANDLE_RSVP_START_DATE, HANDLE_RSVP_END_DATE, HANDLE_RSVP_START_TIME, HANDLE_RSVP_END_TIME, FETCH_RSVP_HEADER_IMAGE, UPDATE_RSVP_HEADER_IMAGE, DELETE_RSVP_HEADER_IMAGE, MOVE_TICKET_SUCCESS], sagas_handler);
  yield Object(external_tribe_modules_reduxSaga_effects_["fork"])(sagas_handleEventStartDateChanges);
  yield Object(external_tribe_modules_reduxSaga_effects_["fork"])(setNonEventPostTypeEndDate);
}
// CONCATENATED MODULE: ./src/modules/data/blocks/rsvp/index.js
/**
 * Internal dependencies
 */






/* harmony default export */ var blocks_rsvp = (reducer);

// CONCATENATED MODULE: ./src/modules/data/blocks/attendees/types.js
/* eslint-disable max-len */
/**
 * Internal dependencies
 */

const SET_ATTENDEES_INITIAL_STATE = `${PREFIX_TICKETS_STORE}/SET_ATTENDEES_INITIAL_STATE`;
const SET_ATTENDEES_TITLE = `${PREFIX_TICKETS_STORE}/SET_ATTENDEES_TITLE`;
const SET_ATTENDEES_DISPLAY_TITLE = `${PREFIX_TICKETS_STORE}/SET_ATTENDEES_DISPLAY_TITLE`;
const SET_ATTENDEES_DISPLAY_SUBTITLE = `${PREFIX_TICKETS_STORE}/SET_ATTENDEES_DISPLAY_SUBTITLE`;
// CONCATENATED MODULE: ./src/modules/data/blocks/attendees/reducer.js

function attendees_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function attendees_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? attendees_reducer_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : attendees_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * Internal dependencies
 */

const attendees_reducer_DEFAULT_STATE = {
  title: '',
  displayTitle: true,
  displaySubtitle: true
};
/* harmony default export */ var attendees_reducer = (function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : attendees_reducer_DEFAULT_STATE;
  let action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case SET_ATTENDEES_TITLE:
      return attendees_reducer_objectSpread(attendees_reducer_objectSpread({}, state), {}, {
        title: action.payload.title
      });
    case SET_ATTENDEES_DISPLAY_TITLE:
      return attendees_reducer_objectSpread(attendees_reducer_objectSpread({}, state), {}, {
        displayTitle: action.payload.displayTitle
      });
    case SET_ATTENDEES_DISPLAY_SUBTITLE:
      return attendees_reducer_objectSpread(attendees_reducer_objectSpread({}, state), {}, {
        displaySubtitle: action.payload.displaySubtitle
      });
    default:
      return state;
  }
});
// CONCATENATED MODULE: ./src/modules/data/blocks/attendees/selectors.js
/**
 * External dependencies
 */

const getAttendeesBlock = state => state.tickets.blocks.attendees;
const getTitle = Object(external_tribe_modules_reselect_["createSelector"])([getAttendeesBlock], attendees => attendees.title);
const getDisplayTitle = Object(external_tribe_modules_reselect_["createSelector"])([getAttendeesBlock], attendees => attendees.displayTitle);
const getDisplaySubtitle = Object(external_tribe_modules_reselect_["createSelector"])([getAttendeesBlock], attendees => attendees.displaySubtitle);
// CONCATENATED MODULE: ./src/modules/data/blocks/attendees/actions.js
/**
 * Internal dependencies
 */

const actions_setTitle = title => ({
  type: SET_ATTENDEES_TITLE,
  payload: {
    title
  }
});
const setDisplayTitle = displayTitle => ({
  type: SET_ATTENDEES_DISPLAY_TITLE,
  payload: {
    displayTitle
  }
});
const setDisplaySubtitle = displaySubtitle => ({
  type: SET_ATTENDEES_DISPLAY_SUBTITLE,
  payload: {
    displaySubtitle
  }
});
const setInitialState = payload => ({
  type: SET_ATTENDEES_INITIAL_STATE,
  payload
});
// CONCATENATED MODULE: ./src/modules/data/blocks/attendees/sagas.js
/**
 * External Dependencies
 */


/**
 * Internal dependencies
 */



function* sagas_setInitialState(action) {
  const {
    get
  } = action.payload;
  yield Object(external_tribe_modules_reduxSaga_effects_["all"])([Object(external_tribe_modules_reduxSaga_effects_["put"])(actions_setTitle(get('title', attendees_reducer_DEFAULT_STATE.title))), Object(external_tribe_modules_reduxSaga_effects_["put"])(setDisplayTitle(get('displayTitle', attendees_reducer_DEFAULT_STATE.displayTitle))), Object(external_tribe_modules_reduxSaga_effects_["put"])(setDisplaySubtitle(get('displaySubtitle', attendees_reducer_DEFAULT_STATE.displaySubtitle)))]);
}
function* attendees_sagas_watchers() {
  yield Object(external_tribe_modules_reduxSaga_effects_["takeEvery"])(SET_ATTENDEES_INITIAL_STATE, sagas_setInitialState);
}
// CONCATENATED MODULE: ./src/modules/data/blocks/attendees/index.js
/**
 * Internal dependencies
 */





/* harmony default export */ var attendees = (attendees_reducer);

// CONCATENATED MODULE: ./src/modules/data/blocks/reducer.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



/* harmony default export */ var blocks_reducer = (Object(external_tribe_modules_redux_["combineReducers"])({
  rsvp: blocks_rsvp,
  ticket: blocks_ticket,
  attendees: attendees
}));
// CONCATENATED MODULE: ./src/modules/data/blocks/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var blocks = (blocks_reducer);
// CONCATENATED MODULE: ./src/modules/data/shared/move/reducers/posts.js

function posts_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function posts_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? posts_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : posts_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * Internal dependencies
 */

const posts_DEFAULT_STATE = {
  isFetching: false,
  posts: {}
};
function posts_posts() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : posts_DEFAULT_STATE;
  let action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case FETCH_POST_CHOICES:
      return posts_objectSpread(posts_objectSpread({}, state), {}, {
        isFetching: true
      });
    case FETCH_POST_CHOICES_SUCCESS:
      return posts_objectSpread(posts_objectSpread(posts_objectSpread({}, state), action.data), {}, {
        isFetching: false
      });
    case FETCH_POST_CHOICES_ERROR:
      return posts_objectSpread(posts_objectSpread({}, state), {}, {
        isFetching: false
      });
    default:
      return state;
  }
}
// CONCATENATED MODULE: ./src/modules/data/shared/move/reducers/postTypes.js

function postTypes_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function postTypes_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? postTypes_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : postTypes_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * Internal dependencies
 */

const postTypes_DEFAULT_STATE = {
  isFetching: false,
  posts: {}
};
function postTypes() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : postTypes_DEFAULT_STATE;
  let action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case FETCH_POST_TYPES:
      return postTypes_objectSpread(postTypes_objectSpread({}, state), {}, {
        isFetching: true
      });
    case FETCH_POST_TYPES_SUCCESS:
      return postTypes_objectSpread(postTypes_objectSpread(postTypes_objectSpread({}, state), action.data), {}, {
        isFetching: false
      });
    case FETCH_POST_TYPES_ERROR:
      return postTypes_objectSpread(postTypes_objectSpread({}, state), {}, {
        isFetching: false
      });
    default:
      return state;
  }
}
// CONCATENATED MODULE: ./src/modules/data/shared/move/reducers/ui.js

function ui_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function ui_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ui_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ui_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * Internal dependencies
 */

const ui_DEFAULT_STATE = {
  showModal: false
};
function ui() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ui_DEFAULT_STATE;
  let action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case SHOW_MODAL:
      return ui_objectSpread(ui_objectSpread({}, state), {}, {
        showModal: true
      });
    case HIDE_MODAL:
      return ui_objectSpread(ui_objectSpread({}, state), {}, {
        showModal: false
      });
    default:
      return state;
  }
}
// CONCATENATED MODULE: ./src/modules/data/shared/move/reducers/modal.js

function modal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function modal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? modal_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : modal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/* eslint-disable camelcase */
/**
 * Internal dependencies
 */

const modal_DEFAULT_STATE = {
  post_type: 'all',
  search_terms: '',
  target_post_id: null,
  ticketId: null,
  clientId: null,
  isSubmitting: false
};
function modal() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : modal_DEFAULT_STATE;
  let action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case SET_MODAL_DATA:
      return modal_objectSpread(modal_objectSpread({}, state), action.payload);
    case MOVE_TICKET:
      return modal_objectSpread(modal_objectSpread({}, state), {}, {
        isSubmitting: true
      });
    case MOVE_TICKET_ERROR:
    case MOVE_TICKET_SUCCESS:
      return modal_objectSpread(modal_objectSpread({}, state), {}, {
        isSubmitting: false
      });
    case RESET_MODAL_DATA:
      return modal_DEFAULT_STATE;
    default:
      return state;
  }
}
// CONCATENATED MODULE: ./src/modules/data/shared/move/reducers/index.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */




/* harmony default export */ var reducers = (Object(external_tribe_modules_redux_["combineReducers"])({
  posts: posts_posts,
  postTypes: postTypes,
  ui: ui,
  modal: modal
}));
// CONCATENATED MODULE: ./src/modules/data/reducers.js
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


/* harmony default export */ var data_reducers = (Object(external_tribe_modules_redux_["combineReducers"])({
  blocks: blocks,
  move: reducers
}));
// EXTERNAL MODULE: external "tribe.common.data.plugins"
var external_tribe_common_data_plugins_ = __webpack_require__("9lL/");

// CONCATENATED MODULE: ./src/modules/data/shared/move/actions.js
/* eslint-disable camelcase */
/**
 * Internal Dependencies
 */

const showModal = (ticketId, clientId) => ({
  type: SHOW_MODAL,
  payload: {
    ticketId,
    clientId
  }
});
const hideModal = () => ({
  type: HIDE_MODAL
});
const setModalData = payload => ({
  type: SET_MODAL_DATA,
  payload
});
// CONCATENATED MODULE: ./src/modules/data/shared/move/sagas.js

function move_sagas_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function move_sagas_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? move_sagas_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : move_sagas_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/* eslint-disable camelcase */
/**
 * External Dependencies
 */



/**
 * Wordpress dependencies
 */


/**
 * Internal dependencies
 */




function createBody(params) {
  return Object.entries(params).map(_ref => {
    let [key, value] = _ref;
    return `${key}=${encodeURIComponent(value)}`;
  }).join('&');
}
function* _fetch(params) {
  try {
    const body = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(createBody, move_sagas_objectSpread(move_sagas_objectSpread({}, params), {}, {
      check: external_tribe_common_utils_["globals"].restNonce().move_tickets
    }));
    const response = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(fetch, window.ajaxurl, {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      credentials: 'include'
    });
    return yield Object(external_tribe_modules_reduxSaga_effects_["call"])([response, 'json']);
  } catch (error) {
    console.error(error);
  }
}

/**
 * Fetches usable oost types
 *
 * @yields
 * @returns {Object} JSON response
 */
function* fetchPostTypes() {
  try {
    yield Object(external_tribe_modules_reduxSaga_effects_["put"])({
      type: FETCH_POST_TYPES
    });
    const {
      data
    } = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(_fetch, {
      action: 'move_tickets_get_post_types'
    });
    yield Object(external_tribe_modules_reduxSaga_effects_["put"])({
      type: FETCH_POST_TYPES_SUCCESS,
      data
    });
    return data;
  } catch (error) {
    yield Object(external_tribe_modules_reduxSaga_effects_["put"])({
      type: FETCH_POST_TYPES_ERROR,
      error
    });
  }
}

/**
 * Fetches filtered posts based on criteria
 *
 * @export
 * @yields
 * @param {*} {
 * 	ignore,
 * 	post_type,
 * 	search_terms = '',
 * }
 * @returns {Object} JSON response
 */
function fetchPostChoices(_ref2) {
  let {
    ignore,
    post_type,
    search_terms = ''
  } = _ref2;
  return function* () {
    try {
      yield Object(external_tribe_modules_reduxSaga_effects_["put"])({
        type: FETCH_POST_CHOICES
      });
      const {
        data
      } = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(_fetch, {
        action: 'move_tickets_get_post_choices',
        ignore,
        post_type,
        search_terms
      });
      yield Object(external_tribe_modules_reduxSaga_effects_["put"])({
        type: FETCH_POST_CHOICES_SUCCESS,
        data
      });
      return data;
    } catch (error) {
      yield Object(external_tribe_modules_reduxSaga_effects_["put"])({
        type: FETCH_POST_CHOICES_ERROR,
        error
      });
    }
  }();
}

/**
 * Moves ticket/RSVP from one post to another
 *
 * @export
 * @yields
 * @param {*} {
 * 	src_post_id,
 * 	ticket_type_id,
 * 	target_post_id,
 * }
 * @returns {Object} JSON response
 */
function sagas_moveTicket(_ref3) {
  let {
    src_post_id,
    ticket_type_id,
    target_post_id
  } = _ref3;
  return function* () {
    try {
      yield Object(external_tribe_modules_reduxSaga_effects_["put"])({
        type: MOVE_TICKET
      });
      const {
        data
      } = yield Object(external_tribe_modules_reduxSaga_effects_["call"])(_fetch, {
        action: 'move_ticket_type',
        src_post_id,
        ticket_type_id,
        target_post_id
      });
      yield Object(external_tribe_modules_reduxSaga_effects_["put"])({
        type: MOVE_TICKET_SUCCESS,
        data
      });
      return data;
    } catch (error) {
      yield Object(external_tribe_modules_reduxSaga_effects_["put"])({
        type: MOVE_TICKET_ERROR,
        error
      });
    }
  }();
}
function* getCurrentPostId() {
  return yield Object(external_tribe_modules_reduxSaga_effects_["call"])([Object(external_wp_data_["select"])('core/editor'), 'getCurrentPostId']);
}
function* getPostChoices() {
  const params = yield Object(external_tribe_modules_reduxSaga_effects_["all"])({
    post_type: Object(external_tribe_modules_reduxSaga_effects_["select"])(getModalPostType),
    search_terms: Object(external_tribe_modules_reduxSaga_effects_["select"])(getModalSearch),
    ignore: Object(external_tribe_modules_reduxSaga_effects_["call"])(getCurrentPostId)
  });
  yield Object(external_tribe_modules_reduxSaga_effects_["call"])(fetchPostChoices, params);
}
function* onModalChange(action) {
  if (!action.payload.hasOwnProperty('target_post_id') && !action.payload.hasOwnProperty('ticketId')) {
    yield Object(external_tribe_modules_reduxSaga_effects_["call"])(external_tribe_modules_reduxSaga_["delay"], 500);
    yield Object(external_tribe_modules_reduxSaga_effects_["call"])(getPostChoices);
  }
}
function* onModalSubmit() {
  const params = yield Object(external_tribe_modules_reduxSaga_effects_["all"])({
    src_post_id: Object(external_tribe_modules_reduxSaga_effects_["call"])(getCurrentPostId),
    target_post_id: Object(external_tribe_modules_reduxSaga_effects_["select"])(getModalTarget),
    ticket_type_id: Object(external_tribe_modules_reduxSaga_effects_["select"])(getModalTicketId)
  });
  yield Object(external_tribe_modules_reduxSaga_effects_["fork"])(sagas_moveTicket, params);
  const action = yield Object(external_tribe_modules_reduxSaga_effects_["take"])([MOVE_TICKET_SUCCESS, MOVE_TICKET_ERROR]);
  if (action.type === MOVE_TICKET_SUCCESS) {
    yield Object(external_tribe_modules_reduxSaga_effects_["put"])(hideModal());
  }
}
function* onModalShow(action) {
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])({
    type: SET_MODAL_DATA,
    payload: action.payload
  });
}
function* onModalHide() {
  yield Object(external_tribe_modules_reduxSaga_effects_["put"])({
    type: RESET_MODAL_DATA
  });
}
function* initialize() {
  yield Object(external_tribe_modules_reduxSaga_effects_["all"])([Object(external_tribe_modules_reduxSaga_effects_["call"])(fetchPostTypes), Object(external_tribe_modules_reduxSaga_effects_["call"])(getPostChoices)]);
}
function* move_sagas_watchers() {
  yield Object(external_tribe_modules_reduxSaga_effects_["takeLatest"])([INITIALIZE_MODAL], initialize);
  yield Object(external_tribe_modules_reduxSaga_effects_["takeLatest"])([SET_MODAL_DATA], onModalChange);
  yield Object(external_tribe_modules_reduxSaga_effects_["takeLatest"])([SUBMIT_MODAL], onModalSubmit);
  yield Object(external_tribe_modules_reduxSaga_effects_["takeLatest"])([SHOW_MODAL], onModalShow);
  yield Object(external_tribe_modules_reduxSaga_effects_["takeLatest"])([HIDE_MODAL], onModalHide);
}
// CONCATENATED MODULE: ./src/modules/data/sagas.js
/**
 * Internal dependencies
 */





/* harmony default export */ var data_sagas = (() => {
  [sagas_watchers, watchers, attendees_sagas_watchers, move_sagas_watchers].forEach(sagas => external_tribe_common_store_["store"].run(sagas));
});
// CONCATENATED MODULE: ./src/modules/data/index.js
/**
 * External dependencies
 */




const initStore = () => {
  data_sagas();
  const {
    dispatch,
    injectReducers
  } = external_tribe_common_store_["store"];
  const {
    TICKETS
  } = external_tribe_common_data_plugins_["constants"];
  dispatch(external_tribe_common_data_plugins_["actions"].addPlugin(TICKETS));
  injectReducers({
    tickets: data_reducers
  });
};
const getStore = () => external_tribe_common_store_["store"];
// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__("cDcd");
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);

// CONCATENATED MODULE: ./src/modules/icons/active/clock.svg
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
function _objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}

/* harmony default export */ var clock = (_ref => {
  let {
      styles = {}
    } = _ref,
    props = _objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/external_React_default.a.createElement("svg", _extends({
    width: "60",
    height: "60",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/external_React_default.a.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/external_React_default.a.createElement("path", {
    d: "M47.043 31.028c0 9.647-7.821 17.47-17.47 17.47-9.647 0-17.468-7.823-17.468-17.47 0-9.648 7.82-17.469 17.469-17.469 9.648 0 17.469 7.821 17.469 17.47",
    fill: "#FEFEFE"
  }), /*#__PURE__*/external_React_default.a.createElement("path", {
    d: "M14.584 37.434c-2.236-.79-5.979-23.562 15.244-23.562 21.215 0 16.507 20.48 15.298 23.666 2.021-3.833-.896-18.888-15.298-18.888-14.382 0-16.39 13.972-15.244 18.784",
    fill: "#E6E6E6"
  }), /*#__PURE__*/external_React_default.a.createElement("path", {
    d: "M46.01 31.241c0 8.937-7.244 16.182-16.182 16.182-8.936 0-16.181-7.245-16.181-16.182 0-8.937 7.245-16.182 16.18-16.182 8.939 0 16.183 7.245 16.183 16.182zm-.043-10.562c1.613-1.614 1.613-4.168 0-5.648-1.614-1.48-4.168-1.614-5.648 0l-.404.403c-1.884-1.211-3.901-2.017-6.051-2.554V9.16c0-.641-.52-1.16-1.161-1.16h-5.75c-.64 0-1.16.519-1.16 1.16v3.586c-9.04 2.01-15.631 10.448-14.706 20.256.815 8.656 7.689 15.749 16.314 16.843 11.426 1.452 21.256-7.518 21.256-18.673-.133-3.768-1.21-7.265-3.093-10.09l.403-.403z",
    fill: "#444"
  }), /*#__PURE__*/external_React_default.a.createElement("path", {
    d: "M40.506 35.965l-9.578-5.257v-9.852a1.1 1.1 0 0 0-2.2 0v11.19l.57.279 10.149 5.57a1.107 1.107 0 0 0 1.495-.435l.01-.023a1.102 1.102 0 0 0-.446-1.472",
    fill: "#039ED3"
  })));
});
// CONCATENATED MODULE: ./src/modules/icons/inactive/clock.svg
var clock_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
function clock_objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}

/* harmony default export */ var inactive_clock = (_ref => {
  let {
      styles = {}
    } = _ref,
    props = clock_objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/external_React_default.a.createElement("svg", clock_extends({
    width: "60",
    height: "60",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/external_React_default.a.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/external_React_default.a.createElement("path", {
    d: "M47.043 31.028c0 9.647-7.821 17.47-17.47 17.47-9.647 0-17.468-7.823-17.468-17.47 0-9.648 7.82-17.469 17.469-17.469 9.648 0 17.469 7.821 17.469 17.47",
    fill: "#FEFEFE"
  }), /*#__PURE__*/external_React_default.a.createElement("path", {
    d: "M46.01 31.241c0 8.937-7.244 16.182-16.182 16.182-8.936 0-16.181-7.245-16.181-16.182 0-8.937 7.245-16.182 16.18-16.182 8.939 0 16.183 7.245 16.183 16.182zm-.043-10.562c1.613-1.614 1.613-4.168 0-5.648-1.614-1.48-4.168-1.614-5.648 0l-.404.403c-1.884-1.211-3.901-2.017-6.051-2.554V9.16c0-.641-.52-1.16-1.161-1.16h-5.75c-.64 0-1.16.519-1.16 1.16v3.586c-9.04 2.01-15.631 10.448-14.706 20.256.815 8.656 7.689 15.749 16.314 16.843 11.426 1.452 21.256-7.518 21.256-18.673-.133-3.768-1.21-7.265-3.093-10.09l.403-.403z",
    fill: "#AEB4BB"
  }), /*#__PURE__*/external_React_default.a.createElement("path", {
    d: "M40.506 35.965l-9.578-5.257v-9.852a1.1 1.1 0 0 0-2.2 0v11.19l.57.279 10.149 5.57a1.107 1.107 0 0 0 1.495-.435l.01-.023a1.102 1.102 0 0 0-.446-1.472",
    fill: "#AEB4BB"
  })));
});
// CONCATENATED MODULE: ./src/modules/icons/attendee-registration.svg
var attendee_registration_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
function attendee_registration_objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}

/* harmony default export */ var attendee_registration = (_ref => {
  let {
      styles = {}
    } = _ref,
    props = attendee_registration_objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/external_React_default.a.createElement("svg", attendee_registration_extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "17",
    height: "16",
    viewBox: "0 0 17 16",
    fill: "none"
  }, props), /*#__PURE__*/external_React_default.a.createElement("path", {
    d: "M9.7 1.6v-.533C9.7.477 9.165 0 8.5 0c-.666 0-1.2.476-1.2 1.067V1.6c-.666 0-1.2.476-1.2 1.067V3.2h4.8v-.54c0-.584-.535-1.06-1.2-1.06z",
    fill: "#727272"
  }), /*#__PURE__*/external_React_default.a.createElement("path", {
    d: "M5.194 1.6H3.3v12.8h10.4V1.6h-1.923M6.1 6.8h4.8M6.1 10.832h4.8",
    stroke: "#727272",
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
});
// CONCATENATED MODULE: ./src/modules/icons/sale-window.svg
var sale_window_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
function sale_window_objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}

/* harmony default export */ var sale_window = (_ref => {
  let {
      styles = {}
    } = _ref,
    props = sale_window_objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/external_React_default.a.createElement("svg", sale_window_extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, props), /*#__PURE__*/external_React_default.a.createElement("path", {
    d: "M8 14.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z",
    stroke: "#727272",
    strokeWidth: "1.5",
    strokeMiterlimit: "10"
  }), /*#__PURE__*/external_React_default.a.createElement("path", {
    d: "M8 4v4.5l2.5 2",
    stroke: "#727272",
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round"
  }));
});
// CONCATENATED MODULE: ./src/modules/icons/tickets.svg
var tickets_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
function tickets_objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}

/* harmony default export */ var icons_tickets = (_ref => {
  let {
      styles = {}
    } = _ref,
    props = tickets_objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/external_React_default.a.createElement("svg", tickets_extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 47.85 38.44"
  }, props), /*#__PURE__*/external_React_default.a.createElement("defs", null), /*#__PURE__*/external_React_default.a.createElement("title", null, "block-icon-tickets"), /*#__PURE__*/external_React_default.a.createElement("g", {
    id: "Layer_2",
    "data-name": "Layer 2"
  }, /*#__PURE__*/external_React_default.a.createElement("path", {
    className: styles["cls-1"] || "cls-1",
    d: "M47.15 24.14a3.66 3.66 0 0 1-1.71 0 3.7 3.7 0 0 1 .33-7.25l-.71-3.68A3.69 3.69 0 0 1 43.67 6l-.49-2.55a4.22 4.22 0 0 0-5-3.33l-34.8 7a4.23 4.23 0 0 0-3.3 4.93l.44 2.35a3.66 3.66 0 0 1 1.81 0 3.69 3.69 0 0 1-.43 7.25l.72 3.7A3.69 3.69 0 1 1 4 32.57l.62 3.3a3.18 3.18 0 0 0 3.71 2.51l36.95-7.15a3.18 3.18 0 0 0 2.51-3.71zm-31.46-9.86l14.18-2.82.81 3.86-14.17 2.81zm2.46 13l-.8-3.94 14.18-2.82.8 3.94z",
    id: "Layer_1-2",
    "data-name": "Layer 1"
  })));
});
// CONCATENATED MODULE: ./src/modules/icons/active/ticket.svg
var ticket_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
function ticket_objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}

/* harmony default export */ var active_ticket = (_ref => {
  let {
      styles = {}
    } = _ref,
    props = ticket_objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/external_React_default.a.createElement("svg", ticket_extends({
    width: "60",
    height: "60",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/external_React_default.a.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/external_React_default.a.createElement("path", {
    d: "M10.238 43.288l.98 5.341c.098.538.6.894 1.123.8l38.995-6.636c.713-.13 1.223-.782 1.2-1.528l-1.132-5.123-38.54 10.777-2.39-3.977-.236.346z",
    fill: "#E6E6E6"
  }), /*#__PURE__*/external_React_default.a.createElement("path", {
    fill: "#FEFEFE",
    d: "M6.161 24.997l1.583 5.417 1.792 1.375-.375 3.333.375 2.625 2.041 2-.583 3.292 1.25 4.833 41.292-12.417L52.37 30.1l-2.25-1.42-.375-1.933 1.083-2.333-.416-1.625-1.667-1.042-1.208-2.417 1.041-2-.916-4.708z"
  }), /*#__PURE__*/external_React_default.a.createElement("path", {
    d: "M14.267 31.31l-.434-1.434a.25.25 0 0 1 .167-.311l28.5-8.614a.251.251 0 0 1 .312.167l.434 1.436a.25.25 0 0 1-.167.312l-28.5 8.613a.251.251 0 0 1-.312-.168m2.393 7.739l-.435-1.435a.25.25 0 0 1 .167-.311l28.5-8.613a.25.25 0 0 1 .312.167l.434 1.435a.25.25 0 0 1-.167.312l-28.5 8.613a.251.251 0 0 1-.312-.168",
    fill: "#039ED3"
  }), /*#__PURE__*/external_React_default.a.createElement("path", {
    d: "M12.812 46.805l-.061-.23-.237-.91-.66-2.528a.416.416 0 0 1-.01-.061.305.305 0 0 1 .039-.186c.074-.112.115-.174.153-.237a4.164 4.164 0 0 0 .586-2.292 4.13 4.13 0 0 0-.27-1.297c-.367-.956-1.066-1.7-1.971-2.095a.307.307 0 0 1-.181-.21l-.32-1.223a.347.347 0 0 1 .054-.287 4.097 4.097 0 0 0 .438-3.777c-.37-.958-1.07-1.702-1.971-2.095a.314.314 0 0 1-.18-.206l-.877-3.372a8.538 8.538 0 0 0-.085-.292l.294-.1 39.046-11.925.28-.08.082.3.81 3.112a.336.336 0 0 1-.065.298 4.01 4.01 0 0 0-.861 1.622 4.065 4.065 0 0 0 .329 2.939c.476.896 1.25 1.537 2.186 1.808a.297.297 0 0 1 .2.217l.186.706a.32.32 0 0 1-.066.292c-.867.99-1.197 2.41-.862 3.704.339 1.292 1.304 2.313 2.517 2.666a.301.301 0 0 1 .203.217l.806 3.107.08.306s-.195.062-.29.094l-39.03 11.929-.292.086zM54.578 35.1l-1.364-5.24c-.115-.446-.5-.753-.931-.755-.725-.001-1.376-.537-1.57-1.287-.196-.747.098-1.562.717-1.982a1.1 1.1 0 0 0 .432-1.173l-.624-2.397c-.116-.444-.483-.753-.931-.754a1.645 1.645 0 0 1-1.372-.814 1.86 1.86 0 0 1-.216-1.338 1.79 1.79 0 0 1 .735-1.117 1.09 1.09 0 0 0 .43-1.173l-1.364-5.245-.035-.12-.037-.112c-.024-.065-.033-.098-.048-.134-.037-.086-.042-.098-.051-.114a.763.763 0 0 0-.098-.16.572.572 0 0 0-.126-.112.675.675 0 0 0-.171-.065c-.13-.008-.157-.01-.193-.008-.12.014-.145.019-.175.024l-.17.037c-.015.003-.048.012-41.605 12.709-.854.296-.932.446-.694 1.338l1.399 5.358c.102.389.408.68.779.742.378.069.723.274.974.577.296.359.439.82.408 1.296a1.845 1.845 0 0 1-.571 1.233 1.102 1.102 0 0 0-.31 1.075l.697 2.67c.1.387.407.68.779.743.376.065.722.273.974.577a1.823 1.823 0 0 1 .408 1.295 1.852 1.852 0 0 1-.107.517 1.897 1.897 0 0 1-.143.313c-.09.15-.198.286-.323.404a1.042 1.042 0 0 0-.299.489 1.13 1.13 0 0 0-.008.585l1.397 5.373c.104.345.173.562.287.693a.407.407 0 0 0 .295.149.801.801 0 0 0 .11 0c.05-.002.109-.01.174-.023.06-.011.128-.026.215-.048l.34-.103 4.59-1.4c.202-.06.407-.124.618-.186l12.233-3.732 1.79-.547 4.057-1.237c.3-.092.598-.183.897-.272l17.106-5.22c.826-.29.867-.48.695-1.33z",
    fill: "#444"
  })));
});
// CONCATENATED MODULE: ./src/modules/icons/inactive/ticket.svg
var inactive_ticket_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
function inactive_ticket_objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}

/* harmony default export */ var inactive_ticket = (_ref => {
  let {
      styles = {}
    } = _ref,
    props = inactive_ticket_objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/external_React_default.a.createElement("svg", inactive_ticket_extends({
    width: "60",
    height: "60",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/external_React_default.a.createElement("g", {
    fill: "#AEB4BB",
    fillRule: "evenodd"
  }, /*#__PURE__*/external_React_default.a.createElement("path", {
    d: "M14.267 31.31l-.434-1.434a.25.25 0 0 1 .167-.311l28.5-8.614a.251.251 0 0 1 .312.167l.434 1.436a.25.25 0 0 1-.167.312l-28.5 8.613a.251.251 0 0 1-.312-.168m2.393 7.739l-.435-1.435a.25.25 0 0 1 .167-.311l28.5-8.613a.25.25 0 0 1 .312.167l.434 1.435a.25.25 0 0 1-.167.312l-28.5 8.613a.251.251 0 0 1-.312-.168"
  }), /*#__PURE__*/external_React_default.a.createElement("path", {
    d: "M12.812 46.805l-.061-.23-.237-.91-.66-2.528a.416.416 0 0 1-.01-.061.305.305 0 0 1 .039-.186c.074-.112.115-.174.153-.237a4.164 4.164 0 0 0 .586-2.292 4.13 4.13 0 0 0-.27-1.297c-.367-.956-1.066-1.7-1.971-2.095a.307.307 0 0 1-.181-.21l-.32-1.223a.347.347 0 0 1 .054-.287 4.097 4.097 0 0 0 .438-3.777c-.37-.958-1.07-1.702-1.971-2.095a.314.314 0 0 1-.18-.206l-.877-3.372a8.538 8.538 0 0 0-.085-.292l.294-.1 39.046-11.925.28-.08.082.3.81 3.112a.336.336 0 0 1-.065.298 4.01 4.01 0 0 0-.861 1.622 4.065 4.065 0 0 0 .329 2.939c.476.896 1.25 1.537 2.186 1.808a.297.297 0 0 1 .2.217l.186.706a.32.32 0 0 1-.066.292c-.867.99-1.197 2.41-.862 3.704.339 1.292 1.304 2.313 2.517 2.666a.301.301 0 0 1 .203.217l.806 3.107.08.306s-.195.062-.29.094l-39.03 11.929-.292.086zM54.578 35.1l-1.364-5.24c-.115-.446-.5-.753-.931-.755-.725-.001-1.376-.537-1.57-1.287-.196-.747.098-1.562.717-1.982a1.1 1.1 0 0 0 .432-1.173l-.624-2.397c-.116-.444-.483-.753-.931-.754a1.645 1.645 0 0 1-1.372-.814 1.86 1.86 0 0 1-.216-1.338 1.79 1.79 0 0 1 .735-1.117 1.09 1.09 0 0 0 .43-1.173l-1.364-5.245-.035-.12-.037-.112c-.024-.065-.033-.098-.048-.134-.037-.086-.042-.098-.051-.114a.763.763 0 0 0-.098-.16.572.572 0 0 0-.126-.112.675.675 0 0 0-.171-.065c-.13-.008-.157-.01-.193-.008-.12.014-.145.019-.175.024l-.17.037c-.015.003-.048.012-41.605 12.709-.854.296-.932.446-.694 1.338l1.399 5.358c.102.389.408.68.779.742.378.069.723.274.974.577.296.359.439.82.408 1.296a1.845 1.845 0 0 1-.571 1.233 1.102 1.102 0 0 0-.31 1.075l.697 2.67c.1.387.407.68.779.743.376.065.722.273.974.577a1.823 1.823 0 0 1 .408 1.295 1.852 1.852 0 0 1-.107.517 1.897 1.897 0 0 1-.143.313c-.09.15-.198.286-.323.404a1.042 1.042 0 0 0-.299.489 1.13 1.13 0 0 0-.008.585l1.397 5.373c.104.345.173.562.287.693a.407.407 0 0 0 .295.149.801.801 0 0 0 .11 0c.05-.002.109-.01.174-.023.06-.011.128-.026.215-.048l.34-.103 4.59-1.4c.202-.06.407-.124.618-.186l12.233-3.732 1.79-.547 4.057-1.237c.3-.092.598-.183.897-.272l17.106-5.22c.826-.29.867-.48.695-1.33z"
  })));
});
// CONCATENATED MODULE: ./src/modules/icons/rsvp.svg
var rsvp_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
function rsvp_objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}

/* harmony default export */ var icons_rsvp = (_ref => {
  let {
      styles = {}
    } = _ref,
    props = rsvp_objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/external_React_default.a.createElement("svg", rsvp_extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 47.99 38.9"
  }, props), /*#__PURE__*/external_React_default.a.createElement("defs", null), /*#__PURE__*/external_React_default.a.createElement("title", null, "block-icon-rsvp"), /*#__PURE__*/external_React_default.a.createElement("g", {
    id: "Layer_2",
    "data-name": "Layer 2"
  }, /*#__PURE__*/external_React_default.a.createElement("g", {
    id: "Layer_1-2",
    "data-name": "Layer 1"
  }, /*#__PURE__*/external_React_default.a.createElement("path", {
    className: styles["cls-1"] || "cls-1",
    d: "M47.93 28l-5-26.27L26.1 27a1.11 1.11 0 0 1-1.57.3L0 10.38l5 25.91a3.21 3.21 0 0 0 3.75 2.54l36.67-7A3.21 3.21 0 0 0 47.93 28z"
  }), /*#__PURE__*/external_React_default.a.createElement("path", {
    className: styles["cls-1"] || "cls-1",
    d: "M23.64 21.23a.81.81 0 0 0 1-.11L39.93 0 1.65 7.34l20.84 13.17z"
  }))));
});
// CONCATENATED MODULE: ./src/modules/icons/active/rsvp.svg
var active_rsvp_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
function active_rsvp_objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}

/* harmony default export */ var active_rsvp = (_ref => {
  let {
      styles = {}
    } = _ref,
    props = active_rsvp_objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/external_React_default.a.createElement("svg", active_rsvp_extends({
    width: "60",
    height: "60",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/external_React_default.a.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/external_React_default.a.createElement("path", {
    d: "M5.419 24.046l26.093 9.307 16.183-22.117.567.858-15.905 25.354a1.926 1.926 0 0 1-2.491.701L5.012 25.761l.407-1.715z",
    fill: "#E6E6E6"
  }), /*#__PURE__*/external_React_default.a.createElement("path", {
    fill: "#039ED3",
    d: "M12.517 49.828l-1.762-.945 10.58-19.731 1.763.946zm42.792-12.271l-19.43-11.125.995-1.736 19.429 11.125z"
  }), /*#__PURE__*/external_React_default.a.createElement("path", {
    d: "M3 9h54.017v41.354H3z"
  }), /*#__PURE__*/external_React_default.a.createElement("path", {
    d: "M5.237 23.411l7.084 24.706L54.78 35.942l-7.084-24.706L5.237 23.411zm6.398 26.943a1.005 1.005 0 0 1-.961-.724L3.04 23.001a1 1 0 0 1 .685-1.237l44.38-12.726a1.002 1.002 0 0 1 1.237.685l7.635 26.63a1 1 0 0 1-.685 1.236l-44.38 12.726a.959.959 0 0 1-.277.04z",
    fill: "#444"
  }), /*#__PURE__*/external_React_default.a.createElement("path", {
    d: "M31.1 34.48c-.118 0-.237-.02-.352-.063L3.83 24.295l.704-1.871 26.222 9.86 17.012-22.257 1.59 1.215-17.463 22.846a1 1 0 0 1-.795.393",
    fill: "#444"
  })));
});
// CONCATENATED MODULE: ./src/modules/icons/inactive/rsvp.svg
var inactive_rsvp_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
function inactive_rsvp_objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}

/* harmony default export */ var inactive_rsvp = (_ref => {
  let {
      styles = {}
    } = _ref,
    props = inactive_rsvp_objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/external_React_default.a.createElement("svg", inactive_rsvp_extends({
    width: "60",
    height: "60",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/external_React_default.a.createElement("g", {
    fill: "#AEB4BB",
    fillRule: "evenodd"
  }, /*#__PURE__*/external_React_default.a.createElement("path", {
    d: "M12.517 49.828l-1.762-.945 10.58-19.731 1.763.946zm42.792-12.271l-19.43-11.125.995-1.736 19.429 11.125z"
  }), /*#__PURE__*/external_React_default.a.createElement("path", {
    d: "M5.237 23.411l7.084 24.706L54.78 35.942l-7.084-24.706L5.237 23.411zm6.398 26.943a1.005 1.005 0 0 1-.961-.724L3.04 23.001a1 1 0 0 1 .685-1.237l44.38-12.726a1.002 1.002 0 0 1 1.237.685l7.635 26.63a1 1 0 0 1-.685 1.236l-44.38 12.726a.959.959 0 0 1-.277.04z"
  }), /*#__PURE__*/external_React_default.a.createElement("path", {
    d: "M31.1 34.48c-.118 0-.237-.02-.352-.063L3.83 24.295l.704-1.871 26.222 9.86 17.012-22.257 1.59 1.215-17.463 22.846a1 1 0 0 1-.795.393"
  })));
});
// CONCATENATED MODULE: ./src/modules/icons/gravatar.svg
var gravatar_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
function gravatar_objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}

/* harmony default export */ var gravatar = (_ref => {
  let {
      styles = {}
    } = _ref,
    props = gravatar_objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/external_React_default.a.createElement("svg", gravatar_extends({
    version: "1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "200",
    height: "200",
    viewBox: "0 0 200 200"
  }, props), /*#__PURE__*/external_React_default.a.createElement("path", {
    fill: "#C5C5C5",
    d: "M0 0h200v200H0z"
  }), /*#__PURE__*/external_React_default.a.createElement("path", {
    fill: "#FFF",
    d: "M23.511 200h152.977c-6.617-38.031-27.018-68.385-53.278-79.828 12.934-7.904 21.567-22.154 21.567-38.422 0-24.853-20.147-45-45-45s-45 20.147-45 45c0 16.345 8.715 30.652 21.751 38.534-26.134 11.53-46.421 41.811-53.017 79.716z"
  }));
});
// CONCATENATED MODULE: ./src/modules/icons/attendees.svg
var attendees_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
function attendees_objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}

/* harmony default export */ var icons_attendees = (_ref => {
  let {
      styles = {}
    } = _ref,
    props = attendees_objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/external_React_default.a.createElement("svg", attendees_extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "21",
    height: "21",
    viewBox: "0 0 21 21",
    fill: "none"
  }, props), /*#__PURE__*/external_React_default.a.createElement("path", {
    d: "M18 18.25v-1.667c0-.884-.395-1.732-1.098-2.357-.704-.625-1.657-.976-2.652-.976h-7.5c-.995 0-1.948.351-2.652.976C3.395 14.851 3 15.7 3 16.583v1.667M10.5 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
    stroke: "#727272",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
});
// CONCATENATED MODULE: ./src/modules/icons/orders.svg
var orders_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
function orders_objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}

/* harmony default export */ var orders = (_ref => {
  let {
      styles = {}
    } = _ref,
    props = orders_objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/external_React_default.a.createElement("svg", orders_extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "19",
    height: "19",
    viewBox: "0 0 19 19",
    fill: "none"
  }, props), /*#__PURE__*/external_React_default.a.createElement("path", {
    d: "M9.5 17.5a8 8 0 1 0 0-16 8 8 0 0 0 0 16z",
    stroke: "#727373",
    strokeWidth: "1.5",
    strokeMiterlimit: "10"
  }), /*#__PURE__*/external_React_default.a.createElement("path", {
    d: "M9.5 13.667v1M9.5 4.417v1M11.954 7.088s-.379-1.421-2.363-1.421-2.599 1.22-2.599 1.899c0 2.62 5.092.93 5.092 3.632 0 .956-.79 1.973-2.733 1.969-1.922-.005-2.517-1.746-2.517-1.746",
    stroke: "#727373",
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round"
  }));
});
// CONCATENATED MODULE: ./src/modules/icons/settings.svg
var settings_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
function settings_objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}

/* harmony default export */ var icons_settings = (_ref => {
  let {
      styles = {}
    } = _ref,
    props = settings_objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/external_React_default.a.createElement("svg", settings_extends({
    width: "24",
    height: "26",
    viewBox: "0 0 24 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/external_React_default.a.createElement("path", {
    d: "M12 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    stroke: "#727272",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/external_React_default.a.createElement("path", {
    d: "M19.4 16a1.65 1.65 0 0 0 .33 1.82l.06.06a1.998 1.998 0 0 1 0 2.83 1.998 1.998 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V22a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 20.4a1.65 1.65 0 0 0-1.82.33l-.06.06a1.998 1.998 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 10a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V4a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 3.417 1.415 2 2 0 0 1-.587 1.415l-.06.06a1.65 1.65 0 0 0-.33 1.82V10a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z",
    stroke: "#727272",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
});
// CONCATENATED MODULE: ./src/modules/icons/close.svg
var close_extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
function close_objectWithoutProperties(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }
  return target;
}

/* harmony default export */ var icons_close = (_ref => {
  let {
      styles = {}
    } = _ref,
    props = close_objectWithoutProperties(_ref, ["styles"]);
  return /*#__PURE__*/external_React_default.a.createElement("svg", close_extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none"
  }, props), /*#__PURE__*/external_React_default.a.createElement("path", {
    d: "M13 2L2 13M13 13L2 2",
    stroke: "#727272",
    strokeWidth: "2",
    strokeLinecap: "square"
  }));
});
// CONCATENATED MODULE: ./src/modules/icons/index.js















// EXTERNAL MODULE: external "tribe.modules.reactRedux"
var external_tribe_modules_reactRedux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "tribe.modules.propTypes"
var external_tribe_modules_propTypes_ = __webpack_require__("rf6O");
var external_tribe_modules_propTypes_default = /*#__PURE__*/__webpack_require__.n(external_tribe_modules_propTypes_);

// EXTERNAL MODULE: external "tribe.modules.classnames"
var external_tribe_modules_classnames_ = __webpack_require__("K2gz");
var external_tribe_modules_classnames_default = /*#__PURE__*/__webpack_require__.n(external_tribe_modules_classnames_);

// EXTERNAL MODULE: external "wp.components"
var external_wp_components_ = __webpack_require__("tI+e");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("pVnL");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("QILm");
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: external "tribe.common.elements"
var external_tribe_common_elements_ = __webpack_require__("6Ugf");

// EXTERNAL MODULE: ./src/modules/elements/action-button/style.pcss
var action_button_style = __webpack_require__("unXf");

// CONCATENATED MODULE: ./src/modules/elements/action-button/element.js



const _excluded = ["asLink", "children", "className", "disabled", "href", "icon", "onClick", "position", "target"];
function element_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function element_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? element_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : element_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */


const positions = {
  right: 'right',
  left: 'left'
};
const components = {
  button: external_tribe_common_elements_["Button"],
  link: external_tribe_common_elements_["Link"]
};
const ActionButton = _ref => {
  let {
      asLink,
      children,
      className,
      disabled,
      href,
      icon,
      onClick,
      position,
      target
    } = _ref,
    props = objectWithoutProperties_default()(_ref, _excluded);
  const containerClass = external_tribe_modules_classnames_default()('tribe-editor__action-button', `tribe-editor__action-button--icon-${position}`, className);
  const Element = asLink && !disabled ? components.link : components.button;
  const getProps = () => {
    const elemProps = element_objectSpread({}, props);
    if (asLink && !disabled) {
      elemProps.onMouseDown = () => {
        window.open(href, target);
      };
    } else {
      elemProps.disabled = disabled;
      elemProps.onMouseDown = onClick;
    }
    return elemProps;
  };
  return wp.element.createElement(Element, extends_default()({
    className: containerClass
  }, getProps()), icon, wp.element.createElement("span", {
    className: "tribe-editor__action-button__label"
  }, children));
};
ActionButton.propTypes = {
  asLink: external_tribe_modules_propTypes_default.a.bool,
  children: external_tribe_modules_propTypes_default.a.node,
  className: external_tribe_modules_propTypes_default.a.string,
  disabled: external_tribe_modules_propTypes_default.a.bool,
  href: external_tribe_modules_propTypes_default.a.string,
  icon: external_tribe_modules_propTypes_default.a.node.isRequired,
  onClick: external_tribe_modules_propTypes_default.a.func,
  position: external_tribe_modules_propTypes_default.a.oneOf(Object.keys(positions)),
  target: external_tribe_modules_propTypes_default.a.string
};
ActionButton.defaultProps = {
  asLink: false,
  position: positions.left
};
/* harmony default export */ var action_button_element = (ActionButton);
// CONCATENATED MODULE: ./src/modules/elements/action-button/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var action_button = (action_button_element);
// EXTERNAL MODULE: external "lodash.noop"
var external_lodash_noop_ = __webpack_require__("In0u");
var external_lodash_noop_default = /*#__PURE__*/__webpack_require__.n(external_lodash_noop_);

// EXTERNAL MODULE: ./src/modules/elements/action-dashboard/style.pcss
var action_dashboard_style = __webpack_require__("P9XJ");

// CONCATENATED MODULE: ./src/modules/elements/action-dashboard/element.js

/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


const ActionDashboard = _ref => {
  let {
    actions,
    cancelLabel,
    className,
    confirmLabel,
    isCancelDisabled,
    isConfirmDisabled,
    onCancelClick,
    onConfirmClick,
    showCancel,
    showConfirm
  } = _ref;
  const actionsList = actions && !!actions.length && wp.element.createElement("div", {
    className: "tribe-editor__action-dashboard__group-left"
  }, actions.map((action, index) => wp.element.createElement("span", {
    key: `action-${index}`,
    className: "tribe-editor__action-dashboard__action-wrapper"
  }, action)));
  const cancelButton = showCancel && wp.element.createElement(external_tribe_common_elements_["Button"], {
    className: "tribe-editor__action-dashboard__cancel-button",
    isDisabled: isCancelDisabled,
    onClick: onCancelClick
  }, cancelLabel);

  /* eslint-disable max-len */
  const confirmButton = showConfirm && wp.element.createElement(external_tribe_common_elements_["Button"], {
    className: "tribe-editor__action-dashboard__confirm-button tribe-editor__button--sm tribe-common-c-btn",
    isDisabled: isConfirmDisabled,
    onMouseDown: onConfirmClick
  }, confirmLabel);
  /* eslint-enable max-len */

  const groupRight = (showCancel || showConfirm) && wp.element.createElement("div", {
    className: "tribe-editor__action-dashboard__group-right"
  }, cancelButton, confirmButton);
  return wp.element.createElement("section", {
    className: external_tribe_modules_classnames_default()('tribe-editor__action-dashboard', className)
  }, actionsList, groupRight);
};
ActionDashboard.defaultProps = {
  showCancel: true,
  showConfirm: true,
  onCancelClick: external_lodash_noop_default.a,
  onConfirmClick: external_lodash_noop_default.a
};
ActionDashboard.propTypes = {
  actions: external_tribe_modules_propTypes_default.a.arrayOf(external_tribe_modules_propTypes_default.a.node),
  cancelLabel: external_tribe_modules_propTypes_default.a.string,
  className: external_tribe_modules_propTypes_default.a.string,
  confirmLabel: external_tribe_modules_propTypes_default.a.string,
  isCancelDisabled: external_tribe_modules_propTypes_default.a.bool,
  isConfirmDisabled: external_tribe_modules_propTypes_default.a.bool,
  onCancelClick: external_tribe_modules_propTypes_default.a.func,
  onConfirmClick: external_tribe_modules_propTypes_default.a.func,
  showCancel: external_tribe_modules_propTypes_default.a.bool,
  showConfirm: external_tribe_modules_propTypes_default.a.bool
};
/* harmony default export */ var action_dashboard_element = (ActionDashboard);
// CONCATENATED MODULE: ./src/modules/elements/action-dashboard/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var action_dashboard = (action_dashboard_element);
// EXTERNAL MODULE: ./src/modules/elements/attendees-registration/style.pcss
var attendees_registration_style = __webpack_require__("ph4m");

// CONCATENATED MODULE: ./src/modules/elements/attendees-registration/element.js



const element_excluded = ["helperText", "iframeURL", "isDisabled", "isModalOpen", "label", "linkText", "modalTitle", "onClick", "onClose", "onIframeLoad", "showHelperText"];
/**
 * External dependencies
 */



/**
 * Wordpress dependencies
 */



/**
 * Internal dependencies
 */


class element_AttendeesRegistration extends external_React_["PureComponent"] {
  constructor(props) {
    super(props);
    this.iframe = /*#__PURE__*/Object(external_React_["createRef"])();
  }
  render() {
    const _this$props = this.props,
      {
        helperText,
        iframeURL,
        isDisabled,
        isModalOpen,
        label,
        linkText,
        modalTitle,
        onClick,
        onClose,
        onIframeLoad,
        showHelperText
      } = _this$props,
      restProps = objectWithoutProperties_default()(_this$props, element_excluded);
    const modalContent = wp.element.createElement("div", {
      className: "tribe-editor__attendee-registration__modal-content"
    }, wp.element.createElement("iframe", {
      className: "tribe-editor__attendee-registration__modal-iframe",
      onLoad: () => onIframeLoad(this.iframe.current),
      ref: this.iframe,
      src: iframeURL,
      title: Object(external_wp_i18n_["__"])('Attendee registration', 'event-tickets')
    }), wp.element.createElement("div", {
      className: "tribe-editor__attendee-registration__modal-overlay"
    }, wp.element.createElement(external_wp_components_["Spinner"], null)));
    return wp.element.createElement("div", {
      className: "tribe-editor__attendee-registration"
    }, wp.element.createElement(external_tribe_common_elements_["LabelWithModal"], extends_default()({
      className: "tribe-editor__attendee-registration__label-with-modal",
      isOpen: isModalOpen,
      label: label,
      modalButtonDisabled: isDisabled,
      modalButtonLabel: linkText,
      modalClassName: "tribe-editor__attendee-registration__modal",
      modalContent: modalContent,
      modalTitle: modalTitle,
      onClick: onClick,
      onClose: onClose
    }, restProps)), showHelperText && wp.element.createElement("span", {
      className: "tribe-editor__attendee-registration__helper-text"
    }, helperText));
  }
}
defineProperty_default()(element_AttendeesRegistration, "propTypes", {
  helperText: external_tribe_modules_propTypes_default.a.string.isRequired,
  iframeURL: external_tribe_modules_propTypes_default.a.string.isRequired,
  isDisabled: external_tribe_modules_propTypes_default.a.bool.isRequired,
  isModalOpen: external_tribe_modules_propTypes_default.a.bool.isRequired,
  label: external_tribe_modules_propTypes_default.a.string.isRequired,
  linkText: external_tribe_modules_propTypes_default.a.string.isRequired,
  modalTitle: external_tribe_modules_propTypes_default.a.string.isRequired,
  onClick: external_tribe_modules_propTypes_default.a.func.isRequired,
  onClose: external_tribe_modules_propTypes_default.a.func.isRequired,
  onIframeLoad: external_tribe_modules_propTypes_default.a.func.isRequired,
  showHelperText: external_tribe_modules_propTypes_default.a.bool.isRequired
});
/* harmony default export */ var attendees_registration_element = (element_AttendeesRegistration);
// CONCATENATED MODULE: ./src/modules/elements/attendees-registration/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var attendees_registration = (attendees_registration_element);
// EXTERNAL MODULE: ./src/modules/elements/card/style.pcss
var card_style = __webpack_require__("68xo");

// CONCATENATED MODULE: ./src/modules/elements/card/element.js
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */

const Card = _ref => {
  let {
    className,
    children,
    header
  } = _ref;
  return wp.element.createElement("div", {
    className: external_tribe_modules_classnames_default()('tribe-editor__card', className)
  }, header && wp.element.createElement("div", {
    className: "tickets-heading tickets-row-line"
  }, header), children);
};
Card.propTypes = {
  className: external_tribe_modules_propTypes_default.a.string,
  children: external_tribe_modules_propTypes_default.a.node,
  header: external_tribe_modules_propTypes_default.a.string
};
/* harmony default export */ var card_element = (Card);
// CONCATENATED MODULE: ./src/modules/elements/card/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var card = (card_element);
// EXTERNAL MODULE: ./src/modules/elements/split-container/style.pcss
var split_container_style = __webpack_require__("9mgW");

// CONCATENATED MODULE: ./src/modules/elements/split-container/element.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */

const SplitContainer = _ref => {
  let {
    leftColumn,
    rightColumn
  } = _ref;
  return wp.element.createElement(external_React_default.a.Fragment, null, wp.element.createElement("div", {
    className: "tribe-editor__rsvp-details-wrapper"
  }, wp.element.createElement("div", {
    className: "tribe-editor__rsvp-details"
  }, leftColumn)), wp.element.createElement("div", {
    className: "tribe-editor__rsvp-actions-wrapper"
  }, wp.element.createElement("div", {
    className: "tribe-editor__rsvp-actions"
  }, wp.element.createElement("div", {
    className: "tribe-editor__rsvp-actions-rsvp"
  }, wp.element.createElement("div", {
    className: "tribe-editor__rsvp-actions-rsvp-create"
  }, rightColumn)))));
};
SplitContainer.propTypes = {
  leftColumn: external_tribe_modules_propTypes_default.a.node,
  rightColumn: external_tribe_modules_propTypes_default.a.node
};
/* harmony default export */ var split_container_element = (SplitContainer);
// CONCATENATED MODULE: ./src/modules/elements/split-container/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var split_container = (split_container_element);
// EXTERNAL MODULE: ./src/modules/elements/container-panel/style.pcss
var container_panel_style = __webpack_require__("+9iv");

// CONCATENATED MODULE: ./src/modules/elements/container-panel/element.js
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */

const LAYOUT = {
  rsvp: 'rsvp',
  ticket: 'ticket'
};
const ContainerPanel = _ref => {
  let {
    className,
    content,
    header,
    layout
  } = _ref;
  const headerAndContent = wp.element.createElement(external_React_["Fragment"], null, wp.element.createElement("div", {
    className: "tribe-editor__container-panel__header"
  }, header), content && wp.element.createElement("div", {
    className: "tribe-editor__container-panel__content"
  }, content));
  const getHeaderAndContent = () => layout === LAYOUT.ticket ? headerAndContent : wp.element.createElement("div", {
    className: "tribe-editor__container-panel__header-content-wrapper"
  }, headerAndContent);
  return wp.element.createElement("div", {
    className: external_tribe_modules_classnames_default()('tribe-editor__container-panel', `tribe-editor__container-panel--${layout}`, className)
  }, getHeaderAndContent());
};
ContainerPanel.propTypes = {
  className: external_tribe_modules_propTypes_default.a.string,
  content: external_tribe_modules_propTypes_default.a.node,
  header: external_tribe_modules_propTypes_default.a.node,
  layout: external_tribe_modules_propTypes_default.a.oneOf(Object.keys(LAYOUT)).isRequired
};
/* harmony default export */ var container_panel_element = (ContainerPanel);
// CONCATENATED MODULE: ./src/modules/elements/container-panel/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var container_panel = (container_panel_element);

// EXTERNAL MODULE: ./node_modules/react-day-picker/moment/index.js
var react_day_picker_moment = __webpack_require__("1rrs");

// EXTERNAL MODULE: ./src/modules/elements/date-time-range-picker/style.pcss
var date_time_range_picker_style = __webpack_require__("kd3S");

// CONCATENATED MODULE: ./src/modules/elements/date-time-range-picker/element.js


/**
 * External dependencies
 */





/**
 * Internal dependencies
 */



class element_DateTimeRangePicker extends external_React_["Component"] {
  constructor(_props) {
    super(_props);
    defineProperty_default()(this, "getFromDayPickerInputProps", () => {
      const {
        fromDate,
        fromDateInput,
        fromDateDisabled,
        fromDateFormat,
        onFromDateChange,
        shiftFocus,
        toDate
      } = this.props;
      const props = {
        value: fromDateInput,
        format: fromDateFormat,
        formatDate: react_day_picker_moment["formatDate"],
        parseDate: react_day_picker_moment["parseDate"],
        dayPickerProps: {
          selectedDays: [fromDate, {
            from: fromDate,
            to: toDate
          }],
          disabledDays: {
            after: toDate
          },
          modifiers: {
            start: fromDate,
            end: toDate
          },
          toMonth: toDate
        },
        onDayChange: onFromDateChange,
        inputProps: {
          disabled: fromDateDisabled
        }
      };

      /**
       * If shiftFocus is true, selection of date on fromDayPickerInput
       * automatically focuses on toDayPickerInput
       */
      if (shiftFocus) {
        props.dayPickerProps.onDayClick = () => this.toDayPickerInput.current.focus();
      }
      return props;
    });
    defineProperty_default()(this, "getToDayPickerInputProps", () => {
      const {
        fromDate,
        onToDateChange,
        shiftFocus,
        toDate,
        toDateInput,
        toDateDisabled,
        toDateFormat
      } = this.props;
      const props = {
        value: toDateInput,
        format: toDateFormat,
        formatDate: react_day_picker_moment["formatDate"],
        parseDate: react_day_picker_moment["parseDate"],
        dayPickerProps: {
          selectedDays: [fromDate, {
            from: fromDate,
            to: toDate
          }],
          disabledDays: {
            before: fromDate
          },
          modifiers: {
            start: fromDate,
            end: toDate
          },
          month: fromDate,
          fromMonth: fromDate
        },
        onDayChange: onToDateChange,
        inputProps: {
          disabled: toDateDisabled
        }
      };

      /**
       * If shiftFocus is true, selection of date on fromDayPickerInput
       * automatically focuses on toDayPickerInput
       */
      if (shiftFocus) {
        props.ref = this.toDayPickerInput;
      }
      return props;
    });
    defineProperty_default()(this, "getFromTimePickerProps", () => {
      const {
        fromTime,
        fromTimeDisabled,
        onFromTimePickerBlur,
        onFromTimePickerChange,
        onFromTimePickerClick,
        onFromTimePickerFocus
      } = this.props;
      const props = {
        current: fromTime,
        start: external_tribe_common_utils_["time"].START_OF_DAY,
        end: external_tribe_common_utils_["time"].END_OF_DAY,
        onBlur: onFromTimePickerBlur,
        onChange: onFromTimePickerChange,
        onClick: onFromTimePickerClick,
        onFocus: onFromTimePickerFocus,
        timeFormat: external_tribe_common_utils_["date"].FORMATS.WP.time,
        disabled: fromTimeDisabled
      };
      return props;
    });
    defineProperty_default()(this, "getToTimePickerProps", () => {
      const {
        onToTimePickerBlur,
        onToTimePickerChange,
        onToTimePickerClick,
        onToTimePickerFocus,
        toTime,
        toTimeDisabled
      } = this.props;
      const props = {
        current: toTime,
        start: external_tribe_common_utils_["time"].START_OF_DAY,
        end: external_tribe_common_utils_["time"].END_OF_DAY,
        onBlur: onToTimePickerBlur,
        onChange: onToTimePickerChange,
        onClick: onToTimePickerClick,
        onFocus: onToTimePickerFocus,
        timeFormat: external_tribe_common_utils_["date"].FORMATS.WP.time,
        disabled: toTimeDisabled
      };
      return props;
    });
    this.toDayPickerInput = /*#__PURE__*/Object(external_React_["createRef"])();
  }
  render() {
    const {
      className,
      separatorDateTime,
      separatorTimeRange
    } = this.props;
    return wp.element.createElement("div", {
      className: external_tribe_modules_classnames_default()('tribe-editor__date-time-range-picker', className)
    }, wp.element.createElement("div", {
      className: "tribe-editor__date-time-range-picker__start"
    }, wp.element.createElement(external_tribe_common_elements_["DayPickerInput"], this.getFromDayPickerInputProps()), wp.element.createElement("span", {
      className: external_tribe_modules_classnames_default()('tribe-editor__date-time-range-picker__separator', 'tribe-editor__date-time-range-picker__separator--date-time')
    }, separatorDateTime), wp.element.createElement(external_tribe_common_elements_["TimePicker"], this.getFromTimePickerProps())), wp.element.createElement("div", {
      className: "tribe-editor__date-time-range-picker__end"
    }, wp.element.createElement("span", {
      className: external_tribe_modules_classnames_default()('tribe-editor__date-time-range-picker__separator', 'tribe-editor__date-time-range-picker__separator--time-range')
    }, separatorTimeRange), wp.element.createElement(external_tribe_common_elements_["DayPickerInput"], this.getToDayPickerInputProps()), wp.element.createElement("span", {
      className: external_tribe_modules_classnames_default()('tribe-editor__date-time-range-picker__separator', 'tribe-editor__date-time-range-picker__separator--date-time')
    }, separatorDateTime), wp.element.createElement(external_tribe_common_elements_["TimePicker"], this.getToTimePickerProps())));
  }
}
defineProperty_default()(element_DateTimeRangePicker, "defaultProps", {
  fromDateFormat: 'LL',
  onFromDateChange: external_lodash_noop_default.a,
  onToDateChange: external_lodash_noop_default.a,
  separatorDateTime: 'at',
  separatorTimeRange: 'to',
  toDateFormat: 'LL'
});
defineProperty_default()(element_DateTimeRangePicker, "propTypes", {
  className: external_tribe_modules_propTypes_default.a.string,
  fromDate: external_tribe_modules_propTypes_default.a.instanceOf(Date),
  fromDateInput: external_tribe_modules_propTypes_default.a.string,
  fromDateDisabled: external_tribe_modules_propTypes_default.a.bool,
  fromDateFormat: external_tribe_modules_propTypes_default.a.string,
  fromTime: external_tribe_modules_propTypes_default.a.string,
  fromTimeDisabled: external_tribe_modules_propTypes_default.a.bool,
  onFromDateChange: external_tribe_modules_propTypes_default.a.func,
  onFromTimePickerBlur: external_tribe_modules_propTypes_default.a.func,
  onFromTimePickerChange: external_tribe_modules_propTypes_default.a.func,
  onFromTimePickerClick: external_tribe_modules_propTypes_default.a.func,
  onFromTimePickerFocus: external_tribe_modules_propTypes_default.a.func,
  onToDateChange: external_tribe_modules_propTypes_default.a.func,
  onToTimePickerBlur: external_tribe_modules_propTypes_default.a.func,
  onToTimePickerChange: external_tribe_modules_propTypes_default.a.func,
  onToTimePickerClick: external_tribe_modules_propTypes_default.a.func,
  onToTimePickerFocus: external_tribe_modules_propTypes_default.a.func,
  separatorDateTime: external_tribe_modules_propTypes_default.a.string,
  separatorTimeRange: external_tribe_modules_propTypes_default.a.string,
  shiftFocus: external_tribe_modules_propTypes_default.a.bool,
  toDate: external_tribe_modules_propTypes_default.a.instanceOf(Date),
  toDateInput: external_tribe_modules_propTypes_default.a.string,
  toDateDisabled: external_tribe_modules_propTypes_default.a.bool,
  toDateFormat: external_tribe_modules_propTypes_default.a.string,
  toTime: external_tribe_modules_propTypes_default.a.string,
  toTimeDisabled: external_tribe_modules_propTypes_default.a.bool
});
/* harmony default export */ var date_time_range_picker_element = (element_DateTimeRangePicker);
// CONCATENATED MODULE: ./src/modules/elements/date-time-range-picker/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var date_time_range_picker = (date_time_range_picker_element);
// CONCATENATED MODULE: ./src/modules/elements/icon-with-tooltip/element.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */

const IconWithTooltip = _ref => {
  let {
    description,
    icon,
    position,
    propertyName
  } = _ref;
  const text = wp.element.createElement("div", null, propertyName, description && ': ', description && wp.element.createElement("em", null, description));
  return wp.element.createElement(external_wp_components_["Tooltip"], {
    text: text,
    position: position
  }, wp.element.createElement("span", null, icon));
};
IconWithTooltip.defaultProps = {
  description: '',
  position: 'top right'
};
IconWithTooltip.propTypes = {
  description: external_tribe_modules_propTypes_default.a.string,
  icon: external_tribe_modules_propTypes_default.a.node,
  position: external_tribe_modules_propTypes_default.a.oneOf(['top left', 'top center', 'top right', 'bottom left', 'bottom center', 'bottom right']),
  propertyName: external_tribe_modules_propTypes_default.a.string
};
/* harmony default export */ var icon_with_tooltip_element = (IconWithTooltip);
// CONCATENATED MODULE: ./src/modules/elements/icon-with-tooltip/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var icon_with_tooltip = (icon_with_tooltip_element);
// EXTERNAL MODULE: ./src/modules/elements/label-with-tooltip/style.pcss
var label_with_tooltip_style = __webpack_require__("s3Q2");

// CONCATENATED MODULE: ./src/modules/elements/label-with-tooltip/element.js
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */




/* eslint-disable max-len */
const LabelWithTooltip = _ref => {
  let {
    className,
    forId,
    isLabel,
    label,
    tooltipDisabled,
    tooltipLabel,
    tooltipPosition,
    tooltipText
  } = _ref;
  return wp.element.createElement(external_tribe_common_elements_["LabeledItem"], {
    className: external_tribe_modules_classnames_default()('tribe-editor__label-with-tooltip', className),
    forId: forId,
    isLabel: isLabel,
    label: label
  }, wp.element.createElement(external_wp_components_["Tooltip"], {
    text: tooltipText,
    position: tooltipPosition
  }, wp.element.createElement("button", {
    "aria-label": tooltipText,
    className: external_tribe_modules_classnames_default()('tribe-editor__tooltip-label', 'tribe-editor__label-with-tooltip__tooltip-label'),
    disabled: tooltipDisabled
  }, tooltipLabel)));
};
/* eslint-enable max-len */

LabelWithTooltip.defaultProps = {
  label: '',
  tooltipPosition: 'top right'
};
LabelWithTooltip.propTypes = {
  className: external_tribe_modules_propTypes_default.a.string,
  forId: external_tribe_modules_propTypes_default.a.string,
  isLabel: external_tribe_modules_propTypes_default.a.bool,
  label: external_tribe_modules_propTypes_default.a.node,
  tooltipDisabled: external_tribe_modules_propTypes_default.a.bool,
  tooltipLabel: external_tribe_modules_propTypes_default.a.node,
  tooltipPosition: external_tribe_modules_propTypes_default.a.oneOf(['top left', 'top center', 'top right', 'bottom left', 'bottom center', 'bottom right']),
  tooltipText: external_tribe_modules_propTypes_default.a.string
};
/* harmony default export */ var label_with_tooltip_element = (LabelWithTooltip);
// CONCATENATED MODULE: ./src/modules/elements/label-with-tooltip/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var label_with_tooltip = (label_with_tooltip_element);
// CONCATENATED MODULE: ./src/modules/elements/numeric-label/element.js
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */

/**
 * Generate a label with singular, plural values based on the count provided, the function
 * returns a fallback value (`undefined`) by default when the value is either 0 or lower.
 *
 * Labels need to have a %d on it where the number will be replaced
 *
 * @param {Object} props The props passed to this component
 * @param {string | Array | Object} props.className The class of the element
 * @param {number} props.count The amount to be compared
 * @param {boolean} props.includeZero If true, zero is included in count
 * @param {string} props.singular The label for the singular case
 * @param {string} props.plural The label for the plural case
 * @param {*} props.fallback The value to be returned if count is zero or negative
 * @param {boolean} props.useFallback If true, fallback is used.
 * @returns {*} return fallback if count is zero or negative otherwise singular or plural
 */
const NumericLabel = _ref => {
  let {
    className,
    count,
    includeZero,
    singular,
    plural,
    fallback,
    useFallback
  } = _ref;
  if (useFallback && (includeZero && !(count >= 0) || !includeZero && !(count > 0))) {
    return fallback;
  }
  const targetStr = count === 1 ? singular : plural;
  const [before, after] = targetStr.split('%d');
  return wp.element.createElement("span", {
    className: external_tribe_modules_classnames_default()('tribe-editor__numeric-label', className)
  }, before && wp.element.createElement("span", {
    className: "tribe-editor__numeric-label--before"
  }, before), wp.element.createElement("span", {
    className: "tribe-editor__numeric-label--count"
  }, count), after && wp.element.createElement("span", {
    className: "tribe-editor__numeric-label--after"
  }, after));
};
NumericLabel.propTypes = {
  className: external_tribe_modules_propTypes_default.a.oneOfType([external_tribe_modules_propTypes_default.a.string, external_tribe_modules_propTypes_default.a.arrayOf(external_tribe_modules_propTypes_default.a.string), external_tribe_modules_propTypes_default.a.object]),
  count: external_tribe_modules_propTypes_default.a.number.isRequired,
  includeZero: external_tribe_modules_propTypes_default.a.bool,
  singular: external_tribe_modules_propTypes_default.a.string,
  plural: external_tribe_modules_propTypes_default.a.string,
  useFallback: external_tribe_modules_propTypes_default.a.any,
  fallback: external_tribe_modules_propTypes_default.a.any
};
NumericLabel.defaultProps = {
  count: 0,
  includeZero: false,
  singular: '',
  plural: '',
  className: '',
  fallback: null,
  useFallback: true
};
/* harmony default export */ var numeric_label_element = (NumericLabel);
// CONCATENATED MODULE: ./src/modules/elements/numeric-label/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var numeric_label = (numeric_label_element);
// EXTERNAL MODULE: ./src/modules/elements/inactive-block/style.pcss
var inactive_block_style = __webpack_require__("trUg");

// CONCATENATED MODULE: ./src/modules/elements/inactive-block/element.js
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */

const element_LAYOUT = {
  rsvp: 'rsvp',
  ticket: 'ticket'
};
const InactiveBlock = _ref => {
  let {
    className,
    description,
    icon,
    layout,
    title
  } = _ref;
  return wp.element.createElement("section", {
    className: external_tribe_modules_classnames_default()('tribe-editor__inactive-block', `tribe-editor__inactive-block--${layout}`, className)
  }, wp.element.createElement("div", {
    className: "tribe-editor__inactive-block__icon"
  }, icon), (title || description) && wp.element.createElement("div", {
    className: "tribe-editor__inactive-block__content"
  }, title && wp.element.createElement("h2", {
    className: "tribe-editor__inactive-block__title"
  }, title), description && wp.element.createElement("p", {
    className: "tribe-editor__inactive-block__description"
  }, description)));
};
InactiveBlock.propTypes = {
  className: external_tribe_modules_propTypes_default.a.string,
  description: external_tribe_modules_propTypes_default.a.string,
  icon: external_tribe_modules_propTypes_default.a.node,
  layout: external_tribe_modules_propTypes_default.a.oneOf(Object.keys(element_LAYOUT)).isRequired,
  title: external_tribe_modules_propTypes_default.a.string
};
/* harmony default export */ var inactive_block_element = (InactiveBlock);
// CONCATENATED MODULE: ./src/modules/elements/inactive-block/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var inactive_block = (inactive_block_element);

// EXTERNAL MODULE: ./src/modules/elements/settings-dashboard/style.pcss
var settings_dashboard_style = __webpack_require__("oe2g");

// CONCATENATED MODULE: ./src/modules/elements/settings-dashboard/element.js

/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




const SettingsDashboard = _ref => {
  let {
    className,
    closeButtonDisabled,
    closeButtonLabel,
    content,
    headerLeft,
    onCloseClick
  } = _ref;
  return wp.element.createElement(card, {
    className: external_tribe_modules_classnames_default()('tribe-editor__settings-dashboard', className)
  }, wp.element.createElement("header", {
    className: "tribe-editor__settings-dashboard__header"
  }, wp.element.createElement("span", {
    className: "tribe-editor__settings-dashboard__header-left"
  }, headerLeft), wp.element.createElement(external_tribe_common_elements_["Button"], {
    className: "tribe-editor__settings-dashboard__close-button",
    onClick: onCloseClick,
    disabled: closeButtonDisabled
  }, closeButtonLabel)), wp.element.createElement("div", {
    className: "tribe-editor__settings-dashboard__content"
  }, content));
};
SettingsDashboard.defaultProps = {
  closeButtonLabel: wp.element.createElement(external_React_["Fragment"], null, wp.element.createElement(icons_close, null), wp.element.createElement("span", {
    className: "tribe-editor__settings-dashboard__close-button-text"
  }, Object(external_wp_i18n_["__"])('close', 'event-tickets'))),
  headerLeft: wp.element.createElement(external_React_["Fragment"], null, wp.element.createElement(icons_settings, null), wp.element.createElement("span", {
    className: "tribe-editor__settings-dashboard__header-left-text"
  }, Object(external_wp_i18n_["__"])('Ticket Settings', 'event-tickets'))),
  onCloseClick: external_lodash_noop_default.a
};
SettingsDashboard.propTypes = {
  className: external_tribe_modules_propTypes_default.a.string,
  closeButtonDisabled: external_tribe_modules_propTypes_default.a.bool,
  closeButtonLabel: external_tribe_modules_propTypes_default.a.node,
  headerLeft: external_tribe_modules_propTypes_default.a.node,
  onCloseClick: external_tribe_modules_propTypes_default.a.func,
  content: external_tribe_modules_propTypes_default.a.node
};
/* harmony default export */ var settings_dashboard_element = (SettingsDashboard);
// CONCATENATED MODULE: ./src/modules/elements/settings-dashboard/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var settings_dashboard = (settings_dashboard_element);
// EXTERNAL MODULE: ./src/modules/elements/warning-button/style.pcss
var warning_button_style = __webpack_require__("1HDl");

// CONCATENATED MODULE: ./src/modules/elements/warning-button/element.js


const warning_button_element_excluded = ["children", "className", "icon"];
/**
 * External dependencies
 */




/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


const WarningButton = _ref => {
  let {
      children,
      className,
      icon
    } = _ref,
    props = objectWithoutProperties_default()(_ref, warning_button_element_excluded);
  return wp.element.createElement(external_tribe_common_elements_["Button"], extends_default()({
    className: external_tribe_modules_classnames_default()('tribe-editor__warning-button', className)
  }, props), wp.element.createElement(external_wp_components_["Dashicon"], {
    className: "tribe-editor__warning-button-icon",
    icon: icon
  }), wp.element.createElement("span", {
    className: "tribe-editor__warning-button-text"
  }, children));
};
WarningButton.propTypes = {
  children: external_tribe_modules_propTypes_default.a.node,
  className: external_tribe_modules_propTypes_default.a.string,
  icon: external_tribe_modules_propTypes_default.a.string.isRequired
};
/* harmony default export */ var warning_button_element = (WarningButton);
// CONCATENATED MODULE: ./src/modules/elements/warning-button/index.js
/**
 * Internal dependencies
 */

/* harmony default export */ var warning_button = (warning_button_element);
// CONCATENATED MODULE: ./src/modules/elements/index.js













// EXTERNAL MODULE: ./src/modules/blocks/rsvp/counters/style.pcss
var counters_style = __webpack_require__("apLV");

// CONCATENATED MODULE: ./src/modules/blocks/rsvp/counters/template.js
/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


const RSVPCounters = _ref => {
  let {
    goingCount,
    notGoingCount,
    showNotGoing
  } = _ref;
  return wp.element.createElement("div", {
    className: "tribe-editor__rsvp-container-header__counters"
  }, wp.element.createElement(external_tribe_common_elements_["Counter"], {
    className: "tribe-editor__rsvp-container-header__going-counter",
    count: goingCount,
    label: Object(external_wp_i18n_["__"])('Going', 'event-tickets')
  }), showNotGoing && wp.element.createElement(external_tribe_common_elements_["Counter"], {
    className: "tribe-editor__rsvp-container-header__not-going-counter",
    count: notGoingCount,
    label: Object(external_wp_i18n_["__"])('Not going', 'event-tickets')
  }));
};
RSVPCounters.propTypes = {
  goingCount: external_tribe_modules_propTypes_default.a.number,
  notGoingCount: external_tribe_modules_propTypes_default.a.number,
  showNotGoing: external_tribe_modules_propTypes_default.a.bool
};
/* harmony default export */ var template = (RSVPCounters);
// EXTERNAL MODULE: external "tribe.common.hoc"
var external_tribe_common_hoc_ = __webpack_require__("Q9xL");

// CONCATENATED MODULE: ./src/modules/blocks/rsvp/counters/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



const mapStateToProps = state => ({
  goingCount: selectors_namespaceObject.getRSVPGoingCount(state),
  notGoingCount: selectors_namespaceObject.getRSVPNotGoingCount(state),
  showNotGoing: selectors_namespaceObject.getRSVPNotGoingResponses(state)
});
/* harmony default export */ var container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(mapStateToProps))(template));
// CONCATENATED MODULE: ./src/modules/blocks/rsvp/action-buttons/attendees-action-button/template.js
/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


const AttendeesActionButton = _ref => {
  let {
    href,
    isDisabled
  } = _ref;
  return wp.element.createElement(action_button, {
    asLink: true,
    className: "tribe-editor__rsvp__action-button tribe-editor__rsvp__action-button--attendees",
    disabled: isDisabled,
    id: "attendees-rsvp",
    href: href,
    icon: wp.element.createElement(icons_attendees, null),
    target: "_blank"
  }, Object(external_wp_i18n_["__"])('View Attendees', 'event-tickets'));
};
AttendeesActionButton.propTypes = {
  href: external_tribe_modules_propTypes_default.a.string,
  isDisabled: external_tribe_modules_propTypes_default.a.bool
};
/* harmony default export */ var attendees_action_button_template = (AttendeesActionButton);
// CONCATENATED MODULE: ./src/modules/blocks/rsvp/action-buttons/attendees-action-button/container.js
/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




const container_mapStateToProps = state => {
  const adminURL = external_tribe_common_utils_["globals"].adminUrl();
  const postType = Object(external_wp_data_["select"])('core/editor').getCurrentPostType();
  const postId = Object(external_wp_data_["select"])('core/editor').getCurrentPostId();
  return {
    href: `${adminURL}edit.php?post_type=${postType}&page=tickets-attendees&event_id=${postId}`,
    // eslint-disable-line max-len
    isDisabled: selectors_namespaceObject.getRSVPIsLoading(state)
  };
};
/* harmony default export */ var attendees_action_button_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(container_mapStateToProps))(attendees_action_button_template));
// CONCATENATED MODULE: ./src/modules/blocks/rsvp/action-buttons/settings-action-button/template.js

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


const SettingsActionButton = _ref => {
  let {
    isDisabled,
    onClick
  } = _ref;
  return wp.element.createElement(action_button, {
    className: "tribe-editor__rsvp__action-button tribe-editor__rsvp__action-button--settings",
    disabled: isDisabled,
    id: "settings-rsvp",
    icon: wp.element.createElement(icons_settings, null),
    onClick: onClick
  }, Object(external_wp_i18n_["__"])('Settings', 'event-tickets'));
};
SettingsActionButton.defaultProps = {
  onClick: external_lodash_noop_default.a
};
SettingsActionButton.propTypes = {
  isDisabled: external_tribe_modules_propTypes_default.a.bool,
  onClick: external_tribe_modules_propTypes_default.a.func
};
/* harmony default export */ var settings_action_button_template = (SettingsActionButton);
// CONCATENATED MODULE: ./src/modules/blocks/rsvp/action-buttons/settings-action-button/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



const settings_action_button_container_mapStateToProps = state => ({
  isDisabled: selectors_namespaceObject.getRSVPIsLoading(state)
});
const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(actions_namespaceObject.setRSVPSettingsOpen(true))
});
/* harmony default export */ var settings_action_button_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(settings_action_button_container_mapStateToProps, mapDispatchToProps))(settings_action_button_template));
// CONCATENATED MODULE: ./src/modules/blocks/rsvp/action-buttons/index.js


// EXTERNAL MODULE: ./src/modules/blocks/rsvp/container-header/style.pcss
var container_header_style = __webpack_require__("b+3r");

// CONCATENATED MODULE: ./src/modules/blocks/rsvp/container-header/template.js
/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




const getCapacityLabel = capacity => {
  // todo: should use _n to be translator friendly
  const singular = Object(external_wp_i18n_["__"])('%d Remaining', 'event-tickets');
  const plural = singular;
  const fallback = wp.element.createElement("span", {
    className: "tribe-editor__rsvp-container-header__capacity-label-fallback"
  }, Object(external_wp_i18n_["__"])('Unlimited', 'event-tickets'));
  return wp.element.createElement(numeric_label, {
    className: "tribe-editor__rsvp-container-header__capacity-label",
    count: capacity,
    includeZero: true,
    singular: singular,
    plural: plural,
    fallback: fallback
  });
};
const RSVPContainerHeader = _ref => {
  let {
    description,
    isAddEditOpen,
    isCreated,
    title,
    available,
    setAddEditOpen
  } = _ref;
  if (isAddEditOpen) {
    return null;
  }

  /* eslint-disable max-len */
  const leftColumn = wp.element.createElement(external_React_default.a.Fragment, null, wp.element.createElement("h3", {
    className: "tribe-editor__rsvp-title tribe-common-h2 tribe-common-h4--min-medium"
  }, title), wp.element.createElement("div", {
    className: "tribe-editor__rsvp-description tribe-common-h6 tribe-common-h--alt tribe-common-b3--min-medium"
  }, description, wp.element.createElement(container, null)), isCreated && getCapacityLabel(available));
  const rightColumn = wp.element.createElement(external_React_default.a.Fragment, null, wp.element.createElement("button", {
    id: "edit-rsvp",
    className: "tribe-common-c-btn tribe-common-b1 tribe-common-b2--min-medium",
    onClick: setAddEditOpen
  }, Object(external_wp_i18n_["__"])('Edit RSVP', 'event-tickets')), wp.element.createElement(settings_action_button_container, null), wp.element.createElement(attendees_action_button_container, null));
  return wp.element.createElement(external_React_default.a.Fragment, null, wp.element.createElement("div", {
    className: "tribe-common tribe-editor__inactive-block--rsvp tribe-editor__rsvp-container-header"
  }, wp.element.createElement(split_container, {
    leftColumn: leftColumn,
    rightColumn: rightColumn
  })));
  /* eslint-enable max-len */
};

RSVPContainerHeader.propTypes = {
  available: external_tribe_modules_propTypes_default.a.number,
  description: external_tribe_modules_propTypes_default.a.string,
  isAddEditOpen: external_tribe_modules_propTypes_default.a.bool,
  isCreated: external_tribe_modules_propTypes_default.a.bool,
  setAddEditOpen: external_tribe_modules_propTypes_default.a.func,
  title: external_tribe_modules_propTypes_default.a.string
};
/* harmony default export */ var container_header_template = (RSVPContainerHeader);
// CONCATENATED MODULE: ./src/modules/blocks/rsvp/container-header/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



const container_header_container_mapStateToProps = state => ({
  available: selectors_namespaceObject.getRSVPAvailable(state),
  description: selectors_namespaceObject.getRSVPDescription(state),
  isAddEditOpen: selectors_namespaceObject.getRSVPIsAddEditOpen(state),
  isCreated: selectors_namespaceObject.getRSVPCreated(state),
  title: selectors_namespaceObject.getRSVPTitle(state)
});
const container_mapDispatchToProps = dispatch => ({
  setAddEditOpen: () => dispatch(actions_namespaceObject.setRSVPIsAddEditOpen(true))
});
/* harmony default export */ var container_header_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(container_header_container_mapStateToProps, container_mapDispatchToProps))(container_header_template));
// EXTERNAL MODULE: ./node_modules/uniqid/index.js
var uniqid = __webpack_require__("zJgK");
var uniqid_default = /*#__PURE__*/__webpack_require__.n(uniqid);

// EXTERNAL MODULE: ./src/modules/blocks/rsvp/capacity/styles.pcss
var capacity_styles = __webpack_require__("LHhe");

// CONCATENATED MODULE: ./src/modules/blocks/rsvp/capacity/template.js
/**
 * External dependencies
 */





/**
 * Wordpress dependencies
 */


/**
 * Internal dependencies
 */


const RSVPCapacity = _ref => {
  let {
    isDisabled,
    onTempCapacityChange,
    tempCapacity
  } = _ref;
  const capacityId = uniqid_default()();
  return wp.element.createElement("div", {
    className: external_tribe_modules_classnames_default()('tribe-editor__ticket__capacity', 'tribe-editor__ticket__content-row', 'tribe-editor__ticket__content-row--capacity')
  }, wp.element.createElement(external_tribe_common_elements_["LabeledItem"], {
    className: "tribe-editor__ticket__capacity-label",
    forId: capacityId,
    isLabel: true,
    label: Object(external_wp_i18n_["__"])('RSVP Capacity', 'event-tickets')
  }), wp.element.createElement("div", {
    className: "tribe-editor__rsvp-container-content__capacity"
  }, wp.element.createElement(external_tribe_common_elements_["NumberInput"], {
    className: "tribe-editor__rsvp-container-content__capacity-input",
    disabled: isDisabled,
    id: capacityId,
    min: 0,
    onChange: onTempCapacityChange,
    value: tempCapacity
  }), wp.element.createElement("span", {
    className: "tribe-editor__rsvp-container-content__capacity-label-help"
  }, Object(external_wp_i18n_["__"])('Leave blank if unlimited', 'event-tickets'))));
};
RSVPCapacity.propTypes = {
  isDisabled: external_tribe_modules_propTypes_default.a.bool,
  onTempCapacityChange: external_tribe_modules_propTypes_default.a.func.isRequired,
  tempCapacity: external_tribe_modules_propTypes_default.a.string
};
/* harmony default export */ var capacity_template = (RSVPCapacity);
// CONCATENATED MODULE: ./src/modules/blocks/rsvp/capacity/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



const capacity_container_mapStateToProps = state => ({
  isDisabled: selectors_namespaceObject.getRSVPIsLoading(state) || selectors_namespaceObject.getRSVPSettingsOpen(state),
  tempCapacity: selectors_namespaceObject.getRSVPTempCapacity(state)
});
const capacity_container_mapDispatchToProps = dispatch => ({
  onTempCapacityChange: e => {
    dispatch(actions_namespaceObject.setRSVPTempCapacity(e.target.value));
    dispatch(actions_namespaceObject.setRSVPHasChanges(true));
  }
});
/* harmony default export */ var capacity_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(capacity_container_mapStateToProps, capacity_container_mapDispatchToProps))(capacity_template));
// EXTERNAL MODULE: ./src/modules/blocks/rsvp/description/styles.pcss
var description_styles = __webpack_require__("J/pT");

// CONCATENATED MODULE: ./src/modules/blocks/rsvp/description/template.js
/**
 * External dependencies
 */





/**
 * Wordpress dependencies
 */


/**
 * Internal dependencies
 */


const RSVPDescription = _ref => {
  let {
    isDisabled,
    onTempDescriptionChange,
    tempDescription
  } = _ref;
  const descriptionId = uniqid_default()();
  return wp.element.createElement("div", {
    className: external_tribe_modules_classnames_default()('tribe-editor__ticket__description', 'tribe-editor__ticket__content-row', 'tribe-editor__ticket__content-row--description')
  }, wp.element.createElement(external_tribe_common_elements_["LabeledItem"], {
    className: "tribe-editor__ticket__description-label",
    forId: descriptionId,
    isLabel: true,
    label: Object(external_wp_i18n_["__"])('Description', 'event-tickets')
  }), wp.element.createElement(external_tribe_common_elements_["Input"], {
    className: "tribe-editor__ticket__description-input",
    id: descriptionId,
    disabled: isDisabled,
    type: "text",
    value: tempDescription,
    onChange: onTempDescriptionChange
  }));
};
RSVPDescription.propTypes = {
  isDisabled: external_tribe_modules_propTypes_default.a.bool,
  onTempDescriptionChange: external_tribe_modules_propTypes_default.a.func.isRequired,
  tempDescription: external_tribe_modules_propTypes_default.a.string
};
/* harmony default export */ var description_template = (RSVPDescription);
// CONCATENATED MODULE: ./src/modules/blocks/rsvp/description/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



const description_container_mapStateToProps = state => ({
  isDisabled: selectors_namespaceObject.getRSVPIsLoading(state) || selectors_namespaceObject.getRSVPSettingsOpen(state),
  tempDescription: selectors_namespaceObject.getRSVPTempDescription(state)
});
const description_container_mapDispatchToProps = dispatch => ({
  onTempDescriptionChange: e => {
    dispatch(actions_namespaceObject.setRSVPTempDescription(e.target.value));
    dispatch(actions_namespaceObject.setRSVPHasChanges(true));
  }
});
/* harmony default export */ var description_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(description_container_mapStateToProps, description_container_mapDispatchToProps))(description_template));
// EXTERNAL MODULE: ./src/modules/blocks/rsvp/not-going/styles.pcss
var not_going_styles = __webpack_require__("45Xz");

// CONCATENATED MODULE: ./src/modules/blocks/rsvp/not-going/template.js
/**
 * External dependencies
 */





/**
 * Wordpress dependencies
 */


/**
 * Internal dependencies
 */


const RSVPNotGoingResponses = _ref => {
  let {
    isDisabled,
    onTempNotGoingResponsesChange,
    tempNotGoingResponses
  } = _ref;
  const notGoingId = uniqid_default()();
  return wp.element.createElement("div", {
    className: external_tribe_modules_classnames_default()('tribe-editor__ticket__not-going-responses', 'tribe-editor__ticket__content-row', 'tribe-editor__ticket__content-row--not-going-responses')
  }, wp.element.createElement(external_tribe_common_elements_["LabeledItem"], {
    className: "tribe-editor__ticket__not-going-responses-label",
    forId: notGoingId,
    isLabel: true,
    label: Object(external_wp_i18n_["__"])('Not going', 'event-tickets')
  }), wp.element.createElement("div", {
    className: "tribe-editor__rsvp-container-content__not-going-responses"
  }, wp.element.createElement(external_tribe_common_elements_["Checkbox"], {
    checked: tempNotGoingResponses,
    className: "tribe-editor__rsvp-container-content__not-going-responses",
    disabled: isDisabled,
    id: notGoingId,
    label: Object(external_wp_i18n_["__"])('Enable "Not Going" responses', 'event-tickets'),
    onChange: onTempNotGoingResponsesChange
  }), wp.element.createElement("span", {
    className: "tribe-editor__rsvp-container-content__not-going-responses-label-help"
  }, Object(external_wp_i18n_["__"])('Receive notification of people who will not attend.', 'event-tickets'))));
};
RSVPNotGoingResponses.propTypes = {
  isDisabled: external_tribe_modules_propTypes_default.a.bool,
  onTempNotGoingResponsesChange: external_tribe_modules_propTypes_default.a.func.isRequired,
  tempNotGoingResponses: external_tribe_modules_propTypes_default.a.string
};
/* harmony default export */ var not_going_template = (RSVPNotGoingResponses);
// CONCATENATED MODULE: ./src/modules/blocks/rsvp/not-going/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



const not_going_container_mapStateToProps = state => ({
  tempNotGoingResponses: selectors_namespaceObject.getRSVPTempNotGoingResponses(state)
});
const not_going_container_mapDispatchToProps = dispatch => ({
  onTempNotGoingResponsesChange: e => {
    dispatch(actions_namespaceObject.setRSVPTempNotGoingResponses(e.target.checked));
    dispatch(actions_namespaceObject.setRSVPHasChanges(true));
  }
});
/* harmony default export */ var not_going_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(not_going_container_mapStateToProps, not_going_container_mapDispatchToProps))(not_going_template));
// EXTERNAL MODULE: ./src/modules/blocks/rsvp/title/styles.pcss
var title_styles = __webpack_require__("OKIc");

// CONCATENATED MODULE: ./src/modules/blocks/rsvp/title/template.js
/**
 * External dependencies
 */





/**
 * Wordpress dependencies
 */


/**
 * Internal dependencies
 */


const RSVPTitle = _ref => {
  let {
    isDisabled,
    onTempTitleChange,
    tempTitle
  } = _ref;
  const titleId = uniqid_default()();
  const inputRef = Object(external_React_["useRef"])(null);
  Object(external_React_["useEffect"])(() => {
    var _inputRef$current;
    inputRef === null || inputRef === void 0 ? void 0 : (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
  }, [inputRef]);
  return wp.element.createElement("div", {
    className: external_tribe_modules_classnames_default()('tribe-editor__ticket__title', 'tribe-editor__ticket__content-row', 'tribe-editor__ticket__content-row--title')
  }, wp.element.createElement(external_tribe_common_elements_["LabeledItem"], {
    className: "tribe-editor__ticket__title-label",
    forId: titleId,
    isLabel: true,
    label: Object(external_wp_i18n_["__"])('RSVP name', 'event-tickets')
  }), wp.element.createElement("input", {
    className: "tribe-editor__input tribe-editor__ticket__title-input",
    id: titleId,
    disabled: isDisabled,
    type: "text",
    value: tempTitle,
    onChange: onTempTitleChange,
    ref: inputRef
  }));
};
RSVPTitle.propTypes = {
  isDisabled: external_tribe_modules_propTypes_default.a.bool,
  onTempTitleChange: external_tribe_modules_propTypes_default.a.func.isRequired,
  tempTitle: external_tribe_modules_propTypes_default.a.string
};
/* harmony default export */ var title_template = (RSVPTitle);
// CONCATENATED MODULE: ./src/modules/blocks/rsvp/title/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



const title_container_mapStateToProps = state => ({
  isDisabled: selectors_namespaceObject.getRSVPIsLoading(state) || selectors_namespaceObject.getRSVPSettingsOpen(state),
  tempTitle: selectors_namespaceObject.getRSVPTempTitle(state),
  title: selectors_namespaceObject.getRSVPTitle(state)
});
const title_container_mapDispatchToProps = dispatch => ({
  onTempTitleChange: e => {
    dispatch(actions_namespaceObject.setRSVPTempTitle(e.target.value));
    dispatch(actions_namespaceObject.setRSVPHasChanges(true));
  }
});
/* harmony default export */ var title_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(title_container_mapStateToProps, title_container_mapDispatchToProps))(title_template));
// EXTERNAL MODULE: ./src/modules/blocks/rsvp/duration-label/style.pcss
var duration_label_style = __webpack_require__("vLzK");

// CONCATENATED MODULE: ./src/modules/blocks/rsvp/duration-label/template.js
/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


const template_tooltipLabel = wp.element.createElement(external_wp_components_["Dashicon"], {
  className: "tribe-editor__rsvp-duration__duration-tooltip-label",
  icon: "info-outline"
});
const RSVPDurationLabel = _ref => {
  let {
    tooltipDisabled
  } = _ref;
  return wp.element.createElement(label_with_tooltip, {
    className: "tribe-editor__rsvp-duration__duration-label",
    label: Object(external_wp_i18n_["__"])('RSVP Duration', 'event-tickets'),
    tooltipDisabled: tooltipDisabled,
    tooltipLabel: template_tooltipLabel
    // @TODO: get tooltip text based on post type
    ,
    tooltipText: Object(external_wp_i18n_["__"])('By default, sales will begin as soon as you save the ticket and end when the event begins', 'event-tickets')
  });
};
RSVPDurationLabel.propTypes = {
  tooltipDisabled: external_tribe_modules_propTypes_default.a.bool
};
/* harmony default export */ var duration_label_template = (RSVPDurationLabel);
// CONCATENATED MODULE: ./src/modules/blocks/rsvp/duration-label/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



const getIsDisabled = state => selectors_namespaceObject.getRSVPIsLoading(state) || selectors_namespaceObject.getRSVPSettingsOpen(state);
const duration_label_container_mapStateToProps = state => ({
  isDisabled: getIsDisabled(state)
});
/* harmony default export */ var duration_label_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(duration_label_container_mapStateToProps))(duration_label_template));
// EXTERNAL MODULE: ./src/modules/blocks/rsvp/duration-picker/style.pcss
var duration_picker_style = __webpack_require__("IwAG");

// CONCATENATED MODULE: ./src/modules/blocks/rsvp/duration-picker/template.js

/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


const RSVPDurationPicker = props => wp.element.createElement(date_time_range_picker, extends_default()({
  className: "tribe-editor__rsvp-duration__duration-picker"
}, props));
RSVPDurationPicker.propTypes = {
  fromDate: external_tribe_modules_propTypes_default.a.instanceOf(Date),
  fromDateInput: external_tribe_modules_propTypes_default.a.string,
  fromDateDisabled: external_tribe_modules_propTypes_default.a.bool,
  fromTime: external_tribe_modules_propTypes_default.a.string,
  fromTimeDisabled: external_tribe_modules_propTypes_default.a.bool,
  onFromDateChange: external_tribe_modules_propTypes_default.a.func,
  onFromTimePickerBlur: external_tribe_modules_propTypes_default.a.func,
  onFromTimePickerChange: external_tribe_modules_propTypes_default.a.func,
  onFromTimePickerClick: external_tribe_modules_propTypes_default.a.func,
  onToDateChange: external_tribe_modules_propTypes_default.a.func,
  onToTimePickerBlur: external_tribe_modules_propTypes_default.a.func,
  onToTimePickerChange: external_tribe_modules_propTypes_default.a.func,
  onToTimePickerClick: external_tribe_modules_propTypes_default.a.func,
  toDate: external_tribe_modules_propTypes_default.a.instanceOf(Date),
  toDateInput: external_tribe_modules_propTypes_default.a.string,
  toDateDisabled: external_tribe_modules_propTypes_default.a.bool,
  toTime: external_tribe_modules_propTypes_default.a.string,
  toTimeDisabled: external_tribe_modules_propTypes_default.a.bool
};
/* harmony default export */ var duration_picker_template = (RSVPDurationPicker);
// CONCATENATED MODULE: ./src/modules/blocks/rsvp/duration-picker/container.js


const container_excluded = ["state"],
  _excluded2 = ["dispatch"];
function container_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function container_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? container_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : container_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */




const container_onFromDateChange = dispatch => (date, modifiers, dayPickerInput) => {
  const payload = {
    date,
    dayPickerInput
  };
  dispatch(actions_namespaceObject.handleRSVPStartDate(payload));
};
const container_onFromTimePickerChange = dispatch => e => dispatch(actions_namespaceObject.setRSVPTempStartTimeInput(e.target.value));
const container_onFromTimePickerClick = dispatch => (value, onClose) => {
  dispatch(actions_namespaceObject.handleRSVPStartTime(value));
  onClose();
};
const container_onToDateChange = dispatch => (date, modifiers, dayPickerInput) => {
  const payload = {
    date,
    dayPickerInput
  };
  dispatch(actions_namespaceObject.handleRSVPEndDate(payload));
};
const container_onToTimePickerChange = dispatch => e => dispatch(actions_namespaceObject.setRSVPTempEndTimeInput(e.target.value));
const container_onToTimePickerClick = dispatch => (value, onClose) => {
  dispatch(actions_namespaceObject.handleRSVPEndTime(value));
  onClose();
};
const container_onFromTimePickerBlur = (state, dispatch) => e => {
  let startTimeMoment = external_tribe_common_utils_["moment"].toMoment(e.target.value, external_tribe_common_utils_["moment"].TIME_FORMAT, false);
  if (!startTimeMoment.isValid()) {
    const startTimeInput = selectors_namespaceObject.getRSVPStartTimeInput(state);
    startTimeMoment = external_tribe_common_utils_["moment"].toMoment(startTimeInput, external_tribe_common_utils_["moment"].TIME_FORMAT, false);
  }
  const seconds = external_tribe_common_utils_["moment"].totalSeconds(startTimeMoment);
  dispatch(actions_namespaceObject.handleRSVPStartTime(seconds));
};
const container_onToTimePickerBlur = (state, dispatch) => e => {
  let endTimeMoment = external_tribe_common_utils_["moment"].toMoment(e.target.value, external_tribe_common_utils_["moment"].TIME_FORMAT, false);
  if (!endTimeMoment.isValid()) {
    const endTimeInput = selectors_namespaceObject.getRSVPEndTimeInput(state);
    endTimeMoment = external_tribe_common_utils_["moment"].toMoment(endTimeInput, external_tribe_common_utils_["moment"].TIME_FORMAT, false);
  }
  const seconds = external_tribe_common_utils_["moment"].totalSeconds(endTimeMoment);
  dispatch(actions_namespaceObject.handleRSVPEndTime(seconds));
};
const duration_picker_container_mapStateToProps = state => {
  const datePickerFormat = external_tribe_common_utils_["globals"].tecDateSettings().datepickerFormat ? external_tribe_common_utils_["moment"].toFormat(external_tribe_common_utils_["globals"].tecDateSettings().datepickerFormat) : 'LL';
  const isDisabled = selectors_namespaceObject.getRSVPIsLoading(state) || selectors_namespaceObject.getRSVPSettingsOpen(state);
  const startDateMoment = selectors_namespaceObject.getRSVPTempStartDateMoment(state);
  const endDateMoment = selectors_namespaceObject.getRSVPTempEndDateMoment(state);
  const fromDate = startDateMoment && startDateMoment.toDate();
  const toDate = endDateMoment && endDateMoment.toDate();
  return {
    fromDate,
    fromDateInput: selectors_namespaceObject.getRSVPTempStartDateInput(state),
    fromDateDisabled: isDisabled,
    fromDateFormat: datePickerFormat,
    fromTime: selectors_namespaceObject.getRSVPTempStartTimeInput(state),
    fromTimeDisabled: isDisabled,
    toDate,
    toDateInput: selectors_namespaceObject.getRSVPTempEndDateInput(state),
    toDateDisabled: isDisabled,
    toDateFormat: datePickerFormat,
    toTime: selectors_namespaceObject.getRSVPTempEndTimeInput(state),
    toTimeDisabled: isDisabled,
    state
  };
};
const duration_picker_container_mapDispatchToProps = dispatch => ({
  onFromDateChange: container_onFromDateChange(dispatch),
  onFromTimePickerChange: container_onFromTimePickerChange(dispatch),
  onFromTimePickerClick: container_onFromTimePickerClick(dispatch),
  onToDateChange: container_onToDateChange(dispatch),
  onToTimePickerChange: container_onToTimePickerChange(dispatch),
  onToTimePickerClick: container_onToTimePickerClick(dispatch),
  dispatch
});
const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const {
      state
    } = stateProps,
    restStateProps = objectWithoutProperties_default()(stateProps, container_excluded);
  const {
      dispatch
    } = dispatchProps,
    restDispatchProps = objectWithoutProperties_default()(dispatchProps, _excluded2);
  return container_objectSpread(container_objectSpread(container_objectSpread(container_objectSpread({}, ownProps), restStateProps), restDispatchProps), {}, {
    onFromTimePickerBlur: container_onFromTimePickerBlur(state, dispatch),
    onToTimePickerBlur: container_onToTimePickerBlur(state, dispatch)
  });
};
/* harmony default export */ var duration_picker_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(duration_picker_container_mapStateToProps, duration_picker_container_mapDispatchToProps, mergeProps))(duration_picker_template));
// EXTERNAL MODULE: ./src/modules/blocks/rsvp/duration/style.pcss
var duration_style = __webpack_require__("6lOv");

// CONCATENATED MODULE: ./src/modules/blocks/rsvp/duration/template.js
/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



const RSVPDuration = _ref => {
  let {
    hasDurationError
  } = _ref;
  return wp.element.createElement("div", {
    className: "tribe-editor__rsvp-duration"
  }, wp.element.createElement(duration_label_container, null), wp.element.createElement(duration_picker_container, null), hasDurationError && wp.element.createElement("span", {
    className: "tribe-editor__rsvp-duration__error"
  }, Object(external_wp_i18n_["__"])('There is an error with the selected sales duration. Please fix the issue before saving.',
  // eslint-disable-line max-len
  'event-tickets')));
};
RSVPDuration.propTypes = {
  hasDurationError: external_tribe_modules_propTypes_default.a.bool
};
/* harmony default export */ var duration_template = (RSVPDuration);
// CONCATENATED MODULE: ./src/modules/blocks/rsvp/duration/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



const duration_container_mapStateToProps = state => ({
  hasDurationError: selectors_namespaceObject.getRSVPHasDurationError(state)
});
/* harmony default export */ var duration_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(duration_container_mapStateToProps))(duration_template));
// EXTERNAL MODULE: ./src/modules/blocks/rsvp/attendee-registration/style.pcss
var attendee_registration_style = __webpack_require__("Zz++");

// CONCATENATED MODULE: ./src/modules/blocks/rsvp/attendee-registration/template.js
/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


const linkTextAdd = Object(external_wp_i18n_["__"])('+ Add', 'event-tickets');
const linkTextEdit = Object(external_wp_i18n_["__"])('Edit', 'event-tickets');
const RSVPAttendeeRegistration = _ref => {
  let {
    attendeeRegistrationURL,
    hasAttendeeInfoFields,
    isCreated,
    isDisabled,
    isModalOpen,
    onClick,
    onClose,
    onIframeLoad
  } = _ref;
  const linkText = hasAttendeeInfoFields ? linkTextEdit : linkTextAdd;
  return wp.element.createElement(attendees_registration, {
    helperText: Object(external_wp_i18n_["__"])('Save your RSVP to enable attendee information fields', 'event-tickets'),
    iframeURL: attendeeRegistrationURL,
    isDisabled: isDisabled,
    isModalOpen: isModalOpen,
    label: Object(external_wp_i18n_["__"])('Attendee Information', 'event-tickets'),
    linkText: linkText,
    modalTitle: Object(external_wp_i18n_["__"])('Attendee Information', 'event-tickets'),
    onClick: onClick,
    onClose: onClose,
    onIframeLoad: onIframeLoad,
    showHelperText: !isCreated
    // @todo: @paulmskim shouldCloseOnClickOutside is a fix until we can figure out modal closing issue in WP 5.5.
    ,
    shouldCloseOnClickOutside: false
  });
};
RSVPAttendeeRegistration.propTypes = {
  attendeeRegistrationURL: external_tribe_modules_propTypes_default.a.string.isRequired,
  hasAttendeeInfoFields: external_tribe_modules_propTypes_default.a.bool.isRequired,
  isCreated: external_tribe_modules_propTypes_default.a.bool.isRequired,
  isDisabled: external_tribe_modules_propTypes_default.a.bool.isRequired,
  isModalOpen: external_tribe_modules_propTypes_default.a.bool.isRequired,
  onClick: external_tribe_modules_propTypes_default.a.func.isRequired,
  onClose: external_tribe_modules_propTypes_default.a.func.isRequired,
  onIframeLoad: external_tribe_modules_propTypes_default.a.func.isRequired
};
/* harmony default export */ var attendee_registration_template = (RSVPAttendeeRegistration);
// CONCATENATED MODULE: ./src/modules/blocks/rsvp/attendee-registration/container.js
/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




const getAttendeeRegistrationUrl = state => {
  const adminURL = external_tribe_common_utils_["globals"].adminUrl();
  const postType = Object(external_wp_data_["select"])('core/editor').getCurrentPostType();
  const rsvpId = selectors_namespaceObject.getRSVPId(state);
  return `${adminURL}edit.php?post_type=${postType}&page=attendee-registration&ticket_id=${rsvpId}&tribe_events_modal=1`; // eslint-disable-line max-len
};

const container_getIsDisabled = state => selectors_namespaceObject.getRSVPIsLoading(state) || selectors_namespaceObject.getRSVPSettingsOpen(state) || !selectors_namespaceObject.getRSVPCreated(state);
const attendee_registration_container_mapStateToProps = state => ({
  attendeeRegistrationURL: getAttendeeRegistrationUrl(state),
  hasAttendeeInfoFields: selectors_namespaceObject.getRSVPHasAttendeeInfoFields(state),
  isCreated: selectors_namespaceObject.getRSVPCreated(state),
  isDisabled: container_getIsDisabled(state),
  isModalOpen: selectors_namespaceObject.getRSVPIsModalOpen(state)
});
const attendee_registration_container_mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(actions_namespaceObject.setRSVPIsModalOpen(true));
    },
    onClose: e => {
      if (!e.target.classList.contains('components-modal__content')) {
        dispatch(actions_namespaceObject.setRSVPIsModalOpen(ownProps.clientId, false));
      }
    },
    onIframeLoad: iframe => {
      const iframeWindow = iframe.contentWindow;

      // show overlay
      const showOverlay = () => {
        iframe.nextSibling.classList.add('tribe-editor__attendee-registration__modal-overlay--show');
      };

      // add event listener for form submit
      const form = iframeWindow.document.querySelector('#event-tickets-attendee-information');
      form.addEventListener('submit', showOverlay);

      // remove listeners
      const removeListeners = () => {
        iframeWindow.removeEventListener('unload', handleUnload); // eslint-disable-line no-use-before-define,max-len
        form.removeEventListener('submit', showOverlay);
      };

      // handle unload on iframe unload
      const handleUnload = () => {
        // remove listeners
        removeListeners(iframeWindow);

        // check if there are meta fields
        const metaFields = iframeWindow.document.querySelector('#tribe-tickets-attendee-sortables');
        const hasFields = Boolean(metaFields.firstElementChild);

        // dispatch actions
        dispatch(actions_namespaceObject.setRSVPHasAttendeeInfoFields(hasFields));
        dispatch(actions_namespaceObject.setRSVPIsModalOpen(false));
      };

      // add handler to iframe window unload
      iframeWindow.addEventListener('unload', handleUnload);

      // add target blank to "Learn more" link
      const introLink = iframeWindow.document.querySelector('.tribe-intro > a');
      if (introLink) {
        introLink.setAttribute('target', '_blank');
      }
    }
  };
};
/* harmony default export */ var attendee_registration_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(attendee_registration_container_mapStateToProps, attendee_registration_container_mapDispatchToProps))(attendee_registration_template));
// EXTERNAL MODULE: ./src/modules/blocks/rsvp/container-content/style.pcss
var container_content_style = __webpack_require__("/vq8");

// CONCATENATED MODULE: ./src/modules/blocks/rsvp/container-content/template.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */







const RSVPContainerContent = _ref => {
  let {
    isAddEditOpen,
    hasTicketsPlus
  } = _ref;
  if (!isAddEditOpen) {
    return null;
  }
  return wp.element.createElement(external_React_default.a.Fragment, null, wp.element.createElement(title_container, null), wp.element.createElement(description_container, null), wp.element.createElement(capacity_container, null), wp.element.createElement(duration_container, null), wp.element.createElement(not_going_container, null), hasTicketsPlus && wp.element.createElement(attendee_registration_container, null));
};
RSVPContainerContent.propTypes = {
  isAddEditOpen: external_tribe_modules_propTypes_default.a.bool,
  hasTicketsPlus: external_tribe_modules_propTypes_default.a.bool
};
/* harmony default export */ var container_content_template = (RSVPContainerContent);
// CONCATENATED MODULE: ./src/modules/blocks/rsvp/container-content/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */




const container_content_container_mapStateToProps = state => ({
  hasTicketsPlus: external_tribe_common_data_["plugins"].selectors.hasPlugin(state)(external_tribe_common_data_["plugins"].constants.TICKETS_PLUS),
  isAddEditOpen: selectors_namespaceObject.getRSVPIsAddEditOpen(state)
});
/* harmony default export */ var container_content_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(container_content_container_mapStateToProps))(container_content_template));
// EXTERNAL MODULE: ./src/modules/blocks/rsvp/container/style.pcss
var container_style = __webpack_require__("p/3v");

// CONCATENATED MODULE: ./src/modules/blocks/rsvp/container/template.js
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */





const RSVPContainer = _ref => {
  let {
    isDisabled,
    isSelected,
    clientId
  } = _ref;
  return wp.element.createElement(container_panel, {
    className: external_tribe_modules_classnames_default()('tribe-editor__rsvp-container', {
      'tribe-editor__rsvp-container--disabled': isDisabled
    }),
    layout: LAYOUT.rsvp,
    header: wp.element.createElement(container_header_container, {
      isSelected: isSelected
    }),
    content: wp.element.createElement(container_content_container, {
      clientId: clientId
    })
  });
};
RSVPContainer.propTypes = {
  isDisabled: external_tribe_modules_propTypes_default.a.bool.isRequired,
  isSelected: external_tribe_modules_propTypes_default.a.bool.isRequired,
  clientId: external_tribe_modules_propTypes_default.a.string.isRequired
};
/* harmony default export */ var container_template = (RSVPContainer);
// CONCATENATED MODULE: ./src/modules/blocks/rsvp/container/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



const container_container_getIsDisabled = state => selectors_namespaceObject.getRSVPIsLoading(state) || selectors_namespaceObject.getRSVPSettingsOpen(state);
const container_container_mapStateToProps = state => ({
  isAddEditOpen: selectors_namespaceObject.getRSVPIsAddEditOpen(state),
  isDisabled: container_container_getIsDisabled(state)
});
/* harmony default export */ var container_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(container_container_mapStateToProps))(container_template));
// EXTERNAL MODULE: ./src/modules/blocks/rsvp/move-delete/style.pcss
var move_delete_style = __webpack_require__("EiNN");

// CONCATENATED MODULE: ./src/modules/blocks/rsvp/move-delete/template.js
/**
 * External Dependencies
 */





const MoveDelete = _ref => {
  let {
    moveRSVP,
    removeRSVP,
    isDisabled
  } = _ref;
  return wp.element.createElement("div", {
    className: "tribe-editor__rsvp__content-row--move-delete"
  }, wp.element.createElement(external_tribe_common_elements_["Button"], {
    type: "button",
    onClick: removeRSVP,
    disabled: isDisabled
  }, Object(external_wp_i18n_["__"])('Remove RSVP', 'event-tickets')), wp.element.createElement(external_tribe_common_elements_["Button"], {
    type: "button",
    onClick: moveRSVP,
    disabled: isDisabled
  }, Object(external_wp_i18n_["__"])('Move RSVP', 'event-tickets')));
};
MoveDelete.propTypes = {
  moveRSVP: external_tribe_modules_propTypes_default.a.func.isRequired,
  removeRSVP: external_tribe_modules_propTypes_default.a.func.isRequired,
  isDisabled: external_tribe_modules_propTypes_default.a.bool.isRequired
};
/* harmony default export */ var move_delete_template = (MoveDelete);
// CONCATENATED MODULE: ./src/modules/blocks/rsvp/move-delete/container.js


const move_delete_container_excluded = ["dispatch"];
function move_delete_container_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function move_delete_container_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? move_delete_container_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : move_delete_container_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * External dependencies
 */





/**
 * Internal dependencies
 */




const move_delete_container_mapStateToProps = state => ({
  created: selectors_namespaceObject.getRSVPCreated(state),
  rsvpId: selectors_namespaceObject.getRSVPId(state),
  isDisabled: selectors_namespaceObject.getRSVPIsLoading(state) || selectors_namespaceObject.getRSVPSettingsOpen(state)
});
const move_delete_container_mapDispatchToProps = (dispatch, ownProps) => ({
  moveRSVP: rsvpId => dispatch(showModal(rsvpId, ownProps.clientId)),
  dispatch
});
const container_mergeProps = (stateProps, dispatchProps, ownProps) => {
  const {
      dispatch
    } = dispatchProps,
    restDispatchProps = objectWithoutProperties_default()(dispatchProps, move_delete_container_excluded);
  return move_delete_container_objectSpread(move_delete_container_objectSpread(move_delete_container_objectSpread(move_delete_container_objectSpread({}, ownProps), stateProps), restDispatchProps), {}, {
    removeRSVP: () => {
      if (window.confirm(
      // eslint-disable-line no-alert
      Object(external_wp_i18n_["__"])('Are you sure you want to delete this RSVP? It cannot be undone.', 'event-tickets'))) {
        dispatch(actions_namespaceObject.deleteRSVP());
        if (stateProps.created && stateProps.rsvpId) {
          dispatch(thunks_namespaceObject.deleteRSVP(stateProps.rsvpId));
        }
        Object(external_wp_data_["dispatch"])('core/editor').removeBlocks([ownProps.clientId]);
      }
    },
    moveRSVP: () => dispatchProps.moveRSVP(stateProps.rsvpId)
  });
};
/* harmony default export */ var move_delete_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(move_delete_container_mapStateToProps, move_delete_container_mapDispatchToProps, container_mergeProps))(move_delete_template));
// EXTERNAL MODULE: ./src/modules/blocks/rsvp/action-dashboard/style.pcss
var rsvp_action_dashboard_style = __webpack_require__("i9sy");

// CONCATENATED MODULE: ./src/modules/blocks/rsvp/action-dashboard/template.js

/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



const template_confirmLabel = created => created ? Object(external_wp_i18n_["__"])('Update RSVP', 'event-tickets') : Object(external_wp_i18n_["__"])('Create RSVP', 'event-tickets');
const template_cancelLabel = Object(external_wp_i18n_["__"])('Cancel', 'event-tickets');
class template_RSVPActionDashboard extends external_React_["PureComponent"] {
  constructor(props) {
    super(props);
    defineProperty_default()(this, "onWarningClick", () => {
      this.setState({
        isWarningOpen: !this.state.isWarningOpen
      });
    });
    defineProperty_default()(this, "getActions", () => {
      const actions = [];
      if (this.props.created) {
        actions.push(wp.element.createElement(move_delete_container, {
          clientId: this.props.clientId
        }));
      }
      return actions;
    });
    this.state = {
      isWarningOpen: false
    };
  }
  render() {
    const {
      created,
      hasRecurrenceRules,
      isConfirmDisabled,
      onCancelClick,
      onConfirmClick
    } = this.props;

    /* eslint-disable max-len */
    return wp.element.createElement(external_React_["Fragment"], null, wp.element.createElement(action_dashboard, {
      className: "tribe-editor__rsvp__action-dashboard tribe-common",
      actions: this.getActions(),
      cancelLabel: template_cancelLabel,
      confirmLabel: template_confirmLabel(created),
      isConfirmDisabled: isConfirmDisabled,
      onCancelClick: onCancelClick,
      onConfirmClick: onConfirmClick,
      showCancel: true
    }), hasRecurrenceRules && wp.element.createElement("div", {
      className: "tribe-editor__rsvp__warning"
    }, Object(external_wp_i18n_["__"])('This is a recurring event. If you add tickets they will only show up on the next upcoming event in the recurrence pattern. The same ticket form will appear across all events in the series. Please configure your events accordingly.', 'event-tickets')));
    /* eslint-enable max-len */
  }
}
defineProperty_default()(template_RSVPActionDashboard, "propTypes", {
  clientId: external_tribe_modules_propTypes_default.a.string.isRequired,
  created: external_tribe_modules_propTypes_default.a.bool.isRequired,
  hasRecurrenceRules: external_tribe_modules_propTypes_default.a.bool.isRequired,
  isCancelDisabled: external_tribe_modules_propTypes_default.a.bool.isRequired,
  isConfirmDisabled: external_tribe_modules_propTypes_default.a.bool.isRequired,
  isLoading: external_tribe_modules_propTypes_default.a.bool.isRequired,
  onCancelClick: external_tribe_modules_propTypes_default.a.func.isRequired,
  onConfirmClick: external_tribe_modules_propTypes_default.a.func.isRequired,
  showCancel: external_tribe_modules_propTypes_default.a.bool.isRequired
});
/* harmony default export */ var action_dashboard_template = (template_RSVPActionDashboard);
// EXTERNAL MODULE: external "tribe.common.utils.recurrence"
var external_tribe_common_utils_recurrence_ = __webpack_require__("8C5M");

// CONCATENATED MODULE: ./src/modules/blocks/rsvp/action-dashboard/container.js


const action_dashboard_container_excluded = ["state"];
function action_dashboard_container_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function action_dashboard_container_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? action_dashboard_container_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : action_dashboard_container_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




const getIsConfirmDisabled = state => !selectors_namespaceObject.getRSVPTempTitle(state) || !selectors_namespaceObject.getRSVPHasChanges(state) || selectors_namespaceObject.getRSVPIsLoading(state) || selectors_namespaceObject.getRSVPHasDurationError(state);
const container_onCancelClick = (state, dispatch) => () => {
  dispatch(actions_namespaceObject.setRSVPTempDetails({
    tempTitle: selectors_namespaceObject.getRSVPTitle(state),
    tempDescription: selectors_namespaceObject.getRSVPDescription(state),
    tempCapacity: selectors_namespaceObject.getRSVPCapacity(state),
    tempNotGoingResponses: selectors_namespaceObject.getRSVPNotGoingResponses(state),
    tempStartDate: selectors_namespaceObject.getRSVPStartDate(state),
    tempStartDateInput: selectors_namespaceObject.getRSVPStartDateInput(state),
    tempStartDateMoment: selectors_namespaceObject.getRSVPStartDateMoment(state),
    tempEndDate: selectors_namespaceObject.getRSVPEndDate(state),
    tempEndDateInput: selectors_namespaceObject.getRSVPEndDateInput(state),
    tempEndDateMoment: selectors_namespaceObject.getRSVPEndDateMoment(state),
    tempStartTime: selectors_namespaceObject.getRSVPStartTime(state),
    tempEndTime: selectors_namespaceObject.getRSVPEndTime(state),
    tempStartTimeInput: selectors_namespaceObject.getRSVPStartTimeInput(state),
    tempEndTimeInput: selectors_namespaceObject.getRSVPEndTimeInput(state)
  }));
  dispatch(actions_namespaceObject.setRSVPHasChanges(false));
  dispatch(actions_namespaceObject.setRSVPIsAddEditOpen(false));
  Object(external_wp_data_["dispatch"])('core/editor').clearSelectedBlock();
};
const container_onConfirmClick = (state, dispatch) => () => {
  const payload = {
    title: selectors_namespaceObject.getRSVPTempTitle(state),
    description: selectors_namespaceObject.getRSVPTempDescription(state),
    capacity: selectors_namespaceObject.getRSVPTempCapacity(state),
    notGoingResponses: selectors_namespaceObject.getRSVPTempNotGoingResponses(state),
    startDate: selectors_namespaceObject.getRSVPTempStartDate(state),
    startDateInput: selectors_namespaceObject.getRSVPTempStartDateInput(state),
    startDateMoment: selectors_namespaceObject.getRSVPTempStartDateMoment(state),
    endDate: selectors_namespaceObject.getRSVPTempEndDate(state),
    endDateInput: selectors_namespaceObject.getRSVPTempEndDateInput(state),
    endDateMoment: selectors_namespaceObject.getRSVPTempEndDateMoment(state),
    startTime: selectors_namespaceObject.getRSVPTempStartTime(state),
    endTime: selectors_namespaceObject.getRSVPTempEndTime(state),
    startTimeInput: selectors_namespaceObject.getRSVPTempStartTimeInput(state),
    endTimeInput: selectors_namespaceObject.getRSVPTempEndTimeInput(state)
  };
  if (!selectors_namespaceObject.getRSVPCreated(state)) {
    dispatch(thunks_namespaceObject.createRSVP(action_dashboard_container_objectSpread(action_dashboard_container_objectSpread({}, payload), {}, {
      postId: Object(external_wp_data_["select"])('core/editor').getCurrentPostId()
    })));
  } else {
    dispatch(thunks_namespaceObject.updateRSVP(action_dashboard_container_objectSpread(action_dashboard_container_objectSpread({}, payload), {}, {
      id: selectors_namespaceObject.getRSVPId(state)
    })));
  }
};
const action_dashboard_container_mapStateToProps = state => ({
  created: selectors_namespaceObject.getRSVPCreated(state),
  hasRecurrenceRules: Object(external_tribe_common_utils_recurrence_["hasRecurrenceRules"])(state),
  noTicketsOnRecurring: Object(external_tribe_common_utils_recurrence_["noTicketsOnRecurring"])(),
  isCancelDisabled: selectors_namespaceObject.getRSVPIsLoading(state),
  isConfirmDisabled: getIsConfirmDisabled(state),
  isLoading: selectors_namespaceObject.getRSVPIsLoading(state),
  showCancel: selectors_namespaceObject.getRSVPCreated(state),
  state
});
const action_dashboard_container_mergeProps = (stateProps, dispatchProps, ownProps) => {
  const {
      state
    } = stateProps,
    restStateProps = objectWithoutProperties_default()(stateProps, action_dashboard_container_excluded);
  const {
    dispatch
  } = dispatchProps;
  return action_dashboard_container_objectSpread(action_dashboard_container_objectSpread(action_dashboard_container_objectSpread({}, ownProps), restStateProps), {}, {
    onCancelClick: container_onCancelClick(state, dispatch),
    onConfirmClick: container_onConfirmClick(state, dispatch, ownProps)
  });
};
/* harmony default export */ var action_dashboard_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(action_dashboard_container_mapStateToProps, null, action_dashboard_container_mergeProps))(action_dashboard_template));
// EXTERNAL MODULE: ./src/modules/blocks/rsvp/header-image/style.pcss
var header_image_style = __webpack_require__("sMOv");

// CONCATENATED MODULE: ./src/modules/blocks/rsvp/header-image/template.js
/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


const RSVPHeaderImage = _ref => {
  let {
    image,
    isSettingsLoading,
    onRemove,
    onSelect
  } = _ref;
  const description = !(image !== null && image !== void 0 && image.src) && Object(external_wp_i18n_["__"])( /* eslint-disable-next-line max-len */
  'Select an image from your Media Library to display on emailed tickets and RSVPs. For best results, use a .jpg, .png, or .gif at least 1160px wide.', 'event-tickets');
  const imageUploadProps = {
    title: Object(external_wp_i18n_["__"])('Ticket Header Image', 'event-tickets'),
    description,
    className: 'tribe-editor__rsvp__image-upload',
    buttonDisabled: isSettingsLoading,
    buttonLabel: Object(external_wp_i18n_["__"])('Upload Image', 'event-tickets'),
    image,
    onRemove,
    onSelect,
    removeButtonDisabled: isSettingsLoading
  };
  return wp.element.createElement(external_tribe_common_elements_["ImageUpload"], imageUploadProps);
};
RSVPHeaderImage.propTypes = {
  image: external_tribe_modules_propTypes_default.a.shape({
    alt: external_tribe_modules_propTypes_default.a.string.isRequired,
    id: external_tribe_modules_propTypes_default.a.number.isRequired,
    src: external_tribe_modules_propTypes_default.a.string.isRequired
  }).isRequired,
  isSettingsLoading: external_tribe_modules_propTypes_default.a.bool.isRequired,
  onRemove: external_tribe_modules_propTypes_default.a.func.isRequired,
  onSelect: external_tribe_modules_propTypes_default.a.func.isRequired
};
/* harmony default export */ var header_image_template = (RSVPHeaderImage);
// CONCATENATED MODULE: ./src/modules/blocks/rsvp/header-image/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */




/**
 * Full payload from gutenberg media upload is not used,
 * only id, alt, and src are used for this specific case.
 */

const header_image_container_mapStateToProps = state => ({
  image: {
    id: selectors_namespaceObject.getRSVPHeaderImageId(state),
    alt: selectors_namespaceObject.getRSVPHeaderImageAlt(state),
    src: selectors_namespaceObject.getRSVPHeaderImageSrc(state)
  },
  isSettingsLoading: selectors_namespaceObject.getRSVPIsSettingsLoading(state)
});
const header_image_container_mapDispatchToProps = dispatch => ({
  /**
   * Full payload from gutenberg media upload is not used,
   * only id, alt, and medium src are used for this specific case.
   */

  onSelect: image => dispatch(actions_namespaceObject.updateRSVPHeaderImage(image)),
  onRemove: () => dispatch(actions_namespaceObject.deleteRSVPHeaderImage())
});
/* harmony default export */ var header_image_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(header_image_container_mapStateToProps, header_image_container_mapDispatchToProps))(header_image_template));
// EXTERNAL MODULE: ./src/modules/blocks/rsvp/settings-dashboard/style.pcss
var rsvp_settings_dashboard_style = __webpack_require__("dm1+");

// CONCATENATED MODULE: ./src/modules/blocks/rsvp/settings-dashboard/template.js
/**
 * External dependencies
 */




/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




const RSVPSettingsDashboard = _ref => {
  let {
    isSettingsLoading,
    onCloseClick
  } = _ref;
  return wp.element.createElement(settings_dashboard, {
    className: external_tribe_modules_classnames_default()('tribe-editor__rsvp__settings-dashboard', {
      'tribe-editor__rsvp__settings-dashboard--loading': isSettingsLoading
    }),
    closeButtonDisabled: isSettingsLoading,
    content: wp.element.createElement(external_React_["Fragment"], null, wp.element.createElement(header_image_container, null), isSettingsLoading && wp.element.createElement(external_wp_components_["Spinner"], null)),
    headerLeft: wp.element.createElement(external_React_["Fragment"], null, wp.element.createElement(icons_settings, null), wp.element.createElement("span", {
      className: "tribe-editor__settings-dashboard__header-left-text"
    }, Object(external_wp_i18n_["__"])('RSVP Settings', 'event-tickets'))),
    onCloseClick: onCloseClick
  });
};
RSVPSettingsDashboard.propTypes = {
  isSettingsLoading: external_tribe_modules_propTypes_default.a.bool.isRequired,
  onCloseClick: external_tribe_modules_propTypes_default.a.func.isRequired
};
/* harmony default export */ var settings_dashboard_template = (RSVPSettingsDashboard);
// CONCATENATED MODULE: ./src/modules/blocks/rsvp/settings-dashboard/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



const settings_dashboard_container_mapStateToProps = state => ({
  isSettingsLoading: selectors_namespaceObject.getRSVPIsSettingsLoading(state)
});
const settings_dashboard_container_mapDispatchToProps = dispatch => ({
  onCloseClick: () => dispatch(actions_namespaceObject.setRSVPSettingsOpen(false))
});
/* harmony default export */ var settings_dashboard_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(settings_dashboard_container_mapStateToProps, settings_dashboard_container_mapDispatchToProps))(settings_dashboard_template));
// CONCATENATED MODULE: ./src/modules/blocks/rsvp/inactive-block/template.js
/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

const RSVPInactiveBlock = _ref => {
  let {
    created,
    setAddEditOpen
  } = _ref;
  const title = created ? Object(external_wp_i18n_["__"])('RSVP is not currently active', 'event-tickets') : Object(external_wp_i18n_["__"])('Add an RSVP', 'event-tickets');
  const description = created ? Object(external_wp_i18n_["__"])('Edit this block to change RSVP settings.', 'event-tickets') : Object(external_wp_i18n_["__"])('Allow users to confirm their attendance.', 'event-tickets');

  /* eslint-disable max-len */
  const leftColumn = wp.element.createElement(external_React_default.a.Fragment, null, wp.element.createElement("h3", {
    className: "tribe-editor__rsvp-title tribe-common-h2 tribe-common-h4--min-medium"
  }, title), wp.element.createElement("div", {
    className: "tribe-editor__rsvp-description tribe-common-h6 tribe-common-h--alt tribe-common-b3--min-medium"
  }, description));
  const rightColumn = wp.element.createElement(external_React_default.a.Fragment, null, wp.element.createElement("button", {
    id: "add-rsvp",
    className: "tribe-common-c-btn tribe-common-b1 tribe-common-b2--min-medium",
    onClick: setAddEditOpen
  }, Object(external_wp_i18n_["__"])('Add RSVP', 'event-tickets')));
  /* eslint-enable max-len */

  return wp.element.createElement(card, {
    className: "tribe-common tribe-editor__inactive-block--rsvp"
  }, wp.element.createElement(split_container, {
    leftColumn: leftColumn,
    rightColumn: rightColumn
  }));
};
RSVPInactiveBlock.propTypes = {
  created: external_tribe_modules_propTypes_default.a.bool.isRequired,
  setAddEditOpen: external_tribe_modules_propTypes_default.a.func.isRequired
};
/* harmony default export */ var inactive_block_template = (RSVPInactiveBlock);
// CONCATENATED MODULE: ./src/modules/blocks/rsvp/inactive-block/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



const inactive_block_container_mapStateToProps = state => ({
  created: selectors_namespaceObject.getRSVPCreated(state)
});
const inactive_block_container_mapDispatchToProps = dispatch => ({
  setAddEditOpen: () => dispatch(actions_namespaceObject.setRSVPIsAddEditOpen(true))
});
/* harmony default export */ var inactive_block_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(inactive_block_container_mapStateToProps, inactive_block_container_mapDispatchToProps))(inactive_block_template));
// EXTERNAL MODULE: ./src/modules/elements/move-modal/style.pcss
var move_modal_style = __webpack_require__("aAk0");

// CONCATENATED MODULE: ./src/modules/elements/move-modal/template.js

/**
 * External Dependencies
 */






class template_MoveModal extends external_React_["PureComponent"] {
  constructor() {
    super(...arguments);
    defineProperty_default()(this, "renderPostTypes", () => {
      if (this.props.isFetchingPosts) {
        return wp.element.createElement(external_wp_components_["Spinner"], null);
      }
      return this.props.postOptions.length ? wp.element.createElement(external_wp_components_["MenuGroup"], null, wp.element.createElement(external_wp_components_["MenuItemsChoice"], {
        choices: this.props.postOptions,
        value: this.props.postValue,
        onSelect: this.props.onPostSelect
      })) : wp.element.createElement(external_wp_components_["Notice"], {
        isDismissible: false,
        status: "warning"
      }, Object(external_wp_i18n_["__"])('No posts found', 'event-tickets'));
    });
  }
  componentDidMount() {
    this.props.initialize();
  }
  render() {
    return wp.element.createElement(external_wp_components_["Modal"], {
      title: this.props.title,
      onRequestClose: this.props.hideModal,
      className: "tribe-editor__tickets__move-modal"
    }, wp.element.createElement("label", {
      htmlFor: "post_type"
    }, Object(external_wp_i18n_["__"])('You can optionally focus on a specific post type:', 'event-tickets')), wp.element.createElement(external_tribe_common_elements_["Select"], {
      id: "post_type",
      options: this.props.postTypeOptions,
      onChange: this.props.onPostTypeChange,
      value: this.props.postTypeOptionValue
    }), wp.element.createElement("label", {
      htmlFor: "search"
    }, Object(external_wp_i18n_["__"])('You can also enter keywords to help find the target event by title or description', 'event-tickets')), wp.element.createElement(external_tribe_common_elements_["Input"], {
      id: "search",
      type: "text",
      onChange: this.props.onSearchChange,
      value: this.props.search
    }), wp.element.createElement("label", null, Object(external_wp_i18n_["__"])('Select the post you wish to move the ticket type to:', 'event-tickets')), this.renderPostTypes(), wp.element.createElement("footer", null, wp.element.createElement(external_wp_components_["Button"], {
      isLarge: true,
      isPrimary: true,
      isBusy: this.props.isModalSubmitting,
      disabled: !this.props.hasSelectedPost || this.props.isFetchingPosts,
      onClick: this.props.onSubmit
    }, Object(external_wp_i18n_["__"])('Finish!', 'event-tickets'))));
  }
}
defineProperty_default()(template_MoveModal, "propTypes", {
  hasSelectedPost: external_tribe_modules_propTypes_default.a.bool.isRequired,
  hideModal: external_tribe_modules_propTypes_default.a.func.isRequired,
  initialize: external_tribe_modules_propTypes_default.a.func.isRequired,
  isFetchingPosts: external_tribe_modules_propTypes_default.a.bool.isRequired,
  isModalSubmitting: external_tribe_modules_propTypes_default.a.bool.isRequired,
  onPostSelect: external_tribe_modules_propTypes_default.a.func.isRequired,
  onPostTypeChange: external_tribe_modules_propTypes_default.a.func.isRequired,
  onSearchChange: external_tribe_modules_propTypes_default.a.func.isRequired,
  onSubmit: external_tribe_modules_propTypes_default.a.func.isRequired,
  postOptions: external_tribe_modules_propTypes_default.a.arrayOf(external_tribe_modules_propTypes_default.a.object),
  postTypeOptions: external_tribe_modules_propTypes_default.a.arrayOf(external_tribe_modules_propTypes_default.a.object),
  postTypeOptionValue: external_tribe_modules_propTypes_default.a.object,
  postValue: external_tribe_modules_propTypes_default.a.string.isRequired,
  search: external_tribe_modules_propTypes_default.a.string.isRequired,
  title: external_tribe_modules_propTypes_default.a.string.isRequired
});
defineProperty_default()(template_MoveModal, "defaultProps", {
  title: Object(external_wp_i18n_["__"])('Move Ticket Types', 'event-tickets')
});
// CONCATENATED MODULE: ./src/modules/elements/move-modal/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */





const move_modal_container_mapStateToProps = state => ({
  hasSelectedPost: hasSelectedPost(state),
  isFetchingPosts: isFetchingPosts(state),
  isFetchingPostTypes: isFetchingPostTypes(state),
  isModalSubmitting: isModalSubmitting(state),
  postOptions: getPostOptions(state),
  postTypeOptions: getPostTypeOptions(state),
  postTypeOptionValue: getPostTypeOptionValue(state),
  postValue: getModalTarget(state),
  search: getModalSearch(state)
});
const move_modal_container_mapDispatchToProps = dispatch => ({
  initialize: () => dispatch({
    type: INITIALIZE_MODAL
  }),
  hideModal: () => dispatch(hideModal()),
  onSearchChange: e => dispatch(setModalData({
    search_terms: e.target.value
  })),
  onPostTypeChange: option => dispatch(setModalData({
    post_type: option.value
  })),
  onPostSelect: value => dispatch(setModalData({
    target_post_id: value
  })),
  onSubmit: () => dispatch({
    type: SUBMIT_MODAL
  })
});
/* harmony default export */ var move_modal_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(move_modal_container_mapStateToProps, move_modal_container_mapDispatchToProps))(template_MoveModal));
// CONCATENATED MODULE: ./src/modules/elements/move-modal/index.js

// EXTERNAL MODULE: ./src/modules/blocks/rsvp/style.pcss
var rsvp_style = __webpack_require__("ocgc");

// CONCATENATED MODULE: ./src/modules/blocks/rsvp/template.js
/**
 * External dependencies
 */




/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */







const template_RSVP = _ref => {
  let {
    clientId,
    created,
    hasRecurrenceRules,
    initializeRSVP,
    isAddEditOpen,
    isInactive,
    isLoading,
    isModalShowing,
    isSelected,
    isSettingsOpen,
    noTicketsOnRecurring,
    rsvpId,
    setAddEditClosed
  } = _ref;
  const rsvpBlockRef = Object(external_React_["useRef"])(null);
  const handleAddEditClose = Object(external_React_["useCallback"])(event => {
    const rsvpButtons = ['add-rsvp', 'edit-rsvp', 'attendees-rsvp', 'settings-rsvp'];
    if (rsvpBlockRef.current && !rsvpBlockRef.current.contains(event.target) && !rsvpButtons.includes(event.target.id)) {
      setAddEditClosed();
    }
  }, [setAddEditClosed]);
  Object(external_React_["useEffect"])(() => {
    !rsvpId && initializeRSVP();
    document.addEventListener('click', handleAddEditClose);
    return () => document.removeEventListener('click', handleAddEditClose);
  }, [handleAddEditClose, initializeRSVP, rsvpId]);
  const renderBlock = () => {
    const displayInactive = !isAddEditOpen && (created && isInactive || !created);
    return wp.element.createElement("div", {
      ref: rsvpBlockRef
    }, displayInactive ? wp.element.createElement(inactive_block_container, null) : !isSettingsOpen && wp.element.createElement(card, {
      className: external_tribe_modules_classnames_default()('tribe-editor__rsvp', {
        'tribe-editor__rsvp--add-edit-open': isAddEditOpen
      }, {
        'tribe-editor__rsvp--selected': isSelected
      }, {
        'tribe-editor__rsvp--loading': isLoading
      })
    }, wp.element.createElement(container_container, {
      isSelected: isSelected,
      clientId: clientId
    }), isAddEditOpen && wp.element.createElement(action_dashboard_container, {
      clientId: clientId
    }), isLoading && wp.element.createElement(external_wp_components_["Spinner"], null)), isSettingsOpen && wp.element.createElement(settings_dashboard_container, null), isModalShowing && wp.element.createElement(move_modal_container, null));
  };
  const renderBlockNotSupported = () => {
    return wp.element.createElement("div", {
      className: "tribe-editor__not-supported-message"
    }, wp.element.createElement("p", {
      className: "tribe-editor__not-supported-message-text"
    }, Object(external_wp_i18n_["__"])('RSVPs are not yet supported on recurring events.', 'event-tickets'), wp.element.createElement("br", null), wp.element.createElement("a", {
      className: "tribe-editor__not-supported-message-link",
      href: "https://evnt.is/1b7a",
      target: "_blank",
      rel: "noopener noreferrer"
    }, Object(external_wp_i18n_["__"])('Read about our plans for future features.', 'event-tickets')), wp.element.createElement("br", null), wp.element.createElement(external_wp_components_["Button"], {
      variant: "secondary",
      onClick: () => wp.data.dispatch('core/block-editor').removeBlock(clientId)
    }, Object(external_wp_i18n_["__"])('Remove block', 'event-tickets'))));
  };
  if (hasRecurrenceRules && noTicketsOnRecurring) {
    return renderBlockNotSupported();
  }
  return renderBlock();
};
template_RSVP.propTypes = {
  clientId: external_tribe_modules_propTypes_default.a.string.isRequired,
  created: external_tribe_modules_propTypes_default.a.bool.isRequired,
  hasRecurrenceRules: external_tribe_modules_propTypes_default.a.bool.isRequired,
  initializeRSVP: external_tribe_modules_propTypes_default.a.func.isRequired,
  isAddEditOpen: external_tribe_modules_propTypes_default.a.bool.isRequired,
  isInactive: external_tribe_modules_propTypes_default.a.bool.isRequired,
  isLoading: external_tribe_modules_propTypes_default.a.bool.isRequired,
  isModalShowing: external_tribe_modules_propTypes_default.a.bool.isRequired,
  isSelected: external_tribe_modules_propTypes_default.a.bool.isRequired,
  isSettingsOpen: external_tribe_modules_propTypes_default.a.bool.isRequired,
  noTicketsOnRecurring: external_tribe_modules_propTypes_default.a.bool.isRequired,
  rsvpId: external_tribe_modules_propTypes_default.a.number.isRequired,
  setAddEditClosed: external_tribe_modules_propTypes_default.a.func.isRequired
};
/* harmony default export */ var rsvp_template = (template_RSVP);
// EXTERNAL MODULE: external "lodash.keys"
var external_lodash_keys_ = __webpack_require__("HAtF");
var external_lodash_keys_default = /*#__PURE__*/__webpack_require__.n(external_lodash_keys_);

// EXTERNAL MODULE: external "lodash.isObject"
var external_lodash_isObject_ = __webpack_require__("4oMP");
var external_lodash_isObject_default = /*#__PURE__*/__webpack_require__.n(external_lodash_isObject_);

// EXTERNAL MODULE: external "lodash.isArray"
var external_lodash_isArray_ = __webpack_require__("e5yv");
var external_lodash_isArray_default = /*#__PURE__*/__webpack_require__.n(external_lodash_isArray_);

// EXTERNAL MODULE: external "lodash.isEmpty"
var external_lodash_isEmpty_ = __webpack_require__("4Qn9");
var external_lodash_isEmpty_default = /*#__PURE__*/__webpack_require__.n(external_lodash_isEmpty_);

// EXTERNAL MODULE: external "wp.isShallowEqual"
var external_wp_isShallowEqual_ = __webpack_require__("rl8x");
var external_wp_isShallowEqual_default = /*#__PURE__*/__webpack_require__.n(external_wp_isShallowEqual_);

// CONCATENATED MODULE: ./src/modules/blocks/hoc/with-save-data.js






function with_save_data_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function with_save_data_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? with_save_data_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : with_save_data_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * @todo: This is just a holder for ET blocks until the block editor UX work.
 *        The `withSaveData()` HOC needs to be removed from common. Until the
 *        block editor UX work, this will live here.
 */

/**
 * External dependencies
 */



const blockRegister = {};

/**
 * Higher order component that updates the attributes of a component if any of the properties of the
 * attributes changes.
 *
 * Only updates the attributes that has changed with the new updates into the properties and only
 * the ones specified as attributes params otherwise will fallback to the property attributes of the
 * component to extract the keys of those to do the comparision.
 *
 * @param {Object} selectedAttributes Set of attributes to only update fallback to this.props.attributes
 * @returns {Function} Return a new HOC
 */
/* harmony default export */ var with_save_data = (function () {
  let selectedAttributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return WrappedComponent => {
    class WithSaveData extends external_React_["Component"] {
      constructor(props) {
        super(props);
        defineProperty_default()(this, "keys", []);
        defineProperty_default()(this, "saving", null);
        this.keys = this.generateKeys();
      }
      generateKeys() {
        if (external_lodash_isArray_default()(this.attrs)) {
          return this.attrs;
        }
        if (external_lodash_isObject_default()(this.attrs)) {
          return external_lodash_keys_default()(this.attrs);
        }
        console.warn('Make sure attributes is from a valid type: Array or Object');
        return [];
      }

      // At this point attributes has been set so no need to be set the initial state into the store here.
      componentDidMount() {
        const {
          setInitialState,
          attributes = {},
          isolated,
          onBlockCreated
        } = this.props;
        onBlockCreated(this.props);
        this.registerBlock();

        // Prevent to set the initial state for blocks that are copies from others
        // overwrite this with the isolated property of the block to `true`
        if (this.blockCount() > 1 && !isolated) {
          return;
        }
        setInitialState(with_save_data_objectSpread(with_save_data_objectSpread({}, this.props), {}, {
          get(key, defaultValue) {
            return key in attributes ? attributes[key] : defaultValue;
          }
        }));
      }
      componentWillUnmount() {
        const {
          onBlockRemoved
        } = this.props;
        this.unregisterBlock();
        onBlockRemoved(this.props);
      }
      registerBlock() {
        const {
          name
        } = this.props;
        blockRegister[name] = name in blockRegister ? blockRegister[name] + 1 : 1;
      }
      unregisterBlock() {
        const {
          name
        } = this.props;
        blockRegister[name] -= 1;
      }
      blockCount() {
        const {
          name
        } = this.props;
        return blockRegister[name];
      }
      componentDidUpdate() {
        const diff = this.calculateDiff();
        if (external_wp_isShallowEqual_default()(this.saving, diff)) {
          return;
        }
        this.saving = diff;
        if (external_lodash_isEmpty_default()(diff)) {
          return;
        }
        this.props.setAttributes(diff);
      }
      calculateDiff() {
        const attributes = this.attrs;
        return this.keys.reduce((diff, key) => {
          if (key in this.props && !external_wp_isShallowEqual_default()(attributes[key], this.props[key])) {
            diff[key] = this.props[key];
          }
          return diff;
        }, {});
      }
      get attrs() {
        return selectedAttributes || this.props.attributes || {};
      }
      render() {
        return wp.element.createElement(WrappedComponent, this.props);
      }
    }
    defineProperty_default()(WithSaveData, "defaultProps", {
      attributes: {},
      setInitialState: external_lodash_noop_default.a,
      setAttributes: external_lodash_noop_default.a,
      name: '',
      isolated: false,
      onBlockCreated: external_lodash_noop_default.a,
      onBlockRemoved: external_lodash_noop_default.a
    });
    defineProperty_default()(WithSaveData, "propTypes", {
      setAttributes: external_tribe_modules_propTypes_default.a.func,
      setInitialState: external_tribe_modules_propTypes_default.a.func,
      attributes: external_tribe_modules_propTypes_default.a.object,
      name: external_tribe_modules_propTypes_default.a.string,
      isolated: external_tribe_modules_propTypes_default.a.bool,
      increaseRegister: external_tribe_modules_propTypes_default.a.func,
      decreaseRegister: external_tribe_modules_propTypes_default.a.func,
      onBlockCreated: external_tribe_modules_propTypes_default.a.func,
      onBlockRemoved: external_tribe_modules_propTypes_default.a.func
    });
    WithSaveData.displayName = `WithSaveData( ${WrappedComponent.displayName || WrappedComponent.name || 'Component '}`; // eslint-disable-line max-len

    return WithSaveData;
  };
});
// CONCATENATED MODULE: ./src/modules/blocks/rsvp/container.js
/**
 * External dependencies
 */




/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */







const getIsInactive = state => {
  const startDateMoment = selectors_namespaceObject.getRSVPStartDateMoment(state);
  const startTime = selectors_namespaceObject.getRSVPStartTimeNoSeconds(state);
  const endDateMoment = selectors_namespaceObject.getRSVPEndDateMoment(state);
  const endTime = selectors_namespaceObject.getRSVPEndTimeNoSeconds(state);
  if (!startDateMoment || !endDateMoment) {
    return false;
  }
  const startMoment = external_tribe_common_utils_["moment"].setTimeInSeconds(startDateMoment.clone(), external_tribe_common_utils_["time"].toSeconds(startTime, external_tribe_common_utils_["time"].TIME_FORMAT_HH_MM));
  const endMoment = external_tribe_common_utils_["moment"].setTimeInSeconds(endDateMoment.clone(), external_tribe_common_utils_["time"].toSeconds(endTime, external_tribe_common_utils_["time"].TIME_FORMAT_HH_MM));
  const currentMoment = external_moment_default()();
  return !(currentMoment.isAfter(startMoment) && currentMoment.isBefore(endMoment));
};
const container_setInitialState = (dispatch, ownProps) => () => {
  const postId = Object(external_wp_data_["select"])('core/editor').getCurrentPostId();
  dispatch(thunks_namespaceObject.getRSVP(postId));
  const {
    attributes = {}
  } = ownProps;
  if (parseInt(attributes.headerImageId, 10)) {
    dispatch(actions_namespaceObject.fetchRSVPHeaderImage(attributes.headerImageId));
  }
  if (attributes.goingCount) {
    dispatch(actions_namespaceObject.setRSVPGoingCount(parseInt(attributes.goingCount, 10)));
  }
  if (attributes.notGoingCount) {
    dispatch(actions_namespaceObject.setRSVPNotGoingCount(parseInt(attributes.notGoingCount, 10)));
  }
};
const rsvp_container_mapStateToProps = state => {
  const rsvpId = selectors_namespaceObject.getRSVPId(state);
  return {
    created: selectors_namespaceObject.getRSVPCreated(state),
    isAddEditOpen: selectors_namespaceObject.getRSVPIsAddEditOpen(state),
    isInactive: getIsInactive(state),
    isLoading: selectors_namespaceObject.getRSVPIsLoading(state),
    isModalShowing: selectors_isModalShowing(state) && getModalTicketId(state) === rsvpId,
    isSettingsOpen: selectors_namespaceObject.getRSVPSettingsOpen(state),
    hasRecurrenceRules: Object(external_tribe_common_utils_recurrence_["hasRecurrenceRules"])(state),
    noTicketsOnRecurring: Object(external_tribe_common_utils_recurrence_["noTicketsOnRecurring"])(),
    rsvpId
  };
};
const rsvp_container_mapDispatchToProps = (dispatch, ownProps) => ({
  initializeRSVP: () => dispatch(actions_namespaceObject.initializeRSVP()),
  onBlockRemoved: () => dispatch(actions_namespaceObject.deleteRSVP()),
  setInitialState: container_setInitialState(dispatch, ownProps),
  setAddEditClosed: () => dispatch(actions_namespaceObject.setRSVPIsAddEditOpen(false))
});
/* harmony default export */ var rsvp_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(rsvp_container_mapStateToProps, rsvp_container_mapDispatchToProps), with_save_data())(rsvp_template));
// CONCATENATED MODULE: ./src/modules/blocks/rsvp/index.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




/**
 * Module Code
 */
/* harmony default export */ var modules_blocks_rsvp = ({
  id: 'rsvp',
  title: Object(external_wp_i18n_["__"])('RSVP', 'event-tickets'),
  description: Object(external_wp_i18n_["__"])('Find out who is planning to attend!', 'event-tickets'),
  icon: wp.element.createElement(icons_rsvp, null),
  category: 'tribe-tickets',
  keywords: ['event', 'events-gutenberg', 'tribe'],
  supports: {
    html: false,
    multiple: false,
    customClassName: false
  },
  attributes: {
    goingCount: {
      type: 'integer',
      source: 'meta',
      meta: KEY_TICKET_GOING_COUNT
    },
    notGoingCount: {
      type: 'integer',
      source: 'meta',
      meta: KEY_TICKET_NOT_GOING_COUNT
    },
    headerImageId: {
      type: 'integer',
      source: 'meta',
      meta: KEY_TICKET_HEADER
    }
  },
  edit: rsvp_container,
  save: () => null
});
// CONCATENATED MODULE: ./src/modules/blocks/tickets/action-buttons/settings/template.js
/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


const template_SettingsActionButton = _ref => {
  let {
    onClick
  } = _ref;
  return wp.element.createElement(action_button, {
    icon: wp.element.createElement(icons_settings, null),
    onClick: onClick
  }, Object(external_wp_i18n_["__"])('Settings', 'event-tickets'));
};
template_SettingsActionButton.propTypes = {
  onClick: external_tribe_modules_propTypes_default.a.func
};
/* harmony default export */ var settings_template = (template_SettingsActionButton);
// CONCATENATED MODULE: ./src/modules/blocks/tickets/action-buttons/settings/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



const settings_container_mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(ticket_actions_namespaceObject.openSettings())
});
/* harmony default export */ var settings_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(null, settings_container_mapDispatchToProps))(settings_template));
// CONCATENATED MODULE: ./src/modules/blocks/tickets/action-buttons/orders/template.js
/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


const OrdersActionButton = _ref => {
  let {
    href
  } = _ref;
  return href ? wp.element.createElement(action_button, {
    asLink: true,
    href: href,
    icon: wp.element.createElement(orders, null),
    target: "_blank"
  }, Object(external_wp_i18n_["__"])('Orders', 'event-tickets')) : null;
};
OrdersActionButton.propTypes = {
  href: external_tribe_modules_propTypes_default.a.string.isRequired
};
/* harmony default export */ var orders_template = (OrdersActionButton);
// CONCATENATED MODULE: ./src/modules/blocks/tickets/action-buttons/orders/container.js
/**
 * External dependencies
 */



/**
 * Wordpress dependencies
 */


/**
 * Internal dependencies
 */




const orders_container_mapStateToProps = state => {
  const adminURL = external_tribe_common_utils_["globals"].adminUrl();
  const postType = Object(external_wp_data_["select"])('core/editor').getCurrentPostType();
  const postId = Object(external_wp_data_["select"])('core/editor').getCurrentPostId();
  const provider = ticket_selectors_namespaceObject.getTicketsProvider(state);
  const page = constants_namespaceObject.TICKET_ORDERS_PAGE_SLUG[provider];
  return {
    href: page ? `${adminURL}edit.php?post_type=${postType}&page=${page}&event_id=${postId}` : ''
  };
};
/* harmony default export */ var orders_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(orders_container_mapStateToProps))(orders_template));
// CONCATENATED MODULE: ./src/modules/blocks/tickets/action-buttons/attendees/template.js
/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


const template_AttendeesActionButton = _ref => {
  let {
    href,
    canCreateTickets
  } = _ref;
  return canCreateTickets && wp.element.createElement(action_button, {
    asLink: true,
    href: href,
    icon: wp.element.createElement(icons_attendees, null),
    target: "_blank"
  }, Object(external_wp_i18n_["__"])('Attendees', 'event-tickets'));
};
template_AttendeesActionButton.propTypes = {
  href: external_tribe_modules_propTypes_default.a.string.isRequired,
  canCreateTickets: external_tribe_modules_propTypes_default.a.bool
};
/* harmony default export */ var attendees_template = (template_AttendeesActionButton);
// CONCATENATED MODULE: ./src/modules/blocks/tickets/action-buttons/attendees/container.js
/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




const attendees_container_mapStateToProps = () => {
  const adminURL = external_tribe_common_utils_["globals"].adminUrl();
  const postType = Object(external_wp_data_["select"])('core/editor').getCurrentPostType();
  const postId = Object(external_wp_data_["select"])('core/editor').getCurrentPostId();
  return {
    href: `${adminURL}edit.php?post_type=${postType}&page=tickets-attendees&event_id=${postId}`,
    // eslint-disable-line max-len
    canCreateTickets: ticket_selectors_namespaceObject.canCreateTickets()
  };
};
/* harmony default export */ var attendees_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(attendees_container_mapStateToProps))(attendees_template));
// CONCATENATED MODULE: ./src/modules/blocks/tickets/action-buttons/index.js



// EXTERNAL MODULE: ./src/modules/blocks/tickets/action-dashboard/style.pcss
var tickets_action_dashboard_style = __webpack_require__("VulL");

// CONCATENATED MODULE: ./src/modules/blocks/tickets/action-dashboard/template.js

/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



const action_dashboard_template_confirmLabel = Object(external_wp_i18n_["__"])('Add a Ticket', 'event-tickets');
class template_TicketsDashboardAction extends external_React_["PureComponent"] {
  constructor(props) {
    super(props);
    defineProperty_default()(this, "onWarningClick", () => {
      this.setState({
        isWarningOpen: !this.state.isWarningOpen
      });
    });
    defineProperty_default()(this, "getActions", () => {
      const {
        hasCreatedTickets,
        hasOrdersPage,
        hasRecurrenceRules
      } = this.props;

      // eslint-disable-next-line react/jsx-key
      const actions = [wp.element.createElement(settings_container, null)];
      if (hasCreatedTickets) {
        actions.push(wp.element.createElement(attendees_container, null));
        if (hasOrdersPage) {
          actions.push(wp.element.createElement(orders_container, null));
        }
      }
      if (hasRecurrenceRules) {
        const icon = this.state.isWarningOpen ? 'no' : 'info-outline';
        const text = this.state.isWarningOpen ? Object(external_wp_i18n_["__"])('Hide Warning', 'event-tickets') : Object(external_wp_i18n_["__"])('Warning', 'event-tickets');
        actions.push(wp.element.createElement(warning_button, {
          icon: icon,
          onClick: this.onWarningClick
        }, text));
      }
      return actions;
    });
    this.state = {
      isWarningOpen: false
    };
  }
  render() {
    const {
      onConfirmClick
    } = this.props;
    return wp.element.createElement(external_React_["Fragment"], null, wp.element.createElement(action_dashboard, {
      className: "tribe-common tribe-editor__tickets__action-dashboard",
      actions: this.getActions(),
      confirmLabel: action_dashboard_template_confirmLabel,
      onConfirmClick: onConfirmClick,
      showCancel: false
    }), this.state.isWarningOpen && wp.element.createElement("div", {
      className: "tribe-editor__tickets__warning"
    }, Object(external_wp_i18n_["__"])('This is a recurring event. If you add tickets they will only show up on the next upcoming event in the recurrence pattern. The same ticket form will appear across all events in the series. Please configure your events accordingly.',
    // eslint-disable-line max-len
    'event-tickets')));
  }
}
defineProperty_default()(template_TicketsDashboardAction, "propTypes", {
  hasCreatedTickets: external_tribe_modules_propTypes_default.a.bool,
  hasOrdersPage: external_tribe_modules_propTypes_default.a.bool,
  hasRecurrenceRules: external_tribe_modules_propTypes_default.a.bool,
  onConfirmClick: external_tribe_modules_propTypes_default.a.func
});
/* harmony default export */ var tickets_action_dashboard_template = (template_TicketsDashboardAction);
// CONCATENATED MODULE: ./src/modules/blocks/tickets/action-dashboard/container.js
/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




const tickets_action_dashboard_container_mapStateToProps = (state, ownProps) => {
  const provider = ticket_selectors_namespaceObject.getTicketsProvider(state);
  const page = constants_namespaceObject.TICKET_ORDERS_PAGE_SLUG[provider];
  return {
    hasCreatedTickets: ticket_selectors_namespaceObject.hasCreatedTickets(state),
    hasOrdersPage: Boolean(page),
    hasRecurrenceRules: Object(external_tribe_common_utils_recurrence_["hasRecurrenceRules"])(state),
    noTicketsOnRecurring: Object(external_tribe_common_utils_recurrence_["noTicketsOnRecurring"])(),
    onConfirmClick: () => {
      // eslint-disable-line wpcalypso/redux-no-bound-selectors
      const {
        clientId
      } = ownProps;
      const {
        getBlockCount
      } = Object(external_wp_data_["select"])('core/editor');
      const {
        insertBlock
      } = Object(external_wp_data_["dispatch"])('core/editor');
      const nextChildPosition = getBlockCount(clientId);
      const block = Object(external_wp_blocks_["createBlock"])('tribe/tickets-item', {});
      insertBlock(block, nextChildPosition, clientId);
    }
  };
};
/* harmony default export */ var tickets_action_dashboard_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(tickets_action_dashboard_container_mapStateToProps))(tickets_action_dashboard_template));
// EXTERNAL MODULE: ./src/modules/blocks/tickets/capacity-table/row/style.pcss
var row_style = __webpack_require__("Q+ho");

// CONCATENATED MODULE: ./src/modules/blocks/tickets/capacity-table/row/template.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */

const CapacityRow = _ref => {
  let {
    label,
    items,
    right
  } = _ref;
  return wp.element.createElement("div", {
    className: "tribe-editor__tickets__capacity-row"
  }, wp.element.createElement("span", {
    className: "tribe-editor__tickets__capacity-row-left"
  }, label && wp.element.createElement("span", {
    className: "tribe-editor__tickets__capacity-row-label"
  }, label), items && wp.element.createElement("span", {
    className: "tribe-editor__tickets__capacity-row-items"
  }, items)), wp.element.createElement("span", {
    className: "tribe-editor__tickets__capacity-row-right"
  }, right));
};
CapacityRow.propTypes = {
  label: external_tribe_modules_propTypes_default.a.string,
  items: external_tribe_modules_propTypes_default.a.string,
  right: external_tribe_modules_propTypes_default.a.node
};
CapacityRow.defaultProps = {
  label: '',
  items: '',
  right: ''
};
/* harmony default export */ var row_template = (CapacityRow);
// EXTERNAL MODULE: ./src/modules/blocks/tickets/capacity-table/style.pcss
var capacity_table_style = __webpack_require__("qvN1");

// CONCATENATED MODULE: ./src/modules/blocks/tickets/capacity-table/template.js
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */



const CapacityTable = _ref => {
  let {
    isSettingsLoading,
    independentCapacity,
    sharedCapacity,
    independentAndSharedCapacity,
    independentTicketItems,
    sharedTicketItems,
    onSharedCapacityChange
  } = _ref;
  const sharedInput = wp.element.createElement(external_tribe_common_elements_["NumberInput"], {
    onChange: onSharedCapacityChange,
    value: sharedCapacity,
    disabled: isSettingsLoading,
    min: 0
  });
  return wp.element.createElement("div", {
    className: "tribe-editor__tickets__capacity-table"
  }, wp.element.createElement("h3", {
    className: "tribe-editor__tickets__capacity-table-title"
  }, Object(external_wp_i18n_["__"])('Capacity', 'event-tickets')), wp.element.createElement(row_template, {
    label: Object(external_wp_i18n_["__"])('Shared capacity', 'event-tickets'),
    items: sharedTicketItems,
    right: sharedInput
  }), wp.element.createElement(row_template, {
    label: Object(external_wp_i18n_["__"])('Independent capacity', 'event-tickets'),
    items: independentTicketItems,
    right: independentCapacity
  }), wp.element.createElement(row_template, {
    label: Object(external_wp_i18n_["__"])('Total Capacity', 'event-tickets'),
    right: independentAndSharedCapacity
  }));
};
CapacityTable.propTypes = {
  isSettingsLoading: external_tribe_modules_propTypes_default.a.bool,
  independentCapacity: external_tribe_modules_propTypes_default.a.number,
  sharedCapacity: external_tribe_modules_propTypes_default.a.string,
  independentAndSharedCapacity: external_tribe_modules_propTypes_default.a.number,
  independentTicketItems: external_tribe_modules_propTypes_default.a.string,
  sharedTicketItems: external_tribe_modules_propTypes_default.a.string,
  onSharedCapacityChange: external_tribe_modules_propTypes_default.a.func
};
/* harmony default export */ var capacity_table_template = (CapacityTable);
// CONCATENATED MODULE: ./src/modules/blocks/tickets/capacity-table/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



const getTicketItems = tickets => {
  const items = tickets.filter(ticket => ticket.details.title).map(ticket => ticket.details.title).join(', ');
  return items ? ` (${items}) ` : '';
};
const getIndependentTicketItems = state => {
  const independentTickets = ticket_selectors_namespaceObject.getIndependentTickets(state);
  return getTicketItems(independentTickets);
};
const getSharedTicketItems = state => {
  const sharedTickets = ticket_selectors_namespaceObject.getSharedTickets(state);
  return getTicketItems(sharedTickets);
};
const capacity_table_container_mapStateToProps = state => ({
  isSettingsLoading: ticket_selectors_namespaceObject.getTicketsIsSettingsLoading(state),
  independentCapacity: ticket_selectors_namespaceObject.getIndependentTicketsCapacity(state),
  sharedCapacity: ticket_selectors_namespaceObject.getTicketsSharedCapacity(state),
  independentAndSharedCapacity: ticket_selectors_namespaceObject.getIndependentAndSharedTicketsCapacity(state),
  independentTicketItems: getIndependentTicketItems(state),
  sharedTicketItems: getSharedTicketItems(state)
});
const capacity_table_container_mapDispatchToProps = dispatch => ({
  onSharedCapacityChange: e => {
    dispatch(ticket_actions_namespaceObject.setTicketsSharedCapacity(e.target.value));
    dispatch(ticket_actions_namespaceObject.setTicketsTempSharedCapacity(e.target.value));
  }
});
/* harmony default export */ var capacity_table_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(capacity_table_container_mapStateToProps, capacity_table_container_mapDispatchToProps))(capacity_table_template));
// EXTERNAL MODULE: ./src/modules/blocks/tickets/header-image/style.pcss
var tickets_header_image_style = __webpack_require__("I+H6");

// CONCATENATED MODULE: ./src/modules/blocks/tickets/header-image/template.js
/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


const HeaderImage = _ref => {
  let {
    image,
    isSettingsLoading,
    onRemove,
    onSelect
  } = _ref;
  const description = !(image !== null && image !== void 0 && image.src) && Object(external_wp_i18n_["__"])( /* eslint-disable-next-line max-len */
  'Select an image from your Media Library to display on emailed tickets and RSVPs. For best results, use a .jpg, .png, or .gif at least 1160px wide.', 'event-tickets');
  const imageUploadProps = {
    title: Object(external_wp_i18n_["__"])('Ticket Header Image', 'event-tickets'),
    description,
    className: 'tribe-editor__rsvp__image-upload',
    buttonDisabled: isSettingsLoading,
    buttonLabel: Object(external_wp_i18n_["__"])('Set Header Image', 'event-tickets'),
    image,
    onRemove,
    onSelect,
    removeButtonDisabled: isSettingsLoading
  };
  return wp.element.createElement(external_tribe_common_elements_["ImageUpload"], imageUploadProps);
};
HeaderImage.propTypes = {
  image: external_tribe_modules_propTypes_default.a.shape({
    alt: external_tribe_modules_propTypes_default.a.string.isRequired,
    id: external_tribe_modules_propTypes_default.a.number.isRequired,
    src: external_tribe_modules_propTypes_default.a.string.isRequired
  }).isRequired,
  isSettingsLoading: external_tribe_modules_propTypes_default.a.bool.isRequired,
  onRemove: external_tribe_modules_propTypes_default.a.func.isRequired,
  onSelect: external_tribe_modules_propTypes_default.a.func.isRequired
};
/* harmony default export */ var tickets_header_image_template = (HeaderImage);
// CONCATENATED MODULE: ./src/modules/blocks/tickets/header-image/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



const tickets_header_image_container_mapStateToProps = state => ({
  image: {
    id: ticket_selectors_namespaceObject.getTicketsHeaderImageId(state),
    alt: ticket_selectors_namespaceObject.getTicketsHeaderImageAlt(state),
    src: ticket_selectors_namespaceObject.getTicketsHeaderImageSrc(state)
  },
  isSettingsLoading: ticket_selectors_namespaceObject.getTicketsIsSettingsLoading(state)
});
const tickets_header_image_container_mapDispatchToProps = dispatch => ({
  /**
   * Full payload from gutenberg media upload is not used,
   * only id, alt, and medium src are used for this specific case.
   */

  onSelect: image => dispatch(ticket_actions_namespaceObject.updateTicketsHeaderImage(image)),
  onRemove: () => dispatch(ticket_actions_namespaceObject.deleteTicketsHeaderImage())
});
/* harmony default export */ var tickets_header_image_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(tickets_header_image_container_mapStateToProps, tickets_header_image_container_mapDispatchToProps))(tickets_header_image_template));
// EXTERNAL MODULE: ./src/modules/blocks/tickets/settings-dashboard/style.pcss
var tickets_settings_dashboard_style = __webpack_require__("PxfU");

// CONCATENATED MODULE: ./src/modules/blocks/tickets/settings-dashboard/template.js
/**
 * External dependencies
 */




/**
 * Wordpress dependencies
 */


/**
 * Internal dependencies
 */




const TicketsSettingsDashboard = _ref => {
  let {
    hasTicketsPlus,
    isSettingsLoading,
    onCloseClick
  } = _ref;
  return wp.element.createElement(settings_dashboard, {
    className: external_tribe_modules_classnames_default()('tribe-editor__tickets__settings-dashboard', {
      'tribe-editor__tickets__settings-dashboard--loading': isSettingsLoading
    }),
    closeButtonDisabled: isSettingsLoading,
    content: wp.element.createElement(external_React_["Fragment"], null, hasTicketsPlus && wp.element.createElement(capacity_table_container, null), wp.element.createElement(tickets_header_image_container, null), isSettingsLoading && wp.element.createElement(external_wp_components_["Spinner"], null)),
    onCloseClick: onCloseClick
  });
};
TicketsSettingsDashboard.propTypes = {
  hasTicketsPlus: external_tribe_modules_propTypes_default.a.bool,
  isSettingsLoading: external_tribe_modules_propTypes_default.a.bool.isRequired,
  onCloseClick: external_tribe_modules_propTypes_default.a.func.isRequired
};
/* harmony default export */ var tickets_settings_dashboard_template = (TicketsSettingsDashboard);
// CONCATENATED MODULE: ./src/modules/blocks/tickets/settings-dashboard/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */




const tickets_settings_dashboard_container_mapStateToProps = state => ({
  hasTicketsPlus: external_tribe_common_data_["plugins"].selectors.hasPlugin(state)(external_tribe_common_data_["plugins"].constants.TICKETS_PLUS),
  isSettingsLoading: ticket_selectors_namespaceObject.getTicketsIsSettingsLoading(state)
});
const tickets_settings_dashboard_container_mapDispatchToProps = dispatch => ({
  onCloseClick: () => dispatch(ticket_actions_namespaceObject.closeSettings())
});
/* harmony default export */ var tickets_settings_dashboard_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(tickets_settings_dashboard_container_mapStateToProps, tickets_settings_dashboard_container_mapDispatchToProps))(tickets_settings_dashboard_template));
// CONCATENATED MODULE: ./src/modules/blocks/tickets/dashboard/template.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */

 // eslint-disable-line max-len

const TicketsDashboard = _ref => {
  let {
    clientId,
    hideDashboard,
    isSettingsOpen
  } = _ref;
  if (hideDashboard) {
    return null;
  }
  return isSettingsOpen ? wp.element.createElement(tickets_settings_dashboard_container, null) : wp.element.createElement(tickets_action_dashboard_container, {
    clientId: clientId
  });
};
TicketsDashboard.propTypes = {
  clientId: external_tribe_modules_propTypes_default.a.string,
  hideDashboard: external_tribe_modules_propTypes_default.a.bool,
  isSettingsOpen: external_tribe_modules_propTypes_default.a.bool
};
/* harmony default export */ var dashboard_template = (TicketsDashboard);
// CONCATENATED MODULE: ./src/modules/blocks/tickets/dashboard/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



const dashboard_container_mapStateToProps = state => ({
  isSettingsOpen: ticket_selectors_namespaceObject.getTicketsIsSettingsOpen(state),
  hideDashboard: ticket_selectors_namespaceObject.hasATicketSelected(state)
});
/* harmony default export */ var dashboard_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(dashboard_container_mapStateToProps))(dashboard_template));
// EXTERNAL MODULE: ./src/modules/blocks/tickets/availability/style.pcss
var availability_style = __webpack_require__("dZjw");

// CONCATENATED MODULE: ./src/modules/blocks/tickets/availability/template.js
/**
 * External dependencies
 */




/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



/**
 * @todo: consider changing to _n for better translation compatibility
 */

const Availability = _ref => {
  let {
    available,
    total
  } = _ref;
  const Available = wp.element.createElement(numeric_label, {
    className: external_tribe_modules_classnames_default()('tribe-editor__tickets__availability-label', 'tribe-editor__tickets__availability-label--available', 'tribe-tooltip'),
    count: available,
    singular: Object(external_wp_i18n_["__"])('%d ticket available', 'event-tickets'),
    plural: Object(external_wp_i18n_["__"])('%d tickets available', 'event-tickets')
  });
  const Total = wp.element.createElement(numeric_label, {
    className: external_tribe_modules_classnames_default()('tribe-editor__tickets__availability-label', 'tribe-editor__tickets__availability-label--total'),
    count: total,
    singular: Object(external_wp_i18n_["__"])('%d total ticket', 'event-tickets'),
    plural: Object(external_wp_i18n_["__"])('%d total tickets', 'event-tickets')
  });
  return wp.element.createElement("div", {
    className: "tribe-editor__tickets__availability"
  }, wp.element.createElement(external_React_default.a.Fragment, null, Available, available ? wp.element.createElement(icon_with_tooltip, {
    propertyName: Object(external_wp_i18n_["__"])( /* eslint-disable-next-line max-len */
    'Ticket availability is based on the lowest number of inventory, stock, and capacity.', 'event-tickets'),
    icon: wp.element.createElement("span", {
      className: "dashicons dashicons-info-outline"
    })
  }) : null), Total);
};
Availability.propTypes = {
  available: external_tribe_modules_propTypes_default.a.number,
  total: external_tribe_modules_propTypes_default.a.number
};
/* harmony default export */ var availability_template = (Availability);
// CONCATENATED MODULE: ./src/modules/blocks/tickets/availability/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



const availability_container_mapStateToProps = state => ({
  total: ticket_selectors_namespaceObject.getIndependentAndSharedTicketsCapacity(state),
  available: ticket_selectors_namespaceObject.getIndependentAndSharedTicketsAvailable(state)
});
/* harmony default export */ var availability_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(availability_container_mapStateToProps))(availability_template));
// CONCATENATED MODULE: ./src/modules/blocks/tickets/inactive/inactive.js
/**
 * External dependencies
 */



/**
 * Wordpress dependencies
 */


/**
 * Internal dependencies
 */

const InactiveTickets = _ref => {
  let {
    title
  } = _ref;
  return wp.element.createElement(card, {
    className: "tribe-editor__card-no-bottom-border",
    header: Object(external_wp_i18n_["__"])('Tickets', 'event-tickets')
  }, wp.element.createElement("div", {
    className: "tickets-description tickets-row-line"
  }, title));
};
InactiveTickets.propTypes = {
  title: external_tribe_modules_propTypes_default.a.string
};
/* harmony default export */ var inactive = (InactiveTickets);
// EXTERNAL MODULE: ./src/modules/blocks/tickets/container/style.pcss
var tickets_container_style = __webpack_require__("MJAV");

// CONCATENATED MODULE: ./src/modules/blocks/tickets/container/template.js
/**
 * External dependencies
 */




/**
 * Wordpress dependencies
 */
const {
  InnerBlocks
} = wp.blockEditor;


/**
 * Internal dependencies
 */




const TicketsOverlay = () => wp.element.createElement("div", {
  className: "tribe-editor__tickets__overlay"
});
const TicketsContainer = _ref => {
  let {
    allTicketsFuture,
    allTicketsPast,
    canCreateTickets,
    hasCreatedTickets,
    hasOverlay,
    isSettingsOpen,
    showAvailability,
    showInactiveBlock,
    hasATicketSelected
  } = _ref;
  const messages = {
    title: '',
    description: ''
  };
  if (isSettingsOpen) {
    return null;
  }
  if (!canCreateTickets) {
    messages.title = Object(external_wp_i18n_["__"])('There is no ecommerce available', 'event-tickets');
    messages.description = Object(external_wp_i18n_["__"])('To create tickets, you\'ll need to enable an ecommerce solution.', 'event-tickets');
  } else if (!hasCreatedTickets) {
    messages.title = Object(external_wp_i18n_["__"])('Add a ticket to get started.', 'event-tickets');
    messages.description = Object(external_wp_i18n_["__"])('Edit this block to create your first ticket.', 'event-tickets');
  } else if (allTicketsPast || allTicketsFuture) {
    messages.title = Object(external_wp_i18n_["__"])('There are no active tickets. Adjust sale duration to make tickets available', 'event-tickets'); // eslint-disable-line max-len
  } else {
    messages.title = Object(external_wp_i18n_["__"])('Tickets are not yet available', 'event-tickets');
  }
  const innerBlocksClassName = external_tribe_modules_classnames_default()({
    'tribe-editor__tickets__inner-blocks': true,
    'tribe-editor__tickets__inner-blocks--show': !showInactiveBlock
  });
  const cardClassName = external_tribe_modules_classnames_default()({
    'tribe-editor__card-no-bottom-border': !hasATicketSelected,
    'tribe-editor__card-padding-bottom': hasATicketSelected
  });
  return wp.element.createElement("div", {
    className: "tribe-editor__tickets__container"
  }, wp.element.createElement("div", {
    className: innerBlocksClassName
  }, wp.element.createElement(card, {
    className: cardClassName,
    header: Object(external_wp_i18n_["__"])('Tickets', 'event-tickets')
  }, wp.element.createElement(InnerBlocks, {
    allowedBlocks: ['tribe/tickets-item']
  }))), showInactiveBlock && !isSettingsOpen && wp.element.createElement(inactive, {
    title: messages.title
  }), showAvailability && wp.element.createElement(availability_container, null), hasOverlay && wp.element.createElement(TicketsOverlay, null));
};
TicketsContainer.propTypes = {
  allTicketsFuture: external_tribe_modules_propTypes_default.a.bool,
  allTicketsPast: external_tribe_modules_propTypes_default.a.bool,
  canCreateTickets: external_tribe_modules_propTypes_default.a.bool,
  hasATicketSelected: external_tribe_modules_propTypes_default.a.bool,
  hasCreatedTickets: external_tribe_modules_propTypes_default.a.bool,
  hasOverlay: external_tribe_modules_propTypes_default.a.bool,
  isSettingsOpen: external_tribe_modules_propTypes_default.a.bool,
  showAvailability: external_tribe_modules_propTypes_default.a.bool,
  showInactiveBlock: external_tribe_modules_propTypes_default.a.bool
};
/* harmony default export */ var tickets_container_template = (TicketsContainer);
// CONCATENATED MODULE: ./src/modules/blocks/tickets/container/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



const getHasOverlay = (state, ownProps) => ticket_selectors_namespaceObject.getTicketsIsSettingsOpen(state) || !ticket_selectors_namespaceObject.hasATicketSelected(state) && !ownProps.isSelected;
const getShowInactiveBlock = (state, ownProps) => {
  const showIfBlockIsSelected = ownProps.isSelected && !ticket_selectors_namespaceObject.hasTickets(state);
  const showIfBlockIsNotSelected = !ownProps.isSelected && !ticket_selectors_namespaceObject.hasATicketSelected(state) && (!ticket_selectors_namespaceObject.hasCreatedTickets(state) || !ticket_selectors_namespaceObject.hasTicketOnSale(state));
  return showIfBlockIsSelected || showIfBlockIsNotSelected;
};
const tickets_container_container_mapStateToProps = (state, ownProps) => ({
  allTicketsFuture: ticket_selectors_namespaceObject.allTicketsFuture(state),
  allTicketsPast: ticket_selectors_namespaceObject.allTicketsPast(state),
  canCreateTickets: ticket_selectors_namespaceObject.canCreateTickets(),
  hasCreatedTickets: ticket_selectors_namespaceObject.hasCreatedTickets(state),
  hasOverlay: getHasOverlay(state, ownProps),
  isSettingsOpen: ticket_selectors_namespaceObject.getTicketsIsSettingsOpen(state),
  showAvailability: ownProps.isSelected && ticket_selectors_namespaceObject.hasCreatedTickets(state),
  showInactiveBlock: getShowInactiveBlock(state, ownProps),
  hasATicketSelected: ticket_selectors_namespaceObject.hasATicketSelected(state)
});
/* harmony default export */ var tickets_container_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(tickets_container_container_mapStateToProps))(tickets_container_template));
// EXTERNAL MODULE: external "wp.editor"
var external_wp_editor_ = __webpack_require__("jSdM");

// EXTERNAL MODULE: ./src/modules/blocks/tickets/controls/style.pcss
var controls_style = __webpack_require__("PE+2");

// CONCATENATED MODULE: ./src/modules/blocks/tickets/controls/template.js


const template_excluded = ["provider", "onProviderChange"];
/**
 * External dependencies
 */



/**
 * Wordpress dependencies
 */




/**
 * Internal dependencies
 */

const message = Object(external_wp_i18n_["__"])('It looks like you have multiple ecommerce plugins active. We recommend running only one at a time. However, if you need to run multiple, please select which one to use to sell tickets for this event. ',
// eslint-disable-line max-len
'event-tickets');
const note = Object(external_wp_i18n_["__"])('Note: adjusting this setting will only impact new tickets. Existing tickets will not change. We highly recommend that all tickets for one event use the same ecommerce plugin.',
// eslint-disable-line max-len
'event-tickets');

/**
 * @todo: create radio input element, move this over to element
 */

const RadioInput = _ref => {
  let {
      provider,
      onProviderChange
    } = _ref,
    additionalProps = objectWithoutProperties_default()(_ref, template_excluded);
  return wp.element.createElement("div", {
    className: "tribe-editor__tickets-control-container"
  }, wp.element.createElement("input", extends_default()({
    className: "tribe-editor__tickets-control__input tribe-editor__tickets-control__input--radio",
    type: "radio",
    id: provider.class,
    name: provider.class,
    onChange: onProviderChange
  }, additionalProps)), wp.element.createElement("label", {
    className: "tribe-editor__tickets-control__label",
    htmlFor: provider.class
  }, provider.name));
};
RadioInput.propTypes = {
  provider: external_tribe_modules_propTypes_default.a.shape({
    name: external_tribe_modules_propTypes_default.a.string,
    class: external_tribe_modules_propTypes_default.a.string
  }),
  onProviderChange: external_tribe_modules_propTypes_default.a.func
};
const Controls = _ref2 => {
  let {
    hasMultipleProviders,
    providers,
    selectedProvider,
    onProviderChange
  } = _ref2;
  return hasMultipleProviders && wp.element.createElement(external_wp_editor_["InspectorControls"], {
    key: "inspector"
  }, wp.element.createElement(external_wp_components_["PanelBody"], {
    title: Object(external_wp_i18n_["__"])('Tickets Settings', 'event-tickets')
  }, wp.element.createElement(external_wp_components_["PanelRow"], null, wp.element.createElement("fieldset", {
    className: "tribe-editor__tickets-controls-provider"
  }, wp.element.createElement("legend", null, Object(external_wp_i18n_["__"])('Sell tickets using', 'event-tickets')), wp.element.createElement("p", null, message, wp.element.createElement("em", null, note)), providers.map((provider, key) => wp.element.createElement(RadioInput, {
    key: `provider-option-${key + 1}`,
    provider: provider,
    onProviderChange: onProviderChange,
    checked: selectedProvider === provider.class
  }))))));
};
Controls.propTypes = {
  hasMultipleProviders: external_tribe_modules_propTypes_default.a.bool,
  providers: external_tribe_modules_propTypes_default.a.arrayOf(external_tribe_modules_propTypes_default.a.shape({
    name: external_tribe_modules_propTypes_default.a.string,
    class: external_tribe_modules_propTypes_default.a.string
  })),
  selectedProvider: external_tribe_modules_propTypes_default.a.string,
  onProviderChange: external_tribe_modules_propTypes_default.a.func
};
/* harmony default export */ var controls_template = (Controls);
// CONCATENATED MODULE: ./src/modules/blocks/tickets/controls/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */




const controls_container_mapStateToProps = state => ({
  hasMultipleProviders: ticket_selectors_namespaceObject.hasMultipleTicketProviders(),
  providers: ticket_selectors_namespaceObject.getTicketProviders(),
  selectedProvider: ticket_selectors_namespaceObject.getTicketsProvider(state)
});
const controls_container_mapDispatchToProps = dispatch => ({
  onProviderChange: e => dispatch(ticket_actions_namespaceObject.setTicketsProvider(e.target.name))
});
/* harmony default export */ var controls_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(controls_container_mapStateToProps, controls_container_mapDispatchToProps), with_save_data())(controls_template));
// EXTERNAL MODULE: ./src/modules/blocks/tickets/style.pcss
var tickets_style = __webpack_require__("F1wu");

// CONCATENATED MODULE: ./src/modules/blocks/tickets/template.js

/**
 * External dependencies
 */




/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




class template_Tickets extends external_React_["PureComponent"] {
  componentDidMount() {
    this.props.onBlockUpdate(this.props.isSelected);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.isSelected !== this.props.isSelected) {
      this.props.onBlockUpdate(this.props.isSelected);
    }
  }
  renderBlock() {
    const {
      isSelected,
      clientId,
      canCreateTickets
    } = this.props;
    return wp.element.createElement(external_React_["Fragment"], null, wp.element.createElement(tickets_container_container, {
      isSelected: isSelected
    }), canCreateTickets && wp.element.createElement(dashboard_container, {
      isSelected: isSelected,
      clientId: clientId
    }), wp.element.createElement(controls_container, null));
  }
  renderBlockNotSupported() {
    const {
      clientId
    } = this.props;
    return wp.element.createElement("div", {
      className: "tribe-editor__not-supported-message"
    }, wp.element.createElement("p", {
      className: "tribe-editor__not-supported-message-text"
    }, Object(external_wp_i18n_["__"])('Tickets are not yet supported for on recurring events.', 'event-tickets'), wp.element.createElement("br", null), wp.element.createElement("a", {
      className: "tribe-editor__not-supported-message-link",
      href: "https://evnt.is/1b7a",
      target: "_blank",
      rel: "noopener noreferrer"
    }, Object(external_wp_i18n_["__"])('Read about our plans for future features.', 'event-tickets')), wp.element.createElement("br", null), wp.element.createElement(external_wp_components_["Button"], {
      variant: "secondary",
      onClick: () => wp.data.dispatch('core/block-editor').removeBlock(clientId)
    }, Object(external_wp_i18n_["__"])('Remove block', 'event-tickets'))));
  }
  renderContent() {
    if (this.props.hasRecurrenceRules && this.props.noTicketsOnRecurring) {
      return this.renderBlockNotSupported();
    }
    return this.renderBlock();
  }
  render() {
    const {
      isSelected,
      isSettingsOpen
    } = this.props;
    return wp.element.createElement("div", {
      className: external_tribe_modules_classnames_default()('tribe-editor__tickets', {
        'tribe-editor__tickets--selected': isSelected
      }, {
        'tribe-editor__tickets--settings-open': isSettingsOpen
      })
    }, this.renderContent());
  }
}
defineProperty_default()(template_Tickets, "propTypes", {
  canCreateTickets: external_tribe_modules_propTypes_default.a.bool,
  clientId: external_tribe_modules_propTypes_default.a.string,
  hasProviders: external_tribe_modules_propTypes_default.a.bool,
  hasRecurrenceRules: external_tribe_modules_propTypes_default.a.bool,
  header: external_tribe_modules_propTypes_default.a.string,
  isSelected: external_tribe_modules_propTypes_default.a.bool,
  isSettingsOpen: external_tribe_modules_propTypes_default.a.bool,
  noTicketsOnRecurring: external_tribe_modules_propTypes_default.a.bool,
  onBlockUpdate: external_tribe_modules_propTypes_default.a.func
});
/* harmony default export */ var tickets_template = (template_Tickets);
// CONCATENATED MODULE: ./src/modules/blocks/tickets/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */





const tickets_container_mapStateToProps = state => {
  const headerImageId = ticket_selectors_namespaceObject.getTicketsHeaderImageId(state);
  return {
    header: headerImageId ? `${headerImageId}` : '',
    hasProviders: ticket_selectors_namespaceObject.hasTicketProviders(),
    isSettingsOpen: ticket_selectors_namespaceObject.getTicketsIsSettingsOpen(state),
    provider: ticket_selectors_namespaceObject.getTicketsProvider(state),
    sharedCapacity: ticket_selectors_namespaceObject.getTicketsSharedCapacity(state),
    canCreateTickets: ticket_selectors_namespaceObject.canCreateTickets(),
    hasRecurrenceRules: Object(external_tribe_common_utils_recurrence_["hasRecurrenceRules"])(state),
    noTicketsOnRecurring: Object(external_tribe_common_utils_recurrence_["noTicketsOnRecurring"])()
  };
};
const tickets_container_mapDispatchToProps = dispatch => ({
  setInitialState: props => {
    dispatch(ticket_actions_namespaceObject.setTicketsInitialState(props));
  },
  onBlockUpdate: isSelected => {
    dispatch(ticket_actions_namespaceObject.setTicketsIsSelected(isSelected));
  },
  onBlockRemoved: () => {
    dispatch(ticket_actions_namespaceObject.resetTicketsBlock());
  }
});
/* harmony default export */ var tickets_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(tickets_container_mapStateToProps, tickets_container_mapDispatchToProps), with_save_data())(tickets_template));
// CONCATENATED MODULE: ./src/modules/blocks/tickets/index.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

const {
  InnerBlocks: tickets_InnerBlocks
} = wp.blockEditor;

/**
 * Internal dependencies
 */




/**
 * Module Code
 */
/* harmony default export */ var blocks_tickets = ({
  id: 'tickets',
  title: Object(external_wp_i18n_["__"])('Tickets', 'event-tickets'),
  description: Object(external_wp_i18n_["__"])('Sell tickets and register attendees.', 'event-tickets'),
  icon: wp.element.createElement(icons_tickets, null),
  category: 'tribe-tickets',
  keywords: ['event', 'events-gutenberg', 'tribe'],
  supports: {
    html: false,
    multiple: false,
    customClassName: false
  },
  attributes: {
    sharedCapacity: {
      type: 'string',
      source: 'meta',
      meta: KEY_TICKET_CAPACITY
    },
    header: {
      type: 'string',
      source: 'meta',
      meta: KEY_TICKET_HEADER
    },
    provider: {
      type: 'string',
      source: 'meta',
      meta: KEY_TICKET_DEFAULT_PROVIDER
    },
    tickets: {
      type: 'array',
      source: 'meta',
      meta: KEY_TICKETS_LIST
    }
  },
  edit: tickets_container,
  save: () => wp.element.createElement("div", null, wp.element.createElement(tickets_InnerBlocks.Content, null))
});
// EXTERNAL MODULE: ./src/modules/blocks/ticket/style.pcss
var ticket_style = __webpack_require__("s3Mt");

// EXTERNAL MODULE: ./src/modules/blocks/ticket/container-header/title/attendee-registration-icons/style.pcss
var attendee_registration_icons_style = __webpack_require__("2TdA");

// CONCATENATED MODULE: ./src/modules/blocks/ticket/container-header/title/attendee-registration-icons/template.js
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */



const AttendeeRegistrationIcons = _ref => {
  let {
    attendeeInfoFieldsLabel,
    hasAttendeeInfoFields,
    isBlockSelected,
    fromDate,
    saleWindowLabel,
    toDate
  } = _ref;
  if (!isBlockSelected) {
    return null;
  }
  const saleWindowText = Object(external_wp_i18n_["sprintf"])(Object(external_wp_i18n_["__"])('%s - %s', 'event-tickets'), fromDate, toDate);
  return wp.element.createElement("div", {
    className: "tribe-editor__title__attendee-registration-icons"
  }, hasAttendeeInfoFields ? wp.element.createElement(icon_with_tooltip, {
    propertyName: Object(external_wp_i18n_["__"])('Attendee registration', 'event-tickets'),
    description: attendeeInfoFieldsLabel,
    icon: wp.element.createElement(attendee_registration, null)
  }) : null, wp.element.createElement(icon_with_tooltip, {
    propertyName: saleWindowLabel,
    description: saleWindowText,
    icon: wp.element.createElement(sale_window, null)
  }));
};
AttendeeRegistrationIcons.propTypes = {
  attendeeInfoFieldsLabel: external_tribe_modules_propTypes_default.a.string,
  clientId: external_tribe_modules_propTypes_default.a.string,
  fromDate: external_tribe_modules_propTypes_default.a.instanceOf(Date),
  hasAttendeeInfoFields: external_tribe_modules_propTypes_default.a.bool,
  isBlockSelected: external_tribe_modules_propTypes_default.a.bool,
  isSelected: external_tribe_modules_propTypes_default.a.bool,
  saleWindowLabel: external_tribe_modules_propTypes_default.a.string,
  toDate: external_tribe_modules_propTypes_default.a.instanceOf(Date)
};
/* harmony default export */ var attendee_registration_icons_template = (AttendeeRegistrationIcons);
// CONCATENATED MODULE: ./src/modules/blocks/ticket/container-header/title/attendee-registration-icons/container.js
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */




const {
  select: container_select
} = wp.data;

/**
 * Given a Sale status that is present on the map return a translated label.
 *
 * @param { string } saleStatus The sale status
 * @returns { string } The translated sale window label
 */
const getSaleWindowLabel = saleStatus => {
  if (!saleStatus) {
    return '';
  }
  const labelMap = {
    future: Object(external_wp_i18n_["__"])('Scheduled', 'event-tickets'),
    past: Object(external_wp_i18n_["__"])('Expired', 'event-tickets'),
    onSale: Object(external_wp_i18n_["__"])('On sale', 'event-tickets')
  };
  return labelMap[saleStatus];
};

/**
 * Determine the sale status of the ticket.
 *
 * @since 5.6.7
 * @param { Object } state The redux state
 * @param { Object } ownProps The ownProps of the component
 * @returns { string } Sale status slug.
 */
const getSalesStatus = (state, ownProps) => {
  switch (true) {
    case ticket_selectors_namespaceObject.isTicketFuture(state, ownProps):
      return 'future';
    case ticket_selectors_namespaceObject.isTicketPast(state, ownProps):
      return 'past';
    case ticket_selectors_namespaceObject.isTicketOnSale(state, ownProps):
      return 'onSale';
  }
  return '';
};

/**
 * Given an array of attendee info fields returs a label for the tooltip
 *
 * @param { Array } attendeeInfoFields The attendee info fields array
 * @returns { string } Returns the first 4 attendee fields joined by comma
 */
const getAttendeeInfoFieldsLabel = attendeeInfoFields => {
  if (!Array.isArray(attendeeInfoFields)) {
    return '';
  }
  if (attendeeInfoFields.length === 0) {
    return '';
  }
  return attendeeInfoFields.slice(0, 4).map(attendeeInformationField => attendeeInformationField.label).join(', ');
};
const attendee_registration_icons_container_mapStateToProps = (state, ownProps) => {
  const attendeeInfoFields = ticket_selectors_namespaceObject.getTicketAttendeeInfoFields(state, ownProps);
  const attendeeInfoFieldsLabel = getAttendeeInfoFieldsLabel(attendeeInfoFields);
  const hasAttendeeInfoFields = ticket_selectors_namespaceObject.getTicketHasAttendeeInfoFields(state, ownProps);
  const saleStatus = getSalesStatus(state, ownProps);
  const saleWindowLabel = getSaleWindowLabel(saleStatus);
  const dateFormat = external_tribe_common_utils_["moment"].toFormat(external_tribe_common_utils_["globals"].dateSettings().formats.date);
  const startDateMoment = ticket_selectors_namespaceObject.getTicketTempStartDateMoment(state, ownProps);
  const endDateMoment = ticket_selectors_namespaceObject.getTicketTempEndDateMoment(state, ownProps);
  const fromDate = startDateMoment && startDateMoment.format(dateFormat);
  const toDate = endDateMoment && endDateMoment.format(dateFormat);
  const selectedBlock = container_select('core/editor').getSelectedBlock();
  return {
    attendeeInfoFieldsLabel,
    hasAttendeeInfoFields,
    isBlockSelected: (selectedBlock === null || selectedBlock === void 0 ? void 0 : selectedBlock.name) === 'tribe/tickets',
    fromDate,
    saleWindowLabel,
    toDate
  };
};
/* harmony default export */ var attendee_registration_icons_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(attendee_registration_icons_container_mapStateToProps))(attendee_registration_icons_template));
// EXTERNAL MODULE: ./src/modules/blocks/ticket/container-header/title/style.pcss
var title_style = __webpack_require__("rR/g");

// CONCATENATED MODULE: ./src/modules/blocks/ticket/container-header/title/template.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */


const TicketContainerHeaderTitle = _ref => {
  let {
    clientId,
    title
  } = _ref;
  return wp.element.createElement("div", {
    className: "tribe-editor__ticket__container-header-title"
  }, wp.element.createElement("h3", {
    className: "tribe-editor__ticket__container-header-title-label"
  }, title, wp.element.createElement(attendee_registration_icons_container, {
    clientId: clientId
  })));
};
TicketContainerHeaderTitle.propTypes = {
  clientId: external_tribe_modules_propTypes_default.a.string,
  isDisabled: external_tribe_modules_propTypes_default.a.bool,
  isSelected: external_tribe_modules_propTypes_default.a.bool,
  onTempTitleChange: external_tribe_modules_propTypes_default.a.func,
  tempTitle: external_tribe_modules_propTypes_default.a.string,
  title: external_tribe_modules_propTypes_default.a.string
};
/* harmony default export */ var container_header_title_template = (TicketContainerHeaderTitle);
// EXTERNAL MODULE: ./src/modules/blocks/ticket/container-content/title/styles.pcss
var container_content_title_styles = __webpack_require__("8tO5");

// CONCATENATED MODULE: ./src/modules/blocks/ticket/container-content/title/template.js

/**
 * External dependencies
 */




/**
 * Wordpress dependencies
 */



/**
 * Internal dependencies
 */


class template_Title extends external_React_["PureComponent"] {
  constructor(props) {
    super(props);
    this.id = uniqid_default()('ticket-title');
  }
  render() {
    const {
      isDisabled,
      onTempTitleChange,
      tempTitle
    } = this.props;
    return wp.element.createElement("div", {
      className: external_tribe_modules_classnames_default()('tribe-editor__ticket__title', 'tribe-editor__ticket__content-row', 'tribe-editor__ticket__content-row--title')
    }, wp.element.createElement(external_tribe_common_elements_["LabeledItem"], {
      className: "tribe-editor__ticket__title-label",
      forId: this.id,
      isLabel: true,
      label: Object(external_wp_i18n_["__"])('Ticket name', 'event-tickets')
    }), wp.element.createElement(external_tribe_common_elements_["Input"], {
      className: "tribe-editor__ticket__title-input",
      id: this.id,
      type: "text",
      value: tempTitle,
      onChange: onTempTitleChange,
      disabled: isDisabled
    }));
  }
}
defineProperty_default()(template_Title, "propTypes", {
  isDisabled: external_tribe_modules_propTypes_default.a.bool,
  onTempTitleChange: external_tribe_modules_propTypes_default.a.func.isRequired,
  tempTitle: external_tribe_modules_propTypes_default.a.string
});
/* harmony default export */ var container_content_title_template = (template_Title);
// CONCATENATED MODULE: ./src/modules/blocks/ticket/container-content/title/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */




/**
 * Decodes HTML entities in a given input string and returns the decoded text.
 *
 * @param {string} title - The input string containing HTML entities to be decoded.
 * @returns {string} The decoded text without HTML entities.
 */
function htmlEntityDecode(title) {
  const doc = new DOMParser().parseFromString(title, 'text/html');
  return doc.documentElement.textContent;
}
const container_content_title_container_mapStateToProps = (state, ownProps) => ({
  isDisabled: ticket_selectors_namespaceObject.isTicketDisabled(state, ownProps),
  tempTitle: htmlEntityDecode(ticket_selectors_namespaceObject.getTicketTempTitle(state, ownProps))
});
const container_content_title_container_mapDispatchToProps = (dispatch, ownProps) => ({
  onTempTitleChange: e => {
    const {
      clientId
    } = ownProps;
    dispatch(ticket_actions_namespaceObject.setTicketTempTitle(clientId, e.target.value));
    dispatch(ticket_actions_namespaceObject.setTicketHasChanges(clientId, true));
  }
});
/* harmony default export */ var container_content_title_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(container_content_title_container_mapStateToProps, container_content_title_container_mapDispatchToProps))(container_content_title_template));
// CONCATENATED MODULE: ./src/modules/blocks/ticket/container-header/title/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



/* eslint-disable-next-line max-len */

const container_header_title_container_mapStateToProps = (state, ownProps) => ({
  hasAttendeeInfoFields: ticket_selectors_namespaceObject.getTicketHasAttendeeInfoFields(state, ownProps),
  isDisabled: ticket_selectors_namespaceObject.isTicketDisabled(state, ownProps),
  tempTitle: htmlEntityDecode(ticket_selectors_namespaceObject.getTicketTempTitle(state, ownProps)),
  title: htmlEntityDecode(ticket_selectors_namespaceObject.getTicketTitle(state, ownProps))
});
const container_header_title_container_mapDispatchToProps = (dispatch, ownProps) => ({
  onTempTitleChange: e => {
    const {
      clientId
    } = ownProps;
    dispatch(ticket_actions_namespaceObject.setTicketTempTitle(clientId, e.target.value));
    dispatch(ticket_actions_namespaceObject.setTicketHasChanges(clientId, true));
  }
});
/* harmony default export */ var container_header_title_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(container_header_title_container_mapStateToProps, container_header_title_container_mapDispatchToProps))(container_header_title_template));
// EXTERNAL MODULE: ./node_modules/react-textarea-autosize/dist/react-textarea-autosize.esm.browser.js + 5 modules
var react_textarea_autosize_esm_browser = __webpack_require__("o5PN");

// EXTERNAL MODULE: ./src/modules/blocks/ticket/container-header/description/style.pcss
var description_style = __webpack_require__("5f0I");

// CONCATENATED MODULE: ./src/modules/blocks/ticket/container-header/description/template.js
/**
 * External dependencies
 */




/**
 * Wordpress dependencies
 */


/**
 * Internal dependencies
 */

const TicketContainerHeaderDescription = _ref => {
  let {
    isDisabled,
    isSelected,
    onTempDescriptionChange,
    tempDescription,
    description
  } = _ref;
  return isSelected ? wp.element.createElement(react_textarea_autosize_esm_browser["a" /* default */], {
    className: "tribe-editor__ticket__container-header-description-input",
    value: tempDescription,
    placeholder: Object(external_wp_i18n_["__"])('Description', 'event-tickets'),
    onChange: onTempDescriptionChange,
    disabled: isDisabled
  }) : wp.element.createElement("span", {
    className: "tribe-editor__ticket__container-header-description"
  }, description);
};
TicketContainerHeaderDescription.propTypes = {
  isDisabled: external_tribe_modules_propTypes_default.a.bool,
  isSelected: external_tribe_modules_propTypes_default.a.bool,
  onTempDescriptionChange: external_tribe_modules_propTypes_default.a.func,
  tempDescription: external_tribe_modules_propTypes_default.a.string,
  description: external_tribe_modules_propTypes_default.a.string
};
/* harmony default export */ var container_header_description_template = (TicketContainerHeaderDescription);
// CONCATENATED MODULE: ./src/modules/blocks/ticket/container-header/description/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



const container_header_description_container_mapStateToProps = (state, ownProps) => ({
  isDisabled: ticket_selectors_namespaceObject.isTicketDisabled(state, ownProps),
  tempDescription: ticket_selectors_namespaceObject.getTicketTempDescription(state, ownProps),
  description: ticket_selectors_namespaceObject.getTicketDescription(state, ownProps)
});
const container_header_description_container_mapDispatchToProps = (dispatch, ownProps) => ({
  onTempDescriptionChange: e => {
    const {
      clientId
    } = ownProps;
    dispatch(ticket_actions_namespaceObject.setTicketTempDescription(clientId, e.target.value));
    dispatch(ticket_actions_namespaceObject.setTicketHasChanges(clientId, true));
  }
});
/* harmony default export */ var container_header_description_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(container_header_description_container_mapStateToProps, container_header_description_container_mapDispatchToProps))(container_header_description_template));
// EXTERNAL MODULE: ./node_modules/react-number-format/dist/react-number-format.es.js
var react_number_format_es = __webpack_require__("aZ9c");

// EXTERNAL MODULE: ./src/modules/blocks/ticket/container-header/price/style.pcss
var price_style = __webpack_require__("+N9A");

// CONCATENATED MODULE: ./src/modules/blocks/ticket/container-header/price/template.js


function template_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function template_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? template_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : template_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * External dependencies
 */




/**
 * Wordpress dependencies
 */


/**
 * Internal dependencies
 */


const TicketContainerHeaderPriceLabel = _ref => {
  let {
    available,
    currencyDecimalPoint,
    currencyNumberOfDecimals,
    currencyThousandsSep,
    currencyPosition,
    currencySymbol,
    isUnlimited,
    price
  } = _ref;
  const getAvailableLabel = () => isUnlimited ? Object(external_wp_i18n_["__"])('unlimited', 'event-tickets') : wp.element.createElement(external_React_default.a.Fragment, null, wp.element.createElement("span", {
    className: "tribe-editor__ticket__container-header-label__available"
  }, available), Object(external_wp_i18n_["__"])('available', 'event-tickets'));
  const numericFormatProps = template_objectSpread(template_objectSpread({}, currencyPosition === PREFIX && {
    prefix: currencySymbol
  }), currencyPosition === SUFFIX && {
    suffix: currencySymbol
  });
  return wp.element.createElement(external_React_["Fragment"], null, wp.element.createElement(react_number_format_es["a" /* NumericFormat */], extends_default()({
    allowNegative: false,
    decimalScale: currencyNumberOfDecimals,
    decimalSeparator: currencyDecimalPoint,
    displayType: "text",
    fixedDecimalScale: true
  }, numericFormatProps, {
    thousandSeparator: currencyThousandsSep,
    value: price
  })), wp.element.createElement("div", {
    className: "tribe-editor__ticket__container-header-label"
  }, getAvailableLabel()));
};
TicketContainerHeaderPriceLabel.propTypes = {
  available: external_tribe_modules_propTypes_default.a.number,
  currencyDecimalPoint: external_tribe_modules_propTypes_default.a.string,
  currencyNumberOfDecimals: external_tribe_modules_propTypes_default.a.number,
  currencyPosition: external_tribe_modules_propTypes_default.a.oneOf(PRICE_POSITIONS),
  currencySymbol: external_tribe_modules_propTypes_default.a.string,
  currencyThousandsSep: external_tribe_modules_propTypes_default.a.string,
  isUnlimited: external_tribe_modules_propTypes_default.a.bool,
  price: external_tribe_modules_propTypes_default.a.string
};
const TicketContainerHeaderPrice = _ref2 => {
  let {
    available,
    currencyDecimalPoint,
    currencyNumberOfDecimals,
    currencyPosition,
    currencySymbol,
    currencyThousandsSep,
    isUnlimited,
    price
  } = _ref2;
  return wp.element.createElement("div", {
    className: "tribe-editor__ticket__container-header-price"
  }, wp.element.createElement(TicketContainerHeaderPriceLabel, {
    available: available,
    currencyDecimalPoint: currencyDecimalPoint,
    currencyNumberOfDecimals: currencyNumberOfDecimals,
    currencyPosition: currencyPosition,
    currencySymbol: currencySymbol,
    currencyThousandsSep: currencyThousandsSep,
    isUnlimited: isUnlimited,
    price: price
  }));
};
TicketContainerHeaderPrice.propTypes = {
  available: external_tribe_modules_propTypes_default.a.number,
  currencyDecimalPoint: external_tribe_modules_propTypes_default.a.string,
  currencyNumberOfDecimals: external_tribe_modules_propTypes_default.a.number,
  currencyPosition: external_tribe_modules_propTypes_default.a.oneOf(PRICE_POSITIONS),
  currencySymbol: external_tribe_modules_propTypes_default.a.string,
  currencyThousandsSep: external_tribe_modules_propTypes_default.a.string,
  isDisabled: external_tribe_modules_propTypes_default.a.bool,
  isSelected: external_tribe_modules_propTypes_default.a.bool,
  isUnlimited: external_tribe_modules_propTypes_default.a.bool,
  onTempPriceChange: external_tribe_modules_propTypes_default.a.func,
  price: external_tribe_modules_propTypes_default.a.string,
  tempPrice: external_tribe_modules_propTypes_default.a.string
};
/* harmony default export */ var price_template = (TicketContainerHeaderPrice);
// CONCATENATED MODULE: ./src/modules/blocks/ticket/container-header/price/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



const price_container_mapStateToProps = (state, ownProps) => ({
  available: ticket_selectors_namespaceObject.getTicketAvailable(state, ownProps),
  currencyDecimalPoint: ticket_selectors_namespaceObject.getTicketCurrencyDecimalPoint(state, ownProps),
  currencyNumberOfDecimals: ticket_selectors_namespaceObject.getTicketCurrencyNumberOfDecimals(state, ownProps),
  currencyPosition: ticket_selectors_namespaceObject.getTicketCurrencyPosition(state, ownProps),
  currencySymbol: ticket_selectors_namespaceObject.getTicketCurrencySymbol(state, ownProps),
  currencyThousandsSep: ticket_selectors_namespaceObject.getTicketCurrencyThousandsSep(state, ownProps),
  isDisabled: ticket_selectors_namespaceObject.isTicketDisabled(state, ownProps),
  isUnlimited: ticket_selectors_namespaceObject.isUnlimitedTicket(state, ownProps),
  price: ticket_selectors_namespaceObject.getTicketPrice(state, ownProps) || '0',
  tempPrice: ticket_selectors_namespaceObject.getTicketTempPrice(state, ownProps)
});
const price_container_mapDispatchToProps = (dispatch, ownProps) => ({
  onTempPriceChange: e => {
    const {
      clientId
    } = ownProps;
    dispatch(ticket_actions_namespaceObject.setTicketTempPrice(clientId, e.target.value));
    dispatch(ticket_actions_namespaceObject.setTicketHasChanges(clientId, true));
  }
});
/* harmony default export */ var price_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(price_container_mapStateToProps, price_container_mapDispatchToProps))(price_template));
// EXTERNAL MODULE: ./src/modules/blocks/ticket/container-header/quantity/quantity-bar/style.pcss
var quantity_bar_style = __webpack_require__("qxFF");

// CONCATENATED MODULE: ./src/modules/blocks/ticket/container-header/quantity/quantity-bar/bar.js
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */

const Bar = _ref => {
  let {
    children,
    className,
    value,
    total
  } = _ref;
  if (value === 0 || total === 0) {
    return null;
  }
  let valuePercentage;
  try {
    valuePercentage = external_tribe_common_utils_["number"].percentage(value, total);
  } catch (e) {
    valuePercentage = 0;
  }

  // Prevent numbers above 100 and below 0
  const limitedValuePercentage = Math.max(0, Math.min(100, valuePercentage));
  const style = {
    width: `${limitedValuePercentage.toFixed(2)}%`
  };
  return wp.element.createElement("span", {
    className: external_tribe_modules_classnames_default()('tribe-editor__quantity-bar__bar', className),
    style: style
  }, children);
};
Bar.propTypes = {
  children: external_tribe_modules_propTypes_default.a.node,
  className: external_tribe_modules_propTypes_default.a.oneOfType([external_tribe_modules_propTypes_default.a.string, external_tribe_modules_propTypes_default.a.arrayOf(external_tribe_modules_propTypes_default.a.string), external_tribe_common_utils_["TribePropTypes"].nullType]),
  value: external_tribe_modules_propTypes_default.a.number,
  total: external_tribe_modules_propTypes_default.a.number
};
Bar.defaultProps = {
  className: null,
  value: 0,
  total: 0
};
/* harmony default export */ var bar = (Bar);
// CONCATENATED MODULE: ./src/modules/blocks/ticket/container-header/quantity/quantity-bar/element.js
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */



// todo: add tooltip into the capacity bar
const QuantityBar = _ref => {
  let {
    sharedSold,
    sold,
    capacity,
    total,
    isDisabled
  } = _ref;
  return wp.element.createElement("div", {
    className: "tribe-editor__quantity-bar"
  }, !isDisabled && wp.element.createElement(external_React_["Fragment"], null, wp.element.createElement(bar, {
    className: "tribe-editor__quantity-bar__bar--shared-sold",
    value: sharedSold,
    total: total
  }), wp.element.createElement(bar, {
    className: "tribe-editor__quantity-bar__bar--sold",
    value: sold,
    total: total
  }), !!capacity && !(capacity === total) && wp.element.createElement(bar, {
    className: "tribe-editor__quantity-bar__bar--capacity",
    value: capacity,
    total: total
  }, wp.element.createElement("span", {
    className: "tribe-editor__quantity-bar__bar-label"
  }, Object(external_wp_i18n_["__"])('cap', 'event-tickets')))));
};
QuantityBar.propTypes = {
  sharedSold: external_tribe_modules_propTypes_default.a.number,
  capacity: external_tribe_modules_propTypes_default.a.number,
  sold: external_tribe_modules_propTypes_default.a.number,
  total: external_tribe_modules_propTypes_default.a.number,
  isDisabled: external_tribe_modules_propTypes_default.a.bool
};
QuantityBar.defaultProps = {
  sharedSold: 0,
  capacity: 0,
  sold: 0,
  total: 0,
  isDisabled: false
};
/* harmony default export */ var quantity_bar_element = (QuantityBar);
// EXTERNAL MODULE: ./src/modules/blocks/ticket/container-header/quantity/style.pcss
var quantity_style = __webpack_require__("M1s2");

// CONCATENATED MODULE: ./src/modules/blocks/ticket/container-header/quantity/template.js
/**
 * External dependencies
 */



/**
 * Wordpress dependencies
 */


/**
 * Internal dependencies
 */



const template_TicketContainerHeaderDescription = _ref => {
  let {
    isDisabled,
    isSelected,
    isShared,
    isUnlimited,
    sold,
    capacity,
    sharedSold,
    sharedCapacity
  } = _ref;
  const total = isShared ? sharedCapacity : capacity;
  const getLabel = () => Object(external_wp_i18n_["sprintf"])(Object(external_wp_i18n_["__"])('%d sold', 'event-tickets'), sold);

  /* eslint-disable max-len */
  const getQuantityBar = () => isUnlimited ? wp.element.createElement("span", {
    className: "tribe-editor__ticket__container-header-quantity-unlimited tribe-editor__ticket__container-header-label"
  }, Object(external_wp_i18n_["__"])('unlimited', 'event-tickets')) : wp.element.createElement(quantity_bar_element, {
    sold: sold,
    sharedSold: sharedSold,
    capacity: capacity,
    total: total,
    isDisabled: isDisabled
  });
  /* eslint-enable max-len */

  return !isSelected && wp.element.createElement("div", {
    className: "tribe-editor__ticket__container-header-quantity"
  }, wp.element.createElement("span", {
    className: "tribe-editor__ticket__container-header-quantity-label"
  }, getLabel(), wp.element.createElement(icon_with_tooltip
  /* eslint-disable-next-line max-len */, {
    propertyName: Object(external_wp_i18n_["__"])('This pertains to Orders that have been marked Completed.', 'event-tickets'),
    icon: wp.element.createElement("span", {
      className: "dashicons dashicons-info-outline"
    })
  })), getQuantityBar());
};
template_TicketContainerHeaderDescription.propTypes = {
  isDisabled: external_tribe_modules_propTypes_default.a.bool,
  isSelected: external_tribe_modules_propTypes_default.a.bool,
  isShared: external_tribe_modules_propTypes_default.a.bool,
  isUnlimited: external_tribe_modules_propTypes_default.a.bool,
  sold: external_tribe_modules_propTypes_default.a.number,
  capacity: external_tribe_modules_propTypes_default.a.number,
  sharedSold: external_tribe_modules_propTypes_default.a.number,
  sharedCapacity: external_tribe_modules_propTypes_default.a.number
};
template_TicketContainerHeaderDescription.defaultProps = {
  sold: 0,
  sharedCapacity: 0,
  capacity: 0
};
/* harmony default export */ var quantity_template = (template_TicketContainerHeaderDescription);
// CONCATENATED MODULE: ./src/modules/blocks/ticket/container-header/quantity/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



const getSharedSold = (state, isShared) => isShared ? ticket_selectors_namespaceObject.getSharedTicketsSold(state) : 0;
const quantity_container_mapStateToProps = (state, ownProps) => {
  const isShared = ticket_selectors_namespaceObject.isSharedTicket(state, ownProps);
  return {
    isDisabled: ticket_selectors_namespaceObject.isTicketDisabled(state, ownProps),
    isShared,
    isUnlimited: ticket_selectors_namespaceObject.isUnlimitedTicket(state, ownProps),
    sold: ticket_selectors_namespaceObject.getTicketSold(state, ownProps),
    capacity: ticket_selectors_namespaceObject.getTicketCapacityInt(state, ownProps),
    sharedSold: getSharedSold(state, isShared),
    sharedCapacity: ticket_selectors_namespaceObject.getTicketsSharedCapacityInt(state)
  };
};
/* harmony default export */ var quantity_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(quantity_container_mapStateToProps))(quantity_template));
// EXTERNAL MODULE: ./src/modules/blocks/ticket/container-header/style.pcss
var ticket_container_header_style = __webpack_require__("L6gL");

// CONCATENATED MODULE: ./src/modules/blocks/ticket/container-header/template.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */





const TicketContainerHeader = _ref => {
  let {
    clientId,
    isSelected
  } = _ref;
  if (isSelected) {
    return null;
  }
  return wp.element.createElement(external_React_["Fragment"], null, wp.element.createElement("div", {
    className: "tribe-editor__ticket__container-header-details"
  }, wp.element.createElement(container_header_title_container, {
    clientId: clientId,
    isSelected: isSelected
  }), wp.element.createElement(container_header_description_container, {
    clientId: clientId,
    isSelected: isSelected
  })), wp.element.createElement(price_container, {
    clientId: clientId,
    isSelected: isSelected
  }), wp.element.createElement(quantity_container, {
    clientId: clientId,
    isSelected: isSelected
  }));
};
TicketContainerHeader.propTypes = {
  clientId: external_tribe_modules_propTypes_default.a.string,
  isSelected: external_tribe_modules_propTypes_default.a.bool
};
/* harmony default export */ var ticket_container_header_template = (TicketContainerHeader);
// EXTERNAL MODULE: external "tribe.common.data.plugins.proptypes"
var external_tribe_common_data_plugins_proptypes_ = __webpack_require__("fPIz");

// EXTERNAL MODULE: ./src/modules/blocks/ticket/container-content/capacity/style.pcss
var capacity_style = __webpack_require__("tGAO");

// CONCATENATED MODULE: ./src/modules/blocks/ticket/container-content/capacity/template.js




const capacity_template_excluded = ["className", "id", "label"];
/**
 * External dependencies
 */





/**
 * Wordpress dependencies
 */



/**
 * Internal dependencies
 */





const {
  INDEPENDENT: template_INDEPENDENT,
  SHARED: template_SHARED,
  TICKET_TYPES: template_TICKET_TYPES
} = constants_namespaceObject;
const {
  CAPACITY_TYPE_OPTIONS: template_CAPACITY_TYPE_OPTIONS
} = options_namespaceObject;

// Custom input for this type of form
const LabeledNumberInput = _ref => {
  let {
      className,
      id,
      label
    } = _ref,
    props = objectWithoutProperties_default()(_ref, capacity_template_excluded);
  return wp.element.createElement(external_tribe_common_elements_["LabeledItem"], {
    className: external_tribe_modules_classnames_default()('tribe-editor__labeled-number-input', className),
    forId: id,
    label: label,
    isLabel: true
  }, wp.element.createElement(external_tribe_common_elements_["NumberInput"], props));
};
LabeledNumberInput.propTypes = {
  className: external_tribe_modules_propTypes_default.a.string,
  id: external_tribe_modules_propTypes_default.a.string,
  label: external_tribe_modules_propTypes_default.a.string
};
class template_Capacity extends external_React_["PureComponent"] {
  constructor(props) {
    super(props);
    defineProperty_default()(this, "getInputs", () => {
      const {
        isDisabled,
        sharedCapacity,
        tempCapacityType,
        tempCapacity,
        tempSharedCapacity,
        onTempCapacityChange,
        onTempSharedCapacityChange
      } = this.props;
      const inputs = [];
      const handleTempSharedCapacityChange = e => {
        if (e.target.value === '' || e.target.value > 0) {
          onTempSharedCapacityChange(e);
        }
      };
      const handleTempCapacityChange = (e, max) => {
        if (e.target.value === '' || e.target.value > 0) {
          if (max === undefined) {
            onTempCapacityChange(e);
          } else if (e.target.value <= max) {
            onTempCapacityChange(e);
          }
        }
      };

      // If capacity type is shared and does not have shared capacity
      if (tempCapacityType === template_TICKET_TYPES[template_SHARED] && sharedCapacity === '') {
        inputs.push(wp.element.createElement(LabeledNumberInput, {
          key: "shared-capacity",
          className: external_tribe_modules_classnames_default()('tribe-editor__ticket__capacity-input-row', 'tribe-editor__ticket__capacity-input-row--shared-capacity'),
          id: this.ids.sharedCapacity,
          label: Object(external_wp_i18n_["__"])('Set shared capacity:', 'event-tickets'),
          value: tempSharedCapacity,
          onChange: handleTempSharedCapacityChange,
          disabled: isDisabled,
          min: 0,
          required: true
        }));
      }

      // If capacity type is shared or independent
      if (external_lodash_includes_default()([template_TICKET_TYPES[template_SHARED], template_TICKET_TYPES[template_INDEPENDENT]], tempCapacityType)) {
        const extraProps = {};
        const ticketType = tempCapacityType === template_TICKET_TYPES[template_SHARED] ? template_SHARED : template_INDEPENDENT;
        if (tempCapacityType === template_TICKET_TYPES[template_SHARED] && (sharedCapacity || tempSharedCapacity)) {
          const max = sharedCapacity ? sharedCapacity : tempSharedCapacity;
          extraProps.max = parseInt(max, 10) || 0;
        }
        if (tempCapacityType === template_TICKET_TYPES[template_INDEPENDENT]) {
          extraProps.required = true;
        }
        extraProps.label = tempCapacityType === template_TICKET_TYPES[template_SHARED] ? Object(external_wp_i18n_["__"])('Limit sales of this ticket to:', 'event-tickets') : Object(external_wp_i18n_["__"])('Number of tickets available', 'event-tickets');
        inputs.push(wp.element.createElement(LabeledNumberInput, extends_default()({
          key: "capacity",
          className: external_tribe_modules_classnames_default()('tribe-editor__ticket__capacity-input-row', 'tribe-editor__ticket__capacity-input-row--capacity', `tribe-editor__ticket__capacity-input-row--capacity-${ticketType}`),
          id: this.ids.capacity,
          value: tempCapacity,
          onChange: e => handleTempCapacityChange(e, extraProps === null || extraProps === void 0 ? void 0 : extraProps.max),
          disabled: isDisabled,
          min: 0
        }, extraProps)));
      }
      return inputs;
    });
    defineProperty_default()(this, "getCapacityForm", () => {
      const {
        isDisabled,
        tempCapacityTypeOption,
        onTempCapacityTypeChange
      } = this.props;
      return wp.element.createElement(external_React_["Fragment"], null, wp.element.createElement(external_tribe_common_elements_["Select"], {
        id: this.ids.select,
        className: "tribe-editor__ticket__capacity-type-select",
        backspaceRemovesValue: false,
        value: tempCapacityTypeOption,
        isSearchable: false,
        isDisabled: isDisabled,
        options: template_CAPACITY_TYPE_OPTIONS,
        onChange: onTempCapacityTypeChange
      }), this.getInputs());
    });
    defineProperty_default()(this, "getNoPlusCapacityForm", () => {
      const {
        isDisabled,
        tempCapacity,
        onTempCapacityNoPlusChange
      } = this.props;
      return wp.element.createElement(external_React_["Fragment"], null, wp.element.createElement(external_tribe_common_elements_["NumberInput"], {
        className: "tribe-editor__ticket__capacity-input",
        id: this.ids.capacity,
        value: tempCapacity,
        onChange: onTempCapacityNoPlusChange,
        disabled: isDisabled,
        min: 0
      }), wp.element.createElement("span", {
        className: "tribe-editor__ticket__capacity-input-helper-text"
      }, Object(external_wp_i18n_["__"])('Leave blank for unlimited', 'event-tickets')));
    });
    this.ids = {
      select: uniqid_default()('capacity-type-'),
      capacity: uniqid_default()('capacity-'),
      sharedCapacity: uniqid_default()('shared-capacity-')
    };
  }
  render() {
    const {
      hasTicketsPlus
    } = this.props;
    return wp.element.createElement("div", {
      className: external_tribe_modules_classnames_default()('tribe-editor__ticket__capacity', 'tribe-editor__ticket__content-row', 'tribe-editor__ticket__content-row--capacity')
    }, wp.element.createElement(label_with_tooltip, {
      className: "tribe-editor__ticket__capacity-label-with-tooltip",
      forId: hasTicketsPlus ? this.ids.select : this.ids.capacity,
      isLabel: true,
      label: Object(external_wp_i18n_["__"])('Ticket Capacity', 'event-tickets'),
      tooltipText: Object(external_wp_i18n_["__"])('Ticket capacity will only be used by attendees buying this ticket type', 'event-tickets'),
      tooltipLabel: wp.element.createElement(external_wp_components_["Dashicon"], {
        className: "tribe-editor__ticket__tooltip-label",
        icon: "info-outline"
      })
    }), wp.element.createElement("div", {
      className: "tribe-editor__ticket__capacity-form"
    }, hasTicketsPlus ? this.getCapacityForm() : this.getNoPlusCapacityForm()));
  }
}
defineProperty_default()(template_Capacity, "propTypes", {
  hasTicketsPlus: external_tribe_modules_propTypes_default.a.bool,
  isDisabled: external_tribe_modules_propTypes_default.a.bool,
  sharedCapacity: external_tribe_modules_propTypes_default.a.string,
  tempCapacity: external_tribe_modules_propTypes_default.a.string,
  tempCapacityType: external_tribe_modules_propTypes_default.a.string,
  tempCapacityTypeOption: external_tribe_common_data_plugins_proptypes_["ReactSelectOption"],
  tempSharedCapacity: external_tribe_modules_propTypes_default.a.string,
  onTempCapacityChange: external_tribe_modules_propTypes_default.a.func,
  onTempCapacityNoPlusChange: external_tribe_modules_propTypes_default.a.func,
  onTempCapacityTypeChange: external_tribe_modules_propTypes_default.a.func,
  onTempSharedCapacityChange: external_tribe_modules_propTypes_default.a.func
});
/* harmony default export */ var container_content_capacity_template = (template_Capacity);
// CONCATENATED MODULE: ./src/modules/blocks/ticket/container-content/capacity/container.js
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */




const {
  UNLIMITED: container_UNLIMITED,
  INDEPENDENT: container_INDEPENDENT,
  TICKET_TYPES: container_TICKET_TYPES
} = constants_namespaceObject;
const container_content_capacity_container_mapStateToProps = (state, ownProps) => ({
  hasTicketsPlus: external_tribe_common_data_["plugins"].selectors.hasPlugin(state)(external_tribe_common_data_["plugins"].constants.TICKETS_PLUS),
  isDisabled: ticket_selectors_namespaceObject.isTicketDisabled(state, ownProps),
  sharedCapacity: ticket_selectors_namespaceObject.getTicketsSharedCapacity(state),
  tempCapacity: ticket_selectors_namespaceObject.getTicketTempCapacity(state, ownProps),
  tempCapacityType: ticket_selectors_namespaceObject.getTicketTempCapacityType(state, ownProps),
  tempCapacityTypeOption: ticket_selectors_namespaceObject.getTicketTempCapacityTypeOption(state, ownProps),
  tempSharedCapacity: ticket_selectors_namespaceObject.getTicketsTempSharedCapacity(state)
});
const container_content_capacity_container_mapDispatchToProps = (dispatch, ownProps) => {
  const {
    clientId
  } = ownProps;
  return {
    onTempCapacityChange: e => {
      dispatch(ticket_actions_namespaceObject.setTicketTempCapacity(clientId, e.target.value));
      dispatch(ticket_actions_namespaceObject.setTicketHasChanges(clientId, true));
    },
    onTempCapacityNoPlusChange: e => {
      const capacity = e.target.value;
      const capacityType = external_lodash_trim_default()(capacity) === '' ? container_TICKET_TYPES[container_UNLIMITED] : container_TICKET_TYPES[container_INDEPENDENT];
      dispatch(ticket_actions_namespaceObject.setTicketTempCapacityType(clientId, capacityType));
      dispatch(ticket_actions_namespaceObject.setTicketTempCapacity(clientId, capacity));
      dispatch(ticket_actions_namespaceObject.setTicketHasChanges(clientId, true));
    },
    onTempCapacityTypeChange: selectedOption => {
      dispatch(ticket_actions_namespaceObject.setTicketTempCapacityType(clientId, selectedOption.value));
      dispatch(ticket_actions_namespaceObject.setTicketHasChanges(clientId, true));
    },
    onTempSharedCapacityChange: e => {
      dispatch(ticket_actions_namespaceObject.setTicketsTempSharedCapacity(e.target.value));
      dispatch(ticket_actions_namespaceObject.setTicketHasChanges(clientId, true));
    }
  };
};
/* harmony default export */ var container_content_capacity_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(container_content_capacity_container_mapStateToProps, container_content_capacity_container_mapDispatchToProps))(container_content_capacity_template));
// EXTERNAL MODULE: ./src/modules/blocks/ticket/container-content/duration/style.pcss
var container_content_duration_style = __webpack_require__("eVJ4");

// CONCATENATED MODULE: ./src/modules/blocks/ticket/container-content/duration/template.js


const duration_template_excluded = ["hasDurationError"];
/**
 * External dependencies
 */




/**
 * Wordpress dependencies
 */



/**
 * Internal dependencies
 */


const TicketDuration = _ref => {
  let {
      hasDurationError
    } = _ref,
    props = objectWithoutProperties_default()(_ref, duration_template_excluded);
  return wp.element.createElement("div", {
    className: external_tribe_modules_classnames_default()('tribe-editor__ticket__duration', 'tribe-editor__ticket__content-row', 'tribe-editor__ticket__content-row--duration')
  }, wp.element.createElement(label_with_tooltip, {
    className: "tribe-editor__ticket__duration-label-with-tooltip",
    label: Object(external_wp_i18n_["__"])('Sale Duration', 'event-tickets'),
    tooltipText: Object(external_wp_i18n_["__"])('If you do not set a start sale date, tickets will be available immediately.', 'event-tickets'),
    tooltipLabel: wp.element.createElement(external_wp_components_["Dashicon"], {
      className: "tribe-editor__ticket__tooltip-label",
      icon: "info-outline"
    })
  }), wp.element.createElement(date_time_range_picker, extends_default()({
    className: "tribe-editor__ticket__duration-picker"
  }, props)), hasDurationError && wp.element.createElement("span", {
    className: "tribe-editor__ticket__duration-error"
  }, Object(external_wp_i18n_["__"])('There is an error with the selected sales duration. Please fix the issue before saving.',
  // eslint-disable-line max-len
  'event-tickets')));
};
TicketDuration.propTypes = {
  fromDate: external_tribe_modules_propTypes_default.a.instanceOf(Date),
  fromDateInput: external_tribe_modules_propTypes_default.a.string,
  fromDateDisabled: external_tribe_modules_propTypes_default.a.bool,
  fromTime: external_tribe_modules_propTypes_default.a.string,
  fromTimeDisabled: external_tribe_modules_propTypes_default.a.bool,
  hasDurationError: external_tribe_modules_propTypes_default.a.bool,
  onFromDateChange: external_tribe_modules_propTypes_default.a.func,
  onFromTimePickerBlur: external_tribe_modules_propTypes_default.a.func,
  onFromTimePickerChange: external_tribe_modules_propTypes_default.a.func,
  onFromTimePickerClick: external_tribe_modules_propTypes_default.a.func,
  onToDateChange: external_tribe_modules_propTypes_default.a.func,
  onToTimePickerBlur: external_tribe_modules_propTypes_default.a.func,
  onToTimePickerChange: external_tribe_modules_propTypes_default.a.func,
  onToTimePickerClick: external_tribe_modules_propTypes_default.a.func,
  toDate: external_tribe_modules_propTypes_default.a.instanceOf(Date),
  toDateInput: external_tribe_modules_propTypes_default.a.string,
  toDateDisabled: external_tribe_modules_propTypes_default.a.bool,
  toTime: external_tribe_modules_propTypes_default.a.string,
  toTimeDisabled: external_tribe_modules_propTypes_default.a.bool
};
/* harmony default export */ var container_content_duration_template = (TicketDuration);
// CONCATENATED MODULE: ./src/modules/blocks/ticket/container-content/duration/container.js


const duration_container_excluded = ["state"],
  container_excluded2 = ["dispatch"];
function duration_container_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function duration_container_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? duration_container_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : duration_container_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */




const duration_container_onFromDateChange = (dispatch, ownProps) => (date, modifiers, dayPickerInput) => {
  dispatch(ticket_actions_namespaceObject.handleTicketStartDate(ownProps.clientId, date, dayPickerInput));
};
const duration_container_onFromTimePickerChange = (dispatch, ownProps) => e => {
  dispatch(ticket_actions_namespaceObject.setTicketTempStartTimeInput(ownProps.clientId, e.target.value));
};
const duration_container_onFromTimePickerClick = (dispatch, ownProps) => (value, onClose) => {
  dispatch(ticket_actions_namespaceObject.handleTicketStartTime(ownProps.clientId, value));
  onClose();
};
const duration_container_onToDateChange = (dispatch, ownProps) => (date, modifiers, dayPickerInput) => {
  dispatch(ticket_actions_namespaceObject.handleTicketEndDate(ownProps.clientId, date, dayPickerInput));
};
const duration_container_onToTimePickerChange = (dispatch, ownProps) => e => {
  dispatch(ticket_actions_namespaceObject.setTicketTempEndTimeInput(ownProps.clientId, e.target.value));
};
const duration_container_onToTimePickerClick = (dispatch, ownProps) => (value, onClose) => {
  dispatch(ticket_actions_namespaceObject.handleTicketEndTime(ownProps.clientId, value));
  onClose();
};
const duration_container_onFromTimePickerBlur = (state, dispatch, ownProps) => e => {
  let startTimeMoment = external_tribe_common_utils_["moment"].toMoment(e.target.value, external_tribe_common_utils_["moment"].TIME_FORMAT, false);
  if (!startTimeMoment.isValid()) {
    const startTimeInput = ticket_selectors_namespaceObject.getTicketStartTimeInput(state, ownProps);
    startTimeMoment = external_tribe_common_utils_["moment"].toMoment(startTimeInput, external_tribe_common_utils_["moment"].TIME_FORMAT, false);
  }
  const seconds = external_tribe_common_utils_["moment"].totalSeconds(startTimeMoment);
  dispatch(ticket_actions_namespaceObject.handleTicketStartTime(ownProps.clientId, seconds));
};
const duration_container_onToTimePickerBlur = (state, dispatch, ownProps) => e => {
  let endTimeMoment = external_tribe_common_utils_["moment"].toMoment(e.target.value, external_tribe_common_utils_["moment"].TIME_FORMAT, false);
  if (!endTimeMoment.isValid()) {
    const endTimeInput = ticket_selectors_namespaceObject.getTicketEndTimeInput(state, ownProps);
    endTimeMoment = external_tribe_common_utils_["moment"].toMoment(endTimeInput, external_tribe_common_utils_["moment"].TIME_FORMAT, false);
  }
  const seconds = external_tribe_common_utils_["moment"].totalSeconds(endTimeMoment);
  dispatch(ticket_actions_namespaceObject.handleTicketEndTime(ownProps.clientId, seconds));
};
const container_content_duration_container_mapStateToProps = (state, ownProps) => {
  const datePickerFormat = external_tribe_common_utils_["globals"].tecDateSettings().datepickerFormat ? external_tribe_common_utils_["moment"].toFormat(external_tribe_common_utils_["globals"].tecDateSettings().datepickerFormat) : 'LL';
  const isDisabled = ticket_selectors_namespaceObject.isTicketDisabled(state, ownProps);
  const startDateMoment = ticket_selectors_namespaceObject.getTicketTempStartDateMoment(state, ownProps);
  const endDateMoment = ticket_selectors_namespaceObject.getTicketTempEndDateMoment(state, ownProps);
  const fromDate = startDateMoment && startDateMoment.toDate();
  const toDate = endDateMoment && endDateMoment.toDate();
  return {
    fromDate,
    fromDateInput: ticket_selectors_namespaceObject.getTicketTempStartDateInput(state, ownProps),
    fromDateDisabled: isDisabled,
    fromDateFormat: datePickerFormat,
    fromTime: ticket_selectors_namespaceObject.getTicketTempStartTimeInput(state, ownProps),
    fromTimeDisabled: isDisabled,
    hasDurationError: ticket_selectors_namespaceObject.getTicketHasDurationError(state, ownProps),
    toDate,
    toDateInput: ticket_selectors_namespaceObject.getTicketTempEndDateInput(state, ownProps),
    toDateDisabled: isDisabled,
    toDateFormat: datePickerFormat,
    toTime: ticket_selectors_namespaceObject.getTicketTempEndTimeInput(state, ownProps),
    toTimeDisabled: isDisabled,
    state
  };
};
const duration_container_mapDispatchToProps = (dispatch, ownProps) => ({
  onFromDateChange: duration_container_onFromDateChange(dispatch, ownProps),
  onFromTimePickerChange: duration_container_onFromTimePickerChange(dispatch, ownProps),
  onFromTimePickerClick: duration_container_onFromTimePickerClick(dispatch, ownProps),
  onToDateChange: duration_container_onToDateChange(dispatch, ownProps),
  onToTimePickerChange: duration_container_onToTimePickerChange(dispatch, ownProps),
  onToTimePickerClick: duration_container_onToTimePickerClick(dispatch, ownProps),
  dispatch
});
const duration_container_mergeProps = (stateProps, dispatchProps, ownProps) => {
  const {
      state
    } = stateProps,
    restStateProps = objectWithoutProperties_default()(stateProps, duration_container_excluded);
  const {
      dispatch
    } = dispatchProps,
    restDispatchProps = objectWithoutProperties_default()(dispatchProps, container_excluded2);
  return duration_container_objectSpread(duration_container_objectSpread(duration_container_objectSpread(duration_container_objectSpread({}, ownProps), restStateProps), restDispatchProps), {}, {
    onFromTimePickerBlur: duration_container_onFromTimePickerBlur(state, dispatch, ownProps),
    onToTimePickerBlur: duration_container_onToTimePickerBlur(state, dispatch, ownProps)
  });
};
/* harmony default export */ var container_content_duration_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(container_content_duration_container_mapStateToProps, duration_container_mapDispatchToProps, duration_container_mergeProps))(container_content_duration_template));
// EXTERNAL MODULE: ./src/modules/blocks/ticket/container-content/advanced-options/style.pcss
var advanced_options_style = __webpack_require__("7lmk");

// CONCATENATED MODULE: ./src/modules/blocks/ticket/container-content/advanced-options/sku/template.js

/**
 * External dependencies
 */




/**
 * Wordpress dependencies
 */




/**
 * Internal dependencies
 */


class template_SKU extends external_React_["PureComponent"] {
  constructor(props) {
    super(props);
    this.id = uniqid_default()('ticket-sku');
  }
  render() {
    const {
      sku,
      isDisabled,
      onChange
    } = this.props;
    return wp.element.createElement("div", {
      className: external_tribe_modules_classnames_default()('tribe-editor__ticket__sku', 'tribe-editor__ticket__content-row', 'tribe-editor__ticket__content-row--sku')
    }, wp.element.createElement(label_with_tooltip, {
      className: "tribe-editor__ticket__sku-label-with-tooltip",
      forId: this.id,
      isLabel: true,
      label: Object(external_wp_i18n_["__"])('Ticket SKU', 'event-tickets'),
      tooltipText: Object(external_wp_i18n_["__"])('A unique identifying code for each ticket type you\'re selling', 'event-tickets'),
      tooltipLabel: wp.element.createElement(external_wp_components_["Dashicon"], {
        className: "tribe-editor__ticket__tooltip-label",
        icon: "info-outline"
      })
    }), wp.element.createElement(external_tribe_common_elements_["Input"], {
      className: "tribe-editor__ticket__sku-input",
      id: this.id,
      type: "text",
      value: sku,
      onChange: onChange,
      disabled: isDisabled
    }));
  }
}
defineProperty_default()(template_SKU, "propTypes", {
  isDisabled: external_tribe_modules_propTypes_default.a.bool,
  onChange: external_tribe_modules_propTypes_default.a.func.isRequired,
  sku: external_tribe_modules_propTypes_default.a.string
});
/* harmony default export */ var sku_template = (template_SKU);
// CONCATENATED MODULE: ./src/modules/blocks/ticket/container-content/advanced-options/sku/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



const sku_container_mapStateToProps = (state, ownProps) => ({
  isDisabled: ticket_selectors_namespaceObject.isTicketDisabled(state, ownProps),
  sku: ticket_selectors_namespaceObject.getTicketTempSku(state, ownProps)
});
const sku_container_mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: e => {
    const {
      clientId
    } = ownProps;
    dispatch(ticket_actions_namespaceObject.setTicketTempSku(clientId, e.target.value));
    dispatch(ticket_actions_namespaceObject.setTicketHasChanges(clientId, true));
  }
});
/* harmony default export */ var sku_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(sku_container_mapStateToProps, sku_container_mapDispatchToProps))(sku_template));
// EXTERNAL MODULE: ./src/modules/blocks/ticket/container-content/advanced-options/ecommerce-options/style.pcss
var ecommerce_options_style = __webpack_require__("ztK3");

// CONCATENATED MODULE: ./src/modules/blocks/ticket/container-content/advanced-options/ecommerce-options/template.js
/**
 * External dependencies
 */




/**
 * Wordpress dependencies
 */


/**
 * Internal dependencies
 */



const {
  EDD: template_EDD,
  WOO: template_WOO,
  PROVIDER_TYPES: template_PROVIDER_TYPES
} = constants_namespaceObject;
const EDIT_TICKET = 'edit-ticket';
const REPORT = 'report';
const LINK_TYPES = [EDIT_TICKET, REPORT];
const EcommerceOptions = _ref => {
  let {
    editTicketLink,
    isDisabled,
    provider,
    reportLink,
    showEcommerceOptions
  } = _ref;
  const getEditTicketLinkLabel = ticketProvider => {
    let label = '';
    if (ticketProvider === template_EDD) {
      label = Object(external_wp_i18n_["__"])('Edit Ticket in Easy Digital Downloads', 'event-tickets');
    } else if (ticketProvider === template_WOO) {
      label = Object(external_wp_i18n_["__"])('Edit Ticket in WooCommerce', 'event-tickets');
    }
    return label;
  };
  const getLink = linkType => {
    const className = external_tribe_modules_classnames_default()('tribe-editor__ticket__ecommerce-options-link', `tribe-editor__ticket__ecommerce-options-link--${linkType}`);
    const href = linkType === REPORT ? reportLink : editTicketLink;
    const label = linkType === REPORT ? Object(external_wp_i18n_["__"])('View Sales Report', 'event-tickets') : getEditTicketLinkLabel(provider);
    return isDisabled ? wp.element.createElement("span", {
      className: className
    }, label) : wp.element.createElement(external_tribe_common_elements_["Link"], {
      className: className,
      href: href,
      target: "_blank"
    }, label);
  };
  return showEcommerceOptions && wp.element.createElement(external_tribe_common_elements_["LabeledItem"], {
    className: external_tribe_modules_classnames_default()('tribe-editor__ticket__ecommerce-options', 'tribe-editor__ticket__content-row', 'tribe-editor__ticket__content-row--ecommerce-options'),
    label: Object(external_wp_i18n_["__"])('Ecommerce', 'event-tickets')
  }, wp.element.createElement("div", {
    className: "tribe-editor__ticket__ecommerce-options-links"
  }, LINK_TYPES.map(linkType => wp.element.createElement("span", {
    key: linkType,
    className: "tribe-editor__ticket__ecommerce-options-link-wrapper"
  }, getLink(linkType)))));
};
EcommerceOptions.propTypes = {
  editTicketLink: external_tribe_modules_propTypes_default.a.string,
  isDisabled: external_tribe_modules_propTypes_default.a.bool,
  provider: external_tribe_modules_propTypes_default.a.oneOf([...template_PROVIDER_TYPES, '']),
  reportLink: external_tribe_modules_propTypes_default.a.string,
  showEcommerceOptions: external_tribe_modules_propTypes_default.a.bool
};
/* harmony default export */ var ecommerce_options_template = (EcommerceOptions);
// CONCATENATED MODULE: ./src/modules/blocks/ticket/container-content/advanced-options/ecommerce-options/container.js
/**
 * External dependencies
 */




/**
 * Internal dependencies
 */




const {
  EDD: container_EDD,
  WOO: container_WOO
} = constants_namespaceObject;
const container_showEcommerceOptions = provider => external_lodash_includes_default()([container_EDD, container_WOO], provider);
const getEditTicketLink = (state, ownProps, provider) => {
  let editTicketLink = '';
  if (container_showEcommerceOptions(provider)) {
    const adminURL = external_tribe_common_utils_["globals"].adminUrl();
    const ticketId = ticket_selectors_namespaceObject.getTicketId(state, ownProps);
    editTicketLink = `${adminURL}post.php?post=${ticketId}&action=edit`;
  }
  return editTicketLink;
};
const getReportLink = (state, ownProps, provider) => {
  let reportLink = '';
  if (container_showEcommerceOptions(provider)) {
    const adminURL = external_tribe_common_utils_["globals"].adminUrl();
    const ticketId = ticket_selectors_namespaceObject.getTicketId(state, ownProps);
    let path = '';
    if (provider === container_EDD) {
      path = `edit.php?page=edd-reports&view=sales&post_type=download&tab=logs&download=${ticketId}`; // eslint-disable-line max-len
    } else if (provider === container_WOO) {
      path = `admin.php?page=wc-reports&tab=orders&report=sales_by_product&product_ids=${ticketId}`; // eslint-disable-line max-len
    }

    reportLink = `${adminURL}${path}`;
  }
  return reportLink;
};
const ecommerce_options_container_mapStateToProps = (state, ownProps) => {
  const provider = ticket_selectors_namespaceObject.getTicketProvider(state, ownProps);
  return {
    isDisabled: ticket_selectors_namespaceObject.isTicketDisabled(state, ownProps),
    provider,
    editTicketLink: getEditTicketLink(state, ownProps, provider),
    reportLink: getReportLink(state, ownProps, provider),
    showEcommerceOptions: container_showEcommerceOptions(provider)
  };
};
/* harmony default export */ var ecommerce_options_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(ecommerce_options_container_mapStateToProps))(ecommerce_options_template));
// CONCATENATED MODULE: ./src/modules/blocks/ticket/container-content/advanced-options/template.js

/**
 * External dependencies
 */




/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




class template_AdvancedOptions extends external_React_["Component"] {
  constructor(props) {
    super(props);
    defineProperty_default()(this, "getHeader", () => wp.element.createElement(external_React_["Fragment"], null, wp.element.createElement(external_wp_components_["Dashicon"], {
      className: "tribe-editor__ticket__advanced-options-header-icon",
      icon: "arrow-down"
    }), wp.element.createElement("span", {
      className: "tribe-editor__ticket__advanced-options-header-text"
    }, Object(external_wp_i18n_["__"])('Advanced Options', 'event-tickets'))));
    defineProperty_default()(this, "getContent", () => wp.element.createElement(external_React_["Fragment"], null, wp.element.createElement(sku_container, {
      clientId: this.props.clientId
    }), wp.element.createElement(ecommerce_options_container, {
      clientId: this.props.clientId
    })));
    defineProperty_default()(this, "getRows", () => [{
      accordionId: this.accordionId,
      content: this.getContent(),
      contentClassName: 'tribe-editor__ticket__advanced-options-content',
      header: this.getHeader(),
      headerAttrs: {
        disabled: this.props.isDisabled
      },
      headerClassName: 'tribe-editor__ticket__advanced-options-header'
    }]);
    this.accordionId = uniqid_default()();
  }
  render() {
    return wp.element.createElement(external_tribe_common_elements_["Accordion"], {
      className: "tribe-editor__ticket__advanced-options",
      rows: this.getRows()
    });
  }
}
defineProperty_default()(template_AdvancedOptions, "propTypes", {
  clientId: external_tribe_modules_propTypes_default.a.string.isRequired,
  isDisabled: external_tribe_modules_propTypes_default.a.bool,
  hasBeenCreated: external_tribe_modules_propTypes_default.a.bool
});
/* harmony default export */ var advanced_options_template = (template_AdvancedOptions);
// CONCATENATED MODULE: ./src/modules/blocks/ticket/container-content/advanced-options/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



const advanced_options_container_mapStateToProps = (state, ownProps) => ({
  isDisabled: ticket_selectors_namespaceObject.isTicketDisabled(state, ownProps),
  hasBeenCreated: ticket_selectors_namespaceObject.getTicketHasBeenCreated(state, ownProps)
});
/* harmony default export */ var advanced_options_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(advanced_options_container_mapStateToProps))(advanced_options_template));
// EXTERNAL MODULE: ./src/modules/blocks/ticket/container-content/attendee-collection/style.pcss
var attendee_collection_style = __webpack_require__("bPb5");

// CONCATENATED MODULE: ./src/modules/blocks/ticket/container-content/attendee-collection/iac-setting/template.js

/**
 * External dependencies
 */




/**
 * Wordpress dependencies
 */




/**
 * Internal dependencies
 */

class template_IACSetting extends external_React_["PureComponent"] {
  constructor(props) {
    super(props);
    this.id = uniqid_default()('ticket-iac');
  }
  render() {
    const {
      iac,
      iacOptions,
      isDisabled,
      onChange
    } = this.props;
    return wp.element.createElement("div", null, wp.element.createElement("div", {
      className: "tribe-editor__ticket__content-row--iac-setting-description"
    }, Object(external_wp_i18n_["__"])('Select the default way to sell tickets. Enabling Individual Attendee Collection will allow purchasers to enter a name and email for each ticket.',
    // eslint-disable-line max-len
    'event-tickets')), wp.element.createElement("div", {
      className: external_tribe_modules_classnames_default()('tribe-editor__ticket__iac-setting', 'tribe-editor__ticket__content-row', 'tribe-editor__ticket__content-row--iac-setting')
    }, wp.element.createElement(external_wp_components_["RadioControl"], {
      className: "tribe-editor__ticket__iac-setting-input",
      id: this.id,
      type: "radio",
      selected: iac,
      onChange: onChange,
      disabled: isDisabled,
      options: iacOptions
    })));
  }
}
defineProperty_default()(template_IACSetting, "propTypes", {
  isDisabled: external_tribe_modules_propTypes_default.a.bool,
  onChange: external_tribe_modules_propTypes_default.a.func.isRequired,
  iac: external_tribe_modules_propTypes_default.a.string,
  iacOptions: external_tribe_modules_propTypes_default.a.arrayOf(external_tribe_modules_propTypes_default.a.shape({
    label: external_tribe_modules_propTypes_default.a.string,
    value: external_tribe_modules_propTypes_default.a.string
  }))
});
/* harmony default export */ var iac_setting_template = (template_IACSetting);
// CONCATENATED MODULE: ./src/modules/blocks/ticket/container-content/attendee-collection/iac-setting/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */




const iac_setting_container_mapStateToProps = (state, ownProps) => ({
  isDisabled: ticket_selectors_namespaceObject.isTicketDisabled(state, ownProps),
  iac: ticket_selectors_namespaceObject.getTicketTempIACSetting(state, ownProps),
  iacOptions: external_tribe_common_utils_["globals"].iacVars().iacOptions
});
const iac_setting_container_mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: value => {
    const {
      clientId
    } = ownProps;
    dispatch(ticket_actions_namespaceObject.setTicketTempIACSetting(clientId, value));
    dispatch(ticket_actions_namespaceObject.setTicketHasChanges(clientId, true));
  }
});
/* harmony default export */ var iac_setting_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(iac_setting_container_mapStateToProps, iac_setting_container_mapDispatchToProps))(iac_setting_template));
// CONCATENATED MODULE: ./src/modules/blocks/ticket/container-content/attendee-collection/template.js

/**
 * External dependencies
 */




/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



class template_AttendeeCollection extends external_React_["PureComponent"] {
  constructor(props) {
    super(props);
    defineProperty_default()(this, "getHeader", () => wp.element.createElement(external_React_["Fragment"], null, wp.element.createElement(external_wp_components_["Dashicon"], {
      className: "tribe-editor__ticket__attendee-collection-header-icon",
      icon: "arrow-down"
    }), wp.element.createElement("span", {
      className: "tribe-editor__ticket__attendee-collection-header-text"
    }, Object(external_wp_i18n_["__"])('Attendee Collection', 'event-tickets'))));
    defineProperty_default()(this, "getContent", () => wp.element.createElement(iac_setting_container, {
      clientId: this.props.clientId
    }));
    defineProperty_default()(this, "getRows", () => [{
      accordionId: this.accordionId,
      content: this.getContent(),
      contentClassName: 'tribe-editor__ticket__attendee-collection-content',
      header: this.getHeader(),
      headerAttrs: {
        disabled: this.props.isDisabled
      },
      headerClassName: 'tribe-editor__ticket__attendee-collection-header'
    }]);
    this.accordionId = uniqid_default()();
  }
  render() {
    return wp.element.createElement(external_tribe_common_elements_["Accordion"], {
      className: "tribe-editor__ticket__attendee-collection",
      rows: this.getRows()
    });
  }
}
defineProperty_default()(template_AttendeeCollection, "propTypes", {
  clientId: external_tribe_modules_propTypes_default.a.string.isRequired,
  isDisabled: external_tribe_modules_propTypes_default.a.bool,
  hasBeenCreated: external_tribe_modules_propTypes_default.a.bool
});
/* harmony default export */ var attendee_collection_template = (template_AttendeeCollection);
// CONCATENATED MODULE: ./src/modules/blocks/ticket/container-content/attendee-collection/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



const attendee_collection_container_mapStateToProps = (state, ownProps) => ({
  isDisabled: ticket_selectors_namespaceObject.isTicketDisabled(state, ownProps),
  hasBeenCreated: ticket_selectors_namespaceObject.getTicketHasBeenCreated(state, ownProps)
});
/* harmony default export */ var attendee_collection_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(attendee_collection_container_mapStateToProps))(attendee_collection_template));
// EXTERNAL MODULE: ./src/modules/blocks/ticket/container-content/attendees-registration/style.pcss
var container_content_attendees_registration_style = __webpack_require__("EBah");

// CONCATENATED MODULE: ./src/modules/blocks/ticket/container-content/attendees-registration/template.js
/**
 * External dependencies
 */



/**
 * Wordpress dependencies
 */


/**
 * Internal dependencies
 */


const template_linkTextAdd = Object(external_wp_i18n_["__"])('+ Add', 'event-tickets');
const template_linkTextEdit = Object(external_wp_i18n_["__"])('Edit', 'event-tickets');
const template_AttendeesRegistration = _ref => {
  let {
    attendeeRegistrationURL,
    hasAttendeeInfoFields,
    isCreated,
    isDisabled,
    isModalOpen,
    onClick,
    onClose,
    onIframeLoad
  } = _ref;
  const linkText = hasAttendeeInfoFields ? template_linkTextEdit : template_linkTextAdd;
  return wp.element.createElement(attendees_registration, {
    helperText: Object(external_wp_i18n_["__"])('Save your ticket to enable attendee information fields', 'event-tickets'),
    iframeURL: attendeeRegistrationURL,
    isDisabled: isDisabled,
    isModalOpen: isModalOpen,
    label: Object(external_wp_i18n_["__"])('Attendee Information', 'event-tickets'),
    linkText: linkText,
    modalTitle: Object(external_wp_i18n_["__"])('Attendee Information', 'event-tickets'),
    onClick: onClick,
    onClose: onClose,
    onIframeLoad: onIframeLoad,
    showHelperText: !isCreated
    // @todo: @paulmskim shouldCloseOnClickOutside is a fix until we can figure out modal closing issue in WP 5.5.
    ,
    shouldCloseOnClickOutside: false
  });
};
template_AttendeesRegistration.propTypes = {
  attendeeRegistrationURL: external_tribe_modules_propTypes_default.a.string.isRequired,
  hasAttendeeInfoFields: external_tribe_modules_propTypes_default.a.bool.isRequired,
  isCreated: external_tribe_modules_propTypes_default.a.bool.isRequired,
  isDisabled: external_tribe_modules_propTypes_default.a.bool.isRequired,
  isModalOpen: external_tribe_modules_propTypes_default.a.bool.isRequired,
  onClick: external_tribe_modules_propTypes_default.a.func.isRequired,
  onClose: external_tribe_modules_propTypes_default.a.func.isRequired,
  onIframeLoad: external_tribe_modules_propTypes_default.a.func.isRequired
};
/* harmony default export */ var attendees_registration_template = (template_AttendeesRegistration);
// CONCATENATED MODULE: ./src/modules/blocks/ticket/container-content/attendees-registration/container.js
/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




const container_getAttendeeRegistrationUrl = (state, ownProps) => {
  const adminURL = external_tribe_common_utils_["globals"].adminUrl();
  const postType = Object(external_wp_data_["select"])('core/editor').getCurrentPostType();
  const ticketId = ticket_selectors_namespaceObject.getTicketId(state, ownProps);
  return `${adminURL}edit.php?post_type=${postType}&page=attendee-registration&ticket_id=${ticketId}&tribe_events_modal=1`; // eslint-disable-line max-len
};

const attendees_registration_container_mapStateToProps = (state, ownProps) => {
  const isCreated = ticket_selectors_namespaceObject.getTicketHasBeenCreated(state, ownProps);
  return {
    attendeeRegistrationURL: container_getAttendeeRegistrationUrl(state, ownProps),
    hasAttendeeInfoFields: ticket_selectors_namespaceObject.getTicketHasAttendeeInfoFields(state, ownProps),
    isCreated,
    isDisabled: ticket_selectors_namespaceObject.isTicketDisabled(state, ownProps) || !isCreated,
    isModalOpen: ticket_selectors_namespaceObject.getTicketIsModalOpen(state, ownProps)
  };
};
const attendees_registration_container_mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(ticket_actions_namespaceObject.setTicketIsModalOpen(ownProps.clientId, true));
    },
    onClose: e => {
      if (!e.target.classList.contains('components-modal__content')) {
        dispatch(ticket_actions_namespaceObject.setTicketIsModalOpen(ownProps.clientId, false));
      }
      if (e.type === 'click' && e.target.classList.contains('components-modal__screen-overlay')) {
        dispatch(ticket_actions_namespaceObject.setTicketIsModalOpen(ownProps.clientId, false));
      }
    },
    onIframeLoad: iframe => {
      const iframeWindow = iframe.contentWindow;

      // show overlay
      const showOverlay = () => {
        iframe.nextSibling.classList.add('tribe-editor__attendee-registration__modal-overlay--show');
      };

      // add event listener for form submit
      const form = iframeWindow.document.querySelector('#event-tickets-attendee-information');
      form.addEventListener('submit', showOverlay);

      // remove listeners
      const removeListeners = () => {
        iframeWindow.removeEventListener('unload', handleUnload); // eslint-disable-line no-use-before-define,max-len
        form.removeEventListener('submit', showOverlay);
      };

      // handle unload on iframe unload
      const handleUnload = () => {
        // remove listeners
        removeListeners(iframeWindow);

        // check if there are meta fields
        const metaFields = iframeWindow.document.querySelector('#tribe-tickets-attendee-sortables');
        const hasFields = Boolean(metaFields.firstElementChild);

        // dispatch actions
        dispatch(ticket_actions_namespaceObject.setTicketHasAttendeeInfoFields(ownProps.clientId, hasFields));
        dispatch(ticket_actions_namespaceObject.setTicketIsModalOpen(ownProps.clientId, false));
      };

      // add handler to iframe window unload
      iframeWindow.addEventListener('unload', handleUnload);

      // add target blank to "Learn more" link
      const introLink = iframeWindow.document.querySelector('.tribe-intro > a');
      if (introLink) {
        introLink.setAttribute('target', '_blank');
      }
    }
  };
};
/* harmony default export */ var attendees_registration_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(attendees_registration_container_mapStateToProps, attendees_registration_container_mapDispatchToProps))(attendees_registration_template));
// EXTERNAL MODULE: ./src/modules/blocks/ticket/container-content/description/styles.pcss
var container_content_description_styles = __webpack_require__("a8Ir");

// CONCATENATED MODULE: ./src/modules/blocks/ticket/container-content/description/template.js

/**
 * External dependencies
 */




/**
 * Wordpress dependencies
 */



/**
 * Internal dependencies
 */


class template_Description extends external_React_["PureComponent"] {
  constructor(props) {
    super(props);
    this.id = uniqid_default()('ticket-description');
  }
  render() {
    const {
      isDisabled,
      onTempDescriptionChange,
      tempDescription
    } = this.props;
    return wp.element.createElement("div", {
      className: external_tribe_modules_classnames_default()('tribe-editor__ticket__description', 'tribe-editor__ticket__content-row', 'tribe-editor__ticket__content-row--description')
    }, wp.element.createElement(external_tribe_common_elements_["LabeledItem"], {
      className: "tribe-editor__ticket__description-label",
      forId: this.id,
      isLabel: true,
      label: Object(external_wp_i18n_["__"])('Description', 'event-tickets')
    }), wp.element.createElement(external_tribe_common_elements_["Input"], {
      className: "tribe-editor__ticket__description-input",
      id: this.id,
      type: "text",
      value: tempDescription,
      onChange: onTempDescriptionChange,
      disabled: isDisabled
    }));
  }
}
defineProperty_default()(template_Description, "propTypes", {
  isDisabled: external_tribe_modules_propTypes_default.a.bool,
  onTempDescriptionChange: external_tribe_modules_propTypes_default.a.func.isRequired,
  tempDescription: external_tribe_modules_propTypes_default.a.string
});
/* harmony default export */ var container_content_description_template = (template_Description);
// CONCATENATED MODULE: ./src/modules/blocks/ticket/container-content/description/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



const container_content_description_container_mapStateToProps = (state, ownProps) => ({
  isDisabled: ticket_selectors_namespaceObject.isTicketDisabled(state, ownProps),
  tempDescription: ticket_selectors_namespaceObject.getTicketTempDescription(state, ownProps)
});
const container_content_description_container_mapDispatchToProps = (dispatch, ownProps) => ({
  onTempDescriptionChange: e => {
    const {
      clientId
    } = ownProps;
    dispatch(ticket_actions_namespaceObject.setTicketTempDescription(clientId, e.target.value));
    dispatch(ticket_actions_namespaceObject.setTicketHasChanges(clientId, true));
  }
});
/* harmony default export */ var container_content_description_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(container_content_description_container_mapStateToProps, container_content_description_container_mapDispatchToProps))(container_content_description_template));
// EXTERNAL MODULE: ./src/modules/blocks/ticket/container-content/price/style.pcss
var container_content_price_style = __webpack_require__("Sf1x");

// CONCATENATED MODULE: ./src/modules/blocks/ticket/container-content/price/template.js


function price_template_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function price_template_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? price_template_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : price_template_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * External dependencies
 */





/**
 * Wordpress dependencies
 */



/**
 * Internal dependencies
 */



class template_Price extends external_React_["PureComponent"] {
  constructor(props) {
    super(props);
    this.id = uniqid_default()('ticket-price');
  }
  render() {
    const {
      currencyDecimalPoint,
      currencyNumberOfDecimals,
      currencyPosition,
      currencySymbol,
      currencyThousandsSep,
      isDisabled,
      minDefaultPrice,
      onTempPriceChange,
      tempPrice
    } = this.props;
    const numericFormatProps = price_template_objectSpread(price_template_objectSpread({}, currencyPosition === PREFIX && {
      prefix: currencySymbol
    }), currencyPosition === SUFFIX && {
      suffix: currencySymbol
    });
    const handleChange = e => {
      if (!isNaN(e.value) && e.value >= minDefaultPrice) {
        onTempPriceChange(e);
      }
    };
    return wp.element.createElement("div", {
      className: external_tribe_modules_classnames_default()('tribe-editor__ticket__price', 'tribe-editor__ticket__content-row', 'tribe-editor__ticket__content-row--price')
    }, wp.element.createElement(external_tribe_common_elements_["LabeledItem"], {
      className: "tribe-editor__ticket__price-label",
      forId: this.id,
      isLabel: true,
      label: Object(external_wp_i18n_["__"])('Ticket price', 'event-tickets')
    }), wp.element.createElement(react_number_format_es["a" /* NumericFormat */], extends_default()({
      allowNegative: false,
      className: "tribe-editor__input tribe-editor__ticket__price-input",
      decimalScale: currencyNumberOfDecimals,
      decimalSeparator: currencyDecimalPoint,
      disabled: isDisabled,
      displayType: "input",
      fixedDecimalScale: true
    }, numericFormatProps, {
      onValueChange: handleChange,
      thousandSeparator: currencyThousandsSep,
      value: tempPrice
    })));
  }
}
defineProperty_default()(template_Price, "propTypes", {
  currencyDecimalPoint: external_tribe_modules_propTypes_default.a.string,
  currencyNumberOfDecimals: external_tribe_modules_propTypes_default.a.number,
  currencyPosition: external_tribe_modules_propTypes_default.a.string,
  currencySymbol: external_tribe_modules_propTypes_default.a.string,
  currencyThousandsSep: external_tribe_modules_propTypes_default.a.string,
  isDisabled: external_tribe_modules_propTypes_default.a.bool,
  minDefaultPrice: external_tribe_modules_propTypes_default.a.string,
  onTempPriceChange: external_tribe_modules_propTypes_default.a.func.isRequired,
  tempPrice: external_tribe_modules_propTypes_default.a.string
});
/* harmony default export */ var container_content_price_template = (template_Price);
// CONCATENATED MODULE: ./src/modules/blocks/ticket/container-content/price/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



const container_content_price_container_mapStateToProps = (state, ownProps) => ({
  currencyDecimalPoint: ticket_selectors_namespaceObject.getTicketCurrencyDecimalPoint(state, ownProps),
  currencyNumberOfDecimals: ticket_selectors_namespaceObject.getTicketCurrencyNumberOfDecimals(state, ownProps),
  currencyPosition: ticket_selectors_namespaceObject.getTicketCurrencyPosition(state, ownProps),
  currencySymbol: ticket_selectors_namespaceObject.getTicketCurrencySymbol(state, ownProps),
  currencyThousandsSep: ticket_selectors_namespaceObject.getTicketCurrencyThousandsSep(state, ownProps),
  isDisabled: ticket_selectors_namespaceObject.isTicketDisabled(state, ownProps),
  minDefaultPrice: ticket_selectors_namespaceObject.isZeroPriceValid(state, ownProps) ? 0 : 1,
  tempPrice: ticket_selectors_namespaceObject.getTicketTempPrice(state, ownProps)
});
const container_content_price_container_mapDispatchToProps = (dispatch, ownProps) => ({
  onTempPriceChange: e => {
    const {
      clientId
    } = ownProps;
    dispatch(ticket_actions_namespaceObject.setTicketTempPrice(clientId, e.value));
    dispatch(ticket_actions_namespaceObject.setTicketHasChanges(clientId, true));
  }
});
/* harmony default export */ var container_content_price_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(container_content_price_container_mapStateToProps, container_content_price_container_mapDispatchToProps))(container_content_price_template));
// EXTERNAL MODULE: ./src/modules/blocks/ticket/container-content/style.pcss
var ticket_container_content_style = __webpack_require__("ccmz");

// CONCATENATED MODULE: ./src/modules/blocks/ticket/container-content/template.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */









const TicketContainerContent = _ref => {
  let {
    clientId,
    hasTicketsPlus,
    hasIacVars
  } = _ref;
  return wp.element.createElement(external_React_["Fragment"], null, wp.element.createElement(container_content_title_container, {
    clientId: clientId
  }), wp.element.createElement(container_content_description_container, {
    clientId: clientId
  }), wp.element.createElement(container_content_price_container, {
    clientId: clientId
  }), wp.element.createElement(container_content_capacity_container, {
    clientId: clientId
  }), wp.element.createElement(container_content_duration_container, {
    clientId: clientId
  }), wp.element.createElement(advanced_options_container, {
    clientId: clientId
  }), hasTicketsPlus && hasIacVars && wp.element.createElement(attendee_collection_container, {
    clientId: clientId
  }), hasTicketsPlus && wp.element.createElement(attendees_registration_container, {
    clientId: clientId
  }));
};
TicketContainerContent.propTypes = {
  clientId: external_tribe_modules_propTypes_default.a.string.isRequired,
  hasTicketsPlus: external_tribe_modules_propTypes_default.a.bool,
  hasIacVars: external_tribe_modules_propTypes_default.a.bool
};
/* harmony default export */ var ticket_container_content_template = (TicketContainerContent);
// CONCATENATED MODULE: ./src/modules/blocks/ticket/container-content/container.js

/**
 * External dependencies
 */


/**
 * Internal dependencies
 */




const ticket_container_content_container_mapStateToProps = state => ({
  hasTicketsPlus: external_tribe_common_data_["plugins"].selectors.hasPlugin(state)(external_tribe_common_data_["plugins"].constants.TICKETS_PLUS),
  hasIacVars: !external_lodash_isEmpty_default()(external_tribe_common_utils_["globals"].iacVars())
});
/* harmony default export */ var ticket_container_content_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(ticket_container_content_container_mapStateToProps))(ticket_container_content_template));
// CONCATENATED MODULE: ./src/modules/blocks/ticket/container/template.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */





const ClockIcon = _ref => {
  let {
    isDisabled
  } = _ref;
  return isDisabled ? wp.element.createElement(inactive_clock, null) : wp.element.createElement(clock, null);
};
ClockIcon.propTypes = {
  isDisabled: external_tribe_modules_propTypes_default.a.bool.isRequired
};
const TicketIcon = _ref2 => {
  let {
    isDisabled
  } = _ref2;
  return isDisabled ? wp.element.createElement(inactive_ticket, null) : wp.element.createElement(active_ticket, null);
};
TicketIcon.propTypes = {
  isDisabled: external_tribe_modules_propTypes_default.a.bool.isRequired
};
const TicketContainerIcon = _ref3 => {
  let {
    isDisabled,
    isFuture,
    isPast
  } = _ref3;
  return isFuture || isPast ? wp.element.createElement(ClockIcon, {
    isDisabled: isDisabled
  }) : wp.element.createElement(TicketIcon, {
    isDisabled: isDisabled
  });
};
TicketContainerIcon.propTypes = {
  isDisabled: external_tribe_modules_propTypes_default.a.bool.isRequired,
  isFuture: external_tribe_modules_propTypes_default.a.bool,
  isPast: external_tribe_modules_propTypes_default.a.bool
};
const TicketContainer = _ref4 => {
  let {
    clientId,
    isDisabled,
    isFuture,
    isPast,
    isSelected
  } = _ref4;
  return wp.element.createElement(container_panel, {
    className: "tribe-editor__ticket__container",
    layout: LAYOUT.ticket,
    icon: wp.element.createElement(TicketContainerIcon, {
      isDisabled: isDisabled,
      isFuture: isFuture,
      isPast: isPast
    }),
    header: wp.element.createElement(ticket_container_header_template, {
      clientId: clientId,
      isSelected: isSelected
    }),
    content: wp.element.createElement(ticket_container_content_container, {
      clientId: clientId
    })
  });
};
TicketContainer.propTypes = {
  clientId: external_tribe_modules_propTypes_default.a.string.isRequired,
  isDisabled: external_tribe_modules_propTypes_default.a.bool,
  isFuture: external_tribe_modules_propTypes_default.a.bool,
  isPast: external_tribe_modules_propTypes_default.a.bool,
  isSelected: external_tribe_modules_propTypes_default.a.bool
};
/* harmony default export */ var ticket_container_template = (TicketContainer);
// CONCATENATED MODULE: ./src/modules/blocks/ticket/container/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */



const ticket_container_container_mapStateToProps = (state, ownProps) => ({
  isDisabled: ticket_selectors_namespaceObject.isTicketDisabled(state, ownProps),
  isFuture: ticket_selectors_namespaceObject.isTicketFuture(state, ownProps),
  isPast: ticket_selectors_namespaceObject.isTicketPast(state, ownProps)
});
/* harmony default export */ var ticket_container_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(ticket_container_container_mapStateToProps))(ticket_container_template));
// EXTERNAL MODULE: ./src/modules/blocks/ticket/dashboard/move-delete/style.pcss
var dashboard_move_delete_style = __webpack_require__("pN0F");

// CONCATENATED MODULE: ./src/modules/blocks/ticket/dashboard/move-delete/template.js
/**
 * External Dependencies
 */





const template_MoveDelete = _ref => {
  let {
    ticketIsSelected,
    moveTicket,
    removeTicket,
    isDisabled
  } = _ref;
  if (!ticketIsSelected) {
    return null;
  }
  return wp.element.createElement("div", {
    className: "tribe-editor__ticket__content-row--move-delete"
  }, wp.element.createElement(external_tribe_common_elements_["Button"], {
    type: "button",
    onClick: removeTicket,
    disabled: isDisabled
  }, Object(external_wp_i18n_["__"])('Remove Ticket', 'event-tickets')), wp.element.createElement(external_tribe_common_elements_["Button"], {
    type: "button",
    onClick: moveTicket,
    disabled: isDisabled
  }, Object(external_wp_i18n_["__"])('Move Ticket', 'event-tickets')));
};
template_MoveDelete.propTypes = {
  moveTicket: external_tribe_modules_propTypes_default.a.func.isRequired,
  removeTicket: external_tribe_modules_propTypes_default.a.func.isRequired,
  isDisabled: external_tribe_modules_propTypes_default.a.bool.isRequired,
  ticketIsSelected: external_tribe_modules_propTypes_default.a.bool.isRequired
};
/* harmony default export */ var dashboard_move_delete_template = (template_MoveDelete);
// CONCATENATED MODULE: ./src/modules/blocks/ticket/dashboard/move-delete/container.js

function dashboard_move_delete_container_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function dashboard_move_delete_container_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? dashboard_move_delete_container_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : dashboard_move_delete_container_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */




const dashboard_move_delete_container_mapStateToProps = (state, ownProps) => ({
  isDisabled: ticket_selectors_namespaceObject.isTicketDisabled(state, ownProps),
  ticketIsSelected: ticket_selectors_namespaceObject.getTicketIsSelected(state, ownProps),
  ticketId: ticket_selectors_namespaceObject.getTicketId(state, ownProps)
});
const dashboard_move_delete_container_mapDispatchToProps = (dispatch, ownProps) => ({
  removeTicket: () => {
    dispatch(ticket_actions_namespaceObject.deleteTicket(ownProps.clientId));
  },
  moveTicket: ticketId => dispatch(showModal(ticketId, ownProps.clientId))
});
const move_delete_container_mergeProps = (stateProps, dispatchProps, ownProps) => dashboard_move_delete_container_objectSpread(dashboard_move_delete_container_objectSpread(dashboard_move_delete_container_objectSpread(dashboard_move_delete_container_objectSpread({}, stateProps), dispatchProps), ownProps), {}, {
  moveTicket: () => dispatchProps.moveTicket(stateProps.ticketId)
});
/* harmony default export */ var dashboard_move_delete_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(dashboard_move_delete_container_mapStateToProps, dashboard_move_delete_container_mapDispatchToProps, move_delete_container_mergeProps))(dashboard_move_delete_template));
// EXTERNAL MODULE: ./src/modules/blocks/ticket/dashboard/style.pcss
var dashboard_style = __webpack_require__("U/zc");

// CONCATENATED MODULE: ./src/modules/blocks/ticket/dashboard/template.js
/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



const dashboard_template_confirmLabel = hasBeenCreated => hasBeenCreated ? Object(external_wp_i18n_["__"])('Update Ticket', 'event-tickets') : Object(external_wp_i18n_["__"])('Create Ticket', 'event-tickets');
const dashboard_template_cancelLabel = Object(external_wp_i18n_["__"])('Cancel', 'event-tickets');
const TicketDashboard = _ref => {
  let {
    clientId,
    hasBeenCreated,
    isCancelDisabled,
    isConfirmDisabled,
    onCancelClick,
    onConfirmClick
  } = _ref;
  return wp.element.createElement(external_React_["Fragment"], null, hasBeenCreated && wp.element.createElement(dashboard_move_delete_container, {
    clientId: clientId
  }), wp.element.createElement(action_dashboard, {
    className: "tribe-editor__ticket__dashboard tribe-common",
    cancelLabel: dashboard_template_cancelLabel,
    confirmLabel: dashboard_template_confirmLabel(hasBeenCreated),
    isCancelDisabled: isCancelDisabled,
    isConfirmDisabled: isConfirmDisabled,
    onCancelClick: onCancelClick,
    onConfirmClick: onConfirmClick
  }));
};
TicketDashboard.propTypes = {
  clientId: external_tribe_modules_propTypes_default.a.string,
  hasBeenCreated: external_tribe_modules_propTypes_default.a.bool,
  isCancelDisabled: external_tribe_modules_propTypes_default.a.bool,
  isConfirmDisabled: external_tribe_modules_propTypes_default.a.bool,
  onCancelClick: external_tribe_modules_propTypes_default.a.func,
  onConfirmClick: external_tribe_modules_propTypes_default.a.func
};
/* harmony default export */ var ticket_dashboard_template = (TicketDashboard);
// CONCATENATED MODULE: ./src/modules/blocks/ticket/dashboard/container.js


const dashboard_container_excluded = ["state"];
function dashboard_container_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function dashboard_container_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? dashboard_container_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : dashboard_container_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



const container_getIsConfirmDisabled = (state, ownProps) => !ticket_selectors_namespaceObject.isTicketValid(state, ownProps) || !ticket_selectors_namespaceObject.getTicketHasChanges(state, ownProps) || ticket_selectors_namespaceObject.isTicketDisabled(state, ownProps) || ticket_selectors_namespaceObject.getTicketHasDurationError(state, ownProps);
const dashboard_container_onCancelClick = (state, dispatch, ownProps) => () => {
  if (ticket_selectors_namespaceObject.getTicketHasBeenCreated(state, ownProps)) {
    dispatch(ticket_actions_namespaceObject.setTicketTempDetails(ownProps.clientId, {
      title: ticket_selectors_namespaceObject.getTicketTitle(state, ownProps),
      description: ticket_selectors_namespaceObject.getTicketDescription(state, ownProps),
      price: ticket_selectors_namespaceObject.getTicketPrice(state, ownProps),
      sku: ticket_selectors_namespaceObject.getTicketSku(state, ownProps),
      iac: ticket_selectors_namespaceObject.getTicketIACSetting(state, ownProps),
      startDate: ticket_selectors_namespaceObject.getTicketStartDate(state, ownProps),
      startDateInput: ticket_selectors_namespaceObject.getTicketStartDateInput(state, ownProps),
      startDateMoment: ticket_selectors_namespaceObject.getTicketStartDateMoment(state, ownProps),
      endDate: ticket_selectors_namespaceObject.getTicketEndDate(state, ownProps),
      endDateInput: ticket_selectors_namespaceObject.getTicketEndDateInput(state, ownProps),
      endDateMoment: ticket_selectors_namespaceObject.getTicketEndDateMoment(state, ownProps),
      startTime: ticket_selectors_namespaceObject.getTicketStartTime(state, ownProps),
      endTime: ticket_selectors_namespaceObject.getTicketEndTime(state, ownProps),
      startTimeInput: ticket_selectors_namespaceObject.getTicketStartTimeInput(state, ownProps),
      endTimeInput: ticket_selectors_namespaceObject.getTicketEndTimeInput(state, ownProps),
      capacityType: ticket_selectors_namespaceObject.getTicketCapacityType(state, ownProps),
      capacity: ticket_selectors_namespaceObject.getTicketCapacity(state, ownProps)
    }));
    dispatch(ticket_actions_namespaceObject.setTicketsTempSharedCapacity(ticket_selectors_namespaceObject.getTicketsSharedCapacity(state)));
    dispatch(ticket_actions_namespaceObject.setTicketHasChanges(ownProps.clientId, false));
  } else {
    dispatch(ticket_actions_namespaceObject.removeTicketBlock(ownProps.clientId));
    Object(external_wp_data_["dispatch"])('core/editor').removeBlocks(ownProps.clientId);
  }
  Object(external_wp_data_["dispatch"])('core/editor').clearSelectedBlock();
};
const dashboard_container_onConfirmClick = (state, dispatch, ownProps) => () => ticket_selectors_namespaceObject.getTicketHasBeenCreated(state, ownProps) ? dispatch(ticket_actions_namespaceObject.updateTicket(ownProps.clientId)) : dispatch(ticket_actions_namespaceObject.createNewTicket(ownProps.clientId));
const ticket_dashboard_container_mapStateToProps = (state, ownProps) => ({
  hasBeenCreated: ticket_selectors_namespaceObject.getTicketHasBeenCreated(state, ownProps),
  isCancelDisabled: ticket_selectors_namespaceObject.isTicketDisabled(state, ownProps),
  isConfirmDisabled: container_getIsConfirmDisabled(state, ownProps),
  state
});
const dashboard_container_mergeProps = (stateProps, dispatchProps, ownProps) => {
  const {
      state
    } = stateProps,
    restStateProps = objectWithoutProperties_default()(stateProps, dashboard_container_excluded);
  const {
    dispatch
  } = dispatchProps;
  return dashboard_container_objectSpread(dashboard_container_objectSpread(dashboard_container_objectSpread({}, ownProps), restStateProps), {}, {
    onCancelClick: dashboard_container_onCancelClick(state, dispatch, ownProps),
    onConfirmClick: dashboard_container_onConfirmClick(state, dispatch, ownProps)
  });
};
/* harmony default export */ var ticket_dashboard_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(ticket_dashboard_container_mapStateToProps, null, dashboard_container_mergeProps))(ticket_dashboard_template));
// CONCATENATED MODULE: ./src/modules/blocks/ticket/template.js

/**
 * External dependencies
 */




/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




class template_Ticket extends external_React_["PureComponent"] {
  componentDidMount() {
    this.props.onBlockUpdate(this.props.isSelected);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.isSelected !== this.props.isSelected) {
      this.props.onBlockUpdate(this.props.isSelected);
    }
  }
  render() {
    const {
      clientId,
      hasTicketsPlus,
      isDisabled,
      isLoading,
      isSelected,
      isModalShowing,
      showTicket
    } = this.props;
    return showTicket ? wp.element.createElement(external_React_["Fragment"], null, wp.element.createElement("article", {
      className: external_tribe_modules_classnames_default()('tribe-editor__ticket', {
        'tribe-editor__ticket--disabled': isDisabled
      }, {
        'tribe-editor__ticket--selected': isSelected
      }, {
        'tribe-editor__ticket--has-tickets-plus': hasTicketsPlus
      })
    }, wp.element.createElement(ticket_container_container, {
      clientId: clientId,
      isSelected: isSelected
    }), wp.element.createElement(ticket_dashboard_container, {
      clientId: clientId,
      isSelected: isSelected
    }), isLoading && wp.element.createElement(external_wp_components_["Spinner"], null)), isModalShowing && wp.element.createElement(move_modal_container, null)) : null;
  }
}
defineProperty_default()(template_Ticket, "propTypes", {
  clientId: external_tribe_modules_propTypes_default.a.string.isRequired,
  hasTicketsPlus: external_tribe_modules_propTypes_default.a.bool,
  isDisabled: external_tribe_modules_propTypes_default.a.bool,
  isLoading: external_tribe_modules_propTypes_default.a.bool,
  isModalShowing: external_tribe_modules_propTypes_default.a.bool,
  isSelected: external_tribe_modules_propTypes_default.a.bool,
  onBlockUpdate: external_tribe_modules_propTypes_default.a.func,
  removeTicketBlock: external_tribe_modules_propTypes_default.a.func,
  showTicket: external_tribe_modules_propTypes_default.a.bool
});
/* harmony default export */ var ticket_template = (template_Ticket);
// CONCATENATED MODULE: ./src/modules/blocks/ticket/container.js

function ticket_container_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function ticket_container_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ticket_container_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ticket_container_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */






const getShowTicket = (state, ownProps) => ticket_selectors_namespaceObject.getTicketsIsSelected(state) || ticket_selectors_namespaceObject.hasATicketSelected(state) || ticket_selectors_namespaceObject.isTicketOnSale(state, ownProps);
const ticket_container_mapStateToProps = (state, ownProps) => {
  return {
    hasTicketsPlus: external_tribe_common_data_["plugins"].selectors.hasPlugin(state)(external_tribe_common_data_["plugins"].constants.TICKETS_PLUS),
    hasBeenCreated: ticket_selectors_namespaceObject.getTicketHasBeenCreated(state, ownProps),
    isDisabled: ticket_selectors_namespaceObject.isTicketDisabled(state, ownProps),
    isLoading: ticket_selectors_namespaceObject.getTicketIsLoading(state, ownProps),
    isModalShowing: selectors_isModalShowing(state),
    modalTicketId: getModalTicketId(state),
    showTicket: getShowTicket(state, ownProps),
    ticketId: ticket_selectors_namespaceObject.getTicketId(state, ownProps)
  };
};
const ticket_container_mapDispatchToProps = (dispatch, ownProps) => {
  const {
    clientId
  } = ownProps;
  return {
    onBlockUpdate: isSelected => dispatch(ticket_actions_namespaceObject.setTicketIsSelected(clientId, isSelected)),
    setInitialState: props => {
      dispatch(ticket_actions_namespaceObject.registerTicketBlock(clientId));
      dispatch(ticket_actions_namespaceObject.setTicketInitialState(props));
    }
  };
};
const ticket_container_mergeProps = (stateProps, dispatchProps, ownProps) => ticket_container_objectSpread(ticket_container_objectSpread(ticket_container_objectSpread(ticket_container_objectSpread({}, stateProps), dispatchProps), ownProps), {}, {
  isModalShowing: stateProps.isModalShowing && stateProps.modalTicketId === stateProps.ticketId
});
/* harmony default export */ var ticket_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])({
  isolated: true
}), Object(external_tribe_modules_reactRedux_["connect"])(ticket_container_mapStateToProps, ticket_container_mapDispatchToProps, ticket_container_mergeProps), with_save_data())(ticket_template));
// CONCATENATED MODULE: ./src/modules/blocks/ticket/index.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

const {
  InnerBlocks: ticket_InnerBlocks
} = wp.blockEditor;

/**
 * Internal dependencies
 */


/* harmony default export */ var modules_blocks_ticket = ({
  id: 'tickets-item',
  title: Object(external_wp_i18n_["__"])('Event Ticket', 'event-tickets'),
  description: Object(external_wp_i18n_["__"])('A single configured ticket type.', 'event-tickets'),
  icon: wp.element.createElement(icons_tickets, null),
  category: 'tribe-tickets',
  keywords: ['event', 'event-tickets', 'tribe'],
  parent: ['tribe/tickets'],
  supports: {
    html: false,
    customClassName: false
  },
  attributes: {
    hasBeenCreated: {
      type: 'boolean',
      default: false
    },
    ticketId: {
      type: 'integer',
      default: 0
    }
  },
  edit: ticket_container,
  save: () => wp.element.createElement("div", null, wp.element.createElement(ticket_InnerBlocks.Content, null))
});
// EXTERNAL MODULE: external "tribe.modules.reactInputAutosize"
var external_tribe_modules_reactInputAutosize_ = __webpack_require__("AuWn");
var external_tribe_modules_reactInputAutosize_default = /*#__PURE__*/__webpack_require__.n(external_tribe_modules_reactInputAutosize_);

// EXTERNAL MODULE: ./src/modules/blocks/attendees/style.pcss
var attendees_style = __webpack_require__("k3Up");

// CONCATENATED MODULE: ./src/modules/blocks/attendees/template.js
/**
 * External dependencies
 */





/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



/**
 * Module Code
 */

const placeholder = Object(external_wp_i18n_["__"])('Who\'s Attending?', 'event-tickets');
const subtitle = Object(external_wp_i18n_["__"])('(X) people are attending this event', 'event-tickets');
const renderLabelInput = _ref => {
  let {
    isSelected,
    isEmpty,
    title,
    setTitle
  } = _ref;
  const containerClassNames = external_tribe_modules_classnames_default()({
    'tribe-editor__event-attendees__title': true,
    'tribe-editor__event-attendees__title--selected': isSelected
  });
  const inputClassNames = external_tribe_modules_classnames_default()({
    'tribe-editor__event-attendees__title-text': true,
    'tribe-editor__event-attendees__title-text--empty': isEmpty && isSelected
  });
  return wp.element.createElement("div", {
    key: "tribe-events-attendees-label",
    className: containerClassNames
  }, wp.element.createElement(external_tribe_modules_reactInputAutosize_default.a, {
    id: "tribe-events-attendees-link",
    className: inputClassNames,
    value: title,
    placeholder: placeholder,
    onChange: setTitle
  }));
};
const renderPlaceholder = () => {
  const classes = ['tribe-editor__event-attendees__title', 'tribe-editor__event-attendees__title--placeholder'];
  return wp.element.createElement("span", {
    className: external_tribe_modules_classnames_default()(classes)
  }, placeholder);
};
const RenderGravatars = () => wp.element.createElement("div", {
  className: "tribe-editor__event-attendees__gravatars"
}, wp.element.createElement(gravatar, null), wp.element.createElement(gravatar, null), wp.element.createElement(gravatar, null), wp.element.createElement(gravatar, null), wp.element.createElement(gravatar, null));
const RenderSubtitle = () => wp.element.createElement("div", {
  className: "tribe-editor__event-attendees__subtitle"
}, wp.element.createElement("p", null, subtitle));
const UI = props => {
  const {
    isSelected,
    title,
    displayTitle,
    displaySubtitle
  } = props;
  const blockTitle = !(isSelected || title) ? renderPlaceholder() : renderLabelInput(props);
  return wp.element.createElement("div", {
    className: "tribe-editor__block tribe-editor__event-attendees"
  }, displayTitle ? blockTitle : '', displaySubtitle ? wp.element.createElement(RenderSubtitle, null) : '', wp.element.createElement(RenderGravatars, null));
};
UI.propTypes = {
  displaySubtitle: external_tribe_modules_propTypes_default.a.bool,
  displayTitle: external_tribe_modules_propTypes_default.a.bool,
  isSelected: external_tribe_modules_propTypes_default.a.bool,
  title: external_tribe_modules_propTypes_default.a.string
};
const template_Controls = _ref2 => {
  let {
    isSelected,
    displayTitle,
    displaySubtitle,
    onSetDisplayTitleChange,
    onSetDisplaySubtitleChange
  } = _ref2;
  return isSelected && wp.element.createElement(external_wp_editor_["InspectorControls"], {
    key: "inspector"
  }, wp.element.createElement(external_wp_components_["PanelBody"], {
    title: Object(external_wp_i18n_["__"])('Attendees Settings', 'event-tickets')
  }, wp.element.createElement(external_wp_components_["ToggleControl"], {
    label: Object(external_wp_i18n_["__"])('Display Title', 'event-tickets'),
    checked: displayTitle,
    onChange: onSetDisplayTitleChange
  }), wp.element.createElement(external_wp_components_["ToggleControl"], {
    label: Object(external_wp_i18n_["__"])('Display Subtitle', 'event-tickets'),
    checked: displaySubtitle,
    onChange: onSetDisplaySubtitleChange
  })));
};
template_Controls.propTypes = {
  displaySubtitle: external_tribe_modules_propTypes_default.a.bool,
  displayTitle: external_tribe_modules_propTypes_default.a.bool,
  isSelected: external_tribe_modules_propTypes_default.a.bool,
  onSetDisplaySubtitleChange: external_tribe_modules_propTypes_default.a.func,
  onSetDisplayTitleChange: external_tribe_modules_propTypes_default.a.func
};
const Attendees = props => wp.element.createElement(external_React_["Fragment"], null, wp.element.createElement(UI, props), wp.element.createElement(template_Controls, props));
Attendees.propTypes = {
  setTitle: external_tribe_modules_propTypes_default.a.func,
  title: external_tribe_modules_propTypes_default.a.string,
  isSelected: external_tribe_modules_propTypes_default.a.bool,
  isEmpty: external_tribe_modules_propTypes_default.a.bool,
  displayTitle: external_tribe_modules_propTypes_default.a.bool,
  displaySubtitle: external_tribe_modules_propTypes_default.a.bool,
  onSetDisplaySubtitleChange: external_tribe_modules_propTypes_default.a.func,
  onSetDisplayTitleChange: external_tribe_modules_propTypes_default.a.func
};
/* harmony default export */ var blocks_attendees_template = (Attendees);
// CONCATENATED MODULE: ./src/modules/blocks/attendees/container.js
/**
 * External dependencies
 */



/**
 * Internal dependencies
 */






/**
 * Module Code
 */

const blocks_attendees_container_mapStateToProps = state => ({
  title: getTitle(state),
  displayTitle: getDisplayTitle(state),
  displaySubtitle: getDisplaySubtitle(state)
});
const attendees_container_mapDispatchToProps = dispatch => ({
  setInitialState: props => dispatch(setInitialState(props)),
  setTitle: e => dispatch(actions_setTitle(e.target.value)),
  onSetDisplayTitleChange: checked => dispatch(setDisplayTitle(checked)),
  onSetDisplaySubtitleChange: checked => dispatch(setDisplaySubtitle(checked))
});
/* harmony default export */ var blocks_attendees_container = (Object(external_tribe_modules_redux_["compose"])(Object(external_tribe_common_hoc_["withStore"])(), Object(external_tribe_modules_reactRedux_["connect"])(blocks_attendees_container_mapStateToProps, attendees_container_mapDispatchToProps), with_save_data())(blocks_attendees_template));
// CONCATENATED MODULE: ./src/modules/blocks/attendees/index.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



/**
 * Module Code
 */
/* harmony default export */ var blocks_attendees = ({
  id: 'attendees',
  title: Object(external_wp_i18n_["__"])('Attendee List', 'event-tickets'),
  description: Object(external_wp_i18n_["__"])('Show the gravatars of people coming to this event.', 'event-tickets'),
  icon: wp.element.createElement(icons_attendees, null),
  category: 'tribe-tickets',
  keywords: ['event', 'events-gutenberg', 'tribe'],
  supports: {
    html: false,
    customClassName: false
  },
  attributes: {
    title: {
      type: 'html',
      default: Object(external_wp_i18n_["__"])('Who\'s Attending?', 'event-tickets')
    },
    displayTitle: {
      type: 'boolean',
      default: true
    },
    displaySubtitle: {
      type: 'boolean',
      default: true
    }
  },
  edit: blocks_attendees_container,
  save: () => null
});
// CONCATENATED MODULE: ./src/modules/blocks/index.js
/**
 * Wordpress dependencies
 */


/**
 * Internal dependencies
 */





const blocks_blocks = [modules_blocks_rsvp, blocks_tickets, modules_blocks_ticket, blocks_attendees];
blocks_blocks.forEach(block => Object(external_wp_blocks_["registerBlockType"])(`tribe/${block.id}`, block));

// Initialize AFTER blocks are registered
// to avoid plugin shown as available in reducer
// but not having block available for use
initStore();
/* harmony default export */ var modules_blocks = (blocks_blocks);
// CONCATENATED MODULE: ./src/modules/index.js
/**
 * Internal dependencies
 */






/***/ }),

/***/ "ZNLL":
/***/ (function(module, exports) {

module.exports = tribe.common.data;

/***/ }),

/***/ "Zz++":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a8Ir":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "aAk0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "apLV":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b+3r":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "bPb5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "ccmz":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "dZjw":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "dm1+":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e5yv":
/***/ (function(module, exports) {

module.exports = lodash.isArray;

/***/ }),

/***/ "eVJ4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fPIz":
/***/ (function(module, exports) {

module.exports = tribe.common.data.plugins.proptypes;

/***/ }),

/***/ "g8L8":
/***/ (function(module, exports) {

module.exports = tribe.common.store;

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = tribe.modules.reactRedux;

/***/ }),

/***/ "i9sy":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "jSdM":
/***/ (function(module, exports) {

module.exports = wp.editor;

/***/ }),

/***/ "k3Up":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "kd3S":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "l3Sj":
/***/ (function(module, exports) {

module.exports = wp.i18n;

/***/ }),

/***/ "ocgc":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "oe2g":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "p/3v":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "pN0F":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ph4m":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "qvN1":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "qxFF":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = tribe.modules.redux;

/***/ }),

/***/ "rR/g":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = tribe.modules.propTypes;

/***/ }),

/***/ "rl8x":
/***/ (function(module, exports) {

module.exports = wp.isShallowEqual;

/***/ }),

/***/ "s3Mt":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "s3Q2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "sMOv":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "tGAO":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "tI+e":
/***/ (function(module, exports) {

module.exports = wp.components;

/***/ }),

/***/ "trUg":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "unXf":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "vLzK":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = moment;

/***/ }),

/***/ "ztK3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });