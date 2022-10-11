import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import { state } from '@angular/animations';


export const TODO_LOCALSTORAGE_KEY = 'appointment';

@Injectable({ providedIn: 'root' })
export class LocalService {

  constructor(private store$: Store) { }

  public setSavedState(state: any, localStorageKey: string) {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }

  public getSavedState(localStorageKey: string) {
    return JSON.parse(localStorage.getItem(localStorageKey)!);
  }
}