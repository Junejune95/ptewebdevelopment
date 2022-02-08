(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-manage-mock-test-mock-test-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/mock-test/mock-test-create/mock-test-create.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/mock-test/mock-test-create/mock-test-create.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-wrapper\">\n    <div class=\"progress-header\">\n        <div class=\"progress-bar-wrapper\">\n            <p class=\"progress-step\" [class.active]=\"progress[moduleIndex].isActive\"\n                [class.created]=\"progress[moduleIndex].isCreated\"> Step {{moduleIndex+1}}</p>\n            <p class=\"progress-title\" *ngIf=\"moduleIndex<progress.length-1\">\n                Select {{progress[moduleIndex].title}} Question By Each Question Type\n            </p>\n            <p class=\"progress-title\" *ngIf=\"moduleIndex==progress.length-1\">\n                Create Mock Test\n            </p>\n        </div>\n        <div class=\"d-flex icon-wrapper\">\n            <div *ngFor=\"let module of progress;let i=index;\" class=\"icon-block\">\n                <div class=\"icon-img\" [class.activeBtn]=\"module.isActive\" *ngIf=\"!module.isCreated\"\n                    (click)=\"onProgress(i)\">\n                    <img src=\"assets/icon/menu/{{module.className}}.svg\">\n                </div>\n                <div class=\"selectedBox\" (click)=\"onProgress(i)\" *ngIf=\"module.isCreated\">\n                    <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n    <div class=\"tab-wrapper\" *ngIf=\"moduleIndex<progress.length-1\">\n        <div class=\"d-flex align-items-end\">\n            <button [class]=\"questionIndex === i ? 'tab-active' : 'tab-default'\" (click)=\"onTab(i)\"\n                *ngFor=\"let type of questions[moduleIndex].type; let i = index\">\n                {{type}}\n            </button>\n        </div>\n        <div class=\"tab-block\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <show-entries (data)=\"selectedData($event)\"></show-entries>\n                </div>\n                <div class=\"col-md-6\">\n                    <search-box [hint]=\"'Search Mock'\" (searchData)=\"searchDatas($event)\" [isEmit]=\"true\"></search-box>\n                </div>\n            </div>\n\n            <ng-container *ngIf=\"isLoading; else showData\">\n                <table-loading [tType]=\"'c3-4'\"></table-loading>\n            </ng-container>\n            <ng-template #showData>\n                <table role=\"table\" class=\"table-responsive\">\n                    <thead role=\"rowgroup\">\n                        <tr role=\"row\">\n                            <th role=\"columnheader\" class=\"fitter-able\" (click)=\"fitter('createdDate')\"\n                                [ngClass]='{\"fitter-active\": tableFilter.sortColumn==\"createdDate\"}'>Date</th>\n                            <th role=\"columnheader\" class=\"fitter-able\" (click)=\"fitter('name')\"\n                                [ngClass]='{\"fitter-active\":tableFilter.sortColumn==\"name\"}'>Name</th>\n\n                            <th role=\"columnheader\">Action</th>\n                        </tr>\n                    </thead>\n                    <tbody role=\"rowgroup\">\n                        <ng-container *ngFor=\"let data of questionLists; let i = index\">\n                            <tr role=\"row\" (click)=\"selectedQuestion(data.questionId)\"\n                                [class.table-selected]=\"finalData[moduleIndex].questions[questionIndex].includes(data.questionId)\">\n\n                                <td role=\"cell\">{{data.createdDate | defaultDate}}</td>\n                                <td role=\"cell\"> {{ data.name ? data.name : data.question }}</td>\n\n                                <td>\n                                    <action-btn-gp [btnName]=\"'view'\"\n                                        [directLink]=\"progress[moduleIndex].className+'/' +questions[moduleIndex].urlType[questionIndex] +'/'+ data.questionId\"\n                                        isNewTab=\"true\"></action-btn-gp>\n                                </td>\n                            </tr>\n                        </ng-container>\n\n                        <tr *ngIf=\"questionLists?.length == 0\" role=\"row\">\n                            <td colspan=\"4\" class=\"text-center\">\n                                No Data Exit\n                            </td>\n                        </tr>\n                    </tbody>\n\n                </table>\n\n                <pagination [tableFilter]='tableFilter' (getPage)=\"changePage($event)\">\n                </pagination>\n            </ng-template>\n        </div>\n    </div>\n    <div class=\"container mt-5\" *ngIf=\"moduleIndex==progress.length-1\">\n        <form [formGroup]=\"createForm\" class=\"bg-d25 h-100\">\n            <div class=\"row my-2\">\n                <div class=\"col-md-12 mb-2\">\n                    <label-text>Name</label-text>\n                    <input type=\"text\" formControlName=\"name\" class=\"form-control\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" placeholder=\"Write Mock Test Title\" />\n                </div>\n            </div>\n            <div class=\"row mb-2\">\n                <div class=\"col-md-12 mb-2\">\n                    <label-text>Select Status</label-text>\n                    <select class=\"select-box form-control\" formControlName=\"status\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.status.errors }\">\n                        <option value=\"\" disabled selected hidden>Select Status</option>\n                        <option [ngValue]=\"status\" *ngFor=\"let status of statusLists\">{{status}}\n                        </option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"row mb-2\">\n                <div class=\"col-md-6 mb-2\">\n                    <label-text>Status Date</label-text>\n                    <input type=\"date\" class=\"form-control\" formControlName=\"startDate\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.startDate.errors }\" />\n                </div>\n                <div class=\"col-md-6 mb-2\">\n                    <label-text>End Date</label-text>\n                    <input type=\"date\" class=\"form-control\" formControlName=\"endDate\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.endDate.errors }\" />\n                </div>\n            </div>\n            <div class=\"d-flex justify-content-center mt-5 w-100\">\n                <!-- <button type=\"button\" class=\"btn text-0 bg-b100 box-shadow-b25 b-radius bold h4-m px-4 py-2\"\n                        (click)=\"onSubmit()\" [disabled]=\"imgDemoSlider\">\n                        {{ mockId ? 'Update' : 'Create'}}\n                    </button> -->\n                <submit-btn (click)=\"onSubmit()\">\n                    Save\n                </submit-btn>\n            </div>\n        </form>\n    </div>\n\n</div>\n\n\n<dialog-box *ngIf=\"isDialog\" (onconfirm)=\"closeDialog($event)\" [dialogEntry]=\"dialog\"></dialog-box>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/mock-test/mock-test-list/mock-test-list.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/mock-test/mock-test-list/mock-test-list.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header-route-menu [currentPageName]=\"'Mange'\"></header-route-menu>\n\n<div class=\"container-fluid mt--6\">\n    <header-route-menu-light [currentPageName]=\"'Manage'\" [moduleName]=\"'Full Mock Test'\"\n        [createRoute]=\"'alchemist-academy/manage/full-mock-test/create'\"></header-route-menu-light>\n\n    <div class=\"row\">\n        <div class=\"col-md-6 p-0\">\n            <show-entries></show-entries>\n        </div>\n        <div class=\"col-md-6 p-0\">\n            <search-box [hint]=\"'Search'\"></search-box>\n        </div>\n    </div>\n    <ng-container *ngIf=\"isLoading; else showData\">\n        <div>\n            <table-loading [tType]=\"'c4-1'\"></table-loading>\n        </div>\n    </ng-container>\n    <ng-template #showData>\n        <table role=\"table\" class=\"table-responsive\">\n            <thead role=\"rowgroup\">\n                <tr role=\"row\">\n                    <th role=\"columnheader\" class=\"fitter-able\" (click)=\"fitter('name')\"\n                        [class.fitter-active]='tableFilter.sortColumn==\"name\"'>Title</th>\n\n                    <th role=\"columnheader\" class=\"fitter-able\" (click)=\"fitter('startDate')\"\n                        [class.fitter-active]='tableFilter.sortColumn==\"startDate\"'>Start Date</th>\n\n                    <th role=\"columnheader\" class=\"fitter-able\" (click)=\"fitter('endDate')\"\n                        [class.fitter-active]='tableFilter.sortColumn==\"endDate\"'>Updated</th>\n                    <th role=\"columnheader\">Question Type</th>\n\n                    <th role=\"columnheader\">Action</th>\n                </tr>\n            </thead>\n            <tbody role=\"rowgroup\">\n                <ng-container *ngFor=\"let data of mocks\">\n                    <tr role=\"row\">\n                        <td role=\"cell\">\n                            <button class=\"btn btn-create\" (click)=\"expand(data.questionId)\">\n                                <i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i>\n                            </button>\n\n                            {{\n                            data.name }}\n\n                        </td>\n                        <td role=\"cell\">{{data.startDate | defaultDate}}</td>\n                        <td role=\"cell\">{{data.endDate | defaultDate}}</td>\n                        <td role=\"cell\">\n                            <div class=\"icon-block\" *ngFor=\"let module of data.modules\" [ngClass]=\"{\n                                'reading': module=='Reading', \n                                'writing': module =='Writing',\n                                'listening': module =='Listening', \n                                'speaking': module =='Speaking'\n                            }\"> </div>\n                        </td>\n                        <td>\n                            <action-btn-gp [btnName]=\"'share'\" [data]=\"data\" (onSubmit)=\"shareMock($event)\"\n                                [close]=\"isClose\">\n                            </action-btn-gp>\n                            <action-btn-gp [btnName]=\"'edit'\"></action-btn-gp>\n                            <action-btn-gp [btnName]=\"'start'\" [data]=\"data\" *ngIf=\"data.status == 'PAUSE'\"\n                                (onSubmit)=\"startClass($event)\"></action-btn-gp>\n                            <action-btn-gp [btnName]=\"'end'\" [data]=\"data\" *ngIf=\"data.status == 'ACTIVE'\"\n                                (onSubmit)=\"startClass($event)\"></action-btn-gp>\n                            <action-btn-gp [btnName]=\"'delete'\" [data]=\"data\" (onSubmit)=\"deleteMock($event)\">\n                            </action-btn-gp>\n                        </td>\n                    </tr>\n                    <tr role=\"row\" *ngIf=\"expandId==data.questionId\">\n                        <td colspan=\"4\" class=\"text-center\">\n                            <action-btn-gp [btnName]=\"'share'\" [data]=\"data\" (onSubmit)=\"shareMock($event)\"\n                                [close]=\"isClose\">\n                            </action-btn-gp>\n                            <action-btn-gp [btnName]=\"'edit'\" [editId]=\"data.questionId\"></action-btn-gp>\n                            <action-btn-gp [btnName]=\"'start'\" [data]=\"data\" *ngIf=\"data.status == 'PAUSE'\"\n                                (onSubmit)=\"startClass($event)\"></action-btn-gp>\n                            <action-btn-gp [btnName]=\"'end'\" [data]=\"data\" *ngIf=\"data.status == 'ACTIVE'\"\n                                (onSubmit)=\"startClass($event)\"></action-btn-gp>\n                            <action-btn-gp [btnName]=\"'delete'\" [data]=\"data\" (onSubmit)=\"deleteMock($event)\">\n                            </action-btn-gp>\n                        </td>\n\n                    </tr>\n                </ng-container>\n                <tr *ngIf=\"mock?.mocktestList?.length == 0\" role=\"row\">\n                    <td colspan=\"4\" class=\"text-center\">\n                        No Data Exit\n                    </td>\n                </tr>\n            </tbody>\n\n        </table>\n\n        <pagination [totalCount]='tableFilter.totalCount'>\n        </pagination>\n    </ng-template>\n\n</div>");

