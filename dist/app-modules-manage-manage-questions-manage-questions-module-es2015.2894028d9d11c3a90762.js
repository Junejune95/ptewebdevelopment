(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-manage-manage-questions-manage-questions-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/comment/comment.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/comment/comment.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header-route-menu-light [currentPageName]=\"'Comments'\" [moduleName]=\"questionName\">\n</header-route-menu-light>\n\n\n<form [formGroup]=\"essayCommentForm\" class=\"create-form\">\n\n    <div class=\"container mb-3\">\n        <!-- Evaluation Comment 1 start-->\n        <div class=\"row mt-2\">\n            <div class=\"col-md-12\">\n                <group-title> Evaluation Comment 1</group-title>\n                <label-text>Comment</label-text>\n                <textarea class=\"form-control input-rectangle reverse;\" cols=\"30\" rows=\"4\" formControlName=\"comment1\"\n                    (input)=\"str = $event.target.value\"></textarea>\n            </div>\n        </div>\n        <div class=\"row mt-2\">\n            <div class=\"col-sm-6\">\n                <label-text>Min Score</label-text>\n                <input type=\"text\" class=\"form-control pb_height-50 reverse;\" formControlName=\"minValue1\"\n                    [ngClass]=\"{ 'is-invalid': submitted && wrong1 }\"\n                    oninput=\"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');\" />\n                <div *ngIf=\"wrong1\" class=\"invalid-feedback\">\n                    <div>Min Value must not greater than Max Value</div>\n                </div>\n            </div>\n\n            <div class=\"col-sm-6\">\n                <label-text>Max Score</label-text>\n                <input type=\"text\" class=\"form-control pb_height-50 reverse;\" formControlName=\"maxValue1\"\n                    oninput=\"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');\" />\n            </div>\n        </div>\n        <!-- Evaluation Comment 1 End-->\n\n        <!-- Evaluation Comment 2 start-->\n        <div class=\"row mt-2\">\n            <div class=\"col-md-12\">\n                <group-title> Evaluation Comment 2</group-title>\n                <label-text>Comment</label-text>\n                <textarea class=\"form-control input-rectangle reverse;\" cols=\"30\" rows=\"4\" formControlName=\"comment2\"\n                    (input)=\"str = $event.target.value\"></textarea>\n            </div>\n        </div>\n        <div class=\"row mt-2\">\n            <div class=\"col-sm-6\">\n                <label-text>Min Score</label-text>\n                <input type=\"text\" class=\"form-control pb_height-50 reverse;\" formControlName=\"minValue2\"\n                    [ngClass]=\"{ 'is-invalid': submitted && wrong2 }\"\n                    oninput=\"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');\" />\n                <div *ngIf=\"wrong2\" class=\"invalid-feedback\">\n                    <div>Min Value must not greater than Max Value</div>\n                </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <label-text>Max Score</label-text>\n                <input type=\"text\" class=\"form-control pb_height-50 reverse;\" formControlName=\"maxValue2\"\n                    oninput=\"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');\" />\n            </div>\n        </div>\n        <!-- Evaluation Comment 2 End-->\n\n        <!-- Evaluation Comment 3 start-->\n        <div class=\"row mt-2\">\n            <div class=\"col-md-12\">\n                <group-title> Evaluation Comment 3</group-title>\n                <label-text>Comment</label-text>\n                <textarea class=\"form-control input-rectangle reverse;\" cols=\"30\" rows=\"4\" formControlName=\"comment3\"\n                    (input)=\"str = $event.target.value\"></textarea>\n            </div>\n        </div>\n        <div class=\"row mt-2\">\n            <div class=\"col-sm-6\">\n                <label-text>Min Score</label-text>\n                <input type=\"text\" class=\"form-control pb_height-50 reverse;\" formControlName=\"minValue3\"\n                    [ngClass]=\"{ 'is-invalid': submitted && wrong3 }\"\n                    oninput=\"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');\" />\n                <div *ngIf=\"wrong3\" class=\"invalid-feedback\">\n                    <div>Max Value must not greater than Min Value</div>\n                </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <label-text>Max Score</label-text>\n                <input type=\"text\" class=\"form-control pb_height-50 reverse;\" formControlName=\"maxValue3\"\n                    oninput=\"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');\" />\n            </div>\n        </div>\n        <!-- Evaluation Comment 3 End-->\n\n        <!-- Evaluation Comment 4 start-->\n        <div class=\"row mt-2\">\n            <div class=\"col-md-12\">\n                <group-title> Evaluation Comment 4</group-title>\n                <label-text>Comment</label-text>\n                <textarea class=\"form-control input-rectangle reverse;\" cols=\"30\" rows=\"4\" formControlName=\"comment4\"\n                    (input)=\"str = $event.target.value\"></textarea>\n            </div>\n        </div>\n        <div class=\"row mt-2\">\n            <div class=\"col-sm-6\">\n                <label-text>Min Score</label-text>\n                <input type=\"text\" class=\"form-control pb_height-50 reverse;\" formControlName=\"minValue4\"\n                    [ngClass]=\"{ 'is-invalid': submitted && wrong4 }\"\n                    oninput=\"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');\" />\n                <div *ngIf=\"wrong4\" class=\"invalid-feedback\">\n                    <div>Min Value must not greater than Max Value</div>\n                </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <label-text>Max Score</label-text>\n                <input type=\"text\" class=\"form-control pb_height-50 reverse;\" formControlName=\"maxValue4\"\n                    oninput=\"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');\" />\n            </div>\n        </div>\n  \n    </div>\n    <button-footer>\n        <cancel-btn>Cancel</cancel-btn>\n        <submit-btn (onClick)=\"onSaveOrUpdateEssayComment()\">Save</submit-btn>\n    </button-footer>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/questions/questions.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/questions/questions.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header-route-menu-light [currentPageName]=\"currentModule.moduleType\" [moduleName]=\"questionName\"\n    [createRoute]=\"currentModule.questionType\" [isPractise]=\"true\" (practiseEmit)=\"onPractise($event)\"\n    [prevUrl]=\"'../../../'+currentModule.moduleType.toLowerCase()\"></header-route-menu-light>\n\n<div class=\"row\">\n    <div class=\"col-md-6 p-0\">\n        <show-entries></show-entries>\n    </div>\n    <div class=\"col-md-6 p-0\">\n        <search-box [hint]=\"'Search'\"></search-box>\n    </div>\n</div>\n<ng-container *ngIf=\"isLoading; else showData\">\n    <div>\n        <table-loading [tType]=\"'c4-1'\"></table-loading>\n    </div>\n\n</ng-container>\n<ng-template #showData>\n    <table role=\"table\" class=\"table-responsive\">\n        <thead role=\"rowgroup\">\n            <tr role=\"row\">\n                <th role=\"columnheader\" class=\"fitter-able\" (click)=\"fitter('createdDate')\"\n                    [class.fitter-active]='tableFilter.sortColumn==\"createdDate\"'>Create Date</th>\n\n                <th role=\"columnheader\" (click)=\"fitter('name')\" class=\"fitter-able\"\n                    [class.fitter-active]='tableFilter.sortColumn==\"name\"'>Name</th>\n\n                <th role=\"columnheader\" style=\"width: 20%;\">Action</th>\n            </tr>\n        </thead>\n\n\n        <tbody role=\"rowgroup\">\n            <ng-container *ngFor=\"let data of questionList\">\n                <tr role=\"row\" [class.table-selected]=\"isPractise==true && selectedId.includes(data.questionId)\"\n                    (click)=\"onSelectedQuestion(data.questionId)\">\n                    <td role=\"cell\">{{data.createdDate | defaultDate }}</td>\n                    <td role=\"cell\">{{data.name}}</td>\n                    <td>\n                        <action-btn-gp [btnName]=\"'duplicate'\" [data]=\"data\" (onSubmit)=\"duplicateWord($event)\"\n                            *ngIf=\"currentModule.moduleType=='SPEAKING'\"></action-btn-gp>\n                        <action-btn-gp [btnName]=\"'evaluate'\" [directLink]=\"'AI-score/evaluate/'+data.evaluateUrl\">\n                        </action-btn-gp>\n                        <action-btn-gp [btnName]=\"'edit'\" [editId]=\"data.questionId\">\n                        </action-btn-gp>\n                        <action-btn-gp [btnName]=\"'delete'\" [data]=\"data\" (onSubmit)=\"deleteList($event)\">\n                        </action-btn-gp>\n                    </td>\n            </ng-container>\n            <tr *ngIf=\"tableFilter.totalCount == 0\" role=\"row\">\n                <td colspan=\"4\" class=\"text-center\">\n                    No Data Exit\n                </td>\n            </tr>\n        </tbody>\n\n    </table>\n\n    <div class=\"d-flex justify-content-center my-2\">\n        <pagination [totalCount]='tableFilter.totalCount'>\n        </pagination>\n    </div>\n\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/structure/structure.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/structure/structure.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header-route-menu-light [currentPageName]=\"'Essay Structure & Coherence'\" [moduleName]=\"'Essay'\">\n</header-route-menu-light>\n\n<form [formGroup]=\"essayForm\" class=\"create-form\">\n\n    <div class=\"container mb-3\">\n        <div class=\"row\">\n            <!-- Introduction start-->\n            <div class=\"col-md-12 mb-2\">\n                <group-title> Introduction</group-title>\n                <label-text>Content Keyword </label-text>\n                <warning-text>(SEPARATE EACH WORD USING SEMICOLON (;) )</warning-text>\n                <textarea class=\"form-control input-rectangle reverse;\" cols=\"30\" rows=\"4\"\n                    formControlName=\"answer\" (input)=\"str = $event.target.value\"></textarea>\n            </div>\n            <div class=\"col-md-12 mb-2\">\n                <label-text>Maximum Keyword match</label-text>\n                <warning-text>(TO GET FULL MARKS)</warning-text>\n                <input type=\"text\" oninput=\"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');\"\n                    formControlName=\"answer_number\" class=\"form-control pb_height-50 reverse;\" />\n            </div>\n            <!-- Introduction End-->\n\n         \n\n            <!-- Coherence/Connecting Words start-->\n            <div class=\"col-md-12 mb-2\">\n                <group-title> Coherence/Connecting</group-title>\n                <label-text>Content Keyword</label-text>\n                <warning-text>(SEPARATE EACH WORD USING SEMICOLON (;) )</warning-text>\n                <textarea class=\"form-control input-rectangle reverse;\" cols=\"30\" rows=\"4\" formControlName=\"Coherence\"\n                    (input)=\"str = $event.target.value\"></textarea>\n            </div>\n            <div class=\"col-md-12 mb-2\">\n                <label-text>Maximum Keyword match</label-text>\n                <warning-text>(TO GET FULL MARKS)</warning-text>\n                <input type=\"text\" class=\"form-control pb_height-50 reverse;\"\n                    oninput=\"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');\"\n                    formControlName=\"Coherence_number\" />\n            </div>\n            <!-- Conclusion End-->\n        </div>\n    \n    </div>\n    <button-footer>\n        <cancel-btn>Cancel</cancel-btn>\n        <submit-btn (onClick)=\"onSaveOrUpdate()\">Save</submit-btn>\n    </button-footer>\n</form>");

