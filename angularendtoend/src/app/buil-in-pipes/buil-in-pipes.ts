import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { CustomPipe } from "../pipes/custom-pipe";

@Component({
  selector: 'app-buil-in-pipes',
  imports: [CommonModule, CustomPipe],
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
