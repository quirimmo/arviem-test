import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { LocationRawData } from '../locations/location.model';
import { LocationsActions } from '../locations/location.actions';

@Injectable()
export class LocationsResolver implements Resolve<LocationRawData[]> {
  constructor(private actions: LocationsActions) {}

  resolve(): Observable<LocationRawData[]> {
    return this.actions.fetchLocations();
  }
}
