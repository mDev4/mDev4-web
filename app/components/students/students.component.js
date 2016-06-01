"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var data_service_1 = require('../../services/data.service');
var StudentsComponent = (function () {
    function StudentsComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.students = [];
    }
    StudentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getAllStudents()
            .subscribe(function (data) {
            _this.students = data;
        });
    };
    StudentsComponent.prototype.onSelect = function (student) {
        this.router.navigate(['/student', student.id]);
    };
    StudentsComponent = __decorate([
        core_1.Component({
            selector: 'students',
            template: "\n\t\t<table class=\"mdl-data-table mdl-js-data-table mdl-cell--12-col\" *ngIf=\"students && students.length > 0\">\n\t\t    <thead>\n\t\t        <tr>\n\t\t            <th class=\"mdl-data-table__cell--non-numeric\">Student Code</th>\n\t\t            <th class=\"mdl-data-table__cell--non-numeric\">First Name</th>\n\t\t            <th class=\"mdl-data-table__cell--non-numeric\">Middle Name</th>\n\t\t            <th class=\"mdl-data-table__cell--non-numeric\">Last Name</th>\n\t\t        </tr>\n\t\t    </thead>\n\t\t    <tbody>\n\t\t        <tr *ngFor=\"let student of students\"\n\t\t        \t(click)=\"onSelect(student)\">\n\t\t            <td class=\"mdl-data-table__cell--non-numeric\">{{ student.student_code }}</td>\n\t\t            <td class=\"mdl-data-table__cell--non-numeric\">{{ student.first_name }}</td>\n\t\t            <td class=\"mdl-data-table__cell--non-numeric\">{{ student.middle_name }}</td>\n\t\t            <td class=\"mdl-data-table__cell--non-numeric\">{{ student.last_name }}</td>\n\t\t        </tr>\n\t\t    </tbody>\n\t\t</table>\n\t"
        }), 
        __metadata('design:paramtypes', [router_1.Router, data_service_1.DataService])
    ], StudentsComponent);
    return StudentsComponent;
}());
exports.StudentsComponent = StudentsComponent;
//# sourceMappingURL=students.component.js.map