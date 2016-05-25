import { Component, OnInit } from 'angular2/core';

import { Sensor, SensorService } from '../core/sensors.service';
import { SensorListComponent } from './sensor-list.component';
import { SensorFilterComponent } from './sensor-filter.component';
import { FilterSensor } from './filter-sensor.pipe';
import { ModalComponent } from '../modal/modal.component';

@Component({
	selector: 'configure',
	directives: [ SensorListComponent, SensorFilterComponent, ModalComponent ],
	pipes: [ FilterSensor ],
	template: `
		<div class="app-page-content mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col">

		    <h1 class="mdl-typography--display-2">
		        List of sensors
		    </h1>
		    <p class="mdl-typography--title">
		        Scan for the list of available sensors in your environment and configure them for your dashboard.
		    </p>
		    
		    <div class="mdl-cell--12-col">
		        <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent mdl-js-ripple-effect" (click)="refreshSensors()">
		            Scan for sensors
		        </button>
		    </div>
		    
		    <div *ngIf="sensors && sensors.length > 0">
		        <hr />

		        <sensor-filter (filterChange)="refreshSensors($event)" #filterCmp></sensor-filter>
		        
		        <hr />
		        
		        <sensor-list [sensors]="sensors | filterSensor: filterCmp.selectedCategory" (addItem)="selectSensor($event, modal)"></sensor-list>
		    </div>    
		</div>

		<div class="app-page-content mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col">

		    <h1 class="mdl-typography--display-2">
		        Configured sensors
		    </h1>    
		    
		     <div *ngIf="configuredSensors && configuredSensors.length > 0">        
		        <sensor-list [sensors]="configuredSensors"></sensor-list>    
		    </div>
		    <div *ngIf="!configuredSensors || configuredSensors.length === 0">
		        <p><i>No sensors configured yet</i></p>
		    </div>
		</div>


		<modal #modal  (confirm)="addToDashboard(sensorModel)">
		    <span title>Configure Sensor</span>
		    <div content class="mdl-card__supporting-text">
		        <form action="#" *ngIf="sensorModel">
		            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" [ngClass]="{ 'is-dirty': sensorModel.name}"> 
		                <input class="mdl-textfield__input" type="text" id="username" [(ngModel)]="sensorModel.name" />
		                <label class="mdl-textfield__label" for="username">Username</label>
		            </div>
		            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" [ngClass]="{ 'is-dirty': sensorModel.description}">
		                <textarea class="mdl-textfield__input" [(ngModel)]="sensorModel.description"></textarea>
		                <label class="mdl-textfield__label" for="userpass">Description</label>
		            </div>
		        </form>
		    </div>    
		</modal>
	`
})

export class SensorConfigureComponent {
	private sensors: Sensor[] = [];
    private configuredSensors: Sensor[];
    private sensorModel: Sensor;

	constructor(private sensorService: SensorService) {

	}

	ngOnInit() {
        this.refreshSensors();
        this.configuredSensors = this.sensorService.getDashboardSensors();
    }

	refreshSensors() {
		this.sensorService.discoverSensors()
			.subscribe(data => {
				this.sensors = data;
			});
	}

	addToDashboard(sensor: Sensor) {
        this.sensorService.addToDashboard(sensor);
    }

    selectSensor(sensor: Sensor, modal) {
		this.sensorModel = {
			name: sensor.name,
			description: sensor.description,
			type: sensor.type
		};
		modal.open(); 
    }
}