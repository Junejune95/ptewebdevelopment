(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-home-home-module"],{

/***/ "./node_modules/ng-circle-progress/fesm2015/ng-circle-progress.js":
/*!************************************************************************!*\
  !*** ./node_modules/ng-circle-progress/fesm2015/ng-circle-progress.js ***!
  \************************************************************************/
/*! exports provided: CircleProgressComponent, CircleProgressOptions, NgCircleProgressModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleProgressComponent", function() { return CircleProgressComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleProgressOptions", function() { return CircleProgressOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgCircleProgressModule", function() { return NgCircleProgressModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





class CircleProgressOptions {
    constructor() {
        this.class = '';
        this.backgroundGradient = false;
        this.backgroundColor = 'transparent';
        this.backgroundGradientStopColor = 'transparent';
        this.backgroundOpacity = 1;
        this.backgroundStroke = 'transparent';
        this.backgroundStrokeWidth = 0;
        this.backgroundPadding = 5;
        this.percent = 0;
        this.radius = 90;
        this.space = 4;
        this.toFixed = 0;
        this.maxPercent = 1000;
        this.renderOnClick = true;
        this.units = '%';
        this.unitsFontSize = '10';
        this.unitsFontWeight = 'normal';
        this.unitsColor = '#444444';
        this.outerStrokeGradient = false;
        this.outerStrokeWidth = 8;
        this.outerStrokeColor = '#78C000';
        this.outerStrokeGradientStopColor = 'transparent';
        this.outerStrokeLinecap = 'round';
        this.innerStrokeColor = '#C7E596';
        this.innerStrokeWidth = 4;
        this.titleFormat = undefined;
        this.title = 'auto';
        this.titleColor = '#444444';
        this.titleFontSize = '20';
        this.titleFontWeight = 'normal';
        this.subtitleFormat = undefined;
        this.subtitle = 'progress';
        this.subtitleColor = '#A9A9A9';
        this.subtitleFontSize = '10';
        this.subtitleFontWeight = 'normal';
        this.imageSrc = undefined;
        this.imageHeight = undefined;
        this.imageWidth = undefined;
        this.animation = true;
        this.animateTitle = true;
        this.animateSubtitle = false;
        this.animationDuration = 500;
        this.showTitle = true;
        this.showSubtitle = true;
        this.showUnits = true;
        this.showImage = false;
        this.showBackground = true;
        this.showInnerStroke = true;
        this.clockwise = true;
        this.responsive = false;
        this.startFromZero = true;
        this.showZeroOuterStroke = true;
        this.lazy = false;
    }
}
/** @dynamic Prevent compiling error when using type `Document` https://github.com/angular/angular/issues/20351 */
let CircleProgressComponent = class CircleProgressComponent {
    constructor(defaultOptions, elRef, document) {
        this.elRef = elRef;
        this.document = document;
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // <svg> of component
        this.svgElement = null;
        // whether <svg> is in viewport
        this.isInViewport = false;
        // event for notifying viewport change caused by scrolling or resizing
        this.onViewportChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"];
        this._viewportChangedSubscriber = null;
        this.options = new CircleProgressOptions();
        this.defaultOptions = new CircleProgressOptions();
        this._lastPercent = 0;
        this._gradientUUID = null;
        this.render = () => {
            this.applyOptions();
            if (this.options.lazy) {
                // Draw svg if it doesn't exist
                this.svgElement === null && this.draw(this._lastPercent);
                // Draw it only when it's in the viewport
                if (this.isInViewport) {
                    // Draw it at the latest position when I am in.
                    if (this.options.animation && this.options.animationDuration > 0) {
                        this.animate(this._lastPercent, this.options.percent);
                    }
                    else {
                        this.draw(this.options.percent);
                    }
                    this._lastPercent = this.options.percent;
                }
            }
            else {
                if (this.options.animation && this.options.animationDuration > 0) {
                    this.animate(this._lastPercent, this.options.percent);
                }
                else {
                    this.draw(this.options.percent);
                }
                this._lastPercent = this.options.percent;
            }
        };
        this.polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
            let angleInRadius = angleInDegrees * Math.PI / 180;
            let x = centerX + Math.sin(angleInRadius) * radius;
            let y = centerY - Math.cos(angleInRadius) * radius;
            return { x: x, y: y };
        };
        this.draw = (percent) => {
            // make percent reasonable
            percent = (percent === undefined) ? this.options.percent : Math.abs(percent);
            // circle percent shouldn't be greater than 100%.
            let circlePercent = (percent > 100) ? 100 : percent;
            // determine box size
            let boxSize = this.options.radius * 2 + this.options.outerStrokeWidth * 2;
            if (this.options.showBackground) {
                boxSize += (this.options.backgroundStrokeWidth * 2 + this.max(0, this.options.backgroundPadding * 2));
            }
            // the centre of the circle
            let centre = { x: boxSize / 2, y: boxSize / 2 };
            // the start point of the arc
            let startPoint = { x: centre.x, y: centre.y - this.options.radius };
            // get the end point of the arc
            let endPoint = this.polarToCartesian(centre.x, centre.y, this.options.radius, 360 * (this.options.clockwise ?
                circlePercent :
                (100 - circlePercent)) / 100); // ####################
            // We'll get an end point with the same [x, y] as the start point when percent is 100%, so move x a little bit.
            if (circlePercent === 100) {
                endPoint.x = endPoint.x + (this.options.clockwise ? -0.01 : +0.01);
            }
            // largeArcFlag and sweepFlag
            let largeArcFlag, sweepFlag;
            if (circlePercent > 50) {
                [largeArcFlag, sweepFlag] = this.options.clockwise ? [1, 1] : [1, 0];
            }
            else {
                [largeArcFlag, sweepFlag] = this.options.clockwise ? [0, 1] : [0, 0];
            }
            // percent may not equal the actual percent
            let titlePercent = this.options.animateTitle ? percent : this.options.percent;
            let titleTextPercent = titlePercent > this.options.maxPercent ?
                `${this.options.maxPercent.toFixed(this.options.toFixed)}+` : titlePercent.toFixed(this.options.toFixed);
            let subtitlePercent = this.options.animateSubtitle ? percent : this.options.percent;
            // get title object
            let title = {
                x: centre.x,
                y: centre.y,
                textAnchor: 'middle',
                color: this.options.titleColor,
                fontSize: this.options.titleFontSize,
                fontWeight: this.options.titleFontWeight,
                texts: [],
                tspans: []
            };
            // from v0.9.9, both title and titleFormat(...) may be an array of string.
            if (this.options.titleFormat !== undefined && this.options.titleFormat.constructor.name === 'Function') {
                let formatted = this.options.titleFormat(titlePercent);
                if (formatted instanceof Array) {
                    title.texts = [...formatted];
                }
                else {
                    title.texts.push(formatted.toString());
                }
            }
            else {
                if (this.options.title === 'auto') {
                    title.texts.push(titleTextPercent);
                }
                else {
                    if (this.options.title instanceof Array) {
                        title.texts = [...this.options.title];
                    }
                    else {
                        title.texts.push(this.options.title.toString());
                    }
                }
            }
            // get subtitle object
            let subtitle = {
                x: centre.x,
                y: centre.y,
                textAnchor: 'middle',
                color: this.options.subtitleColor,
                fontSize: this.options.subtitleFontSize,
                fontWeight: this.options.subtitleFontWeight,
                texts: [],
                tspans: []
            };
            // from v0.9.9, both subtitle and subtitleFormat(...) may be an array of string.
            if (this.options.subtitleFormat !== undefined && this.options.subtitleFormat.constructor.name === 'Function') {
                let formatted = this.options.subtitleFormat(subtitlePercent);
                if (formatted instanceof Array) {
                    subtitle.texts = [...formatted];
                }
                else {
                    subtitle.texts.push(formatted.toString());
                }
            }
            else {
                if (this.options.subtitle instanceof Array) {
                    subtitle.texts = [...this.options.subtitle];
                }
                else {
                    subtitle.texts.push(this.options.subtitle.toString());
                }
            }
            // get units object
            let units = {
                text: `${this.options.units}`,
                fontSize: this.options.unitsFontSize,
                fontWeight: this.options.unitsFontWeight,
                color: this.options.unitsColor
            };
            // get total count of text lines to be shown
            let rowCount = 0, rowNum = 1;
            this.options.showTitle && (rowCount += title.texts.length);
            this.options.showSubtitle && (rowCount += subtitle.texts.length);
            // calc dy for each tspan for title
            if (this.options.showTitle) {
                for (let span of title.texts) {
                    title.tspans.push({ span: span, dy: this.getRelativeY(rowNum, rowCount) });
                    rowNum++;
                }
            }
            // calc dy for each tspan for subtitle
            if (this.options.showSubtitle) {
                for (let span of subtitle.texts) {
                    subtitle.tspans.push({ span: span, dy: this.getRelativeY(rowNum, rowCount) });
                    rowNum++;
                }
            }
            // create ID for gradient element
            if (null === this._gradientUUID) {
                this._gradientUUID = this.uuid();
            }
            // Bring it all together
            this.svg = {
                viewBox: `0 0 ${boxSize} ${boxSize}`,
                // Set both width and height to '100%' if it's responsive
                width: this.options.responsive ? '100%' : boxSize,
                height: this.options.responsive ? '100%' : boxSize,
                backgroundCircle: {
                    cx: centre.x,
                    cy: centre.y,
                    r: this.options.radius + this.options.outerStrokeWidth / 2 + this.options.backgroundPadding,
                    fill: this.options.backgroundColor,
                    fillOpacity: this.options.backgroundOpacity,
                    stroke: this.options.backgroundStroke,
                    strokeWidth: this.options.backgroundStrokeWidth,
                },
                path: {
                    // A rx ry x-axis-rotation large-arc-flag sweep-flag x y (https://developer.mozilla.org/en/docs/Web/SVG/Tutorial/Paths#Arcs)
                    d: `M ${startPoint.x} ${startPoint.y}
        A ${this.options.radius} ${this.options.radius} 0 ${largeArcFlag} ${sweepFlag} ${endPoint.x} ${endPoint.y}`,
                    stroke: this.options.outerStrokeColor,
                    strokeWidth: this.options.outerStrokeWidth,
                    strokeLinecap: this.options.outerStrokeLinecap,
                    fill: 'none'
                },
                circle: {
                    cx: centre.x,
                    cy: centre.y,
                    r: this.options.radius - this.options.space - this.options.outerStrokeWidth / 2 - this.options.innerStrokeWidth / 2,
                    fill: 'none',
                    stroke: this.options.innerStrokeColor,
                    strokeWidth: this.options.innerStrokeWidth,
                },
                title: title,
                units: units,
                subtitle: subtitle,
                image: {
                    x: centre.x - this.options.imageWidth / 2,
                    y: centre.y - this.options.imageHeight / 2,
                    src: this.options.imageSrc,
                    width: this.options.imageWidth,
                    height: this.options.imageHeight,
                },
                outerLinearGradient: {
                    id: 'outer-linear-' + this._gradientUUID,
                    colorStop1: this.options.outerStrokeColor,
                    colorStop2: this.options.outerStrokeGradientStopColor === 'transparent' ? '#FFF' : this.options.outerStrokeGradientStopColor,
                },
                radialGradient: {
                    id: 'radial-' + this._gradientUUID,
                    colorStop1: this.options.backgroundColor,
                    colorStop2: this.options.backgroundGradientStopColor === 'transparent' ? '#FFF' : this.options.backgroundGradientStopColor,
                }
            };
        };
        this.getAnimationParameters = (previousPercent, currentPercent) => {
            const MIN_INTERVAL = 10;
            let times, step, interval;
            let fromPercent = this.options.startFromZero ? 0 : (previousPercent < 0 ? 0 : previousPercent);
            let toPercent = currentPercent < 0 ? 0 : this.min(currentPercent, this.options.maxPercent);
            let delta = Math.abs(Math.round(toPercent - fromPercent));
            if (delta >= 100) {
                // we will finish animation in 100 times
                times = 100;
                if (!this.options.animateTitle && !this.options.animateSubtitle) {
                    step = 1;
                }
                else {
                    // show title or subtitle animation even if the arc is full, we also need to finish it in 100 times.
                    step = Math.round(delta / times);
                }
            }
            else {
                // we will finish in as many times as the number of percent.
                times = delta;
                step = 1;
            }
            // Get the interval of timer
            interval = Math.round(this.options.animationDuration / times);
            // Readjust all values if the interval of timer is extremely small.
            if (interval < MIN_INTERVAL) {
                interval = MIN_INTERVAL;
                times = this.options.animationDuration / interval;
                if (!this.options.animateTitle && !this.options.animateSubtitle && delta > 100) {
                    step = Math.round(100 / times);
                }
                else {
                    step = Math.round(delta / times);
                }
            }
            // step must be greater than 0.
            if (step < 1) {
                step = 1;
            }
            return { times: times, step: step, interval: interval };
        };
        this.animate = (previousPercent, currentPercent) => {
            if (this._timerSubscription && !this._timerSubscription.closed) {
                this._timerSubscription.unsubscribe();
            }
            let fromPercent = this.options.startFromZero ? 0 : previousPercent;
            let toPercent = currentPercent;
            let { step: step, interval: interval } = this.getAnimationParameters(fromPercent, toPercent);
            let count = fromPercent;
            if (fromPercent < toPercent) {
                this._timerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, interval).subscribe(() => {
                    count += step;
                    if (count <= toPercent) {
                        if (!this.options.animateTitle && !this.options.animateSubtitle && count >= 100) {
                            this.draw(toPercent);
                            this._timerSubscription.unsubscribe();
                        }
                        else {
                            this.draw(count);
                        }
                    }
                    else {
                        this.draw(toPercent);
                        this._timerSubscription.unsubscribe();
                    }
                });
            }
            else {
                this._timerSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, interval).subscribe(() => {
                    count -= step;
                    if (count >= toPercent) {
                        if (!this.options.animateTitle && !this.options.animateSubtitle && toPercent >= 100) {
                            this.draw(toPercent);
                            this._timerSubscription.unsubscribe();
                        }
                        else {
                            this.draw(count);
                        }
                    }
                    else {
                        this.draw(toPercent);
                        this._timerSubscription.unsubscribe();
                    }
                });
            }
        };
        this.emitClickEvent = (event) => {
            if (this.options.renderOnClick) {
                this.animate(0, this.options.percent);
            }
            this.onClick.emit(event);
        };
        this.applyOptions = () => {
            // the options of <circle-progress> may change already
            for (let name of Object.keys(this.options)) {
                if (this.hasOwnProperty(name) && this[name] !== undefined) {
                    this.options[name] = this[name];
                }
                else if (this.templateOptions && this.templateOptions[name] !== undefined) {
                    this.options[name] = this.templateOptions[name];
                }
            }
            // make sure key options valid
            this.options.radius = Math.abs(+this.options.radius);
            this.options.space = +this.options.space;
            this.options.percent = +this.options.percent > 0 ? +this.options.percent : 0;
            this.options.maxPercent = Math.abs(+this.options.maxPercent);
            this.options.animationDuration = Math.abs(this.options.animationDuration);
            this.options.outerStrokeWidth = Math.abs(+this.options.outerStrokeWidth);
            this.options.innerStrokeWidth = Math.abs(+this.options.innerStrokeWidth);
            this.options.backgroundPadding = +this.options.backgroundPadding;
        };
        this.getRelativeY = (rowNum, rowCount) => {
            // why '-0.18em'? It's a magic number when property 'alignment-baseline' equals 'baseline'. :)
            let initialOffset = -0.18, offset = 1;
            return (initialOffset + offset * (rowNum - rowCount / 2)).toFixed(2) + 'em';
        };
        this.min = (a, b) => {
            return a < b ? a : b;
        };
        this.max = (a, b) => {
            return a > b ? a : b;
        };
        this.uuid = () => {
            // https://www.w3resource.com/javascript-exercises/javascript-math-exercise-23.php
            var dt = new Date().getTime();
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (dt + Math.random() * 16) % 16 | 0;
                dt = Math.floor(dt / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
            return uuid;
        };
        this.findSvgElement = function () {
            if (this.svgElement === null) {
                let tags = this.elRef.nativeElement.getElementsByTagName('svg');
                if (tags.length > 0) {
                    this.svgElement = tags[0];
                }
            }
        };
        this.checkViewport = () => {
            this.findSvgElement();
            let previousValue = this.isInViewport;
            this.isInViewport = this.isElementInViewport(this.svgElement);
            if (previousValue !== this.isInViewport) {
                this.onViewportChanged.emit({ oldValue: previousValue, newValue: this.isInViewport });
            }
        };
        this.onScroll = (event) => {
            this.checkViewport();
        };
        this.loadEventsForLazyMode = () => {
            if (this.options.lazy) {
                this.document.addEventListener('scroll', this.onScroll, true);
                this.window.addEventListener('resize', this.onScroll, true);
                if (this._viewportChangedSubscriber === null) {
                    this._viewportChangedSubscriber = this.onViewportChanged.subscribe(({ oldValue, newValue }) => {
                        newValue ? this.render() : null;
                    });
                }
                // svgElement must be created in DOM before being checked.
                // Is there a better way to check the existence of svgElemnt?
                let _timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, 50).subscribe(() => {
                    this.svgElement === null ? this.checkViewport() : _timer.unsubscribe();
                });
            }
        };
        this.unloadEventsForLazyMode = () => {
            // Remove event listeners
            this.document.removeEventListener('scroll', this.onScroll, true);
            this.window.removeEventListener('resize', this.onScroll, true);
            // Unsubscribe onViewportChanged
            if (this._viewportChangedSubscriber !== null) {
                this._viewportChangedSubscriber.unsubscribe();
                this._viewportChangedSubscriber = null;
            }
        };
        this.document = document;
        this.window = this.document.defaultView;
        Object.assign(this.options, defaultOptions);
        Object.assign(this.defaultOptions, defaultOptions);
    }
    isDrawing() {
        return (this._timerSubscription && !this._timerSubscription.closed);
    }
    isElementInViewport(el) {
        // Return false if el has not been created in page.
        if (el === null || el === undefined)
            return false;
        // Check if the element is out of view due to a container scrolling
        let rect = el.getBoundingClientRect(), parent = el.parentNode, parentRect;
        do {
            parentRect = parent.getBoundingClientRect();
            if (rect.top >= parentRect.bottom)
                return false;
            if (rect.bottom <= parentRect.top)
                return false;
            if (rect.left >= parentRect.right)
                return false;
            if (rect.right <= parentRect.left)
                return false;
            parent = parent.parentNode;
        } while (parent != this.document.body);
        // Check its within the document viewport
        if (rect.top >= (this.window.innerHeight || this.document.documentElement.clientHeight))
            return false;
        if (rect.bottom <= 0)
            return false;
        if (rect.left >= (this.window.innerWidth || this.document.documentElement.clientWidth))
            return false;
        if (rect.right <= 0)
            return false;
        return true;
    }
    ngOnInit() {
        this.loadEventsForLazyMode();
    }
    ngOnDestroy() {
        this.unloadEventsForLazyMode();
    }
    ngOnChanges(changes) {
        this.render();
        if ('lazy' in changes) {
            changes.lazy.currentValue ? this.loadEventsForLazyMode() : this.unloadEventsForLazyMode();
        }
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], CircleProgressComponent.prototype, "onClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CircleProgressComponent.prototype, "name", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CircleProgressComponent.prototype, "class", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], CircleProgressComponent.prototype, "backgroundGradient", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CircleProgressComponent.prototype, "backgroundColor", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CircleProgressComponent.prototype, "backgroundGradientStopColor", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], CircleProgressComponent.prototype, "backgroundOpacity", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CircleProgressComponent.prototype, "backgroundStroke", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], CircleProgressComponent.prototype, "backgroundStrokeWidth", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], CircleProgressComponent.prototype, "backgroundPadding", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], CircleProgressComponent.prototype, "radius", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], CircleProgressComponent.prototype, "space", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], CircleProgressComponent.prototype, "percent", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], CircleProgressComponent.prototype, "toFixed", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], CircleProgressComponent.prototype, "maxPercent", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], CircleProgressComponent.prototype, "renderOnClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CircleProgressComponent.prototype, "units", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CircleProgressComponent.prototype, "unitsFontSize", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CircleProgressComponent.prototype, "unitsFontWeight", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CircleProgressComponent.prototype, "unitsColor", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], CircleProgressComponent.prototype, "outerStrokeGradient", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], CircleProgressComponent.prototype, "outerStrokeWidth", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CircleProgressComponent.prototype, "outerStrokeColor", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CircleProgressComponent.prototype, "outerStrokeGradientStopColor", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CircleProgressComponent.prototype, "outerStrokeLinecap", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CircleProgressComponent.prototype, "innerStrokeColor", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CircleProgressComponent.prototype, "innerStrokeWidth", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)
], CircleProgressComponent.prototype, "titleFormat", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CircleProgressComponent.prototype, "title", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CircleProgressComponent.prototype, "titleColor", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CircleProgressComponent.prototype, "titleFontSize", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CircleProgressComponent.prototype, "titleFontWeight", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)
], CircleProgressComponent.prototype, "subtitleFormat", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], CircleProgressComponent.prototype, "subtitle", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CircleProgressComponent.prototype, "subtitleColor", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CircleProgressComponent.prototype, "subtitleFontSize", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CircleProgressComponent.prototype, "subtitleFontWeight", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CircleProgressComponent.prototype, "imageSrc", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], CircleProgressComponent.prototype, "imageHeight", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], CircleProgressComponent.prototype, "imageWidth", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], CircleProgressComponent.prototype, "animation", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], CircleProgressComponent.prototype, "animateTitle", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], CircleProgressComponent.prototype, "animateSubtitle", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], CircleProgressComponent.prototype, "animationDuration", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], CircleProgressComponent.prototype, "showTitle", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], CircleProgressComponent.prototype, "showSubtitle", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], CircleProgressComponent.prototype, "showUnits", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], CircleProgressComponent.prototype, "showImage", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], CircleProgressComponent.prototype, "showBackground", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], CircleProgressComponent.prototype, "showInnerStroke", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], CircleProgressComponent.prototype, "clockwise", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], CircleProgressComponent.prototype, "responsive", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], CircleProgressComponent.prototype, "startFromZero", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], CircleProgressComponent.prototype, "showZeroOuterStroke", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], CircleProgressComponent.prototype, "lazy", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('options'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", CircleProgressOptions)
], CircleProgressComponent.prototype, "templateOptions", void 0);
CircleProgressComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'circle-progress',
        template: `
        <svg xmlns="http://www.w3.org/2000/svg" *ngIf="svg"
             [attr.viewBox]="svg.viewBox" preserveAspectRatio="xMidYMid meet"
             [attr.height]="svg.height" [attr.width]="svg.width" (click)="emitClickEvent($event)" [attr.class]="options.class">
            <defs>
                <linearGradient *ngIf="options.outerStrokeGradient" [attr.id]="svg.outerLinearGradient.id">
                    <stop offset="5%" [attr.stop-color]="svg.outerLinearGradient.colorStop1"  [attr.stop-opacity]="1"/>
                    <stop offset="95%" [attr.stop-color]="svg.outerLinearGradient.colorStop2" [attr.stop-opacity]="1"/>
                </linearGradient>
                <radialGradient *ngIf="options.backgroundGradient" [attr.id]="svg.radialGradient.id">
                    <stop offset="5%" [attr.stop-color]="svg.radialGradient.colorStop1" [attr.stop-opacity]="1"/>
                    <stop offset="95%" [attr.stop-color]="svg.radialGradient.colorStop2" [attr.stop-opacity]="1"/>
                </radialGradient>
            </defs>
            <ng-container *ngIf="options.showBackground">
                <circle *ngIf="!options.backgroundGradient"
                        [attr.cx]="svg.backgroundCircle.cx"
                        [attr.cy]="svg.backgroundCircle.cy"
                        [attr.r]="svg.backgroundCircle.r"
                        [attr.fill]="svg.backgroundCircle.fill"
                        [attr.fill-opacity]="svg.backgroundCircle.fillOpacity"
                        [attr.stroke]="svg.backgroundCircle.stroke"
                        [attr.stroke-width]="svg.backgroundCircle.strokeWidth"/>
                <circle *ngIf="options.backgroundGradient"
                        [attr.cx]="svg.backgroundCircle.cx"
                        [attr.cy]="svg.backgroundCircle.cy"
                        [attr.r]="svg.backgroundCircle.r"
                        attr.fill="url(#{{svg.radialGradient.id}})"
                        [attr.fill-opacity]="svg.backgroundCircle.fillOpacity"
                        [attr.stroke]="svg.backgroundCircle.stroke"
                        [attr.stroke-width]="svg.backgroundCircle.strokeWidth"/>
            </ng-container>            
            <circle *ngIf="options.showInnerStroke"
                    [attr.cx]="svg.circle.cx"
                    [attr.cy]="svg.circle.cy"
                    [attr.r]="svg.circle.r"
                    [attr.fill]="svg.circle.fill"
                    [attr.stroke]="svg.circle.stroke"
                    [attr.stroke-width]="svg.circle.strokeWidth"/>
            <ng-container *ngIf="+options.percent!==0 || options.showZeroOuterStroke">
                <path *ngIf="!options.outerStrokeGradient"
                        [attr.d]="svg.path.d"
                        [attr.stroke]="svg.path.stroke"
                        [attr.stroke-width]="svg.path.strokeWidth"
                        [attr.stroke-linecap]="svg.path.strokeLinecap"
                        [attr.fill]="svg.path.fill"/>
                <path *ngIf="options.outerStrokeGradient"
                        [attr.d]="svg.path.d"
                        attr.stroke="url(#{{svg.outerLinearGradient.id}})"
                        [attr.stroke-width]="svg.path.strokeWidth"
                        [attr.stroke-linecap]="svg.path.strokeLinecap"
                        [attr.fill]="svg.path.fill"/>
            </ng-container>
            <text *ngIf="!options.showImage && (options.showTitle || options.showUnits || options.showSubtitle)"
                  alignment-baseline="baseline"
                  [attr.x]="svg.circle.cx"
                  [attr.y]="svg.circle.cy"
                  [attr.text-anchor]="svg.title.textAnchor">
                <ng-container *ngIf="options.showTitle">
                    <tspan *ngFor="let tspan of svg.title.tspans"
                           [attr.x]="svg.title.x"
                           [attr.y]="svg.title.y"
                           [attr.dy]="tspan.dy"
                           [attr.font-size]="svg.title.fontSize"
                           [attr.font-weight]="svg.title.fontWeight"
                           [attr.fill]="svg.title.color">{{tspan.span}}</tspan>
                </ng-container>
                <tspan *ngIf="options.showUnits"
                       [attr.font-size]="svg.units.fontSize"
                       [attr.font-weight]="svg.units.fontWeight"
                       [attr.fill]="svg.units.color">{{svg.units.text}}</tspan>
                <ng-container *ngIf="options.showSubtitle">
                    <tspan *ngFor="let tspan of svg.subtitle.tspans"
                           [attr.x]="svg.subtitle.x"
                           [attr.y]="svg.subtitle.y"
                           [attr.dy]="tspan.dy"
                           [attr.font-size]="svg.subtitle.fontSize"
                           [attr.font-weight]="svg.subtitle.fontWeight"
                           [attr.fill]="svg.subtitle.color">{{tspan.span}}</tspan>
                </ng-container>
            </text>
            <image *ngIf="options.showImage" preserveAspectRatio="none" 
                [attr.height]="svg.image.height"
                [attr.width]="svg.image.width"
                [attr.xlink:href]="svg.image.src"
                [attr.x]="svg.image.x"
                [attr.y]="svg.image.y"
            />
        </svg>
    `
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [CircleProgressOptions, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], Object])
], CircleProgressComponent);

