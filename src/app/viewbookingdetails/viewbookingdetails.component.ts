import { Component, OnInit } from '@angular/core';
import { Egasconstants } from '../egasconstants';
import { GasBooking } from '../gas-booking';
import { GasbookingService } from '../gasbooking.service';

/**
 *          @author: Moinak Majumder        
 *          @version: 1.0   
 *          Description: It is a component that provides the method for viewing 
						             the booking details of a customer for a given customer id
 *          Created at: 21-JUNE-2021
 */

@Component({
  selector: 'app-viewbookingdetails',
  templateUrl: './viewbookingdetails.component.html',
  styleUrls: ['./viewbookingdetails.component.css']
})
export class ViewbookingdetailsComponent implements OnInit {
  bookingdetails:GasBooking[]=[];
  custid:number;
  msg:string;

  constructor(public gasbookingservice: GasbookingService) {
   }

  ngOnInit() {
    
    }

    
    viewdetails():void{
      // if(this.custid==undefined || this.custid==null ||this.custid<=0){
      //   this.msg=Egasconstants.ENTER_PROPER_ID;
      //   return;
      // }
      this.gasbookingservice.viewbookingdetails(this.custid).subscribe(
        data=>{
          console.log(data);
          this.bookingdetails=data;
          this.msg=undefined;
        },
        error=>{
          console.log(error);
          this.bookingdetails=undefined;
          this.msg=error.error.message;
        }
      );
    }



}
