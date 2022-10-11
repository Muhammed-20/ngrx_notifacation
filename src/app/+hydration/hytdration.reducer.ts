import { ActionReducer, INIT, UPDATE } from "@ngrx/store";
import { ApState } from '../+state/ap.model';



export const hydrationMetaReducer = (reducer: ActionReducer<ApState>): ActionReducer<ApState> => {
  return (state, action) => {
    console.log(state,action);
    console.log(action.type)
    if (action.type === INIT || action.type === UPDATE) {
        console.log('object');
      const storageValue = localStorage.getItem("appointment");
      if (storageValue) {
        return JSON.parse(storageValue); 
      }
    }
    const nextState = reducer(state, action);
    localStorage.setItem("appointment", JSON.stringify(nextState));
    return nextState;
  };
};
