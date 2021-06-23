import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { SurrendercylinderService } from '../surrendercylinder.service';

@Component({
  selector: 'app-viewsurrenderedcustomerbyyear',
  templateUrl: './viewsurrenderedcustomerbyyear.component.html',
  styleUrls: ['./viewsurrenderedcustomerbyyear.component.css']
})
export class ViewsurrenderedcustomerbyyearComponent implements OnInit {

  year:number;
  customers:Customer[]=[];
  msg:string;

  constructor(public surrendercylinderservice:SurrendercylinderService) { }

  ngOnInit(): void {
  }

  viewbyyear():void{

    if(this.year==null){
      this.msg="Enter proper year";
      return;
    }
    this.surrendercylinderservice.viewSurrenderedCustomerByYear(this.year).subscribe(
      data=>{
        console.log(data);
        this.customers=data;
        this.msg=undefined;
      },
      error=>{
        console.log(error);
        this.msg=error.error.message;
        this.customers=undefined;
      }
    )
  }

}
