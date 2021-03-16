(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Vue"));
	else if(typeof define === 'function' && define.amd)
		define(["Vue"], factory);
	else if(typeof exports === 'object')
		exports["GomeUIKit"] = factory(require("Vue"));
	else
		root["GomeUIKit"] = factory(root["Vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _nocss = __webpack_require__(5);

	Object.keys(_nocss).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _nocss[key];
	    }
	  });
	});

	__webpack_require__(150);

	var _nocss2 = _interopRequireDefault(_nocss);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _nocss2.default; /*
	                                    * @Author: zhaoye 
	                                    * @Date: 2017-01-09 14:05:19 
	                                    * @Last Modified by: zhaoye
	                                    * @Last Modified time: 2017-05-02 17:26:30
	                                    */

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Pagination = exports.CImage = exports.TabNav = exports.Page = exports.Root = exports.Aside = exports.OptionMixin = exports.OptionItem = exports.RadioMixin = exports.RadioItem = exports.RadioGroup = exports.ErrorPage = exports.Tag = exports.Product = exports.Timer = exports.Gotop = exports.Loading = exports.Slider = exports.Swiper = exports.Scroller = exports.Button = exports.ModalMixin = exports.CModal = exports.Modal = exports.CToast = exports.Toast = undefined;

	var _vue = __webpack_require__(6);

	var _vue2 = _interopRequireDefault(_vue);

	var _toast = __webpack_require__(7);

	var _toast2 = _interopRequireDefault(_toast);

	var _toast3 = __webpack_require__(8);

	var _toast4 = _interopRequireDefault(_toast3);

	var _modal = __webpack_require__(18);

	var _modal2 = _interopRequireDefault(_modal);

	var _modalCustom = __webpack_require__(36);

	var _modalCustom2 = _interopRequireDefault(_modalCustom);

	var _modalMixin = __webpack_require__(33);

	var _modalMixin2 = _interopRequireDefault(_modalMixin);

	var _button = __webpack_require__(26);

	var _button2 = _interopRequireDefault(_button);

	var _scroller = __webpack_require__(43);

	var _scroller2 = _interopRequireDefault(_scroller);

	var _swiper = __webpack_require__(50);

	var _swiper2 = _interopRequireDefault(_swiper);

	var _slider = __webpack_require__(55);

	var _slider2 = _interopRequireDefault(_slider);

	var _image = __webpack_require__(60);

	var _image2 = _interopRequireDefault(_image);

	var _loading = __webpack_require__(67);

	var _loading2 = _interopRequireDefault(_loading);

	var _gotop = __webpack_require__(73);

	var _gotop2 = _interopRequireDefault(_gotop);

	var _timer = __webpack_require__(79);

	var _timer2 = _interopRequireDefault(_timer);

	var _product = __webpack_require__(84);

	var _product2 = _interopRequireDefault(_product);

	var _tag = __webpack_require__(89);

	var _tag2 = _interopRequireDefault(_tag);

	var _error = __webpack_require__(94);

	var _error2 = _interopRequireDefault(_error);

	var _errorCustom = __webpack_require__(100);

	var _errorCustom2 = _interopRequireDefault(_errorCustom);

	var _radioGroup = __webpack_require__(105);

	var _radioGroup2 = _interopRequireDefault(_radioGroup);

	var _radioItem = __webpack_require__(107);

	var _radioItem2 = _interopRequireDefault(_radioItem);

	var _radioMixin = __webpack_require__(110);

	var _radioMixin2 = _interopRequireDefault(_radioMixin);

	var _option = __webpack_require__(113);

	var _option2 = _interopRequireDefault(_option);

	var _optionMixin = __webpack_require__(116);

	var _optionMixin2 = _interopRequireDefault(_optionMixin);

	var _aside = __webpack_require__(118);

	var _aside2 = _interopRequireDefault(_aside);

	var _root = __webpack_require__(123);

	var _root2 = _interopRequireDefault(_root);

	var _page = __webpack_require__(128);

	var _page2 = _interopRequireDefault(_page);

	var _pagination = __webpack_require__(133);

	var _pagination2 = _interopRequireDefault(_pagination);

	var _gomeUtilsEventbus = __webpack_require__(17);

	var _gomeUtilsEventbus2 = _interopRequireDefault(_gomeUtilsEventbus);

	var _tabnav = __webpack_require__(138);

	var _tabnav2 = _interopRequireDefault(_tabnav);

	var _modalSpa = __webpack_require__(143);

	var _modalSpa2 = _interopRequireDefault(_modalSpa);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	 * @Author: zhaoye 
	 * @Date: 2017-03-13 16:56:43 
	 * @Last Modified by: zhaoye
	 * @Last Modified time: 2017-05-17 19:31:59
	 */
	/**
	 * 自动媒体查询
	 */
	var width = document.querySelector('html').offsetWidth;
	var fontSize = 100 / 750 * width;
	document.querySelector('html').style.fontSize = fontSize + 'px';
	window.addEventListener('resize', function () {
	    var width = document.querySelector('html').offsetWidth;
	    var fontSize = 100 / 750 * width;
	    document.querySelector('html').style.fontSize = fontSize + 'px';
	});


	var ErrorPage = {
	    Default: _error2.default,
	    Custom: _errorCustom2.default
	};

	var loadings = [];
	_gomeUtilsEventbus2.default.on('loading', function () {
	    loadings.push(new _loading2.default());
	});

	_gomeUtilsEventbus2.default.on('loading.lazy', function () {
	    loadings.push(new _loading2.default({ data: { mode: 'lazy' } }));
	});

	_gomeUtilsEventbus2.default.on('loaded', function () {
	    if (loadings[0]) {
	        loadings[0].$destroy();
	        loadings.shift();
	    }
	});

	//以插件形式存在的Modal
	_modal2.default.install = function (Vue, options) {
	    Vue.prototype.$Modal = function (options, ok, cancel) {
	        var _this = this;

	        this.$nextTick(function () {
	            //恢复默认
	            var gomeModal = _this.$root.$refs['gome-ui-kit-modal'];
	            gomeModal.htmlContent = '';
	            gomeModal.conent = '';
	            gomeModal.title = '';
	            gomeModal.ok = '';
	            gomeModal.cancel = '';
	            gomeModal.hasClose = false;

	            //显示
	            gomeModal.show = true;
	            //重新赋值
	            for (var key in options) {
	                gomeModal[key] = options[key];
	            }
	            //侦听成功的消息
	            // if(ok == 'ajaxc'){
	            //         console.log('1111')
	            // }else{
	            gomeModal.$on('ok', function () {
	                if (typeof ok === 'function') {
	                    ok();
	                } else {
	                    gomeModal.show = false;
	                }
	            });
	            gomeModal.$on('cancel', function () {
	                gomeModal.show = false;
	            });
	        });
	    };
	};
	_vue2.default.use(_modal2.default);

	_toast4.default.install = function (Vue, options) {};


	_vue2.default.component('modal-spa', {
	    name: 'modal',
	    functional: true,
	    render: function render(h) {
	        return h(_modalSpa2.default, { ref: 'gome-ui-kit-modal' });
	    }
	});

	exports.Toast = _toast2.default;
	exports.CToast = _toast4.default;
	exports.Modal = _modal2.default;
	exports.CModal = _modalCustom2.default;
	exports.ModalMixin = _modalMixin2.default;
	exports.Button = _button2.default;
	exports.Scroller = _scroller2.default;
	exports.Swiper = _swiper2.default;
	exports.Slider = _slider2.default;
	exports.Loading = _loading2.default;
	exports.Gotop = _gotop2.default;
	exports.Timer = _timer2.default;
	exports.Product = _product2.default;
	exports.Tag = _tag2.default;
	exports.ErrorPage = ErrorPage;
	exports.RadioGroup = _radioGroup2.default;
	exports.RadioItem = _radioItem2.default;
	exports.RadioMixin = _radioMixin2.default;
	exports.OptionItem = _option2.default;
	exports.OptionMixin = _optionMixin2.default;
	exports.Aside = _aside2.default;
	exports.Root = _root2.default;
	exports.Page = _page2.default;
	exports.TabNav = _tabnav2.default;
	exports.CImage = _image2.default;
	exports.Pagination = _pagination2.default;
	exports.default = {
	    Toast: _toast2.default,
	    CToast: _toast4.default,
	    Modal: _modal2.default,
	    CModal: _modalCustom2.default,
	    ModalMixin: _modalMixin2.default,
	    Button: _button2.default,
	    Scroller: _scroller2.default,
	    Swiper: _swiper2.default,
	    Slider: _slider2.default,
	    Loading: _loading2.default,
	    Gotop: _gotop2.default,
	    Timer: _timer2.default,
	    Product: _product2.default,
	    Tag: _tag2.default,
	    ErrorPage: ErrorPage,
	    RadioGroup: _radioGroup2.default,
	    RadioItem: _radioItem2.default,
	    RadioMixin: _radioMixin2.default,
	    OptionItem: _option2.default,
	    OptionMixin: _optionMixin2.default,
	    Aside: _aside2.default,
	    Root: _root2.default,
	    Page: _page2.default,
	    TabNav: _tabnav2.default,
	    CImage: _image2.default,
	    Pagination: _pagination2.default
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _toast = __webpack_require__(8);

	var _toast2 = _interopRequireDefault(_toast);

	var _gomeUtilsEventbus = __webpack_require__(17);

	var _gomeUtilsEventbus2 = _interopRequireDefault(_gomeUtilsEventbus);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	 * @Author: zhaoye 
	 * @Date: 2017-01-12 17:32:38 
	 * @Last Modified by: zhaoye
	 * @Last Modified time: 2017-02-13 16:51:49
	 */
	var cid = 0;
	var list = [];
	function toast(text) {
	    if (list.length > 0) {
	        list[0].$destroy();
	    }
	    var $container = document.createElement('div');
	    $container.id = 'toast-cid-' + cid;
	    document.body.appendChild($container);
	    var toastInstance = new _toast2.default({
	        el: '#' + $container.id,
	        data: {
	            text: text
	        },
	        destroyed: function destroyed() {
	            list.shift();
	            this.$el.parentNode.removeChild(this.$el);
	        }
	    });
	    list.push(toastInstance);
	    cid++;
	    return toastInstance;
	}
	_gomeUtilsEventbus2.default.on('toast', function (text) {
	    toast(text);
	});

	exports.default = toast;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(9)
	__webpack_require__(13)

	/* script */
	__vue_exports__ = __webpack_require__(15)

	/* template */
	var __vue_template__ = __webpack_require__(16)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\workspace\\h5\\gome-ui-kit\\components\\toast\\toast.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-0b0addef"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0b0addef", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-0b0addef", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] toast.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0b0addef!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./toast.vue", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0b0addef!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./toast.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "\n.toast-container {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  height: 1.1rem;\n  width: 3.8rem;\n  z-index: 99999;\n}\n.toast-container .toast {\n  -webkit-transform: translate(-50%, -50%);\n  -moz-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  position: absolute;\n  font-size: .3rem;\n  padding: .24rem .3rem;\n  background-color: rgba(0, 0, 0, 0.8);\n  border-radius: .04rem;\n  color: #fff;\n  text-align: center;\n  word-break: break-all;\n  line-height: 1.3;\n  border-radius: .2rem;\n}\n", ""]);

	// exports


/***/ },
/* 11 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0b0addef&scoped=true!../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./toast.vue", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0b0addef&scoped=true!../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./toast.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "\n.fade-enter-active[data-v-0b0addef] {\n  transition: all .5s;\n}\n.fade-leave-active[data-v-0b0addef] {\n  transition: all .5s;\n}\n.fade-enter[data-v-0b0addef], .fade-leave-active[data-v-0b0addef] {\n    opacity: 0;\n}\n.fade-enter[data-v-0b0addef] {\n    -webkit-transform: translate(-50%, 25%);\n    -moz-transform: translate(-50%, 25%);\n    transform: translate(-50%, 25%);\n    -webkit-transition-timing-function: ease-in;\n    -moz-transition-timing-function: ease-in;\n    transition-timing-function: ease-in;\n}\n.fade-leave-active[data-v-0b0addef] {\n    -webkit-transform: translate(-50%, -125%);\n    -moz-transform: translate(-50%, -125%);\n    transform: translate(-50%, -125%);\n    -webkit-transition-timing-function: ease-out;\n    -moz-transition-timing-function: ease-out;\n    transition-timing-function: ease-out;\n}\n", ""]);

	// exports


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vue = __webpack_require__(6);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _vue2.default.extend({
	    data: function data() {
	        return {
	            isShow: false,
	            text: ''
	        };
	    },
	    mounted: function mounted() {
	        var _this = this;

	        this.$nextTick(function () {
	            _this.isShow = true;
	            setTimeout(function () {
	                _this.isShow = false;
	            }, 1000);
	        });
	    },

	    methods: {
	        afterLeave: function afterLeave() {
	            this.$emit('destroy');
	            this.$destroy();
	        }
	    }
	}); //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "toast-container"
	  }, [_c('transition', {
	    attrs: {
	      "name": "fade"
	    },
	    on: {
	      "after-leave": _vm.afterLeave
	    }
	  }, [(_vm.isShow && _vm.text) ? _c('div', {
	    staticClass: "toast"
	  }, [_vm._v("\n            " + _vm._s(_vm.text) + "\n        ")]) : _vm._e()])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-0b0addef", module.exports)
	  }
	}

/***/ },
/* 17 */
/***/ function(module, exports) {

	import 'core-js/fn/map'
	class EventBus {
	    constructor() {
	        if(!window['__eventBusgetInstance']){
	            window['__eventBusgetInstance'] = this;
	            this.cid = 0;
	            this.msgMap = new Map();
	        }
	    }
	    getInstance() {
	        return window['__eventBusgetInstance'];
	    }
	    getCid() {
	        this.getInstance().cid++;
	        return this.getInstance().cid;
	    }
	    emitDOM (msg ,data = "", canBubble = false, canCancel = false, dom = window) {
	        const event = document.createEvent('HTMLEvents');
	        event.data = data;
	        event.initEvent(msg,canBubble, canCancel);
	        dom.dispatchEvent(event);
	    }
	    emit(msg, data, instance) {
	        if(this.getInstance().msgMap.has(msg)){
	            this.getInstance().msgMap.get(msg).forEach((cb) => {
	                if(instance && cb.instance){
	                    if(cb.instance === instance){
	                        if(cb.__once && !cb.__emitted){
	                            cb.__emitted = true
	                            cb(data)
	                        }else
	                            cb(data)
	                    }
	                }else{
	                    if(cb.__once && !cb.__emitted){
	                        cb.__emitted = true
	                        cb(data)
	                    }else
	                        cb(data)
	                }
	            });
	        }
	    }
	    on(msg, cb, instance, name) {
	        if(!cb)cb = new Function;
	        cb.cid = this.getCid();
	        cb.nid = name;
	        cb.instance = instance;
	        if(!this.getInstance().msgMap.has(msg)){
	            this.getInstance().msgMap.set(msg,[cb]);
	        }else{
	            this.getInstance().msgMap.get(msg).push(cb);
	        }
	    }
	    only (msg, cb, instance, name) {
	        if(this.getInstance().msgMap.has(msg)){
	            this.getInstance().msgMap.delete(msg);
	        }
	        this.on(msg, cb, instance, name);
	    }
	    once (msg, cb, instance, name) {
	        cb.__once = true
	        cb.__emitted = false
	        this.on(msg, cb, instance, name)
	    }
	    off(msg, cb) {
	        if(this.getInstance().msgMap.has(msg)) {
	            let cbSet = this.getInstance().msgMap.get(msg);
	            if(!!cb && typeof cb === 'function') {
	                cbSet.forEach((_cb, index) => {
	                    if(!!cb.cid && cb.cid === _cb.cid){
	                        cbSet.splice(index,index);
	                    }
	                });
	            }else if(!!cb && typeof cb === 'string'){
	                let name = cb;
	                //name
	                cbSet.forEach((_cb, index) => {
	                    if(name === _cb.nid){
	                        cbSet.splice(index,index);
	                    }
	                });
	            }else{
	                this.getInstance().msgMap.delete(msg);
	            }
	        }
	    }
	}
	export default new EventBus;



/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(19)
	__webpack_require__(22)

	/* script */
	__vue_exports__ = __webpack_require__(25)

	/* template */
	var __vue_template__ = __webpack_require__(35)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\workspace\\h5\\gome-ui-kit\\components\\modal\\modal.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-bcc6f70a"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-bcc6f70a", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-bcc6f70a", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] modal.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-bcc6f70a!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./modal.vue", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-bcc6f70a!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./modal.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "/*opacity*/\n/*font size*/\n/*z*/\n/*font-icon*/\n/*\n* @Author: zhaoye-ds1\n* @Date:   2015-08-18 11:14:43\n * @Last Modified by: zhaoye\n * @Last Modified time: 2017-04-28 20:32:26\n*/\n/* end*/\n.alert {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100099;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n  display: -webkit-box;\n  display: box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-align: center;\n  box-pack: center;\n  align-items: center;\n  -webkit-align-items: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n.alert.h_center {\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-pack: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n.alert.v_center:not(.vertical) {\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  box-align: center;\n  align-items: center;\n  -webkit-align-items: center;\n}\n.alert.v_center.vertical {\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-pack: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n}\n.alert.center {\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-align: center;\n  box-pack: center;\n  align-items: center;\n  -webkit-align-items: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n.alert.vertical {\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n}\n.alert.reverse {\n  flex-direction: row-reverse;\n  -webkit-flex-direction: row-reverse;\n  -ms-direction: row-reverse;\n  -webkit-box-direction: reverse;\n  -moz-box-direction: reverse;\n  box-direction: reverse;\n}\n.alert.stretch {\n  align-content: stretch;\n}\n.alert .window {\n  width: 5.4rem;\n  max-width: 5.4rem;\n  background-color: #fff;\n  font-size: 0.3rem;\n  border-radius: 0.2rem;\n  overflow: hidden;\n}\n.alert .window .title {\n  padding: 0.2rem 0;\n  font-size: 0.4rem;\n  text-align: center;\n  line-height: 0.52rem;\n  color: #333;\n  display: -webkit-box;\n  display: box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.alert .window .title.h_center {\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-pack: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n.alert .window .title.v_center:not(.vertical) {\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  box-align: center;\n  align-items: center;\n  -webkit-align-items: center;\n}\n.alert .window .title.v_center.vertical {\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-pack: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n}\n.alert .window .title.center {\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-align: center;\n  box-pack: center;\n  align-items: center;\n  -webkit-align-items: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n.alert .window .title.vertical {\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n}\n.alert .window .title.reverse {\n  flex-direction: row-reverse;\n  -webkit-flex-direction: row-reverse;\n  -ms-direction: row-reverse;\n  -webkit-box-direction: reverse;\n  -moz-box-direction: reverse;\n  box-direction: reverse;\n}\n.alert .window .title.stretch {\n  align-content: stretch;\n}\n.alert .window .title .text {\n  display: block;\n  -webkit-box-flex: 1;\n  -moz-box-flex: 1;\n  -webkit-flex: 1;\n  flex: 1;\n  align-items: stretch;\n  box-sizing: border-box;\n}\n.alert .window .title .text.fix-position {\n  padding-left: 0.7rem;\n}\n.alert .window .close {\n  color: #333;\n  background-color: #fff;\n  display: -webkit-box;\n  display: box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n}\n.alert .window .close.h_center {\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-pack: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n.alert .window .close.v_center:not(.vertical) {\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  box-align: center;\n  align-items: center;\n  -webkit-align-items: center;\n}\n.alert .window .close.v_center.vertical {\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-pack: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n}\n.alert .window .close.center {\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-align: center;\n  box-pack: center;\n  align-items: center;\n  -webkit-align-items: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n.alert .window .close.vertical {\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n}\n.alert .window .close.reverse {\n  flex-direction: row-reverse;\n  -webkit-flex-direction: row-reverse;\n  -ms-direction: row-reverse;\n  -webkit-box-direction: reverse;\n  -moz-box-direction: reverse;\n  box-direction: reverse;\n}\n.alert .window .close.stretch {\n  align-content: stretch;\n}\n.alert .window .close .blocker {\n  -moz-box-flex: 1;\n  -webkit-flex: 1;\n  flex: 1;\n  align-items: stretch;\n  box-sizing: border-box;\n  display: block;\n  content: ' ';\n  height: 100%;\n  width: 100%;\n  -webkit-box-flex: 1;\n}\n.alert .window .close i {\n  background-image: url(" + __webpack_require__(21) + ");\n  background-repeat: no-repeat;\n  background-position: center 40%;\n  background-size: 0.26666667rem 0.26666667rem;\n  display: block;\n  width: 0.7rem;\n  height: 0.7rem;\n}\n.alert .window .content {\n  text-align: center;\n  font-size: .32rem;\n  padding: .4rem;\n  color: #333;\n}\n.alert .window .title + .content {\n  padding-top: 0;\n}\n.alert .window .btn-container {\n  display: -webkit-box;\n  display: box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.alert .window .btn-container.h_center {\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-pack: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n.alert .window .btn-container.v_center:not(.vertical) {\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  box-align: center;\n  align-items: center;\n  -webkit-align-items: center;\n}\n.alert .window .btn-container.v_center.vertical {\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-pack: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n}\n.alert .window .btn-container.center {\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-align: center;\n  box-pack: center;\n  align-items: center;\n  -webkit-align-items: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n.alert .window .btn-container.vertical {\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n}\n.alert .window .btn-container.reverse {\n  flex-direction: row-reverse;\n  -webkit-flex-direction: row-reverse;\n  -ms-direction: row-reverse;\n  -webkit-box-direction: reverse;\n  -moz-box-direction: reverse;\n  box-direction: reverse;\n}\n.alert .window .btn-container.stretch {\n  align-content: stretch;\n}\n.alert .window .btn-container .btn {\n  display: block;\n  -webkit-box-flex: 1;\n  -moz-box-flex: 1;\n  -webkit-flex: 1;\n  flex: 1;\n  align-items: stretch;\n  box-sizing: border-box;\n  height: .88rem;\n  font-size: .32rem;\n  background-color: #fff;\n  color: #333;\n  line-height: .88rem;\n  text-align: center;\n  border: none;\n  border-radius: 0;\n  border-top: 1px #ddd solid;\n}\n.alert .window .btn-container .btn:first-child:not(:only-child) {\n  border-right: 1px #ddd solid;\n}\n.alert .window .btn-container .btnOk {\n  background: #ff5c5c;\n  border-radius: 0 0 .2rem 0;\n  color: #fff;\n}\n.alert .window .btn-container .btnCan {\n  border-radius: 0 0 0 .2rem;\n}\n", ""]);

	// exports


