import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { Customerdto } from '../customerdto';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {
  customer:Customerdto=new Customerdto();
  msg:string;
  msgflag:boolean;
  @ViewChild("frm")
  form:NgForm;

  constructor(public customerservice:CustomerService) { }

  ngOnInit() {
  }

  add():void{
    this.customerservice.addCustomer(this.customer).subscribe(
      data=>{
        console.log(data);
        this.msg=data.message;
        this.form.reset;
        this.msgflag=true;
      },
      error=>{
        console.log(error);
        this.msg=error.error.messages[0];
        this.msgflag=false;
      }
    );
  }

}
