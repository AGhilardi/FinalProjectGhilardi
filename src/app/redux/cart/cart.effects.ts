import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpCommunicationsService } from '../../core/http-communications/http-communications.service';
import { insertInCart, postCart } from "./cart.actions";
import { switchMap } from "rxjs/operators";
import { goToGamesHome } from './../../features/games/redux/games-navigation.actions';
@Injectable()
export class CartEffect {
 
    constructor(private actions$: Actions, private store: Store,
        private httpCommunicationsService: HttpCommunicationsService) {
    }
}