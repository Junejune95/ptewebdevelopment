(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-mainView-main-view-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mainView/about-us/about-us.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mainView/about-us/about-us.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row justify-content-center mb-5\">\n      <div class=\"col-md-6 text-center mb-5\">\n          <h5 class=\"text-uppercase h4-m mb-2 medium-bold letter-spacing-2 text-d75\"><span>About Us</span></h5>\n          <h2 class=\"medium-bold text-d100\">Best PTE & NAATI CCL Coaching</h2>\n      </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md\" style=\"text-align: justify;\">\n      <p>“People are capable, at any time in their lives, of doing what they dream of.” We at \n        Alchemist Academy not only believe in this but also live up to our name which means the art of converting anything to gold. Gold for us means strive to help our students to achieve their desired scores for PTE & NAATI and ensure that their Australian PR dream can be fulfilled. Success is our endeavour. \n      </p>\n      <p>\n        With our highly qualified faculty who have helped more than 3,000+ students all over Australia individually to achieve their desired scores, we believe that their hands-on experience will help ends meet. Our team is dedicated towards inculcating the most up to date strategies to deliver results. \n        Alchemist Academy is the first school in Gold Coast to utilise a state of the art lab which is extremely identical to the real exam, the purpose of the lab is not to make students cram the questions but to be able to understand and adapt to the strategies and the exam environment that they would ideally need to pass the test. Our focus is on making our students achieve scores in PTE & NAATI. \n      </p>\n      <p>“Together we are a team” </p>\n      <p>“Together we can”.</p>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mainView/change-password/change-password.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mainView/change-password/change-password.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <loader></loader> -->\n\n\n    <form [formGroup]=\"emailForm\" class=\"w-100 pt-5\" *ngIf=\"!userId && !isLoading && !isReset\">\n        <div class=\"col-md-8 mx-auto\">\n            <div class=\"d-flex flex-column align-items-center justify-content-center mb-3\">\n                <div class=\"resetIcon mb-2\">\n                    <i class=\"fa fa-lock\"></i>\n                </div>\n                <label-text>Reset Password</label-text>\n                <warning-text>Enter Your Email in the form below and we will send code.</warning-text>\n            </div>\n\n            <input type=\"email\" class=\"form-control\" placeholder=\"Email Address\" formControlName=\"email\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback mt-2\">\n                <div *ngIf=\"f.email.errors.email\">\n                    Email must be a valid email address(eg:sample@gmail.com)\n                </div>\n            </div>\n        </div>\n        <div class=\"d-flex justify-content-center my-4\">\n            <button type=\"submit\" class=\"btn btn-reset\" (click)=\"resetPassword()\">\n                REQUEST\n            </button>\n        </div>\n    </form>\n\n    <div class=\"col-md-8 mx-auto\" *ngIf=\"userId && !isReset\">\n        <div class=\"d-flex flex-column align-items-center justify-content-center mb-3\">\n            <div class=\"resetIcon mb-2\">\n                <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n            </div>\n            <p class=\"ont-medium demi-bold text-d75 text-center\">We have send a verification code on your email\n                <b>{{userData}}</b>. Please enter verfication code below.\n            </p>\n        </div>\n        \n        <input type=\"text\" class=\"form-control\" placeholder=\"****\" [(ngModel)]=\"code\"\n            [ngClass]=\"{ 'is-invalid': submitted && !code }\" />\n\n        <div *ngIf=\"submitted && !code\" class=\"invalid-feedback mt-2\">\n            Please Enter Your Code\n        </div>\n\n        <div class=\"d-flex justify-content-center my-4\">\n            <button type=\"submit\" class=\"btn btn-reset\" (click)=\"checkCode()\">\n                CONFIRM\n            </button>\n        </div>\n    </div>\n\n    <form [formGroup]=\"resetForm\" class=\"w-100 pt-5\" *ngIf=\"isReset\">\n        <div class=\"col-md-8 mx-auto\">\n            <div class=\"d-flex flex-column align-items-center justify-content-center mb-3\">\n                <div class=\"resetIcon mb-2\">\n                    <i class=\"fa fa-lock\"></i>\n                </div>\n                <label-text>Reset Password</label-text>\n            </div>\n            <div class=\"form-group\">\n                <label-text>Password</label-text>\n                <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Write Password\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f1.password.errors }\" />\n                <warning-text>e.g. secure password</warning-text>\n            </div>\n            <div class=\"form-group\">\n                <label-text>Re-type Password</label-text>\n                <input type=\"password\" class=\"form-control\" formControlName=\"retypePassword\"\n                    placeholder=\"Write Re-type Password\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f1.retypePassword.errors }\" />\n                <warning-text>e.g. secure password</warning-text>\n                <div class=\"invalid-feedback\"\n                    *ngIf=\"resetForm.errors?.mismatch && (resetForm.controls['retypePassword'].dirty || resetForm.controls['retypePassword'].touched)\">\n                    Passwords don't match.\n                </div>\n            </div>\n        </div>\n        <div class=\"d-flex justify-content-center my-4\">\n            <button type=\"submit\" class=\"btn btn-reset\" (click)=\"forgetPassword()\">\n                RESET PASSWORD\n            </button>\n        </div>\n    </form>\n\n    <global-toast *ngIf=\"msg.msg\" [isDanger]=\"true\" [isErrText]=\"msg.msg\"></global-toast>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mainView/contact-us/contact-us.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mainView/contact-us/contact-us.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"d-flex flex-column justify-content-center\"> \n      <div class=\"text-center mb-3\">\n          <h5 class=\"text-uppercase h4-m mb-2 medium-bold letter-spacing-2 text-d75\">\n              Contact Us\n            </h5>\n          <h2 class=\"medium-bold text-d100\">Get In Touch With Us</h2>\n      </div>\n    </div>\n    <div class=\"row text-center\">\n      <div class=\"col-md\">\n        <address>\n          Address: Suite 301, Level 3, 89 Scarborough Street, Southport 4215 <br>\n          Phone: +(61) 7 5613 3171, +(61) 499 500 057 <br>\n          Website: <a href=\"https://www.alchemistacademy.com.au\" target=\"_blank\" class=\"p-2\">www.alchemistacademy.com.au</a><br>\n          Email: <a href=\"mailto:admin@alchemistacademy.com.au\">admin@alchemistacademy.com.au</a>\n        </address>\n      </div>\n    </div>\n    <div class=\"row text-center\">\n      <div class=\"col\">\n        <ul class=\"list-inline\">\n          <li class=\"list-inline-item\">\n            <a\n              href=\"https://web.facebook.com/AlchemistAcademyPTE/?_rdc=1&_rdr\"\n              target=\"_blank\"\n              class=\"p-2\"\n              ><i class=\"fa fa-facebook\"></i\n            ></a>\n          </li>\n          <li class=\"list-inline-item\">\n            <a href=\"https://youtu.be/Ee4W8My3dbk\" target=\"_blank\" class=\"p-2\"\n              ><i class=\"fa fa-youtube\"></i\n            ></a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"row mb-5\">\n      <div class=\"col text-center\">\n        <p class=\"pb_font-14\">\n          &copy; 2020. All Rights Reserved. <br />\n          Name\n        </p>\n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mainView/home-page/home-page.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mainView/home-page/home-page.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-dark pb_navbar pb_scrolled-light\" id=\"pb-navbar\">\n  <div class=\"container\">\n    <!-- <a class=\"navbar-brand width-unset\" href=\"#\">Landing</a> -->\n    <!-- <div class=\"img-wrapper\">\n      <img src=\"assets/images/alchemist.gif\">\n    </div> -->\n    <button class=\"navbar-toggler ml-auto width-unset\" type=\"button\" data-toggle=\"collapse\"\n      data-target=\"#probootstrap-navbar\" aria-controls=\"probootstrap-navbar\" aria-expanded=\"false\"\n      aria-label=\"Toggle navigation\">\n      <span><i class=\"fa fa-bars\"></i></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"probootstrap-navbar\">\n      <ul class=\"navbar-nav ml-auto width-unset\">\n        <li class=\"nav-item pointer\" \n          [ngClass]=\"{ 'current-section': currentSection === 'home' }\">\n          <!-- <a class=\"nav-link\">Home</a> -->\n          <div class=\"nav-link\">\n            <img src=\"assets/icon/social/instagram.svg\">\n          </div>\n        </li>\n        <li class=\"nav-item pointer\" \n          [ngClass]=\"{ 'current-section': currentSection === 'home' }\">\n          <div class=\"nav-link\">\n            <img src=\"assets/icon/social/youtube.svg\">\n          </div>\n        </li>\n        <li class=\"nav-item pointer\" \n          [ngClass]=\"{ 'current-section': currentSection === 'home' }\">\n          <div class=\"nav-link\">\n            <img src=\"assets/icon/social/twitter.svg\">\n          </div>\n        </li>\n        <li class=\"nav-item pointer\"\n          [ngClass]=\"{ 'current-section': currentSection === 'home' }\">\n          <div class=\"nav-link\">\n            <img src=\"assets/icon/social/facebook.svg\">\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<!-- END nav -->\n\n\n<div id=\"parentDiv\" spyScroll [spiedTags]=\"['DIV']\" (sectionChange)=\"onSectionChange($event)\" c\n  style=\"overflow-y: scroll; overflow-x: hidden; height: 980px;\" (scroll)=\"onScroll($event)\">\n  <div\n    class=\"pb_cover_v3 overflow-hidden cover-bg-indigo cover-bg-opacity text-left pb_gradient_v1 pb_slant-light overflow-hidden\"\n    id=\"home\">\n    <main-dashboard></main-dashboard>\n  </div>\n  <div id=\"contact\" class=\"pb_section bg-light pb_slant-white overflow-hidden\" style=\"margin-bottom: 130px;\">\n    <contact-us></contact-us>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mainView/main-dashboard/main-dashboard.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mainView/main-dashboard/main-dashboard.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <loader></loader> -->\n<global-toast *ngIf=\"isError\" [isDanger]=\"true\" [isErrText]=\"errorMsg\"></global-toast>\n<div class=\"container\">\n  <div class=\"row align-items-center justify-content-center\">\n    <div class=\"col-md-6\">\n      <h2 class=\"text-0\">Alchemist Academy</h2>\n      <div class=\"h3-l text-0\">\n        <p class=\"mb-4\">\n          <!-- New free template by -->\n          <!-- <a href=\"http://uicookies.com\" target=\"_blank\" class=\"link-name\"\n            >uicookies.com</a\n          >. For more templates visit the\n          <a href=\"http://uicookies.com\" target=\"_blank\" class=\"link-name\"\n            >site</a\n          > -->\n          Practise with Alchemist Academy Automated Scoring Platform\n        </p>\n        <p class=\"mb-5\">\n          <a (click)=\"openModal(content, 'practice')\"\n            class=\"btn btn-success btn-lg pb_btn-pill smoothscroll width-unset pointer\"><span\n              class=\"font-medium text-uppercase letter-spacing-1\">Try For Free\n            </span></a>\n        </p>\n      </div>\n    </div>\n    <div class=\"col-md-1\"></div>\n    <div class=\"col-md-5 relative align-self-center\">\n      <form class=\"bg-white rounded pb_form_v1\" [formGroup]=\"loginForm\">\n        <h2 class=\"login-title\">LogIn</h2>\n        <div *ngIf=\"isError\" class=\"err-wrapper\">\n          <span class=\"errMsg\">!</span> {{ errorMsg }}\n        </div>\n        <div class=\"form-group mb-4\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Email\" formControlName=\"email\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n\n          <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.email.errors.required\">Email is required</div>\n            <div *ngIf=\"f.email.errors.email\">\n              Email must be a valid email address\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group mb-4\">\n          <div class=\"input-group\">\n            <input [type]=\"fieldTextType ? 'text' : 'password'\" class=\"form-control pb_height-50 reverse\"\n              placeholder=\"Password\" formControlName=\"password\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n            <div class=\"input-group-append\">\n              <span class=\"input-group-text form-control\">\n                <i class=\"fa\" [ngClass]=\"{\n                    'fa-eye-slash': !fieldTextType,\n                    'fa-eye': fieldTextType\n                  }\" (click)=\"toggleFieldTextType()\"></i>\n              </span>\n            </div>\n          </div>\n          <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n            <div *ngIf=\"f.password.errors.minlength\">\n              Password must be at least 8 characters\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"loading; else loaded\" class=\"circular-wrap loader\"></div>\n        <div class=\"form-group\">\n          <input (click)=\"onLogin()\" type=\"submit\" class=\"btn btn-primary\"\n            value=\"LogIn\" />\n        </div>\n        <div class=\"d-flex justify-content-center mt-4\">\n          <a href=\"home/reset-password/getEmail\" class=\"txt-forget-pwd\" target=\"_blank\">Forgot Password?</a>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n<ng-template #content let-modal>\n  <form [formGroup]=\"createUserForm\">\n    <div class=\"modal-header\">\n      <h5 class=\"modal-title\">\n        Please fill up the form below. <br />One of our Expert will get back to\n        you shortly.\n      </h5>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <!-- <div *ngIf=\"isError\" class=\"err-wrapper\">\n        <span class=\"errMsg\">!</span> {{ errorMsg }}\n      </div> -->\n\n      <div class=\"mb-3\">\n        <label-text>Name</label-text>\n        <input type=\"text\" class=\"form-control pb_height-50 mb-2 reverse;\" placeholder=\"Write User Name\"\n          formControlName=\"fullName\" [ngClass]=\"{ 'is-invalid': submitModel && g.fullName.errors }\" />\n        <div *ngIf=\"submitModel && g.fullName.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"g.fullName.errors.required\">Name is required</div>\n          <div *ngIf=\"g.fullName.errors.minlength\">\n            Name must be at least 6 characters\n          </div>\n        </div>\n      </div>\n      <div>\n        <label-text>Gender</label-text>\n        <div>\n          <input id=\"male\" type=\"radio\" value=\"MALE\" name=\"gender\" formControlName=\"gender\" />\n          <label for=\"male\" class=\"pl-2 text-d200 medium-bold mr-3\">Male</label>\n\n          <input id=\"female\" type=\"radio\" value=\"FEMALE\" name=\"gender\" formControlName=\"gender\" />\n          <label for=\"female\" class=\"pl-2 text-d200 medium-bold\">Female</label>\n        </div>\n      </div>\n      <div class=\"mb-3\">\n        <label-text>Email</label-text>\n        <input type=\"text\" class=\"form-control pb_height-50 reverse\" placeholder=\"Write Email\" formControlName=\"mail\"\n          [ngClass]=\"{ 'is-invalid': submitModel && g.mail.errors }\" />\n      </div>\n      <div class=\"mb-3\">\n        <label-text>Branch</label-text>\n        <select class=\"select-box form-control\" formControlName=\"branch\"\n          [ngClass]=\"{ 'is-invalid': submitModel && g.branch.errors }\">\n          <option [ngValue]=\"\" disabled selected hidden>Select Branch</option>\n          <option *ngFor=\"let branch of branchList\" [ngValue]=\"branch._id\">\n            {{ branch.name }}\n          </option>\n        </select>\n        <div *ngIf=\"submitModel && g.branch.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"g.branch.errors.required\">Branch is required</div>\n        </div>\n      </div>\n      <div class=\"mb-3\">\n        <label-text>Phone Number</label-text>\n        <input type=\"number\" class=\"form-control pb_height-50 reverse\" placeholder=\"Write Phone Number\"\n          formControlName=\"phoneNumber\" [ngClass]=\"{ 'is-invalid': submitModel && g.phoneNumber.errors }\" />\n      </div>\n      <div class=\"mb-3\">\n        <label-text>Desired Score</label-text>\n        <select class=\"select-box form-control\" formControlName=\"desireScore\"\n          [ngClass]=\"{ 'is-invalid': submitModel && g.desireScore.errors }\">\n          <option [ngValue]=\"\" disabled selected hidden>Select Branch</option>\n          <option *ngFor=\"let scroe of scoreList\" [ngValue]=\"scroe._id\">\n            {{ scroe.desiredScore }}\n          </option>\n        </select>\n        <div *ngIf=\"submitModel && g.scroe.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"g.scroe.errors.required\">Branch is required</div>\n        </div>\n      </div>\n    </div>\n  </form>\n  <div class=\"modal-footer\">\n    <div class=\"d-flex justify-content-end\">\n      <div class=\"d-flex\">\n        <button type=\"button\" class=\"btn btn-primary\"\n          (click)=\"onCreate()\" [disabled]=\"imgDemoSlider\">\n          Create\n        </button>\n      </div>\n    </div>\n  </div>\n</ng-template>");

