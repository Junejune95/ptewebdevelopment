(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-manage-manage-questions-question-create-question-create-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/listening/dictation/dictation.component.html":
  /*!****************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/listening/dictation/dictation.component.html ***!
    \****************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesManageManageQuestionsQuestionCreateListeningDictationDictationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"createDictionForm\">\n  <div class=\"container create-form\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <label-text>Dictation Title</label-text>\n        <div class=\"d-flex\">\n          <input type=\"text\" formControlName=\"title\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.title.errors }\" placeholder=\"Write Dictation Title\" />\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <label-text>Dictation Duration</label-text>\n        <warning-text>(IN SECONDS)</warning-text>\n        <div class=\"d-flex\">\n          <input type=\"text\" formControlName=\"duration\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.duration.errors }\" placeholder=\"Write Dictation Duration\"\n            OnlyNumber />\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <file-uploader acceptFile='audio' formControlName=\"audioFile\"></file-uploader>\n        <div *ngIf=\"submitted && f.audioFile.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.audioFile.errors.required\">\n            You must upload audio file\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <label-text>CORRECT ANSWER</label-text>\n        <warning-text>{{ answerWarningText }}</warning-text>\n        <textarea class=\"form-control\" cols=\"30\" rows=\"4\" [ngClass]=\"{\n              'is-invalid': submitted && f.answer.errors\n            }\" formControlName=\"answer\" placeholder=\"Write answer\"></textarea>\n      </div>\n    </div>\n\n    <div class=\"footer-button-block\">\n      <cancel-btn>Cancel</cancel-btn>\n      <submit-btn (onClick)=\"onCreate()\">Save</submit-btn>\n    </div>\n  </div>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/listening/fib/fib.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/listening/fib/fib.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesManageManageQuestionsQuestionCreateListeningFibFibComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"creatFIBForm\">\n    <div class=\"container create-form\">\n      <div class=\"row\">\n        <div class=\"col-md-12 mb-2\">\n          <label-text>Title</label-text>\n          <div class=\"d-flex\">\n            <input type=\"text\" formControlName=\"title\" class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.title.errors }\" placeholder=\"Write Title\" />\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row divider\">\n        <div class=\"col-md-12 mb-2\">\n          <label-text>Duration</label-text>\n          <warning-text>(IN SECONDS)</warning-text>\n          <div class=\"d-flex\">\n            <input type=\"text\" formControlName=\"duration\" class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.duration.errors }\" placeholder=\"Write Duration\" OnlyNumber />\n          </div>\n        </div>\n      </div>\n      <div class=\"row divider\">\n        <div class=\"col-md-12 mb-2\">\n          <file-uploader acceptFile='audio' formControlName=\"audioFile\"></file-uploader>\n          <div *ngIf=\"submitted && f.audioFile.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.audioFile.errors.required\">\n              You must upload audio file\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row divider\">\n        <div class=\"col-md-12 mb-2\">\n          <label-text>Blanks Words Paragraph</label-text>\n          <warning-text>{{ answerWarningText }}</warning-text>\n          <textarea class=\"form-control input-rectangle reverse;\" cols=\"30\" rows=\"4\" [ngClass]=\"{\n              'is-invalid': submitted && f.paragraph.errors\n            }\" formControlName=\"paragraph\" placeholder=\"Write answer\"></textarea>\n        </div>\n      </div>\n      <div class=\"footer-button-block\">\n        <cancel-btn>Cancel</cancel-btn>\n        <submit-btn (onClick)=\"onCreate()\">Save</submit-btn>\n      </div>\n    </div>\n  </form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/listening/highlight-correct-summary/highlight-correct-summary.component.html":
  /*!************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/listening/highlight-correct-summary/highlight-correct-summary.component.html ***!
    \************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesManageManageQuestionsQuestionCreateListeningHighlightCorrectSummaryHighlightCorrectSummaryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"createCorrectSummaryForm\">\n    <div class=\"container create-form\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <label-text>Title</label-text>\n          <input type=\"text\" formControlName=\"title\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.title.errors }\" placeholder=\"Write Title\" />\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <label-text>Duration</label-text>\n          <warning-text>(IN SECONDS)</warning-text>\n          <input type=\"text\" formControlName=\"duration\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.duration.errors }\" placeholder=\"Write Duration\"\n            OnlyNumber />\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <file-uploader acceptFile='audio' formControlName=\"audioFile\"></file-uploader>\n          <div *ngIf=\"submitted && f.audioFile.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.audioFile.errors.required\">\n              You must upload audio file\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <label-text>Question</label-text>\n          <textarea class=\"form-control input-rectangle reverse;\" cols=\"30\" rows=\"4\" [ngClass]=\"{\n                    'is-invalid': submitted && f.question.errors }\" formControlName=\"question\"\n            placeholder=\"Write Question\"></textarea>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <label-text>Give Single Answer</label-text>\n          <input type=\"text\" formControlName=\"answer\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.answer.errors }\" placeholder=\"Write Single Answer\" />\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <label-text>Give Options</label-text>\n          <warning-text>(SEPARATE BY(;))</warning-text>\n          <input type=\"text\" formControlName=\"options\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.options.errors }\" placeholder=\"Write Options\" />\n        </div>\n      </div>\n\n      <div class=\"footer-button-block\">\n        <cancel-btn>Cancel</cancel-btn>\n        <submit-btn (onClick)=\"onCreate()\">Save</submit-btn>\n      </div>\n    </div>\n  </form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/listening/highlight-incorrect-words/highlight-incorrect-words.component.html":
  /*!************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/listening/highlight-incorrect-words/highlight-incorrect-words.component.html ***!
    \************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesManageManageQuestionsQuestionCreateListeningHighlightIncorrectWordsHighlightIncorrectWordsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"createIncorrectWordForm\">\n\n  <div class=\"container create-form\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <label-text>Title</label-text>\n        <input type=\"text\" formControlName=\"title\" class=\"form-control\"\n          [ngClass]=\"{ 'is-invalid': submitted && f.title.errors }\" placeholder=\"Write Title\" />\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <label-text>Duration</label-text>\n        <warning-text>(IN SECONDS)</warning-text>\n        <input type=\"text\" formControlName=\"duration\" class=\"form-control\"\n          [ngClass]=\"{ 'is-invalid': submitted && f.duration.errors }\" placeholder=\"Write Duration\" OnlyNumber />\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <file-uploader acceptFile='audio' formControlName=\"audioFile\"></file-uploader>\n        <div *ngIf=\"submitted && f.audioFile.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.audioFile.errors.required\">\n            You must upload audio file\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <label-text>Words Paragraph</label-text>\n        <warning-text>{{ answerWarningText }}</warning-text>\n        <textarea class=\"form-control input-rectangle reverse;\" cols=\"30\" rows=\"4\" [ngClass]=\"{\n                    'is-invalid': submitted && f.paragraph.errors }\" formControlName=\"paragraph\"\n          placeholder=\"Write Question\"></textarea>\n      </div>\n    </div>\n\n    <div class=\"footer-button-block\">\n      <cancel-btn>Cancel</cancel-btn>\n      <submit-btn (onClick)=\"onCreate()\">Save</submit-btn>\n    </div>\n  </div>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/listening/mcq-multiple/mcq-multiple.component.html":
  /*!**********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/listening/mcq-multiple/mcq-multiple.component.html ***!
    \**********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesManageManageQuestionsQuestionCreateListeningMcqMultipleMcqMultipleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"creatMCQForm\">\n  <div class=\"container create-form\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <label-text>Title</label-text>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Write Title\"\n          [ngClass]=\"{ 'is-invalid': submitted && f.title.errors }\" formControlName=\"title\" />\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <label-text>Duration</label-text>\n        <warning-text>(IN SECONDS)</warning-text>\n        <input type=\"text\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.duration.errors }\"\n          formControlName=\"duration\" placeholder=\"Write Duration\" OnlyNumber />\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <file-uploader acceptFile='audio' formControlName=\"audioFile\"></file-uploader>\n        <div *ngIf=\"submitted && f.audioFile.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.audioFile.errors.required\">\n            You must upload audio file\n          </div>\n        </div>\n\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <label-text>Question</label-text>\n        <div class=\"d-flex\">\n          <textarea [ngClass]=\"{ 'is-invalid': submitted && f.question.errors }\" formControlName=\"question\"\n            placeholder=\"Question\" class=\"form-control\" cols=\"30\" rows=\"4\"\n            (input)=\"str = $event.target.value\"></textarea>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <label-text>Give Answer</label-text>\n        <input type=\"text\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.answers.errors }\"\n          formControlName=\"answers\" placeholder=\"Write Answer\" />\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <label-text>Give Options</label-text>\n        <warning-text>(SEPARATE BY(;))</warning-text>\n          <textarea [ngClass]=\"{ 'is-invalid': submitted && f.options.errors }\" formControlName=\"options\"\n          placeholder=\"Write Option\" class=\"form-control\" cols=\"30\" rows=\"4\"></textarea>\n      </div>\n    </div>\n\n    <div class=\"footer-button-block\">\n      <cancel-btn>Cancel</cancel-btn>\n      <submit-btn (onClick)=\"onCreate()\">Save</submit-btn>\n    </div>\n  </div>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/listening/mcq-single/mcq-single.component.html":
  /*!******************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/listening/mcq-single/mcq-single.component.html ***!
    \******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesManageManageQuestionsQuestionCreateListeningMcqSingleMcqSingleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"creatMCQForm\">\n  <div class=\"container create-form\">\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <label-text>Title</label-text>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Write Title\"\n          [ngClass]=\"{ 'is-invalid': submitted && f.title.errors }\" formControlName=\"title\" />\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <label-text>Duration</label-text>\n        <warning-text>(IN SECONDS)</warning-text>\n        <input type=\"text\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.duration.errors }\"\n          formControlName=\"duration\" placeholder=\"Write Duration\" OnlyNumber />\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <file-uploader acceptFile='audio' formControlName=\"audioFile\"></file-uploader>\n        <div *ngIf=\"submitted && f.audioFile.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.audioFile.errors.required\">\n            You must upload audio file\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <label-text>Question</label-text>\n        <textarea [ngClass]=\"{ 'is-invalid': submitted && f.question.errors }\" formControlName=\"question\"\n          placeholder=\"Question\" class=\"form-control\" cols=\"30\" rows=\"4\"></textarea>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <label-text>Give Answer</label-text>\n        <input type=\"text\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.answers.errors }\"\n          formControlName=\"answers\" placeholder=\"Write Answer\" />\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <label-text>Give Options</label-text>\n        <warning-text>(SEPARATE BY(;))</warning-text>\n        <textarea [ngClass]=\"{ 'is-invalid': submitted && f.options.errors }\" formControlName=\"options\"\n          placeholder=\"Write Option\" class=\"form-control\" cols=\"30\" rows=\"4\"></textarea>\n      </div>\n    </div>\n\n    <div class=\"footer-button-block\">\n      <cancel-btn>Cancel</cancel-btn>\n      <submit-btn (onClick)=\"onCreate()\">Save</submit-btn>\n    </div>\n  </div>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/listening/select-missing-words/select-missing-words.component.html":
  /*!**************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/listening/select-missing-words/select-missing-words.component.html ***!
    \**************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesManageManageQuestionsQuestionCreateListeningSelectMissingWordsSelectMissingWordsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"creatMissingWordForm\">\n    <div class=\"container create-form\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <label-text>Title</label-text>\n          <div class=\"d-flex\">\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              placeholder=\"Write Title\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.title.errors }\"\n              formControlName=\"title\"\n            />\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <label-text>Duration</label-text>\n          <warning-text>(IN SECONDS)</warning-text>\n          <div class=\"d-flex\">\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.duration.errors }\"\n              formControlName=\"duration\"\n              placeholder=\"Write Duration\"\n              OnlyNumber\n            />\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <file-uploader\n            acceptFile='audio'\n            formControlName=\"audioFile\"\n          ></file-uploader>\n\n          <div *ngIf=\"submitted && f.audioFile.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.audioFile.errors.required\">\n              You must upload audio file\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <label-text>Question</label-text>\n          <div class=\"d-flex\">\n            <textarea\n              [ngClass]=\"{ 'is-invalid': submitted && f.question.errors }\"\n              formControlName=\"question\"\n              placeholder=\"Question\"\n              class=\"form-control\"\n              cols=\"30\"\n              rows=\"4\"\n            ></textarea>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <label-text>Give Single Answer</label-text>\n          <div class=\"d-flex\">\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.answer.errors }\"\n              formControlName=\"answer\"\n              placeholder=\"Write Single Answer\"\n            />\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <label-text>Give Options</label-text>\n          <warning-text>(SEPARATE BY(;))</warning-text>\n          <div class=\"d-flex\">\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.option.errors }\"\n              formControlName=\"option\"\n              placeholder=\"Write Option\"\n            />\n          </div>\n        </div>\n      </div>\n      <div class=\"footer-button-block\">\n        <cancel-btn>Cancel</cancel-btn>\n        <submit-btn (onClick)=\"onCreate()\">Save</submit-btn>\n      </div>\n    </div>\n  </form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/listening/summary-spoken-text/summary-spoken-text.component.html":
  /*!************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/listening/summary-spoken-text/summary-spoken-text.component.html ***!
    \************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesManageManageQuestionsQuestionCreateListeningSummarySpokenTextSummarySpokenTextComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"createSummary\" class=\"bg-d25 h-100 overLay\">\n\n    <div class=\"container pb-5\">\n        <div class=\"row\">\n            <div class=\"col-md-12 mb-2\">\n                <label-text>Summary Name</label-text>\n                <input type=\"text\" class=\"form-control pb_height-50 reverse;\" formControlName=\"name\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" placeholder=\"Write Summary Name\" />\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12 mb-2\">\n                <div class=\"divider\"></div>\n                <label-text>Summmary Type</label-text>\n                <select class=\"select-box form-control\" formControlName=\"type\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.type.errors }\">\n                    <option value=\"\" disabled selected hidden>Select Summary Type</option>\n                    <option *ngFor=\"let type of typeList\" [ngValue]=\"type._id\">\n                        {{ type.name }}\n                    </option>\n                </select>\n            </div>\n        </div>\n        <div class=\"row mt-2\" *ngIf=\"!isProgress\">\n            <div class=\"col-md-12\">\n                <label-text>Summary Question</label-text>\n                <editor [index]=\"1\" (getData)=\"getMarkDownForSummaryQuestion($event)\" [data]=\"editorDataQestion\">\n                </editor>\n            </div>\n        </div>\n        <div class=\"row mt-2\">\n            <div class=\"col-md-12 mb-2\">\n                <file-uploader acceptFile='audio' formControlName=\"audioFile\"></file-uploader>\n                <div *ngIf=\"submitted && f.audioFile.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.audioFile.errors.required\">\n                        You must upload audio file\n                    </div>\n                </div>\n            </div>\n\n        </div>\n        <div class=\"row mt-2\">\n            <div class=\"col-md-6\">\n                <label-text>Content Keyword</label-text>\n                <warning-text>(SEPARATE EACH WORD USING SEMICOLON (;))</warning-text>\n                <input type=\"text\" class=\"form-control pb_height-50 reverse;\" placeholder=\"Write Content Keyword...\"\n                    formControlName=\"contentKeywords\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.contentKeywords.errors }\" />\n            </div>\n            <div class=\"col-md-6\">\n                <label-text>Vocabulary Word</label-text>\n                <warning-text>(SEPARATE EACH WORD USING SEMICOLON (;))</warning-text>\n                <input type=\"text\" class=\"form-control pb_height-50 reverse;\" placeholder=\"Write Vocabulary Word...\"\n                    formControlName=\"vocabularyWords\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.vocabularyWords.errors }\" />\n            </div>\n        </div>\n        <div class=\"row mt-2\">\n            <div class=\"col-md-6\">\n                <label-text>Content Keyword Limit</label-text>\n                <warning-text>(LIMIT TO GET MAXIMUN SCORE)</warning-text>\n                <input type=\"text\" class=\"form-control pb_height-50 reverse;\" placeholder=\"0\" OnlyNumber\n                    formControlName=\"maxContentKeywords\" [ngClass]=\"{\n              'is-invalid': submitted && f.maxContentKeywords.errors\n            }\" />\n            </div>\n            <div class=\"col-md-6\">\n                <label-text>Maximum Word Limit</label-text>\n                <warning-text>(NUMBER OF WORDS STUDENT CAN WRITE)</warning-text>\n                <input type=\"text\" class=\"form-control pb_height-50 reverse;\" placeholder=\"0\" OnlyNumber\n                    formControlName=\"maxWordLimit\" [ngClass]=\"{\n              'is-invalid': submitted && f.maxWordLimit.errors\n            }\" />\n            </div>\n        </div>\n\n        <div class=\"row mt-2\" *ngIf=\"!isProgress\">\n            <div class=\"col-md-12\">\n                <label-text>Advise Summary Content</label-text>\n                <warning-text>(SAMPLE SUMMARY TO GET HIGHEST MARK)</warning-text>\n                <editor [index]=\"2\" (getData)=\"getMarkDownForAdviseSummary($event)\" [data]=\"editorDataAdvise\"></editor>\n            </div>\n        </div>\n        <div class=\"footer-button-block\">\n            <cancel-btn>Cancel</cancel-btn>\n            <submit-btn (onClick)=\"onCreate()\">Save</submit-btn>\n        </div>\n\n    </div>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/question-create/question-create.component.html":
  /*!******************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/question-create/question-create.component.html ***!
    \******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesManageManageQuestionsQuestionCreateQuestionCreateQuestionCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header-route-menu-light [currentPageName]=\"currentModule.moduleType\"\n [moduleName]=\"questionName\">\n</header-route-menu-light>\n\n<ng-container [ngSwitch]=\"currentModule.questionType\">\n    <!-- LISTENING -->\n    <dictation *ngSwitchCase=\"'L001'\"></dictation>\n\n    <fib *ngSwitchCase=\"'L002'\"></fib>\n\n    <highlight-incorrect-words *ngSwitchCase=\"'L003'\"></highlight-incorrect-words>\n\n    <mcq-single-listening *ngSwitchCase=\"'L004'\"></mcq-single-listening>\n\n    <mcq-multiple-listening *ngSwitchCase=\"'L005'\"></mcq-multiple-listening>\n\n    <select-missing-words *ngSwitchCase=\"'L006'\"></select-missing-words>\n\n    <highlight-correct-summary *ngSwitchCase=\"'L007'\"></highlight-correct-summary>\n\n    <summary-spoken-text *ngSwitchCase=\"'L008'\"></summary-spoken-text>\n    <!-- READING -->\n    <reorder-paragraph *ngSwitchCase=\"'R001'\"></reorder-paragraph>\n\n    <fib-drop-down *ngSwitchCase=\"'R002'\"></fib-drop-down>\n\n    <fib-bank *ngSwitchCase=\"'R003'\"></fib-bank>\n\n    <mcq-single *ngSwitchCase=\"'R004'\"></mcq-single>\n\n    <mcq-multiple *ngSwitchCase=\"'R005'\"></mcq-multiple>\n\n    <!--SPEAKING -->\n    <read-aloud *ngSwitchCase=\"'S001'\"></read-aloud>\n\n    <repeat-sentence *ngSwitchCase=\"'S002'\"></repeat-sentence>\n\n    <describe-image *ngSwitchCase=\"'S003'\"></describe-image>\n\n    <retell-lecture *ngSwitchCase=\"'S004'\"></retell-lecture>\n\n    <answer-short-question *ngSwitchCase=\"'S005'\"></answer-short-question>\n\n    <!-- WRITING -->\n    <essay-writing *ngSwitchCase=\"'W001'\"></essay-writing>\n\n    <summarize-written-text *ngSwitchCase=\"'W002'\"></summarize-written-text>\n</ng-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/reading/fib-bank/fib-bank.component.html":
  /*!************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/reading/fib-bank/fib-bank.component.html ***!
    \************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesManageManageQuestionsQuestionCreateReadingFibBankFibBankComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"dragForm\">\n    <div class=\"container create-form\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <label-text>Name</label-text>\n                <input type=\"text\" formControlName=\"name\" class=\"form-control\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" placeholder=\"Write Paragraph Name\" />\n            </div>\n        </div>\n        <div class=\"row\" *ngIf=\"!isProgress\">\n            <div class=\"col-md-12\">\n                <label-text>Blank Word Paragraph</label-text>\n                <warning-text>{{warmingTxt}}</warning-text>\n                <editor (getData)=\"getMarkDown($event)\" [data]=\"editorData\" [index]=\"1\"></editor>\n\n                <div *ngIf=\"submitted && f.paragraph.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.paragraph.errors.required\">\n                        You must fill blank word paragraph!\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <label-text>Give Option</label-text>\n                <warning-text>(SEPARETED BY “;” )</warning-text>\n\n                <input type=\"text\" formControlName=\"options\" class=\"form-control\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.options.errors }\" placeholder=\"Write Option\" />\n            </div>\n        </div>\n        <button-footer>\n            <cancel-btn>Cancel</cancel-btn>\n            <submit-btn (onClick)=\"onCreate()\">Save</submit-btn>\n        </button-footer>\n    </div>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/reading/fib-drop-down/fib-drop-down.component.html":
  /*!**********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/reading/fib-drop-down/fib-drop-down.component.html ***!
    \**********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesManageManageQuestionsQuestionCreateReadingFibDropDownFibDropDownComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"dropForm\">\n    <div class=\"container create-form\">\n        <div class=\"row mb-2\">\n            <div class=\"col-md-12\">\n                <label-text>Name</label-text>\n                <input type=\"text\" formControlName=\"name\" class=\"form-control\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" placeholder=\"Write Paragraph Name\" />\n            </div>\n        </div>\n\n        <div class=\"row\" *ngIf=\"!isProgress\">\n            <div class=\"col-md-12\">\n                <label-text>Blank Word Paragraph</label-text>\n                <warning-text>{{warmingTxt}}</warning-text>\n                <editor (getData)=\"getMarkDown($event)\" [data]=\"editorData\" [index]=\"1\"></editor>\n\n                <div *ngIf=\"submitted && f.paragraph.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.paragraph.errors.required\">\n                        You must fill blank word paragraph!\n                    </div>\n                </div>\n            </div>\n        </div>\n        <button-footer>\n            <cancel-btn>Cancel</cancel-btn>\n            <submit-btn (onClick)=\"onCreate()\">Save</submit-btn>\n          </button-footer>\n    </div>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/reading/mcq-multiple/mcq-multiple.component.html":
  /*!********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/reading/mcq-multiple/mcq-multiple.component.html ***!
    \********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesManageManageQuestionsQuestionCreateReadingMcqMultipleMcqMultipleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"mcqForm\">\n    <div class=\"container create-form\">\n        <div class=\"row\" *ngIf=\"!isProgress\">\n            <div class=\"col-md-12\">\n                <label-text>Question</label-text>\n                <editor (getData)=\"getMarkDown($event)\" [data]=\"editorData\" [index]=\"1\"></editor>\n                <div *ngIf=\"submitted && f.paragraph.errors\" class=\"invalid-feedback\">\n                    <div *ngIf=\"f.paragraph.errors.required\">\n                        You must fill question!\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <label-text>Answer</label-text>\n                <warning-text>{{warmingTxt}}</warning-text>\n                <div class=\"d-flex\">\n                    <input type=\"text\" formControlName=\"answers\" class=\"form-control\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.answers.errors }\" placeholder=\"Write Answer\" />\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <label-text>Option</label-text>\n                <warning-text>{{warmingTxt}}</warning-text>\n                <div class=\"d-flex\">\n                    <input type=\"text\" formControlName=\"options\" class=\"form-control\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.options.errors }\" placeholder=\"Write Options\" />\n                </div>\n            </div>\n        </div>\n\n        <button-footer>\n            <cancel-btn>Cancel</cancel-btn>\n            <submit-btn (onClick)=\"onCreate()\">Save</submit-btn>\n        </button-footer>\n    </div>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/reading/mcq-single/mcq-single.component.html":
  /*!****************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/reading/mcq-single/mcq-single.component.html ***!
    \****************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesManageManageQuestionsQuestionCreateReadingMcqSingleMcqSingleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"mcqForm\">\n    <div class=\"container create-form\">\n        <div class=\"row\" *ngIf=\"!isProgress\">\n            <div class=\"col-md-12\">\n                <label-text>Question</label-text>\n                <editor (getData)=\"getMarkDown($event)\" [data]=\"editorData\" [index]=\"1\"></editor>\n                <div *ngIf=\"submitted && !editorData.innerHTML\" class=\"invalid-feedback\"\n                    [ngClass]=\"{ 'is-invalid': submitted && !editorData.innerHTML }\">\n                    <div *ngIf=\"!editorData.innerHTML\" class=\"bold\">*Paragraph is required</div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <label-text>Answer</label-text>\n                <warning-text>{{warmingTxt}}</warning-text>\n                <div class=\"d-flex\">\n                    <input type=\"text\" formControlName=\"answers\" class=\"form-control\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.answers.errors }\" placeholder=\"Write Answer\" />\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <label-text>Option</label-text>\n                <warning-text>{{warmingTxt}}</warning-text>\n                <div class=\"d-flex\">\n                    <input type=\"text\" formControlName=\"options\" class=\"form-control\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.options.errors }\" placeholder=\"Write Options\" />\n                </div>\n            </div>\n        </div>\n\n        <button-footer>\n            <cancel-btn>Cancel</cancel-btn>\n            <submit-btn (onClick)=\"onCreate()\">Save</submit-btn>\n        </button-footer>\n    </div>\n</form>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/reading/reorder-paragraph/reorder-paragraph.component.html":
  /*!******************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/reading/reorder-paragraph/reorder-paragraph.component.html ***!
    \******************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesManageManageQuestionsQuestionCreateReadingReorderParagraphReorderParagraphComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"createReorderForm\">\n    <div class=\"container create-form\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <label-text>Paragraph Name</label-text>\n                <input type=\"text\" formControlName=\"name\" class=\"form-control\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" placeholder=\"Write Paragraph Name\" />\n            </div>\n        </div>\n\n        <div class=\"row\" *ngIf=\"!isProgress\">\n            <div class=\"col-md-12\">\n                <label-text>Paragraph Order</label-text>\n                <warning-text>(GIVE ORIGINAL ORDER, SEPARTED BY “;”)</warning-text>\n                <editor (getData)=\"getMarkDown($event)\" [data]=\"editorData\"  [index]=\"1\"></editor>\n                <div *ngIf=\"submitted && !editorData.innerHTML\" class=\"invalid-feedback\"\n                [ngClass]=\"{ 'is-invalid': submitted && !editorData.innerHTML }\">\n                <div *ngIf=\"!editorData.innerHTML\" class=\"bold\">*Paragraph is required</div>\n            </div>\n            </div>\n        </div>\n        <button-footer>\n            <cancel-btn>Cancel</cancel-btn>\n            <submit-btn (onClick)=\"onCreate()\">Save</submit-btn>\n        </button-footer>\n    </div>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/speaking/answer-short-question/answer-short-question.component.html":
  /*!***************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/speaking/answer-short-question/answer-short-question.component.html ***!
    \***************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesManageManageQuestionsQuestionCreateSpeakingAnswerShortQuestionAnswerShortQuestionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"createansShortForm\">\n    <div class=\"container create-form\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <label-text>Question Title</label-text>\n          <div class=\"d-flex\">\n            <input type=\"text\" formControlName=\"title\" class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.title.errors }\" placeholder=\"Write Question Title\" />\n          </div>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"!isCreate\">\n        <div class=\"col-md-12\">\n          <button class=\"btn btn-link demi-bold pl-0\" (click)=\"isCheckAudio=!isCheckAudio;\">\n            {{isCheckAudio ? 'Hide' : 'View'}}\n            Exiting Audio</button>\n          <div class=\"audio-box\" [ngClass]=\"{ 'setheight': isCheckAudio == true}\">\n            <audio-player [audioLink]=\"exitaudioLink\" *ngIf=\"isCheckAudio\" [isControl]=\"true\"></audio-player>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <file-uploader acceptFile='audio' formControlName=\"audioFile\"></file-uploader>\n          <div *ngIf=\"submitted && f.audioFile.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.audioFile.errors.required\">\n              You must upload audio file!\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <label-text>Duration</label-text>\n          <warning-text>(DURATION FOR THE CLOCK /TIMER)</warning-text>\n          <div class=\"d-flex\">\n            <input type=\"text\" formControlName=\"duration\" class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.duration.errors }\" placeholder=\"Write Duration\" OnlyNumber />\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <label-text>Record Duration</label-text>\n          <warning-text>(DURATION FOR THE CLOCK /TIMER)</warning-text>\n          <div class=\"d-flex\">\n            <input type=\"text\" formControlName=\"recordDuration\" class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.recordDuration.errors }\" placeholder=\"Write Record Duration\"\n              OnlyNumber />\n          </div>\n        </div>\n      </div>\n      <div class=\"row divider\">\n        <div class=\"col-md-12\">\n          <label-text>Answer</label-text>\n          <div class=\"d-flex\">\n            <textarea class=\"form-control input-rectangle reverse;\" cols=\"30\" rows=\"4\" [ngClass]=\"{\n              'is-invalid': submitted && f.answer.errors\n            }\" formControlName=\"answer\" placeholder=\"Write Answer\"></textarea>\n          </div>\n        </div>\n      </div>\n      <button-footer>\n        <cancel-btn>Cancel</cancel-btn>\n        <submit-btn (onClick)=\"onCreate()\">Save</submit-btn>\n      </button-footer>\n    </div>\n  </form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/speaking/describe-image/describe-image.component.html":
  /*!*************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/speaking/describe-image/describe-image.component.html ***!
    \*************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesManageManageQuestionsQuestionCreateSpeakingDescribeImageDescribeImageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"createDescribeForm\">\n\n  <div class=\"container create-form\">\n    <div class=\"row\">\n      <div class=\"col-md-12 mb-4\">\n        <label-text>Question Title</label-text>\n        <div class=\"d-flex\">\n          <input type=\"text\" formControlName=\"title\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.title.errors }\" placeholder=\"Write Question Title\" />\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <file-uploader acceptFile='image' formControlName=\"imageFile\"></file-uploader>\n        <div *ngIf=\"submitted && f.imageFile.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.imageFile.errors.required\">\n            You must upload image!\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <label-text>Duration</label-text>\n        <warning-text>(DURATION FOR THE CLOCK /TIMER)</warning-text>\n        <div class=\"d-flex\">\n          <input type=\"text\" formControlName=\"duration\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.duration.errors }\" placeholder=\"Write Duration\" OnlyNumber />\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <label-text>Record Duration</label-text>\n        <div class=\"d-flex\">\n          <input type=\"text\" formControlName=\"recordDuration\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.recordDuration.errors }\" placeholder=\"Write Record Duration\"\n            OnlyNumber />\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <label-text>Number Of Keyword Match</label-text>\n        <div class=\"d-flex\">\n          <input type=\"text\" formControlName=\"keywordMatch\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.keywordMatch.errors }\" placeholder=\"Write Number Of Keyword Match\"\n            OnlyNumber />\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <label-text>Keywords</label-text>\n        <warning-text>(PLEASE SEPARATE USING \";\")</warning-text>\n        <textarea class=\"form-control input-rectangle reverse;\" cols=\"30\" rows=\"4\" formControlName=\"keywords\" [ngClass]=\"{\n              'is-invalid': submitted && f.keywords.errors\n            }\" placeholder=\"Write Keywords\"></textarea>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <label-text>Fluency Grace</label-text>\n        <warning-text>(GRACE NUMBER FOR FLUENCY)</warning-text>\n        <div class=\"d-flex\">\n          <input type=\"text\" formControlName=\"fluentGrade\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.fluentGrade.errors }\" placeholder=\"Write Fluency Grace\" OnlyNumber />\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <label-text>Pronounciation Grace</label-text>\n        <warning-text>(GRACE NUMBER FOR PRONUNCIATION)</warning-text>\n        <div class=\"d-flex\">\n          <input type=\"text\" formControlName=\"pronounciationGrade\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.pronounciationGrade.errors }\"\n            placeholder=\"Write Pronunciation Grace\" OnlyNumber />\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <label-text>Simple Answer</label-text>\n        <textarea class=\"form-control input-rectangle reverse;\" cols=\"30\" rows=\"4\" formControlName=\"sampleAnswer\" [ngClass]=\"{\n              'is-invalid': submitted && f.keywords.errors\n            }\" placeholder=\"Write Simple Answer\"></textarea>\n      </div>\n    </div>\n    <button-footer>\n      <cancel-btn>Cancel</cancel-btn>\n      <submit-btn (onClick)=\"onCreate()\">Save</submit-btn>\n    </button-footer>\n  </div>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/speaking/read-aloud/read-aloud.component.html":
  /*!*****************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/speaking/read-aloud/read-aloud.component.html ***!
    \*****************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesManageManageQuestionsQuestionCreateSpeakingReadAloudReadAloudComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"createReadAloudForm\">\n    <div class=\"container create-form\">\n      <div class=\"row\">\n        <div class=\"col-md-12 mb-2\">\n          <label-text>Question Title</label-text>\n          <div class=\"d-flex\">\n            <input type=\"text\" formControlName=\"title\" class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.title.errors }\" placeholder=\"Write Question title\" />\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row divider\">\n        <div class=\"col-md-12 mb-2\">\n          <label-text>Question Paragraph</label-text>\n          <warning-text>(WRITE WHAT YOU WANT THIS STUDENT TO SPEAK)</warning-text>\n          <textarea class=\"form-control\" cols=\"30\" rows=\"4\" formControlName=\"paragraph\"\n            [ngClass]=\"{\n              'is-invalid': submitted && f.paragraph.errors\n            }\" placeholder=\"Write Question Paragraph\"></textarea>\n        </div>\n      </div>\n\n      <div class=\"row divider\">\n        <div class=\"col-md-12 mb-2\">\n          <label-text>Count Max</label-text>\n          <warning-text>(COUNT THAT WILL BE CHECKED TO GIVE MAX MARK)</warning-text>\n          <div class=\"d-flex\">\n            <input type=\"text\" formControlName=\"countMax\" class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.countMax.errors }\" placeholder=\"Write Count Max\" OnlyNumber />\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row divider\">\n        <div class=\"col-md-12 mb-2\">\n          <label-text>Duration</label-text>\n          <warning-text>(DURATION FOR THE CLOCK/TIMER)</warning-text>\n          <div class=\"d-flex\">\n            <input type=\"text\" formControlName=\"duration\" class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.duration.errors }\" placeholder=\"Write Duration\" OnlyNumber />\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row divider\">\n        <div class=\"col-md-12 mb-2\">\n          <label-text>Record Duration</label-text>\n          <warning-text>(Record DURATION FOR THE CLOCK/TIMER)</warning-text>\n          <div class=\"d-flex\">\n            <input type=\"text\" formControlName=\"recordDuration\" class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.recordDuration.errors }\" placeholder=\"Write Record Duration\"\n              OnlyNumber />\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row divider\">\n        <div class=\"col-md-12 mb-2\">\n          <label-text>Fluency Grace</label-text>\n          <warning-text>(GRACE NUMBER FOR FLUENCY)</warning-text>\n          <div class=\"d-flex\">\n            <input type=\"text\" formControlName=\"fluencyGrace\" class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.fluencyGrace.errors }\" placeholder=\"Write Fluency Grace\"\n              OnlyNumber/>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row divider\">\n        <div class=\"col-md-12 mb-2\">\n          <label-text>Pronunciation Grace</label-text>\n          <warning-text>(GRACE NUMBER FOR PRONUNCIATION)</warning-text>\n          <div class=\"d-flex\">\n            <input type=\"text\" formControlName=\"pronunciationGrace\" class=\"form-control\"\n              [ngClass]=\"{ 'is-invalid': submitted && f.pronunciationGrace.errors }\"\n              placeholder=\"Write Pronunciation Grace\" OnlyNumber />\n          </div>\n        </div>\n      </div>\n\n      <!-- <div class=\"row divider\">\n        <div class=\"col-md-12 mb-2\">\n          <word-checker [wordGroup]='createReadAloudForm' [submitted]=\"submitted\" [wordsArray]=\"words\"></word-checker>\n        </div>\n      </div> -->\n      <button-footer>\n        <cancel-btn>Cancel</cancel-btn>\n        <submit-btn (onClick)=\"onSave()\">Save</submit-btn>\n      </button-footer>\n    </div>\n  </form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/speaking/repeat-sentence/repeat-sentence.component.html":
  /*!***************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/speaking/repeat-sentence/repeat-sentence.component.html ***!
    \***************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesManageManageQuestionsQuestionCreateSpeakingRepeatSentenceRepeatSentenceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"createRepeatSentenceForm\">\n  <div class=\"container create-form\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <label-text>Question Title</label-text>\n        <div class=\"d-flex\">\n          <input type=\"text\" formControlName=\"title\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.title.errors }\" placeholder=\"Write Question title\" />\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <file-uploader acceptFile='audio' formControlName=\"audioFile\"></file-uploader>\n        <div *ngIf=\"submitted && f.audioFile.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.audioFile.errors.required\">\n            You must upload audio file\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <label-text>Question Paragraph</label-text>\n        <warning-text>(WRITE WHAT YOU WANT THIS STUDENT TO SPEAK)</warning-text>\n        <textarea class=\"form-control input-rectangle reverse;\" cols=\"30\" rows=\"4\" formControlName=\"paragraph\"\n          [ngClass]=\"{\n              'is-invalid': submitted && f.paragraph.errors\n            }\" placeholder=\"Write Question Paragraph\"></textarea>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <label-text>Count Max</label-text>\n        <warning-text>(COUNT THAT WILL BE CHECKED TO GIVE MAX MARK)</warning-text>\n        <div class=\"d-flex\">\n          <input type=\"text\" formControlName=\"countMax\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.countMax.errors }\" placeholder=\"Write Count Max\" oninput=\"this.value = this.value.replace(/[^0-9.]/g,\n            '').replace(/(\\..*)\\./g, '$1');\" />\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <label-text>Duration</label-text>\n        <warning-text>(DURATION FOR THE CLOCK/TIMER)</warning-text>\n        <div class=\"d-flex\">\n          <input type=\"text\" formControlName=\"duration\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.duration.errors }\" placeholder=\"Write Duration\" OnlyNumber />\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <label-text>Record Duration</label-text>\n        <warning-text>(Record DURATION FOR THE CLOCK/TIMER)</warning-text>\n        <div class=\"d-flex\">\n          <input type=\"text\" formControlName=\"recordDuration\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.recordDuration.errors }\" placeholder=\"Write Record Duration\"\n            OnlyNumber />\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <label-text>Fluency Grace</label-text>\n        <warning-text>(GRACE NUMBER FOR FLUENCY)</warning-text>\n        <div class=\"d-flex\">\n          <input type=\"text\" formControlName=\"fluencyGrace\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.fluencyGrace.errors }\" placeholder=\"Write Fluency Grace\" OnlyNumber />\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <label-text>Pronunciation Grace</label-text>\n        <warning-text>(GRACE NUMBER FOR PRONUNCIATION)</warning-text>\n        <div class=\"d-flex\">\n          <input type=\"text\" formControlName=\"pronunciationGrace\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.pronunciationGrace.errors }\"\n            placeholder=\"Write Pronunciation Grace\" OnlyNumber />\n        </div>\n      </div>\n    </div>\n\n    <!-- <div class=\"row\">\n      <div class=\"col-md-12\">\n        <word-checker [wordGroup]='createRepeatSentenceForm' [submitted]=\"submitted\" [wordsArray]=\"words\"\n          [isCreate]=\"isCreate\"></word-checker>\n      </div>\n    </div> -->\n\n    <button-footer>\n      <cancel-btn>Cancel</cancel-btn>\n      <submit-btn (onClick)=\"onSave()\">Save</submit-btn>\n    </button-footer>\n  </div>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/speaking/retell-lecture/retell-lecture.component.html":
  /*!*************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/speaking/retell-lecture/retell-lecture.component.html ***!
    \*************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesManageManageQuestionsQuestionCreateSpeakingRetellLectureRetellLectureComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"createRetellLectureForm\">\n  <div class=\"container create-form\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <label-text>Question Title</label-text>\n        <div class=\"d-flex\">\n          <input type=\"text\" formControlName=\"title\" class=\"form-control\"\n            [class.is-invalid]=\"submitted && f.title.errors \" placeholder=\"Write Question title\" />\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <file-uploader acceptFile='audio' formControlName=\"audioFile\"></file-uploader>\n        <div *ngIf=\"submitted && f.audioFile.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.audioFile.errors.required\">\n            You must upload audio file\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <label-text>Keywords</label-text>\n        <warning-text>(WRITE KEYWORDS HERE, SEPARATE USING \";\")</warning-text>\n        <textarea class=\"form-control input-rectangle reverse;\" cols=\"30\" rows=\"4\" formControlName=\"keywords\" [ngClass]=\"{\n              'is-invalid': submitted && f.keywords.errors\n            }\" placeholder=\"Write Keywords\"></textarea>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <label-text>Count Max</label-text>\n        <warning-text>(COUNT THAT WILL BE CHECKED TO GIVE MAX MARK)</warning-text>\n        <div class=\"d-flex\">\n          <input type=\"text\" formControlName=\"countMax\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.countMax.errors }\" placeholder=\"Write Count Max\" OnlyNumber />\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12 mb-2\">\n        <label-text>Duration</label-text>\n        <warning-text>(DURATION FOR THE CLOCK/TIMER)</warning-text>\n        <div class=\"d-flex\">\n          <input type=\"text\" formControlName=\"duration\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.duration.errors }\" placeholder=\"Write Duration\" OnlyNumber />\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <label-text>Record Duration</label-text>\n        <warning-text>(Record DURATION FOR THE CLOCK/TIMER)</warning-text>\n        <div class=\"d-flex\">\n          <input type=\"text\" formControlName=\"recordDuration\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.recordDuration.errors }\" placeholder=\"Write Record Duration\"\n            OnlyNumber />\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <label-text>Fluency Grace</label-text>\n        <warning-text>(GRACE NUMBER FOR FLUENCY)</warning-text>\n        <div class=\"d-flex\">\n          <input type=\"text\" formControlName=\"fluencyGrace\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.fluencyGrace.errors }\" placeholder=\"Write Fluency Grace\"\n            OnlyNumber />\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <label-text>Pronunciation Grace</label-text>\n        <warning-text>(GRACE NUMBER FOR PRONUNCIATION)</warning-text>\n        <div class=\"d-flex\">\n          <input type=\"text\" formControlName=\"pronunciationGrace\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.pronunciationGrace.errors }\"\n            placeholder=\"Write Pronunciation Grace\" OnlyNumber />\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <label-text>Words To Check</label-text>\n        <warning-text>(SEPARETED BY “;” )</warning-text>\n        <textarea formControlName=\"words\" class=\"form-control\" rows=\"4\"\n          [ngClass]=\"{ 'is-invalid': submitted && f.words.errors }\" placeholder=\"Write word to check\"></textarea>\n      </div>\n    </div>\n\n    <button-footer>\n      <cancel-btn>Cancel</cancel-btn>\n      <submit-btn (onClick)=\"onSave()\">Save</submit-btn>\n    </button-footer>\n\n  </div>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/speaking/word-checker/word-checker.component.html":
  /*!*********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/speaking/word-checker/word-checker.component.html ***!
    \*********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesManageManageQuestionsQuestionCreateSpeakingWordCheckerWordCheckerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <label-text>Words To Check</label-text>\n  <dialog-box *ngIf=\"isDialog\" [dialogEntry]=\"dialog\" (onconfirm)=\"onSubmit($event)\"></dialog-box>\n  <form [formGroup]=\"wordGroup\">\n    <table>\n      <thead>\n        <td>\n          <label class='demi-bold h4-m'>Word Name</label>    \n        </td>\n        <td class=\"hide\"></td>\n      </thead>    \n\n      <tbody>\n        <ng-container formArrayName=\"words\" *ngFor=\"let group of getFormControls.controls; let i=index\">\n          <tr [formGroupName]=\"i\">\n            <td>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                placeholder=\"Write Word Name\"\n                formControlName=\"word\"\n                [ngClass]=\"{ 'is-invalid': submitted && getFormControls.controls[i].get('word').errors?.required }\"\n              />\n            </td>\n            <td *ngIf=\"group.get('isDeleteAble').value\" class=\"del\">\n              <a\n                class=\"btn\"\n                (click)=\"onDelete(i)\"\n              ><i class=\"del-icon fa fa-trash\"></i></a>\n            </td>\n          </tr>\n        </ng-container>\n      </tbody>\n    </table>\n\n    <div class=\"add\">\n      <a\n        class=\"btn\"\n        (click)=\"onAdd()\"\n      ><i class=\"fa fa-plus\"></i> Add</a>\n    </div>\n\n  </form>\n\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/writing/essay-writing/essay-writing.component.html":
  /*!**********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/writing/essay-writing/essay-writing.component.html ***!
    \**********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesManageManageQuestionsQuestionCreateWritingEssayWritingEssayWritingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"createEssayForm\">\n    <div class=\"container create-form\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <label-text>Questions</label-text>\n          <input type=\"text\" formControlName=\"name\" class=\"form-control\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" placeholder=\"Write Questions\" />\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\" formGroupName=\"answer\">\n          <group-title>Essay</group-title>\n          <label-text>Content Keyword</label-text>\n          <warning-text>(THIS WILL LIMIT THE MAXIMUM NUMBER OF WORDS)</warning-text>\n          <textarea class=\"form-control input-rectangle reverse;\" cols=\"30\" rows=\"4\" [ngClass]=\"{\n              'is-invalid':\n                submitted && f.answer.controls.contentKeywords.errors\n            }\" formControlName=\"contentKeywords\" placeholder=\"Write Content Keyword\"></textarea>\n        </div>\n      </div>\n      <div class=\"row\" formGroupName=\"answer\">\n        <div class=\"col-md-6\">\n          <label-text>Introduction Word Limit</label-text>\n          <warning-text>(THIS WILL LIMIT THE MAXIMUM NUMBER OF WORDS)</warning-text>\n          <input type=\"text\" formControlName=\"maxWordLimit\" class=\"form-control\" placeholder=\"0\"\n          OnlyNumber [ngClass]=\"{\n              'is-invalid':\n                submitted && f.answer.controls.maxWordLimit.errors\n            }\" />\n        </div>\n        <div class=\"col-md-6\">\n          <label-text>Maximum Keyword match</label-text>\n          <warning-text>(TO GET FULL MARKS)</warning-text>\n          <input type=\"text\" formControlName=\"maxKeyword\" class=\"form-control\" placeholder=\"0\"\n            [ngClass]=\"{\n              'is-invalid':\n                submitted && f.answer.controls.maxKeyword.errors\n            }\" OnlyNumber />\n        </div>\n      </div>\n  \n\n      <div class=\"row\" *ngIf=\"!isProgress\">\n        <div class=\"col-md-12\">\n          <label-text>Advise Essay Content</label-text>\n          <warning-text>(SAMPLE ESSAY TO GET HIGHEST MARKS)</warning-text>\n          <editor (getData)=\"getMarkDown($event)\" [data]=\"editorData\" [index]=\"1\"></editor>\n          <div *ngIf=\"submitted && f.adviseContent.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.adviseContent.errors.required\">\n              You must fill advise essay content!\n            </div>\n          </div>\n        </div>\n      </div>\n      <button-footer>\n        <cancel-btn>Cancel</cancel-btn>\n        <submit-btn (onClick)=\"onCreate()\">Save</submit-btn>\n    </button-footer>\n    </div>\n  </form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/writing/summarize-written-text/summarize-written-text.component.html":
  /*!****************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/writing/summarize-written-text/summarize-written-text.component.html ***!
    \****************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesManageManageQuestionsQuestionCreateWritingSummarizeWrittenTextSummarizeWrittenTextComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"createSummary\">\n    <div class=\"container create-form\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <label-text>Summary Name</label-text>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            formControlName=\"name\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\"\n            placeholder=\"Write Summary Name\"\n          />\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"divider\"></div>\n          <label-text>Summmary Type</label-text>\n          <select\n            class=\"select-box form-control\"\n            formControlName=\"type\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.type.errors }\"\n          >\n            <option value=\"\" disabled selected hidden\n              >Select Summary Type</option\n            >\n            <option *ngFor=\"let type of typeList\" [ngValue]=\"type._id\">\n              {{ type.name }}\n            </option>\n          </select>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"!isProgress\">\n        <div class=\"col-md-12\">\n          <label-text>Summary Question</label-text>\n          <editor\n            (getData)=\"getMarkDownForSummaryQuestion($event)\"\n            [data]=\"editorDataQestion\"\n            [index]=\"1\"\n          ></editor>\n          <div *ngIf=\"submitted && f.question.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.question.errors.required\">\n              You must fill summary question!\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <label-text>Content Keyword</label-text>\n          <warning-text>(SEPARATE EACH WORD USING SEMICOLON (;))</warning-text>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"Write Content Keyword...\"\n            formControlName=\"contentKeywords\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.contentKeywords.errors }\"\n          />\n        </div>\n        <div class=\"col-md-6\">\n          <label-text>Vocabulary Word</label-text>\n          <warning-text>(SEPARATE EACH WORD USING SEMICOLON (;))</warning-text>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"Write Vocabulary Word...\"\n            formControlName=\"vocabularyWords\"\n            [ngClass]=\"{ 'is-invalid': submitted && f.vocabularyWords.errors }\"\n          />\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <label-text>Content Keyword Limit</label-text>\n          <warning-text>(LIMIT TO GET MAXIMUN SCORE)</warning-text>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"0\"\n            oninput=\"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');\"\n            formControlName=\"maxContentKeywords\"\n            [ngClass]=\"{\n              'is-invalid': submitted && f.maxContentKeywords.errors\n            }\"\n          />\n        </div>\n        <div class=\"col-md-6\">\n          <label-text>Maximum Word Limit</label-text>\n          <warning-text>(NUMBER OF WORDS STUDENT CAN WRITE)</warning-text>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"0\"\n            oninput=\"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');\"\n            formControlName=\"maxWordLimit\"\n            [ngClass]=\"{\n              'is-invalid': submitted && f.maxWordLimit.errors\n            }\"\n          />\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <label-text>Vocabulary Keyword Limit</label-text>\n          <warning-text>(LIMIT TO GET MAXIMUN SCORE)</warning-text>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"0\"\n            oninput=\"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');\"\n            formControlName=\"maxVocabularyWords\"\n            [ngClass]=\"{\n              'is-invalid': submitted && f.maxVocabularyWords.errors\n            }\"\n          />\n        </div>\n        <div class=\"col-md-6\">\n          <label-text>Unwanted Content Keywords</label-text>\n          <warning-text>(SEPARATE EACH WORD USING SEMICOLON (;))</warning-text>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"0\"\n            formControlName=\"unwantedContentKeywords\"\n            [ngClass]=\"{\n              'is-invalid': submitted && f.unwantedContentKeywords.errors\n            }\"\n          />\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"!isProgress\">\n        <div class=\"col-md-12\">\n          <label-text>Advise Summary Content</label-text>\n          <warning-text>(SAMPLE SUMMARY TO GET HIGHEST MARK)</warning-text>\n          <editor\n            (getData)=\"getMarkDownForAdviseSummary($event)\"\n            [data]=\"editorDataAdvise\"\n            [index]=\"2\"\n          ></editor>\n          <div *ngIf=\"submitted && f.adviseContent.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.adviseContent.errors.required\">\n              You must fill advise summary content!\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <button-footer>\n        <cancel-btn>Cancel</cancel-btn>\n        <submit-btn (onClick)=\"onCreate()\">Save</submit-btn>\n    </button-footer>\n    </div>\n  </form>\n";
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/listening/dictation/dictation.component.css":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/listening/dictation/dictation.component.css ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateListeningDictationDictationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlL21hbmFnZS1xdWVzdGlvbnMvcXVlc3Rpb24tY3JlYXRlL2xpc3RlbmluZy9kaWN0YXRpb24vZGljdGF0aW9uLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/listening/dictation/dictation.component.ts":
  /*!************************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/listening/dictation/dictation.component.ts ***!
    \************************************************************************************************************/

  /*! exports provided: DictationComponent */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateListeningDictationDictationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DictationComponent", function () {
      return DictationComponent;
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


    var _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/core/http/serviceIndex */
    "./src/app/core/http/serviceIndex.ts");

    let DictationComponent = class DictationComponent {
      constructor(_activeRoute, formBuilder, _createService) {
        this._activeRoute = _activeRoute;
        this.formBuilder = formBuilder;
        this._createService = _createService;
        this.createDictionForm = this.formBuilder.group({
          title: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          duration: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          answer: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          audioFile: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.answerWarningText = '(WRITE THE SENTENCE EXACTLY YOU WANT FROM THE STUDENT)';
        this.isErrText = 'You must upload audio file'; // boolean

        this.submitted = false;
        this.isToast = false;
      }

      ngOnInit() {
        this.questionCode = this._activeRoute.snapshot.params['questionType'];
        let data = this._activeRoute.snapshot.data['questionDetail'];
        if (data) this.getDataEditForm(data);
      }

      getDataEditForm(data) {
        this.questionId = data.questionId;
        this.createDictionForm = this.formBuilder.group({
          title: [data.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          duration: [data.duration, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          answer: [data.answer, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          audioFile: [null]
        });
      }

      get f() {
        return this.createDictionForm.controls;
      }

      getAudioFile(e) {
        this.audioFile = e;
      }

      goBack() {
        this._createService.goBackPrev();
      }

      onCreate() {
        this.submitted = true;

        if (this.createDictionForm.invalid) {
          return;
        } else {
          this.subscription = this._createService.onSaveDictation(this.createDictionForm.value, this.questionCode, this.questionId).subscribe(() => {
            this.goBack();
          });
        }
      }

      ngOnDestroy() {
        if (this.subscription) this.subscription.unsubscribe();
      }

    };

    DictationComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__["SaveService"]
    }];

    DictationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'dictation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dictation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/listening/dictation/dictation.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dictation.component.css */
      "./src/app/modules/manage/manage-questions/question-create/listening/dictation/dictation.component.css")).default]
    })], DictationComponent);
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/listening/fib/fib.component.css":
  /*!*************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/listening/fib/fib.component.css ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateListeningFibFibComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlL21hbmFnZS1xdWVzdGlvbnMvcXVlc3Rpb24tY3JlYXRlL2xpc3RlbmluZy9maWIvZmliLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/listening/fib/fib.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/listening/fib/fib.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: FibComponent */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateListeningFibFibComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FibComponent", function () {
      return FibComponent;
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


    var _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/core/http/serviceIndex */
    "./src/app/core/http/serviceIndex.ts");

    let FibComponent = class FibComponent {
      constructor(_createService, _activeRoute, formBuilder) {
        this._createService = _createService;
        this._activeRoute = _activeRoute;
        this.formBuilder = formBuilder;
        this.creatFIBForm = this.formBuilder.group({
          title: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          duration: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          paragraph: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          audioFile: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.isErrText = "You must upload audio file"; // boolean

        this.submitted = false;
        this.isToast = false;
        this.answerWarningText = '(GIVE ANSWER IN {} EX; "THIS IS A {PARAGRAPH}.IT HAS .. ")';
      }

      ngOnInit() {
        this.questionCode = this._activeRoute.snapshot.params['questionType'];
        let data = this._activeRoute.snapshot.data['questionDetail'];
        if (data) this.getDataEditForm(data);
      }

      getDataEditForm(data) {
        this.questionId = data.questionId;
        this.creatFIBForm = this.formBuilder.group({
          title: [data.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          duration: [data.duration, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          paragraph: [data.paragraph, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          audioFile: [null]
        });
      }

      get f() {
        return this.creatFIBForm.controls;
      }

      goBack() {
        this._createService.goBackPrev();
      }

      onCreate() {
        this.submitted = true;

        if (this.creatFIBForm.invalid) {
          return;
        } else {
          this._createService.onSaveFIB(this.creatFIBForm.value, this.questionCode, this.questionId).subscribe(res => {
            this.goBack();
          });
        }
      }

      ngOnDestroy() {
        if (this.subscription) this.subscription.unsubscribe();
      }

    };

    FibComponent.ctorParameters = () => [{
      type: _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__["SaveService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }];

    FibComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'fib',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fib.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/listening/fib/fib.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fib.component.css */
      "./src/app/modules/manage/manage-questions/question-create/listening/fib/fib.component.css")).default]
    })], FibComponent);
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/listening/highlight-correct-summary/highlight-correct-summary.component.css":
  /*!*********************************************************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/listening/highlight-correct-summary/highlight-correct-summary.component.css ***!
    \*********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateListeningHighlightCorrectSummaryHighlightCorrectSummaryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlL21hbmFnZS1xdWVzdGlvbnMvcXVlc3Rpb24tY3JlYXRlL2xpc3RlbmluZy9oaWdobGlnaHQtY29ycmVjdC1zdW1tYXJ5L2hpZ2hsaWdodC1jb3JyZWN0LXN1bW1hcnkuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/listening/highlight-correct-summary/highlight-correct-summary.component.ts":
  /*!********************************************************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/listening/highlight-correct-summary/highlight-correct-summary.component.ts ***!
    \********************************************************************************************************************************************/

  /*! exports provided: HighlightCorrectSummaryComponent */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateListeningHighlightCorrectSummaryHighlightCorrectSummaryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HighlightCorrectSummaryComponent", function () {
      return HighlightCorrectSummaryComponent;
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


    var _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/core/http/serviceIndex */
    "./src/app/core/http/serviceIndex.ts");

    let HighlightCorrectSummaryComponent = class HighlightCorrectSummaryComponent {
      constructor(_activeRoute, formBuilder, _createService) {
        this._activeRoute = _activeRoute;
        this.formBuilder = formBuilder;
        this._createService = _createService; // boolean

        this.submitted = false;
        this.isToast = false;
        this.createCorrectSummaryForm = this.formBuilder.group({
          title: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          duration: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          question: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          answer: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          options: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          audioFile: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        }); // any

        this.answerWarningText = "(GIVE INCORRECT WORDS IN {} IN EX;\"THIS IS A {WORDPARAGRAPH}.IT HAS...\"";
        this.isErrText = 'You must upload audio file!';
      }

      ngOnInit() {
        this.questionCode = this._activeRoute.snapshot.params['questionType'];
        let data = this._activeRoute.snapshot.data['questionDetail'];
        if (data) this.getDataEditForm(data);
      }

      getDataEditForm(data) {
        this.questionId = data.questionId;
        this.createCorrectSummaryForm = this.formBuilder.group({
          title: [data.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          duration: [data.duration, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          question: [data.question, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          answer: [data.answer, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          options: [data.options, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          audioFile: [null]
        });
      }

      get f() {
        return this.createCorrectSummaryForm.controls;
      }

      goBack() {
        this._createService.goBackPrev();
      }

      onCreate() {
        this.submitted = true;

        if (this.createCorrectSummaryForm.invalid) {
          return;
        }

        this.subscription = this._createService.onSaveHighlightCorrectSummary(this.createCorrectSummaryForm.value, this.questionCode, this.questionId).subscribe(() => {
          this.goBack();
        });
      }

      ngOnDestroy() {
        if (this.subscription) this.subscription.unsubscribe();
      }

    };

    HighlightCorrectSummaryComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__["SaveService"]
    }];

    HighlightCorrectSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'highlight-correct-summary',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./highlight-correct-summary.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/listening/highlight-correct-summary/highlight-correct-summary.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./highlight-correct-summary.component.css */
      "./src/app/modules/manage/manage-questions/question-create/listening/highlight-correct-summary/highlight-correct-summary.component.css")).default]
    })], HighlightCorrectSummaryComponent);
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/listening/highlight-incorrect-words/highlight-incorrect-words.component.css":
  /*!*********************************************************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/listening/highlight-incorrect-words/highlight-incorrect-words.component.css ***!
    \*********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateListeningHighlightIncorrectWordsHighlightIncorrectWordsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlL21hbmFnZS1xdWVzdGlvbnMvcXVlc3Rpb24tY3JlYXRlL2xpc3RlbmluZy9oaWdobGlnaHQtaW5jb3JyZWN0LXdvcmRzL2hpZ2hsaWdodC1pbmNvcnJlY3Qtd29yZHMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/listening/highlight-incorrect-words/highlight-incorrect-words.component.ts":
  /*!********************************************************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/listening/highlight-incorrect-words/highlight-incorrect-words.component.ts ***!
    \********************************************************************************************************************************************/

  /*! exports provided: HighlightIncorrectWordsComponent */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateListeningHighlightIncorrectWordsHighlightIncorrectWordsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HighlightIncorrectWordsComponent", function () {
      return HighlightIncorrectWordsComponent;
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


    var _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/core/http/serviceIndex */
    "./src/app/core/http/serviceIndex.ts");

    let HighlightIncorrectWordsComponent = class HighlightIncorrectWordsComponent {
      constructor(_activeRoute, formBuilder, _createService) {
        this._activeRoute = _activeRoute;
        this.formBuilder = formBuilder;
        this._createService = _createService; // boolean

        this.submitted = false;
        this.isToast = false;
        this.createIncorrectWordForm = this.formBuilder.group({
          title: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          duration: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          paragraph: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          audioFile: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        }); // any

        this.answerWarningText = "(GIVE INCORRECT WORDS IN {} IN EX;\"THIS IS A {WORDPARAGRAPH}.IT HAS...\")";
        this.isErrText = 'You must upload audio file!';
      }

      ngOnInit() {
        this.questionCode = this._activeRoute.snapshot.params['questionType'];
        let data = this._activeRoute.snapshot.data['questionDetail'];
        if (data) this.getDataEditForm(data);
      }

      getDataEditForm(data) {
        this.questionId = data.questionId;
        this.createIncorrectWordForm = this.formBuilder.group({
          title: [data.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          duration: [data.duration, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          paragraph: [data.paragraph, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          audioFile: [null]
        });
      }

      get f() {
        return this.createIncorrectWordForm.controls;
      }

      goBack() {
        this._createService.goBackPrev();
      }

      onCreate() {
        this.submitted = true;

        if (this.createIncorrectWordForm.invalid) {
          return;
        } else {
          this.subscription == this._createService.onSaveHighlightIncorrectWord(this.createIncorrectWordForm.value, this.questionCode, this.questionId).subscribe(res => {
            this.goBack();
          });
        }
      }

      ngOnDestroy() {
        if (this.subscription) this.subscription.unsubscribe();
      }

    };

    HighlightIncorrectWordsComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__["SaveService"]
    }];

    HighlightIncorrectWordsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'highlight-incorrect-words',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./highlight-incorrect-words.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/listening/highlight-incorrect-words/highlight-incorrect-words.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./highlight-incorrect-words.component.css */
      "./src/app/modules/manage/manage-questions/question-create/listening/highlight-incorrect-words/highlight-incorrect-words.component.css")).default]
    })], HighlightIncorrectWordsComponent);
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/listening/mcq-multiple/mcq-multiple.component.css":
  /*!*******************************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/listening/mcq-multiple/mcq-multiple.component.css ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateListeningMcqMultipleMcqMultipleComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlL21hbmFnZS1xdWVzdGlvbnMvcXVlc3Rpb24tY3JlYXRlL2xpc3RlbmluZy9tY3EtbXVsdGlwbGUvbWNxLW11bHRpcGxlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/listening/mcq-multiple/mcq-multiple.component.ts":
  /*!******************************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/listening/mcq-multiple/mcq-multiple.component.ts ***!
    \******************************************************************************************************************/

  /*! exports provided: McqMultipleListeningComponent */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateListeningMcqMultipleMcqMultipleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "McqMultipleListeningComponent", function () {
      return McqMultipleListeningComponent;
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


    var _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/core/http/serviceIndex */
    "./src/app/core/http/serviceIndex.ts");

    let McqMultipleListeningComponent = class McqMultipleListeningComponent {
      constructor(_activeRoute, formBuilder, _createService) {
        this._activeRoute = _activeRoute;
        this.formBuilder = formBuilder;
        this._createService = _createService;
        this.creatMCQForm = this.formBuilder.group({
          title: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          duration: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          question: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          answers: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          options: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          audioFile: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }); // boolean

        this.submitted = false;
        this.isToast = false;
      }

      ngOnInit() {
        this.questionCode = this._activeRoute.snapshot.params['questionType'];
        let data = this._activeRoute.snapshot.data['questionDetail'];
        if (data) this.getDataEditForm(data);
      }

      getDataEditForm(data) {
        this.questionId = data.questionId;
        this.creatMCQForm = this.formBuilder.group({
          title: [data.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          duration: [data.duration, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          question: [data.question, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          answers: [data.answers, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          options: [data.options, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          audioFile: [null]
        });
      }

      onCreate() {
        this.submitted = true;

        if (this.creatMCQForm.invalid) {
          return;
        } else {
          this.subscription = this._createService.onSaveMCQMultiple(this.creatMCQForm.value, this.questionCode, this.questionId).subscribe(() => {
            this.goBack();
          });
        }
      }

      goBack() {
        this._createService.goBackPrev();
      }

      get f() {
        return this.creatMCQForm.controls;
      }

      ngOnDestroy() {
        if (this.subscription) this.subscription.unsubscribe();
      }

    };

    McqMultipleListeningComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__["SaveService"]
    }];

    McqMultipleListeningComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'mcq-multiple-listening',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mcq-multiple.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/listening/mcq-multiple/mcq-multiple.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mcq-multiple.component.css */
      "./src/app/modules/manage/manage-questions/question-create/listening/mcq-multiple/mcq-multiple.component.css")).default]
    })], McqMultipleListeningComponent);
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/listening/mcq-single/mcq-single.component.css":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/listening/mcq-single/mcq-single.component.css ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateListeningMcqSingleMcqSingleComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlL21hbmFnZS1xdWVzdGlvbnMvcXVlc3Rpb24tY3JlYXRlL2xpc3RlbmluZy9tY3Etc2luZ2xlL21jcS1zaW5nbGUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/listening/mcq-single/mcq-single.component.ts":
  /*!**************************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/listening/mcq-single/mcq-single.component.ts ***!
    \**************************************************************************************************************/

  /*! exports provided: McqSingleListeningComponent */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateListeningMcqSingleMcqSingleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "McqSingleListeningComponent", function () {
      return McqSingleListeningComponent;
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


    var _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/core/http/serviceIndex */
    "./src/app/core/http/serviceIndex.ts");

    let McqSingleListeningComponent = class McqSingleListeningComponent {
      constructor(formBuilder, _activeRoute, _createService) {
        this.formBuilder = formBuilder;
        this._activeRoute = _activeRoute;
        this._createService = _createService;
        this.creatMCQForm = this.formBuilder.group({
          title: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          duration: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          question: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          answers: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          options: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          audioFile: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }); // boolean

        this.submitted = false;
      }

      ngOnInit() {
        this.questionCode = this._activeRoute.snapshot.params['questionType'];
        let data = this._activeRoute.snapshot.data['questionDetail'];
        if (data) this.getDataEditForm(data);
      }

      getDataEditForm(data) {
        this.questionId = data.questionId;
        this.creatMCQForm = this.formBuilder.group({
          title: [data.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          duration: [data.duration, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          question: [data.question, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          answers: [data.answers, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          options: [data.options, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          audioFile: [null]
        });
      }

      onCreate() {
        this.submitted = true;

        if (this.creatMCQForm.invalid) {
          return;
        } else {
          this.subscription = this._createService.onSaveMCQSingle(this.creatMCQForm.value, this.questionCode, this.questionId).subscribe(() => {
            this.goBack();
          });
        }
      }

      goBack() {
        this._createService.goBackPrev();
      }

      get f() {
        return this.creatMCQForm.controls;
      }

      ngOnDestroy() {
        if (this.subscription) this.subscription.unsubscribe();
      }

    };

    McqSingleListeningComponent.ctorParameters = () => [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__["SaveService"]
    }];

    McqSingleListeningComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'mcq-single-listening',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mcq-single.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/listening/mcq-single/mcq-single.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mcq-single.component.css */
      "./src/app/modules/manage/manage-questions/question-create/listening/mcq-single/mcq-single.component.css")).default]
    })], McqSingleListeningComponent);
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/listening/select-missing-words/select-missing-words.component.css":
  /*!***********************************************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/listening/select-missing-words/select-missing-words.component.css ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateListeningSelectMissingWordsSelectMissingWordsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlL21hbmFnZS1xdWVzdGlvbnMvcXVlc3Rpb24tY3JlYXRlL2xpc3RlbmluZy9zZWxlY3QtbWlzc2luZy13b3Jkcy9zZWxlY3QtbWlzc2luZy13b3Jkcy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/listening/select-missing-words/select-missing-words.component.ts":
  /*!**********************************************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/listening/select-missing-words/select-missing-words.component.ts ***!
    \**********************************************************************************************************************************/

  /*! exports provided: SelectMissingWordsComponent */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateListeningSelectMissingWordsSelectMissingWordsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectMissingWordsComponent", function () {
      return SelectMissingWordsComponent;
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

    let SelectMissingWordsComponent = class SelectMissingWordsComponent {
      constructor(_activeRoute, formBuilder, _createService) {
        this._activeRoute = _activeRoute;
        this.formBuilder = formBuilder;
        this._createService = _createService;
        this.creatMissingWordForm = this.formBuilder.group({
          title: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          duration: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          question: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          answer: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          option: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          audioFile: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.isErrText = ''; // boolean

        this.submitted = false;
        this.isToast = false;
      }

      ngOnInit() {
        this.questionCode = this._activeRoute.snapshot.params['questionType'];
        let data = this._activeRoute.snapshot.data['questionDetail'];
        if (data) this.getDataEditForm(data);
      }

      getDataEditForm(data) {
        this.questionId = data.questionId;
        this.creatMissingWordForm = this.formBuilder.group({
          title: [data.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          duration: [data.duration, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          question: [data.question, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          answer: [data.answer, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          option: [data.options, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          audioFile: [null]
        });
      }

      get f() {
        return this.creatMissingWordForm.controls;
      }

      goBack() {
        this._createService.goBackPrev();
      }

      onCreate() {
        this.submitted = true;

        if (this.creatMissingWordForm.invalid) {
          return;
        } else {
          this.subscription = this._createService.OnSaveMissingWords(this.creatMissingWordForm.value, this.questionCode, this.questionId).subscribe(res => {
            this.goBack();
          });
        }
      }

      ngOnDestroy() {
        if (this.subscription) this.subscription.unsubscribe();
      }

    };

    SelectMissingWordsComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _app_core_http_save_service__WEBPACK_IMPORTED_MODULE_4__["SaveService"]
    }];

    SelectMissingWordsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'select-missing-words',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./select-missing-words.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/listening/select-missing-words/select-missing-words.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./select-missing-words.component.css */
      "./src/app/modules/manage/manage-questions/question-create/listening/select-missing-words/select-missing-words.component.css")).default]
    })], SelectMissingWordsComponent);
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/listening/summary-spoken-text/summary-spoken-text.component.css":
  /*!*********************************************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/listening/summary-spoken-text/summary-spoken-text.component.css ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateListeningSummarySpokenTextSummarySpokenTextComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlL21hbmFnZS1xdWVzdGlvbnMvcXVlc3Rpb24tY3JlYXRlL2xpc3RlbmluZy9zdW1tYXJ5LXNwb2tlbi10ZXh0L3N1bW1hcnktc3Bva2VuLXRleHQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/listening/summary-spoken-text/summary-spoken-text.component.ts":
  /*!********************************************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/listening/summary-spoken-text/summary-spoken-text.component.ts ***!
    \********************************************************************************************************************************/

  /*! exports provided: SummarySpokenTextComponent */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateListeningSummarySpokenTextSummarySpokenTextComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SummarySpokenTextComponent", function () {
      return SummarySpokenTextComponent;
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

    let SummarySpokenTextComponent = class SummarySpokenTextComponent {
      constructor(_activeRoute, formBuilder, dataService) {
        this._activeRoute = _activeRoute;
        this.formBuilder = formBuilder;
        this.dataService = dataService;
        this.createSummary = this.formBuilder.group({
          name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          type: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          question: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          contentKeywords: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          vocabularyWords: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          maxContentKeywords: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          adviseContent: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          maxWordLimit: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          audioFile: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }); // any

        this.isErrText = null;
        this.editorDataQestion = "";
        this.editorDataAdvise = ""; // boolean

        this.submitted = false;
        this.isProgress = false;
        this.isTouchQuestion = false;
        this.isTouchAdvise = false;
        this.isToast = false;
        this.typeList = [{
          _id: "SPOKEN",
          name: "SPOKEN"
        }];
      }

      ngOnInit() {
        this.questionCode = this._activeRoute.snapshot.params['questionType'];
        let data = this._activeRoute.snapshot.data['questionDetail'];
        if (data) this.getDataEditForm(data);
      }

      getDataEditForm(data) {
        this.summaryId = data.questionId;
        this.createSummary = this.formBuilder.group({
          name: [data.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          type: [data.type, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          question: [data.question, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          contentKeywords: [data.contentKeywords, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          vocabularyWords: [data.vocabularyWords, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          maxContentKeywords: [data.maxContentKeywords, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          adviseContent: [data.adviseContent, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          maxWordLimit: [data.maxWordLimit, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          audioFile: [null]
        });
        this.editorDataQestion = data.question;
        this.editorDataAdvise = data.adviseContent;
      }

      get f() {
        return this.createSummary.controls;
      }

      getMarkDownForSummaryQuestion(e) {
        this.editorDataQestion = e;
        this.isTouchQuestion = true;
        this.createSummary.get('question').setValue(e.innerHTML);
      }

      getMarkDownForAdviseSummary(e) {
        this.editorDataAdvise = e;
        this.isTouchAdvise = true;
        this.createSummary.get('adviseContent').setValue(e.innerHTML);
      }

      onCreate() {
        this.submitted = true;

        if (this.createSummary.invalid) {
          this.isProgress = false;
          return;
        } else {
          this.subscription = this.dataService.OnSaveSummarySpokenText(this.createSummary.value, this.questionCode, this.summaryId).subscribe(() => {
            this.goBack();
          });
        }
      }

      goBack() {
        this.dataService.goBackPrev();
      }

      ngOnDestroy() {
        if (this.subscription) this.subscription.unsubscribe();
      }

    };

    SummarySpokenTextComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _app_core_http_save_service__WEBPACK_IMPORTED_MODULE_4__["SaveService"]
    }];

    SummarySpokenTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'summary-spoken-text',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./summary-spoken-text.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/listening/summary-spoken-text/summary-spoken-text.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./summary-spoken-text.component.css */
      "./src/app/modules/manage/manage-questions/question-create/listening/summary-spoken-text/summary-spoken-text.component.css")).default]
    })], SummarySpokenTextComponent);
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/question-create-routing.module.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/question-create-routing.module.ts ***!
    \***************************************************************************************************/

  /*! exports provided: QuestionCreateRoutingModule */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateQuestionCreateRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionCreateRoutingModule", function () {
      return QuestionCreateRoutingModule;
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


    var _app_modules_manage_manage_questions_reslovers_question_detail_reslover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/modules/manage/manage-questions/reslovers/question-detail.reslover */
    "./src/app/modules/manage/manage-questions/reslovers/question-detail.reslover.ts");
    /* harmony import */


    var _app_modules_manage_manage_questions_question_create_question_create_question_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/modules/manage/manage-questions/question-create/question-create/question-create.component */
    "./src/app/modules/manage/manage-questions/question-create/question-create/question-create.component.ts");

    const routes = [{
      path: "",
      component: _app_modules_manage_manage_questions_question_create_question_create_question_create_component__WEBPACK_IMPORTED_MODULE_4__["QuestionCreateComponent"]
    }, {
      path: ":questionId",
      component: _app_modules_manage_manage_questions_question_create_question_create_question_create_component__WEBPACK_IMPORTED_MODULE_4__["QuestionCreateComponent"],
      resolve: {
        questionDetail: _app_modules_manage_manage_questions_reslovers_question_detail_reslover__WEBPACK_IMPORTED_MODULE_3__["QuestionDetailResolver"]
      }
    }];
    let QuestionCreateRoutingModule = class QuestionCreateRoutingModule {};
    QuestionCreateRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: [_app_modules_manage_manage_questions_reslovers_question_detail_reslover__WEBPACK_IMPORTED_MODULE_3__["QuestionDetailResolver"]]
    })], QuestionCreateRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/question-create.module.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/question-create.module.ts ***!
    \*******************************************************************************************/

  /*! exports provided: QuestionCreateModule */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateQuestionCreateModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionCreateModule", function () {
      return QuestionCreateModule;
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


    var _app_shared_basic_components_basic_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/shared/basic-components/basic.module */
    "./src/app/shared/basic-components/basic.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_modules_manage_manage_questions_question_create_question_create_question_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/modules/manage/manage-questions/question-create/question-create/question-create.component */
    "./src/app/modules/manage/manage-questions/question-create/question-create/question-create.component.ts");
    /* harmony import */


    var _app_modules_manage_manage_questions_question_create_speaking_read_aloud_read_aloud_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/modules/manage/manage-questions/question-create/speaking/read-aloud/read-aloud.component */
    "./src/app/modules/manage/manage-questions/question-create/speaking/read-aloud/read-aloud.component.ts");
    /* harmony import */


    var _app_modules_manage_manage_questions_question_create_speaking_repeat_sentence_repeat_sentence_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app/modules/manage/manage-questions/question-create/speaking/repeat-sentence/repeat-sentence.component */
    "./src/app/modules/manage/manage-questions/question-create/speaking/repeat-sentence/repeat-sentence.component.ts");
    /* harmony import */


    var _app_modules_manage_manage_questions_question_create_speaking_describe_image_describe_image_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @app/modules/manage/manage-questions/question-create/speaking/describe-image/describe-image.component */
    "./src/app/modules/manage/manage-questions/question-create/speaking/describe-image/describe-image.component.ts");
    /* harmony import */


    var _app_modules_manage_manage_questions_question_create_speaking_retell_lecture_retell_lecture_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @app/modules/manage/manage-questions/question-create/speaking/retell-lecture/retell-lecture.component */
    "./src/app/modules/manage/manage-questions/question-create/speaking/retell-lecture/retell-lecture.component.ts");
    /* harmony import */


    var _app_modules_manage_manage_questions_question_create_speaking_answer_short_question_answer_short_question_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @app/modules/manage/manage-questions/question-create/speaking/answer-short-question/answer-short-question.component */
    "./src/app/modules/manage/manage-questions/question-create/speaking/answer-short-question/answer-short-question.component.ts");
    /* harmony import */


    var _app_modules_manage_manage_questions_question_create_reading_fib_drop_down_fib_drop_down_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @app/modules/manage/manage-questions/question-create/reading/fib-drop-down/fib-drop-down.component */
    "./src/app/modules/manage/manage-questions/question-create/reading/fib-drop-down/fib-drop-down.component.ts");
    /* harmony import */


    var _app_modules_manage_manage_questions_question_create_reading_fib_bank_fib_bank_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @app/modules/manage/manage-questions/question-create/reading/fib-bank/fib-bank.component */
    "./src/app/modules/manage/manage-questions/question-create/reading/fib-bank/fib-bank.component.ts");
    /* harmony import */


    var _app_modules_manage_manage_questions_question_create_reading_mcq_single_mcq_single_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @app/modules/manage/manage-questions/question-create/reading/mcq-single/mcq-single.component */
    "./src/app/modules/manage/manage-questions/question-create/reading/mcq-single/mcq-single.component.ts");
    /* harmony import */


    var _app_modules_manage_manage_questions_question_create_reading_mcq_multiple_mcq_multiple_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @app/modules/manage/manage-questions/question-create/reading/mcq-multiple/mcq-multiple.component */
    "./src/app/modules/manage/manage-questions/question-create/reading/mcq-multiple/mcq-multiple.component.ts");
    /* harmony import */


    var _app_modules_manage_manage_questions_question_create_listening_dictation_dictation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @app/modules/manage/manage-questions/question-create/listening/dictation/dictation.component */
    "./src/app/modules/manage/manage-questions/question-create/listening/dictation/dictation.component.ts");
    /* harmony import */


    var _app_modules_manage_manage_questions_question_create_listening_fib_fib_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @app/modules/manage/manage-questions/question-create/listening/fib/fib.component */
    "./src/app/modules/manage/manage-questions/question-create/listening/fib/fib.component.ts");
    /* harmony import */


    var _app_modules_manage_manage_questions_question_create_listening_highlight_incorrect_words_highlight_incorrect_words_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @app/modules/manage/manage-questions/question-create/listening/highlight-incorrect-words/highlight-incorrect-words.component */
    "./src/app/modules/manage/manage-questions/question-create/listening/highlight-incorrect-words/highlight-incorrect-words.component.ts");
    /* harmony import */


    var _app_modules_manage_manage_questions_question_create_listening_select_missing_words_select_missing_words_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @app/modules/manage/manage-questions/question-create/listening/select-missing-words/select-missing-words.component */
    "./src/app/modules/manage/manage-questions/question-create/listening/select-missing-words/select-missing-words.component.ts");
    /* harmony import */


    var _app_modules_manage_manage_questions_question_create_listening_highlight_correct_summary_highlight_correct_summary_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @app/modules/manage/manage-questions/question-create/listening/highlight-correct-summary/highlight-correct-summary.component */
    "./src/app/modules/manage/manage-questions/question-create/listening/highlight-correct-summary/highlight-correct-summary.component.ts");
    /* harmony import */


    var _app_modules_manage_manage_questions_question_create_writing_essay_writing_essay_writing_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @app/modules/manage/manage-questions/question-create/writing/essay-writing/essay-writing.component */
    "./src/app/modules/manage/manage-questions/question-create/writing/essay-writing/essay-writing.component.ts");
    /* harmony import */


    var _app_modules_manage_manage_questions_question_create_writing_summarize_written_text_summarize_written_text_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @app/modules/manage/manage-questions/question-create/writing/summarize-written-text/summarize-written-text.component */
    "./src/app/modules/manage/manage-questions/question-create/writing/summarize-written-text/summarize-written-text.component.ts");
    /* harmony import */


    var _app_modules_manage_manage_questions_question_create_question_create_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @app/modules/manage/manage-questions/question-create/question-create-routing.module */
    "./src/app/modules/manage/manage-questions/question-create/question-create-routing.module.ts");
    /* harmony import */


    var _app_modules_manage_manage_questions_question_create_reading_reorder_paragraph_reorder_paragraph_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @app/modules/manage/manage-questions/question-create/reading/reorder-paragraph/reorder-paragraph.component */
    "./src/app/modules/manage/manage-questions/question-create/reading/reorder-paragraph/reorder-paragraph.component.ts");
    /* harmony import */


    var _app_modules_manage_manage_questions_question_create_listening_mcq_single_mcq_single_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @app/modules/manage/manage-questions/question-create/listening/mcq-single/mcq-single.component */
    "./src/app/modules/manage/manage-questions/question-create/listening/mcq-single/mcq-single.component.ts");
    /* harmony import */


    var _app_modules_manage_manage_questions_question_create_listening_mcq_multiple_mcq_multiple_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @app/modules/manage/manage-questions/question-create/listening/mcq-multiple/mcq-multiple.component */
    "./src/app/modules/manage/manage-questions/question-create/listening/mcq-multiple/mcq-multiple.component.ts");
    /* harmony import */


    var _app_modules_manage_manage_questions_question_create_speaking_word_checker_word_checker_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @app/modules/manage/manage-questions/question-create/speaking/word-checker/word-checker.component */
    "./src/app/modules/manage/manage-questions/question-create/speaking/word-checker/word-checker.component.ts");
    /* harmony import */


    var _app_modules_manage_manage_questions_question_create_listening_summary_spoken_text_summary_spoken_text_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @app/modules/manage/manage-questions/question-create/listening/summary-spoken-text/summary-spoken-text.component */
    "./src/app/modules/manage/manage-questions/question-create/listening/summary-spoken-text/summary-spoken-text.component.ts"); // modules
    // components


    let QuestionCreateModule = class QuestionCreateModule {};
    QuestionCreateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_modules_manage_manage_questions_question_create_question_create_question_create_component__WEBPACK_IMPORTED_MODULE_5__["QuestionCreateComponent"], // Speaking
      _app_modules_manage_manage_questions_question_create_speaking_read_aloud_read_aloud_component__WEBPACK_IMPORTED_MODULE_6__["ReadAloudComponent"], _app_modules_manage_manage_questions_question_create_speaking_repeat_sentence_repeat_sentence_component__WEBPACK_IMPORTED_MODULE_7__["RepeatSentenceComponent"], _app_modules_manage_manage_questions_question_create_speaking_describe_image_describe_image_component__WEBPACK_IMPORTED_MODULE_8__["DescribeImageComponent"], _app_modules_manage_manage_questions_question_create_speaking_retell_lecture_retell_lecture_component__WEBPACK_IMPORTED_MODULE_9__["RetellLectureComponent"], _app_modules_manage_manage_questions_question_create_speaking_answer_short_question_answer_short_question_component__WEBPACK_IMPORTED_MODULE_10__["AnswerShortQuestionComponent"], _app_modules_manage_manage_questions_question_create_speaking_word_checker_word_checker_component__WEBPACK_IMPORTED_MODULE_26__["WordCheckerComponent"], // Reading
      _app_modules_manage_manage_questions_question_create_reading_reorder_paragraph_reorder_paragraph_component__WEBPACK_IMPORTED_MODULE_23__["ReorderParagraphComponent"], _app_modules_manage_manage_questions_question_create_reading_fib_drop_down_fib_drop_down_component__WEBPACK_IMPORTED_MODULE_11__["FibDropDownComponent"], _app_modules_manage_manage_questions_question_create_reading_fib_bank_fib_bank_component__WEBPACK_IMPORTED_MODULE_12__["FibBankComponent"], _app_modules_manage_manage_questions_question_create_reading_mcq_single_mcq_single_component__WEBPACK_IMPORTED_MODULE_13__["McqSingleComponent"], _app_modules_manage_manage_questions_question_create_reading_mcq_multiple_mcq_multiple_component__WEBPACK_IMPORTED_MODULE_14__["McqMultipleComponent"], // Listening
      _app_modules_manage_manage_questions_question_create_listening_dictation_dictation_component__WEBPACK_IMPORTED_MODULE_15__["DictationComponent"], _app_modules_manage_manage_questions_question_create_listening_fib_fib_component__WEBPACK_IMPORTED_MODULE_16__["FibComponent"], _app_modules_manage_manage_questions_question_create_listening_highlight_incorrect_words_highlight_incorrect_words_component__WEBPACK_IMPORTED_MODULE_17__["HighlightIncorrectWordsComponent"], _app_modules_manage_manage_questions_question_create_listening_select_missing_words_select_missing_words_component__WEBPACK_IMPORTED_MODULE_18__["SelectMissingWordsComponent"], _app_modules_manage_manage_questions_question_create_listening_highlight_correct_summary_highlight_correct_summary_component__WEBPACK_IMPORTED_MODULE_19__["HighlightCorrectSummaryComponent"], _app_modules_manage_manage_questions_question_create_listening_mcq_single_mcq_single_component__WEBPACK_IMPORTED_MODULE_24__["McqSingleListeningComponent"], _app_modules_manage_manage_questions_question_create_listening_mcq_multiple_mcq_multiple_component__WEBPACK_IMPORTED_MODULE_25__["McqMultipleListeningComponent"], _app_modules_manage_manage_questions_question_create_listening_summary_spoken_text_summary_spoken_text_component__WEBPACK_IMPORTED_MODULE_27__["SummarySpokenTextComponent"], // Writing
      _app_modules_manage_manage_questions_question_create_writing_essay_writing_essay_writing_component__WEBPACK_IMPORTED_MODULE_20__["EssayWritingComponent"], _app_modules_manage_manage_questions_question_create_writing_summarize_written_text_summarize_written_text_component__WEBPACK_IMPORTED_MODULE_21__["SummarizeWrittenTextComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _app_shared_basic_components_basic_module__WEBPACK_IMPORTED_MODULE_3__["BasicModule"], _app_modules_manage_manage_questions_question_create_question_create_routing_module__WEBPACK_IMPORTED_MODULE_22__["QuestionCreateRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
      exports: [_app_modules_manage_manage_questions_question_create_question_create_routing_module__WEBPACK_IMPORTED_MODULE_22__["QuestionCreateRoutingModule"]]
    })], QuestionCreateModule);
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/question-create/question-create.component.css":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/question-create/question-create.component.css ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateQuestionCreateQuestionCreateComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlL21hbmFnZS1xdWVzdGlvbnMvcXVlc3Rpb24tY3JlYXRlL3F1ZXN0aW9uLWNyZWF0ZS9xdWVzdGlvbi1jcmVhdGUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/question-create/question-create.component.ts":
  /*!**************************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/question-create/question-create.component.ts ***!
    \**************************************************************************************************************/

  /*! exports provided: QuestionCreateComponent */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateQuestionCreateQuestionCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionCreateComponent", function () {
      return QuestionCreateComponent;
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


    var _app_core_http_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/core/http/common.service */
    "./src/app/core/http/common.service.ts");

    let QuestionCreateComponent = class QuestionCreateComponent {
      constructor(_activeRoute, _cservice) {
        this._activeRoute = _activeRoute;
        this._cservice = _cservice;
        this.currentModule = {};
      }

      ngOnInit() {
        this.currentModule = this._activeRoute.snapshot.params;
        this.questionName = this._cservice.getquestionName(this.currentModule.questionType);
      }

    };

    QuestionCreateComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _app_core_http_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
    }];

    QuestionCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-question-create',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./question-create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/question-create/question-create.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./question-create.component.css */
      "./src/app/modules/manage/manage-questions/question-create/question-create/question-create.component.css")).default]
    })], QuestionCreateComponent);
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/reading/fib-bank/fib-bank.component.css":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/reading/fib-bank/fib-bank.component.css ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateReadingFibBankFibBankComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlL21hbmFnZS1xdWVzdGlvbnMvcXVlc3Rpb24tY3JlYXRlL3JlYWRpbmcvZmliLWJhbmsvZmliLWJhbmsuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/reading/fib-bank/fib-bank.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/reading/fib-bank/fib-bank.component.ts ***!
    \********************************************************************************************************/

  /*! exports provided: FibBankComponent */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateReadingFibBankFibBankComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FibBankComponent", function () {
      return FibBankComponent;
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


    var _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/core/http/serviceIndex */
    "./src/app/core/http/serviceIndex.ts");

    let FibBankComponent = class FibBankComponent {
      constructor(_activeRoute, _createService, formBuilder) {
        this._activeRoute = _activeRoute;
        this._createService = _createService;
        this.formBuilder = formBuilder; // boolean

        this.submitted = false;
        this.isToast = false;
        this.dragForm = this.formBuilder.group({
          name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          paragraph: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          options: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.isProgress = false;
        this.warmingTxt = "(GIVE BLANKS WITH {WORD} IN THE PLACE YOU WANT IT TO BE BLANK)";
      }

      ngOnInit() {
        this.questionCode = this._activeRoute.snapshot.params['questionType'];
        let data = this._activeRoute.snapshot.data['questionDetail'];
        if (data) this.getDataEditForm(data);
      }

      getDataEditForm(data) {
        this.questionId = data.dragId;
        this.dragForm = this.formBuilder.group({
          name: [data.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          paragraph: [data.paragraph],
          options: [data.options, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.editorData = data.paragraph;
      }

      get f() {
        return this.dragForm.controls;
      }

      getMarkDown(e) {
        this.editorData = e;
      }

      onCreate() {
        this.submitted = true;

        if (this.dragForm.invalid && !this.editorData.innerHTML) {
          return;
        } else {
          this.isProgress = true;
          this.dragForm.value.paragraph = this.editorData.innerHTML ? this.editorData.innerHTML : this.editorData;
          this.subscription = this._createService.onSaveDrag(this.dragForm.value, this.questionCode, this.questionId).subscribe(res => {
            this.isProgress = false;
            this.goBack();
          });
        }
      }

      goBack() {
        this._createService.goBackPrev();
      }

      ngOnDestroy() {
        if (this.subscription) this.subscription.unsubscribe();
      }

    };

    FibBankComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__["SaveService"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }];

    FibBankComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'fib-bank',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fib-bank.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/reading/fib-bank/fib-bank.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fib-bank.component.css */
      "./src/app/modules/manage/manage-questions/question-create/reading/fib-bank/fib-bank.component.css")).default]
    })], FibBankComponent);
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/reading/fib-drop-down/fib-drop-down.component.css":
  /*!*******************************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/reading/fib-drop-down/fib-drop-down.component.css ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateReadingFibDropDownFibDropDownComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlL21hbmFnZS1xdWVzdGlvbnMvcXVlc3Rpb24tY3JlYXRlL3JlYWRpbmcvZmliLWRyb3AtZG93bi9maWItZHJvcC1kb3duLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/reading/fib-drop-down/fib-drop-down.component.ts":
  /*!******************************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/reading/fib-drop-down/fib-drop-down.component.ts ***!
    \******************************************************************************************************************/

  /*! exports provided: FibDropDownComponent */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateReadingFibDropDownFibDropDownComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FibDropDownComponent", function () {
      return FibDropDownComponent;
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


    var _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/core/http/serviceIndex */
    "./src/app/core/http/serviceIndex.ts");

    let FibDropDownComponent = class FibDropDownComponent {
      constructor(_activeRoute, formBuilder, _createService) {
        this._activeRoute = _activeRoute;
        this.formBuilder = formBuilder;
        this._createService = _createService; // boolean

        this.submitted = false;
        this.isToast = false;
        this.isProgress = false;
        this.dropForm = this.formBuilder.group({
          name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          paragraph: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }); // any

        this.editorData = "";
        this.warmingTxt = "(GIVE OPTIONS IN “{} “ SEPARETED BY “;” EX: {ANSWER;OPTION1;OPTION2;OPTION3})";
      }

      ngOnInit() {
        this.questionCode = this._activeRoute.snapshot.params['questionType'];
        let data = this._activeRoute.snapshot.data['questionDetail'];
        if (data) this.getDataEditForm(data);
      }

      getDataEditForm(data) {
        this.questionId = data.dropdownId;
        this.dropForm = this.formBuilder.group({
          name: [data.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          paragraph: [data.paragraph, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.editorData = data.paragraph;
      }

      get f() {
        return this.dropForm.controls;
      }

      getMarkDown(e) {
        this.editorData = e;
        this.dropForm.get('paragraph').setValue(e.innerHTML);
      }

      goBack() {
        this._createService.goBackPrev();
      }

      onCreate() {
        this.submitted = true;

        if (this.dropForm.invalid && !this.editorData.innerHTML) {
          return;
        } else {
          this.isProgress = true;
          this.subscription = this._createService.onSaveropDown(this.dropForm.value, this.questionCode, this.questionId).subscribe(res => {
            this.isProgress = false;
            this.goBack();
          }, err => {
            this.isErrText = err;
            this.isToast = true;
            this.isProgress = false;

            if (this.editorData.innerHTML) {
              this.editorData = this.editorData.innerHTML;
            } else this.editorData = this.editorData;
          });
        }
      }

      ngOnDestroy() {
        if (this.subscription) this.subscription.unsubscribe();
      }

    };

    FibDropDownComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__["SaveService"]
    }];

    FibDropDownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'fib-drop-down',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fib-drop-down.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/reading/fib-drop-down/fib-drop-down.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fib-drop-down.component.css */
      "./src/app/modules/manage/manage-questions/question-create/reading/fib-drop-down/fib-drop-down.component.css")).default]
    })], FibDropDownComponent);
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/reading/mcq-multiple/mcq-multiple.component.css":
  /*!*****************************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/reading/mcq-multiple/mcq-multiple.component.css ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateReadingMcqMultipleMcqMultipleComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlL21hbmFnZS1xdWVzdGlvbnMvcXVlc3Rpb24tY3JlYXRlL3JlYWRpbmcvbWNxLW11bHRpcGxlL21jcS1tdWx0aXBsZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/reading/mcq-multiple/mcq-multiple.component.ts":
  /*!****************************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/reading/mcq-multiple/mcq-multiple.component.ts ***!
    \****************************************************************************************************************/

  /*! exports provided: McqMultipleComponent */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateReadingMcqMultipleMcqMultipleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "McqMultipleComponent", function () {
      return McqMultipleComponent;
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


    var _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/core/http/serviceIndex */
    "./src/app/core/http/serviceIndex.ts");

    let McqMultipleComponent = class McqMultipleComponent {
      constructor(_activeRoute, formBuilder, _createService) {
        this._activeRoute = _activeRoute;
        this.formBuilder = formBuilder;
        this._createService = _createService; // boolean

        this.isCreate = false;
        this.submitted = false;
        this.mcqForm = this.formBuilder.group({
          question: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          answers: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          options: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        }); // any

        this.editorData = "";
        this.isProgress = false;
        this.warmingTxt = "(SEPARETED BY “;” EX: ANSWER;OPTION1;OPTION2;OPTION3 )";
      }

      ngOnInit() {
        this.questionCode = this._activeRoute.snapshot.params['questionType'];
        let data = this._activeRoute.snapshot.data['questionDetail'];
        if (data) this.getDataEditForm(data);
      }

      getDataEditForm(data) {
        this.questionId = data.mcqId;
        this.mcqForm = this.formBuilder.group({
          question: [data.question, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          answers: [data.answers, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          options: [data.options, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.editorData = data.question;
      }

      get f() {
        return this.mcqForm.controls;
      }

      getMarkDown(e) {
        this.editorData = e;
        this.mcqForm.get('question').setValue(e.innerHTML);
      }

      goBack() {
        this._createService.goBackPrev();
      }

      onCreate() {
        this.submitted = true;

        if (this.mcqForm.invalid && !this.editorData.innerHTML) {
          return;
        } else {
          this.isProgress = true;
          this.subscription = this._createService.onSaveMCQ(this.mcqForm.value, this.questionCode, this.questionId).subscribe(res => {
            this.isProgress = false;
            this.goBack();
          });
        }
      }

      ngOnDestroy() {
        if (this.subscription) this.subscription.unsubscribe();
      }

    };

    McqMultipleComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__["SaveService"]
    }];

    McqMultipleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'mcq-multiple',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mcq-multiple.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/reading/mcq-multiple/mcq-multiple.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mcq-multiple.component.css */
      "./src/app/modules/manage/manage-questions/question-create/reading/mcq-multiple/mcq-multiple.component.css")).default]
    })], McqMultipleComponent);
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/reading/mcq-single/mcq-single.component.css":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/reading/mcq-single/mcq-single.component.css ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateReadingMcqSingleMcqSingleComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlL21hbmFnZS1xdWVzdGlvbnMvcXVlc3Rpb24tY3JlYXRlL3JlYWRpbmcvbWNxLXNpbmdsZS9tY3Etc2luZ2xlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/reading/mcq-single/mcq-single.component.ts":
  /*!************************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/reading/mcq-single/mcq-single.component.ts ***!
    \************************************************************************************************************/

  /*! exports provided: McqSingleComponent */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateReadingMcqSingleMcqSingleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "McqSingleComponent", function () {
      return McqSingleComponent;
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


    var _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/core/http/serviceIndex */
    "./src/app/core/http/serviceIndex.ts");

    let McqSingleComponent = class McqSingleComponent {
      constructor(_activeRoute, formBuilder, _createService) {
        this._activeRoute = _activeRoute;
        this.formBuilder = formBuilder;
        this._createService = _createService; // boolean

        this.isCreate = false;
        this.submitted = false;
        this.mcqForm = this.formBuilder.group({
          question: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          answers: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          options: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        }); // any

        this.editorData = "";
        this.isProgress = false;
        this.warmingTxt = "(SEPARETED BY “;” EX: ANSWER;OPTION1;OPTION2;OPTION3 )";
      }

      ngOnInit() {
        this.questionCode = this._activeRoute.snapshot.params['questionType'];
        let data = this._activeRoute.snapshot.data['questionDetail'];
        if (data) this.getDataEditForm(data);
      }

      getDataEditForm(data) {
        this.questionId = data.mcqId;
        this.mcqForm = this.formBuilder.group({
          question: [data.question, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          answers: [data.answers, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          options: [data.options, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.editorData = data.question;
      }

      get f() {
        return this.mcqForm.controls;
      }

      getMarkDown(e) {
        this.editorData = e;
        this.mcqForm.get('question').setValue(e.innerHTML);
      }

      goBack() {
        this._createService.goBackPrev();
      }

      onCreate() {
        this.submitted = true;

        if (this.mcqForm.invalid && !this.editorData.innerHTML) {
          return;
        } else {
          this.isProgress = true;
          this.subscription = this._createService.onSaveMCQ(this.mcqForm.value, this.questionCode, this.questionId).subscribe(res => {
            this.isProgress = false;
            this.goBack();
          });
        }
      }

      ngOnDestroy() {
        if (this.subscription) this.subscription.unsubscribe();
      }

    };

    McqSingleComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__["SaveService"]
    }];

    McqSingleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'mcq-single',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mcq-single.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/reading/mcq-single/mcq-single.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mcq-single.component.css */
      "./src/app/modules/manage/manage-questions/question-create/reading/mcq-single/mcq-single.component.css")).default]
    })], McqSingleComponent);
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/reading/reorder-paragraph/reorder-paragraph.component.css":
  /*!***************************************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/reading/reorder-paragraph/reorder-paragraph.component.css ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateReadingReorderParagraphReorderParagraphComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlL21hbmFnZS1xdWVzdGlvbnMvcXVlc3Rpb24tY3JlYXRlL3JlYWRpbmcvcmVvcmRlci1wYXJhZ3JhcGgvcmVvcmRlci1wYXJhZ3JhcGguY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/reading/reorder-paragraph/reorder-paragraph.component.ts":
  /*!**************************************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/reading/reorder-paragraph/reorder-paragraph.component.ts ***!
    \**************************************************************************************************************************/

  /*! exports provided: ReorderParagraphComponent */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateReadingReorderParagraphReorderParagraphComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReorderParagraphComponent", function () {
      return ReorderParagraphComponent;
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


    var _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/core/http/serviceIndex */
    "./src/app/core/http/serviceIndex.ts");

    let ReorderParagraphComponent = class ReorderParagraphComponent {
      constructor(_activeRoute, formBuilder, _createService) {
        this._activeRoute = _activeRoute;
        this.formBuilder = formBuilder;
        this._createService = _createService; // boolean

        this.submitted = false;
        this.isHint = false;
        this.createReorderForm = this.formBuilder.group({
          name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          paragraph: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.editorData = "";
        this.isProgress = false;
      }

      ngOnInit() {
        this.questionCode = this._activeRoute.snapshot.params['questionType'];
        let data = this._activeRoute.snapshot.data['questionDetail'];
        if (data) this.getDataEditForm(data);
      }

      getDataEditForm(data) {
        this.questionId = data.reorderId;
        this.createReorderForm = this.formBuilder.group({
          name: [data.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          paragraph: [data.paragraph, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.editorData = data.paragraph;
      }

      get f() {
        return this.createReorderForm.controls;
      }

      getMarkDown(e) {
        this.editorData = e;
        this.createReorderForm.get('paragraph').setValue(e.innerHTML);
      }

      goBack() {
        this._createService.goBackPrev();
      }

      onCreate() {
        this.submitted = true;

        if (this.createReorderForm.invalid && !this.editorData.innerHTML) {
          return;
        } else {
          this.isProgress = true;
          this.subscription = this._createService.onSaveReorder(this.createReorderForm.value, this.questionCode, this.questionId).subscribe(res => {
            this.isProgress = false;
            this.goBack();
          });
        }
      }

      clickClose(e) {
        this.isHint = !this.isHint;
      }

      btnHint() {
        this.submitted = true;

        if (this.createReorderForm.invalid) {
          return;
        } else {
          this.isHint = !this.isHint; //  let arr = this._service.strToArrbySemicolon(this.createReorderForm.value.paragraph);
          //  this.editorData = this._service.formatarrtoHTML(arr);
        }
      }

    };

    ReorderParagraphComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__["SaveService"]
    }];

    ReorderParagraphComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'reorder-paragraph',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reorder-paragraph.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/reading/reorder-paragraph/reorder-paragraph.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reorder-paragraph.component.css */
      "./src/app/modules/manage/manage-questions/question-create/reading/reorder-paragraph/reorder-paragraph.component.css")).default]
    })], ReorderParagraphComponent);
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/speaking/answer-short-question/answer-short-question.component.css":
  /*!************************************************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/speaking/answer-short-question/answer-short-question.component.css ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateSpeakingAnswerShortQuestionAnswerShortQuestionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlL21hbmFnZS1xdWVzdGlvbnMvcXVlc3Rpb24tY3JlYXRlL3NwZWFraW5nL2Fuc3dlci1zaG9ydC1xdWVzdGlvbi9hbnN3ZXItc2hvcnQtcXVlc3Rpb24uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/speaking/answer-short-question/answer-short-question.component.ts":
  /*!***********************************************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/speaking/answer-short-question/answer-short-question.component.ts ***!
    \***********************************************************************************************************************************/

  /*! exports provided: AnswerShortQuestionComponent */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateSpeakingAnswerShortQuestionAnswerShortQuestionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnswerShortQuestionComponent", function () {
      return AnswerShortQuestionComponent;
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


    var _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/core/http/serviceIndex */
    "./src/app/core/http/serviceIndex.ts");

    let AnswerShortQuestionComponent = class AnswerShortQuestionComponent {
      constructor(_activeRoute, formBuilder, _createService) {
        this._activeRoute = _activeRoute;
        this.formBuilder = formBuilder;
        this._createService = _createService;
        this.createansShortForm = this.formBuilder.group({
          title: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          duration: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          answer: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          recordDuration: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          audioFile: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }); // boolean

        this.submitted = false;
        this.isProgress = false;
        this.isToast = false;
        this.isCheckAudio = false; // any

        this.editorData = "";
      }

      ngOnInit() {
        this.questionCode = this._activeRoute.snapshot.params['questionType'];
        let data = this._activeRoute.snapshot.data['questionDetail'];
        if (data) this.getDataEditForm(data);
      }

      getDataEditForm(data) {
        this.questionId = data.questionId;
        this.createansShortForm = this.formBuilder.group({
          title: [data.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          duration: [data.duration, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          answer: [data.answer, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          recordDuration: [data.recordDuration, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          audioFile: [null]
        });
      }

      onCreate() {
        this.submitted = true;

        if (this.createansShortForm.invalid) {
          return;
        } else {
          this.isProgress = true;
          this.subscription = this._createService.onSaveShortQuestion(this.createansShortForm.value, this.questionCode, this.questionId).subscribe(res => {
            this.goBack();
          }, err => {
            this.isErrText = err;
            this.isToast = true;
            this.isProgress = false;
          });
        }
      }

      goBack() {
        this._createService.goBackPrev();
      }

      get f() {
        return this.createansShortForm.controls;
      }

      getAudioFile(e) {
        this.audioFile = e;
      }

      ngOnDestroy() {
        if (this.subscription) this.subscription.unsubscribe();
      }

    };

    AnswerShortQuestionComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__["SaveService"]
    }];

    AnswerShortQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'answer-short-question',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./answer-short-question.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/speaking/answer-short-question/answer-short-question.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./answer-short-question.component.css */
      "./src/app/modules/manage/manage-questions/question-create/speaking/answer-short-question/answer-short-question.component.css")).default]
    })], AnswerShortQuestionComponent);
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/speaking/describe-image/describe-image.component.css":
  /*!**********************************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/speaking/describe-image/describe-image.component.css ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateSpeakingDescribeImageDescribeImageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlL21hbmFnZS1xdWVzdGlvbnMvcXVlc3Rpb24tY3JlYXRlL3NwZWFraW5nL2Rlc2NyaWJlLWltYWdlL2Rlc2NyaWJlLWltYWdlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/speaking/describe-image/describe-image.component.ts":
  /*!*********************************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/speaking/describe-image/describe-image.component.ts ***!
    \*********************************************************************************************************************/

  /*! exports provided: DescribeImageComponent */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateSpeakingDescribeImageDescribeImageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DescribeImageComponent", function () {
      return DescribeImageComponent;
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


    var _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/core/http/serviceIndex */
    "./src/app/core/http/serviceIndex.ts");

    let DescribeImageComponent = class DescribeImageComponent {
      constructor(_activeRoute, formBuilder, _createService) {
        this._activeRoute = _activeRoute;
        this.formBuilder = formBuilder;
        this._createService = _createService;
        this.createDescribeForm = this.formBuilder.group({
          title: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          duration: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          recordDuration: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          keywordMatch: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          keywords: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          fluentGrade: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          sampleAnswer: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          pronounciationGrade: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          words: this.formBuilder.array([]),
          imageFile: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }); // boolean

        this.submitted = false;
        this.isProgress = false;
        this.isCheckImg = false;
        this.isToast = false;
        this.isImgLoad = true; // any

        this.editorData = "";
        this.words = [];
      }

      ngOnInit() {
        this.questionCode = this._activeRoute.snapshot.params['questionType'];
        let data = this._activeRoute.snapshot.data['questionDetail'];
        if (data) this.getDataEditForm(data);
      }

      getDataEditForm(data) {
        this.questionId = data.questionId;
        this.createDescribeForm = this.formBuilder.group({
          title: [data.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          duration: [data.duration, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          recordDuration: [data.recordDuration, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          keywordMatch: [data.keywordMatch, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          keywords: [data.keywords, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          fluentGrade: [data.fluentGrade, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          pronounciationGrade: [data.pronounciationGrade, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          words: this.formBuilder.array([]),
          sampleAnswer: [data.sampleAnswer, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          imageFile: [null]
        });
        this.words = data.words.map(d => ({
          word: d.word
        }));
      }

      onCreate() {
        this.submitted = true;

        if (this.createDescribeForm.invalid) {
          return;
        } else {
          this.isProgress = true;
          this.subscription = this._createService.onSaveDescribeImg(this.createDescribeForm.value, this.questionCode, this.questionId).subscribe(res => {
            this.goBack();
          }, err => {
            this.isErrText = err;
            this.isToast = true;
            this.isProgress = false;
          });
        }
      }

      goBack() {
        this._createService.goBackPrev();
      }

      get f() {
        return this.createDescribeForm.controls;
      }

      onLoad() {
        this.isImgLoad = false;
      }

      ngOnDestroy() {
        if (this.subscription) this.subscription.unsubscribe();
      }

    };

    DescribeImageComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__["SaveService"]
    }];

    DescribeImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'describe-image',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./describe-image.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/speaking/describe-image/describe-image.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./describe-image.component.css */
      "./src/app/modules/manage/manage-questions/question-create/speaking/describe-image/describe-image.component.css")).default]
    })], DescribeImageComponent);
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/speaking/read-aloud/read-aloud.component.css":
  /*!**************************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/speaking/read-aloud/read-aloud.component.css ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateSpeakingReadAloudReadAloudComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlL21hbmFnZS1xdWVzdGlvbnMvcXVlc3Rpb24tY3JlYXRlL3NwZWFraW5nL3JlYWQtYWxvdWQvcmVhZC1hbG91ZC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/speaking/read-aloud/read-aloud.component.ts":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/speaking/read-aloud/read-aloud.component.ts ***!
    \*************************************************************************************************************/

  /*! exports provided: ReadAloudComponent */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateSpeakingReadAloudReadAloudComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReadAloudComponent", function () {
      return ReadAloudComponent;
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


    var _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/core/http/serviceIndex */
    "./src/app/core/http/serviceIndex.ts");

    let ReadAloudComponent = class ReadAloudComponent {
      constructor(_activeRoute, formBuilder, _createService) {
        this._activeRoute = _activeRoute;
        this.formBuilder = formBuilder;
        this._createService = _createService;
        this.createReadAloudForm = this.formBuilder.group({
          title: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          paragraph: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          countMax: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          duration: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          recordDuration: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          fluencyGrace: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          pronunciationGrace: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          words: this.formBuilder.array([])
        }); // boolean

        this.submitted = false;
        this.isProgress = false;
        this.isToast = false; //any

        this.words = [];
        this.isErrText = null;
      }

      ngOnInit() {
        this.questionCode = this._activeRoute.snapshot.params['questionType'];
        let data = this._activeRoute.snapshot.data['questionDetail'];
        if (data) this.getDataEditForm(data);
      }

      getDataEditForm(data) {
        this.words = data.words;
        this.questionId = data.questionId;
        this.createReadAloudForm = this.formBuilder.group({
          title: [data.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          paragraph: [data.paragraph, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          countMax: [data.countMax, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          duration: [data.duration, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          recordDuration: [data.recordDuration, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          fluencyGrace: [data.fluencyGrace, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          pronunciationGrace: [data.pronunciationGrace, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          words: this.formBuilder.array([])
        });
        this.words = data.words.map(d => ({
          word: d.word
        }));
      }

      onSave() {
        this.submitted = true;
        if (this.createReadAloudForm.invalid) return;
        this.isProgress = true;
        this.subscription = this._createService.onSaveReadAloud(this.createReadAloudForm.value, this.questionCode, this.questionId).subscribe(res => {
          this.goBack();
        }, err => {
          this.isErrText = err.error.message;
          this.isToast = true;
          this.isProgress = false;
        });
      }

      get f() {
        return this.createReadAloudForm.controls;
      }

      goBack() {
        this._createService.goBackPrev();
      }

      ngOnDestroy() {
        if (this.subscription) this.subscription.unsubscribe();
      }

    };

    ReadAloudComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__["SaveService"]
    }];

    ReadAloudComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'read-aloud',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./read-aloud.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/speaking/read-aloud/read-aloud.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./read-aloud.component.css */
      "./src/app/modules/manage/manage-questions/question-create/speaking/read-aloud/read-aloud.component.css")).default]
    })], ReadAloudComponent);
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/speaking/repeat-sentence/repeat-sentence.component.css":
  /*!************************************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/speaking/repeat-sentence/repeat-sentence.component.css ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateSpeakingRepeatSentenceRepeatSentenceComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlL21hbmFnZS1xdWVzdGlvbnMvcXVlc3Rpb24tY3JlYXRlL3NwZWFraW5nL3JlcGVhdC1zZW50ZW5jZS9yZXBlYXQtc2VudGVuY2UuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/speaking/repeat-sentence/repeat-sentence.component.ts":
  /*!***********************************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/speaking/repeat-sentence/repeat-sentence.component.ts ***!
    \***********************************************************************************************************************/

  /*! exports provided: RepeatSentenceComponent */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateSpeakingRepeatSentenceRepeatSentenceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RepeatSentenceComponent", function () {
      return RepeatSentenceComponent;
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


    var _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/core/http/serviceIndex */
    "./src/app/core/http/serviceIndex.ts");

    let RepeatSentenceComponent = class RepeatSentenceComponent {
      constructor(_activeRoute, formBuilder, _createService) {
        this._activeRoute = _activeRoute;
        this.formBuilder = formBuilder;
        this._createService = _createService;
        this.createRepeatSentenceForm = this.formBuilder.group({
          title: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          paragraph: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          countMax: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          duration: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          recordDuration: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          fluencyGrace: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          pronunciationGrace: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          words: this.formBuilder.array([]),
          audioFile: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        }); // boolean

        this.submitted = false;
        this.isProgress = false;
        this.isToast = false; //any

        this.words = [];
        this.isErrText = null;
        this.audioFile = null;
      }

      ngOnInit() {
        this.questionCode = this._activeRoute.snapshot.params['questionType'];
        let data = this._activeRoute.snapshot.data['questionDetail'];
        if (data) this.getDataEditForm(data);
      }

      getDataEditForm(data) {
        this.questionId = data.questionId;
        this.createRepeatSentenceForm = this.formBuilder.group({
          title: [data.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          paragraph: [data.paragraph, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          countMax: [data.countMax, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          duration: [data.duration, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          recordDuration: [data.recordDuration, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          fluencyGrace: [data.fluencyGrace, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          pronunciationGrace: [data.pronunciationGrace, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          words: this.formBuilder.array([]),
          audioFile: [null]
        });
        this.words = data.words.map(d => ({
          word: d.word
        }));
      }

      onSave() {
        this.submitted = true;
        if (this.createRepeatSentenceForm.invalid) return;
        this.isProgress = true;
        this.subscription = this._createService.onSaveRepeatSentence(this.createRepeatSentenceForm.value, this.questionCode, this.questionId).subscribe(res => {
          this.goBack();
        }, err => {
          this.isErrText = err.error.message;
          this.isToast = true;
          this.isProgress = false;
        });
      }

      getAudioFile(e) {
        this.createRepeatSentenceForm.value.audioFile = e;
      }

      get f() {
        return this.createRepeatSentenceForm.controls;
      }

      goBack() {
        this._createService.goBackPrev();
      }

      ngOnDestroy() {
        if (this.subscription) this.subscription.unsubscribe();
      }

    };

    RepeatSentenceComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__["SaveService"]
    }];

    RepeatSentenceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'repeat-sentence',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./repeat-sentence.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/speaking/repeat-sentence/repeat-sentence.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./repeat-sentence.component.css */
      "./src/app/modules/manage/manage-questions/question-create/speaking/repeat-sentence/repeat-sentence.component.css")).default]
    })], RepeatSentenceComponent);
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/speaking/retell-lecture/retell-lecture.component.css":
  /*!**********************************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/speaking/retell-lecture/retell-lecture.component.css ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateSpeakingRetellLectureRetellLectureComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlL21hbmFnZS1xdWVzdGlvbnMvcXVlc3Rpb24tY3JlYXRlL3NwZWFraW5nL3JldGVsbC1sZWN0dXJlL3JldGVsbC1sZWN0dXJlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/speaking/retell-lecture/retell-lecture.component.ts":
  /*!*********************************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/speaking/retell-lecture/retell-lecture.component.ts ***!
    \*********************************************************************************************************************/

  /*! exports provided: RetellLectureComponent */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateSpeakingRetellLectureRetellLectureComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RetellLectureComponent", function () {
      return RetellLectureComponent;
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


    var _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/core/http/serviceIndex */
    "./src/app/core/http/serviceIndex.ts");

    let RetellLectureComponent = class RetellLectureComponent {
      constructor(_activeRoute, formBuilder, _createService) {
        this._activeRoute = _activeRoute;
        this.formBuilder = formBuilder;
        this._createService = _createService;
        this.createRetellLectureForm = this.formBuilder.group({
          title: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          keywords: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          countMax: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          duration: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          recordDuration: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          fluencyGrace: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          pronunciationGrace: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          // words: this.formBuilder.array([], [Validators.required]),
          words: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          audioFile: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }); // boolean

        this.submitted = false;
        this.isProgress = false;
        this.isToast = false; //any

        this.words = [];
        this.isErrText = null;
      }

      ngOnInit() {
        this.questionCode = this._activeRoute.snapshot.params['questionType'];
        let data = this._activeRoute.snapshot.data['questionDetail'];
        if (data) this.getDataEditForm(data);
      }

      getDataEditForm(data) {
        this.questionId = data.questionId;
        this.createRetellLectureForm = this.formBuilder.group({
          title: [data.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          keywords: [data.keywords, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          countMax: [data.countMax, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          duration: [data.duration, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          recordDuration: [data.recordDuration, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          fluencyGrace: [data.fluencyGrace, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          pronunciationGrace: [data.pronunciationGrace, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          words: [data.words, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          audioFile: [null]
        }); // this.words = data.words.map(d => ({ word: d.word }))
      }

      onSave() {
        this.submitted = true;
        if (this.createRetellLectureForm.invalid) return;
        this.isProgress = true;
        console.log(this.questionCode);
        this.subscription = this._createService.onSaveRellLecture(this.createRetellLectureForm.value, this.questionCode, this.questionId).subscribe(res => {
          this.goBack();
        }, err => {
          this.isErrText = err;
          this.isToast = true;
          this.isProgress = false;
        });
      }

      get f() {
        return this.createRetellLectureForm.controls;
      }

      goBack() {
        this._createService.goBackPrev();
      }

      ngOnDestroy() {
        if (this.subscription) this.subscription.unsubscribe();
      }

    };

    RetellLectureComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__["SaveService"]
    }];

    RetellLectureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'retell-lecture',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./retell-lecture.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/speaking/retell-lecture/retell-lecture.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./retell-lecture.component.css */
      "./src/app/modules/manage/manage-questions/question-create/speaking/retell-lecture/retell-lecture.component.css")).default]
    })], RetellLectureComponent);
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/speaking/word-checker/word-checker.component.css":
  /*!******************************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/speaking/word-checker/word-checker.component.css ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateSpeakingWordCheckerWordCheckerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n    min-width: 500px;;\n}\n\nthead {\n    text-align: center;\n}\n\nthead > td {\n    /* padding: 5px 0; */\n    height: 45px;\n    background: #E7E3D4 0% 0% no-repeat padding-box;\n    box-shadow: 0px 3px 6px #EBEBEB;\n    border-radius: 4px;\n    opacity: 1;\n}\n\n/* tr:first-child > td:last-child {\n    display: none;\n} */\n\ntd label {\n    color: #6c757d;\n    display: block;\n    margin-bottom: 0;\n}\n\ntd .sub-label {\n    text-transform: uppercase;\n    color: #d31912;\n    font-weight: 600;\n    font-size: 12px;\n}\n\ntd input[type=text] {\n    height: 45px;\n}\n\ntd.del > a {\n    width: 40px;\n    height: 40px;\n    border-radius: 20px;\n    margin-left: 5px;\n    background: #FF1A07 0% 0% no-repeat padding-box;\n    box-shadow: 0px 3px 6px #FF1A07;\n    opacity: 0;\n}\n\n.del-icon {\n    color: #ffffff;\n}\n\ndiv.add {\n    text-align: center;\n    margin-top: 10px;\n}\n\ndiv.add > a {\n    width: 60px;\n    height: 60px;\n    border-radius: 30px;\n    font-size: 0.9rem;\n    color: #fff;\n    background: var(--unnamed-color-3b8beb) 0% 0% no-repeat padding-box;\n    background: #3B8BEB 0% 0% no-repeat padding-box;\n    box-shadow: 0px 3px 6px #89BEFF;\n    opacity: 1;\n    /* padding-top: 23px; */\n}\n\nform div.add {\n    width: 430px;\n}\n\ntable tr:hover td.del > a { opacity: 1 }\n\n.hide {\n    display: none;\n}\n\n.show {\n    opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYW5hZ2UvbWFuYWdlLXF1ZXN0aW9ucy9xdWVzdGlvbi1jcmVhdGUvc3BlYWtpbmcvd29yZC1jaGVja2VyL3dvcmQtY2hlY2tlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWiwrQ0FBK0M7SUFDL0MsK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7O0dBRUc7O0FBRUg7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLCtDQUErQztJQUMvQywrQkFBK0I7SUFDL0IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLG1FQUFtRTtJQUNuRSwrQ0FBK0M7SUFDL0MsK0JBQStCO0lBQy9CLFVBQVU7SUFDVix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBLDRCQUE0QixXQUFXOztBQUV2QztJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL21hbmFnZS9tYW5hZ2UtcXVlc3Rpb25zL3F1ZXN0aW9uLWNyZWF0ZS9zcGVha2luZy93b3JkLWNoZWNrZXIvd29yZC1jaGVja2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgbWluLXdpZHRoOiA1MDBweDs7XG59XG5cbnRoZWFkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRoZWFkID4gdGQge1xuICAgIC8qIHBhZGRpbmc6IDVweCAwOyAqL1xuICAgIGhlaWdodDogNDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjRTdFM0Q0IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjRUJFQkVCO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4vKiB0cjpmaXJzdC1jaGlsZCA+IHRkOmxhc3QtY2hpbGQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59ICovXG5cbnRkIGxhYmVsIHtcbiAgICBjb2xvcjogIzZjNzU3ZDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG50ZCAuc3ViLWxhYmVsIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjZDMxOTEyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG50ZCBpbnB1dFt0eXBlPXRleHRdIHtcbiAgICBoZWlnaHQ6IDQ1cHg7XG59XG5cbnRkLmRlbCA+IGEge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgYmFja2dyb3VuZDogI0ZGMUEwNyAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggI0ZGMUEwNztcbiAgICBvcGFjaXR5OiAwO1xufVxuXG4uZGVsLWljb24ge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5kaXYuYWRkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuZGl2LmFkZCA+IGEge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXVubmFtZWQtY29sb3ItM2I4YmViKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgYmFja2dyb3VuZDogIzNCOEJFQiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzg5QkVGRjtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC8qIHBhZGRpbmctdG9wOiAyM3B4OyAqL1xufVxuXG5mb3JtIGRpdi5hZGQge1xuICAgIHdpZHRoOiA0MzBweDtcbn1cblxudGFibGUgdHI6aG92ZXIgdGQuZGVsID4gYSB7IG9wYWNpdHk6IDEgfVxuXG4uaGlkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn0gXG5cbi5zaG93IHtcbiAgICBvcGFjaXR5OiAxO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/speaking/word-checker/word-checker.component.ts":
  /*!*****************************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/speaking/word-checker/word-checker.component.ts ***!
    \*****************************************************************************************************************/

  /*! exports provided: WordCheckerComponent */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateSpeakingWordCheckerWordCheckerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WordCheckerComponent", function () {
      return WordCheckerComponent;
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

    let WordCheckerComponent = class WordCheckerComponent {
      constructor(fb) {
        this.fb = fb;
        this.dialog = {
          showText: "",
          isDelete: false,
          isWarning: true,
          isconfirmBtn: true
        };
        this.isDialog = false;
      }

      ngOnInit() {
        if (this.isCreate) {
          const control = this.wordGroup.get('words');
          control.push(this.initiateForm(null));
        } else {
          setTimeout(() => {
            this.wordsArray.forEach(element => {
              const control = this.wordGroup.get('words');
              control.push(this.initiateForm(element));
            });
          }, 2000);
        }
      }

      ngAfterOnInit() {//this.control = this.wordGroup.get('rows') as FormArray
      }

      initiateForm(data) {
        return this.fb.group({
          word: [data ? data.word : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          isDeleteAble: [true]
        });
      }

      onAdd() {
        const control = this.wordGroup.get('words');
        control.push(this.initiateForm(null));
      }

      onDelete(index) {
        const control = this.wordGroup.get('words');

        if (control.controls.length < 2) {
          this.isDialog = true;
          this.dialog.showText = "Must have one row at least in Words To Check With Minimum.";
          return;
        }

        control.removeAt(index);
      }

      get getFormControls() {
        const control = this.wordGroup.get('words');
        return control;
      }

      onSubmit(e) {
        this.isDialog = false;
      }

    };

    WordCheckerComponent.ctorParameters = () => [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WordCheckerComponent.prototype, "wordGroup", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WordCheckerComponent.prototype, "submitted", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WordCheckerComponent.prototype, "wordsArray", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WordCheckerComponent.prototype, "isCreate", void 0);
    WordCheckerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'word-checker',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./word-checker.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/speaking/word-checker/word-checker.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./word-checker.component.css */
      "./src/app/modules/manage/manage-questions/question-create/speaking/word-checker/word-checker.component.css")).default]
    })], WordCheckerComponent);
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/writing/essay-writing/essay-writing.component.css":
  /*!*******************************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/writing/essay-writing/essay-writing.component.css ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateWritingEssayWritingEssayWritingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlL21hbmFnZS1xdWVzdGlvbnMvcXVlc3Rpb24tY3JlYXRlL3dyaXRpbmcvZXNzYXktd3JpdGluZy9lc3NheS13cml0aW5nLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/writing/essay-writing/essay-writing.component.ts":
  /*!******************************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/writing/essay-writing/essay-writing.component.ts ***!
    \******************************************************************************************************************/

  /*! exports provided: EssayWritingComponent */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateWritingEssayWritingEssayWritingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EssayWritingComponent", function () {
      return EssayWritingComponent;
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


    var _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/core/http/serviceIndex */
    "./src/app/core/http/serviceIndex.ts");
    /* harmony import */


    var _app_core_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/core/services */
    "./src/app/core/services/index.ts");

    let EssayWritingComponent = class EssayWritingComponent {
      constructor(_activeRoute, formBuilder, toastService, _saveService) {
        this._activeRoute = _activeRoute;
        this.formBuilder = formBuilder;
        this.toastService = toastService;
        this._saveService = _saveService;
        this.createEssayForm = this.formBuilder.group({
          name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          answer: this.formBuilder.group({
            contentKeywords: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            maxWordLimit: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            maxKeyword: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          }),
          adviseContent: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }); // boolean

        this.submitted = false; // any

        this.editorData = "";
        this.isProgress = false;
      }

      ngOnInit() {
        this.questionCode = this._activeRoute.snapshot.params['questionType'];
        let data = this._activeRoute.snapshot.data['questionDetail'];
        if (data) this.getDataEditForm(data);
      }

      getDataEditForm(data) {
        this.questionId = data.essayId;
        this.createEssayForm = this.formBuilder.group({
          name: [data.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          answer: this.formBuilder.group({
            contentKeywords: [data.answer.contentKeywords, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            maxWordLimit: [data.answer.maxWordLimit, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            maxKeyword: [data.answer.maxKeyword, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          }),
          adviseContent: [data.adviseContent]
        });
        this.editorData = data.adviseContent;
      }

      onCreate() {
        this.submitted = true;

        if (this.createEssayForm.invalid) {
          return;
        } else {
          this.isProgress = true;
          this.createEssayForm.value.advis;
          this.subscription = this._saveService.onSaveEssay(this.createEssayForm.value, this.questionCode, this.questionId).subscribe(res => {
            this.isProgress = false;
            this.goBack();
          });
        }
      }

      get f() {
        return this.createEssayForm.controls;
      }

      getMarkDown(e) {
        this.editorData = e;
        this.createEssayForm.get('adviseContent').setValue(e.innerHTML);
      }

      goBack() {
        this._saveService.goBackPrev();
      }

      ngOnDestroy() {
        if (this.subscription) this.subscription.unsubscribe();
      }

    };

    EssayWritingComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _app_core_services__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
    }, {
      type: _app_core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__["SaveService"]
    }];

    EssayWritingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'essay-writing',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./essay-writing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/writing/essay-writing/essay-writing.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./essay-writing.component.css */
      "./src/app/modules/manage/manage-questions/question-create/writing/essay-writing/essay-writing.component.css")).default]
    })], EssayWritingComponent);
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/writing/summarize-written-text/summarize-written-text.component.css":
  /*!*************************************************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/writing/summarize-written-text/summarize-written-text.component.css ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateWritingSummarizeWrittenTextSummarizeWrittenTextComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFuYWdlL21hbmFnZS1xdWVzdGlvbnMvcXVlc3Rpb24tY3JlYXRlL3dyaXRpbmcvc3VtbWFyaXplLXdyaXR0ZW4tdGV4dC9zdW1tYXJpemUtd3JpdHRlbi10ZXh0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/question-create/writing/summarize-written-text/summarize-written-text.component.ts":
  /*!************************************************************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/question-create/writing/summarize-written-text/summarize-written-text.component.ts ***!
    \************************************************************************************************************************************/

  /*! exports provided: SummarizeWrittenTextComponent */

  /***/
  function srcAppModulesManageManageQuestionsQuestionCreateWritingSummarizeWrittenTextSummarizeWrittenTextComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SummarizeWrittenTextComponent", function () {
      return SummarizeWrittenTextComponent;
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

    let SummarizeWrittenTextComponent = class SummarizeWrittenTextComponent {
      constructor(_activeRoute, formBuilder, _createService) {
        this._activeRoute = _activeRoute;
        this.formBuilder = formBuilder;
        this._createService = _createService;
        this.createSummary = this.formBuilder.group({
          name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          type: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          contentKeywords: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          vocabularyWords: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          maxContentKeywords: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          maxWordLimit: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          maxVocabularyWords: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          unwantedContentKeywords: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          question: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          adviseContent: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }); // any

        this.editorDataQestion = "";
        this.editorDataAdvise = ""; // boolean

        this.submitted = false;
        this.isProgress = false;
        this.typeList = [{
          _id: "WRITTEN",
          name: "WRITTEN"
        }];
      }

      ngOnInit() {
        this.questionCode = this._activeRoute.snapshot.params['questionType'];
        let data = this._activeRoute.snapshot.data['questionDetail'];
        if (data) this.getDataEditForm(data);
      }

      getDataEditForm(data) {
        this.questionId = data.summaryId;
        this.createSummary = this.formBuilder.group({
          name: [data.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          type: [data.type, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          contentKeywords: [data.contentKeywords, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          vocabularyWords: [data.vocabularyWords, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          maxContentKeywords: [data.maxContentKeywords, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          maxWordLimit: [data.maxWordLimit, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          maxVocabularyWords: [data.maxVocabularyWords, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          unwantedContentKeywords: [data.unwantedContentKeywords, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          question: [data.question, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          adviseContent: [data.adviseContent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.editorDataAdvise = data.adviseContent;
        this.editorDataQestion = data.question;
      }

      get f() {
        return this.createSummary.controls;
      }

      goBack() {
        this._createService.goBackPrev();
      }

      getMarkDownForSummaryQuestion(e) {
        this.editorDataQestion = e;
        this.createSummary.get('question').setValue(e.innerHTML);
      }

      getMarkDownForAdviseSummary(e) {
        this.editorDataAdvise = e;
        this.createSummary.get('adviseContent').setValue(e.innerHTML);
      }

      onCreate() {
        this.submitted = true;

        if (this.createSummary.invalid) {
          return;
        } else {
          this.isProgress = true;

          this._createService.onSaveSummaryWritting(this.createSummary.value, this.questionCode, this.questionId).subscribe(() => {
            this.isProgress = false;
            this.goBack();
          });
        }
      }

      ngOnDestroy() {
        if (this.subscription) this.subscription.unsubscribe();
      }

    };

    SummarizeWrittenTextComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _app_core_http_save_service__WEBPACK_IMPORTED_MODULE_4__["SaveService"]
    }];

    SummarizeWrittenTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'summarize-written-text',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./summarize-written-text.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/manage/manage-questions/question-create/writing/summarize-written-text/summarize-written-text.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./summarize-written-text.component.css */
      "./src/app/modules/manage/manage-questions/question-create/writing/summarize-written-text/summarize-written-text.component.css")).default]
    })], SummarizeWrittenTextComponent);
    /***/
  },

  /***/
  "./src/app/modules/manage/manage-questions/reslovers/question-detail.reslover.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/modules/manage/manage-questions/reslovers/question-detail.reslover.ts ***!
    \***************************************************************************************/

  /*! exports provided: QuestionDetailResolver */

  /***/
  function srcAppModulesManageManageQuestionsResloversQuestionDetailResloverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionDetailResolver", function () {
      return QuestionDetailResolver;
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

    let QuestionDetailResolver = class QuestionDetailResolver {
      constructor(question) {
        this.question = question;
      }

      resolve(route) {
        const questionUrl = "".concat(route.params['moduleType'].toLowerCase(), "/").concat(route.params['questionType'], "/").concat(route.params['questionId'], "/detail");
        return this.question.getDetail(questionUrl);
      }

    };

    QuestionDetailResolver.ctorParameters = () => [{
      type: _app_core_http_detail_service__WEBPACK_IMPORTED_MODULE_2__["DetailService"]
    }];

    QuestionDetailResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], QuestionDetailResolver);
    /***/
  }
}]);
//# sourceMappingURL=app-modules-manage-manage-questions-question-create-question-create-module-es5.92a4e8d315af8a7c3164.js.map