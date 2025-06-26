import { Component } from '@angular/core';
import { SharedData } from '../shared-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile {
  // below code for services & DI

  dummyData: any;
  isEligible: boolean;
  apiData: any;
  constructor(private _sharedData:SharedData) {
    this.dummyData = this._sharedData.userData;

    this.isEligible = this._sharedData.isEligibleForSubscription();
  }

  ngOnInit(): void {
    this.getData()
  }
  getData() {
    this._sharedData.getUserData().subscribe(res => {
      this.apiData = res;
    })
  }

  // userData = {
  //   id : 1,
  //   name : 'John',
  //   username : 'john',
  //   email : 'john@gmail.com' 
  // }

}
