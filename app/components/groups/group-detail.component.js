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
var GroupDetailComponent = (function () {
    function GroupDetailComponent(curr, router, dataService) {
        this.curr = curr;
        this.router = router;
        this.dataService = dataService;
    }
    GroupDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedGroup = this.curr.getParam('id');
        this.dataService.getDetailsGroup(this.selectedGroup)
            .subscribe(function (data) {
            _this.group = data
                .filter(function (item) {
                if (item.name !== undefined)
                    return item;
            });
            _this.students = data
                .filter(function (item) {
                if (item.student_code !== undefined)
                    return item;
            });
        });
    };
    GroupDetailComponent.prototype.goBack = function () {
        this.router.navigate(['/groups']);
    };
    GroupDetailComponent.prototype.onSelect = function (student) {
        this.router.navigate(['/student', student.id]);
    };
    GroupDetailComponent = __decorate([
        core_1.Component({
            selector: 'group-detail',
            template: "\n\t\t<div class=\"mdl-grid\" *ngIf=\"group && group.length > 0\">\n  \t\t\t<div class=\"mdl-cell mdl-cell--1-col\">\n\t\t\t\t<button class=\"mdl-button mdl-js-button mdl-button--raised\" (click)=\"goBack()\">\n\t\t\t\t\tBack\n\t\t\t\t</button>\n  \t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<table class=\"mdl-data-table mdl-js-data-table mdl-cell--12-col\" *ngIf=\"group && group.length > 0\">\n\t\t    <thead>\n\t\t        <tr>\n\t\t            <th class=\"mdl-data-table__cell--non-numeric\">Name</th>\n\t\t            <th class=\"mdl-data-table__cell--non-numeric\">Current Academic Year</th>\n\t\t            <th class=\"mdl-data-table__cell--non-numeric\">Current Year Of Study</th>\n\t\t            <th class=\"mdl-data-table__cell--non-numeric\">Start Year</th>\n\t\t        </tr>\n\t\t    </thead>\n\t\t    <tbody>\n\t\t        <tr *ngFor=\"let group of group\"\n\t\t        \t(click)=\"onSelect(group)\">\n\t\t            <td class=\"mdl-data-table__cell--non-numeric\">{{ group.name }}</td>\n\t\t            <td class=\"mdl-data-table__cell--non-numeric\">{{ group.current_academic_year }}</td>\n\t\t            <td class=\"mdl-data-table__cell--non-numeric\">{{ group.current_year_of_study }}</td>\n\t\t            <td class=\"mdl-data-table__cell--non-numeric\">{{ group.start_year }}</td>\n\t\t        </tr>\n\t\t    </tbody>\n\t\t</table>\n\n\t\t<div class=\"mdl-grid\" *ngIf=\"students && students.length > 0\">\n  \t\t\t<div class=\"mdl-cell mdl-cell--3-col\">\n\t\t\t\t<h4>Studenten</h4>\n  \t\t\t</div>\n\t\t</div>\n\n\t\t<table class=\"mdl-data-table mdl-js-data-table mdl-cell--12-col students\" *ngIf=\"students && students.length > 0\">\n\t\t    <thead>\n\t\t        <tr>\n\t\t            <th class=\"mdl-data-table__cell--non-numeric\">Student Code</th>\n\t\t            <th class=\"mdl-data-table__cell--non-numeric\">Particulars</th>\n\t\t            <th class=\"mdl-data-table__cell--non-numeric\">Birth Date</th>\n\t\t            <th class=\"mdl-data-table__cell--non-numeric\">Middle Name</th>\n\t\t            <th class=\"mdl-data-table__cell--non-numeric\">Last Name</th>\n\t\t            <th class=\"mdl-data-table__cell--non-numeric\">Sex</th>\n\t\t        </tr>\n\t\t    </thead>\n\t\t    <tbody>\n\t\t        <tr *ngFor=\"let student of students\"\n\t\t        \t(click)=\"onSelect(student)\">\n\t\t            <td class=\"mdl-data-table__cell--non-numeric\">{{ student.student_code }}</td>\n\t\t            <td class=\"mdl-data-table__cell--non-numeric\">{{ student.particulars }}</td>\n\t\t            <td class=\"mdl-data-table__cell--non-numeric\">{{ student.birth_date }}</td>\n\t\t            <td class=\"mdl-data-table__cell--non-numeric\">{{ student.middle_name }}</td>\n\t\t            <td class=\"mdl-data-table__cell--non-numeric\">{{ student.last_name }}</td>\n\t\t            <td class=\"mdl-data-table__cell--non-numeric\">{{ student.sex }}</td>\n\t\t        </tr>\n\t\t    </tbody>\n\t\t</table>\n\t",
            styles: [
                "\t.mdl-grid .mdl-cell.mdl-cell--3-col {\n\t\t\tmargin: 0 auto;\n\t\t}\n\t\t.mdl-grid .mdl-cell.mdl-cell--3-col h3 {\n\t\t\tmargin-top: .2em;\n\t\t\tmargin-bottom: 0;\n\t\t}\n\t\t.students {\n\t\t\tmargin-top: 1em;\n\t\t}\n\t"]
        }), 
        __metadata('design:paramtypes', [router_1.RouteSegment, router_1.Router, data_service_1.DataService])
    ], GroupDetailComponent);
    return GroupDetailComponent;
}());
exports.GroupDetailComponent = GroupDetailComponent;
//# sourceMappingURL=group-detail.component.js.map