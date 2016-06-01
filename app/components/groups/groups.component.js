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
var GroupsComponent = (function () {
    function GroupsComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.groups = [];
    }
    GroupsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getAllGroups()
            .subscribe(function (data) {
            _this.groups = data;
        });
    };
    GroupsComponent.prototype.onSelect = function (group) {
        this.router.navigate(['/group', group.id]);
    };
    GroupsComponent = __decorate([
        core_1.Component({
            selector: 'groups',
            template: "\n\t\t<table class=\"mdl-data-table mdl-js-data-table mdl-cell--12-col\" *ngIf=\"groups && groups.length > 0\">\n\t\t    <thead>\n\t\t        <tr>\n\t\t            <th class=\"mdl-data-table__cell--non-numeric\">Name</th>\n\t\t            <th class=\"mdl-data-table__cell--non-numeric\">Current Academic Year</th>\n\t\t            <th class=\"mdl-data-table__cell--non-numeric\">Current Year Of Study</th>\n\t\t            <th class=\"mdl-data-table__cell--non-numeric\">Start Year</th>\n\t\t        </tr>\n\t\t    </thead>\n\t\t    <tbody>\n\t\t        <tr *ngFor=\"let group of groups\"\n\t\t        \t(click)=\"onSelect(group)\">\n\t\t            <td class=\"mdl-data-table__cell--non-numeric\">{{ group.name }}</td>\n\t\t            <td class=\"mdl-data-table__cell--non-numeric\">{{ group.current_academic_year }}</td>\n\t\t            <td class=\"mdl-data-table__cell--non-numeric\">{{ group.current_year_of_study }}</td>\n\t\t            <td class=\"mdl-data-table__cell--non-numeric\">{{ group.start_year }}</td>\n\t\t        </tr>\n\t\t    </tbody>\n\t\t</table>\n\t"
        }), 
        __metadata('design:paramtypes', [router_1.Router, data_service_1.DataService])
    ], GroupsComponent);
    return GroupsComponent;
}());
exports.GroupsComponent = GroupsComponent;
//# sourceMappingURL=groups.component.js.map