/***/ }),

/***/ "./src/app/modules/manage/mock-test/mock-test-create/mock-test-create.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/manage/mock-test/mock-test-create/mock-test-create.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".progress-bar-wrapper {\n    height: 120px;\n    background: #dee0de;\n}\n\np.progress-step {\n    text-align: center;\n    font-weight: bold;\n    color: var(--text-dark-color);\n    font-size: 14px;\n    padding-top: 10px;\n    margin-bottom: 5px;\n}\n\np.progress-title {\n    text-align: center;\n    font-weight: 500;\n    color: var(--text-dark-color);\n    font-size: 20px;\n    margin-bottom: 0;\n}\n\n.writing {\n    background-image: url('writing.svg');\n}\n\n.listening {\n    background-image: url('listening.svg');\n}\n\n.speaking {\n    background-image: url('speaking.svg');\n}\n\n.reading {\n    background-image: url('reading.svg');\n}\n\n.create {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0ibGlzdGVuaW5nX2ljb24iIGRhdGEtbmFtZT0ibGlzdGVuaW5nIGljb24iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjM0IiBoZWlnaHQ9IjM0IiB2aWV3Qm94PSIwIDAgMzQgMzQiPgogIDxwYXRoIGlkPSJpY19hZGRfY2lyY2xlX291dGxpbmVfMjRweCIgZD0iTTIwLjcsMTAuNUgxNy4zdjYuOEgxMC41djMuNGg2Ljh2Ni44aDMuNFYyMC43aDYuOFYxNy4zSDIwLjdaTTE5LDJBMTcsMTcsMCwxLDAsMzYsMTksMTcuMDA2LDE3LjAwNiwwLDAsMCwxOSwyWm0wLDMwLjZBMTMuNiwxMy42LDAsMSwxLDMyLjYsMTksMTMuNjE4LDEzLjYxOCwwLDAsMSwxOSwzMi42WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIgLTIpIiBmaWxsPSIjM2I0YzcyIi8+Cjwvc3ZnPgo=);\n}\n\n.progress-header {\n    position: relative;\n}\n\n.icon-block>div {\n    width: 55px;\n    height: 55px;\n    border-radius: 50%;\n    background-color: var(--text-light-color);\n    box-shadow: var(--textbox-boxshadow);\n    margin-right: 8px;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n}\n\n.icon-wrapper {\n    position: absolute;\n    top: 94px;\n    width: 100%;\n    -webkit-box-pack: center;\n            justify-content: center;\n}\n\n.icon-wrapper>div {\n    width: 18%;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n}\n\n.activeBtn img {\n    -webkit-filter: var(--primary-filter-color);\n            filter: var(--primary-filter-color);\n}\n\n.selectedBox {\n    background-color: var(--primary-color) !important;\n    color: #FFFFFF;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    font-size: 25px;\n}\n\n/* table responsive */\n\n@media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {\n    /*\n                      Label the data\n                  You could also use a data-* attribute and content for this. That way \"bloats\" the HTML, this way means you need to keep HTML and CSS in sync. Lea Verou has a clever way to handle with text-shadow.\n                      */\n    td:nth-of-type(1):before {\n        content: \"Create Date\";\n    }\n    td:nth-of-type(2):before {\n        content: \"Name\";\n    }\n    td:nth-of-type(3):before {\n        content: \"Action\";\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYW5hZ2UvbW9jay10ZXN0L21vY2stdGVzdC1jcmVhdGUvbW9jay10ZXN0LWNyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9DQUFxRDtBQUN6RDs7QUFFQTtJQUNJLHNDQUF1RDtBQUMzRDs7QUFFQTtJQUNJLHFDQUFzRDtBQUMxRDs7QUFFQTtJQUNJLG9DQUFxRDtBQUN6RDs7QUFFQTtJQUNJLHFrQkFBcWtCO0FBQ3prQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlDQUF5QztJQUN6QyxvQ0FBb0M7SUFDcEMsaUJBQWlCO0lBQ2pCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLHdCQUF1QjtZQUF2Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDJDQUFtQztZQUFuQyxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxpREFBaUQ7SUFDakQsY0FBYztJQUNkLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBLHFCQUFxQjs7QUFFckI7SUFDSTs7O3VCQUdtQjtJQUNuQjtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21hbmFnZS9tb2NrLXRlc3QvbW9jay10ZXN0LWNyZWF0ZS9tb2NrLXRlc3QtY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZ3Jlc3MtYmFyLXdyYXBwZXIge1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgYmFja2dyb3VuZDogI2RlZTBkZTtcbn1cblxucC5wcm9ncmVzcy1zdGVwIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHZhcigtLXRleHQtZGFyay1jb2xvcik7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxucC5wcm9ncmVzcy10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IHZhcigtLXRleHQtZGFyay1jb2xvcik7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi53cml0aW5nIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2Fzc2V0cy9pY29uL21lbnUvd3JpdGluZy5zdmcnKTtcbn1cblxuLmxpc3RlbmluZyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdhc3NldHMvaWNvbi9tZW51L2xpc3RlbmluZy5zdmcnKTtcbn1cblxuLnNwZWFraW5nIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2Fzc2V0cy9pY29uL21lbnUvc3BlYWtpbmcuc3ZnJyk7XG59XG5cbi5yZWFkaW5nIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2Fzc2V0cy9pY29uL21lbnUvcmVhZGluZy5zdmcnKTtcbn1cblxuLmNyZWF0ZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QnBaRDBpYkdsemRHVnVhVzVuWDJsamIyNGlJR1JoZEdFdGJtRnRaVDBpYkdsemRHVnVhVzVuSUdsamIyNGlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdkMmxrZEdnOUlqTTBJaUJvWldsbmFIUTlJak0wSWlCMmFXVjNRbTk0UFNJd0lEQWdNelFnTXpRaVBnb2dJRHh3WVhSb0lHbGtQU0pwWTE5aFpHUmZZMmx5WTJ4bFgyOTFkR3hwYm1WZk1qUndlQ0lnWkQwaVRUSXdMamNzTVRBdU5VZ3hOeTR6ZGpZdU9FZ3hNQzQxZGpNdU5HZzJMamgyTmk0NGFETXVORll5TUM0M2FEWXVPRll4Tnk0elNESXdMamRhVFRFNUxESkJNVGNzTVRjc01Dd3hMREFzTXpZc01Ua3NNVGN1TURBMkxERTNMakF3Tml3d0xEQXNNQ3d4T1N3eVdtMHdMRE13TGpaQk1UTXVOaXd4TXk0MkxEQXNNU3d4TERNeUxqWXNNVGtzTVRNdU5qRTRMREV6TGpZeE9Dd3dMREFzTVN3eE9Td3pNaTQyV2lJZ2RISmhibk5tYjNKdFBTSjBjbUZ1YzJ4aGRHVW9MVElnTFRJcElpQm1hV3hzUFNJak0ySTBZemN5SWk4K0Nqd3ZjM1puUGdvPSk7XG59XG5cbi5wcm9ncmVzcy1oZWFkZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmljb24tYmxvY2s+ZGl2IHtcbiAgICB3aWR0aDogNTVweDtcbiAgICBoZWlnaHQ6IDU1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtbGlnaHQtY29sb3IpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXRleHRib3gtYm94c2hhZG93KTtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pY29uLXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDk0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pY29uLXdyYXBwZXI+ZGl2IHtcbiAgICB3aWR0aDogMTglO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5hY3RpdmVCdG4gaW1nIHtcbiAgICBmaWx0ZXI6IHZhcigtLXByaW1hcnktZmlsdGVyLWNvbG9yKTtcbn1cblxuLnNlbGVjdGVkQm94IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cbi8qIHRhYmxlIHJlc3BvbnNpdmUgKi9cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCksIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAvKlxuICAgICAgICAgICAgICAgICAgICAgIExhYmVsIHRoZSBkYXRhXG4gICAgICAgICAgICAgICAgICBZb3UgY291bGQgYWxzbyB1c2UgYSBkYXRhLSogYXR0cmlidXRlIGFuZCBjb250ZW50IGZvciB0aGlzLiBUaGF0IHdheSBcImJsb2F0c1wiIHRoZSBIVE1MLCB0aGlzIHdheSBtZWFucyB5b3UgbmVlZCB0byBrZWVwIEhUTUwgYW5kIENTUyBpbiBzeW5jLiBMZWEgVmVyb3UgaGFzIGEgY2xldmVyIHdheSB0byBoYW5kbGUgd2l0aCB0ZXh0LXNoYWRvdy5cbiAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgIHRkOm50aC1vZi10eXBlKDEpOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiQ3JlYXRlIERhdGVcIjtcbiAgICB9XG4gICAgdGQ6bnRoLW9mLXR5cGUoMik6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJOYW1lXCI7XG4gICAgfVxuICAgIHRkOm50aC1vZi10eXBlKDMpOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiQWN0aW9uXCI7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/manage/mock-test/mock-test-create/mock-test-create.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/manage/mock-test/mock-test-create/mock-test-create.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: MockTestCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockTestCreateComponent", function() { return MockTestCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/http/serviceIndex */ "./src/app/core/http/serviceIndex.ts");





let MockTestCreateComponent = class MockTestCreateComponent {
    constructor(formBuilder, _activeRoute, _tableService, _createService) {
        this.formBuilder = formBuilder;
        this._activeRoute = _activeRoute;
        this._tableService = _tableService;
        this._createService = _createService;
        this.progress = [{ isActive: true, isCreated: false, title: "Writing", className: "writing" },
            { isActive: false, isCreated: false, title: "Reading", className: "reading" },
            { isActive: false, isCreated: false, title: "Listening", className: "listening" },
            { isActive: false, isCreated: false, title: "Speaking", className: "speaking" },
            { isActive: false, isCreated: false, title: "Create", className: "create" }];
        this.questions = [{ moduleType: "Writing", type: ["Essay Writing", "Summary Written Text"], routeType: ["W001", "W002"], urlType: ["essay-writing/evaluation", "summary-written-text/evaluation"] },
            { moduleType: "Reading", type: ["Re-order", "FIB(Drop Down)", "FIB(Drag)", "MCQ(Single)", "MCQ(Multiple)"], routeType: ["R001", "R002", "R003", "R004", "R005"], urlType: ["question-banks/re-order-paragraph/evaluate", "question-banks/fill-in-blank-dropDown/evaluate", "question-banks/fill-in-blank-drag/evaluate", "question-banks/mcq/evaluate/multiple", "question-banks/mcq/evaluate/single"] },
            { moduleType: "Listening", type: ['Dictations', 'FIB', 'HIW', 'MCQ(Single)', 'MCQ(Multiple)', 'SMW', 'HCS', 'STT'], routeType: ["L001", "L002", "L003", "L004", "L005", "L006", "L007", "L008"], urlType: ["question-banks/dictation/evaluate", "question-banks/fill-in-blank/evaluate", "question-banks/highlight-incorrect/evaluate", "question-banks/mcq/evaluate/single", "question-banks/mcq/evaluate/multiple", "question-banks/select-missing-word/evaluate", "question-banks/highlight-correct/evaluate", "summary/summary-spoken-text-test"] },
            { moduleType: "Speaking", type: ['Read Aloud', 'Repeat Sentence', 'Describe Image', 'Re-tell Lecture', 'Answer Short Question'], routeType: ["S001", "S002", "S003", "S004", "S005"], urlType: ["question-banks/read-aloud/evaluate", "question-banks/repeat-sentence/evaluate", "question-banks/describe-image/evaluate", "question-banks/retell-lecture/evaluate", "question-banks/answer-short-question/evaluate"] }];
        this.finalData = [{ "questions": [[], []] }, { "questions": [[], [], [], [], []] }, { "questions": [[], [], [], [], [], [], [], []] }, { "questions": [[], [], [], [], []] }];
        this.moduleIndex = 0;
        this.questionIndex = 0;
        // table
        this.questionLists = [];
        this.selectedModule = [];
        this.isAsc = true;
        this.isDialog = false;
        this.dialog = {
            showText: "",
            isDelete: false,
            isWarning: true,
            isconfirmBtn: false,
            isSkip: true
        };
        this.createForm = this.formBuilder.group({
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            status: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            startDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            endDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.submitted = false;
        this.statusLists = ["ACTIVE", "PAUSE"];
        this.isLoading = true;
        this.tableFilter = {
            limit: 10,
            page: 1,
            sortColumn: 'createdDate',
            sortDirection: 'asc',
            search: ''
        };
        this.isSkip = false;
    }
    ngOnInit() {
        let data = this._activeRoute.snapshot.data['mockDetail'];
        if (data)
            this.getDataEditForm(data);
        this._activeRoute.queryParams.subscribe((params) => {
            if (params.page) {
                this.tableFilter.page = params.page;
                this.tableFilter.limit = params.limit;
                this.tableFilter.sortDirection = 'asc';
                this.tableFilter.sortColumn = 'name';
            }
            this.getQuestionLists();
        });
        this.getQuestionLists();
    }
    getDataEditForm(data) {
        this.mockId = data.mockTestId;
        this.selectedModule = data.modules;
        this.finalData = data.questionList;
        this.createForm = this.formBuilder.group({
            name: [data.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            status: [data.status, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            startDate: [data.startDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            endDate: [data.endDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.checkCreated();
    }
    getQuestionLists() {
        this.isLoading = true;
        let questionCode = this.questions[this.moduleIndex].routeType[this.questionIndex];
        let moduleType = this.questions[this.moduleIndex].moduleType;
        console.log(this.tableFilter);
        this.subscription = this._tableService.getManageQuestionList(this.tableFilter, { moduleType: moduleType, questionType: questionCode })
            .subscribe((res) => {
            this.questionLists = res.questions;
            this.tableFilter = res.filter;
            this.isLoading = false;
        });
    }
    selectedData(e) {
        this.tableFilter.limit = e;
        this.getQuestionLists();
    }
    searchDatas(e) {
        this.tableFilter.search = e;
        this.getQuestionLists();
    }
    changePage(e) {
        this.tableFilter.page = e;
        this.getQuestionLists();
    }
    fitter(sortColumn) {
        this.isAsc = !this.isAsc ? (this.isAsc = true) : (this.isAsc = false);
        this.tableFilter.sortDirection = this.isAsc ? "asc" : "desc";
        this.tableFilter.sortColumn = sortColumn;
        this.getQuestionLists();
    }
    onProgress(i) {
        this.tempIndex = i;
        this.progress[i].isCreated = false;
        if (this.checkValid(this.moduleIndex)) {
            this.progress[this.moduleIndex].isCreated = true;
            this.onProgressNext(i);
            if (i < this.progress.length - 1)
                this.getQuestionLists();
        }
        else {
            this.dialog.showText = "Select question of each question type from '" + this.progress[this.moduleIndex].title + "'.";
            this.isDialog = true;
        }
    }
    onProgressNext(i) {
        this.progress[i].isActive = true;
        this.progress[this.moduleIndex].isActive = false;
        this.moduleIndex = i;
        this.questionIndex = 0;
        if (i < this.progress.length - 1)
            this.getQuestionLists();
    }
    checkAllmodule() {
        this.selectedModule = [];
        let temp = false;
        for (let data of this.progress) {
            if (data.isCreated) {
                temp = data.isCreated;
                this.selectedModule.push(data.title);
                // break;
            }
        }
        return temp;
    }
    checkValid(moduleIndex) {
        if (moduleIndex < this.progress.length - 1) {
            let questionsLists = this.finalData[moduleIndex].questions;
            let res = true;
            for (let i = 0; i < questionsLists.length; i++) {
                if (questionsLists[i].length == 0)
                    res = false;
            }
            return res;
        }
        else {
            return true;
        }
    }
    onTab(moduleIndex) {
        this.questionIndex = moduleIndex;
        this.tableFilter.page = 1;
        this.tableFilter.limit = 10;
        this.tableFilter.sortDirection = 'asc';
        this.tableFilter.sortColumn = 'name';
        this.getQuestionLists();
        // this._activeRoute.queryParams.subscribe(
        //   (params) => {
        //     this.questionIndex = moduleIndex;
        //     if(params.page){
        //       this.tableFilter.page = params.page;
        //       this.tableFilter.limit = params.limit;
        //       this.tableFilter.sortDirection = 'asc';
        //       this.tableFilter.sortColumn = 'name';
        //     }
        //   }
        // )
    }
    selectedQuestion(qId) {
        let currentQuestion = this.finalData[this.moduleIndex].questions[this.questionIndex];
        const index = currentQuestion.findIndex(x => x === qId);
        if (currentQuestion.includes(qId) == false) {
            currentQuestion.push(qId);
        }
        else {
            currentQuestion.splice(index, 1);
        }
    }
    checkCreated() {
        for (let obj of this.progress) {
            if (this.selectedModule.includes(obj.title))
                obj.isCreated = true;
        }
    }
    closeDialog(e) {
        if (e == true) {
            for (let i = 0; i < this.finalData[this.moduleIndex].questions.length; i++)
                this.finalData[this.moduleIndex].questions[i] = [];
            this.onProgressNext(this.tempIndex);
        }
        this.isDialog = false;
        ;
    }
    get f() {
        return this.createForm.controls;
    }
    onSubmit() {
        this.submitted = true;
        if (this.createForm.invalid) {
            return;
        }
        else {
            if (this.checkAllmodule()) {
                this.isLoading = true;
                let finalTemp = {
                    "name": this.createForm.value.name,
                    "status": this.createForm.value.status,
                    "startDate": this.createForm.value.startDate,
                    "endDate": this.createForm.value.endDate,
                    "modules": this.selectedModule,
                    "questionList": this.finalData
                };
                this.subscription = this._createService.onsaveMockTest(finalTemp, this.mockId).subscribe((res) => {
                    this.isLoading = false;
                    this.goBack();
                });
            }
            else {
                this.dialog.showText = "Select at least one module.";
                this.isDialog = true;
            }
        }
    }
    goBack() {
        this._createService.goBackPrev();
    }
};
MockTestCreateComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__["TableListService"] },
    { type: _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__["SaveService"] }
];
MockTestCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mock-test-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mock-test-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/mock-test/mock-test-create/mock-test-create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mock-test-create.component.css */ "./src/app/modules/manage/mock-test/mock-test-create/mock-test-create.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__["TableListService"],
        _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__["SaveService"]])
], MockTestCreateComponent);



/***/ }),

/***/ "./src/app/modules/manage/mock-test/mock-test-list/mock-test-list.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/manage/mock-test/mock-test-list/mock-test-list.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".writing {\n    background-image: url('writing.svg');\n}\n\n.listening {\n    background-image: url('listening.svg');\n}\n\n.speaking {\n    background-image: url('speaking.svg');\n}\n\n.reading {\n    background-image: url('reading.svg');\n}\n\n.icon-block {\n    width: 42px;\n    height: 42px;\n    border-radius: 50%;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-color: var(--text-light-color);\n    box-shadow: var(--textbox-boxshadow);\n    margin-right: 8px;\n    display: inline-block;\n    background-size: 20px;\n}\n\nbutton.btn.btn-create {\n    font-size: 23px;\n    padding: 0;\n    margin-right: 4px;\n    color: var(--primary-color);\n}\n\nth:nth-of-type(5),td:nth-of-type(5) {\n    display: none;\n}\n\n/* table responsive */\n\n@media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {\n    /*\n                      Label the data\n                  You could also use a data-* attribute and content for this. That way \"bloats\" the HTML, this way means you need to keep HTML and CSS in sync. Lea Verou has a clever way to handle with text-shadow.\n                      */\n    td:nth-of-type(1):before {\n        content: \"Name\";\n    }\n    td:nth-of-type(2):before {\n        content: \"Start\";\n    }\n    td:nth-of-type(3):before {\n        content: \"End\";\n    }\n    td:nth-of-type(4):before {\n        content: \"Question Type\";\n    }\n    td:nth-of-type(5):before {\n        content: \"Action\";\n    }\n    td:nth-of-type(5) {\n        display: block;\n    }\n\n    .btn-link{\n        text-align: left;\n        padding: 0 !important;\n    }\n\n    .btn-create{\n        display: none;\n    }\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYW5hZ2UvbW9jay10ZXN0L21vY2stdGVzdC1saXN0L21vY2stdGVzdC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBcUQ7QUFDekQ7O0FBRUE7SUFDSSxzQ0FBdUQ7QUFDM0Q7O0FBRUE7SUFDSSxxQ0FBc0Q7QUFDMUQ7O0FBRUE7SUFDSSxvQ0FBcUQ7QUFDekQ7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHlDQUF5QztJQUN6QyxvQ0FBb0M7SUFDcEMsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBLHFCQUFxQjs7QUFFckI7SUFDSTs7O3VCQUdtQjtJQUNuQjtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIscUJBQXFCO0lBQ3pCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYW5hZ2UvbW9jay10ZXN0L21vY2stdGVzdC1saXN0L21vY2stdGVzdC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JpdGluZyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdhc3NldHMvaWNvbi9tZW51L3dyaXRpbmcuc3ZnJyk7XG59XG5cbi5saXN0ZW5pbmcge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnYXNzZXRzL2ljb24vbWVudS9saXN0ZW5pbmcuc3ZnJyk7XG59XG5cbi5zcGVha2luZyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdhc3NldHMvaWNvbi9tZW51L3NwZWFraW5nLnN2ZycpO1xufVxuXG4ucmVhZGluZyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdhc3NldHMvaWNvbi9tZW51L3JlYWRpbmcuc3ZnJyk7XG59XG5cbi5pY29uLWJsb2NrIHtcbiAgICB3aWR0aDogNDJweDtcbiAgICBoZWlnaHQ6IDQycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtbGlnaHQtY29sb3IpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXRleHRib3gtYm94c2hhZG93KTtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZC1zaXplOiAyMHB4O1xufVxuXG5idXR0b24uYnRuLmJ0bi1jcmVhdGUge1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxudGg6bnRoLW9mLXR5cGUoNSksdGQ6bnRoLW9mLXR5cGUoNSkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIHRhYmxlIHJlc3BvbnNpdmUgKi9cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCksIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAvKlxuICAgICAgICAgICAgICAgICAgICAgIExhYmVsIHRoZSBkYXRhXG4gICAgICAgICAgICAgICAgICBZb3UgY291bGQgYWxzbyB1c2UgYSBkYXRhLSogYXR0cmlidXRlIGFuZCBjb250ZW50IGZvciB0aGlzLiBUaGF0IHdheSBcImJsb2F0c1wiIHRoZSBIVE1MLCB0aGlzIHdheSBtZWFucyB5b3UgbmVlZCB0byBrZWVwIEhUTUwgYW5kIENTUyBpbiBzeW5jLiBMZWEgVmVyb3UgaGFzIGEgY2xldmVyIHdheSB0byBoYW5kbGUgd2l0aCB0ZXh0LXNoYWRvdy5cbiAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgIHRkOm50aC1vZi10eXBlKDEpOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiTmFtZVwiO1xuICAgIH1cbiAgICB0ZDpudGgtb2YtdHlwZSgyKTpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlN0YXJ0XCI7XG4gICAgfVxuICAgIHRkOm50aC1vZi10eXBlKDMpOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiRW5kXCI7XG4gICAgfVxuICAgIHRkOm50aC1vZi10eXBlKDQpOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiUXVlc3Rpb24gVHlwZVwiO1xuICAgIH1cbiAgICB0ZDpudGgtb2YtdHlwZSg1KTpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIkFjdGlvblwiO1xuICAgIH1cbiAgICB0ZDpudGgtb2YtdHlwZSg1KSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5idG4tbGlua3tcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5idG4tY3JlYXRle1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuIl19 */");

/***/ }),