/***/ }),

/***/ "./src/app/modules/mainView/about-us/about-us.component.css":
/*!******************************************************************!*\
  !*** ./src/app/modules/mainView/about-us/about-us.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpblZpZXcvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/mainView/about-us/about-us.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/mainView/about-us/about-us.component.ts ***!
  \*****************************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutUsComponent = class AboutUsComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'about-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-us.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mainView/about-us/about-us.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-us.component.css */ "./src/app/modules/mainView/about-us/about-us.component.css")).default]
    })
], AboutUsComponent);



/***/ }),

/***/ "./src/app/modules/mainView/change-password/change-password.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/modules/mainView/change-password/change-password.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".resetIcon {\n    width: 50px;\n    background: #3B8BEB;\n    box-shadow: 0px 3px 6px #00000029;\n    height: 50px;\n    border-radius: 50%;\n    color: #FFF;\n    font-size: 30px;\n    /* padding: 2px 15px; */\n    text-align: center;\n}\n\nbutton.btn.btn-reset {\n    background: #3B8BEB;\n    color: #FFF;\n    font-weight: 500;\n    width: 30%;\n    border-radius: 40px;\n    font-size: 14px;\n}\n\nwarning-text>span{\n    font-size: 14px !important;\n}\n\n.invalid-feedback {\n    display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluVmlldy9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW5WaWV3L2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXNldEljb24ge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGJhY2tncm91bmQ6ICMzQjhCRUI7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDI5O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIC8qIHBhZGRpbmc6IDJweCAxNXB4OyAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYnV0dG9uLmJ0bi5idG4tcmVzZXQge1xuICAgIGJhY2tncm91bmQ6ICMzQjhCRUI7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB3aWR0aDogMzAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG53YXJuaW5nLXRleHQ+c3BhbntcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbn1cblxuLmludmFsaWQtZmVlZGJhY2sge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/modules/mainView/change-password/change-password.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/mainView/change-password/change-password.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/authentication/auth.service */ "./src/app/core/authentication/auth.service.ts");





let ChangePasswordComponent = class ChangePasswordComponent {
    constructor(formBuilder, _service, _router) {
        this.formBuilder = formBuilder;
        this._service = _service;
        this._router = _router;
        this.msg = {
            isError: false,
            msg: ""
        };
        this.isLoading = false;
        this.isReset = false;
    }
    ngOnInit() {
        this.checkLogin();
    }
    checkLogin() {
        if (localStorage.getItem("userData")) {
            this.isLoading = true;
            this.userData = JSON.parse(atob(localStorage.getItem("userData")));
            this.callReset(this.userData);
        }
        else {
            this.emailForm = this.formBuilder.group({
                email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            });
        }
    }
    resetPassword() {
        this.submitted = true;
        if (this.emailForm.invalid)
            return;
        this.callReset(this.emailForm.get("email").value);
    }
    callReset(data) {
        let email = {
            "email": data
        };
        this.subscription = this._service.emailResetCode(email)
            .subscribe((res) => {
            this.userId = res.userId;
            this.msg.msg = res.message;
            this.msg.isError = false;
            this.isLoading = false;
            localStorage.setItem("data", btoa(JSON.stringify(data)));
            setTimeout(() => {
                this.msg.msg = "";
            }, 2000);
        }, err => {
            this.msg.msg = err.error.message;
            this.msg.isError = true;
            this.isLoading = false;
            setTimeout(() => {
                this.msg.msg = "";
            }, 2000);
        });
    }
    get f() {
        return this.emailForm.controls;
    }
    get f1() {
        return this.resetForm.controls;
    }
    checkCode() {
        this.submitted = true;
        if (this.code) {
            let checkcode = {
                "verificationCode": this.code
            };
            this.subscription = this._service
                .checkCode(this.userId, checkcode)
                .subscribe((res) => {
                this.msg.msg = res.message;
                this.msg.isError = false;
                setTimeout(() => {
                    this.msg.msg = "";
                }, 2000);
                this.isReset = true;
                this.createResetForm();
                this.submitted = false;
            }, err => {
                this.msg.msg = err.error.message;
                this.msg.isError = true;
                setTimeout(() => {
                    this.msg.msg = "";
                }, 2000);
            });
        }
    }
    createResetForm() {
        this.resetForm = this.formBuilder.group({
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            retypePassword: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        }, { validator: this.passwordMatchValidator });
    }
    passwordMatchValidator(frm) {
        return frm.controls['password'].value === frm.controls['retypePassword'].value ? null : { 'mismatch': true };
    }
    forgetPassword() {
        this.submitted = true;
        if (this.resetForm.invalid) {
            return;
        }
        else {
            let temp = {
                password: this.resetForm.get("password").value,
                userId: this.userId
            };
            this.subscription = this._service.resetPassword(temp)
                .subscribe((res) => {
                localStorage.clear();
                this._router.navigate(['/home']);
            });
        }
    }
};
ChangePasswordComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _core_authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./change-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mainView/change-password/change-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./change-password.component.css */ "./src/app/modules/mainView/change-password/change-password.component.css")).default]
    })
], ChangePasswordComponent);



