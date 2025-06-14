import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user/user';
import { Databinding } from './databinding/databinding';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,User,Databinding,CommonModule],
  standalone:true,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angularendtoend';
}
