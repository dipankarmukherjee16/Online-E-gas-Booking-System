import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
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
