import { Component } from 'angular2/core';

import {
	RouteConfig,
	ROUTER_DIRECTIVES
} from 'angular2/router';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { GroupsComponent } from './components/groups/groups.component';
import { SensorConfigureComponent } from './components/sensor-config/sensor-config.component';
import { GroupService } from './components/core/groups.service';

import { SensorService } from './components/core/sensors.service';

@Component({
	selector: 'lvs-app',
	directives: [ ROUTER_DIRECTIVES, HeaderComponent, SidebarComponent ],
	providers: [SensorService, GroupService],
	template: `
		<div class="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
			<header class="demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600"></header>
			<sidebar class="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
			</sidebar>
			<main class="mdl-layout__content mdl-color--grey-100">
				<router-outlet></router-outlet>
			</main>
		</div>
	`
})

@RouteConfig([
	{ path: '/home', name: 'Homepage', component: HomepageComponent },
	{ path: '/groups', name: 'Groups', component: GroupsComponent },
	{ path: '/configure', name: 'Configure', component: SensorConfigureComponent },
	{ path: '/**', redirectTo: ['Homepage'] }
])

export class AppComponent {}