import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { CustomPipe  } from "../pipes/custom-pipe";
import { ImpurePipesPipe } from '../pipes/impure-pipes-pipe';
import { PurePipesPipe } from '../pipes/pure-pipes-pipe';

@Component({
  selector: 'app-buil-in-pipes',
  imports: [CommonModule, CustomPipe , ImpurePipesPipe , PurePipesPipe],
  templateUrl: './buil-in-pipes.html',
  styleUrl: './buil-in-pipes.scss' 
})
export class BuilInPipes {


   mobileNumber: any = null;

  angularPipes: string = "use pipes to format data in angular templates";
  personData = {
    name: 'John',
    age: 30,
    city: 'Mumbai'
  }

  currentDate: Date = new Date();

  items = of(['Apple', 'Banana', 'Mango']);

}
