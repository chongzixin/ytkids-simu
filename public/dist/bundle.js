/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/typed.js/lib/typed.js":
/*!********************************************!*\
  !*** ./node_modules/typed.js/lib/typed.js ***!
  \********************************************/
/***/ (function(module) {

/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.12
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_737__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_737__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_737__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_737__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_737__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_737__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __nested_webpack_require_2018__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _initializerJs = __nested_webpack_require_2018__(1);
	
	var _htmlParserJs = __nested_webpack_require_2018__(3);
	
	/**
	 * Welcome to Typed.js!
	 * @param {string} elementId HTML element ID _OR_ HTML element
	 * @param {object} options options object
	 * @returns {object} a new Typed object
	 */
	
	var Typed = (function () {
	  function Typed(elementId, options) {
	    _classCallCheck(this, Typed);
	
	    // Initialize it up
	    _initializerJs.initializer.load(this, options, elementId);
	    // All systems go!
	    this.begin();
	  }
	
	  /**
	   * Toggle start() and stop() of the Typed instance
	   * @public
	   */
	
	  _createClass(Typed, [{
	    key: 'toggle',
	    value: function toggle() {
	      this.pause.status ? this.start() : this.stop();
	    }
	
	    /**
	     * Stop typing / backspacing and enable cursor blinking
	     * @public
	     */
	  }, {
	    key: 'stop',
	    value: function stop() {
	      if (this.typingComplete) return;
	      if (this.pause.status) return;
	      this.toggleBlinking(true);
	      this.pause.status = true;
	      this.options.onStop(this.arrayPos, this);
	    }
	
	    /**
	     * Start typing / backspacing after being stopped
	     * @public
	     */
	  }, {
	    key: 'start',
	    value: function start() {
	      if (this.typingComplete) return;
	      if (!this.pause.status) return;
	      this.pause.status = false;
	      if (this.pause.typewrite) {
	        this.typewrite(this.pause.curString, this.pause.curStrPos);
	      } else {
	        this.backspace(this.pause.curString, this.pause.curStrPos);
	      }
	      this.options.onStart(this.arrayPos, this);
	    }
	
	    /**
	     * Destroy this instance of Typed
	     * @public
	     */
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.reset(false);
	      this.options.onDestroy(this);
	    }
	
	    /**
	     * Reset Typed and optionally restarts
	     * @param {boolean} restart
	     * @public
	     */
	  }, {
	    key: 'reset',
	    value: function reset() {
	      var restart = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
	
	      clearInterval(this.timeout);
	      this.replaceText('');
	      if (this.cursor && this.cursor.parentNode) {
	        this.cursor.parentNode.removeChild(this.cursor);
	        this.cursor = null;
	      }
	      this.strPos = 0;
	      this.arrayPos = 0;
	      this.curLoop = 0;
	      if (restart) {
	        this.insertCursor();
	        this.options.onReset(this);
	        this.begin();
	      }
	    }
	
	    /**
	     * Begins the typing animation
	     * @private
	     */
	  }, {
	    key: 'begin',
	    value: function begin() {
	      var _this = this;
	
	      this.options.onBegin(this);
	      this.typingComplete = false;
	      this.shuffleStringsIfNeeded(this);
	      this.insertCursor();
	      if (this.bindInputFocusEvents) this.bindFocusEvents();
	      this.timeout = setTimeout(function () {
	        // Check if there is some text in the element, if yes start by backspacing the default message
	        if (!_this.currentElContent || _this.currentElContent.length === 0) {
	          _this.typewrite(_this.strings[_this.sequence[_this.arrayPos]], _this.strPos);
	        } else {
	          // Start typing
	          _this.backspace(_this.currentElContent, _this.currentElContent.length);
	        }
	      }, this.startDelay);
	    }
	
	    /**
	     * Called for each character typed
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'typewrite',
	    value: function typewrite(curString, curStrPos) {
	      var _this2 = this;
	
	      if (this.fadeOut && this.el.classList.contains(this.fadeOutClass)) {
	        this.el.classList.remove(this.fadeOutClass);
	        if (this.cursor) this.cursor.classList.remove(this.fadeOutClass);
	      }
	
	      var humanize = this.humanizer(this.typeSpeed);
	      var numChars = 1;
	
	      if (this.pause.status === true) {
	        this.setPauseStatus(curString, curStrPos, true);
	        return;
	      }
	
	      // contain typing function in a timeout humanize'd delay
	      this.timeout = setTimeout(function () {
	        // skip over any HTML chars
	        curStrPos = _htmlParserJs.htmlParser.typeHtmlChars(curString, curStrPos, _this2);
	
	        var pauseTime = 0;
	        var substr = curString.substr(curStrPos);
	        // check for an escape character before a pause value
	        // format: \^\d+ .. eg: ^1000 .. should be able to print the ^ too using ^^
	        // single ^ are removed from string
	        if (substr.charAt(0) === '^') {
	          if (/^\^\d+/.test(substr)) {
	            var skip = 1; // skip at least 1
	            substr = /\d+/.exec(substr)[0];
	            skip += substr.length;
	            pauseTime = parseInt(substr);
	            _this2.temporaryPause = true;
	            _this2.options.onTypingPaused(_this2.arrayPos, _this2);
	            // strip out the escape character and pause value so they're not printed
	            curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
	            _this2.toggleBlinking(true);
	          }
	        }
	
	        // check for skip characters formatted as
	        // "this is a `string to print NOW` ..."
	        if (substr.charAt(0) === '`') {
	          while (curString.substr(curStrPos + numChars).charAt(0) !== '`') {
	            numChars++;
	            if (curStrPos + numChars > curString.length) break;
	          }
	          // strip out the escape characters and append all the string in between
	          var stringBeforeSkip = curString.substring(0, curStrPos);
	          var stringSkipped = curString.substring(stringBeforeSkip.length + 1, curStrPos + numChars);
	          var stringAfterSkip = curString.substring(curStrPos + numChars + 1);
	          curString = stringBeforeSkip + stringSkipped + stringAfterSkip;
	          numChars--;
	        }
	
	        // timeout for any pause after a character
	        _this2.timeout = setTimeout(function () {
	          // Accounts for blinking while paused
	          _this2.toggleBlinking(false);
	
	          // We're done with this sentence!
	          if (curStrPos >= curString.length) {
	            _this2.doneTyping(curString, curStrPos);
	          } else {
	            _this2.keepTyping(curString, curStrPos, numChars);
	          }
	          // end of character pause
	          if (_this2.temporaryPause) {
	            _this2.temporaryPause = false;
	            _this2.options.onTypingResumed(_this2.arrayPos, _this2);
	          }
	        }, pauseTime);
	
	        // humanized value for typing
	      }, humanize);
	    }
	
	    /**
	     * Continue to the next string & begin typing
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'keepTyping',
	    value: function keepTyping(curString, curStrPos, numChars) {
	      // call before functions if applicable
	      if (curStrPos === 0) {
	        this.toggleBlinking(false);
	        this.options.preStringTyped(this.arrayPos, this);
	      }
	      // start typing each new char into existing string
	      // curString: arg, this.el.html: original text inside element
	      curStrPos += numChars;
	      var nextString = curString.substr(0, curStrPos);
	      this.replaceText(nextString);
	      // loop the function
	      this.typewrite(curString, curStrPos);
	    }
	
	    /**
	     * We're done typing the current string
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'doneTyping',
	    value: function doneTyping(curString, curStrPos) {
	      var _this3 = this;
	
	      // fires callback function
	      this.options.onStringTyped(this.arrayPos, this);
	      this.toggleBlinking(true);
	      // is this the final string
	      if (this.arrayPos === this.strings.length - 1) {
	        // callback that occurs on the last typed string
	        this.complete();
	        // quit if we wont loop back
	        if (this.loop === false || this.curLoop === this.loopCount) {
	          return;
	        }
	      }
	      this.timeout = setTimeout(function () {
	        _this3.backspace(curString, curStrPos);
	      }, this.backDelay);
	    }
	
	    /**
	     * Backspaces 1 character at a time
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @private
	     */
	  }, {
	    key: 'backspace',
	    value: function backspace(curString, curStrPos) {
	      var _this4 = this;
	
	      if (this.pause.status === true) {
	        this.setPauseStatus(curString, curStrPos, false);
	        return;
	      }
	      if (this.fadeOut) return this.initFadeOut();
	
	      this.toggleBlinking(false);
	      var humanize = this.humanizer(this.backSpeed);
	
	      this.timeout = setTimeout(function () {
	        curStrPos = _htmlParserJs.htmlParser.backSpaceHtmlChars(curString, curStrPos, _this4);
	        // replace text with base text + typed characters
	        var curStringAtPosition = curString.substr(0, curStrPos);
	        _this4.replaceText(curStringAtPosition);
	
	        // if smartBack is enabled
	        if (_this4.smartBackspace) {
	          // the remaining part of the current string is equal of the same part of the new string
	          var nextString = _this4.strings[_this4.arrayPos + 1];
	          if (nextString && curStringAtPosition === nextString.substr(0, curStrPos)) {
	            _this4.stopNum = curStrPos;
	          } else {
	            _this4.stopNum = 0;
	          }
	        }
	
	        // if the number (id of character in current string) is
	        // less than the stop number, keep going
	        if (curStrPos > _this4.stopNum) {
	          // subtract characters one by one
	          curStrPos--;
	          // loop the function
	          _this4.backspace(curString, curStrPos);
	        } else if (curStrPos <= _this4.stopNum) {
	          // if the stop number has been reached, increase
	          // array position to next string
	          _this4.arrayPos++;
	          // When looping, begin at the beginning after backspace complete
	          if (_this4.arrayPos === _this4.strings.length) {
	            _this4.arrayPos = 0;
	            _this4.options.onLastStringBackspaced();
	            _this4.shuffleStringsIfNeeded();
	            _this4.begin();
	          } else {
	            _this4.typewrite(_this4.strings[_this4.sequence[_this4.arrayPos]], curStrPos);
	          }
	        }
	        // humanized value for typing
	      }, humanize);
	    }
	
	    /**
	     * Full animation is complete
	     * @private
	     */
	  }, {
	    key: 'complete',
	    value: function complete() {
	      this.options.onComplete(this);
	      if (this.loop) {
	        this.curLoop++;
	      } else {
	        this.typingComplete = true;
	      }
	    }
	
	    /**
	     * Has the typing been stopped
	     * @param {string} curString the current string in the strings array
	     * @param {number} curStrPos the current position in the curString
	     * @param {boolean} isTyping
	     * @private
	     */
	  }, {
	    key: 'setPauseStatus',
	    value: function setPauseStatus(curString, curStrPos, isTyping) {
	      this.pause.typewrite = isTyping;
	      this.pause.curString = curString;
	      this.pause.curStrPos = curStrPos;
	    }
	
	    /**
	     * Toggle the blinking cursor
	     * @param {boolean} isBlinking
	     * @private
	     */
	  }, {
	    key: 'toggleBlinking',
	    value: function toggleBlinking(isBlinking) {
	      if (!this.cursor) return;
	      // if in paused state, don't toggle blinking a 2nd time
	      if (this.pause.status) return;
	      if (this.cursorBlinking === isBlinking) return;
	      this.cursorBlinking = isBlinking;
	      if (isBlinking) {
	        this.cursor.classList.add('typed-cursor--blink');
	      } else {
	        this.cursor.classList.remove('typed-cursor--blink');
	      }
	    }
	
	    /**
	     * Speed in MS to type
	     * @param {number} speed
	     * @private
	     */
	  }, {
	    key: 'humanizer',
	    value: function humanizer(speed) {
	      return Math.round(Math.random() * speed / 2) + speed;
	    }
	
	    /**
	     * Shuffle the sequence of the strings array
	     * @private
	     */
	  }, {
	    key: 'shuffleStringsIfNeeded',
	    value: function shuffleStringsIfNeeded() {
	      if (!this.shuffle) return;
	      this.sequence = this.sequence.sort(function () {
	        return Math.random() - 0.5;
	      });
	    }
	
	    /**
	     * Adds a CSS class to fade out current string
	     * @private
	     */
	  }, {
	    key: 'initFadeOut',
	    value: function initFadeOut() {
	      var _this5 = this;
	
	      this.el.className += ' ' + this.fadeOutClass;
	      if (this.cursor) this.cursor.className += ' ' + this.fadeOutClass;
	      return setTimeout(function () {
	        _this5.arrayPos++;
	        _this5.replaceText('');
	
	        // Resets current string if end of loop reached
	        if (_this5.strings.length > _this5.arrayPos) {
	          _this5.typewrite(_this5.strings[_this5.sequence[_this5.arrayPos]], 0);
	        } else {
	          _this5.typewrite(_this5.strings[0], 0);
	          _this5.arrayPos = 0;
	        }
	      }, this.fadeOutDelay);
	    }
	
	    /**
	     * Replaces current text in the HTML element
	     * depending on element type
	     * @param {string} str
	     * @private
	     */
	  }, {
	    key: 'replaceText',
	    value: function replaceText(str) {
	      if (this.attr) {
	        this.el.setAttribute(this.attr, str);
	      } else {
	        if (this.isInput) {
	          this.el.value = str;
	        } else if (this.contentType === 'html') {
	          this.el.innerHTML = str;
	        } else {
	          this.el.textContent = str;
	        }
	      }
	    }
	
	    /**
	     * If using input elements, bind focus in order to
	     * start and stop the animation
	     * @private
	     */
	  }, {
	    key: 'bindFocusEvents',
	    value: function bindFocusEvents() {
	      var _this6 = this;
	
	      if (!this.isInput) return;
	      this.el.addEventListener('focus', function (e) {
	        _this6.stop();
	      });
	      this.el.addEventListener('blur', function (e) {
	        if (_this6.el.value && _this6.el.value.length !== 0) {
	          return;
	        }
	        _this6.start();
	      });
	    }
	
	    /**
	     * On init, insert the cursor element
	     * @private
	     */
	  }, {
	    key: 'insertCursor',
	    value: function insertCursor() {
	      if (!this.showCursor) return;
	      if (this.cursor) return;
	      this.cursor = document.createElement('span');
	      this.cursor.className = 'typed-cursor';
	      this.cursor.setAttribute('aria-hidden', true);
	      this.cursor.innerHTML = this.cursorChar;
	      this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling);
	    }
	  }]);
	
	  return Typed;
	})();
	
	exports['default'] = Typed;
	module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __nested_webpack_require_18228__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _defaultsJs = __nested_webpack_require_18228__(2);
	
	var _defaultsJs2 = _interopRequireDefault(_defaultsJs);
	
	/**
	 * Initialize the Typed object
	 */
	
	var Initializer = (function () {
	  function Initializer() {
	    _classCallCheck(this, Initializer);
	  }
	
	  _createClass(Initializer, [{
	    key: 'load',
	
	    /**
	     * Load up defaults & options on the Typed instance
	     * @param {Typed} self instance of Typed
	     * @param {object} options options object
	     * @param {string} elementId HTML element ID _OR_ instance of HTML element
	     * @private
	     */
	
	    value: function load(self, options, elementId) {
	      // chosen element to manipulate text
	      if (typeof elementId === 'string') {
	        self.el = document.querySelector(elementId);
	      } else {
	        self.el = elementId;
	      }
	
	      self.options = _extends({}, _defaultsJs2['default'], options);
	
	      // attribute to type into
	      self.isInput = self.el.tagName.toLowerCase() === 'input';
	      self.attr = self.options.attr;
	      self.bindInputFocusEvents = self.options.bindInputFocusEvents;
	
	      // show cursor
	      self.showCursor = self.isInput ? false : self.options.showCursor;
	
	      // custom cursor
	      self.cursorChar = self.options.cursorChar;
	
	      // Is the cursor blinking
	      self.cursorBlinking = true;
	
	      // text content of element
	      self.elContent = self.attr ? self.el.getAttribute(self.attr) : self.el.textContent;
	
	      // html or plain text
	      self.contentType = self.options.contentType;
	
	      // typing speed
	      self.typeSpeed = self.options.typeSpeed;
	
	      // add a delay before typing starts
	      self.startDelay = self.options.startDelay;
	
	      // backspacing speed
	      self.backSpeed = self.options.backSpeed;
	
	      // only backspace what doesn't match the previous string
	      self.smartBackspace = self.options.smartBackspace;
	
	      // amount of time to wait before backspacing
	      self.backDelay = self.options.backDelay;
	
	      // Fade out instead of backspace
	      self.fadeOut = self.options.fadeOut;
	      self.fadeOutClass = self.options.fadeOutClass;
	      self.fadeOutDelay = self.options.fadeOutDelay;
	
	      // variable to check whether typing is currently paused
	      self.isPaused = false;
	
	      // input strings of text
	      self.strings = self.options.strings.map(function (s) {
	        return s.trim();
	      });
	
	      // div containing strings
	      if (typeof self.options.stringsElement === 'string') {
	        self.stringsElement = document.querySelector(self.options.stringsElement);
	      } else {
	        self.stringsElement = self.options.stringsElement;
	      }
	
	      if (self.stringsElement) {
	        self.strings = [];
	        self.stringsElement.style.display = 'none';
	        var strings = Array.prototype.slice.apply(self.stringsElement.children);
	        var stringsLength = strings.length;
	
	        if (stringsLength) {
	          for (var i = 0; i < stringsLength; i += 1) {
	            var stringEl = strings[i];
	            self.strings.push(stringEl.innerHTML.trim());
	          }
	        }
	      }
	
	      // character number position of current string
	      self.strPos = 0;
	
	      // current array position
	      self.arrayPos = 0;
	
	      // index of string to stop backspacing on
	      self.stopNum = 0;
	
	      // Looping logic
	      self.loop = self.options.loop;
	      self.loopCount = self.options.loopCount;
	      self.curLoop = 0;
	
	      // shuffle the strings
	      self.shuffle = self.options.shuffle;
	      // the order of strings
	      self.sequence = [];
	
	      self.pause = {
	        status: false,
	        typewrite: true,
	        curString: '',
	        curStrPos: 0
	      };
	
	      // When the typing is complete (when not looped)
	      self.typingComplete = false;
	
	      // Set the order in which the strings are typed
	      for (var i in self.strings) {
	        self.sequence[i] = i;
	      }
	
	      // If there is some text in the element
	      self.currentElContent = this.getCurrentElContent(self);
	
	      self.autoInsertCss = self.options.autoInsertCss;
	
	      this.appendAnimationCss(self);
	    }
	  }, {
	    key: 'getCurrentElContent',
	    value: function getCurrentElContent(self) {
	      var elContent = '';
	      if (self.attr) {
	        elContent = self.el.getAttribute(self.attr);
	      } else if (self.isInput) {
	        elContent = self.el.value;
	      } else if (self.contentType === 'html') {
	        elContent = self.el.innerHTML;
	      } else {
	        elContent = self.el.textContent;
	      }
	      return elContent;
	    }
	  }, {
	    key: 'appendAnimationCss',
	    value: function appendAnimationCss(self) {
	      var cssDataName = 'data-typed-js-css';
	      if (!self.autoInsertCss) {
	        return;
	      }
	      if (!self.showCursor && !self.fadeOut) {
	        return;
	      }
	      if (document.querySelector('[' + cssDataName + ']')) {
	        return;
	      }
	
	      var css = document.createElement('style');
	      css.type = 'text/css';
	      css.setAttribute(cssDataName, true);
	
	      var innerCss = '';
	      if (self.showCursor) {
	        innerCss += '\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ';
	      }
	      if (self.fadeOut) {
	        innerCss += '\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ';
	      }
	      if (css.length === 0) {
	        return;
	      }
	      css.innerHTML = innerCss;
	      document.body.appendChild(css);
	    }
	  }]);
	
	  return Initializer;
	})();
	
	exports['default'] = Initializer;
	var initializer = new Initializer();
	exports.initializer = initializer;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	/**
	 * Defaults & options
	 * @returns {object} Typed defaults & options
	 * @public
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var defaults = {
	  /**
	   * @property {array} strings strings to be typed
	   * @property {string} stringsElement ID of element containing string children
	   */
	  strings: ['These are the default values...', 'You know what you should do?', 'Use your own!', 'Have a great day!'],
	  stringsElement: null,
	
	  /**
	   * @property {number} typeSpeed type speed in milliseconds
	   */
	  typeSpeed: 0,
	
	  /**
	   * @property {number} startDelay time before typing starts in milliseconds
	   */
	  startDelay: 0,
	
	  /**
	   * @property {number} backSpeed backspacing speed in milliseconds
	   */
	  backSpeed: 0,
	
	  /**
	   * @property {boolean} smartBackspace only backspace what doesn't match the previous string
	   */
	  smartBackspace: true,
	
	  /**
	   * @property {boolean} shuffle shuffle the strings
	   */
	  shuffle: false,
	
	  /**
	   * @property {number} backDelay time before backspacing in milliseconds
	   */
	  backDelay: 700,
	
	  /**
	   * @property {boolean} fadeOut Fade out instead of backspace
	   * @property {string} fadeOutClass css class for fade animation
	   * @property {boolean} fadeOutDelay Fade out delay in milliseconds
	   */
	  fadeOut: false,
	  fadeOutClass: 'typed-fade-out',
	  fadeOutDelay: 500,
	
	  /**
	   * @property {boolean} loop loop strings
	   * @property {number} loopCount amount of loops
	   */
	  loop: false,
	  loopCount: Infinity,
	
	  /**
	   * @property {boolean} showCursor show cursor
	   * @property {string} cursorChar character for cursor
	   * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
	   */
	  showCursor: true,
	  cursorChar: '|',
	  autoInsertCss: true,
	
	  /**
	   * @property {string} attr attribute for typing
	   * Ex: input placeholder, value, or just HTML text
	   */
	  attr: null,
	
	  /**
	   * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
	   */
	  bindInputFocusEvents: false,
	
	  /**
	   * @property {string} contentType 'html' or 'null' for plaintext
	   */
	  contentType: 'html',
	
	  /**
	   * Before it begins typing
	   * @param {Typed} self
	   */
	  onBegin: function onBegin(self) {},
	
	  /**
	   * All typing is complete
	   * @param {Typed} self
	   */
	  onComplete: function onComplete(self) {},
	
	  /**
	   * Before each string is typed
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  preStringTyped: function preStringTyped(arrayPos, self) {},
	
	  /**
	   * After each string is typed
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onStringTyped: function onStringTyped(arrayPos, self) {},
	
	  /**
	   * During looping, after last string is typed
	   * @param {Typed} self
	   */
	  onLastStringBackspaced: function onLastStringBackspaced(self) {},
	
	  /**
	   * Typing has been stopped
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onTypingPaused: function onTypingPaused(arrayPos, self) {},
	
	  /**
	   * Typing has been started after being stopped
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onTypingResumed: function onTypingResumed(arrayPos, self) {},
	
	  /**
	   * After reset
	   * @param {Typed} self
	   */
	  onReset: function onReset(self) {},
	
	  /**
	   * After stop
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onStop: function onStop(arrayPos, self) {},
	
	  /**
	   * After start
	   * @param {number} arrayPos
	   * @param {Typed} self
	   */
	  onStart: function onStart(arrayPos, self) {},
	
	  /**
	   * After destroy
	   * @param {Typed} self
	   */
	  onDestroy: function onDestroy(self) {}
	};
	
	exports['default'] = defaults;
	module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/**
	 * TODO: These methods can probably be combined somehow
	 * Parse HTML tags & HTML Characters
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var HTMLParser = (function () {
	  function HTMLParser() {
	    _classCallCheck(this, HTMLParser);
	  }
	
	  _createClass(HTMLParser, [{
	    key: 'typeHtmlChars',
	
	    /**
	     * Type HTML tags & HTML Characters
	     * @param {string} curString Current string
	     * @param {number} curStrPos Position in current string
	     * @param {Typed} self instance of Typed
	     * @returns {number} a new string position
	     * @private
	     */
	
	    value: function typeHtmlChars(curString, curStrPos, self) {
	      if (self.contentType !== 'html') return curStrPos;
	      var curChar = curString.substr(curStrPos).charAt(0);
	      if (curChar === '<' || curChar === '&') {
	        var endTag = '';
	        if (curChar === '<') {
	          endTag = '>';
	        } else {
	          endTag = ';';
	        }
	        while (curString.substr(curStrPos + 1).charAt(0) !== endTag) {
	          curStrPos++;
	          if (curStrPos + 1 > curString.length) {
	            break;
	          }
	        }
	        curStrPos++;
	      }
	      return curStrPos;
	    }
	
	    /**
	     * Backspace HTML tags and HTML Characters
	     * @param {string} curString Current string
	     * @param {number} curStrPos Position in current string
	     * @param {Typed} self instance of Typed
	     * @returns {number} a new string position
	     * @private
	     */
	  }, {
	    key: 'backSpaceHtmlChars',
	    value: function backSpaceHtmlChars(curString, curStrPos, self) {
	      if (self.contentType !== 'html') return curStrPos;
	      var curChar = curString.substr(curStrPos).charAt(0);
	      if (curChar === '>' || curChar === ';') {
	        var endTag = '';
	        if (curChar === '>') {
	          endTag = '<';
	        } else {
	          endTag = '&';
	        }
	        while (curString.substr(curStrPos - 1).charAt(0) !== endTag) {
	          curStrPos--;
	          if (curStrPos < 0) {
	            break;
	          }
	        }
	        curStrPos--;
	      }
	      return curStrPos;
	    }
	  }]);
	
	  return HTMLParser;
	})();
	
	exports['default'] = HTMLParser;
	var htmlParser = new HTMLParser();
	exports.htmlParser = htmlParser;

