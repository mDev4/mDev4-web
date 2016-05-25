import { Component, OnInit } from 'angular2/core';

import { Group, GroupService } from '../core/groups.service';

@Component({
	selector: 'groups',
	providers: [GroupService],
	template: `
		<table class="mdl-data-table mdl-js-data-table mdl-cell--12-col" *ngIf="groups && groups.length > 0">
		    <thead>
		        <tr>
		            <th class="mdl-data-table__cell--non-numeric">Name</th>
		            <th class="mdl-data-table__cell--non-numeric">Current Academic Year</th>
		            <th class="mdl-data-table__cell--non-numeric">Current Year Of Study</th>
		            <th class="mdl-data-table__cell--non-numeric">Start Year</th>
		            <th></th>
		        </tr>
		    </thead>
		    <tbody>
		        <tr *ngFor="let group of groups">
		            <td class="mdl-data-table__cell--non-numeric">{{ group.name }}</td>
		            <td class="mdl-data-table__cell--non-numeric">{{ group.current_academic_year }}</td>
		            <td class="mdl-data-table__cell--non-numeric">{{ group.current_year_of_study }}</td>
		            <td class="mdl-data-table__cell--non-numeric">{{ group.start_year }}</td>
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

export class GroupsComponent implements OnInit {
	private groups: Group[] = [];

	constructor(private groupService: GroupService) {

	}

	ngOnInit() {
		this.refreshGroups();
	}

	refreshGroups() {
		this.groupService.getAllGroups()
			.subscribe(data => {
				this.groups = data;
			});
	}

	add(value) {
		console.log(value);
	}
}