/***/ }),

/***/ "./src/app/modules/manage/manage-questions/comment/comment.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/manage/manage-questions/comment/comment.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlL21hbmFnZS1xdWVzdGlvbnMvY29tbWVudC9jb21tZW50LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/manage/manage-questions/comment/comment.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/manage/manage-questions/comment/comment.component.ts ***!
  \******************************************************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/http/serviceIndex */ "./src/app/core/http/serviceIndex.ts");





let CommentComponent = class CommentComponent {
    constructor(formBuilder, dataService, _activeRoute, _cservice) {
        this.formBuilder = formBuilder;
        this.dataService = dataService;
        this._activeRoute = _activeRoute;
        this._cservice = _cservice;
        this.essayCommentForm = this.formBuilder.group({
            comment1: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            minValue1: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            maxValue1: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            comment2: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            minValue2: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            maxValue2: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            comment3: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            minValue3: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            maxValue3: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            comment4: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            minValue4: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            maxValue4: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.essayCommentIds = [];
        this.isProgress = false;
        this.submitted = false;
        this.check = false;
        this.wrong1 = false;
        this.wrong2 = false;
        this.wrong3 = false;
        this.wrong4 = false;
        this.comments = [];
        this.mySentences = [
            { id: 1, text: "Sentence 1" },
            { id: 2, text: "Sentence 2" },
            { id: 3, text: "Sentence 3" },
            { id: 4, text: "Sentenc4 " },
        ];
    }
    ngOnInit() {
        this.questionType = this._activeRoute.snapshot.params['questionType'];
        this.questionName = this._cservice.getquestionName(this.questionType);
        this.getEssayComment(this._activeRoute.snapshot['data'].data);
    }
    get f() {
        return this.essayCommentForm.controls;
    }
    goBack() {
        this.dataService.goBackPrev();
    }
    onSaveOrUpdateEssayComment() {
        this.isProgress = true;
        this.submitted = true;
        let array = [];
        if (this.essayCommentIds.length > 0) {
            for (let i = 1; i <= 4; i++) {
                array.push({
                    comment: this.essayCommentForm.get(`comment${i}`).value,
                    _id: this.essayCommentIds[i - 1],
                    minScore: Number(this.essayCommentForm.get(`minValue${i}`).value),
                    maxScore: Number(this.essayCommentForm.get(`maxValue${i}`).value),
                    commentType: "ESSAY",
                    order: i,
                });
            }
        }
        else {
            for (let i = 1; i <= 4; i++) {
                array.push({
                    comment: this.essayCommentForm.get(`comment${i}`).value,
                    minScore: Number(this.essayCommentForm.get(`minValue${i}`).value),
                    maxScore: Number(this.essayCommentForm.get(`maxValue${i}`).value),
                    commentType: "ESSAY",
                    order: i,
                });
            }
        }
        let min1 = this.essayCommentForm.controls.minValue1.value;
        let max1 = this.essayCommentForm.controls.maxValue1.value;
        if (min1 > max1) {
            this.wrong1 = true;
            this.isProgress = false;
        }
        let min2 = this.essayCommentForm.controls.minValue2.value;
        let max2 = this.essayCommentForm.controls.maxValue2.value;
        if (min2 > max2) {
            this.wrong2 = true;
            this.isProgress = false;
        }
        let min3 = this.essayCommentForm.controls.minValue3.value;
        let max3 = this.essayCommentForm.controls.maxValue3.value;
        if (min3 > max3) {
            this.wrong3 = true;
            this.isProgress = false;
        }
        let min4 = this.essayCommentForm.controls.minValue4.value;
        let max4 = this.essayCommentForm.controls.maxValue4.value;
        if (min4 > max4) {
            this.wrong4 = true;
            this.isProgress = false;
        }
        if (this.wrong1 || this.wrong2 || this.wrong3 || this.wrong4) {
            return;
        }
        let obj = { comments: array };
        this.subscription = this.dataService.onSaveComment(obj, this.questionType).subscribe(() => {
            this.goBack();
        });
    }
    getEssayComment(res) {
        if (res.length == 0) {
            this.isProgress = false;
        }
        else {
            if (res.length > 0) {
                for (let i = 0; i < 4; i++) {
                    this.essayCommentIds.push(res[i]._id);
                }
                this.essayCommentForm = this.formBuilder.group({
                    comment1: [res[0].comment, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    minValue1: [res[0].minScore, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    maxValue1: [res[0].maxScore, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    comment2: [res[1].comment, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    minValue2: [res[1].minScore, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    maxValue2: [res[1].maxScore, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    comment3: [res[2].comment, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    minValue3: [res[2].minScore, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    maxValue3: [res[2].maxScore, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    comment4: [res[3].comment, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    minValue4: [res[3].minScore, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    maxValue4: [res[3].maxScore, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                });
            }
        }
    }
    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
};
CommentComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__["SaveService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
];
CommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./comment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/comment/comment.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./comment.component.css */ "./src/app/modules/manage/manage-questions/comment/comment.component.css")).default]
    })
], CommentComponent);



/***/ }),

/***/ "./src/app/modules/manage/manage-questions/manage-questions-routing.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/manage/manage-questions/manage-questions-routing.ts ***!
  \*****************************************************************************/
/*! exports provided: ManageQuestionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageQuestionsRoutingModule", function() { return ManageQuestionsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_modules_manage_manage_questions_comment_comment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modules/manage/manage-questions/comment/comment.component */ "./src/app/modules/manage/manage-questions/comment/comment.component.ts");
/* harmony import */ var _app_modules_manage_manage_questions_questions_questions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/manage/manage-questions/questions/questions.component */ "./src/app/modules/manage/manage-questions/questions/questions.component.ts");
/* harmony import */ var _app_modules_manage_manage_questions_reslovers_comment_reslover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/modules/manage/manage-questions/reslovers/comment.reslover */ "./src/app/modules/manage/manage-questions/reslovers/comment.reslover.ts");
/* harmony import */ var _app_modules_manage_manage_questions_reslovers_essay_structure_reslover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/modules/manage/manage-questions/reslovers/essay-structure.reslover */ "./src/app/modules/manage/manage-questions/reslovers/essay-structure.reslover.ts");
/* harmony import */ var _app_modules_manage_manage_questions_structure_structure_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/modules/manage/manage-questions/structure/structure.component */ "./src/app/modules/manage/manage-questions/structure/structure.component.ts");








