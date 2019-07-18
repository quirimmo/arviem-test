import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocationRawData } from 'src/app/locations/location.model';
import { Country, Continent } from '../../countries/country.model';
import { AppLoaderActions } from '../../app-loader/app-loader.actions';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
})
export class HomePageComponent implements OnInit, AfterViewInit {
  countries: Country[] = [];
  locations: LocationRawData[] = [];
  continent?: Continent;
  country?: Country;

  constructor(private appLoaderActions: AppLoaderActions, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.countries = this.route.snapshot.data.countries;
    this.locations = this.route.snapshot.data.locations;
  }

  ngAfterViewInit(): void {
    this.appLoaderActions.stopLoading();
  }

  onSelectContinent(continent: Continent): void {
    this.continent = continent;
  }

  onSelectCountry(country: Country): void {
    this.country = country;
  }
}
