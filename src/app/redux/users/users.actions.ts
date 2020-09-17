import { User } from './../../core/model/user.interface';
import { createAction, props } from '@ngrx/store';

export const saveCurrentUser = createAction('[Users] save current', props<{user: User}>());
export const addNewUser=createAction('[User] add new user', props<{user: User}>());
export const regUser=createAction('[User] reg User', props<{user: User}>());