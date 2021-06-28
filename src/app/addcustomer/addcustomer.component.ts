import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { Customerdto } from '../customerdto';
import { Cylinder } from '../cylinder';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {
  customer:Customerdto=new Customerdto();
  cylinders:Cylinder[]=[];
  msg:string;
  errorMsg:string;
  errorMsgs:string;
  errors:string[];
  //msgflag:boolean;
  @ViewChild("frm")
  form:NgForm;
  

  constructor(public customerservice:CustomerService) { }

  ngOnInit() {
    this.customerservice.viewAllCylinder().subscribe(data=>this.cylinders = data);
  }

  // add():void{
  //   this.customerservice.addCustomer(this.customer).subscribe(
  //     data=>{
  //       console.log(data);
  //       this.msg=data.message;
  //       this.errorMsg=undefined;
  //       this.errorMsgs=undefined;
  //       this.customer=new Customerdto();
  //       this.form.reset;
       
  //     },
  //     error=>{
  //       console.log(error);
  //       this.errorMsg=error.error.message;
  //       this.errorMsgs=error.error.messages[0];
  //       this.msg=undefined;
      
  //     }
  //   );
  // }

  add(){
    this.customerservice.addCustomer(this.customer).subscribe(
      data=>{
        console.log(data);
        this.msg=data.message;
        this.errorMsg=undefined;
        this.errors=undefined;
        this.customer=new Customerdto();
        this.form.reset();
      },
      error=>{
        console.log(error);
        this.errorMsg=JSON.parse(error.error).message;
        this.msg=undefined;
        this.errors=JSON.parse(error.error).messages;
      }
    );
  }
}
