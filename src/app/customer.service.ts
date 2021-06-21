import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

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
}
