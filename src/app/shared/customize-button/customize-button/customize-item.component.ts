import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from 'src/app/core/model/game.interface';

@Component({
  selector: 'app-customize-item',
  templateUrl: './customize-item.component.html',
  styleUrls: ['./customize-item.component.scss']
})
export class CustomizeButtonComponent implements OnInit {

  @Input()
  game: Game;
  constructor() { }
  @Output()
  editEvent: EventEmitter<Game> = new EventEmitter();
  ngOnInit(): void {
  }
  addToCart() {
    this.editEvent.emit(this.game);
  }
}
