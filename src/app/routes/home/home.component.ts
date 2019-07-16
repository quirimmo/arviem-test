import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
})
export class HomePageComponent {
  constructor(private route: ActivatedRoute) {}
}
