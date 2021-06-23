import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-linkaadhar',
  templateUrl: './linkaadhar.component.html',
  styleUrls: ['./linkaadhar.component.css']
})
export class LinkaadharComponent implements OnInit {
  customerid:number;
  aadharnumber:string;
  msg:string;
  constructor(public customerservice:CustomerService) { }

  ngOnInit() {
  }
  link():void{
    this.customerservice.linkAadhar(this.customerid,this.aadharnumber).subscribe(
      data=>{
        console.log(data);
        this.msg=data.message;
      },
      error=>{
        console.log(error);
        
    });
      
    
  }
}
