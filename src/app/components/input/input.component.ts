import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    }
  ]
})
export class InputComponent implements ControlValueAccessor{
  value: string = "";
  @Input() label!: string;
  @Input() type = 'text'; // set default type be text
  focused: boolean = false;
  constructor() { }
  
  onBlur(event: any) {
    const value = event.target.value;

    if (!value) {
      this.focused = false;
    }
  }

  writeValue(value: string): void {
    this.value = value ? value : ''
    this.focused = false;
  }
  registerOnChange(event: any): void {
    if(event.target){
      this.value = event.target.value;
    }
  }
  registerOnTouched(fn: any): void {
  
  }
  setDisabledState?(isDisabled: boolean): void {
    
  }

}
