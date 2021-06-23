import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { SurrendercylinderService } from '../surrendercylinder.service';

@Component({
  selector: 'app-surrendercustomer',
  templateUrl: './surrendercustomer.component.html',
  styleUrls: ['./surrendercustomer.component.css']
})
export class SurrendercustomerComponent implements OnInit {

  custid:number;
  msg:string;
  customers:any=undefined;


  constructor(public surrenderservice:SurrendercylinderService, public customerservice:CustomerService) { }

  ngOnInit(): void {
  }

  surrenderCylinder():void{

    // if(this.custid==undefined || this.custid==null ||this.custid<=0){
    //   this.msg="Enter the Customer ID greater than 0";
    //   return;
    // }
    this.surrenderservice.surrenderCylinder(this.custid).subscribe(
    data=>{
      console.log(data);
      this.msg=data.message;
    },
    error=>{
      console.log(error);
      this.msg=error.error.message;
    });
  }

  viewbyid():void{
    if(this.custid==undefined || this.custid==null ||this.custid<=0){
      this.msg="Enter the employee ID greater than 0";
      return;
    }
    this.customerservice.viewCustomerByID(this.custid).subscribe(
    data=>{
      console.log(data);
      this.customers=data;
      this.msg=undefined;
    },
    error=>{
      console.log(error);
      this.msg=error.error.message;
      this.customers=undefined;
    });
  }


}
