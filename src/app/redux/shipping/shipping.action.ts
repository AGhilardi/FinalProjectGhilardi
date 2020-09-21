import { createAction, props } from "@ngrx/store";
import { Shipping } from "../../core/model/shipping.interface";

export const initShipping = createAction('[Shipping] init', props<{shipping: Shipping}>());