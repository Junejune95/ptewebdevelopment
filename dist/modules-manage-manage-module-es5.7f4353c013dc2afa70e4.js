(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-manage-manage-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-board/manage-board.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-board/manage-board.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesManageManageBoardManageBoardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header-route-menu-light [currentPageName]=\"'Manage'\" [moduleName]=\"currentRouteModule\"></header-route-menu-light>\n\n<div class=\"row\">\n    <div class=\"col-md-6 col-xl-4\" *ngFor=\"let qb of questionbank.questionBank\">\n        <question-card [questionBank]=\"qb\" (click)=\"goToQuestion(qb)\" [isManage]=\"true\"></question-card>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage/manage.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage/manage.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesManageManageManageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header-route-menu [currentPageName]=\"'Mange'\"></header-route-menu>\n\n<div class=\"container-fluid mt--6\">\n       <router-outlet></router-outlet>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-board/manage-board.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/modules/manage/manage-board/manage-board.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesManageManageBoardManageBoardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlL21hbmFnZS1ib2FyZC9tYW5hZ2UtYm9hcmQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-board/manage-board.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/modules/manage/manage-board/manage-board.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ManageBoardComponent */

  /***/
  function srcAppModulesManageManageBoardManageBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageBoardComponent", function () {
      return ManageBoardComponent;
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

    let ManageBoardComponent = class ManageBoardComponent {
      constructor(activeRoute, router) {
        this.activeRoute = activeRoute;
        this.router = router;

        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      }

      ngOnInit() {
        this.questionbank = this.activeRoute.snapshot.data["questionBank"];
        this.currentRouteModule = this.activeRoute.snapshot.paramMap.get("module-name");
      }

      goToQuestion(data) {
        if (data.questionType == 'Essay Structure & Coherence' || data.questionType == 'Essay Comment' || data.questionType == 'Summary Comment') this.router.navigate([data.routeUrl], {
          relativeTo: this.activeRoute
        });else this.router.navigate([data.moduleType, data.questionType], {
          relativeTo: this.activeRoute
        });
      }

    };

    ManageBoardComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    ManageBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-manage-board',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./manage-board.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-board/manage-board.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./manage-board.component.css */
      "./src/app/modules/manage/manage-board/manage-board.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], ManageBoardComponent);
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/modules/manage/manage-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: ManageRoutingModule */

  /***/
  function srcAppModulesManageManageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageRoutingModule", function () {
      return ManageRoutingModule;
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


    var _app_modules_manage_reslovers_manage_progress_reslover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/modules/manage/reslovers/manage-progress.reslover */
    "./src/app/modules/manage/reslovers/manage-progress.reslover.ts");
    /* harmony import */


    var _app_modules_manage_manage_board_manage_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/modules/manage/manage-board/manage-board.component */
    "./src/app/modules/manage/manage-board/manage-board.component.ts");
    /* harmony import */


    var _app_modules_manage_manage_manage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/modules/manage/manage/manage.component */
    "./src/app/modules/manage/manage/manage.component.ts");

    const routes = [{
      path: "question-bank/:module-name",
      component: _app_modules_manage_manage_manage_component__WEBPACK_IMPORTED_MODULE_5__["ManageComponent"],
      children: [{
        path: "",
        component: _app_modules_manage_manage_board_manage_board_component__WEBPACK_IMPORTED_MODULE_4__["ManageBoardComponent"],
        resolve: {
          questionBank: _app_modules_manage_reslovers_manage_progress_reslover__WEBPACK_IMPORTED_MODULE_3__["ManageProgressResolver"]
        }
      }, {
        path: ":moduleType",
        loadChildren: '@app/modules/manage/manage-questions/manage-questions.module#ManageQuestionsModule'
      }]
    }, {
      path: "full-mock-test",
      loadChildren: '@modules/manage/mock-test/mock-test.module#MockTestModule'
    }, {
      path: "individual-mock-test",
      loadChildren: '@app/modules/manage/individual-mock/individual-mock.module#IndividualMockModule'
    }, {
      path: "predictions",
      loadChildren: '@app/modules/manage/predictions/predictions.module#PredictionsModule'
    }, {
      path: "study-plans",
      loadChildren: '@app/modules/manage/study-plans/study-plans.module#StudyPlansModule'
    }, {
      path: "packages",
      loadChildren: '@app/modules/manage/packages/packages.module#PackagesModule'
    }, {
      path: "practise",
      loadChildren: '@app/modules/manage/practise/practise.module#PractiseModule'
    }, {
      path: "users",
      loadChildren: '@app/modules/manage/users/user.module#UserModule'
    }, {
      path: "training-game",
      loadChildren: '@app/modules/manage/training-game/training-game.module#TrainingGameModule'
    }, {
      path: "live-class",
      loadChildren: '@app/modules/manage/live-class/live-class.module#LiveClassModule'
    }];
    let ManageRoutingModule = class ManageRoutingModule {};
    ManageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: [_app_modules_manage_reslovers_manage_progress_reslover__WEBPACK_IMPORTED_MODULE_3__["ManageProgressResolver"]]
    })], ManageRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/manage/manage.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/modules/manage/manage.module.ts ***!
    \*************************************************/

  /*! exports provided: ManageModule */

  /***/
  function srcAppModulesManageManageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageModule", function () {
      return ManageModule;
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


    var _manage_board_manage_board_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./manage-board/manage-board.component */
    "./src/app/modules/manage/manage-board/manage-board.component.ts");
    /* harmony import */


    var _manage_manage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./manage/manage.component */
    "./src/app/modules/manage/manage/manage.component.ts");
    /* harmony import */


    var _app_modules_manage_manage_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/modules/manage/manage-routing.module */
    "./src/app/modules/manage/manage-routing.module.ts");
    /* harmony import */


    var _app_shared_basic_components_basic_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/shared/basic-components/basic.module */
    "./src/app/shared/basic-components/basic.module.ts");

    let ManageModule = class ManageModule {};
    ManageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_manage_board_manage_board_component__WEBPACK_IMPORTED_MODULE_3__["ManageBoardComponent"], _manage_manage_component__WEBPACK_IMPORTED_MODULE_4__["ManageComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _app_modules_manage_manage_routing_module__WEBPACK_IMPORTED_MODULE_5__["ManageRoutingModule"], _app_shared_basic_components_basic_module__WEBPACK_IMPORTED_MODULE_6__["BasicModule"]],
      exports: [_app_modules_manage_manage_routing_module__WEBPACK_IMPORTED_MODULE_5__["ManageRoutingModule"]]
    })], ManageModule);
    /***/
  },

  /***/
  "./src/app/modules/manage/manage/manage.component.css":
  /*!************************************************************!*\
    !*** ./src/app/modules/manage/manage/manage.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesManageManageManageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlL21hbmFnZS9tYW5hZ2UuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/manage/manage/manage.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/modules/manage/manage/manage.component.ts ***!
    \***********************************************************/

  /*! exports provided: ManageComponent */

  /***/
  function srcAppModulesManageManageManageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageComponent", function () {
      return ManageComponent;
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

    let ManageComponent = class ManageComponent {
      constructor(_router) {
        this._router = _router; // this._router.routeReuseStrategy.shouldReuseRoute = () => true;
      }

      ngOnInit() {}

    };

    ManageComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    ManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-manage',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./manage.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage/manage.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./manage.component.css */
      "./src/app/modules/manage/manage/manage.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], ManageComponent);
    /***/
  },

  /***/
  "./src/app/modules/manage/reslovers/manage-progress.reslover.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/modules/manage/reslovers/manage-progress.reslover.ts ***!
    \**********************************************************************/

  /*! exports provided: ManageProgressResolver */

  /***/
  function srcAppModulesManageResloversManageProgressResloverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageProgressResolver", function () {
      return ManageProgressResolver;
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

    let ManageProgressResolver = class ManageProgressResolver {
      constructor(question) {
        this.question = question;
      }

      resolve(route, state) {
        const questionUrl = route.paramMap.get("module-name");
        return this.question.getMangeProgess(questionUrl);
      }

    };

    ManageProgressResolver.ctorParameters = () => [{
      type: _app_core_http_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"]
    }];

    ManageProgressResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core_http_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"]])], ManageProgressResolver);
    /***/
  }
}]);
//# sourceMappingURL=modules-manage-manage-module-es5.7f4353c013dc2afa70e4.js.map