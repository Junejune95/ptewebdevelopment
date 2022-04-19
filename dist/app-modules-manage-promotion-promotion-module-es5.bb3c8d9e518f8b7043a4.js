(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-manage-promotion-promotion-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/promotion/list/list.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/promotion/list/list.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesManagePromotionListListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<header-route-menu [currentPageName]=\"'Manage'\"></header-route-menu>\n\n<div class=\"container-fluid mt--6\">\n\n    <header-route-menu-light [currentPageName]=\"'Youtube Link'\" [moduleName]=\"'Promotion'\"\n    [createRoute]=\"'alchemist-academy/manage/promotion/create'\"></header-route-menu-light>\n\n\n\n<div class=\"row\">\n    <div class=\"col-md-6 p-0\">\n        <show-entries></show-entries>\n    </div>\n    <div class=\"col-md-6 p-0\">\n        <search-box [hint]=\"'Search'\"></search-box>\n    </div>\n</div>\n<ng-container *ngIf=\"isLoading; else showData\">\n    <div>\n        <table-loading [tType]=\"'c3-3'\"></table-loading>\n    </div>\n\n</ng-container>\n<ng-template #showData>\n    <table role=\"table\" class=\"table-responsive\">\n        <thead role=\"rowgroup\">\n            <tr role=\"row\">\n                <th role=\"columnheader\" class=\"fitter-able\" (click)=\"fitter('createdDate')\"\n                    [class.fitter-active]='tableFilter.sortColumn==\"createdDate\"'>Create Date</th>\n\n                <th role=\"columnheader\" (click)=\"fitter('title')\"\n                [class.fitter-active]='tableFilter.sortColumn==\"title\"'>Title</th>\n\n                <th role=\"columnheader\" style=\"width: 15%;\">Action</th>\n            </tr>\n        </thead>\n\n\n        <tbody role=\"rowgroup\">\n            <ng-container *ngFor=\"let data of youtubelinks\">\n                <tr role=\"row\">\n                    <td role=\"cell\">{{data.createdDate | defaultDate}}</td>\n                    <td role=\"cell\">{{data.title}}</td>\n                    <td>\n                        <action-btn-gp [btnName]=\"'edit'\" [editId]=\"data.linkId\"></action-btn-gp>\n                        <action-btn-gp [btnName]=\"'delete'\" [data]=\"data\" (onSubmit)=\"deleteClass($event)\">\n                        </action-btn-gp>\n                    </td>\n\n            </ng-container>\n\n\n\n            <tr *ngIf=\"tableFilter.totalCount == 0\" role=\"row\">\n                <td colspan=\"4\" class=\"text-center\">\n                    No Data Exit\n                </td>\n            </tr>\n        </tbody>\n\n    </table>\n\n    <pagination [totalCount]='tableFilter.totalCount'>\n    </pagination>\n\n</ng-template>\n \n </div>\n \n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/promotion/promotion-create/promotion-create.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/promotion/promotion-create/promotion-create.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesManagePromotionPromotionCreatePromotionCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header-route-menu [currentPageName]=\"'Manage'\"></header-route-menu>\n\n<div class=\"container-fluid mt--6\">\n    <header-route-menu-light [currentPageName]=\"'Manage'\" [moduleName]=\"'Youtube Link'\"></header-route-menu-light>\n\n    <form [formGroup]=\"createForm\">\n        <div class=\"container create-form\">\n            <div class=\"row\">\n                <div class=\"col-md-12 mb-2\">\n                    <label-text>Name</label-text>\n                    <input type=\"text\" formControlName=\"title\" class=\"form-control\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.title.errors }\" placeholder=\"Write Name\" />\n                </div>\n\n                <div class=\"col-md-12 mb-2\">\n                    <label-text>Link</label-text>\n                    <input type=\"text\" formControlName=\"link\" class=\"form-control\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.link.errors }\" placeholder=\"Write Link\" />\n                </div>\n           \n\n        \n            </div>\n\n            <div class=\"footer-button-block\">\n                <cancel-btn>Cancel</cancel-btn>\n                <submit-btn (onClick)=\"onCreate()\">Save</submit-btn>\n            </div>\n        </div>\n    </form>\n</div>";
    /***/
  },

  /***/
  "./src/app/modules/manage/promotion/list/list.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/modules/manage/promotion/list/list.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesManagePromotionListListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {\n    /*\n                      Label the data\n                  You could also use a data-* attribute and content for this. That way \"bloats\" the HTML, this way means you need to keep HTML and CSS in sync. Lea Verou has a clever way to handle with text-shadow.\n                      */\n    td:nth-of-type(1):before {\n        content: \"Create Date\";\n    }\n    td:nth-of-type(2):before {\n        content: \"Name\";\n    }\n    td:nth-of-type(3):before {\n        content: \"Action\";\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYW5hZ2UvcHJvbW90aW9uL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7Ozt1QkFHbUI7SUFDbkI7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYW5hZ2UvcHJvbW90aW9uL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCksIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAvKlxuICAgICAgICAgICAgICAgICAgICAgIExhYmVsIHRoZSBkYXRhXG4gICAgICAgICAgICAgICAgICBZb3UgY291bGQgYWxzbyB1c2UgYSBkYXRhLSogYXR0cmlidXRlIGFuZCBjb250ZW50IGZvciB0aGlzLiBUaGF0IHdheSBcImJsb2F0c1wiIHRoZSBIVE1MLCB0aGlzIHdheSBtZWFucyB5b3UgbmVlZCB0byBrZWVwIEhUTUwgYW5kIENTUyBpbiBzeW5jLiBMZWEgVmVyb3UgaGFzIGEgY2xldmVyIHdheSB0byBoYW5kbGUgd2l0aCB0ZXh0LXNoYWRvdy5cbiAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgIHRkOm50aC1vZi10eXBlKDEpOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiQ3JlYXRlIERhdGVcIjtcbiAgICB9XG4gICAgdGQ6bnRoLW9mLXR5cGUoMik6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJOYW1lXCI7XG4gICAgfVxuICAgIHRkOm50aC1vZi10eXBlKDMpOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiQWN0aW9uXCI7XG4gICAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/manage/promotion/list/list.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/modules/manage/promotion/list/list.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ListComponent */

  /***/
  function srcAppModulesManagePromotionListListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
      return ListComponent;
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

    let ListComponent = class ListComponent {
      constructor(_activeRoute, _tableService) {
        this._activeRoute = _activeRoute;
        this._tableService = _tableService;
        this.tableFilter = {};
        this.isLoading = false;
        this.isAsc = false;
      }

      ngOnInit() {
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
            this.tableFilter.sortColumn = 'createdDate';
          }

          this.getYoutubelink();
        });
      }

      getYoutubelink() {
        this.isLoading = true;
        this.subscription = this._tableService.getYoutubeLink(this.tableFilter).subscribe(res => {
          this.youtubelinks = res.youtubelinks;
          this.tableFilter = res.filter;
          this.isLoading = false;
        });
      }

      deleteClass(data) {
        this.subscription = this._tableService.onDeleteYoutube(data.linkId).subscribe(res => {
          this.getYoutubelink();
        });
      }

    };

    ListComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _app_core_http_table_list_service__WEBPACK_IMPORTED_MODULE_3__["TableListService"]
    }];

    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/promotion/list/list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list.component.css */
      "./src/app/modules/manage/promotion/list/list.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _app_core_http_table_list_service__WEBPACK_IMPORTED_MODULE_3__["TableListService"]])], ListComponent);
    /***/
  },

  /***/
  "./src/app/modules/manage/promotion/promotion-create/promotion-create.component.css":
  /*!******************************************************************************************!*\
    !*** ./src/app/modules/manage/promotion/promotion-create/promotion-create.component.css ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesManagePromotionPromotionCreatePromotionCreateComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlL3Byb21vdGlvbi9wcm9tb3Rpb24tY3JlYXRlL3Byb21vdGlvbi1jcmVhdGUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/manage/promotion/promotion-create/promotion-create.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/modules/manage/promotion/promotion-create/promotion-create.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: PromotionCreateComponent */

  /***/
  function srcAppModulesManagePromotionPromotionCreatePromotionCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PromotionCreateComponent", function () {
      return PromotionCreateComponent;
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

    let PromotionCreateComponent = class PromotionCreateComponent {
      constructor(fb, _createService, _activeRoute) {
        this.fb = fb;
        this._createService = _createService;
        this._activeRoute = _activeRoute;
        this.submitted = false;
        this.createForm = this.fb.group({
          title: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          link: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
      }

      ngOnInit() {
        this.id = this._activeRoute.snapshot.paramMap.get("id");
        let data = this._activeRoute.snapshot.data['data'];
        if (data) this.getDetail(data);
      }

      getDetail(data) {
        this.createForm = this.fb.group({
          title: [data.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          link: [data.link, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
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
          this.sub = this._createService.onSaveYoutubeLink(this.createForm.value, this.id).subscribe(() => {
            this.goBack();
          });
        }
      }

      get f() {
        return this.createForm.controls;
      }

    };

    PromotionCreateComponent.ctorParameters = () => [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _app_core_http_save_service__WEBPACK_IMPORTED_MODULE_4__["SaveService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }];

    PromotionCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-promotion-create',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./promotion-create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/promotion/promotion-create/promotion-create.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./promotion-create.component.css */
      "./src/app/modules/manage/promotion/promotion-create/promotion-create.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _app_core_http_save_service__WEBPACK_IMPORTED_MODULE_4__["SaveService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], PromotionCreateComponent);
    /***/
  },

  /***/
  "./src/app/modules/manage/promotion/promotion-detail.relover.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/modules/manage/promotion/promotion-detail.relover.ts ***!
    \**********************************************************************/

  /*! exports provided: YoutubeDetailResolver */

  /***/
  function srcAppModulesManagePromotionPromotionDetailReloverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "YoutubeDetailResolver", function () {
      return YoutubeDetailResolver;
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

    let YoutubeDetailResolver = class YoutubeDetailResolver {
      constructor(question) {
        this.question = question;
      }

      resolve(route) {
        return this.question.getDetailYoutubeLink(route.params['id']);
      }

    };

    YoutubeDetailResolver.ctorParameters = () => [{
      type: _app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_2__["DetailService"]
    }];

    YoutubeDetailResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_2__["DetailService"]])], YoutubeDetailResolver);
    /***/
  },

  /***/
  "./src/app/modules/manage/promotion/promotion-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/modules/manage/promotion/promotion-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: PromotionRoutingModule */

  /***/
  function srcAppModulesManagePromotionPromotionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PromotionRoutingModule", function () {
      return PromotionRoutingModule;
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


    var _app_modules_manage_promotion_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/modules/manage/promotion/list/list.component */
    "./src/app/modules/manage/promotion/list/list.component.ts");
    /* harmony import */


    var _app_modules_manage_promotion_promotion_create_promotion_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/modules/manage/promotion/promotion-create/promotion-create.component */
    "./src/app/modules/manage/promotion/promotion-create/promotion-create.component.ts");
    /* harmony import */


    var _app_modules_manage_promotion_promotion_detail_relover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/modules/manage/promotion/promotion-detail.relover */
    "./src/app/modules/manage/promotion/promotion-detail.relover.ts");

    const routes = [{
      path: "",
      component: _app_modules_manage_promotion_list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]
    }, {
      path: "create",
      component: _app_modules_manage_promotion_promotion_create_promotion_create_component__WEBPACK_IMPORTED_MODULE_4__["PromotionCreateComponent"]
    }, {
      path: "create/:id",
      component: _app_modules_manage_promotion_promotion_create_promotion_create_component__WEBPACK_IMPORTED_MODULE_4__["PromotionCreateComponent"],
      resolve: {
        data: _app_modules_manage_promotion_promotion_detail_relover__WEBPACK_IMPORTED_MODULE_5__["YoutubeDetailResolver"]
      }
    }];
    let PromotionRoutingModule = class PromotionRoutingModule {};
    PromotionRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]
    })], PromotionRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/manage/promotion/promotion.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/modules/manage/promotion/promotion.module.ts ***!
    \**************************************************************/

  /*! exports provided: PromotionModule */

  /***/
  function srcAppModulesManagePromotionPromotionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PromotionModule", function () {
      return PromotionModule;
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


    var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./list/list.component */
    "./src/app/modules/manage/promotion/list/list.component.ts");
    /* harmony import */


    var _app_modules_manage_promotion_promotion_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/modules/manage/promotion/promotion-routing.module */
    "./src/app/modules/manage/promotion/promotion-routing.module.ts");
    /* harmony import */


    var _app_shared_basic_components_basic_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/shared/basic-components/basic.module */
    "./src/app/shared/basic-components/basic.module.ts");
    /* harmony import */


    var _promotion_create_promotion_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./promotion-create/promotion-create.component */
    "./src/app/modules/manage/promotion/promotion-create/promotion-create.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_modules_manage_promotion_promotion_detail_relover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @app/modules/manage/promotion/promotion-detail.relover */
    "./src/app/modules/manage/promotion/promotion-detail.relover.ts");

    let PromotionModule = class PromotionModule {};
    PromotionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"], _promotion_create_promotion_create_component__WEBPACK_IMPORTED_MODULE_6__["PromotionCreateComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _app_modules_manage_promotion_promotion_routing_module__WEBPACK_IMPORTED_MODULE_4__["PromotionRoutingModule"], _app_shared_basic_components_basic_module__WEBPACK_IMPORTED_MODULE_5__["BasicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]],
      exports: [_app_modules_manage_promotion_promotion_routing_module__WEBPACK_IMPORTED_MODULE_4__["PromotionRoutingModule"]],
      providers: [_app_modules_manage_promotion_promotion_detail_relover__WEBPACK_IMPORTED_MODULE_8__["YoutubeDetailResolver"]]
    })], PromotionModule);
    /***/
  }
}]);
//# sourceMappingURL=app-modules-manage-promotion-promotion-module-es5.bb3c8d9e518f8b7043a4.js.map