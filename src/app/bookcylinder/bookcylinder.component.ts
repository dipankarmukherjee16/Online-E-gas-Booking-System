import { Component, OnInit } from '@angular/core';
import { GasBooking } from '../gas-booking';
import { GasbookingService } from '../gasbooking.service';

@Component({
  selector: 'app-bookcylinder',
  templateUrl: './bookcylinder.component.html',
  styleUrls: ['./bookcylinder.component.css']
})
export class BookcylinderComponent implements OnInit {
  custid:number;
  gasbook:GasBooking= new GasBooking();
  msg:string;
  constructor(public gasbookingservice:GasbookingService) { }

  ngOnInit() {
  }

  book():void{
    this.gasbookingservice.bookcylinder(this.custid).subscribe(
      data=>{
        console.log(data);
        this.msg=data.message;
      },
      error=>{
        console.log(error);
        this.msg=error.error.message;
      }
    )
  }

}
