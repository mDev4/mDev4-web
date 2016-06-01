import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../../services/data.service';
import { Test } from '../../models/models';

@Component({
	selector: 'tests',
	template: `
		<table class="mdl-data-table mdl-js-data-table mdl-cell--12-col" *ngIf="tests && tests.length > 0">
		    <thead>
		        <tr>
		            <th class="mdl-data-table__cell--non-numeric">Title</th>
		            <th class="mdl-data-table__cell--non-numeric">Description</th>
		            <th class="mdl-data-table__cell--non-numeric">Date</th>
		        </tr>
		    </thead>
		    <tbody>
		        <tr *ngFor="let test of tests">
		            <td class="mdl-data-table__cell--non-numeric">{{ test.title }}</td>
		            <td class="mdl-data-table__cell--non-numeric">{{ test.description }}</td>
		            <td class="mdl-data-table__cell--non-numeric">{{ test.date }}</td>
		        </tr>
		    </tbody>
		</table>
	`
})

export class TestsComponent implements OnInit {
	private tests: Test[] = [];

	constructor(
		private router: Router,
		private dataService: DataService) {}

	ngOnInit() {
		this.dataService.getAllTests()
			.subscribe(data => {
				this.tests = data;
			});
	}

	onSelect(test: Test) {
		this.router.navigate(['/test', test.id]);
	}
}