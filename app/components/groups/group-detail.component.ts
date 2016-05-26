import { Component, OnInit } from '@angular/core';
import { Router, RouteSegment } from '@angular/router';

import { Group, Student, GroupService } from '../core/data.service';

@Component({
	selector: 'hero-detail',
	providers: [ GroupService ],
	template: `
		<div class="mdl-grid" *ngIf="group && group.length > 0">
  			<div class="mdl-cell mdl-cell--1-col">
				<button class="mdl-button mdl-js-button mdl-button--raised" (click)="goBack()">
					Back
				</button>
  			</div>
  			<div class="mdl-cell mdl-cell--3-col">
				<h3 *ngFor="let group of group">{{ group.name }}</h3>
  			</div>
		</div>
		
		<table class="mdl-data-table mdl-js-data-table mdl-cell--12-col" *ngIf="group && group.length > 0">
		    <thead>
		        <tr>
		            <th class="mdl-data-table__cell--non-numeric">Name</th>
		            <th class="mdl-data-table__cell--non-numeric">Current Academic Year</th>
		            <th class="mdl-data-table__cell--non-numeric">Current Year Of Study</th>
		            <th class="mdl-data-table__cell--non-numeric">Start Year</th>
		        </tr>
		    </thead>
		    <tbody>
		        <tr *ngFor="let group of group"
		        	(click)="onSelect(group)">
		            <td class="mdl-data-table__cell--non-numeric">{{ group.name }}</td>
		            <td class="mdl-data-table__cell--non-numeric">{{ group.current_academic_year }}</td>
		            <td class="mdl-data-table__cell--non-numeric">{{ group.current_year_of_study }}</td>
		            <td class="mdl-data-table__cell--non-numeric">{{ group.start_year }}</td>
		        </tr>
		    </tbody>
		</table>

		<div class="mdl-grid" *ngIf="students && students.length > 0">
  			<div class="mdl-cell mdl-cell--3-col">
				<h3>Studenten</h3>
  			</div>
		</div>

		<table class="mdl-data-table mdl-js-data-table mdl-cell--12-col students" *ngIf="students && students.length > 0">
		    <thead>
		        <tr>
		            <th class="mdl-data-table__cell--non-numeric">Student Code</th>
		            <th class="mdl-data-table__cell--non-numeric">Particulars</th>
		            <th class="mdl-data-table__cell--non-numeric">Birth Date</th>
		            <th class="mdl-data-table__cell--non-numeric">Middle Name</th>
		            <th class="mdl-data-table__cell--non-numeric">Last Name</th>
		            <th class="mdl-data-table__cell--non-numeric">Sex</th>
		        </tr>
		    </thead>
		    <tbody>
		        <tr *ngFor="let student of students">
		            <td class="mdl-data-table__cell--non-numeric">{{ student.student_code }}</td>
		            <td class="mdl-data-table__cell--non-numeric">{{ student.particulars }}</td>
		            <td class="mdl-data-table__cell--non-numeric">{{ student.birth_date }}</td>
		            <td class="mdl-data-table__cell--non-numeric">{{ student.middle_name }}</td>
		            <td class="mdl-data-table__cell--non-numeric">{{ student.last_name }}</td>
		            <td class="mdl-data-table__cell--non-numeric">{{ student.sex }}</td>
		        </tr>
		    </tbody>
		</table>
	`,
	styles: [
	`	.mdl-grid .mdl-cell.mdl-cell--3-col {
			margin: 0 auto;
		}
		.mdl-grid .mdl-cell.mdl-cell--3-col h3 {
			margin-top: .2em;
			margin-bottom: 0;
		}
		.students {
			margin-top: 1em;
		}
	`]
})

export class GroupDetailComponent implements OnInit {
	private group: Group;
	private students: Student[];
	private selectedGroup: string;

	constructor(
		private curr: RouteSegment,
		private router: Router,
		private groupService: GroupService) { }

	ngOnInit() {
		this.selectedGroup = this.curr.getParam('id');

		this.groupService.getDetailsGroup(this.selectedGroup)
			.subscribe(data => {

				this.group = data
					.filter(function(item) {
						if (item.name !== undefined)
							return item; 
					})

				this.students = data
					.filter(function(item) {
						if (item.student_code !== undefined)
							return item;
					})

			});
	}

	goBack() {
		this.router.navigate(['/groups']);
	}
}