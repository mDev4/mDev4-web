import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

@Component({
	selector: 'my-heroes',
	templateUrl: 'partials/heroes.html',
	directives: [HeroDetailComponent],
	styleUrls: ['css/app.css']
})

export class HeroesComponent implements OnInit {

	public heroes: Hero[];
	public selectedHero: Hero;

	public title = 'Tour of Heroes';

	onSelect(hero: Hero) {
		this.selectedHero = hero;
	}

	constructor(private _heroService: HeroService) { }

	getHeroes() {
		this._heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	ngOnInit() {
		this.getHeroes();
	}


	// Practice lynda 

	// name = 'Andrew';
	// artists = ['Liselotte', 'José', 'Harrie'];

	// onClick(name, container) {
	// 	this.name = name;
	// 	container.style.background = "lightblue";
	// }

	// addArtist(artist) {
	// 	this.artists.push(artist);
	// }

	// name: string;
	// artists: any;

	// constructor() {
	// 	this.name = 'Andrew';
	// 	this.artists = [
	// 		{
	// 			name: 'Niek',
	// 			school: 'Penn State'
	// 		},
	// 		{
	// 			name: 'Rik',
	// 			school: 'SGM'
	// 		}
	// 	];
	// }
};