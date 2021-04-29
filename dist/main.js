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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/utils/css/style.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/utils/css/style.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".nav-content {\\n  background-color: rgb(33, 37, 41);\\n  opacity: 0.6;\\n}\\n\\n.m-h1 {\\n  font-family: \\\"Gotham SSm A\\\", \\\"Gotham SSm B\\\", sans-serif;\\n}\\n\\n.banner {\\n  height: 75vh;\\n}\\n\\n/* .main-banner {\\n  background-image: url(./utils/img/board.jpg);\\n} */\\n\\n.grid {\\n  display: grid;\\n  grid-template-columns: repeat(3, 1fr);\\n  row-gap: 1em;\\n  column-gap: 1em;\\n  margin-top: 20px;\\n}\\n\\n.menu-list {\\n  margin-top: 20px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/utils/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/utils/css/style.css":
/*!*********************************!*\
  !*** ./src/utils/css/style.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/utils/css/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://restaurant-page/./src/utils/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_pages_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/pages/nav */ \"./src/utils/pages/nav.js\");\n/* harmony import */ var _utils_css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/css/style.css */ \"./src/utils/css/style.css\");\n/* harmony import */ var _utils_pages_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/pages/home */ \"./src/utils/pages/home.js\");\n/* harmony import */ var _utils_pages_home_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/pages/home-items */ \"./src/utils/pages/home-items.js\");\n/* harmony import */ var _utils_pages_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/pages/contact */ \"./src/utils/pages/contact.js\");\n/* harmony import */ var _utils_pages_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/pages/menu */ \"./src/utils/pages/menu.js\");\n\n\n\n\n\n\n\n\nconst display = () => {\n  const content = document.querySelector('#content');\n\n  content.innerHTML = `\n  <div>\n    ${(0,_utils_pages_nav__WEBPACK_IMPORTED_MODULE_0__.default)()}\n    ${(0,_utils_pages_home__WEBPACK_IMPORTED_MODULE_2__.default)()}\n  </div>\n  <div id=\"display-text\">\n  \n  </div>\n`;\n};\n\nconst loadEventListers = () => {\n  const switchTabs = event => {\n    const content = document.querySelector('#display-text');\n    switch (event.target.element) {\n      case 'Menu':\n        content.innerHTML = (0,_utils_pages_menu__WEBPACK_IMPORTED_MODULE_5__.default)();\n        break;\n      case 'Contact':\n        content.innerHTML = (0,_utils_pages_contact__WEBPACK_IMPORTED_MODULE_4__.default)();\n      default:\n        content.innerHTML = (0,_utils_pages_home_items__WEBPACK_IMPORTED_MODULE_3__.default)();\n    }\n\n    const currentActive = document.querySelectorAll('.nav-links a.active');\n    currentActive.forEach(node => node.classList.remove('active'));\n    event.target.classList.add('active');\n  }\n\n  const navLinks = document.querySelectorAll('.nav-item a');\n  navLinks.forEach(navLink => navLink.addEventListener('click', switchTabs));\n}\n\ndisplay();\nloadEventListers();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/utils/pages/contact.js":
/*!************************************!*\
  !*** ./src/utils/pages/contact.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contact = () => {\n  const info = document.createElement('div');\n  info.className = 'contact p-4 row';\n  info.innerHTML = `\n    <div class=\"col-md-5 jumbotron mx-auto p-3\" >\n      <h2 class=\"py-4\">Reach Us</h2>\n      <form>\n        <div class=\"form-group\">\n          <label for=\"name\" >Name</lable>\n          <input class=\"form-control\" type=\"text\" id=\"name\" placeholder=\"Enter name\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"email\" >Email address</lable>\n          <input class=\"form-control\" type=\"email\" name=\"gender\" id=\"email\" placeholder=\"Enter Email\" required>\n          <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n        </div>\n        <div class=\"form-group\">\n          <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3 placeholder=\"Message\" ></textarea>\n        </div>\n        <div class=\" pt-3 mx-auto\">\n          <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n        </div>\n       \n      </form>\n    </div>\n  `\n  return info.outerHTML;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n//# sourceURL=webpack://restaurant-page/./src/utils/pages/contact.js?");

/***/ }),

