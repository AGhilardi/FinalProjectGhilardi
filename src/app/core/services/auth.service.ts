import { Injectable } from '@angular/core';
import { HttpCommunicationsService } from '../http-communications/http-communications.service';
import { Observable } from 'rxjs';
import { User } from '../model/user.interface';

@Injectable()
export class AuthService {

  constructor(private httpCommunications: HttpCommunicationsService) { }

  doLogin(username: string): Observable<User[]>{
    return this.httpCommunications.retrieveGetCall<User[]>("users", {username});
  }
}