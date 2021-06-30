import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

/**
 *        @author: Enakshi Das       
          @version: 1.0   
          Description: It is a component that provides the method for viewing 
          			       details of all the customers            
          Created at: 21-JUNE-2021
 */

@Component({
  selector: 'app-viewallcustomer',
  templateUrl: './viewallcustomer.component.html',
  styleUrls: ['./viewallcustomer.component.css']
})
export class ViewallcustomerComponent implements OnInit {
  customers:Customer[]=[];
  msg:string;
  currentpage:number=1;
  customersdisp:Customer[]=[];
  totalpages:number;

 

  constructor(public customerService:CustomerService) { }

  ngOnInit() {
    this.customerService.viewAllCustomer().subscribe(data=>{
      this.customers=data;
      let endrow:number = this.currentpage*3;
      let startrow:number = endrow-3;
      this.customersdisp=this.customers.slice(startrow, endrow);
      this.totalpages = Math.ceil(this.customers.length/3.0);
    });
  }

  previous():void{
     --this.currentpage;
     let endrow:number = this.currentpage*3;
       let startrow:number = endrow-3;
       this.customersdisp=this.customers.slice(startrow, endrow);
   }

   next():void{
     ++this.currentpage;
     let endrow:number = this.currentpage*3;
     let startrow:number = endrow-3;
     this.customersdisp=this.customers.slice(startrow, endrow);
   }

}
