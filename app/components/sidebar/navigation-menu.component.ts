import { Component } from 'angular2/core';

import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
	selector: 'navigation-menu',
	directives: [ ROUTER_DIRECTIVES ],
	template: `
		<nav class="demo-navigation mdl-navigation mdl-color--blue-grey-800">
			<a [routerLink]="['/groups']">Heroes</a>
			<a class="mdl-navigation__link" [routerLink]="['/']"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">home</i>Home</a>
			<a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">inbox</i>Inbox</a>
			<a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">delete</i>Trash</a>
			<a class="mdl-navigation__link" [routerLink]="['/groups']"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">group</i>Groups</a>
			<a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">forum</i>Forums</a>
			<a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">flag</i>Updates</a>
			<a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">local_offer</i>Promos</a>
			<a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">shopping_cart</i>Purchases</a>
			<a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">people</i>Social</a>
			<div class="mdl-layout-spacer"></div>
			<a class="mdl-navigation__link" href=""><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">help_outline</i><span class="visuallyhidden">Help</span></a>
		</nav>
	`
})

export class NavigationMenuComponent {}