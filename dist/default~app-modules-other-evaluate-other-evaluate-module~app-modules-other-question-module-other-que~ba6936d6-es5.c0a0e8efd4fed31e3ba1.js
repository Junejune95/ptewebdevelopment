(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-modules-other-evaluate-other-evaluate-module~app-modules-other-question-module-other-que~ba6936d6"], {
  /***/
  "./node_modules/ngx-sortablejs/fesm2015/ngx-sortablejs.js":
  /*!****************************************************************!*\
    !*** ./node_modules/ngx-sortablejs/fesm2015/ngx-sortablejs.js ***!
    \****************************************************************/

  /*! exports provided: SortablejsDirective, SortablejsModule, ɵa, ɵb */

  /***/
  function node_modulesNgxSortablejsFesm2015NgxSortablejsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortablejsDirective", function () {
      return SortablejsDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortablejsModule", function () {
      return SortablejsModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return GLOBALS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return SortablejsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var sortablejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! sortablejs */
    "./node_modules/sortablejs/modular/sortable.esm.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    const GLOBALS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Global config for sortablejs');
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    class SortablejsBinding {
      /**
       * @param {?} target
       */
      constructor(target) {
        this.target = target;
      }
      /**
       * @param {?} index
       * @param {?} item
       * @return {?}
       */


      insert(index, item) {
        if (this.isFormArray) {
          this.target.insert(index, item);
        } else {
          this.target.splice(index, 0, item);
        }
      }
      /**
       * @param {?} index
       * @return {?}
       */


      get(index) {
        return this.isFormArray ? this.target.at(index) : this.target[index];
      }
      /**
       * @param {?} index
       * @return {?}
       */


      remove(index) {
        /** @type {?} */
        let item;

        if (this.isFormArray) {
          item = this.target.at(index);
          this.target.removeAt(index);
        } else {
          item = this.target.splice(index, 1)[0];
        }

        return item;
      } // we need this to identify that the target is a FormArray
      // we don't want to have a dependency on @angular/forms just for that

      /**
       * @private
       * @return {?}
       */


      get isFormArray() {
        // just checking for random FormArray methods not available on a standard array
        return !!this.target.at && !!this.target.insert && !!this.target.reset;
      }

    }

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    class SortablejsBindings {
      /**
       * @param {?} bindingTargets
       */
      constructor(bindingTargets) {
        this.bindings = bindingTargets.map(
        /**
        * @param {?} target
        * @return {?}
        */
        target => new SortablejsBinding(target));
      }
      /**
       * @param {?} index
       * @param {?} items
       * @return {?}
       */


      injectIntoEvery(index, items) {
        this.bindings.forEach(
        /**
        * @param {?} b
        * @param {?} i
        * @return {?}
        */
        (b, i) => b.insert(index, items[i]));
      }
      /**
       * @param {?} index
       * @return {?}
       */


      getFromEvery(index) {
        return this.bindings.map(
        /**
        * @param {?} b
        * @return {?}
        */
        b => b.get(index));
      }
      /**
       * @param {?} index
       * @return {?}
       */


      extractFromEvery(index) {
        return this.bindings.map(
        /**
        * @param {?} b
        * @return {?}
        */
        b => b.remove(index));
      }
      /**
       * @return {?}
       */


      get provided() {
        return !!this.bindings.length;
      }

    }

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    class SortablejsService {}

    SortablejsService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    SortablejsService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function SortablejsService_Factory() {
        return new SortablejsService();
      },
      token: SortablejsService,
      providedIn: "root"
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    const getIndexesFromEvent =
    /**
    * @param {?} event
    * @return {?}
    */
    event => {
      if (event.hasOwnProperty('newDraggableIndex') && event.hasOwnProperty('oldDraggableIndex')) {
        return {
          new: event.newDraggableIndex,
          old: event.oldDraggableIndex
        };
      } else {
        return {
          new: event.newIndex,
          old: event.oldIndex
        };
      }
    };

    const ɵ0 = getIndexesFromEvent;

    class SortablejsDirective {
      /**
       * @param {?} globalConfig
       * @param {?} service
       * @param {?} element
       * @param {?} zone
       * @param {?} renderer
       */
      constructor(globalConfig, service, element, zone, renderer) {
        this.globalConfig = globalConfig;
        this.service = service;
        this.element = element;
        this.zone = zone;
        this.renderer = renderer;
        this.runInsideAngular = false; // to be deprecated
        // to be deprecated

        this.sortablejsInit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @return {?}
       */


      ngOnInit() {
        if (sortablejs__WEBPACK_IMPORTED_MODULE_1__["default"] && sortablejs__WEBPACK_IMPORTED_MODULE_1__["default"].create) {
          // Sortable does not exist in angular universal (SSR)
          if (this.runInsideAngular) {
            this.create();
          } else {
            this.zone.runOutsideAngular(
            /**
            * @return {?}
            */
            () => this.create());
          }
        }
      }
      /**
       * @param {?} changes
       * @return {?}
       */


      ngOnChanges(changes) {
        /** @type {?} */
        const optionsChange = changes.sortablejsOptions;

        if (optionsChange && !optionsChange.isFirstChange()) {
          /** @type {?} */
          const previousOptions = optionsChange.previousValue;
          /** @type {?} */

          const currentOptions = optionsChange.currentValue;
          Object.keys(currentOptions).forEach(
          /**
          * @param {?} optionName
          * @return {?}
          */
          optionName => {
            if (currentOptions[optionName] !== previousOptions[optionName]) {
              // use low-level option setter
              this.sortableInstance.option(optionName, this.options[optionName]);
            }
          });
        }
      }
      /**
       * @return {?}
       */


      ngOnDestroy() {
        if (this.sortableInstance) {
          this.sortableInstance.destroy();
        }
      }
      /**
       * @private
       * @return {?}
       */


      create() {
        /** @type {?} */
        const container = this.sortablejsContainer ? this.element.nativeElement.querySelector(this.sortablejsContainer) : this.element.nativeElement;
        setTimeout(
        /**
        * @return {?}
        */
        () => {
          this.sortableInstance = sortablejs__WEBPACK_IMPORTED_MODULE_1__["default"].create(container, this.options);
          this.sortablejsInit.emit(this.sortableInstance);
        }, 0);
      }
      /**
       * @private
       * @return {?}
       */


      getBindings() {
        if (!this.sortablejs) {
          return new SortablejsBindings([]);
        } else if (this.sortablejs instanceof SortablejsBindings) {
          return this.sortablejs;
        } else {
          return new SortablejsBindings([this.sortablejs]);
        }
      }
      /**
       * @private
       * @return {?}
       */


      get options() {
        return Object.assign({}, this.optionsWithoutEvents, this.overridenOptions);
      }
      /**
       * @private
       * @return {?}
       */


      get optionsWithoutEvents() {
        return Object.assign({}, this.globalConfig || {}, this.sortablejsOptions || {});
      }
      /**
       * @private
       * @param {?} eventName
       * @param {...?} params
       * @return {?}
       */


      proxyEvent(eventName, ...params) {
        this.zone.run(
        /**
        * @return {?}
        */
        () => {
          if (this.optionsWithoutEvents && this.optionsWithoutEvents[eventName]) {
            this.optionsWithoutEvents[eventName](...params);
          }
        });
      }
      /**
       * @private
       * @return {?}
       */


      get isCloning() {
        return this.sortableInstance.options.group.checkPull(this.sortableInstance, this.sortableInstance) === 'clone';
      }
      /**
       * @private
       * @template T
       * @param {?} item
       * @return {?}
       */


      clone(item) {
        // by default pass the item through, no cloning performed
        return (this.sortablejsCloneFunction || (
        /**
        * @param {?} subitem
        * @return {?}
        */
        subitem => subitem))(item);
      }
      /**
       * @private
       * @return {?}
       */


      get overridenOptions() {
        // always intercept standard events but act only in case items are set (bindingEnabled)
        // allows to forget about tracking this.items changes
        return {
          onAdd:
          /**
          * @param {?} event
          * @return {?}
          */
          event => {
            this.service.transfer =
            /**
            * @param {?} items
            * @return {?}
            */
            items => {
              this.getBindings().injectIntoEvery(event.newIndex, items);
              this.proxyEvent('onAdd', event);
            };

            this.proxyEvent('onAddOriginal', event);
          },
          onRemove:
          /**
          * @param {?} event
          * @return {?}
          */
          event => {
            /** @type {?} */
            const bindings = this.getBindings();

            if (bindings.provided) {
              if (this.isCloning) {
                this.service.transfer(bindings.getFromEvery(event.oldIndex).map(
                /**
                * @param {?} item
                * @return {?}
                */
                item => this.clone(item))); // great thanks to https://github.com/tauu
                // event.item is the original item from the source list which is moved to the target list
                // event.clone is a clone of the original item and will be added to source list
                // If bindings are provided, adding the item dom element to the target list causes artifacts
                // as it interferes with the rendering performed by the angular template.
                // Therefore we remove it immediately and also move the original item back to the source list.
                // (event handler may be attached to the original item and not its clone, therefore keeping
                // the original dom node, circumvents side effects )

                this.renderer.removeChild(event.item.parentNode, event.item);
                this.renderer.insertBefore(event.clone.parentNode, event.item, event.clone);
                this.renderer.removeChild(event.clone.parentNode, event.clone);
              } else {
                this.service.transfer(bindings.extractFromEvery(event.oldIndex));
              }

              this.service.transfer = null;
            }

            this.proxyEvent('onRemove', event);
          },
          onUpdate:
          /**
          * @param {?} event
          * @return {?}
          */
          event => {
            /** @type {?} */
            const bindings = this.getBindings();
            /** @type {?} */

            const indexes = getIndexesFromEvent(event);
            bindings.injectIntoEvery(indexes.new, bindings.extractFromEvery(indexes.old));
            this.proxyEvent('onUpdate', event);
          }
        };
      }

    }

    SortablejsDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[sortablejs]'
      }]
    }];
    /** @nocollapse */

    SortablejsDirective.ctorParameters = () => [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
        args: [GLOBALS]
      }]
    }, {
      type: SortablejsService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
    }];

    SortablejsDirective.propDecorators = {
      sortablejs: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      sortablejsContainer: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      sortablejsOptions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      sortablejsCloneFunction: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      runInsideAngular: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      sortablejsInit: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };

    if (false) {}
    /**
     * @record
     */


    function SortableEvent() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    class SortablejsModule {
      /**
       * @param {?} globalOptions
       * @return {?}
       */
      static forRoot(globalOptions) {
        return {
          ngModule: SortablejsModule,
          providers: [{
            provide: GLOBALS,
            useValue: globalOptions
          }]
        };
      }

    }

    SortablejsModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [SortablejsDirective],
        exports: [SortablejsDirective]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ngx-sortablejs.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/question-components/essay-question/essay-question.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/question-components/essay-question/essay-question.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedQuestionComponentsEssayQuestionEssayQuestionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"isLoading==false\">\n\n<form [formGroup]=\"evaluationForm\" *ngIf=\"essayDetail\">\n  <div class=\"row \">\n    <div class=\"col-md-12 mb-2\">\n      <label-text>Questions</label-text>\n      <p class=\"text-d200 normal-bold h4-m\">{{ essayDetail.essayName }}</p>\n    </div>\n    <div class=\"col-md-12 text-white\">\n      <label-text>Select Convention</label-text>\n      <select class=\"select-box form-control\" formControlName=\"version\"\n        [ngClass]=\"{ 'is-invalid': submitted && f.version.errors }\">\n        <option *ngFor=\"let ver of versionList\" [ngValue]=\"ver\">{{ ver }}\n        </option>\n      </select>\n    </div>\n    <div class=\"col-md-12 mt-2\">\n      <label-text>Essay</label-text>\n      <word-count-text>\n        (Total Word Count:<div class=\"word-count\">\n          {{\n          evaluationForm.value.userAnswer.trim() ? countWord(evaluationForm.value.userAnswer) : '0'\n          }}\n        </div>\n        )</word-count-text>\n      <textarea class=\"form-control\" cols=\"30\" rows=\"16\" [ngClass]=\"{\n              'is-invalid': submitted && f.userAnswer.errors \n            }\" formControlName=\"userAnswer\" placeholder=\"Write Essay\" oncopy=\"return false\"\n        onpaste=\"return false\"></textarea>\n    </div>\n\n  </div>\n  <div class=\"footer-button-block\" *ngIf=\"!isNext\">\n    <cancel-btn>Cancel</cancel-btn>\n    <submit-btn (onClick)=\"onSubmit()\">Confirm</submit-btn>\n  </div>\n\n  <div class=\"footer-button-block\" *ngIf=\"isNext\">\n    <submit-btn (onClick)=\"onSubmit()\">Confirm</submit-btn>\n  </div>\n\n\n</form>\n</ng-container>\n\n<div *ngIf=\"isLoading\"></div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/question-components/evaluation-score/evaluation-score.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/question-components/evaluation-score/evaluation-score.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedQuestionComponentsEvaluationScoreEvaluationScoreComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-md-10\">\n    <div class=\"d-flex mb-2\">\n      <label-text class=\"set-width\">Question Name</label-text>\n      <label class=\"user-info-text\">: {{\n        scoreData.questionName\n        }}</label>\n    </div>\n    <div class=\"d-flex mb-2\">\n      <label-text class=\"set-width\">Completion Date</label-text>\n      <label class=\"user-info-text\">: {{\n        scoreData.completeDate | defaultDate\n        }}</label>\n    </div>\n    <div class=\"d-flex mb-2\">\n      <label-text class=\"set-width\">\n        Email</label-text>\n      <label class=\"user-info-text\">: {{\n        scoreData.email\n        }}</label>\n    </div>\n  </div>\n  <div class=\"col-md-2\">\n    <div class=\"score-box\">\n      <p>\n        {{ scoreData.overallScore }}\n      </p>\n    </div>\n  </div>\n</div>\n<p class=\"your-answer-title\">Your Essay</p>\n<p class=\"question-text\" id=\"intro\"></p>\n\n<div class=\"table-wrapper\">\n  <table role=\"table\" class=\"table-score-responsive\">\n    <thead role=\"rowgroup\">\n      <tr role=\"row\">\n        <th role=\"columnheader\" style=\"width: 15%;\">Skill Area</th>\n        <th role=\"columnheader\" style=\"width: 70%;\">Traits Scored</th>\n        <th role=\"columnheader\" style=\"width: 15%;\">Your Score</th>\n      </tr>\n    </thead>\n    <tbody role=\"rowgroup\">\n      <ng-container *ngFor=\"let skill of scoreData?.skillAreas\">\n        <tr role=\"row\">\n          <td role=\"cell\" class=\"text-center\"> {{ skill.name }}</td>\n          <td role=\"cell\">\n            <ol reversed start='{{skill.ratingScore.length-1}}'>\n              <li *ngFor=\"let rate of skill.ratingScore\">\n                {{ rate }}\n              </li>\n            </ol>\n          </td>\n          <td role=\"cell\" class=\"text-center\">\n            {{ skill.userScore }}\n          </td>\n        </tr>\n      </ng-container>\n      <tr role=\"row\" class=\"dark-role\">\n        <td role=\"cell\" colspan=\"2\">\n          <span>MAXIMUM SCORE</span><br>\n          <span>{{ scoreData.maxScore }}</span>\n        </td>\n        <td role=\"cell\">\n          <span>YOUR SCORE</span><br>\n          <span>{{ scoreData.userTotalScore }}</span>\n        </td>\n      </tr>\n      <tr role=\"row\" class=\"dark-role\">\n        <td role=\"cell\" colspan=\"2\">\n          Written Discourse\n        </td>\n        <td>\n          {{ scoreData.writternDiscourse }}\n        </td>\n      </tr>\n      <tr role=\"row\" class=\"dark-role\">\n        <td role=\"cell\" colspan=\"2\">\n          Structured Proficiency\n        </td>\n        <td>\n          {{ scoreData.structureKeywordMatch }}\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<div class=\"feedback-title\">\n  Feedback\n</div>\n<div class=\"feedback-text\">\n  {{ scoreData.comment }}\n</div>\n\n\n<table role=\"table\" class=\"table-responsive table-score-responsive\">\n  <thead role=\"rowgroup\">\n    <tr role=\"row\">\n      <th role=\"columnheader\">Mistakes</th>\n      <th role=\"columnheader\">Suggestion</th>\n    </tr>\n  </thead>\n  <tbody role=\"rowgroup\">\n    <ng-container *ngFor=\"let words of scoreData?.suggestionWords\">\n      <tr role=\"row\">\n        <td role=\"cell\"> {{ words.writtenWord }}</td>\n        <td role=\"cell\">\n          <ul>\n            <li *ngFor=\"let suggest of words.suggestWords\">\n              {{ suggest }}\n            </li>\n          </ul>\n        </td>\n\n      </tr>\n    </ng-container>\n  </tbody>\n</table>\n\n<div class=\"advise-title\" *ngIf=\"scoreData.adviseContent\">\n  Advised Essay Content\n</div>\n<div class=\"advise-text\" id=\"essay-content\"></div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/question-components/listening-question/listening-question.component.html":
  /*!***************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/question-components/listening-question/listening-question.component.html ***!
    \***************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedQuestionComponentsListeningQuestionListeningQuestionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"isLoading==false\">\n    <div [ngSwitch]=\"questionData.questionType\" class=\"anni-fadeinout\">\n        <ng-template [ngSwitchCase]=\"listeningCode.L001\">\n            <info-box>\n                You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of\n                the\n                sentence as you can. You will hear the sentence only once.\n            </info-box>\n            <div class=\"my-3\">\n                <audio-player [isControl]=\"false\" [audioLink]=\"questionData.audioFile\"></audio-player>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-12 mb-2\">\n                    <label-text>WRITE YOUR ANSWER</label-text>\n                    <textarea class=\"form-control input-rectangle reverse;\" cols=\"30\" rows=\"4\"\n                        placeholder=\"Write Your Answer\" [(ngModel)]=\"dictationValue\"></textarea>\n                </div>\n            </div>\n        </ng-template>\n        <ng-template [ngSwitchCase]=\"listeningCode.L002\">\n            <info-box>\n                Listen to the recording. Type the missing words in each blank.\n            </info-box>\n            <div class=\"my-3\">\n                <audio-player [isControl]=\"false\" [audioLink]=\"questionData.audioFile\"></audio-player>\n            </div>\n            <div class=\"fib-container\">\n                <span *ngFor=\"let obj of questionData.question;let i=index;\" class=\"text-d200 body-l normal-bold\">\n                    {{obj}}\n                    <input type=\"text\" class=\"fib-box\" (input)=\"getBlank($event.target.value,i)\"\n                        *ngIf=\"questionData.question.length-1 != i\" #fibInput>\n                </span>\n            </div>\n        </ng-template>\n        <ng-template [ngSwitchCase]=\"listeningCode.L003\">\n            <info-box>\n                You will hear a recording. Below is a transcription of the recording. Some words in the transcription\n                differ\n                from what the speaker(s) said. Please click on the words that are different.\n            </info-box>\n\n            <div class=\"my-3\">\n                <audio-player [isControl]=\"false\" [audioLink]=\"questionData.audioFile\"></audio-player>\n            </div>\n\n            <div class=\"row\">\n                <span *ngFor=\"let word of highlightQuestionArray;let i=index\">\n                    <span class=\"text-d200 body-l  normal-bold\" (click)=\"highword(word,i)\"\n                        [ngClass]=\"{ 'highlight': highWords[i] == checkWord(word) }\">{{word}}</span>\n                    &nbsp;&nbsp;\n                </span>\n            </div>\n        </ng-template>\n        <ng-template [ngSwitchCase]=\"listeningCode.L004\">\n            <!-- <p class=\"h3-l text-d200 demi-bold\">MCQ(Choose Single Answers)</p> -->\n            <info-box>\n                Listen to the recording and answer the multiple-choice question by\n                selecting correct response. Only one response is correct.\n            </info-box>\n            <div class=\"my-3\">\n                <audio-player [isControl]=\"false\" [audioLink]=\"questionData.audioFile\"></audio-player>\n            </div>\n            <p class=\"h4-m \n            text-d200 demi-bold\">{{questionData.question}}</p>\n            <div class=\"row\">\n                <div class=\"col-md-12 mb-3\" *ngFor=\"let enum of questionData.options\">\n                    <radio-button [radioData]=\"enum\" (checkEvent)=\"getSingleAns($event)\"></radio-button>\n                </div>\n            </div>\n        </ng-template>\n        <ng-template [ngSwitchCase]=\"listeningCode.L005\">\n            <info-box>\n                Listen to the recording and answer the multiple-choice question by\n                selecting the correct response. You will need to select more than one response.\n            </info-box>\n            <div class=\"my-3\">\n                <audio-player [isControl]=\"false\" [audioLink]=\"questionData.audioFile\"></audio-player>\n            </div>\n\n            <p class=\"h4-m  text-d200 demi-bold\">{{questionData.question}}</p>\n            <div class=\"row\">\n                <div class=\"col-md-12 mb-3 \" *ngFor=\"let order of questionData.options; let i = index\">\n                    <check-box [checkData]=\"order\" (checkEvent)=\"getMultipleAnswer($event)\"></check-box>\n                </div>\n            </div>\n        </ng-template>\n        <ng-template [ngSwitchCase]=\"listeningCode.L006\">\n            <info-box>\n                You will hear a recording about <b>{{questionData.title}}</b>. At the end of the recording\n                the last word or group of words has been replaced by a beep. Select the correct option to complete the\n                recording.\n            </info-box>\n            <div class=\"my-3\">\n                <audio-player [isControl]=\"false\" [audioLink]=\"questionData.audioFile\"></audio-player>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-12 mb-3\" *ngFor=\"let enum of questionData.options\">\n                    <radio-button [radioData]=\"enum\" (checkEvent)=\"getSingleAns($event)\"></radio-button>\n                </div>\n            </div>\n        </ng-template>\n        <ng-template [ngSwitchCase]=\"listeningCode.L007\">\n            <info-box>\n                You will hear a recording. Click on the paragraph that best relates to\n                the recording.\n            </info-box>\n\n            <div class=\"my-3\">\n                <audio-player [isControl]=\"false\" [audioLink]=\"questionData.audioFile\"></audio-player>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-12 mb-3\" *ngFor=\"let enum of questionData.options\">\n                    <radio-button [radioData]=\"enum\" (checkEvent)=\"getSingleAns($event)\"></radio-button>\n                </div>\n            </div>\n        </ng-template>\n        <ng-template [ngSwitchCase]=\"listeningCode.L008\">\n            <form [formGroup]=\"evaluationForm\">\n                <div class=\"summaryName\" *ngIf=\"questionData.summaryName\">\n                    {{ questionData.summaryName }}\n                </div>\n                <div class=\"row\">\n\n                    <div class=\"col-md-12 mb-2\">\n                        <info-box>\n                            You will hear a short lecture. Write a summary for a fellow student who was not present at\n                            the\n                            lecture. You should write 50-70 words. You have 10 minutes to finish this task. Your\n                            response\n                            will be judged on the quality of your writing and on how well your response presents the key\n                            points presented in the lecture.\n                        </info-box>\n                        <div class=\"my-3\">\n                            <audio-player [isControl]=\"false\" [audioLink]=\"questionData.audioFile\"></audio-player>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-12 text-white\">\n                        <label-text>Select Convention</label-text>\n                        <select class=\"select-box form-control\" formControlName=\"version\"\n                            [ngClass]=\"{ 'is-invalid': submitted && f.version.errors }\">\n                            <option *ngFor=\"let ver of versionList\" [ngValue]=\"ver\">{{ ver }}\n                            </option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"row mt-3\">\n                    <div class=\"col-md-12\">\n                        <label-text>Summary</label-text>\n                        <word-count-text>\n                            (Total Word Count:<div class=\"word-count\">{{\n                                evaluationForm.value.summary.trim() ? countWord(evaluationForm.value.summary) : '0'\n                                }}</div>\n                            )</word-count-text>\n                        <textarea class=\"form-control input-rectangle reverse;\" cols=\"30\" rows=\"4\" [ngClass]=\"{\n                        'is-invalid': submitted && f.summary.errors\n                      }\" formControlName=\"summary\" placeholder=\"Write summary\" oncopy=\"return false\"\n                            onpaste=\"return false\"></textarea>\n                    </div>\n                </div>\n            </form>\n        </ng-template>\n\n        <div class=\"footer-button-block\">\n            <cancel-btn>Cancel</cancel-btn>\n            <submit-btn (onClick)=\"onSubmit()\">Confirm</submit-btn>\n        </div>\n    </div>\n</ng-container>\n\n<div *ngIf=\"isLoading\"></div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/question-components/listening-score/listening-score.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/question-components/listening-score/listening-score.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedQuestionComponentsListeningScoreListeningScoreComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container [ngSwitch]=\"data.questionType\">\n    <ng-template [ngSwitchCase]=\"listeningcode.L002\">\n        <ng-container *ngIf=\"data.result as result\">\n            <div class=\"fib-container\">\n                <span *ngFor=\"let obj of data.paragraph;let i=index;\" class=\"text-d200 body-l normal-bold\">\n                    {{obj}}\n                    <ng-container *ngIf=\"data.paragraph.length-1 != i\">\n                        <input type=\"text\" class=\"fib-box\" [value]=\"result.userAnswers[i].property\"\n                            [class.isCorrect]=\"result.userAnswers[i].correctness\" #fibInput>\n                        <div class=\"fib-answer\">{{result.correctAnswer[i]}}</div>\n                    </ng-container>\n                </span>\n            </div>\n        </ng-container>\n    </ng-template>\n    <ng-template [ngSwitchCase]=\"listeningcode.L001\">\n        <table>\n            <tr>\n                <td>\n                    Question\n                </td>\n                <td>\n                    <div class=\"setAligment\">\n                        {{ data.correctAnswer }}\n                    </div>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    Answer\n                </td>\n                <td>\n                    <div class=\"setAligment\" *ngIf=\"data.userAnswer\" id=\"user-answer{{data.questionId}}\">\n                    </div>\n                    <div class=\"setAligment\" *ngIf=\"data.userAnswer==''\">\n                        No Answered\n                    </div>\n                </td>\n            </tr>\n        </table>\n        <div class=\"row\">\n            <div class=\"col-md-6 mt-0\">\n                <div class=\"actual\">\n                    <div>Total Score</div>\n                    <div>{{ data.markActual }}</div>\n                </div>\n            </div>\n            <div class=\"col-md-6 mt-0\">\n                <div class=\"obtain\">\n                    <div>Your Score</div>\n                    <div>{{ data.markObtained }}</div>\n                </div>\n            </div>\n        </div>\n    </ng-template>\n\n    <ng-template [ngSwitchCase]=\"listeningcode.L003\">\n        <ng-container *ngIf=\"data.result as result\">\n            <div class=\"fib-container\">\n                <ng-container *ngFor=\"let obj of result.paragraph;let i=index;\">\n                    <span\n                        [ngClass]=\"{'highlight-userans': obj.answered==true,'highlight-correctans': obj.correctness==true}\"\n                        class=\"highlight-txt\">\n                        {{obj.text}}\n                        <ng-container *ngIf=\"obj.answered==true\">\n                            <i class=\"fa fa-check-circle\" aria-hidden=\"true\" *ngIf=\"obj.correctness==true\"></i>\n                            <i class=\"fa fa-times-circle\" aria-hidden=\"true\" *ngIf=\"obj.correctness==false\"></i>\n                        </ng-container>\n\n                    </span>&nbsp;\n                </ng-container>\n            </div>\n        </ng-container>\n    </ng-template>\n\n    <ng-template [ngSwitchCase]=\"listeningcode.L004\">\n        <div class=\"row\">\n            <div class=\"col-md-12 mb-2\" *ngFor=\"let enum of data.mcqOptions\">\n                <radio-button [radioData]=\"enum\" [isScore]=\"true\"></radio-button>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"actual\">\n                    <div>Total Score</div>\n                    <div>{{ data.markActual }}</div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"obtain\">\n                    <div>Your Score</div>\n                    <div>{{ data.markObtained }}</div>\n                </div>\n            </div>\n        </div>\n    </ng-template>\n    <ng-template [ngSwitchCase]=\"listeningcode.L005\">\n        <div class=\"row\">\n            <div class=\"col-md-12 mb-3\" *ngFor=\"let order of data.mcqOptions; let i = index\">\n                <check-box [checkData]=\"order\" [isScore]=\"true\"></check-box>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"actual\">\n                    <div>Total Score</div>\n                    <div>{{ data.markActual }}</div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"obtain\">\n                    <div>Your Score</div>\n                    <div>{{ data.markObtained }}</div>\n                </div>\n            </div>\n        </div>\n    </ng-template>\n    <ng-template\n        [ngSwitchCase]=\"[listeningcode.L006,listeningcode.L007].includes(data.questionType) ? data.questionType : !data.questionType \">\n        <div class=\"row\">\n            <div class=\"col-md-12 mb-2\" *ngFor=\"let enum of data.options\">\n                <radio-button [radioData]=\"enum\" [isScore]=\"true\"></radio-button>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"actual\">\n                    <div>Total Score</div>\n                    <div>{{ data.markActual }}</div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"obtain\">\n                    <div>Your Score</div>\n                    <div>{{ data.markObtained }}</div>\n                </div>\n            </div>\n        </div>\n    </ng-template>\n\n    <ng-template [ngSwitchCase]=\"listeningcode.L008\">\n        <summary-score [scoreData]=\"data\"></summary-score>\n    </ng-template>\n</ng-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/question-components/question-by-module/question-by-module.component.html":
  /*!***************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/question-components/question-by-module/question-by-module.component.html ***!
    \***************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedQuestionComponentsQuestionByModuleQuestionByModuleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container [ngSwitch]=\"moduleName\">\n    <ng-container *ngSwitchCase=\"'Writing'\">\n        <ng-container *ngIf=\"question.questionType=='W001'\">\n            <essay-question [essayDetail]=\"question\" (submitEvaluation)=\"getAnswer($event)\" [isNext]=\"true\"></essay-question>\n        </ng-container>\n        <ng-container *ngIf=\"question.questionType=='W002'\">\n            <summary-question [summaryDetail]=\"question\" (submitEvaluation)=\"getAnswer($event)\" [isNext]=\"true\"></summary-question>\n        </ng-container>\n\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'Reading'\">\n        <reading-question [questionData]=\"question\" (answerEmit)=\"getAnswer($event)\" [isNext]=\"true\">\n        </reading-question>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'Speaking'\">\n        <speaking-question [questionData]=\"question\" (answerEmit)=\"getAnswer($event)\" [isNext]=\"true\">\n        </speaking-question>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'Listening'\">\n        <listening-question [questionData]=\"question\" (answerEmit)=\"getAnswer($event)\">\n        </listening-question>\n    </ng-container>\n</ng-container>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/question-components/question-loading/question-loading.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/question-components/question-loading/question-loading.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedQuestionComponentsQuestionLoadingQuestionLoadingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container pt-5\">\n    <content-loader primaryColor=\"#e6e5e5\" height=17>\n        <svg:rect x=\"30%\" y=\"0\" rx=\"2\" ry=\"2\" width=\"50%\" height=\"8\" />\n    </content-loader>\n</div>\n\n<div class=\"container\" *ngIf=\"type=='R-01'\">\n    <content-loader primaryColor=\"#e6e5e5\" height=300>\n        <svg:rect x=\"0\" y=\"20\" rx=\"2\" ry=\"2\" width=\"30%\" height=\"5\" />\n        <svg:rect x=\"50%\" y=\"20\" rx=\"2\" ry=\"2\" width=\"30%\" height=\"5\" />\n\n        <svg:rect x=\"0\" y=\"30\" rx=\"1\" ry=\"2\" width=\"49%\" height=\"20\" />\n        <svg:rect x=\"50%\" y=\"30\" rx=\"1\" ry=\"2\" width=\"50%\" height=\"20\" />\n\n        <svg:rect x=\"0\" y=\"53\" rx=\"1\" ry=\"2\" width=\"49%\" height=\"20\" />\n        <svg:rect x=\"50%\" y=\"53\" rx=\"1\" ry=\"2\" width=\"50%\" height=\"20\" />\n\n        <svg:rect x=\"0\" y=\"76\" rx=\"1\" ry=\"2\" width=\"49%\" height=\"20\" />\n        <svg:rect x=\"50%\" y=\"76\" rx=\"1\" ry=\"2\" width=\"50%\" height=\"20\" />\n\n        <svg:rect x=\"0\" y=\"99\" rx=\"1\" ry=\"2\" width=\"49%\" height=\"20\" />\n        <svg:rect x=\"50%\" y=\"99\" rx=\"1\" ry=\"2\" width=\"50%\" height=\"20\" />\n\n        <svg:rect x=\"0\" y=\"122\" rx=\"1\" ry=\"2\" width=\"49%\" height=\"20\" />\n        <svg:rect x=\"50%\" y=\"122\" rx=\"1\" ry=\"2\" width=\"50%\" height=\"20\" />\n\n        <svg:rect x=\"0\" y=\"145\" rx=\"1\" ry=\"2\" width=\"49%\" height=\"20\" />\n        <svg:rect x=\"50%\" y=\"145\" rx=\"1\" ry=\"2\" width=\"50%\" height=\"20\" />\n\n        <svg:rect x=\"0\" y=\"168\" rx=\"1\" ry=\"2\" width=\"49%\" height=\"20\" />\n        <svg:rect x=\"50%\" y=\"168\" rx=\"1\" ry=\"2\" width=\"50%\" height=\"20\" />\n    </content-loader>\n</div>\n\n<div class=\"container\" *ngIf=\"type=='R-02'\">\n    <content-loader primaryColor=\"#e6e5e5\" height=600>\n        <svg:rect x=\"0\" y=\"31\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n        <svg:rect x=\"0\" y=\"42\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n\n        <svg:rect x=\"0\" y=\"53\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n        <svg:rect x=\"0\" y=\"64\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n        <svg:rect x=\"0\" y=\"75\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n        <svg:rect x=\"0\" y=\"86\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n        <svg:rect x=\"0\" y=\"97\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n        <svg:rect x=\"0\" y=\"108\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n        <svg:rect x=\"0\" y=\"119\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n        <svg:rect x=\"0\" y=\"130\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n        <svg:rect x=\"0\" y=\"141\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n        <svg:rect x=\"0\" y=\"152\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n        <svg:rect x=\"0\" y=\"165\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n        <svg:rect x=\"0\" y=\"176\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n        <svg:rect x=\"0\" y=\"187\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n        <svg:rect x=\"0\" y=\"197\" rx=\"2\" ry=\"2\" width=\"50%\" height=\"5\" />\n    </content-loader>\n</div>\n\n<div class=\"container py-5\" *ngIf=\"type=='R-03'\">\n    <div class=\"row\">\n        <div class=\"col-md-3 list-group\">\n            <content-loader primaryColor=\"#e6e5e5\" height=1000>\n                <svg:rect x=\"0\" y=\"3\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"70\" />\n                <svg:rect x=\"0\" y=\"100\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"70\" />\n                <svg:rect x=\"0\" y=\"197\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"70\" />\n                <svg:rect x=\"0\" y=\"294\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"70\" />\n\n                <svg:rect x=\"0\" y=\"391\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"70\" />\n                <svg:rect x=\"0\" y=\"488\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"70\" />\n                <svg:rect x=\"0\" y=\"585\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"70\" />\n                <svg:rect x=\"0\" y=\"682\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"70\" />\n                <svg:rect x=\"0\" y=\"779\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"70\" />\n                <svg:rect x=\"0\" y=\"876\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"70\" />\n            </content-loader>\n        </div>\n        <div class=\"col-md-9\">\n            <content-loader primaryColor=\"#e6e5e5\" height=600>\n                <svg:rect x=\"0\" y=\"3\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n                <svg:rect x=\"0\" y=\"14\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n                <svg:rect x=\"0\" y=\"25\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n\n                <svg:rect x=\"0\" y=\"36\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n                <svg:rect x=\"0\" y=\"47\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n                <svg:rect x=\"0\" y=\"58\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n                <svg:rect x=\"0\" y=\"69\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n                <svg:rect x=\"0\" y=\"70\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n                <svg:rect x=\"0\" y=\"81\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n                <svg:rect x=\"0\" y=\"92\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n                <svg:rect x=\"0\" y=\"103\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n                <svg:rect x=\"0\" y=\"114\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n                <svg:rect x=\"0\" y=\"125\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n                <svg:rect x=\"0\" y=\"136\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n                <svg:rect x=\"0\" y=\"147\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n                <svg:rect x=\"0\" y=\"158\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n                <svg:rect x=\"0\" y=\"169\" rx=\"2\" ry=\"2\" width=\"50%\" height=\"5\" />\n            </content-loader>\n        </div>\n    </div>\n\n</div>\n\n<div class=\"container py-5\" *ngIf=\"type=='R-04' || type=='R-05'\">\n    <content-loader primaryColor=\"#e6e5e5\" height=600>\n        <svg:rect x=\"0\" y=\"3\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n        <svg:rect x=\"0\" y=\"14\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n        <svg:rect x=\"0\" y=\"25\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n\n        <svg:rect x=\"0\" y=\"36\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n        <svg:rect x=\"0\" y=\"47\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n        <svg:rect x=\"0\" y=\"58\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n        <svg:rect x=\"0\" y=\"69\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n        <svg:rect x=\"0\" y=\"70\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n        <svg:rect x=\"0\" y=\"81\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n        <svg:rect x=\"0\" y=\"92\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n        <svg:rect x=\"0\" y=\"103\" rx=\"2\" ry=\"2\" width=\"50%\" height=\"5\" />\n        <svg:rect x=\"0\" y=\"120\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"20\" />\n        <svg:rect x=\"0\" y=\"145\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"20\" />\n        <svg:rect x=\"0\" y=\"170\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"20\" />\n        <svg:rect x=\"0\" y=\"195\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"20\" />\n        <svg:rect x=\"0\" y=\"220\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"20\" />\n    </content-loader>\n</div>\n\n<div style=\"height: 200px;\" *ngIf=\"moduleType=='listening'\" class=\"container\">\n    <content-loader primaryColor=\"#e6e5e5\" viewBox=\"0 0 400 80\">\n        <svg:rect x=\"0\" y=\"3\" rx=\"1\" ry=\"1\" width=\"60%\" height=\"5\" />\n        <svg:rect x=\"0\" y=\"13\" rx=\"3\" ry=\"3\" width=\"100%\" height=\"16\" />\n        <svg:rect x=\"45\" y=\"38\" rx=\"3\" ry=\"3\" width=\"80%\" height=\"30\" />\n    </content-loader>\n</div>\n\n<div *ngIf=\"type=='L-01'\" class=\"container\">\n    <content-loader primaryColor=\"#e6e5e5\" viewBox=\"0 0 400 80\">\n        <svg:rect x=\"0\" y=\"0\" rx=\"1\" ry=\"1\" width=\"30%\" height=\"5\" />\n        <svg:rect x=\"0\" y=\"8\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"50\" />\n    </content-loader>\n</div>\n<div *ngIf=\"type=='L-02' || type=='L-03'\" class=\"container\">\n    <content-loader primaryColor=\"#e6e5e5\" height=600>\n        <svg:rect x=\"0\" y=\"3\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n        <svg:rect x=\"0\" y=\"14\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n        <svg:rect x=\"0\" y=\"25\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n\n        <svg:rect x=\"0\" y=\"36\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n        <svg:rect x=\"0\" y=\"47\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n        <svg:rect x=\"0\" y=\"58\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n        <svg:rect x=\"0\" y=\"69\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n        <svg:rect x=\"0\" y=\"70\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n        <svg:rect x=\"0\" y=\"81\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n        <svg:rect x=\"0\" y=\"92\" rx=\"2\" ry=\"2\" width=\"50%\" height=\"5\" />\n    </content-loader>\n</div>\n\n<div *ngIf=\"type=='L-04' || type=='L-05' || type=='L-06' || type=='L07'\" class=\"container\">\n    <content-loader primaryColor=\"#e6e5e5\" height=600>\n        <svg:rect x=\"0\" y=\"0\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"20\" />\n        <svg:rect x=\"0\" y=\"25\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"20\" />\n        <svg:rect x=\"0\" y=\"50\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"20\" />\n        <svg:rect x=\"0\" y=\"75\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"20\" />\n        <svg:rect x=\"0\" y=\"100\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"20\" />\n    </content-loader>\n</div>\n\n<div style=\"height: 160px;\" *ngIf=\"moduleType=='speaking'\" class=\"container\">\n    <content-loader primaryColor=\"#e6e5e5\"  viewBox=\"0 0 400 80\">\n        <svg:rect x=\"120\" y=\"10\" rx=\"1\" ry=\"1\" width=\"40%\" height=\"10\" />\n        <svg:rect x=\"0\" y=\"28\" rx=\"1\" ry=\"1\" width=\"100%\" height=\"5\" />\n        <svg:rect x=\"0\" y=\"38\" rx=\"3\" ry=\"3\" width=\"50%\" height=\"5\" />\n      </content-loader>\n</div>\n\n<div *ngIf=\"type=='S-01'\">\n    <content-loader primaryColor=\"#e6e5e5\" viewBox=\"0 0 400 80\">\n        <svg:rect x=\"50\" y=\"0\" rx=\"2\" ry=\"2\" width=\"70%\" height=\"40\" />\n        <svg:rect x=\"0\" y=\"55\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n        <svg:rect x=\"0\" y=\"64\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n        <svg:rect x=\"0\" y=\"75\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n        <svg:rect x=\"0\" y=\"84\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n        <svg:rect x=\"0\" y=\"95\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n        <svg:rect x=\"0\" y=\"104\" rx=\"2\" ry=\"2\" width=\"100%\" height=\"5\" />\n        <svg:rect x=\"0\" y=\"115\" rx=\"2\" ry=\"2\" width=\"50%\" height=\"5\" />\n      </content-loader>\n</div>\n\n<div *ngIf=\"type=='S-02' || type=='S-03' || type=='S-04' || type=='S-05'\">\n    <content-loader primaryColor=\"#e6e5e5\" viewBox=\"0 0 400 80\">\n        <svg:rect x=\"50\" y=\"0\" rx=\"2\" ry=\"2\" width=\"70%\" height=\"40\" />\n        <svg:rect x=\"50\" y=\"50\" rx=\"2\" ry=\"2\" width=\"70%\" height=\"40\" />\n      </content-loader>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/question-components/reading-question/reading-question.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/question-components/reading-question/reading-question.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedQuestionComponentsReadingQuestionReadingQuestionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"isLoading==false\">\n\n  <ng-container [ngSwitch]=\"questionData.questionType\">\n    <ng-container *ngSwitchCase=\"readingCode.R001\">\n      <div class=\"row\">\n        <div class=\"col-md-6 reorder-left\">\n          <p class=\"question-title\">Questions</p>\n          <ul class=\"list-group reorder-list\" [sortablejs]=\"questionData.paragraph\"\n            [sortablejsOptions]=\"questionOptions\">\n            <li class=\"list-group-item \" *ngFor=\"let item of questionData.paragraph\">\n              {{ item.text }}\n            </li>\n          </ul>\n        </div>\n\n        <div class=\"col-md-6 reorder-right\">\n          <p class=\"answer-title\">Answers</p>\n          <ul class=\"list-group answer-list-group\" [sortablejs]=\"reorderList\" [sortablejsOptions]=\"answerOptions\">\n            <li class=\"list-group-item\" *ngFor=\"let item of reorderList\">\n              {{ item.text }}\n            </li>\n            <li class=\"empty-drag\" *ngIf=\"reorderList.length==0\">Drag Here</li>\n          </ul>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container *ngSwitchCase=\"readingCode.R002\">\n      <div class=\"drop-container\">\n        <span *ngFor=\"let obj of questionData.paragraph;let i=index;\" class=\"paragraph-question-text\">\n          {{obj}}\n          <select class=\"select-box\" *ngIf=\"questionData.answers.length > i\"\n            (change)='onFibDropDown($event.target.value,i,questionData.answers[i].answerId)'>\n            <option value=\"\" disabled selected hidden></option>\n            <option value=\"{{selectObj}}\" *ngFor=\"let selectObj of questionData.answers[i].options\">{{selectObj}}\n            </option>\n          </select>\n        </span>\n      </div>\n    </ng-container>\n\n    <ng-container *ngSwitchCase=\"readingCode.R003\">\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <ul class=\"list-group fib-drag-list\">\n            <li class=\"list-group-item\" draggable=\"true\" (dragstart)=\"drag($event,i)\"\n              *ngFor=\"let item of questionData.options;let i=index;\">\n              <span>{{item}}</span>\n\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-9 question overLay\">\n          <span *ngFor=\"let data of questionData.paragraph;let i=index\" class=\"paragraph-question-text\">\n            {{data}}\n            <div class=\"dragable \" (dragover)=\"allowDrop($event)\" (drop)=\"onDrop03($event,i)\" id=\"dragId{{i}}\"\n              *ngIf=\"questionData.paragraph.length-1 != i\"></div>\n          </span>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container *ngSwitchCase=\"readingCode.R004\">\n      <p class=\"text-d200\" id=\"singleQuestion\"></p>\n      <div class=\"row\">\n        <div class=\"col-md-12 mb-3 mcq-list\" *ngFor=\"let enum of questionData.options\">\n          <radio-button [radioData]=\"enum\" (checkEvent)=\"getSingle($event)\"></radio-button>\n        </div>\n      </div>\n    </ng-container>\n\n    <ng-container *ngSwitchCase=\"readingCode.R005\">\n      <p class=\"text-d200\" id=\"singleQuestion\"></p>\n      <div class=\"row\">\n        <div class=\"col-md-12 mb-3 mcq-list\" *ngFor=\"let order of questionData.options; let i = index\">\n          <check-box [checkData]=\"order\" (checkEvent)=\"getMultiple($event)\"></check-box>\n        </div>\n      </div>\n    </ng-container>\n\n    <div class=\"footer-button-block\" *ngIf=\"isNext==false\">\n      <cancel-btn>Cancel</cancel-btn>\n      <button class=\"btn btn-next\" (click)=\"onSubmit()\">Confirm</button>\n    </div>\n    <div class=\"footer-button-block\" *ngIf=\"isNext==true\">\n      <button class=\"btn btn-next\" (click)=\"onSubmit()\">Confirm</button>\n    </div>\n  </ng-container>\n</ng-container>\n\n<div *ngIf=\"isLoading\"></div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/question-components/reading-score/reading-score.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/question-components/reading-score/reading-score.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedQuestionComponentsReadingScoreReadingScoreComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [ngSwitch]=\"result.questionType\">\n    <ng-template [ngSwitchCase]=\"readingCode.R001\">\n        <div class=\"row\">\n            <div class=\"col-md-6 reorder-left\">\n                <p class=\"question-title\">Correct Answer</p>\n                <ul class=\"list-group reorder-list\">\n                    <li class=\"list-group-item \" *ngFor=\"let item of result.answers\">\n                        {{ item }}\n                    </li>\n                </ul>\n            </div>\n\n            <div class=\"col-md-6 reorder-right\">\n                <p class=\"your-answer-title\">Your Answer</p>\n                <ul class=\"list-group answer-list-group\">\n                    <li class=\"list-group-item\" *ngFor=\"let item of result.userAnswers;let i=index;\">\n                        <!-- <div class=\"circle\"> -->\n                        <ng-container *ngIf=\"result.correctnessAns[i]==true; else showFalse\">\n                            <i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i>\n                        </ng-container>\n                        <ng-template #showFalse>\n                            <i class=\"fa fa-times-circle\" aria-hidden=\"true\"></i>\n                        </ng-template>\n                        <!-- </div> -->\n                        {{ item }}\n                    </li>\n                </ul>\n            </div>\n            <div class=\"col-md-6 actual\">\n                <div>Mark Actual</div>\n                <div>{{ result.markActual }}</div>\n            </div>\n            <div class=\"col-md-6 obtain\">\n                <div>Mark Obtained</div>\n                <div>{{ result.markObtained }}</div>\n            </div>\n        </div>\n    </ng-template>\n    <ng-template [ngSwitchCase]=\"readingCode.R002\">\n        <div class=\"drop-container mb-3\">\n            <span *ngFor=\"let obj of result.paragraph; let i = index\" class=\"paragraph-question-text\">\n                {{ obj }}\n                <ng-container *ngIf=\"result.paragraph.length-1 > i\">\n                    <ng-container *ngIf=\"result.result[i] as res\">\n                        <select class=\"select-box\" [class.isCorrect]=\"res.isCorrect\">\n                            <ng-container *ngFor=\"let opt of res.options\">\n                                <option [selected]=\"opt.answered\" [class.selectedCorrect]=\"opt.correctness\">\n                                    {{opt.property}}\n                                </option>\n                            </ng-container>\n                        </select>\n                        <div class=\"fib-answer\">{{res.correctAnswer}}</div>\n                    </ng-container>\n\n                </ng-container>\n\n\n            </span>\n        </div>\n\n    </ng-template>\n    <ng-template [ngSwitchCase]=\"readingCode.R003\">\n        <div class=\"row\">\n            <div class=\"col-md-3\" *ngIf=\"result.result.noAnswers as noAnswers\">\n                <ul class=\"list-group fib-drag-list\">\n                    <li class=\"list-group-item fib-drag-item\" *ngFor=\"let item of noAnswers;let i=index;\">\n                        <span>{{item}}</span>\n                    </li>\n                </ul>\n            </div>\n\n            <div class=\"col-md-9\">\n                <span *ngFor=\"let data of result.paragraph; let i = index\" class=\"text-d200 body-l normal-bold\">\n                    {{ data }}\n                    <ng-container *ngIf=\"result.result.userAnswers as userAnswers\">\n                        <ng-container *ngIf=\"result.paragraph.length - 1 != i\">\n                            <div class=\"dragable\" id=\"dragId{{ i }}\" \n                            [class.isCorrect]=\"userAnswers[i].correctness\"> {{userAnswers[i].property}}</div>\n                            <div class=\"fib-answer\">{{result.result.correctAnswer[i]}}</div>\n                        </ng-container>\n                    </ng-container>\n                </span>\n            </div>\n        </div>\n\n    </ng-template>\n    <ng-template [ngSwitchCase]=\"readingCode.R005\">\n        <p id=\"multi{{result.questionId}}\"></p>\n        <div class=\"row\">\n            <div class=\"col-md-12 mb-3 mcq-list\" *ngFor=\"let order of result.mcqOptions; let i = index\">\n                <check-box [checkData]=\"order\" [isScore]=\"true\"></check-box>\n            </div>\n\n        </div>\n        <div class=\"row mt-2\">\n            <div class=\"col-md-6 \">\n                <div class=\"actual\">\n                    <div>Mark Actual</div>\n                    <div>{{ result.markActual }}</div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"obtain\">\n                    <div>Mark Obtained</div>\n                    <div>{{ result.markObtained }}</div>\n                </div>\n            </div>\n        </div>\n    </ng-template>\n    <ng-template [ngSwitchCase]=\"readingCode.R004\">\n        <p class=\"h2-xl text-d200\" id=\"single{{result.questionId}}\"></p>\n        <div class=\"row\">\n            <div class=\"col-md-12 mb-2 mcq-list\" *ngFor=\"let enum of result.mcqOptions\">\n                <radio-button [radioData]=\"enum\" [isScore]=\"true\"></radio-button>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6 \">\n                <div class=\"actual\">\n                    <div>Mark Actual</div>\n                    <div>{{ result.markActual }}</div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"obtain\">\n                    <div>Mark Obtained</div>\n                    <div>{{ result.markObtained }}</div>\n                </div>\n            </div>\n        </div>\n    </ng-template>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/question-components/score-by-module/score-by-module.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/question-components/score-by-module/score-by-module.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedQuestionComponentsScoreByModuleScoreByModuleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container [ngSwitch]=\"moduleName\">\n    <ng-container *ngSwitchCase=\"'Reading'\">\n        <reading-score [result]=\"scoreResult\" ></reading-score>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'Speaking'\">\n        <speaking-score [result]=\"scoreResult\"></speaking-score>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'Listening'\">\n        <listening-score [data]=\"scoreResult\"></listening-score>\n    </ng-container>\n   \n</ng-container>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/question-components/speaking-question/speaking-question.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/question-components/speaking-question/speaking-question.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedQuestionComponentsSpeakingQuestionSpeakingQuestionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"!isLoading\" class=\"anni-fadeinout\">\n    <ng-container [ngSwitch]=\"questionData.questionType\">\n        <ng-container *ngSwitchCase=\"'S001'\">\n            <info-box>\n                Look at the text below. In 40 seconds, you must read this text aloud as naturally and clearly as\n                possible. You\n                have 40 seconds to read aloud.\n            </info-box>\n            {{recoderStatus}}\n            <recoder [evaluateObj]=\"questionData\" (emitFile)=\"onemitFile($event)\">\n            </recoder>\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <p class=\"text-paragraph\">\n                        {{questionData.paragraph}}\n                    </p>\n                </div>\n            </div>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'S002'\">\n            <info-box>\n                You will hear a sentence. Please repeat the sentence exactly as you hear it.\n                You will hear the sentence only once.\n            </info-box>\n            <audio-player [isControl]=\"false\" [audioLink]=\"questionData.audioFile\" (audioEnd)=\"audioStatus($event)\"\n                [audioState]=\"audioState\">\n            </audio-player>\n            <recoder [evaluateObj]=\"questionData\" *ngIf=\"isRecord\" (emitFile)=\"onemitFile($event)\"></recoder>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'S003'\">\n            <info-box>\n                Look at the image below. In 25 seconds, please speak into microphone and describe in detail what the\n                image is\n                showing. You have 40 seconds to give your response.\n            </info-box>\n            <div class=\"row\" style=\"align-items: center;\">\n                <div class=\"col-md-6 img-wrapper\">\n                    <img src=\"{{questionData.imageFile}}\" (load)=\"onImgLoad()\" [hidden]=\"isImgLoad\">\n                    <div [hidden]=\"!isImgLoad\" class=\"img-loading\">\n                        <div class=\"loader mb-3\"></div>\n                        Image Loading.....\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <recoder [evaluateObj]=\"questionData\" *ngIf=\"!isImgLoad\" (emitFile)=\"onemitFile($event)\"></recoder>\n\n                </div>\n\n            </div>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'S004'\">\n            <info-box>\n                You will hear a lecture. After listening to the lecture, in 10 seconds, please speak into the microphone\n                and retell what you have just heard from the lecture in your own words. You will have 40 seconds to give\n                your response.\n            </info-box>\n            <audio-player [isControl]=\"false\" [audioLink]=\"questionData.audioFile\" (audioEnd)=\"audioStatus($event)\"\n                [audioState]=\"audioState\">\n            </audio-player>\n            <recoder [evaluateObj]=\"questionData\" *ngIf=\"isRecord\" (emitFile)=\"onemitFile($event)\"></recoder>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'S005'\">\n            <info-box>\n                You will hear a sentence. Please repeat the sentence exactly as you hear it.\n                You will hear the sentence only once.\n            </info-box>\n            <audio-player [isControl]=\"false\" [audioLink]=\"questionData.audioFile\" (audioEnd)=\"audioStatus($event)\"\n                [audioState]=\"audioState\">\n            </audio-player>\n            <recoder [evaluateObj]=\"questionData\" *ngIf=\"isRecord\" (emitFile)=\"onemitFile($event)\"></recoder>\n        </ng-container>\n\n        <!-- <button class=\"btn btn-evaluate\" *ngIf=\"isnonEvaluate\" (click)=\"noEvluating()\">No Evaluating</button> -->\n\n        <div class=\"footer-button-block\" *ngIf=\"!isNext\">\n            <cancel-btn>Cancel</cancel-btn>\n            <submit-btn (onClick)=\"noEvluating()\">Confirm</submit-btn>\n        </div>\n\n\n        <div class=\"footer-button-block\" *ngIf=\"isNext\">\n            <button class=\"btn btn-next\" (click)=\"onSubmit()\">Confirm</button>\n        </div>\n    </ng-container>\n</div>\n\n<div *ngIf=\"isLoading\"></div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/question-components/speaking-score/speaking-score.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/question-components/speaking-score/speaking-score.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedQuestionComponentsSpeakingScoreSpeakingScoreComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"result.isNoEvaluate; else showEvaluate\">\n    <div class=\"result-info set-boder-bottom\" *ngIf=\"result.audioFile\">\n        <div class=\"solid-header\">Question</div>\n        <div class=\"light-header\">\n            <audio-player [isControl]=\"true\" [audioLink]=\"result.audioFile\" [isAutoPlay]=\"false\"></audio-player>\n        </div>\n    </div>\n\n    <div class=\"result-info set-boder-bottom\" *ngIf=\"result.question\">\n        <div class=\"solid-header\">Question</div>\n        <div class=\"light-header\">\n            {{result.question}}\n        </div>\n    </div>\n\n    <div class=\"result-info set-boder-bottom\" *ngIf=\"result.imageFile\">\n        <div class=\"solid-header\">Question</div>\n        <div class=\"d-flex justify-content-center imag-box\">\n            <div class=\"img-wrapper\">\n                <img src=\"{{result.imageFile}}\" (load)=\"onImgLoad()\" [hidden]=\"isImgLoad\">\n                <div [hidden]=\"!isImgLoad\" class=\"img-loading\">\n                    <div class=\"loader mb-3\"></div>\n                    Image Loading.....\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"result-info set-boder-bottom\">\n        <div class=\"solid-header\">Spoken Audio</div>\n        <div class=\"light-header\">\n            <div class=\"d-flex justify-content-center\">\n                <audio controls>\n                    <source [src]=\"result.file\" type=\"audio/webm\">\n                </audio>\n            </div>\n        </div>\n    </div>\n</ng-container>\n<ng-template #showEvaluate>\n    <div class=\"d-flex justify-content-between\" *ngIf=\"result.evaluatedResults\">\n        <div class=\"d-flex mb-2\">\n            <label-text class=\"set-width\">Completion\n                Date\n            </label-text>\n            <label class=\"text-d200 medium-bold h4-m pl-2\">: {{\n                result.completionDate | defaultDate\n                }}</label>\n        </div>\n        <div class=\"d-flex mb-2\">\n            <label-text class=\"set-width\">\n                Email</label-text>\n            <label class=\"text-d200 medium-bold h4-m pl-2\">:{{\n                result.email\n                }}</label>\n        </div>\n        <div class=\"d-flex mb-2\">\n            <label-text class=\"set-width\">\n                Overall Oral Fluency</label-text>\n            <label class=\"text-d200 medium-bold h4-m pl-2\">:{{\n                result.overallOralFluency\n                }}</label>\n        </div>\n        <div class=\"d-flex mb-2\">\n            <label-text class=\"set-width\">\n                Overall Pronunciation</label-text>\n            <label class=\"text-d200 medium-bold h4-m pl-2\">:{{\n                result.overallPronunciation\n                }}</label>\n        </div>\n        <div\n            class=\"d-flex flex-column justify-content-center align-items-center score-box bg-b100 box-shadow-b75 b-radius\">\n            <!-- <p class=\"text-d50 h3-l medium-bold\">Overall Score</p> -->\n            <p class=\"text-d50 h2-xl mb-0 demi-bold\">\n                {{ result?.overAllScore }}\n            </p>\n        </div>\n    </div>\n    <p class=\"result-title\">Result</p>\n    <ng-container *ngFor=\"let score of scorelists; let i=index\">\n        <p class=\"body-l bg-b100 demi-bold my-3 text-0 pl-1\" *ngIf=\"result.evaluatedResults\">Question {{i+1}}</p>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"score-cirle\">\n                    {{ score?.overAllScore }}\n                </div>\n                <p class=\"lbl-text\">Overall Score</p>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"score-fill-cirle\">\n                    {{ score?.pronunciation }}\n                </div>\n                <p class=\"lbl-text\">Pronunciation</p>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"score-fill-cirle\">\n                    {{ score?.oralFluency }}\n                </div>\n                <p class=\"lbl-text\">Oral Fluency</p>\n            </div>\n        </div>\n        <div class=\"result-role set-boder-bottom\" *ngIf=\"score.confidence\">\n            <div class=\"solid-header\">Confidence Meter</div>\n            <div class=\"light-header\">\n                <!-- <ngb-progressbar [showValue]=\"true\" type=\"success\" [value]=\"score.confidence\"></ngb-progressbar> -->\n                <div class=\"arrow_box\" [ngStyle]=\"{'left': score.confidence+'%'}\"></div>\n                <div class=\"d-flex flex-row progress-bar\">\n                    <div class=\"step1\">\n                    </div>\n                    <div class=\"step2\">\n                    </div>\n                    <div class=\"step3\">\n                    </div>\n                    <div class=\"step4\">\n                    </div>\n                    <div class=\"step5\">\n                    </div>\n                    <div class=\"step6\">\n                    </div>\n                    <div class=\"step7\">\n                    </div>\n                    <div class=\"step8\">\n                    </div>\n\n                </div>\n            </div>\n        </div>\n        <div class=\"result-info set-boder-bottom\" *ngIf=\"score.audioFile\">\n            <div class=\"solid-header\">Question</div>\n            <div class=\"light-header\">\n                <audio-player [isControl]=\"true\" [audioLink]=\"score.audioFile\" [isAutoPlay]=\"false\"></audio-player>\n            </div>\n        </div>\n\n        <div class=\"result-info set-boder-bottom\" *ngIf=\"score.imageFile\">\n            <div class=\"solid-header\">Question</div>\n            <div class=\"d-flex justify-content-center imag-box\">\n                <div class=\"img-wrapper\">\n                    <img src=\"{{score.imageFile}}\" (load)=\"onImgLoad()\" [hidden]=\"isImgLoad\">\n                    <div [hidden]=\"!isImgLoad\" class=\"img-loading\">\n                        <div class=\"loader mb-3\"></div>\n                        Image Loading.....\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"result-info set-boder-bottom\">\n            <div class=\"solid-header\">Spoken Audio</div>\n            <div class=\"light-header\">\n                <audio-player [isControl]=\"true\" [audioLink]=\"score.userSpeechFile\" [isAutoPlay]=\"false\"></audio-player>\n            </div>\n        </div>\n\n        <div class=\"result-info\">\n            <div class=\"solid-header\">User Speech</div>\n            <div class=\"light-header\">\n                <p class=\"mb-0\" id=\"spoken-text{{i}}\"></p>\n\n                <div class=\"show-grade\">\n                    <div class=\"error\"></div>\n                    <p class=\"error-text\">Bad</p>\n\n                    <div class=\"good\"></div>\n                    <p class=\"good-text\">Good</p>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"comment-header\"> Comment </div>\n        <div class=\"comment-text\">\n            {{score.comment ? score.comment : \"-\"}} </div>\n    </ng-container>\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/question-components/summary-question/summary-question.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/question-components/summary-question/summary-question.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedQuestionComponentsSummaryQuestionSummaryQuestionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"isLoading==false\">\n  <form [formGroup]=\"evaluationForm\" >\n    <div class=\"divider\"></div>\n    <div class=\"row\">\n      <div class=\"col-md-12 mb-2 summaryName\">\n        <label>\n          {{ summaryDetail.summaryName }}</label>\n      </div>\n      <div class=\"col-md-12\">\n        <div id=\"summary-question\"></div>\n      </div>\n      <div class=\"col-md-12\">\n        <label-text>Select Convention</label-text>\n        <select class=\"select-box form-control\" formControlName=\"version\"\n          [ngClass]=\"{ 'is-invalid': submitted && f.version.errors }\">\n          <option *ngFor=\"let ver of versionList\" [ngValue]=\"ver\">{{ ver }}\n          </option>\n        </select>\n      </div>\n      <div class=\"col-md-12\">\n        <label-text>Summary</label-text>\n        <word-count-text>\n          (Total Word Count:<div class=\"word-count\">{{\n            evaluationForm.value.summary.trim() ? countWord(evaluationForm.value.summary) : '0'\n            }}</div>\n          )</word-count-text>\n        <textarea class=\"form-control input-rectangle reverse;\" cols=\"30\" rows=\"4\" [ngClass]=\"{\n                'is-invalid': submitted && f.summary.errors\n              }\" formControlName=\"summary\" placeholder=\"Write summary\" oncopy=\"return false\"\n          onpaste=\"return false\"></textarea>\n      </div>\n    </div>\n  \n  \n    <div class=\"footer-button-block\" *ngIf=\"!isNext\">\n      <cancel-btn>Cancel</cancel-btn>\n      <submit-btn (onClick)=\"onSubmit()\">Confirm</submit-btn>\n    </div>\n    <div class=\"footer-button-block\" *ngIf=\"isNext\">\n      <submit-btn (onClick)=\"onSubmit()\">Confirm</submit-btn>\n    </div>\n  </form>\n</ng-container>\n\n<div *ngIf=\"isLoading\"></div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/question-components/summary-score/summary-score.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/question-components/summary-score/summary-score.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedQuestionComponentsSummaryScoreSummaryScoreComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex justify-content-between\">\n  <div>\n    <div class=\"d-flex mb-2\">\n      <label-text class=\"set-width\">Question Name</label-text>\n      <label class=\"user-info-text\">: {{\n        scoreData.questionName\n        }}</label>\n    </div>\n    <div class=\"d-flex mb-2\">\n      <label-text class=\"set-width\">Completion Date</label-text>\n      <label class=\"user-info-text\">: {{\n        scoreData.completeDate | defaultDate\n        }}</label>\n    </div>\n    <div class=\"d-flex mb-2\">\n      <label-text class=\"set-width\">\n        Email</label-text>\n      <label class=\"user-info-text\">: {{\n        scoreData.email\n        }}</label>\n    </div>\n  </div>\n  <div class=\"score-box\">\n    <p>\n      {{ scoreData.overallScore }}\n    </p>\n  </div>\n</div>\n<p class=\"your-answer-title\">Your Answer</p>\n<p class=\"question-text\" id=\"summary{{scoreData.summaryId}}\"></p>\n<div class=\"table-wrapper\">\n  <table role=\"table\" class=\"table-score-responsive\">\n    <thead role=\"rowgroup\">\n      <tr role=\"row\">\n        <th role=\"columnheader\">Skill Area</th>\n        <th role=\"columnheader\" style=\"width: 70%;\">Traits Scored</th>\n        <th role=\"columnheader\">Your Score</th>\n      </tr>\n    </thead>\n    <tbody role=\"rowgroup\">\n      <ng-container *ngFor=\"let skill of scoreData?.skillAreas\">\n        <tr role=\"row\">\n          <td role=\"cell\" class=\"text-center\"> {{ skill.name }}</td>\n          <td role=\"cell\">\n              <ol reversed start = '{{skill.ratingScore.length-1}}'>\n                <li *ngFor=\"let rate of skill.ratingScore\">\n                  {{ rate }}\n                </li>\n              </ol>\n         \n          </td>\n          <td role=\"cell\" class=\"text-center\">\n            {{ skill.userScore }}\n          </td>\n        </tr>\n      </ng-container>\n      <tr role=\"row\" class=\"dark-role\">\n        <td role=\"cell\" colspan=\"2\">\n          <span>MAXIMUM SCORE</span><br>\n          <span>{{ scoreData.maxScore }}</span>\n        </td>\n        <td role=\"cell\" colspan=\"1\">\n          <span>YOUR SCORE</span><br>\n          <span>{{ scoreData.userTotalScore }}</span>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n\n\n<div class=\"feedback-title\">\n  Feedback\n</div>\n<div class=\"feedback-text\">\n  {{ scoreData.comment }}\n</div>\n\n<div class=\"table-wrapper\">\n  <table role=\"table\" class=\"table-score-responsive\">\n    <thead role=\"rowgroup\">\n      <tr role=\"row\">\n        <th role=\"columnheader\" style=\"width: 50%;\">Mistakes</th>\n        <th role=\"columnheader\" style=\"width: 50%;\">Suggestion</th>\n      </tr>\n    </thead>\n    <tbody role=\"rowgroup\">\n      <ng-container *ngFor=\"let words of scoreData?.suggestionWords\">\n        <tr role=\"row\">\n          <td role=\"cell\">\n            <p>\n              {{ words.writtenWord }}\n            </p>\n          </td>\n          <td role=\"cell\">\n            <p *ngFor=\"let suggest of words.suggestWords\">\n              {{ suggest }}\n            </p>\n          </td>\n  \n        </tr>\n      </ng-container>\n    </tbody>\n  </table>\n</div>\n\n\n<div class=\"advise-title\" *ngIf=\"scoreData.adviseContent\">\n  Sample Answer for 90\n</div>\n<div class=\"advise-text\" id=\"essay-content{{scoreData.summaryId}}\"></div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/question-components/user-info/user-info.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/question-components/user-info/user-info.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedQuestionComponentsUserInfoUserInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-md-10\">\n        <div class=\"d-flex mb-2\">\n            <label-text class=\"set-width\">\n                <div>Class Name</div>\n            </label-text>\n            <label class=\"lbl-text\">: {{\n                info.name\n                }}</label>\n        </div>\n        <div class=\"d-flex mb-2\">\n            <label-text class=\"set-width\">\n                <div>Completion Date</div>\n            </label-text>\n            <label class=\"lbl-text\">: {{\n                info.completionDate | defaultDate\n                }}</label>\n        </div>\n        <div class=\"d-flex mb-2\">\n            <label-text class=\"set-width\">\n                <div>Email</div>\n            </label-text>\n            <label class=\"lbl-text\">: {{\n                info.email\n                }}</label>\n        </div>\n    </div>\n    <div class=\"col-md-2\">\n        <div class=\" score-box\">\n            <p>\n                {{ info?.overallScore }}\n            </p>\n        </div>\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/sortablejs/modular/sortable.esm.js":
  /*!*********************************************************!*\
    !*** ./node_modules/sortablejs/modular/sortable.esm.js ***!
    \*********************************************************/

  /*! exports provided: default, MultiDrag, Sortable, Swap */

  /***/
  function node_modulesSortablejsModularSortableEsmJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MultiDrag", function () {
      return MultiDragPlugin;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Sortable", function () {
      return Sortable;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Swap", function () {
      return SwapPlugin;
    });
    /**!
     * Sortable 1.10.2
     * @author	RubaXa   <trash@rubaxa.org>
     * @author	owenm    <owen23355@gmail.com>
     * @license MIT
     */


    function _typeof(obj) {
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof(obj) {
          return typeof obj;
        };
      } else {
        _typeof = function _typeof(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
      }

      return _typeof(obj);
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    function _extends() {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends.apply(this, arguments);
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);

        if (typeof Object.getOwnPropertySymbols === 'function') {
          ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
          }));
        }

        ownKeys.forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      }

      return target;
    }

    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null) return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;

      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
      }

      return target;
    }

    function _objectWithoutProperties(source, excluded) {
      if (source == null) return {};

      var target = _objectWithoutPropertiesLoose(source, excluded);

      var key, i;

      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
          target[key] = source[key];
        }
      }

      return target;
    }

    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }

    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

        return arr2;
      }
    }

    function _iterableToArray(iter) {
      if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
    }

    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }

    var version = "1.10.2";

    function userAgent(pattern) {
      if (typeof window !== 'undefined' && window.navigator) {
        return !! /*@__PURE__*/navigator.userAgent.match(pattern);
      }
    }

    var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
    var Edge = userAgent(/Edge/i);
    var FireFox = userAgent(/firefox/i);
    var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
    var IOS = userAgent(/iP(ad|od|hone)/i);
    var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);
    var captureMode = {
      capture: false,
      passive: false
    };

    function on(el, event, fn) {
      el.addEventListener(event, fn, !IE11OrLess && captureMode);
    }

    function off(el, event, fn) {
      el.removeEventListener(event, fn, !IE11OrLess && captureMode);
    }

    function matches(
    /**HTMLElement*/
    el,
    /**String*/
    selector) {
      if (!selector) return;
      selector[0] === '>' && (selector = selector.substring(1));

      if (el) {
        try {
          if (el.matches) {
            return el.matches(selector);
          } else if (el.msMatchesSelector) {
            return el.msMatchesSelector(selector);
          } else if (el.webkitMatchesSelector) {
            return el.webkitMatchesSelector(selector);
          }
        } catch (_) {
          return false;
        }
      }

      return false;
    }

    function getParentOrHost(el) {
      return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
    }

    function closest(
    /**HTMLElement*/
    el,
    /**String*/
    selector,
    /**HTMLElement*/
    ctx, includeCTX) {
      if (el) {
        ctx = ctx || document;

        do {
          if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
            return el;
          }

          if (el === ctx) break;
          /* jshint boss:true */
        } while (el = getParentOrHost(el));
      }

      return null;
    }

    var R_SPACE = /\s+/g;

    function toggleClass(el, name, state) {
      if (el && name) {
        if (el.classList) {
          el.classList[state ? 'add' : 'remove'](name);
        } else {
          var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
          el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
        }
      }
    }

    function css(el, prop, val) {
      var style = el && el.style;

      if (style) {
        if (val === void 0) {
          if (document.defaultView && document.defaultView.getComputedStyle) {
            val = document.defaultView.getComputedStyle(el, '');
          } else if (el.currentStyle) {
            val = el.currentStyle;
          }

          return prop === void 0 ? val : val[prop];
        } else {
          if (!(prop in style) && prop.indexOf('webkit') === -1) {
            prop = '-webkit-' + prop;
          }

          style[prop] = val + (typeof val === 'string' ? '' : 'px');
        }
      }
    }

    function matrix(el, selfOnly) {
      var appliedTransforms = '';

      if (typeof el === 'string') {
        appliedTransforms = el;
      } else {
        do {
          var transform = css(el, 'transform');

          if (transform && transform !== 'none') {
            appliedTransforms = transform + ' ' + appliedTransforms;
          }
          /* jshint boss:true */

        } while (!selfOnly && (el = el.parentNode));
      }

      var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
      /*jshint -W056 */

      return matrixFn && new matrixFn(appliedTransforms);
    }

    function find(ctx, tagName, iterator) {
      if (ctx) {
        var list = ctx.getElementsByTagName(tagName),
            i = 0,
            n = list.length;

        if (iterator) {
          for (; i < n; i++) {
            iterator(list[i], i);
          }
        }

        return list;
      }

      return [];
    }

    function getWindowScrollingElement() {
      var scrollingElement = document.scrollingElement;

      if (scrollingElement) {
        return scrollingElement;
      } else {
        return document.documentElement;
      }
    }
    /**
     * Returns the "bounding client rect" of given element
     * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
     * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
     * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
     * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
     * @param  {[HTMLElement]} container              The parent the element will be placed in
     * @return {Object}                               The boundingClientRect of el, with specified adjustments
     */


    function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
      if (!el.getBoundingClientRect && el !== window) return;
      var elRect, top, left, bottom, right, height, width;

      if (el !== window && el !== getWindowScrollingElement()) {
        elRect = el.getBoundingClientRect();
        top = elRect.top;
        left = elRect.left;
        bottom = elRect.bottom;
        right = elRect.right;
        height = elRect.height;
        width = elRect.width;
      } else {
        top = 0;
        left = 0;
        bottom = window.innerHeight;
        right = window.innerWidth;
        height = window.innerHeight;
        width = window.innerWidth;
      }

      if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
        // Adjust for translate()
        container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
        // Not needed on <= IE11

        if (!IE11OrLess) {
          do {
            if (container && container.getBoundingClientRect && (css(container, 'transform') !== 'none' || relativeToNonStaticParent && css(container, 'position') !== 'static')) {
              var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container

              top -= containerRect.top + parseInt(css(container, 'border-top-width'));
              left -= containerRect.left + parseInt(css(container, 'border-left-width'));
              bottom = top + elRect.height;
              right = left + elRect.width;
              break;
            }
            /* jshint boss:true */

          } while (container = container.parentNode);
        }
      }

      if (undoScale && el !== window) {
        // Adjust for scale()
        var elMatrix = matrix(container || el),
            scaleX = elMatrix && elMatrix.a,
            scaleY = elMatrix && elMatrix.d;

        if (elMatrix) {
          top /= scaleY;
          left /= scaleX;
          width /= scaleX;
          height /= scaleY;
          bottom = top + height;
          right = left + width;
        }
      }

      return {
        top: top,
        left: left,
        bottom: bottom,
        right: right,
        width: width,
        height: height
      };
    }
    /**
     * Checks if a side of an element is scrolled past a side of its parents
     * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
     * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
     * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
     * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
     */


    function isScrolledPast(el, elSide, parentSide) {
      var parent = getParentAutoScrollElement(el, true),
          elSideVal = getRect(el)[elSide];
      /* jshint boss:true */

      while (parent) {
        var parentSideVal = getRect(parent)[parentSide],
            visible = void 0;

        if (parentSide === 'top' || parentSide === 'left') {
          visible = elSideVal >= parentSideVal;
        } else {
          visible = elSideVal <= parentSideVal;
        }

        if (!visible) return parent;
        if (parent === getWindowScrollingElement()) break;
        parent = getParentAutoScrollElement(parent, false);
      }

      return false;
    }
    /**
     * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
     * and non-draggable elements
     * @param  {HTMLElement} el       The parent element
     * @param  {Number} childNum      The index of the child
     * @param  {Object} options       Parent Sortable's options
     * @return {HTMLElement}          The child at index childNum, or null if not found
     */


    function getChild(el, childNum, options) {
      var currentChild = 0,
          i = 0,
          children = el.children;

      while (i < children.length) {
        if (children[i].style.display !== 'none' && children[i] !== Sortable.ghost && children[i] !== Sortable.dragged && closest(children[i], options.draggable, el, false)) {
          if (currentChild === childNum) {
            return children[i];
          }

          currentChild++;
        }

        i++;
      }

      return null;
    }
    /**
     * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
     * @param  {HTMLElement} el       Parent element
     * @param  {selector} selector    Any other elements that should be ignored
     * @return {HTMLElement}          The last child, ignoring ghostEl
     */


    function lastChild(el, selector) {
      var last = el.lastElementChild;

      while (last && (last === Sortable.ghost || css(last, 'display') === 'none' || selector && !matches(last, selector))) {
        last = last.previousElementSibling;
      }

      return last || null;
    }
    /**
     * Returns the index of an element within its parent for a selected set of
     * elements
     * @param  {HTMLElement} el
     * @param  {selector} selector
     * @return {number}
     */


    function index(el, selector) {
      var index = 0;

      if (!el || !el.parentNode) {
        return -1;
      }
      /* jshint boss:true */


      while (el = el.previousElementSibling) {
        if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== Sortable.clone && (!selector || matches(el, selector))) {
          index++;
        }
      }

      return index;
    }
    /**
     * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
     * The value is returned in real pixels.
     * @param  {HTMLElement} el
     * @return {Array}             Offsets in the format of [left, top]
     */


    function getRelativeScrollOffset(el) {
      var offsetLeft = 0,
          offsetTop = 0,
          winScroller = getWindowScrollingElement();

      if (el) {
        do {
          var elMatrix = matrix(el),
              scaleX = elMatrix.a,
              scaleY = elMatrix.d;
          offsetLeft += el.scrollLeft * scaleX;
          offsetTop += el.scrollTop * scaleY;
        } while (el !== winScroller && (el = el.parentNode));
      }

      return [offsetLeft, offsetTop];
    }
    /**
     * Returns the index of the object within the given array
     * @param  {Array} arr   Array that may or may not hold the object
     * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
     * @return {Number}      The index of the object in the array, or -1
     */


    function indexOfObject(arr, obj) {
      for (var i in arr) {
        if (!arr.hasOwnProperty(i)) continue;

        for (var key in obj) {
          if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
        }
      }

      return -1;
    }

    function getParentAutoScrollElement(el, includeSelf) {
      // skip to window
      if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
      var elem = el;
      var gotSelf = false;

      do {
        // we don't need to get elem css if it isn't even overflowing in the first place (performance)
        if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
          var elemCSS = css(elem);

          if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
            if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
            if (gotSelf || includeSelf) return elem;
            gotSelf = true;
          }
        }
        /* jshint boss:true */

      } while (elem = elem.parentNode);

      return getWindowScrollingElement();
    }

    function extend(dst, src) {
      if (dst && src) {
        for (var key in src) {
          if (src.hasOwnProperty(key)) {
            dst[key] = src[key];
          }
        }
      }

      return dst;
    }

    function isRectEqual(rect1, rect2) {
      return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
    }

    var _throttleTimeout;

    function throttle(callback, ms) {
      return function () {
        if (!_throttleTimeout) {
          var args = arguments,
              _this = this;

          if (args.length === 1) {
            callback.call(_this, args[0]);
          } else {
            callback.apply(_this, args);
          }

          _throttleTimeout = setTimeout(function () {
            _throttleTimeout = void 0;
          }, ms);
        }
      };
    }

    function cancelThrottle() {
      clearTimeout(_throttleTimeout);
      _throttleTimeout = void 0;
    }

    function scrollBy(el, x, y) {
      el.scrollLeft += x;
      el.scrollTop += y;
    }

    function clone(el) {
      var Polymer = window.Polymer;
      var $ = window.jQuery || window.Zepto;

      if (Polymer && Polymer.dom) {
        return Polymer.dom(el).cloneNode(true);
      } else if ($) {
        return $(el).clone(true)[0];
      } else {
        return el.cloneNode(true);
      }
    }

    function setRect(el, rect) {
      css(el, 'position', 'absolute');
      css(el, 'top', rect.top);
      css(el, 'left', rect.left);
      css(el, 'width', rect.width);
      css(el, 'height', rect.height);
    }

    function unsetRect(el) {
      css(el, 'position', '');
      css(el, 'top', '');
      css(el, 'left', '');
      css(el, 'width', '');
      css(el, 'height', '');
    }

    var expando = 'Sortable' + new Date().getTime();

    function AnimationStateManager() {
      var animationStates = [],
          animationCallbackId;
      return {
        captureAnimationState: function captureAnimationState() {
          animationStates = [];
          if (!this.options.animation) return;
          var children = [].slice.call(this.el.children);
          children.forEach(function (child) {
            if (css(child, 'display') === 'none' || child === Sortable.ghost) return;
            animationStates.push({
              target: child,
              rect: getRect(child)
            });

            var fromRect = _objectSpread({}, animationStates[animationStates.length - 1].rect); // If animating: compensate for current animation


            if (child.thisAnimationDuration) {
              var childMatrix = matrix(child, true);

              if (childMatrix) {
                fromRect.top -= childMatrix.f;
                fromRect.left -= childMatrix.e;
              }
            }

            child.fromRect = fromRect;
          });
        },
        addAnimationState: function addAnimationState(state) {
          animationStates.push(state);
        },
        removeAnimationState: function removeAnimationState(target) {
          animationStates.splice(indexOfObject(animationStates, {
            target: target
          }), 1);
        },
        animateAll: function animateAll(callback) {
          var _this = this;

          if (!this.options.animation) {
            clearTimeout(animationCallbackId);
            if (typeof callback === 'function') callback();
            return;
          }

          var animating = false,
              animationTime = 0;
          animationStates.forEach(function (state) {
            var time = 0,
                target = state.target,
                fromRect = target.fromRect,
                toRect = getRect(target),
                prevFromRect = target.prevFromRect,
                prevToRect = target.prevToRect,
                animatingRect = state.rect,
                targetMatrix = matrix(target, true);

            if (targetMatrix) {
              // Compensate for current animation
              toRect.top -= targetMatrix.f;
              toRect.left -= targetMatrix.e;
            }

            target.toRect = toRect;

            if (target.thisAnimationDuration) {
              // Could also check if animatingRect is between fromRect and toRect
              if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
              (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
                // If returning to same place as started from animation and on same axis
                time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
              }
            } // if fromRect != toRect: animate


            if (!isRectEqual(toRect, fromRect)) {
              target.prevFromRect = fromRect;
              target.prevToRect = toRect;

              if (!time) {
                time = _this.options.animation;
              }

              _this.animate(target, animatingRect, toRect, time);
            }

            if (time) {
              animating = true;
              animationTime = Math.max(animationTime, time);
              clearTimeout(target.animationResetTimer);
              target.animationResetTimer = setTimeout(function () {
                target.animationTime = 0;
                target.prevFromRect = null;
                target.fromRect = null;
                target.prevToRect = null;
                target.thisAnimationDuration = null;
              }, time);
              target.thisAnimationDuration = time;
            }
          });
          clearTimeout(animationCallbackId);

          if (!animating) {
            if (typeof callback === 'function') callback();
          } else {
            animationCallbackId = setTimeout(function () {
              if (typeof callback === 'function') callback();
            }, animationTime);
          }

          animationStates = [];
        },
        animate: function animate(target, currentRect, toRect, duration) {
          if (duration) {
            css(target, 'transition', '');
            css(target, 'transform', '');
            var elMatrix = matrix(this.el),
                scaleX = elMatrix && elMatrix.a,
                scaleY = elMatrix && elMatrix.d,
                translateX = (currentRect.left - toRect.left) / (scaleX || 1),
                translateY = (currentRect.top - toRect.top) / (scaleY || 1);
            target.animatingX = !!translateX;
            target.animatingY = !!translateY;
            css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
            repaint(target); // repaint

            css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
            css(target, 'transform', 'translate3d(0,0,0)');
            typeof target.animated === 'number' && clearTimeout(target.animated);
            target.animated = setTimeout(function () {
              css(target, 'transition', '');
              css(target, 'transform', '');
              target.animated = false;
              target.animatingX = false;
              target.animatingY = false;
            }, duration);
          }
        }
      };
    }

    function repaint(target) {
      return target.offsetWidth;
    }

    function calculateRealTime(animatingRect, fromRect, toRect, options) {
      return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
    }

    var plugins = [];
    var defaults = {
      initializeByDefault: true
    };
    var PluginManager = {
      mount: function mount(plugin) {
        // Set default static properties
        for (var option in defaults) {
          if (defaults.hasOwnProperty(option) && !(option in plugin)) {
            plugin[option] = defaults[option];
          }
        }

        plugins.push(plugin);
      },
      pluginEvent: function pluginEvent(eventName, sortable, evt) {
        var _this = this;

        this.eventCanceled = false;

        evt.cancel = function () {
          _this.eventCanceled = true;
        };

        var eventNameGlobal = eventName + 'Global';
        plugins.forEach(function (plugin) {
          if (!sortable[plugin.pluginName]) return; // Fire global events if it exists in this sortable

          if (sortable[plugin.pluginName][eventNameGlobal]) {
            sortable[plugin.pluginName][eventNameGlobal](_objectSpread({
              sortable: sortable
            }, evt));
          } // Only fire plugin event if plugin is enabled in this sortable,
          // and plugin has event defined


          if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
            sortable[plugin.pluginName][eventName](_objectSpread({
              sortable: sortable
            }, evt));
          }
        });
      },
      initializePlugins: function initializePlugins(sortable, el, defaults, options) {
        plugins.forEach(function (plugin) {
          var pluginName = plugin.pluginName;
          if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
          var initialized = new plugin(sortable, el, sortable.options);
          initialized.sortable = sortable;
          initialized.options = sortable.options;
          sortable[pluginName] = initialized; // Add default options from plugin

          _extends(defaults, initialized.defaults);
        });

        for (var option in sortable.options) {
          if (!sortable.options.hasOwnProperty(option)) continue;
          var modified = this.modifyOption(sortable, option, sortable.options[option]);

          if (typeof modified !== 'undefined') {
            sortable.options[option] = modified;
          }
        }
      },
      getEventProperties: function getEventProperties(name, sortable) {
        var eventProperties = {};
        plugins.forEach(function (plugin) {
          if (typeof plugin.eventProperties !== 'function') return;

          _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
        });
        return eventProperties;
      },
      modifyOption: function modifyOption(sortable, name, value) {
        var modifiedValue;
        plugins.forEach(function (plugin) {
          // Plugin must exist on the Sortable
          if (!sortable[plugin.pluginName]) return; // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin

          if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') {
            modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
          }
        });
        return modifiedValue;
      }
    };

    function dispatchEvent(_ref) {
      var sortable = _ref.sortable,
          rootEl = _ref.rootEl,
          name = _ref.name,
          targetEl = _ref.targetEl,
          cloneEl = _ref.cloneEl,
          toEl = _ref.toEl,
          fromEl = _ref.fromEl,
          oldIndex = _ref.oldIndex,
          newIndex = _ref.newIndex,
          oldDraggableIndex = _ref.oldDraggableIndex,
          newDraggableIndex = _ref.newDraggableIndex,
          originalEvent = _ref.originalEvent,
          putSortable = _ref.putSortable,
          extraEventProperties = _ref.extraEventProperties;
      sortable = sortable || rootEl && rootEl[expando];
      if (!sortable) return;
      var evt,
          options = sortable.options,
          onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature

      if (window.CustomEvent && !IE11OrLess && !Edge) {
        evt = new CustomEvent(name, {
          bubbles: true,
          cancelable: true
        });
      } else {
        evt = document.createEvent('Event');
        evt.initEvent(name, true, true);
      }

      evt.to = toEl || rootEl;
      evt.from = fromEl || rootEl;
      evt.item = targetEl || rootEl;
      evt.clone = cloneEl;
      evt.oldIndex = oldIndex;
      evt.newIndex = newIndex;
      evt.oldDraggableIndex = oldDraggableIndex;
      evt.newDraggableIndex = newDraggableIndex;
      evt.originalEvent = originalEvent;
      evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;

      var allEventProperties = _objectSpread({}, extraEventProperties, PluginManager.getEventProperties(name, sortable));

      for (var option in allEventProperties) {
        evt[option] = allEventProperties[option];
      }

      if (rootEl) {
        rootEl.dispatchEvent(evt);
      }

      if (options[onName]) {
        options[onName].call(sortable, evt);
      }
    }

    var pluginEvent = function pluginEvent(eventName, sortable) {
      var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          originalEvent = _ref.evt,
          data = _objectWithoutProperties(_ref, ["evt"]);

      PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread({
        dragEl: dragEl,
        parentEl: parentEl,
        ghostEl: ghostEl,
        rootEl: rootEl,
        nextEl: nextEl,
        lastDownEl: lastDownEl,
        cloneEl: cloneEl,
        cloneHidden: cloneHidden,
        dragStarted: moved,
        putSortable: putSortable,
        activeSortable: Sortable.active,
        originalEvent: originalEvent,
        oldIndex: oldIndex,
        oldDraggableIndex: oldDraggableIndex,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex,
        hideGhostForTarget: _hideGhostForTarget,
        unhideGhostForTarget: _unhideGhostForTarget,
        cloneNowHidden: function cloneNowHidden() {
          cloneHidden = true;
        },
        cloneNowShown: function cloneNowShown() {
          cloneHidden = false;
        },
        dispatchSortableEvent: function dispatchSortableEvent(name) {
          _dispatchEvent({
            sortable: sortable,
            name: name,
            originalEvent: originalEvent
          });
        }
      }, data));
    };

    function _dispatchEvent(info) {
      dispatchEvent(_objectSpread({
        putSortable: putSortable,
        cloneEl: cloneEl,
        targetEl: dragEl,
        rootEl: rootEl,
        oldIndex: oldIndex,
        oldDraggableIndex: oldDraggableIndex,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex
      }, info));
    }

    var dragEl,
        parentEl,
        ghostEl,
        rootEl,
        nextEl,
        lastDownEl,
        cloneEl,
        cloneHidden,
        oldIndex,
        newIndex,
        oldDraggableIndex,
        newDraggableIndex,
        activeGroup,
        putSortable,
        awaitingDragStarted = false,
        ignoreNextClick = false,
        sortables = [],
        tapEvt,
        touchEvt,
        lastDx,
        lastDy,
        tapDistanceLeft,
        tapDistanceTop,
        moved,
        lastTarget,
        lastDirection,
        pastFirstInvertThresh = false,
        isCircumstantialInvert = false,
        targetMoveDistance,
        // For positioning ghost absolutely
    ghostRelativeParent,
        ghostRelativeParentInitialScroll = [],
        // (left, top)
    _silent = false,
        savedInputChecked = [];
    /** @const */

    var documentExists = typeof document !== 'undefined',
        PositionGhostAbsolutely = IOS,
        CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',
        // This will not pass for IE9, because IE9 DnD only works on anchors
    supportDraggable = documentExists && !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div'),
        supportCssPointerEvents = function () {
      if (!documentExists) return; // false when <= IE11

      if (IE11OrLess) {
        return false;
      }

      var el = document.createElement('x');
      el.style.cssText = 'pointer-events:auto';
      return el.style.pointerEvents === 'auto';
    }(),
        _detectDirection = function _detectDirection(el, options) {
      var elCSS = css(el),
          elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),
          child1 = getChild(el, 0, options),
          child2 = getChild(el, 1, options),
          firstChildCSS = child1 && css(child1),
          secondChildCSS = child2 && css(child2),
          firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width,
          secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;

      if (elCSS.display === 'flex') {
        return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
      }

      if (elCSS.display === 'grid') {
        return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
      }

      if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== 'none') {
        var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
        return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
      }

      return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
    },
        _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
      var dragElS1Opp = vertical ? dragRect.left : dragRect.top,
          dragElS2Opp = vertical ? dragRect.right : dragRect.bottom,
          dragElOppLength = vertical ? dragRect.width : dragRect.height,
          targetS1Opp = vertical ? targetRect.left : targetRect.top,
          targetS2Opp = vertical ? targetRect.right : targetRect.bottom,
          targetOppLength = vertical ? targetRect.width : targetRect.height;
      return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
    },

    /**
     * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
     * @param  {Number} x      X position
     * @param  {Number} y      Y position
     * @return {HTMLElement}   Element of the first found nearest Sortable
     */
    _detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
      var ret;
      sortables.some(function (sortable) {
        if (lastChild(sortable)) return;
        var rect = getRect(sortable),
            threshold = sortable[expando].options.emptyInsertThreshold,
            insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,
            insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;

        if (threshold && insideHorizontally && insideVertically) {
          return ret = sortable;
        }
      });
      return ret;
    },
        _prepareGroup = function _prepareGroup(options) {
      function toFn(value, pull) {
        return function (to, from, dragEl, evt) {
          var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;

          if (value == null && (pull || sameGroup)) {
            // Default pull value
            // Default pull and put value if same group
            return true;
          } else if (value == null || value === false) {
            return false;
          } else if (pull && value === 'clone') {
            return value;
          } else if (typeof value === 'function') {
            return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
          } else {
            var otherGroup = (pull ? to : from).options.group.name;
            return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
          }
        };
      }

      var group = {};
      var originalGroup = options.group;

      if (!originalGroup || _typeof(originalGroup) != 'object') {
        originalGroup = {
          name: originalGroup
        };
      }

      group.name = originalGroup.name;
      group.checkPull = toFn(originalGroup.pull, true);
      group.checkPut = toFn(originalGroup.put);
      group.revertClone = originalGroup.revertClone;
      options.group = group;
    },
        _hideGhostForTarget = function _hideGhostForTarget() {
      if (!supportCssPointerEvents && ghostEl) {
        css(ghostEl, 'display', 'none');
      }
    },
        _unhideGhostForTarget = function _unhideGhostForTarget() {
      if (!supportCssPointerEvents && ghostEl) {
        css(ghostEl, 'display', '');
      }
    }; // #1184 fix - Prevent click event on fallback if dragged but item not changed position


    if (documentExists) {
      document.addEventListener('click', function (evt) {
        if (ignoreNextClick) {
          evt.preventDefault();
          evt.stopPropagation && evt.stopPropagation();
          evt.stopImmediatePropagation && evt.stopImmediatePropagation();
          ignoreNextClick = false;
          return false;
        }
      }, true);
    }

    var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
      if (dragEl) {
        evt = evt.touches ? evt.touches[0] : evt;

        var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);

        if (nearest) {
          // Create imitation event
          var event = {};

          for (var i in evt) {
            if (evt.hasOwnProperty(i)) {
              event[i] = evt[i];
            }
          }

          event.target = event.rootEl = nearest;
          event.preventDefault = void 0;
          event.stopPropagation = void 0;

          nearest[expando]._onDragOver(event);
        }
      }
    };

    var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
      if (dragEl) {
        dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
      }
    };
    /**
     * @class  Sortable
     * @param  {HTMLElement}  el
     * @param  {Object}       [options]
     */


    function Sortable(el, options) {
      if (!(el && el.nodeType && el.nodeType === 1)) {
        throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
      }

      this.el = el; // root element

      this.options = options = _extends({}, options); // Export instance

      el[expando] = this;
      var defaults = {
        group: null,
        sort: true,
        disabled: false,
        store: null,
        handle: null,
        draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
        swapThreshold: 1,
        // percentage; 0 <= x <= 1
        invertSwap: false,
        // invert always
        invertedSwapThreshold: null,
        // will be set to same as swapThreshold if default
        removeCloneOnHide: true,
        direction: function direction() {
          return _detectDirection(el, this.options);
        },
        ghostClass: 'sortable-ghost',
        chosenClass: 'sortable-chosen',
        dragClass: 'sortable-drag',
        ignore: 'a, img',
        filter: null,
        preventOnFilter: true,
        animation: 0,
        easing: null,
        setData: function setData(dataTransfer, dragEl) {
          dataTransfer.setData('Text', dragEl.textContent);
        },
        dropBubble: false,
        dragoverBubble: false,
        dataIdAttr: 'data-id',
        delay: 0,
        delayOnTouchOnly: false,
        touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
        forceFallback: false,
        fallbackClass: 'sortable-fallback',
        fallbackOnBody: false,
        fallbackTolerance: 0,
        fallbackOffset: {
          x: 0,
          y: 0
        },
        supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window,
        emptyInsertThreshold: 5
      };
      PluginManager.initializePlugins(this, el, defaults); // Set default options

      for (var name in defaults) {
        !(name in options) && (options[name] = defaults[name]);
      }

      _prepareGroup(options); // Bind all private methods


      for (var fn in this) {
        if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
          this[fn] = this[fn].bind(this);
        }
      } // Setup drag mode


      this.nativeDraggable = options.forceFallback ? false : supportDraggable;

      if (this.nativeDraggable) {
        // Touch start threshold cannot be greater than the native dragstart threshold
        this.options.touchStartThreshold = 1;
      } // Bind events


      if (options.supportPointer) {
        on(el, 'pointerdown', this._onTapStart);
      } else {
        on(el, 'mousedown', this._onTapStart);
        on(el, 'touchstart', this._onTapStart);
      }

      if (this.nativeDraggable) {
        on(el, 'dragover', this);
        on(el, 'dragenter', this);
      }

      sortables.push(this.el); // Restore sorting

      options.store && options.store.get && this.sort(options.store.get(this) || []); // Add animation state manager

      _extends(this, AnimationStateManager());
    }

    Sortable.prototype =
    /** @lends Sortable.prototype */
    {
      constructor: Sortable,
      _isOutsideThisEl: function _isOutsideThisEl(target) {
        if (!this.el.contains(target) && target !== this.el) {
          lastTarget = null;
        }
      },
      _getDirection: function _getDirection(evt, target) {
        return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
      },
      _onTapStart: function _onTapStart(
      /** Event|TouchEvent */
      evt) {
        if (!evt.cancelable) return;

        var _this = this,
            el = this.el,
            options = this.options,
            preventOnFilter = options.preventOnFilter,
            type = evt.type,
            touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt,
            target = (touch || evt).target,
            originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,
            filter = options.filter;

        _saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.


        if (dragEl) {
          return;
        }

        if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
          return; // only left button and enabled
        } // cancel dnd if original target is content editable


        if (originalTarget.isContentEditable) {
          return;
        }

        target = closest(target, options.draggable, el, false);

        if (target && target.animated) {
          return;
        }

        if (lastDownEl === target) {
          // Ignoring duplicate `down`
          return;
        } // Get the index of the dragged element within its parent


        oldIndex = index(target);
        oldDraggableIndex = index(target, options.draggable); // Check filter

        if (typeof filter === 'function') {
          if (filter.call(this, evt, target, this)) {
            _dispatchEvent({
              sortable: _this,
              rootEl: originalTarget,
              name: 'filter',
              targetEl: target,
              toEl: el,
              fromEl: el
            });

            pluginEvent('filter', _this, {
              evt: evt
            });
            preventOnFilter && evt.cancelable && evt.preventDefault();
            return; // cancel dnd
          }
        } else if (filter) {
          filter = filter.split(',').some(function (criteria) {
            criteria = closest(originalTarget, criteria.trim(), el, false);

            if (criteria) {
              _dispatchEvent({
                sortable: _this,
                rootEl: criteria,
                name: 'filter',
                targetEl: target,
                fromEl: el,
                toEl: el
              });

              pluginEvent('filter', _this, {
                evt: evt
              });
              return true;
            }
          });

          if (filter) {
            preventOnFilter && evt.cancelable && evt.preventDefault();
            return; // cancel dnd
          }
        }

        if (options.handle && !closest(originalTarget, options.handle, el, false)) {
          return;
        } // Prepare `dragstart`


        this._prepareDragStart(evt, touch, target);
      },
      _prepareDragStart: function _prepareDragStart(
      /** Event */
      evt,
      /** Touch */
      touch,
      /** HTMLElement */
      target) {
        var _this = this,
            el = _this.el,
            options = _this.options,
            ownerDocument = el.ownerDocument,
            dragStartFn;

        if (target && !dragEl && target.parentNode === el) {
          var dragRect = getRect(target);
          rootEl = el;
          dragEl = target;
          parentEl = dragEl.parentNode;
          nextEl = dragEl.nextSibling;
          lastDownEl = target;
          activeGroup = options.group;
          Sortable.dragged = dragEl;
          tapEvt = {
            target: dragEl,
            clientX: (touch || evt).clientX,
            clientY: (touch || evt).clientY
          };
          tapDistanceLeft = tapEvt.clientX - dragRect.left;
          tapDistanceTop = tapEvt.clientY - dragRect.top;
          this._lastX = (touch || evt).clientX;
          this._lastY = (touch || evt).clientY;
          dragEl.style['will-change'] = 'all';

          dragStartFn = function dragStartFn() {
            pluginEvent('delayEnded', _this, {
              evt: evt
            });

            if (Sortable.eventCanceled) {
              _this._onDrop();

              return;
            } // Delayed drag has been triggered
            // we can re-enable the events: touchmove/mousemove


            _this._disableDelayedDragEvents();

            if (!FireFox && _this.nativeDraggable) {
              dragEl.draggable = true;
            } // Bind the events: dragstart/dragend


            _this._triggerDragStart(evt, touch); // Drag start event


            _dispatchEvent({
              sortable: _this,
              name: 'choose',
              originalEvent: evt
            }); // Chosen item


            toggleClass(dragEl, options.chosenClass, true);
          }; // Disable "draggable"


          options.ignore.split(',').forEach(function (criteria) {
            find(dragEl, criteria.trim(), _disableDraggable);
          });
          on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);
          on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);
          on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);
          on(ownerDocument, 'mouseup', _this._onDrop);
          on(ownerDocument, 'touchend', _this._onDrop);
          on(ownerDocument, 'touchcancel', _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)

          if (FireFox && this.nativeDraggable) {
            this.options.touchStartThreshold = 4;
            dragEl.draggable = true;
          }

          pluginEvent('delayStart', this, {
            evt: evt
          }); // Delay is impossible for native DnD in Edge or IE

          if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
            if (Sortable.eventCanceled) {
              this._onDrop();

              return;
            } // If the user moves the pointer or let go the click or touch
            // before the delay has been reached:
            // disable the delayed drag


            on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
            on(ownerDocument, 'touchend', _this._disableDelayedDrag);
            on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
            on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
            on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
            options.supportPointer && on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
            _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
          } else {
            dragStartFn();
          }
        }
      },
      _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(
      /** TouchEvent|PointerEvent **/
      e) {
        var touch = e.touches ? e.touches[0] : e;

        if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
          this._disableDelayedDrag();
        }
      },
      _disableDelayedDrag: function _disableDelayedDrag() {
        dragEl && _disableDraggable(dragEl);
        clearTimeout(this._dragStartTimer);

        this._disableDelayedDragEvents();
      },
      _disableDelayedDragEvents: function _disableDelayedDragEvents() {
        var ownerDocument = this.el.ownerDocument;
        off(ownerDocument, 'mouseup', this._disableDelayedDrag);
        off(ownerDocument, 'touchend', this._disableDelayedDrag);
        off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
        off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
        off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
        off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
      },
      _triggerDragStart: function _triggerDragStart(
      /** Event */
      evt,
      /** Touch */
      touch) {
        touch = touch || evt.pointerType == 'touch' && evt;

        if (!this.nativeDraggable || touch) {
          if (this.options.supportPointer) {
            on(document, 'pointermove', this._onTouchMove);
          } else if (touch) {
            on(document, 'touchmove', this._onTouchMove);
          } else {
            on(document, 'mousemove', this._onTouchMove);
          }
        } else {
          on(dragEl, 'dragend', this);
          on(rootEl, 'dragstart', this._onDragStart);
        }

        try {
          if (document.selection) {
            // Timeout neccessary for IE9
            _nextTick(function () {
              document.selection.empty();
            });
          } else {
            window.getSelection().removeAllRanges();
          }
        } catch (err) {}
      },
      _dragStarted: function _dragStarted(fallback, evt) {
        awaitingDragStarted = false;

        if (rootEl && dragEl) {
          pluginEvent('dragStarted', this, {
            evt: evt
          });

          if (this.nativeDraggable) {
            on(document, 'dragover', _checkOutsideTargetEl);
          }

          var options = this.options; // Apply effect

          !fallback && toggleClass(dragEl, options.dragClass, false);
          toggleClass(dragEl, options.ghostClass, true);
          Sortable.active = this;
          fallback && this._appendGhost(); // Drag start event

          _dispatchEvent({
            sortable: this,
            name: 'start',
            originalEvent: evt
          });
        } else {
          this._nulling();
        }
      },
      _emulateDragOver: function _emulateDragOver() {
        if (touchEvt) {
          this._lastX = touchEvt.clientX;
          this._lastY = touchEvt.clientY;

          _hideGhostForTarget();

          var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
          var parent = target;

          while (target && target.shadowRoot) {
            target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
            if (target === parent) break;
            parent = target;
          }

          dragEl.parentNode[expando]._isOutsideThisEl(target);

          if (parent) {
            do {
              if (parent[expando]) {
                var inserted = void 0;
                inserted = parent[expando]._onDragOver({
                  clientX: touchEvt.clientX,
                  clientY: touchEvt.clientY,
                  target: target,
                  rootEl: parent
                });

                if (inserted && !this.options.dragoverBubble) {
                  break;
                }
              }

              target = parent; // store last element
            }
            /* jshint boss:true */
            while (parent = parent.parentNode);
          }

          _unhideGhostForTarget();
        }
      },
      _onTouchMove: function _onTouchMove(
      /**TouchEvent*/
      evt) {
        if (tapEvt) {
          var options = this.options,
              fallbackTolerance = options.fallbackTolerance,
              fallbackOffset = options.fallbackOffset,
              touch = evt.touches ? evt.touches[0] : evt,
              ghostMatrix = ghostEl && matrix(ghostEl, true),
              scaleX = ghostEl && ghostMatrix && ghostMatrix.a,
              scaleY = ghostEl && ghostMatrix && ghostMatrix.d,
              relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent),
              dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),
              dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1); // only set the status to dragging, when we are actually dragging

          if (!Sortable.active && !awaitingDragStarted) {
            if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
              return;
            }

            this._onDragStart(evt, true);
          }

          if (ghostEl) {
            if (ghostMatrix) {
              ghostMatrix.e += dx - (lastDx || 0);
              ghostMatrix.f += dy - (lastDy || 0);
            } else {
              ghostMatrix = {
                a: 1,
                b: 0,
                c: 0,
                d: 1,
                e: dx,
                f: dy
              };
            }

            var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
            css(ghostEl, 'webkitTransform', cssMatrix);
            css(ghostEl, 'mozTransform', cssMatrix);
            css(ghostEl, 'msTransform', cssMatrix);
            css(ghostEl, 'transform', cssMatrix);
            lastDx = dx;
            lastDy = dy;
            touchEvt = touch;
          }

          evt.cancelable && evt.preventDefault();
        }
      },
      _appendGhost: function _appendGhost() {
        // Bug if using scale(): https://stackoverflow.com/questions/2637058
        // Not being adjusted for
        if (!ghostEl) {
          var container = this.options.fallbackOnBody ? document.body : rootEl,
              rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container),
              options = this.options; // Position absolutely

          if (PositionGhostAbsolutely) {
            // Get relatively positioned parent
            ghostRelativeParent = container;

            while (css(ghostRelativeParent, 'position') === 'static' && css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {
              ghostRelativeParent = ghostRelativeParent.parentNode;
            }

            if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
              if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
              rect.top += ghostRelativeParent.scrollTop;
              rect.left += ghostRelativeParent.scrollLeft;
            } else {
              ghostRelativeParent = getWindowScrollingElement();
            }

            ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
          }

          ghostEl = dragEl.cloneNode(true);
          toggleClass(ghostEl, options.ghostClass, false);
          toggleClass(ghostEl, options.fallbackClass, true);
          toggleClass(ghostEl, options.dragClass, true);
          css(ghostEl, 'transition', '');
          css(ghostEl, 'transform', '');
          css(ghostEl, 'box-sizing', 'border-box');
          css(ghostEl, 'margin', 0);
          css(ghostEl, 'top', rect.top);
          css(ghostEl, 'left', rect.left);
          css(ghostEl, 'width', rect.width);
          css(ghostEl, 'height', rect.height);
          css(ghostEl, 'opacity', '0.8');
          css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');
          css(ghostEl, 'zIndex', '100000');
          css(ghostEl, 'pointerEvents', 'none');
          Sortable.ghost = ghostEl;
          container.appendChild(ghostEl); // Set transform-origin

          css(ghostEl, 'transform-origin', tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + '% ' + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + '%');
        }
      },
      _onDragStart: function _onDragStart(
      /**Event*/
      evt,
      /**boolean*/
      fallback) {
        var _this = this;

        var dataTransfer = evt.dataTransfer;
        var options = _this.options;
        pluginEvent('dragStart', this, {
          evt: evt
        });

        if (Sortable.eventCanceled) {
          this._onDrop();

          return;
        }

        pluginEvent('setupClone', this);

        if (!Sortable.eventCanceled) {
          cloneEl = clone(dragEl);
          cloneEl.draggable = false;
          cloneEl.style['will-change'] = '';

          this._hideClone();

          toggleClass(cloneEl, this.options.chosenClass, false);
          Sortable.clone = cloneEl;
        } // #1143: IFrame support workaround


        _this.cloneId = _nextTick(function () {
          pluginEvent('clone', _this);
          if (Sortable.eventCanceled) return;

          if (!_this.options.removeCloneOnHide) {
            rootEl.insertBefore(cloneEl, dragEl);
          }

          _this._hideClone();

          _dispatchEvent({
            sortable: _this,
            name: 'clone'
          });
        });
        !fallback && toggleClass(dragEl, options.dragClass, true); // Set proper drop events

        if (fallback) {
          ignoreNextClick = true;
          _this._loopId = setInterval(_this._emulateDragOver, 50);
        } else {
          // Undo what was set in _prepareDragStart before drag started
          off(document, 'mouseup', _this._onDrop);
          off(document, 'touchend', _this._onDrop);
          off(document, 'touchcancel', _this._onDrop);

          if (dataTransfer) {
            dataTransfer.effectAllowed = 'move';
            options.setData && options.setData.call(_this, dataTransfer, dragEl);
          }

          on(document, 'drop', _this); // #1276 fix:

          css(dragEl, 'transform', 'translateZ(0)');
        }

        awaitingDragStarted = true;
        _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
        on(document, 'selectstart', _this);
        moved = true;

        if (Safari) {
          css(document.body, 'user-select', 'none');
        }
      },
      // Returns true - if no further action is needed (either inserted or another condition)
      _onDragOver: function _onDragOver(
      /**Event*/
      evt) {
        var el = this.el,
            target = evt.target,
            dragRect,
            targetRect,
            revert,
            options = this.options,
            group = options.group,
            activeSortable = Sortable.active,
            isOwner = activeGroup === group,
            canSort = options.sort,
            fromSortable = putSortable || activeSortable,
            vertical,
            _this = this,
            completedFired = false;

        if (_silent) return;

        function dragOverEvent(name, extra) {
          pluginEvent(name, _this, _objectSpread({
            evt: evt,
            isOwner: isOwner,
            axis: vertical ? 'vertical' : 'horizontal',
            revert: revert,
            dragRect: dragRect,
            targetRect: targetRect,
            canSort: canSort,
            fromSortable: fromSortable,
            target: target,
            completed: completed,
            onMove: function onMove(target, after) {
              return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
            },
            changed: changed
          }, extra));
        } // Capture animation state


        function capture() {
          dragOverEvent('dragOverAnimationCapture');

          _this.captureAnimationState();

          if (_this !== fromSortable) {
            fromSortable.captureAnimationState();
          }
        } // Return invocation when dragEl is inserted (or completed)


        function completed(insertion) {
          dragOverEvent('dragOverCompleted', {
            insertion: insertion
          });

          if (insertion) {
            // Clones must be hidden before folding animation to capture dragRectAbsolute properly
            if (isOwner) {
              activeSortable._hideClone();
            } else {
              activeSortable._showClone(_this);
            }

            if (_this !== fromSortable) {
              // Set ghost class to new sortable's ghost class
              toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
              toggleClass(dragEl, options.ghostClass, true);
            }

            if (putSortable !== _this && _this !== Sortable.active) {
              putSortable = _this;
            } else if (_this === Sortable.active && putSortable) {
              putSortable = null;
            } // Animation


            if (fromSortable === _this) {
              _this._ignoreWhileAnimating = target;
            }

            _this.animateAll(function () {
              dragOverEvent('dragOverAnimationComplete');
              _this._ignoreWhileAnimating = null;
            });

            if (_this !== fromSortable) {
              fromSortable.animateAll();
              fromSortable._ignoreWhileAnimating = null;
            }
          } // Null lastTarget if it is not inside a previously swapped element


          if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
            lastTarget = null;
          } // no bubbling and not fallback


          if (!options.dragoverBubble && !evt.rootEl && target !== document) {
            dragEl.parentNode[expando]._isOutsideThisEl(evt.target); // Do not detect for empty insert if already inserted


            !insertion && nearestEmptyInsertDetectEvent(evt);
          }

          !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
          return completedFired = true;
        } // Call when dragEl has been inserted


        function changed() {
          newIndex = index(dragEl);
          newDraggableIndex = index(dragEl, options.draggable);

          _dispatchEvent({
            sortable: _this,
            name: 'change',
            toEl: el,
            newIndex: newIndex,
            newDraggableIndex: newDraggableIndex,
            originalEvent: evt
          });
        }

        if (evt.preventDefault !== void 0) {
          evt.cancelable && evt.preventDefault();
        }

        target = closest(target, options.draggable, el, true);
        dragOverEvent('dragOver');
        if (Sortable.eventCanceled) return completedFired;

        if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
          return completed(false);
        }

        ignoreNextClick = false;

        if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = !rootEl.contains(dragEl)) // Reverting item into the original list
        : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
          vertical = this._getDirection(evt, target) === 'vertical';
          dragRect = getRect(dragEl);
          dragOverEvent('dragOverValid');
          if (Sortable.eventCanceled) return completedFired;

          if (revert) {
            parentEl = rootEl; // actualization

            capture();

            this._hideClone();

            dragOverEvent('revert');

            if (!Sortable.eventCanceled) {
              if (nextEl) {
                rootEl.insertBefore(dragEl, nextEl);
              } else {
                rootEl.appendChild(dragEl);
              }
            }

            return completed(true);
          }

          var elLastChild = lastChild(el, options.draggable);

          if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
            // If already at end of list: Do not insert
            if (elLastChild === dragEl) {
              return completed(false);
            } // assign target only if condition is true


            if (elLastChild && el === evt.target) {
              target = elLastChild;
            }

            if (target) {
              targetRect = getRect(target);
            }

            if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
              capture();
              el.appendChild(dragEl);
              parentEl = el; // actualization

              changed();
              return completed(true);
            }
          } else if (target.parentNode === el) {
            targetRect = getRect(target);
            var direction = 0,
                targetBeforeFirstSwap,
                differentLevel = dragEl.parentNode !== el,
                differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical),
                side1 = vertical ? 'top' : 'left',
                scrolledPastTop = isScrolledPast(target, 'top', 'top') || isScrolledPast(dragEl, 'top', 'top'),
                scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;

            if (lastTarget !== target) {
              targetBeforeFirstSwap = targetRect[side1];
              pastFirstInvertThresh = false;
              isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
            }

            direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
            var sibling;

            if (direction !== 0) {
              // Check if target is beside dragEl in respective direction (ignoring hidden elements)
              var dragIndex = index(dragEl);

              do {
                dragIndex -= direction;
                sibling = parentEl.children[dragIndex];
              } while (sibling && (css(sibling, 'display') === 'none' || sibling === ghostEl));
            } // If dragEl is already beside target: Do not insert


            if (direction === 0 || sibling === target) {
              return completed(false);
            }

            lastTarget = target;
            lastDirection = direction;
            var nextSibling = target.nextElementSibling,
                after = false;
            after = direction === 1;

            var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

            if (moveVector !== false) {
              if (moveVector === 1 || moveVector === -1) {
                after = moveVector === 1;
              }

              _silent = true;
              setTimeout(_unsilent, 30);
              capture();

              if (after && !nextSibling) {
                el.appendChild(dragEl);
              } else {
                target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
              } // Undo chrome's scroll adjustment (has no effect on other browsers)


              if (scrolledPastTop) {
                scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
              }

              parentEl = dragEl.parentNode; // actualization
              // must be done before animation

              if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
                targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
              }

              changed();
              return completed(true);
            }
          }

          if (el.contains(dragEl)) {
            return completed(false);
          }
        }

        return false;
      },
      _ignoreWhileAnimating: null,
      _offMoveEvents: function _offMoveEvents() {
        off(document, 'mousemove', this._onTouchMove);
        off(document, 'touchmove', this._onTouchMove);
        off(document, 'pointermove', this._onTouchMove);
        off(document, 'dragover', nearestEmptyInsertDetectEvent);
        off(document, 'mousemove', nearestEmptyInsertDetectEvent);
        off(document, 'touchmove', nearestEmptyInsertDetectEvent);
      },
      _offUpEvents: function _offUpEvents() {
        var ownerDocument = this.el.ownerDocument;
        off(ownerDocument, 'mouseup', this._onDrop);
        off(ownerDocument, 'touchend', this._onDrop);
        off(ownerDocument, 'pointerup', this._onDrop);
        off(ownerDocument, 'touchcancel', this._onDrop);
        off(document, 'selectstart', this);
      },
      _onDrop: function _onDrop(
      /**Event*/
      evt) {
        var el = this.el,
            options = this.options; // Get the index of the dragged element within its parent

        newIndex = index(dragEl);
        newDraggableIndex = index(dragEl, options.draggable);
        pluginEvent('drop', this, {
          evt: evt
        });
        parentEl = dragEl && dragEl.parentNode; // Get again after plugin event

        newIndex = index(dragEl);
        newDraggableIndex = index(dragEl, options.draggable);

        if (Sortable.eventCanceled) {
          this._nulling();

          return;
        }

        awaitingDragStarted = false;
        isCircumstantialInvert = false;
        pastFirstInvertThresh = false;
        clearInterval(this._loopId);
        clearTimeout(this._dragStartTimer);

        _cancelNextTick(this.cloneId);

        _cancelNextTick(this._dragStartId); // Unbind events


        if (this.nativeDraggable) {
          off(document, 'drop', this);
          off(el, 'dragstart', this._onDragStart);
        }

        this._offMoveEvents();

        this._offUpEvents();

        if (Safari) {
          css(document.body, 'user-select', '');
        }

        css(dragEl, 'transform', '');

        if (evt) {
          if (moved) {
            evt.cancelable && evt.preventDefault();
            !options.dropBubble && evt.stopPropagation();
          }

          ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

          if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
            // Remove clone(s)
            cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
          }

          if (dragEl) {
            if (this.nativeDraggable) {
              off(dragEl, 'dragend', this);
            }

            _disableDraggable(dragEl);

            dragEl.style['will-change'] = ''; // Remove classes
            // ghostClass is added in dragStarted

            if (moved && !awaitingDragStarted) {
              toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
            }

            toggleClass(dragEl, this.options.chosenClass, false); // Drag stop event

            _dispatchEvent({
              sortable: this,
              name: 'unchoose',
              toEl: parentEl,
              newIndex: null,
              newDraggableIndex: null,
              originalEvent: evt
            });

            if (rootEl !== parentEl) {
              if (newIndex >= 0) {
                // Add event
                _dispatchEvent({
                  rootEl: parentEl,
                  name: 'add',
                  toEl: parentEl,
                  fromEl: rootEl,
                  originalEvent: evt
                }); // Remove event


                _dispatchEvent({
                  sortable: this,
                  name: 'remove',
                  toEl: parentEl,
                  originalEvent: evt
                }); // drag from one list and drop into another


                _dispatchEvent({
                  rootEl: parentEl,
                  name: 'sort',
                  toEl: parentEl,
                  fromEl: rootEl,
                  originalEvent: evt
                });

                _dispatchEvent({
                  sortable: this,
                  name: 'sort',
                  toEl: parentEl,
                  originalEvent: evt
                });
              }

              putSortable && putSortable.save();
            } else {
              if (newIndex !== oldIndex) {
                if (newIndex >= 0) {
                  // drag & drop within the same list
                  _dispatchEvent({
                    sortable: this,
                    name: 'update',
                    toEl: parentEl,
                    originalEvent: evt
                  });

                  _dispatchEvent({
                    sortable: this,
                    name: 'sort',
                    toEl: parentEl,
                    originalEvent: evt
                  });
                }
              }
            }

            if (Sortable.active) {
              /* jshint eqnull:true */
              if (newIndex == null || newIndex === -1) {
                newIndex = oldIndex;
                newDraggableIndex = oldDraggableIndex;
              }

              _dispatchEvent({
                sortable: this,
                name: 'end',
                toEl: parentEl,
                originalEvent: evt
              }); // Save sorting


              this.save();
            }
          }
        }

        this._nulling();
      },
      _nulling: function _nulling() {
        pluginEvent('nulling', this);
        rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
        savedInputChecked.forEach(function (el) {
          el.checked = true;
        });
        savedInputChecked.length = lastDx = lastDy = 0;
      },
      handleEvent: function handleEvent(
      /**Event*/
      evt) {
        switch (evt.type) {
          case 'drop':
          case 'dragend':
            this._onDrop(evt);

            break;

          case 'dragenter':
          case 'dragover':
            if (dragEl) {
              this._onDragOver(evt);

              _globalDragOver(evt);
            }

            break;

          case 'selectstart':
            evt.preventDefault();
            break;
        }
      },

      /**
       * Serializes the item into an array of string.
       * @returns {String[]}
       */
      toArray: function toArray() {
        var order = [],
            el,
            children = this.el.children,
            i = 0,
            n = children.length,
            options = this.options;

        for (; i < n; i++) {
          el = children[i];

          if (closest(el, options.draggable, this.el, false)) {
            order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
          }
        }

        return order;
      },

      /**
       * Sorts the elements according to the array.
       * @param  {String[]}  order  order of the items
       */
      sort: function sort(order) {
        var items = {},
            rootEl = this.el;
        this.toArray().forEach(function (id, i) {
          var el = rootEl.children[i];

          if (closest(el, this.options.draggable, rootEl, false)) {
            items[id] = el;
          }
        }, this);
        order.forEach(function (id) {
          if (items[id]) {
            rootEl.removeChild(items[id]);
            rootEl.appendChild(items[id]);
          }
        });
      },

      /**
       * Save the current sorting
       */
      save: function save() {
        var store = this.options.store;
        store && store.set && store.set(this);
      },

      /**
       * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
       * @param   {HTMLElement}  el
       * @param   {String}       [selector]  default: `options.draggable`
       * @returns {HTMLElement|null}
       */
      closest: function closest$1(el, selector) {
        return closest(el, selector || this.options.draggable, this.el, false);
      },

      /**
       * Set/get option
       * @param   {string} name
       * @param   {*}      [value]
       * @returns {*}
       */
      option: function option(name, value) {
        var options = this.options;

        if (value === void 0) {
          return options[name];
        } else {
          var modifiedValue = PluginManager.modifyOption(this, name, value);

          if (typeof modifiedValue !== 'undefined') {
            options[name] = modifiedValue;
          } else {
            options[name] = value;
          }

          if (name === 'group') {
            _prepareGroup(options);
          }
        }
      },

      /**
       * Destroy
       */
      destroy: function destroy() {
        pluginEvent('destroy', this);
        var el = this.el;
        el[expando] = null;
        off(el, 'mousedown', this._onTapStart);
        off(el, 'touchstart', this._onTapStart);
        off(el, 'pointerdown', this._onTapStart);

        if (this.nativeDraggable) {
          off(el, 'dragover', this);
          off(el, 'dragenter', this);
        } // Remove draggable attributes


        Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
          el.removeAttribute('draggable');
        });

        this._onDrop();

        this._disableDelayedDragEvents();

        sortables.splice(sortables.indexOf(this.el), 1);
        this.el = el = null;
      },
      _hideClone: function _hideClone() {
        if (!cloneHidden) {
          pluginEvent('hideClone', this);
          if (Sortable.eventCanceled) return;
          css(cloneEl, 'display', 'none');

          if (this.options.removeCloneOnHide && cloneEl.parentNode) {
            cloneEl.parentNode.removeChild(cloneEl);
          }

          cloneHidden = true;
        }
      },
      _showClone: function _showClone(putSortable) {
        if (putSortable.lastPutMode !== 'clone') {
          this._hideClone();

          return;
        }

        if (cloneHidden) {
          pluginEvent('showClone', this);
          if (Sortable.eventCanceled) return; // show clone at dragEl or original position

          if (rootEl.contains(dragEl) && !this.options.group.revertClone) {
            rootEl.insertBefore(cloneEl, dragEl);
          } else if (nextEl) {
            rootEl.insertBefore(cloneEl, nextEl);
          } else {
            rootEl.appendChild(cloneEl);
          }

          if (this.options.group.revertClone) {
            this.animate(dragEl, cloneEl);
          }

          css(cloneEl, 'display', '');
          cloneHidden = false;
        }
      }
    };

    function _globalDragOver(
    /**Event*/
    evt) {
      if (evt.dataTransfer) {
        evt.dataTransfer.dropEffect = 'move';
      }

      evt.cancelable && evt.preventDefault();
    }

    function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
      var evt,
          sortable = fromEl[expando],
          onMoveFn = sortable.options.onMove,
          retVal; // Support for new CustomEvent feature

      if (window.CustomEvent && !IE11OrLess && !Edge) {
        evt = new CustomEvent('move', {
          bubbles: true,
          cancelable: true
        });
      } else {
        evt = document.createEvent('Event');
        evt.initEvent('move', true, true);
      }

      evt.to = toEl;
      evt.from = fromEl;
      evt.dragged = dragEl;
      evt.draggedRect = dragRect;
      evt.related = targetEl || toEl;
      evt.relatedRect = targetRect || getRect(toEl);
      evt.willInsertAfter = willInsertAfter;
      evt.originalEvent = originalEvent;
      fromEl.dispatchEvent(evt);

      if (onMoveFn) {
        retVal = onMoveFn.call(sortable, evt, originalEvent);
      }

      return retVal;
    }

    function _disableDraggable(el) {
      el.draggable = false;
    }

    function _unsilent() {
      _silent = false;
    }

    function _ghostIsLast(evt, vertical, sortable) {
      var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
      var spacer = 10;
      return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
    }

    function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
      var mouseOnAxis = vertical ? evt.clientY : evt.clientX,
          targetLength = vertical ? targetRect.height : targetRect.width,
          targetS1 = vertical ? targetRect.top : targetRect.left,
          targetS2 = vertical ? targetRect.bottom : targetRect.right,
          invert = false;

      if (!invertSwap) {
        // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
        if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
          // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
          // check if past first invert threshold on side opposite of lastDirection
          if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
            // past first invert threshold, do not restrict inverted threshold to dragEl shadow
            pastFirstInvertThresh = true;
          }

          if (!pastFirstInvertThresh) {
            // dragEl shadow (target move distance shadow)
            if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
            : mouseOnAxis > targetS2 - targetMoveDistance) {
              return -lastDirection;
            }
          } else {
            invert = true;
          }
        } else {
          // Regular
          if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
            return _getInsertDirection(target);
          }
        }
      }

      invert = invert || invertSwap;

      if (invert) {
        // Invert of regular
        if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
          return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
        }
      }

      return 0;
    }
    /**
     * Gets the direction dragEl must be swapped relative to target in order to make it
     * seem that dragEl has been "inserted" into that element's position
     * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
     * @return {Number}                   Direction dragEl must be swapped
     */


    function _getInsertDirection(target) {
      if (index(dragEl) < index(target)) {
        return 1;
      } else {
        return -1;
      }
    }
    /**
     * Generate id
     * @param   {HTMLElement} el
     * @returns {String}
     * @private
     */


    function _generateId(el) {
      var str = el.tagName + el.className + el.src + el.href + el.textContent,
          i = str.length,
          sum = 0;

      while (i--) {
        sum += str.charCodeAt(i);
      }

      return sum.toString(36);
    }

    function _saveInputCheckedState(root) {
      savedInputChecked.length = 0;
      var inputs = root.getElementsByTagName('input');
      var idx = inputs.length;

      while (idx--) {
        var el = inputs[idx];
        el.checked && savedInputChecked.push(el);
      }
    }

    function _nextTick(fn) {
      return setTimeout(fn, 0);
    }

    function _cancelNextTick(id) {
      return clearTimeout(id);
    } // Fixed #973:


    if (documentExists) {
      on(document, 'touchmove', function (evt) {
        if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
          evt.preventDefault();
        }
      });
    } // Export utils


    Sortable.utils = {
      on: on,
      off: off,
      css: css,
      find: find,
      is: function is(el, selector) {
        return !!closest(el, selector, el, false);
      },
      extend: extend,
      throttle: throttle,
      closest: closest,
      toggleClass: toggleClass,
      clone: clone,
      index: index,
      nextTick: _nextTick,
      cancelNextTick: _cancelNextTick,
      detectDirection: _detectDirection,
      getChild: getChild
    };
    /**
     * Get the Sortable instance of an element
     * @param  {HTMLElement} element The element
     * @return {Sortable|undefined}         The instance of Sortable
     */

    Sortable.get = function (element) {
      return element[expando];
    };
    /**
     * Mount a plugin to Sortable
     * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
     */


    Sortable.mount = function () {
      for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
        plugins[_key] = arguments[_key];
      }

      if (plugins[0].constructor === Array) plugins = plugins[0];
      plugins.forEach(function (plugin) {
        if (!plugin.prototype || !plugin.prototype.constructor) {
          throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
        }

        if (plugin.utils) Sortable.utils = _objectSpread({}, Sortable.utils, plugin.utils);
        PluginManager.mount(plugin);
      });
    };
    /**
     * Create sortable instance
     * @param {HTMLElement}  el
     * @param {Object}      [options]
     */


    Sortable.create = function (el, options) {
      return new Sortable(el, options);
    }; // Export


    Sortable.version = version;
    var autoScrolls = [],
        scrollEl,
        scrollRootEl,
        scrolling = false,
        lastAutoScrollX,
        lastAutoScrollY,
        touchEvt$1,
        pointerElemChangedInterval;

    function AutoScrollPlugin() {
      function AutoScroll() {
        this.defaults = {
          scroll: true,
          scrollSensitivity: 30,
          scrollSpeed: 10,
          bubbleScroll: true
        }; // Bind all private methods

        for (var fn in this) {
          if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
            this[fn] = this[fn].bind(this);
          }
        }
      }

      AutoScroll.prototype = {
        dragStarted: function dragStarted(_ref) {
          var originalEvent = _ref.originalEvent;

          if (this.sortable.nativeDraggable) {
            on(document, 'dragover', this._handleAutoScroll);
          } else {
            if (this.options.supportPointer) {
              on(document, 'pointermove', this._handleFallbackAutoScroll);
            } else if (originalEvent.touches) {
              on(document, 'touchmove', this._handleFallbackAutoScroll);
            } else {
              on(document, 'mousemove', this._handleFallbackAutoScroll);
            }
          }
        },
        dragOverCompleted: function dragOverCompleted(_ref2) {
          var originalEvent = _ref2.originalEvent; // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)

          if (!this.options.dragOverBubble && !originalEvent.rootEl) {
            this._handleAutoScroll(originalEvent);
          }
        },
        drop: function drop() {
          if (this.sortable.nativeDraggable) {
            off(document, 'dragover', this._handleAutoScroll);
          } else {
            off(document, 'pointermove', this._handleFallbackAutoScroll);
            off(document, 'touchmove', this._handleFallbackAutoScroll);
            off(document, 'mousemove', this._handleFallbackAutoScroll);
          }

          clearPointerElemChangedInterval();
          clearAutoScrolls();
          cancelThrottle();
        },
        nulling: function nulling() {
          touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
          autoScrolls.length = 0;
        },
        _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
          this._handleAutoScroll(evt, true);
        },
        _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
          var _this = this;

          var x = (evt.touches ? evt.touches[0] : evt).clientX,
              y = (evt.touches ? evt.touches[0] : evt).clientY,
              elem = document.elementFromPoint(x, y);
          touchEvt$1 = evt; // IE does not seem to have native autoscroll,
          // Edge's autoscroll seems too conditional,
          // MACOS Safari does not have autoscroll,
          // Firefox and Chrome are good

          if (fallback || Edge || IE11OrLess || Safari) {
            autoScroll(evt, this.options, elem, fallback); // Listener for pointer element change

            var ogElemScroller = getParentAutoScrollElement(elem, true);

            if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
              pointerElemChangedInterval && clearPointerElemChangedInterval(); // Detect for pointer elem change, emulating native DnD behaviour

              pointerElemChangedInterval = setInterval(function () {
                var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);

                if (newElem !== ogElemScroller) {
                  ogElemScroller = newElem;
                  clearAutoScrolls();
                }

                autoScroll(evt, _this.options, newElem, fallback);
              }, 10);
              lastAutoScrollX = x;
              lastAutoScrollY = y;
            }
          } else {
            // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
            if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
              clearAutoScrolls();
              return;
            }

            autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
          }
        }
      };
      return _extends(AutoScroll, {
        pluginName: 'scroll',
        initializeByDefault: true
      });
    }

    function clearAutoScrolls() {
      autoScrolls.forEach(function (autoScroll) {
        clearInterval(autoScroll.pid);
      });
      autoScrolls = [];
    }

    function clearPointerElemChangedInterval() {
      clearInterval(pointerElemChangedInterval);
    }

    var autoScroll = throttle(function (evt, options, rootEl, isFallback) {
      // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
      if (!options.scroll) return;
      var x = (evt.touches ? evt.touches[0] : evt).clientX,
          y = (evt.touches ? evt.touches[0] : evt).clientY,
          sens = options.scrollSensitivity,
          speed = options.scrollSpeed,
          winScroller = getWindowScrollingElement();
      var scrollThisInstance = false,
          scrollCustomFn; // New scroll root, set scrollEl

      if (scrollRootEl !== rootEl) {
        scrollRootEl = rootEl;
        clearAutoScrolls();
        scrollEl = options.scroll;
        scrollCustomFn = options.scrollFn;

        if (scrollEl === true) {
          scrollEl = getParentAutoScrollElement(rootEl, true);
        }
      }

      var layersOut = 0;
      var currentParent = scrollEl;

      do {
        var el = currentParent,
            rect = getRect(el),
            top = rect.top,
            bottom = rect.bottom,
            left = rect.left,
            right = rect.right,
            width = rect.width,
            height = rect.height,
            canScrollX = void 0,
            canScrollY = void 0,
            scrollWidth = el.scrollWidth,
            scrollHeight = el.scrollHeight,
            elCSS = css(el),
            scrollPosX = el.scrollLeft,
            scrollPosY = el.scrollTop;

        if (el === winScroller) {
          canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');
          canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');
        } else {
          canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');
          canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');
        }

        var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
        var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);

        if (!autoScrolls[layersOut]) {
          for (var i = 0; i <= layersOut; i++) {
            if (!autoScrolls[i]) {
              autoScrolls[i] = {};
            }
          }
        }

        if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
          autoScrolls[layersOut].el = el;
          autoScrolls[layersOut].vx = vx;
          autoScrolls[layersOut].vy = vy;
          clearInterval(autoScrolls[layersOut].pid);

          if (vx != 0 || vy != 0) {
            scrollThisInstance = true;
            /* jshint loopfunc:true */

            autoScrolls[layersOut].pid = setInterval(function () {
              // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
              if (isFallback && this.layer === 0) {
                Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely

              }

              var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
              var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;

              if (typeof scrollCustomFn === 'function') {
                if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== 'continue') {
                  return;
                }
              }

              scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
            }.bind({
              layer: layersOut
            }), 24);
          }
        }

        layersOut++;
      } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));

      scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
    }, 30);

    var drop = function drop(_ref) {
      var originalEvent = _ref.originalEvent,
          putSortable = _ref.putSortable,
          dragEl = _ref.dragEl,
          activeSortable = _ref.activeSortable,
          dispatchSortableEvent = _ref.dispatchSortableEvent,
          hideGhostForTarget = _ref.hideGhostForTarget,
          unhideGhostForTarget = _ref.unhideGhostForTarget;
      if (!originalEvent) return;
      var toSortable = putSortable || activeSortable;
      hideGhostForTarget();
      var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
      var target = document.elementFromPoint(touch.clientX, touch.clientY);
      unhideGhostForTarget();

      if (toSortable && !toSortable.el.contains(target)) {
        dispatchSortableEvent('spill');
        this.onSpill({
          dragEl: dragEl,
          putSortable: putSortable
        });
      }
    };

    function Revert() {}

    Revert.prototype = {
      startIndex: null,
      dragStart: function dragStart(_ref2) {
        var oldDraggableIndex = _ref2.oldDraggableIndex;
        this.startIndex = oldDraggableIndex;
      },
      onSpill: function onSpill(_ref3) {
        var dragEl = _ref3.dragEl,
            putSortable = _ref3.putSortable;
        this.sortable.captureAnimationState();

        if (putSortable) {
          putSortable.captureAnimationState();
        }

        var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);

        if (nextSibling) {
          this.sortable.el.insertBefore(dragEl, nextSibling);
        } else {
          this.sortable.el.appendChild(dragEl);
        }

        this.sortable.animateAll();

        if (putSortable) {
          putSortable.animateAll();
        }
      },
      drop: drop
    };

    _extends(Revert, {
      pluginName: 'revertOnSpill'
    });

    function Remove() {}

    Remove.prototype = {
      onSpill: function onSpill(_ref4) {
        var dragEl = _ref4.dragEl,
            putSortable = _ref4.putSortable;
        var parentSortable = putSortable || this.sortable;
        parentSortable.captureAnimationState();
        dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
        parentSortable.animateAll();
      },
      drop: drop
    };

    _extends(Remove, {
      pluginName: 'removeOnSpill'
    });

    var lastSwapEl;

    function SwapPlugin() {
      function Swap() {
        this.defaults = {
          swapClass: 'sortable-swap-highlight'
        };
      }

      Swap.prototype = {
        dragStart: function dragStart(_ref) {
          var dragEl = _ref.dragEl;
          lastSwapEl = dragEl;
        },
        dragOverValid: function dragOverValid(_ref2) {
          var completed = _ref2.completed,
              target = _ref2.target,
              onMove = _ref2.onMove,
              activeSortable = _ref2.activeSortable,
              changed = _ref2.changed,
              cancel = _ref2.cancel;
          if (!activeSortable.options.swap) return;
          var el = this.sortable.el,
              options = this.options;

          if (target && target !== el) {
            var prevSwapEl = lastSwapEl;

            if (onMove(target) !== false) {
              toggleClass(target, options.swapClass, true);
              lastSwapEl = target;
            } else {
              lastSwapEl = null;
            }

            if (prevSwapEl && prevSwapEl !== lastSwapEl) {
              toggleClass(prevSwapEl, options.swapClass, false);
            }
          }

          changed();
          completed(true);
          cancel();
        },
        drop: function drop(_ref3) {
          var activeSortable = _ref3.activeSortable,
              putSortable = _ref3.putSortable,
              dragEl = _ref3.dragEl;
          var toSortable = putSortable || this.sortable;
          var options = this.options;
          lastSwapEl && toggleClass(lastSwapEl, options.swapClass, false);

          if (lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) {
            if (dragEl !== lastSwapEl) {
              toSortable.captureAnimationState();
              if (toSortable !== activeSortable) activeSortable.captureAnimationState();
              swapNodes(dragEl, lastSwapEl);
              toSortable.animateAll();
              if (toSortable !== activeSortable) activeSortable.animateAll();
            }
          }
        },
        nulling: function nulling() {
          lastSwapEl = null;
        }
      };
      return _extends(Swap, {
        pluginName: 'swap',
        eventProperties: function eventProperties() {
          return {
            swapItem: lastSwapEl
          };
        }
      });
    }

    function swapNodes(n1, n2) {
      var p1 = n1.parentNode,
          p2 = n2.parentNode,
          i1,
          i2;
      if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;
      i1 = index(n1);
      i2 = index(n2);

      if (p1.isEqualNode(p2) && i1 < i2) {
        i2++;
      }

      p1.insertBefore(n2, p1.children[i1]);
      p2.insertBefore(n1, p2.children[i2]);
    }

    var multiDragElements = [],
        multiDragClones = [],
        lastMultiDragSelect,
        // for selection with modifier key down (SHIFT)
    multiDragSortable,
        initialFolding = false,
        // Initial multi-drag fold when drag started
    folding = false,
        // Folding any other time
    dragStarted = false,
        dragEl$1,
        clonesFromRect,
        clonesHidden;

    function MultiDragPlugin() {
      function MultiDrag(sortable) {
        // Bind all private methods
        for (var fn in this) {
          if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
            this[fn] = this[fn].bind(this);
          }
        }

        if (sortable.options.supportPointer) {
          on(document, 'pointerup', this._deselectMultiDrag);
        } else {
          on(document, 'mouseup', this._deselectMultiDrag);
          on(document, 'touchend', this._deselectMultiDrag);
        }

        on(document, 'keydown', this._checkKeyDown);
        on(document, 'keyup', this._checkKeyUp);
        this.defaults = {
          selectedClass: 'sortable-selected',
          multiDragKey: null,
          setData: function setData(dataTransfer, dragEl) {
            var data = '';

            if (multiDragElements.length && multiDragSortable === sortable) {
              multiDragElements.forEach(function (multiDragElement, i) {
                data += (!i ? '' : ', ') + multiDragElement.textContent;
              });
            } else {
              data = dragEl.textContent;
            }

            dataTransfer.setData('Text', data);
          }
        };
      }

      MultiDrag.prototype = {
        multiDragKeyDown: false,
        isMultiDrag: false,
        delayStartGlobal: function delayStartGlobal(_ref) {
          var dragged = _ref.dragEl;
          dragEl$1 = dragged;
        },
        delayEnded: function delayEnded() {
          this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);
        },
        setupClone: function setupClone(_ref2) {
          var sortable = _ref2.sortable,
              cancel = _ref2.cancel;
          if (!this.isMultiDrag) return;

          for (var i = 0; i < multiDragElements.length; i++) {
            multiDragClones.push(clone(multiDragElements[i]));
            multiDragClones[i].sortableIndex = multiDragElements[i].sortableIndex;
            multiDragClones[i].draggable = false;
            multiDragClones[i].style['will-change'] = '';
            toggleClass(multiDragClones[i], this.options.selectedClass, false);
            multiDragElements[i] === dragEl$1 && toggleClass(multiDragClones[i], this.options.chosenClass, false);
          }

          sortable._hideClone();

          cancel();
        },
        clone: function clone(_ref3) {
          var sortable = _ref3.sortable,
              rootEl = _ref3.rootEl,
              dispatchSortableEvent = _ref3.dispatchSortableEvent,
              cancel = _ref3.cancel;
          if (!this.isMultiDrag) return;

          if (!this.options.removeCloneOnHide) {
            if (multiDragElements.length && multiDragSortable === sortable) {
              insertMultiDragClones(true, rootEl);
              dispatchSortableEvent('clone');
              cancel();
            }
          }
        },
        showClone: function showClone(_ref4) {
          var cloneNowShown = _ref4.cloneNowShown,
              rootEl = _ref4.rootEl,
              cancel = _ref4.cancel;
          if (!this.isMultiDrag) return;
          insertMultiDragClones(false, rootEl);
          multiDragClones.forEach(function (clone) {
            css(clone, 'display', '');
          });
          cloneNowShown();
          clonesHidden = false;
          cancel();
        },
        hideClone: function hideClone(_ref5) {
          var _this = this;

          var sortable = _ref5.sortable,
              cloneNowHidden = _ref5.cloneNowHidden,
              cancel = _ref5.cancel;
          if (!this.isMultiDrag) return;
          multiDragClones.forEach(function (clone) {
            css(clone, 'display', 'none');

            if (_this.options.removeCloneOnHide && clone.parentNode) {
              clone.parentNode.removeChild(clone);
            }
          });
          cloneNowHidden();
          clonesHidden = true;
          cancel();
        },
        dragStartGlobal: function dragStartGlobal(_ref6) {
          var sortable = _ref6.sortable;

          if (!this.isMultiDrag && multiDragSortable) {
            multiDragSortable.multiDrag._deselectMultiDrag();
          }

          multiDragElements.forEach(function (multiDragElement) {
            multiDragElement.sortableIndex = index(multiDragElement);
          }); // Sort multi-drag elements

          multiDragElements = multiDragElements.sort(function (a, b) {
            return a.sortableIndex - b.sortableIndex;
          });
          dragStarted = true;
        },
        dragStarted: function dragStarted(_ref7) {
          var _this2 = this;

          var sortable = _ref7.sortable;
          if (!this.isMultiDrag) return;

          if (this.options.sort) {
            // Capture rects,
            // hide multi drag elements (by positioning them absolute),
            // set multi drag elements rects to dragRect,
            // show multi drag elements,
            // animate to rects,
            // unset rects & remove from DOM
            sortable.captureAnimationState();

            if (this.options.animation) {
              multiDragElements.forEach(function (multiDragElement) {
                if (multiDragElement === dragEl$1) return;
                css(multiDragElement, 'position', 'absolute');
              });
              var dragRect = getRect(dragEl$1, false, true, true);
              multiDragElements.forEach(function (multiDragElement) {
                if (multiDragElement === dragEl$1) return;
                setRect(multiDragElement, dragRect);
              });
              folding = true;
              initialFolding = true;
            }
          }

          sortable.animateAll(function () {
            folding = false;
            initialFolding = false;

            if (_this2.options.animation) {
              multiDragElements.forEach(function (multiDragElement) {
                unsetRect(multiDragElement);
              });
            } // Remove all auxiliary multidrag items from el, if sorting enabled


            if (_this2.options.sort) {
              removeMultiDragElements();
            }
          });
        },
        dragOver: function dragOver(_ref8) {
          var target = _ref8.target,
              completed = _ref8.completed,
              cancel = _ref8.cancel;

          if (folding && ~multiDragElements.indexOf(target)) {
            completed(false);
            cancel();
          }
        },
        revert: function revert(_ref9) {
          var fromSortable = _ref9.fromSortable,
              rootEl = _ref9.rootEl,
              sortable = _ref9.sortable,
              dragRect = _ref9.dragRect;

          if (multiDragElements.length > 1) {
            // Setup unfold animation
            multiDragElements.forEach(function (multiDragElement) {
              sortable.addAnimationState({
                target: multiDragElement,
                rect: folding ? getRect(multiDragElement) : dragRect
              });
              unsetRect(multiDragElement);
              multiDragElement.fromRect = dragRect;
              fromSortable.removeAnimationState(multiDragElement);
            });
            folding = false;
            insertMultiDragElements(!this.options.removeCloneOnHide, rootEl);
          }
        },
        dragOverCompleted: function dragOverCompleted(_ref10) {
          var sortable = _ref10.sortable,
              isOwner = _ref10.isOwner,
              insertion = _ref10.insertion,
              activeSortable = _ref10.activeSortable,
              parentEl = _ref10.parentEl,
              putSortable = _ref10.putSortable;
          var options = this.options;

          if (insertion) {
            // Clones must be hidden before folding animation to capture dragRectAbsolute properly
            if (isOwner) {
              activeSortable._hideClone();
            }

            initialFolding = false; // If leaving sort:false root, or already folding - Fold to new location

            if (options.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable)) {
              // Fold: Set all multi drag elements's rects to dragEl's rect when multi-drag elements are invisible
              var dragRectAbsolute = getRect(dragEl$1, false, true, true);
              multiDragElements.forEach(function (multiDragElement) {
                if (multiDragElement === dragEl$1) return;
                setRect(multiDragElement, dragRectAbsolute); // Move element(s) to end of parentEl so that it does not interfere with multi-drag clones insertion if they are inserted
                // while folding, and so that we can capture them again because old sortable will no longer be fromSortable

                parentEl.appendChild(multiDragElement);
              });
              folding = true;
            } // Clones must be shown (and check to remove multi drags) after folding when interfering multiDragElements are moved out


            if (!isOwner) {
              // Only remove if not folding (folding will remove them anyways)
              if (!folding) {
                removeMultiDragElements();
              }

              if (multiDragElements.length > 1) {
                var clonesHiddenBefore = clonesHidden;

                activeSortable._showClone(sortable); // Unfold animation for clones if showing from hidden


                if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) {
                  multiDragClones.forEach(function (clone) {
                    activeSortable.addAnimationState({
                      target: clone,
                      rect: clonesFromRect
                    });
                    clone.fromRect = clonesFromRect;
                    clone.thisAnimationDuration = null;
                  });
                }
              } else {
                activeSortable._showClone(sortable);
              }
            }
          }
        },
        dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
          var dragRect = _ref11.dragRect,
              isOwner = _ref11.isOwner,
              activeSortable = _ref11.activeSortable;
          multiDragElements.forEach(function (multiDragElement) {
            multiDragElement.thisAnimationDuration = null;
          });

          if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
            clonesFromRect = _extends({}, dragRect);
            var dragMatrix = matrix(dragEl$1, true);
            clonesFromRect.top -= dragMatrix.f;
            clonesFromRect.left -= dragMatrix.e;
          }
        },
        dragOverAnimationComplete: function dragOverAnimationComplete() {
          if (folding) {
            folding = false;
            removeMultiDragElements();
          }
        },
        drop: function drop(_ref12) {
          var evt = _ref12.originalEvent,
              rootEl = _ref12.rootEl,
              parentEl = _ref12.parentEl,
              sortable = _ref12.sortable,
              dispatchSortableEvent = _ref12.dispatchSortableEvent,
              oldIndex = _ref12.oldIndex,
              putSortable = _ref12.putSortable;
          var toSortable = putSortable || this.sortable;
          if (!evt) return;
          var options = this.options,
              children = parentEl.children; // Multi-drag selection

          if (!dragStarted) {
            if (options.multiDragKey && !this.multiDragKeyDown) {
              this._deselectMultiDrag();
            }

            toggleClass(dragEl$1, options.selectedClass, !~multiDragElements.indexOf(dragEl$1));

            if (!~multiDragElements.indexOf(dragEl$1)) {
              multiDragElements.push(dragEl$1);
              dispatchEvent({
                sortable: sortable,
                rootEl: rootEl,
                name: 'select',
                targetEl: dragEl$1,
                originalEvt: evt
              }); // Modifier activated, select from last to dragEl

              if (evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {
                var lastIndex = index(lastMultiDragSelect),
                    currentIndex = index(dragEl$1);

                if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
                  // Must include lastMultiDragSelect (select it), in case modified selection from no selection
                  // (but previous selection existed)
                  var n, i;

                  if (currentIndex > lastIndex) {
                    i = lastIndex;
                    n = currentIndex;
                  } else {
                    i = currentIndex;
                    n = lastIndex + 1;
                  }

                  for (; i < n; i++) {
                    if (~multiDragElements.indexOf(children[i])) continue;
                    toggleClass(children[i], options.selectedClass, true);
                    multiDragElements.push(children[i]);
                    dispatchEvent({
                      sortable: sortable,
                      rootEl: rootEl,
                      name: 'select',
                      targetEl: children[i],
                      originalEvt: evt
                    });
                  }
                }
              } else {
                lastMultiDragSelect = dragEl$1;
              }

              multiDragSortable = toSortable;
            } else {
              multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);
              lastMultiDragSelect = null;
              dispatchEvent({
                sortable: sortable,
                rootEl: rootEl,
                name: 'deselect',
                targetEl: dragEl$1,
                originalEvt: evt
              });
            }
          } // Multi-drag drop


          if (dragStarted && this.isMultiDrag) {
            // Do not "unfold" after around dragEl if reverted
            if ((parentEl[expando].options.sort || parentEl !== rootEl) && multiDragElements.length > 1) {
              var dragRect = getRect(dragEl$1),
                  multiDragIndex = index(dragEl$1, ':not(.' + this.options.selectedClass + ')');
              if (!initialFolding && options.animation) dragEl$1.thisAnimationDuration = null;
              toSortable.captureAnimationState();

              if (!initialFolding) {
                if (options.animation) {
                  dragEl$1.fromRect = dragRect;
                  multiDragElements.forEach(function (multiDragElement) {
                    multiDragElement.thisAnimationDuration = null;

                    if (multiDragElement !== dragEl$1) {
                      var rect = folding ? getRect(multiDragElement) : dragRect;
                      multiDragElement.fromRect = rect; // Prepare unfold animation

                      toSortable.addAnimationState({
                        target: multiDragElement,
                        rect: rect
                      });
                    }
                  });
                } // Multi drag elements are not necessarily removed from the DOM on drop, so to reinsert
                // properly they must all be removed


                removeMultiDragElements();
                multiDragElements.forEach(function (multiDragElement) {
                  if (children[multiDragIndex]) {
                    parentEl.insertBefore(multiDragElement, children[multiDragIndex]);
                  } else {
                    parentEl.appendChild(multiDragElement);
                  }

                  multiDragIndex++;
                }); // If initial folding is done, the elements may have changed position because they are now
                // unfolding around dragEl, even though dragEl may not have his index changed, so update event
                // must be fired here as Sortable will not.

                if (oldIndex === index(dragEl$1)) {
                  var update = false;
                  multiDragElements.forEach(function (multiDragElement) {
                    if (multiDragElement.sortableIndex !== index(multiDragElement)) {
                      update = true;
                      return;
                    }
                  });

                  if (update) {
                    dispatchSortableEvent('update');
                  }
                }
              } // Must be done after capturing individual rects (scroll bar)


              multiDragElements.forEach(function (multiDragElement) {
                unsetRect(multiDragElement);
              });
              toSortable.animateAll();
            }

            multiDragSortable = toSortable;
          } // Remove clones if necessary


          if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
            multiDragClones.forEach(function (clone) {
              clone.parentNode && clone.parentNode.removeChild(clone);
            });
          }
        },
        nullingGlobal: function nullingGlobal() {
          this.isMultiDrag = dragStarted = false;
          multiDragClones.length = 0;
        },
        destroyGlobal: function destroyGlobal() {
          this._deselectMultiDrag();

          off(document, 'pointerup', this._deselectMultiDrag);
          off(document, 'mouseup', this._deselectMultiDrag);
          off(document, 'touchend', this._deselectMultiDrag);
          off(document, 'keydown', this._checkKeyDown);
          off(document, 'keyup', this._checkKeyUp);
        },
        _deselectMultiDrag: function _deselectMultiDrag(evt) {
          if (typeof dragStarted !== "undefined" && dragStarted) return; // Only deselect if selection is in this sortable

          if (multiDragSortable !== this.sortable) return; // Only deselect if target is not item in this sortable

          if (evt && closest(evt.target, this.options.draggable, this.sortable.el, false)) return; // Only deselect if left click

          if (evt && evt.button !== 0) return;

          while (multiDragElements.length) {
            var el = multiDragElements[0];
            toggleClass(el, this.options.selectedClass, false);
            multiDragElements.shift();
            dispatchEvent({
              sortable: this.sortable,
              rootEl: this.sortable.el,
              name: 'deselect',
              targetEl: el,
              originalEvt: evt
            });
          }
        },
        _checkKeyDown: function _checkKeyDown(evt) {
          if (evt.key === this.options.multiDragKey) {
            this.multiDragKeyDown = true;
          }
        },
        _checkKeyUp: function _checkKeyUp(evt) {
          if (evt.key === this.options.multiDragKey) {
            this.multiDragKeyDown = false;
          }
        }
      };
      return _extends(MultiDrag, {
        // Static methods & properties
        pluginName: 'multiDrag',
        utils: {
          /**
           * Selects the provided multi-drag item
           * @param  {HTMLElement} el    The element to be selected
           */
          select: function select(el) {
            var sortable = el.parentNode[expando];
            if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el)) return;

            if (multiDragSortable && multiDragSortable !== sortable) {
              multiDragSortable.multiDrag._deselectMultiDrag();

              multiDragSortable = sortable;
            }

            toggleClass(el, sortable.options.selectedClass, true);
            multiDragElements.push(el);
          },

          /**
           * Deselects the provided multi-drag item
           * @param  {HTMLElement} el    The element to be deselected
           */
          deselect: function deselect(el) {
            var sortable = el.parentNode[expando],
                index = multiDragElements.indexOf(el);
            if (!sortable || !sortable.options.multiDrag || !~index) return;
            toggleClass(el, sortable.options.selectedClass, false);
            multiDragElements.splice(index, 1);
          }
        },
        eventProperties: function eventProperties() {
          var _this3 = this;

          var oldIndicies = [],
              newIndicies = [];
          multiDragElements.forEach(function (multiDragElement) {
            oldIndicies.push({
              multiDragElement: multiDragElement,
              index: multiDragElement.sortableIndex
            }); // multiDragElements will already be sorted if folding

            var newIndex;

            if (folding && multiDragElement !== dragEl$1) {
              newIndex = -1;
            } else if (folding) {
              newIndex = index(multiDragElement, ':not(.' + _this3.options.selectedClass + ')');
            } else {
              newIndex = index(multiDragElement);
            }

            newIndicies.push({
              multiDragElement: multiDragElement,
              index: newIndex
            });
          });
          return {
            items: _toConsumableArray(multiDragElements),
            clones: [].concat(multiDragClones),
            oldIndicies: oldIndicies,
            newIndicies: newIndicies
          };
        },
        optionListeners: {
          multiDragKey: function multiDragKey(key) {
            key = key.toLowerCase();

            if (key === 'ctrl') {
              key = 'Control';
            } else if (key.length > 1) {
              key = key.charAt(0).toUpperCase() + key.substr(1);
            }

            return key;
          }
        }
      });
    }

    function insertMultiDragElements(clonesInserted, rootEl) {
      multiDragElements.forEach(function (multiDragElement, i) {
        var target = rootEl.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];

        if (target) {
          rootEl.insertBefore(multiDragElement, target);
        } else {
          rootEl.appendChild(multiDragElement);
        }
      });
    }
    /**
     * Insert multi-drag clones
     * @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted
     * @param  {HTMLElement} rootEl
     */


    function insertMultiDragClones(elementsInserted, rootEl) {
      multiDragClones.forEach(function (clone, i) {
        var target = rootEl.children[clone.sortableIndex + (elementsInserted ? Number(i) : 0)];

        if (target) {
          rootEl.insertBefore(clone, target);
        } else {
          rootEl.appendChild(clone);
        }
      });
    }

    function removeMultiDragElements() {
      multiDragElements.forEach(function (multiDragElement) {
        if (multiDragElement === dragEl$1) return;
        multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
      });
    }

    Sortable.mount(new AutoScrollPlugin());
    Sortable.mount(Remove, Revert);
    /* harmony default export */

    __webpack_exports__["default"] = Sortable;
    /***/
  },

  /***/
  "./src/app/enum/app_enum.ts":
  /*!**********************************!*\
    !*** ./src/app/enum/app_enum.ts ***!
    \**********************************/

  /*! exports provided: SpeakingQuestionName, SpeakingIconPathName, WritingQuestionName, WritingIconPathName, ListeningCode, WritingCode, ReadingCode, SpeakingCode */

  /***/
  function srcAppEnumApp_enumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeakingQuestionName", function () {
      return SpeakingQuestionName;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeakingIconPathName", function () {
      return SpeakingIconPathName;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WritingQuestionName", function () {
      return WritingQuestionName;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WritingIconPathName", function () {
      return WritingIconPathName;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListeningCode", function () {
      return ListeningCode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WritingCode", function () {
      return WritingCode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReadingCode", function () {
      return ReadingCode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeakingCode", function () {
      return SpeakingCode;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var SpeakingQuestionName;

    (function (SpeakingQuestionName) {
      SpeakingQuestionName["ReadAloud"] = "Read Aloud";
      SpeakingQuestionName["RepeatSentence"] = "Repeat Sentence";
      SpeakingQuestionName["DescribeImage"] = "Describe Image";
      SpeakingQuestionName["RetellLecture"] = "Retell Lecture";
      SpeakingQuestionName["AnswerShortQuestion"] = "Answer Short Question";
    })(SpeakingQuestionName || (SpeakingQuestionName = {}));

    var SpeakingIconPathName;

    (function (SpeakingIconPathName) {
      SpeakingIconPathName["ReadAloud"] = "read-aloud";
      SpeakingIconPathName["RepeatSentence"] = "repeat-sentence";
      SpeakingIconPathName["DescribeImage"] = "describe-image";
      SpeakingIconPathName["RetellLecture"] = "retell-lecture";
      SpeakingIconPathName["AnswerShortQuestion"] = "answer-short-question";
    })(SpeakingIconPathName || (SpeakingIconPathName = {}));

    var WritingQuestionName;

    (function (WritingQuestionName) {
      WritingQuestionName["EssayWriting"] = "Essay Writing";
      WritingQuestionName["SummarizeWrittenText"] = "Summarize Written Text";
      WritingQuestionName["WritingTest"] = "Writing Test";
      WritingQuestionName["Evaluation"] = "Evaluation";
    })(WritingQuestionName || (WritingQuestionName = {}));

    var WritingIconPathName;

    (function (WritingIconPathName) {
      WritingIconPathName["EssayWriting"] = "essay-writing";
      WritingIconPathName["SummarizeWrittenText"] = "summary-written-text";
      WritingIconPathName["WritingTest"] = "writing-test";
      WritingIconPathName["Evaluation"] = "evaluation";
    })(WritingIconPathName || (WritingIconPathName = {}));

    var ListeningCode;

    (function (ListeningCode) {
      ListeningCode["L001"] = "L001";
      ListeningCode["L002"] = "L002";
      ListeningCode["L003"] = "L003";
      ListeningCode["L004"] = "L004";
      ListeningCode["L005"] = "L005";
      ListeningCode["L006"] = "L006";
      ListeningCode["L007"] = "L007";
      ListeningCode["L008"] = "L008";
    })(ListeningCode || (ListeningCode = {}));

    var WritingCode;

    (function (WritingCode) {
      WritingCode["W001"] = "W001";
      WritingCode["W002"] = "W002";
    })(WritingCode || (WritingCode = {}));

    var ReadingCode;

    (function (ReadingCode) {
      ReadingCode["R001"] = "R001";
      ReadingCode["R002"] = "R002";
      ReadingCode["R003"] = "R003";
      ReadingCode["R004"] = "R004";
      ReadingCode["R005"] = "R005";
    })(ReadingCode || (ReadingCode = {}));

    var SpeakingCode;

    (function (SpeakingCode) {
      SpeakingCode["S001"] = "S001";
      SpeakingCode["S002"] = "S002";
      SpeakingCode["S003"] = "S003";
      SpeakingCode["S004"] = "S004";
      SpeakingCode["S005"] = "S005";
    })(SpeakingCode || (SpeakingCode = {}));
    /***/

  },

  /***/
  "./src/app/shared/models/ListeningModel.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/models/ListeningModel.ts ***!
    \*************************************************/

  /*! exports provided: Dictation, DictationEvaluate, FIB, FIBEvaluate, MCQEvaluate, SummaryListeningEvaluate, HighlightCorrectSummary, Option, HighlightIncorrectWord, MCQ, SelectMissingWords, SummaryEvaluation, SummaryListening */

  /***/
  function srcAppSharedModelsListeningModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Dictation", function () {
      return Dictation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DictationEvaluate", function () {
      return DictationEvaluate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FIB", function () {
      return FIB;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FIBEvaluate", function () {
      return FIBEvaluate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MCQEvaluate", function () {
      return MCQEvaluate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SummaryListeningEvaluate", function () {
      return SummaryListeningEvaluate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HighlightCorrectSummary", function () {
      return HighlightCorrectSummary;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Option", function () {
      return Option;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HighlightIncorrectWord", function () {
      return HighlightIncorrectWord;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MCQ", function () {
      return MCQ;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectMissingWords", function () {
      return SelectMissingWords;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SummaryEvaluation", function () {
      return SummaryEvaluation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SummaryListening", function () {
      return SummaryListening;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    class Dictation {}

    class DictationEvaluate {}

    class FIB {}

    class FIBEvaluate {}

    class MCQEvaluate {}

    class SummaryListeningEvaluate {}

    class HighlightCorrectSummary {}

    class Option {}

    class HighlightIncorrectWord {}

    class MCQ {}

    class SelectMissingWords {}

    class SummaryEvaluation {}

    class SummaryListening {}
    /***/

  },

  /***/
  "./src/app/shared/models/ReadingModel.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/models/ReadingModel.ts ***!
    \***********************************************/

  /*! exports provided: FIBDrag, DropDown, MCq, Reorder, ReorderEvaluate, FIBDropDownEvaluate, FIBDragEvaluate, MCQEvaluate, Option, ReadingOption, ReorderAnswer */

  /***/
  function srcAppSharedModelsReadingModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FIBDrag", function () {
      return FIBDrag;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropDown", function () {
      return DropDown;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MCq", function () {
      return MCq;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Reorder", function () {
      return Reorder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReorderEvaluate", function () {
      return ReorderEvaluate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FIBDropDownEvaluate", function () {
      return FIBDropDownEvaluate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FIBDragEvaluate", function () {
      return FIBDragEvaluate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MCQEvaluate", function () {
      return MCQEvaluate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Option", function () {
      return Option;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReadingOption", function () {
      return ReadingOption;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReorderAnswer", function () {
      return ReorderAnswer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    class FIBDrag {}

    class DropDown {}

    class MCq {}

    class Reorder {}

    class ReorderEvaluate {}

    class FIBDropDownEvaluate {}

    class FIBDragEvaluate {}

    class MCQEvaluate {}

    class Option {}

    class ReadingOption {}

    class ReorderAnswer {}
    /***/

  },

  /***/
  "./src/app/shared/models/SpeakingModel.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/models/SpeakingModel.ts ***!
    \************************************************/

  /*! exports provided: Comment, DescribeImage, QuestionComment, Range, Gender, Random, ReadAloud, RepeatSentence, Word, RetellLecture, ShortQuestion, SpeakingEvaluate */

  /***/
  function srcAppSharedModelsSpeakingModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Comment", function () {
      return Comment;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DescribeImage", function () {
      return DescribeImage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionComment", function () {
      return QuestionComment;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Range", function () {
      return Range;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Gender", function () {
      return Gender;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Random", function () {
      return Random;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReadAloud", function () {
      return ReadAloud;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RepeatSentence", function () {
      return RepeatSentence;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Word", function () {
      return Word;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RetellLecture", function () {
      return RetellLecture;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShortQuestion", function () {
      return ShortQuestion;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeakingEvaluate", function () {
      return SpeakingEvaluate;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    class Comment {}

    class DescribeImage {}

    class QuestionComment {}

    class Range {}

    class Gender {}

    class Random {}

    class ReadAloud {}

    class RepeatSentence {}

    class Word {}

    class RetellLecture {}

    class ShortQuestion {}

    class SpeakingEvaluate {}
    /***/

  },

  /***/
  "./src/app/shared/models/WritingModel.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/models/WritingModel.ts ***!
    \***********************************************/

  /*! exports provided: EssayDetail, Essay_Structure, EssayEvaluation, EssaySubStructure, EssaySubEvaluate, EssayWriting, EssaySubWriting, SummaryEvaluation, SummaryWriting, SummaryDetail */

  /***/
  function srcAppSharedModelsWritingModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EssayDetail", function () {
      return EssayDetail;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Essay_Structure", function () {
      return Essay_Structure;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EssayEvaluation", function () {
      return EssayEvaluation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EssaySubStructure", function () {
      return EssaySubStructure;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EssaySubEvaluate", function () {
      return EssaySubEvaluate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EssayWriting", function () {
      return EssayWriting;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EssaySubWriting", function () {
      return EssaySubWriting;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SummaryEvaluation", function () {
      return SummaryEvaluation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SummaryWriting", function () {
      return SummaryWriting;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SummaryDetail", function () {
      return SummaryDetail;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    class EssayDetail {}

    class Essay_Structure {}

    class EssayEvaluation {}

    class EssaySubStructure {
      constructor(sk, mk) {
        this.structureKeywords = sk;
        this.maxKeyword = mk;
      }

      static create(sk, mk) {
        return new EssaySubStructure(sk, mk);
      }

    }

    class EssaySubEvaluate {
      constructor(sk, mk) {
        this.contents = sk;
        this.wordCount = mk;
      }

      static create(sk, mk) {
        return new EssaySubEvaluate(sk, mk);
      }

    }

    class EssayWriting {}

    class EssaySubWriting {
      constructor(contentKeywords, maxWordLimit, maxKeyword) {
        this.contentKeywords = contentKeywords;
        this.maxKeyword = maxKeyword;
        this.maxWordLimit = maxWordLimit;
      }

      static create(ck, max, mk) {
        return new EssaySubWriting(ck, max, mk);
      }

    }

    class SummaryEvaluation {}

    class SummaryWriting {}

    class SummaryDetail {}
    /***/

  },

  /***/
  "./src/app/shared/question-components/essay-question/essay-question.component.css":
  /*!****************************************************************************************!*\
    !*** ./src/app/shared/question-components/essay-question/essay-question.component.css ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedQuestionComponentsEssayQuestionEssayQuestionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* @import url('../../../../../assets/css/orderList-animation.css'); */\n\np {\n    -webkit-user-select: none;\n    -webkit-touch-callout: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n.col-md-12, .footer-button-block {\n    -webkit-animation: fadeIn 0.8s linear;\n    animation: fadeIn 0.8s linear;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n}\n\n@-webkit-keyframes fadeIn {\n    0% {\n        opacity: 0;\n        top: 800px;\n    }\n    75% {\n        opacity: 0.5;\n        top: 0px;\n    }\n    100% {\n        opacity: 1;\n        top: 0px;\n    }\n}\n\n@keyframes fadeIn {\n    0% {\n        opacity: 0;\n        top: 800px;\n    }\n    75% {\n        opacity: 0.5;\n        top: 0px;\n    }\n    100% {\n        opacity: 1;\n        top: 0px;\n    }\n}\n\n.list>div:nth-child(1) {\n    -webkit-animation-delay: 0.1s;\n    animation-delay: 0.1s;\n}\n\n.list>div:nth-child(2) {\n    -webkit-animation-delay: 0.2s;\n    animation-delay: 0.2s;\n}\n\n.list>div:nth-child(3) {\n    -webkit-animation-delay: 0.3s;\n    animation-delay: 0.3s;\n}\n\n.list>div:nth-child(4) {\n    -webkit-animation-delay: 0.4s;\n    animation-delay: 0.4s;\n}\n\n.list>div:nth-child(5) {\n    -webkit-animation-delay: 0.5s;\n    animation-delay: 0.5s;\n}\n\n.list>div:nth-child(6) {\n    -webkit-animation-delay: 0.6s;\n    animation-delay: 0.6s;\n}\n\n.list>div:nth-child(7) {\n    -webkit-animation-delay: 0.7s;\n    animation-delay: 0.7s;\n}\n\n.list>div:nth-child(8) {\n    -webkit-animation-delay: 0.8s;\n    animation-delay: 0.8s;\n}\n\n/* .list{\n    -webkit-animation: fadeIn 1.75s linear;\n    animation: fadeIn 1.75s linear;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n}\n\n\n@keyframes fadeIn {\n    0% {\n        opacity: 0;\n        top: 500px;\n    }\n    75% {\n        opacity: 0.5;\n        top: 0px;\n    }\n    100% {\n        opacity: 1;\n        top: 0;\n    }\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3F1ZXN0aW9uLWNvbXBvbmVudHMvZXNzYXktcXVlc3Rpb24vZXNzYXktcXVlc3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzRUFBc0U7O0FBRXRFO0lBQ0kseUJBQXlCO0lBQ3pCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0IsaUNBQWlDO0lBQ2pDLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLFVBQVU7SUFDZDtJQUNBO1FBQ0ksWUFBWTtRQUNaLFFBQVE7SUFDWjtJQUNBO1FBQ0ksVUFBVTtRQUNWLFFBQVE7SUFDWjtBQUNKOztBQWJBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsVUFBVTtJQUNkO0lBQ0E7UUFDSSxZQUFZO1FBQ1osUUFBUTtJQUNaO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsUUFBUTtJQUNaO0FBQ0o7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHFCQUFxQjtBQUN6Qjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUJHIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3F1ZXN0aW9uLWNvbXBvbmVudHMvZXNzYXktcXVlc3Rpb24vZXNzYXktcXVlc3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBpbXBvcnQgdXJsKCcuLi8uLi8uLi8uLi8uLi9hc3NldHMvY3NzL29yZGVyTGlzdC1hbmltYXRpb24uY3NzJyk7ICovXG5cbnAge1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uY29sLW1kLTEyLCAuZm9vdGVyLWJ1dHRvbi1ibG9jayB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiAwLjhzIGxpbmVhcjtcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjhzIGxpbmVhcjtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdG9wOiA4MDBweDtcbiAgICB9XG4gICAgNzUlIHtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICB0b3A6IDBweDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRvcDogMHB4O1xuICAgIH1cbn1cblxuLmxpc3Q+ZGl2Om50aC1jaGlsZCgxKSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMXM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjFzO1xufVxuXG4ubGlzdD5kaXY6bnRoLWNoaWxkKDIpIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4ycztcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XG59XG5cbi5saXN0PmRpdjpudGgtY2hpbGQoMykge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC4zcztcbn1cblxuLmxpc3Q+ZGl2Om50aC1jaGlsZCg0KSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNHM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xufVxuXG4ubGlzdD5kaXY6bnRoLWNoaWxkKDUpIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC41cztcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNXM7XG59XG5cbi5saXN0PmRpdjpudGgtY2hpbGQoNikge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC42cztcbn1cblxuLmxpc3Q+ZGl2Om50aC1jaGlsZCg3KSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuN3M7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjdzO1xufVxuXG4ubGlzdD5kaXY6bnRoLWNoaWxkKDgpIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC44cztcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuOHM7XG59XG5cbi8qIC5saXN0e1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gMS43NXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbjogZmFkZUluIDEuNzVzIGxpbmVhcjtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0b3A6IDUwMHB4O1xuICAgIH1cbiAgICA3NSUge1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgIHRvcDogMHB4O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdG9wOiAwO1xuICAgIH1cbn0gKi8iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/question-components/essay-question/essay-question.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/shared/question-components/essay-question/essay-question.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: EssayQuestionComponent */

  /***/
  function srcAppSharedQuestionComponentsEssayQuestionEssayQuestionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EssayQuestionComponent", function () {
      return EssayQuestionComponent;
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


    var _models_WritingModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @models/WritingModel */
    "./src/app/shared/models/WritingModel.ts");

    let EssayQuestionComponent = class EssayQuestionComponent {
      constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitEvaluation = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // array

        this.versionList = ["American English", "British English"]; // boolean

        this.submitted = false;
        this.isLoading = false;
      }

      ngOnInit() {}

      checkworkcount(val) {
        return val.length;
      }

      onSubmit() {
        this.isLoading = true;
        this.submitted = true;

        if (this.evaluationForm.invalid) {
          return;
        } else {
          let evaluate = new _models_WritingModel__WEBPACK_IMPORTED_MODULE_3__["EssayEvaluation"]();
          evaluate.version = this.evaluationForm.value.version;
          let intro = this.evaluationForm.value.userAnswer;
          evaluate.userAnswer = _models_WritingModel__WEBPACK_IMPORTED_MODULE_3__["EssaySubEvaluate"].create(intro, intro.length); // let body1 = this.evaluationForm.value.body1;
          // evaluate.body1 = EssaySubEvaluate.create(body1, body1.length);
          // let body2 = this.evaluationForm.value.body2;
          // evaluate.body2 = EssaySubEvaluate.create(body2, body2.length);
          // let conclusion = this.evaluationForm.value.conclusion;
          // evaluate.conclusion = EssaySubEvaluate.create(conclusion, conclusion.length);

          evaluate.essayId = this.essayDetail.essayId;
          evaluate.questionType = this.essayDetail.questionType;
          this.essayDetail = undefined;
          this.submitEvaluation.emit(evaluate);
        }
      }

      get f() {
        return this.evaluationForm.controls;
      }

      countWord(str) {
        return str.trim().replace(/\n/, "\n").split(/\s+/).length;
      }

      ngOnChanges(changes) {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        this.evaluationForm = this.formBuilder.group({
          version: ["American English", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          userAnswer: [""]
        });
        setTimeout(() => {
          this.isLoading = false;
        }, 100);
      }

    };

    EssayQuestionComponent.ctorParameters = () => [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], EssayQuestionComponent.prototype, "submitEvaluation", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EssayQuestionComponent.prototype, "isNext", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EssayQuestionComponent.prototype, "essayDetail", void 0);
    EssayQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'essay-question',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./essay-question.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/question-components/essay-question/essay-question.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./essay-question.component.css */
      "./src/app/shared/question-components/essay-question/essay-question.component.css")).default]
    })], EssayQuestionComponent);
    /***/
  },

  /***/
  "./src/app/shared/question-components/evaluation-score/evaluation-score.component.css":
  /*!********************************************************************************************!*\
    !*** ./src/app/shared/question-components/evaluation-score/evaluation-score.component.css ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedQuestionComponentsEvaluationScoreEvaluationScoreComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n.set-width {\n    width: 150px;\n}\n\n.table-wrapper {\n    margin-top: 30px;\n}\n\n.user-info-text {\n    color: var(--text-dark-color);\n    font-weight: 500;\n    padding-left: .5rem !important;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.question-text {\n    color: var(--text-dark-color);\n    font-weight: 500;\n}\n\n.score-box {\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    background-color: var(--writing-color);\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n}\n\n.score-box>p {\n    color: white;\n    font-weight: 600;\n    font-size: 24px;\n    margin-bottom: 0;\n}\n\n/* table */\n\ntable.table-score-responsive {\n    display: table !important;\n    width: 100%;\n    border-spacing: 0 10px;\n    border-collapse: collapse;\n}\n\ntable.table-score-responsive>thead>tr>th {\n    background-color: var(--writing-color);\n    color: var(--text-light-color);\n    border-right: solid 2px #ffffff;\n    border-radius: 0;\n    padding: 6px 10px;\n    font-weight: 500;\n    text-align: center;\n}\n\ntable.table-score-responsive>tbody>tr>td {\n    color: #001c00;\n    background-color: #fdf2e9;\n    border-right: solid 2px #ffffff;\n    border-radius: unset !important;\n    padding: 20px;\n}\n\ntable.table-score-responsive>tbody>tr {\n    border-bottom: solid 2px #ffffff;\n}\n\ntable.table-score-responsive>tbody>tr:last-child {\n    border-bottom: unset !important;\n}\n\ntable.table-score-responsive>tbody>tr>td:last-child, .dark-role>td:last-child {\n    border-right: unset;\n}\n\n.dark-role>td {\n    background-color: var(--text-fade-color) !important;\n    color: var(--text-light-color) !important;\n    text-align: center;\n    padding: 10px;\n    font-weight: 500;\n    border-bottom: solid 2px #a1a1a1 !important;\n    border-right: solid 2px #a1a1a1 !important;\n}\n\n.red-role>td {\n    background-color: #d31912 !important;\n    color: var(--text-light-color) !important;\n    text-align: center;\n    padding: 10px;\n    font-weight: 500;\n    border-bottom: none !important;\n}\n\n.white-role>td {\n    background-color: white !important;\n    color: var(--text-dark-color) !important;\n    text-align: center;\n    padding: 10px;\n    font-weight: 500;\n}\n\n.feedback-title {\n    background-color: #d31912;\n    text-align: center;\n    font-weight: 500;\n    color: white;\n    padding: 10px;\n    margin-top: 16px;\n}\n\n.feedback-text {\n    color: var(--text-dark-color);\n    background-color: white;\n    padding: 10px;\n    margin-bottom: 16px;\n}\n\n.advise-title {\n    background-color: var(--writing-color);\n    color: white;\n    font-weight: 500;\n    padding: 10px;\n    margin-top: 16px;\n    text-align: center;\n}\n\n.advise-text {\n    color: var(--text-dark-color);\n    background-color: white;\n    padding: 10px;\n}\n\n.text-center {\n    text-align: center !important;\n    font-weight: 600;\n}\n\n@media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {\n    .table-wrapper {\n        overflow-x: auto;\n        background-color: white;\n        padding: 20px;\n    }\n\n    table.table-score-responsive {\n        max-width: -webkit-fit-content;\n        max-width: -moz-fit-content;\n        max-width: fit-content;\n        margin: 0 auto;\n        overflow-x: auto;\n        white-space: nowrap;\n    }\n}\n\n.question-text,* {\n    white-space: pre-line;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL3dyaXRpbmctZXZhbHVhdGUuY3NzIiwic3JjL2FwcC9zaGFyZWQvcXVlc3Rpb24tY29tcG9uZW50cy9ldmFsdWF0aW9uLXNjb3JlL2V2YWx1YXRpb24tc2NvcmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIseUJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQSxVQUFVOztBQUVWO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLDhCQUE4QjtJQUM5QiwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QiwrQkFBK0I7SUFDL0IsK0JBQStCO0lBQy9CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtREFBbUQ7SUFDbkQseUNBQXlDO0lBQ3pDLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLDJDQUEyQztJQUMzQywwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMseUNBQXlDO0lBQ3pDLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyx3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLHVCQUF1QjtRQUN2QixhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksOEJBQXNCO1FBQXRCLDJCQUFzQjtRQUF0QixzQkFBc0I7UUFDdEIsY0FBYztRQUNkLGdCQUFnQjtRQUNoQixtQkFBbUI7SUFDdkI7QUFDSjs7QUN6SkE7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvcXVlc3Rpb24tY29tcG9uZW50cy9ldmFsdWF0aW9uLXNjb3JlL2V2YWx1YXRpb24tc2NvcmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnNldC13aWR0aCB7XG4gICAgd2lkdGg6IDE1MHB4O1xufVxuXG4udGFibGUtd3JhcHBlciB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnVzZXItaW5mby10ZXh0IHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrLWNvbG9yKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHBhZGRpbmctbGVmdDogLjVyZW0gIWltcG9ydGFudDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5xdWVzdGlvbi10ZXh0IHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrLWNvbG9yKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc2NvcmUtYm94IHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td3JpdGluZy1jb2xvcik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2NvcmUtYm94PnAge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4vKiB0YWJsZSAqL1xuXG50YWJsZS50YWJsZS1zY29yZS1yZXNwb25zaXZlIHtcbiAgICBkaXNwbGF5OiB0YWJsZSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAwIDEwcHg7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxudGFibGUudGFibGUtc2NvcmUtcmVzcG9uc2l2ZT50aGVhZD50cj50aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td3JpdGluZy1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQtY29sb3IpO1xuICAgIGJvcmRlci1yaWdodDogc29saWQgMnB4ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudGFibGUudGFibGUtc2NvcmUtcmVzcG9uc2l2ZT50Ym9keT50cj50ZCB7XG4gICAgY29sb3I6ICMwMDFjMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZjJlOTtcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDJweCAjZmZmZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxudGFibGUudGFibGUtc2NvcmUtcmVzcG9uc2l2ZT50Ym9keT50ciB7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4ICNmZmZmZmY7XG59XG5cbnRhYmxlLnRhYmxlLXNjb3JlLXJlc3BvbnNpdmU+dGJvZHk+dHI6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogdW5zZXQgIWltcG9ydGFudDtcbn1cblxudGFibGUudGFibGUtc2NvcmUtcmVzcG9uc2l2ZT50Ym9keT50cj50ZDpsYXN0LWNoaWxkLCAuZGFyay1yb2xlPnRkOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1yaWdodDogdW5zZXQ7XG59XG5cbi5kYXJrLXJvbGU+dGQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtZmFkZS1jb2xvcikgIWltcG9ydGFudDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodC1jb2xvcikgIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjYTFhMWExICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAycHggI2ExYTFhMSAhaW1wb3J0YW50O1xufVxuXG4ucmVkLXJvbGU+dGQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMzE5MTIgIWltcG9ydGFudDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodC1jb2xvcikgIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLndoaXRlLXJvbGU+dGQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHZhcigtLXRleHQtZGFyay1jb2xvcikgIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZmVlZGJhY2stdGl0bGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMzE5MTI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLmZlZWRiYWNrLXRleHQge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmstY29sb3IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLmFkdmlzZS10aXRsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td3JpdGluZy1jb2xvcik7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFkdmlzZS10ZXh0IHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrLWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4udGV4dC1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpLCAobWluLWRldmljZS13aWR0aDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSB7XG4gICAgLnRhYmxlLXdyYXBwZXIge1xuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICB9XG5cbiAgICB0YWJsZS50YWJsZS1zY29yZS1yZXNwb25zaXZlIHtcbiAgICAgICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxufSIsIkBpbXBvcnQgdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvY3NzL3dyaXRpbmctZXZhbHVhdGUuY3NzJyk7XG5cbi5xdWVzdGlvbi10ZXh0LCoge1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/question-components/evaluation-score/evaluation-score.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/shared/question-components/evaluation-score/evaluation-score.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: EvaluationScoreComponent */

  /***/
  function srcAppSharedQuestionComponentsEvaluationScoreEvaluationScoreComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EvaluationScoreComponent", function () {
      return EvaluationScoreComponent;
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


    var _core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @core/http/serviceIndex */
    "./src/app/core/http/serviceIndex.ts");

    let EvaluationScoreComponent = class EvaluationScoreComponent {
      constructor(_service) {
        this._service = _service;
        this.test = "<div>At the outset, there are numerous reasons why television has some negative aspects, but the most alarming one lies in the fact that <span class='marked'>wtching</span> television for longer hours makes children less productive, and this can be a contributing factor to less interest in social relation. For instance research in this area invariably shows that fifty percent of children who spent more time watching television <span class='marked'>doesnt</span> have good <span class='marked'>scial</span> relation <span class='marked'>in future</span>. Therefore, the adverse impact of over watching <span class='marked'>televsion</span> <span class='marked'>shold</span> not be <span class='marked'>ignred</span></div>";
      }

      ngOnInit() {
        let intro = document.getElementById("intro");
        intro.append(this._service.stringToEl(this.scoreData.userAnswer)); // let body1=document.getElementById("body1");
        // body1.append(this._service.stringToEl(this.scoreData.body1));
        // let body2=document.getElementById("body2");
        // body2.append(this._service.stringToEl(this.scoreData.body2));
        // let conclu=document.getElementById("conclusion");
        // conclu.append(this._service.stringToEl(this.scoreData.conclusion));

        if (this.scoreData.adviseContent) {
          let adviseContent = document.getElementById("essay-content");
          adviseContent.appendChild(this._service.stringToEl("<div>" + this.scoreData.adviseContent + "</div>"));
        }
      }

    };

    EvaluationScoreComponent.ctorParameters = () => [{
      type: _core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EvaluationScoreComponent.prototype, "scoreData", void 0);
    EvaluationScoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'evaluation-score',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./evaluation-score.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/question-components/evaluation-score/evaluation-score.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./evaluation-score.component.css */
      "./src/app/shared/question-components/evaluation-score/evaluation-score.component.css")).default]
    })], EvaluationScoreComponent);
    /***/
  },

  /***/
  "./src/app/shared/question-components/listening-question/listening-question.component.css":
  /*!************************************************************************************************!*\
    !*** ./src/app/shared/question-components/listening-question/listening-question.component.css ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedQuestionComponentsListeningQuestionListeningQuestionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\nli.list-group-item {\n    position: relative;\n    display: block;\n    border: 1px solid hotpink;\n    margin-bottom: 5px;\n    padding: 10px;\n    text-align: center;\n    /* -webkit-animation: fadeIn 0.5s linear;\n    animation: fadeIn 0.5s linear;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both; */\n}\n\n.mcq-list{\n    -webkit-animation: fadeIn 0.5s linear;\n    animation: fadeIn 0.5s linear;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n}\n\n.list-group,.question,.drop-container,.anni-fadeinout{\n    -webkit-animation: fadeIn2 0.6s linear;\n    animation: fadeIn2 0.6s linear;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n}\n\n/* li:nth-child(1) {\n    -webkit-animation-delay: 0.25s;\n    animation-delay: 0.25s;\n}\n\nli:nth-child(2) {\n    -webkit-animation-delay: 0.5s;\n    animation-delay: 0.5s;\n}\n\nli:nth-child(3) {\n    -webkit-animation-delay: 0.75s;\n    animation-delay: 0.75s;\n}\n\nli:nth-child(4) {\n    -webkit-animation-delay: 1s;\n    animation-delay: 1s;\n}\n\nli:nth-child(5) {\n    -webkit-animation-delay: 1.25s;\n    animation-delay: 1.25s;\n} */\n\n@-webkit-keyframes fadeIn {\n    0% {\n        opacity: 0;\n        top: 100px;\n    }\n    75% {\n        opacity: 0.5;\n        top: 0px;\n    }\n    100% {\n        opacity: 1;\n        top: 0;\n    }\n}\n\n@keyframes fadeIn {\n    0% {\n        opacity: 0;\n        top: 100px;\n    }\n    75% {\n        opacity: 0.5;\n        top: 0px;\n    }\n    100% {\n        opacity: 1;\n        top: 0;\n    }\n}\n\n@-webkit-keyframes fadeIn2 {\n    0% {\n        margin-top: 600px;\n        opacity: 0;\n    }\n    75% {\n        opacity: 1;\n        margin-top: 0.5px;\n    }\n    100% {\n        opacity: 1;\n        margin-top: 0px;\n    }\n}\n\n@keyframes fadeIn2 {\n    0% {\n        margin-top: 600px;\n        opacity: 0;\n    }\n    75% {\n        opacity: 1;\n        margin-top: 0.5px;\n    }\n    100% {\n        opacity: 1;\n        margin-top: 0px;\n    }\n}\n\nli.list-group-item:after {\n    position: absolute;\n    right: 0;\n    left: auto;\n    -webkit-transition: 0.3s;\n    transition: 0.3s;\n    content: \"\";\n    width: 0;\n    bottom: 0;\n    height: 3px;\n    background: var(--half-bg-color);\n}\n\nli.list-group-item:hover {\n    cursor: pointer;\n}\n\nli.list-group-item:hover:after {\n    width: 100%;\n    left: 0;\n}\n\n.mcq_box:hover{\n    -webkit-animation: storm 0.7s ease-in-out both;\n            animation: storm 0.7s ease-in-out both;\n}\n\n.mcq_box:after {\n    position: absolute;\n    right: 0;\n    left: auto;\n    -webkit-transition: 0.6s;\n    transition: 0.6s;\n    content: \"\";\n    width: 0;\n    bottom: 0;\n    height: 3px;\n    background: var(--half-bg-color);\n}\n\n.mcq_box:hover:after {\n    width: 100%;\n    left: 0;\n}\n\nli.list-group-item:hover {\n    -webkit-animation: storm 0.7s ease-in-out both;\n            animation: storm 0.7s ease-in-out both;\n}\n\n/* li:hover span {\n    animation: storm 0.7s ease-in-out both;\n    animation-delay: 0.06s;\n  } */\n\n@-webkit-keyframes rotate {\n    0% {\n        -webkit-transform: rotate(0deg) translate3d(0, 0, 0);\n                transform: rotate(0deg) translate3d(0, 0, 0);\n    }\n    25% {\n        -webkit-transform: rotate(3deg) translate3d(0, 0, 0);\n                transform: rotate(3deg) translate3d(0, 0, 0);\n    }\n    50% {\n        -webkit-transform: rotate(-3deg) translate3d(0, 0, 0);\n                transform: rotate(-3deg) translate3d(0, 0, 0);\n    }\n    75% {\n        -webkit-transform: rotate(1deg) translate3d(0, 0, 0);\n                transform: rotate(1deg) translate3d(0, 0, 0);\n    }\n    100% {\n        -webkit-transform: rotate(0deg) translate3d(0, 0, 0);\n                transform: rotate(0deg) translate3d(0, 0, 0);\n    }\n}\n\n@keyframes rotate {\n    0% {\n        -webkit-transform: rotate(0deg) translate3d(0, 0, 0);\n                transform: rotate(0deg) translate3d(0, 0, 0);\n    }\n    25% {\n        -webkit-transform: rotate(3deg) translate3d(0, 0, 0);\n                transform: rotate(3deg) translate3d(0, 0, 0);\n    }\n    50% {\n        -webkit-transform: rotate(-3deg) translate3d(0, 0, 0);\n                transform: rotate(-3deg) translate3d(0, 0, 0);\n    }\n    75% {\n        -webkit-transform: rotate(1deg) translate3d(0, 0, 0);\n                transform: rotate(1deg) translate3d(0, 0, 0);\n    }\n    100% {\n        -webkit-transform: rotate(0deg) translate3d(0, 0, 0);\n                transform: rotate(0deg) translate3d(0, 0, 0);\n    }\n}\n\n@-webkit-keyframes storm {\n    0% {\n        -webkit-transform: translate3d(0, 0, 0) translateZ(0);\n                transform: translate3d(0, 0, 0) translateZ(0);\n    }\n    25% {\n        -webkit-transform: translate3d(4px, 0, 0) translateZ(0);\n                transform: translate3d(4px, 0, 0) translateZ(0);\n    }\n    50% {\n        -webkit-transform: translate3d(-3px, 0, 0) translateZ(0);\n                transform: translate3d(-3px, 0, 0) translateZ(0);\n    }\n    75% {\n        -webkit-transform: translate3d(2px, 0, 0) translateZ(0);\n                transform: translate3d(2px, 0, 0) translateZ(0);\n    }\n    100% {\n        -webkit-transform: translate3d(0, 0, 0) translateZ(0);\n                transform: translate3d(0, 0, 0) translateZ(0);\n    }\n}\n\n@keyframes storm {\n    0% {\n        -webkit-transform: translate3d(0, 0, 0) translateZ(0);\n                transform: translate3d(0, 0, 0) translateZ(0);\n    }\n    25% {\n        -webkit-transform: translate3d(4px, 0, 0) translateZ(0);\n                transform: translate3d(4px, 0, 0) translateZ(0);\n    }\n    50% {\n        -webkit-transform: translate3d(-3px, 0, 0) translateZ(0);\n                transform: translate3d(-3px, 0, 0) translateZ(0);\n    }\n    75% {\n        -webkit-transform: translate3d(2px, 0, 0) translateZ(0);\n                transform: translate3d(2px, 0, 0) translateZ(0);\n    }\n    100% {\n        -webkit-transform: translate3d(0, 0, 0) translateZ(0);\n                transform: translate3d(0, 0, 0) translateZ(0);\n    }\n}\n\ninput.fib-box {\n    box-shadow: var(--textbox-boxshadow);\n    border-radius: 4px;\n    margin: 5px;\n    text-align: center;\n  border: 0;\n  border-color: #ffffff;\n  color: var(--text-dark-color);\n}\n\n/* outline: 0; */\n\ninput.fib-box:focus,\ninput.fib-box:active{\n  background: #f2f2f2;\n  border-color: #CBD8CB !important;\n  outline: 0;\n  color: #495057;\n}\n\nspan{\n  line-height: 1.6;\n  cursor: pointer;\n}\n\n.highlight {\n  background: #FFD350;\n  color: #163374;\n}\n\n.score-box {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n}\n\n.summaryName {\n  text-align: center;\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 16px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL29yZGVyTGlzdC1hbmltYXRpb24uY3NzIiwic3JjL2FwcC9zaGFyZWQvcXVlc3Rpb24tY29tcG9uZW50cy9saXN0ZW5pbmctcXVlc3Rpb24vbGlzdGVuaW5nLXF1ZXN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCOzs7Z0NBRzRCO0FBQ2hDOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLDZCQUE2QjtJQUM3QixpQ0FBaUM7SUFDakMseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLDhCQUE4QjtJQUM5QixpQ0FBaUM7SUFDakMseUJBQXlCO0FBQzdCOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVCRzs7QUFFSDtJQUNJO1FBQ0ksVUFBVTtRQUNWLFVBQVU7SUFDZDtJQUNBO1FBQ0ksWUFBWTtRQUNaLFFBQVE7SUFDWjtJQUNBO1FBQ0ksVUFBVTtRQUNWLE1BQU07SUFDVjtBQUNKOztBQWJBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsVUFBVTtJQUNkO0lBQ0E7UUFDSSxZQUFZO1FBQ1osUUFBUTtJQUNaO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsTUFBTTtJQUNWO0FBQ0o7O0FBR0E7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQixVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7UUFDVixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLFVBQVU7UUFDVixlQUFlO0lBQ25CO0FBQ0o7O0FBYkE7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQixVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7UUFDVixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLFVBQVU7UUFDVixlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVix3QkFBZ0I7SUFBaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLE9BQU87QUFDWDs7QUFFQTtJQUNJLDhDQUFzQztZQUF0QyxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVix3QkFBZ0I7SUFBaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsT0FBTztBQUNYOztBQUVBO0lBQ0ksOENBQXNDO1lBQXRDLHNDQUFzQztBQUMxQzs7QUFFQTs7O0tBR0s7O0FBRUw7SUFDSTtRQUNJLG9EQUE0QztnQkFBNUMsNENBQTRDO0lBQ2hEO0lBQ0E7UUFDSSxvREFBNEM7Z0JBQTVDLDRDQUE0QztJQUNoRDtJQUNBO1FBQ0kscURBQTZDO2dCQUE3Qyw2Q0FBNkM7SUFDakQ7SUFDQTtRQUNJLG9EQUE0QztnQkFBNUMsNENBQTRDO0lBQ2hEO0lBQ0E7UUFDSSxvREFBNEM7Z0JBQTVDLDRDQUE0QztJQUNoRDtBQUNKOztBQWhCQTtJQUNJO1FBQ0ksb0RBQTRDO2dCQUE1Qyw0Q0FBNEM7SUFDaEQ7SUFDQTtRQUNJLG9EQUE0QztnQkFBNUMsNENBQTRDO0lBQ2hEO0lBQ0E7UUFDSSxxREFBNkM7Z0JBQTdDLDZDQUE2QztJQUNqRDtJQUNBO1FBQ0ksb0RBQTRDO2dCQUE1Qyw0Q0FBNEM7SUFDaEQ7SUFDQTtRQUNJLG9EQUE0QztnQkFBNUMsNENBQTRDO0lBQ2hEO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHFEQUE2QztnQkFBN0MsNkNBQTZDO0lBQ2pEO0lBQ0E7UUFDSSx1REFBK0M7Z0JBQS9DLCtDQUErQztJQUNuRDtJQUNBO1FBQ0ksd0RBQWdEO2dCQUFoRCxnREFBZ0Q7SUFDcEQ7SUFDQTtRQUNJLHVEQUErQztnQkFBL0MsK0NBQStDO0lBQ25EO0lBQ0E7UUFDSSxxREFBNkM7Z0JBQTdDLDZDQUE2QztJQUNqRDtBQUNKOztBQWhCQTtJQUNJO1FBQ0kscURBQTZDO2dCQUE3Qyw2Q0FBNkM7SUFDakQ7SUFDQTtRQUNJLHVEQUErQztnQkFBL0MsK0NBQStDO0lBQ25EO0lBQ0E7UUFDSSx3REFBZ0Q7Z0JBQWhELGdEQUFnRDtJQUNwRDtJQUNBO1FBQ0ksdURBQStDO2dCQUEvQywrQ0FBK0M7SUFDbkQ7SUFDQTtRQUNJLHFEQUE2QztnQkFBN0MsNkNBQTZDO0lBQ2pEO0FBQ0o7O0FDdktBO0lBQ0ksb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIsNkJBQTZCO0FBQy9COztBQUNFLGdCQUFnQjs7QUFJbEI7O0VBRUUsbUJBQW1CO0VBQ25CLGdDQUFnQztFQUNoQyxVQUFVO0VBQ1YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9xdWVzdGlvbi1jb21wb25lbnRzL2xpc3RlbmluZy1xdWVzdGlvbi9saXN0ZW5pbmctcXVlc3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5saS5saXN0LWdyb3VwLWl0ZW0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCBob3RwaW5rO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvKiAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDAuNXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNXMgbGluZWFyO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoOyAqL1xufVxuXG4ubWNxLWxpc3R7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiAwLjVzIGxpbmVhcjtcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjVzIGxpbmVhcjtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuLmxpc3QtZ3JvdXAsLnF1ZXN0aW9uLC5kcm9wLWNvbnRhaW5lciwuYW5uaS1mYWRlaW5vdXR7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbjIgMC42cyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uOiBmYWRlSW4yIDAuNnMgbGluZWFyO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuLyogbGk6bnRoLWNoaWxkKDEpIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4yNXM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjI1cztcbn1cblxubGk6bnRoLWNoaWxkKDIpIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC41cztcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNXM7XG59XG5cbmxpOm50aC1jaGlsZCgzKSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNzVzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC43NXM7XG59XG5cbmxpOm50aC1jaGlsZCg0KSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDFzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XG59XG5cbmxpOm50aC1jaGlsZCg1KSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDEuMjVzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMS4yNXM7XG59ICovXG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRvcDogMTAwcHg7XG4gICAgfVxuICAgIDc1JSB7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0b3A6IDA7XG4gICAgfVxufVxuXG5cbkBrZXlmcmFtZXMgZmFkZUluMiB7XG4gICAgMCUge1xuICAgICAgICBtYXJnaW4tdG9wOiA2MDBweDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgNzUlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgbWFyZ2luLXRvcDogMC41cHg7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgfVxufVxuXG5saS5saXN0LWdyb3VwLWl0ZW06YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB3aWR0aDogMDtcbiAgICBib3R0b206IDA7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taGFsZi1iZy1jb2xvcik7XG59XG5cbmxpLmxpc3QtZ3JvdXAtaXRlbTpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5saS5saXN0LWdyb3VwLWl0ZW06aG92ZXI6YWZ0ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxlZnQ6IDA7XG59XG5cbi5tY3FfYm94OmhvdmVye1xuICAgIGFuaW1hdGlvbjogc3Rvcm0gMC43cyBlYXNlLWluLW91dCBib3RoO1xufVxuXG4ubWNxX2JveDphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IGF1dG87XG4gICAgdHJhbnNpdGlvbjogMC42cztcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHdpZHRoOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oYWxmLWJnLWNvbG9yKTtcbn1cblxuLm1jcV9ib3g6aG92ZXI6YWZ0ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxlZnQ6IDA7XG59XG5cbmxpLmxpc3QtZ3JvdXAtaXRlbTpob3ZlciB7XG4gICAgYW5pbWF0aW9uOiBzdG9ybSAwLjdzIGVhc2UtaW4tb3V0IGJvdGg7XG59XG5cbi8qIGxpOmhvdmVyIHNwYW4ge1xuICAgIGFuaW1hdGlvbjogc3Rvcm0gMC43cyBlYXNlLWluLW91dCBib3RoO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC4wNnM7XG4gIH0gKi9cblxuQGtleWZyYW1lcyByb3RhdGUge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgfVxuICAgIDI1JSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDNkZWcpIHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtM2RlZykgdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgfVxuICAgIDc1JSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDFkZWcpIHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHN0b3JtIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgdHJhbnNsYXRlWigwKTtcbiAgICB9XG4gICAgMjUlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg0cHgsIDAsIDApIHRyYW5zbGF0ZVooMCk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTNweCwgMCwgMCkgdHJhbnNsYXRlWigwKTtcbiAgICB9XG4gICAgNzUlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDAsIDApIHRyYW5zbGF0ZVooMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHRyYW5zbGF0ZVooMCk7XG4gICAgfVxufSIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9jc3Mvb3JkZXJMaXN0LWFuaW1hdGlvbi5jc3MnO1xuXG5pbnB1dC5maWItYm94IHtcbiAgICBib3gtc2hhZG93OiB2YXIoLS10ZXh0Ym94LWJveHNoYWRvdyk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItY29sb3I6ICNmZmZmZmY7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmstY29sb3IpO1xufVxuICAvKiBvdXRsaW5lOiAwOyAqL1xuXG5cblxuaW5wdXQuZmliLWJveDpmb2N1cyxcbmlucHV0LmZpYi1ib3g6YWN0aXZle1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBib3JkZXItY29sb3I6ICNDQkQ4Q0IgIWltcG9ydGFudDtcbiAgb3V0bGluZTogMDtcbiAgY29sb3I6ICM0OTUwNTc7XG59XG5cbnNwYW57XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhpZ2hsaWdodCB7XG4gIGJhY2tncm91bmQ6ICNGRkQzNTA7XG4gIGNvbG9yOiAjMTYzMzc0O1xufVxuXG4uc2NvcmUtYm94IHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5zdW1tYXJ5TmFtZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/shared/question-components/listening-question/listening-question.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/shared/question-components/listening-question/listening-question.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: ListeningQuestionComponent */

  /***/
  function srcAppSharedQuestionComponentsListeningQuestionListeningQuestionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListeningQuestionComponent", function () {
      return ListeningQuestionComponent;
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


    var _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/enum/app_enum */
    "./src/app/enum/app_enum.ts");
    /* harmony import */


    var _app_shared_models_ListeningModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/shared/models/ListeningModel */
    "./src/app/shared/models/ListeningModel.ts");

    let ListeningQuestionComponent = class ListeningQuestionComponent {
      constructor(_router, formBuilder) {
        this._router = _router;
        this.formBuilder = formBuilder;
        this.answerEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // L-02

        this.highWords = [];
        this.highlightQuestionArray = []; // L-03

        this.answerLists = [];
        this.multipleAnswer = [];
        this.listeningCode = _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_4__["ListeningCode"];
        this.isLoading = false;
        this.versionList = ["American English", "British English"];
        this.evaluationForm = this.formBuilder.group({
          version: ["American English", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          summary: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.isPractise = false;
      }

      ngOnInit() {
        let currentRoute = this._router.url.split("/");

        this.isPractise = currentRoute.includes("practise");
      }

      generateAnswerFormat() {
        switch (this.questionData.questionType) {
          case "L003":
            {
              this.highlightQuestionArray = this.questionData.question.split(" ");
              this.highWords = new Array(this.highlightQuestionArray.length - 1);
              this.highWords.fill("");
              break;
            }
        }
      }

      getBlank(data, index) {
        this.answerLists[index] = data;
      }

      checkWord(word) {
        return word.replace(/[^\w\s]/gi, '');
      }

      highword(word, index) {
        let tempWord = this.checkWord(word);

        if (this.highWords[index] == tempWord) {
          this.highWords[index] = "";
        } else {
          this.highWords[index] = tempWord;
        }
      }

      getSingleAns(data) {
        this.singleAnswer = [];
        this.singleAnswer.push(data);
      }

      getMultipleAnswer(ans) {
        const index = this.multipleAnswer.findIndex(x => x._id === ans._id);

        if (index == -1) {
          this.multipleAnswer.push(ans);
        } else {
          this.multipleAnswer.splice(index, 1);
        }
      }

      summaryEmit(data) {
        this.answerEmit.emit(data);
      }

      onSubmit() {
        this.isLoading = true;

        switch (this.questionData.questionType) {
          case this.listeningCode.L001:
            {
              let dictation = new _app_shared_models_ListeningModel__WEBPACK_IMPORTED_MODULE_5__["DictationEvaluate"]();
              dictation.answer = this.dictationValue;
              dictation.options = "";
              dictation.questionId = this.questionData.questionId;
              dictation.questionType = this.questionData.questionType;
              this.answerEmit.emit(dictation);
              break;
            }

          case this.listeningCode.L002:
            {
              let dropDown = new _app_shared_models_ListeningModel__WEBPACK_IMPORTED_MODULE_5__["FIBEvaluate"]();
              dropDown.questionId = this.questionData.questionId;
              dropDown.questionType = this.questionData.questionType;
              dropDown.answer = this.answerLists;
              this.answerEmit.emit(dropDown);
              break;
            }

          case this.listeningCode.L003:
            {
              let highlight = new _app_shared_models_ListeningModel__WEBPACK_IMPORTED_MODULE_5__["FIBEvaluate"]();
              highlight.questionId = this.questionData.questionId;
              highlight.questionType = this.questionData.questionType;
              highlight.answer = this.highWords;
              this.answerEmit.emit(highlight);
              break;
            }

          case this.listeningCode.L004:
          case this.listeningCode.L006:
          case this.listeningCode.L007:
            {
              let mcq = new _app_shared_models_ListeningModel__WEBPACK_IMPORTED_MODULE_5__["MCQEvaluate"]();
              mcq.questionId = this.questionData.questionId;
              mcq.options = this.questionData.options;
              mcq.answer = this.singleAnswer;
              mcq.questionType = this.questionData.questionType;
              this.answerEmit.emit(mcq);
              break;
            }

          case this.listeningCode.L005:
            {
              let mcq = new _app_shared_models_ListeningModel__WEBPACK_IMPORTED_MODULE_5__["MCQEvaluate"]();
              mcq.questionId = this.questionData.questionId;
              mcq.options = this.questionData.options;
              mcq.answer = this.multipleAnswer;
              mcq.questionType = this.questionData.questionType;
              this.answerEmit.emit(mcq);
              break;
            }

          case this.listeningCode.L008:
            {
              let summary = new _app_shared_models_ListeningModel__WEBPACK_IMPORTED_MODULE_5__["SummaryListeningEvaluate"]();
              summary.questionId = this.questionData.questionId;
              summary.version = this.evaluationForm.value.version;
              summary.questionType = this.questionData.questionType;
              summary.yoursummary = this.evaluationForm.value.summary;
              summary.totalWordCount = this.countWord(this.evaluationForm.value.summary);
              this.answerEmit.emit(summary);
              break;
            }
        }
      }

      countWord(str) {
        return str.trim().replace(/\n/, "\n").split(/\s+/).length;
      }

      ngOnChanges() {
        this.answerLists = [];
        this.highWords = [];
        this.answerLists = [];
        this.dictationValue = "";
        this.singleAnswer = [];
        this.multipleAnswer = [];
        if (this.fibInput) this.fibInput.nativeElement.value = '';
        this.evaluationForm = this.formBuilder.group({
          version: ["American English", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          summary: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        setTimeout(() => {
          this.isLoading = false;
        }, 100);
        setTimeout(() => {
          this.generateAnswerFormat();
        }, 150);
      }

    };

    ListeningQuestionComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fibInput', {
      static: false
    })], ListeningQuestionComponent.prototype, "fibInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ListeningQuestionComponent.prototype, "questionData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ListeningQuestionComponent.prototype, "isNext", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ListeningQuestionComponent.prototype, "answerEmit", void 0);
    ListeningQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'listening-question',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./listening-question.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/question-components/listening-question/listening-question.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./listening-question.component.css */
      "./src/app/shared/question-components/listening-question/listening-question.component.css")).default]
    })], ListeningQuestionComponent);
    /***/
  },

  /***/
  "./src/app/shared/question-components/listening-score/listening-score.component.css":
  /*!******************************************************************************************!*\
    !*** ./src/app/shared/question-components/listening-score/listening-score.component.css ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedQuestionComponentsListeningScoreListeningScoreComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".question {\n  line-height: 2;\n  max-height: 630px;\n}\n\n.dragable {\n  min-width: 120px;\n  height: 38px;\n  background: #ebebeb;\n  display: inline-block;\n  vertical-align: middle;\n  padding: 0 5px;\n  text-align: center;\n}\n\n.setAligment {\n  padding: 8px 10px;\n  word-break: break-all;\n  white-space: break-spaces;\n}\n\n.actual {\n  color: #ffffff;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  background: var(--text-fade-color);\n  opacity: 1;\n  padding: 10px;\n}\n\n.obtain {\n  color: #ffffff;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  background: var(--text-fade-color);\n  opacity: 1;\n  padding: 10px;\n}\n\n.correct-class {\n  background: #28a01239;\n}\n\n.wrong-class {\n  background: #ff1a0753;\n}\n\n.correct-text {\n  color: #28a012;\n  font-weight: 700;\n}\n\n.user-answer {\n  color: var(--text-fade-color);\n  font-weight: 700;\n}\n\n.correct-box {\n  background-color: #28a012;\n  color: #ffffff;\n  font-size: 18px;\n}\n\n.user-box {\n  color: var(--text-dark-color);\n  box-shadow: var(--textbox-boxshadow);\n  font-size: 18px;\n}\n\ninput.fib-box {\n  box-shadow: 0px 3px 6px #f5bbb6;\n  border-radius: 4px;\n  margin: 5px;\n  text-align: center;\n  border: 0;\n  border: solid 1px #bf3529;\n  color: #bf3529;\n}\n\n.isCorrect{\n  border-color: #86db76 !important;\n  color: var(--primary-color) !important;\n  box-shadow: var(--textbox-boxshadow) !important;\n}\n\n.fib-answer {\n  display: inline-block;\n  padding: 4px;\n  background: #c8ffbe;\n  border-radius: 4px;\n  margin-left: 6px;\n  font-weight: 500;\n}\n\n.highlight-userans {\n  background-color: #d5d5d5;\n  font-weight: 500;\n}\n\n.fa-check-circle{\n  color:var(--primary-color);\n}\n\ni.fa.fa-times-circle{\n  color:#bf3529;\n}\n\n.highlight-correctans{\n  background-color: #c8ffbe;\n  /* color: var(--primary-color); */\n  font-weight: 500;\n}\n\nspan.highlight-txt {\n  line-height: 2;\n}\n\ntable {\n  width: 100%;\n}\n\ntd {\n  border: solid 1px #000;\n}\n\ntd:first-child{\n  font-weight: 500;\n    font-size: 18px;\n    padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3F1ZXN0aW9uLWNvbXBvbmVudHMvbGlzdGVuaW5nLXNjb3JlL2xpc3RlbmluZy1zY29yZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHlCQUE4QjtVQUE5Qiw4QkFBOEI7RUFDOUIsa0NBQWtDO0VBQ2xDLFVBQVU7RUFDVixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIseUJBQThCO1VBQTlCLDhCQUE4QjtFQUM5QixrQ0FBa0M7RUFDbEMsVUFBVTtFQUNWLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLG9DQUFvQztFQUNwQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxzQ0FBc0M7RUFDdEMsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBSUE7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlDQUFpQztFQUNqQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0lBQ2QsZUFBZTtJQUNmLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvcXVlc3Rpb24tY29tcG9uZW50cy9saXN0ZW5pbmctc2NvcmUvbGlzdGVuaW5nLXNjb3JlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucXVlc3Rpb24ge1xuICBsaW5lLWhlaWdodDogMjtcbiAgbWF4LWhlaWdodDogNjMwcHg7XG59XG5cbi5kcmFnYWJsZSB7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMzhweDtcbiAgYmFja2dyb3VuZDogI2ViZWJlYjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nOiAwIDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2V0QWxpZ21lbnQge1xuICBwYWRkaW5nOiA4cHggMTBweDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xufVxuXG4uYWN0dWFsIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZDogdmFyKC0tdGV4dC1mYWRlLWNvbG9yKTtcbiAgb3BhY2l0eTogMTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLm9idGFpbiB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQ6IHZhcigtLXRleHQtZmFkZS1jb2xvcik7XG4gIG9wYWNpdHk6IDE7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jb3JyZWN0LWNsYXNzIHtcbiAgYmFja2dyb3VuZDogIzI4YTAxMjM5O1xufVxuXG4ud3JvbmctY2xhc3Mge1xuICBiYWNrZ3JvdW5kOiAjZmYxYTA3NTM7XG59XG5cbi5jb3JyZWN0LXRleHQge1xuICBjb2xvcjogIzI4YTAxMjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnVzZXItYW5zd2VyIHtcbiAgY29sb3I6IHZhcigtLXRleHQtZmFkZS1jb2xvcik7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5jb3JyZWN0LWJveCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGEwMTI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi51c2VyLWJveCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmstY29sb3IpO1xuICBib3gtc2hhZG93OiB2YXIoLS10ZXh0Ym94LWJveHNoYWRvdyk7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuaW5wdXQuZmliLWJveCB7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICNmNWJiYjY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXI6IHNvbGlkIDFweCAjYmYzNTI5O1xuICBjb2xvcjogI2JmMzUyOTtcbn1cblxuLmlzQ29ycmVjdHtcbiAgYm9yZGVyLWNvbG9yOiAjODZkYjc2ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiB2YXIoLS10ZXh0Ym94LWJveHNoYWRvdykgIWltcG9ydGFudDtcbn1cblxuLmZpYi1hbnN3ZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDRweDtcbiAgYmFja2dyb3VuZDogI2M4ZmZiZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5cblxuLmhpZ2hsaWdodC11c2VyYW5zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q1ZDVkNTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmZhLWNoZWNrLWNpcmNsZXtcbiAgY29sb3I6dmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5cbmkuZmEuZmEtdGltZXMtY2lyY2xle1xuICBjb2xvcjojYmYzNTI5O1xufVxuXG4uaGlnaGxpZ2h0LWNvcnJlY3RhbnN7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGZmYmU7XG4gIC8qIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTsgKi9cbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuc3Bhbi5oaWdobGlnaHQtdHh0IHtcbiAgbGluZS1oZWlnaHQ6IDI7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRkIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzAwMDtcbn1cblxudGQ6Zmlyc3QtY2hpbGR7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shared/question-components/listening-score/listening-score.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/shared/question-components/listening-score/listening-score.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: ListeningScoreComponent */

  /***/
  function srcAppSharedQuestionComponentsListeningScoreListeningScoreComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListeningScoreComponent", function () {
      return ListeningScoreComponent;
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


    var _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/enum/app_enum */
    "./src/app/enum/app_enum.ts");
    /* harmony import */


    var _core_http_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @core/http/common.service */
    "./src/app/core/http/common.service.ts");

    let ListeningScoreComponent = class ListeningScoreComponent {
      constructor(_cservice) {
        this._cservice = _cservice;
        this.listeningcode = _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["ListeningCode"];
      }

      ngOnInit() {}

      ngOnChanges(changes) {
        if (this.data.questionType == this.listeningcode.L001) {
          setTimeout(() => {
            let ques = document.getElementById("user-answer" + this.data.questionId);
            console.log(this._cservice.stringToEl("<div>" + this.data.userAnswer + "</div>"));
            ques.append(this._cservice.stringToEl("<div>" + this.data.userAnswer + "</div>"));
          });
        } //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.

      }

    };

    ListeningScoreComponent.ctorParameters = () => [{
      type: _core_http_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ListeningScoreComponent.prototype, "data", void 0);
    ListeningScoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'listening-score',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./listening-score.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/question-components/listening-score/listening-score.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./listening-score.component.css */
      "./src/app/shared/question-components/listening-score/listening-score.component.css")).default]
    })], ListeningScoreComponent);
    /***/
  },

  /***/
  "./src/app/shared/question-components/question-by-module/question-by-module.component.css":
  /*!************************************************************************************************!*\
    !*** ./src/app/shared/question-components/question-by-module/question-by-module.component.css ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedQuestionComponentsQuestionByModuleQuestionByModuleComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9xdWVzdGlvbi1jb21wb25lbnRzL3F1ZXN0aW9uLWJ5LW1vZHVsZS9xdWVzdGlvbi1ieS1tb2R1bGUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/shared/question-components/question-by-module/question-by-module.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/shared/question-components/question-by-module/question-by-module.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: QuestionByModuleComponent */

  /***/
  function srcAppSharedQuestionComponentsQuestionByModuleQuestionByModuleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionByModuleComponent", function () {
      return QuestionByModuleComponent;
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


    var _app_shared_question_components_essay_question_essay_question_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/shared/question-components/essay-question/essay-question.component */
    "./src/app/shared/question-components/essay-question/essay-question.component.ts");
    /* harmony import */


    var _app_shared_question_components_listening_question_listening_question_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/shared/question-components/listening-question/listening-question.component */
    "./src/app/shared/question-components/listening-question/listening-question.component.ts");
    /* harmony import */


    var _app_shared_question_components_reading_question_reading_question_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/shared/question-components/reading-question/reading-question.component */
    "./src/app/shared/question-components/reading-question/reading-question.component.ts");
    /* harmony import */


    var _app_shared_question_components_speaking_question_speaking_question_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/shared/question-components/speaking-question/speaking-question.component */
    "./src/app/shared/question-components/speaking-question/speaking-question.component.ts");
    /* harmony import */


    var _app_shared_question_components_summary_question_summary_question_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/shared/question-components/summary-question/summary-question.component */
    "./src/app/shared/question-components/summary-question/summary-question.component.ts");

    let QuestionByModuleComponent = class QuestionByModuleComponent {
      constructor() {
        this.getEmitAnswer = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      ngOnInit() {}

      getAnswer(answer) {
        this.getEmitAnswer.emit(answer);
      }

      ngOnChanges(changes) {//Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
      }

      onSubmit() {
        if (this.moduleName == 'Writing') {
          if (this.question.questionType == 'W001') this.essayWriting.onSubmit();else this.summaryWriting.onSubmit();
        } else if (this.moduleName == 'Reading') this.readingQuestion.onSubmit();else if (this.moduleName == 'Listening') this.listeningQuestion.onSubmit();
      }

      ngAfterViewInit() {//Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
      }

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_app_shared_question_components_listening_question_listening_question_component__WEBPACK_IMPORTED_MODULE_3__["ListeningQuestionComponent"], {
      static: false
    })], QuestionByModuleComponent.prototype, "listeningQuestion", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_app_shared_question_components_speaking_question_speaking_question_component__WEBPACK_IMPORTED_MODULE_5__["SpeakingQuestionComponent"], {
      static: false
    })], QuestionByModuleComponent.prototype, "speakingQuestion", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_app_shared_question_components_reading_question_reading_question_component__WEBPACK_IMPORTED_MODULE_4__["ReadingQuestionComponent"], {
      static: false
    })], QuestionByModuleComponent.prototype, "readingQuestion", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_app_shared_question_components_essay_question_essay_question_component__WEBPACK_IMPORTED_MODULE_2__["EssayQuestionComponent"], {
      static: false
    })], QuestionByModuleComponent.prototype, "essayWriting", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_app_shared_question_components_summary_question_summary_question_component__WEBPACK_IMPORTED_MODULE_6__["SummaryQuestionComponent"], {
      static: false
    })], QuestionByModuleComponent.prototype, "summaryWriting", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], QuestionByModuleComponent.prototype, "moduleName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], QuestionByModuleComponent.prototype, "question", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], QuestionByModuleComponent.prototype, "getEmitAnswer", void 0);
    QuestionByModuleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'question-by-module',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./question-by-module.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/question-components/question-by-module/question-by-module.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./question-by-module.component.css */
      "./src/app/shared/question-components/question-by-module/question-by-module.component.css")).default]
    })], QuestionByModuleComponent);
    /***/
  },

  /***/
  "./src/app/shared/question-components/question-components.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/shared/question-components/question-components.module.ts ***!
    \**************************************************************************/

  /*! exports provided: QuestionComponentsModule */

  /***/
  function srcAppSharedQuestionComponentsQuestionComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionComponentsModule", function () {
      return QuestionComponentsModule;
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


    var _reading_question_reading_question_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./reading-question/reading-question.component */
    "./src/app/shared/question-components/reading-question/reading-question.component.ts");
    /* harmony import */


    var _listening_question_listening_question_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./listening-question/listening-question.component */
    "./src/app/shared/question-components/listening-question/listening-question.component.ts");
    /* harmony import */


    var _reading_score_reading_score_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./reading-score/reading-score.component */
    "./src/app/shared/question-components/reading-score/reading-score.component.ts");
    /* harmony import */


    var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user-info/user-info.component */
    "./src/app/shared/question-components/user-info/user-info.component.ts");
    /* harmony import */


    var _listening_score_listening_score_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./listening-score/listening-score.component */
    "./src/app/shared/question-components/listening-score/listening-score.component.ts");
    /* harmony import */


    var _speaking_question_speaking_question_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./speaking-question/speaking-question.component */
    "./src/app/shared/question-components/speaking-question/speaking-question.component.ts");
    /* harmony import */


    var _speaking_score_speaking_score_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./speaking-score/speaking-score.component */
    "./src/app/shared/question-components/speaking-score/speaking-score.component.ts");
    /* harmony import */


    var _question_loading_question_loading_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./question-loading/question-loading.component */
    "./src/app/shared/question-components/question-loading/question-loading.component.ts");
    /* harmony import */


    var _evaluation_score_evaluation_score_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./evaluation-score/evaluation-score.component */
    "./src/app/shared/question-components/evaluation-score/evaluation-score.component.ts");
    /* harmony import */


    var _essay_question_essay_question_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./essay-question/essay-question.component */
    "./src/app/shared/question-components/essay-question/essay-question.component.ts");
    /* harmony import */


    var _summary_question_summary_question_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./summary-question/summary-question.component */
    "./src/app/shared/question-components/summary-question/summary-question.component.ts");
    /* harmony import */


    var _summary_score_summary_score_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./summary-score/summary-score.component */
    "./src/app/shared/question-components/summary-score/summary-score.component.ts");
    /* harmony import */


    var ngx_sortablejs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ngx-sortablejs */
    "./node_modules/ngx-sortablejs/fesm2015/ngx-sortablejs.js");
    /* harmony import */


    var _app_shared_basic_components_basic_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @app/shared/basic-components/basic.module */
    "./src/app/shared/basic-components/basic.module.ts");
    /* harmony import */


    var _ngneat_content_loader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ngneat/content-loader */
    "./node_modules/@ngneat/content-loader/fesm2015/ngneat-content-loader.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _question_by_module_question_by_module_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./question-by-module/question-by-module.component */
    "./src/app/shared/question-components/question-by-module/question-by-module.component.ts");
    /* harmony import */


    var _score_by_module_score_by_module_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./score-by-module/score-by-module.component */
    "./src/app/shared/question-components/score-by-module/score-by-module.component.ts"); // components
    // external libraries
    // import local module


    const comlists = [_reading_question_reading_question_component__WEBPACK_IMPORTED_MODULE_3__["ReadingQuestionComponent"], _listening_question_listening_question_component__WEBPACK_IMPORTED_MODULE_4__["ListeningQuestionComponent"], _reading_score_reading_score_component__WEBPACK_IMPORTED_MODULE_5__["ReadingScoreComponent"], _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_6__["UserInfoComponent"], _listening_score_listening_score_component__WEBPACK_IMPORTED_MODULE_7__["ListeningScoreComponent"], _speaking_question_speaking_question_component__WEBPACK_IMPORTED_MODULE_8__["SpeakingQuestionComponent"], _speaking_score_speaking_score_component__WEBPACK_IMPORTED_MODULE_9__["SpeakingScoreComponent"], _question_loading_question_loading_component__WEBPACK_IMPORTED_MODULE_10__["QuestionLoadingComponent"], _evaluation_score_evaluation_score_component__WEBPACK_IMPORTED_MODULE_11__["EvaluationScoreComponent"], _essay_question_essay_question_component__WEBPACK_IMPORTED_MODULE_12__["EssayQuestionComponent"], _summary_question_summary_question_component__WEBPACK_IMPORTED_MODULE_13__["SummaryQuestionComponent"], _summary_score_summary_score_component__WEBPACK_IMPORTED_MODULE_14__["SummaryScoreComponent"], _question_by_module_question_by_module_component__WEBPACK_IMPORTED_MODULE_19__["QuestionByModuleComponent"], _score_by_module_score_by_module_component__WEBPACK_IMPORTED_MODULE_20__["ScoreByModuleComponent"]];
    let QuestionComponentsModule = class QuestionComponentsModule {};
    QuestionComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [comlists],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], // global settings
      ngx_sortablejs__WEBPACK_IMPORTED_MODULE_15__["SortablejsModule"].forRoot({
        animation: 200
      }), _app_shared_basic_components_basic_module__WEBPACK_IMPORTED_MODULE_16__["BasicModule"], _ngneat_content_loader__WEBPACK_IMPORTED_MODULE_17__["ContentLoaderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"]],
      exports: [comlists]
    })], QuestionComponentsModule);
    /***/
  },

  /***/
  "./src/app/shared/question-components/question-loading/question-loading.component.css":
  /*!********************************************************************************************!*\
    !*** ./src/app/shared/question-components/question-loading/question-loading.component.css ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedQuestionComponentsQuestionLoadingQuestionLoadingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".addTop{\n    padding-top: 230px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3F1ZXN0aW9uLWNvbXBvbmVudHMvcXVlc3Rpb24tbG9hZGluZy9xdWVzdGlvbi1sb2FkaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvcXVlc3Rpb24tY29tcG9uZW50cy9xdWVzdGlvbi1sb2FkaW5nL3F1ZXN0aW9uLWxvYWRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRUb3B7XG4gICAgcGFkZGluZy10b3A6IDIzMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/question-components/question-loading/question-loading.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/shared/question-components/question-loading/question-loading.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: QuestionLoadingComponent */

  /***/
  function srcAppSharedQuestionComponentsQuestionLoadingQuestionLoadingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionLoadingComponent", function () {
      return QuestionLoadingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let QuestionLoadingComponent = class QuestionLoadingComponent {
      constructor() {}

      ngOnInit() {}

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], QuestionLoadingComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], QuestionLoadingComponent.prototype, "moduleType", void 0);
    QuestionLoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'question-loading',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./question-loading.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/question-components/question-loading/question-loading.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./question-loading.component.css */
      "./src/app/shared/question-components/question-loading/question-loading.component.css")).default]
    })], QuestionLoadingComponent);
    /***/
  },

  /***/
  "./src/app/shared/question-components/reading-question/reading-question.component.css":
  /*!********************************************************************************************!*\
    !*** ./src/app/shared/question-components/reading-question/reading-question.component.css ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedQuestionComponentsReadingQuestionReadingQuestionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\nli.list-group-item {\n    position: relative;\n    display: block;\n    border: 1px solid hotpink;\n    margin-bottom: 5px;\n    padding: 10px;\n    text-align: center;\n    /* -webkit-animation: fadeIn 0.5s linear;\n    animation: fadeIn 0.5s linear;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both; */\n}\n\n.mcq-list{\n    -webkit-animation: fadeIn 0.5s linear;\n    animation: fadeIn 0.5s linear;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n}\n\n.list-group,.question,.drop-container,.anni-fadeinout{\n    -webkit-animation: fadeIn2 0.6s linear;\n    animation: fadeIn2 0.6s linear;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n}\n\n/* li:nth-child(1) {\n    -webkit-animation-delay: 0.25s;\n    animation-delay: 0.25s;\n}\n\nli:nth-child(2) {\n    -webkit-animation-delay: 0.5s;\n    animation-delay: 0.5s;\n}\n\nli:nth-child(3) {\n    -webkit-animation-delay: 0.75s;\n    animation-delay: 0.75s;\n}\n\nli:nth-child(4) {\n    -webkit-animation-delay: 1s;\n    animation-delay: 1s;\n}\n\nli:nth-child(5) {\n    -webkit-animation-delay: 1.25s;\n    animation-delay: 1.25s;\n} */\n\n@-webkit-keyframes fadeIn {\n    0% {\n        opacity: 0;\n        top: 100px;\n    }\n    75% {\n        opacity: 0.5;\n        top: 0px;\n    }\n    100% {\n        opacity: 1;\n        top: 0;\n    }\n}\n\n@keyframes fadeIn {\n    0% {\n        opacity: 0;\n        top: 100px;\n    }\n    75% {\n        opacity: 0.5;\n        top: 0px;\n    }\n    100% {\n        opacity: 1;\n        top: 0;\n    }\n}\n\n@-webkit-keyframes fadeIn2 {\n    0% {\n        margin-top: 600px;\n        opacity: 0;\n    }\n    75% {\n        opacity: 1;\n        margin-top: 0.5px;\n    }\n    100% {\n        opacity: 1;\n        margin-top: 0px;\n    }\n}\n\n@keyframes fadeIn2 {\n    0% {\n        margin-top: 600px;\n        opacity: 0;\n    }\n    75% {\n        opacity: 1;\n        margin-top: 0.5px;\n    }\n    100% {\n        opacity: 1;\n        margin-top: 0px;\n    }\n}\n\nli.list-group-item:after {\n    position: absolute;\n    right: 0;\n    left: auto;\n    -webkit-transition: 0.3s;\n    transition: 0.3s;\n    content: \"\";\n    width: 0;\n    bottom: 0;\n    height: 3px;\n    background: var(--half-bg-color);\n}\n\nli.list-group-item:hover {\n    cursor: pointer;\n}\n\nli.list-group-item:hover:after {\n    width: 100%;\n    left: 0;\n}\n\n.mcq_box:hover{\n    -webkit-animation: storm 0.7s ease-in-out both;\n            animation: storm 0.7s ease-in-out both;\n}\n\n.mcq_box:after {\n    position: absolute;\n    right: 0;\n    left: auto;\n    -webkit-transition: 0.6s;\n    transition: 0.6s;\n    content: \"\";\n    width: 0;\n    bottom: 0;\n    height: 3px;\n    background: var(--half-bg-color);\n}\n\n.mcq_box:hover:after {\n    width: 100%;\n    left: 0;\n}\n\nli.list-group-item:hover {\n    -webkit-animation: storm 0.7s ease-in-out both;\n            animation: storm 0.7s ease-in-out both;\n}\n\n/* li:hover span {\n    animation: storm 0.7s ease-in-out both;\n    animation-delay: 0.06s;\n  } */\n\n@-webkit-keyframes rotate {\n    0% {\n        -webkit-transform: rotate(0deg) translate3d(0, 0, 0);\n                transform: rotate(0deg) translate3d(0, 0, 0);\n    }\n    25% {\n        -webkit-transform: rotate(3deg) translate3d(0, 0, 0);\n                transform: rotate(3deg) translate3d(0, 0, 0);\n    }\n    50% {\n        -webkit-transform: rotate(-3deg) translate3d(0, 0, 0);\n                transform: rotate(-3deg) translate3d(0, 0, 0);\n    }\n    75% {\n        -webkit-transform: rotate(1deg) translate3d(0, 0, 0);\n                transform: rotate(1deg) translate3d(0, 0, 0);\n    }\n    100% {\n        -webkit-transform: rotate(0deg) translate3d(0, 0, 0);\n                transform: rotate(0deg) translate3d(0, 0, 0);\n    }\n}\n\n@keyframes rotate {\n    0% {\n        -webkit-transform: rotate(0deg) translate3d(0, 0, 0);\n                transform: rotate(0deg) translate3d(0, 0, 0);\n    }\n    25% {\n        -webkit-transform: rotate(3deg) translate3d(0, 0, 0);\n                transform: rotate(3deg) translate3d(0, 0, 0);\n    }\n    50% {\n        -webkit-transform: rotate(-3deg) translate3d(0, 0, 0);\n                transform: rotate(-3deg) translate3d(0, 0, 0);\n    }\n    75% {\n        -webkit-transform: rotate(1deg) translate3d(0, 0, 0);\n                transform: rotate(1deg) translate3d(0, 0, 0);\n    }\n    100% {\n        -webkit-transform: rotate(0deg) translate3d(0, 0, 0);\n                transform: rotate(0deg) translate3d(0, 0, 0);\n    }\n}\n\n@-webkit-keyframes storm {\n    0% {\n        -webkit-transform: translate3d(0, 0, 0) translateZ(0);\n                transform: translate3d(0, 0, 0) translateZ(0);\n    }\n    25% {\n        -webkit-transform: translate3d(4px, 0, 0) translateZ(0);\n                transform: translate3d(4px, 0, 0) translateZ(0);\n    }\n    50% {\n        -webkit-transform: translate3d(-3px, 0, 0) translateZ(0);\n                transform: translate3d(-3px, 0, 0) translateZ(0);\n    }\n    75% {\n        -webkit-transform: translate3d(2px, 0, 0) translateZ(0);\n                transform: translate3d(2px, 0, 0) translateZ(0);\n    }\n    100% {\n        -webkit-transform: translate3d(0, 0, 0) translateZ(0);\n                transform: translate3d(0, 0, 0) translateZ(0);\n    }\n}\n\n@keyframes storm {\n    0% {\n        -webkit-transform: translate3d(0, 0, 0) translateZ(0);\n                transform: translate3d(0, 0, 0) translateZ(0);\n    }\n    25% {\n        -webkit-transform: translate3d(4px, 0, 0) translateZ(0);\n                transform: translate3d(4px, 0, 0) translateZ(0);\n    }\n    50% {\n        -webkit-transform: translate3d(-3px, 0, 0) translateZ(0);\n                transform: translate3d(-3px, 0, 0) translateZ(0);\n    }\n    75% {\n        -webkit-transform: translate3d(2px, 0, 0) translateZ(0);\n                transform: translate3d(2px, 0, 0) translateZ(0);\n    }\n    100% {\n        -webkit-transform: translate3d(0, 0, 0) translateZ(0);\n                transform: translate3d(0, 0, 0) translateZ(0);\n    }\n}\n\n.question-title {\n  color: var(--text-dark-color);\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.answer-title {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-dark-color);\n}\n\nul.list-group.answer-list-group{\n  height: 100%;\n  min-height: 630px;\n}\n\nul.list-group.answer-list-group>li {\n  background-color: #c9c9c9 !important;\n  color: var(--text-dark-color) !important;\n}\n\nli.empty-drag {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 24px;\n  color: var(--text-fade-color);\n  background-color: #e1e1e1 !important;\n}\n\n/* R-01 */\n\n.sortable {\n  background: #eee;\n  border-radius: 0.25rem;\n  min-height: 40px;\n}\n\n.cursor {\n  cursor: move;\n}\n\n.setAligment {\n  padding: 8px 10px;\n}\n\n.drop-container {\n  line-height: 2;\n}\n\n.select-box{\n  border-radius: 4px;\n  box-shadow: 0px 3px 6px #e1e1a8;\n  border: unset;\n  background-color: var(--half-bg-fade-color);\n  margin-bottom: 8px;\n  padding: 6px;\n  border: solid 1px #e1e1a8;\n  color: var(--text-dark-color);\n}\n\n.select-box:focus {\n  background-color: var(--half-bg-color);\n  border: solid 1px;\n  color: white;\n}\n\n.paragraph-question-text{\n    font-size: 18px;\n    color: var(--text-dark-color);\n}\n\n.fib-drag-list {\n  background-color: var(--text-light-color);\n  overflow: overlay;\n}\n\n.fib-drag-list>li{\n  color: var(--text-dark-color);\n  background-color: #f3f3bc;\n}\n\n/* R-03 */\n\nul.list-group {\n  padding: 8px;\n  max-height: 630px;\n  /* min-height: 630px; */\n  overflow: overlay;\n}\n\nli.list-group-item {\n  border: 1.5px solid;\n  border-radius: 0px;\n  /* margin: 8px; */\n  cursor: move;\n  color: var(--text-light-color);\n  background-color: var(--reading-color);\n  text-align: center;\n  font-weight: 500;\n}\n\n.question {\n  line-height: 2;\n  max-height: 630px;\n  overflow: overlay;\n}\n\n.dragable {\n  min-width: 120px;\n  height: 38px;\n  display: inline-block;\n  vertical-align: middle;\n  padding: 0 5px;\n  text-align: center;\n  background-color: #ebebeb;\n  font-weight: 500;\n}\n\n.reorder-left {\n  background-color: white;\n}\n\n.reorder-right {\n  background-color: #e1e1e1 !important;\n}\n\n.reorder-list>li{\n  background-color: #c9c9c9 !important;\n  color: var(--text-dark-color) !important;\n  border: 1.5px solid #ffffff;\n}\n\n.reorder-list{\n  background-color: #e1e1e1  !important;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL29yZGVyTGlzdC1hbmltYXRpb24uY3NzIiwic3JjL2FwcC9zaGFyZWQvcXVlc3Rpb24tY29tcG9uZW50cy9yZWFkaW5nLXF1ZXN0aW9uL3JlYWRpbmctcXVlc3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEI7OztnQ0FHNEI7QUFDaEM7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsNkJBQTZCO0lBQzdCLGlDQUFpQztJQUNqQyx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsOEJBQThCO0lBQzlCLGlDQUFpQztJQUNqQyx5QkFBeUI7QUFDN0I7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdUJHOztBQUVIO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsVUFBVTtJQUNkO0lBQ0E7UUFDSSxZQUFZO1FBQ1osUUFBUTtJQUNaO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsTUFBTTtJQUNWO0FBQ0o7O0FBYkE7SUFDSTtRQUNJLFVBQVU7UUFDVixVQUFVO0lBQ2Q7SUFDQTtRQUNJLFlBQVk7UUFDWixRQUFRO0lBQ1o7SUFDQTtRQUNJLFVBQVU7UUFDVixNQUFNO0lBQ1Y7QUFDSjs7QUFHQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtRQUNWLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLGVBQWU7SUFDbkI7QUFDSjs7QUFiQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtRQUNWLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtJQUNWLHdCQUFnQjtJQUFoQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJQUNYLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsT0FBTztBQUNYOztBQUVBO0lBQ0ksOENBQXNDO1lBQXRDLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtJQUNWLHdCQUFnQjtJQUFoQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJQUNYLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxPQUFPO0FBQ1g7O0FBRUE7SUFDSSw4Q0FBc0M7WUFBdEMsc0NBQXNDO0FBQzFDOztBQUVBOzs7S0FHSzs7QUFFTDtJQUNJO1FBQ0ksb0RBQTRDO2dCQUE1Qyw0Q0FBNEM7SUFDaEQ7SUFDQTtRQUNJLG9EQUE0QztnQkFBNUMsNENBQTRDO0lBQ2hEO0lBQ0E7UUFDSSxxREFBNkM7Z0JBQTdDLDZDQUE2QztJQUNqRDtJQUNBO1FBQ0ksb0RBQTRDO2dCQUE1Qyw0Q0FBNEM7SUFDaEQ7SUFDQTtRQUNJLG9EQUE0QztnQkFBNUMsNENBQTRDO0lBQ2hEO0FBQ0o7O0FBaEJBO0lBQ0k7UUFDSSxvREFBNEM7Z0JBQTVDLDRDQUE0QztJQUNoRDtJQUNBO1FBQ0ksb0RBQTRDO2dCQUE1Qyw0Q0FBNEM7SUFDaEQ7SUFDQTtRQUNJLHFEQUE2QztnQkFBN0MsNkNBQTZDO0lBQ2pEO0lBQ0E7UUFDSSxvREFBNEM7Z0JBQTVDLDRDQUE0QztJQUNoRDtJQUNBO1FBQ0ksb0RBQTRDO2dCQUE1Qyw0Q0FBNEM7SUFDaEQ7QUFDSjs7QUFFQTtJQUNJO1FBQ0kscURBQTZDO2dCQUE3Qyw2Q0FBNkM7SUFDakQ7SUFDQTtRQUNJLHVEQUErQztnQkFBL0MsK0NBQStDO0lBQ25EO0lBQ0E7UUFDSSx3REFBZ0Q7Z0JBQWhELGdEQUFnRDtJQUNwRDtJQUNBO1FBQ0ksdURBQStDO2dCQUEvQywrQ0FBK0M7SUFDbkQ7SUFDQTtRQUNJLHFEQUE2QztnQkFBN0MsNkNBQTZDO0lBQ2pEO0FBQ0o7O0FBaEJBO0lBQ0k7UUFDSSxxREFBNkM7Z0JBQTdDLDZDQUE2QztJQUNqRDtJQUNBO1FBQ0ksdURBQStDO2dCQUEvQywrQ0FBK0M7SUFDbkQ7SUFDQTtRQUNJLHdEQUFnRDtnQkFBaEQsZ0RBQWdEO0lBQ3BEO0lBQ0E7UUFDSSx1REFBK0M7Z0JBQS9DLCtDQUErQztJQUNuRDtJQUNBO1FBQ0kscURBQTZDO2dCQUE3Qyw2Q0FBNkM7SUFDakQ7QUFDSjs7QUN2S0E7RUFDRSw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsNkJBQTZCO0FBQy9COztBQUdBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyx3Q0FBd0M7QUFDMUM7O0FBR0E7RUFDRSxZQUFZO0VBQ1osb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0Isb0NBQW9DO0FBQ3RDOztBQUNBLFNBQVM7O0FBRVQ7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLGFBQWE7RUFDYiwyQ0FBMkM7RUFDM0Msa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsNkJBQTZCO0FBQ2pDOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qix5QkFBeUI7QUFDM0I7O0FBQ0EsU0FBUzs7QUFFVDtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsc0NBQXNDO0VBQ3RDLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBR0E7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsd0NBQXdDO0VBQ3hDLDJCQUEyQjtBQUM3Qjs7QUFHQTtFQUNFLHFDQUFxQztBQUN2QyIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9xdWVzdGlvbi1jb21wb25lbnRzL3JlYWRpbmctcXVlc3Rpb24vcmVhZGluZy1xdWVzdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmxpLmxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGhvdHBpbms7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8qIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gMC41cyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMC41cyBsaW5lYXI7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7ICovXG59XG5cbi5tY3EtbGlzdHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDAuNXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNXMgbGluZWFyO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG4ubGlzdC1ncm91cCwucXVlc3Rpb24sLmRyb3AtY29udGFpbmVyLC5hbm5pLWZhZGVpbm91dHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluMiAwLjZzIGxpbmVhcjtcbiAgICBhbmltYXRpb246IGZhZGVJbjIgMC42cyBsaW5lYXI7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG4vKiBsaTpudGgtY2hpbGQoMSkge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjI1cztcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuMjVzO1xufVxuXG5saTpudGgtY2hpbGQoMikge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjVzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC41cztcbn1cblxubGk6bnRoLWNoaWxkKDMpIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC43NXM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjc1cztcbn1cblxubGk6bnRoLWNoaWxkKDQpIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMXM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbn1cblxubGk6bnRoLWNoaWxkKDUpIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMS4yNXM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxLjI1cztcbn0gKi9cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdG9wOiAxMDBweDtcbiAgICB9XG4gICAgNzUlIHtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICB0b3A6IDBweDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRvcDogMDtcbiAgICB9XG59XG5cblxuQGtleWZyYW1lcyBmYWRlSW4yIHtcbiAgICAwJSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDYwMHB4O1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICA3NSUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBtYXJnaW4tdG9wOiAwLjVweDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICB9XG59XG5cbmxpLmxpc3QtZ3JvdXAtaXRlbTphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IGF1dG87XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHdpZHRoOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oYWxmLWJnLWNvbG9yKTtcbn1cblxubGkubGlzdC1ncm91cC1pdGVtOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmxpLmxpc3QtZ3JvdXAtaXRlbTpob3ZlcjphZnRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGVmdDogMDtcbn1cblxuLm1jcV9ib3g6aG92ZXJ7XG4gICAgYW5pbWF0aW9uOiBzdG9ybSAwLjdzIGVhc2UtaW4tb3V0IGJvdGg7XG59XG5cbi5tY3FfYm94OmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogYXV0bztcbiAgICB0cmFuc2l0aW9uOiAwLjZzO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGhlaWdodDogM3B4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWhhbGYtYmctY29sb3IpO1xufVxuXG4ubWNxX2JveDpob3ZlcjphZnRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGVmdDogMDtcbn1cblxubGkubGlzdC1ncm91cC1pdGVtOmhvdmVyIHtcbiAgICBhbmltYXRpb246IHN0b3JtIDAuN3MgZWFzZS1pbi1vdXQgYm90aDtcbn1cblxuLyogbGk6aG92ZXIgc3BhbiB7XG4gICAgYW5pbWF0aW9uOiBzdG9ybSAwLjdzIGVhc2UtaW4tb3V0IGJvdGg7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjA2cztcbiAgfSAqL1xuXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB9XG4gICAgMjUlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0zZGVnKSB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB9XG4gICAgNzUlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMWRlZykgdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgc3Rvcm0ge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSB0cmFuc2xhdGVaKDApO1xuICAgIH1cbiAgICAyNSUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDRweCwgMCwgMCkgdHJhbnNsYXRlWigwKTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtM3B4LCAwLCAwKSB0cmFuc2xhdGVaKDApO1xuICAgIH1cbiAgICA3NSUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMCwgMCkgdHJhbnNsYXRlWigwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgdHJhbnNsYXRlWigwKTtcbiAgICB9XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL2Nzcy9vcmRlckxpc3QtYW5pbWF0aW9uLmNzcyc7XG5cbi5xdWVzdGlvbi10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmstY29sb3IpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5hbnN3ZXItdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmstY29sb3IpO1xufVxuXG5cbnVsLmxpc3QtZ3JvdXAuYW5zd2VyLWxpc3QtZ3JvdXB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogNjMwcHg7XG59XG51bC5saXN0LWdyb3VwLmFuc3dlci1saXN0LWdyb3VwPmxpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M5YzljOSAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrLWNvbG9yKSAhaW1wb3J0YW50O1xufVxuXG5cbmxpLmVtcHR5LWRyYWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWZhZGUtY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlMWUxICFpbXBvcnRhbnQ7XG59XG4vKiBSLTAxICovXG5cbi5zb3J0YWJsZSB7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG59XG5cbi5jdXJzb3Ige1xuICBjdXJzb3I6IG1vdmU7XG59XG5cbi5zZXRBbGlnbWVudCB7XG4gIHBhZGRpbmc6IDhweCAxMHB4O1xufVxuXG4uZHJvcC1jb250YWluZXIge1xuICBsaW5lLWhlaWdodDogMjtcbn1cblxuLnNlbGVjdC1ib3h7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggI2UxZTFhODtcbiAgYm9yZGVyOiB1bnNldDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGFsZi1iZy1mYWRlLWNvbG9yKTtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBwYWRkaW5nOiA2cHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNlMWUxYTg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmstY29sb3IpO1xufVxuXG4uc2VsZWN0LWJveDpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhhbGYtYmctY29sb3IpO1xuICBib3JkZXI6IHNvbGlkIDFweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucGFyYWdyYXBoLXF1ZXN0aW9uLXRleHR7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmstY29sb3IpO1xufVxuXG4uZmliLWRyYWctbGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtbGlnaHQtY29sb3IpO1xuICBvdmVyZmxvdzogb3ZlcmxheTtcbn1cblxuLmZpYi1kcmFnLWxpc3Q+bGl7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmstY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2JjO1xufVxuLyogUi0wMyAqL1xuXG51bC5saXN0LWdyb3VwIHtcbiAgcGFkZGluZzogOHB4O1xuICBtYXgtaGVpZ2h0OiA2MzBweDtcbiAgLyogbWluLWhlaWdodDogNjMwcHg7ICovXG4gIG92ZXJmbG93OiBvdmVybGF5O1xufVxuXG5saS5saXN0LWdyb3VwLWl0ZW0ge1xuICBib3JkZXI6IDEuNXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIC8qIG1hcmdpbjogOHB4OyAqL1xuICBjdXJzb3I6IG1vdmU7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0LWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVhZGluZy1jb2xvcik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnF1ZXN0aW9uIHtcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIG1heC1oZWlnaHQ6IDYzMHB4O1xuICBvdmVyZmxvdzogb3ZlcmxheTtcbn1cblxuLmRyYWdhYmxlIHtcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAzOHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cblxuLnJlb3JkZXItbGVmdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ucmVvcmRlci1yaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWUxZTEgIWltcG9ydGFudDtcbn1cblxuLnJlb3JkZXItbGlzdD5saXtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M5YzljOSAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrLWNvbG9yKSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICNmZmZmZmY7XG59XG5cblxuLnJlb3JkZXItbGlzdHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZTFlMSAgIWltcG9ydGFudDtcbn1cblxuIl19 */";
    /***/
  },

  /***/
  "./src/app/shared/question-components/reading-question/reading-question.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/shared/question-components/reading-question/reading-question.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: ReadingQuestionComponent */

  /***/
  function srcAppSharedQuestionComponentsReadingQuestionReadingQuestionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReadingQuestionComponent", function () {
      return ReadingQuestionComponent;
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


    var _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/enum/app_enum */
    "./src/app/enum/app_enum.ts");
    /* harmony import */


    var _app_shared_models_ReadingModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/shared/models/ReadingModel */
    "./src/app/shared/models/ReadingModel.ts");
    /* harmony import */


    var _core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @core/http/serviceIndex */
    "./src/app/core/http/serviceIndex.ts");

    let ReadingQuestionComponent = class ReadingQuestionComponent {
      constructor(_cservice) {
        this._cservice = _cservice;
        this.isNext = false;
        this.answerEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isReach = false;
        this.readingCode = _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["ReadingCode"]; // R-01

        this.questionOptions = {
          group: {
            name: 'group1',
            put: false
          }
        };
        this.answerOptions = {
          group: {
            name: 'group2',
            put: ['group1', 'group2']
          }
        };
        this.fibDDAnswer = [];
        this.dragAnswer = [];
        this.multipleAnswer = [];
        this.singleAnswer = [];
        this.reorderList = [];
        this.isLoading = false;
      }

      ngOnInit() {}

      generateAnswerFormat() {
        this.isReach = true;
        let ele = document.getElementById("note");

        if (ele) {
          if (ele.parentNode) ele.parentNode.removeChild(ele);
        }

        switch (this.questionData.questionType) {
          case "R004":
            {
              let ques = document.getElementById("singleQuestion");
              ques.append(this._cservice.stringToEl("<div id='note'>" + this.questionData.htmlquestion + "</div>"));
              break;
            }

          case "R005":
            {
              let ques = document.getElementById("singleQuestion");
              ques.append(this._cservice.stringToEl("<div id='note'>" + this.questionData.htmlquestion + "</div>"));
              break;
            }
        }
      }

      onFibDropDown(value, index, answerId) {
        let obj = new _app_shared_models_ReadingModel__WEBPACK_IMPORTED_MODULE_3__["ReadingOption"]();
        obj.answerId = answerId;
        obj.option = value;
        this.fibDDAnswer[index] = obj;
      }

      allowDrop(ev) {
        ev.preventDefault();
      }

      onDrop03(ev, index) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        let ele = document.getElementById("dragId" + index);
        ele.innerHTML = data;

        if (this.dragAnswer[index]) {
          let oldData = this.dragAnswer[index];
          this.dragAnswer[index] = data;
          this.questionData.options.push(oldData);
        } else {
          this.dragAnswer[index] = data;
        }

        this.questionData.options.splice(this.optionIndex, 1);
      }

      drag(ev, index) {
        this.optionIndex = index;
        ev.dataTransfer.setData("text", ev.target.textContent);
      }

      getMultiple(ans) {
        const index = this.multipleAnswer.findIndex(x => x._id === ans._id);

        if (index == -1) {
          this.multipleAnswer.push(ans);
        } else {
          this.multipleAnswer.splice(index, 1);
        }
      }

      getSingle(data) {
        this.singleAnswer = [];
        this.singleAnswer.push(data);
      }

      onSubmit() {
        this.isLoading = true;
        let qId = this.questionData.questionId;
        let qtype = this.questionData.questionType;

        switch (this.questionData.questionType) {
          case this.readingCode.R001:
            {
              let reorder = new _app_shared_models_ReadingModel__WEBPACK_IMPORTED_MODULE_3__["ReorderEvaluate"]();
              reorder.answers = this.reorderList;
              reorder.questionId = qId;
              reorder.questionType = qtype;
              this.answerEmit.emit(reorder);
              break;
            }

          case this.readingCode.R002:
            {
              let dropDown = new _app_shared_models_ReadingModel__WEBPACK_IMPORTED_MODULE_3__["FIBDropDownEvaluate"]();
              dropDown.questionId = qId;
              dropDown.answers = this.fibDDAnswer;
              dropDown.questionType = qtype;
              this.answerEmit.emit(dropDown);
              break;
            }

          case this.readingCode.R003:
            {
              let dropDown = new _app_shared_models_ReadingModel__WEBPACK_IMPORTED_MODULE_3__["FIBDragEvaluate"]();
              dropDown.questionId = qId;
              dropDown.answers = this.dragAnswer;
              dropDown.questionType = qtype;
              this.answerEmit.emit(dropDown);
              break;
            }

          case this.readingCode.R004:
            {
              let mcq = new _app_shared_models_ReadingModel__WEBPACK_IMPORTED_MODULE_3__["MCQEvaluate"]();
              mcq.questionId = qId;
              mcq.answers = this.singleAnswer;
              mcq.questionType = qtype;
              this.answerEmit.emit(mcq);
              break;
            }

          case this.readingCode.R005:
            {
              let mcq = new _app_shared_models_ReadingModel__WEBPACK_IMPORTED_MODULE_3__["MCQEvaluate"]();
              mcq.questionId = qId;
              mcq.answers = this.multipleAnswer;
              mcq.questionType = qtype;
              this.answerEmit.emit(mcq);
              break;
            }
        }
      }

      ngOnChanges() {
        this.reorderList = [];
        this.optionIndex = undefined;
        this.singleAnswer = [];
        this.multipleAnswer = [];
        this.dragAnswer = [];
        this.fibDDAnswer = [];
        this.reorderList = []; // this.answerEmit.emit(this.reorderList);

        this.questionData = this.questionData;
        setTimeout(() => {
          this.isLoading = false;
        }, 100);
        setTimeout(() => {
          this.generateAnswerFormat();
        }, 150);
      }

    };

    ReadingQuestionComponent.ctorParameters = () => [{
      type: _core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ReadingQuestionComponent.prototype, "questionData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ReadingQuestionComponent.prototype, "isNext", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ReadingQuestionComponent.prototype, "answerEmit", void 0);
    ReadingQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'reading-question',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reading-question.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/question-components/reading-question/reading-question.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reading-question.component.css */
      "./src/app/shared/question-components/reading-question/reading-question.component.css")).default]
    })], ReadingQuestionComponent);
    /***/
  },

  /***/
  "./src/app/shared/question-components/reading-score/reading-score.component.css":
  /*!**************************************************************************************!*\
    !*** ./src/app/shared/question-components/reading-score/reading-score.component.css ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedQuestionComponentsReadingScoreReadingScoreComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n.setAligment {\n    padding: 8px 10px;\n  }\n\n\n  .actual {\n    color: #ffffff;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    background: #28a012 0% 0% no-repeat padding-box;\n    opacity: 1;\n    padding: 10px;\n    margin: 0;\n  }\n\n\n  .obtain {\n    color: #ffffff;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    background: var(--text-fade-color) 0% 0% no-repeat padding-box;\n    padding: 10px;\n    margin: 0;\n  }\n\n\n  .dragable {\n    min-width: 120px;\n    height: 38px;\n    background: #ebebeb;\n    display: inline-block;\n    vertical-align: middle;\n    padding: 0 5px;\n    text-align: center;\n    margin-bottom: 5px;\n  }\n\n\n  .wrong-class {\n    background: #ff1a0753;\n    color: #2b3345;\n}\n\n\n  .correct-class{\n  background: #28a01239;\n  color: #2b3345;\n}\n\n\n  .drop-container {\n  line-height: 2;\n}\n\n\n  .question-title {\n  color: var(--text-dark-color);\n  font-size: 18px;\n  font-weight: 600;\n}\n\n\n  .answer-title {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-light-color);\n}\n\n\n  i.fa.fa-arrows {\n  color: var(--primary-color);\n  margin-right: 14px;\n  font-size: 20px;\n}\n\n\n  li.empty-drag {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 24px;\n  color: #8ba38b;\n}\n\n\n  /* R-01 */\n\n\n  .sortable {\n  background: #eee;\n  border-radius: 0.25rem;\n  min-height: 40px;\n}\n\n\n  .cursor {\n  cursor: move;\n}\n\n\n  .setAligment {\n  padding: 8px 10px;\n}\n\n\n  .drop-container {\n  line-height: 2;\n}\n\n\n  .select-box{\nborder-radius: 4px;\n    box-shadow: 0px 3px 6px #f5bbb6;\n    border: unset;\n    background-color: #ffffff;\n    margin-bottom: 8px;\n    padding: 6px;\n    border: solid 1px #bf3529;\n    color: #bf3529;\n}\n\n\n  .isCorrect{\n  box-shadow: 0px 3px 6px #86db76;\n  color: #28a012 !important;\n  border: solid 1px #28a012 !important;\n}\n\n\n  option.selectedCorrect{\n  color: #28a012 !important;\n}\n\n\n  .paragraph-question-text{\n    font-size: 18px;\n    color: var(--text-dark-color);\n}\n\n\n  .fib-drag-list {\n  background-color: #ebebeb;\n  overflow: overlay;\n  \n}\n\n\n  /* R-03 */\n\n\n  ul.list-group {\n  padding: 10px;\n  max-height: 630px;\n}\n\n\n  i.fa.fa-times-circle {\n  color: #bf3529;\n  font-size: 20px;\n}\n\n\n  i.fa.fa-check-circle{\n  color: #28a012;\n  font-size: 20px;\n}\n\n\n  .question {\n  line-height: 2;\n  max-height: 630px;\n}\n\n\n  .dragable {\n  min-width: 120px;\n  height: 38px;\n  display: inline-block;\n  vertical-align: middle;\n  padding: 0 5px;\n  text-align: center;\n  border: solid 1px #bf3529;\n  color: #bf3529;\n  background-color: white;\n  box-shadow: unset !important;\n}\n\n\n  .question-title {\n  color: var(--text-dark-color);\n  font-size: 18px;\n  font-weight: 600;\n}\n\n\n  .answer-title {\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--text-dark-color);\n}\n\n\n  ul.list-group.answer-list-group{\n  height: 100%;\n  min-height: 630px;\n}\n\n\n  ul.list-group.answer-list-group>li {\n  background-color: #c9c9c9 !important;\n  color: var(--text-dark-color) !important;\n}\n\n\n  li.empty-drag {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 24px;\n  color: var(--text-fade-color);\n  background-color: #e1e1e1 !important;\n}\n\n\n  /* R-01 */\n\n\n  .sortable {\n  background: #eee;\n  border-radius: 0.25rem;\n  min-height: 40px;\n}\n\n\n  .cursor {\n  cursor: move;\n}\n\n\n  .setAligment {\n  padding: 8px 10px;\n}\n\n\n  .drop-container {\n  line-height: 2;\n}\n\n\n  .paragraph-question-text{\n    font-size: 18px;\n    color: var(--text-dark-color);\n}\n\n\n  .fib-drag-list {\n  background-color: var(--reading-color);\n  overflow: overlay;\n  \n}\n\n\n  /* R-03 */\n\n\n  ul.list-group {\n  padding: 8px;\n  max-height: 630px;\n  /* min-height: 630px; */\n  overflow: overlay;\n}\n\n\n  li.list-group-item {\n  border: 1.5px solid;\n  border-radius: 0px;\n  margin: 8px;\n  cursor: move;\n  color: var(--text-light-color);\n  background-color: var(--reading-color);\n  text-align: center;\n  font-weight: 500;\n}\n\n\n  .question {\n  line-height: 2;\n  max-height: 630px;\n}\n\n\n  .dragable {\n  min-width: 120px;\n  height: 38px;\n  display: inline-block;\n  vertical-align: middle;\n  padding: 0 5px;\n  text-align: center;\n}\n\n\n  .reorder-left {\n  background-color: white;\n}\n\n\n  .reorder-right {\n  background-color: #e1e1e1 !important;\n}\n\n\n  .reorder-list>li{\n  background-color: #c9c9c9 !important;\n  color: var(--text-dark-color) !important;\n  border: 1.5px solid #ffffff;\n}\n\n\n  .reorder-list{\n  background-color: #e1e1e1  !important;\n}\n\n\n  .fib-answer {\n  display: inline-block;\n  padding: 4px;\n  background: #c8ffbe;\n  border-radius: 4px;\n  margin-left: 6px;\n  font-weight: 500;\n}\n\n\n  .fib-drag-list {\n  background-color: var(--text-light-color);\n  overflow: overlay;\n}\n\n\n  .fib-drag-list>li{\n  color: var(--text-dark-color);\n  background-color: #f3f3bc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3F1ZXN0aW9uLWNvbXBvbmVudHMvcmVhZGluZy1zY29yZS9yZWFkaW5nLXNjb3JlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksaUJBQWlCO0VBQ25COzs7RUFHQTtJQUNFLGNBQWM7SUFDZCxvQkFBYTtJQUFiLGFBQWE7SUFDYiw4QkFBbUI7SUFBbkIsNkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix5QkFBOEI7WUFBOUIsOEJBQThCO0lBQzlCLCtDQUErQztJQUMvQyxVQUFVO0lBQ1YsYUFBYTtJQUNiLFNBQVM7RUFDWDs7O0VBRUE7SUFDRSxjQUFjO0lBQ2Qsb0JBQWE7SUFBYixhQUFhO0lBQ2IsOEJBQW1CO0lBQW5CLDZCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIseUJBQThCO1lBQTlCLDhCQUE4QjtJQUM5Qiw4REFBOEQ7SUFDOUQsYUFBYTtJQUNiLFNBQVM7RUFDWDs7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCOzs7RUFHQTtJQUNFLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCOzs7RUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOzs7RUFFQTtFQUNFLGNBQWM7QUFDaEI7OztFQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7OztFQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQiw4QkFBOEI7QUFDaEM7OztFQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOzs7RUFJQTtFQUNFLFlBQVk7RUFDWixvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7OztFQUNBLFNBQVM7OztFQUVUO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7OztFQUVBO0VBQ0UsWUFBWTtBQUNkOzs7RUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7O0VBRUE7RUFDRSxjQUFjO0FBQ2hCOzs7RUFFQTtBQUNBLGtCQUFrQjtJQUNkLCtCQUErQjtJQUMvQixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7OztFQUVBO0VBQ0UsK0JBQStCO0VBQy9CLHlCQUF5QjtFQUN6QixvQ0FBb0M7QUFDdEM7OztFQUVBO0VBQ0UseUJBQXlCO0FBQzNCOzs7RUFFQTtJQUNJLGVBQWU7SUFDZiw2QkFBNkI7QUFDakM7OztFQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjs7QUFFbkI7OztFQUNBLFNBQVM7OztFQUVUO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7O0VBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7O0VBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7O0VBQ0E7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COzs7RUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLDRCQUE0QjtBQUM5Qjs7O0VBSUE7RUFDRSw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7O0VBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtBQUMvQjs7O0VBR0E7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COzs7RUFDQTtFQUNFLG9DQUFvQztFQUNwQyx3Q0FBd0M7QUFDMUM7OztFQUdBO0VBQ0UsWUFBWTtFQUNaLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG9DQUFvQztBQUN0Qzs7O0VBQ0EsU0FBUzs7O0VBRVQ7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7O0VBRUE7RUFDRSxZQUFZO0FBQ2Q7OztFQUVBO0VBQ0UsaUJBQWlCO0FBQ25COzs7RUFFQTtFQUNFLGNBQWM7QUFDaEI7OztFQUVBO0lBQ0ksZUFBZTtJQUNmLDZCQUE2QjtBQUNqQzs7O0VBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsaUJBQWlCOztBQUVuQjs7O0VBQ0EsU0FBUzs7O0VBRVQ7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7OztFQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixzQ0FBc0M7RUFDdEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7O0VBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COzs7RUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOzs7RUFHQTtFQUNFLHVCQUF1QjtBQUN6Qjs7O0VBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7OztFQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHdDQUF3QztFQUN4QywyQkFBMkI7QUFDN0I7OztFQUdBO0VBQ0UscUNBQXFDO0FBQ3ZDOzs7RUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOzs7RUFHQTtFQUNFLHlDQUF5QztFQUN6QyxpQkFBaUI7QUFDbkI7OztFQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9xdWVzdGlvbi1jb21wb25lbnRzL3JlYWRpbmctc2NvcmUvcmVhZGluZy1zY29yZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uc2V0QWxpZ21lbnQge1xuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xuICB9XG5cblxuICAuYWN0dWFsIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJhY2tncm91bmQ6ICMyOGEwMTIgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgXG4gIC5vYnRhaW4ge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYmFja2dyb3VuZDogdmFyKC0tdGV4dC1mYWRlLWNvbG9yKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgXG4gIC5kcmFnYWJsZSB7XG4gICAgbWluLXdpZHRoOiAxMjBweDtcbiAgICBoZWlnaHQ6IDM4cHg7XG4gICAgYmFja2dyb3VuZDogI2ViZWJlYjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBwYWRkaW5nOiAwIDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG5cblxuICAud3JvbmctY2xhc3Mge1xuICAgIGJhY2tncm91bmQ6ICNmZjFhMDc1MztcbiAgICBjb2xvcjogIzJiMzM0NTtcbn1cblxuLmNvcnJlY3QtY2xhc3N7XG4gIGJhY2tncm91bmQ6ICMyOGEwMTIzOTtcbiAgY29sb3I6ICMyYjMzNDU7XG59XG5cbi5kcm9wLWNvbnRhaW5lciB7XG4gIGxpbmUtaGVpZ2h0OiAyO1xufVxuXG4ucXVlc3Rpb24tdGl0bGUge1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrLWNvbG9yKTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uYW5zd2VyLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodC1jb2xvcik7XG59XG5cbmkuZmEuZmEtYXJyb3dzIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBtYXJnaW4tcmlnaHQ6IDE0cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuXG5cbmxpLmVtcHR5LWRyYWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjOGJhMzhiO1xufVxuLyogUi0wMSAqL1xuXG4uc29ydGFibGUge1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBtaW4taGVpZ2h0OiA0MHB4O1xufVxuXG4uY3Vyc29yIHtcbiAgY3Vyc29yOiBtb3ZlO1xufVxuXG4uc2V0QWxpZ21lbnQge1xuICBwYWRkaW5nOiA4cHggMTBweDtcbn1cblxuLmRyb3AtY29udGFpbmVyIHtcbiAgbGluZS1oZWlnaHQ6IDI7XG59XG5cbi5zZWxlY3QtYm94e1xuYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICNmNWJiYjY7XG4gICAgYm9yZGVyOiB1bnNldDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2JmMzUyOTtcbiAgICBjb2xvcjogI2JmMzUyOTtcbn1cblxuLmlzQ29ycmVjdHtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzg2ZGI3NjtcbiAgY29sb3I6ICMyOGEwMTIgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzI4YTAxMiAhaW1wb3J0YW50O1xufVxuXG5vcHRpb24uc2VsZWN0ZWRDb3JyZWN0e1xuICBjb2xvcjogIzI4YTAxMiAhaW1wb3J0YW50O1xufVxuXG4ucGFyYWdyYXBoLXF1ZXN0aW9uLXRleHR7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmstY29sb3IpO1xufVxuXG4uZmliLWRyYWctbGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XG4gIG92ZXJmbG93OiBvdmVybGF5O1xuICBcbn1cbi8qIFItMDMgKi9cblxudWwubGlzdC1ncm91cCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1heC1oZWlnaHQ6IDYzMHB4O1xufVxuaS5mYS5mYS10aW1lcy1jaXJjbGUge1xuICBjb2xvcjogI2JmMzUyOTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuaS5mYS5mYS1jaGVjay1jaXJjbGV7XG4gIGNvbG9yOiAjMjhhMDEyO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4ucXVlc3Rpb24ge1xuICBsaW5lLWhlaWdodDogMjtcbiAgbWF4LWhlaWdodDogNjMwcHg7XG59XG5cbi5kcmFnYWJsZSB7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMzhweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nOiAwIDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IHNvbGlkIDFweCAjYmYzNTI5O1xuICBjb2xvcjogI2JmMzUyOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cblxuXG4ucXVlc3Rpb24tdGl0bGUge1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrLWNvbG9yKTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uYW5zd2VyLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrLWNvbG9yKTtcbn1cblxuXG51bC5saXN0LWdyb3VwLmFuc3dlci1saXN0LWdyb3Vwe1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDYzMHB4O1xufVxudWwubGlzdC1ncm91cC5hbnN3ZXItbGlzdC1ncm91cD5saSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjOWM5YzkgIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyay1jb2xvcikgIWltcG9ydGFudDtcbn1cblxuXG5saS5lbXB0eS1kcmFnIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1mYWRlLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZTFlMSAhaW1wb3J0YW50O1xufVxuLyogUi0wMSAqL1xuXG4uc29ydGFibGUge1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBtaW4taGVpZ2h0OiA0MHB4O1xufVxuXG4uY3Vyc29yIHtcbiAgY3Vyc29yOiBtb3ZlO1xufVxuXG4uc2V0QWxpZ21lbnQge1xuICBwYWRkaW5nOiA4cHggMTBweDtcbn1cblxuLmRyb3AtY29udGFpbmVyIHtcbiAgbGluZS1oZWlnaHQ6IDI7XG59XG5cbi5wYXJhZ3JhcGgtcXVlc3Rpb24tdGV4dHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6IHZhcigtLXRleHQtZGFyay1jb2xvcik7XG59XG5cbi5maWItZHJhZy1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVhZGluZy1jb2xvcik7XG4gIG92ZXJmbG93OiBvdmVybGF5O1xuICBcbn1cbi8qIFItMDMgKi9cblxudWwubGlzdC1ncm91cCB7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWF4LWhlaWdodDogNjMwcHg7XG4gIC8qIG1pbi1oZWlnaHQ6IDYzMHB4OyAqL1xuICBvdmVyZmxvdzogb3ZlcmxheTtcbn1cblxubGkubGlzdC1ncm91cC1pdGVtIHtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBtYXJnaW46IDhweDtcbiAgY3Vyc29yOiBtb3ZlO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodC1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlYWRpbmctY29sb3IpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5xdWVzdGlvbiB7XG4gIGxpbmUtaGVpZ2h0OiAyO1xuICBtYXgtaGVpZ2h0OiA2MzBweDtcbn1cblxuLmRyYWdhYmxlIHtcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAzOHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuLnJlb3JkZXItbGVmdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ucmVvcmRlci1yaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWUxZTEgIWltcG9ydGFudDtcbn1cblxuLnJlb3JkZXItbGlzdD5saXtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M5YzljOSAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrLWNvbG9yKSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICNmZmZmZmY7XG59XG5cblxuLnJlb3JkZXItbGlzdHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZTFlMSAgIWltcG9ydGFudDtcbn1cblxuLmZpYi1hbnN3ZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDRweDtcbiAgYmFja2dyb3VuZDogI2M4ZmZiZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5cbi5maWItZHJhZy1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1saWdodC1jb2xvcik7XG4gIG92ZXJmbG93OiBvdmVybGF5O1xufVxuXG4uZmliLWRyYWctbGlzdD5saXtcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyay1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzYmM7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shared/question-components/reading-score/reading-score.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/shared/question-components/reading-score/reading-score.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: ReadingScoreComponent */

  /***/
  function srcAppSharedQuestionComponentsReadingScoreReadingScoreComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReadingScoreComponent", function () {
      return ReadingScoreComponent;
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


    var _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/enum/app_enum */
    "./src/app/enum/app_enum.ts");
    /* harmony import */


    var _core_http_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @core/http/common.service */
    "./src/app/core/http/common.service.ts");

    let ReadingScoreComponent = class ReadingScoreComponent {
      constructor(_cservice) {
        this._cservice = _cservice;
        this.readingCode = _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["ReadingCode"];
        this.index = 0;
      }

      ngOnInit() {
        console.log(this.result);
      }

      ngOnChanges(changes) {
        if (this.result.questionType == this.readingCode.R005) {
          setTimeout(() => {
            let ques = document.getElementById("multi" + this.result.questionId);
            ques.append(this._cservice.stringToEl("<div>" + this.result.htmlquestion + "</div>"));
          });
        } else if (this.result.questionType == this.readingCode.R004) {
          setTimeout(() => {
            let ques = document.getElementById("single" + this.result.questionId);
            ques.append(this._cservice.stringToEl("<div>" + this.result.htmlquestion + "</div>"));
          });
        }
      }

    };

    ReadingScoreComponent.ctorParameters = () => [{
      type: _core_http_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ReadingScoreComponent.prototype, "result", void 0);
    ReadingScoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'reading-score',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reading-score.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/question-components/reading-score/reading-score.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reading-score.component.css */
      "./src/app/shared/question-components/reading-score/reading-score.component.css")).default]
    })], ReadingScoreComponent);
    /***/
  },

  /***/
  "./src/app/shared/question-components/score-by-module/score-by-module.component.css":
  /*!******************************************************************************************!*\
    !*** ./src/app/shared/question-components/score-by-module/score-by-module.component.css ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedQuestionComponentsScoreByModuleScoreByModuleComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9xdWVzdGlvbi1jb21wb25lbnRzL3Njb3JlLWJ5LW1vZHVsZS9zY29yZS1ieS1tb2R1bGUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/shared/question-components/score-by-module/score-by-module.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/shared/question-components/score-by-module/score-by-module.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: ScoreByModuleComponent */

  /***/
  function srcAppSharedQuestionComponentsScoreByModuleScoreByModuleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScoreByModuleComponent", function () {
      return ScoreByModuleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let ScoreByModuleComponent = class ScoreByModuleComponent {
      constructor() {}

      ngOnInit() {}

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ScoreByModuleComponent.prototype, "scoreResult", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ScoreByModuleComponent.prototype, "moduleName", void 0);
    ScoreByModuleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'score-by-module',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./score-by-module.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/question-components/score-by-module/score-by-module.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./score-by-module.component.css */
      "./src/app/shared/question-components/score-by-module/score-by-module.component.css")).default]
    })], ScoreByModuleComponent);
    /***/
  },

  /***/
  "./src/app/shared/question-components/speaking-question/speaking-question.component.css":
  /*!**********************************************************************************************!*\
    !*** ./src/app/shared/question-components/speaking-question/speaking-question.component.css ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedQuestionComponentsSpeakingQuestionSpeakingQuestionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\nli.list-group-item {\n    position: relative;\n    display: block;\n    border: 1px solid hotpink;\n    margin-bottom: 5px;\n    padding: 10px;\n    text-align: center;\n    /* -webkit-animation: fadeIn 0.5s linear;\n    animation: fadeIn 0.5s linear;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both; */\n}\n\n.mcq-list{\n    -webkit-animation: fadeIn 0.5s linear;\n    animation: fadeIn 0.5s linear;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n}\n\n.list-group,.question,.drop-container,.anni-fadeinout{\n    -webkit-animation: fadeIn2 0.6s linear;\n    animation: fadeIn2 0.6s linear;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n}\n\n/* li:nth-child(1) {\n    -webkit-animation-delay: 0.25s;\n    animation-delay: 0.25s;\n}\n\nli:nth-child(2) {\n    -webkit-animation-delay: 0.5s;\n    animation-delay: 0.5s;\n}\n\nli:nth-child(3) {\n    -webkit-animation-delay: 0.75s;\n    animation-delay: 0.75s;\n}\n\nli:nth-child(4) {\n    -webkit-animation-delay: 1s;\n    animation-delay: 1s;\n}\n\nli:nth-child(5) {\n    -webkit-animation-delay: 1.25s;\n    animation-delay: 1.25s;\n} */\n\n@-webkit-keyframes fadeIn {\n    0% {\n        opacity: 0;\n        top: 100px;\n    }\n    75% {\n        opacity: 0.5;\n        top: 0px;\n    }\n    100% {\n        opacity: 1;\n        top: 0;\n    }\n}\n\n@keyframes fadeIn {\n    0% {\n        opacity: 0;\n        top: 100px;\n    }\n    75% {\n        opacity: 0.5;\n        top: 0px;\n    }\n    100% {\n        opacity: 1;\n        top: 0;\n    }\n}\n\n@-webkit-keyframes fadeIn2 {\n    0% {\n        margin-top: 600px;\n        opacity: 0;\n    }\n    75% {\n        opacity: 1;\n        margin-top: 0.5px;\n    }\n    100% {\n        opacity: 1;\n        margin-top: 0px;\n    }\n}\n\n@keyframes fadeIn2 {\n    0% {\n        margin-top: 600px;\n        opacity: 0;\n    }\n    75% {\n        opacity: 1;\n        margin-top: 0.5px;\n    }\n    100% {\n        opacity: 1;\n        margin-top: 0px;\n    }\n}\n\nli.list-group-item:after {\n    position: absolute;\n    right: 0;\n    left: auto;\n    -webkit-transition: 0.3s;\n    transition: 0.3s;\n    content: \"\";\n    width: 0;\n    bottom: 0;\n    height: 3px;\n    background: var(--half-bg-color);\n}\n\nli.list-group-item:hover {\n    cursor: pointer;\n}\n\nli.list-group-item:hover:after {\n    width: 100%;\n    left: 0;\n}\n\n.mcq_box:hover{\n    -webkit-animation: storm 0.7s ease-in-out both;\n            animation: storm 0.7s ease-in-out both;\n}\n\n.mcq_box:after {\n    position: absolute;\n    right: 0;\n    left: auto;\n    -webkit-transition: 0.6s;\n    transition: 0.6s;\n    content: \"\";\n    width: 0;\n    bottom: 0;\n    height: 3px;\n    background: var(--half-bg-color);\n}\n\n.mcq_box:hover:after {\n    width: 100%;\n    left: 0;\n}\n\nli.list-group-item:hover {\n    -webkit-animation: storm 0.7s ease-in-out both;\n            animation: storm 0.7s ease-in-out both;\n}\n\n/* li:hover span {\n    animation: storm 0.7s ease-in-out both;\n    animation-delay: 0.06s;\n  } */\n\n@-webkit-keyframes rotate {\n    0% {\n        -webkit-transform: rotate(0deg) translate3d(0, 0, 0);\n                transform: rotate(0deg) translate3d(0, 0, 0);\n    }\n    25% {\n        -webkit-transform: rotate(3deg) translate3d(0, 0, 0);\n                transform: rotate(3deg) translate3d(0, 0, 0);\n    }\n    50% {\n        -webkit-transform: rotate(-3deg) translate3d(0, 0, 0);\n                transform: rotate(-3deg) translate3d(0, 0, 0);\n    }\n    75% {\n        -webkit-transform: rotate(1deg) translate3d(0, 0, 0);\n                transform: rotate(1deg) translate3d(0, 0, 0);\n    }\n    100% {\n        -webkit-transform: rotate(0deg) translate3d(0, 0, 0);\n                transform: rotate(0deg) translate3d(0, 0, 0);\n    }\n}\n\n@keyframes rotate {\n    0% {\n        -webkit-transform: rotate(0deg) translate3d(0, 0, 0);\n                transform: rotate(0deg) translate3d(0, 0, 0);\n    }\n    25% {\n        -webkit-transform: rotate(3deg) translate3d(0, 0, 0);\n                transform: rotate(3deg) translate3d(0, 0, 0);\n    }\n    50% {\n        -webkit-transform: rotate(-3deg) translate3d(0, 0, 0);\n                transform: rotate(-3deg) translate3d(0, 0, 0);\n    }\n    75% {\n        -webkit-transform: rotate(1deg) translate3d(0, 0, 0);\n                transform: rotate(1deg) translate3d(0, 0, 0);\n    }\n    100% {\n        -webkit-transform: rotate(0deg) translate3d(0, 0, 0);\n                transform: rotate(0deg) translate3d(0, 0, 0);\n    }\n}\n\n@-webkit-keyframes storm {\n    0% {\n        -webkit-transform: translate3d(0, 0, 0) translateZ(0);\n                transform: translate3d(0, 0, 0) translateZ(0);\n    }\n    25% {\n        -webkit-transform: translate3d(4px, 0, 0) translateZ(0);\n                transform: translate3d(4px, 0, 0) translateZ(0);\n    }\n    50% {\n        -webkit-transform: translate3d(-3px, 0, 0) translateZ(0);\n                transform: translate3d(-3px, 0, 0) translateZ(0);\n    }\n    75% {\n        -webkit-transform: translate3d(2px, 0, 0) translateZ(0);\n                transform: translate3d(2px, 0, 0) translateZ(0);\n    }\n    100% {\n        -webkit-transform: translate3d(0, 0, 0) translateZ(0);\n                transform: translate3d(0, 0, 0) translateZ(0);\n    }\n}\n\n@keyframes storm {\n    0% {\n        -webkit-transform: translate3d(0, 0, 0) translateZ(0);\n                transform: translate3d(0, 0, 0) translateZ(0);\n    }\n    25% {\n        -webkit-transform: translate3d(4px, 0, 0) translateZ(0);\n                transform: translate3d(4px, 0, 0) translateZ(0);\n    }\n    50% {\n        -webkit-transform: translate3d(-3px, 0, 0) translateZ(0);\n                transform: translate3d(-3px, 0, 0) translateZ(0);\n    }\n    75% {\n        -webkit-transform: translate3d(2px, 0, 0) translateZ(0);\n                transform: translate3d(2px, 0, 0) translateZ(0);\n    }\n    100% {\n        -webkit-transform: translate3d(0, 0, 0) translateZ(0);\n                transform: translate3d(0, 0, 0) translateZ(0);\n    }\n}\n\n.img-wrapper {\n  width: 500px;\n  max-height: 500px;\n  /* box-shadow: 0px 3px 6px #00000029; */\n}\n\n/* .footer-button-block{\n  justify-content: space-between !important;\n} */\n\n.img-wrapper img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.loader {\n  border: 5px solid #ffffff;\n  border-radius: 50%;\n  border-top: 5px solid var(--speaking-color);\n  width: 30px;\n  height: 30px;\n  -webkit-animation: spin 1s linear infinite;\n  /* Safari */\n  animation: spin 1s linear infinite;\n}\n\n.img-loading {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 140px;\n  color: var(--speaking-color);\n}\n\n.text-paragraph {\n  font-weight: 500;\n  color: var(--text-dark-color);\n}\n\n.btn-evaluate {\n  background-color: #efefef;\n  border: solid 1px;\n  color: var(--text-dark-color);\n  padding: 0.4em 1.3em;\n  font-size: 1.2em;\n  border-radius: 0;\n  margin-top: 20px;\n}\n\n.footer-button-block{\n  padding-top: 0 !important;\n}\n\n/* Safari */\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL29yZGVyTGlzdC1hbmltYXRpb24uY3NzIiwic3JjL2FwcC9zaGFyZWQvcXVlc3Rpb24tY29tcG9uZW50cy9zcGVha2luZy1xdWVzdGlvbi9zcGVha2luZy1xdWVzdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQjs7O2dDQUc0QjtBQUNoQzs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyw2QkFBNkI7SUFDN0IsaUNBQWlDO0lBQ2pDLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHNDQUFzQztJQUN0Qyw4QkFBOEI7SUFDOUIsaUNBQWlDO0lBQ2pDLHlCQUF5QjtBQUM3Qjs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1Qkc7O0FBRUg7SUFDSTtRQUNJLFVBQVU7UUFDVixVQUFVO0lBQ2Q7SUFDQTtRQUNJLFlBQVk7UUFDWixRQUFRO0lBQ1o7SUFDQTtRQUNJLFVBQVU7UUFDVixNQUFNO0lBQ1Y7QUFDSjs7QUFiQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLFVBQVU7SUFDZDtJQUNBO1FBQ0ksWUFBWTtRQUNaLFFBQVE7SUFDWjtJQUNBO1FBQ0ksVUFBVTtRQUNWLE1BQU07SUFDVjtBQUNKOztBQUdBO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsZUFBZTtJQUNuQjtBQUNKOztBQWJBO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsVUFBVTtJQUNkO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0lBQ1Ysd0JBQWdCO0lBQWhCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsUUFBUTtJQUNSLFNBQVM7SUFDVCxXQUFXO0lBQ1gsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxPQUFPO0FBQ1g7O0FBRUE7SUFDSSw4Q0FBc0M7WUFBdEMsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0lBQ1Ysd0JBQWdCO0lBQWhCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsUUFBUTtJQUNSLFNBQVM7SUFDVCxXQUFXO0lBQ1gsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksV0FBVztJQUNYLE9BQU87QUFDWDs7QUFFQTtJQUNJLDhDQUFzQztZQUF0QyxzQ0FBc0M7QUFDMUM7O0FBRUE7OztLQUdLOztBQUVMO0lBQ0k7UUFDSSxvREFBNEM7Z0JBQTVDLDRDQUE0QztJQUNoRDtJQUNBO1FBQ0ksb0RBQTRDO2dCQUE1Qyw0Q0FBNEM7SUFDaEQ7SUFDQTtRQUNJLHFEQUE2QztnQkFBN0MsNkNBQTZDO0lBQ2pEO0lBQ0E7UUFDSSxvREFBNEM7Z0JBQTVDLDRDQUE0QztJQUNoRDtJQUNBO1FBQ0ksb0RBQTRDO2dCQUE1Qyw0Q0FBNEM7SUFDaEQ7QUFDSjs7QUFoQkE7SUFDSTtRQUNJLG9EQUE0QztnQkFBNUMsNENBQTRDO0lBQ2hEO0lBQ0E7UUFDSSxvREFBNEM7Z0JBQTVDLDRDQUE0QztJQUNoRDtJQUNBO1FBQ0kscURBQTZDO2dCQUE3Qyw2Q0FBNkM7SUFDakQ7SUFDQTtRQUNJLG9EQUE0QztnQkFBNUMsNENBQTRDO0lBQ2hEO0lBQ0E7UUFDSSxvREFBNEM7Z0JBQTVDLDRDQUE0QztJQUNoRDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxxREFBNkM7Z0JBQTdDLDZDQUE2QztJQUNqRDtJQUNBO1FBQ0ksdURBQStDO2dCQUEvQywrQ0FBK0M7SUFDbkQ7SUFDQTtRQUNJLHdEQUFnRDtnQkFBaEQsZ0RBQWdEO0lBQ3BEO0lBQ0E7UUFDSSx1REFBK0M7Z0JBQS9DLCtDQUErQztJQUNuRDtJQUNBO1FBQ0kscURBQTZDO2dCQUE3Qyw2Q0FBNkM7SUFDakQ7QUFDSjs7QUFoQkE7SUFDSTtRQUNJLHFEQUE2QztnQkFBN0MsNkNBQTZDO0lBQ2pEO0lBQ0E7UUFDSSx1REFBK0M7Z0JBQS9DLCtDQUErQztJQUNuRDtJQUNBO1FBQ0ksd0RBQWdEO2dCQUFoRCxnREFBZ0Q7SUFDcEQ7SUFDQTtRQUNJLHVEQUErQztnQkFBL0MsK0NBQStDO0lBQ25EO0lBQ0E7UUFDSSxxREFBNkM7Z0JBQTdDLDZDQUE2QztJQUNqRDtBQUNKOztBQ3hLQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsdUNBQXVDO0FBQ3pDOztBQUVBOztHQUVHOztBQUVIO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBbUI7S0FBbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiwyQ0FBMkM7RUFDM0MsV0FBVztFQUNYLFlBQVk7RUFDWiwwQ0FBMEM7RUFDMUMsV0FBVztFQUNYLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSxXQUFXOztBQUVYO0VBQ0U7SUFDRSwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLGlDQUFpQztFQUNuQztBQUNGOztBQUVBO0VBQ0U7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCO0VBQzNCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvcXVlc3Rpb24tY29tcG9uZW50cy9zcGVha2luZy1xdWVzdGlvbi9zcGVha2luZy1xdWVzdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmxpLmxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGhvdHBpbms7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8qIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gMC41cyBsaW5lYXI7XG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMC41cyBsaW5lYXI7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7ICovXG59XG5cbi5tY3EtbGlzdHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDAuNXMgbGluZWFyO1xuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNXMgbGluZWFyO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG4ubGlzdC1ncm91cCwucXVlc3Rpb24sLmRyb3AtY29udGFpbmVyLC5hbm5pLWZhZGVpbm91dHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluMiAwLjZzIGxpbmVhcjtcbiAgICBhbmltYXRpb246IGZhZGVJbjIgMC42cyBsaW5lYXI7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG4vKiBsaTpudGgtY2hpbGQoMSkge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjI1cztcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuMjVzO1xufVxuXG5saTpudGgtY2hpbGQoMikge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjVzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC41cztcbn1cblxubGk6bnRoLWNoaWxkKDMpIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC43NXM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjc1cztcbn1cblxubGk6bnRoLWNoaWxkKDQpIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMXM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbn1cblxubGk6bnRoLWNoaWxkKDUpIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMS4yNXM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxLjI1cztcbn0gKi9cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdG9wOiAxMDBweDtcbiAgICB9XG4gICAgNzUlIHtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICB0b3A6IDBweDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRvcDogMDtcbiAgICB9XG59XG5cblxuQGtleWZyYW1lcyBmYWRlSW4yIHtcbiAgICAwJSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDYwMHB4O1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICA3NSUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBtYXJnaW4tdG9wOiAwLjVweDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICB9XG59XG5cbmxpLmxpc3QtZ3JvdXAtaXRlbTphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IGF1dG87XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHdpZHRoOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oYWxmLWJnLWNvbG9yKTtcbn1cblxubGkubGlzdC1ncm91cC1pdGVtOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmxpLmxpc3QtZ3JvdXAtaXRlbTpob3ZlcjphZnRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGVmdDogMDtcbn1cblxuLm1jcV9ib3g6aG92ZXJ7XG4gICAgYW5pbWF0aW9uOiBzdG9ybSAwLjdzIGVhc2UtaW4tb3V0IGJvdGg7XG59XG5cbi5tY3FfYm94OmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogYXV0bztcbiAgICB0cmFuc2l0aW9uOiAwLjZzO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGhlaWdodDogM3B4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWhhbGYtYmctY29sb3IpO1xufVxuXG4ubWNxX2JveDpob3ZlcjphZnRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGVmdDogMDtcbn1cblxubGkubGlzdC1ncm91cC1pdGVtOmhvdmVyIHtcbiAgICBhbmltYXRpb246IHN0b3JtIDAuN3MgZWFzZS1pbi1vdXQgYm90aDtcbn1cblxuLyogbGk6aG92ZXIgc3BhbiB7XG4gICAgYW5pbWF0aW9uOiBzdG9ybSAwLjdzIGVhc2UtaW4tb3V0IGJvdGg7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjA2cztcbiAgfSAqL1xuXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB9XG4gICAgMjUlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0zZGVnKSB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB9XG4gICAgNzUlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMWRlZykgdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgc3Rvcm0ge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSB0cmFuc2xhdGVaKDApO1xuICAgIH1cbiAgICAyNSUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDRweCwgMCwgMCkgdHJhbnNsYXRlWigwKTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtM3B4LCAwLCAwKSB0cmFuc2xhdGVaKDApO1xuICAgIH1cbiAgICA3NSUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMCwgMCkgdHJhbnNsYXRlWigwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgdHJhbnNsYXRlWigwKTtcbiAgICB9XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL2Nzcy9vcmRlckxpc3QtYW5pbWF0aW9uLmNzcyc7XG4uaW1nLXdyYXBwZXIge1xuICB3aWR0aDogNTAwcHg7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAvKiBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7ICovXG59XG5cbi8qIC5mb290ZXItYnV0dG9uLWJsb2Nre1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcbn0gKi9cblxuLmltZy13cmFwcGVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5sb2FkZXIge1xuICBib3JkZXI6IDVweCBzb2xpZCAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci10b3A6IDVweCBzb2xpZCB2YXIoLS1zcGVha2luZy1jb2xvcik7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgLyogU2FmYXJpICovXG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbi5pbWctbG9hZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDE0MHB4O1xuICBjb2xvcjogdmFyKC0tc3BlYWtpbmctY29sb3IpO1xufVxuXG4udGV4dC1wYXJhZ3JhcGgge1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrLWNvbG9yKTtcbn1cblxuLmJ0bi1ldmFsdWF0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gIGJvcmRlcjogc29saWQgMXB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrLWNvbG9yKTtcbiAgcGFkZGluZzogMC40ZW0gMS4zZW07XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5mb290ZXItYnV0dG9uLWJsb2Nre1xuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xufVxuXG4vKiBTYWZhcmkgKi9cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/question-components/speaking-question/speaking-question.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/shared/question-components/speaking-question/speaking-question.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: SpeakingQuestionComponent */

  /***/
  function srcAppSharedQuestionComponentsSpeakingQuestionSpeakingQuestionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeakingQuestionComponent", function () {
      return SpeakingQuestionComponent;
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


    var _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/enum/app_enum */
    "./src/app/enum/app_enum.ts");
    /* harmony import */


    var _app_shared_basic_components_components_evaluate_question_recoder_recoder_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/shared/basic-components/components/evaluate-question/recoder/recoder.component */
    "./src/app/shared/basic-components/components/evaluate-question/recoder/recoder.component.ts");
    /* harmony import */


    var _app_shared_models_SpeakingModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/shared/models/SpeakingModel */
    "./src/app/shared/models/SpeakingModel.ts");

    let SpeakingQuestionComponent = class SpeakingQuestionComponent {
      constructor() {
        this.speakingCode = _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["SpeakingCode"];
        this.isNext = false;
        this.answerEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isnonEvaluate = false;
        this.isImgLoad = true;
        this.isRecord = false;
        this.isLoading = false;
        this.clickNoEvaluate = false;
      }

      ngOnInit() {}

      onemitFile(data) {
        console.log('reach there', data);
        this.isLoading = true;

        if (data.recoderStatus == "end") {
          this.isRecord = false;
          let evaluate = new _app_shared_models_SpeakingModel__WEBPACK_IMPORTED_MODULE_4__["SpeakingEvaluate"]();
          evaluate.questionId = this.questionData.questionId;
          evaluate.file = data.file;
          evaluate.blobUrl = data.blobUrl;
          evaluate.questionType = this.questionData.questionType;
          if (this.clickNoEvaluate) evaluate.isNoEvaluate = this.clickNoEvaluate;
          this.answerEmit.emit(evaluate);
        }
      }

      onImgLoad() {
        this.isImgLoad = false;
        this.isRecord = true;
        setTimeout(() => {
          this.recoder.onRestart();
        }, 100);
      }

      audioStatus(e) {
        if (e == "ended") {
          this.isRecord = true;
          setTimeout(() => {
            this.recoder.onRestart();
          }, 100);
          this.audioState = "end";
        }
      }

      ngAfterViewInit() {//Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
      }

      ngOnChanges(changes) {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        if (changes.questionData.firstChange == false) {
          if (this.questionData.questionType == 'S001') this.recoder.onRestart();else if (this.questionData.questionType == 'S002') {
            this.audioState = 'start';
          }
        }

        setTimeout(() => {
          this.isLoading = false;
        }, 100);
      }

      onSubmit() {
        console.log('here warning');
        this.recoder.onEnd();
      }

      noEvluating() {
        console.log('reach there');
        this.clickNoEvaluate = true;
        this.recoder.isNoEvaluate = true;
        this.recoder.onEnd();
      }

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_app_shared_basic_components_components_evaluate_question_recoder_recoder_component__WEBPACK_IMPORTED_MODULE_3__["RecoderComponent"], {
      static: false
    })], SpeakingQuestionComponent.prototype, "recoder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SpeakingQuestionComponent.prototype, "questionData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SpeakingQuestionComponent.prototype, "recoderStatusInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SpeakingQuestionComponent.prototype, "isNext", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SpeakingQuestionComponent.prototype, "answerEmit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SpeakingQuestionComponent.prototype, "isnonEvaluate", void 0);
    SpeakingQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'speaking-question',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./speaking-question.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/question-components/speaking-question/speaking-question.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./speaking-question.component.css */
      "./src/app/shared/question-components/speaking-question/speaking-question.component.css")).default]
    })], SpeakingQuestionComponent);
    /***/
  },

  /***/
  "./src/app/shared/question-components/speaking-score/speaking-score.component.css":
  /*!****************************************************************************************!*\
    !*** ./src/app/shared/question-components/speaking-score/speaking-score.component.css ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedQuestionComponentsSpeakingScoreSpeakingScoreComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".score-box {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n}\n\n.progress-bar {\n  background-color: #e9ecef;\n  height: 20px;\n}\n\n.process {\n  height: 20px;\n}\n\n.progress-bar>div {\n  width: 12.5%;\n  font-size: 12px;\n  font-weight: 500;\n  padding-top: 1px;\n}\n\n.step1 {\n  background-color: #7B0702;\n}\n\n.step2 {\n  background-color: #D31912;\n}\n\n.step3 {\n  background-color: #FFFF9F;\n  color: #6d7891;\n}\n\n.step4 {\n  background-color: #F5F51C;\n  color: #6d7891;\n}\n\n.step5 {\n  background-color: #FFE36E;\n}\n\n.step6 {\n  background-color: #FFC107;\n}\n\n.step7 {\n  background-color: #6df954;\n}\n\n.step8 {\n  background-color: #28A012;\n}\n\n.arrow_box {\n  position: relative;\n  top: -11px;\n  /* background: #f7f7fb;\n      border: 4px solid #f7f7fb; */\n}\n\n.arrow_box:after, .arrow_box:before {\n  top: 100%;\n  /* left: 50%; */\n  border: solid transparent;\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n\n.arrow_box:after {\n  border-color: rgba(136, 183, 213, 0);\n  border-top-color: var(--speaking-color);\n  border-width: 9px;\n  margin-left: -9px;\n}\n\n.arrow_box:before {\n  border-color: rgba(194, 225, 245, 0);\n  border-top-color: #f7f7fb;\n  border-width: 12px;\n  margin-left: -12px;\n}\n\n/* loader */\n\n.img-wrapper img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.loader {\n  border: 5px solid #ffffff;\n  border-radius: 50%;\n  border-top: 5px solid var(--speaking-color);\n  width: 30px;\n  height: 30px;\n  -webkit-animation: spin 1s linear infinite;\n  /* Safari */\n  animation: spin 1s linear infinite;\n}\n\n.img-loading {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 400px;\n  color: #007bff;\n}\n\n/* Safari */\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n.img-wrapper {\n  max-width: 500px;\n  max-height: 500px;\n  /* box-shadow: 0px 3px 6px #00000029; */\n}\n\nlabel-text.set-width {\n  width: 180px;\n}\n\n.solid-header {\n  background-color: var(--speaking-color);\n  color: var(--text-light-color);\n  font-weight: 500;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 20%;\n}\n\n.light-header {\n  padding: 20px;\n  background-color: white;\n  color: var(--text-dark-color);\n  width: 80%;\n}\n\n.set-boder-bottom {\n  border-bottom: solid 1px #cbcdcb;\n}\n\n.result-info {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  background-color: white;\n}\n\n.result-role {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n.comment-header {\n  background-color: #d31912;\n  color: var(--text-light-color);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  font-weight: 600;\n  padding: 8px;\n  margin-top: 20px;\n}\n\n.comment-text {\n  background-color: var(--text-light-color);\n  color: var(--text-dark-color);\n  padding: 10px;\n  font-weight: 500;\n}\n\n.error, .good {\n  width: 12px;\n  height: 12px;\n  background-color: #D31912;\n  border-radius: 50%;\n}\n\n.show-grade {\n  display: -webkit-box;\n  display: flex;\n  padding-top: 20px;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.good {\n  background-color: #28A012 !important;\n}\n\np.error-text, p.good-text {\n  margin-bottom: 0;\n  font-weight: 500;\n  margin-left: 6px;\n  margin-right: 20px;\n  color: #D31912;\n}\n\np.good-text {\n  color: #28A012;\n}\n\n.score-cirle {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  border-style: double;\n  font-size: 24px;\n  font-weight: 500;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 10px;\n}\n\n.score-fill-cirle {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background-color: var(--primary-color);\n  color: white;\n  font-size: 24px;\n  font-weight: 500;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 10px;\n}\n\n.col-md-4 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\np.result-title {\n  text-align: center;\n  font-size: 20px;\n  font-weight: 500;\n  color: var(--text-dark-color);\n}\n\np.lbl-text {\n  font-weight: 500;\n}\n\n.imag-box{\n  width: 80%;\n}\n\n@media only screen and (max-width: 760px) {\n  .result-info,.result-role {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n            flex-direction: column !important;\n  }\n  .solid-header {\n    width: 100%;\n  }\n  .light-header {\n    width: 100%;\n  }\n  .imag-box{\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3F1ZXN0aW9uLWNvbXBvbmVudHMvc3BlYWtpbmctc2NvcmUvc3BlYWtpbmctc2NvcmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWO2tDQUNnQztBQUNsQzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixTQUFTO0VBQ1QsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsdUNBQXVDO0VBQ3ZDLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUEsV0FBVzs7QUFFWDtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQW1CO0tBQW5CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsMkNBQTJDO0VBQzNDLFdBQVc7RUFDWCxZQUFZO0VBQ1osMENBQTBDO0VBQzFDLFdBQVc7RUFDWCxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUEsV0FBVzs7QUFFWDtFQUNFO0lBQ0UsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSxpQ0FBaUM7RUFDbkM7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qiw2QkFBNkI7RUFDN0IsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlDQUF5QztFQUN6Qyw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQix5QkFBbUI7VUFBbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNDQUFzQztFQUN0QyxZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIseUJBQW1CO1VBQW5CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFO0lBQ0UsdUNBQWlDO0lBQWpDLHdDQUFpQztZQUFqQyxpQ0FBaUM7RUFDbkM7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9xdWVzdGlvbi1jb21wb25lbnRzL3NwZWFraW5nLXNjb3JlL3NwZWFraW5nLXNjb3JlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2NvcmUtYm94IHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5wcm9ncmVzcy1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5wcm9jZXNzIHtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4ucHJvZ3Jlc3MtYmFyPmRpdiB7XG4gIHdpZHRoOiAxMi41JTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLXRvcDogMXB4O1xufVxuXG4uc3RlcDEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0IwNzAyO1xufVxuXG4uc3RlcDIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDMxOTEyO1xufVxuXG4uc3RlcDMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRjlGO1xuICBjb2xvcjogIzZkNzg5MTtcbn1cblxuLnN0ZXA0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjUxQztcbiAgY29sb3I6ICM2ZDc4OTE7XG59XG5cbi5zdGVwNSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkUzNkU7XG59XG5cbi5zdGVwNiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkMxMDc7XG59XG5cbi5zdGVwNyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZGY5NTQ7XG59XG5cbi5zdGVwOCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOEEwMTI7XG59XG5cbi5hcnJvd19ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTExcHg7XG4gIC8qIGJhY2tncm91bmQ6ICNmN2Y3ZmI7XG4gICAgICBib3JkZXI6IDRweCBzb2xpZCAjZjdmN2ZiOyAqL1xufVxuXG4uYXJyb3dfYm94OmFmdGVyLCAuYXJyb3dfYm94OmJlZm9yZSB7XG4gIHRvcDogMTAwJTtcbiAgLyogbGVmdDogNTAlOyAqL1xuICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xuICBjb250ZW50OiBcIiBcIjtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmFycm93X2JveDphZnRlciB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgxMzYsIDE4MywgMjEzLCAwKTtcbiAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tc3BlYWtpbmctY29sb3IpO1xuICBib3JkZXItd2lkdGg6IDlweDtcbiAgbWFyZ2luLWxlZnQ6IC05cHg7XG59XG5cbi5hcnJvd19ib3g6YmVmb3JlIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDE5NCwgMjI1LCAyNDUsIDApO1xuICBib3JkZXItdG9wLWNvbG9yOiAjZjdmN2ZiO1xuICBib3JkZXItd2lkdGg6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTJweDtcbn1cblxuLyogbG9hZGVyICovXG5cbi5pbWctd3JhcHBlciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4ubG9hZGVyIHtcbiAgYm9yZGVyOiA1cHggc29saWQgI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItdG9wOiA1cHggc29saWQgdmFyKC0tc3BlYWtpbmctY29sb3IpO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gIC8qIFNhZmFyaSAqL1xuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG4uaW1nLWxvYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDQwMHB4O1xuICBjb2xvcjogIzAwN2JmZjtcbn1cblxuLyogU2FmYXJpICovXG5cbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbi5pbWctd3JhcHBlciB7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAvKiBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMjk7ICovXG59XG5cbmxhYmVsLXRleHQuc2V0LXdpZHRoIHtcbiAgd2lkdGg6IDE4MHB4O1xufVxuXG4uc29saWQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3BlYWtpbmctY29sb3IpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodC1jb2xvcik7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMjAlO1xufVxuXG4ubGlnaHQtaGVhZGVyIHtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmstY29sb3IpO1xuICB3aWR0aDogODAlO1xufVxuXG4uc2V0LWJvZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2JjZGNiO1xufVxuXG4ucmVzdWx0LWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnJlc3VsdC1yb2xlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmNvbW1lbnQtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzMTkxMjtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQtY29sb3IpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uY29tbWVudC10ZXh0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1saWdodC1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmstY29sb3IpO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZXJyb3IsIC5nb29kIHtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0QzMTkxMjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uc2hvdy1ncmFkZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZ29vZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOEEwMTIgIWltcG9ydGFudDtcbn1cblxucC5lcnJvci10ZXh0LCBwLmdvb2QtdGV4dCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgY29sb3I6ICNEMzE5MTI7XG59XG5cbnAuZ29vZC10ZXh0IHtcbiAgY29sb3I6ICMyOEEwMTI7XG59XG5cbi5zY29yZS1jaXJsZSB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLXN0eWxlOiBkb3VibGU7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5zY29yZS1maWxsLWNpcmxlIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY29sLW1kLTQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5wLnJlc3VsdC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrLWNvbG9yKTtcbn1cblxucC5sYmwtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5pbWFnLWJveHtcbiAgd2lkdGg6IDgwJTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCkge1xuICAucmVzdWx0LWluZm8sLnJlc3VsdC1yb2xlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnNvbGlkLWhlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmxpZ2h0LWhlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmltYWctYm94e1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shared/question-components/speaking-score/speaking-score.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/shared/question-components/speaking-score/speaking-score.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: SpeakingScoreComponent */

  /***/
  function srcAppSharedQuestionComponentsSpeakingScoreSpeakingScoreComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeakingScoreComponent", function () {
      return SpeakingScoreComponent;
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


    var _core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @core/http/serviceIndex */
    "./src/app/core/http/serviceIndex.ts");

    let SpeakingScoreComponent = class SpeakingScoreComponent {
      constructor(_service) {
        this._service = _service;
        this.scorelists = [];
        this.textLabel = '';
        this.BASE64_MARKER = ';base64,';
      }

      ngOnInit() {
        this.scorelists.push(this.result);
        if (this.result.isNoEvaluate == false) setTimeout(() => {
          this.stringToEl();
        });
      }

      onImgLoad() {
        this.isImgLoad = false;
      }

      stringToEl() {
        for (let i = 0; i < this.scorelists.length; i++) {
          let ques = document.getElementById("spoken-text" + i);
          ques.append(this._service.stringToEl("<div>" + this.scorelists[i].userSpeech + "</div>"));
        }
      }

    };

    SpeakingScoreComponent.ctorParameters = () => [{
      type: _core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SpeakingScoreComponent.prototype, "result", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SpeakingScoreComponent.prototype, "qType", void 0);
    SpeakingScoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'speaking-score',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./speaking-score.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/question-components/speaking-score/speaking-score.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./speaking-score.component.css */
      "./src/app/shared/question-components/speaking-score/speaking-score.component.css")).default]
    })], SpeakingScoreComponent);
    /***/
  },

  /***/
  "./src/app/shared/question-components/summary-question/summary-question.component.css":
  /*!********************************************************************************************!*\
    !*** ./src/app/shared/question-components/summary-question/summary-question.component.css ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedQuestionComponentsSummaryQuestionSummaryQuestionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n#summary-question{\n    -webkit-user-select: none;\n    -webkit-touch-callout: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    color: var(--text-dark-color);\n\n}\n\n.summaryName{\n    font-size:24px;\n    color: var(--text-dark-color);\n    font-weight: 700;\n}\n\n.col-md-12, .footer-button-block {\n    -webkit-animation: fadeIn 0.8s linear;\n    animation: fadeIn 0.8s linear;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n}\n\n@-webkit-keyframes fadeIn {\n    0% {\n        opacity: 0;\n        top: 1000px;\n    }\n    75% {\n        opacity: 0.5;\n        top: 0px;\n    }\n    100% {\n        opacity: 1;\n        top: 0px;\n    }\n}\n\n@keyframes fadeIn {\n    0% {\n        opacity: 0;\n        top: 1000px;\n    }\n    75% {\n        opacity: 0.5;\n        top: 0px;\n    }\n    100% {\n        opacity: 1;\n        top: 0px;\n    }\n}\n\n.list>div:nth-child(1) {\n    -webkit-animation-delay: 0.2s;\n    animation-delay: 0.2s;\n}\n\n.list>div:nth-child(2) {\n    -webkit-animation-delay: 0.4s;\n    animation-delay: 0.4s;\n}\n\n.list>div:nth-child(3) {\n    -webkit-animation-delay: 0.6s;\n    animation-delay: 0.6s;\n}\n\n.list>div:nth-child(4) {\n    -webkit-animation-delay: 0.8s;\n    animation-delay: 0.8s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3F1ZXN0aW9uLWNvbXBvbmVudHMvc3VtbWFyeS1xdWVzdGlvbi9zdW1tYXJ5LXF1ZXN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQiw2QkFBNkI7O0FBRWpDOztBQUVBO0lBQ0ksY0FBYztJQUNkLDZCQUE2QjtJQUM3QixnQkFBZ0I7QUFDcEI7O0FBSUE7SUFDSSxxQ0FBcUM7SUFDckMsNkJBQTZCO0lBQzdCLGlDQUFpQztJQUNqQyx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSTtRQUNJLFVBQVU7UUFDVixXQUFXO0lBQ2Y7SUFDQTtRQUNJLFlBQVk7UUFDWixRQUFRO0lBQ1o7SUFDQTtRQUNJLFVBQVU7UUFDVixRQUFRO0lBQ1o7QUFDSjs7QUFiQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLFdBQVc7SUFDZjtJQUNBO1FBQ0ksWUFBWTtRQUNaLFFBQVE7SUFDWjtJQUNBO1FBQ0ksVUFBVTtRQUNWLFFBQVE7SUFDWjtBQUNKOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9xdWVzdGlvbi1jb21wb25lbnRzL3N1bW1hcnktcXVlc3Rpb24vc3VtbWFyeS1xdWVzdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4jc3VtbWFyeS1xdWVzdGlvbntcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrLWNvbG9yKTtcblxufVxuXG4uc3VtbWFyeU5hbWV7XG4gICAgZm9udC1zaXplOjI0cHg7XG4gICAgY29sb3I6IHZhcigtLXRleHQtZGFyay1jb2xvcik7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuXG5cbi5jb2wtbWQtMTIsIC5mb290ZXItYnV0dG9uLWJsb2NrIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDAuOHMgbGluZWFyO1xuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuOHMgbGluZWFyO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0b3A6IDEwMDBweDtcbiAgICB9XG4gICAgNzUlIHtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICB0b3A6IDBweDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRvcDogMHB4O1xuICAgIH1cbn1cblxuLmxpc3Q+ZGl2Om50aC1jaGlsZCgxKSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMnM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xufVxuXG4ubGlzdD5kaXY6bnRoLWNoaWxkKDIpIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC40cztcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNHM7XG59XG5cbi5saXN0PmRpdjpudGgtY2hpbGQoMykge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC42cztcbn1cblxuLmxpc3Q+ZGl2Om50aC1jaGlsZCg0KSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuOHM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/question-components/summary-question/summary-question.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/shared/question-components/summary-question/summary-question.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: SummaryQuestionComponent */

  /***/
  function srcAppSharedQuestionComponentsSummaryQuestionSummaryQuestionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SummaryQuestionComponent", function () {
      return SummaryQuestionComponent;
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


    var _core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @core/http/serviceIndex */
    "./src/app/core/http/serviceIndex.ts");
    /* harmony import */


    var _models_WritingModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @models/WritingModel */
    "./src/app/shared/models/WritingModel.ts");

    let SummaryQuestionComponent = class SummaryQuestionComponent {
      constructor(formBuilder, _cservice) {
        this.formBuilder = formBuilder;
        this._cservice = _cservice;
        this.submitEvaluation = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // any

        this.singleSummary = {}; // array

        this.versionList = ["American English", "British English"]; // boolean

        this.submitted = false;
        this.isLoading = false;
      }

      ngOnInit() {}

      onSubmit() {
        this.isLoading = true;
        this.submitted = true;

        if (this.evaluationForm.invalid) {
          return;
        } else {
          let evaluate = new _models_WritingModel__WEBPACK_IMPORTED_MODULE_4__["SummaryEvaluation"]();
          evaluate.version = this.evaluationForm.value.version;
          evaluate.yoursummary = this.evaluationForm.value.summary;
          evaluate.totalWordCount = evaluate.yoursummary.length;
          evaluate.summaryId = this.summaryDetail.summaryId;
          evaluate.totalMinutes = 0;
          evaluate.questionType = this.summaryDetail.questionType;
          this.submitEvaluation.emit(evaluate);
        }
      }

      get f() {
        return this.evaluationForm.controls;
      }

      goBack() {
        this._cservice.goBackPrev();
      }

      countWord(str) {
        return str.trim().replace(/\n/, "\n").split(/\s+/).length;
      }

      ngOnChanges(changes) {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        this.evaluationForm = this.formBuilder.group({
          version: ["American English", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          summary: [""]
        });
        setTimeout(() => {
          this.isLoading = false;
        }, 100);
        setTimeout(() => {
          let summaryQuestion = document.getElementById("summary-question");
          if (summaryQuestion.childNodes[0]) summaryQuestion.removeChild(summaryQuestion.childNodes[0]);
          summaryQuestion.append(this._cservice.stringToEl("<div>" + this.summaryDetail.summaryQuestion + "</div>"));
        }, 150);
      }

    };

    SummaryQuestionComponent.ctorParameters = () => [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SummaryQuestionComponent.prototype, "submitEvaluation", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SummaryQuestionComponent.prototype, "isNext", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SummaryQuestionComponent.prototype, "summaryDetail", void 0);
    SummaryQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'summary-question',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./summary-question.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/question-components/summary-question/summary-question.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./summary-question.component.css */
      "./src/app/shared/question-components/summary-question/summary-question.component.css")).default]
    })], SummaryQuestionComponent);
    /***/
  },

  /***/
  "./src/app/shared/question-components/summary-score/summary-score.component.css":
  /*!**************************************************************************************!*\
    !*** ./src/app/shared/question-components/summary-score/summary-score.component.css ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedQuestionComponentsSummaryScoreSummaryScoreComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n.set-width {\n    width: 150px;\n}\n\n.table-wrapper {\n    margin-top: 30px;\n}\n\n.user-info-text {\n    color: var(--text-dark-color);\n    font-weight: 500;\n    padding-left: .5rem !important;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.question-text {\n    color: var(--text-dark-color);\n    font-weight: 500;\n}\n\n.score-box {\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    background-color: var(--writing-color);\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n}\n\n.score-box>p {\n    color: white;\n    font-weight: 600;\n    font-size: 24px;\n    margin-bottom: 0;\n}\n\n/* table */\n\ntable.table-score-responsive {\n    display: table !important;\n    width: 100%;\n    border-spacing: 0 10px;\n    border-collapse: collapse;\n}\n\ntable.table-score-responsive>thead>tr>th {\n    background-color: var(--writing-color);\n    color: var(--text-light-color);\n    border-right: solid 2px #ffffff;\n    border-radius: 0;\n    padding: 6px 10px;\n    font-weight: 500;\n    text-align: center;\n}\n\ntable.table-score-responsive>tbody>tr>td {\n    color: #001c00;\n    background-color: #fdf2e9;\n    border-right: solid 2px #ffffff;\n    border-radius: unset !important;\n    padding: 20px;\n}\n\ntable.table-score-responsive>tbody>tr {\n    border-bottom: solid 2px #ffffff;\n}\n\ntable.table-score-responsive>tbody>tr:last-child {\n    border-bottom: unset !important;\n}\n\ntable.table-score-responsive>tbody>tr>td:last-child, .dark-role>td:last-child {\n    border-right: unset;\n}\n\n.dark-role>td {\n    background-color: var(--text-fade-color) !important;\n    color: var(--text-light-color) !important;\n    text-align: center;\n    padding: 10px;\n    font-weight: 500;\n    border-bottom: solid 2px #a1a1a1 !important;\n    border-right: solid 2px #a1a1a1 !important;\n}\n\n.red-role>td {\n    background-color: #d31912 !important;\n    color: var(--text-light-color) !important;\n    text-align: center;\n    padding: 10px;\n    font-weight: 500;\n    border-bottom: none !important;\n}\n\n.white-role>td {\n    background-color: white !important;\n    color: var(--text-dark-color) !important;\n    text-align: center;\n    padding: 10px;\n    font-weight: 500;\n}\n\n.feedback-title {\n    background-color: #d31912;\n    text-align: center;\n    font-weight: 500;\n    color: white;\n    padding: 10px;\n    margin-top: 16px;\n}\n\n.feedback-text {\n    color: var(--text-dark-color);\n    background-color: white;\n    padding: 10px;\n    margin-bottom: 16px;\n}\n\n.advise-title {\n    background-color: var(--writing-color);\n    color: white;\n    font-weight: 500;\n    padding: 10px;\n    margin-top: 16px;\n    text-align: center;\n}\n\n.advise-text {\n    color: var(--text-dark-color);\n    background-color: white;\n    padding: 10px;\n}\n\n.text-center {\n    text-align: center !important;\n    font-weight: 600;\n}\n\n@media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {\n    .table-wrapper {\n        overflow-x: auto;\n        background-color: white;\n        padding: 20px;\n    }\n\n    table.table-score-responsive {\n        max-width: -webkit-fit-content;\n        max-width: -moz-fit-content;\n        max-width: fit-content;\n        margin: 0 auto;\n        overflow-x: auto;\n        white-space: nowrap;\n    }\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL3dyaXRpbmctZXZhbHVhdGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixzQ0FBc0M7SUFDdEMsb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBLFVBQVU7O0FBRVY7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLHNCQUFzQjtJQUN0Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsOEJBQThCO0lBQzlCLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLCtCQUErQjtJQUMvQiwrQkFBK0I7SUFDL0IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1EQUFtRDtJQUNuRCx5Q0FBeUM7SUFDekMsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsMkNBQTJDO0lBQzNDLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyx5Q0FBeUM7SUFDekMsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLHdDQUF3QztJQUN4QyxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsdUJBQXVCO1FBQ3ZCLGFBQWE7SUFDakI7O0lBRUE7UUFDSSw4QkFBc0I7UUFBdEIsMkJBQXNCO1FBQXRCLHNCQUFzQjtRQUN0QixjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtJQUN2QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3F1ZXN0aW9uLWNvbXBvbmVudHMvc3VtbWFyeS1zY29yZS9zdW1tYXJ5LXNjb3JlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5zZXQtd2lkdGgge1xuICAgIHdpZHRoOiAxNTBweDtcbn1cblxuLnRhYmxlLXdyYXBwZXIge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi51c2VyLWluZm8tdGV4dCB7XG4gICAgY29sb3I6IHZhcigtLXRleHQtZGFyay1jb2xvcik7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBwYWRkaW5nLWxlZnQ6IC41cmVtICFpbXBvcnRhbnQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4ucXVlc3Rpb24tdGV4dCB7XG4gICAgY29sb3I6IHZhcigtLXRleHQtZGFyay1jb2xvcik7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnNjb3JlLWJveCB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdyaXRpbmctY29sb3IpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNjb3JlLWJveD5wIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLyogdGFibGUgKi9cblxudGFibGUudGFibGUtc2NvcmUtcmVzcG9uc2l2ZSB7XG4gICAgZGlzcGxheTogdGFibGUgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItc3BhY2luZzogMCAxMHB4O1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG5cbnRhYmxlLnRhYmxlLXNjb3JlLXJlc3BvbnNpdmU+dGhlYWQ+dHI+dGgge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdyaXRpbmctY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0LWNvbG9yKTtcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDJweCAjZmZmZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgcGFkZGluZzogNnB4IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRhYmxlLnRhYmxlLXNjb3JlLXJlc3BvbnNpdmU+dGJvZHk+dHI+dGQge1xuICAgIGNvbG9yOiAjMDAxYzAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGYyZTk7XG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAycHggI2ZmZmZmZjtcbiAgICBib3JkZXItcmFkaXVzOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbnRhYmxlLnRhYmxlLXNjb3JlLXJlc3BvbnNpdmU+dGJvZHk+dHIge1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjZmZmZmZmO1xufVxuXG50YWJsZS50YWJsZS1zY29yZS1yZXNwb25zaXZlPnRib2R5PnRyOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b206IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlLnRhYmxlLXNjb3JlLXJlc3BvbnNpdmU+dGJvZHk+dHI+dGQ6bGFzdC1jaGlsZCwgLmRhcmstcm9sZT50ZDpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItcmlnaHQ6IHVuc2V0O1xufVxuXG4uZGFyay1yb2xlPnRkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWZhZGUtY29sb3IpICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQtY29sb3IpICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggI2ExYTFhMSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yaWdodDogc29saWQgMnB4ICNhMWExYTEgIWltcG9ydGFudDtcbn1cblxuLnJlZC1yb2xlPnRkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDMxOTEyICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQtY29sb3IpICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi53aGl0ZS1yb2xlPnRkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmstY29sb3IpICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmZlZWRiYWNrLXRpdGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDMxOTEyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5mZWVkYmFjay10ZXh0IHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrLWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5hZHZpc2UtdGl0bGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdyaXRpbmctY29sb3IpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hZHZpc2UtdGV4dCB7XG4gICAgY29sb3I6IHZhcigtLXRleHQtZGFyay1jb2xvcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSwgKG1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweCkge1xuICAgIC50YWJsZS13cmFwcGVyIHtcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxuXG4gICAgdGFibGUudGFibGUtc2NvcmUtcmVzcG9uc2l2ZSB7XG4gICAgICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/question-components/summary-score/summary-score.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/shared/question-components/summary-score/summary-score.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: SummaryScoreComponent */

  /***/
  function srcAppSharedQuestionComponentsSummaryScoreSummaryScoreComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SummaryScoreComponent", function () {
      return SummaryScoreComponent;
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


    var _core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @core/http/serviceIndex */
    "./src/app/core/http/serviceIndex.ts");

    let SummaryScoreComponent = class SummaryScoreComponent {
      constructor(_cservice) {
        this._cservice = _cservice;
        this.test = "<div>At the outset, there are numerous reasons why television has some negative aspects, but the most alarming one lies in the fact that <span class='marked'>wtching</span> television for longer hours makes children less productive, and this can be a contributing factor to less interest in social relation. For instance research in this area invariably shows that fifty percent of children who spent more time watching television <span class='marked'>doesnt</span> have good <span class='marked'>scial</span> relation <span class='marked'>in future</span>. Therefore, the adverse impact of over watching <span class='marked'>televsion</span> <span class='marked'>shold</span> not be <span class='marked'>ignred</span></div>";
      }

      ngOnInit() {
        setTimeout(() => {
          let summary = document.getElementById("summary" + this.scoreData.summaryId);
          summary.append(this._cservice.stringToEl("<div>" + this.scoreData.yoursummary + "</div>"));

          if (this.scoreData.adviseContent) {
            let adviseContent = document.getElementById("essay-content" + this.scoreData.summaryId);
            adviseContent.append(this._cservice.stringToEl("<div>" + this.scoreData.adviseContent + "</div>"));
          }
        }, 100);
      }

    };

    SummaryScoreComponent.ctorParameters = () => [{
      type: _core_http_serviceIndex__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SummaryScoreComponent.prototype, "scoreData", void 0);
    SummaryScoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'summary-score',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./summary-score.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/question-components/summary-score/summary-score.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./summary-score.component.css */
      "./src/app/shared/question-components/summary-score/summary-score.component.css")).default]
    })], SummaryScoreComponent);
    /***/
  },

  /***/
  "./src/app/shared/question-components/user-info/user-info.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/shared/question-components/user-info/user-info.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedQuestionComponentsUserInfoUserInfoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".score-box {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background-color: var(--sidemenu-active);\n  box-shadow: var(--textbox-boxshadow);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n\n  }\n\n  .score-box>p{\n    font-size: 24px;\n    font-weight: 600;\n    color: var(--primary-color);\n    margin-bottom: 0;\n  }\n\n  label-text div{\n    display: inline-block;\n    width: 140px;\n  }\n\n  .lbl-text{\n    color: var(--text-dark-color);\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  @media (max-width: 768px) {\n    .col-md-2{\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-pack: center;\n              justify-content: center;\n      margin-bottom: 10px;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3F1ZXN0aW9uLWNvbXBvbmVudHMvdXNlci1pbmZvL3VzZXItaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsd0NBQXdDO0VBQ3hDLG9DQUFvQztFQUNwQyxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7O0VBRXZCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0VBQ2xCOztFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFO01BQ0Usb0JBQWE7TUFBYixhQUFhO01BQ2Isd0JBQXVCO2NBQXZCLHVCQUF1QjtNQUN2QixtQkFBbUI7SUFDckI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9xdWVzdGlvbi1jb21wb25lbnRzL3VzZXItaW5mby91c2VyLWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY29yZS1ib3gge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZW1lbnUtYWN0aXZlKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tdGV4dGJveC1ib3hzaGFkb3cpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICB9XG5cbiAgLnNjb3JlLWJveD5we1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIGxhYmVsLXRleHQgZGl2e1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTQwcHg7XG4gIH1cblxuICAubGJsLXRleHR7XG4gICAgY29sb3I6IHZhcigtLXRleHQtZGFyay1jb2xvcik7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmNvbC1tZC0ye1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/question-components/user-info/user-info.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/shared/question-components/user-info/user-info.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: UserInfoComponent */

  /***/
  function srcAppSharedQuestionComponentsUserInfoUserInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function () {
      return UserInfoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let UserInfoComponent = class UserInfoComponent {
      constructor() {}

      ngOnInit() {}

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UserInfoComponent.prototype, "info", void 0);
    UserInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'user-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/question-components/user-info/user-info.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-info.component.css */
      "./src/app/shared/question-components/user-info/user-info.component.css")).default]
    })], UserInfoComponent);
    /***/
  }
}]);
//# sourceMappingURL=default~app-modules-other-evaluate-other-evaluate-module~app-modules-other-question-module-other-que~ba6936d6-es5.c0a0e8efd4fed31e3ba1.js.map