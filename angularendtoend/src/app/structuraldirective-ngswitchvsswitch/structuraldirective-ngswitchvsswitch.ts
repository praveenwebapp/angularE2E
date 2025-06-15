import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structuraldirective-ngswitchvsswitch',
  imports: [CommonModule],
  templateUrl: './structuraldirective-ngswitchvsswitch.html',
  styleUrl: './structuraldirective-ngswitchvsswitch.scss'
})
export class StructuraldirectiveNgswitchvsswitch {


   grade: number = 0; 
 
  set(x:number){
    this.grade = x;
  }
}
