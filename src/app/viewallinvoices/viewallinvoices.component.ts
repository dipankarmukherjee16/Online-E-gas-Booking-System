import { Component, OnInit } from '@angular/core';
import { Invoice } from '../invoice';
import { InvoiceService } from '../invoice.service';

/**
 *          @author: Moinak Majumder        
 *          @version: 1.0   
 *          Description: It is a component that provides the method for viewing 
						              list of all invoices by the admin
 *          Created at: 26-JUNE-2021
 */

@Component({
  selector: 'app-viewallinvoices',
  templateUrl: './viewallinvoices.component.html',
  styleUrls: ['./viewallinvoices.component.css']
})
export class ViewallinvoicesComponent implements OnInit {

  constructor(public invoiceservice:InvoiceService) { }
  invoices:Invoice[]=[];
  msg:string;
  ngOnInit() {
    this.invoiceservice.getallinvoices().subscribe(
      data=>{
        console.log(data);
        this.invoices=data;
        this.msg=undefined;
      },
      error=>{
        console.log(error);
        this.invoices=undefined;
        this.msg=error.error.message;
      }
    )
  }


}
