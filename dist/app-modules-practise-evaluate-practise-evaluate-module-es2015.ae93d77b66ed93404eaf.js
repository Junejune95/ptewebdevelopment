(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-practise-evaluate-practise-evaluate-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/practise-evaluate/listening-practise/listening-practise.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/practise-evaluate/listening-practise/listening-practise.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"!scoreResult; else showScore\">\n    <ng-container *ngIf=\"questionList[selectedIndex].question as question\">\n        <header-evaluate-menu [questionCode]=\"routeParam.questionType\" [question]=\"question\"\n            (timerEvent)=\"onTimeEnd($event)\">\n            <show-question-count [currentNo]=\"selectedIndex+1\" [totalCount]=\"questionList.length\">\n                <listening-question [questionData]=\"question\" (answerEmit)=\"getAnswer($event)\"></listening-question>\n            </show-question-count>\n        </header-evaluate-menu>\n    </ng-container>\n</ng-container>\n<ng-template #showScore>\n    <header-evaluate-menu [questionCode]=\"routeParam.questionType\">\n        <user-info [info]=\"scoreResult\" *ngIf=\"routeParam.questionType !='L008'\"></user-info>\n        <ng-container *ngFor=\"let score of scoreResult.results;let i=index;\">\n            <show-question-count [currentNo]=\"i+1\">\n                <score-by-module [scoreResult]=\"score\" [moduleName]=\"'Listening'\"></score-by-module>\n            </show-question-count>\n        </ng-container>\n        <div class=\"footer-button-block\">\n            <cancel-btn>Cancel</cancel-btn>\n        </div>\n    </header-evaluate-menu>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/practise-evaluate/reading-practise/reading-practise.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/practise-evaluate/reading-practise/reading-practise.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header-evaluate-menu [questionCode]=\"routeParam.questionType\">\n    <ng-container *ngIf=\"!resultScore; else showScore\">\n        <div *ngIf=\"detailData.youtubeLink as youtubeLink\" class=\"exp__wrapper\">\n            <div class=\"exp__content\" *ngIf=\"youtubeLink[0]!=''\" (click)=\"openYouTube(content,0)\">\n                Explanation (English)\n            </div>\n\n            <div class=\"exp__content\" *ngIf=\"youtubeLink[1]!=''\" (click)=\"openYouTube(content,1)\">\n                Explanation (Hindi)\n            </div>\n\n            <div class=\"exp__content\" *ngIf=\"youtubeLink[2]!=''\" (click)=\"openYouTube(content,2)\">\n                Explanation (Burmese)\n            </div>\n\n            <div class=\"exp__content\" *ngIf=\"youtubeLink[3]!=''\" (click)=\"openYouTube(content,3)\">\n                Explanation (Spanish)\n            </div>\n\n            <div class=\"exp__content\" *ngIf=\"youtubeLink[3]!=''\" (click)=\"openYouTube(content,4)\">\n                Explanation (Punjabi)\n            </div>\n\n            <div class=\"exp__content\" *ngIf=\"youtubeLink[3]!=''\" (click)=\"openYouTube(content,5)\">\n                Explanation (Nepalese)\n            </div>\n        </div>\n\n        <reading-question [questionData]=\"detailData\" (answerEmit)=\"getAnswer($event)\"></reading-question>\n    </ng-container>\n    <ng-template #showScore>\n        <score-by-module [scoreResult]=\"resultScore\" [moduleName]=\"'Reading'\"></score-by-module>\n        <div class=\"footer-button-block\">\n            <cancel-btn>Cancel</cancel-btn>\n        </div>\n    </ng-template>\n</header-evaluate-menu>\n\n<ng-template #content let-modal>\n    <div class=\"modal-body\">\n        <iframe width=\"460\" height=\"300\" [src]=\"safeUrl\" frameborder=\"0\" allowfullscreen></iframe>\n        <!-- <video width=\"320\" height=\"240\" controls>\n            <source [src]=\"detailData.youtubeLink[selectedIndex]\" type=\"video/mp4\">\n            Your browser does not support the video tag.\n        </video> -->\n    </div>\n\n\n    <div class=\"modal-footer\">\n        <div class=\"d-flex justify-content-end\">\n            <div class=\"d-flex\">\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"close()\">\n                    Close\n                </button>\n            </div>\n        </div>\n    </div>\n</ng-template>\n\n<!-- <question-side-menu [questionList]=\"questionList\" (onSelectedQuestion)=\"onSelectedQuestion($event)\"></question-side-menu> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/practise-evaluate/speaking-practise/speaking-practise.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/practise-evaluate/speaking-practise/speaking-practise.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"!isLoading\">\n    <ng-container *ngIf=\"!scoreResult ; else showScore\">\n        <header-evaluate-menu [questionCode]=\"routeParam.questionType\">\n            <speaking-question [questionData]=\"selectedQuestion\" (answerEmit)=\"getAnswer($event)\"\n                [isnonEvaluate]=\"false\">\n            </speaking-question>\n        </header-evaluate-menu>\n\n    </ng-container>\n\n    <ng-template #showScore>\n        <header-evaluate-menu [questionCode]=\"routeParam.questionType\">\n            <score-by-module [scoreResult]=\"scoreResult\" [moduleName]=\"'Speaking'\"></score-by-module>\n\n            <button class=\"btn btn-retry\" (click)=\"onRetry()\">\n                <i class=\"fa fa-repeat\" aria-hidden=\"true\"></i>\n                Retry\n            </button>\n            <div class=\"footer-button-block\">\n                <cancel-btn>Cancel</cancel-btn>\n                <!-- <button class=\"btn btn-next\" (click)=\"onEvaluate()\" *ngIf=\"!isFinal\">AI Scoring</button> -->\n            </div>\n\n        </header-evaluate-menu>\n    </ng-template>\n\n    <question-side-menu [questionList]=\"questionList\" (onSelectedQuestion)=\"onSelectedQuestion($event)\">\n    </question-side-menu>\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/practise-evaluate/writing-practise/writing-practise.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/practise-evaluate/writing-practise/writing-practise.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header-evaluate-menu [questionCode]=\"routeParam.questionType\">\n    <ng-container [ngSwitch]=\"routeParam.questionType\">\n        <ng-container *ngSwitchCase=\"'W001'\">\n            <essay-question [essayDetail]=\"detailData\" (submitEvaluation)=\"onSubmit($event)\" *ngIf=\"!resultScore\"></essay-question>\n            <evaluation-score [scoreData]=\"resultScore\" *ngIf=\"resultScore\"></evaluation-score>\n        </ng-container>\n\n        <ng-container *ngSwitchCase=\"'W002'\">\n          <summary-question [summaryDetail]=\"detailData\" (submitEvaluation)=\"onSubmit($event)\" *ngIf=\"!resultScore\"></summary-question>\n          <summary-score [scoreData]=\"resultScore\" *ngIf=\"resultScore\"></summary-score>\n        </ng-container>\n    </ng-container>\n    <div class=\"footer-button-block\" *ngIf=\"resultScore\">\n        <cancel-btn></cancel-btn>\n    </div>\n</header-evaluate-menu>\n\n\n");

