
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationRawData } from './location.model';

export const ARVIEM_API_BASE_URL = 'http://arviem-api.us-east-1.elasticbeanstalk.com/tenant1/';
export const LOCATIONS_API_ENDPOINT = 'locations';
export const LOCATIONS_API_ENDPOINT_URL = `${ARVIEM_API_BASE_URL}${LOCATIONS_API_ENDPOINT}`;

@Injectable({ providedIn: 'root' })
export class LocationsDAOService {
  constructor(private http: HttpClient) {}

  public fetchLocations(): Observable<LocationRawData[]> {
    return this.http.get(LOCATIONS_API_ENDPOINT_URL).pipe(map(onMapLocations));

    function onMapLocations(data: LocationRawData[]): LocationRawData[] {
      return data.map((locationRaw: LocationRawData): LocationRawData => locationRaw as LocationRawData);
    }
  }
}
