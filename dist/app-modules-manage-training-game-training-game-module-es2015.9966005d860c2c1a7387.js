(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-manage-training-game-training-game-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/training-game/home/home.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/training-game/home/home.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header-route-menu [currentPageName]=\"'Manage'\"></header-route-menu>\n\n\n<div class=\"container-fluid mt--6\">\n    <header-route-menu-light [currentPageName]=\"'Training Game'\" [moduleName]=\"'Manage'\"></header-route-menu-light>\n    <div class=\"row\">\n            <div class=\"col-md-6 col-xl-3\">\n                <div class=\"card card-training\" style=\"flex-direction: column;\" (click)=\"goToVoacb('vocab')\">\n                    <div class=\"d-flex justify-content-between\">\n                        <div class=\"d-flex flex-column justify-content-center\">\n                         \n                            <p class=\"training-title\">\n                                Vocabulary\n                            </p>\n                        </div>\n                        <div class=\"studyplan-img\">\n                            <ng-lottie height=\"100px\" [styles]=\"styles\" [options]=\"option2\"></ng-lottie>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6 col-xl-3\">\n                <div class=\"card card-training training-grammar\" style=\"flex-direction: column;\">\n                    <div class=\"d-flex justify-content-between\">\n                        <div class=\"d-flex flex-column justify-content-center\">\n                        \n                            <p class=\"training-title\">\n                                Grammar\n                            </p>\n                        </div>\n                        <div class=\"studyplan-img\">\n                            <ng-lottie height=\"100px\" [styles]=\"styles\" [options]=\"option3\"></ng-lottie>\n                        </div>\n                    </div>\n                </div>\n            </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/training-game/training-game-board/training-game-board.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/training-game/training-game-board/training-game-board.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header-route-menu [currentPageName]=\"'Manage'\"></header-route-menu>\n\n<div class=\"container-fluid mt--6\">\n    <header-route-menu-light [currentPageName]=\"'Training Game'\" [moduleName]=\"'Manage'\"></header-route-menu-light>\n\n    <div *ngIf=\"moduleList.length==0;else showData\" class=\"mt-4\">\n        <table-loading [tType]=\"'c4-6'\"></table-loading>\n    </div>\n    <ng-template #showData>\n        <div class=\"row\">\n            <div class=\"col-md-6 col-xl-3\" *ngFor=\"let module of moduleList\">\n                <div class=\"card\" [routerLink]=\"[module.questionType]\">\n                    <div class=\"d-flex align-items-center\">\n                        <div class=\"studyplan-img\">\n                            <ng-lottie height=\"80px\" [styles]=\"styles\" [options]=\"options\"></ng-lottie>\n                        </div>\n\n                        <p class=\"module-name\">{{module.questionName}}</p>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </ng-template>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/training-game/vocab-create/vocab-create.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/training-game/vocab-create/vocab-create.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header-route-menu [currentPageName]=\"'Manage'\"></header-route-menu>\n<div class=\"container-fluid mt--6\">\n    <header-route-menu-light [currentPageName]=\"'Vocabulary'\" [moduleName]=\"moduleName\"></header-route-menu-light>\n\n    <form [formGroup]=\"createForm\">\n        <div class=\"container create-form\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <label-text>Name</label-text>\n                    <div class=\"d-flex\">\n                        <input type=\"text\" formControlName=\"name\" class=\"form-control\"\n                            [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" placeholder=\"Write Name\" />\n                    </div>\n                </div>\n                <ng-container formArrayName=\"questions\">\n                    <div class=\"col-md-12 mt-3\">\n                        <label-text>Question List</label-text>\n                        <warning-text>\n                            <ng-container *ngIf=\"qcode=='V001'\">\n                                {{warningText[0]}}\n                            </ng-container>\n                            <ng-container *ngIf=\"qcode=='V002'\">\n                                {{warningText[1]}}\n                            </ng-container>\n                            <ng-container *ngIf=\"qcode=='V003'\">\n                                {{warningText[2]}}\n                            </ng-container>\n                            <ng-container *ngIf=\"qcode=='V004'\">\n                                {{warningText[3]}}\n                            </ng-container>\n                            <ng-container *ngIf=\"qcode=='V005'\">\n                                {{warningText[4]}}\n                            </ng-container>\n                            <ng-container *ngIf=\"qcode=='V006'\">\n                                {{warningText[5]}}\n                            </ng-container>\n                        </warning-text>\n\n                        <ol>\n                            <ng-container *ngFor=\"let questionForm of questions.controls; let i = index\">\n                                <li [formGroup]=\"questionForm\" class=\"mb-3\">\n                                    <div class=\"d-flex align-items-center\">\n                                        <textarea formControlName=\"question\" class=\"question-textarea\"></textarea>\n                                        <button class=\"btn btn-delete\" (click)=\"deleteQuestion(i)\"\n                                            [disabled]=\"questions.controls.length==1\">\n                                            <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n                                        </button>\n                                    </div>\n                                </li>\n                            </ng-container>\n                        </ol>\n                        <button class=\"btn btn-add-question\" (click)=\"addNewQuest()\">Add new question</button>\n                    </div>\n                </ng-container>\n            </div>\n            <div class=\"footer-button-block\">\n                <cancel-btn>Cancel</cancel-btn>\n                <submit-btn (onClick)=\"onCreate()\">Save</submit-btn>\n            </div>\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/training-game/vocb-list/vocb-list.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/training-game/vocb-list/vocb-list.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header-route-menu [currentPageName]=\"'Manage'\"></header-route-menu>\n<div class=\"container-fluid mt--6\">\n    <header-route-menu-light [currentPageName]=\"'Question Bank'\" [moduleName]=\"moduleName\"\n        [createRoute]=\"'alchemist-academy/manage/training-game/game-board/vocab/create/'+qcode\"  [prevUrl]=\"'../'\"></header-route-menu-light>\n\n\n    <div class=\"row\">\n        <div class=\"col-md-6 p-0\">\n            <show-entries></show-entries>\n        </div>\n        <div class=\"col-md-6 p-0\">\n            <search-box [hint]=\"'Search'\"></search-box>\n        </div>\n    </div>\n    <ng-container *ngIf=\"isLoading; else showData\">\n        <div>\n            <table-loading [tType]=\"'c3-4'\"></table-loading>\n        </div>\n\n    </ng-container>\n    <ng-template #showData>\n        <table role=\"table\" class=\"table-responsive\">\n            <thead role=\"rowgroup\">\n                <tr role=\"row\">\n                    <th role=\"columnheader\" style=\"width: 30%;\">Create Date</th>\n                    <th role=\"columnheader\" class=\"fitter-able\" (click)=\"fitter('name')\"\n                        [class.fitter-active]='tableFilter.sortColumn==\"name\"'>Name</th>\n                    <th role=\"columnheader\" style=\"width: 12%;\">Action</th>\n                </tr>\n            </thead>\n            <tbody role=\"rowgroup\">\n                <ng-container *ngFor=\"let data of vocabs\">\n                    <tr role=\"row\">\n                        <td role=\"cell\"> {{ data.createdDate | defaultDate }}</td>\n                        <td role=\"cell\">{{data.name}}</td>\n                        <td>\n                            <action-btn-gp [btnName]=\"'edit'\" [editId]=\"data.questionId\"></action-btn-gp>\n                            <action-btn-gp [btnName]=\"'delete'\" [data]=\"data\" (onSubmit)=\"deleteVocab($event)\">\n                            </action-btn-gp>\n                        </td>\n                </ng-container>\n\n                <tr *ngIf=\"tableFilter.totalCount == 0\" role=\"row\">\n                    <td colspan=\"4\" class=\"text-center\">\n                        No Data Exit\n                    </td>\n                </tr>\n            </tbody>\n\n        </table>\n\n        <div class=\"d-flex justify-content-center my-2\">\n            <pagination [totalCount]='tableFilter.totalCount'>\n            </pagination>\n        </div>\n\n    </ng-template>\n</div>");

