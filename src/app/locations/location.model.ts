export enum LocationFunction {
  AIRPORT = 'AIRPORT',
  RAIL_TERMINAL = 'RAIL_TERMINAL',
  SEAPORT = 'SEAPORT'
}

export interface LocationRawData {
  name: string;
  normalizedName: string;
  coordinates: {
    latitudeInDegrees: number;
    longitudeInDegrees: number;
  };
  address: {
    city: string;
    country: string;
    continent: string;
    streetName: string | null;
    streetNumber: string | null;
    postalCode: string | null;
    administrativeLevel2: string | null;
    administrativeLevel1: string | null;
  };
  resourceId: string | null;
  version: number | null;
  function: string;
}
