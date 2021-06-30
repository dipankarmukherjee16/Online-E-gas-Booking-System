import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Cylinder } from '../cylinder';
import { Egasconstants } from '../egasconstants';

 
/**
 *         @author: Dipankar Mukherjee        
           @version: 1.0   
           Description: It is a component that provides the method for viewing 
           			        details of customers by cylinder type                  
           Created at: 21-JUNE-2021
 */

@Component({
  selector: 'app-viewcustomerbycylindertype',
  templateUrl: './viewcustomerbycylindertype.component.html',
  styleUrls: ['./viewcustomerbycylindertype.component.css']
})
export class ViewcustomerbycylindertypeComponent implements OnInit {

  cylindertype:string;
  customers:Customer[]=[];
  cylinders:Cylinder[]=[];
  msg:string;

  searchstr:string;
  sort:string;

  constructor(public customerservice:CustomerService) { }

  ngOnInit() {
    this.customerservice.viewAllCylinder().subscribe(data=>this.cylinders=data);
  }

  setField(str:string){
    this.sort=str;
  }

  viewbycylindertype():void{
    if(this.cylindertype==undefined || this.cylindertype==null ){
      this.msg=Egasconstants.ENTER_PROPER_CYLINDER_TYPE;
      return;
    }
    this.customerservice.viewCustomerByCylinderType(this.cylindertype).subscribe(
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
    )
  }

}
