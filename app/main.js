"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var data_service_1 = require('./services/data.service');
var shared_service_1 = require('./services/shared.service');
var app_component_1 = require('./app.component');
core_1.enableProdMode();
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    data_service_1.DataService,
    shared_service_1.SharedService,
    http_1.HTTP_PROVIDERS,
    router_1.ROUTER_PROVIDERS,
    core_1.provide(common_1.LocationStrategy, {
        useClass: common_1.HashLocationStrategy
    })
]);
//# sourceMappingURL=main.js.map