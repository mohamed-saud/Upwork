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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./vendor */ "./resources/js/vendor.js");

(function () {
  // Navbar Menu
  var storeNavbarName; // Open Menu 

  document.querySelector('.navbar_toggle').addEventListener('click', function (e) {
    storeNavbarName = this.getAttribute('data-target');
    document.querySelector("".concat(storeNavbarName)).classList.add('open');
  }); // Close Menu

  document.querySelector('.menu', '.close-menu').addEventListener('click', function (e) {
    var getElement = Array.from(e.toElement.classList);

    if (getElement.includes('menu') || getElement.includes('close-menu')) {
      document.querySelector("".concat(storeNavbarName)).classList.remove('open');
    }
  }); // Navbar Scroll

  var scrollPos = 0;
  window.addEventListener('scroll', function (e) {
    var currentScrollPos = this.pageYOffset;

    if (currentScrollPos > 60) {
      if (currentScrollPos > scrollPos) {
        document.querySelector('.navbar').classList.add('scrolling');
      } else {
        document.querySelector('.navbar').classList.remove('scrolling', 'relative');
        document.querySelector('.navbar').classList.add('fixed', 'pin-x', 'pin-t');
      }

      scrollPos = currentScrollPos;
    }
  }); // Loading

  window.onload = setTimeout(function () {
    document.querySelector('.loading').classList.remove('show');
  }, 1000); // File Upload

  try {
    document.querySelector('.upload_file').addEventListener('change', function (e) {
      var fileName = this.files[0].name;
      document.querySelector('.upload_file_name').innerHTML = "( ".concat(fileName, " )");
    });
  } catch (_unused) {} // Photo Upload


  try {
    document.querySelector('.upload_image').addEventListener('change', function () {
      var fileName = this.files[0];
      var uploadImageUrl = document.querySelector('.upload_image_url');
      var reader = new FileReader();

      reader.onload = function (src) {
        uploadImageUrl.src = src.target.result;
      };

      reader.readAsDataURL(fileName);
    });
  } catch (_unused2) {} // Profile Tabs


  document.querySelectorAll('.profile_links a').forEach(function (element) {
    element.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelectorAll('.profile_links a').forEach(function (link) {
        link.classList.remove('bg-blue-light');
      });
      element.classList.add('bg-blue-light');
      var currentLink = this.getAttribute('href');
      document.querySelectorAll('.profile_tab').forEach(function (tab) {
        tab.classList.add('hidden');
      });
      document.querySelector(currentLink).classList.remove('hidden');
    });
  }); // Profile Breadcrumb 

  try {
    document.querySelector('.button_profile_menu').addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('.toggle_profile_menu').classList.toggle('open');
    });
  } catch (_unused3) {} // Tags


  try {
    new Tags({
      wrapper: '.required_skills'
    });
  } catch (_unused4) {} // Dropdown


  document.querySelectorAll('.dropdown_button').forEach(function (button) {
    button.addEventListener('click', function () {
      var getEl = this.getAttribute('data-toggle');
      document.querySelector(getEl).classList.toggle('show');
    });
  });
})();

/***/ }),

/***/ "./resources/js/tages.js":
/*!*******************************!*\
  !*** ./resources/js/tages.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  function Tags(options) {
    this.arr = [];
    this.options = Object.assign(Tags.defaults, options);
    this.wrapper = document.querySelector(options.wrapper);
    addEvents(this);
  } // add Events


  function addEvents(tags) {
    var inputController = tags.wrapper.children[1];
    tags.wrapper.addEventListener('click', function () {
      inputController.focus();
    });
    inputController.addEventListener('keydown', function (e) {
      var str = inputController.value.trim();

      if (e.keyCode == 16) {
        inputController.value = "";

        if (str != "") {
          tags.addTag(str);
          tags.wrapper.children[2].value = tags.arr.join(',');
        }
      }
    });
  } // Defaults Tags Property


  Tags.defaults = {
    wrapper: '',
    max: null,
    duplicate: false // Add Tag

  };

  Tags.prototype.addTag = function (string) {
    var self = this; // If any errors then return without doing anything

    if (this.anyErrors(string)) return; // Push the string in the array

    this.arr.push(string); // Add tag

    var containerTag = this.wrapper.children[0];
    containerTag.insertAdjacentHTML('beforeend', "\n            <span class=\"tag bg-blue inline-block p-2 rounded mb-1 text-xs sm:text-base text-white cursor-pointer\">".concat(string, "</span>")); // Delete tag

    document.querySelectorAll('.tag').forEach(function (element) {
      element.addEventListener('click', function () {
        var state = false;

        for (var i = 0; i < self.arr.length; i++) {
          if (!state) {
            if (self.arr[i] == element.innerHTML) {
              state = true;
              self.arr.splice(i, 1);
              element.remove();
              self.wrapper.children[2].value = self.arr.join(',');
            }
          }
        }
      });
    });
  };

  Tags.prototype.anyErrors = function (string) {
    // Prevent User from duplicate tags
    if (this.arr.indexOf(string) != -1 && !this.options.duplicate) {
      console.log('duplicate found " ' + string + ' " ');
      return true;
    }
  };

  window.Tags = Tags;
})();

/***/ }),

/***/ "./resources/js/vendor.js":
/*!********************************!*\
  !*** ./resources/js/vendor.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

try {
  // window.$ = window.jQuery = require('jquery');
  __webpack_require__(/*! ./tages.js */ "./resources/js/tages.js"); // require('slick-carousel');
  // require('rateyo');

} catch (e) {}

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /media/mohamed/work/project/UpWork-master/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /media/mohamed/work/project/UpWork-master/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });