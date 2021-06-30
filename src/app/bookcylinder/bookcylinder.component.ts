import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { GasBooking } from '../gas-booking';
import { GasbookingService } from '../gasbooking.service';

/**
 *          @author: Moinak Majumder        
 *          @version: 1.0   
 *          Description: It is a component that provides the method for booking 
						             a gas cylinder by the customer and inserts details into
                         database
 *          Created at: 23-JUNE-2021
 */

@Component({
  selector: 'app-bookcylinder',
  templateUrl: './bookcylinder.component.html',
  styleUrls: ['./bookcylinder.component.css']
})
export class BookcylinderComponent implements OnInit {
  custid:number;
  gasbook:GasBooking= new GasBooking();
  msg:string;
  errormsg:string;
  constructor(public gasbookingservice:GasbookingService) {
    this.custid=parseInt(localStorage.getItem("userId"));
   }

  ngOnInit() {
  }


  book():void{
   
    this.gasbookingservice.bookcylinder(this.custid).subscribe(
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