var NgCircleProgressModule_1;
let NgCircleProgressModule = NgCircleProgressModule_1 = class NgCircleProgressModule {
    static forRoot(options = {}) {
        return {
            ngModule: NgCircleProgressModule_1,
            providers: [
                { provide: CircleProgressOptions, useValue: options }
            ]
        };
    }
};
NgCircleProgressModule = NgCircleProgressModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        declarations: [
            CircleProgressComponent,
        ],
        exports: [
            CircleProgressComponent,
        ]
    })
], NgCircleProgressModule);

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ng-circle-progress.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home/home.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home/home.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header-route-menu></header-route-menu>\n<div class=\"container-fluid mt--6\">\n    <div class=\"row\">\n        <!-- Speaking -->\n        <div class=\"col-md-6 col-xl-3\" (click)=\"goToQBank('speaking')\">\n            <div class=\"card\">\n                <div class=\"left-content\">\n                    <p class=\"question-title\">\n                        {{homeData[3].moduleType}}\n                    </p>\n                    <p class=\"question-count\">\n                        {{homeData[3].moduleQuestionCount}}\n                    </p>\n\n                    <progress-bar [progress-percent]=\"homeData[3].progressPercent\"></progress-bar>\n\n                </div>\n                <div class=\"icon-content speaking\">\n                    <div class=\"question-icon \">\n                        <img src=\"assets/icon/menu/speaking.svg\">\n                    </div>\n                    <p>Speaking</p>\n                </div>\n            </div>\n        </div>\n\n        <!-- Writing -->\n        <div class=\"col-md-6 col-xl-3\" (click)=\"goToQBank('writing')\">\n            <div class=\"card\">\n                <div class=\"left-content\">\n                    <p class=\"question-title\">\n                        {{homeData[0].moduleType}}\n                    </p>\n                    <p class=\"question-count\">\n                        {{homeData[0].moduleQuestionCount}}\n                    </p>\n\n                    <progress-bar [progress-percent]=\"homeData[0].progressPercent\"></progress-bar>\n\n                </div>\n                <div class=\"icon-content writing\">\n                    <div class=\"question-icon\">\n                        <img src=\"assets/icon/menu/writing.svg\">\n                    </div>\n                    <p>Writing</p>\n                </div>\n            </div>\n        </div>\n\n        <!-- Reading -->\n        <div class=\"col-md-6 col-xl-3\" (click)=\"goToQBank('reading')\">\n            <div class=\"card\">\n                <div class=\"left-content\">\n                    <p class=\"question-title\">\n                        {{homeData[1].moduleType}}\n                    </p>\n                    <p class=\"question-count\">\n                        {{homeData[1].moduleQuestionCount}}\n                    </p>\n\n                    <progress-bar [progress-percent]=\"homeData[1].progressPercent\"></progress-bar>\n\n                </div>\n                <div class=\"icon-content reading\">\n                    <div class=\"question-icon \">\n                        <img src=\"assets/icon/menu/reading.svg\">\n                    </div>\n                    <p>Reading</p>\n                </div>\n            </div>\n        </div>\n\n        <!-- Listening -->\n        <div class=\"col-md-6 col-xl-3\" (click)=\"goToQBank('listening')\">\n            <div class=\"card\">\n                <div class=\"left-content\">\n                    <p class=\"question-title\">\n                        {{homeData[2].moduleType}}\n                    </p>\n                    <p class=\"question-count\">\n                        {{homeData[2].moduleQuestionCount}}\n                    </p>\n\n                    <progress-bar [progress-percent]=\"homeData[2].progressPercent\"></progress-bar>\n\n                </div>\n                <div class=\"icon-content listening\">\n                    <div class=\"question-icon\">\n                        <img src=\"assets/icon/menu/listening.svg\">\n                    </div>\n                    <p>Listening</p>\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-6 col-xl-4\">\n            <div class=\"card p-0\" style=\"flex-direction: column;\">\n                <p class=\"plan-title \">\n                    Study Plan\n                </p>\n                <div class=\"studyplan-img \">\n                    <ng-lottie height=\"200px\" [styles]=\"styles\" [options]=\"options\"></ng-lottie>\n                </div>\n                <ng-container *ngFor=\"let qb of homeData[4].questionBank\">\n                    <div class=\"prediction-question\">\n                        <div [class]=\"qb.moduleType.toLowerCase()\">\n                            <p>\n                                {{qb.moduleType}}\n                            </p>\n                            <div style=\"height: 80px;\">\n                                <circle-progress [percent]=\"qb.progress\" [radius]=\"100\" [outerStrokeColor]=\"'#D6980C'\"\n                                    [showSubtitle]=false [innerStrokeColor]=\"'rgb(248, 248, 219)'\" [animation]=\"true\"\n                                    [outerStrokeWidth]=\"24\" [animationDuration]=\"500\" [responsive]=\"true\"\n                                    [showBackground]=true [unitsFontSize]=\"32\" [titleFontSize]=\"46\"\n                                    [backgroundColor]=\"'rgb(248, 248, 219)'\"></circle-progress>\n                            </div>\n                        </div>\n                    </div>\n                </ng-container>\n            </div>\n        </div>\n\n        <div class=\"col-md-6 col-xl-4\">\n            <div class=\"card card-training\" style=\"flex-direction: column;\" (click)=\"goToVocab()\">\n                <div class=\"d-flex justify-content-between\">\n                    <div class=\"d-flex flex-column justify-content-start\">\n                        <div class=\"training-title-box\">\n                            Learn\n                        </div>\n                        <p class=\"training-title\">\n                            Vocabulary\n                        </p>\n                    </div>\n                    <div class=\"studyplan-img\">\n                        <ng-lottie height=\"120px\" [styles]=\"styles\" [options]=\"option2\"></ng-lottie>\n                    </div>\n                </div>\n                <span class=\"training-description\">Learn new vocabulary and pronunciation</span>\n            </div>\n\n            <div class=\"card card-training training-grammar\" style=\"flex-direction: column;\" (click)=\"goToGrammar()\">\n                <div class=\"d-flex justify-content-between\">\n                    <div class=\"d-flex flex-column justify-content-center\">\n                        <div class=\"training-title-box title-box-grammar\">\n                            Learn\n                        </div>\n                        <p class=\"training-title\">\n                            Grammar\n                        </p>\n                    </div>\n                    <div class=\"studyplan-img\">\n                        <ng-lottie height=\"110px\" [styles]=\"styles\" [options]=\"option3\"></ng-lottie>\n                    </div>\n                </div>\n                <span class=\"training-description\">Our grammar guide will help you</span>\n            </div>\n\n            <div class=\"card card-subscribe\" (click)=\"goToChannel()\">\n                <ng-lottie height=\"150px\" [styles]=\"styles\" [options]=\"option5\"></ng-lottie>\n            </div>\n        </div>\n\n        <div class=\"col-md-6 col-xl-4\">\n            <div class=\"col-md-12 col-xl-12 mb-3\">\n                <div class=\"card p-0 subscribe__card\" (click)=\"goToLiveClass()\">\n                    <div class=\"studyplan-img\">\n                        <ng-lottie height=\"220px\" [styles]=\"styles\" [options]=\"option4\"></ng-lottie>\n                    </div>\n                    <p class=\"plan-title subscrib__title\">Live Classes</p>\n                </div>\n            </div>\n\n            <div class=\"col-md-12 col-xl-12 mb-3\">\n                <div class=\"card p-0 mb-3\" (click)=\"goToPrediction()\">\n                    <div class=\"d-flex w-100\">\n                        <div class=\"img\">\n                            <img src=\"assets/icon/menu/prediction-file.svg\">\n                        </div>\n                        <div class=\"right-text\"> Prediction</div>\n                    </div>\n                </div>\n\n                <div class=\"card p-0\" (click)=\"goToMock()\">\n                    <div class=\"d-flex w-100\">\n                        <div class=\"img\">\n                            <img src=\"assets/icon/menu/individual-mock.svg\">\n                        </div>\n                        <div class=\"right-text\"> Mock Test</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"link-container\">\n            <div class=\"youtube-body\" *ngFor=\"let link of youtubeLinks\">\n                <div class=\"youtube-card\">\n                    <div class=\"yotub-box\">\n                        <iframe width=\"360\" height=\"240\" [src]=\"link.link\" frameborder=\"0\"\n                        allowfullscreen (load)=\"youtubeLoading()\"></iframe>\n                        <!-- <div class=\"loader\" *ngIf=\"isLinkLoading\"></div> -->\n                    </div>\n              \n                    <p class=\"link-title\">{{link.title}}</p>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/modules/home/home-routing.moudule.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/home/home-routing.moudule.ts ***!
  \******************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_modules_home_reslovers_home_reslover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modules/home/reslovers/home.reslover */ "./src/app/modules/home/reslovers/home.reslover.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/modules/home/home/home.component.ts");





