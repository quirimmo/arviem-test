import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule, MatFormFieldModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountriesDAOService } from './countries.dao';
import { CountriesActions } from './country.actions';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { CountryItemComponent } from './country-item/country-item.component';
import { CountrySelectorComponent } from './country-selector/country-selector.component';
import { ContinentSelectorComponent } from './continent-selector/continent-selector.component';
import { ContinentPipe } from './pipes/continent.pipe';

@NgModule({
  declarations: [
    CountriesListComponent,
    CountryItemComponent,
    CountrySelectorComponent,
    ContinentSelectorComponent,
    ContinentPipe,
  ],
  exports: [CountriesListComponent, ContinentPipe, CountrySelectorComponent, ContinentSelectorComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CountriesDAOService, CountriesActions, ContinentPipe],
})
export class CountriesModule {}
