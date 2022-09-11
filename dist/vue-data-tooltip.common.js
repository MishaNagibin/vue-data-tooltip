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
    install(Vue, options = {}) {
        let hasScrollBarY = false
        let lastEvent = undefined
        const { name, isElementClass, isElementTag, transitionDuration, styles = {} } = options
        const app = isElementClass
            ? document.getElementsByClassName(name || "app")[0]
            : isElementTag
            ? document.getElementsByTagName(name || "div")[0]
            : document.getElementById(name || "app")
        const init = () => {
            document.addEventListener("mouseover", mouseOver)
            document.addEventListener("mouseout", mouseOut)
            document.addEventListener("scroll", scroll)
        }
        const scroll = () => {
            if (lastEvent !== undefined) {
                closeTooltip(lastEvent)
            }
        }
        const closeTooltip = (e) => {
            if ([undefined, null].includes(app)) {
                return
            }

            const tooltip = app.querySelector(".vue-data-tooltip")

            if (tooltip !== null) {
                lastEvent = undefined
                e.target.removeEventListener("mousemove", tooltipMouseMove)
                app.removeChild(tooltip)
            }
        }
        const mouseOver = (e) => {
            const target = e.target

            if (target.nodeName === "HTML") {
                return
            }

            const tooltipText = target.dataset.tooltip ? target.dataset.tooltip : target.parentElement.dataset.tooltip

            if (tooltipText === undefined) {
                return
            }

            if ([undefined, null].includes(app)) {
                return
            }

            const div = document.createElement("div")
            div.className = "vue-data-tooltip"
            div.style.opacity = "0"
            div.style.position = "absolute"
            div.style.backgroundColor = styles.backgroundColor || "#596175"
            div.style.borderRadius = styles.borderRadius || "5px"
            div.style.maxWidth = styles.maxWidth || "259px"
            div.style.zIndex = "9999999"
            div.style.color = styles.color || "#ffffff"
            div.style.padding = styles.padding || "8px 10px"
            div.style.fontWeight = styles.fontWeight || "600"
            div.style.fontSize = styles.fontSize || "13px"
            div.style.fontFamily = styles.fontFamily || "Montserrat,sans-serif"
            div.style.lineHeight = styles.lineHeight || "16px"
            div.style.textAlign = styles.textAlign || "center"
            div.style.transition = `opacity ${`${transitionDuration !== undefined ? transitionDuration : "0.3"}`}s ease-in-out`
            div.style.pointerEvents = "none"
            div.innerHTML = tooltipText

            if (![undefined, null].includes(app)) {
                lastEvent = e
                app.appendChild(div)
                const tooltip = app.querySelector(".vue-data-tooltip")
                setTimeout(() => {
                    tooltip.style.opacity = "1"
                }, 200)
            }

            hasScrollBarY = document.documentElement.offsetHeight !== document.documentElement.scrollHeight
            e.target.addEventListener("mousemove", tooltipMouseMove)
            tooltipMouseMove(e)
            e.target.addEventListener("mouseup", () => closeTooltip(e))
        }
        const mouseOut = (e) => {
            if (lastEvent === undefined) {
                return
            }

            if ([undefined, null].includes(app)) {
                return
            }

            const tooltip = app.querySelector(".vue-data-tooltip")

            if (tooltip !== null && app !== null) {
                lastEvent = undefined
                app.removeChild(tooltip)
            }

            e.target.removeEventListener("mousemove", tooltipMouseMove)
        }
        const tooltipMouseMove = (e) => {
            const tooltip = document.querySelector(".vue-data-tooltip")
            tooltip.style.top =
                e.y + tooltip.clientHeight + 30 > e.view.innerHeight ? `${e.pageY - tooltip.clientHeight - 25}px` : `${e.pageY + 25}px`
            const mouseX = e.x - tooltip.clientWidth / 2 + 5
            tooltip.style.left = `${
                mouseX < 0
                    ? 10
                    : mouseX + tooltip.clientWidth + (hasScrollBarY ? 17 : 0) > e.view.innerWidth
                    ? e.view.innerWidth - tooltip.clientWidth - (hasScrollBarY ? 20 : 10)
                    : mouseX
            }px`
        }
        init()
    },
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (main);



/***/ })

/******/ });
//# sourceMappingURL=vue-data-tooltip.common.js.map