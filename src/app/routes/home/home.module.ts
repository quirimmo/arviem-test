import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesModule } from '../../countries/countries.module';
import { HomePageComponent } from './home.component';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, CountriesModule],
  providers: [HomePageComponent],
  bootstrap: [],
})
export class HomePageRouteModule {}
