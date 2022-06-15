(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-manage-predictions-predictions-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/predictions/predictions-board/predictions-board.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/predictions/predictions-board/predictions-board.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesManagePredictionsPredictionsBoardPredictionsBoardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header-route-menu-light [currentPageName]=\"'Prediction File'\" [moduleName]=\"'Question Bank'\"\n></header-route-menu-light>\n<div class=\"row\">\n    <ng-container *ngFor=\"let qb of questionBank.questionBank\">\n        <div class=\"col-md-6 col-xl-3\">\n            <question-card [questionBank]=\"qb\" (click)=\"goToList(qb)\" [isManage]=\"true\"></question-card>\n        </div>\n    </ng-container>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/predictions/predictions-create/predictions-create.component.html":
  /*!***************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/predictions/predictions-create/predictions-create.component.html ***!
    \***************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesManagePredictionsPredictionsCreatePredictionsCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header-route-menu-light [currentPageName]=\"'Prediction File'\" [moduleName]=\"moduleName\"></header-route-menu-light>\n\n<div class=\"container py-3\">\n  <div>\n    <div class=\"d-flex step-wrapper\">\n      <div class=\"step-1\" [ngClass]=\"{ 'step-active': isStep1 == true }\">\n        <p>Step 1</p>\n      </div>\n      <div class=\"step-2\" [ngClass]=\"{ 'step-active': isStep1 == false }\">\n        <p>Step 2</p>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"isStep1\">\n    <form [formGroup]=\"createForm\">\n      <div class=\"row my-2\">\n        <div class=\"col-md-12 mb-2\">\n          <label-text>Prediction File Name</label-text>\n          <input type=\"text\" formControlName=\"name\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" placeholder=\"Write Prediction File Name\" />\n        </div>\n      </div>\n      <div class=\"row mb-2\">\n        <div class=\"col-md-12 mb-2\">\n          <label-text>Select Plan Type</label-text>\n          <select class=\"select-box form-control\" formControlName=\"type\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.type.errors }\">\n            <option value=\"\" disabled selected hidden>Select Type</option>\n            <option *ngFor=\"let type of typeList;let i=index\" [ngValue]=\"type.questionType\">{{ type.questionName }}\n            </option>\n          </select>\n\n        </div>\n      </div>\n\n      <div class=\"footer-button-block\">\n        <button class=\"btn btn-cancel\" (click)=\"goBack()\">Cancel</button>\n        <button class=\"btn btn-next\" (click)=\"goToStep2()\">Continue</button>\n      </div>\n\n\n    </form>\n  </div>\n  <div *ngIf=\"!isStep1\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <show-entries (data)=\"selectedData($event)\"></show-entries>\n      </div>\n      <div class=\"col-md-6\">\n        <search-box [hint]=\"'Search Question'\" (searchData)=\"searchDatas($event)\" [isEmit]=\"true\"></search-box>\n      </div>\n    </div>\n\n    <ng-container *ngIf=\"!selectedLists; else showData\">\n      <div>\n        <table-loading [tType]=\"'c4-1'\"></table-loading>\n      </div>\n    </ng-container>\n    <ng-template #showData>\n      <table role=\"table\" class=\"table-responsive\">\n        <thead role=\"rowgroup\">\n          <tr role=\"row\">\n            <th role=\"columnheader\" (click)=\"fitter('createdDate')\" class=\"fitter-able\"\n              [class.fitter-active]='tableFilter.sortColumn==\"createdDate\"'>Created Date</th>\n\n            <th role=\"columnheader\" (click)=\"fitter('name')\" class=\"fitter-able\"\n              [class.fitter-active]='tableFilter.sortColumn==\"name\"'>Name</th>\n\n            <th role=\"columnheader\">Question Name</th>\n\n            <th role=\"columnheader\" style=\"width: 20%;\">Action</th>\n          </tr>\n        </thead>\n\n        <tbody role=\"rowgroup\">\n          <ng-container *ngFor=\"let data of selectedLists\">\n            <tr role=\"row\" (click)=\"selectfile(data.questionId)\"\n              [class.table-selected]=\"selectedQues.includes(data.questionId) == true\">\n              <td role=\"cell\">{{data.createdDate | defaultDate}}</td>\n\n              <td role=\"cell\">{{data.name}}</td>\n              <td role=\"cell\">{{data.questionType}}</td>\n              <td>\n                <action-btn-gp [btnName]=\"'view'\" [directLink]=\"\" isNewTab=\"true\"></action-btn-gp>\n              </td>\n            </tr>\n          </ng-container>\n\n          <tr *ngIf=\"tableFilter.totalCount == 0\" role=\"row\">\n            <td colspan=\"4\" class=\"text-center\">\n              No Data Exit\n            </td>\n          </tr>\n        </tbody>\n\n      </table>\n\n      <pagination [tableFilter]='tableFilter' (getPage)=\"changePage($event)\">\n      </pagination>\n\n      <div class=\"footer-button-block\">\n        <button class=\"btn btn-cancel\" (click)=\"backStep1()\">Cancel</button>\n        <button class=\"btn btn-next\" (click)=\"checkAvaiable()\">Submit</button>\n      </div>\n\n      <dialog-box *ngIf=\"isDialog\" (onconfirm)=\"checkconfirm($event)\" [dialogEntry]=\"dialog\"></dialog-box>\n\n    </ng-template>\n\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/predictions/predictions-list/predictions-list.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/predictions/predictions-list/predictions-list.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesManagePredictionsPredictionsListPredictionsListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header-route-menu-light [currentPageName]=\"'Question Bank'\" [moduleName]=\"currentModule\"\n    [createRoute]=\"'alchemist-academy/manage/full-mock-test/create'\"></header-route-menu-light>\n\n\n<div class=\"row\">\n    <div class=\"col-md-6 p-0\">\n        <show-entries></show-entries>\n    </div>\n    <div class=\"col-md-6 p-0\">\n        <search-box [hint]=\"'Search'\"></search-box>\n    </div>\n</div>\n<ng-container *ngIf=\"isLoading; else showData\">\n    <div>\n        <table-loading [tType]=\"'c3-3'\"></table-loading>\n    </div>\n\n</ng-container>\n<ng-template #showData>\n    <table role=\"table\" class=\"table-responsive\">\n        <thead role=\"rowgroup\">\n            <tr role=\"row\">\n                <th role=\"columnheader\" class=\"fitter-able\" (click)=\"fitter('name')\"\n                    [class.fitter-active]='tableFilter.sortColumn==\"name\"'>Name</th>\n\n                <th role=\"columnheader\" style=\"width: 30%;\">Question Type</th>\n\n                <th role=\"columnheader\" style=\"width: 15%;\">Action</th>\n            </tr>\n        </thead>\n\n\n        <tbody role=\"rowgroup\" [class]=\"currentModule.moduleName\">\n            <ng-container *ngFor=\"let data of predictions\">\n                <tr role=\"row\">\n                    <td role=\"cell\">{{data.name}}</td>\n                    <td role=\"cell\">{{data.questionName}}</td>\n                    <td>\n                        <action-btn-gp [btnName]=\"'start'\" [data]=\"data\" *ngIf=\"data.isActive == 'Not Active'\"\n                            (onSubmit)=\"startClass($event)\"></action-btn-gp>\n                        <action-btn-gp [btnName]=\"'end'\" [data]=\"data\" *ngIf=\"data.isActive == 'Running'\"\n                            (onSubmit)=\"startClass($event)\"></action-btn-gp>\n                        <action-btn-gp [btnName]=\"'edit'\" [editId]=\"data.questionId\"></action-btn-gp>\n                        <action-btn-gp [btnName]=\"'delete'\" [data]=\"data\" (onSubmit)=\"deletePrediction($event)\">\n                        </action-btn-gp>\n                    </td>\n\n            </ng-container>\n\n\n\n            <tr *ngIf=\"tableFilter.totalCount == 0\" role=\"row\">\n                <td colspan=\"4\" class=\"text-center\">\n                    No Data Exit\n                </td>\n            </tr>\n        </tbody>\n\n    </table>\n\n    <pagination [totalCount]='tableFilter.totalCount'>\n    </pagination>\n\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/predictions/predictions/predictions.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/predictions/predictions/predictions.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesManagePredictionsPredictionsPredictionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<header-route-menu [currentPageName]=\"'Manage'\"></header-route-menu>\n\n<div class=\"container-fluid mt--6\">\n\n   <router-outlet></router-outlet>\n   \n\n</div>\n\n\n\n";
    /***/
  },

  /***/
  "./src/app/modules/manage/predictions/predictions-board/predictions-board.component.css":
  /*!**********************************************************************************************!*\
    !*** ./src/app/modules/manage/predictions/predictions-board/predictions-board.component.css ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesManagePredictionsPredictionsBoardPredictionsBoardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlL3ByZWRpY3Rpb25zL3ByZWRpY3Rpb25zLWJvYXJkL3ByZWRpY3Rpb25zLWJvYXJkLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/manage/predictions/predictions-board/predictions-board.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/modules/manage/predictions/predictions-board/predictions-board.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: PredictionsBoardComponent */

  /***/
  function srcAppModulesManagePredictionsPredictionsBoardPredictionsBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PredictionsBoardComponent", function () {
      return PredictionsBoardComponent;
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

    let PredictionsBoardComponent = class PredictionsBoardComponent {
      constructor(_activeRoute, _router) {
        this._activeRoute = _activeRoute;
        this._router = _router;
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

    PredictionsBoardComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    PredictionsBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-predictions-board',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./predictions-board.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/predictions/predictions-board/predictions-board.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./predictions-board.component.css */
      "./src/app/modules/manage/predictions/predictions-board/predictions-board.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], PredictionsBoardComponent);
    /***/
  },

  /***/
  "./src/app/modules/manage/predictions/predictions-create/predictions-create.component.css":
  /*!************************************************************************************************!*\
    !*** ./src/app/modules/manage/predictions/predictions-create/predictions-create.component.css ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesManagePredictionsPredictionsCreatePredictionsCreateComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n\n.hidden {\n    overflow-x: hidden;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYW5hZ2UvcHJlZGljdGlvbnMvcHJlZGljdGlvbnMtY3JlYXRlL3ByZWRpY3Rpb25zLWNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYW5hZ2UvcHJlZGljdGlvbnMvcHJlZGljdGlvbnMtY3JlYXRlL3ByZWRpY3Rpb25zLWNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuLmhpZGRlbiB7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/manage/predictions/predictions-create/predictions-create.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/modules/manage/predictions/predictions-create/predictions-create.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: PredictionsCreateComponent */

  /***/
  function srcAppModulesManagePredictionsPredictionsCreatePredictionsCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PredictionsCreateComponent", function () {
      return PredictionsCreateComponent;
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

    let PredictionsCreateComponent = class PredictionsCreateComponent {
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
          sortDirection: 'desc',
          search: null
        }; // boolean

        this.isStep1 = true;
        this.submitted = false;
        this.isAsc = false;
        this.isDialog = false;
        this.isProgress = true;
        this.createForm = this.formBuilder.group({
          name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          type: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
      }

      ngOnInit() {
        this.moduleName = this._activeRoute.snapshot.params['moduleName'];
        this.typeList = this._activeRoute.snapshot.data['questionType'].questions;
        let data = this._activeRoute.snapshot.data['predictionDetail'];
        if (data) this.getDataEditForm(data);
      }

      getDataEditForm(data) {
        this.predictionID = data.predictionId;
        this.createForm = this.formBuilder.group({
          name: [data.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          type: [data.questionType, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
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
            sortDirection: 'desc'
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
          sortDirection: 'desc'
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
          questionType: this.createForm.value.type
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
        obj.questionType = this.createForm.value.type;
        obj.questions = this.selectedQues;
        this.subscription = this._saveService.onSavePrediction(obj, this.moduleName, this.predictionID).subscribe(res => {
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
        this.tableFilter.sortDirection = this.isAsc ? 'asc' : 'desc';
        this.isAsc = !this.isAsc ? this.isAsc = true : this.isAsc = false;
        this.tableFilter.sortColumn = sortColumn;
        this.getSelectLists();
      }

      ngOnDestroy() {
        if (this.subscription) this.subscription.unsubscribe();
      }

    };

    PredictionsCreateComponent.ctorParameters = () => [{
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

    PredictionsCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-predictions-create',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./predictions-create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/predictions/predictions-create/predictions-create.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./predictions-create.component.css */
      "./src/app/modules/manage/predictions/predictions-create/predictions-create.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _app_core_http_save_service__WEBPACK_IMPORTED_MODULE_5__["SaveService"], _app_core_http_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"], _app_core_http_table_list_service__WEBPACK_IMPORTED_MODULE_6__["TableListService"]])], PredictionsCreateComponent);
    /***/
  },

  /***/
  "./src/app/modules/manage/predictions/predictions-list/predictions-list.component.css":
  /*!********************************************************************************************!*\
    !*** ./src/app/modules/manage/predictions/predictions-list/predictions-list.component.css ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesManagePredictionsPredictionsListPredictionsListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* table responsive */\n\n@media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {\n    /*\n                      Label the data\n                  You could also use a data-* attribute and content for this. That way \"bloats\" the HTML, this way means you need to keep HTML and CSS in sync. Lea Verou has a clever way to handle with text-shadow.\n                      */\n    td:nth-of-type(1):before {\n        content: \"Name\";\n    }\n    td:nth-of-type(2):before {\n        content: \"Question Type\";\n    }\n    td:nth-of-type(3):before {\n        content: \"Action\";\n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYW5hZ2UvcHJlZGljdGlvbnMvcHJlZGljdGlvbnMtbGlzdC9wcmVkaWN0aW9ucy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUJBQXFCOztBQUVyQjtJQUNJOzs7dUJBR21CO0lBQ25CO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21hbmFnZS9wcmVkaWN0aW9ucy9wcmVkaWN0aW9ucy1saXN0L3ByZWRpY3Rpb25zLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRhYmxlIHJlc3BvbnNpdmUgKi9cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCksIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAvKlxuICAgICAgICAgICAgICAgICAgICAgIExhYmVsIHRoZSBkYXRhXG4gICAgICAgICAgICAgICAgICBZb3UgY291bGQgYWxzbyB1c2UgYSBkYXRhLSogYXR0cmlidXRlIGFuZCBjb250ZW50IGZvciB0aGlzLiBUaGF0IHdheSBcImJsb2F0c1wiIHRoZSBIVE1MLCB0aGlzIHdheSBtZWFucyB5b3UgbmVlZCB0byBrZWVwIEhUTUwgYW5kIENTUyBpbiBzeW5jLiBMZWEgVmVyb3UgaGFzIGEgY2xldmVyIHdheSB0byBoYW5kbGUgd2l0aCB0ZXh0LXNoYWRvdy5cbiAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgIHRkOm50aC1vZi10eXBlKDEpOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiTmFtZVwiO1xuICAgIH1cbiAgICB0ZDpudGgtb2YtdHlwZSgyKTpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlF1ZXN0aW9uIFR5cGVcIjtcbiAgICB9XG4gICAgdGQ6bnRoLW9mLXR5cGUoMyk6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJBY3Rpb25cIjtcbiAgICB9XG5cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/manage/predictions/predictions-list/predictions-list.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/modules/manage/predictions/predictions-list/predictions-list.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: PredictionsListComponent */

  /***/
  function srcAppModulesManagePredictionsPredictionsListPredictionsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PredictionsListComponent", function () {
      return PredictionsListComponent;
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

    let PredictionsListComponent = class PredictionsListComponent {
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

          this.gePredictionsList();
        });
      }

      gePredictionsList() {
        this.isLoading = true;
        this.subscription = this._tableService.getPredictionList(this.tableFilter, this.currentModule, 'prediction').subscribe(res => {
          this.predictions = res.questions;
          this.tableFilter = res.filter;
          this.isLoading = false;
        });
      }

      startClass(data) {
        let obj = {
          isActive: data.isProgess
        };
        this.subscription = this._tableService.onStartClassByPrediction(data.data.questionId, obj, this.currentModule).subscribe(res => {
          this.gePredictionsList();
        });
      }

      deletePrediction(data) {
        this.subscription = this._tableService.onDeleteOtherModule(data.questionId, this.currentModule.toLowerCase(), 'prediction').subscribe(res => {
          this.gePredictionsList();
        });
      }

      fitter(sortColumn) {
        this.tableFilter.sortDirection = this.isAsc ? 'asc' : 'desc';
        this.isAsc = !this.isAsc ? this.isAsc = true : this.isAsc = false;
        this.tableFilter.sortColumn = sortColumn;
        this.gePredictionsList();
      }

      ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        if (this.subscription) this.subscription.unsubscribe();
      }

    };

    PredictionsListComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _app_core_http_table_list_service__WEBPACK_IMPORTED_MODULE_3__["TableListService"]
    }];

    PredictionsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-predictions-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./predictions-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/predictions/predictions-list/predictions-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./predictions-list.component.css */
      "./src/app/modules/manage/predictions/predictions-list/predictions-list.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _app_core_http_table_list_service__WEBPACK_IMPORTED_MODULE_3__["TableListService"]])], PredictionsListComponent);
    /***/
  },

  /***/
  "./src/app/modules/manage/predictions/predictions-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/modules/manage/predictions/predictions-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: PredictionsRoutingModule */

  /***/
  function srcAppModulesManagePredictionsPredictionsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PredictionsRoutingModule", function () {
      return PredictionsRoutingModule;
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


    var _app_modules_manage_reslovers_other_detail_reslover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/modules/manage/reslovers/other-detail.reslover */
    "./src/app/modules/manage/reslovers/other-detail.reslover.ts");
    /* harmony import */


    var _app_modules_manage_reslovers_otherQuestion_reslover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/modules/manage/reslovers/otherQuestion.reslover */
    "./src/app/modules/manage/reslovers/otherQuestion.reslover.ts");
    /* harmony import */


    var _app_modules_manage_reslovers_questions_type_reslover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/modules/manage/reslovers/questions-type.reslover */
    "./src/app/modules/manage/reslovers/questions-type.reslover.ts");
    /* harmony import */


    var _app_modules_manage_predictions_predictions_board_predictions_board_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/modules/manage/predictions/predictions-board/predictions-board.component */
    "./src/app/modules/manage/predictions/predictions-board/predictions-board.component.ts");
    /* harmony import */


    var _app_modules_manage_predictions_predictions_create_predictions_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app/modules/manage/predictions/predictions-create/predictions-create.component */
    "./src/app/modules/manage/predictions/predictions-create/predictions-create.component.ts");
    /* harmony import */


    var _app_modules_manage_predictions_predictions_list_predictions_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @app/modules/manage/predictions/predictions-list/predictions-list.component */
    "./src/app/modules/manage/predictions/predictions-list/predictions-list.component.ts");
    /* harmony import */


    var _app_modules_manage_predictions_predictions_predictions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @app/modules/manage/predictions/predictions/predictions.component */
    "./src/app/modules/manage/predictions/predictions/predictions.component.ts");

    const routes = [{
      path: "",
      component: _app_modules_manage_predictions_predictions_predictions_component__WEBPACK_IMPORTED_MODULE_9__["PredictionsComponent"],
      resolve: {
        questionBank: _app_modules_manage_reslovers_otherQuestion_reslover__WEBPACK_IMPORTED_MODULE_4__["OtherQuestionResolver"]
      },
      data: {
        type: 'prediction'
      },
      children: [{
        path: "",
        component: _app_modules_manage_predictions_predictions_board_predictions_board_component__WEBPACK_IMPORTED_MODULE_6__["PredictionsBoardComponent"]
      }, {
        path: ":moduleName",
        component: _app_modules_manage_predictions_predictions_list_predictions_list_component__WEBPACK_IMPORTED_MODULE_8__["PredictionsListComponent"]
      }, {
        path: ":moduleName/create",
        component: _app_modules_manage_predictions_predictions_create_predictions_create_component__WEBPACK_IMPORTED_MODULE_7__["PredictionsCreateComponent"],
        resolve: {
          questionType: _app_modules_manage_reslovers_questions_type_reslover__WEBPACK_IMPORTED_MODULE_5__["QuestionTypeResolver"]
        }
      }, {
        path: ":moduleName/create/:detailId",
        component: _app_modules_manage_predictions_predictions_create_predictions_create_component__WEBPACK_IMPORTED_MODULE_7__["PredictionsCreateComponent"],
        resolve: {
          questionType: _app_modules_manage_reslovers_questions_type_reslover__WEBPACK_IMPORTED_MODULE_5__["QuestionTypeResolver"],
          predictionDetail: _app_modules_manage_reslovers_other_detail_reslover__WEBPACK_IMPORTED_MODULE_3__["OtherDetailResolver"]
        },
        data: {
          detailName: 'prediction'
        }
      }]
    }];
    let PredictionsRoutingModule = class PredictionsRoutingModule {};
    PredictionsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: [_app_modules_manage_reslovers_otherQuestion_reslover__WEBPACK_IMPORTED_MODULE_4__["OtherQuestionResolver"], _app_modules_manage_reslovers_questions_type_reslover__WEBPACK_IMPORTED_MODULE_5__["QuestionTypeResolver"], _app_modules_manage_reslovers_other_detail_reslover__WEBPACK_IMPORTED_MODULE_3__["OtherDetailResolver"]]
    })], PredictionsRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/manage/predictions/predictions.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/modules/manage/predictions/predictions.module.ts ***!
    \******************************************************************/

  /*! exports provided: PredictionsModule */

  /***/
  function srcAppModulesManagePredictionsPredictionsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PredictionsModule", function () {
      return PredictionsModule;
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


    var _predictions_list_predictions_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./predictions-list/predictions-list.component */
    "./src/app/modules/manage/predictions/predictions-list/predictions-list.component.ts");
    /* harmony import */


    var _predictions_create_predictions_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./predictions-create/predictions-create.component */
    "./src/app/modules/manage/predictions/predictions-create/predictions-create.component.ts");
    /* harmony import */


    var _app_modules_manage_predictions_predictions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/modules/manage/predictions/predictions-routing.module */
    "./src/app/modules/manage/predictions/predictions-routing.module.ts");
    /* harmony import */


    var _predictions_board_predictions_board_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./predictions-board/predictions-board.component */
    "./src/app/modules/manage/predictions/predictions-board/predictions-board.component.ts");
    /* harmony import */


    var _app_shared_basic_components_basic_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app/shared/basic-components/basic.module */
    "./src/app/shared/basic-components/basic.module.ts");
    /* harmony import */


    var _predictions_predictions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./predictions/predictions.component */
    "./src/app/modules/manage/predictions/predictions/predictions.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    let PredictionsModule = class PredictionsModule {};
    PredictionsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_predictions_list_predictions_list_component__WEBPACK_IMPORTED_MODULE_3__["PredictionsListComponent"], _predictions_create_predictions_create_component__WEBPACK_IMPORTED_MODULE_4__["PredictionsCreateComponent"], _predictions_board_predictions_board_component__WEBPACK_IMPORTED_MODULE_6__["PredictionsBoardComponent"], _predictions_predictions_component__WEBPACK_IMPORTED_MODULE_8__["PredictionsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _app_modules_manage_predictions_predictions_routing_module__WEBPACK_IMPORTED_MODULE_5__["PredictionsRoutingModule"], _app_shared_basic_components_basic_module__WEBPACK_IMPORTED_MODULE_7__["BasicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]],
      exports: [_app_modules_manage_predictions_predictions_routing_module__WEBPACK_IMPORTED_MODULE_5__["PredictionsRoutingModule"]]
    })], PredictionsModule);
    /***/
  },

  /***/
  "./src/app/modules/manage/predictions/predictions/predictions.component.css":
  /*!**********************************************************************************!*\
    !*** ./src/app/modules/manage/predictions/predictions/predictions.component.css ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesManagePredictionsPredictionsPredictionsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlL3ByZWRpY3Rpb25zL3ByZWRpY3Rpb25zL3ByZWRpY3Rpb25zLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/manage/predictions/predictions/predictions.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/modules/manage/predictions/predictions/predictions.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: PredictionsComponent */

  /***/
  function srcAppModulesManagePredictionsPredictionsPredictionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PredictionsComponent", function () {
      return PredictionsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let PredictionsComponent = class PredictionsComponent {
      constructor() {}

      ngOnInit() {}

    };
    PredictionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-predictions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./predictions.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/predictions/predictions/predictions.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./predictions.component.css */
      "./src/app/modules/manage/predictions/predictions/predictions.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PredictionsComponent);
    /***/
  }
}]);
//# sourceMappingURL=app-modules-manage-predictions-predictions-module-es5.6ae40002ae1d002e4bae.js.map