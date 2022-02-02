(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-manage-packages-packages-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/packages/packages-create/packages-create.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/packages/packages-create/packages-create.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesManagePackagesPackagesCreatePackagesCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header-route-menu [currentPageName]=\"'Manage'\"></header-route-menu>\n\n<div class=\"container-fluid mt--6\">\n    <header-route-menu-light [currentPageName]=\"'Package'\" [moduleName]=\"'Manage'\"></header-route-menu-light>\n\n    <form [formGroup]=\"createForm\">\n        <div class=\"row my-2\">\n            <div class=\"col-md-12\">\n                <label-text>Name</label-text>\n                <input type=\"text\" formControlName=\"name\" class=\"form-control\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" placeholder=\"Write Name\" />\n            </div>\n            <div class=\"col-md-12 mt-2\">\n                <label-text>Select Type</label-text>\n                <select class=\"select-box form-control\" formControlName=\"type\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.type.errors }\">\n                    <option value=\"\" disabled selected hidden>Select Type</option>\n                    <!-- <option [ngValue]=\"'P001'\">Qbank </option> -->\n                    <option [ngValue]=\"'P002'\">Qbank+Mock </option>\n                    <option [ngValue]=\"'P003'\">MockOnly </option>\n                    <option [ngValue]=\"'P004'\">Speaking </option>\n                </select>\n            </div>\n            <div class=\"col-md-6\">\n                <label-text>Active Days</label-text>\n                <input type=\"text\" formControlName=\"activeDays\" class=\"form-control\" placeholder=\"Write Active Days\"\n                    OnlyNumber />\n            </div>\n\n            <div class=\"col-md-6\">\n                <label-text>No Of Mock Test</label-text>\n                <select class=\"select-box form-control\" formControlName=\"noOfMockTest\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.noOfMockTest.errors }\">\n                    <option [ngValue]=\"0\">0 </option>\n                    <option [ngValue]=\"1\">1 </option>\n                    <option [ngValue]=\"3\">3 </option>\n                    <option [ngValue]=\"6\">6 </option>\n                    <option [ngValue]=\"9\">9 </option>\n                </select>\n\n            </div>\n\n            <div class=\"col-md-6\">\n                <label-text>Exclude GstPrice</label-text>\n                <input type=\"text\" formControlName=\"excludeGstPrice\" class=\"form-control\"\n                    placeholder=\"Write Exclude GstPrice\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.excludeGstPrice.errors }\" OnlyNumber />\n            </div>\n\n            <div class=\"col-md-6\">\n                <label-text>Include GstPrice</label-text>\n                <input type=\"text\" formControlName=\"includeGstPrice\" class=\"form-control\"\n                    placeholder=\"Write Include GstPrice\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.includeGstPrice.errors }\" OnlyNumber />\n            </div>\n\n            <div class=\"col-md-6\">\n                <label-text>Speaking Limit</label-text>\n                <input type=\"text\" formControlName=\"speakingLimit\" placeholder=\"Write Speaking Limit\"\n                    class=\"form-control\" OnlyNumber />\n            </div>\n            <div class=\"col-md-6\">\n                <label-text>Show Price</label-text>\n                <input type=\"text\" formControlName=\"showPrice\" placeholder=\"Write Show Price\"\n                    class=\"form-control\" OnlyNumber />\n            </div>\n        </div>\n\n\n        <div class=\"footer-button-block\">\n            <button class=\"btn btn-cancel\" (click)=\"goBack()\">Cancel</button>\n            <button class=\"btn btn-next\" (click)=\"onSave()\">Save</button>\n        </div>\n\n\n    </form>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/packages/packages/packages.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/packages/packages/packages.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesManagePackagesPackagesPackagesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header-route-menu [currentPageName]=\"'Manage'\"></header-route-menu>\n\n<div class=\"container-fluid mt--6\">\n    <header-route-menu-light [currentPageName]=\"'Package'\" [moduleName]=\"'Manage'\" [prevUrl]=\"'../'\"\n        [createRoute]=\"'alchemist-academy/manage/packages/create'\"></header-route-menu-light>\n\n\n    <div class=\"row\">\n        <div class=\"col-md-6 p-0\">\n            <show-entries></show-entries>\n        </div>\n        <div class=\"col-md-6 p-0\">\n            <search-box [hint]=\"'Search'\"></search-box>\n        </div>\n    </div>\n\n    <ng-container *ngIf=\"isLoading; else showData\">\n        <div>\n            <table-loading [tType]=\"'c6-1'\"></table-loading>\n        </div>\n    </ng-container>\n    <ng-template #showData>\n        <table role=\"table\" class=\"table-responsive\">\n            <thead role=\"rowgroup\">\n                <tr role=\"row\">\n                    <th role=\"columnheader\" class=\"fitter-able\" (click)=\"fitter('name')\"\n                        [class.fitter-active]='tableFilter.sortColumn==\"name\"'>Name</th>\n                    <th role=\"columnheader\">Package Name</th>\n\n                    <th role=\"columnheader\">Active Days</th>\n                    <th role=\"columnheader\">No of Mocks</th>\n                    <th role=\"columnheader\">Speaking Limit</th>\n\n                    <th role=\"columnheader\" style=\"width: 10%;\">Action</th>\n                </tr>\n            </thead>\n\n\n            <tbody role=\"rowgroup\">\n                <ng-container *ngFor=\"let data of packages\">\n                    <tr role=\"row\">\n                        <td role=\"cell\">{{data.name}}</td>\n                        <td role=\"cell\">{{data.packageName}}</td>\n                        <td role=\"cell\">{{data.activeDays ? data.activeDays : '-'}}</td>\n                        <td role=\"cell\">{{data.noOfMockTest}}</td>\n                        <td role=\"cell\">{{data.speakingLimit}}</td>\n                        <td>\n                            <action-btn-gp [btnName]=\"'edit'\" [editId]=\"data.packageId\"></action-btn-gp>\n                            <action-btn-gp [btnName]=\"'delete'\" [data]=\"data\" (onSubmit)=\"deletePackage($event)\">\n                            </action-btn-gp>\n                        </td>\n\n                </ng-container>\n\n\n\n                <tr *ngIf=\"tableFilter.totalCount == 0\" role=\"row\">\n                    <td colspan=\"5\" class=\"text-center\">\n                        No Data Exit\n                    </td>\n                </tr>\n            </tbody>\n\n        </table>\n\n        <pagination [totalCount]='tableFilter.totalCount'>\n        </pagination>\n\n    </ng-template>\n\n</div>";
    /***/
  },

  /***/
  "./src/app/modules/manage/packages/package-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/modules/manage/packages/package-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: PackageRoutingModule */

  /***/
  function srcAppModulesManagePackagesPackageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PackageRoutingModule", function () {
      return PackageRoutingModule;
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


    var _app_modules_manage_packages_packages_create_packages_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/modules/manage/packages/packages-create/packages-create.component */
    "./src/app/modules/manage/packages/packages-create/packages-create.component.ts");
    /* harmony import */


    var _app_modules_manage_packages_packages_packages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/modules/manage/packages/packages/packages.component */
    "./src/app/modules/manage/packages/packages/packages.component.ts");
    /* harmony import */


    var _app_modules_manage_reslovers_package_detail_reslover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/modules/manage/reslovers/package-detail.reslover */
    "./src/app/modules/manage/reslovers/package-detail.reslover.ts");

    const routes = [{
      path: "",
      component: _app_modules_manage_packages_packages_packages_component__WEBPACK_IMPORTED_MODULE_4__["PackagesComponent"]
    }, {
      path: "create",
      component: _app_modules_manage_packages_packages_create_packages_create_component__WEBPACK_IMPORTED_MODULE_3__["PackagesCreateComponent"]
    }, {
      path: "create/:detailId",
      component: _app_modules_manage_packages_packages_create_packages_create_component__WEBPACK_IMPORTED_MODULE_3__["PackagesCreateComponent"],
      resolve: {
        packageDetail: _app_modules_manage_reslovers_package_detail_reslover__WEBPACK_IMPORTED_MODULE_5__["PackageDetailReslover"]
      }
    }];
    let PackageRoutingModule = class PackageRoutingModule {};
    PackageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: [_app_modules_manage_reslovers_package_detail_reslover__WEBPACK_IMPORTED_MODULE_5__["PackageDetailReslover"]]
    })], PackageRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/manage/packages/packages-create/packages-create.component.css":
  /*!***************************************************************************************!*\
    !*** ./src/app/modules/manage/packages/packages-create/packages-create.component.css ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesManagePackagesPackagesCreatePackagesCreateComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlL3BhY2thZ2VzL3BhY2thZ2VzLWNyZWF0ZS9wYWNrYWdlcy1jcmVhdGUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/manage/packages/packages-create/packages-create.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/modules/manage/packages/packages-create/packages-create.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: PackagesCreateComponent */

  /***/
  function srcAppModulesManagePackagesPackagesCreatePackagesCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PackagesCreateComponent", function () {
      return PackagesCreateComponent;
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

    let PackagesCreateComponent = class PackagesCreateComponent {
      constructor(formBuilder, _saveService, _activeRoute) {
        this.formBuilder = formBuilder;
        this._saveService = _saveService;
        this._activeRoute = _activeRoute;
        this.submitted = false;
        this.createForm = this.formBuilder.group({
          name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          activeDays: [""],
          noOfMockTest: [0],
          excludeGstPrice: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          includeGstPrice: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          speakingLimit: [""],
          type: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          showPrice: [""]
        });
      }

      ngOnInit() {
        let data = this._activeRoute.snapshot.data['packageDetail'];
        if (data) this.getDataEditForm(data);
      }

      getDataEditForm(data) {
        this.packageId = data.packageId;
        this.createForm = this.formBuilder.group({
          name: [data.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          activeDays: [data.activeDays],
          noOfMockTest: [data.noOfMockTest],
          excludeGstPrice: [data.excludeGstPrice, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          includeGstPrice: [data.includeGstPrice, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          speakingLimit: [data.speakingLimit],
          type: [data.type, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          showPrice: [data.showPrice]
        });
      }

      get f() {
        return this.createForm.controls;
      }

      onSave() {
        this.submitted = true;

        if (this.createForm.invalid) {
          return;
        }

        this.sub = this._saveService.onSavePackage(this.createForm.value, this.packageId, this.createForm.value['type']).subscribe(res => {
          this.goBack();
        });
      }

      goBack() {
        this._saveService.goBackPrev();
      }

    };

    PackagesCreateComponent.ctorParameters = () => [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _app_core_http_save_service__WEBPACK_IMPORTED_MODULE_4__["SaveService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }];

    PackagesCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-packages-create',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./packages-create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/packages/packages-create/packages-create.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./packages-create.component.css */
      "./src/app/modules/manage/packages/packages-create/packages-create.component.css")).default]
    })], PackagesCreateComponent);
    /***/
  },

  /***/
  "./src/app/modules/manage/packages/packages.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/modules/manage/packages/packages.module.ts ***!
    \************************************************************/

  /*! exports provided: PackagesModule */

  /***/
  function srcAppModulesManagePackagesPackagesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PackagesModule", function () {
      return PackagesModule;
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


    var _packages_packages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./packages/packages.component */
    "./src/app/modules/manage/packages/packages/packages.component.ts");
    /* harmony import */


    var _app_modules_manage_packages_package_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/modules/manage/packages/package-routing.module */
    "./src/app/modules/manage/packages/package-routing.module.ts");
    /* harmony import */


    var _app_shared_basic_components_basic_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/shared/basic-components/basic.module */
    "./src/app/shared/basic-components/basic.module.ts");
    /* harmony import */


    var _packages_create_packages_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./packages-create/packages-create.component */
    "./src/app/modules/manage/packages/packages-create/packages-create.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    let PackagesModule = class PackagesModule {};
    PackagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_packages_packages_component__WEBPACK_IMPORTED_MODULE_3__["PackagesComponent"], _packages_create_packages_create_component__WEBPACK_IMPORTED_MODULE_6__["PackagesCreateComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _app_modules_manage_packages_package_routing_module__WEBPACK_IMPORTED_MODULE_4__["PackageRoutingModule"], _app_shared_basic_components_basic_module__WEBPACK_IMPORTED_MODULE_5__["BasicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]],
      exports: [_app_modules_manage_packages_package_routing_module__WEBPACK_IMPORTED_MODULE_4__["PackageRoutingModule"]]
    })], PackagesModule);
    /***/
  },

  /***/
  "./src/app/modules/manage/packages/packages/packages.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/modules/manage/packages/packages/packages.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesManagePackagesPackagesPackagesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlL3BhY2thZ2VzL3BhY2thZ2VzL3BhY2thZ2VzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/manage/packages/packages/packages.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/modules/manage/packages/packages/packages.component.ts ***!
    \************************************************************************/

  /*! exports provided: PackagesComponent */

  /***/
  function srcAppModulesManagePackagesPackagesPackagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PackagesComponent", function () {
      return PackagesComponent;
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

    let PackagesComponent = class PackagesComponent {
      constructor(_tableService, _activeRoute) {
        this._tableService = _tableService;
        this._activeRoute = _activeRoute;
        this.tableFilter = {};
        this.isAsc = true;
        this.isLoading = false;
      }

      ngOnInit() {
        this.isLoading = true;

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
            this.tableFilter.search = '';
          }

          this.getPractiseList();
        });
      }

      getPractiseList() {
        this.subscription = this._tableService.getManagePackages(this.tableFilter).subscribe(res => {
          this.tableFilter = res.filter;
          this.packages = res.storePackages;
          this.isLoading = false;
        });
      }

      fitter(sortColumn) {
        this.isLoading = true;
        this.isAsc = !this.isAsc ? this.isAsc = true : this.isAsc = false;
        this.tableFilter.sortDirection = this.isAsc ? 'asc' : 'desc';
        this.tableFilter.sortColumn = sortColumn;
        this.getPractiseList();
      }

      deletePackage(data) {
        this.subscription = this._tableService.onDeletePackage(data.packageId, data.type).subscribe(res => {
          this.getPractiseList();
        });
      }

      ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        if (this.subscription) this.subscription.unsubscribe();
      }

    };

    PackagesComponent.ctorParameters = () => [{
      type: _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_3__["TableListService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }];

    PackagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-packages',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./packages.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/packages/packages/packages.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./packages.component.css */
      "./src/app/modules/manage/packages/packages/packages.component.css")).default]
    })], PackagesComponent);
    /***/
  },

  /***/
  "./src/app/modules/manage/reslovers/package-detail.reslover.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/modules/manage/reslovers/package-detail.reslover.ts ***!
    \*********************************************************************/

  /*! exports provided: PackageDetailReslover */

  /***/
  function srcAppModulesManageResloversPackageDetailResloverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PackageDetailReslover", function () {
      return PackageDetailReslover;
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

    let PackageDetailReslover = class PackageDetailReslover {
      constructor(question) {
        this.question = question;
      }

      resolve(route) {
        const studyPlanUrl = "ai/store/packages/".concat(route.params['detailId'], "/detail");
        return this.question.getDetail(studyPlanUrl);
      }

    };

    PackageDetailReslover.ctorParameters = () => [{
      type: _app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_2__["DetailService"]
    }];

    PackageDetailReslover = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], PackageDetailReslover);
    /***/
  }
}]);
//# sourceMappingURL=app-modules-manage-packages-packages-module-es5.87162f19e67360480912.js.map