import { Store } from '@ngrx/store';
import { AuthService } from './../../../core/services/auth.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/model/user.interface';
import { addNewUser, saveCurrentUser } from 'src/app/redux/users/users.actions';

@Injectable()
export class LoginService {

  constructor(private router: Router, private authService: AuthService, private store: Store) { }

  executeLogin(username: string,password:string) {
    this.authService.doLogin(username).subscribe((users: User[]) => {
      if (users && users.length > 0 && users.find(e => e.password === password) != undefined) {
        sessionStorage.setItem("user", JSON.stringify(users[0]));
        this.store.dispatch(saveCurrentUser({user: users[0]}));
        this.router.navigateByUrl("/home");
      }else{
        alert("Login errata");
      }
    }, ()=>{
      alert("Login in errore");
    });

  }
  executeSignUp(user:User){
    this.store.dispatch(addNewUser({user}));
    alert("Registrazione effettuata");
    this.router.navigateByUrl("/home");
  }
}