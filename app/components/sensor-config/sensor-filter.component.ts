import { Component, OnInit, Output, EventEmitter } from 'angular2/core';

@Component({
	selector: 'sensor-filter',
	template: `
		<div class="mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col">
			<div class="mdl-card__supporting-text">
				<div>
					<label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="option-all">
						<input type="radio" id="option-all" class="mdl-radio__button" name="options" value="" checked (change)="categoryChanged(undefined)">
						<span class="mdl-radio__label">All</span>
					</label>
					<label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" *ngFor="#category of categories">
						<input type="radio" class="mdl-radio__button" name="options" value="{{category}}" (change)="categoryChanged(category)" />
						<span class="mdl-radio__label">{{category}}</span>
					</label>
				</div>
			</div>
		</div>
	`
})

export class SensorFilterComponent {
	private categories: string[];
	private selectedCategory: string;

	@Output() filterChanges: EventEmitter<string> = new EventEmitter();

	ngOnInit() {
		this.categories = [
			'temperature',
			'humidity',
			'switch'
		];
	}

	categoryChanged(value) {
		this.selectedCategory = value;
		this.filterChanges.emit(this.selectedCategory);
	}
}