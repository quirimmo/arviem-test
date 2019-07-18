import { HomePageComponent } from './routes/home/home.component';
import { CountriesResolver } from './resolvers/countries.resolver';
import { LocationsResolver } from './resolvers/locations.resolver';

export const AppRoutes = [
  { path: '', component: HomePageComponent, resolve: { countries: CountriesResolver, locations: LocationsResolver } },
  { path: '**', redirectTo: '' },
];