/***/ "./src/app/modules/manage/mock-test/mock-test-list/mock-test-list.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/manage/mock-test/mock-test-list/mock-test-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: MockTestListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockTestListComponent", function() { return MockTestListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/http/serviceIndex */ "./src/app/core/http/serviceIndex.ts");




let MockTestListComponent = class MockTestListComponent {
    constructor(_cservice, _router, _tableService, _activeRoute) {
        this._cservice = _cservice;
        this._router = _router;
        this._tableService = _tableService;
        this._activeRoute = _activeRoute;
        this.tableFilter = {};
        this.isAsc = true;
        this.isToast = false;
        this.isErr = false;
    }
    ngOnInit() {
        this._activeRoute.queryParams.subscribe((params) => {
            if (params.page) {
                this.tableFilter.page = params.page;
                this.tableFilter.limit = params.limit;
                this.getMocksList(this.tableFilter);
            }
            else if (params.search) {
                this.tableFilter.search = params.search;
                this.getMocksList(this.tableFilter);
            }
            else {
                let mock = this._activeRoute.snapshot.data["fullMockTest"];
                this.mocks = mock.questions;
                this.tableFilter = mock.filter;
            }
        });
    }
    getMocksList(currentFilter) {
        this.isLoading = true;
        this.subscription = this._tableService.getMockTestList(currentFilter)
            .subscribe((res) => {
            this.mocks = res.questions;
            this.tableFilter = res.filter;
            this.isLoading = false;
        });
    }
    fitter(sortColumn) {
        this.isAsc = !this.isAsc ? this.isAsc = true : this.isAsc = false;
        this.tableFilter.sortDirection = this.isAsc ? 'asc' : 'desc';
        this.tableFilter.sortColumn = sortColumn;
        this.getMocksList(this.tableFilter);
    }
    expand(mockId) {
        this.expandId = mockId == this.expandId ? undefined : mockId;
    }
    deleteMock(mock) {
        this.subscription = this._tableService.onDeleteMock(mock.questionId)
            .subscribe((res) => {
            this.getMocksList(this.tableFilter);
        });
    }
    goToEvaluate(id) {
        this._router.navigateByUrl("mock-test/evaluate/" + id);
    }
    shareMock(data) {
        let temp = {
            "email": data.userEmail,
            "mockTestId": data.questionId
        };
        this.subscription = this._tableService.shareMockEvaluate(temp)
            .subscribe((res) => {
            this.isErrText = res.message;
            this.isErr = false;
            this.isClose = false;
        }, (err) => {
            this.isToast = true;
            this.isErrText = err;
            this.isErr = true;
        });
    }
    startClass(data) {
        this.subscription = this._tableService.checkClass(data.data.questionId, data.data.status == "PAUSE" ? "active" : "pause")
            .subscribe((res) => {
            this.getMocksList(this.tableFilter);
        });
    }
    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
};
MockTestListComponent.ctorParameters = () => [
    { type: _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_3__["TableListService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
MockTestListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mock-test-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mock-test-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/mock-test/mock-test-list/mock-test-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mock-test-list.component.css */ "./src/app/modules/manage/mock-test/mock-test-list/mock-test-list.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_3__["TableListService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], MockTestListComponent);



/***/ }),

