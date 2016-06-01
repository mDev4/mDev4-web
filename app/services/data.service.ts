import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { contentHeaders } from '../common/headers';
import 'rxjs/Rx';

import { Announcement } from '../models/models';

@Injectable()

export class DataService {

	constructor(private http: Http) { }

	userLogin(body): any {
		return this.http
			.post('http://lvs.azurewebsites.net/users/login', body, { headers: contentHeaders })
			.map(res => res.json());
	}

	creacteUser(body): any {
		return this.http
			.post('http://lvs.azurewebsites.net/users/create', body, { headers: contentHeaders })
			.map(res => res.json());
	}

	getUser(userId): any {
		return this.http
			.get('http://lvs.azurewebsites.net/users/' + userId)
			.map(res => res.json());
	}

	getAllGroups(): any {
		return this.http
			.get('http://lvs.azurewebsites.net/groups')
			.map(res => res.json());
	}

	getStudent(studentId): any {
		return this.http
			.get('http://lvs.azurewebsites.net/students/' + studentId)
			.map(res => res.json());
	}

	getAllStudents(): any {
		return this.http
			.get('http://lvs.azurewebsites.net/students')
			.map(res => res.json());
	}

	getAllTests(): any {
		return this.http
			.get('http://lvs.azurewebsites.net/tests')
			.map(res => res.json());
	}

	getAllAnnouncements(): any {
		return this.http
			.get('http://lvs.azurewebsites.net/announcements')
			.map(res => res.json());
	}

	getDetailsGroup(groupId): any {
		return this.http
			.get('http://lvs.azurewebsites.net/groups/' + groupId)
			.map(res => res.json());
	}

}