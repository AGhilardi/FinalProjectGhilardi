import { Component, Input, Output, EventEmitter, Injectable, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../../core/model/game.interface';

@Component({
  selector: 'app-game-preview',
  templateUrl: './game-preview.component.html',
  styleUrls: ['./game-preview.component.scss']
})
export class GamePreviewComponent {
   
  @Input()
  game: Game;

  @Output()
  detailEvent: EventEmitter<void> = new EventEmitter();

  constructor() { }
 
 
  detailClick() {
    this.detailEvent.emit();
  }
}
