import { Component } from 'angular2/core';

import { NavigationMenuComponent } from './navigation-menu.component';
import { UserProfileComponent } from './user-profile.component';

@Component({
	selector: 'sidebar',
	directives: [ NavigationMenuComponent, UserProfileComponent ],
	template: `
		<user-profile></user-profile>
		<navigation-menu></navigation-menu>
	`
})

export class SidebarComponent {}