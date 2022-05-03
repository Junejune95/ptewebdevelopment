(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-manage-users-user-module"],{

/***/ "./node_modules/croppie/croppie.js":
/*!*****************************************!*\
  !*** ./node_modules/croppie/croppie.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*************************
 * Croppie
 * Copyright 2019
 * Foliotek
 * Version: 2.6.4
 *************************/
(function (root, factory) {
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(typeof self !== 'undefined' ? self : this, function () {

    /* Polyfills */
    if (typeof Promise !== 'function') {
        /*! promise-polyfill 3.1.0 */
        !function(a){function b(a,b){return function(){a.apply(b,arguments)}}function c(a){if("object"!==typeof this)throw new TypeError("Promises must be constructed via new");if("function"!==typeof a)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],i(a,b(e,this),b(f,this))}function d(a){var b=this;return null===this._state?void this._deferreds.push(a):void k(function(){var c=b._state?a.onFulfilled:a.onRejected;if(null===c)return void(b._state?a.resolve:a.reject)(b._value);var d;try{d=c(b._value)}catch(e){return void a.reject(e)}a.resolve(d)})}function e(a){try{if(a===this)throw new TypeError("A promise cannot be resolved with itself.");if(a&&("object"===typeof a||"function"===typeof a)){var c=a.then;if("function"===typeof c)return void i(b(c,a),b(e,this),b(f,this))}this._state=!0,this._value=a,g.call(this)}catch(d){f.call(this,d)}}function f(a){this._state=!1,this._value=a,g.call(this)}function g(){for(var a=0,b=this._deferreds.length;b>a;a++)d.call(this,this._deferreds[a]);this._deferreds=null}function h(a,b,c,d){this.onFulfilled="function"===typeof a?a:null,this.onRejected="function"===typeof b?b:null,this.resolve=c,this.reject=d}function i(a,b,c){var d=!1;try{a(function(a){d||(d=!0,b(a))},function(a){d||(d=!0,c(a))})}catch(e){if(d)return;d=!0,c(e)}}var j=setTimeout,k="function"===typeof setImmediate&&setImmediate||function(a){j(a,1)},l=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)};c.prototype["catch"]=function(a){return this.then(null,a)},c.prototype.then=function(a,b){var e=this;return new c(function(c,f){d.call(e,new h(a,b,c,f))})},c.all=function(){var a=Array.prototype.slice.call(1===arguments.length&&l(arguments[0])?arguments[0]:arguments);return new c(function(b,c){function d(f,g){try{if(g&&("object"===typeof g||"function"===typeof g)){var h=g.then;if("function"===typeof h)return void h.call(g,function(a){d(f,a)},c)}a[f]=g,0===--e&&b(a)}catch(i){c(i)}}if(0===a.length)return b([]);for(var e=a.length,f=0;f<a.length;f++)d(f,a[f])})},c.resolve=function(a){return a&&"object"===typeof a&&a.constructor===c?a:new c(function(b){b(a)})},c.reject=function(a){return new c(function(b,c){c(a)})},c.race=function(a){return new c(function(b,c){for(var d=0,e=a.length;e>d;d++)a[d].then(b,c)})},c._setImmediateFn=function(a){k=a}, true&&module.exports?module.exports=c:a.Promise||(a.Promise=c)}(this);
    }

    if ( typeof window.CustomEvent !== "function" ) {
        (function(){
            function CustomEvent ( event, params ) {
                params = params || { bubbles: false, cancelable: false, detail: undefined };
                var evt = document.createEvent( 'CustomEvent' );
                evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
                return evt;
            }
            CustomEvent.prototype = window.Event.prototype;
            window.CustomEvent = CustomEvent;
        }());
    }

    if (!HTMLCanvasElement.prototype.toBlob) {
        Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
            value: function (callback, type, quality) {
                var binStr = atob( this.toDataURL(type, quality).split(',')[1] ),
                len = binStr.length,
                arr = new Uint8Array(len);

                for (var i=0; i<len; i++ ) {
                    arr[i] = binStr.charCodeAt(i);
                }

                callback( new Blob( [arr], {type: type || 'image/png'} ) );
            }
        });
    }
    /* End Polyfills */

    var cssPrefixes = ['Webkit', 'Moz', 'ms'],
        emptyStyles = document.createElement('div').style,
        EXIF_NORM = [1,8,3,6],
        EXIF_FLIP = [2,7,4,5],
        CSS_TRANS_ORG,
        CSS_TRANSFORM,
        CSS_USERSELECT;

    function vendorPrefix(prop) {
        if (prop in emptyStyles) {
            return prop;
        }

        var capProp = prop[0].toUpperCase() + prop.slice(1),
            i = cssPrefixes.length;

        while (i--) {
            prop = cssPrefixes[i] + capProp;
            if (prop in emptyStyles) {
                return prop;
            }
        }
    }

    CSS_TRANSFORM = vendorPrefix('transform');
    CSS_TRANS_ORG = vendorPrefix('transformOrigin');
    CSS_USERSELECT = vendorPrefix('userSelect');

    function getExifOffset(ornt, rotate) {
        var arr = EXIF_NORM.indexOf(ornt) > -1 ? EXIF_NORM : EXIF_FLIP,
            index = arr.indexOf(ornt),
            offset = (rotate / 90) % arr.length;// 180 = 2%4 = 2 shift exif by 2 indexes

        return arr[(arr.length + index + (offset % arr.length)) % arr.length];
    }

    // Credits to : Andrew Dupont - http://andrewdupont.net/2009/08/28/deep-extending-objects-in-javascript/
    function deepExtend(destination, source) {
        destination = destination || {};
        for (var property in source) {
            if (source[property] && source[property].constructor && source[property].constructor === Object) {
                destination[property] = destination[property] || {};
                deepExtend(destination[property], source[property]);
            } else {
                destination[property] = source[property];
            }
        }
        return destination;
    }

    function clone(object) {
        return deepExtend({}, object);
    }

    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    function dispatchChange(element) {
        if ("createEvent" in document) {
            var evt = document.createEvent("HTMLEvents");
            evt.initEvent("change", false, true);
            element.dispatchEvent(evt);
        }
        else {
            element.fireEvent("onchange");
        }
    }

    //http://jsperf.com/vanilla-css
    function css(el, styles, val) {
        if (typeof (styles) === 'string') {
            var tmp = styles;
            styles = {};
            styles[tmp] = val;
        }

        for (var prop in styles) {
            el.style[prop] = styles[prop];
        }
    }

    function addClass(el, c) {
        if (el.classList) {
            el.classList.add(c);
        }
        else {
            el.className += ' ' + c;
        }
    }

    function removeClass(el, c) {
        if (el.classList) {
            el.classList.remove(c);
        }
        else {
            el.className = el.className.replace(c, '');
        }
    }

    function setAttributes(el, attrs) {
        for (var key in attrs) {
            el.setAttribute(key, attrs[key]);
        }
    }

    function num(v) {
        return parseInt(v, 10);
    }

    /* Utilities */
    function loadImage(src, doExif) {
        var img = new Image();
        img.style.opacity = '0';
        return new Promise(function (resolve, reject) {
            function _resolve() {
                img.style.opacity = '1';
                setTimeout(function () {
                    resolve(img);
                }, 1);
            }

            img.removeAttribute('crossOrigin');
            if (src.match(/^https?:\/\/|^\/\//)) {
                img.setAttribute('crossOrigin', 'anonymous');
            }

            img.onload = function () {
                if (doExif) {
                    EXIF.getData(img, function () {
                        _resolve();
                    });
                }
                else {
                    _resolve();
                }
            };
            img.onerror = function (ev) {
                img.style.opacity = 1;
                setTimeout(function () {
                    reject(ev);
                }, 1);
            };
            img.src = src;
        });
    }

    function naturalImageDimensions(img, ornt) {
        var w = img.naturalWidth;
        var h = img.naturalHeight;
        var orient = ornt || getExifOrientation(img);
        if (orient && orient >= 5) {
            var x= w;
            w = h;
            h = x;
        }
        return { width: w, height: h };
    }

    /* CSS Transform Prototype */
    var TRANSLATE_OPTS = {
        'translate3d': {
            suffix: ', 0px'
        },
        'translate': {
            suffix: ''
        }
    };
    var Transform = function (x, y, scale) {
        this.x = parseFloat(x);
        this.y = parseFloat(y);
        this.scale = parseFloat(scale);
    };

    Transform.parse = function (v) {
        if (v.style) {
            return Transform.parse(v.style[CSS_TRANSFORM]);
        }
        else if (v.indexOf('matrix') > -1 || v.indexOf('none') > -1) {
            return Transform.fromMatrix(v);
        }
        else {
            return Transform.fromString(v);
        }
    };

    Transform.fromMatrix = function (v) {
        var vals = v.substring(7).split(',');
        if (!vals.length || v === 'none') {
            vals = [1, 0, 0, 1, 0, 0];
        }

        return new Transform(num(vals[4]), num(vals[5]), parseFloat(vals[0]));
    };

    Transform.fromString = function (v) {
        var values = v.split(') '),
            translate = values[0].substring(Croppie.globals.translate.length + 1).split(','),
            scale = values.length > 1 ? values[1].substring(6) : 1,
            x = translate.length > 1 ? translate[0] : 0,
            y = translate.length > 1 ? translate[1] : 0;

        return new Transform(x, y, scale);
    };

    Transform.prototype.toString = function () {
        var suffix = TRANSLATE_OPTS[Croppie.globals.translate].suffix || '';
        return Croppie.globals.translate + '(' + this.x + 'px, ' + this.y + 'px' + suffix + ') scale(' + this.scale + ')';
    };

    var TransformOrigin = function (el) {
        if (!el || !el.style[CSS_TRANS_ORG]) {
            this.x = 0;
            this.y = 0;
            return;
        }
        var css = el.style[CSS_TRANS_ORG].split(' ');
        this.x = parseFloat(css[0]);
        this.y = parseFloat(css[1]);
    };

    TransformOrigin.prototype.toString = function () {
        return this.x + 'px ' + this.y + 'px';
    };

    function getExifOrientation (img) {
        return img.exifdata && img.exifdata.Orientation ? num(img.exifdata.Orientation) : 1;
    }

    function drawCanvas(canvas, img, orientation) {
        var width = img.width,
            height = img.height,
            ctx = canvas.getContext('2d');

        canvas.width = img.width;
        canvas.height = img.height;

        ctx.save();
        switch (orientation) {
          case 2:
             ctx.translate(width, 0);
             ctx.scale(-1, 1);
             break;

          case 3:
              ctx.translate(width, height);
              ctx.rotate(180*Math.PI/180);
              break;

          case 4:
              ctx.translate(0, height);
              ctx.scale(1, -1);
              break;

          case 5:
              canvas.width = height;
              canvas.height = width;
              ctx.rotate(90*Math.PI/180);
              ctx.scale(1, -1);
              break;

          case 6:
              canvas.width = height;
              canvas.height = width;
              ctx.rotate(90*Math.PI/180);
              ctx.translate(0, -height);
              break;

          case 7:
              canvas.width = height;
              canvas.height = width;
              ctx.rotate(-90*Math.PI/180);
              ctx.translate(-width, height);
              ctx.scale(1, -1);
              break;

          case 8:
              canvas.width = height;
              canvas.height = width;
              ctx.translate(0, width);
              ctx.rotate(-90*Math.PI/180);
              break;
        }
        ctx.drawImage(img, 0,0, width, height);
        ctx.restore();
    }

    /* Private Methods */
    function _create() {
        var self = this,
            contClass = 'croppie-container',
            customViewportClass = self.options.viewport.type ? 'cr-vp-' + self.options.viewport.type : null,
            boundary, img, viewport, overlay, bw, bh;

        self.options.useCanvas = self.options.enableOrientation || _hasExif.call(self);
        // Properties on class
        self.data = {};
        self.elements = {};

        boundary = self.elements.boundary = document.createElement('div');
        viewport = self.elements.viewport = document.createElement('div');
        img = self.elements.img = document.createElement('img');
        overlay = self.elements.overlay = document.createElement('div');

        if (self.options.useCanvas) {
            self.elements.canvas = document.createElement('canvas');
            self.elements.preview = self.elements.canvas;
        }
        else {
            self.elements.preview = img;
        }

        addClass(boundary, 'cr-boundary');
        boundary.setAttribute('aria-dropeffect', 'none');
        bw = self.options.boundary.width;
        bh = self.options.boundary.height;
        css(boundary, {
            width: (bw + (isNaN(bw) ? '' : 'px')),
            height: (bh + (isNaN(bh) ? '' : 'px'))
        });

        addClass(viewport, 'cr-viewport');
        if (customViewportClass) {
            addClass(viewport, customViewportClass);
        }
        css(viewport, {
            width: self.options.viewport.width + 'px',
            height: self.options.viewport.height + 'px'
        });
        viewport.setAttribute('tabindex', 0);

        addClass(self.elements.preview, 'cr-image');
        setAttributes(self.elements.preview, { 'alt': 'preview', 'aria-grabbed': 'false' });
        addClass(overlay, 'cr-overlay');

        self.element.appendChild(boundary);
        boundary.appendChild(self.elements.preview);
        boundary.appendChild(viewport);
        boundary.appendChild(overlay);

        addClass(self.element, contClass);
        if (self.options.customClass) {
            addClass(self.element, self.options.customClass);
        }

        _initDraggable.call(this);

        if (self.options.enableZoom) {
            _initializeZoom.call(self);
        }

        // if (self.options.enableOrientation) {
        //     _initRotationControls.call(self);
        // }

        if (self.options.enableResize) {
            _initializeResize.call(self);
        }
    }

    // function _initRotationControls () {
    //     var self = this,
    //         wrap, btnLeft, btnRight, iLeft, iRight;

    //     wrap = document.createElement('div');
    //     self.elements.orientationBtnLeft = btnLeft = document.createElement('button');
    //     self.elements.orientationBtnRight = btnRight = document.createElement('button');

    //     wrap.appendChild(btnLeft);
    //     wrap.appendChild(btnRight);

    //     iLeft = document.createElement('i');
    //     iRight = document.createElement('i');
    //     btnLeft.appendChild(iLeft);
    //     btnRight.appendChild(iRight);

    //     addClass(wrap, 'cr-rotate-controls');
    //     addClass(btnLeft, 'cr-rotate-l');
    //     addClass(btnRight, 'cr-rotate-r');

    //     self.elements.boundary.appendChild(wrap);

    //     btnLeft.addEventListener('click', function () {
    //         self.rotate(-90);
    //     });
    //     btnRight.addEventListener('click', function () {
    //         self.rotate(90);
    //     });
    // }

    function _hasExif() {
        return this.options.enableExif && window.EXIF;
    }

    function _initializeResize () {
        var self = this;
        var wrap = document.createElement('div');
        var isDragging = false;
        var direction;
        var originalX;
        var originalY;
        var minSize = 50;
        var maxWidth;
        var maxHeight;
        var vr;
        var hr;

        addClass(wrap, 'cr-resizer');
        css(wrap, {
            width: this.options.viewport.width + 'px',
            height: this.options.viewport.height + 'px'
        });

        if (this.options.resizeControls.height) {
            vr = document.createElement('div');
            addClass(vr, 'cr-resizer-vertical');
            wrap.appendChild(vr);
        }

        if (this.options.resizeControls.width) {
            hr = document.createElement('div');
            addClass(hr, 'cr-resizer-horisontal');
            wrap.appendChild(hr);
        }

        function mouseDown(ev) {
            if (ev.button !== undefined && ev.button !== 0) return;

            ev.preventDefault();
            if (isDragging) {
                return;
            }

            var overlayRect = self.elements.overlay.getBoundingClientRect();

            isDragging = true;
            originalX = ev.pageX;
            originalY = ev.pageY;
            direction = ev.currentTarget.className.indexOf('vertical') !== -1 ? 'v' : 'h';
            maxWidth = overlayRect.width;
            maxHeight = overlayRect.height;

            if (ev.touches) {
                var touches = ev.touches[0];
                originalX = touches.pageX;
                originalY = touches.pageY;
            }

            window.addEventListener('mousemove', mouseMove);
            window.addEventListener('touchmove', mouseMove);
            window.addEventListener('mouseup', mouseUp);
            window.addEventListener('touchend', mouseUp);
            document.body.style[CSS_USERSELECT] = 'none';
        }

        function mouseMove(ev) {
            var pageX = ev.pageX;
            var pageY = ev.pageY;

            ev.preventDefault();

            if (ev.touches) {
                var touches = ev.touches[0];
                pageX = touches.pageX;
                pageY = touches.pageY;
            }

            var deltaX = pageX - originalX;
            var deltaY = pageY - originalY;
            var newHeight = self.options.viewport.height + deltaY;
            var newWidth = self.options.viewport.width + deltaX;

            if (direction === 'v' && newHeight >= minSize && newHeight <= maxHeight) {
                css(wrap, {
                    height: newHeight + 'px'
                });

                self.options.boundary.height += deltaY;
                css(self.elements.boundary, {
                    height: self.options.boundary.height + 'px'
                });

                self.options.viewport.height += deltaY;
                css(self.elements.viewport, {
                    height: self.options.viewport.height + 'px'
                });
            }
            else if (direction === 'h' && newWidth >= minSize && newWidth <= maxWidth) {
                css(wrap, {
                    width: newWidth + 'px'
                });

                self.options.boundary.width += deltaX;
                css(self.elements.boundary, {
                    width: self.options.boundary.width + 'px'
                });

                self.options.viewport.width += deltaX;
                css(self.elements.viewport, {
                    width: self.options.viewport.width + 'px'
                });
            }

            _updateOverlay.call(self);
            _updateZoomLimits.call(self);
            _updateCenterPoint.call(self);
            _triggerUpdate.call(self);
            originalY = pageY;
            originalX = pageX;
        }

        function mouseUp() {
            isDragging = false;
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('touchmove', mouseMove);
            window.removeEventListener('mouseup', mouseUp);
            window.removeEventListener('touchend', mouseUp);
            document.body.style[CSS_USERSELECT] = '';
        }

        if (vr) {
            vr.addEventListener('mousedown', mouseDown);
            vr.addEventListener('touchstart', mouseDown);
        }

        if (hr) {
            hr.addEventListener('mousedown', mouseDown);
            hr.addEventListener('touchstart', mouseDown);
        }

        this.elements.boundary.appendChild(wrap);
    }

    function _setZoomerVal(v) {
        if (this.options.enableZoom) {
            var z = this.elements.zoomer,
                val = fix(v, 4);

            z.value = Math.max(parseFloat(z.min), Math.min(parseFloat(z.max), val)).toString();
        }
    }

    function _initializeZoom() {
        var self = this,
            wrap = self.elements.zoomerWrap = document.createElement('div'),
            zoomer = self.elements.zoomer = document.createElement('input');

        addClass(wrap, 'cr-slider-wrap');
        addClass(zoomer, 'cr-slider');
        zoomer.type = 'range';
        zoomer.step = '0.0001';
        zoomer.value = '1';
        zoomer.style.display = self.options.showZoomer ? '' : 'none';
        zoomer.setAttribute('aria-label', 'zoom');

        self.element.appendChild(wrap);
        wrap.appendChild(zoomer);

        self._currentZoom = 1;

        function change() {
            _onZoom.call(self, {
                value: parseFloat(zoomer.value),
                origin: new TransformOrigin(self.elements.preview),
                viewportRect: self.elements.viewport.getBoundingClientRect(),
                transform: Transform.parse(self.elements.preview)
            });
        }

        function scroll(ev) {
            var delta, targetZoom;

            if(self.options.mouseWheelZoom === 'ctrl' && ev.ctrlKey !== true){
              return 0; 
            } else if (ev.wheelDelta) {
                delta = ev.wheelDelta / 1200; //wheelDelta min: -120 max: 120 // max x 10 x 2
            } else if (ev.deltaY) {
                delta = ev.deltaY / 1060; //deltaY min: -53 max: 53 // max x 10 x 2
            } else if (ev.detail) {
                delta = ev.detail / -60; //delta min: -3 max: 3 // max x 10 x 2
            } else {
                delta = 0;
            }

            targetZoom = self._currentZoom + (delta * self._currentZoom);

            ev.preventDefault();
            _setZoomerVal.call(self, targetZoom);
            change.call(self);
        }

        self.elements.zoomer.addEventListener('input', change);// this is being fired twice on keypress
        self.elements.zoomer.addEventListener('change', change);

        if (self.options.mouseWheelZoom) {
            self.elements.boundary.addEventListener('mousewheel', scroll);
            self.elements.boundary.addEventListener('DOMMouseScroll', scroll);
        }
    }

    function _onZoom(ui) {
        var self = this,
            transform = ui ? ui.transform : Transform.parse(self.elements.preview),
            vpRect = ui ? ui.viewportRect : self.elements.viewport.getBoundingClientRect(),
            origin = ui ? ui.origin : new TransformOrigin(self.elements.preview);

        function applyCss() {
            var transCss = {};
            transCss[CSS_TRANSFORM] = transform.toString();
            transCss[CSS_TRANS_ORG] = origin.toString();
            css(self.elements.preview, transCss);
        }

        self._currentZoom = ui ? ui.value : self._currentZoom;
        transform.scale = self._currentZoom;
        self.elements.zoomer.setAttribute('aria-valuenow', self._currentZoom);
        applyCss();

        if (self.options.enforceBoundary) {
            var boundaries = _getVirtualBoundaries.call(self, vpRect),
                transBoundaries = boundaries.translate,
                oBoundaries = boundaries.origin;

            if (transform.x >= transBoundaries.maxX) {
                origin.x = oBoundaries.minX;
                transform.x = transBoundaries.maxX;
            }

            if (transform.x <= transBoundaries.minX) {
                origin.x = oBoundaries.maxX;
                transform.x = transBoundaries.minX;
            }

            if (transform.y >= transBoundaries.maxY) {
                origin.y = oBoundaries.minY;
                transform.y = transBoundaries.maxY;
            }

            if (transform.y <= transBoundaries.minY) {
                origin.y = oBoundaries.maxY;
                transform.y = transBoundaries.minY;
            }
        }
        applyCss();
        _debouncedOverlay.call(self);
        _triggerUpdate.call(self);
    }

    function _getVirtualBoundaries(viewport) {
        var self = this,
            scale = self._currentZoom,
            vpWidth = viewport.width,
            vpHeight = viewport.height,
            centerFromBoundaryX = self.elements.boundary.clientWidth / 2,
            centerFromBoundaryY = self.elements.boundary.clientHeight / 2,
            imgRect = self.elements.preview.getBoundingClientRect(),
            curImgWidth = imgRect.width,
            curImgHeight = imgRect.height,
            halfWidth = vpWidth / 2,
            halfHeight = vpHeight / 2;

        var maxX = ((halfWidth / scale) - centerFromBoundaryX) * -1;
        var minX = maxX - ((curImgWidth * (1 / scale)) - (vpWidth * (1 / scale)));

        var maxY = ((halfHeight / scale) - centerFromBoundaryY) * -1;
        var minY = maxY - ((curImgHeight * (1 / scale)) - (vpHeight * (1 / scale)));

        var originMinX = (1 / scale) * halfWidth;
        var originMaxX = (curImgWidth * (1 / scale)) - originMinX;

        var originMinY = (1 / scale) * halfHeight;
        var originMaxY = (curImgHeight * (1 / scale)) - originMinY;

        return {
            translate: {
                maxX: maxX,
                minX: minX,
                maxY: maxY,
                minY: minY
            },
            origin: {
                maxX: originMaxX,
                minX: originMinX,
                maxY: originMaxY,
                minY: originMinY
            }
        };
    }

    function _updateCenterPoint(rotate) {
        var self = this,
            scale = self._currentZoom,
            data = self.elements.preview.getBoundingClientRect(),
            vpData = self.elements.viewport.getBoundingClientRect(),
            transform = Transform.parse(self.elements.preview.style[CSS_TRANSFORM]),
            pc = new TransformOrigin(self.elements.preview),
            top = (vpData.top - data.top) + (vpData.height / 2),
            left = (vpData.left - data.left) + (vpData.width / 2),
            center = {},
            adj = {};

        if (rotate) {
            var cx = pc.x;
            var cy = pc.y;
            var tx = transform.x;
            var ty = transform.y;

            center.y = cx;
            center.x = cy;
            transform.y = tx;
            transform.x = ty;
        }
        else {
            center.y = top / scale;
            center.x = left / scale;

            adj.y = (center.y - pc.y) * (1 - scale);
            adj.x = (center.x - pc.x) * (1 - scale);

            transform.x -= adj.x;
            transform.y -= adj.y;
        }

        var newCss = {};
        newCss[CSS_TRANS_ORG] = center.x + 'px ' + center.y + 'px';
        newCss[CSS_TRANSFORM] = transform.toString();
        css(self.elements.preview, newCss);
    }

    function _initDraggable() {
        var self = this,
            isDragging = false,
            originalX,
            originalY,
            originalDistance,
            vpRect,
            transform;

        function assignTransformCoordinates(deltaX, deltaY) {
            var imgRect = self.elements.preview.getBoundingClientRect(),
                top = transform.y + deltaY,
                left = transform.x + deltaX;

            if (self.options.enforceBoundary) {
                if (vpRect.top > imgRect.top + deltaY && vpRect.bottom < imgRect.bottom + deltaY) {
                    transform.y = top;
                }

                if (vpRect.left > imgRect.left + deltaX && vpRect.right < imgRect.right + deltaX) {
                    transform.x = left;
                }
            }
            else {
                transform.y = top;
                transform.x = left;
            }
        }

        function toggleGrabState(isDragging) {
          self.elements.preview.setAttribute('aria-grabbed', isDragging);
          self.elements.boundary.setAttribute('aria-dropeffect', isDragging? 'move': 'none');
        }

        function keyDown(ev) {
            var LEFT_ARROW  = 37,
                UP_ARROW    = 38,
                RIGHT_ARROW = 39,
                DOWN_ARROW  = 40;

            if (ev.shiftKey && (ev.keyCode === UP_ARROW || ev.keyCode === DOWN_ARROW)) {
                var zoom;
                if (ev.keyCode === UP_ARROW) {
                    zoom = parseFloat(self.elements.zoomer.value) + parseFloat(self.elements.zoomer.step)
                }
                else {
                    zoom = parseFloat(self.elements.zoomer.value) - parseFloat(self.elements.zoomer.step)
                }
                self.setZoom(zoom);
            }
            else if (self.options.enableKeyMovement && (ev.keyCode >= 37 && ev.keyCode <= 40)) {
                ev.preventDefault();
                var movement = parseKeyDown(ev.keyCode);

                transform = Transform.parse(self.elements.preview);
                document.body.style[CSS_USERSELECT] = 'none';
                vpRect = self.elements.viewport.getBoundingClientRect();
                keyMove(movement);
            }

            function parseKeyDown(key) {
                switch (key) {
                    case LEFT_ARROW:
                        return [1, 0];
                    case UP_ARROW:
                        return [0, 1];
                    case RIGHT_ARROW:
                        return [-1, 0];
                    case DOWN_ARROW:
                        return [0, -1];
                }
            }
        }

        function keyMove(movement) {
            var deltaX = movement[0],
                deltaY = movement[1],
                newCss = {};

            assignTransformCoordinates(deltaX, deltaY);

            newCss[CSS_TRANSFORM] = transform.toString();
            css(self.elements.preview, newCss);
            _updateOverlay.call(self);
            document.body.style[CSS_USERSELECT] = '';
            _updateCenterPoint.call(self);
            _triggerUpdate.call(self);
            originalDistance = 0;
        }

        function mouseDown(ev) {
            if (ev.button !== undefined && ev.button !== 0) return;

            ev.preventDefault();
            if (isDragging) return;
            isDragging = true;
            originalX = ev.pageX;
            originalY = ev.pageY;

            if (ev.touches) {
                var touches = ev.touches[0];
                originalX = touches.pageX;
                originalY = touches.pageY;
            }
            toggleGrabState(isDragging);
            transform = Transform.parse(self.elements.preview);
            window.addEventListener('mousemove', mouseMove);
            window.addEventListener('touchmove', mouseMove);
            window.addEventListener('mouseup', mouseUp);
            window.addEventListener('touchend', mouseUp);
            document.body.style[CSS_USERSELECT] = 'none';
            vpRect = self.elements.viewport.getBoundingClientRect();
        }

        function mouseMove(ev) {
            ev.preventDefault();
            var pageX = ev.pageX,
                pageY = ev.pageY;

            if (ev.touches) {
                var touches = ev.touches[0];
                pageX = touches.pageX;
                pageY = touches.pageY;
            }

            var deltaX = pageX - originalX,
                deltaY = pageY - originalY,
                newCss = {};

            if (ev.type === 'touchmove') {
                if (ev.touches.length > 1) {
                    var touch1 = ev.touches[0];
                    var touch2 = ev.touches[1];
                    var dist = Math.sqrt((touch1.pageX - touch2.pageX) * (touch1.pageX - touch2.pageX) + (touch1.pageY - touch2.pageY) * (touch1.pageY - touch2.pageY));

                    if (!originalDistance) {
                        originalDistance = dist / self._currentZoom;
                    }

                    var scale = dist / originalDistance;

                    _setZoomerVal.call(self, scale);
                    dispatchChange(self.elements.zoomer);
                    return;
                }
            }

            assignTransformCoordinates(deltaX, deltaY);

            newCss[CSS_TRANSFORM] = transform.toString();
            css(self.elements.preview, newCss);
            _updateOverlay.call(self);
            originalY = pageY;
            originalX = pageX;
        }

        function mouseUp() {
            isDragging = false;
            toggleGrabState(isDragging);
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('touchmove', mouseMove);
            window.removeEventListener('mouseup', mouseUp);
            window.removeEventListener('touchend', mouseUp);
            document.body.style[CSS_USERSELECT] = '';
            _updateCenterPoint.call(self);
            _triggerUpdate.call(self);
            originalDistance = 0;
        }

        self.elements.overlay.addEventListener('mousedown', mouseDown);
        self.elements.viewport.addEventListener('keydown', keyDown);
        self.elements.overlay.addEventListener('touchstart', mouseDown);
    }

    function _updateOverlay() {
        if (!this.elements) return; // since this is debounced, it can be fired after destroy
        var self = this,
            boundRect = self.elements.boundary.getBoundingClientRect(),
            imgData = self.elements.preview.getBoundingClientRect();

        css(self.elements.overlay, {
            width: imgData.width + 'px',
            height: imgData.height + 'px',
            top: (imgData.top - boundRect.top) + 'px',
            left: (imgData.left - boundRect.left) + 'px'
        });
    }
    var _debouncedOverlay = debounce(_updateOverlay, 500);

    function _triggerUpdate() {
        var self = this,
            data = self.get();

        if (!_isVisible.call(self)) {
            return;
        }

        self.options.update.call(self, data);
        if (self.$ && typeof Prototype === 'undefined') {
            self.$(self.element).trigger('update.croppie', data);
        }
        else {
            var ev;
            if (window.CustomEvent) {
                ev = new CustomEvent('update', { detail: data });
            } else {
                ev = document.createEvent('CustomEvent');
                ev.initCustomEvent('update', true, true, data);
            }

            self.element.dispatchEvent(ev);
        }
    }

    function _isVisible() {
        return this.elements.preview.offsetHeight > 0 && this.elements.preview.offsetWidth > 0;
    }

    function _updatePropertiesFromImage() {
        var self = this,
            initialZoom = 1,
            cssReset = {},
            img = self.elements.preview,
            imgData,
            transformReset = new Transform(0, 0, initialZoom),
            originReset = new TransformOrigin(),
            isVisible = _isVisible.call(self);

        if (!isVisible || self.data.bound) {// if the croppie isn't visible or it doesn't need binding
            return;
        }

        self.data.bound = true;
        cssReset[CSS_TRANSFORM] = transformReset.toString();
        cssReset[CSS_TRANS_ORG] = originReset.toString();
        cssReset['opacity'] = 1;
        css(img, cssReset);

        imgData = self.elements.preview.getBoundingClientRect();

        self._originalImageWidth = imgData.width;
        self._originalImageHeight = imgData.height;
        self.data.orientation = getExifOrientation(self.elements.img);

        if (self.options.enableZoom) {
            _updateZoomLimits.call(self, true);
        }
        else {
            self._currentZoom = initialZoom;
        }

        transformReset.scale = self._currentZoom;
        cssReset[CSS_TRANSFORM] = transformReset.toString();
        css(img, cssReset);

        if (self.data.points.length) {
            _bindPoints.call(self, self.data.points);
        }
        else {
            _centerImage.call(self);
        }

        _updateCenterPoint.call(self);
        _updateOverlay.call(self);
    }

    function _updateZoomLimits (initial) {
        var self = this,
            minZoom = Math.max(self.options.minZoom, 0) || 0,
            maxZoom = self.options.maxZoom || 1.5,
            initialZoom,
            defaultInitialZoom,
            zoomer = self.elements.zoomer,
            scale = parseFloat(zoomer.value),
            boundaryData = self.elements.boundary.getBoundingClientRect(),
            imgData = naturalImageDimensions(self.elements.img, self.data.orientation),
            vpData = self.elements.viewport.getBoundingClientRect(),
            minW,
            minH;
        if (self.options.enforceBoundary) {
            minW = vpData.width / imgData.width;
            minH = vpData.height / imgData.height;
            minZoom = Math.max(minW, minH);
        }

        if (minZoom >= maxZoom) {
            maxZoom = minZoom + 1;
        }

        zoomer.min = fix(minZoom, 4);
        zoomer.max = fix(maxZoom, 4);
        
        if (!initial && (scale < zoomer.min || scale > zoomer.max)) {
            _setZoomerVal.call(self, scale < zoomer.min ? zoomer.min : zoomer.max);
        }
        else if (initial) {
            defaultInitialZoom = Math.max((boundaryData.width / imgData.width), (boundaryData.height / imgData.height));
            initialZoom = self.data.boundZoom !== null ? self.data.boundZoom : defaultInitialZoom;
            _setZoomerVal.call(self, initialZoom);
        }

        dispatchChange(zoomer);
    }

    function _bindPoints(points) {
        if (points.length !== 4) {
            throw "Croppie - Invalid number of points supplied: " + points;
        }
        var self = this,
            pointsWidth = points[2] - points[0],
            // pointsHeight = points[3] - points[1],
            vpData = self.elements.viewport.getBoundingClientRect(),
            boundRect = self.elements.boundary.getBoundingClientRect(),
            vpOffset = {
                left: vpData.left - boundRect.left,
                top: vpData.top - boundRect.top
            },
            scale = vpData.width / pointsWidth,
            originTop = points[1],
            originLeft = points[0],
            transformTop = (-1 * points[1]) + vpOffset.top,
            transformLeft = (-1 * points[0]) + vpOffset.left,
            newCss = {};

        newCss[CSS_TRANS_ORG] = originLeft + 'px ' + originTop + 'px';
        newCss[CSS_TRANSFORM] = new Transform(transformLeft, transformTop, scale).toString();
        css(self.elements.preview, newCss);

        _setZoomerVal.call(self, scale);
        self._currentZoom = scale;
    }

    function _centerImage() {
        var self = this,
            imgDim = self.elements.preview.getBoundingClientRect(),
            vpDim = self.elements.viewport.getBoundingClientRect(),
            boundDim = self.elements.boundary.getBoundingClientRect(),
            vpLeft = vpDim.left - boundDim.left,
            vpTop = vpDim.top - boundDim.top,
            w = vpLeft - ((imgDim.width - vpDim.width) / 2),
            h = vpTop - ((imgDim.height - vpDim.height) / 2),
            transform = new Transform(w, h, self._currentZoom);

        css(self.elements.preview, CSS_TRANSFORM, transform.toString());
    }

    function _transferImageToCanvas(customOrientation) {
        var self = this,
            canvas = self.elements.canvas,
            img = self.elements.img,
            ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.width = img.width;
        canvas.height = img.height;

        var orientation = self.options.enableOrientation && customOrientation || getExifOrientation(img);
        drawCanvas(canvas, img, orientation);
    }

    function _getCanvas(data) {
        var self = this,
            points = data.points,
            left = num(points[0]),
            top = num(points[1]),
            right = num(points[2]),
            bottom = num(points[3]),
            width = right-left,
            height = bottom-top,
            circle = data.circle,
            canvas = document.createElement('canvas'),
            ctx = canvas.getContext('2d'),
            startX = 0,
            startY = 0,
            canvasWidth = data.outputWidth || width,
            canvasHeight = data.outputHeight || height;

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        if (data.backgroundColor) {
            ctx.fillStyle = data.backgroundColor;
            ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        }

        // By default assume we're going to draw the entire
        // source image onto the destination canvas.
        var sx = left,
            sy = top,
            sWidth = width,
            sHeight = height,
            dx = 0,
            dy = 0,
            dWidth = canvasWidth,
            dHeight = canvasHeight;

        //
        // Do not go outside of the original image's bounds along the x-axis.
        // Handle translations when projecting onto the destination canvas.
        //

        // The smallest possible source x-position is 0.
        if (left < 0) {
            sx = 0;
            dx = (Math.abs(left) / width) * canvasWidth;
        }

        // The largest possible source width is the original image's width.
        if (sWidth + sx > self._originalImageWidth) {
            sWidth = self._originalImageWidth - sx;
            dWidth =  (sWidth / width) * canvasWidth;
        }

        //
        // Do not go outside of the original image's bounds along the y-axis.
        //

        // The smallest possible source y-position is 0.
        if (top < 0) {
            sy = 0;
            dy = (Math.abs(top) / height) * canvasHeight;
        }

        // The largest possible source height is the original image's height.
        if (sHeight + sy > self._originalImageHeight) {
            sHeight = self._originalImageHeight - sy;
            dHeight = (sHeight / height) * canvasHeight;
        }

        // console.table({ left, right, top, bottom, canvasWidth, canvasHeight, width, height, startX, startY, circle, sx, sy, dx, dy, sWidth, sHeight, dWidth, dHeight });

        ctx.drawImage(this.elements.preview, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
        if (circle) {
            ctx.fillStyle = '#fff';
            ctx.globalCompositeOperation = 'destination-in';
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fill();
        }
        return canvas;
    }

    function _getHtmlResult(data) {
        var points = data.points,
            div = document.createElement('div'),
            img = document.createElement('img'),
            width = points[2] - points[0],
            height = points[3] - points[1];

        addClass(div, 'croppie-result');
        div.appendChild(img);
        css(img, {
            left: (-1 * points[0]) + 'px',
            top: (-1 * points[1]) + 'px'
        });
        img.src = data.url;
        css(div, {
            width: width + 'px',
            height: height + 'px'
        });

        return div;
    }

    function _getBase64Result(data) {
        return _getCanvas.call(this, data).toDataURL(data.format, data.quality);
    }

    function _getBlobResult(data) {
        var self = this;
        return new Promise(function (resolve) {
            _getCanvas.call(self, data).toBlob(function (blob) {
                resolve(blob);
            }, data.format, data.quality);
        });
    }

    function _replaceImage(img) {
        if (this.elements.img.parentNode) {
            Array.prototype.forEach.call(this.elements.img.classList, function(c) { img.classList.add(c); });
            this.elements.img.parentNode.replaceChild(img, this.elements.img);
            this.elements.preview = img; // if the img is attached to the DOM, they're not using the canvas
        }
        this.elements.img = img;
    }

    function _bind(options, cb) {
        var self = this,
            url,
            points = [],
            zoom = null,
            hasExif = _hasExif.call(self);

        if (typeof (options) === 'string') {
            url = options;
            options = {};
        }
        else if (Array.isArray(options)) {
            points = options.slice();
        }
        else if (typeof (options) === 'undefined' && self.data.url) { //refreshing
            _updatePropertiesFromImage.call(self);
            _triggerUpdate.call(self);
            return null;
        }
        else {
            url = options.url;
            points = options.points || [];
            zoom = typeof(options.zoom) === 'undefined' ? null : options.zoom;
        }

        self.data.bound = false;
        self.data.url = url || self.data.url;
        self.data.boundZoom = zoom;

        return loadImage(url, hasExif).then(function (img) {
            _replaceImage.call(self, img);
            if (!points.length) {
                var natDim = naturalImageDimensions(img);
                var rect = self.elements.viewport.getBoundingClientRect();
                var aspectRatio = rect.width / rect.height;
                var imgAspectRatio = natDim.width / natDim.height;
                var width, height;

                if (imgAspectRatio > aspectRatio) {
                    height = natDim.height;
                    width = height * aspectRatio;
                }
                else {
                    width = natDim.width;
                    height = natDim.height / aspectRatio;
                }

                var x0 = (natDim.width - width) / 2;
                var y0 = (natDim.height - height) / 2;
                var x1 = x0 + width;
                var y1 = y0 + height;
                self.data.points = [x0, y0, x1, y1];
            }
            else if (self.options.relative) {
                points = [
                    points[0] * img.naturalWidth / 100,
                    points[1] * img.naturalHeight / 100,
                    points[2] * img.naturalWidth / 100,
                    points[3] * img.naturalHeight / 100
                ];
            }

            self.data.points = points.map(function (p) {
                return parseFloat(p);
            });
            if (self.options.useCanvas) {
                _transferImageToCanvas.call(self, options.orientation);
            }
            _updatePropertiesFromImage.call(self);
            _triggerUpdate.call(self);
            cb && cb();
        });
    }

    function fix(v, decimalPoints) {
        return parseFloat(v).toFixed(decimalPoints || 0);
    }

    function _get() {
        var self = this,
            imgData = self.elements.preview.getBoundingClientRect(),
            vpData = self.elements.viewport.getBoundingClientRect(),
            x1 = vpData.left - imgData.left,
            y1 = vpData.top - imgData.top,
            widthDiff = (vpData.width - self.elements.viewport.offsetWidth) / 2, //border
            heightDiff = (vpData.height - self.elements.viewport.offsetHeight) / 2,
            x2 = x1 + self.elements.viewport.offsetWidth + widthDiff,
            y2 = y1 + self.elements.viewport.offsetHeight + heightDiff,
            scale = self._currentZoom;

        if (scale === Infinity || isNaN(scale)) {
            scale = 1;
        }

        var max = self.options.enforceBoundary ? 0 : Number.NEGATIVE_INFINITY;
        x1 = Math.max(max, x1 / scale);
        y1 = Math.max(max, y1 / scale);
        x2 = Math.max(max, x2 / scale);
        y2 = Math.max(max, y2 / scale);

        return {
            points: [fix(x1), fix(y1), fix(x2), fix(y2)],
            zoom: scale,
            orientation: self.data.orientation
        };
    }

    var RESULT_DEFAULTS = {
            type: 'canvas',
            format: 'png',
            quality: 1
        },
        RESULT_FORMATS = ['jpeg', 'webp', 'png'];

    function _result(options) {
        var self = this,
            data = _get.call(self),
            opts = deepExtend(clone(RESULT_DEFAULTS), clone(options)),
            resultType = (typeof (options) === 'string' ? options : (opts.type || 'base64')),
            size = opts.size || 'viewport',
            format = opts.format,
            quality = opts.quality,
            backgroundColor = opts.backgroundColor,
            circle = typeof opts.circle === 'boolean' ? opts.circle : (self.options.viewport.type === 'circle'),
            vpRect = self.elements.viewport.getBoundingClientRect(),
            ratio = vpRect.width / vpRect.height,
            prom;

        if (size === 'viewport') {
            data.outputWidth = vpRect.width;
            data.outputHeight = vpRect.height;
        } else if (typeof size === 'object') {
            if (size.width && size.height) {
                data.outputWidth = size.width;
                data.outputHeight = size.height;
            } else if (size.width) {
                data.outputWidth = size.width;
                data.outputHeight = size.width / ratio;
            } else if (size.height) {
                data.outputWidth = size.height * ratio;
                data.outputHeight = size.height;
            }
        }

        if (RESULT_FORMATS.indexOf(format) > -1) {
            data.format = 'image/' + format;
            data.quality = quality;
        }

        data.circle = circle;
        data.url = self.data.url;
        data.backgroundColor = backgroundColor;

        prom = new Promise(function (resolve) {
            switch(resultType.toLowerCase())
            {
                case 'rawcanvas':
                    resolve(_getCanvas.call(self, data));
                    break;
                case 'canvas':
                case 'base64':
                    resolve(_getBase64Result.call(self, data));
                    break;
                case 'blob':
                    _getBlobResult.call(self, data).then(resolve);
                    break;
                default:
                    resolve(_getHtmlResult.call(self, data));
                    break;
            }
        });
        return prom;
    }

    function _refresh() {
        _updatePropertiesFromImage.call(this);
    }

    function _rotate(deg) {
        if (!this.options.useCanvas || !this.options.enableOrientation) {
            throw 'Croppie: Cannot rotate without enableOrientation && EXIF.js included';
        }

        var self = this,
            canvas = self.elements.canvas;

        self.data.orientation = getExifOffset(self.data.orientation, deg);
        drawCanvas(canvas, self.elements.img, self.data.orientation);
        _updateCenterPoint.call(self, true);
        _updateZoomLimits.call(self);
    }

    function _destroy() {
        var self = this;
        self.element.removeChild(self.elements.boundary);
        removeClass(self.element, 'croppie-container');
        if (self.options.enableZoom) {
            self.element.removeChild(self.elements.zoomerWrap);
        }
        delete self.elements;
    }

    if (window.jQuery) {
        var $ = window.jQuery;
        $.fn.croppie = function (opts) {
            var ot = typeof opts;

            if (ot === 'string') {
                var args = Array.prototype.slice.call(arguments, 1);
                var singleInst = $(this).data('croppie');

                if (opts === 'get') {
                    return singleInst.get();
                }
                else if (opts === 'result') {
                    return singleInst.result.apply(singleInst, args);
                }
                else if (opts === 'bind') {
                    return singleInst.bind.apply(singleInst, args);
                }

                return this.each(function () {
                    var i = $(this).data('croppie');
                    if (!i) return;

                    var method = i[opts];
                    if ($.isFunction(method)) {
                        method.apply(i, args);
                        if (opts === 'destroy') {
                            $(this).removeData('croppie');
                        }
                    }
                    else {
                        throw 'Croppie ' + opts + ' method not found';
                    }
                });
            }
            else {
                return this.each(function () {
                    var i = new Croppie(this, opts);
                    i.$ = $;
                    $(this).data('croppie', i);
                });
            }
        };
    }

    function Croppie(element, opts) {
        if (element.className.indexOf('croppie-container') > -1) {
            throw new Error("Croppie: Can't initialize croppie more than once");
        }
        this.element = element;
        this.options = deepExtend(clone(Croppie.defaults), opts);

        if (this.element.tagName.toLowerCase() === 'img') {
            var origImage = this.element;
            addClass(origImage, 'cr-original-image');
            setAttributes(origImage, {'aria-hidden' : 'true', 'alt' : '' });
            var replacementDiv = document.createElement('div');
            this.element.parentNode.appendChild(replacementDiv);
            replacementDiv.appendChild(origImage);
            this.element = replacementDiv;
            this.options.url = this.options.url || origImage.src;
        }

        _create.call(this);
        if (this.options.url) {
            var bindOpts = {
                url: this.options.url,
                points: this.options.points
            };
            delete this.options['url'];
            delete this.options['points'];
            _bind.call(this, bindOpts);
        }
    }

    Croppie.defaults = {
        viewport: {
            width: 100,
            height: 100,
            type: 'square'
        },
        boundary: { },
        orientationControls: {
            enabled: true,
            leftClass: '',
            rightClass: ''
        },
        resizeControls: {
            width: true,
            height: true
        },
        customClass: '',
        showZoomer: true,
        enableZoom: true,
        enableResize: false,
        mouseWheelZoom: true,
        enableExif: false,
        enforceBoundary: true,
        enableOrientation: false,
        enableKeyMovement: true,
        update: function () { }
    };

    Croppie.globals = {
        translate: 'translate3d'
    };

    deepExtend(Croppie.prototype, {
        bind: function (options, cb) {
            return _bind.call(this, options, cb);
        },
        get: function () {
            var data = _get.call(this);
            var points = data.points;
            if (this.options.relative) {
                points[0] /= this.elements.img.naturalWidth / 100;
                points[1] /= this.elements.img.naturalHeight / 100;
                points[2] /= this.elements.img.naturalWidth / 100;
                points[3] /= this.elements.img.naturalHeight / 100;
            }
            return data;
        },
        result: function (type) {
            return _result.call(this, type);
        },
        refresh: function () {
            return _refresh.call(this);
        },
        setZoom: function (v) {
            _setZoomerVal.call(this, v);
            dispatchChange(this.elements.zoomer);
        },
        rotate: function (deg) {
            _rotate.call(this, deg);
        },
        destroy: function () {
            return _destroy.call(this);
        }
    });
    return Croppie;
}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/users/create-user/create-user.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/users/create-user/create-user.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<global-toast *ngIf=\"isToast\" [isDanger]=\"true\" [isErrText]=\"isErrText\"></global-toast>\n<header-route-menu [currentPageName]=\"'Users'\"></header-route-menu>\n<div class=\"container-fluid mt--6\">\n  <header-route-menu-light [currentPageName]=\"'Manage'\" [moduleName]=\"'Users'\"></header-route-menu-light>\n\n  <form [formGroup]=\"createUserForm\">\n    <div class=\"container create-form\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"mb-3\">\n            <label-text>Name</label-text>\n            <input type=\"text\" class=\"form-control pb_height-50 mb-2 reverse;\" placeholder=\"Write User Name\"\n              formControlName=\"fullName\" [ngClass]=\"{ 'is-invalid': submitted && f.fullName.errors }\" />\n            <div *ngIf=\"submitted && f.fullName.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.fullName.errors.required\">Name is required</div>\n              <div *ngIf=\"f.fullName.errors.minlength\">\n                Name must be at least 6 characters\n              </div>\n            </div>\n          </div>\n          <div class=\"mb-3\">\n            <label-text>User Type</label-text>\n            <select class=\"w-100 form-control\" formControlName=\"userType\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.userType.errors }\">\n              <option value=\"\" disabled selected hidden>Select UserType</option>\n              <option *ngFor=\"let user of UserType\" [ngValue]=\"user\" (change)=\"changeUser($event)\">{{ user }}\n              </option>\n            </select>\n            <div *ngIf=\"submitted && f.userType.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.userType.errors.required\">\n                User Type is required\n              </div>\n            </div>\n          </div>\n          <div>\n            <label-text>Gender</label-text>\n            <div>\n              <input id=\"male\" type=\"radio\" value=\"MALE\" name=\"gender\" formControlName=\"gender\" />\n              <label for=\"male\" class=\"pl-2 text-d200 medium-bold mr-3\">Male</label>\n\n              <input id=\"female\" type=\"radio\" value=\"FEMALE\" name=\"gender\" formControlName=\"gender\" />\n              <label for=\"female\" class=\"pl-2 text-d200 medium-bold\">Female</label>\n            </div>\n          </div>\n        </div>\n        <!-- <div class=\"col-md-3 bg-light\">\n          <label for=\"upload\" class=\"d-flex justify-content-center w-100\">\n            <div class=\"profile-box label-txt\" *ngIf=\"!imgDemoSlider\">\n\n              <div class=\"circular-wrap\">\n                <div class=\"circular-profile\" *ngIf=\"isCreate\">\n                  <i class=\"fa fa-file-image-o\" aria-hidden=\"true\"></i>\n                </div>\n                <div class=\"circular-profile\" *ngIf=\"!isCreate\">\n                  <img *ngIf=\"!isCreate\" src=\"{{ uploadImg }}\" (load)=\"onImgLoad()\" [hidden]=\"isImgLoad\" />\n                  <img [hidden]=\"!isImgLoad\" src=\"assets/images/loading2.gif\" />\n                </div>\n              </div>\n              <div class=\"demo-wrap upload-wrapper\">\n                <div class=\"container\">\n                  <div class=\"grid\">\n                    <div class=\"col-1-2\">\n                      <div class=\"actions\">\n                        <a class=\"btn file-btn\">\n                          <input type=\"file\" class=\"upload-jpg form-control\" id=\"upload\" #cropper\n                            (change)=\"uploadCropImg($event)\" value=\"Choose a file\" accept=\"image/*\"\n                            style=\"display: none;\" />\n                        </a>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"bg-b100 text-0 medium-bold h4-m text-upload\">\n                Upload photo\n              </div>\n            </div>\n\n            <div class=\"profile-box label-txt hidebox\" [ngClass]=\"{ showbox: imgDemoSlider == true }\">\n              <div class=\"frame-upload\">\n                <div class=\"upload-demo-wrap\">\n                  <div id=\"upload-demo\"></div>\n                </div>\n                <div class=\"d-flex img-footer\">\n                  <button *ngIf=\"blankCrop\" class=\"btn upload-result text-d200 demi-bold w-50\" (click)=\"backToUpload()\">\n                    Cancel\n                  </button>\n\n                  <button *ngIf=\"blankCrop\" class=\"btn upload-result text-b100 demi-bold w-50\" id=\"sizeDisable\"\n                    (click)=\"cropResult()\" [value]=\"blankCrop\">\n                    Crop\n                  </button>\n                </div>\n              </div>\n            </div>\n          </label>\n        </div> -->\n      </div>\n\n      <div class=\"row mb-3\">\n        <div class=\"col-sm-6\">\n          <label-text>Email</label-text>\n          <input type=\"text\" class=\"form-control pb_height-50 reverse\" placeholder=\"Write Email\" formControlName=\"email\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n\n          <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.email.errors.required\">Email is required</div>\n            <div *ngIf=\"f.email.errors.email\">\n              Email must be a valid email address\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <label-text>Phone Number</label-text>\n          <input type=\"text\" class=\"form-control pb_height-50 reverse\" placeholder=\"Write Phone Number\"\n            formControlName=\"mobilePhone\"\n            oninput=\"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');\" />\n        </div>\n      </div>\n\n      <div class=\"row mb-3\" *ngIf=\"!userId\">\n        <div class=\"col-sm-6\">\n          <label-text> Password</label-text>\n          <div class=\"input-group\">\n            <input [type]=\"fieldTextType ? 'text' : 'password'\" class=\"form-control pb_height-50 reverse\"\n              placeholder=\"Write  Password\" formControlName=\"password\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text form-control\">\n                <i class=\"fa\" [ngClass]=\"{\n                    'fa-eye-slash': !fieldTextType,\n                    'fa-eye': fieldTextType\n                  }\" (click)=\"toggleFieldTextType()\"></i>\n              </span>\n            </div>\n          </div>\n          <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n            <div *ngIf=\"f.password.errors.minlength\">\n              Password must be at least 8 characters\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-6 text-white\">\n          <label-text>Confirm Password</label-text>\n          <div class=\"input-group\">\n            <input [type]=\"fieldTextType ? 'text' : 'password'\" class=\"form-control pb_height-50 reverse\"\n              placeholder=\"Write Confirm Password\" formControlName=\"confirmPassword\" [ngClass]=\"{\n                'is-invalid': submitted && f.confirmPassword.errors\n              }\" />\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text form-control\">\n                <i class=\"fa\" [ngClass]=\"{\n                    'fa-eye-slash': !fieldTextType,\n                    'fa-eye': fieldTextType\n                  }\" (click)=\"toggleFieldTextType()\"></i>\n              </span>\n            </div>\n          </div>\n          <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.confirmPassword.errors.required\">\n              Confirm Password is required\n            </div>\n            <div *ngIf=\"f.confirmPassword.errors.mustMatch\">\n              Passwords must match\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row mb-3\">\n        <div class=\"col-sm-6\">\n          <label-text>Status</label-text>\n          <select class=\"select-box form-control\" formControlName=\"status\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.status.errors }\">\n            <option value=\"\" disabled selected hidden>Select Status</option>\n            <option *ngFor=\"let stu of Status\" [ngValue]=\"stu\">{{ stu }}\n            </option>\n          </select>\n          <div *ngIf=\"submitted && f.status.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.status.errors.required\">Status is required</div>\n          </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <label-text>City</label-text>\n          <select class=\"select-box form-control\" formControlName=\"branch\">\n            <option value=\"\" disabled selected hidden>Select City</option>\n            <option *ngFor=\"let branch of branchList\" [ngValue]=\"branch._id\">\n              {{ branch.name }}\n            </option>\n          </select>\n\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <label-text>Desired Score</label-text>\n          <select class=\"select-box form-control\" formControlName=\"desiredScore\">\n            <option value=\"\" disabled selected hidden>Select Desired Score</option>\n            <option *ngFor=\"let score of scoredList\" [ngValue]=\"score._id\">\n              {{ score.desiredScore }}\n            </option>\n          </select>\n\n        </div>\n        <div class=\"col-md-6\">\n          <label-text>Package</label-text>\n          <select class=\"select-box form-control\" formControlName=\"package\">\n            <option value=\"\" disabled selected hidden>Select Package</option>\n            <option *ngFor=\"let package of packageLists\" [ngValue]=\"package.packageId\">\n              {{ package.name }}\n            </option>\n          </select>\n        </div>\n        <div class=\"col-md-12 mb-3\">\n          <label-text>Speaking Limit</label-text>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Write Speaking Limit\" formControlName=\"speakingLimit\"\n            OnlyNumber />\n        </div>\n        <div class=\"col-md-12\">\n          <label-text>Active Days</label-text>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Write Active Days\" formControlName=\"activeDays\"\n            OnlyNumber />\n        </div>\n      </div>\n      <button-footer>\n        <cancel-btn>Cancel</cancel-btn>\n        <submit-btn (onClick)=\"onCreate()\">Save</submit-btn>\n      </button-footer>\n    </div>\n  </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/users/guest-list/guest-list.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/users/guest-list/guest-list.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<global-toast *ngIf=\"isToast\" [isDanger]=\"false\" [isErrText]=\"isErrText\"></global-toast>\n<header-route-menu [currentPageName]=\"'Mange'\"></header-route-menu>\n<div class=\"container-fluid mt--6\">\n  <header-route-menu-light [currentPageName]=\"'Manage'\" [moduleName]=\"'Guest User'\"></header-route-menu-light>\n\n\n  <div class=\"row\">\n    <div class=\"col-md-6 p-0\">\n      <show-entries></show-entries>\n    </div>\n    <div class=\"col-md-6 p-0\">\n      <search-box [hint]=\"'Search User'\"></search-box>\n    </div>\n  </div>\n  <ng-container *ngIf=\"isLoading; else showData\">\n    <div>\n      <table-loading [tType]=\"'c4-1'\"></table-loading>\n    </div>\n  </ng-container>\n  <ng-template #showData>\n    <table role=\"table\" class=\"table-responsive\">\n      <thead role=\"rowgroup\">\n        <tr role=\"row\">\n          <th role=\"columnheader\" class=\"fitter-able\" (click)=\"fitter('createdDate')\"\n            [class.fitter-active]='tableFilter.sortColumn==\"createdDate\"'>Create Date</th>\n            <th role=\"columnheader\" class=\"fitter-able\" (click)=\"fitter('fullName')\"\n            [class.fitter-active]='tableFilter.sortColumn==\"fullName\"'>Name</th>\n\n          <th role=\"columnheader\" class=\"fitter-able\">Contact</th>\n          <th role=\"columnheader\" class=\"fitter-able\" (click)=\"fitter('branch')\"\n            [class.fitter-active]='tableFilter.sortColumn==\"branch\"'>Branch</th>\n            <th role=\"columnheader\">Action</th>\n\n        </tr>\n      </thead>\n      <tbody role=\"rowgroup\">\n        <ng-container *ngFor=\"let data of userLists\">\n          <tr role=\"row\">\n            <td role=\"cell\">\n            \n              {{ data.createdDate | defaultDate }}\n\n            </td>\n            <td role=\"cell\"> {{ data.fullName }}</td>\n            <td role=\"cell\">\n              <span><i class=\"fa fa-envelope text-d75\" aria-hidden=\"true\"></i> {{ data.email ?\n                data.email : \"-\" }}\n              </span><br>\n              <span><i class=\"fa fa-phone text-d75\" aria-hidden=\"true\"></i>\n                {{ data.mobilePhone ? data.mobilePhone : \"-\" }}</span>\n            </td>\n            <td role=\"cell\">\n              {{ data.branch?.name ? data.branch.name : \"-\" }}\n            </td>\n\n            <td role=\"cell\">\n              <button class=\"btn btn-deactive\" (click)=\"showDialog(data)\"\n                *ngIf=\"data.status=='DEACTIVE'\">\n                <i class=\"fa fa-user-times\"></i>\n              </button>\n              <button class=\"btn btn-useractive\" (click)=\"showDialog(data)\"\n                *ngIf=\"data.status=='ACTIVE'\">\n                <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n              </button>\n              <!-- <action-btn-gp [btnName]=\"'start'\" [data]=\"user\" (onSubmit)=\"Activate($event)\"></action-btn-gp> -->\n              <action-btn-gp [btnName]=\"'view'\" [directLink]=\"'user/detail/' + data.userId\"></action-btn-gp>\n            </td>\n          </tr>\n         \n        </ng-container>\n        <tr *ngIf=\"userLists.length == 0\" role=\"row\">\n          <td colspan=\"5\" class=\"text-center\">\n            No Data Exit\n          </td>\n        </tr>\n      </tbody>\n\n    </table>\n\n    <div class=\"d-flex justify-content-center my-2\">\n      <pagination [totalCount]='tableFilter.totalCount'>\n      </pagination>\n    </div>\n  </ng-template>\n\n</div>\n\n<dialog-box *ngIf=\"isShow\" (onconfirm)=\"onDialog($event)\" [dialogEntry]=\"dialog\"></dialog-box>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/users/note/note.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/users/note/note.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <header-route-menu [currentPageName]=\"'Users'\"></header-route-menu> -->\n\n<div class=\"container\">\n    <!-- <header-route-menu-light [currentPageName]=\"'Users'\" [moduleName]=\"'Note'\"></header-route-menu-light> -->\n<div class=\"short-note-wrapper\">\n    <div class=\"sideMenu\" [class.emptyNote]=\"noteLists.length==0\">\n            <button class=\"create-btn\" (click)=\"createNote()\">\n                <i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>\n            </button>\n        \n        <div class=\"note-list\">\n            <p class=\"empty-text\" *ngIf=\"noteLists.length==0\">Note is Empty !</p>\n            <div class=\"note-block\" *ngFor=\"let note of noteLists;let i=index\" (click)=\"selecteNote(note,$event)\"\n                [class.noteSelected]=\"note.userNoteId=== currentNote.userNoteId\">\n                <div class=\"action-note\">\n                    <button class=\"btn btn-edit\" (click)=\"editNote(note)\">\n                        <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n                    </button>\n                    <button class=\"btn btn-delete\" (click)=\"notedelete(note.userNoteId)\">\n                        <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                    </button>\n                </div>\n                <p id=\"note{{i}}\"></p>\n                <div class=\"d-flex justify-content-between note-block-footer\">\n                    <span>{{note.createdUser.fullName}}</span>\n                    <span>{{note.createdDate | defaultDate}}</span>\n                </div>\n    \n            </div>\n        </div>\n     \n\n    </div>\n\n    <div class=\"d-flex justify-content-center w-100\">\n        <div class=\"note-wrapper\">\n            <div class=\"d-flex justify-content-between my-4\" *ngIf=\"noteLists.length!=0\">\n                <p class=\"info-text\">{{todayDate | defaultDate}}</p>\n                <p class=\"info-text\">\n                    <span>By {{byUserInfo.fullName}}</span><br>\n                    <span>For {{forUser.fullName}}</span>\n                </p>\n            </div>\n            <ng-template [ngIf]=\"!isCreate && !isUpdate\" [ngIfElse]=\"isForm\">\n                <div id=\"current-note\">\n                </div>\n            </ng-template>\n\n            <ng-template #isForm>\n                <editor (getData)=\"getMarkDown($event)\" [data]=\"editorData\" [index]=\"1\" [status]=\"status\"></editor>\n                <div *ngIf=\"editorData=='' && submited\" class=\"invalid-feedback\">\n                    Keep data is empty.\n                </div>\n                <div class=\"d-flex justify-content-center my-5\">\n                    <submit-btn (onClick)=\"onKeep()\">Keep</submit-btn>\n                </div>\n            </ng-template>\n            <p class=\"empty-text\" *ngIf=\"noteLists.length==0 && !isCreate && !isUpdate\">Create New Note</p>\n        </div>\n    </div>\n</div>\n        \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/users/user-list/user-list.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/users/user-list/user-list.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<global-toast *ngIf=\"isToast\" [isDanger]=\"false\" [isErrText]=\"isErrText\"></global-toast>\n<header-route-menu [currentPageName]=\"'Mange'\"></header-route-menu>\n<div class=\"container-fluid mt--6\">\n  <header-route-menu-light [currentPageName]=\"'Manage'\" [moduleName]=\"'Users'\"\n    [createRoute]=\"'alchemist-academy/manage/users/create'\"></header-route-menu-light>\n  <div class=\"d-flex justify-content-end\">\n    <button class=\"btn btn-guest\" (click)=\"goToGuest()\">Guest Lists</button>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-6 p-0\">\n      <show-entries></show-entries>\n    </div>\n    <div class=\"col-md-6 p-0\">\n      <search-box [hint]=\"'Search User'\"></search-box>\n    </div>\n  </div>\n  <ng-container *ngIf=\"isLoading; else showData\">\n    <div>\n      <table-loading [tType]=\"'c4-1'\"></table-loading>\n    </div>\n  </ng-container>\n  <ng-template #showData>\n    <table role=\"table\" class=\"table-responsive\">\n      <thead role=\"rowgroup\">\n        <tr role=\"row\">\n          <th role=\"columnheader\" class=\"fitter-able\" (click)=\"fitter('createDate')\"\n            [class.fitter-active]='tableFilter.sortColumn==\"createDate\"'>Date</th>\n\n          <th role=\"columnheader\" class=\"fitter-able\" (click)=\"fitter('fullName')\"\n            [class.fitter-active]='tableFilter.sortColumn==\"fullName\"'>Name</th>\n\n          <th role=\"columnheader\" class=\"fitter-able\">Contact</th>\n          <th role=\"columnheader\" class=\"fitter-able\" (click)=\"fitter('branch')\"\n            [class.fitter-active]='tableFilter.sortColumn==\"branch\"'>Branch</th>\n          <th role=\"columnheader\">Package</th>\n        </tr>\n      </thead>\n      <tbody role=\"rowgroup\">\n        <ng-container *ngFor=\"let data of userLists\">\n          <tr role=\"row\">\n            <td role=\"cell\">\n              <button class=\"btn btn-create\" (click)=\"expand(data.userId)\">\n                <i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>\n              </button>\n              {{ data.createdDate | defaultDate }}\n\n            </td>\n            <td role=\"cell\"> {{ data.fullName }}</td>\n            <td role=\"cell\">\n              <span><i class=\"fa fa-envelope text-d75\" aria-hidden=\"true\"></i> {{ data.email ?\n                data.email : \"-\" }}\n              </span><br>\n              <span><i class=\"fa fa-phone text-d75\" aria-hidden=\"true\"></i>\n                {{ data.mobilePhone ? data.mobilePhone : \"-\" }}</span>\n            </td>\n            <td role=\"cell\">\n              {{ data.branch?.name ? data.branch.name : \"-\" }}\n            </td>\n\n            <td role=\"cell\">\n              <button class=\"btn btn-package\" (click)=\"clickPackage(data)\">\n                <i class=\"fa fa-archive\" aria-hidden=\"true\"></i>\n              </button>\n              <button class=\"btn btn-note\" (click)=\"goToRoute(data.userId)\">\n                <i class=\"fa fa-sticky-note-o\" aria-hidden=\"true\"></i>\n              </button>\n            </td>\n          </tr>\n          <tr role=\"row\" *ngIf=\"expandId==data.userId\">\n            <td colspan=\"5\" class=\"text-center\">\n              <action-btn-gp [btnName]=\"'view'\" [directLink]=\"'user/detail/' + data.userId\"></action-btn-gp>\n              <action-btn-gp [btnName]=\"'edit'\" [editId]=\"data.userId\"></action-btn-gp>\n              <button class=\"btn btn-deactive\" (click)=\"showDialog(data)\" *ngIf=\"data.status=='INACTIVE'\">\n                <i class=\"fa fa-user-times\"></i>\n              </button>\n              <button class=\"btn btn-useractive\" (click)=\"showDialog(data)\" *ngIf=\"data.status=='ACTIVE'\">\n                <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n              </button>\n              <action-btn-gp [btnName]=\"'delete'\" [data]=\"data\" (onSubmit)=\"deleteUser($event)\"></action-btn-gp>\n              <action-btn-gp [btnName]=\"'reset'\" [data]=\"data\" (onSubmit)=\"resetUser($event)\"></action-btn-gp>\n            </td>\n          </tr>\n        </ng-container>\n        <tr *ngIf=\"userLists.length == 0\" role=\"row\">\n          <td colspan=\"5\" class=\"text-center\">\n            No Data Exit\n          </td>\n        </tr>\n      </tbody>\n\n    </table>\n\n    <div class=\"d-flex justify-content-center my-2\">\n      <pagination [totalCount]='tableFilter.totalCount'>\n      </pagination>\n    </div>\n  </ng-template>\n\n</div>\n\n\n<dialog-box *ngIf=\"isShow\" (onconfirm)=\"onDialog($event)\" [dialogEntry]=\"dialog\"></dialog-box>");

