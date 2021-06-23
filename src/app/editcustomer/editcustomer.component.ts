import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customerdto } from '../customerdto';
import { Cylinder } from '../cylinder';

@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.css']
})
export class EditcustomerComponent implements OnInit {
  custid:number;
  customers:Customerdto=new Customerdto();
  customerResponse:any;
  msg:string;
  errorMsg:string;
  cylinders:Cylinder[]=[];
  userName=this.customerservice.userName;
  constructor(public customerservice:CustomerService, public route:ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{let cid:number =parseInt(params.get("customerid"));
     this.customerservice.viewCustomerByID(cid).subscribe(data=>{
      console.log(data); 
      this.customerResponse=data;
      this.customers.userName=this.customerResponse.userName;
      this.customers.email=this.customerResponse.email;
      this.customers.mobileNumber=this.customerResponse.mobileNumber;
      this.customers.aadharCard=this.customerResponse.aadharCard;
      this.customers.address=this.customerResponse.address;
      this.customers.city=this.customerResponse.city;
      this.customers.cylinderType=this.customerResponse.cylinder.cylinderType;
      this.custid=this.customerResponse.customerId;
    });
    });

    this.customerservice.viewAllCylinder().subscribe(data=>this.cylinders = data);
  }

  edit(){
    this.customerservice.editCustomer(this.custid, this.customers).subscribe(
      data=>{
        console.log(data);
        this.msg=data.message;
        this.errorMsg=undefined;
        //this.router.navigateByUrl("/viewcustomer/viewall")
      },
      error=>{
        console.log(error);
        this.errorMsg = JSON.parse(error.error).message;
        this.msg=undefined;
      });
  }
}
