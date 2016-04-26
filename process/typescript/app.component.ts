import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {HeroService} from './hero.service';
import {HeroesComponent} from './heroes.component';
import {ArtistsComponent} from './artists.component';

import {DashboardComponent} from './dashboard.component';

@Component({
	selector: 'lvs-app',
	templateUrl: 'partials/app.html',
	directives: [ROUTER_DIRECTIVES],
	providers: [
		ROUTER_PROVIDERS,
		HeroService
	]
})

@RouteConfig([
	{	
		path: '/dashboard',
		name: 'Dashboard',
		component: DashboardComponent,
		useAsDefault: true
	},
	{
		path: '/heroes',
		name: 'Heroes',
		component: HeroesComponent
	},
	{
		path: '/artists',
		name: 'Artists',
		component: ArtistsComponent
	}
])

export class AppComponent {
	title = 'Tour of Heroes';
}