/***/ }),

/***/ "./src/app/modules/manage/users/create-user/create-user.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/modules/manage/users/create-user/create-user.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-box {\n  background-color: #ffffff;\n  border: 1px solid #e7e3d4;\n  text-align: center;\n  position: relative;\n  border-radius: 4px;\n  cursor: pointer;\n  width: 220px;\n  /* height: 220px; */\n  box-shadow: 0px 3px 6px #c4dbf6;\n}\n\n.circular-wrap {\n  padding: 0px;\n  margin-top: 10px;\n  height: 180px;\n}\n\n.circular-profile>i{\n  font-size: 150px;\n  color: #6d7891;\n}\n\n.circular-profile {\n  width: 160px;\n  /* height: 160px; */\n  overflow: hidden;\n  background: #fff;\n  display: inline-block;\n  border: solid 10px #ffffff;\n  /* padding: 10px; */\n}\n\n.circular-profile img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n  object-fit: contain;\n}\n\n.hidebox {\n  display: none;\n}\n\n.showbox {\n  display: block !important;\n}\n\n.text-upload {\n  border-radius: 0px 0px 4px 4px;\n  padding: 3px;\n}\n\n.frame-upload {\n  padding: 10px 10px 0 10px;\n}\n\n.img-footer {\n  margin-left: -10px;\n  margin-right: -10px;\n}\n\n.divider {\n  margin-top: 25px;\n}\n\n.upload-wrapper .container{\n  height: 0;\n}\n\n.img-loading {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 400px;\n  color: #007bff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYW5hZ2UvdXNlcnMvY3JlYXRlLXVzZXIvY3JlYXRlLXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFDQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYW5hZ2UvdXNlcnMvY3JlYXRlLXVzZXIvY3JlYXRlLXVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWJveCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlN2UzZDQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDIyMHB4O1xuICAvKiBoZWlnaHQ6IDIyMHB4OyAqL1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjYzRkYmY2O1xufVxuXG4uY2lyY3VsYXItd3JhcCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgaGVpZ2h0OiAxODBweDtcbn1cblxuLmNpcmN1bGFyLXByb2ZpbGU+aXtcbiAgZm9udC1zaXplOiAxNTBweDtcbiAgY29sb3I6ICM2ZDc4OTE7XG59XG4uY2lyY3VsYXItcHJvZmlsZSB7XG4gIHdpZHRoOiAxNjBweDtcbiAgLyogaGVpZ2h0OiAxNjBweDsgKi9cbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IHNvbGlkIDEwcHggI2ZmZmZmZjtcbiAgLyogcGFkZGluZzogMTBweDsgKi9cbn1cblxuLmNpcmN1bGFyLXByb2ZpbGUgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLW8tb2JqZWN0LWZpdDogY29udGFpbjtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLmhpZGVib3gge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2hvd2JveCB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LXVwbG9hZCB7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNHB4IDRweDtcbiAgcGFkZGluZzogM3B4O1xufVxuXG4uZnJhbWUtdXBsb2FkIHtcbiAgcGFkZGluZzogMTBweCAxMHB4IDAgMTBweDtcbn1cbi5pbWctZm9vdGVyIHtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xufVxuLmRpdmlkZXIge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4udXBsb2FkLXdyYXBwZXIgLmNvbnRhaW5lcntcbiAgaGVpZ2h0OiAwO1xufVxuXG4uaW1nLWxvYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDQwMHB4O1xuICBjb2xvcjogIzAwN2JmZjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/manage/users/create-user/create-user.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/manage/users/create-user/create-user.component.ts ***!
  \***************************************************************************/
