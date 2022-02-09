(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-other-question-module-other-question-module-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/other-question-module/other-board/other-board.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/other-question-module/other-board/other-board.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesOtherQuestionModuleOtherBoardOtherBoardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header-route-menu-light [currentPageName]=\"questionBank.moduleType\" [moduleName]=\"'Question Bank'\">\n</header-route-menu-light>\n<div class=\"row\">\n    <ng-container *ngFor=\"let qb of questionBank.questionBank\">\n        <div class=\"col-md-6 col-xl-3\">\n            <question-card [questionBank]=\"qb\" (click)=\"goToList(qb)\"></question-card>\n        </div>\n    </ng-container>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/other-question-module/other-list/other-list.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/other-question-module/other-list/other-list.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesOtherQuestionModuleOtherListOtherListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header-route-menu-light [currentPageName]=\"'Question Bank'\" [moduleName]=\"currentModule\" [prevUrl]=\"'../'\">\n</header-route-menu-light>\n\n\n<div class=\"row\">\n    <div class=\"col-md-6 p-0\">\n        <show-entries></show-entries>\n    </div>\n    <div class=\"col-md-6 p-0\">\n        <search-box [hint]=\"'Search'\"></search-box>\n    </div>\n</div>\n<ng-container *ngIf=\"isLoading; else showData\">\n    <div>\n        <table-loading [tType]=\"'c3-3'\"></table-loading>\n    </div>\n</ng-container>\n<ng-template #showData>\n    <table role=\"table\" class=\"table-responsive\">\n        <thead role=\"rowgroup\">\n            <tr role=\"row\">\n                <th role=\"columnheader\" class=\"fitter-able\" (click)=\"fitter('name')\"\n                    [class.fitter-active]='tableFilter.sortColumn==\"name\"'>Name</th>\n\n                <!-- <th role=\"columnheader\" style=\"width: 30%;\">Question Type</th> -->\n                <th role=\"columnheader\" *ngIf=\"type=='study-plan'\">Result</th>\n                <th role=\"columnheader\" *ngIf=\"type=='mock-test'\">Status</th>\n\n                <th role=\"columnheader\" style=\"width: 10%;\">Action</th>\n            </tr>\n        </thead>\n\n        <tbody role=\"rowgroup\" [class]=\"currentModule.moduleName\">\n            <ng-container *ngFor=\"let data of otherList\">\n                <tr role=\"row\">\n                    <td role=\"cell\">{{data.name}}</td>\n                    <!-- <td role=\"cell\">{{data.questionName ? data.questionName : '-'}}</td> -->\n                    <td role=\"cell\" *ngIf=\"type=='mock-test'\">{{data.status}}</td>\n                    <td *ngIf=\"type=='study-plan'\">\n                        <div class=\"show-overall\"\n                            [ngClass]=\"{'passed': data.status==true}\"></div>\n                        {{data.result}}\n                    </td>\n                    <td>\n                        <action-btn-gp [btnName]=\"'enter'\"\n                            [directLink]=\"'AI-score/evaluate-enter/'+currentModule+'/'+data.questionId+'/enter-'+type\"\n                            [isDisable]=\"data.isActive === 'Not Active' ? true : false\"></action-btn-gp>\n                    </td>\n            </ng-container>\n\n            <tr *ngIf=\"tableFilter.totalCount == 0\" role=\"row\">\n                <td colspan=\"4\" class=\"text-center\">\n                    No Data Exit\n                </td>\n            </tr>\n        </tbody>\n\n    </table>\n\n    <div class=\"d-flex justify-content-center my-2\">\n        <pagination [totalCount]='tableFilter.totalCount'>\n        </pagination>\n    </div>\n\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/other-question-module/other-question/other-question.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/other-question-module/other-question/other-question.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesOtherQuestionModuleOtherQuestionOtherQuestionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header-route-menu [currentPageName]=\"'Prediction File'\"></header-route-menu>\n\n<div class=\"container-fluid mt--6\">\n\n    <router-outlet></router-outlet>\n\n</div>\n\n\n\n\n";
    /***/
  },

  /***/
  "./src/app/modules/other-question-module/other-board/other-board.component.css":
  /*!*************************************************************************************!*\
    !*** ./src/app/modules/other-question-module/other-board/other-board.component.css ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesOtherQuestionModuleOtherBoardOtherBoardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb3RoZXItcXVlc3Rpb24tbW9kdWxlL290aGVyLWJvYXJkL290aGVyLWJvYXJkLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/other-question-module/other-board/other-board.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/modules/other-question-module/other-board/other-board.component.ts ***!
    \************************************************************************************/

  /*! exports provided: OtherBoardComponent */

  /***/
  function srcAppModulesOtherQuestionModuleOtherBoardOtherBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OtherBoardComponent", function () {
      return OtherBoardComponent;
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

    let OtherBoardComponent = class OtherBoardComponent {
      constructor(_activeRoute, _router) {
        this._activeRoute = _activeRoute;
        this._router = _router;

        this._router.routeReuseStrategy.shouldReuseRoute = () => false;
      }

      ngOnInit() {
        this.questionBank = this._activeRoute.snapshot.data["questionBank"];
      }

      goToList(data) {
        this._router.navigate([data.moduleType], {
          relativeTo: this._activeRoute
        });
      }

    };

    OtherBoardComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    OtherBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-other-board',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./other-board.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/other-question-module/other-board/other-board.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./other-board.component.css */
      "./src/app/modules/other-question-module/other-board/other-board.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], OtherBoardComponent);
    /***/
  },

  /***/
  "./src/app/modules/other-question-module/other-list/other-list.component.css":
  /*!***********************************************************************************!*\
    !*** ./src/app/modules/other-question-module/other-list/other-list.component.css ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesOtherQuestionModuleOtherListOtherListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* table responsive */\n\n@media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {\n    /*\n                      Label the data\n                  You could also use a data-* attribute and content for this. That way \"bloats\" the HTML, this way means you need to keep HTML and CSS in sync. Lea Verou has a clever way to handle with text-shadow.\n   */\n    td:nth-of-type(1):before {\n        content: \"Name\";\n    }\n    td:nth-of-type(2):before {\n        content: \"Question Type\";\n    }\n    td:nth-of-type(3):before {\n        content: \"Action\";\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vdGhlci1xdWVzdGlvbi1tb2R1bGUvb3RoZXItbGlzdC9vdGhlci1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUJBQXFCOztBQUVyQjtJQUNJOzs7SUFHQTtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb3RoZXItcXVlc3Rpb24tbW9kdWxlL290aGVyLWxpc3Qvb3RoZXItbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogdGFibGUgcmVzcG9uc2l2ZSAqL1xuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSwgKG1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweCkge1xuICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICAgTGFiZWwgdGhlIGRhdGFcbiAgICAgICAgICAgICAgICAgIFlvdSBjb3VsZCBhbHNvIHVzZSBhIGRhdGEtKiBhdHRyaWJ1dGUgYW5kIGNvbnRlbnQgZm9yIHRoaXMuIFRoYXQgd2F5IFwiYmxvYXRzXCIgdGhlIEhUTUwsIHRoaXMgd2F5IG1lYW5zIHlvdSBuZWVkIHRvIGtlZXAgSFRNTCBhbmQgQ1NTIGluIHN5bmMuIExlYSBWZXJvdSBoYXMgYSBjbGV2ZXIgd2F5IHRvIGhhbmRsZSB3aXRoIHRleHQtc2hhZG93LlxuICAgKi9cbiAgICB0ZDpudGgtb2YtdHlwZSgxKTpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIk5hbWVcIjtcbiAgICB9XG4gICAgdGQ6bnRoLW9mLXR5cGUoMik6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJRdWVzdGlvbiBUeXBlXCI7XG4gICAgfVxuICAgIHRkOm50aC1vZi10eXBlKDMpOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiQWN0aW9uXCI7XG4gICAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/other-question-module/other-list/other-list.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/modules/other-question-module/other-list/other-list.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: OtherListComponent */

  /***/
  function srcAppModulesOtherQuestionModuleOtherListOtherListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OtherListComponent", function () {
      return OtherListComponent;
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


    var _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/core/http/serviceIndex */
    "./src/app/core/http/serviceIndex.ts");

    let OtherListComponent = class OtherListComponent {
      constructor(_activeRoute, _tableService) {
        this._activeRoute = _activeRoute;
        this._tableService = _tableService;
        this.tableFilter = {};
        this.isLoading = false;
        this.isAsc = false;
      }

      ngOnInit() {
        this.currentModule = this._activeRoute.snapshot.params['moduleName'];
        this.type = this._activeRoute.parent.snapshot.params['type'];

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

          this.gePredictionsList();
        });
      }

      gePredictionsList() {
        this.isLoading = true;
        this.subscription = this._tableService.getOtherList(this.tableFilter, this.currentModule, this.type).subscribe(res => {
          this.otherList = res.questions;
          this.tableFilter = res.filter;
          this.isLoading = false;
        });
      }

      fitter(sortColumn) {
        this.isAsc = !this.isAsc ? this.isAsc = true : this.isAsc = false;
        this.tableFilter.sortDirection = this.isAsc ? 'asc' : 'desc';
        this.tableFilter.sortColumn = sortColumn;
        this.gePredictionsList();
      }

      ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        if (this.subscription) this.subscription.unsubscribe();
      }

    };

    OtherListComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_3__["TableListService"]
    }];

    OtherListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-other-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./other-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/other-question-module/other-list/other-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./other-list.component.css */
      "./src/app/modules/other-question-module/other-list/other-list.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_3__["TableListService"]])], OtherListComponent);
    /***/
  },

  /***/
  "./src/app/modules/other-question-module/other-question-module.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/modules/other-question-module/other-question-module.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: OtherQuestionModuleModule */

  /***/
  function srcAppModulesOtherQuestionModuleOtherQuestionModuleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OtherQuestionModuleModule", function () {
      return OtherQuestionModuleModule;
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


    var _other_board_other_board_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./other-board/other-board.component */
    "./src/app/modules/other-question-module/other-board/other-board.component.ts");
    /* harmony import */


    var _other_list_other_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./other-list/other-list.component */
    "./src/app/modules/other-question-module/other-list/other-list.component.ts");
    /* harmony import */


    var _other_question_other_question_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./other-question/other-question.component */
    "./src/app/modules/other-question-module/other-question/other-question.component.ts");
    /* harmony import */


    var _app_modules_other_question_module_otherquestion_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/modules/other-question-module/otherquestion-routing.module */
    "./src/app/modules/other-question-module/otherquestion-routing.module.ts");
    /* harmony import */


    var _app_shared_basic_components_basic_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app/shared/basic-components/basic.module */
    "./src/app/shared/basic-components/basic.module.ts");
    /* harmony import */


    var _app_shared_question_components_question_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @app/shared/question-components/question-components.module */
    "./src/app/shared/question-components/question-components.module.ts");

    let OtherQuestionModuleModule = class OtherQuestionModuleModule {};
    OtherQuestionModuleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_other_board_other_board_component__WEBPACK_IMPORTED_MODULE_3__["OtherBoardComponent"], _other_list_other_list_component__WEBPACK_IMPORTED_MODULE_4__["OtherListComponent"], _other_question_other_question_component__WEBPACK_IMPORTED_MODULE_5__["OtherQuestionComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _app_modules_other_question_module_otherquestion_routing_module__WEBPACK_IMPORTED_MODULE_6__["OtherRoutingModule"], _app_shared_basic_components_basic_module__WEBPACK_IMPORTED_MODULE_7__["BasicModule"], _app_shared_question_components_question_components_module__WEBPACK_IMPORTED_MODULE_8__["QuestionComponentsModule"]]
    })], OtherQuestionModuleModule);
    /***/
  },

  /***/
  "./src/app/modules/other-question-module/other-question/other-question.component.css":
  /*!*******************************************************************************************!*\
    !*** ./src/app/modules/other-question-module/other-question/other-question.component.css ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesOtherQuestionModuleOtherQuestionOtherQuestionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb3RoZXItcXVlc3Rpb24tbW9kdWxlL290aGVyLXF1ZXN0aW9uL290aGVyLXF1ZXN0aW9uLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/other-question-module/other-question/other-question.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/modules/other-question-module/other-question/other-question.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: OtherQuestionComponent */

  /***/
  function srcAppModulesOtherQuestionModuleOtherQuestionOtherQuestionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OtherQuestionComponent", function () {
      return OtherQuestionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let OtherQuestionComponent = class OtherQuestionComponent {
      constructor() {}

      ngOnInit() {}

    };
    OtherQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-other-question',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./other-question.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/other-question-module/other-question/other-question.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./other-question.component.css */
      "./src/app/modules/other-question-module/other-question/other-question.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], OtherQuestionComponent);
    /***/
  },

  /***/
  "./src/app/modules/other-question-module/otherquestion-routing.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/modules/other-question-module/otherquestion-routing.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: OtherRoutingModule */

  /***/
  function srcAppModulesOtherQuestionModuleOtherquestionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OtherRoutingModule", function () {
      return OtherRoutingModule;
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


    var _app_modules_manage_reslovers_otherQuestion_reslover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/modules/manage/reslovers/otherQuestion.reslover */
    "./src/app/modules/manage/reslovers/otherQuestion.reslover.ts");
    /* harmony import */


    var _app_modules_other_question_module_other_board_other_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/modules/other-question-module/other-board/other-board.component */
    "./src/app/modules/other-question-module/other-board/other-board.component.ts");
    /* harmony import */


    var _app_modules_other_question_module_other_list_other_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/modules/other-question-module/other-list/other-list.component */
    "./src/app/modules/other-question-module/other-list/other-list.component.ts");
    /* harmony import */


    var _app_modules_other_question_module_other_question_other_question_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/modules/other-question-module/other-question/other-question.component */
    "./src/app/modules/other-question-module/other-question/other-question.component.ts");

    const routes = [{
      path: ':type',
      component: _app_modules_other_question_module_other_question_other_question_component__WEBPACK_IMPORTED_MODULE_6__["OtherQuestionComponent"],
      children: [{
        path: '',
        component: _app_modules_other_question_module_other_board_other_board_component__WEBPACK_IMPORTED_MODULE_4__["OtherBoardComponent"],
        resolve: {
          questionBank: _app_modules_manage_reslovers_otherQuestion_reslover__WEBPACK_IMPORTED_MODULE_3__["OtherQuestionResolver"]
        }
      }, {
        path: ':moduleName',
        component: _app_modules_other_question_module_other_list_other_list_component__WEBPACK_IMPORTED_MODULE_5__["OtherListComponent"]
      }]
    }];
    let OtherRoutingModule = class OtherRoutingModule {};
    OtherRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: [_app_modules_manage_reslovers_otherQuestion_reslover__WEBPACK_IMPORTED_MODULE_3__["OtherQuestionResolver"]]
    })], OtherRoutingModule);
    /***/
  }
}]);
//# sourceMappingURL=app-modules-other-question-module-other-question-module-module-es5.4660949a4e6ef0a999f6.js.map