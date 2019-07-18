import {
  Component, Output, EventEmitter, OnInit, OnDestroy,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Continent } from '../country.model';

@Component({
  selector: 'continent-selector',
  templateUrl: './continent-selector.component.html',
})

export class ContinentSelectorComponent implements OnInit, OnDestroy {
  @Output() onSelectContinent = new EventEmitter<Continent>();

	continents: Continent[] = Object.keys(Continent).map((c: string): Continent => Continent[c]);
	continentSelect = new FormControl();
	continentChangeSubscriber: Subscription;


	constructor() {}

	ngOnInit(): void {
	  this.continentChangeSubscriber = this.continentSelect.valueChanges.subscribe(
	    (): void => this.onSelectContinent.emit(this.continentSelect.value),
	  );
	}

	ngOnDestroy(): void {
	  if (this.continentChangeSubscriber) {
	    this.continentChangeSubscriber.unsubscribe();
	  }
	}

	onSubmit(): void {
	  console.log('Submitting inner form');
	}
}
