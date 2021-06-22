import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Cylinder } from '../cylinder';

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

  constructor(public customerservice:CustomerService) { }

  ngOnInit() {
    this.customerservice.viewAllCylinder().subscribe(data=>this.cylinders=data);
  }

  viewbycylindertype():void{
    if(this.cylindertype==undefined || this.cylindertype==null ){
      this.msg="Enter the cylinder type";
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
