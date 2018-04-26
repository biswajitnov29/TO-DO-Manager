webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"overlay\" >\n        <div class=\"overlay-content\">\n            <div class=\"spinner\"></div>\n        </div>\n    </div>\n<!-- The overlay -->\n\n\n<app-menu></app-menu>\n<!-- Use any element to open/show the overlay navigation menu -->\n<div class=\"container-fluid\">\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light\" style=\"background-color: transparent !important;\">\n        <i class=\"fa fa-bars fa-2x\" (click)=\"openNav()\"></i>\n        <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n            <ul class=\"navbar-nav\">\n<!--\n                <li class=\"nav-item active\">\n                    <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n                </li>\n-->\n            </ul>\n        </div>\n    </nav>\n    <div class=\"container-fluid\">\n        <router-outlet></router-outlet>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_window_ref_service__ = __webpack_require__("./src/app/services/window-ref.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(router, authService, winRef) {
        this.router = router;
        this.authService = authService;
        this.winRef = winRef;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]) {
                _this.authService.isSignedIn().then(function (data) {
                    console.log('Native window obj', _this.winRef.nativeWindow.gapi);
                    if (!data) {
                        _this.router.navigate(['login']);
                    }
                });
            }
        });
    };
    AppComponent.prototype.openNav = function () {
        __WEBPACK_IMPORTED_MODULE_4_jquery__('#myNav').css("width", "100%");
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_window_ref_service__["a" /* WindowRefService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_tasks_tasks_component__ = __webpack_require__("./src/app/components/tasks/tasks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_task_lists_task_lists_component__ = __webpack_require__("./src/app/components/task-lists/task-lists.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_app_service__ = __webpack_require__("./src/app/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_task_service__ = __webpack_require__("./src/app/services/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_task_list_service__ = __webpack_require__("./src/app/services/task-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_window_ref_service__ = __webpack_require__("./src/app/services/window-ref.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_google_api_service__ = __webpack_require__("./src/app/services/google-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_resolve_service__ = __webpack_require__("./src/app/services/auth-resolve.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_toast_service__ = __webpack_require__("./src/app/services/toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_menu_menu_component__ = __webpack_require__("./src/app/components/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_loader_loader_component__ = __webpack_require__("./src/app/components/loader/loader.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_8__components_tasks_tasks_component__["a" /* TasksComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_16__services_auth_resolve_service__["a" /* AuthResolveService */]
        }
    }, {
        path: 'tasklist/:id/tasks',
        component: __WEBPACK_IMPORTED_MODULE_8__components_tasks_tasks_component__["a" /* TasksComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_16__services_auth_resolve_service__["a" /* AuthResolveService */]
        }
    }, {
        path: 'tasklist',
        component: __WEBPACK_IMPORTED_MODULE_9__components_task_lists_task_lists_component__["a" /* TaskListsComponent */],
        resolve: {
            data: __WEBPACK_IMPORTED_MODULE_16__services_auth_resolve_service__["a" /* AuthResolveService */]
        }
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_tasks_tasks_component__["a" /* TasksComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_task_lists_task_lists_component__["a" /* TaskListsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_loader_loader_component__["a" /* LoaderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_18_ngx_bootstrap__["a" /* ModalModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__services_app_service__["a" /* AppService */],
                __WEBPACK_IMPORTED_MODULE_13__services_window_ref_service__["a" /* WindowRefService */],
                __WEBPACK_IMPORTED_MODULE_14__services_google_api_service__["a" /* GoogleApiService */],
                __WEBPACK_IMPORTED_MODULE_15__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_16__services_auth_resolve_service__["a" /* AuthResolveService */],
                __WEBPACK_IMPORTED_MODULE_17__services_toast_service__["a" /* ToastService */],
                __WEBPACK_IMPORTED_MODULE_11__services_task_service__["a" /* TaskService */],
                __WEBPACK_IMPORTED_MODULE_12__services_task_list_service__["a" /* TaskListService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/loader/loader.component.css":
/***/ (function(module, exports) {

module.exports = ".spinner {\n  margin: 20px auto;\n  width: 50px;\n  height: 40px;\n  text-align: center;\n  font-size: 10px;\n}\n\n.spinner > div {\n  background-color: #333;\n  height: 100%;\n  width: 6px;\n  display: inline-block;\n  \n  -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n  animation: sk-stretchdelay 1.2s infinite ease-in-out;\n}\n\n.spinner .rect2 {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s;\n}\n\n.spinner .rect3 {\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s;\n}\n\n.spinner .rect4 {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s;\n}\n\n.spinner .rect5 {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s;\n}\n\n@-webkit-keyframes sk-stretchdelay {\n  0%, 40%, 100% { -webkit-transform: scaleY(0.4) }  \n  20% { -webkit-transform: scaleY(1.0) }\n}\n\n@keyframes sk-stretchdelay {\n  0%, 40%, 100% { \n    transform: scaleY(0.4);\n    -webkit-transform: scaleY(0.4);\n  }  20% { \n    transform: scaleY(1.0);\n    -webkit-transform: scaleY(1.0);\n  }\n}"

/***/ }),

/***/ "./src/app/components/loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\">\n  <div class=\"rect1\"></div>\n  <div class=\"rect2\"></div>\n  <div class=\"rect3\"></div>\n  <div class=\"rect4\"></div>\n  <div class=\"rect5\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/loader/loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-loader',
            template: __webpack_require__("./src/app/components/loader/loader.component.html"),
            styles: [__webpack_require__("./src/app/components/loader/loader.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".drop-shadow {\n    position: relative;\n    -webkit-box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.1);\n    box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.1);\n}\n \n.drop-shadow:before,\n.drop-shadow:after {\n    content:\"\";\n    position:absolute;\n    z-index:-2;\n}\n \n.drop-shadow p {\n    font-size:16px;\n    font-weight:bold;\n}\n \n/* Shared */\n \n.loginBtn {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: relative;\n  /* width: 13em;  - apply for fixed size */\n  margin: 0.2em;\n  padding: 0 15px 0 46px;\n  border: none;\n  text-align: left;\n  line-height: 34px;\n  white-space: nowrap;\n  border-radius: 0.2em;\n  font-size: 16px;\n  color: #FFF;\n    cursor:pointer;\n}\n \n.loginBtn:before {\n  content: \"\";\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 34px;\n  height: 100%;\n}\n \n.loginBtn:focus {\n  outline: none;\n}\n \n.loginBtn:active {\n  -webkit-box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);\n          box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);\n}\n \n/* Google */\n \n.loginBtn--google {\n  /*font-family: \"Roboto\", Roboto, arial, sans-serif;*/\n  background: #DD4B39;\n}\n \n.loginBtn--google:before {\n  border-right: #BB3F30 1px solid;\n  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmZmYyZjIyZi04ZDdlLTQzNjEtYjM2Zi02NGFiYmI2Nzg3ZDUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTREMzBERkU2NjFBMTFFNDk5OEZFQ0REMkU5OTk0QTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTREMzBERkQ2NjFBMTFFNDk5OEZFQ0REMkU5OTk0QTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowMDc0NzYwYi1hZmQ4LTRkZWItOTlkNi1lOWZmMDg4MGMwYjgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ZmZmMmYyMmYtOGQ3ZS00MzYxLWIzNmYtNjRhYmJiNjc4N2Q1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+DeZ1XQAAAbJJREFUeNqUlE0oBVEUx+/Me/nY+FhYUGRBFCteCin1VmKFhSzsJCsLOySbV5LFW1hIlkrKRolSJAsLC1LyFqSUp9RbkPLN+E+dp3+3uTPXrV/3zL3n/O/cM2eO8jxP6fDAcwwMgW3w4JnHNxj70wgThl0KjiRwGlSBRrBMgm9gAfRJjJXwrgQvKW1gLUXiW7QeLoy5hQI7A4Tj4IZ82ljYVebRQXZO33Qc5wvTGi21836YcJzsBoPPOdkxW2EOGlHR41DPlSnHLjilHA4H5HlV9lasP5441YKMBP/41QESoB7M5CvGr/V/CYtjsRT+jlTBO90iFXALO+GAQE5PwiTsqv+PIrL9P7AyyMlaGAKFoBrmJi23gjOsdynTqxs+XjNIg0vwLH1jQxrSHaXkE4xG5hg4YF461geYBSXaC/k+veCWDuiJEh4n5/6IFNWAR/E9iRK+Esdjy/ynqYWGVkWdzPeW3zarF4Mb4ZjE6WUWwkmZ90OrQsvxASg3pMDvJ1Pi9wSabBr9BHiVoBxYBAOgGwyCOXAh+5n8X2jbhCrAJNgDWbrFC7gG63JIgZ6BXwEGAC72X0BkOgIGAAAAAElFTkSuQmCC') 6px 6px no-repeat;\n}\n \n.loginBtn--google:hover,\n.loginBtn--google:focus {\n  background: #E74B37;\n}"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row align-items-center\">\n        <div class=\"col-sm \">\n            <div class=\"row justify-content-center\">\n                <div class=\"col-sm-4 \" style=\"margin-top:50px;\">\n                    <div class=\"card drop-shadow\">\n                        <div class=\"card-body card-section\">\n                            <div class=\"row\" style=\"display: flex;\n  align-items: center;\n  justify-content: center;\">\n                                <h5>To Do Manager</h5>\n                            </div>\n                            <hr>\n<!--                                <p>Please sign in ....</p>-->\n                            <div class=\"row\" style=\"display: flex;\n  align-items: center;\n  justify-content: center;\">\n                                <button class=\"loginBtn loginBtn--google\" (click)=\"login()\">\n                                    Login with Google\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.isSignedIn().then(function (isSignedIn) {
            if (isSignedIn) {
                _this.router.navigate(['home']);
            }
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.signIn().then(function (data) {
            _this.authService.listen(function (isSignedIn) {
                console.log("isSignedIn = " + isSignedIn);
                if (isSignedIn) {
                    _this.router.navigate(['home']);
                }
            });
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"myNav\" class=\"overlay\">\n\n    <!-- Button to close the overlay navigation -->\n    <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\n\n    \n    <!-- Overlay content -->\n    <div class=\"overlay-content\">\n        <span (click)=\"redirectHome()\">Home</span>\n        <span (click)=\"redirectTaskList()\">Task Lists</span>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = /** @class */ (function () {
    function MenuComponent(router) {
        this.router = router;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.closeNav = function () {
        __WEBPACK_IMPORTED_MODULE_2_jquery__('#myNav').css("width", "0%");
    };
    MenuComponent.prototype.redirectHome = function () {
        __WEBPACK_IMPORTED_MODULE_2_jquery__('#myNav').css("width", "0%");
        this.router.navigate(['home']);
    };
    MenuComponent.prototype.redirectTaskList = function () {
        __WEBPACK_IMPORTED_MODULE_2_jquery__('#myNav').css("width", "0%");
        this.router.navigate(['tasklist']);
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-menu',
            template: __webpack_require__("./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__("./src/app/components/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/task-lists/task-lists.component.css":
/***/ (function(module, exports) {

module.exports = "body{\n    background-color: #2980b9 !important;\n}\n\n.task-card{\n    width: 15rem;\n    display: inline-block;\n    margin: 10px;\n    height: 10rem;\n    \n}\n\n.taskListHeader{\n    padding: 10px;\n    border-bottom: 1px solid lightgray;\n    font-size: 20px;\n    cursor: pointer;\n}\n\n.checkbox-custom{\n    display: none;\n}\n\n.checkbox-custom-label{\n    margin: 0px;\n}\n\n.checkbox-custom + .checkbox-custom-label:before {\n    content: \"\\f096\";\n    font-family: 'FontAwesome';\n    margin: 0px;\n}\n\n.checkbox-custom:checked + .checkbox-custom-label:before {\n    content: \"\\f14a\";\n    font-family: 'FontAwesome';\n    margin: 0px;\n}\n\n.w100{\n    width: 100%;\n}\n\n.w90{\n    width: 90%;\n}\n\ninput.addTaskInput{\n    border: 0px;\n    border-bottom: 1px solid #343a40;\n    background-color: transparent;\n}\n\ninput.addTaskInput:focus {\n    outline-width: 0;\n}\n\n.completed-Task{\n    text-decoration: line-through;\n}\n\n.text-cursor{\n    cursor: text;\n}\n\n.pointer{\n    cursor:pointer;\n}\n\n.mb1 {\n    margin-bottom: .25rem;\n}\n\n.ph4 {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n}\n\n.ph3 {\n    padding-left: 1rem;\n    padding-right: 1rem;\n}\n\n.pv3 {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n}\n\n.todoContainer{\n    width: 100%;\n    font-family: fa5-proxima-nova,Helvetica Neue,Helvetica,Arial,sans-serif;\n    padding: 20px;\n}\n\n.bg-green{\n    background-color: #1abc9c;\n}\n\n.bg-gray8 {\n    background-color: #343a40;\n}\n\n.o-50 {\n    opacity: .5;\n}\n\n.bg-white-90 {\n    background-color: hsla(0,0%,100%,.9);\n}\n\n.bg-white, .docs-generated table {\n    background-color: #fff;\n}\n\n.bg-indigo7 {\n    background-color: #4263eb;\n}\n\n.white {\n    color: #fff;\n}\n\n.docs-generated h3, .docs-generated h4, .f3 {\n    font-size: 1rem;\n}\n\n.docs-generated h1, .docs-generated h2, .docs-generated h3, .docs-generated h4, .fw6 {\n    font-weight: 600;\n}\n\n.items-center {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n}\n\n.flex-row {\n    -webkit-box-orient: horizontal;\n    -ms-flex-direction: row;\n    flex-direction: row;\n}\n\n.flex-column, .flex-row {\n    -webkit-box-direction: normal;\n}\n\n.flex {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.ml3 {\n    margin-left: 1rem;\n}\n\n.pv3 {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n}\n\n.pl3 {\n    padding-left: 1rem;\n}\n\n.bw1, .docs-generated h4 {\n    border-width: .125rem;\n}\n\n.b--black-50 {\n    border-color: rgba(0,0,0,.5);\n}\n\n.bl, .docs-generated table th {\n    border-left-style: solid;\n    border-left-width: 1px;\n}\n\nsvg:not(:root).svg-inline--fa {\n    overflow: visible;\n}\n\nsvg:not(:root).svg-inline--fa {\n    overflow: visible;\n}\n\n.svg-inline--fa.fa-fw {\n    width: 1.25em;\n}\n\n.svg-inline--fa.fa-w-16 {\n    width: 1em;\n}\n\n.svg-inline--fa.fa-lg {\n    vertical-align: -.225em;\n}\n\n.svg-inline--fa.fa-fw {\n    width: 1.25em;\n}\n\n.svg-inline--fa.fa-w-16 {\n    width: 1.25em;\n}\n\n.svg-inline--fa.fa-lg {\n    vertical-align: -.225em;\n}\n\nsvg:not(:root) {\n    overflow: hidden;\n}\n\n.fa-fw {\n    text-align: center;\n    width: 1.25em;\n}\n\n.fa-lg {\n    font-size: 1.33333em;\n    line-height: .75em;\n    vertical-align: -.0667em;\n}\n\n.fa-fw {\n    text-align: center;\n    width: 1.25em;\n}\n\n.fa-lg {\n    font-size: 1.33333em;\n    line-height: 0.75em;\n    vertical-align: -.0667em;\n}\n\n.svg-inline--fa {\n    display: inline-block;\n    font-size: inherit;\n    height: 1em;\n    overflow: visible;\n    vertical-align: -.125em;\n}\n\n.fa-fw {\n    text-align: center;\n    width: 1.25em;\n}\n\n.fa-lg {\n    font-size: 1.33333em;\n    line-height: 0.75em;\n    vertical-align: -.0667em;\n}\n\n.svg-inline--fa {\n    display: inline-block;\n    font-size: inherit;\n    height: 1em;\n    overflow: visible;\n    vertical-align: -.125em;\n}"

/***/ }),

/***/ "./src/app/components/task-lists/task-lists.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"todoContainer\">\n    <div class=\"row align-items-center\">\n        <div class=\"col-sm\">\n            <div class=\"row justify-content-center\">\n                <div class=\"col-sm-6\" >\n                    <h2 class=\"ttu tracked2 b f3 mv0 ph4 pv3 bg-gray8 br2 br--top white\">TODO Catagories</h2>\n                    <article class=\"fw6 flex flex-row items-center ph3 bg-white mb1\">\n                        <i class=\"svg-inline--fa fa fa-plus fa-w-14 fa-fw fa-lg\"></i>\n                        <span class=\"ml3 bl bw1 b--black-50 pl3 pv3 text-cursor\" *ngIf=\"!addTaskEditMode\" (click)=\"addTaskEditMode=true;focusInput();\">Add task catagory</span>\n                        <span class=\"ml3 bl bw1 b--black-50 pl3 pv3 text-cursor w90\" *ngIf=\"addTaskEditMode\">\n                    <input [(ngModel)]=\"addTaskCatagoryText\" #addInputField\n                           class=\"addTaskInput w100\" \n                           (keyup.enter)=\"addTaskCatagory()\"\n                           (focusout)=\"addTaskCatagory()\">\n                </span>\n                    </article>\n                    <article *ngIf=\"loadingTask\"\n                             class=\"fw6 flex flex-row items-center ph3 br2 br--bottom bg-white-90 mb1\">\n                        <app-loader style=\"width: 100%;\"></app-loader>\n                    </article>\n                    <div *ngIf=\"!loadingTask\">\n                    \n                    <article class=\"fw6 flex flex-row items-center ph3 br2 br--bottom bg-white-90 mb1\" *ngFor=\"let task of taskLists\">\n                        <i class=\"svg-inline--fa fa fa-trash fa-w-16 fa-fw fa-lg pointer\"\n                           (click)=\"deleteTask(template,task)\"></i>\n                        <span class=\"ml3 bl bw1 b--black-50 pl3 pv3 text-cursor w90\"\n                              *ngIf=\"!task.editMode\" (click)=\"task.editMode=true;\">{{task.title}}</span>\n                        <i *ngIf=\"!task.editMode\" class=\"fa fa-tasks\" (click)=\"redirectToTask(task)\"></i>\n                        <span class=\"ml3 bl bw1 b--black-50 pl3 pv3 text-cursor w90\"\n                              *ngIf=\"task.editMode\">\n                            <input [(ngModel)]=\"task.title\" \n                                   class=\"addTaskInput w100\" \n                                   (keyup.enter)=\"editTaskCatagory(task)\" (focusout)=\"editTaskCatagory(task)\">\n                        </span>\n                    </article>\n                        </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #template>\n  <div class=\"modal-body text-center\">\n    <p>Do you want to delete the task?</p>\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"confirmDelete()\" >Yes</button>\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"declineDelete()\" >No</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/components/task-lists/task-lists.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskListsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_task_list_service__ = __webpack_require__("./src/app/services/task-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_task_service__ = __webpack_require__("./src/app/services/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TaskListsComponent = /** @class */ (function () {
    function TaskListsComponent(cdr, taskListService, taskService, modalService, router) {
        this.cdr = cdr;
        this.taskListService = taskListService;
        this.taskService = taskService;
        this.modalService = modalService;
        this.router = router;
        this.tasks = [];
        this.pendingTasks = [];
        this.completedTasks = [];
        this.addTaskEditMode = false;
        this.addTaskCatagoryText = "";
        this.crudOperationInProgress = false;
        this.taskLists = [];
        this.loadingTask = false;
    }
    TaskListsComponent.prototype.ngOnInit = function () {
        this.getTaskCatagoryList();
    };
    TaskListsComponent.prototype.addTaskCatagory = function () {
        var _this = this;
        if (!this.crudOperationInProgress) {
            this.addTaskEditMode = false;
            this.crudOperationInProgress = true;
            this.loadingTask = true;
            var data = {
                title: this.addTaskCatagoryText
            };
            this.taskListService.insert(data).then(function (response) {
                _this.crudOperationInProgress = false;
                _this.getTaskCatagoryList();
            });
        }
    };
    TaskListsComponent.prototype.editTaskCatagory = function (data) {
        var _this = this;
        if (!this.crudOperationInProgress) {
            data.editMode = false;
            this.crudOperationInProgress = true;
            this.loadingTask = true;
            this.taskListService.update(data).then(function (response) {
                _this.crudOperationInProgress = false;
                _this.getTaskCatagoryList();
            });
        }
    };
    TaskListsComponent.prototype.getTaskCatagoryList = function () {
        var _this = this;
        this.loadingTask = true;
        this.taskLists = [];
        this.taskListService.get().then(function (response) {
            _this.taskLists = response.result.items;
            _this.loadingTask = false;
        });
    };
    TaskListsComponent.prototype.toggle = function (id) {
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#' + id).toggle();
    };
    TaskListsComponent.prototype.focusInput = function () {
        var _this = this;
        setTimeout(function () {
            _this.addInputFieldEl.nativeElement.focus();
        }, 1);
    };
    TaskListsComponent.prototype.redirectToTask = function (taskCatagory) {
        this.router.navigate(['/tasklist', taskCatagory.id, 'tasks']);
    };
    TaskListsComponent.prototype.deleteTask = function (template, data) {
        this.selectedTaskList = data;
        this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    };
    TaskListsComponent.prototype.confirmDelete = function () {
        var _this = this;
        this.modalRef.hide();
        this.loadingTask = true;
        this.taskListService.delete(this.selectedTaskList.id).then(function (response) {
            _this.getTaskCatagoryList();
        });
    };
    TaskListsComponent.prototype.declineDelete = function () {
        this.modalRef.hide();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('addInputField'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], TaskListsComponent.prototype, "addInputFieldEl", void 0);
    TaskListsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-task-lists',
            template: __webpack_require__("./src/app/components/task-lists/task-lists.component.html"),
            styles: [__webpack_require__("./src/app/components/task-lists/task-lists.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_1__services_task_list_service__["a" /* TaskListService */],
            __WEBPACK_IMPORTED_MODULE_2__services_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */]])
    ], TaskListsComponent);
    return TaskListsComponent;
}());



/***/ }),

/***/ "./src/app/components/tasks/tasks.component.css":
/***/ (function(module, exports) {

module.exports = "\nbody{\n    background-color: #1abc9c;\n}\n.task-card{\n    width: 15rem;\n    display: inline-block;\n    margin: 10px;\n    height: 10rem;\n    \n}\n.taskListHeader{\n    padding: 10px;\n    border-bottom: 1px solid lightgray;\n    font-size: 20px;\n    cursor: pointer;\n}\n.checkbox-custom{\n    display: none;\n}\n.checkbox-custom-label{\n    margin: 0px;\n}\n.checkbox-custom + .checkbox-custom-label:before {\n    content: \"\\f096\";\n    font-family: 'FontAwesome';\n    margin: 0px;\n}\n.checkbox-custom:checked + .checkbox-custom-label:before {\n    content: \"\\f14a\";\n    font-family: 'FontAwesome';\n    margin: 0px;\n}\n.w100{\n    width: 100%;\n}\n.w90{\n    width: 90%;\n}\ninput.addTaskInput{\n    border: 0px;\n    border-bottom: 1px solid #343a40;\n    background-color: transparent;\n}\ninput.addTaskInput:focus {\n    outline-width: 0;\n}\n.completed-Task{\n    text-decoration: line-through;\n}\n.text-cursor{\n    cursor: text;\n}\n.pointer{\n    cursor:pointer;\n}\n.mb1 {\n    margin-bottom: .25rem;\n}\n.ph4 {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n}\n.ph3 {\n    padding-left: 1rem;\n    padding-right: 1rem;\n}\n.pv3 {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n}\n.todoContainer{\n    width: 100%;\n    font-family: fa5-proxima-nova,Helvetica Neue,Helvetica,Arial,sans-serif;\n    padding: 20px;\n}\n.bg-green{\n    background-color: #1abc9c;\n}\n.bg-gray8 {\n    background-color: #343a40;\n}\n.o-50 {\n    opacity: .5;\n}\n.bg-white-90 {\n    background-color: hsla(0,0%,100%,.9);\n}\n.bg-white, .docs-generated table {\n    background-color: #fff;\n}\n.bg-indigo7 {\n    background-color: #4263eb;\n}\n.white {\n    color: #fff;\n}\n.docs-generated h3, .docs-generated h4, .f3 {\n    font-size: 1rem;\n}\n.docs-generated h1, .docs-generated h2, .docs-generated h3, .docs-generated h4, .fw6 {\n    font-weight: 600;\n}\n.items-center {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n}\n.flex-row {\n    -webkit-box-orient: horizontal;\n    -ms-flex-direction: row;\n    flex-direction: row;\n}\n.flex-column, .flex-row {\n    -webkit-box-direction: normal;\n}\n.flex {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.ml3 {\n    margin-left: 1rem;\n}\n.pv3 {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n}\n.pl3 {\n    padding-left: 1rem;\n}\n.bw1, .docs-generated h4 {\n    border-width: .125rem;\n}\n.b--black-50 {\n    border-color: rgba(0,0,0,.5);\n}\n.bl, .docs-generated table th {\n    border-left-style: solid;\n    border-left-width: 1px;\n}\nsvg:not(:root).svg-inline--fa {\n    overflow: visible;\n}\nsvg:not(:root).svg-inline--fa {\n    overflow: visible;\n}\n.svg-inline--fa.fa-fw {\n    width: 1.25em;\n}\n.svg-inline--fa.fa-w-16 {\n    width: 1em;\n}\n.svg-inline--fa.fa-lg {\n    vertical-align: -.225em;\n}\n.svg-inline--fa.fa-fw {\n    width: 1.25em;\n}\n.svg-inline--fa.fa-w-16 {\n    width: 1.25em;\n}\n.svg-inline--fa.fa-lg {\n    vertical-align: -.225em;\n}\nsvg:not(:root) {\n    overflow: hidden;\n}\n.fa-fw {\n    text-align: center;\n    width: 1.25em;\n}\n.fa-lg {\n    font-size: 1.33333em;\n    line-height: .75em;\n    vertical-align: -.0667em;\n}\n.fa-fw {\n    text-align: center;\n    width: 1.25em;\n}\n.fa-lg {\n    font-size: 1.33333em;\n    line-height: 0.75em;\n    vertical-align: -.0667em;\n}\n.svg-inline--fa {\n    display: inline-block;\n    font-size: inherit;\n    height: 1em;\n    overflow: visible;\n    vertical-align: -.125em;\n}\n.fa-fw {\n    text-align: center;\n    width: 1.25em;\n}\n.fa-lg {\n    font-size: 1.33333em;\n    line-height: 0.75em;\n    vertical-align: -.0667em;\n}\n.svg-inline--fa {\n    display: inline-block;\n    font-size: inherit;\n    height: 1em;\n    overflow: visible;\n    vertical-align: -.125em;\n}"

/***/ }),

/***/ "./src/app/components/tasks/tasks.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"todoContainer\" *ngIf=\"!loadingFirstTime\">\n    <div class=\"row align-items-center\">\n        <div class=\"col-sm\">\n            <div class=\"row justify-content-center\">\n                <div class=\"col-sm-6\" >\n                    <h2 class=\"ttu tracked2 b f3 mv0 ph4 pv3 bg-gray8 br2 br--top white\">{{defaultTaskList.title}}</h2>\n<!--                    <h2 class=\"ttu tracked2 b f3 mv0 ph4 pv3 bg-gray8 br2 br--top white\">TODOs</h2>-->\n                    <article class=\"fw6 flex flex-row items-center ph3 bg-white mb1\">\n                        <i class=\"svg-inline--fa fa fa-plus fa-w-14 fa-fw fa-lg\"></i>\n                        <span class=\"ml3 bl bw1 b--black-50 pl3 pv3 text-cursor\" *ngIf=\"!addTaskEditMode\" (click)=\"addTaskEditMode=true;focusInput()\">Add to do task</span>\n                        <span class=\"ml3 bl bw1 b--black-50 pl3 pv3 text-cursor w90\" [hidden]=\"!addTaskEditMode\">\n                            <input [(ngModel)]=\"addTaskText\" #addInputField\n                                   class=\"addTaskInput w100\" \n                                   (keyup.enter)=\"addTask()\"\n                                   (focusout)=\"addTask()\">\n                        </span>\n                    </article>\n                    \n                    <article *ngIf=\"loadingTask\"\n                             class=\"fw6 flex flex-row items-center ph3 br2 br--bottom bg-white-90 mb1\">\n                        <app-loader style=\"width: 100%;\"></app-loader>\n                    </article>\n                    <div *ngIf=\"!loadingTask\">\n                    <article class=\"fw6 flex flex-row items-center ph3 br2 br--bottom bg-white-90 mb1\" *ngFor=\"let task of pendingTasks\">\n<!--                        <i class=\"svg-inline--fa fa far fa-square fa-w-14 fa-fw fa-lg pointer\"></i>-->\n                        <input id=\"check-task-{{task.id}}\" \n                               [(ngModel)]=\"task.check\" (change)=\"completeTask(task)\"\n                               type=\"checkbox\" class=\"checkbox-custom\" />\n                        <label for=\"check-task-{{task.id}}\" class=\"svg-inline--fa fa-w-14 fa-fw fa-lg pointer checkbox-custom-label\"></label>\n                        <span class=\"ml3 bl bw1 b--black-50 pl3 pv3 text-cursor\"\n                              *ngIf=\"!task.editMode\" (click)=\"task.editMode=true;\">{{task.title}}</span>\n                        <span class=\"ml3 bl bw1 b--black-50 pl3 pv3 text-cursor w90\"\n                              *ngIf=\"task.editMode\">\n                            <input [(ngModel)]=\"task.title\" \n                                   class=\"addTaskInput w100\" \n                                   (keyup.enter)=\"editTask(task)\" (focusout)=\"editTask(task)\">\n                        </span>\n                        \n                    </article>\n                    <article class=\"fw6 flex flex-row items-center ph3 bg-white-90 o-50 mb1\" *ngFor=\"let task of completedTasks\">\n                        <i class=\"svg-inline--fa fa fa-trash fa-w-16 fa-fw fa-lg pointer\"\n                           (click)=\"deleteTask(template,task)\"></i>\n                        <span class=\"ml3 bl bw1 b--black-50 pl3 pv3 completed-Task\">{{task.title}}</span>\n                    </article>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #template>\n  <div class=\"modal-body text-center\">\n    <p>Do you want to delete the task?</p>\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"confirmDelete()\" >Yes</button>\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"declineDelete()\" >No</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/components/tasks/tasks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_task_list_service__ = __webpack_require__("./src/app/services/task-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_task_service__ = __webpack_require__("./src/app/services/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TasksComponent = /** @class */ (function () {
    function TasksComponent(cdr, taskListService, taskService, modalService, route) {
        var _this = this;
        this.cdr = cdr;
        this.taskListService = taskListService;
        this.taskService = taskService;
        this.modalService = modalService;
        this.route = route;
        this.tasks = [];
        this.pendingTasks = [];
        this.completedTasks = [];
        this.addTaskEditMode = false;
        this.addTaskText = "";
        this.crudOperationInProgress = false;
        this.taskCatagoryExist = false;
        this.loadingTask = false;
        this.loadingFirstTime = true;
        this.route.params.subscribe(function (params) {
            console.log(params);
            if (params.id) {
                _this.defaultTaskList = {
                    id: params.id,
                    title: ''
                };
                _this.taskCatagoryExist = true;
            }
        });
    }
    TasksComponent.prototype.ngOnInit = function () {
        this.getFirstTaskList();
    };
    TasksComponent.prototype.addTask = function () {
        var _this = this;
        if (this.addTaskText.length > 0) {
            if (!this.crudOperationInProgress) {
                this.addTaskEditMode = false;
                this.crudOperationInProgress = true;
                this.loadingTask = true;
                var data = {
                    title: this.addTaskText
                };
                this.taskService.insert(this.defaultTaskList.id, data).then(function (response) {
                    _this.crudOperationInProgress = false;
                    _this.addTaskText = "";
                    _this.getTasks();
                });
            }
        }
        else {
            this.addTaskEditMode = false;
        }
    };
    TasksComponent.prototype.editTask = function (data) {
        var _this = this;
        if (!this.crudOperationInProgress) {
            data.editMode = false;
            this.crudOperationInProgress = true;
            this.loadingTask = true;
            this.taskService.update(this.defaultTaskList.id, data).then(function (response) {
                _this.crudOperationInProgress = false;
                _this.getTasks();
            });
        }
    };
    TasksComponent.prototype.getFirstTaskList = function () {
        var _this = this;
        this.loadingFirstTime = true;
        if (this.taskCatagoryExist) {
            this.taskListService.get(this.defaultTaskList.id).then(function (response) {
                _this.defaultTaskList = response.result;
                _this.loadingFirstTime = false;
                _this.getTasks();
            });
        }
        else {
            this.taskListService.get().then(function (response) {
                _this.defaultTaskList = response.result.items[0];
                var taskList = response.result.items[0];
                _this.loadingFirstTime = false;
                _this.getTasks();
            });
        }
    };
    TasksComponent.prototype.getTasks = function () {
        var _this = this;
        this.tasks = [];
        this.completedTasks = [];
        this.pendingTasks = [];
        this.loadingTask = true;
        this.taskService.get(this.defaultTaskList.id).then(function (response) {
            if (response.result.items) {
                _this.tasks = response.result.items;
                _this.tasks.forEach(function (task) {
                    if (task.status == "completed") {
                        _this.completedTasks.push(task);
                    }
                    else if (task.status == "needsAction") {
                        _this.pendingTasks.push(task);
                    }
                });
            }
            _this.loadingTask = false;
        });
    };
    TasksComponent.prototype.toggle = function (id) {
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#' + id).toggle();
    };
    TasksComponent.prototype.focusInput = function () {
        var _this = this;
        setTimeout(function () {
            _this.addInputFieldEl.nativeElement.focus();
        }, 1);
    };
    TasksComponent.prototype.completeTask = function (data) {
        var _this = this;
        if (data.check) {
            data.status = "completed";
            this.loadingTask = true;
            this.taskService.update(this.defaultTaskList.id, data).then(function (response) {
                _this.getTasks();
            });
        }
    };
    TasksComponent.prototype.deleteTask = function (template, data) {
        this.selectedTask = data;
        this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    };
    TasksComponent.prototype.confirmDelete = function () {
        var _this = this;
        this.modalRef.hide();
        this.loadingTask = true;
        this.taskService.delete(this.defaultTaskList.id, this.selectedTask).then(function (response) {
            _this.getTasks();
        });
    };
    TasksComponent.prototype.declineDelete = function () {
        this.modalRef.hide();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('addInputField'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], TasksComponent.prototype, "addInputFieldEl", void 0);
    TasksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tasks',
            template: __webpack_require__("./src/app/components/tasks/tasks.component.html"),
            styles: [__webpack_require__("./src/app/components/tasks/tasks.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_1__services_task_list_service__["a" /* TaskListService */],
            __WEBPACK_IMPORTED_MODULE_2__services_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal__["a" /* BsModalService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]])
    ], TasksComponent);
    return TasksComponent;
}());



/***/ }),

/***/ "./src/app/configs/app.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
var AppConfig = /** @class */ (function () {
    function AppConfig() {
    }
    AppConfig.googleTask = {
        client_id: '778996693929-39icdut6us06ap2lpu544nhab6iue03n.apps.googleusercontent.com',
        scope: [
            // Manage your tasks
            'https://www.googleapis.com/auth/tasks',
            // View your tasks
            'https://www.googleapis.com/auth/tasks.readonly'
        ],
        DISCOVERY_DOCS: ["https://www.googleapis.com/discovery/v1/apis/tasks/v1/rest"],
        SCOPES: 'https://www.googleapis.com',
        immediate: true
    };
    return AppConfig;
}());



/***/ }),

/***/ "./src/app/dtos/messages.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = /** @class */ (function () {
    function Message(_content, _style) {
        this.dismissed = false;
        this.content = _content;
        this.style = _style || 'info';
    }
    return Message;
}());