const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        resolve: {
            data: _app_modules_home_reslovers_home_reslover__WEBPACK_IMPORTED_MODULE_3__["HometResolver"]
        }
    }
];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [
            _app_modules_home_reslovers_home_reslover__WEBPACK_IMPORTED_MODULE_3__["HometResolver"]
        ]
    })
], HomeRoutingModule);



/***/ }),

/***/ "./src/app/modules/home/home.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: playerFactory, HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerFactory", function() { return playerFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/modules/home/home/home.component.ts");
/* harmony import */ var _app_modules_home_home_routing_moudule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/home/home-routing.moudule */ "./src/app/modules/home/home-routing.moudule.ts");
/* harmony import */ var _app_shared_basic_components_basic_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/basic-components/basic.module */ "./src/app/shared/basic-components/basic.module.ts");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-circle-progress */ "./node_modules/ng-circle-progress/fesm2015/ng-circle-progress.js");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-lottie */ "./node_modules/ngx-lottie/fesm2015/ngx-lottie.js");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lottie-web */ "./node_modules/lottie-web/build/player/lottie.js");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_8__);






// Import ng-circle-progress



function playerFactory() {
    return lottie_web__WEBPACK_IMPORTED_MODULE_8___default.a;
}
let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _app_modules_home_home_routing_moudule__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"],
            _app_shared_basic_components_basic_module__WEBPACK_IMPORTED_MODULE_5__["BasicModule"],
            // Specify ng-circle-progress as an import
            ng_circle_progress__WEBPACK_IMPORTED_MODULE_6__["NgCircleProgressModule"].forRoot({}),
            ngx_lottie__WEBPACK_IMPORTED_MODULE_7__["LottieModule"].forRoot({ player: playerFactory })
        ],
        exports: [
            _app_modules_home_home_routing_moudule__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"]
        ]
    })
], HomeModule);



