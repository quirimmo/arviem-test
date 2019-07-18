import { LocationRawData } from './location.model';
import { LocationAction, LocationsActions } from './location.actions';


export function locationsReducer(
  state: LocationRawData[] = [],
  action: LocationAction,
): LocationRawData[] {
  switch (action.type) {
    case LocationsActions.FETCH_LOCATIONS:
      return [].concat(...action.locations);
    default:
      return state;
  }
}
