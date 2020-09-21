import { Action, createReducer, on } from "@ngrx/store";
import { Shipping } from "../../core/model/shipping.interface";
import { initShipping } from "./shipping.action";
export interface ShippingState{
    shipping:Shipping;
}
export const initialState: ShippingState = {
    shipping:{name:"",surname:"",city:"",CAP:24060,cell:"",info:"",adress:"",number:3}
};
const shippingReducerFun = createReducer(
    initialState,
    on(initShipping, (state, { shipping }) => ({ ...state, shipping: shipping })),
)
export function shippingReducer(state: ShippingState | undefined, action: Action) {
    return shippingReducerFun(state, action);
}