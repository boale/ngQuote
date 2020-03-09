import * as fromRouter from '@ngrx/router-store';
import {
  Action,
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
} from '@ngrx/store';

import { InjectionToken } from '@angular/core';
import { environment } from '../../environments/environment';

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
    // tslint:disable-next-line:no-console
    console.log('prev state', state);
    // tslint:disable-next-line:no-console
    console.log('action', action);
    // tslint:disable-next-line:no-console
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger] : [];
