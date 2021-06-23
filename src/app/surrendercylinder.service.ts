import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurrendercylinderService {

  constructor(public http:HttpClient) {

   }

   viewAllSurrenderedCustomer():Observable<any>{

    return this.http.get('http://localhost:8082/egasbookingapp/viewallsurrenderedcustomer');
  }

  viewSurrenderedCustomerByYear(year:number):Observable<any>{

    return this.http.get('http://localhost:8082/egasbookingapp/viewsurrendercustomer/'+year);
  }

  surrenderCylinder(custid:number):Observable<any>{

    return this.http.post('http://localhost:8082/egasbookingapp/surrendercylinder/'+custid, {responseType:'text'});
  }
  
}