/***/ }),

/***/ "./src/app/modules/practise-evaluate/listening-practise/listening-practise.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/practise-evaluate/listening-practise/listening-practise.component.css ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJhY3Rpc2UtZXZhbHVhdGUvbGlzdGVuaW5nLXByYWN0aXNlL2xpc3RlbmluZy1wcmFjdGlzZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/practise-evaluate/listening-practise/listening-practise.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/practise-evaluate/listening-practise/listening-practise.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ListeningPractiseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListeningPractiseComponent", function() { return ListeningPractiseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_core_http_evaluate_question_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/http/evaluate-question.service */ "./src/app/core/http/evaluate-question.service.ts");
/* harmony import */ var _app_shared_question_components_listening_question_listening_question_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/question-components/listening-question/listening-question.component */ "./src/app/shared/question-components/listening-question/listening-question.component.ts");





let ListeningPractiseComponent = class ListeningPractiseComponent {
    constructor(_activeRoute, _service) {
        this._activeRoute = _activeRoute;
        this._service = _service;
        this.selectedIndex = 0;
        this.answerList = [];
    }
    ngOnInit() {
        this.routeParam = this._activeRoute.snapshot.params;
        this.questionList = this._activeRoute.snapshot.data["questionDetail"].questionList;
    }
    getAnswer(answer) {
        this.answerList.push(answer);
        if (this.selectedIndex == this.questionList.length - 1) {
            let finalAnswer = {
                userAnswers: this.answerList,
                questionType: this.routeParam.questionType
            };
            this._subscription = this._service.onPractiseListeningEvaluate(finalAnswer, this.routeParam)
                .subscribe((res) => {
                this.scoreResult = res;
            });
        }
        else {
            this.selectedIndex += 1;
        }
    }
    onTimeEnd(e) {
        if (e.action === 'done')
            this.listeningQuestion.onSubmit();
    }
    ngAfterViewInit() {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        // console.log(this.listeningQuestion)
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        if (this._subscription)
            this._subscription.unsubscribe();
    }
};
ListeningPractiseComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _app_core_http_evaluate_question_service__WEBPACK_IMPORTED_MODULE_3__["EvaluateQuestionService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_app_shared_question_components_listening_question_listening_question_component__WEBPACK_IMPORTED_MODULE_4__["ListeningQuestionComponent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _app_shared_question_components_listening_question_listening_question_component__WEBPACK_IMPORTED_MODULE_4__["ListeningQuestionComponent"])
], ListeningPractiseComponent.prototype, "listeningQuestion", void 0);
ListeningPractiseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listening-practise',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./listening-practise.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/practise-evaluate/listening-practise/listening-practise.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./listening-practise.component.css */ "./src/app/modules/practise-evaluate/listening-practise/listening-practise.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _app_core_http_evaluate_question_service__WEBPACK_IMPORTED_MODULE_3__["EvaluateQuestionService"]])
], ListeningPractiseComponent);



