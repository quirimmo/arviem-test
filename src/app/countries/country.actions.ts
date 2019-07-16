import { Injectable } from '@angular/core';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NgRedux } from '@angular-redux/store';
import { StoreModel } from '../store/store.model';
import { Country } from './country.model';
import { CountriesDAOService } from './countries.dao';

export interface CountryAction extends Action {
	countries?: Country[];
}

@Injectable()
export class CountriesActions {
	static readonly FETCH_COUNTRIES = 'FETCH_COUNTRIES';

	constructor(private ngRedux: NgRedux<StoreModel>, private countriesDAO: CountriesDAOService) {}

	public fetchCountries(): Observable<Country[]> {
	  return this.countriesDAO.fetchCountries().pipe(map(onMap.bind(this)));

	  function onMap(countries: Country[]): Country[] {
	    this.ngRedux.dispatch({
	      type: CountriesActions.FETCH_COUNTRIES,
	      countries,
	    });
	    return countries;
	  }
	}
}
