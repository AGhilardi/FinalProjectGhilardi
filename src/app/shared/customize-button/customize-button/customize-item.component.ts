import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from 'src/app/core/model/game.interface';

@Component({
  selector: 'app-customize-button',
  templateUrl: './customize-button.component.html',
  styleUrls: ['./customize-button.component.scss']
})
export class CustomizeButtonComponent implements OnInit {

  @Input()
  game: Game;
  constructor() { }
  @Output()
  editEvent: EventEmitter<Game> = new EventEmitter();
  ngOnInit(): void {
  }
  editClick() {
    this.editEvent.emit(this.game);
  }
}
