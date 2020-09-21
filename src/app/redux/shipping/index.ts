import { ShippingState } from "./shipping.reducer";
import { createSelector } from '@ngrx/store';
import { AppState } from '..';

export const selectShippingState = (state: AppState) => state.shippingState;

export const selectShipping = createSelector(
    selectShippingState,
    (state: ShippingState) => state.shipping
);