/***/ }),

/***/ "./src/app/modules/manage/training-game/home/home.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/modules/manage/training-game/home/home.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    box-shadow: var(--card-boxshadow);\n}\n\n.card-training {\n    border: solid;\n    background-color: #dcfaff;\n    margin-bottom: 30px;\n}\n\n.training-grammar{\n    border: solid;\n    background-color: #fff1f4;\n}\n\np.training-title {\n    font-size: 20px;\n    font-weight: 500;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYW5hZ2UvdHJhaW5pbmctZ2FtZS9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDhCQUFtQjtJQUFuQiw2QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHlCQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBSUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0FBQzdCOztBQUdBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlL3RyYWluaW5nLWdhbWUvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLWJveHNoYWRvdyk7XG59XG5cbi5jYXJkLXRyYWluaW5nIHtcbiAgICBib3JkZXI6IHNvbGlkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkY2ZhZmY7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuXG5cbi50cmFpbmluZy1ncmFtbWFye1xuICAgIGJvcmRlcjogc29saWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjFmNDtcbn1cblxuXG5wLnRyYWluaW5nLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuIl19 */");

/***/ }),

/***/ "./src/app/modules/manage/training-game/home/home.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/manage/training-game/home/home.component.ts ***!
  \*********************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let HomeComponent = class HomeComponent {
    constructor(router) {
        this.router = router;
        this.option2 = {
            path: 'assets/icon/lottie/questions-and-answer.json',
        };
        this.option3 = {
            path: 'assets/icon/lottie/change-answer.json',
        };
    }
    ngOnInit() {
    }
    goToVoacb(type) {
        this.router.navigateByUrl('alchemist-academy/manage/training-game/game-board/' + type);
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/training-game/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/modules/manage/training-game/home/home.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/modules/manage/training-game/training-game-board/training-game-board.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/manage/training-game/training-game-board/training-game-board.component.css ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".module-name{\n    font-size: 18px;\n    font-weight: 500;\n    margin-bottom: 0;\n    margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYW5hZ2UvdHJhaW5pbmctZ2FtZS90cmFpbmluZy1nYW1lLWJvYXJkL3RyYWluaW5nLWdhbWUtYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlL3RyYWluaW5nLWdhbWUvdHJhaW5pbmctZ2FtZS1ib2FyZC90cmFpbmluZy1nYW1lLWJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kdWxlLW5hbWV7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/manage/training-game/training-game-board/training-game-board.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/manage/training-game/training-game-board/training-game-board.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: TrainingGameBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingGameBoardComponent", function() { return TrainingGameBoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/http/detail.service */ "./src/app/core/http/detail.service.ts");




let TrainingGameBoardComponent = class TrainingGameBoardComponent {
    constructor(_activeRoute, _service) {
        this._activeRoute = _activeRoute;
        this._service = _service;
        this.moduleList = [];
        this.options = {
            path: 'assets/icon/lottie/questions-pen.json',
        };
    }
    ngOnInit() {
        this.checkType();
    }
    checkType() {
        let type = this._activeRoute.snapshot.paramMap.get("type");
        if (type == 'vocab') {
            this._service.getCheckProgressVocab().subscribe((res) => {
                this.moduleList = res.questionBank;
            });
        }
    }
};
TrainingGameBoardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_3__["DetailService"] }
];
TrainingGameBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-training-game-board',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./training-game-board.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/training-game/training-game-board/training-game-board.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./training-game-board.component.css */ "./src/app/modules/manage/training-game/training-game-board/training-game-board.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_3__["DetailService"]])
], TrainingGameBoardComponent);