/***/ }),

/***/ "./src/app/services/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
    }
    AppService.prototype.getTaskList = function () {
        return gapi.client.request({
            'path': 'https://www.googleapis.com/tasks/v1/users/@me/lists'
        });
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], AppService);
    return AppService;
}());

;


/***/ }),

/***/ "./src/app/services/auth-resolve.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthResolveService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthResolveService = /** @class */ (function () {
    function AuthResolveService(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthResolveService.prototype.resolve = function (route) {
        var _this = this;
        return this.authService.isSignedIn().then(function (isSignedIn) {
            if (!isSignedIn) {
                _this.router.navigate(['login']);
            }
        });
    };
    AuthResolveService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
    ], AuthResolveService);
    return AuthResolveService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__window_ref_service__ = __webpack_require__("./src/app/services/window-ref.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_api_service__ = __webpack_require__("./src/app/services/google-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(GoogleAPI, windowRef) {
        this.GoogleAPI = GoogleAPI;
        this.windowRef = windowRef;
        this.window = windowRef.nativeWindow;
    }
    AuthService.prototype.signIn = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.GoogleAPI.auth().then(function () {
                _this.window.gapi.auth2.getAuthInstance().signIn();
                resolve();
            }, function () {
                reject();
            });
        });
    };
    ;
    AuthService.prototype.isSignedIn = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.GoogleAPI.auth().then(function () {
                resolve(_this.window.gapi.auth2.getAuthInstance().isSignedIn.get());
            }, function () {
                reject();
            });
        });
    };
    ;
    AuthService.prototype.listen = function (callback) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.GoogleAPI.auth().then(function () {
                _this.window.gapi.auth2.getAuthInstance().isSignedIn.listen(callback);
                resolve();
            }, function () {
                reject();
            });
        });
    };
    ;
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__google_api_service__["a" /* GoogleApiService */],
            __WEBPACK_IMPORTED_MODULE_1__window_ref_service__["a" /* WindowRefService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/google-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__window_ref_service__ = __webpack_require__("./src/app/services/window-ref.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configs_app_config__ = __webpack_require__("./src/app/configs/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GoogleApiService = /** @class */ (function () {
    function GoogleApiService(windowRef) {
        this.windowRef = windowRef;
        this.window = windowRef.nativeWindow;
    }
    // Run until the `gapi` became to be defined
    GoogleApiService.prototype.gapi = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.window.gapi) {
                resolve();
            }
        });
    };
    ;
    GoogleApiService.prototype.load = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].timer(100).take(2).flatMap(function (i) { return _this.gapi(); });
    };
    GoogleApiService.prototype.auth = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.load().subscribe(function () {
                _this.window.gapi.load('client:auth2', function () {
                    _this.window.gapi.client.init({
                        discoveryDocs: __WEBPACK_IMPORTED_MODULE_2__configs_app_config__["a" /* AppConfig */].googleTask.DISCOVERY_DOCS,
                        clientId: __WEBPACK_IMPORTED_MODULE_2__configs_app_config__["a" /* AppConfig */].googleTask.client_id,
                        scope: __WEBPACK_IMPORTED_MODULE_2__configs_app_config__["a" /* AppConfig */].googleTask.SCOPES + "/auth/tasks"
                    }).then(function (response) {
                        resolve();
                    }, function (reason) {
                        reject();
                    });
                });
            });
        });
    };
    ;
    GoogleApiService.prototype.request = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.auth().then(function () {
                if (!_this.window.gapi.auth2.getAuthInstance().isSignedIn.get()) {
                    // deferred.reject('auth needed');
                }
                else {
                    _this.window.gapi.client.request(params).then(function (response) {
                        resolve(response);
                    }, function (reason) {
                        reject(reason);
                    });
                }
            }).catch(function () {
            });
        });
    };
    GoogleApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__window_ref_service__["a" /* WindowRefService */]])
    ], GoogleApiService);
    return GoogleApiService;
}());



