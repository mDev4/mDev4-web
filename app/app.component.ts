import { Component, OnInit } from '@angular/core';
import { MDL } from './directives/material-design';

import { ROUTER_DIRECTIVES, Routes } from '@angular/router';
import { Location } from '@angular/common';

import { User, DataService } from './components/core/data.service';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { GroupsComponent } from './components/groups/groups.component';
import { GroupDetailComponent } from './components/groups/group-detail.component';

@Component({
    selector: 'lvs-app',
    directives: [ROUTER_DIRECTIVES, MDL, HeaderComponent, SidebarComponent, LoginComponent],
    providers: [ DataService ],
    template: `
        <div class="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header" *ngIf="userId">
        	<app-header class="demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600"></app-header>
    		<sidebar mdl class="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50"></sidebar>
        	<main class="mdl-layout__content mdl-color--grey-100">
    			<router-outlet></router-outlet>
        	</main>
        </div>
        <login (activeUser)="userLogin($event)" *ngIf="!userId"></login>
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
	{ path: '/login', component: LoginComponent },
	{ path: '/signup', component: SignupComponent },
    { path: '/groups', component: GroupsComponent },
    { path: '/group/:id', component: GroupDetailComponent },
    { path: '*', component: HomepageComponent }
])

export class AppComponent implements OnInit {
    private userId: number;
    private activeUser: User;

    constructor(
        private dataService: DataService,
        private location: Location) {}

    ngOnInit() {
        
        this.userId = localStorage.getItem('userId');

        if (this.userId) {
            this.dataService.getUser(this.userId)
                .subscribe(data => {
                    this.activeUser = data;
                });
        } else {
            this.location.replaceState('/');
        }
    }

    userLogin(user) {
        this.userId = user.id;
        this.activeUser = user;
    }
}