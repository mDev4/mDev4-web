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
    var SensorListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SensorListComponent = (function () {
                function SensorListComponent() {
                    this.addItem = new core_1.EventEmitter();
                }
                SensorListComponent.prototype.add = function (sensor) {
                    this.addItem.emit(sensor);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], SensorListComponent.prototype, "sensors", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], SensorListComponent.prototype, "addItem", void 0);
                SensorListComponent = __decorate([
                    core_1.Component({
                        selector: 'sensor-list',
                        template: "\n\t\t<table class=\"mdl-data-table mdl-js-data-table mdl-cell--12-col\" *ngIf=\"sensors && sensors.length > 0\">\n\t\t    <thead>\n\t\t        <tr>\n\t\t            <th class=\"mdl-data-table__cell--non-numeric\">Name</th>\n\t\t            <th class=\"mdl-data-table__cell--non-numeric\">Description</th>\n\t\t            <th class=\"mdl-data-table__cell--non-numeric\">Type</th>\n\t\t            <th></th>\n\t\t        </tr>\n\t\t    </thead>\n\t\t    <tbody>\n\t\t        <tr *ngFor=\"#item of sensors\">\n\t\t            <td class=\"mdl-data-table__cell--non-numeric\">{{ item.name }}</td>\n\t\t            <td class=\"mdl-data-table__cell--non-numeric\">{{ item.description }}</td>\n\t\t            <td class=\"mdl-data-table__cell--non-numeric\">{{ item.type }}</td>\n\t\t            <td class=\"mdl-data-table__cell--non-numeric\">\n\t\t                <button class=\"mdl-button mdl-js-button mdl-button--raised mdl-button--colored\" (click)=\"add(item)\">\n\t\t                    Add\n\t\t                </button>\n\t\t            </td>\n\t\t        </tr>\n\t\t    </tbody>\n\t\t</table>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], SensorListComponent);
                return SensorListComponent;
            }());
            exports_1("SensorListComponent", SensorListComponent);
        }
    }
});
//# sourceMappingURL=sensor-list.component.js.map