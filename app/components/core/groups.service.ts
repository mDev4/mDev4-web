import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; 
import 'rxjs/Rx';

export class Group {
	private id: number;
	private name: string;
	private current_academic_year: Date;
	private current_year_of_study: number;
	private start_year: Date;

	constructor(id: number, name: string, 
				current_academic_year: Date, 
				current_year_of_study: number, 
				start_year: Date) {
		this.id = id;
		this.name = name;
		this.current_academic_year = current_academic_year;
		this.current_year_of_study = current_year_of_study;
		this.start_year = start_year;
	}
}

export class Student {
	private student_code: string;
	private particulars: string;
	private birth_date: Date;
	private first_name: string;
	private middle_name: string;
	private last_name: string;
	private sex: string;

	constructor(student_code: string, particulars: string, 
				birth_date: Date, first_name: string, 
				middle_name: string, last_name: string, 
				sex: string) {
		this.student_code = student_code;
		this.particulars = particulars;
		this.birth_date = birth_date;
		this.first_name = first_name;
		this.middle_name = middle_name;
		this.last_name = last_name;
		this.sex = sex;
	}
}

@Injectable()

export class GroupService {
	// private dashboardSensors: Sensor[] = [];

	constructor(private http: Http) {

	}

	getAllGroups() {
		return this.http
			.get('http://lvs.azurewebsites.net/groups')
			.map(res => res.json());
	}

	getDetailsGroup(groupId) {
		return this.http
			.get('http://lvs.azurewebsites.net/groups/' + groupId)
			.map(res => res.json());
	}

	// addToDashboard(sensor: Sensor) {
 //        this.dashboardSensors.push(sensor);
 //    }

 //    getDashboardSensors(): Sensor[] {
 //        return this.dashboardSensors;
 //    }
}