/***/ }),

/***/ "./src/app/modules/mainView/contact-us/contact-us.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/modules/mainView/contact-us/contact-us.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pb_footer {\n    padding: 5em 0;\n  }\n  \n  .pb_footer .list-unstyled li {\n    margin-bottom: 10px;\n    line-height: 1.5;\n  }\n  \n  .pb_footer.bg-black {\n    background: #000;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluVmlldy9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluVmlldy9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYl9mb290ZXIge1xuICAgIHBhZGRpbmc6IDVlbSAwO1xuICB9XG4gIFxuICAucGJfZm9vdGVyIC5saXN0LXVuc3R5bGVkIGxpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIH1cbiAgXG4gIC5wYl9mb290ZXIuYmctYmxhY2sge1xuICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/modules/mainView/contact-us/contact-us.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/mainView/contact-us/contact-us.component.ts ***!
  \*********************************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactUsComponent = class ContactUsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'contact-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-us.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mainView/contact-us/contact-us.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-us.component.css */ "./src/app/modules/mainView/contact-us/contact-us.component.css")).default]
    })
], ContactUsComponent);



/***/ }),

/***/ "./src/app/modules/mainView/home-page/home-page.component.css":
/*!********************************************************************!*\
  !*** ./src/app/modules/mainView/home-page/home-page.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* header */\n\n.pb_navbar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 100;\n  width: 100%;\n}\n\n.pb_navbar .navbar-toggler:active, .pb_navbar .navbar-toggler:focus {\n  outline: none;\n}\n\n.pb_navbar>.container {\n  position: relative;\n}\n\n.pb_navbar .navbar-toggler {\n  border: none;\n  color: white;\n  border-color: white;\n  cursor: pointer;\n  padding-right: 0;\n}\n\n.pb_navbar .navbar-toggler i {\n  font-size: 30px;\n}\n\n.pb_navbar ul>li>a {\n  color: white ;\n}\n\n.pb_navbar ul>li>a.active {\n  color: white;\n}\n\n.pb_navbar ul>li.cta-btn>a>span {\n  padding: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n}\n\n.pb_navbar .nav-link {\n  font-size: 15px;\n  padding-left: 1rem !important;\n  padding-right: 1rem !important;\n}\n\n/* when scroll */\n\n.pb_navbar.scrolled {\n  position: fixed;\n  right: 0;\n  left: 0;\n  top: 0;\n  margin-top: -130px;\n}\n\n.pb_navbar.scrolled.pb_scrolled-light {\n  background: #fff ;\n  box-shadow: 0px 1px 10px -2px rgba(0, 0, 0, 0.15);\n}\n\n.pb_navbar.scrolled.sleep {\n  -webkit-transition: .3s all ease-out;\n  transition: .3s all ease-out;\n}\n\n.pb_navbar.scrolled.awake {\n  margin-top: 0px;\n  -webkit-transition: .3s all ease-out;\n  transition: .3s all ease-out;\n}\n\n.pb_navbar.scrolled .navbar-toggler {\n  border: none;\n  color: rgba(0, 0, 0, 0.5);\n  border-color: rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n  padding-right: 0;\n}\n\n@media (max-width: 1199px) {\n  .pb_navbar .nav-link {\n    padding-top: .5rem;\n    padding-bottom: .5rem;\n  }\n}\n\n@media (max-width: 991px) {\n  .pb_navbar .nav-link {\n    padding-left: 0rem !important;\n    padding-right: 0rem !important;\n  }\n}\n\n@media (max-width: 767px) {\n  .pb_navbar .nav-link {\n    padding-left: 0 !important;\n    padding-right: 0 !important;\n  }\n}\n\n@media (max-width: 991px) {\n  .pb_navbar .navbar-nav {\n    background: rgba(0, 0, 0, 0.8);\n    border-radius: 0px;\n    padding-left: 1rem !important;\n    padding-right: 1rem !important;\n  }\n}\n\n.pb_navbar>.container {\n  position: relative;\n}\n\n.pb_slant-light, .pb_slant-white {\n  position: relative;\n}\n\n.pb_cover, .pb_cover_v1, .pb_cover_v2, .pb_cover_v3, .pb_cover_v4 {\n  position: relative;\n  height: 95vh;\n}\n\n.bg_image, .pb_sm_py_cover, .pb_md_py_cover, .pb_lg_py_cover, .pb_xl_py_cover, .pb_cover, .pb_cover_v1, .pb_cover_v2, .pb_cover_v3, .pb_cover_v4, .pb_slide_v2 .slide_content>.pb_content-media {\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n\n.pb_gradient_v1:before {\n  background: #28C771;\n  /* Old browsers */\n  /* FF3.6-15 */\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(35deg, #8DF55E 0%, #79EFA6 40%, #55F297 60%,#13EA78 70%,#00E58C 80%,#28C771 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#665fee', endColorstr='#27c2de', GradientType=1);\n  /* IE6-9 fallback on horizontal gradient */\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n@media (max-width: 767px) {\n  .pb_cover, .pb_cover_v1, .pb_cover_v2, .pb_cover_v3, .pb_cover_v4 {\n    height: inherit;\n    text-align: center !important;\n    padding: 6em 0;\n  }\n}\n\n.pb_slant-light:after, .pb_slant-white:after {\n  content: \"\";\n  position: absolute;\n  bottom: -100px;\n  left: -50px;\n  height: 200px;\n  width: 130%;\n  background-color: #f2f4f9;\n  -webkit-transform: rotate(-4deg);\n  transform: rotate(-4deg);\n  z-index: 10;\n}\n\n.pb_slant-white {\n  background-color: #fff;\n}\n\n.pb_slant-white:after {\n  background-color: #fff;\n}\n\n.pb_slant-light.pb_slant-reverse:after, .pb_slant-white.pb_slant-reverse:after {\n  -webkit-transform: rotate(4deg);\n  transform: rotate(4deg);\n  left: -100px;\n  bottom: -140px;\n}\n\n.bg-light {\n  background-color: #f2f4f9 !important;\n}\n\n.pb_navbar.scrolled.pb_scrolled-light {\n  /* FF3.6-15 */\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(35deg, #8DF55E 0%, #79EFA6 40%, #55F297 60%,#13EA78 70%,#00E58C 80%,#28C771 100%);\n  box-shadow: 0px 1px 10px -2px rgba(0, 0, 0, 0.15);\n}\n\n.pb_navbar.scrolled.pb_scrolled-light .navbar-brand {\n  color: #1d82ff;\n}\n\n@media (max-width: 991px) {\n  .pb_navbar.scrolled.pb_scrolled-light .navbar-nav {\n    background: none;\n    border-radius: 0px;\n    padding-left: 0rem !important;\n    padding-right: 0rem !important;\n  }\n}\n\n.pb_navbar.scrolled.pb_scrolled-light ul li a {\n  color: #212529 ;\n}\n\n.pb_navbar.scrolled.pb_scrolled-light ul li a:hover, .pb_navbar.scrolled.pb_scrolled-light ul li a:active, .pb_navbar.scrolled.pb_scrolled-light ul li a:focus {\n  color: #868e96;\n}\n\n.pb_navbar.scrolled.pb_scrolled-light ul li.cta-btn>a>span {\n  border: none;\n  background: #00CA4C;\n  color: #fff;\n}\n\n.pb_footer {\n  padding: 5em 0;\n}\n\n.pb_footer .list-unstyled li {\n  margin-bottom: 10px;\n  line-height: 1.5;\n}\n\n.pb_footer.bg-black {\n  background: #000;\n}\n\n.pb_section {\n  padding: 10em 0;\n}\n\n.current-section a{\n  color: #1d82ff !important; \n}\n\n.list-inline-item{\n  width: unset !important;\n}\n\n.img-wrapper{\n  width: 120px;\n  border: solid 2px #f3f4f9;\n  border-radius: 4px;\n  padding: 2px;\n  box-shadow: var(--card-boxshadow);\n}\n\n.img-wrapper img{\n  -o-object-fit: contain;\n     object-fit: contain;\n  width: 100%;\n  height: 100%;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluVmlldy9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVzs7QUFFWDtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLDhCQUE4QjtBQUNoQzs7QUFFQSxnQkFBZ0I7O0FBRWhCO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixPQUFPO0VBQ1AsTUFBTTtFQUNOLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUdqQixpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxvQ0FBb0M7RUFFcEMsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9DQUFvQztFQUVwQyw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGdDQUFnQztFQUNoQyxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDZCQUE2QjtJQUM3Qiw4QkFBOEI7RUFDaEM7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsMEJBQTBCO0lBQzFCLDJCQUEyQjtFQUM3QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3Qiw4QkFBOEI7RUFDaEM7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0NBQWtDO0VBQ2xDLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFFakIsYUFBYTtFQUViLDRCQUE0QjtFQUU1Qiw2R0FBNkc7RUFDN0cscURBQXFEO0VBQ3JELG1IQUFtSDtFQUNuSCwwQ0FBMEM7RUFDMUMsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsY0FBYztFQUNoQjtBQUNGOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNYLGFBQWE7RUFDYixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGdDQUFnQztFQUVoQyx3QkFBd0I7RUFDeEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsK0JBQStCO0VBRS9CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUVFLGFBQWE7RUFFYiw0QkFBNEI7RUFFNUIsNkdBQTZHO0VBRzdHLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLDhCQUE4QjtFQUNoQztBQUNGOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBSUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxzQkFBbUI7S0FBbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21haW5WaWV3L2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGhlYWRlciAqL1xuXG4ucGJfbmF2YmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wYl9uYXZiYXIgLm5hdmJhci10b2dnbGVyOmFjdGl2ZSwgLnBiX25hdmJhciAubmF2YmFyLXRvZ2dsZXI6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ucGJfbmF2YmFyPi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wYl9uYXZiYXIgLm5hdmJhci10b2dnbGVyIHtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cblxuLnBiX25hdmJhciAubmF2YmFyLXRvZ2dsZXIgaSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLnBiX25hdmJhciB1bD5saT5hIHtcbiAgY29sb3I6IHdoaXRlIDtcbn1cblxuLnBiX25hdmJhciB1bD5saT5hLmFjdGl2ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnBiX25hdmJhciB1bD5saS5jdGEtYnRuPmE+c3BhbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cblxuLnBiX25hdmJhciAubmF2LWxpbmsge1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMXJlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi8qIHdoZW4gc2Nyb2xsICovXG5cbi5wYl9uYXZiYXIuc2Nyb2xsZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIG1hcmdpbi10b3A6IC0xMzBweDtcbn1cblxuLnBiX25hdmJhci5zY3JvbGxlZC5wYl9zY3JvbGxlZC1saWdodCB7XG4gIGJhY2tncm91bmQ6ICNmZmYgO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxcHggMTBweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDFweCAxMHB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgYm94LXNoYWRvdzogMHB4IDFweCAxMHB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cblxuLnBiX25hdmJhci5zY3JvbGxlZC5zbGVlcCB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlLW91dDtcbn1cblxuLnBiX25hdmJhci5zY3JvbGxlZC5hd2FrZSB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2Utb3V0O1xuICAtby10cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiAuM3MgYWxsIGVhc2Utb3V0O1xufVxuXG4ucGJfbmF2YmFyLnNjcm9sbGVkIC5uYXZiYXItdG9nZ2xlciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAucGJfbmF2YmFyIC5uYXYtbGluayB7XG4gICAgcGFkZGluZy10b3A6IC41cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLnBiX25hdmJhciAubmF2LWxpbmsge1xuICAgIHBhZGRpbmctbGVmdDogMHJlbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDByZW0gIWltcG9ydGFudDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnBiX25hdmJhciAubmF2LWxpbmsge1xuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLnBiX25hdmJhciAubmF2YmFyLW5hdiB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLnBiX25hdmJhcj4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucGJfc2xhbnQtbGlnaHQsIC5wYl9zbGFudC13aGl0ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnBiX2NvdmVyLCAucGJfY292ZXJfdjEsIC5wYl9jb3Zlcl92MiwgLnBiX2NvdmVyX3YzLCAucGJfY292ZXJfdjQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogOTV2aDtcbn1cblxuLmJnX2ltYWdlLCAucGJfc21fcHlfY292ZXIsIC5wYl9tZF9weV9jb3ZlciwgLnBiX2xnX3B5X2NvdmVyLCAucGJfeGxfcHlfY292ZXIsIC5wYl9jb3ZlciwgLnBiX2NvdmVyX3YxLCAucGJfY292ZXJfdjIsIC5wYl9jb3Zlcl92MywgLnBiX2NvdmVyX3Y0LCAucGJfc2xpZGVfdjIgLnNsaWRlX2NvbnRlbnQ+LnBiX2NvbnRlbnQtbWVkaWEge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4ucGJfZ3JhZGllbnRfdjE6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogIzI4Qzc3MTtcbiAgLyogT2xkIGJyb3dzZXJzICovXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDM1ZGVnLCAjOERGNTVFIDAlLCAjNzlFRkE2IDQwJSwgIzU1RjI5NyA2MCUsIzEzRUE3OCA3MCUsIzAwRTU4QyA4MCUsIzI4Qzc3MSAxMDAlKTtcbiAgLyogRkYzLjYtMTUgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMzVkZWcsICM4REY1NUUgMCUsICM3OUVGQTYgNDAlLCAjNTVGMjk3IDYwJSwjMTNFQTc4IDcwJSwjMDBFNThDIDgwJSwjMjhDNzcxIDEwMCUpO1xuICAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoMzVkZWcsICM4REY1NUUgMCUsICM3OUVGQTYgNDAlLCAjNTVGMjk3IDYwJSwjMTNFQTc4IDcwJSwjMDBFNThDIDgwJSwjMjhDNzcxIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzVkZWcsICM4REY1NUUgMCUsICM3OUVGQTYgNDAlLCAjNTVGMjk3IDYwJSwjMTNFQTc4IDcwJSwjMDBFNThDIDgwJSwjMjhDNzcxIDEwMCUpO1xuICAvKiBXM0MsIElFMTArLCBGRjE2KywgQ2hyb21lMjYrLCBPcGVyYTEyKywgU2FmYXJpNysgKi9cbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyM2NjVmZWUnLCBlbmRDb2xvcnN0cj0nIzI3YzJkZScsIEdyYWRpZW50VHlwZT0xKTtcbiAgLyogSUU2LTkgZmFsbGJhY2sgb24gaG9yaXpvbnRhbCBncmFkaWVudCAqL1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5wYl9jb3ZlciwgLnBiX2NvdmVyX3YxLCAucGJfY292ZXJfdjIsIC5wYl9jb3Zlcl92MywgLnBiX2NvdmVyX3Y0IHtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogNmVtIDA7XG4gIH1cbn1cblxuLnBiX3NsYW50LWxpZ2h0OmFmdGVyLCAucGJfc2xhbnQtd2hpdGU6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTEwMHB4O1xuICBsZWZ0OiAtNTBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDEzMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmY0Zjk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTRkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTRkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNGRlZyk7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4ucGJfc2xhbnQtd2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4ucGJfc2xhbnQtd2hpdGU6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4ucGJfc2xhbnQtbGlnaHQucGJfc2xhbnQtcmV2ZXJzZTphZnRlciwgLnBiX3NsYW50LXdoaXRlLnBiX3NsYW50LXJldmVyc2U6YWZ0ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDRkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDRkZWcpO1xuICBsZWZ0OiAtMTAwcHg7XG4gIGJvdHRvbTogLTE0MHB4O1xufVxuXG4uYmctbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmNGY5ICFpbXBvcnRhbnQ7XG59XG5cbi5wYl9uYXZiYXIuc2Nyb2xsZWQucGJfc2Nyb2xsZWQtbGlnaHQge1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgzNWRlZywgIzhERjU1RSAwJSwgIzc5RUZBNiA0MCUsICM1NUYyOTcgNjAlLCMxM0VBNzggNzAlLCMwMEU1OEMgODAlLCMyOEM3NzEgMTAwJSk7XG4gIC8qIEZGMy42LTE1ICovXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDM1ZGVnLCAjOERGNTVFIDAlLCAjNzlFRkE2IDQwJSwgIzU1RjI5NyA2MCUsIzEzRUE3OCA3MCUsIzAwRTU4QyA4MCUsIzI4Qzc3MSAxMDAlKTtcbiAgLyogQ2hyb21lMTAtMjUsU2FmYXJpNS4xLTYgKi9cbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDM1ZGVnLCAjOERGNTVFIDAlLCAjNzlFRkE2IDQwJSwgIzU1RjI5NyA2MCUsIzEzRUE3OCA3MCUsIzAwRTU4QyA4MCUsIzI4Qzc3MSAxMDAlKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM1ZGVnLCAjOERGNTVFIDAlLCAjNzlFRkE2IDQwJSwgIzU1RjI5NyA2MCUsIzEzRUE3OCA3MCUsIzAwRTU4QyA4MCUsIzI4Qzc3MSAxMDAlKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMXB4IDEwcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAxcHggMTBweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG5cbi5wYl9uYXZiYXIuc2Nyb2xsZWQucGJfc2Nyb2xsZWQtbGlnaHQgLm5hdmJhci1icmFuZCB7XG4gIGNvbG9yOiAjMWQ4MmZmO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLnBiX25hdmJhci5zY3JvbGxlZC5wYl9zY3JvbGxlZC1saWdodCAubmF2YmFyLW5hdiB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwcmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogMHJlbSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5wYl9uYXZiYXIuc2Nyb2xsZWQucGJfc2Nyb2xsZWQtbGlnaHQgdWwgbGkgYSB7XG4gIGNvbG9yOiAjMjEyNTI5IDtcbn1cblxuLnBiX25hdmJhci5zY3JvbGxlZC5wYl9zY3JvbGxlZC1saWdodCB1bCBsaSBhOmhvdmVyLCAucGJfbmF2YmFyLnNjcm9sbGVkLnBiX3Njcm9sbGVkLWxpZ2h0IHVsIGxpIGE6YWN0aXZlLCAucGJfbmF2YmFyLnNjcm9sbGVkLnBiX3Njcm9sbGVkLWxpZ2h0IHVsIGxpIGE6Zm9jdXMge1xuICBjb2xvcjogIzg2OGU5Njtcbn1cblxuXG5cbi5wYl9uYXZiYXIuc2Nyb2xsZWQucGJfc2Nyb2xsZWQtbGlnaHQgdWwgbGkuY3RhLWJ0bj5hPnNwYW4ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICMwMENBNEM7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ucGJfZm9vdGVyIHtcbiAgcGFkZGluZzogNWVtIDA7XG59XG5cbi5wYl9mb290ZXIgLmxpc3QtdW5zdHlsZWQgbGkge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4ucGJfZm9vdGVyLmJnLWJsYWNrIHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbn1cblxuLnBiX3NlY3Rpb24ge1xuICBwYWRkaW5nOiAxMGVtIDA7XG59XG5cbi5jdXJyZW50LXNlY3Rpb24gYXtcbiAgY29sb3I6ICMxZDgyZmYgIWltcG9ydGFudDsgXG59XG5cbi5saXN0LWlubGluZS1pdGVte1xuICB3aWR0aDogdW5zZXQgIWltcG9ydGFudDtcbn1cblxuLmltZy13cmFwcGVye1xuICB3aWR0aDogMTIwcHg7XG4gIGJvcmRlcjogc29saWQgMnB4ICNmM2Y0Zjk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMnB4O1xuICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLWJveHNoYWRvdyk7XG59XG5cbi5pbWctd3JhcHBlciBpbWd7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/modules/mainView/home-page/home-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/mainView/home-page/home-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




;
let HomePageComponent = class HomePageComponent {
    constructor(_router, _route, _location) {
        this._router = _router;
        this._route = _route;
        this._location = _location;
        this.currentSection = 'home';
    }
    ngOnInit() {
        this._route.params.subscribe(params => {
            this.currentSection = params['sectionId'];
            // this.scrollTo(this.currentSection);
        });
    }
    onSectionChange(sectionId) {
        // this._location.go(sectionId);
        this.currentSection = sectionId;
    }
    scrollTo(section) {
        document.querySelector('#' + section).scrollIntoView();
        document.getElementById(section).scrollIntoView();
    }
    // @HostListener('window:scroll', ['$event']) 
    // for window scroll events
    onScroll(event) {
        let st = event.target.scrollTop;
        let navbar = $('.pb_navbar');
        let sd = $('.js-scroll-wrap');
        if (st > 150) {
            if (!navbar.hasClass('scrolled')) {
                navbar.addClass('scrolled');
            }
        }
        if (st < 150) {
            if (navbar.hasClass('scrolled')) {
                navbar.removeClass('scrolled sleep');
            }
        }
        if (st > 350) {
            if (!navbar.hasClass('awake')) {
                navbar.addClass('awake');
            }
            if (sd.length > 0) {
                sd.addClass('sleep');
            }
        }
        if (st < 350) {
            if (navbar.hasClass('awake')) {
                navbar.removeClass('awake');
                navbar.addClass('sleep');
            }
            if (sd.length > 0) {
                sd.removeClass('sleep');
            }
        }
    }
};
HomePageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mainView/home-page/home-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-page.component.css */ "./src/app/modules/mainView/home-page/home-page.component.css")).default]
    })
], HomePageComponent);



