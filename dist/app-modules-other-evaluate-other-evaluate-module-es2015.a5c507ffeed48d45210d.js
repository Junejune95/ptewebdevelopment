(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-other-evaluate-other-evaluate-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/other-evaluate/full-mock-socre/full-mock-socre.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/other-evaluate/full-mock-socre/full-mock-socre.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content-wrapper\">\n    <div class=\"header\">\n        <div class=\"container\">\n            <div class=\"d-flex align-items-center\">\n                <div class=\"logo-img\">\n                    <div class=\"border-img-bg\">\n                        <img src=\"assets/images/Lotus-Logo.png\">\n                    </div>\n\n                </div>\n\n                <div class=\"d-flex flex-column w-80 align-items-center\">\n                    <p class=\"company-name\">Alchemist Academy</p>\n                    <p class=\"mock-title\">Mock Test Score Report</p>\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n    <div class=\"container h-100 my-3 overLay\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"d-flex\">\n                    <label class=\"lbl-title\">NAME:</label>\n                    <label class=\"lbl-txt\">{{scoreData.studentName}}</label>\n                </div>\n                <div class=\"d-flex\">\n                    <label class=\"lbl-title\">GENDER:</label>\n                    <label class=\"lbl-txt\">{{scoreData.gender}}</label>\n                </div>\n                <div class=\"d-flex\">\n                    <label class=\"lbl-title\">TEST_TAKER ID:</label>\n                    <label class=\"lbl-txt\">{{scoreData.takerId}}</label>\n                </div>\n                <div class=\"d-flex\">\n                    <label class=\"lbl-date\">Date:</label>\n                    <label class=\"lbl-date\">{{\n                        scoreData.testCentre.issueDate | defaultDate\n                        }}</label>\n                </div>\n            </div>\n\n            <div class=\"col-md-4\">\n                <div class=\"d-flex justify-content-end\">\n                    <div class=\"score-box\">\n                        <div class=\"score-title\">Overall Score</div>\n                        <div class=\"score-txt\">\n                            <p>{{scoreData.overAllScore}}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n\n        <p class=\"main-title\">Communicative Skills</p>\n        <div class=\"horizontal-bar\"></div>\n        <div class=\"d-flex justify-content-between my-2\">\n            <div class=\"module-score\">\n                {{scoreData.communicativeSkills.mockListeningPercent}}\n            </div>\n            <div class=\"module-score\">\n                {{scoreData.communicativeSkills.mockReadingPercent}}\n            </div>\n            <div class=\"module-score\">\n                {{scoreData.communicativeSkills.mockSpeakingPercent}}\n            </div>\n            <div class=\"module-score\">\n                {{scoreData.communicativeSkills.mockWritingPercent}}\n            </div>\n        </div>\n        <div class=\"horizontal-bar\"></div>\n\n        <div class=\"d-flex py-2\" style=\"position: relative;\">\n            <div class=\"left-wrapper\">\n                <div class=\"module-progress-wrapper\">\n                    <div class=\"module-name\">Listening</div>\n                    <div class=\"progress-wrapper\">\n                        <div class=\"progress\">\n                            <div class=\"progress-bar listening-bg\" role=\"progressbar\" aria-valuemin=\"0\"\n                                aria-valuemax=\"100\"\n                                [ngStyle]=\"{width:(scoreData.communicativeSkills.mockListeningPercent+10) + '%'}\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"module-progress-wrapper\">\n                    <div class=\"module-name\">Reading</div>\n                    <div class=\"progress-wrapper\">\n                        <div class=\"progress\">\n                            <div class=\"progress-bar reading-bg\" role=\"progressbar\" aria-valuemin=\"0\"\n                                aria-valuemax=\"100\"\n                                [ngStyle]=\"{width:(scoreData.communicativeSkills.mockReadingPercent+10) + '%'}\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"module-progress-wrapper\">\n                    <div class=\"module-name\">Speaking</div>\n                    <div class=\"progress-wrapper\">\n                        <div class=\"progress\">\n                            <div class=\"progress-bar speaking-bg\" role=\" progressbar\" aria-valuemin=\"0\"\n                                aria-valuemax=\"100\"\n                                [ngStyle]=\"{width:scoreData.communicativeSkills.mockSpeakingPercent+10 + '%'}\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"module-progress-wrapper\">\n                    <div class=\"module-name\">Writing</div>\n                    <div class=\"progress-wrapper\">\n                        <div class=\"progress\">\n                            <div class=\"progress-bar writing-bg\" role=\"progressbar\" aria-valuemin=\"0\"\n                                aria-valuemax=\"100\"\n                                [ngStyle]=\"{width:scoreData.communicativeSkills.mockWritingPercent+10 + '%'}\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"bar-content\" [ngStyle]=\"{'left': (60/100 * scoreData.overAllScore) + 15 + '%'}\">\n                <div class=\"right-wrapper\">\n                    <div class=\"bar\"></div>\n                    <div class=\"d-flex justify-content-between flex-column\">\n                        <p class=\"overall-txt\">Overall Score: {{scoreData.overAllScore}}</p>\n                        <p class=\"code-txt\">REPORT CODE: {{scoreData.testCentre.testCode}}</p>\n                    </div>\n\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"horizontal-bar\"></div>\n\n        <div class=\"d-flex mt-2\">\n            <div class=\"ai-img\">\n                <img src=\"assets/icon/question/ai-icon.svg\">\n            </div>\n            <p class=\"mock-ai-txt\">Powered {{scoreData.testCentre.testName}}</p>\n        </div>\n        <p class=\"info-txt\">For an in-depth analysis of this score report, please contact Alchemist Academy!</p>\n    </div>\n\n\n    <div class=\"footer\">\n        <p>Note: The purpose of this PTE Mock Test Score Report is for evaluation before the real TEST and the score\n            report is not the reflection of the actual PTE-A TEST</p>\n    </div>\n</div>\n<!-- <div class=\"content-wrapper\">\n    <div class=\"container h-100 my-3 overLay\">\n        <div class=\"d-flex\" style=\"position: relative;\">\n            <div class=\"left-wrapper\">\n                <div class=\"module-progress-wrapper\">\n                    <div class=\"module-name\">Listening</div>\n                    <div class=\"progress-wrapper\">\n                        <div class=\"progress\">\n                            <div class=\"progress-bar listening-bg\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n                                [ngStyle]=\"{width:(90+10) + '%'}\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"module-progress-wrapper\">\n                    <div class=\"module-name\">Reading</div>\n                    <div class=\"progress-wrapper\">\n                        <div class=\"progress\">\n                            <div class=\"progress-bar reading-bg\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n                                [ngStyle]=\"{width:100 + '%'}\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"module-progress-wrapper\">\n                    <div class=\"module-name\">Speaking</div>\n                    <div class=\"progress-wrapper\">\n                        <div class=\"progress\">\n                            <div class=\"progress-bar speaking-bg\" role=\" progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n                                [ngStyle]=\"{width:100 + '%'}\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"module-progress-wrapper\">\n                    <div class=\"module-name\">Writing</div>\n                    <div class=\"progress-wrapper\">\n                        <div class=\"progress\">\n                            <div class=\"progress-bar writing-bg\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n                                [ngStyle]=\"{width:100 + '%'}\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"bar-content\" [ngStyle]=\"{'left': checkprogress(0) + '%'}\">\n                <div class=\"right-wrapper\">\n                    <div class=\"bar\"></div>\n                    <div class=\"d-flex justify-content-between flex-column\">\n                        <p class=\"overall-txt\">Overall Score: 90</p>\n                        <p class=\"code-txt\">REPORT CODE: XYZ1234</p>\n                    </div>\n        \n                </div>\n            </div>\n        \n        </div>\n    </div>\n</div> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/other-evaluate/full-mocktest-evaluate/full-mocktest-evaluate.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/other-evaluate/full-mocktest-evaluate/full-mocktest-evaluate.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"!scoreData; else showScore\">\n    <ng-container *ngIf=\"currentQuestions.questions[selectedIndex] as question\">\n        <header-evaluate-menu [questionCode]=\"question.questionType\" [timmer]=\"currentQuestions.timer\"\n        (timerEvent)=\"onTimeEnd($event)\">\n            <show-question-count [currentNo]=\"selectedIndex+1\" [totalCount]=\"currentQuestions.questions.length\">\n                <question-by-module [moduleName]=\"currentQuestions.moduleType\" [question]=\"question\" (getEmitAnswer)=\"getAnswer($event)\"></question-by-module>\n            </show-question-count>\n        </header-evaluate-menu>\n    </ng-container>\n    \n</ng-container>\n\n<ng-template #showScore>\n    <full-mock-socre [scoreData]=\"scoreData\"></full-mock-socre>\n</ng-template>\n\n<!-- <full-mock-socre [scoreData]=\"scoreData\"></full-mock-socre> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/other-evaluate/prediction-evaluate/prediction-evaluate.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/other-evaluate/prediction-evaluate/prediction-evaluate.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"!scoreResult; else showScore\">\n    <ng-container *ngIf=\"questionList[selectedIndex].question as question\">\n        <header-evaluate-menu [questionCode]=\"question.questionType\" [timmer]=\"timmer\">\n            <show-question-count [currentNo]=\"selectedIndex+1\" [totalCount]=\"questionList.length\">\n                <question-by-module [moduleName]=\"routeParam.moduleName\" [question]=\"question\" (getEmitAnswer)=\"getAnswer($event)\"></question-by-module>\n            </show-question-count>\n        </header-evaluate-menu>\n    </ng-container>\n</ng-container>\n<ng-template #showScore>\n    <header-evaluate-menu [questionCode]=\"questionCode\">\n        <user-info [info]=\"scoreResult\"></user-info>\n        <ng-container *ngFor=\"let score of scoreResult.results;let i=index;\">\n            <show-question-count [currentNo]=\"i+1\">\n                <score-by-module [moduleName]=\"routeParam.moduleName\" [scoreResult]=\"score\"></score-by-module>\n            </show-question-count>\n        </ng-container>\n        <div class=\"footer-button-block\">\n            <cancel-btn>Cancel</cancel-btn>\n        </div>\n    </header-evaluate-menu>\n</ng-template>");

