import { getCurrentUser } from 'src/app/redux/users';
import { goToGamesHome } from './../../features/games/redux/games-navigation.actions';
import { HttpCommunicationsService } from '../../core/http-communications/http-communications.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { retrieveAllGames, initGames, updateGame, editGame, postGame, insertGame } from './games.actions';
import { switchMap, map, concatMap, withLatestFrom } from 'rxjs/operators';
import { Game } from 'src/app/core/model/game.interface';
import { goToDetail } from 'src/app/features/games/redux/games-navigation.actions';
import { Action, select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

@Injectable()
export class GamesEffect {

    retrieveAllGames$: Observable<Action> = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllGames),
        switchMap(() => this.httpCommunicationsService.retrieveGetCall<Game[]>("games").pipe(
            map(games => initGames({ games }))
        ))
    ));

    updateGame$ = createEffect(() => this.actions$.pipe(
        ofType(updateGame),
        switchMap(action => this.httpCommunicationsService.retrievePutCall<Game>("games/" + action.game.id, action.game).pipe(
            switchMap(game => [editGame({ game }), goToDetail({ id: game.id })])
        ))
    ));

    insertGame$ = createEffect(() => this.actions$.pipe(
        ofType(postGame),
        withLatestFrom(this.store.pipe(select(getCurrentUser))),
        map(([action, user]) => ({
            ...action.game,
            users: [user.username]
        })),
        switchMap(game => this.httpCommunicationsService.retrievePostCall<Game>("games", game).pipe(
            switchMap(game => [insertGame({ game }), goToGamesHome()])
        ))
    ))


    constructor(private actions$: Actions, private store: Store,
        private httpCommunicationsService: HttpCommunicationsService) {
    }
}