/*! exports provided: CreateUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserComponent", function() { return CreateUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/http/serviceIndex */ "./src/app/core/http/serviceIndex.ts");
/* harmony import */ var croppie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! croppie */ "./node_modules/croppie/croppie.js");
/* harmony import */ var croppie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(croppie__WEBPACK_IMPORTED_MODULE_5__);






let CreateUserComponent = class CreateUserComponent {
    constructor(formBuilder, _activeRoute, _saveService) {
        this.formBuilder = formBuilder;
        this._activeRoute = _activeRoute;
        this._saveService = _saveService;
        this.loading = true;
        // array
        this.branchList = [];
        this.scoredList = [];
        this.packageLists = [];
        this.userId = "";
        this.isImgLoad = true;
        // boolean
        this.isToast = false;
        this.imgDemoSlider = false;
        this.validProfile = false;
        this.isCrop = false;
        this.blankCrop = false;
        this.submitted = false;
        this.Status = ["ACTIVE", "INACTIVE"];
        this.UserType = ["ADMIN", "TEACHER", "STUDENT"];
        this.createUserForm = this.formBuilder.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            fullName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]],
            confirmPassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            gender: ["MALE", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            status: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            branch: [""],
            mobilePhone: [""],
            desiredScore: [""],
            package: [""],
            file: [null],
            speakingLimit: [""]
        }, {
            validator: MustMatch("password", "confirmPassword"),
        });
    }
    ngOnInit() {
        let data = this._activeRoute.snapshot.data['data'];
        this.userId = this._activeRoute.snapshot.paramMap.get("userId");
        this.branchList = data[0].branchList;
        this.scoredList = data[1];
        this.packageLists = data[2].packages;
        if (this.userId)
            this.getSingleUser(data[3].user);
    }
    getSingleUser(user) {
        // this.uploadImg = user.profilePicture;
        this.createUserForm = this.formBuilder.group({
            email: [user.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            fullName: [user.fullName, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            userType: [user.userType, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            gender: [user.gender, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            status: [user.status, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            branch: [user.branch._id],
            mobilePhone: [user.mobilePhone],
            desiredScore: [user.desiredScore._id],
            package: [user.package ? user.package.packageId : ""],
            speakingLimit: [user.speakingLimit],
            activeDays: [user.activeDays],
        });
    }
    onImgLoad() {
        this.isImgLoad = false;
    }
    get f() {
        return this.createUserForm.controls;
    }
    onCreate() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.createUserForm.invalid) {
            return;
        }
        else {
            // let getImg = document.getElementById("blobUrl");
            // let img;
            // img =
            //   getImg != undefined
            //     ? document.getElementById("blobUrl").getAttribute("src")
            //     : (img = this.uploadCrop);
            // if (img != undefined) {
            //   let ulFile = this.dataURItoBlob(img);
            //   this.createUserForm.value.file = ulFile;
            // }
            this.createUserForm.value.password = btoa(this.createUserForm.value.password);
            this._saveService.onSaveUser(this.createUserForm.value, this.userId).subscribe(() => {
                this._saveService.goBackPrev();
            }, err => {
                this.isErrText = err;
                this.isToast = true;
            });
        }
    }
    toggleFieldTextType() {
        this.fieldTextType = !this.fieldTextType;
    }
    toggleRepeatFieldTextType() {
        this.repeatFieldTextType = !this.repeatFieldTextType;
    }
    uploadCropImg($event) {
        var image = new Image();
        this.blankCrop = true;
        $(".frame-upload").css("display", "block");
        this.imgDemoSlider = true;
        $("#upload-demo img:first").remove();
        this.input = $event.target.files[0];
        // if (this.input.size <= 477732 && this.input) {
        if (this.input && this.uploadCrop) {
            this.uploadCrop.destroy();
        }
        var reader = new FileReader();
        this.uploadCrop = new croppie__WEBPACK_IMPORTED_MODULE_5___default.a(document.getElementById("upload-demo"), {
            viewport: {
                width: 150,
                height: 150,
                type: "circle",
            },
            boundary: {
                width: 150,
                height: 150,
            },
            enableExif: true,
        });
        var $uploadCrop = this.uploadCrop;
        reader.onload = function (e) {
            $(".upload-demo").addClass("ready");
            $uploadCrop
                .bind({
                url: e.target.result,
            })
                .then(function (e) { });
        };
        reader.readAsDataURL($event.target.files[0]);
    }
    cropResult(modal) {
        this.validProfile = true;
        this.isCrop = true;
        let self = this;
        this.imgDemoSlider = false;
        setTimeout(function () {
            $(".circular-profile img:last-child").attr("id", "blobUrl");
            $(".frame-upload").css("display", "none");
            this.blankCrop = false;
        }, 200);
        var cropper = this.uploadCrop;
        var BlobUrl = this.dataURItoBlob;
        this.uploadCrop
            .result({
            circle: false,
            type: "canvas",
            size: {
                width: 800,
                height: 800,
            },
            quality: 1,
        })
            .then(function (resp) {
            if (resp) {
                setTimeout(function () {
                    $(".circular-profile i").remove();
                    $(".circular-profile img").remove();
                    $(".circular-profile").append('<img src="' + resp + '" width="100%" />');
                }, 100);
            }
        });
    }
    dataURItoBlob(dataURI) {
        var byteString = atob(dataURI.split(',')[1]);
        var mimeString = dataURI
            .split(',')[0]
            .split(':')[1]
            .split(';')[0];
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ab], { type: mimeString });
    }
    backToUpload() {
        // this.hideMenu = true;
        this.validProfile = false;
        this.imgDemoSlider = false;
        $(".frame-upload").css("display", "none");
    }
};
CreateUserComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__["SaveService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("cropper", undefined),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
], CreateUserComponent.prototype, "resetCroppers", void 0);
CreateUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-create-user",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/users/create-user/create-user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-user.component.css */ "./src/app/modules/manage/users/create-user/create-user.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__["SaveService"]])
], CreateUserComponent);