const routes = [
    {
        path: ":questionType",
        component: _app_modules_manage_manage_questions_questions_questions_component__WEBPACK_IMPORTED_MODULE_4__["QuestionsComponent"],
    },
    {
        path: ":questionType/essay-structure-coherence",
        component: _app_modules_manage_manage_questions_structure_structure_component__WEBPACK_IMPORTED_MODULE_7__["StructureComponent"],
        resolve: {
            data: _app_modules_manage_manage_questions_reslovers_essay_structure_reslover__WEBPACK_IMPORTED_MODULE_6__["EssayStructureResolver"]
        }
    },
    {
        path: ":questionType/comments",
        component: _app_modules_manage_manage_questions_comment_comment_component__WEBPACK_IMPORTED_MODULE_3__["CommentComponent"],
        resolve: {
            data: _app_modules_manage_manage_questions_reslovers_comment_reslover__WEBPACK_IMPORTED_MODULE_5__["CommentResolver"]
        },
        data: {
            name: 'essays/essay-comments'
        }
    },
    {
        path: ":questionType/create",
        loadChildren: "@app/modules/manage/manage-questions/question-create/question-create.module#QuestionCreateModule"
    },
];
let ManageQuestionsRoutingModule = class ManageQuestionsRoutingModule {
};
ManageQuestionsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [
            _app_modules_manage_manage_questions_reslovers_essay_structure_reslover__WEBPACK_IMPORTED_MODULE_6__["EssayStructureResolver"],
            _app_modules_manage_manage_questions_reslovers_comment_reslover__WEBPACK_IMPORTED_MODULE_5__["CommentResolver"]
        ]
    })
], ManageQuestionsRoutingModule);



