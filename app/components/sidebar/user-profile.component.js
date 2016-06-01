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
var shared_service_1 = require('../../services/shared.service');
var data_service_1 = require('../../services/data.service');
var UserProfileComponent = (function () {
    function UserProfileComponent(dataService, sharedService) {
        this.dataService = dataService;
        this.sharedService = sharedService;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userId = localStorage.getItem('userId');
        if (this.userId) {
            this.dataService.getUser(this.userId)
                .subscribe(function (user) {
                _this.sharedService.setCurrentUser(user);
                _this.currentUser = _this.sharedService.getCurrentUser();
            });
        }
    };
    UserProfileComponent = __decorate([
        core_1.Component({
            selector: 'user-profile',
            template: "\n\t\t<header class=\"demo-drawer-header\">\n\t\t\t<div *ngIf=\"currentUser\">\n\t\t\t\t<h4>User details</h4>\n\t\t\t\t<p>Voornaam: {{ currentUser.first_name }}</p>\n\t\t\t\t<p>Achternaa: {{ currentUser.last_name }}</p>\n\t\t\t\t<p>Email: {{ currentUser.email }}</p>\n\t\t\t\t<div class=\"mdl-layout-spacer\"></div>\n\t\t\t</div>\n\t\t</header>\n\t",
            styles: [
                "\t\n\t\t.demo-drawer-header h4 {\n\t\t\tmargin-bottom: 10px;\n\t\t\ttext-align: center;\n\t\t}\n\t\t.demo-drawer-header p {\n\t\t\tmargin-bottom: 0;\n\t\t\ttext-align: center;\n\t\t}\n\t"
            ]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, shared_service_1.SharedService])
    ], UserProfileComponent);
    return UserProfileComponent;
}());
exports.UserProfileComponent = UserProfileComponent;
//# sourceMappingURL=user-profile.component.js.map