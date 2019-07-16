import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CountriesDAOService } from './countries.dao';
import { CountriesActions } from './country.actions';

@NgModule({
  declarations: [],
  exports: [],
  imports: [HttpClientModule, CommonModule],
  providers: [CountriesDAOService, CountriesActions],
})
export class CountriesModule {}
