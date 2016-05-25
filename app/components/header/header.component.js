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
    var HeaderComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HeaderComponent = (function () {
                function HeaderComponent() {
                }
                HeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'header',
                        template: "\n\t\t<div class=\"mdl-layout__header-row\">\n\t\t\t<span class=\"mdl-layout-title\">Home</span>\n\t\t\t<div class=\"mdl-layout-spacer\"></div>\n\t\t\t<div class=\"mdl-textfield mdl-js-textfield mdl-textfield--expandable\">\n\t\t\t<label class=\"mdl-button mdl-js-button mdl-button--icon\" for=\"search\">\n\t\t\t\t<i class=\"material-icons\">search</i>\n\t\t\t</label>\n\t\t\t<div class=\"mdl-textfield__expandable-holder\">\n\t\t\t\t<input class=\"mdl-textfield__input\" type=\"text\" id=\"search\">\n\t\t\t\t<label class=\"mdl-textfield__label\" for=\"search\">Enter your query...</label>\n\t\t\t</div>\n\t\t\t</div>\n\t\t\t<button class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon\" id=\"hdrbtn\">\n\t\t\t<i class=\"material-icons\">more_vert</i>\n\t\t\t</button>\n\t\t\t<ul class=\"mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right\" for=\"hdrbtn\">\n\t\t\t<li class=\"mdl-menu__item\">About</li>\n\t\t\t<li class=\"mdl-menu__item\">Contact</li>\n\t\t\t<li class=\"mdl-menu__item\">Legal information</li>\n\t\t\t</ul>\n\t\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeaderComponent);
                return HeaderComponent;
            }());
            exports_1("HeaderComponent", HeaderComponent);
        }
    }
});
//# sourceMappingURL=header.component.js.map