/***/ }),

/***/ "./src/app/modules/practise-evaluate/practise-evaluate.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/practise-evaluate/practise-evaluate.module.ts ***!
  \***********************************************************************/
/*! exports provided: PractiseEvaluateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PractiseEvaluateModule", function() { return PractiseEvaluateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _writing_practise_writing_practise_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./writing-practise/writing-practise.component */ "./src/app/modules/practise-evaluate/writing-practise/writing-practise.component.ts");
/* harmony import */ var _app_modules_practise_evaluate_reading_practise_reading_practise_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/practise-evaluate/reading-practise/reading-practise.component */ "./src/app/modules/practise-evaluate/reading-practise/reading-practise.component.ts");
/* harmony import */ var _app_modules_practise_evaluate_listening_practise_listening_practise_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/modules/practise-evaluate/listening-practise/listening-practise.component */ "./src/app/modules/practise-evaluate/listening-practise/listening-practise.component.ts");
/* harmony import */ var _app_modules_practise_evaluate_speaking_practise_speaking_practise_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/modules/practise-evaluate/speaking-practise/speaking-practise.component */ "./src/app/modules/practise-evaluate/speaking-practise/speaking-practise.component.ts");
/* harmony import */ var _app_shared_basic_components_basic_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/basic-components/basic.module */ "./src/app/shared/basic-components/basic.module.ts");
/* harmony import */ var _app_modules_practise_evaluate_prasticeEvaluate_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/modules/practise-evaluate/prasticeEvaluate-routing.module */ "./src/app/modules/practise-evaluate/prasticeEvaluate-routing.module.ts");
/* harmony import */ var _app_shared_question_components_question_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/shared/question-components/question-components.module */ "./src/app/shared/question-components/question-components.module.ts");










