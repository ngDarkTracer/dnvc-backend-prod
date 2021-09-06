(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notes-notes-module"],{

/***/ "8wtL":
/*!***********************************************!*\
  !*** ./src/app/notes/notes-routing.module.ts ***!
  \***********************************************/
/*! exports provided: NotesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesRoutingModule", function() { return NotesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _notes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notes.component */ "TEms");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{ path: '', component: _notes_component__WEBPACK_IMPORTED_MODULE_1__["NotesComponent"] }];
class NotesRoutingModule {
}
NotesRoutingModule.ɵfac = function NotesRoutingModule_Factory(t) { return new (t || NotesRoutingModule)(); };
NotesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NotesRoutingModule });
NotesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NotesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "TEms":
/*!******************************************!*\
  !*** ./src/app/notes/notes.component.ts ***!
  \******************************************/
/*! exports provided: NotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesComponent", function() { return NotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NotesComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotesComponent.ɵfac = function NotesComponent_Factory(t) { return new (t || NotesComponent)(); };
NotesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotesComponent, selectors: [["app-notes"]], decls: 2, vars: 0, template: function NotesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "notes works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3Rlcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "reMG":
/*!***************************************!*\
  !*** ./src/app/notes/notes.module.ts ***!
  \***************************************/
/*! exports provided: NotesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesModule", function() { return NotesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _notes_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notes-routing.module */ "8wtL");
/* harmony import */ var _notes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notes.component */ "TEms");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class NotesModule {
}
NotesModule.ɵfac = function NotesModule_Factory(t) { return new (t || NotesModule)(); };
NotesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: NotesModule });
NotesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _notes_routing_module__WEBPACK_IMPORTED_MODULE_1__["NotesRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NotesModule, { declarations: [_notes_component__WEBPACK_IMPORTED_MODULE_2__["NotesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _notes_routing_module__WEBPACK_IMPORTED_MODULE_1__["NotesRoutingModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=notes-notes-module.js.map