import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Group, GroupService } from '../core/data.service';

@Component({
	selector: 'groups',
	providers: [ GroupService ],
	template: `
		<table class="mdl-data-table mdl-js-data-table mdl-cell--12-col" *ngIf="groups && groups.length > 0">
		    <thead>
		        <tr>
		            <th class="mdl-data-table__cell--non-numeric">Name</th>
		            <th class="mdl-data-table__cell--non-numeric">Current Academic Year</th>
		            <th class="mdl-data-table__cell--non-numeric">Current Year Of Study</th>
		            <th class="mdl-data-table__cell--non-numeric">Start Year</th>
		        </tr>
		    </thead>
		    <tbody>
		        <tr *ngFor="let group of groups"
		        	(click)="onSelect(group)">
		            <td class="mdl-data-table__cell--non-numeric">{{ group.name }}</td>
		            <td class="mdl-data-table__cell--non-numeric">{{ group.current_academic_year }}</td>
		            <td class="mdl-data-table__cell--non-numeric">{{ group.current_year_of_study }}</td>
		            <td class="mdl-data-table__cell--non-numeric">{{ group.start_year }}</td>
		        </tr>
		    </tbody>
		</table>
	`
})

export class GroupsComponent implements OnInit {
	private groups: Group[] = [];

	constructor(
		private router: Router,
		private groupService: GroupService) { }

	ngOnInit() {
		this.groupService.getAllGroups()
			.subscribe(data => {
				this.groups = data;
			});
	}

	onSelect(group: Group) {
		this.router.navigate(['/group', group.id]);
	}
}