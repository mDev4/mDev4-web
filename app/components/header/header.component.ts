import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
	selector: 'app-header',
	template: `
		<div class="mdl-layout__header-row">
			<span class="mdl-layout-title">{{ title }}</span>
			<div class="mdl-layout-spacer"></div>
			<div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
				<label class="mdl-button mdl-js-button mdl-button--icon" for="search">
					<i class="material-icons">search</i>
				</label>
				<div class="mdl-textfield__expandable-holder">
					<input class="mdl-textfield__input" type="text" id="search">
					<label class="mdl-textfield__label" for="search">Enter your query...</label>
				</div>
			</div>
		</div>
	`
})

export class HeaderComponent implements OnInit {

	private title: string;

    constructor(
        private location: Location,
        private router: Router) {
		this.router.changes.subscribe(() => {
            this.getRoute();
        });
    }

    ngOnInit() {
		this.setTitle();
    }

    getRoute() {
        this.setTitle();
    }

    setTitle() {
		if (location.hash === "#/home") {
			this.title = "Home";
		} else if (location.hash === "#/groups") {
			this.title = "Groups";
		} else if (location.hash === "#/announcements") {
			this.title = "Announcements";
		} else if (location.hash === "#/tests") {
			this.title = "Tests";
		} else if (location.hash === "#/students") {
			this.title = "Students";
		} else if (location.hash.indexOf("#/student/") > -1) {
			this.title = "Student " + location.hash.slice(-1);
		} else if (location.hash.indexOf("#/group/") > -1) {
			this.title = "Group " + location.hash.slice(-1);
		} else {
			this.title = "undefined";
		}
    }
}	