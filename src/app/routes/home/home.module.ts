import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsModule } from 'src/app/locations/locations.module';
import { CountriesModule } from '../../countries/countries.module';
import { HomePageComponent } from './home.component';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, CountriesModule, LocationsModule],
  providers: [HomePageComponent],
  bootstrap: [],
})
export class HomePageRouteModule {}
