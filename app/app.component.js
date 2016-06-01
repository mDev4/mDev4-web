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
var material_design_1 = require('./directives/material-design');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var shared_service_1 = require('./services/shared.service');
var login_component_1 = require('./components/login/login.component');
var header_component_1 = require('./components/header/header.component');
var sidebar_component_1 = require('./components/sidebar/sidebar.component');
var homepage_component_1 = require('./components/homepage/homepage.component');
var groups_component_1 = require('./components/groups/groups.component');
var group_detail_component_1 = require('./components/groups/group-detail.component');
var announcements_component_1 = require('./components/announcements/announcements.component');
var tests_component_1 = require('./components/tests/tests.component');
var students_component_1 = require('./components/students/students.component');
var student_detail_component_1 = require('./components/students/student-detail.component');
var AppComponent = (function () {
    function AppComponent(sharedService, location) {
        this.sharedService = sharedService;
        this.location = location;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.userId = localStorage.getItem('userId');
        if (!this.userId) {
            this.location.replaceState('/');
        }
    };
    AppComponent.prototype.userLogin = function (user) {
        this.sharedService.setCurrentUser(user);
        this.currentUser = this.sharedService.getCurrentUser();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'lvs-app',
            directives: [router_1.ROUTER_DIRECTIVES, material_design_1.MDL, header_component_1.HeaderComponent, sidebar_component_1.SidebarComponent, login_component_1.LoginComponent],
            template: "\n        <div class=\"demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header\" *ngIf=\"userId || currentUser\">\n        \t<app-header class=\"demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600\"></app-header>\n    \t\t<sidebar mdl class=\"demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50\"></sidebar>\n        \t<main class=\"mdl-layout__content mdl-color--grey-100\">\n    \t\t\t<router-outlet></router-outlet>\n        \t</main>\n        </div>\n        <login mdl (activeUser)=\"userLogin($event)\" *ngIf=\"!userId || currentUser\"></login>\n\t",
            styles: [
                "\n        .mdl-dialog {\n            margin-top: 10em;\n            width: 40em;\n        }\n    "
            ]
        }),
        router_1.Routes([
            { path: '/home', component: homepage_component_1.HomepageComponent },
            { path: '/login', component: login_component_1.LoginComponent },
            { path: '/groups', component: groups_component_1.GroupsComponent },
            { path: '/group/:id', component: group_detail_component_1.GroupDetailComponent },
            { path: '/students', component: students_component_1.StudentsComponent },
            { path: '/student/:id', component: student_detail_component_1.StudentDetailComponent },
            { path: '/announcements', component: announcements_component_1.AnnouncementsComponent },
            { path: '/tests', component: tests_component_1.TestsComponent }
        ]), 
        __metadata('design:paramtypes', [shared_service_1.SharedService, common_1.Location])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map