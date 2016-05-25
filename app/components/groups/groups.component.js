System.register(['angular2/core', '../core/groups.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, groups_service_1;
    var GroupsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (groups_service_1_1) {
                groups_service_1 = groups_service_1_1;
            }],
        execute: function() {
            GroupsComponent = (function () {
                function GroupsComponent(groupService) {
                    this.groupService = groupService;
                    this.groups = [];
                }
                GroupsComponent.prototype.ngOnInit = function () {
                    this.refreshGroups();
                };
                GroupsComponent.prototype.refreshGroups = function () {
                    var _this = this;
                    this.groupService.getAllGroups()
                        .subscribe(function (data) {
                        _this.groups = data;
                    });
                };
                GroupsComponent.prototype.add = function (value) {
                    console.log(value);
                };
                GroupsComponent = __decorate([
                    core_1.Component({
                        selector: 'groups',
                        providers: [groups_service_1.GroupService],
                        template: "\n\t\t<table class=\"mdl-data-table mdl-js-data-table mdl-cell--12-col\" *ngIf=\"groups && groups.length > 0\">\n\t\t    <thead>\n\t\t        <tr>\n\t\t            <th class=\"mdl-data-table__cell--non-numeric\">Name</th>\n\t\t            <th class=\"mdl-data-table__cell--non-numeric\">Current Academic Year</th>\n\t\t            <th class=\"mdl-data-table__cell--non-numeric\">Current Year Of Study</th>\n\t\t            <th class=\"mdl-data-table__cell--non-numeric\">Start Year</th>\n\t\t            <th></th>\n\t\t        </tr>\n\t\t    </thead>\n\t\t    <tbody>\n\t\t        <tr *ngFor=\"let group of groups\">\n\t\t            <td class=\"mdl-data-table__cell--non-numeric\">{{ group.name }}</td>\n\t\t            <td class=\"mdl-data-table__cell--non-numeric\">{{ group.current_academic_year }}</td>\n\t\t            <td class=\"mdl-data-table__cell--non-numeric\">{{ group.current_year_of_study }}</td>\n\t\t            <td class=\"mdl-data-table__cell--non-numeric\">{{ group.start_year }}</td>\n\t\t            <td class=\"mdl-data-table__cell--non-numeric\">\n\t\t                <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored\" (click)=\"add(item)\">\n\t\t                    Add\n\t\t                </button>\n\t\t            </td>\n\t\t        </tr>\n\t\t    </tbody>\n\t\t</table>\n\t"
                    }), 
                    __metadata('design:paramtypes', [groups_service_1.GroupService])
                ], GroupsComponent);
                return GroupsComponent;
            }());
            exports_1("GroupsComponent", GroupsComponent);
        }
    }
});
//# sourceMappingURL=groups.component.js.map