/***/ }),

/***/ "./src/app/modules/manage/training-game/training-game.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/manage/training-game/training-game.module.ts ***!
  \**********************************************************************/
/*! exports provided: playerFactory, TrainingGameModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playerFactory", function() { return playerFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingGameModule", function() { return TrainingGameModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_shared_basic_components_basic_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/basic-components/basic.module */ "./src/app/shared/basic-components/basic.module.ts");
/* harmony import */ var ngx_lottie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-lottie */ "./node_modules/ngx-lottie/fesm2015/ngx-lottie.js");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lottie-web */ "./node_modules/lottie-web/build/player/lottie.js");
/* harmony import */ var lottie_web__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/modules/manage/training-game/home/home.component.ts");
/* harmony import */ var _training_game_board_training_game_board_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./training-game-board/training-game-board.component */ "./src/app/modules/manage/training-game/training-game-board/training-game-board.component.ts");
/* harmony import */ var _vocb_list_vocb_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vocb-list/vocb-list.component */ "./src/app/modules/manage/training-game/vocb-list/vocb-list.component.ts");
/* harmony import */ var _vocab_create_vocab_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vocab-create/vocab-create.component */ "./src/app/modules/manage/training-game/vocab-create/vocab-create.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _vocab_detail_reslover__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./vocab-detail.reslover */ "./src/app/modules/manage/training-game/vocab-detail.reslover.ts");













