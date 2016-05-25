import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';
import 'rxjs/Rx';

export class Group {
	private id: number;
	private name: string;
	private currentAcademicYear: Date;
	private currentYearOfStudy: number;
	private startYear: Date;

	constructor(id: number, name: string, currentAcademicYear: Date, currentYearOfStudy: number, startYear: Date) {
		this.id = id;
		this.name = name;
		this.currentAcademicYear = currentAcademicYear;
		this.currentYearOfStudy = currentYearOfStudy;
		this.startYear = startYear;
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

	// addToDashboard(sensor: Sensor) {
	//        this.dashboardSensors.push(sensor);
	//    }

	//    getDashboardSensors(): Sensor[] {
	//        return this.dashboardSensors;
	//    }
}