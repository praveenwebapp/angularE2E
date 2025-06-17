import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Userform } from '../userform';

@Component({
  selector: 'app-template-driven-forms',
  imports: [CommonModule,FormsModule],
  templateUrl: './template-driven-forms.html',
  styleUrl: './template-driven-forms.scss'
})
export class TemplateDrivenForms {

  userObject : Userform = {};

onSubmit(userForm:NgForm){
  console.log(userForm.value);
}

ngOnInit(): void {
  // this.userObject = {
  //   firstName : "Rahul",
  //   lastName : "Verma",
  //   email : "rahul@gmail.com",
  //   pass : 12345,
  //   isCheck : true,
  // }
}

setValues(userForm:NgForm){
  let obj = {
    firstName : "Rahul",
    lastName : "Verma",
    email : "rahul@gmail.com",
    pass : 12345,
    isCheck : true,
  }
  userForm.setValue(obj);
}

patchValues(userForm:NgForm){
  let obj = {
    firstName : "Rahul",
    lastName : "Verma",
    email : "rahul@gmail.com",
  }
  userForm.control.patchValue(obj);
}

resetValues(userForm:NgForm){
  // userForm.reset();
  userForm.resetForm();
}


}
