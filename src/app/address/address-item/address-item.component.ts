import { Component, Input } from '@angular/core';
import { Address } from '../address.model';

@Component({
  selector: 'address-item',
  templateUrl: './address-item.component.html',
})
export class AddressItemComponent {
  @Input()
  address: Address;

  constructor() {}
}
