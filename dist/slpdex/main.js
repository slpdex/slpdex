(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./balance/balance.module.ngfactory": [
		"./src/app/balance/balance.module.ngfactory.js",
		"balance-balance-module-ngfactory"
	],
	"./tokens/tokens.module.ngfactory": [
		"./src/app/tokens/tokens.module.ngfactory.js",
		"tokens-tokens-module-ngfactory"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, ɵ0, ɵ1, ɵ2, ɵ3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ2", function() { return ɵ2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ3", function() { return ɵ3; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _slp_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slp-routes */ "./src/app/slp-routes.ts");
/* harmony import */ var _shared_order_order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/order/order.component */ "./src/app/shared/order/order.component.ts");




var ɵ0 = {
    animation: 'landing',
}, ɵ1 = {
    animation: _slp_routes__WEBPACK_IMPORTED_MODULE_2__["SLPRoutes"].order,
}, ɵ2 = {
    animation: _slp_routes__WEBPACK_IMPORTED_MODULE_2__["SLPRoutes"].tokens,
}, ɵ3 = {
    animation: _slp_routes__WEBPACK_IMPORTED_MODULE_2__["SLPRoutes"].balance,
};
var routes = [
    {
        path: _slp_routes__WEBPACK_IMPORTED_MODULE_2__["SLPRoutes"].landing,
        component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_1__["LandingComponent"],
        data: ɵ0,
    },
    {
        path: _slp_routes__WEBPACK_IMPORTED_MODULE_2__["SLPRoutes"].order,
        component: _shared_order_order_component__WEBPACK_IMPORTED_MODULE_3__["OrderComponent"],
        data: ɵ1,
    },
    {
        path: _slp_routes__WEBPACK_IMPORTED_MODULE_2__["SLPRoutes"].tokens,
        loadChildren: './tokens/tokens.module#TokensModule',
        data: ɵ2,
    },
    {
        path: _slp_routes__WEBPACK_IMPORTED_MODULE_2__["SLPRoutes"].balance,
        loadChildren: './balance/balance.module#BalanceModule',
        data: ɵ3,
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());




/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.scss.shim.ngstyle */ "./src/app/app.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _route_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./route-animations */ "./src/app/route-animations.ts");
/* harmony import */ var _svgs_svgs_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svgs/svgs.component.ngfactory */ "./src/app/svgs/svgs.component.ngfactory.js");
/* harmony import */ var _svgs_svgs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./svgs/svgs.component */ "./src/app/svgs/svgs.component.ts");
/* harmony import */ var _header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component.ngfactory */ "./src/app/header/header.component.ngfactory.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_AppComponent = [_app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AppComponent, data: { "animation": [_route_animations__WEBPACK_IMPORTED_MODULE_2__["routeAnimations"]] } });

function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-svgs", [], null, null, null, _svgs_svgs_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_SvgsComponent_0"], _svgs_svgs_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_SvgsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _svgs_svgs_component__WEBPACK_IMPORTED_MODULE_4__["SvgsComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 4, "div", [], [[24, "@routeAnimations", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "app-header", [], null, null, null, _header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_HeaderComponent_0"], _header_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_HeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 114688, null, 0, _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 212992, [["outlet", 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); _ck(_v, 4, 0); _ck(_v, 6, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.prepareRoute(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)); _ck(_v, 2, 0, currVal_0); }); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], [], null, null)], null, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app.component.scss.shim.ngstyle.js":
/*!****************************************************!*\
  !*** ./src/app/app.component.scss.shim.ngstyle.js ***!
  \****************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  position: relative;\n  width: 100%; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFByb2plY3RzXFxzbHBkZXgvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdoZWxwZXJzJztcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"];



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'slpdex';
        this.prepareRoute = function (outlet) {
            var animation = outlet &&
                outlet.activatedRouteData &&
                outlet.activatedRouteData.animation;
            return animation;
        };
    }
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ngfactory.js":
/*!*****************************************!*\
  !*** ./src/app/app.module.ngfactory.js ***!
  \*****************************************/
/*! exports provided: AppModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function() { return AppModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _landing_landing_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing/landing.component.ngfactory */ "./src/app/landing/landing.component.ngfactory.js");
/* harmony import */ var _shared_order_order_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/order/order.component.ngfactory */ "./src/app/shared/order/order.component.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations/browser */ "./node_modules/@angular/animations/fesm5/browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_order_order_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/order/order.component */ "./src/app/shared/order/order.component.ts");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./header/header.module */ "./src/app/header/header.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _landing_landing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./landing/landing.module */ "./src/app/landing/landing.module.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




















var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵEmptyOutletComponentNgFactory"], _landing_landing_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["LandingComponentNgFactory"], _shared_order_order_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["OrderComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_s"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_h"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_q"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_9__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_platform_browser_animations_animations_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_9__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_9__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_9__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_9__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_platform_browser_animations_animations_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_9__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_11__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_12__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_12__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_12__["PreloadAllModules"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_12__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_n"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) { return [p0_0]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_platform_browser_platform_browser_j"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_i"](p1_0)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_12__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTER_CONFIGURATION"], { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_12__["PreloadAllModules"] }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_7__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTES"], function () { return [[{ path: "", component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_14__["LandingComponent"], data: _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["ɵ0"] }, { path: "order", component: _shared_order_order_component__WEBPACK_IMPORTED_MODULE_16__["OrderComponent"], data: _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["ɵ1"] }, { path: "tokens", loadChildren: "./tokens/tokens.module#TokensModule", data: _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["ɵ2"] }, { path: "balance", loadChildren: "./balance/balance.module#BalanceModule", data: _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["ɵ3"] }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_f"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _header_header_module__WEBPACK_IMPORTED_MODULE_17__["HeaderModule"], _header_header_module__WEBPACK_IMPORTED_MODULE_17__["HeaderModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _landing_landing_module__WEBPACK_IMPORTED_MODULE_19__["LandingModule"], _landing_landing_module__WEBPACK_IMPORTED_MODULE_19__["LandingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", [])]); });



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.ngfactory.js":
/*!******************************************************!*\
  !*** ./src/app/header/header.component.ngfactory.js ***!
  \******************************************************/
/*! exports provided: RenderType_HeaderComponent, View_HeaderComponent_0, View_HeaderComponent_Host_0, HeaderComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_HeaderComponent", function() { return RenderType_HeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HeaderComponent_0", function() { return View_HeaderComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HeaderComponent_Host_0", function() { return View_HeaderComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponentNgFactory", function() { return HeaderComponentNgFactory; });
/* harmony import */ var _header_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component.scss.shim.ngstyle */ "./src/app/header/header.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header.component */ "./src/app/header/header.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_HeaderComponent = [_header_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_HeaderComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_HeaderComponent, data: {} });

function View_HeaderComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 20, "div", [["class", "header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 5, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "span", [["class", "header--slp"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["SLP"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "span", [["class", "header--dex"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["DEX"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 12, "div", [["class", "header__menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 5, "a", [["routerLinkActive", "active-link"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 671744, [[2, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Tokens "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 5, "a", [["routerLinkActive", "active-link"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 671744, [[4, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { linksWithHrefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Balance "]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = ("/" + _co.routes.landing); _ck(_v, 3, 0, currVal_2); var currVal_5 = ("/" + _co.routes.tokens); _ck(_v, 10, 0, currVal_5); var currVal_6 = "active-link"; _ck(_v, 11, 0, currVal_6); var currVal_9 = ("/" + _co.routes.balance); _ck(_v, 16, 0, currVal_9); var currVal_10 = "active-link"; _ck(_v, 17, 0, currVal_10); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).target; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).href; _ck(_v, 9, 0, currVal_3, currVal_4); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).target; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).href; _ck(_v, 15, 0, currVal_7, currVal_8); }); }
function View_HeaderComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-header", [], null, null, null, View_HeaderComponent_0, RenderType_HeaderComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var HeaderComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-header", _header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], View_HeaderComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/header/header.component.scss.shim.ngstyle.js":
/*!**************************************************************!*\
  !*** ./src/app/header/header.component.scss.shim.ngstyle.js ***!
  \**************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  height: 160px;\n  left: 0;\n  right: 0;\n  top: 0; }\n\n.header[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  margin: 0 auto;\n  max-width: calc(1200px + 30px);\n  padding: 0 30px;\n  width: 100%; }\n\n.header__menu[_ngcontent-%COMP%] {\n    display: flex;\n    margin-left: auto; }\n\n.header__menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      border-bottom: 2px solid transparent;\n      color: white;\n      font-size: 18px;\n      font-weight: 600;\n      margin-left: 20px; }\n\n.header--slp[_ngcontent-%COMP%] {\n    color: white; }\n\n.header--dex[_ngcontent-%COMP%] {\n    color: white; }\n\n.active-link[_ngcontent-%COMP%] {\n  border-bottom-color: white !important; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxQcm9qZWN0c1xcc2xwZGV4L3NyY1xcYXBwXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVhZGVyL0M6XFxQcm9qZWN0c1xcc2xwZGV4L3NyY1xcc3R5bGVzXFx2YXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFhO0VBQ2IsYUNDbUI7RURBbkIsT0FBTztFQUNQLFFBQVE7RUFDUixNQUFNLEVBQUE7O0FBR1I7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGNBQWM7RUFDZCw4QkFBeUM7RUFDekMsZUFBZTtFQUNmLFdBQVcsRUFBQTs7QUFFWDtJQUNFLGFBQWE7SUFDYixpQkFBaUIsRUFBQTs7QUFGbEI7TUFLRyxvQ0FBb0M7TUFDcEMsWUFBWTtNQUNaLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsaUJBQWlCLEVBQUE7O0FBSXJCO0lBQ0UsWUFBWSxFQUFBOztBQUdkO0lBQ0UsWUFBWSxFQUFBOztBQUloQjtFQUNFLHFDQUFxQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ2hlbHBlcnMnO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAkaGVhZGVyLWhlaWdodDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1heC13aWR0aDogY2FsYygjeyRjb250ZW50LXdpZHRofSArIDMwcHgpO1xyXG4gIHBhZGRpbmc6IDAgMzBweDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJl9fbWVudSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi0tc2xwIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gICYtLWRleCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG4uYWN0aXZlLWxpbmsge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiJGNvbG9yLWdyZWVuOiAjNWViZDZkO1xyXG4kY29sb3ItZ3JlZW4tbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLWdyZWVuLCAxMCUpO1xyXG5cclxuJGNvbG9yLWdyYXk6ICM1YzVjNWM7XHJcblxyXG4kaGVhZGVyLWhlaWdodDogMTYwcHg7XHJcbiRjb250ZW50LXdpZHRoOiAxMjAwcHg7XHJcbiJdfQ== */"];



