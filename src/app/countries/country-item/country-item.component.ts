import { Component, Input } from '@angular/core';
import { Country } from '../country.model';

@Component({
  selector: 'country-item',
  inputs: ['country'],
  styleUrls: ['./country-item.component.scss'],
  templateUrl: './country-item.component.html',
})
export class CountryItemComponent {
	@Input()
	country: Country;

	constructor() {}
}
