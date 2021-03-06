import { GameState } from './games/games.reducers';
import { UsersState, usersReducer } from './users/users.reducers';
import { gameReducer } from './games/games.reducers';
import { ActionReducerMap, createReducerFactory } from '@ngrx/store';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { cartReducer, CartState } from './cart/cart.reducers';
import { ShippingState,shippingReducer } from "./shipping/shipping.reducer";
export interface AppState {
    gameState: GameState;
    usersState: UsersState;
    router: RouterReducerState<any>;
    cartState:CartState;
    shippingState:ShippingState;
}

export const reducers: ActionReducerMap<AppState> = {
    gameState: gameReducer,
    usersState: usersReducer,
    router: routerReducer,
    cartState: cartReducer,
    shippingState: shippingReducer,
};