import { Action, createReducer, on } from '@ngrx/store';
import { Game } from "../../core/model/game.interface";
import { initCart,insertInCart, removeFromCart, updateTot } from '../cart/cart.actions';

export interface CartState {
    currentCart: Game[];
    total:number;
}

export const initialState: CartState = {
    currentCart: [],
    total:0
};

const cartReducerFun = createReducer(
    initialState,
    on(initCart, (state, { currentCart }) => ({ ...state, currentCart: currentCart })),
    on(insertInCart, (state, { game }) => ({ ...state, currentCart: [...state.currentCart, game] })),
    on(removeFromCart, (state, { id }) => ({ ...state, currentCart: state.currentCart.filter(item => item.id !== id) })),
    on(updateTot, (state, { tot }) => ({ ...state, total:tot })),
)

export function cartReducer(state: CartState | undefined, action: Action) {
    return cartReducerFun(state, action);
}