/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyMGJjODRkNC1kOTcxLTk2NGYtYWU4MS0wY2VjYzA0MjQzZjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUFEN0ZCMjFERDQ0MTFFNkFDM0JBRjk1MDU3MDhGRDkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUFEN0ZCMjBERDQ0MTFFNkFDM0JBRjk1MDU3MDhGRDkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjJhNjBjZDUtMzkyZC00N2MwLTgxNWQtYzlkN2M3YjkwNTY0IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6Y2U4YmM1YjItM2E4NC0xMWU1LWI4NmMtZDdlMDA0NGZmMjBjIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+6oQpdQAAASRJREFUeNqk1U9qwkAUBvDJwytYjxCsFnoBhbhTaHfVg/UWdSdUXBnBA7hRRE9Qddm9+j14kTDMfwc+DZnJz/jekGTDj69vpVQHmSAXFTnms5/H8ehz3MLXArkRPt6QAlkiTZU4BGXjHckYHiM7pJuK19BXZI8MM5SC515koiM/UkSURUcHKM8fyeSZTwjKeBl450aUJ6i2KBa3ojocg+toUUdNcAhuQk86Qpa/acODUB4NRw3PsjtKwddyPq9Q5GS7uOHp+kWAtYA8jj7UVQrXmhtyjb3I1v1c7vQgx959Th60rDWqj/RC9zl50LbWqKrmDxzPiWYobEP1hjpxikSDcUpAg3BKRL04PYFWryYjzvBvKurApwz/I5tU1ICvkO1dgAEAf1OPv3sURCYAAAAASUVORK5CYII="

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(23);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-bcc6f70a&scoped=true!../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./modal.vue", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-bcc6f70a&scoped=true!../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./modal.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports
	exports.i(__webpack_require__(24), "");

	// module
	exports.push([module.id, "\r\n", ""]);

	// exports


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "\r\n.fade-enter-active,\r\n.fade-leave-active {\r\n    transition: all .5s;\r\n}\r\n.fade-enter,\r\n.fade-leave-active {\r\n    opacity: 0;\r\n}\r\n.fade-enter .window {\r\n    -webkit-transform: translate(0%, 25%);\r\n    -moz-transform: translate(0%, 25%);\r\n    transform: translate(0%, 25%);\r\n    -webkit-transition-timing-function: ease-in;\r\n    -moz-transition-timing-function: ease-in;\r\n    transition-timing-function: ease-in;\r\n}\r\n.fade-leave-active .window {\r\n    -webkit-transform: translate(0%, -25%);\r\n    -moz-transform: translate(0%, -25%);\r\n    transform: translate(0%, -25%);\r\n    -webkit-transition-timing-function: ease-in;\r\n    -moz-transition-timing-function: ease-in;\r\n    transition-timing-function: ease-in;\r\n}\r\n.fade-enter-active .window,\r\n.fade-leave-active .window{\r\n    transition: all .5s;\r\n}", ""]);

	// exports


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vue = __webpack_require__(6);

	var _vue2 = _interopRequireDefault(_vue);

	var _button = __webpack_require__(26);

	var _button2 = _interopRequireDefault(_button);

	var _modalMixin = __webpack_require__(33);

	var _modalMixin2 = _interopRequireDefault(_modalMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _vue2.default.extend({
	    mixins: [_modalMixin2.default],
	    components: {
	        btn: _button2.default
	    },
	    data: function data() {
	        return {
	            show: false,
	            title: '',
	            content: '',
	            htmlContent: '',
	            cancel: '',
	            ok: '',
	            hasClose: false
	        };
	    },

	    methods: {
	        onClick: function onClick(msg, e) {
	            this.$emit(msg, e);
	            if (msg == 'cancel' || msg == 'ok') {
	                this.close();
	            }
	        },
	        close: function close() {
	            this.show = false;
	        },
	        afterLeave: function afterLeave() {
	            this._destroy();
	        },
	        _destroy: function _destroy() {
	            this.$destroy();
	        }
	    }
	}); //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(27)

	/* script */
	__vue_exports__ = __webpack_require__(29)

	/* template */
	var __vue_template__ = __webpack_require__(32)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\workspace\\h5\\gome-ui-kit\\components\\button\\button.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-e27af2ce", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-e27af2ce", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] button.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(28);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-e27af2ce!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./button.vue", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-e27af2ce!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./button.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "/*opacity*/\n/*font size*/\n/*z*/\n/*font-icon*/\n.btn {\n  display: inline-block;\n  padding: 0 0.2rem;\n}\n.btn[data-icon]:before {\n  display: inline;\n  line-height: 0.56rem;\n  font-size: 0.28rem;\n}\n.btn.default {\n  border-radius: 0.04rem;\n  border: 0.02rem #ff5c5c solid;\n  background-color: #ff5c5c;\n  font-size: 0.28rem;\n  color: #fff;\n  line-height: 0.72rem;\n}\n.btn.default.hover {\n  background-color: #cf0909;\n}\n.btn.default.disabled {\n  background-color: #ccc;\n  color: #999;\n}\n.btn.default.large {\n  line-height: 0.8rem;\n  font-size: 0.36rem;\n}\n.btn.default.large.disabled {\n  background-color: #ff5c5c;\n  color: #fff;\n  opacity: .3;\n}\n.btn.inline {\n  line-height: 0.84rem;\n  background-color: #ff5c5c;\n  font-size: 0.36rem;\n  color: #fff;\n  border-radius: none;\n}\n.btn.inline.disabled {\n  background-color: #ccc;\n  color: #999;\n}\n.btn.inline.hover {\n  background-color: #cf0909;\n}\n.btn.reverse {\n  line-height: 0.56rem;\n  border-radius: 0.04rem;\n  border: 0.02rem #ff5c5c solid;\n  color: #ff5c5c;\n  background-color: #fff;\n  font-size: 0.28rem;\n}\n.btn.reverse.hover {\n  background-color: #ff5c5c;\n  color: #fff;\n}\n.btn.reverse.disabled {\n  opacity: .3;\n}\n.btn.reverse.gray {\n  background-color: #fff;\n  color: #666;\n  border: 0.02rem #ddd solid;\n}\n.btn.reverse.gray.hover {\n  background-color: #ddd;\n}\n.btn.icon-btn {\n  font-size: 0.28rem;\n  border: 0.02rem #666 solid;\n  color: #666;\n}\n.btn.icon-btn.hover {\n  color: #fff;\n  background-color: #666;\n}\n.btn.block {\n  display: block;\n  border-radius: 0;\n  text-align: center;\n}\n", ""]);

	// exports


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _base = __webpack_require__(30);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    mixins: [_base2.default],
	    props: ['isDisabled', 'href'],
	    data: function data() {
	        return {
	            isHover: true,
	            hover: ''
	        };
	    },

	    computed: {
	        disabled: function disabled() {
	            if (this.isDisabled === 'true') return 'disabled';else if (this.Disabled === 'false') return '';
	            if (this.isDisabled != true) {
	                return '';
	            } else {
	                return 'disabled';
	            }
	        }
	    },
	    created: function created() {
	        var _this = this;

	        document.addEventListener('touchend', function (e) {
	            _this.hover = '';
	        });
	    },

	    methods: {
	        touchstart: function touchstart() {
	            if (!this.disabled) this.hover = 'hover';
	        }
	    }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(31)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\workspace\\h5\\gome-ui-kit\\components\\base.vue"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-38259064", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-38259064", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] base.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 31 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//

	if (window['ctmCid'] !== 0) {
	    window['ctmCid'] = 0;
	}
	exports.default = {
	    props: ['className'],
	    methods: {
	        //TODO modal toast loading 插件化
	        mountMyself: function mountMyself() {
	            var _this = this;

	            var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'module';

	            //nextTick导致ios8上loading会在侦听到loaded事件之后出现
	            //目前注释掉，但不知道会不会造成其他问题，需要观察
	            this.$nextTick(function () {
	                var $blocker = document.createElement('div');
	                window['ctmCid']++;
	                $blocker.id = id + '-ctm-' + window['ctmCid'];
	                document.body.appendChild($blocker);
	                _this.$mount('#' + $blocker.id);
	            });
	        },
	        mountMyself2: function mountMyself2() {
	            var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'module';

	            //ps. 注释掉nextTick会导致内置modal组件的组件，出现在root外的情况
	            //所以新开一个注释掉的，给loading专门用
	            //this.$nextTick(() => {
	            var $blocker = document.createElement('div');
	            window['ctmCid']++;
	            $blocker.id = id + '-ctm-' + window['ctmCid'];
	            document.body.appendChild($blocker);
	            this.$mount('#' + $blocker.id);
	            //});
	        },
	        destroyMyself: function destroyMyself() {
	            this.$destroy();
	        }
	    },
	    beforeDestroy: function beforeDestroy() {
	        if (this.$el && this.$el.parentNode) this.$el.parentNode.removeChild(this.$el);
	    }
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('a', {
	    staticClass: "btn",
	    class: [_vm.disabled, _vm.hover, _vm.className],
	    attrs: {
	      "href": _vm.href
	    },
	    on: {
	      "touchstart": _vm.touchstart
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-e27af2ce", module.exports)
	  }
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(34)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\workspace\\h5\\gome-ui-kit\\components\\modal\\modal.mixin.vue"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-a18bf464", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-a18bf464", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] modal.mixin.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vue = __webpack_require__(6);

	var _vue2 = _interopRequireDefault(_vue);

	var _base = __webpack_require__(30);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _vue2.default.extend({
	    mixins: [_base2.default],
	    created: function created() {
	        this.mountMyself();
	    },
	    mounted: function mounted() {
	        var _this = this;

	        this.$nextTick(function () {
	            _this.show = true;
	        });
	    },
	    data: function data() {
	        return {
	            show: false,
	            title: '',
	            content: '',
	            htmlContent: '',
	            cancel: '',
	            ok: '',
	            hasClose: false,
	            className: ''
	        };
	    }
	});

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('transition', {
	    attrs: {
	      "name": "fade"
	    },
	    on: {
	      "after-leave": _vm.afterLeave
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.show),
	      expression: "show"
	    }],
	    staticClass: "alert",
	    class: _vm.className
	  }, [_c('div', {
	    staticClass: "window"
	  }, [(_vm.title || _vm.hasClose) ? _c('h4', {
	    staticClass: "title"
	  }, [(_vm.title) ? _c('span', {
	    staticClass: "text",
	    class: {
	      'fix-position': _vm.hasClose
	    }
	  }, [_vm._v(_vm._s(_vm.title))]) : _c('span', {
	    staticClass: "text",
	    class: {
	      'fix-position': _vm.hasClose
	    }
	  }, [_vm._v(" ")]), _vm._v(" "), (_vm.hasClose) ? _c('button', {
	    staticClass: "close",
	    on: {
	      "click": _vm.close
	    }
	  }, [_c('i')]) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm._t("title"), _vm._v(" "), (_vm.content) ? _c('p', {
	    staticClass: "content"
	  }, [_vm._v(_vm._s(_vm.content))]) : _vm._e(), _vm._v(" "), (_vm.htmlContent) ? _c('p', {
	    staticClass: "content",
	    domProps: {
	      "innerHTML": _vm._s(_vm.htmlContent)
	    }
	  }) : _vm._e(), _vm._v(" "), _vm._t("content"), _vm._v(" "), _c('div', {
	    staticClass: "btn-container"
	  }, [(_vm.cancel) ? _c('btn', {
	    attrs: {
	      "className": "reverse gray btnCan"
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.onClick('cancel', $event)
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.cancel))]) : _vm._e(), _vm._v(" "), (_vm.ok) ? _c('btn', {
	    attrs: {
	      "className": "reverse gray btnOk"
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.onClick('ok', $event)
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.ok))]) : _vm._e()], 1), _vm._v(" "), _vm._t("button")], 2)])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-bcc6f70a", module.exports)
	  }
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(37)
	__webpack_require__(39)

	/* script */
	__vue_exports__ = __webpack_require__(41)

	/* template */
	var __vue_template__ = __webpack_require__(42)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\workspace\\h5\\gome-ui-kit\\components\\modal\\modal.custom.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-382fd618"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-382fd618", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-382fd618", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] modal.custom.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(38);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-382fd618!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./modal.custom.vue", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-382fd618!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./modal.custom.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "/*opacity*/\n/*font size*/\n/*z*/\n/*font-icon*/\n/*\n* @Author: zhaoye-ds1\n* @Date:   2015-08-18 11:14:43\n * @Last Modified by: zhaoye\n * @Last Modified time: 2017-04-28 20:32:26\n*/\n/* end*/\n.alert {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100099;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n  display: -webkit-box;\n  display: box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-align: center;\n  box-pack: center;\n  align-items: center;\n  -webkit-align-items: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n.alert.h_center {\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-pack: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n.alert.v_center:not(.vertical) {\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  box-align: center;\n  align-items: center;\n  -webkit-align-items: center;\n}\n.alert.v_center.vertical {\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-pack: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n}\n.alert.center {\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-align: center;\n  box-pack: center;\n  align-items: center;\n  -webkit-align-items: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n.alert.vertical {\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n}\n.alert.reverse {\n  flex-direction: row-reverse;\n  -webkit-flex-direction: row-reverse;\n  -ms-direction: row-reverse;\n  -webkit-box-direction: reverse;\n  -moz-box-direction: reverse;\n  box-direction: reverse;\n}\n.alert.stretch {\n  align-content: stretch;\n}\n.alert .window {\n  width: 5.4rem;\n  max-width: 5.4rem;\n  background-color: #fff;\n  font-size: 0.3rem;\n  border-radius: 0.2rem;\n  overflow: hidden;\n}\n.alert .window .title {\n  padding: 0.2rem 0;\n  font-size: 0.4rem;\n  text-align: center;\n  line-height: 0.52rem;\n  color: #333;\n  display: -webkit-box;\n  display: box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.alert .window .title.h_center {\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-pack: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n.alert .window .title.v_center:not(.vertical) {\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  box-align: center;\n  align-items: center;\n  -webkit-align-items: center;\n}\n.alert .window .title.v_center.vertical {\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-pack: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n}\n.alert .window .title.center {\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-align: center;\n  box-pack: center;\n  align-items: center;\n  -webkit-align-items: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n.alert .window .title.vertical {\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n}\n.alert .window .title.reverse {\n  flex-direction: row-reverse;\n  -webkit-flex-direction: row-reverse;\n  -ms-direction: row-reverse;\n  -webkit-box-direction: reverse;\n  -moz-box-direction: reverse;\n  box-direction: reverse;\n}\n.alert .window .title.stretch {\n  align-content: stretch;\n}\n.alert .window .title .text {\n  display: block;\n  -webkit-box-flex: 1;\n  -moz-box-flex: 1;\n  -webkit-flex: 1;\n  flex: 1;\n  align-items: stretch;\n  box-sizing: border-box;\n}\n.alert .window .title .text.fix-position {\n  padding-left: 0.7rem;\n}\n.alert .window .close {\n  color: #333;\n  background-color: #fff;\n  display: -webkit-box;\n  display: box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n}\n.alert .window .close.h_center {\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-pack: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n.alert .window .close.v_center:not(.vertical) {\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  box-align: center;\n  align-items: center;\n  -webkit-align-items: center;\n}\n.alert .window .close.v_center.vertical {\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-pack: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n}\n.alert .window .close.center {\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-align: center;\n  box-pack: center;\n  align-items: center;\n  -webkit-align-items: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n.alert .window .close.vertical {\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n}\n.alert .window .close.reverse {\n  flex-direction: row-reverse;\n  -webkit-flex-direction: row-reverse;\n  -ms-direction: row-reverse;\n  -webkit-box-direction: reverse;\n  -moz-box-direction: reverse;\n  box-direction: reverse;\n}\n.alert .window .close.stretch {\n  align-content: stretch;\n}\n.alert .window .close .blocker {\n  -moz-box-flex: 1;\n  -webkit-flex: 1;\n  flex: 1;\n  align-items: stretch;\n  box-sizing: border-box;\n  display: block;\n  content: ' ';\n  height: 100%;\n  width: 100%;\n  -webkit-box-flex: 1;\n}\n.alert .window .close i {\n  background-image: url(" + __webpack_require__(21) + ");\n  background-repeat: no-repeat;\n  background-position: center 40%;\n  background-size: 0.26666667rem 0.26666667rem;\n  display: block;\n  width: 0.7rem;\n  height: 0.7rem;\n}\n.alert .window .content {\n  text-align: center;\n  font-size: .32rem;\n  padding: .4rem;\n  color: #333;\n}\n.alert .window .title + .content {\n  padding-top: 0;\n}\n.alert .window .btn-container {\n  display: -webkit-box;\n  display: box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.alert .window .btn-container.h_center {\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-pack: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n.alert .window .btn-container.v_center:not(.vertical) {\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  box-align: center;\n  align-items: center;\n  -webkit-align-items: center;\n}\n.alert .window .btn-container.v_center.vertical {\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-pack: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n}\n.alert .window .btn-container.center {\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-align: center;\n  box-pack: center;\n  align-items: center;\n  -webkit-align-items: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n.alert .window .btn-container.vertical {\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n}\n.alert .window .btn-container.reverse {\n  flex-direction: row-reverse;\n  -webkit-flex-direction: row-reverse;\n  -ms-direction: row-reverse;\n  -webkit-box-direction: reverse;\n  -moz-box-direction: reverse;\n  box-direction: reverse;\n}\n.alert .window .btn-container.stretch {\n  align-content: stretch;\n}\n.alert .window .btn-container .btn {\n  display: block;\n  -webkit-box-flex: 1;\n  -moz-box-flex: 1;\n  -webkit-flex: 1;\n  flex: 1;\n  align-items: stretch;\n  box-sizing: border-box;\n  height: .88rem;\n  font-size: .32rem;\n  background-color: #fff;\n  color: #333;\n  line-height: .88rem;\n  text-align: center;\n  border: none;\n  border-radius: 0;\n  border-top: 1px #ddd solid;\n}\n.alert .window .btn-container .btn:first-child:not(:only-child) {\n  border-right: 1px #ddd solid;\n}\n.alert .window .btn-container .btnOk {\n  background: #ff5c5c;\n  border-radius: 0 0 .2rem 0;\n  color: #fff;\n}\n.alert .window .btn-container .btnCan {\n  border-radius: 0 0 0 .2rem;\n}\n", ""]);

	// exports


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(40);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-382fd618&scoped=true!../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./modal.custom.vue", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-382fd618&scoped=true!../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./modal.custom.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports
	exports.i(__webpack_require__(24), "");

	// module
	exports.push([module.id, "\r\n", ""]);

	// exports


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vue = __webpack_require__(6);

	var _vue2 = _interopRequireDefault(_vue);

	var _button = __webpack_require__(26);

	var _button2 = _interopRequireDefault(_button);

	var _base = __webpack_require__(30);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _vue2.default.extend({
	    props: ['show', 'title', 'content', 'htmlContent', 'cancel', 'ok', 'hasClose'],
	    mixins: [_base2.default],
	    components: {
	        btn: _button2.default
	    },
	    methods: {
	        onClick: function onClick(msg, e) {
	            this.$emit(msg, e);
	        },
	        close: function close() {
	            this.$emit('close');
	        }
	    }
	}); //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('transition', {
	    attrs: {
	      "name": "fade",
	      "appear": ""
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.show),
	      expression: "show"
	    }],
	    staticClass: "alert",
	    class: _vm.className
	  }, [_c('div', {
	    staticClass: "window"
	  }, [(_vm.title || _vm.hasClose) ? _c('h4', {
	    staticClass: "title"
	  }, [(_vm.title) ? _c('span', {
	    staticClass: "text",
	    class: {
	      'fix-position': _vm.hasClose
	    }
	  }, [_vm._v(_vm._s(_vm.title))]) : _c('span', {
	    staticClass: "text",
	    class: {
	      'fix-position': _vm.hasClose
	    }
	  }, [_vm._v(" ")]), _vm._v(" "), (_vm.hasClose) ? _c('button', {
	    staticClass: "close",
	    on: {
	      "click": _vm.close
	    }
	  }, [_c('i')]) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm._t("title"), _vm._v(" "), (_vm.content) ? _c('p', {
	    staticClass: "content"
	  }, [_vm._v(_vm._s(_vm.content))]) : _vm._e(), _vm._v(" "), (_vm.htmlContent) ? _c('p', {
	    staticClass: "content",
	    domProps: {
	      "innerHTML": _vm._s(_vm.htmlContent)
	    }
	  }) : _vm._e(), _vm._v(" "), _vm._t("content"), _vm._v(" "), _c('div', {
	    staticClass: "btn-container"
	  }, [(_vm.cancel) ? _c('btn', {
	    attrs: {
	      "className": "reverse gray"
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.onClick('cancel', $event)
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.cancel))]) : _vm._e(), _vm._v(" "), (_vm.ok) ? _c('btn', {
	    attrs: {
	      "className": "reverse gray"
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.onClick('ok', $event)
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.ok))]) : _vm._e()], 1), _vm._v(" "), _vm._t("button")], 2)])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-382fd618", module.exports)
	  }
	}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(44)

	/* script */
	__vue_exports__ = __webpack_require__(46)

	/* template */
	var __vue_template__ = __webpack_require__(49)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\workspace\\h5\\gome-ui-kit\\components\\scroller\\scroller.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-a9f5bace", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-a9f5bace", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] scroller.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(45);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-a9f5bace!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./scroller.vue", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-a9f5bace!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./scroller.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "/*\n* @Author: zhaoye-ds1\n* @Date:   2015-08-18 11:14:43\n * @Last Modified by: zhaoye\n * @Last Modified time: 2017-04-28 20:32:26\n*/\n/* end*/\n.scroller-container-wrapper {\n  display: -webkit-box;\n  display: box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  overflow: hidden;\n}\n.scroller-container-wrapper.h_center {\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-pack: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n.scroller-container-wrapper.v_center:not(.vertical) {\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  box-align: center;\n  align-items: center;\n  -webkit-align-items: center;\n}\n.scroller-container-wrapper.v_center.vertical {\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-pack: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n}\n.scroller-container-wrapper.center {\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-align: center;\n  box-pack: center;\n  align-items: center;\n  -webkit-align-items: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n.scroller-container-wrapper.vertical {\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n}\n.scroller-container-wrapper.reverse {\n  flex-direction: row-reverse;\n  -webkit-flex-direction: row-reverse;\n  -ms-direction: row-reverse;\n  -webkit-box-direction: reverse;\n  -moz-box-direction: reverse;\n  box-direction: reverse;\n}\n.scroller-container-wrapper.stretch {\n  align-content: stretch;\n}\n.scroller-container-wrapper.vertical {\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n}\n.scroller-container-wrapper .scroller-container.vertical {\n  position: relative;\n  width: 100%;\n}\n.scroller-container-wrapper .scroller-container.vertical .scroller {\n  position: relative;\n  width: 100%;\n}\n.scroller-container-wrapper .scroller-container.horizontal .scroller {\n  display: -webkit-box;\n}\n.scroller-container-wrapper .scroller-container .scroller-container {\n  position: relative;\n}\n", ""]);

	// exports


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _swiperMixin = __webpack_require__(47);

	var _swiperMixin2 = _interopRequireDefault(_swiperMixin);

	var _base = __webpack_require__(30);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    props: ['dontDrag', 'class', 'direction', 'className'],
	    mixins: [_swiperMixin2.default],
	    data: function data() {
	        return {
	            maxTranslate: 0,
	            contentLimit: 0,
	            $container: null,
	            $scroller: null,
	            wrapperLimit: 0,
	            iam: 'scroller'
	        };
	    },
	    created: function created() {
	        var _this = this;

	        this.initSwiper();
	        this.$on('scroll', function (e) {
	            _this.scroll(e);
	        });
	        this.$on('scrollEnd', function (e) {
	            _this.scrollEnd(e);
	        });
	    },
	    mounted: function mounted() {
	        this.$container = this.$el;
	        this.$scroller = this.$el.childNodes[0].childNodes[0];
	        this.computeTransLimit();
	    },

	    methods: {
	        reset: function reset() {
	            this.translate = 0;
	        },
	        scroll: function scroll(e) {
	            if (this.dontDrag) return;
	            this.computeTransLimit();
	            if (this.contentLimit < this.wrapperLimit) return;
	            if (!this.scrolling) return;
	            e.stopPropagation();
	            if (this.translate < -this.maxTranslate || this.translate > 0) {
	                this.translate += this.delta / 2.5;
	            } else {
	                this.translate += this.delta;
	            }
	        },
	        scrollEnd: function scrollEnd() {
	            if (this.dontDrag) return;
	            if (this.translate > 0) {
	                this.translate = 0;
	            }
	            if (this.translate < -this.maxTranslate) {
	                this.translate = -this.maxTranslate;
	            }
	        },
	        _getMargin: function _getMargin($el) {
	            if (this.direction == 'horizontal') {
	                return $el.offsetWidth + (parseFloat($el.style.marginLeft) || 0) + (parseFloat($el.style.marginRight) || 0);
	            } else {
	                return $el.offsetHeight + (parseFloat($el.style.marginTop) || 0) + (parseFloat($el.style.marginBottom) || 0);
	            }
	        },
	        computeTransLimit: function computeTransLimit() {
	            var children = this.$scroller.children;
	            this.contentLimit = 0;
	            this.wrapperLimit = this._getMargin(this.$container);

	            for (var i = 0; i < children.length; i++) {
	                this.contentLimit += this._getMargin(children[i]);
	            }
	            if (this.contentLimit < this.wrapperLimit) this.maxTranslate = 0;else this.maxTranslate = this.contentLimit - this.wrapperLimit;
	        },
	        scrollTo: function scrollTo(_ref) {
	            var _ref$x = _ref.x,
	                x = _ref$x === undefined ? this.translateX : _ref$x,
	                _ref$y = _ref.y,
	                y = _ref$y === undefined ? this.translateY : _ref$y;

	            //开启缓动
	            this.easing = true;

	            //计算位移值
	            var translate = void 0;
	            this.direction === 'horizontal' ? translate = x : translate = y;

	            //计算边界
	            this.computeTransLimit();

	            //赋值
	            this.translate = translate;

	            //修正
	            if (this.translate > 0) {
	                this.translate = 0;
	            }
	            if (this.translate < -this.maxTranslate) {
	                this.translate = -this.maxTranslate;
	            }
	        }
	    }
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(48)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\workspace\\h5\\gome-ui-kit\\components\\swiper\\swiper.mixin.vue"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-6eb9e2a8", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-6eb9e2a8", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] swiper.mixin.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 48 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//

	exports.default = {
	    data: function data() {
	        return {
	            //translateX的值
	            translateX: 0,
	            //translateY的值
	            translateY: 0,
	            translate: 0,
	            //上一帧X的位置
	            lastX: 0,
	            //上一帧Y的位置
	            lastY: 0,
	            //当前帧X的位置
	            curX: 0,
	            //当前帧Y的位置
	            curY: 0,
	            //每帧X的变动
	            deltaX: 0,
	            //每帧Y的变动
	            deltaY: 0,
	            delta: 0,
	            //是否正在缓动
	            easing: false,
	            //最后5帧X方向的变化
	            lastDeltaList: [],
	            //是否正在滚动
	            scrolling: false,
	            isFirstFrame: false,
	            scrollEvent: 'undefined',

	            touchmoveDetectCnt: 0,
	            lastDelta: 0

	        };
	    },
	    created: function created() {
	        this.renderFrame();
	    },

	    computed: {
	        wrapperWidth: function wrapperWidth() {
	            if (this.options && this.options.wrapperWidth) return this.options.wrapperWidth;
	            if (this.$el) {
	                return this.$el.offsetWidth;
	            } else {
	                return 0;
	            }
	            //容器宽度
	            //return this.options ? this.options.wrapperWidth || document.body.offsetWidth : document.body.offsetWidth;
	        },
	        transform: function transform() {
	            if (this.direction === 'vertical') {
	                return {
	                    'transform': 'translate3d(0, ' + this.translate + 'px, 0)',
	                    '-webkit-transform': 'translate3d(0, ' + this.translate + 'px, 0)',
	                    '-moz-transform': 'translate3d(0, ' + this.translate + 'px, 0)'
	                };
	            } else {
	                return {
	                    'transform': 'translate3d(' + this.translate + 'px, 0,0)',
	                    '-webkit-transform': 'translate3d(' + this.translate + 'px,0,0)',
	                    '-moz-transform': 'translate3d(' + this.translate + 'px,0,0)'
	                };
	            }
	        },
	        transition: function transition() {
	            if (this.easing) {
	                return {
	                    'transition': 'transform .3s ease-out',
	                    '-webkit-transition': '-webkit-transform .3s ease-out',
	                    '-moz-transition': '-moz-transform .3s ease-out'
	                };
	            } else {
	                return {
	                    'transition': 'transform 0s',
	                    '-webkit-transition': '-webkit-transform 0s',
	                    '-moz-transition': '-moz-transform 0s'
	                };
	            }
	        }
	    },
	    methods: {
	        //对手势滑动完，手指不动超过.1s时再离开屏幕，不进行缓动
	        //TODO 需要关注性能
	        renderFrame: function renderFrame() {
	            window.requestAnimationFrame(this.renderFrame);
	            if (this.startCnt) {
	                if (this.lastDelta == this.delta) {
	                    this.touchmoveDetectCnt++;
	                } else {
	                    this.touchmoveDetectCnt = 0;
	                }
	                this.lastDelta = this.delta;
	            } else {
	                this.touchmoveDetectCnt = 0;
	            }
	        },
	        initSwiper: function initSwiper() {
	            var _this = this;

	            this.scrollEvent = document.createEvent('HTMLEvents');
	            this.scrollEvent.initEvent('scroll', true, false);
	            this.scrollEvent.eventType = 'message';
	            var lastPos = 0;
	            var diff = 0;
	            this.$watch('translate', function (val) {
	                // watch偏移属性的变化派发事件，通知图片懒加载
	                if (val != lastPos) {
	                    lastPos = val;
	                    diff++;
	                    if (diff == 5) {
	                        window.dispatchEvent(_this.scrollEvent);
	                        diff = 0;
	                    }
	                }
	            });
	        },
	        touchstart: function touchstart(e) {
	            //关闭缓动
	            this.easing = false;
	            //记录当前位置
	            this.curX = e.touches[0].pageX;
	            this.curY = e.touches[0].pageY;
	            this.lastX = this.curX;
	            this.lastY = this.curY;
	            //清空列表
	            this.lastDeltaList = [];
	            this.$emit('scrollStart', e);
	            this.isFirstFrame = true;

	            this.startCnt = true;
	        },
	        touchmove: function touchmove(e) {
	            //记录每一帧的位置
	            this.curX = e.touches[0].pageX;
	            this.curY = e.touches[0].pageY;
	            //计算偏移
	            this.deltaX = this.curX - this.lastX;
	            this.deltaY = this.curY - this.lastY;

	            this.delta = this.direction === 'horizontal' ? this.deltaX : this.deltaY;

	            if (this.lastDeltaList.length == 5) this.lastDeltaList.shift();
	            this.lastDeltaList.push(this.delta);

	            if (this.direction == 'horizontal') {
	                if (this.isFirstFrame) {
	                    if (Math.abs(this.deltaX) > Math.abs(this.deltaY) * 2) {
	                        this.scrolling = true;
	                    } else {
	                        this.scrolling = false;
	                    }
	                }
	            } else if (this.direction == 'vertical') {
	                if (this.isFirstFrame) {
	                    //TODO 这块，需要判断的情况是，swiper嵌套scroller的时候，但是这个场景少，所以，先注释掉，后面再改
	                    //if(Math.abs(this.deltaY) > Math.abs(this.deltaX) * 2){
	                    this.scrolling = true;
	                    //}else{
	                    //    this.scrolling = false
	                    //}
	                }
	            }
	            this.isFirstFrame = false;
	            if (this.scrolling) {
	                e.preventDefault();
	                this.$emit('scroll', e);
	            }
	            if (this.easing) {
	                e.preventDefault();
	            }
	            if (this.iam == 'scroller') {
	                e.preventDefault();
	            }
	            //保存最后一帧位置
	            this.lastX = this.curX;
	            this.lastY = this.curY;
	        },
	        touchend: function touchend(e) {
	            if (!this.scrolling) return;
	            this.startCnt = false;
	            //开启缓动
	            this.easing = true;
	            var sum = 0;
	            this.lastDeltaList.forEach(function (delta) {
	                sum += delta;
	            });
	            //计算最后5帧平均值
	            var average = sum / this.lastDeltaList.length;
	            //惯性滑动
	            if (average && this.touchmoveDetectCnt / 60 < 0.1) this.translate += average * 5;

	            this.$emit('scrollEnd', e);
	        },
	        transitionEnd: function transitionEnd() {
	            //关闭缓动
	            this.easing = false;
	            window.dispatchEvent(this.scrollEvent);
	        }
	    },
	    mounted: function mounted() {
	        var _this2 = this;

	        this.$el.addEventListener('webkitTransitionEnd', function () {
	            _this2.transitionEnd();
	        });
	        this.$el.addEventListener('mozTransitionEnd', function () {
	            _this2.transitionEnd();
	        });
	    }
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "scroller-container-wrapper",
	    class: [_vm.direction, _vm.className]
	  }, [_c('div', {
	    staticClass: "scroller-container",
	    class: [_vm.direction, _vm.className]
	  }, [_c('div', {
	    staticClass: "scroller",
	    class: _vm.className,
	    style: ([_vm.transform, _vm.transition]),
	    on: {
	      "touchstart": _vm.touchstart,
	      "touchmove": _vm.touchmove,
	      "touchend": _vm.touchend,
	      "transitionEnd": _vm.transitionEnd
	    }
	  }, [_vm._t("default")], 2)])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-a9f5bace", module.exports)
	  }
	}

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(51)

	/* script */
	__vue_exports__ = __webpack_require__(53)

	/* template */
	var __vue_template__ = __webpack_require__(54)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\workspace\\h5\\gome-ui-kit\\components\\swiper\\swiper.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1d3d0bd9", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1d3d0bd9", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] swiper.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(52);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1d3d0bd9!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./swiper.vue", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1d3d0bd9!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./swiper.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "/*opacity*/\n/*font size*/\n/*z*/\n/*font-icon*/\n/*\n* @Author: zhaoye-ds1\n* @Date:   2015-08-18 11:14:43\n * @Last Modified by: zhaoye\n * @Last Modified time: 2017-04-28 20:32:26\n*/\n/* end*/\n.swiper-container {\n  overflow: hidden;\n  position: relative;\n  height: 100%;\n}\n.swiper-container .swiper {\n  display: -webkit-box;\n  display: -moz-box;\n  position: relative;\n}\n.swiper-container .swiper li {\n  position: relative;\n  height: 100%;\n}\n.swiper-container .swiper li div {\n  width: 100%;\n}\n.swiper-container .swiperU {\n  height: 0.1rem;\n  position: absolute;\n  bottom: 0.4rem;\n  left: 50%;\n}\n.swiper-container .swiperU li {\n  float: left;\n  width: 0.1rem;\n  height: 0.1rem;\n  border-radius: 50%;\n  background: #fff;\n  margin-left: 0.1rem;\n}\n.swiper-container .swiperU .active {\n  background: red;\n}\n", ""]);

	// exports


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _gomeUtilsEventbus = __webpack_require__(17);

	var _gomeUtilsEventbus2 = _interopRequireDefault(_gomeUtilsEventbus);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	    props: ['list', 'options', 'cubic'],
	    data: function data() {
	        return {
	            //原始列表
	            originList: [],
	            //touch开始的位置
	            startPos: 0,
	            //touch结束的位置
	            endPos: 0,
	            //上一帧的位置
	            lastPos: 0,
	            //当前帧的位置
	            curPos: 0,
	            //每帧的变动
	            delta: 0,
	            //上一帧的位置
	            lastPosY: 0,
	            //当前帧的位置
	            curPosY: 0,
	            //每帧的变动
	            deltaY: 0,
	            //是否正在缓动
	            easing: true,
	            //是否允许开启动画
	            animating: false,
	            //当前的索引
	            idx: 0,
	            //经过duplicate后列表的长度
	            length: 0,
	            //translateX的值
	            translateX: 0,
	            translateY: 0,
	            //窗口的宽
	            firstFrame: true,
	            scroll: false,
	            //style
	            otherStyle: {
	                'left': '0',
	                'height': '100%',
	                'width': 'auto'
	            },
	            disableScreenScroll: false,
	            frameCnt: 0,
	            allowVerticalScroll: false,
	            atBottom: false,
	            computeVerticalScroll: false
	        };
	    },
	    computed: {
	        btmToNextLimit: function btmToNextLimit() {
	            return 0.1 * document.documentElement.clientHeight;
	        },
	        pageCount: function pageCount() {
	            var pageCount = this.originList.length / parseInt(this.options.perSliders);
	            return Math.ceil(pageCount);
	        },
	        /*transform: function(){
	            return {
	                'transform': 'translate3d('+this.translateX+'px, 0,0)',
	                '-webkit-transform': 'translate3d('+this.translateX+'px,0,0)',
	                '-moz-transform': 'translate3d('+this.translateX+'px,0,0)',
	            }
	        },*/
	        transformY: function transformY() {
	            return {
	                'transform': 'translate3d(' + this.translateX + 'px, ' + this.translateY + 'px,0)',
	                '-webkit-transform': 'translate3d(' + this.translateX + 'px, ' + this.translateY + 'px,0)',
	                '-moz-transform': 'translate3d(' + this.translateX + 'px, ' + this.translateY + 'px,0)'
	            };
	        },
	        transition: function transition() {
	            if (this.easing) {
	                return {
	                    'transition': 'transform .3s ',
	                    '-webkit-transition': '-webkit-transform .3s',
	                    '-moz-transition': '-moz-transform .3s'
	                };
	            } else {
	                return {
	                    '-webkit-transition': '-webkit-transform 0s',
	                    '-moz-transition': '-moz-transform 0s',
	                    'transition': 'transform 0s'
	                };
	            }
	        },
	        listWidth: function listWidth() {
	            return this.$el.offsetWidth || 0; //this.wrapperWidth/this.options.perSliders * this.originList.length || 0;
	        },
	        wrapperWidth: function wrapperWidth() {
	            return this.$el.offsetWidth || 0; //this.options.wrapperWidth;
	        },
	        scrollEvent: function scrollEvent() {
	            var event = document.createEvent('HTMLEvents');
	            event.initEvent('scroll', true, false);
	            event.eventType = 'message';
	            return event;
	        }
	    },
	    created: function created() {
	        //init
	        var _this = this;
	        window.addEventListener('scroll', function (e) {
	            if (_this.disableScreenScroll) e.preventDefault();
	        });
	        document.addEventListener('touchmove', function (e) {
	            if (_this.disableScreenScroll) e.preventDefault();
	        });
	        //clone list
	        //init options
	        this.options = this.options || {
	            loop: false,
	            perSliders: 1,
	            perGroup: 1,
	            autoPlay: false,
	            pagination: true,
	            height: 'auto',
	            allowVerticalScroll: true
	        };
	        if (!!this.options.height) {
	            this.otherStyle.height = this.options.height;
	        }
	        //如果是循环，则首尾重复
	        if (!!this.options.loop) {
	            this.list.forEach(function (item, idx) {
	                if (idx != 0 && idx != _this.list.length - 1) _this.originList.push(item);
	            });
	        } else {
	            this.originList = this.list;
	        }
	        // console.log(this.originList)
	        // console.log(this.list)
	        this.length = this.originList.length;
	        //this.otherStyle.width = (this.wrapperWidth/this.options.perSliders*this.list.length)+'px'
	        //是否自动播放
	        if (!!this.options.autoPlay) this.autoPlay();
	        //检测当前的索引值
	        this.$watch('idx', function (idx) {
	            _gomeUtilsEventbus2.default.emit('swiper.idxChange', idx, this._uid);
	        });
	        var _renderFrame = function _renderFrame() {
	            window.dispatchEvent(_this.scrollEvent);
	            if (_this.animating) window.requestAnimationFrame(_renderFrame);
	        };
	        this.$watch('animating', function (val) {
	            if (val) window.requestAnimationFrame(_renderFrame);
	        });
	    },
	    mounted: function mounted() {
	        var _this = this;
	        this.$el.addEventListener('webkitTransitionEnd', function () {
	            _this.transitionEnd();
	        });
	        this.$el.addEventListener('mozTransitionEnd', function () {
	            _this.transitionEnd();
	        });
	    },
	    ready: function ready() {
	        //初始化swiper长度
	        //this.wrapperWidth = this.$el.offsetWidth;
	        //this.$broadcast('resize',this.wrapperWidth,this.pageCount,this.options.height)
	    },
	    events: {
	        scrollTo: function scrollTo(idx) {
	            if (idx != this.idx) this.scrollTo(idx);
	        }
	    },
	    methods: {
	        autoPlay: function autoPlay(time) {
	            var _this = this;
	            this.frameCnt = 0;
	            function renderFrame() {
	                if (_this.easing) {
	                    _this.frameCnt++;
	                    if (_this.frameCnt == 60 * 5) {
	                        _this.frameCnt = 0;
	                        _this.next();
	                    }
	                }
	                requestAnimationFrame(renderFrame);
	            }
	            requestAnimationFrame(renderFrame);
	        },
	        prev: function prev() {
	            if (!!this.options.loop) this.idx = this.idx == -1 ? this.length - 1 : this.idx - 1;else this.idx = this.idx == 0 ? this.idx : this.idx - 1;
	            this.scrollTo(this.idx);
	        },
	        next: function next() {
	            if (!!this.options.loop) this.idx = this.idx == this.length ? 0 : this.idx + 1;else this.idx = this.idx == this.pageCount - 1 ? this.idx : this.idx + 1;
	            this.scrollTo(this.idx);
	        },
	        scrollTo: function scrollTo(idx) {
	            this.animating = true;
	            this.idx = idx;
	            var initPos = this.translateX;
	            var targetPos = -this.wrapperWidth / this.options.perSliders * Math.floor(this.options.perSliders) * idx;
	            var delta = Math.floor(targetPos - initPos);
	            if (!this.options.loop && this.idx == this.pageCount - 1 && this.pageCount > 1) {
	                this.translateX = -this.listWidth + this.wrapperWidth;
	            } else this.translateX += delta;
	            //if(Math.abs(this.translateX - targetPos) > 6)
	            //    requestAnimationFrame(renderFrame)
	            //else
	            this.translateX = targetPos;
	            this.$emit('scrollAt', idx);
	            _gomeUtilsEventbus2.default.emit('swiper.scrollTo', idx, this._uid);
	        },
	        touchStart: function touchStart(e) {
	            if (this.options && this.options.dontDrag) return;
	            if (this.animating) {
	                this.transitionEnd();
	            }
	            this.delta = 0;
	            this.easing = false;
	            this.curPos = e.touches[0].pageX;
	            this.lastPos = this.curPos;
	            this.startPos = this.curPos;
	            this.curPosY = e.touches[0].pageY;
	            this.lastPosY = this.curPosY;

	            this.firstFrame = true;
	            // if(this.options.loop && this.animating)return;
	            this.animating = false;
	            if (this.idx == this.length) {
	                this.idx = 0;
	                //this.scrollTo(this.idx);
	            } else if (this.idx == -1) {
	                this.idx = this.length - 1;
	                this.scrollTo(this.idx);
	            }
	            if (this.allowVerticalScroll) {
	                if (window.screen.availHeight >= document.body.getBoundingClientRect().bottom) {
	                    this.atBottom = true;
	                } else {
	                    this.atBottom = false;
	                }
	            }
	        },
	        touchMove: function touchMove(e) {
	            if (this.options && this.options.dontDrag) return;
	            //if(this.options.loop && this.animating)return;
	            if (this.list.length == 1) return;
	            this.animating = false;
	            this.easing = false;
	            this.curPos = e.touches[0].pageX;
	            this.delta = this.curPos - this.lastPos;
	            this.lastPos = this.curPos;
	            this.curPosY = e.touches[0].pageY;
	            this.deltaY = this.curPosY - this.lastPosY;
	            this.lastPosY = this.curPosY;
	            if (this.firstFrame) {
	                if (!this.delta || !this.deltaY) {
	                    e.preventDefault();
	                }
	                if (Math.abs(this.delta) * 0.5 > Math.abs(this.deltaY)) {
	                    this.scroll = true;
	                    e.preventDefault();
	                    this.disableScreenScroll = true;
	                } else {
	                    this.scroll = false;
	                    if (this.deltaY < 0) {
	                        this.computeVerticalScroll = true;
	                    } else {
	                        this.computeVerticalScroll = false;
	                    }
	                    this.disableScreenScroll = false;
	                }
	            }
	            if (this.scroll) {
	                if (this.translateX > 0) {
	                    this.translateX += this.delta / 2;
	                } else if (this.translateX < -(this.listWidth - this.wrapperWidth)) {
	                    this.translateX += this.delta / 2;
	                } else {
	                    this.translateX += this.delta;
	                }
	                this.endPos = this.curPos;
	            } else if (this.atBottom && this.computeVerticalScroll && this.allowVerticalScroll) {
	                e.preventDefault();
	                this.translateY += this.deltaY / 2;
	                if (this.btmToNextLimit > Math.abs(this.translateY)) {
	                    _gomeUtilsEventbus2.default.emit('swiper.isBtmToNextOk', false, this._uid);
	                } else {
	                    _gomeUtilsEventbus2.default.emit('swiper.isBtmToNextOk', true, this._uid);
	                }
	            }
	            this.firstFrame = false;
	        },
	        touchEnd: function touchEnd(e) {
	            if (this.options && this.options.dontDrag) return;
	            this.disableScreenScroll = false;
	            // if(this.options.loop && this.animating)return;
	            this.easing = true;
	            if (!this.scroll && this.atBottom && this.allowVerticalScroll) {
	                this.atBottom = false;
	                if (this.btmToNextLimit < Math.abs(this.translateY) && this.translateY < 0) {
	                    _gomeUtilsEventbus2.default.emit('swiper.btmToNext', this._uid);
	                }
	                this.translateY = 0;
	            }
	            if (!this.scroll) {
	                return;
	            }
	            if (Math.abs(this.delta) == 0) {
	                this.scrollTo(this.idx);
	                return;
	            }
	            var delta = this.endPos - this.startPos;
	            if (delta < -.1 * this.wrapperWidth) this.next();else if (delta > .1 * this.wrapperWidth) this.prev();else {
	                this.scrollTo(this.idx);
	            }
	        },
	        transitionEnd: function transitionEnd() {
	            this.frameCnt = 0;
	            if (this.idx == this.length) {
	                this.easing = false;
	                this.idx = 0;
	                this.scrollTo(this.idx);
	                var _this = this;
	                setTimeout(function () {
	                    _this.easing = true;
	                    _this.animating = false;
	                }, 50);
	            } else if (this.idx == -1) {
	                this.easing = false;
	                this.idx = this.length - 1;
	                this.scrollTo(this.idx);
	                var _this = this;
	                setTimeout(function () {
	                    _this.easing = true;
	                    _this.animating = false;
	                }, 50);
	            } else {
	                this.animating = false;
	            }
	        }
	    }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports.loop = function (list) {
	    var loopedList = [];
	    var length = list.length;
	    loopedList.push(list[list.length - 1]);
	    list.forEach(function (item, index) {
	        loopedList.push(item);
	    });
	    loopedList.push(list[0]);
	    return loopedList;
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "swiper-container",
	    on: {
	      "touchmove": _vm.touchMove,
	      "touchstart": _vm.touchStart,
	      "touchend": _vm.touchEnd,
	      "transitionEnd": _vm.transitionEnd
	    }
	  }, [_c('div', {
	    staticClass: "swiper",
	    style: ([_vm.transformY, _vm.transition, _vm.otherStyle])
	  }, [_vm._t("slider")], 2), _vm._v(" "), _vm._t("pagination")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1d3d0bd9", module.exports)
	  }
	}

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(56)

	/* script */
	__vue_exports__ = __webpack_require__(58)

	/* template */
	var __vue_template__ = __webpack_require__(59)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\workspace\\h5\\gome-ui-kit\\components\\swiper\\slider.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-43817fc2", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-43817fc2", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] slider.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(57);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-43817fc2!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./slider.vue", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-43817fc2!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./slider.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 58 */