/***/ "./src/app/modules/manage/mock-test/mock-test-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/manage/mock-test/mock-test-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: MockTestRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockTestRoutingModule", function() { return MockTestRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_modules_manage_mock_test_reslovers_full_mock_test_reslover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modules/manage/mock-test/reslovers/full-mock-test.reslover */ "./src/app/modules/manage/mock-test/reslovers/full-mock-test.reslover.ts");
/* harmony import */ var _app_modules_manage_mock_test_reslovers_mock_test_detail_reslover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/manage/mock-test/reslovers/mock-test-detail.reslover */ "./src/app/modules/manage/mock-test/reslovers/mock-test-detail.reslover.ts");
/* harmony import */ var _app_modules_manage_mock_test_mock_test_create_mock_test_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/modules/manage/mock-test/mock-test-create/mock-test-create.component */ "./src/app/modules/manage/mock-test/mock-test-create/mock-test-create.component.ts");
/* harmony import */ var _app_modules_manage_mock_test_mock_test_list_mock_test_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/modules/manage/mock-test/mock-test-list/mock-test-list.component */ "./src/app/modules/manage/mock-test/mock-test-list/mock-test-list.component.ts");







const routes = [
    {
        path: "",
        component: _app_modules_manage_mock_test_mock_test_list_mock_test_list_component__WEBPACK_IMPORTED_MODULE_6__["MockTestListComponent"],
        resolve: {
            fullMockTest: _app_modules_manage_mock_test_reslovers_full_mock_test_reslover__WEBPACK_IMPORTED_MODULE_3__["FullMockTestResolver"]
        }
    },
    {
        path: "create",
        component: _app_modules_manage_mock_test_mock_test_create_mock_test_create_component__WEBPACK_IMPORTED_MODULE_5__["MockTestCreateComponent"],
    },
    {
        path: "create/:mockId",
        component: _app_modules_manage_mock_test_mock_test_create_mock_test_create_component__WEBPACK_IMPORTED_MODULE_5__["MockTestCreateComponent"],
        resolve: {
            mockDetail: _app_modules_manage_mock_test_reslovers_mock_test_detail_reslover__WEBPACK_IMPORTED_MODULE_4__["MockTestDetailResolver"]
        }
    }
];
let MockTestRoutingModule = class MockTestRoutingModule {
};
MockTestRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [
            _app_modules_manage_mock_test_reslovers_full_mock_test_reslover__WEBPACK_IMPORTED_MODULE_3__["FullMockTestResolver"],
            _app_modules_manage_mock_test_reslovers_mock_test_detail_reslover__WEBPACK_IMPORTED_MODULE_4__["MockTestDetailResolver"]
        ]
    })
], MockTestRoutingModule);



