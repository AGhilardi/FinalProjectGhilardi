import { Action, createReducer, on } from '@ngrx/store';
import { Game } from "../../core/model/game.interface";
import { initCart,insertInCart, removeFromCart } from '../cart/cart.actions';

export interface CartState {
    currentCart: Game[];
}

export const initialState: CartState = {
    currentCart: []
};

const cartReducerFun = createReducer(
    initialState,
    on(initCart, (state, { currentCart }) => ({ ...state, currentCart: currentCart })),
    on(insertInCart, (state, { game }) => ({ ...state, currentCart: [...state.currentCart, game] })),
    on(removeFromCart, (state, { id }) => ({ ...state, currentCart: state.currentCart.filter(item => item.id !== id) })),
)

export function cartReducer(state: CartState | undefined, action: Action) {
    return cartReducerFun(state, action);
}