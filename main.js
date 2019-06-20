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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/npm-ccjs-ay/src/ccjs/cc.js":
/*!*************************************************!*\
  !*** ./node_modules/npm-ccjs-ay/src/ccjs/cc.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dom = __webpack_require__(/*! ./dom/dom */ "./node_modules/npm-ccjs-ay/src/ccjs/dom/dom.js");

var _dom2 = _interopRequireDefault(_dom);

var _storage = __webpack_require__(/*! ./storage/storage */ "./node_modules/npm-ccjs-ay/src/ccjs/storage/storage.js");

var _storage2 = _interopRequireDefault(_storage);

var _raf = __webpack_require__(/*! ./common/raf */ "./node_modules/npm-ccjs-ay/src/ccjs/common/raf.js");

var _raf2 = _interopRequireDefault(_raf);

var _common = __webpack_require__(/*! ./common/common */ "./node_modules/npm-ccjs-ay/src/ccjs/common/common.js");

var _common2 = _interopRequireDefault(_common);

var _xhr = __webpack_require__(/*! ./xhr/xhr */ "./node_modules/npm-ccjs-ay/src/ccjs/xhr/xhr.js");

var _xhr2 = _interopRequireDefault(_xhr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IS_WORKER = self.window === undefined;
var CONTEXT = IS_WORKER ? self : window;

var cc;
window.cc = cc = {
    utils: _common2.default,
    load: function load() {
        var addOns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    },
    select: function select(selector) {
        return _dom2.default.select(selector);
    },
    createElement: function createElement(tagName, id, options) {
        return _dom2.default.createElement(tagName, id, options);
    },
    createElementNS: function createElementNS(tagName, id) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        options.NS = true;
        return _dom2.default.createElement(tagName, id, options);
    },
    setValue: function setValue(key, value) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        options.reset = true;
        return _storage2.default.setValue(key, value, options);
    },
    saveArray: function saveArray(key) {
        var arr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var idkey = arguments[2];

        if (idkey !== undefined && idkey !== '' && key !== undefined) {
            arr.forEach(function (item) {
                cc.updateValue(item[idkey], item);
            });
        }
        return cc.setValue(key, arr);
    },
    updateValue: function updateValue(key, value) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        return _storage2.default.setValue(key, value, options);
    },
    getValue: function getValue(key) {
        return _storage2.default.getValue(key);
    },
    setTimer: function setTimer(fn, delay) {
        return _raf2.default.requestTimeout(fn, delay);
    },
    cancelTimer: function cancelTimer(handle) {
        _raf2.default.clearRequestTimeout(handle);
    },
    request: function request() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return _xhr2.default.ajax(params);
    }

};

if (IS_WORKER) {
    delete cc.select;
    delete cc.createElement;
    delete cc.createElementNS;
} else {
    var last = 0;
    var frameTicker = function frameTicker(timestamp) {
        cc.setValue('frame', timestamp, { immediately: true });
        //console.log(timestamp - last);
        last = timestamp;
        _raf2.default.requestTimeout(frameTicker, 16);
    };
    frameTicker(0);
}

exports.default = cc;

/***/ }),

/***/ "./node_modules/npm-ccjs-ay/src/ccjs/common/common.js":
/*!************************************************************!*\
  !*** ./node_modules/npm-ccjs-ay/src/ccjs/common/common.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var IS_WORKER = self.window === undefined;
var CONTEXT = IS_WORKER ? self : window;
var common = {};

common.objectforEach = function (obj, fn) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            fn(obj[key], key, obj);
        }
    }
};

common.objectAssign = function () {
    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var source = arguments[1];

    for (var key in source) {
        if (source.hasOwnProperty(key)) {
            target[key] = source[key];
        }
    }
    return target;
};

common.createId = function () {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};

common.isObject = function (item) {
    return item !== undefined && item === Object(item) && !(item instanceof Array);
};

common.getBrowser = function () {
    var isIE = false;
    var isChrome = false;
    var isOpera = false;
    if (!!CONTEXT.opr && !!opr.addons || !!CONTEXT.opera || navigator.userAgent.indexOf(' OPR/') >= 0) {
        isOpera = true;
        return 'opera';
    }
    if (typeof InstallTrigger !== 'undefined') {
        return 'firefox';
    }
    if (/constructor/i.test(CONTEXT.HTMLElement) || function (p) {
        return p.toString() === "[object SafariRemoteNotification]";
    }(!CONTEXT['safari'] || safari.pushNotification)) {
        return 'safari';
    }
    if ( false || !!document.documentMode) {
        Object.assign = function () {
            var output = arguments[0];
            for (var i = 1; i < arguments.length; i++) {
                for (var key in arguments[i]) {
                    var obj = arguments[i];
                    if (obj.hasOwnProperty(key)) output[key] = obj[key];
                }
            }
            return output;
        };
        if (!('remove' in Element.prototype)) {
            Element.prototype.remove = function () {
                if (this.parentNode) {
                    this.parentNode.removeChild(this);
                }
            };
        }
        isIE = true;
        return 'ie';
    }
    if (!isIE && !!CONTEXT.StyleMedia) {
        return 'edge';
    }
    if (!!CONTEXT.chrome && !!CONTEXT.chrome.webstore) {
        isChrome = true;
        return 'chrome';
    }
    if ((isChrome || isOpera) && !!CONTEXT.CSS) {
        return 'blink';
    }
};

common.readValue = function (value) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (typeof value === "function") {
        return value(options);
    } else {
        return value;
    }
};

common.getUrlVar = function (key, defaultValue) {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars[key] === undefined ? defaultValue : vars[key];
};

exports.default = common;

/***/ }),

/***/ "./node_modules/npm-ccjs-ay/src/ccjs/common/raf.js":
/*!*********************************************************!*\
  !*** ./node_modules/npm-ccjs-ay/src/ccjs/common/raf.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var IS_WORKER = self.window === undefined;
var CONTEXT = IS_WORKER ? self : window;
var raf = {
    requestTimeout: function requestTimeout(fn, delay) {
        if (!CONTEXT.requestAnimationFrame) return setTimeout(fn, delay);

        var start = Date.now(),
            handle = new Object();

        function loop(timestamp) {
            Date.now() - start >= delay ? fn(timestamp) : handle.value = CONTEXT.requestAnimationFrame(loop);
        };

        handle.value = CONTEXT.requestAnimationFrame(loop);
        return handle;
    },
    clearRequestTimeout: function clearRequestTimeout(handle) {
        CONTEXT.cancelAnimationFrame ? CONTEXT.cancelAnimationFrame(handle.value) : clearTimeout(handle);
    }
};

exports.default = raf;

/***/ }),

/***/ "./node_modules/npm-ccjs-ay/src/ccjs/dom/dom.js":
/*!******************************************************!*\
  !*** ./node_modules/npm-ccjs-ay/src/ccjs/dom/dom.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _common = __webpack_require__(/*! ../common/common */ "./node_modules/npm-ccjs-ay/src/ccjs/common/common.js");

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dom = {
    select: function select(selector) {
        if (selector === undefined) {
            return;
        }

        var _selector = selector.charAt(0);
        var name = selector.substring(1);
        var doms = [];
        switch (_selector) {
            case '#':
                return document.getElementById(name);
            default:
                doms = document.querySelectorAll(selector) || [];
        }

        return doms;
    },
    createElement: function createElement(tag) {
        var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var element = document.createElement(tag);

        var elementId = id || tag + '_' + _common2.default.createId();
        element.setAttribute('id', elementId);

        setupElementMethods(element, options);

        return element;
    }
};

