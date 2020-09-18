import { updateGame, postGame } from '../../../redux/games/games.actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Game } from 'src/app/core/model/game.interface';
import { GamePreviewComponent } from '../../../shared/game-preview/game-preview.component';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class GamesFacadeService {

  private imgsrc= new BehaviorSubject('img here')
  currentimg= this.imgsrc.asObservable();
  changeImg(img:string){
    this.imgsrc.next(img);
  }
  constructor(private router: Router, private store: Store) { }

  editGame(game: Game) {
    this.store.dispatch(updateGame({game}));
  }

  addGame(game: Game) {
    this.store.dispatch(postGame({game}));
  }

  goToTodosHome() {

    this.router.navigateByUrl('/home  ');
    
  }

  goToEdit(id: number) {  
    this.router.navigateByUrl('/home/edit/' + id);
    
  }


}