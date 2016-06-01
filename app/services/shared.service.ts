import { Injectable } from '@angular/core';
import { User } from '../models/models';

@Injectable()
export class SharedService<User> {
	private currentUser: User;

	getCurrentUser(): User {
		return this.currentUser;
	}

	setCurrentUser(currentUser: User): void {
		this.currentUser = currentUser;
	}

}