const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
    },
    {
        path: 'game-board/:type',
        component: _training_game_board_training_game_board_component__WEBPACK_IMPORTED_MODULE_8__["TrainingGameBoardComponent"],
    },
    {
        path: 'game-board/vocab/:qcode',
        component: _vocb_list_vocb_list_component__WEBPACK_IMPORTED_MODULE_9__["VocbListComponent"],
    },
    {
        path: 'game-board/vocab/:qcode/create',
        component: _vocab_create_vocab_create_component__WEBPACK_IMPORTED_MODULE_10__["VocabCreateComponent"],
    },
    {
        path: 'game-board/vocab/:qcode/create/:questionId',
        component: _vocab_create_vocab_create_component__WEBPACK_IMPORTED_MODULE_10__["VocabCreateComponent"],
        resolve: {
            data: _vocab_detail_reslover__WEBPACK_IMPORTED_MODULE_12__["VocabDetailResolver"]
        }
    }
];
function playerFactory() {
    return lottie_web__WEBPACK_IMPORTED_MODULE_6___default.a;
}
let TrainingGameModule = class TrainingGameModule {
};
TrainingGameModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _training_game_board_training_game_board_component__WEBPACK_IMPORTED_MODULE_8__["TrainingGameBoardComponent"], _vocb_list_vocb_list_component__WEBPACK_IMPORTED_MODULE_9__["VocbListComponent"], _vocab_create_vocab_create_component__WEBPACK_IMPORTED_MODULE_10__["VocabCreateComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _app_shared_basic_components_basic_module__WEBPACK_IMPORTED_MODULE_4__["BasicModule"],
            ngx_lottie__WEBPACK_IMPORTED_MODULE_5__["LottieModule"].forRoot({ player: playerFactory }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]
        ],
        providers: [
            _vocab_detail_reslover__WEBPACK_IMPORTED_MODULE_12__["VocabDetailResolver"]
        ]
    })
], TrainingGameModule);



/***/ }),

/***/ "./src/app/modules/manage/training-game/vocab-create/vocab-create.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/manage/training-game/vocab-create/vocab-create.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("textarea.question-textarea {\n    width: 100%;\n    border: none;\n    color: var(--text-dark-color);\n    font-weight: 500;\n    padding: 10px;\n}\n\ntextarea.question-textarea:focus {\n    box-shadow: var(--textbox-boxshadow) !important;\n    -webkit-transition: 0.3s all ease;\n    transition: 0.3s all ease;\n    border-color: #ffffff;\n}\n\n.question-textarea:focus-visible {\n    outline: 0px !important;\n}\n\n.btn-add-question{\n    background-color: var(--primary-color);\n    box-shadow: var(--button-boxshadow);\n    color: white;\n    margin-top: 10px;\n}\n\n.btn-delete{\n    box-shadow: 0px 5px 6px #fc766b;\n    background-color: #ff1a07;\n    color: white;\n    height: 40px;\n    margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYW5hZ2UvdHJhaW5pbmctZ2FtZS92b2NhYi1jcmVhdGUvdm9jYWItY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLCtDQUErQztJQUMvQyxpQ0FBeUI7SUFBekIseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21hbmFnZS90cmFpbmluZy1nYW1lL3ZvY2FiLWNyZWF0ZS92b2NhYi1jcmVhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRleHRhcmVhLnF1ZXN0aW9uLXRleHRhcmVhIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLXRleHQtZGFyay1jb2xvcik7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG50ZXh0YXJlYS5xdWVzdGlvbi10ZXh0YXJlYTpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tdGV4dGJveC1ib3hzaGFkb3cpICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZTtcbiAgICBib3JkZXItY29sb3I6ICNmZmZmZmY7XG59XG5cbi5xdWVzdGlvbi10ZXh0YXJlYTpmb2N1cy12aXNpYmxlIHtcbiAgICBvdXRsaW5lOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmJ0bi1hZGQtcXVlc3Rpb257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tYnV0dG9uLWJveHNoYWRvdyk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5idG4tZGVsZXRle1xuICAgIGJveC1zaGFkb3c6IDBweCA1cHggNnB4ICNmYzc2NmI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMWEwNztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/manage/training-game/vocab-create/vocab-create.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/manage/training-game/vocab-create/vocab-create.component.ts ***!
  \*************************************************************************************/
/*! exports provided: VocabCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VocabCreateComponent", function() { return VocabCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_core_http_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/http/common.service */ "./src/app/core/http/common.service.ts");
/* harmony import */ var _app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core/http/detail.service */ "./src/app/core/http/detail.service.ts");
/* harmony import */ var _app_core_http_save_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/core/http/save.service */ "./src/app/core/http/save.service.ts");







