import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customerdto } from './customerdto';

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
}
