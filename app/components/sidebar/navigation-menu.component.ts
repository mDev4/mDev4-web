import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { User } from '../../models/models';

import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	selector: 'navigation-menu',
	directives: [ ROUTER_DIRECTIVES ],
	template: `
		<nav class="demo-navigation mdl-navigation">            
			<a class="mdl-navigation__link" [routerLink]="['/home']"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">home</i>Home</a>
			<a class="mdl-navigation__link" [routerLink]="['/tests']"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">list</i>Results</a>
			<a class="mdl-navigation__link" [routerLink]="['/groups']"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">group</i>Groups</a>
			<a class="mdl-navigation__link" [routerLink]="['/students']"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">accessibility</i>Students</a>
			<a class="mdl-navigation__link" [routerLink]="['/announcements']"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">flag</i>Announcements</a>
			<a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">account_box</i>My Account</a>
			<a class="mdl-navigation__link" href="" (click)="logout()"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">exit_to_app</i>Logout</a>
		</nav>
	`,
	styles: [
	`
		.mdl-navigation__link.router-link-active {
			background-color: #00BCD4;
    		color: #37474F;
		}
	`
	]
})

export class NavigationMenuComponent {

	constructor(private sharedService: SharedService<User>) {}

	logout() {
		localStorage.removeItem('userId');
		this.sharedService.setCurrentUser(null);
	}
}