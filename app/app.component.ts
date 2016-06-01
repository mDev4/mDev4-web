import { Component, OnInit } from '@angular/core';
import { MDL } from './directives/material-design';

import { ROUTER_DIRECTIVES, Routes } from '@angular/router';
import { Location } from '@angular/common';

import { SharedService } from './services/shared.service';

import { User } from './models/models';

import { LoginComponent } from './components/login/login.component';

import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { GroupsComponent } from './components/groups/groups.component';
import { GroupDetailComponent } from './components/groups/group-detail.component';
import { AnnouncementsComponent } from './components/announcements/announcements.component';
import { TestsComponent } from './components/tests/tests.component';
import { StudentsComponent } from './components/students/students.component';
import { StudentDetailComponent } from './components/students/student-detail.component';

@Component({
    selector: 'lvs-app',
    directives: [ROUTER_DIRECTIVES, MDL, HeaderComponent, SidebarComponent, LoginComponent],
    template: `
        <div class="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header" *ngIf="userId || currentUser">
        	<app-header class="demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600"></app-header>
    		<sidebar mdl class="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50"></sidebar>
        	<main class="mdl-layout__content mdl-color--grey-100">
    			<router-outlet></router-outlet>
        	</main>
        </div>
        <login mdl (activeUser)="userLogin($event)" *ngIf="!userId || currentUser"></login>
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
    { path: '/groups', component: GroupsComponent },
    { path: '/group/:id', component: GroupDetailComponent },
    { path: '/students', component: StudentsComponent },
    { path: '/student/:id', component: StudentDetailComponent },
    { path: '/announcements', component: AnnouncementsComponent },
    { path: '/tests', component: TestsComponent }
])

export class AppComponent implements OnInit {
    private currentUser: User;
    private userId: number;

    constructor(
        private sharedService: SharedService<User>,
        private location: Location) { }

    ngOnInit() {
        
        this.userId = localStorage.getItem('userId');

        if (!this.userId) {
            this.location.replaceState('/');
        }
    }

    userLogin(user) {
        this.sharedService.setCurrentUser(user);
        this.currentUser = this.sharedService.getCurrentUser();
    }
}