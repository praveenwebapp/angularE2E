import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structutal-directive',
  imports: [CommonModule, FormsModule],
  templateUrl: './structutal-directive.html',
  styleUrl: './structutal-directive.scss',
})
export class StructutalDirective {
  isChecked: boolean = false;
  isInputBox: boolean = false;

  input1: string = '';
  input2: string = '';

  onClick() {
    this.isChecked = !this.isChecked;
  }

  showField() {
    this.isInputBox = true;
  }

  hideField() {
    this.isInputBox = false;
  }
}
