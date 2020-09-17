import { Store } from '@ngrx/store';
import { AuthService } from './../../../core/services/auth.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/model/user.interface';
import { addNewUser, saveCurrentUser } from 'src/app/redux/users/users.actions';

@Injectable()
export class RegService {

  constructor(private router: Router, private authService: AuthService, private store: Store) { 

  }
  executeSignUp(user:User){
    this.store.dispatch(addNewUser({user}));
    alert("Registrazione effettuata");
    this.router.navigateByUrl("/home");
  }
}