/***/ }),

/***/ "./src/app/modules/other-evaluate/full-mock-socre/full-mock-socre.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/other-evaluate/full-mock-socre/full-mock-socre.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n    width: 21cm;\n}\n\n.w-80 {\n    width: 80%;\n}\n\n.company-name, p.mock-title, .footer>p,\n.lbl-title, .lbl-txt, .score-box, .score-txt {\n    font-family: alice;\n}\n\n.lbl-date, .lbl-title, p.overall-txt {\n    font-weight: bold;\n}\n\n.lbl-title, .lbl-txt, .lbl-date {\n    font-size: 18px;\n}\n\n.logo-img {\n    width: 85px;\n    background: var(--text-light-color);\n    border-radius: 50%;\n    height: 85px;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    margin-right: 20px;\n}\n\n.border-img-bg {\n    width: 80px;\n    background: var(--text-light-color);\n    border-radius: 50%;\n    height: 80px;\n    border: solid 1px var(--primary-color);\n}\n\n.logo-img img,.ai-img img {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: contain;\n       object-fit: contain;\n}\n\n.header {\n    background: var(--half-bg-color);\n    padding: 0;\n}\n\n.footer {\n    background: var(--half-bg-color);\n    bottom: 0;\n    position: fixed;\n    width: 100%;\n    text-align: center;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n}\n\n.footer>p {\n    text-align: center;\n    margin-bottom: 0;\n    padding: 10px;\n    width: 660px;\n    font-size: 18px;\n}\n\n.company-name {\n    font-weight: bold;\n    font-size: 1.8rem;\n    margin-bottom: 0;\n}\n\np.mock-title {\n    font-size: 1.2rem;\n    font-weight: 400;\n}\n\np.user-name {\n    font-size: 18px;\n    font-weight: 500;\n    color: #6d7891;\n    margin-bottom: 3px;\n}\n\n.score-box {\n    width: 130px;\n    height: 130px;\n    border-radius: 30px 30px 100px 100px;\n    background: #d9d9d9;\n}\n\n.score-title {\n    background: var(--half-bg-color);\n    border-radius: 10px 10px 0px 0px;\n    text-align: center;\n    padding: 4px;\n    font-size: 18px;\n    font-weight: bold;\n    text-shadow: 2px 2px 12px rgb(74 74 74 / 70%);\n}\n\n/* .score-txt{\n    color: #2b3345;\n    box-shadow: var(--card-boxshadow);\n} */\n\n.score-txt>p {\n    font-size: 3rem;\n    text-align: center;\n    margin-bottom: 0;\n    text-shadow: 2px 2px 6px rgb(74 74 74 / 70%);\n    font-weight: bold;\n}\n\n.border-right {\n    border-right: solid 1.5px #ababab;\n}\n\n.module-score {\n    width: 80px;\n    height: 80px;\n    border-radius: 50%;\n    border: solid 8px;\n    font-size: 2rem;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    font-weight: 500;\n    text-shadow: 2px 2px 6px rgb(74 74 74 / 70%);\n}\n\n.module-name {\n    text-shadow: 2px 2px 0px #b5b5b5;\n    font-size: 1.5rem;\n    font-weight: 500;\n    width: 150px;\n}\n\np.main-title {\n    font-size: 20px;\n    font-weight: 500;\n}\n\n.module-score>p {\n    margin-bottom: 0;\n    font-size: 18px;\n    font-weight: 500;\n    padding-top: 23px;\n    text-align: center;\n}\n\np.module-txt {\n    color: #6d7891;\n    font-size: 16px;\n    font-weight: 500;\n    text-align: center;\n}\n\nspan.progress-title {\n    color: #6d7891;\n    font-size: 13px;\n    font-weight: 500;\n    /* width: 87px; */\n    /* text-align: right; */\n    /* margin-right: 8px; */\n}\n\n.progress {\n    height: 30px;\n    border-radius: 0;\n    background: #ececec;\n    /* width: 81%;\n    margin-left: 5px; */\n}\n\nspan.progress-mark {\n    /* margin-right: 7px; */\n    font-weight: 500;\n    font-size: 14px;\n    /* width: 77px; */\n    /* text-align: right;\n    margin-right: 10px; */\n}\n\n.progress-wrapper {\n   \n    width: 100%;\n}\n\n.reading {\n    background-color: #FFC107;\n}\n\n.listening {\n    background-color: #7B0702;\n}\n\n.speaking {\n    background-color: #6D7891;\n}\n\n.writing {\n    background-color: #163374;\n}\n\np.inner-title {\n    margin-bottom: 10px !important;\n    font-size: 14px;\n    font-weight: bold;\n}\n\n.overall>div {\n    /* width: 6px; */\n    /* background: #6d7891; */\n    height: 100%;\n}\n\n.overall {\n    position: absolute;\n    height: 100%;\n    margin-top: -10px;\n    width: inherit;\n}\n\n.bar {\n    height: 100%;\n    background: #6d7891;\n    width: 6px;\n    border-radius: 10px;\n}\n\n.progress-title-wrapper {\n    height: 29px;\n    margin-bottom: 3px;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    padding-right: 4px;\n}\n\n.overall>span {\n    color: #6d7891;\n    font-size: 14px;\n    font-weight: 500;\n    padding-left: 10px;\n    margin-top: -10px;\n}\n\n.student-name {\n    -webkit-writing-mode: vertical-rl;\n            writing-mode: vertical-rl;\n    font-weight: 500;\n    font-size: 14px;\n}\n\nlabel-text label {\n    font-size: 14px !important;\n}\n\n.horizontal-bar {\n    background-color: #595959;\n    height: 4px;\n    border-radius: 10px;\n}\n\n.listening-bg {\n    background-color: var(--listening-color);\n}\n\n.reading-bg {\n    background-color: var(--reading-color);\n}\n\n.speaking-bg {\n    background-color: var(--speaking-color);\n}\n\n.writing-bg {\n    background-color: var(--writing-color);\n}\n\n.left-wrapper {\n    width: 70%;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n}\n\n.right-wrapper {\n    display: -webkit-box;\n    display: flex;\n    height: 100%;\n}\n\n.bar-content{\n    position: absolute;\n    height: 90%;\n}\n\n.progress-bar {\n    height: 36px;\n    width: 100%;\n}\n\n.module-progress-wrapper {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n}\n\np.code-txt {\n    font-weight: bold;\n    margin-bottom: 0;\n    text-shadow: 2px 2px 0px #b5b5b5;\n}\n\n.ai-img {\n    width: 60px;\n    height: 60px;\n}\n\np.mock-ai-txt {\n    font-size: 2.4rem;\n    font-weight: bold;\n    color: var(--half-bg-color);\n}\n\np.info-txt {\n    font-weight: bold;\n    font-size: 18px;\n}\n\n@media only screen and (max-width: 556px) {\n    .w-80 {\n        width: unset;\n    }\n}\n\n@media only screen and (max-width: 414px) {\n    .company-name {\n        font-size: 1.8rem;\n    }\n\n    p.mock-title {\n        font-size: 1.2rem;\n        font-weight: 400;\n    }\n}\n\n@media only screen and (max-width: 360px) {\n    .company-name {\n        font-size: 1.4rem;\n    }\n\n    p.mock-title {\n        font-size: 1rem;\n        font-weight: 400;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vdGhlci1ldmFsdWF0ZS9mdWxsLW1vY2stc29jcmUvZnVsbC1tb2NrLXNvY3JlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQ0FBbUM7SUFDbkMsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLG1DQUFtQztJQUNuQyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQW1CO09BQW5CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsU0FBUztJQUNULGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Is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QUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9vdGhlci1ldmFsdWF0ZS9mdWxsLW1vY2stc29jcmUvZnVsbC1tb2NrLXNvY3JlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMjFjbTtcbn1cblxuLnctODAge1xuICAgIHdpZHRoOiA4MCU7XG59XG5cbi5jb21wYW55LW5hbWUsIHAubW9jay10aXRsZSwgLmZvb3Rlcj5wLFxuLmxibC10aXRsZSwgLmxibC10eHQsIC5zY29yZS1ib3gsIC5zY29yZS10eHQge1xuICAgIGZvbnQtZmFtaWx5OiBhbGljZTtcbn1cblxuLmxibC1kYXRlLCAubGJsLXRpdGxlLCBwLm92ZXJhbGwtdHh0IHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxibC10aXRsZSwgLmxibC10eHQsIC5sYmwtZGF0ZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ubG9nby1pbWcge1xuICAgIHdpZHRoOiA4NXB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXRleHQtbGlnaHQtY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDg1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmJvcmRlci1pbWctYmcge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXRleHQtbGlnaHQtY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5cbi5sb2dvLWltZyBpbWcsLmFpLWltZyBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4uaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oYWxmLWJnLWNvbG9yKTtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4uZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oYWxmLWJnLWNvbG9yKTtcbiAgICBib3R0b206IDA7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZm9vdGVyPnAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgd2lkdGg6IDY2MHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmNvbXBhbnktbmFtZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxucC5tb2NrLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG5wLnVzZXItbmFtZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICM2ZDc4OTE7XG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xufVxuXG4uc2NvcmUtYm94IHtcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgaGVpZ2h0OiAxMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4IDMwcHggMTAwcHggMTAwcHg7XG4gICAgYmFja2dyb3VuZDogI2Q5ZDlkOTtcbn1cblxuLnNjb3JlLXRpdGxlIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oYWxmLWJnLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAxMnB4IHJnYig3NCA3NCA3NCAvIDcwJSk7XG59XG5cbi8qIC5zY29yZS10eHR7XG4gICAgY29sb3I6ICMyYjMzNDU7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tY2FyZC1ib3hzaGFkb3cpO1xufSAqL1xuXG4uc2NvcmUtdHh0PnAge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA2cHggcmdiKDc0IDc0IDc0IC8gNzAlKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJvcmRlci1yaWdodCB7XG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxLjVweCAjYWJhYmFiO1xufVxuXG4ubW9kdWxlLXNjb3JlIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogc29saWQgOHB4O1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA2cHggcmdiKDc0IDc0IDc0IC8gNzAlKTtcbn1cblxuLm1vZHVsZS1uYW1lIHtcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAwcHggI2I1YjViNTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHdpZHRoOiAxNTBweDtcbn1cblxucC5tYWluLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuXG4ubW9kdWxlLXNjb3JlPnAge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgcGFkZGluZy10b3A6IDIzcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5wLm1vZHVsZS10eHQge1xuICAgIGNvbG9yOiAjNmQ3ODkxO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuc3Bhbi5wcm9ncmVzcy10aXRsZSB7XG4gICAgY29sb3I6ICM2ZDc4OTE7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgLyogd2lkdGg6IDg3cHg7ICovXG4gICAgLyogdGV4dC1hbGlnbjogcmlnaHQ7ICovXG4gICAgLyogbWFyZ2luLXJpZ2h0OiA4cHg7ICovXG59XG5cbi5wcm9ncmVzcyB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYmFja2dyb3VuZDogI2VjZWNlYztcbiAgICAvKiB3aWR0aDogODElO1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7ICovXG59XG5cbnNwYW4ucHJvZ3Jlc3MtbWFyayB7XG4gICAgLyogbWFyZ2luLXJpZ2h0OiA3cHg7ICovXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgLyogd2lkdGg6IDc3cHg7ICovXG4gICAgLyogdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyAqL1xufVxuXG4ucHJvZ3Jlc3Mtd3JhcHBlciB7XG4gICBcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnJlYWRpbmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkMxMDc7XG59XG5cbi5saXN0ZW5pbmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3QjA3MDI7XG59XG5cbi5zcGVha2luZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZENzg5MTtcbn1cblxuLndyaXRpbmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNjMzNzQ7XG59XG5cbnAuaW5uZXItdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5vdmVyYWxsPmRpdiB7XG4gICAgLyogd2lkdGg6IDZweDsgKi9cbiAgICAvKiBiYWNrZ3JvdW5kOiAjNmQ3ODkxOyAqL1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLm92ZXJhbGwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgd2lkdGg6IGluaGVyaXQ7XG59XG5cbi5iYXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjNmQ3ODkxO1xuICAgIHdpZHRoOiA2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnByb2dyZXNzLXRpdGxlLXdyYXBwZXIge1xuICAgIGhlaWdodDogMjlweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcbn1cblxuLm92ZXJhbGw+c3BhbiB7XG4gICAgY29sb3I6ICM2ZDc4OTE7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuXG4uc3R1ZGVudC1uYW1lIHtcbiAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5sYWJlbC10ZXh0IGxhYmVsIHtcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbn1cblxuLmhvcml6b250YWwtYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk1OTU5O1xuICAgIGhlaWdodDogNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cblxuLmxpc3RlbmluZy1iZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlzdGVuaW5nLWNvbG9yKTtcbn1cblxuLnJlYWRpbmctYmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlYWRpbmctY29sb3IpO1xufVxuXG4uc3BlYWtpbmctYmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNwZWFraW5nLWNvbG9yKTtcbn1cblxuLndyaXRpbmctYmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdyaXRpbmctY29sb3IpO1xufVxuXG4ubGVmdC13cmFwcGVyIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnJpZ2h0LXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYmFyLWNvbnRlbnR7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogOTAlO1xufVxuXG4ucHJvZ3Jlc3MtYmFyIHtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5tb2R1bGUtcHJvZ3Jlc3Mtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5wLmNvZGUtdHh0IHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDBweCAjYjViNWI1O1xufVxuXG4uYWktaW1nIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG59XG5cbnAubW9jay1haS10eHQge1xuICAgIGZvbnQtc2l6ZTogMi40cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB2YXIoLS1oYWxmLWJnLWNvbG9yKTtcbn1cblxucC5pbmZvLXR4dCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1NnB4KSB7XG4gICAgLnctODAge1xuICAgICAgICB3aWR0aDogdW5zZXQ7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxNHB4KSB7XG4gICAgLmNvbXBhbnktbmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIH1cblxuICAgIHAubW9jay10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICAgIC5jb21wYW55LW5hbWUge1xuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICB9XG5cbiAgICBwLm1vY2stdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/other-evaluate/full-mock-socre/full-mock-socre.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/other-evaluate/full-mock-socre/full-mock-socre.component.ts ***!
  \*************************************************************************************/