/***/ }),

/***/ "./src/app/modules/mainView/main-dashboard/main-dashboard.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/modules/mainView/main-dashboard/main-dashboard.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  position: relative;\n}\n\n.container > .row {\n  height: 95vh;\n}\n\n.txt-forget-pwd{\n  color: var(--primary-color);\n  font-weight: 500;\n}\n\n.login-title{\n  color: var(--text-dark-color);\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n@media (max-width: 767px) {\n  .container > .row {\n    height: inherit;\n    padding: 6em 0;\n  }\n}\n\n.pb_form_v1 {\n  padding: 30px;\n  box-shadow: var(--card-boxshadow);\n}\n\n@media (max-width: 991px) {\n  .pb_form_v1 {\n    padding: 10px;\n  }\n}\n\n.pb_cover_v3 a,\n.pb_xl_py_cover a {\n  color: rgba(255, 255, 255, 0.5);\n  border-bottom: 2px solid transparent;\n}\n\n.link-name {\n  color: rgba(255, 255, 255, 0.5);\n  border-bottom: 2px solid transparent;\n}\n\n.btn-primary {\n  border-radius: 50px;\n  padding: .5rem 1rem;\n    font-size: 1.25rem;\n    line-height: 1.5;\n    width: 100%;\n}\n\n.errMsg {\n  padding: 0px 8px;\n  border-radius: 50%;\n}\n\n.loader {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 100%;\n  height: 100%;\n  z-index: 9999;\n  background: url('loading6.1017e4027316b53a22e0.svg') 50% 45% no-repeat;\n}\n\n.err-wrapper{\n  color: #dc3545;\n}\n\n.errMsg{\n  color: white;\n  background-color: #dc3545;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluVmlldy9tYWluLWRhc2hib2FyZC9tYWluLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsY0FBYztFQUNoQjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUdiLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7O0VBRUUsK0JBQStCO0VBQy9CLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHNFQUErRDtBQUNqRTs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluVmlldy9tYWluLWRhc2hib2FyZC9tYWluLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNvbnRhaW5lciA+IC5yb3cge1xuICBoZWlnaHQ6IDk1dmg7XG59XG5cbi50eHQtZm9yZ2V0LXB3ZHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubG9naW4tdGl0bGV7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmstY29sb3IpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGFpbmVyID4gLnJvdyB7XG4gICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgIHBhZGRpbmc6IDZlbSAwO1xuICB9XG59XG5cbi5wYl9mb3JtX3YxIHtcbiAgcGFkZGluZzogMzBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiB2YXIoLS1jYXJkLWJveHNoYWRvdyk7XG4gIC1tb3otYm94LXNoYWRvdzogdmFyKC0tY2FyZC1ib3hzaGFkb3cpO1xuICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLWJveHNoYWRvdyk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAucGJfZm9ybV92MSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxufVxuXG4ucGJfY292ZXJfdjMgYSxcbi5wYl94bF9weV9jb3ZlciBhIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4ubGluay1uYW1lIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZXJyTXNnIHtcbiAgcGFkZGluZzogMHB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmxvYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogOTk5OTtcbiAgYmFja2dyb3VuZDogdXJsKFwiYXNzZXRzL2ltYWdlcy9sb2FkaW5nNi5zdmdcIikgNTAlIDQ1JSBuby1yZXBlYXQ7XG59XG5cbi5lcnItd3JhcHBlcntcbiAgY29sb3I6ICNkYzM1NDU7XG59XG5cbi5lcnJNc2d7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/mainView/main-dashboard/main-dashboard.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/mainView/main-dashboard/main-dashboard.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MainDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainDashboardComponent", function() { return MainDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/http/serviceIndex */ "./src/app/core/http/serviceIndex.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _models_CommonModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @models/CommonModel */ "./src/app/shared/models/CommonModel.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/core/http/detail.service */ "./src/app/core/http/detail.service.ts");









