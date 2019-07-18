import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AddressModule } from '../address/address.module';
import { CountriesModule } from '../countries/countries.module';
import { LocationsDAOService } from './locations.dao';
import { LocationsActions } from './location.actions';

@NgModule({
  declarations: [],
  exports: [],
  imports: [HttpClientModule, CommonModule, CountriesModule, AddressModule],
  providers: [LocationsDAOService, LocationsActions],
})
export class LocationsModule {}