let PractiseEvaluateModule = class PractiseEvaluateModule {
};
PractiseEvaluateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _writing_practise_writing_practise_component__WEBPACK_IMPORTED_MODULE_3__["WritingPractiseComponent"],
            _app_modules_practise_evaluate_reading_practise_reading_practise_component__WEBPACK_IMPORTED_MODULE_4__["ReadingPractiseComponent"],
            _app_modules_practise_evaluate_listening_practise_listening_practise_component__WEBPACK_IMPORTED_MODULE_5__["ListeningPractiseComponent"],
            _app_modules_practise_evaluate_speaking_practise_speaking_practise_component__WEBPACK_IMPORTED_MODULE_6__["SpeakingPractiseComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _app_shared_basic_components_basic_module__WEBPACK_IMPORTED_MODULE_7__["BasicModule"],
            _app_shared_question_components_question_components_module__WEBPACK_IMPORTED_MODULE_9__["QuestionComponentsModule"],
            _app_modules_practise_evaluate_prasticeEvaluate_routing_module__WEBPACK_IMPORTED_MODULE_8__["PracticeEvaluateRoutingModule"]
        ],
        exports: [
            _app_modules_practise_evaluate_prasticeEvaluate_routing_module__WEBPACK_IMPORTED_MODULE_8__["PracticeEvaluateRoutingModule"]
        ]
    })
], PractiseEvaluateModule);



/***/ }),

/***/ "./src/app/modules/practise-evaluate/prasticeEvaluate-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/practise-evaluate/prasticeEvaluate-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: PracticeEvaluateRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PracticeEvaluateRoutingModule", function() { return PracticeEvaluateRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_modules_practise_evaluate_reslovers_practise_evaluate_detail_reslover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modules/practise-evaluate/reslovers/practise-evaluate-detail.reslover */ "./src/app/modules/practise-evaluate/reslovers/practise-evaluate-detail.reslover.ts");
/* harmony import */ var _app_modules_practise_evaluate_listening_practise_listening_practise_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/practise-evaluate/listening-practise/listening-practise.component */ "./src/app/modules/practise-evaluate/listening-practise/listening-practise.component.ts");
/* harmony import */ var _app_modules_practise_evaluate_reading_practise_reading_practise_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/modules/practise-evaluate/reading-practise/reading-practise.component */ "./src/app/modules/practise-evaluate/reading-practise/reading-practise.component.ts");
/* harmony import */ var _app_modules_practise_evaluate_speaking_practise_speaking_practise_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/modules/practise-evaluate/speaking-practise/speaking-practise.component */ "./src/app/modules/practise-evaluate/speaking-practise/speaking-practise.component.ts");
/* harmony import */ var _app_modules_practise_evaluate_writing_practise_writing_practise_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/modules/practise-evaluate/writing-practise/writing-practise.component */ "./src/app/modules/practise-evaluate/writing-practise/writing-practise.component.ts");








const routes = [
    {
        path: ':moduleName/:questionType/:questionId/writing-practise',
        component: _app_modules_practise_evaluate_writing_practise_writing_practise_component__WEBPACK_IMPORTED_MODULE_7__["WritingPractiseComponent"],
        resolve: {
            questionDetail: _app_modules_practise_evaluate_reslovers_practise_evaluate_detail_reslover__WEBPACK_IMPORTED_MODULE_3__["PractiseEvaluateDetailResolver"]
        }
    },
    {
        path: ':moduleName/:questionType/:questionId/reading-practise',
        component: _app_modules_practise_evaluate_reading_practise_reading_practise_component__WEBPACK_IMPORTED_MODULE_5__["ReadingPractiseComponent"],
        resolve: {
            questionDetail: _app_modules_practise_evaluate_reslovers_practise_evaluate_detail_reslover__WEBPACK_IMPORTED_MODULE_3__["PractiseEvaluateDetailResolver"]
        }
    },
    {
        path: ':moduleName/:questionType/:questionId/speaking-practise',
        component: _app_modules_practise_evaluate_speaking_practise_speaking_practise_component__WEBPACK_IMPORTED_MODULE_6__["SpeakingPractiseComponent"],
        resolve: {
            questionDetail: _app_modules_practise_evaluate_reslovers_practise_evaluate_detail_reslover__WEBPACK_IMPORTED_MODULE_3__["PractiseEvaluateDetailResolver"]
        }
    },
    {
        path: ':moduleName/:questionType/:questionId/listening-practise',
        component: _app_modules_practise_evaluate_listening_practise_listening_practise_component__WEBPACK_IMPORTED_MODULE_4__["ListeningPractiseComponent"],
        resolve: {
            questionDetail: _app_modules_practise_evaluate_reslovers_practise_evaluate_detail_reslover__WEBPACK_IMPORTED_MODULE_3__["PractiseEvaluateDetailResolver"]
        }
    },
];
let PracticeEvaluateRoutingModule = class PracticeEvaluateRoutingModule {
};
PracticeEvaluateRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [
            _app_modules_practise_evaluate_reslovers_practise_evaluate_detail_reslover__WEBPACK_IMPORTED_MODULE_3__["PractiseEvaluateDetailResolver"]
        ]
    })
], PracticeEvaluateRoutingModule);