function MustMatch(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/modules/manage/users/guest-list/guest-list.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/modules/manage/users/guest-list/guest-list.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tab-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: end;\n          align-items: flex-end;\n}\n\n.set-alignment {\n  padding: 5px 8px;\n  /* word-break: break-all; */\n}\n\n.btn-deactive {\n  background-color: #6d7891;\n  border: 1px solid #e7e3d4;\n  color: #ffffff;\n}\n\n.btn-useractive {\n  box-shadow: 0px 5px 6px #28a012;\n  background-color: #28a012;\n  color: white;\n}\n\n.btn {\n  padding: 0 5px 3px 5px;\n  width: 34px;\n  height: 34px;\n  font-size: 20px;\n  color: #ffffff;\n  margin-right: 10px;\n  margin-bottom: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYW5hZ2UvdXNlcnMvZ3Vlc3QtbGlzdC9ndWVzdC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYixzQkFBcUI7VUFBckIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQztFQUNDLCtCQUErQjtFQUMvQix5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYW5hZ2UvdXNlcnMvZ3Vlc3QtbGlzdC9ndWVzdC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFiLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi5zZXQtYWxpZ25tZW50IHtcbiAgcGFkZGluZzogNXB4IDhweDtcbiAgLyogd29yZC1icmVhazogYnJlYWstYWxsOyAqL1xufVxuXG4uYnRuLWRlYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZkNzg5MTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U3ZTNkNDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbiAuYnRuLXVzZXJhY3RpdmUge1xuICBib3gtc2hhZG93OiAwcHggNXB4IDZweCAjMjhhMDEyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhMDEyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG4ge1xuICBwYWRkaW5nOiAwIDVweCAzcHggNXB4O1xuICB3aWR0aDogMzRweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/manage/users/guest-list/guest-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/manage/users/guest-list/guest-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: GuestListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestListComponent", function() { return GuestListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/http/serviceIndex */ "./src/app/core/http/serviceIndex.ts");




let GuestListComponent = class GuestListComponent {
    constructor(_tableService, _activeRoute) {
        this._tableService = _tableService;
        this._activeRoute = _activeRoute;
        this.tableFilter = {
            page: 1,
            limit: 10,
            sortColumn: 'desc',
            sortDirection: 'createdDate',
        };
        this.dialog = {
            showText: "",
            isDelete: false,
            isWarning: true,
            isconfirmBtn: true,
            isPackage: false,
            getCode: false
        };
        this.userLists = [];
        this.isAsc = true;
        this.isLoading = false;
        this.isShow = false;
        this.isToast = false;
    }
    ngOnInit() {
        this._activeRoute.queryParams.subscribe((params) => {
            this.tableFilter.search = '';
            if (params.page) {
                this.tableFilter.page = params.page;
                this.tableFilter.limit = params.limit;
            }
            else if (params.search) {
                this.tableFilter.search = params.search;
            }
            this.getAllGuestUsers();
        });
    }
    getAllGuestUsers() {
        this.isLoading = true;
        this.subscription = this._tableService
            .getGuestList(this.tableFilter)
            .subscribe((res) => {
            console.log(res);
            this.userLists = res.userList;
            this.tableFilter = res.filter;
            this.isLoading = false;
        });
    }
    showDialog(uId) {
        this.activeUser = uId;
        this.dialog.showText = uId.status == "ACTIVE" ? "Are you sure deactive this user?" : "Are you sure active this user?";
        this.isShow = true;
    }
    onDialog(e) {
        this.isLoading = true;
        if (e) {
            let temp = {
                "status": this.activeUser.status == "ACTIVE" ? "DEACTIVE" : "ACTIVE"
            };
            this.subscription = this._tableService.deactiveUser(this.activeUser.userId, temp).subscribe((res) => {
                this.getAllGuestUsers();
                this.isToast = true;
                this.isErrText = res.message;
            });
        }
        else
            this.isLoading = false;
        this.isShow = false;
    }
    fitter(sortColumn) {
        this.isAsc = !this.isAsc ? (this.isAsc = true) : (this.isAsc = false);
        this.tableFilter.sortDirection = this.isAsc ? "asc" : "desc";
        this.tableFilter.sortColumn = sortColumn;
        this.getAllGuestUsers();
    }
};
GuestListComponent.ctorParameters = () => [
    { type: _core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_3__["TableListService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
GuestListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-guest-list",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./guest-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/users/guest-list/guest-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./guest-list.component.css */ "./src/app/modules/manage/users/guest-list/guest-list.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_3__["TableListService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], GuestListComponent);



/***/ }),

/***/ "./src/app/modules/manage/users/note/note.component.css":
/*!**************************************************************!*\
  !*** ./src/app/modules/manage/users/note/note.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".short-note-wrapper {\n    width: 780px;\n    height: 100%;\n    display: -webkit-box;\n    display: flex;\n}\n\n.container{\n    height: 100%;\n}\n\n.invalid-feedback{\n    display: block;\n}\n\n.sideMenu {\n    min-width: 248px;\n    box-shadow: 0px 3px 6px #00000029;\n    height: 100%;\n    background-color: #FFFFFF;\n}\n\n.addTop{\n    margin-top: 68px !important;\n}\n\n.info-text{\n    color: var(--text-fade-color);\n    font-weight: 500;\n}\n\n.note-block {\n    border-bottom: 1px solid #DFE4F0;\n    padding: 10px;\n    cursor: pointer;\n    position: relative;\n}\n\n.note-block:hover{\n    background-color: rgba(225, 225, 225,30) !important;\n    /* opacity: 0.3; */\n}\n\n.note-block > p{\n    margin-bottom: 0px;\n}\n\n.note-block-footer > span{\n    color: #8590aa;\n    font-size: 14px;\n}\n\n.note-block.noteSelected {\n    background-color: #F5F8FC;\n}\n\nbutton.create-btn {\n    position: absolute;\n    border: 0;\n    width: 40px;\n    border-radius: 0 20px 20px 0px;\n    color: #FFFFFF;\n    background-color: var(--primary-color);\n    font-size: 20px;\n    padding: 0;\n}\n\n.action-note {\n    position: absolute;\n    left: 166px;\n}\n\nbutton.btn.btn-edit {\n    color: #6D7891;\n    font-size: 18px;\n}\n\nbutton.btn.btn-delete {\n    color: #FF1A07;\n    font-size: 18px;\n}\n\n.action-note{\n    display: none;\n}\n\n.note-block:hover .action-note{\n    display: block;\n}\n\n.action-note>button{\n    background: #FFFFFF;\n    padding: 0px 3px;\n    margin-right: 10px;\n    width: 30px;\n}\n\n.emptyNote {\n    background-color: #F5F5F5 !important;\n}\n\np.empty-text {\n    text-align: center;\n    color: #8590aa;\n    font-size: 20px;\n    font-weight: 400;\n    margin-top: 10px;\n}\n\n.note-wrapper {\n    width: 100%;\n    padding: 20px;\n}\n\nheader-route-menu-light{\n    margin: 20px;\n    margin-bottom: 0;\n}\n\n.note-list {\n    margin-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYW5hZ2UvdXNlcnMvbm90ZS9ub3RlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG9CQUFhO0lBQWIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUlBO0lBQ0ksNkJBQTZCO0lBQzdCLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1EQUFtRDtJQUNuRCxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2Qsc0NBQXNDO0lBQ3RDLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlL3VzZXJzL25vdGUvbm90ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3J0LW5vdGUtd3JhcHBlciB7XG4gICAgd2lkdGg6IDc4MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY29udGFpbmVye1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmludmFsaWQtZmVlZGJhY2t7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zaWRlTWVudSB7XG4gICAgbWluLXdpZHRoOiAyNDhweDtcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG59XG5cbi5hZGRUb3B7XG4gICAgbWFyZ2luLXRvcDogNjhweCAhaW1wb3J0YW50O1xufVxuXG5cblxuLmluZm8tdGV4dHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1mYWRlLWNvbG9yKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuLm5vdGUtYmxvY2sge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREZFNEYwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm5vdGUtYmxvY2s6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjUsIDIyNSwgMjI1LDMwKSAhaW1wb3J0YW50O1xuICAgIC8qIG9wYWNpdHk6IDAuMzsgKi9cbn1cbi5ub3RlLWJsb2NrID4gcHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5ub3RlLWJsb2NrLWZvb3RlciA+IHNwYW57XG4gICAgY29sb3I6ICM4NTkwYWE7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubm90ZS1ibG9jay5ub3RlU2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY4RkM7XG59XG5cbmJ1dHRvbi5jcmVhdGUtYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyOiAwO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMjBweCAyMHB4IDBweDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLmFjdGlvbi1ub3RlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTY2cHg7XG59XG5cbmJ1dHRvbi5idG4uYnRuLWVkaXQge1xuICAgIGNvbG9yOiAjNkQ3ODkxO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuYnV0dG9uLmJ0bi5idG4tZGVsZXRlIHtcbiAgICBjb2xvcjogI0ZGMUEwNztcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5hY3Rpb24tbm90ZXtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ubm90ZS1ibG9jazpob3ZlciAuYWN0aW9uLW5vdGV7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5hY3Rpb24tbm90ZT5idXR0b257XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBwYWRkaW5nOiAwcHggM3B4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB3aWR0aDogMzBweDtcbn1cblxuLmVtcHR5Tm90ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNSAhaW1wb3J0YW50O1xufVxuXG5wLmVtcHR5LXRleHQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzg1OTBhYTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ubm90ZS13cmFwcGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG5oZWFkZXItcm91dGUtbWVudS1saWdodHtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLm5vdGUtbGlzdCB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/manage/users/note/note.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/manage/users/note/note.component.ts ***!
  \*************************************************************/
/*! exports provided: NoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteComponent", function() { return NoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/http/serviceIndex */ "./src/app/core/http/serviceIndex.ts");




let NoteComponent = class NoteComponent {
    constructor(_activeRoute, _service, _cservice) {
        this._activeRoute = _activeRoute;
        this._service = _service;
        this._cservice = _cservice;
        this.forUser = {};
        this.byUserInfo = {};
        this.noteLists = [];
        this.todayDate = new Date();
        this.editorData = "";
        this.submited = false;
        this.isLoading = false;
        this.isCreate = false;
        this.isUpdate = false;
        this.currentNote = {};
    }
    ngOnInit() {
        this.isLoading = true;
        this.byUserInfo = JSON.parse(atob(localStorage.getItem("userData")));
        setTimeout(() => { this.getNoteByuid(this._activeRoute.snapshot.paramMap.get("userId")); });
    }
    getNoteByuid(userId) {
        this.isUpdate = false;
        this.isCreate = false;
        this.subscription = this._service.getNotesByuId(userId)
            .subscribe((res) => {
            this.noteLists = res.notes;
            this.forUser = res.forUser;
            if (this.noteLists.length != 0) {
                this.currentNote = this.noteLists[0];
                setTimeout(() => {
                    this.appendLists();
                    this.appendSingle();
                });
            }
            this.isLoading = false;
        });
    }
    getMarkDown(data) {
        this.editorData = data.innerHTML;
    }
    onKeep() {
        this.submited = true;
        if (this.editorData) {
            let temp = {
                note: this.editorData
            };
            if (this.isCreate) {
                this.subscription = this._service.createNote(temp, this.forUser.userId)
                    .subscribe((res) => {
                    this.isLoading = true;
                    this.getNoteByuid(this.forUser.userId);
                });
            }
            else {
                this.subscription = this._service.updateNote(temp, this.forUser.userId)
                    .subscribe((res) => {
                    this.isLoading = true;
                    this.getNoteByuid(this.forUser.userId);
                });
            }
        }
    }
    appendLists() {
        for (let i = 0; i < this.noteLists.length; i++) {
            let ele = document.getElementById("note" + i);
            ele.append(this._cservice.stringToEl("<div>" + this.noteLists[i].note + "</div>"));
        }
    }
    appendSingle() {
        let ele = document.getElementById("note");
        let ele2 = document.getElementById("current-note");
        if (ele)
            if (ele.parentNode)
                ele.parentNode.removeChild(ele);
        ele2.append(this._cservice.stringToEl("<div id='note'>" + this.currentNote.note + "</div>"));
    }
    selecteNote(note, e) {
        if (e.path[0].className == '' || e.path[0].className == 'note-block' || e.path[0].className == 'd-flex justify-content-between note-block-footer') {
            this.currentNote = note;
            this.byUserInfo = note.createdUser;
            setTimeout(() => {
                this.appendSingle();
            });
            this.isCreate = false;
            this.isUpdate = false;
        }
    }
    createNote() {
        this.isCreate = true;
    }
    editNote(note) {
        this.currentNote = note;
        this.editorData = note.note;
        this.isUpdate = true;
        this.status = "click";
    }
    notedelete(id) {
        this.subscription = this._service.deleteNote(id)
            .subscribe((res) => {
            this.getNoteByuid(this.forUser.userId);
        });
    }
};
NoteComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_3__["SaveService"] },
    { type: _core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
];
NoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-note',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./note.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/users/note/note.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./note.component.css */ "./src/app/modules/manage/users/note/note.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_3__["SaveService"], _core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
], NoteComponent);



