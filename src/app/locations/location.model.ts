import { AddressRawData, Address } from '../address/address.model';

export interface LocationRawData {
  name: string;
  normalizedName: string;
  coordinates: {
    latitudeInDegrees: number;
    longitudeInDegrees: number;
  };
  address: AddressRawData;
  resourceId: string | null;
  version: number | null;
  function: string;
}

export interface LocationCoordinates {
  latitude: number;
  longitude: number;
}

export enum LocationFunction {
  AIRPORT = 'AIRPORT',
  RAIL_TERMINAL = 'RAIL_TERMINAL',
  SEAPORT = 'SEAPORT'
}

export interface Location {
  resourceId: string;
  name: string;
  coordinates: LocationCoordinates;
  address: Address;
  function: LocationFunction;
}
