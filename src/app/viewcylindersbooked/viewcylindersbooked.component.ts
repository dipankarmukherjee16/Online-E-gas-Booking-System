import { Component, OnInit } from '@angular/core';
import { GasBooking } from '../gas-booking';
import { GasbookingService } from '../gasbooking.service';

/**
 *          @author: Enakshi Das        
 *          @version: 1.0   
 *          Description: It is a component that provides the method for viewing 
						             the no. of cylinders booked by a customer in a given year
 *          Created at: 24-JUNE-2021
 */

@Component({
  selector: 'app-viewcylindersbooked',
  templateUrl: './viewcylindersbooked.component.html',
  styleUrls: ['./viewcylindersbooked.component.css']
})
export class ViewcylindersbookedComponent implements OnInit {

  constructor(public gasbookingservice:GasbookingService) { }
  year:number;
  custid:number;
  count:number;
  bookingdetails:GasBooking[]=[];
  msg:string;
  errorMsg:string;
  ngOnInit() {
  }

  viewcylindersbooked():void{
    this.gasbookingservice.viewnoofcylindersbooked(this.year,this.custid).subscribe(
      data=>{
        console.log(data);
        this.msg=data.message;
        this.errorMsg=undefined;

      },
      error=>{
        console.log(error);
        this.errorMsg=error.error.message;
        this.msg=undefined;
      }
    )
  }

}
