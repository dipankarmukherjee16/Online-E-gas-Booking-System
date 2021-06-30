import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../invoice.service';

/**
 *          @author: Moinak Majumder        
 *          @version: 1.0   
 *          Description: It is a component that provides the method for generating 
						             invoice by the admin for a given booking done by a customer
                         and inserts a invoice into the database
 *          Created at: 23-JUNE-2021
 */

@Component({
  selector: 'app-generateinvoice',
  templateUrl: './generateinvoice.component.html',
  styleUrls: ['./generateinvoice.component.css']
})
export class GenerateinvoiceComponent implements OnInit {
  gasbookingid:number;
  fare:number;
  msg:string;
  errormsg:string;
  msgflag:boolean;

  constructor(public invoiceservice:InvoiceService) { }

  ngOnInit() {
  }

  // geninvoice():void{
  //   this.invoiceservice.generateinvoice(this.gasbookingid,this.fare).subscribe(
  //     data=>{
  //       console.log(data);
  //       this.msg=data.message;
  //       this.msgflag=true;
  //     },
  //     error=>{
  //       console.log(error);
  //       this.msg=error.error.message;
  //       this.msgflag=false;
  //     }
  //   )
  // }

  geninvoice():void{
    this.invoiceservice.generateinvoice(this.gasbookingid,this.fare).subscribe(
      data=>{
        console.log(data);
        this.msg=data.message;
        this.errormsg=undefined;
      },
      error=>{
        console.log(error);
        this.errormsg=error.error.message;
        this.msg=undefined;
      }
    )
  }

}