let MainDashboardComponent = class MainDashboardComponent {
    constructor(modalService, formBuilder, router, _service, _detailService) {
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.router = router;
        this._service = _service;
        this._detailService = _detailService;
        this.branchList = [];
        this.validProfile = false;
        this.submitted = false;
        this.submitModel = false;
        this.isError = false;
        this.isGuest = false;
        this.loading = false;
        this.scoreList = [];
        this.isProgress = false;
    }
    ngOnInit() {
        // if(localStorage.getItem('userData'))
        //   this.router.navigateByUrl('alchemist-academy/home')
        // else
        this.loginForm = this.formBuilder.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
        });
    }
    toggleFieldTextType() {
        this.fieldTextType = !this.fieldTextType;
    }
    toggleRepeatFieldTextType() {
        this.repeatFieldTextType = !this.repeatFieldTextType;
    }
    // convenience getter for easy access to form fields
    openModal(content, type) {
        let branch = this._detailService.getAllBranch();
        let desirescore = this._detailService.getdesiredScore();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])([branch, desirescore]).subscribe((res) => {
            this.branchList = res[0].branchList;
            this.scoreList = res[1];
            this.createUserForm = this.formBuilder.group({
                mail: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
                fullName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                gender: ["MALE", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                branch: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                phoneNumber: [""],
                desireScore: [""],
            });
            this.submitModel = false;
            this.prictiseType = type;
            this.modalRef = this.modalService.open(content, {
                size: "l",
                centered: true,
            });
        });
    }
    onCreate() {
        this.isProgress = true;
        this.submitModel = true;
        // stop here if form is invalid
        if (this.createUserForm.invalid) {
            this.isProgress = false;
            return;
        }
        else {
            this.isProgress = true;
            const newUser = new _models_CommonModel__WEBPACK_IMPORTED_MODULE_6__["User"]();
            newUser.fullName = this.createUserForm.get("fullName").value;
            newUser.email = this.createUserForm.get("mail").value;
            newUser.gender = this.createUserForm.get("gender").value;
            newUser.branch = this.createUserForm.get("branch").value;
            newUser.mobilePhone = this.createUserForm.get("phoneNumber").value;
            // this.router.navigateByUrl("/home");
            this.isGuest = true;
            this._service.register(newUser, this.isGuest).subscribe(() => {
                this.router.navigateByUrl("/");
                this.createUserForm = this.formBuilder.group({
                    mail: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
                    fullName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    gender: ["MALE", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    branch: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    phoneNumber: [""],
                    desireScore: [""],
                });
                this.isProgress = false;
            }, err => {
                this.isProgress = false;
                this.isError = true;
                this.errorMsg = err;
            });
            this.modalRef.close();
        }
    }
    get f() {
        return this.loginForm.controls;
    }
    get g() {
        return this.createUserForm.controls;
    }
    getAllBranch() {
        this._detailService.getAllBranch().subscribe((res) => {
            this.branchList = res.branchList;
        });
    }
    close() {
        this.isProgress = false;
        this.modalRef.close();
        this.createUserForm = this.formBuilder.group({
            mail: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            fullName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            gender: ["MALE", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            branch: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    onLogin() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        else {
            this.isProgress = true;
            // this.loading = true;
            this._service.login(this.loginForm.value).subscribe((res) => {
                localStorage.setItem("token", res.token);
                localStorage.setItem("userData", btoa(JSON.stringify(res.user)));
                this.router.navigateByUrl("/alchemist-academy/home");
            }, (err) => {
                this.isProgress = false;
                this.isError = true;
                this.errorMsg = err;
            });
        }
    }
};
MainDashboardComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_8__["DetailService"] }
];
MainDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "main-dashboard",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/mainView/main-dashboard/main-dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-dashboard.component.css */ "./src/app/modules/mainView/main-dashboard/main-dashboard.component.css")).default]
    })
], MainDashboardComponent);



