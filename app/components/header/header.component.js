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
var common_1 = require('@angular/common');
var HeaderComponent = (function () {
    function HeaderComponent(location, router) {
        var _this = this;
        this.location = location;
        this.router = router;
        this.router.changes.subscribe(function () {
            _this.getRoute();
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.setTitle();
    };
    HeaderComponent.prototype.getRoute = function () {
        this.setTitle();
    };
    HeaderComponent.prototype.setTitle = function () {
        if (location.hash === "#/home") {
            this.title = "Home";
        }
        else if (location.hash === "#/groups") {
            this.title = "Groups";
        }
        else if (location.hash === "#/announcements") {
            this.title = "Announcements";
        }
        else if (location.hash === "#/tests") {
            this.title = "Tests";
        }
        else if (location.hash === "#/students") {
            this.title = "Students";
        }
        else if (location.hash.indexOf("#/student/") > -1) {
            this.title = "Student " + location.hash.slice(-1);
        }
        else if (location.hash.indexOf("#/group/") > -1) {
            this.title = "Group " + location.hash.slice(-1);
        }
        else {
            this.title = "undefined";
        }
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: "\n\t\t<div class=\"mdl-layout__header-row\">\n\t\t\t<span class=\"mdl-layout-title\">{{ title }}</span>\n\t\t\t<div class=\"mdl-layout-spacer\"></div>\n\t\t\t<div class=\"mdl-textfield mdl-js-textfield mdl-textfield--expandable\">\n\t\t\t\t<label class=\"mdl-button mdl-js-button mdl-button--icon\" for=\"search\">\n\t\t\t\t\t<i class=\"material-icons\">search</i>\n\t\t\t\t</label>\n\t\t\t\t<div class=\"mdl-textfield__expandable-holder\">\n\t\t\t\t\t<input class=\"mdl-textfield__input\" type=\"text\" id=\"search\">\n\t\t\t\t\t<label class=\"mdl-textfield__label\" for=\"search\">Enter your query...</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [common_1.Location, router_1.Router])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map