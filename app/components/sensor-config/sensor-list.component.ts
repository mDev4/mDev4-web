import { Component, Input, Output, EventEmitter } from 'angular2/core';

import { Sensor } from '../core/sensors.service';

@Component({
	selector: 'sensor-list',
	template: `
		<table class="mdl-data-table mdl-js-data-table mdl-cell--12-col" *ngIf="sensors && sensors.length > 0">
		    <thead>
		        <tr>
		            <th class="mdl-data-table__cell--non-numeric">Name</th>
		            <th class="mdl-data-table__cell--non-numeric">Description</th>
		            <th class="mdl-data-table__cell--non-numeric">Type</th>
		            <th></th>
		        </tr>
		    </thead>
		    <tbody>
		        <tr *ngFor="#item of sensors">
		            <td class="mdl-data-table__cell--non-numeric">{{ item.name }}</td>
		            <td class="mdl-data-table__cell--non-numeric">{{ item.description }}</td>
		            <td class="mdl-data-table__cell--non-numeric">{{ item.type }}</td>
		            <td class="mdl-data-table__cell--non-numeric">
		                <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" (click)="add(item)">
		                    Add
		                </button>
		            </td>
		        </tr>
		    </tbody>
		</table>
	`
})

export class SensorListComponent {
	@Input() sensors: Sensor[];
	@Output() addItem: EventEmitter<Sensor> = new EventEmitter();

	add(sensor: Sensor) {
		this.addItem.emit(sensor);
	}
}