import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../invoice.service';

/**
 *          @author: Moinak Majumder        
 *          @version: 1.0   
 *          Description: It is a component that provides the method for updating 
						             the booking status and invoice status by the admin after 
                         cylindered is delivered
 *          Created at: 24-JUNE-2021
 */

@Component({
  selector: 'app-cylinderdelivered',
  templateUrl: './cylinderdelivered.component.html',
  styleUrls: ['./cylinderdelivered.component.css']
})
export class CylinderdeliveredComponent implements OnInit {
  invoiceid:number;
  msg:string;
  errormsg:string;
  constructor(public invoiceservice:InvoiceService) { }

  ngOnInit() {
  }

  cyldelivered():void{
    this.invoiceservice.cylinderdelivered(this.invoiceid).subscribe(
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