/***/ function(module, exports) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	    props: ['index', 'content', 'height'],
	    data: function data() {
	        return {
	            pos: 0,
	            otherStyle: {
	                'height': 'auto',
	                'width': '1px',
	                'left': '0',
	                'position': 'relative'
	            }
	        };
	    },
	    /* computed: {
	         transform: function(){
	             return {
	                 'transform': 'translate3d('+this.pos+'px, 0,0)',
	                 '-webkit-transform': 'translate3d('+this.pos+'px,0,0)',
	                 '-moz-transform': 'translate3d('+this.pos+'px,0,0)',
	             }
	         }
	     },*/
	    created: function created() {
	        //init options
	        this.options = this.$parent.options || {
	            loop: false,
	            perSliders: 1,
	            perGroup: 1,
	            autoPlay: false,
	            pagination: true
	        };
	    },
	    mounted: function mounted() {
	        if (this.options.height) this.otherStyle.height = this.options.height;
	        this.otherStyle.width = this.$parent.$el.offsetWidth / this.options.perSliders + 'px';
	        if (!!this.options.loop) this.otherStyle.left = -this.$parent.$el.offsetWidth / this.options.perSliders + 'px';
	    },

	    methods: {
	        /*onClick: function(idx){
	            this.$dispach('clickOne',idx)
	        }*/
	    },
	    events: {
	        resize: function resize(width) {
	            this.otherStyle.height = this.height;
	            this.otherStyle.width = width / this.options.perSliders + 'px';
	            if (!!this.options.loop) this.otherStyle.left = -width / this.options.perSliders + 'px';
	        }
	    }
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "slider",
	    style: ([_vm.otherStyle])
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-43817fc2", module.exports)
	  }
	}

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(61)

	/* script */
	__vue_exports__ = __webpack_require__(64)

	/* template */
	var __vue_template__ = __webpack_require__(66)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\workspace\\h5\\gome-ui-kit\\components\\image\\image.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1126d957", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1126d957", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] image.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(62);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1126d957!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./image.vue", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1126d957!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./image.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "\n.gome-ui-img-container {\n  background: url(" + __webpack_require__(63) + ") no-repeat;\n  background-position: center center;\n  background-size: 80% auto;\n}\n", ""]);

	// exports


