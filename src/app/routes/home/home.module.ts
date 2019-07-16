import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home.component';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule],
  providers: [HomePageComponent],
  bootstrap: [],
})
export class HomePageRouteModule {}