/***/ }),

/***/ "./src/app/modules/manage/users/reslovers/user-create.reslover.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/manage/users/reslovers/user-create.reslover.ts ***!
  \************************************************************************/
/*! exports provided: UserCreateResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreateResolver", function() { return UserCreateResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/http/detail.service */ "./src/app/core/http/detail.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let UserCreateResolver = class UserCreateResolver {
    constructor(detail) {
        this.detail = detail;
    }
    resolve(route) {
        let userId, branch, desirescore, pack, userDetail;
        userId = route.params['userId'];
        branch = this.detail.getAllBranch();
        desirescore = this.detail.getdesiredScore();
        pack = this.detail.getAllPackage();
        if (userId) {
            userDetail = this.detail.getDetail(`users/${userId}`);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([branch, desirescore, pack, userDetail]);
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([branch, desirescore, pack]);
        }
    }
};
UserCreateResolver.ctorParameters = () => [
    { type: _app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_2__["DetailService"] }
];
UserCreateResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_2__["DetailService"]])
], UserCreateResolver);



/***/ }),

/***/ "./src/app/modules/manage/users/user-list/user-list.component.css":
/*!************************************************************************!*\
  !*** ./src/app/modules/manage/users/user-list/user-list.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".set-alignment {\n    padding: 5px 8px;\n    /* word-break: break-all; */\n}\n\nbutton.btn.btn-create {\n    font-size: 23px;\n    padding: 0;\n    margin-right: 4px;\n    color: #3B8BEB!important;\n}\n\n.btn {\n    padding: 0 5px 3px 5px;\n    width: 34px;\n    height: 34px;\n    font-size: 20px;\n    color: #ffffff;\n    margin-right: 10px;\n    margin-bottom: 6px;\n}\n\n.btn-package, .btn-useractive {\n    box-shadow: 0px 5px 6px #28a012;\n    background-color: #28a012;\n}\n\n.btn-note {\n    background-color: #3b8beb;\n    box-shadow: 0px 3px 6px #c4dbf6;\n}\n\n.btn-deactive {\n    background-color: #6d7891;\n    border: 1px solid #e7e3d4;\n    color: #ffffff;\n}\n\n/* table responsive */\n\n@media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {\n    /*\n                      Label the data\n                  You could also use a data-* attribute and content for this. That way \"bloats\" the HTML, this way means you need to keep HTML and CSS in sync. Lea Verou has a clever way to handle with text-shadow.\n                      */\n    td:nth-of-type(1):before {\n        content: \"Date\";\n    }\n    td:nth-of-type(2):before {\n        content: \"Name\";\n    }\n    td:nth-of-type(3):before {\n        content: \"Contact\";\n    }\n    td:nth-of-type(4):before {\n        content: \"Branch\";\n    }\n    td:nth-of-type(5):before {\n        content: \"Package\";\n    }\n}\n\nbutton.btn.btn-guest {\n    background-color: var(--half-bg-fade-color);\n    border: solid 1px var(--half-bg-color);\n    color: var(--half-bg-color);\n    width: 140px;\n    height: 50px;\n    margin-top: 14px;\n    margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYW5hZ2UvdXNlcnMvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBLHFCQUFxQjs7QUFFckI7SUFDSTs7O3VCQUdtQjtJQUNuQjtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJLDJDQUEyQztJQUMzQyxzQ0FBc0M7SUFDdEMsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlL3VzZXJzL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXQtYWxpZ25tZW50IHtcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xuICAgIC8qIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDsgKi9cbn1cblxuYnV0dG9uLmJ0bi5idG4tY3JlYXRlIHtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICBjb2xvcjogIzNCOEJFQiFpbXBvcnRhbnQ7XG59XG5cbi5idG4ge1xuICAgIHBhZGRpbmc6IDAgNXB4IDNweCA1cHg7XG4gICAgd2lkdGg6IDM0cHg7XG4gICAgaGVpZ2h0OiAzNHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG4uYnRuLXBhY2thZ2UsIC5idG4tdXNlcmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogMHB4IDVweCA2cHggIzI4YTAxMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhMDEyO1xufVxuXG4uYnRuLW5vdGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjhiZWI7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggI2M0ZGJmNjtcbn1cblxuLmJ0bi1kZWFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZkNzg5MTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTdlM2Q0O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4vKiB0YWJsZSByZXNwb25zaXZlICovXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpLCAobWluLWRldmljZS13aWR0aDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSB7XG4gICAgLypcbiAgICAgICAgICAgICAgICAgICAgICBMYWJlbCB0aGUgZGF0YVxuICAgICAgICAgICAgICAgICAgWW91IGNvdWxkIGFsc28gdXNlIGEgZGF0YS0qIGF0dHJpYnV0ZSBhbmQgY29udGVudCBmb3IgdGhpcy4gVGhhdCB3YXkgXCJibG9hdHNcIiB0aGUgSFRNTCwgdGhpcyB3YXkgbWVhbnMgeW91IG5lZWQgdG8ga2VlcCBIVE1MIGFuZCBDU1MgaW4gc3luYy4gTGVhIFZlcm91IGhhcyBhIGNsZXZlciB3YXkgdG8gaGFuZGxlIHdpdGggdGV4dC1zaGFkb3cuXG4gICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICB0ZDpudGgtb2YtdHlwZSgxKTpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIkRhdGVcIjtcbiAgICB9XG4gICAgdGQ6bnRoLW9mLXR5cGUoMik6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJOYW1lXCI7XG4gICAgfVxuICAgIHRkOm50aC1vZi10eXBlKDMpOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiQ29udGFjdFwiO1xuICAgIH1cbiAgICB0ZDpudGgtb2YtdHlwZSg0KTpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIkJyYW5jaFwiO1xuICAgIH1cbiAgICB0ZDpudGgtb2YtdHlwZSg1KTpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlBhY2thZ2VcIjtcbiAgICB9XG59XG5cbmJ1dHRvbi5idG4uYnRuLWd1ZXN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oYWxmLWJnLWZhZGUtY29sb3IpO1xuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWhhbGYtYmctY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1oYWxmLWJnLWNvbG9yKTtcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi10b3A6IDE0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/manage/users/user-list/user-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/manage/users/user-list/user-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/http/serviceIndex */ "./src/app/core/http/serviceIndex.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let UserListComponent = class UserListComponent {
    constructor(_router, _tableService, _activeRoute) {
        this._router = _router;
        this._tableService = _tableService;
        this._activeRoute = _activeRoute;
        this.selectedTab = 0;
        this.tableFilter = {
            page: 1,
            limit: 10,
            sortColumn: 'desc',
            sortDirection: 'createdDate',
        };
        this.userLists = [];
        this.isAsc = true;
        this.dialog = {
            showText: "",
            isDelete: false,
            isWarning: true,
            isconfirmBtn: true,
            isPackage: false,
            getCode: false
        };
        this.isLoading = true;
        this.isShow = false;
        this.isToast = false;
    }
    ngOnInit() {
        this.isLoading = true;
        this._activeRoute.queryParams.subscribe((params) => {
            this.tableFilter.search = '';
            if (params.page) {
                this.tableFilter.page = params.page;
                this.tableFilter.limit = params.limit;
                // this.tableFilter.search="";
            }
            else if (params.search) {
                this.tableFilter.search = params.search;
            }
            this.getAllUsers();
        });
    }
    getAllUsers() {
        this.isLoading = true;
        this.subscription = this._tableService.getUserList(this.tableFilter).subscribe((res) => {
            this.userLists = res.userList;
            this.tableFilter = res.filter;
            this.isLoading = false;
        });
    }
    deleteUser(e) {
        this.subscription = this._tableService.onDeleteUser(e.userId).subscribe((res) => {
            this.getAllUsers();
        });
    }
    resetUser(e) {
        this.subscription = this._tableService.onResetUser(e.userId).subscribe((res) => {
            this.getAllUsers();
        });
    }
    fitter(sortColumn) {
        this.isLoading = true;
        this.isAsc = !this.isAsc ? this.isAsc = true : this.isAsc = false;
        this.tableFilter.sortDirection = this.isAsc ? 'asc' : 'desc';
        this.tableFilter.sortColumn = sortColumn;
        this.getAllUsers();
    }
    expand(userId) {
        this.expandId = userId == this.expandId ? undefined : userId;
    }
    goToRoute(userId) {
        this._router.navigate(['notes', userId], { relativeTo: this._activeRoute });
    }
    showDialog(uId) {
        this.activeUser = uId;
        this.dialog.showText = uId.status == "ACTIVE" ? "Are you sure deactive this user?" : "Are you sure active this user?";
        this.isShow = true;
    }
    onDialog(e) {
        if (e) {
            this.isLoading = true;
            let temp = {
                "status": this.activeUser.status == "ACTIVE" ? "DEACTIVE" : "ACTIVE"
            };
            this.subscription = this._tableService.deactiveUser(this.activeUser.userId, temp).subscribe((res) => {
                this.getAllUsers();
                this.isToast = true;
                this.isErrText = res.message;
            });
        }
        this.isShow = false;
    }
    clickPackage(user) {
        this.activeUser = user;
        this.isShow = true;
        this.dialog.isconfirmBtn = false;
        this.dialog.showText = this.activeUser.package.name;
    }
    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
    goToGuest() {
        this._router.navigate(['guestlists'], { relativeTo: this._activeRoute });
    }
};
UserListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_2__["TableListService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/users/user-list/user-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-list.component.css */ "./src/app/modules/manage/users/user-list/user-list.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_2__["TableListService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], UserListComponent);



/***/ }),

