import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { DataService } from '../../services/data.service';
import { User } from '../../models/models';

@Component({
	selector: 'user-profile',
	template: `
		<header class="demo-drawer-header">
			<div *ngIf="currentUser">
				<h4>User details</h4>
				<p>Voornaam: {{ currentUser.first_name }}</p>
				<p>Achternaa: {{ currentUser.last_name }}</p>
				<p>Email: {{ currentUser.email }}</p>
				<div class="mdl-layout-spacer"></div>
			</div>
		</header>
	`,
	styles: [
	`	
		.demo-drawer-header h4 {
			margin-bottom: 10px;
			text-align: center;
		}
		.demo-drawer-header p {
			margin-bottom: 0;
			text-align: center;
		}
	`
	]
})

export class UserProfileComponent implements OnInit {
	private currentUser: Object;
	private userId: number;

	constructor(private dataService: DataService,
				private sharedService: SharedService<User>) {}

	ngOnInit() {
		this.userId = localStorage.getItem('userId');

        if (this.userId) {
            this.dataService.getUser(this.userId)
                .subscribe(user => {
                    this.sharedService.setCurrentUser(user);
                    this.currentUser = this.sharedService.getCurrentUser();
                })
        }
	}


}