function setupElementMethods(element, options) {
    element._eventListeners = new Map();
    element._bound = new Map();
    element._memory = {};

    element.add = function (tag, id, options) {
        var child = dom.createElement(tag, id, options);
        return this.addElement(child);
    };

    element.addElement = function (child) {
        this.appendChild(child);
        return child;
    };

    element.addClass = function (className) {
        this.classList.add(className);
        return this;
    };

    element.removeClass = function (className) {
        this.classList.remove(className);
        return this;
    };

    element.getAttr = function (key) {
        return element.getAttribute(key);
    };

    element.attr = function (key, value) {
        this._setElement('attr', key, value);
        return this;
    };

    element.getMemory = function () {
        return this._memory;
    };

    element.memory = function (obj) {
        this._memory = obj;
        return this;
    };

    element.getProp = function (key) {
        return element[key];
    };

    element.prop = function (key, value) {
        this._setElement('prop', key, value);
        return this;
    };

    element.css = function (key, value) {
        this._setElement('css', key, value);
        return this;
    };

    element.bind = function (key, fn) {
        if (key) {
            var self = this;
            this._bound.set(key, fn);
            this.classList.add('storage_' + key);
        }
        return this;
    };
    element.unbind = function (key) {
        var self = this;
        this._bound.delete(key);
        this.classList.remove('storage_' + key);
        return this;
    };

    element._react = function (key, value) {
        var fn = this._bound.get(key);
        if (fn) {
            if (fn.call(this, value, this._data) === false) {
                this.unbind(key);
            }
        }
    };

    element.on = function (eventName, fn) {
        var tag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

        var self = this;
        var eventTag = eventName + tag;
        var _eventHandler = element._eventListeners.get(eventTag);
        if (_eventHandler) {
            this.removeEventListener(eventName, _eventHandler);
            element._eventListeners.delete(eventTag);
        }
        if (fn) {
            _eventHandler = function eventHandler(e) {
                if (fn.call(self, e, self._data) === false) {
                    self.removeEventListener(eventName, _eventHandler);
                }
            };
            element._eventListeners.set(eventTag, _eventHandler);
            this.addEventListener(eventName, _eventHandler, false);
        }
        return self;
    };

    element.content = function (str) {
        this.innerText = str;
        return this;
    };

    element.removeSelf = function () {
        this.removeAllChildren();
        if (this.remove) {
            this.remove();
        } else {
            this.parentNode.removeChild(this);
        }
    };

    element.removeAllChildren = function () {
        while (this.firstChild) {
            this.removeChild(this.firstChild);
        }
    };

    element._setElement = function (type, key, value) {
        var self = this;
        if (key === undefined) {
            return this;
        }
        if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
            _common2.default.objectforEach(key, function (item, key) {
                self[type](key, item);
            });
            return this;
        }

        var v = _common2.default.readValue(value);

        switch (type) {
            case 'prop':
                this[key] = value;
                break;
            case 'attr':
                if (value === false) {
                    this.removeAttribute(key);
                } else {
                    this.setAttribute(key, value);
                }
                break;
            case 'css':
                this.style[key] = value;
                break;
        }
        return this;
    };

    element.isInViewport = function () {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var offsetX = options.offsetX || 0;
        var offsetY = options.offsetY || 0;

        var _getBoundingClientRec = this.getBoundingClientRect(),
            x = _getBoundingClientRec.x,
            y = _getBoundingClientRec.y,
            width = _getBoundingClientRec.width,
            height = _getBoundingClientRec.height; //IE not support bottom right


        var x2 = x + width;
        var y2 = y + height;
        var innerWidth = window.innerWidth;
        var innerHeight = window.innerHeight;
        return !(x2 <= 0 + offsetX || x >= innerWidth - offsetX || y2 <= 0 + offsetY || y >= innerHeight - offsetY);
    };
}

exports.default = dom;

/***/ }),

/***/ "./node_modules/npm-ccjs-ay/src/ccjs/storage/storage.js":
/*!**************************************************************!*\
  !*** ./node_modules/npm-ccjs-ay/src/ccjs/storage/storage.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _common = __webpack_require__(/*! ../common/common */ "./node_modules/npm-ccjs-ay/src/ccjs/common/common.js");

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storage = {
    dataMap: new Map(),
    timerMap: new Map(),
    setValue: function setValue(key, value) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var self = this;
        var dataMap = this.dataMap;
        var reset = options.reset;

        var shouldReact = false;
        var oldValue = dataMap.get(key);
        if (_common2.default.isObject(value) && _common2.default.isObject(oldValue) && reset !== true) {
            _common2.default.objectforEach(value, function (item, key, obj) {
                if (item !== value) {
                    shouldReact = true;
                }
                obj[key] = value[key];
            });
        } else {
            shouldReact = true;
            dataMap.set(key, value);
        }

        var newValue = dataMap.get(key);

        if (shouldReact) {
            this.broadcast(key, newValue, options);
        }

        return newValue;
    },
    broadcast: function broadcast(key, newValue) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var self = this;
        var timer = this.timerMap.get(key);

        if (timer) {
            cc.cancelTimer(timer);
        }

        timer = cc.setTimer(function () {
            var doms = document.getElementsByClassName('storage_' + key) || [];
            for (var i = 0; i < doms.length; i++) {
                var dom = doms[i];
                dom._react && dom._react(key, newValue);
            }
            self.timerMap.delete(key);
        }, options.immediately ? 0 : 10);

        this.timerMap.set(key, timer);
    },
    getValue: function getValue(key) {
        return this.dataMap.get(key);
    }
};

exports.default = storage;

/***/ }),

/***/ "./node_modules/npm-ccjs-ay/src/ccjs/xhr/xhr.js":
/*!******************************************************!*\
  !*** ./node_modules/npm-ccjs-ay/src/ccjs/xhr/xhr.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var xhr = {
    ajax: function ajax() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var promise = new Promise(function (resolve, reject) {
            var _ref = params || {},
                url = _ref.url,
                method = _ref.method,
                data = _ref.data,
                async = _ref.async,
                xhr = _ref.xhr,
                contentType = _ref.contentType,
                dataType = _ref.dataType,
                done = _ref.done,
                fail = _ref.fail;

            var header = params.header,
                onProgress = params.onProgress,
                beforeSend = params.beforeSend;

            var request = new XMLHttpRequest();
            request.open(method || 'GET', url, async === undefined ? true : async);

            for (var key in header || {}) {
                if ((header || {}).hasOwnProperty(key)) {
                    request.setRequestHeader(key, header[key]);
                }
            }
            if (cc.getValue('Authorization')) {
                request.setRequestHeader('Authorization', cc.getValue('Authorization'));
            }
            request.onload = function () {
                if (request.status >= 200 && request.status < 400) {
                    done && done(parseData(request.responseText), request);
                    resolve(parseData(request.responseText), request);
                } else {
                    fail && fail(parseData(request.responseText), request);
                    reject(parseData(request.responseText));
                }
            };

            request.onerror = function () {
                fail && fail(parseData(request.responseText), request);
                reject(parseData(request.responseText));
            };

            request.upload.onprogress = function (e) {
                var p = Math.floor(e.loaded / e.total * 100);
                onProgress && onProgress(p, e);
            };

            var _data = void 0;
            switch (dataType) {
                case 'file':
                    _data = data;
                    break;
                case 'json':
                default:
                    request.setRequestHeader('Content-Type', contentType === undefined ? "application/json; charset=utf-8" : contentType);
                    _data = JSON.stringify(data);
            }

            beforeSend && beforeSend(request);

            request.send(_data);
        });

        return promise;
    }
};

function parseData(data) {
    try {
        return JSON.parse(data || '');
    } catch (e) {
        return undefined;
    }
}

exports.default = xhr;

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _npmCcjsAy = __webpack_require__(/*! npm-ccjs-ay */ "./node_modules/npm-ccjs-ay/src/ccjs/cc.js");

