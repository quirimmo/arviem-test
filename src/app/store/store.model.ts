import { Country } from '../countries/country.model';
import { LocationRawData } from '../locations/location.model';

export interface StoreModel {
  isLoading?: boolean;
  countries: Country[];
  locations: LocationRawData[];
}
