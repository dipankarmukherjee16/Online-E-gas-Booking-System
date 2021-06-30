import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from './customer.service';
import { Egasconstants } from './egasconstants';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineE-gasBookingSystem';

  constructor(public storageservice:StorageService,public customerservice:CustomerService,public router:Router){}
  doLogout():void{
    this.customerservice.doLogout().subscribe(
      data=>{
        localStorage.removeItem("userinfo");
        this.storageservice.msg=Egasconstants.LOGOUT_MSG;
        this.storageservice.loginflag=false;
        this.router.navigateByUrl("/home");}
    );
  }
}