var _npmCcjsAy2 = _interopRequireDefault(_npmCcjsAy);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function index() {
    index.env();
    index.root();
    index.header();
    index.content();
    index.footer();
    //index.iFrame();
}

index.env = function () {
    _npmCcjsAy2.default.setValue('viewport', { width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', function () {
        _npmCcjsAy2.default.updateValue('viewport', { width: window.innerWidth, height: window.innerHeight });
    });
};

index.root = function () {
    var root = _npmCcjsAy2.default.select('#body');
    var mainContainer = _npmCcjsAy2.default.createElement('div', 'main').addClass('main-container');
    root.appendChild(mainContainer);
};

index.header = function () {
    var header = _npmCcjsAy2.default.select('#main').add('div', 'header');
    var logo = header.add('div', 'header-logo').addClass('header-logo').content('Gallery');
};

index.content = function () {
    var content = _npmCcjsAy2.default.select('#main').add('div', 'content');
    for (var i = 0; i < 10; i++) {
        content.addElement(index.card({
            title: 'Test',
            description: 'A Sample description.',
            url: 'https://anxinyang.github.io/ccJS'
        }));
    }
};

index.footer = function () {
    var footer = _npmCcjsAy2.default.select('#main').add('div', 'footer');
};

index.card = function () {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var title = params.title,
        description = params.description,
        url = params.url;

    var container = _npmCcjsAy2.default.createElement('div').addClass('card').on('click', function () {
        window.open(url);
    });
    container.add('div').addClass('card-img');

    var content = container.add('div').addClass('card-content');
    content.add('strong').content(title);
    content.add('p').content(description);

    return container;
};

index.iFrame = function () {
    var root = _npmCcjsAy2.default.select('#body');
    var mainContainer = _npmCcjsAy2.default.createElement('div', 'iFrame').addClass('iFrame');
    root.appendChild(mainContainer);
};

