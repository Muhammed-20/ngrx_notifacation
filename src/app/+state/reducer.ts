
import { createReducer, on} from '@ngrx/store'
import { createRehydrateReducer } from 'ngrx-rehydrate';
import { Model } from '../app.model';
import { submit } from './action';


export interface TodoState {
  appointment:Model[],
 
  }


export const initialState: TodoState = {
  appointment: [],
 
};

 export const todoReducer =  createReducer(
    initialState,
    on(submit, (state,{pol,doc,date}) => ({
      ...state,
      appointment: [...state.appointment,{pol:pol,doc:doc,date:date}]  
    })),
  );  

