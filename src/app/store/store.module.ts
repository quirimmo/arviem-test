import { NgModule } from '@angular/core';
import {
  DevToolsExtension,
  NgRedux,
  NgReduxModule,
} from '@angular-redux/store';
import { provideReduxForms } from '@angular-redux/form';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';
import thunk from 'redux-thunk';
import { StoreModel } from './store.model';
import { StoreReducer } from './store.reducers';


const initialStore: StoreModel = { isLoading: true, countries: [], locations: [] };

@NgModule({
  imports: [NgReduxModule, NgReduxRouterModule.forRoot()],
  providers: [],
})

export class StoreModule {
  constructor(
		public store: NgRedux<StoreModel>,
		devTools: DevToolsExtension,
		ngReduxRouter: NgReduxRouter,
  ) {
    store.configureStore(
      StoreReducer,
      initialStore,
      [thunk],
      devTools.isEnabled() ? [devTools.enhancer()] : [],
    );

    // Enable syncing of Angular router state with our Redux store.
    if (ngReduxRouter) {
      ngReduxRouter.initialize();
    }

    // Enable syncing of Angular form state with our Redux store.
    provideReduxForms(store);
  }
}
