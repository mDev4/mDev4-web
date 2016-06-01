import { Component, OnInit } from '@angular/core';
import { Router, RouteSegment } from '@angular/router';

import { DataService } from '../../services/data.service';
import { Student, Test } from '../../models/models';

@Component({
	selector: 'student-detail',
	template: `
		<div class="mdl-grid" *ngIf="student">
  			<div class="mdl-cell mdl-cell--1-col">
				<button class="mdl-button mdl-js-button mdl-button--raised" (click)="goBack()">
					Back
				</button>
  			</div>
		</div>
		
		<table class="mdl-data-table mdl-js-data-table mdl-cell--12-col" *ngIf="student">
		    <thead>
		        <tr>
		            <th class="mdl-data-table__cell--non-numeric">Student Code</th>
		            <th class="mdl-data-table__cell--non-numeric">First Name</th>
		            <th class="mdl-data-table__cell--non-numeric">Middle Name</th>
		            <th class="mdl-data-table__cell--non-numeric">Last Name</th>
		            <th class="mdl-data-table__cell--non-numeric">Start Year</th>
		            <th class="mdl-data-table__cell--non-numeric">Gender</th>
		            <th class="mdl-data-table__cell--non-numeric">Particulars</th>
		        </tr>
		    </thead>
		    <tbody>
		        <tr *ngIf="student">
		        	<td class="mdl-data-table__cell--non-numeric">{{ student.student_code }}</td>
		            <td class="mdl-data-table__cell--non-numeric">{{ student.first_name }}</td>
		            <td class="mdl-data-table__cell--non-numeric">{{ student.middle_name }}</td>
		            <td class="mdl-data-table__cell--non-numeric">{{ student.last_name }}</td>
		            <td class="mdl-data-table__cell--non-numeric">{{ student.start_year }}</td>
		            <td class="mdl-data-table__cell--non-numeric">{{ student.sex }}</td>
		            <td class="mdl-data-table__cell--non-numeric">{{ student.particulars }}</td>
		        </tr>
		    </tbody>
		</table>

		<div class="mdl-grid" *ngIf="tests && tests.length > 0">
  			<div class="mdl-cell mdl-cell--3-col">
				<h4>Resultaten</h4>
  			</div>
		</div>

		<table class="mdl-data-table mdl-js-data-table mdl-cell--12-col results" *ngIf="tests && tests.length > 0">
		    <thead>
		        <tr>
		            <th class="mdl-data-table__cell--non-numeric">Title</th>
		            <th class="mdl-data-table__cell--non-numeric">Description</th>
		            <th class="mdl-data-table__cell--non-numeric">Date</th>
		            <th class="mdl-data-table__cell--non-numeric">Grade</th>
		        </tr>
		    </thead>
		    <tbody>
		        <tr *ngFor="let test of tests">
		            <td class="mdl-data-table__cell--non-numeric">{{ test.title }}</td>
		            <td class="mdl-data-table__cell--non-numeric">{{ test.description }}</td>
		            <td class="mdl-data-table__cell--non-numeric">{{ test.date }}</td>
		            <td class="mdl-data-table__cell--non-numeric">{{ test.grade }}</td>
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
		.results {
			margin-top: 1em;
		}
	`]
})

export class StudentDetailComponent implements OnInit {
	private student: Student;
	private tests: Test[];
	private studentId: string;

	constructor(
		private curr: RouteSegment,
		private router: Router,
		private dataService: DataService) { }

	ngOnInit() {
		this.studentId = this.curr.getParam('id');

		this.dataService.getStudent(this.studentId)
			.subscribe(data => {
				this.student = data[0];
				this.tests = data[1]
					.filter(item => {
						return item.id !== null;
					});
			});
	}

	goBack() {
		this.router.navigate(['/students']);
	}
}