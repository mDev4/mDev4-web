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
var data_service_1 = require('../../services/data.service');
var AnnouncementsComponent = (function () {
    function AnnouncementsComponent(dataService) {
        this.dataService = dataService;
    }
    AnnouncementsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getAllAnnouncements()
            .subscribe(function (data) {
            _this.announcements = data;
        });
    };
    AnnouncementsComponent = __decorate([
        core_1.Component({
            selector: 'announcements',
            template: "\n\t\t<div class=\"mdl-grid\">\n\t\t\t<div class=\"mdl-cell mdl-cell--6-col\" *ngFor=\"let announcement of announcements\">\n\t\t\t\t<div class=\"demo-card-wide mdl-card mdl-shadow--2dp\">\n\t\t\t\t\t<div class=\"mdl-card__title\">\n\t\t\t\t\t\t<h2 class=\"mdl-card__title-text\">{{ announcement.title }}</h2>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mdl-card__supporting-text\">\n\t\t\t\t\t\t{{ announcement.message }}\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mdl-card__actions mdl-card--border\">\n\t\t\t\t\t\t<p>Announcement type: {{ announcement.type }}</p>\n\t\t\t\t\t\t<p>Gepost door: {{ announcement.first_name }} {{ announcement.last_name }}</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t",
            styles: [
                "\n\t\t.demo-card-wide.mdl-card.mdl-shadow--2dp {\n\t\t\twidth: 100%;\n\t\t\tmin-height: 14.1em;\n\t\t}\n\t"
            ]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], AnnouncementsComponent);
    return AnnouncementsComponent;
}());
exports.AnnouncementsComponent = AnnouncementsComponent;
//# sourceMappingURL=announcements.component.js.map