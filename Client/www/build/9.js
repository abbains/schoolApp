webpackJsonp([9],{

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTeacherPageModule", function() { return EditTeacherPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_teacher__ = __webpack_require__(705);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditTeacherPageModule = /** @class */ (function () {
    function EditTeacherPageModule() {
    }
    EditTeacherPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_teacher__["a" /* EditTeacherPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_teacher__["a" /* EditTeacherPage */]),
            ],
        })
    ], EditTeacherPageModule);
    return EditTeacherPageModule;
}());

//# sourceMappingURL=edit-teacher.module.js.map

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditTeacherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_teachers_teachers__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(44);
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
 * Generated class for the EditTeacherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditTeacherPage = /** @class */ (function () {
    function EditTeacherPage(storage, navCtrl, navParams, fb, teacherService) {
        var _this = this;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.teacherService = teacherService;
        this.editTeacher = this.fb.group({
            firstname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            middlename: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            lastname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            confirmpass: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            city: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            state: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            country: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            pnumber: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            age: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            class: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
        });
        //setting up value from teacher 
        this.teacher = this.navParams.get('teacher');
        this.storage.get('token').then(function (val) {
            _this.token = val;
            console.log(_this.token);
        });
    }
    EditTeacherPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditTeacherPage');
    };
    EditTeacherPage.prototype.delete = function (id) {
        this.teacherService.deleteTeacher(id, this.token).subscribe(function (res) {
            console.log(res);
        });
        this.navCtrl.push('TeacherPage', { token: this.token });
    };
    EditTeacherPage.prototype.onSubmit = function (data, id) {
        console.log(id);
        if (data) {
            this.teacherService.updateTeacher(id, this.token).subscribe(function (res) {
                console.log(res);
            });
            this.navCtrl.push('TeacherPage', { token: this.token });
        }
    };
    EditTeacherPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-teacher',template:/*ion-inline-start:"/Users/akshaybains/Desktop/myproject/khalsa/Client/src/pages/edit-teacher/edit-teacher.html"*/'<!--\n  Generated template for the EditTeacherPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="background">\n    <ion-title>Edit Teacher</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <form [formGroup]="editTeacher" (ngSubmit)="onSubmit(editTeacher.value, teacher.id)">\n    <ion-list color="background">\n\n      <ion-item>\n        <ion-label>First Name</ion-label>\n        <ion-input formControlName="firstname" type="text" value="{{teacher.description.firstname}}"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Middle Name</ion-label>\n        <ion-input formControlName="middlename" type="text" value="{{teacher.description.middlename}}"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Last Name</ion-label>\n        <ion-input formControlName="lastname" type="text" value="{{teacher.description.lastname}}"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Password</ion-label>\n        <ion-input formControlName="password" type="password" value="{{teacher.description.password}}"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>City</ion-label>\n        <ion-input formControlName="city" type="text" value="{{teacher.description.city}}"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>State</ion-label>\n        <ion-input formControlName="state" type="text" value="{{teacher.description.state}}"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Country</ion-label>\n        <ion-input formControlName="country" type="text" value="{{teacher.description.country}}"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Phone Number</ion-label>\n        <ion-input formControlName="pnumber" type="text" value="{{teacher.description.pnumber}}"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Age</ion-label>\n        <ion-input formControlName="age" type="text" value="{{teacher.description.age}}"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Email</ion-label>\n        <ion-input formControlName="email" type="email" value="{{teacher.description.email}}"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Class</ion-label>\n        <ion-input formControlName="class" type="text" value="{{teacher.description.class}}"></ion-input>\n      </ion-item>\n\n      <button block ion-button full ion-button icon-left color="background" round type="submit">\n        <ion-icon ios="ios-person-add" md="md-person-add"></ion-icon>\n        Update Teacher\n      </button>\n\n    </ion-list>\n\n\n  </form>\n\n  <button block ion-button full ion-button icon-left round color="danger" (click)="delete(teacher.id)" padding>\n      <ion-icon name="trash"></ion-icon>\n      Delete\n    </button>\n\n</ion-content>'/*ion-inline-end:"/Users/akshaybains/Desktop/myproject/khalsa/Client/src/pages/edit-teacher/edit-teacher.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_teachers_teachers__["a" /* TeachersProvider */]])
    ], EditTeacherPage);
    return EditTeacherPage;
}());

//# sourceMappingURL=edit-teacher.js.map

/***/ })

});
//# sourceMappingURL=9.js.map