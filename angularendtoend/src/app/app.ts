import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user/user';
import { Databinding } from './databinding/databinding';
import { CommonModule } from '@angular/common';
import { Directives } from './directives/directives';
import { StructutalDirective } from './structutal-directive/structutal-directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,User,Databinding,CommonModule,Directives,StructutalDirective],
  standalone:true,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angularendtoend';
}
