import { state } from "@angular/animations";
import { createSelector } from "@ngrx/store";
import { ApState } from "./ap.model";
import { TodoState } from "./reducer";

 export const selectTodos = (state: ApState) => state.appointment;
export const selectAllTodos = createSelector(
  selectTodos,
  (state: TodoState) => {state.appointment}
); 