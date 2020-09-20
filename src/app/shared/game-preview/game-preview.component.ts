import { Component, Input, Output, EventEmitter, Injectable, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { removeFromCart } from 'src/app/redux/cart/cart.actions';
import { gameReducer } from 'src/app/redux/games/games.reducers';
import { Game } from '../../core/model/game.interface';

@Component({
  selector: 'app-game-preview',
  templateUrl: './game-preview.component.html',
  styleUrls: ['./game-preview.component.scss']
})
export class GamePreviewComponent {
   
  @Input()
  game: Game;
  get gamepass():string{
    if (this.game.pass===true){
      return "yes"
    }
    else{
      return "no"
    }
  }
  @Output()
  removeEvent: EventEmitter<void> = new EventEmitter();

  constructor(private store:Store) { }
 
 
  deleteFromCart() {
    this.removeEvent.emit();
  }
}
