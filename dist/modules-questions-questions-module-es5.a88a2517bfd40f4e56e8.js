(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-questions-questions-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/questions/question-board/question-board.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/questions/question-board/question-board.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesQuestionsQuestionBoardQuestionBoardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"row\">\n    <div class=\"col-md-6 col-xl-4 col-xl-3\" *ngFor=\"let qb of questionbank.questionBank\">\n        <question-card [questionBank]=\"qb\" (click)=\"goToTablelist(qb)\"></question-card>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/questions/question-list/question-list.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/questions/question-list/question-list.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesQuestionsQuestionListQuestionListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ",<div class=\"row\">\n    <div class=\"col-md-6 p-0\">\n        <show-entries></show-entries>\n    </div>\n    <div class=\"col-md-6 p-0\">\n        <search-box [hint]=\"'Search'\"></search-box>\n    </div>\n</div>\n<ng-container *ngIf=\"isLoading==true; else showData\">\n    <div>\n        <table-loading [tType]=\"'c4-1'\"></table-loading>\n    </div>\n\n</ng-container>\n<ng-template #showData>\n    <table role=\"table\" class=\"table-responsive\">\n        <thead role=\"rowgroup\">\n            <tr role=\"row\">\n                <ng-container\n                    *ngIf=\"currentModule.moduleName=='WRITING' || currentModule.moduleName=='SPEAKING' || currentModule.moduleName=='LISTENING'\">\n                    <th role=\"columnheader\">Status</th>\n                </ng-container>\n\n                <th role=\"columnheader\" class=\"fitter-able\" (click)=\"fitter('name')\"\n                    [class.fitter-active]='tableFilter.sortColumn==\"name\"'>Name</th>\n\n                <th role=\"columnheader\">Question Type</th>\n\n                <th role=\"columnheader\" *ngIf=\"currentModule.moduleName=='READING'\">Result</th>\n\n                <th role=\"columnheader\">Action</th>\n            </tr>\n        </thead>\n\n\n        <tbody role=\"rowgroup\" [class]=\"currentModule.moduleName\">\n            <ng-container *ngFor=\"let data of questionList\">\n                <tr role=\"row\">\n                    <ng-container\n                        *ngIf=\"currentModule.moduleName=='WRITING' || currentModule.moduleName=='SPEAKING' ||  currentModule.moduleName=='LISTENING'\">\n                        <td role=\"cell\">\n                            <div class=\"show-overall\" [class.passed]=\"data.status==true\">\n                            </div>\n                            {{ data.result }}\n                        </td>\n                    </ng-container>\n                    <td role=\"cell\">{{data.name}}</td>\n                    <td role=\"cell\">{{data.questionName}}</td>\n                    <td *ngIf=\"currentModule.moduleName=='READING'\">\n                        <div class=\"show-overall\"\n                            [ngClass]=\"{'passed': data.status=='PASSED','failed': data.status=='FAILED'}\"></div>\n                        {{data.result}}\n                    </td>\n                    <td>\n                        <action-btn-gp [btnName]=\"'enter'\" [directLink]=\"'AI-score/practise/'+data.evaluateUrl\"\n                            [isDisable]=\"data.status === 'INACTIVE' ? true : false\"></action-btn-gp>\n                    </td>\n\n            </ng-container>\n\n            <tr *ngIf=\"tableFilter.totalCount == 0\" role=\"row\">\n                <td colspan=\"4\" class=\"text-center\">\n                    No Data Exit\n                </td>\n            </tr>\n        </tbody>\n\n    </table>\n\n    <pagination [totalCount]='tableFilter.totalCount'>\n    </pagination>\n\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/questions/question/question.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/questions/question/question.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesQuestionsQuestionQuestionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header-route-menu [currentPageName]=\"'Question Bank'\"></header-route-menu>\n\n<div class=\"container-fluid mt--6\">\n    <header-route-menu-light [currentPageName]=\"'Question Bank'\"\n     [moduleName]=\"currentRouteModule\" [prevUrl]=\"'../'+currentRouteModule.toLowerCase()\">\n    </header-route-menu-light>\n    <router-outlet></router-outlet>\n</div>";
    /***/
  },

  /***/
  "./src/app/modules/questions/question-board/question-board.component.css":
  /*!*******************************************************************************!*\
    !*** ./src/app/modules/questions/question-board/question-board.component.css ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesQuestionsQuestionBoardQuestionBoardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcXVlc3Rpb25zL3F1ZXN0aW9uLWJvYXJkL3F1ZXN0aW9uLWJvYXJkLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/questions/question-board/question-board.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/modules/questions/question-board/question-board.component.ts ***!
    \******************************************************************************/

  /*! exports provided: QuestionBoardComponent */

  /***/
  function srcAppModulesQuestionsQuestionBoardQuestionBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionBoardComponent", function () {
      return QuestionBoardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let QuestionBoardComponent = class QuestionBoardComponent {
      constructor(activeRoute, router) {
        this.activeRoute = activeRoute;
        this.router = router;

        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      }

      ngOnInit() {
        this.questionbank = this.activeRoute.snapshot.data["questionBank"];
      }

      goToTablelist(data) {
        // if (this.questionbank.moduleType == 'READING')
        //   this.router.navigateByUrl(`AI-score/practise/reading/${data.questionType}/reading-practise`);
        // else
        this.router.navigate([data.moduleType, data.questionType], {
          relativeTo: this.activeRoute
        });
      }

    };

    QuestionBoardComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    QuestionBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-question-board',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./question-board.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/questions/question-board/question-board.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./question-board.component.css */
      "./src/app/modules/questions/question-board/question-board.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], QuestionBoardComponent);
    /***/
  },

  /***/
  "./src/app/modules/questions/question-list/question-list.component.css":
  /*!*****************************************************************************!*\
    !*** ./src/app/modules/questions/question-list/question-list.component.css ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesQuestionsQuestionListQuestionListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/* table responsive */\n\n@media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {\n    /*\n                      Label the data\n                  You could also use a data-* attribute and content for this. That way \"bloats\" the HTML, this way means you need to keep HTML and CSS in sync. Lea Verou has a clever way to handle with text-shadow.\n                      */\n    .WRITING>tr>td:nth-of-type(1):before {\n        content: \"Status\";\n    }\n    .WRITING>tr>td:nth-of-type(2):before {\n        content: \"Name\";\n    }\n    .WRITING>tr>td:nth-of-type(3):before {\n        content: \"Question Type\";\n    }\n    .WRITING>tr>td:nth-of-type(4):before {\n        content: \"Action\";\n    }\n    td:nth-of-type(1):before {\n        content: \"Status\";\n    }\n    td:nth-of-type(2):before {\n        content: \"Name\";\n    }\n    td:nth-of-type(3):before {\n        content: \"Question Type\";\n    }\n    td:nth-of-type(4):before {\n        content: \"Action\";\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9xdWVzdGlvbnMvcXVlc3Rpb24tbGlzdC9xdWVzdGlvbi1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHFCQUFxQjs7QUFFckI7SUFDSTs7O3VCQUdtQjtJQUNuQjtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcXVlc3Rpb25zL3F1ZXN0aW9uLWxpc3QvcXVlc3Rpb24tbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiB0YWJsZSByZXNwb25zaXZlICovXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpLCAobWluLWRldmljZS13aWR0aDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSB7XG4gICAgLypcbiAgICAgICAgICAgICAgICAgICAgICBMYWJlbCB0aGUgZGF0YVxuICAgICAgICAgICAgICAgICAgWW91IGNvdWxkIGFsc28gdXNlIGEgZGF0YS0qIGF0dHJpYnV0ZSBhbmQgY29udGVudCBmb3IgdGhpcy4gVGhhdCB3YXkgXCJibG9hdHNcIiB0aGUgSFRNTCwgdGhpcyB3YXkgbWVhbnMgeW91IG5lZWQgdG8ga2VlcCBIVE1MIGFuZCBDU1MgaW4gc3luYy4gTGVhIFZlcm91IGhhcyBhIGNsZXZlciB3YXkgdG8gaGFuZGxlIHdpdGggdGV4dC1zaGFkb3cuXG4gICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAuV1JJVElORz50cj50ZDpudGgtb2YtdHlwZSgxKTpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlN0YXR1c1wiO1xuICAgIH1cbiAgICAuV1JJVElORz50cj50ZDpudGgtb2YtdHlwZSgyKTpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIk5hbWVcIjtcbiAgICB9XG4gICAgLldSSVRJTkc+dHI+dGQ6bnRoLW9mLXR5cGUoMyk6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJRdWVzdGlvbiBUeXBlXCI7XG4gICAgfVxuICAgIC5XUklUSU5HPnRyPnRkOm50aC1vZi10eXBlKDQpOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiQWN0aW9uXCI7XG4gICAgfVxuICAgIHRkOm50aC1vZi10eXBlKDEpOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiU3RhdHVzXCI7XG4gICAgfVxuICAgIHRkOm50aC1vZi10eXBlKDIpOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiTmFtZVwiO1xuICAgIH1cbiAgICB0ZDpudGgtb2YtdHlwZSgzKTpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlF1ZXN0aW9uIFR5cGVcIjtcbiAgICB9XG4gICAgdGQ6bnRoLW9mLXR5cGUoNCk6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJBY3Rpb25cIjtcbiAgICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/questions/question-list/question-list.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/modules/questions/question-list/question-list.component.ts ***!
    \****************************************************************************/

  /*! exports provided: QuestionListComponent */

  /***/
  function srcAppModulesQuestionsQuestionListQuestionListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionListComponent", function () {
      return QuestionListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_core_http_table_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/core/http/table-list.service */
    "./src/app/core/http/table-list.service.ts");

    let QuestionListComponent = class QuestionListComponent {
      constructor(_activeRoute, _tableService) {
        this._activeRoute = _activeRoute;
        this._tableService = _tableService;
        this.currentModule = {};
        this.tableFilter = {};
        this.isLoading = true;
        this.isAsc = true;
      }

      ngOnInit() {
        this.isLoading = true;
        this.currentModule = this._activeRoute.snapshot.params;

        this._activeRoute.queryParams.subscribe(params => {
          if (params.page) {
            this.tableFilter.page = params.page;
            this.tableFilter.limit = params.limit;
          } else if (params.search) {
            this.tableFilter.search = params.search;
          } else {
            this.tableFilter.page = 1;
            this.tableFilter.limit = 10;
            this.tableFilter.sortDirection = 'asc';
            this.tableFilter.sortColumn = 'name';
            this.tableFilter.search = '';
          }

          this.getQuestionList();
        });
      }

      getQuestionList() {
        this.subscription = this._tableService.getQuestionList(this.tableFilter, this.currentModule).subscribe(res => {
          this.questionList = res.questions;
          this.tableFilter = res.filter;
          this.isLoading = false;
        });
      }

      fitter(sortColumn) {
        this.isAsc = !this.isAsc ? this.isAsc = true : this.isAsc = false;
        this.tableFilter.sortDirection = this.isAsc ? 'asc' : 'desc';
        this.tableFilter.sortColumn = sortColumn;
        this.getQuestionList();
      }

      ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        if (this.subscription) this.subscription.unsubscribe();
      }

    };

    QuestionListComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _app_core_http_table_list_service__WEBPACK_IMPORTED_MODULE_3__["TableListService"]
    }];

    QuestionListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-question-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./question-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/questions/question-list/question-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./question-list.component.css */
      "./src/app/modules/questions/question-list/question-list.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _app_core_http_table_list_service__WEBPACK_IMPORTED_MODULE_3__["TableListService"]])], QuestionListComponent);
    /***/
  },

  /***/
  "./src/app/modules/questions/question/question.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/modules/questions/question/question.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesQuestionsQuestionQuestionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcXVlc3Rpb25zL3F1ZXN0aW9uL3F1ZXN0aW9uLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/questions/question/question.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/modules/questions/question/question.component.ts ***!
    \******************************************************************/

  /*! exports provided: QuestionComponent */

  /***/
  function srcAppModulesQuestionsQuestionQuestionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionComponent", function () {
      return QuestionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let QuestionComponent = class QuestionComponent {
      constructor(activeRoute) {
        this.activeRoute = activeRoute;
      }

      ngOnInit() {
        this.currentRouteModule = this.activeRoute.snapshot.paramMap.get("module-name");
      }

    };

    QuestionComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }];

    QuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-question',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./question.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/questions/question/question.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./question.component.css */
      "./src/app/modules/questions/question/question.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], QuestionComponent);
    /***/
  },

  /***/
  "./src/app/modules/questions/questions-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/modules/questions/questions-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: QuestionRoutingModule */

  /***/
  function srcAppModulesQuestionsQuestionsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionRoutingModule", function () {
      return QuestionRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_modules_questions_reslovers_question_reslover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/modules/questions/reslovers/question.reslover */
    "./src/app/modules/questions/reslovers/question.reslover.ts");
    /* harmony import */


    var _app_modules_questions_question_board_question_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/modules/questions/question-board/question-board.component */
    "./src/app/modules/questions/question-board/question-board.component.ts");
    /* harmony import */


    var _app_modules_questions_question_list_question_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/modules/questions/question-list/question-list.component */
    "./src/app/modules/questions/question-list/question-list.component.ts");
    /* harmony import */


    var _app_modules_questions_question_question_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/modules/questions/question/question.component */
    "./src/app/modules/questions/question/question.component.ts");

    const routes = [{
      path: ":module-name",
      component: _app_modules_questions_question_question_component__WEBPACK_IMPORTED_MODULE_6__["QuestionComponent"],
      children: [{
        path: "",
        component: _app_modules_questions_question_board_question_board_component__WEBPACK_IMPORTED_MODULE_4__["QuestionBoardComponent"],
        resolve: {
          questionBank: _app_modules_questions_reslovers_question_reslover__WEBPACK_IMPORTED_MODULE_3__["QuestionResolver"]
        }
      }, {
        path: ":moduleName/:questionType",
        component: _app_modules_questions_question_list_question_list_component__WEBPACK_IMPORTED_MODULE_5__["QuestionListComponent"]
      }]
    }];
    let QuestionRoutingModule = class QuestionRoutingModule {};
    QuestionRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: [_app_modules_questions_reslovers_question_reslover__WEBPACK_IMPORTED_MODULE_3__["QuestionResolver"]]
    })], QuestionRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/questions/questions.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/modules/questions/questions.module.ts ***!
    \*******************************************************/

  /*! exports provided: QuestionsModule */

  /***/
  function srcAppModulesQuestionsQuestionsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionsModule", function () {
      return QuestionsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _question_question_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./question/question.component */
    "./src/app/modules/questions/question/question.component.ts");
    /* harmony import */


    var _app_modules_questions_questions_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/modules/questions/questions-routing.module */
    "./src/app/modules/questions/questions-routing.module.ts");
    /* harmony import */


    var _app_shared_basic_components_basic_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/shared/basic-components/basic.module */
    "./src/app/shared/basic-components/basic.module.ts");
    /* harmony import */


    var _question_board_question_board_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./question-board/question-board.component */
    "./src/app/modules/questions/question-board/question-board.component.ts");
    /* harmony import */


    var _question_list_question_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./question-list/question-list.component */
    "./src/app/modules/questions/question-list/question-list.component.ts");

    let QuestionsModule = class QuestionsModule {};
    QuestionsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_question_question_component__WEBPACK_IMPORTED_MODULE_3__["QuestionComponent"], _question_board_question_board_component__WEBPACK_IMPORTED_MODULE_6__["QuestionBoardComponent"], _question_list_question_list_component__WEBPACK_IMPORTED_MODULE_7__["QuestionListComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _app_modules_questions_questions_routing_module__WEBPACK_IMPORTED_MODULE_4__["QuestionRoutingModule"], _app_shared_basic_components_basic_module__WEBPACK_IMPORTED_MODULE_5__["BasicModule"]],
      exports: [_app_modules_questions_questions_routing_module__WEBPACK_IMPORTED_MODULE_4__["QuestionRoutingModule"]]
    })], QuestionsModule);
    /***/
  },

  /***/
  "./src/app/modules/questions/reslovers/question.reslover.ts":
  /*!******************************************************************!*\
    !*** ./src/app/modules/questions/reslovers/question.reslover.ts ***!
    \******************************************************************/

  /*! exports provided: QuestionResolver */

  /***/
  function srcAppModulesQuestionsResloversQuestionResloverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionResolver", function () {
      return QuestionResolver;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_core_http_question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/core/http/question.service */
    "./src/app/core/http/question.service.ts");

    let QuestionResolver = class QuestionResolver {
      constructor(question) {
        this.question = question;
      }

      resolve(route, state) {
        const questionUrl = route.paramMap.get("module-name");
        return this.question.getQuestionProgess(questionUrl);
      }

    };

    QuestionResolver.ctorParameters = () => [{
      type: _app_core_http_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"]
    }];

    QuestionResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core_http_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"]])], QuestionResolver);
    /***/
  }
}]);
//# sourceMappingURL=modules-questions-questions-module-es5.a88a2517bfd40f4e56e8.js.map