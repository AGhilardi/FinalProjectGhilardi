import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormSelectComponent),
      multi: true
    }]
})
export class FormSelectComponent implements OnInit {
  
  @Input()
  label: string;
  @Input()
  value: string;

  inputValue: string;
  onChange: (value) => void;
  onTouched: () => void;
  writeValue(value: string): void {
    this.inputValue = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setInputValue(value: string){
    this.inputValue = value;
    this.onChange(this.inputValue);
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
