import { Component, OnInit } from '@angular/core';
import { GasBooking } from '../gas-booking';
import { GasbookingService } from '../gasbooking.service';

@Component({
  selector: 'app-viewstatus',
  templateUrl: './viewstatus.component.html',
  styleUrls: ['./viewstatus.component.css']
})
export class ViewstatusComponent implements OnInit {
  gasbookingid:number;
  bookingdetails:GasBooking;
  status:string;
  msg:string;
  errorMsg:string;
  constructor(public gasbookingservice:GasbookingService) { }

  ngOnInit() {
  }

  viewstatus():void{
    this.gasbookingservice.viewbookingstatus(this.gasbookingid).subscribe(
      data=>{
        console.log(data);
        this.bookingdetails=data;
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