/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAADdCAYAAADQBhwkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjE3NTI3NDBGOEFDMTFFNkIwNkRBNjBCQUIxMTIyOTYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjE3NTI3M0ZGOEFDMTFFNkIwNkRBNjBCQUIxMTIyOTYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozMkI1MDA4NUY0MkIxMUU2OTYzMDlEMjA4RTEwMDQyRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozMkI1MDA4NkY0MkIxMUU2OTYzMDlEMjA4RTEwMDQyRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqAYL9IAABXaSURBVHja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"

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vue = __webpack_require__(6);

	var _vue2 = _interopRequireDefault(_vue);

	var _gomeUiLazyload = __webpack_require__(65);

	var _gomeUiLazyload2 = _interopRequireDefault(_gomeUiLazyload);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	_vue2.default.use(_gomeUiLazyload2.default);
	exports.default = _vue2.default.extend({
	    props: ['src', 'placeholder']
	});

/***/ },
/* 65 */
/***/ function(module, exports) {

	import Filter from './Filter.js';
	import scrollEnd from './scrollEnd.js';

	scrollEnd();
	const compute = function(el, time, cb) {
	    const rect = el.getBoundingClientRect();
	    if(rect.bottom >=0 && rect.top <= window.screen.height
	        && rect.right >0 && rect.left < window.screen.width){
	        if(el.src != el.newSrc && !!el.newSrc){
	            el.src = el.newSrc;
	            el.style.opacity = '1';
	            el.style.transition = !time ? 'opacity .3s' : 'opacity '+time;
	            if(cb){
	                cb();
	            }
	        }
	    }
	}
	const getSpeed = function(opt){
	    let lastPos = opt.lastPos;
	    let lastSpeeds = opt.lastSpeeds;
	    let aveSpeed = opt.aveSpeed;
	    const curPos = document.body.getBoundingClientRect().top
	    let speed = lastPos - curPos
	    if(lastSpeeds.length<10){
	        lastSpeeds.push(speed)
	    }else{
	        lastSpeeds.shift()
	        lastSpeeds.push(speed)
	    }
	    let sumSpeed = 0
	    lastSpeeds.forEach(function(speed){
	        sumSpeed += speed
	    })
	    aveSpeed = Math.abs(sumSpeed/lastSpeeds.length)
	    lastPos = curPos
	    return {
	        lastPos,
	        lastSpeeds,
	        aveSpeed
	    }
	}
	const compareSrc = function(src, newSrc) {
	    if(!newSrc)return false;
	    if(src.replace(/^http:/,'').replace(/^https:/,'').match(newSrc.replace(/^http:/,'').replace(/^https:/,''))){
	        return true
	    }else return false
	}

	const lazyload = {
	    install: (Vue, options) => {
	        Vue.directive('lazyload', {
	            inserted (el, binding, vnode, oldVnode) {
	                if(!el)return;
	                if(compareSrc(el.src,binding.value))return;
	                el.style.opacity = 0;
	                if(!el.src){
	                    el.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
	                }
	                let speed = {
	                    lastPos: document.body.getBoundingClientRect().top,
	                    lastSpeeds: [],
	                    aveSpeed: 0
	                }
	                el.newSrc = binding.value;
	                const computeBySpeed = function(){
	                    if(!el.newSrc || el.newSrc === el.src)return;
	                    speed = getSpeed(speed);
	                    if(speed.aveSpeed > 10)return;
	                    compute(el);
	                }
	                const onScrollEnd = function(){
	                    if(!el.newSrc || el.newSrc === el.src)return;
	                    compute(el);
	                }
	                el.onload = function() {
	                    compute(el);
	                    el.onload = new Function();
	                    el.onerror = new Function();
	                    window.addEventListener('scroll', computeBySpeed);
	                    window.addEventListener('scrollEnd', onScrollEnd);
	                }
	                el.onerror = function () {
	                    el.onload = new Function();
	                    el.onerror = new Function();
	                    window.removeEventListener('scroll', computeBySpeed);
	                    window.removeEventListener('scrollEnd', onScrollEnd);
	                }
	                setTimeout( () => {
	                    compute(el);
	                })
	                
	            },
	            update (el, binding) {
	                if(compareSrc(el.src,binding.value))return;
	                el.style.opacity = 0;
	                el.style.transition = 'opacity .15s';
	                el.newSrc = binding.value;
	                setTimeout(() => {
	                    compute(el, '.15');
	                },150)
	            },
	        });
	    }
	};
	export default lazyload;


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "gome-ui-img-container"
	  }, [_c('img', {
	    directives: [{
	      name: "lazyload",
	      rawName: "v-lazyload",
	      value: (_vm.src),
	      expression: "src"
	    }],
	    attrs: {
	      "src": _vm.placeholder || 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
	    }
	  })])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1126d957", module.exports)
	  }
	}

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(68)

	/* script */
	__vue_exports__ = __webpack_require__(71)

	/* template */
	var __vue_template__ = __webpack_require__(72)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\workspace\\h5\\gome-ui-kit\\components\\loading\\loading.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-209a58d9", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-209a58d9", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] loading.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(69);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-209a58d9!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./loading.vue", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-209a58d9!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./loading.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "/*opacity*/\n/*font size*/\n/*z*/\n/*font-icon*/\n/*\n* @Author: zhaoye-ds1\n* @Date:   2015-08-18 11:14:43\n * @Last Modified by: zhaoye\n * @Last Modified time: 2017-04-28 20:32:26\n*/\n/* end*/\n.loading-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 199998;\n  display: -webkit-box;\n  display: box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-align: center;\n  box-pack: center;\n  align-items: center;\n  -webkit-align-items: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n.loading-container.h_center {\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-pack: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n.loading-container.v_center:not(.vertical) {\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  box-align: center;\n  align-items: center;\n  -webkit-align-items: center;\n}\n.loading-container.v_center.vertical {\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-pack: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n}\n.loading-container.center {\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-align: center;\n  box-pack: center;\n  align-items: center;\n  -webkit-align-items: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n.loading-container.vertical {\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n}\n.loading-container.reverse {\n  flex-direction: row-reverse;\n  -webkit-flex-direction: row-reverse;\n  -ms-direction: row-reverse;\n  -webkit-box-direction: reverse;\n  -moz-box-direction: reverse;\n  box-direction: reverse;\n}\n.loading-container.stretch {\n  align-content: stretch;\n}\n.loading-container .loading-wrapper {\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: .06rem;\n  border-radius: .1rem;\n}\n.loading-container .loading-wrapper .loading {\n  font-size: 0.28rem;\n  padding: .2rem;\n  /*background-color: rgba(0, 0, 0, 0.7);*/\n  /*border-radius: .04rem;*/\n  /*max-width: 80%;*/\n  color: #fff;\n  text-align: center;\n  word-break: break-all;\n  line-height: 1.3;\n  width: 32px;\n  height: 32px;\n  background-image: url(" + __webpack_require__(70) + ");\n  background-repeat: no-repeat;\n  background-position: 0 0;\n  -webkit-background-size: 100% auto;\n  background-size: 100% auto;\n}\n.loading_play {\n  -webkit-animation: mui-loading-ani 0.6s infinite;\n}\n@-webkit-keyframes mui-loading-ani {\n0%,\n  6.66% {\n    background-position-y: 0;\n}\n6.67%,\n  13.32% {\n    background-position-y: -32px;\n}\n13.33%,\n  19.98% {\n    background-position-y: -64px;\n}\n19.99%,\n  26.64% {\n    background-position-y: -96px;\n}\n26.65%,\n  33.3% {\n    background-position-y: -128px;\n}\n33.31%,\n  39.96% {\n    background-position-y: -160px;\n}\n39.97%,\n  46.62% {\n    background-position-y: -192px;\n}\n46.63%,\n  53.28% {\n    background-position-y: -224px;\n}\n53.29%,\n  59.94% {\n    background-position-y: -256px;\n}\n59.95%,\n  66.6% {\n    background-position-y: -288px;\n}\n66.62%,\n  73.26% {\n    background-position-y: -320px;\n}\n73.27%,\n  79.92% {\n    background-position-y: -352px;\n}\n79.93%,\n  86.58% {\n    background-position-y: -384px;\n}\n86.59%,\n  93.24% {\n    background-position-y: -416px;\n}\n93.25%,\n  99.9% {\n    background-position-y: -448px;\n}\n99.91%,\n  100% {\n    background-position-y: -480px;\n}\n}\n", ""]);

	// exports


/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vue = __webpack_require__(6);

	var _vue2 = _interopRequireDefault(_vue);

	var _base = __webpack_require__(30);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = _vue2.default.extend({
	    mixins: [_base2.default],
	    data: function data() {
	        return {
	            show: true
	        };
	    },
	    created: function created() {
	        var _this = this;

	        this.mountMyself2();
	        if (this.mode && this.mode == 'lazy') {
	            this.show = false;
	            setTimeout(function () {
	                _this.show = true;
	            }, 500);
	        }
	    }
	});

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "loading-container"
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.show),
	      expression: "show"
	    }],
	    staticClass: "loading-wrapper"
	  }, [_c('div', {
	    staticClass: "loading loading_play"
	  })])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-209a58d9", module.exports)
	  }
	}

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(74)

	/* script */
	__vue_exports__ = __webpack_require__(77)

	/* template */
	var __vue_template__ = __webpack_require__(78)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\workspace\\h5\\gome-ui-kit\\components\\gotop\\gotop.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1ad795fb", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1ad795fb", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] gotop.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(75);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1ad795fb!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./gotop.vue", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1ad795fb!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./gotop.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "/*opacity*/\n/*font size*/\n/*z*/\n/*font-icon*/\n/*\n* @Author: zhaoye-ds1\n* @Date:   2015-08-18 11:14:43\n * @Last Modified by: zhaoye\n * @Last Modified time: 2017-04-28 20:32:26\n*/\n/* end*/\n#gotop {\n  display: -webkit-box;\n  display: box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-align: center;\n  box-pack: center;\n  align-items: center;\n  -webkit-align-items: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n  position: fixed;\n  bottom: .2rem;\n  right: .2rem;\n  color: #fff;\n  z-index: 99999;\n  -webkit-transform: translateZ(0);\n  -moz-transform: translateZ(0);\n  transform: translateZ(0);\n}\n#gotop.h_center {\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-pack: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n#gotop.v_center:not(.vertical) {\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  box-align: center;\n  align-items: center;\n  -webkit-align-items: center;\n}\n#gotop.v_center.vertical {\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-pack: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n}\n#gotop.center {\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-align: center;\n  box-pack: center;\n  align-items: center;\n  -webkit-align-items: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n#gotop.vertical {\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n}\n#gotop.reverse {\n  flex-direction: row-reverse;\n  -webkit-flex-direction: row-reverse;\n  -ms-direction: row-reverse;\n  -webkit-box-direction: reverse;\n  -moz-box-direction: reverse;\n  box-direction: reverse;\n}\n#gotop.stretch {\n  align-content: stretch;\n}\n.gotop-enter-active,\n.gotop-leave-active {\n  transition: opacity .3s;\n}\n.gotop-enter {\n  opacity: 0;\n}\n.gotop-leave-active {\n  opacity: 0;\n}\n#gotop {\n  width: 1rem;\n  background: url(" + __webpack_require__(76) + ") no-repeat;\n  background-size: 100% 100%;\n  border-radius: 1rem;\n  text-align: center;\n  line-height: 1rem;\n  height: 1rem;\n}\n", ""]);

	// exports


