import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Egasconstants } from '../egasconstants';

/**
 * 			    @author: Dipankar Mukherjee        
 *          @version: 1.0   
 *          Description: It is a component that provides the method for viewing 
 *          			       details of the customers by city                   
 *          Created at: 22-JUNE-2021
 
 */

@Component({
  selector: 'app-viewcustomerbycity',
  templateUrl: './viewcustomerbycity.component.html',
  styleUrls: ['./viewcustomerbycity.component.css']
})
export class ViewcustomerbycityComponent implements OnInit {

  city:string;
  customers:Customer[]=[];
  msg:string;

  searchstr:string;
  sort:string;

  constructor(public customerservice:CustomerService) { }

  ngOnInit() {
  }

  setField(str:string){
    this.sort=str;
  }
  
  viewbycity():void{
    if(this.city==undefined || this.city==null ){
      this.msg=Egasconstants.ENTER_PROPER_CITY;
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
