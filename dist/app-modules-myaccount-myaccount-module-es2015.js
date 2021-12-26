(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-myaccount-myaccount-module"],{

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g, true&&(module.exports=g)});

//# sourceMappingURL=FileSaver.min.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/myaccount/user-detail/user-detail.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/myaccount/user-detail/user-detail.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row user-info-box\">\n        <div class=\"col-md-3\">\n            <div class=\"short-name-box\">\n                <div class=\"user-icon\">\n                    <img src=\"assets/icon/gifIcon/profile-picture-upload.gif\">\n                </div>\n                <p class=\"user-name\">{{myaccount.fullName}}</p>\n\n            </div>\n        </div>\n        <div class=\"col-md-9\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <label class=\"lbl-name\">E-MAIL:</label>\n                    <label class=\"lbl-text\">\n                        {{myaccount.email}}\n                    </label>\n                </div>\n                <div class=\"col-md-6\">\n                    <label class=\"lbl-name\">PHONE NO:</label>\n                    <label class=\"lbl-text\">\n                        {{myaccount.mobilePhone}}\n                    </label>\n                </div>\n\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <label class=\"lbl-name\">GENDER:</label>\n                    <label class=\"lbl-text\">\n                        {{myaccount.gender}}\n                    </label>\n                </div>\n                <div class=\"col-md-6\">\n                    <label class=\"lbl-name\">CITY:</label>\n                    <label class=\"lbl-text\">\n                        {{myaccount.branch.name}}\n                    </label>\n\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-12 px-0 py-3\">\n                    <label class=\"lbl-name\">DESIRED SCORE:</label>\n                    <label class=\"lbl-text\">\n                        {{myaccount.desiredScore.desiredScore}}\n                    </label>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"package-box mb-4\">\n        <div class=\"sand-clock-gif\">\n            <img src=\"assets/icon/gifIcon/sand-clock.gif\">\n        </div>\n        <div class=\"package-wrapper\">\n            <div class=\"package-block\">\n                <label class=\"lbl-name\">SUBSCRIPTION DAYS REMAINING</label>\n                <div class=\"d-flex justify-content-center\">\n                    <div class=\"count-circle\">\n                        {{myaccount.daysRemaning}}\n                    </div>\n                </div>\n            </div>\n            <div class=\"package-block\">\n                <label class=\"lbl-name\">SPEAKING ATTEMPTS REMAINING</label>\n                <div class=\"d-flex justify-content-center\">\n                    <div class=\"count-circle\">\n                        {{myaccount.speakingRemaing}}\n                    </div>\n                </div>\n            </div>\n            <div class=\"package-block\">\n                <label class=\"lbl-name\">MOCK TESTS REMAINING</label>\n                <div class=\"d-flex justify-content-center\">\n                    <div class=\"count-circle\">\n                        {{myaccount.mockTestRemaning}}\n                    </div>\n                </div>\n            </div>\n            <div class=\"package-block\">\n                <label class=\"lbl-name\">MOCK TEST USDED</label>\n                <div class=\"d-flex justify-content-center\">\n                    <div class=\"count-circle\">\n                        {{myaccount.mockTestUsed}}\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n    <div class=\"payment-box mb-5\" *ngIf=\"paymentList\">\n        <div class=\"payment-header\">\n            <div class=\"card-img\">\n                <img src=\"assets/icon/gifIcon/animation_500_kveyhkpf.gif\">\n            </div>\n            <p class=\"payment-title\">YOUR PAYMENT HISTORY</p>\n            <div class=\"global-img\">\n                <img src=\"assets/icon/gifIcon/earth.gif\">\n            </div>\n        </div>\n        <div class=\"payment-body\">\n            <div class=\"payment-row add-border\">\n                <div class=\"label-header\">\n                    DATE\n                </div>\n                <div class=\"label-header\">\n                    ITEM\n                </div>\n                <div class=\"label-header\">\n                    STATUS\n                </div>\n                <div class=\"label-header\">\n                    TOTAL\n                </div>\n                <div class=\"label-header\">\n                    VIEW INVOICE\n                </div>\n            </div>\n            <div class=\"payment-row my-3\" *ngFor=\"let payment of paymentList\">\n                <div class=\"label-header\">\n                    {{payment.createdDate}}\n                </div>\n                <div class=\"label-header\">\n                    {{payment.packageName }}\n                </div>\n                <div class=\"label-header\">\n                    <button class=\"btn status-box\">\n                        {{payment.status }}\n                    </button>\n\n                </div>\n                <div class=\"label-header\">\n                    {{payment.total }} <br>\n                    <span class=\"text-span\">(INCL. GST)</span>\n                </div>\n                <div class=\"label-header\">\n                    <button class=\"btn btn-invoice\" (click)=\"getDownInvoicePdf(payment.invoicePdf)\">\n                        INVOICE\n                    </button>\n\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/modules/myaccount/myaccount.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/myaccount/myaccount.module.ts ***!
  \*******************************************************/
