System.register(['angular2/core', 'angular2/router', './components/header/header.component', './components/sidebar/sidebar.component', './components/homepage/homepage.component', './components/groups/groups.component', './components/sensor-config/sensor-config.component', './components/core/groups.service', './components/core/sensors.service'], function(exports_1, context_1) {
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
    var core_1, router_1, header_component_1, sidebar_component_1, homepage_component_1, groups_component_1, sensor_config_component_1, groups_service_1, sensors_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (sidebar_component_1_1) {
                sidebar_component_1 = sidebar_component_1_1;
            },
            function (homepage_component_1_1) {
                homepage_component_1 = homepage_component_1_1;
            },
            function (groups_component_1_1) {
                groups_component_1 = groups_component_1_1;
            },
            function (sensor_config_component_1_1) {
                sensor_config_component_1 = sensor_config_component_1_1;
            },
            function (groups_service_1_1) {
                groups_service_1 = groups_service_1_1;
            },
            function (sensors_service_1_1) {
                sensors_service_1 = sensors_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'lvs-app',
                        directives: [router_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent, sidebar_component_1.SidebarComponent],
                        providers: [sensors_service_1.SensorService, groups_service_1.GroupService],
                        template: "\n\t\t<div class=\"demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header\">\n\t\t\t<header class=\"demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600\"></header>\n\t\t\t<sidebar class=\"demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50\">\n\t\t\t</sidebar>\n\t\t\t<main class=\"mdl-layout__content mdl-color--grey-100\">\n\t\t\t\t<router-outlet></router-outlet>\n\t\t\t</main>\n\t\t</div>\n\t"
                    }),
                    router_1.RouteConfig([
                        { path: '/home', name: 'Homepage', component: homepage_component_1.HomepageComponent },
                        { path: '/groups', name: 'Groups', component: groups_component_1.GroupsComponent },
                        { path: '/configure', name: 'Configure', component: sensor_config_component_1.SensorConfigureComponent },
                        { path: '/**', redirectTo: ['Homepage'] }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map