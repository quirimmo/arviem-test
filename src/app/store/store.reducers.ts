import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import { combineReducers } from 'redux';
import { routerReducer } from '@angular-redux/router';
import { appLoaderReducer } from '../app-loader/app-loader.reducer';
import { countriesReducer } from '../countries/countries.reducer';
import { locationsReducer } from '../locations/locations.reducer';

export const StoreReducer = composeReducers(
  defaultFormReducer(),
  combineReducers({
    countries: countriesReducer,
    locations: locationsReducer,
    isLoading: appLoaderReducer,
    router: routerReducer,
  }),
);