/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _slp_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../slp-routes */ "./src/app/slp-routes.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.routes = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _slp_routes__WEBPACK_IMPORTED_MODULE_2__["SLPRoutes"]);
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/header/header.module.ts":
/*!*****************************************!*\
  !*** ./src/app/header/header.module.ts ***!
  \*****************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    return HeaderModule;
}());



/***/ }),

/***/ "./src/app/landing/landing-content/landing-content.component.ngfactory.js":
/*!********************************************************************************!*\
  !*** ./src/app/landing/landing-content/landing-content.component.ngfactory.js ***!
  \********************************************************************************/
/*! exports provided: RenderType_LandingContentComponent, View_LandingContentComponent_0, View_LandingContentComponent_Host_0, LandingContentComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_LandingContentComponent", function() { return RenderType_LandingContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LandingContentComponent_0", function() { return View_LandingContentComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LandingContentComponent_Host_0", function() { return View_LandingContentComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingContentComponentNgFactory", function() { return LandingContentComponentNgFactory; });
/* harmony import */ var _landing_content_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-content.component.scss.shim.ngstyle */ "./src/app/landing/landing-content/landing-content.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_wrapper_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/wrapper/wrapper.component.ngfactory */ "./src/app/shared/wrapper/wrapper.component.ngfactory.js");
/* harmony import */ var _shared_wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/wrapper/wrapper.component */ "./src/app/shared/wrapper/wrapper.component.ts");
/* harmony import */ var _landing_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing-content.component */ "./src/app/landing/landing-content/landing-content.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_LandingContentComponent = [_landing_content_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_LandingContentComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_LandingContentComponent, data: {} });

function View_LandingContentComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 30, "app-wrapper", [], null, null, null, _shared_wrapper_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_WrapperComponent_0"], _shared_wrapper_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_WrapperComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shared_wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["WrapperComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 28, "div", [["class", "landing-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 6, "div", [["class", "landing-content__box"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, ":svg:svg", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, ":svg:use", [[":xlink:href", "#exchange"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Decentralized"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Curabitur blandit mollis lacus. Etiam iaculis nunc ac metus. Ut a nisl id ante tempus hendrerit."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 6, "div", [["class", "landing-content__box"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, ":svg:svg", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 0, ":svg:use", [[":xlink:href", "#unlock"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Open Source"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Curabitur blandit mollis lacus. Etiam iaculis nunc ac metus. Ut a nisl id ante tempus hendrerit."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 6, "div", [["class", "landing-content__box"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, ":svg:svg", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 0, ":svg:use", [[":xlink:href", "#fee"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Low fee"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Curabitur blandit mollis lacus. Etiam iaculis nunc ac metus. Ut a nisl id ante tempus hendrerit."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 6, "div", [["class", "landing-content__box"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, ":svg:svg", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 0, ":svg:use", [[":xlink:href", "#bch"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Uncensorable"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Curabitur blandit mollis lacus. Etiam iaculis nunc ac metus. Ut a nisl id ante tempus hendrerit."]))], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_LandingContentComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-landing-content", [], null, null, null, View_LandingContentComponent_0, RenderType_LandingContentComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _landing_content_component__WEBPACK_IMPORTED_MODULE_4__["LandingContentComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LandingContentComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-landing-content", _landing_content_component__WEBPACK_IMPORTED_MODULE_4__["LandingContentComponent"], View_LandingContentComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/landing/landing-content/landing-content.component.scss.shim.ngstyle.js":
/*!****************************************************************************************!*\
  !*** ./src/app/landing/landing-content/landing-content.component.scss.shim.ngstyle.js ***!
  \****************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["[_nghost-%COMP%] {\n  background: white;\n  display: flex;\n  padding: 50px 0; }\n\n.landing-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between; }\n\n.landing-content__box[_ngcontent-%COMP%] {\n    align-items: center;\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    height: 300px;\n    max-width: 400px;\n    min-width: 200px;\n    padding: 0 20px; }\n\n.landing-content__box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      font-size: 13px;\n      text-align: center; }\n\n.landing-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin-bottom: 10px; }\n\n.landing-content[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    fill: #5c5c5c;\n    width: 80px; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLWNvbnRlbnQvQzpcXFByb2plY3RzXFxzbHBkZXgvc3JjXFxhcHBcXGxhbmRpbmdcXGxhbmRpbmctY29udGVudFxcbGFuZGluZy1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYW5kaW5nL2xhbmRpbmctY29udGVudC9DOlxcUHJvamVjdHNcXHNscGRleC9zcmNcXHN0eWxlc1xcdmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZiw4QkFBOEIsRUFBQTs7QUFFOUI7SUFDRSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLE9BQU87SUFDUCxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZSxFQUFBOztBQVJoQjtNQVdHLGVBQWU7TUFDZixrQkFBa0IsRUFBQTs7QUFqQnhCO0lBc0JJLG1CQUFtQixFQUFBOztBQXRCdkI7SUEwQkksYUMvQmdCO0lEZ0NoQixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nL2xhbmRpbmctY29udGVudC9sYW5kaW5nLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdoZWxwZXJzJztcclxuXHJcbjpob3N0IHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDUwcHggMDtcclxufVxyXG5cclxuLmxhbmRpbmctY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAmX19ib3gge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuXHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgc3ZnIHtcclxuICAgIGZpbGw6ICRjb2xvci1ncmF5O1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgfVxyXG59XHJcbiIsIiRjb2xvci1ncmVlbjogIzVlYmQ2ZDtcclxuJGNvbG9yLWdyZWVuLWxpZ2h0OiBsaWdodGVuKCRjb2xvci1ncmVlbiwgMTAlKTtcclxuXHJcbiRjb2xvci1ncmF5OiAjNWM1YzVjO1xyXG5cclxuJGhlYWRlci1oZWlnaHQ6IDE2MHB4O1xyXG4kY29udGVudC13aWR0aDogMTIwMHB4O1xyXG4iXX0= */"];



/***/ }),

/***/ "./src/app/landing/landing-content/landing-content.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/landing/landing-content/landing-content.component.ts ***!
  \**********************************************************************/
/*! exports provided: LandingContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingContentComponent", function() { return LandingContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var LandingContentComponent = /** @class */ (function () {
    function LandingContentComponent() {
    }
    LandingContentComponent.prototype.ngOnInit = function () {
    };
    return LandingContentComponent;
}());



/***/ }),

/***/ "./src/app/landing/landing-donate/landing-donate.component.ngfactory.js":
/*!******************************************************************************!*\
  !*** ./src/app/landing/landing-donate/landing-donate.component.ngfactory.js ***!
  \******************************************************************************/
/*! exports provided: RenderType_LandingDonateComponent, View_LandingDonateComponent_0, View_LandingDonateComponent_Host_0, LandingDonateComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_LandingDonateComponent", function() { return RenderType_LandingDonateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LandingDonateComponent_0", function() { return View_LandingDonateComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LandingDonateComponent_Host_0", function() { return View_LandingDonateComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingDonateComponentNgFactory", function() { return LandingDonateComponentNgFactory; });
/* harmony import */ var _landing_donate_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-donate.component.scss.shim.ngstyle */ "./src/app/landing/landing-donate/landing-donate.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_wrapper_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/wrapper/wrapper.component.ngfactory */ "./src/app/shared/wrapper/wrapper.component.ngfactory.js");
/* harmony import */ var _shared_wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/wrapper/wrapper.component */ "./src/app/shared/wrapper/wrapper.component.ts");
/* harmony import */ var _landing_donate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing-donate.component */ "./src/app/landing/landing-donate/landing-donate.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_LandingDonateComponent = [_landing_donate_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_LandingDonateComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_LandingDonateComponent, data: {} });

