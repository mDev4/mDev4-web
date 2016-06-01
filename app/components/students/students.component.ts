import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../../services/data.service';
import { Student } from '../../models/models';

@Component({
	selector: 'students',
	template: `
		<table class="mdl-data-table mdl-js-data-table mdl-cell--12-col" *ngIf="students && students.length > 0">
		    <thead>
		        <tr>
		            <th class="mdl-data-table__cell--non-numeric">Student Code</th>
		            <th class="mdl-data-table__cell--non-numeric">First Name</th>
		            <th class="mdl-data-table__cell--non-numeric">Middle Name</th>
		            <th class="mdl-data-table__cell--non-numeric">Last Name</th>
		        </tr>
		    </thead>
		    <tbody>
		        <tr *ngFor="let student of students"
		        	(click)="onSelect(student)">
		            <td class="mdl-data-table__cell--non-numeric">{{ student.student_code }}</td>
		            <td class="mdl-data-table__cell--non-numeric">{{ student.first_name }}</td>
		            <td class="mdl-data-table__cell--non-numeric">{{ student.middle_name }}</td>
		            <td class="mdl-data-table__cell--non-numeric">{{ student.last_name }}</td>
		        </tr>
		    </tbody>
		</table>
	`
})

export class StudentsComponent implements OnInit {
	private students: Student[] = [];

	constructor(
		private router: Router,
		private dataService: DataService) { }

	ngOnInit() {
		this.dataService.getAllStudents()
			.subscribe(data => {
				this.students = data;
			});
	}

	onSelect(student: Student) {
		this.router.navigate(['/student', student.id]);
	}
}