/***/ }),

/***/ "./src/app/services/task-list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__configs_app_config__ = __webpack_require__("./src/app/configs/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_api_service__ = __webpack_require__("./src/app/services/google-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskListService = /** @class */ (function () {
    function TaskListService(GoogleAPI) {
        this.GoogleAPI = GoogleAPI;
        this.request = 'tasks/v1/users/@me/lists';
        this.delete = function (id) {
            return this.GoogleAPI.request({
                'path': __WEBPACK_IMPORTED_MODULE_1__configs_app_config__["a" /* AppConfig */].googleTask.SCOPES + "/" + this.request + "/" + id,
                'method': 'DELETE'
            });
        };
    }
    TaskListService.prototype.get = function (id) {
        id = id ? "/" + id : "";
        return this.GoogleAPI.request({
            'path': __WEBPACK_IMPORTED_MODULE_1__configs_app_config__["a" /* AppConfig */].googleTask.SCOPES + "/" + this.request + id
        });
    };
    TaskListService.prototype.insert = function (data) {
        return this.GoogleAPI.request({
            'path': __WEBPACK_IMPORTED_MODULE_1__configs_app_config__["a" /* AppConfig */].googleTask.SCOPES + "/" + this.request,
            'method': 'POST',
            'body': data
        });
    };
    ;
    TaskListService.prototype.update = function (data) {
        return this.GoogleAPI.request({
            'path': __WEBPACK_IMPORTED_MODULE_1__configs_app_config__["a" /* AppConfig */].googleTask.SCOPES + "/" + this.request + "/" + data.id,
            'method': 'PUT',
            'body': data
        });
    };
    ;
    TaskListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__google_api_service__["a" /* GoogleApiService */]])
    ], TaskListService);
    return TaskListService;
}());



