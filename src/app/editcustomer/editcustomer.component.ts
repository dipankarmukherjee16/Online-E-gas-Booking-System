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
  customers:Customerdto;
  msg:string; 
  errorMsg:string;
  cylinders:Cylinder[]=[];
  userName=this.customerservice.userName;
  constructor(public customerservice:CustomerService, public route:ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{let cid:number =parseInt(params.get("id"));
    this.customerservice.viewCustomerByID(cid).subscribe(data=>this.customers=data);
    });

    this.customerservice.viewAllCylinder().subscribe(data=>this.cylinders = data);
  }

  edit(){
    this.customerservice.editCustomer(this.custid).subscribe(
      data=>{alert(data);this.router.navigateByUrl("/viewall")},
      error=>this.errorMsg = JSON.parse(error.error).message);
  }
}
