import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'protractor';
import { CustomerService } from '../customer.service';
import { Logindto } from '../logindto';
import { StorageService } from '../storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:Logindto=new Logindto();
  
  constructor(public router:Router,public storageservice:StorageService,public customerservice:CustomerService) { 
    
  }

  ngOnInit() {
  }
  doLogin():void{
    this.login.password=this.customerservice.encryptString(this.login.password);
    console.log(this.login.password);
    this.customerservice.doLogin(this.login).subscribe(
      data=>{localStorage.setItem("userinfo",JSON.stringify(data));
      this.storageservice.loginflag=true;
      this.storageservice.username=JSON.parse(localStorage.getItem("userinfo")).userName;
      this.storageservice.role=JSON.parse(localStorage.getItem("userinfo")).role;
      this.router.navigateByUrl("/home");
      this.storageservice.msg=undefined;
      localStorage.setItem("userId", this.login.userId+"");
    },
      error=>{this.storageservice.msg="Incorrect username & password";
      this.storageservice.loginflag=false;
      this.router.navigateByUrl("/login");}
    );
     
  }
}