/***/ }),

/***/ "./src/app/modules/manage/mock-test/mock-test.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/manage/mock-test/mock-test.module.ts ***!
  \**************************************************************/
/*! exports provided: MockTestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockTestModule", function() { return MockTestModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _mock_test_list_mock_test_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mock-test-list/mock-test-list.component */ "./src/app/modules/manage/mock-test/mock-test-list/mock-test-list.component.ts");
/* harmony import */ var _mock_test_create_mock_test_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mock-test-create/mock-test-create.component */ "./src/app/modules/manage/mock-test/mock-test-create/mock-test-create.component.ts");
/* harmony import */ var _app_modules_manage_mock_test_mock_test_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/modules/manage/mock-test/mock-test-routing.module */ "./src/app/modules/manage/mock-test/mock-test-routing.module.ts");
/* harmony import */ var _app_shared_basic_components_basic_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/basic-components/basic.module */ "./src/app/shared/basic-components/basic.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");








let MockTestModule = class MockTestModule {
};
MockTestModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_mock_test_list_mock_test_list_component__WEBPACK_IMPORTED_MODULE_3__["MockTestListComponent"], _mock_test_create_mock_test_create_component__WEBPACK_IMPORTED_MODULE_4__["MockTestCreateComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _app_modules_manage_mock_test_mock_test_routing_module__WEBPACK_IMPORTED_MODULE_5__["MockTestRoutingModule"],
            _app_shared_basic_components_basic_module__WEBPACK_IMPORTED_MODULE_6__["BasicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        ],
        exports: [
            _app_modules_manage_mock_test_mock_test_routing_module__WEBPACK_IMPORTED_MODULE_5__["MockTestRoutingModule"]
        ]
    })
], MockTestModule);



/***/ }),

/***/ "./src/app/modules/manage/mock-test/reslovers/mock-test-detail.reslover.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/manage/mock-test/reslovers/mock-test-detail.reslover.ts ***!
  \*********************************************************************************/
/*! exports provided: MockTestDetailResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockTestDetailResolver", function() { return MockTestDetailResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/http/detail.service */ "./src/app/core/http/detail.service.ts");



let MockTestDetailResolver = class MockTestDetailResolver {
    constructor(question) {
        this.question = question;
    }
    resolve(route) {
        const mockUrl = `mock-test/${route.params['mockId']}`;
        return this.question.getDetail(mockUrl);
    }
};
MockTestDetailResolver.ctorParameters = () => [
    { type: _app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_2__["DetailService"] }
];
MockTestDetailResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_2__["DetailService"]])
], MockTestDetailResolver);



/***/ })

}]);
//# sourceMappingURL=modules-manage-mock-test-mock-test-module-es2015.js.map