/*! exports provided: FullMockSocreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullMockSocreComponent", function() { return FullMockSocreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FullMockSocreComponent = class FullMockSocreComponent {
    constructor() { }
    ngOnInit() {
    }
    checkPercent(val) {
        return (Number(val) + 31) + "%";
    }
    checkprogress(val) {
        console.log(val);
        let res = (60 / 100 * val) + 15;
        console.log((50 / 100 * val));
        return res;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FullMockSocreComponent.prototype, "scoreData", void 0);
FullMockSocreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'full-mock-socre',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./full-mock-socre.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/other-evaluate/full-mock-socre/full-mock-socre.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./full-mock-socre.component.css */ "./src/app/modules/other-evaluate/full-mock-socre/full-mock-socre.component.css")).default]
    })
], FullMockSocreComponent);



/***/ }),

/***/ "./src/app/modules/other-evaluate/full-mocktest-evaluate/full-mocktest-evaluate.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/other-evaluate/full-mocktest-evaluate/full-mocktest-evaluate.component.css ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb3RoZXItZXZhbHVhdGUvZnVsbC1tb2NrdGVzdC1ldmFsdWF0ZS9mdWxsLW1vY2t0ZXN0LWV2YWx1YXRlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/other-evaluate/full-mocktest-evaluate/full-mocktest-evaluate.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/other-evaluate/full-mocktest-evaluate/full-mocktest-evaluate.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: FullMocktestEvaluateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullMocktestEvaluateComponent", function() { return FullMocktestEvaluateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_core_http_evaluate_question_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/http/evaluate-question.service */ "./src/app/core/http/evaluate-question.service.ts");
/* harmony import */ var _app_shared_question_components_question_by_module_question_by_module_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/question-components/question-by-module/question-by-module.component */ "./src/app/shared/question-components/question-by-module/question-by-module.component.ts");





