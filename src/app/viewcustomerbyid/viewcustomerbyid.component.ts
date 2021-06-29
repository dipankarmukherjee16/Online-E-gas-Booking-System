import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Egasconstants } from '../egasconstants';

@Component({
  selector: 'app-viewcustomerbyid',
  templateUrl: './viewcustomerbyid.component.html',
  styleUrls: ['./viewcustomerbyid.component.css']
})
export class ViewcustomerbyidComponent implements OnInit {
  custid:number;
  customers:any=undefined;
  msg:string;

  constructor(public customerservice:CustomerService) { }

  ngOnInit() {
  }

  viewbyid():void{
    if(this.custid==undefined || this.custid==null ||this.custid<=0){
      this.msg=Egasconstants.ENTER_PROPER_ID;
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
