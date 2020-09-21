import { updateGame, postGame } from '../../../redux/games/games.actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Game } from 'src/app/core/model/game.interface';
import { GamePreviewComponent } from '../../../shared/game-preview/game-preview.component';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class GamesFacadeService {
  private game:Game={id:1,title:"",description:"",year:2,users:[],img:"",edition:"",pass:false,key:"",gift:"",price:22};
  private imgsrc= new BehaviorSubject('img here');
  private gamesrc=new BehaviorSubject(this.game);
  currentimg= this.imgsrc.asObservable();
  currentgame= this.gamesrc.asObservable();
  changeImg(img:string){
    this.imgsrc.next(img);
  }
  changeGame(game:Game){
    this.gamesrc.next(game);
  }
  constructor(private router: Router, private store: Store,) { }

  editGame(game: Game) {
    this.store.dispatch(updateGame({game}));
  }

  addGame(game: Game) {
    this.store.dispatch(postGame({game}));
  }

  goToGamesHome() {

    this.router.navigateByUrl('/home  ');
    
  }

  goToEdit(id: number) {  
    this.router.navigateByUrl('/home/edit/' + id);
    
  }


}