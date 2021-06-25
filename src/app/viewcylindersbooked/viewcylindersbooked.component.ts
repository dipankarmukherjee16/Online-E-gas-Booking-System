import { Component, OnInit } from '@angular/core';
import { GasBooking } from '../gas-booking';
import { GasbookingService } from '../gasbooking.service';

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
  ngOnInit() {
  }

  viewcylindersbooked():void{
    this.gasbookingservice.viewnoofcylindersbooked(this.year,this.custid).subscribe(
      data=>{
        console.log(data);
        this.bookingdetails=data;
        this.count=this.bookingdetails.length;
        
      },
      error=>{
        console.log(error);
        this.bookingdetails=undefined;
        this.msg=error.error.message;
        
        
      }
    )
  }

}
