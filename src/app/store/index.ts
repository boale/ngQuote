import {
  Action,
  ActionReducer,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

import { environment } from '../../environments/environment';
import {InjectionToken} from '@angular/core';

// tslint:disable-next-line:no-empty-interface
export interface State {
  router: fromRouter.RouterReducerState<any>;
}

export const ROOT_REDUCERS = {
  router: fromRouter.routerReducer,
};

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger] : [];
