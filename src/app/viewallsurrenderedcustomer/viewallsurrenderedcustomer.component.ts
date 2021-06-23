import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { SurrendercylinderService } from '../surrendercylinder.service';

@Component({
  selector: 'app-viewallsurrenderedcustomer',
  templateUrl: './viewallsurrenderedcustomer.component.html',
  styleUrls: ['./viewallsurrenderedcustomer.component.css']
})
export class ViewallsurrenderedcustomerComponent implements OnInit {

  customers:Customer[]=[];
  msg:string;
  currentpage:number=1;
  customersdisp:Customer[]=[];
  totalpages:number;

  constructor(public surrendercustomerservice:SurrendercylinderService) { }

  ngOnInit(): void {

    this.surrendercustomerservice.viewAllSurrenderedCustomer().subscribe(data=>{
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
