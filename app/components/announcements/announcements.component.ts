import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { Announcement } from '../../models/models';

@Component({
	selector: 'announcements',
	template: `
		<div class="mdl-grid">
			<div class="mdl-cell mdl-cell--6-col" *ngFor="let announcement of announcements">
				<div class="demo-card-wide mdl-card mdl-shadow--2dp">
					<div class="mdl-card__title">
						<h2 class="mdl-card__title-text">{{ announcement.title }}</h2>
					</div>
					<div class="mdl-card__supporting-text">
						{{ announcement.message }}
					</div>
					<div class="mdl-card__actions mdl-card--border">
						<p>Announcement type: {{ announcement.type }}</p>
						<p>Gepost door: {{ announcement.first_name }} {{ announcement.last_name }}</p>
					</div>
				</div>
			</div>
		</div>
	`,
	styles: [
	`
		.demo-card-wide.mdl-card.mdl-shadow--2dp {
			width: 100%;
			min-height: 14.1em;
		}
	`
	]
})

export class AnnouncementsComponent implements OnInit {
	private announcements: Announcement[];

	constructor(private dataService: DataService) {}

	ngOnInit() {
		this.dataService.getAllAnnouncements()
			.subscribe(data => {
				this.announcements = data;
			});
	}

}