let FullMocktestEvaluateComponent = class FullMocktestEvaluateComponent {
    constructor(_activeRoute, _saveService) {
        this._activeRoute = _activeRoute;
        this._saveService = _saveService;
        this.moduleIndex = 0;
        this.selectedIndex = 0;
        this.currentQuestions = [];
        this.mockEvaluate = {
            userAnswers: [],
            files: []
        };
        this.isTimerEnd = false;
    }
    ngOnInit() {
        this.mockQuestions = this._activeRoute.snapshot.data['questionList'].questions;
        this.currentQuestions = this.mockQuestions[this.moduleIndex];
        this.mockEvaluate.mockTestId = this._activeRoute.snapshot.params['mockId'];
    }
    getAnswer(ans) {
        this.mockEvaluate.userAnswers.push(ans);
        if (this.isTimerEnd == true) {
            if (this.moduleIndex < this.mockQuestions.length - 1) {
                this.moduleIndex += 1;
                this.currentQuestions = this.mockQuestions[this.moduleIndex];
                this.selectedIndex = 0;
                this.isTimerEnd = false;
            }
            else
                this.onSubmit();
        }
        else {
            if (this.selectedIndex < this.currentQuestions.questions.length - 1) {
                this.selectedIndex += 1;
            }
            else {
                if (this.moduleIndex < this.mockQuestions.length - 1) {
                    this.moduleIndex += 1;
                    this.currentQuestions = this.mockQuestions[this.moduleIndex];
                    this.selectedIndex = 0;
                }
                else
                    this.onSubmit();
            }
        }
    }
    onTimeEnd(e) {
        if (e.action == 'done') {
            this.isTimerEnd = true;
            this.questionModule.onSubmit();
        }
    }
    onSubmit() {
        this.subscription = this._saveService.onEvaluateFullMock(this.mockEvaluate)
            .subscribe((res) => {
            this.scoreData = res;
        });
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        if (this.subscription)
            this.subscription.unsubscribe();
    }
    ngAfterViewInit() {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
    }
};
FullMocktestEvaluateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _app_core_http_evaluate_question_service__WEBPACK_IMPORTED_MODULE_3__["EvaluateQuestionService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_app_shared_question_components_question_by_module_question_by_module_component__WEBPACK_IMPORTED_MODULE_4__["QuestionByModuleComponent"], { static: false })
], FullMocktestEvaluateComponent.prototype, "questionModule", void 0);
FullMocktestEvaluateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-full-mocktest-evaluate',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./full-mocktest-evaluate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/other-evaluate/full-mocktest-evaluate/full-mocktest-evaluate.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./full-mocktest-evaluate.component.css */ "./src/app/modules/other-evaluate/full-mocktest-evaluate/full-mocktest-evaluate.component.css")).default]
    })
], FullMocktestEvaluateComponent);



