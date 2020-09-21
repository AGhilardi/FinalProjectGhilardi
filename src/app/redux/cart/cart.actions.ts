import { createAction, props } from '@ngrx/store';
import { Game } from '../../core/model/game.interface';

export const initCart = createAction('[Cart] init', props<{currentCart: Game[]}>());
export const insertInCart = createAction('[Cart] insert', props<{game: Game}>());
export const removeFromCart = createAction('[Cart] remove', props<{id: number}>());
export const retrieveAllCart =  createAction('[Cart] retrieve all');
export const postCart = createAction('[Cart] add to server', props<{game: Game}>());
export const updateTot =createAction('[Cart] update tot',props<{tot: number}>());