import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';


import { of, from } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { ApState } from './ap.model';
import { submit } from './action';
import { selectAllTodos } from './select';
import { LocalService } from '../services/storeLocalStorage.service';
import { Model } from '../app.model';




@Injectable()
export class TodoEffects {
  constructor(
    private actions$: Actions,
    private store: Store<ApState>,
    private SubmitService:LocalService
  ) {}

  // Run this code when a loadTodos action is dispatched

  // Run this code when the addTodo or removeTodo action is dispatched
/*  saveTodos$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(submit),
        withLatestFrom(this.store.select(selectAllTodos)),
        switchMap(([action,appointment]) => from(this.SubmitService.saveTodos(appointment)))
      ),
    // Most effects dispatch another action, but this one is just a "fire and forget" effect
    { dispatch: false }
  ); */    
}