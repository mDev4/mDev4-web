import { Component } from '@angular/core';

import { UserProfileComponent } from './user-profile.component';
import { NavigationMenuComponent } from './navigation-menu.component';

@Component({
	selector: 'sidebar',
	directives: [ UserProfileComponent, NavigationMenuComponent ],
	template: `
		<user-profile></user-profile>
		<navigation-menu></navigation-menu>
	`
})

export class SidebarComponent {}