/***/ }),

/***/ "./src/app/modules/manage/manage-questions/manage-questions.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/manage/manage-questions/manage-questions.module.ts ***!
  \****************************************************************************/
/*! exports provided: ManageQuestionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageQuestionsModule", function() { return ManageQuestionsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./questions/questions.component */ "./src/app/modules/manage/manage-questions/questions/questions.component.ts");
/* harmony import */ var _app_modules_manage_manage_questions_manage_questions_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/manage/manage-questions/manage-questions-routing */ "./src/app/modules/manage/manage-questions/manage-questions-routing.ts");
/* harmony import */ var _app_shared_basic_components_basic_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/basic-components/basic.module */ "./src/app/shared/basic-components/basic.module.ts");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comment/comment.component */ "./src/app/modules/manage/manage-questions/comment/comment.component.ts");
/* harmony import */ var _structure_structure_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./structure/structure.component */ "./src/app/modules/manage/manage-questions/structure/structure.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");









let ManageQuestionsModule = class ManageQuestionsModule {
};
ManageQuestionsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _questions_questions_component__WEBPACK_IMPORTED_MODULE_3__["QuestionsComponent"],
            _comment_comment_component__WEBPACK_IMPORTED_MODULE_6__["CommentComponent"],
            _structure_structure_component__WEBPACK_IMPORTED_MODULE_7__["StructureComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _app_modules_manage_manage_questions_manage_questions_routing__WEBPACK_IMPORTED_MODULE_4__["ManageQuestionsRoutingModule"],
            _app_shared_basic_components_basic_module__WEBPACK_IMPORTED_MODULE_5__["BasicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
        ],
        exports: [
            _app_modules_manage_manage_questions_manage_questions_routing__WEBPACK_IMPORTED_MODULE_4__["ManageQuestionsRoutingModule"]
        ]
    })
], ManageQuestionsModule);



