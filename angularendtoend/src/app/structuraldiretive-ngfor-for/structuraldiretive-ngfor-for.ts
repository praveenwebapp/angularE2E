import { Component } from '@angular/core';

@Component({
  selector: 'app-structuraldiretive-ngfor-for',
  imports: [],
  templateUrl: './structuraldiretive-ngfor-for.html',
  styleUrl: './structuraldiretive-ngfor-for.scss'
})
export class StructuraldiretiveNgforFor {
employees : any[] = [
    {empName:'John',empNumber:101 , empEmail:'john@gmail.com', empDept:'IT'},
    {empName:'Bob',empNumber:102 , empEmail:'bob@gmail.com', empDept:'HR'},
    {empName:'Peter',empNumber:103 , empEmail:'peter@gmail.com', empDept:'QA'},
  ]

  companyList : string[] = ['Amazon' , 'tcs' , 'optum' , 'uhg' ,'accenture' , 'techmahindra','cleio','IBM' , 'Wipro'];
  // companyList : string[] = ['Amazon' , 'tcs' , 'optum' , 'uhg' ,'accenture' , 'techmahindra','cleio','IBM' , 'Wipro'];

}
