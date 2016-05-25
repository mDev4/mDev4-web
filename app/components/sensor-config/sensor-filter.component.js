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
    var SensorFilterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SensorFilterComponent = (function () {
                function SensorFilterComponent() {
                    this.filterChanges = new core_1.EventEmitter();
                }
                SensorFilterComponent.prototype.ngOnInit = function () {
                    this.categories = [
                        'temperature',
                        'humidity',
                        'switch'
                    ];
                };
                SensorFilterComponent.prototype.categoryChanged = function (value) {
                    this.selectedCategory = value;
                    this.filterChanges.emit(this.selectedCategory);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], SensorFilterComponent.prototype, "filterChanges", void 0);
                SensorFilterComponent = __decorate([
                    core_1.Component({
                        selector: 'sensor-filter',
                        template: "\n\t\t<div class=\"mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col\">\n\t\t\t<div class=\"mdl-card__supporting-text\">\n\t\t\t\t<div>\n\t\t\t\t\t<label class=\"mdl-radio mdl-js-radio mdl-js-ripple-effect\" for=\"option-all\">\n\t\t\t\t\t\t<input type=\"radio\" id=\"option-all\" class=\"mdl-radio__button\" name=\"options\" value=\"\" checked (change)=\"categoryChanged(undefined)\">\n\t\t\t\t\t\t<span class=\"mdl-radio__label\">All</span>\n\t\t\t\t\t</label>\n\t\t\t\t\t<label class=\"mdl-radio mdl-js-radio mdl-js-ripple-effect\" *ngFor=\"#category of categories\">\n\t\t\t\t\t\t<input type=\"radio\" class=\"mdl-radio__button\" name=\"options\" value=\"{{category}}\" (change)=\"categoryChanged(category)\" />\n\t\t\t\t\t\t<span class=\"mdl-radio__label\">{{category}}</span>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], SensorFilterComponent);
                return SensorFilterComponent;
            }());
            exports_1("SensorFilterComponent", SensorFilterComponent);
        }
    }
});
//# sourceMappingURL=sensor-filter.component.js.map