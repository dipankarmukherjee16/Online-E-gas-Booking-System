import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customerdto } from './customerdto';
import { Logindto } from './logindto';

/**
 *          @author: Dipankar Mukherjee        
 *          @version: 1.0   
 *          Description: It is a service that provides the method for 
						             rest API call to the backend web-server
 *          Created at: 21-JUNE-2021
 */

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  userName:string;

  constructor(public http:HttpClient) { }

  viewAllCustomer():Observable<any>{
    return this.http.get('http://localhost:8082/egasbookingapp/viewallcustomer');
  }

  viewCustomerByID(custId:number):Observable<any>{
    return this.http.get('http://localhost:8082/egasbookingapp/viewcustomerbyid/'+custId);
  }

  viewCustomerByCylinderType(cylinderType:string):Observable<any>{
    return this.http.get('http://localhost:8082/egasbookingapp/viewcustomerbycylindertype/'+cylinderType);
  }

  viewCustomerByCity(city:string):Observable<any>{
    return this.http.get('http://localhost:8082/egasbookingapp/viewcustomerbyarea/'+city);
  }

  addCustomer(customer:Customerdto):Observable<any>{
    return this.http.post('http://localhost:8082/egasbookingapp/addcustomer',customer);
  }

  editCustomer(customerId:number, customer:Customerdto):Observable<any>{
    return this.http.put('http://localhost:8082/egasbookingapp/editcustomer/'+customerId, customer );
  }

  linkAadhar(customerId:number, aadharNo:string):Observable<any>{
    return this.http.put('http://localhost:8082/egasbookingapp/linkaadhar/'+customerId+'/'+aadharNo,{responseType:'text'});
  }

  viewAllCylinder():Observable<any>{
    return this.http.get('http://localhost:8082/egasbookingapp/viewallcylinder');
  }

  doLogin(login:Logindto):Observable<any>{
    return this.http.post("http://localhost:8082/egasbookingapp/login",login);

  }
  doLogout():Observable<any>{
    let token:string=JSON.parse(localStorage.getItem("userinfo")).token;
    console.log(token);
    const httpheaders=new HttpHeaders({"token-id":token});
    //httpheaders.set("token-id",token);
    return this.http.get("http://localhost:8082/egasbookingapp/logout",{headers:httpheaders});
  }
  encryptString(pwd:string):string{
    let str:string="";
    for(let idx=0; idx<pwd.length;++idx)
    {
      str += String.fromCharCode( pwd.charCodeAt(idx)+3);
    }
    return str;
  }
}
