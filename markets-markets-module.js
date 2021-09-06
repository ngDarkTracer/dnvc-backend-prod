(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["markets-markets-module"],{

/***/ "2BY0":
/*!*******************************************!*\
  !*** ./src/app/markets/markets.module.ts ***!
  \*******************************************/
/*! exports provided: MarketsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketsModule", function() { return MarketsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _markets_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markets-routing.module */ "aYmD");
/* harmony import */ var _markets_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./markets.component */ "HN10");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class MarketsModule {
}
MarketsModule.ɵfac = function MarketsModule_Factory(t) { return new (t || MarketsModule)(); };
MarketsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MarketsModule });
MarketsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _markets_routing_module__WEBPACK_IMPORTED_MODULE_1__["MarketsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MarketsModule, { declarations: [_markets_component__WEBPACK_IMPORTED_MODULE_2__["MarketsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _markets_routing_module__WEBPACK_IMPORTED_MODULE_1__["MarketsRoutingModule"]] }); })();


/***/ }),

/***/ "HN10":
/*!**********************************************!*\
  !*** ./src/app/markets/markets.component.ts ***!
  \**********************************************/
/*! exports provided: MarketsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketsComponent", function() { return MarketsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MarketsComponent {
    constructor() { }
    ngOnInit() {
    }
}
MarketsComponent.ɵfac = function MarketsComponent_Factory(t) { return new (t || MarketsComponent)(); };
MarketsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MarketsComponent, selectors: [["app-markets"]], decls: 2, vars: 0, template: function MarketsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "markets works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXJrZXRzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "aYmD":
/*!***************************************************!*\
  !*** ./src/app/markets/markets-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MarketsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketsRoutingModule", function() { return MarketsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _markets_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./markets.component */ "HN10");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{ path: '', component: _markets_component__WEBPACK_IMPORTED_MODULE_1__["MarketsComponent"] }];
class MarketsRoutingModule {
}
MarketsRoutingModule.ɵfac = function MarketsRoutingModule_Factory(t) { return new (t || MarketsRoutingModule)(); };
MarketsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MarketsRoutingModule });
MarketsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MarketsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=markets-markets-module.js.map