/***/ }),

/***/ "./src/app/services/task.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__configs_app_config__ = __webpack_require__("./src/app/configs/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_api_service__ = __webpack_require__("./src/app/services/google-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskService = /** @class */ (function () {
    function TaskService(GoogleAPI) {
        this.GoogleAPI = GoogleAPI;
        this.request = 'tasks/v1/lists';
    }
    TaskService.prototype.get = function (tasklist) {
        return this.GoogleAPI.request({
            'path': __WEBPACK_IMPORTED_MODULE_1__configs_app_config__["a" /* AppConfig */].googleTask.SCOPES + "/" + this.request + "/" + tasklist + "/tasks"
        });
    };
    TaskService.prototype.insert = function (tasklist, data) {
        return this.GoogleAPI.request({
            'path': __WEBPACK_IMPORTED_MODULE_1__configs_app_config__["a" /* AppConfig */].googleTask.SCOPES + "/" + this.request + "/" + tasklist + "/tasks",
            'method': 'POST',
            'body': data
        });
    };
    TaskService.prototype.update = function (tasklist, data) {
        return this.GoogleAPI.request({
            'path': __WEBPACK_IMPORTED_MODULE_1__configs_app_config__["a" /* AppConfig */].googleTask.SCOPES + "/" + this.request + "/" + tasklist + "/tasks/" + data.id,
            'method': 'PUT',
            'body': data
        });
    };
    ;
    TaskService.prototype.delete = function (tasklist, data) {
        return this.GoogleAPI.request({
            'path': __WEBPACK_IMPORTED_MODULE_1__configs_app_config__["a" /* AppConfig */].googleTask.SCOPES + "/" + this.request + "/" + tasklist + "/tasks/" + data.id,
            'method': 'DELETE'
        });
    };
    ;
    TaskService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__google_api_service__["a" /* GoogleApiService */]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/services/toast.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dtos_messages__ = __webpack_require__("./src/app/dtos/messages.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastService = /** @class */ (function () {
    function ToastService() {
        this.messageList = [];
    }
    ToastService.prototype.getMessages = function () {
        return this.messageList;
    };
    ToastService.prototype.sendMessage = function (_content, _style) {
        var msg = new __WEBPACK_IMPORTED_MODULE_1__dtos_messages__["a" /* Message */](_content, _style);
        this.messageList.push(msg);
    };
    ToastService.prototype.dismissMessage = function (msg) {
        var index = this.messageList.indexOf(msg);
        if (index > -1) {
            this.messageList.splice(index, 1);
        }
    };
    ToastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ToastService);
    return ToastService;
}());



/***/ }),

/***/ "./src/app/services/window-ref.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowRefService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

function _window() {
    // return the global native browser window object
    return window;
}
var WindowRefService = /** @class */ (function () {
    function WindowRefService() {
    }
    Object.defineProperty(WindowRefService.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    WindowRefService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], WindowRefService);
    return WindowRefService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map