/***/ "./src/app/modules/manage/users/user-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/manage/users/user-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/modules/manage/users/user-list/user-list.component.ts");
/* harmony import */ var _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-user/create-user.component */ "./src/app/modules/manage/users/create-user/create-user.component.ts");
/* harmony import */ var _guest_list_guest_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guest-list/guest-list.component */ "./src/app/modules/manage/users/guest-list/guest-list.component.ts");
/* harmony import */ var _note_note_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./note/note.component */ "./src/app/modules/manage/users/note/note.component.ts");
/* harmony import */ var _app_modules_manage_users_reslovers_user_create_reslover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/modules/manage/users/reslovers/user-create.reslover */ "./src/app/modules/manage/users/reslovers/user-create.reslover.ts");








const routes = [
    {
        path: "",
        component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_3__["UserListComponent"],
    },
    {
        path: "create",
        component: _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_4__["CreateUserComponent"],
        resolve: {
            data: _app_modules_manage_users_reslovers_user_create_reslover__WEBPACK_IMPORTED_MODULE_7__["UserCreateResolver"]
        }
    },
    {
        path: "create/:userId",
        component: _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_4__["CreateUserComponent"],
        resolve: {
            data: _app_modules_manage_users_reslovers_user_create_reslover__WEBPACK_IMPORTED_MODULE_7__["UserCreateResolver"]
        }
    },
    {
        path: "guestlists",
        component: _guest_list_guest_list_component__WEBPACK_IMPORTED_MODULE_5__["GuestListComponent"],
    },
    {
        path: "notes/:userId",
        component: _note_note_component__WEBPACK_IMPORTED_MODULE_6__["NoteComponent"],
    },
];
let UserRoutingModule = class UserRoutingModule {
};
UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [
            _app_modules_manage_users_reslovers_user_create_reslover__WEBPACK_IMPORTED_MODULE_7__["UserCreateResolver"]
        ]
    })
], UserRoutingModule);



