import { User } from './../../core/model/user.interface';
import { createAction, props } from '@ngrx/store';

export const saveCurrentUser = createAction('[Users] save current', props<{user: User}>());
export const addNewUser=createAction('[User] add user', props<{user: User}>());