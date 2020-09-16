import { Injectable } from '@angular/core';
import { HttpCommunicationsService } from '../http-communications/http-communications.service';
import { Game } from '../model/game.interface';
import { Observable } from 'rxjs';
import { CoreModule } from '../core.module';

@Injectable()
export class GamesServerService {

  constructor(private httpCommunications: HttpCommunicationsService) { }

  retrieveAllGames(): Observable<Game[]>{
    return this.httpCommunications.retrieveGetCall<Game[]>("todos");
  }

  retrieveGameById(id: number): Observable<Game>{
    return this.httpCommunications.retrieveGetCall<Game>("todos/"+id);
  }

  updateGame(todo: Game): Observable<Game[]>{
    return this.httpCommunications.retrievePutCall("todos/"+todo.id, todo);
  }
  addGame(todo:Game): Observable<Game[]>{
    return this.httpCommunications.retrievePostCall("todos/",todo);
  }
}