/***/ }),

/***/ "./src/app/modules/other-evaluate/other-evaluate.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/other-evaluate/other-evaluate.module.ts ***!
  \*****************************************************************/
/*! exports provided: OtherEvaluateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherEvaluateModule", function() { return OtherEvaluateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _prediction_evaluate_prediction_evaluate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prediction-evaluate/prediction-evaluate.component */ "./src/app/modules/other-evaluate/prediction-evaluate/prediction-evaluate.component.ts");
/* harmony import */ var _app_modules_other_evaluate_otherevaluate_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/other-evaluate/otherevaluate-routing.module */ "./src/app/modules/other-evaluate/otherevaluate-routing.module.ts");
/* harmony import */ var _app_shared_basic_components_basic_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/basic-components/basic.module */ "./src/app/shared/basic-components/basic.module.ts");
/* harmony import */ var _app_shared_question_components_question_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/question-components/question-components.module */ "./src/app/shared/question-components/question-components.module.ts");
/* harmony import */ var _full_mocktest_evaluate_full_mocktest_evaluate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./full-mocktest-evaluate/full-mocktest-evaluate.component */ "./src/app/modules/other-evaluate/full-mocktest-evaluate/full-mocktest-evaluate.component.ts");
/* harmony import */ var _full_mock_socre_full_mock_socre_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./full-mock-socre/full-mock-socre.component */ "./src/app/modules/other-evaluate/full-mock-socre/full-mock-socre.component.ts");