/***/ }),

/***/ "./src/app/modules/practise-evaluate/reading-practise/reading-practise.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/practise-evaluate/reading-practise/reading-practise.component.css ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".exp__wrapper {\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.exp__content {\n    background: var(--primary-color);\n    color: white;\n    padding: 9px;\n    border-radius: 20px;\n    margin: 8px;\n    font-size: 14px;\n    font-weight: 500;\n    cursor: pointer;\n    border: solid 1px var(--primary-color);\n}\n\n.exp__content:hover {\n  \n    background-color: white;\n    color: var(--primary-color);\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wcmFjdGlzZS1ldmFsdWF0ZS9yZWFkaW5nLXByYWN0aXNlL3JlYWRpbmctcHJhY3Rpc2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHNDQUFzQztBQUMxQzs7QUFFQTs7SUFFSSx1QkFBdUI7SUFDdkIsMkJBQTJCOztBQUUvQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJhY3Rpc2UtZXZhbHVhdGUvcmVhZGluZy1wcmFjdGlzZS9yZWFkaW5nLXByYWN0aXNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhwX193cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmV4cF9fY29udGVudCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDlweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIG1hcmdpbjogOHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuLmV4cF9fY29udGVudDpob3ZlciB7XG4gIFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcblxufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/practise-evaluate/reading-practise/reading-practise.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/practise-evaluate/reading-practise/reading-practise.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ReadingPractiseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadingPractiseComponent", function() { return ReadingPractiseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_core_http_evaluate_question_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/http/evaluate-question.service */ "./src/app/core/http/evaluate-question.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");






let ReadingPractiseComponent = class ReadingPractiseComponent {
    constructor(_activeRoute, readingService, modalService, sanitizer) {
        this._activeRoute = _activeRoute;
        this.readingService = readingService;
        this.modalService = modalService;
        this.sanitizer = sanitizer;
        this.questionList = [];
        this.isShowModal = false;
    }
    ngOnInit() {
        this.routeParam = this._activeRoute.snapshot.params;
        this.detailData = this._activeRoute.snapshot.data["questionDetail"];
        console.log(this.detailData.youtubeLink);
    }
    getAnswer(answer) {
        this._subscription = this.readingService.onPractiseReadingEvaluate(answer, this.routeParam)
            .subscribe((res) => {
            this.resultScore = res;
            this.resultScore.questionType = this.routeParam.questionType;
        });
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        if (this._subscription)
            this._subscription.unsubscribe();
    }
    onSelectedQuestion(ques) {
        this.detailData = ques;
    }
    openYouTube(content, index) {
        this.selectedIndex = index;
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.detailData.youtubeLink[index]);
        console.log(this.detailData.youtubeLink[index]);
        this.modalRef = this.modalService.open(content, {
            size: "l",
            centered: true,
        });
    }
    close() {
        this.modalRef.close();
    }
};
ReadingPractiseComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _app_core_http_evaluate_question_service__WEBPACK_IMPORTED_MODULE_3__["EvaluateQuestionService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }
];
ReadingPractiseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reading-practise',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reading-practise.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/practise-evaluate/reading-practise/reading-practise.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reading-practise.component.css */ "./src/app/modules/practise-evaluate/reading-practise/reading-practise.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _app_core_http_evaluate_question_service__WEBPACK_IMPORTED_MODULE_3__["EvaluateQuestionService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]])
], ReadingPractiseComponent);