/***/ }),

/***/ "./src/app/modules/manage/manage-questions/questions/questions.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/manage/manage-questions/questions/questions.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* table responsive */\n\n@media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {\n    /*\n                      Label the data\n                  You could also use a data-* attribute and content for this. That way \"bloats\" the HTML, this way means you need to keep HTML and CSS in sync. Lea Verou has a clever way to handle with text-shadow.\n                      */\n    td:nth-of-type(1):before {\n        content: \"Create Date\";\n    }\n    td:nth-of-type(2):before {\n        content: \"Name\";\n    }\n    td:nth-of-type(3):before {\n        content: \"Action\";\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYW5hZ2UvbWFuYWdlLXF1ZXN0aW9ucy9xdWVzdGlvbnMvcXVlc3Rpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUJBQXFCOztBQUVyQjtJQUNJOzs7dUJBR21CO0lBQ25CO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlL21hbmFnZS1xdWVzdGlvbnMvcXVlc3Rpb25zL3F1ZXN0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogdGFibGUgcmVzcG9uc2l2ZSAqL1xuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSwgKG1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweCkge1xuICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICAgTGFiZWwgdGhlIGRhdGFcbiAgICAgICAgICAgICAgICAgIFlvdSBjb3VsZCBhbHNvIHVzZSBhIGRhdGEtKiBhdHRyaWJ1dGUgYW5kIGNvbnRlbnQgZm9yIHRoaXMuIFRoYXQgd2F5IFwiYmxvYXRzXCIgdGhlIEhUTUwsIHRoaXMgd2F5IG1lYW5zIHlvdSBuZWVkIHRvIGtlZXAgSFRNTCBhbmQgQ1NTIGluIHN5bmMuIExlYSBWZXJvdSBoYXMgYSBjbGV2ZXIgd2F5IHRvIGhhbmRsZSB3aXRoIHRleHQtc2hhZG93LlxuICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgdGQ6bnRoLW9mLXR5cGUoMSk6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJDcmVhdGUgRGF0ZVwiO1xuICAgIH1cbiAgICB0ZDpudGgtb2YtdHlwZSgyKTpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIk5hbWVcIjtcbiAgICB9XG4gICAgdGQ6bnRoLW9mLXR5cGUoMyk6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJBY3Rpb25cIjtcbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/modules/manage/manage-questions/questions/questions.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/manage/manage-questions/questions/questions.component.ts ***!
  \**********************************************************************************/
