import { Component } from '@angular/core';
import { MDL } from './directives/material-design';

import { ROUTER_DIRECTIVES, Routes } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/homepage/dashboard.component';
import { GroupsComponent } from './components/groups/groups.component';
import { GroupDetailComponent } from './components/groups/group-detail.component';

@Component({
    selector: 'lvs-app',
    directives: [ROUTER_DIRECTIVES, MDL, HeaderComponent, SidebarComponent],
    template: `
        <div class="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
        	<app-header class="demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600"></app-header>
    		<sidebar mdl class="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50"></sidebar>
        	<main class="mdl-layout__content mdl-color--grey-100">
    			<router-outlet></router-outlet>
        	</main>
        </div>
	`
})

@Routes([
	{ path: '/', component: DashboardComponent },
    { path: '/groups', component: GroupsComponent },
    { path: '/group/:id', component: GroupDetailComponent },
    { path: '*', component: DashboardComponent }
])

export class AppComponent { }