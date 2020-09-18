import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Game } from 'src/app/core/model/game.interface';
import { GamesFacadeService } from 'src/app/features/games/service/games-facade.service';

@Component({
  selector: 'app-customize-form',
  templateUrl: './customize-form.component.html',
  styleUrls: ['./customize-form.component.scss']
})
export class CustomizeFormComponent implements OnInit{

  @Input()
  game: Game;
  @Input()
  image:string;
  @Input()
  id: number;
  @Output()
  formSubmitEvent: EventEmitter<Game> = new EventEmitter();

  @Output()
  undoEvent: EventEmitter<Game> = new EventEmitter();

  gameForm: FormGroup;

  constructor(private fb: FormBuilder,private service:GamesFacadeService) {
    this.gameForm = this.fb.group({
      id: null,
      edition: ['', Validators.required],
      seasonPass:[''],
      keypass: ['', Validators.required],
      gift: ['',Validators.email],
    });
  }
  ngOnInit(): void {
   this.service.currentimg.subscribe(img=>this.image = img)
  }
  
  ngOnChanges(changes: SimpleChanges): void {
  }


  confirmChanges() {
    this.formSubmitEvent.emit(this.gameForm.value);
  }

  cancel() {
    this.undoEvent.emit(this.gameForm.value);
  }

}
