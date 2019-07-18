import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Country, Continent } from '../../countries/country.model';

@Component({
  selector: 'address-form',
  templateUrl: './address-form.component.html',
})
export class AddressFormComponent implements OnInit {
  @select()
  countries$: Observable<Country[]>;

  continent?: Continent;
  country?: Country;
  cityFormControl = new FormControl();
  streetNameFormControl = new FormControl();
  streetNumberFormControl = new FormControl();
  postalCodeFormControl = new FormControl();

  constructor() {}

  ngOnInit(): void {
    // this.countries$.subscribe((countries: Country[]): void => {
    //   this.countries
    //   console.log('Selected countries:', countries);
    // });
  }

  onSelectContinent(continent: Continent): void {
    this.continent = continent;
  }

  onSelectCountry(country: Country): void {
    this.country = country;
  }


  onSubmit(): void {
    console.log('Submitting');
  }
}