/***/ })
/******/ ])
});
;

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************!*\
  !*** ./app.ts ***!
  \****************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typed.js */ "./node_modules/typed.js/lib/typed.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_0__);

/* INIT */
// pre-load the list of available images in assets
const all_available_images = [
    // gecko garage
    'rick-the-roller.png',
    'caroline-the-crane.png',
    'max-the-monster-truck.png',
    'helen-the-helicopter.png',
    'bobby-the-bus.png',
    'sammy-the-schoolbus.png',
    'celia-the-cementmixer.png',
    'george-the-giantdumptruck.png',
    'dylan-the-dumptruck.png',
    'ryan-the-wreckingballcrane.png',
    'andy-the-animalambulance.png',
    'amber-the-ambulance.png',
    'vicky-the-icecreamvan.png',
    'chelsea-the-cherrypicker.png',
    'rebecca-the-recyclingtruck.png',
    'fiona-the-firetruck.png',
    'tony-the-taxi.png',
    'sophie-the-sportscar.png',
    'mally-the-motorcycle.png',
    'trevor-the-tractor.png',
    'evie-the-ev.png',
    'eric-the-excavator.jpeg',
    'danny-the-digger.png',
    'larry-the-lorry.png',
    'gecko-baby-truck.png',
    'gecko-video-1.png',
    'gecko-muddy-trucks.png',
    'oscar-the-oldbus.png',
    'tilly-the-towtruck.png',
    'bobby-stuck-in-snow.png',
    'mia-the-minidigger.png',
    'leo-the-limousine.png',
    'polly-the-littlebus.png',
    'five-green-buses.png',
    'maggie-the-minifiretruck.png',
    'celia-muddy-truck.png',
    'sophie-larry-muddy.png',
    'icecream-truck-smoothie.png',
    'maisie-the-mower.png',
    'babytruck-halloween.png',
    'bobby-samy-muddy.png',
    'gecko-garage-all.png',
    'florence-the-forklift.png',
    'mummy-bus.png',
    'bobby-bus-thermometer.png',
    'dot-the-babybus.png',
    'max-jump.png',
    'harry-the-babybus.png',
    'gecko-construction-vehicles.png',
    'bobby-bus-moody.png',
    'gecko-respray-machine.png',
    'max-different-colours.png',
    'gecko-mechanicals-sleeping.png',
    'max-halloween-monster.png',
    'five-baby-trucks.png',
    'celia-cement-vicky.png',
    'gecko-xmas-tree.png',
    'gecko-halloween-characters.png',
    'gecko-looking-atyou.png',
    'gecko-the-vampire.png',
    'christmas-toy-workshop.png',
    'helen-fetching-rick.png',
    'gecko-garage-rainbow.png',
    'gecko-with-drpoppy.png',
    'tilly-becomes-caroline.png',
    'gecko-with-mrweasel.png',
    'fiona-jumps-birthday.png',
    'babytruck-surprise-dinner.png',
    'mechanical-with-snowman.png',
    'gecko-mechanical-abc.png',
    'baby-truck-jump.png',
    'bobby-babytruck-colourful.png',
    'super-mechanical-adventure.png',
    'rick-ryan-zoo.png',
    // 'bounce-patrol-babyshark.png',
    // 'bouncepatrol-halloween-mummyshark.png',
    // 'bouncepatrol-christmas-mummyshark.png',
    // 'bouncepatrol-christmas-grandmashark.png',
    // 'bouncepatrol-halloweeen-oldmacs.png',
    // 'olaf.png',
    // // 'elsa.png',
    // 'bouncepatrol-learning-songs.png',
    // 'bouncepatrol-bunny-hop.png',
    // 'bouncepatrol-halloween-pumpkin.png',
    // 'bouncepatrol-fivelittle-pigs.png',
    // 'bouncepatrol-12345-songs.png',
    // 'bouncepatrol-old-macdonald.png',
    // 'little-babybum-sandcastle.png',
    // 'little-babybum-umbrella.png',
    // 'little-babybum-wheelsonbus.png',
    // 'little-babybum-toys.png',
    // 'bounce-patrol-danceparty.png',
    // 'bounce-patrol-logo.png',
    // 'bouncepatrol-pumpkin-mommy.png',
    // 'bouncepatrol-pink-ball.png',
    // 'bouncepatrol-fire-fighters.png',
    // 'bouncepatrol-skeleton-house.png',
    // 'bouncepatrol-pig-song.png',
    // 'bouncepatrol-fire-trucks.png',
    // 'chuchutv-surprise-eggs.png',
    // 'emergency-vehicles-firetruck.png',
    // 'emergency-vehicles-accident.png',
    // 'construction-vehicles-excavator.png',
    // 'construction-vehicles-crane.png',
    // 'construction-vehicles-legocrane.png',
    // 'construction-vehicles-wreckingballcrane.png',
    // 'construction-vehicles-cementmixer.png',
];
const NUM_IMAGES_TO_SHOW = 20;
// const NUM_IMAGES_TO_SHOW = all_available_images.length; // change num images accordingly, show all by default.
const NUM_ROWS = 2; // change number of rows accordingly
/* MAIN */
let quiz_img;
let game_ended;
let images_to_show = getRandomThumbnails(all_available_images, NUM_IMAGES_TO_SHOW);
let num_cols;
/* NAME PLACEHOLDERS */
const placeholder_names = [
    'Arthur', 'Charlotte', 'Audrey', 'Allysa',
    'Ocean', 'Anahi', 'Natalie', 'Isabel',
    'Gwendolyn', 'Manimoli', 'Josiah', 'Bethany',
    'Adam', 'Jayden', 'Nathan'
];
const name_placeholder = new (typed_js__WEBPACK_IMPORTED_MODULE_0___default())('#greeting-name', {
    strings: placeholder_names,
    typeSpeed: 50,
    backSpeed: 50,
    attr: 'placeholder',
    bindInputFocusEvents: true,
    loop: true,
    backDelay: 1000,
    shuffle: true
});
/* AUDIO */
const wrong_audio = new Audio('assets/audio/wrong.wav');
const correct_audio = new Audio('assets/audio/correct.wav');
const tada_audio = new Audio('assets/audio/tada.wav');
addEventListeners();
reloadGame(images_to_show);
/* FUNCTION DEFINITIONS */
// randomly retrieve desired number of thumbnails from list
function getRandomThumbnails(arr, num) {
    let result = new Array(num);
    let len = arr.length;
    let taken = new Array(len);
    if (num > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (num--) {
        const x = Math.floor(Math.random() * len);
        result[num] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    // if num is 1, return just the first element, else return an array
    return num === 1 ? result[0] : result;
}
function paintImagesInGrid(images) {
    num_cols = Math.ceil(images_to_show.length / NUM_ROWS);
    const instructions = document.getElementById("instructions");
    instructions.innerHTML = "Use the arrow keys (↑, ↓, ←, →) to find your favourite vehicle, press End to randomise image locations";
    // set number of rows and columns in CSS
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = ""; // clear the gallery before painting
    gallery.style.gridTemplateRows = `repeat(${NUM_ROWS}, 300px)`;
    gallery.style.gridTemplateColumns = `repeat(${num_cols}, 400px)`;
    images.forEach((filename, index) => {
        // produce the following: <div id="${index}" class="grid-item"><img src="assets/${filename}"></div>
        const gallery_item = document.createElement("div");
        gallery_item.id = (index + 1).toString(); // add 1 to the index to process our calculation
        gallery_item.className = "grid-item";
        const image = document.createElement("img");
        image.src = `assets/${filename}`;
        gallery_item.appendChild(image);
        gallery.appendChild(gallery_item);
        // if this is the first image, set it as active
        if (index === 0) {
            gallery_item.className += " active";
            gallery_item.scrollIntoView();
        }
    });
}
function paintQuiz(img) {
    const quiz = document.getElementById("quiz");
    quiz.style.display = "flex"; // show it again because it gets hidden when game ends
    const quiz_img = document.getElementById("quiz_img");
    quiz_img.src = `assets/${img}`;
}
function reloadGame(images) {
    game_ended = false;
    quiz_img = getRandomThumbnails(images_to_show, 1);
    paintImagesInGrid(images_to_show);
    paintQuiz(quiz_img);
}
function endGame() {
    game_ended = true;
    tada_audio.play();
    const instructions = document.getElementById("instructions");
    instructions.innerHTML = "You win! Press any key to restart.";
    // hide the gallery
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";
    // hide the quiz section
    const quiz = document.getElementById("quiz");
    quiz.style.display = "none";
}
function addEventListeners() {
    window.onkeydown = (ev) => {
        if (ev.defaultPrevented)
            return;
        processKey(ev.key);
        function processKey(key) {
            if (game_ended) {
                // if game has ended, press any key to restart.
                images_to_show = getRandomThumbnails(all_available_images, NUM_IMAGES_TO_SHOW);
                reloadGame(images_to_show);
            }
            const current_index = +document.getElementsByClassName("active")[0].id;
            let new_index;
            if (key === "ArrowUp" && current_index - num_cols > 0) {
                new_index = current_index - num_cols;
                toggleActive(current_index, new_index);
            }
            else if (key === "ArrowDown" && current_index + num_cols <= images_to_show.length) {
                new_index = current_index + num_cols;
                toggleActive(current_index, new_index);
            }
            else if (key === "ArrowLeft" && current_index % num_cols != 1 && num_cols !== 1) {
                new_index = current_index - 1;
                toggleActive(current_index, new_index);
            }
            else if (key === "ArrowRight" && current_index % num_cols != 0 && current_index + 1 <= images_to_show.length) {
                new_index = current_index + 1;
                toggleActive(current_index, new_index);
            }
            else if (key === "Enter") {
                const current_image = images_to_show[current_index - 1];
                // if filename matches, remove thumbnail. end game when there are no more images
                if (current_image == quiz_img) {
                    images_to_show.splice(current_index - 1, 1);
                    images_to_show.length == 0 ? endGame() : reloadGame(images_to_show);
                    correct_audio.play();
                }
                else {
                    wrong_audio.play();
                }
            }
            else if (key === "End") {
                // if user presses End, refresh page to randomise images again.
                // we use End to provide convenience to users because it's near the arrow keys on my keyboard.
                images_to_show = getRandomThumbnails(all_available_images, NUM_IMAGES_TO_SHOW);
                reloadGame(images_to_show);
            }
            else if (key.match(/^[a-z0-9]$/i) || key === " " || key === "Backspace") {
                // if user presses anything alphanumeric, assume they are typing a name and start populating the textfield
                // pressing Backspace will reduce one character from the textfield, while all other alphanumeric will be appended to the textfield up to a maximum of 10 characters.
                const current_text = document.getElementById('greeting-name').value;
                document.getElementById('greeting-name').value = (key === "Backspace" ? current_text.slice(0, -1) : current_text.concat(key).slice(0, 10));
            }
        }
        function toggleActive(index_to_remove, index_to_add) {
            document.getElementById(index_to_remove.toString())?.classList.remove("active");
            document.getElementById(index_to_add.toString())?.classList.add("active");
            document.getElementById(index_to_add.toString())?.scrollIntoView();
        }
    };
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxJQUF5RDtBQUM3RDtBQUNBLE1BQU0sRUFLc0I7QUFDNUIsQ0FBQztBQUNELHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw4QkFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSw4QkFBbUI7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDhCQUFtQjtBQUM3QjtBQUNBO0FBQ0EsVUFBVSw4QkFBbUI7QUFDN0I7QUFDQTtBQUNBLFVBQVUsOEJBQW1CO0FBQzdCO0FBQ0E7QUFDQSxpQkFBaUIsOEJBQW1CO0FBQ3BDLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsK0JBQW1COztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLG1DQUFtQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwrREFBK0QseURBQXlELHFFQUFxRSw2REFBNkQsd0JBQXdCO0FBQ25qQjtBQUNBLG1EQUFtRCwwQ0FBMEM7QUFDN0Y7QUFDQSxzQkFBc0IsK0JBQW1CO0FBQ3pDO0FBQ0EscUJBQXFCLCtCQUFtQjtBQUN4QztBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEIsWUFBWSxRQUFRO0FBQ3BCLGNBQWMsUUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0EsaUNBQWlDLGdDQUFtQjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxxREFBcUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELGlDQUFpQztBQUNqUDtBQUNBLG1DQUFtQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwrREFBK0QseURBQXlELHFFQUFxRSw2REFBNkQsd0JBQXdCO0FBQ25qQjtBQUNBLHdDQUF3Qyx1Q0FBdUM7QUFDL0U7QUFDQSxtREFBbUQsMENBQTBDO0FBQzdGO0FBQ0EsbUJBQW1CLGdDQUFtQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLFFBQVE7QUFDeEIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsbUJBQW1CO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyx1QkFBdUIsV0FBVyw0Q0FBNEMsa0RBQWtELDBEQUEwRCwwREFBMEQsV0FBVyxrQ0FBa0Msa0JBQWtCLGVBQWUsV0FBVywwQ0FBMEMsaUJBQWlCLGFBQWEsa0JBQWtCLGVBQWUsbUJBQW1CLGFBQWEsV0FBVztBQUMvZ0I7QUFDQTtBQUNBLGdEQUFnRCx1QkFBdUIscUNBQXFDLFdBQVcsMkRBQTJELGlDQUFpQyx5QkFBeUIsV0FBVztBQUN2UDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQixpQkFBaUIsUUFBUTtBQUN6QixpQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQixpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUIsaUJBQWlCLFFBQVE7QUFDekIsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsT0FBTztBQUNyQjtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBLG1FQUFtRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixjQUFjLE9BQU87QUFDckI7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixjQUFjLE9BQU87QUFDckI7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsT0FBTztBQUNyQjtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLG1DQUFtQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwrREFBK0QseURBQXlELHFFQUFxRSw2REFBNkQsd0JBQXdCO0FBQ25qQjtBQUNBLG1EQUFtRCwwQ0FBMEM7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQixPQUFPO0FBQ3ZCLGtCQUFrQixRQUFRO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEIsZ0JBQWdCLFFBQVE7QUFDeEIsZ0JBQWdCLE9BQU87QUFDdkIsa0JBQWtCLFFBQVE7QUFDMUI7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7VUMzaENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ042QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNELG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsaURBQUs7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QiwrQ0FBK0MsU0FBUztBQUN4RCxrREFBa0QsU0FBUztBQUMzRDtBQUNBLDZDQUE2QyxNQUFNLHVDQUF1QyxTQUFTO0FBQ25HO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSw4QkFBOEIsU0FBUztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQSw2QkFBNkIsSUFBSTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hvbmd6aXhpbi5naXRodWIuaW8vLi9ub2RlX21vZHVsZXMvdHlwZWQuanMvbGliL3R5cGVkLmpzIiwid2VicGFjazovL2Nob25neml4aW4uZ2l0aHViLmlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nob25neml4aW4uZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Nob25neml4aW4uZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaG9uZ3ppeGluLmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nob25neml4aW4uZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hvbmd6aXhpbi5naXRodWIuaW8vLi9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBcbiAqICAgdHlwZWQuanMgLSBBIEphdmFTY3JpcHQgVHlwaW5nIEFuaW1hdGlvbiBMaWJyYXJ5XG4gKiAgIEF1dGhvcjogTWF0dCBCb2xkdCA8bWVAbWF0dGJvbGR0LmNvbT5cbiAqICAgVmVyc2lvbjogdjIuMC4xMlxuICogICBVcmw6IGh0dHBzOi8vZ2l0aHViLmNvbS9tYXR0Ym9sZHQvdHlwZWQuanNcbiAqICAgTGljZW5zZShzKTogTUlUXG4gKiBcbiAqL1xuKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiVHlwZWRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiVHlwZWRcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fSxcbi8qKioqKiovIFx0XHRcdGlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGxvYWRlZDogZmFsc2Vcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHR2YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXHRcblx0ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cdFxuXHR2YXIgX2luaXRpYWxpemVySnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXHRcblx0dmFyIF9odG1sUGFyc2VySnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xuXHRcblx0LyoqXG5cdCAqIFdlbGNvbWUgdG8gVHlwZWQuanMhXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBlbGVtZW50SWQgSFRNTCBlbGVtZW50IElEIF9PUl8gSFRNTCBlbGVtZW50XG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIG9wdGlvbnMgb2JqZWN0XG5cdCAqIEByZXR1cm5zIHtvYmplY3R9IGEgbmV3IFR5cGVkIG9iamVjdFxuXHQgKi9cblx0XG5cdHZhciBUeXBlZCA9IChmdW5jdGlvbiAoKSB7XG5cdCAgZnVuY3Rpb24gVHlwZWQoZWxlbWVudElkLCBvcHRpb25zKSB7XG5cdCAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHlwZWQpO1xuXHRcblx0ICAgIC8vIEluaXRpYWxpemUgaXQgdXBcblx0ICAgIF9pbml0aWFsaXplckpzLmluaXRpYWxpemVyLmxvYWQodGhpcywgb3B0aW9ucywgZWxlbWVudElkKTtcblx0ICAgIC8vIEFsbCBzeXN0ZW1zIGdvIVxuXHQgICAgdGhpcy5iZWdpbigpO1xuXHQgIH1cblx0XG5cdCAgLyoqXG5cdCAgICogVG9nZ2xlIHN0YXJ0KCkgYW5kIHN0b3AoKSBvZiB0aGUgVHlwZWQgaW5zdGFuY2Vcblx0ICAgKiBAcHVibGljXG5cdCAgICovXG5cdFxuXHQgIF9jcmVhdGVDbGFzcyhUeXBlZCwgW3tcblx0ICAgIGtleTogJ3RvZ2dsZScsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gdG9nZ2xlKCkge1xuXHQgICAgICB0aGlzLnBhdXNlLnN0YXR1cyA/IHRoaXMuc3RhcnQoKSA6IHRoaXMuc3RvcCgpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogU3RvcCB0eXBpbmcgLyBiYWNrc3BhY2luZyBhbmQgZW5hYmxlIGN1cnNvciBibGlua2luZ1xuXHQgICAgICogQHB1YmxpY1xuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnc3RvcCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcCgpIHtcblx0ICAgICAgaWYgKHRoaXMudHlwaW5nQ29tcGxldGUpIHJldHVybjtcblx0ICAgICAgaWYgKHRoaXMucGF1c2Uuc3RhdHVzKSByZXR1cm47XG5cdCAgICAgIHRoaXMudG9nZ2xlQmxpbmtpbmcodHJ1ZSk7XG5cdCAgICAgIHRoaXMucGF1c2Uuc3RhdHVzID0gdHJ1ZTtcblx0ICAgICAgdGhpcy5vcHRpb25zLm9uU3RvcCh0aGlzLmFycmF5UG9zLCB0aGlzKTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIFN0YXJ0IHR5cGluZyAvIGJhY2tzcGFjaW5nIGFmdGVyIGJlaW5nIHN0b3BwZWRcblx0ICAgICAqIEBwdWJsaWNcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ3N0YXJ0Jyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydCgpIHtcblx0ICAgICAgaWYgKHRoaXMudHlwaW5nQ29tcGxldGUpIHJldHVybjtcblx0ICAgICAgaWYgKCF0aGlzLnBhdXNlLnN0YXR1cykgcmV0dXJuO1xuXHQgICAgICB0aGlzLnBhdXNlLnN0YXR1cyA9IGZhbHNlO1xuXHQgICAgICBpZiAodGhpcy5wYXVzZS50eXBld3JpdGUpIHtcblx0ICAgICAgICB0aGlzLnR5cGV3cml0ZSh0aGlzLnBhdXNlLmN1clN0cmluZywgdGhpcy5wYXVzZS5jdXJTdHJQb3MpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHRoaXMuYmFja3NwYWNlKHRoaXMucGF1c2UuY3VyU3RyaW5nLCB0aGlzLnBhdXNlLmN1clN0clBvcyk7XG5cdCAgICAgIH1cblx0ICAgICAgdGhpcy5vcHRpb25zLm9uU3RhcnQodGhpcy5hcnJheVBvcywgdGhpcyk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBEZXN0cm95IHRoaXMgaW5zdGFuY2Ugb2YgVHlwZWRcblx0ICAgICAqIEBwdWJsaWNcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2Rlc3Ryb3knLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG5cdCAgICAgIHRoaXMucmVzZXQoZmFsc2UpO1xuXHQgICAgICB0aGlzLm9wdGlvbnMub25EZXN0cm95KHRoaXMpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogUmVzZXQgVHlwZWQgYW5kIG9wdGlvbmFsbHkgcmVzdGFydHNcblx0ICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVzdGFydFxuXHQgICAgICogQHB1YmxpY1xuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAncmVzZXQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xuXHQgICAgICB2YXIgcmVzdGFydCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHRydWUgOiBhcmd1bWVudHNbMF07XG5cdFxuXHQgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZW91dCk7XG5cdCAgICAgIHRoaXMucmVwbGFjZVRleHQoJycpO1xuXHQgICAgICBpZiAodGhpcy5jdXJzb3IgJiYgdGhpcy5jdXJzb3IucGFyZW50Tm9kZSkge1xuXHQgICAgICAgIHRoaXMuY3Vyc29yLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5jdXJzb3IpO1xuXHQgICAgICAgIHRoaXMuY3Vyc29yID0gbnVsbDtcblx0ICAgICAgfVxuXHQgICAgICB0aGlzLnN0clBvcyA9IDA7XG5cdCAgICAgIHRoaXMuYXJyYXlQb3MgPSAwO1xuXHQgICAgICB0aGlzLmN1ckxvb3AgPSAwO1xuXHQgICAgICBpZiAocmVzdGFydCkge1xuXHQgICAgICAgIHRoaXMuaW5zZXJ0Q3Vyc29yKCk7XG5cdCAgICAgICAgdGhpcy5vcHRpb25zLm9uUmVzZXQodGhpcyk7XG5cdCAgICAgICAgdGhpcy5iZWdpbigpO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBCZWdpbnMgdGhlIHR5cGluZyBhbmltYXRpb25cblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdiZWdpbicsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gYmVnaW4oKSB7XG5cdCAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cdFxuXHQgICAgICB0aGlzLm9wdGlvbnMub25CZWdpbih0aGlzKTtcblx0ICAgICAgdGhpcy50eXBpbmdDb21wbGV0ZSA9IGZhbHNlO1xuXHQgICAgICB0aGlzLnNodWZmbGVTdHJpbmdzSWZOZWVkZWQodGhpcyk7XG5cdCAgICAgIHRoaXMuaW5zZXJ0Q3Vyc29yKCk7XG5cdCAgICAgIGlmICh0aGlzLmJpbmRJbnB1dEZvY3VzRXZlbnRzKSB0aGlzLmJpbmRGb2N1c0V2ZW50cygpO1xuXHQgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBzb21lIHRleHQgaW4gdGhlIGVsZW1lbnQsIGlmIHllcyBzdGFydCBieSBiYWNrc3BhY2luZyB0aGUgZGVmYXVsdCBtZXNzYWdlXG5cdCAgICAgICAgaWYgKCFfdGhpcy5jdXJyZW50RWxDb250ZW50IHx8IF90aGlzLmN1cnJlbnRFbENvbnRlbnQubGVuZ3RoID09PSAwKSB7XG5cdCAgICAgICAgICBfdGhpcy50eXBld3JpdGUoX3RoaXMuc3RyaW5nc1tfdGhpcy5zZXF1ZW5jZVtfdGhpcy5hcnJheVBvc11dLCBfdGhpcy5zdHJQb3MpO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAvLyBTdGFydCB0eXBpbmdcblx0ICAgICAgICAgIF90aGlzLmJhY2tzcGFjZShfdGhpcy5jdXJyZW50RWxDb250ZW50LCBfdGhpcy5jdXJyZW50RWxDb250ZW50Lmxlbmd0aCk7XG5cdCAgICAgICAgfVxuXHQgICAgICB9LCB0aGlzLnN0YXJ0RGVsYXkpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogQ2FsbGVkIGZvciBlYWNoIGNoYXJhY3RlciB0eXBlZFxuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGN1clN0cmluZyB0aGUgY3VycmVudCBzdHJpbmcgaW4gdGhlIHN0cmluZ3MgYXJyYXlcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJTdHJQb3MgdGhlIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGN1clN0cmluZ1xuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ3R5cGV3cml0ZScsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gdHlwZXdyaXRlKGN1clN0cmluZywgY3VyU3RyUG9zKSB7XG5cdCAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXHRcblx0ICAgICAgaWYgKHRoaXMuZmFkZU91dCAmJiB0aGlzLmVsLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLmZhZGVPdXRDbGFzcykpIHtcblx0ICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5mYWRlT3V0Q2xhc3MpO1xuXHQgICAgICAgIGlmICh0aGlzLmN1cnNvcikgdGhpcy5jdXJzb3IuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmZhZGVPdXRDbGFzcyk7XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIHZhciBodW1hbml6ZSA9IHRoaXMuaHVtYW5pemVyKHRoaXMudHlwZVNwZWVkKTtcblx0ICAgICAgdmFyIG51bUNoYXJzID0gMTtcblx0XG5cdCAgICAgIGlmICh0aGlzLnBhdXNlLnN0YXR1cyA9PT0gdHJ1ZSkge1xuXHQgICAgICAgIHRoaXMuc2V0UGF1c2VTdGF0dXMoY3VyU3RyaW5nLCBjdXJTdHJQb3MsIHRydWUpO1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgLy8gY29udGFpbiB0eXBpbmcgZnVuY3Rpb24gaW4gYSB0aW1lb3V0IGh1bWFuaXplJ2QgZGVsYXlcblx0ICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgLy8gc2tpcCBvdmVyIGFueSBIVE1MIGNoYXJzXG5cdCAgICAgICAgY3VyU3RyUG9zID0gX2h0bWxQYXJzZXJKcy5odG1sUGFyc2VyLnR5cGVIdG1sQ2hhcnMoY3VyU3RyaW5nLCBjdXJTdHJQb3MsIF90aGlzMik7XG5cdFxuXHQgICAgICAgIHZhciBwYXVzZVRpbWUgPSAwO1xuXHQgICAgICAgIHZhciBzdWJzdHIgPSBjdXJTdHJpbmcuc3Vic3RyKGN1clN0clBvcyk7XG5cdCAgICAgICAgLy8gY2hlY2sgZm9yIGFuIGVzY2FwZSBjaGFyYWN0ZXIgYmVmb3JlIGEgcGF1c2UgdmFsdWVcblx0ICAgICAgICAvLyBmb3JtYXQ6IFxcXlxcZCsgLi4gZWc6IF4xMDAwIC4uIHNob3VsZCBiZSBhYmxlIHRvIHByaW50IHRoZSBeIHRvbyB1c2luZyBeXlxuXHQgICAgICAgIC8vIHNpbmdsZSBeIGFyZSByZW1vdmVkIGZyb20gc3RyaW5nXG5cdCAgICAgICAgaWYgKHN1YnN0ci5jaGFyQXQoMCkgPT09ICdeJykge1xuXHQgICAgICAgICAgaWYgKC9eXFxeXFxkKy8udGVzdChzdWJzdHIpKSB7XG5cdCAgICAgICAgICAgIHZhciBza2lwID0gMTsgLy8gc2tpcCBhdCBsZWFzdCAxXG5cdCAgICAgICAgICAgIHN1YnN0ciA9IC9cXGQrLy5leGVjKHN1YnN0cilbMF07XG5cdCAgICAgICAgICAgIHNraXAgKz0gc3Vic3RyLmxlbmd0aDtcblx0ICAgICAgICAgICAgcGF1c2VUaW1lID0gcGFyc2VJbnQoc3Vic3RyKTtcblx0ICAgICAgICAgICAgX3RoaXMyLnRlbXBvcmFyeVBhdXNlID0gdHJ1ZTtcblx0ICAgICAgICAgICAgX3RoaXMyLm9wdGlvbnMub25UeXBpbmdQYXVzZWQoX3RoaXMyLmFycmF5UG9zLCBfdGhpczIpO1xuXHQgICAgICAgICAgICAvLyBzdHJpcCBvdXQgdGhlIGVzY2FwZSBjaGFyYWN0ZXIgYW5kIHBhdXNlIHZhbHVlIHNvIHRoZXkncmUgbm90IHByaW50ZWRcblx0ICAgICAgICAgICAgY3VyU3RyaW5nID0gY3VyU3RyaW5nLnN1YnN0cmluZygwLCBjdXJTdHJQb3MpICsgY3VyU3RyaW5nLnN1YnN0cmluZyhjdXJTdHJQb3MgKyBza2lwKTtcblx0ICAgICAgICAgICAgX3RoaXMyLnRvZ2dsZUJsaW5raW5nKHRydWUpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0XG5cdCAgICAgICAgLy8gY2hlY2sgZm9yIHNraXAgY2hhcmFjdGVycyBmb3JtYXR0ZWQgYXNcblx0ICAgICAgICAvLyBcInRoaXMgaXMgYSBgc3RyaW5nIHRvIHByaW50IE5PV2AgLi4uXCJcblx0ICAgICAgICBpZiAoc3Vic3RyLmNoYXJBdCgwKSA9PT0gJ2AnKSB7XG5cdCAgICAgICAgICB3aGlsZSAoY3VyU3RyaW5nLnN1YnN0cihjdXJTdHJQb3MgKyBudW1DaGFycykuY2hhckF0KDApICE9PSAnYCcpIHtcblx0ICAgICAgICAgICAgbnVtQ2hhcnMrKztcblx0ICAgICAgICAgICAgaWYgKGN1clN0clBvcyArIG51bUNoYXJzID4gY3VyU3RyaW5nLmxlbmd0aCkgYnJlYWs7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgICAvLyBzdHJpcCBvdXQgdGhlIGVzY2FwZSBjaGFyYWN0ZXJzIGFuZCBhcHBlbmQgYWxsIHRoZSBzdHJpbmcgaW4gYmV0d2VlblxuXHQgICAgICAgICAgdmFyIHN0cmluZ0JlZm9yZVNraXAgPSBjdXJTdHJpbmcuc3Vic3RyaW5nKDAsIGN1clN0clBvcyk7XG5cdCAgICAgICAgICB2YXIgc3RyaW5nU2tpcHBlZCA9IGN1clN0cmluZy5zdWJzdHJpbmcoc3RyaW5nQmVmb3JlU2tpcC5sZW5ndGggKyAxLCBjdXJTdHJQb3MgKyBudW1DaGFycyk7XG5cdCAgICAgICAgICB2YXIgc3RyaW5nQWZ0ZXJTa2lwID0gY3VyU3RyaW5nLnN1YnN0cmluZyhjdXJTdHJQb3MgKyBudW1DaGFycyArIDEpO1xuXHQgICAgICAgICAgY3VyU3RyaW5nID0gc3RyaW5nQmVmb3JlU2tpcCArIHN0cmluZ1NraXBwZWQgKyBzdHJpbmdBZnRlclNraXA7XG5cdCAgICAgICAgICBudW1DaGFycy0tO1xuXHQgICAgICAgIH1cblx0XG5cdCAgICAgICAgLy8gdGltZW91dCBmb3IgYW55IHBhdXNlIGFmdGVyIGEgY2hhcmFjdGVyXG5cdCAgICAgICAgX3RoaXMyLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgIC8vIEFjY291bnRzIGZvciBibGlua2luZyB3aGlsZSBwYXVzZWRcblx0ICAgICAgICAgIF90aGlzMi50b2dnbGVCbGlua2luZyhmYWxzZSk7XG5cdFxuXHQgICAgICAgICAgLy8gV2UncmUgZG9uZSB3aXRoIHRoaXMgc2VudGVuY2UhXG5cdCAgICAgICAgICBpZiAoY3VyU3RyUG9zID49IGN1clN0cmluZy5sZW5ndGgpIHtcblx0ICAgICAgICAgICAgX3RoaXMyLmRvbmVUeXBpbmcoY3VyU3RyaW5nLCBjdXJTdHJQb3MpO1xuXHQgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgX3RoaXMyLmtlZXBUeXBpbmcoY3VyU3RyaW5nLCBjdXJTdHJQb3MsIG51bUNoYXJzKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICAgIC8vIGVuZCBvZiBjaGFyYWN0ZXIgcGF1c2Vcblx0ICAgICAgICAgIGlmIChfdGhpczIudGVtcG9yYXJ5UGF1c2UpIHtcblx0ICAgICAgICAgICAgX3RoaXMyLnRlbXBvcmFyeVBhdXNlID0gZmFsc2U7XG5cdCAgICAgICAgICAgIF90aGlzMi5vcHRpb25zLm9uVHlwaW5nUmVzdW1lZChfdGhpczIuYXJyYXlQb3MsIF90aGlzMik7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfSwgcGF1c2VUaW1lKTtcblx0XG5cdCAgICAgICAgLy8gaHVtYW5pemVkIHZhbHVlIGZvciB0eXBpbmdcblx0ICAgICAgfSwgaHVtYW5pemUpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogQ29udGludWUgdG8gdGhlIG5leHQgc3RyaW5nICYgYmVnaW4gdHlwaW5nXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gY3VyU3RyaW5nIHRoZSBjdXJyZW50IHN0cmluZyBpbiB0aGUgc3RyaW5ncyBhcnJheVxuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IGN1clN0clBvcyB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgY3VyU3RyaW5nXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAna2VlcFR5cGluZycsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24ga2VlcFR5cGluZyhjdXJTdHJpbmcsIGN1clN0clBvcywgbnVtQ2hhcnMpIHtcblx0ICAgICAgLy8gY2FsbCBiZWZvcmUgZnVuY3Rpb25zIGlmIGFwcGxpY2FibGVcblx0ICAgICAgaWYgKGN1clN0clBvcyA9PT0gMCkge1xuXHQgICAgICAgIHRoaXMudG9nZ2xlQmxpbmtpbmcoZmFsc2UpO1xuXHQgICAgICAgIHRoaXMub3B0aW9ucy5wcmVTdHJpbmdUeXBlZCh0aGlzLmFycmF5UG9zLCB0aGlzKTtcblx0ICAgICAgfVxuXHQgICAgICAvLyBzdGFydCB0eXBpbmcgZWFjaCBuZXcgY2hhciBpbnRvIGV4aXN0aW5nIHN0cmluZ1xuXHQgICAgICAvLyBjdXJTdHJpbmc6IGFyZywgdGhpcy5lbC5odG1sOiBvcmlnaW5hbCB0ZXh0IGluc2lkZSBlbGVtZW50XG5cdCAgICAgIGN1clN0clBvcyArPSBudW1DaGFycztcblx0ICAgICAgdmFyIG5leHRTdHJpbmcgPSBjdXJTdHJpbmcuc3Vic3RyKDAsIGN1clN0clBvcyk7XG5cdCAgICAgIHRoaXMucmVwbGFjZVRleHQobmV4dFN0cmluZyk7XG5cdCAgICAgIC8vIGxvb3AgdGhlIGZ1bmN0aW9uXG5cdCAgICAgIHRoaXMudHlwZXdyaXRlKGN1clN0cmluZywgY3VyU3RyUG9zKTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIFdlJ3JlIGRvbmUgdHlwaW5nIHRoZSBjdXJyZW50IHN0cmluZ1xuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGN1clN0cmluZyB0aGUgY3VycmVudCBzdHJpbmcgaW4gdGhlIHN0cmluZ3MgYXJyYXlcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJTdHJQb3MgdGhlIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGN1clN0cmluZ1xuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2RvbmVUeXBpbmcnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGRvbmVUeXBpbmcoY3VyU3RyaW5nLCBjdXJTdHJQb3MpIHtcblx0ICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cdFxuXHQgICAgICAvLyBmaXJlcyBjYWxsYmFjayBmdW5jdGlvblxuXHQgICAgICB0aGlzLm9wdGlvbnMub25TdHJpbmdUeXBlZCh0aGlzLmFycmF5UG9zLCB0aGlzKTtcblx0ICAgICAgdGhpcy50b2dnbGVCbGlua2luZyh0cnVlKTtcblx0ICAgICAgLy8gaXMgdGhpcyB0aGUgZmluYWwgc3RyaW5nXG5cdCAgICAgIGlmICh0aGlzLmFycmF5UG9zID09PSB0aGlzLnN0cmluZ3MubGVuZ3RoIC0gMSkge1xuXHQgICAgICAgIC8vIGNhbGxiYWNrIHRoYXQgb2NjdXJzIG9uIHRoZSBsYXN0IHR5cGVkIHN0cmluZ1xuXHQgICAgICAgIHRoaXMuY29tcGxldGUoKTtcblx0ICAgICAgICAvLyBxdWl0IGlmIHdlIHdvbnQgbG9vcCBiYWNrXG5cdCAgICAgICAgaWYgKHRoaXMubG9vcCA9PT0gZmFsc2UgfHwgdGhpcy5jdXJMb29wID09PSB0aGlzLmxvb3BDb3VudCkge1xuXHQgICAgICAgICAgcmV0dXJuO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBfdGhpczMuYmFja3NwYWNlKGN1clN0cmluZywgY3VyU3RyUG9zKTtcblx0ICAgICAgfSwgdGhpcy5iYWNrRGVsYXkpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogQmFja3NwYWNlcyAxIGNoYXJhY3RlciBhdCBhIHRpbWVcblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJTdHJpbmcgdGhlIGN1cnJlbnQgc3RyaW5nIGluIHRoZSBzdHJpbmdzIGFycmF5XG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gY3VyU3RyUG9zIHRoZSBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBjdXJTdHJpbmdcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdiYWNrc3BhY2UnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGJhY2tzcGFjZShjdXJTdHJpbmcsIGN1clN0clBvcykge1xuXHQgICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblx0XG5cdCAgICAgIGlmICh0aGlzLnBhdXNlLnN0YXR1cyA9PT0gdHJ1ZSkge1xuXHQgICAgICAgIHRoaXMuc2V0UGF1c2VTdGF0dXMoY3VyU3RyaW5nLCBjdXJTdHJQb3MsIGZhbHNlKTtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKHRoaXMuZmFkZU91dCkgcmV0dXJuIHRoaXMuaW5pdEZhZGVPdXQoKTtcblx0XG5cdCAgICAgIHRoaXMudG9nZ2xlQmxpbmtpbmcoZmFsc2UpO1xuXHQgICAgICB2YXIgaHVtYW5pemUgPSB0aGlzLmh1bWFuaXplcih0aGlzLmJhY2tTcGVlZCk7XG5cdFxuXHQgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBjdXJTdHJQb3MgPSBfaHRtbFBhcnNlckpzLmh0bWxQYXJzZXIuYmFja1NwYWNlSHRtbENoYXJzKGN1clN0cmluZywgY3VyU3RyUG9zLCBfdGhpczQpO1xuXHQgICAgICAgIC8vIHJlcGxhY2UgdGV4dCB3aXRoIGJhc2UgdGV4dCArIHR5cGVkIGNoYXJhY3RlcnNcblx0ICAgICAgICB2YXIgY3VyU3RyaW5nQXRQb3NpdGlvbiA9IGN1clN0cmluZy5zdWJzdHIoMCwgY3VyU3RyUG9zKTtcblx0ICAgICAgICBfdGhpczQucmVwbGFjZVRleHQoY3VyU3RyaW5nQXRQb3NpdGlvbik7XG5cdFxuXHQgICAgICAgIC8vIGlmIHNtYXJ0QmFjayBpcyBlbmFibGVkXG5cdCAgICAgICAgaWYgKF90aGlzNC5zbWFydEJhY2tzcGFjZSkge1xuXHQgICAgICAgICAgLy8gdGhlIHJlbWFpbmluZyBwYXJ0IG9mIHRoZSBjdXJyZW50IHN0cmluZyBpcyBlcXVhbCBvZiB0aGUgc2FtZSBwYXJ0IG9mIHRoZSBuZXcgc3RyaW5nXG5cdCAgICAgICAgICB2YXIgbmV4dFN0cmluZyA9IF90aGlzNC5zdHJpbmdzW190aGlzNC5hcnJheVBvcyArIDFdO1xuXHQgICAgICAgICAgaWYgKG5leHRTdHJpbmcgJiYgY3VyU3RyaW5nQXRQb3NpdGlvbiA9PT0gbmV4dFN0cmluZy5zdWJzdHIoMCwgY3VyU3RyUG9zKSkge1xuXHQgICAgICAgICAgICBfdGhpczQuc3RvcE51bSA9IGN1clN0clBvcztcblx0ICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIF90aGlzNC5zdG9wTnVtID0gMDtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdFxuXHQgICAgICAgIC8vIGlmIHRoZSBudW1iZXIgKGlkIG9mIGNoYXJhY3RlciBpbiBjdXJyZW50IHN0cmluZykgaXNcblx0ICAgICAgICAvLyBsZXNzIHRoYW4gdGhlIHN0b3AgbnVtYmVyLCBrZWVwIGdvaW5nXG5cdCAgICAgICAgaWYgKGN1clN0clBvcyA+IF90aGlzNC5zdG9wTnVtKSB7XG5cdCAgICAgICAgICAvLyBzdWJ0cmFjdCBjaGFyYWN0ZXJzIG9uZSBieSBvbmVcblx0ICAgICAgICAgIGN1clN0clBvcy0tO1xuXHQgICAgICAgICAgLy8gbG9vcCB0aGUgZnVuY3Rpb25cblx0ICAgICAgICAgIF90aGlzNC5iYWNrc3BhY2UoY3VyU3RyaW5nLCBjdXJTdHJQb3MpO1xuXHQgICAgICAgIH0gZWxzZSBpZiAoY3VyU3RyUG9zIDw9IF90aGlzNC5zdG9wTnVtKSB7XG5cdCAgICAgICAgICAvLyBpZiB0aGUgc3RvcCBudW1iZXIgaGFzIGJlZW4gcmVhY2hlZCwgaW5jcmVhc2Vcblx0ICAgICAgICAgIC8vIGFycmF5IHBvc2l0aW9uIHRvIG5leHQgc3RyaW5nXG5cdCAgICAgICAgICBfdGhpczQuYXJyYXlQb3MrKztcblx0ICAgICAgICAgIC8vIFdoZW4gbG9vcGluZywgYmVnaW4gYXQgdGhlIGJlZ2lubmluZyBhZnRlciBiYWNrc3BhY2UgY29tcGxldGVcblx0ICAgICAgICAgIGlmIChfdGhpczQuYXJyYXlQb3MgPT09IF90aGlzNC5zdHJpbmdzLmxlbmd0aCkge1xuXHQgICAgICAgICAgICBfdGhpczQuYXJyYXlQb3MgPSAwO1xuXHQgICAgICAgICAgICBfdGhpczQub3B0aW9ucy5vbkxhc3RTdHJpbmdCYWNrc3BhY2VkKCk7XG5cdCAgICAgICAgICAgIF90aGlzNC5zaHVmZmxlU3RyaW5nc0lmTmVlZGVkKCk7XG5cdCAgICAgICAgICAgIF90aGlzNC5iZWdpbigpO1xuXHQgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgX3RoaXM0LnR5cGV3cml0ZShfdGhpczQuc3RyaW5nc1tfdGhpczQuc2VxdWVuY2VbX3RoaXM0LmFycmF5UG9zXV0sIGN1clN0clBvcyk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIC8vIGh1bWFuaXplZCB2YWx1ZSBmb3IgdHlwaW5nXG5cdCAgICAgIH0sIGh1bWFuaXplKTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIEZ1bGwgYW5pbWF0aW9uIGlzIGNvbXBsZXRlXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAnY29tcGxldGUnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuXHQgICAgICB0aGlzLm9wdGlvbnMub25Db21wbGV0ZSh0aGlzKTtcblx0ICAgICAgaWYgKHRoaXMubG9vcCkge1xuXHQgICAgICAgIHRoaXMuY3VyTG9vcCsrO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHRoaXMudHlwaW5nQ29tcGxldGUgPSB0cnVlO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBIYXMgdGhlIHR5cGluZyBiZWVuIHN0b3BwZWRcblx0ICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjdXJTdHJpbmcgdGhlIGN1cnJlbnQgc3RyaW5nIGluIHRoZSBzdHJpbmdzIGFycmF5XG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gY3VyU3RyUG9zIHRoZSBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBjdXJTdHJpbmdcblx0ICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNUeXBpbmdcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdzZXRQYXVzZVN0YXR1cycsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UGF1c2VTdGF0dXMoY3VyU3RyaW5nLCBjdXJTdHJQb3MsIGlzVHlwaW5nKSB7XG5cdCAgICAgIHRoaXMucGF1c2UudHlwZXdyaXRlID0gaXNUeXBpbmc7XG5cdCAgICAgIHRoaXMucGF1c2UuY3VyU3RyaW5nID0gY3VyU3RyaW5nO1xuXHQgICAgICB0aGlzLnBhdXNlLmN1clN0clBvcyA9IGN1clN0clBvcztcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIFRvZ2dsZSB0aGUgYmxpbmtpbmcgY3Vyc29yXG5cdCAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzQmxpbmtpbmdcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICd0b2dnbGVCbGlua2luZycsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gdG9nZ2xlQmxpbmtpbmcoaXNCbGlua2luZykge1xuXHQgICAgICBpZiAoIXRoaXMuY3Vyc29yKSByZXR1cm47XG5cdCAgICAgIC8vIGlmIGluIHBhdXNlZCBzdGF0ZSwgZG9uJ3QgdG9nZ2xlIGJsaW5raW5nIGEgMm5kIHRpbWVcblx0ICAgICAgaWYgKHRoaXMucGF1c2Uuc3RhdHVzKSByZXR1cm47XG5cdCAgICAgIGlmICh0aGlzLmN1cnNvckJsaW5raW5nID09PSBpc0JsaW5raW5nKSByZXR1cm47XG5cdCAgICAgIHRoaXMuY3Vyc29yQmxpbmtpbmcgPSBpc0JsaW5raW5nO1xuXHQgICAgICBpZiAoaXNCbGlua2luZykge1xuXHQgICAgICAgIHRoaXMuY3Vyc29yLmNsYXNzTGlzdC5hZGQoJ3R5cGVkLWN1cnNvci0tYmxpbmsnKTtcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICB0aGlzLmN1cnNvci5jbGFzc0xpc3QucmVtb3ZlKCd0eXBlZC1jdXJzb3ItLWJsaW5rJyk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIFNwZWVkIGluIE1TIHRvIHR5cGVcblx0ICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzcGVlZFxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2h1bWFuaXplcicsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gaHVtYW5pemVyKHNwZWVkKSB7XG5cdCAgICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBzcGVlZCAvIDIpICsgc3BlZWQ7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBTaHVmZmxlIHRoZSBzZXF1ZW5jZSBvZiB0aGUgc3RyaW5ncyBhcnJheVxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ3NodWZmbGVTdHJpbmdzSWZOZWVkZWQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHNodWZmbGVTdHJpbmdzSWZOZWVkZWQoKSB7XG5cdCAgICAgIGlmICghdGhpcy5zaHVmZmxlKSByZXR1cm47XG5cdCAgICAgIHRoaXMuc2VxdWVuY2UgPSB0aGlzLnNlcXVlbmNlLnNvcnQoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpIC0gMC41O1xuXHQgICAgICB9KTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIEFkZHMgYSBDU1MgY2xhc3MgdG8gZmFkZSBvdXQgY3VycmVudCBzdHJpbmdcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdpbml0RmFkZU91dCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdEZhZGVPdXQoKSB7XG5cdCAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXHRcblx0ICAgICAgdGhpcy5lbC5jbGFzc05hbWUgKz0gJyAnICsgdGhpcy5mYWRlT3V0Q2xhc3M7XG5cdCAgICAgIGlmICh0aGlzLmN1cnNvcikgdGhpcy5jdXJzb3IuY2xhc3NOYW1lICs9ICcgJyArIHRoaXMuZmFkZU91dENsYXNzO1xuXHQgICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgX3RoaXM1LmFycmF5UG9zKys7XG5cdCAgICAgICAgX3RoaXM1LnJlcGxhY2VUZXh0KCcnKTtcblx0XG5cdCAgICAgICAgLy8gUmVzZXRzIGN1cnJlbnQgc3RyaW5nIGlmIGVuZCBvZiBsb29wIHJlYWNoZWRcblx0ICAgICAgICBpZiAoX3RoaXM1LnN0cmluZ3MubGVuZ3RoID4gX3RoaXM1LmFycmF5UG9zKSB7XG5cdCAgICAgICAgICBfdGhpczUudHlwZXdyaXRlKF90aGlzNS5zdHJpbmdzW190aGlzNS5zZXF1ZW5jZVtfdGhpczUuYXJyYXlQb3NdXSwgMCk7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIF90aGlzNS50eXBld3JpdGUoX3RoaXM1LnN0cmluZ3NbMF0sIDApO1xuXHQgICAgICAgICAgX3RoaXM1LmFycmF5UG9zID0gMDtcblx0ICAgICAgICB9XG5cdCAgICAgIH0sIHRoaXMuZmFkZU91dERlbGF5KTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIFJlcGxhY2VzIGN1cnJlbnQgdGV4dCBpbiB0aGUgSFRNTCBlbGVtZW50XG5cdCAgICAgKiBkZXBlbmRpbmcgb24gZWxlbWVudCB0eXBlXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdCAgfSwge1xuXHQgICAga2V5OiAncmVwbGFjZVRleHQnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KHN0cikge1xuXHQgICAgICBpZiAodGhpcy5hdHRyKSB7XG5cdCAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUodGhpcy5hdHRyLCBzdHIpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIGlmICh0aGlzLmlzSW5wdXQpIHtcblx0ICAgICAgICAgIHRoaXMuZWwudmFsdWUgPSBzdHI7XG5cdCAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbnRlbnRUeXBlID09PSAnaHRtbCcpIHtcblx0ICAgICAgICAgIHRoaXMuZWwuaW5uZXJIVE1MID0gc3RyO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICB0aGlzLmVsLnRleHRDb250ZW50ID0gc3RyO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogSWYgdXNpbmcgaW5wdXQgZWxlbWVudHMsIGJpbmQgZm9jdXMgaW4gb3JkZXIgdG9cblx0ICAgICAqIHN0YXJ0IGFuZCBzdG9wIHRoZSBhbmltYXRpb25cblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdiaW5kRm9jdXNFdmVudHMnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGJpbmRGb2N1c0V2ZW50cygpIHtcblx0ICAgICAgdmFyIF90aGlzNiA9IHRoaXM7XG5cdFxuXHQgICAgICBpZiAoIXRoaXMuaXNJbnB1dCkgcmV0dXJuO1xuXHQgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZnVuY3Rpb24gKGUpIHtcblx0ICAgICAgICBfdGhpczYuc3RvcCgpO1xuXHQgICAgICB9KTtcblx0ICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZnVuY3Rpb24gKGUpIHtcblx0ICAgICAgICBpZiAoX3RoaXM2LmVsLnZhbHVlICYmIF90aGlzNi5lbC52YWx1ZS5sZW5ndGggIT09IDApIHtcblx0ICAgICAgICAgIHJldHVybjtcblx0ICAgICAgICB9XG5cdCAgICAgICAgX3RoaXM2LnN0YXJ0KCk7XG5cdCAgICAgIH0pO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogT24gaW5pdCwgaW5zZXJ0IHRoZSBjdXJzb3IgZWxlbWVudFxuXHQgICAgICogQHByaXZhdGVcblx0ICAgICAqL1xuXHQgIH0sIHtcblx0ICAgIGtleTogJ2luc2VydEN1cnNvcicsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gaW5zZXJ0Q3Vyc29yKCkge1xuXHQgICAgICBpZiAoIXRoaXMuc2hvd0N1cnNvcikgcmV0dXJuO1xuXHQgICAgICBpZiAodGhpcy5jdXJzb3IpIHJldHVybjtcblx0ICAgICAgdGhpcy5jdXJzb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdCAgICAgIHRoaXMuY3Vyc29yLmNsYXNzTmFtZSA9ICd0eXBlZC1jdXJzb3InO1xuXHQgICAgICB0aGlzLmN1cnNvci5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG5cdCAgICAgIHRoaXMuY3Vyc29yLmlubmVySFRNTCA9IHRoaXMuY3Vyc29yQ2hhcjtcblx0ICAgICAgdGhpcy5lbC5wYXJlbnROb2RlICYmIHRoaXMuZWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcy5jdXJzb3IsIHRoaXMuZWwubmV4dFNpYmxpbmcpO1xuXHQgICAgfVxuXHQgIH1dKTtcblx0XG5cdCAgcmV0dXJuIFR5cGVkO1xuXHR9KSgpO1xuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gVHlwZWQ7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHR2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXHRcblx0dmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblx0XG5cdGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblx0XG5cdGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXHRcblx0dmFyIF9kZWZhdWx0c0pzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblx0XG5cdHZhciBfZGVmYXVsdHNKczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZhdWx0c0pzKTtcblx0XG5cdC8qKlxuXHQgKiBJbml0aWFsaXplIHRoZSBUeXBlZCBvYmplY3Rcblx0ICovXG5cdFxuXHR2YXIgSW5pdGlhbGl6ZXIgPSAoZnVuY3Rpb24gKCkge1xuXHQgIGZ1bmN0aW9uIEluaXRpYWxpemVyKCkge1xuXHQgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEluaXRpYWxpemVyKTtcblx0ICB9XG5cdFxuXHQgIF9jcmVhdGVDbGFzcyhJbml0aWFsaXplciwgW3tcblx0ICAgIGtleTogJ2xvYWQnLFxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogTG9hZCB1cCBkZWZhdWx0cyAmIG9wdGlvbnMgb24gdGhlIFR5cGVkIGluc3RhbmNlXG5cdCAgICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmIGluc3RhbmNlIG9mIFR5cGVkXG5cdCAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBvcHRpb25zIG9iamVjdFxuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGVsZW1lbnRJZCBIVE1MIGVsZW1lbnQgSUQgX09SXyBpbnN0YW5jZSBvZiBIVE1MIGVsZW1lbnRcblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0XG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gbG9hZChzZWxmLCBvcHRpb25zLCBlbGVtZW50SWQpIHtcblx0ICAgICAgLy8gY2hvc2VuIGVsZW1lbnQgdG8gbWFuaXB1bGF0ZSB0ZXh0XG5cdCAgICAgIGlmICh0eXBlb2YgZWxlbWVudElkID09PSAnc3RyaW5nJykge1xuXHQgICAgICAgIHNlbGYuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnRJZCk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgc2VsZi5lbCA9IGVsZW1lbnRJZDtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgc2VsZi5vcHRpb25zID0gX2V4dGVuZHMoe30sIF9kZWZhdWx0c0pzMlsnZGVmYXVsdCddLCBvcHRpb25zKTtcblx0XG5cdCAgICAgIC8vIGF0dHJpYnV0ZSB0byB0eXBlIGludG9cblx0ICAgICAgc2VsZi5pc0lucHV0ID0gc2VsZi5lbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbnB1dCc7XG5cdCAgICAgIHNlbGYuYXR0ciA9IHNlbGYub3B0aW9ucy5hdHRyO1xuXHQgICAgICBzZWxmLmJpbmRJbnB1dEZvY3VzRXZlbnRzID0gc2VsZi5vcHRpb25zLmJpbmRJbnB1dEZvY3VzRXZlbnRzO1xuXHRcblx0ICAgICAgLy8gc2hvdyBjdXJzb3Jcblx0ICAgICAgc2VsZi5zaG93Q3Vyc29yID0gc2VsZi5pc0lucHV0ID8gZmFsc2UgOiBzZWxmLm9wdGlvbnMuc2hvd0N1cnNvcjtcblx0XG5cdCAgICAgIC8vIGN1c3RvbSBjdXJzb3Jcblx0ICAgICAgc2VsZi5jdXJzb3JDaGFyID0gc2VsZi5vcHRpb25zLmN1cnNvckNoYXI7XG5cdFxuXHQgICAgICAvLyBJcyB0aGUgY3Vyc29yIGJsaW5raW5nXG5cdCAgICAgIHNlbGYuY3Vyc29yQmxpbmtpbmcgPSB0cnVlO1xuXHRcblx0ICAgICAgLy8gdGV4dCBjb250ZW50IG9mIGVsZW1lbnRcblx0ICAgICAgc2VsZi5lbENvbnRlbnQgPSBzZWxmLmF0dHIgPyBzZWxmLmVsLmdldEF0dHJpYnV0ZShzZWxmLmF0dHIpIDogc2VsZi5lbC50ZXh0Q29udGVudDtcblx0XG5cdCAgICAgIC8vIGh0bWwgb3IgcGxhaW4gdGV4dFxuXHQgICAgICBzZWxmLmNvbnRlbnRUeXBlID0gc2VsZi5vcHRpb25zLmNvbnRlbnRUeXBlO1xuXHRcblx0ICAgICAgLy8gdHlwaW5nIHNwZWVkXG5cdCAgICAgIHNlbGYudHlwZVNwZWVkID0gc2VsZi5vcHRpb25zLnR5cGVTcGVlZDtcblx0XG5cdCAgICAgIC8vIGFkZCBhIGRlbGF5IGJlZm9yZSB0eXBpbmcgc3RhcnRzXG5cdCAgICAgIHNlbGYuc3RhcnREZWxheSA9IHNlbGYub3B0aW9ucy5zdGFydERlbGF5O1xuXHRcblx0ICAgICAgLy8gYmFja3NwYWNpbmcgc3BlZWRcblx0ICAgICAgc2VsZi5iYWNrU3BlZWQgPSBzZWxmLm9wdGlvbnMuYmFja1NwZWVkO1xuXHRcblx0ICAgICAgLy8gb25seSBiYWNrc3BhY2Ugd2hhdCBkb2Vzbid0IG1hdGNoIHRoZSBwcmV2aW91cyBzdHJpbmdcblx0ICAgICAgc2VsZi5zbWFydEJhY2tzcGFjZSA9IHNlbGYub3B0aW9ucy5zbWFydEJhY2tzcGFjZTtcblx0XG5cdCAgICAgIC8vIGFtb3VudCBvZiB0aW1lIHRvIHdhaXQgYmVmb3JlIGJhY2tzcGFjaW5nXG5cdCAgICAgIHNlbGYuYmFja0RlbGF5ID0gc2VsZi5vcHRpb25zLmJhY2tEZWxheTtcblx0XG5cdCAgICAgIC8vIEZhZGUgb3V0IGluc3RlYWQgb2YgYmFja3NwYWNlXG5cdCAgICAgIHNlbGYuZmFkZU91dCA9IHNlbGYub3B0aW9ucy5mYWRlT3V0O1xuXHQgICAgICBzZWxmLmZhZGVPdXRDbGFzcyA9IHNlbGYub3B0aW9ucy5mYWRlT3V0Q2xhc3M7XG5cdCAgICAgIHNlbGYuZmFkZU91dERlbGF5ID0gc2VsZi5vcHRpb25zLmZhZGVPdXREZWxheTtcblx0XG5cdCAgICAgIC8vIHZhcmlhYmxlIHRvIGNoZWNrIHdoZXRoZXIgdHlwaW5nIGlzIGN1cnJlbnRseSBwYXVzZWRcblx0ICAgICAgc2VsZi5pc1BhdXNlZCA9IGZhbHNlO1xuXHRcblx0ICAgICAgLy8gaW5wdXQgc3RyaW5ncyBvZiB0ZXh0XG5cdCAgICAgIHNlbGYuc3RyaW5ncyA9IHNlbGYub3B0aW9ucy5zdHJpbmdzLm1hcChmdW5jdGlvbiAocykge1xuXHQgICAgICAgIHJldHVybiBzLnRyaW0oKTtcblx0ICAgICAgfSk7XG5cdFxuXHQgICAgICAvLyBkaXYgY29udGFpbmluZyBzdHJpbmdzXG5cdCAgICAgIGlmICh0eXBlb2Ygc2VsZi5vcHRpb25zLnN0cmluZ3NFbGVtZW50ID09PSAnc3RyaW5nJykge1xuXHQgICAgICAgIHNlbGYuc3RyaW5nc0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGYub3B0aW9ucy5zdHJpbmdzRWxlbWVudCk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgc2VsZi5zdHJpbmdzRWxlbWVudCA9IHNlbGYub3B0aW9ucy5zdHJpbmdzRWxlbWVudDtcblx0ICAgICAgfVxuXHRcblx0ICAgICAgaWYgKHNlbGYuc3RyaW5nc0VsZW1lbnQpIHtcblx0ICAgICAgICBzZWxmLnN0cmluZ3MgPSBbXTtcblx0ICAgICAgICBzZWxmLnN0cmluZ3NFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdCAgICAgICAgdmFyIHN0cmluZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoc2VsZi5zdHJpbmdzRWxlbWVudC5jaGlsZHJlbik7XG5cdCAgICAgICAgdmFyIHN0cmluZ3NMZW5ndGggPSBzdHJpbmdzLmxlbmd0aDtcblx0XG5cdCAgICAgICAgaWYgKHN0cmluZ3NMZW5ndGgpIHtcblx0ICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyaW5nc0xlbmd0aDsgaSArPSAxKSB7XG5cdCAgICAgICAgICAgIHZhciBzdHJpbmdFbCA9IHN0cmluZ3NbaV07XG5cdCAgICAgICAgICAgIHNlbGYuc3RyaW5ncy5wdXNoKHN0cmluZ0VsLmlubmVySFRNTC50cmltKCkpO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHRcblx0ICAgICAgLy8gY2hhcmFjdGVyIG51bWJlciBwb3NpdGlvbiBvZiBjdXJyZW50IHN0cmluZ1xuXHQgICAgICBzZWxmLnN0clBvcyA9IDA7XG5cdFxuXHQgICAgICAvLyBjdXJyZW50IGFycmF5IHBvc2l0aW9uXG5cdCAgICAgIHNlbGYuYXJyYXlQb3MgPSAwO1xuXHRcblx0ICAgICAgLy8gaW5kZXggb2Ygc3RyaW5nIHRvIHN0b3AgYmFja3NwYWNpbmcgb25cblx0ICAgICAgc2VsZi5zdG9wTnVtID0gMDtcblx0XG5cdCAgICAgIC8vIExvb3BpbmcgbG9naWNcblx0ICAgICAgc2VsZi5sb29wID0gc2VsZi5vcHRpb25zLmxvb3A7XG5cdCAgICAgIHNlbGYubG9vcENvdW50ID0gc2VsZi5vcHRpb25zLmxvb3BDb3VudDtcblx0ICAgICAgc2VsZi5jdXJMb29wID0gMDtcblx0XG5cdCAgICAgIC8vIHNodWZmbGUgdGhlIHN0cmluZ3Ncblx0ICAgICAgc2VsZi5zaHVmZmxlID0gc2VsZi5vcHRpb25zLnNodWZmbGU7XG5cdCAgICAgIC8vIHRoZSBvcmRlciBvZiBzdHJpbmdzXG5cdCAgICAgIHNlbGYuc2VxdWVuY2UgPSBbXTtcblx0XG5cdCAgICAgIHNlbGYucGF1c2UgPSB7XG5cdCAgICAgICAgc3RhdHVzOiBmYWxzZSxcblx0ICAgICAgICB0eXBld3JpdGU6IHRydWUsXG5cdCAgICAgICAgY3VyU3RyaW5nOiAnJyxcblx0ICAgICAgICBjdXJTdHJQb3M6IDBcblx0ICAgICAgfTtcblx0XG5cdCAgICAgIC8vIFdoZW4gdGhlIHR5cGluZyBpcyBjb21wbGV0ZSAod2hlbiBub3QgbG9vcGVkKVxuXHQgICAgICBzZWxmLnR5cGluZ0NvbXBsZXRlID0gZmFsc2U7XG5cdFxuXHQgICAgICAvLyBTZXQgdGhlIG9yZGVyIGluIHdoaWNoIHRoZSBzdHJpbmdzIGFyZSB0eXBlZFxuXHQgICAgICBmb3IgKHZhciBpIGluIHNlbGYuc3RyaW5ncykge1xuXHQgICAgICAgIHNlbGYuc2VxdWVuY2VbaV0gPSBpO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICAvLyBJZiB0aGVyZSBpcyBzb21lIHRleHQgaW4gdGhlIGVsZW1lbnRcblx0ICAgICAgc2VsZi5jdXJyZW50RWxDb250ZW50ID0gdGhpcy5nZXRDdXJyZW50RWxDb250ZW50KHNlbGYpO1xuXHRcblx0ICAgICAgc2VsZi5hdXRvSW5zZXJ0Q3NzID0gc2VsZi5vcHRpb25zLmF1dG9JbnNlcnRDc3M7XG5cdFxuXHQgICAgICB0aGlzLmFwcGVuZEFuaW1hdGlvbkNzcyhzZWxmKTtcblx0ICAgIH1cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdnZXRDdXJyZW50RWxDb250ZW50Jyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDdXJyZW50RWxDb250ZW50KHNlbGYpIHtcblx0ICAgICAgdmFyIGVsQ29udGVudCA9ICcnO1xuXHQgICAgICBpZiAoc2VsZi5hdHRyKSB7XG5cdCAgICAgICAgZWxDb250ZW50ID0gc2VsZi5lbC5nZXRBdHRyaWJ1dGUoc2VsZi5hdHRyKTtcblx0ICAgICAgfSBlbHNlIGlmIChzZWxmLmlzSW5wdXQpIHtcblx0ICAgICAgICBlbENvbnRlbnQgPSBzZWxmLmVsLnZhbHVlO1xuXHQgICAgICB9IGVsc2UgaWYgKHNlbGYuY29udGVudFR5cGUgPT09ICdodG1sJykge1xuXHQgICAgICAgIGVsQ29udGVudCA9IHNlbGYuZWwuaW5uZXJIVE1MO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIGVsQ29udGVudCA9IHNlbGYuZWwudGV4dENvbnRlbnQ7XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIGVsQ29udGVudDtcblx0ICAgIH1cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdhcHBlbmRBbmltYXRpb25Dc3MnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGFwcGVuZEFuaW1hdGlvbkNzcyhzZWxmKSB7XG5cdCAgICAgIHZhciBjc3NEYXRhTmFtZSA9ICdkYXRhLXR5cGVkLWpzLWNzcyc7XG5cdCAgICAgIGlmICghc2VsZi5hdXRvSW5zZXJ0Q3NzKSB7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdCAgICAgIGlmICghc2VsZi5zaG93Q3Vyc29yICYmICFzZWxmLmZhZGVPdXQpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0ICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1snICsgY3NzRGF0YU5hbWUgKyAnXScpKSB7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICB2YXIgY3NzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblx0ICAgICAgY3NzLnR5cGUgPSAndGV4dC9jc3MnO1xuXHQgICAgICBjc3Muc2V0QXR0cmlidXRlKGNzc0RhdGFOYW1lLCB0cnVlKTtcblx0XG5cdCAgICAgIHZhciBpbm5lckNzcyA9ICcnO1xuXHQgICAgICBpZiAoc2VsZi5zaG93Q3Vyc29yKSB7XG5cdCAgICAgICAgaW5uZXJDc3MgKz0gJ1xcbiAgICAgICAgLnR5cGVkLWN1cnNvcntcXG4gICAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIH1cXG4gICAgICAgIC50eXBlZC1jdXJzb3IudHlwZWQtY3Vyc29yLS1ibGlua3tcXG4gICAgICAgICAgYW5pbWF0aW9uOiB0eXBlZGpzQmxpbmsgMC43cyBpbmZpbml0ZTtcXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHR5cGVkanNCbGluayAwLjdzIGluZmluaXRlO1xcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogdHlwZWRqc0JsaW5rIDAuN3MgaW5maW5pdGU7XFxuICAgICAgICB9XFxuICAgICAgICBAa2V5ZnJhbWVzIHR5cGVkanNCbGlua3tcXG4gICAgICAgICAgNTAlIHsgb3BhY2l0eTogMC4wOyB9XFxuICAgICAgICB9XFxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgdHlwZWRqc0JsaW5re1xcbiAgICAgICAgICAwJSB7IG9wYWNpdHk6IDE7IH1cXG4gICAgICAgICAgNTAlIHsgb3BhY2l0eTogMC4wOyB9XFxuICAgICAgICAgIDEwMCUgeyBvcGFjaXR5OiAxOyB9XFxuICAgICAgICB9XFxuICAgICAgJztcblx0ICAgICAgfVxuXHQgICAgICBpZiAoc2VsZi5mYWRlT3V0KSB7XG5cdCAgICAgICAgaW5uZXJDc3MgKz0gJ1xcbiAgICAgICAgLnR5cGVkLWZhZGUtb3V0e1xcbiAgICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4yNXM7XFxuICAgICAgICB9XFxuICAgICAgICAudHlwZWQtY3Vyc29yLnR5cGVkLWN1cnNvci0tYmxpbmsudHlwZWQtZmFkZS1vdXR7XFxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiAwO1xcbiAgICAgICAgICBhbmltYXRpb246IDA7XFxuICAgICAgICB9XFxuICAgICAgJztcblx0ICAgICAgfVxuXHQgICAgICBpZiAoY3NzLmxlbmd0aCA9PT0gMCkge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHQgICAgICBjc3MuaW5uZXJIVE1MID0gaW5uZXJDc3M7XG5cdCAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3NzKTtcblx0ICAgIH1cblx0ICB9XSk7XG5cdFxuXHQgIHJldHVybiBJbml0aWFsaXplcjtcblx0fSkoKTtcblx0XG5cdGV4cG9ydHNbJ2RlZmF1bHQnXSA9IEluaXRpYWxpemVyO1xuXHR2YXIgaW5pdGlhbGl6ZXIgPSBuZXcgSW5pdGlhbGl6ZXIoKTtcblx0ZXhwb3J0cy5pbml0aWFsaXplciA9IGluaXRpYWxpemVyO1xuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvKipcblx0ICogRGVmYXVsdHMgJiBvcHRpb25zXG5cdCAqIEByZXR1cm5zIHtvYmplY3R9IFR5cGVkIGRlZmF1bHRzICYgb3B0aW9uc1xuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRcblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHR2YXIgZGVmYXVsdHMgPSB7XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHthcnJheX0gc3RyaW5ncyBzdHJpbmdzIHRvIGJlIHR5cGVkXG5cdCAgICogQHByb3BlcnR5IHtzdHJpbmd9IHN0cmluZ3NFbGVtZW50IElEIG9mIGVsZW1lbnQgY29udGFpbmluZyBzdHJpbmcgY2hpbGRyZW5cblx0ICAgKi9cblx0ICBzdHJpbmdzOiBbJ1RoZXNlIGFyZSB0aGUgZGVmYXVsdCB2YWx1ZXMuLi4nLCAnWW91IGtub3cgd2hhdCB5b3Ugc2hvdWxkIGRvPycsICdVc2UgeW91ciBvd24hJywgJ0hhdmUgYSBncmVhdCBkYXkhJ10sXG5cdCAgc3RyaW5nc0VsZW1lbnQ6IG51bGwsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB0eXBlU3BlZWQgdHlwZSBzcGVlZCBpbiBtaWxsaXNlY29uZHNcblx0ICAgKi9cblx0ICB0eXBlU3BlZWQ6IDAsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzdGFydERlbGF5IHRpbWUgYmVmb3JlIHR5cGluZyBzdGFydHMgaW4gbWlsbGlzZWNvbmRzXG5cdCAgICovXG5cdCAgc3RhcnREZWxheTogMCxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtudW1iZXJ9IGJhY2tTcGVlZCBiYWNrc3BhY2luZyBzcGVlZCBpbiBtaWxsaXNlY29uZHNcblx0ICAgKi9cblx0ICBiYWNrU3BlZWQ6IDAsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gc21hcnRCYWNrc3BhY2Ugb25seSBiYWNrc3BhY2Ugd2hhdCBkb2Vzbid0IG1hdGNoIHRoZSBwcmV2aW91cyBzdHJpbmdcblx0ICAgKi9cblx0ICBzbWFydEJhY2tzcGFjZTogdHJ1ZSxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtib29sZWFufSBzaHVmZmxlIHNodWZmbGUgdGhlIHN0cmluZ3Ncblx0ICAgKi9cblx0ICBzaHVmZmxlOiBmYWxzZSxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtudW1iZXJ9IGJhY2tEZWxheSB0aW1lIGJlZm9yZSBiYWNrc3BhY2luZyBpbiBtaWxsaXNlY29uZHNcblx0ICAgKi9cblx0ICBiYWNrRGVsYXk6IDcwMCxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtib29sZWFufSBmYWRlT3V0IEZhZGUgb3V0IGluc3RlYWQgb2YgYmFja3NwYWNlXG5cdCAgICogQHByb3BlcnR5IHtzdHJpbmd9IGZhZGVPdXRDbGFzcyBjc3MgY2xhc3MgZm9yIGZhZGUgYW5pbWF0aW9uXG5cdCAgICogQHByb3BlcnR5IHtib29sZWFufSBmYWRlT3V0RGVsYXkgRmFkZSBvdXQgZGVsYXkgaW4gbWlsbGlzZWNvbmRzXG5cdCAgICovXG5cdCAgZmFkZU91dDogZmFsc2UsXG5cdCAgZmFkZU91dENsYXNzOiAndHlwZWQtZmFkZS1vdXQnLFxuXHQgIGZhZGVPdXREZWxheTogNTAwLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGxvb3AgbG9vcCBzdHJpbmdzXG5cdCAgICogQHByb3BlcnR5IHtudW1iZXJ9IGxvb3BDb3VudCBhbW91bnQgb2YgbG9vcHNcblx0ICAgKi9cblx0ICBsb29wOiBmYWxzZSxcblx0ICBsb29wQ291bnQ6IEluZmluaXR5LFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHNob3dDdXJzb3Igc2hvdyBjdXJzb3Jcblx0ICAgKiBAcHJvcGVydHkge3N0cmluZ30gY3Vyc29yQ2hhciBjaGFyYWN0ZXIgZm9yIGN1cnNvclxuXHQgICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gYXV0b0luc2VydENzcyBpbnNlcnQgQ1NTIGZvciBjdXJzb3IgYW5kIGZhZGVPdXQgaW50byBIVE1MIDxoZWFkPlxuXHQgICAqL1xuXHQgIHNob3dDdXJzb3I6IHRydWUsXG5cdCAgY3Vyc29yQ2hhcjogJ3wnLFxuXHQgIGF1dG9JbnNlcnRDc3M6IHRydWUsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBhdHRyIGF0dHJpYnV0ZSBmb3IgdHlwaW5nXG5cdCAgICogRXg6IGlucHV0IHBsYWNlaG9sZGVyLCB2YWx1ZSwgb3IganVzdCBIVE1MIHRleHRcblx0ICAgKi9cblx0ICBhdHRyOiBudWxsLFxuXHRcblx0ICAvKipcblx0ICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IGJpbmRJbnB1dEZvY3VzRXZlbnRzIGJpbmQgdG8gZm9jdXMgYW5kIGJsdXIgaWYgZWwgaXMgdGV4dCBpbnB1dFxuXHQgICAqL1xuXHQgIGJpbmRJbnB1dEZvY3VzRXZlbnRzOiBmYWxzZSxcblx0XG5cdCAgLyoqXG5cdCAgICogQHByb3BlcnR5IHtzdHJpbmd9IGNvbnRlbnRUeXBlICdodG1sJyBvciAnbnVsbCcgZm9yIHBsYWludGV4dFxuXHQgICAqL1xuXHQgIGNvbnRlbnRUeXBlOiAnaHRtbCcsXG5cdFxuXHQgIC8qKlxuXHQgICAqIEJlZm9yZSBpdCBiZWdpbnMgdHlwaW5nXG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uQmVnaW46IGZ1bmN0aW9uIG9uQmVnaW4oc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEFsbCB0eXBpbmcgaXMgY29tcGxldGVcblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25Db21wbGV0ZTogZnVuY3Rpb24gb25Db21wbGV0ZShzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogQmVmb3JlIGVhY2ggc3RyaW5nIGlzIHR5cGVkXG5cdCAgICogQHBhcmFtIHtudW1iZXJ9IGFycmF5UG9zXG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIHByZVN0cmluZ1R5cGVkOiBmdW5jdGlvbiBwcmVTdHJpbmdUeXBlZChhcnJheVBvcywgc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEFmdGVyIGVhY2ggc3RyaW5nIGlzIHR5cGVkXG5cdCAgICogQHBhcmFtIHtudW1iZXJ9IGFycmF5UG9zXG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uU3RyaW5nVHlwZWQ6IGZ1bmN0aW9uIG9uU3RyaW5nVHlwZWQoYXJyYXlQb3MsIHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBEdXJpbmcgbG9vcGluZywgYWZ0ZXIgbGFzdCBzdHJpbmcgaXMgdHlwZWRcblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25MYXN0U3RyaW5nQmFja3NwYWNlZDogZnVuY3Rpb24gb25MYXN0U3RyaW5nQmFja3NwYWNlZChzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogVHlwaW5nIGhhcyBiZWVuIHN0b3BwZWRcblx0ICAgKiBAcGFyYW0ge251bWJlcn0gYXJyYXlQb3Ncblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25UeXBpbmdQYXVzZWQ6IGZ1bmN0aW9uIG9uVHlwaW5nUGF1c2VkKGFycmF5UG9zLCBzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogVHlwaW5nIGhhcyBiZWVuIHN0YXJ0ZWQgYWZ0ZXIgYmVpbmcgc3RvcHBlZFxuXHQgICAqIEBwYXJhbSB7bnVtYmVyfSBhcnJheVBvc1xuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvblR5cGluZ1Jlc3VtZWQ6IGZ1bmN0aW9uIG9uVHlwaW5nUmVzdW1lZChhcnJheVBvcywgc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEFmdGVyIHJlc2V0XG5cdCAgICogQHBhcmFtIHtUeXBlZH0gc2VsZlxuXHQgICAqL1xuXHQgIG9uUmVzZXQ6IGZ1bmN0aW9uIG9uUmVzZXQoc2VsZikge30sXG5cdFxuXHQgIC8qKlxuXHQgICAqIEFmdGVyIHN0b3Bcblx0ICAgKiBAcGFyYW0ge251bWJlcn0gYXJyYXlQb3Ncblx0ICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmXG5cdCAgICovXG5cdCAgb25TdG9wOiBmdW5jdGlvbiBvblN0b3AoYXJyYXlQb3MsIHNlbGYpIHt9LFxuXHRcblx0ICAvKipcblx0ICAgKiBBZnRlciBzdGFydFxuXHQgICAqIEBwYXJhbSB7bnVtYmVyfSBhcnJheVBvc1xuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvblN0YXJ0OiBmdW5jdGlvbiBvblN0YXJ0KGFycmF5UG9zLCBzZWxmKSB7fSxcblx0XG5cdCAgLyoqXG5cdCAgICogQWZ0ZXIgZGVzdHJveVxuXHQgICAqIEBwYXJhbSB7VHlwZWR9IHNlbGZcblx0ICAgKi9cblx0ICBvbkRlc3Ryb3k6IGZ1bmN0aW9uIG9uRGVzdHJveShzZWxmKSB7fVxuXHR9O1xuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gZGVmYXVsdHM7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvKipcblx0ICogVE9ETzogVGhlc2UgbWV0aG9kcyBjYW4gcHJvYmFibHkgYmUgY29tYmluZWQgc29tZWhvd1xuXHQgKiBQYXJzZSBIVE1MIHRhZ3MgJiBIVE1MIENoYXJhY3RlcnNcblx0ICovXG5cdFxuXHQndXNlIHN0cmljdCc7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdFxuXHR2YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXHRcblx0ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cdFxuXHR2YXIgSFRNTFBhcnNlciA9IChmdW5jdGlvbiAoKSB7XG5cdCAgZnVuY3Rpb24gSFRNTFBhcnNlcigpIHtcblx0ICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIVE1MUGFyc2VyKTtcblx0ICB9XG5cdFxuXHQgIF9jcmVhdGVDbGFzcyhIVE1MUGFyc2VyLCBbe1xuXHQgICAga2V5OiAndHlwZUh0bWxDaGFycycsXG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBUeXBlIEhUTUwgdGFncyAmIEhUTUwgQ2hhcmFjdGVyc1xuXHQgICAgICogQHBhcmFtIHtzdHJpbmd9IGN1clN0cmluZyBDdXJyZW50IHN0cmluZ1xuXHQgICAgICogQHBhcmFtIHtudW1iZXJ9IGN1clN0clBvcyBQb3NpdGlvbiBpbiBjdXJyZW50IHN0cmluZ1xuXHQgICAgICogQHBhcmFtIHtUeXBlZH0gc2VsZiBpbnN0YW5jZSBvZiBUeXBlZFxuXHQgICAgICogQHJldHVybnMge251bWJlcn0gYSBuZXcgc3RyaW5nIHBvc2l0aW9uXG5cdCAgICAgKiBAcHJpdmF0ZVxuXHQgICAgICovXG5cdFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIHR5cGVIdG1sQ2hhcnMoY3VyU3RyaW5nLCBjdXJTdHJQb3MsIHNlbGYpIHtcblx0ICAgICAgaWYgKHNlbGYuY29udGVudFR5cGUgIT09ICdodG1sJykgcmV0dXJuIGN1clN0clBvcztcblx0ICAgICAgdmFyIGN1ckNoYXIgPSBjdXJTdHJpbmcuc3Vic3RyKGN1clN0clBvcykuY2hhckF0KDApO1xuXHQgICAgICBpZiAoY3VyQ2hhciA9PT0gJzwnIHx8IGN1ckNoYXIgPT09ICcmJykge1xuXHQgICAgICAgIHZhciBlbmRUYWcgPSAnJztcblx0ICAgICAgICBpZiAoY3VyQ2hhciA9PT0gJzwnKSB7XG5cdCAgICAgICAgICBlbmRUYWcgPSAnPic7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIGVuZFRhZyA9ICc7Jztcblx0ICAgICAgICB9XG5cdCAgICAgICAgd2hpbGUgKGN1clN0cmluZy5zdWJzdHIoY3VyU3RyUG9zICsgMSkuY2hhckF0KDApICE9PSBlbmRUYWcpIHtcblx0ICAgICAgICAgIGN1clN0clBvcysrO1xuXHQgICAgICAgICAgaWYgKGN1clN0clBvcyArIDEgPiBjdXJTdHJpbmcubGVuZ3RoKSB7XG5cdCAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICBjdXJTdHJQb3MrKztcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gY3VyU3RyUG9zO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogQmFja3NwYWNlIEhUTUwgdGFncyBhbmQgSFRNTCBDaGFyYWN0ZXJzXG5cdCAgICAgKiBAcGFyYW0ge3N0cmluZ30gY3VyU3RyaW5nIEN1cnJlbnQgc3RyaW5nXG5cdCAgICAgKiBAcGFyYW0ge251bWJlcn0gY3VyU3RyUG9zIFBvc2l0aW9uIGluIGN1cnJlbnQgc3RyaW5nXG5cdCAgICAgKiBAcGFyYW0ge1R5cGVkfSBzZWxmIGluc3RhbmNlIG9mIFR5cGVkXG5cdCAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBhIG5ldyBzdHJpbmcgcG9zaXRpb25cblx0ICAgICAqIEBwcml2YXRlXG5cdCAgICAgKi9cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdiYWNrU3BhY2VIdG1sQ2hhcnMnLFxuXHQgICAgdmFsdWU6IGZ1bmN0aW9uIGJhY2tTcGFjZUh0bWxDaGFycyhjdXJTdHJpbmcsIGN1clN0clBvcywgc2VsZikge1xuXHQgICAgICBpZiAoc2VsZi5jb250ZW50VHlwZSAhPT0gJ2h0bWwnKSByZXR1cm4gY3VyU3RyUG9zO1xuXHQgICAgICB2YXIgY3VyQ2hhciA9IGN1clN0cmluZy5zdWJzdHIoY3VyU3RyUG9zKS5jaGFyQXQoMCk7XG5cdCAgICAgIGlmIChjdXJDaGFyID09PSAnPicgfHwgY3VyQ2hhciA9PT0gJzsnKSB7XG5cdCAgICAgICAgdmFyIGVuZFRhZyA9ICcnO1xuXHQgICAgICAgIGlmIChjdXJDaGFyID09PSAnPicpIHtcblx0ICAgICAgICAgIGVuZFRhZyA9ICc8Jztcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgZW5kVGFnID0gJyYnO1xuXHQgICAgICAgIH1cblx0ICAgICAgICB3aGlsZSAoY3VyU3RyaW5nLnN1YnN0cihjdXJTdHJQb3MgLSAxKS5jaGFyQXQoMCkgIT09IGVuZFRhZykge1xuXHQgICAgICAgICAgY3VyU3RyUG9zLS07XG5cdCAgICAgICAgICBpZiAoY3VyU3RyUG9zIDwgMCkge1xuXHQgICAgICAgICAgICBicmVhaztcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgICAgY3VyU3RyUG9zLS07XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIGN1clN0clBvcztcblx0ICAgIH1cblx0ICB9XSk7XG5cdFxuXHQgIHJldHVybiBIVE1MUGFyc2VyO1xuXHR9KSgpO1xuXHRcblx0ZXhwb3J0c1snZGVmYXVsdCddID0gSFRNTFBhcnNlcjtcblx0dmFyIGh0bWxQYXJzZXIgPSBuZXcgSFRNTFBhcnNlcigpO1xuXHRleHBvcnRzLmh0bWxQYXJzZXIgPSBodG1sUGFyc2VyO1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSlcbn0pO1xuOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVHlwZWQgZnJvbSBcInR5cGVkLmpzXCI7XG4vKiBJTklUICovXG4vLyBwcmUtbG9hZCB0aGUgbGlzdCBvZiBhdmFpbGFibGUgaW1hZ2VzIGluIGFzc2V0c1xuY29uc3QgYWxsX2F2YWlsYWJsZV9pbWFnZXMgPSBbXG4gICAgLy8gZ2Vja28gZ2FyYWdlXG4gICAgJ3JpY2stdGhlLXJvbGxlci5wbmcnLFxuICAgICdjYXJvbGluZS10aGUtY3JhbmUucG5nJyxcbiAgICAnbWF4LXRoZS1tb25zdGVyLXRydWNrLnBuZycsXG4gICAgJ2hlbGVuLXRoZS1oZWxpY29wdGVyLnBuZycsXG4gICAgJ2JvYmJ5LXRoZS1idXMucG5nJyxcbiAgICAnc2FtbXktdGhlLXNjaG9vbGJ1cy5wbmcnLFxuICAgICdjZWxpYS10aGUtY2VtZW50bWl4ZXIucG5nJyxcbiAgICAnZ2VvcmdlLXRoZS1naWFudGR1bXB0cnVjay5wbmcnLFxuICAgICdkeWxhbi10aGUtZHVtcHRydWNrLnBuZycsXG4gICAgJ3J5YW4tdGhlLXdyZWNraW5nYmFsbGNyYW5lLnBuZycsXG4gICAgJ2FuZHktdGhlLWFuaW1hbGFtYnVsYW5jZS5wbmcnLFxuICAgICdhbWJlci10aGUtYW1idWxhbmNlLnBuZycsXG4gICAgJ3ZpY2t5LXRoZS1pY2VjcmVhbXZhbi5wbmcnLFxuICAgICdjaGVsc2VhLXRoZS1jaGVycnlwaWNrZXIucG5nJyxcbiAgICAncmViZWNjYS10aGUtcmVjeWNsaW5ndHJ1Y2sucG5nJyxcbiAgICAnZmlvbmEtdGhlLWZpcmV0cnVjay5wbmcnLFxuICAgICd0b255LXRoZS10YXhpLnBuZycsXG4gICAgJ3NvcGhpZS10aGUtc3BvcnRzY2FyLnBuZycsXG4gICAgJ21hbGx5LXRoZS1tb3RvcmN5Y2xlLnBuZycsXG4gICAgJ3RyZXZvci10aGUtdHJhY3Rvci5wbmcnLFxuICAgICdldmllLXRoZS1ldi5wbmcnLFxuICAgICdlcmljLXRoZS1leGNhdmF0b3IuanBlZycsXG4gICAgJ2Rhbm55LXRoZS1kaWdnZXIucG5nJyxcbiAgICAnbGFycnktdGhlLWxvcnJ5LnBuZycsXG4gICAgJ2dlY2tvLWJhYnktdHJ1Y2sucG5nJyxcbiAgICAnZ2Vja28tdmlkZW8tMS5wbmcnLFxuICAgICdnZWNrby1tdWRkeS10cnVja3MucG5nJyxcbiAgICAnb3NjYXItdGhlLW9sZGJ1cy5wbmcnLFxuICAgICd0aWxseS10aGUtdG93dHJ1Y2sucG5nJyxcbiAgICAnYm9iYnktc3R1Y2staW4tc25vdy5wbmcnLFxuICAgICdtaWEtdGhlLW1pbmlkaWdnZXIucG5nJyxcbiAgICAnbGVvLXRoZS1saW1vdXNpbmUucG5nJyxcbiAgICAncG9sbHktdGhlLWxpdHRsZWJ1cy5wbmcnLFxuICAgICdmaXZlLWdyZWVuLWJ1c2VzLnBuZycsXG4gICAgJ21hZ2dpZS10aGUtbWluaWZpcmV0cnVjay5wbmcnLFxuICAgICdjZWxpYS1tdWRkeS10cnVjay5wbmcnLFxuICAgICdzb3BoaWUtbGFycnktbXVkZHkucG5nJyxcbiAgICAnaWNlY3JlYW0tdHJ1Y2stc21vb3RoaWUucG5nJyxcbiAgICAnbWFpc2llLXRoZS1tb3dlci5wbmcnLFxuICAgICdiYWJ5dHJ1Y2staGFsbG93ZWVuLnBuZycsXG4gICAgJ2JvYmJ5LXNhbXktbXVkZHkucG5nJyxcbiAgICAnZ2Vja28tZ2FyYWdlLWFsbC5wbmcnLFxuICAgICdmbG9yZW5jZS10aGUtZm9ya2xpZnQucG5nJyxcbiAgICAnbXVtbXktYnVzLnBuZycsXG4gICAgJ2JvYmJ5LWJ1cy10aGVybW9tZXRlci5wbmcnLFxuICAgICdkb3QtdGhlLWJhYnlidXMucG5nJyxcbiAgICAnbWF4LWp1bXAucG5nJyxcbiAgICAnaGFycnktdGhlLWJhYnlidXMucG5nJyxcbiAgICAnZ2Vja28tY29uc3RydWN0aW9uLXZlaGljbGVzLnBuZycsXG4gICAgJ2JvYmJ5LWJ1cy1tb29keS5wbmcnLFxuICAgICdnZWNrby1yZXNwcmF5LW1hY2hpbmUucG5nJyxcbiAgICAnbWF4LWRpZmZlcmVudC1jb2xvdXJzLnBuZycsXG4gICAgJ2dlY2tvLW1lY2hhbmljYWxzLXNsZWVwaW5nLnBuZycsXG4gICAgJ21heC1oYWxsb3dlZW4tbW9uc3Rlci5wbmcnLFxuICAgICdmaXZlLWJhYnktdHJ1Y2tzLnBuZycsXG4gICAgJ2NlbGlhLWNlbWVudC12aWNreS5wbmcnLFxuICAgICdnZWNrby14bWFzLXRyZWUucG5nJyxcbiAgICAnZ2Vja28taGFsbG93ZWVuLWNoYXJhY3RlcnMucG5nJyxcbiAgICAnZ2Vja28tbG9va2luZy1hdHlvdS5wbmcnLFxuICAgICdnZWNrby10aGUtdmFtcGlyZS5wbmcnLFxuICAgICdjaHJpc3RtYXMtdG95LXdvcmtzaG9wLnBuZycsXG4gICAgJ2hlbGVuLWZldGNoaW5nLXJpY2sucG5nJyxcbiAgICAnZ2Vja28tZ2FyYWdlLXJhaW5ib3cucG5nJyxcbiAgICAnZ2Vja28td2l0aC1kcnBvcHB5LnBuZycsXG4gICAgJ3RpbGx5LWJlY29tZXMtY2Fyb2xpbmUucG5nJyxcbiAgICAnZ2Vja28td2l0aC1tcndlYXNlbC5wbmcnLFxuICAgICdmaW9uYS1qdW1wcy1iaXJ0aGRheS5wbmcnLFxuICAgICdiYWJ5dHJ1Y2stc3VycHJpc2UtZGlubmVyLnBuZycsXG4gICAgJ21lY2hhbmljYWwtd2l0aC1zbm93bWFuLnBuZycsXG4gICAgJ2dlY2tvLW1lY2hhbmljYWwtYWJjLnBuZycsXG4gICAgJ2JhYnktdHJ1Y2stanVtcC5wbmcnLFxuICAgICdib2JieS1iYWJ5dHJ1Y2stY29sb3VyZnVsLnBuZycsXG4gICAgJ3N1cGVyLW1lY2hhbmljYWwtYWR2ZW50dXJlLnBuZycsXG4gICAgJ3JpY2stcnlhbi16b28ucG5nJyxcbiAgICAvLyAnYm91bmNlLXBhdHJvbC1iYWJ5c2hhcmsucG5nJyxcbiAgICAvLyAnYm91bmNlcGF0cm9sLWhhbGxvd2Vlbi1tdW1teXNoYXJrLnBuZycsXG4gICAgLy8gJ2JvdW5jZXBhdHJvbC1jaHJpc3RtYXMtbXVtbXlzaGFyay5wbmcnLFxuICAgIC8vICdib3VuY2VwYXRyb2wtY2hyaXN0bWFzLWdyYW5kbWFzaGFyay5wbmcnLFxuICAgIC8vICdib3VuY2VwYXRyb2wtaGFsbG93ZWVlbi1vbGRtYWNzLnBuZycsXG4gICAgLy8gJ29sYWYucG5nJyxcbiAgICAvLyAvLyAnZWxzYS5wbmcnLFxuICAgIC8vICdib3VuY2VwYXRyb2wtbGVhcm5pbmctc29uZ3MucG5nJyxcbiAgICAvLyAnYm91bmNlcGF0cm9sLWJ1bm55LWhvcC5wbmcnLFxuICAgIC8vICdib3VuY2VwYXRyb2wtaGFsbG93ZWVuLXB1bXBraW4ucG5nJyxcbiAgICAvLyAnYm91bmNlcGF0cm9sLWZpdmVsaXR0bGUtcGlncy5wbmcnLFxuICAgIC8vICdib3VuY2VwYXRyb2wtMTIzNDUtc29uZ3MucG5nJyxcbiAgICAvLyAnYm91bmNlcGF0cm9sLW9sZC1tYWNkb25hbGQucG5nJyxcbiAgICAvLyAnbGl0dGxlLWJhYnlidW0tc2FuZGNhc3RsZS5wbmcnLFxuICAgIC8vICdsaXR0bGUtYmFieWJ1bS11bWJyZWxsYS5wbmcnLFxuICAgIC8vICdsaXR0bGUtYmFieWJ1bS13aGVlbHNvbmJ1cy5wbmcnLFxuICAgIC8vICdsaXR0bGUtYmFieWJ1bS10b3lzLnBuZycsXG4gICAgLy8gJ2JvdW5jZS1wYXRyb2wtZGFuY2VwYXJ0eS5wbmcnLFxuICAgIC8vICdib3VuY2UtcGF0cm9sLWxvZ28ucG5nJyxcbiAgICAvLyAnYm91bmNlcGF0cm9sLXB1bXBraW4tbW9tbXkucG5nJyxcbiAgICAvLyAnYm91bmNlcGF0cm9sLXBpbmstYmFsbC5wbmcnLFxuICAgIC8vICdib3VuY2VwYXRyb2wtZmlyZS1maWdodGVycy5wbmcnLFxuICAgIC8vICdib3VuY2VwYXRyb2wtc2tlbGV0b24taG91c2UucG5nJyxcbiAgICAvLyAnYm91bmNlcGF0cm9sLXBpZy1zb25nLnBuZycsXG4gICAgLy8gJ2JvdW5jZXBhdHJvbC1maXJlLXRydWNrcy5wbmcnLFxuICAgIC8vICdjaHVjaHV0di1zdXJwcmlzZS1lZ2dzLnBuZycsXG4gICAgLy8gJ2VtZXJnZW5jeS12ZWhpY2xlcy1maXJldHJ1Y2sucG5nJyxcbiAgICAvLyAnZW1lcmdlbmN5LXZlaGljbGVzLWFjY2lkZW50LnBuZycsXG4gICAgLy8gJ2NvbnN0cnVjdGlvbi12ZWhpY2xlcy1leGNhdmF0b3IucG5nJyxcbiAgICAvLyAnY29uc3RydWN0aW9uLXZlaGljbGVzLWNyYW5lLnBuZycsXG4gICAgLy8gJ2NvbnN0cnVjdGlvbi12ZWhpY2xlcy1sZWdvY3JhbmUucG5nJyxcbiAgICAvLyAnY29uc3RydWN0aW9uLXZlaGljbGVzLXdyZWNraW5nYmFsbGNyYW5lLnBuZycsXG4gICAgLy8gJ2NvbnN0cnVjdGlvbi12ZWhpY2xlcy1jZW1lbnRtaXhlci5wbmcnLFxuXTtcbmNvbnN0IE5VTV9JTUFHRVNfVE9fU0hPVyA9IDIwO1xuLy8gY29uc3QgTlVNX0lNQUdFU19UT19TSE9XID0gYWxsX2F2YWlsYWJsZV9pbWFnZXMubGVuZ3RoOyAvLyBjaGFuZ2UgbnVtIGltYWdlcyBhY2NvcmRpbmdseSwgc2hvdyBhbGwgYnkgZGVmYXVsdC5cbmNvbnN0IE5VTV9ST1dTID0gMjsgLy8gY2hhbmdlIG51bWJlciBvZiByb3dzIGFjY29yZGluZ2x5XG4vKiBNQUlOICovXG5sZXQgcXVpel9pbWc7XG5sZXQgZ2FtZV9lbmRlZDtcbmxldCBpbWFnZXNfdG9fc2hvdyA9IGdldFJhbmRvbVRodW1ibmFpbHMoYWxsX2F2YWlsYWJsZV9pbWFnZXMsIE5VTV9JTUFHRVNfVE9fU0hPVyk7XG5sZXQgbnVtX2NvbHM7XG4vKiBOQU1FIFBMQUNFSE9MREVSUyAqL1xuY29uc3QgcGxhY2Vob2xkZXJfbmFtZXMgPSBbXG4gICAgJ0FydGh1cicsICdDaGFybG90dGUnLCAnQXVkcmV5JywgJ0FsbHlzYScsXG4gICAgJ09jZWFuJywgJ0FuYWhpJywgJ05hdGFsaWUnLCAnSXNhYmVsJyxcbiAgICAnR3dlbmRvbHluJywgJ01hbmltb2xpJywgJ0pvc2lhaCcsICdCZXRoYW55JyxcbiAgICAnQWRhbScsICdKYXlkZW4nLCAnTmF0aGFuJ1xuXTtcbmNvbnN0IG5hbWVfcGxhY2Vob2xkZXIgPSBuZXcgVHlwZWQoJyNncmVldGluZy1uYW1lJywge1xuICAgIHN0cmluZ3M6IHBsYWNlaG9sZGVyX25hbWVzLFxuICAgIHR5cGVTcGVlZDogNTAsXG4gICAgYmFja1NwZWVkOiA1MCxcbiAgICBhdHRyOiAncGxhY2Vob2xkZXInLFxuICAgIGJpbmRJbnB1dEZvY3VzRXZlbnRzOiB0cnVlLFxuICAgIGxvb3A6IHRydWUsXG4gICAgYmFja0RlbGF5OiAxMDAwLFxuICAgIHNodWZmbGU6IHRydWVcbn0pO1xuLyogQVVESU8gKi9cbmNvbnN0IHdyb25nX2F1ZGlvID0gbmV3IEF1ZGlvKCdhc3NldHMvYXVkaW8vd3Jvbmcud2F2Jyk7XG5jb25zdCBjb3JyZWN0X2F1ZGlvID0gbmV3IEF1ZGlvKCdhc3NldHMvYXVkaW8vY29ycmVjdC53YXYnKTtcbmNvbnN0IHRhZGFfYXVkaW8gPSBuZXcgQXVkaW8oJ2Fzc2V0cy9hdWRpby90YWRhLndhdicpO1xuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbnJlbG9hZEdhbWUoaW1hZ2VzX3RvX3Nob3cpO1xuLyogRlVOQ1RJT04gREVGSU5JVElPTlMgKi9cbi8vIHJhbmRvbWx5IHJldHJpZXZlIGRlc2lyZWQgbnVtYmVyIG9mIHRodW1ibmFpbHMgZnJvbSBsaXN0XG5mdW5jdGlvbiBnZXRSYW5kb21UaHVtYm5haWxzKGFyciwgbnVtKSB7XG4gICAgbGV0IHJlc3VsdCA9IG5ldyBBcnJheShudW0pO1xuICAgIGxldCBsZW4gPSBhcnIubGVuZ3RoO1xuICAgIGxldCB0YWtlbiA9IG5ldyBBcnJheShsZW4pO1xuICAgIGlmIChudW0gPiBsZW4pXG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiZ2V0UmFuZG9tOiBtb3JlIGVsZW1lbnRzIHRha2VuIHRoYW4gYXZhaWxhYmxlXCIpO1xuICAgIHdoaWxlIChudW0tLSkge1xuICAgICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGVuKTtcbiAgICAgICAgcmVzdWx0W251bV0gPSBhcnJbeCBpbiB0YWtlbiA/IHRha2VuW3hdIDogeF07XG4gICAgICAgIHRha2VuW3hdID0gLS1sZW4gaW4gdGFrZW4gPyB0YWtlbltsZW5dIDogbGVuO1xuICAgIH1cbiAgICAvLyBpZiBudW0gaXMgMSwgcmV0dXJuIGp1c3QgdGhlIGZpcnN0IGVsZW1lbnQsIGVsc2UgcmV0dXJuIGFuIGFycmF5XG4gICAgcmV0dXJuIG51bSA9PT0gMSA/IHJlc3VsdFswXSA6IHJlc3VsdDtcbn1cbmZ1bmN0aW9uIHBhaW50SW1hZ2VzSW5HcmlkKGltYWdlcykge1xuICAgIG51bV9jb2xzID0gTWF0aC5jZWlsKGltYWdlc190b19zaG93Lmxlbmd0aCAvIE5VTV9ST1dTKTtcbiAgICBjb25zdCBpbnN0cnVjdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3RydWN0aW9uc1wiKTtcbiAgICBpbnN0cnVjdGlvbnMuaW5uZXJIVE1MID0gXCJVc2UgdGhlIGFycm93IGtleXMgKOKGkSwg4oaTLCDihpAsIOKGkikgdG8gZmluZCB5b3VyIGZhdm91cml0ZSB2ZWhpY2xlLCBwcmVzcyBFbmQgdG8gcmFuZG9taXNlIGltYWdlIGxvY2F0aW9uc1wiO1xuICAgIC8vIHNldCBudW1iZXIgb2Ygcm93cyBhbmQgY29sdW1ucyBpbiBDU1NcbiAgICBjb25zdCBnYWxsZXJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYWxsZXJ5XCIpO1xuICAgIGdhbGxlcnkuaW5uZXJIVE1MID0gXCJcIjsgLy8gY2xlYXIgdGhlIGdhbGxlcnkgYmVmb3JlIHBhaW50aW5nXG4gICAgZ2FsbGVyeS5zdHlsZS5ncmlkVGVtcGxhdGVSb3dzID0gYHJlcGVhdCgke05VTV9ST1dTfSwgMzAwcHgpYDtcbiAgICBnYWxsZXJ5LnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgcmVwZWF0KCR7bnVtX2NvbHN9LCA0MDBweClgO1xuICAgIGltYWdlcy5mb3JFYWNoKChmaWxlbmFtZSwgaW5kZXgpID0+IHtcbiAgICAgICAgLy8gcHJvZHVjZSB0aGUgZm9sbG93aW5nOiA8ZGl2IGlkPVwiJHtpbmRleH1cIiBjbGFzcz1cImdyaWQtaXRlbVwiPjxpbWcgc3JjPVwiYXNzZXRzLyR7ZmlsZW5hbWV9XCI+PC9kaXY+XG4gICAgICAgIGNvbnN0IGdhbGxlcnlfaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGdhbGxlcnlfaXRlbS5pZCA9IChpbmRleCArIDEpLnRvU3RyaW5nKCk7IC8vIGFkZCAxIHRvIHRoZSBpbmRleCB0byBwcm9jZXNzIG91ciBjYWxjdWxhdGlvblxuICAgICAgICBnYWxsZXJ5X2l0ZW0uY2xhc3NOYW1lID0gXCJncmlkLWl0ZW1cIjtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBpbWFnZS5zcmMgPSBgYXNzZXRzLyR7ZmlsZW5hbWV9YDtcbiAgICAgICAgZ2FsbGVyeV9pdGVtLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICAgICAgZ2FsbGVyeS5hcHBlbmRDaGlsZChnYWxsZXJ5X2l0ZW0pO1xuICAgICAgICAvLyBpZiB0aGlzIGlzIHRoZSBmaXJzdCBpbWFnZSwgc2V0IGl0IGFzIGFjdGl2ZVxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIGdhbGxlcnlfaXRlbS5jbGFzc05hbWUgKz0gXCIgYWN0aXZlXCI7XG4gICAgICAgICAgICBnYWxsZXJ5X2l0ZW0uc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gcGFpbnRRdWl6KGltZykge1xuICAgIGNvbnN0IHF1aXogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1aXpcIik7XG4gICAgcXVpei5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7IC8vIHNob3cgaXQgYWdhaW4gYmVjYXVzZSBpdCBnZXRzIGhpZGRlbiB3aGVuIGdhbWUgZW5kc1xuICAgIGNvbnN0IHF1aXpfaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWl6X2ltZ1wiKTtcbiAgICBxdWl6X2ltZy5zcmMgPSBgYXNzZXRzLyR7aW1nfWA7XG59XG5mdW5jdGlvbiByZWxvYWRHYW1lKGltYWdlcykge1xuICAgIGdhbWVfZW5kZWQgPSBmYWxzZTtcbiAgICBxdWl6X2ltZyA9IGdldFJhbmRvbVRodW1ibmFpbHMoaW1hZ2VzX3RvX3Nob3csIDEpO1xuICAgIHBhaW50SW1hZ2VzSW5HcmlkKGltYWdlc190b19zaG93KTtcbiAgICBwYWludFF1aXoocXVpel9pbWcpO1xufVxuZnVuY3Rpb24gZW5kR2FtZSgpIHtcbiAgICBnYW1lX2VuZGVkID0gdHJ1ZTtcbiAgICB0YWRhX2F1ZGlvLnBsYXkoKTtcbiAgICBjb25zdCBpbnN0cnVjdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3RydWN0aW9uc1wiKTtcbiAgICBpbnN0cnVjdGlvbnMuaW5uZXJIVE1MID0gXCJZb3Ugd2luISBQcmVzcyBhbnkga2V5IHRvIHJlc3RhcnQuXCI7XG4gICAgLy8gaGlkZSB0aGUgZ2FsbGVyeVxuICAgIGNvbnN0IGdhbGxlcnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbGxlcnlcIik7XG4gICAgZ2FsbGVyeS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIC8vIGhpZGUgdGhlIHF1aXogc2VjdGlvblxuICAgIGNvbnN0IHF1aXogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1aXpcIik7XG4gICAgcXVpei5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICB3aW5kb3cub25rZXlkb3duID0gKGV2KSA9PiB7XG4gICAgICAgIGlmIChldi5kZWZhdWx0UHJldmVudGVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBwcm9jZXNzS2V5KGV2LmtleSk7XG4gICAgICAgIGZ1bmN0aW9uIHByb2Nlc3NLZXkoa2V5KSB7XG4gICAgICAgICAgICBpZiAoZ2FtZV9lbmRlZCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIGdhbWUgaGFzIGVuZGVkLCBwcmVzcyBhbnkga2V5IHRvIHJlc3RhcnQuXG4gICAgICAgICAgICAgICAgaW1hZ2VzX3RvX3Nob3cgPSBnZXRSYW5kb21UaHVtYm5haWxzKGFsbF9hdmFpbGFibGVfaW1hZ2VzLCBOVU1fSU1BR0VTX1RPX1NIT1cpO1xuICAgICAgICAgICAgICAgIHJlbG9hZEdhbWUoaW1hZ2VzX3RvX3Nob3cpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY3VycmVudF9pbmRleCA9ICtkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWN0aXZlXCIpWzBdLmlkO1xuICAgICAgICAgICAgbGV0IG5ld19pbmRleDtcbiAgICAgICAgICAgIGlmIChrZXkgPT09IFwiQXJyb3dVcFwiICYmIGN1cnJlbnRfaW5kZXggLSBudW1fY29scyA+IDApIHtcbiAgICAgICAgICAgICAgICBuZXdfaW5kZXggPSBjdXJyZW50X2luZGV4IC0gbnVtX2NvbHM7XG4gICAgICAgICAgICAgICAgdG9nZ2xlQWN0aXZlKGN1cnJlbnRfaW5kZXgsIG5ld19pbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChrZXkgPT09IFwiQXJyb3dEb3duXCIgJiYgY3VycmVudF9pbmRleCArIG51bV9jb2xzIDw9IGltYWdlc190b19zaG93Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG5ld19pbmRleCA9IGN1cnJlbnRfaW5kZXggKyBudW1fY29scztcbiAgICAgICAgICAgICAgICB0b2dnbGVBY3RpdmUoY3VycmVudF9pbmRleCwgbmV3X2luZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGtleSA9PT0gXCJBcnJvd0xlZnRcIiAmJiBjdXJyZW50X2luZGV4ICUgbnVtX2NvbHMgIT0gMSAmJiBudW1fY29scyAhPT0gMSkge1xuICAgICAgICAgICAgICAgIG5ld19pbmRleCA9IGN1cnJlbnRfaW5kZXggLSAxO1xuICAgICAgICAgICAgICAgIHRvZ2dsZUFjdGl2ZShjdXJyZW50X2luZGV4LCBuZXdfaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoa2V5ID09PSBcIkFycm93UmlnaHRcIiAmJiBjdXJyZW50X2luZGV4ICUgbnVtX2NvbHMgIT0gMCAmJiBjdXJyZW50X2luZGV4ICsgMSA8PSBpbWFnZXNfdG9fc2hvdy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBuZXdfaW5kZXggPSBjdXJyZW50X2luZGV4ICsgMTtcbiAgICAgICAgICAgICAgICB0b2dnbGVBY3RpdmUoY3VycmVudF9pbmRleCwgbmV3X2luZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudF9pbWFnZSA9IGltYWdlc190b19zaG93W2N1cnJlbnRfaW5kZXggLSAxXTtcbiAgICAgICAgICAgICAgICAvLyBpZiBmaWxlbmFtZSBtYXRjaGVzLCByZW1vdmUgdGh1bWJuYWlsLiBlbmQgZ2FtZSB3aGVuIHRoZXJlIGFyZSBubyBtb3JlIGltYWdlc1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50X2ltYWdlID09IHF1aXpfaW1nKSB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlc190b19zaG93LnNwbGljZShjdXJyZW50X2luZGV4IC0gMSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlc190b19zaG93Lmxlbmd0aCA9PSAwID8gZW5kR2FtZSgpIDogcmVsb2FkR2FtZShpbWFnZXNfdG9fc2hvdyk7XG4gICAgICAgICAgICAgICAgICAgIGNvcnJlY3RfYXVkaW8ucGxheSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd3JvbmdfYXVkaW8ucGxheSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGtleSA9PT0gXCJFbmRcIikge1xuICAgICAgICAgICAgICAgIC8vIGlmIHVzZXIgcHJlc3NlcyBFbmQsIHJlZnJlc2ggcGFnZSB0byByYW5kb21pc2UgaW1hZ2VzIGFnYWluLlxuICAgICAgICAgICAgICAgIC8vIHdlIHVzZSBFbmQgdG8gcHJvdmlkZSBjb252ZW5pZW5jZSB0byB1c2VycyBiZWNhdXNlIGl0J3MgbmVhciB0aGUgYXJyb3cga2V5cyBvbiBteSBrZXlib2FyZC5cbiAgICAgICAgICAgICAgICBpbWFnZXNfdG9fc2hvdyA9IGdldFJhbmRvbVRodW1ibmFpbHMoYWxsX2F2YWlsYWJsZV9pbWFnZXMsIE5VTV9JTUFHRVNfVE9fU0hPVyk7XG4gICAgICAgICAgICAgICAgcmVsb2FkR2FtZShpbWFnZXNfdG9fc2hvdyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChrZXkubWF0Y2goL15bYS16MC05XSQvaSkgfHwga2V5ID09PSBcIiBcIiB8fCBrZXkgPT09IFwiQmFja3NwYWNlXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB1c2VyIHByZXNzZXMgYW55dGhpbmcgYWxwaGFudW1lcmljLCBhc3N1bWUgdGhleSBhcmUgdHlwaW5nIGEgbmFtZSBhbmQgc3RhcnQgcG9wdWxhdGluZyB0aGUgdGV4dGZpZWxkXG4gICAgICAgICAgICAgICAgLy8gcHJlc3NpbmcgQmFja3NwYWNlIHdpbGwgcmVkdWNlIG9uZSBjaGFyYWN0ZXIgZnJvbSB0aGUgdGV4dGZpZWxkLCB3aGlsZSBhbGwgb3RoZXIgYWxwaGFudW1lcmljIHdpbGwgYmUgYXBwZW5kZWQgdG8gdGhlIHRleHRmaWVsZCB1cCB0byBhIG1heGltdW0gb2YgMTAgY2hhcmFjdGVycy5cbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50X3RleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JlZXRpbmctbmFtZScpLnZhbHVlO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdncmVldGluZy1uYW1lJykudmFsdWUgPSAoa2V5ID09PSBcIkJhY2tzcGFjZVwiID8gY3VycmVudF90ZXh0LnNsaWNlKDAsIC0xKSA6IGN1cnJlbnRfdGV4dC5jb25jYXQoa2V5KS5zbGljZSgwLCAxMCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZUFjdGl2ZShpbmRleF90b19yZW1vdmUsIGluZGV4X3RvX2FkZCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5kZXhfdG9fcmVtb3ZlLnRvU3RyaW5nKCkpPy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5kZXhfdG9fYWRkLnRvU3RyaW5nKCkpPy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5kZXhfdG9fYWRkLnRvU3RyaW5nKCkpPy5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==