import { Injectable } from '@angular/core';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NgRedux } from '@angular-redux/store';
import { StoreModel } from '../store/store.model';
import { LocationRawData } from './location.model';
import { LocationsDAOService } from './locations.dao';

export interface LocationAction extends Action {
	locations?: LocationRawData[];
}

@Injectable()
export class LocationsActions {
	static readonly FETCH_LOCATIONS = 'FETCH_LOCATIONS';

	constructor(private ngRedux: NgRedux<StoreModel>, private locationsDAO: LocationsDAOService) {}

	public fetchLocations(): Observable<LocationRawData[]> {
	  return this.locationsDAO.fetchLocations().pipe(map(onMap.bind(this)));

	  function onMap(locations: LocationRawData[]): LocationRawData[] {
	    this.ngRedux.dispatch({
	      type: LocationsActions.FETCH_LOCATIONS,
	      locations,
	    });
	    return locations;
	  }
	}
}
