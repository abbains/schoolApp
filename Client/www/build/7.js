webpackJsonp([7],{

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherPageModule", function() { return TeacherPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teacher__ = __webpack_require__(702);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TeacherPageModule = /** @class */ (function () {
    function TeacherPageModule() {
    }
    TeacherPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__teacher__["a" /* TeacherPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__teacher__["a" /* TeacherPage */]),
            ],
        })
    ], TeacherPageModule);
    return TeacherPageModule;
}());

//# sourceMappingURL=teacher.module.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_teachers_teachers__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_token_token__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the TeacherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TeacherPage = /** @class */ (function () {
    function TeacherPage(navCtrl, navParams, teacherService, loading, Token) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.teacherService = teacherService;
        this.loading = loading;
        this.Token = Token;
        this.teachers = [];
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]();
        console.log('hello');
        this.token = this.Token.getToken();
        // console.log(this.token)
        this.token = this.navParams.get('token');
    }
    TeacherPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //calling backend service
        console.log(this.token);
        this.teacherService.getTeachers(this.token).subscribe(function (res) {
            _this.teachers = res.data;
            console.log(_this.teachers);
        }, function (err) {
            console.log(err);
        });
    };
    TeacherPage.prototype.addTeacher = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    TeacherPage.prototype.edit = function (data) {
        console.log(data);
        this.navCtrl.push('EditTeacherPage', { teacher: data });
    };
    TeacherPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-teacher',template:/*ion-inline-start:"/Users/akshaybains/Desktop/myproject/khalsa/Client/src/pages/teacher/teacher.html"*/'<!--\n  Generated template for the TeacherPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Teacher</ion-title>\n    <ion-buttons end>\n      <button (click)="addTeacher()" ion-button icon-only>\n        <ion-icon ios="ios-contact" md="md-contact"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-searchbar [(ngModel)]="teach"></ion-searchbar>\n  <ion-list>\n    <ion-item>\n      <ion-item *ngFor="let teacher of teachers ">\n        <h1 (click)="edit(teacher)">{{teacher.description.firstname}} {{teacher.description.lastname}}</h1>\n      </ion-item>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/akshaybains/Desktop/myproject/khalsa/Client/src/pages/teacher/teacher.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_teachers_teachers__["a" /* TeachersProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_token_token__["a" /* TokenProvider */]])
    ], TeacherPage);
    return TeacherPage;
}());

//# sourceMappingURL=teacher.js.map

/***/ })

});
//# sourceMappingURL=7.js.map