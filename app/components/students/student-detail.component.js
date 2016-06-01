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
var StudentDetailComponent = (function () {
    function StudentDetailComponent(curr, router, dataService) {
        this.curr = curr;
        this.router = router;
        this.dataService = dataService;
    }
    StudentDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.studentId = this.curr.getParam('id');
        this.dataService.getStudent(this.studentId)
            .subscribe(function (data) {
            _this.student = data[0];
            _this.tests = data[1]
                .filter(function (item) {
                return item.id !== null;
            });
        });
    };
    StudentDetailComponent.prototype.goBack = function () {
        this.router.navigate(['/students']);
    };
    StudentDetailComponent = __decorate([
        core_1.Component({
            selector: 'student-detail',
            template: "\n\t\t<div class=\"mdl-grid\" *ngIf=\"student\">\n  \t\t\t<div class=\"mdl-cell mdl-cell--1-col\">\n\t\t\t\t<button class=\"mdl-button mdl-js-button mdl-button--raised\" (click)=\"goBack()\">\n\t\t\t\t\tBack\n\t\t\t\t</button>\n  \t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<table class=\"mdl-data-table mdl-js-data-table mdl-cell--12-col\" *ngIf=\"student\">\n\t\t    <thead>\n\t\t        <tr>\n\t\t            <th class=\"mdl-data-table__cell--non-numeric\">Student Code</th>\n\t\t            <th class=\"mdl-data-table__cell--non-numeric\">First Name</th>\n\t\t            <th class=\"mdl-data-table__cell--non-numeric\">Middle Name</th>\n\t\t            <th class=\"mdl-data-table__cell--non-numeric\">Last Name</th>\n\t\t            <th class=\"mdl-data-table__cell--non-numeric\">Start Year</th>\n\t\t            <th class=\"mdl-data-table__cell--non-numeric\">Gender</th>\n\t\t            <th class=\"mdl-data-table__cell--non-numeric\">Particulars</th>\n\t\t        </tr>\n\t\t    </thead>\n\t\t    <tbody>\n\t\t        <tr *ngIf=\"student\">\n\t\t        \t<td class=\"mdl-data-table__cell--non-numeric\">{{ student.student_code }}</td>\n\t\t            <td class=\"mdl-data-table__cell--non-numeric\">{{ student.first_name }}</td>\n\t\t            <td class=\"mdl-data-table__cell--non-numeric\">{{ student.middle_name }}</td>\n\t\t            <td class=\"mdl-data-table__cell--non-numeric\">{{ student.last_name }}</td>\n\t\t            <td class=\"mdl-data-table__cell--non-numeric\">{{ student.start_year }}</td>\n\t\t            <td class=\"mdl-data-table__cell--non-numeric\">{{ student.sex }}</td>\n\t\t            <td class=\"mdl-data-table__cell--non-numeric\">{{ student.particulars }}</td>\n\t\t        </tr>\n\t\t    </tbody>\n\t\t</table>\n\n\t\t<div class=\"mdl-grid\" *ngIf=\"tests && tests.length > 0\">\n  \t\t\t<div class=\"mdl-cell mdl-cell--3-col\">\n\t\t\t\t<h4>Resultaten</h4>\n  \t\t\t</div>\n\t\t</div>\n\n\t\t<table class=\"mdl-data-table mdl-js-data-table mdl-cell--12-col results\" *ngIf=\"tests && tests.length > 0\">\n\t\t    <thead>\n\t\t        <tr>\n\t\t            <th class=\"mdl-data-table__cell--non-numeric\">Title</th>\n\t\t            <th class=\"mdl-data-table__cell--non-numeric\">Description</th>\n\t\t            <th class=\"mdl-data-table__cell--non-numeric\">Date</th>\n\t\t            <th class=\"mdl-data-table__cell--non-numeric\">Grade</th>\n\t\t        </tr>\n\t\t    </thead>\n\t\t    <tbody>\n\t\t        <tr *ngFor=\"let test of tests\">\n\t\t            <td class=\"mdl-data-table__cell--non-numeric\">{{ test.title }}</td>\n\t\t            <td class=\"mdl-data-table__cell--non-numeric\">{{ test.description }}</td>\n\t\t            <td class=\"mdl-data-table__cell--non-numeric\">{{ test.date }}</td>\n\t\t            <td class=\"mdl-data-table__cell--non-numeric\">{{ test.grade }}</td>\n\t\t        </tr>\n\t\t    </tbody>\n\t\t</table>\n\t",
            styles: [
                "\t.mdl-grid .mdl-cell.mdl-cell--3-col {\n\t\t\tmargin: 0 auto;\n\t\t}\n\t\t.mdl-grid .mdl-cell.mdl-cell--3-col h3 {\n\t\t\tmargin-top: .2em;\n\t\t\tmargin-bottom: 0;\n\t\t}\n\t\t.results {\n\t\t\tmargin-top: 1em;\n\t\t}\n\t"]
        }), 
        __metadata('design:paramtypes', [router_1.RouteSegment, router_1.Router, data_service_1.DataService])
    ], StudentDetailComponent);
    return StudentDetailComponent;
}());
exports.StudentDetailComponent = StudentDetailComponent;
//# sourceMappingURL=student-detail.component.js.map