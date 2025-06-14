import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-databnnding',
  imports: [CommonModule ,  FormsModule],
  standalone:true,
  templateUrl: './databinding.html',
  styleUrl: './databinding.scss'
})
export class Databinding {


  learning : string = "lear Angular"

  Course : string = " with Praveen"

  value : string='Learn Angular with Praveen'
  image:string="https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png"

  random :string =''
onChange(){

  alert("country Submitted")
}
onClick(){

  alert("changes changed")
}


}
