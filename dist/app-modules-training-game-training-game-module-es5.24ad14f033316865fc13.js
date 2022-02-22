(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-training-game-training-game-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/training-game/vocab-board/vocab-board.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/training-game/vocab-board/vocab-board.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesTrainingGameVocabBoardVocabBoardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header-route-menu [currentPageName]=\"'Training Game'\"></header-route-menu>\n\n<div class=\"container-fluid mt--6\">\n    <header-route-menu-light [currentPageName]=\"'Training Game'\" [moduleName]=\"'Vocabulary'\"\n    ></header-route-menu-light>\n\n    <div *ngIf=\"moduleList.length==0;else showData\" class=\"mt-4\">\n        <table-loading [tType]=\"'c4-6'\"></table-loading>\n    </div>\n    <ng-template #showData>\n        <div class=\"row\">\n            <div class=\"col-md-6 col-xl-3\" *ngFor=\"let module of moduleList\">\n                <div class=\"card\" [routerLink]=\"[module.questionType]\">\n                    <div class=\"d-flex align-items-center\">\n                        <div class=\"studyplan-img\">\n                            <ng-lottie height=\"80px\" [styles]=\"styles\" [options]=\"options\"></ng-lottie>\n                        </div>\n\n                        <p class=\"module-name\">{{module.questionName}}</p>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </ng-template>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/training-game/vocab-list/vocab-list.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/training-game/vocab-list/vocab-list.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesTrainingGameVocabListVocabListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header-route-menu [currentPageName]=\"'Manage'\"></header-route-menu>\n<div class=\"container-fluid mt--6\">\n    <header-route-menu-light [currentPageName]=\"'Question Bank'\" [moduleName]=\"moduleName\" [prevUrl]=\"'../../../'\">\n    </header-route-menu-light>\n\n\n    <div class=\"row\">\n        <div class=\"col-md-6 p-0\">\n            <show-entries></show-entries>\n        </div>\n        <div class=\"col-md-6 p-0\">\n            <search-box [hint]=\"'Search'\"></search-box>\n        </div>\n    </div>\n    <ng-container *ngIf=\"isLoading; else showData\">\n        <div>\n            <table-loading [tType]=\"'c2-1'\"></table-loading>\n        </div>\n\n    </ng-container>\n    <ng-template #showData>\n        <table role=\"table\" class=\"table-responsive\">\n            <thead role=\"rowgroup\">\n                <tr role=\"row\">\n                    <th role=\"columnheader\" class=\"fitter-able\" (click)=\"fitter('name')\"\n                        [class.fitter-active]='tableFilter.sortColumn==\"name\"'>Name</th>\n                    <th role=\"columnheader\" style=\"width: 12%;\">Action</th>\n                </tr>\n            </thead>\n            <tbody role=\"rowgroup\">\n                <ng-container *ngFor=\"let data of vocabs\">\n                    <tr role=\"row\">\n                        <td role=\"cell\">{{data.name}}</td>\n                        <td>\n                            <action-btn-gp [btnName]=\"'enter'\" [directLink]=\"'AI-score/training-evaluate/vocabulary/'+qcode+'/'+data.questionId\"></action-btn-gp>\n                        </td>\n                </ng-container>\n\n                <tr *ngIf=\"tableFilter.totalCount == 0\" role=\"row\">\n                    <td colspan=\"4\" class=\"text-center\">\n                        No Data Exit\n                    </td>\n                </tr>\n            </tbody>\n\n        </table>\n\n        <div class=\"d-flex justify-content-center my-2\">\n            <pagination [totalCount]='tableFilter.totalCount'>\n            </pagination>\n        </div>\n\n    </ng-template>\n</div>";
    /***/
  },

  /***/
  "./src/app/modules/training-game/training-game.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/modules/training-game/training-game.module.ts ***!
    \***************************************************************/

  /*! exports provided: playerFactory, TrainingGameModule */

  /***/
  function srcAppModulesTrainingGameTrainingGameModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "playerFactory", function () {
      return playerFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrainingGameModule", function () {
      return TrainingGameModule;
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


    var _vocab_list_vocab_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./vocab-list/vocab-list.component */
    "./src/app/modules/training-game/vocab-list/vocab-list.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _vocab_board_vocab_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./vocab-board/vocab-board.component */
    "./src/app/modules/training-game/vocab-board/vocab-board.component.ts");
    /* harmony import */


    var _app_shared_basic_components_basic_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/shared/basic-components/basic.module */
    "./src/app/shared/basic-components/basic.module.ts");
    /* harmony import */


    var ngx_lottie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-lottie */
    "./node_modules/ngx-lottie/fesm2015/ngx-lottie.js");
    /* harmony import */


    var lottie_web__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! lottie-web */
    "./node_modules/lottie-web/build/player/lottie.js");
    /* harmony import */


    var lottie_web__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lottie_web__WEBPACK_IMPORTED_MODULE_8__);

    const routes = [{
      path: 'vocabulary/:qcode',
      component: _vocab_list_vocab_list_component__WEBPACK_IMPORTED_MODULE_3__["VocabListComponent"]
    }, {
      path: 'vocabulary',
      component: _vocab_board_vocab_board_component__WEBPACK_IMPORTED_MODULE_5__["VocabBoardComponent"]
    }];

    function playerFactory() {
      return lottie_web__WEBPACK_IMPORTED_MODULE_8___default.a;
    }

    let TrainingGameModule = class TrainingGameModule {};
    TrainingGameModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_vocab_list_vocab_list_component__WEBPACK_IMPORTED_MODULE_3__["VocabListComponent"], _vocab_board_vocab_board_component__WEBPACK_IMPORTED_MODULE_5__["VocabBoardComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _app_shared_basic_components_basic_module__WEBPACK_IMPORTED_MODULE_6__["BasicModule"], ngx_lottie__WEBPACK_IMPORTED_MODULE_7__["LottieModule"].forRoot({
        player: playerFactory
      })],
      providers: []
    })], TrainingGameModule);
    /***/
  },

  /***/
  "./src/app/modules/training-game/vocab-board/vocab-board.component.css":
  /*!*****************************************************************************!*\
    !*** ./src/app/modules/training-game/vocab-board/vocab-board.component.css ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesTrainingGameVocabBoardVocabBoardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".module-name{\n    font-size: 18px;\n    font-weight: 500;\n    margin-bottom: 0;\n    margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy90cmFpbmluZy1nYW1lL3ZvY2FiLWJvYXJkL3ZvY2FiLWJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3RyYWluaW5nLWdhbWUvdm9jYWItYm9hcmQvdm9jYWItYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2R1bGUtbmFtZXtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/training-game/vocab-board/vocab-board.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/modules/training-game/vocab-board/vocab-board.component.ts ***!
    \****************************************************************************/

  /*! exports provided: VocabBoardComponent */

  /***/
  function srcAppModulesTrainingGameVocabBoardVocabBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VocabBoardComponent", function () {
      return VocabBoardComponent;
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


    var _app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/core/http/detail.service */
    "./src/app/core/http/detail.service.ts");

    let VocabBoardComponent = class VocabBoardComponent {
      constructor(_activeRoute, _service) {
        this._activeRoute = _activeRoute;
        this._service = _service;
        this.moduleList = [];
        this.options = {
          path: 'assets/icon/lottie/questions-pen.json'
        };
      }

      ngOnInit() {
        this.checkType();
      }

      checkType() {
        this._service.getCheckProgressVocab().subscribe(res => {
          this.moduleList = res.questionBank;
        });
      }

    };

    VocabBoardComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_3__["DetailService"]
    }];

    VocabBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-vocab-board',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./vocab-board.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/training-game/vocab-board/vocab-board.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./vocab-board.component.css */
      "./src/app/modules/training-game/vocab-board/vocab-board.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_3__["DetailService"]])], VocabBoardComponent);
    /***/
  },

  /***/
  "./src/app/modules/training-game/vocab-list/vocab-list.component.css":
  /*!***************************************************************************!*\
    !*** ./src/app/modules/training-game/vocab-list/vocab-list.component.css ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesTrainingGameVocabListVocabListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdHJhaW5pbmctZ2FtZS92b2NhYi1saXN0L3ZvY2FiLWxpc3QuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/training-game/vocab-list/vocab-list.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/modules/training-game/vocab-list/vocab-list.component.ts ***!
    \**************************************************************************/

  /*! exports provided: VocabListComponent */

  /***/
  function srcAppModulesTrainingGameVocabListVocabListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VocabListComponent", function () {
      return VocabListComponent;
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


    var _app_core_http_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/core/http/common.service */
    "./src/app/core/http/common.service.ts");
    /* harmony import */


    var _app_core_http_table_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/core/http/table-list.service */
    "./src/app/core/http/table-list.service.ts");

    let VocabListComponent = class VocabListComponent {
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

        this._activeRoute.queryParams.subscribe(params => {
          if (params.page) {
            this.tableFilter.page = params.page;
            this.tableFilter.limit = params.limit;
          } else if (params.search) {
            this.tableFilter.search = params.search;
          } else {
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
        this.subscription = this._tableService.getVocabList(this.tableFilter, this.qcode).subscribe(res => {
          this.vocabs = res.questions;
          this.tableFilter = res.filter;
          this.isLoading = false;
        });
      }

      fitter(sortColumn) {
        this.isAsc = !this.isAsc ? this.isAsc = true : this.isAsc = false;
        this.tableFilter.sortDirection = this.isAsc ? 'asc' : 'desc';
        this.tableFilter.sortColumn = sortColumn;
        this.getVocabList();
      }

    };

    VocabListComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _app_core_http_table_list_service__WEBPACK_IMPORTED_MODULE_4__["TableListService"]
    }, {
      type: _app_core_http_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
    }];

    VocabListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-vocab-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./vocab-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/training-game/vocab-list/vocab-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./vocab-list.component.css */
      "./src/app/modules/training-game/vocab-list/vocab-list.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _app_core_http_table_list_service__WEBPACK_IMPORTED_MODULE_4__["TableListService"], _app_core_http_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])], VocabListComponent);
    /***/
  }
}]);
//# sourceMappingURL=app-modules-training-game-training-game-module-es5.24ad14f033316865fc13.js.map