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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _parent = __webpack_require__(/*! ./parent */ \"./src/js/parent.js\");\n\nvar _parent2 = _interopRequireDefault(_parent);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _CustomElement() {\n    return Reflect.construct(HTMLElement, [], this.__proto__.constructor);\n}\n\n;\nObject.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);\nObject.setPrototypeOf(_CustomElement, HTMLElement);\n\n// Declaration of custom element inheriting from HTMLElement\nvar XProduct = function (_CustomElement2) {\n    _inherits(XProduct, _CustomElement2);\n\n    function XProduct() {\n        _classCallCheck(this, XProduct);\n\n        var _this = _possibleConstructorReturn(this, (XProduct.__proto__ || Object.getPrototypeOf(XProduct)).call(this));\n\n        _this.padre = new _parent2.default();\n        return _this;\n    }\n\n    _createClass(XProduct, [{\n        key: 'connectedCallback',\n        value: function connectedCallback() {\n            // Creating shadowroot\n            this.shadow = this.attachShadow({ mode: 'open' });\n\n            // CReating an img element and assigning values\n            this.div = document.createElement('div');\n            this.div.id = 'results';\n            // we append the img to  shadow root.\n            this.shadow.appendChild(this.div);\n\n            // CReating an img element and assigning values\n            this.message_button = document.createElement('button');\n            this.message_button.innerText = 'Click to send msg to child iframe, ' + this.padre.relation;\n            this.message_button.id = 'message_button';\n            // we append the img to  shadow root.\n            this.shadow.appendChild(this.message_button);\n\n            // CReating an img element and assigning values\n            this.results = document.createElement('h2');\n            this.results.innerText = 'Waiting for iframe message, ' + this.padre.relation;\n            // we append the img to  shadow root.\n            this.shadow.appendChild(this.results);\n\n            // CReating an iframe\n            this.iframe = document.createElement('iframe');\n            this.iframe.src = this.getAttribute('data-src');;\n            this.iframe.width = '100%';\n            this.iframe.height = '600';\n            this.shadow.appendChild(this.iframe);\n\n            this.setUpListeners();\n        }\n    }, {\n        key: 'bindEvent',\n        value: function bindEvent(element, eventName, eventHandler) {\n            if (element.addEventListener) {\n                element.addEventListener(eventName, eventHandler, false);\n            } else if (element.attachEvent) {\n                element.attachEvent('on' + eventName, eventHandler);\n            }\n        }\n    }, {\n        key: 'setUpListeners',\n        value: function setUpListeners() {\n            var _this2 = this;\n\n            // Send random messge data on every button click\n            this.bindEvent(this.message_button, 'click', function (e) {\n                var random = Math.random();\n                var message = '<span>' + _this2.padre.relation + ' iframe says: ' + random + '</span>';\n                _this2.sendMessage(message);\n            });\n            // Listen to message from child window\n            this.bindEvent(window, 'message', function (e) {\n                _this2.results.innerHTML = e.data;\n            });\n        }\n\n        // Send a message to the child iframe\n\n    }, {\n        key: 'sendMessage',\n        value: function sendMessage(msg) {\n            // Make sure you are sending a string, and to stringify JSON\n            this.iframe.contentWindow.postMessage(msg, '*');\n        }\n    }]);\n\n    return XProduct;\n}(_CustomElement);\n\n// We define the element\n\n\ncustomElements.define('omni-iframe', XProduct);\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/parent.js":
/*!**************************!*\
  !*** ./src/js/parent.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Parent = function Parent() {\n\t_classCallCheck(this, Parent);\n\n\tthis.relation = 'parent';\n};\n\nexports.default = Parent;\n\n//# sourceURL=webpack:///./src/js/parent.js?");

/***/ })

/******/ });