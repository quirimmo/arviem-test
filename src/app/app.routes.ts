import { HomePageComponent } from './routes/home/home.component';
import { CountriesResolver } from './resolvers/countries.resolver';

export const AppRoutes = [
  { path: '', component: HomePageComponent, resolve: { countries: CountriesResolver } },
  { path: '**', redirectTo: '' },
];
