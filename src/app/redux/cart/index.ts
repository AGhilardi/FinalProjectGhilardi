import { CartState } from './cart.reducers';
import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { Params } from '@angular/router';
import { selectRouteParams } from '../router';

export const selectCartState = (state: AppState) => state.cartState;
export const selectCart = createSelector(
    selectCartState,
    (state: CartState) => state.currentCart
);

export const selectLastCart = createSelector(
    selectCartState,
    (state:CartState) => state.currentCart.length > 0 ? state.currentCart[state.currentCart.length-1] : null
)