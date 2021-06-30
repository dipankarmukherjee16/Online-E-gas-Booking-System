import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { Egasconstants } from '../egasconstants';
import { SurrendercylinderService } from '../surrendercylinder.service';

/**
 * 			    @author: Debabrata Deb        
 *          @version: 1.0   
 *          Description: It is a component that provides the method for viewing 
 *          			       details of the surrendered customers by year                   
 *          Created at: 22-JUNE-2021
 
 */

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
      this.msg=Egasconstants.ENTER_PROPER_YEAR;
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