/*! exports provided: QuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsComponent", function() { return QuestionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/http/serviceIndex */ "./src/app/core/http/serviceIndex.ts");
/* harmony import */ var _app_shared_basic_components_components_header_route_menu_light_header_route_menu_light_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/basic-components/components/header-route-menu-light/header-route-menu-light.component */ "./src/app/shared/basic-components/components/header-route-menu-light/header-route-menu-light.component.ts");





let QuestionsComponent = class QuestionsComponent {
    constructor(_activeRoute, _tableService, _cservice, _router) {
        this._activeRoute = _activeRoute;
        this._tableService = _tableService;
        this._cservice = _cservice;
        this._router = _router;
        this.currentModule = {};
        this.tableFilter = {};
        this.isAsc = true;
        this.selectedId = [];
        this.isPractise = false;
        // this._router.routeReuseStrategy.shouldReuseRoute = () => true;
    }
    ngOnInit() {
        this.currentModule = this._activeRoute.snapshot.params;
        this.questionName = this._cservice.getquestionName(this.currentModule.questionType);
        this._activeRoute.queryParams.subscribe((params) => {
            this.isPractise = params.isPractise ? Boolean(params.isPractise) : false;
            if (params.page) {
                this.tableFilter.page = params.page;
                this.tableFilter.limit = params.limit;
            }
            else if (params.search) {
                this.tableFilter.search = params.search;
            }
            else {
                this.tableFilter.page = 1;
                this.tableFilter.limit = 10;
                this.tableFilter.sortColumn = 'createdDate';
                this.tableFilter.sortDirection = 'asc';
            }
            this.getQuestionList();
        });
    }
    getQuestionList() {
        this.isLoading = true;
        this.subscription = this._tableService.getManageQuestionList(this.tableFilter, this.currentModule)
            .subscribe((res) => {
            this.questionList = res.questions;
            this.tableFilter = res.filter;
            this.isLoading = false;
            if (this.currentModule.moduleType == 'READING')
                for (const obj of this.questionList) {
                    if (obj.isPractise)
                        this.selectedId.push(obj.questionId);
                }
        });
    }
    fitter(sortColumn) {
        this.isAsc = !this.isAsc ? this.isAsc = true : this.isAsc = false;
        this.tableFilter.sortDirection = this.isAsc ? 'asc' : 'desc';
        this.tableFilter.sortColumn = sortColumn;
        this.getQuestionList();
    }
    deleteList(data) {
        this.subscription = this._tableService.onDeleteQuestion(data.questionId, this.currentModule.moduleType.toLowerCase(), data.questionType)
            .subscribe((res) => {
            this.getQuestionList();
        });
    }
    onPractise(emit) {
        this.isPractise = emit;
        this._router.navigate([], {
            queryParams: { isPractise: emit },
            queryParamsHandling: 'merge',
        });
        if (this.selectedId.length != 0 && this.isPractise == false) {
            let tempObj = {
                "idList": this.selectedId
            };
            this.subscription = this._tableService.onReadingPractise(this.currentModule.questionType, tempObj)
                .subscribe(() => {
                // this.getQuestionList();
                // this._router.navigate([],
                //   {
                //     queryParams: { isPractise: false },
                //     queryParamsHandling: 'merge',
                //   });
                this.isPractise = false;
                // this.header.setPractise=false;
            });
        }
    }
    onSelectedQuestion(id) {
        if (this.isPractise) {
            let index = this.selectedId.indexOf(id);
            if (this.selectedId.includes(id)) {
                this.selectedId.splice(index, 1);
            }
            else {
                this.selectedId.push(id);
            }
        }
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        if (this.subscription)
            this.subscription.unsubscribe();
    }
};
QuestionsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_3__["TableListService"] },
    { type: _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_app_shared_basic_components_components_header_route_menu_light_header_route_menu_light_component__WEBPACK_IMPORTED_MODULE_4__["HeaderRouteMenuLightComponent"], { static: false })
], QuestionsComponent.prototype, "header", void 0);
QuestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-questions',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./questions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/questions/questions.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./questions.component.css */ "./src/app/modules/manage/manage-questions/questions/questions.component.css")).default]
    })
], QuestionsComponent);