let VocabCreateComponent = class VocabCreateComponent {
    constructor(_activeRoute, _cservice, formBuilder, saveService, detailService) {
        this._activeRoute = _activeRoute;
        this._cservice = _cservice;
        this.formBuilder = formBuilder;
        this.saveService = saveService;
        this.detailService = detailService;
        this.warningText = [
            '(GIVE ANSWER IN {} EX; "THIS IS A {ANSWER}.IT HAS .. ")',
            '(GIVE ANSWER IN {} FIRST ANSWER AND SEPARETED BY “;”  EX; "THIS IS A {ANSWER;ANSWER}.IT HAS .. ")',
            '(GIVE FINISHED THE SENTENCE {}  EX; "I like your essay, but I want you to illustrate {FINISHED THE SENTENCE} ")',
            '(GIVE QUESTION AND ANSWER{} A THE SENTENCE END EX; "For many years, $4 was {equal} to £1.{equivalent (adj)}")',
            '(SEPARETED BY “;” AND GIVE ANSWER {} EX: ANSWER;In this first....{assess;judge;measure}..... writing.',
            '(GIVE ANSWER IN {} FIRST ANSWER AND SEPARETED BY “;”  EX; "THIS IS A {ANSWER;ANSWER}.IT HAS .. ',
        ];
        this.submitted = false;
        this.createForm = this.formBuilder.group({
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            questions: this.formBuilder.array([]),
        });
    }
    ngOnInit() {
        this.qcode = this._activeRoute.snapshot.paramMap.get("qcode");
        this.questionId = this._activeRoute.snapshot.paramMap.get("questionId");
        this.moduleName = this._cservice.getVocabName(this.qcode);
        let data = this._activeRoute.snapshot.data['data'];
        console.log(data);
        if (data)
            this.getDetail(data);
        else
            this.addNewQuest();
    }
    getDetail(data) {
        this.createForm = this.formBuilder.group({
            name: [data.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            questions: this.formBuilder.array([]),
        });
        this.objectArray(data.questions);
    }
    onCreate() {
        this.submitted = true;
        if (this.createForm.invalid) {
            return;
        }
        else {
            let finalData = {
                name: this.createForm.value.name,
                questions: this.stringArray(this.createForm.value.questions)
            };
            this.saveService.onSaveVocabQuestion(finalData, this.qcode, this.questionId)
                .subscribe((res) => {
                this.saveService.goBackPrev();
            });
        }
    }
    stringArray(questions) {
        console.log(questions);
        let arr = [];
        questions.forEach((element) => {
            arr.push(element.question);
        });
        return arr;
    }
    objectArray(questions) {
        console.log(questions);
        let arr = [];
        questions.forEach((element) => {
            const lessonForm = this.formBuilder.group({
                question: [element, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            });
            this.questions.push(lessonForm);
        });
    }
    get questions() {
        return this.createForm.controls["questions"];
    }
    addNewQuest() {
        const lessonForm = this.formBuilder.group({
            question: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.questions.push(lessonForm);
    }
    get f() {
        return this.createForm.controls;
    }
    deleteQuestion(index) {
        this.questions.removeAt(index);
    }
};
VocabCreateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _app_core_http_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _app_core_http_save_service__WEBPACK_IMPORTED_MODULE_6__["SaveService"] },
    { type: _app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_5__["DetailService"] }
];
VocabCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vocab-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vocab-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/training-game/vocab-create/vocab-create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vocab-create.component.css */ "./src/app/modules/manage/training-game/vocab-create/vocab-create.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _app_core_http_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _app_core_http_save_service__WEBPACK_IMPORTED_MODULE_6__["SaveService"],
        _app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_5__["DetailService"]])
], VocabCreateComponent);



/***/ }),

/***/ "./src/app/modules/manage/training-game/vocab-detail.reslover.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/manage/training-game/vocab-detail.reslover.ts ***!
  \***********************************************************************/
/*! exports provided: VocabDetailResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VocabDetailResolver", function() { return VocabDetailResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/http/detail.service */ "./src/app/core/http/detail.service.ts");



let VocabDetailResolver = class VocabDetailResolver {
    constructor(question) {
        this.question = question;
    }
    resolve(route) {
        return this.question.getDetailVocab(route.params['qcode'], route.params['questionId']);
    }
};
VocabDetailResolver.ctorParameters = () => [
    { type: _app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_2__["DetailService"] }
];
VocabDetailResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_2__["DetailService"]])
], VocabDetailResolver);



/***/ }),

