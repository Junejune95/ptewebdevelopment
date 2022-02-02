(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-manage-practise-practise-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/practise/practise-board/practise-board.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/practise/practise-board/practise-board.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesManagePractisePractiseBoardPractiseBoardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header-route-menu [currentPageName]=\"'Manage'\"></header-route-menu>\n\n<div class=\"container-fluid mt--6\">\n    <header-route-menu-light [currentPageName]=\"'Practise'\" [moduleName]=\"'Manage'\"></header-route-menu-light>\n    <div class=\"row\">\n        <ng-container *ngFor=\"let qb of questionBank.questionBank\">\n            <div class=\"col-md-6 col-xl-3\">\n                <question-card [questionBank]=\"qb\" (click)=\"goToList(qb)\" [isManage]=\"true\"></question-card>\n            </div>\n        </ng-container>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/practise/practise-create/practise-create.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/practise/practise-create/practise-create.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesManagePractisePractiseCreatePractiseCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header-route-menu [currentPageName]=\"'Manage'\"></header-route-menu>\n\n<div class=\"container-fluid mt--6\">\n    <header-route-menu-light [currentPageName]=\"'Prediction File'\" [moduleName]=\"moduleName\"></header-route-menu-light>\n    <div class=\"container py-2\">\n        <div>\n            <div class=\"d-flex step-wrapper\">\n                <div class=\"step-1\" [ngClass]=\"{ 'step-active': isStep1 == true }\">\n                    <p>Step 1</p>\n                </div>\n                <div class=\"step-2\" [ngClass]=\"{ 'step-active': isStep1 == false }\">\n                    <p>Step 2</p>\n                </div>\n            </div>\n        </div>\n\n        <div *ngIf=\"isStep1\">\n            <form [formGroup]=\"createForm\">\n                <div class=\"row my-2\">\n                    <div class=\"col-md-12 mb-2\">\n                        <label-text>Practise Name</label-text>\n                        <input type=\"text\" formControlName=\"name\" class=\"form-control\"\n                            [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\"\n                            placeholder=\"Write Practise Name\" />\n                    </div>\n                </div>\n                <div class=\"row mb-2\">\n                    <div class=\"col-md-12 mb-2\">\n                        <label-text>Select Plan Type</label-text>\n                        <select class=\"select-box form-control\" formControlName=\"questionType\"\n                            [ngClass]=\"{ 'is-invalid': submitted && f.questionType.errors }\">\n                            <option value=\"\" disabled selected hidden>Select Type</option>\n                            <option *ngFor=\"let type of typeList;let i=index\" [ngValue]=\"type.questionType\">{{\n                                type.questionName }}\n                            </option>\n                        </select>\n\n                    </div>\n                </div>\n\n                <div class=\"footer-button-block\">\n                    <button class=\"btn btn-cancel\" (click)=\"goBack()\">Cancel</button>\n                    <button class=\"btn btn-next\" (click)=\"goToStep2()\">Continue</button>\n                </div>\n\n\n            </form>\n        </div>\n        <div *ngIf=\"!isStep1\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <show-entries (data)=\"selectedData($event)\"></show-entries>\n                </div>\n                <div class=\"col-md-6\">\n                    <search-box [hint]=\"'Search Question'\" (searchData)=\"searchDatas($event)\" [isEmit]=\"true\">\n                    </search-box>\n                </div>\n            </div>\n\n            <ng-container *ngIf=\"!selectedLists; else showData\">\n                <div>\n                    <table-loading [tType]=\"'c4-1'\"></table-loading>\n                </div>\n            </ng-container>\n            <ng-template #showData>\n                <table role=\"table\" class=\"table-responsive\">\n                    <thead role=\"rowgroup\">\n                        <tr role=\"row\">\n                            <th role=\"columnheader\" (click)=\"fitter('createdDate')\" class=\"fitter-able\"\n                                [class.fitter-active]='tableFilter.sortColumn==\"createdDate\"'>Created Date</th>\n\n                            <th role=\"columnheader\" (click)=\"fitter('name')\" class=\"fitter-able\"\n                                [class.fitter-active]='tableFilter.sortColumn==\"name\"'>Name</th>\n\n                            <th role=\"columnheader\">Question Name</th>\n\n                            <th role=\"columnheader\" style=\"width: 20%;\">Action</th>\n                        </tr>\n                    </thead>\n\n                    <tbody role=\"rowgroup\">\n                        <ng-container *ngFor=\"let data of selectedLists\">\n                            <tr role=\"row\" (click)=\"selectfile(data.questionId)\"\n                                [class.table-selected]=\"selectedQues.includes(data.questionId) == true\">\n                                <td role=\"cell\">{{data.createdDate | defaultDate}}</td>\n\n                                <td role=\"cell\">{{data.name}}</td>\n                                <td role=\"cell\">{{data.questionType}}</td>\n                                <td>\n                                    <action-btn-gp [btnName]=\"'view'\" [directLink]=\"\" isNewTab=\"true\"></action-btn-gp>\n                                </td>\n                            </tr>\n                        </ng-container>\n\n                        <tr *ngIf=\"tableFilter.totalCount == 0\" role=\"row\">\n                            <td colspan=\"4\" class=\"text-center\">\n                                No Data Exit\n                            </td>\n                        </tr>\n                    </tbody>\n\n                </table>\n\n\n                <pagination [tableFilter]='tableFilter' (getPage)=\"changePage($event)\">\n                </pagination>\n\n                <div class=\"footer-button-block\">\n                    <button class=\"btn btn-cancel\" (click)=\"backStep1()\">Cancel</button>\n                    <button class=\"btn btn-next\" (click)=\"checkAvaiable()\">Submit</button>\n                </div>\n\n                <dialog-box *ngIf=\"isDialog\" (onconfirm)=\"checkconfirm($event)\" [dialogEntry]=\"dialog\"></dialog-box>\n\n            </ng-template>\n\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/practise/practise-list/practise-list.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/practise/practise-list/practise-list.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesManagePractisePractiseListPractiseListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header-route-menu [currentPageName]=\"'Manage'\"></header-route-menu>\n\n<div class=\"container-fluid mt--6\">\n    <header-route-menu-light [currentPageName]=\"'Question Bank'\" [moduleName]=\"moduleName\" [prevUrl]=\"'../'\"\n        [createRoute]=\"'alchemist-academy/manage/practise/'+moduleName+'/create'\"></header-route-menu-light>\n\n\n    <div class=\"row\">\n        <div class=\"col-md-6 p-0\">\n            <show-entries></show-entries>\n        </div>\n        <div class=\"col-md-6 p-0\">\n            <search-box [hint]=\"'Search'\"></search-box>\n        </div>\n    </div>\n    <ng-container *ngIf=\"isLoading; else showData\">\n        <div>\n            <table-loading [tType]=\"'c4-1'\"></table-loading>\n        </div>\n    </ng-container>\n    <ng-template #showData>\n        <table role=\"table\" class=\"table-responsive\">\n            <thead role=\"rowgroup\">\n                <tr role=\"row\">\n                    <th role=\"columnheader\" class=\"fitter-able\" (click)=\"fitter('name')\"\n                        [class.fitter-active]='tableFilter.sortColumn==\"name\"'>Name</th>\n\n                    <th role=\"columnheader\" style=\"width: 30%;\">Question Type</th>\n\n                    <th role=\"columnheader\" style=\"width: 10%;\">Action</th>\n                </tr>\n            </thead>\n\n\n            <tbody role=\"rowgroup\">\n                <ng-container *ngFor=\"let data of practises\">\n                    <tr role=\"row\">\n                        <td role=\"cell\">{{data.name}}</td>\n                        <td role=\"cell\">{{data.questionName}}</td>\n                        <td>\n                            <action-btn-gp [btnName]=\"'edit'\" [editId]=\"data.practiceId\"></action-btn-gp>\n                        </td>\n\n                </ng-container>\n\n\n\n                <tr *ngIf=\"tableFilter.totalCount == 0\" role=\"row\">\n                    <td colspan=\"4\" class=\"text-center\">\n                        No Data Exit\n                    </td>\n                </tr>\n            </tbody>\n\n        </table>\n\n        <pagination [totalCount]='tableFilter.totalCount'>\n        </pagination>\n\n    </ng-template>\n\n</div>";
    /***/
  },

  /***/
  "./src/app/modules/manage/practise/practise-board/practise-board.component.css":
  /*!*************************************************************************************!*\
    !*** ./src/app/modules/manage/practise/practise-board/practise-board.component.css ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesManagePractisePractiseBoardPractiseBoardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlL3ByYWN0aXNlL3ByYWN0aXNlLWJvYXJkL3ByYWN0aXNlLWJvYXJkLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/manage/practise/practise-board/practise-board.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/modules/manage/practise/practise-board/practise-board.component.ts ***!
    \************************************************************************************/

  /*! exports provided: PractiseBoardComponent */

  /***/
  function srcAppModulesManagePractisePractiseBoardPractiseBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PractiseBoardComponent", function () {
      return PractiseBoardComponent;
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

    let PractiseBoardComponent = class PractiseBoardComponent {
      constructor(_activeRoute, _router) {
        this._activeRoute = _activeRoute;
        this._router = _router;
      }

      ngOnInit() {
        this.questionBank = this._activeRoute.snapshot.data["questionBank"];
      }

      goToList(qb) {
        this._router.navigate([qb.moduleType], {
          relativeTo: this._activeRoute
        });
      }

    };

    PractiseBoardComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    PractiseBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-practise-board',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./practise-board.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/practise/practise-board/practise-board.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./practise-board.component.css */
      "./src/app/modules/manage/practise/practise-board/practise-board.component.css")).default]
    })], PractiseBoardComponent);
    /***/
  },

  /***/
  "./src/app/modules/manage/practise/practise-create/practise-create.component.css":
  /*!***************************************************************************************!*\
    !*** ./src/app/modules/manage/practise/practise-create/practise-create.component.css ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesManagePractisePractiseCreatePractiseCreateComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlL3ByYWN0aXNlL3ByYWN0aXNlLWNyZWF0ZS9wcmFjdGlzZS1jcmVhdGUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/manage/practise/practise-create/practise-create.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/modules/manage/practise/practise-create/practise-create.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: PractiseCreateComponent */

  /***/
  function srcAppModulesManagePractisePractiseCreatePractiseCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PractiseCreateComponent", function () {
      return PractiseCreateComponent;
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


    var _app_core_http_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/core/http/common.service */
    "./src/app/core/http/common.service.ts");
    /* harmony import */


    var _app_core_http_save_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/core/http/save.service */
    "./src/app/core/http/save.service.ts");
    /* harmony import */


    var _app_core_http_table_list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/core/http/table-list.service */
    "./src/app/core/http/table-list.service.ts");
    /* harmony import */


    var _app_shared_models_CommonModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app/shared/models/CommonModel */
    "./src/app/shared/models/CommonModel.ts");

    let PractiseCreateComponent = class PractiseCreateComponent {
      constructor(_activeRoute, formBuilder, _saveService, _cservice, _tableService) {
        this._activeRoute = _activeRoute;
        this.formBuilder = formBuilder;
        this._saveService = _saveService;
        this._cservice = _cservice;
        this._tableService = _tableService;
        this.dialog = {
          showText: "",
          isDelete: false,
          isWarning: true,
          isconfirmBtn: false
        };
        this.selectedLists = [];
        this.selectedQues = [];
        this.tableFilter = {
          page: 1,
          limit: 10,
          sortColumn: 'createdDate',
          sortDirection: 'asc',
          search: null
        }; // boolean

        this.isStep1 = true;
        this.submitted = false;
        this.isAsc = true;
        this.isDialog = false;
        this.isProgress = true;
        this.createForm = this.formBuilder.group({
          name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          questionType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
      }

      ngOnInit() {
        this.moduleName = this._activeRoute.snapshot.params['moduleName'];
        this.typeList = this._activeRoute.snapshot.data['questionType'].questions;
        console.log(this.typeList);
        let data = this._activeRoute.snapshot.data['practiseDetail'];
        if (data) this.getDataEditForm(data);
      }

      getDataEditForm(data) {
        this.predictionID = data.questionId;
        this.createForm = this.formBuilder.group({
          name: [data.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          questionType: [data.questionType, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.selectedQues = data.questions;
      }

      goToStep2() {
        this.submitted = true;

        if (this.createForm.invalid) {
          return;
        } else {
          this.isStep1 = false;
          this.tableFilter = {
            page: 1,
            limit: 10,
            sortColumn: 'createdDate',
            sortDirection: 'asc'
          };
          this.getSelectLists();
        }
      }

      backStep1() {
        this.isStep1 = true;
        this.tableFilter = {
          page: 1,
          limit: 10,
          sortColumn: 'createdDate',
          sortDirection: 'asc'
        };
      }

      selectedData(e) {
        this.tableFilter.limit = e;
        this.getSelectLists();
      }

      searchDatas(e) {
        this.tableFilter.search = e;
        this.getSelectLists();
      }

      get f() {
        return this.createForm.controls;
      }

      getSelectLists() {
        this.selectedLists = null;
        let module = {
          moduleType: this.moduleName,
          questionType: this.createForm.value.questionType
        };
        this.subscription = this._tableService.getManageQuestionList(this.tableFilter, module).subscribe(res => {
          this.tableFilter = res.filter;
          this.selectedLists = res.questions;
        });
      }

      selectfile(id) {
        let index = this.selectedQues.indexOf(id);

        if (this.selectedQues.includes(id)) {
          this.selectedQues.splice(index, 1);
        } else {
          this.selectedQues.push(id);
        }
      }

      onSave() {
        this.isProgress = true;
        let obj = new _app_shared_models_CommonModel__WEBPACK_IMPORTED_MODULE_7__["PredictionFile"]();
        obj.name = this.createForm.value.name;
        obj.questionType = this.createForm.value.questionType;
        obj.questions = this.selectedQues;
        this.subscription = this._saveService.onSavePractise(obj, this.moduleName, this.predictionID).subscribe(res => {
          this.goBack();
        });
      }

      goBack() {
        this._cservice.goBackPrev();
      }

      changePage(e) {
        this.tableFilter.page = e;
        this.getSelectLists();
      }

      checkAvaiable() {
        if (this.selectedQues.length == 0) {
          this.isDialog = true;
          this.dialog.showText = 'Select Question!';
        } else {
          this.onSave();
        }
      }

      checkconfirm(e) {
        this.isDialog = e;
      }

      fitter(sortColumn) {
        this.isAsc = !this.isAsc ? this.isAsc = true : this.isAsc = false;
        this.tableFilter.sortDirection = this.isAsc ? 'asc' : 'desc';
        this.tableFilter.sortColumn = sortColumn;
        this.getSelectLists();
      }

      ngOnDestroy() {
        if (this.subscription) this.subscription.unsubscribe();
      }

    };

    PractiseCreateComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _app_core_http_save_service__WEBPACK_IMPORTED_MODULE_5__["SaveService"]
    }, {
      type: _app_core_http_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
    }, {
      type: _app_core_http_table_list_service__WEBPACK_IMPORTED_MODULE_6__["TableListService"]
    }];

    PractiseCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-practise-create',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./practise-create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/practise/practise-create/practise-create.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./practise-create.component.css */
      "./src/app/modules/manage/practise/practise-create/practise-create.component.css")).default]
    })], PractiseCreateComponent);
    /***/
  },

  /***/
  "./src/app/modules/manage/practise/practise-list/practise-list.component.css":
  /*!***********************************************************************************!*\
    !*** ./src/app/modules/manage/practise/practise-list/practise-list.component.css ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesManagePractisePractiseListPractiseListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlL3ByYWN0aXNlL3ByYWN0aXNlLWxpc3QvcHJhY3Rpc2UtbGlzdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/manage/practise/practise-list/practise-list.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/modules/manage/practise/practise-list/practise-list.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: PractiseListComponent */

  /***/
  function srcAppModulesManagePractisePractiseListPractiseListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PractiseListComponent", function () {
      return PractiseListComponent;
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

    let PractiseListComponent = class PractiseListComponent {
      constructor(_tableService, _activeRoute) {
        this._tableService = _tableService;
        this._activeRoute = _activeRoute;
        this.tableFilter = {};
        this.isAsc = true;
        this.isLoading = false;
      }

      ngOnInit() {
        this.isLoading = true;
        this.moduleName = this._activeRoute.snapshot.params['moduleType'];

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

          this.getPractiseList();
        });
      }

      getPractiseList() {
        this.subscription = this._tableService.getPractiseList(this.tableFilter, this.moduleName).subscribe(res => {
          this.tableFilter = res.filter;
          this.practises = res.questions;
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

      ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        if (this.subscription) this.subscription.unsubscribe();
      }

    };

    PractiseListComponent.ctorParameters = () => [{
      type: _app_core_http_table_list_service__WEBPACK_IMPORTED_MODULE_3__["TableListService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }];

    PractiseListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-practise-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./practise-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/practise/practise-list/practise-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./practise-list.component.css */
      "./src/app/modules/manage/practise/practise-list/practise-list.component.css")).default]
    })], PractiseListComponent);
    /***/
  },

  /***/
  "./src/app/modules/manage/practise/practise-routing.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/modules/manage/practise/practise-routing.module.ts ***!
    \********************************************************************/

  /*! exports provided: PractiseRoutingModule */

  /***/
  function srcAppModulesManagePractisePractiseRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PractiseRoutingModule", function () {
      return PractiseRoutingModule;
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


    var _app_modules_manage_practise_practise_board_practise_board_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/modules/manage/practise/practise-board/practise-board.component */
    "./src/app/modules/manage/practise/practise-board/practise-board.component.ts");
    /* harmony import */


    var _app_modules_manage_practise_practise_create_practise_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/modules/manage/practise/practise-create/practise-create.component */
    "./src/app/modules/manage/practise/practise-create/practise-create.component.ts");
    /* harmony import */


    var _app_modules_manage_practise_practise_list_practise_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/modules/manage/practise/practise-list/practise-list.component */
    "./src/app/modules/manage/practise/practise-list/practise-list.component.ts");
    /* harmony import */


    var _app_modules_manage_reslovers_other_detail_reslover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/modules/manage/reslovers/other-detail.reslover */
    "./src/app/modules/manage/reslovers/other-detail.reslover.ts");
    /* harmony import */


    var _app_modules_manage_reslovers_otherQuestion_reslover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app/modules/manage/reslovers/otherQuestion.reslover */
    "./src/app/modules/manage/reslovers/otherQuestion.reslover.ts");
    /* harmony import */


    var _app_modules_manage_reslovers_questions_type_reslover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @app/modules/manage/reslovers/questions-type.reslover */
    "./src/app/modules/manage/reslovers/questions-type.reslover.ts");

    const routes = [{
      path: "",
      component: _app_modules_manage_practise_practise_board_practise_board_component__WEBPACK_IMPORTED_MODULE_3__["PractiseBoardComponent"],
      resolve: {
        questionBank: _app_modules_manage_reslovers_otherQuestion_reslover__WEBPACK_IMPORTED_MODULE_7__["OtherQuestionResolver"]
      },
      data: {
        type: 'practise'
      }
    }, {
      path: ':moduleType',
      component: _app_modules_manage_practise_practise_list_practise_list_component__WEBPACK_IMPORTED_MODULE_5__["PractiseListComponent"]
    }, {
      path: ':moduleName/create',
      component: _app_modules_manage_practise_practise_create_practise_create_component__WEBPACK_IMPORTED_MODULE_4__["PractiseCreateComponent"],
      resolve: {
        questionType: _app_modules_manage_reslovers_questions_type_reslover__WEBPACK_IMPORTED_MODULE_8__["QuestionTypeResolver"]
      }
    }, {
      path: ':moduleName/create/:detailId',
      component: _app_modules_manage_practise_practise_create_practise_create_component__WEBPACK_IMPORTED_MODULE_4__["PractiseCreateComponent"],
      resolve: {
        questionType: _app_modules_manage_reslovers_questions_type_reslover__WEBPACK_IMPORTED_MODULE_8__["QuestionTypeResolver"],
        practiseDetail: _app_modules_manage_reslovers_other_detail_reslover__WEBPACK_IMPORTED_MODULE_6__["OtherDetailResolver"]
      },
      data: {
        detailName: 'practise'
      }
    }];
    let PractiseRoutingModule = class PractiseRoutingModule {};
    PractiseRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: [_app_modules_manage_reslovers_otherQuestion_reslover__WEBPACK_IMPORTED_MODULE_7__["OtherQuestionResolver"], _app_modules_manage_reslovers_questions_type_reslover__WEBPACK_IMPORTED_MODULE_8__["QuestionTypeResolver"], _app_modules_manage_reslovers_other_detail_reslover__WEBPACK_IMPORTED_MODULE_6__["OtherDetailResolver"]]
    })], PractiseRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/manage/practise/practise.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/modules/manage/practise/practise.module.ts ***!
    \************************************************************/

  /*! exports provided: PractiseModule */

  /***/
  function srcAppModulesManagePractisePractiseModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PractiseModule", function () {
      return PractiseModule;
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


    var _practise_board_practise_board_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./practise-board/practise-board.component */
    "./src/app/modules/manage/practise/practise-board/practise-board.component.ts");
    /* harmony import */


    var _app_modules_manage_practise_practise_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/modules/manage/practise/practise-routing.module */
    "./src/app/modules/manage/practise/practise-routing.module.ts");
    /* harmony import */


    var _app_shared_basic_components_basic_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/shared/basic-components/basic.module */
    "./src/app/shared/basic-components/basic.module.ts");
    /* harmony import */


    var _practise_list_practise_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./practise-list/practise-list.component */
    "./src/app/modules/manage/practise/practise-list/practise-list.component.ts");
    /* harmony import */


    var _app_modules_manage_practise_practise_create_practise_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app/modules/manage/practise/practise-create/practise-create.component */
    "./src/app/modules/manage/practise/practise-create/practise-create.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    let PractiseModule = class PractiseModule {};
    PractiseModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_practise_board_practise_board_component__WEBPACK_IMPORTED_MODULE_3__["PractiseBoardComponent"], _practise_list_practise_list_component__WEBPACK_IMPORTED_MODULE_6__["PractiseListComponent"], _app_modules_manage_practise_practise_create_practise_create_component__WEBPACK_IMPORTED_MODULE_7__["PractiseCreateComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _app_modules_manage_practise_practise_routing_module__WEBPACK_IMPORTED_MODULE_4__["PractiseRoutingModule"], _app_shared_basic_components_basic_module__WEBPACK_IMPORTED_MODULE_5__["BasicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]],
      exports: [_app_modules_manage_practise_practise_routing_module__WEBPACK_IMPORTED_MODULE_4__["PractiseRoutingModule"]]
    })], PractiseModule);
    /***/
  }
}]);
//# sourceMappingURL=app-modules-manage-practise-practise-module-es5.e97c57fb780906f5d34b.js.map