/***/ }),

/***/ "./src/app/modules/practise-evaluate/reslovers/practise-evaluate-detail.reslover.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/practise-evaluate/reslovers/practise-evaluate-detail.reslover.ts ***!
  \******************************************************************************************/
/*! exports provided: PractiseEvaluateDetailResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PractiseEvaluateDetailResolver", function() { return PractiseEvaluateDetailResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/http/detail.service */ "./src/app/core/http/detail.service.ts");



let PractiseEvaluateDetailResolver = class PractiseEvaluateDetailResolver {
    constructor(question) {
        this.question = question;
    }
    resolve(route) {
        let moduleName = route.params['moduleName'].toLowerCase();
        const routeUrl = `${moduleName}/${route.params['questionType']}/${route.params['questionId']}/${moduleName}-practise`;
        return this.question.getDetail(routeUrl);
    }
};
PractiseEvaluateDetailResolver.ctorParameters = () => [
    { type: _app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_2__["DetailService"] }
];
PractiseEvaluateDetailResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_2__["DetailService"]])
], PractiseEvaluateDetailResolver);



/***/ }),

/***/ "./src/app/modules/practise-evaluate/speaking-practise/speaking-practise.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/practise-evaluate/speaking-practise/speaking-practise.component.css ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-retry {\n    background-color: #dedbdb;\n    color: var(--text-fade-color);\n    border: solid 1px;\n    border-radius: 0;\n    padding: 0.4em 1.3em;\n    font-size: 1.2em;\n    margin-bottom: -140px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wcmFjdGlzZS1ldmFsdWF0ZS9zcGVha2luZy1wcmFjdGlzZS9zcGVha2luZy1wcmFjdGlzZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wcmFjdGlzZS1ldmFsdWF0ZS9zcGVha2luZy1wcmFjdGlzZS9zcGVha2luZy1wcmFjdGlzZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1yZXRyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGJkYjtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1mYWRlLWNvbG9yKTtcbiAgICBib3JkZXI6IHNvbGlkIDFweDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIHBhZGRpbmc6IDAuNGVtIDEuM2VtO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgbWFyZ2luLWJvdHRvbTogLTE0MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/practise-evaluate/speaking-practise/speaking-practise.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/practise-evaluate/speaking-practise/speaking-practise.component.ts ***!
  \********************************************************************************************/
/*! exports provided: SpeakingPractiseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakingPractiseComponent", function() { return SpeakingPractiseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_core_http_evaluate_question_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/http/evaluate-question.service */ "./src/app/core/http/evaluate-question.service.ts");
/* harmony import */ var _app_shared_question_components_speaking_question_speaking_question_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/question-components/speaking-question/speaking-question.component */ "./src/app/shared/question-components/speaking-question/speaking-question.component.ts");





