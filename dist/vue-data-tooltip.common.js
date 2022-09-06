module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./src/main.js
/* harmony default export */ var main = ({
    install(Vue, options) {
        Vue.mixin({
            data() {
                return {
                    hasScrollBarY: false,
                    lastEvent: undefined,
                    elementID: options || "app",
                }
            },
            mounted() {
                document.addEventListener("mouseover", this.tooltipMouseOver)
                document.addEventListener("mouseout", this.tooltipMouseOut)
                document.addEventListener("scroll", this.scroll)
            },
            methods: {
                scroll() {
                    if (this.lastEvent !== undefined) {
                        this.closeTooltip(this.lastEvent)
                    }
                },
                closeTooltip(e) {
                    const app = document.getElementById(this.elementID)

                    if (app === null) {
                        return
                    }

                    const tooltip = app.querySelector(".tooltip")

                    if (tooltip !== null) {
                        this.lastEvent = undefined
                        e.target.removeEventListener("mousemove", this.tooltipMouseMove)
                        app.removeChild(tooltip)
                    }
                },
                tooltipMouseOver(e) {
                    const target = e.target

                    if (target.nodeName === "HTML") {
                        return
                    }

                    const tooltipText = target.dataset.tooltip ? target.dataset.tooltip : target.parentElement.dataset.tooltip

                    if (tooltipText === undefined) {
                        return
                    }

                    const app = document.getElementById(this.elementID)

                    if (app === null) {
                        return
                    }

                    const div = document.createElement("div")
                    div.className = "tooltip"
                    div.style.opacity = "0"
                    div.style.position = "absolute"
                    div.style.backgroundColor = "#596175"
                    div.style.borderRadius = "5px"
                    div.style.maxWidth = "259px"
                    div.style.zIndex = "9999999"
                    div.style.color = "#ffffff"
                    div.style.padding = "8px 10px"
                    div.style.fontWeight = "600"
                    div.style.fontSize = "13px"
                    div.style.lineHeight = "16px"
                    div.style.textAlign = "center"
                    div.style.transition = "opacity 0.3s ease-in-out"
                    div.style.pointerEvents = "none"
                    div.innerHTML = tooltipText

                    if (app !== null) {
                        this.lastEvent = e
                        app.appendChild(div)
                        const tooltip = app.querySelector(".tooltip")
                        setTimeout(() => {
                            tooltip.style.opacity = "1"
                        }, 200)
                    }

                    this.hasScrollBarY = document.documentElement.offsetHeight !== document.documentElement.scrollHeight
                    e.target.addEventListener("mousemove", this.tooltipMouseMove)
                    this.tooltipMouseMove(e)
                    e.target.addEventListener("mouseup", () => this.closeTooltip(e))
                },
                tooltipMouseOut(e) {
                    if (this.lastEvent === undefined) {
                        return
                    }

                    const app = document.getElementById(this.elementID)

                    if (app === null) {
                        return
                    }

                    const tooltip = app.querySelector(".tooltip")

                    if (tooltip !== null && app !== null) {
                        this.lastEvent = undefined
                        app.removeChild(tooltip)
                    }

                    e.target.removeEventListener("mousemove", this.tooltipMouseMove)
                },
                tooltipMouseMove(e) {
                    const tooltip = document.querySelector(".tooltip")
                    tooltip.style.top =
                        e.y + tooltip.clientHeight + 30 > e.view.innerHeight
                            ? `${e.pageY - tooltip.clientHeight - 25}px`
                            : `${e.pageY + 25}px`
                    const mouseX = e.x - tooltip.clientWidth / 2 + 5
                    tooltip.style.left = `${
                        mouseX < 0
                            ? 10
                            : mouseX + tooltip.clientWidth + (this.hasScrollBarY ? 17 : 0) > e.view.innerWidth
                            ? e.view.innerWidth - tooltip.clientWidth - (this.hasScrollBarY ? 20 : 10)
                            : mouseX
                    }px`
                },
            },
        })
    },
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (main);



/***/ })

/******/ });
//# sourceMappingURL=vue-data-tooltip.common.js.map