import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { last, map, switchMap } from 'rxjs/operators';
import { Game } from 'src/app/core/model/game.interface';
import { goToGamesHome } from 'src/app/features/games/redux/games-navigation.actions';
import { GamesFacadeService } from 'src/app/features/games/service/games-facade.service';
import { selectLastCart } from 'src/app/redux/cart';
import { insertInCart } from 'src/app/redux/cart/cart.actions';
import { getCurrentNavigatedGame, getGameById } from 'src/app/redux/games';

@Component({
  selector: 'app-customize-form',
  templateUrl: './customize-form.component.html',
  styleUrls: ['./customize-form.component.scss']
})
export class CustomizeFormComponent implements OnInit{
  game:Game;
  lastgame:Game;
  @Input()
  get img(): Observable<string>
  {
    return this.store.pipe(
      select(getGameById,{id:parseInt(this.router.url.slice(-1))}),
      map(game=> game.img)
    );
  };
  @Input()
  image:string;
  @Input()
  id: number;
  @Output()
  formSubmitEvent: EventEmitter<Game> = new EventEmitter();

  @Output()
  undoEvent: EventEmitter<Game> = new EventEmitter();

  gameForm: FormGroup;
  constructor(private fb: FormBuilder,private service:GamesFacadeService,private store:Store,private router:Router) {
    this.gameForm = this.fb.group({
      edition: ['', Validators.required],
      seasonPass:[''],
      keypass: ['', Validators.required],
      gift: ['',Validators.email],
    });
      this.store.pipe(
      select(getGameById,{id:parseInt(this.router.url.slice(-1))}),
    ).subscribe(game=>this.game=game);
      this.store.pipe(
      select(selectLastCart),
    ).subscribe(lastgame=>this.lastgame=lastgame);
  }
  ngOnInit(): void {
}
  
  ngOnChanges(changes: SimpleChanges): void {
  }


  confirm() {
    let game:Game=this.gameForm.value;
    Object.assign(game,this.game);
    if (this.lastgame===null)
    {
      game.id=0;
    }
    else{
      let incrementalId:number=this.lastgame.id;
      incrementalId++;
    game.id=incrementalId;
    }
    let min = Math.ceil(0);
    let max = Math.floor(100);
    game.price= Math.floor(Math.random() * (max - min + 1)) + min;
    this.store.dispatch(insertInCart({game}));
    this.router.navigateByUrl("home");
  }

  cancel() {
    this.router.navigateByUrl("home");
  }

}
