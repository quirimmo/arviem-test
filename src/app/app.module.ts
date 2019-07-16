import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgReduxModule } from '@angular-redux/store';
import { NgReduxRouterModule } from '@angular-redux/router';
import { NgReduxFormModule } from '@angular-redux/form';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { RoutesModule } from './routes/routes.module';

@NgModule({
  declarations: [AppComponent],
  exports: [],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes),
    NgReduxModule,
    NgReduxRouterModule.forRoot(),
    NgReduxFormModule,
    RoutesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
