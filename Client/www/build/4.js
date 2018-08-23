webpackJsonp([4],{

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStudentPageModule", function() { return AddStudentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_student__ = __webpack_require__(704);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddStudentPageModule = /** @class */ (function () {
    function AddStudentPageModule() {
    }
    AddStudentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_student__["a" /* AddStudentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_student__["a" /* AddStudentPage */]),
            ],
        })
    ], AddStudentPageModule);
    return AddStudentPageModule;
}());

//# sourceMappingURL=add-student.module.js.map

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddStudentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
 * Generated class for the AddStudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddStudentPage = /** @class */ (function () {
    function AddStudentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.today = new Date().toISOString();
    }
    AddStudentPage.prototype.ionViewDidLoad = function () {
        console.log(this.today);
    };
    AddStudentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-student',template:/*ion-inline-start:"/Users/akshaybains/Desktop/myproject/khalsa/Client/src/pages/add-student/add-student.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Add Student</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div padding>\n    <ion-segment [(ngModel)]="children">\n      <ion-segment-button color="background" value="parent">\n        Parent\n      </ion-segment-button>\n      <ion-segment-button color="background" value="child1">\n        Child 1\n      </ion-segment-button>\n      <ion-segment-button color="background" value="child2">\n        Child 2\n      </ion-segment-button>\n      <ion-segment-button color="background" value="child3">\n        Child 3\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch]="children">\n    <ion-list *ngSwitchCase="\'parent\'">\n      <ion-item>\n        <ion-label>First Name</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Middle Name</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n      <ion-item>\n\n        <ion-label>Last Name</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Email</ion-label>\n        <ion-input type="email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Email Secondary</ion-label>\n        <ion-input type="email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Registration</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>DOB</ion-label>\n        <ion-datetime displayFormat="MM-DD-YYYY" [(ngModel)]="today"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Age</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Gender</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Address</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>City</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>State</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Zip-Code</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Address Secondary</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>City</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>State</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Zip-Code</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Phone Number 1</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Phone Number 2</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <button block ion-button full ion-button icon-left color="background" round (click)="addchild()">\n        <ion-icon ios="ios-person-add" md="md-person-add"></ion-icon>\n        Add Me\n      </button>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'child1\'">\n      <ion-item>\n        <ion-label>First Name</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Middle Name</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n      <ion-item>\n\n        <ion-label>Last Name</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>DOB</ion-label>\n        <ion-datetime displayFormat="MM-DD-YYYY" [(ngModel)]="today"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Age</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Gender</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Kirtan</ion-label>\n        <ion-toggle color="background" checked="false"></ion-toggle>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Tanti Saaj</ion-label>\n        <ion-toggle color="background" checked="false"></ion-toggle>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Tabla</ion-label>\n        <ion-toggle color="background" checked="false"></ion-toggle>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Harmonium</ion-label>\n        <ion-toggle color="background" checked="false"></ion-toggle>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Registration Year</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Class</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n\n      <button block ion-button full ion-button icon-left color="background" round (click)="addchild()">\n        <ion-icon ios="ios-person-add" md="md-person-add"></ion-icon>\n        Add child\n      </button>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'child2\'">\n\n      <ion-item>\n        <ion-label>First Name</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Middle Name</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n      <ion-item>\n\n        <ion-label>Last Name</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>DOB</ion-label>\n        <ion-datetime displayFormat="MM-DD-YYYY" [(ngModel)]="today"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Age</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Gender</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Kirtan</ion-label>\n        <ion-toggle color="background" checked="false"></ion-toggle>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Tanti Saaj</ion-label>\n        <ion-toggle color="background" checked="false"></ion-toggle>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Tabla</ion-label>\n        <ion-toggle color="background" checked="false"></ion-toggle>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Harmonium</ion-label>\n        <ion-toggle color="background" checked="false"></ion-toggle>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Registration Year</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Class</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n\n      <button block ion-button full ion-button icon-left color="background" round (click)="addchild()">\n        <ion-icon ios="ios-person-add" md="md-person-add"></ion-icon>\n        Add child\n      </button>\n\n\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'child3\'">\n      <ion-item>\n        <ion-label>First Name</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Middle Name</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n      <ion-item>\n\n        <ion-label>Last Name</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>DOB</ion-label>\n        <ion-datetime displayFormat="MM-DD-YYYY" [(ngModel)]="today"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Age</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Gender</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Kirtan</ion-label>\n        <ion-toggle color="background" checked="false"></ion-toggle>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Tanti Saaj</ion-label>\n        <ion-toggle color="background" checked="false"></ion-toggle>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Tabla</ion-label>\n        <ion-toggle color="background" checked="false"></ion-toggle>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Harmonium</ion-label>\n        <ion-toggle color="background" checked="false"></ion-toggle>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Registration Year</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Class</ion-label>\n        <ion-input type="text"></ion-input>\n      </ion-item>\n\n\n      <button block ion-button full ion-button icon-left color="background" round (click)="addchild()">\n        <ion-icon ios="ios-person-add" md="md-person-add"></ion-icon>\n        Add child\n      </button>\n\n    </ion-list>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/akshaybains/Desktop/myproject/khalsa/Client/src/pages/add-student/add-student.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AddStudentPage);
    return AddStudentPage;
}());

//# sourceMappingURL=add-student.js.map

/***/ })

});
//# sourceMappingURL=4.js.map