import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import { combineReducers } from 'redux';
import { routerReducer } from '@angular-redux/router';
import { appLoaderReducer } from '../app-loader/app-loader.reducer';
import { countriesReducer } from '../countries/countries.reducer';

export const StoreReducer = composeReducers(
  defaultFormReducer(),
  combineReducers({
    countries: countriesReducer,
    isLoading: appLoaderReducer,
    router: routerReducer,
  }),
);