/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAA9lBMVEX///8AAACurq7Gxsbh4eGEfn21tbX4+PjBwcGZmZmZmZmpqano6Oj19fX8/Pyenp7r6+vOzs6ZmZmZmZmjo6PT09PLy8uZmZmZmZm7u7uZmZmampqamprR0dGZmZmwsLCIgoCZmZmmpqabm5uMhoWbmZiYk5Lf39/l5eWZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmnoqG3s7KZmZmZmZmZmZmtqaja2tqSjYvPzMzW1NPv7+/c29ri4ODn5uXs6+vz8vKZmZmZmZmZmZmZmZmZmZmZmZmZmZmqqqqhnJu/vLvJxsWZmZmZmZmZmZmZmZle3aIfAAAAUXRSTlPMAPLm2ebvz+kL4fbW0M381eIUm/ng5HdI7Nv17OBP8uUh9/Dk4+Ha2Na4qFkHAmwd9One29G8lN3c49bU09PS0dDOyMaQcFxFKfXf2de/XW8IXtIxAAAD/klEQVRYw6zV2VLiQBiG4c9AJ+kskKUqiQGRfd8VnFLHXdFSp4r7v5nJ4MxohO5OgPe8n+ru/+DHAT/neXQ270wny0IxnM3PRs+O4AAPpKXHWV46tFuWqSBn/jRa9qGUnz2W6DbgMOgVJM/CWpYnFXrBMCVInzTdNsHItHXtiaYAqV+U2+DWlos+TQr2NdmCMEvW+onAcVfPIlFZvTsWg4taJoeE5TK1hQAcuFUDKTKq7oAHOg+yglQp8oPDBiuhitSpYYUFvjQ8bJHXeNkMVrQjbNWRVtkEOqGNLbNDZx0c3KvYOvV+sAa6MnZIdr+Di6qCWEt+iKdUF3FwXDOwCwijNo6B3Qx2LNP9Cvb1HHYsp/c/Qaplwe+t/AZBWY3+B33RhE8JIafCSfv/QFq0hN4PsWgV6V9wJPN/J/Le8S4W5dEHONTaXC+63AWAi+ia/NG1teEKDPQEXiJRD1Zgz+Z5J6R8iY8uy+SEK9q9PyAtmEIvoWgWaASWJDBTIu8Kn11FogJ2UikCXY/tva68uPjKET03AkOD+YIGqV8j3nWdNEywMsIDOHmBl0rMOwiOsbm7JqnfYL2bOmnegdFxAF/leilF1YfLWHVNcn6Lzd2ekyZrAbqYtxjgymOJLLD1Cx0Le8zqYGpij5lTTBTsMWWCJfbaEr97M7vVxmEgCouRsURsVptdia3ZJsYXpeSi0BZK8UUeoLlpz/u/TD2TOJCfcZsgeghxiOCTJnakmTP/cwNvc4c8y31TXjI/Nvxg55I82PzXy6jFX94cMsr/4+0ro9ob3mC/rfRlNOGPcgQUotrulSQ1QMEXEqWzR4B2SEFE2IvcMEFCObw7RKIKVjuklnR+hWiKmj9hvv0GowpmWZxbYbucOOh3S7Co5eqKqhmmKWPveCRG5aCXVEQFYhRHEcPauBBlJMEqqYgkSzowWlEkCbo0HoWMxODMqTY3U+mcAAeQ93xfjSdCJAQiD5tAajonCecUkGgEigToGjTmROXHSUqsA49HCL2aEkvSrgPDDphoqyQja5Rq0i5lhQp0aLZAi4p5sDJiKOhlhRQ+GrDHfATKrCOwikrho5Zm8kt5QwjJeH8AbKy1KLXSTNSdFI8OMkcDCiidOQASgFAfFY/dHih6Pyxve1sxsKhQOVci9AwUMdDzFnFU3r5PF+AWCOt5xHZxc8ZYidQy0GoFuG4ROF4Cbzi7gGJtEkmQlPj1hUWQ38QQdXfX2ix3nWIEza4zgmZvmlX1uLrGqlo9/pCZJnp4vdTue52w+0TLywzJZWbLtMts6v6E7awb45spY3zDxvjl1n173rpv2bq/urnQ+sXQXPhlhu7C7/uFby9sLujtDzw9r77T/vgEp4ySFsm4gVYAAAAASUVORK5CYII="

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vue = __webpack_require__(6);

	var _vue2 = _interopRequireDefault(_vue);

	var _base = __webpack_require__(30);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = _vue2.default.extend({
	    mixins: [_base2.default],
	    data: function data() {
	        return {
	            isShow: false
	        };
	    },
	    created: function created() {
	        var _this = this;

	        this.mountMyself('gotop');
	        var scroll = function scroll() {
	            if (global.scrollY > global.screen.availHeight) {
	                _this.isShow = true;
	            } else {
	                _this.isShow = false;
	            }
	            global.requestAnimationFrame(scroll);
	        };
	        global.requestAnimationFrame(scroll);
	    },

	    methods: {
	        onClick: function onClick() {
	            var speed = global.scrollY / 10 < 220 ? 220 : global.scrollY / 10;
	            var scrollTop = function scrollTop() {
	                global.scrollTo(0, global.scrollY - speed);
	                if (global.scrollY > 0) global.requestAnimationFrame(scrollTop);
	            };
	            global.requestAnimationFrame(scrollTop);
	        }
	    }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('transition', {
	    attrs: {
	      "name": "gotop"
	    }
	  }, [_c('i', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.isShow),
	      expression: "isShow"
	    }],
	    attrs: {
	      "id": "gotop"
	    },
	    on: {
	      "click": _vm.onClick
	    }
	  })])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1ad795fb", module.exports)
	  }
	}

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(80)

	/* template */
	var __vue_template__ = __webpack_require__(83)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\workspace\\h5\\gome-ui-kit\\components\\timer\\timer.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4bffb3ab", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-4bffb3ab", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] timer.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vue = __webpack_require__(6);

	var _vue2 = _interopRequireDefault(_vue);

	var _timerMixin = __webpack_require__(81);

	var _timerMixin2 = _interopRequireDefault(_timerMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = _vue2.default.extend({
	    mixins: [_timerMixin2.default],
	    props: ['endContent', 'type', 'hasPostfix'],
	    data: function data() {
	        return {
	            endText: '',
	            h: ':',
	            m: ':',
	            s: '',
	            dayBound: '1'
	        };
	    },
	    created: function created() {
	        this.endText = this.endContent || '已结束';
	        if (this.type == '时分秒' || this.type == 'chinese') {
	            this.h = '时';
	            this.m = '分';
	            this.s = '秒';
	        } else if (this.type == 'under3') {
	            this.dayBound = 3;
	        }
	    }
	});

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(82)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\workspace\\h5\\gome-ui-kit\\components\\timer\\timer.mixin.vue"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-192dde04", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-192dde04", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] timer.mixin.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 82 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//

	var singleToDouble = function singleToDouble(val) {
	    if (val < 10) {
	        val = '0' + val;
	    }
	    return val;
	};
	exports.default = {
	    props: ['timeStart', 'timeEnd', 'timeLeft'],
	    data: function data() {
	        return {
	            day: 0,
	            hour: 0,
	            minitue: 0,
	            second: 0,
	            interval: null,
	            startTime: 0,
	            endTime: 0,
	            status: 'pending'
	        };
	    },
	    created: function created() {
	        if (this.timeEnd) {
	            this.endTime = this.timeEnd;
	        }
	        if (this.timeStart) {
	            this.startTime = this.timeStart;
	        }
	        if (this.timeLeft) {
	            this.startTime = Number(new Date().getTime());
	            this.endTime = Number(this.startTime) + Number(this.timeLeft);
	        }
	        if (this.startTime && !this.endTime) {
	            this.countToStart(this.timeStart);
	        } else if (this.startTime && this.endTime) {
	            this.start();
	        } else {
	            this.$watch('startTime', this.start);
	        }
	    },

	    methods: {
	        countToStart: function countToStart() {
	            var _this = this;

	            var now = this.startTime ? new Date(this.startTime) : new Date();
	            var end = new Date(this.endTime);
	            var delta = end.getTime() - now.getTime();
	            //1000 * 60 * 60 * 24 
	            //1天的毫秒数
	            if (delta <= 86400000) {
	                setTimeout(function () {
	                    _this.start();
	                }, delta);
	            }
	        },
	        start: function start() {
	            var _this2 = this;

	            this.status = 'start';
	            //加1秒时间才对
	            this.endTime += 1000;
	            this.counter();
	            this.interval = setInterval(function () {
	                _this2.status = 'counting';
	                _this2.counter();
	            }, 1000);
	        },
	        counter: function counter() {
	            this.$nextTick(function () {
	                var end = new Date(this.endTime);
	                var now = new Date();
	                var delta = end.getTime() - now.getTime();
	                this.day = Math.floor(delta / 1000 / 60 / 60 / 24);
	                if (this.day > 3) {
	                    this.day = 3;
	                }
	                this.hour = Math.floor(delta / 1000 / 60 / 60 % 24);
	                if (this.type == 'under3') {
	                    this.hour += 24 * 2;
	                }
	                this.minitue = Math.floor(delta / 1000 / 60 % 60);
	                this.second = Math.floor(delta / 1000 % 60);
	                if (this.hour <= 0 && this.minitue <= 0 && this.second <= 0 && this.day < 1) {
	                    clearInterval(this.interval);
	                    console.log('timerENd');
	                    this.status = 'end';
	                    this.$emit('timerEnd');
	                }
	                this.hour = singleToDouble(this.hour);
	                this.minitue = singleToDouble(this.minitue);
	                this.second = singleToDouble(this.second);
	            });
	        }
	    }
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', [(_vm.status != 'end') ? _c('span', {
	    staticClass: "timer"
	  }, [_c('span', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (this.day >= _vm.dayBound),
	      expression: "this.day>=dayBound"
	    }]
	  }, [_c('span', {
	    staticClass: "time day"
	  }, [_vm._v(_vm._s(_vm.day))]), _c('span', {
	    staticClass: "day-tip"
	  }, [_vm._v("天"), _c('span', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (this.day >= 3 || _vm.hasPostfix),
	      expression: "this.day>=3 || hasPostfix"
	    }]
	  }, [_vm._v("以上")])])]), _c('em', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (this.day < _vm.dayBound),
	      expression: "this.day<dayBound"
	    }]
	  }, [_c('span', {
	    staticClass: "time"
	  }, [_vm._v(_vm._s(_vm.hour))]), _c('i', [_vm._v(_vm._s(_vm.h))]), _c('span', {
	    staticClass: "time"
	  }, [_vm._v(_vm._s(_vm.minitue))]), _c('i', [_vm._v(_vm._s(_vm.m))]), _c('span', {
	    staticClass: "time"
	  }, [_vm._v(_vm._s(_vm.second))]), (_vm.s) ? _c('i', [_vm._v(_vm._s(_vm.s))]) : _vm._e()])]) : _c('span', {
	    staticClass: "timer"
	  }, [_vm._v("\n        " + _vm._s(_vm.endText) + "\n    ")])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-4bffb3ab", module.exports)
	  }
	}

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(85)

	/* script */
	__vue_exports__ = __webpack_require__(87)

	/* template */
	var __vue_template__ = __webpack_require__(88)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\workspace\\h5\\gome-ui-kit\\components\\product\\product.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-61962a3f", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-61962a3f", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] product.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(86);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-61962a3f!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./product.vue", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-61962a3f!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./product.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "/*opacity*/\n/*font size*/\n/*z*/\n/*font-icon*/\n/*\n* @Author: zhaoye-ds1\n* @Date:   2015-08-18 11:14:43\n * @Last Modified by: zhaoye\n * @Last Modified time: 2017-04-28 20:32:26\n*/\n/* end*/\n.product {\n  width: 100%;\n  overflow: hidden;\n  background-color: #fff;\n}\n.product .container.img {\n  position: relative;\n  box-sizing: border-box;\n}\n.product .container.img {\n  background-color: #f4f4f4;\n  background-image: url(" + __webpack_require__(63) + ");\n  background-repeat: no-repeat;\n  background-size: 100% auto;\n  background-position: center;\n}\n", ""]);

	// exports


/***/ },
/* 87 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    props: ['href', 'img']
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "product"
	  }, [_c('a', {
	    staticClass: "react",
	    attrs: {
	      "href": _vm.href || 'javascript:;'
	    }
	  }, [_c('div', {
	    staticClass: "container img"
	  }, [_vm._t("tag"), _vm._v(" "), _vm._t("mask"), _vm._v(" "), _vm._t("mask-bottom-bar"), _vm._v(" "), _c('img', {
	    directives: [{
	      name: "lazyload",
	      rawName: "v-lazyload:adapter.product",
	      value: (_vm.img),
	      expression: "img",
	      arg: "adapter",
	      modifiers: {
	        "product": true
	      }
	    }],
	    attrs: {
	      "onerror": "javascript:this.src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='"
	    }
	  })], 2), _vm._v(" "), _c('div', {
	    staticClass: "container content"
	  }, [_vm._t("content")], 2)])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-61962a3f", module.exports)
	  }
	}

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(90)

	/* script */
	__vue_exports__ = __webpack_require__(92)

	/* template */
	var __vue_template__ = __webpack_require__(93)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\workspace\\h5\\gome-ui-kit\\components\\tag\\tag.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0b949d95", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-0b949d95", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] tag.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(91);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0b949d95!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tag.vue", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0b949d95!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tag.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "/*opacity*/\n/*font size*/\n/*z*/\n/*font-icon*/\n/*\n* @Author: zhaoye-ds1\n* @Date:   2015-08-18 11:14:43\n * @Last Modified by: zhaoye\n * @Last Modified time: 2017-04-28 20:32:26\n*/\n/* end*/\n.ui.tag.default {\n  display: inline-block;\n  font-size: 0.24rem;\n  border: 1px solid #ff5c5c;\n  color: #ff5c5c;\n}\n.ui.tag.solid {\n  display: inline-block;\n  font-size: 0.2rem;\n  background-color: #ff5c5c;\n  padding: .03rem .04rem;\n  color: #fff;\n  border-radius: 2px;\n}\n.ui.tag.icon-tag {\n  box-sizing: content-box;\n  display: inline-block;\n  font-size: 0.24rem;\n  border: 1px solid #ff5c5c;\n  color: #ff5c5c;\n}\n", ""]);

	// exports


/***/ },
/* 92 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', {
	    staticClass: "ui tag"
	  }, [_vm._t("icon"), _vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-0b949d95", module.exports)
	  }
	}

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(95)

	/* script */
	__vue_exports__ = __webpack_require__(97)

	/* template */
	var __vue_template__ = __webpack_require__(98)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\workspace\\h5\\gome-ui-kit\\components\\errorpage\\error.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2f4bb540", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-2f4bb540", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] error.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(96);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2f4bb540!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./error.vue", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2f4bb540!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./error.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "/*opacity*/\n/*font size*/\n/*z*/\n/*font-icon*/\n/*\n* @Author: zhaoye-ds1\n* @Date:   2015-08-18 11:14:43\n * @Last Modified by: zhaoye\n * @Last Modified time: 2017-04-28 20:32:26\n*/\n/* end*/\n.error-page {\n  display: -webkit-box;\n  display: box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-align: center;\n  box-pack: center;\n  align-items: center;\n  -webkit-align-items: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: #f2f2f2;\n  z-index: 199998;\n}\n.error-page.h_center {\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-pack: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n.error-page.v_center:not(.vertical) {\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  box-align: center;\n  align-items: center;\n  -webkit-align-items: center;\n}\n.error-page.v_center.vertical {\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-pack: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n}\n.error-page.center {\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-align: center;\n  box-pack: center;\n  align-items: center;\n  -webkit-align-items: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n.error-page.vertical {\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n}\n.error-page.reverse {\n  flex-direction: row-reverse;\n  -webkit-flex-direction: row-reverse;\n  -ms-direction: row-reverse;\n  -webkit-box-direction: reverse;\n  -moz-box-direction: reverse;\n  box-direction: reverse;\n}\n.error-page.stretch {\n  align-content: stretch;\n}\n.error-page .img-container {\n  width: 50%;\n  max-width: 320px;\n}\n.error-page p {\n  font-size: 0.32rem;\n  color: #666;\n  line-height: 0.64rem;\n  height: 0.64rem;\n}\n", ""]);

	// exports


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vue = __webpack_require__(6);

	var _vue2 = _interopRequireDefault(_vue);

	var _button = __webpack_require__(26);

	var _button2 = _interopRequireDefault(_button);

	var _base = __webpack_require__(30);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _vue2.default.extend({
	    mixins: [_base2.default],
	    components: {
	        'btn': _button2.default
	    },
	    data: function data() {
	        return {
	            isFixed: {
	                position: 'initial'
	            }
	        };
	    },
	    created: function created() {
	        this.mountMyself();
	        // if(!$g.env.hybrid){
	        //     this.isFixed = {
	        //        position: 'initial';
	        //    };
	        // }
	    },

	    methods: {
	        onClick: function onClick() {
	            this.$emit('click');
	            this.destroyMyself();
	        }
	    }
	}); //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "error-page",
	    style: (_vm.isFixed)
	  }, [_vm._m(0), _vm._v(" "), _c('p', [_vm._v("网络找不到了~")]), _vm._v(" "), _c('btn', {
	    staticClass: "default reverse gray",
	    on: {
	      "click": _vm.onClick
	    }
	  }, [_vm._v("重新加载")])], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "img-container"
	  }, [_c('img', {
	    attrs: {
	      "src": __webpack_require__(99)
	    }
	  })])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2f4bb540", module.exports)
	  }
	}

