import { goToGamesHome } from './../../features/games/redux/games-navigation.actions';
import { HttpCommunicationsService } from '../../core/http-communications/http-communications.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { addNewUser, saveCurrentUser,regUser } from './users.actions';
import { switchMap, map, concatMap, withLatestFrom, tap } from 'rxjs/operators';
import { Action, select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { User } from '../../core/model/user.interface';
import { getCurrentUser } from './index';
import { usersReducer } from './users.reducers';
import { Router } from '@angular/router';
@Injectable()
export class UsersEffect {
    constructor(private actions$: Actions, private store: Store,
        private httpCommunicationsService: HttpCommunicationsService,private router:Router) {
    }
    
    insertUser$ = createEffect(() => this.actions$.pipe(
        ofType(addNewUser),
        switchMap(action => this.httpCommunicationsService.retrievePostCall<User>("users", action.user).pipe(
            map( (user) => regUser({ user }))
        ))
    ))
    RegUser$ = createEffect(()=>this.actions$.pipe(
        ofType(regUser), map( (action) => saveCurrentUser({  user:action.user })),
        tap((action)=>{
        sessionStorage.setItem("utente",JSON.stringify(action.user));
        this.router.navigateByUrl('/home');}
        )))
       
        
}