/***/ "./src/app/modules/manage/training-game/vocb-list/vocb-list.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/modules/manage/training-game/vocb-list/vocb-list.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* table responsive */\n\n@media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {\n    /*\n                      Label the data\n                  You could also use a data-* attribute and content for this. That way \"bloats\" the HTML, this way means you need to keep HTML and CSS in sync. Lea Verou has a clever way to handle with text-shadow.\n                      */\n    td:nth-of-type(1):before {\n        content: \"Create Date\";\n    }\n    td:nth-of-type(2):before {\n        content: \"Name\";\n    }\n    td:nth-of-type(3):before {\n        content: \"Action\";\n    }\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYW5hZ2UvdHJhaW5pbmctZ2FtZS92b2NiLWxpc3Qvdm9jYi1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUJBQXFCOztBQUVyQjtJQUNJOzs7dUJBR21CO0lBQ25CO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21hbmFnZS90cmFpbmluZy1nYW1lL3ZvY2ItbGlzdC92b2NiLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRhYmxlIHJlc3BvbnNpdmUgKi9cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCksIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAvKlxuICAgICAgICAgICAgICAgICAgICAgIExhYmVsIHRoZSBkYXRhXG4gICAgICAgICAgICAgICAgICBZb3UgY291bGQgYWxzbyB1c2UgYSBkYXRhLSogYXR0cmlidXRlIGFuZCBjb250ZW50IGZvciB0aGlzLiBUaGF0IHdheSBcImJsb2F0c1wiIHRoZSBIVE1MLCB0aGlzIHdheSBtZWFucyB5b3UgbmVlZCB0byBrZWVwIEhUTUwgYW5kIENTUyBpbiBzeW5jLiBMZWEgVmVyb3UgaGFzIGEgY2xldmVyIHdheSB0byBoYW5kbGUgd2l0aCB0ZXh0LXNoYWRvdy5cbiAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgIHRkOm50aC1vZi10eXBlKDEpOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiQ3JlYXRlIERhdGVcIjtcbiAgICB9XG4gICAgdGQ6bnRoLW9mLXR5cGUoMik6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJOYW1lXCI7XG4gICAgfVxuICAgIHRkOm50aC1vZi10eXBlKDMpOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiQWN0aW9uXCI7XG4gICAgfVxuXG59XG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/modules/manage/training-game/vocb-list/vocb-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/manage/training-game/vocb-list/vocb-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: VocbListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VocbListComponent", function() { return VocbListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/http/serviceIndex */ "./src/app/core/http/serviceIndex.ts");




let VocbListComponent = class VocbListComponent {
    constructor(_activeRoute, _tableService, _cservice) {
        this._activeRoute = _activeRoute;
        this._tableService = _tableService;
        this._cservice = _cservice;
        this.tableFilter = {};
        this.isAsc = false;
        this.isLoading = false;
    }
    ngOnInit() {
        this.qcode = this._activeRoute.snapshot.paramMap.get("qcode");
        this.moduleName = this._cservice.getVocabName(this.qcode);
        this._activeRoute.queryParams.subscribe((params) => {
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
                this.tableFilter.sortDirection = 'desc';
                this.tableFilter.sortColumn = 'name';
            }
            this.getVocabList();
        });
    }
    getVocabList() {
        this.isLoading = true;
        this.subscription = this._tableService.getVocabList(this.tableFilter, this.qcode)
            .subscribe((res) => {
            this.vocabs = res.questions;
            this.tableFilter = res.filter;
            this.isLoading = false;
        });
    }
    deleteVocab(data) {
        this._tableService.onDeleteVocab(data.questionId, this.qcode)
            .subscribe((res) => {
            this.getVocabList();
        });
    }
    fitter(sortColumn) {
        this.isAsc = !this.isAsc ? this.isAsc = true : this.isAsc = false;
        this.tableFilter.sortDirection = this.isAsc ? 'asc' : 'desc';
        this.tableFilter.sortColumn = sortColumn;
        this.getVocabList();
    }
};
VocbListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_3__["TableListService"] },
    { type: _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
];
VocbListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vocb-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vocb-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/training-game/vocb-list/vocb-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vocb-list.component.css */ "./src/app/modules/manage/training-game/vocb-list/vocb-list.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_3__["TableListService"], _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
], VocbListComponent);



/***/ })

}]);
//# sourceMappingURL=app-modules-manage-training-game-training-game-module-es2015.9966005d860c2c1a7387.js.map