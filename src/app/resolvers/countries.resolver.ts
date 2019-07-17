import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Country } from '../countries/country.model';
import { CountriesActions } from '../countries/country.actions';

@Injectable()
export class CountriesResolver implements Resolve<Country[]> {
  constructor(private actions: CountriesActions) {}

  resolve(): Observable<Country[]> {
    return this.actions.fetchCountries();
  }
}
