import { Component, OnInit } from '@angular/core';
import { MDL } from './directives/material-design';

import { ROUTER_DIRECTIVES, Routes } from '@angular/router';

import { User } from './components/core/data.service';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { GroupsComponent } from './components/groups/groups.component';
import { GroupDetailComponent } from './components/groups/group-detail.component';

@Component({
    selector: 'lvs-app',
    directives: [ROUTER_DIRECTIVES, MDL, HeaderComponent, SidebarComponent],
    template: `
        <div class="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header" *ngIf="activeUser">
        	<app-header class="demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600"></app-header>
    		<sidebar mdl class="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50"></sidebar>
        	<main class="mdl-layout__content mdl-color--grey-100">
    			<router-outlet></router-outlet>
        	</main>
        </div>
        <dialog class="mdl-dialog" open>
            <h4 class="mdl-dialog__title">Login Leerlingvolgsysteem</h4>
            <div class="mdl-dialog__content">
                <p>
                    Allowing us to collect data will let us get you the information you want faster.
                </p>
				<form action="#">
					<div class="mdl-textfield">
						<label for="sample1">Username</label>
						<input class="mdl-textfield__input" type="text" id="sample1">
					</div>
					<div class="mdl-textfield mdl-js-textfield">
						<label for="sample1">Password</label>
						<input class="mdl-textfield__input" type="text" id="sample1">
					</div>
				</form>
            </div>
			<div class="mdl-dialog__actions">
                <button type="button" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" (click)="login()">Login</button>
                <button type="button" class="mdl-button">Nieuw account</button>
            </div>
        </dialog>
	`,
    styles: [
    `
        .mdl-dialog {
            margin-top: 10em;
            width: 40em;
        }
    `
    ]
})

@Routes([
	{ path: '/home', component: HomepageComponent },
    { path: '/groups', component: GroupsComponent },
    { path: '/group/:id', component: GroupDetailComponent },
    { path: '*', component: HomepageComponent }
])

export class AppComponent implements OnInit {
    public activeUser: User;

    ngOnInit() {
    
    }
}