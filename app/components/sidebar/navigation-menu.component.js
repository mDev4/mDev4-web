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
var router_1 = require('@angular/router');
var NavigationMenuComponent = (function () {
    function NavigationMenuComponent(sharedService) {
        this.sharedService = sharedService;
    }
    NavigationMenuComponent.prototype.logout = function () {
        localStorage.removeItem('userId');
        this.sharedService.setCurrentUser(null);
    };
    NavigationMenuComponent = __decorate([
        core_1.Component({
            selector: 'navigation-menu',
            directives: [router_1.ROUTER_DIRECTIVES],
            template: "\n\t\t<nav class=\"demo-navigation mdl-navigation\">            \n\t\t\t<a class=\"mdl-navigation__link\" [routerLink]=\"['/home']\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">home</i>Home</a>\n\t\t\t<a class=\"mdl-navigation__link\" [routerLink]=\"['/tests']\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">list</i>Results</a>\n\t\t\t<a class=\"mdl-navigation__link\" [routerLink]=\"['/groups']\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">group</i>Groups</a>\n\t\t\t<a class=\"mdl-navigation__link\" [routerLink]=\"['/students']\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">accessibility</i>Students</a>\n\t\t\t<a class=\"mdl-navigation__link\" [routerLink]=\"['/announcements']\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">flag</i>Announcements</a>\n\t\t\t<a class=\"mdl-navigation__link\" href=\"\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">account_box</i>My Account</a>\n\t\t\t<a class=\"mdl-navigation__link\" href=\"\" (click)=\"logout()\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">exit_to_app</i>Logout</a>\n\t\t</nav>\n\t",
            styles: [
                "\n\t\t.mdl-navigation__link.router-link-active {\n\t\t\tbackground-color: #00BCD4;\n    \t\tcolor: #37474F;\n\t\t}\n\t"
            ]
        }), 
        __metadata('design:paramtypes', [shared_service_1.SharedService])
    ], NavigationMenuComponent);
    return NavigationMenuComponent;
}());
exports.NavigationMenuComponent = NavigationMenuComponent;
//# sourceMappingURL=navigation-menu.component.js.map