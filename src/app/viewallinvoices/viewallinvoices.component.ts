import { Component, OnInit } from '@angular/core';
import { Invoice } from '../invoice';
import { InvoiceService } from '../invoice.service';

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
