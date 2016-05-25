System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var UserProfileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            UserProfileComponent = (function () {
                function UserProfileComponent() {
                }
                UserProfileComponent = __decorate([
                    core_1.Component({
                        selector: 'user-profile',
                        template: "\n\t\t<header class=\"demo-drawer-header\">\n\t\t\t<img src=\"resources/images/user.jpg\" class=\"demo-avatar\">\n\t\t\t<div class=\"demo-avatar-dropdown\">\n\t\t\t\t<span>hello@example.com</span>\n\t\t\t\t<div class=\"mdl-layout-spacer\"></div>\n\t\t\t\t<button id=\"accbtn\" class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon\">\n\t\t\t\t\t<i class=\"material-icons\" role=\"presentation\">arrow_drop_down</i>\n\t\t\t\t\t<span class=\"visuallyhidden\">Accounts</span>\n\t\t\t\t</button>\n\t\t\t\t<ul class=\"mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect\" for=\"accbtn\">\n\t\t\t\t\t<li class=\"mdl-menu__item\">hello@example.com</li>\n\t\t\t\t\t<li class=\"mdl-menu__item\">info@example.com</li>\n\t\t\t\t\t<li class=\"mdl-menu__item\"><i class=\"material-icons\">add</i>Add another account...</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</header>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], UserProfileComponent);
                return UserProfileComponent;
            }());
            exports_1("UserProfileComponent", UserProfileComponent);
        }
    }
});
//# sourceMappingURL=user-profile.component.js.map