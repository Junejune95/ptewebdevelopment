(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-manage-live-class-live-class-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/live-class/live-class/live-class.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/live-class/live-class/live-class.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesManageLiveClassLiveClassLiveClassComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header-route-menu [currentPageName]=\"'Manage'\"></header-route-menu>\n\n<div class=\"container-fluid mt--6\">\n    <header-route-menu-light [currentPageName]=\"'Manage'\" [moduleName]=\"'Live Class'\"\n    [createRoute]=\"'alchemist-academy/manage/live-class/create'\">\n    </header-route-menu-light>\n\n    <div class=\"row\">\n        <div class=\"col-md-6 p-0\">\n            <show-entries></show-entries>\n        </div>\n        <div class=\"col-md-6 p-0\">\n            <search-box [hint]=\"'Search'\"></search-box>\n        </div>\n    </div>\n    <ng-container *ngIf=\"isLoading; else showData\">\n        <div>\n            <table-loading [tType]=\"'c5-1'\"></table-loading>\n        </div>\n\n    </ng-container>\n    <ng-template #showData>\n        <table role=\"table\" class=\"table-responsive\">\n            <thead role=\"rowgroup\">\n                <tr role=\"row\">\n                    <th role=\"columnheader\" class=\"fitter-able\" (click)=\"fitter('name')\"\n                        [class.fitter-active]='tableFilter.sortColumn==\"name\"'>Name</th>\n                    <th role=\"columnheader\" class=\"fitter-able\" (click)=\"fitter('teacherName')\"\n                        [class.fitter-active]='tableFilter.sortColumn==\"teacherName\"'>Teacher Name</th>\n                    <th role=\"columnheader\" class=\"fitter-able\" (click)=\"fitter('startDate')\"\n                        [class.fitter-active]='tableFilter.sortColumn==\"startDate\"'>Start Date</th>\n                    <th role=\"columnheader\" class=\"fitter-able\" (click)=\"fitter('endDate')\"\n                        [class.fitter-active]='tableFilter.sortColumn==\"endDate\"'>End Date</th>\n                    <th role=\"columnheader\" style=\"width: 12%;\">Action</th>\n                </tr>\n            </thead>\n            <tbody role=\"rowgroup\">\n                <ng-container *ngFor=\"let data of liveClasses\">\n                    <tr role=\"row\">\n                        <td role=\"cell\">{{data.name}}</td>\n                        <td role=\"cell\">{{data.teacherName}}</td>\n                        <td role=\"cell\">{{data.startDate | date : 'M/d/yy, h:mm a'}}</td>\n                        <td role=\"cell\">{{data.endDate |  date : 'M/d/yy, h:mm a'}}</td>\n                        <td>\n                            <action-btn-gp [btnName]=\"'edit'\" [editId]=\"data.liveclassId\"></action-btn-gp>\n                            <action-btn-gp [btnName]=\"'delete'\" [data]=\"data\" (onSubmit)=\"deleteClass($event)\">\n                            </action-btn-gp>\n                        </td>\n                </ng-container>\n\n                <tr *ngIf=\"tableFilter.totalCount == 0\" role=\"row\">\n                    <td colspan=\"4\" class=\"text-center\">\n                        No Data Exit\n                    </td>\n                </tr>\n            </tbody>\n\n        </table>\n\n        <div class=\"d-flex justify-content-center my-2\">\n            <pagination [totalCount]='tableFilter.totalCount'>\n            </pagination>\n        </div>\n\n    </ng-template>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/live-class/live-create/live-create.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/live-class/live-create/live-create.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesManageLiveClassLiveCreateLiveCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header-route-menu [currentPageName]=\"'Manage'\"></header-route-menu>\n\n<div class=\"container-fluid mt--6\">\n    <header-route-menu-light [currentPageName]=\"'Manage'\" [moduleName]=\"'Live Class'\"></header-route-menu-light>\n\n    <form [formGroup]=\"createForm\">\n        <div class=\"container create-form\">\n            <div class=\"row\">\n                <div class=\"col-md-12 mb-2\">\n                    <label-text>Name</label-text>\n                    <input type=\"text\" formControlName=\"name\" class=\"form-control\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" placeholder=\"Write Name\" />\n                </div>\n\n                <div class=\"col-md-12 mb-2\">\n                    <label-text>Teacher Name</label-text>\n                    <input type=\"text\" formControlName=\"teacherName\" class=\"form-control\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.teacherName.errors }\"\n                        placeholder=\"Write Teacher Name\" />\n\n                </div>\n\n                <div class=\"col-md-6 mb-2\">\n                    <label-text>Start Date</label-text>\n                    <input type=\"datetime-local\" formControlName=\"startDate\" class=\"form-control\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.startDate.errors }\" placeholder=\"Write Start Date\" />\n\n                </div>\n\n                <div class=\"col-md-6 mb-2\">\n                    <label-text>End Date</label-text>\n                    <input type=\"datetime-local\" formControlName=\"endDate\" class=\"form-control\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.endDate.errors }\" placeholder=\"Write End Date\" />\n\n                </div>\n\n                <div class=\"col-md-12 mb-2\">\n                    <label-text>Zoom Url</label-text>\n                    <input type=\"text\" formControlName=\"zoomUrl\" class=\"form-control\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.zoomUrl.errors }\" placeholder=\"Write Zoom Url\" />\n                </div>\n            </div>\n\n            <div class=\"footer-button-block\">\n                <cancel-btn>Cancel</cancel-btn>\n                <submit-btn (onClick)=\"onCreate()\">Save</submit-btn>\n            </div>\n        </div>\n    </form>\n</div>";
    /***/
  },

  /***/
  "./src/app/modules/manage/live-class/live-class.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/modules/manage/live-class/live-class.module.ts ***!
    \****************************************************************/

  /*! exports provided: LiveClassModule */

  /***/
  function srcAppModulesManageLiveClassLiveClassModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LiveClassModule", function () {
      return LiveClassModule;
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


    var _live_class_live_class_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./live-class/live-class.component */
    "./src/app/modules/manage/live-class/live-class/live-class.component.ts");
    /* harmony import */


    var _live_create_live_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./live-create/live-create.component */
    "./src/app/modules/manage/live-class/live-create/live-create.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_shared_basic_components_basic_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/shared/basic-components/basic.module */
    "./src/app/shared/basic-components/basic.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _live_detail_relover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./live-detail.relover */
    "./src/app/modules/manage/live-class/live-detail.relover.ts");

    const routes = [{
      path: '',
      component: _live_class_live_class_component__WEBPACK_IMPORTED_MODULE_3__["LiveClassComponent"]
    }, {
      path: 'create',
      component: _live_create_live_create_component__WEBPACK_IMPORTED_MODULE_4__["LiveCreateComponent"]
    }, {
      path: 'create/:liveId',
      component: _live_create_live_create_component__WEBPACK_IMPORTED_MODULE_4__["LiveCreateComponent"],
      resolve: {
        data: _live_detail_relover__WEBPACK_IMPORTED_MODULE_8__["LiveClassDetailResolver"]
      }
    }];
    let LiveClassModule = class LiveClassModule {};
    LiveClassModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_live_class_live_class_component__WEBPACK_IMPORTED_MODULE_3__["LiveClassComponent"], _live_create_live_create_component__WEBPACK_IMPORTED_MODULE_4__["LiveCreateComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes), _app_shared_basic_components_basic_module__WEBPACK_IMPORTED_MODULE_6__["BasicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]],
      providers: [_live_detail_relover__WEBPACK_IMPORTED_MODULE_8__["LiveClassDetailResolver"]]
    })], LiveClassModule);
    /***/
  },

  /***/
  "./src/app/modules/manage/live-class/live-class/live-class.component.css":
  /*!*******************************************************************************!*\
    !*** ./src/app/modules/manage/live-class/live-class/live-class.component.css ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesManageLiveClassLiveClassLiveClassComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlL2xpdmUtY2xhc3MvbGl2ZS1jbGFzcy9saXZlLWNsYXNzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/manage/live-class/live-class/live-class.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/modules/manage/live-class/live-class/live-class.component.ts ***!
    \******************************************************************************/

  /*! exports provided: LiveClassComponent */

  /***/
  function srcAppModulesManageLiveClassLiveClassLiveClassComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LiveClassComponent", function () {
      return LiveClassComponent;
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

    let LiveClassComponent = class LiveClassComponent {
      constructor(_activeRoute, _tableService) {
        this._activeRoute = _activeRoute;
        this._tableService = _tableService;
        this.tableFilter = {};
        this.isLoading = false;
        this.isAsc = false;
      }

      ngOnInit() {
        this.currentModule = this._activeRoute.snapshot.params['moduleName'];

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

          this.getLiveClasses();
        });
      }

      getLiveClasses() {
        this.isLoading = true;
        this.subscription = this._tableService.getLiveClassList(this.tableFilter).subscribe(res => {
          this.liveClasses = res.liveclasses;
          this.tableFilter = res.filter;
          this.isLoading = false;
        });
      }

      deleteClass(data) {
        this.subscription = this._tableService.onDeleteLiveClass(data.liveclassId).subscribe(res => {
          this.getLiveClasses();
        });
      }

      fitter(sortColumn) {
        this.tableFilter.sortDirection = this.isAsc ? 'asc' : 'desc';
        this.isAsc = !this.isAsc ? this.isAsc = true : this.isAsc = false;
        this.tableFilter.sortColumn = sortColumn;
        this.getLiveClasses();
      }

      ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        if (this.subscription) this.subscription.unsubscribe();
      }

    };

    LiveClassComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _app_core_http_table_list_service__WEBPACK_IMPORTED_MODULE_3__["TableListService"]
    }];

    LiveClassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-live-class',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./live-class.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/live-class/live-class/live-class.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./live-class.component.css */
      "./src/app/modules/manage/live-class/live-class/live-class.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _app_core_http_table_list_service__WEBPACK_IMPORTED_MODULE_3__["TableListService"]])], LiveClassComponent);
    /***/
  },

  /***/
  "./src/app/modules/manage/live-class/live-create/live-create.component.css":
  /*!*********************************************************************************!*\
    !*** ./src/app/modules/manage/live-class/live-create/live-create.component.css ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesManageLiveClassLiveCreateLiveCreateComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlL2xpdmUtY2xhc3MvbGl2ZS1jcmVhdGUvbGl2ZS1jcmVhdGUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/manage/live-class/live-create/live-create.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/modules/manage/live-class/live-create/live-create.component.ts ***!
    \********************************************************************************/

  /*! exports provided: LiveCreateComponent */

  /***/
  function srcAppModulesManageLiveClassLiveCreateLiveCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LiveCreateComponent", function () {
      return LiveCreateComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_core_http_save_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/core/http/save.service */
    "./src/app/core/http/save.service.ts");

    let LiveCreateComponent = class LiveCreateComponent {
      constructor(fb, _createService, _activeRoute) {
        this.fb = fb;
        this._createService = _createService;
        this._activeRoute = _activeRoute;
        this.submitted = false;
        this.createForm = this.fb.group({
          name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          teacherName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          startDate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          endDate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          zoomUrl: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
      }

      ngOnInit() {
        this.questionId = this._activeRoute.snapshot.paramMap.get("liveId");
        let data = this._activeRoute.snapshot.data['data'];
        if (data) this.getDetail(data);
      }

      getDetail(data) {
        this.createForm = this.fb.group({
          name: [data.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          teacherName: [data.teacherName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          startDate: [data.startDate, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          endDate: [data.endDate, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          zoomUrl: [data.zoomUrl, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
      }

      goBack() {
        this._createService.goBackPrev();
      }

      onCreate() {
        console.log(this.createForm.value);
        this.submitted = true;

        if (this.createForm.invalid) {
          return;
        } else {
          this.sub = this._createService.onSaveLiveCreate(this.createForm.value, this.questionId).subscribe(() => {
            this.goBack();
          });
        }
      }

      get f() {
        return this.createForm.controls;
      }

    };

    LiveCreateComponent.ctorParameters = () => [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _app_core_http_save_service__WEBPACK_IMPORTED_MODULE_4__["SaveService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }];

    LiveCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-live-create',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./live-create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/live-class/live-create/live-create.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./live-create.component.css */
      "./src/app/modules/manage/live-class/live-create/live-create.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _app_core_http_save_service__WEBPACK_IMPORTED_MODULE_4__["SaveService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], LiveCreateComponent);
    /***/
  },

  /***/
  "./src/app/modules/manage/live-class/live-detail.relover.ts":
  /*!******************************************************************!*\
    !*** ./src/app/modules/manage/live-class/live-detail.relover.ts ***!
    \******************************************************************/

  /*! exports provided: LiveClassDetailResolver */

  /***/
  function srcAppModulesManageLiveClassLiveDetailReloverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LiveClassDetailResolver", function () {
      return LiveClassDetailResolver;
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


    var _app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/core/http/detail.service */
    "./src/app/core/http/detail.service.ts");

    let LiveClassDetailResolver = class LiveClassDetailResolver {
      constructor(question) {
        this.question = question;
      }

      resolve(route) {
        return this.question.getDetailLiveClass(route.params['liveId']);
      }

    };

    LiveClassDetailResolver.ctorParameters = () => [{
      type: _app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_2__["DetailService"]
    }];

    LiveClassDetailResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_2__["DetailService"]])], LiveClassDetailResolver);
    /***/
  }
}]);
//# sourceMappingURL=app-modules-manage-live-class-live-class-module-es5.b61b418ac82119360c58.js.map