let SpeakingPractiseComponent = class SpeakingPractiseComponent {
    constructor(_activeRoute, _service) {
        this._activeRoute = _activeRoute;
        this._service = _service;
        this.isLoading = false;
    }
    ngOnInit() {
        this.routeParam = this._activeRoute.snapshot.params;
        this.questionList = this._activeRoute.snapshot.data["questionDetail"].questionList;
        this.selectedQuestion = this.questionList[0].question;
    }
    onRetry() {
        this.scoreResult = null;
    }
    getAnswer(answer) {
        this.answers = answer;
        if (answer.isNoEvaluate) {
            this.scoreResult = {};
            this.scoreResult.file = answer.blobUrl;
            this.scoreResult.isNoEvaluate = answer.isNoEvaluate;
            this.scoreResult.questionType = answer.questionType;
            this.scoreResult.question = this.selectedQuestion.paragraph;
            this.scoreResult.audioFile = this.selectedQuestion.audioFile;
            this.scoreResult.imageFile = this.selectedQuestion.imageFile;
        }
        else {
            this._subscription = this._service.onPractiseSpeakingEvaluate(answer, this.routeParam)
                .subscribe((res) => {
                this.scoreResult = res;
                // this.scoreResult.blobUrl =  answer.blobUrl;
            });
        }
    }
    onEvaluate() {
        this.isLoading = true;
        let ans = {
            // file:this.answers.file,
            questionType: this.answers.questionType,
            questionId: this.answers.questionId,
            transcript: this.answers.transcript,
            items: this.answers.items
        };
        this.scoreResult = null;
        this._subscription = this._service.onPractiseSpeakingEvaluate(ans, this.routeParam)
            .subscribe((res) => {
            this.scoreResult = res;
            // this.scoreResult.audioFile = this.answers.blobUrl;
            if (this.scoreResult)
                this.scoreResult.isNoEvaluate = false;
            this.isLoading = false;
        });
    }
    onTimeEnd(e) {
        if (e.action === 'done')
            this.speakingQuestion.onSubmit();
    }
    ngAfterViewInit() {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        // console.log(this.listeningQuestion)
    }
    onSelectedQuestion(ques) {
        this.selectedQuestion = ques;
        this.scoreResult = null;
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        if (this._subscription)
            this._subscription.unsubscribe();
    }
};
SpeakingPractiseComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _app_core_http_evaluate_question_service__WEBPACK_IMPORTED_MODULE_3__["EvaluateQuestionService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_app_shared_question_components_speaking_question_speaking_question_component__WEBPACK_IMPORTED_MODULE_4__["SpeakingQuestionComponent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _app_shared_question_components_speaking_question_speaking_question_component__WEBPACK_IMPORTED_MODULE_4__["SpeakingQuestionComponent"])
], SpeakingPractiseComponent.prototype, "speakingQuestion", void 0);
SpeakingPractiseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-speaking-practise',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./speaking-practise.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/practise-evaluate/speaking-practise/speaking-practise.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./speaking-practise.component.css */ "./src/app/modules/practise-evaluate/speaking-practise/speaking-practise.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _app_core_http_evaluate_question_service__WEBPACK_IMPORTED_MODULE_3__["EvaluateQuestionService"]])
], SpeakingPractiseComponent);



/***/ }),

/***/ "./src/app/modules/practise-evaluate/writing-practise/writing-practise.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/practise-evaluate/writing-practise/writing-practise.component.css ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJhY3Rpc2UtZXZhbHVhdGUvd3JpdGluZy1wcmFjdGlzZS93cml0aW5nLXByYWN0aXNlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/practise-evaluate/writing-practise/writing-practise.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/practise-evaluate/writing-practise/writing-practise.component.ts ***!
  \******************************************************************************************/
/*! exports provided: WritingPractiseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WritingPractiseComponent", function() { return WritingPractiseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_core_http_evaluate_question_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/http/evaluate-question.service */ "./src/app/core/http/evaluate-question.service.ts");




let WritingPractiseComponent = class WritingPractiseComponent {
    constructor(_activeRoute, writingService) {
        this._activeRoute = _activeRoute;
        this.writingService = writingService;
    }
    ngOnInit() {
        this.routeParam = this._activeRoute.snapshot.params;
        this.detailData = this._activeRoute.snapshot.data["questionDetail"];
    }
    onSubmit(data) {
        this._subscription = this.writingService.onPractiseWritingEvaluate(data, this.routeParam)
            .subscribe((res) => {
            this.resultScore = res;
        });
    }
    ngOnDestroy() {
        if (this._subscription)
            this._subscription.unsubscribe();
    }
};
WritingPractiseComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _app_core_http_evaluate_question_service__WEBPACK_IMPORTED_MODULE_3__["EvaluateQuestionService"] }
];
WritingPractiseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-writing-practise',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./writing-practise.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/practise-evaluate/writing-practise/writing-practise.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./writing-practise.component.css */ "./src/app/modules/practise-evaluate/writing-practise/writing-practise.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _app_core_http_evaluate_question_service__WEBPACK_IMPORTED_MODULE_3__["EvaluateQuestionService"]])
], WritingPractiseComponent);



/***/ })

}]);
//# sourceMappingURL=app-modules-practise-evaluate-practise-evaluate-module-es2015.ae93d77b66ed93404eaf.js.map