index();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25wbS1jY2pzLWF5L3NyYy9jY2pzL2NjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ucG0tY2Nqcy1heS9zcmMvY2Nqcy9jb21tb24vY29tbW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ucG0tY2Nqcy1heS9zcmMvY2Nqcy9jb21tb24vcmFmLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ucG0tY2Nqcy1heS9zcmMvY2Nqcy9kb20vZG9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ucG0tY2Nqcy1heS9zcmMvY2Nqcy9zdG9yYWdlL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25wbS1jY2pzLWF5L3NyYy9jY2pzL3hoci94aHIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyJdLCJuYW1lcyI6WyJJU19XT1JLRVIiLCJzZWxmIiwid2luZG93IiwidW5kZWZpbmVkIiwiQ09OVEVYVCIsImNjIiwidXRpbHMiLCJjb21tb24iLCJsb2FkIiwiYWRkT25zIiwib3B0aW9ucyIsInNlbGVjdCIsInNlbGVjdG9yIiwiZG9tIiwiY3JlYXRlRWxlbWVudCIsInRhZ05hbWUiLCJpZCIsImNyZWF0ZUVsZW1lbnROUyIsIk5TIiwic2V0VmFsdWUiLCJrZXkiLCJ2YWx1ZSIsInJlc2V0Iiwic3RvcmFnZSIsInNhdmVBcnJheSIsImFyciIsImlka2V5IiwiZm9yRWFjaCIsIml0ZW0iLCJ1cGRhdGVWYWx1ZSIsImdldFZhbHVlIiwic2V0VGltZXIiLCJmbiIsImRlbGF5IiwicmFmIiwicmVxdWVzdFRpbWVvdXQiLCJjYW5jZWxUaW1lciIsImhhbmRsZSIsImNsZWFyUmVxdWVzdFRpbWVvdXQiLCJyZXF1ZXN0IiwicGFyYW1zIiwieGhyIiwiYWpheCIsImxhc3QiLCJmcmFtZVRpY2tlciIsInRpbWVzdGFtcCIsImltbWVkaWF0ZWx5Iiwib2JqZWN0Zm9yRWFjaCIsIm9iaiIsImhhc093blByb3BlcnR5Iiwib2JqZWN0QXNzaWduIiwidGFyZ2V0Iiwic291cmNlIiwiY3JlYXRlSWQiLCJzNCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwiaXNPYmplY3QiLCJPYmplY3QiLCJBcnJheSIsImdldEJyb3dzZXIiLCJpc0lFIiwiaXNDaHJvbWUiLCJpc09wZXJhIiwib3ByIiwiYWRkb25zIiwib3BlcmEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpbmRleE9mIiwiSW5zdGFsbFRyaWdnZXIiLCJ0ZXN0IiwiSFRNTEVsZW1lbnQiLCJwIiwic2FmYXJpIiwicHVzaE5vdGlmaWNhdGlvbiIsImRvY3VtZW50IiwiZG9jdW1lbnRNb2RlIiwiYXNzaWduIiwib3V0cHV0IiwiYXJndW1lbnRzIiwiaSIsImxlbmd0aCIsIkVsZW1lbnQiLCJwcm90b3R5cGUiLCJyZW1vdmUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJTdHlsZU1lZGlhIiwiY2hyb21lIiwid2Vic3RvcmUiLCJDU1MiLCJyZWFkVmFsdWUiLCJnZXRVcmxWYXIiLCJkZWZhdWx0VmFsdWUiLCJ2YXJzIiwicGFydHMiLCJsb2NhdGlvbiIsImhyZWYiLCJyZXBsYWNlIiwibSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNldFRpbWVvdXQiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJsb29wIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJjbGVhclRpbWVvdXQiLCJfc2VsZWN0b3IiLCJjaGFyQXQiLCJuYW1lIiwiZG9tcyIsImdldEVsZW1lbnRCeUlkIiwicXVlcnlTZWxlY3RvckFsbCIsInRhZyIsImVsZW1lbnQiLCJlbGVtZW50SWQiLCJzZXRBdHRyaWJ1dGUiLCJzZXR1cEVsZW1lbnRNZXRob2RzIiwiX2V2ZW50TGlzdGVuZXJzIiwiTWFwIiwiX2JvdW5kIiwiX21lbW9yeSIsImFkZCIsImNoaWxkIiwiYWRkRWxlbWVudCIsImFwcGVuZENoaWxkIiwiYWRkQ2xhc3MiLCJjbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJyZW1vdmVDbGFzcyIsImdldEF0dHIiLCJnZXRBdHRyaWJ1dGUiLCJhdHRyIiwiX3NldEVsZW1lbnQiLCJnZXRNZW1vcnkiLCJtZW1vcnkiLCJnZXRQcm9wIiwicHJvcCIsImNzcyIsImJpbmQiLCJzZXQiLCJ1bmJpbmQiLCJkZWxldGUiLCJfcmVhY3QiLCJnZXQiLCJjYWxsIiwiX2RhdGEiLCJvbiIsImV2ZW50TmFtZSIsImV2ZW50VGFnIiwiZXZlbnRIYW5kbGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImUiLCJhZGRFdmVudExpc3RlbmVyIiwiY29udGVudCIsInN0ciIsImlubmVyVGV4dCIsInJlbW92ZVNlbGYiLCJyZW1vdmVBbGxDaGlsZHJlbiIsImZpcnN0Q2hpbGQiLCJ0eXBlIiwidiIsInJlbW92ZUF0dHJpYnV0ZSIsInN0eWxlIiwiaXNJblZpZXdwb3J0Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwieDIiLCJ5MiIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImRhdGFNYXAiLCJ0aW1lck1hcCIsInNob3VsZFJlYWN0Iiwib2xkVmFsdWUiLCJuZXdWYWx1ZSIsImJyb2FkY2FzdCIsInRpbWVyIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJhc3luYyIsImNvbnRlbnRUeXBlIiwiZGF0YVR5cGUiLCJkb25lIiwiZmFpbCIsImhlYWRlciIsIm9uUHJvZ3Jlc3MiLCJiZWZvcmVTZW5kIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsIm9ubG9hZCIsInN0YXR1cyIsInBhcnNlRGF0YSIsInJlc3BvbnNlVGV4dCIsIm9uZXJyb3IiLCJ1cGxvYWQiLCJvbnByb2dyZXNzIiwibG9hZGVkIiwidG90YWwiLCJKU09OIiwic3RyaW5naWZ5Iiwic2VuZCIsInBhcnNlIiwiaW5kZXgiLCJyb290IiwibWFpbkNvbnRhaW5lciIsImxvZ28iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZm9vdGVyIiwiY29udGFpbmVyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFlBQVlDLEtBQUtDLE1BQUwsS0FBZ0JDLFNBQWxDO0FBQ0EsSUFBTUMsVUFBVUosWUFBWUMsSUFBWixHQUFtQkMsTUFBbkM7O0FBRUEsSUFBSUcsRUFBSjtBQUNBSCxPQUFPRyxFQUFQLEdBQVlBLEtBQUs7QUFDYkMsV0FBT0MsZ0JBRE07QUFFYkMsVUFBTSxnQkFBbUM7QUFBQSxZQUExQkMsTUFBMEIsdUVBQWpCLEVBQWlCO0FBQUEsWUFB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cEwsU0FBWSxvRUFBSCxFQUFHO0FBQUE7QUFBQTtBQUFBOztBQUU5QixRQUFJMkwsWUFBWSxzRUFDQyxZQUFZO0FBQ3JCak87QUFGUixLQUFnQixDQUFoQjtBQUlBaU87O0FBRUEsUUFBSXBFLFVBQVVvRSw4QkFBZCxjQUFjQSxDQUFkO0FBQ0FwRTtBQUNBQTs7QUFFQTtBQVpKNkQ7O0FBZUFBLGVBQWUsWUFBWTtBQUN2QixRQUFJQyxPQUFPeE4sMkJBQVgsT0FBV0EsQ0FBWDtBQUNBLFFBQUl5TixnQkFBZ0J6Tiw0REFBcEIsUUFBb0JBLENBQXBCO0FBRUF3TjtBQUpKRDs7QUFPQUEsUSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYXBwLmpzXCIpO1xuIiwiaW1wb3J0IGRvbSBmcm9tICcuL2RvbS9kb20nO1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tICcuL3N0b3JhZ2Uvc3RvcmFnZSc7XHJcbmltcG9ydCByYWYgZnJvbSAnLi9jb21tb24vcmFmJztcclxuaW1wb3J0IGNvbW1vbiBmcm9tICcuL2NvbW1vbi9jb21tb24nO1xyXG5pbXBvcnQgeGhyIGZyb20gJy4veGhyL3hocic7XHJcblxyXG5jb25zdCBJU19XT1JLRVIgPSBzZWxmLndpbmRvdyA9PT0gdW5kZWZpbmVkO1xyXG5jb25zdCBDT05URVhUID0gSVNfV09SS0VSID8gc2VsZiA6IHdpbmRvdztcclxuXHJcbnZhciBjYztcclxud2luZG93LmNjID0gY2MgPSB7XHJcbiAgICB1dGlsczogY29tbW9uLFxyXG4gICAgbG9hZDogZnVuY3Rpb24oYWRkT25zID0gW10sIG9wdGlvbnMgPSB7fSl7XHJcblxyXG4gICAgfSxcclxuICAgIHNlbGVjdDogZnVuY3Rpb24oc2VsZWN0b3Ipe1xyXG4gICAgICAgIHJldHVybiBkb20uc2VsZWN0KHNlbGVjdG9yKVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZUVsZW1lbnQ6IGZ1bmN0aW9uICh0YWdOYW1lLCBpZCwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiBkb20uY3JlYXRlRWxlbWVudCh0YWdOYW1lLCBpZCwgb3B0aW9ucylcclxuICAgIH0sXHJcbiAgICBjcmVhdGVFbGVtZW50TlM6IGZ1bmN0aW9uICh0YWdOYW1lLCBpZCwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgb3B0aW9ucy5OUyA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGRvbS5jcmVhdGVFbGVtZW50KHRhZ05hbWUsIGlkLCBvcHRpb25zKVxyXG4gICAgfSxcclxuICAgIHNldFZhbHVlOiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgb3B0aW9ucy5yZXNldCA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0VmFsdWUoa2V5LCB2YWx1ZSwgb3B0aW9ucylcclxuICAgIH0sXHJcbiAgICBzYXZlQXJyYXk6IGZ1bmN0aW9uKGtleSwgYXJyID0gW10sIGlka2V5KXtcclxuICAgICAgICBpZihpZGtleSAhPT0gdW5kZWZpbmVkICYmIGlka2V5ICE9PSAnJyAmJiBrZXkgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGFyci5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBjYy51cGRhdGVWYWx1ZShpdGVtW2lka2V5XSwgaXRlbSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjYy5zZXRWYWx1ZShrZXksIGFycik7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlVmFsdWU6IGZ1bmN0aW9uKGtleSwgdmFsdWUsIG9wdGlvbnMgPSB7fSl7XHJcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2Uuc2V0VmFsdWUoa2V5LCB2YWx1ZSwgb3B0aW9ucylcclxuICAgIH0sXHJcbiAgICBnZXRWYWx1ZTogIGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICByZXR1cm4gc3RvcmFnZS5nZXRWYWx1ZShrZXkpO1xyXG4gICAgfSxcclxuICAgIHNldFRpbWVyOiBmdW5jdGlvbiAoZm4sIGRlbGF5KSB7XHJcbiAgICAgICAgcmV0dXJuIHJhZi5yZXF1ZXN0VGltZW91dChmbiwgZGVsYXkpXHJcbiAgICB9LFxyXG4gICAgY2FuY2VsVGltZXI6IGZ1bmN0aW9uIChoYW5kbGUpIHtcclxuICAgICAgICByYWYuY2xlYXJSZXF1ZXN0VGltZW91dChoYW5kbGUpO1xyXG4gICAgfSxcclxuICAgIHJlcXVlc3Q6IGZ1bmN0aW9uIChwYXJhbXMgPSB7fSkge1xyXG4gICAgICAgIHJldHVybiB4aHIuYWpheChwYXJhbXMpO1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcbmlmKElTX1dPUktFUil7XHJcbiAgICBkZWxldGUgY2Muc2VsZWN0O1xyXG4gICAgZGVsZXRlIGNjLmNyZWF0ZUVsZW1lbnQ7XHJcbiAgICBkZWxldGUgY2MuY3JlYXRlRWxlbWVudE5TO1xyXG59ZWxzZXtcclxuICAgIGxldCBsYXN0ID0gMFxyXG4gICAgbGV0IGZyYW1lVGlja2VyID0gZnVuY3Rpb24gKHRpbWVzdGFtcCkge1xyXG4gICAgICAgIGNjLnNldFZhbHVlKCdmcmFtZScsIHRpbWVzdGFtcCwge2ltbWVkaWF0ZWx5OiB0cnVlfSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aW1lc3RhbXAgLSBsYXN0KTtcclxuICAgICAgICBsYXN0ID0gdGltZXN0YW1wO1xyXG4gICAgICAgIHJhZi5yZXF1ZXN0VGltZW91dChmcmFtZVRpY2tlciwgMTYpXHJcbiAgICB9O1xyXG4gICAgZnJhbWVUaWNrZXIoMCk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYzsiLCJjb25zdCBJU19XT1JLRVIgPSBzZWxmLndpbmRvdyA9PT0gdW5kZWZpbmVkO1xyXG5jb25zdCBDT05URVhUID0gSVNfV09SS0VSID8gc2VsZiA6IHdpbmRvdztcclxuY29uc3QgY29tbW9uID0ge307XHJcblxyXG5jb21tb24ub2JqZWN0Zm9yRWFjaCA9IGZ1bmN0aW9uKG9iaixmbil7XHJcbiAgICBmb3IodmFyIGtleSBpbiBvYmopIHtcclxuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgZm4ob2JqW2tleV0sIGtleSwgb2JqKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb21tb24ub2JqZWN0QXNzaWduID0gZnVuY3Rpb24odGFyZ2V0ID0ge30sIHNvdXJjZSl7XHJcbiAgICBmb3IobGV0IGtleSBpbiBzb3VyY2UpIHtcclxuICAgICAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbn07XHJcblxyXG5jb21tb24uY3JlYXRlSWQgPSBmdW5jdGlvbigpe1xyXG4gICAgZnVuY3Rpb24gczQoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXHJcbiAgICAgICAgICAgIC50b1N0cmluZygxNilcclxuICAgICAgICAgICAgLnN1YnN0cmluZygxKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzNCgpICsgczQoKSArICctJyArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyBzNCgpICsgczQoKTtcclxufTtcclxuXHJcbmNvbW1vbi5pc09iamVjdCA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICByZXR1cm4gKGl0ZW0hPT11bmRlZmluZWQgJiYgaXRlbSA9PT0gT2JqZWN0KGl0ZW0pICYmICEoaXRlbSBpbnN0YW5jZW9mIEFycmF5KSlcclxufTtcclxuXHJcbmNvbW1vbi5nZXRCcm93c2VyID0gZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgaXNJRSA9IGZhbHNlO1xyXG4gICAgbGV0IGlzQ2hyb21lID0gZmFsc2U7XHJcbiAgICBsZXQgaXNPcGVyYSA9IGZhbHNlO1xyXG4gICAgaWYgKCghIUNPTlRFWFQub3ByICYmICEhb3ByLmFkZG9ucykgfHwgISFDT05URVhULm9wZXJhIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignIE9QUi8nKSA+PSAwKSB7XHJcbiAgICAgICAgaXNPcGVyYSA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuICdvcGVyYSc7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIEluc3RhbGxUcmlnZ2VyICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybiAnZmlyZWZveCc7XHJcbiAgICB9XHJcbiAgICBpZiAoL2NvbnN0cnVjdG9yL2kudGVzdChDT05URVhULkhUTUxFbGVtZW50KSB8fCAoZnVuY3Rpb24gKHApIHtcclxuICAgICAgICByZXR1cm4gcC50b1N0cmluZygpID09PSBcIltvYmplY3QgU2FmYXJpUmVtb3RlTm90aWZpY2F0aW9uXVwiO1xyXG4gICAgfSkoIUNPTlRFWFRbJ3NhZmFyaSddIHx8IHNhZmFyaS5wdXNoTm90aWZpY2F0aW9uKSkge1xyXG4gICAgICAgIHJldHVybiAnc2FmYXJpJztcclxuICAgIH1cclxuICAgIGlmIChmYWxzZSB8fCAhIWRvY3VtZW50LmRvY3VtZW50TW9kZSkge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBvdXRwdXQgPSBhcmd1bWVudHNbMF07XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gYXJndW1lbnRzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9iaiA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dFtrZXldID0gb2JqW2tleV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICghKCdyZW1vdmUnIGluIEVsZW1lbnQucHJvdG90eXBlKSkge1xyXG4gICAgICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpc0lFID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gJ2llJztcclxuICAgIH1cclxuICAgIGlmICghaXNJRSAmJiAhIUNPTlRFWFQuU3R5bGVNZWRpYSkge1xyXG4gICAgICAgIHJldHVybiAnZWRnZSc7XHJcbiAgICB9XHJcbiAgICBpZiAoISFDT05URVhULmNocm9tZSAmJiAhIUNPTlRFWFQuY2hyb21lLndlYnN0b3JlKSB7XHJcbiAgICAgICAgaXNDaHJvbWUgPSB0cnVlXHJcbiAgICAgICAgcmV0dXJuICdjaHJvbWUnO1xyXG4gICAgfVxyXG4gICAgaWYgKChpc0Nocm9tZSB8fCBpc09wZXJhKSAmJiAhIUNPTlRFWFQuQ1NTKSB7XHJcbiAgICAgICAgcmV0dXJuICdibGluayc7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb21tb24ucmVhZFZhbHVlID0gZnVuY3Rpb24odmFsdWUsIG9wdGlvbnMgPSB7fSl7XHJcbiAgICBpZih0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIil7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlKG9wdGlvbnMpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuY29tbW9uLmdldFVybFZhciA9IGZ1bmN0aW9uIChrZXksIGRlZmF1bHRWYWx1ZSkge1xyXG4gICAgdmFyIHZhcnMgPSB7fTtcclxuICAgIHZhciBwYXJ0cyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoL1s/Jl0rKFtePSZdKyk9KFteJl0qKS9naSwgZnVuY3Rpb24gKG0sIGtleSwgdmFsdWUpIHtcclxuICAgICAgICB2YXJzW2tleV0gPSB2YWx1ZTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuICh2YXJzW2tleV0gPT09IHVuZGVmaW5lZD8gZGVmYXVsdFZhbHVlOiB2YXJzW2tleV0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tbW9uOyIsImNvbnN0IElTX1dPUktFUiA9IHNlbGYud2luZG93ID09PSB1bmRlZmluZWQ7XHJcbmNvbnN0IENPTlRFWFQgPSBJU19XT1JLRVIgPyBzZWxmIDogd2luZG93O1xyXG52YXIgcmFmID0ge1xyXG4gICAgcmVxdWVzdFRpbWVvdXQ6IGZ1bmN0aW9uIChmbiwgZGVsYXkpIHtcclxuICAgICAgICBpZiAoIUNPTlRFWFQucmVxdWVzdEFuaW1hdGlvbkZyYW1lKVxyXG4gICAgICAgICAgICByZXR1cm4gc2V0VGltZW91dChmbiwgZGVsYXkpO1xyXG5cclxuICAgICAgICB2YXIgc3RhcnQgPSBEYXRlLm5vdygpLFxyXG4gICAgICAgICAgICBoYW5kbGUgPSBuZXcgT2JqZWN0KCk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGxvb3AodGltZXN0YW1wKSB7XHJcbiAgICAgICAgICAgIChEYXRlLm5vdygpIC0gc3RhcnQpID49IGRlbGF5ID8gZm4odGltZXN0YW1wKSA6IGhhbmRsZS52YWx1ZSA9IENPTlRFWFQucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGhhbmRsZS52YWx1ZSA9IENPTlRFWFQucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xyXG4gICAgICAgIHJldHVybiBoYW5kbGU7XHJcbiAgICB9LFxyXG4gICAgY2xlYXJSZXF1ZXN0VGltZW91dDogZnVuY3Rpb24gKGhhbmRsZSkge1xyXG4gICAgICAgIENPTlRFWFQuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPyBDT05URVhULmNhbmNlbEFuaW1hdGlvbkZyYW1lKGhhbmRsZS52YWx1ZSk6Y2xlYXJUaW1lb3V0KGhhbmRsZSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByYWY7IiwiaW1wb3J0IGNvbW1vbiBmcm9tICcuLi9jb21tb24vY29tbW9uJ1xyXG52YXIgZG9tID0ge1xyXG4gICAgc2VsZWN0OiBmdW5jdGlvbihzZWxlY3Rvcil7XHJcbiAgICAgICAgaWYoc2VsZWN0b3I9PT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgX3NlbGVjdG9yID0gc2VsZWN0b3IuY2hhckF0KDApO1xyXG4gICAgICAgIGxldCBuYW1lID0gc2VsZWN0b3Iuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgIGxldCBkb21zID0gW107XHJcbiAgICAgICAgc3dpdGNoIChfc2VsZWN0b3Ipe1xyXG4gICAgICAgICAgICBjYXNlICcjJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChuYW1lKTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGRvbXMgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikgfHwgW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZG9tcztcclxuICAgIH0sXHJcbiAgICBjcmVhdGVFbGVtZW50OiBmdW5jdGlvbiAodGFnLCBpZCA9ICcnLCBvcHRpb25zID0ge30pIHtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuXHJcbiAgICAgICAgbGV0IGVsZW1lbnRJZCA9IGlkIHx8ICh0YWcgKyAnXycgKyBjb21tb24uY3JlYXRlSWQoKSk7XHJcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgZWxlbWVudElkKTtcclxuXHJcbiAgICAgICAgc2V0dXBFbGVtZW50TWV0aG9kcyhlbGVtZW50LCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9LFxyXG59O1xyXG5cclxuZnVuY3Rpb24gc2V0dXBFbGVtZW50TWV0aG9kcyhlbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICBlbGVtZW50Ll9ldmVudExpc3RlbmVycyA9IG5ldyBNYXAoKTtcclxuICAgIGVsZW1lbnQuX2JvdW5kID0gbmV3IE1hcCgpO1xyXG4gICAgZWxlbWVudC5fbWVtb3J5ID0ge307XHJcblxyXG4gICAgZWxlbWVudC5hZGQgPSBmdW5jdGlvbiAodGFnLCBpZCwgb3B0aW9ucykge1xyXG4gICAgICAgIGxldCBjaGlsZCA9IGRvbS5jcmVhdGVFbGVtZW50KHRhZywgaWQsIG9wdGlvbnMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFkZEVsZW1lbnQoY2hpbGQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBlbGVtZW50LmFkZEVsZW1lbnQgPSBmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICB0aGlzLmFwcGVuZENoaWxkKGNoaWxkKTtcclxuICAgICAgICByZXR1cm4gY2hpbGRcclxuICAgIH07XHJcblxyXG4gICAgZWxlbWVudC5hZGRDbGFzcyA9IGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcclxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcblxyXG4gICAgZWxlbWVudC5yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcclxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcblxyXG4gICAgZWxlbWVudC5nZXRBdHRyID0gZnVuY3Rpb24oa2V5KXtcclxuICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KTtcclxuICAgIH07XHJcblxyXG4gICAgZWxlbWVudC5hdHRyID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9zZXRFbGVtZW50KCdhdHRyJywga2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG5cclxuICAgIGVsZW1lbnQuZ2V0TWVtb3J5ID0gZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWVtb3J5O1xyXG4gICAgfTtcclxuXHJcbiAgICBlbGVtZW50Lm1lbW9yeSA9IGZ1bmN0aW9uKG9iail7XHJcbiAgICAgICAgdGhpcy5fbWVtb3J5ID0gb2JqO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuXHJcbiAgICBlbGVtZW50LmdldFByb3AgPSBmdW5jdGlvbihrZXkpe1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50W2tleV07XHJcbiAgICB9O1xyXG5cclxuICAgIGVsZW1lbnQucHJvcCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0RWxlbWVudCgncHJvcCcsIGtleSwgdmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuXHJcbiAgICBlbGVtZW50LmNzcyA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xyXG4gICAgICAgIHRoaXMuX3NldEVsZW1lbnQoJ2NzcycsIGtleSwgdmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuXHJcbiAgICBlbGVtZW50LmJpbmQgPSBmdW5jdGlvbihrZXksIGZuKXtcclxuICAgICAgICBpZihrZXkpIHtcclxuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICB0aGlzLl9ib3VuZC5zZXQoa2V5LCBmbik7XHJcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnc3RvcmFnZV8nICsga2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgZWxlbWVudC51bmJpbmQgPSBmdW5jdGlvbihrZXkpe1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLl9ib3VuZC5kZWxldGUoa2V5KTtcclxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ3N0b3JhZ2VfJyArIGtleSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG5cclxuICAgIGVsZW1lbnQuX3JlYWN0ID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XHJcbiAgICAgICAgbGV0IGZuID0gdGhpcy5fYm91bmQuZ2V0KGtleSk7XHJcbiAgICAgICAgaWYoZm4pe1xyXG4gICAgICAgICAgICBpZihmbi5jYWxsKHRoaXMsIHZhbHVlLCB0aGlzLl9kYXRhKSA9PT0gZmFsc2Upe1xyXG4gICAgICAgICAgICAgICAgdGhpcy51bmJpbmQoa2V5KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBlbGVtZW50Lm9uICA9IGZ1bmN0aW9uKGV2ZW50TmFtZSwgZm4sIHRhZyA9ICcnKXtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGV2ZW50VGFnID0gZXZlbnROYW1lICsgdGFnO1xyXG4gICAgICAgIGxldCBldmVudEhhbmRsZXIgPSBlbGVtZW50Ll9ldmVudExpc3RlbmVycy5nZXQoZXZlbnRUYWcpO1xyXG4gICAgICAgIGlmKGV2ZW50SGFuZGxlcil7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50SGFuZGxlcik7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuX2V2ZW50TGlzdGVuZXJzLmRlbGV0ZShldmVudFRhZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGZuKSB7XHJcbiAgICAgICAgICAgIGV2ZW50SGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBpZihmbi5jYWxsKHNlbGYsIGUsIHNlbGYuX2RhdGEpID09PSBmYWxzZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRIYW5kbGVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZWxlbWVudC5fZXZlbnRMaXN0ZW5lcnMuc2V0KGV2ZW50VGFnLCBldmVudEhhbmRsZXIpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudEhhbmRsZXIsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNlbGY7XHJcbiAgICB9O1xyXG5cclxuICAgIGVsZW1lbnQuY29udGVudCA9IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgICAgICB0aGlzLmlubmVyVGV4dCA9IHN0cjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcblxyXG4gICAgZWxlbWVudC5yZW1vdmVTZWxmID0gZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgaWYodGhpcy5yZW1vdmUpe1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZSgpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGVsZW1lbnQucmVtb3ZlQWxsQ2hpbGRyZW4gPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHdoaWxlICh0aGlzLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZCh0aGlzLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZWxlbWVudC5fc2V0RWxlbWVudCA9IGZ1bmN0aW9uKHR5cGUsIGtleSAsIHZhbHVlKXtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGtleSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgY29tbW9uLm9iamVjdGZvckVhY2goa2V5ICxmdW5jdGlvbiAoaXRlbSwga2V5KSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmW3R5cGVdKGtleSwgaXRlbSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHYgPSBjb21tb24ucmVhZFZhbHVlKHZhbHVlKTtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Byb3AnOlxyXG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2F0dHInOlxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKGtleSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdjc3MnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHlsZVtrZXldID0gIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGVsZW1lbnQuaXNJblZpZXdwb3J0ID0gZnVuY3Rpb24gKG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIGxldCBvZmZzZXRYID0gb3B0aW9ucy5vZmZzZXRYIHx8IDA7XHJcbiAgICAgICAgbGV0IG9mZnNldFkgPSBvcHRpb25zLm9mZnNldFkgfHwgMDtcclxuICAgICAgICBsZXQge3gsIHksIHdpZHRoLCBoZWlnaHR9ID0gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTsgLy9JRSBub3Qgc3VwcG9ydCBib3R0b20gcmlnaHRcclxuICAgICAgICBsZXQgeDIgPSB4ICsgd2lkdGg7XHJcbiAgICAgICAgbGV0IHkyID0geSArIGhlaWdodDtcclxuICAgICAgICBsZXQgaW5uZXJXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIGxldCBpbm5lckhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgICByZXR1cm4gISh4MiA8PSAoMCArIG9mZnNldFgpfHwgeCA+PSAoaW5uZXJXaWR0aCAtIG9mZnNldFgpIHx8IHkyIDw9ICgwICsgb2Zmc2V0WSkgfHwgeSA+PSAoaW5uZXJIZWlnaHQgLSBvZmZzZXRZKSlcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRvbTsiLCJpbXBvcnQgY29tbW9uIGZyb20gJy4uL2NvbW1vbi9jb21tb24nO1xyXG5cclxudmFyIHN0b3JhZ2UgPSB7XHJcbiAgICBkYXRhTWFwOiBuZXcgTWFwKCksXHJcbiAgICB0aW1lck1hcDogIG5ldyBNYXAoKSxcclxuICAgIHNldFZhbHVlOiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgb3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCBkYXRhTWFwID0gdGhpcy5kYXRhTWFwO1xyXG4gICAgICAgIGxldCB7cmVzZXR9ID0gb3B0aW9ucztcclxuICAgICAgICBsZXQgc2hvdWxkUmVhY3QgPSBmYWxzZTtcclxuICAgICAgICBsZXQgb2xkVmFsdWUgPSBkYXRhTWFwLmdldChrZXkpO1xyXG4gICAgICAgIGlmKGNvbW1vbi5pc09iamVjdCh2YWx1ZSkgJiYgY29tbW9uLmlzT2JqZWN0KG9sZFZhbHVlKSAmJiByZXNldCAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjb21tb24ub2JqZWN0Zm9yRWFjaCh2YWx1ZSwgZnVuY3Rpb24gKGl0ZW0sIGtleSwgb2JqKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzaG91bGRSZWFjdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvYmpba2V5XSA9IHZhbHVlW2tleV1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBzaG91bGRSZWFjdCA9IHRydWU7XHJcbiAgICAgICAgICAgIGRhdGFNYXAuc2V0KGtleSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gZGF0YU1hcC5nZXQoa2V5KTtcclxuXHJcbiAgICAgICAgaWYoc2hvdWxkUmVhY3QpIHtcclxuICAgICAgICAgICB0aGlzLmJyb2FkY2FzdChrZXksIG5ld1ZhbHVlLCBvcHRpb25zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdWYWx1ZTtcclxuICAgIH0sXHJcbiAgICBicm9hZGNhc3Q6IGZ1bmN0aW9uKGtleSwgbmV3VmFsdWUsIG9wdGlvbnMgPSB7fSl7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCB0aW1lciA9IHRoaXMudGltZXJNYXAuZ2V0KGtleSk7XHJcblxyXG4gICAgICAgIGlmICh0aW1lcikge1xyXG4gICAgICAgICAgICBjYy5jYW5jZWxUaW1lcih0aW1lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aW1lciA9IGNjLnNldFRpbWVyKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IGRvbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzdG9yYWdlXycgKyBrZXkpIHx8IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRvbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBkb20gPSBkb21zW2ldO1xyXG4gICAgICAgICAgICAgICAgZG9tLl9yZWFjdCAmJiBkb20uX3JlYWN0KGtleSwgbmV3VmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlbGYudGltZXJNYXAuZGVsZXRlKGtleSk7XHJcbiAgICAgICAgfSwgb3B0aW9ucy5pbW1lZGlhdGVseT8gMDogMTApO1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVyTWFwLnNldChrZXksIHRpbWVyKTtcclxuICAgIH0sXHJcbiAgICBnZXRWYWx1ZTogZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFNYXAuZ2V0KGtleSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yYWdlOyIsImNvbnN0IHhociA9IHtcclxuICAgIGFqYXg6IGZ1bmN0aW9uIChwYXJhbXMgPSB7fSkge1xyXG4gICAgICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBsZXQge3VybCwgbWV0aG9kLCBkYXRhLCBhc3luYywgeGhyLCBjb250ZW50VHlwZSwgZGF0YVR5cGUsIGRvbmUsIGZhaWx9ID0gcGFyYW1zIHx8IHt9O1xyXG4gICAgICAgICAgICBsZXQge2hlYWRlciwgb25Qcm9ncmVzcywgYmVmb3JlU2VuZH0gPSBwYXJhbXM7XHJcbiAgICAgICAgICAgIGxldCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIHJlcXVlc3Qub3BlbigobWV0aG9kIHx8ICdHRVQnKSwgdXJsLCBhc3luYyA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGFzeW5jKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiAoaGVhZGVyIHx8IHt9KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKChoZWFkZXIgfHwge30pLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCBoZWFkZXJba2V5XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoY2MuZ2V0VmFsdWUoJ0F1dGhvcml6YXRpb24nKSl7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCBjYy5nZXRWYWx1ZSgnQXV0aG9yaXphdGlvbicpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA+PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgPCA0MDApIHtcclxuICAgICAgICAgICAgICAgICAgICBkb25lICYmIGRvbmUocGFyc2VEYXRhKHJlcXVlc3QucmVzcG9uc2VUZXh0KSwgcmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShwYXJzZURhdGEocmVxdWVzdC5yZXNwb25zZVRleHQpLCByZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFpbCAmJiBmYWlsKHBhcnNlRGF0YShyZXF1ZXN0LnJlc3BvbnNlVGV4dCksIHJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChwYXJzZURhdGEocmVxdWVzdC5yZXNwb25zZVRleHQpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGZhaWwgJiYgZmFpbChwYXJzZURhdGEocmVxdWVzdC5yZXNwb25zZVRleHQpLCByZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgIHJlamVjdChwYXJzZURhdGEocmVxdWVzdC5yZXNwb25zZVRleHQpKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3QudXBsb2FkLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHAgPSBNYXRoLmZsb29yKGUubG9hZGVkIC8gZS50b3RhbCAqIDEwMCk7XHJcbiAgICAgICAgICAgICAgICBvblByb2dyZXNzICYmIG9uUHJvZ3Jlc3MocCwgZSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBsZXQgX2RhdGE7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZGF0YVR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2ZpbGUnOlxyXG4gICAgICAgICAgICAgICAgICAgIF9kYXRhID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2pzb24nOlxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsIGNvbnRlbnRUeXBlID09PSB1bmRlZmluZWQgPyBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIiA6IGNvbnRlbnRUeXBlKTtcclxuICAgICAgICAgICAgICAgICAgICBfZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBiZWZvcmVTZW5kICYmIGJlZm9yZVNlbmQocmVxdWVzdCk7XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0LnNlbmQoX2RhdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgIH0sXHJcbn07XHJcblxyXG5mdW5jdGlvbiBwYXJzZURhdGEoZGF0YSkge1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGRhdGEgfHwgJycpXHJcbiAgICB9Y2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHhocjtcclxuIiwiaW1wb3J0IGNjIGZyb20gJ25wbS1jY2pzLWF5JztcclxuZnVuY3Rpb24gaW5kZXgoKSB7XHJcbiAgICBpbmRleC5lbnYoKTtcclxuICAgIGluZGV4LnJvb3QoKTtcclxuICAgIGluZGV4LmhlYWRlcigpO1xyXG4gICAgaW5kZXguY29udGVudCgpO1xyXG4gICAgaW5kZXguZm9vdGVyKCk7XHJcbiAgICAvL2luZGV4LmlGcmFtZSgpO1xyXG59XHJcblxyXG5cclxuaW5kZXguZW52ID0gZnVuY3Rpb24gKCl7XHJcbiAgICBjYy5zZXRWYWx1ZSgndmlld3BvcnQnLCB7d2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLCBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodH0pO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjYy51cGRhdGVWYWx1ZSgndmlld3BvcnQnLCB7d2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLCBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodH0pO1xyXG4gICAgfSk7XHJcblxyXG59O1xyXG5cclxuaW5kZXgucm9vdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCByb290ID0gY2Muc2VsZWN0KCcjYm9keScpO1xyXG4gICAgbGV0IG1haW5Db250YWluZXIgPSBjYy5jcmVhdGVFbGVtZW50KCdkaXYnLCAnbWFpbicpXHJcbiAgICAgICAgLmFkZENsYXNzKCdtYWluLWNvbnRhaW5lcicpO1xyXG4gICAgcm9vdC5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcclxufTtcclxuXHJcbmluZGV4LmhlYWRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBoZWFkZXIgPSBjYy5zZWxlY3QoJyNtYWluJykuYWRkKCdkaXYnLCAnaGVhZGVyJyk7XHJcbiAgICBsZXQgbG9nbyA9IGhlYWRlci5hZGQoJ2RpdicsICdoZWFkZXItbG9nbycpLmFkZENsYXNzKCdoZWFkZXItbG9nbycpLmNvbnRlbnQoYEdhbGxlcnlgKTtcclxufTtcclxuXHJcbmluZGV4LmNvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgY29udGVudCA9IGNjLnNlbGVjdCgnI21haW4nKS5hZGQoJ2RpdicsICdjb250ZW50Jyk7XHJcbiAgICBmb3IobGV0IGk9MDtpPDEwO2krKykge1xyXG4gICAgICAgIGNvbnRlbnQuYWRkRWxlbWVudChpbmRleC5jYXJkKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdUZXN0JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdBIFNhbXBsZSBkZXNjcmlwdGlvbi4nLFxyXG4gICAgICAgICAgICB1cmw6ICdodHRwczovL2FueGlueWFuZy5naXRodWIuaW8vY2NKUydcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5pbmRleC5mb290ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgZm9vdGVyID0gY2Muc2VsZWN0KCcjbWFpbicpLmFkZCgnZGl2JywgJ2Zvb3RlcicpO1xyXG59O1xyXG5cclxuaW5kZXguY2FyZCA9IGZ1bmN0aW9uKHBhcmFtcyA9IHt9KXtcclxuICAgIGxldCB7dGl0bGUsIGRlc2NyaXB0aW9uLCB1cmx9ID0gcGFyYW1zO1xyXG4gICAgbGV0IGNvbnRhaW5lciA9IGNjLmNyZWF0ZUVsZW1lbnQoJ2RpdicpLmFkZENsYXNzKCdjYXJkJylcclxuICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB3aW5kb3cub3Blbih1cmwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgY29udGFpbmVyLmFkZCgnZGl2JykuYWRkQ2xhc3MoJ2NhcmQtaW1nJyk7XHJcblxyXG4gICAgbGV0IGNvbnRlbnQgPSBjb250YWluZXIuYWRkKCdkaXYnKS5hZGRDbGFzcygnY2FyZC1jb250ZW50Jyk7XHJcbiAgICBjb250ZW50LmFkZCgnc3Ryb25nJykuY29udGVudCh0aXRsZSk7XHJcbiAgICBjb250ZW50LmFkZCgncCcpLmNvbnRlbnQoZGVzY3JpcHRpb24pO1xyXG5cclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbn07XHJcblxyXG5pbmRleC5pRnJhbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgcm9vdCA9IGNjLnNlbGVjdCgnI2JvZHknKTtcclxuICAgIGxldCBtYWluQ29udGFpbmVyID0gY2MuY3JlYXRlRWxlbWVudCgnZGl2JywgJ2lGcmFtZScpXHJcbiAgICAgICAgLmFkZENsYXNzKCdpRnJhbWUnKTtcclxuICAgIHJvb3QuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcik7XHJcbn07XHJcblxyXG5pbmRleCgpOyJdLCJzb3VyY2VSb290IjoiIn0=