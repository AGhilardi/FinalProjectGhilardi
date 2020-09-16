import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { ROUTER_REQUEST, ROUTER_NAVIGATED } from '@ngrx/router-store';
import { tap } from 'rxjs/operators';

@Injectable()
export class RouterEffects {
    private timestamp: number;
    startNavigation$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(ROUTER_REQUEST),
        tap(route => {
            this.timestamp = new Date().getTime();
            console.log("start navigation")
        })
    ), { dispatch: false });

    endNavigation$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(ROUTER_NAVIGATED),
        tap(route => {
            const endTimestamp = new Date().getTime();

            console.log("end navigation, in: " + (endTimestamp - this.timestamp))
        })
    ), { dispatch: false });

    constructor(private actions$: Actions) {
    }
}