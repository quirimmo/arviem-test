import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LocationsDAOService } from './locations.dao';
import { LocationsActions } from './location.actions';

@NgModule({
  declarations: [],
  exports: [],
  imports: [HttpClientModule, CommonModule],
  providers: [LocationsDAOService, LocationsActions],
})
export class LocationsModule {}