function View_LandingDonateComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "app-wrapper", [], null, null, null, _shared_wrapper_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_WrapperComponent_0"], _shared_wrapper_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_WrapperComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shared_wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["WrapperComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 4, "div", [["class", "landing-donate"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Did you know that this project is dependent on donations? "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" In this project we're using a mixed low exchange fee & donation model. If you like this project, please show support by sending a donation to our developers. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 1, "a", [["class", "landing-donate__button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" DONATE "]))], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_LandingDonateComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-landing-donate", [], null, null, null, View_LandingDonateComponent_0, RenderType_LandingDonateComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _landing_donate_component__WEBPACK_IMPORTED_MODULE_4__["LandingDonateComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LandingDonateComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-landing-donate", _landing_donate_component__WEBPACK_IMPORTED_MODULE_4__["LandingDonateComponent"], View_LandingDonateComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/landing/landing-donate/landing-donate.component.scss.shim.ngstyle.js":
/*!**************************************************************************************!*\
  !*** ./src/app/landing/landing-donate/landing-donate.component.scss.shim.ngstyle.js ***!
  \**************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["[_nghost-%COMP%] {\n  background: #5c5c5c;\n  display: flex;\n  padding: 50px 0 200px; }\n\nh3[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  color: white; }\n\n.landing-donate[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 1000px;\n  text-align: center; }\n\n.landing-donate[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 30px;\n    margin-bottom: 20px; }\n\n.landing-donate[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px; }\n\n.landing-donate__button[_ngcontent-%COMP%] {\n    background: #5ebd6d;\n    border-radius: 4px;\n    color: white;\n    font-size: 30px;\n    font-weight: 600;\n    margin: 0 auto;\n    margin-top: 50px;\n    max-width: 300px;\n    padding: 10px 20px;\n    text-align: center;\n    width: 100%; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLWRvbmF0ZS9DOlxcUHJvamVjdHNcXHNscGRleC9zcmNcXGFwcFxcbGFuZGluZ1xcbGFuZGluZy1kb25hdGVcXGxhbmRpbmctZG9uYXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYW5kaW5nL2xhbmRpbmctZG9uYXRlL0M6XFxQcm9qZWN0c1xcc2xwZGV4L3NyY1xcc3R5bGVzXFx2YXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxtQkNBa0I7RURDbEIsYUFBYTtFQUNiLHFCQUFxQixFQUFBOztBQUd2Qjs7RUFFRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUhwQjtJQU1JLGVBQWU7SUFDZixtQkFBbUIsRUFBQTs7QUFQdkI7SUFXSSxlQUFlLEVBQUE7O0FBR2pCO0lBQ0UsbUJDNUJpQjtJRDZCakIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLWRvbmF0ZS9sYW5kaW5nLWRvbmF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ2hlbHBlcnMnO1xyXG5cclxuOmhvc3Qge1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvci1ncmF5O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogNTBweCAwIDIwMHB4O1xyXG59XHJcblxyXG5oMyxcclxucCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubGFuZGluZy1kb25hdGUge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1heC13aWR0aDogMTAwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgJl9fYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1ncmVlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiIsIiRjb2xvci1ncmVlbjogIzVlYmQ2ZDtcclxuJGNvbG9yLWdyZWVuLWxpZ2h0OiBsaWdodGVuKCRjb2xvci1ncmVlbiwgMTAlKTtcclxuXHJcbiRjb2xvci1ncmF5OiAjNWM1YzVjO1xyXG5cclxuJGhlYWRlci1oZWlnaHQ6IDE2MHB4O1xyXG4kY29udGVudC13aWR0aDogMTIwMHB4O1xyXG4iXX0= */"];



/***/ }),

/***/ "./src/app/landing/landing-donate/landing-donate.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/landing/landing-donate/landing-donate.component.ts ***!
  \********************************************************************/
/*! exports provided: LandingDonateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingDonateComponent", function() { return LandingDonateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var LandingDonateComponent = /** @class */ (function () {
    function LandingDonateComponent() {
    }
    LandingDonateComponent.prototype.ngOnInit = function () {
    };
    return LandingDonateComponent;
}());



/***/ }),

/***/ "./src/app/landing/landing-recent/landing-recent.component.ngfactory.js":
/*!******************************************************************************!*\
  !*** ./src/app/landing/landing-recent/landing-recent.component.ngfactory.js ***!
  \******************************************************************************/
/*! exports provided: RenderType_LandingRecentComponent, View_LandingRecentComponent_0, View_LandingRecentComponent_Host_0, LandingRecentComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_LandingRecentComponent", function() { return RenderType_LandingRecentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LandingRecentComponent_0", function() { return View_LandingRecentComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LandingRecentComponent_Host_0", function() { return View_LandingRecentComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingRecentComponentNgFactory", function() { return LandingRecentComponentNgFactory; });
/* harmony import */ var _landing_recent_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-recent.component.scss.shim.ngstyle */ "./src/app/landing/landing-recent/landing-recent.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_wrapper_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/wrapper/wrapper.component.ngfactory */ "./src/app/shared/wrapper/wrapper.component.ngfactory.js");
/* harmony import */ var _shared_wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/wrapper/wrapper.component */ "./src/app/shared/wrapper/wrapper.component.ts");
/* harmony import */ var _landing_recent_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing-recent.component */ "./src/app/landing/landing-recent/landing-recent.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_LandingRecentComponent = [_landing_recent_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_LandingRecentComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_LandingRecentComponent, data: {} });

function View_LandingRecentComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "app-wrapper", [], null, null, null, _shared_wrapper_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_WrapperComponent_0"], _shared_wrapper_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_WrapperComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shared_wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["WrapperComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 7, "div", [["class", "landing-recent"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Recent trades"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "div", [["class", "landing-recent__widget"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "div", [["class", "landing-recent__widget"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "div", [["class", "landing-recent__widget"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "div", [["class", "landing-recent__widget"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 0, "div", [["class", "landing-recent__widget"]], null, null, null, null, null))], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_LandingRecentComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-landing-recent", [], null, null, null, View_LandingRecentComponent_0, RenderType_LandingRecentComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _landing_recent_component__WEBPACK_IMPORTED_MODULE_4__["LandingRecentComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LandingRecentComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-landing-recent", _landing_recent_component__WEBPACK_IMPORTED_MODULE_4__["LandingRecentComponent"], View_LandingRecentComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/landing/landing-recent/landing-recent.component.scss.shim.ngstyle.js":
/*!**************************************************************************************!*\
  !*** ./src/app/landing/landing-recent/landing-recent.component.scss.shim.ngstyle.js ***!
  \**************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["[_nghost-%COMP%] {\n  background: white;\n  display: flex;\n  padding: 50px 0 100px; }\n\n.landing-recent[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 800px;\n  width: 100%; }\n\n.landing-recent[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 30px;\n    text-align: center;\n    text-transform: uppercase; }\n\n.landing-recent__widget[_ngcontent-%COMP%] {\n    background: #f1f1f1;\n    border-radius: 4px;\n    height: 100px;\n    margin-bottom: 10px;\n    margin-top: 10px; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLXJlY2VudC9DOlxcUHJvamVjdHNcXHNscGRleC9zcmNcXGFwcFxcbGFuZGluZ1xcbGFuZGluZy1yZWNlbnRcXGxhbmRpbmctcmVjZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTs7QUFIYjtJQU1JLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIseUJBQXlCLEVBQUE7O0FBRzNCO0lBQ0UsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLXJlY2VudC9sYW5kaW5nLXJlY2VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ2hlbHBlcnMnO1xyXG5cclxuOmhvc3Qge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogNTBweCAwIDEwMHB4O1xyXG59XHJcblxyXG4ubGFuZGluZy1yZWNlbnQge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG5cclxuICAmX193aWRnZXQge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbn1cclxuIl19 */"];



/***/ }),

/***/ "./src/app/landing/landing-recent/landing-recent.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/landing/landing-recent/landing-recent.component.ts ***!
  \********************************************************************/
/*! exports provided: LandingRecentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingRecentComponent", function() { return LandingRecentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var LandingRecentComponent = /** @class */ (function () {
    function LandingRecentComponent() {
    }
    LandingRecentComponent.prototype.ngOnInit = function () {
    };
    return LandingRecentComponent;
}());



/***/ }),

/***/ "./src/app/landing/landing-team/landing-team.component.ngfactory.js":
/*!**************************************************************************!*\
  !*** ./src/app/landing/landing-team/landing-team.component.ngfactory.js ***!
  \**************************************************************************/
/*! exports provided: RenderType_LandingTeamComponent, View_LandingTeamComponent_0, View_LandingTeamComponent_Host_0, LandingTeamComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_LandingTeamComponent", function() { return RenderType_LandingTeamComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LandingTeamComponent_0", function() { return View_LandingTeamComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LandingTeamComponent_Host_0", function() { return View_LandingTeamComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingTeamComponentNgFactory", function() { return LandingTeamComponentNgFactory; });
/* harmony import */ var _landing_team_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-team.component.scss.shim.ngstyle */ "./src/app/landing/landing-team/landing-team.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_wrapper_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/wrapper/wrapper.component.ngfactory */ "./src/app/shared/wrapper/wrapper.component.ngfactory.js");
/* harmony import */ var _shared_wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/wrapper/wrapper.component */ "./src/app/shared/wrapper/wrapper.component.ts");
/* harmony import */ var _landing_team_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing-team.component */ "./src/app/landing/landing-team/landing-team.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_LandingTeamComponent = [_landing_team_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_LandingTeamComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_LandingTeamComponent, data: {} });

