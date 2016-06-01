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
var TestsComponent = (function () {
    function TestsComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.tests = [];
    }
    TestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getAllTests()
            .subscribe(function (data) {
            _this.tests = data;
        });
    };
    TestsComponent.prototype.onSelect = function (test) {
        this.router.navigate(['/test', test.id]);
    };
    TestsComponent = __decorate([
        core_1.Component({
            selector: 'tests',
            template: "\n\t\t<table class=\"mdl-data-table mdl-js-data-table mdl-cell--12-col\" *ngIf=\"tests && tests.length > 0\">\n\t\t    <thead>\n\t\t        <tr>\n\t\t            <th class=\"mdl-data-table__cell--non-numeric\">Title</th>\n\t\t            <th class=\"mdl-data-table__cell--non-numeric\">Description</th>\n\t\t            <th class=\"mdl-data-table__cell--non-numeric\">Date</th>\n\t\t        </tr>\n\t\t    </thead>\n\t\t    <tbody>\n\t\t        <tr *ngFor=\"let test of tests\">\n\t\t            <td class=\"mdl-data-table__cell--non-numeric\">{{ test.title }}</td>\n\t\t            <td class=\"mdl-data-table__cell--non-numeric\">{{ test.description }}</td>\n\t\t            <td class=\"mdl-data-table__cell--non-numeric\">{{ test.date }}</td>\n\t\t        </tr>\n\t\t    </tbody>\n\t\t</table>\n\t"
        }), 
        __metadata('design:paramtypes', [router_1.Router, data_service_1.DataService])
    ], TestsComponent);
    return TestsComponent;
}());
exports.TestsComponent = TestsComponent;
//# sourceMappingURL=tests.component.js.map