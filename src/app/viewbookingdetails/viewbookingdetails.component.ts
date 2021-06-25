import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GasBooking } from '../gas-booking';
import { GasbookingService } from '../gasbooking.service';

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