/***/ },
/* 99 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAAD8CAYAAADjcbh8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Mjc2MDlERENBRUE5MTFFNUJDRDdEOTBFQUNENjkzRjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Mjc2MDlERERBRUE5MTFFNUJDRDdEOTBFQUNENjkzRjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyNzYwOUREQUFFQTkxMUU1QkNEN0Q5MEVBQ0Q2OTNGNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyNzYwOUREQkFFQTkxMUU1QkNEN0Q5MEVBQ0Q2OTNGNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlBBnOIAAJUTSURBVHja7L0HnBxn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"

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(101)

	/* script */
	__vue_exports__ = __webpack_require__(103)

	/* template */
	var __vue_template__ = __webpack_require__(104)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\workspace\\h5\\gome-ui-kit\\components\\errorpage\\error.custom.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-e7eb26e2", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-e7eb26e2", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] error.custom.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(102);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-e7eb26e2!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./error.custom.vue", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-e7eb26e2!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./error.custom.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "/*opacity*/\n/*font size*/\n/*z*/\n/*font-icon*/\n/*\n* @Author: zhaoye-ds1\n* @Date:   2015-08-18 11:14:43\n * @Last Modified by: zhaoye\n * @Last Modified time: 2017-04-28 20:32:26\n*/\n/* end*/\n.error-page {\n  display: -webkit-box;\n  display: box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-align: center;\n  box-pack: center;\n  align-items: center;\n  -webkit-align-items: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: #f2f2f2;\n  z-index: 199998;\n}\n.error-page.h_center {\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-pack: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n.error-page.v_center:not(.vertical) {\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  box-align: center;\n  align-items: center;\n  -webkit-align-items: center;\n}\n.error-page.v_center.vertical {\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-pack: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n}\n.error-page.center {\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-align: center;\n  box-pack: center;\n  align-items: center;\n  -webkit-align-items: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n.error-page.vertical {\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n}\n.error-page.reverse {\n  flex-direction: row-reverse;\n  -webkit-flex-direction: row-reverse;\n  -ms-direction: row-reverse;\n  -webkit-box-direction: reverse;\n  -moz-box-direction: reverse;\n  box-direction: reverse;\n}\n.error-page.stretch {\n  align-content: stretch;\n}\n.error-page .img-container {\n  width: 50%;\n  max-width: 320px;\n}\n.error-page .btn {\n  margin-top: .2rem;\n}\n", ""]);

	// exports


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vue = __webpack_require__(6);

	var _vue2 = _interopRequireDefault(_vue);

	var _button = __webpack_require__(26);

	var _button2 = _interopRequireDefault(_button);

	var _base = __webpack_require__(30);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _vue2.default.extend({
	    mixins: [_base2.default],
	    components: {
	        'btn': _button2.default
	    },
	    data: function data() {
	        return {
	            isFixed: {
	                position: 'initial'
	            }
	        };
	    },

	    created: function created() {
	        this.mountMyself();
	        /*if(!$g.env.hybrid){
	            this.isFixed = {
	                position: 'initial'
	            };
	        }*/
	    },
	    methods: {
	        onClick: function onClick() {
	            this.$emit('click');
	            this.destroyMyself();
	        }
	    }
	}); //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "error-page",
	    style: (_vm.isFixed)
	  }, [_c('div', {
	    staticClass: "img-container"
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.imageUrl
	    }
	  })]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.content))]), _vm._v(" "), (_vm.btnContent) ? _c('btn', {
	    attrs: {
	      "class-name": 'default reverse gray'
	    },
	    on: {
	      "click": _vm.onClick
	    }
	  }, [_vm._v(_vm._s(_vm.btnContent))]) : _vm._e()], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-e7eb26e2", module.exports)
	  }
	}

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(106)

	/* template */
	var __vue_template__ = __webpack_require__(112)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\workspace\\h5\\gome-ui-kit\\components\\radio\\radio.group.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-231b4de8", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-231b4de8", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] radio.group.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vue = __webpack_require__(6);

	var _vue2 = _interopRequireDefault(_vue);

	var _radioItem = __webpack_require__(107);

	var _radioItem2 = _interopRequireDefault(_radioItem);

	var _radioMixin = __webpack_require__(110);

	var _radioMixin2 = _interopRequireDefault(_radioMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _vue2.default.extend({
	    mixins: [_radioMixin2.default],
	    props: ['source'],
	    components: {
	        radio: _radioItem2.default
	    },
	    created: function created() {
	        this.initRadio(this.source);
	    }
	}); //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(108)

	/* template */
	var __vue_template__ = __webpack_require__(109)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\workspace\\h5\\gome-ui-kit\\components\\radio\\radio.item.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2177bc8c", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-2177bc8c", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] radio.item.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vue = __webpack_require__(6);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _vue2.default.extend({
	    props: ['source', 'index'],
	    methods: {
	        onClick: function onClick() {
	            this.$emit('onClick', this.source, this.index);
	        }
	    }
	}); //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', {
	    staticClass: "radio",
	    class: {
	      "active": _vm.source[_vm.index].isActive
	    },
	    on: {
	      "click": _vm.onClick
	    }
	  }, [_vm._t("pre"), _vm._v(" "), (_vm.source[_vm.index].content) ? _c('span', {
	    staticClass: "radio-content"
	  }, [_vm._v(_vm._s(_vm.source[_vm.index].content))]) : _vm._e(), _vm._v(" "), _vm._t("post")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2177bc8c", module.exports)
	  }
	}

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(111)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\workspace\\h5\\gome-ui-kit\\components\\radio\\radio.mixin.vue"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-8565da2c", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-8565da2c", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] radio.mixin.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 111 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//

	exports.default = {
	    methods: {
	        onRadioClick: function onRadioClick(data, index) {
	            data.forEach(function (_item, idx) {
	                if (index != idx) console.log(data);
	                data[idx].isActive = false;
	            });
	            data[index].isActive = true;
	        }
	    }
	};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "radio-container"
	  }, _vm._l((_vm.source), function(item, index) {
	    return _c('radio', {
	      attrs: {
	        "source": _vm.source,
	        "index": index
	      },
	      on: {
	        "onClick": function($event) {
	          _vm.onRadioClick(_vm.source, index)
	        }
	      }
	    })
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-231b4de8", module.exports)
	  }
	}

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(114)

	/* template */
	var __vue_template__ = __webpack_require__(115)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\workspace\\h5\\gome-ui-kit\\components\\option\\option.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-70fc558e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-70fc558e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] option.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vue = __webpack_require__(6);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _vue2.default.extend({
	    props: ['source', 'index'],
	    computed: {
	        status: function status() {
	            if (this.source[this.index].isDisable) {
	                return 'disable';
	            } else {
	                return this.source[this.index].isActive ? 'active' : '';
	            }
	        }
	    },
	    methods: {
	        onClick: function onClick() {
	            this.$emit('onClick', this.source, this.index);
	        }
	    }
	}); //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', {
	    staticClass: "option",
	    class: _vm.status,
	    on: {
	      "click": _vm.onClick
	    }
	  }, [_vm._t("pre"), _vm._v(" "), (_vm.source[_vm.index].content) ? _c('span', [_vm._v(_vm._s(_vm.source[_vm.index].content))]) : _vm._e(), _vm._v(" "), _vm._t("post")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-70fc558e", module.exports)
	  }
	}

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(117)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\workspace\\h5\\gome-ui-kit\\components\\option\\option.mixin.vue"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4ac3500c", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-4ac3500c", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] option.mixin.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 117 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//

	exports.default = {
	    methods: {
	        onOptionClick: function onOptionClick(data, index) {
	            if (data[index].isDisable) return;
	            data[index].isActive = data[index].isActive ? false : true;
	        }
	    }
	};

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(119)

	/* script */
	__vue_exports__ = __webpack_require__(121)

	/* template */
	var __vue_template__ = __webpack_require__(122)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\workspace\\h5\\gome-ui-kit\\components\\aside\\aside.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-59b86a51", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-59b86a51", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] aside.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(120);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-59b86a51!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./aside.vue", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-59b86a51!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./aside.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "/*opacity*/\n/*font size*/\n/*z*/\n/*font-icon*/\n/*\n* @Author: zhaoye-ds1\n* @Date:   2015-08-18 11:14:43\n * @Last Modified by: zhaoye\n * @Last Modified time: 2017-04-28 20:32:26\n*/\n/* end*/\n.aside-container {\n  position: fixed;\n  background-color: transparent;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: 1199;\n  display: block;\n}\n.aside-container .bg {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  z-index: 1198;\n}\n.aside-container aside {\n  display: -webkit-box;\n  display: box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  position: absolute;\n  z-index: 1200;\n  background-color: #fff;\n}\n.aside-container aside.h_center {\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-pack: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n.aside-container aside.v_center:not(.vertical) {\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  box-align: center;\n  align-items: center;\n  -webkit-align-items: center;\n}\n.aside-container aside.v_center.vertical {\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-pack: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n}\n.aside-container aside.center {\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-align: center;\n  box-pack: center;\n  align-items: center;\n  -webkit-align-items: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n.aside-container aside.vertical {\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n}\n.aside-container aside.reverse {\n  flex-direction: row-reverse;\n  -webkit-flex-direction: row-reverse;\n  -ms-direction: row-reverse;\n  -webkit-box-direction: reverse;\n  -moz-box-direction: reverse;\n  box-direction: reverse;\n}\n.aside-container aside.stretch {\n  align-content: stretch;\n}\n.aside-container aside.right {\n  right: 0;\n  height: 100%;\n}\n.aside-container aside.right.size-10 {\n  width: 10%;\n}\n.aside-container aside.right.size-20 {\n  width: 20%;\n}\n.aside-container aside.right.size-30 {\n  width: 30%;\n}\n.aside-container aside.right.size-40 {\n  width: 40%;\n}\n.aside-container aside.right.size-50 {\n  width: 50%;\n}\n.aside-container aside.right.size-60 {\n  width: 60%;\n}\n.aside-container aside.right.size-70 {\n  width: 70%;\n}\n.aside-container aside.right.size-80 {\n  width: 80%;\n}\n.aside-container aside.right.size-90 {\n  width: 90%;\n}\n.aside-container aside.left {\n  left: 0;\n  height: 100%;\n}\n.aside-container aside.left.size-10 {\n  width: 10%;\n}\n.aside-container aside.left.size-20 {\n  width: 20%;\n}\n.aside-container aside.left.size-30 {\n  width: 30%;\n}\n.aside-container aside.left.size-40 {\n  width: 40%;\n}\n.aside-container aside.left.size-50 {\n  width: 50%;\n}\n.aside-container aside.left.size-60 {\n  width: 60%;\n}\n.aside-container aside.left.size-70 {\n  width: 70%;\n}\n.aside-container aside.left.size-80 {\n  width: 80%;\n}\n.aside-container aside.left.size-90 {\n  width: 90%;\n}\n.aside-container aside.top {\n  top: 0;\n  width: 100%;\n}\n.aside-container aside.top.size-10 {\n  height: 10%;\n}\n.aside-container aside.top.size-20 {\n  height: 20%;\n}\n.aside-container aside.top.size-30 {\n  height: 30%;\n}\n.aside-container aside.top.size-40 {\n  height: 40%;\n}\n.aside-container aside.top.size-50 {\n  height: 50%;\n}\n.aside-container aside.top.size-60 {\n  height: 60%;\n}\n.aside-container aside.top.size-70 {\n  height: 70%;\n}\n.aside-container aside.top.size-80 {\n  height: 80%;\n}\n.aside-container aside.top.size-90 {\n  height: 90%;\n}\n.aside-container aside.bottom {\n  bottom: 0;\n  width: 100%;\n}\n.aside-container aside.bottom.size-10 {\n  height: 10%;\n}\n.aside-container aside.bottom.size-20 {\n  height: 20%;\n}\n.aside-container aside.bottom.size-30 {\n  height: 30%;\n}\n.aside-container aside.bottom.size-40 {\n  height: 40%;\n}\n.aside-container aside.bottom.size-50 {\n  height: 50%;\n}\n.aside-container aside.bottom.size-60 {\n  height: 60%;\n}\n.aside-container aside.bottom.size-70 {\n  height: 70%;\n}\n.aside-container aside.bottom.size-80 {\n  height: 80%;\n}\n.aside-container aside.bottom.size-90 {\n  height: 90%;\n}\n.aside-container aside .scroller-container {\n  height: 100%;\n}\n.aside-container aside .scroller-container.as-partial {\n  position: relative !important;\n  height: auto;\n}\n.aside-container aside .scroller-container .scroller {\n  height: 100%;\n}\n.aside-enter-active,\n.aside-leave-active {\n  transition: all .5s;\n}\n.aside-enter-active .bg,\n.aside-leave-active .bg {\n  transition: all .5s;\n}\n.aside-enter-active aside,\n.aside-leave-active aside {\n  transition: all .5s;\n}\n.aside-enter .bg,\n.aside-leave-active .bg {\n  opacity: 0;\n}\n.aside-enter aside.left,\n.aside-leave-active aside.left {\n  -webkit-transform: translate3d(-100%, 0, 0);\n  -moz-transform: translate3d(-100%, 0, 0);\n  transform: translate3d(-100%, 0, 0);\n}\n.aside-enter aside.right,\n.aside-leave-active aside.right {\n  -webkit-transform: translate3d(100%, 0, 0);\n  -moz-transform: translate3d(100%, 0, 0);\n  transform: translate3d(100%, 0, 0);\n}\n.aside-enter aside.top,\n.aside-leave-active aside.top {\n  -webkit-transform: translate3d(0, -100%, 0);\n  -moz-transform: translate3d(0, -100%, 0);\n  transform: translate3d(0, -100%, 0);\n}\n.aside-enter aside.bottom,\n.aside-leave-active aside.bottom {\n  -webkit-transform: translate3d(0, 100%, 0);\n  -moz-transform: translate3d(0, 100%, 0);\n  transform: translate3d(0, 100%, 0);\n}\n.aside-enter aside {\n  -webkit-transition-timing-function: ease-in;\n  -moz-transition-timing-function: ease-in;\n  transition-timing-function: ease-in;\n}\n.aside-leave-active aside {\n  -webkit-transition-timing-function: ease-out;\n  -moz-transition-timing-function: ease-out;\n  transition-timing-function: ease-out;\n}\n", ""]);

	// exports


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vue = __webpack_require__(6);

	var _vue2 = _interopRequireDefault(_vue);

	var _scroller = __webpack_require__(43);

	var _scroller2 = _interopRequireDefault(_scroller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = _vue2.default.extend({
	    props: ['direction', 'position', 'dontRoute'],
	    components: {
	        scroller: _scroller2.default
	    },
	    data: function data() {
	        return {
	            touched: false,
	            isShow: false
	        };
	    },

	    methods: {
	        in: function _in() {
	            this.isShow = true;
	        },
	        out: function out() {
	            if (this.$router && !this.dontRoute) {
	                this.$router.back();
	            } else {
	                this.isShow = false;
	            }
	        },
	        out2: function out2() {
	            if (!this.touched) {
	                this.out();
	                this.touched = true;
	            }
	        }
	    }
	});

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return (!_vm.$router || _vm.dontRoute) ? _c('transition', {
	    attrs: {
	      "name": "aside"
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.isShow),
	      expression: "isShow"
	    }],
	    staticClass: "aside-container"
	  }, [_c('div', {
	    staticClass: "bg",
	    on: {
	      "click": _vm.out,
	      "touchmove": _vm.out2
	    }
	  }), _vm._v(" "), _c('aside', {
	    class: [_vm.direction || 'right', _vm.position ? ('size-' + _vm.position) : 'size-90']
	  }, [_vm._t("default")], 2)])]) : _c('div', {
	    staticClass: "aside-container"
	  }, [_c('div', {
	    staticClass: "bg",
	    on: {
	      "click": _vm.out,
	      "touchmove": _vm.out2
	    }
	  }), _vm._v(" "), _c('aside', {
	    class: [_vm.direction || 'right', _vm.position ? ('size-' + _vm.position) : 'size-90']
	  }, [_vm._t("default")], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-59b86a51", module.exports)
	  }
	}

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(124)

	/* script */
	__vue_exports__ = __webpack_require__(126)

	/* template */
	var __vue_template__ = __webpack_require__(127)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\workspace\\h5\\gome-ui-kit\\components\\root\\root.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-a9f1fcce", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-a9f1fcce", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] root.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(125);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-a9f1fcce!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./root.vue", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-a9f1fcce!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./root.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "/*\n* @Author: zhaoye-ds1\n* @Date:   2015-08-18 11:14:43\n * @Last Modified by: zhaoye\n * @Last Modified time: 2017-04-28 20:32:26\n*/\n/* end*/\n#root,\n.page {\n  display: -webkit-box;\n  display: box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  align-content: stretch;\n  font-size: .32rem;\n  background-color: #fff;\n  opacity: 1;\n  height: 100%;\n}\n#root.h_center,\n.page.h_center {\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-pack: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n#root.v_center:not(.vertical),\n.page.v_center:not(.vertical) {\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  box-align: center;\n  align-items: center;\n  -webkit-align-items: center;\n}\n#root.v_center.vertical,\n.page.v_center.vertical {\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-pack: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n}\n#root.center,\n.page.center {\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-align: center;\n  box-pack: center;\n  align-items: center;\n  -webkit-align-items: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n#root.vertical,\n.page.vertical {\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n}\n#root.reverse,\n.page.reverse {\n  flex-direction: row-reverse;\n  -webkit-flex-direction: row-reverse;\n  -ms-direction: row-reverse;\n  -webkit-box-direction: reverse;\n  -moz-box-direction: reverse;\n  box-direction: reverse;\n}\n#root.stretch,\n.page.stretch {\n  align-content: stretch;\n}\n.page-switch-enter-active,\n.page-switch-leave-active,\n.page-forward-enter-active,\n.page-backward-leave-active,\n.page-backward-enter-active,\n.page-forward-leave-active {\n  transition: all .5s ease;\n  -webkit-transition: all .5s ease;\n}\n.page-switch-enter,\n.page-switch-leave-active {\n  position: absolute;\n  z-index: 10000;\n  opacity: 0;\n}\n.page-forward-enter,\n.page-backward-leave-active {\n  -webkit-transform: translate3d(100%, 0, 0);\n  transform: translate3d(100%, 0, 0);\n  position: absolute;\n  z-index: 10000;\n  opacity: 0;\n}\n.page-forward-leave-active,\n.page-backward-enter {\n  -webkit-transform: translate3d(-100%, 0, 0);\n  transform: translate3d(-100%, 0, 0);\n  position: absolute;\n  z-index: 0;\n  opacity: 0;\n}\n", ""]);

	// exports


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vue = __webpack_require__(6);

	var _vue2 = _interopRequireDefault(_vue);

	var _gomeUtilsEventbus = __webpack_require__(17);

	var _gomeUtilsEventbus2 = _interopRequireDefault(_gomeUtilsEventbus);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = _vue2.default.extend({
	    data: function data() {
	        return {
	            transitionName: 'page-forward',
	            history: new Map(),
	            'min-height': document.documentElement.clientHeight + 'px'
	        };
	    },
	    created: function created() {
	        this.history = new Map();
	    },

	    watch: {
	        '$route': function $route(to, from) {
	            var toDepth = !to.path.match(/\/.+/g) ? 0 : to.path.match(/\/((?!\/).)+/g).length;
	            var fromDepth = !from.path.match(/\/.+/g) ? 0 : from.path.match(/\/((?!\/).)+/g).length;
	            //这里是当同级路由是使用switch方案
	            if (navigator.userAgent.match(/android/)) {
	                this.transitionName = 'page-switch';
	                _gomeUtilsEventbus2.default.emitDOM('scroll');
	                window.scrollTo(0, 0);
	                setTimeout(function () {
	                    _gomeUtilsEventbus2.default.emitDOM('scroll');
	                }, 250);
	                setTimeout(function () {
	                    _gomeUtilsEventbus2.default.emitDOM('scrollEnd');
	                }, 500);
	                return;
	            }
	            if (toDepth == fromDepth) {
	                this.transitionName = 'page-switch';
	            } else {
	                this.transitionName = toDepth < fromDepth ? 'page-backward' : 'page-forward';
	                _gomeUtilsEventbus2.default.emitDOM('scroll');
	                window.scrollTo(0, 0);
	                setTimeout(function () {
	                    _gomeUtilsEventbus2.default.emitDOM('scroll');
	                }, 250);
	                setTimeout(function () {
	                    _gomeUtilsEventbus2.default.emitDOM('scrollEnd');
	                }, 500);
	            }
	            //这里似乎能解决同级路由先后顺序的计算问题，但是需要保留switch方案
	            //因为并不能确定此解决方案是否可行
	            /*if(this.history.has(to.path) && this.history.get(to.path) == from.path){
	                this.history.delete(to.path)
	                this.transitionName = 'page-backward'
	            }else{
	                this.history.set(from.path,to.path)
	                this.transitionName = 'page-forward'
	            }*/
	        }
	    }
	});

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    attrs: {
	      "id": "root"
	    }
	  }, [_c('transition', {
	    attrs: {
	      "name": _vm.transitionName
	    }
	  }, [_c('router-view')], 1), _vm._v(" "), _c('modal-spa')], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-a9f1fcce", module.exports)
	  }
	}

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(129)

	/* script */
	__vue_exports__ = __webpack_require__(131)

	/* template */
	var __vue_template__ = __webpack_require__(132)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\workspace\\h5\\gome-ui-kit\\components\\page\\page.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-affa148e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-affa148e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] page.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(130);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-affa148e!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./page.vue", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-affa148e!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./page.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "\n.page {\n  width: 100%;\n}\n", ""]);

	// exports


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vue = __webpack_require__(6);

	var _vue2 = _interopRequireDefault(_vue);

	var _scroller = __webpack_require__(43);

	var _scroller2 = _interopRequireDefault(_scroller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = _vue2.default.extend({
	    components: {},
	    data: function data() {
	        return {
	            style: {
	                'min-height': document.documentElement.clientHeight + 'px'
	            }
	        };
	    }
	});

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "page",
	    style: (_vm.style)
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-affa148e", module.exports)
	  }
	}

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(134)

	/* script */
	__vue_exports__ = __webpack_require__(136)

	/* template */
	var __vue_template__ = __webpack_require__(137)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\workspace\\h5\\gome-ui-kit\\components\\swiper\\pagination.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0374ad7b", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-0374ad7b", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] pagination.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(135);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0374ad7b!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pagination.vue", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0374ad7b!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pagination.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "/*opacity*/\n/*font size*/\n/*z*/\n/*font-icon*/\n/*\n* @Author: zhaoye-ds1\n* @Date:   2015-08-18 11:14:43\n * @Last Modified by: zhaoye\n * @Last Modified time: 2017-04-28 20:32:26\n*/\n/* end*/\n.pagination {\n  display: -webkit-box;\n  display: box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-align: center;\n  box-pack: center;\n  align-items: center;\n  -webkit-align-items: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n  position: absolute;\n  bottom: 0;\n  z-index: 1000;\n  height: .3rem;\n  width: 100%;\n}\n.pagination.h_center {\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-pack: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n.pagination.v_center:not(.vertical) {\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  box-align: center;\n  align-items: center;\n  -webkit-align-items: center;\n}\n.pagination.v_center.vertical {\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-pack: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n}\n.pagination.center {\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-align: center;\n  box-pack: center;\n  align-items: center;\n  -webkit-align-items: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n.pagination.vertical {\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n}\n.pagination.reverse {\n  flex-direction: row-reverse;\n  -webkit-flex-direction: row-reverse;\n  -ms-direction: row-reverse;\n  -webkit-box-direction: reverse;\n  -moz-box-direction: reverse;\n  box-direction: reverse;\n}\n.pagination.stretch {\n  align-content: stretch;\n}\n.pagination i {\n  margin: 0 .05rem;\n  display: block;\n  width: .3rem;\n  height: .06rem;\n  background-color: #fff;\n  opacity: .3;\n}\n.pagination i.active {\n  background-color: #fff;\n  opacity: 1;\n}\n", ""]);

	// exports


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vue = __webpack_require__(6);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _vue2.default.extend({
	    props: ['list', 'options'],
	    data: function data() {
	        return {
	            activeIdx: 0
	        };
	    },
	    mounted: function mounted() {
	        var _this = this;

	        this.$parent.$on('scrollAt', function (idx) {
	            _this.activeIdx = idx;
	        });
	    }
	}); //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "pagination"
	  }, _vm._l((_vm.$parent.originList), function(page, index) {
	    return _c('i', {
	      class: {
	        active: _vm.activeIdx == index
	      }
	    })
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-0374ad7b", module.exports)
	  }
	}

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(139)

	/* script */
	__vue_exports__ = __webpack_require__(141)

	/* template */
	var __vue_template__ = __webpack_require__(142)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\workspace\\h5\\gome-ui-kit\\components\\tabnav\\tabnav.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-26350b19", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-26350b19", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] tabnav.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(140);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-26350b19!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tabnav.vue", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-26350b19!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tabnav.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "/*opacity*/\n/*font size*/\n/*z*/\n/*font-icon*/\n/*\n* @Author: zhaoye-ds1\n* @Date:   2015-08-18 11:14:43\n * @Last Modified by: zhaoye\n * @Last Modified time: 2017-04-28 20:32:26\n*/\n/* end*/\n.tabnav {\n  background-color: #fff;\n  border-bottom: 1px solid #ddd;\n}\n.tabnav .tabnav-item {\n  color: #666;\n  font-size: 0.28rem;\n  padding: 0 0.14rem;\n  line-height: 0.84rem;\n  height: 0.84rem;\n}\n.tabnav .tabnav-item.active {\n  color: #ff5c5c;\n  border-bottom: 2px solid #ff5c5c;\n}\n.tabnav .scroller-container {\n  margin-bottom: -1px;\n}\n", ""]);

	// exports


/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(6);

	var _vue2 = _interopRequireDefault(_vue);

	var _scroller = __webpack_require__(43);

	var _scroller2 = _interopRequireDefault(_scroller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	    props: ['list', 'cubic'],
	    components: {
	        scroller: _scroller2.default
	    },
	    data: function data() {
	        return {
	            listActArr: [],
	            index_t: 0,
	            clientWidth: document.documentElement.clientWidth,
	            //    滚动的距离
	            toleft: 0,
	            //    页面的宽度
	            maxTranslate0: 0,
	            //    向左向右
	            isLeftR: 0,
	            isScroll: false
	        };
	    },
	    methods: {
	        onClick: function onClick(index) {
	            //TODO y轴的问提
	            this.list.map(function (item) {
	                item.isActive = false;
	            });
	            this.list[index].isActive = true;

	            var $elList = this.$el.querySelectorAll('.tabnav-item');

	            var elWidth = void 0;
	            var restWidth = 0;
	            var listWidth = 0;
	            var containerWidth = this.$refs.scroller.$el.offsetWidth;
	            for (var i = 0; i < $elList.length; i++) {
	                var $el = $elList[i];
	                if (i == index) {
	                    //TODO 匹配margin的情况
	                    elWidth = $el.offsetWidth;
	                }
	                if (i < index) {
	                    restWidth += $el.offsetWidth;
	                }
	                listWidth += $el.offsetWidth;
	            }
	            //TODO 匹配margin的情况
	            this.$refs.scroller.scrollTo({
	                x: -1 * (restWidth + elWidth / 2 - containerWidth / 2)
	            });
	            this.$emit('active', index);
	        }
	    }
	};

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('scroller', {
	    ref: "scroller",
	    staticClass: "tabnav",
	    attrs: {
	      "direction": "horizontal"
	    }
	  }, _vm._l((_vm.list), function(item, index) {
	    return _c('div', {
	      staticClass: "tabnav-item",
	      class: {
	        'active': item.isActive
	      },
	      on: {
	        "click": function($event) {
	          _vm.onClick(index)
	        }
	      }
	    }, [_c('span', [_vm._v(_vm._s(item.content))])])
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-26350b19", module.exports)
	  }
	}

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(144)
	__webpack_require__(146)

	/* script */
	__vue_exports__ = __webpack_require__(148)

	/* template */
	var __vue_template__ = __webpack_require__(149)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "C:\\workspace\\h5\\gome-ui-kit\\components\\modal\\modal.spa.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-172336b1"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-172336b1", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-172336b1", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] modal.spa.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(145);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-172336b1!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./modal.spa.vue", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-172336b1!../../node_modules/less-loader/index.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./modal.spa.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "/*opacity*/\n/*font size*/\n/*z*/\n/*font-icon*/\n/*\n* @Author: zhaoye-ds1\n* @Date:   2015-08-18 11:14:43\n * @Last Modified by: zhaoye\n * @Last Modified time: 2017-04-28 20:32:26\n*/\n/* end*/\n.alert {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100099;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n  display: -webkit-box;\n  display: box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-align: center;\n  box-pack: center;\n  align-items: center;\n  -webkit-align-items: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n.alert.h_center {\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-pack: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n.alert.v_center:not(.vertical) {\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  box-align: center;\n  align-items: center;\n  -webkit-align-items: center;\n}\n.alert.v_center.vertical {\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-pack: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n}\n.alert.center {\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-align: center;\n  box-pack: center;\n  align-items: center;\n  -webkit-align-items: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n.alert.vertical {\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n}\n.alert.reverse {\n  flex-direction: row-reverse;\n  -webkit-flex-direction: row-reverse;\n  -ms-direction: row-reverse;\n  -webkit-box-direction: reverse;\n  -moz-box-direction: reverse;\n  box-direction: reverse;\n}\n.alert.stretch {\n  align-content: stretch;\n}\n.alert .window {\n  width: 5.4rem;\n  max-width: 5.4rem;\n  background-color: #fff;\n  font-size: 0.3rem;\n  border-radius: 0.2rem;\n  overflow: hidden;\n}\n.alert .window .title {\n  padding: 0.2rem 0;\n  font-size: 0.4rem;\n  text-align: center;\n  line-height: 0.52rem;\n  color: #333;\n  display: -webkit-box;\n  display: box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.alert .window .title.h_center {\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-pack: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n.alert .window .title.v_center:not(.vertical) {\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  box-align: center;\n  align-items: center;\n  -webkit-align-items: center;\n}\n.alert .window .title.v_center.vertical {\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-pack: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n}\n.alert .window .title.center {\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-align: center;\n  box-pack: center;\n  align-items: center;\n  -webkit-align-items: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n.alert .window .title.vertical {\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n}\n.alert .window .title.reverse {\n  flex-direction: row-reverse;\n  -webkit-flex-direction: row-reverse;\n  -ms-direction: row-reverse;\n  -webkit-box-direction: reverse;\n  -moz-box-direction: reverse;\n  box-direction: reverse;\n}\n.alert .window .title.stretch {\n  align-content: stretch;\n}\n.alert .window .title .text {\n  display: block;\n  -webkit-box-flex: 1;\n  -moz-box-flex: 1;\n  -webkit-flex: 1;\n  flex: 1;\n  align-items: stretch;\n  box-sizing: border-box;\n}\n.alert .window .title .text.fix-position {\n  padding-left: 0.7rem;\n}\n.alert .window .close {\n  color: #333;\n  background-color: #fff;\n  display: -webkit-box;\n  display: box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n}\n.alert .window .close.h_center {\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-pack: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n.alert .window .close.v_center:not(.vertical) {\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  box-align: center;\n  align-items: center;\n  -webkit-align-items: center;\n}\n.alert .window .close.v_center.vertical {\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-pack: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n}\n.alert .window .close.center {\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-align: center;\n  box-pack: center;\n  align-items: center;\n  -webkit-align-items: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n.alert .window .close.vertical {\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n}\n.alert .window .close.reverse {\n  flex-direction: row-reverse;\n  -webkit-flex-direction: row-reverse;\n  -ms-direction: row-reverse;\n  -webkit-box-direction: reverse;\n  -moz-box-direction: reverse;\n  box-direction: reverse;\n}\n.alert .window .close.stretch {\n  align-content: stretch;\n}\n.alert .window .close .blocker {\n  -moz-box-flex: 1;\n  -webkit-flex: 1;\n  flex: 1;\n  align-items: stretch;\n  box-sizing: border-box;\n  display: block;\n  content: ' ';\n  height: 100%;\n  width: 100%;\n  -webkit-box-flex: 1;\n}\n.alert .window .close i {\n  background-image: url(" + __webpack_require__(21) + ");\n  background-repeat: no-repeat;\n  background-position: center 40%;\n  background-size: 0.26666667rem 0.26666667rem;\n  display: block;\n  width: 0.7rem;\n  height: 0.7rem;\n}\n.alert .window .content {\n  text-align: center;\n  font-size: .32rem;\n  padding: .4rem;\n  color: #333;\n}\n.alert .window .title + .content {\n  padding-top: 0;\n}\n.alert .window .btn-container {\n  display: -webkit-box;\n  display: box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.alert .window .btn-container.h_center {\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-pack: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n.alert .window .btn-container.v_center:not(.vertical) {\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  box-align: center;\n  align-items: center;\n  -webkit-align-items: center;\n}\n.alert .window .btn-container.v_center.vertical {\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-pack: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n}\n.alert .window .btn-container.center {\n  -webkit-box-align: center;\n  -moz-box-align: center;\n  -webkit-box-pack: center;\n  -moz-box-pack: center;\n  box-align: center;\n  box-pack: center;\n  align-items: center;\n  -webkit-align-items: center;\n  justify-content: center;\n  -webkit-justify-content: center;\n}\n.alert .window .btn-container.vertical {\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  box-orient: vertical;\n  flex-direction: column;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n}\n.alert .window .btn-container.reverse {\n  flex-direction: row-reverse;\n  -webkit-flex-direction: row-reverse;\n  -ms-direction: row-reverse;\n  -webkit-box-direction: reverse;\n  -moz-box-direction: reverse;\n  box-direction: reverse;\n}\n.alert .window .btn-container.stretch {\n  align-content: stretch;\n}\n.alert .window .btn-container .btn {\n  display: block;\n  -webkit-box-flex: 1;\n  -moz-box-flex: 1;\n  -webkit-flex: 1;\n  flex: 1;\n  align-items: stretch;\n  box-sizing: border-box;\n  height: .88rem;\n  font-size: .32rem;\n  background-color: #fff;\n  color: #333;\n  line-height: .88rem;\n  text-align: center;\n  border: none;\n  border-radius: 0;\n  border-top: 1px #ddd solid;\n}\n.alert .window .btn-container .btn:first-child:not(:only-child) {\n  border-right: 1px #ddd solid;\n}\n.alert .window .btn-container .btnOk {\n  background: #ff5c5c;\n  border-radius: 0 0 .2rem 0;\n  color: #fff;\n}\n.alert .window .btn-container .btnCan {\n  border-radius: 0 0 0 .2rem;\n}\n", ""]);

	// exports


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(147);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-172336b1&scoped=true!../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./modal.spa.vue", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-172336b1&scoped=true!../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./modal.spa.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports
	exports.i(__webpack_require__(24), "");

	// module
	exports.push([module.id, "\r\n", ""]);

	// exports


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vue = __webpack_require__(6);

	var _vue2 = _interopRequireDefault(_vue);

	var _button = __webpack_require__(26);

	var _button2 = _interopRequireDefault(_button);

	var _modalMixin = __webpack_require__(33);

	var _modalMixin2 = _interopRequireDefault(_modalMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _vue2.default.extend({
	    components: {
	        btn: _button2.default
	    },
	    data: function data() {
	        return {
	            show: false,
	            title: '',
	            content: '',
	            htmlContent: '',
	            cancel: '',
	            ok: '',
	            hasClose: false
	        };
	    },

	    methods: {
	        onClick: function onClick(msg, e) {
	            this.$emit(msg, e);
	        },
	        close: function close() {
	            this.show = false;
	        }
	    }
	}); //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('transition', {
	    attrs: {
	      "name": "fade"
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.show),
	      expression: "show"
	    }],
	    staticClass: "alert",
	    class: _vm.className
	  }, [_c('div', {
	    staticClass: "window"
	  }, [(_vm.title || _vm.hasClose) ? _c('h4', {
	    staticClass: "title"
	  }, [(_vm.title) ? _c('span', {
	    staticClass: "text",
	    class: {
	      'fix-position': _vm.hasClose
	    }
	  }, [_vm._v(_vm._s(_vm.title))]) : _c('span', {
	    staticClass: "text",
	    class: {
	      'fix-position': _vm.hasClose
	    }
	  }, [_vm._v(" ")]), _vm._v(" "), (_vm.hasClose) ? _c('button', {
	    staticClass: "close",
	    on: {
	      "click": _vm.close
	    }
	  }, [_c('i')]) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm._t("title"), _vm._v(" "), (_vm.content) ? _c('p', {
	    staticClass: "content"
	  }, [_vm._v(_vm._s(_vm.content))]) : _vm._e(), _vm._v(" "), (_vm.htmlContent) ? _c('p', {
	    staticClass: "content",
	    domProps: {
	      "innerHTML": _vm._s(_vm.htmlContent)
	    }
	  }) : _vm._e(), _vm._v(" "), _vm._t("content"), _vm._v(" "), _c('div', {
	    staticClass: "btn-container"
	  }, [(_vm.cancel) ? _c('btn', {
	    attrs: {
	      "className": "reverse gray"
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.onClick('cancel', $event)
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.cancel))]) : _vm._e(), _vm._v(" "), (_vm.ok) ? _c('btn', {
	    attrs: {
	      "className": "reverse gray "
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.onClick('ok', $event)
	      }
	    }
	  }, [_vm._v(_vm._s(_vm.ok))]) : _vm._e()], 1), _vm._v(" "), _vm._t("button")], 2)])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-172336b1", module.exports)
	  }
	}

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(151);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(152)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!./reset.less", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/index.js!./reset.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "* {\n  word-break: break-all;\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font: inherit;\n  vertical-align: baseline;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\nhtml,\nbody,\nform,\nfieldset,\np,\ndiv,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  -webkit-text-size-adjust: none;\n  line-height: 1;\n}\nhtml {\n  font-size: 50px;\n}\nbody {\n  margin: 0 auto !important;\n  min-width: 320px !important;\n  font-family: sans-serif;\n  background: #f3f5f7;\n  color: #333;\n  font-size: 0.32rem;\n}\nol,\nul,\nli {\n  list-style: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: normal;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\nstrong,\nvar,\nem,\ni {\n  font-style: normal;\n  font-weight: normal;\n}\na {\n  text-decoration: none;\n  color: #333;\n}\nimg {\n  display: block;\n  width: 100%;\n}\ndel {\n  text-decoration: line-through;\n}\n.ellipsis {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.ellipsis_two {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\na.react {\n  display: block;\n  height: 100%;\n}\ninput {\n  -webkit-appearance: none;\n}\nbody {\n  position: relative;\n  overflow-x: hidden;\n}\n", ""]);

	// exports


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;