function View_LandingTeamComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 24, "app-wrapper", [], null, null, null, _shared_wrapper_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_WrapperComponent_0"], _shared_wrapper_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_WrapperComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _shared_wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["WrapperComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 22, "div", [["class", "team"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Meet the team"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 14, "div", [["class", "team__members"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 6, "div", [["class", "team__member"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, ":svg:svg", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, ":svg:use", [[":xlink:href", "#user"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "p", [["class", "team__member--name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Tobias Europapark "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "p", [["class", "team__member--title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Lead developer & Backend Engineer "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 6, "div", [["class", "team__member"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, ":svg:svg", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 0, ":svg:use", [[":xlink:href", "#user"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "p", [["class", "team__member--name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Alexander Ryberg "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "p", [["class", "team__member--title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Frontend developer & Designer"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 4, "div", [["class", "team__description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. In consectetuer turpis ut velit. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. In consectetuer turpis ut velit. "]))], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_LandingTeamComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-landing-team", [], null, null, null, View_LandingTeamComponent_0, RenderType_LandingTeamComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _landing_team_component__WEBPACK_IMPORTED_MODULE_4__["LandingTeamComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LandingTeamComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-landing-team", _landing_team_component__WEBPACK_IMPORTED_MODULE_4__["LandingTeamComponent"], View_LandingTeamComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/landing/landing-team/landing-team.component.scss.shim.ngstyle.js":
/*!**********************************************************************************!*\
  !*** ./src/app/landing/landing-team/landing-team.component.scss.shim.ngstyle.js ***!
  \**********************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["[_nghost-%COMP%] {\n  background: #5c5c5c;\n  display: flex;\n  padding: 100px 0 50px; }\n\nh3[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  color: white; }\n\n.team[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 50px;\n  text-align: center;\n  text-transform: uppercase; }\n\n.team__members[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 30px 0; }\n\n.team__members[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    margin: 0 20px;\n    width: 100px; }\n\n.team__member[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  padding: 0 40px; }\n\n.team__member--name[_ngcontent-%COMP%] {\n    font-size: 30px;\n    font-weight: 600;\n    margin-bottom: 10px; }\n\n.team__member--title[_ngcontent-%COMP%] {\n    font-size: 20px; }\n\n.team__description[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin: 0 auto;\n  max-width: 1000px; }\n\n.team__description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-bottom: 20px; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLXRlYW0vQzpcXFByb2plY3RzXFxzbHBkZXgvc3JjXFxhcHBcXGxhbmRpbmdcXGxhbmRpbmctdGVhbVxcbGFuZGluZy10ZWFtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYW5kaW5nL2xhbmRpbmctdGVhbS9DOlxcUHJvamVjdHNcXHNscGRleC9zcmNcXHN0eWxlc1xcdmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsbUJDQWtCO0VEQ2xCLGFBQWE7RUFDYixxQkFBcUIsRUFBQTs7QUFHdkI7O0VBRUUsWUFBWSxFQUFBOztBQUdkO0VBRUksZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGNBQWMsRUFBQTs7QUFIZjtJQU1HLGNBQWM7SUFDZCxZQUFZLEVBQUE7O0FBSWhCO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZSxFQUFBOztBQUVmO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUIsRUFBQTs7QUFHckI7SUFDRSxlQUFlLEVBQUE7O0FBSW5CO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFIbEI7SUFNRyxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvbGFuZGluZy10ZWFtL2xhbmRpbmctdGVhbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ2hlbHBlcnMnO1xyXG5cclxuOmhvc3Qge1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvci1ncmF5O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMTAwcHggMCA1MHB4O1xyXG59XHJcblxyXG5oMyxcclxucCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udGVhbSB7XHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcblxyXG4gICZfX21lbWJlcnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAzMHB4IDA7XHJcblxyXG4gICAgc3ZnIHtcclxuICAgICAgbWFyZ2luOiAwIDIwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX21lbWJlciB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAwIDQwcHg7XHJcblxyXG4gICAgJi0tbmFtZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAmLS10aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2Rlc2NyaXB0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIiRjb2xvci1ncmVlbjogIzVlYmQ2ZDtcclxuJGNvbG9yLWdyZWVuLWxpZ2h0OiBsaWdodGVuKCRjb2xvci1ncmVlbiwgMTAlKTtcclxuXHJcbiRjb2xvci1ncmF5OiAjNWM1YzVjO1xyXG5cclxuJGhlYWRlci1oZWlnaHQ6IDE2MHB4O1xyXG4kY29udGVudC13aWR0aDogMTIwMHB4O1xyXG4iXX0= */"];



/***/ }),

/***/ "./src/app/landing/landing-team/landing-team.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/landing/landing-team/landing-team.component.ts ***!
  \****************************************************************/
/*! exports provided: LandingTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingTeamComponent", function() { return LandingTeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var LandingTeamComponent = /** @class */ (function () {
    function LandingTeamComponent() {
    }
    LandingTeamComponent.prototype.ngOnInit = function () {
    };
    return LandingTeamComponent;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.ngfactory.js":
/*!********************************************************!*\
  !*** ./src/app/landing/landing.component.ngfactory.js ***!
  \********************************************************/
/*! exports provided: RenderType_LandingComponent, View_LandingComponent_0, View_LandingComponent_Host_0, LandingComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_LandingComponent", function() { return RenderType_LandingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LandingComponent_0", function() { return View_LandingComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LandingComponent_Host_0", function() { return View_LandingComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponentNgFactory", function() { return LandingComponentNgFactory; });
/* harmony import */ var _landing_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing.component.scss.shim.ngstyle */ "./src/app/landing/landing.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_wrapper_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/wrapper/wrapper.component.ngfactory */ "./src/app/shared/wrapper/wrapper.component.ngfactory.js");
/* harmony import */ var _shared_wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/wrapper/wrapper.component */ "./src/app/shared/wrapper/wrapper.component.ts");
/* harmony import */ var _quick_order_quick_order_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quick-order/quick-order.component.ngfactory */ "./src/app/landing/quick-order/quick-order.component.ngfactory.js");
/* harmony import */ var _quick_order_quick_order_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quick-order/quick-order.component */ "./src/app/landing/quick-order/quick-order.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _landing_content_landing_content_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./landing-content/landing-content.component.ngfactory */ "./src/app/landing/landing-content/landing-content.component.ngfactory.js");
/* harmony import */ var _landing_content_landing_content_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing-content/landing-content.component */ "./src/app/landing/landing-content/landing-content.component.ts");
/* harmony import */ var _landing_recent_landing_recent_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./landing-recent/landing-recent.component.ngfactory */ "./src/app/landing/landing-recent/landing-recent.component.ngfactory.js");
/* harmony import */ var _landing_recent_landing_recent_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./landing-recent/landing-recent.component */ "./src/app/landing/landing-recent/landing-recent.component.ts");
/* harmony import */ var _landing_team_landing_team_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./landing-team/landing-team.component.ngfactory */ "./src/app/landing/landing-team/landing-team.component.ngfactory.js");
/* harmony import */ var _landing_team_landing_team_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./landing-team/landing-team.component */ "./src/app/landing/landing-team/landing-team.component.ts");
/* harmony import */ var _landing_donate_landing_donate_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./landing-donate/landing-donate.component.ngfactory */ "./src/app/landing/landing-donate/landing-donate.component.ngfactory.js");
/* harmony import */ var _landing_donate_landing_donate_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./landing-donate/landing-donate.component */ "./src/app/landing/landing-donate/landing-donate.component.ts");
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./landing.component */ "./src/app/landing/landing.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
















var styles_LandingComponent = [_landing_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_LandingComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_LandingComponent, data: {} });

