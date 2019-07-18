import { NgModule } from '@angular/core';
import { CountriesModule } from '../countries/countries.module';
import { LocationsModule } from '../locations/locations.module';
import { CountriesResolver } from './countries.resolver';
import { LocationsResolver } from './locations.resolver';

@NgModule({
  declarations: [],
  imports: [CountriesModule, LocationsModule],
  providers: [CountriesResolver, LocationsResolver],
  bootstrap: [],
})
export class ResolversModule {}