let OtherEvaluateModule = class OtherEvaluateModule {
};
OtherEvaluateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_prediction_evaluate_prediction_evaluate_component__WEBPACK_IMPORTED_MODULE_3__["PredictionEvaluateComponent"], _full_mocktest_evaluate_full_mocktest_evaluate_component__WEBPACK_IMPORTED_MODULE_7__["FullMocktestEvaluateComponent"], _full_mock_socre_full_mock_socre_component__WEBPACK_IMPORTED_MODULE_8__["FullMockSocreComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _app_modules_other_evaluate_otherevaluate_routing_module__WEBPACK_IMPORTED_MODULE_4__["OtherEvaluateRoutingModule"],
            _app_shared_basic_components_basic_module__WEBPACK_IMPORTED_MODULE_5__["BasicModule"],
            _app_shared_question_components_question_components_module__WEBPACK_IMPORTED_MODULE_6__["QuestionComponentsModule"]
        ],
        exports: [
            _app_modules_other_evaluate_otherevaluate_routing_module__WEBPACK_IMPORTED_MODULE_4__["OtherEvaluateRoutingModule"]
        ]
    })
], OtherEvaluateModule);



/***/ }),

/***/ "./src/app/modules/other-evaluate/otherevaluate-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/other-evaluate/otherevaluate-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: OtherEvaluateRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherEvaluateRoutingModule", function() { return OtherEvaluateRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_modules_other_evaluate_reslovers_full_mocktest_detail_reslover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modules/other-evaluate/reslovers/full-mocktest-detail.reslover */ "./src/app/modules/other-evaluate/reslovers/full-mocktest-detail.reslover.ts");
/* harmony import */ var _app_modules_other_evaluate_reslovers_other_evaluate_reslover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/other-evaluate/reslovers/other-evaluate.reslover */ "./src/app/modules/other-evaluate/reslovers/other-evaluate.reslover.ts");
/* harmony import */ var _app_modules_other_evaluate_full_mocktest_evaluate_full_mocktest_evaluate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/modules/other-evaluate/full-mocktest-evaluate/full-mocktest-evaluate.component */ "./src/app/modules/other-evaluate/full-mocktest-evaluate/full-mocktest-evaluate.component.ts");
/* harmony import */ var _app_modules_other_evaluate_prediction_evaluate_prediction_evaluate_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/modules/other-evaluate/prediction-evaluate/prediction-evaluate.component */ "./src/app/modules/other-evaluate/prediction-evaluate/prediction-evaluate.component.ts");







