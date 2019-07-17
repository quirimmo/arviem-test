import { Pipe, PipeTransform } from '@angular/core';
import { Continent } from '../country.model';

@Pipe({ name: 'continent' })
export class ContinentPipe implements PipeTransform {
  transform(continent: Continent): string {
    return continent.toString().replace('_', ' ');
  }
}