/***/ }),

/***/ "./src/app/modules/manage/manage-questions/reslovers/comment.reslover.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/manage/manage-questions/reslovers/comment.reslover.ts ***!
  \*******************************************************************************/
/*! exports provided: CommentResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentResolver", function() { return CommentResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/http/detail.service */ "./src/app/core/http/detail.service.ts");



let CommentResolver = class CommentResolver {
    constructor(question) {
        this.question = question;
    }
    resolve(route) {
        let url = `writing/${route.params['questionType']}/comments`;
        return this.question.getDetail(url);
    }
};
CommentResolver.ctorParameters = () => [
    { type: _app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_2__["DetailService"] }
];
CommentResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], CommentResolver);



/***/ }),

/***/ "./src/app/modules/manage/manage-questions/reslovers/essay-structure.reslover.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/manage/manage-questions/reslovers/essay-structure.reslover.ts ***!
  \***************************************************************************************/
/*! exports provided: EssayStructureResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EssayStructureResolver", function() { return EssayStructureResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/http/detail.service */ "./src/app/core/http/detail.service.ts");



let EssayStructureResolver = class EssayStructureResolver {
    constructor(question) {
        this.question = question;
    }
    resolve(route) {
        let url = 'essays/essay-structure-coherence';
        return this.question.getDetail(url);
    }
};
EssayStructureResolver.ctorParameters = () => [
    { type: _app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_2__["DetailService"] }
];
EssayStructureResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], EssayStructureResolver);



/***/ }),

/***/ "./src/app/modules/manage/manage-questions/structure/structure.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/manage/manage-questions/structure/structure.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlL21hbmFnZS1xdWVzdGlvbnMvc3RydWN0dXJlL3N0cnVjdHVyZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/manage/manage-questions/structure/structure.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/manage/manage-questions/structure/structure.component.ts ***!
  \**********************************************************************************/
/*! exports provided: StructureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StructureComponent", function() { return StructureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_core_http_save_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/http/save.service */ "./src/app/core/http/save.service.ts");
/* harmony import */ var _app_shared_models_WritingModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/models/WritingModel */ "./src/app/shared/models/WritingModel.ts");






