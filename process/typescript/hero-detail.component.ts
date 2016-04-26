import {Component, Input} from 'angular2/core';
import {Hero} from './hero';

@Component({
	selector: 'hero-detail',
	templateUrl: 'partials/herodetail.html',
	
})

export class HeroDetailComponent {
	@Input()
	hero: Hero;
}