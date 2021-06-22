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

  customers:Customerdto;
  msg:string;
  errorMsg:string;
  cylinders:Cylinder[]=[];
  userName=this.customerservice.userName;
  constructor(public customerservice:CustomerService, public route:ActivatedRoute, public router: Router) { }

  ngOnInit() {
  //   this.route.paramMap.subscribe(params=>{let eid:number =parseInt(params.get("id"));
  //     this.customerservice.viewCustomerByID(eid).subscribe(data=>this.customers=data);
  // });

  //     this.customerservice.viewdepts().subscribe(data=>this.depts = data);
  }

}
