
import { HttpClient } from '@angular/common/http';
import { map, publishReplay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ConnectableObservable } from 'rxjs';
import { Country, CountryRawData } from './country.model';

export const COUNTRIES_API_BASE_URL = 'https://restcountries.eu/rest/v2/';
export const COUNTRIES_API_ENDPOINT = 'all';
export const COUNTRIES_API_ENDPOINT_URL = `${COUNTRIES_API_BASE_URL}${COUNTRIES_API_ENDPOINT}`;

@Injectable({ providedIn: 'root' })
export class CountriesDAOService {
	private countries: ConnectableObservable<Country[]>;

	constructor(private http: HttpClient) {
	  this.countries = this.http
	    .get(COUNTRIES_API_ENDPOINT_URL)
	    .pipe(map(buildCountriesFromData))
	    .pipe(publishReplay()) as ConnectableObservable<Country[]>;
	  this.countries.connect();

	  function buildCountriesFromData(data: CountryRawData[]): Country[] {
	    return data.map((countryRaw: CountryRawData, index: number): Country => Country.buildInstanceFromRaw(countryRaw, index));
	  }
	}

	public fetchCountries(): ConnectableObservable<Country[]> {
	  return this.countries;
	}
}
