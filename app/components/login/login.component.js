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
var LoginComponent = (function () {
    function LoginComponent(dataService) {
        this.dataService = dataService;
        this.loginStatus = true;
        this.accountStatus = true;
        this.activeUser = new core_1.EventEmitter();
    }
    LoginComponent.prototype.login = function (form) {
        var _this = this;
        var body = JSON.stringify(form);
        this.dataService.userLogin(body)
            .subscribe(function (data) {
            if (data.error) {
                _this.loginStatus = false;
            }
            else {
                localStorage.setItem('userId', data.id);
                _this.activeUser.emit(data);
            }
        });
    };
    LoginComponent.prototype.newAccount = function (form) {
        var _this = this;
        var body = JSON.stringify(form);
        this.dataService.userLogin(body)
            .subscribe(function (data) {
            if (data.error) {
                _this.accountStatus = false;
            }
            else {
                localStorage.setItem('userId', data.id);
                _this.activeUser.emit(data);
            }
        });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], LoginComponent.prototype, "activeUser", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            template: "\n\t\t<dialog class=\"mdl-dialog\" open>\n            <h4 class=\"mdl-dialog__title\">Login Leerlingvolgsysteem</h4>\n\t\t\t<div class=\"mdl-dialog__content\">\n\t\t\t\t<div class=\"mdl-tabs mdl-js-tabs\">\n\t\t\t\t\t<div class=\"mdl-tabs__tab-bar\">\n\t\t\t\t\t\t<a href=\"#login-panel\" class=\"mdl-tabs__tab is-active\">Login</a>\n\t\t\t\t\t\t<a href=\"#register-panel\" class=\"mdl-tabs__tab\">Registreer</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mdl-tabs__panel is-active\" id=\"login-panel\">\n\t\t\t\t\t\t<form #loginForm=\"ngForm\" action=\"#\" \n\t\t\t\t\t\t\t(ngSubmit)=\"login(loginForm.value)\"\n\t\t\t\t\t\t\t(keyup.enter)=\"login(loginForm.value)\">\n\t\t\t\t\t\t\t<div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n\t\t\t\t\t\t\t\t<input #username class=\"form-control mdl-textfield__input\" \n\t\t\t\t\t\t\t\t\ttype=\"text\" id=\"username\"\n\t\t\t\t\t\t\t\t\tngControl=\"username\" required >\n\t\t\t\t\t\t\t\t<label class=\"mdl-textfield__label\" for=\"username\">Username</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n\t\t\t\t\t\t\t\t<input #password class=\"form-control mdl-textfield__input\" \n\t\t\t\t\t\t\t\t\ttype=\"text\" id=\"password\"\n\t\t\t\t\t\t\t\t\tngControl=\"password\" required >\n\t\t\t\t\t\t\t\t<label class=\"mdl-textfield__label\" for=\"password\">Password</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div [hidden]=\"loginStatus\" class=\"alert\">\n\t\t\t\t\t\t\t\tVul de juiste gegevens in\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mdl-dialog__actions\">\n\t\t\t\t                <button type=\"submit\" class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored\">Login</button>\n\t\t\t\t            </div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"mdl-tabs__panel\" id=\"register-panel\">\n\t\t\t\t\t\t<form #accountForm=\"ngForm\" action=\"#\" \n\t\t\t\t\t\t\t(keyup.enter)=\"newAccount(accountForm.value)\"\n\t\t\t\t\t\t\t(ngSubmit)=\"newAccount(accountForm.value)\">\n\t\t\t\t\t\t\t<div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n\t\t\t\t\t\t\t\t<input #username class=\"form-control mdl-textfield__input\" \n\t\t\t\t\t\t\t\t\ttype=\"text\" id=\"username\"\n\t\t\t\t\t\t\t\t\tngControl=\"username\" required >\n\t\t\t\t\t\t\t\t<label class=\"mdl-textfield__label\" for=\"username\">Username</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n\t\t\t\t\t\t\t\t<input #password class=\"form-control mdl-textfield__input\" \n\t\t\t\t\t\t\t\t\ttype=\"password\" id=\"password\"\n\t\t\t\t\t\t\t\t\tngControl=\"password\" required >\n\t\t\t\t\t\t\t\t<label class=\"mdl-textfield__label\" for=\"password\">Password</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n\t\t\t\t\t\t\t\t<input #clearance class=\"form-control mdl-textfield__input\" \n\t\t\t\t\t\t\t\t\ttype=\"text\" id=\"clearance\"\n\t\t\t\t\t\t\t\t\tngControl=\"clearance\" required >\n\t\t\t\t\t\t\t\t<label class=\"mdl-textfield__label\" for=\"clearance\">Clearance</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n\t\t\t\t\t\t\t\t<input #email class=\"form-control mdl-textfield__input\" \n\t\t\t\t\t\t\t\t\ttype=\"email\" id=\"email\"\n\t\t\t\t\t\t\t\t\tngControl=\"email\" required >\n\t\t\t\t\t\t\t\t<label class=\"mdl-textfield__label\" for=\"email\">Email</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n\t\t\t\t\t\t\t\t<input #phone class=\"form-control mdl-textfield__input\" \n\t\t\t\t\t\t\t\t\ttype=\"number\" id=\"phone\"\n\t\t\t\t\t\t\t\t\tngControl=\"phone\" required >\n\t\t\t\t\t\t\t\t<label class=\"mdl-textfield__label\" for=\"phone\">Phone</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n\t\t\t\t\t\t\t\t<input #first_name class=\"form-control mdl-textfield__input\" \n\t\t\t\t\t\t\t\t\ttype=\"text\" id=\"first_name\"\n\t\t\t\t\t\t\t\t\tngControl=\"first_name\" required >\n\t\t\t\t\t\t\t\t<label class=\"mdl-textfield__label\" for=\"first_name\">First Name</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n\t\t\t\t\t\t\t\t<input #last_name class=\"form-control mdl-textfield__input\" \n\t\t\t\t\t\t\t\t\ttype=\"text\" id=\"last_name\"\n\t\t\t\t\t\t\t\t\tngControl=\"last_name\" required >\n\t\t\t\t\t\t\t\t<label class=\"mdl-textfield__label\" for=\"last_name\">Last Name</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">\n\t\t\t\t\t\t\t\t<input #sex class=\"form-control mdl-textfield__input\" \n\t\t\t\t\t\t\t\t\ttype=\"text\" id=\"sex\"\n\t\t\t\t\t\t\t\t\tngControl=\"sex\" required >\n\t\t\t\t\t\t\t\t<label class=\"mdl-textfield__label\" for=\"sex\">Gender</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div [hidden]=\"accountStatus\" class=\"alert\">\n\t\t\t\t\t\t\t\tVul de juiste gegevens in\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mdl-dialog__actions\">\n\t\t\t\t                <button type=\"submit\" \n\t\t\t\t                \tclass=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored\">Nieuw Account</button>\n\t\t\t\t            </div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n            </div>\n        </dialog>\n\t",
            styles: [
                "\n        .mdl-dialog {\n            margin-top: 4em;\n            width: 40em;\n        }\n\n        .mdl-textfield__input {\n        \tpadding-left: 3px;\n        }\n\n        .mdl-textfield {\n        \tdisplay: block;\n        \tmargin: 0 auto;\n        \twidth: 30em;\n        }\n\n\t\t.alert {\n\t\t\tcolor: #de3226;\n\t\t}\n\n\t\t.mdl-tabs__tab-bar {\n\t\t\tborder-bottom: none;\n\t\t}\n\n\t\t.mdl-textfield.is-invalid .mdl-textfield__input {\n\t\t\tborder-bottom: 1px solid rgba(0,0,0,.12) !important;\n\t\t}\n\n\t\t.mdl-textfield.is-invalid.is-dirty .mdl-textfield__label::after {\n\t\t\tbackground-color: #d50000;\n\t\t}\n\n\t\t.mdl-textfield.is-invalid .mdl-textfield__label::after {\n\t\t\tbackground-color: transparent;\n\t\t}\n\n\t\t.mdl-textfield--floating-label.is-invalid .mdl-textfield__label {\n\t\t    color: rgba(0,0,0,.5);\n\t\t}\n\n    "
            ]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map