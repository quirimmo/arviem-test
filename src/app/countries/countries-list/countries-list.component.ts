import { Component, Input } from '@angular/core';
import {
  bounceOutOnLeaveAnimation,
  bounceInUpOnEnterAnimation,
  slideInLeftOnEnterAnimation,
  slideOutRightOnLeaveAnimation,
} from 'angular-animations';
import { Country } from '../country.model';

@Component({
  selector: 'countries-list',
  templateUrl: './countries-list.component.html',
  animations: [
    bounceInUpOnEnterAnimation({ duration: 500 }),
    bounceOutOnLeaveAnimation({ duration: 350 }),
    slideInLeftOnEnterAnimation({ duration: 100, delay: 350 }),
    slideOutRightOnLeaveAnimation({ duration: 100 }),
  ],
})
export class CountriesListComponent {
	@Input()
	countries: Country[];

	constructor() {}
}
