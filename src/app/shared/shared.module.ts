  
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextComponent } from './input-text/input-text.component';
import { GamePreviewComponent } from './game-preview/game-preview.component'
@NgModule({
  declarations: [
    InputTextComponent,
    GamePreviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextComponent,
    GamePreviewComponent
  ]
})
export class SharedModule { }