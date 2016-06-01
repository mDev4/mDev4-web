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
var http_1 = require('@angular/http');
var headers_1 = require('../common/headers');
require('rxjs/Rx');
var DataService = (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.userLogin = function (body) {
        return this.http
            .post('http://lvs.azurewebsites.net/users/login', body, { headers: headers_1.contentHeaders })
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.creacteUser = function (body) {
        return this.http
            .post('http://lvs.azurewebsites.net/users/create', body, { headers: headers_1.contentHeaders })
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.getUser = function (userId) {
        return this.http
            .get('http://lvs.azurewebsites.net/users/' + userId)
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.getAllGroups = function () {
        return this.http
            .get('http://lvs.azurewebsites.net/groups')
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.getStudent = function (studentId) {
        return this.http
            .get('http://lvs.azurewebsites.net/students/' + studentId)
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.getAllStudents = function () {
        return this.http
            .get('http://lvs.azurewebsites.net/students')
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.getAllTests = function () {
        return this.http
            .get('http://lvs.azurewebsites.net/tests')
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.getAllAnnouncements = function () {
        return this.http
            .get('http://lvs.azurewebsites.net/announcements')
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.getDetailsGroup = function (groupId) {
        return this.http
            .get('http://lvs.azurewebsites.net/groups/' + groupId)
            .map(function (res) { return res.json(); });
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map