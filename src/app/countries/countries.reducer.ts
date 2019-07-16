import { Country } from './country.model';
import { CountriesActions, CountryAction } from './country.actions';

export function countriesReducer(
  state: Country[] = [],
  action: CountryAction,
): Country[] {
  switch (action.type) {
    case CountriesActions.FETCH_COUNTRIES:
      return [].concat(...action.countries);
    default:
      return state;
  }
}