/***/ }),

/***/ "./src/app/modules/home/home/home.component.css":
/*!******************************************************!*\
  !*** ./src/app/modules/home/home/home.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p.question-title,p.question-count,.question-progress-percent,.icon-content p,\n.plan-title,.reading>p,.listening>p,.right-text,.training-title{\n    font-family: Lullabies;\n}\np {\n    margin-bottom: 10px;\n}\n.card {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    box-shadow: var(--card-boxshadow);\n}\n/* ---------------------------------------------------\n    CARD LEFT CONTENT\n----------------------------------------------------- */\n.left-content {\n    width: 60%;\n}\np.question-title {\n    color: var(--text-fade-color);\n}\n/* ---------------------------------------------------\n    ICON CONTENT\n----------------------------------------------------- */\n.icon-content {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    width: 40%;\n}\n.icon-content p {\n    font-weight: 500;\n}\n.question-icon {\n    width: 50%;\n    height: 50%;\n    margin-bottom: 6px;\n}\n.question-icon img {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: contain;\n       object-fit: contain;\n}\n.speaking .question-icon img {\n    -webkit-filter: var(--speaking-filter-color);\n            filter: var(--speaking-filter-color);\n}\n.listening .question-icon img {\n    -webkit-filter: var(--listening-filter-color);\n            filter: var(--listening-filter-color);\n}\n.writing .question-icon img {\n    -webkit-filter: var(--writing-filter-color);\n            filter: var(--writing-filter-color);\n}\n.reading .question-icon img {\n    -webkit-filter: var(--reading-filter-color);\n            filter: var(--reading-filter-color);\n}\n.speaking p {\n    color: var(--speaking-color)\n}\n.listening p {\n    color: var(--listening-color)\n}\n.writing p {\n    color: var(--writing-color);\n}\n.reading p {\n    color: var(--reading-color);\n}\n/* \np.question-count {\n    color: var(--text-dark-color);\n} */\n/* ---------------------------------------------------\n    STUDY PLAN,Individual Mock Test,Prediction File\n----------------------------------------------------- */\nul {\n    width: 100%;\n    margin-bottom: 0;\n}\nli {\n    padding: 16px;\n    border-bottom: solid 1px #ececec;\n}\nli.title {\n    text-align: center;\n    FONT-WEIGHT: 600;\n    color: var(--text-dark-color);\n}\n.bar {\n    width: 6px;\n    background-color: var(--text-fade-color);\n    height: 40px;\n    border-radius: 5px;\n    display: inline-block;\n    margin-right: 10px;\n}\n.speaking .bar {\n    background-color: var(--speaking-color);\n    color: var(--speaking-color);\n}\n.listening .bar {\n    background-color: var(--listening-color);\n    color: var(--listening-color);\n}\n.reading .bar {\n    background-color: var(--reading-color);\n    color: var(--reading-color);\n}\n.writing .bar {\n    background-color: var(--writing-color);\n    color: var(--writing-color);\n}\n.speaking {\n    color: var(--speaking-color);\n}\n.listening {\n    color: var(--listening-color);\n}\n.reading {\n    color: var(--reading-color);\n}\n.writing {\n    color: var(--writing-color);\n}\n.question>div {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n}\nli.prediction-question {\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap;\n}\n.prediction-question>div {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    flex-direction: row;\n    -webkit-box-align: center;\n            align-items: center;\n    margin: 8px;\n    border-radius: 10px;\n    padding: 10px;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n}\n.prediction-question>.speaking,.mock-question>.speaking {\n    background-color: #d1ffd1;\n}\n.prediction-question>.listening,.mock-question>.listening {\n    background-color: #ffe1e7;\n}\n.prediction-question>.reading,.mock-question>.reading {\n    background-color: #d6f8ff;\n}\n.mock-question>div{\n    display: -webkit-box;\n    display: flex;\n    height: 105px;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    padding: 10px;\n    border-radius: 10px;\n}\n.right-text{\n    background-color: var(--half-bg-color);\n    color: white;\n    text-transform: uppercase;\n    /* font-weight: 500; */\n    width: 100%;\n    /* font-size: 18px; */\n    padding: 20px;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    cursor: pointer;\n    border-radius: 0px 14px 14px 0px;\n}\n.img {\n    width: 100px;\n    height: 80px;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n}\n.uncheck-box {\n    border: solid 1px var(--text-fade-color);\n    height: 20px;\n    width: 20px;\n}\n@media only screen and (max-width: 760px) {\n    .prediction-question>div {\n        width:100%;\n    }\n}\n.prediction-question{\n    border-bottom: solid 1px #ebebeb;\n}\n.prediction-question:last-child{\n    border-bottom: unset;\n}\np.plan-title {\n    padding: 18px;\n    font-weight: 500;\n    border-bottom: solid;\n    border-bottom: solid 1px #ebebeb;\n    color: var(--text-fade-color);\n    text-align: center;\n}\n.card-training {\n    border: solid;\n    background-color: #dcfaff;\n    margin-bottom: 30px;\n}\n.training-title-box {\n    background-color: #40c0d6;\n    color: white;\n    border: solid 1px black;\n    border-radius: 26px;\n    padding: 2px;\n    font-size: 14px;\n    font-weight: 500;\n    width: 70px;\n    text-align: center;\n    margin-bottom: 10px;\n}\n.title-box-grammar{\n    background-color: #fc86a1;\n    color: #2d2c2c;\n}\n.training-grammar{\n    border: solid;\n    background-color: #fff1f4;\n}\np.training-title {\n    font-size: 30px;\n    font-weight: 600;\n}\n.training-description{\n    font-size: 14px;\n    font-weight: 500;\n}\n.card__subscribe--img {\n    height: 40px;\n}\n.subscribe__card{\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    /* margin-top: 20px; */\n}\n.subscrib__title{\n    border-bottom: 0;\n    border-top: solid 1px #ebebeb;\n    color: var(--half-bg-color);\n    margin-bottom: 0;\n}\n.card.card-subscribe {\n    height: 80px;\n    padding: 0;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n}\n.card.card-subscribe {\n    background-color: #c90403;\n    height: 80px;\n    padding: 0;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n}\np.link-title {\n    /* text-align: center; */\n    font-size: 18px;\n    font-weight: 500;\n    padding-left: 10px;\n}\n.loader {\n    border: 16px solid #f3f3f3;\n    border-radius: 50%;\n    border-top: 16px solid #3498db;\n    width: 120px;\n    height: 120px;\n    -webkit-animation: spin 2s linear infinite; /* Safari */\n    animation: spin 2s linear infinite;\n  }\n/* Safari */\n@-webkit-keyframes spin {\n    0% { -webkit-transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); }\n  }\n@keyframes spin {\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n  }\n.link-container{\n      margin-top: 10px;\n      display: -webkit-box;\n      display: flex;\n    /* background-color: white; */\n    left: 10px;\n    top: 10px;\n    width: 100%;\n    height: auto;\n    overflow-x: auto;\n    white-space: nowrap;\n  }\n.youtube-card {\n    background-color: white;\n    margin: 10px 10px 10px 20px;\n    padding: 10px;\n    border-radius: 10px;\n    box-shadow: var(--card-boxshadow);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw4QkFBbUI7SUFBbkIsNkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix5QkFBOEI7WUFBOUIsOEJBQThCO0lBQzlCLGlDQUFpQztBQUNyQztBQUVBOzt1REFFdUQ7QUFFdkQ7SUFDSSxVQUFVO0FBQ2Q7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQztBQUVBOzt1REFFdUQ7QUFFdkQ7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsVUFBVTtBQUNkO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFtQjtPQUFuQixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLDRDQUFvQztZQUFwQyxvQ0FBb0M7QUFDeEM7QUFFQTtJQUNJLDZDQUFxQztZQUFyQyxxQ0FBcUM7QUFDekM7QUFFQTtJQUNJLDJDQUFtQztZQUFuQyxtQ0FBbUM7QUFDdkM7QUFFQTtJQUNJLDJDQUFtQztZQUFuQyxtQ0FBbUM7QUFDdkM7QUFFQTtJQUNJO0FBQ0o7QUFFQTtJQUNJO0FBQ0o7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7OztHQUdHO0FBRUg7O3VEQUV1RDtBQUV2RDtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7QUFDcEM7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSxVQUFVO0lBQ1Ysd0NBQXdDO0lBQ3hDLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLDRCQUE0QjtBQUNoQztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLDZCQUE2QjtBQUNqQztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYixlQUFlO0FBQ25CO0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHlCQUE4QjtZQUE5Qiw4QkFBOEI7QUFDbEM7QUFHQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLGFBQWE7SUFDYix5QkFBOEI7WUFBOUIsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQ0FBZ0M7QUFDcEM7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix3QkFBdUI7WUFBdkIsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7QUFDSjtBQUdBO0lBQ0ksZ0NBQWdDO0FBQ3BDO0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0Isa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBR0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtBQUM3QjtBQUdBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1Ysb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFVBQVU7SUFDVixvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFtQjtZQUFuQixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGFBQWE7SUFDYiwwQ0FBMEMsRUFBRSxXQUFXO0lBQ3ZELGtDQUFrQztFQUNwQztBQUVBLFdBQVc7QUFDWDtJQUNFLEtBQUssK0JBQStCLEVBQUU7SUFDdEMsT0FBTyxpQ0FBaUMsRUFBRTtFQUM1QztBQUVBO0lBQ0UsS0FBSywrQkFBdUIsRUFBdkIsdUJBQXVCLEVBQUU7SUFDOUIsT0FBTyxpQ0FBeUIsRUFBekIseUJBQXlCLEVBQUU7RUFDcEM7QUFFQTtNQUNJLGdCQUFnQjtNQUNoQixvQkFBYTtNQUFiLGFBQWE7SUFDZiw2QkFBNkI7SUFDN0IsVUFBVTtJQUNWLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7QUFFQTtJQUNFLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQ0FBaUM7QUFDckMiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hvbWUvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwLnF1ZXN0aW9uLXRpdGxlLHAucXVlc3Rpb24tY291bnQsLnF1ZXN0aW9uLXByb2dyZXNzLXBlcmNlbnQsLmljb24tY29udGVudCBwLFxuLnBsYW4tdGl0bGUsLnJlYWRpbmc+cCwubGlzdGVuaW5nPnAsLnJpZ2h0LXRleHQsLnRyYWluaW5nLXRpdGxle1xuICAgIGZvbnQtZmFtaWx5OiBMdWxsYWJpZXM7XG59XG5wIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLWJveHNoYWRvdyk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIENBUkQgTEVGVCBDT05URU5UXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4ubGVmdC1jb250ZW50IHtcbiAgICB3aWR0aDogNjAlO1xufVxuXG5wLnF1ZXN0aW9uLXRpdGxlIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1mYWRlLWNvbG9yKTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgSUNPTiBDT05URU5UXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uaWNvbi1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogNDAlO1xufVxuXG4uaWNvbi1jb250ZW50IHAge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5xdWVzdGlvbi1pY29uIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogNTAlO1xuICAgIG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuLnF1ZXN0aW9uLWljb24gaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLnNwZWFraW5nIC5xdWVzdGlvbi1pY29uIGltZyB7XG4gICAgZmlsdGVyOiB2YXIoLS1zcGVha2luZy1maWx0ZXItY29sb3IpO1xufVxuXG4ubGlzdGVuaW5nIC5xdWVzdGlvbi1pY29uIGltZyB7XG4gICAgZmlsdGVyOiB2YXIoLS1saXN0ZW5pbmctZmlsdGVyLWNvbG9yKTtcbn1cblxuLndyaXRpbmcgLnF1ZXN0aW9uLWljb24gaW1nIHtcbiAgICBmaWx0ZXI6IHZhcigtLXdyaXRpbmctZmlsdGVyLWNvbG9yKTtcbn1cblxuLnJlYWRpbmcgLnF1ZXN0aW9uLWljb24gaW1nIHtcbiAgICBmaWx0ZXI6IHZhcigtLXJlYWRpbmctZmlsdGVyLWNvbG9yKTtcbn1cblxuLnNwZWFraW5nIHAge1xuICAgIGNvbG9yOiB2YXIoLS1zcGVha2luZy1jb2xvcilcbn1cblxuLmxpc3RlbmluZyBwIHtcbiAgICBjb2xvcjogdmFyKC0tbGlzdGVuaW5nLWNvbG9yKVxufVxuXG4ud3JpdGluZyBwIHtcbiAgICBjb2xvcjogdmFyKC0td3JpdGluZy1jb2xvcik7XG59XG5cbi5yZWFkaW5nIHAge1xuICAgIGNvbG9yOiB2YXIoLS1yZWFkaW5nLWNvbG9yKTtcbn1cbi8qIFxucC5xdWVzdGlvbi1jb3VudCB7XG4gICAgY29sb3I6IHZhcigtLXRleHQtZGFyay1jb2xvcik7XG59ICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFNUVURZIFBMQU4sSW5kaXZpZHVhbCBNb2NrIFRlc3QsUHJlZGljdGlvbiBGaWxlXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG51bCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxubGkge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNlY2VjZWM7XG59XG5cbmxpLnRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgRk9OVC1XRUlHSFQ6IDYwMDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrLWNvbG9yKTtcbn1cblxuLmJhciB7XG4gICAgd2lkdGg6IDZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWZhZGUtY29sb3IpO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnNwZWFraW5nIC5iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNwZWFraW5nLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tc3BlYWtpbmctY29sb3IpO1xufVxuXG4ubGlzdGVuaW5nIC5iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpc3RlbmluZy1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLWxpc3RlbmluZy1jb2xvcik7XG59XG5cbi5yZWFkaW5nIC5iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlYWRpbmctY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1yZWFkaW5nLWNvbG9yKTtcbn1cblxuLndyaXRpbmcgLmJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td3JpdGluZy1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLXdyaXRpbmctY29sb3IpO1xufVxuXG4uc3BlYWtpbmcge1xuICAgIGNvbG9yOiB2YXIoLS1zcGVha2luZy1jb2xvcik7XG59XG5cbi5saXN0ZW5pbmcge1xuICAgIGNvbG9yOiB2YXIoLS1saXN0ZW5pbmctY29sb3IpO1xufVxuXG4ucmVhZGluZyB7XG4gICAgY29sb3I6IHZhcigtLXJlYWRpbmctY29sb3IpO1xufVxuXG4ud3JpdGluZyB7XG4gICAgY29sb3I6IHZhcigtLXdyaXRpbmctY29sb3IpO1xufVxuXG4ucXVlc3Rpb24+ZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmxpLnByZWRpY3Rpb24tcXVlc3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4ucHJlZGljdGlvbi1xdWVzdGlvbj5kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuXG4ucHJlZGljdGlvbi1xdWVzdGlvbj4uc3BlYWtpbmcsLm1vY2stcXVlc3Rpb24+LnNwZWFraW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFmZmQxO1xufVxuXG4ucHJlZGljdGlvbi1xdWVzdGlvbj4ubGlzdGVuaW5nLC5tb2NrLXF1ZXN0aW9uPi5saXN0ZW5pbmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmUxZTc7XG59XG5cbi5wcmVkaWN0aW9uLXF1ZXN0aW9uPi5yZWFkaW5nLC5tb2NrLXF1ZXN0aW9uPi5yZWFkaW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZmOGZmO1xufVxuLm1vY2stcXVlc3Rpb24+ZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4ucmlnaHQtdGV4dHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oYWxmLWJnLWNvbG9yKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAvKiBmb250LXdlaWdodDogNTAwOyAqL1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8qIGZvbnQtc2l6ZTogMThweDsgKi9cbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDE0cHggMTRweCAwcHg7XG59XG5cbi5pbWcge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udW5jaGVjay1ib3gge1xuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLXRleHQtZmFkZS1jb2xvcik7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSB7XG4gICAgLnByZWRpY3Rpb24tcXVlc3Rpb24+ZGl2IHtcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICB9XG59XG5cblxuLnByZWRpY3Rpb24tcXVlc3Rpb257XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNlYmViZWI7XG59XG5cbi5wcmVkaWN0aW9uLXF1ZXN0aW9uOmxhc3QtY2hpbGR7XG4gICAgYm9yZGVyLWJvdHRvbTogdW5zZXQ7XG59XG5cbnAucGxhbi10aXRsZSB7XG4gICAgcGFkZGluZzogMThweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZWJlYmViO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWZhZGUtY29sb3IpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhcmQtdHJhaW5pbmcge1xuICAgIGJvcmRlcjogc29saWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjZmFmZjtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4udHJhaW5pbmctdGl0bGUtYm94IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDBjMGQ2O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAyNnB4O1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB3aWR0aDogNzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuXG4udGl0bGUtYm94LWdyYW1tYXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjODZhMTtcbiAgICBjb2xvcjogIzJkMmMyYztcbn1cblxuLnRyYWluaW5nLWdyYW1tYXJ7XG4gICAgYm9yZGVyOiBzb2xpZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMWY0O1xufVxuXG5cbnAudHJhaW5pbmctdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4udHJhaW5pbmctZGVzY3JpcHRpb257XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5jYXJkX19zdWJzY3JpYmUtLWltZyB7XG4gICAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uc3Vic2NyaWJlX19jYXJke1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAvKiBtYXJnaW4tdG9wOiAyMHB4OyAqL1xufVxuXG4uc3Vic2NyaWJfX3RpdGxle1xuICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICNlYmViZWI7XG4gICAgY29sb3I6IHZhcigtLWhhbGYtYmctY29sb3IpO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5jYXJkLmNhcmQtc3Vic2NyaWJlIHtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jYXJkLmNhcmQtc3Vic2NyaWJlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzkwNDAzO1xuICAgIGhlaWdodDogODBweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxucC5saW5rLXRpdGxlIHtcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4ubG9hZGVyIHtcbiAgICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiO1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTsgLyogU2FmYXJpICovXG4gICAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuICBcbiAgLyogU2FmYXJpICovXG4gIEAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcbiAgICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgc3BpbiB7XG4gICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gIH1cblxuICAubGluay1jb250YWluZXJ7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgKi9cbiAgICBsZWZ0OiAxMHB4O1xuICAgIHRvcDogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG5cbiAgLnlvdXR1YmUtY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLWJveHNoYWRvdyk7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/home/home/home.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/home/home/home.component.ts ***!
  \*****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HomeComponent = class HomeComponent {
    constructor(_activeRoute, _router, sanitizer) {
        this._activeRoute = _activeRoute;
        this._router = _router;
        this.sanitizer = sanitizer;
        this.options = {
            path: 'assets/icon/lottie/studyplan.json',
        };
        this.option2 = {
            path: 'assets/icon/lottie/questions-and-answer.json',
        };
        this.option3 = {
            path: 'assets/icon/lottie/change-answer.json',
        };
        this.option4 = {
            path: 'assets/icon/lottie/easy-to-learn.json',
        };
        this.option5 = {
            path: 'assets/icon/lottie/subscribe-red.json',
        };
        this.youtubeLinks = [];
        this.isLinkLoading = true;
    }
    ngOnInit() {
        this.homeData = this._activeRoute.snapshot.data['data'];
        for (let data of this.homeData[7].links) {
            let safeUrl;
            safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(data.link);
            let temp = {
                link: safeUrl,
                title: data.title
            };
            this.youtubeLinks.push(temp);
        }
    }
    goToQBank(qb) {
        this._router.navigateByUrl(`alchemist-academy/question-bank/${qb}`);
    }
    goToStudyPlan(qb) {
        this._router.navigateByUrl(`alchemist-academy/evaluate-question/study-plan/${qb}`);
    }
    goToPrediction(qb) {
        this._router.navigateByUrl(`alchemist-academy/evaluate-question/prediction`);
    }
    goToMock(qb) {
        this._router.navigateByUrl(`alchemist-academy/evaluate-question/mock-test`);
    }
    goToVocab() {
        this._router.navigateByUrl(`alchemist-academy/training-game/vocabulary`);
    }
    goToGrammar() {
        this._router.navigateByUrl(`alchemist-academy/training-game/grammar`);
    }
    goToLiveClass() {
        this._router.navigateByUrl(`alchemist-academy/live-classes`);
    }
    goToChannel() {
        window.open('https://www.youtube.com/channel/UCCHh6c9NbQ8RKIDxK_DSDgg', "_blank");
    }
    youtubeLoading() {
        this.isLinkLoading = false;
        console.log('here laoding end');
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/modules/home/home/home.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/modules/home/reslovers/home.reslover.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/home/reslovers/home.reslover.ts ***!
  \*********************************************************/
/*! exports provided: HometResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HometResolver", function() { return HometResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/http/detail.service */ "./src/app/core/http/detail.service.ts");


;

let HometResolver = class HometResolver {
    constructor(service) {
        this.service = service;
    }
    resolve() {
        return this.service.getHome();
    }
};
HometResolver.ctorParameters = () => [
    { type: _app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_2__["DetailService"] }
];
HometResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_2__["DetailService"]])
], HometResolver);



/***/ })

}]);
//# sourceMappingURL=modules-home-home-module-es2015.fce83480d3edaf1bbe1f.js.map