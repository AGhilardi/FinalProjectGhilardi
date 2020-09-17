import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Game } from 'src/app/core/model/game.interface';

@Component({
  selector: 'app-customize-form',
  templateUrl: './customize-form.component.html',
  styleUrls: ['./customize-form.component.scss']
})
export class CustomizeFormComponent implements OnInit {

  @Input()
  game: Game;

  @Output()
  formSubmitEvent: EventEmitter<Game> = new EventEmitter();

  @Output()
  undoEvent: EventEmitter<Game> = new EventEmitter();

  gameForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.gameForm = this.fb.group({
      id: null,
      title: ['', Validators.required],
      description: ['', Validators.required],
      steps: this.fb.array([])
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['game'] && this.game != null) {
      this.stepsControl.clear();
      this.stepsArray.forEach(step => {
        this.stepsControl.push(this.fb.group({
          id: step.id,
          done: step.done,
          title: [step.title, Validators.required]
        }));
      });
      this.todoForm.patchValue({
        id: this.todo.id,
        title: this.todo.title,
        description: this.todo.description
      })
    }
  }

  addStepToForm() {
    this.stepsArray.push({
      done: false,
      title: '',
      id: this.stepsArray.length
    });
    this.stepsControl.push(this.fb.group({
      done: false,
      title: ['', Validators.required]
    }));
  }

  confirmChanges() {
    this.formSubmitEvent.emit(this.todoForm.value);
  }

  cancel() {
    this.undoEvent.emit(this.todoForm.value);
  }

}
