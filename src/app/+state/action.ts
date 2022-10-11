import { createAction ,props} from '@ngrx/store'




export const submit =  createAction(
    '[Submit] Add',props<{pol:string | null,doc:string,date:string | null}>()
)

