import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Country, Continent } from '../country.model';

@Component({
  selector: 'country-selector',
  styleUrls: ['country-selector.component.scss'],
  templateUrl: './country-selector.component.html',
})
export class CountrySelectorComponent implements OnInit, OnDestroy, OnChanges {
  @Input()
  countries: Country[];

  @Input()
  continent?: Continent;

  @Input()
  isDependingOnContinent?: boolean = false;

  @Output()
  onSelectCountry: EventEmitter<Country> = new EventEmitter<Country>();

  countrySelect = new FormControl();
  countryChangeSubscriber: Subscription;

  constructor() {}

  ngOnInit(): void {
    this.countrySelect.disable();
    this.countryChangeSubscriber = this.countrySelect.valueChanges.subscribe(
      (): void => this.onSelectCountry.emit(this.countrySelect.value),
    );
  }

  ngOnDestroy(): void {
    if (this.countryChangeSubscriber) {
      this.countryChangeSubscriber.unsubscribe();
    }
  }

  getCountries(): Country[] {
    return this.continent
      ? this.countries.filter(
        ({ continent }): boolean => continent === this.continent,
      )
      : this.countries;
  }

  ngOnChanges(): void {
    this.countrySelect.disable();

    if (this.isDependingOnContinent === true) {
      if (this.continent) {
        this.countrySelect.enable();
      }
    }
  }
}