function View_LandingComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 31, "div", [["class", "landing__top"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "landing__bg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "img", [["alt", ""], ["src", "assets/bg.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 18, "app-wrapper", [], null, null, null, _shared_wrapper_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_WrapperComponent_0"], _shared_wrapper_wrapper_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_WrapperComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 114688, null, 0, _shared_wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_3__["WrapperComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 16, "div", [["class", "landing__top__content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 12, "div", [["class", "landing__top__content--left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["NEXT GEN"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["FEELESS"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["DECENTRALIZED"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["SLP TOKEN EXCHANGE"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 2, "div", [["class", "landing__top__content--right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "app-quick-order", [], null, null, null, _quick_order_quick_order_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_QuickOrderComponent_0"], _quick_order_quick_order_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_QuickOrderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 114688, null, 0, _quick_order_quick_order_component__WEBPACK_IMPORTED_MODULE_5__["QuickOrderComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 9, "div", [["class", "landing__top__showcase"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 8, "div", [["class", "landing__top__showcase--wrapper"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 1, "div", [["class", "landing__top__showcase--img"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 0, "img", [["alt", ""], ["src", "assets/bitcoin-com.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 1, "div", [["class", "landing__top__showcase--img"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 0, "img", [["alt", ""], ["src", "assets/slp.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 1, "div", [["class", "landing__top__showcase--img"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 0, "img", [["alt", ""], ["src", "assets/bitcoin-cash.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 1, "p", [["class", "landing__top__showcase--badger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Badger "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 1, "app-landing-content", [], null, null, null, _landing_content_landing_content_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_LandingContentComponent_0"], _landing_content_landing_content_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_LandingContentComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 114688, null, 0, _landing_content_landing_content_component__WEBPACK_IMPORTED_MODULE_8__["LandingContentComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 1, "app-landing-recent", [], null, null, null, _landing_recent_landing_recent_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_LandingRecentComponent_0"], _landing_recent_landing_recent_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_LandingRecentComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 114688, null, 0, _landing_recent_landing_recent_component__WEBPACK_IMPORTED_MODULE_10__["LandingRecentComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 1, "app-landing-team", [], null, null, null, _landing_team_landing_team_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_LandingTeamComponent_0"], _landing_team_landing_team_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_LandingTeamComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 114688, null, 0, _landing_team_landing_team_component__WEBPACK_IMPORTED_MODULE_12__["LandingTeamComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 1, "app-landing-donate", [], null, null, null, _landing_donate_landing_donate_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_LandingDonateComponent_0"], _landing_donate_landing_donate_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_LandingDonateComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 114688, null, 0, _landing_donate_landing_donate_component__WEBPACK_IMPORTED_MODULE_14__["LandingDonateComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 4, 0); _ck(_v, 21, 0); _ck(_v, 33, 0); _ck(_v, 35, 0); _ck(_v, 37, 0); _ck(_v, 39, 0); }, null); }
function View_LandingComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-landing", [], null, null, null, View_LandingComponent_0, RenderType_LandingComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _landing_component__WEBPACK_IMPORTED_MODULE_15__["LandingComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LandingComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-landing", _landing_component__WEBPACK_IMPORTED_MODULE_15__["LandingComponent"], View_LandingComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/landing/landing.component.scss.shim.ngstyle.js":
/*!****************************************************************!*\
  !*** ./src/app/landing/landing.component.scss.shim.ngstyle.js ***!
  \****************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["[_nghost-%COMP%] {\n  display: block; }\n\n.landing__top[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 160px);\n  justify-content: center;\n  min-height: 800px; }\n\n.landing__top[_ngcontent-%COMP%]   app-wrapper[_ngcontent-%COMP%] {\n    flex: 1;\n    justify-content: center; }\n\n.landing__top__content[_ngcontent-%COMP%] {\n    align-items: center;\n    display: flex;\n    padding: 0 50px; }\n\n.landing__top__content--left[_ngcontent-%COMP%] {\n      flex-direction: column;\n      width: 60%; }\n\n.landing__top__content--right[_ngcontent-%COMP%] {\n      width: 40%;\n      z-index: 10; }\n\n.landing__top__content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      border-bottom: 4px solid white;\n      color: white;\n      display: inline-flex;\n      font-size: 40px;\n      font-weight: 600;\n      margin-bottom: 15px; }\n\n.landing__top__showcase[_ngcontent-%COMP%] {\n    align-items: center;\n    align-self: flex-end;\n    background: #9fd8a8;\n    display: flex;\n    flex-shrink: 0;\n    height: 100px;\n    margin: 40px 0 80px;\n    padding: 0 40px;\n    width: 100%; }\n\n.landing__top__showcase--wrapper[_ngcontent-%COMP%] {\n      display: flex;\n      margin: 0 auto;\n      max-width: calc(1200px + 100px);\n      width: 100%; }\n\n.landing__top__showcase--img[_ngcontent-%COMP%] {\n      display: flex;\n      flex: 1;\n      justify-content: center; }\n\n.landing__top__showcase--badger[_ngcontent-%COMP%] {\n      align-items: center;\n      color: white;\n      display: flex;\n      flex: 1;\n      font-size: 36px;\n      font-weight: 700;\n      justify-content: center;\n      padding: 0 10px; }\n\n.landing__top__showcase[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n      max-height: 60px;\n      max-width: 240px;\n      -o-object-fit: contain;\n         object-fit: contain;\n      padding: 0 10px;\n      width: 100%; }\n\n.landing__bg[_ngcontent-%COMP%] {\n  height: 100vh;\n  left: 0;\n  pointer-events: none;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.landing__bg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 100%;\n    max-height: 100%;\n    max-width: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    opacity: .1;\n    width: 100%; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9DOlxcUHJvamVjdHNcXHNscGRleC9zcmNcXGFwcFxcbGFuZGluZ1xcbGFuZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQWMsRUFBQTs7QUFJZDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQXVDO0VBQ3ZDLHVCQUF1QjtFQUN2QixpQkFBaUIsRUFBQTs7QUFMbEI7SUFRRyxPQUFPO0lBQ1AsdUJBQXVCLEVBQUE7O0FBR3pCO0lBQ0UsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixlQUFlLEVBQUE7O0FBRWY7TUFDRSxzQkFBc0I7TUFDdEIsVUFBVSxFQUFBOztBQUdaO01BQ0UsVUFBVTtNQUNWLFdBQVcsRUFBQTs7QUFaZDtNQWdCRyw4QkFBOEI7TUFDOUIsWUFBWTtNQUNaLG9CQUFvQjtNQUNwQixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLG1CQUFtQixFQUFBOztBQUl2QjtJQUNFLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsbUJBQXNDO0lBQ3RDLGFBQWE7SUFDYixjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsV0FBVyxFQUFBOztBQUVYO01BQ0UsYUFBYTtNQUNiLGNBQWM7TUFDZCwrQkFBMEM7TUFDMUMsV0FBVyxFQUFBOztBQUdiO01BQ0UsYUFBYTtNQUNiLE9BQU87TUFDUCx1QkFBdUIsRUFBQTs7QUFHekI7TUFDRSxtQkFBbUI7TUFDbkIsWUFBWTtNQUNaLGFBQWE7TUFDYixPQUFPO01BQ1AsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQix1QkFBdUI7TUFDdkIsZUFBZSxFQUFBOztBQWhDbEI7TUFvQ0csZ0JBQWdCO01BQ2hCLGdCQUFnQjtNQUNoQixzQkFBbUI7U0FBbkIsbUJBQW1CO01BQ25CLGVBQWU7TUFDZixXQUFXLEVBQUE7O0FBS2pCO0VBQ0UsYUFBYTtFQUNiLE9BQU87RUFDUCxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixNQUFNLEVBQUE7O0FBTlA7SUFTRyxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixvQkFBaUI7T0FBakIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdoZWxwZXJzJztcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmxhbmRpbmcge1xyXG4gICZfX3RvcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtICN7JGhlYWRlci1oZWlnaHR9KTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWluLWhlaWdodDogODAwcHg7XHJcblxyXG4gICAgYXBwLXdyYXBwZXIge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAmX19jb250ZW50IHtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgcGFkZGluZzogMCA1MHB4O1xyXG5cclxuICAgICAgJi0tbGVmdCB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLS1yaWdodCB7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fc2hvd2Nhc2Uge1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgYmFja2dyb3VuZDogbGlnaHRlbigkY29sb3ItZ3JlZW4sIDE4JSk7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICBtYXJnaW46IDQwcHggMCA4MHB4O1xyXG4gICAgICBwYWRkaW5nOiAwIDQwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgJi0td3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoI3skY29udGVudC13aWR0aH0gKyAxMDBweCk7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYtLWltZyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLS1iYWRnZXIge1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNjBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDI0MHB4O1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19iZyB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICBvcGFjaXR5OiAuMTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"];



/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () { };
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/landing/landing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/landing/landing.module.ts ***!
  \*******************************************/
/*! exports provided: LandingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingModule", function() { return LandingModule; });
var LandingModule = /** @class */ (function () {
    function LandingModule() {
    }
    return LandingModule;
}());



/***/ }),

/***/ "./src/app/landing/quick-order/quick-order.component.ngfactory.js":
/*!************************************************************************!*\
  !*** ./src/app/landing/quick-order/quick-order.component.ngfactory.js ***!
  \************************************************************************/
/*! exports provided: RenderType_QuickOrderComponent, View_QuickOrderComponent_0, View_QuickOrderComponent_Host_0, QuickOrderComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_QuickOrderComponent", function() { return RenderType_QuickOrderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_QuickOrderComponent_0", function() { return View_QuickOrderComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_QuickOrderComponent_Host_0", function() { return View_QuickOrderComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickOrderComponentNgFactory", function() { return QuickOrderComponentNgFactory; });
/* harmony import */ var _quick_order_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quick-order.component.scss.shim.ngstyle */ "./src/app/landing/quick-order/quick-order.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quick_order_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quick-order.component */ "./src/app/landing/quick-order/quick-order.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_QuickOrderComponent = [_quick_order_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_QuickOrderComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_QuickOrderComponent, data: {} });

function View_QuickOrderComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { button: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 2, { dummy: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["QUICK ORDER"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "p", [["class", "quick-order__label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["SEND"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 4, "div", [["class", "quick-order__row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "div", [["class", "quick-order__amount"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" 1000 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "div", [["class", "quick-order__token"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" TTTT "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 2, "div", [["class", "quick-order__icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, ":svg:svg", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 0, ":svg:use", [[":xlink:href", "#exchange"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "p", [["class", "quick-order__label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["RECEIVE"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 4, "div", [["class", "quick-order__row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "div", [["class", "quick-order__amount"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" 1000 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "div", [["class", "quick-order__token"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" TTTT "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, [[1, 0], ["button", 1]], null, 1, "a", [["class", "quick-order__button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.createOrder() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Create order\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, [[2, 0], ["dummy", 1]], null, 0, "div", [["class", "quick-order__dummy"]], null, null, null, null, null))], null, null); }
function View_QuickOrderComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-quick-order", [], null, null, null, View_QuickOrderComponent_0, RenderType_QuickOrderComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _quick_order_component__WEBPACK_IMPORTED_MODULE_2__["QuickOrderComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var QuickOrderComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-quick-order", _quick_order_component__WEBPACK_IMPORTED_MODULE_2__["QuickOrderComponent"], View_QuickOrderComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/landing/quick-order/quick-order.component.scss.shim.ngstyle.js":
/*!********************************************************************************!*\
  !*** ./src/app/landing/quick-order/quick-order.component.scss.shim.ngstyle.js ***!
  \********************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["[_nghost-%COMP%] {\n  align-items: center;\n  background: white;\n  border-radius: 4px;\n  display: flex;\n  flex-direction: column;\n  padding: 40px;\n  width: 100%; }\n  [_nghost-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: #5ebd6d;\n    font-size: 30px;\n    font-weight: 800;\n    margin-bottom: 20px;\n    text-align: center; }\n  .quick-order__label[_ngcontent-%COMP%] {\n  margin-bottom: 10px; }\n  .quick-order__row[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex; }\n  .quick-order__amount[_ngcontent-%COMP%] {\n  background: #f2f2f2;\n  margin-right: 40px;\n  padding: 10px 20px; }\n  .quick-order__token[_ngcontent-%COMP%] {\n  background: #f2f2f2;\n  padding: 10px 20px; }\n  .quick-order__icon[_ngcontent-%COMP%] {\n  padding: 30px;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n  .quick-order__icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    fill: #5c5c5c;\n    height: 50px; }\n  .quick-order__button[_ngcontent-%COMP%] {\n  background: #5ebd6d;\n  border-radius: 4px;\n  color: white;\n  cursor: pointer;\n  font-weight: 600;\n  margin: 40px 0 10px;\n  max-width: 300px;\n  padding: 10px 30px;\n  text-align: center;\n  width: 100%; }\n  .quick-order__dummy[_ngcontent-%COMP%] {\n  background: #5ebd6d;\n  display: none;\n  opacity: 0;\n  position: absolute; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9xdWljay1vcmRlci9DOlxcUHJvamVjdHNcXHNscGRleC9zcmNcXGFwcFxcbGFuZGluZ1xccXVpY2stb3JkZXJcXHF1aWNrLW9yZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYW5kaW5nL3F1aWNrLW9yZGVyL0M6XFxQcm9qZWN0c1xcc2xwZGV4L3NyY1xcc3R5bGVzXFx2YXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixXQUFXLEVBQUE7RUFQYjtJQVVJLGNDWmlCO0lEYWpCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQixFQUFBO0VBS3BCO0VBQ0UsbUJBQW1CLEVBQUE7RUFHckI7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYSxFQUFBO0VBR2Y7RUFDRSxtQkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBO0VBR3BCO0VBQ0UsbUJBQTZCO0VBQzdCLGtCQUFrQixFQUFBO0VBR3BCO0VBQ0UsYUFBYTtFQUNiLGdDQUF3QjtVQUF4Qix3QkFBd0IsRUFBQTtFQUZ6QjtJQUtHLGFDM0NjO0lENENkLFlBQVksRUFBQTtFQUloQjtFQUNFLG1CQ3BEaUI7RURxRGpCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBO0VBR2I7RUFDRSxtQkNqRWlCO0VEa0VqQixhQUFhO0VBQ2IsVUFBVTtFQUNWLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy9xdWljay1vcmRlci9xdWljay1vcmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ2hlbHBlcnMnO1xyXG5cclxuOmhvc3Qge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBoMyB7XHJcbiAgICBjb2xvcjogJGNvbG9yLWdyZWVuO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4ucXVpY2stb3JkZXIge1xyXG4gICZfX2xhYmVsIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG5cclxuICAmX19yb3cge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuICAmX19hbW91bnQge1xyXG4gICAgYmFja2dyb3VuZDogZGFya2VuKHdoaXRlLCA1JSk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgfVxyXG5cclxuICAmX190b2tlbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZW4od2hpdGUsIDUlKTtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICB9XHJcblxyXG4gICZfX2ljb24ge1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuXHJcbiAgICBzdmcge1xyXG4gICAgICBmaWxsOiAkY29sb3ItZ3JheTtcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1ncmVlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW46IDQwcHggMCAxMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJl9fZHVtbXkge1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLWdyZWVuO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG59XHJcbiIsIiRjb2xvci1ncmVlbjogIzVlYmQ2ZDtcclxuJGNvbG9yLWdyZWVuLWxpZ2h0OiBsaWdodGVuKCRjb2xvci1ncmVlbiwgMTAlKTtcclxuXHJcbiRjb2xvci1ncmF5OiAjNWM1YzVjO1xyXG5cclxuJGhlYWRlci1oZWlnaHQ6IDE2MHB4O1xyXG4kY29udGVudC13aWR0aDogMTIwMHB4O1xyXG4iXX0= */"];



/***/ }),

/***/ "./src/app/landing/quick-order/quick-order.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/landing/quick-order/quick-order.component.ts ***!
  \**************************************************************/
/*! exports provided: QuickOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickOrderComponent", function() { return QuickOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animejs/lib/anime.es.js */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var _slp_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../slp-routes */ "./src/app/slp-routes.ts");




var QuickOrderComponent = /** @class */ (function () {
    function QuickOrderComponent(router) {
        var _this = this;
        this.router = router;
        this.animateButton = false;
        this.createOrder = function () {
            var element = _this.button.nativeElement;
            var dummyElement = _this.dummy.nativeElement;
            dummyElement.style.display = 'block';
            dummyElement.style.opacity = '1';
            Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_2__["default"])({
                targets: dummyElement,
                top: [element.offsetTop, 0],
                left: [element.offsetLeft, 0],
                width: [element.clientWidth, window.innerWidth],
                height: [element.clientHeight, window.innerHeight],
                borderRadius: [10, 0],
                background: ['#5ebd6d', '#82cc8e'],
                easing: 'easeInQuad',
                duration: 400,
            });
            setTimeout(function () {
                _this.router.navigateByUrl(_slp_routes__WEBPACK_IMPORTED_MODULE_3__["SLPRoutes"].order);
            }, 600);
        };
    }
    QuickOrderComponent.prototype.ngOnInit = function () { };
    return QuickOrderComponent;
}());



/***/ }),

/***/ "./src/app/route-animations.ts":
/*!*************************************!*\
  !*** ./src/app/route-animations.ts ***!
  \*************************************/
/*! exports provided: routeAnimations, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeAnimations", function() { return routeAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _slp_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slp-routes */ "./src/app/slp-routes.ts");


var fade = function () {
    return [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.4s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))], { optional: true }),
    ];
};
var ɵ0 = fade;
function routeAnimations() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => landing', fade()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("* => " + _slp_routes__WEBPACK_IMPORTED_MODULE_1__["SLPRoutes"].balance, fade()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("* => " + _slp_routes__WEBPACK_IMPORTED_MODULE_1__["SLPRoutes"].tokens, fade()),
    ]);
}



/***/ }),

/***/ "./src/app/shared/order/order.component.ngfactory.js":
/*!***********************************************************!*\
  !*** ./src/app/shared/order/order.component.ngfactory.js ***!
  \***********************************************************/
/*! exports provided: RenderType_OrderComponent, View_OrderComponent_0, View_OrderComponent_Host_0, OrderComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_OrderComponent", function() { return RenderType_OrderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_OrderComponent_0", function() { return View_OrderComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_OrderComponent_Host_0", function() { return View_OrderComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponentNgFactory", function() { return OrderComponentNgFactory; });
/* harmony import */ var _order_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order.component.scss.shim.ngstyle */ "./src/app/shared/order/order.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _order_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order.component */ "./src/app/shared/order/order.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_OrderComponent = [_order_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_OrderComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_OrderComponent, data: {} });

