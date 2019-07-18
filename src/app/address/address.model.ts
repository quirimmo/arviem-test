import { Country, Continent } from '../countries/country.model';

export interface AddressRawData {
  city: string;
  country: string;
  continent: string;
  streetName: string | null;
  streetNumber: string | null;
  postalCode: string | null;
  administrativeLevel2: string | null;
  administrativeLevel1: string | null;
}

export interface Address {
  city: string;
  country: Country;
  continent: Continent;
  streetName: string;
  streetNumber: string;
  postalCode: string;
}
