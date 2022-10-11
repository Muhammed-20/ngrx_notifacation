import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { todoReducer, TodoState } from '../+state/reducer';
import { hydrationMetaReducer } from "./hytdration.reducer";
import { Model } from '../app.model';
import { ApState } from "../+state/ap.model";



  export const reducers: ActionReducerMap<ApState> = {
    appointment: todoReducer
  }
  
  export const metaReducers: MetaReducer[] = [
    hydrationMetaReducer
  ]