/***/ }),

/***/ "./src/app/modules/manage/users/user.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/manage/users/user.module.ts ***!
  \*****************************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/modules/manage/users/user-list/user-list.component.ts");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/modules/manage/users/user-routing.module.ts");
/* harmony import */ var _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-user/create-user.component */ "./src/app/modules/manage/users/create-user/create-user.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngneat_content_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/content-loader */ "./node_modules/@ngneat/content-loader/fesm2015/ngneat-content-loader.js");
/* harmony import */ var _guest_list_guest_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guest-list/guest-list.component */ "./src/app/modules/manage/users/guest-list/guest-list.component.ts");
/* harmony import */ var _note_note_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./note/note.component */ "./src/app/modules/manage/users/note/note.component.ts");
/* harmony import */ var _app_shared_basic_components_basic_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/shared/basic-components/basic.module */ "./src/app/shared/basic-components/basic.module.ts");











const components = [_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_3__["UserListComponent"], _guest_list_guest_list_component__WEBPACK_IMPORTED_MODULE_8__["GuestListComponent"]];
let UserModule = class UserModule {
};
UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            components,
            _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_5__["CreateUserComponent"],
            _note_note_component__WEBPACK_IMPORTED_MODULE_9__["NoteComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _user_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserRoutingModule"],
            _app_shared_basic_components_basic_module__WEBPACK_IMPORTED_MODULE_10__["BasicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _ngneat_content_loader__WEBPACK_IMPORTED_MODULE_7__["ContentLoaderModule"],
        ],
        exports: [components, _user_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserRoutingModule"]],
    })
], UserModule);



/***/ })

}]);
//# sourceMappingURL=app-modules-manage-users-user-module-es2015.5b07cfde488bd1ffc126.js.map