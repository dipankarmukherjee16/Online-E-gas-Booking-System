import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Cylinder } from '../cylinder';
import { CylindertypeService } from '../cylindertype.service';

/**
 *        @author: Debabrata Deb       
          @version: 1.0   
          Description: It is a component that provides the method for viewing 
          			       details of all the cylinder types            
          Created at: 24-JUNE-2021
 */

@Component({
  selector: 'app-viewcylindertypes',
  templateUrl: './viewcylindertypes.component.html',
  styleUrls: ['./viewcylindertypes.component.css']
})
export class ViewcylindertypesComponent implements OnInit {

  cylinders:Cylinder[]=[];
  msg:string;
  currentpage:number=1;
  cylindersdisp:Cylinder[]=[];
  totalpages:number;

  constructor(public customerservice:CustomerService) { }

  ngOnInit() {

    this.customerservice.viewAllCylinder().subscribe(data=>{this.cylinders=data
      let endrow:number = this.currentpage*3;
      let startrow:number = endrow-3;
      this.cylindersdisp=this.cylinders.slice(startrow, endrow);
      this.totalpages = Math.ceil(this.cylinders.length/3.0);
    });

  }

  
  previous():void{
     --this.currentpage;
     let endrow:number = this.currentpage*3;
       let startrow:number = endrow-3;
       this.cylindersdisp=this.cylinders.slice(startrow, endrow);
   }

   next():void{
     ++this.currentpage;
     let endrow:number = this.currentpage*3;
     let startrow:number = endrow-3;
     this.cylindersdisp=this.cylinders.slice(startrow, endrow);
   }


}
