import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-viewcustomerbycity',
  templateUrl: './viewcustomerbycity.component.html',
  styleUrls: ['./viewcustomerbycity.component.css']
})
export class ViewcustomerbycityComponent implements OnInit {

  city:string;
  customers:Customer[]=[];
  msg:string;
  constructor(public customerservice:CustomerService) { }

  ngOnInit() {
  }

  viewbycity():void{
    if(this.city==undefined || this.city==null ){
      this.msg="Enter the city name";
      return;
    }
    this.customerservice.viewCustomerByCity(this.city).subscribe(
      data=>{
        console.log(data);
        this.customers=data;
        this.msg=undefined;
      },
      error=>{
        console.log(error);
        this.msg=error.error.message;
        this.customers=undefined;
      }
    );
  }

  


}