const routes = [
    {
        path: ':moduleName/:evaluateId/enter-study-plan',
        component: _app_modules_other_evaluate_prediction_evaluate_prediction_evaluate_component__WEBPACK_IMPORTED_MODULE_6__["PredictionEvaluateComponent"],
        resolve: {
            questionList: _app_modules_other_evaluate_reslovers_other_evaluate_reslover__WEBPACK_IMPORTED_MODULE_4__["OtherEvaluateReslover"],
        },
        data: { evaluateName: 'study-plan' }
    },
    {
        path: ':moduleName/:evaluateId/enter-prediction',
        component: _app_modules_other_evaluate_prediction_evaluate_prediction_evaluate_component__WEBPACK_IMPORTED_MODULE_6__["PredictionEvaluateComponent"],
        resolve: {
            questionList: _app_modules_other_evaluate_reslovers_other_evaluate_reslover__WEBPACK_IMPORTED_MODULE_4__["OtherEvaluateReslover"],
        },
        data: { evaluateName: 'prediction' }
    },
    {
        path: ':moduleName/:evaluateId/enter-mock-test',
        component: _app_modules_other_evaluate_prediction_evaluate_prediction_evaluate_component__WEBPACK_IMPORTED_MODULE_6__["PredictionEvaluateComponent"],
        resolve: {
            questionList: _app_modules_other_evaluate_reslovers_other_evaluate_reslover__WEBPACK_IMPORTED_MODULE_4__["OtherEvaluateReslover"],
        },
        data: { evaluateName: 'mock-test' }
    },
    {
        path: 'evaluate-full-mock-test/:mockId',
        component: _app_modules_other_evaluate_full_mocktest_evaluate_full_mocktest_evaluate_component__WEBPACK_IMPORTED_MODULE_5__["FullMocktestEvaluateComponent"],
        resolve: {
            questionList: _app_modules_other_evaluate_reslovers_full_mocktest_detail_reslover__WEBPACK_IMPORTED_MODULE_3__["FullMockTestDetailResolver"],
        }
    },
];
let OtherEvaluateRoutingModule = class OtherEvaluateRoutingModule {
};
OtherEvaluateRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [
            _app_modules_other_evaluate_reslovers_other_evaluate_reslover__WEBPACK_IMPORTED_MODULE_4__["OtherEvaluateReslover"],
            _app_modules_other_evaluate_reslovers_full_mocktest_detail_reslover__WEBPACK_IMPORTED_MODULE_3__["FullMockTestDetailResolver"]
        ]
    })
], OtherEvaluateRoutingModule);



