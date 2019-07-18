import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountriesModule } from '../countries/countries.module';
import { AddressItemComponent } from './address-item/address-item.component';
import { AddressFormComponent } from './address-form/address-form.component';

@NgModule({
  declarations: [AddressItemComponent, AddressFormComponent],
  exports: [AddressItemComponent, AddressFormComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CountriesModule,
  ],
  providers: [],
})
export class AddressModule {}