/*! exports provided: MyaccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyaccountModule", function() { return MyaccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-detail/user-detail.component */ "./src/app/modules/myaccount/user-detail/user-detail.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_modules_myaccount_userdetail_reslover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/modules/myaccount/userdetail.reslover */ "./src/app/modules/myaccount/userdetail.reslover.ts");
/* harmony import */ var _app_shared_basic_components_basic_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/basic-components/basic.module */ "./src/app/shared/basic-components/basic.module.ts");







const routes = [
    {
        path: '',
        component: _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_3__["UserDetailComponent"],
        resolve: {
            userprofile: _app_modules_myaccount_userdetail_reslover__WEBPACK_IMPORTED_MODULE_5__["UserProfileReslover"]
        }
    }
];
let MyaccountModule = class MyaccountModule {
};
MyaccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_3__["UserDetailComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _app_shared_basic_components_basic_module__WEBPACK_IMPORTED_MODULE_6__["BasicModule"]
        ],
        providers: [
            _app_modules_myaccount_userdetail_reslover__WEBPACK_IMPORTED_MODULE_5__["UserProfileReslover"]
        ]
    })
], MyaccountModule);



/***/ }),

/***/ "./src/app/modules/myaccount/user-detail/user-detail.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/modules/myaccount/user-detail/user-detail.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".col-md-6 {\n    padding: 0 !important;\n}\n\n.label-header, .user-name, .count-circle, .btn-invoice, .status-box, .text-span {\n    font-family: Lullabies;\n}\n\n/*************** User Info Box *************** */\n\n.short-name-box {\n    background-color: #000000;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    width: 150px;\n    height: 150px;\n    padding: 10px;\n}\n\n.user-info-box {\n    background: var(--half-bg-color);\n    padding: 10px 0px;\n    margin: 20px 0;\n    border-radius: 20px;\n    -webkit-animation: fadeIn 0.7s linear;\n    animation: fadeIn 0.7s linear;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n}\n\np.user-name {\n    font-size: 14px;\n    color: var(--text-light-color);\n    margin-bottom: 0;\n    margin-top: 10px;\n    text-align: center;\n}\n\n.user-icon {\n    height: 100px;\n    width: 100px;\n}\n\n/*************** Package Info Box *************** */\n\n.package-info {\n    font-weight: 600;\n    padding-left: 20px;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center;\n    margin-right: 20px;\n    margin-bottom: 20px;\n    background-color: white;\n}\n\n.icon-img {\n    width: 40px;\n    height: 40px;\n}\n\n.icon-img>img {\n    -o-object-fit: contain;\n       object-fit: contain;\n    width: 100%;\n    height: 100%;\n}\n\n.package-box, .payment-box {\n    width: 100%;\n    border-radius: 20px;\n    border: solid 12px var(--half-bg-color);\n    background-color: var(--text-light-color);\n    padding: 20px;\n}\n\n.count-circle {\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    border: solid 2px var(--half-bg-color);\n}\n\n.sand-clock-gif {\n    height: 160px;\n    -webkit-animation: fadeIn 0.7s linear;\n    animation: fadeIn 0.7s linear;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n}\n\n.package-ann-box {\n    background-color: var(--text-light-color);\n    padding: 20px;\n}\n\n.package-name {\n    font-weight: 500;\n    margin-bottom: 0;\n    font-size: 18px;\n}\n\n.package-wrapper {\n    display: -webkit-box;\n    display: flex;\n    width: 100%;\n    flex-wrap: nowrap;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n}\n\n.package-block {\n    padding: 18px;\n    -webkit-animation: fadeIn 0.7s linear;\n    animation: fadeIn 0.7s linear;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n}\n\n@-webkit-keyframes fadeIn {\n    0% {\n        /* opacity: 0; */\n        margin-right: -400px;\n    }\n    75% {\n        /* opacity: 0.5; */\n        margin-right: 0;\n    }\n    100% {\n        /* opacity: 1; */\n        margin-right: 0;\n    }\n}\n\n@keyframes fadeIn {\n    0% {\n        /* opacity: 0; */\n        margin-right: -400px;\n    }\n    75% {\n        /* opacity: 0.5; */\n        margin-right: 0;\n    }\n    100% {\n        /* opacity: 1; */\n        margin-right: 0;\n    }\n}\n\nlabel.lbl-name, .lbl-text {\n    color: #2a2a2a;\n    font-family: Lullabies;\n    text-transform: uppercase;\n    font-size: 0.8rem;\n    margin-left: 6px;\n    text-align: center;\n}\n\n/*************** Payment Info Box *************** */\n\n.payment-header {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center;\n    margin-bottom: 20px;\n}\n\n.user-icon>img, .sand-clock-gif>img, .card-img>img, .global-img>img {\n    -o-object-fit: contain;\n       object-fit: contain;\n    width: 100%;\n    height: 100%;\n}\n\n.global-img {\n    width: 300px;\n    height: 240px;\n}\n\n.card-img{\n    width: 200px;\n    height: 200px;\n}\n\np.payment-title {\n    font-family: Lullabies;\n    font-size: 1.6rem;\n    margin-bottom: 0;\n    text-align: center;\n}\n\n.payment-body {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n}\n\n.payment-row {\n    display: -webkit-box;\n    display: flex;\n    /* justify-content: space-between;\n    margin-top: 16px; */\n}\n\n.add-border {\n    border-bottom: solid 2px;\n}\n\n.label-header {\n    width: 20%;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n}\n\n.status-box {\n    background-color: #89DF62;\n    background-color: #89DF62;\n    text-align: center;\n    border-radius: 8px;\n    font-size: 20px;\n}\n\n.btn.btn-invoice {\n    background-color: #FE9B56;\n}\n\nspan.text-span {\n    display: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9teWFjY291bnQvdXNlci1kZXRhaWwvdXNlci1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQSxnREFBZ0Q7O0FBRWhEO0lBQ0kseUJBQXlCO0lBQ3pCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIscUNBQXFDO0lBQ3JDLDZCQUE2QjtJQUM3QixpQ0FBaUM7SUFDakMseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBLG1EQUFtRDs7QUFFbkQ7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0JBQW1CO09BQW5CLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsdUNBQXVDO0lBQ3ZDLHlDQUF5QztJQUN6QyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsNkJBQTZCO0lBQzdCLGlDQUFpQztJQUNqQyx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIseUJBQThCO1lBQTlCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsNkJBQTZCO0lBQzdCLGlDQUFpQztJQUNqQyx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQixvQkFBb0I7SUFDeEI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsZUFBZTtJQUNuQjtBQUNKOztBQWJBO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBLG1EQUFtRDs7QUFFbkQ7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBOEI7WUFBOUIsOEJBQThCO0lBQzlCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQW1CO09BQW5CLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQztJQUNHLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiO3VCQUNtQjtBQUN2Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbXlhY2NvdW50L3VzZXItZGV0YWlsL3VzZXItZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sLW1kLTYge1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLmxhYmVsLWhlYWRlciwgLnVzZXItbmFtZSwgLmNvdW50LWNpcmNsZSwgLmJ0bi1pbnZvaWNlLCAuc3RhdHVzLWJveCwgLnRleHQtc3BhbiB7XG4gICAgZm9udC1mYW1pbHk6IEx1bGxhYmllcztcbn1cblxuLyoqKioqKioqKioqKioqKiBVc2VyIEluZm8gQm94ICoqKioqKioqKioqKioqKiAqL1xuXG4uc2hvcnQtbmFtZS1ib3gge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLnVzZXItaW5mby1ib3gge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWhhbGYtYmctY29sb3IpO1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgIG1hcmdpbjogMjBweCAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiAwLjdzIGxpbmVhcjtcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjdzIGxpbmVhcjtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxucC51c2VyLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodC1jb2xvcik7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnVzZXItaWNvbiB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwcHg7XG59XG5cbi8qKioqKioqKioqKioqKiogUGFja2FnZSBJbmZvIEJveCAqKioqKioqKioqKioqKiogKi9cblxuLnBhY2thZ2UtaW5mbyB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmljb24taW1nIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5pY29uLWltZz5pbWcge1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucGFja2FnZS1ib3gsIC5wYXltZW50LWJveCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBib3JkZXI6IHNvbGlkIDEycHggdmFyKC0taGFsZi1iZy1jb2xvcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1saWdodC1jb2xvcik7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLmNvdW50LWNpcmNsZSB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyOiBzb2xpZCAycHggdmFyKC0taGFsZi1iZy1jb2xvcik7XG59XG5cbi5zYW5kLWNsb2NrLWdpZiB7XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDAuN3MgbGluZWFyO1xuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuN3MgbGluZWFyO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG4ucGFja2FnZS1hbm4tYm94IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0LWNvbG9yKTtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ucGFja2FnZS1uYW1lIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ucGFja2FnZS13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnBhY2thZ2UtYmxvY2sge1xuICAgIHBhZGRpbmc6IDE4cHg7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiAwLjdzIGxpbmVhcjtcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjdzIGxpbmVhcjtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgIDAlIHtcbiAgICAgICAgLyogb3BhY2l0eTogMDsgKi9cbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtNDAwcHg7XG4gICAgfVxuICAgIDc1JSB7XG4gICAgICAgIC8qIG9wYWNpdHk6IDAuNTsgKi9cbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgLyogb3BhY2l0eTogMTsgKi9cbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cbn1cblxubGFiZWwubGJsLW5hbWUsIC5sYmwtdGV4dCB7XG4gICAgY29sb3I6ICMyYTJhMmE7XG4gICAgZm9udC1mYW1pbHk6IEx1bGxhYmllcztcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKioqKioqKioqKioqKioqIFBheW1lbnQgSW5mbyBCb3ggKioqKioqKioqKioqKioqICovXG5cbi5wYXltZW50LWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4udXNlci1pY29uPmltZywgLnNhbmQtY2xvY2stZ2lmPmltZywgLmNhcmQtaW1nPmltZywgLmdsb2JhbC1pbWc+aW1nIHtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuIC5nbG9iYWwtaW1nIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAyNDBweDtcbn1cbi5jYXJkLWltZ3tcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbn1cblxucC5wYXltZW50LXRpdGxlIHtcbiAgICBmb250LWZhbWlseTogTHVsbGFiaWVzO1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucGF5bWVudC1ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5wYXltZW50LXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLXRvcDogMTZweDsgKi9cbn1cblxuLmFkZC1ib3JkZXIge1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweDtcbn1cblxuLmxhYmVsLWhlYWRlciB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnN0YXR1cy1ib3gge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4OURGNjI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg5REY2MjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmJ0bi5idG4taW52b2ljZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZFOUI1Njtcbn1cblxuc3Bhbi50ZXh0LXNwYW4ge1xuICAgIGRpc3BsYXk6IGluaGVyaXQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/myaccount/user-detail/user-detail.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/myaccount/user-detail/user-detail.component.ts ***!
  \************************************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_http_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/http/detail.service */ "./src/app/core/http/detail.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);





let UserDetailComponent = class UserDetailComponent {
    constructor(_activeRoute, _detailService) {
        this._activeRoute = _activeRoute;
        this._detailService = _detailService;
    }
    ngOnInit() {
        this.myaccount = this._activeRoute.snapshot.data['userprofile'];
        this.myaccount.shortName = this.myaccount.fullName.split(" ").map(name => {
            return name.charAt(0);
        }).join("");
        this.getPaymentHistory();
    }
    getPaymentHistory() {
        this._detailService.getPaymentHistory()
            .subscribe((res) => {
            this.paymentList = res.payments;
        });
    }
    getDownInvoicePdf(url) {
        this._detailService.getInvoicePdf(url).subscribe((data) => {
            file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"](data, 'invoice.pdf');
        });
    }
};
UserDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _core_http_detail_service__WEBPACK_IMPORTED_MODULE_3__["DetailService"] }
];
UserDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/myaccount/user-detail/user-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-detail.component.css */ "./src/app/modules/myaccount/user-detail/user-detail.component.css")).default]
    })
], UserDetailComponent);



/***/ }),

/***/ "./src/app/modules/myaccount/userdetail.reslover.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/myaccount/userdetail.reslover.ts ***!
  \**********************************************************/
/*! exports provided: UserProfileReslover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileReslover", function() { return UserProfileReslover; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/http/detail.service */ "./src/app/core/http/detail.service.ts");



let UserProfileReslover = class UserProfileReslover {
    constructor(question) {
        this.question = question;
    }
    resolve(route) {
        const routeUrl = `user-profile`;
        return this.question.getDetail(routeUrl);
    }
};
UserProfileReslover.ctorParameters = () => [
    { type: _app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_2__["DetailService"] }
];
UserProfileReslover = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserProfileReslover);



/***/ })

}]);
//# sourceMappingURL=app-modules-myaccount-myaccount-module-es2015.js.map