/***/ }),

/***/ "./src/app/modules/mainView/main-view-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/mainView/main-view-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: MainViewRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainViewRouting", function() { return MainViewRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/modules/mainView/home-page/home-page.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/modules/mainView/change-password/change-password.component.ts");





const routes = [
    {
        path: '',
        component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"],
    },
    {
        path: 'reset-password/getEmail',
        component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_4__["ChangePasswordComponent"],
    }
];
let MainViewRouting = class MainViewRouting {
};
MainViewRouting = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MainViewRouting);



/***/ }),

/***/ "./src/app/modules/mainView/main-view.module.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/mainView/main-view.module.ts ***!
  \******************************************************/
/*! exports provided: MainViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainViewModule", function() { return MainViewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/modules/mainView/home-page/home-page.component.ts");
/* harmony import */ var _main_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-view-routing.module */ "./src/app/modules/mainView/main-view-routing.module.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/modules/mainView/about-us/about-us.component.ts");
/* harmony import */ var _main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main-dashboard/main-dashboard.component */ "./src/app/modules/mainView/main-dashboard/main-dashboard.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/modules/mainView/change-password/change-password.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/modules/mainView/contact-us/contact-us.component.ts");
/* harmony import */ var _app_shared_basic_components_basic_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/shared/basic-components/basic.module */ "./src/app/shared/basic-components/basic.module.ts");




// components






// modules

let MainViewModule = class MainViewModule {
};
MainViewModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"],
            _main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["MainDashboardComponent"],
            _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__["AboutUsComponent"],
            _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_8__["ChangePasswordComponent"],
            _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_9__["ContactUsComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _main_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["MainViewRouting"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _app_shared_basic_components_basic_module__WEBPACK_IMPORTED_MODULE_10__["BasicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        ],
    })
], MainViewModule);



/***/ })

}]);
//# sourceMappingURL=modules-mainView-main-view-module-es2015.f85db085b79d7d2a275d.js.map