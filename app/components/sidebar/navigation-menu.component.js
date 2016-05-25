System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var NavigationMenuComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            NavigationMenuComponent = (function () {
                function NavigationMenuComponent() {
                }
                NavigationMenuComponent = __decorate([
                    core_1.Component({
                        selector: 'navigation-menu',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n\t\t<nav class=\"demo-navigation mdl-navigation mdl-color--blue-grey-800\">\n\t\t\t<a [routerLink]=\"['/groups']\">Heroes</a>\n\t\t\t<a class=\"mdl-navigation__link\" [routerLink]=\"['/']\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">home</i>Home</a>\n\t\t\t<a class=\"mdl-navigation__link\" href=\"\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">inbox</i>Inbox</a>\n\t\t\t<a class=\"mdl-navigation__link\" href=\"\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">delete</i>Trash</a>\n\t\t\t<a class=\"mdl-navigation__link\" [routerLink]=\"['/groups']\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">group</i>Groups</a>\n\t\t\t<a class=\"mdl-navigation__link\" href=\"\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">forum</i>Forums</a>\n\t\t\t<a class=\"mdl-navigation__link\" href=\"\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">flag</i>Updates</a>\n\t\t\t<a class=\"mdl-navigation__link\" href=\"\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">local_offer</i>Promos</a>\n\t\t\t<a class=\"mdl-navigation__link\" href=\"\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">shopping_cart</i>Purchases</a>\n\t\t\t<a class=\"mdl-navigation__link\" href=\"\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">people</i>Social</a>\n\t\t\t<div class=\"mdl-layout-spacer\"></div>\n\t\t\t<a class=\"mdl-navigation__link\" href=\"\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">help_outline</i><span class=\"visuallyhidden\">Help</span></a>\n\t\t</nav>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], NavigationMenuComponent);
                return NavigationMenuComponent;
            }());
            exports_1("NavigationMenuComponent", NavigationMenuComponent);
        }
    }
});
//# sourceMappingURL=navigation-menu.component.js.map