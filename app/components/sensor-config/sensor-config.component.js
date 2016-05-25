System.register(['angular2/core', '../core/sensors.service', './sensor-list.component', './sensor-filter.component', './filter-sensor.pipe', '../modal/modal.component'], function(exports_1, context_1) {
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
    var core_1, sensors_service_1, sensor_list_component_1, sensor_filter_component_1, filter_sensor_pipe_1, modal_component_1;
    var SensorConfigureComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sensors_service_1_1) {
                sensors_service_1 = sensors_service_1_1;
            },
            function (sensor_list_component_1_1) {
                sensor_list_component_1 = sensor_list_component_1_1;
            },
            function (sensor_filter_component_1_1) {
                sensor_filter_component_1 = sensor_filter_component_1_1;
            },
            function (filter_sensor_pipe_1_1) {
                filter_sensor_pipe_1 = filter_sensor_pipe_1_1;
            },
            function (modal_component_1_1) {
                modal_component_1 = modal_component_1_1;
            }],
        execute: function() {
            SensorConfigureComponent = (function () {
                function SensorConfigureComponent(sensorService) {
                    this.sensorService = sensorService;
                    this.sensors = [];
                }
                SensorConfigureComponent.prototype.ngOnInit = function () {
                    this.refreshSensors();
                    this.configuredSensors = this.sensorService.getDashboardSensors();
                };
                SensorConfigureComponent.prototype.refreshSensors = function () {
                    var _this = this;
                    this.sensorService.discoverSensors()
                        .subscribe(function (data) {
                        _this.sensors = data;
                    });
                };
                SensorConfigureComponent.prototype.addToDashboard = function (sensor) {
                    this.sensorService.addToDashboard(sensor);
                };
                SensorConfigureComponent.prototype.selectSensor = function (sensor, modal) {
                    this.sensorModel = {
                        name: sensor.name,
                        description: sensor.description,
                        type: sensor.type
                    };
                    modal.open();
                };
                SensorConfigureComponent = __decorate([
                    core_1.Component({
                        selector: 'configure',
                        directives: [sensor_list_component_1.SensorListComponent, sensor_filter_component_1.SensorFilterComponent, modal_component_1.ModalComponent],
                        pipes: [filter_sensor_pipe_1.FilterSensor],
                        template: "\n\t\t<div class=\"app-page-content mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col\">\n\n\t\t    <h1 class=\"mdl-typography--display-2\">\n\t\t        List of sensors\n\t\t    </h1>\n\t\t    <p class=\"mdl-typography--title\">\n\t\t        Scan for the list of available sensors in your environment and configure them for your dashboard.\n\t\t    </p>\n\t\t    \n\t\t    <div class=\"mdl-cell--12-col\">\n\t\t        <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--accent mdl-js-ripple-effect\" (click)=\"refreshSensors()\">\n\t\t            Scan for sensors\n\t\t        </button>\n\t\t    </div>\n\t\t    \n\t\t    <div *ngIf=\"sensors && sensors.length > 0\">\n\t\t        <hr />\n\n\t\t        <sensor-filter (filterChange)=\"refreshSensors($event)\" #filterCmp></sensor-filter>\n\t\t        \n\t\t        <hr />\n\t\t        \n\t\t        <sensor-list [sensors]=\"sensors | filterSensor: filterCmp.selectedCategory\" (addItem)=\"selectSensor($event, modal)\"></sensor-list>\n\t\t    </div>    \n\t\t</div>\n\n\t\t<div class=\"app-page-content mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col\">\n\n\t\t    <h1 class=\"mdl-typography--display-2\">\n\t\t        Configured sensors\n\t\t    </h1>    \n\t\t    \n\t\t     <div *ngIf=\"configuredSensors && configuredSensors.length > 0\">        \n\t\t        <sensor-list [sensors]=\"configuredSensors\"></sensor-list>    \n\t\t    </div>\n\t\t    <div *ngIf=\"!configuredSensors || configuredSensors.length === 0\">\n\t\t        <p><i>No sensors configured yet</i></p>\n\t\t    </div>\n\t\t</div>\n\n\n\t\t<modal #modal  (confirm)=\"addToDashboard(sensorModel)\">\n\t\t    <span title>Configure Sensor</span>\n\t\t    <div content class=\"mdl-card__supporting-text\">\n\t\t        <form action=\"#\" *ngIf=\"sensorModel\">\n\t\t            <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\" [ngClass]=\"{ 'is-dirty': sensorModel.name}\"> \n\t\t                <input class=\"mdl-textfield__input\" type=\"text\" id=\"username\" [(ngModel)]=\"sensorModel.name\" />\n\t\t                <label class=\"mdl-textfield__label\" for=\"username\">Username</label>\n\t\t            </div>\n\t\t            <div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\" [ngClass]=\"{ 'is-dirty': sensorModel.description}\">\n\t\t                <textarea class=\"mdl-textfield__input\" [(ngModel)]=\"sensorModel.description\"></textarea>\n\t\t                <label class=\"mdl-textfield__label\" for=\"userpass\">Description</label>\n\t\t            </div>\n\t\t        </form>\n\t\t    </div>    \n\t\t</modal>\n\t"
                    }), 
                    __metadata('design:paramtypes', [sensors_service_1.SensorService])
                ], SensorConfigureComponent);
                return SensorConfigureComponent;
            }());
            exports_1("SensorConfigureComponent", SensorConfigureComponent);
        }
    }
});
//# sourceMappingURL=sensor-config.component.js.map