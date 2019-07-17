import {
  Component, Input, OnInit, OnDestroy,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Country, Continent } from '../country.model';

@Component({
  selector: 'country-selector',
  templateUrl: './country-selector.component.html',
})

export class CountrySelectorComponent implements OnInit, OnDestroy {
	@Input()
  countries: Country[];

  @Input()
  continent?: Continent;

	countrySelect = new FormControl();
	countryChangeSubscriber: Subscription;

	constructor() {}

	ngOnInit(): void {
	  this.countryChangeSubscriber = this.countrySelect.valueChanges.subscribe(
	    this.onChangeCountry.bind(this),
	  );
	}

	ngOnDestroy(): void {
	  if (this.countryChangeSubscriber) {
	    this.countryChangeSubscriber.unsubscribe();
	  }
	}

	getCountries(): Country[] {
	  return this.continent ? this.countries.filter(({ continent }): boolean => continent === this.continent) : this.countries;
	}

	public onChangeCountry(): void {
	  console.log('You selected a new country', this.countrySelect.value);
	}
}