/***/ "./src/utils/pages/home-items.js":
/*!***************************************!*\
  !*** ./src/utils/pages/home-items.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst homeItems = () => {\n  const details = document.createElement('div');\n  details.className = 'grid container-fluid';\n  details.innerHTML =  `\n\n  <div class=\"card text-center\">\n    <div class=\"card-body\">\n        <h3 class=\"card-title\">Cheap prices</h3>\n        <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>\n        <a href=\"#\" class=\"btn btn-primary w-50 m-auto\">Book A Table</a>\n    </div>\n  </div>\n\n  <div class=\"card text-center\">\n    <div class=\"card-body\">\n        <h3 class=\"card-title\">Michelin Stars</h3>\n        <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>\n        <a href=\"#\" class=\"btn btn-primary w-50 m-auto\">Book A Table</a>\n    </div>\n  </div>\n  <div class=\"card text-center\">\n    <div class=\"card-body\">\n        <h3 class=\"card-title\">Takeaway</h3>\n        <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>\n        <a href=\"#\" class=\"btn btn-primary w-50 m-auto\">Book A Table</a>\n    </div>\n  </div>\n  <div class=\"card text-center\">\n    <div class=\"card-body\">\n        <h3 class=\"card-title\">Cheap prices</h3>\n        <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>\n        <a href=\"#\" class=\"btn btn-primary w-50 m-auto\">Book A Table</a>\n    </div>\n  </div>\n  <div class=\"card text-center\">\n    <div class=\"card-body\">\n        <h3 class=\"card-title\">Michelin Stars</h3>\n        <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>\n        <a href=\"#\" class=\"btn btn-primary w-50 m-auto\">Book A Table</a>\n    </div>\n  </div>\n  <div class=\"card text-center\">\n  <div class=\"card-body\">\n      <h3 class=\"card-title\">Takeaway</h3>\n      <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>\n      <a href=\"#\" class=\"btn btn-primary w-50 m-auto\">Book A Table</a>\n  </div>\n</div>  \n  `;\n\n  return details.outerHTML;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeItems);\n\n//# sourceURL=webpack://restaurant-page/./src/utils/pages/home-items.js?");

/***/ }),

/***/ "./src/utils/pages/home.js":
/*!*********************************!*\
  !*** ./src/utils/pages/home.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst home = () => {\n  const UIhome = document.createElement('div');\n  UIhome.className = 'main-banner';\n\n  UIhome.innerHTML = `\n    <div class=\"container-fluid pt-5 bg-dark text-center banner\" >\n      <h1 class=\"display-1 text-white mt-4 mb-4 m-h1\">Table For Two<h1>\n      <div class=\"mt-5\">\n        <input type=\"button\" value=\"Reserve Table\" class=\"btn __btn bg-white text-dark p-4\"</input>\n        <input type=\"button\" value=\"Browser Menu\" class=\"btn __btn text-white p-4\"</input>\n      </div>\n    \n    </div>\n  \n  `;\nreturn UIhome.outerHTML;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://restaurant-page/./src/utils/pages/home.js?");

/***/ }),

/***/ "./src/utils/pages/menu.js":
/*!*********************************!*\
  !*** ./src/utils/pages/menu.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n  const menuItems = document.createElement('ul');\n  menuItems.className = 'menu-list';\n  menuItems.innerHTML = `\n  <li class=\"list-group-item d-flex justify-content-between\">\n    <strong class=\"font-weight-bold\">#</strong>\n    <span class=\"font-weight-bold\">Item </span>\n    <span class=\"font-weight-bold\">Ingredients</span>\n    <span class=\"font-weight-bold\">Price</span>\n  </li>\n  <li class=\"list-group-item d-flex justify-content-between\">\n    <strong class=\"font-weight-bold\">1</strong>\n    <span>Pizza Salami </span>\n    <span>Salami, Cheese, Ketchup</span>\n    <span>1.99$</span>\n  </li>\n  <li class=\"list-group-item d-flex justify-content-between\">\n    <strong class=\"font-weight-bold\">2</strong>\n    <span>Pasta </span>\n    <span>Pasta, Cheese, Olives</span>\n    <span>2.99$</span>\n  </li>\n  <li class=\"list-group-item d-flex justify-content-between\">\n    <strong class=\"font-weight-bold\">3</strong>\n    <span>French Fries </span>\n    <span>Curly Fried with Cheese</span>\n    <span>0.99$</span>\n  </li>\n  <li class=\"list-group-item d-flex justify-content-between\">\n  <strong class=\"font-weight-bold\">4</strong>\n  <span>Pizza Salami </span>\n  <span>Salami, Cheese, Ketchup</span>\n  <span>1.99$</span>\n</li>\n<li class=\"list-group-item d-flex justify-content-between\">\n  <strong class=\"font-weight-bold\">5</strong>\n  <span>Pasta </span>\n  <span>Pasta, Cheese, Olives</span>\n  <span>2.99$</span>\n</li>\n<li class=\"list-group-item d-flex justify-content-between\">\n  <strong class=\"font-weight-bold\">6</strong>\n  <span>French Fries </span>\n  <span>Curly Fried with Cheese</span>\n  <span>0.99$</span>\n</li>\n\n  \n  `;\n  return menuItems.outerHTML;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://restaurant-page/./src/utils/pages/menu.js?");

/***/ }),

/***/ "./src/utils/pages/nav.js":
/*!********************************!*\
  !*** ./src/utils/pages/nav.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst navbar = () => {\n  const nav = document.createElement('nav');\n\n  const navContent = document.createElement('ul');\n  navContent.className = 'nav nav-content justify-content-center';\n  navContent.innerHTML = `  \n  <li class=\"nav-item\">\n    <a class=\"nav-link text-white active\" id=\"home\" href=\"#\">Home</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link text-white\" id=\"menu\" href=\"#\">Menu</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link text-white\" id=\"contact\" href=\"#\">Contact</a>\n  </li>\n  `;\n\n  nav.appendChild(navContent);\n  return nav.outerHTML;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navbar);\n\n//# sourceURL=webpack://restaurant-page/./src/utils/pages/nav.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;