let StructureComponent = class StructureComponent {
    constructor(formBuilder, _activeRoute, _saveService) {
        this.formBuilder = formBuilder;
        this._activeRoute = _activeRoute;
        this._saveService = _saveService;
        this.essayForm = this.formBuilder.group({
            answer: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            answer_number: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Coherence: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Coherence_number: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.essayStructureID = "";
        this.isProgress = false;
    }
    ngOnInit() {
        this.isProgress = true;
        this.getEssayStructure(this._activeRoute.snapshot.data['data']);
    }
    getEssayStructure(res) {
        this.essayStructureID = res._id;
        this.essayForm = this.formBuilder.group({
            answer: [
                res.answer.structureKeywords,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ],
            answer_number: [
                res.answer.maxKeyword,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ],
            Coherence: [res.coherence.structureKeywords, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Coherence_number: [res.coherence.maxKeyword, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    onSaveOrUpdate() {
        this.isProgress = true;
        this.essay_structure = new _app_shared_models_WritingModel__WEBPACK_IMPORTED_MODULE_5__["Essay_Structure"]();
        // this.essay_structure.i = EssaySubStructure.create(string , number)
        this.essay_structure._id = this.essayStructureID;
        // For Introduction..
        this.essay_structure.answer = _app_shared_models_WritingModel__WEBPACK_IMPORTED_MODULE_5__["EssaySubStructure"].create(this.essayForm.get("answer").value
            ? this.essayForm.get("answer").value
            : "", this.essayForm.get("answer_number").value
            ? Number(this.essayForm.get("answer_number").value)
            : 0);
        this.subscription = this._saveService
            .onSaveStructure(this.essay_structure)
            .subscribe(() => {
            this.goBack();
        });
    }
    goBack() {
        this._saveService.goBackPrev();
    }
    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
};
StructureComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _app_core_http_save_service__WEBPACK_IMPORTED_MODULE_4__["SaveService"] }
];
StructureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-structure',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./structure.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/structure/structure.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./structure.component.css */ "./src/app/modules/manage/manage-questions/structure/structure.component.css")).default]
    })
], StructureComponent);



/***/ }),

/***/ "./src/app/shared/models/WritingModel.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/models/WritingModel.ts ***!
  \***********************************************/
/*! exports provided: EssayDetail, Essay_Structure, EssayEvaluation, EssaySubStructure, EssaySubEvaluate, EssayWriting, EssaySubWriting, SummaryEvaluation, SummaryWriting, SummaryDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EssayDetail", function() { return EssayDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Essay_Structure", function() { return Essay_Structure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EssayEvaluation", function() { return EssayEvaluation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EssaySubStructure", function() { return EssaySubStructure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EssaySubEvaluate", function() { return EssaySubEvaluate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EssayWriting", function() { return EssayWriting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EssaySubWriting", function() { return EssaySubWriting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryEvaluation", function() { return SummaryEvaluation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryWriting", function() { return SummaryWriting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryDetail", function() { return SummaryDetail; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class EssayDetail {
}
class Essay_Structure {
}
class EssayEvaluation {
}
class EssaySubStructure {
    constructor(sk, mk) {
        this.structureKeywords = sk;
        this.maxKeyword = mk;
    }
    static create(sk, mk) {
        return new EssaySubStructure(sk, mk);
    }
}
class EssaySubEvaluate {
    constructor(sk, mk) {
        this.contents = sk;
        this.wordCount = mk;
    }
    static create(sk, mk) {
        return new EssaySubEvaluate(sk, mk);
    }
}
class EssayWriting {
}
class EssaySubWriting {
    constructor(contentKeywords, maxWordLimit, maxKeyword) {
        this.contentKeywords = contentKeywords;
        this.maxKeyword = maxKeyword;
        this.maxWordLimit = maxWordLimit;
    }
    static create(ck, max, mk) {
        return new EssaySubWriting(ck, max, mk);
    }
}
class SummaryEvaluation {
}
class SummaryWriting {
}
class SummaryDetail {
}


/***/ })

}]);
//# sourceMappingURL=app-modules-manage-manage-questions-manage-questions-module-es2015.2894028d9d11c3a90762.js.map