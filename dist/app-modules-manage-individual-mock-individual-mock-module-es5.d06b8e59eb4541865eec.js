(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-manage-individual-mock-individual-mock-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/individual-mock/individual-mock-create/individual-mock-create.component.html":
  /*!***************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/individual-mock/individual-mock-create/individual-mock-create.component.html ***!
    \***************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesManageIndividualMockIndividualMockCreateIndividualMockCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header-route-menu-light [currentPageName]=\"'Individual Mock Test'\" [moduleName]=\"moduleName\"></header-route-menu-light>\n\n<div class=\"container\">\n    <div class=\"d-flex step-wrapper\">\n        <div class=\"step-1\" [ngClass]=\"{ 'step-active': isStep1 == true }\">\n            <p>Step 1</p>\n        </div>\n        <div class=\"step-2\" [ngClass]=\"{ 'step-active': isStep1 == false }\">\n            <p>Step 2</p>\n        </div>\n    </div>\n\n    <div *ngIf=\"isStep1\">\n        <form [formGroup]=\"createForm\">\n            <div class=\"row my-2\">\n                <div class=\"col-md-12 mb-2\">\n                    <label-text>Mock Test Title</label-text>\n                    <input type=\"text\" formControlName=\"name\" class=\"form-control pb_height-50 reverse;\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" placeholder=\"Write Mock Test Title\" />\n                </div>\n            </div>\n            <div class=\"row mb-2\">\n                <div class=\"col-md-12 mb-2\">\n                    <label-text>Select Status</label-text>\n                    <select  class=\"select-box form-control\" formControlName=\"status\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.status.errors }\">\n                        <option value=\"\" disabled selected hidden>Select Status</option>\n\n                        <option *ngFor=\"let status of statusLists\" [ngValue]=\"status\">{{ status }}\n                        </option>\n                    </select>\n               \n                </div>\n            </div>\n            <div class=\"footer-button-block\">\n                <cancel-btn>Cancel</cancel-btn>\n                <button class=\"btn btn-next\" (click)=\"goToStep2()\">Continue</button>\n            </div>\n        </form>\n    </div>\n    <dialog-box *ngIf=\"isDialog\" [dialogEntry]=\"dialog\" (onconfirm)=\"onSubmit($event)\"></dialog-box>\n    <div *ngIf=\"!isStep1\" class=\"d-flex flex-column\">\n        <div class=\"tab-wrapper\">\n            <div class=\"d-flex align-items-end\">\n                <button [class]=\"selectedType.questionType === type.questionType ? 'tab-active' : 'tab-default'\"\n                    (click)=\"onTab(type)\" *ngFor=\"let type of qTypeList; let i = index\">\n                    {{ type.questionType }}\n                </button>\n            </div>\n            <div class=\"tab-block\">\n                <div class=\"row my-2 mark-wrapper\">\n                    <div class=\"col-md-12 mb-2\">\n                        <label class=\"lbl-text\">Mark Distribution(OUT OF 100)</label>\n                        <input type=\"text\" class=\"form-control\" \n                            (input)=\"onInput($event.target.value)\"\n                            oninput=\"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');\"\n                            [ngClass]=\"{ 'is-invalid': submitted && !getMockObj.markDistribution }\"\n                            placeholder=\"Write Mock Test Title\" #markDistribution/>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <show-entries (data)=\"selectedData($event)\"></show-entries>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <search-box [hint]=\"'Search Question'\" (searchData)=\"searchDatas($event)\" [isEmit]=\"true\">\n                        </search-box>\n                    </div>\n                </div>\n\n                <ng-container *ngIf=\"isProgress; else showData\">\n                    <div>\n                        <table-loading [tType]=\"'c4-1'\"></table-loading>\n                    </div>\n                </ng-container>\n                <ng-template #showData>\n                    <table role=\"table\" class=\"table-responsive\">\n                        <thead role=\"rowgroup\">\n                            <tr role=\"row\">\n                                <th role=\"columnheader\" (click)=\"fitter('createdDate')\" class=\"fitter-able\"\n                                    [class.fitter-active]='tableFilter.sortColumn==\"createdDate\"'>Created Date</th>\n\n                                <th role=\"columnheader\" (click)=\"fitter('name')\" class=\"fitter-able\"\n                                    [class.fitter-active]='tableFilter.sortColumn==\"name\"'>Name</th>\n\n                                <th role=\"columnheader\">Question Name</th>\n\n                                <th role=\"columnheader\" style=\"width: 20%;\">Action</th>\n                            </tr>\n                        </thead>\n\n                        <tbody role=\"rowgroup\">\n                            <ng-container *ngFor=\"let data of questionLists\">\n                                <tr role=\"row\" (click)=\"selectfile(data.questionId)\"\n                                    [class.table-selected]=\"isQIdInclude(data.questionId)== true\">\n                                    <td role=\"cell\">{{data.createdDate | defaultDate}}</td>\n\n                                    <td role=\"cell\">{{data.name}}</td>\n                                    <td role=\"cell\">{{data.questionType}}</td>\n                                    <td>\n                                        <action-btn-gp [btnName]=\"'view'\" [directLink]=\"\" isNewTab=\"true\">\n                                        </action-btn-gp>\n                                    </td>\n                                </tr>\n                            </ng-container>\n\n                            <tr *ngIf=\"tableFilter.totalCount == 0\" role=\"row\">\n                                <td colspan=\"4\" class=\"text-center\">\n                                    No Data Exit\n                                </td>\n                            </tr>\n                        </tbody>\n\n                    </table>\n\n                        <pagination [tableFilter]='tableFilter' (getPage)=\"changePage($event)\">\n                        </pagination>\n\n                    <div class=\"footer-button-block\">\n                        <button class=\"btn btn-cancel\" (click)=\"backStep1()\">Cancel</button>\n                        <button class=\"btn btn-next\" (click)=\"onSave()\">Submit</button>\n                    </div>\n\n                    <dialog-box *ngIf=\"isDialog\" (onconfirm)=\"checkconfirm($event)\" [dialogEntry]=\"dialog\"></dialog-box>\n\n                </ng-template>\n            </div>\n\n        </div>\n\n\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/individual-mock/mock-board/mock-board.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/individual-mock/mock-board/mock-board.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesManageIndividualMockMockBoardMockBoardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header-route-menu-light [currentPageName]=\"'Mock Test'\" [moduleName]=\"'Question Bank'\"\n></header-route-menu-light>\n<div class=\"row\">\n    <ng-container *ngFor=\"let qb of questionBank.questionBank\">\n        <div class=\"col-md-6 col-xl-3\">\n            <question-card [questionBank]=\"qb\" (click)=\"goToList(qb)\" [isManage]=\"true\"></question-card>\n        </div>\n    </ng-container>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/individual-mock/mock-lists/mock-lists.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/individual-mock/mock-lists/mock-lists.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesManageIndividualMockMockListsMockListsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header-route-menu-light [currentPageName]=\"'Question Bank'\" [moduleName]=\"currentModule\"\n    [prevUrl]=\"'../'\"\n    [createRoute]=\"'alchemist-academy/manage/full-mock-test/create'\"></header-route-menu-light>\n\n\n<div class=\"row\">\n    <div class=\"col-md-6 p-0\">\n        <show-entries></show-entries>\n    </div>\n    <div class=\"col-md-6 p-0\">\n        <search-box [hint]=\"'Search'\"></search-box>\n    </div>\n</div>\n<ng-container *ngIf=\"isLoading; else showData\">\n    <div>\n        <table-loading [tType]=\"'c3-3'\"></table-loading>\n    </div>\n\n</ng-container>\n<ng-template #showData>\n    <table role=\"table\" class=\"table-responsive\">\n        <thead role=\"rowgroup\">\n            <tr role=\"row\">\n                <th role=\"columnheader\" class=\"fitter-able\" (click)=\"fitter('name')\"\n                    [class.fitter-active]='tableFilter.sortColumn==\"name\"'>Name</th>\n\n                <th role=\"columnheader\" style=\"width: 30%;\">Status</th>\n\n                <th role=\"columnheader\" style=\"width: 15%;\">Action</th>\n            </tr>\n        </thead>\n\n\n        <tbody role=\"rowgroup\" [class]=\"currentModule.moduleName\">\n            <ng-container *ngFor=\"let data of mocks\">\n                <tr role=\"row\">\n                    <td role=\"cell\">{{data.name}}</td>\n                    <td role=\"cell\">{{data.status}}</td>\n                    <td>\n                        <action-btn-gp [btnName]=\"'start'\" [data]=\"data\" *ngIf=\"data.isActive == 'Not Active'\"\n                            (onSubmit)=\"startClass($event)\"></action-btn-gp>\n                        <action-btn-gp [btnName]=\"'end'\" [data]=\"data\" *ngIf=\"data.isActive == 'Running'\"\n                            (onSubmit)=\"startClass($event)\"></action-btn-gp>\n                        <action-btn-gp [btnName]=\"'edit'\" [editId]=\"data.questionId\"></action-btn-gp>\n                        <action-btn-gp [btnName]=\"'delete'\" [data]=\"data\" (onSubmit)=\"deleteMock($event)\">\n                        </action-btn-gp>\n                    </td>\n\n            </ng-container>\n\n\n\n            <tr *ngIf=\"tableFilter.totalCount == 0\" role=\"row\">\n                <td colspan=\"4\" class=\"text-center\">\n                    No Data Exit\n                </td>\n            </tr>\n        </tbody>\n\n    </table>\n\n        <pagination [totalCount]='tableFilter.totalCount'>\n        </pagination>\n\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/individual-mock/mocks/mocks.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/individual-mock/mocks/mocks.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesManageIndividualMockMocksMocksComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<header-route-menu [currentPageName]=\"'Manage'\"></header-route-menu>\n\n<div class=\"container-fluid mt--6\">\n\n   <router-outlet></router-outlet>\n   \n\n</div>\n\n\n";
    /***/
  },

  /***/
  "./src/app/modules/manage/individual-mock/individual-mock-create/individual-mock-create.component.css":
  /*!************************************************************************************************************!*\
    !*** ./src/app/modules/manage/individual-mock/individual-mock-create/individual-mock-create.component.css ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesManageIndividualMockIndividualMockCreateIndividualMockCreateComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mark-wrapper {\n    background: var(--sidemenu-active);\n    padding: 15px;\n    border-radius: 10px;\n}\n\n.lbl-text{\n    color: var(--primary-color);\n    font-weight: 500;\n    font-size: 18;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYW5hZ2UvaW5kaXZpZHVhbC1tb2NrL2luZGl2aWR1YWwtbW9jay1jcmVhdGUvaW5kaXZpZHVhbC1tb2NrLWNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21hbmFnZS9pbmRpdmlkdWFsLW1vY2svaW5kaXZpZHVhbC1tb2NrLWNyZWF0ZS9pbmRpdmlkdWFsLW1vY2stY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyay13cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlbWVudS1hY3RpdmUpO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmxibC10ZXh0e1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/manage/individual-mock/individual-mock-create/individual-mock-create.component.ts":
  /*!***********************************************************************************************************!*\
    !*** ./src/app/modules/manage/individual-mock/individual-mock-create/individual-mock-create.component.ts ***!
    \***********************************************************************************************************/

  /*! exports provided: IndividualMockCreateComponent */

  /***/
  function srcAppModulesManageIndividualMockIndividualMockCreateIndividualMockCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndividualMockCreateComponent", function () {
      return IndividualMockCreateComponent;
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
    /* harmony import */


    var _app_core_http_table_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/core/http/table-list.service */
    "./src/app/core/http/table-list.service.ts");

    let IndividualMockCreateComponent = class IndividualMockCreateComponent {
      constructor(_activeRoute, formBuilder, _tableService, _saveService) {
        this._activeRoute = _activeRoute;
        this.formBuilder = formBuilder;
        this._tableService = _tableService;
        this._saveService = _saveService;
        this.createForm = this.formBuilder.group({
          name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          status: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.mockData = []; // boolean

        this.isStep1 = true;
        this.submitted = false;
        this.isAsc = true;
        this.isProgress = true;
        this.isDialog = false; // any

        this.statusLists = ["ACTIVE", "INACTIVE"];
        this.dialog = {
          showText: "",
          isDelete: false,
          isWarning: true,
          isconfirmBtn: false
        };
        this.tableFilter = {
          limit: 10,
          page: 1,
          sortColumn: 'createdDate',
          sortDirection: 'desc',
          search: ''
        };
      }

      ngOnInit() {
        this.moduleName = this._activeRoute.snapshot.paramMap.get("moduleName");
        this.qTypeList = this._activeRoute.snapshot.data['questionType'].questions;
        this.selectedType = this.qTypeList[0];
        this.mockId = this._activeRoute.snapshot.paramMap.get("detailId");

        if (this.mockId) {
          this.mockData = this._activeRoute.snapshot.data['mockDetail'];
          this.createForm = this.formBuilder.group({
            name: [this.mockData['name'], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            status: [this.mockData['status'], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
        } else this.mockData = this.generateMockFinalFormat();
      }

      generateMockFinalFormat() {
        let createData = {
          name: '',
          status: '',
          duration: 0
        };
        this.qTypeList.map(q => {
          createData[q.questionType] = {
            markDistribution: '',
            list: []
          };
        });
        return createData;
      }

      goToStep2() {
        this.submitted = true;
        if (this.createForm.invalid) return;else {
          this.isStep1 = false;
          this.mockData.name = this.createForm.value['name'];
          this.mockData.status = this.createForm.value['status'];
          this.submitted = false;
          this.getQuestionLists();
          setTimeout(() => {
            if (this.markDistribution) this.markDistribution.nativeElement.value = this.getMockObj().markDistribution;
          }, 100);
        }
      }

      backStep1() {
        this.isStep1 = true;
      }

      onTab(seletedType) {
        if (!this.getMockObj().markDistribution || !this.getMockObj().list.length) {
          this.isDialog = true;
          this.dialog.showText = "Select Question.";
          return;
        } else {
          this.submitted = false;
          this.addMockData(seletedType);
        }
      }

      addMockData(type) {
        this.isProgress = true;

        if (type.questionType != this.selectedType.questionType) {
          this.selectedType = type;
          if (this.markDistribution) this.markDistribution.nativeElement.value = this.getMockObj().markDistribution;
          this.isProgress = true;
          this.getQuestionLists();
        }
      }

      getQuestionLists() {
        this.subscription = this._tableService.getManageQuestionList(this.tableFilter, {
          moduleType: this.moduleName.toLocaleLowerCase(),
          questionType: this.selectedType.questionType
        }).subscribe(res => {
          this.questionLists = res.questions;
          this.tableFilter = res.filter;
          this.isProgress = false;
        });
      }

      onInput(value) {
        this.getMockObj().markDistribution = value;
      }

      onSave() {
        if (!this.getMockObj().markDistribution || !this.getMockObj().list.length) {
          this.isDialog = true;
          this.dialog.showText = "Select Question.";
        } else {
          if (this.isEmptyMock()) {
            this.isDialog = true;
            this.dialog.showText = "Select question for all questions type.";
            return;
          }

          this.submitted = true;
          this.isProgress = true;
          this.addMockData(this.selectedType);
          this.subscription = this._saveService.onSaveIndividualMock(this.mockData, this.moduleName, this.mockId).subscribe(res => {
            this.isProgress = false;
            this.goBack();
          });
        }
      }

      isEmptyMock() {
        let res;
        this.qTypeList.map(q => {
          res = this.mockData[q.questionType].list.length == 0;

          if (res == true) {
            return res;
          }
        });
        return res;
      }

      changePage(e) {
        this.tableFilter.page = e;
        this.getQuestionLists();
      }

      selectfile(selectedId) {
        if (this.isQIdInclude(selectedId)) this.getMockObj().list.splice(this.getMockObj().list.indexOf(selectedId), 1);else this.getMockObj().list.push(selectedId);
      }

      getMockObj() {
        return this.mockData[this.selectedType.questionType];
      }

      isQIdInclude(qId) {
        return this.getMockObj().list.includes(qId);
      }

      get f() {
        return this.createForm.controls;
      }

      checkconfirm(e) {
        this.isDialog = false;
      }

      goBack() {
        this._saveService.goBackPrev();
      }

      fitter(sortColumn) {
        this.tableFilter.sortDirection = this.isAsc ? 'asc' : 'desc';
        this.isAsc = !this.isAsc ? this.isAsc = true : this.isAsc = false;
        this.tableFilter.sortColumn = sortColumn;
        this.getQuestionLists();
      }

      searchDatas(e) {
        this.tableFilter.search = e;
        this.getQuestionLists();
      }

      ngOnDestroy() {
        if (this.subscription) this.subscription.unsubscribe();
      }

    };

    IndividualMockCreateComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _app_core_http_table_list_service__WEBPACK_IMPORTED_MODULE_5__["TableListService"]
    }, {
      type: _app_core_http_save_service__WEBPACK_IMPORTED_MODULE_4__["SaveService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('markDistribution', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], IndividualMockCreateComponent.prototype, "markDistribution", void 0);
    IndividualMockCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-individual-mock-create',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./individual-mock-create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/individual-mock/individual-mock-create/individual-mock-create.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./individual-mock-create.component.css */
      "./src/app/modules/manage/individual-mock/individual-mock-create/individual-mock-create.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _app_core_http_table_list_service__WEBPACK_IMPORTED_MODULE_5__["TableListService"], _app_core_http_save_service__WEBPACK_IMPORTED_MODULE_4__["SaveService"]])], IndividualMockCreateComponent);
    /***/
  },

  /***/
  "./src/app/modules/manage/individual-mock/individual-mock.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/modules/manage/individual-mock/individual-mock.module.ts ***!
    \**************************************************************************/

  /*! exports provided: IndividualMockModule */

  /***/
  function srcAppModulesManageIndividualMockIndividualMockModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndividualMockModule", function () {
      return IndividualMockModule;
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


    var _mocks_mocks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./mocks/mocks.component */
    "./src/app/modules/manage/individual-mock/mocks/mocks.component.ts");
    /* harmony import */


    var _mock_board_mock_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./mock-board/mock-board.component */
    "./src/app/modules/manage/individual-mock/mock-board/mock-board.component.ts");
    /* harmony import */


    var _mock_lists_mock_lists_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./mock-lists/mock-lists.component */
    "./src/app/modules/manage/individual-mock/mock-lists/mock-lists.component.ts");
    /* harmony import */


    var _app_modules_manage_individual_mock_individualMock_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/modules/manage/individual-mock/individualMock-routing.module */
    "./src/app/modules/manage/individual-mock/individualMock-routing.module.ts");
    /* harmony import */


    var _app_shared_basic_components_basic_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app/shared/basic-components/basic.module */
    "./src/app/shared/basic-components/basic.module.ts");
    /* harmony import */


    var _app_modules_manage_individual_mock_individual_mock_create_individual_mock_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @app/modules/manage/individual-mock/individual-mock-create/individual-mock-create.component */
    "./src/app/modules/manage/individual-mock/individual-mock-create/individual-mock-create.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    let IndividualMockModule = class IndividualMockModule {};
    IndividualMockModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_mocks_mocks_component__WEBPACK_IMPORTED_MODULE_3__["MocksComponent"], _mock_board_mock_board_component__WEBPACK_IMPORTED_MODULE_4__["MockBoardComponent"], _mock_lists_mock_lists_component__WEBPACK_IMPORTED_MODULE_5__["MockListsComponent"], _app_modules_manage_individual_mock_individual_mock_create_individual_mock_create_component__WEBPACK_IMPORTED_MODULE_8__["IndividualMockCreateComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _app_modules_manage_individual_mock_individualMock_routing_module__WEBPACK_IMPORTED_MODULE_6__["IndividualMockRoutingModule"], _app_shared_basic_components_basic_module__WEBPACK_IMPORTED_MODULE_7__["BasicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]],
      exports: [_app_modules_manage_individual_mock_individualMock_routing_module__WEBPACK_IMPORTED_MODULE_6__["IndividualMockRoutingModule"]]
    })], IndividualMockModule);
    /***/
  },

  /***/
  "./src/app/modules/manage/individual-mock/individualMock-routing.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/modules/manage/individual-mock/individualMock-routing.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: IndividualMockRoutingModule */

  /***/
  function srcAppModulesManageIndividualMockIndividualMockRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndividualMockRoutingModule", function () {
      return IndividualMockRoutingModule;
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


    var _app_modules_manage_individual_mock_individual_mock_create_individual_mock_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/modules/manage/individual-mock/individual-mock-create/individual-mock-create.component */
    "./src/app/modules/manage/individual-mock/individual-mock-create/individual-mock-create.component.ts");
    /* harmony import */


    var _app_modules_manage_individual_mock_mock_board_mock_board_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app/modules/manage/individual-mock/mock-board/mock-board.component */
    "./src/app/modules/manage/individual-mock/mock-board/mock-board.component.ts");
    /* harmony import */


    var _app_modules_manage_individual_mock_mock_lists_mock_lists_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @app/modules/manage/individual-mock/mock-lists/mock-lists.component */
    "./src/app/modules/manage/individual-mock/mock-lists/mock-lists.component.ts");
    /* harmony import */


    var _app_modules_manage_individual_mock_mocks_mocks_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @app/modules/manage/individual-mock/mocks/mocks.component */
    "./src/app/modules/manage/individual-mock/mocks/mocks.component.ts");

    const routes = [{
      path: "",
      component: _app_modules_manage_individual_mock_mocks_mocks_component__WEBPACK_IMPORTED_MODULE_9__["MocksComponent"],
      resolve: {
        questionBank: _app_modules_manage_reslovers_otherQuestion_reslover__WEBPACK_IMPORTED_MODULE_4__["OtherQuestionResolver"]
      },
      data: {
        type: 'mock-test'
      },
      children: [{
        path: "",
        component: _app_modules_manage_individual_mock_mock_board_mock_board_component__WEBPACK_IMPORTED_MODULE_7__["MockBoardComponent"]
      }, {
        path: ":moduleName",
        component: _app_modules_manage_individual_mock_mock_lists_mock_lists_component__WEBPACK_IMPORTED_MODULE_8__["MockListsComponent"]
      }, {
        path: ":moduleName/create",
        component: _app_modules_manage_individual_mock_individual_mock_create_individual_mock_create_component__WEBPACK_IMPORTED_MODULE_6__["IndividualMockCreateComponent"],
        resolve: {
          questionType: _app_modules_manage_reslovers_questions_type_reslover__WEBPACK_IMPORTED_MODULE_5__["QuestionTypeResolver"]
        }
      }, {
        path: ":moduleName/create/:detailId",
        component: _app_modules_manage_individual_mock_individual_mock_create_individual_mock_create_component__WEBPACK_IMPORTED_MODULE_6__["IndividualMockCreateComponent"],
        resolve: {
          questionType: _app_modules_manage_reslovers_questions_type_reslover__WEBPACK_IMPORTED_MODULE_5__["QuestionTypeResolver"],
          mockDetail: _app_modules_manage_reslovers_other_detail_reslover__WEBPACK_IMPORTED_MODULE_3__["OtherDetailResolver"]
        },
        data: {
          detailName: 'mock-test'
        }
      }]
    }];
    let IndividualMockRoutingModule = class IndividualMockRoutingModule {};
    IndividualMockRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: [_app_modules_manage_reslovers_otherQuestion_reslover__WEBPACK_IMPORTED_MODULE_4__["OtherQuestionResolver"], _app_modules_manage_reslovers_other_detail_reslover__WEBPACK_IMPORTED_MODULE_3__["OtherDetailResolver"], _app_modules_manage_reslovers_questions_type_reslover__WEBPACK_IMPORTED_MODULE_5__["QuestionTypeResolver"]]
    })], IndividualMockRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/manage/individual-mock/mock-board/mock-board.component.css":
  /*!************************************************************************************!*\
    !*** ./src/app/modules/manage/individual-mock/mock-board/mock-board.component.css ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesManageIndividualMockMockBoardMockBoardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlL2luZGl2aWR1YWwtbW9jay9tb2NrLWJvYXJkL21vY2stYm9hcmQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/manage/individual-mock/mock-board/mock-board.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/modules/manage/individual-mock/mock-board/mock-board.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: MockBoardComponent */

  /***/
  function srcAppModulesManageIndividualMockMockBoardMockBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MockBoardComponent", function () {
      return MockBoardComponent;
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

    let MockBoardComponent = class MockBoardComponent {
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

    MockBoardComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    MockBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mock-board',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mock-board.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/individual-mock/mock-board/mock-board.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mock-board.component.css */
      "./src/app/modules/manage/individual-mock/mock-board/mock-board.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], MockBoardComponent);
    /***/
  },

  /***/
  "./src/app/modules/manage/individual-mock/mock-lists/mock-lists.component.css":
  /*!************************************************************************************!*\
    !*** ./src/app/modules/manage/individual-mock/mock-lists/mock-lists.component.css ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesManageIndividualMockMockListsMockListsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/* table responsive */\n\n@media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {\n    /*\n                      Label the data\n                  You could also use a data-* attribute and content for this. That way \"bloats\" the HTML, this way means you need to keep HTML and CSS in sync. Lea Verou has a clever way to handle with text-shadow.\n                      */\n    td:nth-of-type(1):before {\n        content: \"Name\";\n    }\n    td:nth-of-type(2):before {\n        content: \"Status\";\n    }\n    td:nth-of-type(3):before {\n        content: \"Action\";\n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYW5hZ2UvaW5kaXZpZHVhbC1tb2NrL21vY2stbGlzdHMvbW9jay1saXN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxxQkFBcUI7O0FBRXJCO0lBQ0k7Ozt1QkFHbUI7SUFDbkI7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlL2luZGl2aWR1YWwtbW9jay9tb2NrLWxpc3RzL21vY2stbGlzdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogdGFibGUgcmVzcG9uc2l2ZSAqL1xuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSwgKG1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweCkge1xuICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICAgTGFiZWwgdGhlIGRhdGFcbiAgICAgICAgICAgICAgICAgIFlvdSBjb3VsZCBhbHNvIHVzZSBhIGRhdGEtKiBhdHRyaWJ1dGUgYW5kIGNvbnRlbnQgZm9yIHRoaXMuIFRoYXQgd2F5IFwiYmxvYXRzXCIgdGhlIEhUTUwsIHRoaXMgd2F5IG1lYW5zIHlvdSBuZWVkIHRvIGtlZXAgSFRNTCBhbmQgQ1NTIGluIHN5bmMuIExlYSBWZXJvdSBoYXMgYSBjbGV2ZXIgd2F5IHRvIGhhbmRsZSB3aXRoIHRleHQtc2hhZG93LlxuICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgdGQ6bnRoLW9mLXR5cGUoMSk6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJOYW1lXCI7XG4gICAgfVxuICAgIHRkOm50aC1vZi10eXBlKDIpOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiU3RhdHVzXCI7XG4gICAgfVxuICAgIHRkOm50aC1vZi10eXBlKDMpOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiQWN0aW9uXCI7XG4gICAgfVxuXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/manage/individual-mock/mock-lists/mock-lists.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/modules/manage/individual-mock/mock-lists/mock-lists.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: MockListsComponent */

  /***/
  function srcAppModulesManageIndividualMockMockListsMockListsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MockListsComponent", function () {
      return MockListsComponent;
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

    let MockListsComponent = class MockListsComponent {
      constructor(_activeRoute, _tableService) {
        this._activeRoute = _activeRoute;
        this._tableService = _tableService;
        this.tableFilter = {};
        this.isLoading = false;
      }

      ngOnInit() {
        this.isLoading = true;
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

          this.getMockList();
        });
      }

      getMockList() {
        this.subscription = this._tableService.getMockList(this.tableFilter, this.currentModule).subscribe(res => {
          this.mocks = res.questions;
          this.tableFilter = res.filter;
          this.isLoading = false;
        });
      }

      startClass(data) {
        let obj = {
          isActive: data.isProgess
        };
        this.subscription = this._tableService.onStartClassByPrediction(data.data.questionId, obj, this.currentModule).subscribe(res => {
          this.getMockList();
        });
      }

      deleteMock(data) {
        this.subscription = this._tableService.onDeleteOtherModule(data.questionId, this.currentModule.toLowerCase(), 'mock-test').subscribe(res => {
          this.getMockList();
        });
      }

      ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        if (this.subscription) this.subscription.unsubscribe();
      }

    };

    MockListsComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_3__["TableListService"]
    }];

    MockListsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mock-lists',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mock-lists.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/individual-mock/mock-lists/mock-lists.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mock-lists.component.css */
      "./src/app/modules/manage/individual-mock/mock-lists/mock-lists.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_3__["TableListService"]])], MockListsComponent);
    /***/
  },

  /***/
  "./src/app/modules/manage/individual-mock/mocks/mocks.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/modules/manage/individual-mock/mocks/mocks.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesManageIndividualMockMocksMocksComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlL2luZGl2aWR1YWwtbW9jay9tb2Nrcy9tb2Nrcy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/manage/individual-mock/mocks/mocks.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/modules/manage/individual-mock/mocks/mocks.component.ts ***!
    \*************************************************************************/

  /*! exports provided: MocksComponent */

  /***/
  function srcAppModulesManageIndividualMockMocksMocksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MocksComponent", function () {
      return MocksComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let MocksComponent = class MocksComponent {
      constructor() {}

      ngOnInit() {}

    };
    MocksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mocks',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mocks.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/individual-mock/mocks/mocks.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mocks.component.css */
      "./src/app/modules/manage/individual-mock/mocks/mocks.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], MocksComponent);
    /***/
  }
}]);
//# sourceMappingURL=app-modules-manage-individual-mock-individual-mock-module-es5.d06b8e59eb4541865eec.js.map