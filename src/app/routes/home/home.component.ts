import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country, Continent } from '../../countries/country.model';
import { AppLoaderActions } from '../../app-loader/app-loader.actions';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
})
export class HomePageComponent implements OnInit, AfterViewInit {
  countries: Country[] = [];
  continent?: Continent;

  constructor(private appLoaderActions: AppLoaderActions, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.countries = this.route.snapshot.data.countries;
  }

  ngAfterViewInit(): void {
    this.appLoaderActions.stopLoading();
  }

  onSelectContinent(continent: Continent): void {
    this.continent = continent;
  }
}
