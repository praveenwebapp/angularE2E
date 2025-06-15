import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User {
  constructor(private router : Router){
    
  }


  loginData() {
    // user verification logic
    // this.router.navigateByUrl("structural-directive");
    this.router.navigate(['structural-directive']);
  }

}
