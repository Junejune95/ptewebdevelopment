(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/core/http/detail.service.ts":
/*!*********************************************!*\
  !*** ./src/app/core/http/detail.service.ts ***!
  \*********************************************/
/*! exports provided: DetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailService", function() { return DetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let DetailService = class DetailService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/api/v1/";
    }
    getDetail(detailUrl) {
        let url = this.baseUrl + detailUrl;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((obj) => obj || {}));
    }
    getAllBranch() {
        return this.http.get(this.baseUrl + "branchs").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((obj) => obj || []));
    }
    getdesiredScore() {
        return this.http.get(this.baseUrl + "desired-score").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((obj) => obj || []));
    }
    getAllPackage() {
        return this.http.get(this.baseUrl + "packages").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((obj) => obj || []));
    }
    getHome() {
        return this.http.get(this.baseUrl + "user/home/progress").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((obj) => obj || []));
    }
    getActivePackage(userId) {
        return this.http.get(this.baseUrl + `users/${userId}/check-user-limitation`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((obj) => obj || {}));
    }
    getPaymentHistory() {
        return this.http.get(this.baseUrl + `user/payment/histories`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((obj) => obj || {}));
    }
    getInvoicePdf(url) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Accept', 'application/pdf');
        return this.http.get(url, { headers: headers, responseType: 'blob' });
    }
};
DetailService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
DetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], DetailService);



/***/ }),

/***/ "./src/app/core/http/question.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/http/question.service.ts ***!
  \***********************************************/
/*! exports provided: QuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function() { return QuestionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let QuestionService = class QuestionService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/api/v1";
    }
    getQuestionProgess(questionUrl) {
        return this.http.get(`${this.baseUrl}/users/${questionUrl}/check-progress`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])());
    }
    getMangeProgess(questionUrl) {
        return this.http.get(`${this.baseUrl}/users/${questionUrl}/manage-progress`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])());
    }
    getPredictionInfo(type) {
        return this.http.get(`${this.baseUrl}/users/${type}/info`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])());
    }
    getStudyPlannInfo() {
        return this.http.get(`${this.baseUrl}/users/studyplan/info`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])());
    }
};
QuestionService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
QuestionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], QuestionService);



/***/ }),

/***/ "./src/app/modules/manage/mock-test/reslovers/full-mock-test.reslover.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/manage/mock-test/reslovers/full-mock-test.reslover.ts ***!
  \*******************************************************************************/
/*! exports provided: FullMockTestResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullMockTestResolver", function() { return FullMockTestResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_core_http_table_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/http/table-list.service */ "./src/app/core/http/table-list.service.ts");


;

let FullMockTestResolver = class FullMockTestResolver {
    constructor(service) {
        this.service = service;
    }
    resolve() {
        let filterMaker = {
            page: 1,
            limit: 10,
            sortColumn: 'name',
            sortDirection: 'desc'
        };
        return this.service.getMockTestList(filterMaker);
    }
};
FullMockTestResolver.ctorParameters = () => [
    { type: _app_core_http_table_list_service__WEBPACK_IMPORTED_MODULE_2__["TableListService"] }
];
FullMockTestResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], FullMockTestResolver);



/***/ }),

/***/ "./src/app/modules/manage/reslovers/other-detail.reslover.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/manage/reslovers/other-detail.reslover.ts ***!
  \*******************************************************************/
/*! exports provided: OtherDetailResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherDetailResolver", function() { return OtherDetailResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/http/detail.service */ "./src/app/core/http/detail.service.ts");



let OtherDetailResolver = class OtherDetailResolver {
    constructor(question) {
        this.question = question;
    }
    resolve(route) {
        let detailName = route.data['detailName'];
        const studyPlanUrl = `${route.params['moduleName'].toLowerCase()}/${detailName}/${route.params['detailId']}`;
        return this.question.getDetail(studyPlanUrl);
    }
};
OtherDetailResolver.ctorParameters = () => [
    { type: _app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_2__["DetailService"] }
];
OtherDetailResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], OtherDetailResolver);



/***/ }),

/***/ "./src/app/modules/manage/reslovers/otherQuestion.reslover.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/manage/reslovers/otherQuestion.reslover.ts ***!
  \********************************************************************/
/*! exports provided: OtherQuestionResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherQuestionResolver", function() { return OtherQuestionResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_core_http_question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/http/question.service */ "./src/app/core/http/question.service.ts");



let OtherQuestionResolver = class OtherQuestionResolver {
    constructor(question) {
        this.question = question;
    }
    resolve(route, state) {
        let type = route.params['type'] ? route.params['type'].toLowerCase() : route.data['type'].toLowerCase();
        return this.question.getPredictionInfo(type);
    }
};
OtherQuestionResolver.ctorParameters = () => [
    { type: _app_core_http_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"] }
];
OtherQuestionResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], OtherQuestionResolver);



/***/ }),

/***/ "./src/app/modules/manage/reslovers/questions-type.reslover.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/manage/reslovers/questions-type.reslover.ts ***!
  \*********************************************************************/
/*! exports provided: QuestionTypeResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionTypeResolver", function() { return QuestionTypeResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_core_http_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/http/common.service */ "./src/app/core/http/common.service.ts");



let QuestionTypeResolver = class QuestionTypeResolver {
    constructor(cservice) {
        this.cservice = cservice;
    }
    resolve(route, state) {
        const moduleName = route.paramMap.get("moduleName").toLowerCase();
        return this.cservice.getQuestionTypeListByName(moduleName);
    }
};
QuestionTypeResolver.ctorParameters = () => [
    { type: _app_core_http_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }
];
QuestionTypeResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], QuestionTypeResolver);



/***/ }),

/***/ "./src/app/shared/models/CommonModel.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/models/CommonModel.ts ***!
  \**********************************************/
/*! exports provided: MockTest, questionSub, PredictionFile, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockTest", function() { return MockTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "questionSub", function() { return questionSub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictionFile", function() { return PredictionFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class MockTest {
}
class questionSub {
    constructor(mark, list) {
        this.markDistribution = mark;
        this.list = list;
    }
    static create(mark, list) {
        return new questionSub(mark, list);
    }
}
class PredictionFile {
}
class User {
}


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map