import { GamesFacadeService } from "../service/games-facade.service";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { goToDetail, goToGamesHome } from './games-navigation.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class GamesNavigationEffects {
    
    goToDetail$ = createEffect(() => this.actions$.pipe(
        ofType(goToDetail),
        tap(action => {
            this.gamesFacadeService.goToDetail(action.id);
        })
    ), { dispatch: false });

    goToGamesHome$ = createEffect(() => this.actions$.pipe(
        ofType(goToGamesHome),
        tap(() => {
            this.gamesFacadeService.goToTodosHome();
        })
    ), { dispatch: false });

    constructor(private actions$: Actions,
        private gamesFacadeService: GamesFacadeService) {
    }
}