function View_OrderComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { order: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, [[1, 0], ["order", 1]], null, 23, "div", [["class", "order"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 13, "div", [["class", "order__send"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "div", [["class", "order__loading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "div", [["class", "order__spinner"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Create Order"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 4, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["SEND "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["1000"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" TTTT"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "div", [["class", "order__qr"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 0, "img", [["src", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/220px-QR_code_for_mobile_English_Wikipedia.svg.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["bitcoincash:qqf04e2dd4u9ehp5jmrjmwm2au8wm6nzgudta04xrn"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 0, "div", [["class", "order__chain"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 7, "div", [["class", "order__receive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 4, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Recieve "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["10"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" BCH"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Waiting for order to be created"]))], null, null); }
function View_OrderComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-order", [], null, null, null, View_OrderComponent_0, RenderType_OrderComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _order_component__WEBPACK_IMPORTED_MODULE_2__["OrderComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var OrderComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-order", _order_component__WEBPACK_IMPORTED_MODULE_2__["OrderComponent"], View_OrderComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/shared/order/order.component.scss.shim.ngstyle.js":
/*!*******************************************************************!*\
  !*** ./src/app/shared/order/order.component.scss.shim.ngstyle.js ***!
  \*******************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["@-webkit-keyframes rotation {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes rotation {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n[_nghost-%COMP%] {\n  background: #82cc8e;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  left: 0;\n  overflow: auto;\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 100; }\n\nh2[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin: 20px 0 40px; }\n\nh3[_ngcontent-%COMP%] {\n  font-size: 20px; }\n\nh3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #5c5c5c;\n    font-weight: 700; }\n\n.order[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  opacity: 0;\n  padding-top: 100px; }\n\n.order__send[_ngcontent-%COMP%], .order__receive[_ngcontent-%COMP%] {\n    align-items: center;\n    background: white;\n    border-radius: 4px;\n    display: flex;\n    flex-direction: column;\n    padding: 40px; }\n\n.order__receive[_ngcontent-%COMP%] {\n    margin-bottom: 100px; }\n\n.order__qr[_ngcontent-%COMP%] {\n    display: flex;\n    height: 200px;\n    justify-content: center;\n    padding: 10px;\n    width: 100%; }\n\n.order__qr[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n      -o-object-fit: scale-down;\n         object-fit: scale-down; }\n\n.order__chain[_ngcontent-%COMP%] {\n    border-left: 3px dashed white;\n    flex-shrink: 0;\n    height: 100px;\n    margin: 20px 0;\n    width: 1px; }\n\n.order__loading[_ngcontent-%COMP%] {\n    align-items: center;\n    background: #5ebd6d;\n    border-radius: 100%;\n    display: flex;\n    height: 60px;\n    justify-content: center;\n    width: 60px; }\n\n.order__spinner[_ngcontent-%COMP%], .order__spinner[_ngcontent-%COMP%]::after {\n    border-radius: 50%;\n    height: 40px;\n    width: 40px; }\n\n.order__spinner[_ngcontent-%COMP%] {\n    -webkit-animation: rotation 1s infinite linear;\n            animation: rotation 1s infinite linear;\n    border-bottom: 5px solid #69c177;\n    border-left: 5px solid white;\n    border-right: 5px solid #69c177;\n    border-top: 5px solid #69c177; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL29yZGVyL0M6XFxQcm9qZWN0c1xcc2xwZGV4L3NyY1xcYXBwXFxzaGFyZWRcXG9yZGVyXFxvcmRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL29yZGVyL0M6XFxQcm9qZWN0c1xcc2xwZGV4L3NyY1xcc3R5bGVzXFx2YXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUIsRUFBQTtFQUV6QjtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUIsRUFBQSxFQUFBOztBQUw3QjtFQUNFO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QixFQUFBO0VBRXpCO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QixFQUFBLEVBQUE7O0FBSTdCO0VBQ0UsbUJDWDRDO0VEWTVDLFNBQVM7RUFDVCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLE9BQU87RUFDUCxjQUFjO0VBQ2QsZUFBZTtFQUNmLFFBQVE7RUFDUixNQUFNO0VBQ04sWUFBWSxFQUFBOztBQUdkO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGVBQWUsRUFBQTs7QUFEakI7SUFJSSxnQ0M5QmdCO0lEK0JoQixnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsVUFBVTtFQUNWLGtCQUFrQixFQUFBOztBQUVsQjtJQUVFLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYSxFQUFBOztBQUdmO0lBQ0Usb0JBQW9CLEVBQUE7O0FBR3RCO0lBQ0UsYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLFdBQVcsRUFBQTs7QUFMWjtNQVFHLHlCQUFzQjtTQUF0QixzQkFBc0IsRUFBQTs7QUFJMUI7SUFDRSw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLGFBQWE7SUFDYixjQUFjO0lBQ2QsVUFBVSxFQUFBOztBQUdaO0lBQ0UsbUJBQW1CO0lBQ25CLG1CQ2xGaUI7SURtRmpCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixXQUFXLEVBQUE7O0FBR2I7SUFFRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVcsRUFBQTs7QUFHYjtJQUNFLDhDQUFzQztZQUF0QyxzQ0FBc0M7SUFDdEMsZ0NBQWtEO0lBQ2xELDRCQUE0QjtJQUM1QiwrQkFBaUQ7SUFDakQsNkJBQStDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvb3JkZXIvb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdoZWxwZXJzJztcclxuXHJcbkBrZXlmcmFtZXMgcm90YXRpb24ge1xyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdCB7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLWdyZWVuLWxpZ2h0O1xyXG4gIGJvdHRvbTogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGxlZnQ6IDA7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxMDA7XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgbWFyZ2luOiAyMHB4IDAgNDBweDtcclxufVxyXG5cclxuaDMge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuXHJcbiAgc3BhbiB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGNvbG9yLWdyYXk7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxufVxyXG5cclxuLm9yZGVyIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LXNocmluazogMDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcclxuXHJcbiAgJl9fc2VuZCxcclxuICAmX19yZWNlaXZlIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICB9XHJcblxyXG4gICZfX3JlY2VpdmUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgfVxyXG5cclxuICAmX19xciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19jaGFpbiB7XHJcbiAgICBib3JkZXItbGVmdDogM3B4IGRhc2hlZCB3aGl0ZTtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgd2lkdGg6IDFweDtcclxuICB9XHJcblxyXG4gICZfX2xvYWRpbmcge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1ncmVlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICB9XHJcblxyXG4gICZfX3NwaW5uZXIsXHJcbiAgJl9fc3Bpbm5lcjo6YWZ0ZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgfVxyXG5cclxuICAmX19zcGlubmVyIHtcclxuICAgIGFuaW1hdGlvbjogcm90YXRpb24gMXMgaW5maW5pdGUgbGluZWFyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIGxpZ2h0ZW4oJGNvbG9yLWdyZWVuLCAzJSk7XHJcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgbGlnaHRlbigkY29sb3ItZ3JlZW4sIDMlKTtcclxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCBsaWdodGVuKCRjb2xvci1ncmVlbiwgMyUpO1xyXG4gIH1cclxufVxyXG4iLCIkY29sb3ItZ3JlZW46ICM1ZWJkNmQ7XHJcbiRjb2xvci1ncmVlbi1saWdodDogbGlnaHRlbigkY29sb3ItZ3JlZW4sIDEwJSk7XHJcblxyXG4kY29sb3ItZ3JheTogIzVjNWM1YztcclxuXHJcbiRoZWFkZXItaGVpZ2h0OiAxNjBweDtcclxuJGNvbnRlbnQtd2lkdGg6IDEyMDBweDtcclxuIl19 */"];



/***/ }),

/***/ "./src/app/shared/order/order.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/order/order.component.ts ***!
  \*************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animejs/lib/anime.es.js */ "./node_modules/animejs/lib/anime.es.js");


var OrderComponent = /** @class */ (function () {
    function OrderComponent() {
    }
    OrderComponent.prototype.ngOnInit = function () {
        Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
            targets: this.order.nativeElement,
            marginTop: [400, 0],
            opacity: 1,
            duration: 1000,
            easing: 'easeOutQuad',
        });
    };
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapper/wrapper.component */ "./src/app/shared/wrapper/wrapper.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order/order.component */ "./src/app/shared/order/order.component.ts");


var components = [_wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_0__["WrapperComponent"], _order_order_component__WEBPACK_IMPORTED_MODULE_1__["OrderComponent"]];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/wrapper/wrapper.component.ngfactory.js":
/*!***************************************************************!*\
  !*** ./src/app/shared/wrapper/wrapper.component.ngfactory.js ***!
  \***************************************************************/
/*! exports provided: RenderType_WrapperComponent, View_WrapperComponent_0, View_WrapperComponent_Host_0, WrapperComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_WrapperComponent", function() { return RenderType_WrapperComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_WrapperComponent_0", function() { return View_WrapperComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_WrapperComponent_Host_0", function() { return View_WrapperComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapperComponentNgFactory", function() { return WrapperComponentNgFactory; });
/* harmony import */ var _wrapper_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapper.component.scss.shim.ngstyle */ "./src/app/shared/wrapper/wrapper.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _wrapper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wrapper.component */ "./src/app/shared/wrapper/wrapper.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_WrapperComponent = [_wrapper_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_WrapperComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_WrapperComponent, data: {} });

function View_WrapperComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵncd"](null, 0)], null, null); }
function View_WrapperComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-wrapper", [], null, null, null, View_WrapperComponent_0, RenderType_WrapperComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _wrapper_component__WEBPACK_IMPORTED_MODULE_2__["WrapperComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var WrapperComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-wrapper", _wrapper_component__WEBPACK_IMPORTED_MODULE_2__["WrapperComponent"], View_WrapperComponent_Host_0, {}, {}, ["*"]);



/***/ }),

/***/ "./src/app/shared/wrapper/wrapper.component.scss.shim.ngstyle.js":
/*!***********************************************************************!*\
  !*** ./src/app/shared/wrapper/wrapper.component.scss.shim.ngstyle.js ***!
  \***********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  margin: 0 auto;\n  max-width: calc(1200px + 30px);\n  padding: 0 30px;\n  width: 100%; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3dyYXBwZXIvQzpcXFByb2plY3RzXFxzbHBkZXgvc3JjXFxhcHBcXHNoYXJlZFxcd3JhcHBlclxcd3JhcHBlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGNBQWM7RUFDZCw4QkFBeUM7RUFDekMsZUFBZTtFQUNmLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC93cmFwcGVyL3dyYXBwZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdoZWxwZXJzJztcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWF4LXdpZHRoOiBjYWxjKCN7JGNvbnRlbnQtd2lkdGh9ICsgMzBweCk7XHJcbiAgcGFkZGluZzogMCAzMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"];



/***/ }),

/***/ "./src/app/shared/wrapper/wrapper.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/wrapper/wrapper.component.ts ***!
  \*****************************************************/
/*! exports provided: WrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapperComponent", function() { return WrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var WrapperComponent = /** @class */ (function () {
    function WrapperComponent() {
    }
    WrapperComponent.prototype.ngOnInit = function () {
    };
    return WrapperComponent;
}());



/***/ }),

/***/ "./src/app/slp-routes.ts":
/*!*******************************!*\
  !*** ./src/app/slp-routes.ts ***!
  \*******************************/
/*! exports provided: SLPRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SLPRoutes", function() { return SLPRoutes; });
var SLPRoutes;
(function (SLPRoutes) {
    SLPRoutes["landing"] = "";
    SLPRoutes["order"] = "order";
    SLPRoutes["tokens"] = "tokens";
    SLPRoutes["balance"] = "balance";
})(SLPRoutes || (SLPRoutes = {}));


/***/ }),

/***/ "./src/app/svgs/svgs.component.ngfactory.js":
/*!**************************************************!*\
  !*** ./src/app/svgs/svgs.component.ngfactory.js ***!
  \**************************************************/
/*! exports provided: RenderType_SvgsComponent, View_SvgsComponent_0, View_SvgsComponent_Host_0, SvgsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SvgsComponent", function() { return RenderType_SvgsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SvgsComponent_0", function() { return View_SvgsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SvgsComponent_Host_0", function() { return View_SvgsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgsComponentNgFactory", function() { return SvgsComponentNgFactory; });
/* harmony import */ var _svgs_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./svgs.component.scss.shim.ngstyle */ "./src/app/svgs/svgs.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _svgs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svgs.component */ "./src/app/svgs/svgs.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_SvgsComponent = [_svgs_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_SvgsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_SvgsComponent, data: {} });

function View_SvgsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["<?xml version=\"1.0\" encoding=\"utf-8\"?>\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 17, ":svg:svg", [[":xmlns:xlink", "http://www.w3.org/1999/xlink"], ["xmlns", "http://www.w3.org/2000/svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, ":svg:symbol", [["id", "bch"], ["viewBox", "0 0 227 227"], ["xmlns", "http://www.w3.org/2000/svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, ":svg:path", [["d", "M113.666 43.5c-5.767-.01-11.629.7-17.475 2.191v-.003c-37.41 9.551-59.99 47.587-50.431 84.957 9.56 37.37 47.637 59.925 85.049 50.375 37.412-9.548 59.99-47.584 50.432-84.954-8.067-31.53-36.434-52.514-67.575-52.566zM0 43.82V183.5h64.531c-22-15.421-36.383-40.953-36.383-69.84 0-28.886 14.382-54.418 36.383-69.84H0zm162.469 0c22 15.422 36.383 40.954 36.383 69.84 0 28.887-14.382 54.419-36.383 69.84H227V43.82h-64.531zm-50.832 23.037l3.465 13.545c6.33-1.205 11.273-1.202 16.087.754 6.224 2.526 7.666 9.308 7.96 10.938.291 1.63.377 4.894-.521 7.24-.896 2.35-3.824 5.219-3.824 5.219s4.279-.179 7.683 1.24c3.397 1.42 6.479 4.664 7.778 10.236 1.303 5.569 1.574 11.361-2.564 16.159-4.039 4.679-9.113 6.699-11.498 7.649l-.179.07c-1.136.455-3.108 1.133-5.237 1.81l3.469 13.565-8.359 2.135-3.415-13.346-6.367 1.625 3.414 13.346-8.359 2.135-3.414-13.348-16.447 4.197-.846-10.469 5-1.275c1.68-.431 2.342-.764 2.875-1.605.533-.844.43-1.899.22-2.721l-8.837-34.553c-.554-2.165-.88-2.705-2.16-3.563-1.282-.859-3.663-.409-4.983-.069l-4.832 1.231-2.219-8.672 16.448-4.197-3.427-13.383 8.36-2.133 3.423 13.385 6.367-1.625-3.424-13.385 8.363-2.135zm3.666 24.047c-2.965-.012-5.03.447-7.33.998-2.627.63-5.225 1.543-5.225 1.543l4.121 16.116s3.938-.881 6.955-1.776c3.018-.896 6.082-2.422 8.094-4.308 2.015-1.887 2.824-4.256 1.969-7.28-.86-3.024-3.547-5.08-7.254-5.258a31.112 31.112 0 0 0-1.33-.035zm8.926 24.002a32.93 32.93 0 0 0-5.777.555c-4.213.784-9.456 2.412-9.456 2.412l4.582 17.91s5.579-1.296 9.219-2.518c3.641-1.22 7.229-3.133 8.875-4.676 1.643-1.542 3.529-3.771 2.481-7.867-1.048-4.098-4.221-5.116-5.983-5.498-.881-.191-2.258-.328-3.941-.318z"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, ":svg:symbol", [["id", "exchange"], ["viewBox", "0 0 1792 1792"], ["xmlns", "http://www.w3.org/2000/svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, ":svg:path", [["d", "M1792 1184v192q0 13-9.5 22.5t-22.5 9.5H384v192q0 13-9.5 22.5T352 1632q-12 0-24-10L9 1302q-9-9-9-22 0-14 9-23l320-320q9-9 23-9 13 0 22.5 9.5T384 960v192h1376q13 0 22.5 9.5t9.5 22.5zm0-544q0 14-9 23l-320 320q-9 9-23 9-13 0-22.5-9.5T1408 960V768H32q-13 0-22.5-9.5T0 736V544q0-13 9.5-22.5T32 512h1376V320q0-14 9-23t23-9q12 0 24 10l319 319q9 9 9 23z"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 3, ":svg:symbol", [["id", "fee"], ["viewBox", "0 0 48 48"], ["xmlns", "http://www.w3.org/2000/svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, ":svg:path", [["d", "M29.326 19.476c-.276.278-.306.648-.084 1.113.217.464.682 1.046 1.391 1.746.708.698 1.298 1.158 1.77 1.377.475.218.849.186 1.123-.092.529-.535.09-1.497-1.316-2.884-1.397-1.376-2.358-1.797-2.884-1.26z"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, ":svg:path", [["d", "M28.075-.003L0 28.076 19.927 48l28.076-28.078V.003L28.075-.003zm-6.178 29.096c-.906.922-1.94 1.308-3.097 1.154-1.155-.148-2.359-.84-3.608-2.073-2.549-2.516-2.875-4.736-.975-6.66.929-.943 1.974-1.34 3.133-1.193 1.159.147 2.353.827 3.582 2.038 1.282 1.266 2.001 2.465 2.156 3.596.153 1.134-.244 2.18-1.191 3.138zm4.622 4.773l-5.537-18.857L22.964 13l5.535 18.86-1.98 2.006zm8.715-8.527c-.909.919-1.942 1.308-3.099 1.154-1.156-.149-2.357-.837-3.602-2.065-2.549-2.516-2.874-4.736-.976-6.662.931-.942 1.976-1.34 3.136-1.192 1.157.147 2.353.826 3.579 2.037 1.278 1.26 1.993 2.459 2.148 3.59.156 1.133-.239 2.18-1.186 3.138zm7.438-15.787a2.992 2.992 0 0 1-4.225.002 2.996 2.996 0 0 1-.002-4.228 2.993 2.993 0 0 1 4.227-.002 2.985 2.985 0 0 1 0 4.228z"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 0, ":svg:path", [["d", "M15.982 23.221c-.277.28-.305.652-.084 1.115.218.464.683 1.046 1.391 1.747.708.699 1.298 1.157 1.771 1.375.472.22.848.19 1.123-.09.526-.535.089-1.497-1.316-2.885-1.396-1.376-2.358-1.795-2.885-1.262z"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 4, ":svg:symbol", [["id", "unlock"], ["viewBox", "0 0 48 48"], ["xmlns", "http://www.w3.org/2000/svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 0, ":svg:circle", [["cx", "24"], ["cy", "30"], ["r", "2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 0, ":svg:path", [["d", "M24 38a1 1 0 0 1-1-1v-6a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1z"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 0, ":svg:path", [["d", "M42 48H6V18h36v30zM8 46h32V20H8v26z"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 0, ":svg:path", [["d", "M36 19h-2v-7c0-5.514-4.486-10-10-10S14 6.486 14 12h-2c0-6.617 5.383-12 12-12s12 5.383 12 12v7z"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 3, ":svg:symbol", [["id", "user"], ["viewBox", "0 0 50 50"], ["xmlns", "http://www.w3.org/2000/svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 0, ":svg:circle", [["cx", "25"], ["cy", "25"], ["fill", "none"], ["r", "24"], ["stroke", "#000"], ["stroke-linecap", "round"], ["stroke-miterlimit", "10"], ["stroke-width", "2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 0, ":svg:path", [["d", "M0 0h50v50H0z"], ["fill", "none"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 0, ":svg:path", [["d", "M29.933 35.528c-.146-1.612-.09-2.737-.09-4.21.73-.383 2.038-2.825 2.259-4.888.574-.047 1.479-.607 1.744-2.818.143-1.187-.425-1.855-.771-2.065.934-2.809 2.874-11.499-3.588-12.397-.665-1.168-2.368-1.759-4.581-1.759-8.854.163-9.922 6.686-7.981 14.156-.345.21-.913.878-.771 2.065.266 2.211 1.17 2.771 1.744 2.818.22 2.062 1.58 4.505 2.312 4.888 0 1.473.055 2.598-.091 4.21-1.261 3.39-7.737 3.655-11.473 6.924 3.906 3.933 10.236 6.746 16.916 6.746s14.532-5.274 15.839-6.713c-3.713-3.299-10.204-3.555-11.468-6.957z"]], null, null, null, null, null))], null, null); }
function View_SvgsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-svgs", [], null, null, null, View_SvgsComponent_0, RenderType_SvgsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _svgs_component__WEBPACK_IMPORTED_MODULE_2__["SvgsComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SvgsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-svgs", _svgs_component__WEBPACK_IMPORTED_MODULE_2__["SvgsComponent"], View_SvgsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/svgs/svgs.component.scss.shim.ngstyle.js":
/*!**********************************************************!*\
  !*** ./src/app/svgs/svgs.component.scss.shim.ngstyle.js ***!
  \**********************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["[_nghost-%COMP%] {\n  display: none; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Zncy9DOlxcUHJvamVjdHNcXHNscGRleC9zcmNcXGFwcFxcc3Znc1xcc3Zncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3N2Z3Mvc3Zncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiJdfQ== */"];



/***/ }),

/***/ "./src/app/svgs/svgs.component.ts":
/*!****************************************!*\
  !*** ./src/app/svgs/svgs.component.ts ***!
  \****************************************/
/*! exports provided: SvgsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgsComponent", function() { return SvgsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var SvgsComponent = /** @class */ (function () {
    function SvgsComponent() {
    }
    SvgsComponent.prototype.ngOnInit = function () {
    };
    return SvgsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module.ngfactory */ "./src/app/app.module.ngfactory.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\slpdex\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map