/***/ }),

/***/ "./src/app/modules/other-evaluate/prediction-evaluate/prediction-evaluate.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/other-evaluate/prediction-evaluate/prediction-evaluate.component.css ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb3RoZXItZXZhbHVhdGUvcHJlZGljdGlvbi1ldmFsdWF0ZS9wcmVkaWN0aW9uLWV2YWx1YXRlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/other-evaluate/prediction-evaluate/prediction-evaluate.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/other-evaluate/prediction-evaluate/prediction-evaluate.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: PredictionEvaluateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictionEvaluateComponent", function() { return PredictionEvaluateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_core_http_evaluate_question_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/http/evaluate-question.service */ "./src/app/core/http/evaluate-question.service.ts");




let PredictionEvaluateComponent = class PredictionEvaluateComponent {
    constructor(_activeRoute, _service) {
        this._activeRoute = _activeRoute;
        this._service = _service;
        this.selectedIndex = 0;
        this.answerList = [];
    }
    ngOnInit() {
        this.routeParam = this._activeRoute.snapshot.params;
        this.questionList = this._activeRoute.snapshot.data['questionList'].questionList;
        console.log(this._activeRoute.snapshot.data['questionList']);
        if (this._activeRoute.snapshot.data['questionList'].timer)
            this.timmer = this._activeRoute.snapshot.data['questionList'].timer;
        this.questionCode = this._activeRoute.snapshot.data['questionList'].questionType;
        this.type = this._activeRoute.snapshot.data['evaluateName'];
    }
    getAnswer(answer) {
        this.answerList.push(answer);
        if (this.selectedIndex == this.questionList.length - 1) {
            let finalAnswer = {
                userAnswers: this.answerList,
                type: this.type,
                questionType: this.questionCode
            };
            this._subscription = this._service.onPredictionEvaluate(finalAnswer, this.routeParam, this.type)
                .subscribe((res) => {
                this.scoreResult = res;
            });
        }
        else {
            this.selectedIndex += 1;
        }
    }
};
PredictionEvaluateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _app_core_http_evaluate_question_service__WEBPACK_IMPORTED_MODULE_3__["EvaluateQuestionService"] }
];
PredictionEvaluateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-prediction-evaluate',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./prediction-evaluate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/other-evaluate/prediction-evaluate/prediction-evaluate.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./prediction-evaluate.component.css */ "./src/app/modules/other-evaluate/prediction-evaluate/prediction-evaluate.component.css")).default]
    })
], PredictionEvaluateComponent);



/***/ }),

/***/ "./src/app/modules/other-evaluate/reslovers/full-mocktest-detail.reslover.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/other-evaluate/reslovers/full-mocktest-detail.reslover.ts ***!
  \***********************************************************************************/
/*! exports provided: FullMockTestDetailResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullMockTestDetailResolver", function() { return FullMockTestDetailResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/http/detail.service */ "./src/app/core/http/detail.service.ts");


;

let FullMockTestDetailResolver = class FullMockTestDetailResolver {
    constructor(service) {
        this.service = service;
    }
    resolve(route) {
        let id = route.params['mockId'].toLowerCase();
        return this.service.getDetail(`mock-test/${id}/enter-mock-test`);
    }
};
FullMockTestDetailResolver.ctorParameters = () => [
    { type: _app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_2__["DetailService"] }
];
FullMockTestDetailResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], FullMockTestDetailResolver);



/***/ }),

/***/ "./src/app/modules/other-evaluate/reslovers/other-evaluate.reslover.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/other-evaluate/reslovers/other-evaluate.reslover.ts ***!
  \*****************************************************************************/
/*! exports provided: OtherEvaluateReslover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherEvaluateReslover", function() { return OtherEvaluateReslover; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/http/detail.service */ "./src/app/core/http/detail.service.ts");



let OtherEvaluateReslover = class OtherEvaluateReslover {
    constructor(question) {
        this.question = question;
    }
    resolve(route) {
        let evaluateName = route.data['evaluateName'];
        let moduleName = route.params['moduleName'].toLowerCase();
        const routeUrl = `${moduleName}/${evaluateName}/${route.params['evaluateId']}/enter-${evaluateName}`;
        return this.question.getDetail(routeUrl);
    }
};
OtherEvaluateReslover.ctorParameters = () => [
    { type: _app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_2__["DetailService"] }
];
OtherEvaluateReslover = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], OtherEvaluateReslover);



/***/ })

}]);
//# sourceMappingURL=app-modules-other-evaluate-other-evaluate-module-es2015.a5c507ffeed48d45210d.js.map