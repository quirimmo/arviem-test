import { NgModule } from '@angular/core';
import { CountriesModule } from '../countries/countries.module';
import { CountriesResolver } from './countries.resolver';

@NgModule({
  declarations: [],
  imports: [CountriesModule],
  providers: [CountriesResolver],
  bootstrap: [],
})
export class ResolversModule {}
